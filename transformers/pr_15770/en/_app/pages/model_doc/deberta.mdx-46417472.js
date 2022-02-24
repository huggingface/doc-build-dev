import{S as p_,i as h_,s as f_,e as r,k as l,w as k,t as n,L as u_,c as a,d as t,m as d,a as i,x as T,h as s,b as c,J as e,g as f,y as v,q as w,o as y,B as D}from"../../chunks/vendor-9e2b328e.js";import{T as Ie}from"../../chunks/Tip-76f97a76.js";import{D as J}from"../../chunks/Docstring-50fd6873.js";import{C as et}from"../../chunks/CodeBlock-88e23343.js";import{I as Re}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function m_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function g_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function __(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function b_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function k_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function T_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),$=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);$=a(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),q=a(V,"LI",{});var Ee=i(q);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,m,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,q),e(q,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function v_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function w_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),$=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);$=a(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),q=a(V,"LI",{});var Ee=i(q);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,m,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,q),e(q,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function y_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function D_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),$=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);$=a(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),q=a(V,"LI",{});var Ee=i(q);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,m,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,q),e(q,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function $_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function E_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),$=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);$=a(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),q=a(V,"LI",{});var Ee=i(q);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,m,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,q),e(q,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function F_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function q_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),$=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=r("p"),Y=n("This second option is useful when using "),A=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=r("ul"),P=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=r("code"),ce=n("model(inputs_ids)"),re=l(),C=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=r("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),m=d(p),g=a(p,"UL",{});var V=i(g);$=a(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),q=a(V,"LI",{});var Ee=i(q);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=a(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=a(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(x,"CODE",{});var Te=i(I);ue=s(Te,"model(inputs)"),Te.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=a(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=a(p,"UL",{});var j=i(M);P=a(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=a(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=a(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),re=d(j),C=a(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a(N,"CODE",{});var ae=i(L);ge=s(ae,"model([input_ids, attention_mask])"),ae.forEach(t),_e=s(N," or "),S=a(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=a(j,"LI",{});var ve=i(R);ke=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(ve,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),ve.forEach(t),j.forEach(t)},m(p,E){f(p,h,E),e(h,F),f(p,m,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,q),e(q,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,re),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function z_(O){let h,F,m,g,$;return{c(){h=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,$)},d(b){b&&t(h)}}}function M_(O){let h,F,m,g,$,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,re,C,me,L,ge,_e,S,K,be,R,ke,Q,oe,p,E,V,$e,Ee,x,pe,Te,ye,j,G,De,Fe,N,ae,we,ve,ie,$l,Os,El,Fl,Ws,ql,zl,Ho,Ml,Cl,Pl,Et,Rl,Hs,jl,xl,Us,Bl,Ll,pi,Ft,ro,$r,Uo,Al,Er,Il,hi,ze,Qo,Sl,Fr,Nl,Ol,dt,Go,Wl,qr,Hl,Ul,Ko,zr,Ql,Gl,Mr,Kl,Vl,ao,Vo,Jl,qt,Xl,Cr,Yl,Zl,Pr,ed,td,od,tt,Jo,nd,Rr,sd,rd,Xo,ad,zt,id,jr,ld,dd,xr,cd,pd,hd,Qs,Yo,fi,Mt,io,Br,Zo,fd,Lr,ud,ui,Je,en,md,tn,gd,Ar,_d,bd,kd,ct,on,Td,Ir,vd,wd,nn,Sr,yd,Dd,Nr,$d,Ed,ot,sn,Fd,Or,qd,zd,rn,Md,Ct,Cd,Wr,Pd,Rd,Hr,jd,xd,mi,Pt,lo,Ur,an,Bd,Qr,Ld,gi,Xe,ln,Ad,dn,Id,cn,Sd,Nd,Od,pn,Wd,hn,Hd,Ud,Qd,Se,fn,Gd,Rt,Kd,Gs,Vd,Jd,Gr,Xd,Yd,Zd,co,ec,Kr,tc,oc,un,_i,jt,po,Vr,mn,nc,Jr,sc,bi,xt,gn,rc,Xr,ac,ki,Bt,ho,Yr,_n,ic,Zr,lc,Ti,Ye,bn,dc,Lt,cc,ea,pc,hc,kn,fc,uc,mc,Tn,gc,vn,_c,bc,kc,Ne,wn,Tc,At,vc,Ks,wc,yc,ta,Dc,$c,Ec,fo,Fc,oa,qc,zc,yn,vi,It,uo,na,Dn,Mc,sa,Cc,wi,je,$n,Pc,ra,Rc,jc,En,xc,Fn,Bc,Lc,Ac,qn,Ic,zn,Sc,Nc,Oc,qe,Mn,Wc,St,Hc,Vs,Uc,Qc,aa,Gc,Kc,Vc,mo,Jc,ia,Xc,Yc,Cn,Zc,la,ep,tp,Pn,yi,Nt,go,da,Rn,op,ca,np,Di,xe,jn,sp,pa,rp,ap,xn,ip,Bn,lp,dp,cp,Ln,pp,An,hp,fp,up,Oe,In,mp,Ot,gp,Js,_p,bp,ha,kp,Tp,vp,_o,wp,fa,yp,Dp,Sn,$i,Wt,bo,ua,Nn,$p,ma,Ep,Ei,Be,On,Fp,Ht,qp,ga,zp,Mp,_a,Cp,Pp,Rp,Wn,jp,Hn,xp,Bp,Lp,Un,Ap,Qn,Ip,Sp,Np,We,Gn,Op,Ut,Wp,Xs,Hp,Up,ba,Qp,Gp,Kp,ko,Vp,ka,Jp,Xp,Kn,Fi,Qt,To,Ta,Vn,Yp,va,Zp,qi,Le,Jn,eh,Xn,th,Yn,oh,nh,sh,Zn,rh,es,ah,ih,lh,vo,dh,He,ts,ch,Gt,ph,Ys,hh,fh,wa,uh,mh,gh,wo,_h,ya,bh,kh,os,zi,Kt,yo,Da,ns,Th,$a,vh,Mi,lt,ss,wh,Ea,yh,Dh,nt,rs,$h,Fa,Eh,Fh,as,qh,qa,zh,Mh,Ch,Ze,Ph,za,Rh,jh,Ma,xh,Bh,Ca,Lh,Ah,Pa,Ih,Sh,Ci,Vt,Do,Ra,is,Nh,ja,Oh,Pi,Ae,ls,Wh,Jt,Hh,xa,Uh,Qh,ds,Gh,Kh,Vh,cs,Jh,ps,Xh,Yh,Zh,$o,ef,Ue,hs,tf,Xt,of,Zs,nf,sf,Ba,rf,af,lf,Eo,df,La,cf,pf,fs,Ri,Yt,Fo,Aa,us,hf,Ia,ff,ji,Me,ms,uf,Sa,mf,gf,gs,_f,_s,bf,kf,Tf,bs,vf,ks,wf,yf,Df,qo,$f,Qe,Ts,Ef,Zt,Ff,er,qf,zf,Na,Mf,Cf,Pf,zo,Rf,Oa,jf,xf,vs,xi,eo,Mo,Wa,ws,Bf,Ha,Lf,Bi,Ce,ys,Af,Ua,If,Sf,Ds,Nf,$s,Of,Wf,Hf,Es,Uf,Fs,Qf,Gf,Kf,Co,Vf,Ge,qs,Jf,to,Xf,tr,Yf,Zf,Qa,eu,tu,ou,Po,nu,Ga,su,ru,zs,Li,oo,Ro,Ka,Ms,au,Va,iu,Ai,Pe,Cs,lu,no,du,Ja,cu,pu,Xa,hu,fu,uu,Ps,mu,Rs,gu,_u,bu,js,ku,xs,Tu,vu,wu,jo,yu,Ke,Bs,Du,so,$u,or,Eu,Fu,Ya,qu,zu,Mu,xo,Cu,Za,Pu,Ru,Ls,Ii;return b=new Re({}),ee=new Re({}),j=new Re({}),we=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Re({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),on=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),an=new Re({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15770/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ie({props:{$$slots:{default:[m_]},$$scope:{ctx:O}}}),un=new et({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mn=new Re({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_n=new Re({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15770/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Ie({props:{$$slots:{default:[g_]},$$scope:{ctx:O}}}),yn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new Re({}),$n=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15770/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Ie({props:{$$slots:{default:[__]},$$scope:{ctx:O}}}),Cn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new Re({}),jn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),In=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15770/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ie({props:{$$slots:{default:[b_]},$$scope:{ctx:O}}}),Sn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new Re({}),On=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15770/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Ie({props:{$$slots:{default:[k_]},$$scope:{ctx:O}}}),Kn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Vn=new Re({}),Jn=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1088",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vo=new Ie({props:{$$slots:{default:[T_]},$$scope:{ctx:O}}}),ts=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1094",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Ie({props:{$$slots:{default:[v_]},$$scope:{ctx:O}}}),os=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ns=new Re({}),ss=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L993"}}),rs=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),is=new Re({}),ls=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1150",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new Ie({props:{$$slots:{default:[w_]},$$scope:{ctx:O}}}),hs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1166",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Eo=new Ie({props:{$$slots:{default:[y_]},$$scope:{ctx:O}}}),fs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),us=new Re({}),ms=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1252",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new Ie({props:{$$slots:{default:[D_]},$$scope:{ctx:O}}}),Ts=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1270",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Ie({props:{$$slots:{default:[$_]},$$scope:{ctx:O}}}),vs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ws=new Re({}),ys=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1355",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ie({props:{$$slots:{default:[E_]},$$scope:{ctx:O}}}),qs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1367",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new Ie({props:{$$slots:{default:[F_]},$$scope:{ctx:O}}}),zs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ms=new Re({}),Cs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1448",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15770/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Ie({props:{$$slots:{default:[q_]},$$scope:{ctx:O}}}),Bs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15770/src/transformers/models/deberta/modeling_tf_deberta.py#L1459",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15770/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_15770/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Ie({props:{$$slots:{default:[z_]},$$scope:{ctx:O}}}),Ls=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=r("meta"),F=l(),m=r("h1"),g=r("a"),$=r("span"),k(b.$$.fragment),_=l(),q=r("span"),he=n("DeBERTa"),X=l(),z=r("h2"),Y=r("a"),A=r("span"),k(ee.$$.fragment),fe=l(),I=r("span"),ue=n("Overview"),le=l(),W=r("p"),B=n("The DeBERTa model was proposed in "),te=r("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
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
contributed by `),oe=r("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=r("a"),$e=n("here"),Ee=n("."),x=l(),pe=r("h2"),Te=r("a"),ye=r("span"),k(j.$$.fragment),G=l(),De=r("span"),Fe=n("DebertaConfig"),N=l(),ae=r("div"),k(we.$$.fragment),ve=l(),ie=r("p"),$l=n("This is the configuration class to store the configuration of a "),Os=r("a"),El=n("DebertaModel"),Fl=n(" or a "),Ws=r("a"),ql=n("TFDebertaModel"),zl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r("a"),Ml=n("microsoft/deberta-base"),Cl=n(" architecture."),Pl=l(),Et=r("p"),Rl=n("Configuration objects inherit from "),Hs=r("a"),jl=n("PretrainedConfig"),xl=n(` and can be used to control the model outputs. Read the
documentation from `),Us=r("a"),Bl=n("PretrainedConfig"),Ll=n(" for more information."),pi=l(),Ft=r("h2"),ro=r("a"),$r=r("span"),k(Uo.$$.fragment),Al=l(),Er=r("span"),Il=n("DebertaTokenizer"),hi=l(),ze=r("div"),k(Qo.$$.fragment),Sl=l(),Fr=r("p"),Nl=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Ol=l(),dt=r("div"),k(Go.$$.fragment),Wl=l(),qr=r("p"),Hl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ul=l(),Ko=r("ul"),zr=r("li"),Ql=n("single sequence: [CLS] X [SEP]"),Gl=l(),Mr=r("li"),Kl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Vl=l(),ao=r("div"),k(Vo.$$.fragment),Jl=l(),qt=r("p"),Xl=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cr=r("code"),Yl=n("prepare_for_model"),Zl=n(" or "),Pr=r("code"),ed=n("encode_plus"),td=n(" methods."),od=l(),tt=r("div"),k(Jo.$$.fragment),nd=l(),Rr=r("p"),sd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),rd=l(),k(Xo.$$.fragment),ad=l(),zt=r("p"),id=n("If "),jr=r("code"),ld=n("token_ids_1"),dd=n(" is "),xr=r("code"),cd=n("None"),pd=n(", this method only returns the first portion of the mask (0s)."),hd=l(),Qs=r("div"),k(Yo.$$.fragment),fi=l(),Mt=r("h2"),io=r("a"),Br=r("span"),k(Zo.$$.fragment),fd=l(),Lr=r("span"),ud=n("DebertaTokenizerFast"),ui=l(),Je=r("div"),k(en.$$.fragment),md=l(),tn=r("p"),gd=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ar=r("em"),_d=n("tokenizers"),bd=n(" library."),kd=l(),ct=r("div"),k(on.$$.fragment),Td=l(),Ir=r("p"),vd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),wd=l(),nn=r("ul"),Sr=r("li"),yd=n("single sequence: [CLS] X [SEP]"),Dd=l(),Nr=r("li"),$d=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ed=l(),ot=r("div"),k(sn.$$.fragment),Fd=l(),Or=r("p"),qd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),zd=l(),k(rn.$$.fragment),Md=l(),Ct=r("p"),Cd=n("If "),Wr=r("code"),Pd=n("token_ids_1"),Rd=n(" is "),Hr=r("code"),jd=n("None"),xd=n(", this method only returns the first portion of the mask (0s)."),mi=l(),Pt=r("h2"),lo=r("a"),Ur=r("span"),k(an.$$.fragment),Bd=l(),Qr=r("span"),Ld=n("DebertaModel"),gi=l(),Xe=r("div"),k(ln.$$.fragment),Ad=l(),dn=r("p"),Id=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r("a"),Sd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Nd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Od=l(),pn=r("p"),Wd=n("This model is also a PyTorch "),hn=r("a"),Hd=n("torch.nn.Module"),Ud=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Qd=l(),Se=r("div"),k(fn.$$.fragment),Gd=l(),Rt=r("p"),Kd=n("The "),Gs=r("a"),Vd=n("DebertaModel"),Jd=n(" forward method, overrides the "),Gr=r("code"),Xd=n("__call__"),Yd=n(" special method."),Zd=l(),k(co.$$.fragment),ec=l(),Kr=r("p"),tc=n("Example:"),oc=l(),k(un.$$.fragment),_i=l(),jt=r("h2"),po=r("a"),Vr=r("span"),k(mn.$$.fragment),nc=l(),Jr=r("span"),sc=n("DebertaPreTrainedModel"),bi=l(),xt=r("div"),k(gn.$$.fragment),rc=l(),Xr=r("p"),ac=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ki=l(),Bt=r("h2"),ho=r("a"),Yr=r("span"),k(_n.$$.fragment),ic=l(),Zr=r("span"),lc=n("DebertaForMaskedLM"),Ti=l(),Ye=r("div"),k(bn.$$.fragment),dc=l(),Lt=r("p"),cc=n("DeBERTa Model with a "),ea=r("code"),pc=n("language modeling"),hc=n(` head on top.
The DeBERTa model was proposed in `),kn=r("a"),fc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),uc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mc=l(),Tn=r("p"),gc=n("This model is also a PyTorch "),vn=r("a"),_c=n("torch.nn.Module"),bc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),kc=l(),Ne=r("div"),k(wn.$$.fragment),Tc=l(),At=r("p"),vc=n("The "),Ks=r("a"),wc=n("DebertaForMaskedLM"),yc=n(" forward method, overrides the "),ta=r("code"),Dc=n("__call__"),$c=n(" special method."),Ec=l(),k(fo.$$.fragment),Fc=l(),oa=r("p"),qc=n("Example:"),zc=l(),k(yn.$$.fragment),vi=l(),It=r("h2"),uo=r("a"),na=r("span"),k(Dn.$$.fragment),Mc=l(),sa=r("span"),Cc=n("DebertaForSequenceClassification"),wi=l(),je=r("div"),k($n.$$.fragment),Pc=l(),ra=r("p"),Rc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jc=l(),En=r("p"),xc=n("The DeBERTa model was proposed in "),Fn=r("a"),Bc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ac=l(),qn=r("p"),Ic=n("This model is also a PyTorch "),zn=r("a"),Sc=n("torch.nn.Module"),Nc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Oc=l(),qe=r("div"),k(Mn.$$.fragment),Wc=l(),St=r("p"),Hc=n("The "),Vs=r("a"),Uc=n("DebertaForSequenceClassification"),Qc=n(" forward method, overrides the "),aa=r("code"),Gc=n("__call__"),Kc=n(" special method."),Vc=l(),k(mo.$$.fragment),Jc=l(),ia=r("p"),Xc=n("Example of single-label classification:"),Yc=l(),k(Cn.$$.fragment),Zc=l(),la=r("p"),ep=n("Example of multi-label classification:"),tp=l(),k(Pn.$$.fragment),yi=l(),Nt=r("h2"),go=r("a"),da=r("span"),k(Rn.$$.fragment),op=l(),ca=r("span"),np=n("DebertaForTokenClassification"),Di=l(),xe=r("div"),k(jn.$$.fragment),sp=l(),pa=r("p"),rp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ap=l(),xn=r("p"),ip=n("The DeBERTa model was proposed in "),Bn=r("a"),lp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cp=l(),Ln=r("p"),pp=n("This model is also a PyTorch "),An=r("a"),hp=n("torch.nn.Module"),fp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),up=l(),Oe=r("div"),k(In.$$.fragment),mp=l(),Ot=r("p"),gp=n("The "),Js=r("a"),_p=n("DebertaForTokenClassification"),bp=n(" forward method, overrides the "),ha=r("code"),kp=n("__call__"),Tp=n(" special method."),vp=l(),k(_o.$$.fragment),wp=l(),fa=r("p"),yp=n("Example:"),Dp=l(),k(Sn.$$.fragment),$i=l(),Wt=r("h2"),bo=r("a"),ua=r("span"),k(Nn.$$.fragment),$p=l(),ma=r("span"),Ep=n("DebertaForQuestionAnswering"),Ei=l(),Be=r("div"),k(On.$$.fragment),Fp=l(),Ht=r("p"),qp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=r("code"),zp=n("span start logits"),Mp=n(" and "),_a=r("code"),Cp=n("span end logits"),Pp=n(")."),Rp=l(),Wn=r("p"),jp=n("The DeBERTa model was proposed in "),Hn=r("a"),xp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lp=l(),Un=r("p"),Ap=n("This model is also a PyTorch "),Qn=r("a"),Ip=n("torch.nn.Module"),Sp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Np=l(),We=r("div"),k(Gn.$$.fragment),Op=l(),Ut=r("p"),Wp=n("The "),Xs=r("a"),Hp=n("DebertaForQuestionAnswering"),Up=n(" forward method, overrides the "),ba=r("code"),Qp=n("__call__"),Gp=n(" special method."),Kp=l(),k(ko.$$.fragment),Vp=l(),ka=r("p"),Jp=n("Example:"),Xp=l(),k(Kn.$$.fragment),Fi=l(),Qt=r("h2"),To=r("a"),Ta=r("span"),k(Vn.$$.fragment),Yp=l(),va=r("span"),Zp=n("TFDebertaModel"),qi=l(),Le=r("div"),k(Jn.$$.fragment),eh=l(),Xn=r("p"),th=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=r("a"),oh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),nh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sh=l(),Zn=r("p"),rh=n("This model is also a "),es=r("a"),ah=n("tf.keras.Model"),ih=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh=l(),k(vo.$$.fragment),dh=l(),He=r("div"),k(ts.$$.fragment),ch=l(),Gt=r("p"),ph=n("The "),Ys=r("a"),hh=n("TFDebertaModel"),fh=n(" forward method, overrides the "),wa=r("code"),uh=n("__call__"),mh=n(" special method."),gh=l(),k(wo.$$.fragment),_h=l(),ya=r("p"),bh=n("Example:"),kh=l(),k(os.$$.fragment),zi=l(),Kt=r("h2"),yo=r("a"),Da=r("span"),k(ns.$$.fragment),Th=l(),$a=r("span"),vh=n("TFDebertaPreTrainedModel"),Mi=l(),lt=r("div"),k(ss.$$.fragment),wh=l(),Ea=r("p"),yh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Dh=l(),nt=r("div"),k(rs.$$.fragment),$h=l(),Fa=r("p"),Eh=n("Calls the model on new inputs and returns the outputs as tensors."),Fh=l(),as=r("p"),qh=n("In this case "),qa=r("code"),zh=n("call()"),Mh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Ch=l(),Ze=r("p"),Ph=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=r("code"),Rh=n("tf.keras.Model"),jh=n(`.
To call a model on an input, always use the `),Ma=r("code"),xh=n("__call__()"),Bh=n(` method,
i.e. `),Ca=r("code"),Lh=n("model(inputs)"),Ah=n(", which relies on the underlying "),Pa=r("code"),Ih=n("call()"),Sh=n(" method."),Ci=l(),Vt=r("h2"),Do=r("a"),Ra=r("span"),k(is.$$.fragment),Nh=l(),ja=r("span"),Oh=n("TFDebertaForMaskedLM"),Pi=l(),Ae=r("div"),k(ls.$$.fragment),Wh=l(),Jt=r("p"),Hh=n("DeBERTa Model with a "),xa=r("code"),Uh=n("language modeling"),Qh=n(` head on top.
The DeBERTa model was proposed in `),ds=r("a"),Gh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vh=l(),cs=r("p"),Jh=n("This model is also a "),ps=r("a"),Xh=n("tf.keras.Model"),Yh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zh=l(),k($o.$$.fragment),ef=l(),Ue=r("div"),k(hs.$$.fragment),tf=l(),Xt=r("p"),of=n("The "),Zs=r("a"),nf=n("TFDebertaForMaskedLM"),sf=n(" forward method, overrides the "),Ba=r("code"),rf=n("__call__"),af=n(" special method."),lf=l(),k(Eo.$$.fragment),df=l(),La=r("p"),cf=n("Example:"),pf=l(),k(fs.$$.fragment),Ri=l(),Yt=r("h2"),Fo=r("a"),Aa=r("span"),k(us.$$.fragment),hf=l(),Ia=r("span"),ff=n("TFDebertaForSequenceClassification"),ji=l(),Me=r("div"),k(ms.$$.fragment),uf=l(),Sa=r("p"),mf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gf=l(),gs=r("p"),_f=n("The DeBERTa model was proposed in "),_s=r("a"),bf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tf=l(),bs=r("p"),vf=n("This model is also a "),ks=r("a"),wf=n("tf.keras.Model"),yf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=l(),k(qo.$$.fragment),$f=l(),Qe=r("div"),k(Ts.$$.fragment),Ef=l(),Zt=r("p"),Ff=n("The "),er=r("a"),qf=n("TFDebertaForSequenceClassification"),zf=n(" forward method, overrides the "),Na=r("code"),Mf=n("__call__"),Cf=n(" special method."),Pf=l(),k(zo.$$.fragment),Rf=l(),Oa=r("p"),jf=n("Example:"),xf=l(),k(vs.$$.fragment),xi=l(),eo=r("h2"),Mo=r("a"),Wa=r("span"),k(ws.$$.fragment),Bf=l(),Ha=r("span"),Lf=n("TFDebertaForTokenClassification"),Bi=l(),Ce=r("div"),k(ys.$$.fragment),Af=l(),Ua=r("p"),If=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sf=l(),Ds=r("p"),Nf=n("The DeBERTa model was proposed in "),$s=r("a"),Of=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hf=l(),Es=r("p"),Uf=n("This model is also a "),Fs=r("a"),Qf=n("tf.keras.Model"),Gf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kf=l(),k(Co.$$.fragment),Vf=l(),Ge=r("div"),k(qs.$$.fragment),Jf=l(),to=r("p"),Xf=n("The "),tr=r("a"),Yf=n("TFDebertaForTokenClassification"),Zf=n(" forward method, overrides the "),Qa=r("code"),eu=n("__call__"),tu=n(" special method."),ou=l(),k(Po.$$.fragment),nu=l(),Ga=r("p"),su=n("Example:"),ru=l(),k(zs.$$.fragment),Li=l(),oo=r("h2"),Ro=r("a"),Ka=r("span"),k(Ms.$$.fragment),au=l(),Va=r("span"),iu=n("TFDebertaForQuestionAnswering"),Ai=l(),Pe=r("div"),k(Cs.$$.fragment),lu=l(),no=r("p"),du=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=r("code"),cu=n("span start logits"),pu=n(" and "),Xa=r("code"),hu=n("span end logits"),fu=n(")."),uu=l(),Ps=r("p"),mu=n("The DeBERTa model was proposed in "),Rs=r("a"),gu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_u=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bu=l(),js=r("p"),ku=n("This model is also a "),xs=r("a"),Tu=n("tf.keras.Model"),vu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wu=l(),k(jo.$$.fragment),yu=l(),Ke=r("div"),k(Bs.$$.fragment),Du=l(),so=r("p"),$u=n("The "),or=r("a"),Eu=n("TFDebertaForQuestionAnswering"),Fu=n(" forward method, overrides the "),Ya=r("code"),qu=n("__call__"),zu=n(" special method."),Mu=l(),k(xo.$$.fragment),Cu=l(),Za=r("p"),Pu=n("Example:"),Ru=l(),k(Ls.$$.fragment),this.h()},l(o){const u=u_('[data-svelte="svelte-1phssyn"]',document.head);h=a(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(o),m=a(o,"H1",{class:!0});var As=i(m);g=a(As,"A",{id:!0,class:!0,href:!0});var ei=i(g);$=a(ei,"SPAN",{});var ti=i($);T(b.$$.fragment,ti),ti.forEach(t),ei.forEach(t),_=d(As),q=a(As,"SPAN",{});var oi=i(q);he=s(oi,"DeBERTa"),oi.forEach(t),As.forEach(t),X=d(o),z=a(o,"H2",{class:!0});var Is=i(z);Y=a(Is,"A",{id:!0,class:!0,href:!0});var ni=i(Y);A=a(ni,"SPAN",{});var si=i(A);T(ee.$$.fragment,si),si.forEach(t),ni.forEach(t),fe=d(Is),I=a(Is,"SPAN",{});var ri=i(I);ue=s(ri,"Overview"),ri.forEach(t),Is.forEach(t),le=d(o),W=a(o,"P",{});var Ss=i(W);B=s(Ss,"The DeBERTa model was proposed in "),te=a(Ss,"A",{href:!0,rel:!0});var ai=i(te);Z=s(ai,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ai.forEach(t),M=s(Ss,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ss.forEach(t),P=d(o),ne=a(o,"P",{});var ii=i(ne);H=s(ii,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ii.forEach(t),de=d(o),se=a(o,"P",{});var li=i(se);U=s(li,"The abstract from the paper is the following:"),li.forEach(t),ce=d(o),re=a(o,"P",{});var di=i(re);C=a(di,"EM",{});var Ns=i(C);me=s(Ns,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a(Ns,"A",{href:!0,rel:!0});var ci=i(L);ge=s(ci,"https://github.com/microsoft/DeBERTa"),ci.forEach(t),_e=s(Ns,"."),Ns.forEach(t),di.forEach(t),S=d(o),K=a(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),R=a(Bo,"A",{href:!0,rel:!0});var ju=i(R);ke=s(ju,"DeBERTa"),ju.forEach(t),Q=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=a(Bo,"A",{href:!0,rel:!0});var xu=i(oe);p=s(xu,"kamalkraj"),xu.forEach(t),E=s(Bo," . The original code can be found "),V=a(Bo,"A",{href:!0,rel:!0});var Bu=i(V);$e=s(Bu,"here"),Bu.forEach(t),Ee=s(Bo,"."),Bo.forEach(t),x=d(o),pe=a(o,"H2",{class:!0});var Si=i(pe);Te=a(Si,"A",{id:!0,class:!0,href:!0});var Lu=i(Te);ye=a(Lu,"SPAN",{});var Au=i(ye);T(j.$$.fragment,Au),Au.forEach(t),Lu.forEach(t),G=d(Si),De=a(Si,"SPAN",{});var Iu=i(De);Fe=s(Iu,"DebertaConfig"),Iu.forEach(t),Si.forEach(t),N=d(o),ae=a(o,"DIV",{class:!0});var nr=i(ae);T(we.$$.fragment,nr),ve=d(nr),ie=a(nr,"P",{});var Lo=i(ie);$l=s(Lo,"This is the configuration class to store the configuration of a "),Os=a(Lo,"A",{href:!0});var Su=i(Os);El=s(Su,"DebertaModel"),Su.forEach(t),Fl=s(Lo," or a "),Ws=a(Lo,"A",{href:!0});var Nu=i(Ws);ql=s(Nu,"TFDebertaModel"),Nu.forEach(t),zl=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a(Lo,"A",{href:!0,rel:!0});var Ou=i(Ho);Ml=s(Ou,"microsoft/deberta-base"),Ou.forEach(t),Cl=s(Lo," architecture."),Lo.forEach(t),Pl=d(nr),Et=a(nr,"P",{});var sr=i(Et);Rl=s(sr,"Configuration objects inherit from "),Hs=a(sr,"A",{href:!0});var Wu=i(Hs);jl=s(Wu,"PretrainedConfig"),Wu.forEach(t),xl=s(sr,` and can be used to control the model outputs. Read the
documentation from `),Us=a(sr,"A",{href:!0});var Hu=i(Us);Bl=s(Hu,"PretrainedConfig"),Hu.forEach(t),Ll=s(sr," for more information."),sr.forEach(t),nr.forEach(t),pi=d(o),Ft=a(o,"H2",{class:!0});var Ni=i(Ft);ro=a(Ni,"A",{id:!0,class:!0,href:!0});var Uu=i(ro);$r=a(Uu,"SPAN",{});var Qu=i($r);T(Uo.$$.fragment,Qu),Qu.forEach(t),Uu.forEach(t),Al=d(Ni),Er=a(Ni,"SPAN",{});var Gu=i(Er);Il=s(Gu,"DebertaTokenizer"),Gu.forEach(t),Ni.forEach(t),hi=d(o),ze=a(o,"DIV",{class:!0});var st=i(ze);T(Qo.$$.fragment,st),Sl=d(st),Fr=a(st,"P",{});var Ku=i(Fr);Nl=s(Ku,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Ku.forEach(t),Ol=d(st),dt=a(st,"DIV",{class:!0});var rr=i(dt);T(Go.$$.fragment,rr),Wl=d(rr),qr=a(rr,"P",{});var Vu=i(qr);Hl=s(Vu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vu.forEach(t),Ul=d(rr),Ko=a(rr,"UL",{});var Oi=i(Ko);zr=a(Oi,"LI",{});var Ju=i(zr);Ql=s(Ju,"single sequence: [CLS] X [SEP]"),Ju.forEach(t),Gl=d(Oi),Mr=a(Oi,"LI",{});var Xu=i(Mr);Kl=s(Xu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Xu.forEach(t),Oi.forEach(t),rr.forEach(t),Vl=d(st),ao=a(st,"DIV",{class:!0});var Wi=i(ao);T(Vo.$$.fragment,Wi),Jl=d(Wi),qt=a(Wi,"P",{});var ar=i(qt);Xl=s(ar,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Cr=a(ar,"CODE",{});var Yu=i(Cr);Yl=s(Yu,"prepare_for_model"),Yu.forEach(t),Zl=s(ar," or "),Pr=a(ar,"CODE",{});var Zu=i(Pr);ed=s(Zu,"encode_plus"),Zu.forEach(t),td=s(ar," methods."),ar.forEach(t),Wi.forEach(t),od=d(st),tt=a(st,"DIV",{class:!0});var Ao=i(tt);T(Jo.$$.fragment,Ao),nd=d(Ao),Rr=a(Ao,"P",{});var em=i(Rr);sd=s(em,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),em.forEach(t),rd=d(Ao),T(Xo.$$.fragment,Ao),ad=d(Ao),zt=a(Ao,"P",{});var ir=i(zt);id=s(ir,"If "),jr=a(ir,"CODE",{});var tm=i(jr);ld=s(tm,"token_ids_1"),tm.forEach(t),dd=s(ir," is "),xr=a(ir,"CODE",{});var om=i(xr);cd=s(om,"None"),om.forEach(t),pd=s(ir,", this method only returns the first portion of the mask (0s)."),ir.forEach(t),Ao.forEach(t),hd=d(st),Qs=a(st,"DIV",{class:!0});var nm=i(Qs);T(Yo.$$.fragment,nm),nm.forEach(t),st.forEach(t),fi=d(o),Mt=a(o,"H2",{class:!0});var Hi=i(Mt);io=a(Hi,"A",{id:!0,class:!0,href:!0});var sm=i(io);Br=a(sm,"SPAN",{});var rm=i(Br);T(Zo.$$.fragment,rm),rm.forEach(t),sm.forEach(t),fd=d(Hi),Lr=a(Hi,"SPAN",{});var am=i(Lr);ud=s(am,"DebertaTokenizerFast"),am.forEach(t),Hi.forEach(t),ui=d(o),Je=a(o,"DIV",{class:!0});var Io=i(Je);T(en.$$.fragment,Io),md=d(Io),tn=a(Io,"P",{});var Ui=i(tn);gd=s(Ui,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Ar=a(Ui,"EM",{});var im=i(Ar);_d=s(im,"tokenizers"),im.forEach(t),bd=s(Ui," library."),Ui.forEach(t),kd=d(Io),ct=a(Io,"DIV",{class:!0});var lr=i(ct);T(on.$$.fragment,lr),Td=d(lr),Ir=a(lr,"P",{});var lm=i(Ir);vd=s(lm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),lm.forEach(t),wd=d(lr),nn=a(lr,"UL",{});var Qi=i(nn);Sr=a(Qi,"LI",{});var dm=i(Sr);yd=s(dm,"single sequence: [CLS] X [SEP]"),dm.forEach(t),Dd=d(Qi),Nr=a(Qi,"LI",{});var cm=i(Nr);$d=s(cm,"pair of sequences: [CLS] A [SEP] B [SEP]"),cm.forEach(t),Qi.forEach(t),lr.forEach(t),Ed=d(Io),ot=a(Io,"DIV",{class:!0});var So=i(ot);T(sn.$$.fragment,So),Fd=d(So),Or=a(So,"P",{});var pm=i(Or);qd=s(pm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),pm.forEach(t),zd=d(So),T(rn.$$.fragment,So),Md=d(So),Ct=a(So,"P",{});var dr=i(Ct);Cd=s(dr,"If "),Wr=a(dr,"CODE",{});var hm=i(Wr);Pd=s(hm,"token_ids_1"),hm.forEach(t),Rd=s(dr," is "),Hr=a(dr,"CODE",{});var fm=i(Hr);jd=s(fm,"None"),fm.forEach(t),xd=s(dr,", this method only returns the first portion of the mask (0s)."),dr.forEach(t),So.forEach(t),Io.forEach(t),mi=d(o),Pt=a(o,"H2",{class:!0});var Gi=i(Pt);lo=a(Gi,"A",{id:!0,class:!0,href:!0});var um=i(lo);Ur=a(um,"SPAN",{});var mm=i(Ur);T(an.$$.fragment,mm),mm.forEach(t),um.forEach(t),Bd=d(Gi),Qr=a(Gi,"SPAN",{});var gm=i(Qr);Ld=s(gm,"DebertaModel"),gm.forEach(t),Gi.forEach(t),gi=d(o),Xe=a(o,"DIV",{class:!0});var No=i(Xe);T(ln.$$.fragment,No),Ad=d(No),dn=a(No,"P",{});var Ki=i(dn);Id=s(Ki,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a(Ki,"A",{href:!0,rel:!0});var _m=i(cn);Sd=s(_m,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_m.forEach(t),Nd=s(Ki,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ki.forEach(t),Od=d(No),pn=a(No,"P",{});var Vi=i(pn);Wd=s(Vi,"This model is also a PyTorch "),hn=a(Vi,"A",{href:!0,rel:!0});var bm=i(hn);Hd=s(bm,"torch.nn.Module"),bm.forEach(t),Ud=s(Vi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vi.forEach(t),Qd=d(No),Se=a(No,"DIV",{class:!0});var pt=i(Se);T(fn.$$.fragment,pt),Gd=d(pt),Rt=a(pt,"P",{});var cr=i(Rt);Kd=s(cr,"The "),Gs=a(cr,"A",{href:!0});var km=i(Gs);Vd=s(km,"DebertaModel"),km.forEach(t),Jd=s(cr," forward method, overrides the "),Gr=a(cr,"CODE",{});var Tm=i(Gr);Xd=s(Tm,"__call__"),Tm.forEach(t),Yd=s(cr," special method."),cr.forEach(t),Zd=d(pt),T(co.$$.fragment,pt),ec=d(pt),Kr=a(pt,"P",{});var vm=i(Kr);tc=s(vm,"Example:"),vm.forEach(t),oc=d(pt),T(un.$$.fragment,pt),pt.forEach(t),No.forEach(t),_i=d(o),jt=a(o,"H2",{class:!0});var Ji=i(jt);po=a(Ji,"A",{id:!0,class:!0,href:!0});var wm=i(po);Vr=a(wm,"SPAN",{});var ym=i(Vr);T(mn.$$.fragment,ym),ym.forEach(t),wm.forEach(t),nc=d(Ji),Jr=a(Ji,"SPAN",{});var Dm=i(Jr);sc=s(Dm,"DebertaPreTrainedModel"),Dm.forEach(t),Ji.forEach(t),bi=d(o),xt=a(o,"DIV",{class:!0});var Xi=i(xt);T(gn.$$.fragment,Xi),rc=d(Xi),Xr=a(Xi,"P",{});var $m=i(Xr);ac=s($m,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$m.forEach(t),Xi.forEach(t),ki=d(o),Bt=a(o,"H2",{class:!0});var Yi=i(Bt);ho=a(Yi,"A",{id:!0,class:!0,href:!0});var Em=i(ho);Yr=a(Em,"SPAN",{});var Fm=i(Yr);T(_n.$$.fragment,Fm),Fm.forEach(t),Em.forEach(t),ic=d(Yi),Zr=a(Yi,"SPAN",{});var qm=i(Zr);lc=s(qm,"DebertaForMaskedLM"),qm.forEach(t),Yi.forEach(t),Ti=d(o),Ye=a(o,"DIV",{class:!0});var Oo=i(Ye);T(bn.$$.fragment,Oo),dc=d(Oo),Lt=a(Oo,"P",{});var pr=i(Lt);cc=s(pr,"DeBERTa Model with a "),ea=a(pr,"CODE",{});var zm=i(ea);pc=s(zm,"language modeling"),zm.forEach(t),hc=s(pr,` head on top.
The DeBERTa model was proposed in `),kn=a(pr,"A",{href:!0,rel:!0});var Mm=i(kn);fc=s(Mm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mm.forEach(t),uc=s(pr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pr.forEach(t),mc=d(Oo),Tn=a(Oo,"P",{});var Zi=i(Tn);gc=s(Zi,"This model is also a PyTorch "),vn=a(Zi,"A",{href:!0,rel:!0});var Cm=i(vn);_c=s(Cm,"torch.nn.Module"),Cm.forEach(t),bc=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),kc=d(Oo),Ne=a(Oo,"DIV",{class:!0});var ht=i(Ne);T(wn.$$.fragment,ht),Tc=d(ht),At=a(ht,"P",{});var hr=i(At);vc=s(hr,"The "),Ks=a(hr,"A",{href:!0});var Pm=i(Ks);wc=s(Pm,"DebertaForMaskedLM"),Pm.forEach(t),yc=s(hr," forward method, overrides the "),ta=a(hr,"CODE",{});var Rm=i(ta);Dc=s(Rm,"__call__"),Rm.forEach(t),$c=s(hr," special method."),hr.forEach(t),Ec=d(ht),T(fo.$$.fragment,ht),Fc=d(ht),oa=a(ht,"P",{});var jm=i(oa);qc=s(jm,"Example:"),jm.forEach(t),zc=d(ht),T(yn.$$.fragment,ht),ht.forEach(t),Oo.forEach(t),vi=d(o),It=a(o,"H2",{class:!0});var el=i(It);uo=a(el,"A",{id:!0,class:!0,href:!0});var xm=i(uo);na=a(xm,"SPAN",{});var Bm=i(na);T(Dn.$$.fragment,Bm),Bm.forEach(t),xm.forEach(t),Mc=d(el),sa=a(el,"SPAN",{});var Lm=i(sa);Cc=s(Lm,"DebertaForSequenceClassification"),Lm.forEach(t),el.forEach(t),wi=d(o),je=a(o,"DIV",{class:!0});var ft=i(je);T($n.$$.fragment,ft),Pc=d(ft),ra=a(ft,"P",{});var Am=i(ra);Rc=s(Am,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Am.forEach(t),jc=d(ft),En=a(ft,"P",{});var tl=i(En);xc=s(tl,"The DeBERTa model was proposed in "),Fn=a(tl,"A",{href:!0,rel:!0});var Im=i(Fn);Bc=s(Im,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Im.forEach(t),Lc=s(tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tl.forEach(t),Ac=d(ft),qn=a(ft,"P",{});var ol=i(qn);Ic=s(ol,"This model is also a PyTorch "),zn=a(ol,"A",{href:!0,rel:!0});var Sm=i(zn);Sc=s(Sm,"torch.nn.Module"),Sm.forEach(t),Nc=s(ol," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ol.forEach(t),Oc=d(ft),qe=a(ft,"DIV",{class:!0});var Ve=i(qe);T(Mn.$$.fragment,Ve),Wc=d(Ve),St=a(Ve,"P",{});var fr=i(St);Hc=s(fr,"The "),Vs=a(fr,"A",{href:!0});var Nm=i(Vs);Uc=s(Nm,"DebertaForSequenceClassification"),Nm.forEach(t),Qc=s(fr," forward method, overrides the "),aa=a(fr,"CODE",{});var Om=i(aa);Gc=s(Om,"__call__"),Om.forEach(t),Kc=s(fr," special method."),fr.forEach(t),Vc=d(Ve),T(mo.$$.fragment,Ve),Jc=d(Ve),ia=a(Ve,"P",{});var Wm=i(ia);Xc=s(Wm,"Example of single-label classification:"),Wm.forEach(t),Yc=d(Ve),T(Cn.$$.fragment,Ve),Zc=d(Ve),la=a(Ve,"P",{});var Hm=i(la);ep=s(Hm,"Example of multi-label classification:"),Hm.forEach(t),tp=d(Ve),T(Pn.$$.fragment,Ve),Ve.forEach(t),ft.forEach(t),yi=d(o),Nt=a(o,"H2",{class:!0});var nl=i(Nt);go=a(nl,"A",{id:!0,class:!0,href:!0});var Um=i(go);da=a(Um,"SPAN",{});var Qm=i(da);T(Rn.$$.fragment,Qm),Qm.forEach(t),Um.forEach(t),op=d(nl),ca=a(nl,"SPAN",{});var Gm=i(ca);np=s(Gm,"DebertaForTokenClassification"),Gm.forEach(t),nl.forEach(t),Di=d(o),xe=a(o,"DIV",{class:!0});var ut=i(xe);T(jn.$$.fragment,ut),sp=d(ut),pa=a(ut,"P",{});var Km=i(pa);rp=s(Km,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Km.forEach(t),ap=d(ut),xn=a(ut,"P",{});var sl=i(xn);ip=s(sl,"The DeBERTa model was proposed in "),Bn=a(sl,"A",{href:!0,rel:!0});var Vm=i(Bn);lp=s(Vm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vm.forEach(t),dp=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),cp=d(ut),Ln=a(ut,"P",{});var rl=i(Ln);pp=s(rl,"This model is also a PyTorch "),An=a(rl,"A",{href:!0,rel:!0});var Jm=i(An);hp=s(Jm,"torch.nn.Module"),Jm.forEach(t),fp=s(rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rl.forEach(t),up=d(ut),Oe=a(ut,"DIV",{class:!0});var mt=i(Oe);T(In.$$.fragment,mt),mp=d(mt),Ot=a(mt,"P",{});var ur=i(Ot);gp=s(ur,"The "),Js=a(ur,"A",{href:!0});var Xm=i(Js);_p=s(Xm,"DebertaForTokenClassification"),Xm.forEach(t),bp=s(ur," forward method, overrides the "),ha=a(ur,"CODE",{});var Ym=i(ha);kp=s(Ym,"__call__"),Ym.forEach(t),Tp=s(ur," special method."),ur.forEach(t),vp=d(mt),T(_o.$$.fragment,mt),wp=d(mt),fa=a(mt,"P",{});var Zm=i(fa);yp=s(Zm,"Example:"),Zm.forEach(t),Dp=d(mt),T(Sn.$$.fragment,mt),mt.forEach(t),ut.forEach(t),$i=d(o),Wt=a(o,"H2",{class:!0});var al=i(Wt);bo=a(al,"A",{id:!0,class:!0,href:!0});var eg=i(bo);ua=a(eg,"SPAN",{});var tg=i(ua);T(Nn.$$.fragment,tg),tg.forEach(t),eg.forEach(t),$p=d(al),ma=a(al,"SPAN",{});var og=i(ma);Ep=s(og,"DebertaForQuestionAnswering"),og.forEach(t),al.forEach(t),Ei=d(o),Be=a(o,"DIV",{class:!0});var gt=i(Be);T(On.$$.fragment,gt),Fp=d(gt),Ht=a(gt,"P",{});var mr=i(Ht);qp=s(mr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=a(mr,"CODE",{});var ng=i(ga);zp=s(ng,"span start logits"),ng.forEach(t),Mp=s(mr," and "),_a=a(mr,"CODE",{});var sg=i(_a);Cp=s(sg,"span end logits"),sg.forEach(t),Pp=s(mr,")."),mr.forEach(t),Rp=d(gt),Wn=a(gt,"P",{});var il=i(Wn);jp=s(il,"The DeBERTa model was proposed in "),Hn=a(il,"A",{href:!0,rel:!0});var rg=i(Hn);xp=s(rg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rg.forEach(t),Bp=s(il,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),il.forEach(t),Lp=d(gt),Un=a(gt,"P",{});var ll=i(Un);Ap=s(ll,"This model is also a PyTorch "),Qn=a(ll,"A",{href:!0,rel:!0});var ag=i(Qn);Ip=s(ag,"torch.nn.Module"),ag.forEach(t),Sp=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),Np=d(gt),We=a(gt,"DIV",{class:!0});var _t=i(We);T(Gn.$$.fragment,_t),Op=d(_t),Ut=a(_t,"P",{});var gr=i(Ut);Wp=s(gr,"The "),Xs=a(gr,"A",{href:!0});var ig=i(Xs);Hp=s(ig,"DebertaForQuestionAnswering"),ig.forEach(t),Up=s(gr," forward method, overrides the "),ba=a(gr,"CODE",{});var lg=i(ba);Qp=s(lg,"__call__"),lg.forEach(t),Gp=s(gr," special method."),gr.forEach(t),Kp=d(_t),T(ko.$$.fragment,_t),Vp=d(_t),ka=a(_t,"P",{});var dg=i(ka);Jp=s(dg,"Example:"),dg.forEach(t),Xp=d(_t),T(Kn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Fi=d(o),Qt=a(o,"H2",{class:!0});var dl=i(Qt);To=a(dl,"A",{id:!0,class:!0,href:!0});var cg=i(To);Ta=a(cg,"SPAN",{});var pg=i(Ta);T(Vn.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Yp=d(dl),va=a(dl,"SPAN",{});var hg=i(va);Zp=s(hg,"TFDebertaModel"),hg.forEach(t),dl.forEach(t),qi=d(o),Le=a(o,"DIV",{class:!0});var bt=i(Le);T(Jn.$$.fragment,bt),eh=d(bt),Xn=a(bt,"P",{});var cl=i(Xn);th=s(cl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=a(cl,"A",{href:!0,rel:!0});var fg=i(Yn);oh=s(fg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fg.forEach(t),nh=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),sh=d(bt),Zn=a(bt,"P",{});var pl=i(Zn);rh=s(pl,"This model is also a "),es=a(pl,"A",{href:!0,rel:!0});var ug=i(es);ah=s(ug,"tf.keras.Model"),ug.forEach(t),ih=s(pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pl.forEach(t),lh=d(bt),T(vo.$$.fragment,bt),dh=d(bt),He=a(bt,"DIV",{class:!0});var kt=i(He);T(ts.$$.fragment,kt),ch=d(kt),Gt=a(kt,"P",{});var _r=i(Gt);ph=s(_r,"The "),Ys=a(_r,"A",{href:!0});var mg=i(Ys);hh=s(mg,"TFDebertaModel"),mg.forEach(t),fh=s(_r," forward method, overrides the "),wa=a(_r,"CODE",{});var gg=i(wa);uh=s(gg,"__call__"),gg.forEach(t),mh=s(_r," special method."),_r.forEach(t),gh=d(kt),T(wo.$$.fragment,kt),_h=d(kt),ya=a(kt,"P",{});var _g=i(ya);bh=s(_g,"Example:"),_g.forEach(t),kh=d(kt),T(os.$$.fragment,kt),kt.forEach(t),bt.forEach(t),zi=d(o),Kt=a(o,"H2",{class:!0});var hl=i(Kt);yo=a(hl,"A",{id:!0,class:!0,href:!0});var bg=i(yo);Da=a(bg,"SPAN",{});var kg=i(Da);T(ns.$$.fragment,kg),kg.forEach(t),bg.forEach(t),Th=d(hl),$a=a(hl,"SPAN",{});var Tg=i($a);vh=s(Tg,"TFDebertaPreTrainedModel"),Tg.forEach(t),hl.forEach(t),Mi=d(o),lt=a(o,"DIV",{class:!0});var br=i(lt);T(ss.$$.fragment,br),wh=d(br),Ea=a(br,"P",{});var vg=i(Ea);yh=s(vg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),vg.forEach(t),Dh=d(br),nt=a(br,"DIV",{class:!0});var Wo=i(nt);T(rs.$$.fragment,Wo),$h=d(Wo),Fa=a(Wo,"P",{});var wg=i(Fa);Eh=s(wg,"Calls the model on new inputs and returns the outputs as tensors."),wg.forEach(t),Fh=d(Wo),as=a(Wo,"P",{});var fl=i(as);qh=s(fl,"In this case "),qa=a(fl,"CODE",{});var yg=i(qa);zh=s(yg,"call()"),yg.forEach(t),Mh=s(fl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),fl.forEach(t),Ch=d(Wo),Ze=a(Wo,"P",{});var Tt=i(Ze);Ph=s(Tt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=a(Tt,"CODE",{});var Dg=i(za);Rh=s(Dg,"tf.keras.Model"),Dg.forEach(t),jh=s(Tt,`.
To call a model on an input, always use the `),Ma=a(Tt,"CODE",{});var $g=i(Ma);xh=s($g,"__call__()"),$g.forEach(t),Bh=s(Tt,` method,
i.e. `),Ca=a(Tt,"CODE",{});var Eg=i(Ca);Lh=s(Eg,"model(inputs)"),Eg.forEach(t),Ah=s(Tt,", which relies on the underlying "),Pa=a(Tt,"CODE",{});var Fg=i(Pa);Ih=s(Fg,"call()"),Fg.forEach(t),Sh=s(Tt," method."),Tt.forEach(t),Wo.forEach(t),br.forEach(t),Ci=d(o),Vt=a(o,"H2",{class:!0});var ul=i(Vt);Do=a(ul,"A",{id:!0,class:!0,href:!0});var qg=i(Do);Ra=a(qg,"SPAN",{});var zg=i(Ra);T(is.$$.fragment,zg),zg.forEach(t),qg.forEach(t),Nh=d(ul),ja=a(ul,"SPAN",{});var Mg=i(ja);Oh=s(Mg,"TFDebertaForMaskedLM"),Mg.forEach(t),ul.forEach(t),Pi=d(o),Ae=a(o,"DIV",{class:!0});var vt=i(Ae);T(ls.$$.fragment,vt),Wh=d(vt),Jt=a(vt,"P",{});var kr=i(Jt);Hh=s(kr,"DeBERTa Model with a "),xa=a(kr,"CODE",{});var Cg=i(xa);Uh=s(Cg,"language modeling"),Cg.forEach(t),Qh=s(kr,` head on top.
The DeBERTa model was proposed in `),ds=a(kr,"A",{href:!0,rel:!0});var Pg=i(ds);Gh=s(Pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Pg.forEach(t),Kh=s(kr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kr.forEach(t),Vh=d(vt),cs=a(vt,"P",{});var ml=i(cs);Jh=s(ml,"This model is also a "),ps=a(ml,"A",{href:!0,rel:!0});var Rg=i(ps);Xh=s(Rg,"tf.keras.Model"),Rg.forEach(t),Yh=s(ml,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ml.forEach(t),Zh=d(vt),T($o.$$.fragment,vt),ef=d(vt),Ue=a(vt,"DIV",{class:!0});var wt=i(Ue);T(hs.$$.fragment,wt),tf=d(wt),Xt=a(wt,"P",{});var Tr=i(Xt);of=s(Tr,"The "),Zs=a(Tr,"A",{href:!0});var jg=i(Zs);nf=s(jg,"TFDebertaForMaskedLM"),jg.forEach(t),sf=s(Tr," forward method, overrides the "),Ba=a(Tr,"CODE",{});var xg=i(Ba);rf=s(xg,"__call__"),xg.forEach(t),af=s(Tr," special method."),Tr.forEach(t),lf=d(wt),T(Eo.$$.fragment,wt),df=d(wt),La=a(wt,"P",{});var Bg=i(La);cf=s(Bg,"Example:"),Bg.forEach(t),pf=d(wt),T(fs.$$.fragment,wt),wt.forEach(t),vt.forEach(t),Ri=d(o),Yt=a(o,"H2",{class:!0});var gl=i(Yt);Fo=a(gl,"A",{id:!0,class:!0,href:!0});var Lg=i(Fo);Aa=a(Lg,"SPAN",{});var Ag=i(Aa);T(us.$$.fragment,Ag),Ag.forEach(t),Lg.forEach(t),hf=d(gl),Ia=a(gl,"SPAN",{});var Ig=i(Ia);ff=s(Ig,"TFDebertaForSequenceClassification"),Ig.forEach(t),gl.forEach(t),ji=d(o),Me=a(o,"DIV",{class:!0});var rt=i(Me);T(ms.$$.fragment,rt),uf=d(rt),Sa=a(rt,"P",{});var Sg=i(Sa);mf=s(Sg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Sg.forEach(t),gf=d(rt),gs=a(rt,"P",{});var _l=i(gs);_f=s(_l,"The DeBERTa model was proposed in "),_s=a(_l,"A",{href:!0,rel:!0});var Ng=i(_s);bf=s(Ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ng.forEach(t),kf=s(_l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_l.forEach(t),Tf=d(rt),bs=a(rt,"P",{});var bl=i(bs);vf=s(bl,"This model is also a "),ks=a(bl,"A",{href:!0,rel:!0});var Og=i(ks);wf=s(Og,"tf.keras.Model"),Og.forEach(t),yf=s(bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bl.forEach(t),Df=d(rt),T(qo.$$.fragment,rt),$f=d(rt),Qe=a(rt,"DIV",{class:!0});var yt=i(Qe);T(Ts.$$.fragment,yt),Ef=d(yt),Zt=a(yt,"P",{});var vr=i(Zt);Ff=s(vr,"The "),er=a(vr,"A",{href:!0});var Wg=i(er);qf=s(Wg,"TFDebertaForSequenceClassification"),Wg.forEach(t),zf=s(vr," forward method, overrides the "),Na=a(vr,"CODE",{});var Hg=i(Na);Mf=s(Hg,"__call__"),Hg.forEach(t),Cf=s(vr," special method."),vr.forEach(t),Pf=d(yt),T(zo.$$.fragment,yt),Rf=d(yt),Oa=a(yt,"P",{});var Ug=i(Oa);jf=s(Ug,"Example:"),Ug.forEach(t),xf=d(yt),T(vs.$$.fragment,yt),yt.forEach(t),rt.forEach(t),xi=d(o),eo=a(o,"H2",{class:!0});var kl=i(eo);Mo=a(kl,"A",{id:!0,class:!0,href:!0});var Qg=i(Mo);Wa=a(Qg,"SPAN",{});var Gg=i(Wa);T(ws.$$.fragment,Gg),Gg.forEach(t),Qg.forEach(t),Bf=d(kl),Ha=a(kl,"SPAN",{});var Kg=i(Ha);Lf=s(Kg,"TFDebertaForTokenClassification"),Kg.forEach(t),kl.forEach(t),Bi=d(o),Ce=a(o,"DIV",{class:!0});var at=i(Ce);T(ys.$$.fragment,at),Af=d(at),Ua=a(at,"P",{});var Vg=i(Ua);If=s(Vg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Vg.forEach(t),Sf=d(at),Ds=a(at,"P",{});var Tl=i(Ds);Nf=s(Tl,"The DeBERTa model was proposed in "),$s=a(Tl,"A",{href:!0,rel:!0});var Jg=i($s);Of=s(Jg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jg.forEach(t),Wf=s(Tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tl.forEach(t),Hf=d(at),Es=a(at,"P",{});var vl=i(Es);Uf=s(vl,"This model is also a "),Fs=a(vl,"A",{href:!0,rel:!0});var Xg=i(Fs);Qf=s(Xg,"tf.keras.Model"),Xg.forEach(t),Gf=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Kf=d(at),T(Co.$$.fragment,at),Vf=d(at),Ge=a(at,"DIV",{class:!0});var Dt=i(Ge);T(qs.$$.fragment,Dt),Jf=d(Dt),to=a(Dt,"P",{});var wr=i(to);Xf=s(wr,"The "),tr=a(wr,"A",{href:!0});var Yg=i(tr);Yf=s(Yg,"TFDebertaForTokenClassification"),Yg.forEach(t),Zf=s(wr," forward method, overrides the "),Qa=a(wr,"CODE",{});var Zg=i(Qa);eu=s(Zg,"__call__"),Zg.forEach(t),tu=s(wr," special method."),wr.forEach(t),ou=d(Dt),T(Po.$$.fragment,Dt),nu=d(Dt),Ga=a(Dt,"P",{});var e_=i(Ga);su=s(e_,"Example:"),e_.forEach(t),ru=d(Dt),T(zs.$$.fragment,Dt),Dt.forEach(t),at.forEach(t),Li=d(o),oo=a(o,"H2",{class:!0});var wl=i(oo);Ro=a(wl,"A",{id:!0,class:!0,href:!0});var t_=i(Ro);Ka=a(t_,"SPAN",{});var o_=i(Ka);T(Ms.$$.fragment,o_),o_.forEach(t),t_.forEach(t),au=d(wl),Va=a(wl,"SPAN",{});var n_=i(Va);iu=s(n_,"TFDebertaForQuestionAnswering"),n_.forEach(t),wl.forEach(t),Ai=d(o),Pe=a(o,"DIV",{class:!0});var it=i(Pe);T(Cs.$$.fragment,it),lu=d(it),no=a(it,"P",{});var yr=i(no);du=s(yr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ja=a(yr,"CODE",{});var s_=i(Ja);cu=s(s_,"span start logits"),s_.forEach(t),pu=s(yr," and "),Xa=a(yr,"CODE",{});var r_=i(Xa);hu=s(r_,"span end logits"),r_.forEach(t),fu=s(yr,")."),yr.forEach(t),uu=d(it),Ps=a(it,"P",{});var yl=i(Ps);mu=s(yl,"The DeBERTa model was proposed in "),Rs=a(yl,"A",{href:!0,rel:!0});var a_=i(Rs);gu=s(a_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),a_.forEach(t),_u=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),bu=d(it),js=a(it,"P",{});var Dl=i(js);ku=s(Dl,"This model is also a "),xs=a(Dl,"A",{href:!0,rel:!0});var i_=i(xs);Tu=s(i_,"tf.keras.Model"),i_.forEach(t),vu=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),wu=d(it),T(jo.$$.fragment,it),yu=d(it),Ke=a(it,"DIV",{class:!0});var $t=i(Ke);T(Bs.$$.fragment,$t),Du=d($t),so=a($t,"P",{});var Dr=i(so);$u=s(Dr,"The "),or=a(Dr,"A",{href:!0});var l_=i(or);Eu=s(l_,"TFDebertaForQuestionAnswering"),l_.forEach(t),Fu=s(Dr," forward method, overrides the "),Ya=a(Dr,"CODE",{});var d_=i(Ya);qu=s(d_,"__call__"),d_.forEach(t),zu=s(Dr," special method."),Dr.forEach(t),Mu=d($t),T(xo.$$.fragment,$t),Cu=d($t),Za=a($t,"P",{});var c_=i(Za);Pu=s(c_,"Example:"),c_.forEach(t),Ru=d($t),T(Ls.$$.fragment,$t),$t.forEach(t),it.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(C_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(m,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(R,"href","https://huggingface.co/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Os,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaModel"),c(Ws,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Hs,"href","/docs/transformers/pr_15770/en/main_classes/configuration#transformers.PretrainedConfig"),c(Us,"href","/docs/transformers/pr_15770/en/main_classes/configuration#transformers.PretrainedConfig"),c(ae,"class","docstring"),c(ro,"id","transformers.DebertaTokenizer"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(dt,"class","docstring"),c(ao,"class","docstring"),c(tt,"class","docstring"),c(Qs,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(ct,"class","docstring"),c(ot,"class","docstring"),c(Je,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(Pt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Gs,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaModel"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(jt,"class","relative group"),c(xt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vn,"rel","nofollow"),c(Ks,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Ne,"class","docstring"),c(Ye,"class","docstring"),c(uo,"id","transformers.DebertaForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(Fn,"href","https://arxiv.org/abs/2006.03654"),c(Fn,"rel","nofollow"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(Vs,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(qe,"class","docstring"),c(je,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(Nt,"class","relative group"),c(Bn,"href","https://arxiv.org/abs/2006.03654"),c(Bn,"rel","nofollow"),c(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(An,"rel","nofollow"),c(Js,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Oe,"class","docstring"),c(xe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Hn,"href","https://arxiv.org/abs/2006.03654"),c(Hn,"rel","nofollow"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(Xs,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(We,"class","docstring"),c(Be,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(Yn,"href","https://arxiv.org/abs/2006.03654"),c(Yn,"rel","nofollow"),c(es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(es,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaModel"),c(He,"class","docstring"),c(Le,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(lt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(ds,"href","https://arxiv.org/abs/2006.03654"),c(ds,"rel","nofollow"),c(ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ps,"rel","nofollow"),c(Zs,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(_s,"href","https://arxiv.org/abs/2006.03654"),c(_s,"rel","nofollow"),c(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ks,"rel","nofollow"),c(er,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c($s,"href","https://arxiv.org/abs/2006.03654"),c($s,"rel","nofollow"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(tr,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ge,"class","docstring"),c(Ce,"class","docstring"),c(Ro,"id","transformers.TFDebertaForQuestionAnswering"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Rs,"href","https://arxiv.org/abs/2006.03654"),c(Rs,"rel","nofollow"),c(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xs,"rel","nofollow"),c(or,"href","/docs/transformers/pr_15770/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ke,"class","docstring"),c(Pe,"class","docstring")},m(o,u){e(document.head,h),f(o,F,u),f(o,m,u),e(m,g),e(g,$),v(b,$,null),e(m,_),e(m,q),e(q,he),f(o,X,u),f(o,z,u),e(z,Y),e(Y,A),v(ee,A,null),e(z,fe),e(z,I),e(I,ue),f(o,le,u),f(o,W,u),e(W,B),e(W,te),e(te,Z),e(W,M),f(o,P,u),f(o,ne,u),e(ne,H),f(o,de,u),f(o,se,u),e(se,U),f(o,ce,u),f(o,re,u),e(re,C),e(C,me),e(C,L),e(L,ge),e(C,_e),f(o,S,u),f(o,K,u),e(K,be),e(K,R),e(R,ke),e(K,Q),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,$e),e(K,Ee),f(o,x,u),f(o,pe,u),e(pe,Te),e(Te,ye),v(j,ye,null),e(pe,G),e(pe,De),e(De,Fe),f(o,N,u),f(o,ae,u),v(we,ae,null),e(ae,ve),e(ae,ie),e(ie,$l),e(ie,Os),e(Os,El),e(ie,Fl),e(ie,Ws),e(Ws,ql),e(ie,zl),e(ie,Ho),e(Ho,Ml),e(ie,Cl),e(ae,Pl),e(ae,Et),e(Et,Rl),e(Et,Hs),e(Hs,jl),e(Et,xl),e(Et,Us),e(Us,Bl),e(Et,Ll),f(o,pi,u),f(o,Ft,u),e(Ft,ro),e(ro,$r),v(Uo,$r,null),e(Ft,Al),e(Ft,Er),e(Er,Il),f(o,hi,u),f(o,ze,u),v(Qo,ze,null),e(ze,Sl),e(ze,Fr),e(Fr,Nl),e(ze,Ol),e(ze,dt),v(Go,dt,null),e(dt,Wl),e(dt,qr),e(qr,Hl),e(dt,Ul),e(dt,Ko),e(Ko,zr),e(zr,Ql),e(Ko,Gl),e(Ko,Mr),e(Mr,Kl),e(ze,Vl),e(ze,ao),v(Vo,ao,null),e(ao,Jl),e(ao,qt),e(qt,Xl),e(qt,Cr),e(Cr,Yl),e(qt,Zl),e(qt,Pr),e(Pr,ed),e(qt,td),e(ze,od),e(ze,tt),v(Jo,tt,null),e(tt,nd),e(tt,Rr),e(Rr,sd),e(tt,rd),v(Xo,tt,null),e(tt,ad),e(tt,zt),e(zt,id),e(zt,jr),e(jr,ld),e(zt,dd),e(zt,xr),e(xr,cd),e(zt,pd),e(ze,hd),e(ze,Qs),v(Yo,Qs,null),f(o,fi,u),f(o,Mt,u),e(Mt,io),e(io,Br),v(Zo,Br,null),e(Mt,fd),e(Mt,Lr),e(Lr,ud),f(o,ui,u),f(o,Je,u),v(en,Je,null),e(Je,md),e(Je,tn),e(tn,gd),e(tn,Ar),e(Ar,_d),e(tn,bd),e(Je,kd),e(Je,ct),v(on,ct,null),e(ct,Td),e(ct,Ir),e(Ir,vd),e(ct,wd),e(ct,nn),e(nn,Sr),e(Sr,yd),e(nn,Dd),e(nn,Nr),e(Nr,$d),e(Je,Ed),e(Je,ot),v(sn,ot,null),e(ot,Fd),e(ot,Or),e(Or,qd),e(ot,zd),v(rn,ot,null),e(ot,Md),e(ot,Ct),e(Ct,Cd),e(Ct,Wr),e(Wr,Pd),e(Ct,Rd),e(Ct,Hr),e(Hr,jd),e(Ct,xd),f(o,mi,u),f(o,Pt,u),e(Pt,lo),e(lo,Ur),v(an,Ur,null),e(Pt,Bd),e(Pt,Qr),e(Qr,Ld),f(o,gi,u),f(o,Xe,u),v(ln,Xe,null),e(Xe,Ad),e(Xe,dn),e(dn,Id),e(dn,cn),e(cn,Sd),e(dn,Nd),e(Xe,Od),e(Xe,pn),e(pn,Wd),e(pn,hn),e(hn,Hd),e(pn,Ud),e(Xe,Qd),e(Xe,Se),v(fn,Se,null),e(Se,Gd),e(Se,Rt),e(Rt,Kd),e(Rt,Gs),e(Gs,Vd),e(Rt,Jd),e(Rt,Gr),e(Gr,Xd),e(Rt,Yd),e(Se,Zd),v(co,Se,null),e(Se,ec),e(Se,Kr),e(Kr,tc),e(Se,oc),v(un,Se,null),f(o,_i,u),f(o,jt,u),e(jt,po),e(po,Vr),v(mn,Vr,null),e(jt,nc),e(jt,Jr),e(Jr,sc),f(o,bi,u),f(o,xt,u),v(gn,xt,null),e(xt,rc),e(xt,Xr),e(Xr,ac),f(o,ki,u),f(o,Bt,u),e(Bt,ho),e(ho,Yr),v(_n,Yr,null),e(Bt,ic),e(Bt,Zr),e(Zr,lc),f(o,Ti,u),f(o,Ye,u),v(bn,Ye,null),e(Ye,dc),e(Ye,Lt),e(Lt,cc),e(Lt,ea),e(ea,pc),e(Lt,hc),e(Lt,kn),e(kn,fc),e(Lt,uc),e(Ye,mc),e(Ye,Tn),e(Tn,gc),e(Tn,vn),e(vn,_c),e(Tn,bc),e(Ye,kc),e(Ye,Ne),v(wn,Ne,null),e(Ne,Tc),e(Ne,At),e(At,vc),e(At,Ks),e(Ks,wc),e(At,yc),e(At,ta),e(ta,Dc),e(At,$c),e(Ne,Ec),v(fo,Ne,null),e(Ne,Fc),e(Ne,oa),e(oa,qc),e(Ne,zc),v(yn,Ne,null),f(o,vi,u),f(o,It,u),e(It,uo),e(uo,na),v(Dn,na,null),e(It,Mc),e(It,sa),e(sa,Cc),f(o,wi,u),f(o,je,u),v($n,je,null),e(je,Pc),e(je,ra),e(ra,Rc),e(je,jc),e(je,En),e(En,xc),e(En,Fn),e(Fn,Bc),e(En,Lc),e(je,Ac),e(je,qn),e(qn,Ic),e(qn,zn),e(zn,Sc),e(qn,Nc),e(je,Oc),e(je,qe),v(Mn,qe,null),e(qe,Wc),e(qe,St),e(St,Hc),e(St,Vs),e(Vs,Uc),e(St,Qc),e(St,aa),e(aa,Gc),e(St,Kc),e(qe,Vc),v(mo,qe,null),e(qe,Jc),e(qe,ia),e(ia,Xc),e(qe,Yc),v(Cn,qe,null),e(qe,Zc),e(qe,la),e(la,ep),e(qe,tp),v(Pn,qe,null),f(o,yi,u),f(o,Nt,u),e(Nt,go),e(go,da),v(Rn,da,null),e(Nt,op),e(Nt,ca),e(ca,np),f(o,Di,u),f(o,xe,u),v(jn,xe,null),e(xe,sp),e(xe,pa),e(pa,rp),e(xe,ap),e(xe,xn),e(xn,ip),e(xn,Bn),e(Bn,lp),e(xn,dp),e(xe,cp),e(xe,Ln),e(Ln,pp),e(Ln,An),e(An,hp),e(Ln,fp),e(xe,up),e(xe,Oe),v(In,Oe,null),e(Oe,mp),e(Oe,Ot),e(Ot,gp),e(Ot,Js),e(Js,_p),e(Ot,bp),e(Ot,ha),e(ha,kp),e(Ot,Tp),e(Oe,vp),v(_o,Oe,null),e(Oe,wp),e(Oe,fa),e(fa,yp),e(Oe,Dp),v(Sn,Oe,null),f(o,$i,u),f(o,Wt,u),e(Wt,bo),e(bo,ua),v(Nn,ua,null),e(Wt,$p),e(Wt,ma),e(ma,Ep),f(o,Ei,u),f(o,Be,u),v(On,Be,null),e(Be,Fp),e(Be,Ht),e(Ht,qp),e(Ht,ga),e(ga,zp),e(Ht,Mp),e(Ht,_a),e(_a,Cp),e(Ht,Pp),e(Be,Rp),e(Be,Wn),e(Wn,jp),e(Wn,Hn),e(Hn,xp),e(Wn,Bp),e(Be,Lp),e(Be,Un),e(Un,Ap),e(Un,Qn),e(Qn,Ip),e(Un,Sp),e(Be,Np),e(Be,We),v(Gn,We,null),e(We,Op),e(We,Ut),e(Ut,Wp),e(Ut,Xs),e(Xs,Hp),e(Ut,Up),e(Ut,ba),e(ba,Qp),e(Ut,Gp),e(We,Kp),v(ko,We,null),e(We,Vp),e(We,ka),e(ka,Jp),e(We,Xp),v(Kn,We,null),f(o,Fi,u),f(o,Qt,u),e(Qt,To),e(To,Ta),v(Vn,Ta,null),e(Qt,Yp),e(Qt,va),e(va,Zp),f(o,qi,u),f(o,Le,u),v(Jn,Le,null),e(Le,eh),e(Le,Xn),e(Xn,th),e(Xn,Yn),e(Yn,oh),e(Xn,nh),e(Le,sh),e(Le,Zn),e(Zn,rh),e(Zn,es),e(es,ah),e(Zn,ih),e(Le,lh),v(vo,Le,null),e(Le,dh),e(Le,He),v(ts,He,null),e(He,ch),e(He,Gt),e(Gt,ph),e(Gt,Ys),e(Ys,hh),e(Gt,fh),e(Gt,wa),e(wa,uh),e(Gt,mh),e(He,gh),v(wo,He,null),e(He,_h),e(He,ya),e(ya,bh),e(He,kh),v(os,He,null),f(o,zi,u),f(o,Kt,u),e(Kt,yo),e(yo,Da),v(ns,Da,null),e(Kt,Th),e(Kt,$a),e($a,vh),f(o,Mi,u),f(o,lt,u),v(ss,lt,null),e(lt,wh),e(lt,Ea),e(Ea,yh),e(lt,Dh),e(lt,nt),v(rs,nt,null),e(nt,$h),e(nt,Fa),e(Fa,Eh),e(nt,Fh),e(nt,as),e(as,qh),e(as,qa),e(qa,zh),e(as,Mh),e(nt,Ch),e(nt,Ze),e(Ze,Ph),e(Ze,za),e(za,Rh),e(Ze,jh),e(Ze,Ma),e(Ma,xh),e(Ze,Bh),e(Ze,Ca),e(Ca,Lh),e(Ze,Ah),e(Ze,Pa),e(Pa,Ih),e(Ze,Sh),f(o,Ci,u),f(o,Vt,u),e(Vt,Do),e(Do,Ra),v(is,Ra,null),e(Vt,Nh),e(Vt,ja),e(ja,Oh),f(o,Pi,u),f(o,Ae,u),v(ls,Ae,null),e(Ae,Wh),e(Ae,Jt),e(Jt,Hh),e(Jt,xa),e(xa,Uh),e(Jt,Qh),e(Jt,ds),e(ds,Gh),e(Jt,Kh),e(Ae,Vh),e(Ae,cs),e(cs,Jh),e(cs,ps),e(ps,Xh),e(cs,Yh),e(Ae,Zh),v($o,Ae,null),e(Ae,ef),e(Ae,Ue),v(hs,Ue,null),e(Ue,tf),e(Ue,Xt),e(Xt,of),e(Xt,Zs),e(Zs,nf),e(Xt,sf),e(Xt,Ba),e(Ba,rf),e(Xt,af),e(Ue,lf),v(Eo,Ue,null),e(Ue,df),e(Ue,La),e(La,cf),e(Ue,pf),v(fs,Ue,null),f(o,Ri,u),f(o,Yt,u),e(Yt,Fo),e(Fo,Aa),v(us,Aa,null),e(Yt,hf),e(Yt,Ia),e(Ia,ff),f(o,ji,u),f(o,Me,u),v(ms,Me,null),e(Me,uf),e(Me,Sa),e(Sa,mf),e(Me,gf),e(Me,gs),e(gs,_f),e(gs,_s),e(_s,bf),e(gs,kf),e(Me,Tf),e(Me,bs),e(bs,vf),e(bs,ks),e(ks,wf),e(bs,yf),e(Me,Df),v(qo,Me,null),e(Me,$f),e(Me,Qe),v(Ts,Qe,null),e(Qe,Ef),e(Qe,Zt),e(Zt,Ff),e(Zt,er),e(er,qf),e(Zt,zf),e(Zt,Na),e(Na,Mf),e(Zt,Cf),e(Qe,Pf),v(zo,Qe,null),e(Qe,Rf),e(Qe,Oa),e(Oa,jf),e(Qe,xf),v(vs,Qe,null),f(o,xi,u),f(o,eo,u),e(eo,Mo),e(Mo,Wa),v(ws,Wa,null),e(eo,Bf),e(eo,Ha),e(Ha,Lf),f(o,Bi,u),f(o,Ce,u),v(ys,Ce,null),e(Ce,Af),e(Ce,Ua),e(Ua,If),e(Ce,Sf),e(Ce,Ds),e(Ds,Nf),e(Ds,$s),e($s,Of),e(Ds,Wf),e(Ce,Hf),e(Ce,Es),e(Es,Uf),e(Es,Fs),e(Fs,Qf),e(Es,Gf),e(Ce,Kf),v(Co,Ce,null),e(Ce,Vf),e(Ce,Ge),v(qs,Ge,null),e(Ge,Jf),e(Ge,to),e(to,Xf),e(to,tr),e(tr,Yf),e(to,Zf),e(to,Qa),e(Qa,eu),e(to,tu),e(Ge,ou),v(Po,Ge,null),e(Ge,nu),e(Ge,Ga),e(Ga,su),e(Ge,ru),v(zs,Ge,null),f(o,Li,u),f(o,oo,u),e(oo,Ro),e(Ro,Ka),v(Ms,Ka,null),e(oo,au),e(oo,Va),e(Va,iu),f(o,Ai,u),f(o,Pe,u),v(Cs,Pe,null),e(Pe,lu),e(Pe,no),e(no,du),e(no,Ja),e(Ja,cu),e(no,pu),e(no,Xa),e(Xa,hu),e(no,fu),e(Pe,uu),e(Pe,Ps),e(Ps,mu),e(Ps,Rs),e(Rs,gu),e(Ps,_u),e(Pe,bu),e(Pe,js),e(js,ku),e(js,xs),e(xs,Tu),e(js,vu),e(Pe,wu),v(jo,Pe,null),e(Pe,yu),e(Pe,Ke),v(Bs,Ke,null),e(Ke,Du),e(Ke,so),e(so,$u),e(so,or),e(or,Eu),e(so,Fu),e(so,Ya),e(Ya,qu),e(so,zu),e(Ke,Mu),v(xo,Ke,null),e(Ke,Cu),e(Ke,Za),e(Za,Pu),e(Ke,Ru),v(Ls,Ke,null),Ii=!0},p(o,[u]){const As={};u&2&&(As.$$scope={dirty:u,ctx:o}),co.$set(As);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),fo.$set(ei);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),mo.$set(ti);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),_o.$set(oi);const Is={};u&2&&(Is.$$scope={dirty:u,ctx:o}),ko.$set(Is);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),vo.$set(ni);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),wo.$set(si);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),$o.$set(ri);const Ss={};u&2&&(Ss.$$scope={dirty:u,ctx:o}),Eo.$set(Ss);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),qo.$set(ai);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),zo.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),Co.$set(li);const di={};u&2&&(di.$$scope={dirty:u,ctx:o}),Po.$set(di);const Ns={};u&2&&(Ns.$$scope={dirty:u,ctx:o}),jo.$set(Ns);const ci={};u&2&&(ci.$$scope={dirty:u,ctx:o}),xo.$set(ci)},i(o){Ii||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(j.$$.fragment,o),w(we.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Go.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(on.$$.fragment,o),w(sn.$$.fragment,o),w(rn.$$.fragment,o),w(an.$$.fragment,o),w(ln.$$.fragment,o),w(fn.$$.fragment,o),w(co.$$.fragment,o),w(un.$$.fragment,o),w(mn.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(bn.$$.fragment,o),w(wn.$$.fragment,o),w(fo.$$.fragment,o),w(yn.$$.fragment,o),w(Dn.$$.fragment,o),w($n.$$.fragment,o),w(Mn.$$.fragment,o),w(mo.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(jn.$$.fragment,o),w(In.$$.fragment,o),w(_o.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(On.$$.fragment,o),w(Gn.$$.fragment,o),w(ko.$$.fragment,o),w(Kn.$$.fragment,o),w(Vn.$$.fragment,o),w(Jn.$$.fragment,o),w(vo.$$.fragment,o),w(ts.$$.fragment,o),w(wo.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w($o.$$.fragment,o),w(hs.$$.fragment,o),w(Eo.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(ms.$$.fragment,o),w(qo.$$.fragment,o),w(Ts.$$.fragment,o),w(zo.$$.fragment,o),w(vs.$$.fragment,o),w(ws.$$.fragment,o),w(ys.$$.fragment,o),w(Co.$$.fragment,o),w(qs.$$.fragment,o),w(Po.$$.fragment,o),w(zs.$$.fragment,o),w(Ms.$$.fragment,o),w(Cs.$$.fragment,o),w(jo.$$.fragment,o),w(Bs.$$.fragment,o),w(xo.$$.fragment,o),w(Ls.$$.fragment,o),Ii=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(j.$$.fragment,o),y(we.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(ln.$$.fragment,o),y(fn.$$.fragment,o),y(co.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(wn.$$.fragment,o),y(fo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(mo.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(jn.$$.fragment,o),y(In.$$.fragment,o),y(_o.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Gn.$$.fragment,o),y(ko.$$.fragment,o),y(Kn.$$.fragment,o),y(Vn.$$.fragment,o),y(Jn.$$.fragment,o),y(vo.$$.fragment,o),y(ts.$$.fragment,o),y(wo.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y($o.$$.fragment,o),y(hs.$$.fragment,o),y(Eo.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(ms.$$.fragment,o),y(qo.$$.fragment,o),y(Ts.$$.fragment,o),y(zo.$$.fragment,o),y(vs.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(Co.$$.fragment,o),y(qs.$$.fragment,o),y(Po.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(jo.$$.fragment,o),y(Bs.$$.fragment,o),y(xo.$$.fragment,o),y(Ls.$$.fragment,o),Ii=!1},d(o){t(h),o&&t(F),o&&t(m),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(W),o&&t(P),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(re),o&&t(S),o&&t(K),o&&t(x),o&&t(pe),D(j),o&&t(N),o&&t(ae),D(we),o&&t(pi),o&&t(Ft),D(Uo),o&&t(hi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(fi),o&&t(Mt),D(Zo),o&&t(ui),o&&t(Je),D(en),D(on),D(sn),D(rn),o&&t(mi),o&&t(Pt),D(an),o&&t(gi),o&&t(Xe),D(ln),D(fn),D(co),D(un),o&&t(_i),o&&t(jt),D(mn),o&&t(bi),o&&t(xt),D(gn),o&&t(ki),o&&t(Bt),D(_n),o&&t(Ti),o&&t(Ye),D(bn),D(wn),D(fo),D(yn),o&&t(vi),o&&t(It),D(Dn),o&&t(wi),o&&t(je),D($n),D(Mn),D(mo),D(Cn),D(Pn),o&&t(yi),o&&t(Nt),D(Rn),o&&t(Di),o&&t(xe),D(jn),D(In),D(_o),D(Sn),o&&t($i),o&&t(Wt),D(Nn),o&&t(Ei),o&&t(Be),D(On),D(Gn),D(ko),D(Kn),o&&t(Fi),o&&t(Qt),D(Vn),o&&t(qi),o&&t(Le),D(Jn),D(vo),D(ts),D(wo),D(os),o&&t(zi),o&&t(Kt),D(ns),o&&t(Mi),o&&t(lt),D(ss),D(rs),o&&t(Ci),o&&t(Vt),D(is),o&&t(Pi),o&&t(Ae),D(ls),D($o),D(hs),D(Eo),D(fs),o&&t(Ri),o&&t(Yt),D(us),o&&t(ji),o&&t(Me),D(ms),D(qo),D(Ts),D(zo),D(vs),o&&t(xi),o&&t(eo),D(ws),o&&t(Bi),o&&t(Ce),D(ys),D(Co),D(qs),D(Po),D(zs),o&&t(Li),o&&t(oo),D(Ms),o&&t(Ai),o&&t(Pe),D(Cs),D(jo),D(Bs),D(xo),D(Ls)}}}const C_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function P_(O,h,F){let{fw:m}=h;return O.$$set=g=>{"fw"in g&&F(0,m=g.fw)},[m]}class I_ extends p_{constructor(h){super();h_(this,h,P_,M_,f_,{fw:0})}}export{I_ as default,C_ as metadata};
