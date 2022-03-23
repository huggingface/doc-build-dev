import{S as Wc,i as Bc,s as Uc,e as a,k as l,w as b,t as n,M as Vc,c as r,d as t,m as d,a as i,x as y,h as s,b as c,F as e,g as u,y as C,q as w,o as L,B as $,v as Gc}from"../../chunks/vendor-6b77c823.js";import{T as Lt}from"../../chunks/Tip-39098574.js";import{D as Ee}from"../../chunks/Docstring-abef54e3.js";import{C as $t}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as lt}from"../../chunks/IconCopyLink-7a11ce68.js";function Kc(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Xc(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Jc(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Qc(X){let h,E,m,g,v,T,_,M,ge,Y,R,J,A,Z,_e,O,Te,ce,x,S,ee,ne,F,q,ve,B,pe,se,U,he,ae,z,ke,H,re,be,W,j,te,I,oe,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),S=r(p,"P",{});var He=i(S);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);j=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),te=d(D),I=r(D,"LI",{});var Ce=i(I);oe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Y,k),u(p,R,k),e(R,J),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,S,k),e(S,ee),u(p,ne,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,se),e(q,U),e(U,he),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,j),e(F,te),e(F,I),e(I,oe),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(S),p&&t(ne),p&&t(F)}}}function Yc(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Zc(X){let h,E,m,g,v,T,_,M,ge,Y,R,J,A,Z,_e,O,Te,ce,x,S,ee,ne,F,q,ve,B,pe,se,U,he,ae,z,ke,H,re,be,W,j,te,I,oe,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),S=r(p,"P",{});var He=i(S);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);j=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),te=d(D),I=r(D,"LI",{});var Ce=i(I);oe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Y,k),u(p,R,k),e(R,J),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,S,k),e(S,ee),u(p,ne,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,se),e(q,U),e(U,he),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,j),e(F,te),e(F,I),e(I,oe),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(S),p&&t(ne),p&&t(F)}}}function ep(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function tp(X){let h,E,m,g,v,T,_,M,ge,Y,R,J,A,Z,_e,O,Te,ce,x,S,ee,ne,F,q,ve,B,pe,se,U,he,ae,z,ke,H,re,be,W,j,te,I,oe,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Z=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),S=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ne=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),ae=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),re=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),j=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),I=a("li"),oe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var ie=i(g);v=r(ie,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(ie),M=r(ie,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),ie.forEach(t),Y=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Z=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),S=r(p,"P",{});var He=i(S);ee=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),ne=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),se=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),ae=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);re=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);j=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),te=d(D),I=r(D,"LI",{});var Ce=i(I);oe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Y,k),u(p,R,k),e(R,J),e(R,A),e(A,Z),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,S,k),e(S,ee),u(p,ne,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,se),e(q,U),e(U,he),e(F,ae),e(F,z),e(z,ke),e(z,H),e(H,re),e(z,be),e(z,W),e(W,j),e(F,te),e(F,I),e(I,oe),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Y),p&&t(R),p&&t(x),p&&t(S),p&&t(ne),p&&t(F)}}}function op(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function np(X){let h,E,m,g,v,T,_,M,ge,Y,R,J,A,Z,_e,O,Te,ce,x,S,ee,ne,F,q,ve,B,pe,se,U,he,ae,z,ke,H,re,be,W,j,te,I,oe,V,ye,p,k,ie,Ae,ue,N,Fe,Oe,He,D,P,We,qe,G,Be,ze,Ce,Ue,Rn,ha,ua,Jo,Mn,fa,ma,Ls,Je,ga,Gt,_a,Ta,Kt,va,ka,$s,dt,Rt,En,Xt,ba,Fn,ya,Rs,we,Jt,Ca,Xe,wa,Qo,La,$a,Yo,Ra,Ma,Qt,Ea,Fa,qa,ct,za,Zo,Pa,xa,en,Sa,ja,Ia,qn,Na,Da,Yt,Ms,pt,Mt,zn,Zt,Aa,Pn,Oa,Es,Ne,eo,Ha,xn,Wa,Ba,to,Ua,tn,Va,Ga,Ka,on,oo,Fs,ht,Et,Sn,no,Xa,jn,Ja,qs,Le,so,Qa,In,Ya,Za,ao,er,nn,tr,or,nr,ro,sr,io,ar,rr,ir,Pe,lo,lr,ut,dr,sn,cr,pr,Nn,hr,ur,fr,Ft,mr,Dn,gr,_r,co,zs,ft,qt,An,po,Tr,On,vr,Ps,$e,ho,kr,Hn,br,yr,uo,Cr,an,wr,Lr,$r,fo,Rr,mo,Mr,Er,Fr,xe,go,qr,mt,zr,rn,Pr,xr,Wn,Sr,jr,Ir,zt,Nr,Bn,Dr,Ar,_o,xs,gt,Pt,Un,To,Or,Vn,Hr,Ss,Re,vo,Wr,Me,Br,ln,Ur,Vr,Gn,Gr,Kr,Kn,Xr,Jr,Xn,Qr,Yr,Jn,Zr,ei,ti,ko,oi,dn,ni,si,ai,bo,ri,yo,ii,li,di,Q,Co,ci,_t,pi,cn,hi,ui,Qn,fi,mi,gi,xt,_i,Yn,Ti,vi,wo,ki,Lo,bi,Zn,yi,Ci,$o,js,Tt,St,es,Ro,wi,ts,Li,Is,le,Mo,$i,os,Ri,Mi,Eo,Ei,pn,Fi,qi,zi,Fo,Pi,qo,xi,Si,ji,jt,Ii,Se,zo,Ni,vt,Di,hn,Ai,Oi,ns,Hi,Wi,Bi,It,Ui,ss,Vi,Gi,Po,Ns,kt,Nt,as,xo,Ki,rs,Xi,Ds,de,So,Ji,is,Qi,Yi,jo,Zi,un,el,tl,ol,Io,nl,No,sl,al,rl,Dt,il,je,Do,ll,bt,dl,fn,cl,pl,ls,hl,ul,fl,At,ml,ds,gl,_l,Ao,As,yt,Ot,cs,Oo,Tl,ps,vl,Os,K,Ho,kl,hs,bl,yl,mn,gn,Cl,wl,Ll,De,$l,us,Rl,Ml,fs,El,Fl,ms,ql,zl,gs,Pl,xl,Sl,Wo,jl,_n,Il,Nl,Dl,Bo,Al,Uo,Ol,Hl,Wl,Ht,Bl,Ie,Vo,Ul,Ct,Vl,Tn,Gl,Kl,_s,Xl,Jl,Ql,Wt,Yl,Ts,Zl,ed,Go,Hs;return T=new lt({}),Z=new lt({}),Xt=new lt({}),Jt=new Ee({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.CTRLConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 1280) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.CTRLConfig.dff",description:`<strong>dff</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the inner dimension of the feed forward networks (FFN).`,name:"dff"},{anchor:"transformers.CTRLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 48) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.CTRLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.CTRLConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.CTRLConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.CTRLConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.CTRLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.CTRLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CTRLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Yt=new $t({props:{code:`from transformers import CTRLModel, CTRLConfig

# Initializing a CTRL configuration
configuration = CTRLConfig()

# Initializing a model from the configuration
model = CTRLModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLModel, CTRLConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new lt({}),eo=new Ee({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Ee({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new lt({}),so=new Ee({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L320",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ee({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L353",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ft=new Lt({props:{$$slots:{default:[Kc]},$$scope:{ctx:X}}}),co=new $t({props:{code:`from transformers import CTRLTokenizer, CTRLModel
import torch

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),po=new lt({}),ho=new Ee({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L493",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Ee({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L515",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zt=new Lt({props:{$$slots:{default:[Xc]},$$scope:{ctx:X}}}),_o=new $t({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLLMHeadModel

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new lt({}),vo=new Ee({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L609",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ee({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_ctrl.py#L619",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new Lt({props:{$$slots:{default:[Jc]},$$scope:{ctx:X}}}),wo=new $t({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Lo=new $t({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),$o=new $t({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]


<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Ro=new lt({}),Mo=new Ee({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L517",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jt=new Lt({props:{$$slots:{default:[Qc]},$$scope:{ctx:X}}}),zo=new Ee({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L522",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new Lt({props:{$$slots:{default:[Yc]},$$scope:{ctx:X}}}),Po=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),xo=new lt({}),So=new Ee({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L612",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dt=new Lt({props:{$$slots:{default:[Zc]},$$scope:{ctx:X}}}),Do=new Ee({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L633",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLLMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),At=new Lt({props:{$$slots:{default:[ep]},$$scope:{ctx:X}}}),Ao=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLLMHeadModel.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Oo=new lt({}),Ho=new Ee({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L730",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new Lt({props:{$$slots:{default:[tp]},$$scope:{ctx:X}}}),Vo=new Ee({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/ctrl/modeling_tf_ctrl.py#L745",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLForSequenceClassification.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new Lt({props:{$$slots:{default:[op]},$$scope:{ctx:X}}}),Go=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("meta"),E=l(),m=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),M=a("span"),ge=n("CTRL"),Y=l(),R=a("h2"),J=a("a"),A=a("span"),b(Z.$$.fragment),_e=l(),O=a("span"),Te=n("Overview"),ce=l(),x=a("p"),S=n("CTRL model was proposed in "),ee=a("a"),ne=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),ve=n(", Bryan McCann"),B=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),pe=l(),se=a("p"),U=n("The abstract from the paper is the following:"),he=l(),ae=a("p"),z=a("em"),ke=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),re=a("p"),be=n("Tips:"),W=l(),j=a("ul"),te=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=a("a"),V=n("original implementation"),ye=n(` for
more information.`),p=l(),k=a("li"),ie=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=a("em"),Oe=n("run_generation.py"),He=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),qe=a("code"),G=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=a("code"),Ce=n("past"),Ue=n(" as input. Using the "),Rn=a("code"),ha=n("past_key_values"),ua=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Jo=a("a"),Mn=a("code"),fa=n("forward"),ma=n(`
method for more information on the usage of this argument.`),Ls=l(),Je=a("p"),ga=n("This model was contributed by "),Gt=a("a"),_a=n("keskarnitishr"),Ta=n(`. The original code can be found
`),Kt=a("a"),va=n("here"),ka=n("."),$s=l(),dt=a("h2"),Rt=a("a"),En=a("span"),b(Xt.$$.fragment),ba=l(),Fn=a("span"),ya=n("CTRLConfig"),Rs=l(),we=a("div"),b(Jt.$$.fragment),Ca=l(),Xe=a("p"),wa=n("This is the configuration class to store the configuration of a "),Qo=a("a"),La=n("CTRLModel"),$a=n(" or a "),Yo=a("a"),Ra=n("TFCTRLModel"),Ma=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),Ea=n("ctrl"),Fa=n(" architecture from SalesForce."),qa=l(),ct=a("p"),za=n("Configuration objects inherit from "),Zo=a("a"),Pa=n("PretrainedConfig"),xa=n(` and can be used to control the model outputs. Read the
documentation from `),en=a("a"),Sa=n("PretrainedConfig"),ja=n(" for more information."),Ia=l(),qn=a("p"),Na=n("Examples:"),Da=l(),b(Yt.$$.fragment),Ms=l(),pt=a("h2"),Mt=a("a"),zn=a("span"),b(Zt.$$.fragment),Aa=l(),Pn=a("span"),Oa=n("CTRLTokenizer"),Es=l(),Ne=a("div"),b(eo.$$.fragment),Ha=l(),xn=a("p"),Wa=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Ba=l(),to=a("p"),Ua=n("This tokenizer inherits from "),tn=a("a"),Va=n("PreTrainedTokenizer"),Ga=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ka=l(),on=a("div"),b(oo.$$.fragment),Fs=l(),ht=a("h2"),Et=a("a"),Sn=a("span"),b(no.$$.fragment),Xa=l(),jn=a("span"),Ja=n("CTRLModel"),qs=l(),Le=a("div"),b(so.$$.fragment),Qa=l(),In=a("p"),Ya=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Za=l(),ao=a("p"),er=n("This model inherits from "),nn=a("a"),tr=n("PreTrainedModel"),or=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nr=l(),ro=a("p"),sr=n("This model is also a PyTorch "),io=a("a"),ar=n("torch.nn.Module"),rr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=l(),Pe=a("div"),b(lo.$$.fragment),lr=l(),ut=a("p"),dr=n("The "),sn=a("a"),cr=n("CTRLModel"),pr=n(" forward method, overrides the "),Nn=a("code"),hr=n("__call__"),ur=n(" special method."),fr=l(),b(Ft.$$.fragment),mr=l(),Dn=a("p"),gr=n("Example:"),_r=l(),b(co.$$.fragment),zs=l(),ft=a("h2"),qt=a("a"),An=a("span"),b(po.$$.fragment),Tr=l(),On=a("span"),vr=n("CTRLLMHeadModel"),Ps=l(),$e=a("div"),b(ho.$$.fragment),kr=l(),Hn=a("p"),br=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yr=l(),uo=a("p"),Cr=n("This model inherits from "),an=a("a"),wr=n("PreTrainedModel"),Lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=l(),fo=a("p"),Rr=n("This model is also a PyTorch "),mo=a("a"),Mr=n("torch.nn.Module"),Er=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fr=l(),xe=a("div"),b(go.$$.fragment),qr=l(),mt=a("p"),zr=n("The "),rn=a("a"),Pr=n("CTRLLMHeadModel"),xr=n(" forward method, overrides the "),Wn=a("code"),Sr=n("__call__"),jr=n(" special method."),Ir=l(),b(zt.$$.fragment),Nr=l(),Bn=a("p"),Dr=n("Example:"),Ar=l(),b(_o.$$.fragment),xs=l(),gt=a("h2"),Pt=a("a"),Un=a("span"),b(To.$$.fragment),Or=l(),Vn=a("span"),Hr=n("CTRLForSequenceClassification"),Ss=l(),Re=a("div"),b(vo.$$.fragment),Wr=l(),Me=a("p"),Br=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),ln=a("a"),Ur=n("CTRLForSequenceClassification"),Vr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Gn=a("code"),Gr=n("pad_token_id"),Kr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Kn=a("code"),Xr=n("pad_token_id"),Jr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Xn=a("code"),Qr=n("inputs_embeds"),Yr=n(" are passed instead of "),Jn=a("code"),Zr=n("input_ids"),ei=n(`, it does the same (take the last
value in each row of the batch).`),ti=l(),ko=a("p"),oi=n("This model inherits from "),dn=a("a"),ni=n("PreTrainedModel"),si=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai=l(),bo=a("p"),ri=n("This model is also a PyTorch "),yo=a("a"),ii=n("torch.nn.Module"),li=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di=l(),Q=a("div"),b(Co.$$.fragment),ci=l(),_t=a("p"),pi=n("The "),cn=a("a"),hi=n("CTRLForSequenceClassification"),ui=n(" forward method, overrides the "),Qn=a("code"),fi=n("__call__"),mi=n(" special method."),gi=l(),b(xt.$$.fragment),_i=l(),Yn=a("p"),Ti=n("Example of single-label classification:"),vi=l(),b(wo.$$.fragment),ki=l(),b(Lo.$$.fragment),bi=l(),Zn=a("p"),yi=n("Example of multi-label classification:"),Ci=l(),b($o.$$.fragment),js=l(),Tt=a("h2"),St=a("a"),es=a("span"),b(Ro.$$.fragment),wi=l(),ts=a("span"),Li=n("TFCTRLModel"),Is=l(),le=a("div"),b(Mo.$$.fragment),$i=l(),os=a("p"),Ri=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Mi=l(),Eo=a("p"),Ei=n("This model inherits from "),pn=a("a"),Fi=n("TFPreTrainedModel"),qi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zi=l(),Fo=a("p"),Pi=n("This model is also a "),qo=a("a"),xi=n("tf.keras.Model"),Si=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ji=l(),b(jt.$$.fragment),Ii=l(),Se=a("div"),b(zo.$$.fragment),Ni=l(),vt=a("p"),Di=n("The "),hn=a("a"),Ai=n("TFCTRLModel"),Oi=n(" forward method, overrides the "),ns=a("code"),Hi=n("__call__"),Wi=n(" special method."),Bi=l(),b(It.$$.fragment),Ui=l(),ss=a("p"),Vi=n("Example:"),Gi=l(),b(Po.$$.fragment),Ns=l(),kt=a("h2"),Nt=a("a"),as=a("span"),b(xo.$$.fragment),Ki=l(),rs=a("span"),Xi=n("TFCTRLLMHeadModel"),Ds=l(),de=a("div"),b(So.$$.fragment),Ji=l(),is=a("p"),Qi=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Yi=l(),jo=a("p"),Zi=n("This model inherits from "),un=a("a"),el=n("TFPreTrainedModel"),tl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ol=l(),Io=a("p"),nl=n("This model is also a "),No=a("a"),sl=n("tf.keras.Model"),al=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rl=l(),b(Dt.$$.fragment),il=l(),je=a("div"),b(Do.$$.fragment),ll=l(),bt=a("p"),dl=n("The "),fn=a("a"),cl=n("TFCTRLLMHeadModel"),pl=n(" forward method, overrides the "),ls=a("code"),hl=n("__call__"),ul=n(" special method."),fl=l(),b(At.$$.fragment),ml=l(),ds=a("p"),gl=n("Example:"),_l=l(),b(Ao.$$.fragment),As=l(),yt=a("h2"),Ot=a("a"),cs=a("span"),b(Oo.$$.fragment),Tl=l(),ps=a("span"),vl=n("TFCTRLForSequenceClassification"),Os=l(),K=a("div"),b(Ho.$$.fragment),kl=l(),hs=a("p"),bl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),yl=l(),mn=a("p"),gn=a("a"),Cl=n("TFCTRLForSequenceClassification"),wl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),Ll=l(),De=a("p"),$l=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),us=a("code"),Rl=n("pad_token_id"),Ml=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=a("code"),El=n("pad_token_id"),Fl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=a("code"),ql=n("inputs_embeds"),zl=n(" are passed instead of "),gs=a("code"),Pl=n("input_ids"),xl=n(`, it does the same (take the last value in
each row of the batch).`),Sl=l(),Wo=a("p"),jl=n("This model inherits from "),_n=a("a"),Il=n("TFPreTrainedModel"),Nl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl=l(),Bo=a("p"),Al=n("This model is also a "),Uo=a("a"),Ol=n("tf.keras.Model"),Hl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl=l(),b(Ht.$$.fragment),Bl=l(),Ie=a("div"),b(Vo.$$.fragment),Ul=l(),Ct=a("p"),Vl=n("The "),Tn=a("a"),Gl=n("TFCTRLForSequenceClassification"),Kl=n(" forward method, overrides the "),_s=a("code"),Xl=n("__call__"),Jl=n(" special method."),Ql=l(),b(Wt.$$.fragment),Yl=l(),Ts=a("p"),Zl=n("Example:"),ed=l(),b(Go.$$.fragment),this.h()},l(o){const f=Vc('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),E=d(o),m=r(o,"H1",{class:!0});var Ko=i(m);g=r(Ko,"A",{id:!0,class:!0,href:!0});var vs=i(g);v=r(vs,"SPAN",{});var ks=i(v);y(T.$$.fragment,ks),ks.forEach(t),vs.forEach(t),_=d(Ko),M=r(Ko,"SPAN",{});var bs=i(M);ge=s(bs,"CTRL"),bs.forEach(t),Ko.forEach(t),Y=d(o),R=r(o,"H2",{class:!0});var Xo=i(R);J=r(Xo,"A",{id:!0,class:!0,href:!0});var ys=i(J);A=r(ys,"SPAN",{});var Cs=i(A);y(Z.$$.fragment,Cs),Cs.forEach(t),ys.forEach(t),_e=d(Xo),O=r(Xo,"SPAN",{});var ws=i(O);Te=s(ws,"Overview"),ws.forEach(t),Xo.forEach(t),ce=d(o),x=r(o,"P",{});var wt=i(x);S=s(wt,"CTRL model was proposed in "),ee=r(wt,"A",{href:!0,rel:!0});var od=i(ee);ne=s(od,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),od.forEach(t),F=s(wt," by Nitish Shirish Keskar"),q=r(wt,"EM",{});var nd=i(q);ve=s(nd,", Bryan McCann"),nd.forEach(t),B=s(wt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),wt.forEach(t),pe=d(o),se=r(o,"P",{});var sd=i(se);U=s(sd,"The abstract from the paper is the following:"),sd.forEach(t),he=d(o),ae=r(o,"P",{});var ad=i(ae);z=r(ad,"EM",{});var rd=i(z);ke=s(rd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),rd.forEach(t),ad.forEach(t),H=d(o),re=r(o,"P",{});var id=i(re);be=s(id,"Tips:"),id.forEach(t),W=d(o),j=r(o,"UL",{});var Bt=i(j);te=r(Bt,"LI",{});var Ws=i(te);I=s(Ws,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),oe=r(Ws,"A",{href:!0,rel:!0});var ld=i(oe);V=s(ld,"original implementation"),ld.forEach(t),ye=s(Ws,` for
more information.`),Ws.forEach(t),p=d(Bt),k=r(Bt,"LI",{});var dd=i(k);ie=s(dd,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),dd.forEach(t),Ae=d(Bt),ue=r(Bt,"LI",{});var Bs=i(ue);N=s(Bs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=r(Bs,"EM",{});var cd=i(Fe);Oe=s(cd,"run_generation.py"),cd.forEach(t),He=s(Bs," example script."),Bs.forEach(t),D=d(Bt),P=r(Bt,"LI",{});var Qe=i(P);We=s(Qe,"The PyTorch models can take the "),qe=r(Qe,"CODE",{});var pd=i(qe);G=s(pd,"past_key_values"),pd.forEach(t),Be=s(Qe,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=r(Qe,"CODE",{});var hd=i(ze);Ce=s(hd,"past"),hd.forEach(t),Ue=s(Qe," as input. Using the "),Rn=r(Qe,"CODE",{});var ud=i(Rn);ha=s(ud,"past_key_values"),ud.forEach(t),ua=s(Qe,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Jo=r(Qe,"A",{href:!0});var fd=i(Jo);Mn=r(fd,"CODE",{});var md=i(Mn);fa=s(md,"forward"),md.forEach(t),fd.forEach(t),ma=s(Qe,`
method for more information on the usage of this argument.`),Qe.forEach(t),Bt.forEach(t),Ls=d(o),Je=r(o,"P",{});var vn=i(Je);ga=s(vn,"This model was contributed by "),Gt=r(vn,"A",{href:!0,rel:!0});var gd=i(Gt);_a=s(gd,"keskarnitishr"),gd.forEach(t),Ta=s(vn,`. The original code can be found
`),Kt=r(vn,"A",{href:!0,rel:!0});var _d=i(Kt);va=s(_d,"here"),_d.forEach(t),ka=s(vn,"."),vn.forEach(t),$s=d(o),dt=r(o,"H2",{class:!0});var Us=i(dt);Rt=r(Us,"A",{id:!0,class:!0,href:!0});var Td=i(Rt);En=r(Td,"SPAN",{});var vd=i(En);y(Xt.$$.fragment,vd),vd.forEach(t),Td.forEach(t),ba=d(Us),Fn=r(Us,"SPAN",{});var kd=i(Fn);ya=s(kd,"CTRLConfig"),kd.forEach(t),Us.forEach(t),Rs=d(o),we=r(o,"DIV",{class:!0});var Ye=i(we);y(Jt.$$.fragment,Ye),Ca=d(Ye),Xe=r(Ye,"P",{});var Ut=i(Xe);wa=s(Ut,"This is the configuration class to store the configuration of a "),Qo=r(Ut,"A",{href:!0});var bd=i(Qo);La=s(bd,"CTRLModel"),bd.forEach(t),$a=s(Ut," or a "),Yo=r(Ut,"A",{href:!0});var yd=i(Yo);Ra=s(yd,"TFCTRLModel"),yd.forEach(t),Ma=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Cd=i(Qt);Ea=s(Cd,"ctrl"),Cd.forEach(t),Fa=s(Ut," architecture from SalesForce."),Ut.forEach(t),qa=d(Ye),ct=r(Ye,"P",{});var kn=i(ct);za=s(kn,"Configuration objects inherit from "),Zo=r(kn,"A",{href:!0});var wd=i(Zo);Pa=s(wd,"PretrainedConfig"),wd.forEach(t),xa=s(kn,` and can be used to control the model outputs. Read the
documentation from `),en=r(kn,"A",{href:!0});var Ld=i(en);Sa=s(Ld,"PretrainedConfig"),Ld.forEach(t),ja=s(kn," for more information."),kn.forEach(t),Ia=d(Ye),qn=r(Ye,"P",{});var $d=i(qn);Na=s($d,"Examples:"),$d.forEach(t),Da=d(Ye),y(Yt.$$.fragment,Ye),Ye.forEach(t),Ms=d(o),pt=r(o,"H2",{class:!0});var Vs=i(pt);Mt=r(Vs,"A",{id:!0,class:!0,href:!0});var Rd=i(Mt);zn=r(Rd,"SPAN",{});var Md=i(zn);y(Zt.$$.fragment,Md),Md.forEach(t),Rd.forEach(t),Aa=d(Vs),Pn=r(Vs,"SPAN",{});var Ed=i(Pn);Oa=s(Ed,"CTRLTokenizer"),Ed.forEach(t),Vs.forEach(t),Es=d(o),Ne=r(o,"DIV",{class:!0});var Vt=i(Ne);y(eo.$$.fragment,Vt),Ha=d(Vt),xn=r(Vt,"P",{});var Fd=i(xn);Wa=s(Fd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Fd.forEach(t),Ba=d(Vt),to=r(Vt,"P",{});var Gs=i(to);Ua=s(Gs,"This tokenizer inherits from "),tn=r(Gs,"A",{href:!0});var qd=i(tn);Va=s(qd,"PreTrainedTokenizer"),qd.forEach(t),Ga=s(Gs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gs.forEach(t),Ka=d(Vt),on=r(Vt,"DIV",{class:!0});var zd=i(on);y(oo.$$.fragment,zd),zd.forEach(t),Vt.forEach(t),Fs=d(o),ht=r(o,"H2",{class:!0});var Ks=i(ht);Et=r(Ks,"A",{id:!0,class:!0,href:!0});var Pd=i(Et);Sn=r(Pd,"SPAN",{});var xd=i(Sn);y(no.$$.fragment,xd),xd.forEach(t),Pd.forEach(t),Xa=d(Ks),jn=r(Ks,"SPAN",{});var Sd=i(jn);Ja=s(Sd,"CTRLModel"),Sd.forEach(t),Ks.forEach(t),qs=d(o),Le=r(o,"DIV",{class:!0});var Ze=i(Le);y(so.$$.fragment,Ze),Qa=d(Ze),In=r(Ze,"P",{});var jd=i(In);Ya=s(jd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),jd.forEach(t),Za=d(Ze),ao=r(Ze,"P",{});var Xs=i(ao);er=s(Xs,"This model inherits from "),nn=r(Xs,"A",{href:!0});var Id=i(nn);tr=s(Id,"PreTrainedModel"),Id.forEach(t),or=s(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xs.forEach(t),nr=d(Ze),ro=r(Ze,"P",{});var Js=i(ro);sr=s(Js,"This model is also a PyTorch "),io=r(Js,"A",{href:!0,rel:!0});var Nd=i(io);ar=s(Nd,"torch.nn.Module"),Nd.forEach(t),rr=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(t),ir=d(Ze),Pe=r(Ze,"DIV",{class:!0});var et=i(Pe);y(lo.$$.fragment,et),lr=d(et),ut=r(et,"P",{});var bn=i(ut);dr=s(bn,"The "),sn=r(bn,"A",{href:!0});var Dd=i(sn);cr=s(Dd,"CTRLModel"),Dd.forEach(t),pr=s(bn," forward method, overrides the "),Nn=r(bn,"CODE",{});var Ad=i(Nn);hr=s(Ad,"__call__"),Ad.forEach(t),ur=s(bn," special method."),bn.forEach(t),fr=d(et),y(Ft.$$.fragment,et),mr=d(et),Dn=r(et,"P",{});var Od=i(Dn);gr=s(Od,"Example:"),Od.forEach(t),_r=d(et),y(co.$$.fragment,et),et.forEach(t),Ze.forEach(t),zs=d(o),ft=r(o,"H2",{class:!0});var Qs=i(ft);qt=r(Qs,"A",{id:!0,class:!0,href:!0});var Hd=i(qt);An=r(Hd,"SPAN",{});var Wd=i(An);y(po.$$.fragment,Wd),Wd.forEach(t),Hd.forEach(t),Tr=d(Qs),On=r(Qs,"SPAN",{});var Bd=i(On);vr=s(Bd,"CTRLLMHeadModel"),Bd.forEach(t),Qs.forEach(t),Ps=d(o),$e=r(o,"DIV",{class:!0});var tt=i($e);y(ho.$$.fragment,tt),kr=d(tt),Hn=r(tt,"P",{});var Ud=i(Hn);br=s(Ud,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ud.forEach(t),yr=d(tt),uo=r(tt,"P",{});var Ys=i(uo);Cr=s(Ys,"This model inherits from "),an=r(Ys,"A",{href:!0});var Vd=i(an);wr=s(Vd,"PreTrainedModel"),Vd.forEach(t),Lr=s(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(t),$r=d(tt),fo=r(tt,"P",{});var Zs=i(fo);Rr=s(Zs,"This model is also a PyTorch "),mo=r(Zs,"A",{href:!0,rel:!0});var Gd=i(mo);Mr=s(Gd,"torch.nn.Module"),Gd.forEach(t),Er=s(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(t),Fr=d(tt),xe=r(tt,"DIV",{class:!0});var ot=i(xe);y(go.$$.fragment,ot),qr=d(ot),mt=r(ot,"P",{});var yn=i(mt);zr=s(yn,"The "),rn=r(yn,"A",{href:!0});var Kd=i(rn);Pr=s(Kd,"CTRLLMHeadModel"),Kd.forEach(t),xr=s(yn," forward method, overrides the "),Wn=r(yn,"CODE",{});var Xd=i(Wn);Sr=s(Xd,"__call__"),Xd.forEach(t),jr=s(yn," special method."),yn.forEach(t),Ir=d(ot),y(zt.$$.fragment,ot),Nr=d(ot),Bn=r(ot,"P",{});var Jd=i(Bn);Dr=s(Jd,"Example:"),Jd.forEach(t),Ar=d(ot),y(_o.$$.fragment,ot),ot.forEach(t),tt.forEach(t),xs=d(o),gt=r(o,"H2",{class:!0});var ea=i(gt);Pt=r(ea,"A",{id:!0,class:!0,href:!0});var Qd=i(Pt);Un=r(Qd,"SPAN",{});var Yd=i(Un);y(To.$$.fragment,Yd),Yd.forEach(t),Qd.forEach(t),Or=d(ea),Vn=r(ea,"SPAN",{});var Zd=i(Vn);Hr=s(Zd,"CTRLForSequenceClassification"),Zd.forEach(t),ea.forEach(t),Ss=d(o),Re=r(o,"DIV",{class:!0});var nt=i(Re);y(vo.$$.fragment,nt),Wr=d(nt),Me=r(nt,"P",{});var Ve=i(Me);Br=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),ln=r(Ve,"A",{href:!0});var ec=i(ln);Ur=s(ec,"CTRLForSequenceClassification"),ec.forEach(t),Vr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Gn=r(Ve,"CODE",{});var tc=i(Gn);Gr=s(tc,"pad_token_id"),tc.forEach(t),Kr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Kn=r(Ve,"CODE",{});var oc=i(Kn);Xr=s(oc,"pad_token_id"),oc.forEach(t),Jr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Xn=r(Ve,"CODE",{});var nc=i(Xn);Qr=s(nc,"inputs_embeds"),nc.forEach(t),Yr=s(Ve," are passed instead of "),Jn=r(Ve,"CODE",{});var sc=i(Jn);Zr=s(sc,"input_ids"),sc.forEach(t),ei=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ti=d(nt),ko=r(nt,"P",{});var ta=i(ko);oi=s(ta,"This model inherits from "),dn=r(ta,"A",{href:!0});var ac=i(dn);ni=s(ac,"PreTrainedModel"),ac.forEach(t),si=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(t),ai=d(nt),bo=r(nt,"P",{});var oa=i(bo);ri=s(oa,"This model is also a PyTorch "),yo=r(oa,"A",{href:!0,rel:!0});var rc=i(yo);ii=s(rc,"torch.nn.Module"),rc.forEach(t),li=s(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(t),di=d(nt),Q=r(nt,"DIV",{class:!0});var fe=i(Q);y(Co.$$.fragment,fe),ci=d(fe),_t=r(fe,"P",{});var Cn=i(_t);pi=s(Cn,"The "),cn=r(Cn,"A",{href:!0});var ic=i(cn);hi=s(ic,"CTRLForSequenceClassification"),ic.forEach(t),ui=s(Cn," forward method, overrides the "),Qn=r(Cn,"CODE",{});var lc=i(Qn);fi=s(lc,"__call__"),lc.forEach(t),mi=s(Cn," special method."),Cn.forEach(t),gi=d(fe),y(xt.$$.fragment,fe),_i=d(fe),Yn=r(fe,"P",{});var dc=i(Yn);Ti=s(dc,"Example of single-label classification:"),dc.forEach(t),vi=d(fe),y(wo.$$.fragment,fe),ki=d(fe),y(Lo.$$.fragment,fe),bi=d(fe),Zn=r(fe,"P",{});var cc=i(Zn);yi=s(cc,"Example of multi-label classification:"),cc.forEach(t),Ci=d(fe),y($o.$$.fragment,fe),fe.forEach(t),nt.forEach(t),js=d(o),Tt=r(o,"H2",{class:!0});var na=i(Tt);St=r(na,"A",{id:!0,class:!0,href:!0});var pc=i(St);es=r(pc,"SPAN",{});var hc=i(es);y(Ro.$$.fragment,hc),hc.forEach(t),pc.forEach(t),wi=d(na),ts=r(na,"SPAN",{});var uc=i(ts);Li=s(uc,"TFCTRLModel"),uc.forEach(t),na.forEach(t),Is=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);y(Mo.$$.fragment,Ge),$i=d(Ge),os=r(Ge,"P",{});var fc=i(os);Ri=s(fc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),fc.forEach(t),Mi=d(Ge),Eo=r(Ge,"P",{});var sa=i(Eo);Ei=s(sa,"This model inherits from "),pn=r(sa,"A",{href:!0});var mc=i(pn);Fi=s(mc,"TFPreTrainedModel"),mc.forEach(t),qi=s(sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa.forEach(t),zi=d(Ge),Fo=r(Ge,"P",{});var aa=i(Fo);Pi=s(aa,"This model is also a "),qo=r(aa,"A",{href:!0,rel:!0});var gc=i(qo);xi=s(gc,"tf.keras.Model"),gc.forEach(t),Si=s(aa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aa.forEach(t),ji=d(Ge),y(jt.$$.fragment,Ge),Ii=d(Ge),Se=r(Ge,"DIV",{class:!0});var st=i(Se);y(zo.$$.fragment,st),Ni=d(st),vt=r(st,"P",{});var wn=i(vt);Di=s(wn,"The "),hn=r(wn,"A",{href:!0});var _c=i(hn);Ai=s(_c,"TFCTRLModel"),_c.forEach(t),Oi=s(wn," forward method, overrides the "),ns=r(wn,"CODE",{});var Tc=i(ns);Hi=s(Tc,"__call__"),Tc.forEach(t),Wi=s(wn," special method."),wn.forEach(t),Bi=d(st),y(It.$$.fragment,st),Ui=d(st),ss=r(st,"P",{});var vc=i(ss);Vi=s(vc,"Example:"),vc.forEach(t),Gi=d(st),y(Po.$$.fragment,st),st.forEach(t),Ge.forEach(t),Ns=d(o),kt=r(o,"H2",{class:!0});var ra=i(kt);Nt=r(ra,"A",{id:!0,class:!0,href:!0});var kc=i(Nt);as=r(kc,"SPAN",{});var bc=i(as);y(xo.$$.fragment,bc),bc.forEach(t),kc.forEach(t),Ki=d(ra),rs=r(ra,"SPAN",{});var yc=i(rs);Xi=s(yc,"TFCTRLLMHeadModel"),yc.forEach(t),ra.forEach(t),Ds=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);y(So.$$.fragment,Ke),Ji=d(Ke),is=r(Ke,"P",{});var Cc=i(is);Qi=s(Cc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Cc.forEach(t),Yi=d(Ke),jo=r(Ke,"P",{});var ia=i(jo);Zi=s(ia,"This model inherits from "),un=r(ia,"A",{href:!0});var wc=i(un);el=s(wc,"TFPreTrainedModel"),wc.forEach(t),tl=s(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(t),ol=d(Ke),Io=r(Ke,"P",{});var la=i(Io);nl=s(la,"This model is also a "),No=r(la,"A",{href:!0,rel:!0});var Lc=i(No);sl=s(Lc,"tf.keras.Model"),Lc.forEach(t),al=s(la,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),la.forEach(t),rl=d(Ke),y(Dt.$$.fragment,Ke),il=d(Ke),je=r(Ke,"DIV",{class:!0});var at=i(je);y(Do.$$.fragment,at),ll=d(at),bt=r(at,"P",{});var Ln=i(bt);dl=s(Ln,"The "),fn=r(Ln,"A",{href:!0});var $c=i(fn);cl=s($c,"TFCTRLLMHeadModel"),$c.forEach(t),pl=s(Ln," forward method, overrides the "),ls=r(Ln,"CODE",{});var Rc=i(ls);hl=s(Rc,"__call__"),Rc.forEach(t),ul=s(Ln," special method."),Ln.forEach(t),fl=d(at),y(At.$$.fragment,at),ml=d(at),ds=r(at,"P",{});var Mc=i(ds);gl=s(Mc,"Example:"),Mc.forEach(t),_l=d(at),y(Ao.$$.fragment,at),at.forEach(t),Ke.forEach(t),As=d(o),yt=r(o,"H2",{class:!0});var da=i(yt);Ot=r(da,"A",{id:!0,class:!0,href:!0});var Ec=i(Ot);cs=r(Ec,"SPAN",{});var Fc=i(cs);y(Oo.$$.fragment,Fc),Fc.forEach(t),Ec.forEach(t),Tl=d(da),ps=r(da,"SPAN",{});var qc=i(ps);vl=s(qc,"TFCTRLForSequenceClassification"),qc.forEach(t),da.forEach(t),Os=d(o),K=r(o,"DIV",{class:!0});var me=i(K);y(Ho.$$.fragment,me),kl=d(me),hs=r(me,"P",{});var zc=i(hs);bl=s(zc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),zc.forEach(t),yl=d(me),mn=r(me,"P",{});var td=i(mn);gn=r(td,"A",{href:!0});var Pc=i(gn);Cl=s(Pc,"TFCTRLForSequenceClassification"),Pc.forEach(t),wl=s(td,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),td.forEach(t),Ll=d(me),De=r(me,"P",{});var rt=i(De);$l=s(rt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),us=r(rt,"CODE",{});var xc=i(us);Rl=s(xc,"pad_token_id"),xc.forEach(t),Ml=s(rt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=r(rt,"CODE",{});var Sc=i(fs);El=s(Sc,"pad_token_id"),Sc.forEach(t),Fl=s(rt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=r(rt,"CODE",{});var jc=i(ms);ql=s(jc,"inputs_embeds"),jc.forEach(t),zl=s(rt," are passed instead of "),gs=r(rt,"CODE",{});var Ic=i(gs);Pl=s(Ic,"input_ids"),Ic.forEach(t),xl=s(rt,`, it does the same (take the last value in
each row of the batch).`),rt.forEach(t),Sl=d(me),Wo=r(me,"P",{});var ca=i(Wo);jl=s(ca,"This model inherits from "),_n=r(ca,"A",{href:!0});var Nc=i(_n);Il=s(Nc,"TFPreTrainedModel"),Nc.forEach(t),Nl=s(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(t),Dl=d(me),Bo=r(me,"P",{});var pa=i(Bo);Al=s(pa,"This model is also a "),Uo=r(pa,"A",{href:!0,rel:!0});var Dc=i(Uo);Ol=s(Dc,"tf.keras.Model"),Dc.forEach(t),Hl=s(pa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pa.forEach(t),Wl=d(me),y(Ht.$$.fragment,me),Bl=d(me),Ie=r(me,"DIV",{class:!0});var it=i(Ie);y(Vo.$$.fragment,it),Ul=d(it),Ct=r(it,"P",{});var $n=i(Ct);Vl=s($n,"The "),Tn=r($n,"A",{href:!0});var Ac=i(Tn);Gl=s(Ac,"TFCTRLForSequenceClassification"),Ac.forEach(t),Kl=s($n," forward method, overrides the "),_s=r($n,"CODE",{});var Oc=i(_s);Xl=s(Oc,"__call__"),Oc.forEach(t),Jl=s($n," special method."),$n.forEach(t),Ql=d(it),y(Wt.$$.fragment,it),Yl=d(it),Ts=r(it,"P",{});var Hc=i(Ts);Zl=s(Hc,"Example:"),Hc.forEach(t),ed=d(it),y(Go.$$.fragment,it),it.forEach(t),me.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(sp)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(m,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(R,"class","relative group"),c(ee,"href","https://arxiv.org/abs/1909.05858"),c(ee,"rel","nofollow"),c(oe,"href","https://github.com/salesforce/ctrl"),c(oe,"rel","nofollow"),c(Jo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(dt,"class","relative group"),c(Qo,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLModel"),c(Yo,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Zo,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(en,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(we,"class","docstring"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(pt,"class","relative group"),c(tn,"href","/docs/transformers/pr_16363/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(on,"class","docstring"),c(Ne,"class","docstring"),c(Et,"id","transformers.CTRLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLModel"),c(ht,"class","relative group"),c(nn,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(sn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLModel"),c(Pe,"class","docstring"),c(Le,"class","docstring"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(an,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mo,"rel","nofollow"),c(rn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(xe,"class","docstring"),c($e,"class","docstring"),c(Pt,"id","transformers.CTRLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.CTRLForSequenceClassification"),c(gt,"class","relative group"),c(ln,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(dn,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(cn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(Q,"class","docstring"),c(Re,"class","docstring"),c(St,"id","transformers.TFCTRLModel"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#transformers.TFCTRLModel"),c(Tt,"class","relative group"),c(pn,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(qo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qo,"rel","nofollow"),c(hn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Se,"class","docstring"),c(le,"class","docstring"),c(Nt,"id","transformers.TFCTRLLMHeadModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFCTRLLMHeadModel"),c(kt,"class","relative group"),c(un,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(No,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(No,"rel","nofollow"),c(fn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(je,"class","docstring"),c(de,"class","docstring"),c(Ot,"id","transformers.TFCTRLForSequenceClassification"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLForSequenceClassification"),c(yt,"class","relative group"),c(gn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(_n,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Uo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Uo,"rel","nofollow"),c(Tn,"href","/docs/transformers/pr_16363/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(Ie,"class","docstring"),c(K,"class","docstring")},m(o,f){e(document.head,h),u(o,E,f),u(o,m,f),e(m,g),e(g,v),C(T,v,null),e(m,_),e(m,M),e(M,ge),u(o,Y,f),u(o,R,f),e(R,J),e(J,A),C(Z,A,null),e(R,_e),e(R,O),e(O,Te),u(o,ce,f),u(o,x,f),e(x,S),e(x,ee),e(ee,ne),e(x,F),e(x,q),e(q,ve),e(x,B),u(o,pe,f),u(o,se,f),e(se,U),u(o,he,f),u(o,ae,f),e(ae,z),e(z,ke),u(o,H,f),u(o,re,f),e(re,be),u(o,W,f),u(o,j,f),e(j,te),e(te,I),e(te,oe),e(oe,V),e(te,ye),e(j,p),e(j,k),e(k,ie),e(j,Ae),e(j,ue),e(ue,N),e(ue,Fe),e(Fe,Oe),e(ue,He),e(j,D),e(j,P),e(P,We),e(P,qe),e(qe,G),e(P,Be),e(P,ze),e(ze,Ce),e(P,Ue),e(P,Rn),e(Rn,ha),e(P,ua),e(P,Jo),e(Jo,Mn),e(Mn,fa),e(P,ma),u(o,Ls,f),u(o,Je,f),e(Je,ga),e(Je,Gt),e(Gt,_a),e(Je,Ta),e(Je,Kt),e(Kt,va),e(Je,ka),u(o,$s,f),u(o,dt,f),e(dt,Rt),e(Rt,En),C(Xt,En,null),e(dt,ba),e(dt,Fn),e(Fn,ya),u(o,Rs,f),u(o,we,f),C(Jt,we,null),e(we,Ca),e(we,Xe),e(Xe,wa),e(Xe,Qo),e(Qo,La),e(Xe,$a),e(Xe,Yo),e(Yo,Ra),e(Xe,Ma),e(Xe,Qt),e(Qt,Ea),e(Xe,Fa),e(we,qa),e(we,ct),e(ct,za),e(ct,Zo),e(Zo,Pa),e(ct,xa),e(ct,en),e(en,Sa),e(ct,ja),e(we,Ia),e(we,qn),e(qn,Na),e(we,Da),C(Yt,we,null),u(o,Ms,f),u(o,pt,f),e(pt,Mt),e(Mt,zn),C(Zt,zn,null),e(pt,Aa),e(pt,Pn),e(Pn,Oa),u(o,Es,f),u(o,Ne,f),C(eo,Ne,null),e(Ne,Ha),e(Ne,xn),e(xn,Wa),e(Ne,Ba),e(Ne,to),e(to,Ua),e(to,tn),e(tn,Va),e(to,Ga),e(Ne,Ka),e(Ne,on),C(oo,on,null),u(o,Fs,f),u(o,ht,f),e(ht,Et),e(Et,Sn),C(no,Sn,null),e(ht,Xa),e(ht,jn),e(jn,Ja),u(o,qs,f),u(o,Le,f),C(so,Le,null),e(Le,Qa),e(Le,In),e(In,Ya),e(Le,Za),e(Le,ao),e(ao,er),e(ao,nn),e(nn,tr),e(ao,or),e(Le,nr),e(Le,ro),e(ro,sr),e(ro,io),e(io,ar),e(ro,rr),e(Le,ir),e(Le,Pe),C(lo,Pe,null),e(Pe,lr),e(Pe,ut),e(ut,dr),e(ut,sn),e(sn,cr),e(ut,pr),e(ut,Nn),e(Nn,hr),e(ut,ur),e(Pe,fr),C(Ft,Pe,null),e(Pe,mr),e(Pe,Dn),e(Dn,gr),e(Pe,_r),C(co,Pe,null),u(o,zs,f),u(o,ft,f),e(ft,qt),e(qt,An),C(po,An,null),e(ft,Tr),e(ft,On),e(On,vr),u(o,Ps,f),u(o,$e,f),C(ho,$e,null),e($e,kr),e($e,Hn),e(Hn,br),e($e,yr),e($e,uo),e(uo,Cr),e(uo,an),e(an,wr),e(uo,Lr),e($e,$r),e($e,fo),e(fo,Rr),e(fo,mo),e(mo,Mr),e(fo,Er),e($e,Fr),e($e,xe),C(go,xe,null),e(xe,qr),e(xe,mt),e(mt,zr),e(mt,rn),e(rn,Pr),e(mt,xr),e(mt,Wn),e(Wn,Sr),e(mt,jr),e(xe,Ir),C(zt,xe,null),e(xe,Nr),e(xe,Bn),e(Bn,Dr),e(xe,Ar),C(_o,xe,null),u(o,xs,f),u(o,gt,f),e(gt,Pt),e(Pt,Un),C(To,Un,null),e(gt,Or),e(gt,Vn),e(Vn,Hr),u(o,Ss,f),u(o,Re,f),C(vo,Re,null),e(Re,Wr),e(Re,Me),e(Me,Br),e(Me,ln),e(ln,Ur),e(Me,Vr),e(Me,Gn),e(Gn,Gr),e(Me,Kr),e(Me,Kn),e(Kn,Xr),e(Me,Jr),e(Me,Xn),e(Xn,Qr),e(Me,Yr),e(Me,Jn),e(Jn,Zr),e(Me,ei),e(Re,ti),e(Re,ko),e(ko,oi),e(ko,dn),e(dn,ni),e(ko,si),e(Re,ai),e(Re,bo),e(bo,ri),e(bo,yo),e(yo,ii),e(bo,li),e(Re,di),e(Re,Q),C(Co,Q,null),e(Q,ci),e(Q,_t),e(_t,pi),e(_t,cn),e(cn,hi),e(_t,ui),e(_t,Qn),e(Qn,fi),e(_t,mi),e(Q,gi),C(xt,Q,null),e(Q,_i),e(Q,Yn),e(Yn,Ti),e(Q,vi),C(wo,Q,null),e(Q,ki),C(Lo,Q,null),e(Q,bi),e(Q,Zn),e(Zn,yi),e(Q,Ci),C($o,Q,null),u(o,js,f),u(o,Tt,f),e(Tt,St),e(St,es),C(Ro,es,null),e(Tt,wi),e(Tt,ts),e(ts,Li),u(o,Is,f),u(o,le,f),C(Mo,le,null),e(le,$i),e(le,os),e(os,Ri),e(le,Mi),e(le,Eo),e(Eo,Ei),e(Eo,pn),e(pn,Fi),e(Eo,qi),e(le,zi),e(le,Fo),e(Fo,Pi),e(Fo,qo),e(qo,xi),e(Fo,Si),e(le,ji),C(jt,le,null),e(le,Ii),e(le,Se),C(zo,Se,null),e(Se,Ni),e(Se,vt),e(vt,Di),e(vt,hn),e(hn,Ai),e(vt,Oi),e(vt,ns),e(ns,Hi),e(vt,Wi),e(Se,Bi),C(It,Se,null),e(Se,Ui),e(Se,ss),e(ss,Vi),e(Se,Gi),C(Po,Se,null),u(o,Ns,f),u(o,kt,f),e(kt,Nt),e(Nt,as),C(xo,as,null),e(kt,Ki),e(kt,rs),e(rs,Xi),u(o,Ds,f),u(o,de,f),C(So,de,null),e(de,Ji),e(de,is),e(is,Qi),e(de,Yi),e(de,jo),e(jo,Zi),e(jo,un),e(un,el),e(jo,tl),e(de,ol),e(de,Io),e(Io,nl),e(Io,No),e(No,sl),e(Io,al),e(de,rl),C(Dt,de,null),e(de,il),e(de,je),C(Do,je,null),e(je,ll),e(je,bt),e(bt,dl),e(bt,fn),e(fn,cl),e(bt,pl),e(bt,ls),e(ls,hl),e(bt,ul),e(je,fl),C(At,je,null),e(je,ml),e(je,ds),e(ds,gl),e(je,_l),C(Ao,je,null),u(o,As,f),u(o,yt,f),e(yt,Ot),e(Ot,cs),C(Oo,cs,null),e(yt,Tl),e(yt,ps),e(ps,vl),u(o,Os,f),u(o,K,f),C(Ho,K,null),e(K,kl),e(K,hs),e(hs,bl),e(K,yl),e(K,mn),e(mn,gn),e(gn,Cl),e(mn,wl),e(K,Ll),e(K,De),e(De,$l),e(De,us),e(us,Rl),e(De,Ml),e(De,fs),e(fs,El),e(De,Fl),e(De,ms),e(ms,ql),e(De,zl),e(De,gs),e(gs,Pl),e(De,xl),e(K,Sl),e(K,Wo),e(Wo,jl),e(Wo,_n),e(_n,Il),e(Wo,Nl),e(K,Dl),e(K,Bo),e(Bo,Al),e(Bo,Uo),e(Uo,Ol),e(Bo,Hl),e(K,Wl),C(Ht,K,null),e(K,Bl),e(K,Ie),C(Vo,Ie,null),e(Ie,Ul),e(Ie,Ct),e(Ct,Vl),e(Ct,Tn),e(Tn,Gl),e(Ct,Kl),e(Ct,_s),e(_s,Xl),e(Ct,Jl),e(Ie,Ql),C(Wt,Ie,null),e(Ie,Yl),e(Ie,Ts),e(Ts,Zl),e(Ie,ed),C(Go,Ie,null),Hs=!0},p(o,[f]){const Ko={};f&2&&(Ko.$$scope={dirty:f,ctx:o}),Ft.$set(Ko);const vs={};f&2&&(vs.$$scope={dirty:f,ctx:o}),zt.$set(vs);const ks={};f&2&&(ks.$$scope={dirty:f,ctx:o}),xt.$set(ks);const bs={};f&2&&(bs.$$scope={dirty:f,ctx:o}),jt.$set(bs);const Xo={};f&2&&(Xo.$$scope={dirty:f,ctx:o}),It.$set(Xo);const ys={};f&2&&(ys.$$scope={dirty:f,ctx:o}),Dt.$set(ys);const Cs={};f&2&&(Cs.$$scope={dirty:f,ctx:o}),At.$set(Cs);const ws={};f&2&&(ws.$$scope={dirty:f,ctx:o}),Ht.$set(ws);const wt={};f&2&&(wt.$$scope={dirty:f,ctx:o}),Wt.$set(wt)},i(o){Hs||(w(T.$$.fragment,o),w(Z.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Ft.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(Co.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(Mo.$$.fragment,o),w(jt.$$.fragment,o),w(zo.$$.fragment,o),w(It.$$.fragment,o),w(Po.$$.fragment,o),w(xo.$$.fragment,o),w(So.$$.fragment,o),w(Dt.$$.fragment,o),w(Do.$$.fragment,o),w(At.$$.fragment,o),w(Ao.$$.fragment,o),w(Oo.$$.fragment,o),w(Ho.$$.fragment,o),w(Ht.$$.fragment,o),w(Vo.$$.fragment,o),w(Wt.$$.fragment,o),w(Go.$$.fragment,o),Hs=!0)},o(o){L(T.$$.fragment,o),L(Z.$$.fragment,o),L(Xt.$$.fragment,o),L(Jt.$$.fragment,o),L(Yt.$$.fragment,o),L(Zt.$$.fragment,o),L(eo.$$.fragment,o),L(oo.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(lo.$$.fragment,o),L(Ft.$$.fragment,o),L(co.$$.fragment,o),L(po.$$.fragment,o),L(ho.$$.fragment,o),L(go.$$.fragment,o),L(zt.$$.fragment,o),L(_o.$$.fragment,o),L(To.$$.fragment,o),L(vo.$$.fragment,o),L(Co.$$.fragment,o),L(xt.$$.fragment,o),L(wo.$$.fragment,o),L(Lo.$$.fragment,o),L($o.$$.fragment,o),L(Ro.$$.fragment,o),L(Mo.$$.fragment,o),L(jt.$$.fragment,o),L(zo.$$.fragment,o),L(It.$$.fragment,o),L(Po.$$.fragment,o),L(xo.$$.fragment,o),L(So.$$.fragment,o),L(Dt.$$.fragment,o),L(Do.$$.fragment,o),L(At.$$.fragment,o),L(Ao.$$.fragment,o),L(Oo.$$.fragment,o),L(Ho.$$.fragment,o),L(Ht.$$.fragment,o),L(Vo.$$.fragment,o),L(Wt.$$.fragment,o),L(Go.$$.fragment,o),Hs=!1},d(o){t(h),o&&t(E),o&&t(m),$(T),o&&t(Y),o&&t(R),$(Z),o&&t(ce),o&&t(x),o&&t(pe),o&&t(se),o&&t(he),o&&t(ae),o&&t(H),o&&t(re),o&&t(W),o&&t(j),o&&t(Ls),o&&t(Je),o&&t($s),o&&t(dt),$(Xt),o&&t(Rs),o&&t(we),$(Jt),$(Yt),o&&t(Ms),o&&t(pt),$(Zt),o&&t(Es),o&&t(Ne),$(eo),$(oo),o&&t(Fs),o&&t(ht),$(no),o&&t(qs),o&&t(Le),$(so),$(lo),$(Ft),$(co),o&&t(zs),o&&t(ft),$(po),o&&t(Ps),o&&t($e),$(ho),$(go),$(zt),$(_o),o&&t(xs),o&&t(gt),$(To),o&&t(Ss),o&&t(Re),$(vo),$(Co),$(xt),$(wo),$(Lo),$($o),o&&t(js),o&&t(Tt),$(Ro),o&&t(Is),o&&t(le),$(Mo),$(jt),$(zo),$(It),$(Po),o&&t(Ns),o&&t(kt),$(xo),o&&t(Ds),o&&t(de),$(So),$(Dt),$(Do),$(At),$(Ao),o&&t(As),o&&t(yt),$(Oo),o&&t(Os),o&&t(K),$(Ho),$(Ht),$(Vo),$(Wt),$(Go)}}}const sp={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function ap(X){return Gc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pp extends Wc{constructor(h){super();Bc(this,h,ap,np,Uc,{})}}export{pp as default,sp as metadata};
