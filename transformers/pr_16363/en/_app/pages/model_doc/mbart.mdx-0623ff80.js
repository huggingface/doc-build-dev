import{S as O2,i as I2,s as N2,e as n,k as d,w as u,t as r,M as D2,c as a,d as t,m as l,a as s,x as m,h as i,b as c,F as e,g as h,y as f,q as _,o as g,B as k,v as L2}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-abef54e3.js";import{C as F}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as U}from"../../chunks/IconCopyLink-7a11ce68.js";function G2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function W2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function R2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function U2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function X2(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,ae,P,A,lt,ce,pe,ct,K,pt,ht,D,Ce,ve,Ze,se,Te,Me,ut,re,we,xe,Ye;return{c(){b=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),j=n("p"),Ue=r("This second option is useful when using "),ke=n("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),lt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),Te=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),we=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){b=a(M,"P",{});var $=s(b);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(M),w=a(M,"UL",{});var ze=s(w);x=a(ze,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(ze),B=a(ze,"LI",{});var Ut=s(B);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Pe=l(M),j=a(M,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(M),N=a(M,"P",{});var X=s(N);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(M),P=a(M,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);lt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),ct=i(de," only and nothing else: "),K=a(de,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),ht=l(ie),D=a(ie,"LI",{});var le=s(D);Ce=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(le,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),Te=a(le,"CODE",{});var Jt=s(Te);Me=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);we=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Ve,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(M,$){h(M,b,$),e(b,z),h(M,v,$),h(M,w,$),e(w,x),e(x,T),e(w,y),e(w,B),e(B,rt),h(M,Pe,$),h(M,j,$),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(M,J,$),h(M,N,$),e(N,Xe),h(M,ae,$),h(M,P,$),e(P,A),e(A,lt),e(A,ce),e(ce,pe),e(A,ct),e(A,K),e(K,pt),e(P,ht),e(P,D),e(D,Ce),e(D,ve),e(ve,Ze),e(D,se),e(D,Te),e(Te,Me),e(P,ut),e(P,re),e(re,we),e(re,xe),e(xe,Ye)},d(M){M&&t(b),M&&t(v),M&&t(w),M&&t(Pe),M&&t(j),M&&t(J),M&&t(N),M&&t(ae),M&&t(P)}}}function H2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function V2(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,ae,P,A,lt,ce,pe,ct,K,pt,ht,D,Ce,ve,Ze,se,Te,Me,ut,re,we,xe,Ye;return{c(){b=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),w=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),rt=r("having all inputs as a list, tuple or dict in the first positional arguments."),Pe=d(),j=n("p"),Ue=r("This second option is useful when using "),ke=n("code"),it=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=n("code"),dt=r("model(inputs)"),Ke=r("."),J=d(),N=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),lt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),ct=r(" only and nothing else: "),K=n("code"),pt=r("model(input_ids)"),ht=d(),D=n("li"),Ce=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),Te=n("code"),Me=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),we=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(M){b=a(M,"P",{});var $=s(b);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(M),w=a(M,"UL",{});var ze=s(w);x=a(ze,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(ze),B=a(ze,"LI",{});var Ut=s(B);rt=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),ze.forEach(t),Pe=l(M),j=a(M,"P",{});var Z=s(j);Ue=i(Z,"This second option is useful when using "),ke=a(Z,"CODE",{});var Xt=s(ke);it=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),be=i(Z,` method which currently requires having all the
tensors in the first argument of the model call function: `),ye=a(Z,"CODE",{});var bt=s(ye);dt=i(bt,"model(inputs)"),bt.forEach(t),Ke=i(Z,"."),Z.forEach(t),J=l(M),N=a(M,"P",{});var X=s(N);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(M),P=a(M,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);lt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),ct=i(de," only and nothing else: "),K=a(de,"CODE",{});var Vt=s(K);pt=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),ht=l(ie),D=a(ie,"LI",{});var le=s(D);Ce=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(le,"CODE",{});var Qt=s(ve);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),Te=a(le,"CODE",{});var Jt=s(Te);Me=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);we=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),xe=a(Ve,"CODE",{});var Kt=s(xe);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(M,$){h(M,b,$),e(b,z),h(M,v,$),h(M,w,$),e(w,x),e(x,T),e(w,y),e(w,B),e(B,rt),h(M,Pe,$),h(M,j,$),e(j,Ue),e(j,ke),e(ke,it),e(j,be),e(j,ye),e(ye,dt),e(j,Ke),h(M,J,$),h(M,N,$),e(N,Xe),h(M,ae,$),h(M,P,$),e(P,A),e(A,lt),e(A,ce),e(ce,pe),e(A,ct),e(A,K),e(K,pt),e(P,ht),e(P,D),e(D,Ce),e(D,ve),e(ve,Ze),e(D,se),e(D,Te),e(Te,Me),e(P,ut),e(P,re),e(re,we),e(re,xe),e(xe,Ye)},d(M){M&&t(b),M&&t(v),M&&t(w),M&&t(Pe),M&&t(j),M&&t(J),M&&t(N),M&&t(ae),M&&t(P)}}}function Q2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function J2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){b=a(T,"P",{});var y=s(b);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);w=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function K2(E){let b,z,v,w,x;return{c(){b=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),w=r("Module"),x=r(`
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
the latter silently ignores them.`),y.forEach(t)},m(T,y){h(T,b,y),e(b,z),e(b,v),e(v,w),e(b,x)},d(T){T&&t(b)}}}function e0(E){let b,z,v,w,x,T,y,B,rt,Pe,j,Ue,ke,it,be,ye,dt,Ke,J,N,Xe,ae,P,A,lt,ce,pe,ct,K,pt,ht,D,Ce,ve,Ze,se,Te,Me,ut,re,we,xe,Ye,M,$,ze,He,Ut,Z,Xt,bt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Cu,dd,Su,Au,kp,yt,Ou,Cn,ld,Iu,Nu,Du,ei,Lu,Gu,bp,ti,cd,Wu,yp,Sn,vp,oi,An,pd,Ru,Uu,Zt,Xu,hd,Hu,Vu,ud,Qu,Ju,Tp,On,Mp,Yt,So,md,In,Ku,fd,Zu,wp,vt,Yu,Nn,em,tm,_d,om,nm,xp,ni,am,zp,ai,gd,sm,qp,eo,Ao,kd,Dn,rm,bd,im,Bp,et,dm,yd,lm,cm,vd,pm,hm,Td,um,mm,$p,Oo,fm,si,_m,gm,Fp,ri,Md,km,jp,Ln,Ep,ii,Gn,wd,bm,ym,qe,vm,xd,Tm,Mm,zd,wm,xm,qd,zm,qm,Bd,Bm,$m,$d,Fm,jm,Pp,Wn,Cp,to,Io,Fd,Rn,Em,jd,Pm,Sp,Be,Un,Cm,oo,Sm,di,Am,Om,Xn,Im,Nm,Dm,no,Lm,li,Gm,Wm,ci,Rm,Um,Xm,Ed,Hm,Vm,Hn,Ap,ao,No,Pd,Vn,Qm,Cd,Jm,Op,L,Qn,Km,Sd,Zm,Ym,mt,ef,pi,tf,of,hi,nf,af,Jn,sf,rf,df,Kn,lf,Ad,cf,pf,hf,Od,uf,mf,Zn,ff,Do,Yn,_f,Id,gf,kf,tt,ea,bf,ta,yf,Nd,vf,Tf,Mf,oa,na,Dd,wf,xf,Ld,zf,qf,aa,Gd,Bf,$f,Wd,Ff,jf,Rd,Ef,Ip,so,Lo,Ud,sa,Pf,Xd,Cf,Np,C,ra,Sf,ro,Af,Hd,Of,If,ia,Nf,Df,Lf,Tt,ui,Gf,Wf,mi,Rf,Uf,fi,Xf,Hf,Vf,da,Qf,Vd,Jf,Kf,Zf,Qd,Yf,e_,la,t_,Se,ca,o_,Jd,n_,a_,pa,s_,Kd,r_,i_,d_,ha,ua,Zd,l_,c_,Yd,p_,h_,ma,el,u_,m_,tl,f_,__,ol,g_,k_,Go,fa,b_,nl,y_,v_,Wo,_a,T_,al,M_,w_,Ro,ga,x_,sl,z_,Dp,io,Uo,rl,ka,q_,il,B_,Lp,S,ba,$_,ya,F_,va,j_,E_,P_,Ta,C_,_i,S_,A_,O_,dl,I_,N_,Ma,D_,ot,wa,L_,xa,G_,ll,W_,R_,U_,za,qa,cl,X_,H_,pl,V_,Q_,Ba,hl,J_,K_,ul,Z_,Y_,ml,eg,tg,Xo,$a,og,fl,ng,ag,Ho,Fa,sg,ja,rg,_l,ig,dg,lg,Vo,Ea,cg,gl,pg,hg,Qo,Pa,ug,kl,mg,Gp,lo,Jo,bl,Ca,fg,yl,_g,Wp,G,Sa,gg,co,kg,vl,bg,yg,Aa,vg,Tg,Mg,Oa,wg,gi,xg,zg,qg,Tl,Bg,$g,Ia,Fg,Ae,Na,jg,Ml,Eg,Pg,Da,Cg,wl,Sg,Ag,Og,La,Ga,xl,Ig,Ng,zl,Dg,Lg,Wa,ql,Gg,Wg,Bl,Rg,Ug,$l,Xg,Hg,Ko,Ra,Vg,Fl,Qg,Jg,Zo,Ua,Kg,jl,Zg,Rp,po,Yo,El,Xa,Yg,Pl,ek,Up,Qe,Ha,tk,Va,ok,ki,nk,ak,sk,Qa,rk,Ja,ik,dk,lk,Oe,Ka,ck,ho,pk,bi,hk,uk,Cl,mk,fk,_k,en,gk,Sl,kk,bk,Za,Xp,uo,tn,Al,Ya,yk,Ol,vk,Hp,Je,es,Tk,ts,Mk,yi,wk,xk,zk,os,qk,ns,Bk,$k,Fk,Y,as,jk,mo,Ek,vi,Pk,Ck,Il,Sk,Ak,Ok,on,Ik,Nl,Nk,Dk,ss,Lk,Dl,Gk,Wk,rs,Vp,fo,nn,Ll,is,Rk,Gl,Uk,Qp,$e,ds,Xk,_o,Hk,Wl,Vk,Qk,Rl,Jk,Kk,Zk,ls,Yk,Ti,eb,tb,ob,cs,nb,ps,ab,sb,rb,he,hs,ib,go,db,Mi,lb,cb,Ul,pb,hb,ub,an,mb,Xl,fb,_b,us,gb,ms,Jp,ko,sn,Hl,fs,kb,Vl,bb,Kp,Fe,_s,yb,Ql,vb,Tb,gs,Mb,wi,wb,xb,zb,ks,qb,bs,Bb,$b,Fb,H,ys,jb,bo,Eb,xi,Pb,Cb,Jl,Sb,Ab,Ob,rn,Ib,Kl,Nb,Db,vs,Lb,Ts,Gb,Zl,Wb,Rb,Ms,Zp,yo,dn,Yl,ws,Ub,ec,Xb,Yp,vo,xs,Hb,Mt,zs,Vb,tc,Qb,Jb,qs,eh,To,ln,oc,Bs,Kb,nc,Zb,th,je,$s,Yb,Fs,ey,zi,ty,oy,ny,js,ay,Es,sy,ry,iy,cn,dy,Ie,Ps,ly,Mo,cy,qi,py,hy,ac,uy,my,fy,pn,_y,sc,gy,ky,Cs,oh,wo,hn,rc,Ss,by,ic,yy,nh,Ee,As,vy,Os,Ty,Bi,My,wy,xy,Is,zy,Ns,qy,By,$y,un,Fy,ee,Ds,jy,xo,Ey,$i,Py,Cy,dc,Sy,Ay,Oy,mn,Iy,lc,Ny,Dy,Ls,Ly,cc,Gy,Wy,Gs,ah,zo,fn,pc,Ws,Ry,hc,Uy,sh,W,Rs,Xy,Us,Hy,Fi,Vy,Qy,Jy,Xs,Ky,Hs,Zy,Yy,ev,uc,tv,ov,ft,mc,Vs,nv,av,fc,Qs,sv,rv,_c,Js,iv,dv,gc,Ks,lv,cv,Ne,Zs,pv,qo,hv,kc,uv,mv,bc,fv,_v,gv,_n,kv,yc,bv,yv,Ys,vv,wt,er,Tv,vc,Mv,wv,tr,xv,xt,or,zv,Tc,qv,Bv,nr,rh,Bo,gn,Mc,ar,$v,wc,Fv,ih,R,sr,jv,rr,Ev,ji,Pv,Cv,Sv,ir,Av,dr,Ov,Iv,Nv,xc,Dv,Lv,_t,zc,lr,Gv,Wv,qc,cr,Rv,Uv,Bc,pr,Xv,Hv,$c,hr,Vv,Qv,te,ur,Jv,$o,Kv,Fc,Zv,Yv,jc,eT,tT,oT,kn,nT,Ec,aT,sT,mr,rT,Pc,iT,dT,fr,lT,zt,_r,cT,Cc,pT,hT,gr,uT,qt,kr,mT,Sc,fT,_T,br,dh,Fo,bn,Ac,yr,gT,Oc,kT,lh,O,vr,bT,Ic,yT,vT,Tr,TT,Ei,MT,wT,xT,Mr,zT,wr,qT,BT,$T,Nc,FT,jT,gt,Dc,xr,ET,PT,Lc,zr,CT,ST,Gc,qr,AT,OT,Wc,Br,IT,NT,De,$r,DT,jo,LT,Rc,GT,WT,Uc,RT,UT,XT,yn,HT,Xc,VT,QT,Fr,JT,Bt,jr,KT,Hc,ZT,YT,Er,eM,$t,Pr,tM,Vc,oM,nM,Cr,ch,Eo,vn,Qc,Sr,aM,Jc,sM,ph,I,Ar,rM,Po,iM,Kc,dM,lM,Zc,cM,pM,hM,Or,uM,Pi,mM,fM,_M,Ir,gM,Nr,kM,bM,yM,Yc,vM,TM,kt,ep,Dr,MM,wM,tp,Lr,xM,zM,op,Gr,qM,BM,np,Wr,$M,FM,Le,Rr,jM,Co,EM,ap,PM,CM,sp,SM,AM,OM,Tn,IM,rp,NM,DM,Ur,LM,Ft,Xr,GM,ip,WM,RM,Hr,UM,jt,Vr,XM,dp,HM,VM,Qr,hh;return T=new U({}),ae=new U({}),He=new U({}),Sn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),On=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

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
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),In=new U({}),Dn=new U({}),Ln=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Wn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Rn=new U({}),Un=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/configuration_mbart.py#L34",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Hn=new F({props:{code:`from transformers import MBartModel, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Vn=new U({}),Qn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Zn=new F({props:{code:`from transformers import MBartTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Yn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),ea=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sa=new U({}),ra=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart_fast.py#L60"}}),la=new F({props:{code:`from transformers import MBartTokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),ca=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart_fast.py#L162",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart_fast.py#L191",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_a=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart_fast.py#L250"}}),ga=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/tokenization_mbart_fast.py#L265"}}),ka=new U({}),ba=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ma=new F({props:{code:`from transformers import MBart50Tokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),wa=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$a=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),Fa=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Pa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Ca=new U({}),Sa=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L56",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Ia=new F({props:{code:`from transformers import MBart50TokenizerFast

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L169",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L220"}}),Ua=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L235"}}),Xa=new U({}),Ha=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1134",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ka=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1161",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new st({props:{$$slots:{default:[G2]},$$scope:{ctx:E}}}),Za=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ya=new U({}),es=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1251",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1295",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new st({props:{$$slots:{default:[W2]},$$scope:{ctx:E}}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
<span class="hljs-string">&#x27;42 este r\u0103spuns&#x27;</span>`}}),rs=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

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
[<span class="hljs-string">&#x27;nett&#x27;</span>, <span class="hljs-string">&#x27;sehr&#x27;</span>, <span class="hljs-string">&#x27;ganz&#x27;</span>, <span class="hljs-string">&#x27;nicht&#x27;</span>, <span class="hljs-string">&#x27;so&#x27;</span>]`}}),is=new U({}),ds=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1551",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hs=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1563",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new st({props:{$$slots:{default:[R2]},$$scope:{ctx:E}}}),us=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
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
[<span class="hljs-number">1</span>, <span class="hljs-number">16</span>]`}}),ms=new F({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.04</span>`}}),fs=new U({}),_s=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1424",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1437",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new st({props:{$$slots:{default:[U2]},$$scope:{ctx:E}}}),vs=new F({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),Ts=new F({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Ms=new F({props:{code:`import torch
from transformers import MBartTokenizer, MBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),ws=new U({}),xs=new q({props:{name:"class transformers.MBartForCausalLM",anchor:"transformers.MBartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1684"}}),zs=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_mbart.py#L1715",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

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
<span class="hljs-literal">True</span>`}}),Bs=new U({}),$s=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_tf_mbart.py#L1147",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new st({props:{$$slots:{default:[X2]},$$scope:{ctx:E}}}),Ps=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_tf_mbart.py#L1159",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new st({props:{$$slots:{default:[H2]},$$scope:{ctx:E}}}),Cs=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ss=new U({}),As=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_tf_mbart.py#L1234",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new st({props:{$$slots:{default:[V2]},$$scope:{ctx:E}}}),Ds=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor] = None"},{name:"attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": [typing.Tuple[typing.Tuple[tensorflow.python.framework.ops.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_tf_mbart.py#L1267",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new st({props:{$$slots:{default:[Q2]},$$scope:{ctx:E}}}),Ls=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Gs=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ws=new U({}),Rs=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1265",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Zs=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new st({props:{$$slots:{default:[J2]},$$scope:{ctx:E}}}),Ys=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),er=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),or=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),ar=new U({}),sr=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1352",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ur=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new st({props:{$$slots:{default:[K2]},$$scope:{ctx:E}}}),mr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),_r=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),kr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1356",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),br=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yr=new U({}),vr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1665",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),$r=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new st({props:{$$slots:{default:[Z2]},$$scope:{ctx:E}}}),Fr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),jr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Er=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Pr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Sr=new U({}),Ar=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1753",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Rr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1202",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new st({props:{$$slots:{default:[Y2]},$$scope:{ctx:E}}}),Ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Xr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1026",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Hr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Vr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/mbart/modeling_flax_mbart.py#L1089",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

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
@patrickvonplaten`),Ke=d(),J=n("h2"),N=n("a"),Xe=n("span"),u(ae.$$.fragment),P=d(),A=n("span"),lt=r("Overview of MBart"),ce=d(),pe=n("p"),ct=r("The MBart model was presented in "),K=n("a"),pt=r("Multilingual Denoising Pre-training for Neural Machine Translation"),ht=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ce=n("p"),ve=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=n("p"),Te=r("This model was contributed by "),Me=n("a"),ut=r("valhalla"),re=r(". The Authors\u2019 code can be found "),we=n("a"),xe=r("here"),Ye=d(),M=n("h3"),$=n("a"),ze=n("span"),u(He.$$.fragment),Ut=d(),Z=n("span"),Xt=r("Training of MBart"),bt=d(),X=n("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),le=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Cu=r(". "),dd=n("code"),Su=r("bos"),Au=r(" is never used."),kp=d(),yt=n("p"),Ou=r("The regular "),Cn=n("a"),ld=n("strong"),Iu=r("call"),Nu=r("()"),Du=r(` will encode source text format, and it should be wrapped
inside the context manager `),ei=n("a"),Lu=r("as_target_tokenizer()"),Gu=r(" to encode target text format."),bp=d(),ti=n("ul"),cd=n("li"),Wu=r("Supervised training"),yp=d(),u(Sn.$$.fragment),vp=d(),oi=n("ul"),An=n("li"),pd=n("p"),Ru=r("Generation"),Uu=d(),Zt=n("p"),Xu=r("While generating the target text set the "),hd=n("code"),Hu=r("decoder_start_token_id"),Vu=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),ud=n("em"),Qu=r("facebook/mbart-large-en-ro"),Ju=r(" model."),Tp=d(),u(On.$$.fragment),Mp=d(),Yt=n("h2"),So=n("a"),md=n("span"),u(In.$$.fragment),Ku=d(),fd=n("span"),Zu=r("Overview of MBart-50"),wp=d(),vt=n("p"),Yu=r("MBart-50 was introduced in the "),Nn=n("a"),em=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),tm=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),_d=n("em"),om=r("mbart-large-cc25"),nm=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),xp=d(),ni=n("p"),am=r("According to the abstract"),zp=d(),ai=n("p"),gd=n("em"),sm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),qp=d(),eo=n("h3"),Ao=n("a"),kd=n("span"),u(Dn.$$.fragment),rm=d(),bd=n("span"),im=r("Training of MBart-50"),Bp=d(),et=n("p"),dm=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),yd=n("code"),lm=r("[lang_code] X [eos]"),cm=r(", where "),vd=n("code"),pm=r("lang_code"),hm=r(` is source
language id for source text and target language id for target text, with `),Td=n("code"),um=r("X"),mm=r(` being the source or target text
respectively.`),$p=d(),Oo=n("p"),fm=r("MBart-50 has its own tokenizer "),si=n("a"),_m=r("MBart50Tokenizer"),gm=r("."),Fp=d(),ri=n("ul"),Md=n("li"),km=r("Supervised training"),jp=d(),u(Ln.$$.fragment),Ep=d(),ii=n("ul"),Gn=n("li"),wd=n("p"),bm=r("Generation"),ym=d(),qe=n("p"),vm=r("To generate using the mBART-50 multilingual translation models, "),xd=n("code"),Tm=r("eos_token_id"),Mm=r(` is used as the
`),zd=n("code"),wm=r("decoder_start_token_id"),xm=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),qd=n("em"),zm=r("forced_bos_token_id"),qm=r(" parameter to the "),Bd=n("em"),Bm=r("generate"),$m=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=n("em"),Fm=r("facebook/mbart-50-large-many-to-many"),jm=r(" checkpoint."),Pp=d(),u(Wn.$$.fragment),Cp=d(),to=n("h2"),Io=n("a"),Fd=n("span"),u(Rn.$$.fragment),Em=d(),jd=n("span"),Pm=r("MBartConfig"),Sp=d(),Be=n("div"),u(Un.$$.fragment),Cm=d(),oo=n("p"),Sm=r("This is the configuration class to store the configuration of a "),di=n("a"),Am=r("MBartModel"),Om=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=n("a"),Im=r("facebook/mbart-large-cc25"),Nm=r(" architecture."),Dm=d(),no=n("p"),Lm=r("Configuration objects inherit from "),li=n("a"),Gm=r("PretrainedConfig"),Wm=r(` and can be used to control the model outputs. Read the
documentation from `),ci=n("a"),Rm=r("PretrainedConfig"),Um=r(" for more information."),Xm=d(),Ed=n("p"),Hm=r("Example:"),Vm=d(),u(Hn.$$.fragment),Ap=d(),ao=n("h2"),No=n("a"),Pd=n("span"),u(Vn.$$.fragment),Qm=d(),Cd=n("span"),Jm=r("MBartTokenizer"),Op=d(),L=n("div"),u(Qn.$$.fragment),Km=d(),Sd=n("p"),Zm=r("Construct an MBART tokenizer."),Ym=d(),mt=n("p"),ef=r("Adapted from "),pi=n("a"),tf=r("RobertaTokenizer"),of=r(" and "),hi=n("a"),nf=r("XLNetTokenizer"),af=r(`. Based on
`),Jn=n("a"),sf=r("SentencePiece"),rf=r("."),df=d(),Kn=n("p"),lf=r("The tokenization method is "),Ad=n("code"),cf=r("<tokens> <eos> <language code>"),pf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),hf=d(),Od=n("p"),uf=r("Examples:"),mf=d(),u(Zn.$$.fragment),ff=d(),Do=n("div"),u(Yn.$$.fragment),_f=d(),Id=n("p"),gf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),kf=d(),tt=n("div"),u(ea.$$.fragment),bf=d(),ta=n("p"),yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Nd=n("code"),vf=r("X"),Tf=r(" represents the sequence:"),Mf=d(),oa=n("ul"),na=n("li"),Dd=n("code"),wf=r("input_ids"),xf=r(" (for encoder) "),Ld=n("code"),zf=r("X [eos, src_lang_code]"),qf=d(),aa=n("li"),Gd=n("code"),Bf=r("decoder_input_ids"),$f=r(": (for decoder) "),Wd=n("code"),Ff=r("X [eos, tgt_lang_code]"),jf=d(),Rd=n("p"),Ef=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Ip=d(),so=n("h2"),Lo=n("a"),Ud=n("span"),u(sa.$$.fragment),Pf=d(),Xd=n("span"),Cf=r("MBartTokenizerFast"),Np=d(),C=n("div"),u(ra.$$.fragment),Sf=d(),ro=n("p"),Af=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Hd=n("em"),Of=r("tokenizers"),If=r(` library). Based on
`),ia=n("a"),Nf=r("BPE"),Df=r("."),Lf=d(),Tt=n("p"),ui=n("a"),Gf=r("MBartTokenizerFast"),Wf=r(" is a subclass of "),mi=n("a"),Rf=r("XLMRobertaTokenizerFast"),Uf=r(`. Refer to superclass
`),fi=n("a"),Xf=r("XLMRobertaTokenizerFast"),Hf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Vf=d(),da=n("p"),Qf=r("The tokenization method is "),Vd=n("code"),Jf=r("<tokens> <eos> <language code>"),Kf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Zf=d(),Qd=n("p"),Yf=r("Examples:"),e_=d(),u(la.$$.fragment),t_=d(),Se=n("div"),u(ca.$$.fragment),o_=d(),Jd=n("p"),n_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),a_=d(),pa=n("p"),s_=r("An MBART sequence has the following format, where "),Kd=n("code"),r_=r("X"),i_=r(" represents the sequence:"),d_=d(),ha=n("ul"),ua=n("li"),Zd=n("code"),l_=r("input_ids"),c_=r(" (for encoder) "),Yd=n("code"),p_=r("X [eos, src_lang_code]"),h_=d(),ma=n("li"),el=n("code"),u_=r("decoder_input_ids"),m_=r(": (for decoder) "),tl=n("code"),f_=r("X [eos, tgt_lang_code]"),__=d(),ol=n("p"),g_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),k_=d(),Go=n("div"),u(fa.$$.fragment),b_=d(),nl=n("p"),y_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),v_=d(),Wo=n("div"),u(_a.$$.fragment),T_=d(),al=n("p"),M_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),w_=d(),Ro=n("div"),u(ga.$$.fragment),x_=d(),sl=n("p"),z_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Dp=d(),io=n("h2"),Uo=n("a"),rl=n("span"),u(ka.$$.fragment),q_=d(),il=n("span"),B_=r("MBart50Tokenizer"),Lp=d(),S=n("div"),u(ba.$$.fragment),$_=d(),ya=n("p"),F_=r("Construct a MBart50 tokenizer. Based on "),va=n("a"),j_=r("SentencePiece"),E_=r("."),P_=d(),Ta=n("p"),C_=r("This tokenizer inherits from "),_i=n("a"),S_=r("PreTrainedTokenizer"),A_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),O_=d(),dl=n("p"),I_=r("Examples:"),N_=d(),u(Ma.$$.fragment),D_=d(),ot=n("div"),u(wa.$$.fragment),L_=d(),xa=n("p"),G_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),ll=n("code"),W_=r("X"),R_=r(" represents the sequence:"),U_=d(),za=n("ul"),qa=n("li"),cl=n("code"),X_=r("input_ids"),H_=r(" (for encoder) "),pl=n("code"),V_=r("[src_lang_code] X [eos]"),Q_=d(),Ba=n("li"),hl=n("code"),J_=r("labels"),K_=r(": (for decoder) "),ul=n("code"),Z_=r("[tgt_lang_code] X [eos]"),Y_=d(),ml=n("p"),eg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),tg=d(),Xo=n("div"),u($a.$$.fragment),og=d(),fl=n("p"),ng=r("Converts a sequence of tokens (strings for sub-words) in a single string."),ag=d(),Ho=n("div"),u(Fa.$$.fragment),sg=d(),ja=n("p"),rg=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_l=n("code"),ig=r("prepare_for_model"),dg=r(" method."),lg=d(),Vo=n("div"),u(Ea.$$.fragment),cg=d(),gl=n("p"),pg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),hg=d(),Qo=n("div"),u(Pa.$$.fragment),ug=d(),kl=n("p"),mg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Gp=d(),lo=n("h2"),Jo=n("a"),bl=n("span"),u(Ca.$$.fragment),fg=d(),yl=n("span"),_g=r("MBart50TokenizerFast"),Wp=d(),G=n("div"),u(Sa.$$.fragment),gg=d(),co=n("p"),kg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),vl=n("em"),bg=r("tokenizers"),yg=r(` library). Based on
`),Aa=n("a"),vg=r("BPE"),Tg=r("."),Mg=d(),Oa=n("p"),wg=r("This tokenizer inherits from "),gi=n("a"),xg=r("PreTrainedTokenizerFast"),zg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qg=d(),Tl=n("p"),Bg=r("Examples:"),$g=d(),u(Ia.$$.fragment),Fg=d(),Ae=n("div"),u(Na.$$.fragment),jg=d(),Ml=n("p"),Eg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Pg=d(),Da=n("p"),Cg=r("An MBART-50 sequence has the following format, where "),wl=n("code"),Sg=r("X"),Ag=r(" represents the sequence:"),Og=d(),La=n("ul"),Ga=n("li"),xl=n("code"),Ig=r("input_ids"),Ng=r(" (for encoder) "),zl=n("code"),Dg=r("[src_lang_code] X [eos]"),Lg=d(),Wa=n("li"),ql=n("code"),Gg=r("labels"),Wg=r(": (for decoder) "),Bl=n("code"),Rg=r("[tgt_lang_code] X [eos]"),Ug=d(),$l=n("p"),Xg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Hg=d(),Ko=n("div"),u(Ra.$$.fragment),Vg=d(),Fl=n("p"),Qg=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Jg=d(),Zo=n("div"),u(Ua.$$.fragment),Kg=d(),jl=n("p"),Zg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Rp=d(),po=n("h2"),Yo=n("a"),El=n("span"),u(Xa.$$.fragment),Yg=d(),Pl=n("span"),ek=r("MBartModel"),Up=d(),Qe=n("div"),u(Ha.$$.fragment),tk=d(),Va=n("p"),ok=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ki=n("a"),nk=r("PreTrainedModel"),ak=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sk=d(),Qa=n("p"),rk=r("This model is also a PyTorch "),Ja=n("a"),ik=r("torch.nn.Module"),dk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lk=d(),Oe=n("div"),u(Ka.$$.fragment),ck=d(),ho=n("p"),pk=r("The "),bi=n("a"),hk=r("MBartModel"),uk=r(" forward method, overrides the "),Cl=n("code"),mk=r("__call__"),fk=r(" special method."),_k=d(),u(en.$$.fragment),gk=d(),Sl=n("p"),kk=r("Example:"),bk=d(),u(Za.$$.fragment),Xp=d(),uo=n("h2"),tn=n("a"),Al=n("span"),u(Ya.$$.fragment),yk=d(),Ol=n("span"),vk=r("MBartForConditionalGeneration"),Hp=d(),Je=n("div"),u(es.$$.fragment),Tk=d(),ts=n("p"),Mk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),yi=n("a"),wk=r("PreTrainedModel"),xk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zk=d(),os=n("p"),qk=r("This model is also a PyTorch "),ns=n("a"),Bk=r("torch.nn.Module"),$k=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fk=d(),Y=n("div"),u(as.$$.fragment),jk=d(),mo=n("p"),Ek=r("The "),vi=n("a"),Pk=r("MBartForConditionalGeneration"),Ck=r(" forward method, overrides the "),Il=n("code"),Sk=r("__call__"),Ak=r(" special method."),Ok=d(),u(on.$$.fragment),Ik=d(),Nl=n("p"),Nk=r("Translation example:"),Dk=d(),u(ss.$$.fragment),Lk=d(),Dl=n("p"),Gk=r("Mask filling example:"),Wk=d(),u(rs.$$.fragment),Vp=d(),fo=n("h2"),nn=n("a"),Ll=n("span"),u(is.$$.fragment),Rk=d(),Gl=n("span"),Uk=r("MBartForQuestionAnswering"),Qp=d(),$e=n("div"),u(ds.$$.fragment),Xk=d(),_o=n("p"),Hk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Wl=n("code"),Vk=r("span start logits"),Qk=r(" and "),Rl=n("code"),Jk=r("span end logits"),Kk=r(")."),Zk=d(),ls=n("p"),Yk=r("This model inherits from "),Ti=n("a"),eb=r("PreTrainedModel"),tb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ob=d(),cs=n("p"),nb=r("This model is also a PyTorch "),ps=n("a"),ab=r("torch.nn.Module"),sb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rb=d(),he=n("div"),u(hs.$$.fragment),ib=d(),go=n("p"),db=r("The "),Mi=n("a"),lb=r("MBartForQuestionAnswering"),cb=r(" forward method, overrides the "),Ul=n("code"),pb=r("__call__"),hb=r(" special method."),ub=d(),u(an.$$.fragment),mb=d(),Xl=n("p"),fb=r("Example:"),_b=d(),u(us.$$.fragment),gb=d(),u(ms.$$.fragment),Jp=d(),ko=n("h2"),sn=n("a"),Hl=n("span"),u(fs.$$.fragment),kb=d(),Vl=n("span"),bb=r("MBartForSequenceClassification"),Kp=d(),Fe=n("div"),u(_s.$$.fragment),yb=d(),Ql=n("p"),vb=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Tb=d(),gs=n("p"),Mb=r("This model inherits from "),wi=n("a"),wb=r("PreTrainedModel"),xb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zb=d(),ks=n("p"),qb=r("This model is also a PyTorch "),bs=n("a"),Bb=r("torch.nn.Module"),$b=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fb=d(),H=n("div"),u(ys.$$.fragment),jb=d(),bo=n("p"),Eb=r("The "),xi=n("a"),Pb=r("MBartForSequenceClassification"),Cb=r(" forward method, overrides the "),Jl=n("code"),Sb=r("__call__"),Ab=r(" special method."),Ob=d(),u(rn.$$.fragment),Ib=d(),Kl=n("p"),Nb=r("Example of single-label classification:"),Db=d(),u(vs.$$.fragment),Lb=d(),u(Ts.$$.fragment),Gb=d(),Zl=n("p"),Wb=r("Example of multi-label classification:"),Rb=d(),u(Ms.$$.fragment),Zp=d(),yo=n("h2"),dn=n("a"),Yl=n("span"),u(ws.$$.fragment),Ub=d(),ec=n("span"),Xb=r("MBartForCausalLM"),Yp=d(),vo=n("div"),u(xs.$$.fragment),Hb=d(),Mt=n("div"),u(zs.$$.fragment),Vb=d(),tc=n("p"),Qb=r("Example:"),Jb=d(),u(qs.$$.fragment),eh=d(),To=n("h2"),ln=n("a"),oc=n("span"),u(Bs.$$.fragment),Kb=d(),nc=n("span"),Zb=r("TFMBartModel"),th=d(),je=n("div"),u($s.$$.fragment),Yb=d(),Fs=n("p"),ey=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),zi=n("a"),ty=r("TFPreTrainedModel"),oy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ny=d(),js=n("p"),ay=r("This model is also a "),Es=n("a"),sy=r("tf.keras.Model"),ry=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iy=d(),u(cn.$$.fragment),dy=d(),Ie=n("div"),u(Ps.$$.fragment),ly=d(),Mo=n("p"),cy=r("The "),qi=n("a"),py=r("TFMBartModel"),hy=r(" forward method, overrides the "),ac=n("code"),uy=r("__call__"),my=r(" special method."),fy=d(),u(pn.$$.fragment),_y=d(),sc=n("p"),gy=r("Example:"),ky=d(),u(Cs.$$.fragment),oh=d(),wo=n("h2"),hn=n("a"),rc=n("span"),u(Ss.$$.fragment),by=d(),ic=n("span"),yy=r("TFMBartForConditionalGeneration"),nh=d(),Ee=n("div"),u(As.$$.fragment),vy=d(),Os=n("p"),Ty=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=n("a"),My=r("TFPreTrainedModel"),wy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xy=d(),Is=n("p"),zy=r("This model is also a "),Ns=n("a"),qy=r("tf.keras.Model"),By=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$y=d(),u(un.$$.fragment),Fy=d(),ee=n("div"),u(Ds.$$.fragment),jy=d(),xo=n("p"),Ey=r("The "),$i=n("a"),Py=r("TFMBartForConditionalGeneration"),Cy=r(" forward method, overrides the "),dc=n("code"),Sy=r("__call__"),Ay=r(" special method."),Oy=d(),u(mn.$$.fragment),Iy=d(),lc=n("p"),Ny=r("Summarization example:"),Dy=d(),u(Ls.$$.fragment),Ly=d(),cc=n("p"),Gy=r("Mask filling example:"),Wy=d(),u(Gs.$$.fragment),ah=d(),zo=n("h2"),fn=n("a"),pc=n("span"),u(Ws.$$.fragment),Ry=d(),hc=n("span"),Uy=r("FlaxMBartModel"),sh=d(),W=n("div"),u(Rs.$$.fragment),Xy=d(),Us=n("p"),Hy=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=n("a"),Vy=r("FlaxPreTrainedModel"),Qy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jy=d(),Xs=n("p"),Ky=r(`This model is also a Flax Linen
`),Hs=n("a"),Zy=r("flax.nn.Module"),Yy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),ev=d(),uc=n("p"),tv=r("Finally, this model supports inherent JAX features such as:"),ov=d(),ft=n("ul"),mc=n("li"),Vs=n("a"),nv=r("Just-In-Time (JIT) compilation"),av=d(),fc=n("li"),Qs=n("a"),sv=r("Automatic Differentiation"),rv=d(),_c=n("li"),Js=n("a"),iv=r("Vectorization"),dv=d(),gc=n("li"),Ks=n("a"),lv=r("Parallelization"),cv=d(),Ne=n("div"),u(Zs.$$.fragment),pv=d(),qo=n("p"),hv=r("The "),kc=n("code"),uv=r("FlaxMBartPreTrainedModel"),mv=r("forward method, overrides the "),bc=n("code"),fv=r("__call__"),_v=r(" special method."),gv=d(),u(_n.$$.fragment),kv=d(),yc=n("p"),bv=r("Example:"),yv=d(),u(Ys.$$.fragment),vv=d(),wt=n("div"),u(er.$$.fragment),Tv=d(),vc=n("p"),Mv=r("Example:"),wv=d(),u(tr.$$.fragment),xv=d(),xt=n("div"),u(or.$$.fragment),zv=d(),Tc=n("p"),qv=r("Example:"),Bv=d(),u(nr.$$.fragment),rh=d(),Bo=n("h2"),gn=n("a"),Mc=n("span"),u(ar.$$.fragment),$v=d(),wc=n("span"),Fv=r("FlaxMBartForConditionalGeneration"),ih=d(),R=n("div"),u(sr.$$.fragment),jv=d(),rr=n("p"),Ev=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=n("a"),Pv=r("FlaxPreTrainedModel"),Cv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=d(),ir=n("p"),Av=r(`This model is also a Flax Linen
`),dr=n("a"),Ov=r("flax.nn.Module"),Iv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Nv=d(),xc=n("p"),Dv=r("Finally, this model supports inherent JAX features such as:"),Lv=d(),_t=n("ul"),zc=n("li"),lr=n("a"),Gv=r("Just-In-Time (JIT) compilation"),Wv=d(),qc=n("li"),cr=n("a"),Rv=r("Automatic Differentiation"),Uv=d(),Bc=n("li"),pr=n("a"),Xv=r("Vectorization"),Hv=d(),$c=n("li"),hr=n("a"),Vv=r("Parallelization"),Qv=d(),te=n("div"),u(ur.$$.fragment),Jv=d(),$o=n("p"),Kv=r("The "),Fc=n("code"),Zv=r("FlaxMBartPreTrainedModel"),Yv=r("forward method, overrides the "),jc=n("code"),eT=r("__call__"),tT=r(" special method."),oT=d(),u(kn.$$.fragment),nT=d(),Ec=n("p"),aT=r("Summarization example:"),sT=d(),u(mr.$$.fragment),rT=d(),Pc=n("p"),iT=r("Mask filling example:"),dT=d(),u(fr.$$.fragment),lT=d(),zt=n("div"),u(_r.$$.fragment),cT=d(),Cc=n("p"),pT=r("Example:"),hT=d(),u(gr.$$.fragment),uT=d(),qt=n("div"),u(kr.$$.fragment),mT=d(),Sc=n("p"),fT=r("Example:"),_T=d(),u(br.$$.fragment),dh=d(),Fo=n("h2"),bn=n("a"),Ac=n("span"),u(yr.$$.fragment),gT=d(),Oc=n("span"),kT=r("FlaxMBartForSequenceClassification"),lh=d(),O=n("div"),u(vr.$$.fragment),bT=d(),Ic=n("p"),yT=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),vT=d(),Tr=n("p"),TT=r("This model inherits from "),Ei=n("a"),MT=r("FlaxPreTrainedModel"),wT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=d(),Mr=n("p"),zT=r(`This model is also a Flax Linen
`),wr=n("a"),qT=r("flax.nn.Module"),BT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$T=d(),Nc=n("p"),FT=r("Finally, this model supports inherent JAX features such as:"),jT=d(),gt=n("ul"),Dc=n("li"),xr=n("a"),ET=r("Just-In-Time (JIT) compilation"),PT=d(),Lc=n("li"),zr=n("a"),CT=r("Automatic Differentiation"),ST=d(),Gc=n("li"),qr=n("a"),AT=r("Vectorization"),OT=d(),Wc=n("li"),Br=n("a"),IT=r("Parallelization"),NT=d(),De=n("div"),u($r.$$.fragment),DT=d(),jo=n("p"),LT=r("The "),Rc=n("code"),GT=r("FlaxMBartPreTrainedModel"),WT=r("forward method, overrides the "),Uc=n("code"),RT=r("__call__"),UT=r(" special method."),XT=d(),u(yn.$$.fragment),HT=d(),Xc=n("p"),VT=r("Example:"),QT=d(),u(Fr.$$.fragment),JT=d(),Bt=n("div"),u(jr.$$.fragment),KT=d(),Hc=n("p"),ZT=r("Example:"),YT=d(),u(Er.$$.fragment),eM=d(),$t=n("div"),u(Pr.$$.fragment),tM=d(),Vc=n("p"),oM=r("Example:"),nM=d(),u(Cr.$$.fragment),ch=d(),Eo=n("h2"),vn=n("a"),Qc=n("span"),u(Sr.$$.fragment),aM=d(),Jc=n("span"),sM=r("FlaxMBartForQuestionAnswering"),ph=d(),I=n("div"),u(Ar.$$.fragment),rM=d(),Po=n("p"),iM=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kc=n("code"),dM=r("span start logits"),lM=r(" and "),Zc=n("code"),cM=r("span end logits"),pM=r(")."),hM=d(),Or=n("p"),uM=r("This model inherits from "),Pi=n("a"),mM=r("FlaxPreTrainedModel"),fM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_M=d(),Ir=n("p"),gM=r(`This model is also a Flax Linen
`),Nr=n("a"),kM=r("flax.nn.Module"),bM=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),yM=d(),Yc=n("p"),vM=r("Finally, this model supports inherent JAX features such as:"),TM=d(),kt=n("ul"),ep=n("li"),Dr=n("a"),MM=r("Just-In-Time (JIT) compilation"),wM=d(),tp=n("li"),Lr=n("a"),xM=r("Automatic Differentiation"),zM=d(),op=n("li"),Gr=n("a"),qM=r("Vectorization"),BM=d(),np=n("li"),Wr=n("a"),$M=r("Parallelization"),FM=d(),Le=n("div"),u(Rr.$$.fragment),jM=d(),Co=n("p"),EM=r("The "),ap=n("code"),PM=r("FlaxMBartPreTrainedModel"),CM=r("forward method, overrides the "),sp=n("code"),SM=r("__call__"),AM=r(" special method."),OM=d(),u(Tn.$$.fragment),IM=d(),rp=n("p"),NM=r("Example:"),DM=d(),u(Ur.$$.fragment),LM=d(),Ft=n("div"),u(Xr.$$.fragment),GM=d(),ip=n("p"),WM=r("Example:"),RM=d(),u(Hr.$$.fragment),UM=d(),jt=n("div"),u(Vr.$$.fragment),XM=d(),dp=n("p"),HM=r("Example:"),VM=d(),u(Qr.$$.fragment),this.h()},l(o){const p=D2('[data-svelte="svelte-1phssyn"]',document.head);b=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Jr=s(v);w=a(Jr,"A",{id:!0,class:!0,href:!0});var lp=s(w);x=a(lp,"SPAN",{});var cp=s(x);m(T.$$.fragment,cp),cp.forEach(t),lp.forEach(t),y=l(Jr),B=a(Jr,"SPAN",{});var pp=s(B);rt=i(pp,"MBart and MBart-50"),pp.forEach(t),Jr.forEach(t),Pe=l(o),j=a(o,"P",{});var Mn=s(j);Ue=a(Mn,"STRONG",{});var hp=s(Ue);ke=i(hp,"DISCLAIMER:"),hp.forEach(t),it=i(Mn," If you see something strange, file a "),be=a(Mn,"A",{href:!0,rel:!0});var up=s(be);ye=i(up,"Github Issue"),up.forEach(t),dt=i(Mn,` and assign
@patrickvonplaten`),Mn.forEach(t),Ke=l(o),J=a(o,"H2",{class:!0});var Kr=s(J);N=a(Kr,"A",{id:!0,class:!0,href:!0});var mp=s(N);Xe=a(mp,"SPAN",{});var fp=s(Xe);m(ae.$$.fragment,fp),fp.forEach(t),mp.forEach(t),P=l(Kr),A=a(Kr,"SPAN",{});var _p=s(A);lt=i(_p,"Overview of MBart"),_p.forEach(t),Kr.forEach(t),ce=l(o),pe=a(o,"P",{});var Zr=s(pe);ct=i(Zr,"The MBart model was presented in "),K=a(Zr,"A",{href:!0,rel:!0});var JM=s(K);pt=i(JM,"Multilingual Denoising Pre-training for Neural Machine Translation"),JM.forEach(t),ht=i(Zr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Zr.forEach(t),D=l(o),Ce=a(o,"P",{});var KM=s(Ce);ve=i(KM,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),KM.forEach(t),Ze=l(o),se=a(o,"P",{});var gp=s(se);Te=i(gp,"This model was contributed by "),Me=a(gp,"A",{href:!0,rel:!0});var ZM=s(Me);ut=i(ZM,"valhalla"),ZM.forEach(t),re=i(gp,". The Authors\u2019 code can be found "),we=a(gp,"A",{href:!0,rel:!0});var YM=s(we);xe=i(YM,"here"),YM.forEach(t),gp.forEach(t),Ye=l(o),M=a(o,"H3",{class:!0});var uh=s(M);$=a(uh,"A",{id:!0,class:!0,href:!0});var e1=s($);ze=a(e1,"SPAN",{});var t1=s(ze);m(He.$$.fragment,t1),t1.forEach(t),e1.forEach(t),Ut=l(uh),Z=a(uh,"SPAN",{});var o1=s(Z);Xt=i(o1,"Training of MBart"),o1.forEach(t),uh.forEach(t),bt=l(o),X=a(o,"P",{});var Et=s(X);ie=i(Et,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(Et,"CODE",{});var n1=s(de);Ht=i(n1,"X [eos, src_lang_code]"),n1.forEach(t),Vt=i(Et," where "),le=a(Et,"CODE",{});var a1=s(le);Qt=i(a1,"X"),a1.forEach(t),Jt=i(Et,` is the source text. The
target text format is `),Ve=a(Et,"CODE",{});var s1=s(Ve);Kt=i(s1,"[tgt_lang_code] X [eos]"),s1.forEach(t),Cu=i(Et,". "),dd=a(Et,"CODE",{});var r1=s(dd);Su=i(r1,"bos"),r1.forEach(t),Au=i(Et," is never used."),Et.forEach(t),kp=l(o),yt=a(o,"P",{});var Ci=s(yt);Ou=i(Ci,"The regular "),Cn=a(Ci,"A",{href:!0});var QM=s(Cn);ld=a(QM,"STRONG",{});var i1=s(ld);Iu=i(i1,"call"),i1.forEach(t),Nu=i(QM,"()"),QM.forEach(t),Du=i(Ci,` will encode source text format, and it should be wrapped
inside the context manager `),ei=a(Ci,"A",{href:!0});var d1=s(ei);Lu=i(d1,"as_target_tokenizer()"),d1.forEach(t),Gu=i(Ci," to encode target text format."),Ci.forEach(t),bp=l(o),ti=a(o,"UL",{});var l1=s(ti);cd=a(l1,"LI",{});var c1=s(cd);Wu=i(c1,"Supervised training"),c1.forEach(t),l1.forEach(t),yp=l(o),m(Sn.$$.fragment,o),vp=l(o),oi=a(o,"UL",{});var p1=s(oi);An=a(p1,"LI",{});var mh=s(An);pd=a(mh,"P",{});var h1=s(pd);Ru=i(h1,"Generation"),h1.forEach(t),Uu=l(mh),Zt=a(mh,"P",{});var Si=s(Zt);Xu=i(Si,"While generating the target text set the "),hd=a(Si,"CODE",{});var u1=s(hd);Hu=i(u1,"decoder_start_token_id"),u1.forEach(t),Vu=i(Si,` to the target language id. The following
example shows how to translate English to Romanian using the `),ud=a(Si,"EM",{});var m1=s(ud);Qu=i(m1,"facebook/mbart-large-en-ro"),m1.forEach(t),Ju=i(Si," model."),Si.forEach(t),mh.forEach(t),p1.forEach(t),Tp=l(o),m(On.$$.fragment,o),Mp=l(o),Yt=a(o,"H2",{class:!0});var fh=s(Yt);So=a(fh,"A",{id:!0,class:!0,href:!0});var f1=s(So);md=a(f1,"SPAN",{});var _1=s(md);m(In.$$.fragment,_1),_1.forEach(t),f1.forEach(t),Ku=l(fh),fd=a(fh,"SPAN",{});var g1=s(fd);Zu=i(g1,"Overview of MBart-50"),g1.forEach(t),fh.forEach(t),wp=l(o),vt=a(o,"P",{});var Ai=s(vt);Yu=i(Ai,"MBart-50 was introduced in the "),Nn=a(Ai,"A",{href:!0,rel:!0});var k1=s(Nn);em=i(k1,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),k1.forEach(t),tm=i(Ai,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),_d=a(Ai,"EM",{});var b1=s(_d);om=i(b1,"mbart-large-cc25"),b1.forEach(t),nm=i(Ai,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Ai.forEach(t),xp=l(o),ni=a(o,"P",{});var y1=s(ni);am=i(y1,"According to the abstract"),y1.forEach(t),zp=l(o),ai=a(o,"P",{});var v1=s(ai);gd=a(v1,"EM",{});var T1=s(gd);sm=i(T1,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),T1.forEach(t),v1.forEach(t),qp=l(o),eo=a(o,"H3",{class:!0});var _h=s(eo);Ao=a(_h,"A",{id:!0,class:!0,href:!0});var M1=s(Ao);kd=a(M1,"SPAN",{});var w1=s(kd);m(Dn.$$.fragment,w1),w1.forEach(t),M1.forEach(t),rm=l(_h),bd=a(_h,"SPAN",{});var x1=s(bd);im=i(x1,"Training of MBart-50"),x1.forEach(t),_h.forEach(t),Bp=l(o),et=a(o,"P",{});var wn=s(et);dm=i(wn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),yd=a(wn,"CODE",{});var z1=s(yd);lm=i(z1,"[lang_code] X [eos]"),z1.forEach(t),cm=i(wn,", where "),vd=a(wn,"CODE",{});var q1=s(vd);pm=i(q1,"lang_code"),q1.forEach(t),hm=i(wn,` is source
language id for source text and target language id for target text, with `),Td=a(wn,"CODE",{});var B1=s(Td);um=i(B1,"X"),B1.forEach(t),mm=i(wn,` being the source or target text
respectively.`),wn.forEach(t),$p=l(o),Oo=a(o,"P",{});var gh=s(Oo);fm=i(gh,"MBart-50 has its own tokenizer "),si=a(gh,"A",{href:!0});var $1=s(si);_m=i($1,"MBart50Tokenizer"),$1.forEach(t),gm=i(gh,"."),gh.forEach(t),Fp=l(o),ri=a(o,"UL",{});var F1=s(ri);Md=a(F1,"LI",{});var j1=s(Md);km=i(j1,"Supervised training"),j1.forEach(t),F1.forEach(t),jp=l(o),m(Ln.$$.fragment,o),Ep=l(o),ii=a(o,"UL",{});var E1=s(ii);Gn=a(E1,"LI",{});var kh=s(Gn);wd=a(kh,"P",{});var P1=s(wd);bm=i(P1,"Generation"),P1.forEach(t),ym=l(kh),qe=a(kh,"P",{});var nt=s(qe);vm=i(nt,"To generate using the mBART-50 multilingual translation models, "),xd=a(nt,"CODE",{});var C1=s(xd);Tm=i(C1,"eos_token_id"),C1.forEach(t),Mm=i(nt,` is used as the
`),zd=a(nt,"CODE",{});var S1=s(zd);wm=i(S1,"decoder_start_token_id"),S1.forEach(t),xm=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),qd=a(nt,"EM",{});var A1=s(qd);zm=i(A1,"forced_bos_token_id"),A1.forEach(t),qm=i(nt," parameter to the "),Bd=a(nt,"EM",{});var O1=s(Bd);Bm=i(O1,"generate"),O1.forEach(t),$m=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),$d=a(nt,"EM",{});var I1=s($d);Fm=i(I1,"facebook/mbart-50-large-many-to-many"),I1.forEach(t),jm=i(nt," checkpoint."),nt.forEach(t),kh.forEach(t),E1.forEach(t),Pp=l(o),m(Wn.$$.fragment,o),Cp=l(o),to=a(o,"H2",{class:!0});var bh=s(to);Io=a(bh,"A",{id:!0,class:!0,href:!0});var N1=s(Io);Fd=a(N1,"SPAN",{});var D1=s(Fd);m(Rn.$$.fragment,D1),D1.forEach(t),N1.forEach(t),Em=l(bh),jd=a(bh,"SPAN",{});var L1=s(jd);Pm=i(L1,"MBartConfig"),L1.forEach(t),bh.forEach(t),Sp=l(o),Be=a(o,"DIV",{class:!0});var Pt=s(Be);m(Un.$$.fragment,Pt),Cm=l(Pt),oo=a(Pt,"P",{});var Oi=s(oo);Sm=i(Oi,"This is the configuration class to store the configuration of a "),di=a(Oi,"A",{href:!0});var G1=s(di);Am=i(G1,"MBartModel"),G1.forEach(t),Om=i(Oi,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Xn=a(Oi,"A",{href:!0,rel:!0});var W1=s(Xn);Im=i(W1,"facebook/mbart-large-cc25"),W1.forEach(t),Nm=i(Oi," architecture."),Oi.forEach(t),Dm=l(Pt),no=a(Pt,"P",{});var Ii=s(no);Lm=i(Ii,"Configuration objects inherit from "),li=a(Ii,"A",{href:!0});var R1=s(li);Gm=i(R1,"PretrainedConfig"),R1.forEach(t),Wm=i(Ii,` and can be used to control the model outputs. Read the
documentation from `),ci=a(Ii,"A",{href:!0});var U1=s(ci);Rm=i(U1,"PretrainedConfig"),U1.forEach(t),Um=i(Ii," for more information."),Ii.forEach(t),Xm=l(Pt),Ed=a(Pt,"P",{});var X1=s(Ed);Hm=i(X1,"Example:"),X1.forEach(t),Vm=l(Pt),m(Hn.$$.fragment,Pt),Pt.forEach(t),Ap=l(o),ao=a(o,"H2",{class:!0});var yh=s(ao);No=a(yh,"A",{id:!0,class:!0,href:!0});var H1=s(No);Pd=a(H1,"SPAN",{});var V1=s(Pd);m(Vn.$$.fragment,V1),V1.forEach(t),H1.forEach(t),Qm=l(yh),Cd=a(yh,"SPAN",{});var Q1=s(Cd);Jm=i(Q1,"MBartTokenizer"),Q1.forEach(t),yh.forEach(t),Op=l(o),L=a(o,"DIV",{class:!0});var ue=s(L);m(Qn.$$.fragment,ue),Km=l(ue),Sd=a(ue,"P",{});var J1=s(Sd);Zm=i(J1,"Construct an MBART tokenizer."),J1.forEach(t),Ym=l(ue),mt=a(ue,"P",{});var xn=s(mt);ef=i(xn,"Adapted from "),pi=a(xn,"A",{href:!0});var K1=s(pi);tf=i(K1,"RobertaTokenizer"),K1.forEach(t),of=i(xn," and "),hi=a(xn,"A",{href:!0});var Z1=s(hi);nf=i(Z1,"XLNetTokenizer"),Z1.forEach(t),af=i(xn,`. Based on
`),Jn=a(xn,"A",{href:!0,rel:!0});var Y1=s(Jn);sf=i(Y1,"SentencePiece"),Y1.forEach(t),rf=i(xn,"."),xn.forEach(t),df=l(ue),Kn=a(ue,"P",{});var vh=s(Kn);lf=i(vh,"The tokenization method is "),Ad=a(vh,"CODE",{});var ew=s(Ad);cf=i(ew,"<tokens> <eos> <language code>"),ew.forEach(t),pf=i(vh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),vh.forEach(t),hf=l(ue),Od=a(ue,"P",{});var tw=s(Od);uf=i(tw,"Examples:"),tw.forEach(t),mf=l(ue),m(Zn.$$.fragment,ue),ff=l(ue),Do=a(ue,"DIV",{class:!0});var Th=s(Do);m(Yn.$$.fragment,Th),_f=l(Th),Id=a(Th,"P",{});var ow=s(Id);gf=i(ow,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),ow.forEach(t),Th.forEach(t),kf=l(ue),tt=a(ue,"DIV",{class:!0});var zn=s(tt);m(ea.$$.fragment,zn),bf=l(zn),ta=a(zn,"P",{});var Mh=s(ta);yf=i(Mh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Nd=a(Mh,"CODE",{});var nw=s(Nd);vf=i(nw,"X"),nw.forEach(t),Tf=i(Mh," represents the sequence:"),Mh.forEach(t),Mf=l(zn),oa=a(zn,"UL",{});var wh=s(oa);na=a(wh,"LI",{});var xh=s(na);Dd=a(xh,"CODE",{});var aw=s(Dd);wf=i(aw,"input_ids"),aw.forEach(t),xf=i(xh," (for encoder) "),Ld=a(xh,"CODE",{});var sw=s(Ld);zf=i(sw,"X [eos, src_lang_code]"),sw.forEach(t),xh.forEach(t),qf=l(wh),aa=a(wh,"LI",{});var zh=s(aa);Gd=a(zh,"CODE",{});var rw=s(Gd);Bf=i(rw,"decoder_input_ids"),rw.forEach(t),$f=i(zh,": (for decoder) "),Wd=a(zh,"CODE",{});var iw=s(Wd);Ff=i(iw,"X [eos, tgt_lang_code]"),iw.forEach(t),zh.forEach(t),wh.forEach(t),jf=l(zn),Rd=a(zn,"P",{});var dw=s(Rd);Ef=i(dw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),dw.forEach(t),zn.forEach(t),ue.forEach(t),Ip=l(o),so=a(o,"H2",{class:!0});var qh=s(so);Lo=a(qh,"A",{id:!0,class:!0,href:!0});var lw=s(Lo);Ud=a(lw,"SPAN",{});var cw=s(Ud);m(sa.$$.fragment,cw),cw.forEach(t),lw.forEach(t),Pf=l(qh),Xd=a(qh,"SPAN",{});var pw=s(Xd);Cf=i(pw,"MBartTokenizerFast"),pw.forEach(t),qh.forEach(t),Np=l(o),C=a(o,"DIV",{class:!0});var V=s(C);m(ra.$$.fragment,V),Sf=l(V),ro=a(V,"P",{});var Ni=s(ro);Af=i(Ni,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Hd=a(Ni,"EM",{});var hw=s(Hd);Of=i(hw,"tokenizers"),hw.forEach(t),If=i(Ni,` library). Based on
`),ia=a(Ni,"A",{href:!0,rel:!0});var uw=s(ia);Nf=i(uw,"BPE"),uw.forEach(t),Df=i(Ni,"."),Ni.forEach(t),Lf=l(V),Tt=a(V,"P",{});var Yr=s(Tt);ui=a(Yr,"A",{href:!0});var mw=s(ui);Gf=i(mw,"MBartTokenizerFast"),mw.forEach(t),Wf=i(Yr," is a subclass of "),mi=a(Yr,"A",{href:!0});var fw=s(mi);Rf=i(fw,"XLMRobertaTokenizerFast"),fw.forEach(t),Uf=i(Yr,`. Refer to superclass
`),fi=a(Yr,"A",{href:!0});var _w=s(fi);Xf=i(_w,"XLMRobertaTokenizerFast"),_w.forEach(t),Hf=i(Yr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Yr.forEach(t),Vf=l(V),da=a(V,"P",{});var Bh=s(da);Qf=i(Bh,"The tokenization method is "),Vd=a(Bh,"CODE",{});var gw=s(Vd);Jf=i(gw,"<tokens> <eos> <language code>"),gw.forEach(t),Kf=i(Bh," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Bh.forEach(t),Zf=l(V),Qd=a(V,"P",{});var kw=s(Qd);Yf=i(kw,"Examples:"),kw.forEach(t),e_=l(V),m(la.$$.fragment,V),t_=l(V),Se=a(V,"DIV",{class:!0});var Ct=s(Se);m(ca.$$.fragment,Ct),o_=l(Ct),Jd=a(Ct,"P",{});var bw=s(Jd);n_=i(bw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),bw.forEach(t),a_=l(Ct),pa=a(Ct,"P",{});var $h=s(pa);s_=i($h,"An MBART sequence has the following format, where "),Kd=a($h,"CODE",{});var yw=s(Kd);r_=i(yw,"X"),yw.forEach(t),i_=i($h," represents the sequence:"),$h.forEach(t),d_=l(Ct),ha=a(Ct,"UL",{});var Fh=s(ha);ua=a(Fh,"LI",{});var jh=s(ua);Zd=a(jh,"CODE",{});var vw=s(Zd);l_=i(vw,"input_ids"),vw.forEach(t),c_=i(jh," (for encoder) "),Yd=a(jh,"CODE",{});var Tw=s(Yd);p_=i(Tw,"X [eos, src_lang_code]"),Tw.forEach(t),jh.forEach(t),h_=l(Fh),ma=a(Fh,"LI",{});var Eh=s(ma);el=a(Eh,"CODE",{});var Mw=s(el);u_=i(Mw,"decoder_input_ids"),Mw.forEach(t),m_=i(Eh,": (for decoder) "),tl=a(Eh,"CODE",{});var ww=s(tl);f_=i(ww,"X [eos, tgt_lang_code]"),ww.forEach(t),Eh.forEach(t),Fh.forEach(t),__=l(Ct),ol=a(Ct,"P",{});var xw=s(ol);g_=i(xw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),xw.forEach(t),Ct.forEach(t),k_=l(V),Go=a(V,"DIV",{class:!0});var Ph=s(Go);m(fa.$$.fragment,Ph),b_=l(Ph),nl=a(Ph,"P",{});var zw=s(nl);y_=i(zw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),zw.forEach(t),Ph.forEach(t),v_=l(V),Wo=a(V,"DIV",{class:!0});var Ch=s(Wo);m(_a.$$.fragment,Ch),T_=l(Ch),al=a(Ch,"P",{});var qw=s(al);M_=i(qw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),qw.forEach(t),Ch.forEach(t),w_=l(V),Ro=a(V,"DIV",{class:!0});var Sh=s(Ro);m(ga.$$.fragment,Sh),x_=l(Sh),sl=a(Sh,"P",{});var Bw=s(sl);z_=i(Bw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Bw.forEach(t),Sh.forEach(t),V.forEach(t),Dp=l(o),io=a(o,"H2",{class:!0});var Ah=s(io);Uo=a(Ah,"A",{id:!0,class:!0,href:!0});var $w=s(Uo);rl=a($w,"SPAN",{});var Fw=s(rl);m(ka.$$.fragment,Fw),Fw.forEach(t),$w.forEach(t),q_=l(Ah),il=a(Ah,"SPAN",{});var jw=s(il);B_=i(jw,"MBart50Tokenizer"),jw.forEach(t),Ah.forEach(t),Lp=l(o),S=a(o,"DIV",{class:!0});var Q=s(S);m(ba.$$.fragment,Q),$_=l(Q),ya=a(Q,"P",{});var Oh=s(ya);F_=i(Oh,"Construct a MBart50 tokenizer. Based on "),va=a(Oh,"A",{href:!0,rel:!0});var Ew=s(va);j_=i(Ew,"SentencePiece"),Ew.forEach(t),E_=i(Oh,"."),Oh.forEach(t),P_=l(Q),Ta=a(Q,"P",{});var Ih=s(Ta);C_=i(Ih,"This tokenizer inherits from "),_i=a(Ih,"A",{href:!0});var Pw=s(_i);S_=i(Pw,"PreTrainedTokenizer"),Pw.forEach(t),A_=i(Ih,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ih.forEach(t),O_=l(Q),dl=a(Q,"P",{});var Cw=s(dl);I_=i(Cw,"Examples:"),Cw.forEach(t),N_=l(Q),m(Ma.$$.fragment,Q),D_=l(Q),ot=a(Q,"DIV",{class:!0});var qn=s(ot);m(wa.$$.fragment,qn),L_=l(qn),xa=a(qn,"P",{});var Nh=s(xa);G_=i(Nh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),ll=a(Nh,"CODE",{});var Sw=s(ll);W_=i(Sw,"X"),Sw.forEach(t),R_=i(Nh," represents the sequence:"),Nh.forEach(t),U_=l(qn),za=a(qn,"UL",{});var Dh=s(za);qa=a(Dh,"LI",{});var Lh=s(qa);cl=a(Lh,"CODE",{});var Aw=s(cl);X_=i(Aw,"input_ids"),Aw.forEach(t),H_=i(Lh," (for encoder) "),pl=a(Lh,"CODE",{});var Ow=s(pl);V_=i(Ow,"[src_lang_code] X [eos]"),Ow.forEach(t),Lh.forEach(t),Q_=l(Dh),Ba=a(Dh,"LI",{});var Gh=s(Ba);hl=a(Gh,"CODE",{});var Iw=s(hl);J_=i(Iw,"labels"),Iw.forEach(t),K_=i(Gh,": (for decoder) "),ul=a(Gh,"CODE",{});var Nw=s(ul);Z_=i(Nw,"[tgt_lang_code] X [eos]"),Nw.forEach(t),Gh.forEach(t),Dh.forEach(t),Y_=l(qn),ml=a(qn,"P",{});var Dw=s(ml);eg=i(Dw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Dw.forEach(t),qn.forEach(t),tg=l(Q),Xo=a(Q,"DIV",{class:!0});var Wh=s(Xo);m($a.$$.fragment,Wh),og=l(Wh),fl=a(Wh,"P",{});var Lw=s(fl);ng=i(Lw,"Converts a sequence of tokens (strings for sub-words) in a single string."),Lw.forEach(t),Wh.forEach(t),ag=l(Q),Ho=a(Q,"DIV",{class:!0});var Rh=s(Ho);m(Fa.$$.fragment,Rh),sg=l(Rh),ja=a(Rh,"P",{});var Uh=s(ja);rg=i(Uh,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_l=a(Uh,"CODE",{});var Gw=s(_l);ig=i(Gw,"prepare_for_model"),Gw.forEach(t),dg=i(Uh," method."),Uh.forEach(t),Rh.forEach(t),lg=l(Q),Vo=a(Q,"DIV",{class:!0});var Xh=s(Vo);m(Ea.$$.fragment,Xh),cg=l(Xh),gl=a(Xh,"P",{});var Ww=s(gl);pg=i(Ww,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Ww.forEach(t),Xh.forEach(t),hg=l(Q),Qo=a(Q,"DIV",{class:!0});var Hh=s(Qo);m(Pa.$$.fragment,Hh),ug=l(Hh),kl=a(Hh,"P",{});var Rw=s(kl);mg=i(Rw,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Rw.forEach(t),Hh.forEach(t),Q.forEach(t),Gp=l(o),lo=a(o,"H2",{class:!0});var Vh=s(lo);Jo=a(Vh,"A",{id:!0,class:!0,href:!0});var Uw=s(Jo);bl=a(Uw,"SPAN",{});var Xw=s(bl);m(Ca.$$.fragment,Xw),Xw.forEach(t),Uw.forEach(t),fg=l(Vh),yl=a(Vh,"SPAN",{});var Hw=s(yl);_g=i(Hw,"MBart50TokenizerFast"),Hw.forEach(t),Vh.forEach(t),Wp=l(o),G=a(o,"DIV",{class:!0});var me=s(G);m(Sa.$$.fragment,me),gg=l(me),co=a(me,"P",{});var Di=s(co);kg=i(Di,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),vl=a(Di,"EM",{});var Vw=s(vl);bg=i(Vw,"tokenizers"),Vw.forEach(t),yg=i(Di,` library). Based on
`),Aa=a(Di,"A",{href:!0,rel:!0});var Qw=s(Aa);vg=i(Qw,"BPE"),Qw.forEach(t),Tg=i(Di,"."),Di.forEach(t),Mg=l(me),Oa=a(me,"P",{});var Qh=s(Oa);wg=i(Qh,"This tokenizer inherits from "),gi=a(Qh,"A",{href:!0});var Jw=s(gi);xg=i(Jw,"PreTrainedTokenizerFast"),Jw.forEach(t),zg=i(Qh,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qh.forEach(t),qg=l(me),Tl=a(me,"P",{});var Kw=s(Tl);Bg=i(Kw,"Examples:"),Kw.forEach(t),$g=l(me),m(Ia.$$.fragment,me),Fg=l(me),Ae=a(me,"DIV",{class:!0});var St=s(Ae);m(Na.$$.fragment,St),jg=l(St),Ml=a(St,"P",{});var Zw=s(Ml);Eg=i(Zw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Zw.forEach(t),Pg=l(St),Da=a(St,"P",{});var Jh=s(Da);Cg=i(Jh,"An MBART-50 sequence has the following format, where "),wl=a(Jh,"CODE",{});var Yw=s(wl);Sg=i(Yw,"X"),Yw.forEach(t),Ag=i(Jh," represents the sequence:"),Jh.forEach(t),Og=l(St),La=a(St,"UL",{});var Kh=s(La);Ga=a(Kh,"LI",{});var Zh=s(Ga);xl=a(Zh,"CODE",{});var ex=s(xl);Ig=i(ex,"input_ids"),ex.forEach(t),Ng=i(Zh," (for encoder) "),zl=a(Zh,"CODE",{});var tx=s(zl);Dg=i(tx,"[src_lang_code] X [eos]"),tx.forEach(t),Zh.forEach(t),Lg=l(Kh),Wa=a(Kh,"LI",{});var Yh=s(Wa);ql=a(Yh,"CODE",{});var ox=s(ql);Gg=i(ox,"labels"),ox.forEach(t),Wg=i(Yh,": (for decoder) "),Bl=a(Yh,"CODE",{});var nx=s(Bl);Rg=i(nx,"[tgt_lang_code] X [eos]"),nx.forEach(t),Yh.forEach(t),Kh.forEach(t),Ug=l(St),$l=a(St,"P",{});var ax=s($l);Xg=i(ax,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),ax.forEach(t),St.forEach(t),Hg=l(me),Ko=a(me,"DIV",{class:!0});var eu=s(Ko);m(Ra.$$.fragment,eu),Vg=l(eu),Fl=a(eu,"P",{});var sx=s(Fl);Qg=i(sx,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),sx.forEach(t),eu.forEach(t),Jg=l(me),Zo=a(me,"DIV",{class:!0});var tu=s(Zo);m(Ua.$$.fragment,tu),Kg=l(tu),jl=a(tu,"P",{});var rx=s(jl);Zg=i(rx,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),rx.forEach(t),tu.forEach(t),me.forEach(t),Rp=l(o),po=a(o,"H2",{class:!0});var ou=s(po);Yo=a(ou,"A",{id:!0,class:!0,href:!0});var ix=s(Yo);El=a(ix,"SPAN",{});var dx=s(El);m(Xa.$$.fragment,dx),dx.forEach(t),ix.forEach(t),Yg=l(ou),Pl=a(ou,"SPAN",{});var lx=s(Pl);ek=i(lx,"MBartModel"),lx.forEach(t),ou.forEach(t),Up=l(o),Qe=a(o,"DIV",{class:!0});var Bn=s(Qe);m(Ha.$$.fragment,Bn),tk=l(Bn),Va=a(Bn,"P",{});var nu=s(Va);ok=i(nu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),ki=a(nu,"A",{href:!0});var cx=s(ki);nk=i(cx,"PreTrainedModel"),cx.forEach(t),ak=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nu.forEach(t),sk=l(Bn),Qa=a(Bn,"P",{});var au=s(Qa);rk=i(au,"This model is also a PyTorch "),Ja=a(au,"A",{href:!0,rel:!0});var px=s(Ja);ik=i(px,"torch.nn.Module"),px.forEach(t),dk=i(au,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au.forEach(t),lk=l(Bn),Oe=a(Bn,"DIV",{class:!0});var At=s(Oe);m(Ka.$$.fragment,At),ck=l(At),ho=a(At,"P",{});var Li=s(ho);pk=i(Li,"The "),bi=a(Li,"A",{href:!0});var hx=s(bi);hk=i(hx,"MBartModel"),hx.forEach(t),uk=i(Li," forward method, overrides the "),Cl=a(Li,"CODE",{});var ux=s(Cl);mk=i(ux,"__call__"),ux.forEach(t),fk=i(Li," special method."),Li.forEach(t),_k=l(At),m(en.$$.fragment,At),gk=l(At),Sl=a(At,"P",{});var mx=s(Sl);kk=i(mx,"Example:"),mx.forEach(t),bk=l(At),m(Za.$$.fragment,At),At.forEach(t),Bn.forEach(t),Xp=l(o),uo=a(o,"H2",{class:!0});var su=s(uo);tn=a(su,"A",{id:!0,class:!0,href:!0});var fx=s(tn);Al=a(fx,"SPAN",{});var _x=s(Al);m(Ya.$$.fragment,_x),_x.forEach(t),fx.forEach(t),yk=l(su),Ol=a(su,"SPAN",{});var gx=s(Ol);vk=i(gx,"MBartForConditionalGeneration"),gx.forEach(t),su.forEach(t),Hp=l(o),Je=a(o,"DIV",{class:!0});var $n=s(Je);m(es.$$.fragment,$n),Tk=l($n),ts=a($n,"P",{});var ru=s(ts);Mk=i(ru,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),yi=a(ru,"A",{href:!0});var kx=s(yi);wk=i(kx,"PreTrainedModel"),kx.forEach(t),xk=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ru.forEach(t),zk=l($n),os=a($n,"P",{});var iu=s(os);qk=i(iu,"This model is also a PyTorch "),ns=a(iu,"A",{href:!0,rel:!0});var bx=s(ns);Bk=i(bx,"torch.nn.Module"),bx.forEach(t),$k=i(iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu.forEach(t),Fk=l($n),Y=a($n,"DIV",{class:!0});var Ge=s(Y);m(as.$$.fragment,Ge),jk=l(Ge),mo=a(Ge,"P",{});var Gi=s(mo);Ek=i(Gi,"The "),vi=a(Gi,"A",{href:!0});var yx=s(vi);Pk=i(yx,"MBartForConditionalGeneration"),yx.forEach(t),Ck=i(Gi," forward method, overrides the "),Il=a(Gi,"CODE",{});var vx=s(Il);Sk=i(vx,"__call__"),vx.forEach(t),Ak=i(Gi," special method."),Gi.forEach(t),Ok=l(Ge),m(on.$$.fragment,Ge),Ik=l(Ge),Nl=a(Ge,"P",{});var Tx=s(Nl);Nk=i(Tx,"Translation example:"),Tx.forEach(t),Dk=l(Ge),m(ss.$$.fragment,Ge),Lk=l(Ge),Dl=a(Ge,"P",{});var Mx=s(Dl);Gk=i(Mx,"Mask filling example:"),Mx.forEach(t),Wk=l(Ge),m(rs.$$.fragment,Ge),Ge.forEach(t),$n.forEach(t),Vp=l(o),fo=a(o,"H2",{class:!0});var du=s(fo);nn=a(du,"A",{id:!0,class:!0,href:!0});var wx=s(nn);Ll=a(wx,"SPAN",{});var xx=s(Ll);m(is.$$.fragment,xx),xx.forEach(t),wx.forEach(t),Rk=l(du),Gl=a(du,"SPAN",{});var zx=s(Gl);Uk=i(zx,"MBartForQuestionAnswering"),zx.forEach(t),du.forEach(t),Qp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);m(ds.$$.fragment,Ot),Xk=l(Ot),_o=a(Ot,"P",{});var Wi=s(_o);Hk=i(Wi,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Wl=a(Wi,"CODE",{});var qx=s(Wl);Vk=i(qx,"span start logits"),qx.forEach(t),Qk=i(Wi," and "),Rl=a(Wi,"CODE",{});var Bx=s(Rl);Jk=i(Bx,"span end logits"),Bx.forEach(t),Kk=i(Wi,")."),Wi.forEach(t),Zk=l(Ot),ls=a(Ot,"P",{});var lu=s(ls);Yk=i(lu,"This model inherits from "),Ti=a(lu,"A",{href:!0});var $x=s(Ti);eb=i($x,"PreTrainedModel"),$x.forEach(t),tb=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu.forEach(t),ob=l(Ot),cs=a(Ot,"P",{});var cu=s(cs);nb=i(cu,"This model is also a PyTorch "),ps=a(cu,"A",{href:!0,rel:!0});var Fx=s(ps);ab=i(Fx,"torch.nn.Module"),Fx.forEach(t),sb=i(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(t),rb=l(Ot),he=a(Ot,"DIV",{class:!0});var at=s(he);m(hs.$$.fragment,at),ib=l(at),go=a(at,"P",{});var Ri=s(go);db=i(Ri,"The "),Mi=a(Ri,"A",{href:!0});var jx=s(Mi);lb=i(jx,"MBartForQuestionAnswering"),jx.forEach(t),cb=i(Ri," forward method, overrides the "),Ul=a(Ri,"CODE",{});var Ex=s(Ul);pb=i(Ex,"__call__"),Ex.forEach(t),hb=i(Ri," special method."),Ri.forEach(t),ub=l(at),m(an.$$.fragment,at),mb=l(at),Xl=a(at,"P",{});var Px=s(Xl);fb=i(Px,"Example:"),Px.forEach(t),_b=l(at),m(us.$$.fragment,at),gb=l(at),m(ms.$$.fragment,at),at.forEach(t),Ot.forEach(t),Jp=l(o),ko=a(o,"H2",{class:!0});var pu=s(ko);sn=a(pu,"A",{id:!0,class:!0,href:!0});var Cx=s(sn);Hl=a(Cx,"SPAN",{});var Sx=s(Hl);m(fs.$$.fragment,Sx),Sx.forEach(t),Cx.forEach(t),kb=l(pu),Vl=a(pu,"SPAN",{});var Ax=s(Vl);bb=i(Ax,"MBartForSequenceClassification"),Ax.forEach(t),pu.forEach(t),Kp=l(o),Fe=a(o,"DIV",{class:!0});var It=s(Fe);m(_s.$$.fragment,It),yb=l(It),Ql=a(It,"P",{});var Ox=s(Ql);vb=i(Ox,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Ox.forEach(t),Tb=l(It),gs=a(It,"P",{});var hu=s(gs);Mb=i(hu,"This model inherits from "),wi=a(hu,"A",{href:!0});var Ix=s(wi);wb=i(Ix,"PreTrainedModel"),Ix.forEach(t),xb=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),zb=l(It),ks=a(It,"P",{});var uu=s(ks);qb=i(uu,"This model is also a PyTorch "),bs=a(uu,"A",{href:!0,rel:!0});var Nx=s(bs);Bb=i(Nx,"torch.nn.Module"),Nx.forEach(t),$b=i(uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uu.forEach(t),Fb=l(It),H=a(It,"DIV",{class:!0});var fe=s(H);m(ys.$$.fragment,fe),jb=l(fe),bo=a(fe,"P",{});var Ui=s(bo);Eb=i(Ui,"The "),xi=a(Ui,"A",{href:!0});var Dx=s(xi);Pb=i(Dx,"MBartForSequenceClassification"),Dx.forEach(t),Cb=i(Ui," forward method, overrides the "),Jl=a(Ui,"CODE",{});var Lx=s(Jl);Sb=i(Lx,"__call__"),Lx.forEach(t),Ab=i(Ui," special method."),Ui.forEach(t),Ob=l(fe),m(rn.$$.fragment,fe),Ib=l(fe),Kl=a(fe,"P",{});var Gx=s(Kl);Nb=i(Gx,"Example of single-label classification:"),Gx.forEach(t),Db=l(fe),m(vs.$$.fragment,fe),Lb=l(fe),m(Ts.$$.fragment,fe),Gb=l(fe),Zl=a(fe,"P",{});var Wx=s(Zl);Wb=i(Wx,"Example of multi-label classification:"),Wx.forEach(t),Rb=l(fe),m(Ms.$$.fragment,fe),fe.forEach(t),It.forEach(t),Zp=l(o),yo=a(o,"H2",{class:!0});var mu=s(yo);dn=a(mu,"A",{id:!0,class:!0,href:!0});var Rx=s(dn);Yl=a(Rx,"SPAN",{});var Ux=s(Yl);m(ws.$$.fragment,Ux),Ux.forEach(t),Rx.forEach(t),Ub=l(mu),ec=a(mu,"SPAN",{});var Xx=s(ec);Xb=i(Xx,"MBartForCausalLM"),Xx.forEach(t),mu.forEach(t),Yp=l(o),vo=a(o,"DIV",{class:!0});var fu=s(vo);m(xs.$$.fragment,fu),Hb=l(fu),Mt=a(fu,"DIV",{class:!0});var Xi=s(Mt);m(zs.$$.fragment,Xi),Vb=l(Xi),tc=a(Xi,"P",{});var Hx=s(tc);Qb=i(Hx,"Example:"),Hx.forEach(t),Jb=l(Xi),m(qs.$$.fragment,Xi),Xi.forEach(t),fu.forEach(t),eh=l(o),To=a(o,"H2",{class:!0});var _u=s(To);ln=a(_u,"A",{id:!0,class:!0,href:!0});var Vx=s(ln);oc=a(Vx,"SPAN",{});var Qx=s(oc);m(Bs.$$.fragment,Qx),Qx.forEach(t),Vx.forEach(t),Kb=l(_u),nc=a(_u,"SPAN",{});var Jx=s(nc);Zb=i(Jx,"TFMBartModel"),Jx.forEach(t),_u.forEach(t),th=l(o),je=a(o,"DIV",{class:!0});var Nt=s(je);m($s.$$.fragment,Nt),Yb=l(Nt),Fs=a(Nt,"P",{});var gu=s(Fs);ey=i(gu,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),zi=a(gu,"A",{href:!0});var Kx=s(zi);ty=i(Kx,"TFPreTrainedModel"),Kx.forEach(t),oy=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(t),ny=l(Nt),js=a(Nt,"P",{});var ku=s(js);ay=i(ku,"This model is also a "),Es=a(ku,"A",{href:!0,rel:!0});var Zx=s(Es);sy=i(Zx,"tf.keras.Model"),Zx.forEach(t),ry=i(ku,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ku.forEach(t),iy=l(Nt),m(cn.$$.fragment,Nt),dy=l(Nt),Ie=a(Nt,"DIV",{class:!0});var Dt=s(Ie);m(Ps.$$.fragment,Dt),ly=l(Dt),Mo=a(Dt,"P",{});var Hi=s(Mo);cy=i(Hi,"The "),qi=a(Hi,"A",{href:!0});var Yx=s(qi);py=i(Yx,"TFMBartModel"),Yx.forEach(t),hy=i(Hi," forward method, overrides the "),ac=a(Hi,"CODE",{});var ez=s(ac);uy=i(ez,"__call__"),ez.forEach(t),my=i(Hi," special method."),Hi.forEach(t),fy=l(Dt),m(pn.$$.fragment,Dt),_y=l(Dt),sc=a(Dt,"P",{});var tz=s(sc);gy=i(tz,"Example:"),tz.forEach(t),ky=l(Dt),m(Cs.$$.fragment,Dt),Dt.forEach(t),Nt.forEach(t),oh=l(o),wo=a(o,"H2",{class:!0});var bu=s(wo);hn=a(bu,"A",{id:!0,class:!0,href:!0});var oz=s(hn);rc=a(oz,"SPAN",{});var nz=s(rc);m(Ss.$$.fragment,nz),nz.forEach(t),oz.forEach(t),by=l(bu),ic=a(bu,"SPAN",{});var az=s(ic);yy=i(az,"TFMBartForConditionalGeneration"),az.forEach(t),bu.forEach(t),nh=l(o),Ee=a(o,"DIV",{class:!0});var Lt=s(Ee);m(As.$$.fragment,Lt),vy=l(Lt),Os=a(Lt,"P",{});var yu=s(Os);Ty=i(yu,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a(yu,"A",{href:!0});var sz=s(Bi);My=i(sz,"TFPreTrainedModel"),sz.forEach(t),wy=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),xy=l(Lt),Is=a(Lt,"P",{});var vu=s(Is);zy=i(vu,"This model is also a "),Ns=a(vu,"A",{href:!0,rel:!0});var rz=s(Ns);qy=i(rz,"tf.keras.Model"),rz.forEach(t),By=i(vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vu.forEach(t),$y=l(Lt),m(un.$$.fragment,Lt),Fy=l(Lt),ee=a(Lt,"DIV",{class:!0});var We=s(ee);m(Ds.$$.fragment,We),jy=l(We),xo=a(We,"P",{});var Vi=s(xo);Ey=i(Vi,"The "),$i=a(Vi,"A",{href:!0});var iz=s($i);Py=i(iz,"TFMBartForConditionalGeneration"),iz.forEach(t),Cy=i(Vi," forward method, overrides the "),dc=a(Vi,"CODE",{});var dz=s(dc);Sy=i(dz,"__call__"),dz.forEach(t),Ay=i(Vi," special method."),Vi.forEach(t),Oy=l(We),m(mn.$$.fragment,We),Iy=l(We),lc=a(We,"P",{});var lz=s(lc);Ny=i(lz,"Summarization example:"),lz.forEach(t),Dy=l(We),m(Ls.$$.fragment,We),Ly=l(We),cc=a(We,"P",{});var cz=s(cc);Gy=i(cz,"Mask filling example:"),cz.forEach(t),Wy=l(We),m(Gs.$$.fragment,We),We.forEach(t),Lt.forEach(t),ah=l(o),zo=a(o,"H2",{class:!0});var Tu=s(zo);fn=a(Tu,"A",{id:!0,class:!0,href:!0});var pz=s(fn);pc=a(pz,"SPAN",{});var hz=s(pc);m(Ws.$$.fragment,hz),hz.forEach(t),pz.forEach(t),Ry=l(Tu),hc=a(Tu,"SPAN",{});var uz=s(hc);Uy=i(uz,"FlaxMBartModel"),uz.forEach(t),Tu.forEach(t),sh=l(o),W=a(o,"DIV",{class:!0});var _e=s(W);m(Rs.$$.fragment,_e),Xy=l(_e),Us=a(_e,"P",{});var Mu=s(Us);Hy=i(Mu,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Fi=a(Mu,"A",{href:!0});var mz=s(Fi);Vy=i(mz,"FlaxPreTrainedModel"),mz.forEach(t),Qy=i(Mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mu.forEach(t),Jy=l(_e),Xs=a(_e,"P",{});var wu=s(Xs);Ky=i(wu,`This model is also a Flax Linen
`),Hs=a(wu,"A",{href:!0,rel:!0});var fz=s(Hs);Zy=i(fz,"flax.nn.Module"),fz.forEach(t),Yy=i(wu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),wu.forEach(t),ev=l(_e),uc=a(_e,"P",{});var _z=s(uc);tv=i(_z,"Finally, this model supports inherent JAX features such as:"),_z.forEach(t),ov=l(_e),ft=a(_e,"UL",{});var Fn=s(ft);mc=a(Fn,"LI",{});var gz=s(mc);Vs=a(gz,"A",{href:!0,rel:!0});var kz=s(Vs);nv=i(kz,"Just-In-Time (JIT) compilation"),kz.forEach(t),gz.forEach(t),av=l(Fn),fc=a(Fn,"LI",{});var bz=s(fc);Qs=a(bz,"A",{href:!0,rel:!0});var yz=s(Qs);sv=i(yz,"Automatic Differentiation"),yz.forEach(t),bz.forEach(t),rv=l(Fn),_c=a(Fn,"LI",{});var vz=s(_c);Js=a(vz,"A",{href:!0,rel:!0});var Tz=s(Js);iv=i(Tz,"Vectorization"),Tz.forEach(t),vz.forEach(t),dv=l(Fn),gc=a(Fn,"LI",{});var Mz=s(gc);Ks=a(Mz,"A",{href:!0,rel:!0});var wz=s(Ks);lv=i(wz,"Parallelization"),wz.forEach(t),Mz.forEach(t),Fn.forEach(t),cv=l(_e),Ne=a(_e,"DIV",{class:!0});var Gt=s(Ne);m(Zs.$$.fragment,Gt),pv=l(Gt),qo=a(Gt,"P",{});var Qi=s(qo);hv=i(Qi,"The "),kc=a(Qi,"CODE",{});var xz=s(kc);uv=i(xz,"FlaxMBartPreTrainedModel"),xz.forEach(t),mv=i(Qi,"forward method, overrides the "),bc=a(Qi,"CODE",{});var zz=s(bc);fv=i(zz,"__call__"),zz.forEach(t),_v=i(Qi," special method."),Qi.forEach(t),gv=l(Gt),m(_n.$$.fragment,Gt),kv=l(Gt),yc=a(Gt,"P",{});var qz=s(yc);bv=i(qz,"Example:"),qz.forEach(t),yv=l(Gt),m(Ys.$$.fragment,Gt),Gt.forEach(t),vv=l(_e),wt=a(_e,"DIV",{class:!0});var Ji=s(wt);m(er.$$.fragment,Ji),Tv=l(Ji),vc=a(Ji,"P",{});var Bz=s(vc);Mv=i(Bz,"Example:"),Bz.forEach(t),wv=l(Ji),m(tr.$$.fragment,Ji),Ji.forEach(t),xv=l(_e),xt=a(_e,"DIV",{class:!0});var Ki=s(xt);m(or.$$.fragment,Ki),zv=l(Ki),Tc=a(Ki,"P",{});var $z=s(Tc);qv=i($z,"Example:"),$z.forEach(t),Bv=l(Ki),m(nr.$$.fragment,Ki),Ki.forEach(t),_e.forEach(t),rh=l(o),Bo=a(o,"H2",{class:!0});var xu=s(Bo);gn=a(xu,"A",{id:!0,class:!0,href:!0});var Fz=s(gn);Mc=a(Fz,"SPAN",{});var jz=s(Mc);m(ar.$$.fragment,jz),jz.forEach(t),Fz.forEach(t),$v=l(xu),wc=a(xu,"SPAN",{});var Ez=s(wc);Fv=i(Ez,"FlaxMBartForConditionalGeneration"),Ez.forEach(t),xu.forEach(t),ih=l(o),R=a(o,"DIV",{class:!0});var ge=s(R);m(sr.$$.fragment,ge),jv=l(ge),rr=a(ge,"P",{});var zu=s(rr);Ev=i(zu,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),ji=a(zu,"A",{href:!0});var Pz=s(ji);Pv=i(Pz,"FlaxPreTrainedModel"),Pz.forEach(t),Cv=i(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(t),Sv=l(ge),ir=a(ge,"P",{});var qu=s(ir);Av=i(qu,`This model is also a Flax Linen
`),dr=a(qu,"A",{href:!0,rel:!0});var Cz=s(dr);Ov=i(Cz,"flax.nn.Module"),Cz.forEach(t),Iv=i(qu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qu.forEach(t),Nv=l(ge),xc=a(ge,"P",{});var Sz=s(xc);Dv=i(Sz,"Finally, this model supports inherent JAX features such as:"),Sz.forEach(t),Lv=l(ge),_t=a(ge,"UL",{});var jn=s(_t);zc=a(jn,"LI",{});var Az=s(zc);lr=a(Az,"A",{href:!0,rel:!0});var Oz=s(lr);Gv=i(Oz,"Just-In-Time (JIT) compilation"),Oz.forEach(t),Az.forEach(t),Wv=l(jn),qc=a(jn,"LI",{});var Iz=s(qc);cr=a(Iz,"A",{href:!0,rel:!0});var Nz=s(cr);Rv=i(Nz,"Automatic Differentiation"),Nz.forEach(t),Iz.forEach(t),Uv=l(jn),Bc=a(jn,"LI",{});var Dz=s(Bc);pr=a(Dz,"A",{href:!0,rel:!0});var Lz=s(pr);Xv=i(Lz,"Vectorization"),Lz.forEach(t),Dz.forEach(t),Hv=l(jn),$c=a(jn,"LI",{});var Gz=s($c);hr=a(Gz,"A",{href:!0,rel:!0});var Wz=s(hr);Vv=i(Wz,"Parallelization"),Wz.forEach(t),Gz.forEach(t),jn.forEach(t),Qv=l(ge),te=a(ge,"DIV",{class:!0});var Re=s(te);m(ur.$$.fragment,Re),Jv=l(Re),$o=a(Re,"P",{});var Zi=s($o);Kv=i(Zi,"The "),Fc=a(Zi,"CODE",{});var Rz=s(Fc);Zv=i(Rz,"FlaxMBartPreTrainedModel"),Rz.forEach(t),Yv=i(Zi,"forward method, overrides the "),jc=a(Zi,"CODE",{});var Uz=s(jc);eT=i(Uz,"__call__"),Uz.forEach(t),tT=i(Zi," special method."),Zi.forEach(t),oT=l(Re),m(kn.$$.fragment,Re),nT=l(Re),Ec=a(Re,"P",{});var Xz=s(Ec);aT=i(Xz,"Summarization example:"),Xz.forEach(t),sT=l(Re),m(mr.$$.fragment,Re),rT=l(Re),Pc=a(Re,"P",{});var Hz=s(Pc);iT=i(Hz,"Mask filling example:"),Hz.forEach(t),dT=l(Re),m(fr.$$.fragment,Re),Re.forEach(t),lT=l(ge),zt=a(ge,"DIV",{class:!0});var Yi=s(zt);m(_r.$$.fragment,Yi),cT=l(Yi),Cc=a(Yi,"P",{});var Vz=s(Cc);pT=i(Vz,"Example:"),Vz.forEach(t),hT=l(Yi),m(gr.$$.fragment,Yi),Yi.forEach(t),uT=l(ge),qt=a(ge,"DIV",{class:!0});var ed=s(qt);m(kr.$$.fragment,ed),mT=l(ed),Sc=a(ed,"P",{});var Qz=s(Sc);fT=i(Qz,"Example:"),Qz.forEach(t),_T=l(ed),m(br.$$.fragment,ed),ed.forEach(t),ge.forEach(t),dh=l(o),Fo=a(o,"H2",{class:!0});var Bu=s(Fo);bn=a(Bu,"A",{id:!0,class:!0,href:!0});var Jz=s(bn);Ac=a(Jz,"SPAN",{});var Kz=s(Ac);m(yr.$$.fragment,Kz),Kz.forEach(t),Jz.forEach(t),gT=l(Bu),Oc=a(Bu,"SPAN",{});var Zz=s(Oc);kT=i(Zz,"FlaxMBartForSequenceClassification"),Zz.forEach(t),Bu.forEach(t),lh=l(o),O=a(o,"DIV",{class:!0});var oe=s(O);m(vr.$$.fragment,oe),bT=l(oe),Ic=a(oe,"P",{});var Yz=s(Ic);yT=i(Yz,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Yz.forEach(t),vT=l(oe),Tr=a(oe,"P",{});var $u=s(Tr);TT=i($u,"This model inherits from "),Ei=a($u,"A",{href:!0});var e2=s(Ei);MT=i(e2,"FlaxPreTrainedModel"),e2.forEach(t),wT=i($u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$u.forEach(t),xT=l(oe),Mr=a(oe,"P",{});var Fu=s(Mr);zT=i(Fu,`This model is also a Flax Linen
`),wr=a(Fu,"A",{href:!0,rel:!0});var t2=s(wr);qT=i(t2,"flax.nn.Module"),t2.forEach(t),BT=i(Fu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Fu.forEach(t),$T=l(oe),Nc=a(oe,"P",{});var o2=s(Nc);FT=i(o2,"Finally, this model supports inherent JAX features such as:"),o2.forEach(t),jT=l(oe),gt=a(oe,"UL",{});var En=s(gt);Dc=a(En,"LI",{});var n2=s(Dc);xr=a(n2,"A",{href:!0,rel:!0});var a2=s(xr);ET=i(a2,"Just-In-Time (JIT) compilation"),a2.forEach(t),n2.forEach(t),PT=l(En),Lc=a(En,"LI",{});var s2=s(Lc);zr=a(s2,"A",{href:!0,rel:!0});var r2=s(zr);CT=i(r2,"Automatic Differentiation"),r2.forEach(t),s2.forEach(t),ST=l(En),Gc=a(En,"LI",{});var i2=s(Gc);qr=a(i2,"A",{href:!0,rel:!0});var d2=s(qr);AT=i(d2,"Vectorization"),d2.forEach(t),i2.forEach(t),OT=l(En),Wc=a(En,"LI",{});var l2=s(Wc);Br=a(l2,"A",{href:!0,rel:!0});var c2=s(Br);IT=i(c2,"Parallelization"),c2.forEach(t),l2.forEach(t),En.forEach(t),NT=l(oe),De=a(oe,"DIV",{class:!0});var Wt=s(De);m($r.$$.fragment,Wt),DT=l(Wt),jo=a(Wt,"P",{});var td=s(jo);LT=i(td,"The "),Rc=a(td,"CODE",{});var p2=s(Rc);GT=i(p2,"FlaxMBartPreTrainedModel"),p2.forEach(t),WT=i(td,"forward method, overrides the "),Uc=a(td,"CODE",{});var h2=s(Uc);RT=i(h2,"__call__"),h2.forEach(t),UT=i(td," special method."),td.forEach(t),XT=l(Wt),m(yn.$$.fragment,Wt),HT=l(Wt),Xc=a(Wt,"P",{});var u2=s(Xc);VT=i(u2,"Example:"),u2.forEach(t),QT=l(Wt),m(Fr.$$.fragment,Wt),Wt.forEach(t),JT=l(oe),Bt=a(oe,"DIV",{class:!0});var od=s(Bt);m(jr.$$.fragment,od),KT=l(od),Hc=a(od,"P",{});var m2=s(Hc);ZT=i(m2,"Example:"),m2.forEach(t),YT=l(od),m(Er.$$.fragment,od),od.forEach(t),eM=l(oe),$t=a(oe,"DIV",{class:!0});var nd=s($t);m(Pr.$$.fragment,nd),tM=l(nd),Vc=a(nd,"P",{});var f2=s(Vc);oM=i(f2,"Example:"),f2.forEach(t),nM=l(nd),m(Cr.$$.fragment,nd),nd.forEach(t),oe.forEach(t),ch=l(o),Eo=a(o,"H2",{class:!0});var ju=s(Eo);vn=a(ju,"A",{id:!0,class:!0,href:!0});var _2=s(vn);Qc=a(_2,"SPAN",{});var g2=s(Qc);m(Sr.$$.fragment,g2),g2.forEach(t),_2.forEach(t),aM=l(ju),Jc=a(ju,"SPAN",{});var k2=s(Jc);sM=i(k2,"FlaxMBartForQuestionAnswering"),k2.forEach(t),ju.forEach(t),ph=l(o),I=a(o,"DIV",{class:!0});var ne=s(I);m(Ar.$$.fragment,ne),rM=l(ne),Po=a(ne,"P",{});var ad=s(Po);iM=i(ad,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Kc=a(ad,"CODE",{});var b2=s(Kc);dM=i(b2,"span start logits"),b2.forEach(t),lM=i(ad," and "),Zc=a(ad,"CODE",{});var y2=s(Zc);cM=i(y2,"span end logits"),y2.forEach(t),pM=i(ad,")."),ad.forEach(t),hM=l(ne),Or=a(ne,"P",{});var Eu=s(Or);uM=i(Eu,"This model inherits from "),Pi=a(Eu,"A",{href:!0});var v2=s(Pi);mM=i(v2,"FlaxPreTrainedModel"),v2.forEach(t),fM=i(Eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu.forEach(t),_M=l(ne),Ir=a(ne,"P",{});var Pu=s(Ir);gM=i(Pu,`This model is also a Flax Linen
`),Nr=a(Pu,"A",{href:!0,rel:!0});var T2=s(Nr);kM=i(T2,"flax.nn.Module"),T2.forEach(t),bM=i(Pu,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Pu.forEach(t),yM=l(ne),Yc=a(ne,"P",{});var M2=s(Yc);vM=i(M2,"Finally, this model supports inherent JAX features such as:"),M2.forEach(t),TM=l(ne),kt=a(ne,"UL",{});var Pn=s(kt);ep=a(Pn,"LI",{});var w2=s(ep);Dr=a(w2,"A",{href:!0,rel:!0});var x2=s(Dr);MM=i(x2,"Just-In-Time (JIT) compilation"),x2.forEach(t),w2.forEach(t),wM=l(Pn),tp=a(Pn,"LI",{});var z2=s(tp);Lr=a(z2,"A",{href:!0,rel:!0});var q2=s(Lr);xM=i(q2,"Automatic Differentiation"),q2.forEach(t),z2.forEach(t),zM=l(Pn),op=a(Pn,"LI",{});var B2=s(op);Gr=a(B2,"A",{href:!0,rel:!0});var $2=s(Gr);qM=i($2,"Vectorization"),$2.forEach(t),B2.forEach(t),BM=l(Pn),np=a(Pn,"LI",{});var F2=s(np);Wr=a(F2,"A",{href:!0,rel:!0});var j2=s(Wr);$M=i(j2,"Parallelization"),j2.forEach(t),F2.forEach(t),Pn.forEach(t),FM=l(ne),Le=a(ne,"DIV",{class:!0});var Rt=s(Le);m(Rr.$$.fragment,Rt),jM=l(Rt),Co=a(Rt,"P",{});var sd=s(Co);EM=i(sd,"The "),ap=a(sd,"CODE",{});var E2=s(ap);PM=i(E2,"FlaxMBartPreTrainedModel"),E2.forEach(t),CM=i(sd,"forward method, overrides the "),sp=a(sd,"CODE",{});var P2=s(sp);SM=i(P2,"__call__"),P2.forEach(t),AM=i(sd," special method."),sd.forEach(t),OM=l(Rt),m(Tn.$$.fragment,Rt),IM=l(Rt),rp=a(Rt,"P",{});var C2=s(rp);NM=i(C2,"Example:"),C2.forEach(t),DM=l(Rt),m(Ur.$$.fragment,Rt),Rt.forEach(t),LM=l(ne),Ft=a(ne,"DIV",{class:!0});var rd=s(Ft);m(Xr.$$.fragment,rd),GM=l(rd),ip=a(rd,"P",{});var S2=s(ip);WM=i(S2,"Example:"),S2.forEach(t),RM=l(rd),m(Hr.$$.fragment,rd),rd.forEach(t),UM=l(ne),jt=a(ne,"DIV",{class:!0});var id=s(jt);m(Vr.$$.fragment,id),XM=l(id),dp=a(id,"P",{});var A2=s(dp);HM=i(A2,"Example:"),A2.forEach(t),VM=l(id),m(Qr.$$.fragment,id),id.forEach(t),ne.forEach(t),this.h()},h(){c(b,"name","hf:doc:metadata"),c(b,"content",JSON.stringify(t0)),c(w,"id","mbart-and-mbart50"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(be,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(be,"rel","nofollow"),c(N,"id","overview-of-mbart"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview-of-mbart"),c(J,"class","relative group"),c(K,"href","https://arxiv.org/abs/2001.08210"),c(K,"rel","nofollow"),c(Me,"href","https://huggingface.co/valhalla"),c(Me,"rel","nofollow"),c(we,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(we,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(M,"class","relative group"),c(Cn,"href","/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(ei,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(So,"id","overview-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Nn,"href","https://arxiv.org/abs/2008.00401"),c(Nn,"rel","nofollow"),c(Ao,"id","training-of-mbart50"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(si,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Io,"id","transformers.MBartConfig"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(di,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartModel"),c(Xn,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Xn,"rel","nofollow"),c(li,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(ci,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Be,"class","docstring"),c(No,"id","transformers.MBartTokenizer"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(pi,"href","/docs/transformers/pr_16363/en/model_doc/roberta#transformers.RobertaTokenizer"),c(hi,"href","/docs/transformers/pr_16363/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Jn,"href","https://github.com/google/sentencepiece"),c(Jn,"rel","nofollow"),c(Do,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Lo,"id","transformers.MBartTokenizerFast"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ia,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ia,"rel","nofollow"),c(ui,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(mi,"href","/docs/transformers/pr_16363/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(fi,"href","/docs/transformers/pr_16363/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Se,"class","docstring"),c(Go,"class","docstring"),c(Wo,"class","docstring"),c(Ro,"class","docstring"),c(C,"class","docstring"),c(Uo,"id","transformers.MBart50Tokenizer"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(_i,"href","/docs/transformers/pr_16363/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(Qo,"class","docstring"),c(S,"class","docstring"),c(Jo,"id","transformers.MBart50TokenizerFast"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Aa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Aa,"rel","nofollow"),c(gi,"href","/docs/transformers/pr_16363/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ae,"class","docstring"),c(Ko,"class","docstring"),c(Zo,"class","docstring"),c(G,"class","docstring"),c(Yo,"id","transformers.MBartModel"),c(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(ki,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ja,"rel","nofollow"),c(bi,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartModel"),c(Oe,"class","docstring"),c(Qe,"class","docstring"),c(tn,"id","transformers.MBartForConditionalGeneration"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.MBartForConditionalGeneration"),c(uo,"class","relative group"),c(yi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(vi,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Y,"class","docstring"),c(Je,"class","docstring"),c(nn,"id","transformers.MBartForQuestionAnswering"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(Ti,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(he,"class","docstring"),c($e,"class","docstring"),c(sn,"id","transformers.MBartForSequenceClassification"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(wi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(bs,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(H,"class","docstring"),c(Fe,"class","docstring"),c(dn,"id","transformers.MBartForCausalLM"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.MBartForCausalLM"),c(yo,"class","relative group"),c(Mt,"class","docstring"),c(vo,"class","docstring"),c(ln,"id","transformers.TFMBartModel"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFMBartModel"),c(To,"class","relative group"),c(zi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Es,"rel","nofollow"),c(qi,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(hn,"id","transformers.TFMBartForConditionalGeneration"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFMBartForConditionalGeneration"),c(wo,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ns,"rel","nofollow"),c($i,"href","/docs/transformers/pr_16363/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Ee,"class","docstring"),c(fn,"id","transformers.FlaxMBartModel"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.FlaxMBartModel"),c(zo,"class","relative group"),c(Fi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Vs,"rel","nofollow"),c(Qs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Qs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ks,"rel","nofollow"),c(Ne,"class","docstring"),c(wt,"class","docstring"),c(xt,"class","docstring"),c(W,"class","docstring"),c(gn,"id","transformers.FlaxMBartForConditionalGeneration"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.FlaxMBartForConditionalGeneration"),c(Bo,"class","relative group"),c(ji,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(dr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(hr,"rel","nofollow"),c(te,"class","docstring"),c(zt,"class","docstring"),c(qt,"class","docstring"),c(R,"class","docstring"),c(bn,"id","transformers.FlaxMBartForSequenceClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.FlaxMBartForSequenceClassification"),c(Fo,"class","relative group"),c(Ei,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(wr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(xr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(zr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(qr,"rel","nofollow"),c(Br,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Br,"rel","nofollow"),c(De,"class","docstring"),c(Bt,"class","docstring"),c($t,"class","docstring"),c(O,"class","docstring"),c(vn,"id","transformers.FlaxMBartForQuestionAnswering"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(Eo,"class","relative group"),c(Pi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Nr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Nr,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Dr,"rel","nofollow"),c(Lr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Lr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gr,"rel","nofollow"),c(Wr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Wr,"rel","nofollow"),c(Le,"class","docstring"),c(Ft,"class","docstring"),c(jt,"class","docstring"),c(I,"class","docstring")},m(o,p){e(document.head,b),h(o,z,p),h(o,v,p),e(v,w),e(w,x),f(T,x,null),e(v,y),e(v,B),e(B,rt),h(o,Pe,p),h(o,j,p),e(j,Ue),e(Ue,ke),e(j,it),e(j,be),e(be,ye),e(j,dt),h(o,Ke,p),h(o,J,p),e(J,N),e(N,Xe),f(ae,Xe,null),e(J,P),e(J,A),e(A,lt),h(o,ce,p),h(o,pe,p),e(pe,ct),e(pe,K),e(K,pt),e(pe,ht),h(o,D,p),h(o,Ce,p),e(Ce,ve),h(o,Ze,p),h(o,se,p),e(se,Te),e(se,Me),e(Me,ut),e(se,re),e(se,we),e(we,xe),h(o,Ye,p),h(o,M,p),e(M,$),e($,ze),f(He,ze,null),e(M,Ut),e(M,Z),e(Z,Xt),h(o,bt,p),h(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Cu),e(X,dd),e(dd,Su),e(X,Au),h(o,kp,p),h(o,yt,p),e(yt,Ou),e(yt,Cn),e(Cn,ld),e(ld,Iu),e(Cn,Nu),e(yt,Du),e(yt,ei),e(ei,Lu),e(yt,Gu),h(o,bp,p),h(o,ti,p),e(ti,cd),e(cd,Wu),h(o,yp,p),f(Sn,o,p),h(o,vp,p),h(o,oi,p),e(oi,An),e(An,pd),e(pd,Ru),e(An,Uu),e(An,Zt),e(Zt,Xu),e(Zt,hd),e(hd,Hu),e(Zt,Vu),e(Zt,ud),e(ud,Qu),e(Zt,Ju),h(o,Tp,p),f(On,o,p),h(o,Mp,p),h(o,Yt,p),e(Yt,So),e(So,md),f(In,md,null),e(Yt,Ku),e(Yt,fd),e(fd,Zu),h(o,wp,p),h(o,vt,p),e(vt,Yu),e(vt,Nn),e(Nn,em),e(vt,tm),e(vt,_d),e(_d,om),e(vt,nm),h(o,xp,p),h(o,ni,p),e(ni,am),h(o,zp,p),h(o,ai,p),e(ai,gd),e(gd,sm),h(o,qp,p),h(o,eo,p),e(eo,Ao),e(Ao,kd),f(Dn,kd,null),e(eo,rm),e(eo,bd),e(bd,im),h(o,Bp,p),h(o,et,p),e(et,dm),e(et,yd),e(yd,lm),e(et,cm),e(et,vd),e(vd,pm),e(et,hm),e(et,Td),e(Td,um),e(et,mm),h(o,$p,p),h(o,Oo,p),e(Oo,fm),e(Oo,si),e(si,_m),e(Oo,gm),h(o,Fp,p),h(o,ri,p),e(ri,Md),e(Md,km),h(o,jp,p),f(Ln,o,p),h(o,Ep,p),h(o,ii,p),e(ii,Gn),e(Gn,wd),e(wd,bm),e(Gn,ym),e(Gn,qe),e(qe,vm),e(qe,xd),e(xd,Tm),e(qe,Mm),e(qe,zd),e(zd,wm),e(qe,xm),e(qe,qd),e(qd,zm),e(qe,qm),e(qe,Bd),e(Bd,Bm),e(qe,$m),e(qe,$d),e($d,Fm),e(qe,jm),h(o,Pp,p),f(Wn,o,p),h(o,Cp,p),h(o,to,p),e(to,Io),e(Io,Fd),f(Rn,Fd,null),e(to,Em),e(to,jd),e(jd,Pm),h(o,Sp,p),h(o,Be,p),f(Un,Be,null),e(Be,Cm),e(Be,oo),e(oo,Sm),e(oo,di),e(di,Am),e(oo,Om),e(oo,Xn),e(Xn,Im),e(oo,Nm),e(Be,Dm),e(Be,no),e(no,Lm),e(no,li),e(li,Gm),e(no,Wm),e(no,ci),e(ci,Rm),e(no,Um),e(Be,Xm),e(Be,Ed),e(Ed,Hm),e(Be,Vm),f(Hn,Be,null),h(o,Ap,p),h(o,ao,p),e(ao,No),e(No,Pd),f(Vn,Pd,null),e(ao,Qm),e(ao,Cd),e(Cd,Jm),h(o,Op,p),h(o,L,p),f(Qn,L,null),e(L,Km),e(L,Sd),e(Sd,Zm),e(L,Ym),e(L,mt),e(mt,ef),e(mt,pi),e(pi,tf),e(mt,of),e(mt,hi),e(hi,nf),e(mt,af),e(mt,Jn),e(Jn,sf),e(mt,rf),e(L,df),e(L,Kn),e(Kn,lf),e(Kn,Ad),e(Ad,cf),e(Kn,pf),e(L,hf),e(L,Od),e(Od,uf),e(L,mf),f(Zn,L,null),e(L,ff),e(L,Do),f(Yn,Do,null),e(Do,_f),e(Do,Id),e(Id,gf),e(L,kf),e(L,tt),f(ea,tt,null),e(tt,bf),e(tt,ta),e(ta,yf),e(ta,Nd),e(Nd,vf),e(ta,Tf),e(tt,Mf),e(tt,oa),e(oa,na),e(na,Dd),e(Dd,wf),e(na,xf),e(na,Ld),e(Ld,zf),e(oa,qf),e(oa,aa),e(aa,Gd),e(Gd,Bf),e(aa,$f),e(aa,Wd),e(Wd,Ff),e(tt,jf),e(tt,Rd),e(Rd,Ef),h(o,Ip,p),h(o,so,p),e(so,Lo),e(Lo,Ud),f(sa,Ud,null),e(so,Pf),e(so,Xd),e(Xd,Cf),h(o,Np,p),h(o,C,p),f(ra,C,null),e(C,Sf),e(C,ro),e(ro,Af),e(ro,Hd),e(Hd,Of),e(ro,If),e(ro,ia),e(ia,Nf),e(ro,Df),e(C,Lf),e(C,Tt),e(Tt,ui),e(ui,Gf),e(Tt,Wf),e(Tt,mi),e(mi,Rf),e(Tt,Uf),e(Tt,fi),e(fi,Xf),e(Tt,Hf),e(C,Vf),e(C,da),e(da,Qf),e(da,Vd),e(Vd,Jf),e(da,Kf),e(C,Zf),e(C,Qd),e(Qd,Yf),e(C,e_),f(la,C,null),e(C,t_),e(C,Se),f(ca,Se,null),e(Se,o_),e(Se,Jd),e(Jd,n_),e(Se,a_),e(Se,pa),e(pa,s_),e(pa,Kd),e(Kd,r_),e(pa,i_),e(Se,d_),e(Se,ha),e(ha,ua),e(ua,Zd),e(Zd,l_),e(ua,c_),e(ua,Yd),e(Yd,p_),e(ha,h_),e(ha,ma),e(ma,el),e(el,u_),e(ma,m_),e(ma,tl),e(tl,f_),e(Se,__),e(Se,ol),e(ol,g_),e(C,k_),e(C,Go),f(fa,Go,null),e(Go,b_),e(Go,nl),e(nl,y_),e(C,v_),e(C,Wo),f(_a,Wo,null),e(Wo,T_),e(Wo,al),e(al,M_),e(C,w_),e(C,Ro),f(ga,Ro,null),e(Ro,x_),e(Ro,sl),e(sl,z_),h(o,Dp,p),h(o,io,p),e(io,Uo),e(Uo,rl),f(ka,rl,null),e(io,q_),e(io,il),e(il,B_),h(o,Lp,p),h(o,S,p),f(ba,S,null),e(S,$_),e(S,ya),e(ya,F_),e(ya,va),e(va,j_),e(ya,E_),e(S,P_),e(S,Ta),e(Ta,C_),e(Ta,_i),e(_i,S_),e(Ta,A_),e(S,O_),e(S,dl),e(dl,I_),e(S,N_),f(Ma,S,null),e(S,D_),e(S,ot),f(wa,ot,null),e(ot,L_),e(ot,xa),e(xa,G_),e(xa,ll),e(ll,W_),e(xa,R_),e(ot,U_),e(ot,za),e(za,qa),e(qa,cl),e(cl,X_),e(qa,H_),e(qa,pl),e(pl,V_),e(za,Q_),e(za,Ba),e(Ba,hl),e(hl,J_),e(Ba,K_),e(Ba,ul),e(ul,Z_),e(ot,Y_),e(ot,ml),e(ml,eg),e(S,tg),e(S,Xo),f($a,Xo,null),e(Xo,og),e(Xo,fl),e(fl,ng),e(S,ag),e(S,Ho),f(Fa,Ho,null),e(Ho,sg),e(Ho,ja),e(ja,rg),e(ja,_l),e(_l,ig),e(ja,dg),e(S,lg),e(S,Vo),f(Ea,Vo,null),e(Vo,cg),e(Vo,gl),e(gl,pg),e(S,hg),e(S,Qo),f(Pa,Qo,null),e(Qo,ug),e(Qo,kl),e(kl,mg),h(o,Gp,p),h(o,lo,p),e(lo,Jo),e(Jo,bl),f(Ca,bl,null),e(lo,fg),e(lo,yl),e(yl,_g),h(o,Wp,p),h(o,G,p),f(Sa,G,null),e(G,gg),e(G,co),e(co,kg),e(co,vl),e(vl,bg),e(co,yg),e(co,Aa),e(Aa,vg),e(co,Tg),e(G,Mg),e(G,Oa),e(Oa,wg),e(Oa,gi),e(gi,xg),e(Oa,zg),e(G,qg),e(G,Tl),e(Tl,Bg),e(G,$g),f(Ia,G,null),e(G,Fg),e(G,Ae),f(Na,Ae,null),e(Ae,jg),e(Ae,Ml),e(Ml,Eg),e(Ae,Pg),e(Ae,Da),e(Da,Cg),e(Da,wl),e(wl,Sg),e(Da,Ag),e(Ae,Og),e(Ae,La),e(La,Ga),e(Ga,xl),e(xl,Ig),e(Ga,Ng),e(Ga,zl),e(zl,Dg),e(La,Lg),e(La,Wa),e(Wa,ql),e(ql,Gg),e(Wa,Wg),e(Wa,Bl),e(Bl,Rg),e(Ae,Ug),e(Ae,$l),e($l,Xg),e(G,Hg),e(G,Ko),f(Ra,Ko,null),e(Ko,Vg),e(Ko,Fl),e(Fl,Qg),e(G,Jg),e(G,Zo),f(Ua,Zo,null),e(Zo,Kg),e(Zo,jl),e(jl,Zg),h(o,Rp,p),h(o,po,p),e(po,Yo),e(Yo,El),f(Xa,El,null),e(po,Yg),e(po,Pl),e(Pl,ek),h(o,Up,p),h(o,Qe,p),f(Ha,Qe,null),e(Qe,tk),e(Qe,Va),e(Va,ok),e(Va,ki),e(ki,nk),e(Va,ak),e(Qe,sk),e(Qe,Qa),e(Qa,rk),e(Qa,Ja),e(Ja,ik),e(Qa,dk),e(Qe,lk),e(Qe,Oe),f(Ka,Oe,null),e(Oe,ck),e(Oe,ho),e(ho,pk),e(ho,bi),e(bi,hk),e(ho,uk),e(ho,Cl),e(Cl,mk),e(ho,fk),e(Oe,_k),f(en,Oe,null),e(Oe,gk),e(Oe,Sl),e(Sl,kk),e(Oe,bk),f(Za,Oe,null),h(o,Xp,p),h(o,uo,p),e(uo,tn),e(tn,Al),f(Ya,Al,null),e(uo,yk),e(uo,Ol),e(Ol,vk),h(o,Hp,p),h(o,Je,p),f(es,Je,null),e(Je,Tk),e(Je,ts),e(ts,Mk),e(ts,yi),e(yi,wk),e(ts,xk),e(Je,zk),e(Je,os),e(os,qk),e(os,ns),e(ns,Bk),e(os,$k),e(Je,Fk),e(Je,Y),f(as,Y,null),e(Y,jk),e(Y,mo),e(mo,Ek),e(mo,vi),e(vi,Pk),e(mo,Ck),e(mo,Il),e(Il,Sk),e(mo,Ak),e(Y,Ok),f(on,Y,null),e(Y,Ik),e(Y,Nl),e(Nl,Nk),e(Y,Dk),f(ss,Y,null),e(Y,Lk),e(Y,Dl),e(Dl,Gk),e(Y,Wk),f(rs,Y,null),h(o,Vp,p),h(o,fo,p),e(fo,nn),e(nn,Ll),f(is,Ll,null),e(fo,Rk),e(fo,Gl),e(Gl,Uk),h(o,Qp,p),h(o,$e,p),f(ds,$e,null),e($e,Xk),e($e,_o),e(_o,Hk),e(_o,Wl),e(Wl,Vk),e(_o,Qk),e(_o,Rl),e(Rl,Jk),e(_o,Kk),e($e,Zk),e($e,ls),e(ls,Yk),e(ls,Ti),e(Ti,eb),e(ls,tb),e($e,ob),e($e,cs),e(cs,nb),e(cs,ps),e(ps,ab),e(cs,sb),e($e,rb),e($e,he),f(hs,he,null),e(he,ib),e(he,go),e(go,db),e(go,Mi),e(Mi,lb),e(go,cb),e(go,Ul),e(Ul,pb),e(go,hb),e(he,ub),f(an,he,null),e(he,mb),e(he,Xl),e(Xl,fb),e(he,_b),f(us,he,null),e(he,gb),f(ms,he,null),h(o,Jp,p),h(o,ko,p),e(ko,sn),e(sn,Hl),f(fs,Hl,null),e(ko,kb),e(ko,Vl),e(Vl,bb),h(o,Kp,p),h(o,Fe,p),f(_s,Fe,null),e(Fe,yb),e(Fe,Ql),e(Ql,vb),e(Fe,Tb),e(Fe,gs),e(gs,Mb),e(gs,wi),e(wi,wb),e(gs,xb),e(Fe,zb),e(Fe,ks),e(ks,qb),e(ks,bs),e(bs,Bb),e(ks,$b),e(Fe,Fb),e(Fe,H),f(ys,H,null),e(H,jb),e(H,bo),e(bo,Eb),e(bo,xi),e(xi,Pb),e(bo,Cb),e(bo,Jl),e(Jl,Sb),e(bo,Ab),e(H,Ob),f(rn,H,null),e(H,Ib),e(H,Kl),e(Kl,Nb),e(H,Db),f(vs,H,null),e(H,Lb),f(Ts,H,null),e(H,Gb),e(H,Zl),e(Zl,Wb),e(H,Rb),f(Ms,H,null),h(o,Zp,p),h(o,yo,p),e(yo,dn),e(dn,Yl),f(ws,Yl,null),e(yo,Ub),e(yo,ec),e(ec,Xb),h(o,Yp,p),h(o,vo,p),f(xs,vo,null),e(vo,Hb),e(vo,Mt),f(zs,Mt,null),e(Mt,Vb),e(Mt,tc),e(tc,Qb),e(Mt,Jb),f(qs,Mt,null),h(o,eh,p),h(o,To,p),e(To,ln),e(ln,oc),f(Bs,oc,null),e(To,Kb),e(To,nc),e(nc,Zb),h(o,th,p),h(o,je,p),f($s,je,null),e(je,Yb),e(je,Fs),e(Fs,ey),e(Fs,zi),e(zi,ty),e(Fs,oy),e(je,ny),e(je,js),e(js,ay),e(js,Es),e(Es,sy),e(js,ry),e(je,iy),f(cn,je,null),e(je,dy),e(je,Ie),f(Ps,Ie,null),e(Ie,ly),e(Ie,Mo),e(Mo,cy),e(Mo,qi),e(qi,py),e(Mo,hy),e(Mo,ac),e(ac,uy),e(Mo,my),e(Ie,fy),f(pn,Ie,null),e(Ie,_y),e(Ie,sc),e(sc,gy),e(Ie,ky),f(Cs,Ie,null),h(o,oh,p),h(o,wo,p),e(wo,hn),e(hn,rc),f(Ss,rc,null),e(wo,by),e(wo,ic),e(ic,yy),h(o,nh,p),h(o,Ee,p),f(As,Ee,null),e(Ee,vy),e(Ee,Os),e(Os,Ty),e(Os,Bi),e(Bi,My),e(Os,wy),e(Ee,xy),e(Ee,Is),e(Is,zy),e(Is,Ns),e(Ns,qy),e(Is,By),e(Ee,$y),f(un,Ee,null),e(Ee,Fy),e(Ee,ee),f(Ds,ee,null),e(ee,jy),e(ee,xo),e(xo,Ey),e(xo,$i),e($i,Py),e(xo,Cy),e(xo,dc),e(dc,Sy),e(xo,Ay),e(ee,Oy),f(mn,ee,null),e(ee,Iy),e(ee,lc),e(lc,Ny),e(ee,Dy),f(Ls,ee,null),e(ee,Ly),e(ee,cc),e(cc,Gy),e(ee,Wy),f(Gs,ee,null),h(o,ah,p),h(o,zo,p),e(zo,fn),e(fn,pc),f(Ws,pc,null),e(zo,Ry),e(zo,hc),e(hc,Uy),h(o,sh,p),h(o,W,p),f(Rs,W,null),e(W,Xy),e(W,Us),e(Us,Hy),e(Us,Fi),e(Fi,Vy),e(Us,Qy),e(W,Jy),e(W,Xs),e(Xs,Ky),e(Xs,Hs),e(Hs,Zy),e(Xs,Yy),e(W,ev),e(W,uc),e(uc,tv),e(W,ov),e(W,ft),e(ft,mc),e(mc,Vs),e(Vs,nv),e(ft,av),e(ft,fc),e(fc,Qs),e(Qs,sv),e(ft,rv),e(ft,_c),e(_c,Js),e(Js,iv),e(ft,dv),e(ft,gc),e(gc,Ks),e(Ks,lv),e(W,cv),e(W,Ne),f(Zs,Ne,null),e(Ne,pv),e(Ne,qo),e(qo,hv),e(qo,kc),e(kc,uv),e(qo,mv),e(qo,bc),e(bc,fv),e(qo,_v),e(Ne,gv),f(_n,Ne,null),e(Ne,kv),e(Ne,yc),e(yc,bv),e(Ne,yv),f(Ys,Ne,null),e(W,vv),e(W,wt),f(er,wt,null),e(wt,Tv),e(wt,vc),e(vc,Mv),e(wt,wv),f(tr,wt,null),e(W,xv),e(W,xt),f(or,xt,null),e(xt,zv),e(xt,Tc),e(Tc,qv),e(xt,Bv),f(nr,xt,null),h(o,rh,p),h(o,Bo,p),e(Bo,gn),e(gn,Mc),f(ar,Mc,null),e(Bo,$v),e(Bo,wc),e(wc,Fv),h(o,ih,p),h(o,R,p),f(sr,R,null),e(R,jv),e(R,rr),e(rr,Ev),e(rr,ji),e(ji,Pv),e(rr,Cv),e(R,Sv),e(R,ir),e(ir,Av),e(ir,dr),e(dr,Ov),e(ir,Iv),e(R,Nv),e(R,xc),e(xc,Dv),e(R,Lv),e(R,_t),e(_t,zc),e(zc,lr),e(lr,Gv),e(_t,Wv),e(_t,qc),e(qc,cr),e(cr,Rv),e(_t,Uv),e(_t,Bc),e(Bc,pr),e(pr,Xv),e(_t,Hv),e(_t,$c),e($c,hr),e(hr,Vv),e(R,Qv),e(R,te),f(ur,te,null),e(te,Jv),e(te,$o),e($o,Kv),e($o,Fc),e(Fc,Zv),e($o,Yv),e($o,jc),e(jc,eT),e($o,tT),e(te,oT),f(kn,te,null),e(te,nT),e(te,Ec),e(Ec,aT),e(te,sT),f(mr,te,null),e(te,rT),e(te,Pc),e(Pc,iT),e(te,dT),f(fr,te,null),e(R,lT),e(R,zt),f(_r,zt,null),e(zt,cT),e(zt,Cc),e(Cc,pT),e(zt,hT),f(gr,zt,null),e(R,uT),e(R,qt),f(kr,qt,null),e(qt,mT),e(qt,Sc),e(Sc,fT),e(qt,_T),f(br,qt,null),h(o,dh,p),h(o,Fo,p),e(Fo,bn),e(bn,Ac),f(yr,Ac,null),e(Fo,gT),e(Fo,Oc),e(Oc,kT),h(o,lh,p),h(o,O,p),f(vr,O,null),e(O,bT),e(O,Ic),e(Ic,yT),e(O,vT),e(O,Tr),e(Tr,TT),e(Tr,Ei),e(Ei,MT),e(Tr,wT),e(O,xT),e(O,Mr),e(Mr,zT),e(Mr,wr),e(wr,qT),e(Mr,BT),e(O,$T),e(O,Nc),e(Nc,FT),e(O,jT),e(O,gt),e(gt,Dc),e(Dc,xr),e(xr,ET),e(gt,PT),e(gt,Lc),e(Lc,zr),e(zr,CT),e(gt,ST),e(gt,Gc),e(Gc,qr),e(qr,AT),e(gt,OT),e(gt,Wc),e(Wc,Br),e(Br,IT),e(O,NT),e(O,De),f($r,De,null),e(De,DT),e(De,jo),e(jo,LT),e(jo,Rc),e(Rc,GT),e(jo,WT),e(jo,Uc),e(Uc,RT),e(jo,UT),e(De,XT),f(yn,De,null),e(De,HT),e(De,Xc),e(Xc,VT),e(De,QT),f(Fr,De,null),e(O,JT),e(O,Bt),f(jr,Bt,null),e(Bt,KT),e(Bt,Hc),e(Hc,ZT),e(Bt,YT),f(Er,Bt,null),e(O,eM),e(O,$t),f(Pr,$t,null),e($t,tM),e($t,Vc),e(Vc,oM),e($t,nM),f(Cr,$t,null),h(o,ch,p),h(o,Eo,p),e(Eo,vn),e(vn,Qc),f(Sr,Qc,null),e(Eo,aM),e(Eo,Jc),e(Jc,sM),h(o,ph,p),h(o,I,p),f(Ar,I,null),e(I,rM),e(I,Po),e(Po,iM),e(Po,Kc),e(Kc,dM),e(Po,lM),e(Po,Zc),e(Zc,cM),e(Po,pM),e(I,hM),e(I,Or),e(Or,uM),e(Or,Pi),e(Pi,mM),e(Or,fM),e(I,_M),e(I,Ir),e(Ir,gM),e(Ir,Nr),e(Nr,kM),e(Ir,bM),e(I,yM),e(I,Yc),e(Yc,vM),e(I,TM),e(I,kt),e(kt,ep),e(ep,Dr),e(Dr,MM),e(kt,wM),e(kt,tp),e(tp,Lr),e(Lr,xM),e(kt,zM),e(kt,op),e(op,Gr),e(Gr,qM),e(kt,BM),e(kt,np),e(np,Wr),e(Wr,$M),e(I,FM),e(I,Le),f(Rr,Le,null),e(Le,jM),e(Le,Co),e(Co,EM),e(Co,ap),e(ap,PM),e(Co,CM),e(Co,sp),e(sp,SM),e(Co,AM),e(Le,OM),f(Tn,Le,null),e(Le,IM),e(Le,rp),e(rp,NM),e(Le,DM),f(Ur,Le,null),e(I,LM),e(I,Ft),f(Xr,Ft,null),e(Ft,GM),e(Ft,ip),e(ip,WM),e(Ft,RM),f(Hr,Ft,null),e(I,UM),e(I,jt),f(Vr,jt,null),e(jt,XM),e(jt,dp),e(dp,HM),e(jt,VM),f(Qr,jt,null),hh=!0},p(o,[p]){const Jr={};p&2&&(Jr.$$scope={dirty:p,ctx:o}),en.$set(Jr);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),on.$set(lp);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),an.$set(cp);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),rn.$set(pp);const Mn={};p&2&&(Mn.$$scope={dirty:p,ctx:o}),cn.$set(Mn);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),pn.$set(hp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),un.$set(up);const Kr={};p&2&&(Kr.$$scope={dirty:p,ctx:o}),mn.$set(Kr);const mp={};p&2&&(mp.$$scope={dirty:p,ctx:o}),_n.$set(mp);const fp={};p&2&&(fp.$$scope={dirty:p,ctx:o}),kn.$set(fp);const _p={};p&2&&(_p.$$scope={dirty:p,ctx:o}),yn.$set(_p);const Zr={};p&2&&(Zr.$$scope={dirty:p,ctx:o}),Tn.$set(Zr)},i(o){hh||(_(T.$$.fragment,o),_(ae.$$.fragment,o),_(He.$$.fragment,o),_(Sn.$$.fragment,o),_(On.$$.fragment,o),_(In.$$.fragment,o),_(Dn.$$.fragment,o),_(Ln.$$.fragment,o),_(Wn.$$.fragment,o),_(Rn.$$.fragment,o),_(Un.$$.fragment,o),_(Hn.$$.fragment,o),_(Vn.$$.fragment,o),_(Qn.$$.fragment,o),_(Zn.$$.fragment,o),_(Yn.$$.fragment,o),_(ea.$$.fragment,o),_(sa.$$.fragment,o),_(ra.$$.fragment,o),_(la.$$.fragment,o),_(ca.$$.fragment,o),_(fa.$$.fragment,o),_(_a.$$.fragment,o),_(ga.$$.fragment,o),_(ka.$$.fragment,o),_(ba.$$.fragment,o),_(Ma.$$.fragment,o),_(wa.$$.fragment,o),_($a.$$.fragment,o),_(Fa.$$.fragment,o),_(Ea.$$.fragment,o),_(Pa.$$.fragment,o),_(Ca.$$.fragment,o),_(Sa.$$.fragment,o),_(Ia.$$.fragment,o),_(Na.$$.fragment,o),_(Ra.$$.fragment,o),_(Ua.$$.fragment,o),_(Xa.$$.fragment,o),_(Ha.$$.fragment,o),_(Ka.$$.fragment,o),_(en.$$.fragment,o),_(Za.$$.fragment,o),_(Ya.$$.fragment,o),_(es.$$.fragment,o),_(as.$$.fragment,o),_(on.$$.fragment,o),_(ss.$$.fragment,o),_(rs.$$.fragment,o),_(is.$$.fragment,o),_(ds.$$.fragment,o),_(hs.$$.fragment,o),_(an.$$.fragment,o),_(us.$$.fragment,o),_(ms.$$.fragment,o),_(fs.$$.fragment,o),_(_s.$$.fragment,o),_(ys.$$.fragment,o),_(rn.$$.fragment,o),_(vs.$$.fragment,o),_(Ts.$$.fragment,o),_(Ms.$$.fragment,o),_(ws.$$.fragment,o),_(xs.$$.fragment,o),_(zs.$$.fragment,o),_(qs.$$.fragment,o),_(Bs.$$.fragment,o),_($s.$$.fragment,o),_(cn.$$.fragment,o),_(Ps.$$.fragment,o),_(pn.$$.fragment,o),_(Cs.$$.fragment,o),_(Ss.$$.fragment,o),_(As.$$.fragment,o),_(un.$$.fragment,o),_(Ds.$$.fragment,o),_(mn.$$.fragment,o),_(Ls.$$.fragment,o),_(Gs.$$.fragment,o),_(Ws.$$.fragment,o),_(Rs.$$.fragment,o),_(Zs.$$.fragment,o),_(_n.$$.fragment,o),_(Ys.$$.fragment,o),_(er.$$.fragment,o),_(tr.$$.fragment,o),_(or.$$.fragment,o),_(nr.$$.fragment,o),_(ar.$$.fragment,o),_(sr.$$.fragment,o),_(ur.$$.fragment,o),_(kn.$$.fragment,o),_(mr.$$.fragment,o),_(fr.$$.fragment,o),_(_r.$$.fragment,o),_(gr.$$.fragment,o),_(kr.$$.fragment,o),_(br.$$.fragment,o),_(yr.$$.fragment,o),_(vr.$$.fragment,o),_($r.$$.fragment,o),_(yn.$$.fragment,o),_(Fr.$$.fragment,o),_(jr.$$.fragment,o),_(Er.$$.fragment,o),_(Pr.$$.fragment,o),_(Cr.$$.fragment,o),_(Sr.$$.fragment,o),_(Ar.$$.fragment,o),_(Rr.$$.fragment,o),_(Tn.$$.fragment,o),_(Ur.$$.fragment,o),_(Xr.$$.fragment,o),_(Hr.$$.fragment,o),_(Vr.$$.fragment,o),_(Qr.$$.fragment,o),hh=!0)},o(o){g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(Sn.$$.fragment,o),g(On.$$.fragment,o),g(In.$$.fragment,o),g(Dn.$$.fragment,o),g(Ln.$$.fragment,o),g(Wn.$$.fragment,o),g(Rn.$$.fragment,o),g(Un.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Qn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(sa.$$.fragment,o),g(ra.$$.fragment,o),g(la.$$.fragment,o),g(ca.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(ba.$$.fragment,o),g(Ma.$$.fragment,o),g(wa.$$.fragment,o),g($a.$$.fragment,o),g(Fa.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Na.$$.fragment,o),g(Ra.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ha.$$.fragment,o),g(Ka.$$.fragment,o),g(en.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(es.$$.fragment,o),g(as.$$.fragment,o),g(on.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ds.$$.fragment,o),g(hs.$$.fragment,o),g(an.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(fs.$$.fragment,o),g(_s.$$.fragment,o),g(ys.$$.fragment,o),g(rn.$$.fragment,o),g(vs.$$.fragment,o),g(Ts.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(qs.$$.fragment,o),g(Bs.$$.fragment,o),g($s.$$.fragment,o),g(cn.$$.fragment,o),g(Ps.$$.fragment,o),g(pn.$$.fragment,o),g(Cs.$$.fragment,o),g(Ss.$$.fragment,o),g(As.$$.fragment,o),g(un.$$.fragment,o),g(Ds.$$.fragment,o),g(mn.$$.fragment,o),g(Ls.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Rs.$$.fragment,o),g(Zs.$$.fragment,o),g(_n.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(ar.$$.fragment,o),g(sr.$$.fragment,o),g(ur.$$.fragment,o),g(kn.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(br.$$.fragment,o),g(yr.$$.fragment,o),g(vr.$$.fragment,o),g($r.$$.fragment,o),g(yn.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Cr.$$.fragment,o),g(Sr.$$.fragment,o),g(Ar.$$.fragment,o),g(Rr.$$.fragment,o),g(Tn.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),g(Hr.$$.fragment,o),g(Vr.$$.fragment,o),g(Qr.$$.fragment,o),hh=!1},d(o){t(b),o&&t(z),o&&t(v),k(T),o&&t(Pe),o&&t(j),o&&t(Ke),o&&t(J),k(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ce),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(M),k(He),o&&t(bt),o&&t(X),o&&t(kp),o&&t(yt),o&&t(bp),o&&t(ti),o&&t(yp),k(Sn,o),o&&t(vp),o&&t(oi),o&&t(Tp),k(On,o),o&&t(Mp),o&&t(Yt),k(In),o&&t(wp),o&&t(vt),o&&t(xp),o&&t(ni),o&&t(zp),o&&t(ai),o&&t(qp),o&&t(eo),k(Dn),o&&t(Bp),o&&t(et),o&&t($p),o&&t(Oo),o&&t(Fp),o&&t(ri),o&&t(jp),k(Ln,o),o&&t(Ep),o&&t(ii),o&&t(Pp),k(Wn,o),o&&t(Cp),o&&t(to),k(Rn),o&&t(Sp),o&&t(Be),k(Un),k(Hn),o&&t(Ap),o&&t(ao),k(Vn),o&&t(Op),o&&t(L),k(Qn),k(Zn),k(Yn),k(ea),o&&t(Ip),o&&t(so),k(sa),o&&t(Np),o&&t(C),k(ra),k(la),k(ca),k(fa),k(_a),k(ga),o&&t(Dp),o&&t(io),k(ka),o&&t(Lp),o&&t(S),k(ba),k(Ma),k(wa),k($a),k(Fa),k(Ea),k(Pa),o&&t(Gp),o&&t(lo),k(Ca),o&&t(Wp),o&&t(G),k(Sa),k(Ia),k(Na),k(Ra),k(Ua),o&&t(Rp),o&&t(po),k(Xa),o&&t(Up),o&&t(Qe),k(Ha),k(Ka),k(en),k(Za),o&&t(Xp),o&&t(uo),k(Ya),o&&t(Hp),o&&t(Je),k(es),k(as),k(on),k(ss),k(rs),o&&t(Vp),o&&t(fo),k(is),o&&t(Qp),o&&t($e),k(ds),k(hs),k(an),k(us),k(ms),o&&t(Jp),o&&t(ko),k(fs),o&&t(Kp),o&&t(Fe),k(_s),k(ys),k(rn),k(vs),k(Ts),k(Ms),o&&t(Zp),o&&t(yo),k(ws),o&&t(Yp),o&&t(vo),k(xs),k(zs),k(qs),o&&t(eh),o&&t(To),k(Bs),o&&t(th),o&&t(je),k($s),k(cn),k(Ps),k(pn),k(Cs),o&&t(oh),o&&t(wo),k(Ss),o&&t(nh),o&&t(Ee),k(As),k(un),k(Ds),k(mn),k(Ls),k(Gs),o&&t(ah),o&&t(zo),k(Ws),o&&t(sh),o&&t(W),k(Rs),k(Zs),k(_n),k(Ys),k(er),k(tr),k(or),k(nr),o&&t(rh),o&&t(Bo),k(ar),o&&t(ih),o&&t(R),k(sr),k(ur),k(kn),k(mr),k(fr),k(_r),k(gr),k(kr),k(br),o&&t(dh),o&&t(Fo),k(yr),o&&t(lh),o&&t(O),k(vr),k($r),k(yn),k(Fr),k(jr),k(Er),k(Pr),k(Cr),o&&t(ch),o&&t(Eo),k(Sr),o&&t(ph),o&&t(I),k(Ar),k(Rr),k(Tn),k(Ur),k(Xr),k(Hr),k(Vr),k(Qr)}}}const t0={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function o0(E){return L2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class d0 extends O2{constructor(b){super();I2(this,b,o0,e0,N2,{})}}export{d0 as default,t0 as metadata};
