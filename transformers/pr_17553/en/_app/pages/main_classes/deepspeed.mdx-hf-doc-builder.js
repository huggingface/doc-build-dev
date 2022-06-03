import{S as GK,i as LK,s as MK,e as o,k as u,w as f,t as a,M as ZK,c as l,d as t,m as c,a as r,x as d,h as n,b as h,G as s,g as i,y as m,q as _,o as v,B as j,v as NK}from"../../chunks/vendor-hf-doc-builder.js";import{T as $G}from"../../chunks/Tip-hf-doc-builder.js";import{D as Hj}from"../../chunks/Docstring-hf-doc-builder.js";import{C as g}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as y}from"../../chunks/IconCopyLink-hf-doc-builder.js";function HK(Et){let w,C;return{c(){w=o("p"),C=a("This section is a must-read")},l(b){w=l(b,"P",{});var k=r(w);C=n(k,"This section is a must-read"),k.forEach(t)},m(b,k){i(b,w,k),s(w,C)},d(b){b&&t(w)}}}function BK(Et){let w,C,b,k,ee,z,x,se,R,ae,S;return{c(){w=o("p"),C=a("As of "),b=o("code"),k=a("deepspeed==0.6.0"),ee=a(" the bf16 support is new and experimental."),z=u(),x=o("p"),se=a("If you use "),R=o("a"),ae=a("gradient accumulation"),S=a(" with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),this.h()},l(E){w=l(E,"P",{});var q=r(w);C=n(q,"As of "),b=l(q,"CODE",{});var Es=r(b);k=n(Es,"deepspeed==0.6.0"),Es.forEach(t),ee=n(q," the bf16 support is new and experimental."),q.forEach(t),z=c(E),x=l(E,"P",{});var V=r(x);se=n(V,"If you use "),R=l(V,"A",{href:!0});var qs=r(R);ae=n(qs,"gradient accumulation"),qs.forEach(t),S=n(V," with bf16-enabled, you need to be aware that it\u2019ll accumulate gradients in bf16, which may not be what you want due to this format\u2019s low precision, as it may lead to a lossy accumulation."),V.forEach(t),this.h()},h(){h(R,"href","#gradient-accumulation")},m(E,q){i(E,w,q),s(w,C),s(w,b),s(b,k),s(w,ee),i(E,z,q),i(E,x,q),s(x,se),s(x,R),s(R,ae),s(x,S)},d(E){E&&t(w),E&&t(z),E&&t(x)}}}function WK(Et){let w,C,b,k,ee,z,x,se,R,ae,S;return{c(){w=o("p"),C=a("Note, that once "),b=o("code"),k=a("load_state_dict_from_zero_checkpoint"),ee=a(" was run, the "),z=o("code"),x=a("model"),se=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=o("code"),ae=a("model.load_state_dict(state_dict)"),S=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(E){w=l(E,"P",{});var q=r(w);C=n(q,"Note, that once "),b=l(q,"CODE",{});var Es=r(b);k=n(Es,"load_state_dict_from_zero_checkpoint"),Es.forEach(t),ee=n(q," was run, the "),z=l(q,"CODE",{});var V=r(z);x=n(V,"model"),V.forEach(t),se=n(q,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),R=l(q,"CODE",{});var qs=r(R);ae=n(qs,"model.load_state_dict(state_dict)"),qs.forEach(t),S=n(q,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),q.forEach(t)},m(E,q){i(E,w,q),s(w,C),s(w,b),s(b,k),s(w,ee),s(w,z),s(z,x),s(w,se),s(w,R),s(R,ae),s(w,S)},d(E){E&&t(w)}}}function FK(Et){let w,C,b,k,ee,z,x,se,R,ae,S,E,q,Es,V,qs,L5,Bj,I,tf,M5,Z5,af,N5,H5,nf,B5,W5,of,F5,V5,lf,Y5,K5,rf,J5,Wj,Se,X5,ao,Q5,e$,no,s$,t$,Fj,Up,a$,Vj,Gp,n$,Yj,qt,o$,oo,l$,r$,Kj,$t,lo,p$,Lp,i$,u$,c$,Y,h$,Mp,f$,d$,pf,m$,_$,uf,v$,j$,cf,g$,y$,Zp,w$,b$,Jj,Np,E$,Xj,Hp,q$,Qj,Bp,hf,$$,eg,Wp,k$,sg,Fp,ro,P$,Vp,D$,z$,tg,Yp,O$,ag,Kp,ng,$s,kt,ff,po,T$,df,A$,og,Jp,lg,ks,Pt,mf,io,S$,_f,C$,rg,Xp,x$,pg,uo,ig,Ce,R$,vf,I$,U$,jf,G$,L$,ug,co,cg,xe,M$,ho,Z$,N$,fo,H$,B$,hg,Dt,W$,Qp,F$,V$,fg,ei,Y$,dg,si,K$,mg,mo,_g,Re,J$,gf,X$,Q$,yf,e4,s4,vg,zt,t4,wf,a4,n4,jg,_o,gg,Pe,o4,bf,l4,r4,Ef,p4,i4,qf,u4,yg,ti,c4,wg,vo,bg,Ie,h4,$f,f4,d4,kf,m4,_4,Eg,Ot,v4,Pf,j4,g4,qg,Ue,y4,Df,w4,b4,jo,E4,q4,$g,ai,$4,kg,go,Pg,ni,k4,Dg,yo,zg,oi,P4,Og,wo,Tg,Tt,D4,zf,z4,O4,Ag,At,T4,Of,A4,S4,Sg,St,C4,bo,x4,R4,Cg,li,xg,Ps,Ct,Tf,Eo,I4,Af,U4,Rg,xt,G4,ri,L4,M4,Ig,Rt,Ds,Z4,Sf,N4,H4,Cf,B4,W4,F4,De,V4,xf,Y4,K4,Rf,J4,X4,qo,Q4,e6,Ug,pi,s6,Gg,$o,Lg,ii,t6,Mg,ko,Zg,U,a6,If,n6,o6,Uf,l6,r6,Gf,p6,i6,Lf,u6,c6,Po,h6,f6,Ng,ne,d6,Mf,m6,_6,Zf,v6,j6,Nf,g6,y6,Hg,It,w6,Hf,b6,E6,Bg,Do,Wg,Ut,q6,Bf,$6,k6,Fg,Gt,P6,zo,D6,z6,Vg,ui,Yg,zs,Lt,Wf,Oo,O6,Ff,T6,Kg,Mt,A6,ci,S6,C6,Jg,To,Xg,Ge,x6,Vf,R6,I6,Ao,U6,G6,Qg,hi,L6,ey,Zt,Yf,M6,Z6,Kf,N6,sy,fi,H6,ty,So,ay,di,B6,ny,Nt,W6,Co,F6,V6,oy,mi,Y6,ly,_i,K6,ry,vi,Os,xo,J6,Jf,X6,Q6,e7,Ro,s7,Xf,t7,py,ji,iy,Ts,Ht,Qf,Io,a7,ed,n7,uy,Bt,o7,sd,l7,r7,cy,gi,p7,hy,Uo,fy,Wt,i7,td,u7,c7,dy,yi,h7,my,wi,f7,_y,Go,vy,Le,d7,ad,m7,_7,nd,v7,j7,jy,Lo,gy,Ft,g7,od,y7,w7,yy,Mo,wy,bi,b7,by,Vt,E7,ld,q7,$7,Ey,Ei,qy,As,Yt,rd,Zo,k7,pd,P7,$y,Kt,D7,No,z7,O7,ky,Jt,T7,Ho,A7,S7,Py,Bo,Dy,Xt,C7,id,x7,R7,zy,Wo,Oy,Qt,I7,Fo,U7,G7,Ty,qi,L7,Ay,oe,M7,ud,Z7,N7,cd,H7,B7,hd,W7,F7,Sy,Vo,Cy,ea,V7,$i,Y7,K7,xy,ki,Ry,Ss,sa,fd,Yo,J7,dd,X7,Iy,G,Q7,Pi,e8,s8,Di,t8,a8,md,n8,o8,_d,l8,r8,zi,p8,i8,Uy,Oi,u8,Gy,Ko,Ly,Ti,c8,My,Jo,Zy,Ai,Ny,Cs,ta,vd,Xo,h8,jd,f8,Hy,aa,By,Me,d8,Si,m8,_8,Ci,v8,j8,Wy,na,g8,xi,y8,w8,Fy,Ze,b8,gd,E8,q8,Ri,$8,k8,Vy,Ii,P8,Yy,oa,D8,Ui,z8,O8,Ky,la,yd,T8,A8,Qo,S8,Gi,C8,x8,Jy,le,R8,wd,I8,U8,Li,G8,L8,bd,M8,Z8,Xy,Mi,Qy,xs,ra,Ed,el,N8,qd,H8,ew,sl,tl,B8,W8,sw,Ne,F8,$d,V8,Y8,al,K8,J8,tw,pa,X8,Zi,Q8,ek,aw,Ni,sk,nw,Hi,ow,Rs,ia,kd,nl,tk,Pd,ak,lw,Bi,nk,rw,ol,pw,Wi,Dd,ok,iw,He,Is,lk,zd,rk,pk,Od,ik,uk,ck,L,Td,hk,fk,Ad,dk,mk,Sd,_k,vk,Cd,jk,gk,xd,yk,wk,Rd,bk,Ek,qk,Id,$k,uw,Be,kk,Ud,Pk,Dk,Gd,zk,Ok,cw,ll,hw,Fi,Tk,fw,Vi,dw,Us,ua,Ld,rl,Ak,Md,Sk,mw,Yi,Ck,_w,pl,vw,K,xk,Zd,Rk,Ik,Nd,Uk,Gk,Hd,Lk,Mk,Bd,Zk,Nk,jw,We,Hk,Wd,Bk,Wk,Fd,Fk,Vk,gw,Ki,Vd,Yk,yw,ca,il,Yd,Kk,Jk,Kd,Xk,Qk,ul,Jd,e9,s9,Xd,t9,ww,M,a9,Qd,n9,o9,em,l9,r9,sm,p9,i9,tm,u9,c9,am,h9,f9,bw,ze,nm,d9,m9,om,_9,v9,lm,j9,g9,Ew,Ji,y9,qw,Fe,cl,rm,w9,b9,pm,E9,q9,hl,im,$9,k9,um,P9,D9,fl,cm,z9,O9,hm,T9,$w,Ve,A9,fm,S9,C9,Xi,x9,R9,kw,dl,dm,I9,U9,Pw,re,G9,mm,L9,M9,_m,Z9,N9,vm,H9,B9,Dw,Qi,ml,jm,W9,F9,gm,V9,zw,Oe,ym,Y9,K9,wm,J9,X9,bm,Q9,eP,Ow,Ye,sP,Em,tP,aP,qm,nP,oP,Tw,ha,_l,lP,$m,rP,pP,iP,vl,uP,km,cP,hP,Aw,eu,Sw,Gs,fa,Pm,jl,fP,Dm,dP,Cw,su,mP,xw,tu,_P,Rw,gl,Iw,da,vP,zm,jP,gP,Uw,Ke,yP,yl,wP,bP,wl,EP,qP,Gw,ma,$P,Om,kP,PP,Lw,Je,DP,Tm,zP,OP,bl,TP,AP,Mw,au,Zw,Ls,_a,Am,El,SP,Sm,CP,Nw,nu,xP,Hw,ou,RP,Bw,va,Ms,IP,Cm,UP,GP,xm,LP,MP,ZP,ql,NP,Rm,HP,BP,Ww,Xe,WP,Im,FP,VP,Um,YP,KP,Fw,lu,Vw,Zs,ja,Gm,$l,JP,Lm,XP,Yw,ga,QP,Mm,eD,sD,Kw,kl,Jw,ya,tD,Zm,aD,nD,Xw,Pl,Qw,ru,e2,Ns,wa,Nm,Dl,oD,Hm,lD,s2,ba,rD,Bm,pD,iD,t2,zl,a2,Ea,uD,Wm,cD,hD,n2,Ol,o2,Hs,qa,Fm,Tl,fD,Vm,dD,l2,$a,mD,Ym,_D,vD,r2,pu,jD,p2,ka,gD,Km,yD,wD,i2,iu,u2,Bs,Pa,Jm,Al,bD,Xm,ED,c2,Qe,qD,Qm,$D,kD,Sl,PD,DD,h2,$,zD,e_,OD,TD,uu,AD,SD,s_,CD,xD,t_,RD,ID,a_,UD,GD,n_,LD,MD,o_,ZD,ND,l_,HD,BD,f2,es,WD,r_,FD,VD,p_,YD,KD,d2,Cl,m2,cu,JD,_2,pe,xl,i_,XD,QD,u_,ez,sz,Rl,c_,tz,az,h_,nz,oz,Il,f_,lz,rz,d_,pz,iz,Ul,m_,uz,cz,__,hz,v2,hu,fz,j2,fu,dz,g2,Gl,y2,Da,mz,du,_z,vz,w2,mu,jz,b2,Ll,E2,ie,gz,v_,yz,wz,j_,bz,Ez,g_,qz,$z,q2,_u,$2,Ws,za,y_,Ml,kz,w_,Pz,k2,Z,Dz,b_,zz,Oz,E_,Tz,Az,q_,Sz,Cz,$_,xz,Rz,Zl,Iz,Uz,P2,vu,Gz,D2,Oa,Nl,k_,Lz,Mz,P_,Zz,Nz,ss,D_,Hz,Bz,z_,Wz,Fz,O_,Vz,Yz,z2,O,Kz,T_,Jz,Xz,ju,Qz,eO,A_,sO,tO,S_,aO,nO,C_,oO,lO,x_,rO,pO,O2,ts,iO,R_,uO,cO,I_,hO,fO,T2,Hl,A2,as,dO,U_,mO,_O,gu,vO,jO,S2,ue,Ta,G_,gO,yO,L_,wO,bO,EO,Aa,M_,qO,$O,Z_,kO,PO,DO,ns,N_,zO,OO,H_,TO,AO,B_,SO,CO,xO,os,W_,RO,IO,F_,UO,GO,V_,LO,MO,C2,yu,ZO,x2,Bl,R2,Sa,NO,wu,HO,BO,I2,Ca,WO,Y_,FO,VO,U2,Wl,G2,J,YO,K_,KO,JO,J_,XO,QO,X_,eT,sT,Q_,tT,aT,L2,bu,M2,Fs,xa,e1,Fl,nT,s1,oT,Z2,Eu,lT,N2,Ra,rT,t1,pT,iT,H2,Vl,B2,Ia,uT,Yl,cT,hT,W2,ce,fT,a1,dT,mT,n1,_T,vT,o1,jT,gT,F2,qu,V2,Vs,Ua,l1,Kl,yT,r1,wT,Y2,$u,bT,K2,Ys,Ga,p1,Jl,ET,i1,qT,J2,ku,$T,X2,Xl,Q2,ls,kT,Pu,PT,DT,u1,zT,OT,eb,rs,TT,c1,AT,ST,h1,CT,xT,sb,Du,RT,tb,Ql,ab,La,IT,zu,UT,GT,nb,Ma,LT,er,MT,ZT,ob,Ks,Za,f1,sr,NT,d1,HT,lb,Ou,BT,rb,tr,pb,Tu,WT,ib,ps,FT,m1,VT,YT,_1,KT,JT,ub,Au,XT,cb,ar,hb,Na,fb,Js,Ha,v1,nr,QT,j1,eA,db,Su,sA,mb,or,_b,he,tA,Cu,aA,nA,g1,oA,lA,y1,rA,pA,vb,Ba,iA,w1,uA,cA,jb,xu,hA,gb,lr,yb,Wa,fA,Ru,dA,mA,wb,Fa,_A,rr,vA,jA,bb,Iu,Eb,Xs,Va,b1,pr,gA,E1,yA,qb,Uu,wA,$b,ir,kb,N,bA,Gu,EA,qA,q1,$A,kA,$1,PA,DA,k1,zA,OA,P1,TA,AA,Pb,Lu,SA,Db,ur,zb,Ya,CA,Mu,xA,RA,Ob,Zu,Tb,Qs,Ka,D1,cr,IA,z1,UA,Ab,Nu,GA,Sb,hr,Cb,is,LA,Hu,MA,ZA,O1,NA,HA,xb,Bu,BA,Rb,fr,Ib,Ja,WA,Wu,FA,VA,Ub,Fu,Gb,et,Xa,T1,dr,YA,A1,KA,Lb,Vu,JA,Mb,mr,Zb,us,XA,Yu,QA,eS,S1,sS,tS,Nb,Ku,aS,Hb,_r,Bb,Qa,nS,Ju,oS,lS,Wb,Xu,Fb,st,en,C1,vr,rS,x1,pS,Vb,sn,iS,R1,uS,cS,Yb,Qu,I1,hS,Kb,tn,fS,U1,dS,mS,Jb,T,_S,G1,vS,jS,L1,gS,yS,M1,wS,bS,Z1,ES,qS,N1,$S,kS,H1,PS,DS,Xb,jr,Qb,ec,B1,zS,e3,an,OS,gr,TS,AS,s3,sc,W1,SS,t3,tc,CS,a3,ac,xS,n3,yr,o3,cs,RS,F1,IS,US,V1,GS,LS,l3,wr,r3,nn,p3,on,MS,Y1,ZS,NS,i3,ln,HS,K1,BS,WS,u3,br,c3,nc,J1,FS,h3,hs,VS,X1,YS,KS,Q1,JS,XS,f3,oc,QS,d3,Er,m3,rn,eC,ev,sC,tC,_3,qr,v3,pn,aC,sv,nC,oC,j3,lc,lC,g3,$r,tv,rC,pC,y3,fs,iC,av,uC,cC,nv,hC,fC,w3,rc,dC,b3,tt,un,ov,kr,mC,lv,_C,E3,pc,vC,q3,ic,jC,$3,uc,gC,k3,at,cn,rv,Pr,yC,pv,wC,P3,hn,bC,iv,EC,qC,D3,Dr,z3,cc,$C,O3,D,kC,uv,PC,DC,cv,zC,OC,hv,TC,AC,hc,SC,CC,fc,xC,RC,fv,IC,UC,dv,GC,LC,T3,zr,A3,fn,MC,mv,ZC,NC,S3,dc,HC,C3,dn,BC,Or,WC,FC,x3,fe,VC,_v,YC,KC,vv,JC,XC,mc,QC,ex,R3,nt,mn,jv,Tr,sx,gv,tx,I3,Ar,ax,Sr,nx,U3,_n,ox,yv,lx,rx,G3,_c,px,L3,Cr,M3,ds,ix,wv,ux,cx,bv,hx,fx,Z3,vc,N3,ot,vn,Ev,xr,dx,qv,mx,H3,jc,_x,B3,jn,vx,gc,jx,gx,W3,Rr,F3,yc,yx,V3,gn,wx,$v,bx,Ex,Y3,Ir,K3,wc,qx,J3,bc,$x,X3,lt,yn,kv,Ur,kx,Pv,Px,Q3,Ec,Dx,e0,qc,zx,s0,Gr,t0,$c,Ox,a0,kc,Tx,n0,Pc,Ax,o0,Dc,Sx,l0,Lr,r0,zc,Cx,p0,wn,xx,Mr,Rx,Ix,i0,rt,bn,Dv,Zr,Ux,zv,Gx,u0,Oc,Lx,c0,Tc,Mx,h0,H,Ov,Tv,Zx,Nx,Av,Te,Hx,Ac,Bx,Wx,Sc,Fx,Vx,Cc,Yx,Kx,Jx,Nr,Sv,Xx,Qx,Hr,eR,Cv,Br,sR,Wr,tR,aR,nR,xv,Rv,oR,lR,Iv,Fr,rR,Vr,pR,iR,f0,xc,uR,d0,En,pt,Uv,cR,hR,Gv,fR,dR,Lv,mR,_R,Mv,Yr,vR,Kr,jR,gR,m0,it,qn,Zv,Jr,yR,Nv,wR,_0,ut,$n,Hv,Xr,bR,Qr,ER,Bv,qR,$R,v0,B,kR,Wv,PR,DR,Fv,zR,OR,Vv,TR,AR,Yv,SR,CR,ep,xR,RR,j0,ct,kn,Kv,sp,IR,Rc,UR,Jv,GR,g0,Ic,LR,y0,Uc,MR,w0,tp,b0,Pn,ZR,Xv,NR,HR,E0,ap,q0,Gc,BR,$0,Lc,WR,k0,ms,FR,Qv,VR,YR,ej,KR,JR,P0,ht,Dn,sj,np,XR,tj,QR,D0,_s,ft,eI,Mc,sI,tI,aj,aI,nI,oI,op,lI,lp,rI,pI,iI,dt,uI,Zc,cI,hI,rp,fI,dI,z0,Nc,O0,mt,zn,nj,pp,mI,oj,_I,T0,de,vI,Hc,jI,gI,Bc,yI,wI,lj,bI,EI,A0,On,qI,Wc,$I,kI,S0,vs,PI,Fc,DI,zI,Vc,OI,TI,C0,Tn,AI,rj,SI,CI,x0,Yc,xI,R0,ip,I0,Kc,RI,U0,up,G0,me,II,Jc,UI,GI,cp,LI,MI,pj,ZI,NI,L0,_t,An,ij,hp,HI,uj,BI,M0,P,fp,WI,cj,FI,VI,Ae,YI,hj,KI,JI,fj,XI,QI,dj,eU,sU,tU,_e,Xc,aU,nU,mj,oU,lU,Qc,rU,pU,_j,iU,uU,cU,js,dp,hU,vj,fU,dU,vt,mU,jj,_U,vU,gj,jU,gU,yU,Sn,mp,wU,_p,bU,yj,EU,qU,$U,Cn,vp,kU,jt,PU,wj,DU,zU,bj,OU,TU,AU,xn,jp,SU,gt,CU,Ej,xU,RU,qj,IU,UU,Z0,yt,Rn,$j,gp,GU,kj,LU,N0,In,MU,eh,ZU,NU,H0,sh,HU,B0,th,BU,W0,ah,WU,F0,Un,Pj,FU,VU,Dj,YU,V0,yp,Y0,Gn,KU,zj,JU,XU,K0,wp,J0,nh,QU,X0,wt,Ln,Oj,bp,eG,Tj,sG,Q0,ve,Aj,Ep,tG,aG,Sj,qp,nG,oG,Cj,$p,lG,rG,xj,kp,pG,eE,oh,iG,sE,gs,Rj,Pp,uG,cG,Ij,Dp,hG,fG,Uj,zp,dG,tE,ys,mG,lh,_G,vG,Op,jG,gG,aE;return z=new y({}),po=new y({}),io=new y({}),uo=new g({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),co=new g({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),mo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),_o=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),vo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),go=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),yo=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),wo=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),Eo=new y({}),$o=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),ko=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Do=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),Oo=new y({}),To=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config "ro-en" \\
--source_lang en --target_lang ro`,highlighted:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero2.json \\
--model_name_or_path t5-small --per_device_train_batch_size 1 \\
--output_dir output_dir --overwrite_output_dir --fp16 \\
--do_train --max_train_samples 500 --num_train_epochs 1 \\
--dataset_name wmt16 --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> \\
--source_lang en --target_lang ro`}}),So=new g({props:{code:`{
  "zero_optimization": {
     "stage": 2,
     "offload_optimizer": {
         "device": "cpu",
         "pin_memory": true
     },
     "allgather_partitions": true,
     "allgather_bucket_size": 2e8,
     "reduce_scatter": true,
     "reduce_bucket_size": 2e8,
     "overlap_comm": true,
     "contiguous_gradients": true
  }
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
     <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
     <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
     <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ro=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),Io=new y({}),Uo=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
# This emulates a launcher in the notebook
import os

os.environ["MASTER_ADDR"] = "localhost"
os.environ["MASTER_PORT"] = "9994"  # modify if RuntimeError: Address already in use
os.environ["RANK"] = "0"
os.environ["LOCAL_RANK"] = "0"
os.environ["WORLD_SIZE"] = "1"

# Now proceed as normal, plus pass the deepspeed config file
training_args = TrainingArguments(..., deepspeed="ds_config_zero3.json")
trainer = Trainer(...)
trainer.train()`,highlighted:`<span class="hljs-comment"># DeepSpeed requires a distributed environment even when only one process is used.</span>
<span class="hljs-comment"># This emulates a launcher in the notebook</span>
<span class="hljs-keyword">import</span> os

os.environ[<span class="hljs-string">&quot;MASTER_ADDR&quot;</span>] = <span class="hljs-string">&quot;localhost&quot;</span>
os.environ[<span class="hljs-string">&quot;MASTER_PORT&quot;</span>] = <span class="hljs-string">&quot;9994&quot;</span>  <span class="hljs-comment"># modify if RuntimeError: Address already in use</span>
os.environ[<span class="hljs-string">&quot;RANK&quot;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&quot;LOCAL_RANK&quot;</span>] = <span class="hljs-string">&quot;0&quot;</span>
os.environ[<span class="hljs-string">&quot;WORLD_SIZE&quot;</span>] = <span class="hljs-string">&quot;1&quot;</span>

<span class="hljs-comment"># Now proceed as normal, plus pass the deepspeed config file</span>
training_args = TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;ds_config_zero3.json&quot;</span>)
trainer = Trainer(...)
trainer.train()`}}),Go=new g({props:{code:`%%bash
cat <<'EOT' > ds_config_zero3.json
{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}
EOT`,highlighted:`%%bash
cat &lt;&lt;<span class="hljs-string">&#x27;EOT&#x27;</span> &gt; ds_config_zero3.json
{
    <span class="hljs-string">&quot;fp16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;loss_scale&quot;</span>: <span class="hljs-number">0</span>,
        <span class="hljs-string">&quot;loss_scale_window&quot;</span>: <span class="hljs-number">1000</span>,
        <span class="hljs-string">&quot;initial_scale_power&quot;</span>: <span class="hljs-number">16</span>,
        <span class="hljs-string">&quot;hysteresis&quot;</span>: <span class="hljs-number">2</span>,
        <span class="hljs-string">&quot;min_loss_scale&quot;</span>: <span class="hljs-number">1</span>
    },

    <span class="hljs-string">&quot;optimizer&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;AdamW&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;betas&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;eps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;weight_decay&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;scheduler&quot;</span>: {
        <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;WarmupLR&quot;</span>,
        <span class="hljs-string">&quot;params&quot;</span>: {
            <span class="hljs-string">&quot;warmup_min_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_max_lr&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
            <span class="hljs-string">&quot;warmup_num_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>
        }
    },

    <span class="hljs-string">&quot;zero_optimization&quot;</span>: {
        <span class="hljs-string">&quot;stage&quot;</span>: <span class="hljs-number">3</span>,
        <span class="hljs-string">&quot;offload_optimizer&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;offload_param&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: true
        },
        <span class="hljs-string">&quot;overlap_comm&quot;</span>: true,
        <span class="hljs-string">&quot;contiguous_gradients&quot;</span>: true,
        <span class="hljs-string">&quot;sub_group_size&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;reduce_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_prefetch_bucket_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_param_persistence_threshold&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
        <span class="hljs-string">&quot;stage3_max_live_parameters&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_max_reuse_distance&quot;</span>: <span class="hljs-number">1e9</span>,
        <span class="hljs-string">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span>: true
    },

    <span class="hljs-string">&quot;gradient_accumulation_steps&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;gradient_clipping&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-string">&quot;auto&quot;</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: false
}
EOT`}}),Lo=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),Mo=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),Zo=new y({}),Bo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),Wo=new g({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),Vo=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),Yo=new y({}),Ko=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Jo=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Xo=new y({}),aa=new $G({props:{warning:!0,$$slots:{default:[HK]},$$scope:{ctx:Et}}}),el=new y({}),nl=new y({}),ol=new g({props:{code:`{
    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 5e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 5e8,
        "contiguous_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ll=new g({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),rl=new y({}),pl=new g({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),jl=new y({}),gl=new g({props:{code:`{
    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 4,
            "fast_init": false
        },
        "offload_param": {
            "device": "nvme",
            "nvme_path": "/local_nvme",
            "pin_memory": true,
            "buffer_count": 5,
            "buffer_size": 1e8,
            "max_in_cpu": 1e9
        },
        "aio": {
            "block_size": 262144,
            "queue_depth": 32,
            "thread_count": 1,
            "single_submit": false,
            "overlap_events": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;fast_init&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;nvme_path&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;/local_nvme&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;buffer_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;max_in_cpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;aio&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;block_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">262144</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;queue_depth&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">32</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;thread_count&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;single_submit&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;overlap_events&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
<span class="hljs-punctuation">}</span>`}}),El=new y({}),$l=new y({}),kl=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Pl=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 2,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "allgather_partitions": true,
        "allgather_bucket_size": 2e8,
        "overlap_comm": true,
        "reduce_scatter": true,
        "reduce_bucket_size": 2e8,
        "contiguous_gradients": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_partitions&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;allgather_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_scatter&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2e8</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Dl=new y({}),zl=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": "auto",
            "betas": "auto",
            "eps": "auto",
            "weight_decay": "auto"
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": "auto",
            "warmup_max_lr": "auto",
            "warmup_num_steps": "auto"
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": "auto",
        "stage3_prefetch_bucket_size": "auto",
        "stage3_param_persistence_threshold": "auto",
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "gradient_accumulation_steps": "auto",
    "gradient_clipping": "auto",
    "steps_per_print": 2000,
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto",
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Ol=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    },

    "optimizer": {
        "type": "AdamW",
        "params": {
            "lr": 3e-5,
            "betas": [0.8, 0.999],
            "eps": 1e-8,
            "weight_decay": 3e-7
        }
    },

    "scheduler": {
        "type": "WarmupLR",
        "params": {
            "warmup_min_lr": 0,
            "warmup_max_lr": 3e-5,
            "warmup_num_steps": 500
        }
    },

    "zero_optimization": {
        "stage": 3,
        "offload_optimizer": {
            "device": "cpu",
            "pin_memory": true
        },
        "offload_param": {
            "device": "cpu",
            "pin_memory": true
        },
        "overlap_comm": true,
        "contiguous_gradients": true,
        "sub_group_size": 1e9,
        "reduce_bucket_size": 1e6,
        "stage3_prefetch_bucket_size": 0.94e6,
        "stage3_param_persistence_threshold": 1e4,
        "stage3_max_live_parameters": 1e9,
        "stage3_max_reuse_distance": 1e9,
        "stage3_gather_16bit_weights_on_model_save": true
    },

    "steps_per_print": 2000,
    "wall_clock_breakdown": false
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-5</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">500</span>
        <span class="hljs-punctuation">}</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;offload_param&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
            <span class="hljs-attr">&quot;device&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;cpu&quot;</span><span class="hljs-punctuation">,</span>
            <span class="hljs-attr">&quot;pin_memory&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
        <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;overlap_comm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;contiguous_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;sub_group_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;reduce_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_prefetch_bucket_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.94e6</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_param_persistence_threshold&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e4</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_live_parameters&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_max_reuse_distance&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e9</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>

    <span class="hljs-attr">&quot;steps_per_print&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2000</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;wall_clock_breakdown&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span>
<span class="hljs-punctuation">}</span>`}}),Tl=new y({}),Al=new y({}),Cl=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": "auto",
         "betas": "auto",
         "eps": "auto",
         "weight_decay": "auto"
       }
   }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Gl=new g({props:{code:`{
   "optimizer": {
       "type": "AdamW",
       "params": {
         "lr": 0.001,
         "betas": [0.8, 0.999],
         "eps": 1e-8,
         "weight_decay": 3e-7
       }
   }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
       <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;AdamW&quot;</span><span class="hljs-punctuation">,</span>
       <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;betas&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-number">0.8</span><span class="hljs-punctuation">,</span> <span class="hljs-number">0.999</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;eps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1e-8</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;weight_decay&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3e-7</span>
       <span class="hljs-punctuation">}</span>
   <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ll=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),Ml=new y({}),Hl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Bl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupLR",
         "params": {
             "warmup_min_lr": 0,
             "warmup_max_lr": 0.001,
             "warmup_num_steps": 1000
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0.001</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Wl=new g({props:{code:`{
   "scheduler": {
         "type": "WarmupDecayLR",
         "params": {
             "last_batch_iteration": -1,
             "total_num_steps": "auto",
             "warmup_min_lr": "auto",
             "warmup_max_lr": "auto",
             "warmup_num_steps": "auto"
         }
     }
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;scheduler&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
         <span class="hljs-attr">&quot;type&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;WarmupDecayLR&quot;</span><span class="hljs-punctuation">,</span>
         <span class="hljs-attr">&quot;params&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
             <span class="hljs-attr">&quot;last_batch_iteration&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">-1</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;total_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_min_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_max_lr&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
             <span class="hljs-attr">&quot;warmup_num_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
         <span class="hljs-punctuation">}</span>
     <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Fl=new y({}),Vl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Kl=new y({}),Jl=new y({}),Xl=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ql=new g({props:{code:`{
    "fp16": {
        "enabled": true,
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),sr=new y({}),tr=new g({props:{code:`{
    "bf16": {
        "enabled": "auto"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ar=new g({props:{code:`{
    "bf16": {
        "enabled": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Na=new $G({props:{$$slots:{default:[BK]},$$scope:{ctx:Et}}}),nr=new y({}),or=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),lr=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),pr=new y({}),ir=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ur=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),cr=new y({}),hr=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),fr=new g({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),dr=new y({}),mr=new g({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),_r=new g({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),vr=new y({}),jr=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),yr=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),wr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),nn=new $G({props:{$$slots:{default:[WK]},$$scope:{ctx:Et}}}),br=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),Er=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`,highlighted:`$ <span class="hljs-built_in">ls</span> -l output_dir/checkpoint-1/
-rw-rw-r-- 1 stas stas 1.4K Mar 27 20:42 config.json
drwxrwxr-x 2 stas stas 4.0K Mar 25 19:52 global_step1/
-rw-rw-r-- 1 stas stas   12 Mar 27 13:16 latest
-rw-rw-r-- 1 stas stas 827K Mar 27 20:42 optimizer.pt
-rw-rw-r-- 1 stas stas 231M Mar 27 20:42 pytorch_model.bin
-rw-rw-r-- 1 stas stas  623 Mar 27 20:42 scheduler.pt
-rw-rw-r-- 1 stas stas 1.8K Mar 27 20:42 special_tokens_map.json
-rw-rw-r-- 1 stas stas 774K Mar 27 20:42 spiece.model
-rw-rw-r-- 1 stas stas 1.9K Mar 27 20:42 tokenizer_config.json
-rw-rw-r-- 1 stas stas  339 Mar 27 20:42 trainer_state.json
-rw-rw-r-- 1 stas stas 2.3K Mar 27 20:42 training_args.bin
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),qr=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),kr=new y({}),Pr=new y({}),Dr=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),zr=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Tr=new y({}),Cr=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),xr=new y({}),Rr=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),Ir=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config "ro-en" --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix "translate English to Romanian: "`,highlighted:`deepspeed examples/pytorch/translation/run_translation.py \\
--deepspeed tests/deepspeed/ds_config_zero3.json \\
--model_name_or_path t5-small --output_dir output_dir \\
--do_eval --max_eval_samples 50 --warmup_steps 50  \\
--max_source_length 128 --val_max_target_length 128 \\
--overwrite_output_dir --per_device_eval_batch_size 4 \\
--predict_with_generate --dataset_config <span class="hljs-string">&quot;ro-en&quot;</span> --fp16 \\
--source_lang en --target_lang ro --dataset_name wmt16 \\
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),Ur=new y({}),Gr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained("bigscience/T0_3B"); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=1, num_nodes=1)'
[...]
Estimated memory needed for params, optim states and gradients for a:
HW: Setup with 1 node, 1 GPU per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.37GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=1
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`,highlighted:`$ python -c <span class="hljs-string">&#x27;from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained(&quot;bigscience/T0_3B&quot;); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=1, num_nodes=1)&#x27;</span>
[...]
Estimated memory needed <span class="hljs-keyword">for</span> params, optim states and gradients <span class="hljs-keyword">for</span> a:
HW: Setup with 1 node, 1 GPU per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   5.43GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.37GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=1
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),Lr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained("bigscience/T0_3B"); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=2, num_nodes=1)'
[...]
Estimated memory needed for params, optim states and gradients for a:
HW: Setup with 1 node, 2 GPUs per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.74GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=1
   31.11GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=0
`,highlighted:`$ python -c <span class="hljs-string">&#x27;from transformers import AutoModel; \\
from deepspeed.runtime.zero.stage3 import estimate_zero3_model_states_mem_needs_all_live; \\
model = AutoModel.from_pretrained(&quot;bigscience/T0_3B&quot;); \\
estimate_zero3_model_states_mem_needs_all_live(model, num_gpus_per_node=2, num_nodes=1)&#x27;</span>
[...]
Estimated memory needed <span class="hljs-keyword">for</span> params, optim states and gradients <span class="hljs-keyword">for</span> a:
HW: Setup with 1 node, 2 GPUs per node.
SW: Model with 2783M total params, 65M largest layer params.
  per CPU  |  per GPU |   Options
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=1
   70.00GB |   0.25GB | offload_param=cpu , offload_optimizer=cpu , zero_init=0
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=1
   62.23GB |   2.84GB | offload_param=none, offload_optimizer=cpu , zero_init=0
    0.74GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=1
   31.11GB |  23.58GB | offload_param=none, offload_optimizer=none, zero_init=0
`}}),Zr=new y({}),Hr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Jr=new y({}),Xr=new y({}),sp=new y({}),tp=new g({props:{code:`{
    "fp16": {
        "enabled": "auto",
        "loss_scale": 0,
        "loss_scale_window": 1000,
        "initial_scale_power": 16,
        "hysteresis": 2,
        "min_loss_scale": 1
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">0</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;loss_scale_window&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1000</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;initial_scale_power&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">16</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;hysteresis&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">2</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;min_loss_scale&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),ap=new g({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 262144, reducing to 262144
  1%|\u258C                                                                                                                    | 1/189 [00:00<01:26,  2.17it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 262144, reducing to 131072.0
  1%|\u2588\u258F
 [...]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 14%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C                                                                                                   | 27/189 [00:14<01:13,  2.21it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 15%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258F                                                                                                  | 28/189 [00:14<01:13,  2.18it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
 15%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A                                                                                                  | 29/189 [00:15<01:13,  2.18it/s]
 [deepscale] OVERFLOW! Rank 0 Skipping step. Attempted loss scale: 1, reducing to 1
[...]`,highlighted:`<span class="hljs-number">0</span>%|                                                                                                                             | <span class="hljs-number">0</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">00</span>&lt;?, ?it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">262144</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">262144</span>
  <span class="hljs-number">1</span>%|\u258C                                                                                                                    | <span class="hljs-number">1</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">00</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">26</span>,  <span class="hljs-number">2.17</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">262144</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">131072.0</span>
  <span class="hljs-number">1</span>%|\u2588\u258F
 [...]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">14</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258C                                                                                                   | <span class="hljs-number">27</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">14</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.21</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">15</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258F                                                                                                  | <span class="hljs-number">28</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">14</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.18</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
 <span class="hljs-number">15</span>%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258A                                                                                                  | <span class="hljs-number">29</span>/<span class="hljs-number">189</span> [<span class="hljs-number">00</span>:<span class="hljs-number">15</span>&lt;<span class="hljs-number">01</span>:<span class="hljs-number">13</span>,  <span class="hljs-number">2.18</span>it/s]
 [deepscale] OVERFLOW! <span class="hljs-built_in">Rank</span> <span class="hljs-number">0</span> Skipping <span class="hljs-built_in">step</span>. Attempted loss scale: <span class="hljs-number">1</span>, reducing <span class="hljs-keyword">to</span> <span class="hljs-number">1</span>
[...]`}}),np=new y({}),pp=new y({}),ip=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel
import deepspeed

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model to detect zero 3
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
model = AutoModel.from_pretrained("gpt2")
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel
<span class="hljs-keyword">import</span> deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model to detect zero 3</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),up=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
from transformers import AutoModel, AutoConfig
import deepspeed

ds_config = {...}  # deepspeed config object or path to the file
# must run before instantiating the model to detect zero 3
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive
config = AutoConfig.from_pretrained("gpt2")
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoConfig
<span class="hljs-keyword">import</span> deepspeed

ds_config = {...}  <span class="hljs-comment"># deepspeed config object or path to the file</span>
<span class="hljs-comment"># must run before instantiating the model to detect zero 3</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>
config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
model = AutoModel.from_config(config)
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),hp=new y({}),fp=new Hj({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17553/src/transformers/deepspeed.py#L39"}}),dp=new Hj({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17553/src/transformers/deepspeed.py#L113"}}),mp=new Hj({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17553/src/transformers/deepspeed.py#L104"}}),vp=new Hj({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17553/src/transformers/deepspeed.py#L145"}}),jp=new Hj({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17553/src/transformers/deepspeed.py#L136"}}),gp=new y({}),yp=new g({props:{code:`#!/usr/bin/env python

# This script demonstrates how to use Deepspeed ZeRO in an inference mode when one can't fit a model
# into a single GPU
#
# 1. Use 1 GPU with CPU offload
# 2. Or use multiple GPUs instead
#
# First you need to install deepspeed: pip install deepspeed
#
# Here we use a 3B "bigscience/T0_3B" model which needs about 15GB GPU RAM - so 1 largish or 2
# small GPUs can handle it. or 1 small GPU and a lot of CPU memory.
#
# To use a larger model like "bigscience/T0" which needs about 50GB, unless you have an 80GB GPU -
# you will need 2-4 gpus. And then you can adapt the script to handle more gpus if you want to
# process multiple inputs at once.
#
# The provided deepspeed config also activates CPU memory offloading, so chances are that if you
# have a lot of available CPU memory and you don't mind a slowdown you should be able to load a
# model that doesn't normally fit into a single GPU. If you have enough GPU memory the program will
# run faster if you don't want offload to CPU - so disable that section then.
#
# To deploy on 1 gpu:
#
# deepspeed --num_gpus 1 t0.py
# or:
# python -m torch.distributed.run --nproc_per_node=1 t0.py
#
# To deploy on 2 gpus:
#
# deepspeed --num_gpus 2 t0.py
# or:
# python -m torch.distributed.run --nproc_per_node=2 t0.py


from transformers import AutoTokenizer, AutoConfig, AutoModelForSeq2SeqLM
from transformers.deepspeed import HfDeepSpeedConfig
import deepspeed
import os
import torch

os.environ["TOKENIZERS_PARALLELISM"] = "false"  # To avoid warnings about parallelism in tokenizers

# distributed setup
local_rank = int(os.getenv("LOCAL_RANK", "0"))
world_size = int(os.getenv("WORLD_SIZE", "1"))
torch.cuda.set_device(local_rank)
deepspeed.init_distributed()

model_name = "bigscience/T0_3B"

config = AutoConfig.from_pretrained(model_name)
model_hidden_size = config.d_model

# batch size has to be divisible by world_size, but can be bigger than world_size
train_batch_size = 1 * world_size

# ds_config notes
#
# - enable bf16 if you use Ampere or higher GPU - this will run in mixed precision and will be
# faster.
#
# - for older GPUs you can enable fp16, but it'll only work for non-bf16 pretrained models - e.g.
# all official t5 models are bf16-pretrained
#
# - set offload_param.device to "none" or completely remove the \`offload_param\` section if you don't
# - want CPU offload
#
# - if using \`offload_param\` you can manually finetune stage3_param_persistence_threshold to control
# - which params should remain on gpus - the larger the value the smaller the offload size
#
# For indepth info on Deepspeed config see
# https://huggingface.co/docs/transformers/main/main_classes/deepspeed

# keeping the same format as json for consistency, except it uses lower case for true/false
# fmt: off
ds_config = {
    "fp16": {
        "enabled": False
    },
    "bf16": {
        "enabled": False
    },
    "zero_optimization": {
        "stage": 3,
        "offload_param": {
            "device": "cpu",
            "pin_memory": True
        },
        "overlap_comm": True,
        "contiguous_gradients": True,
        "reduce_bucket_size": model_hidden_size * model_hidden_size,
        "stage3_prefetch_bucket_size": 0.9 * model_hidden_size * model_hidden_size,
        "stage3_param_persistence_threshold": 10 * model_hidden_size
    },
    "steps_per_print": 2000,
    "train_batch_size": train_batch_size,
    "train_micro_batch_size_per_gpu": 1,
    "wall_clock_breakdown": False
}
# fmt: on

# next line instructs transformers to partition the model directly over multiple gpus using
# deepspeed.zero.Init when model's \`from_pretrained\` method is called.
#
# **it has to be run before loading the model AutoModelForSeq2SeqLM.from_pretrained(model_name)**
#
# otherwise the model will first be loaded normally and only partitioned at forward time which is
# less efficient and when there is little CPU RAM may fail
dschf = HfDeepSpeedConfig(ds_config)  # keep this object alive

# now a model can be loaded.
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

# initialise Deepspeed ZeRO and store only the engine object
ds_engine = deepspeed.initialize(model=model, config_params=ds_config)[0]
ds_engine.module.eval()  # inference

# Deepspeed ZeRO can process unrelated inputs on each GPU. So for 2 gpus you process 2 inputs at once.
# If you use more GPUs adjust for more.
# And of course if you have just one input to process you then need to pass the same string to both gpus
# If you use only one GPU, then you will have only rank 0.
rank = torch.distributed.get_rank()
if rank == 0:
    text_in = "Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy"
elif rank == 1:
    text_in = "Is this review positive or negative? Review: this is the worst restaurant ever"

tokenizer = AutoTokenizer.from_pretrained(model_name)
inputs = tokenizer.encode(text_in, return_tensors="pt").to(device=local_rank)
with torch.no_grad():
    outputs = ds_engine.module.generate(inputs, synced_gpus=True)
text_out = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(f"rank{rank}:\\n   in={text_in}\\n  out={text_out}")`,highlighted:`<span class="hljs-comment">#!/usr/bin/env python</span>

<span class="hljs-comment"># This script demonstrates how to use Deepspeed ZeRO in an inference mode when one can&#x27;t fit a model</span>
<span class="hljs-comment"># into a single GPU</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># 1. Use 1 GPU with CPU offload</span>
<span class="hljs-comment"># 2. Or use multiple GPUs instead</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># First you need to install deepspeed: pip install deepspeed</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># Here we use a 3B &quot;bigscience/T0_3B&quot; model which needs about 15GB GPU RAM - so 1 largish or 2</span>
<span class="hljs-comment"># small GPUs can handle it. or 1 small GPU and a lot of CPU memory.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To use a larger model like &quot;bigscience/T0&quot; which needs about 50GB, unless you have an 80GB GPU -</span>
<span class="hljs-comment"># you will need 2-4 gpus. And then you can adapt the script to handle more gpus if you want to</span>
<span class="hljs-comment"># process multiple inputs at once.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># The provided deepspeed config also activates CPU memory offloading, so chances are that if you</span>
<span class="hljs-comment"># have a lot of available CPU memory and you don&#x27;t mind a slowdown you should be able to load a</span>
<span class="hljs-comment"># model that doesn&#x27;t normally fit into a single GPU. If you have enough GPU memory the program will</span>
<span class="hljs-comment"># run faster if you don&#x27;t want offload to CPU - so disable that section then.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To deploy on 1 gpu:</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># deepspeed --num_gpus 1 t0.py</span>
<span class="hljs-comment"># or:</span>
<span class="hljs-comment"># python -m torch.distributed.run --nproc_per_node=1 t0.py</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># To deploy on 2 gpus:</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># deepspeed --num_gpus 2 t0.py</span>
<span class="hljs-comment"># or:</span>
<span class="hljs-comment"># python -m torch.distributed.run --nproc_per_node=2 t0.py</span>


<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoConfig, AutoModelForSeq2SeqLM
<span class="hljs-keyword">from</span> transformers.deepspeed <span class="hljs-keyword">import</span> HfDeepSpeedConfig
<span class="hljs-keyword">import</span> deepspeed
<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">import</span> torch

os.environ[<span class="hljs-string">&quot;TOKENIZERS_PARALLELISM&quot;</span>] = <span class="hljs-string">&quot;false&quot;</span>  <span class="hljs-comment"># To avoid warnings about parallelism in tokenizers</span>

<span class="hljs-comment"># distributed setup</span>
local_rank = <span class="hljs-built_in">int</span>(os.getenv(<span class="hljs-string">&quot;LOCAL_RANK&quot;</span>, <span class="hljs-string">&quot;0&quot;</span>))
world_size = <span class="hljs-built_in">int</span>(os.getenv(<span class="hljs-string">&quot;WORLD_SIZE&quot;</span>, <span class="hljs-string">&quot;1&quot;</span>))
torch.cuda.set_device(local_rank)
deepspeed.init_distributed()

model_name = <span class="hljs-string">&quot;bigscience/T0_3B&quot;</span>

config = AutoConfig.from_pretrained(model_name)
model_hidden_size = config.d_model

<span class="hljs-comment"># batch size has to be divisible by world_size, but can be bigger than world_size</span>
train_batch_size = <span class="hljs-number">1</span> * world_size

<span class="hljs-comment"># ds_config notes</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - enable bf16 if you use Ampere or higher GPU - this will run in mixed precision and will be</span>
<span class="hljs-comment"># faster.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - for older GPUs you can enable fp16, but it&#x27;ll only work for non-bf16 pretrained models - e.g.</span>
<span class="hljs-comment"># all official t5 models are bf16-pretrained</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - set offload_param.device to &quot;none&quot; or completely remove the \`offload_param\` section if you don&#x27;t</span>
<span class="hljs-comment"># - want CPU offload</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># - if using \`offload_param\` you can manually finetune stage3_param_persistence_threshold to control</span>
<span class="hljs-comment"># - which params should remain on gpus - the larger the value the smaller the offload size</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># For indepth info on Deepspeed config see</span>
<span class="hljs-comment"># https://huggingface.co/docs/transformers/main/main_classes/deepspeed</span>

<span class="hljs-comment"># keeping the same format as json for consistency, except it uses lower case for true/false</span>
<span class="hljs-comment"># fmt: off</span>
ds_config = {
    <span class="hljs-string">&quot;fp16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-literal">False</span>
    },
    <span class="hljs-string">&quot;bf16&quot;</span>: {
        <span class="hljs-string">&quot;enabled&quot;</span>: <span class="hljs-literal">False</span>
    },
    <span class="hljs-string">&quot;zero_optimization&quot;</span>: {
        <span class="hljs-string">&quot;stage&quot;</span>: <span class="hljs-number">3</span>,
        <span class="hljs-string">&quot;offload_param&quot;</span>: {
            <span class="hljs-string">&quot;device&quot;</span>: <span class="hljs-string">&quot;cpu&quot;</span>,
            <span class="hljs-string">&quot;pin_memory&quot;</span>: <span class="hljs-literal">True</span>
        },
        <span class="hljs-string">&quot;overlap_comm&quot;</span>: <span class="hljs-literal">True</span>,
        <span class="hljs-string">&quot;contiguous_gradients&quot;</span>: <span class="hljs-literal">True</span>,
        <span class="hljs-string">&quot;reduce_bucket_size&quot;</span>: model_hidden_size * model_hidden_size,
        <span class="hljs-string">&quot;stage3_prefetch_bucket_size&quot;</span>: <span class="hljs-number">0.9</span> * model_hidden_size * model_hidden_size,
        <span class="hljs-string">&quot;stage3_param_persistence_threshold&quot;</span>: <span class="hljs-number">10</span> * model_hidden_size
    },
    <span class="hljs-string">&quot;steps_per_print&quot;</span>: <span class="hljs-number">2000</span>,
    <span class="hljs-string">&quot;train_batch_size&quot;</span>: train_batch_size,
    <span class="hljs-string">&quot;train_micro_batch_size_per_gpu&quot;</span>: <span class="hljs-number">1</span>,
    <span class="hljs-string">&quot;wall_clock_breakdown&quot;</span>: <span class="hljs-literal">False</span>
}
<span class="hljs-comment"># fmt: on</span>

<span class="hljs-comment"># next line instructs transformers to partition the model directly over multiple gpus using</span>
<span class="hljs-comment"># deepspeed.zero.Init when model&#x27;s \`from_pretrained\` method is called.</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># **it has to be run before loading the model AutoModelForSeq2SeqLM.from_pretrained(model_name)**</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># otherwise the model will first be loaded normally and only partitioned at forward time which is</span>
<span class="hljs-comment"># less efficient and when there is little CPU RAM may fail</span>
dschf = HfDeepSpeedConfig(ds_config)  <span class="hljs-comment"># keep this object alive</span>

<span class="hljs-comment"># now a model can be loaded.</span>
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

<span class="hljs-comment"># initialise Deepspeed ZeRO and store only the engine object</span>
ds_engine = deepspeed.initialize(model=model, config_params=ds_config)[<span class="hljs-number">0</span>]
ds_engine.module.<span class="hljs-built_in">eval</span>()  <span class="hljs-comment"># inference</span>

<span class="hljs-comment"># Deepspeed ZeRO can process unrelated inputs on each GPU. So for 2 gpus you process 2 inputs at once.</span>
<span class="hljs-comment"># If you use more GPUs adjust for more.</span>
<span class="hljs-comment"># And of course if you have just one input to process you then need to pass the same string to both gpus</span>
<span class="hljs-comment"># If you use only one GPU, then you will have only rank 0.</span>
rank = torch.distributed.get_rank()
<span class="hljs-keyword">if</span> rank == <span class="hljs-number">0</span>:
    text_in = <span class="hljs-string">&quot;Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy&quot;</span>
<span class="hljs-keyword">elif</span> rank == <span class="hljs-number">1</span>:
    text_in = <span class="hljs-string">&quot;Is this review positive or negative? Review: this is the worst restaurant ever&quot;</span>

tokenizer = AutoTokenizer.from_pretrained(model_name)
inputs = tokenizer.encode(text_in, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device=local_rank)
<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = ds_engine.module.generate(inputs, synced_gpus=<span class="hljs-literal">True</span>)
text_out = tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),wp=new g({props:{code:`$ deepspeed --num_gpus 2 t0.py
rank0:
   in=Is this review positive or negative? Review: this is the best cast iron skillet you will ever buy
  out=Positive
rank1:
   in=Is this review positive or negative? Review: this is the worst restaurant ever
  out=negative`,highlighted:`$ deepspeed --num_gpus <span class="hljs-number">2</span> t0.py
rank0:
   <span class="hljs-keyword">in</span>=Is <span class="hljs-keyword">this</span> review positive or negative? Review: <span class="hljs-keyword">this</span> <span class="hljs-keyword">is</span> the best cast iron skillet you will ever buy
  <span class="hljs-keyword">out</span>=Positive
rank1:
   <span class="hljs-keyword">in</span>=Is <span class="hljs-keyword">this</span> review positive or negative? Review: <span class="hljs-keyword">this</span> <span class="hljs-keyword">is</span> the worst restaurant ever
  <span class="hljs-keyword">out</span>=negative`}}),bp=new y({}),{c(){w=o("meta"),C=u(),b=o("h1"),k=o("a"),ee=o("span"),f(z.$$.fragment),x=u(),se=o("span"),R=a("DeepSpeed Integration"),ae=u(),S=o("p"),E=o("a"),q=a("DeepSpeed"),Es=a(" implements everything described in the "),V=o("a"),qs=a("ZeRO paper"),L5=a(". Currently it provides full support for:"),Bj=u(),I=o("ol"),tf=o("li"),M5=a("Optimizer state partitioning (ZeRO stage 1)"),Z5=u(),af=o("li"),N5=a("Gradient partitioning (ZeRO stage 2)"),H5=u(),nf=o("li"),B5=a("Parameter partitioning (ZeRO stage 3)"),W5=u(),of=o("li"),F5=a("Custom mixed precision training handling"),V5=u(),lf=o("li"),Y5=a("A range of fast CUDA-extension-based optimizers"),K5=u(),rf=o("li"),J5=a("ZeRO-Offload to CPU and NVMe"),Wj=u(),Se=o("p"),X5=a("ZeRO-Offload has its own dedicated paper: "),ao=o("a"),Q5=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),e$=a(". And NVMe-support is described in the paper "),no=o("a"),s$=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),t$=a("."),Fj=u(),Up=o("p"),a$=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Vj=u(),Gp=o("p"),n$=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Yj=u(),qt=o("p"),o$=a("\u{1F917} Transformers integrates "),oo=o("a"),l$=a("DeepSpeed"),r$=a(" via 2 options:"),Kj=u(),$t=o("ol"),lo=o("li"),p$=a("Integration of the core DeepSpeed features via "),Lp=o("a"),i$=a("Trainer"),u$=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),c$=u(),Y=o("li"),h$=a("If you don\u2019t use "),Mp=o("a"),f$=a("Trainer"),d$=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),pf=o("code"),m$=a("from_pretrained"),_$=a(" and "),uf=o("code"),v$=a("from_config"),j$=a(` include integration of essential
parts of DeepSpeed like `),cf=o("code"),g$=a("zero.Init"),y$=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Zp=o("a"),w$=a("deepspeed-non-trainer-integration"),b$=a("."),Jj=u(),Np=o("p"),E$=a("What is integrated:"),Xj=u(),Hp=o("p"),q$=a("Training:"),Qj=u(),Bp=o("ol"),hf=o("li"),$$=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),eg=u(),Wp=o("p"),k$=a("Inference:"),sg=u(),Fp=o("ol"),ro=o("li"),P$=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Vp=o("a"),D$=a("deepspeed-zero-inference"),z$=a("."),tg=u(),Yp=o("p"),O$=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),ag=u(),Kp=o("a"),ng=u(),$s=o("h2"),kt=o("a"),ff=o("span"),f(po.$$.fragment),T$=u(),df=o("span"),A$=a("Trainer Deepspeed Integration"),og=u(),Jp=o("a"),lg=u(),ks=o("h3"),Pt=o("a"),mf=o("span"),f(io.$$.fragment),S$=u(),_f=o("span"),C$=a("Installation"),rg=u(),Xp=o("p"),x$=a("Install the library via pypi:"),pg=u(),f(uo.$$.fragment),ig=u(),Ce=o("p"),R$=a("or via "),vf=o("code"),I$=a("transformers"),U$=a("\u2019 "),jf=o("code"),G$=a("extras"),L$=a(":"),ug=u(),f(co.$$.fragment),cg=u(),xe=o("p"),M$=a("or find more details on "),ho=o("a"),Z$=a("the DeepSpeed\u2019s GitHub page"),N$=a(` and
`),fo=o("a"),H$=a("advanced install"),B$=a("."),hg=u(),Dt=o("p"),W$=a("If you\u2019re still struggling with the build, first make sure to read "),Qp=o("a"),F$=a("zero-install-notes"),V$=a("."),fg=u(),ei=o("p"),Y$=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),dg=u(),si=o("p"),K$=a("To make a local build for DeepSpeed:"),mg=u(),f(mo.$$.fragment),_g=u(),Re=o("p"),J$=a("If you intend to use NVMe offload you will also need to include "),gf=o("code"),X$=a("DS_BUILD_AIO=1"),Q$=a(` in the instructions above (and also
install `),yf=o("em"),e4=a("libaio-dev"),s4=a(" system-wide)."),vg=u(),zt=o("p"),t4=a("Edit "),wf=o("code"),a4=a("TORCH_CUDA_ARCH_LIST"),n4=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),jg=u(),f(_o.$$.fragment),gg=u(),Pe=o("p"),o4=a("So if you get "),bf=o("code"),l4=a("8, 6"),r4=a(", then use "),Ef=o("code"),p4=a('TORCH_CUDA_ARCH_LIST="8.6"'),i4=a(`. If you have multiple different cards, you can list all
of them like so `),qf=o("code"),u4=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),yg=u(),ti=o("p"),c4=a("If you need to use the same setup on multiple machines, make a binary wheel:"),wg=u(),f(vo.$$.fragment),bg=u(),Ie=o("p"),h4=a("it will generate something like "),$f=o("code"),f4=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),d4=a(` which now you can install
as `),kf=o("code"),m4=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),_4=a(" locally or on any other machine."),Eg=u(),Ot=o("p"),v4=a("Again, remember to ensure to adjust "),Pf=o("code"),j4=a("TORCH_CUDA_ARCH_LIST"),g4=a(" to the target architectures."),qg=u(),Ue=o("p"),y4=a("You can find the complete list of NVIDIA GPUs and their corresponding "),Df=o("strong"),w4=a("Compute Capabilities"),b4=a(` (same as arch in this
context) `),jo=o("a"),E4=a("here"),q4=a("."),$g=u(),ai=o("p"),$4=a("You can check the archs pytorch was built with using:"),kg=u(),f(go.$$.fragment),Pg=u(),ni=o("p"),k4=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Dg=u(),f(yo.$$.fragment),zg=u(),oi=o("p"),P4=a("If the output is:"),Og=u(),f(wo.$$.fragment),Tg=u(),Tt=o("p"),D4=a("then you know that this card\u2019s arch is "),zf=o("code"),z4=a("8.6"),O4=a("."),Ag=u(),At=o("p"),T4=a("You can also leave "),Of=o("code"),A4=a("TORCH_CUDA_ARCH_LIST"),S4=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Sg=u(),St=o("p"),C4=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),bo=o("a"),x4=a("Deepspeed"),R4=a(","),Cg=u(),li=o("a"),xg=u(),Ps=o("h3"),Ct=o("a"),Tf=o("span"),f(Eo.$$.fragment),I4=u(),Af=o("span"),U4=a("Deployment with multiple GPUs"),Rg=u(),xt=o("p"),G4=a("To deploy this feature with multiple GPUs adjust the "),ri=o("a"),L4=a("Trainer"),M4=a(` command line arguments as
following:`),Ig=u(),Rt=o("ol"),Ds=o("li"),Z4=a("replace "),Sf=o("code"),N4=a("python -m torch.distributed.launch"),H4=a(" with "),Cf=o("code"),B4=a("deepspeed"),W4=a("."),F4=u(),De=o("li"),V4=a("add a new argument "),xf=o("code"),Y4=a("--deepspeed ds_config.json"),K4=a(", where "),Rf=o("code"),J4=a("ds_config.json"),X4=a(` is the DeepSpeed configuration file as
documented `),qo=o("a"),Q4=a("here"),e6=a(". The file naming is up to you."),Ug=u(),pi=o("p"),s6=a("Therefore, if your original command line looked as follows:"),Gg=u(),f($o.$$.fragment),Lg=u(),ii=o("p"),t6=a("Now it should be:"),Mg=u(),f(ko.$$.fragment),Zg=u(),U=o("p"),a6=a("Unlike, "),If=o("code"),n6=a("torch.distributed.launch"),o6=a(" where you have to specify how many GPUs to use with "),Uf=o("code"),l6=a("--nproc_per_node"),r6=a(`, with the
`),Gf=o("code"),p6=a("deepspeed"),i6=a(" launcher you don\u2019t have to use the corresponding "),Lf=o("code"),u6=a("--num_gpus"),c6=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Po=o("a"),h6=a("here"),f6=a("."),Ng=u(),ne=o("p"),d6=a("In fact, you can continue using "),Mf=o("code"),m6=a("-m torch.distributed.launch"),_6=a(` with DeepSpeed as long as you don\u2019t need to use
`),Zf=o("code"),v6=a("deepspeed"),j6=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Nf=o("code"),g6=a("deepspeed"),y6=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Hg=u(),It=o("p"),w6=a("Here is an example of running "),Hf=o("code"),b6=a("run_translation.py"),E6=a(" under DeepSpeed deploying all available GPUs:"),Bg=u(),f(Do.$$.fragment),Wg=u(),Ut=o("p"),q6=a("Note that in the DeepSpeed documentation you are likely to see "),Bf=o("code"),$6=a("--deepspeed --deepspeed_config ds_config.json"),k6=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Fg=u(),Gt=o("p"),P6=a("For some practical usage examples, please, see this "),zo=o("a"),D6=a("post"),z6=a("."),Vg=u(),ui=o("a"),Yg=u(),zs=o("h3"),Lt=o("a"),Wf=o("span"),f(Oo.$$.fragment),O6=u(),Ff=o("span"),T6=a("Deployment with one GPU"),Kg=u(),Mt=o("p"),A6=a("To deploy DeepSpeed with one GPU adjust the "),ci=o("a"),S6=a("Trainer"),C6=a(" command line arguments as follows:"),Jg=u(),f(To.$$.fragment),Xg=u(),Ge=o("p"),x6=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Vf=o("code"),R6=a("--num_gpus=1"),I6=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),Ao=o("a"),U6=a("documentation"),G6=a(" discusses the launcher options."),Qg=u(),hi=o("p"),L6=a("Why would you want to use DeepSpeed with just one GPU?"),ey=u(),Zt=o("ol"),Yf=o("li"),M6=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),Z6=u(),Kf=o("li"),N6=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),sy=u(),fi=o("p"),H6=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),ty=u(),f(So.$$.fragment),ay=u(),di=o("p"),B6=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),ny=u(),Nt=o("p"),W6=a("For a practical usage example of this type of deployment, please, see this "),Co=o("a"),F6=a("post"),V6=a("."),oy=u(),mi=o("p"),Y6=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),ly=u(),_i=o("p"),K6=a("Notes:"),ry=u(),vi=o("ul"),Os=o("li"),xo=o("p"),J6=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Jf=o("code"),X6=a("CUDA_VISIBLE_DEVICES"),Q6=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),e7=u(),f(Ro.$$.fragment),s7=u(),Xf=o("p"),t7=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),py=u(),ji=o("a"),iy=u(),Ts=o("h3"),Ht=o("a"),Qf=o("span"),f(Io.$$.fragment),a7=u(),ed=o("span"),n7=a("Deployment in Notebooks"),uy=u(),Bt=o("p"),o7=a("The problem with running notebook cells as a script is that there is no normal "),sd=o("code"),l7=a("deepspeed"),r7=a(` launcher to rely on, so
under certain setups we have to emulate it.`),cy=u(),gi=o("p"),p7=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),hy=u(),f(Uo.$$.fragment),fy=u(),Wt=o("p"),i7=a("Note: "),td=o("code"),u7=a("..."),c7=a(" stands for the normal arguments that you\u2019d pass to the functions."),dy=u(),yi=o("p"),h7=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),my=u(),wi=o("p"),f7=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),_y=u(),f(Go.$$.fragment),vy=u(),Le=o("p"),d7=a("If the training script is in a normal file and not in the notebook cells, you can launch "),ad=o("code"),m7=a("deepspeed"),_7=a(` normally via
shell from a cell. For example, to use `),nd=o("code"),v7=a("run_translation.py"),j7=a(" you would launch it with:"),jy=u(),f(Lo.$$.fragment),gy=u(),Ft=o("p"),g7=a("or with "),od=o("code"),y7=a("%%bash"),w7=a(" magic, where you can write a multi-line code for the shell program to run:"),yy=u(),f(Mo.$$.fragment),wy=u(),bi=o("p"),b7=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),by=u(),Vt=o("p"),E7=a("Note: While "),ld=o("code"),q7=a("%%bash"),$7=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),Ey=u(),Ei=o("a"),qy=u(),As=o("h3"),Yt=o("a"),rd=o("span"),f(Zo.$$.fragment),k7=u(),pd=o("span"),P7=a("Configuration"),$y=u(),Kt=o("p"),D7=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),No=o("a"),z7=a("following documentation"),O7=a("."),ky=u(),Jt=o("p"),T7=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Ho=o("a"),A7=a(`the DeepSpeedExamples
repo`),S7=a(":"),Py=u(),f(Bo.$$.fragment),Dy=u(),Xt=o("p"),C7=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),id=o("code"),x7=a(".json"),R7=a(" files with:"),zy=u(),f(Wo.$$.fragment),Oy=u(),Qt=o("p"),I7=a("Some more examples are to be found in the "),Fo=o("a"),U7=a("main repo"),G7=a(" as well."),Ty=u(),qi=o("p"),L7=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),Ay=u(),oe=o("p"),M7=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),ud=o("code"),Z7=a("AdamW"),N7=a(" optimizer and "),cd=o("code"),H7=a("WarmupLR"),B7=a(` scheduler and will enable mixed
precision training if `),hd=o("code"),W7=a("--fp16"),F7=a(" is passed:"),Sy=u(),f(Vo.$$.fragment),Cy=u(),ea=o("p"),V7=a("When you execute the program, DeepSpeed will log the configuration it received from the "),$i=o("a"),Y7=a("Trainer"),K7=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),xy=u(),ki=o("a"),Ry=u(),Ss=o("h3"),sa=o("a"),fd=o("span"),f(Yo.$$.fragment),J7=u(),dd=o("span"),X7=a("Passing Configuration"),Iy=u(),G=o("p"),Q7=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Pi=o("a"),e8=a("Trainer"),s8=a(" via "),Di=o("a"),t8=a("TrainingArguments"),a8=a(" then for the "),md=o("code"),n8=a("deepspeed"),o8=a(` argument you can
pass a nested `),_d=o("code"),l8=a("dict"),r8=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),zi=o("a"),p8=a("TrainingArguments"),i8=a("."),Uy=u(),Oi=o("p"),u8=a("To summarize you can do:"),Gy=u(),f(Ko.$$.fragment),Ly=u(),Ti=o("p"),c8=a("or:"),My=u(),f(Jo.$$.fragment),Zy=u(),Ai=o("a"),Ny=u(),Cs=o("h3"),ta=o("a"),vd=o("span"),f(Xo.$$.fragment),h8=u(),jd=o("span"),f8=a("Shared Configuration"),Hy=u(),f(aa.$$.fragment),By=u(),Me=o("p"),d8=a("Some configuration values are required by both the "),Si=o("a"),m8=a("Trainer"),_8=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ci=o("a"),v8=a("Trainer"),j8=a(" command line arguments."),Wy=u(),na=o("p"),g8=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),xi=o("a"),y8=a("Trainer"),w8=a(` do the majority
of configuration for you.`),Fy=u(),Ze=o("p"),b8=a("Therefore, in the rest of this guide you will find a special configuration value: "),gd=o("code"),E8=a("auto"),q8=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ri=o("a"),$8=a("Trainer"),k8=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Vy=u(),Ii=o("p"),P8=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),Yy=u(),oa=o("p"),D8=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ui=o("a"),z8=a("TrainingArguments"),O8=a(" based on that. The steps are:"),Ky=u(),la=o("ol"),yd=o("li"),T8=a("Create or load the DeepSpeed configuration to be used as a master configuration"),A8=u(),Qo=o("li"),S8=a("Create the "),Gi=o("a"),C8=a("TrainingArguments"),x8=a(" object based on these values"),Jy=u(),le=o("p"),R8=a("Do note that some values, such as "),wd=o("code"),I8=a("scheduler.params.total_num_steps"),U8=a(` are calculated by
`),Li=o("a"),G8=a("Trainer"),L8=a(" during "),bd=o("code"),M8=a("train"),Z8=a(", but you can of course do the math yourself."),Xy=u(),Mi=o("a"),Qy=u(),xs=o("h3"),ra=o("a"),Ed=o("span"),f(el.$$.fragment),N8=u(),qd=o("span"),H8=a("ZeRO"),ew=u(),sl=o("p"),tl=o("a"),B8=a("Zero Redundancy Optimizer (ZeRO)"),W8=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),sw=u(),Ne=o("p"),F8=a("The "),$d=o("code"),V8=a("zero_optimization"),Y8=a(" section of the configuration file is the most important part ("),al=o("a"),K8=a("docs"),J8=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),tw=u(),pa=o("p"),X8=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Zi=o("a"),Q8=a("Trainer"),ek=a(` provides
no equivalent command line arguments.`),aw=u(),Ni=o("p"),sk=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),nw=u(),Hi=o("a"),ow=u(),Rs=o("h4"),ia=o("a"),kd=o("span"),f(nl.$$.fragment),tk=u(),Pd=o("span"),ak=a("ZeRO-2 Config"),lw=u(),Bi=o("p"),nk=a("The following is an example of configuration for ZeRO stage 2:"),rw=u(),f(ol.$$.fragment),pw=u(),Wi=o("p"),Dd=o("strong"),ok=a("Performance tuning:"),iw=u(),He=o("ul"),Is=o("li"),lk=a("enabling "),zd=o("code"),rk=a("offload_optimizer"),pk=a(" should reduce GPU RAM usage (it requires "),Od=o("code"),ik=a('"stage": 2'),uk=a(")"),ck=u(),L=o("li"),Td=o("code"),hk=a('"overlap_comm": true'),fk=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),Ad=o("code"),dk=a("overlap_comm"),mk=a(` uses 4.5x
the `),Sd=o("code"),_k=a("allgather_bucket_size"),vk=a(" and "),Cd=o("code"),jk=a("reduce_bucket_size"),gk=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),xd=o("code"),yk=a("5e8 x 2Bytes x 2 x 4.5"),wk=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Rd=o("code"),bk=a("2e8"),Ek=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),qk=u(),Id=o("li"),$k=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),uw=u(),Be=o("p"),kk=a("Additionally, "),Ud=o("code"),Pk=a("deepspeed==0.4.4"),Dk=a(" added a new option "),Gd=o("code"),zk=a("round_robin_gradients"),Ok=a(" which you can enable with:"),cw=u(),f(ll.$$.fragment),hw=u(),Fi=o("p"),Tk=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),fw=u(),Vi=o("a"),dw=u(),Us=o("h4"),ua=o("a"),Ld=o("span"),f(rl.$$.fragment),Ak=u(),Md=o("span"),Sk=a("ZeRO-3 Config"),mw=u(),Yi=o("p"),Ck=a("The following is an example of configuration for ZeRO stage 3:"),_w=u(),f(pl.$$.fragment),vw=u(),K=o("p"),xk=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Zd=o("code"),Rk=a('"device": "cpu"'),Ik=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Nd=o("code"),Uk=a("none"),Gk=a(" instead of "),Hd=o("code"),Lk=a("cpu"),Mk=a(" for the "),Bd=o("code"),Zk=a("device"),Nk=a(` entry. Offloading to
NVMe is discussed further down.`),jw=u(),We=o("p"),Hk=a("Pinned memory is enabled with "),Wd=o("code"),Bk=a("pin_memory"),Wk=a(" set to "),Fd=o("code"),Fk=a("true"),Vk=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),gw=u(),Ki=o("p"),Vd=o("strong"),Yk=a("Performance tuning:"),yw=u(),ca=o("ul"),il=o("li"),Yd=o("code"),Kk=a("stage3_max_live_parameters"),Jk=a(": "),Kd=o("code"),Xk=a("1e9"),Qk=u(),ul=o("li"),Jd=o("code"),e9=a("stage3_max_reuse_distance"),s9=a(": "),Xd=o("code"),t9=a("1e9"),ww=u(),M=o("p"),a9=a("If hitting OOM reduce "),Qd=o("code"),n9=a("stage3_max_live_parameters"),o9=a(" and "),em=o("code"),l9=a("stage3_max_reuse_distance"),r9=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),sm=o("code"),p9=a("1e9"),i9=a(` would consume ~2GB. The memory is shared by
`),tm=o("code"),u9=a("stage3_max_live_parameters"),c9=a(" and "),am=o("code"),h9=a("stage3_max_reuse_distance"),f9=a(", so it\u2019s not additive, it\u2019s just 2GB total."),bw=u(),ze=o("p"),nm=o("code"),d9=a("stage3_max_live_parameters"),m9=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),om=o("code"),_9=a("stage3_max_reuse_distance"),v9=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),lm=o("code"),j9=a("stage3_max_reuse_distance"),g9=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Ew=u(),Ji=o("p"),y9=a("The following configuration values depend on the model\u2019s hidden size:"),qw=u(),Fe=o("ul"),cl=o("li"),rm=o("code"),w9=a("reduce_bucket_size"),b9=a(": "),pm=o("code"),E9=a("hidden_size*hidden_size"),q9=u(),hl=o("li"),im=o("code"),$9=a("stage3_prefetch_bucket_size"),k9=a(": "),um=o("code"),P9=a("0.9 * hidden_size * hidden_size"),D9=u(),fl=o("li"),cm=o("code"),z9=a("stage3_param_persistence_threshold"),O9=a(": "),hm=o("code"),T9=a("10 * hidden_size"),$w=u(),Ve=o("p"),A9=a("therefore set these values to "),fm=o("code"),S9=a("auto"),C9=a(" and the "),Xi=o("a"),x9=a("Trainer"),R9=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),kw=u(),dl=o("p"),dm=o("code"),I9=a("stage3_gather_16bit_weights_on_model_save"),U9=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),Pw=u(),re=o("p"),G9=a("If you\u2019re migrating from ZeRO-2 configuration note that "),mm=o("code"),L9=a("allgather_partitions"),M9=a(", "),_m=o("code"),Z9=a("allgather_bucket_size"),N9=a(` and
`),vm=o("code"),H9=a("reduce_scatter"),B9=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Dw=u(),Qi=o("ul"),ml=o("li"),jm=o("code"),W9=a("sub_group_size"),F9=a(": "),gm=o("code"),V9=a("1e9"),zw=u(),Oe=o("p"),ym=o("code"),Y9=a("sub_group_size"),K9=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),wm=o("code"),J9=a("sub_group_size"),X9=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),bm=o("code"),Q9=a("sub_group_size"),eP=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Ow=u(),Ye=o("p"),sP=a("You can leave "),Em=o("code"),tP=a("sub_group_size"),aP=a(" to its default value of "),qm=o("em"),nP=a("1e9"),oP=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Tw=u(),ha=o("ol"),_l=o("li"),lP=a("Running into OOM during optimizer step: Reduce "),$m=o("code"),rP=a("sub_group_size"),pP=a(" to reduce memory utilization of temporary buffers"),iP=u(),vl=o("li"),uP=a("Optimizer Step is taking a long time: Increase "),km=o("code"),cP=a("sub_group_size"),hP=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),Aw=u(),eu=o("a"),Sw=u(),Gs=o("h3"),fa=o("a"),Pm=o("span"),f(jl.$$.fragment),fP=u(),Dm=o("span"),dP=a("NVMe Support"),Cw=u(),su=o("p"),mP=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),xw=u(),tu=o("p"),_P=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Rw=u(),f(gl.$$.fragment),Iw=u(),da=o("p"),vP=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),zm=o("em"),jP=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),gP=a(")."),Uw=u(),Ke=o("p"),yP=a("Here is the full documentation for offloading "),yl=o("a"),wP=a("optimizer states"),bP=a(" and "),wl=o("a"),EP=a("parameters"),qP=a("."),Gw=u(),ma=o("p"),$P=a("Make sure that your "),Om=o("code"),kP=a("nvme_path"),PP=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Lw=u(),Je=o("p"),DP=a("In order to figure out the optimal "),Tm=o("code"),zP=a("aio"),OP=a(` configuration block you must run a benchmark on your target setup, as
`),bl=o("a"),TP=a("explained here"),AP=a("."),Mw=u(),au=o("a"),Zw=u(),Ls=o("h4"),_a=o("a"),Am=o("span"),f(El.$$.fragment),SP=u(),Sm=o("span"),CP=a("ZeRO-2 vs ZeRO-3 Performance"),Nw=u(),nu=o("p"),xP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Hw=u(),ou=o("p"),RP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Bw=u(),va=o("ul"),Ms=o("li"),IP=a("set "),Cm=o("code"),UP=a("stage3_param_persistence_threshold"),GP=a(" to a very large number - larger than the largest parameter, e.g., "),xm=o("code"),LP=a("6 * hidden_size * hidden_size"),MP=a(". This will keep the parameters on the GPUs."),ZP=u(),ql=o("li"),NP=a("turn off "),Rm=o("code"),HP=a("offload_params"),BP=a(" since ZeRO-2 doesn\u2019t have that option."),Ww=u(),Xe=o("p"),WP=a("The performance will likely improve significantly with just "),Im=o("code"),FP=a("offload_params"),VP=a(` turned off, even if you don\u2019t change
`),Um=o("code"),YP=a("stage3_param_persistence_threshold"),KP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Fw=u(),lu=o("a"),Vw=u(),Zs=o("h4"),ja=o("a"),Gm=o("span"),f($l.$$.fragment),JP=u(),Lm=o("span"),XP=a("ZeRO-2 Example"),Yw=u(),ga=o("p"),QP=a("Here is a full ZeRO-2 auto-configuration file "),Mm=o("code"),eD=a("ds_config_zero2.json"),sD=a(":"),Kw=u(),f(kl.$$.fragment),Jw=u(),ya=o("p"),tD=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Zm=o("code"),aD=a("auto"),nD=a(" settings in it."),Xw=u(),f(Pl.$$.fragment),Qw=u(),ru=o("a"),e2=u(),Ns=o("h4"),wa=o("a"),Nm=o("span"),f(Dl.$$.fragment),oD=u(),Hm=o("span"),lD=a("ZeRO-3 Example"),s2=u(),ba=o("p"),rD=a("Here is a full ZeRO-3 auto-configuration file "),Bm=o("code"),pD=a("ds_config_zero3.json"),iD=a(":"),t2=u(),f(zl.$$.fragment),a2=u(),Ea=o("p"),uD=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Wm=o("code"),cD=a("auto"),hD=a(" settings in it."),n2=u(),f(Ol.$$.fragment),o2=u(),Hs=o("h3"),qa=o("a"),Fm=o("span"),f(Tl.$$.fragment),fD=u(),Vm=o("span"),dD=a("Optimizer and Scheduler"),l2=u(),$a=o("p"),mD=a("As long as you don\u2019t enable "),Ym=o("code"),_D=a("offload_optimizer"),vD=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),r2=u(),pu=o("p"),jD=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),p2=u(),ka=o("p"),gD=a("It is possible to use a non-DeepSpeed optimizer when "),Km=o("code"),yD=a("offload_optimizer"),wD=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),i2=u(),iu=o("a"),u2=u(),Bs=o("h4"),Pa=o("a"),Jm=o("span"),f(Al.$$.fragment),bD=u(),Xm=o("span"),ED=a("Optimizer"),c2=u(),Qe=o("p"),qD=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Qm=o("code"),$D=a("torch"),kD=a(". The full documentation is "),Sl=o("a"),PD=a("here"),DD=a("."),h2=u(),$=o("p"),zD=a("If you don\u2019t configure the "),e_=o("code"),OD=a("optimizer"),TD=a(" entry in the configuration file, the "),uu=o("a"),AD=a("Trainer"),SD=a(` will
automatically set it to `),s_=o("code"),CD=a("AdamW"),xD=a(` and will use the supplied values or the defaults for the following command line
arguments: `),t_=o("code"),RD=a("--learning_rate"),ID=a(", "),a_=o("code"),UD=a("--adam_beta1"),GD=a(", "),n_=o("code"),LD=a("--adam_beta2"),MD=a(", "),o_=o("code"),ZD=a("--adam_epsilon"),ND=a(" and "),l_=o("code"),HD=a("--weight_decay"),BD=a("."),f2=u(),es=o("p"),WD=a("Here is an example of the auto-configured "),r_=o("code"),FD=a("optimizer"),VD=a(" entry for "),p_=o("code"),YD=a("AdamW"),KD=a(":"),d2=u(),f(Cl.$$.fragment),m2=u(),cu=o("p"),JD=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),_2=u(),pe=o("ul"),xl=o("li"),i_=o("code"),XD=a("lr"),QD=a(" with the value of "),u_=o("code"),ez=a("--learning_rate"),sz=u(),Rl=o("li"),c_=o("code"),tz=a("betas"),az=a(" with the value of "),h_=o("code"),nz=a("--adam_beta1 --adam_beta2"),oz=u(),Il=o("li"),f_=o("code"),lz=a("eps"),rz=a(" with the value of "),d_=o("code"),pz=a("--adam_epsilon"),iz=u(),Ul=o("li"),m_=o("code"),uz=a("weight_decay"),cz=a(" with the value of "),__=o("code"),hz=a("--weight_decay"),v2=u(),hu=o("p"),fz=a("Therefore please remember to tune the shared hyperparameters on the command line."),j2=u(),fu=o("p"),dz=a("You can also set the values explicitly:"),g2=u(),f(Gl.$$.fragment),y2=u(),Da=o("p"),mz=a("But then you\u2019re on your own synchronizing the "),du=o("a"),_z=a("Trainer"),vz=a(` command line arguments and the DeepSpeed
configuration.`),w2=u(),mu=o("p"),jz=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),b2=u(),f(Ll.$$.fragment),E2=u(),ie=o("p"),gz=a("Similarly to "),v_=o("code"),yz=a("AdamW"),wz=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),j_=o("code"),bz=a("weight_decay"),Ez=a(" around "),g_=o("code"),qz=a("0.01"),$z=a("."),q2=u(),_u=o("a"),$2=u(),Ws=o("h4"),za=o("a"),y_=o("span"),f(Ml.$$.fragment),kz=u(),w_=o("span"),Pz=a("Scheduler"),k2=u(),Z=o("p"),Dz=a("DeepSpeed supports "),b_=o("code"),zz=a("LRRangeTest"),Oz=a(", "),E_=o("code"),Tz=a("OneCycle"),Az=a(", "),q_=o("code"),Sz=a("WarmupLR"),Cz=a(" and "),$_=o("code"),xz=a("WarmupDecayLR"),Rz=a(` learning rate schedulers. The full
documentation is `),Zl=o("a"),Iz=a("here"),Uz=a("."),P2=u(),vu=o("p"),Gz=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),D2=u(),Oa=o("ul"),Nl=o("li"),k_=o("code"),Lz=a("WarmupLR"),Mz=a(" via "),P_=o("code"),Zz=a("--lr_scheduler_type constant_with_warmup"),Nz=u(),ss=o("li"),D_=o("code"),Hz=a("WarmupDecayLR"),Bz=a(" via "),z_=o("code"),Wz=a("--lr_scheduler_type linear"),Fz=a(". This is also the default value for "),O_=o("code"),Vz=a("--lr_scheduler_type"),Yz=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),z2=u(),O=o("p"),Kz=a("If you don\u2019t configure the "),T_=o("code"),Jz=a("scheduler"),Xz=a(" entry in the configuration file, the "),ju=o("a"),Qz=a("Trainer"),eO=a(` will use
the values of `),A_=o("code"),sO=a("--lr_scheduler_type"),tO=a(", "),S_=o("code"),aO=a("--learning_rate"),nO=a(" and "),C_=o("code"),oO=a("--warmup_steps"),lO=a(" or "),x_=o("code"),rO=a("--warmup_ratio"),pO=a(` to configure a
\u{1F917} Transformers version of it.`),O2=u(),ts=o("p"),iO=a("Here is an example of the auto-configured "),R_=o("code"),uO=a("scheduler"),cO=a(" entry for "),I_=o("code"),hO=a("WarmupLR"),fO=a(":"),T2=u(),f(Hl.$$.fragment),A2=u(),as=o("p"),dO=a("Since "),U_=o("em"),mO=a("\u201Cauto\u201D"),_O=a(" is used the "),gu=o("a"),vO=a("Trainer"),jO=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),S2=u(),ue=o("ul"),Ta=o("li"),G_=o("code"),gO=a("warmup_min_lr"),yO=a(" with the value of "),L_=o("code"),wO=a("0"),bO=a("."),EO=u(),Aa=o("li"),M_=o("code"),qO=a("warmup_max_lr"),$O=a(" with the value of "),Z_=o("code"),kO=a("--learning_rate"),PO=a("."),DO=u(),ns=o("li"),N_=o("code"),zO=a("warmup_num_steps"),OO=a(" with the value of "),H_=o("code"),TO=a("--warmup_steps"),AO=a(" if provided. Otherwise will use "),B_=o("code"),SO=a("--warmup_ratio"),CO=a(`
multiplied by the number of training steps and rounded up.`),xO=u(),os=o("li"),W_=o("code"),RO=a("total_num_steps"),IO=a(" with either the value of "),F_=o("code"),UO=a("--max_steps"),GO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),V_=o("code"),LO=a("WarmupDecayLR"),MO=a(")."),C2=u(),yu=o("p"),ZO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),x2=u(),f(Bl.$$.fragment),R2=u(),Sa=o("p"),NO=a("But then you\u2019re on your own synchronizing the "),wu=o("a"),HO=a("Trainer"),BO=a(` command line arguments and the DeepSpeed
configuration.`),I2=u(),Ca=o("p"),WO=a("For example, for "),Y_=o("code"),FO=a("WarmupDecayLR"),VO=a(", you can use the following entry:"),U2=u(),f(Wl.$$.fragment),G2=u(),J=o("p"),YO=a("and "),K_=o("code"),KO=a("total_num_steps"),JO=a(", "),J_=o("code"),XO=a("warmup_max_lr"),QO=a(", "),X_=o("code"),eT=a("warmup_num_steps"),sT=a(" and "),Q_=o("code"),tT=a("total_num_steps"),aT=a(" will be set at loading time."),L2=u(),bu=o("a"),M2=u(),Fs=o("h3"),xa=o("a"),e1=o("span"),f(Fl.$$.fragment),nT=u(),s1=o("span"),oT=a("fp32 Precision"),Z2=u(),Eu=o("p"),lT=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),N2=u(),Ra=o("p"),rT=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),t1=o("code"),pT=a("NaN"),iT=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),H2=u(),f(Vl.$$.fragment),B2=u(),Ia=o("p"),uT=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Yl=o("a"),cT=a("TensorFloat-32(TF32) on Ampere devices"),hT=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),W2=u(),ce=o("p"),fT=a("With the \u{1F917} Trainer you can use "),a1=o("code"),dT=a("--tf32"),mT=a(" to enable it, or disable it with "),n1=o("code"),_T=a("--tf32 0"),vT=a(" or "),o1=o("code"),jT=a("--no_tf32"),gT=a(". By default the PyTorch default is used."),F2=u(),qu=o("a"),V2=u(),Vs=o("h3"),Ua=o("a"),l1=o("span"),f(Kl.$$.fragment),yT=u(),r1=o("span"),wT=a("Automatic Mixed Precision"),Y2=u(),$u=o("p"),bT=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),K2=u(),Ys=o("h3"),Ga=o("a"),p1=o("span"),f(Jl.$$.fragment),ET=u(),i1=o("span"),qT=a("fp16"),J2=u(),ku=o("p"),$T=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),X2=u(),f(Xl.$$.fragment),Q2=u(),ls=o("p"),kT=a("and the "),Pu=o("a"),PT=a("Trainer"),DT=a(` will automatically enable or disable it based on the value of
`),u1=o("code"),zT=a("args.fp16_backend"),OT=a(". The rest of config values are up to you."),eb=u(),rs=o("p"),TT=a("This mode gets enabled when "),c1=o("code"),AT=a("--fp16 --fp16_backend amp"),ST=a(" or "),h1=o("code"),CT=a("--fp16_full_eval"),xT=a(" command line args are passed."),sb=u(),Du=o("p"),RT=a("You can also enable/disable this mode explicitly:"),tb=u(),f(Ql.$$.fragment),ab=u(),La=o("p"),IT=a("But then you\u2019re on your own synchronizing the "),zu=o("a"),UT=a("Trainer"),GT=a(` command line arguments and the DeepSpeed
configuration.`),nb=u(),Ma=o("p"),LT=a("Here is the "),er=o("a"),MT=a("documentation"),ZT=a("."),ob=u(),Ks=o("h3"),Za=o("a"),f1=o("span"),f(sr.$$.fragment),NT=u(),d1=o("span"),HT=a("bf16"),lb=u(),Ou=o("p"),BT=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),rb=u(),f(tr.$$.fragment),pb=u(),Tu=o("p"),WT=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),ib=u(),ps=o("p"),FT=a("This mode gets enabled when "),m1=o("code"),VT=a("--bf16"),YT=a(" or "),_1=o("code"),KT=a("--bf16_full_eval"),JT=a(" command line args are passed."),ub=u(),Au=o("p"),XT=a("You can also enable/disable this mode explicitly:"),cb=u(),f(ar.$$.fragment),hb=u(),f(Na.$$.fragment),fb=u(),Js=o("h3"),Ha=o("a"),v1=o("span"),f(nr.$$.fragment),QT=u(),j1=o("span"),eA=a("apex"),db=u(),Su=o("p"),sA=a("To configure apex AMP-like mode set:"),mb=u(),f(or.$$.fragment),_b=u(),he=o("p"),tA=a("and the "),Cu=o("a"),aA=a("Trainer"),nA=a(" will automatically configure it based on the values of "),g1=o("code"),oA=a("args.fp16_backend"),lA=a(` and
`),y1=o("code"),rA=a("args.fp16_opt_level"),pA=a("."),vb=u(),Ba=o("p"),iA=a("This mode gets enabled when "),w1=o("code"),uA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),cA=a(" command line args are passed."),jb=u(),xu=o("p"),hA=a("You can also configure this mode explicitly:"),gb=u(),f(lr.$$.fragment),yb=u(),Wa=o("p"),fA=a("But then you\u2019re on your own synchronizing the "),Ru=o("a"),dA=a("Trainer"),mA=a(` command line arguments and the DeepSpeed
configuration.`),wb=u(),Fa=o("p"),_A=a("Here is the "),rr=o("a"),vA=a("documentation"),jA=a("."),bb=u(),Iu=o("a"),Eb=u(),Xs=o("h3"),Va=o("a"),b1=o("span"),f(pr.$$.fragment),gA=u(),E1=o("span"),yA=a("Batch Size"),qb=u(),Uu=o("p"),wA=a("To configure batch size, use:"),$b=u(),f(ir.$$.fragment),kb=u(),N=o("p"),bA=a("and the "),Gu=o("a"),EA=a("Trainer"),qA=a(" will automatically set "),q1=o("code"),$A=a("train_micro_batch_size_per_gpu"),kA=a(` to the value of
`),$1=o("code"),PA=a("args.per_device_train_batch_size"),DA=a(" and "),k1=o("code"),zA=a("train_batch_size"),OA=a(" to "),P1=o("code"),TA=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),AA=a("."),Pb=u(),Lu=o("p"),SA=a("You can also set the values explicitly:"),Db=u(),f(ur.$$.fragment),zb=u(),Ya=o("p"),CA=a("But then you\u2019re on your own synchronizing the "),Mu=o("a"),xA=a("Trainer"),RA=a(` command line arguments and the DeepSpeed
configuration.`),Ob=u(),Zu=o("a"),Tb=u(),Qs=o("h3"),Ka=o("a"),D1=o("span"),f(cr.$$.fragment),IA=u(),z1=o("span"),UA=a("Gradient Accumulation"),Ab=u(),Nu=o("p"),GA=a("To configure gradient accumulation set:"),Sb=u(),f(hr.$$.fragment),Cb=u(),is=o("p"),LA=a("and the "),Hu=o("a"),MA=a("Trainer"),ZA=a(" will automatically set it to the value of "),O1=o("code"),NA=a("args.gradient_accumulation_steps"),HA=a("."),xb=u(),Bu=o("p"),BA=a("You can also set the value explicitly:"),Rb=u(),f(fr.$$.fragment),Ib=u(),Ja=o("p"),WA=a("But then you\u2019re on your own synchronizing the "),Wu=o("a"),FA=a("Trainer"),VA=a(` command line arguments and the DeepSpeed
configuration.`),Ub=u(),Fu=o("a"),Gb=u(),et=o("h3"),Xa=o("a"),T1=o("span"),f(dr.$$.fragment),YA=u(),A1=o("span"),KA=a("Gradient Clipping"),Lb=u(),Vu=o("p"),JA=a("To configure gradient gradient clipping set:"),Mb=u(),f(mr.$$.fragment),Zb=u(),us=o("p"),XA=a("and the "),Yu=o("a"),QA=a("Trainer"),eS=a(" will automatically set it to the value of "),S1=o("code"),sS=a("args.max_grad_norm"),tS=a("."),Nb=u(),Ku=o("p"),aS=a("You can also set the value explicitly:"),Hb=u(),f(_r.$$.fragment),Bb=u(),Qa=o("p"),nS=a("But then you\u2019re on your own synchronizing the "),Ju=o("a"),oS=a("Trainer"),lS=a(` command line arguments and the DeepSpeed
configuration.`),Wb=u(),Xu=o("a"),Fb=u(),st=o("h3"),en=o("a"),C1=o("span"),f(vr.$$.fragment),rS=u(),x1=o("span"),pS=a("Getting The Model Weights Out"),Vb=u(),sn=o("p"),iS=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),R1=o("code"),uS=a("global_step*/*optim_states.pt"),cS=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Yb=u(),Qu=o("p"),I1=o("strong"),hS=a("FP16 Weights:"),Kb=u(),tn=o("p"),fS=a("When a model is saved under ZeRO-2, you end up having the normal "),U1=o("code"),dS=a("pytorch_model.bin"),mS=a(` file with the model weights, but
they are only the fp16 version of the weights.`),Jb=u(),T=o("p"),_S=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),G1=o("code"),vS=a('"stage3_gather_16bit_weights_on_model_save": true'),jS=a(" is required to get the "),L1=o("code"),gS=a("Trainer"),yS=a(` to save the fp16
version of the weights. If this setting is `),M1=o("code"),wS=a("False"),bS=u(),Z1=o("code"),ES=a("pytorch_model.bin"),qS=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),N1=o("code"),$S=a("state_dict"),kS=a(" contains a placeholder and not the real weights. If we were to save this "),H1=o("code"),PS=a("state_dict"),DS=a(" it won\u2019t be possible to load it back."),Xb=u(),f(jr.$$.fragment),Qb=u(),ec=o("p"),B1=o("strong"),zS=a("FP32 Weights:"),e3=u(),an=o("p"),OS=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),gr=o("a"),TS=a("models hub"),AS=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),s3=u(),sc=o("p"),W1=o("strong"),SS=a("Live FP32 Weights Recovery:"),t3=u(),tc=o("p"),CS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),a3=u(),ac=o("p"),xS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),n3=u(),f(yr.$$.fragment),o3=u(),cs=o("p"),RS=a("If you\u2019re using the "),F1=o("code"),IS=a("--load_best_model_at_end"),US=a(" class:"),V1=o("em"),GS=a("~transformers.TrainingArguments"),LS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),l3=u(),f(wr.$$.fragment),r3=u(),f(nn.$$.fragment),p3=u(),on=o("p"),MS=a("Of course, you don\u2019t have to use class:"),Y1=o("em"),ZS=a("~transformers.Trainer"),NS=a(` and you can adjust the examples above to your own
trainer.`),i3=u(),ln=o("p"),HS=a("If for some reason you want more refinement, you can also extract the fp32 "),K1=o("code"),BS=a("state_dict"),WS=a(` of the weights and apply
these yourself as is shown in the following example:`),u3=u(),f(br.$$.fragment),c3=u(),nc=o("p"),J1=o("strong"),FS=a("Offline FP32 Weights Recovery:"),h3=u(),hs=o("p"),VS=a("DeepSpeed creates a special conversion script "),X1=o("code"),YS=a("zero_to_fp32.py"),KS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),Q1=o("code"),JS=a("Trainer"),XS=a(" to do the extraction."),f3=u(),oc=o("p"),QS=a("Let\u2019s say your checkpoint folder looks like this:"),d3=u(),f(Er.$$.fragment),m3=u(),rn=o("p"),eC=a("In this example there is just one DeepSpeed checkpoint sub-folder "),ev=o("em"),sC=a("global_step1"),tC=a(`. Therefore to reconstruct the fp32
weights just run:`),_3=u(),f(qr.$$.fragment),v3=u(),pn=o("p"),aC=a("This is it. "),sv=o("code"),nC=a("pytorch_model.bin"),oC=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),j3=u(),lc=o("p"),lC=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),g3=u(),$r=o("p"),tv=o("code"),rC=a("python zero_to_fp32.py -h"),pC=a(" will give you usage details."),y3=u(),fs=o("p"),iC=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),av=o("code"),uC=a("latest"),cC=a(`, which in the current
example will contain `),nv=o("code"),hC=a("global_step1"),fC=a("."),w3=u(),rc=o("p"),dC=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),b3=u(),tt=o("h3"),un=o("a"),ov=o("span"),f(kr.$$.fragment),mC=u(),lv=o("span"),_C=a("ZeRO-3 and Infinity Nuances"),E3=u(),pc=o("p"),vC=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),q3=u(),ic=o("p"),jC=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),$3=u(),uc=o("p"),gC=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),k3=u(),at=o("h4"),cn=o("a"),rv=o("span"),f(Pr.$$.fragment),yC=u(),pv=o("span"),wC=a("Constructing Massive Models"),P3=u(),hn=o("p"),bC=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),iv=o("em"),EC=a("deepspeed.zero.Init()"),qC=a(`
context manager (which is also a function decorator), like so:`),D3=u(),f(Dr.$$.fragment),z3=u(),cc=o("p"),$C=a("As you can see this gives you a randomly initialized model."),O3=u(),D=o("p"),kC=a("If you want to use a pretrained model, "),uv=o("code"),PC=a("model_class.from_pretrained"),DC=a(` will activate this feature as long as
`),cv=o("code"),zC=a("is_deepspeed_zero3_enabled()"),OC=a(" returns "),hv=o("code"),TC=a("True"),AC=a(`, which currently is setup by the
`),hc=o("a"),SC=a("TrainingArguments"),CC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),fc=o("a"),xC=a("TrainingArguments"),RC=a(" object "),fv=o("strong"),IC=a("before"),UC=a(` calling
`),dv=o("code"),GC=a("from_pretrained"),LC=a(". Here is an example of a possible sequence:"),T3=u(),f(zr.$$.fragment),A3=u(),fn=o("p"),MC=a("If you\u2019re using the official example scripts and your command line arguments include "),mv=o("code"),ZC=a("--deepspeed ds_config.json"),NC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),S3=u(),dc=o("p"),HC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),C3=u(),dn=o("p"),BC=a("For full details on this method and other related features please refer to "),Or=o("a"),WC=a("Constructing Massive Models"),FC=a("."),x3=u(),fe=o("p"),VC=a("Also when loading fp16-pretrained models, you will want to tell "),_v=o("code"),YC=a("from_pretrained"),KC=a(` to use
`),vv=o("code"),JC=a("torch_dtype=torch.float16"),XC=a(". For details, please, see "),mc=o("a"),QC=a("from_pretrained-torch-dtype"),ex=a("."),R3=u(),nt=o("h4"),mn=o("a"),jv=o("span"),f(Tr.$$.fragment),sx=u(),gv=o("span"),tx=a("Gathering Parameters"),I3=u(),Ar=o("p"),ax=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Sr=o("a"),nx=a("Gathering Parameters"),U3=u(),_n=o("p"),ox=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),yv=o("code"),lx=a("from_pretrained"),rx=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),G3=u(),_c=o("p"),px=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),L3=u(),f(Cr.$$.fragment),M3=u(),ds=o("p"),ix=a("stress on "),wv=o("code"),ux=a("tensor([1.])"),cx=a(", or if you get an error where it says the parameter is of size "),bv=o("code"),hx=a("1"),fx=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Z3=u(),vc=o("a"),N3=u(),ot=o("h3"),vn=o("a"),Ev=o("span"),f(xr.$$.fragment),dx=u(),qv=o("span"),mx=a("ZeRO Inference"),H3=u(),jc=o("p"),_x=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),B3=u(),jn=o("p"),vx=a("Otherwise you just need to pass the usual "),gc=o("a"),jx=a("TrainingArguments"),gx=a(" arguments. For example:"),W3=u(),f(Rr.$$.fragment),F3=u(),yc=o("p"),yx=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),V3=u(),gn=o("p"),wx=a("Here is an example of running "),$v=o("code"),bx=a("run_translation.py"),Ex=a(" under DeepSpeed deploying all available GPUs:"),Y3=u(),f(Ir.$$.fragment),K3=u(),wc=o("p"),qx=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),J3=u(),bc=o("p"),$x=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),X3=u(),lt=o("h3"),yn=o("a"),kv=o("span"),f(Ur.$$.fragment),kx=u(),Pv=o("span"),Px=a("Memory Requirements"),Q3=u(),Ec=o("p"),Dx=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),e0=u(),qc=o("p"),zx=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),s0=u(),f(Gr.$$.fragment),t0=u(),$c=o("p"),Ox=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),a0=u(),kc=o("p"),Tx=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),n0=u(),Pc=o("p"),Ax=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),o0=u(),Dc=o("p"),Sx=a("For example, let\u2019s repeat the same for 2 GPUs:"),l0=u(),f(Lr.$$.fragment),r0=u(),zc=o("p"),Cx=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),p0=u(),wn=o("p"),xx=a("For full information please see "),Mr=o("a"),Rx=a("memory estimators"),Ix=a("."),i0=u(),rt=o("h3"),bn=o("a"),Dv=o("span"),f(Zr.$$.fragment),Ux=u(),zv=o("span"),Gx=a("Filing Issues"),u0=u(),Oc=o("p"),Lx=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),c0=u(),Tc=o("p"),Mx=a("In your report please always include:"),h0=u(),H=o("ol"),Ov=o("li"),Tv=o("p"),Zx=a("the full Deepspeed config file in the report"),Nx=u(),Av=o("li"),Te=o("p"),Hx=a("either the command line arguments if you were using the "),Ac=o("a"),Bx=a("Trainer"),Wx=a(` or
`),Sc=o("a"),Fx=a("TrainingArguments"),Vx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Cc=o("a"),Yx=a("TrainingArguments"),Kx=a(" as it has dozens of entries that are irrelevant."),Jx=u(),Nr=o("li"),Sv=o("p"),Xx=a("Output of:"),Qx=u(),f(Hr.$$.fragment),eR=u(),Cv=o("li"),Br=o("p"),sR=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Wr=o("a"),tR=a("notebook"),aR=a(` as
a starting point.`),nR=u(),xv=o("li"),Rv=o("p"),oR=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),lR=u(),Iv=o("li"),Fr=o("p"),rR=a("If possible try to use one of the existing "),Vr=o("a"),pR=a("examples"),iR=a(" to reproduce the problem with."),f0=u(),xc=o("p"),uR=a("Things to consider:"),d0=u(),En=o("ul"),pt=o("li"),Uv=o("p"),cR=a("Deepspeed is often not the cause of the problem."),hR=u(),Gv=o("p"),fR=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),dR=u(),Lv=o("p"),mR=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),_R=u(),Mv=o("li"),Yr=o("p"),vR=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Kr=o("a"),jR=a("Deepspeed"),gR=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),m0=u(),it=o("h3"),qn=o("a"),Zv=o("span"),f(Jr.$$.fragment),yR=u(),Nv=o("span"),wR=a("Troubleshooting"),_0=u(),ut=o("h4"),$n=o("a"),Hv=o("span"),f(Xr.$$.fragment),bR=u(),Qr=o("span"),ER=a("the "),Bv=o("code"),qR=a("deepspeed"),$R=a(" process gets killed at startup without a traceback"),v0=u(),B=o("p"),kR=a("If the "),Wv=o("code"),PR=a("deepspeed"),DR=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Fv=o("code"),zR=a("offload_optimizer"),OR=a(" or "),Vv=o("code"),TR=a("offload_param"),AR=a(` or
both configured to offload to `),Yv=o("code"),SR=a("cpu"),CR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),ep=o("a"),xR=a("estimate how much memory is needed for a specific model"),RR=a("."),j0=u(),ct=o("h4"),kn=o("a"),Kv=o("span"),f(sp.$$.fragment),IR=u(),Rc=o("span"),UR=a("training and/or eval/predict loss is "),Jv=o("code"),GR=a("NaN"),g0=u(),Ic=o("p"),LR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),y0=u(),Uc=o("p"),MR=a("The other problem may have to do with using fp16. When you configure this section:"),w0=u(),f(tp.$$.fragment),b0=u(),Pn=o("p"),ZR=a("and you see in your log that Deepspeed reports "),Xv=o("code"),NR=a("OVERFLOW!"),HR=a(" as follows:"),E0=u(),f(ap.$$.fragment),q0=u(),Gc=o("p"),BR=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),$0=u(),Lc=o("p"),WR=a("(the log was massaged to be more readable here.)"),k0=u(),ms=o("p"),FR=a("In this case you usually need to raise the value of "),Qv=o("code"),VR=a("initial_scale_power"),YR=a(". Setting it to "),ej=o("code"),KR=a('"initial_scale_power": 32'),JR=a(" will typically resolve the problem."),P0=u(),ht=o("h3"),Dn=o("a"),sj=o("span"),f(np.$$.fragment),XR=u(),tj=o("span"),QR=a("Notes"),D0=u(),_s=o("ul"),ft=o("li"),eI=a("DeepSpeed works with the PyTorch "),Mc=o("a"),sI=a("Trainer"),tI=a(" but not TF "),aj=o("code"),aI=a("TFTrainer"),nI=a("."),oI=u(),op=o("li"),lI=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),lp=o("a"),rI=a("source"),pI=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),iI=u(),dt=o("li"),uI=a("You don\u2019t have to use the "),Zc=o("a"),cI=a("Trainer"),hI=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),rp=o("a"),fI=a("the DeepSpeed integration instructions"),dI=a("."),z0=u(),Nc=o("a"),O0=u(),mt=o("h2"),zn=o("a"),nj=o("span"),f(pp.$$.fragment),mI=u(),oj=o("span"),_I=a("Non-Trainer Deepspeed Integration"),T0=u(),de=o("p"),vI=a("The "),Hc=o("a"),jI=a("HfDeepSpeedConfig"),gI=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Bc=o("a"),yI=a("Trainer"),wI=a(" is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),lj=o("code"),bI=a("from_pretrained"),EI=a(" call. Everything else you have to do by yourself."),A0=u(),On=o("p"),qI=a("When using "),Wc=o("a"),$I=a("Trainer"),kI=a(" everything is automatically taken care of."),S0=u(),vs=o("p"),PI=a("When not using "),Fc=o("a"),DI=a("Trainer"),zI=a(`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Vc=o("a"),OI=a("HfDeepSpeedConfig"),TI=a(" object before instantiating the model and keep that object alive."),C0=u(),Tn=o("p"),AI=a("If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),rj=o("code"),SI=a("HfDeepSpeedConfig"),CI=a(" at all."),x0=u(),Yc=o("p"),xI=a("For example for a pretrained model:"),R0=u(),f(ip.$$.fragment),I0=u(),Kc=o("p"),RI=a("or for non-pretrained model:"),U0=u(),f(up.$$.fragment),G0=u(),me=o("p"),II=a("Please note that if you\u2019re not using the "),Jc=o("a"),UI=a("Trainer"),GI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),cp=o("a"),LI=a("Deepspeed"),MI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),pj=o("code"),ZI=a('"auto"'),NI=a(" values and you will have to put real values instead."),L0=u(),_t=o("h2"),An=o("a"),ij=o("span"),f(hp.$$.fragment),HI=u(),uj=o("span"),BI=a("HfDeepSpeedConfig"),M0=u(),P=o("div"),f(fp.$$.fragment),WI=u(),cj=o("p"),FI=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),VI=u(),Ae=o("p"),YI=a("A "),hj=o("code"),KI=a("weakref"),JI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),fj=o("code"),XI=a("from_pretrained"),QI=a(" and "),dj=o("code"),eU=a("_get_resized_embeddings"),sU=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),tU=u(),_e=o("p"),Xc=o("a"),aU=a("Trainer"),nU=a(" uses the "),mj=o("code"),oU=a("HfTrainerDeepSpeedConfig"),lU=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Qc=o("a"),rU=a("TrainingArguments"),pU=a(" by replacing special placeholder values: "),_j=o("code"),iU=a('"auto"'),uU=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),cU=u(),js=o("div"),f(dp.$$.fragment),hU=u(),vj=o("p"),fU=a("Deletes a sub-section of the config file if it\u2019s found."),dU=u(),vt=o("p"),mU=a("Unless "),jj=o("code"),_U=a("must_exist"),vU=a(" is "),gj=o("code"),jU=a("True"),gU=a(" the section doesn\u2019t have to exist."),yU=u(),Sn=o("div"),f(mp.$$.fragment),wU=u(),_p=o("p"),bU=a("Returns the set value or "),yj=o("code"),EU=a("default"),qU=a(" if no value is set"),$U=u(),Cn=o("div"),f(vp.$$.fragment),kU=u(),jt=o("p"),PU=a("Returns "),wj=o("code"),DU=a("True"),zU=a("/"),bj=o("code"),OU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),TU=a(" or isn\u2019t set)."),AU=u(),xn=o("div"),f(jp.$$.fragment),SU=u(),gt=o("p"),CU=a("Returns "),Ej=o("code"),xU=a("True"),RU=a("/"),qj=o("code"),IU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),UU=a(" or isn\u2019t set)."),Z0=u(),yt=o("h3"),Rn=o("a"),$j=o("span"),f(gp.$$.fragment),GU=u(),kj=o("span"),LU=a("Custom DeepSpeed ZeRO Inference"),N0=u(),In=o("p"),MU=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),eh=o("a"),ZU=a("Trainer"),NU=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),H0=u(),sh=o("p"),HU=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),B0=u(),th=o("p"),BU=a("The example has copious notes and is self-documenting."),W0=u(),ah=o("p"),WU=a("Make sure to:"),F0=u(),Un=o("ol"),Pj=o("li"),FU=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),VU=u(),Dj=o("li"),YU=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),V0=u(),f(yp.$$.fragment),Y0=u(),Gn=o("p"),KU=a("Let\u2019s save it as "),zj=o("code"),JU=a("t0.py"),XU=a(" and run it:"),K0=u(),f(wp.$$.fragment),J0=u(),nh=o("p"),QU=a("This was a very basic example and you will want to adapt it to your needs."),X0=u(),wt=o("h2"),Ln=o("a"),Oj=o("span"),f(bp.$$.fragment),eG=u(),Tj=o("span"),sG=a("Main DeepSpeed Resources"),Q0=u(),ve=o("ul"),Aj=o("li"),Ep=o("a"),tG=a("Project\u2019s github"),aG=u(),Sj=o("li"),qp=o("a"),nG=a("Usage docs"),oG=u(),Cj=o("li"),$p=o("a"),lG=a("API docs"),rG=u(),xj=o("li"),kp=o("a"),pG=a("Blog posts"),eE=u(),oh=o("p"),iG=a("Papers:"),sE=u(),gs=o("ul"),Rj=o("li"),Pp=o("a"),uG=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),cG=u(),Ij=o("li"),Dp=o("a"),hG=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),fG=u(),Uj=o("li"),zp=o("a"),dG=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),tE=u(),ys=o("p"),mG=a("Finally, please, remember that, HuggingFace "),lh=o("a"),_G=a("Trainer"),vG=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Op=o("a"),jG=a("DeepSpeed GitHub"),gG=a("."),this.h()},l(e){const p=ZK('[data-svelte="svelte-1phssyn"]',document.head);w=l(p,"META",{name:!0,content:!0}),p.forEach(t),C=c(e),b=l(e,"H1",{class:!0});var Tp=r(b);k=l(Tp,"A",{id:!0,class:!0,href:!0});var Gj=r(k);ee=l(Gj,"SPAN",{});var Lj=r(ee);d(z.$$.fragment,Lj),Lj.forEach(t),Gj.forEach(t),x=c(Tp),se=l(Tp,"SPAN",{});var kG=r(se);R=n(kG,"DeepSpeed Integration"),kG.forEach(t),Tp.forEach(t),ae=c(e),S=l(e,"P",{});var Mj=r(S);E=l(Mj,"A",{href:!0,rel:!0});var PG=r(E);q=n(PG,"DeepSpeed"),PG.forEach(t),Es=n(Mj," implements everything described in the "),V=l(Mj,"A",{href:!0,rel:!0});var DG=r(V);qs=n(DG,"ZeRO paper"),DG.forEach(t),L5=n(Mj,". Currently it provides full support for:"),Mj.forEach(t),Bj=c(e),I=l(e,"OL",{});var je=r(I);tf=l(je,"LI",{});var zG=r(tf);M5=n(zG,"Optimizer state partitioning (ZeRO stage 1)"),zG.forEach(t),Z5=c(je),af=l(je,"LI",{});var OG=r(af);N5=n(OG,"Gradient partitioning (ZeRO stage 2)"),OG.forEach(t),H5=c(je),nf=l(je,"LI",{});var TG=r(nf);B5=n(TG,"Parameter partitioning (ZeRO stage 3)"),TG.forEach(t),W5=c(je),of=l(je,"LI",{});var AG=r(of);F5=n(AG,"Custom mixed precision training handling"),AG.forEach(t),V5=c(je),lf=l(je,"LI",{});var SG=r(lf);Y5=n(SG,"A range of fast CUDA-extension-based optimizers"),SG.forEach(t),K5=c(je),rf=l(je,"LI",{});var CG=r(rf);J5=n(CG,"ZeRO-Offload to CPU and NVMe"),CG.forEach(t),je.forEach(t),Wj=c(e),Se=l(e,"P",{});var rh=r(Se);X5=n(rh,"ZeRO-Offload has its own dedicated paper: "),ao=l(rh,"A",{href:!0,rel:!0});var xG=r(ao);Q5=n(xG,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),xG.forEach(t),e$=n(rh,". And NVMe-support is described in the paper "),no=l(rh,"A",{href:!0,rel:!0});var RG=r(no);s$=n(RG,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),RG.forEach(t),t$=n(rh,"."),rh.forEach(t),Fj=c(e),Up=l(e,"P",{});var IG=r(Up);a$=n(IG,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),IG.forEach(t),Vj=c(e),Gp=l(e,"P",{});var UG=r(Gp);n$=n(UG,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),UG.forEach(t),Yj=c(e),qt=l(e,"P",{});var nE=r(qt);o$=n(nE,"\u{1F917} Transformers integrates "),oo=l(nE,"A",{href:!0,rel:!0});var GG=r(oo);l$=n(GG,"DeepSpeed"),GG.forEach(t),r$=n(nE," via 2 options:"),nE.forEach(t),Kj=c(e),$t=l(e,"OL",{});var oE=r($t);lo=l(oE,"LI",{});var lE=r(lo);p$=n(lE,"Integration of the core DeepSpeed features via "),Lp=l(lE,"A",{href:!0});var LG=r(Lp);i$=n(LG,"Trainer"),LG.forEach(t),u$=n(lE,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),lE.forEach(t),c$=c(oE),Y=l(oE,"LI",{});var ge=r(Y);h$=n(ge,"If you don\u2019t use "),Mp=l(ge,"A",{href:!0});var MG=r(Mp);f$=n(MG,"Trainer"),MG.forEach(t),d$=n(ge,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),pf=l(ge,"CODE",{});var ZG=r(pf);m$=n(ZG,"from_pretrained"),ZG.forEach(t),_$=n(ge," and "),uf=l(ge,"CODE",{});var NG=r(uf);v$=n(NG,"from_config"),NG.forEach(t),j$=n(ge,` include integration of essential
parts of DeepSpeed like `),cf=l(ge,"CODE",{});var HG=r(cf);g$=n(HG,"zero.Init"),HG.forEach(t),y$=n(ge,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Zp=l(ge,"A",{href:!0});var BG=r(Zp);w$=n(BG,"deepspeed-non-trainer-integration"),BG.forEach(t),b$=n(ge,"."),ge.forEach(t),oE.forEach(t),Jj=c(e),Np=l(e,"P",{});var WG=r(Np);E$=n(WG,"What is integrated:"),WG.forEach(t),Xj=c(e),Hp=l(e,"P",{});var FG=r(Hp);q$=n(FG,"Training:"),FG.forEach(t),Qj=c(e),Bp=l(e,"OL",{});var VG=r(Bp);hf=l(VG,"LI",{});var YG=r(hf);$$=n(YG,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),YG.forEach(t),VG.forEach(t),eg=c(e),Wp=l(e,"P",{});var KG=r(Wp);k$=n(KG,"Inference:"),KG.forEach(t),sg=c(e),Fp=l(e,"OL",{});var JG=r(Fp);ro=l(JG,"LI",{});var rE=r(ro);P$=n(rE,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Vp=l(rE,"A",{href:!0});var XG=r(Vp);D$=n(XG,"deepspeed-zero-inference"),XG.forEach(t),z$=n(rE,"."),rE.forEach(t),JG.forEach(t),tg=c(e),Yp=l(e,"P",{});var QG=r(Yp);O$=n(QG,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),QG.forEach(t),ag=c(e),Kp=l(e,"A",{id:!0}),r(Kp).forEach(t),ng=c(e),$s=l(e,"H2",{class:!0});var pE=r($s);kt=l(pE,"A",{id:!0,class:!0,href:!0});var eL=r(kt);ff=l(eL,"SPAN",{});var sL=r(ff);d(po.$$.fragment,sL),sL.forEach(t),eL.forEach(t),T$=c(pE),df=l(pE,"SPAN",{});var tL=r(df);A$=n(tL,"Trainer Deepspeed Integration"),tL.forEach(t),pE.forEach(t),og=c(e),Jp=l(e,"A",{id:!0}),r(Jp).forEach(t),lg=c(e),ks=l(e,"H3",{class:!0});var iE=r(ks);Pt=l(iE,"A",{id:!0,class:!0,href:!0});var aL=r(Pt);mf=l(aL,"SPAN",{});var nL=r(mf);d(io.$$.fragment,nL),nL.forEach(t),aL.forEach(t),S$=c(iE),_f=l(iE,"SPAN",{});var oL=r(_f);C$=n(oL,"Installation"),oL.forEach(t),iE.forEach(t),rg=c(e),Xp=l(e,"P",{});var lL=r(Xp);x$=n(lL,"Install the library via pypi:"),lL.forEach(t),pg=c(e),d(uo.$$.fragment,e),ig=c(e),Ce=l(e,"P",{});var ph=r(Ce);R$=n(ph,"or via "),vf=l(ph,"CODE",{});var rL=r(vf);I$=n(rL,"transformers"),rL.forEach(t),U$=n(ph,"\u2019 "),jf=l(ph,"CODE",{});var pL=r(jf);G$=n(pL,"extras"),pL.forEach(t),L$=n(ph,":"),ph.forEach(t),ug=c(e),d(co.$$.fragment,e),cg=c(e),xe=l(e,"P",{});var ih=r(xe);M$=n(ih,"or find more details on "),ho=l(ih,"A",{href:!0,rel:!0});var iL=r(ho);Z$=n(iL,"the DeepSpeed\u2019s GitHub page"),iL.forEach(t),N$=n(ih,` and
`),fo=l(ih,"A",{href:!0,rel:!0});var uL=r(fo);H$=n(uL,"advanced install"),uL.forEach(t),B$=n(ih,"."),ih.forEach(t),hg=c(e),Dt=l(e,"P",{});var uE=r(Dt);W$=n(uE,"If you\u2019re still struggling with the build, first make sure to read "),Qp=l(uE,"A",{href:!0});var cL=r(Qp);F$=n(cL,"zero-install-notes"),cL.forEach(t),V$=n(uE,"."),uE.forEach(t),fg=c(e),ei=l(e,"P",{});var hL=r(ei);Y$=n(hL,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),hL.forEach(t),dg=c(e),si=l(e,"P",{});var fL=r(si);K$=n(fL,"To make a local build for DeepSpeed:"),fL.forEach(t),mg=c(e),d(mo.$$.fragment,e),_g=c(e),Re=l(e,"P",{});var uh=r(Re);J$=n(uh,"If you intend to use NVMe offload you will also need to include "),gf=l(uh,"CODE",{});var dL=r(gf);X$=n(dL,"DS_BUILD_AIO=1"),dL.forEach(t),Q$=n(uh,` in the instructions above (and also
install `),yf=l(uh,"EM",{});var mL=r(yf);e4=n(mL,"libaio-dev"),mL.forEach(t),s4=n(uh," system-wide)."),uh.forEach(t),vg=c(e),zt=l(e,"P",{});var cE=r(zt);t4=n(cE,"Edit "),wf=l(cE,"CODE",{});var _L=r(wf);a4=n(_L,"TORCH_CUDA_ARCH_LIST"),_L.forEach(t),n4=n(cE,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),cE.forEach(t),jg=c(e),d(_o.$$.fragment,e),gg=c(e),Pe=l(e,"P",{});var Ap=r(Pe);o4=n(Ap,"So if you get "),bf=l(Ap,"CODE",{});var vL=r(bf);l4=n(vL,"8, 6"),vL.forEach(t),r4=n(Ap,", then use "),Ef=l(Ap,"CODE",{});var jL=r(Ef);p4=n(jL,'TORCH_CUDA_ARCH_LIST="8.6"'),jL.forEach(t),i4=n(Ap,`. If you have multiple different cards, you can list all
of them like so `),qf=l(Ap,"CODE",{});var gL=r(qf);u4=n(gL,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),gL.forEach(t),Ap.forEach(t),yg=c(e),ti=l(e,"P",{});var yL=r(ti);c4=n(yL,"If you need to use the same setup on multiple machines, make a binary wheel:"),yL.forEach(t),wg=c(e),d(vo.$$.fragment,e),bg=c(e),Ie=l(e,"P",{});var ch=r(Ie);h4=n(ch,"it will generate something like "),$f=l(ch,"CODE",{});var wL=r($f);f4=n(wL,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),wL.forEach(t),d4=n(ch,` which now you can install
as `),kf=l(ch,"CODE",{});var bL=r(kf);m4=n(bL,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),bL.forEach(t),_4=n(ch," locally or on any other machine."),ch.forEach(t),Eg=c(e),Ot=l(e,"P",{});var hE=r(Ot);v4=n(hE,"Again, remember to ensure to adjust "),Pf=l(hE,"CODE",{});var EL=r(Pf);j4=n(EL,"TORCH_CUDA_ARCH_LIST"),EL.forEach(t),g4=n(hE," to the target architectures."),hE.forEach(t),qg=c(e),Ue=l(e,"P",{});var hh=r(Ue);y4=n(hh,"You can find the complete list of NVIDIA GPUs and their corresponding "),Df=l(hh,"STRONG",{});var qL=r(Df);w4=n(qL,"Compute Capabilities"),qL.forEach(t),b4=n(hh,` (same as arch in this
context) `),jo=l(hh,"A",{href:!0,rel:!0});var $L=r(jo);E4=n($L,"here"),$L.forEach(t),q4=n(hh,"."),hh.forEach(t),$g=c(e),ai=l(e,"P",{});var kL=r(ai);$4=n(kL,"You can check the archs pytorch was built with using:"),kL.forEach(t),kg=c(e),d(go.$$.fragment,e),Pg=c(e),ni=l(e,"P",{});var PL=r(ni);k4=n(PL,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),PL.forEach(t),Dg=c(e),d(yo.$$.fragment,e),zg=c(e),oi=l(e,"P",{});var DL=r(oi);P4=n(DL,"If the output is:"),DL.forEach(t),Og=c(e),d(wo.$$.fragment,e),Tg=c(e),Tt=l(e,"P",{});var fE=r(Tt);D4=n(fE,"then you know that this card\u2019s arch is "),zf=l(fE,"CODE",{});var zL=r(zf);z4=n(zL,"8.6"),zL.forEach(t),O4=n(fE,"."),fE.forEach(t),Ag=c(e),At=l(e,"P",{});var dE=r(At);T4=n(dE,"You can also leave "),Of=l(dE,"CODE",{});var OL=r(Of);A4=n(OL,"TORCH_CUDA_ARCH_LIST"),OL.forEach(t),S4=n(dE,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),dE.forEach(t),Sg=c(e),St=l(e,"P",{});var mE=r(St);C4=n(mE,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),bo=l(mE,"A",{href:!0,rel:!0});var TL=r(bo);x4=n(TL,"Deepspeed"),TL.forEach(t),R4=n(mE,","),mE.forEach(t),Cg=c(e),li=l(e,"A",{id:!0}),r(li).forEach(t),xg=c(e),Ps=l(e,"H3",{class:!0});var _E=r(Ps);Ct=l(_E,"A",{id:!0,class:!0,href:!0});var AL=r(Ct);Tf=l(AL,"SPAN",{});var SL=r(Tf);d(Eo.$$.fragment,SL),SL.forEach(t),AL.forEach(t),I4=c(_E),Af=l(_E,"SPAN",{});var CL=r(Af);U4=n(CL,"Deployment with multiple GPUs"),CL.forEach(t),_E.forEach(t),Rg=c(e),xt=l(e,"P",{});var vE=r(xt);G4=n(vE,"To deploy this feature with multiple GPUs adjust the "),ri=l(vE,"A",{href:!0});var xL=r(ri);L4=n(xL,"Trainer"),xL.forEach(t),M4=n(vE,` command line arguments as
following:`),vE.forEach(t),Ig=c(e),Rt=l(e,"OL",{});var jE=r(Rt);Ds=l(jE,"LI",{});var fh=r(Ds);Z4=n(fh,"replace "),Sf=l(fh,"CODE",{});var RL=r(Sf);N4=n(RL,"python -m torch.distributed.launch"),RL.forEach(t),H4=n(fh," with "),Cf=l(fh,"CODE",{});var IL=r(Cf);B4=n(IL,"deepspeed"),IL.forEach(t),W4=n(fh,"."),fh.forEach(t),F4=c(jE),De=l(jE,"LI",{});var Mn=r(De);V4=n(Mn,"add a new argument "),xf=l(Mn,"CODE",{});var UL=r(xf);Y4=n(UL,"--deepspeed ds_config.json"),UL.forEach(t),K4=n(Mn,", where "),Rf=l(Mn,"CODE",{});var GL=r(Rf);J4=n(GL,"ds_config.json"),GL.forEach(t),X4=n(Mn,` is the DeepSpeed configuration file as
documented `),qo=l(Mn,"A",{href:!0,rel:!0});var LL=r(qo);Q4=n(LL,"here"),LL.forEach(t),e6=n(Mn,". The file naming is up to you."),Mn.forEach(t),jE.forEach(t),Ug=c(e),pi=l(e,"P",{});var ML=r(pi);s6=n(ML,"Therefore, if your original command line looked as follows:"),ML.forEach(t),Gg=c(e),d($o.$$.fragment,e),Lg=c(e),ii=l(e,"P",{});var ZL=r(ii);t6=n(ZL,"Now it should be:"),ZL.forEach(t),Mg=c(e),d(ko.$$.fragment,e),Zg=c(e),U=l(e,"P",{});var ye=r(U);a6=n(ye,"Unlike, "),If=l(ye,"CODE",{});var NL=r(If);n6=n(NL,"torch.distributed.launch"),NL.forEach(t),o6=n(ye," where you have to specify how many GPUs to use with "),Uf=l(ye,"CODE",{});var HL=r(Uf);l6=n(HL,"--nproc_per_node"),HL.forEach(t),r6=n(ye,`, with the
`),Gf=l(ye,"CODE",{});var BL=r(Gf);p6=n(BL,"deepspeed"),BL.forEach(t),i6=n(ye," launcher you don\u2019t have to use the corresponding "),Lf=l(ye,"CODE",{});var WL=r(Lf);u6=n(WL,"--num_gpus"),WL.forEach(t),c6=n(ye,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),Po=l(ye,"A",{href:!0,rel:!0});var FL=r(Po);h6=n(FL,"here"),FL.forEach(t),f6=n(ye,"."),ye.forEach(t),Ng=c(e),ne=l(e,"P",{});var Zn=r(ne);d6=n(Zn,"In fact, you can continue using "),Mf=l(Zn,"CODE",{});var VL=r(Mf);m6=n(VL,"-m torch.distributed.launch"),VL.forEach(t),_6=n(Zn,` with DeepSpeed as long as you don\u2019t need to use
`),Zf=l(Zn,"CODE",{});var YL=r(Zf);v6=n(YL,"deepspeed"),YL.forEach(t),j6=n(Zn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Nf=l(Zn,"CODE",{});var KL=r(Nf);g6=n(KL,"deepspeed"),KL.forEach(t),y6=n(Zn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Zn.forEach(t),Hg=c(e),It=l(e,"P",{});var gE=r(It);w6=n(gE,"Here is an example of running "),Hf=l(gE,"CODE",{});var JL=r(Hf);b6=n(JL,"run_translation.py"),JL.forEach(t),E6=n(gE," under DeepSpeed deploying all available GPUs:"),gE.forEach(t),Bg=c(e),d(Do.$$.fragment,e),Wg=c(e),Ut=l(e,"P",{});var yE=r(Ut);q6=n(yE,"Note that in the DeepSpeed documentation you are likely to see "),Bf=l(yE,"CODE",{});var XL=r(Bf);$6=n(XL,"--deepspeed --deepspeed_config ds_config.json"),XL.forEach(t),k6=n(yE,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),yE.forEach(t),Fg=c(e),Gt=l(e,"P",{});var wE=r(Gt);P6=n(wE,"For some practical usage examples, please, see this "),zo=l(wE,"A",{href:!0,rel:!0});var QL=r(zo);D6=n(QL,"post"),QL.forEach(t),z6=n(wE,"."),wE.forEach(t),Vg=c(e),ui=l(e,"A",{id:!0}),r(ui).forEach(t),Yg=c(e),zs=l(e,"H3",{class:!0});var bE=r(zs);Lt=l(bE,"A",{id:!0,class:!0,href:!0});var eM=r(Lt);Wf=l(eM,"SPAN",{});var sM=r(Wf);d(Oo.$$.fragment,sM),sM.forEach(t),eM.forEach(t),O6=c(bE),Ff=l(bE,"SPAN",{});var tM=r(Ff);T6=n(tM,"Deployment with one GPU"),tM.forEach(t),bE.forEach(t),Kg=c(e),Mt=l(e,"P",{});var EE=r(Mt);A6=n(EE,"To deploy DeepSpeed with one GPU adjust the "),ci=l(EE,"A",{href:!0});var aM=r(ci);S6=n(aM,"Trainer"),aM.forEach(t),C6=n(EE," command line arguments as follows:"),EE.forEach(t),Jg=c(e),d(To.$$.fragment,e),Xg=c(e),Ge=l(e,"P",{});var dh=r(Ge);x6=n(dh,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Vf=l(dh,"CODE",{});var nM=r(Vf);R6=n(nM,"--num_gpus=1"),nM.forEach(t),I6=n(dh,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),Ao=l(dh,"A",{href:!0,rel:!0});var oM=r(Ao);U6=n(oM,"documentation"),oM.forEach(t),G6=n(dh," discusses the launcher options."),dh.forEach(t),Qg=c(e),hi=l(e,"P",{});var lM=r(hi);L6=n(lM,"Why would you want to use DeepSpeed with just one GPU?"),lM.forEach(t),ey=c(e),Zt=l(e,"OL",{});var qE=r(Zt);Yf=l(qE,"LI",{});var rM=r(Yf);M6=n(rM,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),rM.forEach(t),Z6=c(qE),Kf=l(qE,"LI",{});var pM=r(Kf);N6=n(pM,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),pM.forEach(t),qE.forEach(t),sy=c(e),fi=l(e,"P",{});var iM=r(fi);H6=n(iM,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),iM.forEach(t),ty=c(e),d(So.$$.fragment,e),ay=c(e),di=l(e,"P",{});var uM=r(di);B6=n(uM,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),uM.forEach(t),ny=c(e),Nt=l(e,"P",{});var $E=r(Nt);W6=n($E,"For a practical usage example of this type of deployment, please, see this "),Co=l($E,"A",{href:!0,rel:!0});var cM=r(Co);F6=n(cM,"post"),cM.forEach(t),V6=n($E,"."),$E.forEach(t),oy=c(e),mi=l(e,"P",{});var hM=r(mi);Y6=n(hM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),hM.forEach(t),ly=c(e),_i=l(e,"P",{});var fM=r(_i);K6=n(fM,"Notes:"),fM.forEach(t),ry=c(e),vi=l(e,"UL",{});var dM=r(vi);Os=l(dM,"LI",{});var mh=r(Os);xo=l(mh,"P",{});var kE=r(xo);J6=n(kE,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Jf=l(kE,"CODE",{});var mM=r(Jf);X6=n(mM,"CUDA_VISIBLE_DEVICES"),mM.forEach(t),Q6=n(kE,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),kE.forEach(t),e7=c(mh),d(Ro.$$.fragment,mh),s7=c(mh),Xf=l(mh,"P",{});var _M=r(Xf);t7=n(_M,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),_M.forEach(t),mh.forEach(t),dM.forEach(t),py=c(e),ji=l(e,"A",{id:!0}),r(ji).forEach(t),iy=c(e),Ts=l(e,"H3",{class:!0});var PE=r(Ts);Ht=l(PE,"A",{id:!0,class:!0,href:!0});var vM=r(Ht);Qf=l(vM,"SPAN",{});var jM=r(Qf);d(Io.$$.fragment,jM),jM.forEach(t),vM.forEach(t),a7=c(PE),ed=l(PE,"SPAN",{});var gM=r(ed);n7=n(gM,"Deployment in Notebooks"),gM.forEach(t),PE.forEach(t),uy=c(e),Bt=l(e,"P",{});var DE=r(Bt);o7=n(DE,"The problem with running notebook cells as a script is that there is no normal "),sd=l(DE,"CODE",{});var yM=r(sd);l7=n(yM,"deepspeed"),yM.forEach(t),r7=n(DE,` launcher to rely on, so
under certain setups we have to emulate it.`),DE.forEach(t),cy=c(e),gi=l(e,"P",{});var wM=r(gi);p7=n(wM,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),wM.forEach(t),hy=c(e),d(Uo.$$.fragment,e),fy=c(e),Wt=l(e,"P",{});var zE=r(Wt);i7=n(zE,"Note: "),td=l(zE,"CODE",{});var bM=r(td);u7=n(bM,"..."),bM.forEach(t),c7=n(zE," stands for the normal arguments that you\u2019d pass to the functions."),zE.forEach(t),dy=c(e),yi=l(e,"P",{});var EM=r(yi);h7=n(EM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),EM.forEach(t),my=c(e),wi=l(e,"P",{});var qM=r(wi);f7=n(qM,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),qM.forEach(t),_y=c(e),d(Go.$$.fragment,e),vy=c(e),Le=l(e,"P",{});var _h=r(Le);d7=n(_h,"If the training script is in a normal file and not in the notebook cells, you can launch "),ad=l(_h,"CODE",{});var $M=r(ad);m7=n($M,"deepspeed"),$M.forEach(t),_7=n(_h,` normally via
shell from a cell. For example, to use `),nd=l(_h,"CODE",{});var kM=r(nd);v7=n(kM,"run_translation.py"),kM.forEach(t),j7=n(_h," you would launch it with:"),_h.forEach(t),jy=c(e),d(Lo.$$.fragment,e),gy=c(e),Ft=l(e,"P",{});var OE=r(Ft);g7=n(OE,"or with "),od=l(OE,"CODE",{});var PM=r(od);y7=n(PM,"%%bash"),PM.forEach(t),w7=n(OE," magic, where you can write a multi-line code for the shell program to run:"),OE.forEach(t),yy=c(e),d(Mo.$$.fragment,e),wy=c(e),bi=l(e,"P",{});var DM=r(bi);b7=n(DM,"In such case you don\u2019t need any of the code presented at the beginning of this section."),DM.forEach(t),by=c(e),Vt=l(e,"P",{});var TE=r(Vt);E7=n(TE,"Note: While "),ld=l(TE,"CODE",{});var zM=r(ld);q7=n(zM,"%%bash"),zM.forEach(t),$7=n(TE,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),TE.forEach(t),Ey=c(e),Ei=l(e,"A",{id:!0}),r(Ei).forEach(t),qy=c(e),As=l(e,"H3",{class:!0});var AE=r(As);Yt=l(AE,"A",{id:!0,class:!0,href:!0});var OM=r(Yt);rd=l(OM,"SPAN",{});var TM=r(rd);d(Zo.$$.fragment,TM),TM.forEach(t),OM.forEach(t),k7=c(AE),pd=l(AE,"SPAN",{});var AM=r(pd);P7=n(AM,"Configuration"),AM.forEach(t),AE.forEach(t),$y=c(e),Kt=l(e,"P",{});var SE=r(Kt);D7=n(SE,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),No=l(SE,"A",{href:!0,rel:!0});var SM=r(No);z7=n(SM,"following documentation"),SM.forEach(t),O7=n(SE,"."),SE.forEach(t),ky=c(e),Jt=l(e,"P",{});var CE=r(Jt);T7=n(CE,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Ho=l(CE,"A",{href:!0,rel:!0});var CM=r(Ho);A7=n(CM,`the DeepSpeedExamples
repo`),CM.forEach(t),S7=n(CE,":"),CE.forEach(t),Py=c(e),d(Bo.$$.fragment,e),Dy=c(e),Xt=l(e,"P",{});var xE=r(Xt);C7=n(xE,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),id=l(xE,"CODE",{});var xM=r(id);x7=n(xM,".json"),xM.forEach(t),R7=n(xE," files with:"),xE.forEach(t),zy=c(e),d(Wo.$$.fragment,e),Oy=c(e),Qt=l(e,"P",{});var RE=r(Qt);I7=n(RE,"Some more examples are to be found in the "),Fo=l(RE,"A",{href:!0,rel:!0});var RM=r(Fo);U7=n(RM,"main repo"),RM.forEach(t),G7=n(RE," as well."),RE.forEach(t),Ty=c(e),qi=l(e,"P",{});var IM=r(qi);L7=n(IM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),IM.forEach(t),Ay=c(e),oe=l(e,"P",{});var Nn=r(oe);M7=n(Nn,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),ud=l(Nn,"CODE",{});var UM=r(ud);Z7=n(UM,"AdamW"),UM.forEach(t),N7=n(Nn," optimizer and "),cd=l(Nn,"CODE",{});var GM=r(cd);H7=n(GM,"WarmupLR"),GM.forEach(t),B7=n(Nn,` scheduler and will enable mixed
precision training if `),hd=l(Nn,"CODE",{});var LM=r(hd);W7=n(LM,"--fp16"),LM.forEach(t),F7=n(Nn," is passed:"),Nn.forEach(t),Sy=c(e),d(Vo.$$.fragment,e),Cy=c(e),ea=l(e,"P",{});var IE=r(ea);V7=n(IE,"When you execute the program, DeepSpeed will log the configuration it received from the "),$i=l(IE,"A",{href:!0});var MM=r($i);Y7=n(MM,"Trainer"),MM.forEach(t),K7=n(IE,`
to the console, so you can see exactly what was the final configuration passed to it.`),IE.forEach(t),xy=c(e),ki=l(e,"A",{id:!0}),r(ki).forEach(t),Ry=c(e),Ss=l(e,"H3",{class:!0});var UE=r(Ss);sa=l(UE,"A",{id:!0,class:!0,href:!0});var ZM=r(sa);fd=l(ZM,"SPAN",{});var NM=r(fd);d(Yo.$$.fragment,NM),NM.forEach(t),ZM.forEach(t),J7=c(UE),dd=l(UE,"SPAN",{});var HM=r(dd);X7=n(HM,"Passing Configuration"),HM.forEach(t),UE.forEach(t),Iy=c(e),G=l(e,"P",{});var we=r(G);Q7=n(we,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),Pi=l(we,"A",{href:!0});var BM=r(Pi);e8=n(BM,"Trainer"),BM.forEach(t),s8=n(we," via "),Di=l(we,"A",{href:!0});var WM=r(Di);t8=n(WM,"TrainingArguments"),WM.forEach(t),a8=n(we," then for the "),md=l(we,"CODE",{});var FM=r(md);n8=n(FM,"deepspeed"),FM.forEach(t),o8=n(we,` argument you can
pass a nested `),_d=l(we,"CODE",{});var VM=r(_d);l8=n(VM,"dict"),VM.forEach(t),r8=n(we,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),zi=l(we,"A",{href:!0});var YM=r(zi);p8=n(YM,"TrainingArguments"),YM.forEach(t),i8=n(we,"."),we.forEach(t),Uy=c(e),Oi=l(e,"P",{});var KM=r(Oi);u8=n(KM,"To summarize you can do:"),KM.forEach(t),Gy=c(e),d(Ko.$$.fragment,e),Ly=c(e),Ti=l(e,"P",{});var JM=r(Ti);c8=n(JM,"or:"),JM.forEach(t),My=c(e),d(Jo.$$.fragment,e),Zy=c(e),Ai=l(e,"A",{id:!0}),r(Ai).forEach(t),Ny=c(e),Cs=l(e,"H3",{class:!0});var GE=r(Cs);ta=l(GE,"A",{id:!0,class:!0,href:!0});var XM=r(ta);vd=l(XM,"SPAN",{});var QM=r(vd);d(Xo.$$.fragment,QM),QM.forEach(t),XM.forEach(t),h8=c(GE),jd=l(GE,"SPAN",{});var eZ=r(jd);f8=n(eZ,"Shared Configuration"),eZ.forEach(t),GE.forEach(t),Hy=c(e),d(aa.$$.fragment,e),By=c(e),Me=l(e,"P",{});var vh=r(Me);d8=n(vh,"Some configuration values are required by both the "),Si=l(vh,"A",{href:!0});var sZ=r(Si);m8=n(sZ,"Trainer"),sZ.forEach(t),_8=n(vh,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ci=l(vh,"A",{href:!0});var tZ=r(Ci);v8=n(tZ,"Trainer"),tZ.forEach(t),j8=n(vh," command line arguments."),vh.forEach(t),Wy=c(e),na=l(e,"P",{});var LE=r(na);g8=n(LE,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),xi=l(LE,"A",{href:!0});var aZ=r(xi);y8=n(aZ,"Trainer"),aZ.forEach(t),w8=n(LE,` do the majority
of configuration for you.`),LE.forEach(t),Fy=c(e),Ze=l(e,"P",{});var jh=r(Ze);b8=n(jh,"Therefore, in the rest of this guide you will find a special configuration value: "),gd=l(jh,"CODE",{});var nZ=r(gd);E8=n(nZ,"auto"),nZ.forEach(t),q8=n(jh,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ri=l(jh,"A",{href:!0});var oZ=r(Ri);$8=n(oZ,"Trainer"),oZ.forEach(t),k8=n(jh,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),jh.forEach(t),Vy=c(e),Ii=l(e,"P",{});var lZ=r(Ii);P8=n(lZ,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),lZ.forEach(t),Yy=c(e),oa=l(e,"P",{});var ME=r(oa);D8=n(ME,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ui=l(ME,"A",{href:!0});var rZ=r(Ui);z8=n(rZ,"TrainingArguments"),rZ.forEach(t),O8=n(ME," based on that. The steps are:"),ME.forEach(t),Ky=c(e),la=l(e,"OL",{});var ZE=r(la);yd=l(ZE,"LI",{});var pZ=r(yd);T8=n(pZ,"Create or load the DeepSpeed configuration to be used as a master configuration"),pZ.forEach(t),A8=c(ZE),Qo=l(ZE,"LI",{});var NE=r(Qo);S8=n(NE,"Create the "),Gi=l(NE,"A",{href:!0});var iZ=r(Gi);C8=n(iZ,"TrainingArguments"),iZ.forEach(t),x8=n(NE," object based on these values"),NE.forEach(t),ZE.forEach(t),Jy=c(e),le=l(e,"P",{});var Hn=r(le);R8=n(Hn,"Do note that some values, such as "),wd=l(Hn,"CODE",{});var uZ=r(wd);I8=n(uZ,"scheduler.params.total_num_steps"),uZ.forEach(t),U8=n(Hn,` are calculated by
`),Li=l(Hn,"A",{href:!0});var cZ=r(Li);G8=n(cZ,"Trainer"),cZ.forEach(t),L8=n(Hn," during "),bd=l(Hn,"CODE",{});var hZ=r(bd);M8=n(hZ,"train"),hZ.forEach(t),Z8=n(Hn,", but you can of course do the math yourself."),Hn.forEach(t),Xy=c(e),Mi=l(e,"A",{id:!0}),r(Mi).forEach(t),Qy=c(e),xs=l(e,"H3",{class:!0});var HE=r(xs);ra=l(HE,"A",{id:!0,class:!0,href:!0});var fZ=r(ra);Ed=l(fZ,"SPAN",{});var dZ=r(Ed);d(el.$$.fragment,dZ),dZ.forEach(t),fZ.forEach(t),N8=c(HE),qd=l(HE,"SPAN",{});var mZ=r(qd);H8=n(mZ,"ZeRO"),mZ.forEach(t),HE.forEach(t),ew=c(e),sl=l(e,"P",{});var yG=r(sl);tl=l(yG,"A",{href:!0,rel:!0});var _Z=r(tl);B8=n(_Z,"Zero Redundancy Optimizer (ZeRO)"),_Z.forEach(t),W8=n(yG,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),yG.forEach(t),sw=c(e),Ne=l(e,"P",{});var gh=r(Ne);F8=n(gh,"The "),$d=l(gh,"CODE",{});var vZ=r($d);V8=n(vZ,"zero_optimization"),vZ.forEach(t),Y8=n(gh," section of the configuration file is the most important part ("),al=l(gh,"A",{href:!0,rel:!0});var jZ=r(al);K8=n(jZ,"docs"),jZ.forEach(t),J8=n(gh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),gh.forEach(t),tw=c(e),pa=l(e,"P",{});var BE=r(pa);X8=n(BE,"This section has to be configured exclusively via DeepSpeed configuration - the "),Zi=l(BE,"A",{href:!0});var gZ=r(Zi);Q8=n(gZ,"Trainer"),gZ.forEach(t),ek=n(BE,` provides
no equivalent command line arguments.`),BE.forEach(t),aw=c(e),Ni=l(e,"P",{});var yZ=r(Ni);sk=n(yZ,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),yZ.forEach(t),nw=c(e),Hi=l(e,"A",{id:!0}),r(Hi).forEach(t),ow=c(e),Rs=l(e,"H4",{class:!0});var WE=r(Rs);ia=l(WE,"A",{id:!0,class:!0,href:!0});var wZ=r(ia);kd=l(wZ,"SPAN",{});var bZ=r(kd);d(nl.$$.fragment,bZ),bZ.forEach(t),wZ.forEach(t),tk=c(WE),Pd=l(WE,"SPAN",{});var EZ=r(Pd);ak=n(EZ,"ZeRO-2 Config"),EZ.forEach(t),WE.forEach(t),lw=c(e),Bi=l(e,"P",{});var qZ=r(Bi);nk=n(qZ,"The following is an example of configuration for ZeRO stage 2:"),qZ.forEach(t),rw=c(e),d(ol.$$.fragment,e),pw=c(e),Wi=l(e,"P",{});var $Z=r(Wi);Dd=l($Z,"STRONG",{});var kZ=r(Dd);ok=n(kZ,"Performance tuning:"),kZ.forEach(t),$Z.forEach(t),iw=c(e),He=l(e,"UL",{});var yh=r(He);Is=l(yh,"LI",{});var wh=r(Is);lk=n(wh,"enabling "),zd=l(wh,"CODE",{});var PZ=r(zd);rk=n(PZ,"offload_optimizer"),PZ.forEach(t),pk=n(wh," should reduce GPU RAM usage (it requires "),Od=l(wh,"CODE",{});var DZ=r(Od);ik=n(DZ,'"stage": 2'),DZ.forEach(t),uk=n(wh,")"),wh.forEach(t),ck=c(yh),L=l(yh,"LI",{});var te=r(L);Td=l(te,"CODE",{});var zZ=r(Td);hk=n(zZ,'"overlap_comm": true'),zZ.forEach(t),fk=n(te," trades off increased GPU RAM usage to lower all-reduce latency. "),Ad=l(te,"CODE",{});var OZ=r(Ad);dk=n(OZ,"overlap_comm"),OZ.forEach(t),mk=n(te,` uses 4.5x
the `),Sd=l(te,"CODE",{});var TZ=r(Sd);_k=n(TZ,"allgather_bucket_size"),TZ.forEach(t),vk=n(te," and "),Cd=l(te,"CODE",{});var AZ=r(Cd);jk=n(AZ,"reduce_bucket_size"),AZ.forEach(t),gk=n(te,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),xd=l(te,"CODE",{});var SZ=r(xd);yk=n(SZ,"5e8 x 2Bytes x 2 x 4.5"),SZ.forEach(t),wk=n(te,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Rd=l(te,"CODE",{});var CZ=r(Rd);bk=n(CZ,"2e8"),CZ.forEach(t),Ek=n(te,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),te.forEach(t),qk=c(yh),Id=l(yh,"LI",{});var xZ=r(Id);$k=n(xZ,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),xZ.forEach(t),yh.forEach(t),uw=c(e),Be=l(e,"P",{});var bh=r(Be);kk=n(bh,"Additionally, "),Ud=l(bh,"CODE",{});var RZ=r(Ud);Pk=n(RZ,"deepspeed==0.4.4"),RZ.forEach(t),Dk=n(bh," added a new option "),Gd=l(bh,"CODE",{});var IZ=r(Gd);zk=n(IZ,"round_robin_gradients"),IZ.forEach(t),Ok=n(bh," which you can enable with:"),bh.forEach(t),cw=c(e),d(ll.$$.fragment,e),hw=c(e),Fi=l(e,"P",{});var UZ=r(Fi);Tk=n(UZ,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),UZ.forEach(t),fw=c(e),Vi=l(e,"A",{id:!0}),r(Vi).forEach(t),dw=c(e),Us=l(e,"H4",{class:!0});var FE=r(Us);ua=l(FE,"A",{id:!0,class:!0,href:!0});var GZ=r(ua);Ld=l(GZ,"SPAN",{});var LZ=r(Ld);d(rl.$$.fragment,LZ),LZ.forEach(t),GZ.forEach(t),Ak=c(FE),Md=l(FE,"SPAN",{});var MZ=r(Md);Sk=n(MZ,"ZeRO-3 Config"),MZ.forEach(t),FE.forEach(t),mw=c(e),Yi=l(e,"P",{});var ZZ=r(Yi);Ck=n(ZZ,"The following is an example of configuration for ZeRO stage 3:"),ZZ.forEach(t),_w=c(e),d(pl.$$.fragment,e),vw=c(e),K=l(e,"P",{});var ws=r(K);xk=n(ws,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Zd=l(ws,"CODE",{});var NZ=r(Zd);Rk=n(NZ,'"device": "cpu"'),NZ.forEach(t),Ik=n(ws,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Nd=l(ws,"CODE",{});var HZ=r(Nd);Uk=n(HZ,"none"),HZ.forEach(t),Gk=n(ws," instead of "),Hd=l(ws,"CODE",{});var BZ=r(Hd);Lk=n(BZ,"cpu"),BZ.forEach(t),Mk=n(ws," for the "),Bd=l(ws,"CODE",{});var WZ=r(Bd);Zk=n(WZ,"device"),WZ.forEach(t),Nk=n(ws,` entry. Offloading to
NVMe is discussed further down.`),ws.forEach(t),jw=c(e),We=l(e,"P",{});var Eh=r(We);Hk=n(Eh,"Pinned memory is enabled with "),Wd=l(Eh,"CODE",{});var FZ=r(Wd);Bk=n(FZ,"pin_memory"),FZ.forEach(t),Wk=n(Eh," set to "),Fd=l(Eh,"CODE",{});var VZ=r(Fd);Fk=n(VZ,"true"),VZ.forEach(t),Vk=n(Eh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),Eh.forEach(t),gw=c(e),Ki=l(e,"P",{});var YZ=r(Ki);Vd=l(YZ,"STRONG",{});var KZ=r(Vd);Yk=n(KZ,"Performance tuning:"),KZ.forEach(t),YZ.forEach(t),yw=c(e),ca=l(e,"UL",{});var VE=r(ca);il=l(VE,"LI",{});var YE=r(il);Yd=l(YE,"CODE",{});var JZ=r(Yd);Kk=n(JZ,"stage3_max_live_parameters"),JZ.forEach(t),Jk=n(YE,": "),Kd=l(YE,"CODE",{});var XZ=r(Kd);Xk=n(XZ,"1e9"),XZ.forEach(t),YE.forEach(t),Qk=c(VE),ul=l(VE,"LI",{});var KE=r(ul);Jd=l(KE,"CODE",{});var QZ=r(Jd);e9=n(QZ,"stage3_max_reuse_distance"),QZ.forEach(t),s9=n(KE,": "),Xd=l(KE,"CODE",{});var eN=r(Xd);t9=n(eN,"1e9"),eN.forEach(t),KE.forEach(t),VE.forEach(t),ww=c(e),M=l(e,"P",{});var be=r(M);a9=n(be,"If hitting OOM reduce "),Qd=l(be,"CODE",{});var sN=r(Qd);n9=n(sN,"stage3_max_live_parameters"),sN.forEach(t),o9=n(be," and "),em=l(be,"CODE",{});var tN=r(em);l9=n(tN,"stage3_max_reuse_distance"),tN.forEach(t),r9=n(be,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),sm=l(be,"CODE",{});var aN=r(sm);p9=n(aN,"1e9"),aN.forEach(t),i9=n(be,` would consume ~2GB. The memory is shared by
`),tm=l(be,"CODE",{});var nN=r(tm);u9=n(nN,"stage3_max_live_parameters"),nN.forEach(t),c9=n(be," and "),am=l(be,"CODE",{});var oN=r(am);h9=n(oN,"stage3_max_reuse_distance"),oN.forEach(t),f9=n(be,", so it\u2019s not additive, it\u2019s just 2GB total."),be.forEach(t),bw=c(e),ze=l(e,"P",{});var Sp=r(ze);nm=l(Sp,"CODE",{});var lN=r(nm);d9=n(lN,"stage3_max_live_parameters"),lN.forEach(t),m9=n(Sp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),om=l(Sp,"CODE",{});var rN=r(om);_9=n(rN,"stage3_max_reuse_distance"),rN.forEach(t),v9=n(Sp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),lm=l(Sp,"CODE",{});var pN=r(lm);j9=n(pN,"stage3_max_reuse_distance"),pN.forEach(t),g9=n(Sp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Sp.forEach(t),Ew=c(e),Ji=l(e,"P",{});var iN=r(Ji);y9=n(iN,"The following configuration values depend on the model\u2019s hidden size:"),iN.forEach(t),qw=c(e),Fe=l(e,"UL",{});var qh=r(Fe);cl=l(qh,"LI",{});var JE=r(cl);rm=l(JE,"CODE",{});var uN=r(rm);w9=n(uN,"reduce_bucket_size"),uN.forEach(t),b9=n(JE,": "),pm=l(JE,"CODE",{});var cN=r(pm);E9=n(cN,"hidden_size*hidden_size"),cN.forEach(t),JE.forEach(t),q9=c(qh),hl=l(qh,"LI",{});var XE=r(hl);im=l(XE,"CODE",{});var hN=r(im);$9=n(hN,"stage3_prefetch_bucket_size"),hN.forEach(t),k9=n(XE,": "),um=l(XE,"CODE",{});var fN=r(um);P9=n(fN,"0.9 * hidden_size * hidden_size"),fN.forEach(t),XE.forEach(t),D9=c(qh),fl=l(qh,"LI",{});var QE=r(fl);cm=l(QE,"CODE",{});var dN=r(cm);z9=n(dN,"stage3_param_persistence_threshold"),dN.forEach(t),O9=n(QE,": "),hm=l(QE,"CODE",{});var mN=r(hm);T9=n(mN,"10 * hidden_size"),mN.forEach(t),QE.forEach(t),qh.forEach(t),$w=c(e),Ve=l(e,"P",{});var $h=r(Ve);A9=n($h,"therefore set these values to "),fm=l($h,"CODE",{});var _N=r(fm);S9=n(_N,"auto"),_N.forEach(t),C9=n($h," and the "),Xi=l($h,"A",{href:!0});var vN=r(Xi);x9=n(vN,"Trainer"),vN.forEach(t),R9=n($h,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),$h.forEach(t),kw=c(e),dl=l(e,"P",{});var wG=r(dl);dm=l(wG,"CODE",{});var jN=r(dm);I9=n(jN,"stage3_gather_16bit_weights_on_model_save"),jN.forEach(t),U9=n(wG,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),wG.forEach(t),Pw=c(e),re=l(e,"P",{});var Bn=r(re);G9=n(Bn,"If you\u2019re migrating from ZeRO-2 configuration note that "),mm=l(Bn,"CODE",{});var gN=r(mm);L9=n(gN,"allgather_partitions"),gN.forEach(t),M9=n(Bn,", "),_m=l(Bn,"CODE",{});var yN=r(_m);Z9=n(yN,"allgather_bucket_size"),yN.forEach(t),N9=n(Bn,` and
`),vm=l(Bn,"CODE",{});var wN=r(vm);H9=n(wN,"reduce_scatter"),wN.forEach(t),B9=n(Bn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Bn.forEach(t),Dw=c(e),Qi=l(e,"UL",{});var bN=r(Qi);ml=l(bN,"LI",{});var eq=r(ml);jm=l(eq,"CODE",{});var EN=r(jm);W9=n(EN,"sub_group_size"),EN.forEach(t),F9=n(eq,": "),gm=l(eq,"CODE",{});var qN=r(gm);V9=n(qN,"1e9"),qN.forEach(t),eq.forEach(t),bN.forEach(t),zw=c(e),Oe=l(e,"P",{});var Cp=r(Oe);ym=l(Cp,"CODE",{});var $N=r(ym);Y9=n($N,"sub_group_size"),$N.forEach(t),K9=n(Cp,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),wm=l(Cp,"CODE",{});var kN=r(wm);J9=n(kN,"sub_group_size"),kN.forEach(t),X9=n(Cp,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),bm=l(Cp,"CODE",{});var PN=r(bm);Q9=n(PN,"sub_group_size"),PN.forEach(t),eP=n(Cp,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Cp.forEach(t),Ow=c(e),Ye=l(e,"P",{});var kh=r(Ye);sP=n(kh,"You can leave "),Em=l(kh,"CODE",{});var DN=r(Em);tP=n(DN,"sub_group_size"),DN.forEach(t),aP=n(kh," to its default value of "),qm=l(kh,"EM",{});var zN=r(qm);nP=n(zN,"1e9"),zN.forEach(t),oP=n(kh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),kh.forEach(t),Tw=c(e),ha=l(e,"OL",{});var sq=r(ha);_l=l(sq,"LI",{});var tq=r(_l);lP=n(tq,"Running into OOM during optimizer step: Reduce "),$m=l(tq,"CODE",{});var ON=r($m);rP=n(ON,"sub_group_size"),ON.forEach(t),pP=n(tq," to reduce memory utilization of temporary buffers"),tq.forEach(t),iP=c(sq),vl=l(sq,"LI",{});var aq=r(vl);uP=n(aq,"Optimizer Step is taking a long time: Increase "),km=l(aq,"CODE",{});var TN=r(km);cP=n(TN,"sub_group_size"),TN.forEach(t),hP=n(aq,` to improve bandwidth utilization as a result of
the increased data buffers.`),aq.forEach(t),sq.forEach(t),Aw=c(e),eu=l(e,"A",{id:!0}),r(eu).forEach(t),Sw=c(e),Gs=l(e,"H3",{class:!0});var nq=r(Gs);fa=l(nq,"A",{id:!0,class:!0,href:!0});var AN=r(fa);Pm=l(AN,"SPAN",{});var SN=r(Pm);d(jl.$$.fragment,SN),SN.forEach(t),AN.forEach(t),fP=c(nq),Dm=l(nq,"SPAN",{});var CN=r(Dm);dP=n(CN,"NVMe Support"),CN.forEach(t),nq.forEach(t),Cw=c(e),su=l(e,"P",{});var xN=r(su);mP=n(xN,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),xN.forEach(t),xw=c(e),tu=l(e,"P",{});var RN=r(tu);_P=n(RN,"The following configuration example enables NVMe to offload both optimizer states and the params:"),RN.forEach(t),Rw=c(e),d(gl.$$.fragment,e),Iw=c(e),da=l(e,"P",{});var oq=r(da);vP=n(oq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),zm=l(oq,"EM",{});var IN=r(zm);jP=n(IN,"\u201Cdevice\u201D: \u201Ccpu\u201D"),IN.forEach(t),gP=n(oq,")."),oq.forEach(t),Uw=c(e),Ke=l(e,"P",{});var Ph=r(Ke);yP=n(Ph,"Here is the full documentation for offloading "),yl=l(Ph,"A",{href:!0,rel:!0});var UN=r(yl);wP=n(UN,"optimizer states"),UN.forEach(t),bP=n(Ph," and "),wl=l(Ph,"A",{href:!0,rel:!0});var GN=r(wl);EP=n(GN,"parameters"),GN.forEach(t),qP=n(Ph,"."),Ph.forEach(t),Gw=c(e),ma=l(e,"P",{});var lq=r(ma);$P=n(lq,"Make sure that your "),Om=l(lq,"CODE",{});var LN=r(Om);kP=n(LN,"nvme_path"),LN.forEach(t),PP=n(lq,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),lq.forEach(t),Lw=c(e),Je=l(e,"P",{});var Dh=r(Je);DP=n(Dh,"In order to figure out the optimal "),Tm=l(Dh,"CODE",{});var MN=r(Tm);zP=n(MN,"aio"),MN.forEach(t),OP=n(Dh,` configuration block you must run a benchmark on your target setup, as
`),bl=l(Dh,"A",{href:!0,rel:!0});var ZN=r(bl);TP=n(ZN,"explained here"),ZN.forEach(t),AP=n(Dh,"."),Dh.forEach(t),Mw=c(e),au=l(e,"A",{id:!0}),r(au).forEach(t),Zw=c(e),Ls=l(e,"H4",{class:!0});var rq=r(Ls);_a=l(rq,"A",{id:!0,class:!0,href:!0});var NN=r(_a);Am=l(NN,"SPAN",{});var HN=r(Am);d(El.$$.fragment,HN),HN.forEach(t),NN.forEach(t),SP=c(rq),Sm=l(rq,"SPAN",{});var BN=r(Sm);CP=n(BN,"ZeRO-2 vs ZeRO-3 Performance"),BN.forEach(t),rq.forEach(t),Nw=c(e),nu=l(e,"P",{});var WN=r(nu);xP=n(WN,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),WN.forEach(t),Hw=c(e),ou=l(e,"P",{});var FN=r(ou);RP=n(FN,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),FN.forEach(t),Bw=c(e),va=l(e,"UL",{});var pq=r(va);Ms=l(pq,"LI",{});var zh=r(Ms);IP=n(zh,"set "),Cm=l(zh,"CODE",{});var VN=r(Cm);UP=n(VN,"stage3_param_persistence_threshold"),VN.forEach(t),GP=n(zh," to a very large number - larger than the largest parameter, e.g., "),xm=l(zh,"CODE",{});var YN=r(xm);LP=n(YN,"6 * hidden_size * hidden_size"),YN.forEach(t),MP=n(zh,". This will keep the parameters on the GPUs."),zh.forEach(t),ZP=c(pq),ql=l(pq,"LI",{});var iq=r(ql);NP=n(iq,"turn off "),Rm=l(iq,"CODE",{});var KN=r(Rm);HP=n(KN,"offload_params"),KN.forEach(t),BP=n(iq," since ZeRO-2 doesn\u2019t have that option."),iq.forEach(t),pq.forEach(t),Ww=c(e),Xe=l(e,"P",{});var Oh=r(Xe);WP=n(Oh,"The performance will likely improve significantly with just "),Im=l(Oh,"CODE",{});var JN=r(Im);FP=n(JN,"offload_params"),JN.forEach(t),VP=n(Oh,` turned off, even if you don\u2019t change
`),Um=l(Oh,"CODE",{});var XN=r(Um);YP=n(XN,"stage3_param_persistence_threshold"),XN.forEach(t),KP=n(Oh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Oh.forEach(t),Fw=c(e),lu=l(e,"A",{id:!0}),r(lu).forEach(t),Vw=c(e),Zs=l(e,"H4",{class:!0});var uq=r(Zs);ja=l(uq,"A",{id:!0,class:!0,href:!0});var QN=r(ja);Gm=l(QN,"SPAN",{});var eH=r(Gm);d($l.$$.fragment,eH),eH.forEach(t),QN.forEach(t),JP=c(uq),Lm=l(uq,"SPAN",{});var sH=r(Lm);XP=n(sH,"ZeRO-2 Example"),sH.forEach(t),uq.forEach(t),Yw=c(e),ga=l(e,"P",{});var cq=r(ga);QP=n(cq,"Here is a full ZeRO-2 auto-configuration file "),Mm=l(cq,"CODE",{});var tH=r(Mm);eD=n(tH,"ds_config_zero2.json"),tH.forEach(t),sD=n(cq,":"),cq.forEach(t),Kw=c(e),d(kl.$$.fragment,e),Jw=c(e),ya=l(e,"P",{});var hq=r(ya);tD=n(hq,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Zm=l(hq,"CODE",{});var aH=r(Zm);aD=n(aH,"auto"),aH.forEach(t),nD=n(hq," settings in it."),hq.forEach(t),Xw=c(e),d(Pl.$$.fragment,e),Qw=c(e),ru=l(e,"A",{id:!0}),r(ru).forEach(t),e2=c(e),Ns=l(e,"H4",{class:!0});var fq=r(Ns);wa=l(fq,"A",{id:!0,class:!0,href:!0});var nH=r(wa);Nm=l(nH,"SPAN",{});var oH=r(Nm);d(Dl.$$.fragment,oH),oH.forEach(t),nH.forEach(t),oD=c(fq),Hm=l(fq,"SPAN",{});var lH=r(Hm);lD=n(lH,"ZeRO-3 Example"),lH.forEach(t),fq.forEach(t),s2=c(e),ba=l(e,"P",{});var dq=r(ba);rD=n(dq,"Here is a full ZeRO-3 auto-configuration file "),Bm=l(dq,"CODE",{});var rH=r(Bm);pD=n(rH,"ds_config_zero3.json"),rH.forEach(t),iD=n(dq,":"),dq.forEach(t),t2=c(e),d(zl.$$.fragment,e),a2=c(e),Ea=l(e,"P",{});var mq=r(Ea);uD=n(mq,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Wm=l(mq,"CODE",{});var pH=r(Wm);cD=n(pH,"auto"),pH.forEach(t),hD=n(mq," settings in it."),mq.forEach(t),n2=c(e),d(Ol.$$.fragment,e),o2=c(e),Hs=l(e,"H3",{class:!0});var _q=r(Hs);qa=l(_q,"A",{id:!0,class:!0,href:!0});var iH=r(qa);Fm=l(iH,"SPAN",{});var uH=r(Fm);d(Tl.$$.fragment,uH),uH.forEach(t),iH.forEach(t),fD=c(_q),Vm=l(_q,"SPAN",{});var cH=r(Vm);dD=n(cH,"Optimizer and Scheduler"),cH.forEach(t),_q.forEach(t),l2=c(e),$a=l(e,"P",{});var vq=r($a);mD=n(vq,"As long as you don\u2019t enable "),Ym=l(vq,"CODE",{});var hH=r(Ym);_D=n(hH,"offload_optimizer"),hH.forEach(t),vD=n(vq,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),vq.forEach(t),r2=c(e),pu=l(e,"P",{});var fH=r(pu);jD=n(fH,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),fH.forEach(t),p2=c(e),ka=l(e,"P",{});var jq=r(ka);gD=n(jq,"It is possible to use a non-DeepSpeed optimizer when "),Km=l(jq,"CODE",{});var dH=r(Km);yD=n(dH,"offload_optimizer"),dH.forEach(t),wD=n(jq,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),jq.forEach(t),i2=c(e),iu=l(e,"A",{id:!0}),r(iu).forEach(t),u2=c(e),Bs=l(e,"H4",{class:!0});var gq=r(Bs);Pa=l(gq,"A",{id:!0,class:!0,href:!0});var mH=r(Pa);Jm=l(mH,"SPAN",{});var _H=r(Jm);d(Al.$$.fragment,_H),_H.forEach(t),mH.forEach(t),bD=c(gq),Xm=l(gq,"SPAN",{});var vH=r(Xm);ED=n(vH,"Optimizer"),vH.forEach(t),gq.forEach(t),c2=c(e),Qe=l(e,"P",{});var Th=r(Qe);qD=n(Th,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Qm=l(Th,"CODE",{});var jH=r(Qm);$D=n(jH,"torch"),jH.forEach(t),kD=n(Th,". The full documentation is "),Sl=l(Th,"A",{href:!0,rel:!0});var gH=r(Sl);PD=n(gH,"here"),gH.forEach(t),DD=n(Th,"."),Th.forEach(t),h2=c(e),$=l(e,"P",{});var A=r($);zD=n(A,"If you don\u2019t configure the "),e_=l(A,"CODE",{});var yH=r(e_);OD=n(yH,"optimizer"),yH.forEach(t),TD=n(A," entry in the configuration file, the "),uu=l(A,"A",{href:!0});var wH=r(uu);AD=n(wH,"Trainer"),wH.forEach(t),SD=n(A,` will
automatically set it to `),s_=l(A,"CODE",{});var bH=r(s_);CD=n(bH,"AdamW"),bH.forEach(t),xD=n(A,` and will use the supplied values or the defaults for the following command line
arguments: `),t_=l(A,"CODE",{});var EH=r(t_);RD=n(EH,"--learning_rate"),EH.forEach(t),ID=n(A,", "),a_=l(A,"CODE",{});var qH=r(a_);UD=n(qH,"--adam_beta1"),qH.forEach(t),GD=n(A,", "),n_=l(A,"CODE",{});var $H=r(n_);LD=n($H,"--adam_beta2"),$H.forEach(t),MD=n(A,", "),o_=l(A,"CODE",{});var kH=r(o_);ZD=n(kH,"--adam_epsilon"),kH.forEach(t),ND=n(A," and "),l_=l(A,"CODE",{});var PH=r(l_);HD=n(PH,"--weight_decay"),PH.forEach(t),BD=n(A,"."),A.forEach(t),f2=c(e),es=l(e,"P",{});var Ah=r(es);WD=n(Ah,"Here is an example of the auto-configured "),r_=l(Ah,"CODE",{});var DH=r(r_);FD=n(DH,"optimizer"),DH.forEach(t),VD=n(Ah," entry for "),p_=l(Ah,"CODE",{});var zH=r(p_);YD=n(zH,"AdamW"),zH.forEach(t),KD=n(Ah,":"),Ah.forEach(t),d2=c(e),d(Cl.$$.fragment,e),m2=c(e),cu=l(e,"P",{});var OH=r(cu);JD=n(OH,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),OH.forEach(t),_2=c(e),pe=l(e,"UL",{});var Wn=r(pe);xl=l(Wn,"LI",{});var yq=r(xl);i_=l(yq,"CODE",{});var TH=r(i_);XD=n(TH,"lr"),TH.forEach(t),QD=n(yq," with the value of "),u_=l(yq,"CODE",{});var AH=r(u_);ez=n(AH,"--learning_rate"),AH.forEach(t),yq.forEach(t),sz=c(Wn),Rl=l(Wn,"LI",{});var wq=r(Rl);c_=l(wq,"CODE",{});var SH=r(c_);tz=n(SH,"betas"),SH.forEach(t),az=n(wq," with the value of "),h_=l(wq,"CODE",{});var CH=r(h_);nz=n(CH,"--adam_beta1 --adam_beta2"),CH.forEach(t),wq.forEach(t),oz=c(Wn),Il=l(Wn,"LI",{});var bq=r(Il);f_=l(bq,"CODE",{});var xH=r(f_);lz=n(xH,"eps"),xH.forEach(t),rz=n(bq," with the value of "),d_=l(bq,"CODE",{});var RH=r(d_);pz=n(RH,"--adam_epsilon"),RH.forEach(t),bq.forEach(t),iz=c(Wn),Ul=l(Wn,"LI",{});var Eq=r(Ul);m_=l(Eq,"CODE",{});var IH=r(m_);uz=n(IH,"weight_decay"),IH.forEach(t),cz=n(Eq," with the value of "),__=l(Eq,"CODE",{});var UH=r(__);hz=n(UH,"--weight_decay"),UH.forEach(t),Eq.forEach(t),Wn.forEach(t),v2=c(e),hu=l(e,"P",{});var GH=r(hu);fz=n(GH,"Therefore please remember to tune the shared hyperparameters on the command line."),GH.forEach(t),j2=c(e),fu=l(e,"P",{});var LH=r(fu);dz=n(LH,"You can also set the values explicitly:"),LH.forEach(t),g2=c(e),d(Gl.$$.fragment,e),y2=c(e),Da=l(e,"P",{});var qq=r(Da);mz=n(qq,"But then you\u2019re on your own synchronizing the "),du=l(qq,"A",{href:!0});var MH=r(du);_z=n(MH,"Trainer"),MH.forEach(t),vz=n(qq,` command line arguments and the DeepSpeed
configuration.`),qq.forEach(t),w2=c(e),mu=l(e,"P",{});var ZH=r(mu);jz=n(ZH,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),ZH.forEach(t),b2=c(e),d(Ll.$$.fragment,e),E2=c(e),ie=l(e,"P",{});var Fn=r(ie);gz=n(Fn,"Similarly to "),v_=l(Fn,"CODE",{});var NH=r(v_);yz=n(NH,"AdamW"),NH.forEach(t),wz=n(Fn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),j_=l(Fn,"CODE",{});var HH=r(j_);bz=n(HH,"weight_decay"),HH.forEach(t),Ez=n(Fn," around "),g_=l(Fn,"CODE",{});var BH=r(g_);qz=n(BH,"0.01"),BH.forEach(t),$z=n(Fn,"."),Fn.forEach(t),q2=c(e),_u=l(e,"A",{id:!0}),r(_u).forEach(t),$2=c(e),Ws=l(e,"H4",{class:!0});var $q=r(Ws);za=l($q,"A",{id:!0,class:!0,href:!0});var WH=r(za);y_=l(WH,"SPAN",{});var FH=r(y_);d(Ml.$$.fragment,FH),FH.forEach(t),WH.forEach(t),kz=c($q),w_=l($q,"SPAN",{});var VH=r(w_);Pz=n(VH,"Scheduler"),VH.forEach(t),$q.forEach(t),k2=c(e),Z=l(e,"P",{});var Ee=r(Z);Dz=n(Ee,"DeepSpeed supports "),b_=l(Ee,"CODE",{});var YH=r(b_);zz=n(YH,"LRRangeTest"),YH.forEach(t),Oz=n(Ee,", "),E_=l(Ee,"CODE",{});var KH=r(E_);Tz=n(KH,"OneCycle"),KH.forEach(t),Az=n(Ee,", "),q_=l(Ee,"CODE",{});var JH=r(q_);Sz=n(JH,"WarmupLR"),JH.forEach(t),Cz=n(Ee," and "),$_=l(Ee,"CODE",{});var XH=r($_);xz=n(XH,"WarmupDecayLR"),XH.forEach(t),Rz=n(Ee,` learning rate schedulers. The full
documentation is `),Zl=l(Ee,"A",{href:!0,rel:!0});var QH=r(Zl);Iz=n(QH,"here"),QH.forEach(t),Uz=n(Ee,"."),Ee.forEach(t),P2=c(e),vu=l(e,"P",{});var eB=r(vu);Gz=n(eB,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),eB.forEach(t),D2=c(e),Oa=l(e,"UL",{});var kq=r(Oa);Nl=l(kq,"LI",{});var Pq=r(Nl);k_=l(Pq,"CODE",{});var sB=r(k_);Lz=n(sB,"WarmupLR"),sB.forEach(t),Mz=n(Pq," via "),P_=l(Pq,"CODE",{});var tB=r(P_);Zz=n(tB,"--lr_scheduler_type constant_with_warmup"),tB.forEach(t),Pq.forEach(t),Nz=c(kq),ss=l(kq,"LI",{});var xp=r(ss);D_=l(xp,"CODE",{});var aB=r(D_);Hz=n(aB,"WarmupDecayLR"),aB.forEach(t),Bz=n(xp," via "),z_=l(xp,"CODE",{});var nB=r(z_);Wz=n(nB,"--lr_scheduler_type linear"),nB.forEach(t),Fz=n(xp,". This is also the default value for "),O_=l(xp,"CODE",{});var oB=r(O_);Vz=n(oB,"--lr_scheduler_type"),oB.forEach(t),Yz=n(xp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),xp.forEach(t),kq.forEach(t),z2=c(e),O=l(e,"P",{});var X=r(O);Kz=n(X,"If you don\u2019t configure the "),T_=l(X,"CODE",{});var lB=r(T_);Jz=n(lB,"scheduler"),lB.forEach(t),Xz=n(X," entry in the configuration file, the "),ju=l(X,"A",{href:!0});var rB=r(ju);Qz=n(rB,"Trainer"),rB.forEach(t),eO=n(X,` will use
the values of `),A_=l(X,"CODE",{});var pB=r(A_);sO=n(pB,"--lr_scheduler_type"),pB.forEach(t),tO=n(X,", "),S_=l(X,"CODE",{});var iB=r(S_);aO=n(iB,"--learning_rate"),iB.forEach(t),nO=n(X," and "),C_=l(X,"CODE",{});var uB=r(C_);oO=n(uB,"--warmup_steps"),uB.forEach(t),lO=n(X," or "),x_=l(X,"CODE",{});var cB=r(x_);rO=n(cB,"--warmup_ratio"),cB.forEach(t),pO=n(X,` to configure a
\u{1F917} Transformers version of it.`),X.forEach(t),O2=c(e),ts=l(e,"P",{});var Sh=r(ts);iO=n(Sh,"Here is an example of the auto-configured "),R_=l(Sh,"CODE",{});var hB=r(R_);uO=n(hB,"scheduler"),hB.forEach(t),cO=n(Sh," entry for "),I_=l(Sh,"CODE",{});var fB=r(I_);hO=n(fB,"WarmupLR"),fB.forEach(t),fO=n(Sh,":"),Sh.forEach(t),T2=c(e),d(Hl.$$.fragment,e),A2=c(e),as=l(e,"P",{});var Ch=r(as);dO=n(Ch,"Since "),U_=l(Ch,"EM",{});var dB=r(U_);mO=n(dB,"\u201Cauto\u201D"),dB.forEach(t),_O=n(Ch," is used the "),gu=l(Ch,"A",{href:!0});var mB=r(gu);vO=n(mB,"Trainer"),mB.forEach(t),jO=n(Ch,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Ch.forEach(t),S2=c(e),ue=l(e,"UL",{});var Vn=r(ue);Ta=l(Vn,"LI",{});var Zj=r(Ta);G_=l(Zj,"CODE",{});var _B=r(G_);gO=n(_B,"warmup_min_lr"),_B.forEach(t),yO=n(Zj," with the value of "),L_=l(Zj,"CODE",{});var vB=r(L_);wO=n(vB,"0"),vB.forEach(t),bO=n(Zj,"."),Zj.forEach(t),EO=c(Vn),Aa=l(Vn,"LI",{});var Nj=r(Aa);M_=l(Nj,"CODE",{});var jB=r(M_);qO=n(jB,"warmup_max_lr"),jB.forEach(t),$O=n(Nj," with the value of "),Z_=l(Nj,"CODE",{});var gB=r(Z_);kO=n(gB,"--learning_rate"),gB.forEach(t),PO=n(Nj,"."),Nj.forEach(t),DO=c(Vn),ns=l(Vn,"LI",{});var Rp=r(ns);N_=l(Rp,"CODE",{});var yB=r(N_);zO=n(yB,"warmup_num_steps"),yB.forEach(t),OO=n(Rp," with the value of "),H_=l(Rp,"CODE",{});var wB=r(H_);TO=n(wB,"--warmup_steps"),wB.forEach(t),AO=n(Rp," if provided. Otherwise will use "),B_=l(Rp,"CODE",{});var bB=r(B_);SO=n(bB,"--warmup_ratio"),bB.forEach(t),CO=n(Rp,`
multiplied by the number of training steps and rounded up.`),Rp.forEach(t),xO=c(Vn),os=l(Vn,"LI",{});var Ip=r(os);W_=l(Ip,"CODE",{});var EB=r(W_);RO=n(EB,"total_num_steps"),EB.forEach(t),IO=n(Ip," with either the value of "),F_=l(Ip,"CODE",{});var qB=r(F_);UO=n(qB,"--max_steps"),qB.forEach(t),GO=n(Ip,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),V_=l(Ip,"CODE",{});var $B=r(V_);LO=n($B,"WarmupDecayLR"),$B.forEach(t),MO=n(Ip,")."),Ip.forEach(t),Vn.forEach(t),C2=c(e),yu=l(e,"P",{});var kB=r(yu);ZO=n(kB,"You can, of course, take over any or all of the configuration values and set those yourself:"),kB.forEach(t),x2=c(e),d(Bl.$$.fragment,e),R2=c(e),Sa=l(e,"P",{});var Dq=r(Sa);NO=n(Dq,"But then you\u2019re on your own synchronizing the "),wu=l(Dq,"A",{href:!0});var PB=r(wu);HO=n(PB,"Trainer"),PB.forEach(t),BO=n(Dq,` command line arguments and the DeepSpeed
configuration.`),Dq.forEach(t),I2=c(e),Ca=l(e,"P",{});var zq=r(Ca);WO=n(zq,"For example, for "),Y_=l(zq,"CODE",{});var DB=r(Y_);FO=n(DB,"WarmupDecayLR"),DB.forEach(t),VO=n(zq,", you can use the following entry:"),zq.forEach(t),U2=c(e),d(Wl.$$.fragment,e),G2=c(e),J=l(e,"P",{});var bs=r(J);YO=n(bs,"and "),K_=l(bs,"CODE",{});var zB=r(K_);KO=n(zB,"total_num_steps"),zB.forEach(t),JO=n(bs,", "),J_=l(bs,"CODE",{});var OB=r(J_);XO=n(OB,"warmup_max_lr"),OB.forEach(t),QO=n(bs,", "),X_=l(bs,"CODE",{});var TB=r(X_);eT=n(TB,"warmup_num_steps"),TB.forEach(t),sT=n(bs," and "),Q_=l(bs,"CODE",{});var AB=r(Q_);tT=n(AB,"total_num_steps"),AB.forEach(t),aT=n(bs," will be set at loading time."),bs.forEach(t),L2=c(e),bu=l(e,"A",{id:!0}),r(bu).forEach(t),M2=c(e),Fs=l(e,"H3",{class:!0});var Oq=r(Fs);xa=l(Oq,"A",{id:!0,class:!0,href:!0});var SB=r(xa);e1=l(SB,"SPAN",{});var CB=r(e1);d(Fl.$$.fragment,CB),CB.forEach(t),SB.forEach(t),nT=c(Oq),s1=l(Oq,"SPAN",{});var xB=r(s1);oT=n(xB,"fp32 Precision"),xB.forEach(t),Oq.forEach(t),Z2=c(e),Eu=l(e,"P",{});var RB=r(Eu);lT=n(RB,"Deepspeed supports the full fp32 and the fp16 mixed precision."),RB.forEach(t),N2=c(e),Ra=l(e,"P",{});var Tq=r(Ra);rT=n(Tq,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),t1=l(Tq,"CODE",{});var IB=r(t1);pT=n(IB,"NaN"),IB.forEach(t),iT=n(Tq,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),Tq.forEach(t),H2=c(e),d(Vl.$$.fragment,e),B2=c(e),Ia=l(e,"P",{});var Aq=r(Ia);uT=n(Aq,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Yl=l(Aq,"A",{href:!0,rel:!0});var UB=r(Yl);cT=n(UB,"TensorFloat-32(TF32) on Ampere devices"),UB.forEach(t),hT=n(Aq,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Aq.forEach(t),W2=c(e),ce=l(e,"P",{});var Yn=r(ce);fT=n(Yn,"With the \u{1F917} Trainer you can use "),a1=l(Yn,"CODE",{});var GB=r(a1);dT=n(GB,"--tf32"),GB.forEach(t),mT=n(Yn," to enable it, or disable it with "),n1=l(Yn,"CODE",{});var LB=r(n1);_T=n(LB,"--tf32 0"),LB.forEach(t),vT=n(Yn," or "),o1=l(Yn,"CODE",{});var MB=r(o1);jT=n(MB,"--no_tf32"),MB.forEach(t),gT=n(Yn,". By default the PyTorch default is used."),Yn.forEach(t),F2=c(e),qu=l(e,"A",{id:!0}),r(qu).forEach(t),V2=c(e),Vs=l(e,"H3",{class:!0});var Sq=r(Vs);Ua=l(Sq,"A",{id:!0,class:!0,href:!0});var ZB=r(Ua);l1=l(ZB,"SPAN",{});var NB=r(l1);d(Kl.$$.fragment,NB),NB.forEach(t),ZB.forEach(t),yT=c(Sq),r1=l(Sq,"SPAN",{});var HB=r(r1);wT=n(HB,"Automatic Mixed Precision"),HB.forEach(t),Sq.forEach(t),Y2=c(e),$u=l(e,"P",{});var BB=r($u);bT=n(BB,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),BB.forEach(t),K2=c(e),Ys=l(e,"H3",{class:!0});var Cq=r(Ys);Ga=l(Cq,"A",{id:!0,class:!0,href:!0});var WB=r(Ga);p1=l(WB,"SPAN",{});var FB=r(p1);d(Jl.$$.fragment,FB),FB.forEach(t),WB.forEach(t),ET=c(Cq),i1=l(Cq,"SPAN",{});var VB=r(i1);qT=n(VB,"fp16"),VB.forEach(t),Cq.forEach(t),J2=c(e),ku=l(e,"P",{});var YB=r(ku);$T=n(YB,"To configure pytorch AMP-like mode with fp16 (float16) set:"),YB.forEach(t),X2=c(e),d(Xl.$$.fragment,e),Q2=c(e),ls=l(e,"P",{});var xh=r(ls);kT=n(xh,"and the "),Pu=l(xh,"A",{href:!0});var KB=r(Pu);PT=n(KB,"Trainer"),KB.forEach(t),DT=n(xh,` will automatically enable or disable it based on the value of
`),u1=l(xh,"CODE",{});var JB=r(u1);zT=n(JB,"args.fp16_backend"),JB.forEach(t),OT=n(xh,". The rest of config values are up to you."),xh.forEach(t),eb=c(e),rs=l(e,"P",{});var Rh=r(rs);TT=n(Rh,"This mode gets enabled when "),c1=l(Rh,"CODE",{});var XB=r(c1);AT=n(XB,"--fp16 --fp16_backend amp"),XB.forEach(t),ST=n(Rh," or "),h1=l(Rh,"CODE",{});var QB=r(h1);CT=n(QB,"--fp16_full_eval"),QB.forEach(t),xT=n(Rh," command line args are passed."),Rh.forEach(t),sb=c(e),Du=l(e,"P",{});var eW=r(Du);RT=n(eW,"You can also enable/disable this mode explicitly:"),eW.forEach(t),tb=c(e),d(Ql.$$.fragment,e),ab=c(e),La=l(e,"P",{});var xq=r(La);IT=n(xq,"But then you\u2019re on your own synchronizing the "),zu=l(xq,"A",{href:!0});var sW=r(zu);UT=n(sW,"Trainer"),sW.forEach(t),GT=n(xq,` command line arguments and the DeepSpeed
configuration.`),xq.forEach(t),nb=c(e),Ma=l(e,"P",{});var Rq=r(Ma);LT=n(Rq,"Here is the "),er=l(Rq,"A",{href:!0,rel:!0});var tW=r(er);MT=n(tW,"documentation"),tW.forEach(t),ZT=n(Rq,"."),Rq.forEach(t),ob=c(e),Ks=l(e,"H3",{class:!0});var Iq=r(Ks);Za=l(Iq,"A",{id:!0,class:!0,href:!0});var aW=r(Za);f1=l(aW,"SPAN",{});var nW=r(f1);d(sr.$$.fragment,nW),nW.forEach(t),aW.forEach(t),NT=c(Iq),d1=l(Iq,"SPAN",{});var oW=r(d1);HT=n(oW,"bf16"),oW.forEach(t),Iq.forEach(t),lb=c(e),Ou=l(e,"P",{});var lW=r(Ou);BT=n(lW,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),lW.forEach(t),rb=c(e),d(tr.$$.fragment,e),pb=c(e),Tu=l(e,"P",{});var rW=r(Tu);WT=n(rW,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),rW.forEach(t),ib=c(e),ps=l(e,"P",{});var Ih=r(ps);FT=n(Ih,"This mode gets enabled when "),m1=l(Ih,"CODE",{});var pW=r(m1);VT=n(pW,"--bf16"),pW.forEach(t),YT=n(Ih," or "),_1=l(Ih,"CODE",{});var iW=r(_1);KT=n(iW,"--bf16_full_eval"),iW.forEach(t),JT=n(Ih," command line args are passed."),Ih.forEach(t),ub=c(e),Au=l(e,"P",{});var uW=r(Au);XT=n(uW,"You can also enable/disable this mode explicitly:"),uW.forEach(t),cb=c(e),d(ar.$$.fragment,e),hb=c(e),d(Na.$$.fragment,e),fb=c(e),Js=l(e,"H3",{class:!0});var Uq=r(Js);Ha=l(Uq,"A",{id:!0,class:!0,href:!0});var cW=r(Ha);v1=l(cW,"SPAN",{});var hW=r(v1);d(nr.$$.fragment,hW),hW.forEach(t),cW.forEach(t),QT=c(Uq),j1=l(Uq,"SPAN",{});var fW=r(j1);eA=n(fW,"apex"),fW.forEach(t),Uq.forEach(t),db=c(e),Su=l(e,"P",{});var dW=r(Su);sA=n(dW,"To configure apex AMP-like mode set:"),dW.forEach(t),mb=c(e),d(or.$$.fragment,e),_b=c(e),he=l(e,"P",{});var Kn=r(he);tA=n(Kn,"and the "),Cu=l(Kn,"A",{href:!0});var mW=r(Cu);aA=n(mW,"Trainer"),mW.forEach(t),nA=n(Kn," will automatically configure it based on the values of "),g1=l(Kn,"CODE",{});var _W=r(g1);oA=n(_W,"args.fp16_backend"),_W.forEach(t),lA=n(Kn,` and
`),y1=l(Kn,"CODE",{});var vW=r(y1);rA=n(vW,"args.fp16_opt_level"),vW.forEach(t),pA=n(Kn,"."),Kn.forEach(t),vb=c(e),Ba=l(e,"P",{});var Gq=r(Ba);iA=n(Gq,"This mode gets enabled when "),w1=l(Gq,"CODE",{});var jW=r(w1);uA=n(jW,"--fp16 --fp16_backend apex --fp16_opt_level 01"),jW.forEach(t),cA=n(Gq," command line args are passed."),Gq.forEach(t),jb=c(e),xu=l(e,"P",{});var gW=r(xu);hA=n(gW,"You can also configure this mode explicitly:"),gW.forEach(t),gb=c(e),d(lr.$$.fragment,e),yb=c(e),Wa=l(e,"P",{});var Lq=r(Wa);fA=n(Lq,"But then you\u2019re on your own synchronizing the "),Ru=l(Lq,"A",{href:!0});var yW=r(Ru);dA=n(yW,"Trainer"),yW.forEach(t),mA=n(Lq,` command line arguments and the DeepSpeed
configuration.`),Lq.forEach(t),wb=c(e),Fa=l(e,"P",{});var Mq=r(Fa);_A=n(Mq,"Here is the "),rr=l(Mq,"A",{href:!0,rel:!0});var wW=r(rr);vA=n(wW,"documentation"),wW.forEach(t),jA=n(Mq,"."),Mq.forEach(t),bb=c(e),Iu=l(e,"A",{id:!0}),r(Iu).forEach(t),Eb=c(e),Xs=l(e,"H3",{class:!0});var Zq=r(Xs);Va=l(Zq,"A",{id:!0,class:!0,href:!0});var bW=r(Va);b1=l(bW,"SPAN",{});var EW=r(b1);d(pr.$$.fragment,EW),EW.forEach(t),bW.forEach(t),gA=c(Zq),E1=l(Zq,"SPAN",{});var qW=r(E1);yA=n(qW,"Batch Size"),qW.forEach(t),Zq.forEach(t),qb=c(e),Uu=l(e,"P",{});var $W=r(Uu);wA=n($W,"To configure batch size, use:"),$W.forEach(t),$b=c(e),d(ir.$$.fragment,e),kb=c(e),N=l(e,"P",{});var qe=r(N);bA=n(qe,"and the "),Gu=l(qe,"A",{href:!0});var kW=r(Gu);EA=n(kW,"Trainer"),kW.forEach(t),qA=n(qe," will automatically set "),q1=l(qe,"CODE",{});var PW=r(q1);$A=n(PW,"train_micro_batch_size_per_gpu"),PW.forEach(t),kA=n(qe,` to the value of
`),$1=l(qe,"CODE",{});var DW=r($1);PA=n(DW,"args.per_device_train_batch_size"),DW.forEach(t),DA=n(qe," and "),k1=l(qe,"CODE",{});var zW=r(k1);zA=n(zW,"train_batch_size"),zW.forEach(t),OA=n(qe," to "),P1=l(qe,"CODE",{});var OW=r(P1);TA=n(OW,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),OW.forEach(t),AA=n(qe,"."),qe.forEach(t),Pb=c(e),Lu=l(e,"P",{});var TW=r(Lu);SA=n(TW,"You can also set the values explicitly:"),TW.forEach(t),Db=c(e),d(ur.$$.fragment,e),zb=c(e),Ya=l(e,"P",{});var Nq=r(Ya);CA=n(Nq,"But then you\u2019re on your own synchronizing the "),Mu=l(Nq,"A",{href:!0});var AW=r(Mu);xA=n(AW,"Trainer"),AW.forEach(t),RA=n(Nq,` command line arguments and the DeepSpeed
configuration.`),Nq.forEach(t),Ob=c(e),Zu=l(e,"A",{id:!0}),r(Zu).forEach(t),Tb=c(e),Qs=l(e,"H3",{class:!0});var Hq=r(Qs);Ka=l(Hq,"A",{id:!0,class:!0,href:!0});var SW=r(Ka);D1=l(SW,"SPAN",{});var CW=r(D1);d(cr.$$.fragment,CW),CW.forEach(t),SW.forEach(t),IA=c(Hq),z1=l(Hq,"SPAN",{});var xW=r(z1);UA=n(xW,"Gradient Accumulation"),xW.forEach(t),Hq.forEach(t),Ab=c(e),Nu=l(e,"P",{});var RW=r(Nu);GA=n(RW,"To configure gradient accumulation set:"),RW.forEach(t),Sb=c(e),d(hr.$$.fragment,e),Cb=c(e),is=l(e,"P",{});var Uh=r(is);LA=n(Uh,"and the "),Hu=l(Uh,"A",{href:!0});var IW=r(Hu);MA=n(IW,"Trainer"),IW.forEach(t),ZA=n(Uh," will automatically set it to the value of "),O1=l(Uh,"CODE",{});var UW=r(O1);NA=n(UW,"args.gradient_accumulation_steps"),UW.forEach(t),HA=n(Uh,"."),Uh.forEach(t),xb=c(e),Bu=l(e,"P",{});var GW=r(Bu);BA=n(GW,"You can also set the value explicitly:"),GW.forEach(t),Rb=c(e),d(fr.$$.fragment,e),Ib=c(e),Ja=l(e,"P",{});var Bq=r(Ja);WA=n(Bq,"But then you\u2019re on your own synchronizing the "),Wu=l(Bq,"A",{href:!0});var LW=r(Wu);FA=n(LW,"Trainer"),LW.forEach(t),VA=n(Bq,` command line arguments and the DeepSpeed
configuration.`),Bq.forEach(t),Ub=c(e),Fu=l(e,"A",{id:!0}),r(Fu).forEach(t),Gb=c(e),et=l(e,"H3",{class:!0});var Wq=r(et);Xa=l(Wq,"A",{id:!0,class:!0,href:!0});var MW=r(Xa);T1=l(MW,"SPAN",{});var ZW=r(T1);d(dr.$$.fragment,ZW),ZW.forEach(t),MW.forEach(t),YA=c(Wq),A1=l(Wq,"SPAN",{});var NW=r(A1);KA=n(NW,"Gradient Clipping"),NW.forEach(t),Wq.forEach(t),Lb=c(e),Vu=l(e,"P",{});var HW=r(Vu);JA=n(HW,"To configure gradient gradient clipping set:"),HW.forEach(t),Mb=c(e),d(mr.$$.fragment,e),Zb=c(e),us=l(e,"P",{});var Gh=r(us);XA=n(Gh,"and the "),Yu=l(Gh,"A",{href:!0});var BW=r(Yu);QA=n(BW,"Trainer"),BW.forEach(t),eS=n(Gh," will automatically set it to the value of "),S1=l(Gh,"CODE",{});var WW=r(S1);sS=n(WW,"args.max_grad_norm"),WW.forEach(t),tS=n(Gh,"."),Gh.forEach(t),Nb=c(e),Ku=l(e,"P",{});var FW=r(Ku);aS=n(FW,"You can also set the value explicitly:"),FW.forEach(t),Hb=c(e),d(_r.$$.fragment,e),Bb=c(e),Qa=l(e,"P",{});var Fq=r(Qa);nS=n(Fq,"But then you\u2019re on your own synchronizing the "),Ju=l(Fq,"A",{href:!0});var VW=r(Ju);oS=n(VW,"Trainer"),VW.forEach(t),lS=n(Fq,` command line arguments and the DeepSpeed
configuration.`),Fq.forEach(t),Wb=c(e),Xu=l(e,"A",{id:!0}),r(Xu).forEach(t),Fb=c(e),st=l(e,"H3",{class:!0});var Vq=r(st);en=l(Vq,"A",{id:!0,class:!0,href:!0});var YW=r(en);C1=l(YW,"SPAN",{});var KW=r(C1);d(vr.$$.fragment,KW),KW.forEach(t),YW.forEach(t),rS=c(Vq),x1=l(Vq,"SPAN",{});var JW=r(x1);pS=n(JW,"Getting The Model Weights Out"),JW.forEach(t),Vq.forEach(t),Vb=c(e),sn=l(e,"P",{});var Yq=r(sn);iS=n(Yq,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),R1=l(Yq,"CODE",{});var XW=r(R1);uS=n(XW,"global_step*/*optim_states.pt"),XW.forEach(t),cS=n(Yq,` (this is glob
pattern), and are saved under the normal checkpoint.`),Yq.forEach(t),Yb=c(e),Qu=l(e,"P",{});var QW=r(Qu);I1=l(QW,"STRONG",{});var eF=r(I1);hS=n(eF,"FP16 Weights:"),eF.forEach(t),QW.forEach(t),Kb=c(e),tn=l(e,"P",{});var Kq=r(tn);fS=n(Kq,"When a model is saved under ZeRO-2, you end up having the normal "),U1=l(Kq,"CODE",{});var sF=r(U1);dS=n(sF,"pytorch_model.bin"),sF.forEach(t),mS=n(Kq,` file with the model weights, but
they are only the fp16 version of the weights.`),Kq.forEach(t),Jb=c(e),T=l(e,"P",{});var Q=r(T);_S=n(Q,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),G1=l(Q,"CODE",{});var tF=r(G1);vS=n(tF,'"stage3_gather_16bit_weights_on_model_save": true'),tF.forEach(t),jS=n(Q," is required to get the "),L1=l(Q,"CODE",{});var aF=r(L1);gS=n(aF,"Trainer"),aF.forEach(t),yS=n(Q,` to save the fp16
version of the weights. If this setting is `),M1=l(Q,"CODE",{});var nF=r(M1);wS=n(nF,"False"),nF.forEach(t),bS=c(Q),Z1=l(Q,"CODE",{});var oF=r(Z1);ES=n(oF,"pytorch_model.bin"),oF.forEach(t),qS=n(Q," won\u2019t be created. This is because by default DeepSpeed\u2019s "),N1=l(Q,"CODE",{});var lF=r(N1);$S=n(lF,"state_dict"),lF.forEach(t),kS=n(Q," contains a placeholder and not the real weights. If we were to save this "),H1=l(Q,"CODE",{});var rF=r(H1);PS=n(rF,"state_dict"),rF.forEach(t),DS=n(Q," it won\u2019t be possible to load it back."),Q.forEach(t),Xb=c(e),d(jr.$$.fragment,e),Qb=c(e),ec=l(e,"P",{});var pF=r(ec);B1=l(pF,"STRONG",{});var iF=r(B1);zS=n(iF,"FP32 Weights:"),iF.forEach(t),pF.forEach(t),e3=c(e),an=l(e,"P",{});var Jq=r(an);OS=n(Jq,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),gr=l(Jq,"A",{href:!0,rel:!0});var uF=r(gr);TS=n(uF,"models hub"),uF.forEach(t),AS=n(Jq,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Jq.forEach(t),s3=c(e),sc=l(e,"P",{});var cF=r(sc);W1=l(cF,"STRONG",{});var hF=r(W1);SS=n(hF,"Live FP32 Weights Recovery:"),hF.forEach(t),cF.forEach(t),t3=c(e),tc=l(e,"P",{});var fF=r(tc);CS=n(fF,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),fF.forEach(t),a3=c(e),ac=l(e,"P",{});var dF=r(ac);xS=n(dF,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),dF.forEach(t),n3=c(e),d(yr.$$.fragment,e),o3=c(e),cs=l(e,"P",{});var Lh=r(cs);RS=n(Lh,"If you\u2019re using the "),F1=l(Lh,"CODE",{});var mF=r(F1);IS=n(mF,"--load_best_model_at_end"),mF.forEach(t),US=n(Lh," class:"),V1=l(Lh,"EM",{});var _F=r(V1);GS=n(_F,"~transformers.TrainingArguments"),_F.forEach(t),LS=n(Lh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Lh.forEach(t),l3=c(e),d(wr.$$.fragment,e),r3=c(e),d(nn.$$.fragment,e),p3=c(e),on=l(e,"P",{});var Xq=r(on);MS=n(Xq,"Of course, you don\u2019t have to use class:"),Y1=l(Xq,"EM",{});var vF=r(Y1);ZS=n(vF,"~transformers.Trainer"),vF.forEach(t),NS=n(Xq,` and you can adjust the examples above to your own
trainer.`),Xq.forEach(t),i3=c(e),ln=l(e,"P",{});var Qq=r(ln);HS=n(Qq,"If for some reason you want more refinement, you can also extract the fp32 "),K1=l(Qq,"CODE",{});var jF=r(K1);BS=n(jF,"state_dict"),jF.forEach(t),WS=n(Qq,` of the weights and apply
these yourself as is shown in the following example:`),Qq.forEach(t),u3=c(e),d(br.$$.fragment,e),c3=c(e),nc=l(e,"P",{});var gF=r(nc);J1=l(gF,"STRONG",{});var yF=r(J1);FS=n(yF,"Offline FP32 Weights Recovery:"),yF.forEach(t),gF.forEach(t),h3=c(e),hs=l(e,"P",{});var Mh=r(hs);VS=n(Mh,"DeepSpeed creates a special conversion script "),X1=l(Mh,"CODE",{});var wF=r(X1);YS=n(wF,"zero_to_fp32.py"),wF.forEach(t),KS=n(Mh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),Q1=l(Mh,"CODE",{});var bF=r(Q1);JS=n(bF,"Trainer"),bF.forEach(t),XS=n(Mh," to do the extraction."),Mh.forEach(t),f3=c(e),oc=l(e,"P",{});var EF=r(oc);QS=n(EF,"Let\u2019s say your checkpoint folder looks like this:"),EF.forEach(t),d3=c(e),d(Er.$$.fragment,e),m3=c(e),rn=l(e,"P",{});var e5=r(rn);eC=n(e5,"In this example there is just one DeepSpeed checkpoint sub-folder "),ev=l(e5,"EM",{});var qF=r(ev);sC=n(qF,"global_step1"),qF.forEach(t),tC=n(e5,`. Therefore to reconstruct the fp32
weights just run:`),e5.forEach(t),_3=c(e),d(qr.$$.fragment,e),v3=c(e),pn=l(e,"P",{});var s5=r(pn);aC=n(s5,"This is it. "),sv=l(s5,"CODE",{});var $F=r(sv);nC=n($F,"pytorch_model.bin"),$F.forEach(t),oC=n(s5," will now contain the full fp32 model weights consolidated from multiple GPUs."),s5.forEach(t),j3=c(e),lc=l(e,"P",{});var kF=r(lc);lC=n(kF,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),kF.forEach(t),g3=c(e),$r=l(e,"P",{});var bG=r($r);tv=l(bG,"CODE",{});var PF=r(tv);rC=n(PF,"python zero_to_fp32.py -h"),PF.forEach(t),pC=n(bG," will give you usage details."),bG.forEach(t),y3=c(e),fs=l(e,"P",{});var Zh=r(fs);iC=n(Zh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),av=l(Zh,"CODE",{});var DF=r(av);uC=n(DF,"latest"),DF.forEach(t),cC=n(Zh,`, which in the current
example will contain `),nv=l(Zh,"CODE",{});var zF=r(nv);hC=n(zF,"global_step1"),zF.forEach(t),fC=n(Zh,"."),Zh.forEach(t),w3=c(e),rc=l(e,"P",{});var OF=r(rc);dC=n(OF,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),OF.forEach(t),b3=c(e),tt=l(e,"H3",{class:!0});var t5=r(tt);un=l(t5,"A",{id:!0,class:!0,href:!0});var TF=r(un);ov=l(TF,"SPAN",{});var AF=r(ov);d(kr.$$.fragment,AF),AF.forEach(t),TF.forEach(t),mC=c(t5),lv=l(t5,"SPAN",{});var SF=r(lv);_C=n(SF,"ZeRO-3 and Infinity Nuances"),SF.forEach(t),t5.forEach(t),E3=c(e),pc=l(e,"P",{});var CF=r(pc);vC=n(CF,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),CF.forEach(t),q3=c(e),ic=l(e,"P",{});var xF=r(ic);jC=n(xF,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),xF.forEach(t),$3=c(e),uc=l(e,"P",{});var RF=r(uc);gC=n(RF,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),RF.forEach(t),k3=c(e),at=l(e,"H4",{class:!0});var a5=r(at);cn=l(a5,"A",{id:!0,class:!0,href:!0});var IF=r(cn);rv=l(IF,"SPAN",{});var UF=r(rv);d(Pr.$$.fragment,UF),UF.forEach(t),IF.forEach(t),yC=c(a5),pv=l(a5,"SPAN",{});var GF=r(pv);wC=n(GF,"Constructing Massive Models"),GF.forEach(t),a5.forEach(t),P3=c(e),hn=l(e,"P",{});var n5=r(hn);bC=n(n5,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),iv=l(n5,"EM",{});var LF=r(iv);EC=n(LF,"deepspeed.zero.Init()"),LF.forEach(t),qC=n(n5,`
context manager (which is also a function decorator), like so:`),n5.forEach(t),D3=c(e),d(Dr.$$.fragment,e),z3=c(e),cc=l(e,"P",{});var MF=r(cc);$C=n(MF,"As you can see this gives you a randomly initialized model."),MF.forEach(t),O3=c(e),D=l(e,"P",{});var W=r(D);kC=n(W,"If you want to use a pretrained model, "),uv=l(W,"CODE",{});var ZF=r(uv);PC=n(ZF,"model_class.from_pretrained"),ZF.forEach(t),DC=n(W,` will activate this feature as long as
`),cv=l(W,"CODE",{});var NF=r(cv);zC=n(NF,"is_deepspeed_zero3_enabled()"),NF.forEach(t),OC=n(W," returns "),hv=l(W,"CODE",{});var HF=r(hv);TC=n(HF,"True"),HF.forEach(t),AC=n(W,`, which currently is setup by the
`),hc=l(W,"A",{href:!0});var BF=r(hc);SC=n(BF,"TrainingArguments"),BF.forEach(t),CC=n(W,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),fc=l(W,"A",{href:!0});var WF=r(fc);xC=n(WF,"TrainingArguments"),WF.forEach(t),RC=n(W," object "),fv=l(W,"STRONG",{});var FF=r(fv);IC=n(FF,"before"),FF.forEach(t),UC=n(W,` calling
`),dv=l(W,"CODE",{});var VF=r(dv);GC=n(VF,"from_pretrained"),VF.forEach(t),LC=n(W,". Here is an example of a possible sequence:"),W.forEach(t),T3=c(e),d(zr.$$.fragment,e),A3=c(e),fn=l(e,"P",{});var o5=r(fn);MC=n(o5,"If you\u2019re using the official example scripts and your command line arguments include "),mv=l(o5,"CODE",{});var YF=r(mv);ZC=n(YF,"--deepspeed ds_config.json"),YF.forEach(t),NC=n(o5,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),o5.forEach(t),S3=c(e),dc=l(e,"P",{});var KF=r(dc);HC=n(KF,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),KF.forEach(t),C3=c(e),dn=l(e,"P",{});var l5=r(dn);BC=n(l5,"For full details on this method and other related features please refer to "),Or=l(l5,"A",{href:!0,rel:!0});var JF=r(Or);WC=n(JF,"Constructing Massive Models"),JF.forEach(t),FC=n(l5,"."),l5.forEach(t),x3=c(e),fe=l(e,"P",{});var Jn=r(fe);VC=n(Jn,"Also when loading fp16-pretrained models, you will want to tell "),_v=l(Jn,"CODE",{});var XF=r(_v);YC=n(XF,"from_pretrained"),XF.forEach(t),KC=n(Jn,` to use
`),vv=l(Jn,"CODE",{});var QF=r(vv);JC=n(QF,"torch_dtype=torch.float16"),QF.forEach(t),XC=n(Jn,". For details, please, see "),mc=l(Jn,"A",{href:!0});var eV=r(mc);QC=n(eV,"from_pretrained-torch-dtype"),eV.forEach(t),ex=n(Jn,"."),Jn.forEach(t),R3=c(e),nt=l(e,"H4",{class:!0});var r5=r(nt);mn=l(r5,"A",{id:!0,class:!0,href:!0});var sV=r(mn);jv=l(sV,"SPAN",{});var tV=r(jv);d(Tr.$$.fragment,tV),tV.forEach(t),sV.forEach(t),sx=c(r5),gv=l(r5,"SPAN",{});var aV=r(gv);tx=n(aV,"Gathering Parameters"),aV.forEach(t),r5.forEach(t),I3=c(e),Ar=l(e,"P",{});var EG=r(Ar);ax=n(EG,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Sr=l(EG,"A",{href:!0,rel:!0});var nV=r(Sr);nx=n(nV,"Gathering Parameters"),nV.forEach(t),EG.forEach(t),U3=c(e),_n=l(e,"P",{});var p5=r(_n);ox=n(p5,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),yv=l(p5,"CODE",{});var oV=r(yv);lx=n(oV,"from_pretrained"),oV.forEach(t),rx=n(p5,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),p5.forEach(t),G3=c(e),_c=l(e,"P",{});var lV=r(_c);px=n(lV,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),lV.forEach(t),L3=c(e),d(Cr.$$.fragment,e),M3=c(e),ds=l(e,"P",{});var Nh=r(ds);ix=n(Nh,"stress on "),wv=l(Nh,"CODE",{});var rV=r(wv);ux=n(rV,"tensor([1.])"),rV.forEach(t),cx=n(Nh,", or if you get an error where it says the parameter is of size "),bv=l(Nh,"CODE",{});var pV=r(bv);hx=n(pV,"1"),pV.forEach(t),fx=n(Nh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Nh.forEach(t),Z3=c(e),vc=l(e,"A",{id:!0}),r(vc).forEach(t),N3=c(e),ot=l(e,"H3",{class:!0});var i5=r(ot);vn=l(i5,"A",{id:!0,class:!0,href:!0});var iV=r(vn);Ev=l(iV,"SPAN",{});var uV=r(Ev);d(xr.$$.fragment,uV),uV.forEach(t),iV.forEach(t),dx=c(i5),qv=l(i5,"SPAN",{});var cV=r(qv);mx=n(cV,"ZeRO Inference"),cV.forEach(t),i5.forEach(t),H3=c(e),jc=l(e,"P",{});var hV=r(jc);_x=n(hV,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),hV.forEach(t),B3=c(e),jn=l(e,"P",{});var u5=r(jn);vx=n(u5,"Otherwise you just need to pass the usual "),gc=l(u5,"A",{href:!0});var fV=r(gc);jx=n(fV,"TrainingArguments"),fV.forEach(t),gx=n(u5," arguments. For example:"),u5.forEach(t),W3=c(e),d(Rr.$$.fragment,e),F3=c(e),yc=l(e,"P",{});var dV=r(yc);yx=n(dV,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),dV.forEach(t),V3=c(e),gn=l(e,"P",{});var c5=r(gn);wx=n(c5,"Here is an example of running "),$v=l(c5,"CODE",{});var mV=r($v);bx=n(mV,"run_translation.py"),mV.forEach(t),Ex=n(c5," under DeepSpeed deploying all available GPUs:"),c5.forEach(t),Y3=c(e),d(Ir.$$.fragment,e),K3=c(e),wc=l(e,"P",{});var _V=r(wc);qx=n(_V,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),_V.forEach(t),J3=c(e),bc=l(e,"P",{});var vV=r(bc);$x=n(vV,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),vV.forEach(t),X3=c(e),lt=l(e,"H3",{class:!0});var h5=r(lt);yn=l(h5,"A",{id:!0,class:!0,href:!0});var jV=r(yn);kv=l(jV,"SPAN",{});var gV=r(kv);d(Ur.$$.fragment,gV),gV.forEach(t),jV.forEach(t),kx=c(h5),Pv=l(h5,"SPAN",{});var yV=r(Pv);Px=n(yV,"Memory Requirements"),yV.forEach(t),h5.forEach(t),Q3=c(e),Ec=l(e,"P",{});var wV=r(Ec);Dx=n(wV,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),wV.forEach(t),e0=c(e),qc=l(e,"P",{});var bV=r(qc);zx=n(bV,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),bV.forEach(t),s0=c(e),d(Gr.$$.fragment,e),t0=c(e),$c=l(e,"P",{});var EV=r($c);Ox=n(EV,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),EV.forEach(t),a0=c(e),kc=l(e,"P",{});var qV=r(kc);Tx=n(qV,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),qV.forEach(t),n0=c(e),Pc=l(e,"P",{});var $V=r(Pc);Ax=n($V,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),$V.forEach(t),o0=c(e),Dc=l(e,"P",{});var kV=r(Dc);Sx=n(kV,"For example, let\u2019s repeat the same for 2 GPUs:"),kV.forEach(t),l0=c(e),d(Lr.$$.fragment,e),r0=c(e),zc=l(e,"P",{});var PV=r(zc);Cx=n(PV,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),PV.forEach(t),p0=c(e),wn=l(e,"P",{});var f5=r(wn);xx=n(f5,"For full information please see "),Mr=l(f5,"A",{href:!0,rel:!0});var DV=r(Mr);Rx=n(DV,"memory estimators"),DV.forEach(t),Ix=n(f5,"."),f5.forEach(t),i0=c(e),rt=l(e,"H3",{class:!0});var d5=r(rt);bn=l(d5,"A",{id:!0,class:!0,href:!0});var zV=r(bn);Dv=l(zV,"SPAN",{});var OV=r(Dv);d(Zr.$$.fragment,OV),OV.forEach(t),zV.forEach(t),Ux=c(d5),zv=l(d5,"SPAN",{});var TV=r(zv);Gx=n(TV,"Filing Issues"),TV.forEach(t),d5.forEach(t),u0=c(e),Oc=l(e,"P",{});var AV=r(Oc);Lx=n(AV,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),AV.forEach(t),c0=c(e),Tc=l(e,"P",{});var SV=r(Tc);Mx=n(SV,"In your report please always include:"),SV.forEach(t),h0=c(e),H=l(e,"OL",{});var $e=r(H);Ov=l($e,"LI",{});var CV=r(Ov);Tv=l(CV,"P",{});var xV=r(Tv);Zx=n(xV,"the full Deepspeed config file in the report"),xV.forEach(t),CV.forEach(t),Nx=c($e),Av=l($e,"LI",{});var RV=r(Av);Te=l(RV,"P",{});var Xn=r(Te);Hx=n(Xn,"either the command line arguments if you were using the "),Ac=l(Xn,"A",{href:!0});var IV=r(Ac);Bx=n(IV,"Trainer"),IV.forEach(t),Wx=n(Xn,` or
`),Sc=l(Xn,"A",{href:!0});var UV=r(Sc);Fx=n(UV,"TrainingArguments"),UV.forEach(t),Vx=n(Xn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Cc=l(Xn,"A",{href:!0});var GV=r(Cc);Yx=n(GV,"TrainingArguments"),GV.forEach(t),Kx=n(Xn," as it has dozens of entries that are irrelevant."),Xn.forEach(t),RV.forEach(t),Jx=c($e),Nr=l($e,"LI",{});var m5=r(Nr);Sv=l(m5,"P",{});var LV=r(Sv);Xx=n(LV,"Output of:"),LV.forEach(t),Qx=c(m5),d(Hr.$$.fragment,m5),m5.forEach(t),eR=c($e),Cv=l($e,"LI",{});var MV=r(Cv);Br=l(MV,"P",{});var _5=r(Br);sR=n(_5,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Wr=l(_5,"A",{href:!0,rel:!0});var ZV=r(Wr);tR=n(ZV,"notebook"),ZV.forEach(t),aR=n(_5,` as
a starting point.`),_5.forEach(t),MV.forEach(t),nR=c($e),xv=l($e,"LI",{});var NV=r(xv);Rv=l(NV,"P",{});var HV=r(Rv);oR=n(HV,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),HV.forEach(t),NV.forEach(t),lR=c($e),Iv=l($e,"LI",{});var BV=r(Iv);Fr=l(BV,"P",{});var v5=r(Fr);rR=n(v5,"If possible try to use one of the existing "),Vr=l(v5,"A",{href:!0,rel:!0});var WV=r(Vr);pR=n(WV,"examples"),WV.forEach(t),iR=n(v5," to reproduce the problem with."),v5.forEach(t),BV.forEach(t),$e.forEach(t),f0=c(e),xc=l(e,"P",{});var FV=r(xc);uR=n(FV,"Things to consider:"),FV.forEach(t),d0=c(e),En=l(e,"UL",{});var j5=r(En);pt=l(j5,"LI",{});var Hh=r(pt);Uv=l(Hh,"P",{});var VV=r(Uv);cR=n(VV,"Deepspeed is often not the cause of the problem."),VV.forEach(t),hR=c(Hh),Gv=l(Hh,"P",{});var YV=r(Gv);fR=n(YV,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),YV.forEach(t),dR=c(Hh),Lv=l(Hh,"P",{});var KV=r(Lv);mR=n(KV,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),KV.forEach(t),Hh.forEach(t),_R=c(j5),Mv=l(j5,"LI",{});var JV=r(Mv);Yr=l(JV,"P",{});var g5=r(Yr);vR=n(g5,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Kr=l(g5,"A",{href:!0,rel:!0});var XV=r(Kr);jR=n(XV,"Deepspeed"),XV.forEach(t),gR=n(g5,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),g5.forEach(t),JV.forEach(t),j5.forEach(t),m0=c(e),it=l(e,"H3",{class:!0});var y5=r(it);qn=l(y5,"A",{id:!0,class:!0,href:!0});var QV=r(qn);Zv=l(QV,"SPAN",{});var eY=r(Zv);d(Jr.$$.fragment,eY),eY.forEach(t),QV.forEach(t),yR=c(y5),Nv=l(y5,"SPAN",{});var sY=r(Nv);wR=n(sY,"Troubleshooting"),sY.forEach(t),y5.forEach(t),_0=c(e),ut=l(e,"H4",{class:!0});var w5=r(ut);$n=l(w5,"A",{id:!0,class:!0,href:!0});var tY=r($n);Hv=l(tY,"SPAN",{});var aY=r(Hv);d(Xr.$$.fragment,aY),aY.forEach(t),tY.forEach(t),bR=c(w5),Qr=l(w5,"SPAN",{});var b5=r(Qr);ER=n(b5,"the "),Bv=l(b5,"CODE",{});var nY=r(Bv);qR=n(nY,"deepspeed"),nY.forEach(t),$R=n(b5," process gets killed at startup without a traceback"),b5.forEach(t),w5.forEach(t),v0=c(e),B=l(e,"P",{});var ke=r(B);kR=n(ke,"If the "),Wv=l(ke,"CODE",{});var oY=r(Wv);PR=n(oY,"deepspeed"),oY.forEach(t),DR=n(ke,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Fv=l(ke,"CODE",{});var lY=r(Fv);zR=n(lY,"offload_optimizer"),lY.forEach(t),OR=n(ke," or "),Vv=l(ke,"CODE",{});var rY=r(Vv);TR=n(rY,"offload_param"),rY.forEach(t),AR=n(ke,` or
both configured to offload to `),Yv=l(ke,"CODE",{});var pY=r(Yv);SR=n(pY,"cpu"),pY.forEach(t),CR=n(ke,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),ep=l(ke,"A",{href:!0,rel:!0});var iY=r(ep);xR=n(iY,"estimate how much memory is needed for a specific model"),iY.forEach(t),RR=n(ke,"."),ke.forEach(t),j0=c(e),ct=l(e,"H4",{class:!0});var E5=r(ct);kn=l(E5,"A",{id:!0,class:!0,href:!0});var uY=r(kn);Kv=l(uY,"SPAN",{});var cY=r(Kv);d(sp.$$.fragment,cY),cY.forEach(t),uY.forEach(t),IR=c(E5),Rc=l(E5,"SPAN",{});var qG=r(Rc);UR=n(qG,"training and/or eval/predict loss is "),Jv=l(qG,"CODE",{});var hY=r(Jv);GR=n(hY,"NaN"),hY.forEach(t),qG.forEach(t),E5.forEach(t),g0=c(e),Ic=l(e,"P",{});var fY=r(Ic);LR=n(fY,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),fY.forEach(t),y0=c(e),Uc=l(e,"P",{});var dY=r(Uc);MR=n(dY,"The other problem may have to do with using fp16. When you configure this section:"),dY.forEach(t),w0=c(e),d(tp.$$.fragment,e),b0=c(e),Pn=l(e,"P",{});var q5=r(Pn);ZR=n(q5,"and you see in your log that Deepspeed reports "),Xv=l(q5,"CODE",{});var mY=r(Xv);NR=n(mY,"OVERFLOW!"),mY.forEach(t),HR=n(q5," as follows:"),q5.forEach(t),E0=c(e),d(ap.$$.fragment,e),q0=c(e),Gc=l(e,"P",{});var _Y=r(Gc);BR=n(_Y,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),_Y.forEach(t),$0=c(e),Lc=l(e,"P",{});var vY=r(Lc);WR=n(vY,"(the log was massaged to be more readable here.)"),vY.forEach(t),k0=c(e),ms=l(e,"P",{});var Bh=r(ms);FR=n(Bh,"In this case you usually need to raise the value of "),Qv=l(Bh,"CODE",{});var jY=r(Qv);VR=n(jY,"initial_scale_power"),jY.forEach(t),YR=n(Bh,". Setting it to "),ej=l(Bh,"CODE",{});var gY=r(ej);KR=n(gY,'"initial_scale_power": 32'),gY.forEach(t),JR=n(Bh," will typically resolve the problem."),Bh.forEach(t),P0=c(e),ht=l(e,"H3",{class:!0});var $5=r(ht);Dn=l($5,"A",{id:!0,class:!0,href:!0});var yY=r(Dn);sj=l(yY,"SPAN",{});var wY=r(sj);d(np.$$.fragment,wY),wY.forEach(t),yY.forEach(t),XR=c($5),tj=l($5,"SPAN",{});var bY=r(tj);QR=n(bY,"Notes"),bY.forEach(t),$5.forEach(t),D0=c(e),_s=l(e,"UL",{});var Wh=r(_s);ft=l(Wh,"LI",{});var Fh=r(ft);eI=n(Fh,"DeepSpeed works with the PyTorch "),Mc=l(Fh,"A",{href:!0});var EY=r(Mc);sI=n(EY,"Trainer"),EY.forEach(t),tI=n(Fh," but not TF "),aj=l(Fh,"CODE",{});var qY=r(aj);aI=n(qY,"TFTrainer"),qY.forEach(t),nI=n(Fh,"."),Fh.forEach(t),oI=c(Wh),op=l(Wh,"LI",{});var k5=r(op);lI=n(k5,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),lp=l(k5,"A",{href:!0,rel:!0});var $Y=r(lp);rI=n($Y,"source"),$Y.forEach(t),pI=n(k5,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),k5.forEach(t),iI=c(Wh),dt=l(Wh,"LI",{});var Vh=r(dt);uI=n(Vh,"You don\u2019t have to use the "),Zc=l(Vh,"A",{href:!0});var kY=r(Zc);cI=n(kY,"Trainer"),kY.forEach(t),hI=n(Vh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),rp=l(Vh,"A",{href:!0,rel:!0});var PY=r(rp);fI=n(PY,"the DeepSpeed integration instructions"),PY.forEach(t),dI=n(Vh,"."),Vh.forEach(t),Wh.forEach(t),z0=c(e),Nc=l(e,"A",{id:!0}),r(Nc).forEach(t),O0=c(e),mt=l(e,"H2",{class:!0});var P5=r(mt);zn=l(P5,"A",{id:!0,class:!0,href:!0});var DY=r(zn);nj=l(DY,"SPAN",{});var zY=r(nj);d(pp.$$.fragment,zY),zY.forEach(t),DY.forEach(t),mI=c(P5),oj=l(P5,"SPAN",{});var OY=r(oj);_I=n(OY,"Non-Trainer Deepspeed Integration"),OY.forEach(t),P5.forEach(t),T0=c(e),de=l(e,"P",{});var Qn=r(de);vI=n(Qn,"The "),Hc=l(Qn,"A",{href:!0});var TY=r(Hc);jI=n(TY,"HfDeepSpeedConfig"),TY.forEach(t),gI=n(Qn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Bc=l(Qn,"A",{href:!0});var AY=r(Bc);yI=n(AY,"Trainer"),AY.forEach(t),wI=n(Qn," is not used. The only thing that it does is handling Deepspeed ZeRO-3 param gathering and automatically splitting the model onto multiple gpus during "),lj=l(Qn,"CODE",{});var SY=r(lj);bI=n(SY,"from_pretrained"),SY.forEach(t),EI=n(Qn," call. Everything else you have to do by yourself."),Qn.forEach(t),A0=c(e),On=l(e,"P",{});var D5=r(On);qI=n(D5,"When using "),Wc=l(D5,"A",{href:!0});var CY=r(Wc);$I=n(CY,"Trainer"),CY.forEach(t),kI=n(D5," everything is automatically taken care of."),D5.forEach(t),S0=c(e),vs=l(e,"P",{});var Yh=r(vs);PI=n(Yh,"When not using "),Fc=l(Yh,"A",{href:!0});var xY=r(Fc);DI=n(xY,"Trainer"),xY.forEach(t),zI=n(Yh,`, to efficiently deploy DeepSpeed ZeRO-3, you must instantiate the
`),Vc=l(Yh,"A",{href:!0});var RY=r(Vc);OI=n(RY,"HfDeepSpeedConfig"),RY.forEach(t),TI=n(Yh," object before instantiating the model and keep that object alive."),Yh.forEach(t),C0=c(e),Tn=l(e,"P",{});var z5=r(Tn);AI=n(z5,"If you\u2019re using Deepspeed ZeRO-1 or ZeRO-2 you don\u2019t need to use "),rj=l(z5,"CODE",{});var IY=r(rj);SI=n(IY,"HfDeepSpeedConfig"),IY.forEach(t),CI=n(z5," at all."),z5.forEach(t),x0=c(e),Yc=l(e,"P",{});var UY=r(Yc);xI=n(UY,"For example for a pretrained model:"),UY.forEach(t),R0=c(e),d(ip.$$.fragment,e),I0=c(e),Kc=l(e,"P",{});var GY=r(Kc);RI=n(GY,"or for non-pretrained model:"),GY.forEach(t),U0=c(e),d(up.$$.fragment,e),G0=c(e),me=l(e,"P",{});var eo=r(me);II=n(eo,"Please note that if you\u2019re not using the "),Jc=l(eo,"A",{href:!0});var LY=r(Jc);UI=n(LY,"Trainer"),LY.forEach(t),GI=n(eo," integration, you\u2019re completely on your own. Basically follow the documentation on the "),cp=l(eo,"A",{href:!0,rel:!0});var MY=r(cp);LI=n(MY,"Deepspeed"),MY.forEach(t),MI=n(eo," website. Also you have to configure explicitly the config file - you can\u2019t use "),pj=l(eo,"CODE",{});var ZY=r(pj);ZI=n(ZY,'"auto"'),ZY.forEach(t),NI=n(eo," values and you will have to put real values instead."),eo.forEach(t),L0=c(e),_t=l(e,"H2",{class:!0});var O5=r(_t);An=l(O5,"A",{id:!0,class:!0,href:!0});var NY=r(An);ij=l(NY,"SPAN",{});var HY=r(ij);d(hp.$$.fragment,HY),HY.forEach(t),NY.forEach(t),HI=c(O5),uj=l(O5,"SPAN",{});var BY=r(uj);BI=n(BY,"HfDeepSpeedConfig"),BY.forEach(t),O5.forEach(t),M0=c(e),P=l(e,"DIV",{class:!0});var F=r(P);d(fp.$$.fragment,F),WI=c(F),cj=l(F,"P",{});var WY=r(cj);FI=n(WY,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),WY.forEach(t),VI=c(F),Ae=l(F,"P",{});var so=r(Ae);YI=n(so,"A "),hj=l(so,"CODE",{});var FY=r(hj);KI=n(FY,"weakref"),FY.forEach(t),JI=n(so,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),fj=l(so,"CODE",{});var VY=r(fj);XI=n(VY,"from_pretrained"),VY.forEach(t),QI=n(so," and "),dj=l(so,"CODE",{});var YY=r(dj);eU=n(YY,"_get_resized_embeddings"),YY.forEach(t),sU=n(so,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),so.forEach(t),tU=c(F),_e=l(F,"P",{});var bt=r(_e);Xc=l(bt,"A",{href:!0});var KY=r(Xc);aU=n(KY,"Trainer"),KY.forEach(t),nU=n(bt," uses the "),mj=l(bt,"CODE",{});var JY=r(mj);oU=n(JY,"HfTrainerDeepSpeedConfig"),JY.forEach(t),lU=n(bt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Qc=l(bt,"A",{href:!0});var XY=r(Qc);rU=n(XY,"TrainingArguments"),XY.forEach(t),pU=n(bt," by replacing special placeholder values: "),_j=l(bt,"CODE",{});var QY=r(_j);iU=n(QY,'"auto"'),QY.forEach(t),uU=n(bt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),bt.forEach(t),cU=c(F),js=l(F,"DIV",{class:!0});var Kh=r(js);d(dp.$$.fragment,Kh),hU=c(Kh),vj=l(Kh,"P",{});var eK=r(vj);fU=n(eK,"Deletes a sub-section of the config file if it\u2019s found."),eK.forEach(t),dU=c(Kh),vt=l(Kh,"P",{});var Jh=r(vt);mU=n(Jh,"Unless "),jj=l(Jh,"CODE",{});var sK=r(jj);_U=n(sK,"must_exist"),sK.forEach(t),vU=n(Jh," is "),gj=l(Jh,"CODE",{});var tK=r(gj);jU=n(tK,"True"),tK.forEach(t),gU=n(Jh," the section doesn\u2019t have to exist."),Jh.forEach(t),Kh.forEach(t),yU=c(F),Sn=l(F,"DIV",{class:!0});var T5=r(Sn);d(mp.$$.fragment,T5),wU=c(T5),_p=l(T5,"P",{});var A5=r(_p);bU=n(A5,"Returns the set value or "),yj=l(A5,"CODE",{});var aK=r(yj);EU=n(aK,"default"),aK.forEach(t),qU=n(A5," if no value is set"),A5.forEach(t),T5.forEach(t),$U=c(F),Cn=l(F,"DIV",{class:!0});var S5=r(Cn);d(vp.$$.fragment,S5),kU=c(S5),jt=l(S5,"P",{});var Xh=r(jt);PU=n(Xh,"Returns "),wj=l(Xh,"CODE",{});var nK=r(wj);DU=n(nK,"True"),nK.forEach(t),zU=n(Xh,"/"),bj=l(Xh,"CODE",{});var oK=r(bj);OU=n(oK,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),oK.forEach(t),TU=n(Xh," or isn\u2019t set)."),Xh.forEach(t),S5.forEach(t),AU=c(F),xn=l(F,"DIV",{class:!0});var C5=r(xn);d(jp.$$.fragment,C5),SU=c(C5),gt=l(C5,"P",{});var Qh=r(gt);CU=n(Qh,"Returns "),Ej=l(Qh,"CODE",{});var lK=r(Ej);xU=n(lK,"True"),lK.forEach(t),RU=n(Qh,"/"),qj=l(Qh,"CODE",{});var rK=r(qj);IU=n(rK,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),rK.forEach(t),UU=n(Qh," or isn\u2019t set)."),Qh.forEach(t),C5.forEach(t),F.forEach(t),Z0=c(e),yt=l(e,"H3",{class:!0});var x5=r(yt);Rn=l(x5,"A",{id:!0,class:!0,href:!0});var pK=r(Rn);$j=l(pK,"SPAN",{});var iK=r($j);d(gp.$$.fragment,iK),iK.forEach(t),pK.forEach(t),GU=c(x5),kj=l(x5,"SPAN",{});var uK=r(kj);LU=n(uK,"Custom DeepSpeed ZeRO Inference"),uK.forEach(t),x5.forEach(t),N0=c(e),In=l(e,"P",{});var R5=r(In);MU=n(R5,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),eh=l(R5,"A",{href:!0});var cK=r(eh);ZU=n(cK,"Trainer"),cK.forEach(t),NU=n(R5," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),R5.forEach(t),H0=c(e),sh=l(e,"P",{});var hK=r(sh);HU=n(hK,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),hK.forEach(t),B0=c(e),th=l(e,"P",{});var fK=r(th);BU=n(fK,"The example has copious notes and is self-documenting."),fK.forEach(t),W0=c(e),ah=l(e,"P",{});var dK=r(ah);WU=n(dK,"Make sure to:"),dK.forEach(t),F0=c(e),Un=l(e,"OL",{});var I5=r(Un);Pj=l(I5,"LI",{});var mK=r(Pj);FU=n(mK,"disable CPU offload if you have enough GPU memory (since it slows things down)"),mK.forEach(t),VU=c(I5),Dj=l(I5,"LI",{});var _K=r(Dj);YU=n(_K,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),_K.forEach(t),I5.forEach(t),V0=c(e),d(yp.$$.fragment,e),Y0=c(e),Gn=l(e,"P",{});var U5=r(Gn);KU=n(U5,"Let\u2019s save it as "),zj=l(U5,"CODE",{});var vK=r(zj);JU=n(vK,"t0.py"),vK.forEach(t),XU=n(U5," and run it:"),U5.forEach(t),K0=c(e),d(wp.$$.fragment,e),J0=c(e),nh=l(e,"P",{});var jK=r(nh);QU=n(jK,"This was a very basic example and you will want to adapt it to your needs."),jK.forEach(t),X0=c(e),wt=l(e,"H2",{class:!0});var G5=r(wt);Ln=l(G5,"A",{id:!0,class:!0,href:!0});var gK=r(Ln);Oj=l(gK,"SPAN",{});var yK=r(Oj);d(bp.$$.fragment,yK),yK.forEach(t),gK.forEach(t),eG=c(G5),Tj=l(G5,"SPAN",{});var wK=r(Tj);sG=n(wK,"Main DeepSpeed Resources"),wK.forEach(t),G5.forEach(t),Q0=c(e),ve=l(e,"UL",{});var to=r(ve);Aj=l(to,"LI",{});var bK=r(Aj);Ep=l(bK,"A",{href:!0,rel:!0});var EK=r(Ep);tG=n(EK,"Project\u2019s github"),EK.forEach(t),bK.forEach(t),aG=c(to),Sj=l(to,"LI",{});var qK=r(Sj);qp=l(qK,"A",{href:!0,rel:!0});var $K=r(qp);nG=n($K,"Usage docs"),$K.forEach(t),qK.forEach(t),oG=c(to),Cj=l(to,"LI",{});var kK=r(Cj);$p=l(kK,"A",{href:!0,rel:!0});var PK=r($p);lG=n(PK,"API docs"),PK.forEach(t),kK.forEach(t),rG=c(to),xj=l(to,"LI",{});var DK=r(xj);kp=l(DK,"A",{href:!0,rel:!0});var zK=r(kp);pG=n(zK,"Blog posts"),zK.forEach(t),DK.forEach(t),to.forEach(t),eE=c(e),oh=l(e,"P",{});var OK=r(oh);iG=n(OK,"Papers:"),OK.forEach(t),sE=c(e),gs=l(e,"UL",{});var ef=r(gs);Rj=l(ef,"LI",{});var TK=r(Rj);Pp=l(TK,"A",{href:!0,rel:!0});var AK=r(Pp);uG=n(AK,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),AK.forEach(t),TK.forEach(t),cG=c(ef),Ij=l(ef,"LI",{});var SK=r(Ij);Dp=l(SK,"A",{href:!0,rel:!0});var CK=r(Dp);hG=n(CK,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),CK.forEach(t),SK.forEach(t),fG=c(ef),Uj=l(ef,"LI",{});var xK=r(Uj);zp=l(xK,"A",{href:!0,rel:!0});var RK=r(zp);dG=n(RK,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),RK.forEach(t),xK.forEach(t),ef.forEach(t),tE=c(e),ys=l(e,"P",{});var sf=r(ys);mG=n(sf,"Finally, please, remember that, HuggingFace "),lh=l(sf,"A",{href:!0});var IK=r(lh);_G=n(IK,"Trainer"),IK.forEach(t),vG=n(sf,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),Op=l(sf,"A",{href:!0,rel:!0});var UK=r(Op);jG=n(UK,"DeepSpeed GitHub"),UK.forEach(t),gG=n(sf,"."),sf.forEach(t),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(VK)),h(k,"id","deepspeed-integration"),h(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(k,"href","#deepspeed-integration"),h(b,"class","relative group"),h(E,"href","https://github.com/microsoft/DeepSpeed"),h(E,"rel","nofollow"),h(V,"href","https://arxiv.org/abs/1910.02054"),h(V,"rel","nofollow"),h(ao,"href","https://arxiv.org/abs/2101.06840"),h(ao,"rel","nofollow"),h(no,"href","https://arxiv.org/abs/2104.07857"),h(no,"rel","nofollow"),h(oo,"href","https://github.com/microsoft/DeepSpeed"),h(oo,"rel","nofollow"),h(Lp,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Mp,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Zp,"href","#deepspeed-non-trainer-integration"),h(Vp,"href","#deepspeed-zero-inference"),h(Kp,"id","deepspeed-trainer-integration"),h(kt,"id","trainer-deepspeed-integration"),h(kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kt,"href","#trainer-deepspeed-integration"),h($s,"class","relative group"),h(Jp,"id","deepspeed-installation"),h(Pt,"id","installation"),h(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pt,"href","#installation"),h(ks,"class","relative group"),h(ho,"href","https://github.com/microsoft/deepspeed#installation"),h(ho,"rel","nofollow"),h(fo,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(fo,"rel","nofollow"),h(Qp,"href","#zero-install-notes"),h(jo,"href","https://developer.nvidia.com/cuda-gpus"),h(jo,"rel","nofollow"),h(bo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(bo,"rel","nofollow"),h(li,"id","deepspeed-multi-gpu"),h(Ct,"id","deployment-with-multiple-gpus"),h(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ct,"href","#deployment-with-multiple-gpus"),h(Ps,"class","relative group"),h(ri,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(qo,"href","https://www.deepspeed.ai/docs/config-json/"),h(qo,"rel","nofollow"),h(Po,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Po,"rel","nofollow"),h(zo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h(zo,"rel","nofollow"),h(ui,"id","deepspeed-one-gpu"),h(Lt,"id","deployment-with-one-gpu"),h(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lt,"href","#deployment-with-one-gpu"),h(zs,"class","relative group"),h(ci,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ao,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(Ao,"rel","nofollow"),h(Co,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(Co,"rel","nofollow"),h(ji,"id","deepspeed-notebook"),h(Ht,"id","deployment-in-notebooks"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#deployment-in-notebooks"),h(Ts,"class","relative group"),h(Ei,"id","deepspeed-config"),h(Yt,"id","configuration"),h(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yt,"href","#configuration"),h(As,"class","relative group"),h(No,"href","https://www.deepspeed.ai/docs/config-json/"),h(No,"rel","nofollow"),h(Ho,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Ho,"rel","nofollow"),h(Fo,"href","https://github.com/microsoft/DeepSpeed"),h(Fo,"rel","nofollow"),h($i,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(ki,"id","deepspeed-config-passing"),h(sa,"id","passing-configuration"),h(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sa,"href","#passing-configuration"),h(Ss,"class","relative group"),h(Pi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Di,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(zi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Ai,"id","deepspeed-config-shared"),h(ta,"id","shared-configuration"),h(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ta,"href","#shared-configuration"),h(Cs,"class","relative group"),h(Si,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(xi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ri,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ui,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Gi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Li,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Mi,"id","deepspeed-zero"),h(ra,"id","zero"),h(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ra,"href","#zero"),h(xs,"class","relative group"),h(tl,"href","https://www.deepspeed.ai/tutorials/zero/"),h(tl,"rel","nofollow"),h(al,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(al,"rel","nofollow"),h(Zi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Hi,"id","deepspeed-zero2-config"),h(ia,"id","zero2-config"),h(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ia,"href","#zero2-config"),h(Rs,"class","relative group"),h(Vi,"id","deepspeed-zero3-config"),h(ua,"id","zero3-config"),h(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ua,"href","#zero3-config"),h(Us,"class","relative group"),h(Xi,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(eu,"id","deepspeed-nvme"),h(fa,"id","nvme-support"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#nvme-support"),h(Gs,"class","relative group"),h(yl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(yl,"rel","nofollow"),h(wl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(wl,"rel","nofollow"),h(bl,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(bl,"rel","nofollow"),h(au,"id","deepspeed-zero2-zero3-performance"),h(_a,"id","zero2-vs-zero3-performance"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#zero2-vs-zero3-performance"),h(Ls,"class","relative group"),h(lu,"id","deepspeed-zero2-example"),h(ja,"id","zero2-example"),h(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ja,"href","#zero2-example"),h(Zs,"class","relative group"),h(ru,"id","deepspeed-zero3-example"),h(wa,"id","zero3-example"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#zero3-example"),h(Ns,"class","relative group"),h(qa,"id","optimizer-and-scheduler"),h(qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qa,"href","#optimizer-and-scheduler"),h(Hs,"class","relative group"),h(iu,"id","deepspeed-optimizer"),h(Pa,"id","optimizer"),h(Pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pa,"href","#optimizer"),h(Bs,"class","relative group"),h(Sl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(Sl,"rel","nofollow"),h(uu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(du,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(_u,"id","deepspeed-scheduler"),h(za,"id","scheduler"),h(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(za,"href","#scheduler"),h(Ws,"class","relative group"),h(Zl,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(Zl,"rel","nofollow"),h(ju,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(gu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(wu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(bu,"id","deepspeed-fp32"),h(xa,"id","fp32-precision"),h(xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xa,"href","#fp32-precision"),h(Fs,"class","relative group"),h(Yl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Yl,"rel","nofollow"),h(qu,"id","deepspeed-amp"),h(Ua,"id","automatic-mixed-precision"),h(Ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ua,"href","#automatic-mixed-precision"),h(Vs,"class","relative group"),h(Ga,"id","fp16"),h(Ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ga,"href","#fp16"),h(Ys,"class","relative group"),h(Pu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(zu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(er,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(er,"rel","nofollow"),h(Za,"id","bf16"),h(Za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Za,"href","#bf16"),h(Ks,"class","relative group"),h(Ha,"id","apex"),h(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ha,"href","#apex"),h(Js,"class","relative group"),h(Cu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ru,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(rr,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(rr,"rel","nofollow"),h(Iu,"id","deepspeed-bs"),h(Va,"id","batch-size"),h(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Va,"href","#batch-size"),h(Xs,"class","relative group"),h(Gu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Mu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Zu,"id","deepspeed-grad-acc"),h(Ka,"id","gradient-accumulation"),h(Ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ka,"href","#gradient-accumulation"),h(Qs,"class","relative group"),h(Hu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Wu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Fu,"id","deepspeed-grad-clip"),h(Xa,"id","gradient-clipping"),h(Xa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xa,"href","#gradient-clipping"),h(et,"class","relative group"),h(Yu,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ju,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Xu,"id","deepspeed-weight-extraction"),h(en,"id","getting-the-model-weights-out"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#getting-the-model-weights-out"),h(st,"class","relative group"),h(gr,"href","https://huggingface.co/models"),h(gr,"rel","nofollow"),h(un,"id","zero3-and-infinity-nuances"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#zero3-and-infinity-nuances"),h(tt,"class","relative group"),h(cn,"id","constructing-massive-models"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#constructing-massive-models"),h(at,"class","relative group"),h(hc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(fc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Or,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(Or,"rel","nofollow"),h(mc,"href","#from_pretrained-torch-dtype"),h(mn,"id","gathering-parameters"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#gathering-parameters"),h(nt,"class","relative group"),h(Sr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Sr,"rel","nofollow"),h(vc,"id","deepspeed-zero-inference"),h(vn,"id","zero-inference"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#zero-inference"),h(ot,"class","relative group"),h(gc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(yn,"id","memory-requirements"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#memory-requirements"),h(lt,"class","relative group"),h(Mr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Mr,"rel","nofollow"),h(bn,"id","filing-issues"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#filing-issues"),h(rt,"class","relative group"),h(Ac,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Sc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Cc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(Wr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Wr,"rel","nofollow"),h(Vr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch"),h(Vr,"rel","nofollow"),h(Kr,"href","https://github.com/microsoft/DeepSpeed/"),h(Kr,"rel","nofollow"),h(qn,"id","troubleshooting"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#troubleshooting"),h(it,"class","relative group"),h($n,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(ut,"class","relative group"),h(ep,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(ep,"rel","nofollow"),h(kn,"id","training-andor-evalpredict-loss-is-nan"),h(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kn,"href","#training-andor-evalpredict-loss-is-nan"),h(ct,"class","relative group"),h(Dn,"id","notes"),h(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dn,"href","#notes"),h(ht,"class","relative group"),h(Mc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(lp,"href","https://github.com/microsoft/deepspeed#installation"),h(lp,"rel","nofollow"),h(Zc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(rp,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(rp,"rel","nofollow"),h(Nc,"id","deepspeed-non-trainer-integration"),h(zn,"id","nontrainer-deepspeed-integration"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#nontrainer-deepspeed-integration"),h(mt,"class","relative group"),h(Hc,"href","/docs/transformers/pr_17553/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Bc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Wc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Fc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Vc,"href","/docs/transformers/pr_17553/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Jc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(cp,"href","https://www.deepspeed.ai/"),h(cp,"rel","nofollow"),h(An,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(An,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(_t,"class","relative group"),h(Xc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Qc,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.TrainingArguments"),h(js,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rn,"id","custom-deepspeed-zero-inference"),h(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rn,"href","#custom-deepspeed-zero-inference"),h(yt,"class","relative group"),h(eh,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Ln,"id","main-deepspeed-resources"),h(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ln,"href","#main-deepspeed-resources"),h(wt,"class","relative group"),h(Ep,"href","https://github.com/microsoft/deepspeed"),h(Ep,"rel","nofollow"),h(qp,"href","https://www.deepspeed.ai/getting-started/"),h(qp,"rel","nofollow"),h($p,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h($p,"rel","nofollow"),h(kp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(kp,"rel","nofollow"),h(Pp,"href","https://arxiv.org/abs/1910.02054"),h(Pp,"rel","nofollow"),h(Dp,"href","https://arxiv.org/abs/2101.06840"),h(Dp,"rel","nofollow"),h(zp,"href","https://arxiv.org/abs/2104.07857"),h(zp,"rel","nofollow"),h(lh,"href","/docs/transformers/pr_17553/en/main_classes/trainer#transformers.Trainer"),h(Op,"href","https://github.com/microsoft/DeepSpeed/issues"),h(Op,"rel","nofollow")},m(e,p){s(document.head,w),i(e,C,p),i(e,b,p),s(b,k),s(k,ee),m(z,ee,null),s(b,x),s(b,se),s(se,R),i(e,ae,p),i(e,S,p),s(S,E),s(E,q),s(S,Es),s(S,V),s(V,qs),s(S,L5),i(e,Bj,p),i(e,I,p),s(I,tf),s(tf,M5),s(I,Z5),s(I,af),s(af,N5),s(I,H5),s(I,nf),s(nf,B5),s(I,W5),s(I,of),s(of,F5),s(I,V5),s(I,lf),s(lf,Y5),s(I,K5),s(I,rf),s(rf,J5),i(e,Wj,p),i(e,Se,p),s(Se,X5),s(Se,ao),s(ao,Q5),s(Se,e$),s(Se,no),s(no,s$),s(Se,t$),i(e,Fj,p),i(e,Up,p),s(Up,a$),i(e,Vj,p),i(e,Gp,p),s(Gp,n$),i(e,Yj,p),i(e,qt,p),s(qt,o$),s(qt,oo),s(oo,l$),s(qt,r$),i(e,Kj,p),i(e,$t,p),s($t,lo),s(lo,p$),s(lo,Lp),s(Lp,i$),s(lo,u$),s($t,c$),s($t,Y),s(Y,h$),s(Y,Mp),s(Mp,f$),s(Y,d$),s(Y,pf),s(pf,m$),s(Y,_$),s(Y,uf),s(uf,v$),s(Y,j$),s(Y,cf),s(cf,g$),s(Y,y$),s(Y,Zp),s(Zp,w$),s(Y,b$),i(e,Jj,p),i(e,Np,p),s(Np,E$),i(e,Xj,p),i(e,Hp,p),s(Hp,q$),i(e,Qj,p),i(e,Bp,p),s(Bp,hf),s(hf,$$),i(e,eg,p),i(e,Wp,p),s(Wp,k$),i(e,sg,p),i(e,Fp,p),s(Fp,ro),s(ro,P$),s(ro,Vp),s(Vp,D$),s(ro,z$),i(e,tg,p),i(e,Yp,p),s(Yp,O$),i(e,ag,p),i(e,Kp,p),i(e,ng,p),i(e,$s,p),s($s,kt),s(kt,ff),m(po,ff,null),s($s,T$),s($s,df),s(df,A$),i(e,og,p),i(e,Jp,p),i(e,lg,p),i(e,ks,p),s(ks,Pt),s(Pt,mf),m(io,mf,null),s(ks,S$),s(ks,_f),s(_f,C$),i(e,rg,p),i(e,Xp,p),s(Xp,x$),i(e,pg,p),m(uo,e,p),i(e,ig,p),i(e,Ce,p),s(Ce,R$),s(Ce,vf),s(vf,I$),s(Ce,U$),s(Ce,jf),s(jf,G$),s(Ce,L$),i(e,ug,p),m(co,e,p),i(e,cg,p),i(e,xe,p),s(xe,M$),s(xe,ho),s(ho,Z$),s(xe,N$),s(xe,fo),s(fo,H$),s(xe,B$),i(e,hg,p),i(e,Dt,p),s(Dt,W$),s(Dt,Qp),s(Qp,F$),s(Dt,V$),i(e,fg,p),i(e,ei,p),s(ei,Y$),i(e,dg,p),i(e,si,p),s(si,K$),i(e,mg,p),m(mo,e,p),i(e,_g,p),i(e,Re,p),s(Re,J$),s(Re,gf),s(gf,X$),s(Re,Q$),s(Re,yf),s(yf,e4),s(Re,s4),i(e,vg,p),i(e,zt,p),s(zt,t4),s(zt,wf),s(wf,a4),s(zt,n4),i(e,jg,p),m(_o,e,p),i(e,gg,p),i(e,Pe,p),s(Pe,o4),s(Pe,bf),s(bf,l4),s(Pe,r4),s(Pe,Ef),s(Ef,p4),s(Pe,i4),s(Pe,qf),s(qf,u4),i(e,yg,p),i(e,ti,p),s(ti,c4),i(e,wg,p),m(vo,e,p),i(e,bg,p),i(e,Ie,p),s(Ie,h4),s(Ie,$f),s($f,f4),s(Ie,d4),s(Ie,kf),s(kf,m4),s(Ie,_4),i(e,Eg,p),i(e,Ot,p),s(Ot,v4),s(Ot,Pf),s(Pf,j4),s(Ot,g4),i(e,qg,p),i(e,Ue,p),s(Ue,y4),s(Ue,Df),s(Df,w4),s(Ue,b4),s(Ue,jo),s(jo,E4),s(Ue,q4),i(e,$g,p),i(e,ai,p),s(ai,$4),i(e,kg,p),m(go,e,p),i(e,Pg,p),i(e,ni,p),s(ni,k4),i(e,Dg,p),m(yo,e,p),i(e,zg,p),i(e,oi,p),s(oi,P4),i(e,Og,p),m(wo,e,p),i(e,Tg,p),i(e,Tt,p),s(Tt,D4),s(Tt,zf),s(zf,z4),s(Tt,O4),i(e,Ag,p),i(e,At,p),s(At,T4),s(At,Of),s(Of,A4),s(At,S4),i(e,Sg,p),i(e,St,p),s(St,C4),s(St,bo),s(bo,x4),s(St,R4),i(e,Cg,p),i(e,li,p),i(e,xg,p),i(e,Ps,p),s(Ps,Ct),s(Ct,Tf),m(Eo,Tf,null),s(Ps,I4),s(Ps,Af),s(Af,U4),i(e,Rg,p),i(e,xt,p),s(xt,G4),s(xt,ri),s(ri,L4),s(xt,M4),i(e,Ig,p),i(e,Rt,p),s(Rt,Ds),s(Ds,Z4),s(Ds,Sf),s(Sf,N4),s(Ds,H4),s(Ds,Cf),s(Cf,B4),s(Ds,W4),s(Rt,F4),s(Rt,De),s(De,V4),s(De,xf),s(xf,Y4),s(De,K4),s(De,Rf),s(Rf,J4),s(De,X4),s(De,qo),s(qo,Q4),s(De,e6),i(e,Ug,p),i(e,pi,p),s(pi,s6),i(e,Gg,p),m($o,e,p),i(e,Lg,p),i(e,ii,p),s(ii,t6),i(e,Mg,p),m(ko,e,p),i(e,Zg,p),i(e,U,p),s(U,a6),s(U,If),s(If,n6),s(U,o6),s(U,Uf),s(Uf,l6),s(U,r6),s(U,Gf),s(Gf,p6),s(U,i6),s(U,Lf),s(Lf,u6),s(U,c6),s(U,Po),s(Po,h6),s(U,f6),i(e,Ng,p),i(e,ne,p),s(ne,d6),s(ne,Mf),s(Mf,m6),s(ne,_6),s(ne,Zf),s(Zf,v6),s(ne,j6),s(ne,Nf),s(Nf,g6),s(ne,y6),i(e,Hg,p),i(e,It,p),s(It,w6),s(It,Hf),s(Hf,b6),s(It,E6),i(e,Bg,p),m(Do,e,p),i(e,Wg,p),i(e,Ut,p),s(Ut,q6),s(Ut,Bf),s(Bf,$6),s(Ut,k6),i(e,Fg,p),i(e,Gt,p),s(Gt,P6),s(Gt,zo),s(zo,D6),s(Gt,z6),i(e,Vg,p),i(e,ui,p),i(e,Yg,p),i(e,zs,p),s(zs,Lt),s(Lt,Wf),m(Oo,Wf,null),s(zs,O6),s(zs,Ff),s(Ff,T6),i(e,Kg,p),i(e,Mt,p),s(Mt,A6),s(Mt,ci),s(ci,S6),s(Mt,C6),i(e,Jg,p),m(To,e,p),i(e,Xg,p),i(e,Ge,p),s(Ge,x6),s(Ge,Vf),s(Vf,R6),s(Ge,I6),s(Ge,Ao),s(Ao,U6),s(Ge,G6),i(e,Qg,p),i(e,hi,p),s(hi,L6),i(e,ey,p),i(e,Zt,p),s(Zt,Yf),s(Yf,M6),s(Zt,Z6),s(Zt,Kf),s(Kf,N6),i(e,sy,p),i(e,fi,p),s(fi,H6),i(e,ty,p),m(So,e,p),i(e,ay,p),i(e,di,p),s(di,B6),i(e,ny,p),i(e,Nt,p),s(Nt,W6),s(Nt,Co),s(Co,F6),s(Nt,V6),i(e,oy,p),i(e,mi,p),s(mi,Y6),i(e,ly,p),i(e,_i,p),s(_i,K6),i(e,ry,p),i(e,vi,p),s(vi,Os),s(Os,xo),s(xo,J6),s(xo,Jf),s(Jf,X6),s(xo,Q6),s(Os,e7),m(Ro,Os,null),s(Os,s7),s(Os,Xf),s(Xf,t7),i(e,py,p),i(e,ji,p),i(e,iy,p),i(e,Ts,p),s(Ts,Ht),s(Ht,Qf),m(Io,Qf,null),s(Ts,a7),s(Ts,ed),s(ed,n7),i(e,uy,p),i(e,Bt,p),s(Bt,o7),s(Bt,sd),s(sd,l7),s(Bt,r7),i(e,cy,p),i(e,gi,p),s(gi,p7),i(e,hy,p),m(Uo,e,p),i(e,fy,p),i(e,Wt,p),s(Wt,i7),s(Wt,td),s(td,u7),s(Wt,c7),i(e,dy,p),i(e,yi,p),s(yi,h7),i(e,my,p),i(e,wi,p),s(wi,f7),i(e,_y,p),m(Go,e,p),i(e,vy,p),i(e,Le,p),s(Le,d7),s(Le,ad),s(ad,m7),s(Le,_7),s(Le,nd),s(nd,v7),s(Le,j7),i(e,jy,p),m(Lo,e,p),i(e,gy,p),i(e,Ft,p),s(Ft,g7),s(Ft,od),s(od,y7),s(Ft,w7),i(e,yy,p),m(Mo,e,p),i(e,wy,p),i(e,bi,p),s(bi,b7),i(e,by,p),i(e,Vt,p),s(Vt,E7),s(Vt,ld),s(ld,q7),s(Vt,$7),i(e,Ey,p),i(e,Ei,p),i(e,qy,p),i(e,As,p),s(As,Yt),s(Yt,rd),m(Zo,rd,null),s(As,k7),s(As,pd),s(pd,P7),i(e,$y,p),i(e,Kt,p),s(Kt,D7),s(Kt,No),s(No,z7),s(Kt,O7),i(e,ky,p),i(e,Jt,p),s(Jt,T7),s(Jt,Ho),s(Ho,A7),s(Jt,S7),i(e,Py,p),m(Bo,e,p),i(e,Dy,p),i(e,Xt,p),s(Xt,C7),s(Xt,id),s(id,x7),s(Xt,R7),i(e,zy,p),m(Wo,e,p),i(e,Oy,p),i(e,Qt,p),s(Qt,I7),s(Qt,Fo),s(Fo,U7),s(Qt,G7),i(e,Ty,p),i(e,qi,p),s(qi,L7),i(e,Ay,p),i(e,oe,p),s(oe,M7),s(oe,ud),s(ud,Z7),s(oe,N7),s(oe,cd),s(cd,H7),s(oe,B7),s(oe,hd),s(hd,W7),s(oe,F7),i(e,Sy,p),m(Vo,e,p),i(e,Cy,p),i(e,ea,p),s(ea,V7),s(ea,$i),s($i,Y7),s(ea,K7),i(e,xy,p),i(e,ki,p),i(e,Ry,p),i(e,Ss,p),s(Ss,sa),s(sa,fd),m(Yo,fd,null),s(Ss,J7),s(Ss,dd),s(dd,X7),i(e,Iy,p),i(e,G,p),s(G,Q7),s(G,Pi),s(Pi,e8),s(G,s8),s(G,Di),s(Di,t8),s(G,a8),s(G,md),s(md,n8),s(G,o8),s(G,_d),s(_d,l8),s(G,r8),s(G,zi),s(zi,p8),s(G,i8),i(e,Uy,p),i(e,Oi,p),s(Oi,u8),i(e,Gy,p),m(Ko,e,p),i(e,Ly,p),i(e,Ti,p),s(Ti,c8),i(e,My,p),m(Jo,e,p),i(e,Zy,p),i(e,Ai,p),i(e,Ny,p),i(e,Cs,p),s(Cs,ta),s(ta,vd),m(Xo,vd,null),s(Cs,h8),s(Cs,jd),s(jd,f8),i(e,Hy,p),m(aa,e,p),i(e,By,p),i(e,Me,p),s(Me,d8),s(Me,Si),s(Si,m8),s(Me,_8),s(Me,Ci),s(Ci,v8),s(Me,j8),i(e,Wy,p),i(e,na,p),s(na,g8),s(na,xi),s(xi,y8),s(na,w8),i(e,Fy,p),i(e,Ze,p),s(Ze,b8),s(Ze,gd),s(gd,E8),s(Ze,q8),s(Ze,Ri),s(Ri,$8),s(Ze,k8),i(e,Vy,p),i(e,Ii,p),s(Ii,P8),i(e,Yy,p),i(e,oa,p),s(oa,D8),s(oa,Ui),s(Ui,z8),s(oa,O8),i(e,Ky,p),i(e,la,p),s(la,yd),s(yd,T8),s(la,A8),s(la,Qo),s(Qo,S8),s(Qo,Gi),s(Gi,C8),s(Qo,x8),i(e,Jy,p),i(e,le,p),s(le,R8),s(le,wd),s(wd,I8),s(le,U8),s(le,Li),s(Li,G8),s(le,L8),s(le,bd),s(bd,M8),s(le,Z8),i(e,Xy,p),i(e,Mi,p),i(e,Qy,p),i(e,xs,p),s(xs,ra),s(ra,Ed),m(el,Ed,null),s(xs,N8),s(xs,qd),s(qd,H8),i(e,ew,p),i(e,sl,p),s(sl,tl),s(tl,B8),s(sl,W8),i(e,sw,p),i(e,Ne,p),s(Ne,F8),s(Ne,$d),s($d,V8),s(Ne,Y8),s(Ne,al),s(al,K8),s(Ne,J8),i(e,tw,p),i(e,pa,p),s(pa,X8),s(pa,Zi),s(Zi,Q8),s(pa,ek),i(e,aw,p),i(e,Ni,p),s(Ni,sk),i(e,nw,p),i(e,Hi,p),i(e,ow,p),i(e,Rs,p),s(Rs,ia),s(ia,kd),m(nl,kd,null),s(Rs,tk),s(Rs,Pd),s(Pd,ak),i(e,lw,p),i(e,Bi,p),s(Bi,nk),i(e,rw,p),m(ol,e,p),i(e,pw,p),i(e,Wi,p),s(Wi,Dd),s(Dd,ok),i(e,iw,p),i(e,He,p),s(He,Is),s(Is,lk),s(Is,zd),s(zd,rk),s(Is,pk),s(Is,Od),s(Od,ik),s(Is,uk),s(He,ck),s(He,L),s(L,Td),s(Td,hk),s(L,fk),s(L,Ad),s(Ad,dk),s(L,mk),s(L,Sd),s(Sd,_k),s(L,vk),s(L,Cd),s(Cd,jk),s(L,gk),s(L,xd),s(xd,yk),s(L,wk),s(L,Rd),s(Rd,bk),s(L,Ek),s(He,qk),s(He,Id),s(Id,$k),i(e,uw,p),i(e,Be,p),s(Be,kk),s(Be,Ud),s(Ud,Pk),s(Be,Dk),s(Be,Gd),s(Gd,zk),s(Be,Ok),i(e,cw,p),m(ll,e,p),i(e,hw,p),i(e,Fi,p),s(Fi,Tk),i(e,fw,p),i(e,Vi,p),i(e,dw,p),i(e,Us,p),s(Us,ua),s(ua,Ld),m(rl,Ld,null),s(Us,Ak),s(Us,Md),s(Md,Sk),i(e,mw,p),i(e,Yi,p),s(Yi,Ck),i(e,_w,p),m(pl,e,p),i(e,vw,p),i(e,K,p),s(K,xk),s(K,Zd),s(Zd,Rk),s(K,Ik),s(K,Nd),s(Nd,Uk),s(K,Gk),s(K,Hd),s(Hd,Lk),s(K,Mk),s(K,Bd),s(Bd,Zk),s(K,Nk),i(e,jw,p),i(e,We,p),s(We,Hk),s(We,Wd),s(Wd,Bk),s(We,Wk),s(We,Fd),s(Fd,Fk),s(We,Vk),i(e,gw,p),i(e,Ki,p),s(Ki,Vd),s(Vd,Yk),i(e,yw,p),i(e,ca,p),s(ca,il),s(il,Yd),s(Yd,Kk),s(il,Jk),s(il,Kd),s(Kd,Xk),s(ca,Qk),s(ca,ul),s(ul,Jd),s(Jd,e9),s(ul,s9),s(ul,Xd),s(Xd,t9),i(e,ww,p),i(e,M,p),s(M,a9),s(M,Qd),s(Qd,n9),s(M,o9),s(M,em),s(em,l9),s(M,r9),s(M,sm),s(sm,p9),s(M,i9),s(M,tm),s(tm,u9),s(M,c9),s(M,am),s(am,h9),s(M,f9),i(e,bw,p),i(e,ze,p),s(ze,nm),s(nm,d9),s(ze,m9),s(ze,om),s(om,_9),s(ze,v9),s(ze,lm),s(lm,j9),s(ze,g9),i(e,Ew,p),i(e,Ji,p),s(Ji,y9),i(e,qw,p),i(e,Fe,p),s(Fe,cl),s(cl,rm),s(rm,w9),s(cl,b9),s(cl,pm),s(pm,E9),s(Fe,q9),s(Fe,hl),s(hl,im),s(im,$9),s(hl,k9),s(hl,um),s(um,P9),s(Fe,D9),s(Fe,fl),s(fl,cm),s(cm,z9),s(fl,O9),s(fl,hm),s(hm,T9),i(e,$w,p),i(e,Ve,p),s(Ve,A9),s(Ve,fm),s(fm,S9),s(Ve,C9),s(Ve,Xi),s(Xi,x9),s(Ve,R9),i(e,kw,p),i(e,dl,p),s(dl,dm),s(dm,I9),s(dl,U9),i(e,Pw,p),i(e,re,p),s(re,G9),s(re,mm),s(mm,L9),s(re,M9),s(re,_m),s(_m,Z9),s(re,N9),s(re,vm),s(vm,H9),s(re,B9),i(e,Dw,p),i(e,Qi,p),s(Qi,ml),s(ml,jm),s(jm,W9),s(ml,F9),s(ml,gm),s(gm,V9),i(e,zw,p),i(e,Oe,p),s(Oe,ym),s(ym,Y9),s(Oe,K9),s(Oe,wm),s(wm,J9),s(Oe,X9),s(Oe,bm),s(bm,Q9),s(Oe,eP),i(e,Ow,p),i(e,Ye,p),s(Ye,sP),s(Ye,Em),s(Em,tP),s(Ye,aP),s(Ye,qm),s(qm,nP),s(Ye,oP),i(e,Tw,p),i(e,ha,p),s(ha,_l),s(_l,lP),s(_l,$m),s($m,rP),s(_l,pP),s(ha,iP),s(ha,vl),s(vl,uP),s(vl,km),s(km,cP),s(vl,hP),i(e,Aw,p),i(e,eu,p),i(e,Sw,p),i(e,Gs,p),s(Gs,fa),s(fa,Pm),m(jl,Pm,null),s(Gs,fP),s(Gs,Dm),s(Dm,dP),i(e,Cw,p),i(e,su,p),s(su,mP),i(e,xw,p),i(e,tu,p),s(tu,_P),i(e,Rw,p),m(gl,e,p),i(e,Iw,p),i(e,da,p),s(da,vP),s(da,zm),s(zm,jP),s(da,gP),i(e,Uw,p),i(e,Ke,p),s(Ke,yP),s(Ke,yl),s(yl,wP),s(Ke,bP),s(Ke,wl),s(wl,EP),s(Ke,qP),i(e,Gw,p),i(e,ma,p),s(ma,$P),s(ma,Om),s(Om,kP),s(ma,PP),i(e,Lw,p),i(e,Je,p),s(Je,DP),s(Je,Tm),s(Tm,zP),s(Je,OP),s(Je,bl),s(bl,TP),s(Je,AP),i(e,Mw,p),i(e,au,p),i(e,Zw,p),i(e,Ls,p),s(Ls,_a),s(_a,Am),m(El,Am,null),s(Ls,SP),s(Ls,Sm),s(Sm,CP),i(e,Nw,p),i(e,nu,p),s(nu,xP),i(e,Hw,p),i(e,ou,p),s(ou,RP),i(e,Bw,p),i(e,va,p),s(va,Ms),s(Ms,IP),s(Ms,Cm),s(Cm,UP),s(Ms,GP),s(Ms,xm),s(xm,LP),s(Ms,MP),s(va,ZP),s(va,ql),s(ql,NP),s(ql,Rm),s(Rm,HP),s(ql,BP),i(e,Ww,p),i(e,Xe,p),s(Xe,WP),s(Xe,Im),s(Im,FP),s(Xe,VP),s(Xe,Um),s(Um,YP),s(Xe,KP),i(e,Fw,p),i(e,lu,p),i(e,Vw,p),i(e,Zs,p),s(Zs,ja),s(ja,Gm),m($l,Gm,null),s(Zs,JP),s(Zs,Lm),s(Lm,XP),i(e,Yw,p),i(e,ga,p),s(ga,QP),s(ga,Mm),s(Mm,eD),s(ga,sD),i(e,Kw,p),m(kl,e,p),i(e,Jw,p),i(e,ya,p),s(ya,tD),s(ya,Zm),s(Zm,aD),s(ya,nD),i(e,Xw,p),m(Pl,e,p),i(e,Qw,p),i(e,ru,p),i(e,e2,p),i(e,Ns,p),s(Ns,wa),s(wa,Nm),m(Dl,Nm,null),s(Ns,oD),s(Ns,Hm),s(Hm,lD),i(e,s2,p),i(e,ba,p),s(ba,rD),s(ba,Bm),s(Bm,pD),s(ba,iD),i(e,t2,p),m(zl,e,p),i(e,a2,p),i(e,Ea,p),s(Ea,uD),s(Ea,Wm),s(Wm,cD),s(Ea,hD),i(e,n2,p),m(Ol,e,p),i(e,o2,p),i(e,Hs,p),s(Hs,qa),s(qa,Fm),m(Tl,Fm,null),s(Hs,fD),s(Hs,Vm),s(Vm,dD),i(e,l2,p),i(e,$a,p),s($a,mD),s($a,Ym),s(Ym,_D),s($a,vD),i(e,r2,p),i(e,pu,p),s(pu,jD),i(e,p2,p),i(e,ka,p),s(ka,gD),s(ka,Km),s(Km,yD),s(ka,wD),i(e,i2,p),i(e,iu,p),i(e,u2,p),i(e,Bs,p),s(Bs,Pa),s(Pa,Jm),m(Al,Jm,null),s(Bs,bD),s(Bs,Xm),s(Xm,ED),i(e,c2,p),i(e,Qe,p),s(Qe,qD),s(Qe,Qm),s(Qm,$D),s(Qe,kD),s(Qe,Sl),s(Sl,PD),s(Qe,DD),i(e,h2,p),i(e,$,p),s($,zD),s($,e_),s(e_,OD),s($,TD),s($,uu),s(uu,AD),s($,SD),s($,s_),s(s_,CD),s($,xD),s($,t_),s(t_,RD),s($,ID),s($,a_),s(a_,UD),s($,GD),s($,n_),s(n_,LD),s($,MD),s($,o_),s(o_,ZD),s($,ND),s($,l_),s(l_,HD),s($,BD),i(e,f2,p),i(e,es,p),s(es,WD),s(es,r_),s(r_,FD),s(es,VD),s(es,p_),s(p_,YD),s(es,KD),i(e,d2,p),m(Cl,e,p),i(e,m2,p),i(e,cu,p),s(cu,JD),i(e,_2,p),i(e,pe,p),s(pe,xl),s(xl,i_),s(i_,XD),s(xl,QD),s(xl,u_),s(u_,ez),s(pe,sz),s(pe,Rl),s(Rl,c_),s(c_,tz),s(Rl,az),s(Rl,h_),s(h_,nz),s(pe,oz),s(pe,Il),s(Il,f_),s(f_,lz),s(Il,rz),s(Il,d_),s(d_,pz),s(pe,iz),s(pe,Ul),s(Ul,m_),s(m_,uz),s(Ul,cz),s(Ul,__),s(__,hz),i(e,v2,p),i(e,hu,p),s(hu,fz),i(e,j2,p),i(e,fu,p),s(fu,dz),i(e,g2,p),m(Gl,e,p),i(e,y2,p),i(e,Da,p),s(Da,mz),s(Da,du),s(du,_z),s(Da,vz),i(e,w2,p),i(e,mu,p),s(mu,jz),i(e,b2,p),m(Ll,e,p),i(e,E2,p),i(e,ie,p),s(ie,gz),s(ie,v_),s(v_,yz),s(ie,wz),s(ie,j_),s(j_,bz),s(ie,Ez),s(ie,g_),s(g_,qz),s(ie,$z),i(e,q2,p),i(e,_u,p),i(e,$2,p),i(e,Ws,p),s(Ws,za),s(za,y_),m(Ml,y_,null),s(Ws,kz),s(Ws,w_),s(w_,Pz),i(e,k2,p),i(e,Z,p),s(Z,Dz),s(Z,b_),s(b_,zz),s(Z,Oz),s(Z,E_),s(E_,Tz),s(Z,Az),s(Z,q_),s(q_,Sz),s(Z,Cz),s(Z,$_),s($_,xz),s(Z,Rz),s(Z,Zl),s(Zl,Iz),s(Z,Uz),i(e,P2,p),i(e,vu,p),s(vu,Gz),i(e,D2,p),i(e,Oa,p),s(Oa,Nl),s(Nl,k_),s(k_,Lz),s(Nl,Mz),s(Nl,P_),s(P_,Zz),s(Oa,Nz),s(Oa,ss),s(ss,D_),s(D_,Hz),s(ss,Bz),s(ss,z_),s(z_,Wz),s(ss,Fz),s(ss,O_),s(O_,Vz),s(ss,Yz),i(e,z2,p),i(e,O,p),s(O,Kz),s(O,T_),s(T_,Jz),s(O,Xz),s(O,ju),s(ju,Qz),s(O,eO),s(O,A_),s(A_,sO),s(O,tO),s(O,S_),s(S_,aO),s(O,nO),s(O,C_),s(C_,oO),s(O,lO),s(O,x_),s(x_,rO),s(O,pO),i(e,O2,p),i(e,ts,p),s(ts,iO),s(ts,R_),s(R_,uO),s(ts,cO),s(ts,I_),s(I_,hO),s(ts,fO),i(e,T2,p),m(Hl,e,p),i(e,A2,p),i(e,as,p),s(as,dO),s(as,U_),s(U_,mO),s(as,_O),s(as,gu),s(gu,vO),s(as,jO),i(e,S2,p),i(e,ue,p),s(ue,Ta),s(Ta,G_),s(G_,gO),s(Ta,yO),s(Ta,L_),s(L_,wO),s(Ta,bO),s(ue,EO),s(ue,Aa),s(Aa,M_),s(M_,qO),s(Aa,$O),s(Aa,Z_),s(Z_,kO),s(Aa,PO),s(ue,DO),s(ue,ns),s(ns,N_),s(N_,zO),s(ns,OO),s(ns,H_),s(H_,TO),s(ns,AO),s(ns,B_),s(B_,SO),s(ns,CO),s(ue,xO),s(ue,os),s(os,W_),s(W_,RO),s(os,IO),s(os,F_),s(F_,UO),s(os,GO),s(os,V_),s(V_,LO),s(os,MO),i(e,C2,p),i(e,yu,p),s(yu,ZO),i(e,x2,p),m(Bl,e,p),i(e,R2,p),i(e,Sa,p),s(Sa,NO),s(Sa,wu),s(wu,HO),s(Sa,BO),i(e,I2,p),i(e,Ca,p),s(Ca,WO),s(Ca,Y_),s(Y_,FO),s(Ca,VO),i(e,U2,p),m(Wl,e,p),i(e,G2,p),i(e,J,p),s(J,YO),s(J,K_),s(K_,KO),s(J,JO),s(J,J_),s(J_,XO),s(J,QO),s(J,X_),s(X_,eT),s(J,sT),s(J,Q_),s(Q_,tT),s(J,aT),i(e,L2,p),i(e,bu,p),i(e,M2,p),i(e,Fs,p),s(Fs,xa),s(xa,e1),m(Fl,e1,null),s(Fs,nT),s(Fs,s1),s(s1,oT),i(e,Z2,p),i(e,Eu,p),s(Eu,lT),i(e,N2,p),i(e,Ra,p),s(Ra,rT),s(Ra,t1),s(t1,pT),s(Ra,iT),i(e,H2,p),m(Vl,e,p),i(e,B2,p),i(e,Ia,p),s(Ia,uT),s(Ia,Yl),s(Yl,cT),s(Ia,hT),i(e,W2,p),i(e,ce,p),s(ce,fT),s(ce,a1),s(a1,dT),s(ce,mT),s(ce,n1),s(n1,_T),s(ce,vT),s(ce,o1),s(o1,jT),s(ce,gT),i(e,F2,p),i(e,qu,p),i(e,V2,p),i(e,Vs,p),s(Vs,Ua),s(Ua,l1),m(Kl,l1,null),s(Vs,yT),s(Vs,r1),s(r1,wT),i(e,Y2,p),i(e,$u,p),s($u,bT),i(e,K2,p),i(e,Ys,p),s(Ys,Ga),s(Ga,p1),m(Jl,p1,null),s(Ys,ET),s(Ys,i1),s(i1,qT),i(e,J2,p),i(e,ku,p),s(ku,$T),i(e,X2,p),m(Xl,e,p),i(e,Q2,p),i(e,ls,p),s(ls,kT),s(ls,Pu),s(Pu,PT),s(ls,DT),s(ls,u1),s(u1,zT),s(ls,OT),i(e,eb,p),i(e,rs,p),s(rs,TT),s(rs,c1),s(c1,AT),s(rs,ST),s(rs,h1),s(h1,CT),s(rs,xT),i(e,sb,p),i(e,Du,p),s(Du,RT),i(e,tb,p),m(Ql,e,p),i(e,ab,p),i(e,La,p),s(La,IT),s(La,zu),s(zu,UT),s(La,GT),i(e,nb,p),i(e,Ma,p),s(Ma,LT),s(Ma,er),s(er,MT),s(Ma,ZT),i(e,ob,p),i(e,Ks,p),s(Ks,Za),s(Za,f1),m(sr,f1,null),s(Ks,NT),s(Ks,d1),s(d1,HT),i(e,lb,p),i(e,Ou,p),s(Ou,BT),i(e,rb,p),m(tr,e,p),i(e,pb,p),i(e,Tu,p),s(Tu,WT),i(e,ib,p),i(e,ps,p),s(ps,FT),s(ps,m1),s(m1,VT),s(ps,YT),s(ps,_1),s(_1,KT),s(ps,JT),i(e,ub,p),i(e,Au,p),s(Au,XT),i(e,cb,p),m(ar,e,p),i(e,hb,p),m(Na,e,p),i(e,fb,p),i(e,Js,p),s(Js,Ha),s(Ha,v1),m(nr,v1,null),s(Js,QT),s(Js,j1),s(j1,eA),i(e,db,p),i(e,Su,p),s(Su,sA),i(e,mb,p),m(or,e,p),i(e,_b,p),i(e,he,p),s(he,tA),s(he,Cu),s(Cu,aA),s(he,nA),s(he,g1),s(g1,oA),s(he,lA),s(he,y1),s(y1,rA),s(he,pA),i(e,vb,p),i(e,Ba,p),s(Ba,iA),s(Ba,w1),s(w1,uA),s(Ba,cA),i(e,jb,p),i(e,xu,p),s(xu,hA),i(e,gb,p),m(lr,e,p),i(e,yb,p),i(e,Wa,p),s(Wa,fA),s(Wa,Ru),s(Ru,dA),s(Wa,mA),i(e,wb,p),i(e,Fa,p),s(Fa,_A),s(Fa,rr),s(rr,vA),s(Fa,jA),i(e,bb,p),i(e,Iu,p),i(e,Eb,p),i(e,Xs,p),s(Xs,Va),s(Va,b1),m(pr,b1,null),s(Xs,gA),s(Xs,E1),s(E1,yA),i(e,qb,p),i(e,Uu,p),s(Uu,wA),i(e,$b,p),m(ir,e,p),i(e,kb,p),i(e,N,p),s(N,bA),s(N,Gu),s(Gu,EA),s(N,qA),s(N,q1),s(q1,$A),s(N,kA),s(N,$1),s($1,PA),s(N,DA),s(N,k1),s(k1,zA),s(N,OA),s(N,P1),s(P1,TA),s(N,AA),i(e,Pb,p),i(e,Lu,p),s(Lu,SA),i(e,Db,p),m(ur,e,p),i(e,zb,p),i(e,Ya,p),s(Ya,CA),s(Ya,Mu),s(Mu,xA),s(Ya,RA),i(e,Ob,p),i(e,Zu,p),i(e,Tb,p),i(e,Qs,p),s(Qs,Ka),s(Ka,D1),m(cr,D1,null),s(Qs,IA),s(Qs,z1),s(z1,UA),i(e,Ab,p),i(e,Nu,p),s(Nu,GA),i(e,Sb,p),m(hr,e,p),i(e,Cb,p),i(e,is,p),s(is,LA),s(is,Hu),s(Hu,MA),s(is,ZA),s(is,O1),s(O1,NA),s(is,HA),i(e,xb,p),i(e,Bu,p),s(Bu,BA),i(e,Rb,p),m(fr,e,p),i(e,Ib,p),i(e,Ja,p),s(Ja,WA),s(Ja,Wu),s(Wu,FA),s(Ja,VA),i(e,Ub,p),i(e,Fu,p),i(e,Gb,p),i(e,et,p),s(et,Xa),s(Xa,T1),m(dr,T1,null),s(et,YA),s(et,A1),s(A1,KA),i(e,Lb,p),i(e,Vu,p),s(Vu,JA),i(e,Mb,p),m(mr,e,p),i(e,Zb,p),i(e,us,p),s(us,XA),s(us,Yu),s(Yu,QA),s(us,eS),s(us,S1),s(S1,sS),s(us,tS),i(e,Nb,p),i(e,Ku,p),s(Ku,aS),i(e,Hb,p),m(_r,e,p),i(e,Bb,p),i(e,Qa,p),s(Qa,nS),s(Qa,Ju),s(Ju,oS),s(Qa,lS),i(e,Wb,p),i(e,Xu,p),i(e,Fb,p),i(e,st,p),s(st,en),s(en,C1),m(vr,C1,null),s(st,rS),s(st,x1),s(x1,pS),i(e,Vb,p),i(e,sn,p),s(sn,iS),s(sn,R1),s(R1,uS),s(sn,cS),i(e,Yb,p),i(e,Qu,p),s(Qu,I1),s(I1,hS),i(e,Kb,p),i(e,tn,p),s(tn,fS),s(tn,U1),s(U1,dS),s(tn,mS),i(e,Jb,p),i(e,T,p),s(T,_S),s(T,G1),s(G1,vS),s(T,jS),s(T,L1),s(L1,gS),s(T,yS),s(T,M1),s(M1,wS),s(T,bS),s(T,Z1),s(Z1,ES),s(T,qS),s(T,N1),s(N1,$S),s(T,kS),s(T,H1),s(H1,PS),s(T,DS),i(e,Xb,p),m(jr,e,p),i(e,Qb,p),i(e,ec,p),s(ec,B1),s(B1,zS),i(e,e3,p),i(e,an,p),s(an,OS),s(an,gr),s(gr,TS),s(an,AS),i(e,s3,p),i(e,sc,p),s(sc,W1),s(W1,SS),i(e,t3,p),i(e,tc,p),s(tc,CS),i(e,a3,p),i(e,ac,p),s(ac,xS),i(e,n3,p),m(yr,e,p),i(e,o3,p),i(e,cs,p),s(cs,RS),s(cs,F1),s(F1,IS),s(cs,US),s(cs,V1),s(V1,GS),s(cs,LS),i(e,l3,p),m(wr,e,p),i(e,r3,p),m(nn,e,p),i(e,p3,p),i(e,on,p),s(on,MS),s(on,Y1),s(Y1,ZS),s(on,NS),i(e,i3,p),i(e,ln,p),s(ln,HS),s(ln,K1),s(K1,BS),s(ln,WS),i(e,u3,p),m(br,e,p),i(e,c3,p),i(e,nc,p),s(nc,J1),s(J1,FS),i(e,h3,p),i(e,hs,p),s(hs,VS),s(hs,X1),s(X1,YS),s(hs,KS),s(hs,Q1),s(Q1,JS),s(hs,XS),i(e,f3,p),i(e,oc,p),s(oc,QS),i(e,d3,p),m(Er,e,p),i(e,m3,p),i(e,rn,p),s(rn,eC),s(rn,ev),s(ev,sC),s(rn,tC),i(e,_3,p),m(qr,e,p),i(e,v3,p),i(e,pn,p),s(pn,aC),s(pn,sv),s(sv,nC),s(pn,oC),i(e,j3,p),i(e,lc,p),s(lc,lC),i(e,g3,p),i(e,$r,p),s($r,tv),s(tv,rC),s($r,pC),i(e,y3,p),i(e,fs,p),s(fs,iC),s(fs,av),s(av,uC),s(fs,cC),s(fs,nv),s(nv,hC),s(fs,fC),i(e,w3,p),i(e,rc,p),s(rc,dC),i(e,b3,p),i(e,tt,p),s(tt,un),s(un,ov),m(kr,ov,null),s(tt,mC),s(tt,lv),s(lv,_C),i(e,E3,p),i(e,pc,p),s(pc,vC),i(e,q3,p),i(e,ic,p),s(ic,jC),i(e,$3,p),i(e,uc,p),s(uc,gC),i(e,k3,p),i(e,at,p),s(at,cn),s(cn,rv),m(Pr,rv,null),s(at,yC),s(at,pv),s(pv,wC),i(e,P3,p),i(e,hn,p),s(hn,bC),s(hn,iv),s(iv,EC),s(hn,qC),i(e,D3,p),m(Dr,e,p),i(e,z3,p),i(e,cc,p),s(cc,$C),i(e,O3,p),i(e,D,p),s(D,kC),s(D,uv),s(uv,PC),s(D,DC),s(D,cv),s(cv,zC),s(D,OC),s(D,hv),s(hv,TC),s(D,AC),s(D,hc),s(hc,SC),s(D,CC),s(D,fc),s(fc,xC),s(D,RC),s(D,fv),s(fv,IC),s(D,UC),s(D,dv),s(dv,GC),s(D,LC),i(e,T3,p),m(zr,e,p),i(e,A3,p),i(e,fn,p),s(fn,MC),s(fn,mv),s(mv,ZC),s(fn,NC),i(e,S3,p),i(e,dc,p),s(dc,HC),i(e,C3,p),i(e,dn,p),s(dn,BC),s(dn,Or),s(Or,WC),s(dn,FC),i(e,x3,p),i(e,fe,p),s(fe,VC),s(fe,_v),s(_v,YC),s(fe,KC),s(fe,vv),s(vv,JC),s(fe,XC),s(fe,mc),s(mc,QC),s(fe,ex),i(e,R3,p),i(e,nt,p),s(nt,mn),s(mn,jv),m(Tr,jv,null),s(nt,sx),s(nt,gv),s(gv,tx),i(e,I3,p),i(e,Ar,p),s(Ar,ax),s(Ar,Sr),s(Sr,nx),i(e,U3,p),i(e,_n,p),s(_n,ox),s(_n,yv),s(yv,lx),s(_n,rx),i(e,G3,p),i(e,_c,p),s(_c,px),i(e,L3,p),m(Cr,e,p),i(e,M3,p),i(e,ds,p),s(ds,ix),s(ds,wv),s(wv,ux),s(ds,cx),s(ds,bv),s(bv,hx),s(ds,fx),i(e,Z3,p),i(e,vc,p),i(e,N3,p),i(e,ot,p),s(ot,vn),s(vn,Ev),m(xr,Ev,null),s(ot,dx),s(ot,qv),s(qv,mx),i(e,H3,p),i(e,jc,p),s(jc,_x),i(e,B3,p),i(e,jn,p),s(jn,vx),s(jn,gc),s(gc,jx),s(jn,gx),i(e,W3,p),m(Rr,e,p),i(e,F3,p),i(e,yc,p),s(yc,yx),i(e,V3,p),i(e,gn,p),s(gn,wx),s(gn,$v),s($v,bx),s(gn,Ex),i(e,Y3,p),m(Ir,e,p),i(e,K3,p),i(e,wc,p),s(wc,qx),i(e,J3,p),i(e,bc,p),s(bc,$x),i(e,X3,p),i(e,lt,p),s(lt,yn),s(yn,kv),m(Ur,kv,null),s(lt,kx),s(lt,Pv),s(Pv,Px),i(e,Q3,p),i(e,Ec,p),s(Ec,Dx),i(e,e0,p),i(e,qc,p),s(qc,zx),i(e,s0,p),m(Gr,e,p),i(e,t0,p),i(e,$c,p),s($c,Ox),i(e,a0,p),i(e,kc,p),s(kc,Tx),i(e,n0,p),i(e,Pc,p),s(Pc,Ax),i(e,o0,p),i(e,Dc,p),s(Dc,Sx),i(e,l0,p),m(Lr,e,p),i(e,r0,p),i(e,zc,p),s(zc,Cx),i(e,p0,p),i(e,wn,p),s(wn,xx),s(wn,Mr),s(Mr,Rx),s(wn,Ix),i(e,i0,p),i(e,rt,p),s(rt,bn),s(bn,Dv),m(Zr,Dv,null),s(rt,Ux),s(rt,zv),s(zv,Gx),i(e,u0,p),i(e,Oc,p),s(Oc,Lx),i(e,c0,p),i(e,Tc,p),s(Tc,Mx),i(e,h0,p),i(e,H,p),s(H,Ov),s(Ov,Tv),s(Tv,Zx),s(H,Nx),s(H,Av),s(Av,Te),s(Te,Hx),s(Te,Ac),s(Ac,Bx),s(Te,Wx),s(Te,Sc),s(Sc,Fx),s(Te,Vx),s(Te,Cc),s(Cc,Yx),s(Te,Kx),s(H,Jx),s(H,Nr),s(Nr,Sv),s(Sv,Xx),s(Nr,Qx),m(Hr,Nr,null),s(H,eR),s(H,Cv),s(Cv,Br),s(Br,sR),s(Br,Wr),s(Wr,tR),s(Br,aR),s(H,nR),s(H,xv),s(xv,Rv),s(Rv,oR),s(H,lR),s(H,Iv),s(Iv,Fr),s(Fr,rR),s(Fr,Vr),s(Vr,pR),s(Fr,iR),i(e,f0,p),i(e,xc,p),s(xc,uR),i(e,d0,p),i(e,En,p),s(En,pt),s(pt,Uv),s(Uv,cR),s(pt,hR),s(pt,Gv),s(Gv,fR),s(pt,dR),s(pt,Lv),s(Lv,mR),s(En,_R),s(En,Mv),s(Mv,Yr),s(Yr,vR),s(Yr,Kr),s(Kr,jR),s(Yr,gR),i(e,m0,p),i(e,it,p),s(it,qn),s(qn,Zv),m(Jr,Zv,null),s(it,yR),s(it,Nv),s(Nv,wR),i(e,_0,p),i(e,ut,p),s(ut,$n),s($n,Hv),m(Xr,Hv,null),s(ut,bR),s(ut,Qr),s(Qr,ER),s(Qr,Bv),s(Bv,qR),s(Qr,$R),i(e,v0,p),i(e,B,p),s(B,kR),s(B,Wv),s(Wv,PR),s(B,DR),s(B,Fv),s(Fv,zR),s(B,OR),s(B,Vv),s(Vv,TR),s(B,AR),s(B,Yv),s(Yv,SR),s(B,CR),s(B,ep),s(ep,xR),s(B,RR),i(e,j0,p),i(e,ct,p),s(ct,kn),s(kn,Kv),m(sp,Kv,null),s(ct,IR),s(ct,Rc),s(Rc,UR),s(Rc,Jv),s(Jv,GR),i(e,g0,p),i(e,Ic,p),s(Ic,LR),i(e,y0,p),i(e,Uc,p),s(Uc,MR),i(e,w0,p),m(tp,e,p),i(e,b0,p),i(e,Pn,p),s(Pn,ZR),s(Pn,Xv),s(Xv,NR),s(Pn,HR),i(e,E0,p),m(ap,e,p),i(e,q0,p),i(e,Gc,p),s(Gc,BR),i(e,$0,p),i(e,Lc,p),s(Lc,WR),i(e,k0,p),i(e,ms,p),s(ms,FR),s(ms,Qv),s(Qv,VR),s(ms,YR),s(ms,ej),s(ej,KR),s(ms,JR),i(e,P0,p),i(e,ht,p),s(ht,Dn),s(Dn,sj),m(np,sj,null),s(ht,XR),s(ht,tj),s(tj,QR),i(e,D0,p),i(e,_s,p),s(_s,ft),s(ft,eI),s(ft,Mc),s(Mc,sI),s(ft,tI),s(ft,aj),s(aj,aI),s(ft,nI),s(_s,oI),s(_s,op),s(op,lI),s(op,lp),s(lp,rI),s(op,pI),s(_s,iI),s(_s,dt),s(dt,uI),s(dt,Zc),s(Zc,cI),s(dt,hI),s(dt,rp),s(rp,fI),s(dt,dI),i(e,z0,p),i(e,Nc,p),i(e,O0,p),i(e,mt,p),s(mt,zn),s(zn,nj),m(pp,nj,null),s(mt,mI),s(mt,oj),s(oj,_I),i(e,T0,p),i(e,de,p),s(de,vI),s(de,Hc),s(Hc,jI),s(de,gI),s(de,Bc),s(Bc,yI),s(de,wI),s(de,lj),s(lj,bI),s(de,EI),i(e,A0,p),i(e,On,p),s(On,qI),s(On,Wc),s(Wc,$I),s(On,kI),i(e,S0,p),i(e,vs,p),s(vs,PI),s(vs,Fc),s(Fc,DI),s(vs,zI),s(vs,Vc),s(Vc,OI),s(vs,TI),i(e,C0,p),i(e,Tn,p),s(Tn,AI),s(Tn,rj),s(rj,SI),s(Tn,CI),i(e,x0,p),i(e,Yc,p),s(Yc,xI),i(e,R0,p),m(ip,e,p),i(e,I0,p),i(e,Kc,p),s(Kc,RI),i(e,U0,p),m(up,e,p),i(e,G0,p),i(e,me,p),s(me,II),s(me,Jc),s(Jc,UI),s(me,GI),s(me,cp),s(cp,LI),s(me,MI),s(me,pj),s(pj,ZI),s(me,NI),i(e,L0,p),i(e,_t,p),s(_t,An),s(An,ij),m(hp,ij,null),s(_t,HI),s(_t,uj),s(uj,BI),i(e,M0,p),i(e,P,p),m(fp,P,null),s(P,WI),s(P,cj),s(cj,FI),s(P,VI),s(P,Ae),s(Ae,YI),s(Ae,hj),s(hj,KI),s(Ae,JI),s(Ae,fj),s(fj,XI),s(Ae,QI),s(Ae,dj),s(dj,eU),s(Ae,sU),s(P,tU),s(P,_e),s(_e,Xc),s(Xc,aU),s(_e,nU),s(_e,mj),s(mj,oU),s(_e,lU),s(_e,Qc),s(Qc,rU),s(_e,pU),s(_e,_j),s(_j,iU),s(_e,uU),s(P,cU),s(P,js),m(dp,js,null),s(js,hU),s(js,vj),s(vj,fU),s(js,dU),s(js,vt),s(vt,mU),s(vt,jj),s(jj,_U),s(vt,vU),s(vt,gj),s(gj,jU),s(vt,gU),s(P,yU),s(P,Sn),m(mp,Sn,null),s(Sn,wU),s(Sn,_p),s(_p,bU),s(_p,yj),s(yj,EU),s(_p,qU),s(P,$U),s(P,Cn),m(vp,Cn,null),s(Cn,kU),s(Cn,jt),s(jt,PU),s(jt,wj),s(wj,DU),s(jt,zU),s(jt,bj),s(bj,OU),s(jt,TU),s(P,AU),s(P,xn),m(jp,xn,null),s(xn,SU),s(xn,gt),s(gt,CU),s(gt,Ej),s(Ej,xU),s(gt,RU),s(gt,qj),s(qj,IU),s(gt,UU),i(e,Z0,p),i(e,yt,p),s(yt,Rn),s(Rn,$j),m(gp,$j,null),s(yt,GU),s(yt,kj),s(kj,LU),i(e,N0,p),i(e,In,p),s(In,MU),s(In,eh),s(eh,ZU),s(In,NU),i(e,H0,p),i(e,sh,p),s(sh,HU),i(e,B0,p),i(e,th,p),s(th,BU),i(e,W0,p),i(e,ah,p),s(ah,WU),i(e,F0,p),i(e,Un,p),s(Un,Pj),s(Pj,FU),s(Un,VU),s(Un,Dj),s(Dj,YU),i(e,V0,p),m(yp,e,p),i(e,Y0,p),i(e,Gn,p),s(Gn,KU),s(Gn,zj),s(zj,JU),s(Gn,XU),i(e,K0,p),m(wp,e,p),i(e,J0,p),i(e,nh,p),s(nh,QU),i(e,X0,p),i(e,wt,p),s(wt,Ln),s(Ln,Oj),m(bp,Oj,null),s(wt,eG),s(wt,Tj),s(Tj,sG),i(e,Q0,p),i(e,ve,p),s(ve,Aj),s(Aj,Ep),s(Ep,tG),s(ve,aG),s(ve,Sj),s(Sj,qp),s(qp,nG),s(ve,oG),s(ve,Cj),s(Cj,$p),s($p,lG),s(ve,rG),s(ve,xj),s(xj,kp),s(kp,pG),i(e,eE,p),i(e,oh,p),s(oh,iG),i(e,sE,p),i(e,gs,p),s(gs,Rj),s(Rj,Pp),s(Pp,uG),s(gs,cG),s(gs,Ij),s(Ij,Dp),s(Dp,hG),s(gs,fG),s(gs,Uj),s(Uj,zp),s(zp,dG),i(e,tE,p),i(e,ys,p),s(ys,mG),s(ys,lh),s(lh,_G),s(ys,vG),s(ys,Op),s(Op,jG),s(ys,gG),aE=!0},p(e,[p]){const Tp={};p&2&&(Tp.$$scope={dirty:p,ctx:e}),aa.$set(Tp);const Gj={};p&2&&(Gj.$$scope={dirty:p,ctx:e}),Na.$set(Gj);const Lj={};p&2&&(Lj.$$scope={dirty:p,ctx:e}),nn.$set(Lj)},i(e){aE||(_(z.$$.fragment,e),_(po.$$.fragment,e),_(io.$$.fragment,e),_(uo.$$.fragment,e),_(co.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(vo.$$.fragment,e),_(go.$$.fragment,e),_(yo.$$.fragment,e),_(wo.$$.fragment,e),_(Eo.$$.fragment,e),_($o.$$.fragment,e),_(ko.$$.fragment,e),_(Do.$$.fragment,e),_(Oo.$$.fragment,e),_(To.$$.fragment,e),_(So.$$.fragment,e),_(Ro.$$.fragment,e),_(Io.$$.fragment,e),_(Uo.$$.fragment,e),_(Go.$$.fragment,e),_(Lo.$$.fragment,e),_(Mo.$$.fragment,e),_(Zo.$$.fragment,e),_(Bo.$$.fragment,e),_(Wo.$$.fragment,e),_(Vo.$$.fragment,e),_(Yo.$$.fragment,e),_(Ko.$$.fragment,e),_(Jo.$$.fragment,e),_(Xo.$$.fragment,e),_(aa.$$.fragment,e),_(el.$$.fragment,e),_(nl.$$.fragment,e),_(ol.$$.fragment,e),_(ll.$$.fragment,e),_(rl.$$.fragment,e),_(pl.$$.fragment,e),_(jl.$$.fragment,e),_(gl.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(Dl.$$.fragment,e),_(zl.$$.fragment,e),_(Ol.$$.fragment,e),_(Tl.$$.fragment,e),_(Al.$$.fragment,e),_(Cl.$$.fragment,e),_(Gl.$$.fragment,e),_(Ll.$$.fragment,e),_(Ml.$$.fragment,e),_(Hl.$$.fragment,e),_(Bl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Vl.$$.fragment,e),_(Kl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(ar.$$.fragment,e),_(Na.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(hr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(mr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(jr.$$.fragment,e),_(yr.$$.fragment,e),_(wr.$$.fragment,e),_(nn.$$.fragment,e),_(br.$$.fragment,e),_(Er.$$.fragment,e),_(qr.$$.fragment,e),_(kr.$$.fragment,e),_(Pr.$$.fragment,e),_(Dr.$$.fragment,e),_(zr.$$.fragment,e),_(Tr.$$.fragment,e),_(Cr.$$.fragment,e),_(xr.$$.fragment,e),_(Rr.$$.fragment,e),_(Ir.$$.fragment,e),_(Ur.$$.fragment,e),_(Gr.$$.fragment,e),_(Lr.$$.fragment,e),_(Zr.$$.fragment,e),_(Hr.$$.fragment,e),_(Jr.$$.fragment,e),_(Xr.$$.fragment,e),_(sp.$$.fragment,e),_(tp.$$.fragment,e),_(ap.$$.fragment,e),_(np.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(up.$$.fragment,e),_(hp.$$.fragment,e),_(fp.$$.fragment,e),_(dp.$$.fragment,e),_(mp.$$.fragment,e),_(vp.$$.fragment,e),_(jp.$$.fragment,e),_(gp.$$.fragment,e),_(yp.$$.fragment,e),_(wp.$$.fragment,e),_(bp.$$.fragment,e),aE=!0)},o(e){v(z.$$.fragment,e),v(po.$$.fragment,e),v(io.$$.fragment,e),v(uo.$$.fragment,e),v(co.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(vo.$$.fragment,e),v(go.$$.fragment,e),v(yo.$$.fragment,e),v(wo.$$.fragment,e),v(Eo.$$.fragment,e),v($o.$$.fragment,e),v(ko.$$.fragment,e),v(Do.$$.fragment,e),v(Oo.$$.fragment,e),v(To.$$.fragment,e),v(So.$$.fragment,e),v(Ro.$$.fragment,e),v(Io.$$.fragment,e),v(Uo.$$.fragment,e),v(Go.$$.fragment,e),v(Lo.$$.fragment,e),v(Mo.$$.fragment,e),v(Zo.$$.fragment,e),v(Bo.$$.fragment,e),v(Wo.$$.fragment,e),v(Vo.$$.fragment,e),v(Yo.$$.fragment,e),v(Ko.$$.fragment,e),v(Jo.$$.fragment,e),v(Xo.$$.fragment,e),v(aa.$$.fragment,e),v(el.$$.fragment,e),v(nl.$$.fragment,e),v(ol.$$.fragment,e),v(ll.$$.fragment,e),v(rl.$$.fragment,e),v(pl.$$.fragment,e),v(jl.$$.fragment,e),v(gl.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(Dl.$$.fragment,e),v(zl.$$.fragment,e),v(Ol.$$.fragment,e),v(Tl.$$.fragment,e),v(Al.$$.fragment,e),v(Cl.$$.fragment,e),v(Gl.$$.fragment,e),v(Ll.$$.fragment,e),v(Ml.$$.fragment,e),v(Hl.$$.fragment,e),v(Bl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Vl.$$.fragment,e),v(Kl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(ar.$$.fragment,e),v(Na.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(hr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(mr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(jr.$$.fragment,e),v(yr.$$.fragment,e),v(wr.$$.fragment,e),v(nn.$$.fragment,e),v(br.$$.fragment,e),v(Er.$$.fragment,e),v(qr.$$.fragment,e),v(kr.$$.fragment,e),v(Pr.$$.fragment,e),v(Dr.$$.fragment,e),v(zr.$$.fragment,e),v(Tr.$$.fragment,e),v(Cr.$$.fragment,e),v(xr.$$.fragment,e),v(Rr.$$.fragment,e),v(Ir.$$.fragment,e),v(Ur.$$.fragment,e),v(Gr.$$.fragment,e),v(Lr.$$.fragment,e),v(Zr.$$.fragment,e),v(Hr.$$.fragment,e),v(Jr.$$.fragment,e),v(Xr.$$.fragment,e),v(sp.$$.fragment,e),v(tp.$$.fragment,e),v(ap.$$.fragment,e),v(np.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(up.$$.fragment,e),v(hp.$$.fragment,e),v(fp.$$.fragment,e),v(dp.$$.fragment,e),v(mp.$$.fragment,e),v(vp.$$.fragment,e),v(jp.$$.fragment,e),v(gp.$$.fragment,e),v(yp.$$.fragment,e),v(wp.$$.fragment,e),v(bp.$$.fragment,e),aE=!1},d(e){t(w),e&&t(C),e&&t(b),j(z),e&&t(ae),e&&t(S),e&&t(Bj),e&&t(I),e&&t(Wj),e&&t(Se),e&&t(Fj),e&&t(Up),e&&t(Vj),e&&t(Gp),e&&t(Yj),e&&t(qt),e&&t(Kj),e&&t($t),e&&t(Jj),e&&t(Np),e&&t(Xj),e&&t(Hp),e&&t(Qj),e&&t(Bp),e&&t(eg),e&&t(Wp),e&&t(sg),e&&t(Fp),e&&t(tg),e&&t(Yp),e&&t(ag),e&&t(Kp),e&&t(ng),e&&t($s),j(po),e&&t(og),e&&t(Jp),e&&t(lg),e&&t(ks),j(io),e&&t(rg),e&&t(Xp),e&&t(pg),j(uo,e),e&&t(ig),e&&t(Ce),e&&t(ug),j(co,e),e&&t(cg),e&&t(xe),e&&t(hg),e&&t(Dt),e&&t(fg),e&&t(ei),e&&t(dg),e&&t(si),e&&t(mg),j(mo,e),e&&t(_g),e&&t(Re),e&&t(vg),e&&t(zt),e&&t(jg),j(_o,e),e&&t(gg),e&&t(Pe),e&&t(yg),e&&t(ti),e&&t(wg),j(vo,e),e&&t(bg),e&&t(Ie),e&&t(Eg),e&&t(Ot),e&&t(qg),e&&t(Ue),e&&t($g),e&&t(ai),e&&t(kg),j(go,e),e&&t(Pg),e&&t(ni),e&&t(Dg),j(yo,e),e&&t(zg),e&&t(oi),e&&t(Og),j(wo,e),e&&t(Tg),e&&t(Tt),e&&t(Ag),e&&t(At),e&&t(Sg),e&&t(St),e&&t(Cg),e&&t(li),e&&t(xg),e&&t(Ps),j(Eo),e&&t(Rg),e&&t(xt),e&&t(Ig),e&&t(Rt),e&&t(Ug),e&&t(pi),e&&t(Gg),j($o,e),e&&t(Lg),e&&t(ii),e&&t(Mg),j(ko,e),e&&t(Zg),e&&t(U),e&&t(Ng),e&&t(ne),e&&t(Hg),e&&t(It),e&&t(Bg),j(Do,e),e&&t(Wg),e&&t(Ut),e&&t(Fg),e&&t(Gt),e&&t(Vg),e&&t(ui),e&&t(Yg),e&&t(zs),j(Oo),e&&t(Kg),e&&t(Mt),e&&t(Jg),j(To,e),e&&t(Xg),e&&t(Ge),e&&t(Qg),e&&t(hi),e&&t(ey),e&&t(Zt),e&&t(sy),e&&t(fi),e&&t(ty),j(So,e),e&&t(ay),e&&t(di),e&&t(ny),e&&t(Nt),e&&t(oy),e&&t(mi),e&&t(ly),e&&t(_i),e&&t(ry),e&&t(vi),j(Ro),e&&t(py),e&&t(ji),e&&t(iy),e&&t(Ts),j(Io),e&&t(uy),e&&t(Bt),e&&t(cy),e&&t(gi),e&&t(hy),j(Uo,e),e&&t(fy),e&&t(Wt),e&&t(dy),e&&t(yi),e&&t(my),e&&t(wi),e&&t(_y),j(Go,e),e&&t(vy),e&&t(Le),e&&t(jy),j(Lo,e),e&&t(gy),e&&t(Ft),e&&t(yy),j(Mo,e),e&&t(wy),e&&t(bi),e&&t(by),e&&t(Vt),e&&t(Ey),e&&t(Ei),e&&t(qy),e&&t(As),j(Zo),e&&t($y),e&&t(Kt),e&&t(ky),e&&t(Jt),e&&t(Py),j(Bo,e),e&&t(Dy),e&&t(Xt),e&&t(zy),j(Wo,e),e&&t(Oy),e&&t(Qt),e&&t(Ty),e&&t(qi),e&&t(Ay),e&&t(oe),e&&t(Sy),j(Vo,e),e&&t(Cy),e&&t(ea),e&&t(xy),e&&t(ki),e&&t(Ry),e&&t(Ss),j(Yo),e&&t(Iy),e&&t(G),e&&t(Uy),e&&t(Oi),e&&t(Gy),j(Ko,e),e&&t(Ly),e&&t(Ti),e&&t(My),j(Jo,e),e&&t(Zy),e&&t(Ai),e&&t(Ny),e&&t(Cs),j(Xo),e&&t(Hy),j(aa,e),e&&t(By),e&&t(Me),e&&t(Wy),e&&t(na),e&&t(Fy),e&&t(Ze),e&&t(Vy),e&&t(Ii),e&&t(Yy),e&&t(oa),e&&t(Ky),e&&t(la),e&&t(Jy),e&&t(le),e&&t(Xy),e&&t(Mi),e&&t(Qy),e&&t(xs),j(el),e&&t(ew),e&&t(sl),e&&t(sw),e&&t(Ne),e&&t(tw),e&&t(pa),e&&t(aw),e&&t(Ni),e&&t(nw),e&&t(Hi),e&&t(ow),e&&t(Rs),j(nl),e&&t(lw),e&&t(Bi),e&&t(rw),j(ol,e),e&&t(pw),e&&t(Wi),e&&t(iw),e&&t(He),e&&t(uw),e&&t(Be),e&&t(cw),j(ll,e),e&&t(hw),e&&t(Fi),e&&t(fw),e&&t(Vi),e&&t(dw),e&&t(Us),j(rl),e&&t(mw),e&&t(Yi),e&&t(_w),j(pl,e),e&&t(vw),e&&t(K),e&&t(jw),e&&t(We),e&&t(gw),e&&t(Ki),e&&t(yw),e&&t(ca),e&&t(ww),e&&t(M),e&&t(bw),e&&t(ze),e&&t(Ew),e&&t(Ji),e&&t(qw),e&&t(Fe),e&&t($w),e&&t(Ve),e&&t(kw),e&&t(dl),e&&t(Pw),e&&t(re),e&&t(Dw),e&&t(Qi),e&&t(zw),e&&t(Oe),e&&t(Ow),e&&t(Ye),e&&t(Tw),e&&t(ha),e&&t(Aw),e&&t(eu),e&&t(Sw),e&&t(Gs),j(jl),e&&t(Cw),e&&t(su),e&&t(xw),e&&t(tu),e&&t(Rw),j(gl,e),e&&t(Iw),e&&t(da),e&&t(Uw),e&&t(Ke),e&&t(Gw),e&&t(ma),e&&t(Lw),e&&t(Je),e&&t(Mw),e&&t(au),e&&t(Zw),e&&t(Ls),j(El),e&&t(Nw),e&&t(nu),e&&t(Hw),e&&t(ou),e&&t(Bw),e&&t(va),e&&t(Ww),e&&t(Xe),e&&t(Fw),e&&t(lu),e&&t(Vw),e&&t(Zs),j($l),e&&t(Yw),e&&t(ga),e&&t(Kw),j(kl,e),e&&t(Jw),e&&t(ya),e&&t(Xw),j(Pl,e),e&&t(Qw),e&&t(ru),e&&t(e2),e&&t(Ns),j(Dl),e&&t(s2),e&&t(ba),e&&t(t2),j(zl,e),e&&t(a2),e&&t(Ea),e&&t(n2),j(Ol,e),e&&t(o2),e&&t(Hs),j(Tl),e&&t(l2),e&&t($a),e&&t(r2),e&&t(pu),e&&t(p2),e&&t(ka),e&&t(i2),e&&t(iu),e&&t(u2),e&&t(Bs),j(Al),e&&t(c2),e&&t(Qe),e&&t(h2),e&&t($),e&&t(f2),e&&t(es),e&&t(d2),j(Cl,e),e&&t(m2),e&&t(cu),e&&t(_2),e&&t(pe),e&&t(v2),e&&t(hu),e&&t(j2),e&&t(fu),e&&t(g2),j(Gl,e),e&&t(y2),e&&t(Da),e&&t(w2),e&&t(mu),e&&t(b2),j(Ll,e),e&&t(E2),e&&t(ie),e&&t(q2),e&&t(_u),e&&t($2),e&&t(Ws),j(Ml),e&&t(k2),e&&t(Z),e&&t(P2),e&&t(vu),e&&t(D2),e&&t(Oa),e&&t(z2),e&&t(O),e&&t(O2),e&&t(ts),e&&t(T2),j(Hl,e),e&&t(A2),e&&t(as),e&&t(S2),e&&t(ue),e&&t(C2),e&&t(yu),e&&t(x2),j(Bl,e),e&&t(R2),e&&t(Sa),e&&t(I2),e&&t(Ca),e&&t(U2),j(Wl,e),e&&t(G2),e&&t(J),e&&t(L2),e&&t(bu),e&&t(M2),e&&t(Fs),j(Fl),e&&t(Z2),e&&t(Eu),e&&t(N2),e&&t(Ra),e&&t(H2),j(Vl,e),e&&t(B2),e&&t(Ia),e&&t(W2),e&&t(ce),e&&t(F2),e&&t(qu),e&&t(V2),e&&t(Vs),j(Kl),e&&t(Y2),e&&t($u),e&&t(K2),e&&t(Ys),j(Jl),e&&t(J2),e&&t(ku),e&&t(X2),j(Xl,e),e&&t(Q2),e&&t(ls),e&&t(eb),e&&t(rs),e&&t(sb),e&&t(Du),e&&t(tb),j(Ql,e),e&&t(ab),e&&t(La),e&&t(nb),e&&t(Ma),e&&t(ob),e&&t(Ks),j(sr),e&&t(lb),e&&t(Ou),e&&t(rb),j(tr,e),e&&t(pb),e&&t(Tu),e&&t(ib),e&&t(ps),e&&t(ub),e&&t(Au),e&&t(cb),j(ar,e),e&&t(hb),j(Na,e),e&&t(fb),e&&t(Js),j(nr),e&&t(db),e&&t(Su),e&&t(mb),j(or,e),e&&t(_b),e&&t(he),e&&t(vb),e&&t(Ba),e&&t(jb),e&&t(xu),e&&t(gb),j(lr,e),e&&t(yb),e&&t(Wa),e&&t(wb),e&&t(Fa),e&&t(bb),e&&t(Iu),e&&t(Eb),e&&t(Xs),j(pr),e&&t(qb),e&&t(Uu),e&&t($b),j(ir,e),e&&t(kb),e&&t(N),e&&t(Pb),e&&t(Lu),e&&t(Db),j(ur,e),e&&t(zb),e&&t(Ya),e&&t(Ob),e&&t(Zu),e&&t(Tb),e&&t(Qs),j(cr),e&&t(Ab),e&&t(Nu),e&&t(Sb),j(hr,e),e&&t(Cb),e&&t(is),e&&t(xb),e&&t(Bu),e&&t(Rb),j(fr,e),e&&t(Ib),e&&t(Ja),e&&t(Ub),e&&t(Fu),e&&t(Gb),e&&t(et),j(dr),e&&t(Lb),e&&t(Vu),e&&t(Mb),j(mr,e),e&&t(Zb),e&&t(us),e&&t(Nb),e&&t(Ku),e&&t(Hb),j(_r,e),e&&t(Bb),e&&t(Qa),e&&t(Wb),e&&t(Xu),e&&t(Fb),e&&t(st),j(vr),e&&t(Vb),e&&t(sn),e&&t(Yb),e&&t(Qu),e&&t(Kb),e&&t(tn),e&&t(Jb),e&&t(T),e&&t(Xb),j(jr,e),e&&t(Qb),e&&t(ec),e&&t(e3),e&&t(an),e&&t(s3),e&&t(sc),e&&t(t3),e&&t(tc),e&&t(a3),e&&t(ac),e&&t(n3),j(yr,e),e&&t(o3),e&&t(cs),e&&t(l3),j(wr,e),e&&t(r3),j(nn,e),e&&t(p3),e&&t(on),e&&t(i3),e&&t(ln),e&&t(u3),j(br,e),e&&t(c3),e&&t(nc),e&&t(h3),e&&t(hs),e&&t(f3),e&&t(oc),e&&t(d3),j(Er,e),e&&t(m3),e&&t(rn),e&&t(_3),j(qr,e),e&&t(v3),e&&t(pn),e&&t(j3),e&&t(lc),e&&t(g3),e&&t($r),e&&t(y3),e&&t(fs),e&&t(w3),e&&t(rc),e&&t(b3),e&&t(tt),j(kr),e&&t(E3),e&&t(pc),e&&t(q3),e&&t(ic),e&&t($3),e&&t(uc),e&&t(k3),e&&t(at),j(Pr),e&&t(P3),e&&t(hn),e&&t(D3),j(Dr,e),e&&t(z3),e&&t(cc),e&&t(O3),e&&t(D),e&&t(T3),j(zr,e),e&&t(A3),e&&t(fn),e&&t(S3),e&&t(dc),e&&t(C3),e&&t(dn),e&&t(x3),e&&t(fe),e&&t(R3),e&&t(nt),j(Tr),e&&t(I3),e&&t(Ar),e&&t(U3),e&&t(_n),e&&t(G3),e&&t(_c),e&&t(L3),j(Cr,e),e&&t(M3),e&&t(ds),e&&t(Z3),e&&t(vc),e&&t(N3),e&&t(ot),j(xr),e&&t(H3),e&&t(jc),e&&t(B3),e&&t(jn),e&&t(W3),j(Rr,e),e&&t(F3),e&&t(yc),e&&t(V3),e&&t(gn),e&&t(Y3),j(Ir,e),e&&t(K3),e&&t(wc),e&&t(J3),e&&t(bc),e&&t(X3),e&&t(lt),j(Ur),e&&t(Q3),e&&t(Ec),e&&t(e0),e&&t(qc),e&&t(s0),j(Gr,e),e&&t(t0),e&&t($c),e&&t(a0),e&&t(kc),e&&t(n0),e&&t(Pc),e&&t(o0),e&&t(Dc),e&&t(l0),j(Lr,e),e&&t(r0),e&&t(zc),e&&t(p0),e&&t(wn),e&&t(i0),e&&t(rt),j(Zr),e&&t(u0),e&&t(Oc),e&&t(c0),e&&t(Tc),e&&t(h0),e&&t(H),j(Hr),e&&t(f0),e&&t(xc),e&&t(d0),e&&t(En),e&&t(m0),e&&t(it),j(Jr),e&&t(_0),e&&t(ut),j(Xr),e&&t(v0),e&&t(B),e&&t(j0),e&&t(ct),j(sp),e&&t(g0),e&&t(Ic),e&&t(y0),e&&t(Uc),e&&t(w0),j(tp,e),e&&t(b0),e&&t(Pn),e&&t(E0),j(ap,e),e&&t(q0),e&&t(Gc),e&&t($0),e&&t(Lc),e&&t(k0),e&&t(ms),e&&t(P0),e&&t(ht),j(np),e&&t(D0),e&&t(_s),e&&t(z0),e&&t(Nc),e&&t(O0),e&&t(mt),j(pp),e&&t(T0),e&&t(de),e&&t(A0),e&&t(On),e&&t(S0),e&&t(vs),e&&t(C0),e&&t(Tn),e&&t(x0),e&&t(Yc),e&&t(R0),j(ip,e),e&&t(I0),e&&t(Kc),e&&t(U0),j(up,e),e&&t(G0),e&&t(me),e&&t(L0),e&&t(_t),j(hp),e&&t(M0),e&&t(P),j(fp),j(dp),j(mp),j(vp),j(jp),e&&t(Z0),e&&t(yt),j(gp),e&&t(N0),e&&t(In),e&&t(H0),e&&t(sh),e&&t(B0),e&&t(th),e&&t(W0),e&&t(ah),e&&t(F0),e&&t(Un),e&&t(V0),j(yp,e),e&&t(Y0),e&&t(Gn),e&&t(K0),j(wp,e),e&&t(J0),e&&t(nh),e&&t(X0),e&&t(wt),j(bp),e&&t(Q0),e&&t(ve),e&&t(eE),e&&t(oh),e&&t(sE),e&&t(gs),e&&t(tE),e&&t(ys)}}}const VK={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function YK(Et){return NK(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sJ extends GK{constructor(w){super();LK(this,w,YK,FK,MK,{})}}export{sJ as default,VK as metadata};
