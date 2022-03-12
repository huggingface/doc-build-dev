import{S as zK,i as DK,s as OK,e as o,k as u,w as f,t as a,M as TK,c as l,d as t,m as c,a as r,x as d,h as n,b as h,F as s,g as i,y as m,q as _,o as v,B as j}from"../../chunks/vendor-4833417e.js";import{T as PK}from"../../chunks/Tip-fffd6df1.js";import{D as Lj}from"../../chunks/Docstring-4f315ed9.js";import{C as g}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as y}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function AK(Jn){let w,Z;return{c(){w=o("p"),Z=a("This section is a must-read")},l(b){w=l(b,"P",{});var $=r(w);Z=n($,"This section is a must-read"),$.forEach(t)},m(b,$){i(b,w,$),s(w,Z)},d(b){b&&t(w)}}}function SK(Jn){let w,Z,b,$,js,V,Xn,gs,ys,jt,Y;return{c(){w=o("p"),Z=a("Note, that once "),b=o("code"),$=a("load_state_dict_from_zero_checkpoint"),js=a(" was run, the "),V=o("code"),Xn=a("model"),gs=a(` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ys=o("code"),jt=a("model.load_state_dict(state_dict)"),Y=a(` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`)},l(K){w=l(K,"P",{});var N=r(w);Z=n(N,"Note, that once "),b=l(N,"CODE",{});var Cp=r(b);$=n(Cp,"load_state_dict_from_zero_checkpoint"),Cp.forEach(t),js=n(N," was run, the "),V=l(N,"CODE",{});var Pe=r(V);Xn=n(Pe,"model"),Pe.forEach(t),gs=n(N,` will no longer be useable in the
DeepSpeed context of the same application. i.e. you will need to re-initialize the deepspeed engine, since
`),ys=l(N,"CODE",{});var xp=r(ys);jt=n(xp,"model.load_state_dict(state_dict)"),xp.forEach(t),Y=n(N,` will remove all the DeepSpeed magic from it. So do this only at the very end
of the training.`),N.forEach(t)},m(K,N){i(K,w,N),s(w,Z),s(w,b),s(b,$),s(w,js),s(w,V),s(V,Xn),s(w,gs),s(w,ys),s(ys,jt),s(w,Y)},d(K){K&&t(w)}}}function CK(Jn){let w,Z,b,$,js,V,Xn,gs,ys,jt,Y,K,N,Cp,Pe,xp,S4,Mj,O,Qh,C4,x4,ef,R4,I4,sf,U4,G4,tf,L4,M4,af,Z4,N4,nf,H4,Zj,ze,B4,Qn,W4,F4,eo,V4,Y4,Nj,Rp,K4,Hj,Ip,J4,Bj,gt,X4,so,Q4,e6,Wj,yt,to,s6,Up,t6,a6,n6,M,o6,Gp,l6,r6,of,p6,i6,lf,u6,c6,rf,h6,f6,Lp,d6,m6,Fj,Mp,_6,Vj,Zp,v6,Yj,Np,pf,j6,Kj,Hp,g6,Jj,Bp,ao,y6,Wp,w6,b6,Xj,Fp,q6,Qj,Vp,eg,ws,wt,uf,no,E6,cf,$6,sg,Yp,tg,bs,bt,hf,oo,k6,ff,P6,ag,Kp,z6,ng,lo,og,De,D6,df,O6,T6,mf,A6,S6,lg,ro,rg,Oe,C6,po,x6,R6,io,I6,U6,pg,qt,G6,Jp,L6,M6,ig,Xp,Z6,ug,Qp,N6,cg,uo,hg,Te,H6,_f,B6,W6,vf,F6,V6,fg,Et,Y6,jf,K6,J6,dg,co,mg,we,X6,gf,Q6,e5,yf,s5,t5,wf,a5,_g,ei,n5,vg,ho,jg,Ae,o5,bf,l5,r5,qf,p5,i5,gg,$t,u5,Ef,c5,h5,yg,Se,f5,$f,d5,m5,fo,_5,v5,wg,si,j5,bg,mo,qg,ti,g5,Eg,_o,$g,ai,y5,kg,vo,Pg,kt,w5,kf,b5,q5,zg,Pt,E5,Pf,$5,k5,Dg,zt,P5,jo,z5,D5,Og,ni,Tg,qs,Dt,zf,go,O5,Df,T5,Ag,Ot,A5,oi,S5,C5,Sg,Tt,Es,x5,Of,R5,I5,Tf,U5,G5,L5,be,M5,Af,Z5,N5,Sf,H5,B5,yo,W5,F5,Cg,li,V5,xg,wo,Rg,ri,Y5,Ig,bo,Ug,T,K5,Cf,J5,X5,xf,Q5,e$,Rf,s$,t$,If,a$,n$,qo,o$,l$,Gg,X,r$,Uf,p$,i$,Gf,u$,c$,Lf,h$,f$,Lg,At,d$,Mf,m$,_$,Mg,Eo,Zg,St,v$,Zf,j$,g$,Ng,Ct,y$,$o,w$,b$,Hg,pi,Bg,$s,xt,Nf,ko,q$,Hf,E$,Wg,Rt,$$,ii,k$,P$,Fg,Po,Vg,Ce,z$,Bf,D$,O$,zo,T$,A$,Yg,ui,S$,Kg,It,Wf,C$,x$,Ff,R$,Jg,ci,I$,Xg,Do,Qg,hi,U$,ey,Ut,G$,Oo,L$,M$,sy,fi,Z$,ty,di,N$,ay,mi,ks,To,H$,Vf,B$,W$,F$,Ao,V$,Yf,Y$,ny,_i,oy,Ps,Gt,Kf,So,K$,Jf,J$,ly,Lt,X$,Xf,Q$,e9,ry,vi,s9,py,Co,iy,Mt,t9,Qf,a9,n9,uy,ji,o9,cy,gi,l9,hy,xo,fy,xe,r9,ed,p9,i9,sd,u9,c9,dy,Ro,my,Zt,h9,td,f9,d9,_y,Io,vy,yi,m9,jy,Nt,_9,ad,v9,j9,gy,wi,yy,zs,Ht,nd,Uo,g9,od,y9,wy,Bt,w9,Go,b9,q9,by,Wt,E9,Lo,$9,k9,qy,Mo,Ey,Ft,P9,ld,z9,D9,$y,Zo,ky,Vt,O9,No,T9,A9,Py,bi,S9,zy,Q,C9,rd,x9,R9,pd,I9,U9,id,G9,L9,Dy,Ho,Oy,Yt,M9,qi,Z9,N9,Ty,Ei,Ay,Ds,Kt,ud,Bo,H9,cd,B9,Sy,A,W9,$i,F9,V9,ki,Y9,K9,hd,J9,X9,fd,Q9,e8,Pi,s8,t8,Cy,zi,a8,xy,Wo,Ry,Di,n8,Iy,Fo,Uy,Oi,Gy,Os,Jt,dd,Vo,o8,md,l8,Ly,Xt,My,Re,r8,Ti,p8,i8,Ai,u8,c8,Zy,Qt,h8,Si,f8,d8,Ny,Ie,m8,_d,_8,v8,Ci,j8,g8,Hy,xi,y8,By,ea,w8,Ri,b8,q8,Wy,sa,vd,E8,$8,Yo,k8,Ii,P8,z8,Fy,ee,D8,jd,O8,T8,Ui,A8,S8,gd,C8,x8,Vy,Gi,Yy,Ts,ta,yd,Ko,R8,wd,I8,Ky,Jo,Xo,U8,G8,Jy,Ue,L8,bd,M8,Z8,Qo,N8,H8,Xy,aa,B8,Li,W8,F8,Qy,Mi,V8,ew,Zi,sw,As,na,qd,el,Y8,Ed,K8,tw,Ni,J8,aw,sl,nw,Hi,$d,X8,ow,Ge,Ss,Q8,kd,ek,sk,Pd,tk,ak,nk,S,zd,ok,lk,Dd,rk,pk,Od,ik,uk,Td,ck,hk,Ad,fk,dk,Sd,mk,_k,vk,Cd,jk,lw,Le,gk,xd,yk,wk,Rd,bk,qk,rw,tl,pw,Bi,Ek,iw,Wi,uw,Cs,oa,Id,al,$k,Ud,kk,cw,Fi,Pk,hw,nl,fw,H,zk,Gd,Dk,Ok,Ld,Tk,Ak,Md,Sk,Ck,Zd,xk,Rk,dw,Me,Ik,Nd,Uk,Gk,Hd,Lk,Mk,mw,Vi,Bd,Zk,_w,la,ol,Wd,Nk,Hk,Fd,Bk,Wk,ll,Vd,Fk,Vk,Yd,Yk,vw,C,Kk,Kd,Jk,Xk,Jd,Qk,e7,Xd,s7,t7,Qd,a7,n7,em,o7,l7,jw,qe,sm,r7,p7,tm,i7,u7,am,c7,h7,gw,Yi,f7,yw,Ze,rl,nm,d7,m7,om,_7,v7,pl,lm,j7,g7,rm,y7,w7,il,pm,b7,q7,im,E7,ww,Ne,$7,um,k7,P7,Ki,z7,D7,bw,ul,cm,O7,T7,qw,se,A7,hm,S7,C7,fm,x7,R7,dm,I7,U7,Ew,Ji,cl,mm,G7,L7,_m,M7,$w,Ee,vm,Z7,N7,jm,H7,B7,gm,W7,F7,kw,He,V7,ym,Y7,K7,wm,J7,X7,Pw,ra,hl,Q7,bm,eP,sP,tP,fl,aP,qm,nP,oP,zw,Xi,Dw,xs,pa,Em,dl,lP,$m,rP,Ow,Qi,pP,Tw,eu,iP,Aw,ml,Sw,ia,uP,km,cP,hP,Cw,Be,fP,_l,dP,mP,vl,_P,vP,xw,ua,jP,Pm,gP,yP,Rw,We,wP,zm,bP,qP,jl,EP,$P,Iw,su,Uw,Rs,ca,Dm,gl,kP,Om,PP,Gw,tu,zP,Lw,au,DP,Mw,ha,Is,OP,Tm,TP,AP,Am,SP,CP,xP,yl,RP,Sm,IP,UP,Zw,Fe,GP,Cm,LP,MP,xm,ZP,NP,Nw,nu,Hw,Us,fa,Rm,wl,HP,Im,BP,Bw,da,WP,Um,FP,VP,Ww,bl,Fw,ma,YP,Gm,KP,JP,Vw,ql,Yw,ou,Kw,Gs,_a,Lm,El,XP,Mm,QP,Jw,va,ez,Zm,sz,tz,Xw,$l,Qw,ja,az,Nm,nz,oz,e2,kl,s2,Ls,ga,Hm,Pl,lz,Bm,rz,t2,ya,pz,Wm,iz,uz,a2,lu,cz,n2,wa,hz,Fm,fz,dz,o2,ru,l2,Ms,ba,Vm,zl,mz,Ym,_z,r2,Ve,vz,Km,jz,gz,Dl,yz,wz,p2,q,bz,Jm,qz,Ez,pu,$z,kz,Xm,Pz,zz,Qm,Dz,Oz,e_,Tz,Az,s_,Sz,Cz,t_,xz,Rz,a_,Iz,Uz,i2,Ye,Gz,n_,Lz,Mz,o_,Zz,Nz,u2,Ol,c2,iu,Hz,h2,te,Tl,l_,Bz,Wz,r_,Fz,Vz,Al,p_,Yz,Kz,i_,Jz,Xz,Sl,u_,Qz,eD,c_,sD,tD,Cl,h_,aD,nD,f_,oD,f2,uu,lD,d2,cu,rD,m2,xl,_2,qa,pD,hu,iD,uD,v2,fu,cD,j2,Rl,g2,ae,hD,d_,fD,dD,m_,mD,_D,__,vD,jD,y2,du,w2,Zs,Ea,v_,Il,gD,j_,yD,b2,x,wD,g_,bD,qD,y_,ED,$D,w_,kD,PD,b_,zD,DD,Ul,OD,TD,q2,mu,AD,E2,$a,Gl,q_,SD,CD,E_,xD,RD,Ke,$_,ID,UD,k_,GD,LD,P_,MD,ZD,$2,P,ND,z_,HD,BD,_u,WD,FD,D_,VD,YD,O_,KD,JD,T_,XD,QD,A_,eO,sO,k2,Je,tO,S_,aO,nO,C_,oO,lO,P2,Ll,z2,Xe,rO,x_,pO,iO,vu,uO,cO,D2,ne,ka,R_,hO,fO,I_,dO,mO,_O,Pa,U_,vO,jO,G_,gO,yO,wO,Qe,L_,bO,qO,M_,EO,$O,Z_,kO,PO,zO,es,N_,DO,OO,H_,TO,AO,B_,SO,CO,O2,ju,xO,T2,Ml,A2,za,RO,gu,IO,UO,S2,Da,GO,W_,LO,MO,C2,Zl,x2,B,ZO,F_,NO,HO,V_,BO,WO,Y_,FO,VO,K_,YO,KO,R2,yu,I2,Ns,Oa,J_,Nl,JO,X_,XO,U2,wu,QO,G2,Ta,eT,Q_,sT,tT,L2,Hl,M2,Aa,aT,Bl,nT,oT,Z2,oe,lT,e1,rT,pT,s1,iT,uT,t1,cT,hT,N2,bu,H2,Hs,Sa,a1,Wl,fT,n1,dT,B2,qu,mT,W2,Bs,Ca,o1,Fl,_T,l1,vT,F2,Eu,jT,V2,Vl,Y2,ss,gT,$u,yT,wT,r1,bT,qT,K2,ts,ET,p1,$T,kT,i1,PT,zT,J2,ku,DT,X2,Yl,Q2,xa,OT,Pu,TT,AT,eb,Ra,ST,Kl,CT,xT,sb,Ws,Ia,u1,Jl,RT,c1,IT,tb,zu,UT,ab,Xl,nb,Du,GT,ob,as,LT,h1,MT,ZT,f1,NT,HT,lb,Ou,BT,rb,Ql,pb,Fs,Ua,d1,er,WT,m1,FT,ib,Tu,VT,ub,sr,cb,le,YT,Au,KT,JT,_1,XT,QT,v1,eA,sA,hb,Ga,tA,j1,aA,nA,fb,Su,oA,db,tr,mb,La,lA,Cu,rA,pA,_b,Ma,iA,ar,uA,cA,vb,xu,jb,Vs,Za,g1,nr,hA,y1,fA,gb,Ru,dA,yb,or,wb,R,mA,Iu,_A,vA,w1,jA,gA,b1,yA,wA,q1,bA,qA,E1,EA,$A,bb,Uu,kA,qb,lr,Eb,Na,PA,Gu,zA,DA,$b,Lu,kb,Ys,Ha,$1,rr,OA,k1,TA,Pb,Mu,AA,zb,pr,Db,ns,SA,Zu,CA,xA,P1,RA,IA,Ob,Nu,UA,Tb,ir,Ab,Ba,GA,Hu,LA,MA,Sb,Bu,Cb,Ks,Wa,z1,ur,ZA,D1,NA,xb,Wu,HA,Rb,cr,Ib,os,BA,Fu,WA,FA,O1,VA,YA,Ub,Vu,KA,Gb,hr,Lb,Fa,JA,Yu,XA,QA,Mb,Ku,Zb,Js,Va,T1,fr,eS,A1,sS,Nb,Ya,tS,S1,aS,nS,Hb,Ju,C1,oS,Bb,Ka,lS,x1,rS,pS,Wb,z,iS,R1,uS,cS,I1,hS,fS,U1,dS,mS,G1,_S,vS,L1,jS,gS,M1,yS,wS,Fb,dr,Vb,Xu,Z1,bS,Yb,Ja,qS,mr,ES,$S,Kb,Qu,N1,kS,Jb,ec,PS,Xb,sc,zS,Qb,_r,e3,ls,DS,H1,OS,TS,B1,AS,SS,s3,vr,t3,Xa,a3,Qa,CS,W1,xS,RS,n3,en,IS,F1,US,GS,o3,jr,l3,tc,V1,LS,r3,rs,MS,Y1,ZS,NS,K1,HS,BS,p3,ac,WS,i3,gr,u3,sn,FS,J1,VS,YS,c3,yr,h3,tn,KS,X1,JS,XS,f3,nc,QS,d3,wr,Q1,eC,sC,m3,ps,tC,ev,aC,nC,sv,oC,lC,_3,oc,rC,v3,Xs,an,tv,br,pC,av,iC,j3,lc,uC,g3,rc,cC,y3,pc,hC,w3,Qs,nn,nv,qr,fC,ov,dC,b3,on,mC,lv,_C,vC,q3,Er,E3,ic,jC,$3,k,gC,rv,yC,wC,pv,bC,qC,iv,EC,$C,uc,kC,PC,cc,zC,DC,uv,OC,TC,cv,AC,SC,k3,$r,P3,ln,CC,hv,xC,RC,z3,hc,IC,D3,rn,UC,kr,GC,LC,O3,re,MC,fv,ZC,NC,dv,HC,BC,fc,WC,FC,T3,et,pn,mv,Pr,VC,_v,YC,A3,zr,KC,Dr,JC,S3,un,XC,vv,QC,ex,C3,dc,sx,x3,Or,R3,is,tx,jv,ax,nx,gv,ox,lx,I3,mc,U3,st,cn,yv,Tr,rx,wv,px,G3,_c,ix,L3,hn,ux,vc,cx,hx,M3,Ar,Z3,jc,fx,N3,fn,dx,bv,mx,_x,H3,Sr,B3,gc,vx,W3,yc,jx,F3,tt,dn,qv,Cr,gx,Ev,yx,V3,wc,wx,Y3,bc,bx,K3,xr,J3,qc,qx,X3,Ec,Ex,Q3,$c,$x,e0,kc,kx,s0,Rr,t0,Pc,Px,a0,mn,zx,Ir,Dx,Ox,n0,at,_n,$v,Ur,Tx,kv,Ax,o0,zc,Sx,l0,Dc,Cx,r0,I,Pv,zv,xx,Rx,Dv,$e,Ix,Oc,Ux,Gx,Tc,Lx,Mx,Ac,Zx,Nx,Hx,Gr,Ov,Bx,Wx,Lr,Fx,Tv,Mr,Vx,Zr,Yx,Kx,Jx,Av,Sv,Xx,Qx,Cv,Nr,eR,Hr,sR,tR,p0,Sc,aR,i0,vn,nt,xv,nR,oR,Rv,lR,rR,Iv,pR,iR,Uv,Br,uR,Wr,cR,hR,u0,ot,jn,Gv,Fr,fR,Lv,dR,c0,lt,gn,Mv,Vr,mR,Yr,_R,Zv,vR,jR,h0,U,gR,Nv,yR,wR,Hv,bR,qR,Bv,ER,$R,Wv,kR,PR,Kr,zR,DR,f0,rt,yn,Fv,Jr,OR,Cc,TR,Vv,AR,d0,xc,SR,m0,Rc,CR,_0,Xr,v0,wn,xR,Yv,RR,IR,j0,Qr,g0,Ic,UR,y0,Uc,GR,w0,us,LR,Kv,MR,ZR,Jv,NR,HR,b0,pt,bn,Xv,ep,BR,Qv,WR,q0,cs,qn,FR,Gc,VR,YR,ej,KR,JR,sp,XR,tp,QR,eI,sI,it,tI,Lc,aI,nI,ap,oI,lI,E0,Mc,$0,ut,En,sj,np,rI,tj,pI,k0,pe,iI,Zc,uI,cI,Nc,hI,fI,aj,dI,mI,P0,$n,_I,Hc,vI,jI,z0,hs,gI,Bc,yI,wI,Wc,bI,qI,D0,Fc,EI,O0,op,T0,Vc,$I,A0,lp,S0,ie,kI,Yc,PI,zI,rp,DI,OI,nj,TI,AI,C0,ct,kn,oj,pp,SI,lj,CI,x0,E,ip,xI,rj,RI,II,ke,UI,pj,GI,LI,ij,MI,ZI,uj,NI,HI,BI,ue,Kc,WI,FI,cj,VI,YI,Jc,KI,JI,hj,XI,QI,eU,fs,up,sU,fj,tU,aU,ht,nU,dj,oU,lU,mj,rU,pU,iU,Pn,cp,uU,hp,cU,_j,hU,fU,dU,zn,fp,mU,ft,_U,vj,vU,jU,jj,gU,yU,wU,Dn,dp,bU,dt,qU,gj,EU,$U,yj,kU,PU,R0,mt,On,wj,mp,zU,bj,DU,I0,Tn,OU,Xc,TU,AU,U0,Qc,SU,G0,eh,CU,L0,sh,xU,M0,An,qj,RU,IU,Ej,UU,Z0,_p,N0,Sn,GU,$j,LU,MU,H0,vp,B0,th,ZU,W0,_t,Cn,kj,jp,NU,Pj,HU,F0,ce,zj,gp,BU,WU,Dj,yp,FU,VU,Oj,wp,YU,KU,Tj,bp,JU,V0,ah,XU,Y0,ds,Aj,qp,QU,eG,Sj,Ep,sG,tG,Cj,$p,aG,K0,ms,nG,nh,oG,lG,kp,rG,pG,J0;return V=new y({}),no=new y({}),oo=new y({}),lo=new g({props:{code:"pip install deepspeed",highlighted:"pip install deepspeed"}}),ro=new g({props:{code:"pip install transformers[deepspeed]",highlighted:"pip install transformers[deepspeed]"}}),uo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option="build_ext" --global-option="-j8" --no-cache -v \\
--disable-pip-version-check 2>&1 | tee build.log`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 pip install . \\
--global-option=<span class="hljs-string">&quot;build_ext&quot;</span> --global-option=<span class="hljs-string">&quot;-j8&quot;</span> --no-cache -v \\
--disable-pip-version-check 2&gt;&amp;1 | <span class="hljs-built_in">tee</span> build.log`}}),co=new g({props:{code:'CUDA_VISIBLE_DEVICES=0 python -c "import torch; print(torch.cuda.get_device_capability())"',highlighted:'CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_device_capability())&quot;</span>'}}),ho=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeed/
cd DeepSpeed
rm -rf build
TORCH_CUDA_ARCH_LIST="8.6" DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeed/
<span class="hljs-built_in">cd</span> DeepSpeed
<span class="hljs-built_in">rm</span> -rf build
TORCH_CUDA_ARCH_LIST=<span class="hljs-string">&quot;8.6&quot;</span> DS_BUILD_CPU_ADAM=1 DS_BUILD_UTILS=1 \\
python setup.py build_ext -j8 bdist_wheel`}}),mo=new g({props:{code:'python -c "import torch; print(torch.cuda.get_arch_list())"',highlighted:'python -c <span class="hljs-string">&quot;import torch; print(torch.cuda.get_arch_list())&quot;</span>'}}),_o=new g({props:{code:`CUDA_VISIBLE_DEVICES=0 python -c "import torch; \\
print(torch.cuda.get_device_properties(torch.device('cuda')))"`,highlighted:`CUDA_VISIBLE_DEVICES=0 python -c <span class="hljs-string">&quot;import torch; \\
print(torch.cuda.get_device_properties(torch.device(&#x27;cuda&#x27;)))&quot;</span>`}}),vo=new g({props:{code:"_CudaDeviceProperties(name='GeForce RTX 3090', major=8, minor=6, total_memory=24268MB, multi_processor_count=82)",highlighted:'_CudaDeviceProperties(name=<span class="hljs-string">&#x27;GeForce RTX 3090&#x27;</span>, major=8, minor=6, total_memory=24268MB, multi_processor_count=82)'}}),go=new y({}),wo=new g({props:{code:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py <normal cl args>",highlighted:"python -m torch.distributed.launch --nproc_per_node=2 your_program.py &lt;normal cl args&gt;"}}),bo=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --deepspeed ds_config.json"}}),Eo=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),ko=new y({}),Po=new g({props:{code:`deepspeed --num_gpus=1 examples/pytorch/translation/run_translation.py \\
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
--source_lang en --target_lang ro`}}),Do=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ao=new g({props:{code:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ...",highlighted:"deepspeed --include localhost:1 examples/pytorch/translation/run_translation.py ..."}}),So=new y({}),Co=new g({props:{code:`# DeepSpeed requires a distributed environment even when only one process is used.
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
trainer.train()`}}),xo=new g({props:{code:`%%bash
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
EOT`}}),Ro=new g({props:{code:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`!git clone https://github.com/huggingface/transformers
!cd transformers; deepspeed examples/pytorch/translation/run_translation.py ...`}}),Io=new g({props:{code:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`,highlighted:`%%bash

git clone https://github.com/huggingface/transformers
cd transformers
deepspeed examples/pytorch/translation/run_translation.py ...`}}),Uo=new y({}),Mo=new g({props:{code:`git clone https://github.com/microsoft/DeepSpeedExamples
cd DeepSpeedExamples
find . -name '*json'`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/microsoft/DeepSpeedExamples
<span class="hljs-built_in">cd</span> DeepSpeedExamples
find . -name <span class="hljs-string">&#x27;*json&#x27;</span>`}}),Zo=new g({props:{code:"grep -i Lamb $(find . -name '*json')",highlighted:'grep -i Lamb $(find . -name <span class="hljs-string">&#x27;*json&#x27;</span>)'}}),Ho=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Bo=new y({}),Wo=new g({props:{code:'TrainingArguments(..., deepspeed="/path/to/ds_config.json")',highlighted:'TrainingArguments(..., deepspeed=<span class="hljs-string">&quot;/path/to/ds_config.json&quot;</span>)'}}),Fo=new g({props:{code:`ds_config_dict = dict(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`,highlighted:`ds_config_dict = <span class="hljs-built_in">dict</span>(scheduler=scheduler_params, optimizer=optimizer_params)
TrainingArguments(..., deepspeed=ds_config_dict)`}}),Vo=new y({}),Xt=new PK({props:{warning:"&lcub;true}",$$slots:{default:[AK]},$$scope:{ctx:Jn}}}),Ko=new y({}),el=new y({}),sl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),tl=new g({props:{code:`{
    "zero_optimization": {
        "round_robin_gradients": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;round_robin_gradients&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),al=new y({}),nl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),dl=new y({}),ml=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),gl=new y({}),wl=new y({}),bl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),ql=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),El=new y({}),$l=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),kl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Pl=new y({}),zl=new y({}),Ol=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),xl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Rl=new g({props:{code:`{
   "zero_allow_untested_optimizer": true
}`,highlighted:`<span class="hljs-punctuation">{</span>
   <span class="hljs-attr">&quot;zero_allow_untested_optimizer&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
<span class="hljs-punctuation">}</span>`}}),Il=new y({}),Ll=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Ml=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Zl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Nl=new y({}),Hl=new g({props:{code:`{
    "fp16": {
        "enabled": "false",
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;fp16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;false&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Wl=new y({}),Fl=new y({}),Vl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Yl=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Jl=new y({}),Xl=new g({props:{code:`{
    "bf16": {
        "enabled": "auto"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),Ql=new g({props:{code:`{
    "bf16": {
        "enabled": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;bf16&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),er=new y({}),sr=new g({props:{code:`"amp": {
    "enabled": "auto",
    "opt_level": "auto"
}`,highlighted:`<span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),tr=new g({props:{code:`{
    "amp": {
        "enabled": true,
        "opt_level": "O1"
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;amp&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;enabled&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
        <span class="hljs-attr">&quot;opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),nr=new y({}),or=new g({props:{code:`{
    "train_batch_size": "auto",
    "train_micro_batch_size_per_gpu": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),lr=new g({props:{code:`{
    "train_batch_size": 12,
    "train_micro_batch_size_per_gpu": 4
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;train_batch_size&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">12</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;train_micro_batch_size_per_gpu&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">4</span>
<span class="hljs-punctuation">}</span>`}}),rr=new y({}),pr=new g({props:{code:`{
    "gradient_accumulation_steps": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),ir=new g({props:{code:`{
    "gradient_accumulation_steps": 3
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_accumulation_steps&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">3</span>
<span class="hljs-punctuation">}</span>`}}),ur=new y({}),cr=new g({props:{code:`{
    "gradient_clipping": "auto"
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;auto&quot;</span>
<span class="hljs-punctuation">}</span>`}}),hr=new g({props:{code:`{
    "gradient_clipping": 1.0
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;gradient_clipping&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">1.0</span>
<span class="hljs-punctuation">}</span>`}}),fr=new y({}),dr=new g({props:{code:`{
    "zero_optimization": {
        "stage3_gather_16bit_weights_on_model_save": true
    }
}`,highlighted:`<span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;zero_optimization&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
        <span class="hljs-attr">&quot;stage3_gather_16bit_weights_on_model_save&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span>
    <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`}}),_r=new g({props:{code:`from transformers.trainer_utils import get_last_checkpoint
from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> transformers.trainer_utils <span class="hljs-keyword">import</span> get_last_checkpoint
<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = get_last_checkpoint(trainer.args.output_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),vr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, "checkpoint-final")
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> load_state_dict_from_zero_checkpoint

checkpoint_dir = os.path.join(trainer.args.output_dir, <span class="hljs-string">&quot;checkpoint-final&quot;</span>)
trainer.deepspeed.save_checkpoint(checkpoint_dir)
fp32_model = load_state_dict_from_zero_checkpoint(trainer.model, checkpoint_dir)`}}),Xa=new PK({props:{$$slots:{default:[SK]},$$scope:{ctx:Jn}}}),jr=new g({props:{code:`from deepspeed.utils.zero_to_fp32 import get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  # already on cpu
model = model.cpu()
model.load_state_dict(state_dict)`,highlighted:`<span class="hljs-keyword">from</span> deepspeed.utils.zero_to_fp32 <span class="hljs-keyword">import</span> get_fp32_state_dict_from_zero_checkpoint

state_dict = get_fp32_state_dict_from_zero_checkpoint(checkpoint_dir)  <span class="hljs-comment"># already on cpu</span>
model = model.cpu()
model.load_state_dict(state_dict)`}}),gr=new g({props:{code:`$ ls -l output_dir/checkpoint-1/
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
-rwxrw-r-- 1 stas stas 5.5K Mar 27 13:16 zero_to_fp32.py*`}}),yr=new g({props:{code:"python zero_to_fp32.py . pytorch_model.bin",highlighted:"python zero_to_fp32.py . pytorch_model.bin"}}),br=new y({}),qr=new y({}),Er=new g({props:{code:`from transformers import T5ForConditionalGeneration, T5Config
import deepspeed

with deepspeed.zero.Init():
    config = T5Config.from_pretrained("t5-small")
    model = T5ForConditionalGeneration(config)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, T5Config
<span class="hljs-keyword">import</span> deepspeed

<span class="hljs-keyword">with</span> deepspeed.zero.Init():
    config = T5Config.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
    model = T5ForConditionalGeneration(config)`}}),$r=new g({props:{code:`from transformers import AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained("t5-small")
trainer = Trainer(model=model, args=training_args, ...)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, Trainer, TrainingArguments

training_args = TrainingArguments(..., deepspeed=ds_config)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
trainer = Trainer(model=model, args=training_args, ...)`}}),Pr=new y({}),Or=new g({props:{code:'tensor([1.0], device="cuda:0", dtype=torch.float16, requires_grad=True)',highlighted:'tensor([<span class="hljs-number">1.0</span>], device=<span class="hljs-string">&quot;cuda:0&quot;</span>, dtype=torch.float16, requires_grad=<span class="hljs-literal">True</span>)'}}),Tr=new y({}),Ar=new g({props:{code:"deepspeed --num_gpus=2 your_program.py <normal cl args> --do_eval --deepspeed ds_config.json",highlighted:"deepspeed --num_gpus=2 your_program.py &lt;normal cl args&gt; --do_eval --deepspeed ds_config.json"}}),Sr=new g({props:{code:`deepspeed examples/pytorch/translation/run_translation.py \\
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
--source_prefix <span class="hljs-string">&quot;translate English to Romanian: &quot;</span>`}}),Cr=new y({}),xr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
   15.56GB |  46.91GB | offload_param=none, offload_optimizer=none, zero_init=0`}}),Rr=new g({props:{code:`$ python -c 'from transformers import AutoModel; \\
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
`}}),Ur=new y({}),Lr=new g({props:{code:`python -c 'import torch; print(f"torch: {torch.__version__}")'
python -c 'import transformers; print(f"transformers: {transformers.__version__}")'
python -c 'import deepspeed; print(f"deepspeed: {deepspeed.__version__}")'`,highlighted:`python -c <span class="hljs-string">&#x27;import torch; print(f&quot;torch: {torch.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import transformers; print(f&quot;transformers: {transformers.__version__}&quot;)&#x27;</span>
python -c <span class="hljs-string">&#x27;import deepspeed; print(f&quot;deepspeed: {deepspeed.__version__}&quot;)&#x27;</span>`}}),Fr=new y({}),Vr=new y({}),Jr=new y({}),Xr=new g({props:{code:`{
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
<span class="hljs-punctuation">}</span>`}}),Qr=new g({props:{code:`0%|                                                                                                                             | 0/189 [00:00<?, ?it/s]
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
[...]`}}),ep=new y({}),np=new y({}),op=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),lp=new g({props:{code:`from transformers.deepspeed import HfDeepSpeedConfig
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
engine = deepspeed.initialize(model=model, config_params=ds_config, ...)`}}),pp=new y({}),ip=new Lj({props:{name:"class transformers.deepspeed.HfDeepSpeedConfig",anchor:"transformers.deepspeed.HfDeepSpeedConfig",parameters:[{name:"config_file_or_dict",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_14569/src/transformers/deepspeed.py#L40",parametersDescription:[{anchor:"transformers.deepspeed.HfDeepSpeedConfig.config_file_or_dict",description:"<strong>config_file_or_dict</strong> (<code>Union[str, Dict]</code>) &#x2014; path to DeepSpeed config file or dict.",name:"config_file_or_dict"}]}}),up=new Lj({props:{name:"del_config_sub_tree",anchor:"transformers.deepspeed.HfDeepSpeedConfig.del_config_sub_tree",parameters:[{name:"ds_key_long",val:""},{name:"must_exist",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_14569/src/transformers/deepspeed.py#L114"}}),cp=new Lj({props:{name:"get_value",anchor:"transformers.deepspeed.HfDeepSpeedConfig.get_value",parameters:[{name:"ds_key_long",val:""},{name:"default",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_14569/src/transformers/deepspeed.py#L105"}}),fp=new Lj({props:{name:"is_false",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_false",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_14569/src/transformers/deepspeed.py#L146"}}),dp=new Lj({props:{name:"is_true",anchor:"transformers.deepspeed.HfDeepSpeedConfig.is_true",parameters:[{name:"ds_key_long",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_14569/src/transformers/deepspeed.py#L137"}}),mp=new y({}),_p=new g({props:{code:`#!/usr/bin/env python

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
# https://huggingface.co/docs/transformers/master/main_classes/deepspeed

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
<span class="hljs-comment"># https://huggingface.co/docs/transformers/master/main_classes/deepspeed</span>

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;rank<span class="hljs-subst">{rank}</span>:\\n   in=<span class="hljs-subst">{text_in}</span>\\n  out=<span class="hljs-subst">{text_out}</span>&quot;</span>)`}}),vp=new g({props:{code:`$ deepspeed --num_gpus 2 t0.py
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
  <span class="hljs-keyword">out</span>=negative`}}),jp=new y({}),{c(){w=o("meta"),Z=u(),b=o("h1"),$=o("a"),js=o("span"),f(V.$$.fragment),Xn=u(),gs=o("span"),ys=a("DeepSpeed Integration"),jt=u(),Y=o("p"),K=o("a"),N=a("DeepSpeed"),Cp=a(" implements everything described in the "),Pe=o("a"),xp=a("ZeRO paper"),S4=a(". Currently it provides full support for:"),Mj=u(),O=o("ol"),Qh=o("li"),C4=a("Optimizer state partitioning (ZeRO stage 1)"),x4=u(),ef=o("li"),R4=a("Gradient partitioning (ZeRO stage 2)"),I4=u(),sf=o("li"),U4=a("Parameter partitioning (ZeRO stage 3)"),G4=u(),tf=o("li"),L4=a("Custom mixed precision training handling"),M4=u(),af=o("li"),Z4=a("A range of fast CUDA-extension-based optimizers"),N4=u(),nf=o("li"),H4=a("ZeRO-Offload to CPU and NVMe"),Zj=u(),ze=o("p"),B4=a("ZeRO-Offload has its own dedicated paper: "),Qn=o("a"),W4=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),F4=a(". And NVMe-support is described in the paper "),eo=o("a"),V4=a(`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),Y4=a("."),Nj=u(),Rp=o("p"),K4=a("DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),Hj=u(),Ip=o("p"),J4=a(`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),Bj=u(),gt=o("p"),X4=a("\u{1F917} Transformers integrates "),so=o("a"),Q4=a("DeepSpeed"),e6=a(" via 2 options:"),Wj=u(),yt=o("ol"),to=o("li"),s6=a("Integration of the core DeepSpeed features via "),Up=o("a"),t6=a("Trainer"),a6=a(`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),n6=u(),M=o("li"),o6=a("If you don\u2019t use "),Gp=o("a"),l6=a("Trainer"),r6=a(` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),of=o("code"),p6=a("from_pretrained"),i6=a(" and "),lf=o("code"),u6=a("from_config"),c6=a(` include integration of essential
parts of DeepSpeed like `),rf=o("code"),h6=a("zero.Init"),f6=a(` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Lp=o("a"),d6=a("deepspeed-non-trainer-integration"),m6=a("."),Fj=u(),Mp=o("p"),_6=a("What is integrated:"),Vj=u(),Zp=o("p"),v6=a("Training:"),Yj=u(),Np=o("ol"),pf=o("li"),j6=a("DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),Kj=u(),Hp=o("p"),g6=a("Inference:"),Jj=u(),Bp=o("ol"),ao=o("li"),y6=a(`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Wp=o("a"),w6=a("deepspeed-zero-inference"),b6=a("."),Xj=u(),Fp=o("p"),q6=a(`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),Qj=u(),Vp=o("a"),eg=u(),ws=o("h2"),wt=o("a"),uf=o("span"),f(no.$$.fragment),E6=u(),cf=o("span"),$6=a("Trainer Deepspeed Integration"),sg=u(),Yp=o("a"),tg=u(),bs=o("h3"),bt=o("a"),hf=o("span"),f(oo.$$.fragment),k6=u(),ff=o("span"),P6=a("Installation"),ag=u(),Kp=o("p"),z6=a("Install the library via pypi:"),ng=u(),f(lo.$$.fragment),og=u(),De=o("p"),D6=a("or via "),df=o("code"),O6=a("transformers"),T6=a("\u2019 "),mf=o("code"),A6=a("extras"),S6=a(":"),lg=u(),f(ro.$$.fragment),rg=u(),Oe=o("p"),C6=a("or find more details on "),po=o("a"),x6=a("the DeepSpeed\u2019s GitHub page"),R6=a(` and
`),io=o("a"),I6=a("advanced install"),U6=a("."),pg=u(),qt=o("p"),G6=a("If you\u2019re still struggling with the build, first make sure to read "),Jp=o("a"),L6=a("zero-install-notes"),M6=a("."),ig=u(),Xp=o("p"),Z6=a(`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),ug=u(),Qp=o("p"),N6=a("To make a local build for DeepSpeed:"),cg=u(),f(uo.$$.fragment),hg=u(),Te=o("p"),H6=a("If you intend to use NVMe offload you will also need to include "),_f=o("code"),B6=a("DS_BUILD_AIO=1"),W6=a(` in the instructions above (and also
install `),vf=o("em"),F6=a("libaio-dev"),V6=a(" system-wide)."),fg=u(),Et=o("p"),Y6=a("Edit "),jf=o("code"),K6=a("TORCH_CUDA_ARCH_LIST"),J6=a(` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),dg=u(),f(co.$$.fragment),mg=u(),we=o("p"),X6=a("So if you get "),gf=o("code"),Q6=a("8, 6"),e5=a(", then use "),yf=o("code"),s5=a('TORCH_CUDA_ARCH_LIST="8.6"'),t5=a(`. If you have multiple different cards, you can list all
of them like so `),wf=o("code"),a5=a('TORCH_CUDA_ARCH_LIST="6.1;8.6"'),_g=u(),ei=o("p"),n5=a("If you need to use the same setup on multiple machines, make a binary wheel:"),vg=u(),f(ho.$$.fragment),jg=u(),Ae=o("p"),o5=a("it will generate something like "),bf=o("code"),l5=a("dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),r5=a(` which now you can install
as `),qf=o("code"),p5=a("pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),i5=a(" locally or on any other machine."),gg=u(),$t=o("p"),u5=a("Again, remember to ensure to adjust "),Ef=o("code"),c5=a("TORCH_CUDA_ARCH_LIST"),h5=a(" to the target architectures."),yg=u(),Se=o("p"),f5=a("You can find the complete list of NVIDIA GPUs and their corresponding "),$f=o("strong"),d5=a("Compute Capabilities"),m5=a(` (same as arch in this
context) `),fo=o("a"),_5=a("here"),v5=a("."),wg=u(),si=o("p"),j5=a("You can check the archs pytorch was built with using:"),bg=u(),f(mo.$$.fragment),qg=u(),ti=o("p"),g5=a("Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),Eg=u(),f(_o.$$.fragment),$g=u(),ai=o("p"),y5=a("If the output is:"),kg=u(),f(vo.$$.fragment),Pg=u(),kt=o("p"),w5=a("then you know that this card\u2019s arch is "),kf=o("code"),b5=a("8.6"),q5=a("."),zg=u(),Pt=o("p"),E5=a("You can also leave "),Pf=o("code"),$5=a("TORCH_CUDA_ARCH_LIST"),k5=a(` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),Dg=u(),zt=o("p"),P5=a(`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),jo=o("a"),z5=a("Deepspeed"),D5=a(","),Og=u(),ni=o("a"),Tg=u(),qs=o("h3"),Dt=o("a"),zf=o("span"),f(go.$$.fragment),O5=u(),Df=o("span"),T5=a("Deployment with multiple GPUs"),Ag=u(),Ot=o("p"),A5=a("To deploy this feature with multiple GPUs adjust the "),oi=o("a"),S5=a("Trainer"),C5=a(` command line arguments as
following:`),Sg=u(),Tt=o("ol"),Es=o("li"),x5=a("replace "),Of=o("code"),R5=a("python -m torch.distributed.launch"),I5=a(" with "),Tf=o("code"),U5=a("deepspeed"),G5=a("."),L5=u(),be=o("li"),M5=a("add a new argument "),Af=o("code"),Z5=a("--deepspeed ds_config.json"),N5=a(", where "),Sf=o("code"),H5=a("ds_config.json"),B5=a(` is the DeepSpeed configuration file as
documented `),yo=o("a"),W5=a("here"),F5=a(". The file naming is up to you."),Cg=u(),li=o("p"),V5=a("Therefore, if your original command line looked as follows:"),xg=u(),f(wo.$$.fragment),Rg=u(),ri=o("p"),Y5=a("Now it should be:"),Ig=u(),f(bo.$$.fragment),Ug=u(),T=o("p"),K5=a("Unlike, "),Cf=o("code"),J5=a("torch.distributed.launch"),X5=a(" where you have to specify how many GPUs to use with "),xf=o("code"),Q5=a("--nproc_per_node"),e$=a(`, with the
`),Rf=o("code"),s$=a("deepspeed"),t$=a(" launcher you don\u2019t have to use the corresponding "),If=o("code"),a$=a("--num_gpus"),n$=a(` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),qo=o("a"),o$=a("here"),l$=a("."),Gg=u(),X=o("p"),r$=a("In fact, you can continue using "),Uf=o("code"),p$=a("-m torch.distributed.launch"),i$=a(` with DeepSpeed as long as you don\u2019t need to use
`),Gf=o("code"),u$=a("deepspeed"),c$=a(` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Lf=o("code"),h$=a("deepspeed"),f$=a(` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Lg=u(),At=o("p"),d$=a("Here is an example of running "),Mf=o("code"),m$=a("run_translation.py"),_$=a(" under DeepSpeed deploying all available GPUs:"),Mg=u(),f(Eo.$$.fragment),Zg=u(),St=o("p"),v$=a("Note that in the DeepSpeed documentation you are likely to see "),Zf=o("code"),j$=a("--deepspeed --deepspeed_config ds_config.json"),g$=a(` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),Ng=u(),Ct=o("p"),y$=a("For some practical usage examples, please, see this "),$o=o("a"),w$=a("post"),b$=a("."),Hg=u(),pi=o("a"),Bg=u(),$s=o("h3"),xt=o("a"),Nf=o("span"),f(ko.$$.fragment),q$=u(),Hf=o("span"),E$=a("Deployment with one GPU"),Wg=u(),Rt=o("p"),$$=a("To deploy DeepSpeed with one GPU adjust the "),ii=o("a"),k$=a("Trainer"),P$=a(" command line arguments as follows:"),Fg=u(),f(Po.$$.fragment),Vg=u(),Ce=o("p"),z$=a(`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Bf=o("code"),D$=a("--num_gpus=1"),O$=a(`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),zo=o("a"),T$=a("documentation"),A$=a(" discusses the launcher options."),Yg=u(),ui=o("p"),S$=a("Why would you want to use DeepSpeed with just one GPU?"),Kg=u(),It=o("ol"),Wf=o("li"),C$=a(`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),x$=u(),Ff=o("li"),R$=a(`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),Jg=u(),ci=o("p"),I$=a(`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),Xg=u(),f(Do.$$.fragment),Qg=u(),hi=o("p"),U$=a(`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),ey=u(),Ut=o("p"),G$=a("For a practical usage example of this type of deployment, please, see this "),Oo=o("a"),L$=a("post"),M$=a("."),sy=u(),fi=o("p"),Z$=a("You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),ty=u(),di=o("p"),N$=a("Notes:"),ay=u(),mi=o("ul"),ks=o("li"),To=o("p"),H$=a("if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Vf=o("code"),B$=a("CUDA_VISIBLE_DEVICES"),W$=a(` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),F$=u(),f(Ao.$$.fragment),V$=u(),Yf=o("p"),Y$=a("In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),ny=u(),_i=o("a"),oy=u(),Ps=o("h3"),Gt=o("a"),Kf=o("span"),f(So.$$.fragment),K$=u(),Jf=o("span"),J$=a("Deployment in Notebooks"),ly=u(),Lt=o("p"),X$=a("The problem with running notebook cells as a script is that there is no normal "),Xf=o("code"),Q$=a("deepspeed"),e9=a(` launcher to rely on, so
under certain setups we have to emulate it.`),ry=u(),vi=o("p"),s9=a("If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),py=u(),f(Co.$$.fragment),iy=u(),Mt=o("p"),t9=a("Note: "),Qf=o("code"),a9=a("..."),n9=a(" stands for the normal arguments that you\u2019d pass to the functions."),uy=u(),ji=o("p"),o9=a(`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),cy=u(),gi=o("p"),l9=a(`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),hy=u(),f(xo.$$.fragment),fy=u(),xe=o("p"),r9=a("If the training script is in a normal file and not in the notebook cells, you can launch "),ed=o("code"),p9=a("deepspeed"),i9=a(` normally via
shell from a cell. For example, to use `),sd=o("code"),u9=a("run_translation.py"),c9=a(" you would launch it with:"),dy=u(),f(Ro.$$.fragment),my=u(),Zt=o("p"),h9=a("or with "),td=o("code"),f9=a("%%bash"),d9=a(" magic, where you can write a multi-line code for the shell program to run:"),_y=u(),f(Io.$$.fragment),vy=u(),yi=o("p"),m9=a("In such case you don\u2019t need any of the code presented at the beginning of this section."),jy=u(),Nt=o("p"),_9=a("Note: While "),ad=o("code"),v9=a("%%bash"),j9=a(` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),gy=u(),wi=o("a"),yy=u(),zs=o("h3"),Ht=o("a"),nd=o("span"),f(Uo.$$.fragment),g9=u(),od=o("span"),y9=a("Configuration"),wy=u(),Bt=o("p"),w9=a(`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Go=o("a"),b9=a("following documentation"),q9=a("."),by=u(),Wt=o("p"),E9=a("You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Lo=o("a"),$9=a(`the DeepSpeedExamples
repo`),k9=a(":"),qy=u(),f(Mo.$$.fragment),Ey=u(),Ft=o("p"),P9=a(`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),ld=o("code"),z9=a(".json"),D9=a(" files with:"),$y=u(),f(Zo.$$.fragment),ky=u(),Vt=o("p"),O9=a("Some more examples are to be found in the "),No=o("a"),T9=a("main repo"),A9=a(" as well."),Py=u(),bi=o("p"),S9=a(`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),zy=u(),Q=o("p"),C9=a(`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),rd=o("code"),x9=a("AdamW"),R9=a(" optimizer and "),pd=o("code"),I9=a("WarmupLR"),U9=a(` scheduler and will enable mixed
precision training if `),id=o("code"),G9=a("--fp16"),L9=a(" is passed:"),Dy=u(),f(Ho.$$.fragment),Oy=u(),Yt=o("p"),M9=a("When you execute the program, DeepSpeed will log the configuration it received from the "),qi=o("a"),Z9=a("Trainer"),N9=a(`
to the console, so you can see exactly what was the final configuration passed to it.`),Ty=u(),Ei=o("a"),Ay=u(),Ds=o("h3"),Kt=o("a"),ud=o("span"),f(Bo.$$.fragment),H9=u(),cd=o("span"),B9=a("Passing Configuration"),Sy=u(),A=o("p"),W9=a(`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),$i=o("a"),F9=a("Trainer"),V9=a(" via "),ki=o("a"),Y9=a("TrainingArguments"),K9=a(" then for the "),hd=o("code"),J9=a("deepspeed"),X9=a(` argument you can
pass a nested `),fd=o("code"),Q9=a("dict"),e8=a(`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Pi=o("a"),s8=a("TrainingArguments"),t8=a("."),Cy=u(),zi=o("p"),a8=a("To summarize you can do:"),xy=u(),f(Wo.$$.fragment),Ry=u(),Di=o("p"),n8=a("or:"),Iy=u(),f(Fo.$$.fragment),Uy=u(),Oi=o("a"),Gy=u(),Os=o("h3"),Jt=o("a"),dd=o("span"),f(Vo.$$.fragment),o8=u(),md=o("span"),l8=a("Shared Configuration"),Ly=u(),f(Xt.$$.fragment),My=u(),Re=o("p"),r8=a("Some configuration values are required by both the "),Ti=o("a"),p8=a("Trainer"),i8=a(` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ai=o("a"),u8=a("Trainer"),c8=a(" command line arguments."),Zy=u(),Qt=o("p"),h8=a(`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Si=o("a"),f8=a("Trainer"),d8=a(` do the majority
of configuration for you.`),Ny=u(),Ie=o("p"),m8=a("Therefore, in the rest of this guide you will find a special configuration value: "),_d=o("code"),_8=a("auto"),v8=a(`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ci=o("a"),j8=a("Trainer"),g8=a(` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),Hy=u(),xi=o("p"),y8=a(`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),By=u(),ea=o("p"),w8=a(`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ri=o("a"),b8=a("TrainingArguments"),q8=a(" based on that. The steps are:"),Wy=u(),sa=o("ol"),vd=o("li"),E8=a("Create or load the DeepSpeed configuration to be used as a master configuration"),$8=u(),Yo=o("li"),k8=a("Create the "),Ii=o("a"),P8=a("TrainingArguments"),z8=a(" object based on these values"),Fy=u(),ee=o("p"),D8=a("Do note that some values, such as "),jd=o("code"),O8=a("scheduler.params.total_num_steps"),T8=a(` are calculated by
`),Ui=o("a"),A8=a("Trainer"),S8=a(" during "),gd=o("code"),C8=a("train"),x8=a(", but you can of course do the math yourself."),Vy=u(),Gi=o("a"),Yy=u(),Ts=o("h3"),ta=o("a"),yd=o("span"),f(Ko.$$.fragment),R8=u(),wd=o("span"),I8=a("ZeRO"),Ky=u(),Jo=o("p"),Xo=o("a"),U8=a("Zero Redundancy Optimizer (ZeRO)"),G8=a(` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),Jy=u(),Ue=o("p"),L8=a("The "),bd=o("code"),M8=a("zero_optimization"),Z8=a(" section of the configuration file is the most important part ("),Qo=o("a"),N8=a("docs"),H8=a(`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),Xy=u(),aa=o("p"),B8=a("This section has to be configured exclusively via DeepSpeed configuration - the "),Li=o("a"),W8=a("Trainer"),F8=a(` provides
no equivalent command line arguments.`),Qy=u(),Mi=o("p"),V8=a(`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),ew=u(),Zi=o("a"),sw=u(),As=o("h4"),na=o("a"),qd=o("span"),f(el.$$.fragment),Y8=u(),Ed=o("span"),K8=a("ZeRO-2 Config"),tw=u(),Ni=o("p"),J8=a("The following is an example of configuration for ZeRO stage 2:"),aw=u(),f(sl.$$.fragment),nw=u(),Hi=o("p"),$d=o("strong"),X8=a("Performance tuning:"),ow=u(),Ge=o("ul"),Ss=o("li"),Q8=a("enabling "),kd=o("code"),ek=a("offload_optimizer"),sk=a(" should reduce GPU RAM usage (it requires "),Pd=o("code"),tk=a('"stage": 2'),ak=a(")"),nk=u(),S=o("li"),zd=o("code"),ok=a('"overlap_comm": true'),lk=a(" trades off increased GPU RAM usage to lower all-reduce latency. "),Dd=o("code"),rk=a("overlap_comm"),pk=a(` uses 4.5x
the `),Od=o("code"),ik=a("allgather_bucket_size"),uk=a(" and "),Td=o("code"),ck=a("reduce_bucket_size"),hk=a(` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Ad=o("code"),fk=a("5e8 x 2Bytes x 2 x 4.5"),dk=a(`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Sd=o("code"),mk=a("2e8"),_k=a(`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),vk=u(),Cd=o("li"),jk=a(`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),lw=u(),Le=o("p"),gk=a("Additionally, "),xd=o("code"),yk=a("deepspeed==0.4.4"),wk=a(" added a new option "),Rd=o("code"),bk=a("round_robin_gradients"),qk=a(" which you can enable with:"),rw=u(),f(tl.$$.fragment),pw=u(),Bi=o("p"),Ek=a("This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),iw=u(),Wi=o("a"),uw=u(),Cs=o("h4"),oa=o("a"),Id=o("span"),f(al.$$.fragment),$k=u(),Ud=o("span"),kk=a("ZeRO-3 Config"),cw=u(),Fi=o("p"),Pk=a("The following is an example of configuration for ZeRO stage 3:"),hw=u(),f(nl.$$.fragment),fw=u(),H=o("p"),zk=a(`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Gd=o("code"),Dk=a('"device": "cpu"'),Ok=a(` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ld=o("code"),Tk=a("none"),Ak=a(" instead of "),Md=o("code"),Sk=a("cpu"),Ck=a(" for the "),Zd=o("code"),xk=a("device"),Rk=a(` entry. Offloading to
NVMe is discussed further down.`),dw=u(),Me=o("p"),Ik=a("Pinned memory is enabled with "),Nd=o("code"),Uk=a("pin_memory"),Gk=a(" set to "),Hd=o("code"),Lk=a("true"),Mk=a(`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),mw=u(),Vi=o("p"),Bd=o("strong"),Zk=a("Performance tuning:"),_w=u(),la=o("ul"),ol=o("li"),Wd=o("code"),Nk=a("stage3_max_live_parameters"),Hk=a(": "),Fd=o("code"),Bk=a("1e9"),Wk=u(),ll=o("li"),Vd=o("code"),Fk=a("stage3_max_reuse_distance"),Vk=a(": "),Yd=o("code"),Yk=a("1e9"),vw=u(),C=o("p"),Kk=a("If hitting OOM reduce "),Kd=o("code"),Jk=a("stage3_max_live_parameters"),Xk=a(" and "),Jd=o("code"),Qk=a("stage3_max_reuse_distance"),e7=a(`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Xd=o("code"),s7=a("1e9"),t7=a(` would consume ~2GB. The memory is shared by
`),Qd=o("code"),a7=a("stage3_max_live_parameters"),n7=a(" and "),em=o("code"),o7=a("stage3_max_reuse_distance"),l7=a(", so it\u2019s not additive, it\u2019s just 2GB total."),jw=u(),qe=o("p"),sm=o("code"),r7=a("stage3_max_live_parameters"),p7=a(` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),tm=o("code"),i7=a("stage3_max_reuse_distance"),u7=a(` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),am=o("code"),c7=a("stage3_max_reuse_distance"),h7=a(`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),gw=u(),Yi=o("p"),f7=a("The following configuration values depend on the model\u2019s hidden size:"),yw=u(),Ze=o("ul"),rl=o("li"),nm=o("code"),d7=a("reduce_bucket_size"),m7=a(": "),om=o("code"),_7=a("hidden_size*hidden_size"),v7=u(),pl=o("li"),lm=o("code"),j7=a("stage3_prefetch_bucket_size"),g7=a(": "),rm=o("code"),y7=a("0.9 * hidden_size * hidden_size"),w7=u(),il=o("li"),pm=o("code"),b7=a("stage3_param_persistence_threshold"),q7=a(": "),im=o("code"),E7=a("10 * hidden_size"),ww=u(),Ne=o("p"),$7=a("therefore set these values to "),um=o("code"),k7=a("auto"),P7=a(" and the "),Ki=o("a"),z7=a("Trainer"),D7=a(` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),bw=u(),ul=o("p"),cm=o("code"),O7=a("stage3_gather_16bit_weights_on_model_save"),T7=a(` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),qw=u(),se=o("p"),A7=a("If you\u2019re migrating from ZeRO-2 configuration note that "),hm=o("code"),S7=a("allgather_partitions"),C7=a(", "),fm=o("code"),x7=a("allgather_bucket_size"),R7=a(` and
`),dm=o("code"),I7=a("reduce_scatter"),U7=a(` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Ew=u(),Ji=o("ul"),cl=o("li"),mm=o("code"),G7=a("sub_group_size"),L7=a(": "),_m=o("code"),M7=a("1e9"),$w=u(),Ee=o("p"),vm=o("code"),Z7=a("sub_group_size"),N7=a(` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),jm=o("code"),H7=a("sub_group_size"),B7=a(` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),gm=o("code"),W7=a("sub_group_size"),F7=a(` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),kw=u(),He=o("p"),V7=a("You can leave "),ym=o("code"),Y7=a("sub_group_size"),K7=a(" to its default value of "),wm=o("em"),J7=a("1e9"),X7=a(` when not using NVMe offload. You may want to change its
default value in the following cases:`),Pw=u(),ra=o("ol"),hl=o("li"),Q7=a("Running into OOM during optimizer step: Reduce "),bm=o("code"),eP=a("sub_group_size"),sP=a(" to reduce memory utilization of temporary buffers"),tP=u(),fl=o("li"),aP=a("Optimizer Step is taking a long time: Increase "),qm=o("code"),nP=a("sub_group_size"),oP=a(` to improve bandwidth utilization as a result of
the increased data buffers.`),zw=u(),Xi=o("a"),Dw=u(),xs=o("h3"),pa=o("a"),Em=o("span"),f(dl.$$.fragment),lP=u(),$m=o("span"),rP=a("NVMe Support"),Ow=u(),Qi=o("p"),pP=a(`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),Tw=u(),eu=o("p"),iP=a("The following configuration example enables NVMe to offload both optimizer states and the params:"),Aw=u(),f(ml.$$.fragment),Sw=u(),ia=o("p"),uP=a(`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),km=o("em"),cP=a("\u201Cdevice\u201D: \u201Ccpu\u201D"),hP=a(")."),Cw=u(),Be=o("p"),fP=a("Here is the full documentation for offloading "),_l=o("a"),dP=a("optimizer states"),mP=a(" and "),vl=o("a"),_P=a("parameters"),vP=a("."),xw=u(),ua=o("p"),jP=a("Make sure that your "),Pm=o("code"),gP=a("nvme_path"),yP=a(` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),Rw=u(),We=o("p"),wP=a("In order to figure out the optimal "),zm=o("code"),bP=a("aio"),qP=a(` configuration block you must run a benchmark on your target setup, as
`),jl=o("a"),EP=a("explained here"),$P=a("."),Iw=u(),su=o("a"),Uw=u(),Rs=o("h4"),ca=o("a"),Dm=o("span"),f(gl.$$.fragment),kP=u(),Om=o("span"),PP=a("ZeRO-2 vs ZeRO-3 Performance"),Gw=u(),tu=o("p"),zP=a(`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),Lw=u(),au=o("p"),DP=a("It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),Mw=u(),ha=o("ul"),Is=o("li"),OP=a("set "),Tm=o("code"),TP=a("stage3_param_persistence_threshold"),AP=a(" to a very large number - larger than the largest parameter, e.g., "),Am=o("code"),SP=a("6 * hidden_size * hidden_size"),CP=a(". This will keep the parameters on the GPUs."),xP=u(),yl=o("li"),RP=a("turn off "),Sm=o("code"),IP=a("offload_params"),UP=a(" since ZeRO-2 doesn\u2019t have that option."),Zw=u(),Fe=o("p"),GP=a("The performance will likely improve significantly with just "),Cm=o("code"),LP=a("offload_params"),MP=a(` turned off, even if you don\u2019t change
`),xm=o("code"),ZP=a("stage3_param_persistence_threshold"),NP=a(`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),Nw=u(),nu=o("a"),Hw=u(),Us=o("h4"),fa=o("a"),Rm=o("span"),f(wl.$$.fragment),HP=u(),Im=o("span"),BP=a("ZeRO-2 Example"),Bw=u(),da=o("p"),WP=a("Here is a full ZeRO-2 auto-configuration file "),Um=o("code"),FP=a("ds_config_zero2.json"),VP=a(":"),Ww=u(),f(bl.$$.fragment),Fw=u(),ma=o("p"),YP=a(`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Gm=o("code"),KP=a("auto"),JP=a(" settings in it."),Vw=u(),f(ql.$$.fragment),Yw=u(),ou=o("a"),Kw=u(),Gs=o("h4"),_a=o("a"),Lm=o("span"),f(El.$$.fragment),XP=u(),Mm=o("span"),QP=a("ZeRO-3 Example"),Jw=u(),va=o("p"),ez=a("Here is a full ZeRO-3 auto-configuration file "),Zm=o("code"),sz=a("ds_config_zero3.json"),tz=a(":"),Xw=u(),f($l.$$.fragment),Qw=u(),ja=o("p"),az=a(`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Nm=o("code"),nz=a("auto"),oz=a(" settings in it."),e2=u(),f(kl.$$.fragment),s2=u(),Ls=o("h3"),ga=o("a"),Hm=o("span"),f(Pl.$$.fragment),lz=u(),Bm=o("span"),rz=a("Optimizer and Scheduler"),t2=u(),ya=o("p"),pz=a("As long as you don\u2019t enable "),Wm=o("code"),iz=a("offload_optimizer"),uz=a(` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),a2=u(),lu=o("p"),cz=a(`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),n2=u(),wa=o("p"),hz=a("It is possible to use a non-DeepSpeed optimizer when "),Fm=o("code"),fz=a("offload_optimizer"),dz=a(` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),o2=u(),ru=o("a"),l2=u(),Ms=o("h4"),ba=o("a"),Vm=o("span"),f(zl.$$.fragment),mz=u(),Ym=o("span"),_z=a("Optimizer"),r2=u(),Ve=o("p"),vz=a(`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Km=o("code"),jz=a("torch"),gz=a(". The full documentation is "),Dl=o("a"),yz=a("here"),wz=a("."),p2=u(),q=o("p"),bz=a("If you don\u2019t configure the "),Jm=o("code"),qz=a("optimizer"),Ez=a(" entry in the configuration file, the "),pu=o("a"),$z=a("Trainer"),kz=a(` will
automatically set it to `),Xm=o("code"),Pz=a("AdamW"),zz=a(` and will use the supplied values or the defaults for the following command line
arguments: `),Qm=o("code"),Dz=a("--learning_rate"),Oz=a(", "),e_=o("code"),Tz=a("--adam_beta1"),Az=a(", "),s_=o("code"),Sz=a("--adam_beta2"),Cz=a(", "),t_=o("code"),xz=a("--adam_epsilon"),Rz=a(" and "),a_=o("code"),Iz=a("--weight_decay"),Uz=a("."),i2=u(),Ye=o("p"),Gz=a("Here is an example of the auto-configured "),n_=o("code"),Lz=a("optimizer"),Mz=a(" entry for "),o_=o("code"),Zz=a("AdamW"),Nz=a(":"),u2=u(),f(Ol.$$.fragment),c2=u(),iu=o("p"),Hz=a(`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),h2=u(),te=o("ul"),Tl=o("li"),l_=o("code"),Bz=a("lr"),Wz=a(" with the value of "),r_=o("code"),Fz=a("--learning_rate"),Vz=u(),Al=o("li"),p_=o("code"),Yz=a("betas"),Kz=a(" with the value of "),i_=o("code"),Jz=a("--adam_beta1 --adam_beta2"),Xz=u(),Sl=o("li"),u_=o("code"),Qz=a("eps"),eD=a(" with the value of "),c_=o("code"),sD=a("--adam_epsilon"),tD=u(),Cl=o("li"),h_=o("code"),aD=a("weight_decay"),nD=a(" with the value of "),f_=o("code"),oD=a("--weight_decay"),f2=u(),uu=o("p"),lD=a("Therefore please remember to tune the shared hyperparameters on the command line."),d2=u(),cu=o("p"),rD=a("You can also set the values explicitly:"),m2=u(),f(xl.$$.fragment),_2=u(),qa=o("p"),pD=a("But then you\u2019re on your own synchronizing the "),hu=o("a"),iD=a("Trainer"),uD=a(` command line arguments and the DeepSpeed
configuration.`),v2=u(),fu=o("p"),cD=a("If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),j2=u(),f(Rl.$$.fragment),g2=u(),ae=o("p"),hD=a("Similarly to "),d_=o("code"),fD=a("AdamW"),dD=a(`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),m_=o("code"),mD=a("weight_decay"),_D=a(" around "),__=o("code"),vD=a("0.01"),jD=a("."),y2=u(),du=o("a"),w2=u(),Zs=o("h4"),Ea=o("a"),v_=o("span"),f(Il.$$.fragment),gD=u(),j_=o("span"),yD=a("Scheduler"),b2=u(),x=o("p"),wD=a("DeepSpeed supports "),g_=o("code"),bD=a("LRRangeTest"),qD=a(", "),y_=o("code"),ED=a("OneCycle"),$D=a(", "),w_=o("code"),kD=a("WarmupLR"),PD=a(" and "),b_=o("code"),zD=a("WarmupDecayLR"),DD=a(` learning rate schedulers. The full
documentation is `),Ul=o("a"),OD=a("here"),TD=a("."),q2=u(),mu=o("p"),AD=a("Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),E2=u(),$a=o("ul"),Gl=o("li"),q_=o("code"),SD=a("WarmupLR"),CD=a(" via "),E_=o("code"),xD=a("--lr_scheduler_type constant_with_warmup"),RD=u(),Ke=o("li"),$_=o("code"),ID=a("WarmupDecayLR"),UD=a(" via "),k_=o("code"),GD=a("--lr_scheduler_type linear"),LD=a(". This is also the default value for "),P_=o("code"),MD=a("--lr_scheduler_type"),ZD=a(`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),$2=u(),P=o("p"),ND=a("If you don\u2019t configure the "),z_=o("code"),HD=a("scheduler"),BD=a(" entry in the configuration file, the "),_u=o("a"),WD=a("Trainer"),FD=a(` will use
the values of `),D_=o("code"),VD=a("--lr_scheduler_type"),YD=a(", "),O_=o("code"),KD=a("--learning_rate"),JD=a(" and "),T_=o("code"),XD=a("--warmup_steps"),QD=a(" or "),A_=o("code"),eO=a("--warmup_ratio"),sO=a(` to configure a
\u{1F917} Transformers version of it.`),k2=u(),Je=o("p"),tO=a("Here is an example of the auto-configured "),S_=o("code"),aO=a("scheduler"),nO=a(" entry for "),C_=o("code"),oO=a("WarmupLR"),lO=a(":"),P2=u(),f(Ll.$$.fragment),z2=u(),Xe=o("p"),rO=a("Since "),x_=o("em"),pO=a("\u201Cauto\u201D"),iO=a(" is used the "),vu=o("a"),uO=a("Trainer"),cO=a(` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),D2=u(),ne=o("ul"),ka=o("li"),R_=o("code"),hO=a("warmup_min_lr"),fO=a(" with the value of "),I_=o("code"),dO=a("0"),mO=a("."),_O=u(),Pa=o("li"),U_=o("code"),vO=a("warmup_max_lr"),jO=a(" with the value of "),G_=o("code"),gO=a("--learning_rate"),yO=a("."),wO=u(),Qe=o("li"),L_=o("code"),bO=a("warmup_num_steps"),qO=a(" with the value of "),M_=o("code"),EO=a("--warmup_steps"),$O=a(" if provided. Otherwise will use "),Z_=o("code"),kO=a("--warmup_ratio"),PO=a(`
multiplied by the number of training steps and rounded up.`),zO=u(),es=o("li"),N_=o("code"),DO=a("total_num_steps"),OO=a(" with either the value of "),H_=o("code"),TO=a("--max_steps"),AO=a(` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),B_=o("code"),SO=a("WarmupDecayLR"),CO=a(")."),O2=u(),ju=o("p"),xO=a("You can, of course, take over any or all of the configuration values and set those yourself:"),T2=u(),f(Ml.$$.fragment),A2=u(),za=o("p"),RO=a("But then you\u2019re on your own synchronizing the "),gu=o("a"),IO=a("Trainer"),UO=a(` command line arguments and the DeepSpeed
configuration.`),S2=u(),Da=o("p"),GO=a("For example, for "),W_=o("code"),LO=a("WarmupDecayLR"),MO=a(", you can use the following entry:"),C2=u(),f(Zl.$$.fragment),x2=u(),B=o("p"),ZO=a("and "),F_=o("code"),NO=a("total_num_steps"),HO=a(", "),V_=o("code"),BO=a("warmup_max_lr"),WO=a(", "),Y_=o("code"),FO=a("warmup_num_steps"),VO=a(" and "),K_=o("code"),YO=a("total_num_steps"),KO=a(" will be set at loading time."),R2=u(),yu=o("a"),I2=u(),Ns=o("h3"),Oa=o("a"),J_=o("span"),f(Nl.$$.fragment),JO=u(),X_=o("span"),XO=a("fp32 Precision"),U2=u(),wu=o("p"),QO=a("Deepspeed supports the full fp32 and the fp16 mixed precision."),G2=u(),Ta=o("p"),eT=a(`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Q_=o("code"),sT=a("NaN"),tT=a(` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),L2=u(),f(Hl.$$.fragment),M2=u(),Aa=o("p"),aT=a(`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Bl=o("a"),nT=a("TensorFloat-32(TF32) on Ampere devices"),oT=a(`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),Z2=u(),oe=o("p"),lT=a("With the \u{1F917} Trainer you can use "),e1=o("code"),rT=a("--tf32"),pT=a(" to enable it, or disable it with "),s1=o("code"),iT=a("--tf32 0"),uT=a(" or "),t1=o("code"),cT=a("--no_tf32"),hT=a(". By default the PyTorch default is used."),N2=u(),bu=o("a"),H2=u(),Hs=o("h3"),Sa=o("a"),a1=o("span"),f(Wl.$$.fragment),fT=u(),n1=o("span"),dT=a("Automatic Mixed Precision"),B2=u(),qu=o("p"),mT=a("You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),W2=u(),Bs=o("h3"),Ca=o("a"),o1=o("span"),f(Fl.$$.fragment),_T=u(),l1=o("span"),vT=a("fp16"),F2=u(),Eu=o("p"),jT=a("To configure pytorch AMP-like mode with fp16 (float16) set:"),V2=u(),f(Vl.$$.fragment),Y2=u(),ss=o("p"),gT=a("and the "),$u=o("a"),yT=a("Trainer"),wT=a(` will automatically enable or disable it based on the value of
`),r1=o("code"),bT=a("args.fp16_backend"),qT=a(". The rest of config values are up to you."),K2=u(),ts=o("p"),ET=a("This mode gets enabled when "),p1=o("code"),$T=a("--fp16 --fp16_backend amp"),kT=a(" or "),i1=o("code"),PT=a("--fp16_full_eval"),zT=a(" command line args are passed."),J2=u(),ku=o("p"),DT=a("You can also enable/disable this mode explicitly:"),X2=u(),f(Yl.$$.fragment),Q2=u(),xa=o("p"),OT=a("But then you\u2019re on your own synchronizing the "),Pu=o("a"),TT=a("Trainer"),AT=a(` command line arguments and the DeepSpeed
configuration.`),eb=u(),Ra=o("p"),ST=a("Here is the "),Kl=o("a"),CT=a("documentation"),xT=a("."),sb=u(),Ws=o("h3"),Ia=o("a"),u1=o("span"),f(Jl.$$.fragment),RT=u(),c1=o("span"),IT=a("bf16"),tb=u(),zu=o("p"),UT=a("If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),ab=u(),f(Xl.$$.fragment),nb=u(),Du=o("p"),GT=a("bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),ob=u(),as=o("p"),LT=a("This mode gets enabled when "),h1=o("code"),MT=a("--bf16"),ZT=a(" or "),f1=o("code"),NT=a("--bf16_full_eval"),HT=a(" command line args are passed."),lb=u(),Ou=o("p"),BT=a("You can also enable/disable this mode explicitly:"),rb=u(),f(Ql.$$.fragment),pb=u(),Fs=o("h3"),Ua=o("a"),d1=o("span"),f(er.$$.fragment),WT=u(),m1=o("span"),FT=a("apex"),ib=u(),Tu=o("p"),VT=a("To configure apex AMP-like mode set:"),ub=u(),f(sr.$$.fragment),cb=u(),le=o("p"),YT=a("and the "),Au=o("a"),KT=a("Trainer"),JT=a(" will automatically configure it based on the values of "),_1=o("code"),XT=a("args.fp16_backend"),QT=a(` and
`),v1=o("code"),eA=a("args.fp16_opt_level"),sA=a("."),hb=u(),Ga=o("p"),tA=a("This mode gets enabled when "),j1=o("code"),aA=a("--fp16 --fp16_backend apex --fp16_opt_level 01"),nA=a(" command line args are passed."),fb=u(),Su=o("p"),oA=a("You can also configure this mode explicitly:"),db=u(),f(tr.$$.fragment),mb=u(),La=o("p"),lA=a("But then you\u2019re on your own synchronizing the "),Cu=o("a"),rA=a("Trainer"),pA=a(` command line arguments and the DeepSpeed
configuration.`),_b=u(),Ma=o("p"),iA=a("Here is the "),ar=o("a"),uA=a("documentation"),cA=a("."),vb=u(),xu=o("a"),jb=u(),Vs=o("h3"),Za=o("a"),g1=o("span"),f(nr.$$.fragment),hA=u(),y1=o("span"),fA=a("Batch Size"),gb=u(),Ru=o("p"),dA=a("To configure batch size, use:"),yb=u(),f(or.$$.fragment),wb=u(),R=o("p"),mA=a("and the "),Iu=o("a"),_A=a("Trainer"),vA=a(" will automatically set "),w1=o("code"),jA=a("train_micro_batch_size_per_gpu"),gA=a(` to the value of
`),b1=o("code"),yA=a("args.per_device_train_batch_size"),wA=a(" and "),q1=o("code"),bA=a("train_batch_size"),qA=a(" to "),E1=o("code"),EA=a("args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),$A=a("."),bb=u(),Uu=o("p"),kA=a("You can also set the values explicitly:"),qb=u(),f(lr.$$.fragment),Eb=u(),Na=o("p"),PA=a("But then you\u2019re on your own synchronizing the "),Gu=o("a"),zA=a("Trainer"),DA=a(` command line arguments and the DeepSpeed
configuration.`),$b=u(),Lu=o("a"),kb=u(),Ys=o("h3"),Ha=o("a"),$1=o("span"),f(rr.$$.fragment),OA=u(),k1=o("span"),TA=a("Gradient Accumulation"),Pb=u(),Mu=o("p"),AA=a("To configure gradient accumulation set:"),zb=u(),f(pr.$$.fragment),Db=u(),ns=o("p"),SA=a("and the "),Zu=o("a"),CA=a("Trainer"),xA=a(" will automatically set it to the value of "),P1=o("code"),RA=a("args.gradient_accumulation_steps"),IA=a("."),Ob=u(),Nu=o("p"),UA=a("You can also set the value explicitly:"),Tb=u(),f(ir.$$.fragment),Ab=u(),Ba=o("p"),GA=a("But then you\u2019re on your own synchronizing the "),Hu=o("a"),LA=a("Trainer"),MA=a(` command line arguments and the DeepSpeed
configuration.`),Sb=u(),Bu=o("a"),Cb=u(),Ks=o("h3"),Wa=o("a"),z1=o("span"),f(ur.$$.fragment),ZA=u(),D1=o("span"),NA=a("Gradient Clipping"),xb=u(),Wu=o("p"),HA=a("To configure gradient gradient clipping set:"),Rb=u(),f(cr.$$.fragment),Ib=u(),os=o("p"),BA=a("and the "),Fu=o("a"),WA=a("Trainer"),FA=a(" will automatically set it to the value of "),O1=o("code"),VA=a("args.max_grad_norm"),YA=a("."),Ub=u(),Vu=o("p"),KA=a("You can also set the value explicitly:"),Gb=u(),f(hr.$$.fragment),Lb=u(),Fa=o("p"),JA=a("But then you\u2019re on your own synchronizing the "),Yu=o("a"),XA=a("Trainer"),QA=a(` command line arguments and the DeepSpeed
configuration.`),Mb=u(),Ku=o("a"),Zb=u(),Js=o("h3"),Va=o("a"),T1=o("span"),f(fr.$$.fragment),eS=u(),A1=o("span"),sS=a("Getting The Model Weights Out"),Nb=u(),Ya=o("p"),tS=a(`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),S1=o("code"),aS=a("global_step*/*optim_states.pt"),nS=a(` (this is glob
pattern), and are saved under the normal checkpoint.`),Hb=u(),Ju=o("p"),C1=o("strong"),oS=a("FP16 Weights:"),Bb=u(),Ka=o("p"),lS=a("When a model is saved under ZeRO-2, you end up having the normal "),x1=o("code"),rS=a("pytorch_model.bin"),pS=a(` file with the model weights, but
they are only the fp16 version of the weights.`),Wb=u(),z=o("p"),iS=a(`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),R1=o("code"),uS=a('"stage3_gather_16bit_weights_on_model_save": true'),cS=a(" is required to get the "),I1=o("code"),hS=a("Trainer"),fS=a(` to save the fp16
version of the weights. If this setting is `),U1=o("code"),dS=a("False"),mS=u(),G1=o("code"),_S=a("pytorch_model.bin"),vS=a(" won\u2019t be created. This is because by default DeepSpeed\u2019s "),L1=o("code"),jS=a("state_dict"),gS=a(" contains a placeholder and not the real weights. If we were to save this "),M1=o("code"),yS=a("state_dict"),wS=a(" it won\u2019t be possible to load it back."),Fb=u(),f(dr.$$.fragment),Vb=u(),Xu=o("p"),Z1=o("strong"),bS=a("FP32 Weights:"),Yb=u(),Ja=o("p"),qS=a(`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),mr=o("a"),ES=a("models hub"),$S=a(` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),Kb=u(),Qu=o("p"),N1=o("strong"),kS=a("Live FP32 Weights Recovery:"),Jb=u(),ec=o("p"),PS=a("This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),Xb=u(),sc=o("p"),zS=a("If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),Qb=u(),f(_r.$$.fragment),e3=u(),ls=o("p"),DS=a("If you\u2019re using the "),H1=o("code"),OS=a("--load_best_model_at_end"),TS=a(" class:"),B1=o("em"),AS=a("~transformers.TrainingArguments"),SS=a(` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),s3=u(),f(vr.$$.fragment),t3=u(),f(Xa.$$.fragment),a3=u(),Qa=o("p"),CS=a("Of course, you don\u2019t have to use class:"),W1=o("em"),xS=a("~transformers.Trainer"),RS=a(` and you can adjust the examples above to your own
trainer.`),n3=u(),en=o("p"),IS=a("If for some reason you want more refinement, you can also extract the fp32 "),F1=o("code"),US=a("state_dict"),GS=a(` of the weights and apply
these yourself as is shown in the following example:`),o3=u(),f(jr.$$.fragment),l3=u(),tc=o("p"),V1=o("strong"),LS=a("Offline FP32 Weights Recovery:"),r3=u(),rs=o("p"),MS=a("DeepSpeed creates a special conversion script "),Y1=o("code"),ZS=a("zero_to_fp32.py"),NS=a(` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),K1=o("code"),HS=a("Trainer"),BS=a(" to do the extraction."),p3=u(),ac=o("p"),WS=a("Let\u2019s say your checkpoint folder looks like this:"),i3=u(),f(gr.$$.fragment),u3=u(),sn=o("p"),FS=a("In this example there is just one DeepSpeed checkpoint sub-folder "),J1=o("em"),VS=a("global_step1"),YS=a(`. Therefore to reconstruct the fp32
weights just run:`),c3=u(),f(yr.$$.fragment),h3=u(),tn=o("p"),KS=a("This is it. "),X1=o("code"),JS=a("pytorch_model.bin"),XS=a(" will now contain the full fp32 model weights consolidated from multiple GPUs."),f3=u(),nc=o("p"),QS=a("The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),d3=u(),wr=o("p"),Q1=o("code"),eC=a("python zero_to_fp32.py -h"),sC=a(" will give you usage details."),m3=u(),ps=o("p"),tC=a("The script will auto-discover the deepspeed sub-folder using the contents of the file "),ev=o("code"),aC=a("latest"),nC=a(`, which in the current
example will contain `),sv=o("code"),oC=a("global_step1"),lC=a("."),_3=u(),oc=o("p"),rC=a("Note: currently the script requires 2x general RAM of the final fp32 model weights."),v3=u(),Xs=o("h3"),an=o("a"),tv=o("span"),f(br.$$.fragment),pC=u(),av=o("span"),iC=a("ZeRO-3 and Infinity Nuances"),j3=u(),lc=o("p"),uC=a("ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),g3=u(),rc=o("p"),cC=a("ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),y3=u(),pc=o("p"),hC=a(`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),w3=u(),Qs=o("h4"),nn=o("a"),nv=o("span"),f(qr.$$.fragment),fC=u(),ov=o("span"),dC=a("Constructing Massive Models"),b3=u(),on=o("p"),mC=a(`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),lv=o("em"),_C=a("deepspeed.zero.Init()"),vC=a(`
context manager (which is also a function decorator), like so:`),q3=u(),f(Er.$$.fragment),E3=u(),ic=o("p"),jC=a("As you can see this gives you a randomly initialized model."),$3=u(),k=o("p"),gC=a("If you want to use a pretrained model, "),rv=o("code"),yC=a("model_class.from_pretrained"),wC=a(` will activate this feature as long as
`),pv=o("code"),bC=a("is_deepspeed_zero3_enabled()"),qC=a(" returns "),iv=o("code"),EC=a("True"),$C=a(`, which currently is setup by the
`),uc=o("a"),kC=a("TrainingArguments"),PC=a(` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),cc=o("a"),zC=a("TrainingArguments"),DC=a(" object "),uv=o("strong"),OC=a("before"),TC=a(` calling
`),cv=o("code"),AC=a("from_pretrained"),SC=a(". Here is an example of a possible sequence:"),k3=u(),f($r.$$.fragment),P3=u(),ln=o("p"),CC=a("If you\u2019re using the official example scripts and your command line arguments include "),hv=o("code"),xC=a("--deepspeed ds_config.json"),RC=a(`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),z3=u(),hc=o("p"),IC=a("Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),D3=u(),rn=o("p"),UC=a("For full details on this method and other related features please refer to "),kr=o("a"),GC=a("Constructing Massive Models"),LC=a("."),O3=u(),re=o("p"),MC=a("Also when loading fp16-pretrained models, you will want to tell "),fv=o("code"),ZC=a("from_pretrained"),NC=a(` to use
`),dv=o("code"),HC=a("torch_dtype=torch.float16"),BC=a(". For details, please, see "),fc=o("a"),WC=a("from_pretrained-torch-dtype"),FC=a("."),T3=u(),et=o("h4"),pn=o("a"),mv=o("span"),f(Pr.$$.fragment),VC=u(),_v=o("span"),YC=a("Gathering Parameters"),A3=u(),zr=o("p"),KC=a(`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Dr=o("a"),JC=a("Gathering Parameters"),S3=u(),un=o("p"),XC=a(`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),vv=o("code"),QC=a("from_pretrained"),ex=a(`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),C3=u(),dc=o("p"),sx=a("Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),x3=u(),f(Or.$$.fragment),R3=u(),is=o("p"),tx=a("stress on "),jv=o("code"),ax=a("tensor([1.])"),nx=a(", or if you get an error where it says the parameter is of size "),gv=o("code"),ox=a("1"),lx=a(`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),I3=u(),mc=o("a"),U3=u(),st=o("h3"),cn=o("a"),yv=o("span"),f(Tr.$$.fragment),rx=u(),wv=o("span"),px=a("ZeRO Inference"),G3=u(),_c=o("p"),ix=a(`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),L3=u(),hn=o("p"),ux=a("Otherwise you just need to pass the usual "),vc=o("a"),cx=a("TrainingArguments"),hx=a(" arguments. For example:"),M3=u(),f(Ar.$$.fragment),Z3=u(),jc=o("p"),fx=a(`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),N3=u(),fn=o("p"),dx=a("Here is an example of running "),bv=o("code"),mx=a("run_translation.py"),_x=a(" under DeepSpeed deploying all available GPUs:"),H3=u(),f(Sr.$$.fragment),B3=u(),gc=o("p"),vx=a(`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),W3=u(),yc=o("p"),jx=a(`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),F3=u(),tt=o("h3"),dn=o("a"),qv=o("span"),f(Cr.$$.fragment),gx=u(),Ev=o("span"),yx=a("Memory Requirements"),V3=u(),wc=o("p"),wx=a("Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),Y3=u(),bc=o("p"),bx=a("Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),K3=u(),f(xr.$$.fragment),J3=u(),qc=o("p"),qx=a("So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),X3=u(),Ec=o("p"),Ex=a("Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),Q3=u(),$c=o("p"),$x=a("If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),e0=u(),kc=o("p"),kx=a("For example, let\u2019s repeat the same for 2 GPUs:"),s0=u(),f(Rr.$$.fragment),t0=u(),Pc=o("p"),Px=a("So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),a0=u(),mn=o("p"),zx=a("For full information please see "),Ir=o("a"),Dx=a("memory estimators"),Ox=a("."),n0=u(),at=o("h3"),_n=o("a"),$v=o("span"),f(Ur.$$.fragment),Tx=u(),kv=o("span"),Ax=a("Filing Issues"),o0=u(),zc=o("p"),Sx=a("Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),l0=u(),Dc=o("p"),Cx=a("In your report please always include:"),r0=u(),I=o("ol"),Pv=o("li"),zv=o("p"),xx=a("the full Deepspeed config file in the report"),Rx=u(),Dv=o("li"),$e=o("p"),Ix=a("either the command line arguments if you were using the "),Oc=o("a"),Ux=a("Trainer"),Gx=a(` or
`),Tc=o("a"),Lx=a("TrainingArguments"),Mx=a(` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Ac=o("a"),Zx=a("TrainingArguments"),Nx=a(" as it has dozens of entries that are irrelevant."),Hx=u(),Gr=o("li"),Ov=o("p"),Bx=a("Output of:"),Wx=u(),f(Lr.$$.fragment),Fx=u(),Tv=o("li"),Mr=o("p"),Vx=a(`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Zr=o("a"),Yx=a("notebook"),Kx=a(` as
a starting point.`),Jx=u(),Av=o("li"),Sv=o("p"),Xx=a("Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),Qx=u(),Cv=o("li"),Nr=o("p"),eR=a("If possible try to use one of the existing "),Hr=o("a"),sR=a("examples"),tR=a(" to reproduce the problem with."),p0=u(),Sc=o("p"),aR=a("Things to consider:"),i0=u(),vn=o("ul"),nt=o("li"),xv=o("p"),nR=a("Deepspeed is often not the cause of the problem."),oR=u(),Rv=o("p"),lR=a(`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),rR=u(),Iv=o("p"),pR=a(`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),iR=u(),Uv=o("li"),Br=o("p"),uR=a(`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Wr=o("a"),cR=a("Deepspeed"),hR=a(`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),u0=u(),ot=o("h3"),jn=o("a"),Gv=o("span"),f(Fr.$$.fragment),fR=u(),Lv=o("span"),dR=a("Troubleshooting"),c0=u(),lt=o("h4"),gn=o("a"),Mv=o("span"),f(Vr.$$.fragment),mR=u(),Yr=o("span"),_R=a("the "),Zv=o("code"),vR=a("deepspeed"),jR=a(" process gets killed at startup without a traceback"),h0=u(),U=o("p"),gR=a("If the "),Nv=o("code"),yR=a("deepspeed"),wR=a(` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Hv=o("code"),bR=a("offload_optimizer"),qR=a(" or "),Bv=o("code"),ER=a("offload_param"),$R=a(` or
both configured to offload to `),Wv=o("code"),kR=a("cpu"),PR=a(`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Kr=o("a"),zR=a("estimate how much memory is needed for a specific model"),DR=a("."),f0=u(),rt=o("h4"),yn=o("a"),Fv=o("span"),f(Jr.$$.fragment),OR=u(),Cc=o("span"),TR=a("training and/or eval/predict loss is "),Vv=o("code"),AR=a("NaN"),d0=u(),xc=o("p"),SR=a("This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),m0=u(),Rc=o("p"),CR=a("The other problem may have to do with using fp16. When you configure this section:"),_0=u(),f(Xr.$$.fragment),v0=u(),wn=o("p"),xR=a("and you see in your log that Deepspeed reports "),Yv=o("code"),RR=a("OVERFLOW!"),IR=a(" as follows:"),j0=u(),f(Qr.$$.fragment),g0=u(),Ic=o("p"),UR=a("that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),y0=u(),Uc=o("p"),GR=a("(the log was massaged to be more readable here.)"),w0=u(),us=o("p"),LR=a("In this case you usually need to raise the value of "),Kv=o("code"),MR=a("initial_scale_power"),ZR=a(". Setting it to "),Jv=o("code"),NR=a('"initial_scale_power": 32'),HR=a(" will typically resolve the problem."),b0=u(),pt=o("h3"),bn=o("a"),Xv=o("span"),f(ep.$$.fragment),BR=u(),Qv=o("span"),WR=a("Notes"),q0=u(),cs=o("ul"),qn=o("li"),FR=a("DeepSpeed works with the PyTorch "),Gc=o("a"),VR=a("Trainer"),YR=a(" but not TF "),ej=o("code"),KR=a("TFTrainer"),JR=u(),sp=o("li"),XR=a("While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),tp=o("a"),QR=a("source"),eI=a(` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),sI=u(),it=o("li"),tI=a("You don\u2019t have to use the "),Lc=o("a"),aI=a("Trainer"),nI=a(` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ap=o("a"),oI=a("the DeepSpeed integration instructions"),lI=a("."),E0=u(),Mc=o("a"),$0=u(),ut=o("h2"),En=o("a"),sj=o("span"),f(np.$$.fragment),rI=u(),tj=o("span"),pI=a("Non-Trainer Deepspeed Integration"),k0=u(),pe=o("p"),iI=a("The "),Zc=o("a"),uI=a("HfDeepSpeedConfig"),cI=a(` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Nc=o("a"),hI=a("Trainer"),fI=a(" is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),aj=o("code"),dI=a("from_pretrained"),mI=a(" call. Everything else you have to do by yourself."),P0=u(),$n=o("p"),_I=a("When using "),Hc=o("a"),vI=a("Trainer"),jI=a(" everything is automatically taken care of."),z0=u(),hs=o("p"),gI=a("When not using "),Bc=o("a"),yI=a("Trainer"),wI=a(`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Wc=o("a"),bI=a("HfDeepSpeedConfig"),qI=a(" object before instantiating the model."),D0=u(),Fc=o("p"),EI=a("For example for a pretrained model:"),O0=u(),f(op.$$.fragment),T0=u(),Vc=o("p"),$I=a("or for non-pretrained model:"),A0=u(),f(lp.$$.fragment),S0=u(),ie=o("p"),kI=a("Please note that if you\u2019re not using the "),Yc=o("a"),PI=a("Trainer"),zI=a(" integration, you\u2019re completely on your own. Basically follow the documentation on the "),rp=o("a"),DI=a("Deepspeed"),OI=a(" website. Also you have to configure explicitly the config file - you can\u2019t use "),nj=o("code"),TI=a('"auto"'),AI=a(" values and you will have to put real values instead."),C0=u(),ct=o("h2"),kn=o("a"),oj=o("span"),f(pp.$$.fragment),SI=u(),lj=o("span"),CI=a("HfDeepSpeedConfig"),x0=u(),E=o("div"),f(ip.$$.fragment),xI=u(),rj=o("p"),RI=a("This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),II=u(),ke=o("p"),UI=a("A "),pj=o("code"),GI=a("weakref"),LI=a(` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),ij=o("code"),MI=a("from_pretrained"),ZI=a(" and "),uj=o("code"),NI=a("_get_resized_embeddings"),HI=a(`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),BI=u(),ue=o("p"),Kc=o("a"),WI=a("Trainer"),FI=a(" uses the "),cj=o("code"),VI=a("HfTrainerDeepSpeedConfig"),YI=a(` subclass instead. That subclass has logic to sync the configuration
with values of `),Jc=o("a"),KI=a("TrainingArguments"),JI=a(" by replacing special placeholder values: "),hj=o("code"),XI=a('"auto"'),QI=a(`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),eU=u(),fs=o("div"),f(up.$$.fragment),sU=u(),fj=o("p"),tU=a("Deletes a sub-section of the config file if it\u2019s found."),aU=u(),ht=o("p"),nU=a("Unless "),dj=o("code"),oU=a("must_exist"),lU=a(" is "),mj=o("code"),rU=a("True"),pU=a(" the section doesn\u2019t have to exist."),iU=u(),Pn=o("div"),f(cp.$$.fragment),uU=u(),hp=o("p"),cU=a("Returns the set value or "),_j=o("code"),hU=a("default"),fU=a(" if no value is set"),dU=u(),zn=o("div"),f(fp.$$.fragment),mU=u(),ft=o("p"),_U=a("Returns "),vj=o("code"),vU=a("True"),jU=a("/"),jj=o("code"),gU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),yU=a(" or isn\u2019t set)."),wU=u(),Dn=o("div"),f(dp.$$.fragment),bU=u(),dt=o("p"),qU=a("Returns "),gj=o("code"),EU=a("True"),$U=a("/"),yj=o("code"),kU=a("False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),PU=a(" or isn\u2019t set)."),R0=u(),mt=o("h3"),On=o("a"),wj=o("span"),f(mp.$$.fragment),zU=u(),bj=o("span"),DU=a("Custom DeepSpeed ZeRO Inference"),I0=u(),Tn=o("p"),OU=a("Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Xc=o("a"),TU=a("Trainer"),AU=a(" when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),U0=u(),Qc=o("p"),SU=a("The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),G0=u(),eh=o("p"),CU=a("The example has copious notes and is self-documenting."),L0=u(),sh=o("p"),xU=a("Make sure to:"),M0=u(),An=o("ol"),qj=o("li"),RU=a("disable CPU offload if you have enough GPU memory (since it slows things down)"),IU=u(),Ej=o("li"),UU=a("enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),Z0=u(),f(_p.$$.fragment),N0=u(),Sn=o("p"),GU=a("Let\u2019s save it as "),$j=o("code"),LU=a("t0.py"),MU=a(" and run it:"),H0=u(),f(vp.$$.fragment),B0=u(),th=o("p"),ZU=a("This was a very basic example and you will want to adapt it to your needs."),W0=u(),_t=o("h2"),Cn=o("a"),kj=o("span"),f(jp.$$.fragment),NU=u(),Pj=o("span"),HU=a("Main DeepSpeed Resources"),F0=u(),ce=o("ul"),zj=o("li"),gp=o("a"),BU=a("Project\u2019s github"),WU=u(),Dj=o("li"),yp=o("a"),FU=a("Usage docs"),VU=u(),Oj=o("li"),wp=o("a"),YU=a("API docs"),KU=u(),Tj=o("li"),bp=o("a"),JU=a("Blog posts"),V0=u(),ah=o("p"),XU=a("Papers:"),Y0=u(),ds=o("ul"),Aj=o("li"),qp=o("a"),QU=a("ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),eG=u(),Sj=o("li"),Ep=o("a"),sG=a("ZeRO-Offload: Democratizing Billion-Scale Model Training"),tG=u(),Cj=o("li"),$p=o("a"),aG=a("ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),K0=u(),ms=o("p"),nG=a("Finally, please, remember that, HuggingFace "),nh=o("a"),oG=a("Trainer"),lG=a(` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),kp=o("a"),rG=a("DeepSpeed GitHub"),pG=a("."),this.h()},l(e){const p=TK('[data-svelte="svelte-1phssyn"]',document.head);w=l(p,"META",{name:!0,content:!0}),p.forEach(t),Z=c(e),b=l(e,"H1",{class:!0});var Pp=r(b);$=l(Pp,"A",{id:!0,class:!0,href:!0});var xj=r($);js=l(xj,"SPAN",{});var dG=r(js);d(V.$$.fragment,dG),dG.forEach(t),xj.forEach(t),Xn=c(Pp),gs=l(Pp,"SPAN",{});var mG=r(gs);ys=n(mG,"DeepSpeed Integration"),mG.forEach(t),Pp.forEach(t),jt=c(e),Y=l(e,"P",{});var Rj=r(Y);K=l(Rj,"A",{href:!0,rel:!0});var _G=r(K);N=n(_G,"DeepSpeed"),_G.forEach(t),Cp=n(Rj," implements everything described in the "),Pe=l(Rj,"A",{href:!0,rel:!0});var vG=r(Pe);xp=n(vG,"ZeRO paper"),vG.forEach(t),S4=n(Rj,". Currently it provides full support for:"),Rj.forEach(t),Mj=c(e),O=l(e,"OL",{});var he=r(O);Qh=l(he,"LI",{});var jG=r(Qh);C4=n(jG,"Optimizer state partitioning (ZeRO stage 1)"),jG.forEach(t),x4=c(he),ef=l(he,"LI",{});var gG=r(ef);R4=n(gG,"Gradient partitioning (ZeRO stage 2)"),gG.forEach(t),I4=c(he),sf=l(he,"LI",{});var yG=r(sf);U4=n(yG,"Parameter partitioning (ZeRO stage 3)"),yG.forEach(t),G4=c(he),tf=l(he,"LI",{});var wG=r(tf);L4=n(wG,"Custom mixed precision training handling"),wG.forEach(t),M4=c(he),af=l(he,"LI",{});var bG=r(af);Z4=n(bG,"A range of fast CUDA-extension-based optimizers"),bG.forEach(t),N4=c(he),nf=l(he,"LI",{});var qG=r(nf);H4=n(qG,"ZeRO-Offload to CPU and NVMe"),qG.forEach(t),he.forEach(t),Zj=c(e),ze=l(e,"P",{});var oh=r(ze);B4=n(oh,"ZeRO-Offload has its own dedicated paper: "),Qn=l(oh,"A",{href:!0,rel:!0});var EG=r(Qn);W4=n(EG,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),EG.forEach(t),F4=n(oh,". And NVMe-support is described in the paper "),eo=l(oh,"A",{href:!0,rel:!0});var $G=r(eo);V4=n($G,`ZeRO-Infinity: Breaking the GPU
Memory Wall for Extreme Scale Deep Learning`),$G.forEach(t),Y4=n(oh,"."),oh.forEach(t),Nj=c(e),Rp=l(e,"P",{});var kG=r(Rp);K4=n(kG,"DeepSpeed ZeRO-2 is primarily used only for training, as its features are of no use to inference."),kG.forEach(t),Hj=c(e),Ip=l(e,"P",{});var PG=r(Ip);J4=n(PG,`DeepSpeed ZeRO-3 can be used for inference as well, since it allows huge models to be loaded on multiple GPUs, which
won\u2019t be possible on a single GPU.`),PG.forEach(t),Bj=c(e),gt=l(e,"P",{});var X0=r(gt);X4=n(X0,"\u{1F917} Transformers integrates "),so=l(X0,"A",{href:!0,rel:!0});var zG=r(so);Q4=n(zG,"DeepSpeed"),zG.forEach(t),e6=n(X0," via 2 options:"),X0.forEach(t),Wj=c(e),yt=l(e,"OL",{});var Q0=r(yt);to=l(Q0,"LI",{});var eq=r(to);s6=n(eq,"Integration of the core DeepSpeed features via "),Up=l(eq,"A",{href:!0});var DG=r(Up);t6=n(DG,"Trainer"),DG.forEach(t),a6=n(eq,`. This is an everything-done-for-you type
of integration - just supply your custom config file or use our template and you have nothing else to do. Most of
this document is focused on this feature.`),eq.forEach(t),n6=c(Q0),M=l(Q0,"LI",{});var fe=r(M);o6=n(fe,"If you don\u2019t use "),Gp=l(fe,"A",{href:!0});var OG=r(Gp);l6=n(OG,"Trainer"),OG.forEach(t),r6=n(fe,` and want to use your own Trainer where you integrated DeepSpeed
yourself, core functionality functions like `),of=l(fe,"CODE",{});var TG=r(of);p6=n(TG,"from_pretrained"),TG.forEach(t),i6=n(fe," and "),lf=l(fe,"CODE",{});var AG=r(lf);u6=n(AG,"from_config"),AG.forEach(t),c6=n(fe,` include integration of essential
parts of DeepSpeed like `),rf=l(fe,"CODE",{});var SG=r(rf);h6=n(SG,"zero.Init"),SG.forEach(t),f6=n(fe,` for ZeRO stage 3 and higher. To tap into this feature read the docs on
`),Lp=l(fe,"A",{href:!0});var CG=r(Lp);d6=n(CG,"deepspeed-non-trainer-integration"),CG.forEach(t),m6=n(fe,"."),fe.forEach(t),Q0.forEach(t),Fj=c(e),Mp=l(e,"P",{});var xG=r(Mp);_6=n(xG,"What is integrated:"),xG.forEach(t),Vj=c(e),Zp=l(e,"P",{});var RG=r(Zp);v6=n(RG,"Training:"),RG.forEach(t),Yj=c(e),Np=l(e,"OL",{});var IG=r(Np);pf=l(IG,"LI",{});var UG=r(pf);j6=n(UG,"DeepSpeed ZeRO training supports the full ZeRO stages 1, 2 and 3 with ZeRO-Infinity (CPU and NVME offload)."),UG.forEach(t),IG.forEach(t),Kj=c(e),Hp=l(e,"P",{});var GG=r(Hp);g6=n(GG,"Inference:"),GG.forEach(t),Jj=c(e),Bp=l(e,"OL",{});var LG=r(Bp);ao=l(LG,"LI",{});var sq=r(ao);y6=n(sq,`DeepSpeed ZeRO Inference supports ZeRO stage 3 with ZeRO-Infinity. It uses the same ZeRO protocol as training, but
it doesn\u2019t use an optimizer and a lr scheduler and only stage 3 is relevant. For more details see:
`),Wp=l(sq,"A",{href:!0});var MG=r(Wp);w6=n(MG,"deepspeed-zero-inference"),MG.forEach(t),b6=n(sq,"."),sq.forEach(t),LG.forEach(t),Xj=c(e),Fp=l(e,"P",{});var ZG=r(Fp);q6=n(ZG,`There is also DeepSpeed Inference - this is a totally different technology which uses Tensor Parallelism instead of
ZeRO (coming soon).`),ZG.forEach(t),Qj=c(e),Vp=l(e,"A",{id:!0}),r(Vp).forEach(t),eg=c(e),ws=l(e,"H2",{class:!0});var tq=r(ws);wt=l(tq,"A",{id:!0,class:!0,href:!0});var NG=r(wt);uf=l(NG,"SPAN",{});var HG=r(uf);d(no.$$.fragment,HG),HG.forEach(t),NG.forEach(t),E6=c(tq),cf=l(tq,"SPAN",{});var BG=r(cf);$6=n(BG,"Trainer Deepspeed Integration"),BG.forEach(t),tq.forEach(t),sg=c(e),Yp=l(e,"A",{id:!0}),r(Yp).forEach(t),tg=c(e),bs=l(e,"H3",{class:!0});var aq=r(bs);bt=l(aq,"A",{id:!0,class:!0,href:!0});var WG=r(bt);hf=l(WG,"SPAN",{});var FG=r(hf);d(oo.$$.fragment,FG),FG.forEach(t),WG.forEach(t),k6=c(aq),ff=l(aq,"SPAN",{});var VG=r(ff);P6=n(VG,"Installation"),VG.forEach(t),aq.forEach(t),ag=c(e),Kp=l(e,"P",{});var YG=r(Kp);z6=n(YG,"Install the library via pypi:"),YG.forEach(t),ng=c(e),d(lo.$$.fragment,e),og=c(e),De=l(e,"P",{});var lh=r(De);D6=n(lh,"or via "),df=l(lh,"CODE",{});var KG=r(df);O6=n(KG,"transformers"),KG.forEach(t),T6=n(lh,"\u2019 "),mf=l(lh,"CODE",{});var JG=r(mf);A6=n(JG,"extras"),JG.forEach(t),S6=n(lh,":"),lh.forEach(t),lg=c(e),d(ro.$$.fragment,e),rg=c(e),Oe=l(e,"P",{});var rh=r(Oe);C6=n(rh,"or find more details on "),po=l(rh,"A",{href:!0,rel:!0});var XG=r(po);x6=n(XG,"the DeepSpeed\u2019s GitHub page"),XG.forEach(t),R6=n(rh,` and
`),io=l(rh,"A",{href:!0,rel:!0});var QG=r(io);I6=n(QG,"advanced install"),QG.forEach(t),U6=n(rh,"."),rh.forEach(t),pg=c(e),qt=l(e,"P",{});var nq=r(qt);G6=n(nq,"If you\u2019re still struggling with the build, first make sure to read "),Jp=l(nq,"A",{href:!0});var eL=r(Jp);L6=n(eL,"zero-install-notes"),eL.forEach(t),M6=n(nq,"."),nq.forEach(t),ig=c(e),Xp=l(e,"P",{});var sL=r(Xp);Z6=n(sL,`If you don\u2019t prebuild the extensions and rely on them to be built at run time and you tried all of the above solutions
to no avail, the next thing to try is to pre-build the modules before installing them.`),sL.forEach(t),ug=c(e),Qp=l(e,"P",{});var tL=r(Qp);N6=n(tL,"To make a local build for DeepSpeed:"),tL.forEach(t),cg=c(e),d(uo.$$.fragment,e),hg=c(e),Te=l(e,"P",{});var ph=r(Te);H6=n(ph,"If you intend to use NVMe offload you will also need to include "),_f=l(ph,"CODE",{});var aL=r(_f);B6=n(aL,"DS_BUILD_AIO=1"),aL.forEach(t),W6=n(ph,` in the instructions above (and also
install `),vf=l(ph,"EM",{});var nL=r(vf);F6=n(nL,"libaio-dev"),nL.forEach(t),V6=n(ph," system-wide)."),ph.forEach(t),fg=c(e),Et=l(e,"P",{});var oq=r(Et);Y6=n(oq,"Edit "),jf=l(oq,"CODE",{});var oL=r(jf);K6=n(oL,"TORCH_CUDA_ARCH_LIST"),oL.forEach(t),J6=n(oq,` to insert the code for the architectures of the GPU cards you intend to use. Assuming all
your cards are the same you can get the arch via:`),oq.forEach(t),dg=c(e),d(co.$$.fragment,e),mg=c(e),we=l(e,"P",{});var zp=r(we);X6=n(zp,"So if you get "),gf=l(zp,"CODE",{});var lL=r(gf);Q6=n(lL,"8, 6"),lL.forEach(t),e5=n(zp,", then use "),yf=l(zp,"CODE",{});var rL=r(yf);s5=n(rL,'TORCH_CUDA_ARCH_LIST="8.6"'),rL.forEach(t),t5=n(zp,`. If you have multiple different cards, you can list all
of them like so `),wf=l(zp,"CODE",{});var pL=r(wf);a5=n(pL,'TORCH_CUDA_ARCH_LIST="6.1;8.6"'),pL.forEach(t),zp.forEach(t),_g=c(e),ei=l(e,"P",{});var iL=r(ei);n5=n(iL,"If you need to use the same setup on multiple machines, make a binary wheel:"),iL.forEach(t),vg=c(e),d(ho.$$.fragment,e),jg=c(e),Ae=l(e,"P",{});var ih=r(Ae);o5=n(ih,"it will generate something like "),bf=l(ih,"CODE",{});var uL=r(bf);l5=n(uL,"dist/deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),uL.forEach(t),r5=n(ih,` which now you can install
as `),qf=l(ih,"CODE",{});var cL=r(qf);p5=n(cL,"pip install deepspeed-0.3.13+8cd046f-cp38-cp38-linux_x86_64.whl"),cL.forEach(t),i5=n(ih," locally or on any other machine."),ih.forEach(t),gg=c(e),$t=l(e,"P",{});var lq=r($t);u5=n(lq,"Again, remember to ensure to adjust "),Ef=l(lq,"CODE",{});var hL=r(Ef);c5=n(hL,"TORCH_CUDA_ARCH_LIST"),hL.forEach(t),h5=n(lq," to the target architectures."),lq.forEach(t),yg=c(e),Se=l(e,"P",{});var uh=r(Se);f5=n(uh,"You can find the complete list of NVIDIA GPUs and their corresponding "),$f=l(uh,"STRONG",{});var fL=r($f);d5=n(fL,"Compute Capabilities"),fL.forEach(t),m5=n(uh,` (same as arch in this
context) `),fo=l(uh,"A",{href:!0,rel:!0});var dL=r(fo);_5=n(dL,"here"),dL.forEach(t),v5=n(uh,"."),uh.forEach(t),wg=c(e),si=l(e,"P",{});var mL=r(si);j5=n(mL,"You can check the archs pytorch was built with using:"),mL.forEach(t),bg=c(e),d(mo.$$.fragment,e),qg=c(e),ti=l(e,"P",{});var _L=r(ti);g5=n(_L,"Here is how to find out the arch for one of the installed GPUs. For example, for GPU 0:"),_L.forEach(t),Eg=c(e),d(_o.$$.fragment,e),$g=c(e),ai=l(e,"P",{});var vL=r(ai);y5=n(vL,"If the output is:"),vL.forEach(t),kg=c(e),d(vo.$$.fragment,e),Pg=c(e),kt=l(e,"P",{});var rq=r(kt);w5=n(rq,"then you know that this card\u2019s arch is "),kf=l(rq,"CODE",{});var jL=r(kf);b5=n(jL,"8.6"),jL.forEach(t),q5=n(rq,"."),rq.forEach(t),zg=c(e),Pt=l(e,"P",{});var pq=r(Pt);E5=n(pq,"You can also leave "),Pf=l(pq,"CODE",{});var gL=r(Pf);$5=n(gL,"TORCH_CUDA_ARCH_LIST"),gL.forEach(t),k5=n(pq,` out completely and then the build program will automatically query the
architecture of the GPUs the build is made on. This may or may not match the GPUs on the target machines, that\u2019s why
it\u2019s best to specify the desired archs explicitly.`),pq.forEach(t),Dg=c(e),zt=l(e,"P",{});var iq=r(zt);P5=n(iq,`If after trying everything suggested you still encounter build issues, please, proceed with the GitHub Issue of
`),jo=l(iq,"A",{href:!0,rel:!0});var yL=r(jo);z5=n(yL,"Deepspeed"),yL.forEach(t),D5=n(iq,","),iq.forEach(t),Og=c(e),ni=l(e,"A",{id:!0}),r(ni).forEach(t),Tg=c(e),qs=l(e,"H3",{class:!0});var uq=r(qs);Dt=l(uq,"A",{id:!0,class:!0,href:!0});var wL=r(Dt);zf=l(wL,"SPAN",{});var bL=r(zf);d(go.$$.fragment,bL),bL.forEach(t),wL.forEach(t),O5=c(uq),Df=l(uq,"SPAN",{});var qL=r(Df);T5=n(qL,"Deployment with multiple GPUs"),qL.forEach(t),uq.forEach(t),Ag=c(e),Ot=l(e,"P",{});var cq=r(Ot);A5=n(cq,"To deploy this feature with multiple GPUs adjust the "),oi=l(cq,"A",{href:!0});var EL=r(oi);S5=n(EL,"Trainer"),EL.forEach(t),C5=n(cq,` command line arguments as
following:`),cq.forEach(t),Sg=c(e),Tt=l(e,"OL",{});var hq=r(Tt);Es=l(hq,"LI",{});var ch=r(Es);x5=n(ch,"replace "),Of=l(ch,"CODE",{});var $L=r(Of);R5=n($L,"python -m torch.distributed.launch"),$L.forEach(t),I5=n(ch," with "),Tf=l(ch,"CODE",{});var kL=r(Tf);U5=n(kL,"deepspeed"),kL.forEach(t),G5=n(ch,"."),ch.forEach(t),L5=c(hq),be=l(hq,"LI",{});var xn=r(be);M5=n(xn,"add a new argument "),Af=l(xn,"CODE",{});var PL=r(Af);Z5=n(PL,"--deepspeed ds_config.json"),PL.forEach(t),N5=n(xn,", where "),Sf=l(xn,"CODE",{});var zL=r(Sf);H5=n(zL,"ds_config.json"),zL.forEach(t),B5=n(xn,` is the DeepSpeed configuration file as
documented `),yo=l(xn,"A",{href:!0,rel:!0});var DL=r(yo);W5=n(DL,"here"),DL.forEach(t),F5=n(xn,". The file naming is up to you."),xn.forEach(t),hq.forEach(t),Cg=c(e),li=l(e,"P",{});var OL=r(li);V5=n(OL,"Therefore, if your original command line looked as follows:"),OL.forEach(t),xg=c(e),d(wo.$$.fragment,e),Rg=c(e),ri=l(e,"P",{});var TL=r(ri);Y5=n(TL,"Now it should be:"),TL.forEach(t),Ig=c(e),d(bo.$$.fragment,e),Ug=c(e),T=l(e,"P",{});var de=r(T);K5=n(de,"Unlike, "),Cf=l(de,"CODE",{});var AL=r(Cf);J5=n(AL,"torch.distributed.launch"),AL.forEach(t),X5=n(de," where you have to specify how many GPUs to use with "),xf=l(de,"CODE",{});var SL=r(xf);Q5=n(SL,"--nproc_per_node"),SL.forEach(t),e$=n(de,`, with the
`),Rf=l(de,"CODE",{});var CL=r(Rf);s$=n(CL,"deepspeed"),CL.forEach(t),t$=n(de," launcher you don\u2019t have to use the corresponding "),If=l(de,"CODE",{});var xL=r(If);a$=n(xL,"--num_gpus"),xL.forEach(t),n$=n(de,` if you want all of your GPUs used. The
full details on how to configure various nodes and GPUs can be found `),qo=l(de,"A",{href:!0,rel:!0});var RL=r(qo);o$=n(RL,"here"),RL.forEach(t),l$=n(de,"."),de.forEach(t),Gg=c(e),X=l(e,"P",{});var Rn=r(X);r$=n(Rn,"In fact, you can continue using "),Uf=l(Rn,"CODE",{});var IL=r(Uf);p$=n(IL,"-m torch.distributed.launch"),IL.forEach(t),i$=n(Rn,` with DeepSpeed as long as you don\u2019t need to use
`),Gf=l(Rn,"CODE",{});var UL=r(Gf);u$=n(UL,"deepspeed"),UL.forEach(t),c$=n(Rn,` launcher-specific arguments. Typically if you don\u2019t need a multi-node setup you\u2019re not required to use
the `),Lf=l(Rn,"CODE",{});var GL=r(Lf);h$=n(GL,"deepspeed"),GL.forEach(t),f$=n(Rn,` launcher. But since in the DeepSpeed documentation it\u2019ll be used everywhere, for consistency we will
use it here as well.`),Rn.forEach(t),Lg=c(e),At=l(e,"P",{});var fq=r(At);d$=n(fq,"Here is an example of running "),Mf=l(fq,"CODE",{});var LL=r(Mf);m$=n(LL,"run_translation.py"),LL.forEach(t),_$=n(fq," under DeepSpeed deploying all available GPUs:"),fq.forEach(t),Mg=c(e),d(Eo.$$.fragment,e),Zg=c(e),St=l(e,"P",{});var dq=r(St);v$=n(dq,"Note that in the DeepSpeed documentation you are likely to see "),Zf=l(dq,"CODE",{});var ML=r(Zf);j$=n(ML,"--deepspeed --deepspeed_config ds_config.json"),ML.forEach(t),g$=n(dq,` - i.e.
two DeepSpeed-related arguments, but for the sake of simplicity, and since there are already so many arguments to deal
with, we combined the two into a single argument.`),dq.forEach(t),Ng=c(e),Ct=l(e,"P",{});var mq=r(Ct);y$=n(mq,"For some practical usage examples, please, see this "),$o=l(mq,"A",{href:!0,rel:!0});var ZL=r($o);w$=n(ZL,"post"),ZL.forEach(t),b$=n(mq,"."),mq.forEach(t),Hg=c(e),pi=l(e,"A",{id:!0}),r(pi).forEach(t),Bg=c(e),$s=l(e,"H3",{class:!0});var _q=r($s);xt=l(_q,"A",{id:!0,class:!0,href:!0});var NL=r(xt);Nf=l(NL,"SPAN",{});var HL=r(Nf);d(ko.$$.fragment,HL),HL.forEach(t),NL.forEach(t),q$=c(_q),Hf=l(_q,"SPAN",{});var BL=r(Hf);E$=n(BL,"Deployment with one GPU"),BL.forEach(t),_q.forEach(t),Wg=c(e),Rt=l(e,"P",{});var vq=r(Rt);$$=n(vq,"To deploy DeepSpeed with one GPU adjust the "),ii=l(vq,"A",{href:!0});var WL=r(ii);k$=n(WL,"Trainer"),WL.forEach(t),P$=n(vq," command line arguments as follows:"),vq.forEach(t),Fg=c(e),d(Po.$$.fragment,e),Vg=c(e),Ce=l(e,"P",{});var hh=r(Ce);z$=n(hh,`This is almost the same as with multiple-GPUs, but here we tell DeepSpeed explicitly to use just one GPU via
`),Bf=l(hh,"CODE",{});var FL=r(Bf);D$=n(FL,"--num_gpus=1"),FL.forEach(t),O$=n(hh,`. By default, DeepSpeed deploys all GPUs it can see on the given node. If you have only 1 GPU to start
with, then you don\u2019t need this argument. The following `),zo=l(hh,"A",{href:!0,rel:!0});var VL=r(zo);T$=n(VL,"documentation"),VL.forEach(t),A$=n(hh," discusses the launcher options."),hh.forEach(t),Yg=c(e),ui=l(e,"P",{});var YL=r(ui);S$=n(YL,"Why would you want to use DeepSpeed with just one GPU?"),YL.forEach(t),Kg=c(e),It=l(e,"OL",{});var jq=r(It);Wf=l(jq,"LI",{});var KL=r(Wf);C$=n(KL,`It has a ZeRO-offload feature which can delegate some computations and memory to the host\u2019s CPU and RAM, and thus
leave more GPU resources for model\u2019s needs - e.g. larger batch size, or enabling a fitting of a very big model which
normally won\u2019t fit.`),KL.forEach(t),x$=c(jq),Ff=l(jq,"LI",{});var JL=r(Ff);R$=n(JL,`It provides a smart GPU memory management system, that minimizes memory fragmentation, which again allows you to fit
bigger models and data batches.`),JL.forEach(t),jq.forEach(t),Jg=c(e),ci=l(e,"P",{});var XL=r(ci);I$=n(XL,`While we are going to discuss the configuration in details next, the key to getting a huge improvement on a single GPU
with DeepSpeed is to have at least the following configuration in the configuration file:`),XL.forEach(t),Xg=c(e),d(Do.$$.fragment,e),Qg=c(e),hi=l(e,"P",{});var QL=r(hi);U$=n(QL,`which enables optimizer offload and some other important features. You may experiment with the buffer sizes, you will
find more details in the discussion below.`),QL.forEach(t),ey=c(e),Ut=l(e,"P",{});var gq=r(Ut);G$=n(gq,"For a practical usage example of this type of deployment, please, see this "),Oo=l(gq,"A",{href:!0,rel:!0});var eM=r(Oo);L$=n(eM,"post"),eM.forEach(t),M$=n(gq,"."),gq.forEach(t),sy=c(e),fi=l(e,"P",{});var sM=r(fi);Z$=n(sM,"You may also try the ZeRO-3 with CPU and NVMe offload as explained further in this document."),sM.forEach(t),ty=c(e),di=l(e,"P",{});var tM=r(di);N$=n(tM,"Notes:"),tM.forEach(t),ay=c(e),mi=l(e,"UL",{});var aM=r(mi);ks=l(aM,"LI",{});var fh=r(ks);To=l(fh,"P",{});var yq=r(To);H$=n(yq,"if you need to run on a specific GPU, which is different from GPU 0, you can\u2019t use "),Vf=l(yq,"CODE",{});var nM=r(Vf);B$=n(nM,"CUDA_VISIBLE_DEVICES"),nM.forEach(t),W$=n(yq,` to limit
the visible scope of available GPUs. Instead, you have to use the following syntax:`),yq.forEach(t),F$=c(fh),d(Ao.$$.fragment,fh),V$=c(fh),Yf=l(fh,"P",{});var oM=r(Yf);Y$=n(oM,"In this example, we tell DeepSpeed to use GPU 1 (second gpu)."),oM.forEach(t),fh.forEach(t),aM.forEach(t),ny=c(e),_i=l(e,"A",{id:!0}),r(_i).forEach(t),oy=c(e),Ps=l(e,"H3",{class:!0});var wq=r(Ps);Gt=l(wq,"A",{id:!0,class:!0,href:!0});var lM=r(Gt);Kf=l(lM,"SPAN",{});var rM=r(Kf);d(So.$$.fragment,rM),rM.forEach(t),lM.forEach(t),K$=c(wq),Jf=l(wq,"SPAN",{});var pM=r(Jf);J$=n(pM,"Deployment in Notebooks"),pM.forEach(t),wq.forEach(t),ly=c(e),Lt=l(e,"P",{});var bq=r(Lt);X$=n(bq,"The problem with running notebook cells as a script is that there is no normal "),Xf=l(bq,"CODE",{});var iM=r(Xf);Q$=n(iM,"deepspeed"),iM.forEach(t),e9=n(bq,` launcher to rely on, so
under certain setups we have to emulate it.`),bq.forEach(t),ry=c(e),vi=l(e,"P",{});var uM=r(vi);s9=n(uM,"If you\u2019re using only 1 GPU, here is how you\u2019d have to adjust your training code in the notebook to use DeepSpeed."),uM.forEach(t),py=c(e),d(Co.$$.fragment,e),iy=c(e),Mt=l(e,"P",{});var qq=r(Mt);t9=n(qq,"Note: "),Qf=l(qq,"CODE",{});var cM=r(Qf);a9=n(cM,"..."),cM.forEach(t),n9=n(qq," stands for the normal arguments that you\u2019d pass to the functions."),qq.forEach(t),uy=c(e),ji=l(e,"P",{});var hM=r(ji);o9=n(hM,`If you want to use more than 1 GPU, you must use a multi-process environment for DeepSpeed to work. That is, you have
to use the launcher for that purpose and this cannot be accomplished by emulating the distributed environment presented
at the beginning of this section.`),hM.forEach(t),cy=c(e),gi=l(e,"P",{});var fM=r(gi);l9=n(fM,`If you want to create the config file on the fly in the notebook in the current directory, you could have a dedicated
cell with:`),fM.forEach(t),hy=c(e),d(xo.$$.fragment,e),fy=c(e),xe=l(e,"P",{});var dh=r(xe);r9=n(dh,"If the training script is in a normal file and not in the notebook cells, you can launch "),ed=l(dh,"CODE",{});var dM=r(ed);p9=n(dM,"deepspeed"),dM.forEach(t),i9=n(dh,` normally via
shell from a cell. For example, to use `),sd=l(dh,"CODE",{});var mM=r(sd);u9=n(mM,"run_translation.py"),mM.forEach(t),c9=n(dh," you would launch it with:"),dh.forEach(t),dy=c(e),d(Ro.$$.fragment,e),my=c(e),Zt=l(e,"P",{});var Eq=r(Zt);h9=n(Eq,"or with "),td=l(Eq,"CODE",{});var _M=r(td);f9=n(_M,"%%bash"),_M.forEach(t),d9=n(Eq," magic, where you can write a multi-line code for the shell program to run:"),Eq.forEach(t),_y=c(e),d(Io.$$.fragment,e),vy=c(e),yi=l(e,"P",{});var vM=r(yi);m9=n(vM,"In such case you don\u2019t need any of the code presented at the beginning of this section."),vM.forEach(t),jy=c(e),Nt=l(e,"P",{});var $q=r(Nt);_9=n($q,"Note: While "),ad=l($q,"CODE",{});var jM=r(ad);v9=n(jM,"%%bash"),jM.forEach(t),j9=n($q,` magic is neat, but currently it buffers the output so you won\u2019t see the logs until the process
completes.`),$q.forEach(t),gy=c(e),wi=l(e,"A",{id:!0}),r(wi).forEach(t),yy=c(e),zs=l(e,"H3",{class:!0});var kq=r(zs);Ht=l(kq,"A",{id:!0,class:!0,href:!0});var gM=r(Ht);nd=l(gM,"SPAN",{});var yM=r(nd);d(Uo.$$.fragment,yM),yM.forEach(t),gM.forEach(t),g9=c(kq),od=l(kq,"SPAN",{});var wM=r(od);y9=n(wM,"Configuration"),wM.forEach(t),kq.forEach(t),wy=c(e),Bt=l(e,"P",{});var Pq=r(Bt);w9=n(Pq,`For the complete guide to the DeepSpeed configuration options that can be used in its configuration file please refer
to the `),Go=l(Pq,"A",{href:!0,rel:!0});var bM=r(Go);b9=n(bM,"following documentation"),bM.forEach(t),q9=n(Pq,"."),Pq.forEach(t),by=c(e),Wt=l(e,"P",{});var zq=r(Wt);E9=n(zq,"You can find dozens of DeepSpeed configuration examples that address various practical needs in "),Lo=l(zq,"A",{href:!0,rel:!0});var qM=r(Lo);$9=n(qM,`the DeepSpeedExamples
repo`),qM.forEach(t),k9=n(zq,":"),zq.forEach(t),qy=c(e),d(Mo.$$.fragment,e),Ey=c(e),Ft=l(e,"P",{});var Dq=r(Ft);P9=n(Dq,`Continuing the code from above, let\u2019s say you\u2019re looking to configure the Lamb optimizer. So you can search through the
example `),ld=l(Dq,"CODE",{});var EM=r(ld);z9=n(EM,".json"),EM.forEach(t),D9=n(Dq," files with:"),Dq.forEach(t),$y=c(e),d(Zo.$$.fragment,e),ky=c(e),Vt=l(e,"P",{});var Oq=r(Vt);O9=n(Oq,"Some more examples are to be found in the "),No=l(Oq,"A",{href:!0,rel:!0});var $M=r(No);T9=n($M,"main repo"),$M.forEach(t),A9=n(Oq," as well."),Oq.forEach(t),Py=c(e),bi=l(e,"P",{});var kM=r(bi);S9=n(kM,`When using DeepSpeed you always need to supply a DeepSpeed configuration file, yet some configuration parameters have
to be configured via the command line. You will find the nuances in the rest of this guide.`),kM.forEach(t),zy=c(e),Q=l(e,"P",{});var In=r(Q);C9=n(In,`To get an idea of what DeepSpeed configuration file looks like, here is one that activates ZeRO stage 2 features,
including optimizer states cpu offload, uses `),rd=l(In,"CODE",{});var PM=r(rd);x9=n(PM,"AdamW"),PM.forEach(t),R9=n(In," optimizer and "),pd=l(In,"CODE",{});var zM=r(pd);I9=n(zM,"WarmupLR"),zM.forEach(t),U9=n(In,` scheduler and will enable mixed
precision training if `),id=l(In,"CODE",{});var DM=r(id);G9=n(DM,"--fp16"),DM.forEach(t),L9=n(In," is passed:"),In.forEach(t),Dy=c(e),d(Ho.$$.fragment,e),Oy=c(e),Yt=l(e,"P",{});var Tq=r(Yt);M9=n(Tq,"When you execute the program, DeepSpeed will log the configuration it received from the "),qi=l(Tq,"A",{href:!0});var OM=r(qi);Z9=n(OM,"Trainer"),OM.forEach(t),N9=n(Tq,`
to the console, so you can see exactly what was the final configuration passed to it.`),Tq.forEach(t),Ty=c(e),Ei=l(e,"A",{id:!0}),r(Ei).forEach(t),Ay=c(e),Ds=l(e,"H3",{class:!0});var Aq=r(Ds);Kt=l(Aq,"A",{id:!0,class:!0,href:!0});var TM=r(Kt);ud=l(TM,"SPAN",{});var AM=r(ud);d(Bo.$$.fragment,AM),AM.forEach(t),TM.forEach(t),H9=c(Aq),cd=l(Aq,"SPAN",{});var SM=r(cd);B9=n(SM,"Passing Configuration"),SM.forEach(t),Aq.forEach(t),Sy=c(e),A=l(e,"P",{});var me=r(A);W9=n(me,`As discussed in this document normally the DeepSpeed configuration is passed as a path to a json file, but if you\u2019re
not using the command line interface to configure the training, and instead instantiate the
`),$i=l(me,"A",{href:!0});var CM=r($i);F9=n(CM,"Trainer"),CM.forEach(t),V9=n(me," via "),ki=l(me,"A",{href:!0});var xM=r(ki);Y9=n(xM,"TrainingArguments"),xM.forEach(t),K9=n(me," then for the "),hd=l(me,"CODE",{});var RM=r(hd);J9=n(RM,"deepspeed"),RM.forEach(t),X9=n(me,` argument you can
pass a nested `),fd=l(me,"CODE",{});var IM=r(fd);Q9=n(IM,"dict"),IM.forEach(t),e8=n(me,`. This allows you to create the configuration on the fly and doesn\u2019t require you to write it to
the file system before passing it to `),Pi=l(me,"A",{href:!0});var UM=r(Pi);s8=n(UM,"TrainingArguments"),UM.forEach(t),t8=n(me,"."),me.forEach(t),Cy=c(e),zi=l(e,"P",{});var GM=r(zi);a8=n(GM,"To summarize you can do:"),GM.forEach(t),xy=c(e),d(Wo.$$.fragment,e),Ry=c(e),Di=l(e,"P",{});var LM=r(Di);n8=n(LM,"or:"),LM.forEach(t),Iy=c(e),d(Fo.$$.fragment,e),Uy=c(e),Oi=l(e,"A",{id:!0}),r(Oi).forEach(t),Gy=c(e),Os=l(e,"H3",{class:!0});var Sq=r(Os);Jt=l(Sq,"A",{id:!0,class:!0,href:!0});var MM=r(Jt);dd=l(MM,"SPAN",{});var ZM=r(dd);d(Vo.$$.fragment,ZM),ZM.forEach(t),MM.forEach(t),o8=c(Sq),md=l(Sq,"SPAN",{});var NM=r(md);l8=n(NM,"Shared Configuration"),NM.forEach(t),Sq.forEach(t),Ly=c(e),d(Xt.$$.fragment,e),My=c(e),Re=l(e,"P",{});var mh=r(Re);r8=n(mh,"Some configuration values are required by both the "),Ti=l(mh,"A",{href:!0});var HM=r(Ti);p8=n(HM,"Trainer"),HM.forEach(t),i8=n(mh,` and DeepSpeed to function correctly,
therefore, to prevent conflicting definitions, which could lead to hard to detect errors, we chose to configure those
via the `),Ai=l(mh,"A",{href:!0});var BM=r(Ai);u8=n(BM,"Trainer"),BM.forEach(t),c8=n(mh," command line arguments."),mh.forEach(t),Zy=c(e),Qt=l(e,"P",{});var Cq=r(Qt);h8=n(Cq,`Additionally, some configuration values are derived automatically based on the model\u2019s configuration, so instead of
remembering to manually adjust multiple values, it\u2019s the best to let the `),Si=l(Cq,"A",{href:!0});var WM=r(Si);f8=n(WM,"Trainer"),WM.forEach(t),d8=n(Cq,` do the majority
of configuration for you.`),Cq.forEach(t),Ny=c(e),Ie=l(e,"P",{});var _h=r(Ie);m8=n(_h,"Therefore, in the rest of this guide you will find a special configuration value: "),_d=l(_h,"CODE",{});var FM=r(_d);_8=n(FM,"auto"),FM.forEach(t),v8=n(_h,`, which when set will be
automatically replaced with the correct or most efficient value. Please feel free to choose to ignore this
recommendation and set the values explicitly, in which case be very careful that your the
`),Ci=l(_h,"A",{href:!0});var VM=r(Ci);j8=n(VM,"Trainer"),VM.forEach(t),g8=n(_h,` arguments and DeepSpeed configurations agree. For example, are you using the same
learning rate, or batch size, or gradient accumulation settings? if these mismatch the training may fail in very
difficult to detect ways. You have been warned.`),_h.forEach(t),Hy=c(e),xi=l(e,"P",{});var YM=r(xi);y8=n(YM,`There are multiple other values that are specific to DeepSpeed-only and those you will have to set manually to suit
your needs.`),YM.forEach(t),By=c(e),ea=l(e,"P",{});var xq=r(ea);w8=n(xq,`In your own programs, you can also use the following approach if you\u2019d like to modify the DeepSpeed config as a master
and configure `),Ri=l(xq,"A",{href:!0});var KM=r(Ri);b8=n(KM,"TrainingArguments"),KM.forEach(t),q8=n(xq," based on that. The steps are:"),xq.forEach(t),Wy=c(e),sa=l(e,"OL",{});var Rq=r(sa);vd=l(Rq,"LI",{});var JM=r(vd);E8=n(JM,"Create or load the DeepSpeed configuration to be used as a master configuration"),JM.forEach(t),$8=c(Rq),Yo=l(Rq,"LI",{});var Iq=r(Yo);k8=n(Iq,"Create the "),Ii=l(Iq,"A",{href:!0});var XM=r(Ii);P8=n(XM,"TrainingArguments"),XM.forEach(t),z8=n(Iq," object based on these values"),Iq.forEach(t),Rq.forEach(t),Fy=c(e),ee=l(e,"P",{});var Un=r(ee);D8=n(Un,"Do note that some values, such as "),jd=l(Un,"CODE",{});var QM=r(jd);O8=n(QM,"scheduler.params.total_num_steps"),QM.forEach(t),T8=n(Un,` are calculated by
`),Ui=l(Un,"A",{href:!0});var eZ=r(Ui);A8=n(eZ,"Trainer"),eZ.forEach(t),S8=n(Un," during "),gd=l(Un,"CODE",{});var sZ=r(gd);C8=n(sZ,"train"),sZ.forEach(t),x8=n(Un,", but you can of course do the math yourself."),Un.forEach(t),Vy=c(e),Gi=l(e,"A",{id:!0}),r(Gi).forEach(t),Yy=c(e),Ts=l(e,"H3",{class:!0});var Uq=r(Ts);ta=l(Uq,"A",{id:!0,class:!0,href:!0});var tZ=r(ta);yd=l(tZ,"SPAN",{});var aZ=r(yd);d(Ko.$$.fragment,aZ),aZ.forEach(t),tZ.forEach(t),R8=c(Uq),wd=l(Uq,"SPAN",{});var nZ=r(wd);I8=n(nZ,"ZeRO"),nZ.forEach(t),Uq.forEach(t),Ky=c(e),Jo=l(e,"P",{});var iG=r(Jo);Xo=l(iG,"A",{href:!0,rel:!0});var oZ=r(Xo);U8=n(oZ,"Zero Redundancy Optimizer (ZeRO)"),oZ.forEach(t),G8=n(iG,` is the workhorse of DeepSpeed. It
supports 3 different levels (stages) of optimization. The first one is not quite interesting for scalability purposes,
therefore this document focuses on stages 2 and 3. Stage 3 is further improved by the latest addition of ZeRO-Infinity.
You will find more indepth information in the DeepSpeed documentation.`),iG.forEach(t),Jy=c(e),Ue=l(e,"P",{});var vh=r(Ue);L8=n(vh,"The "),bd=l(vh,"CODE",{});var lZ=r(bd);M8=n(lZ,"zero_optimization"),lZ.forEach(t),Z8=n(vh," section of the configuration file is the most important part ("),Qo=l(vh,"A",{href:!0,rel:!0});var rZ=r(Qo);N8=n(rZ,"docs"),rZ.forEach(t),H8=n(vh,`), since that is where you define
which ZeRO stages you want to enable and how to configure them. You will find the explanation for each parameter in the
DeepSpeed docs.`),vh.forEach(t),Xy=c(e),aa=l(e,"P",{});var Gq=r(aa);B8=n(Gq,"This section has to be configured exclusively via DeepSpeed configuration - the "),Li=l(Gq,"A",{href:!0});var pZ=r(Li);W8=n(pZ,"Trainer"),pZ.forEach(t),F8=n(Gq,` provides
no equivalent command line arguments.`),Gq.forEach(t),Qy=c(e),Mi=l(e,"P",{});var iZ=r(Mi);V8=n(iZ,`Note: currently DeepSpeed doesn\u2019t validate parameter names, so if you misspell any, it\u2019ll use the default setting for
the parameter that got misspelled. You can watch the DeepSpeed engine start up log messages to see what values it is
going to use.`),iZ.forEach(t),ew=c(e),Zi=l(e,"A",{id:!0}),r(Zi).forEach(t),sw=c(e),As=l(e,"H4",{class:!0});var Lq=r(As);na=l(Lq,"A",{id:!0,class:!0,href:!0});var uZ=r(na);qd=l(uZ,"SPAN",{});var cZ=r(qd);d(el.$$.fragment,cZ),cZ.forEach(t),uZ.forEach(t),Y8=c(Lq),Ed=l(Lq,"SPAN",{});var hZ=r(Ed);K8=n(hZ,"ZeRO-2 Config"),hZ.forEach(t),Lq.forEach(t),tw=c(e),Ni=l(e,"P",{});var fZ=r(Ni);J8=n(fZ,"The following is an example of configuration for ZeRO stage 2:"),fZ.forEach(t),aw=c(e),d(sl.$$.fragment,e),nw=c(e),Hi=l(e,"P",{});var dZ=r(Hi);$d=l(dZ,"STRONG",{});var mZ=r($d);X8=n(mZ,"Performance tuning:"),mZ.forEach(t),dZ.forEach(t),ow=c(e),Ge=l(e,"UL",{});var jh=r(Ge);Ss=l(jh,"LI",{});var gh=r(Ss);Q8=n(gh,"enabling "),kd=l(gh,"CODE",{});var _Z=r(kd);ek=n(_Z,"offload_optimizer"),_Z.forEach(t),sk=n(gh," should reduce GPU RAM usage (it requires "),Pd=l(gh,"CODE",{});var vZ=r(Pd);tk=n(vZ,'"stage": 2'),vZ.forEach(t),ak=n(gh,")"),gh.forEach(t),nk=c(jh),S=l(jh,"LI",{});var J=r(S);zd=l(J,"CODE",{});var jZ=r(zd);ok=n(jZ,'"overlap_comm": true'),jZ.forEach(t),lk=n(J," trades off increased GPU RAM usage to lower all-reduce latency. "),Dd=l(J,"CODE",{});var gZ=r(Dd);rk=n(gZ,"overlap_comm"),gZ.forEach(t),pk=n(J,` uses 4.5x
the `),Od=l(J,"CODE",{});var yZ=r(Od);ik=n(yZ,"allgather_bucket_size"),yZ.forEach(t),uk=n(J," and "),Td=l(J,"CODE",{});var wZ=r(Td);ck=n(wZ,"reduce_bucket_size"),wZ.forEach(t),hk=n(J,` values. So if they are set to 5e8, this requires a 9GB
footprint (`),Ad=l(J,"CODE",{});var bZ=r(Ad);fk=n(bZ,"5e8 x 2Bytes x 2 x 4.5"),bZ.forEach(t),dk=n(J,`). Therefore, if you have a GPU with 8GB or less RAM, to avoid getting
OOM-errors you will need to reduce those parameters to about `),Sd=l(J,"CODE",{});var qZ=r(Sd);mk=n(qZ,"2e8"),qZ.forEach(t),_k=n(J,`, which would require 3.6GB. You will want to do
the same on larger capacity GPU as well, if you\u2019re starting to hit OOM.`),J.forEach(t),vk=c(jh),Cd=l(jh,"LI",{});var EZ=r(Cd);jk=n(EZ,`when reducing these buffers you\u2019re trading communication speed to avail more GPU RAM. The smaller the buffer size is,
the slower the communication gets, and the more GPU RAM will be available to other tasks. So if a bigger batch size is
important, getting a slightly slower training time could be a good trade.`),EZ.forEach(t),jh.forEach(t),lw=c(e),Le=l(e,"P",{});var yh=r(Le);gk=n(yh,"Additionally, "),xd=l(yh,"CODE",{});var $Z=r(xd);yk=n($Z,"deepspeed==0.4.4"),$Z.forEach(t),wk=n(yh," added a new option "),Rd=l(yh,"CODE",{});var kZ=r(Rd);bk=n(kZ,"round_robin_gradients"),kZ.forEach(t),qk=n(yh," which you can enable with:"),yh.forEach(t),rw=c(e),d(tl.$$.fragment,e),pw=c(e),Bi=l(e,"P",{});var PZ=r(Bi);Ek=n(PZ,"This is a stage 2 optimization for CPU offloading that parallelizes gradient copying to CPU memory among ranks by fine-grained gradient partitioning. Performance benefit grows with gradient accumulation steps (more copying between optimizer steps) or GPU count (increased parallelism)."),PZ.forEach(t),iw=c(e),Wi=l(e,"A",{id:!0}),r(Wi).forEach(t),uw=c(e),Cs=l(e,"H4",{class:!0});var Mq=r(Cs);oa=l(Mq,"A",{id:!0,class:!0,href:!0});var zZ=r(oa);Id=l(zZ,"SPAN",{});var DZ=r(Id);d(al.$$.fragment,DZ),DZ.forEach(t),zZ.forEach(t),$k=c(Mq),Ud=l(Mq,"SPAN",{});var OZ=r(Ud);kk=n(OZ,"ZeRO-3 Config"),OZ.forEach(t),Mq.forEach(t),cw=c(e),Fi=l(e,"P",{});var TZ=r(Fi);Pk=n(TZ,"The following is an example of configuration for ZeRO stage 3:"),TZ.forEach(t),hw=c(e),d(nl.$$.fragment,e),fw=c(e),H=l(e,"P",{});var _s=r(H);zk=n(_s,`If you are getting OOMs, because your model or activations don\u2019t fit into the GPU memory and you have unutilized CPU
memory offloading the optimizer states and parameters to CPU memory with `),Gd=l(_s,"CODE",{});var AZ=r(Gd);Dk=n(AZ,'"device": "cpu"'),AZ.forEach(t),Ok=n(_s,` may solve this limitation.
If you don\u2019t want to offload to CPU memory, use `),Ld=l(_s,"CODE",{});var SZ=r(Ld);Tk=n(SZ,"none"),SZ.forEach(t),Ak=n(_s," instead of "),Md=l(_s,"CODE",{});var CZ=r(Md);Sk=n(CZ,"cpu"),CZ.forEach(t),Ck=n(_s," for the "),Zd=l(_s,"CODE",{});var xZ=r(Zd);xk=n(xZ,"device"),xZ.forEach(t),Rk=n(_s,` entry. Offloading to
NVMe is discussed further down.`),_s.forEach(t),dw=c(e),Me=l(e,"P",{});var wh=r(Me);Ik=n(wh,"Pinned memory is enabled with "),Nd=l(wh,"CODE",{});var RZ=r(Nd);Uk=n(RZ,"pin_memory"),RZ.forEach(t),Gk=n(wh," set to "),Hd=l(wh,"CODE",{});var IZ=r(Hd);Lk=n(IZ,"true"),IZ.forEach(t),Mk=n(wh,`. This feature can improve the throughput at the cost of
making less memory available to other processes. Pinned memory is set aside to the specific process that requested it
and its typically accessed much faster than normal CPU memory.`),wh.forEach(t),mw=c(e),Vi=l(e,"P",{});var UZ=r(Vi);Bd=l(UZ,"STRONG",{});var GZ=r(Bd);Zk=n(GZ,"Performance tuning:"),GZ.forEach(t),UZ.forEach(t),_w=c(e),la=l(e,"UL",{});var Zq=r(la);ol=l(Zq,"LI",{});var Nq=r(ol);Wd=l(Nq,"CODE",{});var LZ=r(Wd);Nk=n(LZ,"stage3_max_live_parameters"),LZ.forEach(t),Hk=n(Nq,": "),Fd=l(Nq,"CODE",{});var MZ=r(Fd);Bk=n(MZ,"1e9"),MZ.forEach(t),Nq.forEach(t),Wk=c(Zq),ll=l(Zq,"LI",{});var Hq=r(ll);Vd=l(Hq,"CODE",{});var ZZ=r(Vd);Fk=n(ZZ,"stage3_max_reuse_distance"),ZZ.forEach(t),Vk=n(Hq,": "),Yd=l(Hq,"CODE",{});var NZ=r(Yd);Yk=n(NZ,"1e9"),NZ.forEach(t),Hq.forEach(t),Zq.forEach(t),vw=c(e),C=l(e,"P",{});var _e=r(C);Kk=n(_e,"If hitting OOM reduce "),Kd=l(_e,"CODE",{});var HZ=r(Kd);Jk=n(HZ,"stage3_max_live_parameters"),HZ.forEach(t),Xk=n(_e," and "),Jd=l(_e,"CODE",{});var BZ=r(Jd);Qk=n(BZ,"stage3_max_reuse_distance"),BZ.forEach(t),e7=n(_e,`. They should have minimal impact
on performance unless you are doing activation checkpointing. `),Xd=l(_e,"CODE",{});var WZ=r(Xd);s7=n(WZ,"1e9"),WZ.forEach(t),t7=n(_e,` would consume ~2GB. The memory is shared by
`),Qd=l(_e,"CODE",{});var FZ=r(Qd);a7=n(FZ,"stage3_max_live_parameters"),FZ.forEach(t),n7=n(_e," and "),em=l(_e,"CODE",{});var VZ=r(em);o7=n(VZ,"stage3_max_reuse_distance"),VZ.forEach(t),l7=n(_e,", so it\u2019s not additive, it\u2019s just 2GB total."),_e.forEach(t),jw=c(e),qe=l(e,"P",{});var Dp=r(qe);sm=l(Dp,"CODE",{});var YZ=r(sm);r7=n(YZ,"stage3_max_live_parameters"),YZ.forEach(t),p7=n(Dp,` is the upper limit on how many full parameters you want to keep on the GPU at any given
time. \u201Creuse distance\u201D is a metric we are using to figure out when will a parameter be used again in the future, and we
use the `),tm=l(Dp,"CODE",{});var KZ=r(tm);i7=n(KZ,"stage3_max_reuse_distance"),KZ.forEach(t),u7=n(Dp,` to decide whether to throw away the parameter or to keep it. If a parameter is
going to be used again in near future (less than `),am=l(Dp,"CODE",{});var JZ=r(am);c7=n(JZ,"stage3_max_reuse_distance"),JZ.forEach(t),h7=n(Dp,`) then we keep it to reduce communication
overhead. This is super helpful when you have activation checkpointing enabled, where we do a forward recompute and
backward passes a a single layer granularity and want to keep the parameter in the forward recompute till the backward`),Dp.forEach(t),gw=c(e),Yi=l(e,"P",{});var XZ=r(Yi);f7=n(XZ,"The following configuration values depend on the model\u2019s hidden size:"),XZ.forEach(t),yw=c(e),Ze=l(e,"UL",{});var bh=r(Ze);rl=l(bh,"LI",{});var Bq=r(rl);nm=l(Bq,"CODE",{});var QZ=r(nm);d7=n(QZ,"reduce_bucket_size"),QZ.forEach(t),m7=n(Bq,": "),om=l(Bq,"CODE",{});var eN=r(om);_7=n(eN,"hidden_size*hidden_size"),eN.forEach(t),Bq.forEach(t),v7=c(bh),pl=l(bh,"LI",{});var Wq=r(pl);lm=l(Wq,"CODE",{});var sN=r(lm);j7=n(sN,"stage3_prefetch_bucket_size"),sN.forEach(t),g7=n(Wq,": "),rm=l(Wq,"CODE",{});var tN=r(rm);y7=n(tN,"0.9 * hidden_size * hidden_size"),tN.forEach(t),Wq.forEach(t),w7=c(bh),il=l(bh,"LI",{});var Fq=r(il);pm=l(Fq,"CODE",{});var aN=r(pm);b7=n(aN,"stage3_param_persistence_threshold"),aN.forEach(t),q7=n(Fq,": "),im=l(Fq,"CODE",{});var nN=r(im);E7=n(nN,"10 * hidden_size"),nN.forEach(t),Fq.forEach(t),bh.forEach(t),ww=c(e),Ne=l(e,"P",{});var qh=r(Ne);$7=n(qh,"therefore set these values to "),um=l(qh,"CODE",{});var oN=r(um);k7=n(oN,"auto"),oN.forEach(t),P7=n(qh," and the "),Ki=l(qh,"A",{href:!0});var lN=r(Ki);z7=n(lN,"Trainer"),lN.forEach(t),D7=n(qh,` will automatically assign the recommended
values. But, of course, feel free to set these explicitly as well.`),qh.forEach(t),bw=c(e),ul=l(e,"P",{});var uG=r(ul);cm=l(uG,"CODE",{});var rN=r(cm);O7=n(rN,"stage3_gather_16bit_weights_on_model_save"),rN.forEach(t),T7=n(uG,` enables model fp16 weights consolidation when model gets saved. With large
models and multiple GPUs this is an expensive operation both in terms of memory and speed. It\u2019s currently required if
you plan to resume the training. Watch out for future updates that will remove this limitation and make things more
flexible.`),uG.forEach(t),qw=c(e),se=l(e,"P",{});var Gn=r(se);A7=n(Gn,"If you\u2019re migrating from ZeRO-2 configuration note that "),hm=l(Gn,"CODE",{});var pN=r(hm);S7=n(pN,"allgather_partitions"),pN.forEach(t),C7=n(Gn,", "),fm=l(Gn,"CODE",{});var iN=r(fm);x7=n(iN,"allgather_bucket_size"),iN.forEach(t),R7=n(Gn,` and
`),dm=l(Gn,"CODE",{});var uN=r(dm);I7=n(uN,"reduce_scatter"),uN.forEach(t),U7=n(Gn,` configuration parameters are not used in ZeRO-3. If you keep these in the config file they will just
be ignored.`),Gn.forEach(t),Ew=c(e),Ji=l(e,"UL",{});var cN=r(Ji);cl=l(cN,"LI",{});var Vq=r(cl);mm=l(Vq,"CODE",{});var hN=r(mm);G7=n(hN,"sub_group_size"),hN.forEach(t),L7=n(Vq,": "),_m=l(Vq,"CODE",{});var fN=r(_m);M7=n(fN,"1e9"),fN.forEach(t),Vq.forEach(t),cN.forEach(t),$w=c(e),Ee=l(e,"P",{});var Op=r(Ee);vm=l(Op,"CODE",{});var dN=r(vm);Z7=n(dN,"sub_group_size"),dN.forEach(t),N7=n(Op,` controls the granularity in which parameters are updated during optimizer steps. Parameters are
grouped into buckets of `),jm=l(Op,"CODE",{});var mN=r(jm);H7=n(mN,"sub_group_size"),mN.forEach(t),B7=n(Op,` and each buckets is updated one at a time. When used with NVMe offload in
ZeRO-Infinity, `),gm=l(Op,"CODE",{});var _N=r(gm);W7=n(_N,"sub_group_size"),_N.forEach(t),F7=n(Op,` therefore controls the granularity in which model states are moved in and out of CPU
memory from NVMe during the optimizer step. This prevents running out of CPU memory for extremely large models.`),Op.forEach(t),kw=c(e),He=l(e,"P",{});var Eh=r(He);V7=n(Eh,"You can leave "),ym=l(Eh,"CODE",{});var vN=r(ym);Y7=n(vN,"sub_group_size"),vN.forEach(t),K7=n(Eh," to its default value of "),wm=l(Eh,"EM",{});var jN=r(wm);J7=n(jN,"1e9"),jN.forEach(t),X7=n(Eh,` when not using NVMe offload. You may want to change its
default value in the following cases:`),Eh.forEach(t),Pw=c(e),ra=l(e,"OL",{});var Yq=r(ra);hl=l(Yq,"LI",{});var Kq=r(hl);Q7=n(Kq,"Running into OOM during optimizer step: Reduce "),bm=l(Kq,"CODE",{});var gN=r(bm);eP=n(gN,"sub_group_size"),gN.forEach(t),sP=n(Kq," to reduce memory utilization of temporary buffers"),Kq.forEach(t),tP=c(Yq),fl=l(Yq,"LI",{});var Jq=r(fl);aP=n(Jq,"Optimizer Step is taking a long time: Increase "),qm=l(Jq,"CODE",{});var yN=r(qm);nP=n(yN,"sub_group_size"),yN.forEach(t),oP=n(Jq,` to improve bandwidth utilization as a result of
the increased data buffers.`),Jq.forEach(t),Yq.forEach(t),zw=c(e),Xi=l(e,"A",{id:!0}),r(Xi).forEach(t),Dw=c(e),xs=l(e,"H3",{class:!0});var Xq=r(xs);pa=l(Xq,"A",{id:!0,class:!0,href:!0});var wN=r(pa);Em=l(wN,"SPAN",{});var bN=r(Em);d(dl.$$.fragment,bN),bN.forEach(t),wN.forEach(t),lP=c(Xq),$m=l(Xq,"SPAN",{});var qN=r($m);rP=n(qN,"NVMe Support"),qN.forEach(t),Xq.forEach(t),Ow=c(e),Qi=l(e,"P",{});var EN=r(Qi);pP=n(EN,`ZeRO-Infinity allows for training incredibly large models by extending GPU and CPU memory with NVMe memory. Thanks to
smart partitioning and tiling algorithms each GPU needs to send and receive very small amounts of data during
offloading so modern NVMe proved to be fit to allow for an even larger total memory pool available to your training
process. ZeRO-Infinity requires ZeRO-3 enabled.`),EN.forEach(t),Tw=c(e),eu=l(e,"P",{});var $N=r(eu);iP=n($N,"The following configuration example enables NVMe to offload both optimizer states and the params:"),$N.forEach(t),Aw=c(e),d(ml.$$.fragment,e),Sw=c(e),ia=l(e,"P",{});var Qq=r(ia);uP=n(Qq,`You can choose to offload both optimizer states and params to NVMe, or just one of them or none. For example, if you
have copious amounts of CPU memory available, by all means offload to CPU memory only as it\u2019d be faster (hint:
`),km=l(Qq,"EM",{});var kN=r(km);cP=n(kN,"\u201Cdevice\u201D: \u201Ccpu\u201D"),kN.forEach(t),hP=n(Qq,")."),Qq.forEach(t),Cw=c(e),Be=l(e,"P",{});var $h=r(Be);fP=n($h,"Here is the full documentation for offloading "),_l=l($h,"A",{href:!0,rel:!0});var PN=r(_l);dP=n(PN,"optimizer states"),PN.forEach(t),mP=n($h," and "),vl=l($h,"A",{href:!0,rel:!0});var zN=r(vl);_P=n(zN,"parameters"),zN.forEach(t),vP=n($h,"."),$h.forEach(t),xw=c(e),ua=l(e,"P",{});var eE=r(ua);jP=n(eE,"Make sure that your "),Pm=l(eE,"CODE",{});var DN=r(Pm);gP=n(DN,"nvme_path"),DN.forEach(t),yP=n(eE,` is actually an NVMe, since it will work with the normal hard drive or SSD, but it\u2019ll
be much much slower. The fast scalable training was designed with modern NVMe transfer speeds in mind (as of this
writing one can have ~3.5GB/s read, ~3GB/s write peak speeds).`),eE.forEach(t),Rw=c(e),We=l(e,"P",{});var kh=r(We);wP=n(kh,"In order to figure out the optimal "),zm=l(kh,"CODE",{});var ON=r(zm);bP=n(ON,"aio"),ON.forEach(t),qP=n(kh,` configuration block you must run a benchmark on your target setup, as
`),jl=l(kh,"A",{href:!0,rel:!0});var TN=r(jl);EP=n(TN,"explained here"),TN.forEach(t),$P=n(kh,"."),kh.forEach(t),Iw=c(e),su=l(e,"A",{id:!0}),r(su).forEach(t),Uw=c(e),Rs=l(e,"H4",{class:!0});var sE=r(Rs);ca=l(sE,"A",{id:!0,class:!0,href:!0});var AN=r(ca);Dm=l(AN,"SPAN",{});var SN=r(Dm);d(gl.$$.fragment,SN),SN.forEach(t),AN.forEach(t),kP=c(sE),Om=l(sE,"SPAN",{});var CN=r(Om);PP=n(CN,"ZeRO-2 vs ZeRO-3 Performance"),CN.forEach(t),sE.forEach(t),Gw=c(e),tu=l(e,"P",{});var xN=r(tu);zP=n(xN,`ZeRO-3 is likely to be slower than ZeRO-2 if everything else is configured the same because the former has to gather
model weights in addition to what ZeRO-2 does. If ZeRO-2 meets your needs and you don\u2019t need to scale beyond a few GPUs
then you may choose to stick to it. It\u2019s important to understand that ZeRO-3 enables a much higher scalability capacity
at a cost of speed.`),xN.forEach(t),Lw=c(e),au=l(e,"P",{});var RN=r(au);DP=n(RN,"It\u2019s possible to adjust ZeRO-3 configuration to make it perform closer to ZeRO-2:"),RN.forEach(t),Mw=c(e),ha=l(e,"UL",{});var tE=r(ha);Is=l(tE,"LI",{});var Ph=r(Is);OP=n(Ph,"set "),Tm=l(Ph,"CODE",{});var IN=r(Tm);TP=n(IN,"stage3_param_persistence_threshold"),IN.forEach(t),AP=n(Ph," to a very large number - larger than the largest parameter, e.g., "),Am=l(Ph,"CODE",{});var UN=r(Am);SP=n(UN,"6 * hidden_size * hidden_size"),UN.forEach(t),CP=n(Ph,". This will keep the parameters on the GPUs."),Ph.forEach(t),xP=c(tE),yl=l(tE,"LI",{});var aE=r(yl);RP=n(aE,"turn off "),Sm=l(aE,"CODE",{});var GN=r(Sm);IP=n(GN,"offload_params"),GN.forEach(t),UP=n(aE," since ZeRO-2 doesn\u2019t have that option."),aE.forEach(t),tE.forEach(t),Zw=c(e),Fe=l(e,"P",{});var zh=r(Fe);GP=n(zh,"The performance will likely improve significantly with just "),Cm=l(zh,"CODE",{});var LN=r(Cm);LP=n(LN,"offload_params"),LN.forEach(t),MP=n(zh,` turned off, even if you don\u2019t change
`),xm=l(zh,"CODE",{});var MN=r(xm);ZP=n(MN,"stage3_param_persistence_threshold"),MN.forEach(t),NP=n(zh,`. Of course, these changes will impact the size of the model you can train. So
these help you to trade scalability for speed depending on your needs.`),zh.forEach(t),Nw=c(e),nu=l(e,"A",{id:!0}),r(nu).forEach(t),Hw=c(e),Us=l(e,"H4",{class:!0});var nE=r(Us);fa=l(nE,"A",{id:!0,class:!0,href:!0});var ZN=r(fa);Rm=l(ZN,"SPAN",{});var NN=r(Rm);d(wl.$$.fragment,NN),NN.forEach(t),ZN.forEach(t),HP=c(nE),Im=l(nE,"SPAN",{});var HN=r(Im);BP=n(HN,"ZeRO-2 Example"),HN.forEach(t),nE.forEach(t),Bw=c(e),da=l(e,"P",{});var oE=r(da);WP=n(oE,"Here is a full ZeRO-2 auto-configuration file "),Um=l(oE,"CODE",{});var BN=r(Um);FP=n(BN,"ds_config_zero2.json"),BN.forEach(t),VP=n(oE,":"),oE.forEach(t),Ww=c(e),d(bl.$$.fragment,e),Fw=c(e),ma=l(e,"P",{});var lE=r(ma);YP=n(lE,`Here is a full ZeRO-2 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Gm=l(lE,"CODE",{});var WN=r(Gm);KP=n(WN,"auto"),WN.forEach(t),JP=n(lE," settings in it."),lE.forEach(t),Vw=c(e),d(ql.$$.fragment,e),Yw=c(e),ou=l(e,"A",{id:!0}),r(ou).forEach(t),Kw=c(e),Gs=l(e,"H4",{class:!0});var rE=r(Gs);_a=l(rE,"A",{id:!0,class:!0,href:!0});var FN=r(_a);Lm=l(FN,"SPAN",{});var VN=r(Lm);d(El.$$.fragment,VN),VN.forEach(t),FN.forEach(t),XP=c(rE),Mm=l(rE,"SPAN",{});var YN=r(Mm);QP=n(YN,"ZeRO-3 Example"),YN.forEach(t),rE.forEach(t),Jw=c(e),va=l(e,"P",{});var pE=r(va);ez=n(pE,"Here is a full ZeRO-3 auto-configuration file "),Zm=l(pE,"CODE",{});var KN=r(Zm);sz=n(KN,"ds_config_zero3.json"),KN.forEach(t),tz=n(pE,":"),pE.forEach(t),Xw=c(e),d($l.$$.fragment,e),Qw=c(e),ja=l(e,"P",{});var iE=r(ja);az=n(iE,`Here is a full ZeRO-3 all-enabled manually set configuration file. It is here mainly for you to see what the typical
values look like, but we highly recommend using the one with multiple `),Nm=l(iE,"CODE",{});var JN=r(Nm);nz=n(JN,"auto"),JN.forEach(t),oz=n(iE," settings in it."),iE.forEach(t),e2=c(e),d(kl.$$.fragment,e),s2=c(e),Ls=l(e,"H3",{class:!0});var uE=r(Ls);ga=l(uE,"A",{id:!0,class:!0,href:!0});var XN=r(ga);Hm=l(XN,"SPAN",{});var QN=r(Hm);d(Pl.$$.fragment,QN),QN.forEach(t),XN.forEach(t),lz=c(uE),Bm=l(uE,"SPAN",{});var eH=r(Bm);rz=n(eH,"Optimizer and Scheduler"),eH.forEach(t),uE.forEach(t),t2=c(e),ya=l(e,"P",{});var cE=r(ya);pz=n(cE,"As long as you don\u2019t enable "),Wm=l(cE,"CODE",{});var sH=r(Wm);iz=n(sH,"offload_optimizer"),sH.forEach(t),uz=n(cE,` you can mix and match DeepSpeed and HuggingFace schedulers and
optimizers, with the exception of using the combination of HuggingFace scheduler and DeepSpeed optimizer:`),cE.forEach(t),a2=c(e),lu=l(e,"P",{});var tH=r(lu);cz=n(tH,`| Combos       | HF Scheduler | DS Scheduler |
| HF Optimizer | Yes          | Yes          |
| DS Optimizer | No           | Yes          |`),tH.forEach(t),n2=c(e),wa=l(e,"P",{});var hE=r(wa);hz=n(hE,"It is possible to use a non-DeepSpeed optimizer when "),Fm=l(hE,"CODE",{});var aH=r(Fm);fz=n(aH,"offload_optimizer"),aH.forEach(t),dz=n(hE,` is enabled, as long as it has both CPU and
GPU implementation (except LAMB).`),hE.forEach(t),o2=c(e),ru=l(e,"A",{id:!0}),r(ru).forEach(t),l2=c(e),Ms=l(e,"H4",{class:!0});var fE=r(Ms);ba=l(fE,"A",{id:!0,class:!0,href:!0});var nH=r(ba);Vm=l(nH,"SPAN",{});var oH=r(Vm);d(zl.$$.fragment,oH),oH.forEach(t),nH.forEach(t),mz=c(fE),Ym=l(fE,"SPAN",{});var lH=r(Ym);_z=n(lH,"Optimizer"),lH.forEach(t),fE.forEach(t),r2=c(e),Ve=l(e,"P",{});var Dh=r(Ve);vz=n(Dh,`DeepSpeed\u2019s main optimizers are Adam, AdamW, OneBitAdam, and Lamb. These have been thoroughly tested with ZeRO and are
thus recommended to be used. It, however, can import other optimizers from `),Km=l(Dh,"CODE",{});var rH=r(Km);jz=n(rH,"torch"),rH.forEach(t),gz=n(Dh,". The full documentation is "),Dl=l(Dh,"A",{href:!0,rel:!0});var pH=r(Dl);yz=n(pH,"here"),pH.forEach(t),wz=n(Dh,"."),Dh.forEach(t),p2=c(e),q=l(e,"P",{});var D=r(q);bz=n(D,"If you don\u2019t configure the "),Jm=l(D,"CODE",{});var iH=r(Jm);qz=n(iH,"optimizer"),iH.forEach(t),Ez=n(D," entry in the configuration file, the "),pu=l(D,"A",{href:!0});var uH=r(pu);$z=n(uH,"Trainer"),uH.forEach(t),kz=n(D,` will
automatically set it to `),Xm=l(D,"CODE",{});var cH=r(Xm);Pz=n(cH,"AdamW"),cH.forEach(t),zz=n(D,` and will use the supplied values or the defaults for the following command line
arguments: `),Qm=l(D,"CODE",{});var hH=r(Qm);Dz=n(hH,"--learning_rate"),hH.forEach(t),Oz=n(D,", "),e_=l(D,"CODE",{});var fH=r(e_);Tz=n(fH,"--adam_beta1"),fH.forEach(t),Az=n(D,", "),s_=l(D,"CODE",{});var dH=r(s_);Sz=n(dH,"--adam_beta2"),dH.forEach(t),Cz=n(D,", "),t_=l(D,"CODE",{});var mH=r(t_);xz=n(mH,"--adam_epsilon"),mH.forEach(t),Rz=n(D," and "),a_=l(D,"CODE",{});var _H=r(a_);Iz=n(_H,"--weight_decay"),_H.forEach(t),Uz=n(D,"."),D.forEach(t),i2=c(e),Ye=l(e,"P",{});var Oh=r(Ye);Gz=n(Oh,"Here is an example of the auto-configured "),n_=l(Oh,"CODE",{});var vH=r(n_);Lz=n(vH,"optimizer"),vH.forEach(t),Mz=n(Oh," entry for "),o_=l(Oh,"CODE",{});var jH=r(o_);Zz=n(jH,"AdamW"),jH.forEach(t),Nz=n(Oh,":"),Oh.forEach(t),u2=c(e),d(Ol.$$.fragment,e),c2=c(e),iu=l(e,"P",{});var gH=r(iu);Hz=n(gH,`Note that the command line arguments will set the values in the configuration file. This is so that there is one
definitive source of the values and to avoid hard to find errors when for example, the learning rate is set to
different values in different places. Command line rules. The values that get overridden are:`),gH.forEach(t),h2=c(e),te=l(e,"UL",{});var Ln=r(te);Tl=l(Ln,"LI",{});var dE=r(Tl);l_=l(dE,"CODE",{});var yH=r(l_);Bz=n(yH,"lr"),yH.forEach(t),Wz=n(dE," with the value of "),r_=l(dE,"CODE",{});var wH=r(r_);Fz=n(wH,"--learning_rate"),wH.forEach(t),dE.forEach(t),Vz=c(Ln),Al=l(Ln,"LI",{});var mE=r(Al);p_=l(mE,"CODE",{});var bH=r(p_);Yz=n(bH,"betas"),bH.forEach(t),Kz=n(mE," with the value of "),i_=l(mE,"CODE",{});var qH=r(i_);Jz=n(qH,"--adam_beta1 --adam_beta2"),qH.forEach(t),mE.forEach(t),Xz=c(Ln),Sl=l(Ln,"LI",{});var _E=r(Sl);u_=l(_E,"CODE",{});var EH=r(u_);Qz=n(EH,"eps"),EH.forEach(t),eD=n(_E," with the value of "),c_=l(_E,"CODE",{});var $H=r(c_);sD=n($H,"--adam_epsilon"),$H.forEach(t),_E.forEach(t),tD=c(Ln),Cl=l(Ln,"LI",{});var vE=r(Cl);h_=l(vE,"CODE",{});var kH=r(h_);aD=n(kH,"weight_decay"),kH.forEach(t),nD=n(vE," with the value of "),f_=l(vE,"CODE",{});var PH=r(f_);oD=n(PH,"--weight_decay"),PH.forEach(t),vE.forEach(t),Ln.forEach(t),f2=c(e),uu=l(e,"P",{});var zH=r(uu);lD=n(zH,"Therefore please remember to tune the shared hyperparameters on the command line."),zH.forEach(t),d2=c(e),cu=l(e,"P",{});var DH=r(cu);rD=n(DH,"You can also set the values explicitly:"),DH.forEach(t),m2=c(e),d(xl.$$.fragment,e),_2=c(e),qa=l(e,"P",{});var jE=r(qa);pD=n(jE,"But then you\u2019re on your own synchronizing the "),hu=l(jE,"A",{href:!0});var OH=r(hu);iD=n(OH,"Trainer"),OH.forEach(t),uD=n(jE,` command line arguments and the DeepSpeed
configuration.`),jE.forEach(t),v2=c(e),fu=l(e,"P",{});var TH=r(fu);cD=n(TH,"If you want to use another optimizer which is not listed above, you will have to add to the top level configuration."),TH.forEach(t),j2=c(e),d(Rl.$$.fragment,e),g2=c(e),ae=l(e,"P",{});var Mn=r(ae);hD=n(Mn,"Similarly to "),d_=l(Mn,"CODE",{});var AH=r(d_);fD=n(AH,"AdamW"),AH.forEach(t),dD=n(Mn,`, you can configure other officially supported optimizers. Just remember that may have different
config values. e.g. for Adam you will want `),m_=l(Mn,"CODE",{});var SH=r(m_);mD=n(SH,"weight_decay"),SH.forEach(t),_D=n(Mn," around "),__=l(Mn,"CODE",{});var CH=r(__);vD=n(CH,"0.01"),CH.forEach(t),jD=n(Mn,"."),Mn.forEach(t),y2=c(e),du=l(e,"A",{id:!0}),r(du).forEach(t),w2=c(e),Zs=l(e,"H4",{class:!0});var gE=r(Zs);Ea=l(gE,"A",{id:!0,class:!0,href:!0});var xH=r(Ea);v_=l(xH,"SPAN",{});var RH=r(v_);d(Il.$$.fragment,RH),RH.forEach(t),xH.forEach(t),gD=c(gE),j_=l(gE,"SPAN",{});var IH=r(j_);yD=n(IH,"Scheduler"),IH.forEach(t),gE.forEach(t),b2=c(e),x=l(e,"P",{});var ve=r(x);wD=n(ve,"DeepSpeed supports "),g_=l(ve,"CODE",{});var UH=r(g_);bD=n(UH,"LRRangeTest"),UH.forEach(t),qD=n(ve,", "),y_=l(ve,"CODE",{});var GH=r(y_);ED=n(GH,"OneCycle"),GH.forEach(t),$D=n(ve,", "),w_=l(ve,"CODE",{});var LH=r(w_);kD=n(LH,"WarmupLR"),LH.forEach(t),PD=n(ve," and "),b_=l(ve,"CODE",{});var MH=r(b_);zD=n(MH,"WarmupDecayLR"),MH.forEach(t),DD=n(ve,` learning rate schedulers. The full
documentation is `),Ul=l(ve,"A",{href:!0,rel:!0});var ZH=r(Ul);OD=n(ZH,"here"),ZH.forEach(t),TD=n(ve,"."),ve.forEach(t),q2=c(e),mu=l(e,"P",{});var NH=r(mu);AD=n(NH,"Here is where the schedulers overlap between \u{1F917} Transformers and DeepSpeed:"),NH.forEach(t),E2=c(e),$a=l(e,"UL",{});var yE=r($a);Gl=l(yE,"LI",{});var wE=r(Gl);q_=l(wE,"CODE",{});var HH=r(q_);SD=n(HH,"WarmupLR"),HH.forEach(t),CD=n(wE," via "),E_=l(wE,"CODE",{});var BH=r(E_);xD=n(BH,"--lr_scheduler_type constant_with_warmup"),BH.forEach(t),wE.forEach(t),RD=c(yE),Ke=l(yE,"LI",{});var Tp=r(Ke);$_=l(Tp,"CODE",{});var WH=r($_);ID=n(WH,"WarmupDecayLR"),WH.forEach(t),UD=n(Tp," via "),k_=l(Tp,"CODE",{});var FH=r(k_);GD=n(FH,"--lr_scheduler_type linear"),FH.forEach(t),LD=n(Tp,". This is also the default value for "),P_=l(Tp,"CODE",{});var VH=r(P_);MD=n(VH,"--lr_scheduler_type"),VH.forEach(t),ZD=n(Tp,`,
therefore, if you don\u2019t configure the scheduler this is scheduler that will get configured by default.`),Tp.forEach(t),yE.forEach(t),$2=c(e),P=l(e,"P",{});var W=r(P);ND=n(W,"If you don\u2019t configure the "),z_=l(W,"CODE",{});var YH=r(z_);HD=n(YH,"scheduler"),YH.forEach(t),BD=n(W," entry in the configuration file, the "),_u=l(W,"A",{href:!0});var KH=r(_u);WD=n(KH,"Trainer"),KH.forEach(t),FD=n(W,` will use
the values of `),D_=l(W,"CODE",{});var JH=r(D_);VD=n(JH,"--lr_scheduler_type"),JH.forEach(t),YD=n(W,", "),O_=l(W,"CODE",{});var XH=r(O_);KD=n(XH,"--learning_rate"),XH.forEach(t),JD=n(W," and "),T_=l(W,"CODE",{});var QH=r(T_);XD=n(QH,"--warmup_steps"),QH.forEach(t),QD=n(W," or "),A_=l(W,"CODE",{});var eB=r(A_);eO=n(eB,"--warmup_ratio"),eB.forEach(t),sO=n(W,` to configure a
\u{1F917} Transformers version of it.`),W.forEach(t),k2=c(e),Je=l(e,"P",{});var Th=r(Je);tO=n(Th,"Here is an example of the auto-configured "),S_=l(Th,"CODE",{});var sB=r(S_);aO=n(sB,"scheduler"),sB.forEach(t),nO=n(Th," entry for "),C_=l(Th,"CODE",{});var tB=r(C_);oO=n(tB,"WarmupLR"),tB.forEach(t),lO=n(Th,":"),Th.forEach(t),P2=c(e),d(Ll.$$.fragment,e),z2=c(e),Xe=l(e,"P",{});var Ah=r(Xe);rO=n(Ah,"Since "),x_=l(Ah,"EM",{});var aB=r(x_);pO=n(aB,"\u201Cauto\u201D"),aB.forEach(t),iO=n(Ah," is used the "),vu=l(Ah,"A",{href:!0});var nB=r(vu);uO=n(nB,"Trainer"),nB.forEach(t),cO=n(Ah,` arguments will set the correct values in the configuration
file. This is so that there is one definitive source of the values and to avoid hard to find errors when, for example,
the learning rate is set to different values in different places. Command line rules. The values that get set are:`),Ah.forEach(t),D2=c(e),ne=l(e,"UL",{});var Zn=r(ne);ka=l(Zn,"LI",{});var Ij=r(ka);R_=l(Ij,"CODE",{});var oB=r(R_);hO=n(oB,"warmup_min_lr"),oB.forEach(t),fO=n(Ij," with the value of "),I_=l(Ij,"CODE",{});var lB=r(I_);dO=n(lB,"0"),lB.forEach(t),mO=n(Ij,"."),Ij.forEach(t),_O=c(Zn),Pa=l(Zn,"LI",{});var Uj=r(Pa);U_=l(Uj,"CODE",{});var rB=r(U_);vO=n(rB,"warmup_max_lr"),rB.forEach(t),jO=n(Uj," with the value of "),G_=l(Uj,"CODE",{});var pB=r(G_);gO=n(pB,"--learning_rate"),pB.forEach(t),yO=n(Uj,"."),Uj.forEach(t),wO=c(Zn),Qe=l(Zn,"LI",{});var Ap=r(Qe);L_=l(Ap,"CODE",{});var iB=r(L_);bO=n(iB,"warmup_num_steps"),iB.forEach(t),qO=n(Ap," with the value of "),M_=l(Ap,"CODE",{});var uB=r(M_);EO=n(uB,"--warmup_steps"),uB.forEach(t),$O=n(Ap," if provided. Otherwise will use "),Z_=l(Ap,"CODE",{});var cB=r(Z_);kO=n(cB,"--warmup_ratio"),cB.forEach(t),PO=n(Ap,`
multiplied by the number of training steps and rounded up.`),Ap.forEach(t),zO=c(Zn),es=l(Zn,"LI",{});var Sp=r(es);N_=l(Sp,"CODE",{});var hB=r(N_);DO=n(hB,"total_num_steps"),hB.forEach(t),OO=n(Sp," with either the value of "),H_=l(Sp,"CODE",{});var fB=r(H_);TO=n(fB,"--max_steps"),fB.forEach(t),AO=n(Sp,` or if it is not provided, derived automatically at run
time based on the environment and the size of the dataset and other command line arguments (needed for
`),B_=l(Sp,"CODE",{});var dB=r(B_);SO=n(dB,"WarmupDecayLR"),dB.forEach(t),CO=n(Sp,")."),Sp.forEach(t),Zn.forEach(t),O2=c(e),ju=l(e,"P",{});var mB=r(ju);xO=n(mB,"You can, of course, take over any or all of the configuration values and set those yourself:"),mB.forEach(t),T2=c(e),d(Ml.$$.fragment,e),A2=c(e),za=l(e,"P",{});var bE=r(za);RO=n(bE,"But then you\u2019re on your own synchronizing the "),gu=l(bE,"A",{href:!0});var _B=r(gu);IO=n(_B,"Trainer"),_B.forEach(t),UO=n(bE,` command line arguments and the DeepSpeed
configuration.`),bE.forEach(t),S2=c(e),Da=l(e,"P",{});var qE=r(Da);GO=n(qE,"For example, for "),W_=l(qE,"CODE",{});var vB=r(W_);LO=n(vB,"WarmupDecayLR"),vB.forEach(t),MO=n(qE,", you can use the following entry:"),qE.forEach(t),C2=c(e),d(Zl.$$.fragment,e),x2=c(e),B=l(e,"P",{});var vs=r(B);ZO=n(vs,"and "),F_=l(vs,"CODE",{});var jB=r(F_);NO=n(jB,"total_num_steps"),jB.forEach(t),HO=n(vs,", "),V_=l(vs,"CODE",{});var gB=r(V_);BO=n(gB,"warmup_max_lr"),gB.forEach(t),WO=n(vs,", "),Y_=l(vs,"CODE",{});var yB=r(Y_);FO=n(yB,"warmup_num_steps"),yB.forEach(t),VO=n(vs," and "),K_=l(vs,"CODE",{});var wB=r(K_);YO=n(wB,"total_num_steps"),wB.forEach(t),KO=n(vs," will be set at loading time."),vs.forEach(t),R2=c(e),yu=l(e,"A",{id:!0}),r(yu).forEach(t),I2=c(e),Ns=l(e,"H3",{class:!0});var EE=r(Ns);Oa=l(EE,"A",{id:!0,class:!0,href:!0});var bB=r(Oa);J_=l(bB,"SPAN",{});var qB=r(J_);d(Nl.$$.fragment,qB),qB.forEach(t),bB.forEach(t),JO=c(EE),X_=l(EE,"SPAN",{});var EB=r(X_);XO=n(EB,"fp32 Precision"),EB.forEach(t),EE.forEach(t),U2=c(e),wu=l(e,"P",{});var $B=r(wu);QO=n($B,"Deepspeed supports the full fp32 and the fp16 mixed precision."),$B.forEach(t),G2=c(e),Ta=l(e,"P",{});var $E=r(Ta);eT=n($E,`Because of the much reduced memory needs and faster speed one gets with the fp16 mixed precision, the only time you
will want to not use it is when the model you\u2019re using doesn\u2019t behave well under this training mode. Typically this
happens when the model wasn\u2019t pretrained in the fp16 mixed precision (e.g. often this happens with bf16-pretrained
models). Such models may overflow or underflow leading to `),Q_=l($E,"CODE",{});var kB=r(Q_);sT=n(kB,"NaN"),kB.forEach(t),tT=n($E,` loss. If this is your case then you will want to use
the full fp32 mode, by explicitly disabling the otherwise default fp16 mixed precision mode with:`),$E.forEach(t),L2=c(e),d(Hl.$$.fragment,e),M2=c(e),Aa=l(e,"P",{});var kE=r(Aa);aT=n(kE,`If you\u2019re using the Ampere-architecture based GPU, pytorch version 1.7 and higher will automatically switch to using
the much more efficient tf32 format for some operations, but the results will still be in fp32. For details and
benchmarks, please, see `),Bl=l(kE,"A",{href:!0,rel:!0});var PB=r(Bl);nT=n(PB,"TensorFloat-32(TF32) on Ampere devices"),PB.forEach(t),oT=n(kE,`. The document includes
instructions on how to disable this automatic conversion if for some reason you prefer not to use it.`),kE.forEach(t),Z2=c(e),oe=l(e,"P",{});var Nn=r(oe);lT=n(Nn,"With the \u{1F917} Trainer you can use "),e1=l(Nn,"CODE",{});var zB=r(e1);rT=n(zB,"--tf32"),zB.forEach(t),pT=n(Nn," to enable it, or disable it with "),s1=l(Nn,"CODE",{});var DB=r(s1);iT=n(DB,"--tf32 0"),DB.forEach(t),uT=n(Nn," or "),t1=l(Nn,"CODE",{});var OB=r(t1);cT=n(OB,"--no_tf32"),OB.forEach(t),hT=n(Nn,". By default the PyTorch default is used."),Nn.forEach(t),N2=c(e),bu=l(e,"A",{id:!0}),r(bu).forEach(t),H2=c(e),Hs=l(e,"H3",{class:!0});var PE=r(Hs);Sa=l(PE,"A",{id:!0,class:!0,href:!0});var TB=r(Sa);a1=l(TB,"SPAN",{});var AB=r(a1);d(Wl.$$.fragment,AB),AB.forEach(t),TB.forEach(t),fT=c(PE),n1=l(PE,"SPAN",{});var SB=r(n1);dT=n(SB,"Automatic Mixed Precision"),SB.forEach(t),PE.forEach(t),B2=c(e),qu=l(e,"P",{});var CB=r(qu);mT=n(CB,"You can use automatic mixed precision with either a pytorch-like AMP way or the apex-like way:"),CB.forEach(t),W2=c(e),Bs=l(e,"H3",{class:!0});var zE=r(Bs);Ca=l(zE,"A",{id:!0,class:!0,href:!0});var xB=r(Ca);o1=l(xB,"SPAN",{});var RB=r(o1);d(Fl.$$.fragment,RB),RB.forEach(t),xB.forEach(t),_T=c(zE),l1=l(zE,"SPAN",{});var IB=r(l1);vT=n(IB,"fp16"),IB.forEach(t),zE.forEach(t),F2=c(e),Eu=l(e,"P",{});var UB=r(Eu);jT=n(UB,"To configure pytorch AMP-like mode with fp16 (float16) set:"),UB.forEach(t),V2=c(e),d(Vl.$$.fragment,e),Y2=c(e),ss=l(e,"P",{});var Sh=r(ss);gT=n(Sh,"and the "),$u=l(Sh,"A",{href:!0});var GB=r($u);yT=n(GB,"Trainer"),GB.forEach(t),wT=n(Sh,` will automatically enable or disable it based on the value of
`),r1=l(Sh,"CODE",{});var LB=r(r1);bT=n(LB,"args.fp16_backend"),LB.forEach(t),qT=n(Sh,". The rest of config values are up to you."),Sh.forEach(t),K2=c(e),ts=l(e,"P",{});var Ch=r(ts);ET=n(Ch,"This mode gets enabled when "),p1=l(Ch,"CODE",{});var MB=r(p1);$T=n(MB,"--fp16 --fp16_backend amp"),MB.forEach(t),kT=n(Ch," or "),i1=l(Ch,"CODE",{});var ZB=r(i1);PT=n(ZB,"--fp16_full_eval"),ZB.forEach(t),zT=n(Ch," command line args are passed."),Ch.forEach(t),J2=c(e),ku=l(e,"P",{});var NB=r(ku);DT=n(NB,"You can also enable/disable this mode explicitly:"),NB.forEach(t),X2=c(e),d(Yl.$$.fragment,e),Q2=c(e),xa=l(e,"P",{});var DE=r(xa);OT=n(DE,"But then you\u2019re on your own synchronizing the "),Pu=l(DE,"A",{href:!0});var HB=r(Pu);TT=n(HB,"Trainer"),HB.forEach(t),AT=n(DE,` command line arguments and the DeepSpeed
configuration.`),DE.forEach(t),eb=c(e),Ra=l(e,"P",{});var OE=r(Ra);ST=n(OE,"Here is the "),Kl=l(OE,"A",{href:!0,rel:!0});var BB=r(Kl);CT=n(BB,"documentation"),BB.forEach(t),xT=n(OE,"."),OE.forEach(t),sb=c(e),Ws=l(e,"H3",{class:!0});var TE=r(Ws);Ia=l(TE,"A",{id:!0,class:!0,href:!0});var WB=r(Ia);u1=l(WB,"SPAN",{});var FB=r(u1);d(Jl.$$.fragment,FB),FB.forEach(t),WB.forEach(t),RT=c(TE),c1=l(TE,"SPAN",{});var VB=r(c1);IT=n(VB,"bf16"),VB.forEach(t),TE.forEach(t),tb=c(e),zu=l(e,"P",{});var YB=r(zu);UT=n(YB,"If bf16 (bfloat16) is desired instead of fp16 then the following configuration section is to be used:"),YB.forEach(t),ab=c(e),d(Xl.$$.fragment,e),nb=c(e),Du=l(e,"P",{});var KB=r(Du);GT=n(KB,"bf16 has the same dynamic range as fp32 and thus doesn\u2019t require loss scaling."),KB.forEach(t),ob=c(e),as=l(e,"P",{});var xh=r(as);LT=n(xh,"This mode gets enabled when "),h1=l(xh,"CODE",{});var JB=r(h1);MT=n(JB,"--bf16"),JB.forEach(t),ZT=n(xh," or "),f1=l(xh,"CODE",{});var XB=r(f1);NT=n(XB,"--bf16_full_eval"),XB.forEach(t),HT=n(xh," command line args are passed."),xh.forEach(t),lb=c(e),Ou=l(e,"P",{});var QB=r(Ou);BT=n(QB,"You can also enable/disable this mode explicitly:"),QB.forEach(t),rb=c(e),d(Ql.$$.fragment,e),pb=c(e),Fs=l(e,"H3",{class:!0});var AE=r(Fs);Ua=l(AE,"A",{id:!0,class:!0,href:!0});var eW=r(Ua);d1=l(eW,"SPAN",{});var sW=r(d1);d(er.$$.fragment,sW),sW.forEach(t),eW.forEach(t),WT=c(AE),m1=l(AE,"SPAN",{});var tW=r(m1);FT=n(tW,"apex"),tW.forEach(t),AE.forEach(t),ib=c(e),Tu=l(e,"P",{});var aW=r(Tu);VT=n(aW,"To configure apex AMP-like mode set:"),aW.forEach(t),ub=c(e),d(sr.$$.fragment,e),cb=c(e),le=l(e,"P",{});var Hn=r(le);YT=n(Hn,"and the "),Au=l(Hn,"A",{href:!0});var nW=r(Au);KT=n(nW,"Trainer"),nW.forEach(t),JT=n(Hn," will automatically configure it based on the values of "),_1=l(Hn,"CODE",{});var oW=r(_1);XT=n(oW,"args.fp16_backend"),oW.forEach(t),QT=n(Hn,` and
`),v1=l(Hn,"CODE",{});var lW=r(v1);eA=n(lW,"args.fp16_opt_level"),lW.forEach(t),sA=n(Hn,"."),Hn.forEach(t),hb=c(e),Ga=l(e,"P",{});var SE=r(Ga);tA=n(SE,"This mode gets enabled when "),j1=l(SE,"CODE",{});var rW=r(j1);aA=n(rW,"--fp16 --fp16_backend apex --fp16_opt_level 01"),rW.forEach(t),nA=n(SE," command line args are passed."),SE.forEach(t),fb=c(e),Su=l(e,"P",{});var pW=r(Su);oA=n(pW,"You can also configure this mode explicitly:"),pW.forEach(t),db=c(e),d(tr.$$.fragment,e),mb=c(e),La=l(e,"P",{});var CE=r(La);lA=n(CE,"But then you\u2019re on your own synchronizing the "),Cu=l(CE,"A",{href:!0});var iW=r(Cu);rA=n(iW,"Trainer"),iW.forEach(t),pA=n(CE,` command line arguments and the DeepSpeed
configuration.`),CE.forEach(t),_b=c(e),Ma=l(e,"P",{});var xE=r(Ma);iA=n(xE,"Here is the "),ar=l(xE,"A",{href:!0,rel:!0});var uW=r(ar);uA=n(uW,"documentation"),uW.forEach(t),cA=n(xE,"."),xE.forEach(t),vb=c(e),xu=l(e,"A",{id:!0}),r(xu).forEach(t),jb=c(e),Vs=l(e,"H3",{class:!0});var RE=r(Vs);Za=l(RE,"A",{id:!0,class:!0,href:!0});var cW=r(Za);g1=l(cW,"SPAN",{});var hW=r(g1);d(nr.$$.fragment,hW),hW.forEach(t),cW.forEach(t),hA=c(RE),y1=l(RE,"SPAN",{});var fW=r(y1);fA=n(fW,"Batch Size"),fW.forEach(t),RE.forEach(t),gb=c(e),Ru=l(e,"P",{});var dW=r(Ru);dA=n(dW,"To configure batch size, use:"),dW.forEach(t),yb=c(e),d(or.$$.fragment,e),wb=c(e),R=l(e,"P",{});var je=r(R);mA=n(je,"and the "),Iu=l(je,"A",{href:!0});var mW=r(Iu);_A=n(mW,"Trainer"),mW.forEach(t),vA=n(je," will automatically set "),w1=l(je,"CODE",{});var _W=r(w1);jA=n(_W,"train_micro_batch_size_per_gpu"),_W.forEach(t),gA=n(je,` to the value of
`),b1=l(je,"CODE",{});var vW=r(b1);yA=n(vW,"args.per_device_train_batch_size"),vW.forEach(t),wA=n(je," and "),q1=l(je,"CODE",{});var jW=r(q1);bA=n(jW,"train_batch_size"),jW.forEach(t),qA=n(je," to "),E1=l(je,"CODE",{});var gW=r(E1);EA=n(gW,"args.world_size * args.per_device_train_batch_size * args.gradient_accumulation_steps"),gW.forEach(t),$A=n(je,"."),je.forEach(t),bb=c(e),Uu=l(e,"P",{});var yW=r(Uu);kA=n(yW,"You can also set the values explicitly:"),yW.forEach(t),qb=c(e),d(lr.$$.fragment,e),Eb=c(e),Na=l(e,"P",{});var IE=r(Na);PA=n(IE,"But then you\u2019re on your own synchronizing the "),Gu=l(IE,"A",{href:!0});var wW=r(Gu);zA=n(wW,"Trainer"),wW.forEach(t),DA=n(IE,` command line arguments and the DeepSpeed
configuration.`),IE.forEach(t),$b=c(e),Lu=l(e,"A",{id:!0}),r(Lu).forEach(t),kb=c(e),Ys=l(e,"H3",{class:!0});var UE=r(Ys);Ha=l(UE,"A",{id:!0,class:!0,href:!0});var bW=r(Ha);$1=l(bW,"SPAN",{});var qW=r($1);d(rr.$$.fragment,qW),qW.forEach(t),bW.forEach(t),OA=c(UE),k1=l(UE,"SPAN",{});var EW=r(k1);TA=n(EW,"Gradient Accumulation"),EW.forEach(t),UE.forEach(t),Pb=c(e),Mu=l(e,"P",{});var $W=r(Mu);AA=n($W,"To configure gradient accumulation set:"),$W.forEach(t),zb=c(e),d(pr.$$.fragment,e),Db=c(e),ns=l(e,"P",{});var Rh=r(ns);SA=n(Rh,"and the "),Zu=l(Rh,"A",{href:!0});var kW=r(Zu);CA=n(kW,"Trainer"),kW.forEach(t),xA=n(Rh," will automatically set it to the value of "),P1=l(Rh,"CODE",{});var PW=r(P1);RA=n(PW,"args.gradient_accumulation_steps"),PW.forEach(t),IA=n(Rh,"."),Rh.forEach(t),Ob=c(e),Nu=l(e,"P",{});var zW=r(Nu);UA=n(zW,"You can also set the value explicitly:"),zW.forEach(t),Tb=c(e),d(ir.$$.fragment,e),Ab=c(e),Ba=l(e,"P",{});var GE=r(Ba);GA=n(GE,"But then you\u2019re on your own synchronizing the "),Hu=l(GE,"A",{href:!0});var DW=r(Hu);LA=n(DW,"Trainer"),DW.forEach(t),MA=n(GE,` command line arguments and the DeepSpeed
configuration.`),GE.forEach(t),Sb=c(e),Bu=l(e,"A",{id:!0}),r(Bu).forEach(t),Cb=c(e),Ks=l(e,"H3",{class:!0});var LE=r(Ks);Wa=l(LE,"A",{id:!0,class:!0,href:!0});var OW=r(Wa);z1=l(OW,"SPAN",{});var TW=r(z1);d(ur.$$.fragment,TW),TW.forEach(t),OW.forEach(t),ZA=c(LE),D1=l(LE,"SPAN",{});var AW=r(D1);NA=n(AW,"Gradient Clipping"),AW.forEach(t),LE.forEach(t),xb=c(e),Wu=l(e,"P",{});var SW=r(Wu);HA=n(SW,"To configure gradient gradient clipping set:"),SW.forEach(t),Rb=c(e),d(cr.$$.fragment,e),Ib=c(e),os=l(e,"P",{});var Ih=r(os);BA=n(Ih,"and the "),Fu=l(Ih,"A",{href:!0});var CW=r(Fu);WA=n(CW,"Trainer"),CW.forEach(t),FA=n(Ih," will automatically set it to the value of "),O1=l(Ih,"CODE",{});var xW=r(O1);VA=n(xW,"args.max_grad_norm"),xW.forEach(t),YA=n(Ih,"."),Ih.forEach(t),Ub=c(e),Vu=l(e,"P",{});var RW=r(Vu);KA=n(RW,"You can also set the value explicitly:"),RW.forEach(t),Gb=c(e),d(hr.$$.fragment,e),Lb=c(e),Fa=l(e,"P",{});var ME=r(Fa);JA=n(ME,"But then you\u2019re on your own synchronizing the "),Yu=l(ME,"A",{href:!0});var IW=r(Yu);XA=n(IW,"Trainer"),IW.forEach(t),QA=n(ME,` command line arguments and the DeepSpeed
configuration.`),ME.forEach(t),Mb=c(e),Ku=l(e,"A",{id:!0}),r(Ku).forEach(t),Zb=c(e),Js=l(e,"H3",{class:!0});var ZE=r(Js);Va=l(ZE,"A",{id:!0,class:!0,href:!0});var UW=r(Va);T1=l(UW,"SPAN",{});var GW=r(T1);d(fr.$$.fragment,GW),GW.forEach(t),UW.forEach(t),eS=c(ZE),A1=l(ZE,"SPAN",{});var LW=r(A1);sS=n(LW,"Getting The Model Weights Out"),LW.forEach(t),ZE.forEach(t),Nb=c(e),Ya=l(e,"P",{});var NE=r(Ya);tS=n(NE,`As long as you continue training and resuming using DeepSpeed you don\u2019t need to worry about anything. DeepSpeed stores
fp32 master weights in its custom checkpoint optimizer files, which are `),S1=l(NE,"CODE",{});var MW=r(S1);aS=n(MW,"global_step*/*optim_states.pt"),MW.forEach(t),nS=n(NE,` (this is glob
pattern), and are saved under the normal checkpoint.`),NE.forEach(t),Hb=c(e),Ju=l(e,"P",{});var ZW=r(Ju);C1=l(ZW,"STRONG",{});var NW=r(C1);oS=n(NW,"FP16 Weights:"),NW.forEach(t),ZW.forEach(t),Bb=c(e),Ka=l(e,"P",{});var HE=r(Ka);lS=n(HE,"When a model is saved under ZeRO-2, you end up having the normal "),x1=l(HE,"CODE",{});var HW=r(x1);rS=n(HW,"pytorch_model.bin"),HW.forEach(t),pS=n(HE,` file with the model weights, but
they are only the fp16 version of the weights.`),HE.forEach(t),Wb=c(e),z=l(e,"P",{});var F=r(z);iS=n(F,`Under ZeRO-3, things are much more complicated, since the model weights are partitioned out over multiple GPUs,
therefore `),R1=l(F,"CODE",{});var BW=r(R1);uS=n(BW,'"stage3_gather_16bit_weights_on_model_save": true'),BW.forEach(t),cS=n(F," is required to get the "),I1=l(F,"CODE",{});var WW=r(I1);hS=n(WW,"Trainer"),WW.forEach(t),fS=n(F,` to save the fp16
version of the weights. If this setting is `),U1=l(F,"CODE",{});var FW=r(U1);dS=n(FW,"False"),FW.forEach(t),mS=c(F),G1=l(F,"CODE",{});var VW=r(G1);_S=n(VW,"pytorch_model.bin"),VW.forEach(t),vS=n(F," won\u2019t be created. This is because by default DeepSpeed\u2019s "),L1=l(F,"CODE",{});var YW=r(L1);jS=n(YW,"state_dict"),YW.forEach(t),gS=n(F," contains a placeholder and not the real weights. If we were to save this "),M1=l(F,"CODE",{});var KW=r(M1);yS=n(KW,"state_dict"),KW.forEach(t),wS=n(F," it won\u2019t be possible to load it back."),F.forEach(t),Fb=c(e),d(dr.$$.fragment,e),Vb=c(e),Xu=l(e,"P",{});var JW=r(Xu);Z1=l(JW,"STRONG",{});var XW=r(Z1);bS=n(XW,"FP32 Weights:"),XW.forEach(t),JW.forEach(t),Yb=c(e),Ja=l(e,"P",{});var BE=r(Ja);qS=n(BE,`While the fp16 weights are fine for resuming training, if you finished finetuning your model and want to upload it to
the `),mr=l(BE,"A",{href:!0,rel:!0});var QW=r(mr);ES=n(QW,"models hub"),QW.forEach(t),$S=n(BE,` or pass it to someone else you most likely will want to get the fp32
weights. This ideally shouldn\u2019t be done during training since this is a process that requires a lot of memory, and
therefore best to be performed offline after the training is complete. But if desired and you have plenty of free CPU
memory it can be done in the same training script. The following sections will discuss both approaches.`),BE.forEach(t),Kb=c(e),Qu=l(e,"P",{});var eF=r(Qu);N1=l(eF,"STRONG",{});var sF=r(N1);kS=n(sF,"Live FP32 Weights Recovery:"),sF.forEach(t),eF.forEach(t),Jb=c(e),ec=l(e,"P",{});var tF=r(ec);PS=n(tF,"This approach may not work if you model is large and you have little free CPU memory left, at the end of the training."),tF.forEach(t),Xb=c(e),sc=l(e,"P",{});var aF=r(sc);zS=n(aF,"If you have saved at least one checkpoint, and you want to use the latest one, you can do the following:"),aF.forEach(t),Qb=c(e),d(_r.$$.fragment,e),e3=c(e),ls=l(e,"P",{});var Uh=r(ls);DS=n(Uh,"If you\u2019re using the "),H1=l(Uh,"CODE",{});var nF=r(H1);OS=n(nF,"--load_best_model_at_end"),nF.forEach(t),TS=n(Uh," class:"),B1=l(Uh,"EM",{});var oF=r(B1);AS=n(oF,"~transformers.TrainingArguments"),oF.forEach(t),SS=n(Uh,` argument (to track the best
checkpoint), then you can finish the training by first saving the final model explicitly and then do the same as above:`),Uh.forEach(t),s3=c(e),d(vr.$$.fragment,e),t3=c(e),d(Xa.$$.fragment,e),a3=c(e),Qa=l(e,"P",{});var WE=r(Qa);CS=n(WE,"Of course, you don\u2019t have to use class:"),W1=l(WE,"EM",{});var lF=r(W1);xS=n(lF,"~transformers.Trainer"),lF.forEach(t),RS=n(WE,` and you can adjust the examples above to your own
trainer.`),WE.forEach(t),n3=c(e),en=l(e,"P",{});var FE=r(en);IS=n(FE,"If for some reason you want more refinement, you can also extract the fp32 "),F1=l(FE,"CODE",{});var rF=r(F1);US=n(rF,"state_dict"),rF.forEach(t),GS=n(FE,` of the weights and apply
these yourself as is shown in the following example:`),FE.forEach(t),o3=c(e),d(jr.$$.fragment,e),l3=c(e),tc=l(e,"P",{});var pF=r(tc);V1=l(pF,"STRONG",{});var iF=r(V1);LS=n(iF,"Offline FP32 Weights Recovery:"),iF.forEach(t),pF.forEach(t),r3=c(e),rs=l(e,"P",{});var Gh=r(rs);MS=n(Gh,"DeepSpeed creates a special conversion script "),Y1=l(Gh,"CODE",{});var uF=r(Y1);ZS=n(uF,"zero_to_fp32.py"),uF.forEach(t),NS=n(Gh,` which it places in the top-level of the checkpoint
folder. Using this script you can extract the weights at any point. The script is standalone and you no longer need to
have the configuration file or a `),K1=l(Gh,"CODE",{});var cF=r(K1);HS=n(cF,"Trainer"),cF.forEach(t),BS=n(Gh," to do the extraction."),Gh.forEach(t),p3=c(e),ac=l(e,"P",{});var hF=r(ac);WS=n(hF,"Let\u2019s say your checkpoint folder looks like this:"),hF.forEach(t),i3=c(e),d(gr.$$.fragment,e),u3=c(e),sn=l(e,"P",{});var VE=r(sn);FS=n(VE,"In this example there is just one DeepSpeed checkpoint sub-folder "),J1=l(VE,"EM",{});var fF=r(J1);VS=n(fF,"global_step1"),fF.forEach(t),YS=n(VE,`. Therefore to reconstruct the fp32
weights just run:`),VE.forEach(t),c3=c(e),d(yr.$$.fragment,e),h3=c(e),tn=l(e,"P",{});var YE=r(tn);KS=n(YE,"This is it. "),X1=l(YE,"CODE",{});var dF=r(X1);JS=n(dF,"pytorch_model.bin"),dF.forEach(t),XS=n(YE," will now contain the full fp32 model weights consolidated from multiple GPUs."),YE.forEach(t),f3=c(e),nc=l(e,"P",{});var mF=r(nc);QS=n(mF,"The script will automatically be able to handle either a ZeRO-2 or ZeRO-3 checkpoint."),mF.forEach(t),d3=c(e),wr=l(e,"P",{});var cG=r(wr);Q1=l(cG,"CODE",{});var _F=r(Q1);eC=n(_F,"python zero_to_fp32.py -h"),_F.forEach(t),sC=n(cG," will give you usage details."),cG.forEach(t),m3=c(e),ps=l(e,"P",{});var Lh=r(ps);tC=n(Lh,"The script will auto-discover the deepspeed sub-folder using the contents of the file "),ev=l(Lh,"CODE",{});var vF=r(ev);aC=n(vF,"latest"),vF.forEach(t),nC=n(Lh,`, which in the current
example will contain `),sv=l(Lh,"CODE",{});var jF=r(sv);oC=n(jF,"global_step1"),jF.forEach(t),lC=n(Lh,"."),Lh.forEach(t),_3=c(e),oc=l(e,"P",{});var gF=r(oc);rC=n(gF,"Note: currently the script requires 2x general RAM of the final fp32 model weights."),gF.forEach(t),v3=c(e),Xs=l(e,"H3",{class:!0});var KE=r(Xs);an=l(KE,"A",{id:!0,class:!0,href:!0});var yF=r(an);tv=l(yF,"SPAN",{});var wF=r(tv);d(br.$$.fragment,wF),wF.forEach(t),yF.forEach(t),pC=c(KE),av=l(KE,"SPAN",{});var bF=r(av);iC=n(bF,"ZeRO-3 and Infinity Nuances"),bF.forEach(t),KE.forEach(t),j3=c(e),lc=l(e,"P",{});var qF=r(lc);uC=n(qF,"ZeRO-3 is quite different from ZeRO-2 because of its param sharding feature."),qF.forEach(t),g3=c(e),rc=l(e,"P",{});var EF=r(rc);cC=n(EF,"ZeRO-Infinity further extends ZeRO-3 to support NVMe memory and multiple other speed and scalability improvements."),EF.forEach(t),y3=c(e),pc=l(e,"P",{});var $F=r(pc);hC=n($F,`While all the efforts were made for things to just work without needing any special changes to your models, in certain
circumstances you may find the following information to be needed.`),$F.forEach(t),w3=c(e),Qs=l(e,"H4",{class:!0});var JE=r(Qs);nn=l(JE,"A",{id:!0,class:!0,href:!0});var kF=r(nn);nv=l(kF,"SPAN",{});var PF=r(nv);d(qr.$$.fragment,PF),PF.forEach(t),kF.forEach(t),fC=c(JE),ov=l(JE,"SPAN",{});var zF=r(ov);dC=n(zF,"Constructing Massive Models"),zF.forEach(t),JE.forEach(t),b3=c(e),on=l(e,"P",{});var XE=r(on);mC=n(XE,`DeepSpeed/ZeRO-3 can handle models with Trillions of parameters which may not fit onto the existing RAM. In such cases,
but also if you want the initialization to happen much faster, initialize the model using `),lv=l(XE,"EM",{});var DF=r(lv);_C=n(DF,"deepspeed.zero.Init()"),DF.forEach(t),vC=n(XE,`
context manager (which is also a function decorator), like so:`),XE.forEach(t),q3=c(e),d(Er.$$.fragment,e),E3=c(e),ic=l(e,"P",{});var OF=r(ic);jC=n(OF,"As you can see this gives you a randomly initialized model."),OF.forEach(t),$3=c(e),k=l(e,"P",{});var G=r(k);gC=n(G,"If you want to use a pretrained model, "),rv=l(G,"CODE",{});var TF=r(rv);yC=n(TF,"model_class.from_pretrained"),TF.forEach(t),wC=n(G,` will activate this feature as long as
`),pv=l(G,"CODE",{});var AF=r(pv);bC=n(AF,"is_deepspeed_zero3_enabled()"),AF.forEach(t),qC=n(G," returns "),iv=l(G,"CODE",{});var SF=r(iv);EC=n(SF,"True"),SF.forEach(t),$C=n(G,`, which currently is setup by the
`),uc=l(G,"A",{href:!0});var CF=r(uc);kC=n(CF,"TrainingArguments"),CF.forEach(t),PC=n(G,` object if the passed DeepSpeed configuration file contains ZeRO-3 config
section. Thus you must create the `),cc=l(G,"A",{href:!0});var xF=r(cc);zC=n(xF,"TrainingArguments"),xF.forEach(t),DC=n(G," object "),uv=l(G,"STRONG",{});var RF=r(uv);OC=n(RF,"before"),RF.forEach(t),TC=n(G,` calling
`),cv=l(G,"CODE",{});var IF=r(cv);AC=n(IF,"from_pretrained"),IF.forEach(t),SC=n(G,". Here is an example of a possible sequence:"),G.forEach(t),k3=c(e),d($r.$$.fragment,e),P3=c(e),ln=l(e,"P",{});var QE=r(ln);CC=n(QE,"If you\u2019re using the official example scripts and your command line arguments include "),hv=l(QE,"CODE",{});var UF=r(hv);xC=n(UF,"--deepspeed ds_config.json"),UF.forEach(t),RC=n(QE,`
with ZeRO-3 config enabled, then everything is already done for you, since this is how example scripts are written.`),QE.forEach(t),z3=c(e),hc=l(e,"P",{});var GF=r(hc);IC=n(GF,"Note: If the fp16 weights of the model can\u2019t fit onto the memory of a single GPU this feature must be used."),GF.forEach(t),D3=c(e),rn=l(e,"P",{});var e4=r(rn);UC=n(e4,"For full details on this method and other related features please refer to "),kr=l(e4,"A",{href:!0,rel:!0});var LF=r(kr);GC=n(LF,"Constructing Massive Models"),LF.forEach(t),LC=n(e4,"."),e4.forEach(t),O3=c(e),re=l(e,"P",{});var Bn=r(re);MC=n(Bn,"Also when loading fp16-pretrained models, you will want to tell "),fv=l(Bn,"CODE",{});var MF=r(fv);ZC=n(MF,"from_pretrained"),MF.forEach(t),NC=n(Bn,` to use
`),dv=l(Bn,"CODE",{});var ZF=r(dv);HC=n(ZF,"torch_dtype=torch.float16"),ZF.forEach(t),BC=n(Bn,". For details, please, see "),fc=l(Bn,"A",{href:!0});var NF=r(fc);WC=n(NF,"from_pretrained-torch-dtype"),NF.forEach(t),FC=n(Bn,"."),Bn.forEach(t),T3=c(e),et=l(e,"H4",{class:!0});var s4=r(et);pn=l(s4,"A",{id:!0,class:!0,href:!0});var HF=r(pn);mv=l(HF,"SPAN",{});var BF=r(mv);d(Pr.$$.fragment,BF),BF.forEach(t),HF.forEach(t),VC=c(s4),_v=l(s4,"SPAN",{});var WF=r(_v);YC=n(WF,"Gathering Parameters"),WF.forEach(t),s4.forEach(t),A3=c(e),zr=l(e,"P",{});var hG=r(zr);KC=n(hG,`Under ZeRO-3 on multiple GPUs no single GPU has all the parameters unless it\u2019s the parameters for the currently
executing layer. So if you need to access all parameters from all layers at once there is a specific method to do it.
Most likely you won\u2019t need it, but if you do please refer to `),Dr=l(hG,"A",{href:!0,rel:!0});var FF=r(Dr);JC=n(FF,"Gathering Parameters"),FF.forEach(t),hG.forEach(t),S3=c(e),un=l(e,"P",{});var t4=r(un);XC=n(t4,`We do however use it internally in several places, one such example is when loading pretrained model weights in
`),vv=l(t4,"CODE",{});var VF=r(vv);QC=n(VF,"from_pretrained"),VF.forEach(t),ex=n(t4,`. We load one layer at a time and immediately partition it to all participating GPUs, as for very
large models it won\u2019t be possible to load it on one GPU and then spread it out to multiple GPUs, due to memory
limitations.`),t4.forEach(t),C3=c(e),dc=l(e,"P",{});var YF=r(dc);sx=n(YF,"Also under ZeRO-3, if you write your own code and run into a model parameter weight that looks like:"),YF.forEach(t),x3=c(e),d(Or.$$.fragment,e),R3=c(e),is=l(e,"P",{});var Mh=r(is);tx=n(Mh,"stress on "),jv=l(Mh,"CODE",{});var KF=r(jv);ax=n(KF,"tensor([1.])"),KF.forEach(t),nx=n(Mh,", or if you get an error where it says the parameter is of size "),gv=l(Mh,"CODE",{});var JF=r(gv);ox=n(JF,"1"),JF.forEach(t),lx=n(Mh,`, instead of some much
larger multi-dimensional shape, this means that the parameter is partitioned and what you see is a ZeRO-3 placeholder.`),Mh.forEach(t),I3=c(e),mc=l(e,"A",{id:!0}),r(mc).forEach(t),U3=c(e),st=l(e,"H3",{class:!0});var a4=r(st);cn=l(a4,"A",{id:!0,class:!0,href:!0});var XF=r(cn);yv=l(XF,"SPAN",{});var QF=r(yv);d(Tr.$$.fragment,QF),QF.forEach(t),XF.forEach(t),rx=c(a4),wv=l(a4,"SPAN",{});var eV=r(wv);px=n(eV,"ZeRO Inference"),eV.forEach(t),a4.forEach(t),G3=c(e),_c=l(e,"P",{});var sV=r(_c);ix=n(sV,`ZeRO Inference uses the same config as ZeRO-3 Training. You just don\u2019t need the optimizer and scheduler sections. In
fact you can leave these in the config file if you want to share the same one with the training. They will just be
ignored.`),sV.forEach(t),L3=c(e),hn=l(e,"P",{});var n4=r(hn);ux=n(n4,"Otherwise you just need to pass the usual "),vc=l(n4,"A",{href:!0});var tV=r(vc);cx=n(tV,"TrainingArguments"),tV.forEach(t),hx=n(n4," arguments. For example:"),n4.forEach(t),M3=c(e),d(Ar.$$.fragment,e),Z3=c(e),jc=l(e,"P",{});var aV=r(jc);fx=n(aV,`The only important thing is that you need to use a ZeRO-3 configuration, since ZeRO-2 provides no benefit whatsoever
for the inference as only ZeRO-3 performs sharding of parameters, whereas ZeRO-1 shards gradients and optimizer states.`),aV.forEach(t),N3=c(e),fn=l(e,"P",{});var o4=r(fn);dx=n(o4,"Here is an example of running "),bv=l(o4,"CODE",{});var nV=r(bv);mx=n(nV,"run_translation.py"),nV.forEach(t),_x=n(o4," under DeepSpeed deploying all available GPUs:"),o4.forEach(t),H3=c(e),d(Sr.$$.fragment,e),B3=c(e),gc=l(e,"P",{});var oV=r(gc);vx=n(oV,`Since for inference there is no need for additional large memory used by the optimizer states and the gradients you
should be able to fit much larger batches and/or sequence length onto the same hardware.`),oV.forEach(t),W3=c(e),yc=l(e,"P",{});var lV=r(yc);jx=n(lV,`Additionally DeepSpeed is currently developing a related product called Deepspeed-Inference which has no relationship
to the ZeRO technology, but instead uses tensor parallelism to scale models that can\u2019t fit onto a single GPU. This is a
work in progress and we will provide the integration once that product is complete.`),lV.forEach(t),F3=c(e),tt=l(e,"H3",{class:!0});var l4=r(tt);dn=l(l4,"A",{id:!0,class:!0,href:!0});var rV=r(dn);qv=l(rV,"SPAN",{});var pV=r(qv);d(Cr.$$.fragment,pV),pV.forEach(t),rV.forEach(t),gx=c(l4),Ev=l(l4,"SPAN",{});var iV=r(Ev);yx=n(iV,"Memory Requirements"),iV.forEach(t),l4.forEach(t),V3=c(e),wc=l(e,"P",{});var uV=r(wc);wx=n(uV,"Since Deepspeed ZeRO can offload memory to CPU (and NVMe) the framework provides utils that allow one to tell how much CPU and GPU memory will be needed depending on the number of GPUs being used."),uV.forEach(t),Y3=c(e),bc=l(e,"P",{});var cV=r(bc);bx=n(cV,"Let\u2019s estimate how much memory is needed to finetune \u201Cbigscience/T0_3B\u201D on a single GPU:"),cV.forEach(t),K3=c(e),d(xr.$$.fragment,e),J3=c(e),qc=l(e,"P",{});var hV=r(qc);qx=n(hV,"So you can fit it on a single 80GB GPU and no CPU offload, or a tiny 8GB GPU but then need ~60GB of CPU memory. (Remember this is just the memory for params, optimizer states and gradients - you will need a bit more memory for cuda kernels, activations and temps.)"),hV.forEach(t),X3=c(e),Ec=l(e,"P",{});var fV=r(Ec);Ex=n(fV,"Then it\u2019s a tradeoff of cost vs speed. It\u2019ll be cheaper to buy/rent a smaller GPU (or less GPUs since you can use multiple GPUs with Deepspeed ZeRO. But then it\u2019ll be slower, so even if you don\u2019t care about how fast something will be done, the slowdown has a direct impact on the duration of using the GPU and thus bigger cost. So experiment and compare which works the best."),fV.forEach(t),Q3=c(e),$c=l(e,"P",{});var dV=r($c);$x=n(dV,"If you have enough GPU memory make sure to disable the CPU/NVMe offload as it\u2019ll make everything faster."),dV.forEach(t),e0=c(e),kc=l(e,"P",{});var mV=r(kc);kx=n(mV,"For example, let\u2019s repeat the same for 2 GPUs:"),mV.forEach(t),s0=c(e),d(Rr.$$.fragment,e),t0=c(e),Pc=l(e,"P",{});var _V=r(Pc);Px=n(_V,"So here you\u2019d want 2x 32GB GPUs or higher without offloading to CPU."),_V.forEach(t),a0=c(e),mn=l(e,"P",{});var r4=r(mn);zx=n(r4,"For full information please see "),Ir=l(r4,"A",{href:!0,rel:!0});var vV=r(Ir);Dx=n(vV,"memory estimators"),vV.forEach(t),Ox=n(r4,"."),r4.forEach(t),n0=c(e),at=l(e,"H3",{class:!0});var p4=r(at);_n=l(p4,"A",{id:!0,class:!0,href:!0});var jV=r(_n);$v=l(jV,"SPAN",{});var gV=r($v);d(Ur.$$.fragment,gV),gV.forEach(t),jV.forEach(t),Tx=c(p4),kv=l(p4,"SPAN",{});var yV=r(kv);Ax=n(yV,"Filing Issues"),yV.forEach(t),p4.forEach(t),o0=c(e),zc=l(e,"P",{});var wV=r(zc);Sx=n(wV,"Here is how to file an issue so that we could quickly get to the bottom of the issue and help you to unblock your work."),wV.forEach(t),l0=c(e),Dc=l(e,"P",{});var bV=r(Dc);Cx=n(bV,"In your report please always include:"),bV.forEach(t),r0=c(e),I=l(e,"OL",{});var ge=r(I);Pv=l(ge,"LI",{});var qV=r(Pv);zv=l(qV,"P",{});var EV=r(zv);xx=n(EV,"the full Deepspeed config file in the report"),EV.forEach(t),qV.forEach(t),Rx=c(ge),Dv=l(ge,"LI",{});var $V=r(Dv);$e=l($V,"P",{});var Wn=r($e);Ix=n(Wn,"either the command line arguments if you were using the "),Oc=l(Wn,"A",{href:!0});var kV=r(Oc);Ux=n(kV,"Trainer"),kV.forEach(t),Gx=n(Wn,` or
`),Tc=l(Wn,"A",{href:!0});var PV=r(Tc);Lx=n(PV,"TrainingArguments"),PV.forEach(t),Mx=n(Wn,` arguments if you were scripting the Trainer setup yourself. Please do not
dump the `),Ac=l(Wn,"A",{href:!0});var zV=r(Ac);Zx=n(zV,"TrainingArguments"),zV.forEach(t),Nx=n(Wn," as it has dozens of entries that are irrelevant."),Wn.forEach(t),$V.forEach(t),Hx=c(ge),Gr=l(ge,"LI",{});var i4=r(Gr);Ov=l(i4,"P",{});var DV=r(Ov);Bx=n(DV,"Output of:"),DV.forEach(t),Wx=c(i4),d(Lr.$$.fragment,i4),i4.forEach(t),Fx=c(ge),Tv=l(ge,"LI",{});var OV=r(Tv);Mr=l(OV,"P",{});var u4=r(Mr);Vx=n(u4,`If possible include a link to a Google Colab notebook that we can reproduce the problem with. You can use this
`),Zr=l(u4,"A",{href:!0,rel:!0});var TV=r(Zr);Yx=n(TV,"notebook"),TV.forEach(t),Kx=n(u4,` as
a starting point.`),u4.forEach(t),OV.forEach(t),Jx=c(ge),Av=l(ge,"LI",{});var AV=r(Av);Sv=l(AV,"P",{});var SV=r(Sv);Xx=n(SV,"Unless it\u2019s impossible please always use a standard dataset that we can use and not something custom."),SV.forEach(t),AV.forEach(t),Qx=c(ge),Cv=l(ge,"LI",{});var CV=r(Cv);Nr=l(CV,"P",{});var c4=r(Nr);eR=n(c4,"If possible try to use one of the existing "),Hr=l(c4,"A",{href:!0,rel:!0});var xV=r(Hr);sR=n(xV,"examples"),xV.forEach(t),tR=n(c4," to reproduce the problem with."),c4.forEach(t),CV.forEach(t),ge.forEach(t),p0=c(e),Sc=l(e,"P",{});var RV=r(Sc);aR=n(RV,"Things to consider:"),RV.forEach(t),i0=c(e),vn=l(e,"UL",{});var h4=r(vn);nt=l(h4,"LI",{});var Zh=r(nt);xv=l(Zh,"P",{});var IV=r(xv);nR=n(IV,"Deepspeed is often not the cause of the problem."),IV.forEach(t),oR=c(Zh),Rv=l(Zh,"P",{});var UV=r(Rv);lR=n(UV,`Some of the filed issues proved to be Deepspeed-unrelated. That is once Deepspeed was removed from the setup, the
problem was still there.`),UV.forEach(t),rR=c(Zh),Iv=l(Zh,"P",{});var GV=r(Iv);pR=n(GV,`Therefore, if it\u2019s not absolutely obvious it\u2019s a DeepSpeed-related problem, as in you can see that there is an
exception and you can see that DeepSpeed modules are involved, first re-test your setup without DeepSpeed in it.
And only if the problem persists then do mentioned Deepspeed and supply all the required details.`),GV.forEach(t),Zh.forEach(t),iR=c(h4),Uv=l(h4,"LI",{});var LV=r(Uv);Br=l(LV,"P",{});var f4=r(Br);uR=n(f4,`If it\u2019s clear to you that the issue is in the DeepSpeed core and not the integration part, please file the Issue
directly with `),Wr=l(f4,"A",{href:!0,rel:!0});var MV=r(Wr);cR=n(MV,"Deepspeed"),MV.forEach(t),hR=n(f4,`. If you aren\u2019t sure, please do not worry,
either Issue tracker will do, we will figure it out once you posted it and redirect you to another Issue tracker if
need be.`),f4.forEach(t),LV.forEach(t),h4.forEach(t),u0=c(e),ot=l(e,"H3",{class:!0});var d4=r(ot);jn=l(d4,"A",{id:!0,class:!0,href:!0});var ZV=r(jn);Gv=l(ZV,"SPAN",{});var NV=r(Gv);d(Fr.$$.fragment,NV),NV.forEach(t),ZV.forEach(t),fR=c(d4),Lv=l(d4,"SPAN",{});var HV=r(Lv);dR=n(HV,"Troubleshooting"),HV.forEach(t),d4.forEach(t),c0=c(e),lt=l(e,"H4",{class:!0});var m4=r(lt);gn=l(m4,"A",{id:!0,class:!0,href:!0});var BV=r(gn);Mv=l(BV,"SPAN",{});var WV=r(Mv);d(Vr.$$.fragment,WV),WV.forEach(t),BV.forEach(t),mR=c(m4),Yr=l(m4,"SPAN",{});var _4=r(Yr);_R=n(_4,"the "),Zv=l(_4,"CODE",{});var FV=r(Zv);vR=n(FV,"deepspeed"),FV.forEach(t),jR=n(_4," process gets killed at startup without a traceback"),_4.forEach(t),m4.forEach(t),h0=c(e),U=l(e,"P",{});var ye=r(U);gR=n(ye,"If the "),Nv=l(ye,"CODE",{});var VV=r(Nv);yR=n(VV,"deepspeed"),VV.forEach(t),wR=n(ye,` process gets killed at launch time without a traceback, that usually means that the program tried
to allocate more CPU memory than your system has or your process is allowed to allocate and the OS kernel killed that
process. This is because your configuration file most likely has either `),Hv=l(ye,"CODE",{});var YV=r(Hv);bR=n(YV,"offload_optimizer"),YV.forEach(t),qR=n(ye," or "),Bv=l(ye,"CODE",{});var KV=r(Bv);ER=n(KV,"offload_param"),KV.forEach(t),$R=n(ye,` or
both configured to offload to `),Wv=l(ye,"CODE",{});var JV=r(Wv);kR=n(JV,"cpu"),JV.forEach(t),PR=n(ye,`. If you have NVMe, experiment with offloading to NVMe if you\u2019re running under
ZeRO-3. Here is how you can `),Kr=l(ye,"A",{href:!0,rel:!0});var XV=r(Kr);zR=n(XV,"estimate how much memory is needed for a specific model"),XV.forEach(t),DR=n(ye,"."),ye.forEach(t),f0=c(e),rt=l(e,"H4",{class:!0});var v4=r(rt);yn=l(v4,"A",{id:!0,class:!0,href:!0});var QV=r(yn);Fv=l(QV,"SPAN",{});var eY=r(Fv);d(Jr.$$.fragment,eY),eY.forEach(t),QV.forEach(t),OR=c(v4),Cc=l(v4,"SPAN",{});var fG=r(Cc);TR=n(fG,"training and/or eval/predict loss is "),Vv=l(fG,"CODE",{});var sY=r(Vv);AR=n(sY,"NaN"),sY.forEach(t),fG.forEach(t),v4.forEach(t),d0=c(e),xc=l(e,"P",{});var tY=r(xc);SR=n(tY,"This often happens when one takes a model pre-trained in bf16 mixed precision mode and tries to use it under fp16 (with or without mixed precision). Most models trained on TPU and often the ones released by Google are in this category (e.g. almost all t5-based models). Here the solution is to either use fp32 or bf16 if your hardware supports it (TPU, Ampere GPUs or newer)."),tY.forEach(t),m0=c(e),Rc=l(e,"P",{});var aY=r(Rc);CR=n(aY,"The other problem may have to do with using fp16. When you configure this section:"),aY.forEach(t),_0=c(e),d(Xr.$$.fragment,e),v0=c(e),wn=l(e,"P",{});var j4=r(wn);xR=n(j4,"and you see in your log that Deepspeed reports "),Yv=l(j4,"CODE",{});var nY=r(Yv);RR=n(nY,"OVERFLOW!"),nY.forEach(t),IR=n(j4," as follows:"),j4.forEach(t),j0=c(e),d(Qr.$$.fragment,e),g0=c(e),Ic=l(e,"P",{});var oY=r(Ic);UR=n(oY,"that means that the Deepspeed loss scaler can\u2019t figure out a scaling co-efficient that overcomes loss overflow."),oY.forEach(t),y0=c(e),Uc=l(e,"P",{});var lY=r(Uc);GR=n(lY,"(the log was massaged to be more readable here.)"),lY.forEach(t),w0=c(e),us=l(e,"P",{});var Nh=r(us);LR=n(Nh,"In this case you usually need to raise the value of "),Kv=l(Nh,"CODE",{});var rY=r(Kv);MR=n(rY,"initial_scale_power"),rY.forEach(t),ZR=n(Nh,". Setting it to "),Jv=l(Nh,"CODE",{});var pY=r(Jv);NR=n(pY,'"initial_scale_power": 32'),pY.forEach(t),HR=n(Nh," will typically resolve the problem."),Nh.forEach(t),b0=c(e),pt=l(e,"H3",{class:!0});var g4=r(pt);bn=l(g4,"A",{id:!0,class:!0,href:!0});var iY=r(bn);Xv=l(iY,"SPAN",{});var uY=r(Xv);d(ep.$$.fragment,uY),uY.forEach(t),iY.forEach(t),BR=c(g4),Qv=l(g4,"SPAN",{});var cY=r(Qv);WR=n(cY,"Notes"),cY.forEach(t),g4.forEach(t),q0=c(e),cs=l(e,"UL",{});var Hh=r(cs);qn=l(Hh,"LI",{});var Gj=r(qn);FR=n(Gj,"DeepSpeed works with the PyTorch "),Gc=l(Gj,"A",{href:!0});var hY=r(Gc);VR=n(hY,"Trainer"),hY.forEach(t),YR=n(Gj," but not TF "),ej=l(Gj,"CODE",{});var fY=r(ej);KR=n(fY,"TFTrainer"),fY.forEach(t),Gj.forEach(t),JR=c(Hh),sp=l(Hh,"LI",{});var y4=r(sp);XR=n(y4,"While DeepSpeed has a pip installable PyPI package, it is highly recommended that it gets installed from "),tp=l(y4,"A",{href:!0,rel:!0});var dY=r(tp);QR=n(dY,"source"),dY.forEach(t),eI=n(y4,` to best match your hardware and also if you need to enable
certain features, like 1-bit Adam, which aren\u2019t available in the pypi distribution.`),y4.forEach(t),sI=c(Hh),it=l(Hh,"LI",{});var Bh=r(it);tI=n(Bh,"You don\u2019t have to use the "),Lc=l(Bh,"A",{href:!0});var mY=r(Lc);aI=n(mY,"Trainer"),mY.forEach(t),nI=n(Bh,` to use DeepSpeed with \u{1F917} Transformers - you can use any model
with your own trainer, and you will have to adapt the latter according to `),ap=l(Bh,"A",{href:!0,rel:!0});var _Y=r(ap);oI=n(_Y,"the DeepSpeed integration instructions"),_Y.forEach(t),lI=n(Bh,"."),Bh.forEach(t),Hh.forEach(t),E0=c(e),Mc=l(e,"A",{id:!0}),r(Mc).forEach(t),$0=c(e),ut=l(e,"H2",{class:!0});var w4=r(ut);En=l(w4,"A",{id:!0,class:!0,href:!0});var vY=r(En);sj=l(vY,"SPAN",{});var jY=r(sj);d(np.$$.fragment,jY),jY.forEach(t),vY.forEach(t),rI=c(w4),tj=l(w4,"SPAN",{});var gY=r(tj);pI=n(gY,"Non-Trainer Deepspeed Integration"),gY.forEach(t),w4.forEach(t),k0=c(e),pe=l(e,"P",{});var Fn=r(pe);iI=n(Fn,"The "),Zc=l(Fn,"A",{href:!0});var yY=r(Zc);uI=n(yY,"HfDeepSpeedConfig"),yY.forEach(t),cI=n(Fn,` is used to integrate Deepspeed into the \u{1F917} Transformers core
functionality, when `),Nc=l(Fn,"A",{href:!0});var wY=r(Nc);hI=n(wY,"Trainer"),wY.forEach(t),fI=n(Fn," is not used. The only thing that it does is handling Deepspeed ZeRO 3 param gathering and automatically splitting the model onto multiple gpus during "),aj=l(Fn,"CODE",{});var bY=r(aj);dI=n(bY,"from_pretrained"),bY.forEach(t),mI=n(Fn," call. Everything else you have to do by yourself."),Fn.forEach(t),P0=c(e),$n=l(e,"P",{});var b4=r($n);_I=n(b4,"When using "),Hc=l(b4,"A",{href:!0});var qY=r(Hc);vI=n(qY,"Trainer"),qY.forEach(t),jI=n(b4," everything is automatically taken care of."),b4.forEach(t),z0=c(e),hs=l(e,"P",{});var Wh=r(hs);gI=n(Wh,"When not using "),Bc=l(Wh,"A",{href:!0});var EY=r(Bc);yI=n(EY,"Trainer"),EY.forEach(t),wI=n(Wh,`, to efficiently deploy DeepSpeed stage 3, you must instantiate the
`),Wc=l(Wh,"A",{href:!0});var $Y=r(Wc);bI=n($Y,"HfDeepSpeedConfig"),$Y.forEach(t),qI=n(Wh," object before instantiating the model."),Wh.forEach(t),D0=c(e),Fc=l(e,"P",{});var kY=r(Fc);EI=n(kY,"For example for a pretrained model:"),kY.forEach(t),O0=c(e),d(op.$$.fragment,e),T0=c(e),Vc=l(e,"P",{});var PY=r(Vc);$I=n(PY,"or for non-pretrained model:"),PY.forEach(t),A0=c(e),d(lp.$$.fragment,e),S0=c(e),ie=l(e,"P",{});var Vn=r(ie);kI=n(Vn,"Please note that if you\u2019re not using the "),Yc=l(Vn,"A",{href:!0});var zY=r(Yc);PI=n(zY,"Trainer"),zY.forEach(t),zI=n(Vn," integration, you\u2019re completely on your own. Basically follow the documentation on the "),rp=l(Vn,"A",{href:!0,rel:!0});var DY=r(rp);DI=n(DY,"Deepspeed"),DY.forEach(t),OI=n(Vn," website. Also you have to configure explicitly the config file - you can\u2019t use "),nj=l(Vn,"CODE",{});var OY=r(nj);TI=n(OY,'"auto"'),OY.forEach(t),AI=n(Vn," values and you will have to put real values instead."),Vn.forEach(t),C0=c(e),ct=l(e,"H2",{class:!0});var q4=r(ct);kn=l(q4,"A",{id:!0,class:!0,href:!0});var TY=r(kn);oj=l(TY,"SPAN",{});var AY=r(oj);d(pp.$$.fragment,AY),AY.forEach(t),TY.forEach(t),SI=c(q4),lj=l(q4,"SPAN",{});var SY=r(lj);CI=n(SY,"HfDeepSpeedConfig"),SY.forEach(t),q4.forEach(t),x0=c(e),E=l(e,"DIV",{class:!0});var L=r(E);d(ip.$$.fragment,L),xI=c(L),rj=l(L,"P",{});var CY=r(rj);RI=n(CY,"This object contains a DeepSpeed configuration dictionary and can be quickly queried for things like zero stage."),CY.forEach(t),II=c(L),ke=l(L,"P",{});var Yn=r(ke);UI=n(Yn,"A "),pj=l(Yn,"CODE",{});var xY=r(pj);GI=n(xY,"weakref"),xY.forEach(t),LI=n(Yn,` of this object is stored in the module\u2019s globals to be able to access the config from areas where
things like the Trainer object is not available (e.g. `),ij=l(Yn,"CODE",{});var RY=r(ij);MI=n(RY,"from_pretrained"),RY.forEach(t),ZI=n(Yn," and "),uj=l(Yn,"CODE",{});var IY=r(uj);NI=n(IY,"_get_resized_embeddings"),IY.forEach(t),HI=n(Yn,`). Therefore
it\u2019s important that this object remains alive while the program is still running.`),Yn.forEach(t),BI=c(L),ue=l(L,"P",{});var vt=r(ue);Kc=l(vt,"A",{href:!0});var UY=r(Kc);WI=n(UY,"Trainer"),UY.forEach(t),FI=n(vt," uses the "),cj=l(vt,"CODE",{});var GY=r(cj);VI=n(GY,"HfTrainerDeepSpeedConfig"),GY.forEach(t),YI=n(vt,` subclass instead. That subclass has logic to sync the configuration
with values of `),Jc=l(vt,"A",{href:!0});var LY=r(Jc);KI=n(LY,"TrainingArguments"),LY.forEach(t),JI=n(vt," by replacing special placeholder values: "),hj=l(vt,"CODE",{});var MY=r(hj);XI=n(MY,'"auto"'),MY.forEach(t),QI=n(vt,`. Without this special logic
the DeepSpeed configuration is not modified in any way.`),vt.forEach(t),eU=c(L),fs=l(L,"DIV",{class:!0});var Fh=r(fs);d(up.$$.fragment,Fh),sU=c(Fh),fj=l(Fh,"P",{});var ZY=r(fj);tU=n(ZY,"Deletes a sub-section of the config file if it\u2019s found."),ZY.forEach(t),aU=c(Fh),ht=l(Fh,"P",{});var Vh=r(ht);nU=n(Vh,"Unless "),dj=l(Vh,"CODE",{});var NY=r(dj);oU=n(NY,"must_exist"),NY.forEach(t),lU=n(Vh," is "),mj=l(Vh,"CODE",{});var HY=r(mj);rU=n(HY,"True"),HY.forEach(t),pU=n(Vh," the section doesn\u2019t have to exist."),Vh.forEach(t),Fh.forEach(t),iU=c(L),Pn=l(L,"DIV",{class:!0});var E4=r(Pn);d(cp.$$.fragment,E4),uU=c(E4),hp=l(E4,"P",{});var $4=r(hp);cU=n($4,"Returns the set value or "),_j=l($4,"CODE",{});var BY=r(_j);hU=n(BY,"default"),BY.forEach(t),fU=n($4," if no value is set"),$4.forEach(t),E4.forEach(t),dU=c(L),zn=l(L,"DIV",{class:!0});var k4=r(zn);d(fp.$$.fragment,k4),mU=c(k4),ft=l(k4,"P",{});var Yh=r(ft);_U=n(Yh,"Returns "),vj=l(Yh,"CODE",{});var WY=r(vj);vU=n(WY,"True"),WY.forEach(t),jU=n(Yh,"/"),jj=l(Yh,"CODE",{});var FY=r(jj);gU=n(FY,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `False` (and it's not set to `True"),FY.forEach(t),yU=n(Yh," or isn\u2019t set)."),Yh.forEach(t),k4.forEach(t),wU=c(L),Dn=l(L,"DIV",{class:!0});var P4=r(Dn);d(dp.$$.fragment,P4),bU=c(P4),dt=l(P4,"P",{});var Kh=r(dt);qU=n(Kh,"Returns "),gj=l(Kh,"CODE",{});var VY=r(gj);EU=n(VY,"True"),VY.forEach(t),$U=n(Kh,"/"),yj=l(Kh,"CODE",{});var YY=r(yj);kU=n(YY,"False` only if the value is set, always `False` otherwise. So use this method to ask the very specific question of whether the value is set to `True` (and it's not set to `False"),YY.forEach(t),PU=n(Kh," or isn\u2019t set)."),Kh.forEach(t),P4.forEach(t),L.forEach(t),R0=c(e),mt=l(e,"H3",{class:!0});var z4=r(mt);On=l(z4,"A",{id:!0,class:!0,href:!0});var KY=r(On);wj=l(KY,"SPAN",{});var JY=r(wj);d(mp.$$.fragment,JY),JY.forEach(t),KY.forEach(t),zU=c(z4),bj=l(z4,"SPAN",{});var XY=r(bj);DU=n(XY,"Custom DeepSpeed ZeRO Inference"),XY.forEach(t),z4.forEach(t),I0=c(e),Tn=l(e,"P",{});var D4=r(Tn);OU=n(D4,"Here is an example of how one could do DeepSpeed ZeRO Inference without using "),Xc=l(D4,"A",{href:!0});var QY=r(Xc);TU=n(QY,"Trainer"),QY.forEach(t),AU=n(D4," when one can\u2019t fit a model onto a single GPU. The solution includes using additional GPUs or/and offloading GPU memory to CPU memory."),D4.forEach(t),U0=c(e),Qc=l(e,"P",{});var eK=r(Qc);SU=n(eK,"The important nuance to understand here is that the way ZeRO is designed you can process different inputs on different GPUs in parallel."),eK.forEach(t),G0=c(e),eh=l(e,"P",{});var sK=r(eh);CU=n(sK,"The example has copious notes and is self-documenting."),sK.forEach(t),L0=c(e),sh=l(e,"P",{});var tK=r(sh);xU=n(tK,"Make sure to:"),tK.forEach(t),M0=c(e),An=l(e,"OL",{});var O4=r(An);qj=l(O4,"LI",{});var aK=r(qj);RU=n(aK,"disable CPU offload if you have enough GPU memory (since it slows things down)"),aK.forEach(t),IU=c(O4),Ej=l(O4,"LI",{});var nK=r(Ej);UU=n(nK,"enable bf16 if you own an Ampere or a newer GPU to make things faster. If you don\u2019t have that hardware you may enable fp16 as long as you don\u2019t use any model that was pre-trained in bf16 mixed precision (such as most t5 models). These usually overflow in fp16 and you will see garbage as output."),nK.forEach(t),O4.forEach(t),Z0=c(e),d(_p.$$.fragment,e),N0=c(e),Sn=l(e,"P",{});var T4=r(Sn);GU=n(T4,"Let\u2019s save it as "),$j=l(T4,"CODE",{});var oK=r($j);LU=n(oK,"t0.py"),oK.forEach(t),MU=n(T4," and run it:"),T4.forEach(t),H0=c(e),d(vp.$$.fragment,e),B0=c(e),th=l(e,"P",{});var lK=r(th);ZU=n(lK,"This was a very basic example and you will want to adapt it to your needs."),lK.forEach(t),W0=c(e),_t=l(e,"H2",{class:!0});var A4=r(_t);Cn=l(A4,"A",{id:!0,class:!0,href:!0});var rK=r(Cn);kj=l(rK,"SPAN",{});var pK=r(kj);d(jp.$$.fragment,pK),pK.forEach(t),rK.forEach(t),NU=c(A4),Pj=l(A4,"SPAN",{});var iK=r(Pj);HU=n(iK,"Main DeepSpeed Resources"),iK.forEach(t),A4.forEach(t),F0=c(e),ce=l(e,"UL",{});var Kn=r(ce);zj=l(Kn,"LI",{});var uK=r(zj);gp=l(uK,"A",{href:!0,rel:!0});var cK=r(gp);BU=n(cK,"Project\u2019s github"),cK.forEach(t),uK.forEach(t),WU=c(Kn),Dj=l(Kn,"LI",{});var hK=r(Dj);yp=l(hK,"A",{href:!0,rel:!0});var fK=r(yp);FU=n(fK,"Usage docs"),fK.forEach(t),hK.forEach(t),VU=c(Kn),Oj=l(Kn,"LI",{});var dK=r(Oj);wp=l(dK,"A",{href:!0,rel:!0});var mK=r(wp);YU=n(mK,"API docs"),mK.forEach(t),dK.forEach(t),KU=c(Kn),Tj=l(Kn,"LI",{});var _K=r(Tj);bp=l(_K,"A",{href:!0,rel:!0});var vK=r(bp);JU=n(vK,"Blog posts"),vK.forEach(t),_K.forEach(t),Kn.forEach(t),V0=c(e),ah=l(e,"P",{});var jK=r(ah);XU=n(jK,"Papers:"),jK.forEach(t),Y0=c(e),ds=l(e,"UL",{});var Jh=r(ds);Aj=l(Jh,"LI",{});var gK=r(Aj);qp=l(gK,"A",{href:!0,rel:!0});var yK=r(qp);QU=n(yK,"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models"),yK.forEach(t),gK.forEach(t),eG=c(Jh),Sj=l(Jh,"LI",{});var wK=r(Sj);Ep=l(wK,"A",{href:!0,rel:!0});var bK=r(Ep);sG=n(bK,"ZeRO-Offload: Democratizing Billion-Scale Model Training"),bK.forEach(t),wK.forEach(t),tG=c(Jh),Cj=l(Jh,"LI",{});var qK=r(Cj);$p=l(qK,"A",{href:!0,rel:!0});var EK=r($p);aG=n(EK,"ZeRO-Infinity: Breaking the GPU Memory Wall for Extreme Scale Deep Learning"),EK.forEach(t),qK.forEach(t),Jh.forEach(t),K0=c(e),ms=l(e,"P",{});var Xh=r(ms);nG=n(Xh,"Finally, please, remember that, HuggingFace "),nh=l(Xh,"A",{href:!0});var $K=r(nh);oG=n($K,"Trainer"),$K.forEach(t),lG=n(Xh,` only integrates DeepSpeed, therefore if you
have any problems or questions with regards to DeepSpeed usage, please, file an issue with `),kp=l(Xh,"A",{href:!0,rel:!0});var kK=r(kp);rG=n(kK,"DeepSpeed GitHub"),kK.forEach(t),pG=n(Xh,"."),Xh.forEach(t),this.h()},h(){h(w,"name","hf:doc:metadata"),h(w,"content",JSON.stringify(xK)),h($,"id","deepspeed-integration"),h($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($,"href","#deepspeed-integration"),h(b,"class","relative group"),h(K,"href","https://github.com/microsoft/DeepSpeed"),h(K,"rel","nofollow"),h(Pe,"href","https://arxiv.org/abs/1910.02054"),h(Pe,"rel","nofollow"),h(Qn,"href","https://arxiv.org/abs/2101.06840"),h(Qn,"rel","nofollow"),h(eo,"href","https://arxiv.org/abs/2104.07857"),h(eo,"rel","nofollow"),h(so,"href","https://github.com/microsoft/DeepSpeed"),h(so,"rel","nofollow"),h(Up,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Gp,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Lp,"href","#deepspeed-non-trainer-integration"),h(Wp,"href","#deepspeed-zero-inference"),h(Vp,"id","deepspeed-trainer-integration"),h(wt,"id","trainer-deepspeed-integration"),h(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wt,"href","#trainer-deepspeed-integration"),h(ws,"class","relative group"),h(Yp,"id","deepspeed-installation"),h(bt,"id","installation"),h(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bt,"href","#installation"),h(bs,"class","relative group"),h(po,"href","https://github.com/microsoft/deepspeed#installation"),h(po,"rel","nofollow"),h(io,"href","https://www.deepspeed.ai/tutorials/advanced-install/"),h(io,"rel","nofollow"),h(Jp,"href","#zero-install-notes"),h(fo,"href","https://developer.nvidia.com/cuda-gpus"),h(fo,"rel","nofollow"),h(jo,"href","https://github.com/microsoft/DeepSpeed/issues"),h(jo,"rel","nofollow"),h(ni,"id","deepspeed-multi-gpu"),h(Dt,"id","deployment-with-multiple-gpus"),h(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dt,"href","#deployment-with-multiple-gpus"),h(qs,"class","relative group"),h(oi,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(yo,"href","https://www.deepspeed.ai/docs/config-json/"),h(yo,"rel","nofollow"),h(qo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(qo,"rel","nofollow"),h($o,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759248400"),h($o,"rel","nofollow"),h(pi,"id","deepspeed-one-gpu"),h(xt,"id","deployment-with-one-gpu"),h(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xt,"href","#deployment-with-one-gpu"),h($s,"class","relative group"),h(ii,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(zo,"href","https://www.deepspeed.ai/getting-started/#resource-configuration-multi-node"),h(zo,"rel","nofollow"),h(Oo,"href","https://github.com/huggingface/transformers/issues/8771#issuecomment-759176685"),h(Oo,"rel","nofollow"),h(_i,"id","deepspeed-notebook"),h(Gt,"id","deployment-in-notebooks"),h(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gt,"href","#deployment-in-notebooks"),h(Ps,"class","relative group"),h(wi,"id","deepspeed-config"),h(Ht,"id","configuration"),h(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ht,"href","#configuration"),h(zs,"class","relative group"),h(Go,"href","https://www.deepspeed.ai/docs/config-json/"),h(Go,"rel","nofollow"),h(Lo,"href","https://github.com/microsoft/DeepSpeedExamples"),h(Lo,"rel","nofollow"),h(No,"href","https://github.com/microsoft/DeepSpeed"),h(No,"rel","nofollow"),h(qi,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Ei,"id","deepspeed-config-passing"),h(Kt,"id","passing-configuration"),h(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Kt,"href","#passing-configuration"),h(Ds,"class","relative group"),h($i,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(ki,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Pi,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Oi,"id","deepspeed-config-shared"),h(Jt,"id","shared-configuration"),h(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jt,"href","#shared-configuration"),h(Os,"class","relative group"),h(Ti,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Ai,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Si,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Ci,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Ri,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Ii,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Ui,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Gi,"id","deepspeed-zero"),h(ta,"id","zero"),h(ta,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ta,"href","#zero"),h(Ts,"class","relative group"),h(Xo,"href","https://www.deepspeed.ai/tutorials/zero/"),h(Xo,"rel","nofollow"),h(Qo,"href","https://www.deepspeed.ai/docs/config-json/#zero-optimizations-for-fp16-training"),h(Qo,"rel","nofollow"),h(Li,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Zi,"id","deepspeed-zero2-config"),h(na,"id","zero2-config"),h(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(na,"href","#zero2-config"),h(As,"class","relative group"),h(Wi,"id","deepspeed-zero3-config"),h(oa,"id","zero3-config"),h(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oa,"href","#zero3-config"),h(Cs,"class","relative group"),h(Ki,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Xi,"id","deepspeed-nvme"),h(pa,"id","nvme-support"),h(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pa,"href","#nvme-support"),h(xs,"class","relative group"),h(_l,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-offloading"),h(_l,"rel","nofollow"),h(vl,"href","https://www.deepspeed.ai/docs/config-json/#parameter-offloading"),h(vl,"rel","nofollow"),h(jl,"href","https://github.com/microsoft/DeepSpeed/issues/998"),h(jl,"rel","nofollow"),h(su,"id","deepspeed-zero2-zero3-performance"),h(ca,"id","zero2-vs-zero3-performance"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#zero2-vs-zero3-performance"),h(Rs,"class","relative group"),h(nu,"id","deepspeed-zero2-example"),h(fa,"id","zero2-example"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#zero2-example"),h(Us,"class","relative group"),h(ou,"id","deepspeed-zero3-example"),h(_a,"id","zero3-example"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#zero3-example"),h(Gs,"class","relative group"),h(ga,"id","optimizer-and-scheduler"),h(ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ga,"href","#optimizer-and-scheduler"),h(Ls,"class","relative group"),h(ru,"id","deepspeed-optimizer"),h(ba,"id","optimizer"),h(ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ba,"href","#optimizer"),h(Ms,"class","relative group"),h(Dl,"href","https://www.deepspeed.ai/docs/config-json/#optimizer-parameters"),h(Dl,"rel","nofollow"),h(pu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(hu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(du,"id","deepspeed-scheduler"),h(Ea,"id","scheduler"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#scheduler"),h(Zs,"class","relative group"),h(Ul,"href","https://www.deepspeed.ai/docs/config-json/#scheduler-parameters"),h(Ul,"rel","nofollow"),h(_u,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(vu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(gu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(yu,"id","deepspeed-fp32"),h(Oa,"id","fp32-precision"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#fp32-precision"),h(Ns,"class","relative group"),h(Bl,"href","https://pytorch.org/docs/stable/notes/cuda.html#tensorfloat-32-tf32-on-ampere-devices"),h(Bl,"rel","nofollow"),h(bu,"id","deepspeed-amp"),h(Sa,"id","automatic-mixed-precision"),h(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sa,"href","#automatic-mixed-precision"),h(Hs,"class","relative group"),h(Ca,"id","fp16"),h(Ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ca,"href","#fp16"),h(Bs,"class","relative group"),h($u,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Pu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Kl,"href","https://www.deepspeed.ai/docs/config-json/#fp16-training-options"),h(Kl,"rel","nofollow"),h(Ia,"id","bf16"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#bf16"),h(Ws,"class","relative group"),h(Ua,"id","apex"),h(Ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ua,"href","#apex"),h(Fs,"class","relative group"),h(Au,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Cu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(ar,"href","https://www.deepspeed.ai/docs/config-json/#automatic-mixed-precision-amp-training-options"),h(ar,"rel","nofollow"),h(xu,"id","deepspeed-bs"),h(Za,"id","batch-size"),h(Za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Za,"href","#batch-size"),h(Vs,"class","relative group"),h(Iu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Gu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Lu,"id","deepspeed-grad-acc"),h(Ha,"id","gradient-accumulation"),h(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ha,"href","#gradient-accumulation"),h(Ys,"class","relative group"),h(Zu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Hu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Bu,"id","deepspeed-grad-clip"),h(Wa,"id","gradient-clipping"),h(Wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wa,"href","#gradient-clipping"),h(Ks,"class","relative group"),h(Fu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Yu,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Ku,"id","deepspeed-weight-extraction"),h(Va,"id","getting-the-model-weights-out"),h(Va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Va,"href","#getting-the-model-weights-out"),h(Js,"class","relative group"),h(mr,"href","https://huggingface.co/models"),h(mr,"rel","nofollow"),h(an,"id","zero3-and-infinity-nuances"),h(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(an,"href","#zero3-and-infinity-nuances"),h(Xs,"class","relative group"),h(nn,"id","constructing-massive-models"),h(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(nn,"href","#constructing-massive-models"),h(Qs,"class","relative group"),h(uc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(cc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(kr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#constructing-massive-models"),h(kr,"rel","nofollow"),h(fc,"href","#from_pretrained-torch-dtype"),h(pn,"id","gathering-parameters"),h(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(pn,"href","#gathering-parameters"),h(et,"class","relative group"),h(Dr,"href","https://deepspeed.readthedocs.io/en/latest/zero3.html#manual-parameter-coordination"),h(Dr,"rel","nofollow"),h(mc,"id","deepspeed-zero-inference"),h(cn,"id","zero-inference"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#zero-inference"),h(st,"class","relative group"),h(vc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(dn,"id","memory-requirements"),h(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(dn,"href","#memory-requirements"),h(tt,"class","relative group"),h(Ir,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Ir,"rel","nofollow"),h(_n,"id","filing-issues"),h(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_n,"href","#filing-issues"),h(at,"class","relative group"),h(Oc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Tc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Ac,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(Zr,"href","https://github.com/stas00/porting/blob/master/transformers/deepspeed/DeepSpeed_on_colab_CLI.ipynb"),h(Zr,"rel","nofollow"),h(Hr,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch"),h(Hr,"rel","nofollow"),h(Wr,"href","https://github.com/microsoft/DeepSpeed/"),h(Wr,"rel","nofollow"),h(jn,"id","troubleshooting"),h(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jn,"href","#troubleshooting"),h(ot,"class","relative group"),h(gn,"id","the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#the-deepspeed-process-gets-killed-at-startup-without-a-traceback"),h(lt,"class","relative group"),h(Kr,"href","https://deepspeed.readthedocs.io/en/latest/memory.html"),h(Kr,"rel","nofollow"),h(yn,"id","training-andor-evalpredict-loss-is-nan"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#training-andor-evalpredict-loss-is-nan"),h(rt,"class","relative group"),h(bn,"id","notes"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#notes"),h(pt,"class","relative group"),h(Gc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(tp,"href","https://github.com/microsoft/deepspeed#installation"),h(tp,"rel","nofollow"),h(Lc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(ap,"href","https://www.deepspeed.ai/getting-started/#writing-deepspeed-models"),h(ap,"rel","nofollow"),h(Mc,"id","deepspeed-non-trainer-integration"),h(En,"id","nontrainer-deepspeed-integration"),h(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(En,"href","#nontrainer-deepspeed-integration"),h(ut,"class","relative group"),h(Zc,"href","/docs/transformers/pr_14569/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Nc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Hc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Bc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Wc,"href","/docs/transformers/pr_14569/en/main_classes/deepspeed#transformers.deepspeed.HfDeepSpeedConfig"),h(Yc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(rp,"href","https://www.deepspeed.ai/"),h(rp,"rel","nofollow"),h(kn,"id","transformers.deepspeed.HfDeepSpeedConfig"),h(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kn,"href","#transformers.deepspeed.HfDeepSpeedConfig"),h(ct,"class","relative group"),h(Kc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Jc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.TrainingArguments"),h(fs,"class","docstring"),h(Pn,"class","docstring"),h(zn,"class","docstring"),h(Dn,"class","docstring"),h(E,"class","docstring"),h(On,"id","custom-deepspeed-zero-inference"),h(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(On,"href","#custom-deepspeed-zero-inference"),h(mt,"class","relative group"),h(Xc,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(Cn,"id","main-deepspeed-resources"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#main-deepspeed-resources"),h(_t,"class","relative group"),h(gp,"href","https://github.com/microsoft/deepspeed"),h(gp,"rel","nofollow"),h(yp,"href","https://www.deepspeed.ai/getting-started/"),h(yp,"rel","nofollow"),h(wp,"href","https://deepspeed.readthedocs.io/en/latest/index.html"),h(wp,"rel","nofollow"),h(bp,"href","https://www.microsoft.com/en-us/research/search/?q=deepspeed"),h(bp,"rel","nofollow"),h(qp,"href","https://arxiv.org/abs/1910.02054"),h(qp,"rel","nofollow"),h(Ep,"href","https://arxiv.org/abs/2101.06840"),h(Ep,"rel","nofollow"),h($p,"href","https://arxiv.org/abs/2104.07857"),h($p,"rel","nofollow"),h(nh,"href","/docs/transformers/pr_14569/en/main_classes/trainer#transformers.Trainer"),h(kp,"href","https://github.com/microsoft/DeepSpeed/issues"),h(kp,"rel","nofollow")},m(e,p){s(document.head,w),i(e,Z,p),i(e,b,p),s(b,$),s($,js),m(V,js,null),s(b,Xn),s(b,gs),s(gs,ys),i(e,jt,p),i(e,Y,p),s(Y,K),s(K,N),s(Y,Cp),s(Y,Pe),s(Pe,xp),s(Y,S4),i(e,Mj,p),i(e,O,p),s(O,Qh),s(Qh,C4),s(O,x4),s(O,ef),s(ef,R4),s(O,I4),s(O,sf),s(sf,U4),s(O,G4),s(O,tf),s(tf,L4),s(O,M4),s(O,af),s(af,Z4),s(O,N4),s(O,nf),s(nf,H4),i(e,Zj,p),i(e,ze,p),s(ze,B4),s(ze,Qn),s(Qn,W4),s(ze,F4),s(ze,eo),s(eo,V4),s(ze,Y4),i(e,Nj,p),i(e,Rp,p),s(Rp,K4),i(e,Hj,p),i(e,Ip,p),s(Ip,J4),i(e,Bj,p),i(e,gt,p),s(gt,X4),s(gt,so),s(so,Q4),s(gt,e6),i(e,Wj,p),i(e,yt,p),s(yt,to),s(to,s6),s(to,Up),s(Up,t6),s(to,a6),s(yt,n6),s(yt,M),s(M,o6),s(M,Gp),s(Gp,l6),s(M,r6),s(M,of),s(of,p6),s(M,i6),s(M,lf),s(lf,u6),s(M,c6),s(M,rf),s(rf,h6),s(M,f6),s(M,Lp),s(Lp,d6),s(M,m6),i(e,Fj,p),i(e,Mp,p),s(Mp,_6),i(e,Vj,p),i(e,Zp,p),s(Zp,v6),i(e,Yj,p),i(e,Np,p),s(Np,pf),s(pf,j6),i(e,Kj,p),i(e,Hp,p),s(Hp,g6),i(e,Jj,p),i(e,Bp,p),s(Bp,ao),s(ao,y6),s(ao,Wp),s(Wp,w6),s(ao,b6),i(e,Xj,p),i(e,Fp,p),s(Fp,q6),i(e,Qj,p),i(e,Vp,p),i(e,eg,p),i(e,ws,p),s(ws,wt),s(wt,uf),m(no,uf,null),s(ws,E6),s(ws,cf),s(cf,$6),i(e,sg,p),i(e,Yp,p),i(e,tg,p),i(e,bs,p),s(bs,bt),s(bt,hf),m(oo,hf,null),s(bs,k6),s(bs,ff),s(ff,P6),i(e,ag,p),i(e,Kp,p),s(Kp,z6),i(e,ng,p),m(lo,e,p),i(e,og,p),i(e,De,p),s(De,D6),s(De,df),s(df,O6),s(De,T6),s(De,mf),s(mf,A6),s(De,S6),i(e,lg,p),m(ro,e,p),i(e,rg,p),i(e,Oe,p),s(Oe,C6),s(Oe,po),s(po,x6),s(Oe,R6),s(Oe,io),s(io,I6),s(Oe,U6),i(e,pg,p),i(e,qt,p),s(qt,G6),s(qt,Jp),s(Jp,L6),s(qt,M6),i(e,ig,p),i(e,Xp,p),s(Xp,Z6),i(e,ug,p),i(e,Qp,p),s(Qp,N6),i(e,cg,p),m(uo,e,p),i(e,hg,p),i(e,Te,p),s(Te,H6),s(Te,_f),s(_f,B6),s(Te,W6),s(Te,vf),s(vf,F6),s(Te,V6),i(e,fg,p),i(e,Et,p),s(Et,Y6),s(Et,jf),s(jf,K6),s(Et,J6),i(e,dg,p),m(co,e,p),i(e,mg,p),i(e,we,p),s(we,X6),s(we,gf),s(gf,Q6),s(we,e5),s(we,yf),s(yf,s5),s(we,t5),s(we,wf),s(wf,a5),i(e,_g,p),i(e,ei,p),s(ei,n5),i(e,vg,p),m(ho,e,p),i(e,jg,p),i(e,Ae,p),s(Ae,o5),s(Ae,bf),s(bf,l5),s(Ae,r5),s(Ae,qf),s(qf,p5),s(Ae,i5),i(e,gg,p),i(e,$t,p),s($t,u5),s($t,Ef),s(Ef,c5),s($t,h5),i(e,yg,p),i(e,Se,p),s(Se,f5),s(Se,$f),s($f,d5),s(Se,m5),s(Se,fo),s(fo,_5),s(Se,v5),i(e,wg,p),i(e,si,p),s(si,j5),i(e,bg,p),m(mo,e,p),i(e,qg,p),i(e,ti,p),s(ti,g5),i(e,Eg,p),m(_o,e,p),i(e,$g,p),i(e,ai,p),s(ai,y5),i(e,kg,p),m(vo,e,p),i(e,Pg,p),i(e,kt,p),s(kt,w5),s(kt,kf),s(kf,b5),s(kt,q5),i(e,zg,p),i(e,Pt,p),s(Pt,E5),s(Pt,Pf),s(Pf,$5),s(Pt,k5),i(e,Dg,p),i(e,zt,p),s(zt,P5),s(zt,jo),s(jo,z5),s(zt,D5),i(e,Og,p),i(e,ni,p),i(e,Tg,p),i(e,qs,p),s(qs,Dt),s(Dt,zf),m(go,zf,null),s(qs,O5),s(qs,Df),s(Df,T5),i(e,Ag,p),i(e,Ot,p),s(Ot,A5),s(Ot,oi),s(oi,S5),s(Ot,C5),i(e,Sg,p),i(e,Tt,p),s(Tt,Es),s(Es,x5),s(Es,Of),s(Of,R5),s(Es,I5),s(Es,Tf),s(Tf,U5),s(Es,G5),s(Tt,L5),s(Tt,be),s(be,M5),s(be,Af),s(Af,Z5),s(be,N5),s(be,Sf),s(Sf,H5),s(be,B5),s(be,yo),s(yo,W5),s(be,F5),i(e,Cg,p),i(e,li,p),s(li,V5),i(e,xg,p),m(wo,e,p),i(e,Rg,p),i(e,ri,p),s(ri,Y5),i(e,Ig,p),m(bo,e,p),i(e,Ug,p),i(e,T,p),s(T,K5),s(T,Cf),s(Cf,J5),s(T,X5),s(T,xf),s(xf,Q5),s(T,e$),s(T,Rf),s(Rf,s$),s(T,t$),s(T,If),s(If,a$),s(T,n$),s(T,qo),s(qo,o$),s(T,l$),i(e,Gg,p),i(e,X,p),s(X,r$),s(X,Uf),s(Uf,p$),s(X,i$),s(X,Gf),s(Gf,u$),s(X,c$),s(X,Lf),s(Lf,h$),s(X,f$),i(e,Lg,p),i(e,At,p),s(At,d$),s(At,Mf),s(Mf,m$),s(At,_$),i(e,Mg,p),m(Eo,e,p),i(e,Zg,p),i(e,St,p),s(St,v$),s(St,Zf),s(Zf,j$),s(St,g$),i(e,Ng,p),i(e,Ct,p),s(Ct,y$),s(Ct,$o),s($o,w$),s(Ct,b$),i(e,Hg,p),i(e,pi,p),i(e,Bg,p),i(e,$s,p),s($s,xt),s(xt,Nf),m(ko,Nf,null),s($s,q$),s($s,Hf),s(Hf,E$),i(e,Wg,p),i(e,Rt,p),s(Rt,$$),s(Rt,ii),s(ii,k$),s(Rt,P$),i(e,Fg,p),m(Po,e,p),i(e,Vg,p),i(e,Ce,p),s(Ce,z$),s(Ce,Bf),s(Bf,D$),s(Ce,O$),s(Ce,zo),s(zo,T$),s(Ce,A$),i(e,Yg,p),i(e,ui,p),s(ui,S$),i(e,Kg,p),i(e,It,p),s(It,Wf),s(Wf,C$),s(It,x$),s(It,Ff),s(Ff,R$),i(e,Jg,p),i(e,ci,p),s(ci,I$),i(e,Xg,p),m(Do,e,p),i(e,Qg,p),i(e,hi,p),s(hi,U$),i(e,ey,p),i(e,Ut,p),s(Ut,G$),s(Ut,Oo),s(Oo,L$),s(Ut,M$),i(e,sy,p),i(e,fi,p),s(fi,Z$),i(e,ty,p),i(e,di,p),s(di,N$),i(e,ay,p),i(e,mi,p),s(mi,ks),s(ks,To),s(To,H$),s(To,Vf),s(Vf,B$),s(To,W$),s(ks,F$),m(Ao,ks,null),s(ks,V$),s(ks,Yf),s(Yf,Y$),i(e,ny,p),i(e,_i,p),i(e,oy,p),i(e,Ps,p),s(Ps,Gt),s(Gt,Kf),m(So,Kf,null),s(Ps,K$),s(Ps,Jf),s(Jf,J$),i(e,ly,p),i(e,Lt,p),s(Lt,X$),s(Lt,Xf),s(Xf,Q$),s(Lt,e9),i(e,ry,p),i(e,vi,p),s(vi,s9),i(e,py,p),m(Co,e,p),i(e,iy,p),i(e,Mt,p),s(Mt,t9),s(Mt,Qf),s(Qf,a9),s(Mt,n9),i(e,uy,p),i(e,ji,p),s(ji,o9),i(e,cy,p),i(e,gi,p),s(gi,l9),i(e,hy,p),m(xo,e,p),i(e,fy,p),i(e,xe,p),s(xe,r9),s(xe,ed),s(ed,p9),s(xe,i9),s(xe,sd),s(sd,u9),s(xe,c9),i(e,dy,p),m(Ro,e,p),i(e,my,p),i(e,Zt,p),s(Zt,h9),s(Zt,td),s(td,f9),s(Zt,d9),i(e,_y,p),m(Io,e,p),i(e,vy,p),i(e,yi,p),s(yi,m9),i(e,jy,p),i(e,Nt,p),s(Nt,_9),s(Nt,ad),s(ad,v9),s(Nt,j9),i(e,gy,p),i(e,wi,p),i(e,yy,p),i(e,zs,p),s(zs,Ht),s(Ht,nd),m(Uo,nd,null),s(zs,g9),s(zs,od),s(od,y9),i(e,wy,p),i(e,Bt,p),s(Bt,w9),s(Bt,Go),s(Go,b9),s(Bt,q9),i(e,by,p),i(e,Wt,p),s(Wt,E9),s(Wt,Lo),s(Lo,$9),s(Wt,k9),i(e,qy,p),m(Mo,e,p),i(e,Ey,p),i(e,Ft,p),s(Ft,P9),s(Ft,ld),s(ld,z9),s(Ft,D9),i(e,$y,p),m(Zo,e,p),i(e,ky,p),i(e,Vt,p),s(Vt,O9),s(Vt,No),s(No,T9),s(Vt,A9),i(e,Py,p),i(e,bi,p),s(bi,S9),i(e,zy,p),i(e,Q,p),s(Q,C9),s(Q,rd),s(rd,x9),s(Q,R9),s(Q,pd),s(pd,I9),s(Q,U9),s(Q,id),s(id,G9),s(Q,L9),i(e,Dy,p),m(Ho,e,p),i(e,Oy,p),i(e,Yt,p),s(Yt,M9),s(Yt,qi),s(qi,Z9),s(Yt,N9),i(e,Ty,p),i(e,Ei,p),i(e,Ay,p),i(e,Ds,p),s(Ds,Kt),s(Kt,ud),m(Bo,ud,null),s(Ds,H9),s(Ds,cd),s(cd,B9),i(e,Sy,p),i(e,A,p),s(A,W9),s(A,$i),s($i,F9),s(A,V9),s(A,ki),s(ki,Y9),s(A,K9),s(A,hd),s(hd,J9),s(A,X9),s(A,fd),s(fd,Q9),s(A,e8),s(A,Pi),s(Pi,s8),s(A,t8),i(e,Cy,p),i(e,zi,p),s(zi,a8),i(e,xy,p),m(Wo,e,p),i(e,Ry,p),i(e,Di,p),s(Di,n8),i(e,Iy,p),m(Fo,e,p),i(e,Uy,p),i(e,Oi,p),i(e,Gy,p),i(e,Os,p),s(Os,Jt),s(Jt,dd),m(Vo,dd,null),s(Os,o8),s(Os,md),s(md,l8),i(e,Ly,p),m(Xt,e,p),i(e,My,p),i(e,Re,p),s(Re,r8),s(Re,Ti),s(Ti,p8),s(Re,i8),s(Re,Ai),s(Ai,u8),s(Re,c8),i(e,Zy,p),i(e,Qt,p),s(Qt,h8),s(Qt,Si),s(Si,f8),s(Qt,d8),i(e,Ny,p),i(e,Ie,p),s(Ie,m8),s(Ie,_d),s(_d,_8),s(Ie,v8),s(Ie,Ci),s(Ci,j8),s(Ie,g8),i(e,Hy,p),i(e,xi,p),s(xi,y8),i(e,By,p),i(e,ea,p),s(ea,w8),s(ea,Ri),s(Ri,b8),s(ea,q8),i(e,Wy,p),i(e,sa,p),s(sa,vd),s(vd,E8),s(sa,$8),s(sa,Yo),s(Yo,k8),s(Yo,Ii),s(Ii,P8),s(Yo,z8),i(e,Fy,p),i(e,ee,p),s(ee,D8),s(ee,jd),s(jd,O8),s(ee,T8),s(ee,Ui),s(Ui,A8),s(ee,S8),s(ee,gd),s(gd,C8),s(ee,x8),i(e,Vy,p),i(e,Gi,p),i(e,Yy,p),i(e,Ts,p),s(Ts,ta),s(ta,yd),m(Ko,yd,null),s(Ts,R8),s(Ts,wd),s(wd,I8),i(e,Ky,p),i(e,Jo,p),s(Jo,Xo),s(Xo,U8),s(Jo,G8),i(e,Jy,p),i(e,Ue,p),s(Ue,L8),s(Ue,bd),s(bd,M8),s(Ue,Z8),s(Ue,Qo),s(Qo,N8),s(Ue,H8),i(e,Xy,p),i(e,aa,p),s(aa,B8),s(aa,Li),s(Li,W8),s(aa,F8),i(e,Qy,p),i(e,Mi,p),s(Mi,V8),i(e,ew,p),i(e,Zi,p),i(e,sw,p),i(e,As,p),s(As,na),s(na,qd),m(el,qd,null),s(As,Y8),s(As,Ed),s(Ed,K8),i(e,tw,p),i(e,Ni,p),s(Ni,J8),i(e,aw,p),m(sl,e,p),i(e,nw,p),i(e,Hi,p),s(Hi,$d),s($d,X8),i(e,ow,p),i(e,Ge,p),s(Ge,Ss),s(Ss,Q8),s(Ss,kd),s(kd,ek),s(Ss,sk),s(Ss,Pd),s(Pd,tk),s(Ss,ak),s(Ge,nk),s(Ge,S),s(S,zd),s(zd,ok),s(S,lk),s(S,Dd),s(Dd,rk),s(S,pk),s(S,Od),s(Od,ik),s(S,uk),s(S,Td),s(Td,ck),s(S,hk),s(S,Ad),s(Ad,fk),s(S,dk),s(S,Sd),s(Sd,mk),s(S,_k),s(Ge,vk),s(Ge,Cd),s(Cd,jk),i(e,lw,p),i(e,Le,p),s(Le,gk),s(Le,xd),s(xd,yk),s(Le,wk),s(Le,Rd),s(Rd,bk),s(Le,qk),i(e,rw,p),m(tl,e,p),i(e,pw,p),i(e,Bi,p),s(Bi,Ek),i(e,iw,p),i(e,Wi,p),i(e,uw,p),i(e,Cs,p),s(Cs,oa),s(oa,Id),m(al,Id,null),s(Cs,$k),s(Cs,Ud),s(Ud,kk),i(e,cw,p),i(e,Fi,p),s(Fi,Pk),i(e,hw,p),m(nl,e,p),i(e,fw,p),i(e,H,p),s(H,zk),s(H,Gd),s(Gd,Dk),s(H,Ok),s(H,Ld),s(Ld,Tk),s(H,Ak),s(H,Md),s(Md,Sk),s(H,Ck),s(H,Zd),s(Zd,xk),s(H,Rk),i(e,dw,p),i(e,Me,p),s(Me,Ik),s(Me,Nd),s(Nd,Uk),s(Me,Gk),s(Me,Hd),s(Hd,Lk),s(Me,Mk),i(e,mw,p),i(e,Vi,p),s(Vi,Bd),s(Bd,Zk),i(e,_w,p),i(e,la,p),s(la,ol),s(ol,Wd),s(Wd,Nk),s(ol,Hk),s(ol,Fd),s(Fd,Bk),s(la,Wk),s(la,ll),s(ll,Vd),s(Vd,Fk),s(ll,Vk),s(ll,Yd),s(Yd,Yk),i(e,vw,p),i(e,C,p),s(C,Kk),s(C,Kd),s(Kd,Jk),s(C,Xk),s(C,Jd),s(Jd,Qk),s(C,e7),s(C,Xd),s(Xd,s7),s(C,t7),s(C,Qd),s(Qd,a7),s(C,n7),s(C,em),s(em,o7),s(C,l7),i(e,jw,p),i(e,qe,p),s(qe,sm),s(sm,r7),s(qe,p7),s(qe,tm),s(tm,i7),s(qe,u7),s(qe,am),s(am,c7),s(qe,h7),i(e,gw,p),i(e,Yi,p),s(Yi,f7),i(e,yw,p),i(e,Ze,p),s(Ze,rl),s(rl,nm),s(nm,d7),s(rl,m7),s(rl,om),s(om,_7),s(Ze,v7),s(Ze,pl),s(pl,lm),s(lm,j7),s(pl,g7),s(pl,rm),s(rm,y7),s(Ze,w7),s(Ze,il),s(il,pm),s(pm,b7),s(il,q7),s(il,im),s(im,E7),i(e,ww,p),i(e,Ne,p),s(Ne,$7),s(Ne,um),s(um,k7),s(Ne,P7),s(Ne,Ki),s(Ki,z7),s(Ne,D7),i(e,bw,p),i(e,ul,p),s(ul,cm),s(cm,O7),s(ul,T7),i(e,qw,p),i(e,se,p),s(se,A7),s(se,hm),s(hm,S7),s(se,C7),s(se,fm),s(fm,x7),s(se,R7),s(se,dm),s(dm,I7),s(se,U7),i(e,Ew,p),i(e,Ji,p),s(Ji,cl),s(cl,mm),s(mm,G7),s(cl,L7),s(cl,_m),s(_m,M7),i(e,$w,p),i(e,Ee,p),s(Ee,vm),s(vm,Z7),s(Ee,N7),s(Ee,jm),s(jm,H7),s(Ee,B7),s(Ee,gm),s(gm,W7),s(Ee,F7),i(e,kw,p),i(e,He,p),s(He,V7),s(He,ym),s(ym,Y7),s(He,K7),s(He,wm),s(wm,J7),s(He,X7),i(e,Pw,p),i(e,ra,p),s(ra,hl),s(hl,Q7),s(hl,bm),s(bm,eP),s(hl,sP),s(ra,tP),s(ra,fl),s(fl,aP),s(fl,qm),s(qm,nP),s(fl,oP),i(e,zw,p),i(e,Xi,p),i(e,Dw,p),i(e,xs,p),s(xs,pa),s(pa,Em),m(dl,Em,null),s(xs,lP),s(xs,$m),s($m,rP),i(e,Ow,p),i(e,Qi,p),s(Qi,pP),i(e,Tw,p),i(e,eu,p),s(eu,iP),i(e,Aw,p),m(ml,e,p),i(e,Sw,p),i(e,ia,p),s(ia,uP),s(ia,km),s(km,cP),s(ia,hP),i(e,Cw,p),i(e,Be,p),s(Be,fP),s(Be,_l),s(_l,dP),s(Be,mP),s(Be,vl),s(vl,_P),s(Be,vP),i(e,xw,p),i(e,ua,p),s(ua,jP),s(ua,Pm),s(Pm,gP),s(ua,yP),i(e,Rw,p),i(e,We,p),s(We,wP),s(We,zm),s(zm,bP),s(We,qP),s(We,jl),s(jl,EP),s(We,$P),i(e,Iw,p),i(e,su,p),i(e,Uw,p),i(e,Rs,p),s(Rs,ca),s(ca,Dm),m(gl,Dm,null),s(Rs,kP),s(Rs,Om),s(Om,PP),i(e,Gw,p),i(e,tu,p),s(tu,zP),i(e,Lw,p),i(e,au,p),s(au,DP),i(e,Mw,p),i(e,ha,p),s(ha,Is),s(Is,OP),s(Is,Tm),s(Tm,TP),s(Is,AP),s(Is,Am),s(Am,SP),s(Is,CP),s(ha,xP),s(ha,yl),s(yl,RP),s(yl,Sm),s(Sm,IP),s(yl,UP),i(e,Zw,p),i(e,Fe,p),s(Fe,GP),s(Fe,Cm),s(Cm,LP),s(Fe,MP),s(Fe,xm),s(xm,ZP),s(Fe,NP),i(e,Nw,p),i(e,nu,p),i(e,Hw,p),i(e,Us,p),s(Us,fa),s(fa,Rm),m(wl,Rm,null),s(Us,HP),s(Us,Im),s(Im,BP),i(e,Bw,p),i(e,da,p),s(da,WP),s(da,Um),s(Um,FP),s(da,VP),i(e,Ww,p),m(bl,e,p),i(e,Fw,p),i(e,ma,p),s(ma,YP),s(ma,Gm),s(Gm,KP),s(ma,JP),i(e,Vw,p),m(ql,e,p),i(e,Yw,p),i(e,ou,p),i(e,Kw,p),i(e,Gs,p),s(Gs,_a),s(_a,Lm),m(El,Lm,null),s(Gs,XP),s(Gs,Mm),s(Mm,QP),i(e,Jw,p),i(e,va,p),s(va,ez),s(va,Zm),s(Zm,sz),s(va,tz),i(e,Xw,p),m($l,e,p),i(e,Qw,p),i(e,ja,p),s(ja,az),s(ja,Nm),s(Nm,nz),s(ja,oz),i(e,e2,p),m(kl,e,p),i(e,s2,p),i(e,Ls,p),s(Ls,ga),s(ga,Hm),m(Pl,Hm,null),s(Ls,lz),s(Ls,Bm),s(Bm,rz),i(e,t2,p),i(e,ya,p),s(ya,pz),s(ya,Wm),s(Wm,iz),s(ya,uz),i(e,a2,p),i(e,lu,p),s(lu,cz),i(e,n2,p),i(e,wa,p),s(wa,hz),s(wa,Fm),s(Fm,fz),s(wa,dz),i(e,o2,p),i(e,ru,p),i(e,l2,p),i(e,Ms,p),s(Ms,ba),s(ba,Vm),m(zl,Vm,null),s(Ms,mz),s(Ms,Ym),s(Ym,_z),i(e,r2,p),i(e,Ve,p),s(Ve,vz),s(Ve,Km),s(Km,jz),s(Ve,gz),s(Ve,Dl),s(Dl,yz),s(Ve,wz),i(e,p2,p),i(e,q,p),s(q,bz),s(q,Jm),s(Jm,qz),s(q,Ez),s(q,pu),s(pu,$z),s(q,kz),s(q,Xm),s(Xm,Pz),s(q,zz),s(q,Qm),s(Qm,Dz),s(q,Oz),s(q,e_),s(e_,Tz),s(q,Az),s(q,s_),s(s_,Sz),s(q,Cz),s(q,t_),s(t_,xz),s(q,Rz),s(q,a_),s(a_,Iz),s(q,Uz),i(e,i2,p),i(e,Ye,p),s(Ye,Gz),s(Ye,n_),s(n_,Lz),s(Ye,Mz),s(Ye,o_),s(o_,Zz),s(Ye,Nz),i(e,u2,p),m(Ol,e,p),i(e,c2,p),i(e,iu,p),s(iu,Hz),i(e,h2,p),i(e,te,p),s(te,Tl),s(Tl,l_),s(l_,Bz),s(Tl,Wz),s(Tl,r_),s(r_,Fz),s(te,Vz),s(te,Al),s(Al,p_),s(p_,Yz),s(Al,Kz),s(Al,i_),s(i_,Jz),s(te,Xz),s(te,Sl),s(Sl,u_),s(u_,Qz),s(Sl,eD),s(Sl,c_),s(c_,sD),s(te,tD),s(te,Cl),s(Cl,h_),s(h_,aD),s(Cl,nD),s(Cl,f_),s(f_,oD),i(e,f2,p),i(e,uu,p),s(uu,lD),i(e,d2,p),i(e,cu,p),s(cu,rD),i(e,m2,p),m(xl,e,p),i(e,_2,p),i(e,qa,p),s(qa,pD),s(qa,hu),s(hu,iD),s(qa,uD),i(e,v2,p),i(e,fu,p),s(fu,cD),i(e,j2,p),m(Rl,e,p),i(e,g2,p),i(e,ae,p),s(ae,hD),s(ae,d_),s(d_,fD),s(ae,dD),s(ae,m_),s(m_,mD),s(ae,_D),s(ae,__),s(__,vD),s(ae,jD),i(e,y2,p),i(e,du,p),i(e,w2,p),i(e,Zs,p),s(Zs,Ea),s(Ea,v_),m(Il,v_,null),s(Zs,gD),s(Zs,j_),s(j_,yD),i(e,b2,p),i(e,x,p),s(x,wD),s(x,g_),s(g_,bD),s(x,qD),s(x,y_),s(y_,ED),s(x,$D),s(x,w_),s(w_,kD),s(x,PD),s(x,b_),s(b_,zD),s(x,DD),s(x,Ul),s(Ul,OD),s(x,TD),i(e,q2,p),i(e,mu,p),s(mu,AD),i(e,E2,p),i(e,$a,p),s($a,Gl),s(Gl,q_),s(q_,SD),s(Gl,CD),s(Gl,E_),s(E_,xD),s($a,RD),s($a,Ke),s(Ke,$_),s($_,ID),s(Ke,UD),s(Ke,k_),s(k_,GD),s(Ke,LD),s(Ke,P_),s(P_,MD),s(Ke,ZD),i(e,$2,p),i(e,P,p),s(P,ND),s(P,z_),s(z_,HD),s(P,BD),s(P,_u),s(_u,WD),s(P,FD),s(P,D_),s(D_,VD),s(P,YD),s(P,O_),s(O_,KD),s(P,JD),s(P,T_),s(T_,XD),s(P,QD),s(P,A_),s(A_,eO),s(P,sO),i(e,k2,p),i(e,Je,p),s(Je,tO),s(Je,S_),s(S_,aO),s(Je,nO),s(Je,C_),s(C_,oO),s(Je,lO),i(e,P2,p),m(Ll,e,p),i(e,z2,p),i(e,Xe,p),s(Xe,rO),s(Xe,x_),s(x_,pO),s(Xe,iO),s(Xe,vu),s(vu,uO),s(Xe,cO),i(e,D2,p),i(e,ne,p),s(ne,ka),s(ka,R_),s(R_,hO),s(ka,fO),s(ka,I_),s(I_,dO),s(ka,mO),s(ne,_O),s(ne,Pa),s(Pa,U_),s(U_,vO),s(Pa,jO),s(Pa,G_),s(G_,gO),s(Pa,yO),s(ne,wO),s(ne,Qe),s(Qe,L_),s(L_,bO),s(Qe,qO),s(Qe,M_),s(M_,EO),s(Qe,$O),s(Qe,Z_),s(Z_,kO),s(Qe,PO),s(ne,zO),s(ne,es),s(es,N_),s(N_,DO),s(es,OO),s(es,H_),s(H_,TO),s(es,AO),s(es,B_),s(B_,SO),s(es,CO),i(e,O2,p),i(e,ju,p),s(ju,xO),i(e,T2,p),m(Ml,e,p),i(e,A2,p),i(e,za,p),s(za,RO),s(za,gu),s(gu,IO),s(za,UO),i(e,S2,p),i(e,Da,p),s(Da,GO),s(Da,W_),s(W_,LO),s(Da,MO),i(e,C2,p),m(Zl,e,p),i(e,x2,p),i(e,B,p),s(B,ZO),s(B,F_),s(F_,NO),s(B,HO),s(B,V_),s(V_,BO),s(B,WO),s(B,Y_),s(Y_,FO),s(B,VO),s(B,K_),s(K_,YO),s(B,KO),i(e,R2,p),i(e,yu,p),i(e,I2,p),i(e,Ns,p),s(Ns,Oa),s(Oa,J_),m(Nl,J_,null),s(Ns,JO),s(Ns,X_),s(X_,XO),i(e,U2,p),i(e,wu,p),s(wu,QO),i(e,G2,p),i(e,Ta,p),s(Ta,eT),s(Ta,Q_),s(Q_,sT),s(Ta,tT),i(e,L2,p),m(Hl,e,p),i(e,M2,p),i(e,Aa,p),s(Aa,aT),s(Aa,Bl),s(Bl,nT),s(Aa,oT),i(e,Z2,p),i(e,oe,p),s(oe,lT),s(oe,e1),s(e1,rT),s(oe,pT),s(oe,s1),s(s1,iT),s(oe,uT),s(oe,t1),s(t1,cT),s(oe,hT),i(e,N2,p),i(e,bu,p),i(e,H2,p),i(e,Hs,p),s(Hs,Sa),s(Sa,a1),m(Wl,a1,null),s(Hs,fT),s(Hs,n1),s(n1,dT),i(e,B2,p),i(e,qu,p),s(qu,mT),i(e,W2,p),i(e,Bs,p),s(Bs,Ca),s(Ca,o1),m(Fl,o1,null),s(Bs,_T),s(Bs,l1),s(l1,vT),i(e,F2,p),i(e,Eu,p),s(Eu,jT),i(e,V2,p),m(Vl,e,p),i(e,Y2,p),i(e,ss,p),s(ss,gT),s(ss,$u),s($u,yT),s(ss,wT),s(ss,r1),s(r1,bT),s(ss,qT),i(e,K2,p),i(e,ts,p),s(ts,ET),s(ts,p1),s(p1,$T),s(ts,kT),s(ts,i1),s(i1,PT),s(ts,zT),i(e,J2,p),i(e,ku,p),s(ku,DT),i(e,X2,p),m(Yl,e,p),i(e,Q2,p),i(e,xa,p),s(xa,OT),s(xa,Pu),s(Pu,TT),s(xa,AT),i(e,eb,p),i(e,Ra,p),s(Ra,ST),s(Ra,Kl),s(Kl,CT),s(Ra,xT),i(e,sb,p),i(e,Ws,p),s(Ws,Ia),s(Ia,u1),m(Jl,u1,null),s(Ws,RT),s(Ws,c1),s(c1,IT),i(e,tb,p),i(e,zu,p),s(zu,UT),i(e,ab,p),m(Xl,e,p),i(e,nb,p),i(e,Du,p),s(Du,GT),i(e,ob,p),i(e,as,p),s(as,LT),s(as,h1),s(h1,MT),s(as,ZT),s(as,f1),s(f1,NT),s(as,HT),i(e,lb,p),i(e,Ou,p),s(Ou,BT),i(e,rb,p),m(Ql,e,p),i(e,pb,p),i(e,Fs,p),s(Fs,Ua),s(Ua,d1),m(er,d1,null),s(Fs,WT),s(Fs,m1),s(m1,FT),i(e,ib,p),i(e,Tu,p),s(Tu,VT),i(e,ub,p),m(sr,e,p),i(e,cb,p),i(e,le,p),s(le,YT),s(le,Au),s(Au,KT),s(le,JT),s(le,_1),s(_1,XT),s(le,QT),s(le,v1),s(v1,eA),s(le,sA),i(e,hb,p),i(e,Ga,p),s(Ga,tA),s(Ga,j1),s(j1,aA),s(Ga,nA),i(e,fb,p),i(e,Su,p),s(Su,oA),i(e,db,p),m(tr,e,p),i(e,mb,p),i(e,La,p),s(La,lA),s(La,Cu),s(Cu,rA),s(La,pA),i(e,_b,p),i(e,Ma,p),s(Ma,iA),s(Ma,ar),s(ar,uA),s(Ma,cA),i(e,vb,p),i(e,xu,p),i(e,jb,p),i(e,Vs,p),s(Vs,Za),s(Za,g1),m(nr,g1,null),s(Vs,hA),s(Vs,y1),s(y1,fA),i(e,gb,p),i(e,Ru,p),s(Ru,dA),i(e,yb,p),m(or,e,p),i(e,wb,p),i(e,R,p),s(R,mA),s(R,Iu),s(Iu,_A),s(R,vA),s(R,w1),s(w1,jA),s(R,gA),s(R,b1),s(b1,yA),s(R,wA),s(R,q1),s(q1,bA),s(R,qA),s(R,E1),s(E1,EA),s(R,$A),i(e,bb,p),i(e,Uu,p),s(Uu,kA),i(e,qb,p),m(lr,e,p),i(e,Eb,p),i(e,Na,p),s(Na,PA),s(Na,Gu),s(Gu,zA),s(Na,DA),i(e,$b,p),i(e,Lu,p),i(e,kb,p),i(e,Ys,p),s(Ys,Ha),s(Ha,$1),m(rr,$1,null),s(Ys,OA),s(Ys,k1),s(k1,TA),i(e,Pb,p),i(e,Mu,p),s(Mu,AA),i(e,zb,p),m(pr,e,p),i(e,Db,p),i(e,ns,p),s(ns,SA),s(ns,Zu),s(Zu,CA),s(ns,xA),s(ns,P1),s(P1,RA),s(ns,IA),i(e,Ob,p),i(e,Nu,p),s(Nu,UA),i(e,Tb,p),m(ir,e,p),i(e,Ab,p),i(e,Ba,p),s(Ba,GA),s(Ba,Hu),s(Hu,LA),s(Ba,MA),i(e,Sb,p),i(e,Bu,p),i(e,Cb,p),i(e,Ks,p),s(Ks,Wa),s(Wa,z1),m(ur,z1,null),s(Ks,ZA),s(Ks,D1),s(D1,NA),i(e,xb,p),i(e,Wu,p),s(Wu,HA),i(e,Rb,p),m(cr,e,p),i(e,Ib,p),i(e,os,p),s(os,BA),s(os,Fu),s(Fu,WA),s(os,FA),s(os,O1),s(O1,VA),s(os,YA),i(e,Ub,p),i(e,Vu,p),s(Vu,KA),i(e,Gb,p),m(hr,e,p),i(e,Lb,p),i(e,Fa,p),s(Fa,JA),s(Fa,Yu),s(Yu,XA),s(Fa,QA),i(e,Mb,p),i(e,Ku,p),i(e,Zb,p),i(e,Js,p),s(Js,Va),s(Va,T1),m(fr,T1,null),s(Js,eS),s(Js,A1),s(A1,sS),i(e,Nb,p),i(e,Ya,p),s(Ya,tS),s(Ya,S1),s(S1,aS),s(Ya,nS),i(e,Hb,p),i(e,Ju,p),s(Ju,C1),s(C1,oS),i(e,Bb,p),i(e,Ka,p),s(Ka,lS),s(Ka,x1),s(x1,rS),s(Ka,pS),i(e,Wb,p),i(e,z,p),s(z,iS),s(z,R1),s(R1,uS),s(z,cS),s(z,I1),s(I1,hS),s(z,fS),s(z,U1),s(U1,dS),s(z,mS),s(z,G1),s(G1,_S),s(z,vS),s(z,L1),s(L1,jS),s(z,gS),s(z,M1),s(M1,yS),s(z,wS),i(e,Fb,p),m(dr,e,p),i(e,Vb,p),i(e,Xu,p),s(Xu,Z1),s(Z1,bS),i(e,Yb,p),i(e,Ja,p),s(Ja,qS),s(Ja,mr),s(mr,ES),s(Ja,$S),i(e,Kb,p),i(e,Qu,p),s(Qu,N1),s(N1,kS),i(e,Jb,p),i(e,ec,p),s(ec,PS),i(e,Xb,p),i(e,sc,p),s(sc,zS),i(e,Qb,p),m(_r,e,p),i(e,e3,p),i(e,ls,p),s(ls,DS),s(ls,H1),s(H1,OS),s(ls,TS),s(ls,B1),s(B1,AS),s(ls,SS),i(e,s3,p),m(vr,e,p),i(e,t3,p),m(Xa,e,p),i(e,a3,p),i(e,Qa,p),s(Qa,CS),s(Qa,W1),s(W1,xS),s(Qa,RS),i(e,n3,p),i(e,en,p),s(en,IS),s(en,F1),s(F1,US),s(en,GS),i(e,o3,p),m(jr,e,p),i(e,l3,p),i(e,tc,p),s(tc,V1),s(V1,LS),i(e,r3,p),i(e,rs,p),s(rs,MS),s(rs,Y1),s(Y1,ZS),s(rs,NS),s(rs,K1),s(K1,HS),s(rs,BS),i(e,p3,p),i(e,ac,p),s(ac,WS),i(e,i3,p),m(gr,e,p),i(e,u3,p),i(e,sn,p),s(sn,FS),s(sn,J1),s(J1,VS),s(sn,YS),i(e,c3,p),m(yr,e,p),i(e,h3,p),i(e,tn,p),s(tn,KS),s(tn,X1),s(X1,JS),s(tn,XS),i(e,f3,p),i(e,nc,p),s(nc,QS),i(e,d3,p),i(e,wr,p),s(wr,Q1),s(Q1,eC),s(wr,sC),i(e,m3,p),i(e,ps,p),s(ps,tC),s(ps,ev),s(ev,aC),s(ps,nC),s(ps,sv),s(sv,oC),s(ps,lC),i(e,_3,p),i(e,oc,p),s(oc,rC),i(e,v3,p),i(e,Xs,p),s(Xs,an),s(an,tv),m(br,tv,null),s(Xs,pC),s(Xs,av),s(av,iC),i(e,j3,p),i(e,lc,p),s(lc,uC),i(e,g3,p),i(e,rc,p),s(rc,cC),i(e,y3,p),i(e,pc,p),s(pc,hC),i(e,w3,p),i(e,Qs,p),s(Qs,nn),s(nn,nv),m(qr,nv,null),s(Qs,fC),s(Qs,ov),s(ov,dC),i(e,b3,p),i(e,on,p),s(on,mC),s(on,lv),s(lv,_C),s(on,vC),i(e,q3,p),m(Er,e,p),i(e,E3,p),i(e,ic,p),s(ic,jC),i(e,$3,p),i(e,k,p),s(k,gC),s(k,rv),s(rv,yC),s(k,wC),s(k,pv),s(pv,bC),s(k,qC),s(k,iv),s(iv,EC),s(k,$C),s(k,uc),s(uc,kC),s(k,PC),s(k,cc),s(cc,zC),s(k,DC),s(k,uv),s(uv,OC),s(k,TC),s(k,cv),s(cv,AC),s(k,SC),i(e,k3,p),m($r,e,p),i(e,P3,p),i(e,ln,p),s(ln,CC),s(ln,hv),s(hv,xC),s(ln,RC),i(e,z3,p),i(e,hc,p),s(hc,IC),i(e,D3,p),i(e,rn,p),s(rn,UC),s(rn,kr),s(kr,GC),s(rn,LC),i(e,O3,p),i(e,re,p),s(re,MC),s(re,fv),s(fv,ZC),s(re,NC),s(re,dv),s(dv,HC),s(re,BC),s(re,fc),s(fc,WC),s(re,FC),i(e,T3,p),i(e,et,p),s(et,pn),s(pn,mv),m(Pr,mv,null),s(et,VC),s(et,_v),s(_v,YC),i(e,A3,p),i(e,zr,p),s(zr,KC),s(zr,Dr),s(Dr,JC),i(e,S3,p),i(e,un,p),s(un,XC),s(un,vv),s(vv,QC),s(un,ex),i(e,C3,p),i(e,dc,p),s(dc,sx),i(e,x3,p),m(Or,e,p),i(e,R3,p),i(e,is,p),s(is,tx),s(is,jv),s(jv,ax),s(is,nx),s(is,gv),s(gv,ox),s(is,lx),i(e,I3,p),i(e,mc,p),i(e,U3,p),i(e,st,p),s(st,cn),s(cn,yv),m(Tr,yv,null),s(st,rx),s(st,wv),s(wv,px),i(e,G3,p),i(e,_c,p),s(_c,ix),i(e,L3,p),i(e,hn,p),s(hn,ux),s(hn,vc),s(vc,cx),s(hn,hx),i(e,M3,p),m(Ar,e,p),i(e,Z3,p),i(e,jc,p),s(jc,fx),i(e,N3,p),i(e,fn,p),s(fn,dx),s(fn,bv),s(bv,mx),s(fn,_x),i(e,H3,p),m(Sr,e,p),i(e,B3,p),i(e,gc,p),s(gc,vx),i(e,W3,p),i(e,yc,p),s(yc,jx),i(e,F3,p),i(e,tt,p),s(tt,dn),s(dn,qv),m(Cr,qv,null),s(tt,gx),s(tt,Ev),s(Ev,yx),i(e,V3,p),i(e,wc,p),s(wc,wx),i(e,Y3,p),i(e,bc,p),s(bc,bx),i(e,K3,p),m(xr,e,p),i(e,J3,p),i(e,qc,p),s(qc,qx),i(e,X3,p),i(e,Ec,p),s(Ec,Ex),i(e,Q3,p),i(e,$c,p),s($c,$x),i(e,e0,p),i(e,kc,p),s(kc,kx),i(e,s0,p),m(Rr,e,p),i(e,t0,p),i(e,Pc,p),s(Pc,Px),i(e,a0,p),i(e,mn,p),s(mn,zx),s(mn,Ir),s(Ir,Dx),s(mn,Ox),i(e,n0,p),i(e,at,p),s(at,_n),s(_n,$v),m(Ur,$v,null),s(at,Tx),s(at,kv),s(kv,Ax),i(e,o0,p),i(e,zc,p),s(zc,Sx),i(e,l0,p),i(e,Dc,p),s(Dc,Cx),i(e,r0,p),i(e,I,p),s(I,Pv),s(Pv,zv),s(zv,xx),s(I,Rx),s(I,Dv),s(Dv,$e),s($e,Ix),s($e,Oc),s(Oc,Ux),s($e,Gx),s($e,Tc),s(Tc,Lx),s($e,Mx),s($e,Ac),s(Ac,Zx),s($e,Nx),s(I,Hx),s(I,Gr),s(Gr,Ov),s(Ov,Bx),s(Gr,Wx),m(Lr,Gr,null),s(I,Fx),s(I,Tv),s(Tv,Mr),s(Mr,Vx),s(Mr,Zr),s(Zr,Yx),s(Mr,Kx),s(I,Jx),s(I,Av),s(Av,Sv),s(Sv,Xx),s(I,Qx),s(I,Cv),s(Cv,Nr),s(Nr,eR),s(Nr,Hr),s(Hr,sR),s(Nr,tR),i(e,p0,p),i(e,Sc,p),s(Sc,aR),i(e,i0,p),i(e,vn,p),s(vn,nt),s(nt,xv),s(xv,nR),s(nt,oR),s(nt,Rv),s(Rv,lR),s(nt,rR),s(nt,Iv),s(Iv,pR),s(vn,iR),s(vn,Uv),s(Uv,Br),s(Br,uR),s(Br,Wr),s(Wr,cR),s(Br,hR),i(e,u0,p),i(e,ot,p),s(ot,jn),s(jn,Gv),m(Fr,Gv,null),s(ot,fR),s(ot,Lv),s(Lv,dR),i(e,c0,p),i(e,lt,p),s(lt,gn),s(gn,Mv),m(Vr,Mv,null),s(lt,mR),s(lt,Yr),s(Yr,_R),s(Yr,Zv),s(Zv,vR),s(Yr,jR),i(e,h0,p),i(e,U,p),s(U,gR),s(U,Nv),s(Nv,yR),s(U,wR),s(U,Hv),s(Hv,bR),s(U,qR),s(U,Bv),s(Bv,ER),s(U,$R),s(U,Wv),s(Wv,kR),s(U,PR),s(U,Kr),s(Kr,zR),s(U,DR),i(e,f0,p),i(e,rt,p),s(rt,yn),s(yn,Fv),m(Jr,Fv,null),s(rt,OR),s(rt,Cc),s(Cc,TR),s(Cc,Vv),s(Vv,AR),i(e,d0,p),i(e,xc,p),s(xc,SR),i(e,m0,p),i(e,Rc,p),s(Rc,CR),i(e,_0,p),m(Xr,e,p),i(e,v0,p),i(e,wn,p),s(wn,xR),s(wn,Yv),s(Yv,RR),s(wn,IR),i(e,j0,p),m(Qr,e,p),i(e,g0,p),i(e,Ic,p),s(Ic,UR),i(e,y0,p),i(e,Uc,p),s(Uc,GR),i(e,w0,p),i(e,us,p),s(us,LR),s(us,Kv),s(Kv,MR),s(us,ZR),s(us,Jv),s(Jv,NR),s(us,HR),i(e,b0,p),i(e,pt,p),s(pt,bn),s(bn,Xv),m(ep,Xv,null),s(pt,BR),s(pt,Qv),s(Qv,WR),i(e,q0,p),i(e,cs,p),s(cs,qn),s(qn,FR),s(qn,Gc),s(Gc,VR),s(qn,YR),s(qn,ej),s(ej,KR),s(cs,JR),s(cs,sp),s(sp,XR),s(sp,tp),s(tp,QR),s(sp,eI),s(cs,sI),s(cs,it),s(it,tI),s(it,Lc),s(Lc,aI),s(it,nI),s(it,ap),s(ap,oI),s(it,lI),i(e,E0,p),i(e,Mc,p),i(e,$0,p),i(e,ut,p),s(ut,En),s(En,sj),m(np,sj,null),s(ut,rI),s(ut,tj),s(tj,pI),i(e,k0,p),i(e,pe,p),s(pe,iI),s(pe,Zc),s(Zc,uI),s(pe,cI),s(pe,Nc),s(Nc,hI),s(pe,fI),s(pe,aj),s(aj,dI),s(pe,mI),i(e,P0,p),i(e,$n,p),s($n,_I),s($n,Hc),s(Hc,vI),s($n,jI),i(e,z0,p),i(e,hs,p),s(hs,gI),s(hs,Bc),s(Bc,yI),s(hs,wI),s(hs,Wc),s(Wc,bI),s(hs,qI),i(e,D0,p),i(e,Fc,p),s(Fc,EI),i(e,O0,p),m(op,e,p),i(e,T0,p),i(e,Vc,p),s(Vc,$I),i(e,A0,p),m(lp,e,p),i(e,S0,p),i(e,ie,p),s(ie,kI),s(ie,Yc),s(Yc,PI),s(ie,zI),s(ie,rp),s(rp,DI),s(ie,OI),s(ie,nj),s(nj,TI),s(ie,AI),i(e,C0,p),i(e,ct,p),s(ct,kn),s(kn,oj),m(pp,oj,null),s(ct,SI),s(ct,lj),s(lj,CI),i(e,x0,p),i(e,E,p),m(ip,E,null),s(E,xI),s(E,rj),s(rj,RI),s(E,II),s(E,ke),s(ke,UI),s(ke,pj),s(pj,GI),s(ke,LI),s(ke,ij),s(ij,MI),s(ke,ZI),s(ke,uj),s(uj,NI),s(ke,HI),s(E,BI),s(E,ue),s(ue,Kc),s(Kc,WI),s(ue,FI),s(ue,cj),s(cj,VI),s(ue,YI),s(ue,Jc),s(Jc,KI),s(ue,JI),s(ue,hj),s(hj,XI),s(ue,QI),s(E,eU),s(E,fs),m(up,fs,null),s(fs,sU),s(fs,fj),s(fj,tU),s(fs,aU),s(fs,ht),s(ht,nU),s(ht,dj),s(dj,oU),s(ht,lU),s(ht,mj),s(mj,rU),s(ht,pU),s(E,iU),s(E,Pn),m(cp,Pn,null),s(Pn,uU),s(Pn,hp),s(hp,cU),s(hp,_j),s(_j,hU),s(hp,fU),s(E,dU),s(E,zn),m(fp,zn,null),s(zn,mU),s(zn,ft),s(ft,_U),s(ft,vj),s(vj,vU),s(ft,jU),s(ft,jj),s(jj,gU),s(ft,yU),s(E,wU),s(E,Dn),m(dp,Dn,null),s(Dn,bU),s(Dn,dt),s(dt,qU),s(dt,gj),s(gj,EU),s(dt,$U),s(dt,yj),s(yj,kU),s(dt,PU),i(e,R0,p),i(e,mt,p),s(mt,On),s(On,wj),m(mp,wj,null),s(mt,zU),s(mt,bj),s(bj,DU),i(e,I0,p),i(e,Tn,p),s(Tn,OU),s(Tn,Xc),s(Xc,TU),s(Tn,AU),i(e,U0,p),i(e,Qc,p),s(Qc,SU),i(e,G0,p),i(e,eh,p),s(eh,CU),i(e,L0,p),i(e,sh,p),s(sh,xU),i(e,M0,p),i(e,An,p),s(An,qj),s(qj,RU),s(An,IU),s(An,Ej),s(Ej,UU),i(e,Z0,p),m(_p,e,p),i(e,N0,p),i(e,Sn,p),s(Sn,GU),s(Sn,$j),s($j,LU),s(Sn,MU),i(e,H0,p),m(vp,e,p),i(e,B0,p),i(e,th,p),s(th,ZU),i(e,W0,p),i(e,_t,p),s(_t,Cn),s(Cn,kj),m(jp,kj,null),s(_t,NU),s(_t,Pj),s(Pj,HU),i(e,F0,p),i(e,ce,p),s(ce,zj),s(zj,gp),s(gp,BU),s(ce,WU),s(ce,Dj),s(Dj,yp),s(yp,FU),s(ce,VU),s(ce,Oj),s(Oj,wp),s(wp,YU),s(ce,KU),s(ce,Tj),s(Tj,bp),s(bp,JU),i(e,V0,p),i(e,ah,p),s(ah,XU),i(e,Y0,p),i(e,ds,p),s(ds,Aj),s(Aj,qp),s(qp,QU),s(ds,eG),s(ds,Sj),s(Sj,Ep),s(Ep,sG),s(ds,tG),s(ds,Cj),s(Cj,$p),s($p,aG),i(e,K0,p),i(e,ms,p),s(ms,nG),s(ms,nh),s(nh,oG),s(ms,lG),s(ms,kp),s(kp,rG),s(ms,pG),J0=!0},p(e,[p]){const Pp={};p&2&&(Pp.$$scope={dirty:p,ctx:e}),Xt.$set(Pp);const xj={};p&2&&(xj.$$scope={dirty:p,ctx:e}),Xa.$set(xj)},i(e){J0||(_(V.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(lo.$$.fragment,e),_(ro.$$.fragment,e),_(uo.$$.fragment,e),_(co.$$.fragment,e),_(ho.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(vo.$$.fragment,e),_(go.$$.fragment,e),_(wo.$$.fragment,e),_(bo.$$.fragment,e),_(Eo.$$.fragment,e),_(ko.$$.fragment,e),_(Po.$$.fragment,e),_(Do.$$.fragment,e),_(Ao.$$.fragment,e),_(So.$$.fragment,e),_(Co.$$.fragment,e),_(xo.$$.fragment,e),_(Ro.$$.fragment,e),_(Io.$$.fragment,e),_(Uo.$$.fragment,e),_(Mo.$$.fragment,e),_(Zo.$$.fragment,e),_(Ho.$$.fragment,e),_(Bo.$$.fragment,e),_(Wo.$$.fragment,e),_(Fo.$$.fragment,e),_(Vo.$$.fragment,e),_(Xt.$$.fragment,e),_(Ko.$$.fragment,e),_(el.$$.fragment,e),_(sl.$$.fragment,e),_(tl.$$.fragment,e),_(al.$$.fragment,e),_(nl.$$.fragment,e),_(dl.$$.fragment,e),_(ml.$$.fragment,e),_(gl.$$.fragment,e),_(wl.$$.fragment,e),_(bl.$$.fragment,e),_(ql.$$.fragment,e),_(El.$$.fragment,e),_($l.$$.fragment,e),_(kl.$$.fragment,e),_(Pl.$$.fragment,e),_(zl.$$.fragment,e),_(Ol.$$.fragment,e),_(xl.$$.fragment,e),_(Rl.$$.fragment,e),_(Il.$$.fragment,e),_(Ll.$$.fragment,e),_(Ml.$$.fragment,e),_(Zl.$$.fragment,e),_(Nl.$$.fragment,e),_(Hl.$$.fragment,e),_(Wl.$$.fragment,e),_(Fl.$$.fragment,e),_(Vl.$$.fragment,e),_(Yl.$$.fragment,e),_(Jl.$$.fragment,e),_(Xl.$$.fragment,e),_(Ql.$$.fragment,e),_(er.$$.fragment,e),_(sr.$$.fragment,e),_(tr.$$.fragment,e),_(nr.$$.fragment,e),_(or.$$.fragment,e),_(lr.$$.fragment,e),_(rr.$$.fragment,e),_(pr.$$.fragment,e),_(ir.$$.fragment,e),_(ur.$$.fragment,e),_(cr.$$.fragment,e),_(hr.$$.fragment,e),_(fr.$$.fragment,e),_(dr.$$.fragment,e),_(_r.$$.fragment,e),_(vr.$$.fragment,e),_(Xa.$$.fragment,e),_(jr.$$.fragment,e),_(gr.$$.fragment,e),_(yr.$$.fragment,e),_(br.$$.fragment,e),_(qr.$$.fragment,e),_(Er.$$.fragment,e),_($r.$$.fragment,e),_(Pr.$$.fragment,e),_(Or.$$.fragment,e),_(Tr.$$.fragment,e),_(Ar.$$.fragment,e),_(Sr.$$.fragment,e),_(Cr.$$.fragment,e),_(xr.$$.fragment,e),_(Rr.$$.fragment,e),_(Ur.$$.fragment,e),_(Lr.$$.fragment,e),_(Fr.$$.fragment,e),_(Vr.$$.fragment,e),_(Jr.$$.fragment,e),_(Xr.$$.fragment,e),_(Qr.$$.fragment,e),_(ep.$$.fragment,e),_(np.$$.fragment,e),_(op.$$.fragment,e),_(lp.$$.fragment,e),_(pp.$$.fragment,e),_(ip.$$.fragment,e),_(up.$$.fragment,e),_(cp.$$.fragment,e),_(fp.$$.fragment,e),_(dp.$$.fragment,e),_(mp.$$.fragment,e),_(_p.$$.fragment,e),_(vp.$$.fragment,e),_(jp.$$.fragment,e),J0=!0)},o(e){v(V.$$.fragment,e),v(no.$$.fragment,e),v(oo.$$.fragment,e),v(lo.$$.fragment,e),v(ro.$$.fragment,e),v(uo.$$.fragment,e),v(co.$$.fragment,e),v(ho.$$.fragment,e),v(mo.$$.fragment,e),v(_o.$$.fragment,e),v(vo.$$.fragment,e),v(go.$$.fragment,e),v(wo.$$.fragment,e),v(bo.$$.fragment,e),v(Eo.$$.fragment,e),v(ko.$$.fragment,e),v(Po.$$.fragment,e),v(Do.$$.fragment,e),v(Ao.$$.fragment,e),v(So.$$.fragment,e),v(Co.$$.fragment,e),v(xo.$$.fragment,e),v(Ro.$$.fragment,e),v(Io.$$.fragment,e),v(Uo.$$.fragment,e),v(Mo.$$.fragment,e),v(Zo.$$.fragment,e),v(Ho.$$.fragment,e),v(Bo.$$.fragment,e),v(Wo.$$.fragment,e),v(Fo.$$.fragment,e),v(Vo.$$.fragment,e),v(Xt.$$.fragment,e),v(Ko.$$.fragment,e),v(el.$$.fragment,e),v(sl.$$.fragment,e),v(tl.$$.fragment,e),v(al.$$.fragment,e),v(nl.$$.fragment,e),v(dl.$$.fragment,e),v(ml.$$.fragment,e),v(gl.$$.fragment,e),v(wl.$$.fragment,e),v(bl.$$.fragment,e),v(ql.$$.fragment,e),v(El.$$.fragment,e),v($l.$$.fragment,e),v(kl.$$.fragment,e),v(Pl.$$.fragment,e),v(zl.$$.fragment,e),v(Ol.$$.fragment,e),v(xl.$$.fragment,e),v(Rl.$$.fragment,e),v(Il.$$.fragment,e),v(Ll.$$.fragment,e),v(Ml.$$.fragment,e),v(Zl.$$.fragment,e),v(Nl.$$.fragment,e),v(Hl.$$.fragment,e),v(Wl.$$.fragment,e),v(Fl.$$.fragment,e),v(Vl.$$.fragment,e),v(Yl.$$.fragment,e),v(Jl.$$.fragment,e),v(Xl.$$.fragment,e),v(Ql.$$.fragment,e),v(er.$$.fragment,e),v(sr.$$.fragment,e),v(tr.$$.fragment,e),v(nr.$$.fragment,e),v(or.$$.fragment,e),v(lr.$$.fragment,e),v(rr.$$.fragment,e),v(pr.$$.fragment,e),v(ir.$$.fragment,e),v(ur.$$.fragment,e),v(cr.$$.fragment,e),v(hr.$$.fragment,e),v(fr.$$.fragment,e),v(dr.$$.fragment,e),v(_r.$$.fragment,e),v(vr.$$.fragment,e),v(Xa.$$.fragment,e),v(jr.$$.fragment,e),v(gr.$$.fragment,e),v(yr.$$.fragment,e),v(br.$$.fragment,e),v(qr.$$.fragment,e),v(Er.$$.fragment,e),v($r.$$.fragment,e),v(Pr.$$.fragment,e),v(Or.$$.fragment,e),v(Tr.$$.fragment,e),v(Ar.$$.fragment,e),v(Sr.$$.fragment,e),v(Cr.$$.fragment,e),v(xr.$$.fragment,e),v(Rr.$$.fragment,e),v(Ur.$$.fragment,e),v(Lr.$$.fragment,e),v(Fr.$$.fragment,e),v(Vr.$$.fragment,e),v(Jr.$$.fragment,e),v(Xr.$$.fragment,e),v(Qr.$$.fragment,e),v(ep.$$.fragment,e),v(np.$$.fragment,e),v(op.$$.fragment,e),v(lp.$$.fragment,e),v(pp.$$.fragment,e),v(ip.$$.fragment,e),v(up.$$.fragment,e),v(cp.$$.fragment,e),v(fp.$$.fragment,e),v(dp.$$.fragment,e),v(mp.$$.fragment,e),v(_p.$$.fragment,e),v(vp.$$.fragment,e),v(jp.$$.fragment,e),J0=!1},d(e){t(w),e&&t(Z),e&&t(b),j(V),e&&t(jt),e&&t(Y),e&&t(Mj),e&&t(O),e&&t(Zj),e&&t(ze),e&&t(Nj),e&&t(Rp),e&&t(Hj),e&&t(Ip),e&&t(Bj),e&&t(gt),e&&t(Wj),e&&t(yt),e&&t(Fj),e&&t(Mp),e&&t(Vj),e&&t(Zp),e&&t(Yj),e&&t(Np),e&&t(Kj),e&&t(Hp),e&&t(Jj),e&&t(Bp),e&&t(Xj),e&&t(Fp),e&&t(Qj),e&&t(Vp),e&&t(eg),e&&t(ws),j(no),e&&t(sg),e&&t(Yp),e&&t(tg),e&&t(bs),j(oo),e&&t(ag),e&&t(Kp),e&&t(ng),j(lo,e),e&&t(og),e&&t(De),e&&t(lg),j(ro,e),e&&t(rg),e&&t(Oe),e&&t(pg),e&&t(qt),e&&t(ig),e&&t(Xp),e&&t(ug),e&&t(Qp),e&&t(cg),j(uo,e),e&&t(hg),e&&t(Te),e&&t(fg),e&&t(Et),e&&t(dg),j(co,e),e&&t(mg),e&&t(we),e&&t(_g),e&&t(ei),e&&t(vg),j(ho,e),e&&t(jg),e&&t(Ae),e&&t(gg),e&&t($t),e&&t(yg),e&&t(Se),e&&t(wg),e&&t(si),e&&t(bg),j(mo,e),e&&t(qg),e&&t(ti),e&&t(Eg),j(_o,e),e&&t($g),e&&t(ai),e&&t(kg),j(vo,e),e&&t(Pg),e&&t(kt),e&&t(zg),e&&t(Pt),e&&t(Dg),e&&t(zt),e&&t(Og),e&&t(ni),e&&t(Tg),e&&t(qs),j(go),e&&t(Ag),e&&t(Ot),e&&t(Sg),e&&t(Tt),e&&t(Cg),e&&t(li),e&&t(xg),j(wo,e),e&&t(Rg),e&&t(ri),e&&t(Ig),j(bo,e),e&&t(Ug),e&&t(T),e&&t(Gg),e&&t(X),e&&t(Lg),e&&t(At),e&&t(Mg),j(Eo,e),e&&t(Zg),e&&t(St),e&&t(Ng),e&&t(Ct),e&&t(Hg),e&&t(pi),e&&t(Bg),e&&t($s),j(ko),e&&t(Wg),e&&t(Rt),e&&t(Fg),j(Po,e),e&&t(Vg),e&&t(Ce),e&&t(Yg),e&&t(ui),e&&t(Kg),e&&t(It),e&&t(Jg),e&&t(ci),e&&t(Xg),j(Do,e),e&&t(Qg),e&&t(hi),e&&t(ey),e&&t(Ut),e&&t(sy),e&&t(fi),e&&t(ty),e&&t(di),e&&t(ay),e&&t(mi),j(Ao),e&&t(ny),e&&t(_i),e&&t(oy),e&&t(Ps),j(So),e&&t(ly),e&&t(Lt),e&&t(ry),e&&t(vi),e&&t(py),j(Co,e),e&&t(iy),e&&t(Mt),e&&t(uy),e&&t(ji),e&&t(cy),e&&t(gi),e&&t(hy),j(xo,e),e&&t(fy),e&&t(xe),e&&t(dy),j(Ro,e),e&&t(my),e&&t(Zt),e&&t(_y),j(Io,e),e&&t(vy),e&&t(yi),e&&t(jy),e&&t(Nt),e&&t(gy),e&&t(wi),e&&t(yy),e&&t(zs),j(Uo),e&&t(wy),e&&t(Bt),e&&t(by),e&&t(Wt),e&&t(qy),j(Mo,e),e&&t(Ey),e&&t(Ft),e&&t($y),j(Zo,e),e&&t(ky),e&&t(Vt),e&&t(Py),e&&t(bi),e&&t(zy),e&&t(Q),e&&t(Dy),j(Ho,e),e&&t(Oy),e&&t(Yt),e&&t(Ty),e&&t(Ei),e&&t(Ay),e&&t(Ds),j(Bo),e&&t(Sy),e&&t(A),e&&t(Cy),e&&t(zi),e&&t(xy),j(Wo,e),e&&t(Ry),e&&t(Di),e&&t(Iy),j(Fo,e),e&&t(Uy),e&&t(Oi),e&&t(Gy),e&&t(Os),j(Vo),e&&t(Ly),j(Xt,e),e&&t(My),e&&t(Re),e&&t(Zy),e&&t(Qt),e&&t(Ny),e&&t(Ie),e&&t(Hy),e&&t(xi),e&&t(By),e&&t(ea),e&&t(Wy),e&&t(sa),e&&t(Fy),e&&t(ee),e&&t(Vy),e&&t(Gi),e&&t(Yy),e&&t(Ts),j(Ko),e&&t(Ky),e&&t(Jo),e&&t(Jy),e&&t(Ue),e&&t(Xy),e&&t(aa),e&&t(Qy),e&&t(Mi),e&&t(ew),e&&t(Zi),e&&t(sw),e&&t(As),j(el),e&&t(tw),e&&t(Ni),e&&t(aw),j(sl,e),e&&t(nw),e&&t(Hi),e&&t(ow),e&&t(Ge),e&&t(lw),e&&t(Le),e&&t(rw),j(tl,e),e&&t(pw),e&&t(Bi),e&&t(iw),e&&t(Wi),e&&t(uw),e&&t(Cs),j(al),e&&t(cw),e&&t(Fi),e&&t(hw),j(nl,e),e&&t(fw),e&&t(H),e&&t(dw),e&&t(Me),e&&t(mw),e&&t(Vi),e&&t(_w),e&&t(la),e&&t(vw),e&&t(C),e&&t(jw),e&&t(qe),e&&t(gw),e&&t(Yi),e&&t(yw),e&&t(Ze),e&&t(ww),e&&t(Ne),e&&t(bw),e&&t(ul),e&&t(qw),e&&t(se),e&&t(Ew),e&&t(Ji),e&&t($w),e&&t(Ee),e&&t(kw),e&&t(He),e&&t(Pw),e&&t(ra),e&&t(zw),e&&t(Xi),e&&t(Dw),e&&t(xs),j(dl),e&&t(Ow),e&&t(Qi),e&&t(Tw),e&&t(eu),e&&t(Aw),j(ml,e),e&&t(Sw),e&&t(ia),e&&t(Cw),e&&t(Be),e&&t(xw),e&&t(ua),e&&t(Rw),e&&t(We),e&&t(Iw),e&&t(su),e&&t(Uw),e&&t(Rs),j(gl),e&&t(Gw),e&&t(tu),e&&t(Lw),e&&t(au),e&&t(Mw),e&&t(ha),e&&t(Zw),e&&t(Fe),e&&t(Nw),e&&t(nu),e&&t(Hw),e&&t(Us),j(wl),e&&t(Bw),e&&t(da),e&&t(Ww),j(bl,e),e&&t(Fw),e&&t(ma),e&&t(Vw),j(ql,e),e&&t(Yw),e&&t(ou),e&&t(Kw),e&&t(Gs),j(El),e&&t(Jw),e&&t(va),e&&t(Xw),j($l,e),e&&t(Qw),e&&t(ja),e&&t(e2),j(kl,e),e&&t(s2),e&&t(Ls),j(Pl),e&&t(t2),e&&t(ya),e&&t(a2),e&&t(lu),e&&t(n2),e&&t(wa),e&&t(o2),e&&t(ru),e&&t(l2),e&&t(Ms),j(zl),e&&t(r2),e&&t(Ve),e&&t(p2),e&&t(q),e&&t(i2),e&&t(Ye),e&&t(u2),j(Ol,e),e&&t(c2),e&&t(iu),e&&t(h2),e&&t(te),e&&t(f2),e&&t(uu),e&&t(d2),e&&t(cu),e&&t(m2),j(xl,e),e&&t(_2),e&&t(qa),e&&t(v2),e&&t(fu),e&&t(j2),j(Rl,e),e&&t(g2),e&&t(ae),e&&t(y2),e&&t(du),e&&t(w2),e&&t(Zs),j(Il),e&&t(b2),e&&t(x),e&&t(q2),e&&t(mu),e&&t(E2),e&&t($a),e&&t($2),e&&t(P),e&&t(k2),e&&t(Je),e&&t(P2),j(Ll,e),e&&t(z2),e&&t(Xe),e&&t(D2),e&&t(ne),e&&t(O2),e&&t(ju),e&&t(T2),j(Ml,e),e&&t(A2),e&&t(za),e&&t(S2),e&&t(Da),e&&t(C2),j(Zl,e),e&&t(x2),e&&t(B),e&&t(R2),e&&t(yu),e&&t(I2),e&&t(Ns),j(Nl),e&&t(U2),e&&t(wu),e&&t(G2),e&&t(Ta),e&&t(L2),j(Hl,e),e&&t(M2),e&&t(Aa),e&&t(Z2),e&&t(oe),e&&t(N2),e&&t(bu),e&&t(H2),e&&t(Hs),j(Wl),e&&t(B2),e&&t(qu),e&&t(W2),e&&t(Bs),j(Fl),e&&t(F2),e&&t(Eu),e&&t(V2),j(Vl,e),e&&t(Y2),e&&t(ss),e&&t(K2),e&&t(ts),e&&t(J2),e&&t(ku),e&&t(X2),j(Yl,e),e&&t(Q2),e&&t(xa),e&&t(eb),e&&t(Ra),e&&t(sb),e&&t(Ws),j(Jl),e&&t(tb),e&&t(zu),e&&t(ab),j(Xl,e),e&&t(nb),e&&t(Du),e&&t(ob),e&&t(as),e&&t(lb),e&&t(Ou),e&&t(rb),j(Ql,e),e&&t(pb),e&&t(Fs),j(er),e&&t(ib),e&&t(Tu),e&&t(ub),j(sr,e),e&&t(cb),e&&t(le),e&&t(hb),e&&t(Ga),e&&t(fb),e&&t(Su),e&&t(db),j(tr,e),e&&t(mb),e&&t(La),e&&t(_b),e&&t(Ma),e&&t(vb),e&&t(xu),e&&t(jb),e&&t(Vs),j(nr),e&&t(gb),e&&t(Ru),e&&t(yb),j(or,e),e&&t(wb),e&&t(R),e&&t(bb),e&&t(Uu),e&&t(qb),j(lr,e),e&&t(Eb),e&&t(Na),e&&t($b),e&&t(Lu),e&&t(kb),e&&t(Ys),j(rr),e&&t(Pb),e&&t(Mu),e&&t(zb),j(pr,e),e&&t(Db),e&&t(ns),e&&t(Ob),e&&t(Nu),e&&t(Tb),j(ir,e),e&&t(Ab),e&&t(Ba),e&&t(Sb),e&&t(Bu),e&&t(Cb),e&&t(Ks),j(ur),e&&t(xb),e&&t(Wu),e&&t(Rb),j(cr,e),e&&t(Ib),e&&t(os),e&&t(Ub),e&&t(Vu),e&&t(Gb),j(hr,e),e&&t(Lb),e&&t(Fa),e&&t(Mb),e&&t(Ku),e&&t(Zb),e&&t(Js),j(fr),e&&t(Nb),e&&t(Ya),e&&t(Hb),e&&t(Ju),e&&t(Bb),e&&t(Ka),e&&t(Wb),e&&t(z),e&&t(Fb),j(dr,e),e&&t(Vb),e&&t(Xu),e&&t(Yb),e&&t(Ja),e&&t(Kb),e&&t(Qu),e&&t(Jb),e&&t(ec),e&&t(Xb),e&&t(sc),e&&t(Qb),j(_r,e),e&&t(e3),e&&t(ls),e&&t(s3),j(vr,e),e&&t(t3),j(Xa,e),e&&t(a3),e&&t(Qa),e&&t(n3),e&&t(en),e&&t(o3),j(jr,e),e&&t(l3),e&&t(tc),e&&t(r3),e&&t(rs),e&&t(p3),e&&t(ac),e&&t(i3),j(gr,e),e&&t(u3),e&&t(sn),e&&t(c3),j(yr,e),e&&t(h3),e&&t(tn),e&&t(f3),e&&t(nc),e&&t(d3),e&&t(wr),e&&t(m3),e&&t(ps),e&&t(_3),e&&t(oc),e&&t(v3),e&&t(Xs),j(br),e&&t(j3),e&&t(lc),e&&t(g3),e&&t(rc),e&&t(y3),e&&t(pc),e&&t(w3),e&&t(Qs),j(qr),e&&t(b3),e&&t(on),e&&t(q3),j(Er,e),e&&t(E3),e&&t(ic),e&&t($3),e&&t(k),e&&t(k3),j($r,e),e&&t(P3),e&&t(ln),e&&t(z3),e&&t(hc),e&&t(D3),e&&t(rn),e&&t(O3),e&&t(re),e&&t(T3),e&&t(et),j(Pr),e&&t(A3),e&&t(zr),e&&t(S3),e&&t(un),e&&t(C3),e&&t(dc),e&&t(x3),j(Or,e),e&&t(R3),e&&t(is),e&&t(I3),e&&t(mc),e&&t(U3),e&&t(st),j(Tr),e&&t(G3),e&&t(_c),e&&t(L3),e&&t(hn),e&&t(M3),j(Ar,e),e&&t(Z3),e&&t(jc),e&&t(N3),e&&t(fn),e&&t(H3),j(Sr,e),e&&t(B3),e&&t(gc),e&&t(W3),e&&t(yc),e&&t(F3),e&&t(tt),j(Cr),e&&t(V3),e&&t(wc),e&&t(Y3),e&&t(bc),e&&t(K3),j(xr,e),e&&t(J3),e&&t(qc),e&&t(X3),e&&t(Ec),e&&t(Q3),e&&t($c),e&&t(e0),e&&t(kc),e&&t(s0),j(Rr,e),e&&t(t0),e&&t(Pc),e&&t(a0),e&&t(mn),e&&t(n0),e&&t(at),j(Ur),e&&t(o0),e&&t(zc),e&&t(l0),e&&t(Dc),e&&t(r0),e&&t(I),j(Lr),e&&t(p0),e&&t(Sc),e&&t(i0),e&&t(vn),e&&t(u0),e&&t(ot),j(Fr),e&&t(c0),e&&t(lt),j(Vr),e&&t(h0),e&&t(U),e&&t(f0),e&&t(rt),j(Jr),e&&t(d0),e&&t(xc),e&&t(m0),e&&t(Rc),e&&t(_0),j(Xr,e),e&&t(v0),e&&t(wn),e&&t(j0),j(Qr,e),e&&t(g0),e&&t(Ic),e&&t(y0),e&&t(Uc),e&&t(w0),e&&t(us),e&&t(b0),e&&t(pt),j(ep),e&&t(q0),e&&t(cs),e&&t(E0),e&&t(Mc),e&&t($0),e&&t(ut),j(np),e&&t(k0),e&&t(pe),e&&t(P0),e&&t($n),e&&t(z0),e&&t(hs),e&&t(D0),e&&t(Fc),e&&t(O0),j(op,e),e&&t(T0),e&&t(Vc),e&&t(A0),j(lp,e),e&&t(S0),e&&t(ie),e&&t(C0),e&&t(ct),j(pp),e&&t(x0),e&&t(E),j(ip),j(up),j(cp),j(fp),j(dp),e&&t(R0),e&&t(mt),j(mp),e&&t(I0),e&&t(Tn),e&&t(U0),e&&t(Qc),e&&t(G0),e&&t(eh),e&&t(L0),e&&t(sh),e&&t(M0),e&&t(An),e&&t(Z0),j(_p,e),e&&t(N0),e&&t(Sn),e&&t(H0),j(vp,e),e&&t(B0),e&&t(th),e&&t(W0),e&&t(_t),j(jp),e&&t(F0),e&&t(ce),e&&t(V0),e&&t(ah),e&&t(Y0),e&&t(ds),e&&t(K0),e&&t(ms)}}}const xK={local:"deepspeed-integration",sections:[{local:"trainer-deepspeed-integration",sections:[{local:"installation",title:"Installation"},{local:"deployment-with-multiple-gpus",title:"Deployment with multiple GPUs"},{local:"deployment-with-one-gpu",title:"Deployment with one GPU"},{local:"deployment-in-notebooks",title:"Deployment in Notebooks"},{local:"configuration",title:"Configuration"},{local:"passing-configuration",title:"Passing Configuration"},{local:"shared-configuration",title:"Shared Configuration"},{local:"zero",sections:[{local:"zero2-config",title:"ZeRO-2 Config"},{local:"zero3-config",title:"ZeRO-3 Config"}],title:"ZeRO"},{local:"nvme-support",sections:[{local:"zero2-vs-zero3-performance",title:"ZeRO-2 vs ZeRO-3 Performance"},{local:"zero2-example",title:"ZeRO-2 Example"},{local:"zero3-example",title:"ZeRO-3 Example"}],title:"NVMe Support"},{local:"optimizer-and-scheduler",sections:[{local:"optimizer",title:"Optimizer"},{local:"scheduler",title:"Scheduler"}],title:"Optimizer and Scheduler"},{local:"fp32-precision",title:"fp32 Precision"},{local:"automatic-mixed-precision",title:"Automatic Mixed Precision"},{local:"fp16",title:"fp16"},{local:"bf16",title:"bf16"},{local:"apex",title:"apex"},{local:"batch-size",title:"Batch Size"},{local:"gradient-accumulation",title:"Gradient Accumulation"},{local:"gradient-clipping",title:"Gradient Clipping"},{local:"getting-the-model-weights-out",title:"Getting The Model Weights Out"},{local:"zero3-and-infinity-nuances",sections:[{local:"constructing-massive-models",title:"Constructing Massive Models"},{local:"gathering-parameters",title:"Gathering Parameters"}],title:"ZeRO-3 and Infinity Nuances"},{local:"zero-inference",title:"ZeRO Inference"},{local:"memory-requirements",title:"Memory Requirements"},{local:"filing-issues",title:"Filing Issues"},{local:"troubleshooting",sections:[{local:"the-deepspeed-process-gets-killed-at-startup-without-a-traceback",title:"the `deepspeed` process gets killed at startup without a traceback"},{local:"training-andor-evalpredict-loss-is-nan",title:"training and/or eval/predict loss is `NaN`"}],title:"Troubleshooting"},{local:"notes",title:"Notes"}],title:"Trainer Deepspeed Integration"},{local:"nontrainer-deepspeed-integration",title:"Non-Trainer Deepspeed Integration"},{local:"transformers.deepspeed.HfDeepSpeedConfig",sections:[{local:"custom-deepspeed-zero-inference",title:"Custom DeepSpeed ZeRO Inference"}],title:"HfDeepSpeedConfig"},{local:"main-deepspeed-resources",title:"Main DeepSpeed Resources"}],title:"DeepSpeed Integration"};function RK(Jn,w,Z){let{fw:b}=w;return Jn.$$set=$=>{"fw"in $&&Z(0,b=$.fw)},[b]}class NK extends zK{constructor(w){super();DK(this,w,RK,CK,OK,{fw:0})}}export{NK as default,xK as metadata};
