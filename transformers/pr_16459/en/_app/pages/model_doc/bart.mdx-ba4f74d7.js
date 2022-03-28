import{S as Lw,i as Dw,s as Gw,e as n,k as d,w as m,t as r,M as Ww,c as a,d as t,m as l,a as s,x as f,h as i,b as c,F as e,g as u,y as _,q as g,o as k,B as b,v as Uw}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-abef54e3.js";import{C as M}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Q}from"../../chunks/IconCopyLink-7a11ce68.js";function Rw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("When used with "),T=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer will add a space before each word (even the first one).")},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"When used with "),T=a(y,"CODE",{});var q=s(T);w=i(q,"is_split_into_words=True"),q.forEach(t),x=i(y,", this tokenizer will add a space before each word (even the first one)."),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Hw(j){let p,z,T,w,x,v,y,q;return{c(){p=n("p"),z=r("When used with "),T=n("code"),w=r("is_split_into_words=True"),x=r(", this tokenizer needs to be instantiated with "),v=n("code"),y=r("add_prefix_space=True"),q=r(".")},l(se){p=a(se,"P",{});var A=s(p);z=i(A,"When used with "),T=a(A,"CODE",{});var $=s(T);w=i($,"is_split_into_words=True"),$.forEach(t),x=i(A,", this tokenizer needs to be instantiated with "),v=a(A,"CODE",{});var pe=s(v);y=i(pe,"add_prefix_space=True"),pe.forEach(t),q=i(A,"."),A.forEach(t)},m(se,A){u(se,p,A),e(p,z),e(p,T),e(T,w),e(p,x),e(p,v),e(v,y),e(p,q)},d(se){se&&t(p)}}}function Qw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Vw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Jw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Kw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Xw(j){let p,z,T,w,x,v,y,q,se,A,$,pe,be,tt,ye,Te,ot,Ze,V,N,Ue,re,C,O,nt,he,ue,at,J,st,rt,L,Me,ve,Ye,Z,ie,it,dt,K,lt,we,Re;return{c(){p=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),T=d(),w=n("ul"),x=n("li"),v=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),se=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),pe=r("This second option is useful when using "),be=n("code"),tt=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Te=n("code"),ot=r("model(inputs)"),Ze=r("."),V=d(),N=n("p"),Ue=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=d(),C=n("ul"),O=n("li"),nt=r("a single Tensor with "),he=n("code"),ue=r("input_ids"),at=r(" only and nothing else: "),J=n("code"),st=r("model(input_ids)"),rt=d(),L=n("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ye=r("model([input_ids, attention_mask])"),Z=r(" or "),ie=n("code"),it=r("model([input_ids, attention_mask, token_type_ids])"),dt=d(),K=n("li"),lt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=n("code"),Re=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=a(F,"P",{});var P=s(p);z=i(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),T=l(F),w=a(F,"UL",{});var H=s(w);x=a(H,"LI",{});var Dt=s(x);v=i(Dt,"having all inputs as keyword arguments (like PyTorch models), or"),Dt.forEach(t),y=l(H),q=a(H,"LI",{});var He=s(q);se=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),H.forEach(t),A=l(F),$=a(F,"P",{});var de=s($);pe=i(de,"This second option is useful when using "),be=a(de,"CODE",{});var Gt=s(be);tt=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ye=i(de,` method which currently requires having all the
tensors in the first argument of the model call function: `),Te=a(de,"CODE",{});var Qe=s(Te);ot=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(de,"."),de.forEach(t),V=l(F),N=a(F,"P",{});var Wt=s(N);Ue=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),re=l(F),C=a(F,"UL",{});var le=s(C);O=a(le,"LI",{});var me=s(O);nt=i(me,"a single Tensor with "),he=a(me,"CODE",{});var xe=s(he);ue=i(xe,"input_ids"),xe.forEach(t),at=i(me," only and nothing else: "),J=a(me,"CODE",{});var Pe=s(J);st=i(Pe,"model(input_ids)"),Pe.forEach(t),me.forEach(t),rt=l(le),L=a(le,"LI",{});var ce=s(L);Me=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ve=s(ve);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),Z=i(ce," or "),ie=a(ce,"CODE",{});var Ut=s(ie);it=i(Ut,"model([input_ids, attention_mask, token_type_ids])"),Ut.forEach(t),ce.forEach(t),dt=l(le),K=a(le,"LI",{});var Je=s(K);lt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=a(Je,"CODE",{});var Rt=s(we);Re=i(Rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Rt.forEach(t),Je.forEach(t),le.forEach(t)},m(F,P){u(F,p,P),e(p,z),u(F,T,P),u(F,w,P),e(w,x),e(x,v),e(w,y),e(w,q),e(q,se),u(F,A,P),u(F,$,P),e($,pe),e($,be),e(be,tt),e($,ye),e($,Te),e(Te,ot),e($,Ze),u(F,V,P),u(F,N,P),e(N,Ue),u(F,re,P),u(F,C,P),e(C,O),e(O,nt),e(O,he),e(he,ue),e(O,at),e(O,J),e(J,st),e(C,rt),e(C,L),e(L,Me),e(L,ve),e(ve,Ye),e(L,Z),e(L,ie),e(ie,it),e(C,dt),e(C,K),e(K,lt),e(K,we),e(we,Re)},d(F){F&&t(p),F&&t(T),F&&t(w),F&&t(A),F&&t($),F&&t(V),F&&t(N),F&&t(re),F&&t(C)}}}function Zw(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function Yw(j){let p,z,T,w,x,v,y,q,se,A,$,pe,be,tt,ye,Te,ot,Ze,V,N,Ue,re,C,O,nt,he,ue,at,J,st,rt,L,Me,ve,Ye,Z,ie,it,dt,K,lt,we,Re;return{c(){p=n("p"),z=r("TF 2.0 models accepts two formats as inputs:"),T=d(),w=n("ul"),x=n("li"),v=r("having all inputs as keyword arguments (like PyTorch models), or"),y=d(),q=n("li"),se=r("having all inputs as a list, tuple or dict in the first positional arguments."),A=d(),$=n("p"),pe=r("This second option is useful when using "),be=n("code"),tt=r("tf.keras.Model.fit"),ye=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),Te=n("code"),ot=r("model(inputs)"),Ze=r("."),V=d(),N=n("p"),Ue=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),re=d(),C=n("ul"),O=n("li"),nt=r("a single Tensor with "),he=n("code"),ue=r("input_ids"),at=r(" only and nothing else: "),J=n("code"),st=r("model(input_ids)"),rt=d(),L=n("li"),Me=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=n("code"),Ye=r("model([input_ids, attention_mask])"),Z=r(" or "),ie=n("code"),it=r("model([input_ids, attention_mask, token_type_ids])"),dt=d(),K=n("li"),lt=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=n("code"),Re=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(F){p=a(F,"P",{});var P=s(p);z=i(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),T=l(F),w=a(F,"UL",{});var H=s(w);x=a(H,"LI",{});var Dt=s(x);v=i(Dt,"having all inputs as keyword arguments (like PyTorch models), or"),Dt.forEach(t),y=l(H),q=a(H,"LI",{});var He=s(q);se=i(He,"having all inputs as a list, tuple or dict in the first positional arguments."),He.forEach(t),H.forEach(t),A=l(F),$=a(F,"P",{});var de=s($);pe=i(de,"This second option is useful when using "),be=a(de,"CODE",{});var Gt=s(be);tt=i(Gt,"tf.keras.Model.fit"),Gt.forEach(t),ye=i(de,` method which currently requires having all the
tensors in the first argument of the model call function: `),Te=a(de,"CODE",{});var Qe=s(Te);ot=i(Qe,"model(inputs)"),Qe.forEach(t),Ze=i(de,"."),de.forEach(t),V=l(F),N=a(F,"P",{});var Wt=s(N);Ue=i(Wt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Wt.forEach(t),re=l(F),C=a(F,"UL",{});var le=s(C);O=a(le,"LI",{});var me=s(O);nt=i(me,"a single Tensor with "),he=a(me,"CODE",{});var xe=s(he);ue=i(xe,"input_ids"),xe.forEach(t),at=i(me," only and nothing else: "),J=a(me,"CODE",{});var Pe=s(J);st=i(Pe,"model(input_ids)"),Pe.forEach(t),me.forEach(t),rt=l(le),L=a(le,"LI",{});var ce=s(L);Me=i(ce,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ve=a(ce,"CODE",{});var Ve=s(ve);Ye=i(Ve,"model([input_ids, attention_mask])"),Ve.forEach(t),Z=i(ce," or "),ie=a(ce,"CODE",{});var Ut=s(ie);it=i(Ut,"model([input_ids, attention_mask, token_type_ids])"),Ut.forEach(t),ce.forEach(t),dt=l(le),K=a(le,"LI",{});var Je=s(K);lt=i(Je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),we=a(Je,"CODE",{});var Rt=s(we);Re=i(Rt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Rt.forEach(t),Je.forEach(t),le.forEach(t)},m(F,P){u(F,p,P),e(p,z),u(F,T,P),u(F,w,P),e(w,x),e(x,v),e(w,y),e(w,q),e(q,se),u(F,A,P),u(F,$,P),e($,pe),e($,be),e(be,tt),e($,ye),e($,Te),e(Te,ot),e($,Ze),u(F,V,P),u(F,N,P),e(N,Ue),u(F,re,P),u(F,C,P),e(C,O),e(O,nt),e(O,he),e(he,ue),e(O,at),e(O,J),e(J,st),e(C,rt),e(C,L),e(L,Me),e(L,ve),e(ve,Ye),e(L,Z),e(L,ie),e(ie,it),e(C,dt),e(C,K),e(K,lt),e(K,we),e(we,Re)},d(F){F&&t(p),F&&t(T),F&&t(w),F&&t(A),F&&t($),F&&t(V),F&&t(N),F&&t(re),F&&t(C)}}}function ex(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function tx(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function ox(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function nx(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function ax(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function sx(j){let p,z,T,w,x;return{c(){p=n("p"),z=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),T=n("code"),w=r("Module"),x=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var y=s(p);z=i(y,"Although the recipe for forward pass needs to be defined within this function, one should call the "),T=a(y,"CODE",{});var q=s(T);w=i(q,"Module"),q.forEach(t),x=i(y,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),y.forEach(t)},m(v,y){u(v,p,y),e(p,z),e(p,T),e(T,w),e(p,x)},d(v){v&&t(p)}}}function rx(j){let p,z,T,w,x,v,y,q,se,A,$,pe,be,tt,ye,Te,ot,Ze,V,N,Ue,re,C,O,nt,he,ue,at,J,st,rt,L,Me,ve,Ye,Z,ie,it,dt,K,lt,we,Re,F,P,H,Dt,He,de,Gt,Qe,Wt,le,me,xe,Pe,ce,Ve,Ut,Je,Rt,ac,gt,xn,Lp,zn,Dp,Gp,Wp,ct,Up,br,Rp,Hp,Fi,Qp,Vp,Fn,Jp,Kp,Xp,jo,qn,Zp,Yp,Bn,eh,th,sc,Ht,Mo,qi,$n,oh,Bi,nh,rc,Ee,pt,ah,$i,sh,rh,yr,ih,dh,Tr,lh,ch,ph,Qt,hh,vr,uh,mh,ji,fh,_h,gh,Vt,kh,Mi,bh,yh,Pi,Th,vh,wh,wr,xr,xh,zh,Fh,Jt,qh,Ei,Bh,$h,Ci,jh,Mh,ic,Kt,Po,Ai,jn,Ph,Oi,Eh,dc,kt,Ch,Si,Ah,Oh,Ii,Sh,Ih,lc,Mn,cc,Xt,Eo,Ni,Pn,Nh,Li,Lh,pc,ze,En,Dh,Zt,Gh,zr,Wh,Uh,Cn,Rh,Hh,Qh,Yt,Vh,Fr,Jh,Kh,qr,Xh,Zh,Yh,Di,eu,tu,An,hc,eo,Co,Gi,On,ou,Wi,nu,uc,E,Sn,au,Ui,su,ru,Ri,iu,du,In,lu,Nn,cu,Hi,pu,hu,uu,Ao,mu,Ln,fu,Br,_u,gu,ku,bt,Dn,bu,Qi,yu,Tu,Gn,$r,vu,Vi,wu,xu,jr,zu,Ji,Fu,qu,Oo,Wn,Bu,Ki,$u,ju,So,Un,Mu,Xi,Pu,Eu,Io,Rn,Cu,Hn,Au,Zi,Ou,Su,mc,to,No,Yi,Qn,Iu,ed,Nu,fc,W,Vn,Lu,Jn,Du,td,Gu,Wu,Uu,od,Ru,Hu,Kn,Qu,Xn,Vu,nd,Ju,Ku,Xu,Lo,Zu,Zn,Yu,Mr,em,tm,om,Do,Yn,nm,ad,am,_c,oo,Go,sd,ea,sm,rd,rm,gc,Ke,ta,im,oa,dm,Pr,lm,cm,pm,na,hm,aa,um,mm,fm,Ce,sa,_m,no,gm,Er,km,bm,id,ym,Tm,vm,Wo,wm,dd,xm,zm,ra,kc,ao,Uo,ld,ia,Fm,cd,qm,bc,Xe,da,Bm,la,$m,Cr,jm,Mm,Pm,ca,Em,pa,Cm,Am,Om,Y,ha,Sm,so,Im,Ar,Nm,Lm,pd,Dm,Gm,Wm,Ro,Um,hd,Rm,Hm,ua,Qm,ud,Vm,Jm,ma,yc,ro,Ho,md,fa,Km,fd,Xm,Tc,Fe,_a,Zm,_d,Ym,ef,ga,tf,Or,of,nf,af,ka,sf,ba,rf,df,lf,D,ya,cf,io,pf,Sr,hf,uf,gd,mf,ff,_f,Qo,gf,kd,kf,bf,Ta,yf,va,Tf,bd,vf,wf,wa,xf,xa,vc,lo,Vo,yd,za,zf,Td,Ff,wc,qe,Fa,qf,co,Bf,vd,$f,jf,wd,Mf,Pf,Ef,qa,Cf,Ir,Af,Of,Sf,Ba,If,$a,Nf,Lf,Df,fe,ja,Gf,po,Wf,Nr,Uf,Rf,xd,Hf,Qf,Vf,Jo,Jf,zd,Kf,Xf,Ma,Zf,Pa,xc,ho,Ko,Fd,Ea,Yf,qd,e_,zc,uo,Ca,t_,yt,Aa,o_,Bd,n_,a_,Oa,Fc,mo,Xo,$d,Sa,s_,jd,r_,qc,Be,Ia,i_,Na,d_,Lr,l_,c_,p_,La,h_,Da,u_,m_,f_,Zo,__,Ae,Ga,g_,fo,k_,Dr,b_,y_,Md,T_,v_,w_,Yo,x_,Pd,z_,F_,Wa,Bc,_o,en,Ed,Ua,q_,Cd,B_,$c,$e,Ra,$_,Ha,j_,Gr,M_,P_,E_,Qa,C_,Va,A_,O_,S_,tn,I_,ee,Ja,N_,go,L_,Wr,D_,G_,Ad,W_,U_,R_,on,H_,Od,Q_,V_,Ka,J_,Sd,K_,X_,Xa,jc,ko,nn,Id,Za,Z_,Nd,Y_,Mc,U,Ya,eg,es,tg,Ur,og,ng,ag,ts,sg,os,rg,ig,dg,Ld,lg,cg,ht,Dd,ns,pg,hg,Gd,as,ug,mg,Wd,ss,fg,_g,Ud,rs,gg,kg,Oe,is,bg,bo,yg,Rd,Tg,vg,Hd,wg,xg,zg,an,Fg,Qd,qg,Bg,ds,$g,Tt,ls,jg,Vd,Mg,Pg,cs,Eg,vt,ps,Cg,Jd,Ag,Og,hs,Pc,yo,sn,Kd,us,Sg,Xd,Ig,Ec,R,ms,Ng,fs,Lg,Rr,Dg,Gg,Wg,_s,Ug,gs,Rg,Hg,Qg,Zd,Vg,Jg,ut,Yd,ks,Kg,Xg,el,bs,Zg,Yg,tl,ys,ek,tk,ol,Ts,ok,nk,te,vs,ak,To,sk,nl,rk,ik,al,dk,lk,ck,rn,pk,sl,hk,uk,ws,mk,rl,fk,_k,xs,gk,wt,zs,kk,il,bk,yk,Fs,Tk,xt,qs,vk,dl,wk,xk,Bs,Cc,vo,dn,ll,$s,zk,cl,Fk,Ac,S,js,qk,pl,Bk,$k,Ms,jk,Hr,Mk,Pk,Ek,Ps,Ck,Es,Ak,Ok,Sk,hl,Ik,Nk,mt,ul,Cs,Lk,Dk,ml,As,Gk,Wk,fl,Os,Uk,Rk,_l,Ss,Hk,Qk,Se,Is,Vk,wo,Jk,gl,Kk,Xk,kl,Zk,Yk,eb,ln,tb,bl,ob,nb,Ns,ab,zt,Ls,sb,yl,rb,ib,Ds,db,Ft,Gs,lb,Tl,cb,pb,Ws,Oc,xo,cn,vl,Us,hb,wl,ub,Sc,I,Rs,mb,zo,fb,xl,_b,gb,zl,kb,bb,yb,Hs,Tb,Qr,vb,wb,xb,Qs,zb,Vs,Fb,qb,Bb,Fl,$b,jb,ft,ql,Js,Mb,Pb,Bl,Ks,Eb,Cb,$l,Xs,Ab,Ob,jl,Zs,Sb,Ib,Ie,Ys,Nb,Fo,Lb,Ml,Db,Gb,Pl,Wb,Ub,Rb,pn,Hb,El,Qb,Vb,er,Jb,qt,tr,Kb,Cl,Xb,Zb,or,Yb,Bt,nr,ey,Al,ty,oy,ar,Ic,qo,hn,Ol,sr,ny,Sl,ay,Nc,X,rr,sy,Il,ry,iy,ir,dy,Vr,ly,cy,py,dr,hy,lr,uy,my,fy,Nl,_y,gy,_t,Ll,cr,ky,by,Dl,pr,yy,Ty,Gl,hr,vy,wy,Wl,ur,xy,zy,Ne,mr,Fy,Bo,qy,Ul,By,$y,Rl,jy,My,Py,un,Ey,Hl,Cy,Ay,fr,Lc;return v=new Q({}),re=new Q({}),Ve=new Q({}),$n=new Q({}),jn=new Q({}),Mn=new M({props:{code:`from transformers import BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large", forced_bos_token_id=0)
tok = BartTokenizer.from_pretrained("facebook/bart-large")
example_english_phrase = "UN Chief Says There Is No <mask> in Syria"
batch = tok(example_english_phrase, return_tensors="pt")
generated_ids = model.generate(batch["input_ids"])
assert tok.batch_decode(generated_ids, skip_special_tokens=True) == [
    "UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria"
]`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartForConditionalGeneration, BartTokenizer

model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, forced_bos_token_id=<span class="hljs-number">0</span>)
tok = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
example_english_phrase = <span class="hljs-string">&quot;UN Chief Says There Is No &lt;mask&gt; in Syria&quot;</span>
batch = tok(example_english_phrase, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
generated_ids = model.generate(batch[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-keyword">assert</span> tok.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>) == [
    <span class="hljs-string">&quot;UN Chief Says There Is No Plan to Stop Chemical Weapons in Syria&quot;</span>
]`}}),Pn=new Q({}),En=new B({props:{name:"class transformers.BartConfig",anchor:"transformers.BartConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"num_labels",val:" = 3"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/configuration_bart.py#L35",parametersDescription:[{anchor:"transformers.BartConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BART model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartModel">BartModel</a> or <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.TFBartModel">TFBartModel</a>.`,name:"vocab_size"},{anchor:"transformers.BartConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BartConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BartConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BartConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BartConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BartConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BartConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BartConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BartConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BartConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BartConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.BartConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BartConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.BartConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BartConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).
num_labels &#x2014; (<code>int</code>, <em>optional</em>, defaults to 3):
The number of labels to use in <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartForSequenceClassification">BartForSequenceClassification</a>.`,name:"use_cache"},{anchor:"transformers.BartConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}]}}),An=new M({props:{code:`from transformers import BartModel, BartConfig

# Initializing a BART facebook/bart-large style configuration
configuration = BartConfig()

# Initializing a model from the facebook/bart-large style configuration
model = BartModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartModel, BartConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BART facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BartConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/bart-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),On=new Q({}),Sn=new B({props:{name:"class transformers.BartTokenizer",anchor:"transformers.BartTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart.py#L101",parametersDescription:[{anchor:"transformers.BartTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}]}}),In=new M({props:{code:`from transformers import BartTokenizer
tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Ao=new je({props:{$$slots:{default:[Rw]},$$scope:{ctx:j}}}),Dn=new B({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart.py#L338",parametersDescription:[{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new B({props:{name:"convert_tokens_to_string",anchor:"transformers.BartTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart.py#L303"}}),Un=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart.py#L390",parametersDescription:[{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new B({props:{name:"get_special_tokens_mask",anchor:"transformers.BartTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart.py#L363",parametersDescription:[{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new Q({}),Vn=new B({props:{name:"class transformers.BartTokenizerFast",anchor:"transformers.BartTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart_fast.py#L70",parametersDescription:[{anchor:"transformers.BartTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BartTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BartTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BartTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BartTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}]}}),Kn=new M({props:{code:`from transformers import BartTokenizerFast
tokenizer = BartTokenizerFast.from_pretrained("facebook/bart-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = BartTokenizerFast.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),Lo=new je({props:{$$slots:{default:[Hw]},$$scope:{ctx:j}}}),Yn=new B({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/tokenization_bart_fast.py#L282",parametersDescription:[{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new Q({}),ta=new B({props:{name:"class transformers.BartModel",anchor:"transformers.BartModel",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1138",parametersDescription:[{anchor:"transformers.BartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sa=new B({props:{name:"forward",anchor:"transformers.BartModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1165",parametersDescription:[{anchor:"transformers.BartModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new je({props:{$$slots:{default:[Qw]},$$scope:{ctx:j}}}),ra=new M({props:{code:`from transformers import BartTokenizer, BartModel
import torch

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ia=new Q({}),da=new B({props:{name:"class transformers.BartForConditionalGeneration",anchor:"transformers.BartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1265",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ha=new B({props:{name:"forward",anchor:"transformers.BartForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1304",parametersDescription:[{anchor:"transformers.BartForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new je({props:{$$slots:{default:[Vw]},$$scope:{ctx:j}}}),ua=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

model = BartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = (
    "PG&E stated it scheduled the blackouts in response to forecasts for high winds "
    "amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were "
    "scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow."
)
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="pt")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=2, max_length=20)
tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;PG&amp;E stated it scheduled the blackouts in response to forecasts for high winds &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;amid dry conditions. The aim is to reduce the risk of wildfires. Nearly 800 thousand customers were &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;scheduled to be affected by the shutoffs which were expected to last through at least midday tomorrow.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">2</span>, max_length=<span class="hljs-number">20</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;PG&amp;E scheduled the blackouts in response to forecasts for high winds amid dry conditions&#x27;</span>`}}),ma=new M({props:{code:`from transformers import BartTokenizer, BartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForConditionalGeneration.from_pretrained("facebook/bart-base")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="pt")["input_ids"]
logits = model(input_ids).logits

masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()
[<span class="hljs-string">&#x27;not&#x27;</span>, <span class="hljs-string">&#x27;good&#x27;</span>, <span class="hljs-string">&#x27;healthy&#x27;</span>, <span class="hljs-string">&#x27;great&#x27;</span>, <span class="hljs-string">&#x27;very&#x27;</span>]`}}),fa=new Q({}),_a=new B({props:{name:"class transformers.BartForSequenceClassification",anchor:"transformers.BartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1434",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ya=new B({props:{name:"forward",anchor:"transformers.BartForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1447",parametersDescription:[{anchor:"transformers.BartForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new je({props:{$$slots:{default:[Jw]},$$scope:{ctx:j}}}),Ta=new M({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("moussaKam/barthez-sentiment-classification")
model = BartForSequenceClassification.from_pretrained("moussaKam/barthez-sentiment-classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),va=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained("moussaKam/barthez-sentiment-classification", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),wa=new M({props:{code:`import torch
from transformers import BartTokenizer, BartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("moussaKam/barthez-sentiment-classification")
model = BartForSequenceClassification.from_pretrained("moussaKam/barthez-sentiment-classification", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]`}}),xa=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BartForSequenceClassification.from_pretrained("moussaKam/barthez-sentiment-classification", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;moussaKam/barthez-sentiment-classification&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),za=new Q({}),Fa=new B({props:{name:"class transformers.BartForQuestionAnswering",anchor:"transformers.BartForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1560",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ja=new B({props:{name:"forward",anchor:"transformers.BartForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1572",parametersDescription:[{anchor:"transformers.BartForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_bart._prepare_decoder_inputs</code> and
modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information
on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BartForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
convert <code>input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"past_key_values"},{anchor:"transformers.BartForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BartForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BartForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BartForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BartForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new je({props:{$$slots:{default:[Kw]},$$scope:{ctx:j}}}),Ma=new M({props:{code:`from transformers import BartTokenizer, BartForQuestionAnswering
import torch

tokenizer = BartTokenizer.from_pretrained("phiyodr/bart-large-finetuned-squad2")
model = BartForQuestionAnswering.from_pretrained("phiyodr/bart-large-finetuned-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;phiyodr/bart-large-finetuned-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;phiyodr/bart-large-finetuned-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
[<span class="hljs-number">1</span>, <span class="hljs-number">17</span>]`}}),Pa=new M({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.98</span>`}}),Ea=new Q({}),Ca=new B({props:{name:"class transformers.BartForCausalLM",anchor:"transformers.BartForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1690"}}),Aa=new B({props:{name:"forward",anchor:"transformers.BartForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_bart.py#L1721",parametersDescription:[{anchor:"transformers.BartForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BartForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BartForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BartForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BartForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BartForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BartForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BartForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BartForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BartForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BartForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new M({props:{code:`from transformers import BartTokenizer, BartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = BartForCausalLM.from_pretrained("facebook/bart-base", add_cross_attention=False)
assert model.config.is_decoder, f"{model.__class__} has to be configured as a decoder."
inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
expected_shape = [1, inputs.input_ids.shape[-1], model.config.vocab_size]
list(logits.shape) == expected_shape`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, BartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`}}),Sa=new Q({}),Ia=new B({props:{name:"class transformers.TFBartModel",anchor:"transformers.TFBartModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_tf_bart.py#L1129",parametersDescription:[{anchor:"transformers.TFBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zo=new je({props:{$$slots:{default:[Xw]},$$scope:{ctx:j}}}),Ga=new B({props:{name:"call",anchor:"transformers.TFBartModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[typing.Tuple, transformers.modeling_tf_outputs.TFBaseModelOutput, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_tf_bart.py#L1144",parametersDescription:[{anchor:"transformers.TFBartModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new je({props:{$$slots:{default:[Zw]},$$scope:{ctx:j}}}),Wa=new M({props:{code:`from transformers import BartTokenizer, TFBartModel
import tensorflow as tf

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
model = TFBartModel.from_pretrained("facebook/bart-large")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ua=new Q({}),Ra=new B({props:{name:"class transformers.TFBartForConditionalGeneration",anchor:"transformers.TFBartForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_tf_bart.py#L1218",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tn=new je({props:{$$slots:{default:[Yw]},$$scope:{ctx:j}}}),Ja=new B({props:{name:"call",anchor:"transformers.TFBartForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Optional[transformers.modeling_tf_outputs.TFBaseModelOutput] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_tf_bart.py#L1253",parametersDescription:[{anchor:"transformers.TFBartForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBartForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBartForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBartForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBartForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBartForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBartForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBartForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new je({props:{$$slots:{default:[ex]},$$scope:{ctx:j}}}),Ka=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="tf")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"], num_beams=4, max_length=5)
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], num_beams=<span class="hljs-number">4</span>, max_length=<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),Xa=new M({props:{code:`from transformers import BartTokenizer, TFBartForConditionalGeneration

tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")
TXT = "My friends are <mask> but they eat too many carbs."

model = TFBartForConditionalGeneration.from_pretrained("facebook/bart-large")
input_ids = tokenizer([TXT], return_tensors="tf")["input_ids"]
logits = model(input_ids).logits
probs = tf.nn.softmax(logits[0])
# probs[5] is associated with the mask token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, TFBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`}}),Za=new Q({}),Ya=new B({props:{name:"class transformers.FlaxBartModel",anchor:"transformers.FlaxBartModel",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1229",parametersDescription:[{anchor:"transformers.FlaxBartModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),is=new B({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1164",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new je({props:{$$slots:{default:[tx]},$$scope:{ctx:j}}}),ds=new M({props:{code:`from transformers import BartTokenizer, FlaxBartModel

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartModel.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartModel.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ls=new B({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L987",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),ps=new B({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1050",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),us=new Q({}),ms=new B({props:{name:"class transformers.FlaxBartForConditionalGeneration",anchor:"transformers.FlaxBartForConditionalGeneration",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1315",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),vs=new B({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1164",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new je({props:{$$slots:{default:[ox]},$$scope:{ctx:j}}}),ws=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

ARTICLE_TO_SUMMARIZE = "My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=1024, return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),xs=new M({props:{code:`import jax
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large")

TXT = "My friends are <mask> but they eat too many carbs."
input_ids = tokenizer([TXT], return_tensors="jax")["input_ids"]

logits = model(input_ids).logits
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero()[0].item()
probs = jax.nn.softmax(logits[0, masked_index], axis=0)
values, predictions = jax.lax.top_k(probs, k=1)

tokenizer.decode(predictions).split()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero()[<span class="hljs-number">0</span>].item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs, k=<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`}}),zs=new B({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L987",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),qs=new B({props:{name:"decode",anchor:"transformers.FlaxBartForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1319",parametersDescription:[{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$s=new Q({}),js=new B({props:{name:"class transformers.FlaxBartForSequenceClassification",anchor:"transformers.FlaxBartForSequenceClassification",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1628",parametersDescription:[{anchor:"transformers.FlaxBartForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Is=new B({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1164",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new je({props:{$$slots:{default:[nx]},$$scope:{ctx:j}}}),Ns=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForSequenceClassification

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForSequenceClassification.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ls=new B({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L987",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),Gs=new B({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1050",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),Us=new Q({}),Rs=new B({props:{name:"class transformers.FlaxBartForQuestionAnswering",anchor:"transformers.FlaxBartForQuestionAnswering",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1715",parametersDescription:[{anchor:"transformers.FlaxBartForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Ys=new B({props:{name:"__call__",anchor:"transformers.FlaxBartPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1164",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new je({props:{$$slots:{default:[ax]},$$scope:{ctx:j}}}),er=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForQuestionAnswering

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForQuestionAnswering.from_pretrained("facebook/bart-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),tr=new B({props:{name:"encode",anchor:"transformers.FlaxBartPreTrainedModel.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L987",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),or=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),nr=new B({props:{name:"decode",anchor:"transformers.FlaxBartPreTrainedModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1050",parametersDescription:[{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartPreTrainedModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.bart.configuration_bart.BartConfig'&gt;</code>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ar=new M({props:{code:`import jax.numpy as jnp
from transformers import BartTokenizer, FlaxBartForConditionalGeneration

model = FlaxBartForConditionalGeneration.from_pretrained("facebook/bart-large-cnn")
tokenizer = BartTokenizer.from_pretrained("facebook/bart-large-cnn")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, max_length=1024, return_tensors="jax")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
last_decoder_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large-cnn&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`}}),sr=new Q({}),rr=new B({props:{name:"class transformers.FlaxBartForCausalLM",anchor:"transformers.FlaxBartForCausalLM",parameters:[{name:"config",val:": BartConfig"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1951",parametersDescription:[{anchor:"transformers.FlaxBartForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig">BartConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBartForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),mr=new B({props:{name:"__call__",anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"position_ids",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_hidden_states",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16459/src/transformers/models/bart/modeling_flax_bart.py#L1789",parametersDescription:[{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. See <a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBartDecoderPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16459/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartConfig"
>BartConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16459/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),un=new je({props:{$$slots:{default:[sx]},$$scope:{ctx:j}}}),fr=new M({props:{code:`from transformers import BartTokenizer, FlaxBartForCausalLM

tokenizer = BartTokenizer.from_pretrained("facebook/bart-base")
model = FlaxBartForCausalLM.from_pretrained("facebook/bart-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BartTokenizer, FlaxBartForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BartTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBartForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/bart-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=n("meta"),z=d(),T=n("h1"),w=n("a"),x=n("span"),m(v.$$.fragment),y=d(),q=n("span"),se=r("BART"),A=d(),$=n("p"),pe=n("strong"),be=r("DISCLAIMER:"),tt=r(" If you see something strange, file a "),ye=n("a"),Te=r("Github Issue"),ot=r(` and assign
@patrickvonplaten`),Ze=d(),V=n("h2"),N=n("a"),Ue=n("span"),m(re.$$.fragment),C=d(),O=n("span"),nt=r("Overview"),he=d(),ue=n("p"),at=r("The Bart model was proposed in "),J=n("a"),st=r(`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),rt=r(` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),L=d(),Me=n("p"),ve=r("According to the abstract,"),Ye=d(),Z=n("ul"),ie=n("li"),it=r(`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),dt=d(),K=n("li"),lt=r(`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),we=d(),Re=n("li"),F=r(`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),P=d(),H=n("p"),Dt=r("This model was contributed by "),He=n("a"),de=r("sshleifer"),Gt=r(". The Authors\u2019 code can be found "),Qe=n("a"),Wt=r("here"),le=r("."),me=d(),xe=n("h3"),Pe=n("a"),ce=n("span"),m(Ve.$$.fragment),Ut=d(),Je=n("span"),Rt=r("Examples"),ac=d(),gt=n("ul"),xn=n("li"),Lp=r(`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),zn=n("a"),Dp=r("examples/pytorch/summarization/"),Gp=r("."),Wp=d(),ct=n("li"),Up=r("An example of how to train "),br=n("a"),Rp=r("BartForConditionalGeneration"),Hp=r(" with a Hugging Face "),Fi=n("code"),Qp=r("datasets"),Vp=r(`
object can be found in this `),Fn=n("a"),Jp=r("forum discussion"),Kp=r("."),Xp=d(),jo=n("li"),qn=n("a"),Zp=r("Distilled checkpoints"),Yp=r(" are described in this "),Bn=n("a"),eh=r("paper"),th=r("."),sc=d(),Ht=n("h2"),Mo=n("a"),qi=n("span"),m($n.$$.fragment),oh=d(),Bi=n("span"),nh=r("Implementation Notes"),rc=d(),Ee=n("ul"),pt=n("li"),ah=r("Bart doesn\u2019t use "),$i=n("code"),sh=r("token_type_ids"),rh=r(" for sequence classification. Use "),yr=n("a"),ih=r("BartTokenizer"),dh=r(` or
`),Tr=n("a"),lh=r("encode()"),ch=r(" to get the proper splitting."),ph=d(),Qt=n("li"),hh=r("The forward pass of "),vr=n("a"),uh=r("BartModel"),mh=r(" will create the "),ji=n("code"),fh=r("decoder_input_ids"),_h=r(` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),gh=d(),Vt=n("li"),kh=r(`Model predictions are intended to be identical to the original implementation when
`),Mi=n("code"),bh=r("forced_bos_token_id=0"),yh=r(`. This only works, however, if the string you pass to
`),Pi=n("code"),Th=r("fairseq.encode"),vh=r(" starts with a space."),wh=d(),wr=n("li"),xr=n("a"),xh=r("generate()"),zh=r(` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Fh=d(),Jt=n("li"),qh=r("Models that load the "),Ei=n("em"),Bh=r("facebook/bart-large-cnn"),$h=r(" weights will not have a "),Ci=n("code"),jh=r("mask_token_id"),Mh=r(`, or be able to perform
mask-filling tasks.`),ic=d(),Kt=n("h2"),Po=n("a"),Ai=n("span"),m(jn.$$.fragment),Ph=d(),Oi=n("span"),Eh=r("Mask Filling"),dc=d(),kt=n("p"),Ch=r("The "),Si=n("code"),Ah=r("facebook/bart-base"),Oh=r(" and "),Ii=n("code"),Sh=r("facebook/bart-large"),Ih=r(" checkpoints can be used to fill multi-token masks."),lc=d(),m(Mn.$$.fragment),cc=d(),Xt=n("h2"),Eo=n("a"),Ni=n("span"),m(Pn.$$.fragment),Nh=d(),Li=n("span"),Lh=r("BartConfig"),pc=d(),ze=n("div"),m(En.$$.fragment),Dh=d(),Zt=n("p"),Gh=r("This is the configuration class to store the configuration of a "),zr=n("a"),Wh=r("BartModel"),Uh=r(`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Cn=n("a"),Rh=r("facebook/bart-large"),Hh=r(" architecture."),Qh=d(),Yt=n("p"),Vh=r("Configuration objects inherit from "),Fr=n("a"),Jh=r("PretrainedConfig"),Kh=r(` and can be used to control the model outputs. Read the
documentation from `),qr=n("a"),Xh=r("PretrainedConfig"),Zh=r(" for more information."),Yh=d(),Di=n("p"),eu=r("Example:"),tu=d(),m(An.$$.fragment),hc=d(),eo=n("h2"),Co=n("a"),Gi=n("span"),m(On.$$.fragment),ou=d(),Wi=n("span"),nu=r("BartTokenizer"),uc=d(),E=n("div"),m(Sn.$$.fragment),au=d(),Ui=n("p"),su=r("Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),ru=d(),Ri=n("p"),iu=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),du=d(),m(In.$$.fragment),lu=d(),Nn=n("p"),cu=r("You can get around that behavior by passing "),Hi=n("code"),pu=r("add_prefix_space=True"),hu=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),uu=d(),m(Ao.$$.fragment),mu=d(),Ln=n("p"),fu=r("This tokenizer inherits from "),Br=n("a"),_u=r("PreTrainedTokenizer"),gu=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ku=d(),bt=n("div"),m(Dn.$$.fragment),bu=d(),Qi=n("p"),yu=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),Tu=d(),Gn=n("ul"),$r=n("li"),vu=r("single sequence: "),Vi=n("code"),wu=r("<s> X </s>"),xu=d(),jr=n("li"),zu=r("pair of sequences: "),Ji=n("code"),Fu=r("<s> A </s></s> B </s>"),qu=d(),Oo=n("div"),m(Wn.$$.fragment),Bu=d(),Ki=n("p"),$u=r("Converts a sequence of tokens (string) in a single string."),ju=d(),So=n("div"),m(Un.$$.fragment),Mu=d(),Xi=n("p"),Pu=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),Eu=d(),Io=n("div"),m(Rn.$$.fragment),Cu=d(),Hn=n("p"),Au=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=n("code"),Ou=r("prepare_for_model"),Su=r(" method."),mc=d(),to=n("h2"),No=n("a"),Yi=n("span"),m(Qn.$$.fragment),Iu=d(),ed=n("span"),Nu=r("BartTokenizerFast"),fc=d(),W=n("div"),m(Vn.$$.fragment),Lu=d(),Jn=n("p"),Du=r("Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),td=n("em"),Gu=r("tokenizers"),Wu=r(` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),Uu=d(),od=n("p"),Ru=r(`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),Hu=d(),m(Kn.$$.fragment),Qu=d(),Xn=n("p"),Vu=r("You can get around that behavior by passing "),nd=n("code"),Ju=r("add_prefix_space=True"),Ku=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Xu=d(),m(Lo.$$.fragment),Zu=d(),Zn=n("p"),Yu=r("This tokenizer inherits from "),Mr=n("a"),em=r("PreTrainedTokenizerFast"),tm=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),om=d(),Do=n("div"),m(Yn.$$.fragment),nm=d(),ad=n("p"),am=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),_c=d(),oo=n("h2"),Go=n("a"),sd=n("span"),m(ea.$$.fragment),sm=d(),rd=n("span"),rm=r("BartModel"),gc=d(),Ke=n("div"),m(ta.$$.fragment),im=d(),oa=n("p"),dm=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pr=n("a"),lm=r("PreTrainedModel"),cm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pm=d(),na=n("p"),hm=r("This model is also a PyTorch "),aa=n("a"),um=r("torch.nn.Module"),mm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fm=d(),Ce=n("div"),m(sa.$$.fragment),_m=d(),no=n("p"),gm=r("The "),Er=n("a"),km=r("BartModel"),bm=r(" forward method, overrides the "),id=n("code"),ym=r("__call__"),Tm=r(" special method."),vm=d(),m(Wo.$$.fragment),wm=d(),dd=n("p"),xm=r("Example:"),zm=d(),m(ra.$$.fragment),kc=d(),ao=n("h2"),Uo=n("a"),ld=n("span"),m(ia.$$.fragment),Fm=d(),cd=n("span"),qm=r("BartForConditionalGeneration"),bc=d(),Xe=n("div"),m(da.$$.fragment),Bm=d(),la=n("p"),$m=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cr=n("a"),jm=r("PreTrainedModel"),Mm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pm=d(),ca=n("p"),Em=r("This model is also a PyTorch "),pa=n("a"),Cm=r("torch.nn.Module"),Am=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Om=d(),Y=n("div"),m(ha.$$.fragment),Sm=d(),so=n("p"),Im=r("The "),Ar=n("a"),Nm=r("BartForConditionalGeneration"),Lm=r(" forward method, overrides the "),pd=n("code"),Dm=r("__call__"),Gm=r(" special method."),Wm=d(),m(Ro.$$.fragment),Um=d(),hd=n("p"),Rm=r("Summarization example:"),Hm=d(),m(ua.$$.fragment),Qm=d(),ud=n("p"),Vm=r("Mask filling example:"),Jm=d(),m(ma.$$.fragment),yc=d(),ro=n("h2"),Ho=n("a"),md=n("span"),m(fa.$$.fragment),Km=d(),fd=n("span"),Xm=r("BartForSequenceClassification"),Tc=d(),Fe=n("div"),m(_a.$$.fragment),Zm=d(),_d=n("p"),Ym=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),ef=d(),ga=n("p"),tf=r("This model inherits from "),Or=n("a"),of=r("PreTrainedModel"),nf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af=d(),ka=n("p"),sf=r("This model is also a PyTorch "),ba=n("a"),rf=r("torch.nn.Module"),df=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lf=d(),D=n("div"),m(ya.$$.fragment),cf=d(),io=n("p"),pf=r("The "),Sr=n("a"),hf=r("BartForSequenceClassification"),uf=r(" forward method, overrides the "),gd=n("code"),mf=r("__call__"),ff=r(" special method."),_f=d(),m(Qo.$$.fragment),gf=d(),kd=n("p"),kf=r("Example of single-label classification:"),bf=d(),m(Ta.$$.fragment),yf=d(),m(va.$$.fragment),Tf=d(),bd=n("p"),vf=r("Example of multi-label classification:"),wf=d(),m(wa.$$.fragment),xf=d(),m(xa.$$.fragment),vc=d(),lo=n("h2"),Vo=n("a"),yd=n("span"),m(za.$$.fragment),zf=d(),Td=n("span"),Ff=r("BartForQuestionAnswering"),wc=d(),qe=n("div"),m(Fa.$$.fragment),qf=d(),co=n("p"),Bf=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),vd=n("code"),$f=r("span start logits"),jf=r(" and "),wd=n("code"),Mf=r("span end logits"),Pf=r(")."),Ef=d(),qa=n("p"),Cf=r("This model inherits from "),Ir=n("a"),Af=r("PreTrainedModel"),Of=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sf=d(),Ba=n("p"),If=r("This model is also a PyTorch "),$a=n("a"),Nf=r("torch.nn.Module"),Lf=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Df=d(),fe=n("div"),m(ja.$$.fragment),Gf=d(),po=n("p"),Wf=r("The "),Nr=n("a"),Uf=r("BartForQuestionAnswering"),Rf=r(" forward method, overrides the "),xd=n("code"),Hf=r("__call__"),Qf=r(" special method."),Vf=d(),m(Jo.$$.fragment),Jf=d(),zd=n("p"),Kf=r("Example:"),Xf=d(),m(Ma.$$.fragment),Zf=d(),m(Pa.$$.fragment),xc=d(),ho=n("h2"),Ko=n("a"),Fd=n("span"),m(Ea.$$.fragment),Yf=d(),qd=n("span"),e_=r("BartForCausalLM"),zc=d(),uo=n("div"),m(Ca.$$.fragment),t_=d(),yt=n("div"),m(Aa.$$.fragment),o_=d(),Bd=n("p"),n_=r("Example:"),a_=d(),m(Oa.$$.fragment),Fc=d(),mo=n("h2"),Xo=n("a"),$d=n("span"),m(Sa.$$.fragment),s_=d(),jd=n("span"),r_=r("TFBartModel"),qc=d(),Be=n("div"),m(Ia.$$.fragment),i_=d(),Na=n("p"),d_=r(`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=n("a"),l_=r("TFPreTrainedModel"),c_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p_=d(),La=n("p"),h_=r("This model is also a "),Da=n("a"),u_=r("tf.keras.Model"),m_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f_=d(),m(Zo.$$.fragment),__=d(),Ae=n("div"),m(Ga.$$.fragment),g_=d(),fo=n("p"),k_=r("The "),Dr=n("a"),b_=r("TFBartModel"),y_=r(" forward method, overrides the "),Md=n("code"),T_=r("__call__"),v_=r(" special method."),w_=d(),m(Yo.$$.fragment),x_=d(),Pd=n("p"),z_=r("Example:"),F_=d(),m(Wa.$$.fragment),Bc=d(),_o=n("h2"),en=n("a"),Ed=n("span"),m(Ua.$$.fragment),q_=d(),Cd=n("span"),B_=r("TFBartForConditionalGeneration"),$c=d(),$e=n("div"),m(Ra.$$.fragment),$_=d(),Ha=n("p"),j_=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=n("a"),M_=r("TFPreTrainedModel"),P_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E_=d(),Qa=n("p"),C_=r("This model is also a "),Va=n("a"),A_=r("tf.keras.Model"),O_=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S_=d(),m(tn.$$.fragment),I_=d(),ee=n("div"),m(Ja.$$.fragment),N_=d(),go=n("p"),L_=r("The "),Wr=n("a"),D_=r("TFBartForConditionalGeneration"),G_=r(" forward method, overrides the "),Ad=n("code"),W_=r("__call__"),U_=r(" special method."),R_=d(),m(on.$$.fragment),H_=d(),Od=n("p"),Q_=r("Summarization example:"),V_=d(),m(Ka.$$.fragment),J_=d(),Sd=n("p"),K_=r("Mask filling example:"),X_=d(),m(Xa.$$.fragment),jc=d(),ko=n("h2"),nn=n("a"),Id=n("span"),m(Za.$$.fragment),Z_=d(),Nd=n("span"),Y_=r("FlaxBartModel"),Mc=d(),U=n("div"),m(Ya.$$.fragment),eg=d(),es=n("p"),tg=r(`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ur=n("a"),og=r("FlaxPreTrainedModel"),ng=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag=d(),ts=n("p"),sg=r(`This model is also a Flax Linen
`),os=n("a"),rg=r("flax.nn.Module"),ig=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),dg=d(),Ld=n("p"),lg=r("Finally, this model supports inherent JAX features such as:"),cg=d(),ht=n("ul"),Dd=n("li"),ns=n("a"),pg=r("Just-In-Time (JIT) compilation"),hg=d(),Gd=n("li"),as=n("a"),ug=r("Automatic Differentiation"),mg=d(),Wd=n("li"),ss=n("a"),fg=r("Vectorization"),_g=d(),Ud=n("li"),rs=n("a"),gg=r("Parallelization"),kg=d(),Oe=n("div"),m(is.$$.fragment),bg=d(),bo=n("p"),yg=r("The "),Rd=n("code"),Tg=r("FlaxBartPreTrainedModel"),vg=r("forward method, overrides the "),Hd=n("code"),wg=r("__call__"),xg=r(" special method."),zg=d(),m(an.$$.fragment),Fg=d(),Qd=n("p"),qg=r("Example:"),Bg=d(),m(ds.$$.fragment),$g=d(),Tt=n("div"),m(ls.$$.fragment),jg=d(),Vd=n("p"),Mg=r("Example:"),Pg=d(),m(cs.$$.fragment),Eg=d(),vt=n("div"),m(ps.$$.fragment),Cg=d(),Jd=n("p"),Ag=r("Example:"),Og=d(),m(hs.$$.fragment),Pc=d(),yo=n("h2"),sn=n("a"),Kd=n("span"),m(us.$$.fragment),Sg=d(),Xd=n("span"),Ig=r("FlaxBartForConditionalGeneration"),Ec=d(),R=n("div"),m(ms.$$.fragment),Ng=d(),fs=n("p"),Lg=r(`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rr=n("a"),Dg=r("FlaxPreTrainedModel"),Gg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg=d(),_s=n("p"),Ug=r(`This model is also a Flax Linen
`),gs=n("a"),Rg=r("flax.nn.Module"),Hg=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Qg=d(),Zd=n("p"),Vg=r("Finally, this model supports inherent JAX features such as:"),Jg=d(),ut=n("ul"),Yd=n("li"),ks=n("a"),Kg=r("Just-In-Time (JIT) compilation"),Xg=d(),el=n("li"),bs=n("a"),Zg=r("Automatic Differentiation"),Yg=d(),tl=n("li"),ys=n("a"),ek=r("Vectorization"),tk=d(),ol=n("li"),Ts=n("a"),ok=r("Parallelization"),nk=d(),te=n("div"),m(vs.$$.fragment),ak=d(),To=n("p"),sk=r("The "),nl=n("code"),rk=r("FlaxBartPreTrainedModel"),ik=r("forward method, overrides the "),al=n("code"),dk=r("__call__"),lk=r(" special method."),ck=d(),m(rn.$$.fragment),pk=d(),sl=n("p"),hk=r("Summarization example:"),uk=d(),m(ws.$$.fragment),mk=d(),rl=n("p"),fk=r("Mask filling example:"),_k=d(),m(xs.$$.fragment),gk=d(),wt=n("div"),m(zs.$$.fragment),kk=d(),il=n("p"),bk=r("Example:"),yk=d(),m(Fs.$$.fragment),Tk=d(),xt=n("div"),m(qs.$$.fragment),vk=d(),dl=n("p"),wk=r("Example:"),xk=d(),m(Bs.$$.fragment),Cc=d(),vo=n("h2"),dn=n("a"),ll=n("span"),m($s.$$.fragment),zk=d(),cl=n("span"),Fk=r("FlaxBartForSequenceClassification"),Ac=d(),S=n("div"),m(js.$$.fragment),qk=d(),pl=n("p"),Bk=r(`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),$k=d(),Ms=n("p"),jk=r("This model inherits from "),Hr=n("a"),Mk=r("FlaxPreTrainedModel"),Pk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ek=d(),Ps=n("p"),Ck=r(`This model is also a Flax Linen
`),Es=n("a"),Ak=r("flax.nn.Module"),Ok=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Sk=d(),hl=n("p"),Ik=r("Finally, this model supports inherent JAX features such as:"),Nk=d(),mt=n("ul"),ul=n("li"),Cs=n("a"),Lk=r("Just-In-Time (JIT) compilation"),Dk=d(),ml=n("li"),As=n("a"),Gk=r("Automatic Differentiation"),Wk=d(),fl=n("li"),Os=n("a"),Uk=r("Vectorization"),Rk=d(),_l=n("li"),Ss=n("a"),Hk=r("Parallelization"),Qk=d(),Se=n("div"),m(Is.$$.fragment),Vk=d(),wo=n("p"),Jk=r("The "),gl=n("code"),Kk=r("FlaxBartPreTrainedModel"),Xk=r("forward method, overrides the "),kl=n("code"),Zk=r("__call__"),Yk=r(" special method."),eb=d(),m(ln.$$.fragment),tb=d(),bl=n("p"),ob=r("Example:"),nb=d(),m(Ns.$$.fragment),ab=d(),zt=n("div"),m(Ls.$$.fragment),sb=d(),yl=n("p"),rb=r("Example:"),ib=d(),m(Ds.$$.fragment),db=d(),Ft=n("div"),m(Gs.$$.fragment),lb=d(),Tl=n("p"),cb=r("Example:"),pb=d(),m(Ws.$$.fragment),Oc=d(),xo=n("h2"),cn=n("a"),vl=n("span"),m(Us.$$.fragment),hb=d(),wl=n("span"),ub=r("FlaxBartForQuestionAnswering"),Sc=d(),I=n("div"),m(Rs.$$.fragment),mb=d(),zo=n("p"),fb=r(`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),xl=n("code"),_b=r("span start logits"),gb=r(" and "),zl=n("code"),kb=r("span end logits"),bb=r(")."),yb=d(),Hs=n("p"),Tb=r("This model inherits from "),Qr=n("a"),vb=r("FlaxPreTrainedModel"),wb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xb=d(),Qs=n("p"),zb=r(`This model is also a Flax Linen
`),Vs=n("a"),Fb=r("flax.nn.Module"),qb=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Bb=d(),Fl=n("p"),$b=r("Finally, this model supports inherent JAX features such as:"),jb=d(),ft=n("ul"),ql=n("li"),Js=n("a"),Mb=r("Just-In-Time (JIT) compilation"),Pb=d(),Bl=n("li"),Ks=n("a"),Eb=r("Automatic Differentiation"),Cb=d(),$l=n("li"),Xs=n("a"),Ab=r("Vectorization"),Ob=d(),jl=n("li"),Zs=n("a"),Sb=r("Parallelization"),Ib=d(),Ie=n("div"),m(Ys.$$.fragment),Nb=d(),Fo=n("p"),Lb=r("The "),Ml=n("code"),Db=r("FlaxBartPreTrainedModel"),Gb=r("forward method, overrides the "),Pl=n("code"),Wb=r("__call__"),Ub=r(" special method."),Rb=d(),m(pn.$$.fragment),Hb=d(),El=n("p"),Qb=r("Example:"),Vb=d(),m(er.$$.fragment),Jb=d(),qt=n("div"),m(tr.$$.fragment),Kb=d(),Cl=n("p"),Xb=r("Example:"),Zb=d(),m(or.$$.fragment),Yb=d(),Bt=n("div"),m(nr.$$.fragment),ey=d(),Al=n("p"),ty=r("Example:"),oy=d(),m(ar.$$.fragment),Ic=d(),qo=n("h2"),hn=n("a"),Ol=n("span"),m(sr.$$.fragment),ny=d(),Sl=n("span"),ay=r("FlaxBartForCausalLM"),Nc=d(),X=n("div"),m(rr.$$.fragment),sy=d(),Il=n("p"),ry=r(`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),iy=d(),ir=n("p"),dy=r("This model inherits from "),Vr=n("a"),ly=r("FlaxPreTrainedModel"),cy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),py=d(),dr=n("p"),hy=r(`This model is also a Flax Linen
`),lr=n("a"),uy=r("flax.nn.Module"),my=r(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),fy=d(),Nl=n("p"),_y=r("Finally, this model supports inherent JAX features such as:"),gy=d(),_t=n("ul"),Ll=n("li"),cr=n("a"),ky=r("Just-In-Time (JIT) compilation"),by=d(),Dl=n("li"),pr=n("a"),yy=r("Automatic Differentiation"),Ty=d(),Gl=n("li"),hr=n("a"),vy=r("Vectorization"),wy=d(),Wl=n("li"),ur=n("a"),xy=r("Parallelization"),zy=d(),Ne=n("div"),m(mr.$$.fragment),Fy=d(),Bo=n("p"),qy=r("The "),Ul=n("code"),By=r("FlaxBartDecoderPreTrainedModel"),$y=r("forward method, overrides the "),Rl=n("code"),jy=r("__call__"),My=r(" special method."),Py=d(),m(un.$$.fragment),Ey=d(),Hl=n("p"),Cy=r("Example:"),Ay=d(),m(fr.$$.fragment),this.h()},l(o){const h=Ww('[data-svelte="svelte-1phssyn"]',document.head);p=a(h,"META",{name:!0,content:!0}),h.forEach(t),z=l(o),T=a(o,"H1",{class:!0});var _r=s(T);w=a(_r,"A",{id:!0,class:!0,href:!0});var Ql=s(w);x=a(Ql,"SPAN",{});var Vl=s(x);f(v.$$.fragment,Vl),Vl.forEach(t),Ql.forEach(t),y=l(_r),q=a(_r,"SPAN",{});var Jl=s(q);se=i(Jl,"BART"),Jl.forEach(t),_r.forEach(t),A=l(o),$=a(o,"P",{});var mn=s($);pe=a(mn,"STRONG",{});var Kl=s(pe);be=i(Kl,"DISCLAIMER:"),Kl.forEach(t),tt=i(mn," If you see something strange, file a "),ye=a(mn,"A",{href:!0,rel:!0});var Xl=s(ye);Te=i(Xl,"Github Issue"),Xl.forEach(t),ot=i(mn,` and assign
@patrickvonplaten`),mn.forEach(t),Ze=l(o),V=a(o,"H2",{class:!0});var gr=s(V);N=a(gr,"A",{id:!0,class:!0,href:!0});var Zl=s(N);Ue=a(Zl,"SPAN",{});var Yl=s(Ue);f(re.$$.fragment,Yl),Yl.forEach(t),Zl.forEach(t),C=l(gr),O=a(gr,"SPAN",{});var ec=s(O);nt=i(ec,"Overview"),ec.forEach(t),gr.forEach(t),he=l(o),ue=a(o,"P",{});var kr=s(ue);at=i(kr,"The Bart model was proposed in "),J=a(kr,"A",{href:!0,rel:!0});var tc=s(J);st=i(tc,`BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation,
Translation, and Comprehension`),tc.forEach(t),rt=i(kr,` by Mike Lewis, Yinhan Liu, Naman Goyal, Marjan
Ghazvininejad, Abdelrahman Mohamed, Omer Levy, Ves Stoyanov and Luke Zettlemoyer on 29 Oct, 2019.`),kr.forEach(t),L=l(o),Me=a(o,"P",{});var oc=s(Me);ve=i(oc,"According to the abstract,"),oc.forEach(t),Ye=l(o),Z=a(o,"UL",{});var $o=s(Z);ie=a($o,"LI",{});var Ny=s(ie);it=i(Ny,`Bart uses a standard seq2seq/machine translation architecture with a bidirectional encoder (like BERT) and a
left-to-right decoder (like GPT).`),Ny.forEach(t),dt=l($o),K=a($o,"LI",{});var Ly=s(K);lt=i(Ly,`The pretraining task involves randomly shuffling the order of the original sentences and a novel in-filling scheme,
where spans of text are replaced with a single mask token.`),Ly.forEach(t),we=l($o),Re=a($o,"LI",{});var Dy=s(Re);F=i(Dy,`BART is particularly effective when fine tuned for text generation but also works well for comprehension tasks. It
matches the performance of RoBERTa with comparable training resources on GLUE and SQuAD, achieves new
state-of-the-art results on a range of abstractive dialogue, question answering, and summarization tasks, with gains
of up to 6 ROUGE.`),Dy.forEach(t),$o.forEach(t),P=l(o),H=a(o,"P",{});var Jr=s(H);Dt=i(Jr,"This model was contributed by "),He=a(Jr,"A",{href:!0,rel:!0});var Gy=s(He);de=i(Gy,"sshleifer"),Gy.forEach(t),Gt=i(Jr,". The Authors\u2019 code can be found "),Qe=a(Jr,"A",{href:!0,rel:!0});var Wy=s(Qe);Wt=i(Wy,"here"),Wy.forEach(t),le=i(Jr,"."),Jr.forEach(t),me=l(o),xe=a(o,"H3",{class:!0});var Dc=s(xe);Pe=a(Dc,"A",{id:!0,class:!0,href:!0});var Uy=s(Pe);ce=a(Uy,"SPAN",{});var Ry=s(ce);f(Ve.$$.fragment,Ry),Ry.forEach(t),Uy.forEach(t),Ut=l(Dc),Je=a(Dc,"SPAN",{});var Hy=s(Je);Rt=i(Hy,"Examples"),Hy.forEach(t),Dc.forEach(t),ac=l(o),gt=a(o,"UL",{});var Kr=s(gt);xn=a(Kr,"LI",{});var Gc=s(xn);Lp=i(Gc,`Examples and scripts for fine-tuning BART and other models for sequence to sequence tasks can be found in
`),zn=a(Gc,"A",{href:!0,rel:!0});var Qy=s(zn);Dp=i(Qy,"examples/pytorch/summarization/"),Qy.forEach(t),Gp=i(Gc,"."),Gc.forEach(t),Wp=l(Kr),ct=a(Kr,"LI",{});var fn=s(ct);Up=i(fn,"An example of how to train "),br=a(fn,"A",{href:!0});var Vy=s(br);Rp=i(Vy,"BartForConditionalGeneration"),Vy.forEach(t),Hp=i(fn," with a Hugging Face "),Fi=a(fn,"CODE",{});var Jy=s(Fi);Qp=i(Jy,"datasets"),Jy.forEach(t),Vp=i(fn,`
object can be found in this `),Fn=a(fn,"A",{href:!0,rel:!0});var Ky=s(Fn);Jp=i(Ky,"forum discussion"),Ky.forEach(t),Kp=i(fn,"."),fn.forEach(t),Xp=l(Kr),jo=a(Kr,"LI",{});var nc=s(jo);qn=a(nc,"A",{href:!0,rel:!0});var Xy=s(qn);Zp=i(Xy,"Distilled checkpoints"),Xy.forEach(t),Yp=i(nc," are described in this "),Bn=a(nc,"A",{href:!0,rel:!0});var Zy=s(Bn);eh=i(Zy,"paper"),Zy.forEach(t),th=i(nc,"."),nc.forEach(t),Kr.forEach(t),sc=l(o),Ht=a(o,"H2",{class:!0});var Wc=s(Ht);Mo=a(Wc,"A",{id:!0,class:!0,href:!0});var Yy=s(Mo);qi=a(Yy,"SPAN",{});var eT=s(qi);f($n.$$.fragment,eT),eT.forEach(t),Yy.forEach(t),oh=l(Wc),Bi=a(Wc,"SPAN",{});var tT=s(Bi);nh=i(tT,"Implementation Notes"),tT.forEach(t),Wc.forEach(t),rc=l(o),Ee=a(o,"UL",{});var $t=s(Ee);pt=a($t,"LI",{});var _n=s(pt);ah=i(_n,"Bart doesn\u2019t use "),$i=a(_n,"CODE",{});var oT=s($i);sh=i(oT,"token_type_ids"),oT.forEach(t),rh=i(_n," for sequence classification. Use "),yr=a(_n,"A",{href:!0});var nT=s(yr);ih=i(nT,"BartTokenizer"),nT.forEach(t),dh=i(_n,` or
`),Tr=a(_n,"A",{href:!0});var aT=s(Tr);lh=i(aT,"encode()"),aT.forEach(t),ch=i(_n," to get the proper splitting."),_n.forEach(t),ph=l($t),Qt=a($t,"LI",{});var Xr=s(Qt);hh=i(Xr,"The forward pass of "),vr=a(Xr,"A",{href:!0});var sT=s(vr);uh=i(sT,"BartModel"),sT.forEach(t),mh=i(Xr," will create the "),ji=a(Xr,"CODE",{});var rT=s(ji);fh=i(rT,"decoder_input_ids"),rT.forEach(t),_h=i(Xr,` if they are not passed.
This is different than some other modeling APIs. A typical use case of this feature is mask filling.`),Xr.forEach(t),gh=l($t),Vt=a($t,"LI",{});var Zr=s(Vt);kh=i(Zr,`Model predictions are intended to be identical to the original implementation when
`),Mi=a(Zr,"CODE",{});var iT=s(Mi);bh=i(iT,"forced_bos_token_id=0"),iT.forEach(t),yh=i(Zr,`. This only works, however, if the string you pass to
`),Pi=a(Zr,"CODE",{});var dT=s(Pi);Th=i(dT,"fairseq.encode"),dT.forEach(t),vh=i(Zr," starts with a space."),Zr.forEach(t),wh=l($t),wr=a($t,"LI",{});var Oy=s(wr);xr=a(Oy,"A",{href:!0});var lT=s(xr);xh=i(lT,"generate()"),lT.forEach(t),zh=i(Oy,` should be used for conditional generation tasks like
summarization, see the example in that docstrings.`),Oy.forEach(t),Fh=l($t),Jt=a($t,"LI",{});var Yr=s(Jt);qh=i(Yr,"Models that load the "),Ei=a(Yr,"EM",{});var cT=s(Ei);Bh=i(cT,"facebook/bart-large-cnn"),cT.forEach(t),$h=i(Yr," weights will not have a "),Ci=a(Yr,"CODE",{});var pT=s(Ci);jh=i(pT,"mask_token_id"),pT.forEach(t),Mh=i(Yr,`, or be able to perform
mask-filling tasks.`),Yr.forEach(t),$t.forEach(t),ic=l(o),Kt=a(o,"H2",{class:!0});var Uc=s(Kt);Po=a(Uc,"A",{id:!0,class:!0,href:!0});var hT=s(Po);Ai=a(hT,"SPAN",{});var uT=s(Ai);f(jn.$$.fragment,uT),uT.forEach(t),hT.forEach(t),Ph=l(Uc),Oi=a(Uc,"SPAN",{});var mT=s(Oi);Eh=i(mT,"Mask Filling"),mT.forEach(t),Uc.forEach(t),dc=l(o),kt=a(o,"P",{});var ei=s(kt);Ch=i(ei,"The "),Si=a(ei,"CODE",{});var fT=s(Si);Ah=i(fT,"facebook/bart-base"),fT.forEach(t),Oh=i(ei," and "),Ii=a(ei,"CODE",{});var _T=s(Ii);Sh=i(_T,"facebook/bart-large"),_T.forEach(t),Ih=i(ei," checkpoints can be used to fill multi-token masks."),ei.forEach(t),lc=l(o),f(Mn.$$.fragment,o),cc=l(o),Xt=a(o,"H2",{class:!0});var Rc=s(Xt);Eo=a(Rc,"A",{id:!0,class:!0,href:!0});var gT=s(Eo);Ni=a(gT,"SPAN",{});var kT=s(Ni);f(Pn.$$.fragment,kT),kT.forEach(t),gT.forEach(t),Nh=l(Rc),Li=a(Rc,"SPAN",{});var bT=s(Li);Lh=i(bT,"BartConfig"),bT.forEach(t),Rc.forEach(t),pc=l(o),ze=a(o,"DIV",{class:!0});var jt=s(ze);f(En.$$.fragment,jt),Dh=l(jt),Zt=a(jt,"P",{});var ti=s(Zt);Gh=i(ti,"This is the configuration class to store the configuration of a "),zr=a(ti,"A",{href:!0});var yT=s(zr);Wh=i(yT,"BartModel"),yT.forEach(t),Uh=i(ti,`. It is used to instantiate a BART
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the BART
`),Cn=a(ti,"A",{href:!0,rel:!0});var TT=s(Cn);Rh=i(TT,"facebook/bart-large"),TT.forEach(t),Hh=i(ti," architecture."),ti.forEach(t),Qh=l(jt),Yt=a(jt,"P",{});var oi=s(Yt);Vh=i(oi,"Configuration objects inherit from "),Fr=a(oi,"A",{href:!0});var vT=s(Fr);Jh=i(vT,"PretrainedConfig"),vT.forEach(t),Kh=i(oi,` and can be used to control the model outputs. Read the
documentation from `),qr=a(oi,"A",{href:!0});var wT=s(qr);Xh=i(wT,"PretrainedConfig"),wT.forEach(t),Zh=i(oi," for more information."),oi.forEach(t),Yh=l(jt),Di=a(jt,"P",{});var xT=s(Di);eu=i(xT,"Example:"),xT.forEach(t),tu=l(jt),f(An.$$.fragment,jt),jt.forEach(t),hc=l(o),eo=a(o,"H2",{class:!0});var Hc=s(eo);Co=a(Hc,"A",{id:!0,class:!0,href:!0});var zT=s(Co);Gi=a(zT,"SPAN",{});var FT=s(Gi);f(On.$$.fragment,FT),FT.forEach(t),zT.forEach(t),ou=l(Hc),Wi=a(Hc,"SPAN",{});var qT=s(Wi);nu=i(qT,"BartTokenizer"),qT.forEach(t),Hc.forEach(t),uc=l(o),E=a(o,"DIV",{class:!0});var G=s(E);f(Sn.$$.fragment,G),au=l(G),Ui=a(G,"P",{});var BT=s(Ui);su=i(BT,"Constructs a BART tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding."),BT.forEach(t),ru=l(G),Ri=a(G,"P",{});var $T=s(Ri);iu=i($T,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),$T.forEach(t),du=l(G),f(In.$$.fragment,G),lu=l(G),Nn=a(G,"P",{});var Qc=s(Nn);cu=i(Qc,"You can get around that behavior by passing "),Hi=a(Qc,"CODE",{});var jT=s(Hi);pu=i(jT,"add_prefix_space=True"),jT.forEach(t),hu=i(Qc,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qc.forEach(t),uu=l(G),f(Ao.$$.fragment,G),mu=l(G),Ln=a(G,"P",{});var Vc=s(Ln);fu=i(Vc,"This tokenizer inherits from "),Br=a(Vc,"A",{href:!0});var MT=s(Br);_u=i(MT,"PreTrainedTokenizer"),MT.forEach(t),gu=i(Vc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vc.forEach(t),ku=l(G),bt=a(G,"DIV",{class:!0});var ni=s(bt);f(Dn.$$.fragment,ni),bu=l(ni),Qi=a(ni,"P",{});var PT=s(Qi);yu=i(PT,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BART sequence has the following format:`),PT.forEach(t),Tu=l(ni),Gn=a(ni,"UL",{});var Jc=s(Gn);$r=a(Jc,"LI",{});var Sy=s($r);vu=i(Sy,"single sequence: "),Vi=a(Sy,"CODE",{});var ET=s(Vi);wu=i(ET,"<s> X </s>"),ET.forEach(t),Sy.forEach(t),xu=l(Jc),jr=a(Jc,"LI",{});var Iy=s(jr);zu=i(Iy,"pair of sequences: "),Ji=a(Iy,"CODE",{});var CT=s(Ji);Fu=i(CT,"<s> A </s></s> B </s>"),CT.forEach(t),Iy.forEach(t),Jc.forEach(t),ni.forEach(t),qu=l(G),Oo=a(G,"DIV",{class:!0});var Kc=s(Oo);f(Wn.$$.fragment,Kc),Bu=l(Kc),Ki=a(Kc,"P",{});var AT=s(Ki);$u=i(AT,"Converts a sequence of tokens (string) in a single string."),AT.forEach(t),Kc.forEach(t),ju=l(G),So=a(G,"DIV",{class:!0});var Xc=s(So);f(Un.$$.fragment,Xc),Mu=l(Xc),Xi=a(Xc,"P",{});var OT=s(Xi);Pu=i(OT,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),OT.forEach(t),Xc.forEach(t),Eu=l(G),Io=a(G,"DIV",{class:!0});var Zc=s(Io);f(Rn.$$.fragment,Zc),Cu=l(Zc),Hn=a(Zc,"P",{});var Yc=s(Hn);Au=i(Yc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Zi=a(Yc,"CODE",{});var ST=s(Zi);Ou=i(ST,"prepare_for_model"),ST.forEach(t),Su=i(Yc," method."),Yc.forEach(t),Zc.forEach(t),G.forEach(t),mc=l(o),to=a(o,"H2",{class:!0});var ep=s(to);No=a(ep,"A",{id:!0,class:!0,href:!0});var IT=s(No);Yi=a(IT,"SPAN",{});var NT=s(Yi);f(Qn.$$.fragment,NT),NT.forEach(t),IT.forEach(t),Iu=l(ep),ed=a(ep,"SPAN",{});var LT=s(ed);Nu=i(LT,"BartTokenizerFast"),LT.forEach(t),ep.forEach(t),fc=l(o),W=a(o,"DIV",{class:!0});var _e=s(W);f(Vn.$$.fragment,_e),Lu=l(_e),Jn=a(_e,"P",{});var tp=s(Jn);Du=i(tp,"Construct a \u201Cfast\u201D BART tokenizer (backed by HuggingFace\u2019s "),td=a(tp,"EM",{});var DT=s(td);Gu=i(DT,"tokenizers"),DT.forEach(t),Wu=i(tp,` library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`),tp.forEach(t),Uu=l(_e),od=a(_e,"P",{});var GT=s(od);Ru=i(GT,`This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will
be encoded differently whether it is at the beginning of the sentence (without space) or not:`),GT.forEach(t),Hu=l(_e),f(Kn.$$.fragment,_e),Qu=l(_e),Xn=a(_e,"P",{});var op=s(Xn);Vu=i(op,"You can get around that behavior by passing "),nd=a(op,"CODE",{});var WT=s(nd);Ju=i(WT,"add_prefix_space=True"),WT.forEach(t),Ku=i(op,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),op.forEach(t),Xu=l(_e),f(Lo.$$.fragment,_e),Zu=l(_e),Zn=a(_e,"P",{});var np=s(Zn);Yu=i(np,"This tokenizer inherits from "),Mr=a(np,"A",{href:!0});var UT=s(Mr);em=i(UT,"PreTrainedTokenizerFast"),UT.forEach(t),tm=i(np,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),np.forEach(t),om=l(_e),Do=a(_e,"DIV",{class:!0});var ap=s(Do);f(Yn.$$.fragment,ap),nm=l(ap),ad=a(ap,"P",{});var RT=s(ad);am=i(RT,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BART does not
make use of token type ids, therefore a list of zeros is returned.`),RT.forEach(t),ap.forEach(t),_e.forEach(t),_c=l(o),oo=a(o,"H2",{class:!0});var sp=s(oo);Go=a(sp,"A",{id:!0,class:!0,href:!0});var HT=s(Go);sd=a(HT,"SPAN",{});var QT=s(sd);f(ea.$$.fragment,QT),QT.forEach(t),HT.forEach(t),sm=l(sp),rd=a(sp,"SPAN",{});var VT=s(rd);rm=i(VT,"BartModel"),VT.forEach(t),sp.forEach(t),gc=l(o),Ke=a(o,"DIV",{class:!0});var gn=s(Ke);f(ta.$$.fragment,gn),im=l(gn),oa=a(gn,"P",{});var rp=s(oa);dm=i(rp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pr=a(rp,"A",{href:!0});var JT=s(Pr);lm=i(JT,"PreTrainedModel"),JT.forEach(t),cm=i(rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp.forEach(t),pm=l(gn),na=a(gn,"P",{});var ip=s(na);hm=i(ip,"This model is also a PyTorch "),aa=a(ip,"A",{href:!0,rel:!0});var KT=s(aa);um=i(KT,"torch.nn.Module"),KT.forEach(t),mm=i(ip,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip.forEach(t),fm=l(gn),Ce=a(gn,"DIV",{class:!0});var Mt=s(Ce);f(sa.$$.fragment,Mt),_m=l(Mt),no=a(Mt,"P",{});var ai=s(no);gm=i(ai,"The "),Er=a(ai,"A",{href:!0});var XT=s(Er);km=i(XT,"BartModel"),XT.forEach(t),bm=i(ai," forward method, overrides the "),id=a(ai,"CODE",{});var ZT=s(id);ym=i(ZT,"__call__"),ZT.forEach(t),Tm=i(ai," special method."),ai.forEach(t),vm=l(Mt),f(Wo.$$.fragment,Mt),wm=l(Mt),dd=a(Mt,"P",{});var YT=s(dd);xm=i(YT,"Example:"),YT.forEach(t),zm=l(Mt),f(ra.$$.fragment,Mt),Mt.forEach(t),gn.forEach(t),kc=l(o),ao=a(o,"H2",{class:!0});var dp=s(ao);Uo=a(dp,"A",{id:!0,class:!0,href:!0});var ev=s(Uo);ld=a(ev,"SPAN",{});var tv=s(ld);f(ia.$$.fragment,tv),tv.forEach(t),ev.forEach(t),Fm=l(dp),cd=a(dp,"SPAN",{});var ov=s(cd);qm=i(ov,"BartForConditionalGeneration"),ov.forEach(t),dp.forEach(t),bc=l(o),Xe=a(o,"DIV",{class:!0});var kn=s(Xe);f(da.$$.fragment,kn),Bm=l(kn),la=a(kn,"P",{});var lp=s(la);$m=i(lp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Cr=a(lp,"A",{href:!0});var nv=s(Cr);jm=i(nv,"PreTrainedModel"),nv.forEach(t),Mm=i(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),Pm=l(kn),ca=a(kn,"P",{});var cp=s(ca);Em=i(cp,"This model is also a PyTorch "),pa=a(cp,"A",{href:!0,rel:!0});var av=s(pa);Cm=i(av,"torch.nn.Module"),av.forEach(t),Am=i(cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cp.forEach(t),Om=l(kn),Y=a(kn,"DIV",{class:!0});var Le=s(Y);f(ha.$$.fragment,Le),Sm=l(Le),so=a(Le,"P",{});var si=s(so);Im=i(si,"The "),Ar=a(si,"A",{href:!0});var sv=s(Ar);Nm=i(sv,"BartForConditionalGeneration"),sv.forEach(t),Lm=i(si," forward method, overrides the "),pd=a(si,"CODE",{});var rv=s(pd);Dm=i(rv,"__call__"),rv.forEach(t),Gm=i(si," special method."),si.forEach(t),Wm=l(Le),f(Ro.$$.fragment,Le),Um=l(Le),hd=a(Le,"P",{});var iv=s(hd);Rm=i(iv,"Summarization example:"),iv.forEach(t),Hm=l(Le),f(ua.$$.fragment,Le),Qm=l(Le),ud=a(Le,"P",{});var dv=s(ud);Vm=i(dv,"Mask filling example:"),dv.forEach(t),Jm=l(Le),f(ma.$$.fragment,Le),Le.forEach(t),kn.forEach(t),yc=l(o),ro=a(o,"H2",{class:!0});var pp=s(ro);Ho=a(pp,"A",{id:!0,class:!0,href:!0});var lv=s(Ho);md=a(lv,"SPAN",{});var cv=s(md);f(fa.$$.fragment,cv),cv.forEach(t),lv.forEach(t),Km=l(pp),fd=a(pp,"SPAN",{});var pv=s(fd);Xm=i(pv,"BartForSequenceClassification"),pv.forEach(t),pp.forEach(t),Tc=l(o),Fe=a(o,"DIV",{class:!0});var Pt=s(Fe);f(_a.$$.fragment,Pt),Zm=l(Pt),_d=a(Pt,"P",{});var hv=s(_d);Ym=i(hv,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),hv.forEach(t),ef=l(Pt),ga=a(Pt,"P",{});var hp=s(ga);tf=i(hp,"This model inherits from "),Or=a(hp,"A",{href:!0});var uv=s(Or);of=i(uv,"PreTrainedModel"),uv.forEach(t),nf=i(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),af=l(Pt),ka=a(Pt,"P",{});var up=s(ka);sf=i(up,"This model is also a PyTorch "),ba=a(up,"A",{href:!0,rel:!0});var mv=s(ba);rf=i(mv,"torch.nn.Module"),mv.forEach(t),df=i(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),lf=l(Pt),D=a(Pt,"DIV",{class:!0});var oe=s(D);f(ya.$$.fragment,oe),cf=l(oe),io=a(oe,"P",{});var ri=s(io);pf=i(ri,"The "),Sr=a(ri,"A",{href:!0});var fv=s(Sr);hf=i(fv,"BartForSequenceClassification"),fv.forEach(t),uf=i(ri," forward method, overrides the "),gd=a(ri,"CODE",{});var _v=s(gd);mf=i(_v,"__call__"),_v.forEach(t),ff=i(ri," special method."),ri.forEach(t),_f=l(oe),f(Qo.$$.fragment,oe),gf=l(oe),kd=a(oe,"P",{});var gv=s(kd);kf=i(gv,"Example of single-label classification:"),gv.forEach(t),bf=l(oe),f(Ta.$$.fragment,oe),yf=l(oe),f(va.$$.fragment,oe),Tf=l(oe),bd=a(oe,"P",{});var kv=s(bd);vf=i(kv,"Example of multi-label classification:"),kv.forEach(t),wf=l(oe),f(wa.$$.fragment,oe),xf=l(oe),f(xa.$$.fragment,oe),oe.forEach(t),Pt.forEach(t),vc=l(o),lo=a(o,"H2",{class:!0});var mp=s(lo);Vo=a(mp,"A",{id:!0,class:!0,href:!0});var bv=s(Vo);yd=a(bv,"SPAN",{});var yv=s(yd);f(za.$$.fragment,yv),yv.forEach(t),bv.forEach(t),zf=l(mp),Td=a(mp,"SPAN",{});var Tv=s(Td);Ff=i(Tv,"BartForQuestionAnswering"),Tv.forEach(t),mp.forEach(t),wc=l(o),qe=a(o,"DIV",{class:!0});var Et=s(qe);f(Fa.$$.fragment,Et),qf=l(Et),co=a(Et,"P",{});var ii=s(co);Bf=i(ii,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),vd=a(ii,"CODE",{});var vv=s(vd);$f=i(vv,"span start logits"),vv.forEach(t),jf=i(ii," and "),wd=a(ii,"CODE",{});var wv=s(wd);Mf=i(wv,"span end logits"),wv.forEach(t),Pf=i(ii,")."),ii.forEach(t),Ef=l(Et),qa=a(Et,"P",{});var fp=s(qa);Cf=i(fp,"This model inherits from "),Ir=a(fp,"A",{href:!0});var xv=s(Ir);Af=i(xv,"PreTrainedModel"),xv.forEach(t),Of=i(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),Sf=l(Et),Ba=a(Et,"P",{});var _p=s(Ba);If=i(_p,"This model is also a PyTorch "),$a=a(_p,"A",{href:!0,rel:!0});var zv=s($a);Nf=i(zv,"torch.nn.Module"),zv.forEach(t),Lf=i(_p,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p.forEach(t),Df=l(Et),fe=a(Et,"DIV",{class:!0});var et=s(fe);f(ja.$$.fragment,et),Gf=l(et),po=a(et,"P",{});var di=s(po);Wf=i(di,"The "),Nr=a(di,"A",{href:!0});var Fv=s(Nr);Uf=i(Fv,"BartForQuestionAnswering"),Fv.forEach(t),Rf=i(di," forward method, overrides the "),xd=a(di,"CODE",{});var qv=s(xd);Hf=i(qv,"__call__"),qv.forEach(t),Qf=i(di," special method."),di.forEach(t),Vf=l(et),f(Jo.$$.fragment,et),Jf=l(et),zd=a(et,"P",{});var Bv=s(zd);Kf=i(Bv,"Example:"),Bv.forEach(t),Xf=l(et),f(Ma.$$.fragment,et),Zf=l(et),f(Pa.$$.fragment,et),et.forEach(t),Et.forEach(t),xc=l(o),ho=a(o,"H2",{class:!0});var gp=s(ho);Ko=a(gp,"A",{id:!0,class:!0,href:!0});var $v=s(Ko);Fd=a($v,"SPAN",{});var jv=s(Fd);f(Ea.$$.fragment,jv),jv.forEach(t),$v.forEach(t),Yf=l(gp),qd=a(gp,"SPAN",{});var Mv=s(qd);e_=i(Mv,"BartForCausalLM"),Mv.forEach(t),gp.forEach(t),zc=l(o),uo=a(o,"DIV",{class:!0});var kp=s(uo);f(Ca.$$.fragment,kp),t_=l(kp),yt=a(kp,"DIV",{class:!0});var li=s(yt);f(Aa.$$.fragment,li),o_=l(li),Bd=a(li,"P",{});var Pv=s(Bd);n_=i(Pv,"Example:"),Pv.forEach(t),a_=l(li),f(Oa.$$.fragment,li),li.forEach(t),kp.forEach(t),Fc=l(o),mo=a(o,"H2",{class:!0});var bp=s(mo);Xo=a(bp,"A",{id:!0,class:!0,href:!0});var Ev=s(Xo);$d=a(Ev,"SPAN",{});var Cv=s($d);f(Sa.$$.fragment,Cv),Cv.forEach(t),Ev.forEach(t),s_=l(bp),jd=a(bp,"SPAN",{});var Av=s(jd);r_=i(Av,"TFBartModel"),Av.forEach(t),bp.forEach(t),qc=l(o),Be=a(o,"DIV",{class:!0});var Ct=s(Be);f(Ia.$$.fragment,Ct),i_=l(Ct),Na=a(Ct,"P",{});var yp=s(Na);d_=i(yp,`The bare BART Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Lr=a(yp,"A",{href:!0});var Ov=s(Lr);l_=i(Ov,"TFPreTrainedModel"),Ov.forEach(t),c_=i(yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yp.forEach(t),p_=l(Ct),La=a(Ct,"P",{});var Tp=s(La);h_=i(Tp,"This model is also a "),Da=a(Tp,"A",{href:!0,rel:!0});var Sv=s(Da);u_=i(Sv,"tf.keras.Model"),Sv.forEach(t),m_=i(Tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp.forEach(t),f_=l(Ct),f(Zo.$$.fragment,Ct),__=l(Ct),Ae=a(Ct,"DIV",{class:!0});var At=s(Ae);f(Ga.$$.fragment,At),g_=l(At),fo=a(At,"P",{});var ci=s(fo);k_=i(ci,"The "),Dr=a(ci,"A",{href:!0});var Iv=s(Dr);b_=i(Iv,"TFBartModel"),Iv.forEach(t),y_=i(ci," forward method, overrides the "),Md=a(ci,"CODE",{});var Nv=s(Md);T_=i(Nv,"__call__"),Nv.forEach(t),v_=i(ci," special method."),ci.forEach(t),w_=l(At),f(Yo.$$.fragment,At),x_=l(At),Pd=a(At,"P",{});var Lv=s(Pd);z_=i(Lv,"Example:"),Lv.forEach(t),F_=l(At),f(Wa.$$.fragment,At),At.forEach(t),Ct.forEach(t),Bc=l(o),_o=a(o,"H2",{class:!0});var vp=s(_o);en=a(vp,"A",{id:!0,class:!0,href:!0});var Dv=s(en);Ed=a(Dv,"SPAN",{});var Gv=s(Ed);f(Ua.$$.fragment,Gv),Gv.forEach(t),Dv.forEach(t),q_=l(vp),Cd=a(vp,"SPAN",{});var Wv=s(Cd);B_=i(Wv,"TFBartForConditionalGeneration"),Wv.forEach(t),vp.forEach(t),$c=l(o),$e=a(o,"DIV",{class:!0});var Ot=s($e);f(Ra.$$.fragment,Ot),$_=l(Ot),Ha=a(Ot,"P",{});var wp=s(Ha);j_=i(wp,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Gr=a(wp,"A",{href:!0});var Uv=s(Gr);M_=i(Uv,"TFPreTrainedModel"),Uv.forEach(t),P_=i(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),E_=l(Ot),Qa=a(Ot,"P",{});var xp=s(Qa);C_=i(xp,"This model is also a "),Va=a(xp,"A",{href:!0,rel:!0});var Rv=s(Va);A_=i(Rv,"tf.keras.Model"),Rv.forEach(t),O_=i(xp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xp.forEach(t),S_=l(Ot),f(tn.$$.fragment,Ot),I_=l(Ot),ee=a(Ot,"DIV",{class:!0});var De=s(ee);f(Ja.$$.fragment,De),N_=l(De),go=a(De,"P",{});var pi=s(go);L_=i(pi,"The "),Wr=a(pi,"A",{href:!0});var Hv=s(Wr);D_=i(Hv,"TFBartForConditionalGeneration"),Hv.forEach(t),G_=i(pi," forward method, overrides the "),Ad=a(pi,"CODE",{});var Qv=s(Ad);W_=i(Qv,"__call__"),Qv.forEach(t),U_=i(pi," special method."),pi.forEach(t),R_=l(De),f(on.$$.fragment,De),H_=l(De),Od=a(De,"P",{});var Vv=s(Od);Q_=i(Vv,"Summarization example:"),Vv.forEach(t),V_=l(De),f(Ka.$$.fragment,De),J_=l(De),Sd=a(De,"P",{});var Jv=s(Sd);K_=i(Jv,"Mask filling example:"),Jv.forEach(t),X_=l(De),f(Xa.$$.fragment,De),De.forEach(t),Ot.forEach(t),jc=l(o),ko=a(o,"H2",{class:!0});var zp=s(ko);nn=a(zp,"A",{id:!0,class:!0,href:!0});var Kv=s(nn);Id=a(Kv,"SPAN",{});var Xv=s(Id);f(Za.$$.fragment,Xv),Xv.forEach(t),Kv.forEach(t),Z_=l(zp),Nd=a(zp,"SPAN",{});var Zv=s(Nd);Y_=i(Zv,"FlaxBartModel"),Zv.forEach(t),zp.forEach(t),Mc=l(o),U=a(o,"DIV",{class:!0});var ge=s(U);f(Ya.$$.fragment,ge),eg=l(ge),es=a(ge,"P",{});var Fp=s(es);tg=i(Fp,`The bare Bart Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Ur=a(Fp,"A",{href:!0});var Yv=s(Ur);og=i(Yv,"FlaxPreTrainedModel"),Yv.forEach(t),ng=i(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp.forEach(t),ag=l(ge),ts=a(ge,"P",{});var qp=s(ts);sg=i(qp,`This model is also a Flax Linen
`),os=a(qp,"A",{href:!0,rel:!0});var e1=s(os);rg=i(e1,"flax.nn.Module"),e1.forEach(t),ig=i(qp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),qp.forEach(t),dg=l(ge),Ld=a(ge,"P",{});var t1=s(Ld);lg=i(t1,"Finally, this model supports inherent JAX features such as:"),t1.forEach(t),cg=l(ge),ht=a(ge,"UL",{});var bn=s(ht);Dd=a(bn,"LI",{});var o1=s(Dd);ns=a(o1,"A",{href:!0,rel:!0});var n1=s(ns);pg=i(n1,"Just-In-Time (JIT) compilation"),n1.forEach(t),o1.forEach(t),hg=l(bn),Gd=a(bn,"LI",{});var a1=s(Gd);as=a(a1,"A",{href:!0,rel:!0});var s1=s(as);ug=i(s1,"Automatic Differentiation"),s1.forEach(t),a1.forEach(t),mg=l(bn),Wd=a(bn,"LI",{});var r1=s(Wd);ss=a(r1,"A",{href:!0,rel:!0});var i1=s(ss);fg=i(i1,"Vectorization"),i1.forEach(t),r1.forEach(t),_g=l(bn),Ud=a(bn,"LI",{});var d1=s(Ud);rs=a(d1,"A",{href:!0,rel:!0});var l1=s(rs);gg=i(l1,"Parallelization"),l1.forEach(t),d1.forEach(t),bn.forEach(t),kg=l(ge),Oe=a(ge,"DIV",{class:!0});var St=s(Oe);f(is.$$.fragment,St),bg=l(St),bo=a(St,"P",{});var hi=s(bo);yg=i(hi,"The "),Rd=a(hi,"CODE",{});var c1=s(Rd);Tg=i(c1,"FlaxBartPreTrainedModel"),c1.forEach(t),vg=i(hi,"forward method, overrides the "),Hd=a(hi,"CODE",{});var p1=s(Hd);wg=i(p1,"__call__"),p1.forEach(t),xg=i(hi," special method."),hi.forEach(t),zg=l(St),f(an.$$.fragment,St),Fg=l(St),Qd=a(St,"P",{});var h1=s(Qd);qg=i(h1,"Example:"),h1.forEach(t),Bg=l(St),f(ds.$$.fragment,St),St.forEach(t),$g=l(ge),Tt=a(ge,"DIV",{class:!0});var ui=s(Tt);f(ls.$$.fragment,ui),jg=l(ui),Vd=a(ui,"P",{});var u1=s(Vd);Mg=i(u1,"Example:"),u1.forEach(t),Pg=l(ui),f(cs.$$.fragment,ui),ui.forEach(t),Eg=l(ge),vt=a(ge,"DIV",{class:!0});var mi=s(vt);f(ps.$$.fragment,mi),Cg=l(mi),Jd=a(mi,"P",{});var m1=s(Jd);Ag=i(m1,"Example:"),m1.forEach(t),Og=l(mi),f(hs.$$.fragment,mi),mi.forEach(t),ge.forEach(t),Pc=l(o),yo=a(o,"H2",{class:!0});var Bp=s(yo);sn=a(Bp,"A",{id:!0,class:!0,href:!0});var f1=s(sn);Kd=a(f1,"SPAN",{});var _1=s(Kd);f(us.$$.fragment,_1),_1.forEach(t),f1.forEach(t),Sg=l(Bp),Xd=a(Bp,"SPAN",{});var g1=s(Xd);Ig=i(g1,"FlaxBartForConditionalGeneration"),g1.forEach(t),Bp.forEach(t),Ec=l(o),R=a(o,"DIV",{class:!0});var ke=s(R);f(ms.$$.fragment,ke),Ng=l(ke),fs=a(ke,"P",{});var $p=s(fs);Lg=i($p,`The BART Model with a language modeling head. Can be used for summarization.
This model inherits from `),Rr=a($p,"A",{href:!0});var k1=s(Rr);Dg=i(k1,"FlaxPreTrainedModel"),k1.forEach(t),Gg=i($p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p.forEach(t),Wg=l(ke),_s=a(ke,"P",{});var jp=s(_s);Ug=i(jp,`This model is also a Flax Linen
`),gs=a(jp,"A",{href:!0,rel:!0});var b1=s(gs);Rg=i(b1,"flax.nn.Module"),b1.forEach(t),Hg=i(jp,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),jp.forEach(t),Qg=l(ke),Zd=a(ke,"P",{});var y1=s(Zd);Vg=i(y1,"Finally, this model supports inherent JAX features such as:"),y1.forEach(t),Jg=l(ke),ut=a(ke,"UL",{});var yn=s(ut);Yd=a(yn,"LI",{});var T1=s(Yd);ks=a(T1,"A",{href:!0,rel:!0});var v1=s(ks);Kg=i(v1,"Just-In-Time (JIT) compilation"),v1.forEach(t),T1.forEach(t),Xg=l(yn),el=a(yn,"LI",{});var w1=s(el);bs=a(w1,"A",{href:!0,rel:!0});var x1=s(bs);Zg=i(x1,"Automatic Differentiation"),x1.forEach(t),w1.forEach(t),Yg=l(yn),tl=a(yn,"LI",{});var z1=s(tl);ys=a(z1,"A",{href:!0,rel:!0});var F1=s(ys);ek=i(F1,"Vectorization"),F1.forEach(t),z1.forEach(t),tk=l(yn),ol=a(yn,"LI",{});var q1=s(ol);Ts=a(q1,"A",{href:!0,rel:!0});var B1=s(Ts);ok=i(B1,"Parallelization"),B1.forEach(t),q1.forEach(t),yn.forEach(t),nk=l(ke),te=a(ke,"DIV",{class:!0});var Ge=s(te);f(vs.$$.fragment,Ge),ak=l(Ge),To=a(Ge,"P",{});var fi=s(To);sk=i(fi,"The "),nl=a(fi,"CODE",{});var $1=s(nl);rk=i($1,"FlaxBartPreTrainedModel"),$1.forEach(t),ik=i(fi,"forward method, overrides the "),al=a(fi,"CODE",{});var j1=s(al);dk=i(j1,"__call__"),j1.forEach(t),lk=i(fi," special method."),fi.forEach(t),ck=l(Ge),f(rn.$$.fragment,Ge),pk=l(Ge),sl=a(Ge,"P",{});var M1=s(sl);hk=i(M1,"Summarization example:"),M1.forEach(t),uk=l(Ge),f(ws.$$.fragment,Ge),mk=l(Ge),rl=a(Ge,"P",{});var P1=s(rl);fk=i(P1,"Mask filling example:"),P1.forEach(t),_k=l(Ge),f(xs.$$.fragment,Ge),Ge.forEach(t),gk=l(ke),wt=a(ke,"DIV",{class:!0});var _i=s(wt);f(zs.$$.fragment,_i),kk=l(_i),il=a(_i,"P",{});var E1=s(il);bk=i(E1,"Example:"),E1.forEach(t),yk=l(_i),f(Fs.$$.fragment,_i),_i.forEach(t),Tk=l(ke),xt=a(ke,"DIV",{class:!0});var gi=s(xt);f(qs.$$.fragment,gi),vk=l(gi),dl=a(gi,"P",{});var C1=s(dl);wk=i(C1,"Example:"),C1.forEach(t),xk=l(gi),f(Bs.$$.fragment,gi),gi.forEach(t),ke.forEach(t),Cc=l(o),vo=a(o,"H2",{class:!0});var Mp=s(vo);dn=a(Mp,"A",{id:!0,class:!0,href:!0});var A1=s(dn);ll=a(A1,"SPAN",{});var O1=s(ll);f($s.$$.fragment,O1),O1.forEach(t),A1.forEach(t),zk=l(Mp),cl=a(Mp,"SPAN",{});var S1=s(cl);Fk=i(S1,"FlaxBartForSequenceClassification"),S1.forEach(t),Mp.forEach(t),Ac=l(o),S=a(o,"DIV",{class:!0});var ne=s(S);f(js.$$.fragment,ne),qk=l(ne),pl=a(ne,"P",{});var I1=s(pl);Bk=i(I1,`Bart model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`),I1.forEach(t),$k=l(ne),Ms=a(ne,"P",{});var Pp=s(Ms);jk=i(Pp,"This model inherits from "),Hr=a(Pp,"A",{href:!0});var N1=s(Hr);Mk=i(N1,"FlaxPreTrainedModel"),N1.forEach(t),Pk=i(Pp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pp.forEach(t),Ek=l(ne),Ps=a(ne,"P",{});var Ep=s(Ps);Ck=i(Ep,`This model is also a Flax Linen
`),Es=a(Ep,"A",{href:!0,rel:!0});var L1=s(Es);Ak=i(L1,"flax.nn.Module"),L1.forEach(t),Ok=i(Ep,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ep.forEach(t),Sk=l(ne),hl=a(ne,"P",{});var D1=s(hl);Ik=i(D1,"Finally, this model supports inherent JAX features such as:"),D1.forEach(t),Nk=l(ne),mt=a(ne,"UL",{});var Tn=s(mt);ul=a(Tn,"LI",{});var G1=s(ul);Cs=a(G1,"A",{href:!0,rel:!0});var W1=s(Cs);Lk=i(W1,"Just-In-Time (JIT) compilation"),W1.forEach(t),G1.forEach(t),Dk=l(Tn),ml=a(Tn,"LI",{});var U1=s(ml);As=a(U1,"A",{href:!0,rel:!0});var R1=s(As);Gk=i(R1,"Automatic Differentiation"),R1.forEach(t),U1.forEach(t),Wk=l(Tn),fl=a(Tn,"LI",{});var H1=s(fl);Os=a(H1,"A",{href:!0,rel:!0});var Q1=s(Os);Uk=i(Q1,"Vectorization"),Q1.forEach(t),H1.forEach(t),Rk=l(Tn),_l=a(Tn,"LI",{});var V1=s(_l);Ss=a(V1,"A",{href:!0,rel:!0});var J1=s(Ss);Hk=i(J1,"Parallelization"),J1.forEach(t),V1.forEach(t),Tn.forEach(t),Qk=l(ne),Se=a(ne,"DIV",{class:!0});var It=s(Se);f(Is.$$.fragment,It),Vk=l(It),wo=a(It,"P",{});var ki=s(wo);Jk=i(ki,"The "),gl=a(ki,"CODE",{});var K1=s(gl);Kk=i(K1,"FlaxBartPreTrainedModel"),K1.forEach(t),Xk=i(ki,"forward method, overrides the "),kl=a(ki,"CODE",{});var X1=s(kl);Zk=i(X1,"__call__"),X1.forEach(t),Yk=i(ki," special method."),ki.forEach(t),eb=l(It),f(ln.$$.fragment,It),tb=l(It),bl=a(It,"P",{});var Z1=s(bl);ob=i(Z1,"Example:"),Z1.forEach(t),nb=l(It),f(Ns.$$.fragment,It),It.forEach(t),ab=l(ne),zt=a(ne,"DIV",{class:!0});var bi=s(zt);f(Ls.$$.fragment,bi),sb=l(bi),yl=a(bi,"P",{});var Y1=s(yl);rb=i(Y1,"Example:"),Y1.forEach(t),ib=l(bi),f(Ds.$$.fragment,bi),bi.forEach(t),db=l(ne),Ft=a(ne,"DIV",{class:!0});var yi=s(Ft);f(Gs.$$.fragment,yi),lb=l(yi),Tl=a(yi,"P",{});var ew=s(Tl);cb=i(ew,"Example:"),ew.forEach(t),pb=l(yi),f(Ws.$$.fragment,yi),yi.forEach(t),ne.forEach(t),Oc=l(o),xo=a(o,"H2",{class:!0});var Cp=s(xo);cn=a(Cp,"A",{id:!0,class:!0,href:!0});var tw=s(cn);vl=a(tw,"SPAN",{});var ow=s(vl);f(Us.$$.fragment,ow),ow.forEach(t),tw.forEach(t),hb=l(Cp),wl=a(Cp,"SPAN",{});var nw=s(wl);ub=i(nw,"FlaxBartForQuestionAnswering"),nw.forEach(t),Cp.forEach(t),Sc=l(o),I=a(o,"DIV",{class:!0});var ae=s(I);f(Rs.$$.fragment,ae),mb=l(ae),zo=a(ae,"P",{});var Ti=s(zo);fb=i(Ti,`BART Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),xl=a(Ti,"CODE",{});var aw=s(xl);_b=i(aw,"span start logits"),aw.forEach(t),gb=i(Ti," and "),zl=a(Ti,"CODE",{});var sw=s(zl);kb=i(sw,"span end logits"),sw.forEach(t),bb=i(Ti,")."),Ti.forEach(t),yb=l(ae),Hs=a(ae,"P",{});var Ap=s(Hs);Tb=i(Ap,"This model inherits from "),Qr=a(Ap,"A",{href:!0});var rw=s(Qr);vb=i(rw,"FlaxPreTrainedModel"),rw.forEach(t),wb=i(Ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ap.forEach(t),xb=l(ae),Qs=a(ae,"P",{});var Op=s(Qs);zb=i(Op,`This model is also a Flax Linen
`),Vs=a(Op,"A",{href:!0,rel:!0});var iw=s(Vs);Fb=i(iw,"flax.nn.Module"),iw.forEach(t),qb=i(Op,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Op.forEach(t),Bb=l(ae),Fl=a(ae,"P",{});var dw=s(Fl);$b=i(dw,"Finally, this model supports inherent JAX features such as:"),dw.forEach(t),jb=l(ae),ft=a(ae,"UL",{});var vn=s(ft);ql=a(vn,"LI",{});var lw=s(ql);Js=a(lw,"A",{href:!0,rel:!0});var cw=s(Js);Mb=i(cw,"Just-In-Time (JIT) compilation"),cw.forEach(t),lw.forEach(t),Pb=l(vn),Bl=a(vn,"LI",{});var pw=s(Bl);Ks=a(pw,"A",{href:!0,rel:!0});var hw=s(Ks);Eb=i(hw,"Automatic Differentiation"),hw.forEach(t),pw.forEach(t),Cb=l(vn),$l=a(vn,"LI",{});var uw=s($l);Xs=a(uw,"A",{href:!0,rel:!0});var mw=s(Xs);Ab=i(mw,"Vectorization"),mw.forEach(t),uw.forEach(t),Ob=l(vn),jl=a(vn,"LI",{});var fw=s(jl);Zs=a(fw,"A",{href:!0,rel:!0});var _w=s(Zs);Sb=i(_w,"Parallelization"),_w.forEach(t),fw.forEach(t),vn.forEach(t),Ib=l(ae),Ie=a(ae,"DIV",{class:!0});var Nt=s(Ie);f(Ys.$$.fragment,Nt),Nb=l(Nt),Fo=a(Nt,"P",{});var vi=s(Fo);Lb=i(vi,"The "),Ml=a(vi,"CODE",{});var gw=s(Ml);Db=i(gw,"FlaxBartPreTrainedModel"),gw.forEach(t),Gb=i(vi,"forward method, overrides the "),Pl=a(vi,"CODE",{});var kw=s(Pl);Wb=i(kw,"__call__"),kw.forEach(t),Ub=i(vi," special method."),vi.forEach(t),Rb=l(Nt),f(pn.$$.fragment,Nt),Hb=l(Nt),El=a(Nt,"P",{});var bw=s(El);Qb=i(bw,"Example:"),bw.forEach(t),Vb=l(Nt),f(er.$$.fragment,Nt),Nt.forEach(t),Jb=l(ae),qt=a(ae,"DIV",{class:!0});var wi=s(qt);f(tr.$$.fragment,wi),Kb=l(wi),Cl=a(wi,"P",{});var yw=s(Cl);Xb=i(yw,"Example:"),yw.forEach(t),Zb=l(wi),f(or.$$.fragment,wi),wi.forEach(t),Yb=l(ae),Bt=a(ae,"DIV",{class:!0});var xi=s(Bt);f(nr.$$.fragment,xi),ey=l(xi),Al=a(xi,"P",{});var Tw=s(Al);ty=i(Tw,"Example:"),Tw.forEach(t),oy=l(xi),f(ar.$$.fragment,xi),xi.forEach(t),ae.forEach(t),Ic=l(o),qo=a(o,"H2",{class:!0});var Sp=s(qo);hn=a(Sp,"A",{id:!0,class:!0,href:!0});var vw=s(hn);Ol=a(vw,"SPAN",{});var ww=s(Ol);f(sr.$$.fragment,ww),ww.forEach(t),vw.forEach(t),ny=l(Sp),Sl=a(Sp,"SPAN",{});var xw=s(Sl);ay=i(xw,"FlaxBartForCausalLM"),xw.forEach(t),Sp.forEach(t),Nc=l(o),X=a(o,"DIV",{class:!0});var We=s(X);f(rr.$$.fragment,We),sy=l(We),Il=a(We,"P",{});var zw=s(Il);ry=i(zw,`Bart Decoder Model with a language modeling head on top (linear layer with weights tied to the input embeddings)
e.g for autoregressive tasks.`),zw.forEach(t),iy=l(We),ir=a(We,"P",{});var Ip=s(ir);dy=i(Ip,"This model inherits from "),Vr=a(Ip,"A",{href:!0});var Fw=s(Vr);ly=i(Fw,"FlaxPreTrainedModel"),Fw.forEach(t),cy=i(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(t),py=l(We),dr=a(We,"P",{});var Np=s(dr);hy=i(Np,`This model is also a Flax Linen
`),lr=a(Np,"A",{href:!0,rel:!0});var qw=s(lr);uy=i(qw,"flax.nn.Module"),qw.forEach(t),my=i(Np,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Np.forEach(t),fy=l(We),Nl=a(We,"P",{});var Bw=s(Nl);_y=i(Bw,"Finally, this model supports inherent JAX features such as:"),Bw.forEach(t),gy=l(We),_t=a(We,"UL",{});var wn=s(_t);Ll=a(wn,"LI",{});var $w=s(Ll);cr=a($w,"A",{href:!0,rel:!0});var jw=s(cr);ky=i(jw,"Just-In-Time (JIT) compilation"),jw.forEach(t),$w.forEach(t),by=l(wn),Dl=a(wn,"LI",{});var Mw=s(Dl);pr=a(Mw,"A",{href:!0,rel:!0});var Pw=s(pr);yy=i(Pw,"Automatic Differentiation"),Pw.forEach(t),Mw.forEach(t),Ty=l(wn),Gl=a(wn,"LI",{});var Ew=s(Gl);hr=a(Ew,"A",{href:!0,rel:!0});var Cw=s(hr);vy=i(Cw,"Vectorization"),Cw.forEach(t),Ew.forEach(t),wy=l(wn),Wl=a(wn,"LI",{});var Aw=s(Wl);ur=a(Aw,"A",{href:!0,rel:!0});var Ow=s(ur);xy=i(Ow,"Parallelization"),Ow.forEach(t),Aw.forEach(t),wn.forEach(t),zy=l(We),Ne=a(We,"DIV",{class:!0});var Lt=s(Ne);f(mr.$$.fragment,Lt),Fy=l(Lt),Bo=a(Lt,"P",{});var zi=s(Bo);qy=i(zi,"The "),Ul=a(zi,"CODE",{});var Sw=s(Ul);By=i(Sw,"FlaxBartDecoderPreTrainedModel"),Sw.forEach(t),$y=i(zi,"forward method, overrides the "),Rl=a(zi,"CODE",{});var Iw=s(Rl);jy=i(Iw,"__call__"),Iw.forEach(t),My=i(zi," special method."),zi.forEach(t),Py=l(Lt),f(un.$$.fragment,Lt),Ey=l(Lt),Hl=a(Lt,"P",{});var Nw=s(Hl);Cy=i(Nw,"Example:"),Nw.forEach(t),Ay=l(Lt),f(fr.$$.fragment,Lt),Lt.forEach(t),We.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ix)),c(w,"id","bart"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#bart"),c(T,"class","relative group"),c(ye,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(ye,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(V,"class","relative group"),c(J,"href","https://arxiv.org/abs/1910.13461"),c(J,"rel","nofollow"),c(He,"href","https://huggingface.co/sshleifer"),c(He,"rel","nofollow"),c(Qe,"href","https://github.com/pytorch/fairseq/tree/master/examples/bart"),c(Qe,"rel","nofollow"),c(Pe,"id","examples"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#examples"),c(xe,"class","relative group"),c(zn,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md"),c(zn,"rel","nofollow"),c(br,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Fn,"href","https://discuss.huggingface.co/t/train-bart-for-conditional-generation-e-g-summarization/1904"),c(Fn,"rel","nofollow"),c(qn,"href","https://huggingface.co/models?search=distilbart"),c(qn,"rel","nofollow"),c(Bn,"href","https://arxiv.org/abs/2010.13002"),c(Bn,"rel","nofollow"),c(Mo,"id","implementation-notes"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#implementation-notes"),c(Ht,"class","relative group"),c(yr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartTokenizer"),c(Tr,"href","/docs/transformers/pr_16459/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode"),c(vr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartModel"),c(xr,"href","/docs/transformers/pr_16459/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Po,"id","mask-filling"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#mask-filling"),c(Kt,"class","relative group"),c(Eo,"id","transformers.BartConfig"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.BartConfig"),c(Xt,"class","relative group"),c(zr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartModel"),c(Cn,"href","https://huggingface.co/facebook/bart-large"),c(Cn,"rel","nofollow"),c(Fr,"href","/docs/transformers/pr_16459/en/main_classes/configuration#transformers.PretrainedConfig"),c(qr,"href","/docs/transformers/pr_16459/en/main_classes/configuration#transformers.PretrainedConfig"),c(ze,"class","docstring"),c(Co,"id","transformers.BartTokenizer"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.BartTokenizer"),c(eo,"class","relative group"),c(Br,"href","/docs/transformers/pr_16459/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(bt,"class","docstring"),c(Oo,"class","docstring"),c(So,"class","docstring"),c(Io,"class","docstring"),c(E,"class","docstring"),c(No,"id","transformers.BartTokenizerFast"),c(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(No,"href","#transformers.BartTokenizerFast"),c(to,"class","relative group"),c(Mr,"href","/docs/transformers/pr_16459/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Do,"class","docstring"),c(W,"class","docstring"),c(Go,"id","transformers.BartModel"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.BartModel"),c(oo,"class","relative group"),c(Pr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel"),c(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(aa,"rel","nofollow"),c(Er,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartModel"),c(Ce,"class","docstring"),c(Ke,"class","docstring"),c(Uo,"id","transformers.BartForConditionalGeneration"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.BartForConditionalGeneration"),c(ao,"class","relative group"),c(Cr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel"),c(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pa,"rel","nofollow"),c(Ar,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartForConditionalGeneration"),c(Y,"class","docstring"),c(Xe,"class","docstring"),c(Ho,"id","transformers.BartForSequenceClassification"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.BartForSequenceClassification"),c(ro,"class","relative group"),c(Or,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel"),c(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ba,"rel","nofollow"),c(Sr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartForSequenceClassification"),c(D,"class","docstring"),c(Fe,"class","docstring"),c(Vo,"id","transformers.BartForQuestionAnswering"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.BartForQuestionAnswering"),c(lo,"class","relative group"),c(Ir,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.PreTrainedModel"),c($a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($a,"rel","nofollow"),c(Nr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.BartForQuestionAnswering"),c(fe,"class","docstring"),c(qe,"class","docstring"),c(Ko,"id","transformers.BartForCausalLM"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.BartForCausalLM"),c(ho,"class","relative group"),c(yt,"class","docstring"),c(uo,"class","docstring"),c(Xo,"id","transformers.TFBartModel"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.TFBartModel"),c(mo,"class","relative group"),c(Lr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.TFPreTrainedModel"),c(Da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Da,"rel","nofollow"),c(Dr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.TFBartModel"),c(Ae,"class","docstring"),c(Be,"class","docstring"),c(en,"id","transformers.TFBartForConditionalGeneration"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.TFBartForConditionalGeneration"),c(_o,"class","relative group"),c(Gr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.TFPreTrainedModel"),c(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Va,"rel","nofollow"),c(Wr,"href","/docs/transformers/pr_16459/en/model_doc/bart#transformers.TFBartForConditionalGeneration"),c(ee,"class","docstring"),c($e,"class","docstring"),c(nn,"id","transformers.FlaxBartModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.FlaxBartModel"),c(ko,"class","relative group"),c(Ur,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(os,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ns,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(as,"rel","nofollow"),c(ss,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ss,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(rs,"rel","nofollow"),c(Oe,"class","docstring"),c(Tt,"class","docstring"),c(vt,"class","docstring"),c(U,"class","docstring"),c(sn,"id","transformers.FlaxBartForConditionalGeneration"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.FlaxBartForConditionalGeneration"),c(yo,"class","relative group"),c(Rr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(gs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(gs,"rel","nofollow"),c(ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ks,"rel","nofollow"),c(bs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(bs,"rel","nofollow"),c(ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ys,"rel","nofollow"),c(Ts,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ts,"rel","nofollow"),c(te,"class","docstring"),c(wt,"class","docstring"),c(xt,"class","docstring"),c(R,"class","docstring"),c(dn,"id","transformers.FlaxBartForSequenceClassification"),c(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(dn,"href","#transformers.FlaxBartForSequenceClassification"),c(vo,"class","relative group"),c(Hr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Es,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Es,"rel","nofollow"),c(Cs,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Cs,"rel","nofollow"),c(As,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(As,"rel","nofollow"),c(Os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Os,"rel","nofollow"),c(Ss,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ss,"rel","nofollow"),c(Se,"class","docstring"),c(zt,"class","docstring"),c(Ft,"class","docstring"),c(S,"class","docstring"),c(cn,"id","transformers.FlaxBartForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.FlaxBartForQuestionAnswering"),c(xo,"class","relative group"),c(Qr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Vs,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Vs,"rel","nofollow"),c(Js,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Js,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Xs,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(Ie,"class","docstring"),c(qt,"class","docstring"),c(Bt,"class","docstring"),c(I,"class","docstring"),c(hn,"id","transformers.FlaxBartForCausalLM"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.FlaxBartForCausalLM"),c(qo,"class","relative group"),c(Vr,"href","/docs/transformers/pr_16459/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(lr,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(lr,"rel","nofollow"),c(cr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(cr,"rel","nofollow"),c(pr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(pr,"rel","nofollow"),c(hr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(hr,"rel","nofollow"),c(ur,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ur,"rel","nofollow"),c(Ne,"class","docstring"),c(X,"class","docstring")},m(o,h){e(document.head,p),u(o,z,h),u(o,T,h),e(T,w),e(w,x),_(v,x,null),e(T,y),e(T,q),e(q,se),u(o,A,h),u(o,$,h),e($,pe),e(pe,be),e($,tt),e($,ye),e(ye,Te),e($,ot),u(o,Ze,h),u(o,V,h),e(V,N),e(N,Ue),_(re,Ue,null),e(V,C),e(V,O),e(O,nt),u(o,he,h),u(o,ue,h),e(ue,at),e(ue,J),e(J,st),e(ue,rt),u(o,L,h),u(o,Me,h),e(Me,ve),u(o,Ye,h),u(o,Z,h),e(Z,ie),e(ie,it),e(Z,dt),e(Z,K),e(K,lt),e(Z,we),e(Z,Re),e(Re,F),u(o,P,h),u(o,H,h),e(H,Dt),e(H,He),e(He,de),e(H,Gt),e(H,Qe),e(Qe,Wt),e(H,le),u(o,me,h),u(o,xe,h),e(xe,Pe),e(Pe,ce),_(Ve,ce,null),e(xe,Ut),e(xe,Je),e(Je,Rt),u(o,ac,h),u(o,gt,h),e(gt,xn),e(xn,Lp),e(xn,zn),e(zn,Dp),e(xn,Gp),e(gt,Wp),e(gt,ct),e(ct,Up),e(ct,br),e(br,Rp),e(ct,Hp),e(ct,Fi),e(Fi,Qp),e(ct,Vp),e(ct,Fn),e(Fn,Jp),e(ct,Kp),e(gt,Xp),e(gt,jo),e(jo,qn),e(qn,Zp),e(jo,Yp),e(jo,Bn),e(Bn,eh),e(jo,th),u(o,sc,h),u(o,Ht,h),e(Ht,Mo),e(Mo,qi),_($n,qi,null),e(Ht,oh),e(Ht,Bi),e(Bi,nh),u(o,rc,h),u(o,Ee,h),e(Ee,pt),e(pt,ah),e(pt,$i),e($i,sh),e(pt,rh),e(pt,yr),e(yr,ih),e(pt,dh),e(pt,Tr),e(Tr,lh),e(pt,ch),e(Ee,ph),e(Ee,Qt),e(Qt,hh),e(Qt,vr),e(vr,uh),e(Qt,mh),e(Qt,ji),e(ji,fh),e(Qt,_h),e(Ee,gh),e(Ee,Vt),e(Vt,kh),e(Vt,Mi),e(Mi,bh),e(Vt,yh),e(Vt,Pi),e(Pi,Th),e(Vt,vh),e(Ee,wh),e(Ee,wr),e(wr,xr),e(xr,xh),e(wr,zh),e(Ee,Fh),e(Ee,Jt),e(Jt,qh),e(Jt,Ei),e(Ei,Bh),e(Jt,$h),e(Jt,Ci),e(Ci,jh),e(Jt,Mh),u(o,ic,h),u(o,Kt,h),e(Kt,Po),e(Po,Ai),_(jn,Ai,null),e(Kt,Ph),e(Kt,Oi),e(Oi,Eh),u(o,dc,h),u(o,kt,h),e(kt,Ch),e(kt,Si),e(Si,Ah),e(kt,Oh),e(kt,Ii),e(Ii,Sh),e(kt,Ih),u(o,lc,h),_(Mn,o,h),u(o,cc,h),u(o,Xt,h),e(Xt,Eo),e(Eo,Ni),_(Pn,Ni,null),e(Xt,Nh),e(Xt,Li),e(Li,Lh),u(o,pc,h),u(o,ze,h),_(En,ze,null),e(ze,Dh),e(ze,Zt),e(Zt,Gh),e(Zt,zr),e(zr,Wh),e(Zt,Uh),e(Zt,Cn),e(Cn,Rh),e(Zt,Hh),e(ze,Qh),e(ze,Yt),e(Yt,Vh),e(Yt,Fr),e(Fr,Jh),e(Yt,Kh),e(Yt,qr),e(qr,Xh),e(Yt,Zh),e(ze,Yh),e(ze,Di),e(Di,eu),e(ze,tu),_(An,ze,null),u(o,hc,h),u(o,eo,h),e(eo,Co),e(Co,Gi),_(On,Gi,null),e(eo,ou),e(eo,Wi),e(Wi,nu),u(o,uc,h),u(o,E,h),_(Sn,E,null),e(E,au),e(E,Ui),e(Ui,su),e(E,ru),e(E,Ri),e(Ri,iu),e(E,du),_(In,E,null),e(E,lu),e(E,Nn),e(Nn,cu),e(Nn,Hi),e(Hi,pu),e(Nn,hu),e(E,uu),_(Ao,E,null),e(E,mu),e(E,Ln),e(Ln,fu),e(Ln,Br),e(Br,_u),e(Ln,gu),e(E,ku),e(E,bt),_(Dn,bt,null),e(bt,bu),e(bt,Qi),e(Qi,yu),e(bt,Tu),e(bt,Gn),e(Gn,$r),e($r,vu),e($r,Vi),e(Vi,wu),e(Gn,xu),e(Gn,jr),e(jr,zu),e(jr,Ji),e(Ji,Fu),e(E,qu),e(E,Oo),_(Wn,Oo,null),e(Oo,Bu),e(Oo,Ki),e(Ki,$u),e(E,ju),e(E,So),_(Un,So,null),e(So,Mu),e(So,Xi),e(Xi,Pu),e(E,Eu),e(E,Io),_(Rn,Io,null),e(Io,Cu),e(Io,Hn),e(Hn,Au),e(Hn,Zi),e(Zi,Ou),e(Hn,Su),u(o,mc,h),u(o,to,h),e(to,No),e(No,Yi),_(Qn,Yi,null),e(to,Iu),e(to,ed),e(ed,Nu),u(o,fc,h),u(o,W,h),_(Vn,W,null),e(W,Lu),e(W,Jn),e(Jn,Du),e(Jn,td),e(td,Gu),e(Jn,Wu),e(W,Uu),e(W,od),e(od,Ru),e(W,Hu),_(Kn,W,null),e(W,Qu),e(W,Xn),e(Xn,Vu),e(Xn,nd),e(nd,Ju),e(Xn,Ku),e(W,Xu),_(Lo,W,null),e(W,Zu),e(W,Zn),e(Zn,Yu),e(Zn,Mr),e(Mr,em),e(Zn,tm),e(W,om),e(W,Do),_(Yn,Do,null),e(Do,nm),e(Do,ad),e(ad,am),u(o,_c,h),u(o,oo,h),e(oo,Go),e(Go,sd),_(ea,sd,null),e(oo,sm),e(oo,rd),e(rd,rm),u(o,gc,h),u(o,Ke,h),_(ta,Ke,null),e(Ke,im),e(Ke,oa),e(oa,dm),e(oa,Pr),e(Pr,lm),e(oa,cm),e(Ke,pm),e(Ke,na),e(na,hm),e(na,aa),e(aa,um),e(na,mm),e(Ke,fm),e(Ke,Ce),_(sa,Ce,null),e(Ce,_m),e(Ce,no),e(no,gm),e(no,Er),e(Er,km),e(no,bm),e(no,id),e(id,ym),e(no,Tm),e(Ce,vm),_(Wo,Ce,null),e(Ce,wm),e(Ce,dd),e(dd,xm),e(Ce,zm),_(ra,Ce,null),u(o,kc,h),u(o,ao,h),e(ao,Uo),e(Uo,ld),_(ia,ld,null),e(ao,Fm),e(ao,cd),e(cd,qm),u(o,bc,h),u(o,Xe,h),_(da,Xe,null),e(Xe,Bm),e(Xe,la),e(la,$m),e(la,Cr),e(Cr,jm),e(la,Mm),e(Xe,Pm),e(Xe,ca),e(ca,Em),e(ca,pa),e(pa,Cm),e(ca,Am),e(Xe,Om),e(Xe,Y),_(ha,Y,null),e(Y,Sm),e(Y,so),e(so,Im),e(so,Ar),e(Ar,Nm),e(so,Lm),e(so,pd),e(pd,Dm),e(so,Gm),e(Y,Wm),_(Ro,Y,null),e(Y,Um),e(Y,hd),e(hd,Rm),e(Y,Hm),_(ua,Y,null),e(Y,Qm),e(Y,ud),e(ud,Vm),e(Y,Jm),_(ma,Y,null),u(o,yc,h),u(o,ro,h),e(ro,Ho),e(Ho,md),_(fa,md,null),e(ro,Km),e(ro,fd),e(fd,Xm),u(o,Tc,h),u(o,Fe,h),_(_a,Fe,null),e(Fe,Zm),e(Fe,_d),e(_d,Ym),e(Fe,ef),e(Fe,ga),e(ga,tf),e(ga,Or),e(Or,of),e(ga,nf),e(Fe,af),e(Fe,ka),e(ka,sf),e(ka,ba),e(ba,rf),e(ka,df),e(Fe,lf),e(Fe,D),_(ya,D,null),e(D,cf),e(D,io),e(io,pf),e(io,Sr),e(Sr,hf),e(io,uf),e(io,gd),e(gd,mf),e(io,ff),e(D,_f),_(Qo,D,null),e(D,gf),e(D,kd),e(kd,kf),e(D,bf),_(Ta,D,null),e(D,yf),_(va,D,null),e(D,Tf),e(D,bd),e(bd,vf),e(D,wf),_(wa,D,null),e(D,xf),_(xa,D,null),u(o,vc,h),u(o,lo,h),e(lo,Vo),e(Vo,yd),_(za,yd,null),e(lo,zf),e(lo,Td),e(Td,Ff),u(o,wc,h),u(o,qe,h),_(Fa,qe,null),e(qe,qf),e(qe,co),e(co,Bf),e(co,vd),e(vd,$f),e(co,jf),e(co,wd),e(wd,Mf),e(co,Pf),e(qe,Ef),e(qe,qa),e(qa,Cf),e(qa,Ir),e(Ir,Af),e(qa,Of),e(qe,Sf),e(qe,Ba),e(Ba,If),e(Ba,$a),e($a,Nf),e(Ba,Lf),e(qe,Df),e(qe,fe),_(ja,fe,null),e(fe,Gf),e(fe,po),e(po,Wf),e(po,Nr),e(Nr,Uf),e(po,Rf),e(po,xd),e(xd,Hf),e(po,Qf),e(fe,Vf),_(Jo,fe,null),e(fe,Jf),e(fe,zd),e(zd,Kf),e(fe,Xf),_(Ma,fe,null),e(fe,Zf),_(Pa,fe,null),u(o,xc,h),u(o,ho,h),e(ho,Ko),e(Ko,Fd),_(Ea,Fd,null),e(ho,Yf),e(ho,qd),e(qd,e_),u(o,zc,h),u(o,uo,h),_(Ca,uo,null),e(uo,t_),e(uo,yt),_(Aa,yt,null),e(yt,o_),e(yt,Bd),e(Bd,n_),e(yt,a_),_(Oa,yt,null),u(o,Fc,h),u(o,mo,h),e(mo,Xo),e(Xo,$d),_(Sa,$d,null),e(mo,s_),e(mo,jd),e(jd,r_),u(o,qc,h),u(o,Be,h),_(Ia,Be,null),e(Be,i_),e(Be,Na),e(Na,d_),e(Na,Lr),e(Lr,l_),e(Na,c_),e(Be,p_),e(Be,La),e(La,h_),e(La,Da),e(Da,u_),e(La,m_),e(Be,f_),_(Zo,Be,null),e(Be,__),e(Be,Ae),_(Ga,Ae,null),e(Ae,g_),e(Ae,fo),e(fo,k_),e(fo,Dr),e(Dr,b_),e(fo,y_),e(fo,Md),e(Md,T_),e(fo,v_),e(Ae,w_),_(Yo,Ae,null),e(Ae,x_),e(Ae,Pd),e(Pd,z_),e(Ae,F_),_(Wa,Ae,null),u(o,Bc,h),u(o,_o,h),e(_o,en),e(en,Ed),_(Ua,Ed,null),e(_o,q_),e(_o,Cd),e(Cd,B_),u(o,$c,h),u(o,$e,h),_(Ra,$e,null),e($e,$_),e($e,Ha),e(Ha,j_),e(Ha,Gr),e(Gr,M_),e(Ha,P_),e($e,E_),e($e,Qa),e(Qa,C_),e(Qa,Va),e(Va,A_),e(Qa,O_),e($e,S_),_(tn,$e,null),e($e,I_),e($e,ee),_(Ja,ee,null),e(ee,N_),e(ee,go),e(go,L_),e(go,Wr),e(Wr,D_),e(go,G_),e(go,Ad),e(Ad,W_),e(go,U_),e(ee,R_),_(on,ee,null),e(ee,H_),e(ee,Od),e(Od,Q_),e(ee,V_),_(Ka,ee,null),e(ee,J_),e(ee,Sd),e(Sd,K_),e(ee,X_),_(Xa,ee,null),u(o,jc,h),u(o,ko,h),e(ko,nn),e(nn,Id),_(Za,Id,null),e(ko,Z_),e(ko,Nd),e(Nd,Y_),u(o,Mc,h),u(o,U,h),_(Ya,U,null),e(U,eg),e(U,es),e(es,tg),e(es,Ur),e(Ur,og),e(es,ng),e(U,ag),e(U,ts),e(ts,sg),e(ts,os),e(os,rg),e(ts,ig),e(U,dg),e(U,Ld),e(Ld,lg),e(U,cg),e(U,ht),e(ht,Dd),e(Dd,ns),e(ns,pg),e(ht,hg),e(ht,Gd),e(Gd,as),e(as,ug),e(ht,mg),e(ht,Wd),e(Wd,ss),e(ss,fg),e(ht,_g),e(ht,Ud),e(Ud,rs),e(rs,gg),e(U,kg),e(U,Oe),_(is,Oe,null),e(Oe,bg),e(Oe,bo),e(bo,yg),e(bo,Rd),e(Rd,Tg),e(bo,vg),e(bo,Hd),e(Hd,wg),e(bo,xg),e(Oe,zg),_(an,Oe,null),e(Oe,Fg),e(Oe,Qd),e(Qd,qg),e(Oe,Bg),_(ds,Oe,null),e(U,$g),e(U,Tt),_(ls,Tt,null),e(Tt,jg),e(Tt,Vd),e(Vd,Mg),e(Tt,Pg),_(cs,Tt,null),e(U,Eg),e(U,vt),_(ps,vt,null),e(vt,Cg),e(vt,Jd),e(Jd,Ag),e(vt,Og),_(hs,vt,null),u(o,Pc,h),u(o,yo,h),e(yo,sn),e(sn,Kd),_(us,Kd,null),e(yo,Sg),e(yo,Xd),e(Xd,Ig),u(o,Ec,h),u(o,R,h),_(ms,R,null),e(R,Ng),e(R,fs),e(fs,Lg),e(fs,Rr),e(Rr,Dg),e(fs,Gg),e(R,Wg),e(R,_s),e(_s,Ug),e(_s,gs),e(gs,Rg),e(_s,Hg),e(R,Qg),e(R,Zd),e(Zd,Vg),e(R,Jg),e(R,ut),e(ut,Yd),e(Yd,ks),e(ks,Kg),e(ut,Xg),e(ut,el),e(el,bs),e(bs,Zg),e(ut,Yg),e(ut,tl),e(tl,ys),e(ys,ek),e(ut,tk),e(ut,ol),e(ol,Ts),e(Ts,ok),e(R,nk),e(R,te),_(vs,te,null),e(te,ak),e(te,To),e(To,sk),e(To,nl),e(nl,rk),e(To,ik),e(To,al),e(al,dk),e(To,lk),e(te,ck),_(rn,te,null),e(te,pk),e(te,sl),e(sl,hk),e(te,uk),_(ws,te,null),e(te,mk),e(te,rl),e(rl,fk),e(te,_k),_(xs,te,null),e(R,gk),e(R,wt),_(zs,wt,null),e(wt,kk),e(wt,il),e(il,bk),e(wt,yk),_(Fs,wt,null),e(R,Tk),e(R,xt),_(qs,xt,null),e(xt,vk),e(xt,dl),e(dl,wk),e(xt,xk),_(Bs,xt,null),u(o,Cc,h),u(o,vo,h),e(vo,dn),e(dn,ll),_($s,ll,null),e(vo,zk),e(vo,cl),e(cl,Fk),u(o,Ac,h),u(o,S,h),_(js,S,null),e(S,qk),e(S,pl),e(pl,Bk),e(S,$k),e(S,Ms),e(Ms,jk),e(Ms,Hr),e(Hr,Mk),e(Ms,Pk),e(S,Ek),e(S,Ps),e(Ps,Ck),e(Ps,Es),e(Es,Ak),e(Ps,Ok),e(S,Sk),e(S,hl),e(hl,Ik),e(S,Nk),e(S,mt),e(mt,ul),e(ul,Cs),e(Cs,Lk),e(mt,Dk),e(mt,ml),e(ml,As),e(As,Gk),e(mt,Wk),e(mt,fl),e(fl,Os),e(Os,Uk),e(mt,Rk),e(mt,_l),e(_l,Ss),e(Ss,Hk),e(S,Qk),e(S,Se),_(Is,Se,null),e(Se,Vk),e(Se,wo),e(wo,Jk),e(wo,gl),e(gl,Kk),e(wo,Xk),e(wo,kl),e(kl,Zk),e(wo,Yk),e(Se,eb),_(ln,Se,null),e(Se,tb),e(Se,bl),e(bl,ob),e(Se,nb),_(Ns,Se,null),e(S,ab),e(S,zt),_(Ls,zt,null),e(zt,sb),e(zt,yl),e(yl,rb),e(zt,ib),_(Ds,zt,null),e(S,db),e(S,Ft),_(Gs,Ft,null),e(Ft,lb),e(Ft,Tl),e(Tl,cb),e(Ft,pb),_(Ws,Ft,null),u(o,Oc,h),u(o,xo,h),e(xo,cn),e(cn,vl),_(Us,vl,null),e(xo,hb),e(xo,wl),e(wl,ub),u(o,Sc,h),u(o,I,h),_(Rs,I,null),e(I,mb),e(I,zo),e(zo,fb),e(zo,xl),e(xl,_b),e(zo,gb),e(zo,zl),e(zl,kb),e(zo,bb),e(I,yb),e(I,Hs),e(Hs,Tb),e(Hs,Qr),e(Qr,vb),e(Hs,wb),e(I,xb),e(I,Qs),e(Qs,zb),e(Qs,Vs),e(Vs,Fb),e(Qs,qb),e(I,Bb),e(I,Fl),e(Fl,$b),e(I,jb),e(I,ft),e(ft,ql),e(ql,Js),e(Js,Mb),e(ft,Pb),e(ft,Bl),e(Bl,Ks),e(Ks,Eb),e(ft,Cb),e(ft,$l),e($l,Xs),e(Xs,Ab),e(ft,Ob),e(ft,jl),e(jl,Zs),e(Zs,Sb),e(I,Ib),e(I,Ie),_(Ys,Ie,null),e(Ie,Nb),e(Ie,Fo),e(Fo,Lb),e(Fo,Ml),e(Ml,Db),e(Fo,Gb),e(Fo,Pl),e(Pl,Wb),e(Fo,Ub),e(Ie,Rb),_(pn,Ie,null),e(Ie,Hb),e(Ie,El),e(El,Qb),e(Ie,Vb),_(er,Ie,null),e(I,Jb),e(I,qt),_(tr,qt,null),e(qt,Kb),e(qt,Cl),e(Cl,Xb),e(qt,Zb),_(or,qt,null),e(I,Yb),e(I,Bt),_(nr,Bt,null),e(Bt,ey),e(Bt,Al),e(Al,ty),e(Bt,oy),_(ar,Bt,null),u(o,Ic,h),u(o,qo,h),e(qo,hn),e(hn,Ol),_(sr,Ol,null),e(qo,ny),e(qo,Sl),e(Sl,ay),u(o,Nc,h),u(o,X,h),_(rr,X,null),e(X,sy),e(X,Il),e(Il,ry),e(X,iy),e(X,ir),e(ir,dy),e(ir,Vr),e(Vr,ly),e(ir,cy),e(X,py),e(X,dr),e(dr,hy),e(dr,lr),e(lr,uy),e(dr,my),e(X,fy),e(X,Nl),e(Nl,_y),e(X,gy),e(X,_t),e(_t,Ll),e(Ll,cr),e(cr,ky),e(_t,by),e(_t,Dl),e(Dl,pr),e(pr,yy),e(_t,Ty),e(_t,Gl),e(Gl,hr),e(hr,vy),e(_t,wy),e(_t,Wl),e(Wl,ur),e(ur,xy),e(X,zy),e(X,Ne),_(mr,Ne,null),e(Ne,Fy),e(Ne,Bo),e(Bo,qy),e(Bo,Ul),e(Ul,By),e(Bo,$y),e(Bo,Rl),e(Rl,jy),e(Bo,My),e(Ne,Py),_(un,Ne,null),e(Ne,Ey),e(Ne,Hl),e(Hl,Cy),e(Ne,Ay),_(fr,Ne,null),Lc=!0},p(o,[h]){const _r={};h&2&&(_r.$$scope={dirty:h,ctx:o}),Ao.$set(_r);const Ql={};h&2&&(Ql.$$scope={dirty:h,ctx:o}),Lo.$set(Ql);const Vl={};h&2&&(Vl.$$scope={dirty:h,ctx:o}),Wo.$set(Vl);const Jl={};h&2&&(Jl.$$scope={dirty:h,ctx:o}),Ro.$set(Jl);const mn={};h&2&&(mn.$$scope={dirty:h,ctx:o}),Qo.$set(mn);const Kl={};h&2&&(Kl.$$scope={dirty:h,ctx:o}),Jo.$set(Kl);const Xl={};h&2&&(Xl.$$scope={dirty:h,ctx:o}),Zo.$set(Xl);const gr={};h&2&&(gr.$$scope={dirty:h,ctx:o}),Yo.$set(gr);const Zl={};h&2&&(Zl.$$scope={dirty:h,ctx:o}),tn.$set(Zl);const Yl={};h&2&&(Yl.$$scope={dirty:h,ctx:o}),on.$set(Yl);const ec={};h&2&&(ec.$$scope={dirty:h,ctx:o}),an.$set(ec);const kr={};h&2&&(kr.$$scope={dirty:h,ctx:o}),rn.$set(kr);const tc={};h&2&&(tc.$$scope={dirty:h,ctx:o}),ln.$set(tc);const oc={};h&2&&(oc.$$scope={dirty:h,ctx:o}),pn.$set(oc);const $o={};h&2&&($o.$$scope={dirty:h,ctx:o}),un.$set($o)},i(o){Lc||(g(v.$$.fragment,o),g(re.$$.fragment,o),g(Ve.$$.fragment,o),g($n.$$.fragment,o),g(jn.$$.fragment,o),g(Mn.$$.fragment,o),g(Pn.$$.fragment,o),g(En.$$.fragment,o),g(An.$$.fragment,o),g(On.$$.fragment,o),g(Sn.$$.fragment,o),g(In.$$.fragment,o),g(Ao.$$.fragment,o),g(Dn.$$.fragment,o),g(Wn.$$.fragment,o),g(Un.$$.fragment,o),g(Rn.$$.fragment,o),g(Qn.$$.fragment,o),g(Vn.$$.fragment,o),g(Kn.$$.fragment,o),g(Lo.$$.fragment,o),g(Yn.$$.fragment,o),g(ea.$$.fragment,o),g(ta.$$.fragment,o),g(sa.$$.fragment,o),g(Wo.$$.fragment,o),g(ra.$$.fragment,o),g(ia.$$.fragment,o),g(da.$$.fragment,o),g(ha.$$.fragment,o),g(Ro.$$.fragment,o),g(ua.$$.fragment,o),g(ma.$$.fragment,o),g(fa.$$.fragment,o),g(_a.$$.fragment,o),g(ya.$$.fragment,o),g(Qo.$$.fragment,o),g(Ta.$$.fragment,o),g(va.$$.fragment,o),g(wa.$$.fragment,o),g(xa.$$.fragment,o),g(za.$$.fragment,o),g(Fa.$$.fragment,o),g(ja.$$.fragment,o),g(Jo.$$.fragment,o),g(Ma.$$.fragment,o),g(Pa.$$.fragment,o),g(Ea.$$.fragment,o),g(Ca.$$.fragment,o),g(Aa.$$.fragment,o),g(Oa.$$.fragment,o),g(Sa.$$.fragment,o),g(Ia.$$.fragment,o),g(Zo.$$.fragment,o),g(Ga.$$.fragment,o),g(Yo.$$.fragment,o),g(Wa.$$.fragment,o),g(Ua.$$.fragment,o),g(Ra.$$.fragment,o),g(tn.$$.fragment,o),g(Ja.$$.fragment,o),g(on.$$.fragment,o),g(Ka.$$.fragment,o),g(Xa.$$.fragment,o),g(Za.$$.fragment,o),g(Ya.$$.fragment,o),g(is.$$.fragment,o),g(an.$$.fragment,o),g(ds.$$.fragment,o),g(ls.$$.fragment,o),g(cs.$$.fragment,o),g(ps.$$.fragment,o),g(hs.$$.fragment,o),g(us.$$.fragment,o),g(ms.$$.fragment,o),g(vs.$$.fragment,o),g(rn.$$.fragment,o),g(ws.$$.fragment,o),g(xs.$$.fragment,o),g(zs.$$.fragment,o),g(Fs.$$.fragment,o),g(qs.$$.fragment,o),g(Bs.$$.fragment,o),g($s.$$.fragment,o),g(js.$$.fragment,o),g(Is.$$.fragment,o),g(ln.$$.fragment,o),g(Ns.$$.fragment,o),g(Ls.$$.fragment,o),g(Ds.$$.fragment,o),g(Gs.$$.fragment,o),g(Ws.$$.fragment,o),g(Us.$$.fragment,o),g(Rs.$$.fragment,o),g(Ys.$$.fragment,o),g(pn.$$.fragment,o),g(er.$$.fragment,o),g(tr.$$.fragment,o),g(or.$$.fragment,o),g(nr.$$.fragment,o),g(ar.$$.fragment,o),g(sr.$$.fragment,o),g(rr.$$.fragment,o),g(mr.$$.fragment,o),g(un.$$.fragment,o),g(fr.$$.fragment,o),Lc=!0)},o(o){k(v.$$.fragment,o),k(re.$$.fragment,o),k(Ve.$$.fragment,o),k($n.$$.fragment,o),k(jn.$$.fragment,o),k(Mn.$$.fragment,o),k(Pn.$$.fragment,o),k(En.$$.fragment,o),k(An.$$.fragment,o),k(On.$$.fragment,o),k(Sn.$$.fragment,o),k(In.$$.fragment,o),k(Ao.$$.fragment,o),k(Dn.$$.fragment,o),k(Wn.$$.fragment,o),k(Un.$$.fragment,o),k(Rn.$$.fragment,o),k(Qn.$$.fragment,o),k(Vn.$$.fragment,o),k(Kn.$$.fragment,o),k(Lo.$$.fragment,o),k(Yn.$$.fragment,o),k(ea.$$.fragment,o),k(ta.$$.fragment,o),k(sa.$$.fragment,o),k(Wo.$$.fragment,o),k(ra.$$.fragment,o),k(ia.$$.fragment,o),k(da.$$.fragment,o),k(ha.$$.fragment,o),k(Ro.$$.fragment,o),k(ua.$$.fragment,o),k(ma.$$.fragment,o),k(fa.$$.fragment,o),k(_a.$$.fragment,o),k(ya.$$.fragment,o),k(Qo.$$.fragment,o),k(Ta.$$.fragment,o),k(va.$$.fragment,o),k(wa.$$.fragment,o),k(xa.$$.fragment,o),k(za.$$.fragment,o),k(Fa.$$.fragment,o),k(ja.$$.fragment,o),k(Jo.$$.fragment,o),k(Ma.$$.fragment,o),k(Pa.$$.fragment,o),k(Ea.$$.fragment,o),k(Ca.$$.fragment,o),k(Aa.$$.fragment,o),k(Oa.$$.fragment,o),k(Sa.$$.fragment,o),k(Ia.$$.fragment,o),k(Zo.$$.fragment,o),k(Ga.$$.fragment,o),k(Yo.$$.fragment,o),k(Wa.$$.fragment,o),k(Ua.$$.fragment,o),k(Ra.$$.fragment,o),k(tn.$$.fragment,o),k(Ja.$$.fragment,o),k(on.$$.fragment,o),k(Ka.$$.fragment,o),k(Xa.$$.fragment,o),k(Za.$$.fragment,o),k(Ya.$$.fragment,o),k(is.$$.fragment,o),k(an.$$.fragment,o),k(ds.$$.fragment,o),k(ls.$$.fragment,o),k(cs.$$.fragment,o),k(ps.$$.fragment,o),k(hs.$$.fragment,o),k(us.$$.fragment,o),k(ms.$$.fragment,o),k(vs.$$.fragment,o),k(rn.$$.fragment,o),k(ws.$$.fragment,o),k(xs.$$.fragment,o),k(zs.$$.fragment,o),k(Fs.$$.fragment,o),k(qs.$$.fragment,o),k(Bs.$$.fragment,o),k($s.$$.fragment,o),k(js.$$.fragment,o),k(Is.$$.fragment,o),k(ln.$$.fragment,o),k(Ns.$$.fragment,o),k(Ls.$$.fragment,o),k(Ds.$$.fragment,o),k(Gs.$$.fragment,o),k(Ws.$$.fragment,o),k(Us.$$.fragment,o),k(Rs.$$.fragment,o),k(Ys.$$.fragment,o),k(pn.$$.fragment,o),k(er.$$.fragment,o),k(tr.$$.fragment,o),k(or.$$.fragment,o),k(nr.$$.fragment,o),k(ar.$$.fragment,o),k(sr.$$.fragment,o),k(rr.$$.fragment,o),k(mr.$$.fragment,o),k(un.$$.fragment,o),k(fr.$$.fragment,o),Lc=!1},d(o){t(p),o&&t(z),o&&t(T),b(v),o&&t(A),o&&t($),o&&t(Ze),o&&t(V),b(re),o&&t(he),o&&t(ue),o&&t(L),o&&t(Me),o&&t(Ye),o&&t(Z),o&&t(P),o&&t(H),o&&t(me),o&&t(xe),b(Ve),o&&t(ac),o&&t(gt),o&&t(sc),o&&t(Ht),b($n),o&&t(rc),o&&t(Ee),o&&t(ic),o&&t(Kt),b(jn),o&&t(dc),o&&t(kt),o&&t(lc),b(Mn,o),o&&t(cc),o&&t(Xt),b(Pn),o&&t(pc),o&&t(ze),b(En),b(An),o&&t(hc),o&&t(eo),b(On),o&&t(uc),o&&t(E),b(Sn),b(In),b(Ao),b(Dn),b(Wn),b(Un),b(Rn),o&&t(mc),o&&t(to),b(Qn),o&&t(fc),o&&t(W),b(Vn),b(Kn),b(Lo),b(Yn),o&&t(_c),o&&t(oo),b(ea),o&&t(gc),o&&t(Ke),b(ta),b(sa),b(Wo),b(ra),o&&t(kc),o&&t(ao),b(ia),o&&t(bc),o&&t(Xe),b(da),b(ha),b(Ro),b(ua),b(ma),o&&t(yc),o&&t(ro),b(fa),o&&t(Tc),o&&t(Fe),b(_a),b(ya),b(Qo),b(Ta),b(va),b(wa),b(xa),o&&t(vc),o&&t(lo),b(za),o&&t(wc),o&&t(qe),b(Fa),b(ja),b(Jo),b(Ma),b(Pa),o&&t(xc),o&&t(ho),b(Ea),o&&t(zc),o&&t(uo),b(Ca),b(Aa),b(Oa),o&&t(Fc),o&&t(mo),b(Sa),o&&t(qc),o&&t(Be),b(Ia),b(Zo),b(Ga),b(Yo),b(Wa),o&&t(Bc),o&&t(_o),b(Ua),o&&t($c),o&&t($e),b(Ra),b(tn),b(Ja),b(on),b(Ka),b(Xa),o&&t(jc),o&&t(ko),b(Za),o&&t(Mc),o&&t(U),b(Ya),b(is),b(an),b(ds),b(ls),b(cs),b(ps),b(hs),o&&t(Pc),o&&t(yo),b(us),o&&t(Ec),o&&t(R),b(ms),b(vs),b(rn),b(ws),b(xs),b(zs),b(Fs),b(qs),b(Bs),o&&t(Cc),o&&t(vo),b($s),o&&t(Ac),o&&t(S),b(js),b(Is),b(ln),b(Ns),b(Ls),b(Ds),b(Gs),b(Ws),o&&t(Oc),o&&t(xo),b(Us),o&&t(Sc),o&&t(I),b(Rs),b(Ys),b(pn),b(er),b(tr),b(or),b(nr),b(ar),o&&t(Ic),o&&t(qo),b(sr),o&&t(Nc),o&&t(X),b(rr),b(mr),b(un),b(fr)}}}const ix={local:"bart",sections:[{local:"overview",sections:[{local:"examples",title:"Examples"}],title:"Overview"},{local:"implementation-notes",title:"Implementation Notes"},{local:"mask-filling",title:"Mask Filling"},{local:"transformers.BartConfig",title:"BartConfig"},{local:"transformers.BartTokenizer",title:"BartTokenizer"},{local:"transformers.BartTokenizerFast",title:"BartTokenizerFast"},{local:"transformers.BartModel",title:"BartModel"},{local:"transformers.BartForConditionalGeneration",title:"BartForConditionalGeneration"},{local:"transformers.BartForSequenceClassification",title:"BartForSequenceClassification"},{local:"transformers.BartForQuestionAnswering",title:"BartForQuestionAnswering"},{local:"transformers.BartForCausalLM",title:"BartForCausalLM"},{local:"transformers.TFBartModel",title:"TFBartModel"},{local:"transformers.TFBartForConditionalGeneration",title:"TFBartForConditionalGeneration"},{local:"transformers.FlaxBartModel",title:"FlaxBartModel"},{local:"transformers.FlaxBartForConditionalGeneration",title:"FlaxBartForConditionalGeneration"},{local:"transformers.FlaxBartForSequenceClassification",title:"FlaxBartForSequenceClassification"},{local:"transformers.FlaxBartForQuestionAnswering",title:"FlaxBartForQuestionAnswering"},{local:"transformers.FlaxBartForCausalLM",title:"FlaxBartForCausalLM"}],title:"BART"};function dx(j){return Uw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mx extends Lw{constructor(p){super();Dw(this,p,dx,rx,Gw,{})}}export{mx as default,ix as metadata};
