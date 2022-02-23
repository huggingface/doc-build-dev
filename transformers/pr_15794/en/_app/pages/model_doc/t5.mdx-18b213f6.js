import{S as Cw,i as Aw,s as Lw,e as o,k as d,w as f,t as r,M as Nw,c as s,d as t,m as l,a,x as _,h as i,b as c,F as e,g as p,y as g,q as T,o as k,B as v}from"../../chunks/vendor-22ad994f.js";import{T as zt}from"../../chunks/Tip-540f533b.js";import{D as P}from"../../chunks/Docstring-3bc3620c.js";import{C as R}from"../../chunks/CodeBlock-03069293.js";import{I as $e}from"../../chunks/IconCopyLink-2eb9a001.js";import"../../chunks/CopyButton-f539c482.js";function Iw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Dw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Sw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Ow(N){let u,$,b,y,x,z,w,q,qe,oe,E,ee,O,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,ve,ue,U,Fe,be,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),x=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);x=s(te,"LI",{});var Oe=a(x);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),q=s(te,"LI",{});var lt=a(q);qe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var S=a(E);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);ve=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=a(U);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),be=l(L),M=s(L,"LI",{});var Z=a(M);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ne=a(A);Pe=i(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Z.forEach(t),fe=l(L),D=s(L,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,O),e(O,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function Gw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Bw(N){let u,$,b,y,x,z,w,q,qe,oe,E,ee,O,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,ve,ue,U,Fe,be,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),x=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);x=s(te,"LI",{});var Oe=a(x);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),q=s(te,"LI",{});var lt=a(q);qe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var S=a(E);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);ve=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=a(U);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),be=l(L),M=s(L,"LI",{});var Z=a(M);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ne=a(A);Pe=i(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Z.forEach(t),fe=l(L),D=s(L,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,O),e(O,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function Uw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Ww(N){let u,$,b,y,x,z,w,q,qe,oe,E,ee,O,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,ve,ue,U,Fe,be,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae;return{c(){u=o("p"),$=r("TF 2.0 models accepts two formats as inputs:"),b=d(),y=o("ul"),x=o("li"),z=r("having all inputs as keyword arguments (like PyTorch models), or"),w=d(),q=o("li"),qe=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=d(),E=o("p"),ee=r("This second option is useful when using "),O=o("code"),se=r("tf.keras.Model.fit"),Ee=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),je=r("model(inputs)"),ke=r("."),B=d(),I=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),F=o("ul"),C=o("li"),he=r("a single Tensor with "),K=o("code"),ve=r("input_ids"),ue=r(" only and nothing else: "),U=o("code"),Fe=r("model(inputs_ids)"),be=d(),M=o("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),me=r(" or "),A=o("code"),Pe=r("model([input_ids, attention_mask, token_type_ids])"),fe=d(),D=o("li"),Ce=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=o("code"),Ae=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){u=s(m,"P",{});var j=a(u);$=i(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),b=l(m),y=s(m,"UL",{});var te=a(y);x=s(te,"LI",{});var Oe=a(x);z=i(Oe,"having all inputs as keyword arguments (like PyTorch models), or"),Oe.forEach(t),w=l(te),q=s(te,"LI",{});var lt=a(q);qe=i(lt,"having all inputs as a list, tuple or dict in the first positional arguments."),lt.forEach(t),te.forEach(t),oe=l(m),E=s(m,"P",{});var S=a(E);ee=i(S,"This second option is useful when using "),O=s(S,"CODE",{});var Ge=a(O);se=i(Ge,"tf.keras.Model.fit"),Ge.forEach(t),Ee=i(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(S,"CODE",{});var ne=a(G);je=i(ne,"model(inputs)"),ne.forEach(t),ke=i(S,"."),S.forEach(t),B=l(m),I=s(m,"P",{});var ct=a(I);ae=i(ct,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ct.forEach(t),pe=l(m),F=s(m,"UL",{});var L=a(F);C=s(L,"LI",{});var Y=a(C);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var pt=a(K);ve=i(pt,"input_ids"),pt.forEach(t),ue=i(Y," only and nothing else: "),U=s(Y,"CODE",{});var Le=a(U);Fe=i(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),be=l(L),M=s(L,"LI",{});var Z=a(M);Me=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var ht=a(H);V=i(ht,"model([input_ids, attention_mask])"),ht.forEach(t),me=i(Z," or "),A=s(Z,"CODE",{});var Ne=a(A);Pe=i(Ne,"model([input_ids, attention_mask, token_type_ids])"),Ne.forEach(t),Z.forEach(t),fe=l(L),D=s(L,"LI",{});var Ie=a(D);Ce=i(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s(Ie,"CODE",{});var ut=a(W);Ae=i(ut,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ut.forEach(t),Ie.forEach(t),L.forEach(t)},m(m,j){p(m,u,j),e(u,$),p(m,b,j),p(m,y,j),e(y,x),e(x,z),e(y,w),e(y,q),e(q,qe),p(m,oe,j),p(m,E,j),e(E,ee),e(E,O),e(O,se),e(E,Ee),e(E,G),e(G,je),e(E,ke),p(m,B,j),p(m,I,j),e(I,ae),p(m,pe,j),p(m,F,j),e(F,C),e(C,he),e(C,K),e(K,ve),e(C,ue),e(C,U),e(U,Fe),e(F,be),e(F,M),e(M,Me),e(M,H),e(H,V),e(M,me),e(M,A),e(A,Pe),e(F,fe),e(F,D),e(D,Ce),e(D,W),e(W,Ae)},d(m){m&&t(u),m&&t(b),m&&t(y),m&&t(oe),m&&t(E),m&&t(B),m&&t(I),m&&t(pe),m&&t(F)}}}function Rw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Hw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Vw(N){let u,$,b,y,x;return{c(){u=o("p"),$=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),b=o("code"),y=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(z){u=s(z,"P",{});var w=a(u);$=i(w,"Although the recipe for forward pass needs to be defined within this function, one should call the "),b=s(w,"CODE",{});var q=a(b);y=i(q,"Module"),q.forEach(t),x=i(w,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),w.forEach(t)},m(z,w){p(z,u,w),e(u,$),e(u,b),e(b,y),e(u,x)},d(z){z&&t(u)}}}function Kw(N){let u,$,b,y,x,z,w,q,qe,oe,E,ee,O,se,Ee,G,je,ke,B,I,ae,pe,F,C,he,K,ve,ue,U,Fe,be,M,Me,H,V,me,A,Pe,fe,D,Ce,W,Ae,m,j,te,Oe,lt,S,Ge,ne,ct,L,Y,pt,Le,Z,ht,Ne,Ie,ut,Al,Ga,yp,Ll,Be,Xr,Qr,ho,zp,xp,ei,ti,uo,$p,qp,ni,oi,mo,Ep,jp,si,ai,fo,Fp,Mp,ri,Ba,_o,Pp,Cp,Nl,Ua,Ap,Il,xt,ii,yn,di,Lp,Np,Wa,Ip,Dp,Sp,li,zn,ci,Op,Gp,Ra,Bp,Up,Wp,pi,xn,hi,Rp,Hp,Ha,Vp,Kp,Dl,$n,Yp,go,Zp,Jp,Sl,$t,Xp,To,Qp,eh,ko,th,nh,Ol,Va,Gl,Yt,qn,ui,vo,oh,mi,sh,Bl,mt,ah,fi,rh,ih,_i,dh,lh,gi,ch,ph,Ul,En,hh,Ka,uh,mh,Wl,jn,dt,Ti,fh,_h,_e,gh,ki,Th,kh,vi,vh,bh,bi,wh,yh,wi,zh,xh,yi,$h,qh,Ya,Eh,jh,Fh,zi,Mh,Ph,bo,Ch,wo,Ah,yo,Lh,Nh,Ih,ge,xi,Dh,Sh,$i,Oh,Gh,zo,Bh,re,Uh,qi,Wh,Rh,Ei,Hh,Vh,ji,Kh,Yh,Fi,Zh,Jh,Mi,Xh,Qh,Pi,eu,tu,Ci,nu,ou,su,Zt,au,Ai,ru,iu,Li,du,lu,cu,Te,pu,Ni,hu,uu,Ii,mu,fu,Di,_u,gu,Si,Tu,ku,xo,vu,bu,Oi,wu,yu,zu,$o,Rl,Za,xu,Hl,qt,Gi,qo,$u,Bi,qu,Eu,ju,Ui,Jt,Fu,Eo,Mu,Pu,jo,Cu,Au,Lu,Wi,Fo,Nu,Ri,Iu,Du,Vl,Ja,Kl,Xt,Fn,Hi,Mo,Su,Vi,Ou,Yl,ft,Gu,Xa,Bu,Uu,Po,Wu,Ru,Co,Hu,Vu,Zl,Ao,Jl,Ue,Ku,Ki,Yu,Zu,Yi,Ju,Xu,Qa,Qu,em,Zi,tm,nm,Xl,er,om,Ql,Lo,ec,tr,tc,Qt,Mn,Ji,No,sm,Xi,am,nc,nr,rm,oc,Pn,Qi,en,im,Io,dm,lm,Do,cm,pm,hm,ed,De,um,So,mm,fm,Oo,_m,gm,Go,Tm,km,Bo,vm,bm,Uo,wm,ym,sc,tn,Cn,td,Wo,zm,nd,xm,ac,vt,Ro,$m,bt,qm,or,Em,jm,sr,Fm,Mm,Ho,Pm,Cm,Am,nn,Lm,ar,Nm,Im,rr,Dm,Sm,rc,on,An,od,Vo,Om,sd,Gm,ic,ie,Ko,Bm,Yo,Um,Zo,Wm,Rm,Hm,Jo,Vm,ir,Km,Ym,Zm,Et,Xo,Jm,ad,Xm,Qm,Qo,dr,ef,rd,tf,nf,lr,of,id,sf,af,Ln,es,rf,ts,df,dd,lf,cf,pf,Nn,ns,hf,ld,uf,mf,cd,dc,sn,In,pd,os,ff,hd,_f,lc,Se,ss,gf,an,Tf,ud,kf,vf,as,bf,wf,yf,rs,zf,cr,xf,$f,qf,jt,is,Ef,md,jf,Ff,ds,pr,Mf,fd,Pf,Cf,hr,Af,_d,Lf,Nf,Dn,ls,If,gd,Df,cc,rn,Sn,Td,cs,Sf,kd,Of,pc,J,ps,Gf,vd,Bf,Uf,hs,Wf,us,Rf,Hf,Vf,ms,Kf,ur,Yf,Zf,Jf,fs,Xf,_s,Qf,e_,t_,We,gs,n_,dn,o_,mr,s_,a_,bd,r_,i_,d_,On,l_,wd,c_,p_,Ts,h_,Re,ks,u_,yd,m_,f_,zd,__,g_,xd,T_,k_,vs,v_,_t,bs,b_,$d,w_,y_,qd,z_,x_,ws,hc,ln,Gn,Ed,ys,$_,jd,q_,uc,X,zs,E_,xs,j_,Fd,F_,M_,P_,$s,C_,qs,A_,L_,N_,Es,I_,fr,D_,S_,O_,js,G_,Fs,B_,U_,W_,He,Ms,R_,cn,H_,_r,V_,K_,Md,Y_,Z_,J_,Bn,X_,Pd,Q_,eg,Ps,tg,Ve,Cs,ng,Cd,og,sg,Ad,ag,rg,Ld,ig,dg,As,lg,gt,Ls,cg,Nd,pg,hg,Id,ug,mg,Ns,mc,pn,Un,Dd,Is,fg,Sd,_g,fc,Q,Ds,gg,Od,Tg,kg,Ss,vg,Os,bg,wg,yg,Gs,zg,gr,xg,$g,qg,Bs,Eg,Us,jg,Fg,Mg,Ke,Ws,Pg,hn,Cg,Tr,Ag,Lg,Gd,Ng,Ig,Dg,Wn,Sg,Bd,Og,Gg,Rs,Bg,Ye,Hs,Ug,Ud,Wg,Rg,Wd,Hg,Vg,Rd,Kg,Yg,Vs,Zg,Tt,Ks,Jg,Hd,Xg,Qg,Vd,eT,tT,Ys,_c,un,Rn,Kd,Zs,nT,Yd,oT,gc,de,Js,sT,Zd,aT,rT,Xs,iT,Qs,dT,lT,cT,ea,pT,kr,hT,uT,mT,ta,fT,na,_T,gT,TT,Hn,kT,Ze,oa,vT,mn,bT,vr,wT,yT,Jd,zT,xT,$T,Vn,qT,Xd,ET,jT,sa,Tc,fn,Kn,Qd,aa,FT,el,MT,kc,le,ra,PT,ia,CT,tl,AT,LT,NT,da,IT,la,DT,ST,OT,ca,GT,br,BT,UT,WT,pa,RT,ha,HT,VT,KT,Yn,YT,Je,ua,ZT,_n,JT,wr,XT,QT,nl,ek,tk,nk,Zn,ok,ol,sk,ak,ma,vc,gn,Jn,sl,fa,rk,al,ik,bc,ce,_a,dk,rl,lk,ck,ga,pk,Ta,hk,uk,mk,ka,fk,yr,_k,gk,Tk,va,kk,ba,vk,bk,wk,Xn,yk,Xe,wa,zk,Tn,xk,zr,$k,qk,il,Ek,jk,Fk,Qn,Mk,dl,Pk,Ck,ya,wc,kn,eo,ll,za,Ak,cl,Lk,yc,wt,Qe,xa,Nk,vn,Ik,pl,Dk,Sk,hl,Ok,Gk,Bk,to,Uk,ul,Wk,Rk,$a,Hk,Ft,qa,Vk,ml,Kk,Yk,Ea,Zk,Mt,ja,Jk,fl,Xk,Qk,Fa,zc,bn,no,_l,Ma,ev,gl,tv,xc,yt,et,Pa,nv,wn,ov,Tl,sv,av,kl,rv,iv,dv,oo,lv,vl,cv,pv,Ca,hv,Pt,Aa,uv,bl,mv,fv,La,_v,Ct,Na,gv,wl,Tv,kv,Ia,$c;return z=new $e({}),se=new $e({}),vo=new $e({}),bo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),zo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),$o=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# the following 2 hyperparameters are task-specific
max_source_length = 512
max_target_length = 128

# Suppose we have the following 2 training examples:
input_sequence_1 = "Welcome to NYC"
output_sequence_1 = "Bienvenue \xE0 NYC"

input_sequence_2 = "HuggingFace is a company"
output_sequence_2 = "HuggingFace est une entreprise"

# encode the inputs
task_prefix = "translate English to French: "
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence for sequence in input_sequences],
    padding="longest",
    max_length=max_source_length,
    truncation=True,
    return_tensors="pt",
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding="longest", max_length=max_target_length, truncation=True
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
max_source_length = <span class="hljs-number">512</span>
max_target_length = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    max_length=max_source_length,
    truncation=<span class="hljs-literal">True</span>,
    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
)
labels = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),Mo=new $e({}),Ao=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.,`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),Lo=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left"
tokenizer.pad_token = tokenizer.eos_token  # to avoid an error

task_prefix = "translate English to German: "
sentences = ["The house is wonderful.", "I like to work in NYC."]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.'],`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span>
tokenizer.pad_token = tokenizer.eos_token  <span class="hljs-comment"># to avoid an error</span>

task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),No=new $e({}),Wo=new $e({}),Ro=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/configuration_t5.py#L34",parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Vo=new $e({}),Ko=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5.py#L53",parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}]}}),Xo=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5.py#L223",parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5.py#L163",parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5.py#L201",parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new $e({}),ss=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5_fast.py#L63",parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),is=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5_fast.py#L166",parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/tokenization_t5_fast.py#L192",parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new $e({}),ps=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1264",parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gs=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1340",parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),On=new zt({props:{$$slots:{default:[Iw]},$$scope:{ctx:N}}}),Ts=new R({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ks=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1296",parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),vs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),bs=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1308"}}),ws=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),ys=new $e({}),zs=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1453",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ms=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1534",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new zt({props:{$$slots:{default:[Dw]},$$scope:{ctx:N}}}),Ps=new R({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# training
input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),Cs=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1490",parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),As=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ls=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1503"}}),Ns=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Is=new $e({}),Ds=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1747",parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ws=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1805",parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new zt({props:{$$slots:{default:[Sw]},$$scope:{ctx:N}}}),Rs=new R({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Hs=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1768",parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}]}}),Vs=new R({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map),`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),Ks=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_t5.py#L1779"}}),Ys=new R({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache(),`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),Zs=new $e({}),Js=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1131",parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Hn=new zt({props:{$$slots:{default:[Ow]},$$scope:{ctx:N}}}),oa=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1157",parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vn=new zt({props:{$$slots:{default:[Gw]},$$scope:{ctx:N}}}),sa=new R({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),aa=new $e({}),ra=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1300",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new zt({props:{$$slots:{default:[Bw]},$$scope:{ctx:N}}}),ua=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1355",parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new zt({props:{$$slots:{default:[Uw]},$$scope:{ctx:N}}}),ma=new R({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")

# training
inputs = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="tf").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="tf").input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),fa=new $e({}),_a=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1612",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new zt({props:{$$slots:{default:[Ww]},$$scope:{ctx:N}}}),wa=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_tf_t5.py#L1630",parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new zt({props:{$$slots:{default:[Rw]},$$scope:{ctx:N}}}),ya=new R({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),za=new $e({}),xa=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new zt({props:{$$slots:{default:[Hw]},$$scope:{ctx:N}}}),$a=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),qa=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ea=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ja=new P({props:{name:"decode",anchor:"transformers.FlaxT5PreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L1095",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fa=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ma=new $e({}),Pa=new P({props:{name:"__call__",anchor:"transformers.FlaxT5PreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L952",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5PreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new zt({props:{$$slots:{default:[Vw]},$$scope:{ctx:N}}}),Ca=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Aa=new P({props:{name:"encode",anchor:"transformers.FlaxT5PreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L1037",parametersDescription:[{anchor:"transformers.FlaxT5PreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5PreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),La=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Na=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15794/src/transformers/models/t5/modeling_flax_t5.py#L1463",parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15794/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15794/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_15794/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ia=new R({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=o("meta"),$=d(),b=o("h1"),y=o("a"),x=o("span"),f(z.$$.fragment),w=d(),q=o("span"),qe=r("T5"),oe=d(),E=o("h2"),ee=o("a"),O=o("span"),f(se.$$.fragment),Ee=d(),G=o("span"),je=r("Overview"),ke=d(),B=o("p"),I=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),F=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),C=d(),he=o("p"),K=r("The abstract from the paper is the following:"),ve=d(),ue=o("p"),U=o("em"),Fe=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),be=d(),M=o("p"),Me=r("Tips:"),H=d(),V=o("ul"),me=o("li"),A=o("p"),Pe=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=o("em"),D=r("translate English to German: \u2026"),Ce=r(`,
for summarization: `),W=o("em"),Ae=r("summarize: \u2026"),m=r("."),j=d(),te=o("li"),Oe=o("p"),lt=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),S=d(),Ge=o("li"),ne=o("p"),ct=r("See the "),L=o("a"),Y=r("training"),pt=r(", "),Le=o("a"),Z=r("inference"),ht=r(" and "),Ne=o("a"),Ie=r("scripts"),ut=r(" sections below for all details regarding usage."),Al=d(),Ga=o("p"),yp=r("T5 comes in different sizes:"),Ll=d(),Be=o("ul"),Xr=o("li"),Qr=o("p"),ho=o("a"),zp=r("t5-small"),xp=d(),ei=o("li"),ti=o("p"),uo=o("a"),$p=r("t5-base"),qp=d(),ni=o("li"),oi=o("p"),mo=o("a"),Ep=r("t5-large"),jp=d(),si=o("li"),ai=o("p"),fo=o("a"),Fp=r("t5-3b"),Mp=d(),ri=o("li"),Ba=o("p"),_o=o("a"),Pp=r("t5-11b"),Cp=r("."),Nl=d(),Ua=o("p"),Ap=r("Based on the original T5 model, Google has released some follow-up works:"),Il=d(),xt=o("ul"),ii=o("li"),yn=o("p"),di=o("strong"),Lp=r("T5v1.1"),Np=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Wa=o("a"),Ip=r("here"),Dp=r("."),Sp=d(),li=o("li"),zn=o("p"),ci=o("strong"),Op=r("mT5"),Gp=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ra=o("a"),Bp=r("here"),Up=r("."),Wp=d(),pi=o("li"),xn=o("p"),hi=o("strong"),Rp=r("byT5"),Hp=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ha=o("a"),Vp=r("here"),Kp=r("."),Dl=d(),$n=o("p"),Yp=r("All checkpoints can be found on the "),go=o("a"),Zp=r("hub"),Jp=r("."),Sl=d(),$t=o("p"),Xp=r("This model was contributed by "),To=o("a"),Qp=r("thomwolf"),eh=r(". The original code can be found "),ko=o("a"),th=r("here"),nh=r("."),Ol=d(),Va=o("a"),Gl=d(),Yt=o("h2"),qn=o("a"),ui=o("span"),f(vo.$$.fragment),oh=d(),mi=o("span"),sh=r("Training"),Bl=d(),mt=o("p"),ah=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),fi=o("code"),rh=r("input_ids"),ih=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),_i=o("code"),dh=r("decoder_input_ids"),lh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),gi=o("code"),ch=r("labels"),ph=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Ul=d(),En=o("p"),hh=r("One can use "),Ka=o("a"),uh=r("T5ForConditionalGeneration"),mh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Wl=d(),jn=o("ul"),dt=o("li"),Ti=o("p"),fh=r("Unsupervised denoising training"),_h=d(),_e=o("p"),gh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ki=o("em"),Th=r("a.k.a"),kh=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),vi=o("em"),vh=r("real"),bh=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),bi=o("code"),wh=r("<extra_id_0>"),yh=r(`,
`),wi=o("code"),zh=r("<extra_id_1>"),xh=r(", \u2026 up to "),yi=o("code"),$h=r("<extra_id_99>"),qh=r(`. As a default, 100 sentinel tokens are available in
`),Ya=o("a"),Eh=r("T5Tokenizer"),jh=r("."),Fh=d(),zi=o("p"),Mh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Ph=d(),f(bo.$$.fragment),Ch=d(),wo=o("p"),Ah=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),yo=o("a"),Lh=r("run_t5_mlm_flax.py"),Nh=r(` script in the Examples
directory.`),Ih=d(),ge=o("li"),xi=o("p"),Dh=r("Supervised training"),Sh=d(),$i=o("p"),Oh=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Gh=d(),f(zo.$$.fragment),Bh=d(),re=o("p"),Uh=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),qi=o("code"),Wh=r("input_ids"),Rh=r(` (which are the
`),Ei=o("code"),Hh=r("input_ids"),Vh=r(" of the encoded input sequence) and "),ji=o("code"),Kh=r("labels"),Yh=r(" (which are the "),Fi=o("code"),Zh=r("input_ids"),Jh=r(` of the encoded
target sequence). The model will automatically create the `),Mi=o("code"),Xh=r("decoder_input_ids"),Qh=r(" based on the "),Pi=o("code"),eu=r("labels"),tu=r(`, by
shifting them one position to the right and prepending the `),Ci=o("code"),nu=r("config.decoder_start_token_id"),ou=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),su=d(),Zt=o("p"),au=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ai=o("code"),ru=r("max_source_length"),iu=r(" and "),Li=o("code"),du=r("max_target_length"),lu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),cu=d(),Te=o("p"),pu=r("In addition, we must make sure that padding token id\u2019s of the "),Ni=o("code"),hu=r("labels"),uu=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Ii=o("code"),mu=r("ignore_index"),fu=r(`
of the `),Di=o("code"),_u=r("CrossEntropyLoss"),gu=r(". In Flax, one can use the "),Si=o("code"),Tu=r("decoder_attention_mask"),ku=r(` to ignore padded tokens from
the loss (see the `),xo=o("a"),vu=r("Flax summarization script"),bu=r(` for details). We also pass
`),Oi=o("code"),wu=r("attention_mask"),yu=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),zu=d(),f($o.$$.fragment),Rl=d(),Za=o("p"),xu=r("Additional training tips:"),Hl=d(),qt=o("ul"),Gi=o("li"),qo=o("p"),$u=r("T5 models need a slightly higher learning rate than the default one set in the "),Bi=o("code"),qu=r("Trainer"),Eu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),ju=d(),Ui=o("li"),Jt=o("p"),Fu=r("According to "),Eo=o("a"),Mu=r("this forum post"),Pu=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),jo=o("a"),Cu=r("paper"),Au=r(` for the task prefixes
used).`),Lu=d(),Wi=o("li"),Fo=o("p"),Nu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Ri=o("em"),Iu=r("pad_to_multiple_of"),Du=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Vl=d(),Ja=o("a"),Kl=d(),Xt=o("h2"),Fn=o("a"),Hi=o("span"),f(Mo.$$.fragment),Su=d(),Vi=o("span"),Ou=r("Inference"),Yl=d(),ft=o("p"),Gu=r("At inference time, it is recommended to use "),Xa=o("a"),Bu=r("generate()"),Uu=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Po=o("a"),Wu=r("this blog post"),Ru=r(` to know all the details about generating text with Transformers.
There\u2019s also `),Co=o("a"),Hu=r("this blog post"),Vu=r(` which explains how
generation works in general in encoder-decoder models.`),Zl=d(),f(Ao.$$.fragment),Jl=d(),Ue=o("p"),Ku=r("Note that T5 uses the "),Ki=o("code"),Yu=r("pad_token_id"),Zu=r(" as the "),Yi=o("code"),Ju=r("decoder_start_token_id"),Xu=r(`, so when doing generation without using
`),Qa=o("a"),Qu=r("generate()"),em=r(", make sure you start it with the "),Zi=o("code"),tm=r("pad_token_id"),nm=r("."),Xl=d(),er=o("p"),om=r("The example above only shows a single example. You can also do batched inference, like so:"),Ql=d(),f(Lo.$$.fragment),ec=d(),tr=o("a"),tc=d(),Qt=o("h2"),Mn=o("a"),Ji=o("span"),f(No.$$.fragment),sm=d(),Xi=o("span"),am=r("Example scripts"),nc=d(),nr=o("p"),rm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),oc=d(),Pn=o("ul"),Qi=o("li"),en=o("p"),im=r("pre-training: the "),Io=o("a"),dm=r("run_t5_mlm_flax.py"),lm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Do=o("a"),cm=r("t5_tokenizer_model.py"),pm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),hm=d(),ed=o("li"),De=o("p"),um=r("fine-tuning: T5 is supported by the official summarization scripts ("),So=o("a"),mm=r("PyTorch"),fm=r(", "),Oo=o("a"),_m=r("Tensorflow"),gm=r(", and "),Go=o("a"),Tm=r("Flax"),km=r(`) and translation scripts
(`),Bo=o("a"),vm=r("PyTorch"),bm=r(" and "),Uo=o("a"),wm=r("Tensorflow"),ym=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),sc=d(),tn=o("h2"),Cn=o("a"),td=o("span"),f(Wo.$$.fragment),zm=d(),nd=o("span"),xm=r("T5Config"),ac=d(),vt=o("div"),f(Ro.$$.fragment),$m=d(),bt=o("p"),qm=r("This is the configuration class to store the configuration of a "),or=o("a"),Em=r("T5Model"),jm=r(" or a "),sr=o("a"),Fm=r("TFT5Model"),Mm=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Ho=o("a"),Pm=r("t5-small"),Cm=r(" architecture."),Am=d(),nn=o("p"),Lm=r("Configuration objects inherit from "),ar=o("a"),Nm=r("PretrainedConfig"),Im=r(` and can be used to control the model outputs. Read the
documentation from `),rr=o("a"),Dm=r("PretrainedConfig"),Sm=r(" for more information."),rc=d(),on=o("h2"),An=o("a"),od=o("span"),f(Vo.$$.fragment),Om=d(),sd=o("span"),Gm=r("T5Tokenizer"),ic=d(),ie=o("div"),f(Ko.$$.fragment),Bm=d(),Yo=o("p"),Um=r("Construct a T5 tokenizer. Based on "),Zo=o("a"),Wm=r("SentencePiece"),Rm=r("."),Hm=d(),Jo=o("p"),Vm=r("This tokenizer inherits from "),ir=o("a"),Km=r("PreTrainedTokenizer"),Ym=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Zm=d(),Et=o("div"),f(Xo.$$.fragment),Jm=d(),ad=o("p"),Xm=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Qm=d(),Qo=o("ul"),dr=o("li"),ef=r("single sequence: "),rd=o("code"),tf=r("X </s>"),nf=d(),lr=o("li"),of=r("pair of sequences: "),id=o("code"),sf=r("A </s> B </s>"),af=d(),Ln=o("div"),f(es.$$.fragment),rf=d(),ts=o("p"),df=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dd=o("code"),lf=r("prepare_for_model"),cf=r(" method."),pf=d(),Nn=o("div"),f(ns.$$.fragment),hf=d(),ld=o("p"),uf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),mf=d(),cd=o("div"),dc=d(),sn=o("h2"),In=o("a"),pd=o("span"),f(os.$$.fragment),ff=d(),hd=o("span"),_f=r("T5TokenizerFast"),lc=d(),Se=o("div"),f(ss.$$.fragment),gf=d(),an=o("p"),Tf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),ud=o("em"),kf=r("tokenizers"),vf=r(` library). Based on
`),as=o("a"),bf=r("Unigram"),wf=r("."),yf=d(),rs=o("p"),zf=r("This tokenizer inherits from "),cr=o("a"),xf=r("PreTrainedTokenizerFast"),$f=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qf=d(),jt=o("div"),f(is.$$.fragment),Ef=d(),md=o("p"),jf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Ff=d(),ds=o("ul"),pr=o("li"),Mf=r("single sequence: "),fd=o("code"),Pf=r("X </s>"),Cf=d(),hr=o("li"),Af=r("pair of sequences: "),_d=o("code"),Lf=r("A </s> B </s>"),Nf=d(),Dn=o("div"),f(ls.$$.fragment),If=d(),gd=o("p"),Df=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),cc=d(),rn=o("h2"),Sn=o("a"),Td=o("span"),f(cs.$$.fragment),Sf=d(),kd=o("span"),Of=r("T5Model"),pc=d(),J=o("div"),f(ps.$$.fragment),Gf=d(),vd=o("p"),Bf=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Uf=d(),hs=o("p"),Wf=r("The T5 model was proposed in "),us=o("a"),Rf=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Hf=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Vf=d(),ms=o("p"),Kf=r("This model inherits from "),ur=o("a"),Yf=r("PreTrainedModel"),Zf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jf=d(),fs=o("p"),Xf=r("This model is also a PyTorch "),_s=o("a"),Qf=r("torch.nn.Module"),e_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=d(),We=o("div"),f(gs.$$.fragment),n_=d(),dn=o("p"),o_=r("The "),mr=o("a"),s_=r("T5Model"),a_=r(" forward method, overrides the "),bd=o("code"),r_=r("__call__"),i_=r(" special method."),d_=d(),f(On.$$.fragment),l_=d(),wd=o("p"),c_=r("Example:"),p_=d(),f(Ts.$$.fragment),h_=d(),Re=o("div"),f(ks.$$.fragment),u_=d(),yd=o("p"),m_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),f_=d(),zd=o("p"),__=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),g_=d(),xd=o("p"),T_=r("Example:"),k_=d(),f(vs.$$.fragment),v_=d(),_t=o("div"),f(bs.$$.fragment),b_=d(),$d=o("p"),w_=r("Moves the model to cpu from a model parallel state."),y_=d(),qd=o("p"),z_=r("Example:"),x_=d(),f(ws.$$.fragment),hc=d(),ln=o("h2"),Gn=o("a"),Ed=o("span"),f(ys.$$.fragment),$_=d(),jd=o("span"),q_=r("T5ForConditionalGeneration"),uc=d(),X=o("div"),f(zs.$$.fragment),E_=d(),xs=o("p"),j_=r("T5 Model with a "),Fd=o("code"),F_=r("language modeling"),M_=r(" head on top."),P_=d(),$s=o("p"),C_=r("The T5 model was proposed in "),qs=o("a"),A_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),L_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),N_=d(),Es=o("p"),I_=r("This model inherits from "),fr=o("a"),D_=r("PreTrainedModel"),S_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O_=d(),js=o("p"),G_=r("This model is also a PyTorch "),Fs=o("a"),B_=r("torch.nn.Module"),U_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),W_=d(),He=o("div"),f(Ms.$$.fragment),R_=d(),cn=o("p"),H_=r("The "),_r=o("a"),V_=r("T5ForConditionalGeneration"),K_=r(" forward method, overrides the "),Md=o("code"),Y_=r("__call__"),Z_=r(" special method."),J_=d(),f(Bn.$$.fragment),X_=d(),Pd=o("p"),Q_=r("Examples:"),eg=d(),f(Ps.$$.fragment),tg=d(),Ve=o("div"),f(Cs.$$.fragment),ng=d(),Cd=o("p"),og=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),sg=d(),Ad=o("p"),ag=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),rg=d(),Ld=o("p"),ig=r("Example:"),dg=d(),f(As.$$.fragment),lg=d(),gt=o("div"),f(Ls.$$.fragment),cg=d(),Nd=o("p"),pg=r("Moves the model to cpu from a model parallel state."),hg=d(),Id=o("p"),ug=r("Example:"),mg=d(),f(Ns.$$.fragment),mc=d(),pn=o("h2"),Un=o("a"),Dd=o("span"),f(Is.$$.fragment),fg=d(),Sd=o("span"),_g=r("T5EncoderModel"),fc=d(),Q=o("div"),f(Ds.$$.fragment),gg=d(),Od=o("p"),Tg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),kg=d(),Ss=o("p"),vg=r("The T5 model was proposed in "),Os=o("a"),bg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),wg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),yg=d(),Gs=o("p"),zg=r("This model inherits from "),gr=o("a"),xg=r("PreTrainedModel"),$g=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg=d(),Bs=o("p"),Eg=r("This model is also a PyTorch "),Us=o("a"),jg=r("torch.nn.Module"),Fg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mg=d(),Ke=o("div"),f(Ws.$$.fragment),Pg=d(),hn=o("p"),Cg=r("The "),Tr=o("a"),Ag=r("T5EncoderModel"),Lg=r(" forward method, overrides the "),Gd=o("code"),Ng=r("__call__"),Ig=r(" special method."),Dg=d(),f(Wn.$$.fragment),Sg=d(),Bd=o("p"),Og=r("Example:"),Gg=d(),f(Rs.$$.fragment),Bg=d(),Ye=o("div"),f(Hs.$$.fragment),Ug=d(),Ud=o("p"),Wg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Rg=d(),Wd=o("p"),Hg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Vg=d(),Rd=o("p"),Kg=r("Example:"),Yg=d(),f(Vs.$$.fragment),Zg=d(),Tt=o("div"),f(Ks.$$.fragment),Jg=d(),Hd=o("p"),Xg=r("Moves the model to cpu from a model parallel state."),Qg=d(),Vd=o("p"),eT=r("Example:"),tT=d(),f(Ys.$$.fragment),_c=d(),un=o("h2"),Rn=o("a"),Kd=o("span"),f(Zs.$$.fragment),nT=d(),Yd=o("span"),oT=r("TFT5Model"),gc=d(),de=o("div"),f(Js.$$.fragment),sT=d(),Zd=o("p"),aT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),rT=d(),Xs=o("p"),iT=r("The T5 model was proposed in "),Qs=o("a"),dT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),lT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),cT=d(),ea=o("p"),pT=r("This model inherits from "),kr=o("a"),hT=r("TFPreTrainedModel"),uT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT=d(),ta=o("p"),fT=r("This model is also a "),na=o("a"),_T=r("tf.keras.Model"),gT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),TT=d(),f(Hn.$$.fragment),kT=d(),Ze=o("div"),f(oa.$$.fragment),vT=d(),mn=o("p"),bT=r("The "),vr=o("a"),wT=r("TFT5Model"),yT=r(" forward method, overrides the "),Jd=o("code"),zT=r("__call__"),xT=r(" special method."),$T=d(),f(Vn.$$.fragment),qT=d(),Xd=o("p"),ET=r("Examples:"),jT=d(),f(sa.$$.fragment),Tc=d(),fn=o("h2"),Kn=o("a"),Qd=o("span"),f(aa.$$.fragment),FT=d(),el=o("span"),MT=r("TFT5ForConditionalGeneration"),kc=d(),le=o("div"),f(ra.$$.fragment),PT=d(),ia=o("p"),CT=r("T5 Model with a "),tl=o("code"),AT=r("language modeling"),LT=r(" head on top."),NT=d(),da=o("p"),IT=r("The T5 model was proposed in "),la=o("a"),DT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ST=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),OT=d(),ca=o("p"),GT=r("This model inherits from "),br=o("a"),BT=r("TFPreTrainedModel"),UT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),WT=d(),pa=o("p"),RT=r("This model is also a "),ha=o("a"),HT=r("tf.keras.Model"),VT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT=d(),f(Yn.$$.fragment),YT=d(),Je=o("div"),f(ua.$$.fragment),ZT=d(),_n=o("p"),JT=r("The "),wr=o("a"),XT=r("TFT5ForConditionalGeneration"),QT=r(" forward method, overrides the "),nl=o("code"),ek=r("__call__"),tk=r(" special method."),nk=d(),f(Zn.$$.fragment),ok=d(),ol=o("p"),sk=r("Examples:"),ak=d(),f(ma.$$.fragment),vc=d(),gn=o("h2"),Jn=o("a"),sl=o("span"),f(fa.$$.fragment),rk=d(),al=o("span"),ik=r("TFT5EncoderModel"),bc=d(),ce=o("div"),f(_a.$$.fragment),dk=d(),rl=o("p"),lk=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),ck=d(),ga=o("p"),pk=r("The T5 model was proposed in "),Ta=o("a"),hk=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),uk=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),mk=d(),ka=o("p"),fk=r("This model inherits from "),yr=o("a"),_k=r("TFPreTrainedModel"),gk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tk=d(),va=o("p"),kk=r("This model is also a "),ba=o("a"),vk=r("tf.keras.Model"),bk=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wk=d(),f(Xn.$$.fragment),yk=d(),Xe=o("div"),f(wa.$$.fragment),zk=d(),Tn=o("p"),xk=r("The "),zr=o("a"),$k=r("TFT5EncoderModel"),qk=r(" forward method, overrides the "),il=o("code"),Ek=r("__call__"),jk=r(" special method."),Fk=d(),f(Qn.$$.fragment),Mk=d(),dl=o("p"),Pk=r("Examples:"),Ck=d(),f(ya.$$.fragment),wc=d(),kn=o("h2"),eo=o("a"),ll=o("span"),f(za.$$.fragment),Ak=d(),cl=o("span"),Lk=r("FlaxT5Model"),yc=d(),wt=o("div"),Qe=o("div"),f(xa.$$.fragment),Nk=d(),vn=o("p"),Ik=r("The "),pl=o("code"),Dk=r("FlaxT5PreTrainedModel"),Sk=r("forward method, overrides the "),hl=o("code"),Ok=r("__call__"),Gk=r(" special method."),Bk=d(),f(to.$$.fragment),Uk=d(),ul=o("p"),Wk=r("Example:"),Rk=d(),f($a.$$.fragment),Hk=d(),Ft=o("div"),f(qa.$$.fragment),Vk=d(),ml=o("p"),Kk=r("Example:"),Yk=d(),f(Ea.$$.fragment),Zk=d(),Mt=o("div"),f(ja.$$.fragment),Jk=d(),fl=o("p"),Xk=r("Example:"),Qk=d(),f(Fa.$$.fragment),zc=d(),bn=o("h2"),no=o("a"),_l=o("span"),f(Ma.$$.fragment),ev=d(),gl=o("span"),tv=r("FlaxT5ForConditionalGeneration"),xc=d(),yt=o("div"),et=o("div"),f(Pa.$$.fragment),nv=d(),wn=o("p"),ov=r("The "),Tl=o("code"),sv=r("FlaxT5PreTrainedModel"),av=r("forward method, overrides the "),kl=o("code"),rv=r("__call__"),iv=r(" special method."),dv=d(),f(oo.$$.fragment),lv=d(),vl=o("p"),cv=r("Example:"),pv=d(),f(Ca.$$.fragment),hv=d(),Pt=o("div"),f(Aa.$$.fragment),uv=d(),bl=o("p"),mv=r("Example:"),fv=d(),f(La.$$.fragment),_v=d(),Ct=o("div"),f(Na.$$.fragment),gv=d(),wl=o("p"),Tv=r("Example:"),kv=d(),f(Ia.$$.fragment),this.h()},l(n){const h=Nw('[data-svelte="svelte-1phssyn"]',document.head);u=s(h,"META",{name:!0,content:!0}),h.forEach(t),$=l(n),b=s(n,"H1",{class:!0});var Da=a(b);y=s(Da,"A",{id:!0,class:!0,href:!0});var yl=a(y);x=s(yl,"SPAN",{});var zl=a(x);_(z.$$.fragment,zl),zl.forEach(t),yl.forEach(t),w=l(Da),q=s(Da,"SPAN",{});var xl=a(q);qe=i(xl,"T5"),xl.forEach(t),Da.forEach(t),oe=l(n),E=s(n,"H2",{class:!0});var Sa=a(E);ee=s(Sa,"A",{id:!0,class:!0,href:!0});var $l=a(ee);O=s($l,"SPAN",{});var ql=a(O);_(se.$$.fragment,ql),ql.forEach(t),$l.forEach(t),Ee=l(Sa),G=s(Sa,"SPAN",{});var El=a(G);je=i(El,"Overview"),El.forEach(t),Sa.forEach(t),ke=l(n),B=s(n,"P",{});var Oa=a(B);I=i(Oa,"The T5 model was presented in "),ae=s(Oa,"A",{href:!0,rel:!0});var jl=a(ae);pe=i(jl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),jl.forEach(t),F=i(Oa,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Oa.forEach(t),C=l(n),he=s(n,"P",{});var Fl=a(he);K=i(Fl,"The abstract from the paper is the following:"),Fl.forEach(t),ve=l(n),ue=s(n,"P",{});var xv=a(ue);U=s(xv,"EM",{});var $v=a(U);Fe=i($v,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),$v.forEach(t),xv.forEach(t),be=l(n),M=s(n,"P",{});var qv=a(M);Me=i(qv,"Tips:"),qv.forEach(t),H=l(n),V=s(n,"UL",{});var xr=a(V);me=s(xr,"LI",{});var Ev=a(me);A=s(Ev,"P",{});var $r=a(A);Pe=i($r,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),fe=s($r,"EM",{});var jv=a(fe);D=i(jv,"translate English to German: \u2026"),jv.forEach(t),Ce=i($r,`,
for summarization: `),W=s($r,"EM",{});var Fv=a(W);Ae=i(Fv,"summarize: \u2026"),Fv.forEach(t),m=i($r,"."),$r.forEach(t),Ev.forEach(t),j=l(xr),te=s(xr,"LI",{});var Mv=a(te);Oe=s(Mv,"P",{});var Pv=a(Oe);lt=i(Pv,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Pv.forEach(t),Mv.forEach(t),S=l(xr),Ge=s(xr,"LI",{});var Cv=a(Ge);ne=s(Cv,"P",{});var so=a(ne);ct=i(so,"See the "),L=s(so,"A",{href:!0});var Av=a(L);Y=i(Av,"training"),Av.forEach(t),pt=i(so,", "),Le=s(so,"A",{href:!0});var Lv=a(Le);Z=i(Lv,"inference"),Lv.forEach(t),ht=i(so," and "),Ne=s(so,"A",{href:!0});var Nv=a(Ne);Ie=i(Nv,"scripts"),Nv.forEach(t),ut=i(so," sections below for all details regarding usage."),so.forEach(t),Cv.forEach(t),xr.forEach(t),Al=l(n),Ga=s(n,"P",{});var Iv=a(Ga);yp=i(Iv,"T5 comes in different sizes:"),Iv.forEach(t),Ll=l(n),Be=s(n,"UL",{});var At=a(Be);Xr=s(At,"LI",{});var Dv=a(Xr);Qr=s(Dv,"P",{});var Sv=a(Qr);ho=s(Sv,"A",{href:!0,rel:!0});var Ov=a(ho);zp=i(Ov,"t5-small"),Ov.forEach(t),Sv.forEach(t),Dv.forEach(t),xp=l(At),ei=s(At,"LI",{});var Gv=a(ei);ti=s(Gv,"P",{});var Bv=a(ti);uo=s(Bv,"A",{href:!0,rel:!0});var Uv=a(uo);$p=i(Uv,"t5-base"),Uv.forEach(t),Bv.forEach(t),Gv.forEach(t),qp=l(At),ni=s(At,"LI",{});var Wv=a(ni);oi=s(Wv,"P",{});var Rv=a(oi);mo=s(Rv,"A",{href:!0,rel:!0});var Hv=a(mo);Ep=i(Hv,"t5-large"),Hv.forEach(t),Rv.forEach(t),Wv.forEach(t),jp=l(At),si=s(At,"LI",{});var Vv=a(si);ai=s(Vv,"P",{});var Kv=a(ai);fo=s(Kv,"A",{href:!0,rel:!0});var Yv=a(fo);Fp=i(Yv,"t5-3b"),Yv.forEach(t),Kv.forEach(t),Vv.forEach(t),Mp=l(At),ri=s(At,"LI",{});var Zv=a(ri);Ba=s(Zv,"P",{});var vv=a(Ba);_o=s(vv,"A",{href:!0,rel:!0});var Jv=a(_o);Pp=i(Jv,"t5-11b"),Jv.forEach(t),Cp=i(vv,"."),vv.forEach(t),Zv.forEach(t),At.forEach(t),Nl=l(n),Ua=s(n,"P",{});var Xv=a(Ua);Ap=i(Xv,"Based on the original T5 model, Google has released some follow-up works:"),Xv.forEach(t),Il=l(n),xt=s(n,"UL",{});var qr=a(xt);ii=s(qr,"LI",{});var Qv=a(ii);yn=s(Qv,"P",{});var Ml=a(yn);di=s(Ml,"STRONG",{});var e5=a(di);Lp=i(e5,"T5v1.1"),e5.forEach(t),Np=i(Ml,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Wa=s(Ml,"A",{href:!0});var t5=a(Wa);Ip=i(t5,"here"),t5.forEach(t),Dp=i(Ml,"."),Ml.forEach(t),Qv.forEach(t),Sp=l(qr),li=s(qr,"LI",{});var n5=a(li);zn=s(n5,"P",{});var Pl=a(zn);ci=s(Pl,"STRONG",{});var o5=a(ci);Op=i(o5,"mT5"),o5.forEach(t),Gp=i(Pl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Ra=s(Pl,"A",{href:!0});var s5=a(Ra);Bp=i(s5,"here"),s5.forEach(t),Up=i(Pl,"."),Pl.forEach(t),n5.forEach(t),Wp=l(qr),pi=s(qr,"LI",{});var a5=a(pi);xn=s(a5,"P",{});var Cl=a(xn);hi=s(Cl,"STRONG",{});var r5=a(hi);Rp=i(r5,"byT5"),r5.forEach(t),Hp=i(Cl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Ha=s(Cl,"A",{href:!0});var i5=a(Ha);Vp=i(i5,"here"),i5.forEach(t),Kp=i(Cl,"."),Cl.forEach(t),a5.forEach(t),qr.forEach(t),Dl=l(n),$n=s(n,"P",{});var qc=a($n);Yp=i(qc,"All checkpoints can be found on the "),go=s(qc,"A",{href:!0,rel:!0});var d5=a(go);Zp=i(d5,"hub"),d5.forEach(t),Jp=i(qc,"."),qc.forEach(t),Sl=l(n),$t=s(n,"P",{});var Er=a($t);Xp=i(Er,"This model was contributed by "),To=s(Er,"A",{href:!0,rel:!0});var l5=a(To);Qp=i(l5,"thomwolf"),l5.forEach(t),eh=i(Er,". The original code can be found "),ko=s(Er,"A",{href:!0,rel:!0});var c5=a(ko);th=i(c5,"here"),c5.forEach(t),nh=i(Er,"."),Er.forEach(t),Ol=l(n),Va=s(n,"A",{id:!0}),a(Va).forEach(t),Gl=l(n),Yt=s(n,"H2",{class:!0});var Ec=a(Yt);qn=s(Ec,"A",{id:!0,class:!0,href:!0});var p5=a(qn);ui=s(p5,"SPAN",{});var h5=a(ui);_(vo.$$.fragment,h5),h5.forEach(t),p5.forEach(t),oh=l(Ec),mi=s(Ec,"SPAN",{});var u5=a(mi);sh=i(u5,"Training"),u5.forEach(t),Ec.forEach(t),Bl=l(n),mt=s(n,"P",{});var ao=a(mt);ah=i(ao,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),fi=s(ao,"CODE",{});var m5=a(fi);rh=i(m5,"input_ids"),m5.forEach(t),ih=i(ao,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),_i=s(ao,"CODE",{});var f5=a(_i);dh=i(f5,"decoder_input_ids"),f5.forEach(t),lh=i(ao,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),gi=s(ao,"CODE",{});var _5=a(gi);ch=i(_5,"labels"),_5.forEach(t),ph=i(ao,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ao.forEach(t),Ul=l(n),En=s(n,"P",{});var jc=a(En);hh=i(jc,"One can use "),Ka=s(jc,"A",{href:!0});var g5=a(Ka);uh=i(g5,"T5ForConditionalGeneration"),g5.forEach(t),mh=i(jc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),jc.forEach(t),Wl=l(n),jn=s(n,"UL",{});var Fc=a(jn);dt=s(Fc,"LI",{});var Lt=a(dt);Ti=s(Lt,"P",{});var T5=a(Ti);fh=i(T5,"Unsupervised denoising training"),T5.forEach(t),_h=l(Lt),_e=s(Lt,"P",{});var tt=a(_e);gh=i(tt,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ki=s(tt,"EM",{});var k5=a(ki);Th=i(k5,"a.k.a"),k5.forEach(t),kh=i(tt,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),vi=s(tt,"EM",{});var v5=a(vi);vh=i(v5,"real"),v5.forEach(t),bh=i(tt,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),bi=s(tt,"CODE",{});var b5=a(bi);wh=i(b5,"<extra_id_0>"),b5.forEach(t),yh=i(tt,`,
`),wi=s(tt,"CODE",{});var w5=a(wi);zh=i(w5,"<extra_id_1>"),w5.forEach(t),xh=i(tt,", \u2026 up to "),yi=s(tt,"CODE",{});var y5=a(yi);$h=i(y5,"<extra_id_99>"),y5.forEach(t),qh=i(tt,`. As a default, 100 sentinel tokens are available in
`),Ya=s(tt,"A",{href:!0});var z5=a(Ya);Eh=i(z5,"T5Tokenizer"),z5.forEach(t),jh=i(tt,"."),tt.forEach(t),Fh=l(Lt),zi=s(Lt,"P",{});var x5=a(zi);Mh=i(x5,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),x5.forEach(t),Ph=l(Lt),_(bo.$$.fragment,Lt),Ch=l(Lt),wo=s(Lt,"P",{});var Mc=a(wo);Ah=i(Mc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),yo=s(Mc,"A",{href:!0,rel:!0});var $5=a(yo);Lh=i($5,"run_t5_mlm_flax.py"),$5.forEach(t),Nh=i(Mc,` script in the Examples
directory.`),Mc.forEach(t),Lt.forEach(t),Ih=l(Fc),ge=s(Fc,"LI",{});var nt=a(ge);xi=s(nt,"P",{});var q5=a(xi);Dh=i(q5,"Supervised training"),q5.forEach(t),Sh=l(nt),$i=s(nt,"P",{});var E5=a($i);Oh=i(E5,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),E5.forEach(t),Gh=l(nt),_(zo.$$.fragment,nt),Bh=l(nt),re=s(nt,"P",{});var we=a(re);Uh=i(we,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),qi=s(we,"CODE",{});var j5=a(qi);Wh=i(j5,"input_ids"),j5.forEach(t),Rh=i(we,` (which are the
`),Ei=s(we,"CODE",{});var F5=a(Ei);Hh=i(F5,"input_ids"),F5.forEach(t),Vh=i(we," of the encoded input sequence) and "),ji=s(we,"CODE",{});var M5=a(ji);Kh=i(M5,"labels"),M5.forEach(t),Yh=i(we," (which are the "),Fi=s(we,"CODE",{});var P5=a(Fi);Zh=i(P5,"input_ids"),P5.forEach(t),Jh=i(we,` of the encoded
target sequence). The model will automatically create the `),Mi=s(we,"CODE",{});var C5=a(Mi);Xh=i(C5,"decoder_input_ids"),C5.forEach(t),Qh=i(we," based on the "),Pi=s(we,"CODE",{});var A5=a(Pi);eu=i(A5,"labels"),A5.forEach(t),tu=i(we,`, by
shifting them one position to the right and prepending the `),Ci=s(we,"CODE",{});var L5=a(Ci);nu=i(L5,"config.decoder_start_token_id"),L5.forEach(t),ou=i(we,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),we.forEach(t),su=l(nt),Zt=s(nt,"P",{});var jr=a(Zt);au=i(jr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ai=s(jr,"CODE",{});var N5=a(Ai);ru=i(N5,"max_source_length"),N5.forEach(t),iu=i(jr," and "),Li=s(jr,"CODE",{});var I5=a(Li);du=i(I5,"max_target_length"),I5.forEach(t),lu=i(jr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),jr.forEach(t),cu=l(nt),Te=s(nt,"P",{});var ot=a(Te);pu=i(ot,"In addition, we must make sure that padding token id\u2019s of the "),Ni=s(ot,"CODE",{});var D5=a(Ni);hu=i(D5,"labels"),D5.forEach(t),uu=i(ot,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Ii=s(ot,"CODE",{});var S5=a(Ii);mu=i(S5,"ignore_index"),S5.forEach(t),fu=i(ot,`
of the `),Di=s(ot,"CODE",{});var O5=a(Di);_u=i(O5,"CrossEntropyLoss"),O5.forEach(t),gu=i(ot,". In Flax, one can use the "),Si=s(ot,"CODE",{});var G5=a(Si);Tu=i(G5,"decoder_attention_mask"),G5.forEach(t),ku=i(ot,` to ignore padded tokens from
the loss (see the `),xo=s(ot,"A",{href:!0,rel:!0});var B5=a(xo);vu=i(B5,"Flax summarization script"),B5.forEach(t),bu=i(ot,` for details). We also pass
`),Oi=s(ot,"CODE",{});var U5=a(Oi);wu=i(U5,"attention_mask"),U5.forEach(t),yu=i(ot,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),ot.forEach(t),zu=l(nt),_($o.$$.fragment,nt),nt.forEach(t),Fc.forEach(t),Rl=l(n),Za=s(n,"P",{});var W5=a(Za);xu=i(W5,"Additional training tips:"),W5.forEach(t),Hl=l(n),qt=s(n,"UL",{});var Fr=a(qt);Gi=s(Fr,"LI",{});var R5=a(Gi);qo=s(R5,"P",{});var Pc=a(qo);$u=i(Pc,"T5 models need a slightly higher learning rate than the default one set in the "),Bi=s(Pc,"CODE",{});var H5=a(Bi);qu=i(H5,"Trainer"),H5.forEach(t),Eu=i(Pc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Pc.forEach(t),R5.forEach(t),ju=l(Fr),Ui=s(Fr,"LI",{});var V5=a(Ui);Jt=s(V5,"P",{});var Mr=a(Jt);Fu=i(Mr,"According to "),Eo=s(Mr,"A",{href:!0,rel:!0});var K5=a(Eo);Mu=i(K5,"this forum post"),K5.forEach(t),Pu=i(Mr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),jo=s(Mr,"A",{href:!0,rel:!0});var Y5=a(jo);Cu=i(Y5,"paper"),Y5.forEach(t),Au=i(Mr,` for the task prefixes
used).`),Mr.forEach(t),V5.forEach(t),Lu=l(Fr),Wi=s(Fr,"LI",{});var Z5=a(Wi);Fo=s(Z5,"P",{});var Cc=a(Fo);Nu=i(Cc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Ri=s(Cc,"EM",{});var J5=a(Ri);Iu=i(J5,"pad_to_multiple_of"),J5.forEach(t),Du=i(Cc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Cc.forEach(t),Z5.forEach(t),Fr.forEach(t),Vl=l(n),Ja=s(n,"A",{id:!0}),a(Ja).forEach(t),Kl=l(n),Xt=s(n,"H2",{class:!0});var Ac=a(Xt);Fn=s(Ac,"A",{id:!0,class:!0,href:!0});var X5=a(Fn);Hi=s(X5,"SPAN",{});var Q5=a(Hi);_(Mo.$$.fragment,Q5),Q5.forEach(t),X5.forEach(t),Su=l(Ac),Vi=s(Ac,"SPAN",{});var eb=a(Vi);Ou=i(eb,"Inference"),eb.forEach(t),Ac.forEach(t),Yl=l(n),ft=s(n,"P",{});var ro=a(ft);Gu=i(ro,"At inference time, it is recommended to use "),Xa=s(ro,"A",{href:!0});var tb=a(Xa);Bu=i(tb,"generate()"),tb.forEach(t),Uu=i(ro,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Po=s(ro,"A",{href:!0,rel:!0});var nb=a(Po);Wu=i(nb,"this blog post"),nb.forEach(t),Ru=i(ro,` to know all the details about generating text with Transformers.
There\u2019s also `),Co=s(ro,"A",{href:!0,rel:!0});var ob=a(Co);Hu=i(ob,"this blog post"),ob.forEach(t),Vu=i(ro,` which explains how
generation works in general in encoder-decoder models.`),ro.forEach(t),Zl=l(n),_(Ao.$$.fragment,n),Jl=l(n),Ue=s(n,"P",{});var Nt=a(Ue);Ku=i(Nt,"Note that T5 uses the "),Ki=s(Nt,"CODE",{});var sb=a(Ki);Yu=i(sb,"pad_token_id"),sb.forEach(t),Zu=i(Nt," as the "),Yi=s(Nt,"CODE",{});var ab=a(Yi);Ju=i(ab,"decoder_start_token_id"),ab.forEach(t),Xu=i(Nt,`, so when doing generation without using
`),Qa=s(Nt,"A",{href:!0});var rb=a(Qa);Qu=i(rb,"generate()"),rb.forEach(t),em=i(Nt,", make sure you start it with the "),Zi=s(Nt,"CODE",{});var ib=a(Zi);tm=i(ib,"pad_token_id"),ib.forEach(t),nm=i(Nt,"."),Nt.forEach(t),Xl=l(n),er=s(n,"P",{});var db=a(er);om=i(db,"The example above only shows a single example. You can also do batched inference, like so:"),db.forEach(t),Ql=l(n),_(Lo.$$.fragment,n),ec=l(n),tr=s(n,"A",{id:!0}),a(tr).forEach(t),tc=l(n),Qt=s(n,"H2",{class:!0});var Lc=a(Qt);Mn=s(Lc,"A",{id:!0,class:!0,href:!0});var lb=a(Mn);Ji=s(lb,"SPAN",{});var cb=a(Ji);_(No.$$.fragment,cb),cb.forEach(t),lb.forEach(t),sm=l(Lc),Xi=s(Lc,"SPAN",{});var pb=a(Xi);am=i(pb,"Example scripts"),pb.forEach(t),Lc.forEach(t),nc=l(n),nr=s(n,"P",{});var hb=a(nr);rm=i(hb,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),hb.forEach(t),oc=l(n),Pn=s(n,"UL",{});var Nc=a(Pn);Qi=s(Nc,"LI",{});var ub=a(Qi);en=s(ub,"P",{});var Pr=a(en);im=i(Pr,"pre-training: the "),Io=s(Pr,"A",{href:!0,rel:!0});var mb=a(Io);dm=i(mb,"run_t5_mlm_flax.py"),mb.forEach(t),lm=i(Pr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Do=s(Pr,"A",{href:!0,rel:!0});var fb=a(Do);cm=i(fb,"t5_tokenizer_model.py"),fb.forEach(t),pm=i(Pr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Pr.forEach(t),ub.forEach(t),hm=l(Nc),ed=s(Nc,"LI",{});var _b=a(ed);De=s(_b,"P",{});var kt=a(De);um=i(kt,"fine-tuning: T5 is supported by the official summarization scripts ("),So=s(kt,"A",{href:!0,rel:!0});var gb=a(So);mm=i(gb,"PyTorch"),gb.forEach(t),fm=i(kt,", "),Oo=s(kt,"A",{href:!0,rel:!0});var Tb=a(Oo);_m=i(Tb,"Tensorflow"),Tb.forEach(t),gm=i(kt,", and "),Go=s(kt,"A",{href:!0,rel:!0});var kb=a(Go);Tm=i(kb,"Flax"),kb.forEach(t),km=i(kt,`) and translation scripts
(`),Bo=s(kt,"A",{href:!0,rel:!0});var vb=a(Bo);vm=i(vb,"PyTorch"),vb.forEach(t),bm=i(kt," and "),Uo=s(kt,"A",{href:!0,rel:!0});var bb=a(Uo);wm=i(bb,"Tensorflow"),bb.forEach(t),ym=i(kt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),kt.forEach(t),_b.forEach(t),Nc.forEach(t),sc=l(n),tn=s(n,"H2",{class:!0});var Ic=a(tn);Cn=s(Ic,"A",{id:!0,class:!0,href:!0});var wb=a(Cn);td=s(wb,"SPAN",{});var yb=a(td);_(Wo.$$.fragment,yb),yb.forEach(t),wb.forEach(t),zm=l(Ic),nd=s(Ic,"SPAN",{});var zb=a(nd);xm=i(zb,"T5Config"),zb.forEach(t),Ic.forEach(t),ac=l(n),vt=s(n,"DIV",{class:!0});var Cr=a(vt);_(Ro.$$.fragment,Cr),$m=l(Cr),bt=s(Cr,"P",{});var io=a(bt);qm=i(io,"This is the configuration class to store the configuration of a "),or=s(io,"A",{href:!0});var xb=a(or);Em=i(xb,"T5Model"),xb.forEach(t),jm=i(io," or a "),sr=s(io,"A",{href:!0});var $b=a(sr);Fm=i($b,"TFT5Model"),$b.forEach(t),Mm=i(io,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),Ho=s(io,"A",{href:!0,rel:!0});var qb=a(Ho);Pm=i(qb,"t5-small"),qb.forEach(t),Cm=i(io," architecture."),io.forEach(t),Am=l(Cr),nn=s(Cr,"P",{});var Ar=a(nn);Lm=i(Ar,"Configuration objects inherit from "),ar=s(Ar,"A",{href:!0});var Eb=a(ar);Nm=i(Eb,"PretrainedConfig"),Eb.forEach(t),Im=i(Ar,` and can be used to control the model outputs. Read the
documentation from `),rr=s(Ar,"A",{href:!0});var jb=a(rr);Dm=i(jb,"PretrainedConfig"),jb.forEach(t),Sm=i(Ar," for more information."),Ar.forEach(t),Cr.forEach(t),rc=l(n),on=s(n,"H2",{class:!0});var Dc=a(on);An=s(Dc,"A",{id:!0,class:!0,href:!0});var Fb=a(An);od=s(Fb,"SPAN",{});var Mb=a(od);_(Vo.$$.fragment,Mb),Mb.forEach(t),Fb.forEach(t),Om=l(Dc),sd=s(Dc,"SPAN",{});var Pb=a(sd);Gm=i(Pb,"T5Tokenizer"),Pb.forEach(t),Dc.forEach(t),ic=l(n),ie=s(n,"DIV",{class:!0});var st=a(ie);_(Ko.$$.fragment,st),Bm=l(st),Yo=s(st,"P",{});var Sc=a(Yo);Um=i(Sc,"Construct a T5 tokenizer. Based on "),Zo=s(Sc,"A",{href:!0,rel:!0});var Cb=a(Zo);Wm=i(Cb,"SentencePiece"),Cb.forEach(t),Rm=i(Sc,"."),Sc.forEach(t),Hm=l(st),Jo=s(st,"P",{});var Oc=a(Jo);Vm=i(Oc,"This tokenizer inherits from "),ir=s(Oc,"A",{href:!0});var Ab=a(ir);Km=i(Ab,"PreTrainedTokenizer"),Ab.forEach(t),Ym=i(Oc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Oc.forEach(t),Zm=l(st),Et=s(st,"DIV",{class:!0});var Lr=a(Et);_(Xo.$$.fragment,Lr),Jm=l(Lr),ad=s(Lr,"P",{});var Lb=a(ad);Xm=i(Lb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Lb.forEach(t),Qm=l(Lr),Qo=s(Lr,"UL",{});var Gc=a(Qo);dr=s(Gc,"LI",{});var bv=a(dr);ef=i(bv,"single sequence: "),rd=s(bv,"CODE",{});var Nb=a(rd);tf=i(Nb,"X </s>"),Nb.forEach(t),bv.forEach(t),nf=l(Gc),lr=s(Gc,"LI",{});var wv=a(lr);of=i(wv,"pair of sequences: "),id=s(wv,"CODE",{});var Ib=a(id);sf=i(Ib,"A </s> B </s>"),Ib.forEach(t),wv.forEach(t),Gc.forEach(t),Lr.forEach(t),af=l(st),Ln=s(st,"DIV",{class:!0});var Bc=a(Ln);_(es.$$.fragment,Bc),rf=l(Bc),ts=s(Bc,"P",{});var Uc=a(ts);df=i(Uc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dd=s(Uc,"CODE",{});var Db=a(dd);lf=i(Db,"prepare_for_model"),Db.forEach(t),cf=i(Uc," method."),Uc.forEach(t),Bc.forEach(t),pf=l(st),Nn=s(st,"DIV",{class:!0});var Wc=a(Nn);_(ns.$$.fragment,Wc),hf=l(Wc),ld=s(Wc,"P",{});var Sb=a(ld);uf=i(Sb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Sb.forEach(t),Wc.forEach(t),mf=l(st),cd=s(st,"DIV",{class:!0}),a(cd).forEach(t),st.forEach(t),dc=l(n),sn=s(n,"H2",{class:!0});var Rc=a(sn);In=s(Rc,"A",{id:!0,class:!0,href:!0});var Ob=a(In);pd=s(Ob,"SPAN",{});var Gb=a(pd);_(os.$$.fragment,Gb),Gb.forEach(t),Ob.forEach(t),ff=l(Rc),hd=s(Rc,"SPAN",{});var Bb=a(hd);_f=i(Bb,"T5TokenizerFast"),Bb.forEach(t),Rc.forEach(t),lc=l(n),Se=s(n,"DIV",{class:!0});var It=a(Se);_(ss.$$.fragment,It),gf=l(It),an=s(It,"P",{});var Nr=a(an);Tf=i(Nr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),ud=s(Nr,"EM",{});var Ub=a(ud);kf=i(Ub,"tokenizers"),Ub.forEach(t),vf=i(Nr,` library). Based on
`),as=s(Nr,"A",{href:!0,rel:!0});var Wb=a(as);bf=i(Wb,"Unigram"),Wb.forEach(t),wf=i(Nr,"."),Nr.forEach(t),yf=l(It),rs=s(It,"P",{});var Hc=a(rs);zf=i(Hc,"This tokenizer inherits from "),cr=s(Hc,"A",{href:!0});var Rb=a(cr);xf=i(Rb,"PreTrainedTokenizerFast"),Rb.forEach(t),$f=i(Hc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hc.forEach(t),qf=l(It),jt=s(It,"DIV",{class:!0});var Ir=a(jt);_(is.$$.fragment,Ir),Ef=l(Ir),md=s(Ir,"P",{});var Hb=a(md);jf=i(Hb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Hb.forEach(t),Ff=l(Ir),ds=s(Ir,"UL",{});var Vc=a(ds);pr=s(Vc,"LI",{});var yv=a(pr);Mf=i(yv,"single sequence: "),fd=s(yv,"CODE",{});var Vb=a(fd);Pf=i(Vb,"X </s>"),Vb.forEach(t),yv.forEach(t),Cf=l(Vc),hr=s(Vc,"LI",{});var zv=a(hr);Af=i(zv,"pair of sequences: "),_d=s(zv,"CODE",{});var Kb=a(_d);Lf=i(Kb,"A </s> B </s>"),Kb.forEach(t),zv.forEach(t),Vc.forEach(t),Ir.forEach(t),Nf=l(It),Dn=s(It,"DIV",{class:!0});var Kc=a(Dn);_(ls.$$.fragment,Kc),If=l(Kc),gd=s(Kc,"P",{});var Yb=a(gd);Df=i(Yb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Yb.forEach(t),Kc.forEach(t),It.forEach(t),cc=l(n),rn=s(n,"H2",{class:!0});var Yc=a(rn);Sn=s(Yc,"A",{id:!0,class:!0,href:!0});var Zb=a(Sn);Td=s(Zb,"SPAN",{});var Jb=a(Td);_(cs.$$.fragment,Jb),Jb.forEach(t),Zb.forEach(t),Sf=l(Yc),kd=s(Yc,"SPAN",{});var Xb=a(kd);Of=i(Xb,"T5Model"),Xb.forEach(t),Yc.forEach(t),pc=l(n),J=s(n,"DIV",{class:!0});var ye=a(J);_(ps.$$.fragment,ye),Gf=l(ye),vd=s(ye,"P",{});var Qb=a(vd);Bf=i(Qb,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Qb.forEach(t),Uf=l(ye),hs=s(ye,"P",{});var Zc=a(hs);Wf=i(Zc,"The T5 model was proposed in "),us=s(Zc,"A",{href:!0,rel:!0});var e1=a(us);Rf=i(e1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),e1.forEach(t),Hf=i(Zc,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Zc.forEach(t),Vf=l(ye),ms=s(ye,"P",{});var Jc=a(ms);Kf=i(Jc,"This model inherits from "),ur=s(Jc,"A",{href:!0});var t1=a(ur);Yf=i(t1,"PreTrainedModel"),t1.forEach(t),Zf=i(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),Jf=l(ye),fs=s(ye,"P",{});var Xc=a(fs);Xf=i(Xc,"This model is also a PyTorch "),_s=s(Xc,"A",{href:!0,rel:!0});var n1=a(_s);Qf=i(n1,"torch.nn.Module"),n1.forEach(t),e_=i(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(t),t_=l(ye),We=s(ye,"DIV",{class:!0});var Dt=a(We);_(gs.$$.fragment,Dt),n_=l(Dt),dn=s(Dt,"P",{});var Dr=a(dn);o_=i(Dr,"The "),mr=s(Dr,"A",{href:!0});var o1=a(mr);s_=i(o1,"T5Model"),o1.forEach(t),a_=i(Dr," forward method, overrides the "),bd=s(Dr,"CODE",{});var s1=a(bd);r_=i(s1,"__call__"),s1.forEach(t),i_=i(Dr," special method."),Dr.forEach(t),d_=l(Dt),_(On.$$.fragment,Dt),l_=l(Dt),wd=s(Dt,"P",{});var a1=a(wd);c_=i(a1,"Example:"),a1.forEach(t),p_=l(Dt),_(Ts.$$.fragment,Dt),Dt.forEach(t),h_=l(ye),Re=s(ye,"DIV",{class:!0});var St=a(Re);_(ks.$$.fragment,St),u_=l(St),yd=s(St,"P",{});var r1=a(yd);m_=i(r1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),r1.forEach(t),f_=l(St),zd=s(St,"P",{});var i1=a(zd);__=i(i1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),i1.forEach(t),g_=l(St),xd=s(St,"P",{});var d1=a(xd);T_=i(d1,"Example:"),d1.forEach(t),k_=l(St),_(vs.$$.fragment,St),St.forEach(t),v_=l(ye),_t=s(ye,"DIV",{class:!0});var lo=a(_t);_(bs.$$.fragment,lo),b_=l(lo),$d=s(lo,"P",{});var l1=a($d);w_=i(l1,"Moves the model to cpu from a model parallel state."),l1.forEach(t),y_=l(lo),qd=s(lo,"P",{});var c1=a(qd);z_=i(c1,"Example:"),c1.forEach(t),x_=l(lo),_(ws.$$.fragment,lo),lo.forEach(t),ye.forEach(t),hc=l(n),ln=s(n,"H2",{class:!0});var Qc=a(ln);Gn=s(Qc,"A",{id:!0,class:!0,href:!0});var p1=a(Gn);Ed=s(p1,"SPAN",{});var h1=a(Ed);_(ys.$$.fragment,h1),h1.forEach(t),p1.forEach(t),$_=l(Qc),jd=s(Qc,"SPAN",{});var u1=a(jd);q_=i(u1,"T5ForConditionalGeneration"),u1.forEach(t),Qc.forEach(t),uc=l(n),X=s(n,"DIV",{class:!0});var ze=a(X);_(zs.$$.fragment,ze),E_=l(ze),xs=s(ze,"P",{});var ep=a(xs);j_=i(ep,"T5 Model with a "),Fd=s(ep,"CODE",{});var m1=a(Fd);F_=i(m1,"language modeling"),m1.forEach(t),M_=i(ep," head on top."),ep.forEach(t),P_=l(ze),$s=s(ze,"P",{});var tp=a($s);C_=i(tp,"The T5 model was proposed in "),qs=s(tp,"A",{href:!0,rel:!0});var f1=a(qs);A_=i(f1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),f1.forEach(t),L_=i(tp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),tp.forEach(t),N_=l(ze),Es=s(ze,"P",{});var np=a(Es);I_=i(np,"This model inherits from "),fr=s(np,"A",{href:!0});var _1=a(fr);D_=i(_1,"PreTrainedModel"),_1.forEach(t),S_=i(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),O_=l(ze),js=s(ze,"P",{});var op=a(js);G_=i(op,"This model is also a PyTorch "),Fs=s(op,"A",{href:!0,rel:!0});var g1=a(Fs);B_=i(g1,"torch.nn.Module"),g1.forEach(t),U_=i(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(t),W_=l(ze),He=s(ze,"DIV",{class:!0});var Ot=a(He);_(Ms.$$.fragment,Ot),R_=l(Ot),cn=s(Ot,"P",{});var Sr=a(cn);H_=i(Sr,"The "),_r=s(Sr,"A",{href:!0});var T1=a(_r);V_=i(T1,"T5ForConditionalGeneration"),T1.forEach(t),K_=i(Sr," forward method, overrides the "),Md=s(Sr,"CODE",{});var k1=a(Md);Y_=i(k1,"__call__"),k1.forEach(t),Z_=i(Sr," special method."),Sr.forEach(t),J_=l(Ot),_(Bn.$$.fragment,Ot),X_=l(Ot),Pd=s(Ot,"P",{});var v1=a(Pd);Q_=i(v1,"Examples:"),v1.forEach(t),eg=l(Ot),_(Ps.$$.fragment,Ot),Ot.forEach(t),tg=l(ze),Ve=s(ze,"DIV",{class:!0});var Gt=a(Ve);_(Cs.$$.fragment,Gt),ng=l(Gt),Cd=s(Gt,"P",{});var b1=a(Cd);og=i(b1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),b1.forEach(t),sg=l(Gt),Ad=s(Gt,"P",{});var w1=a(Ad);ag=i(w1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),w1.forEach(t),rg=l(Gt),Ld=s(Gt,"P",{});var y1=a(Ld);ig=i(y1,"Example:"),y1.forEach(t),dg=l(Gt),_(As.$$.fragment,Gt),Gt.forEach(t),lg=l(ze),gt=s(ze,"DIV",{class:!0});var co=a(gt);_(Ls.$$.fragment,co),cg=l(co),Nd=s(co,"P",{});var z1=a(Nd);pg=i(z1,"Moves the model to cpu from a model parallel state."),z1.forEach(t),hg=l(co),Id=s(co,"P",{});var x1=a(Id);ug=i(x1,"Example:"),x1.forEach(t),mg=l(co),_(Ns.$$.fragment,co),co.forEach(t),ze.forEach(t),mc=l(n),pn=s(n,"H2",{class:!0});var sp=a(pn);Un=s(sp,"A",{id:!0,class:!0,href:!0});var $1=a(Un);Dd=s($1,"SPAN",{});var q1=a(Dd);_(Is.$$.fragment,q1),q1.forEach(t),$1.forEach(t),fg=l(sp),Sd=s(sp,"SPAN",{});var E1=a(Sd);_g=i(E1,"T5EncoderModel"),E1.forEach(t),sp.forEach(t),fc=l(n),Q=s(n,"DIV",{class:!0});var xe=a(Q);_(Ds.$$.fragment,xe),gg=l(xe),Od=s(xe,"P",{});var j1=a(Od);Tg=i(j1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),j1.forEach(t),kg=l(xe),Ss=s(xe,"P",{});var ap=a(Ss);vg=i(ap,"The T5 model was proposed in "),Os=s(ap,"A",{href:!0,rel:!0});var F1=a(Os);bg=i(F1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),F1.forEach(t),wg=i(ap,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ap.forEach(t),yg=l(xe),Gs=s(xe,"P",{});var rp=a(Gs);zg=i(rp,"This model inherits from "),gr=s(rp,"A",{href:!0});var M1=a(gr);xg=i(M1,"PreTrainedModel"),M1.forEach(t),$g=i(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),qg=l(xe),Bs=s(xe,"P",{});var ip=a(Bs);Eg=i(ip,"This model is also a PyTorch "),Us=s(ip,"A",{href:!0,rel:!0});var P1=a(Us);jg=i(P1,"torch.nn.Module"),P1.forEach(t),Fg=i(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),Mg=l(xe),Ke=s(xe,"DIV",{class:!0});var Bt=a(Ke);_(Ws.$$.fragment,Bt),Pg=l(Bt),hn=s(Bt,"P",{});var Or=a(hn);Cg=i(Or,"The "),Tr=s(Or,"A",{href:!0});var C1=a(Tr);Ag=i(C1,"T5EncoderModel"),C1.forEach(t),Lg=i(Or," forward method, overrides the "),Gd=s(Or,"CODE",{});var A1=a(Gd);Ng=i(A1,"__call__"),A1.forEach(t),Ig=i(Or," special method."),Or.forEach(t),Dg=l(Bt),_(Wn.$$.fragment,Bt),Sg=l(Bt),Bd=s(Bt,"P",{});var L1=a(Bd);Og=i(L1,"Example:"),L1.forEach(t),Gg=l(Bt),_(Rs.$$.fragment,Bt),Bt.forEach(t),Bg=l(xe),Ye=s(xe,"DIV",{class:!0});var Ut=a(Ye);_(Hs.$$.fragment,Ut),Ug=l(Ut),Ud=s(Ut,"P",{});var N1=a(Ud);Wg=i(N1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),N1.forEach(t),Rg=l(Ut),Wd=s(Ut,"P",{});var I1=a(Wd);Hg=i(I1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),I1.forEach(t),Vg=l(Ut),Rd=s(Ut,"P",{});var D1=a(Rd);Kg=i(D1,"Example:"),D1.forEach(t),Yg=l(Ut),_(Vs.$$.fragment,Ut),Ut.forEach(t),Zg=l(xe),Tt=s(xe,"DIV",{class:!0});var po=a(Tt);_(Ks.$$.fragment,po),Jg=l(po),Hd=s(po,"P",{});var S1=a(Hd);Xg=i(S1,"Moves the model to cpu from a model parallel state."),S1.forEach(t),Qg=l(po),Vd=s(po,"P",{});var O1=a(Vd);eT=i(O1,"Example:"),O1.forEach(t),tT=l(po),_(Ys.$$.fragment,po),po.forEach(t),xe.forEach(t),_c=l(n),un=s(n,"H2",{class:!0});var dp=a(un);Rn=s(dp,"A",{id:!0,class:!0,href:!0});var G1=a(Rn);Kd=s(G1,"SPAN",{});var B1=a(Kd);_(Zs.$$.fragment,B1),B1.forEach(t),G1.forEach(t),nT=l(dp),Yd=s(dp,"SPAN",{});var U1=a(Yd);oT=i(U1,"TFT5Model"),U1.forEach(t),dp.forEach(t),gc=l(n),de=s(n,"DIV",{class:!0});var at=a(de);_(Js.$$.fragment,at),sT=l(at),Zd=s(at,"P",{});var W1=a(Zd);aT=i(W1,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),W1.forEach(t),rT=l(at),Xs=s(at,"P",{});var lp=a(Xs);iT=i(lp,"The T5 model was proposed in "),Qs=s(lp,"A",{href:!0,rel:!0});var R1=a(Qs);dT=i(R1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R1.forEach(t),lT=i(lp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),lp.forEach(t),cT=l(at),ea=s(at,"P",{});var cp=a(ea);pT=i(cp,"This model inherits from "),kr=s(cp,"A",{href:!0});var H1=a(kr);hT=i(H1,"TFPreTrainedModel"),H1.forEach(t),uT=i(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),mT=l(at),ta=s(at,"P",{});var pp=a(ta);fT=i(pp,"This model is also a "),na=s(pp,"A",{href:!0,rel:!0});var V1=a(na);_T=i(V1,"tf.keras.Model"),V1.forEach(t),gT=i(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(t),TT=l(at),_(Hn.$$.fragment,at),kT=l(at),Ze=s(at,"DIV",{class:!0});var Wt=a(Ze);_(oa.$$.fragment,Wt),vT=l(Wt),mn=s(Wt,"P",{});var Gr=a(mn);bT=i(Gr,"The "),vr=s(Gr,"A",{href:!0});var K1=a(vr);wT=i(K1,"TFT5Model"),K1.forEach(t),yT=i(Gr," forward method, overrides the "),Jd=s(Gr,"CODE",{});var Y1=a(Jd);zT=i(Y1,"__call__"),Y1.forEach(t),xT=i(Gr," special method."),Gr.forEach(t),$T=l(Wt),_(Vn.$$.fragment,Wt),qT=l(Wt),Xd=s(Wt,"P",{});var Z1=a(Xd);ET=i(Z1,"Examples:"),Z1.forEach(t),jT=l(Wt),_(sa.$$.fragment,Wt),Wt.forEach(t),at.forEach(t),Tc=l(n),fn=s(n,"H2",{class:!0});var hp=a(fn);Kn=s(hp,"A",{id:!0,class:!0,href:!0});var J1=a(Kn);Qd=s(J1,"SPAN",{});var X1=a(Qd);_(aa.$$.fragment,X1),X1.forEach(t),J1.forEach(t),FT=l(hp),el=s(hp,"SPAN",{});var Q1=a(el);MT=i(Q1,"TFT5ForConditionalGeneration"),Q1.forEach(t),hp.forEach(t),kc=l(n),le=s(n,"DIV",{class:!0});var rt=a(le);_(ra.$$.fragment,rt),PT=l(rt),ia=s(rt,"P",{});var up=a(ia);CT=i(up,"T5 Model with a "),tl=s(up,"CODE",{});var ew=a(tl);AT=i(ew,"language modeling"),ew.forEach(t),LT=i(up," head on top."),up.forEach(t),NT=l(rt),da=s(rt,"P",{});var mp=a(da);IT=i(mp,"The T5 model was proposed in "),la=s(mp,"A",{href:!0,rel:!0});var tw=a(la);DT=i(tw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),tw.forEach(t),ST=i(mp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),mp.forEach(t),OT=l(rt),ca=s(rt,"P",{});var fp=a(ca);GT=i(fp,"This model inherits from "),br=s(fp,"A",{href:!0});var nw=a(br);BT=i(nw,"TFPreTrainedModel"),nw.forEach(t),UT=i(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),WT=l(rt),pa=s(rt,"P",{});var _p=a(pa);RT=i(_p,"This model is also a "),ha=s(_p,"A",{href:!0,rel:!0});var ow=a(ha);HT=i(ow,"tf.keras.Model"),ow.forEach(t),VT=i(_p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p.forEach(t),KT=l(rt),_(Yn.$$.fragment,rt),YT=l(rt),Je=s(rt,"DIV",{class:!0});var Rt=a(Je);_(ua.$$.fragment,Rt),ZT=l(Rt),_n=s(Rt,"P",{});var Br=a(_n);JT=i(Br,"The "),wr=s(Br,"A",{href:!0});var sw=a(wr);XT=i(sw,"TFT5ForConditionalGeneration"),sw.forEach(t),QT=i(Br," forward method, overrides the "),nl=s(Br,"CODE",{});var aw=a(nl);ek=i(aw,"__call__"),aw.forEach(t),tk=i(Br," special method."),Br.forEach(t),nk=l(Rt),_(Zn.$$.fragment,Rt),ok=l(Rt),ol=s(Rt,"P",{});var rw=a(ol);sk=i(rw,"Examples:"),rw.forEach(t),ak=l(Rt),_(ma.$$.fragment,Rt),Rt.forEach(t),rt.forEach(t),vc=l(n),gn=s(n,"H2",{class:!0});var gp=a(gn);Jn=s(gp,"A",{id:!0,class:!0,href:!0});var iw=a(Jn);sl=s(iw,"SPAN",{});var dw=a(sl);_(fa.$$.fragment,dw),dw.forEach(t),iw.forEach(t),rk=l(gp),al=s(gp,"SPAN",{});var lw=a(al);ik=i(lw,"TFT5EncoderModel"),lw.forEach(t),gp.forEach(t),bc=l(n),ce=s(n,"DIV",{class:!0});var it=a(ce);_(_a.$$.fragment,it),dk=l(it),rl=s(it,"P",{});var cw=a(rl);lk=i(cw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),cw.forEach(t),ck=l(it),ga=s(it,"P",{});var Tp=a(ga);pk=i(Tp,"The T5 model was proposed in "),Ta=s(Tp,"A",{href:!0,rel:!0});var pw=a(Ta);hk=i(pw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),pw.forEach(t),uk=i(Tp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Tp.forEach(t),mk=l(it),ka=s(it,"P",{});var kp=a(ka);fk=i(kp,"This model inherits from "),yr=s(kp,"A",{href:!0});var hw=a(yr);_k=i(hw,"TFPreTrainedModel"),hw.forEach(t),gk=i(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),Tk=l(it),va=s(it,"P",{});var vp=a(va);kk=i(vp,"This model is also a "),ba=s(vp,"A",{href:!0,rel:!0});var uw=a(ba);vk=i(uw,"tf.keras.Model"),uw.forEach(t),bk=i(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),wk=l(it),_(Xn.$$.fragment,it),yk=l(it),Xe=s(it,"DIV",{class:!0});var Ht=a(Xe);_(wa.$$.fragment,Ht),zk=l(Ht),Tn=s(Ht,"P",{});var Ur=a(Tn);xk=i(Ur,"The "),zr=s(Ur,"A",{href:!0});var mw=a(zr);$k=i(mw,"TFT5EncoderModel"),mw.forEach(t),qk=i(Ur," forward method, overrides the "),il=s(Ur,"CODE",{});var fw=a(il);Ek=i(fw,"__call__"),fw.forEach(t),jk=i(Ur," special method."),Ur.forEach(t),Fk=l(Ht),_(Qn.$$.fragment,Ht),Mk=l(Ht),dl=s(Ht,"P",{});var _w=a(dl);Pk=i(_w,"Examples:"),_w.forEach(t),Ck=l(Ht),_(ya.$$.fragment,Ht),Ht.forEach(t),it.forEach(t),wc=l(n),kn=s(n,"H2",{class:!0});var bp=a(kn);eo=s(bp,"A",{id:!0,class:!0,href:!0});var gw=a(eo);ll=s(gw,"SPAN",{});var Tw=a(ll);_(za.$$.fragment,Tw),Tw.forEach(t),gw.forEach(t),Ak=l(bp),cl=s(bp,"SPAN",{});var kw=a(cl);Lk=i(kw,"FlaxT5Model"),kw.forEach(t),bp.forEach(t),yc=l(n),wt=s(n,"DIV",{class:!0});var Wr=a(wt);Qe=s(Wr,"DIV",{class:!0});var Vt=a(Qe);_(xa.$$.fragment,Vt),Nk=l(Vt),vn=s(Vt,"P",{});var Rr=a(vn);Ik=i(Rr,"The "),pl=s(Rr,"CODE",{});var vw=a(pl);Dk=i(vw,"FlaxT5PreTrainedModel"),vw.forEach(t),Sk=i(Rr,"forward method, overrides the "),hl=s(Rr,"CODE",{});var bw=a(hl);Ok=i(bw,"__call__"),bw.forEach(t),Gk=i(Rr," special method."),Rr.forEach(t),Bk=l(Vt),_(to.$$.fragment,Vt),Uk=l(Vt),ul=s(Vt,"P",{});var ww=a(ul);Wk=i(ww,"Example:"),ww.forEach(t),Rk=l(Vt),_($a.$$.fragment,Vt),Vt.forEach(t),Hk=l(Wr),Ft=s(Wr,"DIV",{class:!0});var Hr=a(Ft);_(qa.$$.fragment,Hr),Vk=l(Hr),ml=s(Hr,"P",{});var yw=a(ml);Kk=i(yw,"Example:"),yw.forEach(t),Yk=l(Hr),_(Ea.$$.fragment,Hr),Hr.forEach(t),Zk=l(Wr),Mt=s(Wr,"DIV",{class:!0});var Vr=a(Mt);_(ja.$$.fragment,Vr),Jk=l(Vr),fl=s(Vr,"P",{});var zw=a(fl);Xk=i(zw,"Example:"),zw.forEach(t),Qk=l(Vr),_(Fa.$$.fragment,Vr),Vr.forEach(t),Wr.forEach(t),zc=l(n),bn=s(n,"H2",{class:!0});var wp=a(bn);no=s(wp,"A",{id:!0,class:!0,href:!0});var xw=a(no);_l=s(xw,"SPAN",{});var $w=a(_l);_(Ma.$$.fragment,$w),$w.forEach(t),xw.forEach(t),ev=l(wp),gl=s(wp,"SPAN",{});var qw=a(gl);tv=i(qw,"FlaxT5ForConditionalGeneration"),qw.forEach(t),wp.forEach(t),xc=l(n),yt=s(n,"DIV",{class:!0});var Kr=a(yt);et=s(Kr,"DIV",{class:!0});var Kt=a(et);_(Pa.$$.fragment,Kt),nv=l(Kt),wn=s(Kt,"P",{});var Yr=a(wn);ov=i(Yr,"The "),Tl=s(Yr,"CODE",{});var Ew=a(Tl);sv=i(Ew,"FlaxT5PreTrainedModel"),Ew.forEach(t),av=i(Yr,"forward method, overrides the "),kl=s(Yr,"CODE",{});var jw=a(kl);rv=i(jw,"__call__"),jw.forEach(t),iv=i(Yr," special method."),Yr.forEach(t),dv=l(Kt),_(oo.$$.fragment,Kt),lv=l(Kt),vl=s(Kt,"P",{});var Fw=a(vl);cv=i(Fw,"Example:"),Fw.forEach(t),pv=l(Kt),_(Ca.$$.fragment,Kt),Kt.forEach(t),hv=l(Kr),Pt=s(Kr,"DIV",{class:!0});var Zr=a(Pt);_(Aa.$$.fragment,Zr),uv=l(Zr),bl=s(Zr,"P",{});var Mw=a(bl);mv=i(Mw,"Example:"),Mw.forEach(t),fv=l(Zr),_(La.$$.fragment,Zr),Zr.forEach(t),_v=l(Kr),Ct=s(Kr,"DIV",{class:!0});var Jr=a(Ct);_(Na.$$.fragment,Jr),gv=l(Jr),wl=s(Jr,"P",{});var Pw=a(wl);Tv=i(Pw,"Example:"),Pw.forEach(t),kv=l(Jr),_(Ia.$$.fragment,Jr),Jr.forEach(t),Kr.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(Yw)),c(y,"id","t5"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#t5"),c(b,"class","relative group"),c(ee,"id","overview"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#overview"),c(E,"class","relative group"),c(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(ae,"rel","nofollow"),c(L,"href","#training"),c(Le,"href","#inference"),c(Ne,"href","#scripts"),c(ho,"href","https://huggingface.co/t5-small"),c(ho,"rel","nofollow"),c(uo,"href","https://huggingface.co/t5-base"),c(uo,"rel","nofollow"),c(mo,"href","https://huggingface.co/t5-large"),c(mo,"rel","nofollow"),c(fo,"href","https://huggingface.co/t5-3b"),c(fo,"rel","nofollow"),c(_o,"href","https://huggingface.co/t5-11b"),c(_o,"rel","nofollow"),c(Wa,"href","t5v1.1"),c(Ra,"href","mt5"),c(Ha,"href","byt5"),c(go,"href","https://huggingface.co/models?search=t5"),c(go,"rel","nofollow"),c(To,"href","https://huggingface.co/thomwolf"),c(To,"rel","nofollow"),c(ko,"href","https://github.com/google-research/text-to-text-transfer-transformer"),c(ko,"rel","nofollow"),c(Va,"id","training"),c(qn,"id","training"),c(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qn,"href","#training"),c(Yt,"class","relative group"),c(Ka,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(Ya,"href","/docs/transformers/pr_15794/en/model_doc/mt5#transformers.T5Tokenizer"),c(yo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/language-modeling"),c(yo,"rel","nofollow"),c(xo,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(xo,"rel","nofollow"),c(Eo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),c(Eo,"rel","nofollow"),c(jo,"href","https://arxiv.org/pdf/1910.10683.pdf"),c(jo,"rel","nofollow"),c(Ja,"id","inference"),c(Fn,"id","inference"),c(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fn,"href","#inference"),c(Xt,"class","relative group"),c(Xa,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(Po,"href","https://huggingface.co/blog/how-to-generate"),c(Po,"rel","nofollow"),c(Co,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),c(Co,"rel","nofollow"),c(Qa,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.generation_utils.GenerationMixin.generate"),c(tr,"id","scripts"),c(Mn,"id","example-scripts"),c(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mn,"href","#example-scripts"),c(Qt,"class","relative group"),c(Io,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/run_t5_mlm_flax.py"),c(Io,"rel","nofollow"),c(Do,"href","https://github.com/huggingface/transformers/blob/master/examples/flax/language-modeling/t5_tokenizer_model.py"),c(Do,"rel","nofollow"),c(So,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/summarization"),c(So,"rel","nofollow"),c(Oo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/summarization"),c(Oo,"rel","nofollow"),c(Go,"href","https://github.com/huggingface/transformers/tree/master/examples/flax/summarization"),c(Go,"rel","nofollow"),c(Bo,"href","https://github.com/huggingface/transformers/tree/master/examples/pytorch/translation"),c(Bo,"rel","nofollow"),c(Uo,"href","https://github.com/huggingface/transformers/tree/master/examples/tensorflow/translation"),c(Uo,"rel","nofollow"),c(Cn,"id","transformers.T5Config"),c(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cn,"href","#transformers.T5Config"),c(tn,"class","relative group"),c(or,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Model"),c(sr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.TFT5Model"),c(Ho,"href","https://huggingface.co/t5-small"),c(Ho,"rel","nofollow"),c(ar,"href","/docs/transformers/pr_15794/en/main_classes/configuration#transformers.PretrainedConfig"),c(rr,"href","/docs/transformers/pr_15794/en/main_classes/configuration#transformers.PretrainedConfig"),c(vt,"class","docstring"),c(An,"id","transformers.T5Tokenizer"),c(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(An,"href","#transformers.T5Tokenizer"),c(on,"class","relative group"),c(Zo,"href","https://github.com/google/sentencepiece"),c(Zo,"rel","nofollow"),c(ir,"href","/docs/transformers/pr_15794/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Et,"class","docstring"),c(Ln,"class","docstring"),c(Nn,"class","docstring"),c(cd,"class","docstring"),c(ie,"class","docstring"),c(In,"id","transformers.T5TokenizerFast"),c(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(In,"href","#transformers.T5TokenizerFast"),c(sn,"class","relative group"),c(as,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(as,"rel","nofollow"),c(cr,"href","/docs/transformers/pr_15794/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(jt,"class","docstring"),c(Dn,"class","docstring"),c(Se,"class","docstring"),c(Sn,"id","transformers.T5Model"),c(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Sn,"href","#transformers.T5Model"),c(rn,"class","relative group"),c(us,"href","https://arxiv.org/abs/1910.10683"),c(us,"rel","nofollow"),c(ur,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel"),c(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_s,"rel","nofollow"),c(mr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5Model"),c(We,"class","docstring"),c(Re,"class","docstring"),c(_t,"class","docstring"),c(J,"class","docstring"),c(Gn,"id","transformers.T5ForConditionalGeneration"),c(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gn,"href","#transformers.T5ForConditionalGeneration"),c(ln,"class","relative group"),c(qs,"href","https://arxiv.org/abs/1910.10683"),c(qs,"rel","nofollow"),c(fr,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel"),c(Fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fs,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5ForConditionalGeneration"),c(He,"class","docstring"),c(Ve,"class","docstring"),c(gt,"class","docstring"),c(X,"class","docstring"),c(Un,"id","transformers.T5EncoderModel"),c(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Un,"href","#transformers.T5EncoderModel"),c(pn,"class","relative group"),c(Os,"href","https://arxiv.org/abs/1910.10683"),c(Os,"rel","nofollow"),c(gr,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.PreTrainedModel"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(Tr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.T5EncoderModel"),c(Ke,"class","docstring"),c(Ye,"class","docstring"),c(Tt,"class","docstring"),c(Q,"class","docstring"),c(Rn,"id","transformers.TFT5Model"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#transformers.TFT5Model"),c(un,"class","relative group"),c(Qs,"href","https://arxiv.org/abs/1910.10683"),c(Qs,"rel","nofollow"),c(kr,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.TFPreTrainedModel"),c(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(na,"rel","nofollow"),c(vr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.TFT5Model"),c(Ze,"class","docstring"),c(de,"class","docstring"),c(Kn,"id","transformers.TFT5ForConditionalGeneration"),c(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kn,"href","#transformers.TFT5ForConditionalGeneration"),c(fn,"class","relative group"),c(la,"href","https://arxiv.org/abs/1910.10683"),c(la,"rel","nofollow"),c(br,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.TFPreTrainedModel"),c(ha,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ha,"rel","nofollow"),c(wr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),c(Je,"class","docstring"),c(le,"class","docstring"),c(Jn,"id","transformers.TFT5EncoderModel"),c(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jn,"href","#transformers.TFT5EncoderModel"),c(gn,"class","relative group"),c(Ta,"href","https://arxiv.org/abs/1910.10683"),c(Ta,"rel","nofollow"),c(yr,"href","/docs/transformers/pr_15794/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(zr,"href","/docs/transformers/pr_15794/en/model_doc/t5#transformers.TFT5EncoderModel"),c(Xe,"class","docstring"),c(ce,"class","docstring"),c(eo,"id","transformers.FlaxT5Model"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.FlaxT5Model"),c(kn,"class","relative group"),c(Qe,"class","docstring"),c(Ft,"class","docstring"),c(Mt,"class","docstring"),c(wt,"class","docstring"),c(no,"id","transformers.FlaxT5ForConditionalGeneration"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.FlaxT5ForConditionalGeneration"),c(bn,"class","relative group"),c(et,"class","docstring"),c(Pt,"class","docstring"),c(Ct,"class","docstring"),c(yt,"class","docstring")},m(n,h){e(document.head,u),p(n,$,h),p(n,b,h),e(b,y),e(y,x),g(z,x,null),e(b,w),e(b,q),e(q,qe),p(n,oe,h),p(n,E,h),e(E,ee),e(ee,O),g(se,O,null),e(E,Ee),e(E,G),e(G,je),p(n,ke,h),p(n,B,h),e(B,I),e(B,ae),e(ae,pe),e(B,F),p(n,C,h),p(n,he,h),e(he,K),p(n,ve,h),p(n,ue,h),e(ue,U),e(U,Fe),p(n,be,h),p(n,M,h),e(M,Me),p(n,H,h),p(n,V,h),e(V,me),e(me,A),e(A,Pe),e(A,fe),e(fe,D),e(A,Ce),e(A,W),e(W,Ae),e(A,m),e(V,j),e(V,te),e(te,Oe),e(Oe,lt),e(V,S),e(V,Ge),e(Ge,ne),e(ne,ct),e(ne,L),e(L,Y),e(ne,pt),e(ne,Le),e(Le,Z),e(ne,ht),e(ne,Ne),e(Ne,Ie),e(ne,ut),p(n,Al,h),p(n,Ga,h),e(Ga,yp),p(n,Ll,h),p(n,Be,h),e(Be,Xr),e(Xr,Qr),e(Qr,ho),e(ho,zp),e(Be,xp),e(Be,ei),e(ei,ti),e(ti,uo),e(uo,$p),e(Be,qp),e(Be,ni),e(ni,oi),e(oi,mo),e(mo,Ep),e(Be,jp),e(Be,si),e(si,ai),e(ai,fo),e(fo,Fp),e(Be,Mp),e(Be,ri),e(ri,Ba),e(Ba,_o),e(_o,Pp),e(Ba,Cp),p(n,Nl,h),p(n,Ua,h),e(Ua,Ap),p(n,Il,h),p(n,xt,h),e(xt,ii),e(ii,yn),e(yn,di),e(di,Lp),e(yn,Np),e(yn,Wa),e(Wa,Ip),e(yn,Dp),e(xt,Sp),e(xt,li),e(li,zn),e(zn,ci),e(ci,Op),e(zn,Gp),e(zn,Ra),e(Ra,Bp),e(zn,Up),e(xt,Wp),e(xt,pi),e(pi,xn),e(xn,hi),e(hi,Rp),e(xn,Hp),e(xn,Ha),e(Ha,Vp),e(xn,Kp),p(n,Dl,h),p(n,$n,h),e($n,Yp),e($n,go),e(go,Zp),e($n,Jp),p(n,Sl,h),p(n,$t,h),e($t,Xp),e($t,To),e(To,Qp),e($t,eh),e($t,ko),e(ko,th),e($t,nh),p(n,Ol,h),p(n,Va,h),p(n,Gl,h),p(n,Yt,h),e(Yt,qn),e(qn,ui),g(vo,ui,null),e(Yt,oh),e(Yt,mi),e(mi,sh),p(n,Bl,h),p(n,mt,h),e(mt,ah),e(mt,fi),e(fi,rh),e(mt,ih),e(mt,_i),e(_i,dh),e(mt,lh),e(mt,gi),e(gi,ch),e(mt,ph),p(n,Ul,h),p(n,En,h),e(En,hh),e(En,Ka),e(Ka,uh),e(En,mh),p(n,Wl,h),p(n,jn,h),e(jn,dt),e(dt,Ti),e(Ti,fh),e(dt,_h),e(dt,_e),e(_e,gh),e(_e,ki),e(ki,Th),e(_e,kh),e(_e,vi),e(vi,vh),e(_e,bh),e(_e,bi),e(bi,wh),e(_e,yh),e(_e,wi),e(wi,zh),e(_e,xh),e(_e,yi),e(yi,$h),e(_e,qh),e(_e,Ya),e(Ya,Eh),e(_e,jh),e(dt,Fh),e(dt,zi),e(zi,Mh),e(dt,Ph),g(bo,dt,null),e(dt,Ch),e(dt,wo),e(wo,Ah),e(wo,yo),e(yo,Lh),e(wo,Nh),e(jn,Ih),e(jn,ge),e(ge,xi),e(xi,Dh),e(ge,Sh),e(ge,$i),e($i,Oh),e(ge,Gh),g(zo,ge,null),e(ge,Bh),e(ge,re),e(re,Uh),e(re,qi),e(qi,Wh),e(re,Rh),e(re,Ei),e(Ei,Hh),e(re,Vh),e(re,ji),e(ji,Kh),e(re,Yh),e(re,Fi),e(Fi,Zh),e(re,Jh),e(re,Mi),e(Mi,Xh),e(re,Qh),e(re,Pi),e(Pi,eu),e(re,tu),e(re,Ci),e(Ci,nu),e(re,ou),e(ge,su),e(ge,Zt),e(Zt,au),e(Zt,Ai),e(Ai,ru),e(Zt,iu),e(Zt,Li),e(Li,du),e(Zt,lu),e(ge,cu),e(ge,Te),e(Te,pu),e(Te,Ni),e(Ni,hu),e(Te,uu),e(Te,Ii),e(Ii,mu),e(Te,fu),e(Te,Di),e(Di,_u),e(Te,gu),e(Te,Si),e(Si,Tu),e(Te,ku),e(Te,xo),e(xo,vu),e(Te,bu),e(Te,Oi),e(Oi,wu),e(Te,yu),e(ge,zu),g($o,ge,null),p(n,Rl,h),p(n,Za,h),e(Za,xu),p(n,Hl,h),p(n,qt,h),e(qt,Gi),e(Gi,qo),e(qo,$u),e(qo,Bi),e(Bi,qu),e(qo,Eu),e(qt,ju),e(qt,Ui),e(Ui,Jt),e(Jt,Fu),e(Jt,Eo),e(Eo,Mu),e(Jt,Pu),e(Jt,jo),e(jo,Cu),e(Jt,Au),e(qt,Lu),e(qt,Wi),e(Wi,Fo),e(Fo,Nu),e(Fo,Ri),e(Ri,Iu),e(Fo,Du),p(n,Vl,h),p(n,Ja,h),p(n,Kl,h),p(n,Xt,h),e(Xt,Fn),e(Fn,Hi),g(Mo,Hi,null),e(Xt,Su),e(Xt,Vi),e(Vi,Ou),p(n,Yl,h),p(n,ft,h),e(ft,Gu),e(ft,Xa),e(Xa,Bu),e(ft,Uu),e(ft,Po),e(Po,Wu),e(ft,Ru),e(ft,Co),e(Co,Hu),e(ft,Vu),p(n,Zl,h),g(Ao,n,h),p(n,Jl,h),p(n,Ue,h),e(Ue,Ku),e(Ue,Ki),e(Ki,Yu),e(Ue,Zu),e(Ue,Yi),e(Yi,Ju),e(Ue,Xu),e(Ue,Qa),e(Qa,Qu),e(Ue,em),e(Ue,Zi),e(Zi,tm),e(Ue,nm),p(n,Xl,h),p(n,er,h),e(er,om),p(n,Ql,h),g(Lo,n,h),p(n,ec,h),p(n,tr,h),p(n,tc,h),p(n,Qt,h),e(Qt,Mn),e(Mn,Ji),g(No,Ji,null),e(Qt,sm),e(Qt,Xi),e(Xi,am),p(n,nc,h),p(n,nr,h),e(nr,rm),p(n,oc,h),p(n,Pn,h),e(Pn,Qi),e(Qi,en),e(en,im),e(en,Io),e(Io,dm),e(en,lm),e(en,Do),e(Do,cm),e(en,pm),e(Pn,hm),e(Pn,ed),e(ed,De),e(De,um),e(De,So),e(So,mm),e(De,fm),e(De,Oo),e(Oo,_m),e(De,gm),e(De,Go),e(Go,Tm),e(De,km),e(De,Bo),e(Bo,vm),e(De,bm),e(De,Uo),e(Uo,wm),e(De,ym),p(n,sc,h),p(n,tn,h),e(tn,Cn),e(Cn,td),g(Wo,td,null),e(tn,zm),e(tn,nd),e(nd,xm),p(n,ac,h),p(n,vt,h),g(Ro,vt,null),e(vt,$m),e(vt,bt),e(bt,qm),e(bt,or),e(or,Em),e(bt,jm),e(bt,sr),e(sr,Fm),e(bt,Mm),e(bt,Ho),e(Ho,Pm),e(bt,Cm),e(vt,Am),e(vt,nn),e(nn,Lm),e(nn,ar),e(ar,Nm),e(nn,Im),e(nn,rr),e(rr,Dm),e(nn,Sm),p(n,rc,h),p(n,on,h),e(on,An),e(An,od),g(Vo,od,null),e(on,Om),e(on,sd),e(sd,Gm),p(n,ic,h),p(n,ie,h),g(Ko,ie,null),e(ie,Bm),e(ie,Yo),e(Yo,Um),e(Yo,Zo),e(Zo,Wm),e(Yo,Rm),e(ie,Hm),e(ie,Jo),e(Jo,Vm),e(Jo,ir),e(ir,Km),e(Jo,Ym),e(ie,Zm),e(ie,Et),g(Xo,Et,null),e(Et,Jm),e(Et,ad),e(ad,Xm),e(Et,Qm),e(Et,Qo),e(Qo,dr),e(dr,ef),e(dr,rd),e(rd,tf),e(Qo,nf),e(Qo,lr),e(lr,of),e(lr,id),e(id,sf),e(ie,af),e(ie,Ln),g(es,Ln,null),e(Ln,rf),e(Ln,ts),e(ts,df),e(ts,dd),e(dd,lf),e(ts,cf),e(ie,pf),e(ie,Nn),g(ns,Nn,null),e(Nn,hf),e(Nn,ld),e(ld,uf),e(ie,mf),e(ie,cd),p(n,dc,h),p(n,sn,h),e(sn,In),e(In,pd),g(os,pd,null),e(sn,ff),e(sn,hd),e(hd,_f),p(n,lc,h),p(n,Se,h),g(ss,Se,null),e(Se,gf),e(Se,an),e(an,Tf),e(an,ud),e(ud,kf),e(an,vf),e(an,as),e(as,bf),e(an,wf),e(Se,yf),e(Se,rs),e(rs,zf),e(rs,cr),e(cr,xf),e(rs,$f),e(Se,qf),e(Se,jt),g(is,jt,null),e(jt,Ef),e(jt,md),e(md,jf),e(jt,Ff),e(jt,ds),e(ds,pr),e(pr,Mf),e(pr,fd),e(fd,Pf),e(ds,Cf),e(ds,hr),e(hr,Af),e(hr,_d),e(_d,Lf),e(Se,Nf),e(Se,Dn),g(ls,Dn,null),e(Dn,If),e(Dn,gd),e(gd,Df),p(n,cc,h),p(n,rn,h),e(rn,Sn),e(Sn,Td),g(cs,Td,null),e(rn,Sf),e(rn,kd),e(kd,Of),p(n,pc,h),p(n,J,h),g(ps,J,null),e(J,Gf),e(J,vd),e(vd,Bf),e(J,Uf),e(J,hs),e(hs,Wf),e(hs,us),e(us,Rf),e(hs,Hf),e(J,Vf),e(J,ms),e(ms,Kf),e(ms,ur),e(ur,Yf),e(ms,Zf),e(J,Jf),e(J,fs),e(fs,Xf),e(fs,_s),e(_s,Qf),e(fs,e_),e(J,t_),e(J,We),g(gs,We,null),e(We,n_),e(We,dn),e(dn,o_),e(dn,mr),e(mr,s_),e(dn,a_),e(dn,bd),e(bd,r_),e(dn,i_),e(We,d_),g(On,We,null),e(We,l_),e(We,wd),e(wd,c_),e(We,p_),g(Ts,We,null),e(J,h_),e(J,Re),g(ks,Re,null),e(Re,u_),e(Re,yd),e(yd,m_),e(Re,f_),e(Re,zd),e(zd,__),e(Re,g_),e(Re,xd),e(xd,T_),e(Re,k_),g(vs,Re,null),e(J,v_),e(J,_t),g(bs,_t,null),e(_t,b_),e(_t,$d),e($d,w_),e(_t,y_),e(_t,qd),e(qd,z_),e(_t,x_),g(ws,_t,null),p(n,hc,h),p(n,ln,h),e(ln,Gn),e(Gn,Ed),g(ys,Ed,null),e(ln,$_),e(ln,jd),e(jd,q_),p(n,uc,h),p(n,X,h),g(zs,X,null),e(X,E_),e(X,xs),e(xs,j_),e(xs,Fd),e(Fd,F_),e(xs,M_),e(X,P_),e(X,$s),e($s,C_),e($s,qs),e(qs,A_),e($s,L_),e(X,N_),e(X,Es),e(Es,I_),e(Es,fr),e(fr,D_),e(Es,S_),e(X,O_),e(X,js),e(js,G_),e(js,Fs),e(Fs,B_),e(js,U_),e(X,W_),e(X,He),g(Ms,He,null),e(He,R_),e(He,cn),e(cn,H_),e(cn,_r),e(_r,V_),e(cn,K_),e(cn,Md),e(Md,Y_),e(cn,Z_),e(He,J_),g(Bn,He,null),e(He,X_),e(He,Pd),e(Pd,Q_),e(He,eg),g(Ps,He,null),e(X,tg),e(X,Ve),g(Cs,Ve,null),e(Ve,ng),e(Ve,Cd),e(Cd,og),e(Ve,sg),e(Ve,Ad),e(Ad,ag),e(Ve,rg),e(Ve,Ld),e(Ld,ig),e(Ve,dg),g(As,Ve,null),e(X,lg),e(X,gt),g(Ls,gt,null),e(gt,cg),e(gt,Nd),e(Nd,pg),e(gt,hg),e(gt,Id),e(Id,ug),e(gt,mg),g(Ns,gt,null),p(n,mc,h),p(n,pn,h),e(pn,Un),e(Un,Dd),g(Is,Dd,null),e(pn,fg),e(pn,Sd),e(Sd,_g),p(n,fc,h),p(n,Q,h),g(Ds,Q,null),e(Q,gg),e(Q,Od),e(Od,Tg),e(Q,kg),e(Q,Ss),e(Ss,vg),e(Ss,Os),e(Os,bg),e(Ss,wg),e(Q,yg),e(Q,Gs),e(Gs,zg),e(Gs,gr),e(gr,xg),e(Gs,$g),e(Q,qg),e(Q,Bs),e(Bs,Eg),e(Bs,Us),e(Us,jg),e(Bs,Fg),e(Q,Mg),e(Q,Ke),g(Ws,Ke,null),e(Ke,Pg),e(Ke,hn),e(hn,Cg),e(hn,Tr),e(Tr,Ag),e(hn,Lg),e(hn,Gd),e(Gd,Ng),e(hn,Ig),e(Ke,Dg),g(Wn,Ke,null),e(Ke,Sg),e(Ke,Bd),e(Bd,Og),e(Ke,Gg),g(Rs,Ke,null),e(Q,Bg),e(Q,Ye),g(Hs,Ye,null),e(Ye,Ug),e(Ye,Ud),e(Ud,Wg),e(Ye,Rg),e(Ye,Wd),e(Wd,Hg),e(Ye,Vg),e(Ye,Rd),e(Rd,Kg),e(Ye,Yg),g(Vs,Ye,null),e(Q,Zg),e(Q,Tt),g(Ks,Tt,null),e(Tt,Jg),e(Tt,Hd),e(Hd,Xg),e(Tt,Qg),e(Tt,Vd),e(Vd,eT),e(Tt,tT),g(Ys,Tt,null),p(n,_c,h),p(n,un,h),e(un,Rn),e(Rn,Kd),g(Zs,Kd,null),e(un,nT),e(un,Yd),e(Yd,oT),p(n,gc,h),p(n,de,h),g(Js,de,null),e(de,sT),e(de,Zd),e(Zd,aT),e(de,rT),e(de,Xs),e(Xs,iT),e(Xs,Qs),e(Qs,dT),e(Xs,lT),e(de,cT),e(de,ea),e(ea,pT),e(ea,kr),e(kr,hT),e(ea,uT),e(de,mT),e(de,ta),e(ta,fT),e(ta,na),e(na,_T),e(ta,gT),e(de,TT),g(Hn,de,null),e(de,kT),e(de,Ze),g(oa,Ze,null),e(Ze,vT),e(Ze,mn),e(mn,bT),e(mn,vr),e(vr,wT),e(mn,yT),e(mn,Jd),e(Jd,zT),e(mn,xT),e(Ze,$T),g(Vn,Ze,null),e(Ze,qT),e(Ze,Xd),e(Xd,ET),e(Ze,jT),g(sa,Ze,null),p(n,Tc,h),p(n,fn,h),e(fn,Kn),e(Kn,Qd),g(aa,Qd,null),e(fn,FT),e(fn,el),e(el,MT),p(n,kc,h),p(n,le,h),g(ra,le,null),e(le,PT),e(le,ia),e(ia,CT),e(ia,tl),e(tl,AT),e(ia,LT),e(le,NT),e(le,da),e(da,IT),e(da,la),e(la,DT),e(da,ST),e(le,OT),e(le,ca),e(ca,GT),e(ca,br),e(br,BT),e(ca,UT),e(le,WT),e(le,pa),e(pa,RT),e(pa,ha),e(ha,HT),e(pa,VT),e(le,KT),g(Yn,le,null),e(le,YT),e(le,Je),g(ua,Je,null),e(Je,ZT),e(Je,_n),e(_n,JT),e(_n,wr),e(wr,XT),e(_n,QT),e(_n,nl),e(nl,ek),e(_n,tk),e(Je,nk),g(Zn,Je,null),e(Je,ok),e(Je,ol),e(ol,sk),e(Je,ak),g(ma,Je,null),p(n,vc,h),p(n,gn,h),e(gn,Jn),e(Jn,sl),g(fa,sl,null),e(gn,rk),e(gn,al),e(al,ik),p(n,bc,h),p(n,ce,h),g(_a,ce,null),e(ce,dk),e(ce,rl),e(rl,lk),e(ce,ck),e(ce,ga),e(ga,pk),e(ga,Ta),e(Ta,hk),e(ga,uk),e(ce,mk),e(ce,ka),e(ka,fk),e(ka,yr),e(yr,_k),e(ka,gk),e(ce,Tk),e(ce,va),e(va,kk),e(va,ba),e(ba,vk),e(va,bk),e(ce,wk),g(Xn,ce,null),e(ce,yk),e(ce,Xe),g(wa,Xe,null),e(Xe,zk),e(Xe,Tn),e(Tn,xk),e(Tn,zr),e(zr,$k),e(Tn,qk),e(Tn,il),e(il,Ek),e(Tn,jk),e(Xe,Fk),g(Qn,Xe,null),e(Xe,Mk),e(Xe,dl),e(dl,Pk),e(Xe,Ck),g(ya,Xe,null),p(n,wc,h),p(n,kn,h),e(kn,eo),e(eo,ll),g(za,ll,null),e(kn,Ak),e(kn,cl),e(cl,Lk),p(n,yc,h),p(n,wt,h),e(wt,Qe),g(xa,Qe,null),e(Qe,Nk),e(Qe,vn),e(vn,Ik),e(vn,pl),e(pl,Dk),e(vn,Sk),e(vn,hl),e(hl,Ok),e(vn,Gk),e(Qe,Bk),g(to,Qe,null),e(Qe,Uk),e(Qe,ul),e(ul,Wk),e(Qe,Rk),g($a,Qe,null),e(wt,Hk),e(wt,Ft),g(qa,Ft,null),e(Ft,Vk),e(Ft,ml),e(ml,Kk),e(Ft,Yk),g(Ea,Ft,null),e(wt,Zk),e(wt,Mt),g(ja,Mt,null),e(Mt,Jk),e(Mt,fl),e(fl,Xk),e(Mt,Qk),g(Fa,Mt,null),p(n,zc,h),p(n,bn,h),e(bn,no),e(no,_l),g(Ma,_l,null),e(bn,ev),e(bn,gl),e(gl,tv),p(n,xc,h),p(n,yt,h),e(yt,et),g(Pa,et,null),e(et,nv),e(et,wn),e(wn,ov),e(wn,Tl),e(Tl,sv),e(wn,av),e(wn,kl),e(kl,rv),e(wn,iv),e(et,dv),g(oo,et,null),e(et,lv),e(et,vl),e(vl,cv),e(et,pv),g(Ca,et,null),e(yt,hv),e(yt,Pt),g(Aa,Pt,null),e(Pt,uv),e(Pt,bl),e(bl,mv),e(Pt,fv),g(La,Pt,null),e(yt,_v),e(yt,Ct),g(Na,Ct,null),e(Ct,gv),e(Ct,wl),e(wl,Tv),e(Ct,kv),g(Ia,Ct,null),$c=!0},p(n,[h]){const Da={};h&2&&(Da.$$scope={dirty:h,ctx:n}),On.$set(Da);const yl={};h&2&&(yl.$$scope={dirty:h,ctx:n}),Bn.$set(yl);const zl={};h&2&&(zl.$$scope={dirty:h,ctx:n}),Wn.$set(zl);const xl={};h&2&&(xl.$$scope={dirty:h,ctx:n}),Hn.$set(xl);const Sa={};h&2&&(Sa.$$scope={dirty:h,ctx:n}),Vn.$set(Sa);const $l={};h&2&&($l.$$scope={dirty:h,ctx:n}),Yn.$set($l);const ql={};h&2&&(ql.$$scope={dirty:h,ctx:n}),Zn.$set(ql);const El={};h&2&&(El.$$scope={dirty:h,ctx:n}),Xn.$set(El);const Oa={};h&2&&(Oa.$$scope={dirty:h,ctx:n}),Qn.$set(Oa);const jl={};h&2&&(jl.$$scope={dirty:h,ctx:n}),to.$set(jl);const Fl={};h&2&&(Fl.$$scope={dirty:h,ctx:n}),oo.$set(Fl)},i(n){$c||(T(z.$$.fragment,n),T(se.$$.fragment,n),T(vo.$$.fragment,n),T(bo.$$.fragment,n),T(zo.$$.fragment,n),T($o.$$.fragment,n),T(Mo.$$.fragment,n),T(Ao.$$.fragment,n),T(Lo.$$.fragment,n),T(No.$$.fragment,n),T(Wo.$$.fragment,n),T(Ro.$$.fragment,n),T(Vo.$$.fragment,n),T(Ko.$$.fragment,n),T(Xo.$$.fragment,n),T(es.$$.fragment,n),T(ns.$$.fragment,n),T(os.$$.fragment,n),T(ss.$$.fragment,n),T(is.$$.fragment,n),T(ls.$$.fragment,n),T(cs.$$.fragment,n),T(ps.$$.fragment,n),T(gs.$$.fragment,n),T(On.$$.fragment,n),T(Ts.$$.fragment,n),T(ks.$$.fragment,n),T(vs.$$.fragment,n),T(bs.$$.fragment,n),T(ws.$$.fragment,n),T(ys.$$.fragment,n),T(zs.$$.fragment,n),T(Ms.$$.fragment,n),T(Bn.$$.fragment,n),T(Ps.$$.fragment,n),T(Cs.$$.fragment,n),T(As.$$.fragment,n),T(Ls.$$.fragment,n),T(Ns.$$.fragment,n),T(Is.$$.fragment,n),T(Ds.$$.fragment,n),T(Ws.$$.fragment,n),T(Wn.$$.fragment,n),T(Rs.$$.fragment,n),T(Hs.$$.fragment,n),T(Vs.$$.fragment,n),T(Ks.$$.fragment,n),T(Ys.$$.fragment,n),T(Zs.$$.fragment,n),T(Js.$$.fragment,n),T(Hn.$$.fragment,n),T(oa.$$.fragment,n),T(Vn.$$.fragment,n),T(sa.$$.fragment,n),T(aa.$$.fragment,n),T(ra.$$.fragment,n),T(Yn.$$.fragment,n),T(ua.$$.fragment,n),T(Zn.$$.fragment,n),T(ma.$$.fragment,n),T(fa.$$.fragment,n),T(_a.$$.fragment,n),T(Xn.$$.fragment,n),T(wa.$$.fragment,n),T(Qn.$$.fragment,n),T(ya.$$.fragment,n),T(za.$$.fragment,n),T(xa.$$.fragment,n),T(to.$$.fragment,n),T($a.$$.fragment,n),T(qa.$$.fragment,n),T(Ea.$$.fragment,n),T(ja.$$.fragment,n),T(Fa.$$.fragment,n),T(Ma.$$.fragment,n),T(Pa.$$.fragment,n),T(oo.$$.fragment,n),T(Ca.$$.fragment,n),T(Aa.$$.fragment,n),T(La.$$.fragment,n),T(Na.$$.fragment,n),T(Ia.$$.fragment,n),$c=!0)},o(n){k(z.$$.fragment,n),k(se.$$.fragment,n),k(vo.$$.fragment,n),k(bo.$$.fragment,n),k(zo.$$.fragment,n),k($o.$$.fragment,n),k(Mo.$$.fragment,n),k(Ao.$$.fragment,n),k(Lo.$$.fragment,n),k(No.$$.fragment,n),k(Wo.$$.fragment,n),k(Ro.$$.fragment,n),k(Vo.$$.fragment,n),k(Ko.$$.fragment,n),k(Xo.$$.fragment,n),k(es.$$.fragment,n),k(ns.$$.fragment,n),k(os.$$.fragment,n),k(ss.$$.fragment,n),k(is.$$.fragment,n),k(ls.$$.fragment,n),k(cs.$$.fragment,n),k(ps.$$.fragment,n),k(gs.$$.fragment,n),k(On.$$.fragment,n),k(Ts.$$.fragment,n),k(ks.$$.fragment,n),k(vs.$$.fragment,n),k(bs.$$.fragment,n),k(ws.$$.fragment,n),k(ys.$$.fragment,n),k(zs.$$.fragment,n),k(Ms.$$.fragment,n),k(Bn.$$.fragment,n),k(Ps.$$.fragment,n),k(Cs.$$.fragment,n),k(As.$$.fragment,n),k(Ls.$$.fragment,n),k(Ns.$$.fragment,n),k(Is.$$.fragment,n),k(Ds.$$.fragment,n),k(Ws.$$.fragment,n),k(Wn.$$.fragment,n),k(Rs.$$.fragment,n),k(Hs.$$.fragment,n),k(Vs.$$.fragment,n),k(Ks.$$.fragment,n),k(Ys.$$.fragment,n),k(Zs.$$.fragment,n),k(Js.$$.fragment,n),k(Hn.$$.fragment,n),k(oa.$$.fragment,n),k(Vn.$$.fragment,n),k(sa.$$.fragment,n),k(aa.$$.fragment,n),k(ra.$$.fragment,n),k(Yn.$$.fragment,n),k(ua.$$.fragment,n),k(Zn.$$.fragment,n),k(ma.$$.fragment,n),k(fa.$$.fragment,n),k(_a.$$.fragment,n),k(Xn.$$.fragment,n),k(wa.$$.fragment,n),k(Qn.$$.fragment,n),k(ya.$$.fragment,n),k(za.$$.fragment,n),k(xa.$$.fragment,n),k(to.$$.fragment,n),k($a.$$.fragment,n),k(qa.$$.fragment,n),k(Ea.$$.fragment,n),k(ja.$$.fragment,n),k(Fa.$$.fragment,n),k(Ma.$$.fragment,n),k(Pa.$$.fragment,n),k(oo.$$.fragment,n),k(Ca.$$.fragment,n),k(Aa.$$.fragment,n),k(La.$$.fragment,n),k(Na.$$.fragment,n),k(Ia.$$.fragment,n),$c=!1},d(n){t(u),n&&t($),n&&t(b),v(z),n&&t(oe),n&&t(E),v(se),n&&t(ke),n&&t(B),n&&t(C),n&&t(he),n&&t(ve),n&&t(ue),n&&t(be),n&&t(M),n&&t(H),n&&t(V),n&&t(Al),n&&t(Ga),n&&t(Ll),n&&t(Be),n&&t(Nl),n&&t(Ua),n&&t(Il),n&&t(xt),n&&t(Dl),n&&t($n),n&&t(Sl),n&&t($t),n&&t(Ol),n&&t(Va),n&&t(Gl),n&&t(Yt),v(vo),n&&t(Bl),n&&t(mt),n&&t(Ul),n&&t(En),n&&t(Wl),n&&t(jn),v(bo),v(zo),v($o),n&&t(Rl),n&&t(Za),n&&t(Hl),n&&t(qt),n&&t(Vl),n&&t(Ja),n&&t(Kl),n&&t(Xt),v(Mo),n&&t(Yl),n&&t(ft),n&&t(Zl),v(Ao,n),n&&t(Jl),n&&t(Ue),n&&t(Xl),n&&t(er),n&&t(Ql),v(Lo,n),n&&t(ec),n&&t(tr),n&&t(tc),n&&t(Qt),v(No),n&&t(nc),n&&t(nr),n&&t(oc),n&&t(Pn),n&&t(sc),n&&t(tn),v(Wo),n&&t(ac),n&&t(vt),v(Ro),n&&t(rc),n&&t(on),v(Vo),n&&t(ic),n&&t(ie),v(Ko),v(Xo),v(es),v(ns),n&&t(dc),n&&t(sn),v(os),n&&t(lc),n&&t(Se),v(ss),v(is),v(ls),n&&t(cc),n&&t(rn),v(cs),n&&t(pc),n&&t(J),v(ps),v(gs),v(On),v(Ts),v(ks),v(vs),v(bs),v(ws),n&&t(hc),n&&t(ln),v(ys),n&&t(uc),n&&t(X),v(zs),v(Ms),v(Bn),v(Ps),v(Cs),v(As),v(Ls),v(Ns),n&&t(mc),n&&t(pn),v(Is),n&&t(fc),n&&t(Q),v(Ds),v(Ws),v(Wn),v(Rs),v(Hs),v(Vs),v(Ks),v(Ys),n&&t(_c),n&&t(un),v(Zs),n&&t(gc),n&&t(de),v(Js),v(Hn),v(oa),v(Vn),v(sa),n&&t(Tc),n&&t(fn),v(aa),n&&t(kc),n&&t(le),v(ra),v(Yn),v(ua),v(Zn),v(ma),n&&t(vc),n&&t(gn),v(fa),n&&t(bc),n&&t(ce),v(_a),v(Xn),v(wa),v(Qn),v(ya),n&&t(wc),n&&t(kn),v(za),n&&t(yc),n&&t(wt),v(xa),v(to),v($a),v(qa),v(Ea),v(ja),v(Fa),n&&t(zc),n&&t(bn),v(Ma),n&&t(xc),n&&t(yt),v(Pa),v(oo),v(Ca),v(Aa),v(La),v(Na),v(Ia)}}}const Yw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function Zw(N,u,$){let{fw:b}=u;return N.$$set=y=>{"fw"in y&&$(0,b=y.fw)},[b]}class oy extends Cw{constructor(u){super();Aw(this,u,Zw,Kw,Lw,{fw:0})}}export{oy as default,Yw as metadata};
