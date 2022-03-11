import{S as Wm,i as Qm,s as Um,e as a,k as l,w as k,t as n,M as Hm,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y,q as b,o as P,B as $}from"../../chunks/vendor-4833417e.js";import{T as Ke}from"../../chunks/Tip-fffd6df1.js";import{D as ae}from"../../chunks/Docstring-4f315ed9.js";import{C as Ie}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Xe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Rm(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function Vm(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function Km(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function Xm(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function Ym(A){let p,F,m,_,v,T,g,G,pe,K,E,X,O,Z,he,B,ue,re,L,I,ee,te,J,M,fe,U,ie,Y,H,oe,me,x,le,S,ge,de,N,W,_e,q,Te,R,ne;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),G=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),ue=n("model(inputs)"),re=n("."),L=l(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),U=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),me=l(),x=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),q=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var j=i(p);F=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),g=d(V),G=r(V,"LI",{});var xe=i(G);pe=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var qe=i(O);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),he=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var ze=i(B);ue=s(ze,"model(inputs)"),ze.forEach(t),re=s(z,"."),z.forEach(t),L=d(h),I=r(h,"P",{});var Ee=i(I);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);M=r(C,"LI",{});var Q=i(M);fe=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var ce=i(U);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),Q.forEach(t),me=d(C),x=r(C,"LI",{});var D=i(x);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ce=i(S);ge=s(Ce,"model([input_ids, attention_mask])"),Ce.forEach(t),de=s(D," or "),N=r(D,"CODE",{});var ve=i(N);W=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),D.forEach(t),_e=d(C),q=r(C,"LI",{});var ke=i(q);Te=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ae=i(R);ne=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),C.forEach(t)},m(h,j){u(h,p,j),e(p,F),u(h,m,j),u(h,_,j),e(_,v),e(v,T),e(_,g),e(_,G),e(G,pe),u(h,K,j),u(h,E,j),e(E,X),e(E,O),e(O,Z),e(E,he),e(E,B),e(B,ue),e(E,re),u(h,L,j),u(h,I,j),e(I,ee),u(h,te,j),u(h,J,j),e(J,M),e(M,fe),e(M,U),e(U,ie),e(M,Y),e(M,H),e(H,oe),e(J,me),e(J,x),e(x,le),e(x,S),e(S,ge),e(x,de),e(x,N),e(N,W),e(J,_e),e(J,q),e(q,Te),e(q,R),e(R,ne)},d(h){h&&t(p),h&&t(m),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(I),h&&t(te),h&&t(J)}}}function Zm(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function eg(A){let p,F,m,_,v,T,g,G,pe,K,E,X,O,Z,he,B,ue,re,L,I,ee,te,J,M,fe,U,ie,Y,H,oe,me,x,le,S,ge,de,N,W,_e,q,Te,R,ne;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),G=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),ue=n("model(inputs)"),re=n("."),L=l(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),U=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),me=l(),x=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),q=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var j=i(p);F=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),g=d(V),G=r(V,"LI",{});var xe=i(G);pe=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var qe=i(O);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),he=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var ze=i(B);ue=s(ze,"model(inputs)"),ze.forEach(t),re=s(z,"."),z.forEach(t),L=d(h),I=r(h,"P",{});var Ee=i(I);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);M=r(C,"LI",{});var Q=i(M);fe=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var ce=i(U);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),Q.forEach(t),me=d(C),x=r(C,"LI",{});var D=i(x);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ce=i(S);ge=s(Ce,"model([input_ids, attention_mask])"),Ce.forEach(t),de=s(D," or "),N=r(D,"CODE",{});var ve=i(N);W=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),D.forEach(t),_e=d(C),q=r(C,"LI",{});var ke=i(q);Te=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ae=i(R);ne=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),C.forEach(t)},m(h,j){u(h,p,j),e(p,F),u(h,m,j),u(h,_,j),e(_,v),e(v,T),e(_,g),e(_,G),e(G,pe),u(h,K,j),u(h,E,j),e(E,X),e(E,O),e(O,Z),e(E,he),e(E,B),e(B,ue),e(E,re),u(h,L,j),u(h,I,j),e(I,ee),u(h,te,j),u(h,J,j),e(J,M),e(M,fe),e(M,U),e(U,ie),e(M,Y),e(M,H),e(H,oe),e(J,me),e(J,x),e(x,le),e(x,S),e(S,ge),e(x,de),e(x,N),e(N,W),e(J,_e),e(J,q),e(q,Te),e(q,R),e(R,ne)},d(h){h&&t(p),h&&t(m),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(I),h&&t(te),h&&t(J)}}}function tg(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function og(A){let p,F,m,_,v,T,g,G,pe,K,E,X,O,Z,he,B,ue,re,L,I,ee,te,J,M,fe,U,ie,Y,H,oe,me,x,le,S,ge,de,N,W,_e,q,Te,R,ne;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),G=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),ue=n("model(inputs)"),re=n("."),L=l(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),U=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),me=l(),x=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),q=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var j=i(p);F=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),g=d(V),G=r(V,"LI",{});var xe=i(G);pe=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var qe=i(O);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),he=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var ze=i(B);ue=s(ze,"model(inputs)"),ze.forEach(t),re=s(z,"."),z.forEach(t),L=d(h),I=r(h,"P",{});var Ee=i(I);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);M=r(C,"LI",{});var Q=i(M);fe=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var ce=i(U);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),Q.forEach(t),me=d(C),x=r(C,"LI",{});var D=i(x);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ce=i(S);ge=s(Ce,"model([input_ids, attention_mask])"),Ce.forEach(t),de=s(D," or "),N=r(D,"CODE",{});var ve=i(N);W=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),D.forEach(t),_e=d(C),q=r(C,"LI",{});var ke=i(q);Te=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ae=i(R);ne=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),C.forEach(t)},m(h,j){u(h,p,j),e(p,F),u(h,m,j),u(h,_,j),e(_,v),e(v,T),e(_,g),e(_,G),e(G,pe),u(h,K,j),u(h,E,j),e(E,X),e(E,O),e(O,Z),e(E,he),e(E,B),e(B,ue),e(E,re),u(h,L,j),u(h,I,j),e(I,ee),u(h,te,j),u(h,J,j),e(J,M),e(M,fe),e(M,U),e(U,ie),e(M,Y),e(M,H),e(H,oe),e(J,me),e(J,x),e(x,le),e(x,S),e(S,ge),e(x,de),e(x,N),e(N,W),e(J,_e),e(J,q),e(q,Te),e(q,R),e(R,ne)},d(h){h&&t(p),h&&t(m),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(I),h&&t(te),h&&t(J)}}}function ng(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function sg(A){let p,F,m,_,v,T,g,G,pe,K,E,X,O,Z,he,B,ue,re,L,I,ee,te,J,M,fe,U,ie,Y,H,oe,me,x,le,S,ge,de,N,W,_e,q,Te,R,ne;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),G=a("li"),pe=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),ue=n("model(inputs)"),re=n("."),L=l(),I=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),M=a("li"),fe=n("a single Tensor with "),U=a("code"),ie=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),me=l(),x=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),ge=n("model([input_ids, attention_mask])"),de=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),q=a("li"),Te=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),ne=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var j=i(p);F=s(j,"TF 2.0 models accepts two formats as inputs:"),j.forEach(t),m=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),g=d(V),G=r(V,"LI",{});var xe=i(G);pe=s(xe,"having all inputs as a list, tuple or dict in the first positional arguments."),xe.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var qe=i(O);Z=s(qe,"tf.keras.Model.fit"),qe.forEach(t),he=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var ze=i(B);ue=s(ze,"model(inputs)"),ze.forEach(t),re=s(z,"."),z.forEach(t),L=d(h),I=r(h,"P",{});var Ee=i(I);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);M=r(C,"LI",{});var Q=i(M);fe=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var ce=i(U);ie=s(ce,"input_ids"),ce.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Pe=i(H);oe=s(Pe,"model(inputs_ids)"),Pe.forEach(t),Q.forEach(t),me=d(C),x=r(C,"LI",{});var D=i(x);le=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ce=i(S);ge=s(Ce,"model([input_ids, attention_mask])"),Ce.forEach(t),de=s(D," or "),N=r(D,"CODE",{});var ve=i(N);W=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),D.forEach(t),_e=d(C),q=r(C,"LI",{});var ke=i(q);Te=s(ke,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ke,"CODE",{});var Ae=i(R);ne=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),ke.forEach(t),C.forEach(t)},m(h,j){u(h,p,j),e(p,F),u(h,m,j),u(h,_,j),e(_,v),e(v,T),e(_,g),e(_,G),e(G,pe),u(h,K,j),u(h,E,j),e(E,X),e(E,O),e(O,Z),e(E,he),e(E,B),e(B,ue),e(E,re),u(h,L,j),u(h,I,j),e(I,ee),u(h,te,j),u(h,J,j),e(J,M),e(M,fe),e(M,U),e(U,ie),e(M,Y),e(M,H),e(H,oe),e(J,me),e(J,x),e(x,le),e(x,S),e(S,ge),e(x,de),e(x,N),e(N,W),e(J,_e),e(J,q),e(q,Te),e(q,R),e(R,ne)},d(h){h&&t(p),h&&t(m),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(I),h&&t(te),h&&t(J)}}}function ag(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function rg(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function ig(A){let p,F,m,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(g,"CODE",{});var G=i(m);_=s(G,"Module"),G.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,m),e(m,_),e(p,v)},d(T){T&&t(p)}}}function lg(A){let p,F,m,_,v,T,g,G,pe,K,E,X,O,Z,he,B,ue,re,L,I,ee,te,J,M,fe,U,ie,Y,H,oe,me,x,le,S,ge,de,N,W,_e,q,Te,R,ne,h,j,V,Me,xe,z,qe,ze,Ee,C,Q,ce,Pe,D,Ce,ve,ke,Ae,Qs,lt,Mi,Jo,xi,qi,Us,zi,Ci,Hs,Ai,Ii,Gr,$t,Kt,Rs,Mo,Li,Vs,Si,jr,Xt,Ni,ds,Di,Oi,Er,xo,Jr,cs,Bi,Mr,qo,xr,Ft,Yt,Ks,zo,Wi,Xs,Qi,qr,Ye,Co,Ui,Ze,Hi,ps,Ri,Vi,Ao,Ki,Xi,hs,Yi,Zi,us,el,tl,ol,Ys,nl,sl,Io,zr,Gt,Zt,Zs,Lo,al,ea,rl,Cr,dt,So,il,No,ll,Do,dl,cl,pl,Le,Oo,hl,jt,ul,fs,fl,ml,ta,gl,_l,Tl,eo,vl,oa,kl,wl,Bo,Ar,Et,to,na,Wo,yl,sa,bl,Ir,et,Qo,Pl,aa,$l,Fl,Uo,Gl,Ho,jl,El,Jl,Se,Ro,Ml,Jt,xl,ms,ql,zl,ra,Cl,Al,Il,oo,Ll,ia,Sl,Nl,Vo,Lr,Mt,no,la,Ko,Dl,da,Ol,Sr,$e,Xo,Bl,ca,Wl,Ql,gs,_s,Ul,Hl,Rl,tt,Vl,pa,Kl,Xl,ha,Yl,Zl,ua,ed,td,fa,od,nd,sd,Yo,ad,Zo,rd,id,ld,be,en,dd,xt,cd,Ts,pd,hd,ma,ud,fd,md,so,gd,ga,_d,Td,tn,vd,_a,kd,wd,on,Nr,qt,ao,Ta,nn,yd,va,bd,Dr,ot,sn,Pd,zt,$d,ka,Fd,Gd,wa,jd,Ed,Jd,an,Md,rn,xd,qd,zd,Ne,ln,Cd,Ct,Ad,vs,Id,Ld,ya,Sd,Nd,Dd,ro,Od,ba,Bd,Wd,dn,Or,At,io,Pa,cn,Qd,$a,Ud,Br,Fe,pn,Hd,Fa,Rd,Vd,hn,Kd,ks,Xd,Yd,Zd,un,ec,fn,tc,oc,nc,lo,sc,De,mn,ac,It,rc,ws,ic,lc,Ga,dc,cc,pc,co,hc,ja,uc,fc,gn,Wr,Lt,po,Ea,_n,mc,Ja,gc,Qr,Ge,Tn,_c,Ma,Tc,vc,vn,kc,ys,wc,yc,bc,kn,Pc,wn,$c,Fc,Gc,ho,jc,Oe,yn,Ec,St,Jc,bs,Mc,xc,xa,qc,zc,Cc,uo,Ac,qa,Ic,Lc,bn,Ur,Nt,fo,za,Pn,Sc,Ca,Nc,Hr,se,$n,Dc,Aa,Oc,Bc,Ps,$s,Wc,Qc,Uc,nt,Hc,Ia,Rc,Vc,La,Kc,Xc,Sa,Yc,Zc,Na,ep,tp,op,Fn,np,Fs,sp,ap,rp,Gn,ip,jn,lp,dp,cp,mo,pp,Be,En,hp,Dt,up,Gs,fp,mp,Da,gp,_p,Tp,go,vp,Oa,kp,wp,Jn,Rr,Ot,_o,Ba,Mn,yp,Wa,bp,Vr,je,xn,Pp,Bt,$p,Qa,Fp,Gp,Ua,jp,Ep,Jp,qn,Mp,js,xp,qp,zp,zn,Cp,Cn,Ap,Ip,Lp,To,Sp,We,An,Np,Wt,Dp,Es,Op,Bp,Ha,Wp,Qp,Up,vo,Hp,Ra,Rp,Vp,In,Kr,Qt,ko,Va,Ln,Kp,Ka,Xp,Xr,we,Sn,Yp,Xa,Zp,eh,Nn,th,Js,oh,nh,sh,Dn,ah,On,rh,ih,lh,Ya,dh,ch,ct,Za,Bn,ph,hh,er,Wn,uh,fh,tr,Qn,mh,gh,or,Un,_h,Th,Qe,Hn,vh,Ut,kh,nr,wh,yh,sr,bh,Ph,$h,wo,Fh,ar,Gh,jh,Rn,Yr,Ht,yo,rr,Vn,Eh,ir,Jh,Zr,ye,Kn,Mh,lr,xh,qh,Xn,zh,Ms,Ch,Ah,Ih,Yn,Lh,Zn,Sh,Nh,Dh,dr,Oh,Bh,pt,cr,es,Wh,Qh,pr,ts,Uh,Hh,hr,os,Rh,Vh,ur,ns,Kh,Xh,Ue,ss,Yh,Rt,Zh,fr,eu,tu,mr,ou,nu,su,bo,au,gr,ru,iu,as,ei;return T=new Xe({}),Z=new Xe({}),C=new Ie({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),Mo=new Xe({}),xo=new Ie({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),qo=new Ie({props:{code:`from transformers import GPTJForCausalLM, AutoTokenizer
import torch

model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B", torch_dtype=torch.float16)
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, torch_dtype=torch.float16)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),zo=new Xe({}),Co=new ae({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/configuration_gptj.py#L29",parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPTJConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPTJConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 28) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPTJConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPTJConfig.rotary_dim",description:`<strong>rotary_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of dimensions in the embedding that Rotary Position Embedding is applied to.`,name:"rotary_dim"},{anchor:"transformers.GPTJConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPTJConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPTJConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPTJConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPTJConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPTJConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTJConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTJConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size).`,name:"scale_attn_weights"},{anchor:"transformers.GPTJConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new Ie({props:{code:`from transformers import GPTJModel, GPTJConfig

# Initializing a GPT-J 6B configuration
configuration = GPTJConfig()

# Initializing a model from the configuration
model = GPTJModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJModel, GPTJConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT-J 6B configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTJConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Lo=new Xe({}),So=new ae({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L450",parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new ae({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L506",parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new Ke({props:{$$slots:{default:[Rm]},$$scope:{ctx:A}}}),Bo=new Ie({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wo=new Xe({}),Qo=new ae({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L690",parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new ae({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L759",parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Ke({props:{$$slots:{default:[Vm]},$$scope:{ctx:A}}}),Vo=new Ie({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new Xe({}),Xo=new ae({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L865",parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),en=new ae({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L881",parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Ke({props:{$$slots:{default:[Km]},$$scope:{ctx:A}}}),tn=new Ie({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

torch.manual_seed(0)
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),on=new Ie({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

torch.manual_seed(0)
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),nn=new Xe({}),sn=new ae({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L991",parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new ae({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_gptj.py#L1007",parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Ke({props:{$$slots:{default:[Xm]},$$scope:{ctx:A}}}),dn=new Ie({props:{code:`from transformers import GPT2Tokenizer, GPTJForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
round(loss.item(), 2)


start_scores = outputs.start_logits
list(start_scores.shape)


end_scores = outputs.end_logits
list(end_scores.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(start_scores.shape)


<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(end_scores.shape)
`}}),cn=new Xe({}),pn=new ae({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L668",parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ke({props:{$$slots:{default:[Ym]},$$scope:{ctx:A}}}),mn=new ae({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L673",parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new Ke({props:{$$slots:{default:[Zm]},$$scope:{ctx:A}}}),gn=new Ie({props:{code:`from transformers import GPTJTokenizer, TFGPTJModel
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),_n=new Xe({}),Tn=new ae({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L754",parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new Ke({props:{$$slots:{default:[eg]},$$scope:{ctx:A}}}),yn=new ae({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L798",parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Ke({props:{$$slots:{default:[tg]},$$scope:{ctx:A}}}),bn=new Ie({props:{code:`from transformers import GPTJTokenizer, TFGPTJForCausalLM
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new Xe({}),$n=new ae({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L905",parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mo=new Ke({props:{$$slots:{default:[og]},$$scope:{ctx:A}}}),En=new ae({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L919",parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15623/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new Ke({props:{$$slots:{default:[ng]},$$scope:{ctx:A}}}),Jn=new Ie({props:{code:`from transformers import GPTJTokenizer, TFGPTJForSequenceClassification
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new Xe({}),xn=new ae({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L1051",parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),To=new Ke({props:{$$slots:{default:[sg]},$$scope:{ctx:A}}}),An=new ae({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_tf_gptj.py#L1062",parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new Ke({props:{$$slots:{default:[ag]},$$scope:{ctx:A}}}),In=new Ie({props:{code:`from transformers import GPTJTokenizer, TFGPTJForQuestionAnswering
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Ln=new Xe({}),Sn=new ae({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_flax_gptj.py#L608",parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Hn=new ae({props:{name:"__call__",anchor:"transformers.FlaxGPTJPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_flax_gptj.py#L426",parametersDescription:[{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Ke({props:{$$slots:{default:[rg]},$$scope:{ctx:A}}}),Rn=new Ie({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Vn=new Xe({}),Kn=new ae({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_flax_gptj.py#L675",parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ss=new ae({props:{name:"__call__",anchor:"transformers.FlaxGPTJPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15623/src/transformers/models/gptj/modeling_flax_gptj.py#L426",parametersDescription:[{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15623/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15623/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15623/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new Ke({props:{$$slots:{default:[ig]},$$scope:{ctx:A}}}),as=new Ie({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJForCausalLM.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=a("meta"),F=l(),m=a("h1"),_=a("a"),v=a("span"),k(T.$$.fragment),g=l(),G=a("span"),pe=n("GPT-J"),K=l(),E=a("h2"),X=a("a"),O=a("span"),k(Z.$$.fragment),he=l(),B=a("span"),ue=n("Overview"),re=l(),L=a("p"),I=n("The GPT-J model was released in the "),ee=a("a"),te=n("kingoflolz/mesh-transformer-jax"),J=n(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),M=a("a"),fe=n("the Pile"),U=n(" dataset."),ie=l(),Y=a("p"),H=n("This model was contributed by "),oe=a("a"),me=n("Stella Biderman"),x=n("."),le=l(),S=a("p"),ge=n("Tips:"),de=l(),N=a("ul"),W=a("li"),_e=n("To load "),q=a("a"),Te=n("GPT-J"),R=n(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),ne=a("code"),h=n("torch_dtype"),j=n(` argument can be
used to initialize the model in half-precision. And the `),V=a("code"),Me=n("low_cpu_mem_usage"),xe=n(` argument can be used to keep the RAM
usage to 1x. There is also a `),z=a("a"),qe=n("fp16 branch"),ze=n(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),Ee=l(),k(C.$$.fragment),Q=l(),ce=a("ul"),Pe=a("li"),D=a("p"),Ce=n(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ve=a("a"),ke=n("here"),Ae=l(),Qs=a("li"),lt=a("p"),Mi=n(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=a("a"),xi=n("GPT-J"),qi=n(` contains 143 extra tokens
`),Us=a("code"),zi=n("<|extratoken_1|>... <|extratoken_143|>"),Ci=n(", so the "),Hs=a("code"),Ai=n("vocab_size"),Ii=n(" of tokenizer also becomes 50400."),Gr=l(),$t=a("h3"),Kt=a("a"),Rs=a("span"),k(Mo.$$.fragment),Li=l(),Vs=a("span"),Si=n("Generation"),jr=l(),Xt=a("p"),Ni=n("The "),ds=a("a"),Di=n("generate()"),Oi=n(` method can be used to generate text using GPT-J
model.`),Er=l(),k(xo.$$.fragment),Jr=l(),cs=a("p"),Bi=n("\u2026or in float16 precision:"),Mr=l(),k(qo.$$.fragment),xr=l(),Ft=a("h2"),Yt=a("a"),Ks=a("span"),k(zo.$$.fragment),Wi=l(),Xs=a("span"),Qi=n("GPTJConfig"),qr=l(),Ye=a("div"),k(Co.$$.fragment),Ui=l(),Ze=a("p"),Hi=n("This is the configuration class to store the configuration of a "),ps=a("a"),Ri=n("GPTJModel"),Vi=n(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=a("a"),Ki=n("gpt-j-6B"),Xi=n(` architecture. Configuration objects inherit from
`),hs=a("a"),Yi=n("PretrainedConfig"),Zi=n(" and can be used to control the model outputs. Read the documentation from "),us=a("a"),el=n("PretrainedConfig"),tl=n(`
for more information.`),ol=l(),Ys=a("p"),nl=n("Example:"),sl=l(),k(Io.$$.fragment),zr=l(),Gt=a("h2"),Zt=a("a"),Zs=a("span"),k(Lo.$$.fragment),al=l(),ea=a("span"),rl=n("GPTJModel"),Cr=l(),dt=a("div"),k(So.$$.fragment),il=l(),No=a("p"),ll=n(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=a("a"),dl=n("torch.nn.Module"),cl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl=l(),Le=a("div"),k(Oo.$$.fragment),hl=l(),jt=a("p"),ul=n("The "),fs=a("a"),fl=n("GPTJModel"),ml=n(" forward method, overrides the "),ta=a("code"),gl=n("__call__"),_l=n(" special method."),Tl=l(),k(eo.$$.fragment),vl=l(),oa=a("p"),kl=n("Example:"),wl=l(),k(Bo.$$.fragment),Ar=l(),Et=a("h2"),to=a("a"),na=a("span"),k(Wo.$$.fragment),yl=l(),sa=a("span"),bl=n("GPTJForCausalLM"),Ir=l(),et=a("div"),k(Qo.$$.fragment),Pl=l(),aa=a("p"),$l=n("The GPT-J Model transformer with a language modeling head on top."),Fl=l(),Uo=a("p"),Gl=n("This model is a PyTorch "),Ho=a("a"),jl=n("torch.nn.Module"),El=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jl=l(),Se=a("div"),k(Ro.$$.fragment),Ml=l(),Jt=a("p"),xl=n("The "),ms=a("a"),ql=n("GPTJForCausalLM"),zl=n(" forward method, overrides the "),ra=a("code"),Cl=n("__call__"),Al=n(" special method."),Il=l(),k(oo.$$.fragment),Ll=l(),ia=a("p"),Sl=n("Example:"),Nl=l(),k(Vo.$$.fragment),Lr=l(),Mt=a("h2"),no=a("a"),la=a("span"),k(Ko.$$.fragment),Dl=l(),da=a("span"),Ol=n("GPTJForSequenceClassification"),Sr=l(),$e=a("div"),k(Xo.$$.fragment),Bl=l(),ca=a("p"),Wl=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Ql=l(),gs=a("p"),_s=a("a"),Ul=n("GPTJForSequenceClassification"),Hl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Rl=l(),tt=a("p"),Vl=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pa=a("code"),Kl=n("pad_token_id"),Xl=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ha=a("code"),Yl=n("pad_token_id"),Zl=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ua=a("code"),ed=n("inputs_embeds"),td=n(" are passed instead of "),fa=a("code"),od=n("input_ids"),nd=n(`, it does the same (take the last value in
each row of the batch).`),sd=l(),Yo=a("p"),ad=n("This model is a PyTorch "),Zo=a("a"),rd=n("torch.nn.Module"),id=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ld=l(),be=a("div"),k(en.$$.fragment),dd=l(),xt=a("p"),cd=n("The "),Ts=a("a"),pd=n("GPTJForSequenceClassification"),hd=n(" forward method, overrides the "),ma=a("code"),ud=n("__call__"),fd=n(" special method."),md=l(),k(so.$$.fragment),gd=l(),ga=a("p"),_d=n("Example of single-label classification:"),Td=l(),k(tn.$$.fragment),vd=l(),_a=a("p"),kd=n("Example of multi-label classification:"),wd=l(),k(on.$$.fragment),Nr=l(),qt=a("h2"),ao=a("a"),Ta=a("span"),k(nn.$$.fragment),yd=l(),va=a("span"),bd=n("GPTJForQuestionAnswering"),Dr=l(),ot=a("div"),k(sn.$$.fragment),Pd=l(),zt=a("p"),$d=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),ka=a("code"),Fd=n("span start logits"),Gd=n(" and "),wa=a("code"),jd=n("span end logits"),Ed=n(")."),Jd=l(),an=a("p"),Md=n("This model is a PyTorch "),rn=a("a"),xd=n("torch.nn.Module"),qd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zd=l(),Ne=a("div"),k(ln.$$.fragment),Cd=l(),Ct=a("p"),Ad=n("The "),vs=a("a"),Id=n("GPTJForQuestionAnswering"),Ld=n(" forward method, overrides the "),ya=a("code"),Sd=n("__call__"),Nd=n(" special method."),Dd=l(),k(ro.$$.fragment),Od=l(),ba=a("p"),Bd=n("Example:"),Wd=l(),k(dn.$$.fragment),Or=l(),At=a("h2"),io=a("a"),Pa=a("span"),k(cn.$$.fragment),Qd=l(),$a=a("span"),Ud=n("TFGPTJModel"),Br=l(),Fe=a("div"),k(pn.$$.fragment),Hd=l(),Fa=a("p"),Rd=n("The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Vd=l(),hn=a("p"),Kd=n("This model inherits from "),ks=a("a"),Xd=n("TFPreTrainedModel"),Yd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd=l(),un=a("p"),ec=n("This model is also a "),fn=a("a"),tc=n("tf.keras.Model"),oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nc=l(),k(lo.$$.fragment),sc=l(),De=a("div"),k(mn.$$.fragment),ac=l(),It=a("p"),rc=n("The "),ws=a("a"),ic=n("TFGPTJModel"),lc=n(" forward method, overrides the "),Ga=a("code"),dc=n("__call__"),cc=n(" special method."),pc=l(),k(co.$$.fragment),hc=l(),ja=a("p"),uc=n("Example:"),fc=l(),k(gn.$$.fragment),Wr=l(),Lt=a("h2"),po=a("a"),Ea=a("span"),k(_n.$$.fragment),mc=l(),Ja=a("span"),gc=n("TFGPTJForCausalLM"),Qr=l(),Ge=a("div"),k(Tn.$$.fragment),_c=l(),Ma=a("p"),Tc=n("The GPT-J Model transformer with a language modeling head on top."),vc=l(),vn=a("p"),kc=n("This model inherits from "),ys=a("a"),wc=n("TFPreTrainedModel"),yc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc=l(),kn=a("p"),Pc=n("This model is also a "),wn=a("a"),$c=n("tf.keras.Model"),Fc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gc=l(),k(ho.$$.fragment),jc=l(),Oe=a("div"),k(yn.$$.fragment),Ec=l(),St=a("p"),Jc=n("The "),bs=a("a"),Mc=n("TFGPTJForCausalLM"),xc=n(" forward method, overrides the "),xa=a("code"),qc=n("__call__"),zc=n(" special method."),Cc=l(),k(uo.$$.fragment),Ac=l(),qa=a("p"),Ic=n("Example:"),Lc=l(),k(bn.$$.fragment),Ur=l(),Nt=a("h2"),fo=a("a"),za=a("span"),k(Pn.$$.fragment),Sc=l(),Ca=a("span"),Nc=n("TFGPTJForSequenceClassification"),Hr=l(),se=a("div"),k($n.$$.fragment),Dc=l(),Aa=a("p"),Oc=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Bc=l(),Ps=a("p"),$s=a("a"),Wc=n("GPTJForSequenceClassification"),Qc=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Uc=l(),nt=a("p"),Hc=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ia=a("code"),Rc=n("pad_token_id"),Vc=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),La=a("code"),Kc=n("pad_token_id"),Xc=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Sa=a("code"),Yc=n("inputs_embeds"),Zc=n(" are passed instead of "),Na=a("code"),ep=n("input_ids"),tp=n(`, it does the same (take the last value in
each row of the batch).`),op=l(),Fn=a("p"),np=n("This model inherits from "),Fs=a("a"),sp=n("TFPreTrainedModel"),ap=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rp=l(),Gn=a("p"),ip=n("This model is also a "),jn=a("a"),lp=n("tf.keras.Model"),dp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cp=l(),k(mo.$$.fragment),pp=l(),Be=a("div"),k(En.$$.fragment),hp=l(),Dt=a("p"),up=n("The "),Gs=a("a"),fp=n("TFGPTJForSequenceClassification"),mp=n(" forward method, overrides the "),Da=a("code"),gp=n("__call__"),_p=n(" special method."),Tp=l(),k(go.$$.fragment),vp=l(),Oa=a("p"),kp=n("Example:"),wp=l(),k(Jn.$$.fragment),Rr=l(),Ot=a("h2"),_o=a("a"),Ba=a("span"),k(Mn.$$.fragment),yp=l(),Wa=a("span"),bp=n("TFGPTJForQuestionAnswering"),Vr=l(),je=a("div"),k(xn.$$.fragment),Pp=l(),Bt=a("p"),$p=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Qa=a("code"),Fp=n("span start logits"),Gp=n(" and "),Ua=a("code"),jp=n("span end logits"),Ep=n(")."),Jp=l(),qn=a("p"),Mp=n("This model inherits from "),js=a("a"),xp=n("TFPreTrainedModel"),qp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=l(),zn=a("p"),Cp=n("This model is also a "),Cn=a("a"),Ap=n("tf.keras.Model"),Ip=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp=l(),k(To.$$.fragment),Sp=l(),We=a("div"),k(An.$$.fragment),Np=l(),Wt=a("p"),Dp=n("The "),Es=a("a"),Op=n("TFGPTJForQuestionAnswering"),Bp=n(" forward method, overrides the "),Ha=a("code"),Wp=n("__call__"),Qp=n(" special method."),Up=l(),k(vo.$$.fragment),Hp=l(),Ra=a("p"),Rp=n("Example:"),Vp=l(),k(In.$$.fragment),Kr=l(),Qt=a("h2"),ko=a("a"),Va=a("span"),k(Ln.$$.fragment),Kp=l(),Ka=a("span"),Xp=n("FlaxGPTJModel"),Xr=l(),we=a("div"),k(Sn.$$.fragment),Yp=l(),Xa=a("p"),Zp=n("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),eh=l(),Nn=a("p"),th=n("This model inherits from "),Js=a("a"),oh=n("FlaxPreTrainedModel"),nh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh=l(),Dn=a("p"),ah=n(`This model is also a Flax Linen
`),On=a("a"),rh=n("flax.nn.Module"),ih=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),lh=l(),Ya=a("p"),dh=n("Finally, this model supports inherent JAX features such as:"),ch=l(),ct=a("ul"),Za=a("li"),Bn=a("a"),ph=n("Just-In-Time (JIT) compilation"),hh=l(),er=a("li"),Wn=a("a"),uh=n("Automatic Differentiation"),fh=l(),tr=a("li"),Qn=a("a"),mh=n("Vectorization"),gh=l(),or=a("li"),Un=a("a"),_h=n("Parallelization"),Th=l(),Qe=a("div"),k(Hn.$$.fragment),vh=l(),Ut=a("p"),kh=n("The "),nr=a("code"),wh=n("FlaxGPTJPreTrainedModel"),yh=n("forward method, overrides the "),sr=a("code"),bh=n("__call__"),Ph=n(" special method."),$h=l(),k(wo.$$.fragment),Fh=l(),ar=a("p"),Gh=n("Example:"),jh=l(),k(Rn.$$.fragment),Yr=l(),Ht=a("h2"),yo=a("a"),rr=a("span"),k(Vn.$$.fragment),Eh=l(),ir=a("span"),Jh=n("FlaxGPTJForCausalLM"),Zr=l(),ye=a("div"),k(Kn.$$.fragment),Mh=l(),lr=a("p"),xh=n("The GPTJ Model transformer with a language modeling head on top."),qh=l(),Xn=a("p"),zh=n("This model inherits from "),Ms=a("a"),Ch=n("FlaxPreTrainedModel"),Ah=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=l(),Yn=a("p"),Lh=n(`This model is also a Flax Linen
`),Zn=a("a"),Sh=n("flax.nn.Module"),Nh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Dh=l(),dr=a("p"),Oh=n("Finally, this model supports inherent JAX features such as:"),Bh=l(),pt=a("ul"),cr=a("li"),es=a("a"),Wh=n("Just-In-Time (JIT) compilation"),Qh=l(),pr=a("li"),ts=a("a"),Uh=n("Automatic Differentiation"),Hh=l(),hr=a("li"),os=a("a"),Rh=n("Vectorization"),Vh=l(),ur=a("li"),ns=a("a"),Kh=n("Parallelization"),Xh=l(),Ue=a("div"),k(ss.$$.fragment),Yh=l(),Rt=a("p"),Zh=n("The "),fr=a("code"),eu=n("FlaxGPTJPreTrainedModel"),tu=n("forward method, overrides the "),mr=a("code"),ou=n("__call__"),nu=n(" special method."),su=l(),k(bo.$$.fragment),au=l(),gr=a("p"),ru=n("Example:"),iu=l(),k(as.$$.fragment),this.h()},l(o){const f=Hm('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),m=r(o,"H1",{class:!0});var rs=i(m);_=r(rs,"A",{id:!0,class:!0,href:!0});var _r=i(_);v=r(_r,"SPAN",{});var Tr=i(v);w(T.$$.fragment,Tr),Tr.forEach(t),_r.forEach(t),g=d(rs),G=r(rs,"SPAN",{});var vr=i(G);pe=s(vr,"GPT-J"),vr.forEach(t),rs.forEach(t),K=d(o),E=r(o,"H2",{class:!0});var is=i(E);X=r(is,"A",{id:!0,class:!0,href:!0});var kr=i(X);O=r(kr,"SPAN",{});var wr=i(O);w(Z.$$.fragment,wr),wr.forEach(t),kr.forEach(t),he=d(is),B=r(is,"SPAN",{});var yr=i(B);ue=s(yr,"Overview"),yr.forEach(t),is.forEach(t),re=d(o),L=r(o,"P",{});var Vt=i(L);I=s(Vt,"The GPT-J model was released in the "),ee=r(Vt,"A",{href:!0,rel:!0});var br=i(ee);te=s(br,"kingoflolz/mesh-transformer-jax"),br.forEach(t),J=s(Vt,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),M=r(Vt,"A",{href:!0,rel:!0});var Pr=i(M);fe=s(Pr,"the Pile"),Pr.forEach(t),U=s(Vt," dataset."),Vt.forEach(t),ie=d(o),Y=r(o,"P",{});var ls=i(Y);H=s(ls,"This model was contributed by "),oe=r(ls,"A",{href:!0,rel:!0});var $r=i(oe);me=s($r,"Stella Biderman"),$r.forEach(t),x=s(ls,"."),ls.forEach(t),le=d(o),S=r(o,"P",{});var Fr=i(S);ge=s(Fr,"Tips:"),Fr.forEach(t),de=d(o),N=r(o,"UL",{});var pu=i(N);W=r(pu,"LI",{});var ht=i(W);_e=s(ht,"To load "),q=r(ht,"A",{href:!0,rel:!0});var hu=i(q);Te=s(hu,"GPT-J"),hu.forEach(t),R=s(ht,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),ne=r(ht,"CODE",{});var uu=i(ne);h=s(uu,"torch_dtype"),uu.forEach(t),j=s(ht,` argument can be
used to initialize the model in half-precision. And the `),V=r(ht,"CODE",{});var fu=i(V);Me=s(fu,"low_cpu_mem_usage"),fu.forEach(t),xe=s(ht,` argument can be used to keep the RAM
usage to 1x. There is also a `),z=r(ht,"A",{href:!0,rel:!0});var mu=i(z);qe=s(mu,"fp16 branch"),mu.forEach(t),ze=s(ht,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),ht.forEach(t),pu.forEach(t),Ee=d(o),w(C.$$.fragment,o),Q=d(o),ce=r(o,"UL",{});var ti=i(ce);Pe=r(ti,"LI",{});var gu=i(Pe);D=r(gu,"P",{});var lu=i(D);Ce=s(lu,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ve=r(lu,"A",{href:!0,rel:!0});var _u=i(ve);ke=s(_u,"here"),_u.forEach(t),lu.forEach(t),gu.forEach(t),Ae=d(ti),Qs=r(ti,"LI",{});var Tu=i(Qs);lt=r(Tu,"P",{});var Po=i(lt);Mi=s(Po,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=r(Po,"A",{href:!0,rel:!0});var vu=i(Jo);xi=s(vu,"GPT-J"),vu.forEach(t),qi=s(Po,` contains 143 extra tokens
`),Us=r(Po,"CODE",{});var ku=i(Us);zi=s(ku,"<|extratoken_1|>... <|extratoken_143|>"),ku.forEach(t),Ci=s(Po,", so the "),Hs=r(Po,"CODE",{});var wu=i(Hs);Ai=s(wu,"vocab_size"),wu.forEach(t),Ii=s(Po," of tokenizer also becomes 50400."),Po.forEach(t),Tu.forEach(t),ti.forEach(t),Gr=d(o),$t=r(o,"H3",{class:!0});var oi=i($t);Kt=r(oi,"A",{id:!0,class:!0,href:!0});var yu=i(Kt);Rs=r(yu,"SPAN",{});var bu=i(Rs);w(Mo.$$.fragment,bu),bu.forEach(t),yu.forEach(t),Li=d(oi),Vs=r(oi,"SPAN",{});var Pu=i(Vs);Si=s(Pu,"Generation"),Pu.forEach(t),oi.forEach(t),jr=d(o),Xt=r(o,"P",{});var ni=i(Xt);Ni=s(ni,"The "),ds=r(ni,"A",{href:!0});var $u=i(ds);Di=s($u,"generate()"),$u.forEach(t),Oi=s(ni,` method can be used to generate text using GPT-J
model.`),ni.forEach(t),Er=d(o),w(xo.$$.fragment,o),Jr=d(o),cs=r(o,"P",{});var Fu=i(cs);Bi=s(Fu,"\u2026or in float16 precision:"),Fu.forEach(t),Mr=d(o),w(qo.$$.fragment,o),xr=d(o),Ft=r(o,"H2",{class:!0});var si=i(Ft);Yt=r(si,"A",{id:!0,class:!0,href:!0});var Gu=i(Yt);Ks=r(Gu,"SPAN",{});var ju=i(Ks);w(zo.$$.fragment,ju),ju.forEach(t),Gu.forEach(t),Wi=d(si),Xs=r(si,"SPAN",{});var Eu=i(Xs);Qi=s(Eu,"GPTJConfig"),Eu.forEach(t),si.forEach(t),qr=d(o),Ye=r(o,"DIV",{class:!0});var $o=i(Ye);w(Co.$$.fragment,$o),Ui=d($o),Ze=r($o,"P",{});var ut=i(Ze);Hi=s(ut,"This is the configuration class to store the configuration of a "),ps=r(ut,"A",{href:!0});var Ju=i(ps);Ri=s(Ju,"GPTJModel"),Ju.forEach(t),Vi=s(ut,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=r(ut,"A",{href:!0,rel:!0});var Mu=i(Ao);Ki=s(Mu,"gpt-j-6B"),Mu.forEach(t),Xi=s(ut,` architecture. Configuration objects inherit from
`),hs=r(ut,"A",{href:!0});var xu=i(hs);Yi=s(xu,"PretrainedConfig"),xu.forEach(t),Zi=s(ut," and can be used to control the model outputs. Read the documentation from "),us=r(ut,"A",{href:!0});var qu=i(us);el=s(qu,"PretrainedConfig"),qu.forEach(t),tl=s(ut,`
for more information.`),ut.forEach(t),ol=d($o),Ys=r($o,"P",{});var zu=i(Ys);nl=s(zu,"Example:"),zu.forEach(t),sl=d($o),w(Io.$$.fragment,$o),$o.forEach(t),zr=d(o),Gt=r(o,"H2",{class:!0});var ai=i(Gt);Zt=r(ai,"A",{id:!0,class:!0,href:!0});var Cu=i(Zt);Zs=r(Cu,"SPAN",{});var Au=i(Zs);w(Lo.$$.fragment,Au),Au.forEach(t),Cu.forEach(t),al=d(ai),ea=r(ai,"SPAN",{});var Iu=i(ea);rl=s(Iu,"GPTJModel"),Iu.forEach(t),ai.forEach(t),Cr=d(o),dt=r(o,"DIV",{class:!0});var xs=i(dt);w(So.$$.fragment,xs),il=d(xs),No=r(xs,"P",{});var ri=i(No);ll=s(ri,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=r(ri,"A",{href:!0,rel:!0});var Lu=i(Do);dl=s(Lu,"torch.nn.Module"),Lu.forEach(t),cl=s(ri,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ri.forEach(t),pl=d(xs),Le=r(xs,"DIV",{class:!0});var ft=i(Le);w(Oo.$$.fragment,ft),hl=d(ft),jt=r(ft,"P",{});var qs=i(jt);ul=s(qs,"The "),fs=r(qs,"A",{href:!0});var Su=i(fs);fl=s(Su,"GPTJModel"),Su.forEach(t),ml=s(qs," forward method, overrides the "),ta=r(qs,"CODE",{});var Nu=i(ta);gl=s(Nu,"__call__"),Nu.forEach(t),_l=s(qs," special method."),qs.forEach(t),Tl=d(ft),w(eo.$$.fragment,ft),vl=d(ft),oa=r(ft,"P",{});var Du=i(oa);kl=s(Du,"Example:"),Du.forEach(t),wl=d(ft),w(Bo.$$.fragment,ft),ft.forEach(t),xs.forEach(t),Ar=d(o),Et=r(o,"H2",{class:!0});var ii=i(Et);to=r(ii,"A",{id:!0,class:!0,href:!0});var Ou=i(to);na=r(Ou,"SPAN",{});var Bu=i(na);w(Wo.$$.fragment,Bu),Bu.forEach(t),Ou.forEach(t),yl=d(ii),sa=r(ii,"SPAN",{});var Wu=i(sa);bl=s(Wu,"GPTJForCausalLM"),Wu.forEach(t),ii.forEach(t),Ir=d(o),et=r(o,"DIV",{class:!0});var Fo=i(et);w(Qo.$$.fragment,Fo),Pl=d(Fo),aa=r(Fo,"P",{});var Qu=i(aa);$l=s(Qu,"The GPT-J Model transformer with a language modeling head on top."),Qu.forEach(t),Fl=d(Fo),Uo=r(Fo,"P",{});var li=i(Uo);Gl=s(li,"This model is a PyTorch "),Ho=r(li,"A",{href:!0,rel:!0});var Uu=i(Ho);jl=s(Uu,"torch.nn.Module"),Uu.forEach(t),El=s(li,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),li.forEach(t),Jl=d(Fo),Se=r(Fo,"DIV",{class:!0});var mt=i(Se);w(Ro.$$.fragment,mt),Ml=d(mt),Jt=r(mt,"P",{});var zs=i(Jt);xl=s(zs,"The "),ms=r(zs,"A",{href:!0});var Hu=i(ms);ql=s(Hu,"GPTJForCausalLM"),Hu.forEach(t),zl=s(zs," forward method, overrides the "),ra=r(zs,"CODE",{});var Ru=i(ra);Cl=s(Ru,"__call__"),Ru.forEach(t),Al=s(zs," special method."),zs.forEach(t),Il=d(mt),w(oo.$$.fragment,mt),Ll=d(mt),ia=r(mt,"P",{});var Vu=i(ia);Sl=s(Vu,"Example:"),Vu.forEach(t),Nl=d(mt),w(Vo.$$.fragment,mt),mt.forEach(t),Fo.forEach(t),Lr=d(o),Mt=r(o,"H2",{class:!0});var di=i(Mt);no=r(di,"A",{id:!0,class:!0,href:!0});var Ku=i(no);la=r(Ku,"SPAN",{});var Xu=i(la);w(Ko.$$.fragment,Xu),Xu.forEach(t),Ku.forEach(t),Dl=d(di),da=r(di,"SPAN",{});var Yu=i(da);Ol=s(Yu,"GPTJForSequenceClassification"),Yu.forEach(t),di.forEach(t),Sr=d(o),$e=r(o,"DIV",{class:!0});var st=i($e);w(Xo.$$.fragment,st),Bl=d(st),ca=r(st,"P",{});var Zu=i(ca);Wl=s(Zu,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Zu.forEach(t),Ql=d(st),gs=r(st,"P",{});var du=i(gs);_s=r(du,"A",{href:!0});var ef=i(_s);Ul=s(ef,"GPTJForSequenceClassification"),ef.forEach(t),Hl=s(du,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),du.forEach(t),Rl=d(st),tt=r(st,"P",{});var gt=i(tt);Vl=s(gt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),pa=r(gt,"CODE",{});var tf=i(pa);Kl=s(tf,"pad_token_id"),tf.forEach(t),Xl=s(gt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),ha=r(gt,"CODE",{});var of=i(ha);Yl=s(of,"pad_token_id"),of.forEach(t),Zl=s(gt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),ua=r(gt,"CODE",{});var nf=i(ua);ed=s(nf,"inputs_embeds"),nf.forEach(t),td=s(gt," are passed instead of "),fa=r(gt,"CODE",{});var sf=i(fa);od=s(sf,"input_ids"),sf.forEach(t),nd=s(gt,`, it does the same (take the last value in
each row of the batch).`),gt.forEach(t),sd=d(st),Yo=r(st,"P",{});var ci=i(Yo);ad=s(ci,"This model is a PyTorch "),Zo=r(ci,"A",{href:!0,rel:!0});var af=i(Zo);rd=s(af,"torch.nn.Module"),af.forEach(t),id=s(ci,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ci.forEach(t),ld=d(st),be=r(st,"DIV",{class:!0});var He=i(be);w(en.$$.fragment,He),dd=d(He),xt=r(He,"P",{});var Cs=i(xt);cd=s(Cs,"The "),Ts=r(Cs,"A",{href:!0});var rf=i(Ts);pd=s(rf,"GPTJForSequenceClassification"),rf.forEach(t),hd=s(Cs," forward method, overrides the "),ma=r(Cs,"CODE",{});var lf=i(ma);ud=s(lf,"__call__"),lf.forEach(t),fd=s(Cs," special method."),Cs.forEach(t),md=d(He),w(so.$$.fragment,He),gd=d(He),ga=r(He,"P",{});var df=i(ga);_d=s(df,"Example of single-label classification:"),df.forEach(t),Td=d(He),w(tn.$$.fragment,He),vd=d(He),_a=r(He,"P",{});var cf=i(_a);kd=s(cf,"Example of multi-label classification:"),cf.forEach(t),wd=d(He),w(on.$$.fragment,He),He.forEach(t),st.forEach(t),Nr=d(o),qt=r(o,"H2",{class:!0});var pi=i(qt);ao=r(pi,"A",{id:!0,class:!0,href:!0});var pf=i(ao);Ta=r(pf,"SPAN",{});var hf=i(Ta);w(nn.$$.fragment,hf),hf.forEach(t),pf.forEach(t),yd=d(pi),va=r(pi,"SPAN",{});var uf=i(va);bd=s(uf,"GPTJForQuestionAnswering"),uf.forEach(t),pi.forEach(t),Dr=d(o),ot=r(o,"DIV",{class:!0});var Go=i(ot);w(sn.$$.fragment,Go),Pd=d(Go),zt=r(Go,"P",{});var As=i(zt);$d=s(As,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),ka=r(As,"CODE",{});var ff=i(ka);Fd=s(ff,"span start logits"),ff.forEach(t),Gd=s(As," and "),wa=r(As,"CODE",{});var mf=i(wa);jd=s(mf,"span end logits"),mf.forEach(t),Ed=s(As,")."),As.forEach(t),Jd=d(Go),an=r(Go,"P",{});var hi=i(an);Md=s(hi,"This model is a PyTorch "),rn=r(hi,"A",{href:!0,rel:!0});var gf=i(rn);xd=s(gf,"torch.nn.Module"),gf.forEach(t),qd=s(hi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hi.forEach(t),zd=d(Go),Ne=r(Go,"DIV",{class:!0});var _t=i(Ne);w(ln.$$.fragment,_t),Cd=d(_t),Ct=r(_t,"P",{});var Is=i(Ct);Ad=s(Is,"The "),vs=r(Is,"A",{href:!0});var _f=i(vs);Id=s(_f,"GPTJForQuestionAnswering"),_f.forEach(t),Ld=s(Is," forward method, overrides the "),ya=r(Is,"CODE",{});var Tf=i(ya);Sd=s(Tf,"__call__"),Tf.forEach(t),Nd=s(Is," special method."),Is.forEach(t),Dd=d(_t),w(ro.$$.fragment,_t),Od=d(_t),ba=r(_t,"P",{});var vf=i(ba);Bd=s(vf,"Example:"),vf.forEach(t),Wd=d(_t),w(dn.$$.fragment,_t),_t.forEach(t),Go.forEach(t),Or=d(o),At=r(o,"H2",{class:!0});var ui=i(At);io=r(ui,"A",{id:!0,class:!0,href:!0});var kf=i(io);Pa=r(kf,"SPAN",{});var wf=i(Pa);w(cn.$$.fragment,wf),wf.forEach(t),kf.forEach(t),Qd=d(ui),$a=r(ui,"SPAN",{});var yf=i($a);Ud=s(yf,"TFGPTJModel"),yf.forEach(t),ui.forEach(t),Br=d(o),Fe=r(o,"DIV",{class:!0});var at=i(Fe);w(pn.$$.fragment,at),Hd=d(at),Fa=r(at,"P",{});var bf=i(Fa);Rd=s(bf,"The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),bf.forEach(t),Vd=d(at),hn=r(at,"P",{});var fi=i(hn);Kd=s(fi,"This model inherits from "),ks=r(fi,"A",{href:!0});var Pf=i(ks);Xd=s(Pf,"TFPreTrainedModel"),Pf.forEach(t),Yd=s(fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi.forEach(t),Zd=d(at),un=r(at,"P",{});var mi=i(un);ec=s(mi,"This model is also a "),fn=r(mi,"A",{href:!0,rel:!0});var $f=i(fn);tc=s($f,"tf.keras.Model"),$f.forEach(t),oc=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),nc=d(at),w(lo.$$.fragment,at),sc=d(at),De=r(at,"DIV",{class:!0});var Tt=i(De);w(mn.$$.fragment,Tt),ac=d(Tt),It=r(Tt,"P",{});var Ls=i(It);rc=s(Ls,"The "),ws=r(Ls,"A",{href:!0});var Ff=i(ws);ic=s(Ff,"TFGPTJModel"),Ff.forEach(t),lc=s(Ls," forward method, overrides the "),Ga=r(Ls,"CODE",{});var Gf=i(Ga);dc=s(Gf,"__call__"),Gf.forEach(t),cc=s(Ls," special method."),Ls.forEach(t),pc=d(Tt),w(co.$$.fragment,Tt),hc=d(Tt),ja=r(Tt,"P",{});var jf=i(ja);uc=s(jf,"Example:"),jf.forEach(t),fc=d(Tt),w(gn.$$.fragment,Tt),Tt.forEach(t),at.forEach(t),Wr=d(o),Lt=r(o,"H2",{class:!0});var gi=i(Lt);po=r(gi,"A",{id:!0,class:!0,href:!0});var Ef=i(po);Ea=r(Ef,"SPAN",{});var Jf=i(Ea);w(_n.$$.fragment,Jf),Jf.forEach(t),Ef.forEach(t),mc=d(gi),Ja=r(gi,"SPAN",{});var Mf=i(Ja);gc=s(Mf,"TFGPTJForCausalLM"),Mf.forEach(t),gi.forEach(t),Qr=d(o),Ge=r(o,"DIV",{class:!0});var rt=i(Ge);w(Tn.$$.fragment,rt),_c=d(rt),Ma=r(rt,"P",{});var xf=i(Ma);Tc=s(xf,"The GPT-J Model transformer with a language modeling head on top."),xf.forEach(t),vc=d(rt),vn=r(rt,"P",{});var _i=i(vn);kc=s(_i,"This model inherits from "),ys=r(_i,"A",{href:!0});var qf=i(ys);wc=s(qf,"TFPreTrainedModel"),qf.forEach(t),yc=s(_i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_i.forEach(t),bc=d(rt),kn=r(rt,"P",{});var Ti=i(kn);Pc=s(Ti,"This model is also a "),wn=r(Ti,"A",{href:!0,rel:!0});var zf=i(wn);$c=s(zf,"tf.keras.Model"),zf.forEach(t),Fc=s(Ti,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ti.forEach(t),Gc=d(rt),w(ho.$$.fragment,rt),jc=d(rt),Oe=r(rt,"DIV",{class:!0});var vt=i(Oe);w(yn.$$.fragment,vt),Ec=d(vt),St=r(vt,"P",{});var Ss=i(St);Jc=s(Ss,"The "),bs=r(Ss,"A",{href:!0});var Cf=i(bs);Mc=s(Cf,"TFGPTJForCausalLM"),Cf.forEach(t),xc=s(Ss," forward method, overrides the "),xa=r(Ss,"CODE",{});var Af=i(xa);qc=s(Af,"__call__"),Af.forEach(t),zc=s(Ss," special method."),Ss.forEach(t),Cc=d(vt),w(uo.$$.fragment,vt),Ac=d(vt),qa=r(vt,"P",{});var If=i(qa);Ic=s(If,"Example:"),If.forEach(t),Lc=d(vt),w(bn.$$.fragment,vt),vt.forEach(t),rt.forEach(t),Ur=d(o),Nt=r(o,"H2",{class:!0});var vi=i(Nt);fo=r(vi,"A",{id:!0,class:!0,href:!0});var Lf=i(fo);za=r(Lf,"SPAN",{});var Sf=i(za);w(Pn.$$.fragment,Sf),Sf.forEach(t),Lf.forEach(t),Sc=d(vi),Ca=r(vi,"SPAN",{});var Nf=i(Ca);Nc=s(Nf,"TFGPTJForSequenceClassification"),Nf.forEach(t),vi.forEach(t),Hr=d(o),se=r(o,"DIV",{class:!0});var Je=i(se);w($n.$$.fragment,Je),Dc=d(Je),Aa=r(Je,"P",{});var Df=i(Aa);Oc=s(Df,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Df.forEach(t),Bc=d(Je),Ps=r(Je,"P",{});var cu=i(Ps);$s=r(cu,"A",{href:!0});var Of=i($s);Wc=s(Of,"GPTJForSequenceClassification"),Of.forEach(t),Qc=s(cu,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),cu.forEach(t),Uc=d(Je),nt=r(Je,"P",{});var kt=i(nt);Hc=s(kt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ia=r(kt,"CODE",{});var Bf=i(Ia);Rc=s(Bf,"pad_token_id"),Bf.forEach(t),Vc=s(kt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),La=r(kt,"CODE",{});var Wf=i(La);Kc=s(Wf,"pad_token_id"),Wf.forEach(t),Xc=s(kt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Sa=r(kt,"CODE",{});var Qf=i(Sa);Yc=s(Qf,"inputs_embeds"),Qf.forEach(t),Zc=s(kt," are passed instead of "),Na=r(kt,"CODE",{});var Uf=i(Na);ep=s(Uf,"input_ids"),Uf.forEach(t),tp=s(kt,`, it does the same (take the last value in
each row of the batch).`),kt.forEach(t),op=d(Je),Fn=r(Je,"P",{});var ki=i(Fn);np=s(ki,"This model inherits from "),Fs=r(ki,"A",{href:!0});var Hf=i(Fs);sp=s(Hf,"TFPreTrainedModel"),Hf.forEach(t),ap=s(ki,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ki.forEach(t),rp=d(Je),Gn=r(Je,"P",{});var wi=i(Gn);ip=s(wi,"This model is also a "),jn=r(wi,"A",{href:!0,rel:!0});var Rf=i(jn);lp=s(Rf,"tf.keras.Model"),Rf.forEach(t),dp=s(wi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wi.forEach(t),cp=d(Je),w(mo.$$.fragment,Je),pp=d(Je),Be=r(Je,"DIV",{class:!0});var wt=i(Be);w(En.$$.fragment,wt),hp=d(wt),Dt=r(wt,"P",{});var Ns=i(Dt);up=s(Ns,"The "),Gs=r(Ns,"A",{href:!0});var Vf=i(Gs);fp=s(Vf,"TFGPTJForSequenceClassification"),Vf.forEach(t),mp=s(Ns," forward method, overrides the "),Da=r(Ns,"CODE",{});var Kf=i(Da);gp=s(Kf,"__call__"),Kf.forEach(t),_p=s(Ns," special method."),Ns.forEach(t),Tp=d(wt),w(go.$$.fragment,wt),vp=d(wt),Oa=r(wt,"P",{});var Xf=i(Oa);kp=s(Xf,"Example:"),Xf.forEach(t),wp=d(wt),w(Jn.$$.fragment,wt),wt.forEach(t),Je.forEach(t),Rr=d(o),Ot=r(o,"H2",{class:!0});var yi=i(Ot);_o=r(yi,"A",{id:!0,class:!0,href:!0});var Yf=i(_o);Ba=r(Yf,"SPAN",{});var Zf=i(Ba);w(Mn.$$.fragment,Zf),Zf.forEach(t),Yf.forEach(t),yp=d(yi),Wa=r(yi,"SPAN",{});var em=i(Wa);bp=s(em,"TFGPTJForQuestionAnswering"),em.forEach(t),yi.forEach(t),Vr=d(o),je=r(o,"DIV",{class:!0});var it=i(je);w(xn.$$.fragment,it),Pp=d(it),Bt=r(it,"P",{});var Ds=i(Bt);$p=s(Ds,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Qa=r(Ds,"CODE",{});var tm=i(Qa);Fp=s(tm,"span start logits"),tm.forEach(t),Gp=s(Ds," and "),Ua=r(Ds,"CODE",{});var om=i(Ua);jp=s(om,"span end logits"),om.forEach(t),Ep=s(Ds,")."),Ds.forEach(t),Jp=d(it),qn=r(it,"P",{});var bi=i(qn);Mp=s(bi,"This model inherits from "),js=r(bi,"A",{href:!0});var nm=i(js);xp=s(nm,"TFPreTrainedModel"),nm.forEach(t),qp=s(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),zp=d(it),zn=r(it,"P",{});var Pi=i(zn);Cp=s(Pi,"This model is also a "),Cn=r(Pi,"A",{href:!0,rel:!0});var sm=i(Cn);Ap=s(sm,"tf.keras.Model"),sm.forEach(t),Ip=s(Pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pi.forEach(t),Lp=d(it),w(To.$$.fragment,it),Sp=d(it),We=r(it,"DIV",{class:!0});var yt=i(We);w(An.$$.fragment,yt),Np=d(yt),Wt=r(yt,"P",{});var Os=i(Wt);Dp=s(Os,"The "),Es=r(Os,"A",{href:!0});var am=i(Es);Op=s(am,"TFGPTJForQuestionAnswering"),am.forEach(t),Bp=s(Os," forward method, overrides the "),Ha=r(Os,"CODE",{});var rm=i(Ha);Wp=s(rm,"__call__"),rm.forEach(t),Qp=s(Os," special method."),Os.forEach(t),Up=d(yt),w(vo.$$.fragment,yt),Hp=d(yt),Ra=r(yt,"P",{});var im=i(Ra);Rp=s(im,"Example:"),im.forEach(t),Vp=d(yt),w(In.$$.fragment,yt),yt.forEach(t),it.forEach(t),Kr=d(o),Qt=r(o,"H2",{class:!0});var $i=i(Qt);ko=r($i,"A",{id:!0,class:!0,href:!0});var lm=i(ko);Va=r(lm,"SPAN",{});var dm=i(Va);w(Ln.$$.fragment,dm),dm.forEach(t),lm.forEach(t),Kp=d($i),Ka=r($i,"SPAN",{});var cm=i(Ka);Xp=s(cm,"FlaxGPTJModel"),cm.forEach(t),$i.forEach(t),Xr=d(o),we=r(o,"DIV",{class:!0});var Re=i(we);w(Sn.$$.fragment,Re),Yp=d(Re),Xa=r(Re,"P",{});var pm=i(Xa);Zp=s(pm,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),pm.forEach(t),eh=d(Re),Nn=r(Re,"P",{});var Fi=i(Nn);th=s(Fi,"This model inherits from "),Js=r(Fi,"A",{href:!0});var hm=i(Js);oh=s(hm,"FlaxPreTrainedModel"),hm.forEach(t),nh=s(Fi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fi.forEach(t),sh=d(Re),Dn=r(Re,"P",{});var Gi=i(Dn);ah=s(Gi,`This model is also a Flax Linen
`),On=r(Gi,"A",{href:!0,rel:!0});var um=i(On);rh=s(um,"flax.nn.Module"),um.forEach(t),ih=s(Gi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Gi.forEach(t),lh=d(Re),Ya=r(Re,"P",{});var fm=i(Ya);dh=s(fm,"Finally, this model supports inherent JAX features such as:"),fm.forEach(t),ch=d(Re),ct=r(Re,"UL",{});var jo=i(ct);Za=r(jo,"LI",{});var mm=i(Za);Bn=r(mm,"A",{href:!0,rel:!0});var gm=i(Bn);ph=s(gm,"Just-In-Time (JIT) compilation"),gm.forEach(t),mm.forEach(t),hh=d(jo),er=r(jo,"LI",{});var _m=i(er);Wn=r(_m,"A",{href:!0,rel:!0});var Tm=i(Wn);uh=s(Tm,"Automatic Differentiation"),Tm.forEach(t),_m.forEach(t),fh=d(jo),tr=r(jo,"LI",{});var vm=i(tr);Qn=r(vm,"A",{href:!0,rel:!0});var km=i(Qn);mh=s(km,"Vectorization"),km.forEach(t),vm.forEach(t),gh=d(jo),or=r(jo,"LI",{});var wm=i(or);Un=r(wm,"A",{href:!0,rel:!0});var ym=i(Un);_h=s(ym,"Parallelization"),ym.forEach(t),wm.forEach(t),jo.forEach(t),Th=d(Re),Qe=r(Re,"DIV",{class:!0});var bt=i(Qe);w(Hn.$$.fragment,bt),vh=d(bt),Ut=r(bt,"P",{});var Bs=i(Ut);kh=s(Bs,"The "),nr=r(Bs,"CODE",{});var bm=i(nr);wh=s(bm,"FlaxGPTJPreTrainedModel"),bm.forEach(t),yh=s(Bs,"forward method, overrides the "),sr=r(Bs,"CODE",{});var Pm=i(sr);bh=s(Pm,"__call__"),Pm.forEach(t),Ph=s(Bs," special method."),Bs.forEach(t),$h=d(bt),w(wo.$$.fragment,bt),Fh=d(bt),ar=r(bt,"P",{});var $m=i(ar);Gh=s($m,"Example:"),$m.forEach(t),jh=d(bt),w(Rn.$$.fragment,bt),bt.forEach(t),Re.forEach(t),Yr=d(o),Ht=r(o,"H2",{class:!0});var ji=i(Ht);yo=r(ji,"A",{id:!0,class:!0,href:!0});var Fm=i(yo);rr=r(Fm,"SPAN",{});var Gm=i(rr);w(Vn.$$.fragment,Gm),Gm.forEach(t),Fm.forEach(t),Eh=d(ji),ir=r(ji,"SPAN",{});var jm=i(ir);Jh=s(jm,"FlaxGPTJForCausalLM"),jm.forEach(t),ji.forEach(t),Zr=d(o),ye=r(o,"DIV",{class:!0});var Ve=i(ye);w(Kn.$$.fragment,Ve),Mh=d(Ve),lr=r(Ve,"P",{});var Em=i(lr);xh=s(Em,"The GPTJ Model transformer with a language modeling head on top."),Em.forEach(t),qh=d(Ve),Xn=r(Ve,"P",{});var Ei=i(Xn);zh=s(Ei,"This model inherits from "),Ms=r(Ei,"A",{href:!0});var Jm=i(Ms);Ch=s(Jm,"FlaxPreTrainedModel"),Jm.forEach(t),Ah=s(Ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ei.forEach(t),Ih=d(Ve),Yn=r(Ve,"P",{});var Ji=i(Yn);Lh=s(Ji,`This model is also a Flax Linen
`),Zn=r(Ji,"A",{href:!0,rel:!0});var Mm=i(Zn);Sh=s(Mm,"flax.nn.Module"),Mm.forEach(t),Nh=s(Ji,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ji.forEach(t),Dh=d(Ve),dr=r(Ve,"P",{});var xm=i(dr);Oh=s(xm,"Finally, this model supports inherent JAX features such as:"),xm.forEach(t),Bh=d(Ve),pt=r(Ve,"UL",{});var Eo=i(pt);cr=r(Eo,"LI",{});var qm=i(cr);es=r(qm,"A",{href:!0,rel:!0});var zm=i(es);Wh=s(zm,"Just-In-Time (JIT) compilation"),zm.forEach(t),qm.forEach(t),Qh=d(Eo),pr=r(Eo,"LI",{});var Cm=i(pr);ts=r(Cm,"A",{href:!0,rel:!0});var Am=i(ts);Uh=s(Am,"Automatic Differentiation"),Am.forEach(t),Cm.forEach(t),Hh=d(Eo),hr=r(Eo,"LI",{});var Im=i(hr);os=r(Im,"A",{href:!0,rel:!0});var Lm=i(os);Rh=s(Lm,"Vectorization"),Lm.forEach(t),Im.forEach(t),Vh=d(Eo),ur=r(Eo,"LI",{});var Sm=i(ur);ns=r(Sm,"A",{href:!0,rel:!0});var Nm=i(ns);Kh=s(Nm,"Parallelization"),Nm.forEach(t),Sm.forEach(t),Eo.forEach(t),Xh=d(Ve),Ue=r(Ve,"DIV",{class:!0});var Pt=i(Ue);w(ss.$$.fragment,Pt),Yh=d(Pt),Rt=r(Pt,"P",{});var Ws=i(Rt);Zh=s(Ws,"The "),fr=r(Ws,"CODE",{});var Dm=i(fr);eu=s(Dm,"FlaxGPTJPreTrainedModel"),Dm.forEach(t),tu=s(Ws,"forward method, overrides the "),mr=r(Ws,"CODE",{});var Om=i(mr);ou=s(Om,"__call__"),Om.forEach(t),nu=s(Ws," special method."),Ws.forEach(t),su=d(Pt),w(bo.$$.fragment,Pt),au=d(Pt),gr=r(Pt,"P",{});var Bm=i(gr);ru=s(Bm,"Example:"),Bm.forEach(t),iu=d(Pt),w(as.$$.fragment,Pt),Pt.forEach(t),Ve.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(dg)),c(_,"id","gptj"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#gptj"),c(m,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(E,"class","relative group"),c(ee,"href","https://github.com/kingoflolz/mesh-transformer-jax"),c(ee,"rel","nofollow"),c(M,"href","https://pile.eleuther.ai/"),c(M,"rel","nofollow"),c(oe,"href","https://huggingface.co/stellaathena"),c(oe,"rel","nofollow"),c(q,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(q,"rel","nofollow"),c(z,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),c(z,"rel","nofollow"),c(ve,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),c(ve,"rel","nofollow"),c(Jo,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Jo,"rel","nofollow"),c(Kt,"id","generation"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#generation"),c($t,"class","relative group"),c(ds,"href","/docs/transformers/pr_15623/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Yt,"id","transformers.GPTJConfig"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.GPTJConfig"),c(Ft,"class","relative group"),c(ps,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJModel"),c(Ao,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Ao,"rel","nofollow"),c(hs,"href","/docs/transformers/pr_15623/en/main_classes/configuration#transformers.PretrainedConfig"),c(us,"href","/docs/transformers/pr_15623/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ye,"class","docstring"),c(Zt,"id","transformers.GPTJModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.GPTJModel"),c(Gt,"class","relative group"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(fs,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJModel"),c(Le,"class","docstring"),c(dt,"class","docstring"),c(to,"id","transformers.GPTJForCausalLM"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.GPTJForCausalLM"),c(Et,"class","relative group"),c(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ho,"rel","nofollow"),c(ms,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJForCausalLM"),c(Se,"class","docstring"),c(et,"class","docstring"),c(no,"id","transformers.GPTJForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.GPTJForSequenceClassification"),c(Mt,"class","relative group"),c(_s,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zo,"rel","nofollow"),c(Ts,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(be,"class","docstring"),c($e,"class","docstring"),c(ao,"id","transformers.GPTJForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.GPTJForQuestionAnswering"),c(qt,"class","relative group"),c(rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(rn,"rel","nofollow"),c(vs,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),c(Ne,"class","docstring"),c(ot,"class","docstring"),c(io,"id","transformers.TFGPTJModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFGPTJModel"),c(At,"class","relative group"),c(ks,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel"),c(fn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fn,"rel","nofollow"),c(ws,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.TFGPTJModel"),c(De,"class","docstring"),c(Fe,"class","docstring"),c(po,"id","transformers.TFGPTJForCausalLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFGPTJForCausalLM"),c(Lt,"class","relative group"),c(ys,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel"),c(wn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wn,"rel","nofollow"),c(bs,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.TFGPTJForCausalLM"),c(Oe,"class","docstring"),c(Ge,"class","docstring"),c(fo,"id","transformers.TFGPTJForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.TFGPTJForSequenceClassification"),c(Nt,"class","relative group"),c($s,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(Fs,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel"),c(jn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(jn,"rel","nofollow"),c(Gs,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification"),c(Be,"class","docstring"),c(se,"class","docstring"),c(_o,"id","transformers.TFGPTJForQuestionAnswering"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.TFGPTJForQuestionAnswering"),c(Ot,"class","relative group"),c(js,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cn,"rel","nofollow"),c(Es,"href","/docs/transformers/pr_15623/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering"),c(We,"class","docstring"),c(je,"class","docstring"),c(ko,"id","transformers.FlaxGPTJModel"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.FlaxGPTJModel"),c(Qt,"class","relative group"),c(Js,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(On,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(On,"rel","nofollow"),c(Bn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Bn,"rel","nofollow"),c(Wn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Wn,"rel","nofollow"),c(Qn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Qn,"rel","nofollow"),c(Un,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Un,"rel","nofollow"),c(Qe,"class","docstring"),c(we,"class","docstring"),c(yo,"id","transformers.FlaxGPTJForCausalLM"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.FlaxGPTJForCausalLM"),c(Ht,"class","relative group"),c(Ms,"href","/docs/transformers/pr_15623/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Zn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Zn,"rel","nofollow"),c(es,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(es,"rel","nofollow"),c(ts,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ts,"rel","nofollow"),c(os,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(os,"rel","nofollow"),c(ns,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ns,"rel","nofollow"),c(Ue,"class","docstring"),c(ye,"class","docstring")},m(o,f){e(document.head,p),u(o,F,f),u(o,m,f),e(m,_),e(_,v),y(T,v,null),e(m,g),e(m,G),e(G,pe),u(o,K,f),u(o,E,f),e(E,X),e(X,O),y(Z,O,null),e(E,he),e(E,B),e(B,ue),u(o,re,f),u(o,L,f),e(L,I),e(L,ee),e(ee,te),e(L,J),e(L,M),e(M,fe),e(L,U),u(o,ie,f),u(o,Y,f),e(Y,H),e(Y,oe),e(oe,me),e(Y,x),u(o,le,f),u(o,S,f),e(S,ge),u(o,de,f),u(o,N,f),e(N,W),e(W,_e),e(W,q),e(q,Te),e(W,R),e(W,ne),e(ne,h),e(W,j),e(W,V),e(V,Me),e(W,xe),e(W,z),e(z,qe),e(W,ze),u(o,Ee,f),y(C,o,f),u(o,Q,f),u(o,ce,f),e(ce,Pe),e(Pe,D),e(D,Ce),e(D,ve),e(ve,ke),e(ce,Ae),e(ce,Qs),e(Qs,lt),e(lt,Mi),e(lt,Jo),e(Jo,xi),e(lt,qi),e(lt,Us),e(Us,zi),e(lt,Ci),e(lt,Hs),e(Hs,Ai),e(lt,Ii),u(o,Gr,f),u(o,$t,f),e($t,Kt),e(Kt,Rs),y(Mo,Rs,null),e($t,Li),e($t,Vs),e(Vs,Si),u(o,jr,f),u(o,Xt,f),e(Xt,Ni),e(Xt,ds),e(ds,Di),e(Xt,Oi),u(o,Er,f),y(xo,o,f),u(o,Jr,f),u(o,cs,f),e(cs,Bi),u(o,Mr,f),y(qo,o,f),u(o,xr,f),u(o,Ft,f),e(Ft,Yt),e(Yt,Ks),y(zo,Ks,null),e(Ft,Wi),e(Ft,Xs),e(Xs,Qi),u(o,qr,f),u(o,Ye,f),y(Co,Ye,null),e(Ye,Ui),e(Ye,Ze),e(Ze,Hi),e(Ze,ps),e(ps,Ri),e(Ze,Vi),e(Ze,Ao),e(Ao,Ki),e(Ze,Xi),e(Ze,hs),e(hs,Yi),e(Ze,Zi),e(Ze,us),e(us,el),e(Ze,tl),e(Ye,ol),e(Ye,Ys),e(Ys,nl),e(Ye,sl),y(Io,Ye,null),u(o,zr,f),u(o,Gt,f),e(Gt,Zt),e(Zt,Zs),y(Lo,Zs,null),e(Gt,al),e(Gt,ea),e(ea,rl),u(o,Cr,f),u(o,dt,f),y(So,dt,null),e(dt,il),e(dt,No),e(No,ll),e(No,Do),e(Do,dl),e(No,cl),e(dt,pl),e(dt,Le),y(Oo,Le,null),e(Le,hl),e(Le,jt),e(jt,ul),e(jt,fs),e(fs,fl),e(jt,ml),e(jt,ta),e(ta,gl),e(jt,_l),e(Le,Tl),y(eo,Le,null),e(Le,vl),e(Le,oa),e(oa,kl),e(Le,wl),y(Bo,Le,null),u(o,Ar,f),u(o,Et,f),e(Et,to),e(to,na),y(Wo,na,null),e(Et,yl),e(Et,sa),e(sa,bl),u(o,Ir,f),u(o,et,f),y(Qo,et,null),e(et,Pl),e(et,aa),e(aa,$l),e(et,Fl),e(et,Uo),e(Uo,Gl),e(Uo,Ho),e(Ho,jl),e(Uo,El),e(et,Jl),e(et,Se),y(Ro,Se,null),e(Se,Ml),e(Se,Jt),e(Jt,xl),e(Jt,ms),e(ms,ql),e(Jt,zl),e(Jt,ra),e(ra,Cl),e(Jt,Al),e(Se,Il),y(oo,Se,null),e(Se,Ll),e(Se,ia),e(ia,Sl),e(Se,Nl),y(Vo,Se,null),u(o,Lr,f),u(o,Mt,f),e(Mt,no),e(no,la),y(Ko,la,null),e(Mt,Dl),e(Mt,da),e(da,Ol),u(o,Sr,f),u(o,$e,f),y(Xo,$e,null),e($e,Bl),e($e,ca),e(ca,Wl),e($e,Ql),e($e,gs),e(gs,_s),e(_s,Ul),e(gs,Hl),e($e,Rl),e($e,tt),e(tt,Vl),e(tt,pa),e(pa,Kl),e(tt,Xl),e(tt,ha),e(ha,Yl),e(tt,Zl),e(tt,ua),e(ua,ed),e(tt,td),e(tt,fa),e(fa,od),e(tt,nd),e($e,sd),e($e,Yo),e(Yo,ad),e(Yo,Zo),e(Zo,rd),e(Yo,id),e($e,ld),e($e,be),y(en,be,null),e(be,dd),e(be,xt),e(xt,cd),e(xt,Ts),e(Ts,pd),e(xt,hd),e(xt,ma),e(ma,ud),e(xt,fd),e(be,md),y(so,be,null),e(be,gd),e(be,ga),e(ga,_d),e(be,Td),y(tn,be,null),e(be,vd),e(be,_a),e(_a,kd),e(be,wd),y(on,be,null),u(o,Nr,f),u(o,qt,f),e(qt,ao),e(ao,Ta),y(nn,Ta,null),e(qt,yd),e(qt,va),e(va,bd),u(o,Dr,f),u(o,ot,f),y(sn,ot,null),e(ot,Pd),e(ot,zt),e(zt,$d),e(zt,ka),e(ka,Fd),e(zt,Gd),e(zt,wa),e(wa,jd),e(zt,Ed),e(ot,Jd),e(ot,an),e(an,Md),e(an,rn),e(rn,xd),e(an,qd),e(ot,zd),e(ot,Ne),y(ln,Ne,null),e(Ne,Cd),e(Ne,Ct),e(Ct,Ad),e(Ct,vs),e(vs,Id),e(Ct,Ld),e(Ct,ya),e(ya,Sd),e(Ct,Nd),e(Ne,Dd),y(ro,Ne,null),e(Ne,Od),e(Ne,ba),e(ba,Bd),e(Ne,Wd),y(dn,Ne,null),u(o,Or,f),u(o,At,f),e(At,io),e(io,Pa),y(cn,Pa,null),e(At,Qd),e(At,$a),e($a,Ud),u(o,Br,f),u(o,Fe,f),y(pn,Fe,null),e(Fe,Hd),e(Fe,Fa),e(Fa,Rd),e(Fe,Vd),e(Fe,hn),e(hn,Kd),e(hn,ks),e(ks,Xd),e(hn,Yd),e(Fe,Zd),e(Fe,un),e(un,ec),e(un,fn),e(fn,tc),e(un,oc),e(Fe,nc),y(lo,Fe,null),e(Fe,sc),e(Fe,De),y(mn,De,null),e(De,ac),e(De,It),e(It,rc),e(It,ws),e(ws,ic),e(It,lc),e(It,Ga),e(Ga,dc),e(It,cc),e(De,pc),y(co,De,null),e(De,hc),e(De,ja),e(ja,uc),e(De,fc),y(gn,De,null),u(o,Wr,f),u(o,Lt,f),e(Lt,po),e(po,Ea),y(_n,Ea,null),e(Lt,mc),e(Lt,Ja),e(Ja,gc),u(o,Qr,f),u(o,Ge,f),y(Tn,Ge,null),e(Ge,_c),e(Ge,Ma),e(Ma,Tc),e(Ge,vc),e(Ge,vn),e(vn,kc),e(vn,ys),e(ys,wc),e(vn,yc),e(Ge,bc),e(Ge,kn),e(kn,Pc),e(kn,wn),e(wn,$c),e(kn,Fc),e(Ge,Gc),y(ho,Ge,null),e(Ge,jc),e(Ge,Oe),y(yn,Oe,null),e(Oe,Ec),e(Oe,St),e(St,Jc),e(St,bs),e(bs,Mc),e(St,xc),e(St,xa),e(xa,qc),e(St,zc),e(Oe,Cc),y(uo,Oe,null),e(Oe,Ac),e(Oe,qa),e(qa,Ic),e(Oe,Lc),y(bn,Oe,null),u(o,Ur,f),u(o,Nt,f),e(Nt,fo),e(fo,za),y(Pn,za,null),e(Nt,Sc),e(Nt,Ca),e(Ca,Nc),u(o,Hr,f),u(o,se,f),y($n,se,null),e(se,Dc),e(se,Aa),e(Aa,Oc),e(se,Bc),e(se,Ps),e(Ps,$s),e($s,Wc),e(Ps,Qc),e(se,Uc),e(se,nt),e(nt,Hc),e(nt,Ia),e(Ia,Rc),e(nt,Vc),e(nt,La),e(La,Kc),e(nt,Xc),e(nt,Sa),e(Sa,Yc),e(nt,Zc),e(nt,Na),e(Na,ep),e(nt,tp),e(se,op),e(se,Fn),e(Fn,np),e(Fn,Fs),e(Fs,sp),e(Fn,ap),e(se,rp),e(se,Gn),e(Gn,ip),e(Gn,jn),e(jn,lp),e(Gn,dp),e(se,cp),y(mo,se,null),e(se,pp),e(se,Be),y(En,Be,null),e(Be,hp),e(Be,Dt),e(Dt,up),e(Dt,Gs),e(Gs,fp),e(Dt,mp),e(Dt,Da),e(Da,gp),e(Dt,_p),e(Be,Tp),y(go,Be,null),e(Be,vp),e(Be,Oa),e(Oa,kp),e(Be,wp),y(Jn,Be,null),u(o,Rr,f),u(o,Ot,f),e(Ot,_o),e(_o,Ba),y(Mn,Ba,null),e(Ot,yp),e(Ot,Wa),e(Wa,bp),u(o,Vr,f),u(o,je,f),y(xn,je,null),e(je,Pp),e(je,Bt),e(Bt,$p),e(Bt,Qa),e(Qa,Fp),e(Bt,Gp),e(Bt,Ua),e(Ua,jp),e(Bt,Ep),e(je,Jp),e(je,qn),e(qn,Mp),e(qn,js),e(js,xp),e(qn,qp),e(je,zp),e(je,zn),e(zn,Cp),e(zn,Cn),e(Cn,Ap),e(zn,Ip),e(je,Lp),y(To,je,null),e(je,Sp),e(je,We),y(An,We,null),e(We,Np),e(We,Wt),e(Wt,Dp),e(Wt,Es),e(Es,Op),e(Wt,Bp),e(Wt,Ha),e(Ha,Wp),e(Wt,Qp),e(We,Up),y(vo,We,null),e(We,Hp),e(We,Ra),e(Ra,Rp),e(We,Vp),y(In,We,null),u(o,Kr,f),u(o,Qt,f),e(Qt,ko),e(ko,Va),y(Ln,Va,null),e(Qt,Kp),e(Qt,Ka),e(Ka,Xp),u(o,Xr,f),u(o,we,f),y(Sn,we,null),e(we,Yp),e(we,Xa),e(Xa,Zp),e(we,eh),e(we,Nn),e(Nn,th),e(Nn,Js),e(Js,oh),e(Nn,nh),e(we,sh),e(we,Dn),e(Dn,ah),e(Dn,On),e(On,rh),e(Dn,ih),e(we,lh),e(we,Ya),e(Ya,dh),e(we,ch),e(we,ct),e(ct,Za),e(Za,Bn),e(Bn,ph),e(ct,hh),e(ct,er),e(er,Wn),e(Wn,uh),e(ct,fh),e(ct,tr),e(tr,Qn),e(Qn,mh),e(ct,gh),e(ct,or),e(or,Un),e(Un,_h),e(we,Th),e(we,Qe),y(Hn,Qe,null),e(Qe,vh),e(Qe,Ut),e(Ut,kh),e(Ut,nr),e(nr,wh),e(Ut,yh),e(Ut,sr),e(sr,bh),e(Ut,Ph),e(Qe,$h),y(wo,Qe,null),e(Qe,Fh),e(Qe,ar),e(ar,Gh),e(Qe,jh),y(Rn,Qe,null),u(o,Yr,f),u(o,Ht,f),e(Ht,yo),e(yo,rr),y(Vn,rr,null),e(Ht,Eh),e(Ht,ir),e(ir,Jh),u(o,Zr,f),u(o,ye,f),y(Kn,ye,null),e(ye,Mh),e(ye,lr),e(lr,xh),e(ye,qh),e(ye,Xn),e(Xn,zh),e(Xn,Ms),e(Ms,Ch),e(Xn,Ah),e(ye,Ih),e(ye,Yn),e(Yn,Lh),e(Yn,Zn),e(Zn,Sh),e(Yn,Nh),e(ye,Dh),e(ye,dr),e(dr,Oh),e(ye,Bh),e(ye,pt),e(pt,cr),e(cr,es),e(es,Wh),e(pt,Qh),e(pt,pr),e(pr,ts),e(ts,Uh),e(pt,Hh),e(pt,hr),e(hr,os),e(os,Rh),e(pt,Vh),e(pt,ur),e(ur,ns),e(ns,Kh),e(ye,Xh),e(ye,Ue),y(ss,Ue,null),e(Ue,Yh),e(Ue,Rt),e(Rt,Zh),e(Rt,fr),e(fr,eu),e(Rt,tu),e(Rt,mr),e(mr,ou),e(Rt,nu),e(Ue,su),y(bo,Ue,null),e(Ue,au),e(Ue,gr),e(gr,ru),e(Ue,iu),y(as,Ue,null),ei=!0},p(o,[f]){const rs={};f&2&&(rs.$$scope={dirty:f,ctx:o}),eo.$set(rs);const _r={};f&2&&(_r.$$scope={dirty:f,ctx:o}),oo.$set(_r);const Tr={};f&2&&(Tr.$$scope={dirty:f,ctx:o}),so.$set(Tr);const vr={};f&2&&(vr.$$scope={dirty:f,ctx:o}),ro.$set(vr);const is={};f&2&&(is.$$scope={dirty:f,ctx:o}),lo.$set(is);const kr={};f&2&&(kr.$$scope={dirty:f,ctx:o}),co.$set(kr);const wr={};f&2&&(wr.$$scope={dirty:f,ctx:o}),ho.$set(wr);const yr={};f&2&&(yr.$$scope={dirty:f,ctx:o}),uo.$set(yr);const Vt={};f&2&&(Vt.$$scope={dirty:f,ctx:o}),mo.$set(Vt);const br={};f&2&&(br.$$scope={dirty:f,ctx:o}),go.$set(br);const Pr={};f&2&&(Pr.$$scope={dirty:f,ctx:o}),To.$set(Pr);const ls={};f&2&&(ls.$$scope={dirty:f,ctx:o}),vo.$set(ls);const $r={};f&2&&($r.$$scope={dirty:f,ctx:o}),wo.$set($r);const Fr={};f&2&&(Fr.$$scope={dirty:f,ctx:o}),bo.$set(Fr)},i(o){ei||(b(T.$$.fragment,o),b(Z.$$.fragment,o),b(C.$$.fragment,o),b(Mo.$$.fragment,o),b(xo.$$.fragment,o),b(qo.$$.fragment,o),b(zo.$$.fragment,o),b(Co.$$.fragment,o),b(Io.$$.fragment,o),b(Lo.$$.fragment,o),b(So.$$.fragment,o),b(Oo.$$.fragment,o),b(eo.$$.fragment,o),b(Bo.$$.fragment,o),b(Wo.$$.fragment,o),b(Qo.$$.fragment,o),b(Ro.$$.fragment,o),b(oo.$$.fragment,o),b(Vo.$$.fragment,o),b(Ko.$$.fragment,o),b(Xo.$$.fragment,o),b(en.$$.fragment,o),b(so.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(nn.$$.fragment,o),b(sn.$$.fragment,o),b(ln.$$.fragment,o),b(ro.$$.fragment,o),b(dn.$$.fragment,o),b(cn.$$.fragment,o),b(pn.$$.fragment,o),b(lo.$$.fragment,o),b(mn.$$.fragment,o),b(co.$$.fragment,o),b(gn.$$.fragment,o),b(_n.$$.fragment,o),b(Tn.$$.fragment,o),b(ho.$$.fragment,o),b(yn.$$.fragment,o),b(uo.$$.fragment,o),b(bn.$$.fragment,o),b(Pn.$$.fragment,o),b($n.$$.fragment,o),b(mo.$$.fragment,o),b(En.$$.fragment,o),b(go.$$.fragment,o),b(Jn.$$.fragment,o),b(Mn.$$.fragment,o),b(xn.$$.fragment,o),b(To.$$.fragment,o),b(An.$$.fragment,o),b(vo.$$.fragment,o),b(In.$$.fragment,o),b(Ln.$$.fragment,o),b(Sn.$$.fragment,o),b(Hn.$$.fragment,o),b(wo.$$.fragment,o),b(Rn.$$.fragment,o),b(Vn.$$.fragment,o),b(Kn.$$.fragment,o),b(ss.$$.fragment,o),b(bo.$$.fragment,o),b(as.$$.fragment,o),ei=!0)},o(o){P(T.$$.fragment,o),P(Z.$$.fragment,o),P(C.$$.fragment,o),P(Mo.$$.fragment,o),P(xo.$$.fragment,o),P(qo.$$.fragment,o),P(zo.$$.fragment,o),P(Co.$$.fragment,o),P(Io.$$.fragment,o),P(Lo.$$.fragment,o),P(So.$$.fragment,o),P(Oo.$$.fragment,o),P(eo.$$.fragment,o),P(Bo.$$.fragment,o),P(Wo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ro.$$.fragment,o),P(oo.$$.fragment,o),P(Vo.$$.fragment,o),P(Ko.$$.fragment,o),P(Xo.$$.fragment,o),P(en.$$.fragment,o),P(so.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(ln.$$.fragment,o),P(ro.$$.fragment,o),P(dn.$$.fragment,o),P(cn.$$.fragment,o),P(pn.$$.fragment,o),P(lo.$$.fragment,o),P(mn.$$.fragment,o),P(co.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),P(ho.$$.fragment,o),P(yn.$$.fragment,o),P(uo.$$.fragment,o),P(bn.$$.fragment,o),P(Pn.$$.fragment,o),P($n.$$.fragment,o),P(mo.$$.fragment,o),P(En.$$.fragment,o),P(go.$$.fragment,o),P(Jn.$$.fragment,o),P(Mn.$$.fragment,o),P(xn.$$.fragment,o),P(To.$$.fragment,o),P(An.$$.fragment,o),P(vo.$$.fragment,o),P(In.$$.fragment,o),P(Ln.$$.fragment,o),P(Sn.$$.fragment,o),P(Hn.$$.fragment,o),P(wo.$$.fragment,o),P(Rn.$$.fragment,o),P(Vn.$$.fragment,o),P(Kn.$$.fragment,o),P(ss.$$.fragment,o),P(bo.$$.fragment,o),P(as.$$.fragment,o),ei=!1},d(o){t(p),o&&t(F),o&&t(m),$(T),o&&t(K),o&&t(E),$(Z),o&&t(re),o&&t(L),o&&t(ie),o&&t(Y),o&&t(le),o&&t(S),o&&t(de),o&&t(N),o&&t(Ee),$(C,o),o&&t(Q),o&&t(ce),o&&t(Gr),o&&t($t),$(Mo),o&&t(jr),o&&t(Xt),o&&t(Er),$(xo,o),o&&t(Jr),o&&t(cs),o&&t(Mr),$(qo,o),o&&t(xr),o&&t(Ft),$(zo),o&&t(qr),o&&t(Ye),$(Co),$(Io),o&&t(zr),o&&t(Gt),$(Lo),o&&t(Cr),o&&t(dt),$(So),$(Oo),$(eo),$(Bo),o&&t(Ar),o&&t(Et),$(Wo),o&&t(Ir),o&&t(et),$(Qo),$(Ro),$(oo),$(Vo),o&&t(Lr),o&&t(Mt),$(Ko),o&&t(Sr),o&&t($e),$(Xo),$(en),$(so),$(tn),$(on),o&&t(Nr),o&&t(qt),$(nn),o&&t(Dr),o&&t(ot),$(sn),$(ln),$(ro),$(dn),o&&t(Or),o&&t(At),$(cn),o&&t(Br),o&&t(Fe),$(pn),$(lo),$(mn),$(co),$(gn),o&&t(Wr),o&&t(Lt),$(_n),o&&t(Qr),o&&t(Ge),$(Tn),$(ho),$(yn),$(uo),$(bn),o&&t(Ur),o&&t(Nt),$(Pn),o&&t(Hr),o&&t(se),$($n),$(mo),$(En),$(go),$(Jn),o&&t(Rr),o&&t(Ot),$(Mn),o&&t(Vr),o&&t(je),$(xn),$(To),$(An),$(vo),$(In),o&&t(Kr),o&&t(Qt),$(Ln),o&&t(Xr),o&&t(we),$(Sn),$(Hn),$(wo),$(Rn),o&&t(Yr),o&&t(Ht),$(Vn),o&&t(Zr),o&&t(ye),$(Kn),$(ss),$(bo),$(as)}}}const dg={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.TFGPTJModel",title:"TFGPTJModel"},{local:"transformers.TFGPTJForCausalLM",title:"TFGPTJForCausalLM"},{local:"transformers.TFGPTJForSequenceClassification",title:"TFGPTJForSequenceClassification"},{local:"transformers.TFGPTJForQuestionAnswering",title:"TFGPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function cg(A,p,F){let{fw:m}=p;return A.$$set=_=>{"fw"in _&&F(0,m=_.fw)},[m]}class _g extends Wm{constructor(p){super();Qm(this,p,cg,lg,Um,{fw:0})}}export{_g as default,dg as metadata};
