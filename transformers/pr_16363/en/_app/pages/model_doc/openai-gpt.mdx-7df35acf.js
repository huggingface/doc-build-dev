import{S as of,i as nf,s as sf,e as a,k as l,w as k,t as n,M as af,c as r,d as t,m as d,a as i,x as b,h as s,b as c,F as e,g as h,y as w,q as P,o as y,B as I,v as rf}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as ae}from"../../chunks/Docstring-abef54e3.js";import{C as at}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";function lf(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function df(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function cf(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function pf(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function hf(K){let u,G,f,g,v,T,_,A,ue,J,$,X,j,Y,me,x,fe,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,pe,E,_e,L,Q,re,W,Te,te,C,ie,B,ve;return{c(){u=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),pe=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var O=i(u);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);ue=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);ce=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var we=i(C);ie=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var $e=i(B);ve=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),we.forEach(t),D.forEach(t)},m(p,O){h(p,u,O),e(u,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,ue),h(p,J,O),h(p,$,O),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,fe),e($,de),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,pe),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,ie),e(C,B),e(B,ve)},d(p){p&&t(u),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function uf(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function mf(K){let u,G,f,g,v,T,_,A,ue,J,$,X,j,Y,me,x,fe,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,pe,E,_e,L,Q,re,W,Te,te,C,ie,B,ve;return{c(){u=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),pe=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var O=i(u);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);ue=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);ce=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var we=i(C);ie=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var $e=i(B);ve=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),we.forEach(t),D.forEach(t)},m(p,O){h(p,u,O),e(u,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,ue),h(p,J,O),h(p,$,O),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,fe),e($,de),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,pe),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,ie),e(C,B),e(B,ve)},d(p){p&&t(u),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function ff(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function gf(K){let u,G,f,g,v,T,_,A,ue,J,$,X,j,Y,me,x,fe,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,pe,E,_e,L,Q,re,W,Te,te,C,ie,B,ve;return{c(){u=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),pe=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var O=i(u);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);ue=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);ce=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var we=i(C);ie=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var $e=i(B);ve=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),we.forEach(t),D.forEach(t)},m(p,O){h(p,u,O),e(u,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,ue),h(p,J,O),h(p,$,O),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,fe),e($,de),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,pe),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,ie),e(C,B),e(B,ve)},d(p){p&&t(u),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function _f(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function Tf(K){let u,G,f,g,v,T,_,A,ue,J,$,X,j,Y,me,x,fe,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,pe,E,_e,L,Q,re,W,Te,te,C,ie,B,ve;return{c(){u=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),pe=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){u=r(p,"P",{});var O=i(u);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);ue=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);ce=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var we=i(C);ie=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var $e=i(B);ve=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),we.forEach(t),D.forEach(t)},m(p,O){h(p,u,O),e(u,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,ue),h(p,J,O),h(p,$,O),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,fe),e($,de),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,ge),e(M,pe),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,re),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,ie),e(C,B),e(B,ve)},d(p){p&&t(u),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function vf(K){let u,G,f,g,v;return{c(){u=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){u=r(T,"P",{});var _=i(u);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,u,_),e(u,G),e(u,f),e(f,g),e(u,v)},d(T){T&&t(u)}}}function kf(K){let u,G,f,g,v,T,_,A,ue,J,$,X,j,Y,me,x,fe,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,ge,pe,E,_e,L,Q,re,W,Te,te,C,ie,B,ve,p,O,U,Ee,ze,F,se,Fe,ke,D,R,be,qe,V,Ae,Pe,we,$e,Ze,fi,Ms,gi,_i,Es,Ti,vi,zs,ki,bi,sr,bo,ar,Ne,wi,Fs,Pi,yi,qs,Ii,Oi,Vn,Ai,$i,Cs,Gi,Mi,rr,Pt,Rt,Ds,wo,Ei,js,zi,ir,Ce,Po,Fi,rt,qi,Kn,Ci,Di,Jn,ji,xi,yo,Hi,Si,Li,yt,Ni,Xn,Wi,Bi,Qn,Ui,Ri,Vi,xs,Ki,Ji,Io,lr,It,Vt,Hs,Oo,Xi,Ss,Qi,dr,De,Ao,Yi,Ls,Zi,el,$o,Ns,tl,ol,it,nl,Ws,sl,al,Bs,rl,il,Us,ll,dl,cl,Go,pl,Yn,hl,ul,ml,Zn,Mo,cr,Ot,Kt,Rs,Eo,fl,Vs,gl,pr,Qe,zo,_l,Fo,Tl,Ks,vl,kl,bl,qo,Js,wl,Pl,Xs,yl,Il,Co,Ol,es,Al,$l,hr,At,Jt,Qs,Do,Gl,Ys,Ml,ur,$t,jo,El,Zs,zl,mr,Gt,xo,Fl,ea,ql,fr,Mt,Xt,ta,Ho,Cl,oa,Dl,gr,je,So,jl,na,xl,Hl,Lo,Sl,ts,Ll,Nl,Wl,No,Bl,Wo,Ul,Rl,Vl,We,Bo,Kl,Et,Jl,os,Xl,Ql,sa,Yl,Zl,ed,Qt,td,aa,od,nd,Uo,_r,zt,Yt,ra,Ro,sd,ia,ad,Tr,xe,Vo,rd,la,id,ld,Ko,dd,ns,cd,pd,hd,Jo,ud,Xo,md,fd,gd,Be,Qo,_d,Ft,Td,ss,vd,kd,da,bd,wd,Pd,Zt,yd,ca,Id,Od,Yo,vr,qt,eo,pa,Zo,Ad,ha,$d,kr,He,en,Gd,ua,Md,Ed,tn,zd,as,Fd,qd,Cd,on,Dd,nn,jd,xd,Hd,Ue,sn,Sd,Ct,Ld,rs,Nd,Wd,ma,Bd,Ud,Rd,to,Vd,fa,Kd,Jd,an,br,Dt,oo,ga,rn,Xd,_a,Qd,wr,Se,ln,Yd,Le,Zd,is,ec,tc,Ta,oc,nc,va,sc,ac,ka,rc,ic,ba,lc,dc,cc,dn,pc,ls,hc,uc,mc,cn,fc,pn,gc,_c,Tc,he,hn,vc,jt,kc,ds,bc,wc,wa,Pc,yc,Ic,no,Oc,Pa,Ac,$c,un,Gc,mn,Mc,ya,Ec,zc,fn,Pr,xt,so,Ia,gn,Fc,Oa,qc,yr,ye,_n,Cc,Aa,Dc,jc,Tn,xc,cs,Hc,Sc,Lc,vn,Nc,kn,Wc,Bc,Uc,ao,Rc,Re,bn,Vc,Ht,Kc,ps,Jc,Xc,$a,Qc,Yc,Zc,ro,ep,Ga,tp,op,wn,Ir,St,io,Ma,Pn,np,Ea,sp,Or,Ie,yn,ap,za,rp,ip,In,lp,hs,dp,cp,pp,On,hp,An,up,mp,fp,lo,gp,Ve,$n,_p,Lt,Tp,us,vp,kp,Fa,bp,wp,Pp,co,yp,qa,Ip,Op,Gn,Ar,Nt,po,Ca,Mn,Ap,Da,$p,$r,Oe,En,Gp,ja,Mp,Ep,zn,zp,ms,Fp,qp,Cp,Fn,Dp,qn,jp,xp,Hp,ho,Sp,Ke,Cn,Lp,Wt,Np,fs,Wp,Bp,xa,Up,Rp,Vp,uo,Kp,Ha,Jp,Xp,Dn,Gr,Bt,mo,Sa,jn,Qp,La,Yp,Mr,le,xn,Zp,Na,eh,th,gs,_s,oh,nh,sh,Ye,ah,Wa,rh,ih,Ba,lh,dh,Ua,ch,ph,Ra,hh,uh,mh,Hn,fh,Ts,gh,_h,Th,Sn,vh,Ln,kh,bh,wh,fo,Ph,Je,Nn,yh,Ut,Ih,vs,Oh,Ah,Va,$h,Gh,Mh,go,Eh,Ka,zh,Fh,Wn,Er;return T=new Xe({}),Y=new Xe({}),bo=new at({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),Po=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new at({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Xe({}),Ao=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new ae({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Xe({}),zo=new ae({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Do=new Xe({}),jo=new ae({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new ae({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L373",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Xe({}),So=new ae({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),Qt=new st({props:{$$slots:{default:[lf]},$$scope:{ctx:K}}}),Uo=new at({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Xe({}),Vo=new ae({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new st({props:{$$slots:{default:[df]},$$scope:{ctx:K}}}),Yo=new at({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Xe({}),en=new ae({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new st({props:{$$slots:{default:[cf]},$$scope:{ctx:K}}}),an=new at({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Xe({}),ln=new ae({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),no=new st({props:{$$slots:{default:[pf]},$$scope:{ctx:K}}}),un=new at({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),mn=new at({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),fn=new at({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),gn=new Xe({}),_n=new ae({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L498",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new st({props:{$$slots:{default:[hf]},$$scope:{ctx:K}}}),bn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L503",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),ro=new st({props:{$$slots:{default:[uf]},$$scope:{ctx:K}}}),wn=new at({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Pn=new Xe({}),yn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L555",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[mf]},$$scope:{ctx:K}}}),$n=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L566",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new st({props:{$$slots:{default:[ff]},$$scope:{ctx:K}}}),Gn=new at({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new Xe({}),En=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L645",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[gf]},$$scope:{ctx:K}}}),Cn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L654",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new st({props:{$$slots:{default:[_f]},$$scope:{ctx:K}}}),Dn=new at({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),jn=new Xe({}),xn=new ae({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L781",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new st({props:{$$slots:{default:[Tf]},$$scope:{ctx:K}}}),Nn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/openai/modeling_tf_openai.py#L793",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),go=new st({props:{$$slots:{default:[vf]},$$scope:{ctx:K}}}),Wn=new at({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){u=a("meta"),G=l(),f=a("h1"),g=a("a"),v=a("span"),k(T.$$.fragment),_=l(),A=a("span"),ue=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),j=a("span"),k(Y.$$.fragment),me=l(),x=a("span"),fe=n("Overview"),de=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),N=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),pe=l(),E=a("p"),_e=n("Tips:"),L=l(),Q=a("ul"),re=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Te=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),B=n("run_generation.py"),ve=n(" example script."),p=l(),O=a("p"),U=a("a"),Ee=n("Write With Transformer"),ze=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),Fe=n("This model was contributed by "),ke=a("a"),D=n("thomwolf"),R=n(". The original code can be found "),be=a("a"),qe=n("here"),V=n("."),Ae=l(),Pe=a("p"),we=n("Note:"),$e=l(),Ze=a("p"),fi=n("If you want to reproduce the original tokenization process of the "),Ms=a("em"),gi=n("OpenAI GPT"),_i=n(" paper, you will need to install "),Es=a("code"),Ti=n("ftfy"),vi=n(`
and `),zs=a("code"),ki=n("SpaCy"),bi=n(":"),sr=l(),k(bo.$$.fragment),ar=l(),Ne=a("p"),wi=n("If you don\u2019t install "),Fs=a("code"),Pi=n("ftfy"),yi=n(" and "),qs=a("code"),Ii=n("SpaCy"),Oi=n(", the "),Vn=a("a"),Ai=n("OpenAIGPTTokenizer"),$i=n(` will default to tokenize
using BERT\u2019s `),Cs=a("code"),Gi=n("BasicTokenizer"),Mi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),rr=l(),Pt=a("h2"),Rt=a("a"),Ds=a("span"),k(wo.$$.fragment),Ei=l(),js=a("span"),zi=n("OpenAIGPTConfig"),ir=l(),Ce=a("div"),k(Po.$$.fragment),Fi=l(),rt=a("p"),qi=n("This is the configuration class to store the configuration of a "),Kn=a("a"),Ci=n("OpenAIGPTModel"),Di=n(" or a "),Jn=a("a"),ji=n("TFOpenAIGPTModel"),xi=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=a("a"),Hi=n("GPT"),Si=n(" architecture from OpenAI."),Li=l(),yt=a("p"),Ni=n("Configuration objects inherit from "),Xn=a("a"),Wi=n("PretrainedConfig"),Bi=n(` and can be used to control the model outputs. Read the
documentation from `),Qn=a("a"),Ui=n("PretrainedConfig"),Ri=n(" for more information."),Vi=l(),xs=a("p"),Ki=n("Examples:"),Ji=l(),k(Io.$$.fragment),lr=l(),It=a("h2"),Vt=a("a"),Hs=a("span"),k(Oo.$$.fragment),Xi=l(),Ss=a("span"),Qi=n("OpenAIGPTTokenizer"),dr=l(),De=a("div"),k(Ao.$$.fragment),Yi=l(),Ls=a("p"),Zi=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),el=l(),$o=a("ul"),Ns=a("li"),tl=n("lowercases all inputs,"),ol=l(),it=a("li"),nl=n("uses "),Ws=a("code"),sl=n("SpaCy"),al=n(" tokenizer and "),Bs=a("code"),rl=n("ftfy"),il=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Us=a("code"),ll=n("BasicTokenizer"),dl=n(" if not."),cl=l(),Go=a("p"),pl=n("This tokenizer inherits from "),Yn=a("a"),hl=n("PreTrainedTokenizer"),ul=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ml=l(),Zn=a("div"),k(Mo.$$.fragment),cr=l(),Ot=a("h2"),Kt=a("a"),Rs=a("span"),k(Eo.$$.fragment),fl=l(),Vs=a("span"),gl=n("OpenAIGPTTokenizerFast"),pr=l(),Qe=a("div"),k(zo.$$.fragment),_l=l(),Fo=a("p"),Tl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Ks=a("em"),vl=n("tokenizers"),kl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),bl=l(),qo=a("ul"),Js=a("li"),wl=n("lower case all inputs"),Pl=l(),Xs=a("li"),yl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Il=l(),Co=a("p"),Ol=n("This tokenizer inherits from "),es=a("a"),Al=n("PreTrainedTokenizerFast"),$l=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hr=l(),At=a("h2"),Jt=a("a"),Qs=a("span"),k(Do.$$.fragment),Gl=l(),Ys=a("span"),Ml=n("OpenAI specific outputs"),ur=l(),$t=a("div"),k(jo.$$.fragment),El=l(),Zs=a("p"),zl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),mr=l(),Gt=a("div"),k(xo.$$.fragment),Fl=l(),ea=a("p"),ql=n("Base class for outputs of models predicting if two sentences are consecutive or not."),fr=l(),Mt=a("h2"),Xt=a("a"),ta=a("span"),k(Ho.$$.fragment),Cl=l(),oa=a("span"),Dl=n("OpenAIGPTModel"),gr=l(),je=a("div"),k(So.$$.fragment),jl=l(),na=a("p"),xl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Hl=l(),Lo=a("p"),Sl=n("This model inherits from "),ts=a("a"),Ll=n("PreTrainedModel"),Nl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wl=l(),No=a("p"),Bl=n("This model is also a PyTorch "),Wo=a("a"),Ul=n("torch.nn.Module"),Rl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vl=l(),We=a("div"),k(Bo.$$.fragment),Kl=l(),Et=a("p"),Jl=n("The "),os=a("a"),Xl=n("OpenAIGPTModel"),Ql=n(" forward method, overrides the "),sa=a("code"),Yl=n("__call__"),Zl=n(" special method."),ed=l(),k(Qt.$$.fragment),td=l(),aa=a("p"),od=n("Example:"),nd=l(),k(Uo.$$.fragment),_r=l(),zt=a("h2"),Yt=a("a"),ra=a("span"),k(Ro.$$.fragment),sd=l(),ia=a("span"),ad=n("OpenAIGPTLMHeadModel"),Tr=l(),xe=a("div"),k(Vo.$$.fragment),rd=l(),la=a("p"),id=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ld=l(),Ko=a("p"),dd=n("This model inherits from "),ns=a("a"),cd=n("PreTrainedModel"),pd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hd=l(),Jo=a("p"),ud=n("This model is also a PyTorch "),Xo=a("a"),md=n("torch.nn.Module"),fd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd=l(),Be=a("div"),k(Qo.$$.fragment),_d=l(),Ft=a("p"),Td=n("The "),ss=a("a"),vd=n("OpenAIGPTLMHeadModel"),kd=n(" forward method, overrides the "),da=a("code"),bd=n("__call__"),wd=n(" special method."),Pd=l(),k(Zt.$$.fragment),yd=l(),ca=a("p"),Id=n("Example:"),Od=l(),k(Yo.$$.fragment),vr=l(),qt=a("h2"),eo=a("a"),pa=a("span"),k(Zo.$$.fragment),Ad=l(),ha=a("span"),$d=n("OpenAIGPTDoubleHeadsModel"),kr=l(),He=a("div"),k(en.$$.fragment),Gd=l(),ua=a("p"),Md=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ed=l(),tn=a("p"),zd=n("This model inherits from "),as=a("a"),Fd=n("PreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=l(),on=a("p"),Dd=n("This model is also a PyTorch "),nn=a("a"),jd=n("torch.nn.Module"),xd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hd=l(),Ue=a("div"),k(sn.$$.fragment),Sd=l(),Ct=a("p"),Ld=n("The "),rs=a("a"),Nd=n("OpenAIGPTDoubleHeadsModel"),Wd=n(" forward method, overrides the "),ma=a("code"),Bd=n("__call__"),Ud=n(" special method."),Rd=l(),k(to.$$.fragment),Vd=l(),fa=a("p"),Kd=n("Examples:"),Jd=l(),k(an.$$.fragment),br=l(),Dt=a("h2"),oo=a("a"),ga=a("span"),k(rn.$$.fragment),Xd=l(),_a=a("span"),Qd=n("OpenAIGPTForSequenceClassification"),wr=l(),Se=a("div"),k(ln.$$.fragment),Yd=l(),Le=a("p"),Zd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),is=a("a"),ec=n("OpenAIGPTForSequenceClassification"),tc=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),Ta=a("code"),oc=n("pad_token_id"),nc=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),va=a("code"),sc=n("pad_token_id"),ac=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ka=a("code"),rc=n("inputs_embeds"),ic=n(" are passed instead of "),ba=a("code"),lc=n("input_ids"),dc=n(`, it does the same (take
the last value in each row of the batch).`),cc=l(),dn=a("p"),pc=n("This model inherits from "),ls=a("a"),hc=n("PreTrainedModel"),uc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc=l(),cn=a("p"),fc=n("This model is also a PyTorch "),pn=a("a"),gc=n("torch.nn.Module"),_c=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=l(),he=a("div"),k(hn.$$.fragment),vc=l(),jt=a("p"),kc=n("The "),ds=a("a"),bc=n("OpenAIGPTForSequenceClassification"),wc=n(" forward method, overrides the "),wa=a("code"),Pc=n("__call__"),yc=n(" special method."),Ic=l(),k(no.$$.fragment),Oc=l(),Pa=a("p"),Ac=n("Example of single-label classification:"),$c=l(),k(un.$$.fragment),Gc=l(),k(mn.$$.fragment),Mc=l(),ya=a("p"),Ec=n("Example of multi-label classification:"),zc=l(),k(fn.$$.fragment),Pr=l(),xt=a("h2"),so=a("a"),Ia=a("span"),k(gn.$$.fragment),Fc=l(),Oa=a("span"),qc=n("TFOpenAIGPTModel"),yr=l(),ye=a("div"),k(_n.$$.fragment),Cc=l(),Aa=a("p"),Dc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),jc=l(),Tn=a("p"),xc=n("This model inherits from "),cs=a("a"),Hc=n("TFPreTrainedModel"),Sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lc=l(),vn=a("p"),Nc=n("This model is also a "),kn=a("a"),Wc=n("tf.keras.Model"),Bc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uc=l(),k(ao.$$.fragment),Rc=l(),Re=a("div"),k(bn.$$.fragment),Vc=l(),Ht=a("p"),Kc=n("The "),ps=a("a"),Jc=n("TFOpenAIGPTModel"),Xc=n(" forward method, overrides the "),$a=a("code"),Qc=n("__call__"),Yc=n(" special method."),Zc=l(),k(ro.$$.fragment),ep=l(),Ga=a("p"),tp=n("Example:"),op=l(),k(wn.$$.fragment),Ir=l(),St=a("h2"),io=a("a"),Ma=a("span"),k(Pn.$$.fragment),np=l(),Ea=a("span"),sp=n("TFOpenAIGPTLMHeadModel"),Or=l(),Ie=a("div"),k(yn.$$.fragment),ap=l(),za=a("p"),rp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ip=l(),In=a("p"),lp=n("This model inherits from "),hs=a("a"),dp=n("TFPreTrainedModel"),cp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pp=l(),On=a("p"),hp=n("This model is also a "),An=a("a"),up=n("tf.keras.Model"),mp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fp=l(),k(lo.$$.fragment),gp=l(),Ve=a("div"),k($n.$$.fragment),_p=l(),Lt=a("p"),Tp=n("The "),us=a("a"),vp=n("TFOpenAIGPTLMHeadModel"),kp=n(" forward method, overrides the "),Fa=a("code"),bp=n("__call__"),wp=n(" special method."),Pp=l(),k(co.$$.fragment),yp=l(),qa=a("p"),Ip=n("Example:"),Op=l(),k(Gn.$$.fragment),Ar=l(),Nt=a("h2"),po=a("a"),Ca=a("span"),k(Mn.$$.fragment),Ap=l(),Da=a("span"),$p=n("TFOpenAIGPTDoubleHeadsModel"),$r=l(),Oe=a("div"),k(En.$$.fragment),Gp=l(),ja=a("p"),Mp=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ep=l(),zn=a("p"),zp=n("This model inherits from "),ms=a("a"),Fp=n("TFPreTrainedModel"),qp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp=l(),Fn=a("p"),Dp=n("This model is also a "),qn=a("a"),jp=n("tf.keras.Model"),xp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp=l(),k(ho.$$.fragment),Sp=l(),Ke=a("div"),k(Cn.$$.fragment),Lp=l(),Wt=a("p"),Np=n("The "),fs=a("a"),Wp=n("TFOpenAIGPTDoubleHeadsModel"),Bp=n(" forward method, overrides the "),xa=a("code"),Up=n("__call__"),Rp=n(" special method."),Vp=l(),k(uo.$$.fragment),Kp=l(),Ha=a("p"),Jp=n("Examples:"),Xp=l(),k(Dn.$$.fragment),Gr=l(),Bt=a("h2"),mo=a("a"),Sa=a("span"),k(jn.$$.fragment),Qp=l(),La=a("span"),Yp=n("TFOpenAIGPTForSequenceClassification"),Mr=l(),le=a("div"),k(xn.$$.fragment),Zp=l(),Na=a("p"),eh=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),th=l(),gs=a("p"),_s=a("a"),oh=n("TFOpenAIGPTForSequenceClassification"),nh=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),sh=l(),Ye=a("p"),ah=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Wa=a("code"),rh=n("pad_token_id"),ih=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=a("code"),lh=n("pad_token_id"),dh=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ua=a("code"),ch=n("inputs_embeds"),ph=n(" are passed instead of "),Ra=a("code"),hh=n("input_ids"),uh=n(`, it does the same (take the last value in
each row of the batch).`),mh=l(),Hn=a("p"),fh=n("This model inherits from "),Ts=a("a"),gh=n("TFPreTrainedModel"),_h=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th=l(),Sn=a("p"),vh=n("This model is also a "),Ln=a("a"),kh=n("tf.keras.Model"),bh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wh=l(),k(fo.$$.fragment),Ph=l(),Je=a("div"),k(Nn.$$.fragment),yh=l(),Ut=a("p"),Ih=n("The "),vs=a("a"),Oh=n("TFOpenAIGPTForSequenceClassification"),Ah=n(" forward method, overrides the "),Va=a("code"),$h=n("__call__"),Gh=n(" special method."),Mh=l(),k(go.$$.fragment),Eh=l(),Ka=a("p"),zh=n("Example:"),Fh=l(),k(Wn.$$.fragment),this.h()},l(o){const m=af('[data-svelte="svelte-1phssyn"]',document.head);u=r(m,"META",{name:!0,content:!0}),m.forEach(t),G=d(o),f=r(o,"H1",{class:!0});var Bn=i(f);g=r(Bn,"A",{id:!0,class:!0,href:!0});var Ja=i(g);v=r(Ja,"SPAN",{});var Xa=i(v);b(T.$$.fragment,Xa),Xa.forEach(t),Ja.forEach(t),_=d(Bn),A=r(Bn,"SPAN",{});var Qa=i(A);ue=s(Qa,"OpenAI GPT"),Qa.forEach(t),Bn.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Un=i($);X=r(Un,"A",{id:!0,class:!0,href:!0});var Ya=i(X);j=r(Ya,"SPAN",{});var Za=i(j);b(Y.$$.fragment,Za),Za.forEach(t),Ya.forEach(t),me=d(Un),x=r(Un,"SPAN",{});var er=i(x);fe=s(er,"Overview"),er.forEach(t),Un.forEach(t),de=d(o),S=r(o,"P",{});var Rn=i(S);q=s(Rn,"OpenAI GPT model was proposed in "),Z=r(Rn,"A",{href:!0,rel:!0});var tr=i(Z);ee=s(tr,"Improving Language Understanding by Generative Pre-Training"),tr.forEach(t),M=s(Rn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Rn.forEach(t),z=d(o),oe=r(o,"P",{});var or=i(oe);N=s(or,"The abstract from the paper is the following:"),or.forEach(t),ce=d(o),ne=r(o,"P",{});var nr=i(ne);H=r(nr,"EM",{});var Dh=i(H);ge=s(Dh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),Dh.forEach(t),nr.forEach(t),pe=d(o),E=r(o,"P",{});var jh=i(E);_e=s(jh,"Tips:"),jh.forEach(t),L=d(o),Q=r(o,"UL",{});var zr=i(Q);re=r(zr,"LI",{});var xh=i(re);W=s(xh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),xh.forEach(t),Te=d(zr),te=r(zr,"LI",{});var Fr=i(te);C=s(Fr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(Fr,"EM",{});var Hh=i(ie);B=s(Hh,"run_generation.py"),Hh.forEach(t),ve=s(Fr," example script."),Fr.forEach(t),zr.forEach(t),p=d(o),O=r(o,"P",{});var qh=i(O);U=r(qh,"A",{href:!0,rel:!0});var Sh=i(U);Ee=s(Sh,"Write With Transformer"),Sh.forEach(t),ze=s(qh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),qh.forEach(t),F=d(o),se=r(o,"P",{});var ks=i(se);Fe=s(ks,"This model was contributed by "),ke=r(ks,"A",{href:!0,rel:!0});var Lh=i(ke);D=s(Lh,"thomwolf"),Lh.forEach(t),R=s(ks,". The original code can be found "),be=r(ks,"A",{href:!0,rel:!0});var Nh=i(be);qe=s(Nh,"here"),Nh.forEach(t),V=s(ks,"."),ks.forEach(t),Ae=d(o),Pe=r(o,"P",{});var Wh=i(Pe);we=s(Wh,"Note:"),Wh.forEach(t),$e=d(o),Ze=r(o,"P",{});var _o=i(Ze);fi=s(_o,"If you want to reproduce the original tokenization process of the "),Ms=r(_o,"EM",{});var Bh=i(Ms);gi=s(Bh,"OpenAI GPT"),Bh.forEach(t),_i=s(_o," paper, you will need to install "),Es=r(_o,"CODE",{});var Uh=i(Es);Ti=s(Uh,"ftfy"),Uh.forEach(t),vi=s(_o,`
and `),zs=r(_o,"CODE",{});var Rh=i(zs);ki=s(Rh,"SpaCy"),Rh.forEach(t),bi=s(_o,":"),_o.forEach(t),sr=d(o),b(bo.$$.fragment,o),ar=d(o),Ne=r(o,"P",{});var lt=i(Ne);wi=s(lt,"If you don\u2019t install "),Fs=r(lt,"CODE",{});var Vh=i(Fs);Pi=s(Vh,"ftfy"),Vh.forEach(t),yi=s(lt," and "),qs=r(lt,"CODE",{});var Kh=i(qs);Ii=s(Kh,"SpaCy"),Kh.forEach(t),Oi=s(lt,", the "),Vn=r(lt,"A",{href:!0});var Jh=i(Vn);Ai=s(Jh,"OpenAIGPTTokenizer"),Jh.forEach(t),$i=s(lt,` will default to tokenize
using BERT\u2019s `),Cs=r(lt,"CODE",{});var Xh=i(Cs);Gi=s(Xh,"BasicTokenizer"),Xh.forEach(t),Mi=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),rr=d(o),Pt=r(o,"H2",{class:!0});var qr=i(Pt);Rt=r(qr,"A",{id:!0,class:!0,href:!0});var Qh=i(Rt);Ds=r(Qh,"SPAN",{});var Yh=i(Ds);b(wo.$$.fragment,Yh),Yh.forEach(t),Qh.forEach(t),Ei=d(qr),js=r(qr,"SPAN",{});var Zh=i(js);zi=s(Zh,"OpenAIGPTConfig"),Zh.forEach(t),qr.forEach(t),ir=d(o),Ce=r(o,"DIV",{class:!0});var dt=i(Ce);b(Po.$$.fragment,dt),Fi=d(dt),rt=r(dt,"P",{});var To=i(rt);qi=s(To,"This is the configuration class to store the configuration of a "),Kn=r(To,"A",{href:!0});var eu=i(Kn);Ci=s(eu,"OpenAIGPTModel"),eu.forEach(t),Di=s(To," or a "),Jn=r(To,"A",{href:!0});var tu=i(Jn);ji=s(tu,"TFOpenAIGPTModel"),tu.forEach(t),xi=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=r(To,"A",{href:!0,rel:!0});var ou=i(yo);Hi=s(ou,"GPT"),ou.forEach(t),Si=s(To," architecture from OpenAI."),To.forEach(t),Li=d(dt),yt=r(dt,"P",{});var bs=i(yt);Ni=s(bs,"Configuration objects inherit from "),Xn=r(bs,"A",{href:!0});var nu=i(Xn);Wi=s(nu,"PretrainedConfig"),nu.forEach(t),Bi=s(bs,` and can be used to control the model outputs. Read the
documentation from `),Qn=r(bs,"A",{href:!0});var su=i(Qn);Ui=s(su,"PretrainedConfig"),su.forEach(t),Ri=s(bs," for more information."),bs.forEach(t),Vi=d(dt),xs=r(dt,"P",{});var au=i(xs);Ki=s(au,"Examples:"),au.forEach(t),Ji=d(dt),b(Io.$$.fragment,dt),dt.forEach(t),lr=d(o),It=r(o,"H2",{class:!0});var Cr=i(It);Vt=r(Cr,"A",{id:!0,class:!0,href:!0});var ru=i(Vt);Hs=r(ru,"SPAN",{});var iu=i(Hs);b(Oo.$$.fragment,iu),iu.forEach(t),ru.forEach(t),Xi=d(Cr),Ss=r(Cr,"SPAN",{});var lu=i(Ss);Qi=s(lu,"OpenAIGPTTokenizer"),lu.forEach(t),Cr.forEach(t),dr=d(o),De=r(o,"DIV",{class:!0});var ct=i(De);b(Ao.$$.fragment,ct),Yi=d(ct),Ls=r(ct,"P",{});var du=i(Ls);Zi=s(du,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),du.forEach(t),el=d(ct),$o=r(ct,"UL",{});var Dr=i($o);Ns=r(Dr,"LI",{});var cu=i(Ns);tl=s(cu,"lowercases all inputs,"),cu.forEach(t),ol=d(Dr),it=r(Dr,"LI",{});var vo=i(it);nl=s(vo,"uses "),Ws=r(vo,"CODE",{});var pu=i(Ws);sl=s(pu,"SpaCy"),pu.forEach(t),al=s(vo," tokenizer and "),Bs=r(vo,"CODE",{});var hu=i(Bs);rl=s(hu,"ftfy"),hu.forEach(t),il=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Us=r(vo,"CODE",{});var uu=i(Us);ll=s(uu,"BasicTokenizer"),uu.forEach(t),dl=s(vo," if not."),vo.forEach(t),Dr.forEach(t),cl=d(ct),Go=r(ct,"P",{});var jr=i(Go);pl=s(jr,"This tokenizer inherits from "),Yn=r(jr,"A",{href:!0});var mu=i(Yn);hl=s(mu,"PreTrainedTokenizer"),mu.forEach(t),ul=s(jr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),jr.forEach(t),ml=d(ct),Zn=r(ct,"DIV",{class:!0});var fu=i(Zn);b(Mo.$$.fragment,fu),fu.forEach(t),ct.forEach(t),cr=d(o),Ot=r(o,"H2",{class:!0});var xr=i(Ot);Kt=r(xr,"A",{id:!0,class:!0,href:!0});var gu=i(Kt);Rs=r(gu,"SPAN",{});var _u=i(Rs);b(Eo.$$.fragment,_u),_u.forEach(t),gu.forEach(t),fl=d(xr),Vs=r(xr,"SPAN",{});var Tu=i(Vs);gl=s(Tu,"OpenAIGPTTokenizerFast"),Tu.forEach(t),xr.forEach(t),pr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);b(zo.$$.fragment,ko),_l=d(ko),Fo=r(ko,"P",{});var Hr=i(Fo);Tl=s(Hr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Ks=r(Hr,"EM",{});var vu=i(Ks);vl=s(vu,"tokenizers"),vu.forEach(t),kl=s(Hr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Hr.forEach(t),bl=d(ko),qo=r(ko,"UL",{});var Sr=i(qo);Js=r(Sr,"LI",{});var ku=i(Js);wl=s(ku,"lower case all inputs"),ku.forEach(t),Pl=d(Sr),Xs=r(Sr,"LI",{});var bu=i(Xs);yl=s(bu,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),bu.forEach(t),Sr.forEach(t),Il=d(ko),Co=r(ko,"P",{});var Lr=i(Co);Ol=s(Lr,"This tokenizer inherits from "),es=r(Lr,"A",{href:!0});var wu=i(es);Al=s(wu,"PreTrainedTokenizerFast"),wu.forEach(t),$l=s(Lr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Lr.forEach(t),ko.forEach(t),hr=d(o),At=r(o,"H2",{class:!0});var Nr=i(At);Jt=r(Nr,"A",{id:!0,class:!0,href:!0});var Pu=i(Jt);Qs=r(Pu,"SPAN",{});var yu=i(Qs);b(Do.$$.fragment,yu),yu.forEach(t),Pu.forEach(t),Gl=d(Nr),Ys=r(Nr,"SPAN",{});var Iu=i(Ys);Ml=s(Iu,"OpenAI specific outputs"),Iu.forEach(t),Nr.forEach(t),ur=d(o),$t=r(o,"DIV",{class:!0});var Wr=i($t);b(jo.$$.fragment,Wr),El=d(Wr),Zs=r(Wr,"P",{});var Ou=i(Zs);zl=s(Ou,"Base class for outputs of models predicting if two sentences are consecutive or not."),Ou.forEach(t),Wr.forEach(t),mr=d(o),Gt=r(o,"DIV",{class:!0});var Br=i(Gt);b(xo.$$.fragment,Br),Fl=d(Br),ea=r(Br,"P",{});var Au=i(ea);ql=s(Au,"Base class for outputs of models predicting if two sentences are consecutive or not."),Au.forEach(t),Br.forEach(t),fr=d(o),Mt=r(o,"H2",{class:!0});var Ur=i(Mt);Xt=r(Ur,"A",{id:!0,class:!0,href:!0});var $u=i(Xt);ta=r($u,"SPAN",{});var Gu=i(ta);b(Ho.$$.fragment,Gu),Gu.forEach(t),$u.forEach(t),Cl=d(Ur),oa=r(Ur,"SPAN",{});var Mu=i(oa);Dl=s(Mu,"OpenAIGPTModel"),Mu.forEach(t),Ur.forEach(t),gr=d(o),je=r(o,"DIV",{class:!0});var pt=i(je);b(So.$$.fragment,pt),jl=d(pt),na=r(pt,"P",{});var Eu=i(na);xl=s(Eu,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Eu.forEach(t),Hl=d(pt),Lo=r(pt,"P",{});var Rr=i(Lo);Sl=s(Rr,"This model inherits from "),ts=r(Rr,"A",{href:!0});var zu=i(ts);Ll=s(zu,"PreTrainedModel"),zu.forEach(t),Nl=s(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(t),Wl=d(pt),No=r(pt,"P",{});var Vr=i(No);Bl=s(Vr,"This model is also a PyTorch "),Wo=r(Vr,"A",{href:!0,rel:!0});var Fu=i(Wo);Ul=s(Fu,"torch.nn.Module"),Fu.forEach(t),Rl=s(Vr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr.forEach(t),Vl=d(pt),We=r(pt,"DIV",{class:!0});var ht=i(We);b(Bo.$$.fragment,ht),Kl=d(ht),Et=r(ht,"P",{});var ws=i(Et);Jl=s(ws,"The "),os=r(ws,"A",{href:!0});var qu=i(os);Xl=s(qu,"OpenAIGPTModel"),qu.forEach(t),Ql=s(ws," forward method, overrides the "),sa=r(ws,"CODE",{});var Cu=i(sa);Yl=s(Cu,"__call__"),Cu.forEach(t),Zl=s(ws," special method."),ws.forEach(t),ed=d(ht),b(Qt.$$.fragment,ht),td=d(ht),aa=r(ht,"P",{});var Du=i(aa);od=s(Du,"Example:"),Du.forEach(t),nd=d(ht),b(Uo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),_r=d(o),zt=r(o,"H2",{class:!0});var Kr=i(zt);Yt=r(Kr,"A",{id:!0,class:!0,href:!0});var ju=i(Yt);ra=r(ju,"SPAN",{});var xu=i(ra);b(Ro.$$.fragment,xu),xu.forEach(t),ju.forEach(t),sd=d(Kr),ia=r(Kr,"SPAN",{});var Hu=i(ia);ad=s(Hu,"OpenAIGPTLMHeadModel"),Hu.forEach(t),Kr.forEach(t),Tr=d(o),xe=r(o,"DIV",{class:!0});var ut=i(xe);b(Vo.$$.fragment,ut),rd=d(ut),la=r(ut,"P",{});var Su=i(la);id=s(Su,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Su.forEach(t),ld=d(ut),Ko=r(ut,"P",{});var Jr=i(Ko);dd=s(Jr,"This model inherits from "),ns=r(Jr,"A",{href:!0});var Lu=i(ns);cd=s(Lu,"PreTrainedModel"),Lu.forEach(t),pd=s(Jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr.forEach(t),hd=d(ut),Jo=r(ut,"P",{});var Xr=i(Jo);ud=s(Xr,"This model is also a PyTorch "),Xo=r(Xr,"A",{href:!0,rel:!0});var Nu=i(Xo);md=s(Nu,"torch.nn.Module"),Nu.forEach(t),fd=s(Xr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xr.forEach(t),gd=d(ut),Be=r(ut,"DIV",{class:!0});var mt=i(Be);b(Qo.$$.fragment,mt),_d=d(mt),Ft=r(mt,"P",{});var Ps=i(Ft);Td=s(Ps,"The "),ss=r(Ps,"A",{href:!0});var Wu=i(ss);vd=s(Wu,"OpenAIGPTLMHeadModel"),Wu.forEach(t),kd=s(Ps," forward method, overrides the "),da=r(Ps,"CODE",{});var Bu=i(da);bd=s(Bu,"__call__"),Bu.forEach(t),wd=s(Ps," special method."),Ps.forEach(t),Pd=d(mt),b(Zt.$$.fragment,mt),yd=d(mt),ca=r(mt,"P",{});var Uu=i(ca);Id=s(Uu,"Example:"),Uu.forEach(t),Od=d(mt),b(Yo.$$.fragment,mt),mt.forEach(t),ut.forEach(t),vr=d(o),qt=r(o,"H2",{class:!0});var Qr=i(qt);eo=r(Qr,"A",{id:!0,class:!0,href:!0});var Ru=i(eo);pa=r(Ru,"SPAN",{});var Vu=i(pa);b(Zo.$$.fragment,Vu),Vu.forEach(t),Ru.forEach(t),Ad=d(Qr),ha=r(Qr,"SPAN",{});var Ku=i(ha);$d=s(Ku,"OpenAIGPTDoubleHeadsModel"),Ku.forEach(t),Qr.forEach(t),kr=d(o),He=r(o,"DIV",{class:!0});var ft=i(He);b(en.$$.fragment,ft),Gd=d(ft),ua=r(ft,"P",{});var Ju=i(ua);Md=s(Ju,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Ju.forEach(t),Ed=d(ft),tn=r(ft,"P",{});var Yr=i(tn);zd=s(Yr,"This model inherits from "),as=r(Yr,"A",{href:!0});var Xu=i(as);Fd=s(Xu,"PreTrainedModel"),Xu.forEach(t),qd=s(Yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr.forEach(t),Cd=d(ft),on=r(ft,"P",{});var Zr=i(on);Dd=s(Zr,"This model is also a PyTorch "),nn=r(Zr,"A",{href:!0,rel:!0});var Qu=i(nn);jd=s(Qu,"torch.nn.Module"),Qu.forEach(t),xd=s(Zr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zr.forEach(t),Hd=d(ft),Ue=r(ft,"DIV",{class:!0});var gt=i(Ue);b(sn.$$.fragment,gt),Sd=d(gt),Ct=r(gt,"P",{});var ys=i(Ct);Ld=s(ys,"The "),rs=r(ys,"A",{href:!0});var Yu=i(rs);Nd=s(Yu,"OpenAIGPTDoubleHeadsModel"),Yu.forEach(t),Wd=s(ys," forward method, overrides the "),ma=r(ys,"CODE",{});var Zu=i(ma);Bd=s(Zu,"__call__"),Zu.forEach(t),Ud=s(ys," special method."),ys.forEach(t),Rd=d(gt),b(to.$$.fragment,gt),Vd=d(gt),fa=r(gt,"P",{});var em=i(fa);Kd=s(em,"Examples:"),em.forEach(t),Jd=d(gt),b(an.$$.fragment,gt),gt.forEach(t),ft.forEach(t),br=d(o),Dt=r(o,"H2",{class:!0});var ei=i(Dt);oo=r(ei,"A",{id:!0,class:!0,href:!0});var tm=i(oo);ga=r(tm,"SPAN",{});var om=i(ga);b(rn.$$.fragment,om),om.forEach(t),tm.forEach(t),Xd=d(ei),_a=r(ei,"SPAN",{});var nm=i(_a);Qd=s(nm,"OpenAIGPTForSequenceClassification"),nm.forEach(t),ei.forEach(t),wr=d(o),Se=r(o,"DIV",{class:!0});var _t=i(Se);b(ln.$$.fragment,_t),Yd=d(_t),Le=r(_t,"P",{});var et=i(Le);Zd=s(et,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),is=r(et,"A",{href:!0});var sm=i(is);ec=s(sm,"OpenAIGPTForSequenceClassification"),sm.forEach(t),tc=s(et,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),Ta=r(et,"CODE",{});var am=i(Ta);oc=s(am,"pad_token_id"),am.forEach(t),nc=s(et,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),va=r(et,"CODE",{});var rm=i(va);sc=s(rm,"pad_token_id"),rm.forEach(t),ac=s(et,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ka=r(et,"CODE",{});var im=i(ka);rc=s(im,"inputs_embeds"),im.forEach(t),ic=s(et," are passed instead of "),ba=r(et,"CODE",{});var lm=i(ba);lc=s(lm,"input_ids"),lm.forEach(t),dc=s(et,`, it does the same (take
the last value in each row of the batch).`),et.forEach(t),cc=d(_t),dn=r(_t,"P",{});var ti=i(dn);pc=s(ti,"This model inherits from "),ls=r(ti,"A",{href:!0});var dm=i(ls);hc=s(dm,"PreTrainedModel"),dm.forEach(t),uc=s(ti,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ti.forEach(t),mc=d(_t),cn=r(_t,"P",{});var oi=i(cn);fc=s(oi,"This model is also a PyTorch "),pn=r(oi,"A",{href:!0,rel:!0});var cm=i(pn);gc=s(cm,"torch.nn.Module"),cm.forEach(t),_c=s(oi,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oi.forEach(t),Tc=d(_t),he=r(_t,"DIV",{class:!0});var Ge=i(he);b(hn.$$.fragment,Ge),vc=d(Ge),jt=r(Ge,"P",{});var Is=i(jt);kc=s(Is,"The "),ds=r(Is,"A",{href:!0});var pm=i(ds);bc=s(pm,"OpenAIGPTForSequenceClassification"),pm.forEach(t),wc=s(Is," forward method, overrides the "),wa=r(Is,"CODE",{});var hm=i(wa);Pc=s(hm,"__call__"),hm.forEach(t),yc=s(Is," special method."),Is.forEach(t),Ic=d(Ge),b(no.$$.fragment,Ge),Oc=d(Ge),Pa=r(Ge,"P",{});var um=i(Pa);Ac=s(um,"Example of single-label classification:"),um.forEach(t),$c=d(Ge),b(un.$$.fragment,Ge),Gc=d(Ge),b(mn.$$.fragment,Ge),Mc=d(Ge),ya=r(Ge,"P",{});var mm=i(ya);Ec=s(mm,"Example of multi-label classification:"),mm.forEach(t),zc=d(Ge),b(fn.$$.fragment,Ge),Ge.forEach(t),_t.forEach(t),Pr=d(o),xt=r(o,"H2",{class:!0});var ni=i(xt);so=r(ni,"A",{id:!0,class:!0,href:!0});var fm=i(so);Ia=r(fm,"SPAN",{});var gm=i(Ia);b(gn.$$.fragment,gm),gm.forEach(t),fm.forEach(t),Fc=d(ni),Oa=r(ni,"SPAN",{});var _m=i(Oa);qc=s(_m,"TFOpenAIGPTModel"),_m.forEach(t),ni.forEach(t),yr=d(o),ye=r(o,"DIV",{class:!0});var tt=i(ye);b(_n.$$.fragment,tt),Cc=d(tt),Aa=r(tt,"P",{});var Tm=i(Aa);Dc=s(Tm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Tm.forEach(t),jc=d(tt),Tn=r(tt,"P",{});var si=i(Tn);xc=s(si,"This model inherits from "),cs=r(si,"A",{href:!0});var vm=i(cs);Hc=s(vm,"TFPreTrainedModel"),vm.forEach(t),Sc=s(si,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),si.forEach(t),Lc=d(tt),vn=r(tt,"P",{});var ai=i(vn);Nc=s(ai,"This model is also a "),kn=r(ai,"A",{href:!0,rel:!0});var km=i(kn);Wc=s(km,"tf.keras.Model"),km.forEach(t),Bc=s(ai,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ai.forEach(t),Uc=d(tt),b(ao.$$.fragment,tt),Rc=d(tt),Re=r(tt,"DIV",{class:!0});var Tt=i(Re);b(bn.$$.fragment,Tt),Vc=d(Tt),Ht=r(Tt,"P",{});var Os=i(Ht);Kc=s(Os,"The "),ps=r(Os,"A",{href:!0});var bm=i(ps);Jc=s(bm,"TFOpenAIGPTModel"),bm.forEach(t),Xc=s(Os," forward method, overrides the "),$a=r(Os,"CODE",{});var wm=i($a);Qc=s(wm,"__call__"),wm.forEach(t),Yc=s(Os," special method."),Os.forEach(t),Zc=d(Tt),b(ro.$$.fragment,Tt),ep=d(Tt),Ga=r(Tt,"P",{});var Pm=i(Ga);tp=s(Pm,"Example:"),Pm.forEach(t),op=d(Tt),b(wn.$$.fragment,Tt),Tt.forEach(t),tt.forEach(t),Ir=d(o),St=r(o,"H2",{class:!0});var ri=i(St);io=r(ri,"A",{id:!0,class:!0,href:!0});var ym=i(io);Ma=r(ym,"SPAN",{});var Im=i(Ma);b(Pn.$$.fragment,Im),Im.forEach(t),ym.forEach(t),np=d(ri),Ea=r(ri,"SPAN",{});var Om=i(Ea);sp=s(Om,"TFOpenAIGPTLMHeadModel"),Om.forEach(t),ri.forEach(t),Or=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);b(yn.$$.fragment,ot),ap=d(ot),za=r(ot,"P",{});var Am=i(za);rp=s(Am,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Am.forEach(t),ip=d(ot),In=r(ot,"P",{});var ii=i(In);lp=s(ii,"This model inherits from "),hs=r(ii,"A",{href:!0});var $m=i(hs);dp=s($m,"TFPreTrainedModel"),$m.forEach(t),cp=s(ii,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii.forEach(t),pp=d(ot),On=r(ot,"P",{});var li=i(On);hp=s(li,"This model is also a "),An=r(li,"A",{href:!0,rel:!0});var Gm=i(An);up=s(Gm,"tf.keras.Model"),Gm.forEach(t),mp=s(li,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),li.forEach(t),fp=d(ot),b(lo.$$.fragment,ot),gp=d(ot),Ve=r(ot,"DIV",{class:!0});var vt=i(Ve);b($n.$$.fragment,vt),_p=d(vt),Lt=r(vt,"P",{});var As=i(Lt);Tp=s(As,"The "),us=r(As,"A",{href:!0});var Mm=i(us);vp=s(Mm,"TFOpenAIGPTLMHeadModel"),Mm.forEach(t),kp=s(As," forward method, overrides the "),Fa=r(As,"CODE",{});var Em=i(Fa);bp=s(Em,"__call__"),Em.forEach(t),wp=s(As," special method."),As.forEach(t),Pp=d(vt),b(co.$$.fragment,vt),yp=d(vt),qa=r(vt,"P",{});var zm=i(qa);Ip=s(zm,"Example:"),zm.forEach(t),Op=d(vt),b(Gn.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Ar=d(o),Nt=r(o,"H2",{class:!0});var di=i(Nt);po=r(di,"A",{id:!0,class:!0,href:!0});var Fm=i(po);Ca=r(Fm,"SPAN",{});var qm=i(Ca);b(Mn.$$.fragment,qm),qm.forEach(t),Fm.forEach(t),Ap=d(di),Da=r(di,"SPAN",{});var Cm=i(Da);$p=s(Cm,"TFOpenAIGPTDoubleHeadsModel"),Cm.forEach(t),di.forEach(t),$r=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);b(En.$$.fragment,nt),Gp=d(nt),ja=r(nt,"P",{});var Dm=i(ja);Mp=s(Dm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Dm.forEach(t),Ep=d(nt),zn=r(nt,"P",{});var ci=i(zn);zp=s(ci,"This model inherits from "),ms=r(ci,"A",{href:!0});var jm=i(ms);Fp=s(jm,"TFPreTrainedModel"),jm.forEach(t),qp=s(ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci.forEach(t),Cp=d(nt),Fn=r(nt,"P",{});var pi=i(Fn);Dp=s(pi,"This model is also a "),qn=r(pi,"A",{href:!0,rel:!0});var xm=i(qn);jp=s(xm,"tf.keras.Model"),xm.forEach(t),xp=s(pi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pi.forEach(t),Hp=d(nt),b(ho.$$.fragment,nt),Sp=d(nt),Ke=r(nt,"DIV",{class:!0});var kt=i(Ke);b(Cn.$$.fragment,kt),Lp=d(kt),Wt=r(kt,"P",{});var $s=i(Wt);Np=s($s,"The "),fs=r($s,"A",{href:!0});var Hm=i(fs);Wp=s(Hm,"TFOpenAIGPTDoubleHeadsModel"),Hm.forEach(t),Bp=s($s," forward method, overrides the "),xa=r($s,"CODE",{});var Sm=i(xa);Up=s(Sm,"__call__"),Sm.forEach(t),Rp=s($s," special method."),$s.forEach(t),Vp=d(kt),b(uo.$$.fragment,kt),Kp=d(kt),Ha=r(kt,"P",{});var Lm=i(Ha);Jp=s(Lm,"Examples:"),Lm.forEach(t),Xp=d(kt),b(Dn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),Gr=d(o),Bt=r(o,"H2",{class:!0});var hi=i(Bt);mo=r(hi,"A",{id:!0,class:!0,href:!0});var Nm=i(mo);Sa=r(Nm,"SPAN",{});var Wm=i(Sa);b(jn.$$.fragment,Wm),Wm.forEach(t),Nm.forEach(t),Qp=d(hi),La=r(hi,"SPAN",{});var Bm=i(La);Yp=s(Bm,"TFOpenAIGPTForSequenceClassification"),Bm.forEach(t),hi.forEach(t),Mr=d(o),le=r(o,"DIV",{class:!0});var Me=i(le);b(xn.$$.fragment,Me),Zp=d(Me),Na=r(Me,"P",{});var Um=i(Na);eh=s(Um,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Um.forEach(t),th=d(Me),gs=r(Me,"P",{});var Ch=i(gs);_s=r(Ch,"A",{href:!0});var Rm=i(_s);oh=s(Rm,"TFOpenAIGPTForSequenceClassification"),Rm.forEach(t),nh=s(Ch,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Ch.forEach(t),sh=d(Me),Ye=r(Me,"P",{});var bt=i(Ye);ah=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Wa=r(bt,"CODE",{});var Vm=i(Wa);rh=s(Vm,"pad_token_id"),Vm.forEach(t),ih=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=r(bt,"CODE",{});var Km=i(Ba);lh=s(Km,"pad_token_id"),Km.forEach(t),dh=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ua=r(bt,"CODE",{});var Jm=i(Ua);ch=s(Jm,"inputs_embeds"),Jm.forEach(t),ph=s(bt," are passed instead of "),Ra=r(bt,"CODE",{});var Xm=i(Ra);hh=s(Xm,"input_ids"),Xm.forEach(t),uh=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),mh=d(Me),Hn=r(Me,"P",{});var ui=i(Hn);fh=s(ui,"This model inherits from "),Ts=r(ui,"A",{href:!0});var Qm=i(Ts);gh=s(Qm,"TFPreTrainedModel"),Qm.forEach(t),_h=s(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),Th=d(Me),Sn=r(Me,"P",{});var mi=i(Sn);vh=s(mi,"This model is also a "),Ln=r(mi,"A",{href:!0,rel:!0});var Ym=i(Ln);kh=s(Ym,"tf.keras.Model"),Ym.forEach(t),bh=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),wh=d(Me),b(fo.$$.fragment,Me),Ph=d(Me),Je=r(Me,"DIV",{class:!0});var wt=i(Je);b(Nn.$$.fragment,wt),yh=d(wt),Ut=r(wt,"P",{});var Gs=i(Ut);Ih=s(Gs,"The "),vs=r(Gs,"A",{href:!0});var Zm=i(vs);Oh=s(Zm,"TFOpenAIGPTForSequenceClassification"),Zm.forEach(t),Ah=s(Gs," forward method, overrides the "),Va=r(Gs,"CODE",{});var ef=i(Va);$h=s(ef,"__call__"),ef.forEach(t),Gh=s(Gs," special method."),Gs.forEach(t),Mh=d(wt),b(go.$$.fragment,wt),Eh=d(wt),Ka=r(wt,"P",{});var tf=i(Ka);zh=s(tf,"Example:"),tf.forEach(t),Fh=d(wt),b(Wn.$$.fragment,wt),wt.forEach(t),Me.forEach(t),this.h()},h(){c(u,"name","hf:doc:metadata"),c(u,"content",JSON.stringify(bf)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c($,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(U,"href","https://transformer.huggingface.co/doc/gpt"),c(U,"rel","nofollow"),c(ke,"href","https://huggingface.co/thomwolf"),c(ke,"rel","nofollow"),c(be,"href","https://github.com/openai/finetune-transformer-lm"),c(be,"rel","nofollow"),c(Vn,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(Pt,"class","relative group"),c(Kn,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Jn,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(yo,"href","https://huggingface.co/openai-gpt"),c(yo,"rel","nofollow"),c(Xn,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Qn,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ce,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Yn,"href","/docs/transformers/pr_16363/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Zn,"class","docstring"),c(De,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(es,"href","/docs/transformers/pr_16363/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(ts,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wo,"rel","nofollow"),c(os,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(We,"class","docstring"),c(je,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(ns,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(ss,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(Be,"class","docstring"),c(xe,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(as,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(rs,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(Ue,"class","docstring"),c(He,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(Dt,"class","relative group"),c(is,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(ls,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(ds,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(he,"class","docstring"),c(Se,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(cs,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kn,"rel","nofollow"),c(ps,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Re,"class","docstring"),c(ye,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(hs,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(An,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(An,"rel","nofollow"),c(us,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Ve,"class","docstring"),c(Ie,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(ms,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qn,"rel","nofollow"),c(fs,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ke,"class","docstring"),c(Oe,"class","docstring"),c(mo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Bt,"class","relative group"),c(_s,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Ts,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ln,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ln,"rel","nofollow"),c(vs,"href","/docs/transformers/pr_16363/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Je,"class","docstring"),c(le,"class","docstring")},m(o,m){e(document.head,u),h(o,G,m),h(o,f,m),e(f,g),e(g,v),w(T,v,null),e(f,_),e(f,A),e(A,ue),h(o,J,m),h(o,$,m),e($,X),e(X,j),w(Y,j,null),e($,me),e($,x),e(x,fe),h(o,de,m),h(o,S,m),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,m),h(o,oe,m),e(oe,N),h(o,ce,m),h(o,ne,m),e(ne,H),e(H,ge),h(o,pe,m),h(o,E,m),e(E,_e),h(o,L,m),h(o,Q,m),e(Q,re),e(re,W),e(Q,Te),e(Q,te),e(te,C),e(te,ie),e(ie,B),e(te,ve),h(o,p,m),h(o,O,m),e(O,U),e(U,Ee),e(O,ze),h(o,F,m),h(o,se,m),e(se,Fe),e(se,ke),e(ke,D),e(se,R),e(se,be),e(be,qe),e(se,V),h(o,Ae,m),h(o,Pe,m),e(Pe,we),h(o,$e,m),h(o,Ze,m),e(Ze,fi),e(Ze,Ms),e(Ms,gi),e(Ze,_i),e(Ze,Es),e(Es,Ti),e(Ze,vi),e(Ze,zs),e(zs,ki),e(Ze,bi),h(o,sr,m),w(bo,o,m),h(o,ar,m),h(o,Ne,m),e(Ne,wi),e(Ne,Fs),e(Fs,Pi),e(Ne,yi),e(Ne,qs),e(qs,Ii),e(Ne,Oi),e(Ne,Vn),e(Vn,Ai),e(Ne,$i),e(Ne,Cs),e(Cs,Gi),e(Ne,Mi),h(o,rr,m),h(o,Pt,m),e(Pt,Rt),e(Rt,Ds),w(wo,Ds,null),e(Pt,Ei),e(Pt,js),e(js,zi),h(o,ir,m),h(o,Ce,m),w(Po,Ce,null),e(Ce,Fi),e(Ce,rt),e(rt,qi),e(rt,Kn),e(Kn,Ci),e(rt,Di),e(rt,Jn),e(Jn,ji),e(rt,xi),e(rt,yo),e(yo,Hi),e(rt,Si),e(Ce,Li),e(Ce,yt),e(yt,Ni),e(yt,Xn),e(Xn,Wi),e(yt,Bi),e(yt,Qn),e(Qn,Ui),e(yt,Ri),e(Ce,Vi),e(Ce,xs),e(xs,Ki),e(Ce,Ji),w(Io,Ce,null),h(o,lr,m),h(o,It,m),e(It,Vt),e(Vt,Hs),w(Oo,Hs,null),e(It,Xi),e(It,Ss),e(Ss,Qi),h(o,dr,m),h(o,De,m),w(Ao,De,null),e(De,Yi),e(De,Ls),e(Ls,Zi),e(De,el),e(De,$o),e($o,Ns),e(Ns,tl),e($o,ol),e($o,it),e(it,nl),e(it,Ws),e(Ws,sl),e(it,al),e(it,Bs),e(Bs,rl),e(it,il),e(it,Us),e(Us,ll),e(it,dl),e(De,cl),e(De,Go),e(Go,pl),e(Go,Yn),e(Yn,hl),e(Go,ul),e(De,ml),e(De,Zn),w(Mo,Zn,null),h(o,cr,m),h(o,Ot,m),e(Ot,Kt),e(Kt,Rs),w(Eo,Rs,null),e(Ot,fl),e(Ot,Vs),e(Vs,gl),h(o,pr,m),h(o,Qe,m),w(zo,Qe,null),e(Qe,_l),e(Qe,Fo),e(Fo,Tl),e(Fo,Ks),e(Ks,vl),e(Fo,kl),e(Qe,bl),e(Qe,qo),e(qo,Js),e(Js,wl),e(qo,Pl),e(qo,Xs),e(Xs,yl),e(Qe,Il),e(Qe,Co),e(Co,Ol),e(Co,es),e(es,Al),e(Co,$l),h(o,hr,m),h(o,At,m),e(At,Jt),e(Jt,Qs),w(Do,Qs,null),e(At,Gl),e(At,Ys),e(Ys,Ml),h(o,ur,m),h(o,$t,m),w(jo,$t,null),e($t,El),e($t,Zs),e(Zs,zl),h(o,mr,m),h(o,Gt,m),w(xo,Gt,null),e(Gt,Fl),e(Gt,ea),e(ea,ql),h(o,fr,m),h(o,Mt,m),e(Mt,Xt),e(Xt,ta),w(Ho,ta,null),e(Mt,Cl),e(Mt,oa),e(oa,Dl),h(o,gr,m),h(o,je,m),w(So,je,null),e(je,jl),e(je,na),e(na,xl),e(je,Hl),e(je,Lo),e(Lo,Sl),e(Lo,ts),e(ts,Ll),e(Lo,Nl),e(je,Wl),e(je,No),e(No,Bl),e(No,Wo),e(Wo,Ul),e(No,Rl),e(je,Vl),e(je,We),w(Bo,We,null),e(We,Kl),e(We,Et),e(Et,Jl),e(Et,os),e(os,Xl),e(Et,Ql),e(Et,sa),e(sa,Yl),e(Et,Zl),e(We,ed),w(Qt,We,null),e(We,td),e(We,aa),e(aa,od),e(We,nd),w(Uo,We,null),h(o,_r,m),h(o,zt,m),e(zt,Yt),e(Yt,ra),w(Ro,ra,null),e(zt,sd),e(zt,ia),e(ia,ad),h(o,Tr,m),h(o,xe,m),w(Vo,xe,null),e(xe,rd),e(xe,la),e(la,id),e(xe,ld),e(xe,Ko),e(Ko,dd),e(Ko,ns),e(ns,cd),e(Ko,pd),e(xe,hd),e(xe,Jo),e(Jo,ud),e(Jo,Xo),e(Xo,md),e(Jo,fd),e(xe,gd),e(xe,Be),w(Qo,Be,null),e(Be,_d),e(Be,Ft),e(Ft,Td),e(Ft,ss),e(ss,vd),e(Ft,kd),e(Ft,da),e(da,bd),e(Ft,wd),e(Be,Pd),w(Zt,Be,null),e(Be,yd),e(Be,ca),e(ca,Id),e(Be,Od),w(Yo,Be,null),h(o,vr,m),h(o,qt,m),e(qt,eo),e(eo,pa),w(Zo,pa,null),e(qt,Ad),e(qt,ha),e(ha,$d),h(o,kr,m),h(o,He,m),w(en,He,null),e(He,Gd),e(He,ua),e(ua,Md),e(He,Ed),e(He,tn),e(tn,zd),e(tn,as),e(as,Fd),e(tn,qd),e(He,Cd),e(He,on),e(on,Dd),e(on,nn),e(nn,jd),e(on,xd),e(He,Hd),e(He,Ue),w(sn,Ue,null),e(Ue,Sd),e(Ue,Ct),e(Ct,Ld),e(Ct,rs),e(rs,Nd),e(Ct,Wd),e(Ct,ma),e(ma,Bd),e(Ct,Ud),e(Ue,Rd),w(to,Ue,null),e(Ue,Vd),e(Ue,fa),e(fa,Kd),e(Ue,Jd),w(an,Ue,null),h(o,br,m),h(o,Dt,m),e(Dt,oo),e(oo,ga),w(rn,ga,null),e(Dt,Xd),e(Dt,_a),e(_a,Qd),h(o,wr,m),h(o,Se,m),w(ln,Se,null),e(Se,Yd),e(Se,Le),e(Le,Zd),e(Le,is),e(is,ec),e(Le,tc),e(Le,Ta),e(Ta,oc),e(Le,nc),e(Le,va),e(va,sc),e(Le,ac),e(Le,ka),e(ka,rc),e(Le,ic),e(Le,ba),e(ba,lc),e(Le,dc),e(Se,cc),e(Se,dn),e(dn,pc),e(dn,ls),e(ls,hc),e(dn,uc),e(Se,mc),e(Se,cn),e(cn,fc),e(cn,pn),e(pn,gc),e(cn,_c),e(Se,Tc),e(Se,he),w(hn,he,null),e(he,vc),e(he,jt),e(jt,kc),e(jt,ds),e(ds,bc),e(jt,wc),e(jt,wa),e(wa,Pc),e(jt,yc),e(he,Ic),w(no,he,null),e(he,Oc),e(he,Pa),e(Pa,Ac),e(he,$c),w(un,he,null),e(he,Gc),w(mn,he,null),e(he,Mc),e(he,ya),e(ya,Ec),e(he,zc),w(fn,he,null),h(o,Pr,m),h(o,xt,m),e(xt,so),e(so,Ia),w(gn,Ia,null),e(xt,Fc),e(xt,Oa),e(Oa,qc),h(o,yr,m),h(o,ye,m),w(_n,ye,null),e(ye,Cc),e(ye,Aa),e(Aa,Dc),e(ye,jc),e(ye,Tn),e(Tn,xc),e(Tn,cs),e(cs,Hc),e(Tn,Sc),e(ye,Lc),e(ye,vn),e(vn,Nc),e(vn,kn),e(kn,Wc),e(vn,Bc),e(ye,Uc),w(ao,ye,null),e(ye,Rc),e(ye,Re),w(bn,Re,null),e(Re,Vc),e(Re,Ht),e(Ht,Kc),e(Ht,ps),e(ps,Jc),e(Ht,Xc),e(Ht,$a),e($a,Qc),e(Ht,Yc),e(Re,Zc),w(ro,Re,null),e(Re,ep),e(Re,Ga),e(Ga,tp),e(Re,op),w(wn,Re,null),h(o,Ir,m),h(o,St,m),e(St,io),e(io,Ma),w(Pn,Ma,null),e(St,np),e(St,Ea),e(Ea,sp),h(o,Or,m),h(o,Ie,m),w(yn,Ie,null),e(Ie,ap),e(Ie,za),e(za,rp),e(Ie,ip),e(Ie,In),e(In,lp),e(In,hs),e(hs,dp),e(In,cp),e(Ie,pp),e(Ie,On),e(On,hp),e(On,An),e(An,up),e(On,mp),e(Ie,fp),w(lo,Ie,null),e(Ie,gp),e(Ie,Ve),w($n,Ve,null),e(Ve,_p),e(Ve,Lt),e(Lt,Tp),e(Lt,us),e(us,vp),e(Lt,kp),e(Lt,Fa),e(Fa,bp),e(Lt,wp),e(Ve,Pp),w(co,Ve,null),e(Ve,yp),e(Ve,qa),e(qa,Ip),e(Ve,Op),w(Gn,Ve,null),h(o,Ar,m),h(o,Nt,m),e(Nt,po),e(po,Ca),w(Mn,Ca,null),e(Nt,Ap),e(Nt,Da),e(Da,$p),h(o,$r,m),h(o,Oe,m),w(En,Oe,null),e(Oe,Gp),e(Oe,ja),e(ja,Mp),e(Oe,Ep),e(Oe,zn),e(zn,zp),e(zn,ms),e(ms,Fp),e(zn,qp),e(Oe,Cp),e(Oe,Fn),e(Fn,Dp),e(Fn,qn),e(qn,jp),e(Fn,xp),e(Oe,Hp),w(ho,Oe,null),e(Oe,Sp),e(Oe,Ke),w(Cn,Ke,null),e(Ke,Lp),e(Ke,Wt),e(Wt,Np),e(Wt,fs),e(fs,Wp),e(Wt,Bp),e(Wt,xa),e(xa,Up),e(Wt,Rp),e(Ke,Vp),w(uo,Ke,null),e(Ke,Kp),e(Ke,Ha),e(Ha,Jp),e(Ke,Xp),w(Dn,Ke,null),h(o,Gr,m),h(o,Bt,m),e(Bt,mo),e(mo,Sa),w(jn,Sa,null),e(Bt,Qp),e(Bt,La),e(La,Yp),h(o,Mr,m),h(o,le,m),w(xn,le,null),e(le,Zp),e(le,Na),e(Na,eh),e(le,th),e(le,gs),e(gs,_s),e(_s,oh),e(gs,nh),e(le,sh),e(le,Ye),e(Ye,ah),e(Ye,Wa),e(Wa,rh),e(Ye,ih),e(Ye,Ba),e(Ba,lh),e(Ye,dh),e(Ye,Ua),e(Ua,ch),e(Ye,ph),e(Ye,Ra),e(Ra,hh),e(Ye,uh),e(le,mh),e(le,Hn),e(Hn,fh),e(Hn,Ts),e(Ts,gh),e(Hn,_h),e(le,Th),e(le,Sn),e(Sn,vh),e(Sn,Ln),e(Ln,kh),e(Sn,bh),e(le,wh),w(fo,le,null),e(le,Ph),e(le,Je),w(Nn,Je,null),e(Je,yh),e(Je,Ut),e(Ut,Ih),e(Ut,vs),e(vs,Oh),e(Ut,Ah),e(Ut,Va),e(Va,$h),e(Ut,Gh),e(Je,Mh),w(go,Je,null),e(Je,Eh),e(Je,Ka),e(Ka,zh),e(Je,Fh),w(Wn,Je,null),Er=!0},p(o,[m]){const Bn={};m&2&&(Bn.$$scope={dirty:m,ctx:o}),Qt.$set(Bn);const Ja={};m&2&&(Ja.$$scope={dirty:m,ctx:o}),Zt.$set(Ja);const Xa={};m&2&&(Xa.$$scope={dirty:m,ctx:o}),to.$set(Xa);const Qa={};m&2&&(Qa.$$scope={dirty:m,ctx:o}),no.$set(Qa);const Un={};m&2&&(Un.$$scope={dirty:m,ctx:o}),ao.$set(Un);const Ya={};m&2&&(Ya.$$scope={dirty:m,ctx:o}),ro.$set(Ya);const Za={};m&2&&(Za.$$scope={dirty:m,ctx:o}),lo.$set(Za);const er={};m&2&&(er.$$scope={dirty:m,ctx:o}),co.$set(er);const Rn={};m&2&&(Rn.$$scope={dirty:m,ctx:o}),ho.$set(Rn);const tr={};m&2&&(tr.$$scope={dirty:m,ctx:o}),uo.$set(tr);const or={};m&2&&(or.$$scope={dirty:m,ctx:o}),fo.$set(or);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:o}),go.$set(nr)},i(o){Er||(P(T.$$.fragment,o),P(Y.$$.fragment,o),P(bo.$$.fragment,o),P(wo.$$.fragment,o),P(Po.$$.fragment,o),P(Io.$$.fragment,o),P(Oo.$$.fragment,o),P(Ao.$$.fragment,o),P(Mo.$$.fragment,o),P(Eo.$$.fragment,o),P(zo.$$.fragment,o),P(Do.$$.fragment,o),P(jo.$$.fragment,o),P(xo.$$.fragment,o),P(Ho.$$.fragment,o),P(So.$$.fragment,o),P(Bo.$$.fragment,o),P(Qt.$$.fragment,o),P(Uo.$$.fragment,o),P(Ro.$$.fragment,o),P(Vo.$$.fragment,o),P(Qo.$$.fragment,o),P(Zt.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(sn.$$.fragment,o),P(to.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(no.$$.fragment,o),P(un.$$.fragment,o),P(mn.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(ao.$$.fragment,o),P(bn.$$.fragment,o),P(ro.$$.fragment,o),P(wn.$$.fragment,o),P(Pn.$$.fragment,o),P(yn.$$.fragment,o),P(lo.$$.fragment,o),P($n.$$.fragment,o),P(co.$$.fragment,o),P(Gn.$$.fragment,o),P(Mn.$$.fragment,o),P(En.$$.fragment,o),P(ho.$$.fragment,o),P(Cn.$$.fragment,o),P(uo.$$.fragment,o),P(Dn.$$.fragment,o),P(jn.$$.fragment,o),P(xn.$$.fragment,o),P(fo.$$.fragment,o),P(Nn.$$.fragment,o),P(go.$$.fragment,o),P(Wn.$$.fragment,o),Er=!0)},o(o){y(T.$$.fragment,o),y(Y.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(Do.$$.fragment,o),y(jo.$$.fragment,o),y(xo.$$.fragment,o),y(Ho.$$.fragment,o),y(So.$$.fragment,o),y(Bo.$$.fragment,o),y(Qt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Zt.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(sn.$$.fragment,o),y(to.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(no.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(fn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(ao.$$.fragment,o),y(bn.$$.fragment,o),y(ro.$$.fragment,o),y(wn.$$.fragment,o),y(Pn.$$.fragment,o),y(yn.$$.fragment,o),y(lo.$$.fragment,o),y($n.$$.fragment,o),y(co.$$.fragment,o),y(Gn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(ho.$$.fragment,o),y(Cn.$$.fragment,o),y(uo.$$.fragment,o),y(Dn.$$.fragment,o),y(jn.$$.fragment,o),y(xn.$$.fragment,o),y(fo.$$.fragment,o),y(Nn.$$.fragment,o),y(go.$$.fragment,o),y(Wn.$$.fragment,o),Er=!1},d(o){t(u),o&&t(G),o&&t(f),I(T),o&&t(J),o&&t($),I(Y),o&&t(de),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(O),o&&t(F),o&&t(se),o&&t(Ae),o&&t(Pe),o&&t($e),o&&t(Ze),o&&t(sr),I(bo,o),o&&t(ar),o&&t(Ne),o&&t(rr),o&&t(Pt),I(wo),o&&t(ir),o&&t(Ce),I(Po),I(Io),o&&t(lr),o&&t(It),I(Oo),o&&t(dr),o&&t(De),I(Ao),I(Mo),o&&t(cr),o&&t(Ot),I(Eo),o&&t(pr),o&&t(Qe),I(zo),o&&t(hr),o&&t(At),I(Do),o&&t(ur),o&&t($t),I(jo),o&&t(mr),o&&t(Gt),I(xo),o&&t(fr),o&&t(Mt),I(Ho),o&&t(gr),o&&t(je),I(So),I(Bo),I(Qt),I(Uo),o&&t(_r),o&&t(zt),I(Ro),o&&t(Tr),o&&t(xe),I(Vo),I(Qo),I(Zt),I(Yo),o&&t(vr),o&&t(qt),I(Zo),o&&t(kr),o&&t(He),I(en),I(sn),I(to),I(an),o&&t(br),o&&t(Dt),I(rn),o&&t(wr),o&&t(Se),I(ln),I(hn),I(no),I(un),I(mn),I(fn),o&&t(Pr),o&&t(xt),I(gn),o&&t(yr),o&&t(ye),I(_n),I(ao),I(bn),I(ro),I(wn),o&&t(Ir),o&&t(St),I(Pn),o&&t(Or),o&&t(Ie),I(yn),I(lo),I($n),I(co),I(Gn),o&&t(Ar),o&&t(Nt),I(Mn),o&&t($r),o&&t(Oe),I(En),I(ho),I(Cn),I(uo),I(Dn),o&&t(Gr),o&&t(Bt),I(jn),o&&t(Mr),o&&t(le),I(xn),I(fo),I(Nn),I(go),I(Wn)}}}const bf={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function wf(K){return rf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $f extends of{constructor(u){super();nf(this,u,wf,kf,sf,{})}}export{$f as default,bf as metadata};
