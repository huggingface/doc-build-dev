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
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Qc(X){let h,E,m,g,v,T,_,M,ge,Q,R,J,A,Y,_e,O,Te,ce,x,j,Z,oe,F,q,ve,B,pe,ne,U,he,se,z,ke,H,ae,be,W,S,ee,I,te,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),se=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),M=r(re,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Y=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Q,k),u(p,R,k),e(R,J),e(R,A),e(A,Y),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,j,k),e(j,Z),u(p,oe,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,ne),e(q,U),e(U,he),e(F,se),e(F,z),e(z,ke),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Q),p&&t(R),p&&t(x),p&&t(j),p&&t(oe),p&&t(F)}}}function Yc(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function Zc(X){let h,E,m,g,v,T,_,M,ge,Q,R,J,A,Y,_e,O,Te,ce,x,j,Z,oe,F,q,ve,B,pe,ne,U,he,se,z,ke,H,ae,be,W,S,ee,I,te,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),se=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),M=r(re,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Y=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Q,k),u(p,R,k),e(R,J),e(R,A),e(A,Y),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,j,k),e(j,Z),u(p,oe,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,ne),e(q,U),e(U,he),e(F,se),e(F,z),e(z,ke),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Q),p&&t(R),p&&t(x),p&&t(j),p&&t(oe),p&&t(F)}}}function ep(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function tp(X){let h,E,m,g,v,T,_,M,ge,Q,R,J,A,Y,_e,O,Te,ce,x,j,Z,oe,F,q,ve,B,pe,ne,U,he,se,z,ke,H,ae,be,W,S,ee,I,te,V,ye;return{c(){h=a("p"),E=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),ge=n("having all inputs as a list, tuple or dict in the first positional arguments."),Q=l(),R=a("p"),J=n("This second option is useful when using "),A=a("code"),Y=n("tf.keras.Model.fit"),_e=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=a("code"),Te=n("model(inputs)"),ce=n("."),x=l(),j=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=l(),F=a("ul"),q=a("li"),ve=n("a single Tensor with "),B=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),U=a("code"),he=n("model(inputs_ids)"),se=l(),z=a("li"),ke=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),ae=n("model([input_ids, attention_mask])"),be=n(" or "),W=a("code"),S=n("model([input_ids, attention_mask, token_type_ids])"),ee=l(),I=a("li"),te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=a("code"),ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var k=i(h);E=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(p),g=r(p,"UL",{});var re=i(g);v=r(re,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),_=d(re),M=r(re,"LI",{});var ue=i(M);ge=s(ue,"having all inputs as a list, tuple or dict in the first positional arguments."),ue.forEach(t),re.forEach(t),Q=d(p),R=r(p,"P",{});var N=i(R);J=s(N,"This second option is useful when using "),A=r(N,"CODE",{});var Fe=i(A);Y=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),_e=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=r(N,"CODE",{});var Oe=i(O);Te=s(Oe,"model(inputs)"),Oe.forEach(t),ce=s(N,"."),N.forEach(t),x=d(p),j=r(p,"P",{});var He=i(j);Z=s(He,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),He.forEach(t),oe=d(p),F=r(p,"UL",{});var D=i(F);q=r(D,"LI",{});var P=i(q);ve=s(P,"a single Tensor with "),B=r(P,"CODE",{});var We=i(B);pe=s(We,"input_ids"),We.forEach(t),ne=s(P," only and nothing else: "),U=r(P,"CODE",{});var qe=i(U);he=s(qe,"model(inputs_ids)"),qe.forEach(t),P.forEach(t),se=d(D),z=r(D,"LI",{});var G=i(z);ke=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(G,"CODE",{});var Be=i(H);ae=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),be=s(G," or "),W=r(G,"CODE",{});var ze=i(W);S=s(ze,"model([input_ids, attention_mask, token_type_ids])"),ze.forEach(t),G.forEach(t),ee=d(D),I=r(D,"LI",{});var Ce=i(I);te=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),V=r(Ce,"CODE",{});var Ue=i(V);ye=s(Ue,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ue.forEach(t),Ce.forEach(t),D.forEach(t)},m(p,k){u(p,h,k),e(h,E),u(p,m,k),u(p,g,k),e(g,v),e(v,T),e(g,_),e(g,M),e(M,ge),u(p,Q,k),u(p,R,k),e(R,J),e(R,A),e(A,Y),e(R,_e),e(R,O),e(O,Te),e(R,ce),u(p,x,k),u(p,j,k),e(j,Z),u(p,oe,k),u(p,F,k),e(F,q),e(q,ve),e(q,B),e(B,pe),e(q,ne),e(q,U),e(U,he),e(F,se),e(F,z),e(z,ke),e(z,H),e(H,ae),e(z,be),e(z,W),e(W,S),e(F,ee),e(F,I),e(I,te),e(I,V),e(V,ye)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(Q),p&&t(R),p&&t(x),p&&t(j),p&&t(oe),p&&t(F)}}}function op(X){let h,E,m,g,v;return{c(){h=a("p"),E=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){h=r(T,"P",{});var _=i(h);E=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var M=i(m);g=s(M,"Module"),M.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){u(T,h,_),e(h,E),e(h,m),e(m,g),e(h,v)},d(T){T&&t(h)}}}function np(X){let h,E,m,g,v,T,_,M,ge,Q,R,J,A,Y,_e,O,Te,ce,x,j,Z,oe,F,q,ve,B,pe,ne,U,he,se,z,ke,H,ae,be,W,S,ee,I,te,V,ye,p,k,re,Ae,ue,N,Fe,Oe,He,D,P,We,qe,G,Be,ze,Ce,Ue,Rn,ha,ua,Jo,Mn,fa,ma,Ls,Qe,ga,Gt,_a,Ta,Kt,va,ka,$s,dt,Rt,En,Xt,ba,Fn,ya,Rs,we,Jt,Ca,Je,wa,Qo,La,$a,Yo,Ra,Ma,Qt,Ea,Fa,qa,ct,za,Zo,Pa,xa,en,ja,Sa,Ia,qn,Na,Da,Yt,Ms,pt,Mt,zn,Zt,Aa,Pn,Oa,Es,Ne,eo,Ha,xn,Wa,Ba,to,Ua,tn,Va,Ga,Ka,on,oo,Fs,ht,Et,jn,no,Xa,Sn,Ja,qs,Le,so,Qa,In,Ya,Za,ao,er,nn,tr,or,nr,ro,sr,io,ar,rr,ir,Pe,lo,lr,ut,dr,sn,cr,pr,Nn,hr,ur,fr,Ft,mr,Dn,gr,_r,co,zs,ft,qt,An,po,Tr,On,vr,Ps,$e,ho,kr,Hn,br,yr,uo,Cr,an,wr,Lr,$r,fo,Rr,mo,Mr,Er,Fr,xe,go,qr,mt,zr,rn,Pr,xr,Wn,jr,Sr,Ir,zt,Nr,Bn,Dr,Ar,_o,xs,gt,Pt,Un,To,Or,Vn,Hr,js,Re,vo,Wr,Me,Br,ln,Ur,Vr,Gn,Gr,Kr,Kn,Xr,Jr,Xn,Qr,Yr,Jn,Zr,ei,ti,ko,oi,dn,ni,si,ai,bo,ri,yo,ii,li,di,ie,Co,ci,_t,pi,cn,hi,ui,Qn,fi,mi,gi,xt,_i,Yn,Ti,vi,wo,ki,Zn,bi,yi,Lo,Ss,Tt,jt,es,$o,Ci,ts,wi,Is,le,Ro,Li,os,$i,Ri,Mo,Mi,pn,Ei,Fi,qi,Eo,zi,Fo,Pi,xi,ji,St,Si,je,qo,Ii,vt,Ni,hn,Di,Ai,ns,Oi,Hi,Wi,It,Bi,ss,Ui,Vi,zo,Ns,kt,Nt,as,Po,Gi,rs,Ki,Ds,de,xo,Xi,is,Ji,Qi,jo,Yi,un,Zi,el,tl,So,ol,Io,nl,sl,al,Dt,rl,Se,No,il,bt,ll,fn,dl,cl,ls,pl,hl,ul,At,fl,ds,ml,gl,Do,As,yt,Ot,cs,Ao,_l,ps,Tl,Os,K,Oo,vl,hs,kl,bl,mn,gn,yl,Cl,wl,De,Ll,us,$l,Rl,fs,Ml,El,ms,Fl,ql,gs,zl,Pl,xl,Ho,jl,_n,Sl,Il,Nl,Wo,Dl,Bo,Al,Ol,Hl,Ht,Wl,fe,Uo,Bl,Ct,Ul,Tn,Vl,Gl,_s,Kl,Xl,Jl,Wt,Ql,Ts,Yl,Zl,Vo,ed,Go,Hs;return T=new lt({}),Y=new lt({}),Xt=new lt({}),Jt=new Ee({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/configuration_ctrl.py#L26",parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Zt=new lt({}),eo=new Ee({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/tokenization_ctrl.py#L119",parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),oo=new Ee({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/tokenization_ctrl.py#L227"}}),no=new lt({}),so=new Ee({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L320",parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ee({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L353",parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),po=new lt({}),ho=new Ee({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L493",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),go=new Ee({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L515",parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),To=new lt({}),vo=new Ee({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L609",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ee({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_ctrl.py#L619",parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xt=new Lt({props:{$$slots:{default:[Jc]},$$scope:{ctx:X}}}),wo=new $t({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

torch.manual_seed(0)
tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),Lo=new $t({props:{code:`import torch
from transformers import CTRLTokenizer, CTRLForSequenceClassification

torch.manual_seed(0)
tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = CTRLForSequenceClassification.from_pretrained("ctrl", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),$o=new lt({}),Ro=new Ee({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L517",parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),St=new Lt({props:{$$slots:{default:[Qc]},$$scope:{ctx:X}}}),qo=new Ee({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L522",parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),It=new Lt({props:{$$slots:{default:[Yc]},$$scope:{ctx:X}}}),zo=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Po=new lt({}),xo=new Ee({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L612",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dt=new Lt({props:{$$slots:{default:[Zc]},$$scope:{ctx:X}}}),No=new Ee({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L633",parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),At=new Lt({props:{$$slots:{default:[ep]},$$scope:{ctx:X}}}),Do=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ao=new lt({}),Oo=new Ee({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L730",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ht=new Lt({props:{$$slots:{default:[tp]},$$scope:{ctx:X}}}),Uo=new Ee({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/ctrl/modeling_tf_ctrl.py#L745",parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLTokenizer">CTRLTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wt=new Lt({props:{$$slots:{default:[op]},$$scope:{ctx:X}}}),Vo=new $t({props:{code:`from transformers import CTRLTokenizer, TFCTRLForSequenceClassification
import tensorflow as tf

tokenizer = CTRLTokenizer.from_pretrained("ctrl")
model = TFCTRLForSequenceClassification.from_pretrained("ctrl")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CTRLTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Go=new $t({props:{code:`labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){h=a("meta"),E=l(),m=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),M=a("span"),ge=n("CTRL"),Q=l(),R=a("h2"),J=a("a"),A=a("span"),b(Y.$$.fragment),_e=l(),O=a("span"),Te=n("Overview"),ce=l(),x=a("p"),j=n("CTRL model was proposed in "),Z=a("a"),oe=n("CTRL: A Conditional Transformer Language Model for Controllable Generation"),F=n(" by Nitish Shirish Keskar"),q=a("em"),ve=n(", Bryan McCann"),B=n(`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),pe=l(),ne=a("p"),U=n("The abstract from the paper is the following:"),he=l(),se=a("p"),z=a("em"),ke=n(`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),H=l(),ae=a("p"),be=n("Tips:"),W=l(),S=a("ul"),ee=a("li"),I=n(`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=a("a"),V=n("original implementation"),ye=n(` for
more information.`),p=l(),k=a("li"),re=n(`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ae=l(),ue=a("li"),N=n(`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=a("em"),Oe=n("run_generation.py"),He=n(" example script."),D=l(),P=a("li"),We=n("The PyTorch models can take the "),qe=a("code"),G=n("past_key_values"),Be=n(` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=a("code"),Ce=n("past"),Ue=n(" as input. Using the "),Rn=a("code"),ha=n("past_key_values"),ua=n(` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Jo=a("a"),Mn=a("code"),fa=n("forward"),ma=n(`
method for more information on the usage of this argument.`),Ls=l(),Qe=a("p"),ga=n("This model was contributed by "),Gt=a("a"),_a=n("keskarnitishr"),Ta=n(`. The original code can be found
`),Kt=a("a"),va=n("here"),ka=n("."),$s=l(),dt=a("h2"),Rt=a("a"),En=a("span"),b(Xt.$$.fragment),ba=l(),Fn=a("span"),ya=n("CTRLConfig"),Rs=l(),we=a("div"),b(Jt.$$.fragment),Ca=l(),Je=a("p"),wa=n("This is the configuration class to store the configuration of a "),Qo=a("a"),La=n("CTRLModel"),$a=n(" or a "),Yo=a("a"),Ra=n("TFCTRLModel"),Ma=n(`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=a("a"),Ea=n("ctrl"),Fa=n(" architecture from SalesForce."),qa=l(),ct=a("p"),za=n("Configuration objects inherit from "),Zo=a("a"),Pa=n("PretrainedConfig"),xa=n(` and can be used to control the model outputs. Read the
documentation from `),en=a("a"),ja=n("PretrainedConfig"),Sa=n(" for more information."),Ia=l(),qn=a("p"),Na=n("Examples:"),Da=l(),b(Yt.$$.fragment),Ms=l(),pt=a("h2"),Mt=a("a"),zn=a("span"),b(Zt.$$.fragment),Aa=l(),Pn=a("span"),Oa=n("CTRLTokenizer"),Es=l(),Ne=a("div"),b(eo.$$.fragment),Ha=l(),xn=a("p"),Wa=n("Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Ba=l(),to=a("p"),Ua=n("This tokenizer inherits from "),tn=a("a"),Va=n("PreTrainedTokenizer"),Ga=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ka=l(),on=a("div"),b(oo.$$.fragment),Fs=l(),ht=a("h2"),Et=a("a"),jn=a("span"),b(no.$$.fragment),Xa=l(),Sn=a("span"),Ja=n("CTRLModel"),qs=l(),Le=a("div"),b(so.$$.fragment),Qa=l(),In=a("p"),Ya=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Za=l(),ao=a("p"),er=n("This model inherits from "),nn=a("a"),tr=n("PreTrainedModel"),or=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nr=l(),ro=a("p"),sr=n("This model is also a PyTorch "),io=a("a"),ar=n("torch.nn.Module"),rr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ir=l(),Pe=a("div"),b(lo.$$.fragment),lr=l(),ut=a("p"),dr=n("The "),sn=a("a"),cr=n("CTRLModel"),pr=n(" forward method, overrides the "),Nn=a("code"),hr=n("__call__"),ur=n(" special method."),fr=l(),b(Ft.$$.fragment),mr=l(),Dn=a("p"),gr=n("Example:"),_r=l(),b(co.$$.fragment),zs=l(),ft=a("h2"),qt=a("a"),An=a("span"),b(po.$$.fragment),Tr=l(),On=a("span"),vr=n("CTRLLMHeadModel"),Ps=l(),$e=a("div"),b(ho.$$.fragment),kr=l(),Hn=a("p"),br=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),yr=l(),uo=a("p"),Cr=n("This model inherits from "),an=a("a"),wr=n("PreTrainedModel"),Lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$r=l(),fo=a("p"),Rr=n("This model is also a PyTorch "),mo=a("a"),Mr=n("torch.nn.Module"),Er=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fr=l(),xe=a("div"),b(go.$$.fragment),qr=l(),mt=a("p"),zr=n("The "),rn=a("a"),Pr=n("CTRLLMHeadModel"),xr=n(" forward method, overrides the "),Wn=a("code"),jr=n("__call__"),Sr=n(" special method."),Ir=l(),b(zt.$$.fragment),Nr=l(),Bn=a("p"),Dr=n("Example:"),Ar=l(),b(_o.$$.fragment),xs=l(),gt=a("h2"),Pt=a("a"),Un=a("span"),b(To.$$.fragment),Or=l(),Vn=a("span"),Hr=n("CTRLForSequenceClassification"),js=l(),Re=a("div"),b(vo.$$.fragment),Wr=l(),Me=a("p"),Br=n(`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),ln=a("a"),Ur=n("CTRLForSequenceClassification"),Vr=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Gn=a("code"),Gr=n("pad_token_id"),Kr=n(` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Kn=a("code"),Xr=n("pad_token_id"),Jr=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Xn=a("code"),Qr=n("inputs_embeds"),Yr=n(" are passed instead of "),Jn=a("code"),Zr=n("input_ids"),ei=n(`, it does the same (take the last
value in each row of the batch).`),ti=l(),ko=a("p"),oi=n("This model inherits from "),dn=a("a"),ni=n("PreTrainedModel"),si=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai=l(),bo=a("p"),ri=n("This model is also a PyTorch "),yo=a("a"),ii=n("torch.nn.Module"),li=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),di=l(),ie=a("div"),b(Co.$$.fragment),ci=l(),_t=a("p"),pi=n("The "),cn=a("a"),hi=n("CTRLForSequenceClassification"),ui=n(" forward method, overrides the "),Qn=a("code"),fi=n("__call__"),mi=n(" special method."),gi=l(),b(xt.$$.fragment),_i=l(),Yn=a("p"),Ti=n("Example of single-label classification:"),vi=l(),b(wo.$$.fragment),ki=l(),Zn=a("p"),bi=n("Example of multi-label classification:"),yi=l(),b(Lo.$$.fragment),Ss=l(),Tt=a("h2"),jt=a("a"),es=a("span"),b($o.$$.fragment),Ci=l(),ts=a("span"),wi=n("TFCTRLModel"),Is=l(),le=a("div"),b(Ro.$$.fragment),Li=l(),os=a("p"),$i=n("The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Ri=l(),Mo=a("p"),Mi=n("This model inherits from "),pn=a("a"),Ei=n("TFPreTrainedModel"),Fi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qi=l(),Eo=a("p"),zi=n("This model is also a "),Fo=a("a"),Pi=n("tf.keras.Model"),xi=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ji=l(),b(St.$$.fragment),Si=l(),je=a("div"),b(qo.$$.fragment),Ii=l(),vt=a("p"),Ni=n("The "),hn=a("a"),Di=n("TFCTRLModel"),Ai=n(" forward method, overrides the "),ns=a("code"),Oi=n("__call__"),Hi=n(" special method."),Wi=l(),b(It.$$.fragment),Bi=l(),ss=a("p"),Ui=n("Example:"),Vi=l(),b(zo.$$.fragment),Ns=l(),kt=a("h2"),Nt=a("a"),as=a("span"),b(Po.$$.fragment),Gi=l(),rs=a("span"),Ki=n("TFCTRLLMHeadModel"),Ds=l(),de=a("div"),b(xo.$$.fragment),Xi=l(),is=a("p"),Ji=n(`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Qi=l(),jo=a("p"),Yi=n("This model inherits from "),un=a("a"),Zi=n("TFPreTrainedModel"),el=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tl=l(),So=a("p"),ol=n("This model is also a "),Io=a("a"),nl=n("tf.keras.Model"),sl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),al=l(),b(Dt.$$.fragment),rl=l(),Se=a("div"),b(No.$$.fragment),il=l(),bt=a("p"),ll=n("The "),fn=a("a"),dl=n("TFCTRLLMHeadModel"),cl=n(" forward method, overrides the "),ls=a("code"),pl=n("__call__"),hl=n(" special method."),ul=l(),b(At.$$.fragment),fl=l(),ds=a("p"),ml=n("Example:"),gl=l(),b(Do.$$.fragment),As=l(),yt=a("h2"),Ot=a("a"),cs=a("span"),b(Ao.$$.fragment),_l=l(),ps=a("span"),Tl=n("TFCTRLForSequenceClassification"),Os=l(),K=a("div"),b(Oo.$$.fragment),vl=l(),hs=a("p"),kl=n("The CTRL Model transformer with a sequence classification head on top (linear layer)."),bl=l(),mn=a("p"),gn=a("a"),yl=n("TFCTRLForSequenceClassification"),Cl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),wl=l(),De=a("p"),Ll=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),us=a("code"),$l=n("pad_token_id"),Rl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=a("code"),Ml=n("pad_token_id"),El=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=a("code"),Fl=n("inputs_embeds"),ql=n(" are passed instead of "),gs=a("code"),zl=n("input_ids"),Pl=n(`, it does the same (take the last value in
each row of the batch).`),xl=l(),Ho=a("p"),jl=n("This model inherits from "),_n=a("a"),Sl=n("TFPreTrainedModel"),Il=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),Wo=a("p"),Dl=n("This model is also a "),Bo=a("a"),Al=n("tf.keras.Model"),Ol=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hl=l(),b(Ht.$$.fragment),Wl=l(),fe=a("div"),b(Uo.$$.fragment),Bl=l(),Ct=a("p"),Ul=n("The "),Tn=a("a"),Vl=n("TFCTRLForSequenceClassification"),Gl=n(" forward method, overrides the "),_s=a("code"),Kl=n("__call__"),Xl=n(" special method."),Jl=l(),b(Wt.$$.fragment),Ql=l(),Ts=a("p"),Yl=n("Example:"),Zl=l(),b(Vo.$$.fragment),ed=l(),b(Go.$$.fragment),this.h()},l(o){const f=Vc('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),E=d(o),m=r(o,"H1",{class:!0});var Ko=i(m);g=r(Ko,"A",{id:!0,class:!0,href:!0});var vs=i(g);v=r(vs,"SPAN",{});var ks=i(v);y(T.$$.fragment,ks),ks.forEach(t),vs.forEach(t),_=d(Ko),M=r(Ko,"SPAN",{});var bs=i(M);ge=s(bs,"CTRL"),bs.forEach(t),Ko.forEach(t),Q=d(o),R=r(o,"H2",{class:!0});var Xo=i(R);J=r(Xo,"A",{id:!0,class:!0,href:!0});var ys=i(J);A=r(ys,"SPAN",{});var Cs=i(A);y(Y.$$.fragment,Cs),Cs.forEach(t),ys.forEach(t),_e=d(Xo),O=r(Xo,"SPAN",{});var ws=i(O);Te=s(ws,"Overview"),ws.forEach(t),Xo.forEach(t),ce=d(o),x=r(o,"P",{});var wt=i(x);j=s(wt,"CTRL model was proposed in "),Z=r(wt,"A",{href:!0,rel:!0});var od=i(Z);oe=s(od,"CTRL: A Conditional Transformer Language Model for Controllable Generation"),od.forEach(t),F=s(wt," by Nitish Shirish Keskar"),q=r(wt,"EM",{});var nd=i(q);ve=s(nd,", Bryan McCann"),nd.forEach(t),B=s(wt,`, Lav R. Varshney, Caiming Xiong and
Richard Socher. It\u2019s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`),wt.forEach(t),pe=d(o),ne=r(o,"P",{});var sd=i(ne);U=s(sd,"The abstract from the paper is the following:"),sd.forEach(t),he=d(o),se=r(o,"P",{});var ad=i(se);z=r(ad,"EM",{});var rd=i(z);ke=s(rd,`Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.`),rd.forEach(t),ad.forEach(t),H=d(o),ae=r(o,"P",{});var id=i(ae);be=s(id,"Tips:"),id.forEach(t),W=d(o),S=r(o,"UL",{});var Bt=i(S);ee=r(Bt,"LI",{});var Ws=i(ee);I=s(Ws,`CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the `),te=r(Ws,"A",{href:!0,rel:!0});var ld=i(te);V=s(ld,"original implementation"),ld.forEach(t),ye=s(Ws,` for
more information.`),Ws.forEach(t),p=d(Bt),k=r(Bt,"LI",{});var dd=i(k);re=s(dd,`CTRL is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),dd.forEach(t),Ae=d(Bt),ue=r(Bt,"LI",{});var Bs=i(ue);N=s(Bs,`CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the `),Fe=r(Bs,"EM",{});var cd=i(Fe);Oe=s(cd,"run_generation.py"),cd.forEach(t),He=s(Bs," example script."),Bs.forEach(t),D=d(Bt),P=r(Bt,"LI",{});var Ye=i(P);We=s(Ye,"The PyTorch models can take the "),qe=r(Ye,"CODE",{});var pd=i(qe);G=s(pd,"past_key_values"),pd.forEach(t),Be=s(Ye,` as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts `),ze=r(Ye,"CODE",{});var hd=i(ze);Ce=s(hd,"past"),hd.forEach(t),Ue=s(Ye," as input. Using the "),Rn=r(Ye,"CODE",{});var ud=i(Rn);ha=s(ud,"past_key_values"),ud.forEach(t),ua=s(Ye,` value prevents the model from re-computing
pre-computed values in the context of text generation. See the `),Jo=r(Ye,"A",{href:!0});var fd=i(Jo);Mn=r(fd,"CODE",{});var md=i(Mn);fa=s(md,"forward"),md.forEach(t),fd.forEach(t),ma=s(Ye,`
method for more information on the usage of this argument.`),Ye.forEach(t),Bt.forEach(t),Ls=d(o),Qe=r(o,"P",{});var vn=i(Qe);ga=s(vn,"This model was contributed by "),Gt=r(vn,"A",{href:!0,rel:!0});var gd=i(Gt);_a=s(gd,"keskarnitishr"),gd.forEach(t),Ta=s(vn,`. The original code can be found
`),Kt=r(vn,"A",{href:!0,rel:!0});var _d=i(Kt);va=s(_d,"here"),_d.forEach(t),ka=s(vn,"."),vn.forEach(t),$s=d(o),dt=r(o,"H2",{class:!0});var Us=i(dt);Rt=r(Us,"A",{id:!0,class:!0,href:!0});var Td=i(Rt);En=r(Td,"SPAN",{});var vd=i(En);y(Xt.$$.fragment,vd),vd.forEach(t),Td.forEach(t),ba=d(Us),Fn=r(Us,"SPAN",{});var kd=i(Fn);ya=s(kd,"CTRLConfig"),kd.forEach(t),Us.forEach(t),Rs=d(o),we=r(o,"DIV",{class:!0});var Ze=i(we);y(Jt.$$.fragment,Ze),Ca=d(Ze),Je=r(Ze,"P",{});var Ut=i(Je);wa=s(Ut,"This is the configuration class to store the configuration of a "),Qo=r(Ut,"A",{href:!0});var bd=i(Qo);La=s(bd,"CTRLModel"),bd.forEach(t),$a=s(Ut," or a "),Yo=r(Ut,"A",{href:!0});var yd=i(Yo);Ra=s(yd,"TFCTRLModel"),yd.forEach(t),Ma=s(Ut,`. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),Qt=r(Ut,"A",{href:!0,rel:!0});var Cd=i(Qt);Ea=s(Cd,"ctrl"),Cd.forEach(t),Fa=s(Ut," architecture from SalesForce."),Ut.forEach(t),qa=d(Ze),ct=r(Ze,"P",{});var kn=i(ct);za=s(kn,"Configuration objects inherit from "),Zo=r(kn,"A",{href:!0});var wd=i(Zo);Pa=s(wd,"PretrainedConfig"),wd.forEach(t),xa=s(kn,` and can be used to control the model outputs. Read the
documentation from `),en=r(kn,"A",{href:!0});var Ld=i(en);ja=s(Ld,"PretrainedConfig"),Ld.forEach(t),Sa=s(kn," for more information."),kn.forEach(t),Ia=d(Ze),qn=r(Ze,"P",{});var $d=i(qn);Na=s($d,"Examples:"),$d.forEach(t),Da=d(Ze),y(Yt.$$.fragment,Ze),Ze.forEach(t),Ms=d(o),pt=r(o,"H2",{class:!0});var Vs=i(pt);Mt=r(Vs,"A",{id:!0,class:!0,href:!0});var Rd=i(Mt);zn=r(Rd,"SPAN",{});var Md=i(zn);y(Zt.$$.fragment,Md),Md.forEach(t),Rd.forEach(t),Aa=d(Vs),Pn=r(Vs,"SPAN",{});var Ed=i(Pn);Oa=s(Ed,"CTRLTokenizer"),Ed.forEach(t),Vs.forEach(t),Es=d(o),Ne=r(o,"DIV",{class:!0});var Vt=i(Ne);y(eo.$$.fragment,Vt),Ha=d(Vt),xn=r(Vt,"P",{});var Fd=i(xn);Wa=s(Fd,"Construct a CTRL tokenizer. Based on Byte-Pair-Encoding."),Fd.forEach(t),Ba=d(Vt),to=r(Vt,"P",{});var Gs=i(to);Ua=s(Gs,"This tokenizer inherits from "),tn=r(Gs,"A",{href:!0});var qd=i(tn);Va=s(qd,"PreTrainedTokenizer"),qd.forEach(t),Ga=s(Gs,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gs.forEach(t),Ka=d(Vt),on=r(Vt,"DIV",{class:!0});var zd=i(on);y(oo.$$.fragment,zd),zd.forEach(t),Vt.forEach(t),Fs=d(o),ht=r(o,"H2",{class:!0});var Ks=i(ht);Et=r(Ks,"A",{id:!0,class:!0,href:!0});var Pd=i(Et);jn=r(Pd,"SPAN",{});var xd=i(jn);y(no.$$.fragment,xd),xd.forEach(t),Pd.forEach(t),Xa=d(Ks),Sn=r(Ks,"SPAN",{});var jd=i(Sn);Ja=s(jd,"CTRLModel"),jd.forEach(t),Ks.forEach(t),qs=d(o),Le=r(o,"DIV",{class:!0});var et=i(Le);y(so.$$.fragment,et),Qa=d(et),In=r(et,"P",{});var Sd=i(In);Ya=s(Sd,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),Sd.forEach(t),Za=d(et),ao=r(et,"P",{});var Xs=i(ao);er=s(Xs,"This model inherits from "),nn=r(Xs,"A",{href:!0});var Id=i(nn);tr=s(Id,"PreTrainedModel"),Id.forEach(t),or=s(Xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xs.forEach(t),nr=d(et),ro=r(et,"P",{});var Js=i(ro);sr=s(Js,"This model is also a PyTorch "),io=r(Js,"A",{href:!0,rel:!0});var Nd=i(io);ar=s(Nd,"torch.nn.Module"),Nd.forEach(t),rr=s(Js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Js.forEach(t),ir=d(et),Pe=r(et,"DIV",{class:!0});var tt=i(Pe);y(lo.$$.fragment,tt),lr=d(tt),ut=r(tt,"P",{});var bn=i(ut);dr=s(bn,"The "),sn=r(bn,"A",{href:!0});var Dd=i(sn);cr=s(Dd,"CTRLModel"),Dd.forEach(t),pr=s(bn," forward method, overrides the "),Nn=r(bn,"CODE",{});var Ad=i(Nn);hr=s(Ad,"__call__"),Ad.forEach(t),ur=s(bn," special method."),bn.forEach(t),fr=d(tt),y(Ft.$$.fragment,tt),mr=d(tt),Dn=r(tt,"P",{});var Od=i(Dn);gr=s(Od,"Example:"),Od.forEach(t),_r=d(tt),y(co.$$.fragment,tt),tt.forEach(t),et.forEach(t),zs=d(o),ft=r(o,"H2",{class:!0});var Qs=i(ft);qt=r(Qs,"A",{id:!0,class:!0,href:!0});var Hd=i(qt);An=r(Hd,"SPAN",{});var Wd=i(An);y(po.$$.fragment,Wd),Wd.forEach(t),Hd.forEach(t),Tr=d(Qs),On=r(Qs,"SPAN",{});var Bd=i(On);vr=s(Bd,"CTRLLMHeadModel"),Bd.forEach(t),Qs.forEach(t),Ps=d(o),$e=r(o,"DIV",{class:!0});var ot=i($e);y(ho.$$.fragment,ot),kr=d(ot),Hn=r(ot,"P",{});var Ud=i(Hn);br=s(Ud,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Ud.forEach(t),yr=d(ot),uo=r(ot,"P",{});var Ys=i(uo);Cr=s(Ys,"This model inherits from "),an=r(Ys,"A",{href:!0});var Vd=i(an);wr=s(Vd,"PreTrainedModel"),Vd.forEach(t),Lr=s(Ys,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ys.forEach(t),$r=d(ot),fo=r(ot,"P",{});var Zs=i(fo);Rr=s(Zs,"This model is also a PyTorch "),mo=r(Zs,"A",{href:!0,rel:!0});var Gd=i(mo);Mr=s(Gd,"torch.nn.Module"),Gd.forEach(t),Er=s(Zs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zs.forEach(t),Fr=d(ot),xe=r(ot,"DIV",{class:!0});var nt=i(xe);y(go.$$.fragment,nt),qr=d(nt),mt=r(nt,"P",{});var yn=i(mt);zr=s(yn,"The "),rn=r(yn,"A",{href:!0});var Kd=i(rn);Pr=s(Kd,"CTRLLMHeadModel"),Kd.forEach(t),xr=s(yn," forward method, overrides the "),Wn=r(yn,"CODE",{});var Xd=i(Wn);jr=s(Xd,"__call__"),Xd.forEach(t),Sr=s(yn," special method."),yn.forEach(t),Ir=d(nt),y(zt.$$.fragment,nt),Nr=d(nt),Bn=r(nt,"P",{});var Jd=i(Bn);Dr=s(Jd,"Example:"),Jd.forEach(t),Ar=d(nt),y(_o.$$.fragment,nt),nt.forEach(t),ot.forEach(t),xs=d(o),gt=r(o,"H2",{class:!0});var ea=i(gt);Pt=r(ea,"A",{id:!0,class:!0,href:!0});var Qd=i(Pt);Un=r(Qd,"SPAN",{});var Yd=i(Un);y(To.$$.fragment,Yd),Yd.forEach(t),Qd.forEach(t),Or=d(ea),Vn=r(ea,"SPAN",{});var Zd=i(Vn);Hr=s(Zd,"CTRLForSequenceClassification"),Zd.forEach(t),ea.forEach(t),js=d(o),Re=r(o,"DIV",{class:!0});var st=i(Re);y(vo.$$.fragment,st),Wr=d(st),Me=r(st,"P",{});var Ve=i(Me);Br=s(Ve,`The CTRL Model transformer with a sequence classification head on top (linear layer).
`),ln=r(Ve,"A",{href:!0});var ec=i(ln);Ur=s(ec,"CTRLForSequenceClassification"),ec.forEach(t),Vr=s(Ve,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a `),Gn=r(Ve,"CODE",{});var tc=i(Gn);Gr=s(tc,"pad_token_id"),tc.forEach(t),Kr=s(Ve,` is defined in the configuration, it finds the last token that is not a padding token in
each row. If no `),Kn=r(Ve,"CODE",{});var oc=i(Kn);Xr=s(oc,"pad_token_id"),oc.forEach(t),Jr=s(Ve,` is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when `),Xn=r(Ve,"CODE",{});var nc=i(Xn);Qr=s(nc,"inputs_embeds"),nc.forEach(t),Yr=s(Ve," are passed instead of "),Jn=r(Ve,"CODE",{});var sc=i(Jn);Zr=s(sc,"input_ids"),sc.forEach(t),ei=s(Ve,`, it does the same (take the last
value in each row of the batch).`),Ve.forEach(t),ti=d(st),ko=r(st,"P",{});var ta=i(ko);oi=s(ta,"This model inherits from "),dn=r(ta,"A",{href:!0});var ac=i(dn);ni=s(ac,"PreTrainedModel"),ac.forEach(t),si=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(t),ai=d(st),bo=r(st,"P",{});var oa=i(bo);ri=s(oa,"This model is also a PyTorch "),yo=r(oa,"A",{href:!0,rel:!0});var rc=i(yo);ii=s(rc,"torch.nn.Module"),rc.forEach(t),li=s(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(t),di=d(st),ie=r(st,"DIV",{class:!0});var Ie=i(ie);y(Co.$$.fragment,Ie),ci=d(Ie),_t=r(Ie,"P",{});var Cn=i(_t);pi=s(Cn,"The "),cn=r(Cn,"A",{href:!0});var ic=i(cn);hi=s(ic,"CTRLForSequenceClassification"),ic.forEach(t),ui=s(Cn," forward method, overrides the "),Qn=r(Cn,"CODE",{});var lc=i(Qn);fi=s(lc,"__call__"),lc.forEach(t),mi=s(Cn," special method."),Cn.forEach(t),gi=d(Ie),y(xt.$$.fragment,Ie),_i=d(Ie),Yn=r(Ie,"P",{});var dc=i(Yn);Ti=s(dc,"Example of single-label classification:"),dc.forEach(t),vi=d(Ie),y(wo.$$.fragment,Ie),ki=d(Ie),Zn=r(Ie,"P",{});var cc=i(Zn);bi=s(cc,"Example of multi-label classification:"),cc.forEach(t),yi=d(Ie),y(Lo.$$.fragment,Ie),Ie.forEach(t),st.forEach(t),Ss=d(o),Tt=r(o,"H2",{class:!0});var na=i(Tt);jt=r(na,"A",{id:!0,class:!0,href:!0});var pc=i(jt);es=r(pc,"SPAN",{});var hc=i(es);y($o.$$.fragment,hc),hc.forEach(t),pc.forEach(t),Ci=d(na),ts=r(na,"SPAN",{});var uc=i(ts);wi=s(uc,"TFCTRLModel"),uc.forEach(t),na.forEach(t),Is=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);y(Ro.$$.fragment,Ge),Li=d(Ge),os=r(Ge,"P",{});var fc=i(os);$i=s(fc,"The bare CTRL Model transformer outputting raw hidden-states without any specific head on top."),fc.forEach(t),Ri=d(Ge),Mo=r(Ge,"P",{});var sa=i(Mo);Mi=s(sa,"This model inherits from "),pn=r(sa,"A",{href:!0});var mc=i(pn);Ei=s(mc,"TFPreTrainedModel"),mc.forEach(t),Fi=s(sa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sa.forEach(t),qi=d(Ge),Eo=r(Ge,"P",{});var aa=i(Eo);zi=s(aa,"This model is also a "),Fo=r(aa,"A",{href:!0,rel:!0});var gc=i(Fo);Pi=s(gc,"tf.keras.Model"),gc.forEach(t),xi=s(aa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aa.forEach(t),ji=d(Ge),y(St.$$.fragment,Ge),Si=d(Ge),je=r(Ge,"DIV",{class:!0});var at=i(je);y(qo.$$.fragment,at),Ii=d(at),vt=r(at,"P",{});var wn=i(vt);Ni=s(wn,"The "),hn=r(wn,"A",{href:!0});var _c=i(hn);Di=s(_c,"TFCTRLModel"),_c.forEach(t),Ai=s(wn," forward method, overrides the "),ns=r(wn,"CODE",{});var Tc=i(ns);Oi=s(Tc,"__call__"),Tc.forEach(t),Hi=s(wn," special method."),wn.forEach(t),Wi=d(at),y(It.$$.fragment,at),Bi=d(at),ss=r(at,"P",{});var vc=i(ss);Ui=s(vc,"Example:"),vc.forEach(t),Vi=d(at),y(zo.$$.fragment,at),at.forEach(t),Ge.forEach(t),Ns=d(o),kt=r(o,"H2",{class:!0});var ra=i(kt);Nt=r(ra,"A",{id:!0,class:!0,href:!0});var kc=i(Nt);as=r(kc,"SPAN",{});var bc=i(as);y(Po.$$.fragment,bc),bc.forEach(t),kc.forEach(t),Gi=d(ra),rs=r(ra,"SPAN",{});var yc=i(rs);Ki=s(yc,"TFCTRLLMHeadModel"),yc.forEach(t),ra.forEach(t),Ds=d(o),de=r(o,"DIV",{class:!0});var Ke=i(de);y(xo.$$.fragment,Ke),Xi=d(Ke),is=r(Ke,"P",{});var Cc=i(is);Ji=s(Cc,`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Cc.forEach(t),Qi=d(Ke),jo=r(Ke,"P",{});var ia=i(jo);Yi=s(ia,"This model inherits from "),un=r(ia,"A",{href:!0});var wc=i(un);Zi=s(wc,"TFPreTrainedModel"),wc.forEach(t),el=s(ia,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ia.forEach(t),tl=d(Ke),So=r(Ke,"P",{});var la=i(So);ol=s(la,"This model is also a "),Io=r(la,"A",{href:!0,rel:!0});var Lc=i(Io);nl=s(Lc,"tf.keras.Model"),Lc.forEach(t),sl=s(la,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),la.forEach(t),al=d(Ke),y(Dt.$$.fragment,Ke),rl=d(Ke),Se=r(Ke,"DIV",{class:!0});var rt=i(Se);y(No.$$.fragment,rt),il=d(rt),bt=r(rt,"P",{});var Ln=i(bt);ll=s(Ln,"The "),fn=r(Ln,"A",{href:!0});var $c=i(fn);dl=s($c,"TFCTRLLMHeadModel"),$c.forEach(t),cl=s(Ln," forward method, overrides the "),ls=r(Ln,"CODE",{});var Rc=i(ls);pl=s(Rc,"__call__"),Rc.forEach(t),hl=s(Ln," special method."),Ln.forEach(t),ul=d(rt),y(At.$$.fragment,rt),fl=d(rt),ds=r(rt,"P",{});var Mc=i(ds);ml=s(Mc,"Example:"),Mc.forEach(t),gl=d(rt),y(Do.$$.fragment,rt),rt.forEach(t),Ke.forEach(t),As=d(o),yt=r(o,"H2",{class:!0});var da=i(yt);Ot=r(da,"A",{id:!0,class:!0,href:!0});var Ec=i(Ot);cs=r(Ec,"SPAN",{});var Fc=i(cs);y(Ao.$$.fragment,Fc),Fc.forEach(t),Ec.forEach(t),_l=d(da),ps=r(da,"SPAN",{});var qc=i(ps);Tl=s(qc,"TFCTRLForSequenceClassification"),qc.forEach(t),da.forEach(t),Os=d(o),K=r(o,"DIV",{class:!0});var me=i(K);y(Oo.$$.fragment,me),vl=d(me),hs=r(me,"P",{});var zc=i(hs);kl=s(zc,"The CTRL Model transformer with a sequence classification head on top (linear layer)."),zc.forEach(t),bl=d(me),mn=r(me,"P",{});var td=i(mn);gn=r(td,"A",{href:!0});var Pc=i(gn);yl=s(Pc,"TFCTRLForSequenceClassification"),Pc.forEach(t),Cl=s(td,` uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`),td.forEach(t),wl=d(me),De=r(me,"P",{});var it=i(De);Ll=s(it,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),us=r(it,"CODE",{});var xc=i(us);$l=s(xc,"pad_token_id"),xc.forEach(t),Rl=s(it,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),fs=r(it,"CODE",{});var jc=i(fs);Ml=s(jc,"pad_token_id"),jc.forEach(t),El=s(it,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ms=r(it,"CODE",{});var Sc=i(ms);Fl=s(Sc,"inputs_embeds"),Sc.forEach(t),ql=s(it," are passed instead of "),gs=r(it,"CODE",{});var Ic=i(gs);zl=s(Ic,"input_ids"),Ic.forEach(t),Pl=s(it,`, it does the same (take the last value in
each row of the batch).`),it.forEach(t),xl=d(me),Ho=r(me,"P",{});var ca=i(Ho);jl=s(ca,"This model inherits from "),_n=r(ca,"A",{href:!0});var Nc=i(_n);Sl=s(Nc,"TFPreTrainedModel"),Nc.forEach(t),Il=s(ca,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ca.forEach(t),Nl=d(me),Wo=r(me,"P",{});var pa=i(Wo);Dl=s(pa,"This model is also a "),Bo=r(pa,"A",{href:!0,rel:!0});var Dc=i(Bo);Al=s(Dc,"tf.keras.Model"),Dc.forEach(t),Ol=s(pa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pa.forEach(t),Hl=d(me),y(Ht.$$.fragment,me),Wl=d(me),fe=r(me,"DIV",{class:!0});var Xe=i(fe);y(Uo.$$.fragment,Xe),Bl=d(Xe),Ct=r(Xe,"P",{});var $n=i(Ct);Ul=s($n,"The "),Tn=r($n,"A",{href:!0});var Ac=i(Tn);Vl=s(Ac,"TFCTRLForSequenceClassification"),Ac.forEach(t),Gl=s($n," forward method, overrides the "),_s=r($n,"CODE",{});var Oc=i(_s);Kl=s(Oc,"__call__"),Oc.forEach(t),Xl=s($n," special method."),$n.forEach(t),Jl=d(Xe),y(Wt.$$.fragment,Xe),Ql=d(Xe),Ts=r(Xe,"P",{});var Hc=i(Ts);Yl=s(Hc,"Example:"),Hc.forEach(t),Zl=d(Xe),y(Vo.$$.fragment,Xe),ed=d(Xe),y(Go.$$.fragment,Xe),Xe.forEach(t),me.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(sp)),c(g,"id","ctrl"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#ctrl"),c(m,"class","relative group"),c(J,"id","overview"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#overview"),c(R,"class","relative group"),c(Z,"href","https://arxiv.org/abs/1909.05858"),c(Z,"rel","nofollow"),c(te,"href","https://github.com/salesforce/ctrl"),c(te,"rel","nofollow"),c(Jo,"href","model_doc/ctrl#transformers.CTRLModel.forward"),c(Gt,"href","https://huggingface.co/keskarnitishr"),c(Gt,"rel","nofollow"),c(Kt,"href","https://github.com/salesforce/ctrl"),c(Kt,"rel","nofollow"),c(Rt,"id","transformers.CTRLConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.CTRLConfig"),c(dt,"class","relative group"),c(Qo,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLModel"),c(Yo,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLModel"),c(Qt,"href","https://huggingface.co/ctrl"),c(Qt,"rel","nofollow"),c(Zo,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(en,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(we,"class","docstring"),c(Mt,"id","transformers.CTRLTokenizer"),c(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mt,"href","#transformers.CTRLTokenizer"),c(pt,"class","relative group"),c(tn,"href","/docs/transformers/pr_16370/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(on,"class","docstring"),c(Ne,"class","docstring"),c(Et,"id","transformers.CTRLModel"),c(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Et,"href","#transformers.CTRLModel"),c(ht,"class","relative group"),c(nn,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(io,"rel","nofollow"),c(sn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLModel"),c(Pe,"class","docstring"),c(Le,"class","docstring"),c(qt,"id","transformers.CTRLLMHeadModel"),c(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qt,"href","#transformers.CTRLLMHeadModel"),c(ft,"class","relative group"),c(an,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mo,"rel","nofollow"),c(rn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLLMHeadModel"),c(xe,"class","docstring"),c($e,"class","docstring"),c(Pt,"id","transformers.CTRLForSequenceClassification"),c(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pt,"href","#transformers.CTRLForSequenceClassification"),c(gt,"class","relative group"),c(ln,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(dn,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(cn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.CTRLForSequenceClassification"),c(ie,"class","docstring"),c(Re,"class","docstring"),c(jt,"id","transformers.TFCTRLModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.TFCTRLModel"),c(Tt,"class","relative group"),c(pn,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fo,"rel","nofollow"),c(hn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLModel"),c(je,"class","docstring"),c(le,"class","docstring"),c(Nt,"id","transformers.TFCTRLLMHeadModel"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.TFCTRLLMHeadModel"),c(kt,"class","relative group"),c(un,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(Io,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Io,"rel","nofollow"),c(fn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel"),c(Se,"class","docstring"),c(de,"class","docstring"),c(Ot,"id","transformers.TFCTRLForSequenceClassification"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#transformers.TFCTRLForSequenceClassification"),c(yt,"class","relative group"),c(gn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(_n,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(Bo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Bo,"rel","nofollow"),c(Tn,"href","/docs/transformers/pr_16370/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification"),c(fe,"class","docstring"),c(K,"class","docstring")},m(o,f){e(document.head,h),u(o,E,f),u(o,m,f),e(m,g),e(g,v),C(T,v,null),e(m,_),e(m,M),e(M,ge),u(o,Q,f),u(o,R,f),e(R,J),e(J,A),C(Y,A,null),e(R,_e),e(R,O),e(O,Te),u(o,ce,f),u(o,x,f),e(x,j),e(x,Z),e(Z,oe),e(x,F),e(x,q),e(q,ve),e(x,B),u(o,pe,f),u(o,ne,f),e(ne,U),u(o,he,f),u(o,se,f),e(se,z),e(z,ke),u(o,H,f),u(o,ae,f),e(ae,be),u(o,W,f),u(o,S,f),e(S,ee),e(ee,I),e(ee,te),e(te,V),e(ee,ye),e(S,p),e(S,k),e(k,re),e(S,Ae),e(S,ue),e(ue,N),e(ue,Fe),e(Fe,Oe),e(ue,He),e(S,D),e(S,P),e(P,We),e(P,qe),e(qe,G),e(P,Be),e(P,ze),e(ze,Ce),e(P,Ue),e(P,Rn),e(Rn,ha),e(P,ua),e(P,Jo),e(Jo,Mn),e(Mn,fa),e(P,ma),u(o,Ls,f),u(o,Qe,f),e(Qe,ga),e(Qe,Gt),e(Gt,_a),e(Qe,Ta),e(Qe,Kt),e(Kt,va),e(Qe,ka),u(o,$s,f),u(o,dt,f),e(dt,Rt),e(Rt,En),C(Xt,En,null),e(dt,ba),e(dt,Fn),e(Fn,ya),u(o,Rs,f),u(o,we,f),C(Jt,we,null),e(we,Ca),e(we,Je),e(Je,wa),e(Je,Qo),e(Qo,La),e(Je,$a),e(Je,Yo),e(Yo,Ra),e(Je,Ma),e(Je,Qt),e(Qt,Ea),e(Je,Fa),e(we,qa),e(we,ct),e(ct,za),e(ct,Zo),e(Zo,Pa),e(ct,xa),e(ct,en),e(en,ja),e(ct,Sa),e(we,Ia),e(we,qn),e(qn,Na),e(we,Da),C(Yt,we,null),u(o,Ms,f),u(o,pt,f),e(pt,Mt),e(Mt,zn),C(Zt,zn,null),e(pt,Aa),e(pt,Pn),e(Pn,Oa),u(o,Es,f),u(o,Ne,f),C(eo,Ne,null),e(Ne,Ha),e(Ne,xn),e(xn,Wa),e(Ne,Ba),e(Ne,to),e(to,Ua),e(to,tn),e(tn,Va),e(to,Ga),e(Ne,Ka),e(Ne,on),C(oo,on,null),u(o,Fs,f),u(o,ht,f),e(ht,Et),e(Et,jn),C(no,jn,null),e(ht,Xa),e(ht,Sn),e(Sn,Ja),u(o,qs,f),u(o,Le,f),C(so,Le,null),e(Le,Qa),e(Le,In),e(In,Ya),e(Le,Za),e(Le,ao),e(ao,er),e(ao,nn),e(nn,tr),e(ao,or),e(Le,nr),e(Le,ro),e(ro,sr),e(ro,io),e(io,ar),e(ro,rr),e(Le,ir),e(Le,Pe),C(lo,Pe,null),e(Pe,lr),e(Pe,ut),e(ut,dr),e(ut,sn),e(sn,cr),e(ut,pr),e(ut,Nn),e(Nn,hr),e(ut,ur),e(Pe,fr),C(Ft,Pe,null),e(Pe,mr),e(Pe,Dn),e(Dn,gr),e(Pe,_r),C(co,Pe,null),u(o,zs,f),u(o,ft,f),e(ft,qt),e(qt,An),C(po,An,null),e(ft,Tr),e(ft,On),e(On,vr),u(o,Ps,f),u(o,$e,f),C(ho,$e,null),e($e,kr),e($e,Hn),e(Hn,br),e($e,yr),e($e,uo),e(uo,Cr),e(uo,an),e(an,wr),e(uo,Lr),e($e,$r),e($e,fo),e(fo,Rr),e(fo,mo),e(mo,Mr),e(fo,Er),e($e,Fr),e($e,xe),C(go,xe,null),e(xe,qr),e(xe,mt),e(mt,zr),e(mt,rn),e(rn,Pr),e(mt,xr),e(mt,Wn),e(Wn,jr),e(mt,Sr),e(xe,Ir),C(zt,xe,null),e(xe,Nr),e(xe,Bn),e(Bn,Dr),e(xe,Ar),C(_o,xe,null),u(o,xs,f),u(o,gt,f),e(gt,Pt),e(Pt,Un),C(To,Un,null),e(gt,Or),e(gt,Vn),e(Vn,Hr),u(o,js,f),u(o,Re,f),C(vo,Re,null),e(Re,Wr),e(Re,Me),e(Me,Br),e(Me,ln),e(ln,Ur),e(Me,Vr),e(Me,Gn),e(Gn,Gr),e(Me,Kr),e(Me,Kn),e(Kn,Xr),e(Me,Jr),e(Me,Xn),e(Xn,Qr),e(Me,Yr),e(Me,Jn),e(Jn,Zr),e(Me,ei),e(Re,ti),e(Re,ko),e(ko,oi),e(ko,dn),e(dn,ni),e(ko,si),e(Re,ai),e(Re,bo),e(bo,ri),e(bo,yo),e(yo,ii),e(bo,li),e(Re,di),e(Re,ie),C(Co,ie,null),e(ie,ci),e(ie,_t),e(_t,pi),e(_t,cn),e(cn,hi),e(_t,ui),e(_t,Qn),e(Qn,fi),e(_t,mi),e(ie,gi),C(xt,ie,null),e(ie,_i),e(ie,Yn),e(Yn,Ti),e(ie,vi),C(wo,ie,null),e(ie,ki),e(ie,Zn),e(Zn,bi),e(ie,yi),C(Lo,ie,null),u(o,Ss,f),u(o,Tt,f),e(Tt,jt),e(jt,es),C($o,es,null),e(Tt,Ci),e(Tt,ts),e(ts,wi),u(o,Is,f),u(o,le,f),C(Ro,le,null),e(le,Li),e(le,os),e(os,$i),e(le,Ri),e(le,Mo),e(Mo,Mi),e(Mo,pn),e(pn,Ei),e(Mo,Fi),e(le,qi),e(le,Eo),e(Eo,zi),e(Eo,Fo),e(Fo,Pi),e(Eo,xi),e(le,ji),C(St,le,null),e(le,Si),e(le,je),C(qo,je,null),e(je,Ii),e(je,vt),e(vt,Ni),e(vt,hn),e(hn,Di),e(vt,Ai),e(vt,ns),e(ns,Oi),e(vt,Hi),e(je,Wi),C(It,je,null),e(je,Bi),e(je,ss),e(ss,Ui),e(je,Vi),C(zo,je,null),u(o,Ns,f),u(o,kt,f),e(kt,Nt),e(Nt,as),C(Po,as,null),e(kt,Gi),e(kt,rs),e(rs,Ki),u(o,Ds,f),u(o,de,f),C(xo,de,null),e(de,Xi),e(de,is),e(is,Ji),e(de,Qi),e(de,jo),e(jo,Yi),e(jo,un),e(un,Zi),e(jo,el),e(de,tl),e(de,So),e(So,ol),e(So,Io),e(Io,nl),e(So,sl),e(de,al),C(Dt,de,null),e(de,rl),e(de,Se),C(No,Se,null),e(Se,il),e(Se,bt),e(bt,ll),e(bt,fn),e(fn,dl),e(bt,cl),e(bt,ls),e(ls,pl),e(bt,hl),e(Se,ul),C(At,Se,null),e(Se,fl),e(Se,ds),e(ds,ml),e(Se,gl),C(Do,Se,null),u(o,As,f),u(o,yt,f),e(yt,Ot),e(Ot,cs),C(Ao,cs,null),e(yt,_l),e(yt,ps),e(ps,Tl),u(o,Os,f),u(o,K,f),C(Oo,K,null),e(K,vl),e(K,hs),e(hs,kl),e(K,bl),e(K,mn),e(mn,gn),e(gn,yl),e(mn,Cl),e(K,wl),e(K,De),e(De,Ll),e(De,us),e(us,$l),e(De,Rl),e(De,fs),e(fs,Ml),e(De,El),e(De,ms),e(ms,Fl),e(De,ql),e(De,gs),e(gs,zl),e(De,Pl),e(K,xl),e(K,Ho),e(Ho,jl),e(Ho,_n),e(_n,Sl),e(Ho,Il),e(K,Nl),e(K,Wo),e(Wo,Dl),e(Wo,Bo),e(Bo,Al),e(Wo,Ol),e(K,Hl),C(Ht,K,null),e(K,Wl),e(K,fe),C(Uo,fe,null),e(fe,Bl),e(fe,Ct),e(Ct,Ul),e(Ct,Tn),e(Tn,Vl),e(Ct,Gl),e(Ct,_s),e(_s,Kl),e(Ct,Xl),e(fe,Jl),C(Wt,fe,null),e(fe,Ql),e(fe,Ts),e(Ts,Yl),e(fe,Zl),C(Vo,fe,null),e(fe,ed),C(Go,fe,null),Hs=!0},p(o,[f]){const Ko={};f&2&&(Ko.$$scope={dirty:f,ctx:o}),Ft.$set(Ko);const vs={};f&2&&(vs.$$scope={dirty:f,ctx:o}),zt.$set(vs);const ks={};f&2&&(ks.$$scope={dirty:f,ctx:o}),xt.$set(ks);const bs={};f&2&&(bs.$$scope={dirty:f,ctx:o}),St.$set(bs);const Xo={};f&2&&(Xo.$$scope={dirty:f,ctx:o}),It.$set(Xo);const ys={};f&2&&(ys.$$scope={dirty:f,ctx:o}),Dt.$set(ys);const Cs={};f&2&&(Cs.$$scope={dirty:f,ctx:o}),At.$set(Cs);const ws={};f&2&&(ws.$$scope={dirty:f,ctx:o}),Ht.$set(ws);const wt={};f&2&&(wt.$$scope={dirty:f,ctx:o}),Wt.$set(wt)},i(o){Hs||(w(T.$$.fragment,o),w(Y.$$.fragment,o),w(Xt.$$.fragment,o),w(Jt.$$.fragment,o),w(Yt.$$.fragment,o),w(Zt.$$.fragment,o),w(eo.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(so.$$.fragment,o),w(lo.$$.fragment,o),w(Ft.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(go.$$.fragment,o),w(zt.$$.fragment,o),w(_o.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(Co.$$.fragment,o),w(xt.$$.fragment,o),w(wo.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Ro.$$.fragment,o),w(St.$$.fragment,o),w(qo.$$.fragment,o),w(It.$$.fragment,o),w(zo.$$.fragment,o),w(Po.$$.fragment,o),w(xo.$$.fragment,o),w(Dt.$$.fragment,o),w(No.$$.fragment,o),w(At.$$.fragment,o),w(Do.$$.fragment,o),w(Ao.$$.fragment,o),w(Oo.$$.fragment,o),w(Ht.$$.fragment,o),w(Uo.$$.fragment,o),w(Wt.$$.fragment,o),w(Vo.$$.fragment,o),w(Go.$$.fragment,o),Hs=!0)},o(o){L(T.$$.fragment,o),L(Y.$$.fragment,o),L(Xt.$$.fragment,o),L(Jt.$$.fragment,o),L(Yt.$$.fragment,o),L(Zt.$$.fragment,o),L(eo.$$.fragment,o),L(oo.$$.fragment,o),L(no.$$.fragment,o),L(so.$$.fragment,o),L(lo.$$.fragment,o),L(Ft.$$.fragment,o),L(co.$$.fragment,o),L(po.$$.fragment,o),L(ho.$$.fragment,o),L(go.$$.fragment,o),L(zt.$$.fragment,o),L(_o.$$.fragment,o),L(To.$$.fragment,o),L(vo.$$.fragment,o),L(Co.$$.fragment,o),L(xt.$$.fragment,o),L(wo.$$.fragment,o),L(Lo.$$.fragment,o),L($o.$$.fragment,o),L(Ro.$$.fragment,o),L(St.$$.fragment,o),L(qo.$$.fragment,o),L(It.$$.fragment,o),L(zo.$$.fragment,o),L(Po.$$.fragment,o),L(xo.$$.fragment,o),L(Dt.$$.fragment,o),L(No.$$.fragment,o),L(At.$$.fragment,o),L(Do.$$.fragment,o),L(Ao.$$.fragment,o),L(Oo.$$.fragment,o),L(Ht.$$.fragment,o),L(Uo.$$.fragment,o),L(Wt.$$.fragment,o),L(Vo.$$.fragment,o),L(Go.$$.fragment,o),Hs=!1},d(o){t(h),o&&t(E),o&&t(m),$(T),o&&t(Q),o&&t(R),$(Y),o&&t(ce),o&&t(x),o&&t(pe),o&&t(ne),o&&t(he),o&&t(se),o&&t(H),o&&t(ae),o&&t(W),o&&t(S),o&&t(Ls),o&&t(Qe),o&&t($s),o&&t(dt),$(Xt),o&&t(Rs),o&&t(we),$(Jt),$(Yt),o&&t(Ms),o&&t(pt),$(Zt),o&&t(Es),o&&t(Ne),$(eo),$(oo),o&&t(Fs),o&&t(ht),$(no),o&&t(qs),o&&t(Le),$(so),$(lo),$(Ft),$(co),o&&t(zs),o&&t(ft),$(po),o&&t(Ps),o&&t($e),$(ho),$(go),$(zt),$(_o),o&&t(xs),o&&t(gt),$(To),o&&t(js),o&&t(Re),$(vo),$(Co),$(xt),$(wo),$(Lo),o&&t(Ss),o&&t(Tt),$($o),o&&t(Is),o&&t(le),$(Ro),$(St),$(qo),$(It),$(zo),o&&t(Ns),o&&t(kt),$(Po),o&&t(Ds),o&&t(de),$(xo),$(Dt),$(No),$(At),$(Do),o&&t(As),o&&t(yt),$(Ao),o&&t(Os),o&&t(K),$(Oo),$(Ht),$(Uo),$(Wt),$(Vo),$(Go)}}}const sp={local:"ctrl",sections:[{local:"overview",title:"Overview"},{local:"transformers.CTRLConfig",title:"CTRLConfig"},{local:"transformers.CTRLTokenizer",title:"CTRLTokenizer"},{local:"transformers.CTRLModel",title:"CTRLModel"},{local:"transformers.CTRLLMHeadModel",title:"CTRLLMHeadModel"},{local:"transformers.CTRLForSequenceClassification",title:"CTRLForSequenceClassification"},{local:"transformers.TFCTRLModel",title:"TFCTRLModel"},{local:"transformers.TFCTRLLMHeadModel",title:"TFCTRLLMHeadModel"},{local:"transformers.TFCTRLForSequenceClassification",title:"TFCTRLForSequenceClassification"}],title:"CTRL"};function ap(X){return Gc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pp extends Wc{constructor(h){super();Bc(this,h,ap,np,Uc,{})}}export{pp as default,sp as metadata};
