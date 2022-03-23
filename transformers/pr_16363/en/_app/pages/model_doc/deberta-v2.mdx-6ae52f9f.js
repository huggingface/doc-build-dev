import{S as $_,i as E_,s as F_,e as a,k as l,w as k,t as n,M as V_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as w,q as y,o as D,B as $,v as q_}from"../../chunks/vendor-6b77c823.js";import{T as Be}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-abef54e3.js";import{C as Ae}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Le}from"../../chunks/IconCopyLink-7a11ce68.js";function z_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function M_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),_=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function x_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function C_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function j_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function R_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function P_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),S=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),j=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),L=r(C,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var ke=i(I);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(C,"."),C.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),S=r(Q,"CODE",{});var Te=i(S);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(P),j=r(P,"LI",{});var be=i(j);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,u,E),f(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),f(p,J,E),f(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),f(p,N,E),f(p,R,E),e(R,te),f(p,Z,E),f(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,fe),e(M,me),e(M,S),e(S,X),e(z,ue),e(z,j),e(j,ge),e(j,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function B_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function A_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),S=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),j=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),L=r(C,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var ke=i(I);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(C,"."),C.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),S=r(Q,"CODE",{});var Te=i(S);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(P),j=r(P,"LI",{});var be=i(j);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,u,E),f(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),f(p,J,E),f(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),f(p,N,E),f(p,R,E),e(R,te),f(p,Z,E),f(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,fe),e(M,me),e(M,S),e(S,X),e(z,ue),e(z,j),e(j,ge),e(j,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function L_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function I_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),S=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),j=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),L=r(C,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var ke=i(I);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(C,"."),C.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),S=r(Q,"CODE",{});var Te=i(S);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(P),j=r(P,"LI",{});var be=i(j);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,u,E),f(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),f(p,J,E),f(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),f(p,N,E),f(p,R,E),e(R,te),f(p,Z,E),f(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,fe),e(M,me),e(M,S),e(S,X),e(z,ue),e(z,j),e(j,ge),e(j,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function O_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function S_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),S=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),j=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),L=r(C,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var ke=i(I);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(C,"."),C.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),S=r(Q,"CODE",{});var Te=i(S);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(P),j=r(P,"LI",{});var be=i(j);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,u,E),f(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),f(p,J,E),f(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),f(p,N,E),f(p,R,E),e(R,te),f(p,Z,E),f(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,fe),e(M,me),e(M,S),e(S,X),e(z,ue),e(z,j),e(j,ge),e(j,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function N_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function W_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),S=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),j=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var C=i(q);Y=s(C,"This second option is useful when using "),L=r(C,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var ke=i(I);pe=s(ke,"model(inputs)"),ke.forEach(t),re=s(C,"."),C.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),S=r(Q,"CODE",{});var Te=i(S);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(P),j=r(P,"LI",{});var be=i(j);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,u,E),f(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),f(p,J,E),f(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),f(p,N,E),f(p,R,E),e(R,te),f(p,Z,E),f(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,fe),e(M,me),e(M,S),e(S,X),e(z,ue),e(z,j),e(j,ge),e(j,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function H_(O){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){f(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function U_(O){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,fe,me,S,X,ue,j,ge,U,oe,p,E,G,De,ye,C,_e,ke,$e,P,A,Ee,Fe,Q,ve,Te,be,Ve,ql,Gs,Ca,zl,Ml,xl,Ks,ja,Cl,jl,Rl,Js,Ra,Pl,Bl,_i,et,Al,Ho,Ll,Il,Uo,Ol,Sl,Qo,Nl,Wl,bi,Vt,ro,Pa,Go,Hl,Ba,Ul,vi,pt,Ko,Ql,qt,Gl,Xs,Kl,Jl,Jo,Xl,Yl,Zl,zt,ed,Ys,td,od,Zs,nd,sd,ki,Mt,io,Aa,Xo,ad,La,rd,Ti,qe,Yo,id,Zo,ld,en,dd,cd,pd,mt,tn,hd,Ia,fd,md,on,Oa,ud,gd,Sa,_d,bd,lo,nn,vd,xt,kd,Na,Td,wd,Wa,yd,Dd,$d,tt,sn,Ed,Ha,Fd,Vd,an,qd,Ct,zd,Ua,Md,xd,Qa,Cd,jd,Rd,ea,rn,wi,jt,co,Ga,ln,Pd,Ka,Bd,yi,Xe,dn,Ad,cn,Ld,pn,Id,Od,Sd,hn,Nd,fn,Wd,Hd,Ud,He,mn,Qd,Rt,Gd,ta,Kd,Jd,Ja,Xd,Yd,Zd,po,ec,Xa,tc,oc,un,Di,Pt,ho,Ya,gn,nc,Za,sc,$i,ht,_n,ac,er,rc,ic,ot,bn,lc,tr,dc,cc,or,pc,hc,fo,Ei,Bt,mo,nr,vn,fc,sr,mc,Fi,Ye,kn,uc,At,gc,ar,_c,bc,Tn,vc,kc,Tc,wn,wc,yn,yc,Dc,$c,Ce,Dn,Ec,Lt,Fc,oa,Vc,qc,rr,zc,Mc,xc,uo,Cc,ir,jc,Rc,$n,Pc,En,Vi,It,go,lr,Fn,Bc,dr,Ac,qi,Ie,Vn,Lc,cr,Ic,Oc,qn,Sc,zn,Nc,Wc,Hc,Mn,Uc,xn,Qc,Gc,Kc,we,Cn,Jc,Ot,Xc,na,Yc,Zc,pr,ep,tp,op,_o,np,hr,sp,ap,jn,rp,Rn,ip,fr,lp,dp,Pn,zi,St,bo,mr,Bn,cp,ur,pp,Mi,Oe,An,hp,gr,fp,mp,Ln,up,In,gp,_p,bp,On,vp,Sn,kp,Tp,wp,je,Nn,yp,Nt,Dp,sa,$p,Ep,_r,Fp,Vp,qp,vo,zp,br,Mp,xp,Wn,Cp,Hn,xi,Wt,ko,vr,Un,jp,kr,Rp,Ci,Se,Qn,Pp,Ht,Bp,Tr,Ap,Lp,wr,Ip,Op,Sp,Gn,Np,Kn,Wp,Hp,Up,Jn,Qp,Xn,Gp,Kp,Jp,Re,Yn,Xp,Ut,Yp,aa,Zp,eh,yr,th,oh,nh,To,sh,Dr,ah,rh,Zn,ih,es,ji,Qt,wo,$r,ts,lh,Er,dh,Ri,Ne,os,ch,ns,ph,ss,hh,fh,mh,as,uh,rs,gh,_h,bh,yo,vh,Ue,is,kh,Gt,Th,ra,wh,yh,Fr,Dh,$h,Eh,Do,Fh,Vr,Vh,qh,ls,Pi,Kt,$o,qr,ds,zh,zr,Mh,Bi,ft,cs,xh,Mr,Ch,jh,nt,ps,Rh,xr,Ph,Bh,hs,Ah,Cr,Lh,Ih,Oh,Ze,Sh,jr,Nh,Wh,Rr,Hh,Uh,Pr,Qh,Gh,Br,Kh,Jh,Ai,Jt,Eo,Ar,fs,Xh,Lr,Yh,Li,We,ms,Zh,Xt,ef,Ir,tf,of,us,nf,sf,af,gs,rf,_s,lf,df,cf,Fo,pf,Qe,bs,hf,Yt,ff,ia,mf,uf,Or,gf,_f,bf,Vo,vf,Sr,kf,Tf,vs,Ii,Zt,qo,Nr,ks,wf,Wr,yf,Oi,ze,Ts,Df,Hr,$f,Ef,ws,Ff,ys,Vf,qf,zf,Ds,Mf,$s,xf,Cf,jf,zo,Rf,Ge,Es,Pf,eo,Bf,la,Af,Lf,Ur,If,Of,Sf,Mo,Nf,Qr,Wf,Hf,Fs,Si,to,xo,Gr,Vs,Uf,Kr,Qf,Ni,Me,qs,Gf,Jr,Kf,Jf,zs,Xf,Ms,Yf,Zf,em,xs,tm,Cs,om,nm,sm,Co,am,Ke,js,rm,oo,im,da,lm,dm,Xr,cm,pm,hm,jo,fm,Yr,mm,um,Rs,Wi,no,Ro,Zr,Ps,gm,ei,_m,Hi,xe,Bs,bm,so,vm,ti,km,Tm,oi,wm,ym,Dm,As,$m,Ls,Em,Fm,Vm,Is,qm,Os,zm,Mm,xm,Po,Cm,Je,Ss,jm,ao,Rm,ca,Pm,Bm,ni,Am,Lm,Im,Bo,Om,si,Sm,Nm,Ns,Ui;return b=new Le({}),ee=new Le({}),Go=new Le({}),Ko=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Le({}),Yo=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),tn=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new Ae({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),rn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),ln=new Le({}),dn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new Be({props:{$$slots:{default:[z_]},$$scope:{ctx:O}}}),un=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new Le({}),_n=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),bn=new K({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/torch/nn/modules/module.py#L190"}}),fo=new Be({props:{$$slots:{default:[M_]},$$scope:{ctx:O}}}),vn=new Le({}),kn=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Be({props:{$$slots:{default:[x_]},$$scope:{ctx:O}}}),$n=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),En=new Ae({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Fn=new Le({}),Vn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),_o=new Be({props:{$$slots:{default:[C_]},$$scope:{ctx:O}}}),jn=new Ae({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Rn=new Ae({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Pn=new Ae({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Bn=new Le({}),An=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Be({props:{$$slots:{default:[j_]},$$scope:{ctx:O}}}),Wn=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Hn=new Ae({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Un=new Le({}),Qn=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Yn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new Be({props:{$$slots:{default:[R_]},$$scope:{ctx:O}}}),Zn=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),es=new Ae({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),ts=new Le({}),os=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1176",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new Be({props:{$$slots:{default:[P_]},$$scope:{ctx:O}}}),is=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1182",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Be({props:{$$slots:{default:[B_]},$$scope:{ctx:O}}}),ls=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ds=new Le({}),cs=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1080"}}),ps=new K({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),fs=new Le({}),ms=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new Be({props:{$$slots:{default:[A_]},$$scope:{ctx:O}}}),bs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1242",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new Be({props:{$$slots:{default:[L_]},$$scope:{ctx:O}}}),vs=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ks=new Le({}),Ts=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1311",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new Be({props:{$$slots:{default:[I_]},$$scope:{ctx:O}}}),Es=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1329",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Mo=new Be({props:{$$slots:{default:[O_]},$$scope:{ctx:O}}}),Fs=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Vs=new Le({}),qs=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1401",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Be({props:{$$slots:{default:[S_]},$$scope:{ctx:O}}}),js=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1413",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new Be({props:{$$slots:{default:[N_]},$$scope:{ctx:O}}}),Rs=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ps=new Le({}),Bs=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1481",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new Be({props:{$$slots:{default:[W_]},$$scope:{ctx:O}}}),Ss=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1492",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new Be({props:{$$slots:{default:[H_]},$$scope:{ctx:O}}}),Ns=new Ae({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),F=l(),u=a("h1"),_=a("a"),v=a("span"),k(b.$$.fragment),g=l(),V=a("span"),de=n("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),ce=l(),I=a("span"),pe=n("Overview"),re=l(),N=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),x=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=a("p"),H=n("The abstract from the paper is the following:"),le=l(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=a("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),S=l(),X=a("p"),ue=n("The following information is visible directly on the "),j=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),p=n("blog"),E=l(),G=a("p"),De=n("New in v2:"),ye=l(),C=a("ul"),_e=a("li"),ke=a("strong"),$e=n("Vocabulary"),P=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Ee=n("sentencepiece-based"),Fe=n(" tokenizer."),Q=l(),ve=a("li"),Te=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Ve=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),ql=l(),Gs=a("li"),Ca=a("strong"),zl=n("Sharing position projection matrix with content projection matrix in attention layer"),Ml=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),xl=l(),Ks=a("li"),ja=a("strong"),Cl=n("Apply bucket to encode relative positions"),jl=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Rl=l(),Js=a("li"),Ra=a("strong"),Pl=n("900M model & 1.5B model"),Bl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),_i=l(),et=a("p"),Al=n("This model was contributed by "),Ho=a("a"),Ll=n("DeBERTa"),Il=n(`. This model TF 2.0 implementation was
contributed by `),Uo=a("a"),Ol=n("kamalkraj"),Sl=n(". The original code can be found "),Qo=a("a"),Nl=n("here"),Wl=n("."),bi=l(),Vt=a("h2"),ro=a("a"),Pa=a("span"),k(Go.$$.fragment),Hl=l(),Ba=a("span"),Ul=n("DebertaV2Config"),vi=l(),pt=a("div"),k(Ko.$$.fragment),Ql=l(),qt=a("p"),Gl=n("This is the configuration class to store the configuration of a "),Xs=a("a"),Kl=n("DebertaV2Model"),Jl=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a("a"),Xl=n("microsoft/deberta-v2-xlarge"),Yl=n(" architecture."),Zl=l(),zt=a("p"),ed=n("Configuration objects inherit from "),Ys=a("a"),td=n("PretrainedConfig"),od=n(` and can be used to control the model outputs. Read the
documentation from `),Zs=a("a"),nd=n("PretrainedConfig"),sd=n(" for more information."),ki=l(),Mt=a("h2"),io=a("a"),Aa=a("span"),k(Xo.$$.fragment),ad=l(),La=a("span"),rd=n("DebertaV2Tokenizer"),Ti=l(),qe=a("div"),k(Yo.$$.fragment),id=l(),Zo=a("p"),ld=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=a("a"),dd=n("SentencePiece"),cd=n("."),pd=l(),mt=a("div"),k(tn.$$.fragment),hd=l(),Ia=a("p"),fd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),md=l(),on=a("ul"),Oa=a("li"),ud=n("single sequence: [CLS] X [SEP]"),gd=l(),Sa=a("li"),_d=n("pair of sequences: [CLS] A [SEP] B [SEP]"),bd=l(),lo=a("div"),k(nn.$$.fragment),vd=l(),xt=a("p"),kd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Na=a("code"),Td=n("prepare_for_model"),wd=n(" or "),Wa=a("code"),yd=n("encode_plus"),Dd=n(" methods."),$d=l(),tt=a("div"),k(sn.$$.fragment),Ed=l(),Ha=a("p"),Fd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Vd=l(),k(an.$$.fragment),qd=l(),Ct=a("p"),zd=n("If "),Ua=a("code"),Md=n("token_ids_1"),xd=n(" is "),Qa=a("code"),Cd=n("None"),jd=n(", this method only returns the first portion of the mask (0s)."),Rd=l(),ea=a("div"),k(rn.$$.fragment),wi=l(),jt=a("h2"),co=a("a"),Ga=a("span"),k(ln.$$.fragment),Pd=l(),Ka=a("span"),Bd=n("DebertaV2Model"),yi=l(),Xe=a("div"),k(dn.$$.fragment),Ad=l(),cn=a("p"),Ld=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=a("a"),Id=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Od=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sd=l(),hn=a("p"),Nd=n("This model is also a PyTorch "),fn=a("a"),Wd=n("torch.nn.Module"),Hd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ud=l(),He=a("div"),k(mn.$$.fragment),Qd=l(),Rt=a("p"),Gd=n("The "),ta=a("a"),Kd=n("DebertaV2Model"),Jd=n(" forward method, overrides the "),Ja=a("code"),Xd=n("__call__"),Yd=n(" special method."),Zd=l(),k(po.$$.fragment),ec=l(),Xa=a("p"),tc=n("Example:"),oc=l(),k(un.$$.fragment),Di=l(),Pt=a("h2"),ho=a("a"),Ya=a("span"),k(gn.$$.fragment),nc=l(),Za=a("span"),sc=n("DebertaV2PreTrainedModel"),$i=l(),ht=a("div"),k(_n.$$.fragment),ac=l(),er=a("p"),rc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ic=l(),ot=a("div"),k(bn.$$.fragment),lc=l(),tr=a("p"),dc=n("Defines the computation performed at every call."),cc=l(),or=a("p"),pc=n("Should be overridden by all subclasses."),hc=l(),k(fo.$$.fragment),Ei=l(),Bt=a("h2"),mo=a("a"),nr=a("span"),k(vn.$$.fragment),fc=l(),sr=a("span"),mc=n("DebertaV2ForMaskedLM"),Fi=l(),Ye=a("div"),k(kn.$$.fragment),uc=l(),At=a("p"),gc=n("DeBERTa Model with a "),ar=a("code"),_c=n("language modeling"),bc=n(` head on top.
The DeBERTa model was proposed in `),Tn=a("a"),vc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tc=l(),wn=a("p"),wc=n("This model is also a PyTorch "),yn=a("a"),yc=n("torch.nn.Module"),Dc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),$c=l(),Ce=a("div"),k(Dn.$$.fragment),Ec=l(),Lt=a("p"),Fc=n("The "),oa=a("a"),Vc=n("DebertaV2ForMaskedLM"),qc=n(" forward method, overrides the "),rr=a("code"),zc=n("__call__"),Mc=n(" special method."),xc=l(),k(uo.$$.fragment),Cc=l(),ir=a("p"),jc=n("Example:"),Rc=l(),k($n.$$.fragment),Pc=l(),k(En.$$.fragment),Vi=l(),It=a("h2"),go=a("a"),lr=a("span"),k(Fn.$$.fragment),Bc=l(),dr=a("span"),Ac=n("DebertaV2ForSequenceClassification"),qi=l(),Ie=a("div"),k(Vn.$$.fragment),Lc=l(),cr=a("p"),Ic=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Oc=l(),qn=a("p"),Sc=n("The DeBERTa model was proposed in "),zn=a("a"),Nc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hc=l(),Mn=a("p"),Uc=n("This model is also a PyTorch "),xn=a("a"),Qc=n("torch.nn.Module"),Gc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Kc=l(),we=a("div"),k(Cn.$$.fragment),Jc=l(),Ot=a("p"),Xc=n("The "),na=a("a"),Yc=n("DebertaV2ForSequenceClassification"),Zc=n(" forward method, overrides the "),pr=a("code"),ep=n("__call__"),tp=n(" special method."),op=l(),k(_o.$$.fragment),np=l(),hr=a("p"),sp=n("Example of single-label classification:"),ap=l(),k(jn.$$.fragment),rp=l(),k(Rn.$$.fragment),ip=l(),fr=a("p"),lp=n("Example of multi-label classification:"),dp=l(),k(Pn.$$.fragment),zi=l(),St=a("h2"),bo=a("a"),mr=a("span"),k(Bn.$$.fragment),cp=l(),ur=a("span"),pp=n("DebertaV2ForTokenClassification"),Mi=l(),Oe=a("div"),k(An.$$.fragment),hp=l(),gr=a("p"),fp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),mp=l(),Ln=a("p"),up=n("The DeBERTa model was proposed in "),In=a("a"),gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bp=l(),On=a("p"),vp=n("This model is also a PyTorch "),Sn=a("a"),kp=n("torch.nn.Module"),Tp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),wp=l(),je=a("div"),k(Nn.$$.fragment),yp=l(),Nt=a("p"),Dp=n("The "),sa=a("a"),$p=n("DebertaV2ForTokenClassification"),Ep=n(" forward method, overrides the "),_r=a("code"),Fp=n("__call__"),Vp=n(" special method."),qp=l(),k(vo.$$.fragment),zp=l(),br=a("p"),Mp=n("Example:"),xp=l(),k(Wn.$$.fragment),Cp=l(),k(Hn.$$.fragment),xi=l(),Wt=a("h2"),ko=a("a"),vr=a("span"),k(Un.$$.fragment),jp=l(),kr=a("span"),Rp=n("DebertaV2ForQuestionAnswering"),Ci=l(),Se=a("div"),k(Qn.$$.fragment),Pp=l(),Ht=a("p"),Bp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=a("code"),Ap=n("span start logits"),Lp=n(" and "),wr=a("code"),Ip=n("span end logits"),Op=n(")."),Sp=l(),Gn=a("p"),Np=n("The DeBERTa model was proposed in "),Kn=a("a"),Wp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Up=l(),Jn=a("p"),Qp=n("This model is also a PyTorch "),Xn=a("a"),Gp=n("torch.nn.Module"),Kp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jp=l(),Re=a("div"),k(Yn.$$.fragment),Xp=l(),Ut=a("p"),Yp=n("The "),aa=a("a"),Zp=n("DebertaV2ForQuestionAnswering"),eh=n(" forward method, overrides the "),yr=a("code"),th=n("__call__"),oh=n(" special method."),nh=l(),k(To.$$.fragment),sh=l(),Dr=a("p"),ah=n("Example:"),rh=l(),k(Zn.$$.fragment),ih=l(),k(es.$$.fragment),ji=l(),Qt=a("h2"),wo=a("a"),$r=a("span"),k(ts.$$.fragment),lh=l(),Er=a("span"),dh=n("TFDebertaV2Model"),Ri=l(),Ne=a("div"),k(os.$$.fragment),ch=l(),ns=a("p"),ph=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ss=a("a"),hh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mh=l(),as=a("p"),uh=n("This model is also a "),rs=a("a"),gh=n("tf.keras.Model"),_h=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh=l(),k(yo.$$.fragment),vh=l(),Ue=a("div"),k(is.$$.fragment),kh=l(),Gt=a("p"),Th=n("The "),ra=a("a"),wh=n("TFDebertaV2Model"),yh=n(" forward method, overrides the "),Fr=a("code"),Dh=n("__call__"),$h=n(" special method."),Eh=l(),k(Do.$$.fragment),Fh=l(),Vr=a("p"),Vh=n("Example:"),qh=l(),k(ls.$$.fragment),Pi=l(),Kt=a("h2"),$o=a("a"),qr=a("span"),k(ds.$$.fragment),zh=l(),zr=a("span"),Mh=n("TFDebertaV2PreTrainedModel"),Bi=l(),ft=a("div"),k(cs.$$.fragment),xh=l(),Mr=a("p"),Ch=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),jh=l(),nt=a("div"),k(ps.$$.fragment),Rh=l(),xr=a("p"),Ph=n("Calls the model on new inputs and returns the outputs as tensors."),Bh=l(),hs=a("p"),Ah=n("In this case "),Cr=a("code"),Lh=n("call()"),Ih=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Oh=l(),Ze=a("p"),Sh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),jr=a("code"),Nh=n("tf.keras.Model"),Wh=n(`.
To call a model on an input, always use the `),Rr=a("code"),Hh=n("__call__()"),Uh=n(` method,
i.e. `),Pr=a("code"),Qh=n("model(inputs)"),Gh=n(", which relies on the underlying "),Br=a("code"),Kh=n("call()"),Jh=n(" method."),Ai=l(),Jt=a("h2"),Eo=a("a"),Ar=a("span"),k(fs.$$.fragment),Xh=l(),Lr=a("span"),Yh=n("TFDebertaV2ForMaskedLM"),Li=l(),We=a("div"),k(ms.$$.fragment),Zh=l(),Xt=a("p"),ef=n("DeBERTa Model with a "),Ir=a("code"),tf=n("language modeling"),of=n(` head on top.
The DeBERTa model was proposed in `),us=a("a"),nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=l(),gs=a("p"),rf=n("This model is also a "),_s=a("a"),lf=n("tf.keras.Model"),df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=l(),k(Fo.$$.fragment),pf=l(),Qe=a("div"),k(bs.$$.fragment),hf=l(),Yt=a("p"),ff=n("The "),ia=a("a"),mf=n("TFDebertaV2ForMaskedLM"),uf=n(" forward method, overrides the "),Or=a("code"),gf=n("__call__"),_f=n(" special method."),bf=l(),k(Vo.$$.fragment),vf=l(),Sr=a("p"),kf=n("Example:"),Tf=l(),k(vs.$$.fragment),Ii=l(),Zt=a("h2"),qo=a("a"),Nr=a("span"),k(ks.$$.fragment),wf=l(),Wr=a("span"),yf=n("TFDebertaV2ForSequenceClassification"),Oi=l(),ze=a("div"),k(Ts.$$.fragment),Df=l(),Hr=a("p"),$f=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ef=l(),ws=a("p"),Ff=n("The DeBERTa model was proposed in "),ys=a("a"),Vf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zf=l(),Ds=a("p"),Mf=n("This model is also a "),$s=a("a"),xf=n("tf.keras.Model"),Cf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jf=l(),k(zo.$$.fragment),Rf=l(),Ge=a("div"),k(Es.$$.fragment),Pf=l(),eo=a("p"),Bf=n("The "),la=a("a"),Af=n("TFDebertaV2ForSequenceClassification"),Lf=n(" forward method, overrides the "),Ur=a("code"),If=n("__call__"),Of=n(" special method."),Sf=l(),k(Mo.$$.fragment),Nf=l(),Qr=a("p"),Wf=n("Example:"),Hf=l(),k(Fs.$$.fragment),Si=l(),to=a("h2"),xo=a("a"),Gr=a("span"),k(Vs.$$.fragment),Uf=l(),Kr=a("span"),Qf=n("TFDebertaV2ForTokenClassification"),Ni=l(),Me=a("div"),k(qs.$$.fragment),Gf=l(),Jr=a("p"),Kf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jf=l(),zs=a("p"),Xf=n("The DeBERTa model was proposed in "),Ms=a("a"),Yf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Zf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),em=l(),xs=a("p"),tm=n("This model is also a "),Cs=a("a"),om=n("tf.keras.Model"),nm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sm=l(),k(Co.$$.fragment),am=l(),Ke=a("div"),k(js.$$.fragment),rm=l(),oo=a("p"),im=n("The "),da=a("a"),lm=n("TFDebertaV2ForTokenClassification"),dm=n(" forward method, overrides the "),Xr=a("code"),cm=n("__call__"),pm=n(" special method."),hm=l(),k(jo.$$.fragment),fm=l(),Yr=a("p"),mm=n("Example:"),um=l(),k(Rs.$$.fragment),Wi=l(),no=a("h2"),Ro=a("a"),Zr=a("span"),k(Ps.$$.fragment),gm=l(),ei=a("span"),_m=n("TFDebertaV2ForQuestionAnswering"),Hi=l(),xe=a("div"),k(Bs.$$.fragment),bm=l(),so=a("p"),vm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=a("code"),km=n("span start logits"),Tm=n(" and "),oi=a("code"),wm=n("span end logits"),ym=n(")."),Dm=l(),As=a("p"),$m=n("The DeBERTa model was proposed in "),Ls=a("a"),Em=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vm=l(),Is=a("p"),qm=n("This model is also a "),Os=a("a"),zm=n("tf.keras.Model"),Mm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xm=l(),k(Po.$$.fragment),Cm=l(),Je=a("div"),k(Ss.$$.fragment),jm=l(),ao=a("p"),Rm=n("The "),ca=a("a"),Pm=n("TFDebertaV2ForQuestionAnswering"),Bm=n(" forward method, overrides the "),ni=a("code"),Am=n("__call__"),Lm=n(" special method."),Im=l(),k(Bo.$$.fragment),Om=l(),si=a("p"),Sm=n("Example:"),Nm=l(),k(Ns.$$.fragment),this.h()},l(o){const m=V_('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),u=r(o,"H1",{class:!0});var Ws=i(u);_=r(Ws,"A",{id:!0,class:!0,href:!0});var ai=i(_);v=r(ai,"SPAN",{});var ri=i(v);T(b.$$.fragment,ri),ri.forEach(t),ai.forEach(t),g=d(Ws),V=r(Ws,"SPAN",{});var ii=i(V);de=s(ii,"DeBERTa-v2"),ii.forEach(t),Ws.forEach(t),J=d(o),q=r(o,"H2",{class:!0});var Hs=i(q);Y=r(Hs,"A",{id:!0,class:!0,href:!0});var li=i(Y);L=r(li,"SPAN",{});var di=i(L);T(ee.$$.fragment,di),di.forEach(t),li.forEach(t),ce=d(Hs),I=r(Hs,"SPAN",{});var ci=i(I);pe=s(ci,"Overview"),ci.forEach(t),Hs.forEach(t),re=d(o),N=r(o,"P",{});var Us=i(N);R=s(Us,"The DeBERTa model was proposed in "),te=r(Us,"A",{href:!0,rel:!0});var pi=i(te);Z=s(pi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),pi.forEach(t),z=s(Us,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Us.forEach(t),x=d(o),ne=r(o,"P",{});var hi=i(ne);W=s(hi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),hi.forEach(t),ie=d(o),se=r(o,"P",{});var fi=i(se);H=s(fi,"The abstract from the paper is the following:"),fi.forEach(t),le=d(o),ae=r(o,"P",{});var mi=i(ae);M=r(mi,"EM",{});var Qs=i(M);he=s(Qs,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(Qs,"A",{href:!0,rel:!0});var ui=i(B);fe=s(ui,"https://github.com/microsoft/DeBERTa"),ui.forEach(t),me=s(Qs,"."),Qs.forEach(t),mi.forEach(t),S=d(o),X=r(o,"P",{});var Ao=i(X);ue=s(Ao,"The following information is visible directly on the "),j=r(Ao,"A",{href:!0,rel:!0});var Gm=i(j);ge=s(Gm,`original implementation
repository`),Gm.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(Ao,"A",{href:!0,rel:!0});var Km=i(oe);p=s(Km,"blog"),Km.forEach(t),Ao.forEach(t),E=d(o),G=r(o,"P",{});var Jm=i(G);De=s(Jm,"New in v2:"),Jm.forEach(t),ye=d(o),C=r(o,"UL",{});var ut=i(C);_e=r(ut,"LI",{});var gi=i(_e);ke=r(gi,"STRONG",{});var Xm=i(ke);$e=s(Xm,"Vocabulary"),Xm.forEach(t),P=s(gi,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(gi,"A",{href:!0,rel:!0});var Ym=i(A);Ee=s(Ym,"sentencepiece-based"),Ym.forEach(t),Fe=s(gi," tokenizer."),gi.forEach(t),Q=d(ut),ve=r(ut,"LI",{});var Wm=i(ve);Te=r(Wm,"STRONG",{});var Zm=i(Te);be=s(Zm,"nGiE(nGram Induced Input Encoding)"),Zm.forEach(t),Ve=s(Wm,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Wm.forEach(t),ql=d(ut),Gs=r(ut,"LI",{});var Hm=i(Gs);Ca=r(Hm,"STRONG",{});var eu=i(Ca);zl=s(eu,"Sharing position projection matrix with content projection matrix in attention layer"),eu.forEach(t),Ml=s(Hm,` Based on previous
experiments, this can save parameters without affecting the performance.`),Hm.forEach(t),xl=d(ut),Ks=r(ut,"LI",{});var Um=i(Ks);ja=r(Um,"STRONG",{});var tu=i(ja);Cl=s(tu,"Apply bucket to encode relative positions"),tu.forEach(t),jl=s(Um,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Um.forEach(t),Rl=d(ut),Js=r(ut,"LI",{});var Qm=i(Js);Ra=r(Qm,"STRONG",{});var ou=i(Ra);Pl=s(ou,"900M model & 1.5B model"),ou.forEach(t),Bl=s(Qm,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Qm.forEach(t),ut.forEach(t),_i=d(o),et=r(o,"P",{});var Lo=i(et);Al=s(Lo,"This model was contributed by "),Ho=r(Lo,"A",{href:!0,rel:!0});var nu=i(Ho);Ll=s(nu,"DeBERTa"),nu.forEach(t),Il=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=r(Lo,"A",{href:!0,rel:!0});var su=i(Uo);Ol=s(su,"kamalkraj"),su.forEach(t),Sl=s(Lo,". The original code can be found "),Qo=r(Lo,"A",{href:!0,rel:!0});var au=i(Qo);Nl=s(au,"here"),au.forEach(t),Wl=s(Lo,"."),Lo.forEach(t),bi=d(o),Vt=r(o,"H2",{class:!0});var Qi=i(Vt);ro=r(Qi,"A",{id:!0,class:!0,href:!0});var ru=i(ro);Pa=r(ru,"SPAN",{});var iu=i(Pa);T(Go.$$.fragment,iu),iu.forEach(t),ru.forEach(t),Hl=d(Qi),Ba=r(Qi,"SPAN",{});var lu=i(Ba);Ul=s(lu,"DebertaV2Config"),lu.forEach(t),Qi.forEach(t),vi=d(o),pt=r(o,"DIV",{class:!0});var pa=i(pt);T(Ko.$$.fragment,pa),Ql=d(pa),qt=r(pa,"P",{});var ha=i(qt);Gl=s(ha,"This is the configuration class to store the configuration of a "),Xs=r(ha,"A",{href:!0});var du=i(Xs);Kl=s(du,"DebertaV2Model"),du.forEach(t),Jl=s(ha,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r(ha,"A",{href:!0,rel:!0});var cu=i(Jo);Xl=s(cu,"microsoft/deberta-v2-xlarge"),cu.forEach(t),Yl=s(ha," architecture."),ha.forEach(t),Zl=d(pa),zt=r(pa,"P",{});var fa=i(zt);ed=s(fa,"Configuration objects inherit from "),Ys=r(fa,"A",{href:!0});var pu=i(Ys);td=s(pu,"PretrainedConfig"),pu.forEach(t),od=s(fa,` and can be used to control the model outputs. Read the
documentation from `),Zs=r(fa,"A",{href:!0});var hu=i(Zs);nd=s(hu,"PretrainedConfig"),hu.forEach(t),sd=s(fa," for more information."),fa.forEach(t),pa.forEach(t),ki=d(o),Mt=r(o,"H2",{class:!0});var Gi=i(Mt);io=r(Gi,"A",{id:!0,class:!0,href:!0});var fu=i(io);Aa=r(fu,"SPAN",{});var mu=i(Aa);T(Xo.$$.fragment,mu),mu.forEach(t),fu.forEach(t),ad=d(Gi),La=r(Gi,"SPAN",{});var uu=i(La);rd=s(uu,"DebertaV2Tokenizer"),uu.forEach(t),Gi.forEach(t),Ti=d(o),qe=r(o,"DIV",{class:!0});var st=i(qe);T(Yo.$$.fragment,st),id=d(st),Zo=r(st,"P",{});var Ki=i(Zo);ld=s(Ki,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=r(Ki,"A",{href:!0,rel:!0});var gu=i(en);dd=s(gu,"SentencePiece"),gu.forEach(t),cd=s(Ki,"."),Ki.forEach(t),pd=d(st),mt=r(st,"DIV",{class:!0});var ma=i(mt);T(tn.$$.fragment,ma),hd=d(ma),Ia=r(ma,"P",{});var _u=i(Ia);fd=s(_u,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),_u.forEach(t),md=d(ma),on=r(ma,"UL",{});var Ji=i(on);Oa=r(Ji,"LI",{});var bu=i(Oa);ud=s(bu,"single sequence: [CLS] X [SEP]"),bu.forEach(t),gd=d(Ji),Sa=r(Ji,"LI",{});var vu=i(Sa);_d=s(vu,"pair of sequences: [CLS] A [SEP] B [SEP]"),vu.forEach(t),Ji.forEach(t),ma.forEach(t),bd=d(st),lo=r(st,"DIV",{class:!0});var Xi=i(lo);T(nn.$$.fragment,Xi),vd=d(Xi),xt=r(Xi,"P",{});var ua=i(xt);kd=s(ua,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Na=r(ua,"CODE",{});var ku=i(Na);Td=s(ku,"prepare_for_model"),ku.forEach(t),wd=s(ua," or "),Wa=r(ua,"CODE",{});var Tu=i(Wa);yd=s(Tu,"encode_plus"),Tu.forEach(t),Dd=s(ua," methods."),ua.forEach(t),Xi.forEach(t),$d=d(st),tt=r(st,"DIV",{class:!0});var Io=i(tt);T(sn.$$.fragment,Io),Ed=d(Io),Ha=r(Io,"P",{});var wu=i(Ha);Fd=s(wu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),wu.forEach(t),Vd=d(Io),T(an.$$.fragment,Io),qd=d(Io),Ct=r(Io,"P",{});var ga=i(Ct);zd=s(ga,"If "),Ua=r(ga,"CODE",{});var yu=i(Ua);Md=s(yu,"token_ids_1"),yu.forEach(t),xd=s(ga," is "),Qa=r(ga,"CODE",{});var Du=i(Qa);Cd=s(Du,"None"),Du.forEach(t),jd=s(ga,", this method only returns the first portion of the mask (0s)."),ga.forEach(t),Io.forEach(t),Rd=d(st),ea=r(st,"DIV",{class:!0});var $u=i(ea);T(rn.$$.fragment,$u),$u.forEach(t),st.forEach(t),wi=d(o),jt=r(o,"H2",{class:!0});var Yi=i(jt);co=r(Yi,"A",{id:!0,class:!0,href:!0});var Eu=i(co);Ga=r(Eu,"SPAN",{});var Fu=i(Ga);T(ln.$$.fragment,Fu),Fu.forEach(t),Eu.forEach(t),Pd=d(Yi),Ka=r(Yi,"SPAN",{});var Vu=i(Ka);Bd=s(Vu,"DebertaV2Model"),Vu.forEach(t),Yi.forEach(t),yi=d(o),Xe=r(o,"DIV",{class:!0});var Oo=i(Xe);T(dn.$$.fragment,Oo),Ad=d(Oo),cn=r(Oo,"P",{});var Zi=i(cn);Ld=s(Zi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=r(Zi,"A",{href:!0,rel:!0});var qu=i(pn);Id=s(qu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qu.forEach(t),Od=s(Zi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zi.forEach(t),Sd=d(Oo),hn=r(Oo,"P",{});var el=i(hn);Nd=s(el,"This model is also a PyTorch "),fn=r(el,"A",{href:!0,rel:!0});var zu=i(fn);Wd=s(zu,"torch.nn.Module"),zu.forEach(t),Hd=s(el," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),el.forEach(t),Ud=d(Oo),He=r(Oo,"DIV",{class:!0});var gt=i(He);T(mn.$$.fragment,gt),Qd=d(gt),Rt=r(gt,"P",{});var _a=i(Rt);Gd=s(_a,"The "),ta=r(_a,"A",{href:!0});var Mu=i(ta);Kd=s(Mu,"DebertaV2Model"),Mu.forEach(t),Jd=s(_a," forward method, overrides the "),Ja=r(_a,"CODE",{});var xu=i(Ja);Xd=s(xu,"__call__"),xu.forEach(t),Yd=s(_a," special method."),_a.forEach(t),Zd=d(gt),T(po.$$.fragment,gt),ec=d(gt),Xa=r(gt,"P",{});var Cu=i(Xa);tc=s(Cu,"Example:"),Cu.forEach(t),oc=d(gt),T(un.$$.fragment,gt),gt.forEach(t),Oo.forEach(t),Di=d(o),Pt=r(o,"H2",{class:!0});var tl=i(Pt);ho=r(tl,"A",{id:!0,class:!0,href:!0});var ju=i(ho);Ya=r(ju,"SPAN",{});var Ru=i(Ya);T(gn.$$.fragment,Ru),Ru.forEach(t),ju.forEach(t),nc=d(tl),Za=r(tl,"SPAN",{});var Pu=i(Za);sc=s(Pu,"DebertaV2PreTrainedModel"),Pu.forEach(t),tl.forEach(t),$i=d(o),ht=r(o,"DIV",{class:!0});var ba=i(ht);T(_n.$$.fragment,ba),ac=d(ba),er=r(ba,"P",{});var Bu=i(er);rc=s(Bu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Bu.forEach(t),ic=d(ba),ot=r(ba,"DIV",{class:!0});var So=i(ot);T(bn.$$.fragment,So),lc=d(So),tr=r(So,"P",{});var Au=i(tr);dc=s(Au,"Defines the computation performed at every call."),Au.forEach(t),cc=d(So),or=r(So,"P",{});var Lu=i(or);pc=s(Lu,"Should be overridden by all subclasses."),Lu.forEach(t),hc=d(So),T(fo.$$.fragment,So),So.forEach(t),ba.forEach(t),Ei=d(o),Bt=r(o,"H2",{class:!0});var ol=i(Bt);mo=r(ol,"A",{id:!0,class:!0,href:!0});var Iu=i(mo);nr=r(Iu,"SPAN",{});var Ou=i(nr);T(vn.$$.fragment,Ou),Ou.forEach(t),Iu.forEach(t),fc=d(ol),sr=r(ol,"SPAN",{});var Su=i(sr);mc=s(Su,"DebertaV2ForMaskedLM"),Su.forEach(t),ol.forEach(t),Fi=d(o),Ye=r(o,"DIV",{class:!0});var No=i(Ye);T(kn.$$.fragment,No),uc=d(No),At=r(No,"P",{});var va=i(At);gc=s(va,"DeBERTa Model with a "),ar=r(va,"CODE",{});var Nu=i(ar);_c=s(Nu,"language modeling"),Nu.forEach(t),bc=s(va,` head on top.
The DeBERTa model was proposed in `),Tn=r(va,"A",{href:!0,rel:!0});var Wu=i(Tn);vc=s(Wu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wu.forEach(t),kc=s(va,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),va.forEach(t),Tc=d(No),wn=r(No,"P",{});var nl=i(wn);wc=s(nl,"This model is also a PyTorch "),yn=r(nl,"A",{href:!0,rel:!0});var Hu=i(yn);yc=s(Hu,"torch.nn.Module"),Hu.forEach(t),Dc=s(nl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),nl.forEach(t),$c=d(No),Ce=r(No,"DIV",{class:!0});var at=i(Ce);T(Dn.$$.fragment,at),Ec=d(at),Lt=r(at,"P",{});var ka=i(Lt);Fc=s(ka,"The "),oa=r(ka,"A",{href:!0});var Uu=i(oa);Vc=s(Uu,"DebertaV2ForMaskedLM"),Uu.forEach(t),qc=s(ka," forward method, overrides the "),rr=r(ka,"CODE",{});var Qu=i(rr);zc=s(Qu,"__call__"),Qu.forEach(t),Mc=s(ka," special method."),ka.forEach(t),xc=d(at),T(uo.$$.fragment,at),Cc=d(at),ir=r(at,"P",{});var Gu=i(ir);jc=s(Gu,"Example:"),Gu.forEach(t),Rc=d(at),T($n.$$.fragment,at),Pc=d(at),T(En.$$.fragment,at),at.forEach(t),No.forEach(t),Vi=d(o),It=r(o,"H2",{class:!0});var sl=i(It);go=r(sl,"A",{id:!0,class:!0,href:!0});var Ku=i(go);lr=r(Ku,"SPAN",{});var Ju=i(lr);T(Fn.$$.fragment,Ju),Ju.forEach(t),Ku.forEach(t),Bc=d(sl),dr=r(sl,"SPAN",{});var Xu=i(dr);Ac=s(Xu,"DebertaV2ForSequenceClassification"),Xu.forEach(t),sl.forEach(t),qi=d(o),Ie=r(o,"DIV",{class:!0});var _t=i(Ie);T(Vn.$$.fragment,_t),Lc=d(_t),cr=r(_t,"P",{});var Yu=i(cr);Ic=s(Yu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yu.forEach(t),Oc=d(_t),qn=r(_t,"P",{});var al=i(qn);Sc=s(al,"The DeBERTa model was proposed in "),zn=r(al,"A",{href:!0,rel:!0});var Zu=i(zn);Nc=s(Zu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Zu.forEach(t),Wc=s(al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),al.forEach(t),Hc=d(_t),Mn=r(_t,"P",{});var rl=i(Mn);Uc=s(rl,"This model is also a PyTorch "),xn=r(rl,"A",{href:!0,rel:!0});var eg=i(xn);Qc=s(eg,"torch.nn.Module"),eg.forEach(t),Gc=s(rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rl.forEach(t),Kc=d(_t),we=r(_t,"DIV",{class:!0});var Pe=i(we);T(Cn.$$.fragment,Pe),Jc=d(Pe),Ot=r(Pe,"P",{});var Ta=i(Ot);Xc=s(Ta,"The "),na=r(Ta,"A",{href:!0});var tg=i(na);Yc=s(tg,"DebertaV2ForSequenceClassification"),tg.forEach(t),Zc=s(Ta," forward method, overrides the "),pr=r(Ta,"CODE",{});var og=i(pr);ep=s(og,"__call__"),og.forEach(t),tp=s(Ta," special method."),Ta.forEach(t),op=d(Pe),T(_o.$$.fragment,Pe),np=d(Pe),hr=r(Pe,"P",{});var ng=i(hr);sp=s(ng,"Example of single-label classification:"),ng.forEach(t),ap=d(Pe),T(jn.$$.fragment,Pe),rp=d(Pe),T(Rn.$$.fragment,Pe),ip=d(Pe),fr=r(Pe,"P",{});var sg=i(fr);lp=s(sg,"Example of multi-label classification:"),sg.forEach(t),dp=d(Pe),T(Pn.$$.fragment,Pe),Pe.forEach(t),_t.forEach(t),zi=d(o),St=r(o,"H2",{class:!0});var il=i(St);bo=r(il,"A",{id:!0,class:!0,href:!0});var ag=i(bo);mr=r(ag,"SPAN",{});var rg=i(mr);T(Bn.$$.fragment,rg),rg.forEach(t),ag.forEach(t),cp=d(il),ur=r(il,"SPAN",{});var ig=i(ur);pp=s(ig,"DebertaV2ForTokenClassification"),ig.forEach(t),il.forEach(t),Mi=d(o),Oe=r(o,"DIV",{class:!0});var bt=i(Oe);T(An.$$.fragment,bt),hp=d(bt),gr=r(bt,"P",{});var lg=i(gr);fp=s(lg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),lg.forEach(t),mp=d(bt),Ln=r(bt,"P",{});var ll=i(Ln);up=s(ll,"The DeBERTa model was proposed in "),In=r(ll,"A",{href:!0,rel:!0});var dg=i(In);gp=s(dg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dg.forEach(t),_p=s(ll,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ll.forEach(t),bp=d(bt),On=r(bt,"P",{});var dl=i(On);vp=s(dl,"This model is also a PyTorch "),Sn=r(dl,"A",{href:!0,rel:!0});var cg=i(Sn);kp=s(cg,"torch.nn.Module"),cg.forEach(t),Tp=s(dl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),dl.forEach(t),wp=d(bt),je=r(bt,"DIV",{class:!0});var rt=i(je);T(Nn.$$.fragment,rt),yp=d(rt),Nt=r(rt,"P",{});var wa=i(Nt);Dp=s(wa,"The "),sa=r(wa,"A",{href:!0});var pg=i(sa);$p=s(pg,"DebertaV2ForTokenClassification"),pg.forEach(t),Ep=s(wa," forward method, overrides the "),_r=r(wa,"CODE",{});var hg=i(_r);Fp=s(hg,"__call__"),hg.forEach(t),Vp=s(wa," special method."),wa.forEach(t),qp=d(rt),T(vo.$$.fragment,rt),zp=d(rt),br=r(rt,"P",{});var fg=i(br);Mp=s(fg,"Example:"),fg.forEach(t),xp=d(rt),T(Wn.$$.fragment,rt),Cp=d(rt),T(Hn.$$.fragment,rt),rt.forEach(t),bt.forEach(t),xi=d(o),Wt=r(o,"H2",{class:!0});var cl=i(Wt);ko=r(cl,"A",{id:!0,class:!0,href:!0});var mg=i(ko);vr=r(mg,"SPAN",{});var ug=i(vr);T(Un.$$.fragment,ug),ug.forEach(t),mg.forEach(t),jp=d(cl),kr=r(cl,"SPAN",{});var gg=i(kr);Rp=s(gg,"DebertaV2ForQuestionAnswering"),gg.forEach(t),cl.forEach(t),Ci=d(o),Se=r(o,"DIV",{class:!0});var vt=i(Se);T(Qn.$$.fragment,vt),Pp=d(vt),Ht=r(vt,"P",{});var ya=i(Ht);Bp=s(ya,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=r(ya,"CODE",{});var _g=i(Tr);Ap=s(_g,"span start logits"),_g.forEach(t),Lp=s(ya," and "),wr=r(ya,"CODE",{});var bg=i(wr);Ip=s(bg,"span end logits"),bg.forEach(t),Op=s(ya,")."),ya.forEach(t),Sp=d(vt),Gn=r(vt,"P",{});var pl=i(Gn);Np=s(pl,"The DeBERTa model was proposed in "),Kn=r(pl,"A",{href:!0,rel:!0});var vg=i(Kn);Wp=s(vg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vg.forEach(t),Hp=s(pl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pl.forEach(t),Up=d(vt),Jn=r(vt,"P",{});var hl=i(Jn);Qp=s(hl,"This model is also a PyTorch "),Xn=r(hl,"A",{href:!0,rel:!0});var kg=i(Xn);Gp=s(kg,"torch.nn.Module"),kg.forEach(t),Kp=s(hl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),hl.forEach(t),Jp=d(vt),Re=r(vt,"DIV",{class:!0});var it=i(Re);T(Yn.$$.fragment,it),Xp=d(it),Ut=r(it,"P",{});var Da=i(Ut);Yp=s(Da,"The "),aa=r(Da,"A",{href:!0});var Tg=i(aa);Zp=s(Tg,"DebertaV2ForQuestionAnswering"),Tg.forEach(t),eh=s(Da," forward method, overrides the "),yr=r(Da,"CODE",{});var wg=i(yr);th=s(wg,"__call__"),wg.forEach(t),oh=s(Da," special method."),Da.forEach(t),nh=d(it),T(To.$$.fragment,it),sh=d(it),Dr=r(it,"P",{});var yg=i(Dr);ah=s(yg,"Example:"),yg.forEach(t),rh=d(it),T(Zn.$$.fragment,it),ih=d(it),T(es.$$.fragment,it),it.forEach(t),vt.forEach(t),ji=d(o),Qt=r(o,"H2",{class:!0});var fl=i(Qt);wo=r(fl,"A",{id:!0,class:!0,href:!0});var Dg=i(wo);$r=r(Dg,"SPAN",{});var $g=i($r);T(ts.$$.fragment,$g),$g.forEach(t),Dg.forEach(t),lh=d(fl),Er=r(fl,"SPAN",{});var Eg=i(Er);dh=s(Eg,"TFDebertaV2Model"),Eg.forEach(t),fl.forEach(t),Ri=d(o),Ne=r(o,"DIV",{class:!0});var kt=i(Ne);T(os.$$.fragment,kt),ch=d(kt),ns=r(kt,"P",{});var ml=i(ns);ph=s(ml,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),ss=r(ml,"A",{href:!0,rel:!0});var Fg=i(ss);hh=s(Fg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Fg.forEach(t),fh=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),mh=d(kt),as=r(kt,"P",{});var ul=i(as);uh=s(ul,"This model is also a "),rs=r(ul,"A",{href:!0,rel:!0});var Vg=i(rs);gh=s(Vg,"tf.keras.Model"),Vg.forEach(t),_h=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),bh=d(kt),T(yo.$$.fragment,kt),vh=d(kt),Ue=r(kt,"DIV",{class:!0});var Tt=i(Ue);T(is.$$.fragment,Tt),kh=d(Tt),Gt=r(Tt,"P",{});var $a=i(Gt);Th=s($a,"The "),ra=r($a,"A",{href:!0});var qg=i(ra);wh=s(qg,"TFDebertaV2Model"),qg.forEach(t),yh=s($a," forward method, overrides the "),Fr=r($a,"CODE",{});var zg=i(Fr);Dh=s(zg,"__call__"),zg.forEach(t),$h=s($a," special method."),$a.forEach(t),Eh=d(Tt),T(Do.$$.fragment,Tt),Fh=d(Tt),Vr=r(Tt,"P",{});var Mg=i(Vr);Vh=s(Mg,"Example:"),Mg.forEach(t),qh=d(Tt),T(ls.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Pi=d(o),Kt=r(o,"H2",{class:!0});var gl=i(Kt);$o=r(gl,"A",{id:!0,class:!0,href:!0});var xg=i($o);qr=r(xg,"SPAN",{});var Cg=i(qr);T(ds.$$.fragment,Cg),Cg.forEach(t),xg.forEach(t),zh=d(gl),zr=r(gl,"SPAN",{});var jg=i(zr);Mh=s(jg,"TFDebertaV2PreTrainedModel"),jg.forEach(t),gl.forEach(t),Bi=d(o),ft=r(o,"DIV",{class:!0});var Ea=i(ft);T(cs.$$.fragment,Ea),xh=d(Ea),Mr=r(Ea,"P",{});var Rg=i(Mr);Ch=s(Rg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Rg.forEach(t),jh=d(Ea),nt=r(Ea,"DIV",{class:!0});var Wo=i(nt);T(ps.$$.fragment,Wo),Rh=d(Wo),xr=r(Wo,"P",{});var Pg=i(xr);Ph=s(Pg,"Calls the model on new inputs and returns the outputs as tensors."),Pg.forEach(t),Bh=d(Wo),hs=r(Wo,"P",{});var _l=i(hs);Ah=s(_l,"In this case "),Cr=r(_l,"CODE",{});var Bg=i(Cr);Lh=s(Bg,"call()"),Bg.forEach(t),Ih=s(_l,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),_l.forEach(t),Oh=d(Wo),Ze=r(Wo,"P",{});var wt=i(Ze);Sh=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),jr=r(wt,"CODE",{});var Ag=i(jr);Nh=s(Ag,"tf.keras.Model"),Ag.forEach(t),Wh=s(wt,`.
To call a model on an input, always use the `),Rr=r(wt,"CODE",{});var Lg=i(Rr);Hh=s(Lg,"__call__()"),Lg.forEach(t),Uh=s(wt,` method,
i.e. `),Pr=r(wt,"CODE",{});var Ig=i(Pr);Qh=s(Ig,"model(inputs)"),Ig.forEach(t),Gh=s(wt,", which relies on the underlying "),Br=r(wt,"CODE",{});var Og=i(Br);Kh=s(Og,"call()"),Og.forEach(t),Jh=s(wt," method."),wt.forEach(t),Wo.forEach(t),Ea.forEach(t),Ai=d(o),Jt=r(o,"H2",{class:!0});var bl=i(Jt);Eo=r(bl,"A",{id:!0,class:!0,href:!0});var Sg=i(Eo);Ar=r(Sg,"SPAN",{});var Ng=i(Ar);T(fs.$$.fragment,Ng),Ng.forEach(t),Sg.forEach(t),Xh=d(bl),Lr=r(bl,"SPAN",{});var Wg=i(Lr);Yh=s(Wg,"TFDebertaV2ForMaskedLM"),Wg.forEach(t),bl.forEach(t),Li=d(o),We=r(o,"DIV",{class:!0});var yt=i(We);T(ms.$$.fragment,yt),Zh=d(yt),Xt=r(yt,"P",{});var Fa=i(Xt);ef=s(Fa,"DeBERTa Model with a "),Ir=r(Fa,"CODE",{});var Hg=i(Ir);tf=s(Hg,"language modeling"),Hg.forEach(t),of=s(Fa,` head on top.
The DeBERTa model was proposed in `),us=r(Fa,"A",{href:!0,rel:!0});var Ug=i(us);nf=s(Ug,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ug.forEach(t),sf=s(Fa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fa.forEach(t),af=d(yt),gs=r(yt,"P",{});var vl=i(gs);rf=s(vl,"This model is also a "),_s=r(vl,"A",{href:!0,rel:!0});var Qg=i(_s);lf=s(Qg,"tf.keras.Model"),Qg.forEach(t),df=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),cf=d(yt),T(Fo.$$.fragment,yt),pf=d(yt),Qe=r(yt,"DIV",{class:!0});var Dt=i(Qe);T(bs.$$.fragment,Dt),hf=d(Dt),Yt=r(Dt,"P",{});var Va=i(Yt);ff=s(Va,"The "),ia=r(Va,"A",{href:!0});var Gg=i(ia);mf=s(Gg,"TFDebertaV2ForMaskedLM"),Gg.forEach(t),uf=s(Va," forward method, overrides the "),Or=r(Va,"CODE",{});var Kg=i(Or);gf=s(Kg,"__call__"),Kg.forEach(t),_f=s(Va," special method."),Va.forEach(t),bf=d(Dt),T(Vo.$$.fragment,Dt),vf=d(Dt),Sr=r(Dt,"P",{});var Jg=i(Sr);kf=s(Jg,"Example:"),Jg.forEach(t),Tf=d(Dt),T(vs.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),Ii=d(o),Zt=r(o,"H2",{class:!0});var kl=i(Zt);qo=r(kl,"A",{id:!0,class:!0,href:!0});var Xg=i(qo);Nr=r(Xg,"SPAN",{});var Yg=i(Nr);T(ks.$$.fragment,Yg),Yg.forEach(t),Xg.forEach(t),wf=d(kl),Wr=r(kl,"SPAN",{});var Zg=i(Wr);yf=s(Zg,"TFDebertaV2ForSequenceClassification"),Zg.forEach(t),kl.forEach(t),Oi=d(o),ze=r(o,"DIV",{class:!0});var lt=i(ze);T(Ts.$$.fragment,lt),Df=d(lt),Hr=r(lt,"P",{});var e_=i(Hr);$f=s(e_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),e_.forEach(t),Ef=d(lt),ws=r(lt,"P",{});var Tl=i(ws);Ff=s(Tl,"The DeBERTa model was proposed in "),ys=r(Tl,"A",{href:!0,rel:!0});var t_=i(ys);Vf=s(t_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),t_.forEach(t),qf=s(Tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tl.forEach(t),zf=d(lt),Ds=r(lt,"P",{});var wl=i(Ds);Mf=s(wl,"This model is also a "),$s=r(wl,"A",{href:!0,rel:!0});var o_=i($s);xf=s(o_,"tf.keras.Model"),o_.forEach(t),Cf=s(wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wl.forEach(t),jf=d(lt),T(zo.$$.fragment,lt),Rf=d(lt),Ge=r(lt,"DIV",{class:!0});var $t=i(Ge);T(Es.$$.fragment,$t),Pf=d($t),eo=r($t,"P",{});var qa=i(eo);Bf=s(qa,"The "),la=r(qa,"A",{href:!0});var n_=i(la);Af=s(n_,"TFDebertaV2ForSequenceClassification"),n_.forEach(t),Lf=s(qa," forward method, overrides the "),Ur=r(qa,"CODE",{});var s_=i(Ur);If=s(s_,"__call__"),s_.forEach(t),Of=s(qa," special method."),qa.forEach(t),Sf=d($t),T(Mo.$$.fragment,$t),Nf=d($t),Qr=r($t,"P",{});var a_=i(Qr);Wf=s(a_,"Example:"),a_.forEach(t),Hf=d($t),T(Fs.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Si=d(o),to=r(o,"H2",{class:!0});var yl=i(to);xo=r(yl,"A",{id:!0,class:!0,href:!0});var r_=i(xo);Gr=r(r_,"SPAN",{});var i_=i(Gr);T(Vs.$$.fragment,i_),i_.forEach(t),r_.forEach(t),Uf=d(yl),Kr=r(yl,"SPAN",{});var l_=i(Kr);Qf=s(l_,"TFDebertaV2ForTokenClassification"),l_.forEach(t),yl.forEach(t),Ni=d(o),Me=r(o,"DIV",{class:!0});var dt=i(Me);T(qs.$$.fragment,dt),Gf=d(dt),Jr=r(dt,"P",{});var d_=i(Jr);Kf=s(d_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),d_.forEach(t),Jf=d(dt),zs=r(dt,"P",{});var Dl=i(zs);Xf=s(Dl,"The DeBERTa model was proposed in "),Ms=r(Dl,"A",{href:!0,rel:!0});var c_=i(Ms);Yf=s(c_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),c_.forEach(t),Zf=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),em=d(dt),xs=r(dt,"P",{});var $l=i(xs);tm=s($l,"This model is also a "),Cs=r($l,"A",{href:!0,rel:!0});var p_=i(Cs);om=s(p_,"tf.keras.Model"),p_.forEach(t),nm=s($l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$l.forEach(t),sm=d(dt),T(Co.$$.fragment,dt),am=d(dt),Ke=r(dt,"DIV",{class:!0});var Et=i(Ke);T(js.$$.fragment,Et),rm=d(Et),oo=r(Et,"P",{});var za=i(oo);im=s(za,"The "),da=r(za,"A",{href:!0});var h_=i(da);lm=s(h_,"TFDebertaV2ForTokenClassification"),h_.forEach(t),dm=s(za," forward method, overrides the "),Xr=r(za,"CODE",{});var f_=i(Xr);cm=s(f_,"__call__"),f_.forEach(t),pm=s(za," special method."),za.forEach(t),hm=d(Et),T(jo.$$.fragment,Et),fm=d(Et),Yr=r(Et,"P",{});var m_=i(Yr);mm=s(m_,"Example:"),m_.forEach(t),um=d(Et),T(Rs.$$.fragment,Et),Et.forEach(t),dt.forEach(t),Wi=d(o),no=r(o,"H2",{class:!0});var El=i(no);Ro=r(El,"A",{id:!0,class:!0,href:!0});var u_=i(Ro);Zr=r(u_,"SPAN",{});var g_=i(Zr);T(Ps.$$.fragment,g_),g_.forEach(t),u_.forEach(t),gm=d(El),ei=r(El,"SPAN",{});var __=i(ei);_m=s(__,"TFDebertaV2ForQuestionAnswering"),__.forEach(t),El.forEach(t),Hi=d(o),xe=r(o,"DIV",{class:!0});var ct=i(xe);T(Bs.$$.fragment,ct),bm=d(ct),so=r(ct,"P",{});var Ma=i(so);vm=s(Ma,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=r(Ma,"CODE",{});var b_=i(ti);km=s(b_,"span start logits"),b_.forEach(t),Tm=s(Ma," and "),oi=r(Ma,"CODE",{});var v_=i(oi);wm=s(v_,"span end logits"),v_.forEach(t),ym=s(Ma,")."),Ma.forEach(t),Dm=d(ct),As=r(ct,"P",{});var Fl=i(As);$m=s(Fl,"The DeBERTa model was proposed in "),Ls=r(Fl,"A",{href:!0,rel:!0});var k_=i(Ls);Em=s(k_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),k_.forEach(t),Fm=s(Fl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fl.forEach(t),Vm=d(ct),Is=r(ct,"P",{});var Vl=i(Is);qm=s(Vl,"This model is also a "),Os=r(Vl,"A",{href:!0,rel:!0});var T_=i(Os);zm=s(T_,"tf.keras.Model"),T_.forEach(t),Mm=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),xm=d(ct),T(Po.$$.fragment,ct),Cm=d(ct),Je=r(ct,"DIV",{class:!0});var Ft=i(Je);T(Ss.$$.fragment,Ft),jm=d(Ft),ao=r(Ft,"P",{});var xa=i(ao);Rm=s(xa,"The "),ca=r(xa,"A",{href:!0});var w_=i(ca);Pm=s(w_,"TFDebertaV2ForQuestionAnswering"),w_.forEach(t),Bm=s(xa," forward method, overrides the "),ni=r(xa,"CODE",{});var y_=i(ni);Am=s(y_,"__call__"),y_.forEach(t),Lm=s(xa," special method."),xa.forEach(t),Im=d(Ft),T(Bo.$$.fragment,Ft),Om=d(Ft),si=r(Ft,"P",{});var D_=i(si);Sm=s(D_,"Example:"),D_.forEach(t),Nm=d(Ft),T(Ns.$$.fragment,Ft),Ft.forEach(t),ct.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Q_)),c(_,"id","debertav2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(B,"href","https://github.com/microsoft/DeBERTa"),c(B,"rel","nofollow"),c(j,"href","https://github.com/microsoft/DeBERTa"),c(j,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ro,"id","transformers.DebertaV2Config"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(Xs,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Zs,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(pt,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(mt,"class","docstring"),c(lo,"class","docstring"),c(tt,"class","docstring"),c(ea,"class","docstring"),c(qe,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(jt,"class","relative group"),c(pn,"href","https://arxiv.org/abs/2006.03654"),c(pn,"rel","nofollow"),c(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fn,"rel","nofollow"),c(ta,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(He,"class","docstring"),c(Xe,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Pt,"class","relative group"),c(ot,"class","docstring"),c(ht,"class","docstring"),c(mo,"id","transformers.DebertaV2ForMaskedLM"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaV2ForMaskedLM"),c(Bt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(oa,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Ce,"class","docstring"),c(Ye,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(zn,"href","https://arxiv.org/abs/2006.03654"),c(zn,"rel","nofollow"),c(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xn,"rel","nofollow"),c(na,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(we,"class","docstring"),c(Ie,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(St,"class","relative group"),c(In,"href","https://arxiv.org/abs/2006.03654"),c(In,"rel","nofollow"),c(Sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Sn,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(je,"class","docstring"),c(Oe,"class","docstring"),c(ko,"id","transformers.DebertaV2ForQuestionAnswering"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Kn,"href","https://arxiv.org/abs/2006.03654"),c(Kn,"rel","nofollow"),c(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xn,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Re,"class","docstring"),c(Se,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(ss,"href","https://arxiv.org/abs/2006.03654"),c(ss,"rel","nofollow"),c(rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rs,"rel","nofollow"),c(ra,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(Ue,"class","docstring"),c(Ne,"class","docstring"),c($o,"id","transformers.TFDebertaV2PreTrainedModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(ft,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2ForMaskedLM"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(us,"href","https://arxiv.org/abs/2006.03654"),c(us,"rel","nofollow"),c(_s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_s,"rel","nofollow"),c(ia,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(Qe,"class","docstring"),c(We,"class","docstring"),c(qo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c(ys,"href","https://arxiv.org/abs/2006.03654"),c(ys,"rel","nofollow"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(la,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ge,"class","docstring"),c(ze,"class","docstring"),c(xo,"id","transformers.TFDebertaV2ForTokenClassification"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c(Ms,"href","https://arxiv.org/abs/2006.03654"),c(Ms,"rel","nofollow"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(da,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Ke,"class","docstring"),c(Me,"class","docstring"),c(Ro,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Ls,"href","https://arxiv.org/abs/2006.03654"),c(Ls,"rel","nofollow"),c(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Os,"rel","nofollow"),c(ca,"href","/docs/transformers/pr_16363/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Je,"class","docstring"),c(xe,"class","docstring")},m(o,m){e(document.head,h),f(o,F,m),f(o,u,m),e(u,_),e(_,v),w(b,v,null),e(u,g),e(u,V),e(V,de),f(o,J,m),f(o,q,m),e(q,Y),e(Y,L),w(ee,L,null),e(q,ce),e(q,I),e(I,pe),f(o,re,m),f(o,N,m),e(N,R),e(N,te),e(te,Z),e(N,z),f(o,x,m),f(o,ne,m),e(ne,W),f(o,ie,m),f(o,se,m),e(se,H),f(o,le,m),f(o,ae,m),e(ae,M),e(M,he),e(M,B),e(B,fe),e(M,me),f(o,S,m),f(o,X,m),e(X,ue),e(X,j),e(j,ge),e(X,U),e(X,oe),e(oe,p),f(o,E,m),f(o,G,m),e(G,De),f(o,ye,m),f(o,C,m),e(C,_e),e(_e,ke),e(ke,$e),e(_e,P),e(_e,A),e(A,Ee),e(_e,Fe),e(C,Q),e(C,ve),e(ve,Te),e(Te,be),e(ve,Ve),e(C,ql),e(C,Gs),e(Gs,Ca),e(Ca,zl),e(Gs,Ml),e(C,xl),e(C,Ks),e(Ks,ja),e(ja,Cl),e(Ks,jl),e(C,Rl),e(C,Js),e(Js,Ra),e(Ra,Pl),e(Js,Bl),f(o,_i,m),f(o,et,m),e(et,Al),e(et,Ho),e(Ho,Ll),e(et,Il),e(et,Uo),e(Uo,Ol),e(et,Sl),e(et,Qo),e(Qo,Nl),e(et,Wl),f(o,bi,m),f(o,Vt,m),e(Vt,ro),e(ro,Pa),w(Go,Pa,null),e(Vt,Hl),e(Vt,Ba),e(Ba,Ul),f(o,vi,m),f(o,pt,m),w(Ko,pt,null),e(pt,Ql),e(pt,qt),e(qt,Gl),e(qt,Xs),e(Xs,Kl),e(qt,Jl),e(qt,Jo),e(Jo,Xl),e(qt,Yl),e(pt,Zl),e(pt,zt),e(zt,ed),e(zt,Ys),e(Ys,td),e(zt,od),e(zt,Zs),e(Zs,nd),e(zt,sd),f(o,ki,m),f(o,Mt,m),e(Mt,io),e(io,Aa),w(Xo,Aa,null),e(Mt,ad),e(Mt,La),e(La,rd),f(o,Ti,m),f(o,qe,m),w(Yo,qe,null),e(qe,id),e(qe,Zo),e(Zo,ld),e(Zo,en),e(en,dd),e(Zo,cd),e(qe,pd),e(qe,mt),w(tn,mt,null),e(mt,hd),e(mt,Ia),e(Ia,fd),e(mt,md),e(mt,on),e(on,Oa),e(Oa,ud),e(on,gd),e(on,Sa),e(Sa,_d),e(qe,bd),e(qe,lo),w(nn,lo,null),e(lo,vd),e(lo,xt),e(xt,kd),e(xt,Na),e(Na,Td),e(xt,wd),e(xt,Wa),e(Wa,yd),e(xt,Dd),e(qe,$d),e(qe,tt),w(sn,tt,null),e(tt,Ed),e(tt,Ha),e(Ha,Fd),e(tt,Vd),w(an,tt,null),e(tt,qd),e(tt,Ct),e(Ct,zd),e(Ct,Ua),e(Ua,Md),e(Ct,xd),e(Ct,Qa),e(Qa,Cd),e(Ct,jd),e(qe,Rd),e(qe,ea),w(rn,ea,null),f(o,wi,m),f(o,jt,m),e(jt,co),e(co,Ga),w(ln,Ga,null),e(jt,Pd),e(jt,Ka),e(Ka,Bd),f(o,yi,m),f(o,Xe,m),w(dn,Xe,null),e(Xe,Ad),e(Xe,cn),e(cn,Ld),e(cn,pn),e(pn,Id),e(cn,Od),e(Xe,Sd),e(Xe,hn),e(hn,Nd),e(hn,fn),e(fn,Wd),e(hn,Hd),e(Xe,Ud),e(Xe,He),w(mn,He,null),e(He,Qd),e(He,Rt),e(Rt,Gd),e(Rt,ta),e(ta,Kd),e(Rt,Jd),e(Rt,Ja),e(Ja,Xd),e(Rt,Yd),e(He,Zd),w(po,He,null),e(He,ec),e(He,Xa),e(Xa,tc),e(He,oc),w(un,He,null),f(o,Di,m),f(o,Pt,m),e(Pt,ho),e(ho,Ya),w(gn,Ya,null),e(Pt,nc),e(Pt,Za),e(Za,sc),f(o,$i,m),f(o,ht,m),w(_n,ht,null),e(ht,ac),e(ht,er),e(er,rc),e(ht,ic),e(ht,ot),w(bn,ot,null),e(ot,lc),e(ot,tr),e(tr,dc),e(ot,cc),e(ot,or),e(or,pc),e(ot,hc),w(fo,ot,null),f(o,Ei,m),f(o,Bt,m),e(Bt,mo),e(mo,nr),w(vn,nr,null),e(Bt,fc),e(Bt,sr),e(sr,mc),f(o,Fi,m),f(o,Ye,m),w(kn,Ye,null),e(Ye,uc),e(Ye,At),e(At,gc),e(At,ar),e(ar,_c),e(At,bc),e(At,Tn),e(Tn,vc),e(At,kc),e(Ye,Tc),e(Ye,wn),e(wn,wc),e(wn,yn),e(yn,yc),e(wn,Dc),e(Ye,$c),e(Ye,Ce),w(Dn,Ce,null),e(Ce,Ec),e(Ce,Lt),e(Lt,Fc),e(Lt,oa),e(oa,Vc),e(Lt,qc),e(Lt,rr),e(rr,zc),e(Lt,Mc),e(Ce,xc),w(uo,Ce,null),e(Ce,Cc),e(Ce,ir),e(ir,jc),e(Ce,Rc),w($n,Ce,null),e(Ce,Pc),w(En,Ce,null),f(o,Vi,m),f(o,It,m),e(It,go),e(go,lr),w(Fn,lr,null),e(It,Bc),e(It,dr),e(dr,Ac),f(o,qi,m),f(o,Ie,m),w(Vn,Ie,null),e(Ie,Lc),e(Ie,cr),e(cr,Ic),e(Ie,Oc),e(Ie,qn),e(qn,Sc),e(qn,zn),e(zn,Nc),e(qn,Wc),e(Ie,Hc),e(Ie,Mn),e(Mn,Uc),e(Mn,xn),e(xn,Qc),e(Mn,Gc),e(Ie,Kc),e(Ie,we),w(Cn,we,null),e(we,Jc),e(we,Ot),e(Ot,Xc),e(Ot,na),e(na,Yc),e(Ot,Zc),e(Ot,pr),e(pr,ep),e(Ot,tp),e(we,op),w(_o,we,null),e(we,np),e(we,hr),e(hr,sp),e(we,ap),w(jn,we,null),e(we,rp),w(Rn,we,null),e(we,ip),e(we,fr),e(fr,lp),e(we,dp),w(Pn,we,null),f(o,zi,m),f(o,St,m),e(St,bo),e(bo,mr),w(Bn,mr,null),e(St,cp),e(St,ur),e(ur,pp),f(o,Mi,m),f(o,Oe,m),w(An,Oe,null),e(Oe,hp),e(Oe,gr),e(gr,fp),e(Oe,mp),e(Oe,Ln),e(Ln,up),e(Ln,In),e(In,gp),e(Ln,_p),e(Oe,bp),e(Oe,On),e(On,vp),e(On,Sn),e(Sn,kp),e(On,Tp),e(Oe,wp),e(Oe,je),w(Nn,je,null),e(je,yp),e(je,Nt),e(Nt,Dp),e(Nt,sa),e(sa,$p),e(Nt,Ep),e(Nt,_r),e(_r,Fp),e(Nt,Vp),e(je,qp),w(vo,je,null),e(je,zp),e(je,br),e(br,Mp),e(je,xp),w(Wn,je,null),e(je,Cp),w(Hn,je,null),f(o,xi,m),f(o,Wt,m),e(Wt,ko),e(ko,vr),w(Un,vr,null),e(Wt,jp),e(Wt,kr),e(kr,Rp),f(o,Ci,m),f(o,Se,m),w(Qn,Se,null),e(Se,Pp),e(Se,Ht),e(Ht,Bp),e(Ht,Tr),e(Tr,Ap),e(Ht,Lp),e(Ht,wr),e(wr,Ip),e(Ht,Op),e(Se,Sp),e(Se,Gn),e(Gn,Np),e(Gn,Kn),e(Kn,Wp),e(Gn,Hp),e(Se,Up),e(Se,Jn),e(Jn,Qp),e(Jn,Xn),e(Xn,Gp),e(Jn,Kp),e(Se,Jp),e(Se,Re),w(Yn,Re,null),e(Re,Xp),e(Re,Ut),e(Ut,Yp),e(Ut,aa),e(aa,Zp),e(Ut,eh),e(Ut,yr),e(yr,th),e(Ut,oh),e(Re,nh),w(To,Re,null),e(Re,sh),e(Re,Dr),e(Dr,ah),e(Re,rh),w(Zn,Re,null),e(Re,ih),w(es,Re,null),f(o,ji,m),f(o,Qt,m),e(Qt,wo),e(wo,$r),w(ts,$r,null),e(Qt,lh),e(Qt,Er),e(Er,dh),f(o,Ri,m),f(o,Ne,m),w(os,Ne,null),e(Ne,ch),e(Ne,ns),e(ns,ph),e(ns,ss),e(ss,hh),e(ns,fh),e(Ne,mh),e(Ne,as),e(as,uh),e(as,rs),e(rs,gh),e(as,_h),e(Ne,bh),w(yo,Ne,null),e(Ne,vh),e(Ne,Ue),w(is,Ue,null),e(Ue,kh),e(Ue,Gt),e(Gt,Th),e(Gt,ra),e(ra,wh),e(Gt,yh),e(Gt,Fr),e(Fr,Dh),e(Gt,$h),e(Ue,Eh),w(Do,Ue,null),e(Ue,Fh),e(Ue,Vr),e(Vr,Vh),e(Ue,qh),w(ls,Ue,null),f(o,Pi,m),f(o,Kt,m),e(Kt,$o),e($o,qr),w(ds,qr,null),e(Kt,zh),e(Kt,zr),e(zr,Mh),f(o,Bi,m),f(o,ft,m),w(cs,ft,null),e(ft,xh),e(ft,Mr),e(Mr,Ch),e(ft,jh),e(ft,nt),w(ps,nt,null),e(nt,Rh),e(nt,xr),e(xr,Ph),e(nt,Bh),e(nt,hs),e(hs,Ah),e(hs,Cr),e(Cr,Lh),e(hs,Ih),e(nt,Oh),e(nt,Ze),e(Ze,Sh),e(Ze,jr),e(jr,Nh),e(Ze,Wh),e(Ze,Rr),e(Rr,Hh),e(Ze,Uh),e(Ze,Pr),e(Pr,Qh),e(Ze,Gh),e(Ze,Br),e(Br,Kh),e(Ze,Jh),f(o,Ai,m),f(o,Jt,m),e(Jt,Eo),e(Eo,Ar),w(fs,Ar,null),e(Jt,Xh),e(Jt,Lr),e(Lr,Yh),f(o,Li,m),f(o,We,m),w(ms,We,null),e(We,Zh),e(We,Xt),e(Xt,ef),e(Xt,Ir),e(Ir,tf),e(Xt,of),e(Xt,us),e(us,nf),e(Xt,sf),e(We,af),e(We,gs),e(gs,rf),e(gs,_s),e(_s,lf),e(gs,df),e(We,cf),w(Fo,We,null),e(We,pf),e(We,Qe),w(bs,Qe,null),e(Qe,hf),e(Qe,Yt),e(Yt,ff),e(Yt,ia),e(ia,mf),e(Yt,uf),e(Yt,Or),e(Or,gf),e(Yt,_f),e(Qe,bf),w(Vo,Qe,null),e(Qe,vf),e(Qe,Sr),e(Sr,kf),e(Qe,Tf),w(vs,Qe,null),f(o,Ii,m),f(o,Zt,m),e(Zt,qo),e(qo,Nr),w(ks,Nr,null),e(Zt,wf),e(Zt,Wr),e(Wr,yf),f(o,Oi,m),f(o,ze,m),w(Ts,ze,null),e(ze,Df),e(ze,Hr),e(Hr,$f),e(ze,Ef),e(ze,ws),e(ws,Ff),e(ws,ys),e(ys,Vf),e(ws,qf),e(ze,zf),e(ze,Ds),e(Ds,Mf),e(Ds,$s),e($s,xf),e(Ds,Cf),e(ze,jf),w(zo,ze,null),e(ze,Rf),e(ze,Ge),w(Es,Ge,null),e(Ge,Pf),e(Ge,eo),e(eo,Bf),e(eo,la),e(la,Af),e(eo,Lf),e(eo,Ur),e(Ur,If),e(eo,Of),e(Ge,Sf),w(Mo,Ge,null),e(Ge,Nf),e(Ge,Qr),e(Qr,Wf),e(Ge,Hf),w(Fs,Ge,null),f(o,Si,m),f(o,to,m),e(to,xo),e(xo,Gr),w(Vs,Gr,null),e(to,Uf),e(to,Kr),e(Kr,Qf),f(o,Ni,m),f(o,Me,m),w(qs,Me,null),e(Me,Gf),e(Me,Jr),e(Jr,Kf),e(Me,Jf),e(Me,zs),e(zs,Xf),e(zs,Ms),e(Ms,Yf),e(zs,Zf),e(Me,em),e(Me,xs),e(xs,tm),e(xs,Cs),e(Cs,om),e(xs,nm),e(Me,sm),w(Co,Me,null),e(Me,am),e(Me,Ke),w(js,Ke,null),e(Ke,rm),e(Ke,oo),e(oo,im),e(oo,da),e(da,lm),e(oo,dm),e(oo,Xr),e(Xr,cm),e(oo,pm),e(Ke,hm),w(jo,Ke,null),e(Ke,fm),e(Ke,Yr),e(Yr,mm),e(Ke,um),w(Rs,Ke,null),f(o,Wi,m),f(o,no,m),e(no,Ro),e(Ro,Zr),w(Ps,Zr,null),e(no,gm),e(no,ei),e(ei,_m),f(o,Hi,m),f(o,xe,m),w(Bs,xe,null),e(xe,bm),e(xe,so),e(so,vm),e(so,ti),e(ti,km),e(so,Tm),e(so,oi),e(oi,wm),e(so,ym),e(xe,Dm),e(xe,As),e(As,$m),e(As,Ls),e(Ls,Em),e(As,Fm),e(xe,Vm),e(xe,Is),e(Is,qm),e(Is,Os),e(Os,zm),e(Is,Mm),e(xe,xm),w(Po,xe,null),e(xe,Cm),e(xe,Je),w(Ss,Je,null),e(Je,jm),e(Je,ao),e(ao,Rm),e(ao,ca),e(ca,Pm),e(ao,Bm),e(ao,ni),e(ni,Am),e(ao,Lm),e(Je,Im),w(Bo,Je,null),e(Je,Om),e(Je,si),e(si,Sm),e(Je,Nm),w(Ns,Je,null),Ui=!0},p(o,[m]){const Ws={};m&2&&(Ws.$$scope={dirty:m,ctx:o}),po.$set(Ws);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),fo.$set(ai);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),uo.$set(ri);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),_o.$set(ii);const Hs={};m&2&&(Hs.$$scope={dirty:m,ctx:o}),vo.$set(Hs);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),To.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),yo.$set(di);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),Do.$set(ci);const Us={};m&2&&(Us.$$scope={dirty:m,ctx:o}),Fo.$set(Us);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),Vo.$set(pi);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),zo.$set(hi);const fi={};m&2&&(fi.$$scope={dirty:m,ctx:o}),Mo.$set(fi);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:o}),Co.$set(mi);const Qs={};m&2&&(Qs.$$scope={dirty:m,ctx:o}),jo.$set(Qs);const ui={};m&2&&(ui.$$scope={dirty:m,ctx:o}),Po.$set(ui);const Ao={};m&2&&(Ao.$$scope={dirty:m,ctx:o}),Bo.$set(Ao)},i(o){Ui||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(mn.$$.fragment,o),y(po.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(fo.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Fn.$$.fragment,o),y(Vn.$$.fragment,o),y(Cn.$$.fragment,o),y(_o.$$.fragment,o),y(jn.$$.fragment,o),y(Rn.$$.fragment,o),y(Pn.$$.fragment,o),y(Bn.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(vo.$$.fragment,o),y(Wn.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(Yn.$$.fragment,o),y(To.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(yo.$$.fragment,o),y(is.$$.fragment,o),y(Do.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(Fo.$$.fragment,o),y(bs.$$.fragment,o),y(Vo.$$.fragment,o),y(vs.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(zo.$$.fragment,o),y(Es.$$.fragment,o),y(Mo.$$.fragment,o),y(Fs.$$.fragment,o),y(Vs.$$.fragment,o),y(qs.$$.fragment,o),y(Co.$$.fragment,o),y(js.$$.fragment,o),y(jo.$$.fragment,o),y(Rs.$$.fragment,o),y(Ps.$$.fragment,o),y(Bs.$$.fragment,o),y(Po.$$.fragment,o),y(Ss.$$.fragment,o),y(Bo.$$.fragment,o),y(Ns.$$.fragment,o),Ui=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(tn.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(dn.$$.fragment,o),D(mn.$$.fragment,o),D(po.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(fo.$$.fragment,o),D(vn.$$.fragment,o),D(kn.$$.fragment,o),D(Dn.$$.fragment,o),D(uo.$$.fragment,o),D($n.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(Vn.$$.fragment,o),D(Cn.$$.fragment,o),D(_o.$$.fragment,o),D(jn.$$.fragment,o),D(Rn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(An.$$.fragment,o),D(Nn.$$.fragment,o),D(vo.$$.fragment,o),D(Wn.$$.fragment,o),D(Hn.$$.fragment,o),D(Un.$$.fragment,o),D(Qn.$$.fragment,o),D(Yn.$$.fragment,o),D(To.$$.fragment,o),D(Zn.$$.fragment,o),D(es.$$.fragment,o),D(ts.$$.fragment,o),D(os.$$.fragment,o),D(yo.$$.fragment,o),D(is.$$.fragment,o),D(Do.$$.fragment,o),D(ls.$$.fragment,o),D(ds.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(Fo.$$.fragment,o),D(bs.$$.fragment,o),D(Vo.$$.fragment,o),D(vs.$$.fragment,o),D(ks.$$.fragment,o),D(Ts.$$.fragment,o),D(zo.$$.fragment,o),D(Es.$$.fragment,o),D(Mo.$$.fragment,o),D(Fs.$$.fragment,o),D(Vs.$$.fragment,o),D(qs.$$.fragment,o),D(Co.$$.fragment,o),D(js.$$.fragment,o),D(jo.$$.fragment,o),D(Rs.$$.fragment,o),D(Ps.$$.fragment,o),D(Bs.$$.fragment,o),D(Po.$$.fragment,o),D(Ss.$$.fragment,o),D(Bo.$$.fragment,o),D(Ns.$$.fragment,o),Ui=!1},d(o){t(h),o&&t(F),o&&t(u),$(b),o&&t(J),o&&t(q),$(ee),o&&t(re),o&&t(N),o&&t(x),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(S),o&&t(X),o&&t(E),o&&t(G),o&&t(ye),o&&t(C),o&&t(_i),o&&t(et),o&&t(bi),o&&t(Vt),$(Go),o&&t(vi),o&&t(pt),$(Ko),o&&t(ki),o&&t(Mt),$(Xo),o&&t(Ti),o&&t(qe),$(Yo),$(tn),$(nn),$(sn),$(an),$(rn),o&&t(wi),o&&t(jt),$(ln),o&&t(yi),o&&t(Xe),$(dn),$(mn),$(po),$(un),o&&t(Di),o&&t(Pt),$(gn),o&&t($i),o&&t(ht),$(_n),$(bn),$(fo),o&&t(Ei),o&&t(Bt),$(vn),o&&t(Fi),o&&t(Ye),$(kn),$(Dn),$(uo),$($n),$(En),o&&t(Vi),o&&t(It),$(Fn),o&&t(qi),o&&t(Ie),$(Vn),$(Cn),$(_o),$(jn),$(Rn),$(Pn),o&&t(zi),o&&t(St),$(Bn),o&&t(Mi),o&&t(Oe),$(An),$(Nn),$(vo),$(Wn),$(Hn),o&&t(xi),o&&t(Wt),$(Un),o&&t(Ci),o&&t(Se),$(Qn),$(Yn),$(To),$(Zn),$(es),o&&t(ji),o&&t(Qt),$(ts),o&&t(Ri),o&&t(Ne),$(os),$(yo),$(is),$(Do),$(ls),o&&t(Pi),o&&t(Kt),$(ds),o&&t(Bi),o&&t(ft),$(cs),$(ps),o&&t(Ai),o&&t(Jt),$(fs),o&&t(Li),o&&t(We),$(ms),$(Fo),$(bs),$(Vo),$(vs),o&&t(Ii),o&&t(Zt),$(ks),o&&t(Oi),o&&t(ze),$(Ts),$(zo),$(Es),$(Mo),$(Fs),o&&t(Si),o&&t(to),$(Vs),o&&t(Ni),o&&t(Me),$(qs),$(Co),$(js),$(jo),$(Rs),o&&t(Wi),o&&t(no),$(Ps),o&&t(Hi),o&&t(xe),$(Bs),$(Po),$(Ss),$(Bo),$(Ns)}}}const Q_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function G_(O){return q_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eb extends $_{constructor(h){super();E_(this,h,G_,U_,F_,{})}}export{eb as default,Q_ as metadata};
