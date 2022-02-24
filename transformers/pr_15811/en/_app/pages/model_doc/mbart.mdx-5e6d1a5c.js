import{S as j2,i as E2,s as P2,e as n,k as d,w as m,t as r,L as C2,c as a,d as t,m as l,a as s,x as f,h as i,b as c,J as e,g as u,y as _,q as g,o as k,B as b}from"../../chunks/vendor-9e2b328e.js";import{T as at}from"../../chunks/Tip-76f97a76.js";import{D as q}from"../../chunks/Docstring-50fd6873.js";import{C as F}from"../../chunks/CodeBlock-88e23343.js";import{I as U}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function S2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function A2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function I2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function N2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function O2(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=a(w,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,je,$),u(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),u(w,Q,$),u(w,O,$),e(O,Xe),u(w,ae,$),u(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ut),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function D2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function L2(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye;return{c(){h=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),v=d(),M=n("ul"),x=n("li"),T=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),B=n("li"),st=r("having all inputs as a list, tuple or dict in the first positional arguments."),je=d(),j=n("p"),Ue=r("This second option is useful when using "),_e=n("code"),rt=r("tf.keras.Model.fit"),ge=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=n("code"),it=r("model(inputs)"),Ke=r("."),Q=d(),O=n("p"),Xe=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ae=d(),P=n("ul"),A=n("li"),dt=r("a single Tensor with "),ce=n("code"),pe=r("input_ids"),lt=r(" only and nothing else: "),J=n("code"),ct=r("model(input_ids)"),pt=d(),D=n("li"),Ee=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=n("code"),Ze=r("model([input_ids, attention_mask])"),se=r(" or "),ve=n("code"),ye=r("model([input_ids, attention_mask, token_type_ids])"),ut=d(),re=n("li"),Te=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=n("code"),Ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){h=a(w,"P",{});var $=s(h);z=i($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),v=l(w),M=a(w,"UL",{});var we=s(M);x=a(we,"LI",{});var He=s(x);T=i(He,"having all inputs as keyword arguments (like PyTorch models), or"),He.forEach(t),y=l(we),B=a(we,"LI",{});var Ut=s(B);st=i(Ut,"having all inputs as a list, tuple or dict in the first positional arguments."),Ut.forEach(t),we.forEach(t),je=l(w),j=a(w,"P",{});var K=s(j);Ue=i(K,"This second option is useful when using "),_e=a(K,"CODE",{});var Xt=s(_e);rt=i(Xt,"tf.keras.Model.fit"),Xt.forEach(t),ge=i(K,` method which currently requires having all the
tensors in the first argument of the model call function: `),ke=a(K,"CODE",{});var kt=s(ke);it=i(kt,"model(inputs)"),kt.forEach(t),Ke=i(K,"."),K.forEach(t),Q=l(w),O=a(w,"P",{});var X=s(O);Xe=i(X,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X.forEach(t),ae=l(w),P=a(w,"UL",{});var ie=s(P);A=a(ie,"LI",{});var de=s(A);dt=i(de,"a single Tensor with "),ce=a(de,"CODE",{});var Ht=s(ce);pe=i(Ht,"input_ids"),Ht.forEach(t),lt=i(de," only and nothing else: "),J=a(de,"CODE",{});var Vt=s(J);ct=i(Vt,"model(input_ids)"),Vt.forEach(t),de.forEach(t),pt=l(ie),D=a(ie,"LI",{});var le=s(D);Ee=i(le,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),be=a(le,"CODE",{});var Qt=s(be);Ze=i(Qt,"model([input_ids, attention_mask])"),Qt.forEach(t),se=i(le," or "),ve=a(le,"CODE",{});var Jt=s(ve);ye=i(Jt,"model([input_ids, attention_mask, token_type_ids])"),Jt.forEach(t),le.forEach(t),ut=l(ie),re=a(ie,"LI",{});var Ve=s(re);Te=i(Ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Me=a(Ve,"CODE",{});var Kt=s(Me);Ye=i(Kt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Kt.forEach(t),Ve.forEach(t),ie.forEach(t)},m(w,$){u(w,h,$),e(h,z),u(w,v,$),u(w,M,$),e(M,x),e(x,T),e(M,y),e(M,B),e(B,st),u(w,je,$),u(w,j,$),e(j,Ue),e(j,_e),e(_e,rt),e(j,ge),e(j,ke),e(ke,it),e(j,Ke),u(w,Q,$),u(w,O,$),e(O,Xe),u(w,ae,$),u(w,P,$),e(P,A),e(A,dt),e(A,ce),e(ce,pe),e(A,lt),e(A,J),e(J,ct),e(P,pt),e(P,D),e(D,Ee),e(D,be),e(be,Ze),e(D,se),e(D,ve),e(ve,ye),e(P,ut),e(P,re),e(re,Te),e(re,Me),e(Me,Ye)},d(w){w&&t(h),w&&t(v),w&&t(M),w&&t(je),w&&t(j),w&&t(Q),w&&t(O),w&&t(ae),w&&t(P)}}}function G2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function R2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function W2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function U2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function X2(E){let h,z,v,M,x;return{c(){h=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=n("code"),M=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=a(T,"P",{});var y=s(h);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a(y,"CODE",{});var B=s(v);M=i(B,"Module"),B.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(T,y){u(T,h,y),e(h,z),e(h,v),e(v,M),e(h,x)},d(T){T&&t(h)}}}function H2(E){let h,z,v,M,x,T,y,B,st,je,j,Ue,_e,rt,ge,ke,it,Ke,Q,O,Xe,ae,P,A,dt,ce,pe,lt,J,ct,pt,D,Ee,be,Ze,se,ve,ye,ut,re,Te,Me,Ye,w,$,we,He,Ut,K,Xt,kt,X,ie,de,Ht,Vt,le,Qt,Jt,Ve,Kt,Fh,sd,jh,Eh,fp,bt,Ph,Pn,rd,Ch,Sh,Ah,Kr,Ih,Nh,_p,Zr,id,Oh,gp,Cn,kp,Yr,Sn,dd,Dh,Lh,Zt,Gh,ld,Rh,Wh,cd,Uh,Xh,bp,An,vp,Yt,Co,pd,In,Hh,ud,Vh,yp,vt,Qh,Nn,Jh,Kh,hd,Zh,Yh,Tp,ei,em,Mp,ti,md,tm,wp,eo,So,fd,On,om,_d,nm,xp,et,am,gd,sm,rm,kd,im,dm,bd,lm,cm,zp,Ao,pm,oi,um,hm,qp,ni,vd,mm,Bp,Dn,$p,ai,Ln,yd,fm,_m,xe,gm,Td,km,bm,Md,vm,ym,wd,Tm,Mm,xd,wm,xm,zd,zm,qm,Fp,Gn,jp,to,Io,qd,Rn,Bm,Bd,$m,Ep,ze,Wn,Fm,oo,jm,si,Em,Pm,Un,Cm,Sm,Am,no,Im,ri,Nm,Om,ii,Dm,Lm,Gm,$d,Rm,Wm,Xn,Pp,ao,No,Fd,Hn,Um,jd,Xm,Cp,L,Vn,Hm,Ed,Vm,Qm,ht,Jm,di,Km,Zm,li,Ym,ef,Qn,tf,of,nf,Jn,af,Pd,sf,rf,df,Cd,lf,cf,Kn,pf,Oo,Zn,uf,Sd,hf,mf,tt,Yn,ff,ea,_f,Ad,gf,kf,bf,ta,oa,Id,vf,yf,Nd,Tf,Mf,na,Od,wf,xf,Dd,zf,qf,Ld,Bf,Sp,so,Do,Gd,aa,$f,Rd,Ff,Ap,C,sa,jf,ro,Ef,Wd,Pf,Cf,ra,Sf,Af,If,yt,ci,Nf,Of,pi,Df,Lf,ui,Gf,Rf,Wf,ia,Uf,Ud,Xf,Hf,Vf,Xd,Qf,Jf,da,Kf,Pe,la,Zf,Hd,Yf,e_,ca,t_,Vd,o_,n_,a_,pa,ua,Qd,s_,r_,Jd,i_,d_,ha,Kd,l_,c_,Zd,p_,u_,Yd,h_,m_,Lo,ma,f_,el,__,g_,Go,fa,k_,tl,b_,v_,Ro,_a,y_,ol,T_,Ip,io,Wo,nl,ga,M_,al,w_,Np,S,ka,x_,ba,z_,va,q_,B_,$_,ya,F_,hi,j_,E_,P_,sl,C_,S_,Ta,A_,ot,Ma,I_,wa,N_,rl,O_,D_,L_,xa,za,il,G_,R_,dl,W_,U_,qa,ll,X_,H_,cl,V_,Q_,pl,J_,K_,Uo,Ba,Z_,ul,Y_,eg,Xo,$a,tg,Fa,og,hl,ng,ag,sg,Ho,ja,rg,ml,ig,dg,Vo,Ea,lg,fl,cg,Op,lo,Qo,_l,Pa,pg,gl,ug,Dp,G,Ca,hg,co,mg,kl,fg,_g,Sa,gg,kg,bg,Aa,vg,mi,yg,Tg,Mg,bl,wg,xg,Ia,zg,Ce,Na,qg,vl,Bg,$g,Oa,Fg,yl,jg,Eg,Pg,Da,La,Tl,Cg,Sg,Ml,Ag,Ig,Ga,wl,Ng,Og,xl,Dg,Lg,zl,Gg,Rg,Jo,Ra,Wg,ql,Ug,Xg,Ko,Wa,Hg,Bl,Vg,Lp,po,Zo,$l,Ua,Qg,Fl,Jg,Gp,Qe,Xa,Kg,Ha,Zg,fi,Yg,ek,tk,Va,ok,Qa,nk,ak,sk,Se,Ja,rk,uo,ik,_i,dk,lk,jl,ck,pk,uk,Yo,hk,El,mk,fk,Ka,Rp,ho,en,Pl,Za,_k,Cl,gk,Wp,Je,Ya,kk,es,bk,gi,vk,yk,Tk,ts,Mk,os,wk,xk,zk,Z,ns,qk,mo,Bk,ki,$k,Fk,Sl,jk,Ek,Pk,tn,Ck,Al,Sk,Ak,as,Ik,Il,Nk,Ok,ss,Up,fo,on,Nl,rs,Dk,Ol,Lk,Xp,qe,is,Gk,_o,Rk,Dl,Wk,Uk,Ll,Xk,Hk,Vk,ds,Qk,bi,Jk,Kk,Zk,ls,Yk,cs,eb,tb,ob,Ae,ps,nb,go,ab,vi,sb,rb,Gl,ib,db,lb,nn,cb,Rl,pb,ub,us,Hp,ko,an,Wl,hs,hb,Ul,mb,Vp,Be,ms,fb,Xl,_b,gb,fs,kb,yi,bb,vb,yb,_s,Tb,gs,Mb,wb,xb,Y,ks,zb,bo,qb,Ti,Bb,$b,Hl,Fb,jb,Eb,sn,Pb,Vl,Cb,Sb,bs,Ab,Ql,Ib,Nb,vs,Qp,vo,rn,Jl,ys,Ob,Kl,Db,Jp,Ts,Tt,Ms,Lb,Zl,Gb,Rb,ws,Kp,yo,dn,Yl,xs,Wb,ec,Ub,Zp,$e,zs,Xb,qs,Hb,Mi,Vb,Qb,Jb,Bs,Kb,$s,Zb,Yb,e1,ln,t1,Ie,Fs,o1,To,n1,wi,a1,s1,tc,r1,i1,d1,cn,l1,oc,c1,p1,js,Yp,Mo,pn,nc,Es,u1,ac,h1,eu,Fe,Ps,m1,Cs,f1,xi,_1,g1,k1,Ss,b1,As,v1,y1,T1,un,M1,ee,Is,w1,wo,x1,zi,z1,q1,sc,B1,$1,F1,hn,j1,rc,E1,P1,Ns,C1,ic,S1,A1,Os,tu,xo,mn,dc,Ds,I1,lc,N1,ou,R,Ls,O1,Gs,D1,qi,L1,G1,R1,Rs,W1,Ws,U1,X1,H1,cc,V1,Q1,mt,pc,Us,J1,K1,uc,Xs,Z1,Y1,hc,Hs,ev,tv,mc,Vs,ov,nv,Ne,Qs,av,zo,sv,fc,rv,iv,_c,dv,lv,cv,fn,pv,gc,uv,hv,Js,mv,Mt,Ks,fv,kc,_v,gv,Zs,kv,wt,Ys,bv,bc,vv,yv,er,nu,qo,_n,vc,tr,Tv,yc,Mv,au,W,or,wv,nr,xv,Bi,zv,qv,Bv,ar,$v,sr,Fv,jv,Ev,Tc,Pv,Cv,ft,Mc,rr,Sv,Av,wc,ir,Iv,Nv,xc,dr,Ov,Dv,zc,lr,Lv,Gv,te,cr,Rv,Bo,Wv,qc,Uv,Xv,Bc,Hv,Vv,Qv,gn,Jv,$c,Kv,Zv,pr,Yv,Fc,ey,ty,ur,oy,xt,hr,ny,jc,ay,sy,mr,ry,zt,fr,iy,Ec,dy,ly,_r,su,$o,kn,Pc,gr,cy,Cc,py,ru,I,kr,uy,Sc,hy,my,br,fy,$i,_y,gy,ky,vr,by,yr,vy,yy,Ty,Ac,My,wy,_t,Ic,Tr,xy,zy,Nc,Mr,qy,By,Oc,wr,$y,Fy,Dc,xr,jy,Ey,Oe,zr,Py,Fo,Cy,Lc,Sy,Ay,Gc,Iy,Ny,Oy,bn,Dy,Rc,Ly,Gy,qr,Ry,qt,Br,Wy,Wc,Uy,Xy,$r,Hy,Bt,Fr,Vy,Uc,Qy,Jy,jr,iu,jo,vn,Xc,Er,Ky,Hc,Zy,du,N,Pr,Yy,Eo,eT,Vc,tT,oT,Qc,nT,aT,sT,Cr,rT,Fi,iT,dT,lT,Sr,cT,Ar,pT,uT,hT,Jc,mT,fT,gt,Kc,Ir,_T,gT,Zc,Nr,kT,bT,Yc,Or,vT,yT,ep,Dr,TT,MT,De,Lr,wT,Po,xT,tp,zT,qT,op,BT,$T,FT,yn,jT,np,ET,PT,Gr,CT,$t,Rr,ST,ap,AT,IT,Wr,NT,Ft,Ur,OT,sp,DT,LT,Xr,lu;return T=new U({}),ae=new U({}),He=new U({}),Cn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = "UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-en-ro")
# forward pass
model(**inputs, labels=batch["labels"]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(**inputs, labels=batch[<span class="hljs-string">&quot;labels&quot;</span>])`}}),An=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX")
article = "UN Chief Says There Is No Military Solution in Syria"
inputs = tokenizer(article, return_tensors="pt")
translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id["ro_RO"])
tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated_tokens = model.generate(**inputs, decoder_start_token_id=tokenizer.lang_code_to_id[<span class="hljs-string">&quot;ro_RO&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(translated_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>`}}),In=new U({}),On=new U({}),Dn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-50")
tokenizer = MBart50TokenizerFast.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")

src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"

model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids

model(**model_inputs, labels=labels)  # forward pass,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>)
tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)

src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>

model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

model(**model_inputs, labels=labels)  <span class="hljs-comment"># forward pass</span>`}}),Gn=new F({props:{code:`from transformers import MBartForConditionalGeneration, MBart50TokenizerFast

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
# => "The Secretary-General of the United Nations says there is no military solution in Syria.",`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration, MBart50TokenizerFast

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
<span class="hljs-comment"># =&gt; &quot;The Secretary-General of the United Nations says there is no military solution in Syria.&quot;</span>`}}),Rn=new U({}),Wn=new q({props:{name:"class transformers.MBartConfig",anchor:"transformers.MBartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/configuration_mbart.py#L35",parametersDescription:[{anchor:"transformers.MBartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the MBART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartModel">MBartModel</a> or <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.TFMBartModel">TFMBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.MBartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),Xn=new F({props:{code:`from transformers import MBartModel, MBartConfig

# Initializing a MBART facebook/mbart-large-cc25 style configuration
configuration = MBartConfig()

# Initializing a model from the facebook/mbart-large-cc25 style configuration
model = MBartModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartModel, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MBART facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MBartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/mbart-large-cc25 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Hn=new U({}),Vn=new q({props:{name:"class transformers.MBartTokenizer",anchor:"transformers.MBartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenizer_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart.py#L50"}}),Kn=new F({props:{code:`from transformers import MBartTokenizer

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO")
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),Zn=new q({props:{name:"as_target_tokenizer",anchor:"transformers.MBartTokenizer.as_target_tokenizer",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart.py#L339"}}),Yn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart.py#L218",parametersDescription:[{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),aa=new U({}),sa=new q({props:{name:"class transformers.MBartTokenizerFast",anchor:"transformers.MBartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart_fast.py#L61"}}),da=new F({props:{code:`from transformers import MBartTokenizerFast

tokenizer = MBartTokenizerFast.from_pretrained(
    "facebook/mbart-large-en-ro", src_lang="en_XX", tgt_lang="ro_RO"
)
example_english_phrase = " UN Chief Says There Is No Military Solution in Syria"
expected_translation_romanian = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
inputs = tokenizer(example_english_phrase, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(expected_translation_romanian, return_tensors="pt")
inputs["labels"] = labels["input_ids"],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizerFast.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/mbart-large-en-ro&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example_english_phrase = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_translation_romanian = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(expected_translation_romanian, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]`}}),la=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart_fast.py#L163",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ma=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart_fast.py#L192",parametersDescription:[{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fa=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart_fast.py#L251"}}),_a=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBartTokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/tokenization_mbart_fast.py#L266"}}),ga=new U({}),ka=new q({props:{name:"class transformers.MBart50Tokenizer",anchor:"transformers.MBart50Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L48",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),Ta=new F({props:{code:`from transformers import MBart50Tokenizer

tokenizer = MBart50Tokenizer.from_pretrained("facebook/mbart-large-50", src_lang="en_XX", tgt_lang="ro_RO")
src_text = " UN Chief Says There Is No Military Solution in Syria"
tgt_text = "\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria"
model_inputs = tokenizer(src_text, return_tensors="pt")
with tokenizer.as_target_tokenizer():
    labels = tokenizer(tgt_text, return_tensors="pt").input_ids
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Ma=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L287",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ba=new q({props:{name:"convert_tokens_to_string",anchor:"transformers.MBart50Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:": typing.List[str]"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L236"}}),$a=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L257",parametersDescription:[{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MBart50Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L348"}}),Ea=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50Tokenizer.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50.py#L354"}}),Pa=new U({}),Ca=new q({props:{name:"class transformers.MBart50TokenizerFast",anchor:"transformers.MBart50TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"src_lang",val:" = None"},{name:"tgt_lang",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L57",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
# model(**model_inputs, labels=labels) should work,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBart50TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBart50TokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-50&quot;</span>, src_lang=<span class="hljs-string">&quot;en_XX&quot;</span>, tgt_lang=<span class="hljs-string">&quot;ro_RO&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = <span class="hljs-string">&quot; UN Chief Says There Is No Military Solution in Syria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = <span class="hljs-string">&quot;\u015Eeful ONU declar\u0103 c\u0103 nu exist\u0103 o solu\u0163ie militar\u0103 \xEEn Siria&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>    labels = tokenizer(tgt_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model(**model_inputs, labels=labels) should work</span>`}}),Na=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L170",parametersDescription:[{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MBart50TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ra=new q({props:{name:"set_src_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_src_lang_special_tokens",parameters:[{name:"src_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L221"}}),Wa=new q({props:{name:"set_tgt_lang_special_tokens",anchor:"transformers.MBart50TokenizerFast.set_tgt_lang_special_tokens",parameters:[{name:"tgt_lang",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart50/tokenization_mbart50_fast.py#L236"}}),Ua=new U({}),Xa=new q({props:{name:"class transformers.MBartModel",anchor:"transformers.MBartModel",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1123",parametersDescription:[{anchor:"transformers.MBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ja=new q({props:{name:"forward",anchor:"transformers.MBartModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1150",parametersDescription:[{anchor:"transformers.MBartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new at({props:{$$slots:{default:[S2]},$$scope:{ctx:E}}}),Ka=new F({props:{code:`from transformers import MBartTokenizer, MBartModel
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Za=new U({}),Ya=new q({props:{name:"class transformers.MBartForConditionalGeneration",anchor:"transformers.MBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1239",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ns=new q({props:{name:"forward",anchor:"transformers.MBartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1283",parametersDescription:[{anchor:"transformers.MBartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new at({props:{$$slots:{default:[A2]},$$scope:{ctx:E}}}),as=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ss=new F({props:{code:`from transformers import MBartTokenizer, MBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"

input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),rs=new U({}),is=new q({props:{name:"class transformers.MBartForQuestionAnswering",anchor:"transformers.MBartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1538",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ps=new q({props:{name:"forward",anchor:"transformers.MBartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1550",parametersDescription:[{anchor:"transformers.MBartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MBartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new at({props:{$$slots:{default:[I2]},$$scope:{ctx:E}}}),us=new F({props:{code:`from transformers import MBartTokenizer, MBartForQuestionAnswering
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),hs=new U({}),ms=new q({props:{name:"class transformers.MBartForSequenceClassification",anchor:"transformers.MBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1412",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ks=new q({props:{name:"forward",anchor:"transformers.MBartForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1425",parametersDescription:[{anchor:"transformers.MBartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MBartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>input_ids<code>you can choose to directly pass an embedded representation. This is useful if you want more control over how to convert</code>input_ids\` indices into associated vectors than the model&#x2019;s internal embedding lookup
matrix.`,name:"past_key_values"},{anchor:"transformers.MBartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MBartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new at({props:{$$slots:{default:[N2]},$$scope:{ctx:E}}}),bs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vs=new F({props:{code:`from transformers import MBartTokenizer, MBartForSequenceClassification
import torch

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new U({}),Ms=new q({props:{name:"forward",anchor:"transformers.MBartForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_mbart.py#L1700",parametersDescription:[{anchor:"transformers.MBartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new F({props:{code:`from transformers import MBartTokenizer, MBartForCausalLM

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = MBartForCausalLM.from_pretrained("facebook/mbart-large-cc25", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, MBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xs=new U({}),zs=new q({props:{name:"class transformers.TFMBartModel",anchor:"transformers.TFMBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_tf_mbart.py#L1204",parametersDescription:[{anchor:"transformers.TFMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new at({props:{$$slots:{default:[O2]},$$scope:{ctx:E}}}),Fs=new q({props:{name:"call",anchor:"transformers.TFMBartModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_tf_mbart.py#L1216",parametersDescription:[{anchor:"transformers.TFMBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new at({props:{$$slots:{default:[D2]},$$scope:{ctx:E}}}),js=new F({props:{code:`from transformers import MBartTokenizer, TFMBartModel
import tensorflow as tf

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = TFMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Es=new U({}),Ps=new q({props:{name:"class transformers.TFMBartForConditionalGeneration",anchor:"transformers.TFMBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_tf_mbart.py#L1311",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),un=new at({props:{$$slots:{default:[L2]},$$scope:{ctx:E}}}),Is=new q({props:{name:"call",anchor:"transformers.TFMBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_tf_mbart.py#L1344",parametersDescription:[{anchor:"transformers.TFMBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new at({props:{$$slots:{default:[G2]},$$scope:{ctx:E}}}),Ns=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

model = TFMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Os=new F({props:{code:`from transformers import MBartTokenizer, TFMBartForConditionalGeneration

model = MBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="tf")["input_ids"]

logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, TFMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Ds=new U({}),Ls=new q({props:{name:"class transformers.FlaxMBartModel",anchor:"transformers.FlaxMBartModel",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1266",parametersDescription:[{anchor:"transformers.FlaxMBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Qs=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new at({props:{$$slots:{default:[R2]},$$scope:{ctx:E}}}),Js=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartModel

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartModel.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ks=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zs=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ys=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),er=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),tr=new U({}),or=new q({props:{name:"class transformers.FlaxMBartForConditionalGeneration",anchor:"transformers.FlaxMBartForConditionalGeneration",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1353",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),cr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new at({props:{$$slots:{default:[W2]},$$scope:{ctx:E}}}),pr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

ARTICLE_TO_SUMMARIZE = "Meine Freunde sind cool, aber sie essen zu viel Kuchen."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration, MBartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;Meine Freunde sind cool, aber sie essen zu viel Kuchen.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),ur=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

# de_DE is the language symbol id <LID> for German
TXT = "</s> Meine Freunde sind <mask> nett aber sie essen zu viel Kuchen. </s> de_DE"
input_ids = tokenizer([TXT], add_special_tokens=False, return_tensors="np")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># de_DE is the language symbol id &lt;LID&gt; for German</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;&lt;/s&gt; Meine Freunde sind &lt;mask&gt; nett aber sie essen zu viel Kuchen. &lt;/s&gt; de_DE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),hr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),fr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1357",parametersDescription:[{anchor:"transformers.FlaxMBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gr=new U({}),kr=new q({props:{name:"class transformers.FlaxMBartForSequenceClassification",anchor:"transformers.FlaxMBartForSequenceClassification",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1666",parametersDescription:[{anchor:"transformers.FlaxMBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),zr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new at({props:{$$slots:{default:[U2]},$$scope:{ctx:E}}}),qr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForSequenceClassification

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForSequenceClassification.from_pretrained("facebook/mbart-large-cc25")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Br=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$r=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Fr=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Er=new U({}),Pr=new q({props:{name:"class transformers.FlaxMBartForQuestionAnswering",anchor:"transformers.FlaxMBartForQuestionAnswering",parameters:[{name:"config",val:": MBartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1754",parametersDescription:[{anchor:"transformers.FlaxMBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig">MBartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Lr=new q({props:{name:"__call__",anchor:"transformers.FlaxMBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1203",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yn=new at({props:{$$slots:{default:[X2]},$$scope:{ctx:E}}}),Gr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForQuestionAnswering

tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")
model = FlaxMBartForQuestionAnswering.from_pretrained("facebook/mbart-large-cc25")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Rr=new q({props:{name:"encode",anchor:"transformers.FlaxMBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1027",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Ur=new q({props:{name:"decode",anchor:"transformers.FlaxMBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/mbart/modeling_flax_mbart.py#L1090",parametersDescription:[{anchor:"transformers.FlaxMBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer">MBartTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xr=new F({props:{code:`from transformers import MBartTokenizer, FlaxMBartForConditionalGeneration

model = FlaxMBartForConditionalGeneration.from_pretrained("facebook/mbart-large-cc25")
tokenizer = MBartTokenizer.from_pretrained("facebook/mbart-large-cc25")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartTokenizer, FlaxMBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MBartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mbart-large-cc25&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),{c(){h=n("meta"),z=d(),v=n("h1"),M=n("a"),x=n("span"),m(T.$$.fragment),y=d(),B=n("span"),st=r("MBart and MBart-50"),je=d(),j=n("p"),Ue=n("strong"),_e=r("DISCLAIMER:"),rt=r(" If you see something strange, file a "),ge=n("a"),ke=r("Github Issue"),it=r(` and assign
@patrickvonplaten`),Ke=d(),Q=n("h2"),O=n("a"),Xe=n("span"),m(ae.$$.fragment),P=d(),A=n("span"),dt=r("Overview of MBart"),ce=d(),pe=n("p"),lt=r("The MBart model was presented in "),J=n("a"),ct=r("Multilingual Denoising Pre-training for Neural Machine Translation"),pt=r(` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),D=d(),Ee=n("p"),be=r(`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),Ze=d(),se=n("p"),ve=r("This model was contributed by "),ye=n("a"),ut=r("valhalla"),re=r(". The Authors\u2019 code can be found "),Te=n("a"),Me=r("here"),Ye=d(),w=n("h3"),$=n("a"),we=n("span"),m(He.$$.fragment),Ut=d(),K=n("span"),Xt=r("Training of MBart"),kt=d(),X=n("p"),ie=r(`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=n("code"),Ht=r("X [eos, src_lang_code]"),Vt=r(" where "),le=n("code"),Qt=r("X"),Jt=r(` is the source text. The
target text format is `),Ve=n("code"),Kt=r("[tgt_lang_code] X [eos]"),Fh=r(". "),sd=n("code"),jh=r("bos"),Eh=r(" is never used."),fp=d(),bt=n("p"),Ph=r("The regular "),Pn=n("a"),rd=n("strong"),Ch=r("call"),Sh=r("()"),Ah=r(` will encode source text format, and it should be wrapped
inside the context manager `),Kr=n("a"),Ih=r("as_target_tokenizer()"),Nh=r(" to encode target text format."),_p=d(),Zr=n("ul"),id=n("li"),Oh=r("Supervised training"),gp=d(),m(Cn.$$.fragment),kp=d(),Yr=n("ul"),Sn=n("li"),dd=n("p"),Dh=r("Generation"),Lh=d(),Zt=n("p"),Gh=r("While generating the target text set the "),ld=n("code"),Rh=r("decoder_start_token_id"),Wh=r(` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=n("em"),Uh=r("facebook/mbart-large-en-ro"),Xh=r(" model."),bp=d(),m(An.$$.fragment),vp=d(),Yt=n("h2"),Co=n("a"),pd=n("span"),m(In.$$.fragment),Hh=d(),ud=n("span"),Vh=r("Overview of MBart-50"),yp=d(),vt=n("p"),Qh=r("MBart-50 was introduced in the "),Nn=n("a"),Jh=r("Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),Kh=r(` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=n("em"),Zh=r("mbart-large-cc25"),Yh=r(` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Tp=d(),ei=n("p"),em=r("According to the abstract"),Mp=d(),ti=n("p"),md=n("em"),tm=r(`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),wp=d(),eo=n("h3"),So=n("a"),fd=n("span"),m(On.$$.fragment),om=d(),_d=n("span"),nm=r("Training of MBart-50"),xp=d(),et=n("p"),am=r(`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=n("code"),sm=r("[lang_code] X [eos]"),rm=r(", where "),kd=n("code"),im=r("lang_code"),dm=r(` is source
language id for source text and target language id for target text, with `),bd=n("code"),lm=r("X"),cm=r(` being the source or target text
respectively.`),zp=d(),Ao=n("p"),pm=r("MBart-50 has its own tokenizer "),oi=n("a"),um=r("MBart50Tokenizer"),hm=r("."),qp=d(),ni=n("ul"),vd=n("li"),mm=r("Supervised training"),Bp=d(),m(Dn.$$.fragment),$p=d(),ai=n("ul"),Ln=n("li"),yd=n("p"),fm=r("Generation"),_m=d(),xe=n("p"),gm=r("To generate using the mBART-50 multilingual translation models, "),Td=n("code"),km=r("eos_token_id"),bm=r(` is used as the
`),Md=n("code"),vm=r("decoder_start_token_id"),ym=r(` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=n("em"),Tm=r("forced_bos_token_id"),Mm=r(" parameter to the "),xd=n("em"),wm=r("generate"),xm=r(` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),zd=n("em"),zm=r("facebook/mbart-50-large-many-to-many"),qm=r(" checkpoint."),Fp=d(),m(Gn.$$.fragment),jp=d(),to=n("h2"),Io=n("a"),qd=n("span"),m(Rn.$$.fragment),Bm=d(),Bd=n("span"),$m=r("MBartConfig"),Ep=d(),ze=n("div"),m(Wn.$$.fragment),Fm=d(),oo=n("p"),jm=r("This is the configuration class to store the configuration of a "),si=n("a"),Em=r("MBartModel"),Pm=r(`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Un=n("a"),Cm=r("facebook/mbart-large-cc25"),Sm=r(" architecture."),Am=d(),no=n("p"),Im=r("Configuration objects inherit from "),ri=n("a"),Nm=r("PretrainedConfig"),Om=r(` and can be used to control the model outputs. Read the
documentation from `),ii=n("a"),Dm=r("PretrainedConfig"),Lm=r(" for more information."),Gm=d(),$d=n("p"),Rm=r("Example:"),Wm=d(),m(Xn.$$.fragment),Pp=d(),ao=n("h2"),No=n("a"),Fd=n("span"),m(Hn.$$.fragment),Um=d(),jd=n("span"),Xm=r("MBartTokenizer"),Cp=d(),L=n("div"),m(Vn.$$.fragment),Hm=d(),Ed=n("p"),Vm=r("Construct an MBART tokenizer."),Qm=d(),ht=n("p"),Jm=r("Adapted from "),di=n("a"),Km=r("RobertaTokenizer"),Zm=r(" and "),li=n("a"),Ym=r("XLNetTokenizer"),ef=r(`. Based on
`),Qn=n("a"),tf=r("SentencePiece"),of=r("."),nf=d(),Jn=n("p"),af=r("The tokenization method is "),Pd=n("code"),sf=r("<tokens> <eos> <language code>"),rf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),df=d(),Cd=n("p"),lf=r("Examples:"),cf=d(),m(Kn.$$.fragment),pf=d(),Oo=n("div"),m(Zn.$$.fragment),uf=d(),Sd=n("p"),hf=r(`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),mf=d(),tt=n("div"),m(Yn.$$.fragment),ff=d(),ea=n("p"),_f=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=n("code"),gf=r("X"),kf=r(" represents the sequence:"),bf=d(),ta=n("ul"),oa=n("li"),Id=n("code"),vf=r("input_ids"),yf=r(" (for encoder) "),Nd=n("code"),Tf=r("X [eos, src_lang_code]"),Mf=d(),na=n("li"),Od=n("code"),wf=r("decoder_input_ids"),xf=r(": (for decoder) "),Dd=n("code"),zf=r("X [eos, tgt_lang_code]"),qf=d(),Ld=n("p"),Bf=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Sp=d(),so=n("h2"),Do=n("a"),Gd=n("span"),m(aa.$$.fragment),$f=d(),Rd=n("span"),Ff=r("MBartTokenizerFast"),Ap=d(),C=n("div"),m(sa.$$.fragment),jf=d(),ro=n("p"),Ef=r("Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Wd=n("em"),Pf=r("tokenizers"),Cf=r(` library). Based on
`),ra=n("a"),Sf=r("BPE"),Af=r("."),If=d(),yt=n("p"),ci=n("a"),Nf=r("MBartTokenizerFast"),Of=r(" is a subclass of "),pi=n("a"),Df=r("XLMRobertaTokenizerFast"),Lf=r(`. Refer to superclass
`),ui=n("a"),Gf=r("XLMRobertaTokenizerFast"),Rf=r(` for usage examples and documentation concerning the initialization parameters and other
methods.`),Wf=d(),ia=n("p"),Uf=r("The tokenization method is "),Ud=n("code"),Xf=r("<tokens> <eos> <language code>"),Hf=r(" for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),Vf=d(),Xd=n("p"),Qf=r("Examples:"),Jf=d(),m(da.$$.fragment),Kf=d(),Pe=n("div"),m(la.$$.fragment),Zf=d(),Hd=n("p"),Yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),e_=d(),ca=n("p"),t_=r("An MBART sequence has the following format, where "),Vd=n("code"),o_=r("X"),n_=r(" represents the sequence:"),a_=d(),pa=n("ul"),ua=n("li"),Qd=n("code"),s_=r("input_ids"),r_=r(" (for encoder) "),Jd=n("code"),i_=r("X [eos, src_lang_code]"),d_=d(),ha=n("li"),Kd=n("code"),l_=r("decoder_input_ids"),c_=r(": (for decoder) "),Zd=n("code"),p_=r("X [eos, tgt_lang_code]"),u_=d(),Yd=n("p"),h_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),m_=d(),Lo=n("div"),m(ma.$$.fragment),f_=d(),el=n("p"),__=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),g_=d(),Go=n("div"),m(fa.$$.fragment),k_=d(),tl=n("p"),b_=r("Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),v_=d(),Ro=n("div"),m(_a.$$.fragment),y_=d(),ol=n("p"),T_=r("Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),Ip=d(),io=n("h2"),Wo=n("a"),nl=n("span"),m(ga.$$.fragment),M_=d(),al=n("span"),w_=r("MBart50Tokenizer"),Np=d(),S=n("div"),m(ka.$$.fragment),x_=d(),ba=n("p"),z_=r("Construct a MBart50 tokenizer. Based on "),va=n("a"),q_=r("SentencePiece"),B_=r("."),$_=d(),ya=n("p"),F_=r("This tokenizer inherits from "),hi=n("a"),j_=r("PreTrainedTokenizer"),E_=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),P_=d(),sl=n("p"),C_=r("Examples:"),S_=d(),m(Ta.$$.fragment),A_=d(),ot=n("div"),m(Ma.$$.fragment),I_=d(),wa=n("p"),N_=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),rl=n("code"),O_=r("X"),D_=r(" represents the sequence:"),L_=d(),xa=n("ul"),za=n("li"),il=n("code"),G_=r("input_ids"),R_=r(" (for encoder) "),dl=n("code"),W_=r("[src_lang_code] X [eos]"),U_=d(),qa=n("li"),ll=n("code"),X_=r("labels"),H_=r(": (for decoder) "),cl=n("code"),V_=r("[tgt_lang_code] X [eos]"),Q_=d(),pl=n("p"),J_=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),K_=d(),Uo=n("div"),m(Ba.$$.fragment),Z_=d(),ul=n("p"),Y_=r("Converts a sequence of tokens (strings for sub-words) in a single string."),eg=d(),Xo=n("div"),m($a.$$.fragment),tg=d(),Fa=n("p"),og=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=n("code"),ng=r("prepare_for_model"),ag=r(" method."),sg=d(),Ho=n("div"),m(ja.$$.fragment),rg=d(),ml=n("p"),ig=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),dg=d(),Vo=n("div"),m(Ea.$$.fragment),lg=d(),fl=n("p"),cg=r("Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Op=d(),lo=n("h2"),Qo=n("a"),_l=n("span"),m(Pa.$$.fragment),pg=d(),gl=n("span"),ug=r("MBart50TokenizerFast"),Dp=d(),G=n("div"),m(Ca.$$.fragment),hg=d(),co=n("p"),mg=r("Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=n("em"),fg=r("tokenizers"),_g=r(` library). Based on
`),Sa=n("a"),gg=r("BPE"),kg=r("."),bg=d(),Aa=n("p"),vg=r("This tokenizer inherits from "),mi=n("a"),yg=r("PreTrainedTokenizerFast"),Tg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Mg=d(),bl=n("p"),wg=r("Examples:"),xg=d(),m(Ia.$$.fragment),zg=d(),Ce=n("div"),m(Na.$$.fragment),qg=d(),vl=n("p"),Bg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),$g=d(),Oa=n("p"),Fg=r("An MBART-50 sequence has the following format, where "),yl=n("code"),jg=r("X"),Eg=r(" represents the sequence:"),Pg=d(),Da=n("ul"),La=n("li"),Tl=n("code"),Cg=r("input_ids"),Sg=r(" (for encoder) "),Ml=n("code"),Ag=r("[src_lang_code] X [eos]"),Ig=d(),Ga=n("li"),wl=n("code"),Ng=r("labels"),Og=r(": (for decoder) "),xl=n("code"),Dg=r("[tgt_lang_code] X [eos]"),Lg=d(),zl=n("p"),Gg=r(`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Rg=d(),Jo=n("div"),m(Ra.$$.fragment),Wg=d(),ql=n("p"),Ug=r("Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Xg=d(),Ko=n("div"),m(Wa.$$.fragment),Hg=d(),Bl=n("p"),Vg=r("Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Lp=d(),po=n("h2"),Zo=n("a"),$l=n("span"),m(Ua.$$.fragment),Qg=d(),Fl=n("span"),Jg=r("MBartModel"),Gp=d(),Qe=n("div"),m(Xa.$$.fragment),Kg=d(),Ha=n("p"),Zg=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fi=n("a"),Yg=r("PreTrainedModel"),ek=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tk=d(),Va=n("p"),ok=r("This model is also a PyTorch "),Qa=n("a"),nk=r("torch.nn.Module"),ak=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sk=d(),Se=n("div"),m(Ja.$$.fragment),rk=d(),uo=n("p"),ik=r("The "),_i=n("a"),dk=r("MBartModel"),lk=r(" forward method, overrides the "),jl=n("code"),ck=r("__call__"),pk=r(" special method."),uk=d(),m(Yo.$$.fragment),hk=d(),El=n("p"),mk=r("Example:"),fk=d(),m(Ka.$$.fragment),Rp=d(),ho=n("h2"),en=n("a"),Pl=n("span"),m(Za.$$.fragment),_k=d(),Cl=n("span"),gk=r("MBartForConditionalGeneration"),Wp=d(),Je=n("div"),m(Ya.$$.fragment),kk=d(),es=n("p"),bk=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gi=n("a"),vk=r("PreTrainedModel"),yk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=d(),ts=n("p"),Mk=r("This model is also a PyTorch "),os=n("a"),wk=r("torch.nn.Module"),xk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zk=d(),Z=n("div"),m(ns.$$.fragment),qk=d(),mo=n("p"),Bk=r("The "),ki=n("a"),$k=r("MBartForConditionalGeneration"),Fk=r(" forward method, overrides the "),Sl=n("code"),jk=r("__call__"),Ek=r(" special method."),Pk=d(),m(tn.$$.fragment),Ck=d(),Al=n("p"),Sk=r("Summarization example:"),Ak=d(),m(as.$$.fragment),Ik=d(),Il=n("p"),Nk=r("Mask filling example:"),Ok=d(),m(ss.$$.fragment),Up=d(),fo=n("h2"),on=n("a"),Nl=n("span"),m(rs.$$.fragment),Dk=d(),Ol=n("span"),Lk=r("MBartForQuestionAnswering"),Xp=d(),qe=n("div"),m(is.$$.fragment),Gk=d(),_o=n("p"),Rk=r(`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Dl=n("code"),Wk=r("span start logits"),Uk=r(" and "),Ll=n("code"),Xk=r("span end logits"),Hk=r(")."),Vk=d(),ds=n("p"),Qk=r("This model inherits from "),bi=n("a"),Jk=r("PreTrainedModel"),Kk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zk=d(),ls=n("p"),Yk=r("This model is also a PyTorch "),cs=n("a"),eb=r("torch.nn.Module"),tb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ob=d(),Ae=n("div"),m(ps.$$.fragment),nb=d(),go=n("p"),ab=r("The "),vi=n("a"),sb=r("MBartForQuestionAnswering"),rb=r(" forward method, overrides the "),Gl=n("code"),ib=r("__call__"),db=r(" special method."),lb=d(),m(nn.$$.fragment),cb=d(),Rl=n("p"),pb=r("Example:"),ub=d(),m(us.$$.fragment),Hp=d(),ko=n("h2"),an=n("a"),Wl=n("span"),m(hs.$$.fragment),hb=d(),Ul=n("span"),mb=r("MBartForSequenceClassification"),Vp=d(),Be=n("div"),m(ms.$$.fragment),fb=d(),Xl=n("p"),_b=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),gb=d(),fs=n("p"),kb=r("This model inherits from "),yi=n("a"),bb=r("PreTrainedModel"),vb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=d(),_s=n("p"),Tb=r("This model is also a PyTorch "),gs=n("a"),Mb=r("torch.nn.Module"),wb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xb=d(),Y=n("div"),m(ks.$$.fragment),zb=d(),bo=n("p"),qb=r("The "),Ti=n("a"),Bb=r("MBartForSequenceClassification"),$b=r(" forward method, overrides the "),Hl=n("code"),Fb=r("__call__"),jb=r(" special method."),Eb=d(),m(sn.$$.fragment),Pb=d(),Vl=n("p"),Cb=r("Example of single-label classification:"),Sb=d(),m(bs.$$.fragment),Ab=d(),Ql=n("p"),Ib=r("Example of multi-label classification:"),Nb=d(),m(vs.$$.fragment),Qp=d(),vo=n("h2"),rn=n("a"),Jl=n("span"),m(ys.$$.fragment),Ob=d(),Kl=n("span"),Db=r("MBartForCausalLM"),Jp=d(),Ts=n("div"),Tt=n("div"),m(Ms.$$.fragment),Lb=d(),Zl=n("p"),Gb=r("Example:"),Rb=d(),m(ws.$$.fragment),Kp=d(),yo=n("h2"),dn=n("a"),Yl=n("span"),m(xs.$$.fragment),Wb=d(),ec=n("span"),Ub=r("TFMBartModel"),Zp=d(),$e=n("div"),m(zs.$$.fragment),Xb=d(),qs=n("p"),Hb=r(`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=n("a"),Vb=r("TFPreTrainedModel"),Qb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jb=d(),Bs=n("p"),Kb=r("This model is also a "),$s=n("a"),Zb=r("tf.keras.Model"),Yb=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),e1=d(),m(ln.$$.fragment),t1=d(),Ie=n("div"),m(Fs.$$.fragment),o1=d(),To=n("p"),n1=r("The "),wi=n("a"),a1=r("TFMBartModel"),s1=r(" forward method, overrides the "),tc=n("code"),r1=r("__call__"),i1=r(" special method."),d1=d(),m(cn.$$.fragment),l1=d(),oc=n("p"),c1=r("Example:"),p1=d(),m(js.$$.fragment),Yp=d(),Mo=n("h2"),pn=n("a"),nc=n("span"),m(Es.$$.fragment),u1=d(),ac=n("span"),h1=r("TFMBartForConditionalGeneration"),eu=d(),Fe=n("div"),m(Ps.$$.fragment),m1=d(),Cs=n("p"),f1=r(`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=n("a"),_1=r("TFPreTrainedModel"),g1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),k1=d(),Ss=n("p"),b1=r("This model is also a "),As=n("a"),v1=r("tf.keras.Model"),y1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),T1=d(),m(un.$$.fragment),M1=d(),ee=n("div"),m(Is.$$.fragment),w1=d(),wo=n("p"),x1=r("The "),zi=n("a"),z1=r("TFMBartForConditionalGeneration"),q1=r(" forward method, overrides the "),sc=n("code"),B1=r("__call__"),$1=r(" special method."),F1=d(),m(hn.$$.fragment),j1=d(),rc=n("p"),E1=r("Summarization example:"),P1=d(),m(Ns.$$.fragment),C1=d(),ic=n("p"),S1=r("Mask filling example:"),A1=d(),m(Os.$$.fragment),tu=d(),xo=n("h2"),mn=n("a"),dc=n("span"),m(Ds.$$.fragment),I1=d(),lc=n("span"),N1=r("FlaxMBartModel"),ou=d(),R=n("div"),m(Ls.$$.fragment),O1=d(),Gs=n("p"),D1=r(`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=n("a"),L1=r("FlaxPreTrainedModel"),G1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),R1=d(),Rs=n("p"),W1=r(`This model is also a Flax Linen
`),Ws=n("a"),U1=r("flax.nn.Module"),X1=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),H1=d(),cc=n("p"),V1=r("Finally, this model supports inherent JAX features such as:"),Q1=d(),mt=n("ul"),pc=n("li"),Us=n("a"),J1=r("Just-In-Time (JIT) compilation"),K1=d(),uc=n("li"),Xs=n("a"),Z1=r("Automatic Differentiation"),Y1=d(),hc=n("li"),Hs=n("a"),ev=r("Vectorization"),tv=d(),mc=n("li"),Vs=n("a"),ov=r("Parallelization"),nv=d(),Ne=n("div"),m(Qs.$$.fragment),av=d(),zo=n("p"),sv=r("The "),fc=n("code"),rv=r("FlaxMBartPreTrainedModel"),iv=r("forward method, overrides the "),_c=n("code"),dv=r("__call__"),lv=r(" special method."),cv=d(),m(fn.$$.fragment),pv=d(),gc=n("p"),uv=r("Example:"),hv=d(),m(Js.$$.fragment),mv=d(),Mt=n("div"),m(Ks.$$.fragment),fv=d(),kc=n("p"),_v=r("Example:"),gv=d(),m(Zs.$$.fragment),kv=d(),wt=n("div"),m(Ys.$$.fragment),bv=d(),bc=n("p"),vv=r("Example:"),yv=d(),m(er.$$.fragment),nu=d(),qo=n("h2"),_n=n("a"),vc=n("span"),m(tr.$$.fragment),Tv=d(),yc=n("span"),Mv=r("FlaxMBartForConditionalGeneration"),au=d(),W=n("div"),m(or.$$.fragment),wv=d(),nr=n("p"),xv=r(`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=n("a"),zv=r("FlaxPreTrainedModel"),qv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bv=d(),ar=n("p"),$v=r(`This model is also a Flax Linen
`),sr=n("a"),Fv=r("flax.nn.Module"),jv=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ev=d(),Tc=n("p"),Pv=r("Finally, this model supports inherent JAX features such as:"),Cv=d(),ft=n("ul"),Mc=n("li"),rr=n("a"),Sv=r("Just-In-Time (JIT) compilation"),Av=d(),wc=n("li"),ir=n("a"),Iv=r("Automatic Differentiation"),Nv=d(),xc=n("li"),dr=n("a"),Ov=r("Vectorization"),Dv=d(),zc=n("li"),lr=n("a"),Lv=r("Parallelization"),Gv=d(),te=n("div"),m(cr.$$.fragment),Rv=d(),Bo=n("p"),Wv=r("The "),qc=n("code"),Uv=r("FlaxMBartPreTrainedModel"),Xv=r("forward method, overrides the "),Bc=n("code"),Hv=r("__call__"),Vv=r(" special method."),Qv=d(),m(gn.$$.fragment),Jv=d(),$c=n("p"),Kv=r("Summarization example:"),Zv=d(),m(pr.$$.fragment),Yv=d(),Fc=n("p"),ey=r("Mask filling example:"),ty=d(),m(ur.$$.fragment),oy=d(),xt=n("div"),m(hr.$$.fragment),ny=d(),jc=n("p"),ay=r("Example:"),sy=d(),m(mr.$$.fragment),ry=d(),zt=n("div"),m(fr.$$.fragment),iy=d(),Ec=n("p"),dy=r("Example:"),ly=d(),m(_r.$$.fragment),su=d(),$o=n("h2"),kn=n("a"),Pc=n("span"),m(gr.$$.fragment),cy=d(),Cc=n("span"),py=r("FlaxMBartForSequenceClassification"),ru=d(),I=n("div"),m(kr.$$.fragment),uy=d(),Sc=n("p"),hy=r(`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),my=d(),br=n("p"),fy=r("This model inherits from "),$i=n("a"),_y=r("FlaxPreTrainedModel"),gy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=d(),vr=n("p"),by=r(`This model is also a Flax Linen
`),yr=n("a"),vy=r("flax.nn.Module"),yy=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ty=d(),Ac=n("p"),My=r("Finally, this model supports inherent JAX features such as:"),wy=d(),_t=n("ul"),Ic=n("li"),Tr=n("a"),xy=r("Just-In-Time (JIT) compilation"),zy=d(),Nc=n("li"),Mr=n("a"),qy=r("Automatic Differentiation"),By=d(),Oc=n("li"),wr=n("a"),$y=r("Vectorization"),Fy=d(),Dc=n("li"),xr=n("a"),jy=r("Parallelization"),Ey=d(),Oe=n("div"),m(zr.$$.fragment),Py=d(),Fo=n("p"),Cy=r("The "),Lc=n("code"),Sy=r("FlaxMBartPreTrainedModel"),Ay=r("forward method, overrides the "),Gc=n("code"),Iy=r("__call__"),Ny=r(" special method."),Oy=d(),m(bn.$$.fragment),Dy=d(),Rc=n("p"),Ly=r("Example:"),Gy=d(),m(qr.$$.fragment),Ry=d(),qt=n("div"),m(Br.$$.fragment),Wy=d(),Wc=n("p"),Uy=r("Example:"),Xy=d(),m($r.$$.fragment),Hy=d(),Bt=n("div"),m(Fr.$$.fragment),Vy=d(),Uc=n("p"),Qy=r("Example:"),Jy=d(),m(jr.$$.fragment),iu=d(),jo=n("h2"),vn=n("a"),Xc=n("span"),m(Er.$$.fragment),Ky=d(),Hc=n("span"),Zy=r("FlaxMBartForQuestionAnswering"),du=d(),N=n("div"),m(Pr.$$.fragment),Yy=d(),Eo=n("p"),eT=r(`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=n("code"),tT=r("span start logits"),oT=r(" and "),Qc=n("code"),nT=r("span end logits"),aT=r(")."),sT=d(),Cr=n("p"),rT=r("This model inherits from "),Fi=n("a"),iT=r("FlaxPreTrainedModel"),dT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lT=d(),Sr=n("p"),cT=r(`This model is also a Flax Linen
`),Ar=n("a"),pT=r("flax.nn.Module"),uT=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),hT=d(),Jc=n("p"),mT=r("Finally, this model supports inherent JAX features such as:"),fT=d(),gt=n("ul"),Kc=n("li"),Ir=n("a"),_T=r("Just-In-Time (JIT) compilation"),gT=d(),Zc=n("li"),Nr=n("a"),kT=r("Automatic Differentiation"),bT=d(),Yc=n("li"),Or=n("a"),vT=r("Vectorization"),yT=d(),ep=n("li"),Dr=n("a"),TT=r("Parallelization"),MT=d(),De=n("div"),m(Lr.$$.fragment),wT=d(),Po=n("p"),xT=r("The "),tp=n("code"),zT=r("FlaxMBartPreTrainedModel"),qT=r("forward method, overrides the "),op=n("code"),BT=r("__call__"),$T=r(" special method."),FT=d(),m(yn.$$.fragment),jT=d(),np=n("p"),ET=r("Example:"),PT=d(),m(Gr.$$.fragment),CT=d(),$t=n("div"),m(Rr.$$.fragment),ST=d(),ap=n("p"),AT=r("Example:"),IT=d(),m(Wr.$$.fragment),NT=d(),Ft=n("div"),m(Ur.$$.fragment),OT=d(),sp=n("p"),DT=r("Example:"),LT=d(),m(Xr.$$.fragment),this.h()},l(o){const p=C2('[data-svelte="svelte-1phssyn"]',document.head);h=a(p,"META",{name:!0,content:!0}),p.forEach(t),z=l(o),v=a(o,"H1",{class:!0});var Hr=s(v);M=a(Hr,"A",{id:!0,class:!0,href:!0});var rp=s(M);x=a(rp,"SPAN",{});var ip=s(x);f(T.$$.fragment,ip),ip.forEach(t),rp.forEach(t),y=l(Hr),B=a(Hr,"SPAN",{});var dp=s(B);st=i(dp,"MBart and MBart-50"),dp.forEach(t),Hr.forEach(t),je=l(o),j=a(o,"P",{});var Tn=s(j);Ue=a(Tn,"STRONG",{});var lp=s(Ue);_e=i(lp,"DISCLAIMER:"),lp.forEach(t),rt=i(Tn," If you see something strange, file a "),ge=a(Tn,"A",{href:!0,rel:!0});var cp=s(ge);ke=i(cp,"Github Issue"),cp.forEach(t),it=i(Tn,` and assign
@patrickvonplaten`),Tn.forEach(t),Ke=l(o),Q=a(o,"H2",{class:!0});var Vr=s(Q);O=a(Vr,"A",{id:!0,class:!0,href:!0});var pp=s(O);Xe=a(pp,"SPAN",{});var up=s(Xe);f(ae.$$.fragment,up),up.forEach(t),pp.forEach(t),P=l(Vr),A=a(Vr,"SPAN",{});var hp=s(A);dt=i(hp,"Overview of MBart"),hp.forEach(t),Vr.forEach(t),ce=l(o),pe=a(o,"P",{});var Qr=s(pe);lt=i(Qr,"The MBart model was presented in "),J=a(Qr,"A",{href:!0,rel:!0});var RT=s(J);ct=i(RT,"Multilingual Denoising Pre-training for Neural Machine Translation"),RT.forEach(t),pt=i(Qr,` by Yinhan Liu, Jiatao Gu, Naman Goyal, Xian Li, Sergey Edunov Marjan
Ghazvininejad, Mike Lewis, Luke Zettlemoyer.`),Qr.forEach(t),D=l(o),Ee=a(o,"P",{});var WT=s(Ee);be=i(WT,`According to the abstract, MBART is a sequence-to-sequence denoising auto-encoder pretrained on large-scale monolingual
corpora in many languages using the BART objective. mBART is one of the first methods for pretraining a complete
sequence-to-sequence model by denoising full texts in multiple languages, while previous approaches have focused only
on the encoder, decoder, or reconstructing parts of the text.`),WT.forEach(t),Ze=l(o),se=a(o,"P",{});var mp=s(se);ve=i(mp,"This model was contributed by "),ye=a(mp,"A",{href:!0,rel:!0});var UT=s(ye);ut=i(UT,"valhalla"),UT.forEach(t),re=i(mp,". The Authors\u2019 code can be found "),Te=a(mp,"A",{href:!0,rel:!0});var XT=s(Te);Me=i(XT,"here"),XT.forEach(t),mp.forEach(t),Ye=l(o),w=a(o,"H3",{class:!0});var cu=s(w);$=a(cu,"A",{id:!0,class:!0,href:!0});var HT=s($);we=a(HT,"SPAN",{});var VT=s(we);f(He.$$.fragment,VT),VT.forEach(t),HT.forEach(t),Ut=l(cu),K=a(cu,"SPAN",{});var QT=s(K);Xt=i(QT,"Training of MBart"),QT.forEach(t),cu.forEach(t),kt=l(o),X=a(o,"P",{});var jt=s(X);ie=i(jt,`MBart is a multilingual encoder-decoder (sequence-to-sequence) model primarily intended for translation task. As the
model is multilingual it expects the sequences in a different format. A special language id token is added in both the
source and target text. The source text format is `),de=a(jt,"CODE",{});var JT=s(de);Ht=i(JT,"X [eos, src_lang_code]"),JT.forEach(t),Vt=i(jt," where "),le=a(jt,"CODE",{});var KT=s(le);Qt=i(KT,"X"),KT.forEach(t),Jt=i(jt,` is the source text. The
target text format is `),Ve=a(jt,"CODE",{});var ZT=s(Ve);Kt=i(ZT,"[tgt_lang_code] X [eos]"),ZT.forEach(t),Fh=i(jt,". "),sd=a(jt,"CODE",{});var YT=s(sd);jh=i(YT,"bos"),YT.forEach(t),Eh=i(jt," is never used."),jt.forEach(t),fp=l(o),bt=a(o,"P",{});var ji=s(bt);Ph=i(ji,"The regular "),Pn=a(ji,"A",{href:!0});var GT=s(Pn);rd=a(GT,"STRONG",{});var eM=s(rd);Ch=i(eM,"call"),eM.forEach(t),Sh=i(GT,"()"),GT.forEach(t),Ah=i(ji,` will encode source text format, and it should be wrapped
inside the context manager `),Kr=a(ji,"A",{href:!0});var tM=s(Kr);Ih=i(tM,"as_target_tokenizer()"),tM.forEach(t),Nh=i(ji," to encode target text format."),ji.forEach(t),_p=l(o),Zr=a(o,"UL",{});var oM=s(Zr);id=a(oM,"LI",{});var nM=s(id);Oh=i(nM,"Supervised training"),nM.forEach(t),oM.forEach(t),gp=l(o),f(Cn.$$.fragment,o),kp=l(o),Yr=a(o,"UL",{});var aM=s(Yr);Sn=a(aM,"LI",{});var pu=s(Sn);dd=a(pu,"P",{});var sM=s(dd);Dh=i(sM,"Generation"),sM.forEach(t),Lh=l(pu),Zt=a(pu,"P",{});var Ei=s(Zt);Gh=i(Ei,"While generating the target text set the "),ld=a(Ei,"CODE",{});var rM=s(ld);Rh=i(rM,"decoder_start_token_id"),rM.forEach(t),Wh=i(Ei,` to the target language id. The following
example shows how to translate English to Romanian using the `),cd=a(Ei,"EM",{});var iM=s(cd);Uh=i(iM,"facebook/mbart-large-en-ro"),iM.forEach(t),Xh=i(Ei," model."),Ei.forEach(t),pu.forEach(t),aM.forEach(t),bp=l(o),f(An.$$.fragment,o),vp=l(o),Yt=a(o,"H2",{class:!0});var uu=s(Yt);Co=a(uu,"A",{id:!0,class:!0,href:!0});var dM=s(Co);pd=a(dM,"SPAN",{});var lM=s(pd);f(In.$$.fragment,lM),lM.forEach(t),dM.forEach(t),Hh=l(uu),ud=a(uu,"SPAN",{});var cM=s(ud);Vh=i(cM,"Overview of MBart-50"),cM.forEach(t),uu.forEach(t),yp=l(o),vt=a(o,"P",{});var Pi=s(vt);Qh=i(Pi,"MBart-50 was introduced in the "),Nn=a(Pi,"A",{href:!0,rel:!0});var pM=s(Nn);Jh=i(pM,"Multilingual Translation with Extensible Multilingual Pretraining and Finetuning"),pM.forEach(t),Kh=i(Pi,` paper by Yuqing Tang, Chau Tran, Xian Li, Peng-Jen Chen, Naman Goyal, Vishrav
Chaudhary, Jiatao Gu, Angela Fan. MBart-50 is created using the original `),hd=a(Pi,"EM",{});var uM=s(hd);Zh=i(uM,"mbart-large-cc25"),uM.forEach(t),Yh=i(Pi,` checkpoint by extendeding
its embedding layers with randomly initialized vectors for an extra set of 25 language tokens and then pretrained on 50
languages.`),Pi.forEach(t),Tp=l(o),ei=a(o,"P",{});var hM=s(ei);em=i(hM,"According to the abstract"),hM.forEach(t),Mp=l(o),ti=a(o,"P",{});var mM=s(ti);md=a(mM,"EM",{});var fM=s(md);tm=i(fM,`Multilingual translation models can be created through multilingual finetuning. Instead of finetuning on one
direction, a pretrained model is finetuned on many directions at the same time. It demonstrates that pretrained models
can be extended to incorporate additional languages without loss of performance. Multilingual finetuning improves on
average 1 BLEU over the strongest baselines (being either multilingual from scratch or bilingual finetuning) while
improving 9.3 BLEU on average over bilingual baselines from scratch.`),fM.forEach(t),mM.forEach(t),wp=l(o),eo=a(o,"H3",{class:!0});var hu=s(eo);So=a(hu,"A",{id:!0,class:!0,href:!0});var _M=s(So);fd=a(_M,"SPAN",{});var gM=s(fd);f(On.$$.fragment,gM),gM.forEach(t),_M.forEach(t),om=l(hu),_d=a(hu,"SPAN",{});var kM=s(_d);nm=i(kM,"Training of MBart-50"),kM.forEach(t),hu.forEach(t),xp=l(o),et=a(o,"P",{});var Mn=s(et);am=i(Mn,`The text format for MBart-50 is slightly different from mBART. For MBart-50 the language id token is used as a prefix
for both source and target text i.e the text format is `),gd=a(Mn,"CODE",{});var bM=s(gd);sm=i(bM,"[lang_code] X [eos]"),bM.forEach(t),rm=i(Mn,", where "),kd=a(Mn,"CODE",{});var vM=s(kd);im=i(vM,"lang_code"),vM.forEach(t),dm=i(Mn,` is source
language id for source text and target language id for target text, with `),bd=a(Mn,"CODE",{});var yM=s(bd);lm=i(yM,"X"),yM.forEach(t),cm=i(Mn,` being the source or target text
respectively.`),Mn.forEach(t),zp=l(o),Ao=a(o,"P",{});var mu=s(Ao);pm=i(mu,"MBart-50 has its own tokenizer "),oi=a(mu,"A",{href:!0});var TM=s(oi);um=i(TM,"MBart50Tokenizer"),TM.forEach(t),hm=i(mu,"."),mu.forEach(t),qp=l(o),ni=a(o,"UL",{});var MM=s(ni);vd=a(MM,"LI",{});var wM=s(vd);mm=i(wM,"Supervised training"),wM.forEach(t),MM.forEach(t),Bp=l(o),f(Dn.$$.fragment,o),$p=l(o),ai=a(o,"UL",{});var xM=s(ai);Ln=a(xM,"LI",{});var fu=s(Ln);yd=a(fu,"P",{});var zM=s(yd);fm=i(zM,"Generation"),zM.forEach(t),_m=l(fu),xe=a(fu,"P",{});var nt=s(xe);gm=i(nt,"To generate using the mBART-50 multilingual translation models, "),Td=a(nt,"CODE",{});var qM=s(Td);km=i(qM,"eos_token_id"),qM.forEach(t),bm=i(nt,` is used as the
`),Md=a(nt,"CODE",{});var BM=s(Md);vm=i(BM,"decoder_start_token_id"),BM.forEach(t),ym=i(nt,` and the target language id is forced as the first generated token. To force the
target language id as the first generated token, pass the `),wd=a(nt,"EM",{});var $M=s(wd);Tm=i($M,"forced_bos_token_id"),$M.forEach(t),Mm=i(nt," parameter to the "),xd=a(nt,"EM",{});var FM=s(xd);wm=i(FM,"generate"),FM.forEach(t),xm=i(nt,` method.
The following example shows how to translate between Hindi to French and Arabic to English using the
`),zd=a(nt,"EM",{});var jM=s(zd);zm=i(jM,"facebook/mbart-50-large-many-to-many"),jM.forEach(t),qm=i(nt," checkpoint."),nt.forEach(t),fu.forEach(t),xM.forEach(t),Fp=l(o),f(Gn.$$.fragment,o),jp=l(o),to=a(o,"H2",{class:!0});var _u=s(to);Io=a(_u,"A",{id:!0,class:!0,href:!0});var EM=s(Io);qd=a(EM,"SPAN",{});var PM=s(qd);f(Rn.$$.fragment,PM),PM.forEach(t),EM.forEach(t),Bm=l(_u),Bd=a(_u,"SPAN",{});var CM=s(Bd);$m=i(CM,"MBartConfig"),CM.forEach(t),_u.forEach(t),Ep=l(o),ze=a(o,"DIV",{class:!0});var Et=s(ze);f(Wn.$$.fragment,Et),Fm=l(Et),oo=a(Et,"P",{});var Ci=s(oo);jm=i(Ci,"This is the configuration class to store the configuration of a "),si=a(Ci,"A",{href:!0});var SM=s(si);Em=i(SM,"MBartModel"),SM.forEach(t),Pm=i(Ci,`. It is used to instantiate an MBART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MBART
`),Un=a(Ci,"A",{href:!0,rel:!0});var AM=s(Un);Cm=i(AM,"facebook/mbart-large-cc25"),AM.forEach(t),Sm=i(Ci," architecture."),Ci.forEach(t),Am=l(Et),no=a(Et,"P",{});var Si=s(no);Im=i(Si,"Configuration objects inherit from "),ri=a(Si,"A",{href:!0});var IM=s(ri);Nm=i(IM,"PretrainedConfig"),IM.forEach(t),Om=i(Si,` and can be used to control the model outputs. Read the
documentation from `),ii=a(Si,"A",{href:!0});var NM=s(ii);Dm=i(NM,"PretrainedConfig"),NM.forEach(t),Lm=i(Si," for more information."),Si.forEach(t),Gm=l(Et),$d=a(Et,"P",{});var OM=s($d);Rm=i(OM,"Example:"),OM.forEach(t),Wm=l(Et),f(Xn.$$.fragment,Et),Et.forEach(t),Pp=l(o),ao=a(o,"H2",{class:!0});var gu=s(ao);No=a(gu,"A",{id:!0,class:!0,href:!0});var DM=s(No);Fd=a(DM,"SPAN",{});var LM=s(Fd);f(Hn.$$.fragment,LM),LM.forEach(t),DM.forEach(t),Um=l(gu),jd=a(gu,"SPAN",{});var GM=s(jd);Xm=i(GM,"MBartTokenizer"),GM.forEach(t),gu.forEach(t),Cp=l(o),L=a(o,"DIV",{class:!0});var ue=s(L);f(Vn.$$.fragment,ue),Hm=l(ue),Ed=a(ue,"P",{});var RM=s(Ed);Vm=i(RM,"Construct an MBART tokenizer."),RM.forEach(t),Qm=l(ue),ht=a(ue,"P",{});var wn=s(ht);Jm=i(wn,"Adapted from "),di=a(wn,"A",{href:!0});var WM=s(di);Km=i(WM,"RobertaTokenizer"),WM.forEach(t),Zm=i(wn," and "),li=a(wn,"A",{href:!0});var UM=s(li);Ym=i(UM,"XLNetTokenizer"),UM.forEach(t),ef=i(wn,`. Based on
`),Qn=a(wn,"A",{href:!0,rel:!0});var XM=s(Qn);tf=i(XM,"SentencePiece"),XM.forEach(t),of=i(wn,"."),wn.forEach(t),nf=l(ue),Jn=a(ue,"P",{});var ku=s(Jn);af=i(ku,"The tokenization method is "),Pd=a(ku,"CODE",{});var HM=s(Pd);sf=i(HM,"<tokens> <eos> <language code>"),HM.forEach(t),rf=i(ku," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),ku.forEach(t),df=l(ue),Cd=a(ue,"P",{});var VM=s(Cd);lf=i(VM,"Examples:"),VM.forEach(t),cf=l(ue),f(Kn.$$.fragment,ue),pf=l(ue),Oo=a(ue,"DIV",{class:!0});var bu=s(Oo);f(Zn.$$.fragment,bu),uf=l(bu),Sd=a(bu,"P",{});var QM=s(Sd);hf=i(QM,`Temporarily sets the tokenizer for encoding the targets. Useful for tokenizer associated to
sequence-to-sequence models that need a slightly different processing for the labels.`),QM.forEach(t),bu.forEach(t),mf=l(ue),tt=a(ue,"DIV",{class:!0});var xn=s(tt);f(Yn.$$.fragment,xn),ff=l(xn),ea=a(xn,"P",{});var vu=s(ea);_f=i(vu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART sequence has the following format, where `),Ad=a(vu,"CODE",{});var JM=s(Ad);gf=i(JM,"X"),JM.forEach(t),kf=i(vu," represents the sequence:"),vu.forEach(t),bf=l(xn),ta=a(xn,"UL",{});var yu=s(ta);oa=a(yu,"LI",{});var Tu=s(oa);Id=a(Tu,"CODE",{});var KM=s(Id);vf=i(KM,"input_ids"),KM.forEach(t),yf=i(Tu," (for encoder) "),Nd=a(Tu,"CODE",{});var ZM=s(Nd);Tf=i(ZM,"X [eos, src_lang_code]"),ZM.forEach(t),Tu.forEach(t),Mf=l(yu),na=a(yu,"LI",{});var Mu=s(na);Od=a(Mu,"CODE",{});var YM=s(Od);wf=i(YM,"decoder_input_ids"),YM.forEach(t),xf=i(Mu,": (for decoder) "),Dd=a(Mu,"CODE",{});var ew=s(Dd);zf=i(ew,"X [eos, tgt_lang_code]"),ew.forEach(t),Mu.forEach(t),yu.forEach(t),qf=l(xn),Ld=a(xn,"P",{});var tw=s(Ld);Bf=i(tw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),tw.forEach(t),xn.forEach(t),ue.forEach(t),Sp=l(o),so=a(o,"H2",{class:!0});var wu=s(so);Do=a(wu,"A",{id:!0,class:!0,href:!0});var ow=s(Do);Gd=a(ow,"SPAN",{});var nw=s(Gd);f(aa.$$.fragment,nw),nw.forEach(t),ow.forEach(t),$f=l(wu),Rd=a(wu,"SPAN",{});var aw=s(Rd);Ff=i(aw,"MBartTokenizerFast"),aw.forEach(t),wu.forEach(t),Ap=l(o),C=a(o,"DIV",{class:!0});var H=s(C);f(sa.$$.fragment,H),jf=l(H),ro=a(H,"P",{});var Ai=s(ro);Ef=i(Ai,"Construct a \u201Cfast\u201D MBART tokenizer (backed by HuggingFace\u2019s "),Wd=a(Ai,"EM",{});var sw=s(Wd);Pf=i(sw,"tokenizers"),sw.forEach(t),Cf=i(Ai,` library). Based on
`),ra=a(Ai,"A",{href:!0,rel:!0});var rw=s(ra);Sf=i(rw,"BPE"),rw.forEach(t),Af=i(Ai,"."),Ai.forEach(t),If=l(H),yt=a(H,"P",{});var Jr=s(yt);ci=a(Jr,"A",{href:!0});var iw=s(ci);Nf=i(iw,"MBartTokenizerFast"),iw.forEach(t),Of=i(Jr," is a subclass of "),pi=a(Jr,"A",{href:!0});var dw=s(pi);Df=i(dw,"XLMRobertaTokenizerFast"),dw.forEach(t),Lf=i(Jr,`. Refer to superclass
`),ui=a(Jr,"A",{href:!0});var lw=s(ui);Gf=i(lw,"XLMRobertaTokenizerFast"),lw.forEach(t),Rf=i(Jr,` for usage examples and documentation concerning the initialization parameters and other
methods.`),Jr.forEach(t),Wf=l(H),ia=a(H,"P",{});var xu=s(ia);Uf=i(xu,"The tokenization method is "),Ud=a(xu,"CODE",{});var cw=s(Ud);Xf=i(cw,"<tokens> <eos> <language code>"),cw.forEach(t),Hf=i(xu," for source language documents, and \u201C<language code>\n<tokens> <eos>``` for target language documents."),xu.forEach(t),Vf=l(H),Xd=a(H,"P",{});var pw=s(Xd);Qf=i(pw,"Examples:"),pw.forEach(t),Jf=l(H),f(da.$$.fragment,H),Kf=l(H),Pe=a(H,"DIV",{class:!0});var Pt=s(Pe);f(la.$$.fragment,Pt),Zf=l(Pt),Hd=a(Pt,"P",{});var uw=s(Hd);Yf=i(uw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),uw.forEach(t),e_=l(Pt),ca=a(Pt,"P",{});var zu=s(ca);t_=i(zu,"An MBART sequence has the following format, where "),Vd=a(zu,"CODE",{});var hw=s(Vd);o_=i(hw,"X"),hw.forEach(t),n_=i(zu," represents the sequence:"),zu.forEach(t),a_=l(Pt),pa=a(Pt,"UL",{});var qu=s(pa);ua=a(qu,"LI",{});var Bu=s(ua);Qd=a(Bu,"CODE",{});var mw=s(Qd);s_=i(mw,"input_ids"),mw.forEach(t),r_=i(Bu," (for encoder) "),Jd=a(Bu,"CODE",{});var fw=s(Jd);i_=i(fw,"X [eos, src_lang_code]"),fw.forEach(t),Bu.forEach(t),d_=l(qu),ha=a(qu,"LI",{});var $u=s(ha);Kd=a($u,"CODE",{});var _w=s(Kd);l_=i(_w,"decoder_input_ids"),_w.forEach(t),c_=i($u,": (for decoder) "),Zd=a($u,"CODE",{});var gw=s(Zd);p_=i(gw,"X [eos, tgt_lang_code]"),gw.forEach(t),$u.forEach(t),qu.forEach(t),u_=l(Pt),Yd=a(Pt,"P",{});var kw=s(Yd);h_=i(kw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),kw.forEach(t),Pt.forEach(t),m_=l(H),Lo=a(H,"DIV",{class:!0});var Fu=s(Lo);f(ma.$$.fragment,Fu),f_=l(Fu),el=a(Fu,"P",{});var bw=s(el);__=i(bw,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. mBART does not
make use of token type ids, therefore a list of zeros is returned.`),bw.forEach(t),Fu.forEach(t),g_=l(H),Go=a(H,"DIV",{class:!0});var ju=s(Go);f(fa.$$.fragment,ju),k_=l(ju),tl=a(ju,"P",{});var vw=s(tl);b_=i(vw,"Reset the special tokens to the source lang setting. No prefix and suffix=[eos, src_lang_code]."),vw.forEach(t),ju.forEach(t),v_=l(H),Ro=a(H,"DIV",{class:!0});var Eu=s(Ro);f(_a.$$.fragment,Eu),y_=l(Eu),ol=a(Eu,"P",{});var yw=s(ol);T_=i(yw,"Reset the special tokens to the target language setting. No prefix and suffix=[eos, tgt_lang_code]."),yw.forEach(t),Eu.forEach(t),H.forEach(t),Ip=l(o),io=a(o,"H2",{class:!0});var Pu=s(io);Wo=a(Pu,"A",{id:!0,class:!0,href:!0});var Tw=s(Wo);nl=a(Tw,"SPAN",{});var Mw=s(nl);f(ga.$$.fragment,Mw),Mw.forEach(t),Tw.forEach(t),M_=l(Pu),al=a(Pu,"SPAN",{});var ww=s(al);w_=i(ww,"MBart50Tokenizer"),ww.forEach(t),Pu.forEach(t),Np=l(o),S=a(o,"DIV",{class:!0});var V=s(S);f(ka.$$.fragment,V),x_=l(V),ba=a(V,"P",{});var Cu=s(ba);z_=i(Cu,"Construct a MBart50 tokenizer. Based on "),va=a(Cu,"A",{href:!0,rel:!0});var xw=s(va);q_=i(xw,"SentencePiece"),xw.forEach(t),B_=i(Cu,"."),Cu.forEach(t),$_=l(V),ya=a(V,"P",{});var Su=s(ya);F_=i(Su,"This tokenizer inherits from "),hi=a(Su,"A",{href:!0});var zw=s(hi);j_=i(zw,"PreTrainedTokenizer"),zw.forEach(t),E_=i(Su,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Su.forEach(t),P_=l(V),sl=a(V,"P",{});var qw=s(sl);C_=i(qw,"Examples:"),qw.forEach(t),S_=l(V),f(Ta.$$.fragment,V),A_=l(V),ot=a(V,"DIV",{class:!0});var zn=s(ot);f(Ma.$$.fragment,zn),I_=l(zn),wa=a(zn,"P",{});var Au=s(wa);N_=i(Au,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An MBART-50 sequence has the following format, where `),rl=a(Au,"CODE",{});var Bw=s(rl);O_=i(Bw,"X"),Bw.forEach(t),D_=i(Au," represents the sequence:"),Au.forEach(t),L_=l(zn),xa=a(zn,"UL",{});var Iu=s(xa);za=a(Iu,"LI",{});var Nu=s(za);il=a(Nu,"CODE",{});var $w=s(il);G_=i($w,"input_ids"),$w.forEach(t),R_=i(Nu," (for encoder) "),dl=a(Nu,"CODE",{});var Fw=s(dl);W_=i(Fw,"[src_lang_code] X [eos]"),Fw.forEach(t),Nu.forEach(t),U_=l(Iu),qa=a(Iu,"LI",{});var Ou=s(qa);ll=a(Ou,"CODE",{});var jw=s(ll);X_=i(jw,"labels"),jw.forEach(t),H_=i(Ou,": (for decoder) "),cl=a(Ou,"CODE",{});var Ew=s(cl);V_=i(Ew,"[tgt_lang_code] X [eos]"),Ew.forEach(t),Ou.forEach(t),Iu.forEach(t),Q_=l(zn),pl=a(zn,"P",{});var Pw=s(pl);J_=i(Pw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Pw.forEach(t),zn.forEach(t),K_=l(V),Uo=a(V,"DIV",{class:!0});var Du=s(Uo);f(Ba.$$.fragment,Du),Z_=l(Du),ul=a(Du,"P",{});var Cw=s(ul);Y_=i(Cw,"Converts a sequence of tokens (strings for sub-words) in a single string."),Cw.forEach(t),Du.forEach(t),eg=l(V),Xo=a(V,"DIV",{class:!0});var Lu=s(Xo);f($a.$$.fragment,Lu),tg=l(Lu),Fa=a(Lu,"P",{});var Gu=s(Fa);og=i(Gu,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=a(Gu,"CODE",{});var Sw=s(hl);ng=i(Sw,"prepare_for_model"),Sw.forEach(t),ag=i(Gu," method."),Gu.forEach(t),Lu.forEach(t),sg=l(V),Ho=a(V,"DIV",{class:!0});var Ru=s(Ho);f(ja.$$.fragment,Ru),rg=l(Ru),ml=a(Ru,"P",{});var Aw=s(ml);ig=i(Aw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Aw.forEach(t),Ru.forEach(t),dg=l(V),Vo=a(V,"DIV",{class:!0});var Wu=s(Vo);f(Ea.$$.fragment,Wu),lg=l(Wu),fl=a(Wu,"P",{});var Iw=s(fl);cg=i(Iw,"Reset the special tokens to the target language setting. prefix=[tgt_lang_code] and suffix=[eos]."),Iw.forEach(t),Wu.forEach(t),V.forEach(t),Op=l(o),lo=a(o,"H2",{class:!0});var Uu=s(lo);Qo=a(Uu,"A",{id:!0,class:!0,href:!0});var Nw=s(Qo);_l=a(Nw,"SPAN",{});var Ow=s(_l);f(Pa.$$.fragment,Ow),Ow.forEach(t),Nw.forEach(t),pg=l(Uu),gl=a(Uu,"SPAN",{});var Dw=s(gl);ug=i(Dw,"MBart50TokenizerFast"),Dw.forEach(t),Uu.forEach(t),Dp=l(o),G=a(o,"DIV",{class:!0});var he=s(G);f(Ca.$$.fragment,he),hg=l(he),co=a(he,"P",{});var Ii=s(co);mg=i(Ii,"Construct a \u201Cfast\u201D MBART tokenizer for mBART-50 (backed by HuggingFace\u2019s "),kl=a(Ii,"EM",{});var Lw=s(kl);fg=i(Lw,"tokenizers"),Lw.forEach(t),_g=i(Ii,` library). Based on
`),Sa=a(Ii,"A",{href:!0,rel:!0});var Gw=s(Sa);gg=i(Gw,"BPE"),Gw.forEach(t),kg=i(Ii,"."),Ii.forEach(t),bg=l(he),Aa=a(he,"P",{});var Xu=s(Aa);vg=i(Xu,"This tokenizer inherits from "),mi=a(Xu,"A",{href:!0});var Rw=s(mi);yg=i(Rw,"PreTrainedTokenizerFast"),Rw.forEach(t),Tg=i(Xu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xu.forEach(t),Mg=l(he),bl=a(he,"P",{});var Ww=s(bl);wg=i(Ww,"Examples:"),Ww.forEach(t),xg=l(he),f(Ia.$$.fragment,he),zg=l(he),Ce=a(he,"DIV",{class:!0});var Ct=s(Ce);f(Na.$$.fragment,Ct),qg=l(Ct),vl=a(Ct,"P",{});var Uw=s(vl);Bg=i(Uw,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. The special tokens depend on calling set_lang.`),Uw.forEach(t),$g=l(Ct),Oa=a(Ct,"P",{});var Hu=s(Oa);Fg=i(Hu,"An MBART-50 sequence has the following format, where "),yl=a(Hu,"CODE",{});var Xw=s(yl);jg=i(Xw,"X"),Xw.forEach(t),Eg=i(Hu," represents the sequence:"),Hu.forEach(t),Pg=l(Ct),Da=a(Ct,"UL",{});var Vu=s(Da);La=a(Vu,"LI",{});var Qu=s(La);Tl=a(Qu,"CODE",{});var Hw=s(Tl);Cg=i(Hw,"input_ids"),Hw.forEach(t),Sg=i(Qu," (for encoder) "),Ml=a(Qu,"CODE",{});var Vw=s(Ml);Ag=i(Vw,"[src_lang_code] X [eos]"),Vw.forEach(t),Qu.forEach(t),Ig=l(Vu),Ga=a(Vu,"LI",{});var Ju=s(Ga);wl=a(Ju,"CODE",{});var Qw=s(wl);Ng=i(Qw,"labels"),Qw.forEach(t),Og=i(Ju,": (for decoder) "),xl=a(Ju,"CODE",{});var Jw=s(xl);Dg=i(Jw,"[tgt_lang_code] X [eos]"),Jw.forEach(t),Ju.forEach(t),Vu.forEach(t),Lg=l(Ct),zl=a(Ct,"P",{});var Kw=s(zl);Gg=i(Kw,`BOS is never used. Pairs of sequences are not the expected use case, but they will be handled without a
separator.`),Kw.forEach(t),Ct.forEach(t),Rg=l(he),Jo=a(he,"DIV",{class:!0});var Ku=s(Jo);f(Ra.$$.fragment,Ku),Wg=l(Ku),ql=a(Ku,"P",{});var Zw=s(ql);Ug=i(Zw,"Reset the special tokens to the source lang setting. prefix=[src_lang_code] and suffix=[eos]."),Zw.forEach(t),Ku.forEach(t),Xg=l(he),Ko=a(he,"DIV",{class:!0});var Zu=s(Ko);f(Wa.$$.fragment,Zu),Hg=l(Zu),Bl=a(Zu,"P",{});var Yw=s(Bl);Vg=i(Yw,"Reset the special tokens to the target language setting. prefix=[src_lang_code] and suffix=[eos]."),Yw.forEach(t),Zu.forEach(t),he.forEach(t),Lp=l(o),po=a(o,"H2",{class:!0});var Yu=s(po);Zo=a(Yu,"A",{id:!0,class:!0,href:!0});var ex=s(Zo);$l=a(ex,"SPAN",{});var tx=s($l);f(Ua.$$.fragment,tx),tx.forEach(t),ex.forEach(t),Qg=l(Yu),Fl=a(Yu,"SPAN",{});var ox=s(Fl);Jg=i(ox,"MBartModel"),ox.forEach(t),Yu.forEach(t),Gp=l(o),Qe=a(o,"DIV",{class:!0});var qn=s(Qe);f(Xa.$$.fragment,qn),Kg=l(qn),Ha=a(qn,"P",{});var eh=s(Ha);Zg=i(eh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),fi=a(eh,"A",{href:!0});var nx=s(fi);Yg=i(nx,"PreTrainedModel"),nx.forEach(t),ek=i(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),tk=l(qn),Va=a(qn,"P",{});var th=s(Va);ok=i(th,"This model is also a PyTorch "),Qa=a(th,"A",{href:!0,rel:!0});var ax=s(Qa);nk=i(ax,"torch.nn.Module"),ax.forEach(t),ak=i(th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th.forEach(t),sk=l(qn),Se=a(qn,"DIV",{class:!0});var St=s(Se);f(Ja.$$.fragment,St),rk=l(St),uo=a(St,"P",{});var Ni=s(uo);ik=i(Ni,"The "),_i=a(Ni,"A",{href:!0});var sx=s(_i);dk=i(sx,"MBartModel"),sx.forEach(t),lk=i(Ni," forward method, overrides the "),jl=a(Ni,"CODE",{});var rx=s(jl);ck=i(rx,"__call__"),rx.forEach(t),pk=i(Ni," special method."),Ni.forEach(t),uk=l(St),f(Yo.$$.fragment,St),hk=l(St),El=a(St,"P",{});var ix=s(El);mk=i(ix,"Example:"),ix.forEach(t),fk=l(St),f(Ka.$$.fragment,St),St.forEach(t),qn.forEach(t),Rp=l(o),ho=a(o,"H2",{class:!0});var oh=s(ho);en=a(oh,"A",{id:!0,class:!0,href:!0});var dx=s(en);Pl=a(dx,"SPAN",{});var lx=s(Pl);f(Za.$$.fragment,lx),lx.forEach(t),dx.forEach(t),_k=l(oh),Cl=a(oh,"SPAN",{});var cx=s(Cl);gk=i(cx,"MBartForConditionalGeneration"),cx.forEach(t),oh.forEach(t),Wp=l(o),Je=a(o,"DIV",{class:!0});var Bn=s(Je);f(Ya.$$.fragment,Bn),kk=l(Bn),es=a(Bn,"P",{});var nh=s(es);bk=i(nh,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),gi=a(nh,"A",{href:!0});var px=s(gi);vk=i(px,"PreTrainedModel"),px.forEach(t),yk=i(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(t),Tk=l(Bn),ts=a(Bn,"P",{});var ah=s(ts);Mk=i(ah,"This model is also a PyTorch "),os=a(ah,"A",{href:!0,rel:!0});var ux=s(os);wk=i(ux,"torch.nn.Module"),ux.forEach(t),xk=i(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),zk=l(Bn),Z=a(Bn,"DIV",{class:!0});var Le=s(Z);f(ns.$$.fragment,Le),qk=l(Le),mo=a(Le,"P",{});var Oi=s(mo);Bk=i(Oi,"The "),ki=a(Oi,"A",{href:!0});var hx=s(ki);$k=i(hx,"MBartForConditionalGeneration"),hx.forEach(t),Fk=i(Oi," forward method, overrides the "),Sl=a(Oi,"CODE",{});var mx=s(Sl);jk=i(mx,"__call__"),mx.forEach(t),Ek=i(Oi," special method."),Oi.forEach(t),Pk=l(Le),f(tn.$$.fragment,Le),Ck=l(Le),Al=a(Le,"P",{});var fx=s(Al);Sk=i(fx,"Summarization example:"),fx.forEach(t),Ak=l(Le),f(as.$$.fragment,Le),Ik=l(Le),Il=a(Le,"P",{});var _x=s(Il);Nk=i(_x,"Mask filling example:"),_x.forEach(t),Ok=l(Le),f(ss.$$.fragment,Le),Le.forEach(t),Bn.forEach(t),Up=l(o),fo=a(o,"H2",{class:!0});var sh=s(fo);on=a(sh,"A",{id:!0,class:!0,href:!0});var gx=s(on);Nl=a(gx,"SPAN",{});var kx=s(Nl);f(rs.$$.fragment,kx),kx.forEach(t),gx.forEach(t),Dk=l(sh),Ol=a(sh,"SPAN",{});var bx=s(Ol);Lk=i(bx,"MBartForQuestionAnswering"),bx.forEach(t),sh.forEach(t),Xp=l(o),qe=a(o,"DIV",{class:!0});var At=s(qe);f(is.$$.fragment,At),Gk=l(At),_o=a(At,"P",{});var Di=s(_o);Rk=i(Di,`MBART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Dl=a(Di,"CODE",{});var vx=s(Dl);Wk=i(vx,"span start logits"),vx.forEach(t),Uk=i(Di," and "),Ll=a(Di,"CODE",{});var yx=s(Ll);Xk=i(yx,"span end logits"),yx.forEach(t),Hk=i(Di,")."),Di.forEach(t),Vk=l(At),ds=a(At,"P",{});var rh=s(ds);Qk=i(rh,"This model inherits from "),bi=a(rh,"A",{href:!0});var Tx=s(bi);Jk=i(Tx,"PreTrainedModel"),Tx.forEach(t),Kk=i(rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rh.forEach(t),Zk=l(At),ls=a(At,"P",{});var ih=s(ls);Yk=i(ih,"This model is also a PyTorch "),cs=a(ih,"A",{href:!0,rel:!0});var Mx=s(cs);eb=i(Mx,"torch.nn.Module"),Mx.forEach(t),tb=i(ih,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ih.forEach(t),ob=l(At),Ae=a(At,"DIV",{class:!0});var It=s(Ae);f(ps.$$.fragment,It),nb=l(It),go=a(It,"P",{});var Li=s(go);ab=i(Li,"The "),vi=a(Li,"A",{href:!0});var wx=s(vi);sb=i(wx,"MBartForQuestionAnswering"),wx.forEach(t),rb=i(Li," forward method, overrides the "),Gl=a(Li,"CODE",{});var xx=s(Gl);ib=i(xx,"__call__"),xx.forEach(t),db=i(Li," special method."),Li.forEach(t),lb=l(It),f(nn.$$.fragment,It),cb=l(It),Rl=a(It,"P",{});var zx=s(Rl);pb=i(zx,"Example:"),zx.forEach(t),ub=l(It),f(us.$$.fragment,It),It.forEach(t),At.forEach(t),Hp=l(o),ko=a(o,"H2",{class:!0});var dh=s(ko);an=a(dh,"A",{id:!0,class:!0,href:!0});var qx=s(an);Wl=a(qx,"SPAN",{});var Bx=s(Wl);f(hs.$$.fragment,Bx),Bx.forEach(t),qx.forEach(t),hb=l(dh),Ul=a(dh,"SPAN",{});var $x=s(Ul);mb=i($x,"MBartForSequenceClassification"),$x.forEach(t),dh.forEach(t),Vp=l(o),Be=a(o,"DIV",{class:!0});var Nt=s(Be);f(ms.$$.fragment,Nt),fb=l(Nt),Xl=a(Nt,"P",{});var Fx=s(Xl);_b=i(Fx,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Fx.forEach(t),gb=l(Nt),fs=a(Nt,"P",{});var lh=s(fs);kb=i(lh,"This model inherits from "),yi=a(lh,"A",{href:!0});var jx=s(yi);bb=i(jx,"PreTrainedModel"),jx.forEach(t),vb=i(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),yb=l(Nt),_s=a(Nt,"P",{});var ch=s(_s);Tb=i(ch,"This model is also a PyTorch "),gs=a(ch,"A",{href:!0,rel:!0});var Ex=s(gs);Mb=i(Ex,"torch.nn.Module"),Ex.forEach(t),wb=i(ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ch.forEach(t),xb=l(Nt),Y=a(Nt,"DIV",{class:!0});var Ge=s(Y);f(ks.$$.fragment,Ge),zb=l(Ge),bo=a(Ge,"P",{});var Gi=s(bo);qb=i(Gi,"The "),Ti=a(Gi,"A",{href:!0});var Px=s(Ti);Bb=i(Px,"MBartForSequenceClassification"),Px.forEach(t),$b=i(Gi," forward method, overrides the "),Hl=a(Gi,"CODE",{});var Cx=s(Hl);Fb=i(Cx,"__call__"),Cx.forEach(t),jb=i(Gi," special method."),Gi.forEach(t),Eb=l(Ge),f(sn.$$.fragment,Ge),Pb=l(Ge),Vl=a(Ge,"P",{});var Sx=s(Vl);Cb=i(Sx,"Example of single-label classification:"),Sx.forEach(t),Sb=l(Ge),f(bs.$$.fragment,Ge),Ab=l(Ge),Ql=a(Ge,"P",{});var Ax=s(Ql);Ib=i(Ax,"Example of multi-label classification:"),Ax.forEach(t),Nb=l(Ge),f(vs.$$.fragment,Ge),Ge.forEach(t),Nt.forEach(t),Qp=l(o),vo=a(o,"H2",{class:!0});var ph=s(vo);rn=a(ph,"A",{id:!0,class:!0,href:!0});var Ix=s(rn);Jl=a(Ix,"SPAN",{});var Nx=s(Jl);f(ys.$$.fragment,Nx),Nx.forEach(t),Ix.forEach(t),Ob=l(ph),Kl=a(ph,"SPAN",{});var Ox=s(Kl);Db=i(Ox,"MBartForCausalLM"),Ox.forEach(t),ph.forEach(t),Jp=l(o),Ts=a(o,"DIV",{class:!0});var Dx=s(Ts);Tt=a(Dx,"DIV",{class:!0});var Ri=s(Tt);f(Ms.$$.fragment,Ri),Lb=l(Ri),Zl=a(Ri,"P",{});var Lx=s(Zl);Gb=i(Lx,"Example:"),Lx.forEach(t),Rb=l(Ri),f(ws.$$.fragment,Ri),Ri.forEach(t),Dx.forEach(t),Kp=l(o),yo=a(o,"H2",{class:!0});var uh=s(yo);dn=a(uh,"A",{id:!0,class:!0,href:!0});var Gx=s(dn);Yl=a(Gx,"SPAN",{});var Rx=s(Yl);f(xs.$$.fragment,Rx),Rx.forEach(t),Gx.forEach(t),Wb=l(uh),ec=a(uh,"SPAN",{});var Wx=s(ec);Ub=i(Wx,"TFMBartModel"),Wx.forEach(t),uh.forEach(t),Zp=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(zs.$$.fragment,Ot),Xb=l(Ot),qs=a(Ot,"P",{});var hh=s(qs);Hb=i(hh,`The bare MBART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mi=a(hh,"A",{href:!0});var Ux=s(Mi);Vb=i(Ux,"TFPreTrainedModel"),Ux.forEach(t),Qb=i(hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh.forEach(t),Jb=l(Ot),Bs=a(Ot,"P",{});var mh=s(Bs);Kb=i(mh,"This model is also a "),$s=a(mh,"A",{href:!0,rel:!0});var Xx=s($s);Zb=i(Xx,"tf.keras.Model"),Xx.forEach(t),Yb=i(mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mh.forEach(t),e1=l(Ot),f(ln.$$.fragment,Ot),t1=l(Ot),Ie=a(Ot,"DIV",{class:!0});var Dt=s(Ie);f(Fs.$$.fragment,Dt),o1=l(Dt),To=a(Dt,"P",{});var Wi=s(To);n1=i(Wi,"The "),wi=a(Wi,"A",{href:!0});var Hx=s(wi);a1=i(Hx,"TFMBartModel"),Hx.forEach(t),s1=i(Wi," forward method, overrides the "),tc=a(Wi,"CODE",{});var Vx=s(tc);r1=i(Vx,"__call__"),Vx.forEach(t),i1=i(Wi," special method."),Wi.forEach(t),d1=l(Dt),f(cn.$$.fragment,Dt),l1=l(Dt),oc=a(Dt,"P",{});var Qx=s(oc);c1=i(Qx,"Example:"),Qx.forEach(t),p1=l(Dt),f(js.$$.fragment,Dt),Dt.forEach(t),Ot.forEach(t),Yp=l(o),Mo=a(o,"H2",{class:!0});var fh=s(Mo);pn=a(fh,"A",{id:!0,class:!0,href:!0});var Jx=s(pn);nc=a(Jx,"SPAN",{});var Kx=s(nc);f(Es.$$.fragment,Kx),Kx.forEach(t),Jx.forEach(t),u1=l(fh),ac=a(fh,"SPAN",{});var Zx=s(ac);h1=i(Zx,"TFMBartForConditionalGeneration"),Zx.forEach(t),fh.forEach(t),eu=l(o),Fe=a(o,"DIV",{class:!0});var Lt=s(Fe);f(Ps.$$.fragment,Lt),m1=l(Lt),Cs=a(Lt,"P",{});var _h=s(Cs);f1=i(_h,`The MBART Model with a language modeling head. Can be used for summarization.
This model inherits from `),xi=a(_h,"A",{href:!0});var Yx=s(xi);_1=i(Yx,"TFPreTrainedModel"),Yx.forEach(t),g1=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),k1=l(Lt),Ss=a(Lt,"P",{});var gh=s(Ss);b1=i(gh,"This model is also a "),As=a(gh,"A",{href:!0,rel:!0});var ez=s(As);v1=i(ez,"tf.keras.Model"),ez.forEach(t),y1=i(gh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh.forEach(t),T1=l(Lt),f(un.$$.fragment,Lt),M1=l(Lt),ee=a(Lt,"DIV",{class:!0});var Re=s(ee);f(Is.$$.fragment,Re),w1=l(Re),wo=a(Re,"P",{});var Ui=s(wo);x1=i(Ui,"The "),zi=a(Ui,"A",{href:!0});var tz=s(zi);z1=i(tz,"TFMBartForConditionalGeneration"),tz.forEach(t),q1=i(Ui," forward method, overrides the "),sc=a(Ui,"CODE",{});var oz=s(sc);B1=i(oz,"__call__"),oz.forEach(t),$1=i(Ui," special method."),Ui.forEach(t),F1=l(Re),f(hn.$$.fragment,Re),j1=l(Re),rc=a(Re,"P",{});var nz=s(rc);E1=i(nz,"Summarization example:"),nz.forEach(t),P1=l(Re),f(Ns.$$.fragment,Re),C1=l(Re),ic=a(Re,"P",{});var az=s(ic);S1=i(az,"Mask filling example:"),az.forEach(t),A1=l(Re),f(Os.$$.fragment,Re),Re.forEach(t),Lt.forEach(t),tu=l(o),xo=a(o,"H2",{class:!0});var kh=s(xo);mn=a(kh,"A",{id:!0,class:!0,href:!0});var sz=s(mn);dc=a(sz,"SPAN",{});var rz=s(dc);f(Ds.$$.fragment,rz),rz.forEach(t),sz.forEach(t),I1=l(kh),lc=a(kh,"SPAN",{});var iz=s(lc);N1=i(iz,"FlaxMBartModel"),iz.forEach(t),kh.forEach(t),ou=l(o),R=a(o,"DIV",{class:!0});var me=s(R);f(Ls.$$.fragment,me),O1=l(me),Gs=a(me,"P",{});var bh=s(Gs);D1=i(bh,`The bare MBart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),qi=a(bh,"A",{href:!0});var dz=s(qi);L1=i(dz,"FlaxPreTrainedModel"),dz.forEach(t),G1=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),R1=l(me),Rs=a(me,"P",{});var vh=s(Rs);W1=i(vh,`This model is also a Flax Linen
`),Ws=a(vh,"A",{href:!0,rel:!0});var lz=s(Ws);U1=i(lz,"flax.nn.Module"),lz.forEach(t),X1=i(vh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),vh.forEach(t),H1=l(me),cc=a(me,"P",{});var cz=s(cc);V1=i(cz,"Finally, this model supports inherent JAX features such as:"),cz.forEach(t),Q1=l(me),mt=a(me,"UL",{});var $n=s(mt);pc=a($n,"LI",{});var pz=s(pc);Us=a(pz,"A",{href:!0,rel:!0});var uz=s(Us);J1=i(uz,"Just-In-Time (JIT) compilation"),uz.forEach(t),pz.forEach(t),K1=l($n),uc=a($n,"LI",{});var hz=s(uc);Xs=a(hz,"A",{href:!0,rel:!0});var mz=s(Xs);Z1=i(mz,"Automatic Differentiation"),mz.forEach(t),hz.forEach(t),Y1=l($n),hc=a($n,"LI",{});var fz=s(hc);Hs=a(fz,"A",{href:!0,rel:!0});var _z=s(Hs);ev=i(_z,"Vectorization"),_z.forEach(t),fz.forEach(t),tv=l($n),mc=a($n,"LI",{});var gz=s(mc);Vs=a(gz,"A",{href:!0,rel:!0});var kz=s(Vs);ov=i(kz,"Parallelization"),kz.forEach(t),gz.forEach(t),$n.forEach(t),nv=l(me),Ne=a(me,"DIV",{class:!0});var Gt=s(Ne);f(Qs.$$.fragment,Gt),av=l(Gt),zo=a(Gt,"P",{});var Xi=s(zo);sv=i(Xi,"The "),fc=a(Xi,"CODE",{});var bz=s(fc);rv=i(bz,"FlaxMBartPreTrainedModel"),bz.forEach(t),iv=i(Xi,"forward method, overrides the "),_c=a(Xi,"CODE",{});var vz=s(_c);dv=i(vz,"__call__"),vz.forEach(t),lv=i(Xi," special method."),Xi.forEach(t),cv=l(Gt),f(fn.$$.fragment,Gt),pv=l(Gt),gc=a(Gt,"P",{});var yz=s(gc);uv=i(yz,"Example:"),yz.forEach(t),hv=l(Gt),f(Js.$$.fragment,Gt),Gt.forEach(t),mv=l(me),Mt=a(me,"DIV",{class:!0});var Hi=s(Mt);f(Ks.$$.fragment,Hi),fv=l(Hi),kc=a(Hi,"P",{});var Tz=s(kc);_v=i(Tz,"Example:"),Tz.forEach(t),gv=l(Hi),f(Zs.$$.fragment,Hi),Hi.forEach(t),kv=l(me),wt=a(me,"DIV",{class:!0});var Vi=s(wt);f(Ys.$$.fragment,Vi),bv=l(Vi),bc=a(Vi,"P",{});var Mz=s(bc);vv=i(Mz,"Example:"),Mz.forEach(t),yv=l(Vi),f(er.$$.fragment,Vi),Vi.forEach(t),me.forEach(t),nu=l(o),qo=a(o,"H2",{class:!0});var yh=s(qo);_n=a(yh,"A",{id:!0,class:!0,href:!0});var wz=s(_n);vc=a(wz,"SPAN",{});var xz=s(vc);f(tr.$$.fragment,xz),xz.forEach(t),wz.forEach(t),Tv=l(yh),yc=a(yh,"SPAN",{});var zz=s(yc);Mv=i(zz,"FlaxMBartForConditionalGeneration"),zz.forEach(t),yh.forEach(t),au=l(o),W=a(o,"DIV",{class:!0});var fe=s(W);f(or.$$.fragment,fe),wv=l(fe),nr=a(fe,"P",{});var Th=s(nr);xv=i(Th,`The MMBart Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bi=a(Th,"A",{href:!0});var qz=s(Bi);zv=i(qz,"FlaxPreTrainedModel"),qz.forEach(t),qv=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Bv=l(fe),ar=a(fe,"P",{});var Mh=s(ar);$v=i(Mh,`This model is also a Flax Linen
`),sr=a(Mh,"A",{href:!0,rel:!0});var Bz=s(sr);Fv=i(Bz,"flax.nn.Module"),Bz.forEach(t),jv=i(Mh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mh.forEach(t),Ev=l(fe),Tc=a(fe,"P",{});var $z=s(Tc);Pv=i($z,"Finally, this model supports inherent JAX features such as:"),$z.forEach(t),Cv=l(fe),ft=a(fe,"UL",{});var Fn=s(ft);Mc=a(Fn,"LI",{});var Fz=s(Mc);rr=a(Fz,"A",{href:!0,rel:!0});var jz=s(rr);Sv=i(jz,"Just-In-Time (JIT) compilation"),jz.forEach(t),Fz.forEach(t),Av=l(Fn),wc=a(Fn,"LI",{});var Ez=s(wc);ir=a(Ez,"A",{href:!0,rel:!0});var Pz=s(ir);Iv=i(Pz,"Automatic Differentiation"),Pz.forEach(t),Ez.forEach(t),Nv=l(Fn),xc=a(Fn,"LI",{});var Cz=s(xc);dr=a(Cz,"A",{href:!0,rel:!0});var Sz=s(dr);Ov=i(Sz,"Vectorization"),Sz.forEach(t),Cz.forEach(t),Dv=l(Fn),zc=a(Fn,"LI",{});var Az=s(zc);lr=a(Az,"A",{href:!0,rel:!0});var Iz=s(lr);Lv=i(Iz,"Parallelization"),Iz.forEach(t),Az.forEach(t),Fn.forEach(t),Gv=l(fe),te=a(fe,"DIV",{class:!0});var We=s(te);f(cr.$$.fragment,We),Rv=l(We),Bo=a(We,"P",{});var Qi=s(Bo);Wv=i(Qi,"The "),qc=a(Qi,"CODE",{});var Nz=s(qc);Uv=i(Nz,"FlaxMBartPreTrainedModel"),Nz.forEach(t),Xv=i(Qi,"forward method, overrides the "),Bc=a(Qi,"CODE",{});var Oz=s(Bc);Hv=i(Oz,"__call__"),Oz.forEach(t),Vv=i(Qi," special method."),Qi.forEach(t),Qv=l(We),f(gn.$$.fragment,We),Jv=l(We),$c=a(We,"P",{});var Dz=s($c);Kv=i(Dz,"Summarization example:"),Dz.forEach(t),Zv=l(We),f(pr.$$.fragment,We),Yv=l(We),Fc=a(We,"P",{});var Lz=s(Fc);ey=i(Lz,"Mask filling example:"),Lz.forEach(t),ty=l(We),f(ur.$$.fragment,We),We.forEach(t),oy=l(fe),xt=a(fe,"DIV",{class:!0});var Ji=s(xt);f(hr.$$.fragment,Ji),ny=l(Ji),jc=a(Ji,"P",{});var Gz=s(jc);ay=i(Gz,"Example:"),Gz.forEach(t),sy=l(Ji),f(mr.$$.fragment,Ji),Ji.forEach(t),ry=l(fe),zt=a(fe,"DIV",{class:!0});var Ki=s(zt);f(fr.$$.fragment,Ki),iy=l(Ki),Ec=a(Ki,"P",{});var Rz=s(Ec);dy=i(Rz,"Example:"),Rz.forEach(t),ly=l(Ki),f(_r.$$.fragment,Ki),Ki.forEach(t),fe.forEach(t),su=l(o),$o=a(o,"H2",{class:!0});var wh=s($o);kn=a(wh,"A",{id:!0,class:!0,href:!0});var Wz=s(kn);Pc=a(Wz,"SPAN",{});var Uz=s(Pc);f(gr.$$.fragment,Uz),Uz.forEach(t),Wz.forEach(t),cy=l(wh),Cc=a(wh,"SPAN",{});var Xz=s(Cc);py=i(Xz,"FlaxMBartForSequenceClassification"),Xz.forEach(t),wh.forEach(t),ru=l(o),I=a(o,"DIV",{class:!0});var oe=s(I);f(kr.$$.fragment,oe),uy=l(oe),Sc=a(oe,"P",{});var Hz=s(Sc);hy=i(Hz,`MBart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),Hz.forEach(t),my=l(oe),br=a(oe,"P",{});var xh=s(br);fy=i(xh,"This model inherits from "),$i=a(xh,"A",{href:!0});var Vz=s($i);_y=i(Vz,"FlaxPreTrainedModel"),Vz.forEach(t),gy=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),ky=l(oe),vr=a(oe,"P",{});var zh=s(vr);by=i(zh,`This model is also a Flax Linen
`),yr=a(zh,"A",{href:!0,rel:!0});var Qz=s(yr);vy=i(Qz,"flax.nn.Module"),Qz.forEach(t),yy=i(zh,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zh.forEach(t),Ty=l(oe),Ac=a(oe,"P",{});var Jz=s(Ac);My=i(Jz,"Finally, this model supports inherent JAX features such as:"),Jz.forEach(t),wy=l(oe),_t=a(oe,"UL",{});var jn=s(_t);Ic=a(jn,"LI",{});var Kz=s(Ic);Tr=a(Kz,"A",{href:!0,rel:!0});var Zz=s(Tr);xy=i(Zz,"Just-In-Time (JIT) compilation"),Zz.forEach(t),Kz.forEach(t),zy=l(jn),Nc=a(jn,"LI",{});var Yz=s(Nc);Mr=a(Yz,"A",{href:!0,rel:!0});var e2=s(Mr);qy=i(e2,"Automatic Differentiation"),e2.forEach(t),Yz.forEach(t),By=l(jn),Oc=a(jn,"LI",{});var t2=s(Oc);wr=a(t2,"A",{href:!0,rel:!0});var o2=s(wr);$y=i(o2,"Vectorization"),o2.forEach(t),t2.forEach(t),Fy=l(jn),Dc=a(jn,"LI",{});var n2=s(Dc);xr=a(n2,"A",{href:!0,rel:!0});var a2=s(xr);jy=i(a2,"Parallelization"),a2.forEach(t),n2.forEach(t),jn.forEach(t),Ey=l(oe),Oe=a(oe,"DIV",{class:!0});var Rt=s(Oe);f(zr.$$.fragment,Rt),Py=l(Rt),Fo=a(Rt,"P",{});var Zi=s(Fo);Cy=i(Zi,"The "),Lc=a(Zi,"CODE",{});var s2=s(Lc);Sy=i(s2,"FlaxMBartPreTrainedModel"),s2.forEach(t),Ay=i(Zi,"forward method, overrides the "),Gc=a(Zi,"CODE",{});var r2=s(Gc);Iy=i(r2,"__call__"),r2.forEach(t),Ny=i(Zi," special method."),Zi.forEach(t),Oy=l(Rt),f(bn.$$.fragment,Rt),Dy=l(Rt),Rc=a(Rt,"P",{});var i2=s(Rc);Ly=i(i2,"Example:"),i2.forEach(t),Gy=l(Rt),f(qr.$$.fragment,Rt),Rt.forEach(t),Ry=l(oe),qt=a(oe,"DIV",{class:!0});var Yi=s(qt);f(Br.$$.fragment,Yi),Wy=l(Yi),Wc=a(Yi,"P",{});var d2=s(Wc);Uy=i(d2,"Example:"),d2.forEach(t),Xy=l(Yi),f($r.$$.fragment,Yi),Yi.forEach(t),Hy=l(oe),Bt=a(oe,"DIV",{class:!0});var ed=s(Bt);f(Fr.$$.fragment,ed),Vy=l(ed),Uc=a(ed,"P",{});var l2=s(Uc);Qy=i(l2,"Example:"),l2.forEach(t),Jy=l(ed),f(jr.$$.fragment,ed),ed.forEach(t),oe.forEach(t),iu=l(o),jo=a(o,"H2",{class:!0});var qh=s(jo);vn=a(qh,"A",{id:!0,class:!0,href:!0});var c2=s(vn);Xc=a(c2,"SPAN",{});var p2=s(Xc);f(Er.$$.fragment,p2),p2.forEach(t),c2.forEach(t),Ky=l(qh),Hc=a(qh,"SPAN",{});var u2=s(Hc);Zy=i(u2,"FlaxMBartForQuestionAnswering"),u2.forEach(t),qh.forEach(t),du=l(o),N=a(o,"DIV",{class:!0});var ne=s(N);f(Pr.$$.fragment,ne),Yy=l(ne),Eo=a(ne,"P",{});var td=s(Eo);eT=i(td,`MBart Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Vc=a(td,"CODE",{});var h2=s(Vc);tT=i(h2,"span start logits"),h2.forEach(t),oT=i(td," and "),Qc=a(td,"CODE",{});var m2=s(Qc);nT=i(m2,"span end logits"),m2.forEach(t),aT=i(td,")."),td.forEach(t),sT=l(ne),Cr=a(ne,"P",{});var Bh=s(Cr);rT=i(Bh,"This model inherits from "),Fi=a(Bh,"A",{href:!0});var f2=s(Fi);iT=i(f2,"FlaxPreTrainedModel"),f2.forEach(t),dT=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),lT=l(ne),Sr=a(ne,"P",{});var $h=s(Sr);cT=i($h,`This model is also a Flax Linen
`),Ar=a($h,"A",{href:!0,rel:!0});var _2=s(Ar);pT=i(_2,"flax.nn.Module"),_2.forEach(t),uT=i($h,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),$h.forEach(t),hT=l(ne),Jc=a(ne,"P",{});var g2=s(Jc);mT=i(g2,"Finally, this model supports inherent JAX features such as:"),g2.forEach(t),fT=l(ne),gt=a(ne,"UL",{});var En=s(gt);Kc=a(En,"LI",{});var k2=s(Kc);Ir=a(k2,"A",{href:!0,rel:!0});var b2=s(Ir);_T=i(b2,"Just-In-Time (JIT) compilation"),b2.forEach(t),k2.forEach(t),gT=l(En),Zc=a(En,"LI",{});var v2=s(Zc);Nr=a(v2,"A",{href:!0,rel:!0});var y2=s(Nr);kT=i(y2,"Automatic Differentiation"),y2.forEach(t),v2.forEach(t),bT=l(En),Yc=a(En,"LI",{});var T2=s(Yc);Or=a(T2,"A",{href:!0,rel:!0});var M2=s(Or);vT=i(M2,"Vectorization"),M2.forEach(t),T2.forEach(t),yT=l(En),ep=a(En,"LI",{});var w2=s(ep);Dr=a(w2,"A",{href:!0,rel:!0});var x2=s(Dr);TT=i(x2,"Parallelization"),x2.forEach(t),w2.forEach(t),En.forEach(t),MT=l(ne),De=a(ne,"DIV",{class:!0});var Wt=s(De);f(Lr.$$.fragment,Wt),wT=l(Wt),Po=a(Wt,"P",{});var od=s(Po);xT=i(od,"The "),tp=a(od,"CODE",{});var z2=s(tp);zT=i(z2,"FlaxMBartPreTrainedModel"),z2.forEach(t),qT=i(od,"forward method, overrides the "),op=a(od,"CODE",{});var q2=s(op);BT=i(q2,"__call__"),q2.forEach(t),$T=i(od," special method."),od.forEach(t),FT=l(Wt),f(yn.$$.fragment,Wt),jT=l(Wt),np=a(Wt,"P",{});var B2=s(np);ET=i(B2,"Example:"),B2.forEach(t),PT=l(Wt),f(Gr.$$.fragment,Wt),Wt.forEach(t),CT=l(ne),$t=a(ne,"DIV",{class:!0});var nd=s($t);f(Rr.$$.fragment,nd),ST=l(nd),ap=a(nd,"P",{});var $2=s(ap);AT=i($2,"Example:"),$2.forEach(t),IT=l(nd),f(Wr.$$.fragment,nd),nd.forEach(t),NT=l(ne),Ft=a(ne,"DIV",{class:!0});var ad=s(Ft);f(Ur.$$.fragment,ad),OT=l(ad),sp=a(ad,"P",{});var F2=s(sp);DT=i(F2,"Example:"),F2.forEach(t),LT=l(ad),f(Xr.$$.fragment,ad),ad.forEach(t),ne.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(V2)),c(M,"id","mbart-and-mbart50"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#mbart-and-mbart50"),c(v,"class","relative group"),c(ge,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ge,"rel","nofollow"),c(O,"id","overview-of-mbart"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#overview-of-mbart"),c(Q,"class","relative group"),c(J,"href","https://arxiv.org/abs/2001.08210"),c(J,"rel","nofollow"),c(ye,"href","https://huggingface.co/valhalla"),c(ye,"rel","nofollow"),c(Te,"href","https://github.com/pytorch/fairseq/tree/master/examples/mbart"),c(Te,"rel","nofollow"),c($,"id","training-of-mbart"),c($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($,"href","#training-of-mbart"),c(w,"class","relative group"),c(Pn,"href","/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Kr,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizer.as_target_tokenizer"),c(Co,"id","overview-of-mbart50"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#overview-of-mbart50"),c(Yt,"class","relative group"),c(Nn,"href","https://arxiv.org/abs/2008.00401"),c(Nn,"rel","nofollow"),c(So,"id","training-of-mbart50"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#training-of-mbart50"),c(eo,"class","relative group"),c(oi,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBart50Tokenizer"),c(Io,"id","transformers.MBartConfig"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.MBartConfig"),c(to,"class","relative group"),c(si,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartModel"),c(Un,"href","https://huggingface.co/facebook/mbart-large-cc25"),c(Un,"rel","nofollow"),c(ri,"href","/docs/transformers/pr_15811/en/main_classes/configuration#transformers.PretrainedConfig"),c(ii,"href","/docs/transformers/pr_15811/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(No,"id","transformers.MBartTokenizer"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.MBartTokenizer"),c(ao,"class","relative group"),c(di,"href","/docs/transformers/pr_15811/en/model_doc/roberta#transformers.RobertaTokenizer"),c(li,"href","/docs/transformers/pr_15811/en/model_doc/xlnet#transformers.XLNetTokenizer"),c(Qn,"href","https://github.com/google/sentencepiece"),c(Qn,"rel","nofollow"),c(Oo,"class","docstring"),c(tt,"class","docstring"),c(L,"class","docstring"),c(Do,"id","transformers.MBartTokenizerFast"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.MBartTokenizerFast"),c(so,"class","relative group"),c(ra,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(ra,"rel","nofollow"),c(ci,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartTokenizerFast"),c(pi,"href","/docs/transformers/pr_15811/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(ui,"href","/docs/transformers/pr_15811/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizerFast"),c(Pe,"class","docstring"),c(Lo,"class","docstring"),c(Go,"class","docstring"),c(Ro,"class","docstring"),c(C,"class","docstring"),c(Wo,"id","transformers.MBart50Tokenizer"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.MBart50Tokenizer"),c(io,"class","relative group"),c(va,"href","https://github.com/google/sentencepiece"),c(va,"rel","nofollow"),c(hi,"href","/docs/transformers/pr_15811/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(ot,"class","docstring"),c(Uo,"class","docstring"),c(Xo,"class","docstring"),c(Ho,"class","docstring"),c(Vo,"class","docstring"),c(S,"class","docstring"),c(Qo,"id","transformers.MBart50TokenizerFast"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.MBart50TokenizerFast"),c(lo,"class","relative group"),c(Sa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),c(Sa,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_15811/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Ce,"class","docstring"),c(Jo,"class","docstring"),c(Ko,"class","docstring"),c(G,"class","docstring"),c(Zo,"id","transformers.MBartModel"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.MBartModel"),c(po,"class","relative group"),c(fi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qa,"rel","nofollow"),c(_i,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartModel"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(en,"id","transformers.MBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.MBartForConditionalGeneration"),c(ho,"class","relative group"),c(gi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(os,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartForConditionalGeneration"),c(Z,"class","docstring"),c(Je,"class","docstring"),c(on,"id","transformers.MBartForQuestionAnswering"),c(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(on,"href","#transformers.MBartForQuestionAnswering"),c(fo,"class","relative group"),c(bi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(vi,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartForQuestionAnswering"),c(Ae,"class","docstring"),c(qe,"class","docstring"),c(an,"id","transformers.MBartForSequenceClassification"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.MBartForSequenceClassification"),c(ko,"class","relative group"),c(yi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(gs,"rel","nofollow"),c(Ti,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.MBartForSequenceClassification"),c(Y,"class","docstring"),c(Be,"class","docstring"),c(rn,"id","transformers.MBartForCausalLM"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.MBartForCausalLM"),c(vo,"class","relative group"),c(Tt,"class","docstring"),c(Ts,"class","docstring"),c(dn,"id","transformers.TFMBartModel"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.TFMBartModel"),c(yo,"class","relative group"),c(Mi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(wi,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.TFMBartModel"),c(Ie,"class","docstring"),c($e,"class","docstring"),c(pn,"id","transformers.TFMBartForConditionalGeneration"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.TFMBartForConditionalGeneration"),c(Mo,"class","relative group"),c(xi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(As,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_15811/en/model_doc/mbart#transformers.TFMBartForConditionalGeneration"),c(ee,"class","docstring"),c(Fe,"class","docstring"),c(mn,"id","transformers.FlaxMBartModel"),c(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mn,"href","#transformers.FlaxMBartModel"),c(xo,"class","relative group"),c(qi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ws,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ws,"rel","nofollow"),c(Us,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Us,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Hs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Hs,"rel","nofollow"),c(Vs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Vs,"rel","nofollow"),c(Ne,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(R,"class","docstring"),c(_n,"id","transformers.FlaxMBartForConditionalGeneration"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.FlaxMBartForConditionalGeneration"),c(qo,"class","relative group"),c(Bi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(sr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(sr,"rel","nofollow"),c(rr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(rr,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ir,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(dr,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(lr,"rel","nofollow"),c(te,"class","docstring"),c(xt,"class","docstring"),c(zt,"class","docstring"),c(W,"class","docstring"),c(kn,"id","transformers.FlaxMBartForSequenceClassification"),c(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kn,"href","#transformers.FlaxMBartForSequenceClassification"),c($o,"class","relative group"),c($i,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(yr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(yr,"rel","nofollow"),c(Tr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Tr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Mr,"rel","nofollow"),c(wr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wr,"rel","nofollow"),c(xr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(xr,"rel","nofollow"),c(Oe,"class","docstring"),c(qt,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring"),c(vn,"id","transformers.FlaxMBartForQuestionAnswering"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.FlaxMBartForQuestionAnswering"),c(jo,"class","relative group"),c(Fi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ar,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Ar,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ir,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Nr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Or,"rel","nofollow"),c(Dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Dr,"rel","nofollow"),c(De,"class","docstring"),c($t,"class","docstring"),c(Ft,"class","docstring"),c(N,"class","docstring")},m(o,p){e(document.head,h),u(o,z,p),u(o,v,p),e(v,M),e(M,x),_(T,x,null),e(v,y),e(v,B),e(B,st),u(o,je,p),u(o,j,p),e(j,Ue),e(Ue,_e),e(j,rt),e(j,ge),e(ge,ke),e(j,it),u(o,Ke,p),u(o,Q,p),e(Q,O),e(O,Xe),_(ae,Xe,null),e(Q,P),e(Q,A),e(A,dt),u(o,ce,p),u(o,pe,p),e(pe,lt),e(pe,J),e(J,ct),e(pe,pt),u(o,D,p),u(o,Ee,p),e(Ee,be),u(o,Ze,p),u(o,se,p),e(se,ve),e(se,ye),e(ye,ut),e(se,re),e(se,Te),e(Te,Me),u(o,Ye,p),u(o,w,p),e(w,$),e($,we),_(He,we,null),e(w,Ut),e(w,K),e(K,Xt),u(o,kt,p),u(o,X,p),e(X,ie),e(X,de),e(de,Ht),e(X,Vt),e(X,le),e(le,Qt),e(X,Jt),e(X,Ve),e(Ve,Kt),e(X,Fh),e(X,sd),e(sd,jh),e(X,Eh),u(o,fp,p),u(o,bt,p),e(bt,Ph),e(bt,Pn),e(Pn,rd),e(rd,Ch),e(Pn,Sh),e(bt,Ah),e(bt,Kr),e(Kr,Ih),e(bt,Nh),u(o,_p,p),u(o,Zr,p),e(Zr,id),e(id,Oh),u(o,gp,p),_(Cn,o,p),u(o,kp,p),u(o,Yr,p),e(Yr,Sn),e(Sn,dd),e(dd,Dh),e(Sn,Lh),e(Sn,Zt),e(Zt,Gh),e(Zt,ld),e(ld,Rh),e(Zt,Wh),e(Zt,cd),e(cd,Uh),e(Zt,Xh),u(o,bp,p),_(An,o,p),u(o,vp,p),u(o,Yt,p),e(Yt,Co),e(Co,pd),_(In,pd,null),e(Yt,Hh),e(Yt,ud),e(ud,Vh),u(o,yp,p),u(o,vt,p),e(vt,Qh),e(vt,Nn),e(Nn,Jh),e(vt,Kh),e(vt,hd),e(hd,Zh),e(vt,Yh),u(o,Tp,p),u(o,ei,p),e(ei,em),u(o,Mp,p),u(o,ti,p),e(ti,md),e(md,tm),u(o,wp,p),u(o,eo,p),e(eo,So),e(So,fd),_(On,fd,null),e(eo,om),e(eo,_d),e(_d,nm),u(o,xp,p),u(o,et,p),e(et,am),e(et,gd),e(gd,sm),e(et,rm),e(et,kd),e(kd,im),e(et,dm),e(et,bd),e(bd,lm),e(et,cm),u(o,zp,p),u(o,Ao,p),e(Ao,pm),e(Ao,oi),e(oi,um),e(Ao,hm),u(o,qp,p),u(o,ni,p),e(ni,vd),e(vd,mm),u(o,Bp,p),_(Dn,o,p),u(o,$p,p),u(o,ai,p),e(ai,Ln),e(Ln,yd),e(yd,fm),e(Ln,_m),e(Ln,xe),e(xe,gm),e(xe,Td),e(Td,km),e(xe,bm),e(xe,Md),e(Md,vm),e(xe,ym),e(xe,wd),e(wd,Tm),e(xe,Mm),e(xe,xd),e(xd,wm),e(xe,xm),e(xe,zd),e(zd,zm),e(xe,qm),u(o,Fp,p),_(Gn,o,p),u(o,jp,p),u(o,to,p),e(to,Io),e(Io,qd),_(Rn,qd,null),e(to,Bm),e(to,Bd),e(Bd,$m),u(o,Ep,p),u(o,ze,p),_(Wn,ze,null),e(ze,Fm),e(ze,oo),e(oo,jm),e(oo,si),e(si,Em),e(oo,Pm),e(oo,Un),e(Un,Cm),e(oo,Sm),e(ze,Am),e(ze,no),e(no,Im),e(no,ri),e(ri,Nm),e(no,Om),e(no,ii),e(ii,Dm),e(no,Lm),e(ze,Gm),e(ze,$d),e($d,Rm),e(ze,Wm),_(Xn,ze,null),u(o,Pp,p),u(o,ao,p),e(ao,No),e(No,Fd),_(Hn,Fd,null),e(ao,Um),e(ao,jd),e(jd,Xm),u(o,Cp,p),u(o,L,p),_(Vn,L,null),e(L,Hm),e(L,Ed),e(Ed,Vm),e(L,Qm),e(L,ht),e(ht,Jm),e(ht,di),e(di,Km),e(ht,Zm),e(ht,li),e(li,Ym),e(ht,ef),e(ht,Qn),e(Qn,tf),e(ht,of),e(L,nf),e(L,Jn),e(Jn,af),e(Jn,Pd),e(Pd,sf),e(Jn,rf),e(L,df),e(L,Cd),e(Cd,lf),e(L,cf),_(Kn,L,null),e(L,pf),e(L,Oo),_(Zn,Oo,null),e(Oo,uf),e(Oo,Sd),e(Sd,hf),e(L,mf),e(L,tt),_(Yn,tt,null),e(tt,ff),e(tt,ea),e(ea,_f),e(ea,Ad),e(Ad,gf),e(ea,kf),e(tt,bf),e(tt,ta),e(ta,oa),e(oa,Id),e(Id,vf),e(oa,yf),e(oa,Nd),e(Nd,Tf),e(ta,Mf),e(ta,na),e(na,Od),e(Od,wf),e(na,xf),e(na,Dd),e(Dd,zf),e(tt,qf),e(tt,Ld),e(Ld,Bf),u(o,Sp,p),u(o,so,p),e(so,Do),e(Do,Gd),_(aa,Gd,null),e(so,$f),e(so,Rd),e(Rd,Ff),u(o,Ap,p),u(o,C,p),_(sa,C,null),e(C,jf),e(C,ro),e(ro,Ef),e(ro,Wd),e(Wd,Pf),e(ro,Cf),e(ro,ra),e(ra,Sf),e(ro,Af),e(C,If),e(C,yt),e(yt,ci),e(ci,Nf),e(yt,Of),e(yt,pi),e(pi,Df),e(yt,Lf),e(yt,ui),e(ui,Gf),e(yt,Rf),e(C,Wf),e(C,ia),e(ia,Uf),e(ia,Ud),e(Ud,Xf),e(ia,Hf),e(C,Vf),e(C,Xd),e(Xd,Qf),e(C,Jf),_(da,C,null),e(C,Kf),e(C,Pe),_(la,Pe,null),e(Pe,Zf),e(Pe,Hd),e(Hd,Yf),e(Pe,e_),e(Pe,ca),e(ca,t_),e(ca,Vd),e(Vd,o_),e(ca,n_),e(Pe,a_),e(Pe,pa),e(pa,ua),e(ua,Qd),e(Qd,s_),e(ua,r_),e(ua,Jd),e(Jd,i_),e(pa,d_),e(pa,ha),e(ha,Kd),e(Kd,l_),e(ha,c_),e(ha,Zd),e(Zd,p_),e(Pe,u_),e(Pe,Yd),e(Yd,h_),e(C,m_),e(C,Lo),_(ma,Lo,null),e(Lo,f_),e(Lo,el),e(el,__),e(C,g_),e(C,Go),_(fa,Go,null),e(Go,k_),e(Go,tl),e(tl,b_),e(C,v_),e(C,Ro),_(_a,Ro,null),e(Ro,y_),e(Ro,ol),e(ol,T_),u(o,Ip,p),u(o,io,p),e(io,Wo),e(Wo,nl),_(ga,nl,null),e(io,M_),e(io,al),e(al,w_),u(o,Np,p),u(o,S,p),_(ka,S,null),e(S,x_),e(S,ba),e(ba,z_),e(ba,va),e(va,q_),e(ba,B_),e(S,$_),e(S,ya),e(ya,F_),e(ya,hi),e(hi,j_),e(ya,E_),e(S,P_),e(S,sl),e(sl,C_),e(S,S_),_(Ta,S,null),e(S,A_),e(S,ot),_(Ma,ot,null),e(ot,I_),e(ot,wa),e(wa,N_),e(wa,rl),e(rl,O_),e(wa,D_),e(ot,L_),e(ot,xa),e(xa,za),e(za,il),e(il,G_),e(za,R_),e(za,dl),e(dl,W_),e(xa,U_),e(xa,qa),e(qa,ll),e(ll,X_),e(qa,H_),e(qa,cl),e(cl,V_),e(ot,Q_),e(ot,pl),e(pl,J_),e(S,K_),e(S,Uo),_(Ba,Uo,null),e(Uo,Z_),e(Uo,ul),e(ul,Y_),e(S,eg),e(S,Xo),_($a,Xo,null),e(Xo,tg),e(Xo,Fa),e(Fa,og),e(Fa,hl),e(hl,ng),e(Fa,ag),e(S,sg),e(S,Ho),_(ja,Ho,null),e(Ho,rg),e(Ho,ml),e(ml,ig),e(S,dg),e(S,Vo),_(Ea,Vo,null),e(Vo,lg),e(Vo,fl),e(fl,cg),u(o,Op,p),u(o,lo,p),e(lo,Qo),e(Qo,_l),_(Pa,_l,null),e(lo,pg),e(lo,gl),e(gl,ug),u(o,Dp,p),u(o,G,p),_(Ca,G,null),e(G,hg),e(G,co),e(co,mg),e(co,kl),e(kl,fg),e(co,_g),e(co,Sa),e(Sa,gg),e(co,kg),e(G,bg),e(G,Aa),e(Aa,vg),e(Aa,mi),e(mi,yg),e(Aa,Tg),e(G,Mg),e(G,bl),e(bl,wg),e(G,xg),_(Ia,G,null),e(G,zg),e(G,Ce),_(Na,Ce,null),e(Ce,qg),e(Ce,vl),e(vl,Bg),e(Ce,$g),e(Ce,Oa),e(Oa,Fg),e(Oa,yl),e(yl,jg),e(Oa,Eg),e(Ce,Pg),e(Ce,Da),e(Da,La),e(La,Tl),e(Tl,Cg),e(La,Sg),e(La,Ml),e(Ml,Ag),e(Da,Ig),e(Da,Ga),e(Ga,wl),e(wl,Ng),e(Ga,Og),e(Ga,xl),e(xl,Dg),e(Ce,Lg),e(Ce,zl),e(zl,Gg),e(G,Rg),e(G,Jo),_(Ra,Jo,null),e(Jo,Wg),e(Jo,ql),e(ql,Ug),e(G,Xg),e(G,Ko),_(Wa,Ko,null),e(Ko,Hg),e(Ko,Bl),e(Bl,Vg),u(o,Lp,p),u(o,po,p),e(po,Zo),e(Zo,$l),_(Ua,$l,null),e(po,Qg),e(po,Fl),e(Fl,Jg),u(o,Gp,p),u(o,Qe,p),_(Xa,Qe,null),e(Qe,Kg),e(Qe,Ha),e(Ha,Zg),e(Ha,fi),e(fi,Yg),e(Ha,ek),e(Qe,tk),e(Qe,Va),e(Va,ok),e(Va,Qa),e(Qa,nk),e(Va,ak),e(Qe,sk),e(Qe,Se),_(Ja,Se,null),e(Se,rk),e(Se,uo),e(uo,ik),e(uo,_i),e(_i,dk),e(uo,lk),e(uo,jl),e(jl,ck),e(uo,pk),e(Se,uk),_(Yo,Se,null),e(Se,hk),e(Se,El),e(El,mk),e(Se,fk),_(Ka,Se,null),u(o,Rp,p),u(o,ho,p),e(ho,en),e(en,Pl),_(Za,Pl,null),e(ho,_k),e(ho,Cl),e(Cl,gk),u(o,Wp,p),u(o,Je,p),_(Ya,Je,null),e(Je,kk),e(Je,es),e(es,bk),e(es,gi),e(gi,vk),e(es,yk),e(Je,Tk),e(Je,ts),e(ts,Mk),e(ts,os),e(os,wk),e(ts,xk),e(Je,zk),e(Je,Z),_(ns,Z,null),e(Z,qk),e(Z,mo),e(mo,Bk),e(mo,ki),e(ki,$k),e(mo,Fk),e(mo,Sl),e(Sl,jk),e(mo,Ek),e(Z,Pk),_(tn,Z,null),e(Z,Ck),e(Z,Al),e(Al,Sk),e(Z,Ak),_(as,Z,null),e(Z,Ik),e(Z,Il),e(Il,Nk),e(Z,Ok),_(ss,Z,null),u(o,Up,p),u(o,fo,p),e(fo,on),e(on,Nl),_(rs,Nl,null),e(fo,Dk),e(fo,Ol),e(Ol,Lk),u(o,Xp,p),u(o,qe,p),_(is,qe,null),e(qe,Gk),e(qe,_o),e(_o,Rk),e(_o,Dl),e(Dl,Wk),e(_o,Uk),e(_o,Ll),e(Ll,Xk),e(_o,Hk),e(qe,Vk),e(qe,ds),e(ds,Qk),e(ds,bi),e(bi,Jk),e(ds,Kk),e(qe,Zk),e(qe,ls),e(ls,Yk),e(ls,cs),e(cs,eb),e(ls,tb),e(qe,ob),e(qe,Ae),_(ps,Ae,null),e(Ae,nb),e(Ae,go),e(go,ab),e(go,vi),e(vi,sb),e(go,rb),e(go,Gl),e(Gl,ib),e(go,db),e(Ae,lb),_(nn,Ae,null),e(Ae,cb),e(Ae,Rl),e(Rl,pb),e(Ae,ub),_(us,Ae,null),u(o,Hp,p),u(o,ko,p),e(ko,an),e(an,Wl),_(hs,Wl,null),e(ko,hb),e(ko,Ul),e(Ul,mb),u(o,Vp,p),u(o,Be,p),_(ms,Be,null),e(Be,fb),e(Be,Xl),e(Xl,_b),e(Be,gb),e(Be,fs),e(fs,kb),e(fs,yi),e(yi,bb),e(fs,vb),e(Be,yb),e(Be,_s),e(_s,Tb),e(_s,gs),e(gs,Mb),e(_s,wb),e(Be,xb),e(Be,Y),_(ks,Y,null),e(Y,zb),e(Y,bo),e(bo,qb),e(bo,Ti),e(Ti,Bb),e(bo,$b),e(bo,Hl),e(Hl,Fb),e(bo,jb),e(Y,Eb),_(sn,Y,null),e(Y,Pb),e(Y,Vl),e(Vl,Cb),e(Y,Sb),_(bs,Y,null),e(Y,Ab),e(Y,Ql),e(Ql,Ib),e(Y,Nb),_(vs,Y,null),u(o,Qp,p),u(o,vo,p),e(vo,rn),e(rn,Jl),_(ys,Jl,null),e(vo,Ob),e(vo,Kl),e(Kl,Db),u(o,Jp,p),u(o,Ts,p),e(Ts,Tt),_(Ms,Tt,null),e(Tt,Lb),e(Tt,Zl),e(Zl,Gb),e(Tt,Rb),_(ws,Tt,null),u(o,Kp,p),u(o,yo,p),e(yo,dn),e(dn,Yl),_(xs,Yl,null),e(yo,Wb),e(yo,ec),e(ec,Ub),u(o,Zp,p),u(o,$e,p),_(zs,$e,null),e($e,Xb),e($e,qs),e(qs,Hb),e(qs,Mi),e(Mi,Vb),e(qs,Qb),e($e,Jb),e($e,Bs),e(Bs,Kb),e(Bs,$s),e($s,Zb),e(Bs,Yb),e($e,e1),_(ln,$e,null),e($e,t1),e($e,Ie),_(Fs,Ie,null),e(Ie,o1),e(Ie,To),e(To,n1),e(To,wi),e(wi,a1),e(To,s1),e(To,tc),e(tc,r1),e(To,i1),e(Ie,d1),_(cn,Ie,null),e(Ie,l1),e(Ie,oc),e(oc,c1),e(Ie,p1),_(js,Ie,null),u(o,Yp,p),u(o,Mo,p),e(Mo,pn),e(pn,nc),_(Es,nc,null),e(Mo,u1),e(Mo,ac),e(ac,h1),u(o,eu,p),u(o,Fe,p),_(Ps,Fe,null),e(Fe,m1),e(Fe,Cs),e(Cs,f1),e(Cs,xi),e(xi,_1),e(Cs,g1),e(Fe,k1),e(Fe,Ss),e(Ss,b1),e(Ss,As),e(As,v1),e(Ss,y1),e(Fe,T1),_(un,Fe,null),e(Fe,M1),e(Fe,ee),_(Is,ee,null),e(ee,w1),e(ee,wo),e(wo,x1),e(wo,zi),e(zi,z1),e(wo,q1),e(wo,sc),e(sc,B1),e(wo,$1),e(ee,F1),_(hn,ee,null),e(ee,j1),e(ee,rc),e(rc,E1),e(ee,P1),_(Ns,ee,null),e(ee,C1),e(ee,ic),e(ic,S1),e(ee,A1),_(Os,ee,null),u(o,tu,p),u(o,xo,p),e(xo,mn),e(mn,dc),_(Ds,dc,null),e(xo,I1),e(xo,lc),e(lc,N1),u(o,ou,p),u(o,R,p),_(Ls,R,null),e(R,O1),e(R,Gs),e(Gs,D1),e(Gs,qi),e(qi,L1),e(Gs,G1),e(R,R1),e(R,Rs),e(Rs,W1),e(Rs,Ws),e(Ws,U1),e(Rs,X1),e(R,H1),e(R,cc),e(cc,V1),e(R,Q1),e(R,mt),e(mt,pc),e(pc,Us),e(Us,J1),e(mt,K1),e(mt,uc),e(uc,Xs),e(Xs,Z1),e(mt,Y1),e(mt,hc),e(hc,Hs),e(Hs,ev),e(mt,tv),e(mt,mc),e(mc,Vs),e(Vs,ov),e(R,nv),e(R,Ne),_(Qs,Ne,null),e(Ne,av),e(Ne,zo),e(zo,sv),e(zo,fc),e(fc,rv),e(zo,iv),e(zo,_c),e(_c,dv),e(zo,lv),e(Ne,cv),_(fn,Ne,null),e(Ne,pv),e(Ne,gc),e(gc,uv),e(Ne,hv),_(Js,Ne,null),e(R,mv),e(R,Mt),_(Ks,Mt,null),e(Mt,fv),e(Mt,kc),e(kc,_v),e(Mt,gv),_(Zs,Mt,null),e(R,kv),e(R,wt),_(Ys,wt,null),e(wt,bv),e(wt,bc),e(bc,vv),e(wt,yv),_(er,wt,null),u(o,nu,p),u(o,qo,p),e(qo,_n),e(_n,vc),_(tr,vc,null),e(qo,Tv),e(qo,yc),e(yc,Mv),u(o,au,p),u(o,W,p),_(or,W,null),e(W,wv),e(W,nr),e(nr,xv),e(nr,Bi),e(Bi,zv),e(nr,qv),e(W,Bv),e(W,ar),e(ar,$v),e(ar,sr),e(sr,Fv),e(ar,jv),e(W,Ev),e(W,Tc),e(Tc,Pv),e(W,Cv),e(W,ft),e(ft,Mc),e(Mc,rr),e(rr,Sv),e(ft,Av),e(ft,wc),e(wc,ir),e(ir,Iv),e(ft,Nv),e(ft,xc),e(xc,dr),e(dr,Ov),e(ft,Dv),e(ft,zc),e(zc,lr),e(lr,Lv),e(W,Gv),e(W,te),_(cr,te,null),e(te,Rv),e(te,Bo),e(Bo,Wv),e(Bo,qc),e(qc,Uv),e(Bo,Xv),e(Bo,Bc),e(Bc,Hv),e(Bo,Vv),e(te,Qv),_(gn,te,null),e(te,Jv),e(te,$c),e($c,Kv),e(te,Zv),_(pr,te,null),e(te,Yv),e(te,Fc),e(Fc,ey),e(te,ty),_(ur,te,null),e(W,oy),e(W,xt),_(hr,xt,null),e(xt,ny),e(xt,jc),e(jc,ay),e(xt,sy),_(mr,xt,null),e(W,ry),e(W,zt),_(fr,zt,null),e(zt,iy),e(zt,Ec),e(Ec,dy),e(zt,ly),_(_r,zt,null),u(o,su,p),u(o,$o,p),e($o,kn),e(kn,Pc),_(gr,Pc,null),e($o,cy),e($o,Cc),e(Cc,py),u(o,ru,p),u(o,I,p),_(kr,I,null),e(I,uy),e(I,Sc),e(Sc,hy),e(I,my),e(I,br),e(br,fy),e(br,$i),e($i,_y),e(br,gy),e(I,ky),e(I,vr),e(vr,by),e(vr,yr),e(yr,vy),e(vr,yy),e(I,Ty),e(I,Ac),e(Ac,My),e(I,wy),e(I,_t),e(_t,Ic),e(Ic,Tr),e(Tr,xy),e(_t,zy),e(_t,Nc),e(Nc,Mr),e(Mr,qy),e(_t,By),e(_t,Oc),e(Oc,wr),e(wr,$y),e(_t,Fy),e(_t,Dc),e(Dc,xr),e(xr,jy),e(I,Ey),e(I,Oe),_(zr,Oe,null),e(Oe,Py),e(Oe,Fo),e(Fo,Cy),e(Fo,Lc),e(Lc,Sy),e(Fo,Ay),e(Fo,Gc),e(Gc,Iy),e(Fo,Ny),e(Oe,Oy),_(bn,Oe,null),e(Oe,Dy),e(Oe,Rc),e(Rc,Ly),e(Oe,Gy),_(qr,Oe,null),e(I,Ry),e(I,qt),_(Br,qt,null),e(qt,Wy),e(qt,Wc),e(Wc,Uy),e(qt,Xy),_($r,qt,null),e(I,Hy),e(I,Bt),_(Fr,Bt,null),e(Bt,Vy),e(Bt,Uc),e(Uc,Qy),e(Bt,Jy),_(jr,Bt,null),u(o,iu,p),u(o,jo,p),e(jo,vn),e(vn,Xc),_(Er,Xc,null),e(jo,Ky),e(jo,Hc),e(Hc,Zy),u(o,du,p),u(o,N,p),_(Pr,N,null),e(N,Yy),e(N,Eo),e(Eo,eT),e(Eo,Vc),e(Vc,tT),e(Eo,oT),e(Eo,Qc),e(Qc,nT),e(Eo,aT),e(N,sT),e(N,Cr),e(Cr,rT),e(Cr,Fi),e(Fi,iT),e(Cr,dT),e(N,lT),e(N,Sr),e(Sr,cT),e(Sr,Ar),e(Ar,pT),e(Sr,uT),e(N,hT),e(N,Jc),e(Jc,mT),e(N,fT),e(N,gt),e(gt,Kc),e(Kc,Ir),e(Ir,_T),e(gt,gT),e(gt,Zc),e(Zc,Nr),e(Nr,kT),e(gt,bT),e(gt,Yc),e(Yc,Or),e(Or,vT),e(gt,yT),e(gt,ep),e(ep,Dr),e(Dr,TT),e(N,MT),e(N,De),_(Lr,De,null),e(De,wT),e(De,Po),e(Po,xT),e(Po,tp),e(tp,zT),e(Po,qT),e(Po,op),e(op,BT),e(Po,$T),e(De,FT),_(yn,De,null),e(De,jT),e(De,np),e(np,ET),e(De,PT),_(Gr,De,null),e(N,CT),e(N,$t),_(Rr,$t,null),e($t,ST),e($t,ap),e(ap,AT),e($t,IT),_(Wr,$t,null),e(N,NT),e(N,Ft),_(Ur,Ft,null),e(Ft,OT),e(Ft,sp),e(sp,DT),e(Ft,LT),_(Xr,Ft,null),lu=!0},p(o,[p]){const Hr={};p&2&&(Hr.$$scope={dirty:p,ctx:o}),Yo.$set(Hr);const rp={};p&2&&(rp.$$scope={dirty:p,ctx:o}),tn.$set(rp);const ip={};p&2&&(ip.$$scope={dirty:p,ctx:o}),nn.$set(ip);const dp={};p&2&&(dp.$$scope={dirty:p,ctx:o}),sn.$set(dp);const Tn={};p&2&&(Tn.$$scope={dirty:p,ctx:o}),ln.$set(Tn);const lp={};p&2&&(lp.$$scope={dirty:p,ctx:o}),cn.$set(lp);const cp={};p&2&&(cp.$$scope={dirty:p,ctx:o}),un.$set(cp);const Vr={};p&2&&(Vr.$$scope={dirty:p,ctx:o}),hn.$set(Vr);const pp={};p&2&&(pp.$$scope={dirty:p,ctx:o}),fn.$set(pp);const up={};p&2&&(up.$$scope={dirty:p,ctx:o}),gn.$set(up);const hp={};p&2&&(hp.$$scope={dirty:p,ctx:o}),bn.$set(hp);const Qr={};p&2&&(Qr.$$scope={dirty:p,ctx:o}),yn.$set(Qr)},i(o){lu||(g(T.$$.fragment,o),g(ae.$$.fragment,o),g(He.$$.fragment,o),g(Cn.$$.fragment,o),g(An.$$.fragment,o),g(In.$$.fragment,o),g(On.$$.fragment,o),g(Dn.$$.fragment,o),g(Gn.$$.fragment,o),g(Rn.$$.fragment,o),g(Wn.$$.fragment,o),g(Xn.$$.fragment,o),g(Hn.$$.fragment,o),g(Vn.$$.fragment,o),g(Kn.$$.fragment,o),g(Zn.$$.fragment,o),g(Yn.$$.fragment,o),g(aa.$$.fragment,o),g(sa.$$.fragment,o),g(da.$$.fragment,o),g(la.$$.fragment,o),g(ma.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ga.$$.fragment,o),g(ka.$$.fragment,o),g(Ta.$$.fragment,o),g(Ma.$$.fragment,o),g(Ba.$$.fragment,o),g($a.$$.fragment,o),g(ja.$$.fragment,o),g(Ea.$$.fragment,o),g(Pa.$$.fragment,o),g(Ca.$$.fragment,o),g(Ia.$$.fragment,o),g(Na.$$.fragment,o),g(Ra.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Xa.$$.fragment,o),g(Ja.$$.fragment,o),g(Yo.$$.fragment,o),g(Ka.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(ns.$$.fragment,o),g(tn.$$.fragment,o),g(as.$$.fragment,o),g(ss.$$.fragment,o),g(rs.$$.fragment,o),g(is.$$.fragment,o),g(ps.$$.fragment,o),g(nn.$$.fragment,o),g(us.$$.fragment,o),g(hs.$$.fragment,o),g(ms.$$.fragment,o),g(ks.$$.fragment,o),g(sn.$$.fragment,o),g(bs.$$.fragment,o),g(vs.$$.fragment,o),g(ys.$$.fragment,o),g(Ms.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(ln.$$.fragment,o),g(Fs.$$.fragment,o),g(cn.$$.fragment,o),g(js.$$.fragment,o),g(Es.$$.fragment,o),g(Ps.$$.fragment,o),g(un.$$.fragment,o),g(Is.$$.fragment,o),g(hn.$$.fragment,o),g(Ns.$$.fragment,o),g(Os.$$.fragment,o),g(Ds.$$.fragment,o),g(Ls.$$.fragment,o),g(Qs.$$.fragment,o),g(fn.$$.fragment,o),g(Js.$$.fragment,o),g(Ks.$$.fragment,o),g(Zs.$$.fragment,o),g(Ys.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(cr.$$.fragment,o),g(gn.$$.fragment,o),g(pr.$$.fragment,o),g(ur.$$.fragment,o),g(hr.$$.fragment,o),g(mr.$$.fragment,o),g(fr.$$.fragment,o),g(_r.$$.fragment,o),g(gr.$$.fragment,o),g(kr.$$.fragment,o),g(zr.$$.fragment,o),g(bn.$$.fragment,o),g(qr.$$.fragment,o),g(Br.$$.fragment,o),g($r.$$.fragment,o),g(Fr.$$.fragment,o),g(jr.$$.fragment,o),g(Er.$$.fragment,o),g(Pr.$$.fragment,o),g(Lr.$$.fragment,o),g(yn.$$.fragment,o),g(Gr.$$.fragment,o),g(Rr.$$.fragment,o),g(Wr.$$.fragment,o),g(Ur.$$.fragment,o),g(Xr.$$.fragment,o),lu=!0)},o(o){k(T.$$.fragment,o),k(ae.$$.fragment,o),k(He.$$.fragment,o),k(Cn.$$.fragment,o),k(An.$$.fragment,o),k(In.$$.fragment,o),k(On.$$.fragment,o),k(Dn.$$.fragment,o),k(Gn.$$.fragment,o),k(Rn.$$.fragment,o),k(Wn.$$.fragment,o),k(Xn.$$.fragment,o),k(Hn.$$.fragment,o),k(Vn.$$.fragment,o),k(Kn.$$.fragment,o),k(Zn.$$.fragment,o),k(Yn.$$.fragment,o),k(aa.$$.fragment,o),k(sa.$$.fragment,o),k(da.$$.fragment,o),k(la.$$.fragment,o),k(ma.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ga.$$.fragment,o),k(ka.$$.fragment,o),k(Ta.$$.fragment,o),k(Ma.$$.fragment,o),k(Ba.$$.fragment,o),k($a.$$.fragment,o),k(ja.$$.fragment,o),k(Ea.$$.fragment,o),k(Pa.$$.fragment,o),k(Ca.$$.fragment,o),k(Ia.$$.fragment,o),k(Na.$$.fragment,o),k(Ra.$$.fragment,o),k(Wa.$$.fragment,o),k(Ua.$$.fragment,o),k(Xa.$$.fragment,o),k(Ja.$$.fragment,o),k(Yo.$$.fragment,o),k(Ka.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(ns.$$.fragment,o),k(tn.$$.fragment,o),k(as.$$.fragment,o),k(ss.$$.fragment,o),k(rs.$$.fragment,o),k(is.$$.fragment,o),k(ps.$$.fragment,o),k(nn.$$.fragment,o),k(us.$$.fragment,o),k(hs.$$.fragment,o),k(ms.$$.fragment,o),k(ks.$$.fragment,o),k(sn.$$.fragment,o),k(bs.$$.fragment,o),k(vs.$$.fragment,o),k(ys.$$.fragment,o),k(Ms.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(ln.$$.fragment,o),k(Fs.$$.fragment,o),k(cn.$$.fragment,o),k(js.$$.fragment,o),k(Es.$$.fragment,o),k(Ps.$$.fragment,o),k(un.$$.fragment,o),k(Is.$$.fragment,o),k(hn.$$.fragment,o),k(Ns.$$.fragment,o),k(Os.$$.fragment,o),k(Ds.$$.fragment,o),k(Ls.$$.fragment,o),k(Qs.$$.fragment,o),k(fn.$$.fragment,o),k(Js.$$.fragment,o),k(Ks.$$.fragment,o),k(Zs.$$.fragment,o),k(Ys.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(cr.$$.fragment,o),k(gn.$$.fragment,o),k(pr.$$.fragment,o),k(ur.$$.fragment,o),k(hr.$$.fragment,o),k(mr.$$.fragment,o),k(fr.$$.fragment,o),k(_r.$$.fragment,o),k(gr.$$.fragment,o),k(kr.$$.fragment,o),k(zr.$$.fragment,o),k(bn.$$.fragment,o),k(qr.$$.fragment,o),k(Br.$$.fragment,o),k($r.$$.fragment,o),k(Fr.$$.fragment,o),k(jr.$$.fragment,o),k(Er.$$.fragment,o),k(Pr.$$.fragment,o),k(Lr.$$.fragment,o),k(yn.$$.fragment,o),k(Gr.$$.fragment,o),k(Rr.$$.fragment,o),k(Wr.$$.fragment,o),k(Ur.$$.fragment,o),k(Xr.$$.fragment,o),lu=!1},d(o){t(h),o&&t(z),o&&t(v),b(T),o&&t(je),o&&t(j),o&&t(Ke),o&&t(Q),b(ae),o&&t(ce),o&&t(pe),o&&t(D),o&&t(Ee),o&&t(Ze),o&&t(se),o&&t(Ye),o&&t(w),b(He),o&&t(kt),o&&t(X),o&&t(fp),o&&t(bt),o&&t(_p),o&&t(Zr),o&&t(gp),b(Cn,o),o&&t(kp),o&&t(Yr),o&&t(bp),b(An,o),o&&t(vp),o&&t(Yt),b(In),o&&t(yp),o&&t(vt),o&&t(Tp),o&&t(ei),o&&t(Mp),o&&t(ti),o&&t(wp),o&&t(eo),b(On),o&&t(xp),o&&t(et),o&&t(zp),o&&t(Ao),o&&t(qp),o&&t(ni),o&&t(Bp),b(Dn,o),o&&t($p),o&&t(ai),o&&t(Fp),b(Gn,o),o&&t(jp),o&&t(to),b(Rn),o&&t(Ep),o&&t(ze),b(Wn),b(Xn),o&&t(Pp),o&&t(ao),b(Hn),o&&t(Cp),o&&t(L),b(Vn),b(Kn),b(Zn),b(Yn),o&&t(Sp),o&&t(so),b(aa),o&&t(Ap),o&&t(C),b(sa),b(da),b(la),b(ma),b(fa),b(_a),o&&t(Ip),o&&t(io),b(ga),o&&t(Np),o&&t(S),b(ka),b(Ta),b(Ma),b(Ba),b($a),b(ja),b(Ea),o&&t(Op),o&&t(lo),b(Pa),o&&t(Dp),o&&t(G),b(Ca),b(Ia),b(Na),b(Ra),b(Wa),o&&t(Lp),o&&t(po),b(Ua),o&&t(Gp),o&&t(Qe),b(Xa),b(Ja),b(Yo),b(Ka),o&&t(Rp),o&&t(ho),b(Za),o&&t(Wp),o&&t(Je),b(Ya),b(ns),b(tn),b(as),b(ss),o&&t(Up),o&&t(fo),b(rs),o&&t(Xp),o&&t(qe),b(is),b(ps),b(nn),b(us),o&&t(Hp),o&&t(ko),b(hs),o&&t(Vp),o&&t(Be),b(ms),b(ks),b(sn),b(bs),b(vs),o&&t(Qp),o&&t(vo),b(ys),o&&t(Jp),o&&t(Ts),b(Ms),b(ws),o&&t(Kp),o&&t(yo),b(xs),o&&t(Zp),o&&t($e),b(zs),b(ln),b(Fs),b(cn),b(js),o&&t(Yp),o&&t(Mo),b(Es),o&&t(eu),o&&t(Fe),b(Ps),b(un),b(Is),b(hn),b(Ns),b(Os),o&&t(tu),o&&t(xo),b(Ds),o&&t(ou),o&&t(R),b(Ls),b(Qs),b(fn),b(Js),b(Ks),b(Zs),b(Ys),b(er),o&&t(nu),o&&t(qo),b(tr),o&&t(au),o&&t(W),b(or),b(cr),b(gn),b(pr),b(ur),b(hr),b(mr),b(fr),b(_r),o&&t(su),o&&t($o),b(gr),o&&t(ru),o&&t(I),b(kr),b(zr),b(bn),b(qr),b(Br),b($r),b(Fr),b(jr),o&&t(iu),o&&t(jo),b(Er),o&&t(du),o&&t(N),b(Pr),b(Lr),b(yn),b(Gr),b(Rr),b(Wr),b(Ur),b(Xr)}}}const V2={local:"mbart-and-mbart50",sections:[{local:"overview-of-mbart",sections:[{local:"training-of-mbart",title:"Training of MBart"}],title:"Overview of MBart"},{local:"overview-of-mbart50",sections:[{local:"training-of-mbart50",title:"Training of MBart-50"}],title:"Overview of MBart-50"},{local:"transformers.MBartConfig",title:"MBartConfig"},{local:"transformers.MBartTokenizer",title:"MBartTokenizer"},{local:"transformers.MBartTokenizerFast",title:"MBartTokenizerFast"},{local:"transformers.MBart50Tokenizer",title:"MBart50Tokenizer"},{local:"transformers.MBart50TokenizerFast",title:"MBart50TokenizerFast"},{local:"transformers.MBartModel",title:"MBartModel"},{local:"transformers.MBartForConditionalGeneration",title:"MBartForConditionalGeneration"},{local:"transformers.MBartForQuestionAnswering",title:"MBartForQuestionAnswering"},{local:"transformers.MBartForSequenceClassification",title:"MBartForSequenceClassification"},{local:"transformers.MBartForCausalLM",title:"MBartForCausalLM"},{local:"transformers.TFMBartModel",title:"TFMBartModel"},{local:"transformers.TFMBartForConditionalGeneration",title:"TFMBartForConditionalGeneration"},{local:"transformers.FlaxMBartModel",title:"FlaxMBartModel"},{local:"transformers.FlaxMBartForConditionalGeneration",title:"FlaxMBartForConditionalGeneration"},{local:"transformers.FlaxMBartForSequenceClassification",title:"FlaxMBartForSequenceClassification"},{local:"transformers.FlaxMBartForQuestionAnswering",title:"FlaxMBartForQuestionAnswering"}],title:"MBart and MBart-50"};function Q2(E,h,z){let{fw:v}=h;return E.$$set=M=>{"fw"in M&&z(0,v=M.fw)},[v]}class o0 extends j2{constructor(h){super();E2(this,h,Q2,H2,P2,{fw:0})}}export{o0 as default,V2 as metadata};
