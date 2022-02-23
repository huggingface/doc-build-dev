import{S as d_,i as c_,s as p_,e as r,k as l,w as k,t as n,L as h_,c as a,d as t,m as d,a as i,x as T,h as s,b as c,J as e,g as f,y as v,q as w,o as y,B as D}from"../../chunks/vendor-9e2b328e.js";import{T as Ie}from"../../chunks/Tip-76f97a76.js";import{D as J}from"../../chunks/Docstring-50fd6873.js";import{C as et}from"../../chunks/CodeBlock-88e23343.js";import{I as Re}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function f_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function u_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function m_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function g_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function __(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function b_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),E=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);E=a(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=a(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function k_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function T_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),E=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);E=a(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=a(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function v_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function w_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),E=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);E=a(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=a(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function y_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function D_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),E=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);E=a(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=a(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function E_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function $_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),E=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);E=a(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=a(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function F_(O){let h,F,m,g,E;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function q_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe,p,$,V,Ee,$e,x,pe,Te,ye,j,G,De,Fe,N,ae,we,ve,ie,Dl,Ns,El,$l,Os,Fl,ql,Ho,zl,Ml,Cl,$t,Pl,Ws,Rl,jl,Hs,xl,Bl,ci,Ft,ro,yr,Uo,Ll,Dr,Al,pi,ze,Qo,Il,Er,Sl,Nl,dt,Go,Ol,$r,Wl,Hl,Ko,Fr,Ul,Ql,qr,Gl,Kl,ao,Vo,Vl,qt,Jl,zr,Xl,Yl,Mr,Zl,ed,td,tt,Jo,od,Cr,nd,sd,Xo,rd,zt,ad,Pr,id,ld,Rr,dd,cd,pd,jr,hi,Mt,io,xr,Yo,hd,Br,fd,fi,Je,Zo,ud,en,md,Lr,gd,_d,bd,ct,tn,kd,Ar,Td,vd,on,Ir,wd,yd,Sr,Dd,Ed,ot,nn,$d,Nr,Fd,qd,sn,zd,Ct,Md,Or,Cd,Pd,Wr,Rd,jd,ui,Pt,lo,Hr,rn,xd,Ur,Bd,mi,Xe,an,Ld,ln,Ad,dn,Id,Sd,Nd,cn,Od,pn,Wd,Hd,Ud,Se,hn,Qd,Rt,Gd,Us,Kd,Vd,Qr,Jd,Xd,Yd,co,Zd,Gr,ec,tc,fn,gi,jt,po,Kr,un,oc,Vr,nc,_i,xt,mn,sc,Jr,rc,bi,Bt,ho,Xr,gn,ac,Yr,ic,ki,Ye,_n,lc,Lt,dc,Zr,cc,pc,bn,hc,fc,uc,kn,mc,Tn,gc,_c,bc,Ne,vn,kc,At,Tc,Qs,vc,wc,ea,yc,Dc,Ec,fo,$c,ta,Fc,qc,wn,Ti,It,uo,oa,yn,zc,na,Mc,vi,je,Dn,Cc,sa,Pc,Rc,En,jc,$n,xc,Bc,Lc,Fn,Ac,qn,Ic,Sc,Nc,qe,zn,Oc,St,Wc,Gs,Hc,Uc,ra,Qc,Gc,Kc,mo,Vc,aa,Jc,Xc,Mn,Yc,ia,Zc,ep,Cn,wi,Nt,go,la,Pn,tp,da,op,yi,xe,Rn,np,ca,sp,rp,jn,ap,xn,ip,lp,dp,Bn,cp,Ln,pp,hp,fp,Oe,An,up,Ot,mp,Ks,gp,_p,pa,bp,kp,Tp,_o,vp,ha,wp,yp,In,Di,Wt,bo,fa,Sn,Dp,ua,Ep,Ei,Be,Nn,$p,Ht,Fp,ma,qp,zp,ga,Mp,Cp,Pp,On,Rp,Wn,jp,xp,Bp,Hn,Lp,Un,Ap,Ip,Sp,We,Qn,Np,Ut,Op,Vs,Wp,Hp,_a,Up,Qp,Gp,ko,Kp,ba,Vp,Jp,Gn,$i,Qt,To,ka,Kn,Xp,Ta,Yp,Fi,Le,Vn,Zp,Jn,eh,Xn,th,oh,nh,Yn,sh,Zn,rh,ah,ih,vo,lh,He,es,dh,Gt,ch,Js,ph,hh,va,fh,uh,mh,wo,gh,wa,_h,bh,ts,qi,Kt,yo,ya,os,kh,Da,Th,zi,lt,ns,vh,Ea,wh,yh,nt,ss,Dh,$a,Eh,$h,rs,Fh,Fa,qh,zh,Mh,Ze,Ch,qa,Ph,Rh,za,jh,xh,Ma,Bh,Lh,Ca,Ah,Ih,Mi,Vt,Do,Pa,as,Sh,Ra,Nh,Ci,Ae,is,Oh,Jt,Wh,ja,Hh,Uh,ls,Qh,Gh,Kh,ds,Vh,cs,Jh,Xh,Yh,Eo,Zh,Ue,ps,ef,Xt,tf,Xs,of,nf,xa,sf,rf,af,$o,lf,Ba,df,cf,hs,Pi,Yt,Fo,La,fs,pf,Aa,hf,Ri,Me,us,ff,Ia,uf,mf,ms,gf,gs,_f,bf,kf,_s,Tf,bs,vf,wf,yf,qo,Df,Qe,ks,Ef,Zt,$f,Ys,Ff,qf,Sa,zf,Mf,Cf,zo,Pf,Na,Rf,jf,Ts,ji,eo,Mo,Oa,vs,xf,Wa,Bf,xi,Ce,ws,Lf,Ha,Af,If,ys,Sf,Ds,Nf,Of,Wf,Es,Hf,$s,Uf,Qf,Gf,Co,Kf,Ge,Fs,Vf,to,Jf,Zs,Xf,Yf,Ua,Zf,eu,tu,Po,ou,Qa,nu,su,qs,Bi,oo,Ro,Ga,zs,ru,Ka,au,Li,Pe,Ms,iu,no,lu,Va,du,cu,Ja,pu,hu,fu,Cs,uu,Ps,mu,gu,_u,Rs,bu,js,ku,Tu,vu,jo,wu,Ke,xs,yu,so,Du,er,Eu,$u,Xa,Fu,qu,zu,xo,Mu,Ya,Cu,Pu,Bs,Ai;return b=new Re({}),ee=new Re({}),j=new Re({}),we=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new Re({}),Zo=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),tn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Re({}),an=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15804/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ie({props:{$$slots:{default:[f_]},$$scope:{ctx:O}}}),fn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Re({}),mn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L787"}}),gn=new Re({}),_n=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15804/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Ie({props:{$$slots:{default:[u_]},$$scope:{ctx:O}}}),wn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yn=new Re({}),Dn=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15804/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Ie({props:{$$slots:{default:[m_]},$$scope:{ctx:O}}}),Mn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new Re({}),Rn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),An=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15804/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ie({props:{$$slots:{default:[g_]},$$scope:{ctx:O}}}),In=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sn=new Re({}),Nn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15804/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Ie({props:{$$slots:{default:[__]},$$scope:{ctx:O}}}),Gn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Kn=new Re({}),Vn=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1088",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new Ie({props:{$$slots:{default:[b_]},$$scope:{ctx:O}}}),es=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1094",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Ie({props:{$$slots:{default:[k_]},$$scope:{ctx:O}}}),ts=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),os=new Re({}),ns=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L993"}}),ss=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),as=new Re({}),is=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1150",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new Ie({props:{$$slots:{default:[T_]},$$scope:{ctx:O}}}),ps=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1166",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new Ie({props:{$$slots:{default:[v_]},$$scope:{ctx:O}}}),hs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fs=new Re({}),us=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1252",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new Ie({props:{$$slots:{default:[w_]},$$scope:{ctx:O}}}),ks=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1270",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Ie({props:{$$slots:{default:[y_]},$$scope:{ctx:O}}}),Ts=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vs=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1355",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ie({props:{$$slots:{default:[D_]},$$scope:{ctx:O}}}),Fs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1367",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new Ie({props:{$$slots:{default:[E_]},$$scope:{ctx:O}}}),qs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new Re({}),Ms=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1448",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15804/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Ie({props:{$$slots:{default:[$_]},$$scope:{ctx:O}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15804/src/transformers/models/deberta/modeling_tf_deberta.py#L1459",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15804/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_15804/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Ie({props:{$$slots:{default:[F_]},$$scope:{ctx:O}}}),Bs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=r("meta"),F=l(),m=r("h1"),g=r("a"),E=r("span"),k(b.$$.fragment),_=l(),q=r("span"),he=n("DeBERTa"),X=l(),z=r("h2"),Y=r("a"),A=r("span"),k(ee.$$.fragment),fe=l(),I=r("span"),ue=n("Overview"),le=l(),W=r("p"),B=n("The DeBERTa model was proposed in "),te=r("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),P=l(),ne=r("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=r("p"),U=n("The abstract from the paper is the following:"),ce=l(),re=r("p"),C=r("em"),me=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),S=l(),K=r("p"),be=n("This model was contributed by "),R=r("a"),ke=n("DeBERTa"),Q=n(`. This model TF 2.0 implementation was
contributed by `),oe=r("a"),p=n("kamalkraj"),$=n(" . The original code can be found "),V=r("a"),Ee=n("here"),$e=n("."),x=l(),pe=r("h2"),Te=r("a"),ye=r("span"),k(j.$$.fragment),G=l(),De=r("span"),Fe=n("DebertaConfig"),N=l(),ae=r("div"),k(we.$$.fragment),ve=l(),ie=r("p"),Dl=n("This is the configuration class to store the configuration of a "),Ns=r("a"),El=n("DebertaModel"),$l=n(" or a "),Os=r("a"),Fl=n("TFDebertaModel"),ql=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r("a"),zl=n("microsoft/deberta-base"),Ml=n(" architecture."),Cl=l(),$t=r("p"),Pl=n("Configuration objects inherit from "),Ws=r("a"),Rl=n("PretrainedConfig"),jl=n(` and can be used to control the model outputs. Read the
documentation from `),Hs=r("a"),xl=n("PretrainedConfig"),Bl=n(" for more information."),ci=l(),Ft=r("h2"),ro=r("a"),yr=r("span"),k(Uo.$$.fragment),Ll=l(),Dr=r("span"),Al=n("DebertaTokenizer"),pi=l(),ze=r("div"),k(Qo.$$.fragment),Il=l(),Er=r("p"),Sl=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Nl=l(),dt=r("div"),k(Go.$$.fragment),Ol=l(),$r=r("p"),Wl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Hl=l(),Ko=r("ul"),Fr=r("li"),Ul=n("single sequence: [CLS] X [SEP]"),Ql=l(),qr=r("li"),Gl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Kl=l(),ao=r("div"),k(Vo.$$.fragment),Vl=l(),qt=r("p"),Jl=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zr=r("code"),Xl=n("prepare_for_model"),Yl=n(" or "),Mr=r("code"),Zl=n("encode_plus"),ed=n(" methods."),td=l(),tt=r("div"),k(Jo.$$.fragment),od=l(),Cr=r("p"),nd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),sd=l(),k(Xo.$$.fragment),rd=l(),zt=r("p"),ad=n("If "),Pr=r("code"),id=n("token_ids_1"),ld=n(" is "),Rr=r("code"),dd=n("None"),cd=n(", this method only returns the first portion of the mask (0s)."),pd=l(),jr=r("div"),hi=l(),Mt=r("h2"),io=r("a"),xr=r("span"),k(Yo.$$.fragment),hd=l(),Br=r("span"),fd=n("DebertaTokenizerFast"),fi=l(),Je=r("div"),k(Zo.$$.fragment),ud=l(),en=r("p"),md=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Lr=r("em"),gd=n("tokenizers"),_d=n(" library."),bd=l(),ct=r("div"),k(tn.$$.fragment),kd=l(),Ar=r("p"),Td=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),vd=l(),on=r("ul"),Ir=r("li"),wd=n("single sequence: [CLS] X [SEP]"),yd=l(),Sr=r("li"),Dd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ed=l(),ot=r("div"),k(nn.$$.fragment),$d=l(),Nr=r("p"),Fd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),qd=l(),k(sn.$$.fragment),zd=l(),Ct=r("p"),Md=n("If "),Or=r("code"),Cd=n("token_ids_1"),Pd=n(" is "),Wr=r("code"),Rd=n("None"),jd=n(", this method only returns the first portion of the mask (0s)."),ui=l(),Pt=r("h2"),lo=r("a"),Hr=r("span"),k(rn.$$.fragment),xd=l(),Ur=r("span"),Bd=n("DebertaModel"),mi=l(),Xe=r("div"),k(an.$$.fragment),Ld=l(),ln=r("p"),Ad=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),dn=r("a"),Id=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nd=l(),cn=r("p"),Od=n("This model is also a PyTorch "),pn=r("a"),Wd=n("torch.nn.Module"),Hd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ud=l(),Se=r("div"),k(hn.$$.fragment),Qd=l(),Rt=r("p"),Gd=n("The "),Us=r("a"),Kd=n("DebertaModel"),Vd=n(" forward method, overrides the "),Qr=r("code"),Jd=n("__call__"),Xd=n(" special method."),Yd=l(),k(co.$$.fragment),Zd=l(),Gr=r("p"),ec=n("Example:"),tc=l(),k(fn.$$.fragment),gi=l(),jt=r("h2"),po=r("a"),Kr=r("span"),k(un.$$.fragment),oc=l(),Vr=r("span"),nc=n("DebertaPreTrainedModel"),_i=l(),xt=r("div"),k(mn.$$.fragment),sc=l(),Jr=r("p"),rc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),bi=l(),Bt=r("h2"),ho=r("a"),Xr=r("span"),k(gn.$$.fragment),ac=l(),Yr=r("span"),ic=n("DebertaForMaskedLM"),ki=l(),Ye=r("div"),k(_n.$$.fragment),lc=l(),Lt=r("p"),dc=n("DeBERTa Model with a "),Zr=r("code"),cc=n("language modeling"),pc=n(` head on top.
The DeBERTa model was proposed in `),bn=r("a"),hc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),uc=l(),kn=r("p"),mc=n("This model is also a PyTorch "),Tn=r("a"),gc=n("torch.nn.Module"),_c=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),bc=l(),Ne=r("div"),k(vn.$$.fragment),kc=l(),At=r("p"),Tc=n("The "),Qs=r("a"),vc=n("DebertaForMaskedLM"),wc=n(" forward method, overrides the "),ea=r("code"),yc=n("__call__"),Dc=n(" special method."),Ec=l(),k(fo.$$.fragment),$c=l(),ta=r("p"),Fc=n("Example:"),qc=l(),k(wn.$$.fragment),Ti=l(),It=r("h2"),uo=r("a"),oa=r("span"),k(yn.$$.fragment),zc=l(),na=r("span"),Mc=n("DebertaForSequenceClassification"),vi=l(),je=r("div"),k(Dn.$$.fragment),Cc=l(),sa=r("p"),Pc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rc=l(),En=r("p"),jc=n("The DeBERTa model was proposed in "),$n=r("a"),xc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lc=l(),Fn=r("p"),Ac=n("This model is also a PyTorch "),qn=r("a"),Ic=n("torch.nn.Module"),Sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nc=l(),qe=r("div"),k(zn.$$.fragment),Oc=l(),St=r("p"),Wc=n("The "),Gs=r("a"),Hc=n("DebertaForSequenceClassification"),Uc=n(" forward method, overrides the "),ra=r("code"),Qc=n("__call__"),Gc=n(" special method."),Kc=l(),k(mo.$$.fragment),Vc=l(),aa=r("p"),Jc=n("Example of single-label classification:"),Xc=l(),k(Mn.$$.fragment),Yc=l(),ia=r("p"),Zc=n("Example of multi-label classification:"),ep=l(),k(Cn.$$.fragment),wi=l(),Nt=r("h2"),go=r("a"),la=r("span"),k(Pn.$$.fragment),tp=l(),da=r("span"),op=n("DebertaForTokenClassification"),yi=l(),xe=r("div"),k(Rn.$$.fragment),np=l(),ca=r("p"),sp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rp=l(),jn=r("p"),ap=n("The DeBERTa model was proposed in "),xn=r("a"),ip=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dp=l(),Bn=r("p"),cp=n("This model is also a PyTorch "),Ln=r("a"),pp=n("torch.nn.Module"),hp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fp=l(),Oe=r("div"),k(An.$$.fragment),up=l(),Ot=r("p"),mp=n("The "),Ks=r("a"),gp=n("DebertaForTokenClassification"),_p=n(" forward method, overrides the "),pa=r("code"),bp=n("__call__"),kp=n(" special method."),Tp=l(),k(_o.$$.fragment),vp=l(),ha=r("p"),wp=n("Example:"),yp=l(),k(In.$$.fragment),Di=l(),Wt=r("h2"),bo=r("a"),fa=r("span"),k(Sn.$$.fragment),Dp=l(),ua=r("span"),Ep=n("DebertaForQuestionAnswering"),Ei=l(),Be=r("div"),k(Nn.$$.fragment),$p=l(),Ht=r("p"),Fp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ma=r("code"),qp=n("span start logits"),zp=n(" and "),ga=r("code"),Mp=n("span end logits"),Cp=n(")."),Pp=l(),On=r("p"),Rp=n("The DeBERTa model was proposed in "),Wn=r("a"),jp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bp=l(),Hn=r("p"),Lp=n("This model is also a PyTorch "),Un=r("a"),Ap=n("torch.nn.Module"),Ip=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Sp=l(),We=r("div"),k(Qn.$$.fragment),Np=l(),Ut=r("p"),Op=n("The "),Vs=r("a"),Wp=n("DebertaForQuestionAnswering"),Hp=n(" forward method, overrides the "),_a=r("code"),Up=n("__call__"),Qp=n(" special method."),Gp=l(),k(ko.$$.fragment),Kp=l(),ba=r("p"),Vp=n("Example:"),Jp=l(),k(Gn.$$.fragment),$i=l(),Qt=r("h2"),To=r("a"),ka=r("span"),k(Kn.$$.fragment),Xp=l(),Ta=r("span"),Yp=n("TFDebertaModel"),Fi=l(),Le=r("div"),k(Vn.$$.fragment),Zp=l(),Jn=r("p"),eh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Xn=r("a"),th=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),oh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nh=l(),Yn=r("p"),sh=n("This model is also a "),Zn=r("a"),rh=n("tf.keras.Model"),ah=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ih=l(),k(vo.$$.fragment),lh=l(),He=r("div"),k(es.$$.fragment),dh=l(),Gt=r("p"),ch=n("The "),Js=r("a"),ph=n("TFDebertaModel"),hh=n(" forward method, overrides the "),va=r("code"),fh=n("__call__"),uh=n(" special method."),mh=l(),k(wo.$$.fragment),gh=l(),wa=r("p"),_h=n("Example:"),bh=l(),k(ts.$$.fragment),qi=l(),Kt=r("h2"),yo=r("a"),ya=r("span"),k(os.$$.fragment),kh=l(),Da=r("span"),Th=n("TFDebertaPreTrainedModel"),zi=l(),lt=r("div"),k(ns.$$.fragment),vh=l(),Ea=r("p"),wh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),yh=l(),nt=r("div"),k(ss.$$.fragment),Dh=l(),$a=r("p"),Eh=n("Calls the model on new inputs and returns the outputs as tensors."),$h=l(),rs=r("p"),Fh=n("In this case "),Fa=r("code"),qh=n("call()"),zh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Mh=l(),Ze=r("p"),Ch=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),qa=r("code"),Ph=n("tf.keras.Model"),Rh=n(`.
To call a model on an input, always use the `),za=r("code"),jh=n("__call__()"),xh=n(` method,
i.e. `),Ma=r("code"),Bh=n("model(inputs)"),Lh=n(", which relies on the underlying "),Ca=r("code"),Ah=n("call()"),Ih=n(" method."),Mi=l(),Vt=r("h2"),Do=r("a"),Pa=r("span"),k(as.$$.fragment),Sh=l(),Ra=r("span"),Nh=n("TFDebertaForMaskedLM"),Ci=l(),Ae=r("div"),k(is.$$.fragment),Oh=l(),Jt=r("p"),Wh=n("DeBERTa Model with a "),ja=r("code"),Hh=n("language modeling"),Uh=n(` head on top.
The DeBERTa model was proposed in `),ls=r("a"),Qh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kh=l(),ds=r("p"),Vh=n("This model is also a "),cs=r("a"),Jh=n("tf.keras.Model"),Xh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh=l(),k(Eo.$$.fragment),Zh=l(),Ue=r("div"),k(ps.$$.fragment),ef=l(),Xt=r("p"),tf=n("The "),Xs=r("a"),of=n("TFDebertaForMaskedLM"),nf=n(" forward method, overrides the "),xa=r("code"),sf=n("__call__"),rf=n(" special method."),af=l(),k($o.$$.fragment),lf=l(),Ba=r("p"),df=n("Example:"),cf=l(),k(hs.$$.fragment),Pi=l(),Yt=r("h2"),Fo=r("a"),La=r("span"),k(fs.$$.fragment),pf=l(),Aa=r("span"),hf=n("TFDebertaForSequenceClassification"),Ri=l(),Me=r("div"),k(us.$$.fragment),ff=l(),Ia=r("p"),uf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),mf=l(),ms=r("p"),gf=n("The DeBERTa model was proposed in "),gs=r("a"),_f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kf=l(),_s=r("p"),Tf=n("This model is also a "),bs=r("a"),vf=n("tf.keras.Model"),wf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf=l(),k(qo.$$.fragment),Df=l(),Qe=r("div"),k(ks.$$.fragment),Ef=l(),Zt=r("p"),$f=n("The "),Ys=r("a"),Ff=n("TFDebertaForSequenceClassification"),qf=n(" forward method, overrides the "),Sa=r("code"),zf=n("__call__"),Mf=n(" special method."),Cf=l(),k(zo.$$.fragment),Pf=l(),Na=r("p"),Rf=n("Example:"),jf=l(),k(Ts.$$.fragment),ji=l(),eo=r("h2"),Mo=r("a"),Oa=r("span"),k(vs.$$.fragment),xf=l(),Wa=r("span"),Bf=n("TFDebertaForTokenClassification"),xi=l(),Ce=r("div"),k(ws.$$.fragment),Lf=l(),Ha=r("p"),Af=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),If=l(),ys=r("p"),Sf=n("The DeBERTa model was proposed in "),Ds=r("a"),Nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Of=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wf=l(),Es=r("p"),Hf=n("This model is also a "),$s=r("a"),Uf=n("tf.keras.Model"),Qf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gf=l(),k(Co.$$.fragment),Kf=l(),Ge=r("div"),k(Fs.$$.fragment),Vf=l(),to=r("p"),Jf=n("The "),Zs=r("a"),Xf=n("TFDebertaForTokenClassification"),Yf=n(" forward method, overrides the "),Ua=r("code"),Zf=n("__call__"),eu=n(" special method."),tu=l(),k(Po.$$.fragment),ou=l(),Qa=r("p"),nu=n("Example:"),su=l(),k(qs.$$.fragment),Bi=l(),oo=r("h2"),Ro=r("a"),Ga=r("span"),k(zs.$$.fragment),ru=l(),Ka=r("span"),au=n("TFDebertaForQuestionAnswering"),Li=l(),Pe=r("div"),k(Ms.$$.fragment),iu=l(),no=r("p"),lu=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Va=r("code"),du=n("span start logits"),cu=n(" and "),Ja=r("code"),pu=n("span end logits"),hu=n(")."),fu=l(),Cs=r("p"),uu=n("The DeBERTa model was proposed in "),Ps=r("a"),mu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_u=l(),Rs=r("p"),bu=n("This model is also a "),js=r("a"),ku=n("tf.keras.Model"),Tu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vu=l(),k(jo.$$.fragment),wu=l(),Ke=r("div"),k(xs.$$.fragment),yu=l(),so=r("p"),Du=n("The "),er=r("a"),Eu=n("TFDebertaForQuestionAnswering"),$u=n(" forward method, overrides the "),Xa=r("code"),Fu=n("__call__"),qu=n(" special method."),zu=l(),k(xo.$$.fragment),Mu=l(),Ya=r("p"),Cu=n("Example:"),Pu=l(),k(Bs.$$.fragment),this.h()},l(o){const u=h_('[data-svelte="svelte-1phssyn"]',document.head);h=a(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(o),m=a(o,"H1",{class:!0});var Ls=i(m);g=a(Ls,"A",{id:!0,class:!0,href:!0});var Za=i(g);E=a(Za,"SPAN",{});var ei=i(E);T(b.$$.fragment,ei),ei.forEach(t),Za.forEach(t),_=d(Ls),q=a(Ls,"SPAN",{});var ti=i(q);he=s(ti,"DeBERTa"),ti.forEach(t),Ls.forEach(t),X=d(o),z=a(o,"H2",{class:!0});var As=i(z);Y=a(As,"A",{id:!0,class:!0,href:!0});var oi=i(Y);A=a(oi,"SPAN",{});var ni=i(A);T(ee.$$.fragment,ni),ni.forEach(t),oi.forEach(t),fe=d(As),I=a(As,"SPAN",{});var si=i(I);ue=s(si,"Overview"),si.forEach(t),As.forEach(t),le=d(o),W=a(o,"P",{});var Is=i(W);B=s(Is,"The DeBERTa model was proposed in "),te=a(Is,"A",{href:!0,rel:!0});var ri=i(te);Z=s(ri,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ri.forEach(t),M=s(Is,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Is.forEach(t),P=d(o),ne=a(o,"P",{});var ai=i(ne);H=s(ai,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ai.forEach(t),de=d(o),se=a(o,"P",{});var ii=i(se);U=s(ii,"The abstract from the paper is the following:"),ii.forEach(t),ce=d(o),re=a(o,"P",{});var li=i(re);C=a(li,"EM",{});var Ss=i(C);me=s(Ss,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a(Ss,"A",{href:!0,rel:!0});var di=i(L);ge=s(di,"https://github.com/microsoft/DeBERTa"),di.forEach(t),_e=s(Ss,"."),Ss.forEach(t),li.forEach(t),S=d(o),K=a(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),R=a(Bo,"A",{href:!0,rel:!0});var Ru=i(R);ke=s(Ru,"DeBERTa"),Ru.forEach(t),Q=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=a(Bo,"A",{href:!0,rel:!0});var ju=i(oe);p=s(ju,"kamalkraj"),ju.forEach(t),$=s(Bo," . The original code can be found "),V=a(Bo,"A",{href:!0,rel:!0});var xu=i(V);Ee=s(xu,"here"),xu.forEach(t),$e=s(Bo,"."),Bo.forEach(t),x=d(o),pe=a(o,"H2",{class:!0});var Ii=i(pe);Te=a(Ii,"A",{id:!0,class:!0,href:!0});var Bu=i(Te);ye=a(Bu,"SPAN",{});var Lu=i(ye);T(j.$$.fragment,Lu),Lu.forEach(t),Bu.forEach(t),G=d(Ii),De=a(Ii,"SPAN",{});var Au=i(De);Fe=s(Au,"DebertaConfig"),Au.forEach(t),Ii.forEach(t),N=d(o),ae=a(o,"DIV",{class:!0});var tr=i(ae);T(we.$$.fragment,tr),ve=d(tr),ie=a(tr,"P",{});var Lo=i(ie);Dl=s(Lo,"This is the configuration class to store the configuration of a "),Ns=a(Lo,"A",{href:!0});var Iu=i(Ns);El=s(Iu,"DebertaModel"),Iu.forEach(t),$l=s(Lo," or a "),Os=a(Lo,"A",{href:!0});var Su=i(Os);Fl=s(Su,"TFDebertaModel"),Su.forEach(t),ql=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a(Lo,"A",{href:!0,rel:!0});var Nu=i(Ho);zl=s(Nu,"microsoft/deberta-base"),Nu.forEach(t),Ml=s(Lo," architecture."),Lo.forEach(t),Cl=d(tr),$t=a(tr,"P",{});var or=i($t);Pl=s(or,"Configuration objects inherit from "),Ws=a(or,"A",{href:!0});var Ou=i(Ws);Rl=s(Ou,"PretrainedConfig"),Ou.forEach(t),jl=s(or,` and can be used to control the model outputs. Read the
documentation from `),Hs=a(or,"A",{href:!0});var Wu=i(Hs);xl=s(Wu,"PretrainedConfig"),Wu.forEach(t),Bl=s(or," for more information."),or.forEach(t),tr.forEach(t),ci=d(o),Ft=a(o,"H2",{class:!0});var Si=i(Ft);ro=a(Si,"A",{id:!0,class:!0,href:!0});var Hu=i(ro);yr=a(Hu,"SPAN",{});var Uu=i(yr);T(Uo.$$.fragment,Uu),Uu.forEach(t),Hu.forEach(t),Ll=d(Si),Dr=a(Si,"SPAN",{});var Qu=i(Dr);Al=s(Qu,"DebertaTokenizer"),Qu.forEach(t),Si.forEach(t),pi=d(o),ze=a(o,"DIV",{class:!0});var st=i(ze);T(Qo.$$.fragment,st),Il=d(st),Er=a(st,"P",{});var Gu=i(Er);Sl=s(Gu,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Gu.forEach(t),Nl=d(st),dt=a(st,"DIV",{class:!0});var nr=i(dt);T(Go.$$.fragment,nr),Ol=d(nr),$r=a(nr,"P",{});var Ku=i($r);Wl=s(Ku,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ku.forEach(t),Hl=d(nr),Ko=a(nr,"UL",{});var Ni=i(Ko);Fr=a(Ni,"LI",{});var Vu=i(Fr);Ul=s(Vu,"single sequence: [CLS] X [SEP]"),Vu.forEach(t),Ql=d(Ni),qr=a(Ni,"LI",{});var Ju=i(qr);Gl=s(Ju,"pair of sequences: [CLS] A [SEP] B [SEP]"),Ju.forEach(t),Ni.forEach(t),nr.forEach(t),Kl=d(st),ao=a(st,"DIV",{class:!0});var Oi=i(ao);T(Vo.$$.fragment,Oi),Vl=d(Oi),qt=a(Oi,"P",{});var sr=i(qt);Jl=s(sr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),zr=a(sr,"CODE",{});var Xu=i(zr);Xl=s(Xu,"prepare_for_model"),Xu.forEach(t),Yl=s(sr," or "),Mr=a(sr,"CODE",{});var Yu=i(Mr);Zl=s(Yu,"encode_plus"),Yu.forEach(t),ed=s(sr," methods."),sr.forEach(t),Oi.forEach(t),td=d(st),tt=a(st,"DIV",{class:!0});var Ao=i(tt);T(Jo.$$.fragment,Ao),od=d(Ao),Cr=a(Ao,"P",{});var Zu=i(Cr);nd=s(Zu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Zu.forEach(t),sd=d(Ao),T(Xo.$$.fragment,Ao),rd=d(Ao),zt=a(Ao,"P",{});var rr=i(zt);ad=s(rr,"If "),Pr=a(rr,"CODE",{});var em=i(Pr);id=s(em,"token_ids_1"),em.forEach(t),ld=s(rr," is "),Rr=a(rr,"CODE",{});var tm=i(Rr);dd=s(tm,"None"),tm.forEach(t),cd=s(rr,", this method only returns the first portion of the mask (0s)."),rr.forEach(t),Ao.forEach(t),pd=d(st),jr=a(st,"DIV",{class:!0}),i(jr).forEach(t),st.forEach(t),hi=d(o),Mt=a(o,"H2",{class:!0});var Wi=i(Mt);io=a(Wi,"A",{id:!0,class:!0,href:!0});var om=i(io);xr=a(om,"SPAN",{});var nm=i(xr);T(Yo.$$.fragment,nm),nm.forEach(t),om.forEach(t),hd=d(Wi),Br=a(Wi,"SPAN",{});var sm=i(Br);fd=s(sm,"DebertaTokenizerFast"),sm.forEach(t),Wi.forEach(t),fi=d(o),Je=a(o,"DIV",{class:!0});var Io=i(Je);T(Zo.$$.fragment,Io),ud=d(Io),en=a(Io,"P",{});var Hi=i(en);md=s(Hi,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Lr=a(Hi,"EM",{});var rm=i(Lr);gd=s(rm,"tokenizers"),rm.forEach(t),_d=s(Hi," library."),Hi.forEach(t),bd=d(Io),ct=a(Io,"DIV",{class:!0});var ar=i(ct);T(tn.$$.fragment,ar),kd=d(ar),Ar=a(ar,"P",{});var am=i(Ar);Td=s(am,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),am.forEach(t),vd=d(ar),on=a(ar,"UL",{});var Ui=i(on);Ir=a(Ui,"LI",{});var im=i(Ir);wd=s(im,"single sequence: [CLS] X [SEP]"),im.forEach(t),yd=d(Ui),Sr=a(Ui,"LI",{});var lm=i(Sr);Dd=s(lm,"pair of sequences: [CLS] A [SEP] B [SEP]"),lm.forEach(t),Ui.forEach(t),ar.forEach(t),Ed=d(Io),ot=a(Io,"DIV",{class:!0});var So=i(ot);T(nn.$$.fragment,So),$d=d(So),Nr=a(So,"P",{});var dm=i(Nr);Fd=s(dm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),dm.forEach(t),qd=d(So),T(sn.$$.fragment,So),zd=d(So),Ct=a(So,"P",{});var ir=i(Ct);Md=s(ir,"If "),Or=a(ir,"CODE",{});var cm=i(Or);Cd=s(cm,"token_ids_1"),cm.forEach(t),Pd=s(ir," is "),Wr=a(ir,"CODE",{});var pm=i(Wr);Rd=s(pm,"None"),pm.forEach(t),jd=s(ir,", this method only returns the first portion of the mask (0s)."),ir.forEach(t),So.forEach(t),Io.forEach(t),ui=d(o),Pt=a(o,"H2",{class:!0});var Qi=i(Pt);lo=a(Qi,"A",{id:!0,class:!0,href:!0});var hm=i(lo);Hr=a(hm,"SPAN",{});var fm=i(Hr);T(rn.$$.fragment,fm),fm.forEach(t),hm.forEach(t),xd=d(Qi),Ur=a(Qi,"SPAN",{});var um=i(Ur);Bd=s(um,"DebertaModel"),um.forEach(t),Qi.forEach(t),mi=d(o),Xe=a(o,"DIV",{class:!0});var No=i(Xe);T(an.$$.fragment,No),Ld=d(No),ln=a(No,"P",{});var Gi=i(ln);Ad=s(Gi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),dn=a(Gi,"A",{href:!0,rel:!0});var mm=i(dn);Id=s(mm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mm.forEach(t),Sd=s(Gi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gi.forEach(t),Nd=d(No),cn=a(No,"P",{});var Ki=i(cn);Od=s(Ki,"This model is also a PyTorch "),pn=a(Ki,"A",{href:!0,rel:!0});var gm=i(pn);Wd=s(gm,"torch.nn.Module"),gm.forEach(t),Hd=s(Ki," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ki.forEach(t),Ud=d(No),Se=a(No,"DIV",{class:!0});var pt=i(Se);T(hn.$$.fragment,pt),Qd=d(pt),Rt=a(pt,"P",{});var lr=i(Rt);Gd=s(lr,"The "),Us=a(lr,"A",{href:!0});var _m=i(Us);Kd=s(_m,"DebertaModel"),_m.forEach(t),Vd=s(lr," forward method, overrides the "),Qr=a(lr,"CODE",{});var bm=i(Qr);Jd=s(bm,"__call__"),bm.forEach(t),Xd=s(lr," special method."),lr.forEach(t),Yd=d(pt),T(co.$$.fragment,pt),Zd=d(pt),Gr=a(pt,"P",{});var km=i(Gr);ec=s(km,"Example:"),km.forEach(t),tc=d(pt),T(fn.$$.fragment,pt),pt.forEach(t),No.forEach(t),gi=d(o),jt=a(o,"H2",{class:!0});var Vi=i(jt);po=a(Vi,"A",{id:!0,class:!0,href:!0});var Tm=i(po);Kr=a(Tm,"SPAN",{});var vm=i(Kr);T(un.$$.fragment,vm),vm.forEach(t),Tm.forEach(t),oc=d(Vi),Vr=a(Vi,"SPAN",{});var wm=i(Vr);nc=s(wm,"DebertaPreTrainedModel"),wm.forEach(t),Vi.forEach(t),_i=d(o),xt=a(o,"DIV",{class:!0});var Ji=i(xt);T(mn.$$.fragment,Ji),sc=d(Ji),Jr=a(Ji,"P",{});var ym=i(Jr);rc=s(ym,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ym.forEach(t),Ji.forEach(t),bi=d(o),Bt=a(o,"H2",{class:!0});var Xi=i(Bt);ho=a(Xi,"A",{id:!0,class:!0,href:!0});var Dm=i(ho);Xr=a(Dm,"SPAN",{});var Em=i(Xr);T(gn.$$.fragment,Em),Em.forEach(t),Dm.forEach(t),ac=d(Xi),Yr=a(Xi,"SPAN",{});var $m=i(Yr);ic=s($m,"DebertaForMaskedLM"),$m.forEach(t),Xi.forEach(t),ki=d(o),Ye=a(o,"DIV",{class:!0});var Oo=i(Ye);T(_n.$$.fragment,Oo),lc=d(Oo),Lt=a(Oo,"P",{});var dr=i(Lt);dc=s(dr,"DeBERTa Model with a "),Zr=a(dr,"CODE",{});var Fm=i(Zr);cc=s(Fm,"language modeling"),Fm.forEach(t),pc=s(dr,` head on top.
The DeBERTa model was proposed in `),bn=a(dr,"A",{href:!0,rel:!0});var qm=i(bn);hc=s(qm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qm.forEach(t),fc=s(dr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dr.forEach(t),uc=d(Oo),kn=a(Oo,"P",{});var Yi=i(kn);mc=s(Yi,"This model is also a PyTorch "),Tn=a(Yi,"A",{href:!0,rel:!0});var zm=i(Tn);gc=s(zm,"torch.nn.Module"),zm.forEach(t),_c=s(Yi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Yi.forEach(t),bc=d(Oo),Ne=a(Oo,"DIV",{class:!0});var ht=i(Ne);T(vn.$$.fragment,ht),kc=d(ht),At=a(ht,"P",{});var cr=i(At);Tc=s(cr,"The "),Qs=a(cr,"A",{href:!0});var Mm=i(Qs);vc=s(Mm,"DebertaForMaskedLM"),Mm.forEach(t),wc=s(cr," forward method, overrides the "),ea=a(cr,"CODE",{});var Cm=i(ea);yc=s(Cm,"__call__"),Cm.forEach(t),Dc=s(cr," special method."),cr.forEach(t),Ec=d(ht),T(fo.$$.fragment,ht),$c=d(ht),ta=a(ht,"P",{});var Pm=i(ta);Fc=s(Pm,"Example:"),Pm.forEach(t),qc=d(ht),T(wn.$$.fragment,ht),ht.forEach(t),Oo.forEach(t),Ti=d(o),It=a(o,"H2",{class:!0});var Zi=i(It);uo=a(Zi,"A",{id:!0,class:!0,href:!0});var Rm=i(uo);oa=a(Rm,"SPAN",{});var jm=i(oa);T(yn.$$.fragment,jm),jm.forEach(t),Rm.forEach(t),zc=d(Zi),na=a(Zi,"SPAN",{});var xm=i(na);Mc=s(xm,"DebertaForSequenceClassification"),xm.forEach(t),Zi.forEach(t),vi=d(o),je=a(o,"DIV",{class:!0});var ft=i(je);T(Dn.$$.fragment,ft),Cc=d(ft),sa=a(ft,"P",{});var Bm=i(sa);Pc=s(Bm,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bm.forEach(t),Rc=d(ft),En=a(ft,"P",{});var el=i(En);jc=s(el,"The DeBERTa model was proposed in "),$n=a(el,"A",{href:!0,rel:!0});var Lm=i($n);xc=s(Lm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lm.forEach(t),Bc=s(el,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),el.forEach(t),Lc=d(ft),Fn=a(ft,"P",{});var tl=i(Fn);Ac=s(tl,"This model is also a PyTorch "),qn=a(tl,"A",{href:!0,rel:!0});var Am=i(qn);Ic=s(Am,"torch.nn.Module"),Am.forEach(t),Sc=s(tl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),tl.forEach(t),Nc=d(ft),qe=a(ft,"DIV",{class:!0});var Ve=i(qe);T(zn.$$.fragment,Ve),Oc=d(Ve),St=a(Ve,"P",{});var pr=i(St);Wc=s(pr,"The "),Gs=a(pr,"A",{href:!0});var Im=i(Gs);Hc=s(Im,"DebertaForSequenceClassification"),Im.forEach(t),Uc=s(pr," forward method, overrides the "),ra=a(pr,"CODE",{});var Sm=i(ra);Qc=s(Sm,"__call__"),Sm.forEach(t),Gc=s(pr," special method."),pr.forEach(t),Kc=d(Ve),T(mo.$$.fragment,Ve),Vc=d(Ve),aa=a(Ve,"P",{});var Nm=i(aa);Jc=s(Nm,"Example of single-label classification:"),Nm.forEach(t),Xc=d(Ve),T(Mn.$$.fragment,Ve),Yc=d(Ve),ia=a(Ve,"P",{});var Om=i(ia);Zc=s(Om,"Example of multi-label classification:"),Om.forEach(t),ep=d(Ve),T(Cn.$$.fragment,Ve),Ve.forEach(t),ft.forEach(t),wi=d(o),Nt=a(o,"H2",{class:!0});var ol=i(Nt);go=a(ol,"A",{id:!0,class:!0,href:!0});var Wm=i(go);la=a(Wm,"SPAN",{});var Hm=i(la);T(Pn.$$.fragment,Hm),Hm.forEach(t),Wm.forEach(t),tp=d(ol),da=a(ol,"SPAN",{});var Um=i(da);op=s(Um,"DebertaForTokenClassification"),Um.forEach(t),ol.forEach(t),yi=d(o),xe=a(o,"DIV",{class:!0});var ut=i(xe);T(Rn.$$.fragment,ut),np=d(ut),ca=a(ut,"P",{});var Qm=i(ca);sp=s(Qm,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qm.forEach(t),rp=d(ut),jn=a(ut,"P",{});var nl=i(jn);ap=s(nl,"The DeBERTa model was proposed in "),xn=a(nl,"A",{href:!0,rel:!0});var Gm=i(xn);ip=s(Gm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gm.forEach(t),lp=s(nl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nl.forEach(t),dp=d(ut),Bn=a(ut,"P",{});var sl=i(Bn);cp=s(sl,"This model is also a PyTorch "),Ln=a(sl,"A",{href:!0,rel:!0});var Km=i(Ln);pp=s(Km,"torch.nn.Module"),Km.forEach(t),hp=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),fp=d(ut),Oe=a(ut,"DIV",{class:!0});var mt=i(Oe);T(An.$$.fragment,mt),up=d(mt),Ot=a(mt,"P",{});var hr=i(Ot);mp=s(hr,"The "),Ks=a(hr,"A",{href:!0});var Vm=i(Ks);gp=s(Vm,"DebertaForTokenClassification"),Vm.forEach(t),_p=s(hr," forward method, overrides the "),pa=a(hr,"CODE",{});var Jm=i(pa);bp=s(Jm,"__call__"),Jm.forEach(t),kp=s(hr," special method."),hr.forEach(t),Tp=d(mt),T(_o.$$.fragment,mt),vp=d(mt),ha=a(mt,"P",{});var Xm=i(ha);wp=s(Xm,"Example:"),Xm.forEach(t),yp=d(mt),T(In.$$.fragment,mt),mt.forEach(t),ut.forEach(t),Di=d(o),Wt=a(o,"H2",{class:!0});var rl=i(Wt);bo=a(rl,"A",{id:!0,class:!0,href:!0});var Ym=i(bo);fa=a(Ym,"SPAN",{});var Zm=i(fa);T(Sn.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Dp=d(rl),ua=a(rl,"SPAN",{});var eg=i(ua);Ep=s(eg,"DebertaForQuestionAnswering"),eg.forEach(t),rl.forEach(t),Ei=d(o),Be=a(o,"DIV",{class:!0});var gt=i(Be);T(Nn.$$.fragment,gt),$p=d(gt),Ht=a(gt,"P",{});var fr=i(Ht);Fp=s(fr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ma=a(fr,"CODE",{});var tg=i(ma);qp=s(tg,"span start logits"),tg.forEach(t),zp=s(fr," and "),ga=a(fr,"CODE",{});var og=i(ga);Mp=s(og,"span end logits"),og.forEach(t),Cp=s(fr,")."),fr.forEach(t),Pp=d(gt),On=a(gt,"P",{});var al=i(On);Rp=s(al,"The DeBERTa model was proposed in "),Wn=a(al,"A",{href:!0,rel:!0});var ng=i(Wn);jp=s(ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ng.forEach(t),xp=s(al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),al.forEach(t),Bp=d(gt),Hn=a(gt,"P",{});var il=i(Hn);Lp=s(il,"This model is also a PyTorch "),Un=a(il,"A",{href:!0,rel:!0});var sg=i(Un);Ap=s(sg,"torch.nn.Module"),sg.forEach(t),Ip=s(il," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),il.forEach(t),Sp=d(gt),We=a(gt,"DIV",{class:!0});var _t=i(We);T(Qn.$$.fragment,_t),Np=d(_t),Ut=a(_t,"P",{});var ur=i(Ut);Op=s(ur,"The "),Vs=a(ur,"A",{href:!0});var rg=i(Vs);Wp=s(rg,"DebertaForQuestionAnswering"),rg.forEach(t),Hp=s(ur," forward method, overrides the "),_a=a(ur,"CODE",{});var ag=i(_a);Up=s(ag,"__call__"),ag.forEach(t),Qp=s(ur," special method."),ur.forEach(t),Gp=d(_t),T(ko.$$.fragment,_t),Kp=d(_t),ba=a(_t,"P",{});var ig=i(ba);Vp=s(ig,"Example:"),ig.forEach(t),Jp=d(_t),T(Gn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),$i=d(o),Qt=a(o,"H2",{class:!0});var ll=i(Qt);To=a(ll,"A",{id:!0,class:!0,href:!0});var lg=i(To);ka=a(lg,"SPAN",{});var dg=i(ka);T(Kn.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Xp=d(ll),Ta=a(ll,"SPAN",{});var cg=i(Ta);Yp=s(cg,"TFDebertaModel"),cg.forEach(t),ll.forEach(t),Fi=d(o),Le=a(o,"DIV",{class:!0});var bt=i(Le);T(Vn.$$.fragment,bt),Zp=d(bt),Jn=a(bt,"P",{});var dl=i(Jn);eh=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Xn=a(dl,"A",{href:!0,rel:!0});var pg=i(Xn);th=s(pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pg.forEach(t),oh=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),nh=d(bt),Yn=a(bt,"P",{});var cl=i(Yn);sh=s(cl,"This model is also a "),Zn=a(cl,"A",{href:!0,rel:!0});var hg=i(Zn);rh=s(hg,"tf.keras.Model"),hg.forEach(t),ah=s(cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cl.forEach(t),ih=d(bt),T(vo.$$.fragment,bt),lh=d(bt),He=a(bt,"DIV",{class:!0});var kt=i(He);T(es.$$.fragment,kt),dh=d(kt),Gt=a(kt,"P",{});var mr=i(Gt);ch=s(mr,"The "),Js=a(mr,"A",{href:!0});var fg=i(Js);ph=s(fg,"TFDebertaModel"),fg.forEach(t),hh=s(mr," forward method, overrides the "),va=a(mr,"CODE",{});var ug=i(va);fh=s(ug,"__call__"),ug.forEach(t),uh=s(mr," special method."),mr.forEach(t),mh=d(kt),T(wo.$$.fragment,kt),gh=d(kt),wa=a(kt,"P",{});var mg=i(wa);_h=s(mg,"Example:"),mg.forEach(t),bh=d(kt),T(ts.$$.fragment,kt),kt.forEach(t),bt.forEach(t),qi=d(o),Kt=a(o,"H2",{class:!0});var pl=i(Kt);yo=a(pl,"A",{id:!0,class:!0,href:!0});var gg=i(yo);ya=a(gg,"SPAN",{});var _g=i(ya);T(os.$$.fragment,_g),_g.forEach(t),gg.forEach(t),kh=d(pl),Da=a(pl,"SPAN",{});var bg=i(Da);Th=s(bg,"TFDebertaPreTrainedModel"),bg.forEach(t),pl.forEach(t),zi=d(o),lt=a(o,"DIV",{class:!0});var gr=i(lt);T(ns.$$.fragment,gr),vh=d(gr),Ea=a(gr,"P",{});var kg=i(Ea);wh=s(kg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),kg.forEach(t),yh=d(gr),nt=a(gr,"DIV",{class:!0});var Wo=i(nt);T(ss.$$.fragment,Wo),Dh=d(Wo),$a=a(Wo,"P",{});var Tg=i($a);Eh=s(Tg,"Calls the model on new inputs and returns the outputs as tensors."),Tg.forEach(t),$h=d(Wo),rs=a(Wo,"P",{});var hl=i(rs);Fh=s(hl,"In this case "),Fa=a(hl,"CODE",{});var vg=i(Fa);qh=s(vg,"call()"),vg.forEach(t),zh=s(hl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),hl.forEach(t),Mh=d(Wo),Ze=a(Wo,"P",{});var Tt=i(Ze);Ch=s(Tt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),qa=a(Tt,"CODE",{});var wg=i(qa);Ph=s(wg,"tf.keras.Model"),wg.forEach(t),Rh=s(Tt,`.
To call a model on an input, always use the `),za=a(Tt,"CODE",{});var yg=i(za);jh=s(yg,"__call__()"),yg.forEach(t),xh=s(Tt,` method,
i.e. `),Ma=a(Tt,"CODE",{});var Dg=i(Ma);Bh=s(Dg,"model(inputs)"),Dg.forEach(t),Lh=s(Tt,", which relies on the underlying "),Ca=a(Tt,"CODE",{});var Eg=i(Ca);Ah=s(Eg,"call()"),Eg.forEach(t),Ih=s(Tt," method."),Tt.forEach(t),Wo.forEach(t),gr.forEach(t),Mi=d(o),Vt=a(o,"H2",{class:!0});var fl=i(Vt);Do=a(fl,"A",{id:!0,class:!0,href:!0});var $g=i(Do);Pa=a($g,"SPAN",{});var Fg=i(Pa);T(as.$$.fragment,Fg),Fg.forEach(t),$g.forEach(t),Sh=d(fl),Ra=a(fl,"SPAN",{});var qg=i(Ra);Nh=s(qg,"TFDebertaForMaskedLM"),qg.forEach(t),fl.forEach(t),Ci=d(o),Ae=a(o,"DIV",{class:!0});var vt=i(Ae);T(is.$$.fragment,vt),Oh=d(vt),Jt=a(vt,"P",{});var _r=i(Jt);Wh=s(_r,"DeBERTa Model with a "),ja=a(_r,"CODE",{});var zg=i(ja);Hh=s(zg,"language modeling"),zg.forEach(t),Uh=s(_r,` head on top.
The DeBERTa model was proposed in `),ls=a(_r,"A",{href:!0,rel:!0});var Mg=i(ls);Qh=s(Mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mg.forEach(t),Gh=s(_r,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_r.forEach(t),Kh=d(vt),ds=a(vt,"P",{});var ul=i(ds);Vh=s(ul,"This model is also a "),cs=a(ul,"A",{href:!0,rel:!0});var Cg=i(cs);Jh=s(Cg,"tf.keras.Model"),Cg.forEach(t),Xh=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),Yh=d(vt),T(Eo.$$.fragment,vt),Zh=d(vt),Ue=a(vt,"DIV",{class:!0});var wt=i(Ue);T(ps.$$.fragment,wt),ef=d(wt),Xt=a(wt,"P",{});var br=i(Xt);tf=s(br,"The "),Xs=a(br,"A",{href:!0});var Pg=i(Xs);of=s(Pg,"TFDebertaForMaskedLM"),Pg.forEach(t),nf=s(br," forward method, overrides the "),xa=a(br,"CODE",{});var Rg=i(xa);sf=s(Rg,"__call__"),Rg.forEach(t),rf=s(br," special method."),br.forEach(t),af=d(wt),T($o.$$.fragment,wt),lf=d(wt),Ba=a(wt,"P",{});var jg=i(Ba);df=s(jg,"Example:"),jg.forEach(t),cf=d(wt),T(hs.$$.fragment,wt),wt.forEach(t),vt.forEach(t),Pi=d(o),Yt=a(o,"H2",{class:!0});var ml=i(Yt);Fo=a(ml,"A",{id:!0,class:!0,href:!0});var xg=i(Fo);La=a(xg,"SPAN",{});var Bg=i(La);T(fs.$$.fragment,Bg),Bg.forEach(t),xg.forEach(t),pf=d(ml),Aa=a(ml,"SPAN",{});var Lg=i(Aa);hf=s(Lg,"TFDebertaForSequenceClassification"),Lg.forEach(t),ml.forEach(t),Ri=d(o),Me=a(o,"DIV",{class:!0});var rt=i(Me);T(us.$$.fragment,rt),ff=d(rt),Ia=a(rt,"P",{});var Ag=i(Ia);uf=s(Ag,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ag.forEach(t),mf=d(rt),ms=a(rt,"P",{});var gl=i(ms);gf=s(gl,"The DeBERTa model was proposed in "),gs=a(gl,"A",{href:!0,rel:!0});var Ig=i(gs);_f=s(Ig,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ig.forEach(t),bf=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),kf=d(rt),_s=a(rt,"P",{});var _l=i(_s);Tf=s(_l,"This model is also a "),bs=a(_l,"A",{href:!0,rel:!0});var Sg=i(bs);vf=s(Sg,"tf.keras.Model"),Sg.forEach(t),wf=s(_l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_l.forEach(t),yf=d(rt),T(qo.$$.fragment,rt),Df=d(rt),Qe=a(rt,"DIV",{class:!0});var yt=i(Qe);T(ks.$$.fragment,yt),Ef=d(yt),Zt=a(yt,"P",{});var kr=i(Zt);$f=s(kr,"The "),Ys=a(kr,"A",{href:!0});var Ng=i(Ys);Ff=s(Ng,"TFDebertaForSequenceClassification"),Ng.forEach(t),qf=s(kr," forward method, overrides the "),Sa=a(kr,"CODE",{});var Og=i(Sa);zf=s(Og,"__call__"),Og.forEach(t),Mf=s(kr," special method."),kr.forEach(t),Cf=d(yt),T(zo.$$.fragment,yt),Pf=d(yt),Na=a(yt,"P",{});var Wg=i(Na);Rf=s(Wg,"Example:"),Wg.forEach(t),jf=d(yt),T(Ts.$$.fragment,yt),yt.forEach(t),rt.forEach(t),ji=d(o),eo=a(o,"H2",{class:!0});var bl=i(eo);Mo=a(bl,"A",{id:!0,class:!0,href:!0});var Hg=i(Mo);Oa=a(Hg,"SPAN",{});var Ug=i(Oa);T(vs.$$.fragment,Ug),Ug.forEach(t),Hg.forEach(t),xf=d(bl),Wa=a(bl,"SPAN",{});var Qg=i(Wa);Bf=s(Qg,"TFDebertaForTokenClassification"),Qg.forEach(t),bl.forEach(t),xi=d(o),Ce=a(o,"DIV",{class:!0});var at=i(Ce);T(ws.$$.fragment,at),Lf=d(at),Ha=a(at,"P",{});var Gg=i(Ha);Af=s(Gg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Gg.forEach(t),If=d(at),ys=a(at,"P",{});var kl=i(ys);Sf=s(kl,"The DeBERTa model was proposed in "),Ds=a(kl,"A",{href:!0,rel:!0});var Kg=i(Ds);Nf=s(Kg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kg.forEach(t),Of=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Wf=d(at),Es=a(at,"P",{});var Tl=i(Es);Hf=s(Tl,"This model is also a "),$s=a(Tl,"A",{href:!0,rel:!0});var Vg=i($s);Uf=s(Vg,"tf.keras.Model"),Vg.forEach(t),Qf=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),Gf=d(at),T(Co.$$.fragment,at),Kf=d(at),Ge=a(at,"DIV",{class:!0});var Dt=i(Ge);T(Fs.$$.fragment,Dt),Vf=d(Dt),to=a(Dt,"P",{});var Tr=i(to);Jf=s(Tr,"The "),Zs=a(Tr,"A",{href:!0});var Jg=i(Zs);Xf=s(Jg,"TFDebertaForTokenClassification"),Jg.forEach(t),Yf=s(Tr," forward method, overrides the "),Ua=a(Tr,"CODE",{});var Xg=i(Ua);Zf=s(Xg,"__call__"),Xg.forEach(t),eu=s(Tr," special method."),Tr.forEach(t),tu=d(Dt),T(Po.$$.fragment,Dt),ou=d(Dt),Qa=a(Dt,"P",{});var Yg=i(Qa);nu=s(Yg,"Example:"),Yg.forEach(t),su=d(Dt),T(qs.$$.fragment,Dt),Dt.forEach(t),at.forEach(t),Bi=d(o),oo=a(o,"H2",{class:!0});var vl=i(oo);Ro=a(vl,"A",{id:!0,class:!0,href:!0});var Zg=i(Ro);Ga=a(Zg,"SPAN",{});var e_=i(Ga);T(zs.$$.fragment,e_),e_.forEach(t),Zg.forEach(t),ru=d(vl),Ka=a(vl,"SPAN",{});var t_=i(Ka);au=s(t_,"TFDebertaForQuestionAnswering"),t_.forEach(t),vl.forEach(t),Li=d(o),Pe=a(o,"DIV",{class:!0});var it=i(Pe);T(Ms.$$.fragment,it),iu=d(it),no=a(it,"P",{});var vr=i(no);lu=s(vr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Va=a(vr,"CODE",{});var o_=i(Va);du=s(o_,"span start logits"),o_.forEach(t),cu=s(vr," and "),Ja=a(vr,"CODE",{});var n_=i(Ja);pu=s(n_,"span end logits"),n_.forEach(t),hu=s(vr,")."),vr.forEach(t),fu=d(it),Cs=a(it,"P",{});var wl=i(Cs);uu=s(wl,"The DeBERTa model was proposed in "),Ps=a(wl,"A",{href:!0,rel:!0});var s_=i(Ps);mu=s(s_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),s_.forEach(t),gu=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),_u=d(it),Rs=a(it,"P",{});var yl=i(Rs);bu=s(yl,"This model is also a "),js=a(yl,"A",{href:!0,rel:!0});var r_=i(js);ku=s(r_,"tf.keras.Model"),r_.forEach(t),Tu=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),vu=d(it),T(jo.$$.fragment,it),wu=d(it),Ke=a(it,"DIV",{class:!0});var Et=i(Ke);T(xs.$$.fragment,Et),yu=d(Et),so=a(Et,"P",{});var wr=i(so);Du=s(wr,"The "),er=a(wr,"A",{href:!0});var a_=i(er);Eu=s(a_,"TFDebertaForQuestionAnswering"),a_.forEach(t),$u=s(wr," forward method, overrides the "),Xa=a(wr,"CODE",{});var i_=i(Xa);Fu=s(i_,"__call__"),i_.forEach(t),qu=s(wr," special method."),wr.forEach(t),zu=d(Et),T(xo.$$.fragment,Et),Mu=d(Et),Ya=a(Et,"P",{});var l_=i(Ya);Cu=s(l_,"Example:"),l_.forEach(t),Pu=d(Et),T(Bs.$$.fragment,Et),Et.forEach(t),it.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(z_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(m,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(R,"href","https://huggingface.co/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Ns,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaModel"),c(Os,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Ws,"href","/docs/transformers/pr_15804/en/main_classes/configuration#transformers.PretrainedConfig"),c(Hs,"href","/docs/transformers/pr_15804/en/main_classes/configuration#transformers.PretrainedConfig"),c(ae,"class","docstring"),c(ro,"id","transformers.DebertaTokenizer"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(dt,"class","docstring"),c(ao,"class","docstring"),c(tt,"class","docstring"),c(jr,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(ct,"class","docstring"),c(ot,"class","docstring"),c(Je,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(Pt,"class","relative group"),c(dn,"href","https://arxiv.org/abs/2006.03654"),c(dn,"rel","nofollow"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(Us,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaModel"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(jt,"class","relative group"),c(xt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(bn,"href","https://arxiv.org/abs/2006.03654"),c(bn,"rel","nofollow"),c(Tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Tn,"rel","nofollow"),c(Qs,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Ne,"class","docstring"),c(Ye,"class","docstring"),c(uo,"id","transformers.DebertaForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c($n,"href","https://arxiv.org/abs/2006.03654"),c($n,"rel","nofollow"),c(qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qn,"rel","nofollow"),c(Gs,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(qe,"class","docstring"),c(je,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(Nt,"class","relative group"),c(xn,"href","https://arxiv.org/abs/2006.03654"),c(xn,"rel","nofollow"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(Ks,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Oe,"class","docstring"),c(xe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Wn,"href","https://arxiv.org/abs/2006.03654"),c(Wn,"rel","nofollow"),c(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Un,"rel","nofollow"),c(Vs,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(We,"class","docstring"),c(Be,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(Xn,"href","https://arxiv.org/abs/2006.03654"),c(Xn,"rel","nofollow"),c(Zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zn,"rel","nofollow"),c(Js,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaModel"),c(He,"class","docstring"),c(Le,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(lt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(ls,"href","https://arxiv.org/abs/2006.03654"),c(ls,"rel","nofollow"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Xs,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(Ds,"href","https://arxiv.org/abs/2006.03654"),c(Ds,"rel","nofollow"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(Zs,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ge,"class","docstring"),c(Ce,"class","docstring"),c(Ro,"id","transformers.TFDebertaForQuestionAnswering"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/2006.03654"),c(Ps,"rel","nofollow"),c(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(js,"rel","nofollow"),c(er,"href","/docs/transformers/pr_15804/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ke,"class","docstring"),c(Pe,"class","docstring")},m(o,u){e(document.head,h),f(o,F,u),f(o,m,u),e(m,g),e(g,E),v(b,E,null),e(m,_),e(m,q),e(q,he),f(o,X,u),f(o,z,u),e(z,Y),e(Y,A),v(ee,A,null),e(z,fe),e(z,I),e(I,ue),f(o,le,u),f(o,W,u),e(W,B),e(W,te),e(te,Z),e(W,M),f(o,P,u),f(o,ne,u),e(ne,H),f(o,de,u),f(o,se,u),e(se,U),f(o,ce,u),f(o,re,u),e(re,C),e(C,me),e(C,L),e(L,ge),e(C,_e),f(o,S,u),f(o,K,u),e(K,be),e(K,R),e(R,ke),e(K,Q),e(K,oe),e(oe,p),e(K,$),e(K,V),e(V,Ee),e(K,$e),f(o,x,u),f(o,pe,u),e(pe,Te),e(Te,ye),v(j,ye,null),e(pe,G),e(pe,De),e(De,Fe),f(o,N,u),f(o,ae,u),v(we,ae,null),e(ae,ve),e(ae,ie),e(ie,Dl),e(ie,Ns),e(Ns,El),e(ie,$l),e(ie,Os),e(Os,Fl),e(ie,ql),e(ie,Ho),e(Ho,zl),e(ie,Ml),e(ae,Cl),e(ae,$t),e($t,Pl),e($t,Ws),e(Ws,Rl),e($t,jl),e($t,Hs),e(Hs,xl),e($t,Bl),f(o,ci,u),f(o,Ft,u),e(Ft,ro),e(ro,yr),v(Uo,yr,null),e(Ft,Ll),e(Ft,Dr),e(Dr,Al),f(o,pi,u),f(o,ze,u),v(Qo,ze,null),e(ze,Il),e(ze,Er),e(Er,Sl),e(ze,Nl),e(ze,dt),v(Go,dt,null),e(dt,Ol),e(dt,$r),e($r,Wl),e(dt,Hl),e(dt,Ko),e(Ko,Fr),e(Fr,Ul),e(Ko,Ql),e(Ko,qr),e(qr,Gl),e(ze,Kl),e(ze,ao),v(Vo,ao,null),e(ao,Vl),e(ao,qt),e(qt,Jl),e(qt,zr),e(zr,Xl),e(qt,Yl),e(qt,Mr),e(Mr,Zl),e(qt,ed),e(ze,td),e(ze,tt),v(Jo,tt,null),e(tt,od),e(tt,Cr),e(Cr,nd),e(tt,sd),v(Xo,tt,null),e(tt,rd),e(tt,zt),e(zt,ad),e(zt,Pr),e(Pr,id),e(zt,ld),e(zt,Rr),e(Rr,dd),e(zt,cd),e(ze,pd),e(ze,jr),f(o,hi,u),f(o,Mt,u),e(Mt,io),e(io,xr),v(Yo,xr,null),e(Mt,hd),e(Mt,Br),e(Br,fd),f(o,fi,u),f(o,Je,u),v(Zo,Je,null),e(Je,ud),e(Je,en),e(en,md),e(en,Lr),e(Lr,gd),e(en,_d),e(Je,bd),e(Je,ct),v(tn,ct,null),e(ct,kd),e(ct,Ar),e(Ar,Td),e(ct,vd),e(ct,on),e(on,Ir),e(Ir,wd),e(on,yd),e(on,Sr),e(Sr,Dd),e(Je,Ed),e(Je,ot),v(nn,ot,null),e(ot,$d),e(ot,Nr),e(Nr,Fd),e(ot,qd),v(sn,ot,null),e(ot,zd),e(ot,Ct),e(Ct,Md),e(Ct,Or),e(Or,Cd),e(Ct,Pd),e(Ct,Wr),e(Wr,Rd),e(Ct,jd),f(o,ui,u),f(o,Pt,u),e(Pt,lo),e(lo,Hr),v(rn,Hr,null),e(Pt,xd),e(Pt,Ur),e(Ur,Bd),f(o,mi,u),f(o,Xe,u),v(an,Xe,null),e(Xe,Ld),e(Xe,ln),e(ln,Ad),e(ln,dn),e(dn,Id),e(ln,Sd),e(Xe,Nd),e(Xe,cn),e(cn,Od),e(cn,pn),e(pn,Wd),e(cn,Hd),e(Xe,Ud),e(Xe,Se),v(hn,Se,null),e(Se,Qd),e(Se,Rt),e(Rt,Gd),e(Rt,Us),e(Us,Kd),e(Rt,Vd),e(Rt,Qr),e(Qr,Jd),e(Rt,Xd),e(Se,Yd),v(co,Se,null),e(Se,Zd),e(Se,Gr),e(Gr,ec),e(Se,tc),v(fn,Se,null),f(o,gi,u),f(o,jt,u),e(jt,po),e(po,Kr),v(un,Kr,null),e(jt,oc),e(jt,Vr),e(Vr,nc),f(o,_i,u),f(o,xt,u),v(mn,xt,null),e(xt,sc),e(xt,Jr),e(Jr,rc),f(o,bi,u),f(o,Bt,u),e(Bt,ho),e(ho,Xr),v(gn,Xr,null),e(Bt,ac),e(Bt,Yr),e(Yr,ic),f(o,ki,u),f(o,Ye,u),v(_n,Ye,null),e(Ye,lc),e(Ye,Lt),e(Lt,dc),e(Lt,Zr),e(Zr,cc),e(Lt,pc),e(Lt,bn),e(bn,hc),e(Lt,fc),e(Ye,uc),e(Ye,kn),e(kn,mc),e(kn,Tn),e(Tn,gc),e(kn,_c),e(Ye,bc),e(Ye,Ne),v(vn,Ne,null),e(Ne,kc),e(Ne,At),e(At,Tc),e(At,Qs),e(Qs,vc),e(At,wc),e(At,ea),e(ea,yc),e(At,Dc),e(Ne,Ec),v(fo,Ne,null),e(Ne,$c),e(Ne,ta),e(ta,Fc),e(Ne,qc),v(wn,Ne,null),f(o,Ti,u),f(o,It,u),e(It,uo),e(uo,oa),v(yn,oa,null),e(It,zc),e(It,na),e(na,Mc),f(o,vi,u),f(o,je,u),v(Dn,je,null),e(je,Cc),e(je,sa),e(sa,Pc),e(je,Rc),e(je,En),e(En,jc),e(En,$n),e($n,xc),e(En,Bc),e(je,Lc),e(je,Fn),e(Fn,Ac),e(Fn,qn),e(qn,Ic),e(Fn,Sc),e(je,Nc),e(je,qe),v(zn,qe,null),e(qe,Oc),e(qe,St),e(St,Wc),e(St,Gs),e(Gs,Hc),e(St,Uc),e(St,ra),e(ra,Qc),e(St,Gc),e(qe,Kc),v(mo,qe,null),e(qe,Vc),e(qe,aa),e(aa,Jc),e(qe,Xc),v(Mn,qe,null),e(qe,Yc),e(qe,ia),e(ia,Zc),e(qe,ep),v(Cn,qe,null),f(o,wi,u),f(o,Nt,u),e(Nt,go),e(go,la),v(Pn,la,null),e(Nt,tp),e(Nt,da),e(da,op),f(o,yi,u),f(o,xe,u),v(Rn,xe,null),e(xe,np),e(xe,ca),e(ca,sp),e(xe,rp),e(xe,jn),e(jn,ap),e(jn,xn),e(xn,ip),e(jn,lp),e(xe,dp),e(xe,Bn),e(Bn,cp),e(Bn,Ln),e(Ln,pp),e(Bn,hp),e(xe,fp),e(xe,Oe),v(An,Oe,null),e(Oe,up),e(Oe,Ot),e(Ot,mp),e(Ot,Ks),e(Ks,gp),e(Ot,_p),e(Ot,pa),e(pa,bp),e(Ot,kp),e(Oe,Tp),v(_o,Oe,null),e(Oe,vp),e(Oe,ha),e(ha,wp),e(Oe,yp),v(In,Oe,null),f(o,Di,u),f(o,Wt,u),e(Wt,bo),e(bo,fa),v(Sn,fa,null),e(Wt,Dp),e(Wt,ua),e(ua,Ep),f(o,Ei,u),f(o,Be,u),v(Nn,Be,null),e(Be,$p),e(Be,Ht),e(Ht,Fp),e(Ht,ma),e(ma,qp),e(Ht,zp),e(Ht,ga),e(ga,Mp),e(Ht,Cp),e(Be,Pp),e(Be,On),e(On,Rp),e(On,Wn),e(Wn,jp),e(On,xp),e(Be,Bp),e(Be,Hn),e(Hn,Lp),e(Hn,Un),e(Un,Ap),e(Hn,Ip),e(Be,Sp),e(Be,We),v(Qn,We,null),e(We,Np),e(We,Ut),e(Ut,Op),e(Ut,Vs),e(Vs,Wp),e(Ut,Hp),e(Ut,_a),e(_a,Up),e(Ut,Qp),e(We,Gp),v(ko,We,null),e(We,Kp),e(We,ba),e(ba,Vp),e(We,Jp),v(Gn,We,null),f(o,$i,u),f(o,Qt,u),e(Qt,To),e(To,ka),v(Kn,ka,null),e(Qt,Xp),e(Qt,Ta),e(Ta,Yp),f(o,Fi,u),f(o,Le,u),v(Vn,Le,null),e(Le,Zp),e(Le,Jn),e(Jn,eh),e(Jn,Xn),e(Xn,th),e(Jn,oh),e(Le,nh),e(Le,Yn),e(Yn,sh),e(Yn,Zn),e(Zn,rh),e(Yn,ah),e(Le,ih),v(vo,Le,null),e(Le,lh),e(Le,He),v(es,He,null),e(He,dh),e(He,Gt),e(Gt,ch),e(Gt,Js),e(Js,ph),e(Gt,hh),e(Gt,va),e(va,fh),e(Gt,uh),e(He,mh),v(wo,He,null),e(He,gh),e(He,wa),e(wa,_h),e(He,bh),v(ts,He,null),f(o,qi,u),f(o,Kt,u),e(Kt,yo),e(yo,ya),v(os,ya,null),e(Kt,kh),e(Kt,Da),e(Da,Th),f(o,zi,u),f(o,lt,u),v(ns,lt,null),e(lt,vh),e(lt,Ea),e(Ea,wh),e(lt,yh),e(lt,nt),v(ss,nt,null),e(nt,Dh),e(nt,$a),e($a,Eh),e(nt,$h),e(nt,rs),e(rs,Fh),e(rs,Fa),e(Fa,qh),e(rs,zh),e(nt,Mh),e(nt,Ze),e(Ze,Ch),e(Ze,qa),e(qa,Ph),e(Ze,Rh),e(Ze,za),e(za,jh),e(Ze,xh),e(Ze,Ma),e(Ma,Bh),e(Ze,Lh),e(Ze,Ca),e(Ca,Ah),e(Ze,Ih),f(o,Mi,u),f(o,Vt,u),e(Vt,Do),e(Do,Pa),v(as,Pa,null),e(Vt,Sh),e(Vt,Ra),e(Ra,Nh),f(o,Ci,u),f(o,Ae,u),v(is,Ae,null),e(Ae,Oh),e(Ae,Jt),e(Jt,Wh),e(Jt,ja),e(ja,Hh),e(Jt,Uh),e(Jt,ls),e(ls,Qh),e(Jt,Gh),e(Ae,Kh),e(Ae,ds),e(ds,Vh),e(ds,cs),e(cs,Jh),e(ds,Xh),e(Ae,Yh),v(Eo,Ae,null),e(Ae,Zh),e(Ae,Ue),v(ps,Ue,null),e(Ue,ef),e(Ue,Xt),e(Xt,tf),e(Xt,Xs),e(Xs,of),e(Xt,nf),e(Xt,xa),e(xa,sf),e(Xt,rf),e(Ue,af),v($o,Ue,null),e(Ue,lf),e(Ue,Ba),e(Ba,df),e(Ue,cf),v(hs,Ue,null),f(o,Pi,u),f(o,Yt,u),e(Yt,Fo),e(Fo,La),v(fs,La,null),e(Yt,pf),e(Yt,Aa),e(Aa,hf),f(o,Ri,u),f(o,Me,u),v(us,Me,null),e(Me,ff),e(Me,Ia),e(Ia,uf),e(Me,mf),e(Me,ms),e(ms,gf),e(ms,gs),e(gs,_f),e(ms,bf),e(Me,kf),e(Me,_s),e(_s,Tf),e(_s,bs),e(bs,vf),e(_s,wf),e(Me,yf),v(qo,Me,null),e(Me,Df),e(Me,Qe),v(ks,Qe,null),e(Qe,Ef),e(Qe,Zt),e(Zt,$f),e(Zt,Ys),e(Ys,Ff),e(Zt,qf),e(Zt,Sa),e(Sa,zf),e(Zt,Mf),e(Qe,Cf),v(zo,Qe,null),e(Qe,Pf),e(Qe,Na),e(Na,Rf),e(Qe,jf),v(Ts,Qe,null),f(o,ji,u),f(o,eo,u),e(eo,Mo),e(Mo,Oa),v(vs,Oa,null),e(eo,xf),e(eo,Wa),e(Wa,Bf),f(o,xi,u),f(o,Ce,u),v(ws,Ce,null),e(Ce,Lf),e(Ce,Ha),e(Ha,Af),e(Ce,If),e(Ce,ys),e(ys,Sf),e(ys,Ds),e(Ds,Nf),e(ys,Of),e(Ce,Wf),e(Ce,Es),e(Es,Hf),e(Es,$s),e($s,Uf),e(Es,Qf),e(Ce,Gf),v(Co,Ce,null),e(Ce,Kf),e(Ce,Ge),v(Fs,Ge,null),e(Ge,Vf),e(Ge,to),e(to,Jf),e(to,Zs),e(Zs,Xf),e(to,Yf),e(to,Ua),e(Ua,Zf),e(to,eu),e(Ge,tu),v(Po,Ge,null),e(Ge,ou),e(Ge,Qa),e(Qa,nu),e(Ge,su),v(qs,Ge,null),f(o,Bi,u),f(o,oo,u),e(oo,Ro),e(Ro,Ga),v(zs,Ga,null),e(oo,ru),e(oo,Ka),e(Ka,au),f(o,Li,u),f(o,Pe,u),v(Ms,Pe,null),e(Pe,iu),e(Pe,no),e(no,lu),e(no,Va),e(Va,du),e(no,cu),e(no,Ja),e(Ja,pu),e(no,hu),e(Pe,fu),e(Pe,Cs),e(Cs,uu),e(Cs,Ps),e(Ps,mu),e(Cs,gu),e(Pe,_u),e(Pe,Rs),e(Rs,bu),e(Rs,js),e(js,ku),e(Rs,Tu),e(Pe,vu),v(jo,Pe,null),e(Pe,wu),e(Pe,Ke),v(xs,Ke,null),e(Ke,yu),e(Ke,so),e(so,Du),e(so,er),e(er,Eu),e(so,$u),e(so,Xa),e(Xa,Fu),e(so,qu),e(Ke,zu),v(xo,Ke,null),e(Ke,Mu),e(Ke,Ya),e(Ya,Cu),e(Ke,Pu),v(Bs,Ke,null),Ai=!0},p(o,[u]){const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),co.$set(Ls);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),fo.$set(Za);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),mo.$set(ei);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),_o.$set(ti);const As={};u&2&&(As.$$scope={dirty:u,ctx:o}),ko.$set(As);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),vo.$set(oi);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),wo.$set(ni);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),Eo.$set(si);const Is={};u&2&&(Is.$$scope={dirty:u,ctx:o}),$o.$set(Is);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),qo.$set(ri);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),zo.$set(ai);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),Co.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),Po.$set(li);const Ss={};u&2&&(Ss.$$scope={dirty:u,ctx:o}),jo.$set(Ss);const di={};u&2&&(di.$$scope={dirty:u,ctx:o}),xo.$set(di)},i(o){Ai||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(j.$$.fragment,o),w(we.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Go.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(tn.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(an.$$.fragment,o),w(hn.$$.fragment,o),w(co.$$.fragment,o),w(fn.$$.fragment,o),w(un.$$.fragment,o),w(mn.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(vn.$$.fragment,o),w(fo.$$.fragment,o),w(wn.$$.fragment,o),w(yn.$$.fragment,o),w(Dn.$$.fragment,o),w(zn.$$.fragment,o),w(mo.$$.fragment,o),w(Mn.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(An.$$.fragment,o),w(_o.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(Qn.$$.fragment,o),w(ko.$$.fragment,o),w(Gn.$$.fragment,o),w(Kn.$$.fragment,o),w(Vn.$$.fragment,o),w(vo.$$.fragment,o),w(es.$$.fragment,o),w(wo.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(is.$$.fragment,o),w(Eo.$$.fragment,o),w(ps.$$.fragment,o),w($o.$$.fragment,o),w(hs.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(qo.$$.fragment,o),w(ks.$$.fragment,o),w(zo.$$.fragment,o),w(Ts.$$.fragment,o),w(vs.$$.fragment,o),w(ws.$$.fragment,o),w(Co.$$.fragment,o),w(Fs.$$.fragment,o),w(Po.$$.fragment,o),w(qs.$$.fragment,o),w(zs.$$.fragment,o),w(Ms.$$.fragment,o),w(jo.$$.fragment,o),w(xs.$$.fragment,o),w(xo.$$.fragment,o),w(Bs.$$.fragment,o),Ai=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(j.$$.fragment,o),y(we.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(hn.$$.fragment,o),y(co.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(vn.$$.fragment,o),y(fo.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y(zn.$$.fragment,o),y(mo.$$.fragment,o),y(Mn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(An.$$.fragment,o),y(_o.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(Qn.$$.fragment,o),y(ko.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Vn.$$.fragment,o),y(vo.$$.fragment,o),y(es.$$.fragment,o),y(wo.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(Eo.$$.fragment,o),y(ps.$$.fragment,o),y($o.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(qo.$$.fragment,o),y(ks.$$.fragment,o),y(zo.$$.fragment,o),y(Ts.$$.fragment,o),y(vs.$$.fragment,o),y(ws.$$.fragment,o),y(Co.$$.fragment,o),y(Fs.$$.fragment,o),y(Po.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(jo.$$.fragment,o),y(xs.$$.fragment,o),y(xo.$$.fragment,o),y(Bs.$$.fragment,o),Ai=!1},d(o){t(h),o&&t(F),o&&t(m),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(W),o&&t(P),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(re),o&&t(S),o&&t(K),o&&t(x),o&&t(pe),D(j),o&&t(N),o&&t(ae),D(we),o&&t(ci),o&&t(Ft),D(Uo),o&&t(pi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),o&&t(hi),o&&t(Mt),D(Yo),o&&t(fi),o&&t(Je),D(Zo),D(tn),D(nn),D(sn),o&&t(ui),o&&t(Pt),D(rn),o&&t(mi),o&&t(Xe),D(an),D(hn),D(co),D(fn),o&&t(gi),o&&t(jt),D(un),o&&t(_i),o&&t(xt),D(mn),o&&t(bi),o&&t(Bt),D(gn),o&&t(ki),o&&t(Ye),D(_n),D(vn),D(fo),D(wn),o&&t(Ti),o&&t(It),D(yn),o&&t(vi),o&&t(je),D(Dn),D(zn),D(mo),D(Mn),D(Cn),o&&t(wi),o&&t(Nt),D(Pn),o&&t(yi),o&&t(xe),D(Rn),D(An),D(_o),D(In),o&&t(Di),o&&t(Wt),D(Sn),o&&t(Ei),o&&t(Be),D(Nn),D(Qn),D(ko),D(Gn),o&&t($i),o&&t(Qt),D(Kn),o&&t(Fi),o&&t(Le),D(Vn),D(vo),D(es),D(wo),D(ts),o&&t(qi),o&&t(Kt),D(os),o&&t(zi),o&&t(lt),D(ns),D(ss),o&&t(Mi),o&&t(Vt),D(as),o&&t(Ci),o&&t(Ae),D(is),D(Eo),D(ps),D($o),D(hs),o&&t(Pi),o&&t(Yt),D(fs),o&&t(Ri),o&&t(Me),D(us),D(qo),D(ks),D(zo),D(Ts),o&&t(ji),o&&t(eo),D(vs),o&&t(xi),o&&t(Ce),D(ws),D(Co),D(Fs),D(Po),D(qs),o&&t(Bi),o&&t(oo),D(zs),o&&t(Li),o&&t(Pe),D(Ms),D(jo),D(xs),D(xo),D(Bs)}}}const z_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function M_(O,h,F){let{fw:m}=h;return O.$$set=g=>{"fw"in g&&F(0,m=g.fw)},[m]}class L_ extends d_{constructor(h){super();c_(this,h,M_,q_,p_,{fw:0})}}export{L_ as default,z_ as metadata};
