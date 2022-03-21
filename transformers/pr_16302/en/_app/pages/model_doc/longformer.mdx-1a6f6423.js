import{S as QT,i as HT,s as RT,e as r,k as l,w as k,t as n,Y as Po,M as UT,c as a,d as t,m as d,a as i,x as v,h as s,Z as jo,b as c,F as e,g as h,y as b,q as T,o as y,B as L}from"../../chunks/vendor-6b77c823.js";import{T as je}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-abef54e3.js";import{C as at}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function VT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function GT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function KT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function JT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function XT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function YT(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function ZT(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function e1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function t1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function o1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function n1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function s1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function r1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function a1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function i1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function l1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function d1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we;return{c(){p=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),le=n("."),G=l(),j=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),R=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),O=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=a(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=a(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),j=a(m,"P",{});var Fe=i(j);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var P=i(z);C=a(P,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=a(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(P),q=a(P,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(N,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=a(N,"CODE",{});var be=i(R);ae=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(P),O=a(P,"LI",{});var oe=i(O);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),P.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,j,F),e(j,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,R),e(R,ae),e(z,_e),e(z,O),e(O,ie),e(O,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(j),m&&t(X),m&&t(z)}}}function c1(Q){let p,x,g,u,$;return{c(){p=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=a(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function h1(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,j,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,re,K,R,ae,_e,O,ie,U,we,m,F,Y,Te,he,A,ve,$e,Fe,P,V,xe,ye,N,ke,be,oe,Me,Qa,Eh,Zl,Le,zh,ed,jT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',td,od,OT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',nd,sd,AT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',rd,Ha,qh,Ch,Ra,Ph,jh,Ua,Oh,Ah,ad,NT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',id,Va,Nh,Ih,ld,ut,Sh,dd,IT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',cd,Ga,Dh,Bh,hd,_t,Wh,Ka,Qh,Hh,Ja,Rh,Uh,md,Oo,Xa,Vh,Gh,Ya,Kh,fd,Ao,Jh,jr,Xh,Yh,pd,Ve,Zh,gd,ST='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',ud,_d,DT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',wd,kd,BT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',vd,bd,WT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,yd,No,em,Tn,tm,om,Ld,Ot,Io,Za,yn,nm,ei,sm,$d,At,Or,rm,am,Ar,im,lm,Fd,Ln,xd,Nt,So,ti,$n,dm,oi,cm,Md,Oe,Fn,hm,It,mm,Nr,fm,pm,Ir,gm,um,_m,St,wm,Sr,km,vm,xn,bm,Tm,ym,Dt,Lm,Dr,$m,Fm,Br,xm,Mm,Em,ni,zm,qm,Mn,Ed,Bt,Do,si,En,Cm,ri,Pm,zd,ft,zn,jm,ai,Om,Am,Bo,Wr,Nm,Im,Qr,Sm,Dm,qd,Wt,Wo,ii,qn,Bm,li,Wm,Cd,pt,Cn,Qm,Pn,Hm,di,Rm,Um,Vm,Qo,Hr,Gm,Km,Rr,Jm,Xm,Pd,Qt,Ho,ci,jn,Ym,hi,Zm,jd,Ht,On,ef,mi,tf,Od,Rt,An,of,fi,nf,Ad,Ut,Nn,sf,pi,rf,Nd,Vt,In,af,gi,lf,Id,Gt,Sn,df,ui,cf,Sd,Kt,Dn,hf,_i,mf,Dd,Jt,Bn,ff,wi,pf,Bd,Xt,Wn,gf,ki,uf,Wd,Yt,Qn,_f,vi,wf,Qd,Zt,Hn,kf,bi,vf,Hd,eo,Rn,bf,Ti,Tf,Rd,to,Un,yf,yi,Lf,Ud,oo,Vn,$f,Li,Ff,Vd,no,Gn,xf,$i,Mf,Gd,so,Ro,Fi,Kn,Ef,xi,zf,Kd,qe,Jn,qf,Mi,Cf,Pf,Xn,jf,Ur,Of,Af,Nf,Yn,If,Zn,Sf,Df,Bf,ro,Wf,Vr,Qf,Hf,es,Rf,Uf,Vf,ts,Gf,Ei,Kf,Jf,Xf,Ge,os,Yf,ao,Zf,Gr,ep,tp,zi,op,np,sp,Uo,rp,qi,ap,ip,ns,Jd,io,Vo,Ci,ss,lp,Pi,dp,Xd,We,rs,cp,as,hp,ji,mp,fp,pp,is,gp,Kr,up,_p,wp,ls,kp,ds,vp,bp,Tp,Ke,cs,yp,lo,Lp,Jr,$p,Fp,Oi,xp,Mp,Ep,Go,zp,Ai,qp,Cp,hs,Yd,co,Ko,Ni,ms,Pp,Ii,jp,Zd,Qe,fs,Op,Si,Ap,Np,ps,Ip,Xr,Sp,Dp,Bp,gs,Wp,us,Qp,Hp,Rp,Ce,_s,Up,ho,Vp,Yr,Gp,Kp,Di,Jp,Xp,Yp,Jo,Zp,Bi,eg,tg,ws,og,Wi,ng,sg,ks,ec,mo,Xo,Qi,vs,rg,Hi,ag,tc,He,bs,ig,Ri,lg,dg,Ts,cg,Zr,hg,mg,fg,ys,pg,Ls,gg,ug,_g,Je,$s,wg,fo,kg,ea,vg,bg,Ui,Tg,yg,Lg,Yo,$g,Vi,Fg,xg,Fs,oc,po,Zo,Gi,xs,Mg,Ki,Eg,nc,Re,Ms,zg,Ji,qg,Cg,Es,Pg,ta,jg,Og,Ag,zs,Ng,qs,Ig,Sg,Dg,Xe,Cs,Bg,go,Wg,oa,Qg,Hg,Xi,Rg,Ug,Vg,en,Gg,Yi,Kg,Jg,Ps,sc,uo,tn,Zi,js,Xg,el,Yg,rc,Ue,Os,Zg,_o,eu,tl,tu,ou,ol,nu,su,ru,As,au,na,iu,lu,du,Ns,cu,Is,hu,mu,fu,Ye,Ss,pu,wo,gu,sa,uu,_u,nl,wu,ku,vu,on,bu,sl,Tu,yu,Ds,ac,ko,nn,rl,Bs,Lu,al,$u,ic,Ee,Ws,Fu,il,xu,Mu,Qs,Eu,ra,zu,qu,Cu,Hs,Pu,Rs,ju,Ou,Au,sn,Nu,vo,Iu,aa,Su,Du,Us,Bu,Wu,Qu,Vs,Hu,ll,Ru,Uu,Vu,wt,Gs,Gu,bo,Ku,ia,Ju,Xu,dl,Yu,Zu,e_,rn,lc,To,an,cl,Ks,t_,hl,o_,dc,Ae,Js,n_,Xs,s_,ml,r_,a_,i_,Ys,l_,la,d_,c_,h_,Zs,m_,er,f_,p_,g_,ln,u_,Ze,tr,__,yo,w_,da,k_,v_,fl,b_,T_,y_,dn,L_,pl,$_,F_,or,cc,Lo,cn,gl,nr,x_,ul,M_,hc,Ne,sr,E_,$o,z_,_l,q_,C_,wl,P_,j_,O_,rr,A_,ca,N_,I_,S_,ar,D_,ir,B_,W_,Q_,hn,H_,et,lr,R_,Fo,U_,ha,V_,G_,kl,K_,J_,X_,mn,Y_,vl,Z_,ew,dr,mc,xo,fn,bl,cr,tw,Tl,ow,fc,Ie,hr,nw,yl,sw,rw,mr,aw,ma,iw,lw,dw,fr,cw,pr,hw,mw,fw,pn,pw,tt,gr,gw,Mo,uw,fa,_w,ww,Ll,kw,vw,bw,gn,Tw,$l,yw,Lw,ur,pc,Eo,un,Fl,_r,$w,xl,Fw,gc,Se,wr,xw,Ml,Mw,Ew,kr,zw,pa,qw,Cw,Pw,vr,jw,br,Ow,Aw,Nw,_n,Iw,ot,Tr,Sw,zo,Dw,ga,Bw,Ww,El,Qw,Hw,Rw,wn,Uw,zl,Vw,Gw,yr,uc,qo,kn,ql,Lr,Kw,Cl,Jw,_c,De,$r,Xw,Pl,Yw,Zw,Fr,ek,ua,tk,ok,nk,xr,sk,Mr,rk,ak,ik,vn,lk,nt,Er,dk,Co,ck,_a,hk,mk,jl,fk,pk,gk,bn,uk,Ol,_k,wk,zr,wc;return w=new ze({}),ee=new ze({}),oe=new ze({}),yn=new ze({}),Ln=new at({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),$n=new ze({}),Fn=new B({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/configuration_longformer.py#L33",parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}]}}),Mn=new at({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),En=new ze({}),zn=new B({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),qn=new ze({}),Cn=new B({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),jn=new ze({}),On=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L61",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),An=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L104",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Nn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L152",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),In=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L198",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Sn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L247",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Dn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L293",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Bn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L341",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Wn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L66",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Qn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L109",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Hn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L157",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Rn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L203",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Un=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L252",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Vn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L298",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Gn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L346",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Kn=new ze({}),Jn=new B({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1497",parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),os=new B({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1608",parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new je({props:{$$slots:{default:[VT]},$$scope:{ctx:Q}}}),ns=new at({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">&gt;&gt;&gt; </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),ss=new ze({}),rs=new B({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1732",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cs=new B({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1751",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new je({props:{$$slots:{default:[GT]},$$scope:{ctx:Q}}}),hs=new at({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),ms=new ze({}),fs=new B({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1837",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new B({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1852",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new je({props:{$$slots:{default:[KT]},$$scope:{ctx:Q}}}),ws=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),ks=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),vs=new ze({}),bs=new B({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L2188",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$s=new B({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L2199",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new je({props:{$$slots:{default:[JT]},$$scope:{ctx:Q}}}),Fs=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xs=new ze({}),Ms=new B({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L2103",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cs=new B({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L2118",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new je({props:{$$slots:{default:[XT]},$$scope:{ctx:Q}}}),Ps=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),js=new ze({}),Os=new B({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1964",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ss=new B({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_longformer.py#L1978",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new je({props:{$$slots:{default:[YT]},$$scope:{ctx:Q}}}),Ds=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),Bs=new ze({}),Ws=new B({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2006",parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new je({props:{$$slots:{default:[ZT]},$$scope:{ctx:Q}}}),Gs=new B({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2028",parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}]}}),rn=new je({props:{$$slots:{default:[e1]},$$scope:{ctx:Q}}}),Ks=new ze({}),Js=new B({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2094",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new je({props:{$$slots:{default:[t1]},$$scope:{ctx:Q}}}),tr=new B({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2111",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new je({props:{$$slots:{default:[o1]},$$scope:{ctx:Q}}}),or=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new ze({}),sr=new B({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2205",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new je({props:{$$slots:{default:[n1]},$$scope:{ctx:Q}}}),lr=new B({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2220",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new je({props:{$$slots:{default:[s1]},$$scope:{ctx:Q}}}),dr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),cr=new ze({}),hr=new B({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2377",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new je({props:{$$slots:{default:[r1]},$$scope:{ctx:Q}}}),gr=new B({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2389",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new je({props:{$$slots:{default:[a1]},$$scope:{ctx:Q}}}),ur=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_r=new ze({}),wr=new B({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2652",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_n=new je({props:{$$slots:{default:[i1]},$$scope:{ctx:Q}}}),Tr=new B({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2667",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wn=new je({props:{$$slots:{default:[l1]},$$scope:{ctx:Q}}}),yr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lr=new ze({}),$r=new B({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2493",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new je({props:{$$slots:{default:[d1]},$$scope:{ctx:Q}}}),Er=new B({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16302/src/transformers/models/longformer/modeling_tf_longformer.py#L2513",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16302/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16302/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16302/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new je({props:{$$slots:{default:[c1]},$$scope:{ctx:Q}}}),zr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=r("meta"),x=l(),g=r("h1"),u=r("a"),$=r("span"),k(w.$$.fragment),_=l(),M=r("span"),me=n("Longformer"),J=l(),E=r("h2"),Z=r("a"),I=r("span"),k(ee.$$.fragment),fe=l(),S=r("span"),pe=n("Overview"),le=l(),G=r("p"),j=n("The Longformer model was presented in "),te=r("a"),X=n("Longformer: The Long-Document Transformer"),z=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),C=l(),ne=r("p"),H=n("The abstract from the paper is the following:"),de=l(),se=r("p"),D=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=l(),q=r("p"),ue=n("Tips:"),W=l(),re=r("ul"),K=r("li"),R=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),O=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),U=n("tokenizer.sep_token"),we=n(` (or
`),m=r("code"),F=n("</s>"),Y=n(")."),Te=l(),he=r("p"),A=n("This model was contributed by "),ve=r("a"),$e=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),P=r("a"),V=n("here"),xe=n("."),ye=l(),N=r("h2"),ke=r("a"),be=r("span"),k(oe.$$.fragment),Me=l(),Qa=r("span"),Eh=n("Longformer Self Attention"),Zl=l(),Le=r("p"),zh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=new Po,td=n(` previous tokens and
`),od=new Po,nd=n(" succeding tokens with "),sd=new Po,rd=n(` being the window length as defined in
`),Ha=r("code"),qh=n("config.attention_window"),Ch=n(". Note that "),Ra=r("code"),Ph=n("config.attention_window"),jh=n(" can be of type "),Ua=r("code"),Oh=n("List"),Ah=n(` to define a
different `),ad=new Po,id=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Va=r("code"),Nh=n("BertSelfAttention"),Ih=n("."),ld=l(),ut=r("p"),Sh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=new Po,cd=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ga=r("em"),Dh=n("symmetric"),Bh=n("."),hd=l(),_t=r("p"),Wh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ka=r("code"),Qh=n("global_attention_mask"),Hh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Ja=r("code"),Rh=n("global_attention_mask"),Uh=n(":"),md=l(),Oo=r("ul"),Xa=r("li"),Vh=n("0: the token attends \u201Clocally\u201D,"),Gh=l(),Ya=r("li"),Kh=n("1: the token attends \u201Cglobally\u201D."),fd=l(),Ao=r("p"),Jh=n("For more information please also refer to "),jr=r("a"),Xh=n("forward()"),Yh=n(" method."),pd=l(),Ve=r("p"),Zh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=new Po,ud=n(` to
`),_d=new Po,wd=n(", with "),kd=new Po,vd=n(" being the sequence length and "),bd=new Po,Td=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),yd=l(),No=r("p"),em=n("For more information, please refer to the official "),Tn=r("a"),tm=n("paper"),om=n("."),Ld=l(),Ot=r("h2"),Io=r("a"),Za=r("span"),k(yn.$$.fragment),nm=l(),ei=r("span"),sm=n("Training"),$d=l(),At=r("p"),Or=r("a"),rm=n("LongformerForMaskedLM"),am=n(" is trained the exact same way "),Ar=r("a"),im=n("RobertaForMaskedLM"),lm=n(` is
trained and should be used as follows:`),Fd=l(),k(Ln.$$.fragment),xd=l(),Nt=r("h2"),So=r("a"),ti=r("span"),k($n.$$.fragment),dm=l(),oi=r("span"),cm=n("LongformerConfig"),Md=l(),Oe=r("div"),k(Fn.$$.fragment),hm=l(),It=r("p"),mm=n("This is the configuration class to store the configuration of a "),Nr=r("a"),fm=n("LongformerModel"),pm=n(" or a "),Ir=r("a"),gm=n("TFLongformerModel"),um=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),_m=l(),St=r("p"),wm=n("This is the configuration class to store the configuration of a "),Sr=r("a"),km=n("LongformerModel"),vm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=r("a"),bm=n("roberta-base"),Tm=n(" architecture with a sequence length 4,096."),ym=l(),Dt=r("p"),Lm=n("The "),Dr=r("a"),$m=n("LongformerConfig"),Fm=n(" class directly inherits "),Br=r("a"),xm=n("RobertaConfig"),Mm=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Em=l(),ni=r("p"),zm=n("Example:"),qm=l(),k(Mn.$$.fragment),Ed=l(),Bt=r("h2"),Do=r("a"),si=r("span"),k(En.$$.fragment),Cm=l(),ri=r("span"),Pm=n("LongformerTokenizer"),zd=l(),ft=r("div"),k(zn.$$.fragment),jm=l(),ai=r("p"),Om=n("Construct a Longformer tokenizer."),Am=l(),Bo=r("p"),Wr=r("a"),Nm=n("LongformerTokenizer"),Im=n(" is identical to "),Qr=r("a"),Sm=n("RobertaTokenizer"),Dm=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),qd=l(),Wt=r("h2"),Wo=r("a"),ii=r("span"),k(qn.$$.fragment),Bm=l(),li=r("span"),Wm=n("LongformerTokenizerFast"),Cd=l(),pt=r("div"),k(Cn.$$.fragment),Qm=l(),Pn=r("p"),Hm=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=r("em"),Rm=n("tokenizers"),Um=n(" library)."),Vm=l(),Qo=r("p"),Hr=r("a"),Gm=n("LongformerTokenizerFast"),Km=n(" is identical to "),Rr=r("a"),Jm=n("RobertaTokenizerFast"),Xm=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Pd=l(),Qt=r("h2"),Ho=r("a"),ci=r("span"),k(jn.$$.fragment),Ym=l(),hi=r("span"),Zm=n("Longformer specific outputs"),jd=l(),Ht=r("div"),k(On.$$.fragment),ef=l(),mi=r("p"),tf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Od=l(),Rt=r("div"),k(An.$$.fragment),of=l(),fi=r("p"),nf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ad=l(),Ut=r("div"),k(Nn.$$.fragment),sf=l(),pi=r("p"),rf=n("Base class for masked language models outputs."),Nd=l(),Vt=r("div"),k(In.$$.fragment),af=l(),gi=r("p"),lf=n("Base class for outputs of question answering Longformer models."),Id=l(),Gt=r("div"),k(Sn.$$.fragment),df=l(),ui=r("p"),cf=n("Base class for outputs of sentence classification models."),Sd=l(),Kt=r("div"),k(Dn.$$.fragment),hf=l(),_i=r("p"),mf=n("Base class for outputs of multiple choice Longformer models."),Dd=l(),Jt=r("div"),k(Bn.$$.fragment),ff=l(),wi=r("p"),pf=n("Base class for outputs of token classification models."),Bd=l(),Xt=r("div"),k(Wn.$$.fragment),gf=l(),ki=r("p"),uf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Wd=l(),Yt=r("div"),k(Qn.$$.fragment),_f=l(),vi=r("p"),wf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Qd=l(),Zt=r("div"),k(Hn.$$.fragment),kf=l(),bi=r("p"),vf=n("Base class for masked language models outputs."),Hd=l(),eo=r("div"),k(Rn.$$.fragment),bf=l(),Ti=r("p"),Tf=n("Base class for outputs of question answering Longformer models."),Rd=l(),to=r("div"),k(Un.$$.fragment),yf=l(),yi=r("p"),Lf=n("Base class for outputs of sentence classification models."),Ud=l(),oo=r("div"),k(Vn.$$.fragment),$f=l(),Li=r("p"),Ff=n("Base class for outputs of multiple choice models."),Vd=l(),no=r("div"),k(Gn.$$.fragment),xf=l(),$i=r("p"),Mf=n("Base class for outputs of token classification models."),Gd=l(),so=r("h2"),Ro=r("a"),Fi=r("span"),k(Kn.$$.fragment),Ef=l(),xi=r("span"),zf=n("LongformerModel"),Kd=l(),qe=r("div"),k(Jn.$$.fragment),qf=l(),Mi=r("p"),Cf=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Pf=l(),Xn=r("p"),jf=n("This model inherits from "),Ur=r("a"),Of=n("PreTrainedModel"),Af=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf=l(),Yn=r("p"),If=n("This model is also a PyTorch "),Zn=r("a"),Sf=n("torch.nn.Module"),Df=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bf=l(),ro=r("p"),Wf=n("This class copied code from "),Vr=r("a"),Qf=n("RobertaModel"),Hf=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=r("a"),Rf=n(`Longformer:
the Long-Document Transformer`),Uf=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Vf=l(),ts=r("p"),Gf=n("The self-attention module "),Ei=r("code"),Kf=n("LongformerSelfAttention"),Jf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Xf=l(),Ge=r("div"),k(os.$$.fragment),Yf=l(),ao=r("p"),Zf=n("The "),Gr=r("a"),ep=n("LongformerModel"),tp=n(" forward method, overrides the "),zi=r("code"),op=n("__call__"),np=n(" special method."),sp=l(),k(Uo.$$.fragment),rp=l(),qi=r("p"),ap=n("Examples:"),ip=l(),k(ns.$$.fragment),Jd=l(),io=r("h2"),Vo=r("a"),Ci=r("span"),k(ss.$$.fragment),lp=l(),Pi=r("span"),dp=n("LongformerForMaskedLM"),Xd=l(),We=r("div"),k(rs.$$.fragment),cp=l(),as=r("p"),hp=n("Longformer Model with a "),ji=r("code"),mp=n("language modeling"),fp=n(" head on top."),pp=l(),is=r("p"),gp=n("This model inherits from "),Kr=r("a"),up=n("PreTrainedModel"),_p=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),ls=r("p"),kp=n("This model is also a PyTorch "),ds=r("a"),vp=n("torch.nn.Module"),bp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=l(),Ke=r("div"),k(cs.$$.fragment),yp=l(),lo=r("p"),Lp=n("The "),Jr=r("a"),$p=n("LongformerForMaskedLM"),Fp=n(" forward method, overrides the "),Oi=r("code"),xp=n("__call__"),Mp=n(" special method."),Ep=l(),k(Go.$$.fragment),zp=l(),Ai=r("p"),qp=n("Examples:"),Cp=l(),k(hs.$$.fragment),Yd=l(),co=r("h2"),Ko=r("a"),Ni=r("span"),k(ms.$$.fragment),Pp=l(),Ii=r("span"),jp=n("LongformerForSequenceClassification"),Zd=l(),Qe=r("div"),k(fs.$$.fragment),Op=l(),Si=r("p"),Ap=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Np=l(),ps=r("p"),Ip=n("This model inherits from "),Xr=r("a"),Sp=n("PreTrainedModel"),Dp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=l(),gs=r("p"),Wp=n("This model is also a PyTorch "),us=r("a"),Qp=n("torch.nn.Module"),Hp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rp=l(),Ce=r("div"),k(_s.$$.fragment),Up=l(),ho=r("p"),Vp=n("The "),Yr=r("a"),Gp=n("LongformerForSequenceClassification"),Kp=n(" forward method, overrides the "),Di=r("code"),Jp=n("__call__"),Xp=n(" special method."),Yp=l(),k(Jo.$$.fragment),Zp=l(),Bi=r("p"),eg=n("Example of single-label classification:"),tg=l(),k(ws.$$.fragment),og=l(),Wi=r("p"),ng=n("Example of multi-label classification:"),sg=l(),k(ks.$$.fragment),ec=l(),mo=r("h2"),Xo=r("a"),Qi=r("span"),k(vs.$$.fragment),rg=l(),Hi=r("span"),ag=n("LongformerForMultipleChoice"),tc=l(),He=r("div"),k(bs.$$.fragment),ig=l(),Ri=r("p"),lg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),dg=l(),Ts=r("p"),cg=n("This model inherits from "),Zr=r("a"),hg=n("PreTrainedModel"),mg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fg=l(),ys=r("p"),pg=n("This model is also a PyTorch "),Ls=r("a"),gg=n("torch.nn.Module"),ug=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=l(),Je=r("div"),k($s.$$.fragment),wg=l(),fo=r("p"),kg=n("The "),ea=r("a"),vg=n("LongformerForMultipleChoice"),bg=n(" forward method, overrides the "),Ui=r("code"),Tg=n("__call__"),yg=n(" special method."),Lg=l(),k(Yo.$$.fragment),$g=l(),Vi=r("p"),Fg=n("Example:"),xg=l(),k(Fs.$$.fragment),oc=l(),po=r("h2"),Zo=r("a"),Gi=r("span"),k(xs.$$.fragment),Mg=l(),Ki=r("span"),Eg=n("LongformerForTokenClassification"),nc=l(),Re=r("div"),k(Ms.$$.fragment),zg=l(),Ji=r("p"),qg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=l(),Es=r("p"),Pg=n("This model inherits from "),ta=r("a"),jg=n("PreTrainedModel"),Og=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ag=l(),zs=r("p"),Ng=n("This model is also a PyTorch "),qs=r("a"),Ig=n("torch.nn.Module"),Sg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=l(),Xe=r("div"),k(Cs.$$.fragment),Bg=l(),go=r("p"),Wg=n("The "),oa=r("a"),Qg=n("LongformerForTokenClassification"),Hg=n(" forward method, overrides the "),Xi=r("code"),Rg=n("__call__"),Ug=n(" special method."),Vg=l(),k(en.$$.fragment),Gg=l(),Yi=r("p"),Kg=n("Example:"),Jg=l(),k(Ps.$$.fragment),sc=l(),uo=r("h2"),tn=r("a"),Zi=r("span"),k(js.$$.fragment),Xg=l(),el=r("span"),Yg=n("LongformerForQuestionAnswering"),rc=l(),Ue=r("div"),k(Os.$$.fragment),Zg=l(),_o=r("p"),eu=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=r("code"),tu=n("span start logits"),ou=n(" and "),ol=r("code"),nu=n("span end logits"),su=n(")."),ru=l(),As=r("p"),au=n("This model inherits from "),na=r("a"),iu=n("PreTrainedModel"),lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du=l(),Ns=r("p"),cu=n("This model is also a PyTorch "),Is=r("a"),hu=n("torch.nn.Module"),mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu=l(),Ye=r("div"),k(Ss.$$.fragment),pu=l(),wo=r("p"),gu=n("The "),sa=r("a"),uu=n("LongformerForQuestionAnswering"),_u=n(" forward method, overrides the "),nl=r("code"),wu=n("__call__"),ku=n(" special method."),vu=l(),k(on.$$.fragment),bu=l(),sl=r("p"),Tu=n("Examples:"),yu=l(),k(Ds.$$.fragment),ac=l(),ko=r("h2"),nn=r("a"),rl=r("span"),k(Bs.$$.fragment),Lu=l(),al=r("span"),$u=n("TFLongformerModel"),ic=l(),Ee=r("div"),k(Ws.$$.fragment),Fu=l(),il=r("p"),xu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Mu=l(),Qs=r("p"),Eu=n("This model inherits from "),ra=r("a"),zu=n("TFPreTrainedModel"),qu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=l(),Hs=r("p"),Pu=n("This model is also a "),Rs=r("a"),ju=n("tf.keras.Model"),Ou=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au=l(),k(sn.$$.fragment),Nu=l(),vo=r("p"),Iu=n("This class copies code from "),aa=r("a"),Su=n("TFRobertaModel"),Du=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Us=r("a"),Bu=n("Longformer: the Long-Document Transformer"),Wu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Qu=l(),Vs=r("p"),Hu=n("The self-attention module "),ll=r("code"),Ru=n("TFLongformerSelfAttention"),Uu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Vu=l(),wt=r("div"),k(Gs.$$.fragment),Gu=l(),bo=r("p"),Ku=n("The "),ia=r("a"),Ju=n("TFLongformerModel"),Xu=n(" forward method, overrides the "),dl=r("code"),Yu=n("__call__"),Zu=n(" special method."),e_=l(),k(rn.$$.fragment),lc=l(),To=r("h2"),an=r("a"),cl=r("span"),k(Ks.$$.fragment),t_=l(),hl=r("span"),o_=n("TFLongformerForMaskedLM"),dc=l(),Ae=r("div"),k(Js.$$.fragment),n_=l(),Xs=r("p"),s_=n("Longformer Model with a "),ml=r("code"),r_=n("language modeling"),a_=n(" head on top."),i_=l(),Ys=r("p"),l_=n("This model inherits from "),la=r("a"),d_=n("TFPreTrainedModel"),c_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h_=l(),Zs=r("p"),m_=n("This model is also a "),er=r("a"),f_=n("tf.keras.Model"),p_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),g_=l(),k(ln.$$.fragment),u_=l(),Ze=r("div"),k(tr.$$.fragment),__=l(),yo=r("p"),w_=n("The "),da=r("a"),k_=n("TFLongformerForMaskedLM"),v_=n(" forward method, overrides the "),fl=r("code"),b_=n("__call__"),T_=n(" special method."),y_=l(),k(dn.$$.fragment),L_=l(),pl=r("p"),$_=n("Example:"),F_=l(),k(or.$$.fragment),cc=l(),Lo=r("h2"),cn=r("a"),gl=r("span"),k(nr.$$.fragment),x_=l(),ul=r("span"),M_=n("TFLongformerForQuestionAnswering"),hc=l(),Ne=r("div"),k(sr.$$.fragment),E_=l(),$o=r("p"),z_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=r("code"),q_=n("span start logits"),C_=n(" and "),wl=r("code"),P_=n("span end logits"),j_=n(")."),O_=l(),rr=r("p"),A_=n("This model inherits from "),ca=r("a"),N_=n("TFPreTrainedModel"),I_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_=l(),ar=r("p"),D_=n("This model is also a "),ir=r("a"),B_=n("tf.keras.Model"),W_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q_=l(),k(hn.$$.fragment),H_=l(),et=r("div"),k(lr.$$.fragment),R_=l(),Fo=r("p"),U_=n("The "),ha=r("a"),V_=n("TFLongformerForQuestionAnswering"),G_=n(" forward method, overrides the "),kl=r("code"),K_=n("__call__"),J_=n(" special method."),X_=l(),k(mn.$$.fragment),Y_=l(),vl=r("p"),Z_=n("Example:"),ew=l(),k(dr.$$.fragment),mc=l(),xo=r("h2"),fn=r("a"),bl=r("span"),k(cr.$$.fragment),tw=l(),Tl=r("span"),ow=n("TFLongformerForSequenceClassification"),fc=l(),Ie=r("div"),k(hr.$$.fragment),nw=l(),yl=r("p"),sw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rw=l(),mr=r("p"),aw=n("This model inherits from "),ma=r("a"),iw=n("TFPreTrainedModel"),lw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dw=l(),fr=r("p"),cw=n("This model is also a "),pr=r("a"),hw=n("tf.keras.Model"),mw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=l(),k(pn.$$.fragment),pw=l(),tt=r("div"),k(gr.$$.fragment),gw=l(),Mo=r("p"),uw=n("The "),fa=r("a"),_w=n("TFLongformerForSequenceClassification"),ww=n(" forward method, overrides the "),Ll=r("code"),kw=n("__call__"),vw=n(" special method."),bw=l(),k(gn.$$.fragment),Tw=l(),$l=r("p"),yw=n("Example:"),Lw=l(),k(ur.$$.fragment),pc=l(),Eo=r("h2"),un=r("a"),Fl=r("span"),k(_r.$$.fragment),$w=l(),xl=r("span"),Fw=n("TFLongformerForTokenClassification"),gc=l(),Se=r("div"),k(wr.$$.fragment),xw=l(),Ml=r("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=l(),kr=r("p"),zw=n("This model inherits from "),pa=r("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pw=l(),vr=r("p"),jw=n("This model is also a "),br=r("a"),Ow=n("tf.keras.Model"),Aw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nw=l(),k(_n.$$.fragment),Iw=l(),ot=r("div"),k(Tr.$$.fragment),Sw=l(),zo=r("p"),Dw=n("The "),ga=r("a"),Bw=n("TFLongformerForTokenClassification"),Ww=n(" forward method, overrides the "),El=r("code"),Qw=n("__call__"),Hw=n(" special method."),Rw=l(),k(wn.$$.fragment),Uw=l(),zl=r("p"),Vw=n("Example:"),Gw=l(),k(yr.$$.fragment),uc=l(),qo=r("h2"),kn=r("a"),ql=r("span"),k(Lr.$$.fragment),Kw=l(),Cl=r("span"),Jw=n("TFLongformerForMultipleChoice"),_c=l(),De=r("div"),k($r.$$.fragment),Xw=l(),Pl=r("p"),Yw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zw=l(),Fr=r("p"),ek=n("This model inherits from "),ua=r("a"),tk=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=l(),xr=r("p"),sk=n("This model is also a "),Mr=r("a"),rk=n("tf.keras.Model"),ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik=l(),k(vn.$$.fragment),lk=l(),nt=r("div"),k(Er.$$.fragment),dk=l(),Co=r("p"),ck=n("The "),_a=r("a"),hk=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),jl=r("code"),fk=n("__call__"),pk=n(" special method."),gk=l(),k(bn.$$.fragment),uk=l(),Ol=r("p"),_k=n("Example:"),wk=l(),k(zr.$$.fragment),this.h()},l(o){const f=UT('[data-svelte="svelte-1phssyn"]',document.head);p=a(f,"META",{name:!0,content:!0}),f.forEach(t),x=d(o),g=a(o,"H1",{class:!0});var qr=i(g);u=a(qr,"A",{id:!0,class:!0,href:!0});var Al=i(u);$=a(Al,"SPAN",{});var Nl=i($);v(w.$$.fragment,Nl),Nl.forEach(t),Al.forEach(t),_=d(qr),M=a(qr,"SPAN",{});var Il=i(M);me=s(Il,"Longformer"),Il.forEach(t),qr.forEach(t),J=d(o),E=a(o,"H2",{class:!0});var Cr=i(E);Z=a(Cr,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);I=a(Sl,"SPAN",{});var Dl=i(I);v(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),fe=d(Cr),S=a(Cr,"SPAN",{});var Bl=i(S);pe=s(Bl,"Overview"),Bl.forEach(t),Cr.forEach(t),le=d(o),G=a(o,"P",{});var Pr=i(G);j=s(Pr,"The Longformer model was presented in "),te=a(Pr,"A",{href:!0,rel:!0});var Wl=i(te);X=s(Wl,"Longformer: The Long-Document Transformer"),Wl.forEach(t),z=s(Pr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Pr.forEach(t),C=d(o),ne=a(o,"P",{});var Ql=i(ne);H=s(Ql,"The abstract from the paper is the following:"),Ql.forEach(t),de=d(o),se=a(o,"P",{});var Hl=i(se);D=a(Hl,"EM",{});var Rl=i(D);ge=s(Rl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Rl.forEach(t),Hl.forEach(t),ce=d(o),q=a(o,"P",{});var Ul=i(q);ue=s(Ul,"Tips:"),Ul.forEach(t),W=d(o),re=a(o,"UL",{});var Vl=i(re);K=a(Vl,"LI",{});var gt=i(K);R=s(gt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(gt,"CODE",{});var Gl=i(ae);_e=s(Gl,"token_type_ids"),Gl.forEach(t),O=s(gt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(gt,"CODE",{});var Kl=i(ie);U=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(gt,` (or
`),m=a(gt,"CODE",{});var kk=i(m);F=s(kk,"</s>"),kk.forEach(t),Y=s(gt,")."),gt.forEach(t),Vl.forEach(t),Te=d(o),he=a(o,"P",{});var wa=i(he);A=s(wa,"This model was contributed by "),ve=a(wa,"A",{href:!0,rel:!0});var vk=i(ve);$e=s(vk,"beltagy"),vk.forEach(t),Fe=s(wa,". The Authors\u2019 code can be found "),P=a(wa,"A",{href:!0,rel:!0});var bk=i(P);V=s(bk,"here"),bk.forEach(t),xe=s(wa,"."),wa.forEach(t),ye=d(o),N=a(o,"H2",{class:!0});var kc=i(N);ke=a(kc,"A",{id:!0,class:!0,href:!0});var Tk=i(ke);be=a(Tk,"SPAN",{});var yk=i(be);v(oe.$$.fragment,yk),yk.forEach(t),Tk.forEach(t),Me=d(kc),Qa=a(kc,"SPAN",{});var Lk=i(Qa);Eh=s(Lk,"Longformer Self Attention"),Lk.forEach(t),kc.forEach(t),Zl=d(o),Le=a(o,"P",{});var Pe=i(Le);zh=s(Pe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=jo(Pe),td=s(Pe,` previous tokens and
`),od=jo(Pe),nd=s(Pe," succeding tokens with "),sd=jo(Pe),rd=s(Pe,` being the window length as defined in
`),Ha=a(Pe,"CODE",{});var $k=i(Ha);qh=s($k,"config.attention_window"),$k.forEach(t),Ch=s(Pe,". Note that "),Ra=a(Pe,"CODE",{});var Fk=i(Ra);Ph=s(Fk,"config.attention_window"),Fk.forEach(t),jh=s(Pe," can be of type "),Ua=a(Pe,"CODE",{});var xk=i(Ua);Oh=s(xk,"List"),xk.forEach(t),Ah=s(Pe,` to define a
different `),ad=jo(Pe),id=s(Pe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Va=a(Pe,"CODE",{});var Mk=i(Va);Nh=s(Mk,"BertSelfAttention"),Mk.forEach(t),Ih=s(Pe,"."),Pe.forEach(t),ld=d(o),ut=a(o,"P",{});var ka=i(ut);Sh=s(ka,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=jo(ka),cd=s(ka,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ga=a(ka,"EM",{});var Ek=i(Ga);Dh=s(Ek,"symmetric"),Ek.forEach(t),Bh=s(ka,"."),ka.forEach(t),hd=d(o),_t=a(o,"P",{});var va=i(_t);Wh=s(va,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ka=a(va,"CODE",{});var zk=i(Ka);Qh=s(zk,"global_attention_mask"),zk.forEach(t),Hh=s(va,` at run-time appropriately. All Longformer models employ the following logic for
`),Ja=a(va,"CODE",{});var qk=i(Ja);Rh=s(qk,"global_attention_mask"),qk.forEach(t),Uh=s(va,":"),va.forEach(t),md=d(o),Oo=a(o,"UL",{});var vc=i(Oo);Xa=a(vc,"LI",{});var Ck=i(Xa);Vh=s(Ck,"0: the token attends \u201Clocally\u201D,"),Ck.forEach(t),Gh=d(vc),Ya=a(vc,"LI",{});var Pk=i(Ya);Kh=s(Pk,"1: the token attends \u201Cglobally\u201D."),Pk.forEach(t),vc.forEach(t),fd=d(o),Ao=a(o,"P",{});var bc=i(Ao);Jh=s(bc,"For more information please also refer to "),jr=a(bc,"A",{href:!0});var jk=i(jr);Xh=s(jk,"forward()"),jk.forEach(t),Yh=s(bc," method."),bc.forEach(t),pd=d(o),Ve=a(o,"P",{});var kt=i(Ve);Zh=s(kt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=jo(kt),ud=s(kt,` to
`),_d=jo(kt),wd=s(kt,", with "),kd=jo(kt),vd=s(kt," being the sequence length and "),bd=jo(kt),Td=s(kt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),kt.forEach(t),yd=d(o),No=a(o,"P",{});var Tc=i(No);em=s(Tc,"For more information, please refer to the official "),Tn=a(Tc,"A",{href:!0,rel:!0});var Ok=i(Tn);tm=s(Ok,"paper"),Ok.forEach(t),om=s(Tc,"."),Tc.forEach(t),Ld=d(o),Ot=a(o,"H2",{class:!0});var yc=i(Ot);Io=a(yc,"A",{id:!0,class:!0,href:!0});var Ak=i(Io);Za=a(Ak,"SPAN",{});var Nk=i(Za);v(yn.$$.fragment,Nk),Nk.forEach(t),Ak.forEach(t),nm=d(yc),ei=a(yc,"SPAN",{});var Ik=i(ei);sm=s(Ik,"Training"),Ik.forEach(t),yc.forEach(t),$d=d(o),At=a(o,"P",{});var Jl=i(At);Or=a(Jl,"A",{href:!0});var Sk=i(Or);rm=s(Sk,"LongformerForMaskedLM"),Sk.forEach(t),am=s(Jl," is trained the exact same way "),Ar=a(Jl,"A",{href:!0});var Dk=i(Ar);im=s(Dk,"RobertaForMaskedLM"),Dk.forEach(t),lm=s(Jl,` is
trained and should be used as follows:`),Jl.forEach(t),Fd=d(o),v(Ln.$$.fragment,o),xd=d(o),Nt=a(o,"H2",{class:!0});var Lc=i(Nt);So=a(Lc,"A",{id:!0,class:!0,href:!0});var Bk=i(So);ti=a(Bk,"SPAN",{});var Wk=i(ti);v($n.$$.fragment,Wk),Wk.forEach(t),Bk.forEach(t),dm=d(Lc),oi=a(Lc,"SPAN",{});var Qk=i(oi);cm=s(Qk,"LongformerConfig"),Qk.forEach(t),Lc.forEach(t),Md=d(o),Oe=a(o,"DIV",{class:!0});var it=i(Oe);v(Fn.$$.fragment,it),hm=d(it),It=a(it,"P",{});var ba=i(It);mm=s(ba,"This is the configuration class to store the configuration of a "),Nr=a(ba,"A",{href:!0});var Hk=i(Nr);fm=s(Hk,"LongformerModel"),Hk.forEach(t),pm=s(ba," or a "),Ir=a(ba,"A",{href:!0});var Rk=i(Ir);gm=s(Rk,"TFLongformerModel"),Rk.forEach(t),um=s(ba,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),ba.forEach(t),_m=d(it),St=a(it,"P",{});var Ta=i(St);wm=s(Ta,"This is the configuration class to store the configuration of a "),Sr=a(Ta,"A",{href:!0});var Uk=i(Sr);km=s(Uk,"LongformerModel"),Uk.forEach(t),vm=s(Ta,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=a(Ta,"A",{href:!0,rel:!0});var Vk=i(xn);bm=s(Vk,"roberta-base"),Vk.forEach(t),Tm=s(Ta," architecture with a sequence length 4,096."),Ta.forEach(t),ym=d(it),Dt=a(it,"P",{});var ya=i(Dt);Lm=s(ya,"The "),Dr=a(ya,"A",{href:!0});var Gk=i(Dr);$m=s(Gk,"LongformerConfig"),Gk.forEach(t),Fm=s(ya," class directly inherits "),Br=a(ya,"A",{href:!0});var Kk=i(Br);xm=s(Kk,"RobertaConfig"),Kk.forEach(t),Mm=s(ya,`. It reuses the same defaults. Please check the
parent class for more information.`),ya.forEach(t),Em=d(it),ni=a(it,"P",{});var Jk=i(ni);zm=s(Jk,"Example:"),Jk.forEach(t),qm=d(it),v(Mn.$$.fragment,it),it.forEach(t),Ed=d(o),Bt=a(o,"H2",{class:!0});var $c=i(Bt);Do=a($c,"A",{id:!0,class:!0,href:!0});var Xk=i(Do);si=a(Xk,"SPAN",{});var Yk=i(si);v(En.$$.fragment,Yk),Yk.forEach(t),Xk.forEach(t),Cm=d($c),ri=a($c,"SPAN",{});var Zk=i(ri);Pm=s(Zk,"LongformerTokenizer"),Zk.forEach(t),$c.forEach(t),zd=d(o),ft=a(o,"DIV",{class:!0});var La=i(ft);v(zn.$$.fragment,La),jm=d(La),ai=a(La,"P",{});var ev=i(ai);Om=s(ev,"Construct a Longformer tokenizer."),ev.forEach(t),Am=d(La),Bo=a(La,"P",{});var Xl=i(Bo);Wr=a(Xl,"A",{href:!0});var tv=i(Wr);Nm=s(tv,"LongformerTokenizer"),tv.forEach(t),Im=s(Xl," is identical to "),Qr=a(Xl,"A",{href:!0});var ov=i(Qr);Sm=s(ov,"RobertaTokenizer"),ov.forEach(t),Dm=s(Xl,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Xl.forEach(t),La.forEach(t),qd=d(o),Wt=a(o,"H2",{class:!0});var Fc=i(Wt);Wo=a(Fc,"A",{id:!0,class:!0,href:!0});var nv=i(Wo);ii=a(nv,"SPAN",{});var sv=i(ii);v(qn.$$.fragment,sv),sv.forEach(t),nv.forEach(t),Bm=d(Fc),li=a(Fc,"SPAN",{});var rv=i(li);Wm=s(rv,"LongformerTokenizerFast"),rv.forEach(t),Fc.forEach(t),Cd=d(o),pt=a(o,"DIV",{class:!0});var $a=i(pt);v(Cn.$$.fragment,$a),Qm=d($a),Pn=a($a,"P",{});var xc=i(Pn);Hm=s(xc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=a(xc,"EM",{});var av=i(di);Rm=s(av,"tokenizers"),av.forEach(t),Um=s(xc," library)."),xc.forEach(t),Vm=d($a),Qo=a($a,"P",{});var Yl=i(Qo);Hr=a(Yl,"A",{href:!0});var iv=i(Hr);Gm=s(iv,"LongformerTokenizerFast"),iv.forEach(t),Km=s(Yl," is identical to "),Rr=a(Yl,"A",{href:!0});var lv=i(Rr);Jm=s(lv,"RobertaTokenizerFast"),lv.forEach(t),Xm=s(Yl,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Yl.forEach(t),$a.forEach(t),Pd=d(o),Qt=a(o,"H2",{class:!0});var Mc=i(Qt);Ho=a(Mc,"A",{id:!0,class:!0,href:!0});var dv=i(Ho);ci=a(dv,"SPAN",{});var cv=i(ci);v(jn.$$.fragment,cv),cv.forEach(t),dv.forEach(t),Ym=d(Mc),hi=a(Mc,"SPAN",{});var hv=i(hi);Zm=s(hv,"Longformer specific outputs"),hv.forEach(t),Mc.forEach(t),jd=d(o),Ht=a(o,"DIV",{class:!0});var Ec=i(Ht);v(On.$$.fragment,Ec),ef=d(Ec),mi=a(Ec,"P",{});var mv=i(mi);tf=s(mv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),mv.forEach(t),Ec.forEach(t),Od=d(o),Rt=a(o,"DIV",{class:!0});var zc=i(Rt);v(An.$$.fragment,zc),of=d(zc),fi=a(zc,"P",{});var fv=i(fi);nf=s(fv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),fv.forEach(t),zc.forEach(t),Ad=d(o),Ut=a(o,"DIV",{class:!0});var qc=i(Ut);v(Nn.$$.fragment,qc),sf=d(qc),pi=a(qc,"P",{});var pv=i(pi);rf=s(pv,"Base class for masked language models outputs."),pv.forEach(t),qc.forEach(t),Nd=d(o),Vt=a(o,"DIV",{class:!0});var Cc=i(Vt);v(In.$$.fragment,Cc),af=d(Cc),gi=a(Cc,"P",{});var gv=i(gi);lf=s(gv,"Base class for outputs of question answering Longformer models."),gv.forEach(t),Cc.forEach(t),Id=d(o),Gt=a(o,"DIV",{class:!0});var Pc=i(Gt);v(Sn.$$.fragment,Pc),df=d(Pc),ui=a(Pc,"P",{});var uv=i(ui);cf=s(uv,"Base class for outputs of sentence classification models."),uv.forEach(t),Pc.forEach(t),Sd=d(o),Kt=a(o,"DIV",{class:!0});var jc=i(Kt);v(Dn.$$.fragment,jc),hf=d(jc),_i=a(jc,"P",{});var _v=i(_i);mf=s(_v,"Base class for outputs of multiple choice Longformer models."),_v.forEach(t),jc.forEach(t),Dd=d(o),Jt=a(o,"DIV",{class:!0});var Oc=i(Jt);v(Bn.$$.fragment,Oc),ff=d(Oc),wi=a(Oc,"P",{});var wv=i(wi);pf=s(wv,"Base class for outputs of token classification models."),wv.forEach(t),Oc.forEach(t),Bd=d(o),Xt=a(o,"DIV",{class:!0});var Ac=i(Xt);v(Wn.$$.fragment,Ac),gf=d(Ac),ki=a(Ac,"P",{});var kv=i(ki);uf=s(kv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),kv.forEach(t),Ac.forEach(t),Wd=d(o),Yt=a(o,"DIV",{class:!0});var Nc=i(Yt);v(Qn.$$.fragment,Nc),_f=d(Nc),vi=a(Nc,"P",{});var vv=i(vi);wf=s(vv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),vv.forEach(t),Nc.forEach(t),Qd=d(o),Zt=a(o,"DIV",{class:!0});var Ic=i(Zt);v(Hn.$$.fragment,Ic),kf=d(Ic),bi=a(Ic,"P",{});var bv=i(bi);vf=s(bv,"Base class for masked language models outputs."),bv.forEach(t),Ic.forEach(t),Hd=d(o),eo=a(o,"DIV",{class:!0});var Sc=i(eo);v(Rn.$$.fragment,Sc),bf=d(Sc),Ti=a(Sc,"P",{});var Tv=i(Ti);Tf=s(Tv,"Base class for outputs of question answering Longformer models."),Tv.forEach(t),Sc.forEach(t),Rd=d(o),to=a(o,"DIV",{class:!0});var Dc=i(to);v(Un.$$.fragment,Dc),yf=d(Dc),yi=a(Dc,"P",{});var yv=i(yi);Lf=s(yv,"Base class for outputs of sentence classification models."),yv.forEach(t),Dc.forEach(t),Ud=d(o),oo=a(o,"DIV",{class:!0});var Bc=i(oo);v(Vn.$$.fragment,Bc),$f=d(Bc),Li=a(Bc,"P",{});var Lv=i(Li);Ff=s(Lv,"Base class for outputs of multiple choice models."),Lv.forEach(t),Bc.forEach(t),Vd=d(o),no=a(o,"DIV",{class:!0});var Wc=i(no);v(Gn.$$.fragment,Wc),xf=d(Wc),$i=a(Wc,"P",{});var $v=i($i);Mf=s($v,"Base class for outputs of token classification models."),$v.forEach(t),Wc.forEach(t),Gd=d(o),so=a(o,"H2",{class:!0});var Qc=i(so);Ro=a(Qc,"A",{id:!0,class:!0,href:!0});var Fv=i(Ro);Fi=a(Fv,"SPAN",{});var xv=i(Fi);v(Kn.$$.fragment,xv),xv.forEach(t),Fv.forEach(t),Ef=d(Qc),xi=a(Qc,"SPAN",{});var Mv=i(xi);zf=s(Mv,"LongformerModel"),Mv.forEach(t),Qc.forEach(t),Kd=d(o),qe=a(o,"DIV",{class:!0});var st=i(qe);v(Jn.$$.fragment,st),qf=d(st),Mi=a(st,"P",{});var Ev=i(Mi);Cf=s(Ev,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ev.forEach(t),Pf=d(st),Xn=a(st,"P",{});var Hc=i(Xn);jf=s(Hc,"This model inherits from "),Ur=a(Hc,"A",{href:!0});var zv=i(Ur);Of=s(zv,"PreTrainedModel"),zv.forEach(t),Af=s(Hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc.forEach(t),Nf=d(st),Yn=a(st,"P",{});var Rc=i(Yn);If=s(Rc,"This model is also a PyTorch "),Zn=a(Rc,"A",{href:!0,rel:!0});var qv=i(Zn);Sf=s(qv,"torch.nn.Module"),qv.forEach(t),Df=s(Rc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc.forEach(t),Bf=d(st),ro=a(st,"P",{});var Fa=i(ro);Wf=s(Fa,"This class copied code from "),Vr=a(Fa,"A",{href:!0});var Cv=i(Vr);Qf=s(Cv,"RobertaModel"),Cv.forEach(t),Hf=s(Fa,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=a(Fa,"A",{href:!0,rel:!0});var Pv=i(es);Rf=s(Pv,`Longformer:
the Long-Document Transformer`),Pv.forEach(t),Uf=s(Fa,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Fa.forEach(t),Vf=d(st),ts=a(st,"P",{});var Uc=i(ts);Gf=s(Uc,"The self-attention module "),Ei=a(Uc,"CODE",{});var jv=i(Ei);Kf=s(jv,"LongformerSelfAttention"),jv.forEach(t),Jf=s(Uc,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Uc.forEach(t),Xf=d(st),Ge=a(st,"DIV",{class:!0});var vt=i(Ge);v(os.$$.fragment,vt),Yf=d(vt),ao=a(vt,"P",{});var xa=i(ao);Zf=s(xa,"The "),Gr=a(xa,"A",{href:!0});var Ov=i(Gr);ep=s(Ov,"LongformerModel"),Ov.forEach(t),tp=s(xa," forward method, overrides the "),zi=a(xa,"CODE",{});var Av=i(zi);op=s(Av,"__call__"),Av.forEach(t),np=s(xa," special method."),xa.forEach(t),sp=d(vt),v(Uo.$$.fragment,vt),rp=d(vt),qi=a(vt,"P",{});var Nv=i(qi);ap=s(Nv,"Examples:"),Nv.forEach(t),ip=d(vt),v(ns.$$.fragment,vt),vt.forEach(t),st.forEach(t),Jd=d(o),io=a(o,"H2",{class:!0});var Vc=i(io);Vo=a(Vc,"A",{id:!0,class:!0,href:!0});var Iv=i(Vo);Ci=a(Iv,"SPAN",{});var Sv=i(Ci);v(ss.$$.fragment,Sv),Sv.forEach(t),Iv.forEach(t),lp=d(Vc),Pi=a(Vc,"SPAN",{});var Dv=i(Pi);dp=s(Dv,"LongformerForMaskedLM"),Dv.forEach(t),Vc.forEach(t),Xd=d(o),We=a(o,"DIV",{class:!0});var bt=i(We);v(rs.$$.fragment,bt),cp=d(bt),as=a(bt,"P",{});var Gc=i(as);hp=s(Gc,"Longformer Model with a "),ji=a(Gc,"CODE",{});var Bv=i(ji);mp=s(Bv,"language modeling"),Bv.forEach(t),fp=s(Gc," head on top."),Gc.forEach(t),pp=d(bt),is=a(bt,"P",{});var Kc=i(is);gp=s(Kc,"This model inherits from "),Kr=a(Kc,"A",{href:!0});var Wv=i(Kr);up=s(Wv,"PreTrainedModel"),Wv.forEach(t),_p=s(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),wp=d(bt),ls=a(bt,"P",{});var Jc=i(ls);kp=s(Jc,"This model is also a PyTorch "),ds=a(Jc,"A",{href:!0,rel:!0});var Qv=i(ds);vp=s(Qv,"torch.nn.Module"),Qv.forEach(t),bp=s(Jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc.forEach(t),Tp=d(bt),Ke=a(bt,"DIV",{class:!0});var Tt=i(Ke);v(cs.$$.fragment,Tt),yp=d(Tt),lo=a(Tt,"P",{});var Ma=i(lo);Lp=s(Ma,"The "),Jr=a(Ma,"A",{href:!0});var Hv=i(Jr);$p=s(Hv,"LongformerForMaskedLM"),Hv.forEach(t),Fp=s(Ma," forward method, overrides the "),Oi=a(Ma,"CODE",{});var Rv=i(Oi);xp=s(Rv,"__call__"),Rv.forEach(t),Mp=s(Ma," special method."),Ma.forEach(t),Ep=d(Tt),v(Go.$$.fragment,Tt),zp=d(Tt),Ai=a(Tt,"P",{});var Uv=i(Ai);qp=s(Uv,"Examples:"),Uv.forEach(t),Cp=d(Tt),v(hs.$$.fragment,Tt),Tt.forEach(t),bt.forEach(t),Yd=d(o),co=a(o,"H2",{class:!0});var Xc=i(co);Ko=a(Xc,"A",{id:!0,class:!0,href:!0});var Vv=i(Ko);Ni=a(Vv,"SPAN",{});var Gv=i(Ni);v(ms.$$.fragment,Gv),Gv.forEach(t),Vv.forEach(t),Pp=d(Xc),Ii=a(Xc,"SPAN",{});var Kv=i(Ii);jp=s(Kv,"LongformerForSequenceClassification"),Kv.forEach(t),Xc.forEach(t),Zd=d(o),Qe=a(o,"DIV",{class:!0});var yt=i(Qe);v(fs.$$.fragment,yt),Op=d(yt),Si=a(yt,"P",{});var Jv=i(Si);Ap=s(Jv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jv.forEach(t),Np=d(yt),ps=a(yt,"P",{});var Yc=i(ps);Ip=s(Yc,"This model inherits from "),Xr=a(Yc,"A",{href:!0});var Xv=i(Xr);Sp=s(Xv,"PreTrainedModel"),Xv.forEach(t),Dp=s(Yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc.forEach(t),Bp=d(yt),gs=a(yt,"P",{});var Zc=i(gs);Wp=s(Zc,"This model is also a PyTorch "),us=a(Zc,"A",{href:!0,rel:!0});var Yv=i(us);Qp=s(Yv,"torch.nn.Module"),Yv.forEach(t),Hp=s(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Rp=d(yt),Ce=a(yt,"DIV",{class:!0});var rt=i(Ce);v(_s.$$.fragment,rt),Up=d(rt),ho=a(rt,"P",{});var Ea=i(ho);Vp=s(Ea,"The "),Yr=a(Ea,"A",{href:!0});var Zv=i(Yr);Gp=s(Zv,"LongformerForSequenceClassification"),Zv.forEach(t),Kp=s(Ea," forward method, overrides the "),Di=a(Ea,"CODE",{});var eb=i(Di);Jp=s(eb,"__call__"),eb.forEach(t),Xp=s(Ea," special method."),Ea.forEach(t),Yp=d(rt),v(Jo.$$.fragment,rt),Zp=d(rt),Bi=a(rt,"P",{});var tb=i(Bi);eg=s(tb,"Example of single-label classification:"),tb.forEach(t),tg=d(rt),v(ws.$$.fragment,rt),og=d(rt),Wi=a(rt,"P",{});var ob=i(Wi);ng=s(ob,"Example of multi-label classification:"),ob.forEach(t),sg=d(rt),v(ks.$$.fragment,rt),rt.forEach(t),yt.forEach(t),ec=d(o),mo=a(o,"H2",{class:!0});var eh=i(mo);Xo=a(eh,"A",{id:!0,class:!0,href:!0});var nb=i(Xo);Qi=a(nb,"SPAN",{});var sb=i(Qi);v(vs.$$.fragment,sb),sb.forEach(t),nb.forEach(t),rg=d(eh),Hi=a(eh,"SPAN",{});var rb=i(Hi);ag=s(rb,"LongformerForMultipleChoice"),rb.forEach(t),eh.forEach(t),tc=d(o),He=a(o,"DIV",{class:!0});var Lt=i(He);v(bs.$$.fragment,Lt),ig=d(Lt),Ri=a(Lt,"P",{});var ab=i(Ri);lg=s(ab,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ab.forEach(t),dg=d(Lt),Ts=a(Lt,"P",{});var th=i(Ts);cg=s(th,"This model inherits from "),Zr=a(th,"A",{href:!0});var ib=i(Zr);hg=s(ib,"PreTrainedModel"),ib.forEach(t),mg=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),fg=d(Lt),ys=a(Lt,"P",{});var oh=i(ys);pg=s(oh,"This model is also a PyTorch "),Ls=a(oh,"A",{href:!0,rel:!0});var lb=i(Ls);gg=s(lb,"torch.nn.Module"),lb.forEach(t),ug=s(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),_g=d(Lt),Je=a(Lt,"DIV",{class:!0});var $t=i(Je);v($s.$$.fragment,$t),wg=d($t),fo=a($t,"P",{});var za=i(fo);kg=s(za,"The "),ea=a(za,"A",{href:!0});var db=i(ea);vg=s(db,"LongformerForMultipleChoice"),db.forEach(t),bg=s(za," forward method, overrides the "),Ui=a(za,"CODE",{});var cb=i(Ui);Tg=s(cb,"__call__"),cb.forEach(t),yg=s(za," special method."),za.forEach(t),Lg=d($t),v(Yo.$$.fragment,$t),$g=d($t),Vi=a($t,"P",{});var hb=i(Vi);Fg=s(hb,"Example:"),hb.forEach(t),xg=d($t),v(Fs.$$.fragment,$t),$t.forEach(t),Lt.forEach(t),oc=d(o),po=a(o,"H2",{class:!0});var nh=i(po);Zo=a(nh,"A",{id:!0,class:!0,href:!0});var mb=i(Zo);Gi=a(mb,"SPAN",{});var fb=i(Gi);v(xs.$$.fragment,fb),fb.forEach(t),mb.forEach(t),Mg=d(nh),Ki=a(nh,"SPAN",{});var pb=i(Ki);Eg=s(pb,"LongformerForTokenClassification"),pb.forEach(t),nh.forEach(t),nc=d(o),Re=a(o,"DIV",{class:!0});var Ft=i(Re);v(Ms.$$.fragment,Ft),zg=d(Ft),Ji=a(Ft,"P",{});var gb=i(Ji);qg=s(gb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),gb.forEach(t),Cg=d(Ft),Es=a(Ft,"P",{});var sh=i(Es);Pg=s(sh,"This model inherits from "),ta=a(sh,"A",{href:!0});var ub=i(ta);jg=s(ub,"PreTrainedModel"),ub.forEach(t),Og=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Ag=d(Ft),zs=a(Ft,"P",{});var rh=i(zs);Ng=s(rh,"This model is also a PyTorch "),qs=a(rh,"A",{href:!0,rel:!0});var _b=i(qs);Ig=s(_b,"torch.nn.Module"),_b.forEach(t),Sg=s(rh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh.forEach(t),Dg=d(Ft),Xe=a(Ft,"DIV",{class:!0});var xt=i(Xe);v(Cs.$$.fragment,xt),Bg=d(xt),go=a(xt,"P",{});var qa=i(go);Wg=s(qa,"The "),oa=a(qa,"A",{href:!0});var wb=i(oa);Qg=s(wb,"LongformerForTokenClassification"),wb.forEach(t),Hg=s(qa," forward method, overrides the "),Xi=a(qa,"CODE",{});var kb=i(Xi);Rg=s(kb,"__call__"),kb.forEach(t),Ug=s(qa," special method."),qa.forEach(t),Vg=d(xt),v(en.$$.fragment,xt),Gg=d(xt),Yi=a(xt,"P",{});var vb=i(Yi);Kg=s(vb,"Example:"),vb.forEach(t),Jg=d(xt),v(Ps.$$.fragment,xt),xt.forEach(t),Ft.forEach(t),sc=d(o),uo=a(o,"H2",{class:!0});var ah=i(uo);tn=a(ah,"A",{id:!0,class:!0,href:!0});var bb=i(tn);Zi=a(bb,"SPAN",{});var Tb=i(Zi);v(js.$$.fragment,Tb),Tb.forEach(t),bb.forEach(t),Xg=d(ah),el=a(ah,"SPAN",{});var yb=i(el);Yg=s(yb,"LongformerForQuestionAnswering"),yb.forEach(t),ah.forEach(t),rc=d(o),Ue=a(o,"DIV",{class:!0});var Mt=i(Ue);v(Os.$$.fragment,Mt),Zg=d(Mt),_o=a(Mt,"P",{});var Ca=i(_o);eu=s(Ca,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=a(Ca,"CODE",{});var Lb=i(tl);tu=s(Lb,"span start logits"),Lb.forEach(t),ou=s(Ca," and "),ol=a(Ca,"CODE",{});var $b=i(ol);nu=s($b,"span end logits"),$b.forEach(t),su=s(Ca,")."),Ca.forEach(t),ru=d(Mt),As=a(Mt,"P",{});var ih=i(As);au=s(ih,"This model inherits from "),na=a(ih,"A",{href:!0});var Fb=i(na);iu=s(Fb,"PreTrainedModel"),Fb.forEach(t),lu=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),du=d(Mt),Ns=a(Mt,"P",{});var lh=i(Ns);cu=s(lh,"This model is also a PyTorch "),Is=a(lh,"A",{href:!0,rel:!0});var xb=i(Is);hu=s(xb,"torch.nn.Module"),xb.forEach(t),mu=s(lh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lh.forEach(t),fu=d(Mt),Ye=a(Mt,"DIV",{class:!0});var Et=i(Ye);v(Ss.$$.fragment,Et),pu=d(Et),wo=a(Et,"P",{});var Pa=i(wo);gu=s(Pa,"The "),sa=a(Pa,"A",{href:!0});var Mb=i(sa);uu=s(Mb,"LongformerForQuestionAnswering"),Mb.forEach(t),_u=s(Pa," forward method, overrides the "),nl=a(Pa,"CODE",{});var Eb=i(nl);wu=s(Eb,"__call__"),Eb.forEach(t),ku=s(Pa," special method."),Pa.forEach(t),vu=d(Et),v(on.$$.fragment,Et),bu=d(Et),sl=a(Et,"P",{});var zb=i(sl);Tu=s(zb,"Examples:"),zb.forEach(t),yu=d(Et),v(Ds.$$.fragment,Et),Et.forEach(t),Mt.forEach(t),ac=d(o),ko=a(o,"H2",{class:!0});var dh=i(ko);nn=a(dh,"A",{id:!0,class:!0,href:!0});var qb=i(nn);rl=a(qb,"SPAN",{});var Cb=i(rl);v(Bs.$$.fragment,Cb),Cb.forEach(t),qb.forEach(t),Lu=d(dh),al=a(dh,"SPAN",{});var Pb=i(al);$u=s(Pb,"TFLongformerModel"),Pb.forEach(t),dh.forEach(t),ic=d(o),Ee=a(o,"DIV",{class:!0});var Be=i(Ee);v(Ws.$$.fragment,Be),Fu=d(Be),il=a(Be,"P",{});var jb=i(il);xu=s(jb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),jb.forEach(t),Mu=d(Be),Qs=a(Be,"P",{});var ch=i(Qs);Eu=s(ch,"This model inherits from "),ra=a(ch,"A",{href:!0});var Ob=i(ra);zu=s(Ob,"TFPreTrainedModel"),Ob.forEach(t),qu=s(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Cu=d(Be),Hs=a(Be,"P",{});var hh=i(Hs);Pu=s(hh,"This model is also a "),Rs=a(hh,"A",{href:!0,rel:!0});var Ab=i(Rs);ju=s(Ab,"tf.keras.Model"),Ab.forEach(t),Ou=s(hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hh.forEach(t),Au=d(Be),v(sn.$$.fragment,Be),Nu=d(Be),vo=a(Be,"P",{});var ja=i(vo);Iu=s(ja,"This class copies code from "),aa=a(ja,"A",{href:!0});var Nb=i(aa);Su=s(Nb,"TFRobertaModel"),Nb.forEach(t),Du=s(ja,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Us=a(ja,"A",{href:!0,rel:!0});var Ib=i(Us);Bu=s(Ib,"Longformer: the Long-Document Transformer"),Ib.forEach(t),Wu=s(ja,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),ja.forEach(t),Qu=d(Be),Vs=a(Be,"P",{});var mh=i(Vs);Hu=s(mh,"The self-attention module "),ll=a(mh,"CODE",{});var Sb=i(ll);Ru=s(Sb,"TFLongformerSelfAttention"),Sb.forEach(t),Uu=s(mh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),mh.forEach(t),Vu=d(Be),wt=a(Be,"DIV",{class:!0});var Oa=i(wt);v(Gs.$$.fragment,Oa),Gu=d(Oa),bo=a(Oa,"P",{});var Aa=i(bo);Ku=s(Aa,"The "),ia=a(Aa,"A",{href:!0});var Db=i(ia);Ju=s(Db,"TFLongformerModel"),Db.forEach(t),Xu=s(Aa," forward method, overrides the "),dl=a(Aa,"CODE",{});var Bb=i(dl);Yu=s(Bb,"__call__"),Bb.forEach(t),Zu=s(Aa," special method."),Aa.forEach(t),e_=d(Oa),v(rn.$$.fragment,Oa),Oa.forEach(t),Be.forEach(t),lc=d(o),To=a(o,"H2",{class:!0});var fh=i(To);an=a(fh,"A",{id:!0,class:!0,href:!0});var Wb=i(an);cl=a(Wb,"SPAN",{});var Qb=i(cl);v(Ks.$$.fragment,Qb),Qb.forEach(t),Wb.forEach(t),t_=d(fh),hl=a(fh,"SPAN",{});var Hb=i(hl);o_=s(Hb,"TFLongformerForMaskedLM"),Hb.forEach(t),fh.forEach(t),dc=d(o),Ae=a(o,"DIV",{class:!0});var lt=i(Ae);v(Js.$$.fragment,lt),n_=d(lt),Xs=a(lt,"P",{});var ph=i(Xs);s_=s(ph,"Longformer Model with a "),ml=a(ph,"CODE",{});var Rb=i(ml);r_=s(Rb,"language modeling"),Rb.forEach(t),a_=s(ph," head on top."),ph.forEach(t),i_=d(lt),Ys=a(lt,"P",{});var gh=i(Ys);l_=s(gh,"This model inherits from "),la=a(gh,"A",{href:!0});var Ub=i(la);d_=s(Ub,"TFPreTrainedModel"),Ub.forEach(t),c_=s(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh.forEach(t),h_=d(lt),Zs=a(lt,"P",{});var uh=i(Zs);m_=s(uh,"This model is also a "),er=a(uh,"A",{href:!0,rel:!0});var Vb=i(er);f_=s(Vb,"tf.keras.Model"),Vb.forEach(t),p_=s(uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uh.forEach(t),g_=d(lt),v(ln.$$.fragment,lt),u_=d(lt),Ze=a(lt,"DIV",{class:!0});var zt=i(Ze);v(tr.$$.fragment,zt),__=d(zt),yo=a(zt,"P",{});var Na=i(yo);w_=s(Na,"The "),da=a(Na,"A",{href:!0});var Gb=i(da);k_=s(Gb,"TFLongformerForMaskedLM"),Gb.forEach(t),v_=s(Na," forward method, overrides the "),fl=a(Na,"CODE",{});var Kb=i(fl);b_=s(Kb,"__call__"),Kb.forEach(t),T_=s(Na," special method."),Na.forEach(t),y_=d(zt),v(dn.$$.fragment,zt),L_=d(zt),pl=a(zt,"P",{});var Jb=i(pl);$_=s(Jb,"Example:"),Jb.forEach(t),F_=d(zt),v(or.$$.fragment,zt),zt.forEach(t),lt.forEach(t),cc=d(o),Lo=a(o,"H2",{class:!0});var _h=i(Lo);cn=a(_h,"A",{id:!0,class:!0,href:!0});var Xb=i(cn);gl=a(Xb,"SPAN",{});var Yb=i(gl);v(nr.$$.fragment,Yb),Yb.forEach(t),Xb.forEach(t),x_=d(_h),ul=a(_h,"SPAN",{});var Zb=i(ul);M_=s(Zb,"TFLongformerForQuestionAnswering"),Zb.forEach(t),_h.forEach(t),hc=d(o),Ne=a(o,"DIV",{class:!0});var dt=i(Ne);v(sr.$$.fragment,dt),E_=d(dt),$o=a(dt,"P",{});var Ia=i($o);z_=s(Ia,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=a(Ia,"CODE",{});var eT=i(_l);q_=s(eT,"span start logits"),eT.forEach(t),C_=s(Ia," and "),wl=a(Ia,"CODE",{});var tT=i(wl);P_=s(tT,"span end logits"),tT.forEach(t),j_=s(Ia,")."),Ia.forEach(t),O_=d(dt),rr=a(dt,"P",{});var wh=i(rr);A_=s(wh,"This model inherits from "),ca=a(wh,"A",{href:!0});var oT=i(ca);N_=s(oT,"TFPreTrainedModel"),oT.forEach(t),I_=s(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),S_=d(dt),ar=a(dt,"P",{});var kh=i(ar);D_=s(kh,"This model is also a "),ir=a(kh,"A",{href:!0,rel:!0});var nT=i(ir);B_=s(nT,"tf.keras.Model"),nT.forEach(t),W_=s(kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh.forEach(t),Q_=d(dt),v(hn.$$.fragment,dt),H_=d(dt),et=a(dt,"DIV",{class:!0});var qt=i(et);v(lr.$$.fragment,qt),R_=d(qt),Fo=a(qt,"P",{});var Sa=i(Fo);U_=s(Sa,"The "),ha=a(Sa,"A",{href:!0});var sT=i(ha);V_=s(sT,"TFLongformerForQuestionAnswering"),sT.forEach(t),G_=s(Sa," forward method, overrides the "),kl=a(Sa,"CODE",{});var rT=i(kl);K_=s(rT,"__call__"),rT.forEach(t),J_=s(Sa," special method."),Sa.forEach(t),X_=d(qt),v(mn.$$.fragment,qt),Y_=d(qt),vl=a(qt,"P",{});var aT=i(vl);Z_=s(aT,"Example:"),aT.forEach(t),ew=d(qt),v(dr.$$.fragment,qt),qt.forEach(t),dt.forEach(t),mc=d(o),xo=a(o,"H2",{class:!0});var vh=i(xo);fn=a(vh,"A",{id:!0,class:!0,href:!0});var iT=i(fn);bl=a(iT,"SPAN",{});var lT=i(bl);v(cr.$$.fragment,lT),lT.forEach(t),iT.forEach(t),tw=d(vh),Tl=a(vh,"SPAN",{});var dT=i(Tl);ow=s(dT,"TFLongformerForSequenceClassification"),dT.forEach(t),vh.forEach(t),fc=d(o),Ie=a(o,"DIV",{class:!0});var ct=i(Ie);v(hr.$$.fragment,ct),nw=d(ct),yl=a(ct,"P",{});var cT=i(yl);sw=s(cT,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cT.forEach(t),rw=d(ct),mr=a(ct,"P",{});var bh=i(mr);aw=s(bh,"This model inherits from "),ma=a(bh,"A",{href:!0});var hT=i(ma);iw=s(hT,"TFPreTrainedModel"),hT.forEach(t),lw=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),dw=d(ct),fr=a(ct,"P",{});var Th=i(fr);cw=s(Th,"This model is also a "),pr=a(Th,"A",{href:!0,rel:!0});var mT=i(pr);hw=s(mT,"tf.keras.Model"),mT.forEach(t),mw=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(t),fw=d(ct),v(pn.$$.fragment,ct),pw=d(ct),tt=a(ct,"DIV",{class:!0});var Ct=i(tt);v(gr.$$.fragment,Ct),gw=d(Ct),Mo=a(Ct,"P",{});var Da=i(Mo);uw=s(Da,"The "),fa=a(Da,"A",{href:!0});var fT=i(fa);_w=s(fT,"TFLongformerForSequenceClassification"),fT.forEach(t),ww=s(Da," forward method, overrides the "),Ll=a(Da,"CODE",{});var pT=i(Ll);kw=s(pT,"__call__"),pT.forEach(t),vw=s(Da," special method."),Da.forEach(t),bw=d(Ct),v(gn.$$.fragment,Ct),Tw=d(Ct),$l=a(Ct,"P",{});var gT=i($l);yw=s(gT,"Example:"),gT.forEach(t),Lw=d(Ct),v(ur.$$.fragment,Ct),Ct.forEach(t),ct.forEach(t),pc=d(o),Eo=a(o,"H2",{class:!0});var yh=i(Eo);un=a(yh,"A",{id:!0,class:!0,href:!0});var uT=i(un);Fl=a(uT,"SPAN",{});var _T=i(Fl);v(_r.$$.fragment,_T),_T.forEach(t),uT.forEach(t),$w=d(yh),xl=a(yh,"SPAN",{});var wT=i(xl);Fw=s(wT,"TFLongformerForTokenClassification"),wT.forEach(t),yh.forEach(t),gc=d(o),Se=a(o,"DIV",{class:!0});var ht=i(Se);v(wr.$$.fragment,ht),xw=d(ht),Ml=a(ht,"P",{});var kT=i(Ml);Mw=s(kT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),kT.forEach(t),Ew=d(ht),kr=a(ht,"P",{});var Lh=i(kr);zw=s(Lh,"This model inherits from "),pa=a(Lh,"A",{href:!0});var vT=i(pa);qw=s(vT,"TFPreTrainedModel"),vT.forEach(t),Cw=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),Pw=d(ht),vr=a(ht,"P",{});var $h=i(vr);jw=s($h,"This model is also a "),br=a($h,"A",{href:!0,rel:!0});var bT=i(br);Ow=s(bT,"tf.keras.Model"),bT.forEach(t),Aw=s($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(t),Nw=d(ht),v(_n.$$.fragment,ht),Iw=d(ht),ot=a(ht,"DIV",{class:!0});var Pt=i(ot);v(Tr.$$.fragment,Pt),Sw=d(Pt),zo=a(Pt,"P",{});var Ba=i(zo);Dw=s(Ba,"The "),ga=a(Ba,"A",{href:!0});var TT=i(ga);Bw=s(TT,"TFLongformerForTokenClassification"),TT.forEach(t),Ww=s(Ba," forward method, overrides the "),El=a(Ba,"CODE",{});var yT=i(El);Qw=s(yT,"__call__"),yT.forEach(t),Hw=s(Ba," special method."),Ba.forEach(t),Rw=d(Pt),v(wn.$$.fragment,Pt),Uw=d(Pt),zl=a(Pt,"P",{});var LT=i(zl);Vw=s(LT,"Example:"),LT.forEach(t),Gw=d(Pt),v(yr.$$.fragment,Pt),Pt.forEach(t),ht.forEach(t),uc=d(o),qo=a(o,"H2",{class:!0});var Fh=i(qo);kn=a(Fh,"A",{id:!0,class:!0,href:!0});var $T=i(kn);ql=a($T,"SPAN",{});var FT=i(ql);v(Lr.$$.fragment,FT),FT.forEach(t),$T.forEach(t),Kw=d(Fh),Cl=a(Fh,"SPAN",{});var xT=i(Cl);Jw=s(xT,"TFLongformerForMultipleChoice"),xT.forEach(t),Fh.forEach(t),_c=d(o),De=a(o,"DIV",{class:!0});var mt=i(De);v($r.$$.fragment,mt),Xw=d(mt),Pl=a(mt,"P",{});var MT=i(Pl);Yw=s(MT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),MT.forEach(t),Zw=d(mt),Fr=a(mt,"P",{});var xh=i(Fr);ek=s(xh,"This model inherits from "),ua=a(xh,"A",{href:!0});var ET=i(ua);tk=s(ET,"TFPreTrainedModel"),ET.forEach(t),ok=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),nk=d(mt),xr=a(mt,"P",{});var Mh=i(xr);sk=s(Mh,"This model is also a "),Mr=a(Mh,"A",{href:!0,rel:!0});var zT=i(Mr);rk=s(zT,"tf.keras.Model"),zT.forEach(t),ak=s(Mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mh.forEach(t),ik=d(mt),v(vn.$$.fragment,mt),lk=d(mt),nt=a(mt,"DIV",{class:!0});var jt=i(nt);v(Er.$$.fragment,jt),dk=d(jt),Co=a(jt,"P",{});var Wa=i(Co);ck=s(Wa,"The "),_a=a(Wa,"A",{href:!0});var qT=i(_a);hk=s(qT,"TFLongformerForMultipleChoice"),qT.forEach(t),mk=s(Wa," forward method, overrides the "),jl=a(Wa,"CODE",{});var CT=i(jl);fk=s(CT,"__call__"),CT.forEach(t),pk=s(Wa," special method."),Wa.forEach(t),gk=d(jt),v(bn.$$.fragment,jt),uk=d(jt),Ol=a(jt,"P",{});var PT=i(Ol);_k=s(PT,"Example:"),PT.forEach(t),wk=d(jt),v(zr.$$.fragment,jt),jt.forEach(t),mt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(m1)),c(u,"id","longformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#longformer"),c(g,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(E,"class","relative group"),c(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(te,"rel","nofollow"),c(ve,"href","https://huggingface.co/beltagy"),c(ve,"rel","nofollow"),c(P,"href","https://github.com/allenai/longformer"),c(P,"rel","nofollow"),c(ke,"id","longformer-self-attention"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#longformer-self-attention"),c(N,"class","relative group"),ed.a=td,od.a=nd,sd.a=rd,ad.a=id,dd.a=cd,c(jr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerModel.forward"),gd.a=ud,_d.a=wd,kd.a=vd,bd.a=Td,c(Tn,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(Tn,"rel","nofollow"),c(Io,"id","training"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#training"),c(Ot,"class","relative group"),c(Or,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ar,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.RobertaForMaskedLM"),c(So,"id","transformers.LongformerConfig"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.LongformerConfig"),c(Nt,"class","relative group"),c(Nr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerModel"),c(Ir,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerModel"),c(Sr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerModel"),c(xn,"href","https://huggingface.co/roberta-base"),c(xn,"rel","nofollow"),c(Dr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerConfig"),c(Br,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.RobertaConfig"),c(Oe,"class","docstring"),c(Do,"id","transformers.LongformerTokenizer"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.LongformerTokenizer"),c(Bt,"class","relative group"),c(Wr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizer"),c(Qr,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ft,"class","docstring"),c(Wo,"id","transformers.LongformerTokenizerFast"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.LongformerTokenizerFast"),c(Wt,"class","relative group"),c(Hr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerTokenizerFast"),c(Rr,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(pt,"class","docstring"),c(Ho,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Qt,"class","relative group"),c(Ht,"class","docstring"),c(Rt,"class","docstring"),c(Ut,"class","docstring"),c(Vt,"class","docstring"),c(Gt,"class","docstring"),c(Kt,"class","docstring"),c(Jt,"class","docstring"),c(Xt,"class","docstring"),c(Yt,"class","docstring"),c(Zt,"class","docstring"),c(eo,"class","docstring"),c(to,"class","docstring"),c(oo,"class","docstring"),c(no,"class","docstring"),c(Ro,"id","transformers.LongformerModel"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.LongformerModel"),c(so,"class","relative group"),c(Ur,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zn,"rel","nofollow"),c(Vr,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.RobertaModel"),c(es,"href","https://arxiv.org/abs/2004.05150"),c(es,"rel","nofollow"),c(Gr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerModel"),c(Ge,"class","docstring"),c(qe,"class","docstring"),c(Vo,"id","transformers.LongformerForMaskedLM"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.LongformerForMaskedLM"),c(io,"class","relative group"),c(Kr,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ds,"rel","nofollow"),c(Jr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ke,"class","docstring"),c(We,"class","docstring"),c(Ko,"id","transformers.LongformerForSequenceClassification"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.LongformerForSequenceClassification"),c(co,"class","relative group"),c(Xr,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(us,"rel","nofollow"),c(Yr,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),c(Ce,"class","docstring"),c(Qe,"class","docstring"),c(Xo,"id","transformers.LongformerForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.LongformerForMultipleChoice"),c(mo,"class","relative group"),c(Zr,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ls,"rel","nofollow"),c(ea,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),c(Je,"class","docstring"),c(He,"class","docstring"),c(Zo,"id","transformers.LongformerForTokenClassification"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.LongformerForTokenClassification"),c(po,"class","relative group"),c(ta,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(oa,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForTokenClassification"),c(Xe,"class","docstring"),c(Re,"class","docstring"),c(tn,"id","transformers.LongformerForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.LongformerForQuestionAnswering"),c(uo,"class","relative group"),c(na,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.PreTrainedModel"),c(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Is,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),c(Ye,"class","docstring"),c(Ue,"class","docstring"),c(nn,"id","transformers.TFLongformerModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.TFLongformerModel"),c(ko,"class","relative group"),c(ra,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rs,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16302/en/model_doc/roberta#transformers.TFRobertaModel"),c(Us,"href","https://arxiv.org/abs/2004.05150"),c(Us,"rel","nofollow"),c(ia,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerModel"),c(wt,"class","docstring"),c(Ee,"class","docstring"),c(an,"id","transformers.TFLongformerForMaskedLM"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.TFLongformerForMaskedLM"),c(To,"class","relative group"),c(la,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(er,"rel","nofollow"),c(da,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),c(Ze,"class","docstring"),c(Ae,"class","docstring"),c(cn,"id","transformers.TFLongformerForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.TFLongformerForQuestionAnswering"),c(Lo,"class","relative group"),c(ca,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(ha,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),c(et,"class","docstring"),c(Ne,"class","docstring"),c(fn,"id","transformers.TFLongformerForSequenceClassification"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.TFLongformerForSequenceClassification"),c(xo,"class","relative group"),c(ma,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pr,"rel","nofollow"),c(fa,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(un,"id","transformers.TFLongformerForTokenClassification"),c(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(un,"href","#transformers.TFLongformerForTokenClassification"),c(Eo,"class","relative group"),c(pa,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(br,"rel","nofollow"),c(ga,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(kn,"id","transformers.TFLongformerForMultipleChoice"),c(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kn,"href","#transformers.TFLongformerForMultipleChoice"),c(qo,"class","relative group"),c(ua,"href","/docs/transformers/pr_16302/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(_a,"href","/docs/transformers/pr_16302/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),c(nt,"class","docstring"),c(De,"class","docstring")},m(o,f){e(document.head,p),h(o,x,f),h(o,g,f),e(g,u),e(u,$),b(w,$,null),e(g,_),e(g,M),e(M,me),h(o,J,f),h(o,E,f),e(E,Z),e(Z,I),b(ee,I,null),e(E,fe),e(E,S),e(S,pe),h(o,le,f),h(o,G,f),e(G,j),e(G,te),e(te,X),e(G,z),h(o,C,f),h(o,ne,f),e(ne,H),h(o,de,f),h(o,se,f),e(se,D),e(D,ge),h(o,ce,f),h(o,q,f),e(q,ue),h(o,W,f),h(o,re,f),e(re,K),e(K,R),e(K,ae),e(ae,_e),e(K,O),e(K,ie),e(ie,U),e(K,we),e(K,m),e(m,F),e(K,Y),h(o,Te,f),h(o,he,f),e(he,A),e(he,ve),e(ve,$e),e(he,Fe),e(he,P),e(P,V),e(he,xe),h(o,ye,f),h(o,N,f),e(N,ke),e(ke,be),b(oe,be,null),e(N,Me),e(N,Qa),e(Qa,Eh),h(o,Zl,f),h(o,Le,f),e(Le,zh),ed.m(jT,Le),e(Le,td),od.m(OT,Le),e(Le,nd),sd.m(AT,Le),e(Le,rd),e(Le,Ha),e(Ha,qh),e(Le,Ch),e(Le,Ra),e(Ra,Ph),e(Le,jh),e(Le,Ua),e(Ua,Oh),e(Le,Ah),ad.m(NT,Le),e(Le,id),e(Le,Va),e(Va,Nh),e(Le,Ih),h(o,ld,f),h(o,ut,f),e(ut,Sh),dd.m(IT,ut),e(ut,cd),e(ut,Ga),e(Ga,Dh),e(ut,Bh),h(o,hd,f),h(o,_t,f),e(_t,Wh),e(_t,Ka),e(Ka,Qh),e(_t,Hh),e(_t,Ja),e(Ja,Rh),e(_t,Uh),h(o,md,f),h(o,Oo,f),e(Oo,Xa),e(Xa,Vh),e(Oo,Gh),e(Oo,Ya),e(Ya,Kh),h(o,fd,f),h(o,Ao,f),e(Ao,Jh),e(Ao,jr),e(jr,Xh),e(Ao,Yh),h(o,pd,f),h(o,Ve,f),e(Ve,Zh),gd.m(ST,Ve),e(Ve,ud),_d.m(DT,Ve),e(Ve,wd),kd.m(BT,Ve),e(Ve,vd),bd.m(WT,Ve),e(Ve,Td),h(o,yd,f),h(o,No,f),e(No,em),e(No,Tn),e(Tn,tm),e(No,om),h(o,Ld,f),h(o,Ot,f),e(Ot,Io),e(Io,Za),b(yn,Za,null),e(Ot,nm),e(Ot,ei),e(ei,sm),h(o,$d,f),h(o,At,f),e(At,Or),e(Or,rm),e(At,am),e(At,Ar),e(Ar,im),e(At,lm),h(o,Fd,f),b(Ln,o,f),h(o,xd,f),h(o,Nt,f),e(Nt,So),e(So,ti),b($n,ti,null),e(Nt,dm),e(Nt,oi),e(oi,cm),h(o,Md,f),h(o,Oe,f),b(Fn,Oe,null),e(Oe,hm),e(Oe,It),e(It,mm),e(It,Nr),e(Nr,fm),e(It,pm),e(It,Ir),e(Ir,gm),e(It,um),e(Oe,_m),e(Oe,St),e(St,wm),e(St,Sr),e(Sr,km),e(St,vm),e(St,xn),e(xn,bm),e(St,Tm),e(Oe,ym),e(Oe,Dt),e(Dt,Lm),e(Dt,Dr),e(Dr,$m),e(Dt,Fm),e(Dt,Br),e(Br,xm),e(Dt,Mm),e(Oe,Em),e(Oe,ni),e(ni,zm),e(Oe,qm),b(Mn,Oe,null),h(o,Ed,f),h(o,Bt,f),e(Bt,Do),e(Do,si),b(En,si,null),e(Bt,Cm),e(Bt,ri),e(ri,Pm),h(o,zd,f),h(o,ft,f),b(zn,ft,null),e(ft,jm),e(ft,ai),e(ai,Om),e(ft,Am),e(ft,Bo),e(Bo,Wr),e(Wr,Nm),e(Bo,Im),e(Bo,Qr),e(Qr,Sm),e(Bo,Dm),h(o,qd,f),h(o,Wt,f),e(Wt,Wo),e(Wo,ii),b(qn,ii,null),e(Wt,Bm),e(Wt,li),e(li,Wm),h(o,Cd,f),h(o,pt,f),b(Cn,pt,null),e(pt,Qm),e(pt,Pn),e(Pn,Hm),e(Pn,di),e(di,Rm),e(Pn,Um),e(pt,Vm),e(pt,Qo),e(Qo,Hr),e(Hr,Gm),e(Qo,Km),e(Qo,Rr),e(Rr,Jm),e(Qo,Xm),h(o,Pd,f),h(o,Qt,f),e(Qt,Ho),e(Ho,ci),b(jn,ci,null),e(Qt,Ym),e(Qt,hi),e(hi,Zm),h(o,jd,f),h(o,Ht,f),b(On,Ht,null),e(Ht,ef),e(Ht,mi),e(mi,tf),h(o,Od,f),h(o,Rt,f),b(An,Rt,null),e(Rt,of),e(Rt,fi),e(fi,nf),h(o,Ad,f),h(o,Ut,f),b(Nn,Ut,null),e(Ut,sf),e(Ut,pi),e(pi,rf),h(o,Nd,f),h(o,Vt,f),b(In,Vt,null),e(Vt,af),e(Vt,gi),e(gi,lf),h(o,Id,f),h(o,Gt,f),b(Sn,Gt,null),e(Gt,df),e(Gt,ui),e(ui,cf),h(o,Sd,f),h(o,Kt,f),b(Dn,Kt,null),e(Kt,hf),e(Kt,_i),e(_i,mf),h(o,Dd,f),h(o,Jt,f),b(Bn,Jt,null),e(Jt,ff),e(Jt,wi),e(wi,pf),h(o,Bd,f),h(o,Xt,f),b(Wn,Xt,null),e(Xt,gf),e(Xt,ki),e(ki,uf),h(o,Wd,f),h(o,Yt,f),b(Qn,Yt,null),e(Yt,_f),e(Yt,vi),e(vi,wf),h(o,Qd,f),h(o,Zt,f),b(Hn,Zt,null),e(Zt,kf),e(Zt,bi),e(bi,vf),h(o,Hd,f),h(o,eo,f),b(Rn,eo,null),e(eo,bf),e(eo,Ti),e(Ti,Tf),h(o,Rd,f),h(o,to,f),b(Un,to,null),e(to,yf),e(to,yi),e(yi,Lf),h(o,Ud,f),h(o,oo,f),b(Vn,oo,null),e(oo,$f),e(oo,Li),e(Li,Ff),h(o,Vd,f),h(o,no,f),b(Gn,no,null),e(no,xf),e(no,$i),e($i,Mf),h(o,Gd,f),h(o,so,f),e(so,Ro),e(Ro,Fi),b(Kn,Fi,null),e(so,Ef),e(so,xi),e(xi,zf),h(o,Kd,f),h(o,qe,f),b(Jn,qe,null),e(qe,qf),e(qe,Mi),e(Mi,Cf),e(qe,Pf),e(qe,Xn),e(Xn,jf),e(Xn,Ur),e(Ur,Of),e(Xn,Af),e(qe,Nf),e(qe,Yn),e(Yn,If),e(Yn,Zn),e(Zn,Sf),e(Yn,Df),e(qe,Bf),e(qe,ro),e(ro,Wf),e(ro,Vr),e(Vr,Qf),e(ro,Hf),e(ro,es),e(es,Rf),e(ro,Uf),e(qe,Vf),e(qe,ts),e(ts,Gf),e(ts,Ei),e(Ei,Kf),e(ts,Jf),e(qe,Xf),e(qe,Ge),b(os,Ge,null),e(Ge,Yf),e(Ge,ao),e(ao,Zf),e(ao,Gr),e(Gr,ep),e(ao,tp),e(ao,zi),e(zi,op),e(ao,np),e(Ge,sp),b(Uo,Ge,null),e(Ge,rp),e(Ge,qi),e(qi,ap),e(Ge,ip),b(ns,Ge,null),h(o,Jd,f),h(o,io,f),e(io,Vo),e(Vo,Ci),b(ss,Ci,null),e(io,lp),e(io,Pi),e(Pi,dp),h(o,Xd,f),h(o,We,f),b(rs,We,null),e(We,cp),e(We,as),e(as,hp),e(as,ji),e(ji,mp),e(as,fp),e(We,pp),e(We,is),e(is,gp),e(is,Kr),e(Kr,up),e(is,_p),e(We,wp),e(We,ls),e(ls,kp),e(ls,ds),e(ds,vp),e(ls,bp),e(We,Tp),e(We,Ke),b(cs,Ke,null),e(Ke,yp),e(Ke,lo),e(lo,Lp),e(lo,Jr),e(Jr,$p),e(lo,Fp),e(lo,Oi),e(Oi,xp),e(lo,Mp),e(Ke,Ep),b(Go,Ke,null),e(Ke,zp),e(Ke,Ai),e(Ai,qp),e(Ke,Cp),b(hs,Ke,null),h(o,Yd,f),h(o,co,f),e(co,Ko),e(Ko,Ni),b(ms,Ni,null),e(co,Pp),e(co,Ii),e(Ii,jp),h(o,Zd,f),h(o,Qe,f),b(fs,Qe,null),e(Qe,Op),e(Qe,Si),e(Si,Ap),e(Qe,Np),e(Qe,ps),e(ps,Ip),e(ps,Xr),e(Xr,Sp),e(ps,Dp),e(Qe,Bp),e(Qe,gs),e(gs,Wp),e(gs,us),e(us,Qp),e(gs,Hp),e(Qe,Rp),e(Qe,Ce),b(_s,Ce,null),e(Ce,Up),e(Ce,ho),e(ho,Vp),e(ho,Yr),e(Yr,Gp),e(ho,Kp),e(ho,Di),e(Di,Jp),e(ho,Xp),e(Ce,Yp),b(Jo,Ce,null),e(Ce,Zp),e(Ce,Bi),e(Bi,eg),e(Ce,tg),b(ws,Ce,null),e(Ce,og),e(Ce,Wi),e(Wi,ng),e(Ce,sg),b(ks,Ce,null),h(o,ec,f),h(o,mo,f),e(mo,Xo),e(Xo,Qi),b(vs,Qi,null),e(mo,rg),e(mo,Hi),e(Hi,ag),h(o,tc,f),h(o,He,f),b(bs,He,null),e(He,ig),e(He,Ri),e(Ri,lg),e(He,dg),e(He,Ts),e(Ts,cg),e(Ts,Zr),e(Zr,hg),e(Ts,mg),e(He,fg),e(He,ys),e(ys,pg),e(ys,Ls),e(Ls,gg),e(ys,ug),e(He,_g),e(He,Je),b($s,Je,null),e(Je,wg),e(Je,fo),e(fo,kg),e(fo,ea),e(ea,vg),e(fo,bg),e(fo,Ui),e(Ui,Tg),e(fo,yg),e(Je,Lg),b(Yo,Je,null),e(Je,$g),e(Je,Vi),e(Vi,Fg),e(Je,xg),b(Fs,Je,null),h(o,oc,f),h(o,po,f),e(po,Zo),e(Zo,Gi),b(xs,Gi,null),e(po,Mg),e(po,Ki),e(Ki,Eg),h(o,nc,f),h(o,Re,f),b(Ms,Re,null),e(Re,zg),e(Re,Ji),e(Ji,qg),e(Re,Cg),e(Re,Es),e(Es,Pg),e(Es,ta),e(ta,jg),e(Es,Og),e(Re,Ag),e(Re,zs),e(zs,Ng),e(zs,qs),e(qs,Ig),e(zs,Sg),e(Re,Dg),e(Re,Xe),b(Cs,Xe,null),e(Xe,Bg),e(Xe,go),e(go,Wg),e(go,oa),e(oa,Qg),e(go,Hg),e(go,Xi),e(Xi,Rg),e(go,Ug),e(Xe,Vg),b(en,Xe,null),e(Xe,Gg),e(Xe,Yi),e(Yi,Kg),e(Xe,Jg),b(Ps,Xe,null),h(o,sc,f),h(o,uo,f),e(uo,tn),e(tn,Zi),b(js,Zi,null),e(uo,Xg),e(uo,el),e(el,Yg),h(o,rc,f),h(o,Ue,f),b(Os,Ue,null),e(Ue,Zg),e(Ue,_o),e(_o,eu),e(_o,tl),e(tl,tu),e(_o,ou),e(_o,ol),e(ol,nu),e(_o,su),e(Ue,ru),e(Ue,As),e(As,au),e(As,na),e(na,iu),e(As,lu),e(Ue,du),e(Ue,Ns),e(Ns,cu),e(Ns,Is),e(Is,hu),e(Ns,mu),e(Ue,fu),e(Ue,Ye),b(Ss,Ye,null),e(Ye,pu),e(Ye,wo),e(wo,gu),e(wo,sa),e(sa,uu),e(wo,_u),e(wo,nl),e(nl,wu),e(wo,ku),e(Ye,vu),b(on,Ye,null),e(Ye,bu),e(Ye,sl),e(sl,Tu),e(Ye,yu),b(Ds,Ye,null),h(o,ac,f),h(o,ko,f),e(ko,nn),e(nn,rl),b(Bs,rl,null),e(ko,Lu),e(ko,al),e(al,$u),h(o,ic,f),h(o,Ee,f),b(Ws,Ee,null),e(Ee,Fu),e(Ee,il),e(il,xu),e(Ee,Mu),e(Ee,Qs),e(Qs,Eu),e(Qs,ra),e(ra,zu),e(Qs,qu),e(Ee,Cu),e(Ee,Hs),e(Hs,Pu),e(Hs,Rs),e(Rs,ju),e(Hs,Ou),e(Ee,Au),b(sn,Ee,null),e(Ee,Nu),e(Ee,vo),e(vo,Iu),e(vo,aa),e(aa,Su),e(vo,Du),e(vo,Us),e(Us,Bu),e(vo,Wu),e(Ee,Qu),e(Ee,Vs),e(Vs,Hu),e(Vs,ll),e(ll,Ru),e(Vs,Uu),e(Ee,Vu),e(Ee,wt),b(Gs,wt,null),e(wt,Gu),e(wt,bo),e(bo,Ku),e(bo,ia),e(ia,Ju),e(bo,Xu),e(bo,dl),e(dl,Yu),e(bo,Zu),e(wt,e_),b(rn,wt,null),h(o,lc,f),h(o,To,f),e(To,an),e(an,cl),b(Ks,cl,null),e(To,t_),e(To,hl),e(hl,o_),h(o,dc,f),h(o,Ae,f),b(Js,Ae,null),e(Ae,n_),e(Ae,Xs),e(Xs,s_),e(Xs,ml),e(ml,r_),e(Xs,a_),e(Ae,i_),e(Ae,Ys),e(Ys,l_),e(Ys,la),e(la,d_),e(Ys,c_),e(Ae,h_),e(Ae,Zs),e(Zs,m_),e(Zs,er),e(er,f_),e(Zs,p_),e(Ae,g_),b(ln,Ae,null),e(Ae,u_),e(Ae,Ze),b(tr,Ze,null),e(Ze,__),e(Ze,yo),e(yo,w_),e(yo,da),e(da,k_),e(yo,v_),e(yo,fl),e(fl,b_),e(yo,T_),e(Ze,y_),b(dn,Ze,null),e(Ze,L_),e(Ze,pl),e(pl,$_),e(Ze,F_),b(or,Ze,null),h(o,cc,f),h(o,Lo,f),e(Lo,cn),e(cn,gl),b(nr,gl,null),e(Lo,x_),e(Lo,ul),e(ul,M_),h(o,hc,f),h(o,Ne,f),b(sr,Ne,null),e(Ne,E_),e(Ne,$o),e($o,z_),e($o,_l),e(_l,q_),e($o,C_),e($o,wl),e(wl,P_),e($o,j_),e(Ne,O_),e(Ne,rr),e(rr,A_),e(rr,ca),e(ca,N_),e(rr,I_),e(Ne,S_),e(Ne,ar),e(ar,D_),e(ar,ir),e(ir,B_),e(ar,W_),e(Ne,Q_),b(hn,Ne,null),e(Ne,H_),e(Ne,et),b(lr,et,null),e(et,R_),e(et,Fo),e(Fo,U_),e(Fo,ha),e(ha,V_),e(Fo,G_),e(Fo,kl),e(kl,K_),e(Fo,J_),e(et,X_),b(mn,et,null),e(et,Y_),e(et,vl),e(vl,Z_),e(et,ew),b(dr,et,null),h(o,mc,f),h(o,xo,f),e(xo,fn),e(fn,bl),b(cr,bl,null),e(xo,tw),e(xo,Tl),e(Tl,ow),h(o,fc,f),h(o,Ie,f),b(hr,Ie,null),e(Ie,nw),e(Ie,yl),e(yl,sw),e(Ie,rw),e(Ie,mr),e(mr,aw),e(mr,ma),e(ma,iw),e(mr,lw),e(Ie,dw),e(Ie,fr),e(fr,cw),e(fr,pr),e(pr,hw),e(fr,mw),e(Ie,fw),b(pn,Ie,null),e(Ie,pw),e(Ie,tt),b(gr,tt,null),e(tt,gw),e(tt,Mo),e(Mo,uw),e(Mo,fa),e(fa,_w),e(Mo,ww),e(Mo,Ll),e(Ll,kw),e(Mo,vw),e(tt,bw),b(gn,tt,null),e(tt,Tw),e(tt,$l),e($l,yw),e(tt,Lw),b(ur,tt,null),h(o,pc,f),h(o,Eo,f),e(Eo,un),e(un,Fl),b(_r,Fl,null),e(Eo,$w),e(Eo,xl),e(xl,Fw),h(o,gc,f),h(o,Se,f),b(wr,Se,null),e(Se,xw),e(Se,Ml),e(Ml,Mw),e(Se,Ew),e(Se,kr),e(kr,zw),e(kr,pa),e(pa,qw),e(kr,Cw),e(Se,Pw),e(Se,vr),e(vr,jw),e(vr,br),e(br,Ow),e(vr,Aw),e(Se,Nw),b(_n,Se,null),e(Se,Iw),e(Se,ot),b(Tr,ot,null),e(ot,Sw),e(ot,zo),e(zo,Dw),e(zo,ga),e(ga,Bw),e(zo,Ww),e(zo,El),e(El,Qw),e(zo,Hw),e(ot,Rw),b(wn,ot,null),e(ot,Uw),e(ot,zl),e(zl,Vw),e(ot,Gw),b(yr,ot,null),h(o,uc,f),h(o,qo,f),e(qo,kn),e(kn,ql),b(Lr,ql,null),e(qo,Kw),e(qo,Cl),e(Cl,Jw),h(o,_c,f),h(o,De,f),b($r,De,null),e(De,Xw),e(De,Pl),e(Pl,Yw),e(De,Zw),e(De,Fr),e(Fr,ek),e(Fr,ua),e(ua,tk),e(Fr,ok),e(De,nk),e(De,xr),e(xr,sk),e(xr,Mr),e(Mr,rk),e(xr,ak),e(De,ik),b(vn,De,null),e(De,lk),e(De,nt),b(Er,nt,null),e(nt,dk),e(nt,Co),e(Co,ck),e(Co,_a),e(_a,hk),e(Co,mk),e(Co,jl),e(jl,fk),e(Co,pk),e(nt,gk),b(bn,nt,null),e(nt,uk),e(nt,Ol),e(Ol,_k),e(nt,wk),b(zr,nt,null),wc=!0},p(o,[f]){const qr={};f&2&&(qr.$$scope={dirty:f,ctx:o}),Uo.$set(qr);const Al={};f&2&&(Al.$$scope={dirty:f,ctx:o}),Go.$set(Al);const Nl={};f&2&&(Nl.$$scope={dirty:f,ctx:o}),Jo.$set(Nl);const Il={};f&2&&(Il.$$scope={dirty:f,ctx:o}),Yo.$set(Il);const Cr={};f&2&&(Cr.$$scope={dirty:f,ctx:o}),en.$set(Cr);const Sl={};f&2&&(Sl.$$scope={dirty:f,ctx:o}),on.$set(Sl);const Dl={};f&2&&(Dl.$$scope={dirty:f,ctx:o}),sn.$set(Dl);const Bl={};f&2&&(Bl.$$scope={dirty:f,ctx:o}),rn.$set(Bl);const Pr={};f&2&&(Pr.$$scope={dirty:f,ctx:o}),ln.$set(Pr);const Wl={};f&2&&(Wl.$$scope={dirty:f,ctx:o}),dn.$set(Wl);const Ql={};f&2&&(Ql.$$scope={dirty:f,ctx:o}),hn.$set(Ql);const Hl={};f&2&&(Hl.$$scope={dirty:f,ctx:o}),mn.$set(Hl);const Rl={};f&2&&(Rl.$$scope={dirty:f,ctx:o}),pn.$set(Rl);const Ul={};f&2&&(Ul.$$scope={dirty:f,ctx:o}),gn.$set(Ul);const Vl={};f&2&&(Vl.$$scope={dirty:f,ctx:o}),_n.$set(Vl);const gt={};f&2&&(gt.$$scope={dirty:f,ctx:o}),wn.$set(gt);const Gl={};f&2&&(Gl.$$scope={dirty:f,ctx:o}),vn.$set(Gl);const Kl={};f&2&&(Kl.$$scope={dirty:f,ctx:o}),bn.$set(Kl)},i(o){wc||(T(w.$$.fragment,o),T(ee.$$.fragment,o),T(oe.$$.fragment,o),T(yn.$$.fragment,o),T(Ln.$$.fragment,o),T($n.$$.fragment,o),T(Fn.$$.fragment,o),T(Mn.$$.fragment,o),T(En.$$.fragment,o),T(zn.$$.fragment,o),T(qn.$$.fragment,o),T(Cn.$$.fragment,o),T(jn.$$.fragment,o),T(On.$$.fragment,o),T(An.$$.fragment,o),T(Nn.$$.fragment,o),T(In.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(Bn.$$.fragment,o),T(Wn.$$.fragment,o),T(Qn.$$.fragment,o),T(Hn.$$.fragment,o),T(Rn.$$.fragment,o),T(Un.$$.fragment,o),T(Vn.$$.fragment,o),T(Gn.$$.fragment,o),T(Kn.$$.fragment,o),T(Jn.$$.fragment,o),T(os.$$.fragment,o),T(Uo.$$.fragment,o),T(ns.$$.fragment,o),T(ss.$$.fragment,o),T(rs.$$.fragment,o),T(cs.$$.fragment,o),T(Go.$$.fragment,o),T(hs.$$.fragment,o),T(ms.$$.fragment,o),T(fs.$$.fragment,o),T(_s.$$.fragment,o),T(Jo.$$.fragment,o),T(ws.$$.fragment,o),T(ks.$$.fragment,o),T(vs.$$.fragment,o),T(bs.$$.fragment,o),T($s.$$.fragment,o),T(Yo.$$.fragment,o),T(Fs.$$.fragment,o),T(xs.$$.fragment,o),T(Ms.$$.fragment,o),T(Cs.$$.fragment,o),T(en.$$.fragment,o),T(Ps.$$.fragment,o),T(js.$$.fragment,o),T(Os.$$.fragment,o),T(Ss.$$.fragment,o),T(on.$$.fragment,o),T(Ds.$$.fragment,o),T(Bs.$$.fragment,o),T(Ws.$$.fragment,o),T(sn.$$.fragment,o),T(Gs.$$.fragment,o),T(rn.$$.fragment,o),T(Ks.$$.fragment,o),T(Js.$$.fragment,o),T(ln.$$.fragment,o),T(tr.$$.fragment,o),T(dn.$$.fragment,o),T(or.$$.fragment,o),T(nr.$$.fragment,o),T(sr.$$.fragment,o),T(hn.$$.fragment,o),T(lr.$$.fragment,o),T(mn.$$.fragment,o),T(dr.$$.fragment,o),T(cr.$$.fragment,o),T(hr.$$.fragment,o),T(pn.$$.fragment,o),T(gr.$$.fragment,o),T(gn.$$.fragment,o),T(ur.$$.fragment,o),T(_r.$$.fragment,o),T(wr.$$.fragment,o),T(_n.$$.fragment,o),T(Tr.$$.fragment,o),T(wn.$$.fragment,o),T(yr.$$.fragment,o),T(Lr.$$.fragment,o),T($r.$$.fragment,o),T(vn.$$.fragment,o),T(Er.$$.fragment,o),T(bn.$$.fragment,o),T(zr.$$.fragment,o),wc=!0)},o(o){y(w.$$.fragment,o),y(ee.$$.fragment,o),y(oe.$$.fragment,o),y(yn.$$.fragment,o),y(Ln.$$.fragment,o),y($n.$$.fragment,o),y(Fn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(qn.$$.fragment,o),y(Cn.$$.fragment,o),y(jn.$$.fragment,o),y(On.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Dn.$$.fragment,o),y(Bn.$$.fragment,o),y(Wn.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(Rn.$$.fragment,o),y(Un.$$.fragment,o),y(Vn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(os.$$.fragment,o),y(Uo.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(cs.$$.fragment,o),y(Go.$$.fragment,o),y(hs.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(_s.$$.fragment,o),y(Jo.$$.fragment,o),y(ws.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(bs.$$.fragment,o),y($s.$$.fragment,o),y(Yo.$$.fragment,o),y(Fs.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(en.$$.fragment,o),y(Ps.$$.fragment,o),y(js.$$.fragment,o),y(Os.$$.fragment,o),y(Ss.$$.fragment,o),y(on.$$.fragment,o),y(Ds.$$.fragment,o),y(Bs.$$.fragment,o),y(Ws.$$.fragment,o),y(sn.$$.fragment,o),y(Gs.$$.fragment,o),y(rn.$$.fragment,o),y(Ks.$$.fragment,o),y(Js.$$.fragment,o),y(ln.$$.fragment,o),y(tr.$$.fragment,o),y(dn.$$.fragment,o),y(or.$$.fragment,o),y(nr.$$.fragment,o),y(sr.$$.fragment,o),y(hn.$$.fragment,o),y(lr.$$.fragment,o),y(mn.$$.fragment,o),y(dr.$$.fragment,o),y(cr.$$.fragment,o),y(hr.$$.fragment,o),y(pn.$$.fragment,o),y(gr.$$.fragment,o),y(gn.$$.fragment,o),y(ur.$$.fragment,o),y(_r.$$.fragment,o),y(wr.$$.fragment,o),y(_n.$$.fragment,o),y(Tr.$$.fragment,o),y(wn.$$.fragment,o),y(yr.$$.fragment,o),y(Lr.$$.fragment,o),y($r.$$.fragment,o),y(vn.$$.fragment,o),y(Er.$$.fragment,o),y(bn.$$.fragment,o),y(zr.$$.fragment,o),wc=!1},d(o){t(p),o&&t(x),o&&t(g),L(w),o&&t(J),o&&t(E),L(ee),o&&t(le),o&&t(G),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(W),o&&t(re),o&&t(Te),o&&t(he),o&&t(ye),o&&t(N),L(oe),o&&t(Zl),o&&t(Le),o&&t(ld),o&&t(ut),o&&t(hd),o&&t(_t),o&&t(md),o&&t(Oo),o&&t(fd),o&&t(Ao),o&&t(pd),o&&t(Ve),o&&t(yd),o&&t(No),o&&t(Ld),o&&t(Ot),L(yn),o&&t($d),o&&t(At),o&&t(Fd),L(Ln,o),o&&t(xd),o&&t(Nt),L($n),o&&t(Md),o&&t(Oe),L(Fn),L(Mn),o&&t(Ed),o&&t(Bt),L(En),o&&t(zd),o&&t(ft),L(zn),o&&t(qd),o&&t(Wt),L(qn),o&&t(Cd),o&&t(pt),L(Cn),o&&t(Pd),o&&t(Qt),L(jn),o&&t(jd),o&&t(Ht),L(On),o&&t(Od),o&&t(Rt),L(An),o&&t(Ad),o&&t(Ut),L(Nn),o&&t(Nd),o&&t(Vt),L(In),o&&t(Id),o&&t(Gt),L(Sn),o&&t(Sd),o&&t(Kt),L(Dn),o&&t(Dd),o&&t(Jt),L(Bn),o&&t(Bd),o&&t(Xt),L(Wn),o&&t(Wd),o&&t(Yt),L(Qn),o&&t(Qd),o&&t(Zt),L(Hn),o&&t(Hd),o&&t(eo),L(Rn),o&&t(Rd),o&&t(to),L(Un),o&&t(Ud),o&&t(oo),L(Vn),o&&t(Vd),o&&t(no),L(Gn),o&&t(Gd),o&&t(so),L(Kn),o&&t(Kd),o&&t(qe),L(Jn),L(os),L(Uo),L(ns),o&&t(Jd),o&&t(io),L(ss),o&&t(Xd),o&&t(We),L(rs),L(cs),L(Go),L(hs),o&&t(Yd),o&&t(co),L(ms),o&&t(Zd),o&&t(Qe),L(fs),L(_s),L(Jo),L(ws),L(ks),o&&t(ec),o&&t(mo),L(vs),o&&t(tc),o&&t(He),L(bs),L($s),L(Yo),L(Fs),o&&t(oc),o&&t(po),L(xs),o&&t(nc),o&&t(Re),L(Ms),L(Cs),L(en),L(Ps),o&&t(sc),o&&t(uo),L(js),o&&t(rc),o&&t(Ue),L(Os),L(Ss),L(on),L(Ds),o&&t(ac),o&&t(ko),L(Bs),o&&t(ic),o&&t(Ee),L(Ws),L(sn),L(Gs),L(rn),o&&t(lc),o&&t(To),L(Ks),o&&t(dc),o&&t(Ae),L(Js),L(ln),L(tr),L(dn),L(or),o&&t(cc),o&&t(Lo),L(nr),o&&t(hc),o&&t(Ne),L(sr),L(hn),L(lr),L(mn),L(dr),o&&t(mc),o&&t(xo),L(cr),o&&t(fc),o&&t(Ie),L(hr),L(pn),L(gr),L(gn),L(ur),o&&t(pc),o&&t(Eo),L(_r),o&&t(gc),o&&t(Se),L(wr),L(_n),L(Tr),L(wn),L(yr),o&&t(uc),o&&t(qo),L(Lr),o&&t(_c),o&&t(De),L($r),L(vn),L(Er),L(bn),L(zr)}}}const m1={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function f1(Q,p,x){let{fw:g}=p;return Q.$$set=u=>{"fw"in u&&x(0,g=u.fw)},[g]}class k1 extends QT{constructor(p){super();HT(this,p,f1,h1,RT,{fw:0})}}export{k1 as default,m1 as metadata};
