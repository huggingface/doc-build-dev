import{S as N2,i as D2,s as L2,e as n,k as d,w as u,t as r,M as G2,c as a,d as t,m as l,a as s,x as m,h as i,b as c,F as e,g as h,y as f,q as _,o as g,B as k,v as W2}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as $}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as X}from"../../chunks/IconCopyLink-7a11ce68.js";function R2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function U2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function X2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function H2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function V2(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,P,A,lt,pe,he,ct,K,pt,ht,D,Ce,ve,Ze,re,Te,Me,ut,ie,we,xe,Ye;return{c(){b=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),j=n("p"),Ue=r("This second option is useful when using "),ke=n("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),P=n("ul"),A=n("li"),lt=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=n("li"),we=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){b=a(M,"P",{});var F=s(b);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),v=l(M),w=a(M,"UL",{});var ze=s(w);x=a(ze,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(ze),B=a(ze,"LI",{});var Ut=s(B);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Pe=l(M),j=a(M,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(M),N=a(M,"P",{});var H=s(N);Xe=i(H,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),H.forEach(t),se=l(M),P=a(M,"UL",{});var de=s(P);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Ht=s(pe);he=i(Ht,"input_ids"),Ht.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Ce=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Jt=s(Te);Me=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Ve=s(ie);we=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Ve,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),de.forEach(t)},m(M,F){h(M,b,F),e(b,z),h(M,v,F),h(M,w,F),e(w,x),e(x,T),e(w,y),e(w,B),e(B,rt),h(M,Pe,F),h(M,j,F),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(M,J,F),h(M,N,F),e(N,Xe),h(M,se,F),h(M,P,F),e(P,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(P,ht),e(P,D),e(D,Ce),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,Me),e(P,ut),e(P,ie),e(ie,we),e(ie,xe),e(xe,Ye)},d(M){M&&t(b),M&&t(v),M&&t(w),M&&t(Pe),M&&t(j),M&&t(J),M&&t(N),M&&t(se),M&&t(P)}}}function Q2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function J2(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,P,A,lt,pe,he,ct,K,pt,ht,D,Ce,ve,Ze,re,Te,Me,ut,ie,we,xe,Ye;return{c(){b=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),j=n("p"),Ue=r("This second option is useful when using "),ke=n("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=d(),P=n("ul"),A=n("li"),lt=r("a single Tensor with "),pe=n("code"),he=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),re=r(" or "),Te=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),ie=n("li"),we=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){b=a(M,"P",{});var F=s(b);z=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),v=l(M),w=a(M,"UL",{});var ze=s(w);x=a(ze,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(ze),B=a(ze,"LI",{});var Ut=s(B);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Pe=l(M),j=a(M,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(M),N=a(M,"P",{});var H=s(N);Xe=i(H,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),H.forEach(t),se=l(M),P=a(M,"UL",{});var de=s(P);A=a(de,"LI",{});var le=s(A);lt=i(le,"a single Tensor with "),pe=a(le,"CODE",{});var Ht=s(pe);he=i(Ht,"input_ids"),Ht.forEach(t),ct=i(le," only and nothing else: "),K=a(le,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),le.forEach(t),ht=l(de),D=a(de,"LI",{});var ce=s(D);Ce=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),re=i(ce," or "),Te=a(ce,"CODE",{});var Jt=s(Te);Me=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),ce.forEach(t),ut=l(de),ie=a(de,"LI",{});var Ve=s(ie);we=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Ve,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),de.forEach(t)},m(M,F){h(M,b,F),e(b,z),h(M,v,F),h(M,w,F),e(w,x),e(x,T),e(w,y),e(w,B),e(B,rt),h(M,Pe,F),h(M,j,F),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(M,J,F),h(M,N,F),e(N,Xe),h(M,se,F),h(M,P,F),e(P,A),e(A,lt),e(A,pe),e(pe,he),e(A,ct),e(A,K),e(K,pt),e(P,ht),e(P,D),e(D,Ce),e(D,ve),e(ve,Ze),e(D,re),e(D,Te),e(Te,Me),e(P,ut),e(P,ie),e(ie,we),e(ie,xe),e(xe,Ye)},d(M){M&&t(b),M&&t(v),M&&t(w),M&&t(Pe),M&&t(j),M&&t(J),M&&t(N),M&&t(se),M&&t(P)}}}function K2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function Z2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function Y2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function e0(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function t0(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function o0(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,se,P,A,lt,pe,he,ct,K,pt,ht,D,Ce,ve,Ze,re,Te,Me,ut,ie,we,xe,Ye,M,F,ze,He,Ut,Z,Xt,bt,H,de,le,Ht,Vt,ce,Qt,Jt,Ve,Kt,Su,ld,Au,Ou,bp,yt,Iu,Cn,cd,Nu,Du,Lu,ti,Gu,Wu,yp,oi,pd,Ru,vp,Sn,Tp,ni,An,hd,Uu,Xu,Zt,Hu,ud,Vu,Qu,md,Ju,Ku,Mp,On,wp,Yt,So,fd,In,Zu,_d,Yu,xp,vt,em,Nn,tm,om,gd,nm,am,zp,ai,sm,qp,si,kd,rm,Bp,eo,Ao,bd,Dn,im,yd,dm,$p,et,lm,vd,cm,pm,Td,hm,um,Md,mm,fm,Fp,Oo,_m,ri,gm,km,jp,ii,wd,bm,Ep,Ln,Pp,di,Gn,xd,ym,vm,qe,Tm,zd,Mm,wm,qd,xm,zm,Bd,qm,Bm,$d,$m,Fm,Fd,jm,Em,Cp,Wn,Sp,to,Io,jd,Rn,Pm,Ed,Cm,Ap,Be,Un,Sm,oo,Am,li,Om,Im,Xn,Nm,Dm,Lm,no,Gm,ci,Wm,Rm,pi,Um,Xm,Hm,Pd,Vm,Qm,Hn,Op,ao,No,Cd,Vn,Jm,Sd,Km,Ip,G,Qn,Zm,Ad,Ym,ef,mt,tf,hi,of,nf,ui,af,sf,Jn,rf,df,lf,Kn,cf,Od,pf,hf,uf,Id,mf,ff,Zn,_f,Do,Yn,gf,Nd,kf,bf,tt,ea,yf,ta,vf,Dd,Tf,Mf,wf,oa,na,Ld,xf,zf,Gd,qf,Bf,aa,Wd,$f,Ff,Rd,jf,Ef,Ud,Pf,Np,so,Lo,Xd,sa,Cf,Hd,Sf,Dp,C,ra,Af,ro,Of,Vd,If,Nf,ia,Df,Lf,Gf,Tt,mi,Wf,Rf,fi,Uf,Xf,_i,Hf,Vf,Qf,da,Jf,Qd,Kf,Zf,Yf,Jd,e_,t_,la,o_,Se,ca,n_,Kd,a_,s_,pa,r_,Zd,i_,d_,l_,ha,ua,Yd,c_,p_,el,h_,u_,ma,tl,m_,f_,ol,__,g_,nl,k_,b_,Go,fa,y_,al,v_,T_,Wo,_a,M_,sl,w_,x_,Ro,ga,z_,rl,q_,Lp,io,Uo,il,ka,B_,dl,$_,Gp,S,ba,F_,ya,j_,va,E_,P_,C_,Ta,S_,gi,A_,O_,I_,ll,N_,D_,Ma,L_,ot,wa,G_,xa,W_,cl,R_,U_,X_,za,qa,pl,H_,V_,hl,Q_,J_,Ba,ul,K_,Z_,ml,Y_,eg,fl,tg,og,Xo,$a,ng,_l,ag,sg,Ho,Fa,rg,ja,ig,gl,dg,lg,cg,Vo,Ea,pg,kl,hg,ug,Qo,Pa,mg,bl,fg,Wp,lo,Jo,yl,Ca,_g,vl,gg,Rp,W,Sa,kg,co,bg,Tl,yg,vg,Aa,Tg,Mg,wg,Oa,xg,ki,zg,qg,Bg,Ml,$g,Fg,Ia,jg,Ae,Na,Eg,wl,Pg,Cg,Da,Sg,xl,Ag,Og,Ig,La,Ga,zl,Ng,Dg,ql,Lg,Gg,Wa,Bl,Wg,Rg,$l,Ug,Xg,Fl,Hg,Vg,Ko,Ra,Qg,jl,Jg,Kg,Zo,Ua,Zg,El,Yg,Up,po,Yo,Pl,Xa,ek,Cl,tk,Xp,Qe,Ha,ok,Va,nk,bi,ak,sk,rk,Qa,ik,Ja,dk,lk,ck,Oe,Ka,pk,ho,hk,yi,uk,mk,Sl,fk,_k,gk,en,kk,Al,bk,yk,Za,Hp,uo,tn,Ol,Ya,vk,Il,Tk,Vp,Je,es,Mk,ts,wk,vi,xk,zk,qk,os,Bk,ns,$k,Fk,jk,Y,as,Ek,mo,Pk,Ti,Ck,Sk,Nl,Ak,Ok,Ik,on,Nk,Dl,Dk,Lk,ss,Gk,Ll,Wk,Rk,rs,Qp,fo,nn,Gl,is,Uk,Wl,Xk,Jp,$e,ds,Hk,_o,Vk,Rl,Qk,Jk,Ul,Kk,Zk,Yk,ls,eb,Mi,tb,ob,nb,cs,ab,ps,sb,rb,ib,ue,hs,db,go,lb,wi,cb,pb,Xl,hb,ub,mb,an,fb,Hl,_b,gb,us,kb,ms,Kp,ko,sn,Vl,fs,bb,Ql,yb,Zp,Fe,_s,vb,Jl,Tb,Mb,gs,wb,xi,xb,zb,qb,ks,Bb,bs,$b,Fb,jb,L,ys,Eb,bo,Pb,zi,Cb,Sb,Kl,Ab,Ob,Ib,rn,Nb,Zl,Db,Lb,vs,Gb,Ts,Wb,Yl,Rb,Ub,Ms,Xb,ws,Yp,yo,dn,ec,xs,Hb,tc,Vb,eh,vo,zs,Qb,Mt,qs,Jb,oc,Kb,Zb,Bs,th,To,ln,nc,$s,Yb,ac,ey,oh,je,Fs,ty,js,oy,qi,ny,ay,sy,Es,ry,Ps,iy,dy,ly,cn,cy,Ie,Cs,py,Mo,hy,Bi,uy,my,sc,fy,_y,gy,pn,ky,rc,by,yy,Ss,nh,wo,hn,ic,As,vy,dc,Ty,ah,Ee,Os,My,Is,wy,$i,xy,zy,qy,Ns,By,Ds,$y,Fy,jy,un,Ey,ee,Ls,Py,xo,Cy,Fi,Sy,Ay,lc,Oy,Iy,Ny,mn,Dy,cc,Ly,Gy,Gs,Wy,pc,Ry,Uy,Ws,sh,zo,fn,hc,Rs,Xy,uc,Hy,rh,R,Us,Vy,Xs,Qy,ji,Jy,Ky,Zy,Hs,Yy,Vs,ev,tv,ov,mc,nv,av,ft,fc,Qs,sv,rv,_c,Js,iv,dv,gc,Ks,lv,cv,kc,Zs,pv,hv,Ne,Ys,uv,qo,mv,bc,fv,_v,yc,gv,kv,bv,_n,yv,vc,vv,Tv,er,Mv,wt,tr,wv,Tc,xv,zv,or,qv,xt,nr,Bv,Mc,$v,Fv,ar,ih,Bo,gn,wc,sr,jv,xc,Ev,dh,U,rr,Pv,ir,Cv,Ei,Sv,Av,Ov,dr,Iv,lr,Nv,Dv,Lv,zc,Gv,Wv,_t,qc,cr,Rv,Uv,Bc,pr,Xv,Hv,$c,hr,Vv,Qv,Fc,ur,Jv,Kv,te,mr,Zv,$o,Yv,jc,e1,t1,Ec,o1,n1,a1,kn,s1,Pc,r1,i1,fr,d1,Cc,l1,c1,_r,p1,zt,gr,h1,Sc,u1,m1,kr,f1,qt,br,_1,Ac,g1,k1,yr,lh,Fo,bn,Oc,vr,b1,Ic,y1,ch,O,Tr,v1,Nc,T1,M1,Mr,w1,Pi,x1,z1,q1,wr,B1,xr,$1,F1,j1,Dc,E1,P1,gt,Lc,zr,C1,S1,Gc,qr,A1,O1,Wc,Br,I1,N1,Rc,$r,D1,L1,De,Fr,G1,jo,W1,Uc,R1,U1,Xc,X1,H1,V1,yn,Q1,Hc,J1,K1,jr,Z1,Bt,Er,Y1,Vc,eT,tT,Pr,oT,$t,Cr,nT,Qc,aT,sT,Sr,ph,Eo,vn,Jc,Ar,rT,Kc,iT,hh,I,Or,dT,Po,lT,Zc,cT,pT,Yc,hT,uT,mT,Ir,fT,Ci,_T,gT,kT,Nr,bT,Dr,yT,vT,TT,ep,MT,wT,kt,tp,Lr,xT,zT,op,Gr,qT,BT,np,Wr,$T,FT,ap,Rr,jT,ET,Le,Ur,PT,Co,CT,sp,ST,AT,rp,OT,IT,NT,Tn,DT,ip,LT,GT,Xr,WT,Ft,Hr,RT,dp,UT,XT,Vr,HT,jt,Qr,VT,lp,QT,JT,Jr,uh;return T=new X({}),se=new X({}),He=new X({}),Sn=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),On=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),In=new X({}),Dn=new X({}),Ln=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Wn=new $({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948"
article_ar = "\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627."

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50-many-to-many-mmt")

# translate Hindi to French
tokenizer.src_lang = "hi_IN"
encoded_hi = tokenizer(article_hi, return_tensors="pt")
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id["fr_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "Le chef de l 'ONU affirme qu 'il n 'y a pas de solution militaire en Syria."

# translate Arabic to English
tokenizer.src_lang = "ar_AR"
encoded_ar = tokenizer(article_ar, return_tensors="pt")
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id["en_XX"])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=True)
# => "The Secretary-General of the United Nations says there is no military solution in Syria."`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

article_hi = <span class="hljs-string">&quot;\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0930\u093E\u0937\u094D\u091F\u094D\u0930 \u0915\u0947 \u092A\u094D\u0930\u092E\u0941\u0916 \u0915\u093E \u0915\u0939\u0928\u093E \u0939\u0948 \u0915\u093F \u0938\u0940\u0930\u093F\u092F\u093E \u092E\u0947\u0902 \u0915\u094B\u0908 \u0938\u0948\u0928\u094D\u092F \u0938\u092E\u093E\u0927\u093E\u0928 \u0928\u0939\u0940\u0902 \u0939\u0948&quot;</span>
article_ar = <span class="hljs-string">&quot;\u0627\u0644\u0623\u0645\u064A\u0646 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0623\u0645\u0645 \u0627\u0644\u0645\u062A\u062D\u062F\u0629 \u064A\u0642\u0648\u0644 \u0625\u0646\u0647 \u0644\u0627 \u064A\u0648\u062C\u062F \u062D\u0644 \u0639\u0633\u0643\u0631\u064A \u0641\u064A \u0633\u0648\u0631\u064A\u0627.&quot;</span>

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50-many-to-many-mmt&quot;</span>)

<span class="hljs-comment"># translate Hindi to French</span>
tokenizer.src_lang = <span class="hljs-string">&quot;hi_IN&quot;</span>
encoded_hi = tokenizer(article_hi, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_hi, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;Le chef de l &#x27;ONU affirme qu &#x27;il n &#x27;y a pas de solution militaire en Syria.&quot;</span>

<span class="hljs-comment"># translate Arabic to English</span>
tokenizer.src_lang = <span class="hljs-string">&quot;ar_AR&quot;</span>
encoded_ar = tokenizer(article_ar, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_tokens = model.generate(**encoded_ar, forced_bos_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;en_XX&quot;</span>])
tokenizer.batch_decode(generated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Rn=new X({}),Un=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/configuration_mbart.py#L34",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MBartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MBartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MBartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MBartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MBartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MBartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MBartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MBartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MBartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MBartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MBartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MBartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.MBartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MBartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MBartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Hn=new $({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new X({}),Qn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zn=new $({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new X({}),ra=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),la=new $({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart_fast.py#L162",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart_fast.py#L191",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart_fast.py#L250"}}),ga=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/tokenization_mbart_fast.py#L265"}}),ka=new X({}),ba=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50Tokenizer.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50Tokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MBart50Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ma=new $({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),wa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Fa=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Pa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Ca=new X({}),Sa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MBart50TokenizerFast.src_lang",description:`<strong>src_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"src_lang"},{anchor:"transformers.MBart50TokenizerFast.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.MBart50TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MBart50TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MBart50TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MBart50TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MBart50TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MBart50TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Ia=new $({props:{code:`from transformers import MBart50TokenizerFast

tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),Ua=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Xa=new X({}),Ha=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1134",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1161",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new st({props:{$$slots:{default:[R2]},$$scope:{ctx:E}}}),Za=new $({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new X({}),es=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1251",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1295",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new st({props:{$$slots:{default:[U2]},$$scope:{ctx:E}}}),ss=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro")

example_english_phrase = "42 is the answer"
inputs = tokenizer(example_english_phrase, return_tensors="pt")

# Translate
generated_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
tokenizer.batch_decode(generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;42 is the answer&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Translate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),rs=new $({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new X({}),ds=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1551",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1563",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new st({props:{$$slots:{default:[X2]},$$scope:{ctx:E}}}),us=new $({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),ms=new $({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>`}}),fs=new X({}),_s=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1424",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1437",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MBartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MBartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MBartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new st({props:{$$slots:{default:[H2]},$$scope:{ctx:E}}}),vs=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ts=new $({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Ms=new $({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),ws=new $({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),xs=new X({}),zs=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),qs=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_mbart.py#L1715",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MBartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MBartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MBartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MBartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MBartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MBartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MBartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MBartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new $({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),$s=new X({}),Fs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_tf_mbart.py#L1147",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new st({props:{$$slots:{default:[V2]},$$scope:{ctx:E}}}),Cs=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new st({props:{$$slots:{default:[Q2]},$$scope:{ctx:E}}}),Ss=new $({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),As=new X({}),Os=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_tf_mbart.py#L1234",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new st({props:{$$slots:{default:[J2]},$$scope:{ctx:E}}}),Ls=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MBart uses a specific language id token as the starting token for <code>decoder_input_ids</code> generation that
varies according to source and target language, <em>e.g.</em> 25004 for <em>en_XX</em>, and 25003 for <em>de_DE</em>. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new st({props:{$$slots:{default:[K2]},$$scope:{ctx:E}}}),Gs=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Ws=new $({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Rs=new X({}),Us=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1265",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ys=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new st({props:{$$slots:{default:[Z2]},$$scope:{ctx:E}}}),er=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),tr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),or=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),nr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new X({}),rr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1352",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),mr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new st({props:{$$slots:{default:[Y2]},$$scope:{ctx:E}}}),fr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),_r=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),gr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),br=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new X({}),Tr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1665",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Fr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new st({props:{$$slots:{default:[e0]},$$scope:{ctx:E}}}),jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Er=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Cr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Sr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Ar=new X({}),Or=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1753",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ur=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartConfig"
>MBartConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new st({props:{$$slots:{default:[t0]},$$scope:{ctx:E}}}),Xr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Hr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Qr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15781/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15781/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.mbart.configuration_mbart.MBartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15781/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jr=new $({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){b=n("meta"),z=d(),v=n("h1"),w=n("a"),x=n("span"),u(T.$$.fragment),y=d(),B=n("span"),rt=r("MBart and MBart-50"),Pe=d(),j=n("p"),Ue=n("strong"),ke=r("DISCLAIMER:"),it=r(" If you see something strange, file a "),be=n("a"),ye=r("Github Issue"),dt=r(` and assign
@patrickvonplaten`),Ke=d(),J=n("h2"),N=n("a"),Xe=n("span"),u(se.$$.fragment),P=d(),A=n("span"),lt=r("Overview of MBart"),pe=d(),he=n("p"),ct=r("The MBart model was presented in "),K=n("a"),pt=r("Multilingual Denoising Pre-training for Neural Machine Translation"),ht=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ce=n("p"),ve=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),re=n("p"),Te=r("This model was contributed by "),Me=n("a"),ut=r("valhalla"),ie=r(". The Authors\u2019 code can be found "),we=n("a"),xe=r("here"),Ye=d(),M=n("h3"),F=n("a"),ze=n("span"),u(He.$$.fragment),Ut=d(),Z=n("span"),Xt=r("Training of MBart"),bt=d(),H=n("p"),de=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),ce=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Su=r(". "),ld=n("code"),Au=r("bos"),Ou=r(" is never used."),bp=d(),yt=n("p"),Iu=r("The regular "),Cn=n("a"),cd=n("strong"),Nu=r("call"),Du=r("()"),Lu=r(` will encode source text format, and it should be wrapped
inside the context manager `),ti=n("a"),Gu=r("as_target_tokenizer()"),Wu=r(" to encode target text format."),yp=d(),oi=n("ul"),pd=n("li"),Ru=r("Supervised training"),vp=d(),u(Sn.$$.fragment),Tp=d(),ni=n("ul"),An=n("li"),hd=n("p"),Uu=r("Generation"),Xu=d(),Zt=n("p"),Hu=r("While generating the target text set the "),ud=n("code"),Vu=r("decoder_start_token_id"),Qu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),md=n("em"),Ju=r("facebook/mbart-large-en-ro"),Ku=r(" model."),Mp=d(),u(On.$$.fragment),wp=d(),Yt=n("h2"),So=n("a"),fd=n("span"),u(In.$$.fragment),Zu=d(),_d=n("span"),Yu=r("Overview of MBart-50"),xp=d(),vt=n("p"),em=r("MBart-50 was introduced in the "),Nn=n("a"),tm=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),om=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),gd=n("em"),nm=r("mbart-large-cc25"),am=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),zp=d(),ai=n("p"),sm=r("According to the abstract"),qp=d(),si=n("p"),kd=n("em"),rm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),Bp=d(),eo=n("h3"),Ao=n("a"),bd=n("span"),u(Dn.$$.fragment),im=d(),yd=n("span"),dm=r("Training of MBart-50"),$p=d(),et=n("p"),lm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),vd=n("code"),cm=r("[lang_code] X [eos]"),pm=r(", where "),Td=n("code"),hm=r("lang_code"),um=r(` is source
language id for source text and target language id for target text, with `),Md=n("code"),mm=r("X"),fm=r(` being the source or target text
respectively.`),Fp=d(),Oo=n("p"),_m=r("MBart-50 has its own tokenizer "),ri=n("a"),gm=r("MBart50Tokenizer"),km=r("."),jp=d(),ii=n("ul"),wd=n("li"),bm=r("Supervised training"),Ep=d(),u(Ln.$$.fragment),Pp=d(),di=n("ul"),Gn=n("li"),xd=n("p"),ym=r("Generation"),vm=d(),qe=n("p"),Tm=r("To generate using the mBART-50 multilingual translation models, "),zd=n("code"),Mm=r("eos_token_id"),wm=r(` is used as the
`),qd=n("code"),xm=r("decoder_start_token_id"),zm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Bd=n("em"),qm=r("forced_bos_token_id"),Bm=r(" parameter to the "),$d=n("em"),$m=r("generate"),Fm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=n("em"),jm=r("facebook/mbart-50-large-many-to-many"),Em=r(" checkpoint."),Cp=d(),u(Wn.$$.fragment),Sp=d(),to=n("h2"),Io=n("a"),jd=n("span"),u(Rn.$$.fragment),Pm=d(),Ed=n("span"),Cm=r("MBartConfig"),Ap=d(),Be=n("div"),u(Un.$$.fragment),Sm=d(),oo=n("p"),Am=r("This is the configuration class to store the configuration of a "),li=n("a"),Om=r("MBartModel"),Im=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=n("a"),Nm=r("facebook/mbart-large-cc25"),Dm=r(" architecture."),Lm=d(),no=n("p"),Gm=r("Configuration objects inherit from "),ci=n("a"),Wm=r("PretrainedConfig"),Rm=r(` and can be used to control the model outputs. Read the
documentation from `),pi=n("a"),Um=r("PretrainedConfig"),Xm=r(" for more information."),Hm=d(),Pd=n("p"),Vm=r("Example:"),Qm=d(),u(Hn.$$.fragment),Op=d(),ao=n("h2"),No=n("a"),Cd=n("span"),u(Vn.$$.fragment),Jm=d(),Sd=n("span"),Km=r("MBartTokenizer"),Ip=d(),G=n("div"),u(Qn.$$.fragment),Zm=d(),Ad=n("p"),Ym=r("Construct an MBART tokenizer."),ef=d(),mt=n("p"),tf=r("Adapted from "),hi=n("a"),of=r("RobertaTokenizer"),nf=r(" and "),ui=n("a"),af=r("XLNetTokenizer"),sf=r(`. Based on
`),Jn=n("a"),rf=r("SentencePiece"),df=r("."),lf=d(),Kn=n("p"),cf=r("The tokenization method is "),Od=n("code"),pf=r("<tokens> <eos> <language code>"),hf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),uf=d(),Id=n("p"),mf=r("Examples:"),ff=d(),u(Zn.$$.fragment),_f=d(),Do=n("div"),u(Yn.$$.fragment),gf=d(),Nd=n("p"),kf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),bf=d(),tt=n("div"),u(ea.$$.fragment),yf=d(),ta=n("p"),vf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Dd=n("code"),Tf=r("X"),Mf=r(" represents the sequence:"),wf=d(),oa=n("ul"),na=n("li"),Ld=n("code"),xf=r("input_ids"),zf=r(" (for encoder) "),Gd=n("code"),qf=r("X [eos, src_lang_code]"),Bf=d(),aa=n("li"),Wd=n("code"),$f=r("decoder_input_ids"),Ff=r(": (for decoder) "),Rd=n("code"),jf=r("X [eos, tgt_lang_code]"),Ef=d(),Ud=n("p"),Pf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Np=d(),so=n("h2"),Lo=n("a"),Xd=n("span"),u(sa.$$.fragment),Cf=d(),Hd=n("span"),Sf=r("MBartTokenizerFast"),Dp=d(),C=n("div"),u(ra.$$.fragment),Af=d(),ro=n("p"),Of=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Vd=n("em"),If=r("tokenizers"),Nf=r(` library). Based on
`),ia=n("a"),Df=r("BPE"),Lf=r("."),Gf=d(),Tt=n("p"),mi=n("a"),Wf=r("MBartTokenizerFast"),Rf=r(" is a subclass of "),fi=n("a"),Uf=r("XLMRobertaTokenizerFast"),Xf=r(`. Refer to superclass
`),_i=n("a"),Hf=r("XLMRobertaTokenizerFast"),Vf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Qf=d(),da=n("p"),Jf=r("The tokenization method is "),Qd=n("code"),Kf=r("<tokens> <eos> <language code>"),Zf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Yf=d(),Jd=n("p"),e_=r("Examples:"),t_=d(),u(la.$$.fragment),o_=d(),Se=n("div"),u(ca.$$.fragment),n_=d(),Kd=n("p"),a_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),s_=d(),pa=n("p"),r_=r("An MBART sequence has the following format, where "),Zd=n("code"),i_=r("X"),d_=r(" represents the sequence:"),l_=d(),ha=n("ul"),ua=n("li"),Yd=n("code"),c_=r("input_ids"),p_=r(" (for encoder) "),el=n("code"),h_=r("X [eos, src_lang_code]"),u_=d(),ma=n("li"),tl=n("code"),m_=r("decoder_input_ids"),f_=r(": (for decoder) "),ol=n("code"),__=r("X [eos, tgt_lang_code]"),g_=d(),nl=n("p"),k_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),b_=d(),Go=n("div"),u(fa.$$.fragment),y_=d(),al=n("p"),v_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),T_=d(),Wo=n("div"),u(_a.$$.fragment),M_=d(),sl=n("p"),w_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),x_=d(),Ro=n("div"),u(ga.$$.fragment),z_=d(),rl=n("p"),q_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Lp=d(),io=n("h2"),Uo=n("a"),il=n("span"),u(ka.$$.fragment),B_=d(),dl=n("span"),$_=r("MBart50Tokenizer"),Gp=d(),S=n("div"),u(ba.$$.fragment),F_=d(),ya=n("p"),j_=r("Construct a MBart50 tokenizer. Based on "),va=n("a"),E_=r("SentencePiece"),P_=r("."),C_=d(),Ta=n("p"),S_=r("This tokenizer inherits from "),gi=n("a"),A_=r("PreTrainedTokenizer"),O_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),I_=d(),ll=n("p"),N_=r("Examples:"),D_=d(),u(Ma.$$.fragment),L_=d(),ot=n("div"),u(wa.$$.fragment),G_=d(),xa=n("p"),W_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),cl=n("code"),R_=r("X"),U_=r(" represents the sequence:"),X_=d(),za=n("ul"),qa=n("li"),pl=n("code"),H_=r("input_ids"),V_=r(" (for encoder) "),hl=n("code"),Q_=r("[src_lang_code] X [eos]"),J_=d(),Ba=n("li"),ul=n("code"),K_=r("labels"),Z_=r(": (for decoder) "),ml=n("code"),Y_=r("[tgt_lang_code] X [eos]"),eg=d(),fl=n("p"),tg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),og=d(),Xo=n("div"),u($a.$$.fragment),ng=d(),_l=n("p"),ag=r("Converts a sequence of tokens (strings for sub-words) in a single string."),sg=d(),Ho=n("div"),u(Fa.$$.fragment),rg=d(),ja=n("p"),ig=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gl=n("code"),dg=r("prepare_for_model"),lg=r(" method."),cg=d(),Vo=n("div"),u(Ea.$$.fragment),pg=d(),kl=n("p"),hg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),ug=d(),Qo=n("div"),u(Pa.$$.fragment),mg=d(),bl=n("p"),fg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Wp=d(),lo=n("h2"),Jo=n("a"),yl=n("span"),u(Ca.$$.fragment),_g=d(),vl=n("span"),gg=r("MBart50TokenizerFast"),Rp=d(),W=n("div"),u(Sa.$$.fragment),kg=d(),co=n("p"),bg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Tl=n("em"),yg=r("tokenizers"),vg=r(` library). Based on
`),Aa=n("a"),Tg=r("BPE"),Mg=r("."),wg=d(),Oa=n("p"),xg=r("This tokenizer inherits from "),ki=n("a"),zg=r("PreTrainedTokenizerFast"),qg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bg=d(),Ml=n("p"),$g=r("Examples:"),Fg=d(),u(Ia.$$.fragment),jg=d(),Ae=n("div"),u(Na.$$.fragment),Eg=d(),wl=n("p"),Pg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Cg=d(),Da=n("p"),Sg=r("An MBART-50 sequence has the following format, where "),xl=n("code"),Ag=r("X"),Og=r(" represents the sequence:"),Ig=d(),La=n("ul"),Ga=n("li"),zl=n("code"),Ng=r("input_ids"),Dg=r(" (for encoder) "),ql=n("code"),Lg=r("[src_lang_code] X [eos]"),Gg=d(),Wa=n("li"),Bl=n("code"),Wg=r("labels"),Rg=r(": (for decoder) "),$l=n("code"),Ug=r("[tgt_lang_code] X [eos]"),Xg=d(),Fl=n("p"),Hg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Vg=d(),Ko=n("div"),u(Ra.$$.fragment),Qg=d(),jl=n("p"),Jg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Kg=d(),Zo=n("div"),u(Ua.$$.fragment),Zg=d(),El=n("p"),Yg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Up=d(),po=n("h2"),Yo=n("a"),Pl=n("span"),u(Xa.$$.fragment),ek=d(),Cl=n("span"),tk=r("MBartModel"),Xp=d(),Qe=n("div"),u(Ha.$$.fragment),ok=d(),Va=n("p"),nk=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=n("a"),ak=r("PreTrainedModel"),sk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rk=d(),Qa=n("p"),ik=r("This model is also a PyTorch "),Ja=n("a"),dk=r("torch.nn.Module"),lk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ck=d(),Oe=n("div"),u(Ka.$$.fragment),pk=d(),ho=n("p"),hk=r("The "),yi=n("a"),uk=r("MBartModel"),mk=r(" forward method, overrides the "),Sl=n("code"),fk=r("__call__"),_k=r(" special method."),gk=d(),u(en.$$.fragment),kk=d(),Al=n("p"),bk=r("Example:"),yk=d(),u(Za.$$.fragment),Hp=d(),uo=n("h2"),tn=n("a"),Ol=n("span"),u(Ya.$$.fragment),vk=d(),Il=n("span"),Tk=r("MBartForConditionalGeneration"),Vp=d(),Je=n("div"),u(es.$$.fragment),Mk=d(),ts=n("p"),wk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vi=n("a"),xk=r("PreTrainedModel"),zk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qk=d(),os=n("p"),Bk=r("This model is also a PyTorch "),ns=n("a"),$k=r("torch.nn.Module"),Fk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jk=d(),Y=n("div"),u(as.$$.fragment),Ek=d(),mo=n("p"),Pk=r("The "),Ti=n("a"),Ck=r("MBartForConditionalGeneration"),Sk=r(" forward method, overrides the "),Nl=n("code"),Ak=r("__call__"),Ok=r(" special method."),Ik=d(),u(on.$$.fragment),Nk=d(),Dl=n("p"),Dk=r("Translation example:"),Lk=d(),u(ss.$$.fragment),Gk=d(),Ll=n("p"),Wk=r("Mask filling example:"),Rk=d(),u(rs.$$.fragment),Qp=d(),fo=n("h2"),nn=n("a"),Gl=n("span"),u(is.$$.fragment),Uk=d(),Wl=n("span"),Xk=r("MBartForQuestionAnswering"),Jp=d(),$e=n("div"),u(ds.$$.fragment),Hk=d(),_o=n("p"),Vk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rl=n("code"),Qk=r("span start logits"),Jk=r(" and "),Ul=n("code"),Kk=r("span end logits"),Zk=r(")."),Yk=d(),ls=n("p"),eb=r("This model inherits from "),Mi=n("a"),tb=r("PreTrainedModel"),ob=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nb=d(),cs=n("p"),ab=r("This model is also a PyTorch "),ps=n("a"),sb=r("torch.nn.Module"),rb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ib=d(),ue=n("div"),u(hs.$$.fragment),db=d(),go=n("p"),lb=r("The "),wi=n("a"),cb=r("MBartForQuestionAnswering"),pb=r(" forward method, overrides the "),Xl=n("code"),hb=r("__call__"),ub=r(" special method."),mb=d(),u(an.$$.fragment),fb=d(),Hl=n("p"),_b=r("Example:"),gb=d(),u(us.$$.fragment),kb=d(),u(ms.$$.fragment),Kp=d(),ko=n("h2"),sn=n("a"),Vl=n("span"),u(fs.$$.fragment),bb=d(),Ql=n("span"),yb=r("MBartForSequenceClassification"),Zp=d(),Fe=n("div"),u(_s.$$.fragment),vb=d(),Jl=n("p"),Tb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Mb=d(),gs=n("p"),wb=r("This model inherits from "),xi=n("a"),xb=r("PreTrainedModel"),zb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qb=d(),ks=n("p"),Bb=r("This model is also a PyTorch "),bs=n("a"),$b=r("torch.nn.Module"),Fb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jb=d(),L=n("div"),u(ys.$$.fragment),Eb=d(),bo=n("p"),Pb=r("The "),zi=n("a"),Cb=r("MBartForSequenceClassification"),Sb=r(" forward method, overrides the "),Kl=n("code"),Ab=r("__call__"),Ob=r(" special method."),Ib=d(),u(rn.$$.fragment),Nb=d(),Zl=n("p"),Db=r("Example of single-label classification:"),Lb=d(),u(vs.$$.fragment),Gb=d(),u(Ts.$$.fragment),Wb=d(),Yl=n("p"),Rb=r("Example of multi-label classification:"),Ub=d(),u(Ms.$$.fragment),Xb=d(),u(ws.$$.fragment),Yp=d(),yo=n("h2"),dn=n("a"),ec=n("span"),u(xs.$$.fragment),Hb=d(),tc=n("span"),Vb=r("MBartForCausalLM"),eh=d(),vo=n("div"),u(zs.$$.fragment),Qb=d(),Mt=n("div"),u(qs.$$.fragment),Jb=d(),oc=n("p"),Kb=r("Example:"),Zb=d(),u(Bs.$$.fragment),th=d(),To=n("h2"),ln=n("a"),nc=n("span"),u($s.$$.fragment),Yb=d(),ac=n("span"),ey=r("TFMBartModel"),oh=d(),je=n("div"),u(Fs.$$.fragment),ty=d(),js=n("p"),oy=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=n("a"),ny=r("TFPreTrainedModel"),ay=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy=d(),Es=n("p"),ry=r("This model is also a "),Ps=n("a"),iy=r("tf.keras.Model"),dy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ly=d(),u(cn.$$.fragment),cy=d(),Ie=n("div"),u(Cs.$$.fragment),py=d(),Mo=n("p"),hy=r("The "),Bi=n("a"),uy=r("TFMBartModel"),my=r(" forward method, overrides the "),sc=n("code"),fy=r("__call__"),_y=r(" special method."),gy=d(),u(pn.$$.fragment),ky=d(),rc=n("p"),by=r("Example:"),yy=d(),u(Ss.$$.fragment),nh=d(),wo=n("h2"),hn=n("a"),ic=n("span"),u(As.$$.fragment),vy=d(),dc=n("span"),Ty=r("TFMBartForConditionalGeneration"),ah=d(),Ee=n("div"),u(Os.$$.fragment),My=d(),Is=n("p"),wy=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=n("a"),xy=r("TFPreTrainedModel"),zy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qy=d(),Ns=n("p"),By=r("This model is also a "),Ds=n("a"),$y=r("tf.keras.Model"),Fy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jy=d(),u(un.$$.fragment),Ey=d(),ee=n("div"),u(Ls.$$.fragment),Py=d(),xo=n("p"),Cy=r("The "),Fi=n("a"),Sy=r("TFMBartForConditionalGeneration"),Ay=r(" forward method, overrides the "),lc=n("code"),Oy=r("__call__"),Iy=r(" special method."),Ny=d(),u(mn.$$.fragment),Dy=d(),cc=n("p"),Ly=r("Summarization example:"),Gy=d(),u(Gs.$$.fragment),Wy=d(),pc=n("p"),Ry=r("Mask filling example:"),Uy=d(),u(Ws.$$.fragment),sh=d(),zo=n("h2"),fn=n("a"),hc=n("span"),u(Rs.$$.fragment),Xy=d(),uc=n("span"),Hy=r("FlaxMBartModel"),rh=d(),R=n("div"),u(Us.$$.fragment),Vy=d(),Xs=n("p"),Qy=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ji=n("a"),Jy=r("FlaxPreTrainedModel"),Ky=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zy=d(),Hs=n("p"),Yy=r(`This model is also a Flax Linen
`),Vs=n("a"),ev=r("flax.nn.Module"),tv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ov=d(),mc=n("p"),nv=r("Finally, this model supports inherent JAX features such as:"),av=d(),ft=n("ul"),fc=n("li"),Qs=n("a"),sv=r("Just-In-Time (JIT) compilation"),rv=d(),_c=n("li"),Js=n("a"),iv=r("Automatic Differentiation"),dv=d(),gc=n("li"),Ks=n("a"),lv=r("Vectorization"),cv=d(),kc=n("li"),Zs=n("a"),pv=r("Parallelization"),hv=d(),Ne=n("div"),u(Ys.$$.fragment),uv=d(),qo=n("p"),mv=r("The "),bc=n("code"),fv=r("FlaxMBartPreTrainedModel"),_v=r("forward method, overrides the "),yc=n("code"),gv=r("__call__"),kv=r(" special method."),bv=d(),u(_n.$$.fragment),yv=d(),vc=n("p"),vv=r("Example:"),Tv=d(),u(er.$$.fragment),Mv=d(),wt=n("div"),u(tr.$$.fragment),wv=d(),Tc=n("p"),xv=r("Example:"),zv=d(),u(or.$$.fragment),qv=d(),xt=n("div"),u(nr.$$.fragment),Bv=d(),Mc=n("p"),$v=r("Example:"),Fv=d(),u(ar.$$.fragment),ih=d(),Bo=n("h2"),gn=n("a"),wc=n("span"),u(sr.$$.fragment),jv=d(),xc=n("span"),Ev=r("FlaxMBartForConditionalGeneration"),dh=d(),U=n("div"),u(rr.$$.fragment),Pv=d(),ir=n("p"),Cv=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ei=n("a"),Sv=r("FlaxPreTrainedModel"),Av=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=d(),dr=n("p"),Iv=r(`This model is also a Flax Linen
`),lr=n("a"),Nv=r("flax.nn.Module"),Dv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Lv=d(),zc=n("p"),Gv=r("Finally, this model supports inherent JAX features such as:"),Wv=d(),_t=n("ul"),qc=n("li"),cr=n("a"),Rv=r("Just-In-Time (JIT) compilation"),Uv=d(),Bc=n("li"),pr=n("a"),Xv=r("Automatic Differentiation"),Hv=d(),$c=n("li"),hr=n("a"),Vv=r("Vectorization"),Qv=d(),Fc=n("li"),ur=n("a"),Jv=r("Parallelization"),Kv=d(),te=n("div"),u(mr.$$.fragment),Zv=d(),$o=n("p"),Yv=r("The "),jc=n("code"),e1=r("FlaxMBartPreTrainedModel"),t1=r("forward method, overrides the "),Ec=n("code"),o1=r("__call__"),n1=r(" special method."),a1=d(),u(kn.$$.fragment),s1=d(),Pc=n("p"),r1=r("Summarization example:"),i1=d(),u(fr.$$.fragment),d1=d(),Cc=n("p"),l1=r("Mask filling example:"),c1=d(),u(_r.$$.fragment),p1=d(),zt=n("div"),u(gr.$$.fragment),h1=d(),Sc=n("p"),u1=r("Example:"),m1=d(),u(kr.$$.fragment),f1=d(),qt=n("div"),u(br.$$.fragment),_1=d(),Ac=n("p"),g1=r("Example:"),k1=d(),u(yr.$$.fragment),lh=d(),Fo=n("h2"),bn=n("a"),Oc=n("span"),u(vr.$$.fragment),b1=d(),Ic=n("span"),y1=r("FlaxMBartForSequenceClassification"),ch=d(),O=n("div"),u(Tr.$$.fragment),v1=d(),Nc=n("p"),T1=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),M1=d(),Mr=n("p"),w1=r("This model inherits from "),Pi=n("a"),x1=r("FlaxPreTrainedModel"),z1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q1=d(),wr=n("p"),B1=r(`This model is also a Flax Linen
`),xr=n("a"),$1=r("flax.nn.Module"),F1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),j1=d(),Dc=n("p"),E1=r("Finally, this model supports inherent JAX features such as:"),P1=d(),gt=n("ul"),Lc=n("li"),zr=n("a"),C1=r("Just-In-Time (JIT) compilation"),S1=d(),Gc=n("li"),qr=n("a"),A1=r("Automatic Differentiation"),O1=d(),Wc=n("li"),Br=n("a"),I1=r("Vectorization"),N1=d(),Rc=n("li"),$r=n("a"),D1=r("Parallelization"),L1=d(),De=n("div"),u(Fr.$$.fragment),G1=d(),jo=n("p"),W1=r("The "),Uc=n("code"),R1=r("FlaxMBartPreTrainedModel"),U1=r("forward method, overrides the "),Xc=n("code"),X1=r("__call__"),H1=r(" special method."),V1=d(),u(yn.$$.fragment),Q1=d(),Hc=n("p"),J1=r("Example:"),K1=d(),u(jr.$$.fragment),Z1=d(),Bt=n("div"),u(Er.$$.fragment),Y1=d(),Vc=n("p"),eT=r("Example:"),tT=d(),u(Pr.$$.fragment),oT=d(),$t=n("div"),u(Cr.$$.fragment),nT=d(),Qc=n("p"),aT=r("Example:"),sT=d(),u(Sr.$$.fragment),ph=d(),Eo=n("h2"),vn=n("a"),Jc=n("span"),u(Ar.$$.fragment),rT=d(),Kc=n("span"),iT=r("FlaxMBartForQuestionAnswering"),hh=d(),I=n("div"),u(Or.$$.fragment),dT=d(),Po=n("p"),lT=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zc=n("code"),cT=r("span start logits"),pT=r(" and "),Yc=n("code"),hT=r("span end logits"),uT=r(")."),mT=d(),Ir=n("p"),fT=r("This model inherits from "),Ci=n("a"),_T=r("FlaxPreTrainedModel"),gT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT=d(),Nr=n("p"),bT=r(`This model is also a Flax Linen
`),Dr=n("a"),yT=r("flax.nn.Module"),vT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),TT=d(),ep=n("p"),MT=r("Finally, this model supports inherent JAX features such as:"),wT=d(),kt=n("ul"),tp=n("li"),Lr=n("a"),xT=r("Just-In-Time (JIT) compilation"),zT=d(),op=n("li"),Gr=n("a"),qT=r("Automatic Differentiation"),BT=d(),np=n("li"),Wr=n("a"),$T=r("Vectorization"),FT=d(),ap=n("li"),Rr=n("a"),jT=r("Parallelization"),ET=d(),Le=n("div"),u(Ur.$$.fragment),PT=d(),Co=n("p"),CT=r("The "),sp=n("code"),ST=r("FlaxMBartPreTrainedModel"),AT=r("forward method, overrides the "),rp=n("code"),OT=r("__call__"),IT=r(" special method."),NT=d(),u(Tn.$$.fragment),DT=d(),ip=n("p"),LT=r("Example:"),GT=d(),u(Xr.$$.fragment),WT=d(),Ft=n("div"),u(Hr.$$.fragment),RT=d(),dp=n("p"),UT=r("Example:"),XT=d(),u(Vr.$$.fragment),HT=d(),jt=n("div"),u(Qr.$$.fragment),VT=d(),lp=n("p"),QT=r("Example:"),JT=d(),u(Jr.$$.fragment),this.h()},l(o){const p=G2('[data-svelte="svelte-1phssyn"]',document.head);b=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Kr=s(v);w=a(Kr,"A",{id:!0,class:!0,href:!0});var cp=s(w);x=a(cp,"SPAN",{});var pp=s(x);m(T.$$.fragment,pp),pp.forEach(t),cp.forEach(t),y=l(Kr),B=a(Kr,"SPAN",{});var hp=s(B);rt=i(hp,"MBart and MBart-50"),hp.forEach(t),Kr.forEach(t),Pe=l(o),j=a(o,"P",{});var Mn=s(j);Ue=a(Mn,"STRONG",{});var up=s(Ue);ke=i(up,"DISCLAIMER:"),up.forEach(t),it=i(Mn," If you see something strange, file a "),be=a(Mn,"A",{href:!0,rel:!0});var mp=s(be);ye=i(mp,"Github Issue"),mp.forEach(t),dt=i(Mn,` and assign
@patrickvonplaten`),Mn.forEach(t),Ke=l(o),J=a(o,"H2",{class:!0});var Zr=s(J);N=a(Zr,"A",{id:!0,class:!0,href:!0});var fp=s(N);Xe=a(fp,"SPAN",{});var _p=s(Xe);m(se.$$.fragment,_p),_p.forEach(t),fp.forEach(t),P=l(Zr),A=a(Zr,"SPAN",{});var gp=s(A);lt=i(gp,"Overview of MBart"),gp.forEach(t),Zr.forEach(t),pe=l(o),he=a(o,"P",{});var Yr=s(he);ct=i(Yr,"The MBart model was presented in "),K=a(Yr,"A",{href:!0,rel:!0});var ZT=s(K);pt=i(ZT,"Multilingual Denoising Pre-training for Neural Machine Translation"),ZT.forEach(t),ht=i(Yr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Yr.forEach(t),D=l(o),Ce=a(o,"P",{});var YT=s(Ce);ve=i(YT,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),YT.forEach(t),Ze=l(o),re=a(o,"P",{});var kp=s(re);Te=i(kp,"This model was contributed by "),Me=a(kp,"A",{href:!0,rel:!0});var eM=s(Me);ut=i(eM,"valhalla"),eM.forEach(t),ie=i(kp,". The Authors\u2019 code can be found "),we=a(kp,"A",{href:!0,rel:!0});var tM=s(we);xe=i(tM,"here"),tM.forEach(t),kp.forEach(t),Ye=l(o),M=a(o,"H3",{class:!0});var mh=s(M);F=a(mh,"A",{id:!0,class:!0,href:!0});var oM=s(F);ze=a(oM,"SPAN",{});var nM=s(ze);m(He.$$.fragment,nM),nM.forEach(t),oM.forEach(t),Ut=l(mh),Z=a(mh,"SPAN",{});var aM=s(Z);Xt=i(aM,"Training of MBart"),aM.forEach(t),mh.forEach(t),bt=l(o),H=a(o,"P",{});var Et=s(H);de=i(Et,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),le=a(Et,"CODE",{});var sM=s(le);Ht=i(sM,"X [eos, src_lang_code]"),sM.forEach(t),Vt=i(Et," where "),ce=a(Et,"CODE",{});var rM=s(ce);Qt=i(rM,"X"),rM.forEach(t),Jt=i(Et,` is the source text. The
target text format is `),Ve=a(Et,"CODE",{});var iM=s(Ve);Kt=i(iM,"[tgt_lang_code] X [eos]"),iM.forEach(t),Su=i(Et,". "),ld=a(Et,"CODE",{});var dM=s(ld);Au=i(dM,"bos"),dM.forEach(t),Ou=i(Et," is never used."),Et.forEach(t),bp=l(o),yt=a(o,"P",{});var Si=s(yt);Iu=i(Si,"The regular "),Cn=a(Si,"A",{href:!0});var KT=s(Cn);cd=a(KT,"STRONG",{});var lM=s(cd);Nu=i(lM,"call"),lM.forEach(t),Du=i(KT,"()"),KT.forEach(t),Lu=i(Si,` will encode source text format, and it should be wrapped
inside the context manager `),ti=a(Si,"A",{href:!0});var cM=s(ti);Gu=i(cM,"as_target_tokenizer()"),cM.forEach(t),Wu=i(Si," to encode target text format."),Si.forEach(t),yp=l(o),oi=a(o,"UL",{});var pM=s(oi);pd=a(pM,"LI",{});var hM=s(pd);Ru=i(hM,"Supervised training"),hM.forEach(t),pM.forEach(t),vp=l(o),m(Sn.$$.fragment,o),Tp=l(o),ni=a(o,"UL",{});var uM=s(ni);An=a(uM,"LI",{});var fh=s(An);hd=a(fh,"P",{});var mM=s(hd);Uu=i(mM,"Generation"),mM.forEach(t),Xu=l(fh),Zt=a(fh,"P",{});var Ai=s(Zt);Hu=i(Ai,"While generating the target text set the "),ud=a(Ai,"CODE",{});var fM=s(ud);Vu=i(fM,"decoder_start_token_id"),fM.forEach(t),Qu=i(Ai,` to the target language id. The following
example shows how to translate English to Romanian using the `),md=a(Ai,"EM",{});var _M=s(md);Ju=i(_M,"facebook/mbart-large-en-ro"),_M.forEach(t),Ku=i(Ai," model."),Ai.forEach(t),fh.forEach(t),uM.forEach(t),Mp=l(o),m(On.$$.fragment,o),wp=l(o),Yt=a(o,"H2",{class:!0});var _h=s(Yt);So=a(_h,"A",{id:!0,class:!0,href:!0});var gM=s(So);fd=a(gM,"SPAN",{});var kM=s(fd);m(In.$$.fragment,kM),kM.forEach(t),gM.forEach(t),Zu=l(_h),_d=a(_h,"SPAN",{});var bM=s(_d);Yu=i(bM,"Overview of MBart-50"),bM.forEach(t),_h.forEach(t),xp=l(o),vt=a(o,"P",{});var Oi=s(vt);em=i(Oi,"MBart-50 was introduced in the "),Nn=a(Oi,"A",{href:!0,rel:!0});var yM=s(Nn);tm=i(yM,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),yM.forEach(t),om=i(Oi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),gd=a(Oi,"EM",{});var vM=s(gd);nm=i(vM,"mbart-large-cc25"),vM.forEach(t),am=i(Oi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Oi.forEach(t),zp=l(o),ai=a(o,"P",{});var TM=s(ai);sm=i(TM,"According to the abstract"),TM.forEach(t),qp=l(o),si=a(o,"P",{});var MM=s(si);kd=a(MM,"EM",{});var wM=s(kd);rm=i(wM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),wM.forEach(t),MM.forEach(t),Bp=l(o),eo=a(o,"H3",{class:!0});var gh=s(eo);Ao=a(gh,"A",{id:!0,class:!0,href:!0});var xM=s(Ao);bd=a(xM,"SPAN",{});var zM=s(bd);m(Dn.$$.fragment,zM),zM.forEach(t),xM.forEach(t),im=l(gh),yd=a(gh,"SPAN",{});var qM=s(yd);dm=i(qM,"Training of MBart-50"),qM.forEach(t),gh.forEach(t),$p=l(o),et=a(o,"P",{});var wn=s(et);lm=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),vd=a(wn,"CODE",{});var BM=s(vd);cm=i(BM,"[lang_code] X [eos]"),BM.forEach(t),pm=i(wn,", where "),Td=a(wn,"CODE",{});var $M=s(Td);hm=i($M,"lang_code"),$M.forEach(t),um=i(wn,` is source
language id for source text and target language id for target text, with `),Md=a(wn,"CODE",{});var FM=s(Md);mm=i(FM,"X"),FM.forEach(t),fm=i(wn,` being the source or target text
respectively.`),wn.forEach(t),Fp=l(o),Oo=a(o,"P",{});var kh=s(Oo);_m=i(kh,"MBart-50 has its own tokenizer "),ri=a(kh,"A",{href:!0});var jM=s(ri);gm=i(jM,"MBart50Tokenizer"),jM.forEach(t),km=i(kh,"."),kh.forEach(t),jp=l(o),ii=a(o,"UL",{});var EM=s(ii);wd=a(EM,"LI",{});var PM=s(wd);bm=i(PM,"Supervised training"),PM.forEach(t),EM.forEach(t),Ep=l(o),m(Ln.$$.fragment,o),Pp=l(o),di=a(o,"UL",{});var CM=s(di);Gn=a(CM,"LI",{});var bh=s(Gn);xd=a(bh,"P",{});var SM=s(xd);ym=i(SM,"Generation"),SM.forEach(t),vm=l(bh),qe=a(bh,"P",{});var nt=s(qe);Tm=i(nt,"To generate using the mBART-50 multilingual translation models, "),zd=a(nt,"CODE",{});var AM=s(zd);Mm=i(AM,"eos_token_id"),AM.forEach(t),wm=i(nt,` is used as the
`),qd=a(nt,"CODE",{});var OM=s(qd);xm=i(OM,"decoder_start_token_id"),OM.forEach(t),zm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),Bd=a(nt,"EM",{});var IM=s(Bd);qm=i(IM,"forced_bos_token_id"),IM.forEach(t),Bm=i(nt," parameter to the "),$d=a(nt,"EM",{});var NM=s($d);$m=i(NM,"generate"),NM.forEach(t),Fm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),Fd=a(nt,"EM",{});var DM=s(Fd);jm=i(DM,"facebook/mbart-50-large-many-to-many"),DM.forEach(t),Em=i(nt," checkpoint."),nt.forEach(t),bh.forEach(t),CM.forEach(t),Cp=l(o),m(Wn.$$.fragment,o),Sp=l(o),to=a(o,"H2",{class:!0});var yh=s(to);Io=a(yh,"A",{id:!0,class:!0,href:!0});var LM=s(Io);jd=a(LM,"SPAN",{});var GM=s(jd);m(Rn.$$.fragment,GM),GM.forEach(t),LM.forEach(t),Pm=l(yh),Ed=a(yh,"SPAN",{});var WM=s(Ed);Cm=i(WM,"MBartConfig"),WM.forEach(t),yh.forEach(t),Ap=l(o),Be=a(o,"DIV",{class:!0});var Pt=s(Be);m(Un.$$.fragment,Pt),Sm=l(Pt),oo=a(Pt,"P",{});var Ii=s(oo);Am=i(Ii,"This is the configuration class to store the configuration of a "),li=a(Ii,"A",{href:!0});var RM=s(li);Om=i(RM,"MBartModel"),RM.forEach(t),Im=i(Ii,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=a(Ii,"A",{href:!0,rel:!0});var UM=s(Xn);Nm=i(UM,"facebook/mbart-large-cc25"),UM.forEach(t),Dm=i(Ii," architecture."),Ii.forEach(t),Lm=l(Pt),no=a(Pt,"P",{});var Ni=s(no);Gm=i(Ni,"Configuration objects inherit from "),ci=a(Ni,"A",{href:!0});var XM=s(ci);Wm=i(XM,"PretrainedConfig"),XM.forEach(t),Rm=i(Ni,` and can be used to control the model outputs. Read the
documentation from `),pi=a(Ni,"A",{href:!0});var HM=s(pi);Um=i(HM,"PretrainedConfig"),HM.forEach(t),Xm=i(Ni," for more information."),Ni.forEach(t),Hm=l(Pt),Pd=a(Pt,"P",{});var VM=s(Pd);Vm=i(VM,"Example:"),VM.forEach(t),Qm=l(Pt),m(Hn.$$.fragment,Pt),Pt.forEach(t),Op=l(o),ao=a(o,"H2",{class:!0});var vh=s(ao);No=a(vh,"A",{id:!0,class:!0,href:!0});var QM=s(No);Cd=a(QM,"SPAN",{});var JM=s(Cd);m(Vn.$$.fragment,JM),JM.forEach(t),QM.forEach(t),Jm=l(vh),Sd=a(vh,"SPAN",{});var KM=s(Sd);Km=i(KM,"MBartTokenizer"),KM.forEach(t),vh.forEach(t),Ip=l(o),G=a(o,"DIV",{class:!0});var me=s(G);m(Qn.$$.fragment,me),Zm=l(me),Ad=a(me,"P",{});var ZM=s(Ad);Ym=i(ZM,"Construct an MBART tokenizer."),ZM.forEach(t),ef=l(me),mt=a(me,"P",{});var xn=s(mt);tf=i(xn,"Adapted from "),hi=a(xn,"A",{href:!0});var YM=s(hi);of=i(YM,"RobertaTokenizer"),YM.forEach(t),nf=i(xn," and "),ui=a(xn,"A",{href:!0});var ew=s(ui);af=i(ew,"XLNetTokenizer"),ew.forEach(t),sf=i(xn,`. Based on
`),Jn=a(xn,"A",{href:!0,rel:!0});var tw=s(Jn);rf=i(tw,"SentencePiece"),tw.forEach(t),df=i(xn,"."),xn.forEach(t),lf=l(me),Kn=a(me,"P",{});var Th=s(Kn);cf=i(Th,"The tokenization method is "),Od=a(Th,"CODE",{});var ow=s(Od);pf=i(ow,"<tokens> <eos> <language code>"),ow.forEach(t),hf=i(Th," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Th.forEach(t),uf=l(me),Id=a(me,"P",{});var nw=s(Id);mf=i(nw,"Examples:"),nw.forEach(t),ff=l(me),m(Zn.$$.fragment,me),_f=l(me),Do=a(me,"DIV",{class:!0});var Mh=s(Do);m(Yn.$$.fragment,Mh),gf=l(Mh),Nd=a(Mh,"P",{});var aw=s(Nd);kf=i(aw,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),aw.forEach(t),Mh.forEach(t),bf=l(me),tt=a(me,"DIV",{class:!0});var zn=s(tt);m(ea.$$.fragment,zn),yf=l(zn),ta=a(zn,"P",{});var wh=s(ta);vf=i(wh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Dd=a(wh,"CODE",{});var sw=s(Dd);Tf=i(sw,"X"),sw.forEach(t),Mf=i(wh," represents the sequence:"),wh.forEach(t),wf=l(zn),oa=a(zn,"UL",{});var xh=s(oa);na=a(xh,"LI",{});var zh=s(na);Ld=a(zh,"CODE",{});var rw=s(Ld);xf=i(rw,"input_ids"),rw.forEach(t),zf=i(zh," (for encoder) "),Gd=a(zh,"CODE",{});var iw=s(Gd);qf=i(iw,"X [eos, src_lang_code]"),iw.forEach(t),zh.forEach(t),Bf=l(xh),aa=a(xh,"LI",{});var qh=s(aa);Wd=a(qh,"CODE",{});var dw=s(Wd);$f=i(dw,"decoder_input_ids"),dw.forEach(t),Ff=i(qh,": (for decoder) "),Rd=a(qh,"CODE",{});var lw=s(Rd);jf=i(lw,"X [eos, tgt_lang_code]"),lw.forEach(t),qh.forEach(t),xh.forEach(t),Ef=l(zn),Ud=a(zn,"P",{});var cw=s(Ud);Pf=i(cw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),cw.forEach(t),zn.forEach(t),me.forEach(t),Np=l(o),so=a(o,"H2",{class:!0});var Bh=s(so);Lo=a(Bh,"A",{id:!0,class:!0,href:!0});var pw=s(Lo);Xd=a(pw,"SPAN",{});var hw=s(Xd);m(sa.$$.fragment,hw),hw.forEach(t),pw.forEach(t),Cf=l(Bh),Hd=a(Bh,"SPAN",{});var uw=s(Hd);Sf=i(uw,"MBartTokenizerFast"),uw.forEach(t),Bh.forEach(t),Dp=l(o),C=a(o,"DIV",{class:!0});var V=s(C);m(ra.$$.fragment,V),Af=l(V),ro=a(V,"P",{});var Di=s(ro);Of=i(Di,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Vd=a(Di,"EM",{});var mw=s(Vd);If=i(mw,"tokenizers"),mw.forEach(t),Nf=i(Di,` library). Based on
`),ia=a(Di,"A",{href:!0,rel:!0});var fw=s(ia);Df=i(fw,"BPE"),fw.forEach(t),Lf=i(Di,"."),Di.forEach(t),Gf=l(V),Tt=a(V,"P",{});var ei=s(Tt);mi=a(ei,"A",{href:!0});var _w=s(mi);Wf=i(_w,"MBartTokenizerFast"),_w.forEach(t),Rf=i(ei," is a subclass of "),fi=a(ei,"A",{href:!0});var gw=s(fi);Uf=i(gw,"XLMRobertaTokenizerFast"),gw.forEach(t),Xf=i(ei,`. Refer to superclass
`),_i=a(ei,"A",{href:!0});var kw=s(_i);Hf=i(kw,"XLMRobertaTokenizerFast"),kw.forEach(t),Vf=i(ei,` for usage examples and documentation concerning the initialization parameters and other
methods.`),ei.forEach(t),Qf=l(V),da=a(V,"P",{});var $h=s(da);Jf=i($h,"The tokenization method is "),Qd=a($h,"CODE",{});var bw=s(Qd);Kf=i(bw,"<tokens> <eos> <language code>"),bw.forEach(t),Zf=i($h," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),$h.forEach(t),Yf=l(V),Jd=a(V,"P",{});var yw=s(Jd);e_=i(yw,"Examples:"),yw.forEach(t),t_=l(V),m(la.$$.fragment,V),o_=l(V),Se=a(V,"DIV",{class:!0});var Ct=s(Se);m(ca.$$.fragment,Ct),n_=l(Ct),Kd=a(Ct,"P",{});var vw=s(Kd);a_=i(vw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),vw.forEach(t),s_=l(Ct),pa=a(Ct,"P",{});var Fh=s(pa);r_=i(Fh,"An MBART sequence has the following format, where "),Zd=a(Fh,"CODE",{});var Tw=s(Zd);i_=i(Tw,"X"),Tw.forEach(t),d_=i(Fh," represents the sequence:"),Fh.forEach(t),l_=l(Ct),ha=a(Ct,"UL",{});var jh=s(ha);ua=a(jh,"LI",{});var Eh=s(ua);Yd=a(Eh,"CODE",{});var Mw=s(Yd);c_=i(Mw,"input_ids"),Mw.forEach(t),p_=i(Eh," (for encoder) "),el=a(Eh,"CODE",{});var ww=s(el);h_=i(ww,"X [eos, src_lang_code]"),ww.forEach(t),Eh.forEach(t),u_=l(jh),ma=a(jh,"LI",{});var Ph=s(ma);tl=a(Ph,"CODE",{});var xw=s(tl);m_=i(xw,"decoder_input_ids"),xw.forEach(t),f_=i(Ph,": (for decoder) "),ol=a(Ph,"CODE",{});var zw=s(ol);__=i(zw,"X [eos, tgt_lang_code]"),zw.forEach(t),Ph.forEach(t),jh.forEach(t),g_=l(Ct),nl=a(Ct,"P",{});var qw=s(nl);k_=i(qw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),qw.forEach(t),Ct.forEach(t),b_=l(V),Go=a(V,"DIV",{class:!0});var Ch=s(Go);m(fa.$$.fragment,Ch),y_=l(Ch),al=a(Ch,"P",{});var Bw=s(al);v_=i(Bw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),Bw.forEach(t),Ch.forEach(t),T_=l(V),Wo=a(V,"DIV",{class:!0});var Sh=s(Wo);m(_a.$$.fragment,Sh),M_=l(Sh),sl=a(Sh,"P",{});var $w=s(sl);w_=i($w,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),$w.forEach(t),Sh.forEach(t),x_=l(V),Ro=a(V,"DIV",{class:!0});var Ah=s(Ro);m(ga.$$.fragment,Ah),z_=l(Ah),rl=a(Ah,"P",{});var Fw=s(rl);q_=i(Fw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Fw.forEach(t),Ah.forEach(t),V.forEach(t),Lp=l(o),io=a(o,"H2",{class:!0});var Oh=s(io);Uo=a(Oh,"A",{id:!0,class:!0,href:!0});var jw=s(Uo);il=a(jw,"SPAN",{});var Ew=s(il);m(ka.$$.fragment,Ew),Ew.forEach(t),jw.forEach(t),B_=l(Oh),dl=a(Oh,"SPAN",{});var Pw=s(dl);$_=i(Pw,"MBart50Tokenizer"),Pw.forEach(t),Oh.forEach(t),Gp=l(o),S=a(o,"DIV",{class:!0});var Q=s(S);m(ba.$$.fragment,Q),F_=l(Q),ya=a(Q,"P",{});var Ih=s(ya);j_=i(Ih,"Construct a MBart50 tokenizer. Based on "),va=a(Ih,"A",{href:!0,rel:!0});var Cw=s(va);E_=i(Cw,"SentencePiece"),Cw.forEach(t),P_=i(Ih,"."),Ih.forEach(t),C_=l(Q),Ta=a(Q,"P",{});var Nh=s(Ta);S_=i(Nh,"This tokenizer inherits from "),gi=a(Nh,"A",{href:!0});var Sw=s(gi);A_=i(Sw,"PreTrainedTokenizer"),Sw.forEach(t),O_=i(Nh,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Nh.forEach(t),I_=l(Q),ll=a(Q,"P",{});var Aw=s(ll);N_=i(Aw,"Examples:"),Aw.forEach(t),D_=l(Q),m(Ma.$$.fragment,Q),L_=l(Q),ot=a(Q,"DIV",{class:!0});var qn=s(ot);m(wa.$$.fragment,qn),G_=l(qn),xa=a(qn,"P",{});var Dh=s(xa);W_=i(Dh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),cl=a(Dh,"CODE",{});var Ow=s(cl);R_=i(Ow,"X"),Ow.forEach(t),U_=i(Dh," represents the sequence:"),Dh.forEach(t),X_=l(qn),za=a(qn,"UL",{});var Lh=s(za);qa=a(Lh,"LI",{});var Gh=s(qa);pl=a(Gh,"CODE",{});var Iw=s(pl);H_=i(Iw,"input_ids"),Iw.forEach(t),V_=i(Gh," (for encoder) "),hl=a(Gh,"CODE",{});var Nw=s(hl);Q_=i(Nw,"[src_lang_code] X [eos]"),Nw.forEach(t),Gh.forEach(t),J_=l(Lh),Ba=a(Lh,"LI",{});var Wh=s(Ba);ul=a(Wh,"CODE",{});var Dw=s(ul);K_=i(Dw,"labels"),Dw.forEach(t),Z_=i(Wh,": (for decoder) "),ml=a(Wh,"CODE",{});var Lw=s(ml);Y_=i(Lw,"[tgt_lang_code] X [eos]"),Lw.forEach(t),Wh.forEach(t),Lh.forEach(t),eg=l(qn),fl=a(qn,"P",{});var Gw=s(fl);tg=i(Gw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Gw.forEach(t),qn.forEach(t),og=l(Q),Xo=a(Q,"DIV",{class:!0});var Rh=s(Xo);m($a.$$.fragment,Rh),ng=l(Rh),_l=a(Rh,"P",{});var Ww=s(_l);ag=i(Ww,"Converts a sequence of tokens (strings for sub-words) in a single string."),Ww.forEach(t),Rh.forEach(t),sg=l(Q),Ho=a(Q,"DIV",{class:!0});var Uh=s(Ho);m(Fa.$$.fragment,Uh),rg=l(Uh),ja=a(Uh,"P",{});var Xh=s(ja);ig=i(Xh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gl=a(Xh,"CODE",{});var Rw=s(gl);dg=i(Rw,"prepare_for_model"),Rw.forEach(t),lg=i(Xh," method."),Xh.forEach(t),Uh.forEach(t),cg=l(Q),Vo=a(Q,"DIV",{class:!0});var Hh=s(Vo);m(Ea.$$.fragment,Hh),pg=l(Hh),kl=a(Hh,"P",{});var Uw=s(kl);hg=i(Uw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Uw.forEach(t),Hh.forEach(t),ug=l(Q),Qo=a(Q,"DIV",{class:!0});var Vh=s(Qo);m(Pa.$$.fragment,Vh),mg=l(Vh),bl=a(Vh,"P",{});var Xw=s(bl);fg=i(Xw,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Xw.forEach(t),Vh.forEach(t),Q.forEach(t),Wp=l(o),lo=a(o,"H2",{class:!0});var Qh=s(lo);Jo=a(Qh,"A",{id:!0,class:!0,href:!0});var Hw=s(Jo);yl=a(Hw,"SPAN",{});var Vw=s(yl);m(Ca.$$.fragment,Vw),Vw.forEach(t),Hw.forEach(t),_g=l(Qh),vl=a(Qh,"SPAN",{});var Qw=s(vl);gg=i(Qw,"MBart50TokenizerFast"),Qw.forEach(t),Qh.forEach(t),Rp=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);m(Sa.$$.fragment,fe),kg=l(fe),co=a(fe,"P",{});var Li=s(co);bg=i(Li,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),Tl=a(Li,"EM",{});var Jw=s(Tl);yg=i(Jw,"tokenizers"),Jw.forEach(t),vg=i(Li,` library). Based on
`),Aa=a(Li,"A",{href:!0,rel:!0});var Kw=s(Aa);Tg=i(Kw,"BPE"),Kw.forEach(t),Mg=i(Li,"."),Li.forEach(t),wg=l(fe),Oa=a(fe,"P",{});var Jh=s(Oa);xg=i(Jh,"This tokenizer inherits from "),ki=a(Jh,"A",{href:!0});var Zw=s(ki);zg=i(Zw,"PreTrainedTokenizerFast"),Zw.forEach(t),qg=i(Jh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Jh.forEach(t),Bg=l(fe),Ml=a(fe,"P",{});var Yw=s(Ml);$g=i(Yw,"Examples:"),Yw.forEach(t),Fg=l(fe),m(Ia.$$.fragment,fe),jg=l(fe),Ae=a(fe,"DIV",{class:!0});var St=s(Ae);m(Na.$$.fragment,St),Eg=l(St),wl=a(St,"P",{});var ex=s(wl);Pg=i(ex,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),ex.forEach(t),Cg=l(St),Da=a(St,"P",{});var Kh=s(Da);Sg=i(Kh,"An MBART-50 sequence has the following format, where "),xl=a(Kh,"CODE",{});var tx=s(xl);Ag=i(tx,"X"),tx.forEach(t),Og=i(Kh," represents the sequence:"),Kh.forEach(t),Ig=l(St),La=a(St,"UL",{});var Zh=s(La);Ga=a(Zh,"LI",{});var Yh=s(Ga);zl=a(Yh,"CODE",{});var ox=s(zl);Ng=i(ox,"input_ids"),ox.forEach(t),Dg=i(Yh," (for encoder) "),ql=a(Yh,"CODE",{});var nx=s(ql);Lg=i(nx,"[src_lang_code] X [eos]"),nx.forEach(t),Yh.forEach(t),Gg=l(Zh),Wa=a(Zh,"LI",{});var eu=s(Wa);Bl=a(eu,"CODE",{});var ax=s(Bl);Wg=i(ax,"labels"),ax.forEach(t),Rg=i(eu,": (for decoder) "),$l=a(eu,"CODE",{});var sx=s($l);Ug=i(sx,"[tgt_lang_code] X [eos]"),sx.forEach(t),eu.forEach(t),Zh.forEach(t),Xg=l(St),Fl=a(St,"P",{});var rx=s(Fl);Hg=i(rx,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),rx.forEach(t),St.forEach(t),Vg=l(fe),Ko=a(fe,"DIV",{class:!0});var tu=s(Ko);m(Ra.$$.fragment,tu),Qg=l(tu),jl=a(tu,"P",{});var ix=s(jl);Jg=i(ix,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),ix.forEach(t),tu.forEach(t),Kg=l(fe),Zo=a(fe,"DIV",{class:!0});var ou=s(Zo);m(Ua.$$.fragment,ou),Zg=l(ou),El=a(ou,"P",{});var dx=s(El);Yg=i(dx,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),dx.forEach(t),ou.forEach(t),fe.forEach(t),Up=l(o),po=a(o,"H2",{class:!0});var nu=s(po);Yo=a(nu,"A",{id:!0,class:!0,href:!0});var lx=s(Yo);Pl=a(lx,"SPAN",{});var cx=s(Pl);m(Xa.$$.fragment,cx),cx.forEach(t),lx.forEach(t),ek=l(nu),Cl=a(nu,"SPAN",{});var px=s(Cl);tk=i(px,"MBartModel"),px.forEach(t),nu.forEach(t),Xp=l(o),Qe=a(o,"DIV",{class:!0});var Bn=s(Qe);m(Ha.$$.fragment,Bn),ok=l(Bn),Va=a(Bn,"P",{});var au=s(Va);nk=i(au,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),bi=a(au,"A",{href:!0});var hx=s(bi);ak=i(hx,"PreTrainedModel"),hx.forEach(t),sk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),rk=l(Bn),Qa=a(Bn,"P",{});var su=s(Qa);ik=i(su,"This model is also a PyTorch "),Ja=a(su,"A",{href:!0,rel:!0});var ux=s(Ja);dk=i(ux,"torch.nn.Module"),ux.forEach(t),lk=i(su,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su.forEach(t),ck=l(Bn),Oe=a(Bn,"DIV",{class:!0});var At=s(Oe);m(Ka.$$.fragment,At),pk=l(At),ho=a(At,"P",{});var Gi=s(ho);hk=i(Gi,"The "),yi=a(Gi,"A",{href:!0});var mx=s(yi);uk=i(mx,"MBartModel"),mx.forEach(t),mk=i(Gi," forward method, overrides the "),Sl=a(Gi,"CODE",{});var fx=s(Sl);fk=i(fx,"__call__"),fx.forEach(t),_k=i(Gi," special method."),Gi.forEach(t),gk=l(At),m(en.$$.fragment,At),kk=l(At),Al=a(At,"P",{});var _x=s(Al);bk=i(_x,"Example:"),_x.forEach(t),yk=l(At),m(Za.$$.fragment,At),At.forEach(t),Bn.forEach(t),Hp=l(o),uo=a(o,"H2",{class:!0});var ru=s(uo);tn=a(ru,"A",{id:!0,class:!0,href:!0});var gx=s(tn);Ol=a(gx,"SPAN",{});var kx=s(Ol);m(Ya.$$.fragment,kx),kx.forEach(t),gx.forEach(t),vk=l(ru),Il=a(ru,"SPAN",{});var bx=s(Il);Tk=i(bx,"MBartForConditionalGeneration"),bx.forEach(t),ru.forEach(t),Vp=l(o),Je=a(o,"DIV",{class:!0});var $n=s(Je);m(es.$$.fragment,$n),Mk=l($n),ts=a($n,"P",{});var iu=s(ts);wk=i(iu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),vi=a(iu,"A",{href:!0});var yx=s(vi);xk=i(yx,"PreTrainedModel"),yx.forEach(t),zk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu.forEach(t),qk=l($n),os=a($n,"P",{});var du=s(os);Bk=i(du,"This model is also a PyTorch "),ns=a(du,"A",{href:!0,rel:!0});var vx=s(ns);$k=i(vx,"torch.nn.Module"),vx.forEach(t),Fk=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),jk=l($n),Y=a($n,"DIV",{class:!0});var Ge=s(Y);m(as.$$.fragment,Ge),Ek=l(Ge),mo=a(Ge,"P",{});var Wi=s(mo);Pk=i(Wi,"The "),Ti=a(Wi,"A",{href:!0});var Tx=s(Ti);Ck=i(Tx,"MBartForConditionalGeneration"),Tx.forEach(t),Sk=i(Wi," forward method, overrides the "),Nl=a(Wi,"CODE",{});var Mx=s(Nl);Ak=i(Mx,"__call__"),Mx.forEach(t),Ok=i(Wi," special method."),Wi.forEach(t),Ik=l(Ge),m(on.$$.fragment,Ge),Nk=l(Ge),Dl=a(Ge,"P",{});var wx=s(Dl);Dk=i(wx,"Translation example:"),wx.forEach(t),Lk=l(Ge),m(ss.$$.fragment,Ge),Gk=l(Ge),Ll=a(Ge,"P",{});var xx=s(Ll);Wk=i(xx,"Mask filling example:"),xx.forEach(t),Rk=l(Ge),m(rs.$$.fragment,Ge),Ge.forEach(t),$n.forEach(t),Qp=l(o),fo=a(o,"H2",{class:!0});var lu=s(fo);nn=a(lu,"A",{id:!0,class:!0,href:!0});var zx=s(nn);Gl=a(zx,"SPAN",{});var qx=s(Gl);m(is.$$.fragment,qx),qx.forEach(t),zx.forEach(t),Uk=l(lu),Wl=a(lu,"SPAN",{});var Bx=s(Wl);Xk=i(Bx,"MBartForQuestionAnswering"),Bx.forEach(t),lu.forEach(t),Jp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);m(ds.$$.fragment,Ot),Hk=l(Ot),_o=a(Ot,"P",{});var Ri=s(_o);Vk=i(Ri,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Rl=a(Ri,"CODE",{});var $x=s(Rl);Qk=i($x,"span start logits"),$x.forEach(t),Jk=i(Ri," and "),Ul=a(Ri,"CODE",{});var Fx=s(Ul);Kk=i(Fx,"span end logits"),Fx.forEach(t),Zk=i(Ri,")."),Ri.forEach(t),Yk=l(Ot),ls=a(Ot,"P",{});var cu=s(ls);eb=i(cu,"This model inherits from "),Mi=a(cu,"A",{href:!0});var jx=s(Mi);tb=i(jx,"PreTrainedModel"),jx.forEach(t),ob=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),nb=l(Ot),cs=a(Ot,"P",{});var pu=s(cs);ab=i(pu,"This model is also a PyTorch "),ps=a(pu,"A",{href:!0,rel:!0});var Ex=s(ps);sb=i(Ex,"torch.nn.Module"),Ex.forEach(t),rb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),ib=l(Ot),ue=a(Ot,"DIV",{class:!0});var at=s(ue);m(hs.$$.fragment,at),db=l(at),go=a(at,"P",{});var Ui=s(go);lb=i(Ui,"The "),wi=a(Ui,"A",{href:!0});var Px=s(wi);cb=i(Px,"MBartForQuestionAnswering"),Px.forEach(t),pb=i(Ui," forward method, overrides the "),Xl=a(Ui,"CODE",{});var Cx=s(Xl);hb=i(Cx,"__call__"),Cx.forEach(t),ub=i(Ui," special method."),Ui.forEach(t),mb=l(at),m(an.$$.fragment,at),fb=l(at),Hl=a(at,"P",{});var Sx=s(Hl);_b=i(Sx,"Example:"),Sx.forEach(t),gb=l(at),m(us.$$.fragment,at),kb=l(at),m(ms.$$.fragment,at),at.forEach(t),Ot.forEach(t),Kp=l(o),ko=a(o,"H2",{class:!0});var hu=s(ko);sn=a(hu,"A",{id:!0,class:!0,href:!0});var Ax=s(sn);Vl=a(Ax,"SPAN",{});var Ox=s(Vl);m(fs.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),bb=l(hu),Ql=a(hu,"SPAN",{});var Ix=s(Ql);yb=i(Ix,"MBartForSequenceClassification"),Ix.forEach(t),hu.forEach(t),Zp=l(o),Fe=a(o,"DIV",{class:!0});var It=s(Fe);m(_s.$$.fragment,It),vb=l(It),Jl=a(It,"P",{});var Nx=s(Jl);Tb=i(Nx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Nx.forEach(t),Mb=l(It),gs=a(It,"P",{});var uu=s(gs);wb=i(uu,"This model inherits from "),xi=a(uu,"A",{href:!0});var Dx=s(xi);xb=i(Dx,"PreTrainedModel"),Dx.forEach(t),zb=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),qb=l(It),ks=a(It,"P",{});var mu=s(ks);Bb=i(mu,"This model is also a PyTorch "),bs=a(mu,"A",{href:!0,rel:!0});var Lx=s(bs);$b=i(Lx,"torch.nn.Module"),Lx.forEach(t),Fb=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),jb=l(It),L=a(It,"DIV",{class:!0});var oe=s(L);m(ys.$$.fragment,oe),Eb=l(oe),bo=a(oe,"P",{});var Xi=s(bo);Pb=i(Xi,"The "),zi=a(Xi,"A",{href:!0});var Gx=s(zi);Cb=i(Gx,"MBartForSequenceClassification"),Gx.forEach(t),Sb=i(Xi," forward method, overrides the "),Kl=a(Xi,"CODE",{});var Wx=s(Kl);Ab=i(Wx,"__call__"),Wx.forEach(t),Ob=i(Xi," special method."),Xi.forEach(t),Ib=l(oe),m(rn.$$.fragment,oe),Nb=l(oe),Zl=a(oe,"P",{});var Rx=s(Zl);Db=i(Rx,"Example of single-label classification:"),Rx.forEach(t),Lb=l(oe),m(vs.$$.fragment,oe),Gb=l(oe),m(Ts.$$.fragment,oe),Wb=l(oe),Yl=a(oe,"P",{});var Ux=s(Yl);Rb=i(Ux,"Example of multi-label classification:"),Ux.forEach(t),Ub=l(oe),m(Ms.$$.fragment,oe),Xb=l(oe),m(ws.$$.fragment,oe),oe.forEach(t),It.forEach(t),Yp=l(o),yo=a(o,"H2",{class:!0});var fu=s(yo);dn=a(fu,"A",{id:!0,class:!0,href:!0});var Xx=s(dn);ec=a(Xx,"SPAN",{});var Hx=s(ec);m(xs.$$.fragment,Hx),Hx.forEach(t),Xx.forEach(t),Hb=l(fu),tc=a(fu,"SPAN",{});var Vx=s(tc);Vb=i(Vx,"MBartForCausalLM"),Vx.forEach(t),fu.forEach(t),eh=l(o),vo=a(o,"DIV",{class:!0});var _u=s(vo);m(zs.$$.fragment,_u),Qb=l(_u),Mt=a(_u,"DIV",{class:!0});var Hi=s(Mt);m(qs.$$.fragment,Hi),Jb=l(Hi),oc=a(Hi,"P",{});var Qx=s(oc);Kb=i(Qx,"Example:"),Qx.forEach(t),Zb=l(Hi),m(Bs.$$.fragment,Hi),Hi.forEach(t),_u.forEach(t),th=l(o),To=a(o,"H2",{class:!0});var gu=s(To);ln=a(gu,"A",{id:!0,class:!0,href:!0});var Jx=s(ln);nc=a(Jx,"SPAN",{});var Kx=s(nc);m($s.$$.fragment,Kx),Kx.forEach(t),Jx.forEach(t),Yb=l(gu),ac=a(gu,"SPAN",{});var Zx=s(ac);ey=i(Zx,"TFMBartModel"),Zx.forEach(t),gu.forEach(t),oh=l(o),je=a(o,"DIV",{class:!0});var Nt=s(je);m(Fs.$$.fragment,Nt),ty=l(Nt),js=a(Nt,"P",{});var ku=s(js);oy=i(ku,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(ku,"A",{href:!0});var Yx=s(qi);ny=i(Yx,"TFPreTrainedModel"),Yx.forEach(t),ay=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),sy=l(Nt),Es=a(Nt,"P",{});var bu=s(Es);ry=i(bu,"This model is also a "),Ps=a(bu,"A",{href:!0,rel:!0});var ez=s(Ps);iy=i(ez,"tf.keras.Model"),ez.forEach(t),dy=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),ly=l(Nt),m(cn.$$.fragment,Nt),cy=l(Nt),Ie=a(Nt,"DIV",{class:!0});var Dt=s(Ie);m(Cs.$$.fragment,Dt),py=l(Dt),Mo=a(Dt,"P",{});var Vi=s(Mo);hy=i(Vi,"The "),Bi=a(Vi,"A",{href:!0});var tz=s(Bi);uy=i(tz,"TFMBartModel"),tz.forEach(t),my=i(Vi," forward method, overrides the "),sc=a(Vi,"CODE",{});var oz=s(sc);fy=i(oz,"__call__"),oz.forEach(t),_y=i(Vi," special method."),Vi.forEach(t),gy=l(Dt),m(pn.$$.fragment,Dt),ky=l(Dt),rc=a(Dt,"P",{});var nz=s(rc);by=i(nz,"Example:"),nz.forEach(t),yy=l(Dt),m(Ss.$$.fragment,Dt),Dt.forEach(t),Nt.forEach(t),nh=l(o),wo=a(o,"H2",{class:!0});var yu=s(wo);hn=a(yu,"A",{id:!0,class:!0,href:!0});var az=s(hn);ic=a(az,"SPAN",{});var sz=s(ic);m(As.$$.fragment,sz),sz.forEach(t),az.forEach(t),vy=l(yu),dc=a(yu,"SPAN",{});var rz=s(dc);Ty=i(rz,"TFMBartForConditionalGeneration"),rz.forEach(t),yu.forEach(t),ah=l(o),Ee=a(o,"DIV",{class:!0});var Lt=s(Ee);m(Os.$$.fragment,Lt),My=l(Lt),Is=a(Lt,"P",{});var vu=s(Is);wy=i(vu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),$i=a(vu,"A",{href:!0});var iz=s($i);xy=i(iz,"TFPreTrainedModel"),iz.forEach(t),zy=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),qy=l(Lt),Ns=a(Lt,"P",{});var Tu=s(Ns);By=i(Tu,"This model is also a "),Ds=a(Tu,"A",{href:!0,rel:!0});var dz=s(Ds);$y=i(dz,"tf.keras.Model"),dz.forEach(t),Fy=i(Tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tu.forEach(t),jy=l(Lt),m(un.$$.fragment,Lt),Ey=l(Lt),ee=a(Lt,"DIV",{class:!0});var We=s(ee);m(Ls.$$.fragment,We),Py=l(We),xo=a(We,"P",{});var Qi=s(xo);Cy=i(Qi,"The "),Fi=a(Qi,"A",{href:!0});var lz=s(Fi);Sy=i(lz,"TFMBartForConditionalGeneration"),lz.forEach(t),Ay=i(Qi," forward method, overrides the "),lc=a(Qi,"CODE",{});var cz=s(lc);Oy=i(cz,"__call__"),cz.forEach(t),Iy=i(Qi," special method."),Qi.forEach(t),Ny=l(We),m(mn.$$.fragment,We),Dy=l(We),cc=a(We,"P",{});var pz=s(cc);Ly=i(pz,"Summarization example:"),pz.forEach(t),Gy=l(We),m(Gs.$$.fragment,We),Wy=l(We),pc=a(We,"P",{});var hz=s(pc);Ry=i(hz,"Mask filling example:"),hz.forEach(t),Uy=l(We),m(Ws.$$.fragment,We),We.forEach(t),Lt.forEach(t),sh=l(o),zo=a(o,"H2",{class:!0});var Mu=s(zo);fn=a(Mu,"A",{id:!0,class:!0,href:!0});var uz=s(fn);hc=a(uz,"SPAN",{});var mz=s(hc);m(Rs.$$.fragment,mz),mz.forEach(t),uz.forEach(t),Xy=l(Mu),uc=a(Mu,"SPAN",{});var fz=s(uc);Hy=i(fz,"FlaxMBartModel"),fz.forEach(t),Mu.forEach(t),rh=l(o),R=a(o,"DIV",{class:!0});var _e=s(R);m(Us.$$.fragment,_e),Vy=l(_e),Xs=a(_e,"P",{});var wu=s(Xs);Qy=i(wu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ji=a(wu,"A",{href:!0});var _z=s(ji);Jy=i(_z,"FlaxPreTrainedModel"),_z.forEach(t),Ky=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),Zy=l(_e),Hs=a(_e,"P",{});var xu=s(Hs);Yy=i(xu,`This model is also a Flax Linen
`),Vs=a(xu,"A",{href:!0,rel:!0});var gz=s(Vs);ev=i(gz,"flax.nn.Module"),gz.forEach(t),tv=i(xu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),xu.forEach(t),ov=l(_e),mc=a(_e,"P",{});var kz=s(mc);nv=i(kz,"Finally, this model supports inherent JAX features such as:"),kz.forEach(t),av=l(_e),ft=a(_e,"UL",{});var Fn=s(ft);fc=a(Fn,"LI",{});var bz=s(fc);Qs=a(bz,"A",{href:!0,rel:!0});var yz=s(Qs);sv=i(yz,"Just-In-Time (JIT) compilation"),yz.forEach(t),bz.forEach(t),rv=l(Fn),_c=a(Fn,"LI",{});var vz=s(_c);Js=a(vz,"A",{href:!0,rel:!0});var Tz=s(Js);iv=i(Tz,"Automatic Differentiation"),Tz.forEach(t),vz.forEach(t),dv=l(Fn),gc=a(Fn,"LI",{});var Mz=s(gc);Ks=a(Mz,"A",{href:!0,rel:!0});var wz=s(Ks);lv=i(wz,"Vectorization"),wz.forEach(t),Mz.forEach(t),cv=l(Fn),kc=a(Fn,"LI",{});var xz=s(kc);Zs=a(xz,"A",{href:!0,rel:!0});var zz=s(Zs);pv=i(zz,"Parallelization"),zz.forEach(t),xz.forEach(t),Fn.forEach(t),hv=l(_e),Ne=a(_e,"DIV",{class:!0});var Gt=s(Ne);m(Ys.$$.fragment,Gt),uv=l(Gt),qo=a(Gt,"P",{});var Ji=s(qo);mv=i(Ji,"The "),bc=a(Ji,"CODE",{});var qz=s(bc);fv=i(qz,"FlaxMBartPreTrainedModel"),qz.forEach(t),_v=i(Ji,"forward method, overrides the "),yc=a(Ji,"CODE",{});var Bz=s(yc);gv=i(Bz,"__call__"),Bz.forEach(t),kv=i(Ji," special method."),Ji.forEach(t),bv=l(Gt),m(_n.$$.fragment,Gt),yv=l(Gt),vc=a(Gt,"P",{});var $z=s(vc);vv=i($z,"Example:"),$z.forEach(t),Tv=l(Gt),m(er.$$.fragment,Gt),Gt.forEach(t),Mv=l(_e),wt=a(_e,"DIV",{class:!0});var Ki=s(wt);m(tr.$$.fragment,Ki),wv=l(Ki),Tc=a(Ki,"P",{});var Fz=s(Tc);xv=i(Fz,"Example:"),Fz.forEach(t),zv=l(Ki),m(or.$$.fragment,Ki),Ki.forEach(t),qv=l(_e),xt=a(_e,"DIV",{class:!0});var Zi=s(xt);m(nr.$$.fragment,Zi),Bv=l(Zi),Mc=a(Zi,"P",{});var jz=s(Mc);$v=i(jz,"Example:"),jz.forEach(t),Fv=l(Zi),m(ar.$$.fragment,Zi),Zi.forEach(t),_e.forEach(t),ih=l(o),Bo=a(o,"H2",{class:!0});var zu=s(Bo);gn=a(zu,"A",{id:!0,class:!0,href:!0});var Ez=s(gn);wc=a(Ez,"SPAN",{});var Pz=s(wc);m(sr.$$.fragment,Pz),Pz.forEach(t),Ez.forEach(t),jv=l(zu),xc=a(zu,"SPAN",{});var Cz=s(xc);Ev=i(Cz,"FlaxMBartForConditionalGeneration"),Cz.forEach(t),zu.forEach(t),dh=l(o),U=a(o,"DIV",{class:!0});var ge=s(U);m(rr.$$.fragment,ge),Pv=l(ge),ir=a(ge,"P",{});var qu=s(ir);Cv=i(qu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Ei=a(qu,"A",{href:!0});var Sz=s(Ei);Sv=i(Sz,"FlaxPreTrainedModel"),Sz.forEach(t),Av=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),Ov=l(ge),dr=a(ge,"P",{});var Bu=s(dr);Iv=i(Bu,`This model is also a Flax Linen
`),lr=a(Bu,"A",{href:!0,rel:!0});var Az=s(lr);Nv=i(Az,"flax.nn.Module"),Az.forEach(t),Dv=i(Bu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bu.forEach(t),Lv=l(ge),zc=a(ge,"P",{});var Oz=s(zc);Gv=i(Oz,"Finally, this model supports inherent JAX features such as:"),Oz.forEach(t),Wv=l(ge),_t=a(ge,"UL",{});var jn=s(_t);qc=a(jn,"LI",{});var Iz=s(qc);cr=a(Iz,"A",{href:!0,rel:!0});var Nz=s(cr);Rv=i(Nz,"Just-In-Time (JIT) compilation"),Nz.forEach(t),Iz.forEach(t),Uv=l(jn),Bc=a(jn,"LI",{});var Dz=s(Bc);pr=a(Dz,"A",{href:!0,rel:!0});var Lz=s(pr);Xv=i(Lz,"Automatic Differentiation"),Lz.forEach(t),Dz.forEach(t),Hv=l(jn),$c=a(jn,"LI",{});var Gz=s($c);hr=a(Gz,"A",{href:!0,rel:!0});var Wz=s(hr);Vv=i(Wz,"Vectorization"),Wz.forEach(t),Gz.forEach(t),Qv=l(jn),Fc=a(jn,"LI",{});var Rz=s(Fc);ur=a(Rz,"A",{href:!0,rel:!0});var Uz=s(ur);Jv=i(Uz,"Parallelization"),Uz.forEach(t),Rz.forEach(t),jn.forEach(t),Kv=l(ge),te=a(ge,"DIV",{class:!0});var Re=s(te);m(mr.$$.fragment,Re),Zv=l(Re),$o=a(Re,"P",{});var Yi=s($o);Yv=i(Yi,"The "),jc=a(Yi,"CODE",{});var Xz=s(jc);e1=i(Xz,"FlaxMBartPreTrainedModel"),Xz.forEach(t),t1=i(Yi,"forward method, overrides the "),Ec=a(Yi,"CODE",{});var Hz=s(Ec);o1=i(Hz,"__call__"),Hz.forEach(t),n1=i(Yi," special method."),Yi.forEach(t),a1=l(Re),m(kn.$$.fragment,Re),s1=l(Re),Pc=a(Re,"P",{});var Vz=s(Pc);r1=i(Vz,"Summarization example:"),Vz.forEach(t),i1=l(Re),m(fr.$$.fragment,Re),d1=l(Re),Cc=a(Re,"P",{});var Qz=s(Cc);l1=i(Qz,"Mask filling example:"),Qz.forEach(t),c1=l(Re),m(_r.$$.fragment,Re),Re.forEach(t),p1=l(ge),zt=a(ge,"DIV",{class:!0});var ed=s(zt);m(gr.$$.fragment,ed),h1=l(ed),Sc=a(ed,"P",{});var Jz=s(Sc);u1=i(Jz,"Example:"),Jz.forEach(t),m1=l(ed),m(kr.$$.fragment,ed),ed.forEach(t),f1=l(ge),qt=a(ge,"DIV",{class:!0});var td=s(qt);m(br.$$.fragment,td),_1=l(td),Ac=a(td,"P",{});var Kz=s(Ac);g1=i(Kz,"Example:"),Kz.forEach(t),k1=l(td),m(yr.$$.fragment,td),td.forEach(t),ge.forEach(t),lh=l(o),Fo=a(o,"H2",{class:!0});var $u=s(Fo);bn=a($u,"A",{id:!0,class:!0,href:!0});var Zz=s(bn);Oc=a(Zz,"SPAN",{});var Yz=s(Oc);m(vr.$$.fragment,Yz),Yz.forEach(t),Zz.forEach(t),b1=l($u),Ic=a($u,"SPAN",{});var e2=s(Ic);y1=i(e2,"FlaxMBartForSequenceClassification"),e2.forEach(t),$u.forEach(t),ch=l(o),O=a(o,"DIV",{class:!0});var ne=s(O);m(Tr.$$.fragment,ne),v1=l(ne),Nc=a(ne,"P",{});var t2=s(Nc);T1=i(t2,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),t2.forEach(t),M1=l(ne),Mr=a(ne,"P",{});var Fu=s(Mr);w1=i(Fu,"This model inherits from "),Pi=a(Fu,"A",{href:!0});var o2=s(Pi);x1=i(o2,"FlaxPreTrainedModel"),o2.forEach(t),z1=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),q1=l(ne),wr=a(ne,"P",{});var ju=s(wr);B1=i(ju,`This model is also a Flax Linen
`),xr=a(ju,"A",{href:!0,rel:!0});var n2=s(xr);$1=i(n2,"flax.nn.Module"),n2.forEach(t),F1=i(ju,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ju.forEach(t),j1=l(ne),Dc=a(ne,"P",{});var a2=s(Dc);E1=i(a2,"Finally, this model supports inherent JAX features such as:"),a2.forEach(t),P1=l(ne),gt=a(ne,"UL",{});var En=s(gt);Lc=a(En,"LI",{});var s2=s(Lc);zr=a(s2,"A",{href:!0,rel:!0});var r2=s(zr);C1=i(r2,"Just-In-Time (JIT) compilation"),r2.forEach(t),s2.forEach(t),S1=l(En),Gc=a(En,"LI",{});var i2=s(Gc);qr=a(i2,"A",{href:!0,rel:!0});var d2=s(qr);A1=i(d2,"Automatic Differentiation"),d2.forEach(t),i2.forEach(t),O1=l(En),Wc=a(En,"LI",{});var l2=s(Wc);Br=a(l2,"A",{href:!0,rel:!0});var c2=s(Br);I1=i(c2,"Vectorization"),c2.forEach(t),l2.forEach(t),N1=l(En),Rc=a(En,"LI",{});var p2=s(Rc);$r=a(p2,"A",{href:!0,rel:!0});var h2=s($r);D1=i(h2,"Parallelization"),h2.forEach(t),p2.forEach(t),En.forEach(t),L1=l(ne),De=a(ne,"DIV",{class:!0});var Wt=s(De);m(Fr.$$.fragment,Wt),G1=l(Wt),jo=a(Wt,"P",{});var od=s(jo);W1=i(od,"The "),Uc=a(od,"CODE",{});var u2=s(Uc);R1=i(u2,"FlaxMBartPreTrainedModel"),u2.forEach(t),U1=i(od,"forward method, overrides the "),Xc=a(od,"CODE",{});var m2=s(Xc);X1=i(m2,"__call__"),m2.forEach(t),H1=i(od," special method."),od.forEach(t),V1=l(Wt),m(yn.$$.fragment,Wt),Q1=l(Wt),Hc=a(Wt,"P",{});var f2=s(Hc);J1=i(f2,"Example:"),f2.forEach(t),K1=l(Wt),m(jr.$$.fragment,Wt),Wt.forEach(t),Z1=l(ne),Bt=a(ne,"DIV",{class:!0});var nd=s(Bt);m(Er.$$.fragment,nd),Y1=l(nd),Vc=a(nd,"P",{});var _2=s(Vc);eT=i(_2,"Example:"),_2.forEach(t),tT=l(nd),m(Pr.$$.fragment,nd),nd.forEach(t),oT=l(ne),$t=a(ne,"DIV",{class:!0});var ad=s($t);m(Cr.$$.fragment,ad),nT=l(ad),Qc=a(ad,"P",{});var g2=s(Qc);aT=i(g2,"Example:"),g2.forEach(t),sT=l(ad),m(Sr.$$.fragment,ad),ad.forEach(t),ne.forEach(t),ph=l(o),Eo=a(o,"H2",{class:!0});var Eu=s(Eo);vn=a(Eu,"A",{id:!0,class:!0,href:!0});var k2=s(vn);Jc=a(k2,"SPAN",{});var b2=s(Jc);m(Ar.$$.fragment,b2),b2.forEach(t),k2.forEach(t),rT=l(Eu),Kc=a(Eu,"SPAN",{});var y2=s(Kc);iT=i(y2,"FlaxMBartForQuestionAnswering"),y2.forEach(t),Eu.forEach(t),hh=l(o),I=a(o,"DIV",{class:!0});var ae=s(I);m(Or.$$.fragment,ae),dT=l(ae),Po=a(ae,"P",{});var sd=s(Po);lT=i(sd,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Zc=a(sd,"CODE",{});var v2=s(Zc);cT=i(v2,"span start logits"),v2.forEach(t),pT=i(sd," and "),Yc=a(sd,"CODE",{});var T2=s(Yc);hT=i(T2,"span end logits"),T2.forEach(t),uT=i(sd,")."),sd.forEach(t),mT=l(ae),Ir=a(ae,"P",{});var Pu=s(Ir);fT=i(Pu,"This model inherits from "),Ci=a(Pu,"A",{href:!0});var M2=s(Ci);_T=i(M2,"FlaxPreTrainedModel"),M2.forEach(t),gT=i(Pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu.forEach(t),kT=l(ae),Nr=a(ae,"P",{});var Cu=s(Nr);bT=i(Cu,`This model is also a Flax Linen
`),Dr=a(Cu,"A",{href:!0,rel:!0});var w2=s(Dr);yT=i(w2,"flax.nn.Module"),w2.forEach(t),vT=i(Cu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Cu.forEach(t),TT=l(ae),ep=a(ae,"P",{});var x2=s(ep);MT=i(x2,"Finally, this model supports inherent JAX features such as:"),x2.forEach(t),wT=l(ae),kt=a(ae,"UL",{});var Pn=s(kt);tp=a(Pn,"LI",{});var z2=s(tp);Lr=a(z2,"A",{href:!0,rel:!0});var q2=s(Lr);xT=i(q2,"Just-In-Time (JIT) compilation"),q2.forEach(t),z2.forEach(t),zT=l(Pn),op=a(Pn,"LI",{});var B2=s(op);Gr=a(B2,"A",{href:!0,rel:!0});var $2=s(Gr);qT=i($2,"Automatic Differentiation"),$2.forEach(t),B2.forEach(t),BT=l(Pn),np=a(Pn,"LI",{});var F2=s(np);Wr=a(F2,"A",{href:!0,rel:!0});var j2=s(Wr);$T=i(j2,"Vectorization"),j2.forEach(t),F2.forEach(t),FT=l(Pn),ap=a(Pn,"LI",{});var E2=s(ap);Rr=a(E2,"A",{href:!0,rel:!0});var P2=s(Rr);jT=i(P2,"Parallelization"),P2.forEach(t),E2.forEach(t),Pn.forEach(t),ET=l(ae),Le=a(ae,"DIV",{class:!0});var Rt=s(Le);m(Ur.$$.fragment,Rt),PT=l(Rt),Co=a(Rt,"P",{});var rd=s(Co);CT=i(rd,"The "),sp=a(rd,"CODE",{});var C2=s(sp);ST=i(C2,"FlaxMBartPreTrainedModel"),C2.forEach(t),AT=i(rd,"forward method, overrides the "),rp=a(rd,"CODE",{});var S2=s(rp);OT=i(S2,"__call__"),S2.forEach(t),IT=i(rd," special method."),rd.forEach(t),NT=l(Rt),m(Tn.$$.fragment,Rt),DT=l(Rt),ip=a(Rt,"P",{});var A2=s(ip);LT=i(A2,"Example:"),A2.forEach(t),GT=l(Rt),m(Xr.$$.fragment,Rt),Rt.forEach(t),WT=l(ae),Ft=a(ae,"DIV",{class:!0});var id=s(Ft);m(Hr.$$.fragment,id),RT=l(id),dp=a(id,"P",{});var O2=s(dp);UT=i(O2,"Example:"),O2.forEach(t),XT=l(id),m(Vr.$$.fragment,id),id.forEach(t),HT=l(ae),jt=a(ae,"DIV",{class:!0});var dd=s(jt);m(Qr.$$.fragment,dd),VT=l(dd),lp=a(dd,"P",{});var I2=s(lp);QT=i(I2,"Example:"),I2.forEach(t),JT=l(dd),m(Jr.$$.fragment,dd),dd.forEach(t),ae.forEach(t),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(n0)),c(w,"id","mbart-and-mbart50"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(be,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(be,"rel","nofollow"),c(N,"id","overview-of-mbart"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview-of-mbart"),c(J,"class","relative group"),c(K,"href","https://arxiv.org/abs/2001.08210"),c(K,"rel","nofollow"),c(Me,"href","https://huggingface.co/valhalla"),c(Me,"rel","nofollow"),c(we,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(we,"rel","nofollow"),c(F,"id","training-of-mbart"),c(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(F,"href","#training-of-mbart"),c(M,"class","relative group"),c(Cn,"href","/docs/transformers/pr_15781/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(ti,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(So,"id","overview-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Nn,"href","https://arxiv.org/abs/2008.00401"),c(Nn,"rel","nofollow"),c(Ao,"id","training-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(ri,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Io,"id","transformers.MBartConfig"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(li,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartModel"),c(Xn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xn,"rel","nofollow"),c(ci,"href","/docs/transformers/pr_15781/en/main_classes/configuration#transformers.PretrainedConfig"),c(pi,"href","/docs/transformers/pr_15781/en/main_classes/configuration#transformers.PretrainedConfig"),c(Be,"class","docstring"),c(No,"id","transformers.MBartTokenizer"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(hi,"href","/docs/transformers/pr_15781/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ui,"href","/docs/transformers/pr_15781/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jn,"href","https://github.com/google/sentencepiece"),c(Jn,"rel","nofollow"),c(Do,"class","docstring"),c(tt,"class","docstring"),c(G,"class","docstring"),c(Lo,"id","transformers.MBartTokenizerFast"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(fi,"href","/docs/transformers/pr_15781/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(_i,"href","/docs/transformers/pr_15781/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Se,"class","docstring"),c(Go,"class","docstring"),c(Wo,"class","docstring"),c(Ro,"class","docstring"),c(C,"class","docstring"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(gi,"href","/docs/transformers/pr_15781/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(Qo,"class","docstring"),c(S,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_15781/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ae,"class","docstring"),c(Ko,"class","docstring"),c(Zo,"class","docstring"),c(W,"class","docstring"),c(Yo,"id","transformers.MBartModel"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(bi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(yi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartModel"),c(Oe,"class","docstring"),c(Qe,"class","docstring"),c(tn,"id","transformers.MBartForConditionalGeneration"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.MBartForConditionalGeneration"),c(uo,"class","relative group"),c(vi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(Ti,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Y,"class","docstring"),c(Je,"class","docstring"),c(nn,"id","transformers.MBartForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(Mi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(wi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(ue,"class","docstring"),c($e,"class","docstring"),c(sn,"id","transformers.MBartForSequenceClassification"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(xi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.PreTrainedModel"),c(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bs,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(L,"class","docstring"),c(Fe,"class","docstring"),c(dn,"id","transformers.MBartForCausalLM"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.MBartForCausalLM"),c(yo,"class","relative group"),c(Mt,"class","docstring"),c(vo,"class","docstring"),c(ln,"id","transformers.TFMBartModel"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(qi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ps,"rel","nofollow"),c(Bi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(hn,"id","transformers.TFMBartForConditionalGeneration"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c($i,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ds,"rel","nofollow"),c(Fi,"href","/docs/transformers/pr_15781/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Ee,"class","docstring"),c(fn,"id","transformers.FlaxMBartModel"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.FlaxMBartModel"),c(zo,"class","relative group"),c(ji,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Qs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ks,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ne,"class","docstring"),c(wt,"class","docstring"),c(xt,"class","docstring"),c(R,"class","docstring"),c(gn,"id","transformers.FlaxMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Bo,"class","relative group"),c(Ei,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(te,"class","docstring"),c(zt,"class","docstring"),c(qt,"class","docstring"),c(U,"class","docstring"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c(Fo,"class","relative group"),c(Pi,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(zr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qr,"rel","nofollow"),c(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Br,"rel","nofollow"),c($r,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($r,"rel","nofollow"),c(De,"class","docstring"),c(Bt,"class","docstring"),c($t,"class","docstring"),c(O,"class","docstring"),c(vn,"id","transformers.FlaxMBartForQuestionAnswering"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Eo,"class","relative group"),c(Ci,"href","/docs/transformers/pr_15781/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Lr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Gr,"rel","nofollow"),c(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Rr,"rel","nofollow"),c(Le,"class","docstring"),c(Ft,"class","docstring"),c(jt,"class","docstring"),c(I,"class","docstring")},m(o,p){e(document.head,b),h(o,z,p),h(o,v,p),e(v,w),e(w,x),f(T,x,null),e(v,y),e(v,B),e(B,rt),h(o,Pe,p),h(o,j,p),e(j,Ue),e(Ue,ke),e(j,it),e(j,be),e(be,ye),e(j,dt),h(o,Ke,p),h(o,J,p),e(J,N),e(N,Xe),f(se,Xe,null),e(J,P),e(J,A),e(A,lt),h(o,pe,p),h(o,he,p),e(he,ct),e(he,K),e(K,pt),e(he,ht),h(o,D,p),h(o,Ce,p),e(Ce,ve),h(o,Ze,p),h(o,re,p),e(re,Te),e(re,Me),e(Me,ut),e(re,ie),e(re,we),e(we,xe),h(o,Ye,p),h(o,M,p),e(M,F),e(F,ze),f(He,ze,null),e(M,Ut),e(M,Z),e(Z,Xt),h(o,bt,p),h(o,H,p),e(H,de),e(H,le),e(le,Ht),e(H,Vt),e(H,ce),e(ce,Qt),e(H,Jt),e(H,Ve),e(Ve,Kt),e(H,Su),e(H,ld),e(ld,Au),e(H,Ou),h(o,bp,p),h(o,yt,p),e(yt,Iu),e(yt,Cn),e(Cn,cd),e(cd,Nu),e(Cn,Du),e(yt,Lu),e(yt,ti),e(ti,Gu),e(yt,Wu),h(o,yp,p),h(o,oi,p),e(oi,pd),e(pd,Ru),h(o,vp,p),f(Sn,o,p),h(o,Tp,p),h(o,ni,p),e(ni,An),e(An,hd),e(hd,Uu),e(An,Xu),e(An,Zt),e(Zt,Hu),e(Zt,ud),e(ud,Vu),e(Zt,Qu),e(Zt,md),e(md,Ju),e(Zt,Ku),h(o,Mp,p),f(On,o,p),h(o,wp,p),h(o,Yt,p),e(Yt,So),e(So,fd),f(In,fd,null),e(Yt,Zu),e(Yt,_d),e(_d,Yu),h(o,xp,p),h(o,vt,p),e(vt,em),e(vt,Nn),e(Nn,tm),e(vt,om),e(vt,gd),e(gd,nm),e(vt,am),h(o,zp,p),h(o,ai,p),e(ai,sm),h(o,qp,p),h(o,si,p),e(si,kd),e(kd,rm),h(o,Bp,p),h(o,eo,p),e(eo,Ao),e(Ao,bd),f(Dn,bd,null),e(eo,im),e(eo,yd),e(yd,dm),h(o,$p,p),h(o,et,p),e(et,lm),e(et,vd),e(vd,cm),e(et,pm),e(et,Td),e(Td,hm),e(et,um),e(et,Md),e(Md,mm),e(et,fm),h(o,Fp,p),h(o,Oo,p),e(Oo,_m),e(Oo,ri),e(ri,gm),e(Oo,km),h(o,jp,p),h(o,ii,p),e(ii,wd),e(wd,bm),h(o,Ep,p),f(Ln,o,p),h(o,Pp,p),h(o,di,p),e(di,Gn),e(Gn,xd),e(xd,ym),e(Gn,vm),e(Gn,qe),e(qe,Tm),e(qe,zd),e(zd,Mm),e(qe,wm),e(qe,qd),e(qd,xm),e(qe,zm),e(qe,Bd),e(Bd,qm),e(qe,Bm),e(qe,$d),e($d,$m),e(qe,Fm),e(qe,Fd),e(Fd,jm),e(qe,Em),h(o,Cp,p),f(Wn,o,p),h(o,Sp,p),h(o,to,p),e(to,Io),e(Io,jd),f(Rn,jd,null),e(to,Pm),e(to,Ed),e(Ed,Cm),h(o,Ap,p),h(o,Be,p),f(Un,Be,null),e(Be,Sm),e(Be,oo),e(oo,Am),e(oo,li),e(li,Om),e(oo,Im),e(oo,Xn),e(Xn,Nm),e(oo,Dm),e(Be,Lm),e(Be,no),e(no,Gm),e(no,ci),e(ci,Wm),e(no,Rm),e(no,pi),e(pi,Um),e(no,Xm),e(Be,Hm),e(Be,Pd),e(Pd,Vm),e(Be,Qm),f(Hn,Be,null),h(o,Op,p),h(o,ao,p),e(ao,No),e(No,Cd),f(Vn,Cd,null),e(ao,Jm),e(ao,Sd),e(Sd,Km),h(o,Ip,p),h(o,G,p),f(Qn,G,null),e(G,Zm),e(G,Ad),e(Ad,Ym),e(G,ef),e(G,mt),e(mt,tf),e(mt,hi),e(hi,of),e(mt,nf),e(mt,ui),e(ui,af),e(mt,sf),e(mt,Jn),e(Jn,rf),e(mt,df),e(G,lf),e(G,Kn),e(Kn,cf),e(Kn,Od),e(Od,pf),e(Kn,hf),e(G,uf),e(G,Id),e(Id,mf),e(G,ff),f(Zn,G,null),e(G,_f),e(G,Do),f(Yn,Do,null),e(Do,gf),e(Do,Nd),e(Nd,kf),e(G,bf),e(G,tt),f(ea,tt,null),e(tt,yf),e(tt,ta),e(ta,vf),e(ta,Dd),e(Dd,Tf),e(ta,Mf),e(tt,wf),e(tt,oa),e(oa,na),e(na,Ld),e(Ld,xf),e(na,zf),e(na,Gd),e(Gd,qf),e(oa,Bf),e(oa,aa),e(aa,Wd),e(Wd,$f),e(aa,Ff),e(aa,Rd),e(Rd,jf),e(tt,Ef),e(tt,Ud),e(Ud,Pf),h(o,Np,p),h(o,so,p),e(so,Lo),e(Lo,Xd),f(sa,Xd,null),e(so,Cf),e(so,Hd),e(Hd,Sf),h(o,Dp,p),h(o,C,p),f(ra,C,null),e(C,Af),e(C,ro),e(ro,Of),e(ro,Vd),e(Vd,If),e(ro,Nf),e(ro,ia),e(ia,Df),e(ro,Lf),e(C,Gf),e(C,Tt),e(Tt,mi),e(mi,Wf),e(Tt,Rf),e(Tt,fi),e(fi,Uf),e(Tt,Xf),e(Tt,_i),e(_i,Hf),e(Tt,Vf),e(C,Qf),e(C,da),e(da,Jf),e(da,Qd),e(Qd,Kf),e(da,Zf),e(C,Yf),e(C,Jd),e(Jd,e_),e(C,t_),f(la,C,null),e(C,o_),e(C,Se),f(ca,Se,null),e(Se,n_),e(Se,Kd),e(Kd,a_),e(Se,s_),e(Se,pa),e(pa,r_),e(pa,Zd),e(Zd,i_),e(pa,d_),e(Se,l_),e(Se,ha),e(ha,ua),e(ua,Yd),e(Yd,c_),e(ua,p_),e(ua,el),e(el,h_),e(ha,u_),e(ha,ma),e(ma,tl),e(tl,m_),e(ma,f_),e(ma,ol),e(ol,__),e(Se,g_),e(Se,nl),e(nl,k_),e(C,b_),e(C,Go),f(fa,Go,null),e(Go,y_),e(Go,al),e(al,v_),e(C,T_),e(C,Wo),f(_a,Wo,null),e(Wo,M_),e(Wo,sl),e(sl,w_),e(C,x_),e(C,Ro),f(ga,Ro,null),e(Ro,z_),e(Ro,rl),e(rl,q_),h(o,Lp,p),h(o,io,p),e(io,Uo),e(Uo,il),f(ka,il,null),e(io,B_),e(io,dl),e(dl,$_),h(o,Gp,p),h(o,S,p),f(ba,S,null),e(S,F_),e(S,ya),e(ya,j_),e(ya,va),e(va,E_),e(ya,P_),e(S,C_),e(S,Ta),e(Ta,S_),e(Ta,gi),e(gi,A_),e(Ta,O_),e(S,I_),e(S,ll),e(ll,N_),e(S,D_),f(Ma,S,null),e(S,L_),e(S,ot),f(wa,ot,null),e(ot,G_),e(ot,xa),e(xa,W_),e(xa,cl),e(cl,R_),e(xa,U_),e(ot,X_),e(ot,za),e(za,qa),e(qa,pl),e(pl,H_),e(qa,V_),e(qa,hl),e(hl,Q_),e(za,J_),e(za,Ba),e(Ba,ul),e(ul,K_),e(Ba,Z_),e(Ba,ml),e(ml,Y_),e(ot,eg),e(ot,fl),e(fl,tg),e(S,og),e(S,Xo),f($a,Xo,null),e(Xo,ng),e(Xo,_l),e(_l,ag),e(S,sg),e(S,Ho),f(Fa,Ho,null),e(Ho,rg),e(Ho,ja),e(ja,ig),e(ja,gl),e(gl,dg),e(ja,lg),e(S,cg),e(S,Vo),f(Ea,Vo,null),e(Vo,pg),e(Vo,kl),e(kl,hg),e(S,ug),e(S,Qo),f(Pa,Qo,null),e(Qo,mg),e(Qo,bl),e(bl,fg),h(o,Wp,p),h(o,lo,p),e(lo,Jo),e(Jo,yl),f(Ca,yl,null),e(lo,_g),e(lo,vl),e(vl,gg),h(o,Rp,p),h(o,W,p),f(Sa,W,null),e(W,kg),e(W,co),e(co,bg),e(co,Tl),e(Tl,yg),e(co,vg),e(co,Aa),e(Aa,Tg),e(co,Mg),e(W,wg),e(W,Oa),e(Oa,xg),e(Oa,ki),e(ki,zg),e(Oa,qg),e(W,Bg),e(W,Ml),e(Ml,$g),e(W,Fg),f(Ia,W,null),e(W,jg),e(W,Ae),f(Na,Ae,null),e(Ae,Eg),e(Ae,wl),e(wl,Pg),e(Ae,Cg),e(Ae,Da),e(Da,Sg),e(Da,xl),e(xl,Ag),e(Da,Og),e(Ae,Ig),e(Ae,La),e(La,Ga),e(Ga,zl),e(zl,Ng),e(Ga,Dg),e(Ga,ql),e(ql,Lg),e(La,Gg),e(La,Wa),e(Wa,Bl),e(Bl,Wg),e(Wa,Rg),e(Wa,$l),e($l,Ug),e(Ae,Xg),e(Ae,Fl),e(Fl,Hg),e(W,Vg),e(W,Ko),f(Ra,Ko,null),e(Ko,Qg),e(Ko,jl),e(jl,Jg),e(W,Kg),e(W,Zo),f(Ua,Zo,null),e(Zo,Zg),e(Zo,El),e(El,Yg),h(o,Up,p),h(o,po,p),e(po,Yo),e(Yo,Pl),f(Xa,Pl,null),e(po,ek),e(po,Cl),e(Cl,tk),h(o,Xp,p),h(o,Qe,p),f(Ha,Qe,null),e(Qe,ok),e(Qe,Va),e(Va,nk),e(Va,bi),e(bi,ak),e(Va,sk),e(Qe,rk),e(Qe,Qa),e(Qa,ik),e(Qa,Ja),e(Ja,dk),e(Qa,lk),e(Qe,ck),e(Qe,Oe),f(Ka,Oe,null),e(Oe,pk),e(Oe,ho),e(ho,hk),e(ho,yi),e(yi,uk),e(ho,mk),e(ho,Sl),e(Sl,fk),e(ho,_k),e(Oe,gk),f(en,Oe,null),e(Oe,kk),e(Oe,Al),e(Al,bk),e(Oe,yk),f(Za,Oe,null),h(o,Hp,p),h(o,uo,p),e(uo,tn),e(tn,Ol),f(Ya,Ol,null),e(uo,vk),e(uo,Il),e(Il,Tk),h(o,Vp,p),h(o,Je,p),f(es,Je,null),e(Je,Mk),e(Je,ts),e(ts,wk),e(ts,vi),e(vi,xk),e(ts,zk),e(Je,qk),e(Je,os),e(os,Bk),e(os,ns),e(ns,$k),e(os,Fk),e(Je,jk),e(Je,Y),f(as,Y,null),e(Y,Ek),e(Y,mo),e(mo,Pk),e(mo,Ti),e(Ti,Ck),e(mo,Sk),e(mo,Nl),e(Nl,Ak),e(mo,Ok),e(Y,Ik),f(on,Y,null),e(Y,Nk),e(Y,Dl),e(Dl,Dk),e(Y,Lk),f(ss,Y,null),e(Y,Gk),e(Y,Ll),e(Ll,Wk),e(Y,Rk),f(rs,Y,null),h(o,Qp,p),h(o,fo,p),e(fo,nn),e(nn,Gl),f(is,Gl,null),e(fo,Uk),e(fo,Wl),e(Wl,Xk),h(o,Jp,p),h(o,$e,p),f(ds,$e,null),e($e,Hk),e($e,_o),e(_o,Vk),e(_o,Rl),e(Rl,Qk),e(_o,Jk),e(_o,Ul),e(Ul,Kk),e(_o,Zk),e($e,Yk),e($e,ls),e(ls,eb),e(ls,Mi),e(Mi,tb),e(ls,ob),e($e,nb),e($e,cs),e(cs,ab),e(cs,ps),e(ps,sb),e(cs,rb),e($e,ib),e($e,ue),f(hs,ue,null),e(ue,db),e(ue,go),e(go,lb),e(go,wi),e(wi,cb),e(go,pb),e(go,Xl),e(Xl,hb),e(go,ub),e(ue,mb),f(an,ue,null),e(ue,fb),e(ue,Hl),e(Hl,_b),e(ue,gb),f(us,ue,null),e(ue,kb),f(ms,ue,null),h(o,Kp,p),h(o,ko,p),e(ko,sn),e(sn,Vl),f(fs,Vl,null),e(ko,bb),e(ko,Ql),e(Ql,yb),h(o,Zp,p),h(o,Fe,p),f(_s,Fe,null),e(Fe,vb),e(Fe,Jl),e(Jl,Tb),e(Fe,Mb),e(Fe,gs),e(gs,wb),e(gs,xi),e(xi,xb),e(gs,zb),e(Fe,qb),e(Fe,ks),e(ks,Bb),e(ks,bs),e(bs,$b),e(ks,Fb),e(Fe,jb),e(Fe,L),f(ys,L,null),e(L,Eb),e(L,bo),e(bo,Pb),e(bo,zi),e(zi,Cb),e(bo,Sb),e(bo,Kl),e(Kl,Ab),e(bo,Ob),e(L,Ib),f(rn,L,null),e(L,Nb),e(L,Zl),e(Zl,Db),e(L,Lb),f(vs,L,null),e(L,Gb),f(Ts,L,null),e(L,Wb),e(L,Yl),e(Yl,Rb),e(L,Ub),f(Ms,L,null),e(L,Xb),f(ws,L,null),h(o,Yp,p),h(o,yo,p),e(yo,dn),e(dn,ec),f(xs,ec,null),e(yo,Hb),e(yo,tc),e(tc,Vb),h(o,eh,p),h(o,vo,p),f(zs,vo,null),e(vo,Qb),e(vo,Mt),f(qs,Mt,null),e(Mt,Jb),e(Mt,oc),e(oc,Kb),e(Mt,Zb),f(Bs,Mt,null),h(o,th,p),h(o,To,p),e(To,ln),e(ln,nc),f($s,nc,null),e(To,Yb),e(To,ac),e(ac,ey),h(o,oh,p),h(o,je,p),f(Fs,je,null),e(je,ty),e(je,js),e(js,oy),e(js,qi),e(qi,ny),e(js,ay),e(je,sy),e(je,Es),e(Es,ry),e(Es,Ps),e(Ps,iy),e(Es,dy),e(je,ly),f(cn,je,null),e(je,cy),e(je,Ie),f(Cs,Ie,null),e(Ie,py),e(Ie,Mo),e(Mo,hy),e(Mo,Bi),e(Bi,uy),e(Mo,my),e(Mo,sc),e(sc,fy),e(Mo,_y),e(Ie,gy),f(pn,Ie,null),e(Ie,ky),e(Ie,rc),e(rc,by),e(Ie,yy),f(Ss,Ie,null),h(o,nh,p),h(o,wo,p),e(wo,hn),e(hn,ic),f(As,ic,null),e(wo,vy),e(wo,dc),e(dc,Ty),h(o,ah,p),h(o,Ee,p),f(Os,Ee,null),e(Ee,My),e(Ee,Is),e(Is,wy),e(Is,$i),e($i,xy),e(Is,zy),e(Ee,qy),e(Ee,Ns),e(Ns,By),e(Ns,Ds),e(Ds,$y),e(Ns,Fy),e(Ee,jy),f(un,Ee,null),e(Ee,Ey),e(Ee,ee),f(Ls,ee,null),e(ee,Py),e(ee,xo),e(xo,Cy),e(xo,Fi),e(Fi,Sy),e(xo,Ay),e(xo,lc),e(lc,Oy),e(xo,Iy),e(ee,Ny),f(mn,ee,null),e(ee,Dy),e(ee,cc),e(cc,Ly),e(ee,Gy),f(Gs,ee,null),e(ee,Wy),e(ee,pc),e(pc,Ry),e(ee,Uy),f(Ws,ee,null),h(o,sh,p),h(o,zo,p),e(zo,fn),e(fn,hc),f(Rs,hc,null),e(zo,Xy),e(zo,uc),e(uc,Hy),h(o,rh,p),h(o,R,p),f(Us,R,null),e(R,Vy),e(R,Xs),e(Xs,Qy),e(Xs,ji),e(ji,Jy),e(Xs,Ky),e(R,Zy),e(R,Hs),e(Hs,Yy),e(Hs,Vs),e(Vs,ev),e(Hs,tv),e(R,ov),e(R,mc),e(mc,nv),e(R,av),e(R,ft),e(ft,fc),e(fc,Qs),e(Qs,sv),e(ft,rv),e(ft,_c),e(_c,Js),e(Js,iv),e(ft,dv),e(ft,gc),e(gc,Ks),e(Ks,lv),e(ft,cv),e(ft,kc),e(kc,Zs),e(Zs,pv),e(R,hv),e(R,Ne),f(Ys,Ne,null),e(Ne,uv),e(Ne,qo),e(qo,mv),e(qo,bc),e(bc,fv),e(qo,_v),e(qo,yc),e(yc,gv),e(qo,kv),e(Ne,bv),f(_n,Ne,null),e(Ne,yv),e(Ne,vc),e(vc,vv),e(Ne,Tv),f(er,Ne,null),e(R,Mv),e(R,wt),f(tr,wt,null),e(wt,wv),e(wt,Tc),e(Tc,xv),e(wt,zv),f(or,wt,null),e(R,qv),e(R,xt),f(nr,xt,null),e(xt,Bv),e(xt,Mc),e(Mc,$v),e(xt,Fv),f(ar,xt,null),h(o,ih,p),h(o,Bo,p),e(Bo,gn),e(gn,wc),f(sr,wc,null),e(Bo,jv),e(Bo,xc),e(xc,Ev),h(o,dh,p),h(o,U,p),f(rr,U,null),e(U,Pv),e(U,ir),e(ir,Cv),e(ir,Ei),e(Ei,Sv),e(ir,Av),e(U,Ov),e(U,dr),e(dr,Iv),e(dr,lr),e(lr,Nv),e(dr,Dv),e(U,Lv),e(U,zc),e(zc,Gv),e(U,Wv),e(U,_t),e(_t,qc),e(qc,cr),e(cr,Rv),e(_t,Uv),e(_t,Bc),e(Bc,pr),e(pr,Xv),e(_t,Hv),e(_t,$c),e($c,hr),e(hr,Vv),e(_t,Qv),e(_t,Fc),e(Fc,ur),e(ur,Jv),e(U,Kv),e(U,te),f(mr,te,null),e(te,Zv),e(te,$o),e($o,Yv),e($o,jc),e(jc,e1),e($o,t1),e($o,Ec),e(Ec,o1),e($o,n1),e(te,a1),f(kn,te,null),e(te,s1),e(te,Pc),e(Pc,r1),e(te,i1),f(fr,te,null),e(te,d1),e(te,Cc),e(Cc,l1),e(te,c1),f(_r,te,null),e(U,p1),e(U,zt),f(gr,zt,null),e(zt,h1),e(zt,Sc),e(Sc,u1),e(zt,m1),f(kr,zt,null),e(U,f1),e(U,qt),f(br,qt,null),e(qt,_1),e(qt,Ac),e(Ac,g1),e(qt,k1),f(yr,qt,null),h(o,lh,p),h(o,Fo,p),e(Fo,bn),e(bn,Oc),f(vr,Oc,null),e(Fo,b1),e(Fo,Ic),e(Ic,y1),h(o,ch,p),h(o,O,p),f(Tr,O,null),e(O,v1),e(O,Nc),e(Nc,T1),e(O,M1),e(O,Mr),e(Mr,w1),e(Mr,Pi),e(Pi,x1),e(Mr,z1),e(O,q1),e(O,wr),e(wr,B1),e(wr,xr),e(xr,$1),e(wr,F1),e(O,j1),e(O,Dc),e(Dc,E1),e(O,P1),e(O,gt),e(gt,Lc),e(Lc,zr),e(zr,C1),e(gt,S1),e(gt,Gc),e(Gc,qr),e(qr,A1),e(gt,O1),e(gt,Wc),e(Wc,Br),e(Br,I1),e(gt,N1),e(gt,Rc),e(Rc,$r),e($r,D1),e(O,L1),e(O,De),f(Fr,De,null),e(De,G1),e(De,jo),e(jo,W1),e(jo,Uc),e(Uc,R1),e(jo,U1),e(jo,Xc),e(Xc,X1),e(jo,H1),e(De,V1),f(yn,De,null),e(De,Q1),e(De,Hc),e(Hc,J1),e(De,K1),f(jr,De,null),e(O,Z1),e(O,Bt),f(Er,Bt,null),e(Bt,Y1),e(Bt,Vc),e(Vc,eT),e(Bt,tT),f(Pr,Bt,null),e(O,oT),e(O,$t),f(Cr,$t,null),e($t,nT),e($t,Qc),e(Qc,aT),e($t,sT),f(Sr,$t,null),h(o,ph,p),h(o,Eo,p),e(Eo,vn),e(vn,Jc),f(Ar,Jc,null),e(Eo,rT),e(Eo,Kc),e(Kc,iT),h(o,hh,p),h(o,I,p),f(Or,I,null),e(I,dT),e(I,Po),e(Po,lT),e(Po,Zc),e(Zc,cT),e(Po,pT),e(Po,Yc),e(Yc,hT),e(Po,uT),e(I,mT),e(I,Ir),e(Ir,fT),e(Ir,Ci),e(Ci,_T),e(Ir,gT),e(I,kT),e(I,Nr),e(Nr,bT),e(Nr,Dr),e(Dr,yT),e(Nr,vT),e(I,TT),e(I,ep),e(ep,MT),e(I,wT),e(I,kt),e(kt,tp),e(tp,Lr),e(Lr,xT),e(kt,zT),e(kt,op),e(op,Gr),e(Gr,qT),e(kt,BT),e(kt,np),e(np,Wr),e(Wr,$T),e(kt,FT),e(kt,ap),e(ap,Rr),e(Rr,jT),e(I,ET),e(I,Le),f(Ur,Le,null),e(Le,PT),e(Le,Co),e(Co,CT),e(Co,sp),e(sp,ST),e(Co,AT),e(Co,rp),e(rp,OT),e(Co,IT),e(Le,NT),f(Tn,Le,null),e(Le,DT),e(Le,ip),e(ip,LT),e(Le,GT),f(Xr,Le,null),e(I,WT),e(I,Ft),f(Hr,Ft,null),e(Ft,RT),e(Ft,dp),e(dp,UT),e(Ft,XT),f(Vr,Ft,null),e(I,HT),e(I,jt),f(Qr,jt,null),e(jt,VT),e(jt,lp),e(lp,QT),e(jt,JT),f(Jr,jt,null),uh=!0},p(o,[p]){const Kr={};p&2&&(Kr.$$scope={dirty:p,ctx:o}),en.$set(Kr);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),on.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),an.$set(pp);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),rn.$set(hp);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),cn.$set(Mn);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),pn.$set(up);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),un.$set(mp);const Zr={};p&2&&(Zr.$$scope={dirty:p,ctx:o}),mn.$set(Zr);const fp={};p&2&&(fp.$$scope={dirty:p,ctx:o}),_n.$set(fp);const _p={};p&2&&(_p.$$scope={dirty:p,ctx:o}),kn.$set(_p);const gp={};p&2&&(gp.$$scope={dirty:p,ctx:o}),yn.$set(gp);const Yr={};p&2&&(Yr.$$scope={dirty:p,ctx:o}),Tn.$set(Yr)},i(o){uh||(_(T.$$.fragment,o),_(se.$$.fragment,o),_(He.$$.fragment,o),_(Sn.$$.fragment,o),_(On.$$.fragment,o),_(In.$$.fragment,o),_(Dn.$$.fragment,o),_(Ln.$$.fragment,o),_(Wn.$$.fragment,o),_(Rn.$$.fragment,o),_(Un.$$.fragment,o),_(Hn.$$.fragment,o),_(Vn.$$.fragment,o),_(Qn.$$.fragment,o),_(Zn.$$.fragment,o),_(Yn.$$.fragment,o),_(ea.$$.fragment,o),_(sa.$$.fragment,o),_(ra.$$.fragment,o),_(la.$$.fragment,o),_(ca.$$.fragment,o),_(fa.$$.fragment,o),_(_a.$$.fragment,o),_(ga.$$.fragment,o),_(ka.$$.fragment,o),_(ba.$$.fragment,o),_(Ma.$$.fragment,o),_(wa.$$.fragment,o),_($a.$$.fragment,o),_(Fa.$$.fragment,o),_(Ea.$$.fragment,o),_(Pa.$$.fragment,o),_(Ca.$$.fragment,o),_(Sa.$$.fragment,o),_(Ia.$$.fragment,o),_(Na.$$.fragment,o),_(Ra.$$.fragment,o),_(Ua.$$.fragment,o),_(Xa.$$.fragment,o),_(Ha.$$.fragment,o),_(Ka.$$.fragment,o),_(en.$$.fragment,o),_(Za.$$.fragment,o),_(Ya.$$.fragment,o),_(es.$$.fragment,o),_(as.$$.fragment,o),_(on.$$.fragment,o),_(ss.$$.fragment,o),_(rs.$$.fragment,o),_(is.$$.fragment,o),_(ds.$$.fragment,o),_(hs.$$.fragment,o),_(an.$$.fragment,o),_(us.$$.fragment,o),_(ms.$$.fragment,o),_(fs.$$.fragment,o),_(_s.$$.fragment,o),_(ys.$$.fragment,o),_(rn.$$.fragment,o),_(vs.$$.fragment,o),_(Ts.$$.fragment,o),_(Ms.$$.fragment,o),_(ws.$$.fragment,o),_(xs.$$.fragment,o),_(zs.$$.fragment,o),_(qs.$$.fragment,o),_(Bs.$$.fragment,o),_($s.$$.fragment,o),_(Fs.$$.fragment,o),_(cn.$$.fragment,o),_(Cs.$$.fragment,o),_(pn.$$.fragment,o),_(Ss.$$.fragment,o),_(As.$$.fragment,o),_(Os.$$.fragment,o),_(un.$$.fragment,o),_(Ls.$$.fragment,o),_(mn.$$.fragment,o),_(Gs.$$.fragment,o),_(Ws.$$.fragment,o),_(Rs.$$.fragment,o),_(Us.$$.fragment,o),_(Ys.$$.fragment,o),_(_n.$$.fragment,o),_(er.$$.fragment,o),_(tr.$$.fragment,o),_(or.$$.fragment,o),_(nr.$$.fragment,o),_(ar.$$.fragment,o),_(sr.$$.fragment,o),_(rr.$$.fragment,o),_(mr.$$.fragment,o),_(kn.$$.fragment,o),_(fr.$$.fragment,o),_(_r.$$.fragment,o),_(gr.$$.fragment,o),_(kr.$$.fragment,o),_(br.$$.fragment,o),_(yr.$$.fragment,o),_(vr.$$.fragment,o),_(Tr.$$.fragment,o),_(Fr.$$.fragment,o),_(yn.$$.fragment,o),_(jr.$$.fragment,o),_(Er.$$.fragment,o),_(Pr.$$.fragment,o),_(Cr.$$.fragment,o),_(Sr.$$.fragment,o),_(Ar.$$.fragment,o),_(Or.$$.fragment,o),_(Ur.$$.fragment,o),_(Tn.$$.fragment,o),_(Xr.$$.fragment,o),_(Hr.$$.fragment,o),_(Vr.$$.fragment,o),_(Qr.$$.fragment,o),_(Jr.$$.fragment,o),uh=!0)},o(o){g(T.$$.fragment,o),g(se.$$.fragment,o),g(He.$$.fragment,o),g(Sn.$$.fragment,o),g(On.$$.fragment,o),g(In.$$.fragment,o),g(Dn.$$.fragment,o),g(Ln.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(sa.$$.fragment,o),g(ra.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(Ma.$$.fragment,o),g(wa.$$.fragment,o),g($a.$$.fragment,o),g(Fa.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Na.$$.fragment,o),g(Ra.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ha.$$.fragment,o),g(Ka.$$.fragment,o),g(en.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(on.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(hs.$$.fragment,o),g(an.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(_s.$$.fragment,o),g(ys.$$.fragment,o),g(rn.$$.fragment,o),g(vs.$$.fragment,o),g(Ts.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(Bs.$$.fragment,o),g($s.$$.fragment,o),g(Fs.$$.fragment,o),g(cn.$$.fragment,o),g(Cs.$$.fragment,o),g(pn.$$.fragment,o),g(Ss.$$.fragment,o),g(As.$$.fragment,o),g(Os.$$.fragment,o),g(un.$$.fragment,o),g(Ls.$$.fragment,o),g(mn.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Rs.$$.fragment,o),g(Us.$$.fragment,o),g(Ys.$$.fragment,o),g(_n.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(ar.$$.fragment,o),g(sr.$$.fragment,o),g(rr.$$.fragment,o),g(mr.$$.fragment,o),g(kn.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(br.$$.fragment,o),g(yr.$$.fragment,o),g(vr.$$.fragment,o),g(Tr.$$.fragment,o),g(Fr.$$.fragment,o),g(yn.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Cr.$$.fragment,o),g(Sr.$$.fragment,o),g(Ar.$$.fragment,o),g(Or.$$.fragment,o),g(Ur.$$.fragment,o),g(Tn.$$.fragment,o),g(Xr.$$.fragment,o),g(Hr.$$.fragment,o),g(Vr.$$.fragment,o),g(Qr.$$.fragment,o),g(Jr.$$.fragment,o),uh=!1},d(o){t(b),o&&t(z),o&&t(v),k(T),o&&t(Pe),o&&t(j),o&&t(Ke),o&&t(J),k(se),o&&t(pe),o&&t(he),o&&t(D),o&&t(Ce),o&&t(Ze),o&&t(re),o&&t(Ye),o&&t(M),k(He),o&&t(bt),o&&t(H),o&&t(bp),o&&t(yt),o&&t(yp),o&&t(oi),o&&t(vp),k(Sn,o),o&&t(Tp),o&&t(ni),o&&t(Mp),k(On,o),o&&t(wp),o&&t(Yt),k(In),o&&t(xp),o&&t(vt),o&&t(zp),o&&t(ai),o&&t(qp),o&&t(si),o&&t(Bp),o&&t(eo),k(Dn),o&&t($p),o&&t(et),o&&t(Fp),o&&t(Oo),o&&t(jp),o&&t(ii),o&&t(Ep),k(Ln,o),o&&t(Pp),o&&t(di),o&&t(Cp),k(Wn,o),o&&t(Sp),o&&t(to),k(Rn),o&&t(Ap),o&&t(Be),k(Un),k(Hn),o&&t(Op),o&&t(ao),k(Vn),o&&t(Ip),o&&t(G),k(Qn),k(Zn),k(Yn),k(ea),o&&t(Np),o&&t(so),k(sa),o&&t(Dp),o&&t(C),k(ra),k(la),k(ca),k(fa),k(_a),k(ga),o&&t(Lp),o&&t(io),k(ka),o&&t(Gp),o&&t(S),k(ba),k(Ma),k(wa),k($a),k(Fa),k(Ea),k(Pa),o&&t(Wp),o&&t(lo),k(Ca),o&&t(Rp),o&&t(W),k(Sa),k(Ia),k(Na),k(Ra),k(Ua),o&&t(Up),o&&t(po),k(Xa),o&&t(Xp),o&&t(Qe),k(Ha),k(Ka),k(en),k(Za),o&&t(Hp),o&&t(uo),k(Ya),o&&t(Vp),o&&t(Je),k(es),k(as),k(on),k(ss),k(rs),o&&t(Qp),o&&t(fo),k(is),o&&t(Jp),o&&t($e),k(ds),k(hs),k(an),k(us),k(ms),o&&t(Kp),o&&t(ko),k(fs),o&&t(Zp),o&&t(Fe),k(_s),k(ys),k(rn),k(vs),k(Ts),k(Ms),k(ws),o&&t(Yp),o&&t(yo),k(xs),o&&t(eh),o&&t(vo),k(zs),k(qs),k(Bs),o&&t(th),o&&t(To),k($s),o&&t(oh),o&&t(je),k(Fs),k(cn),k(Cs),k(pn),k(Ss),o&&t(nh),o&&t(wo),k(As),o&&t(ah),o&&t(Ee),k(Os),k(un),k(Ls),k(mn),k(Gs),k(Ws),o&&t(sh),o&&t(zo),k(Rs),o&&t(rh),o&&t(R),k(Us),k(Ys),k(_n),k(er),k(tr),k(or),k(nr),k(ar),o&&t(ih),o&&t(Bo),k(sr),o&&t(dh),o&&t(U),k(rr),k(mr),k(kn),k(fr),k(_r),k(gr),k(kr),k(br),k(yr),o&&t(lh),o&&t(Fo),k(vr),o&&t(ch),o&&t(O),k(Tr),k(Fr),k(yn),k(jr),k(Er),k(Pr),k(Cr),k(Sr),o&&t(ph),o&&t(Eo),k(Ar),o&&t(hh),o&&t(I),k(Or),k(Ur),k(Tn),k(Xr),k(Hr),k(Vr),k(Qr),k(Jr)}}}const n0={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function a0(E){return W2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class c0 extends N2{constructor(b){super();D2(this,b,a0,o0,L2,{})}}export{c0 as default,n0 as metadata};
