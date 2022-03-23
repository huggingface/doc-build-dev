import{S as k_,i as T_,s as w_,e as a,k as l,w as k,t as n,M as v_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as w,q as v,o as y,B as D,v as y_}from"../../chunks/vendor-6b77c823.js";import{T as He}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as xe}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Pe}from"../../chunks/IconCopyLink-7a11ce68.js";function D_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function $_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function E_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function F_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function q_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function z_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),A=r(R,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function M_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function C_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),A=r(R,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function j_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function x_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),A=r(R,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function P_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function R_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),A=r(R,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function B_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function L_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),F=r(V,"LI",{});var Ee=i(F);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),A=r(R,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(S,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function A_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function I_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,A,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,L,ge,_e,O,K,be,x,ke,U,oe,p,E,V,$e,Ee,R,pe,Te,ye,P,Q,De,Fe,S,re,ve,we,ie,zl,Qs,Ml,Cl,Gs,jl,xl,Ho,Pl,Rl,Bl,Et,Ll,Ks,Al,Il,Vs,Ol,Sl,ui,Ft,ao,za,Uo,Nl,Ma,Wl,gi,ze,Qo,Hl,Ca,Ul,Ql,ft,Go,Gl,ja,Kl,Vl,Ko,xa,Jl,Xl,Pa,Yl,Zl,ro,Vo,ed,qt,td,Ra,od,nd,Ba,sd,ad,rd,tt,Jo,id,La,ld,dd,Xo,cd,zt,pd,Aa,hd,fd,Ia,md,ud,gd,Js,Yo,_i,Mt,io,Oa,Zo,_d,Sa,bd,bi,Xe,en,kd,tn,Td,Na,wd,vd,yd,mt,on,Dd,Wa,$d,Ed,nn,Ha,Fd,qd,Ua,zd,Md,ot,sn,Cd,Qa,jd,xd,an,Pd,Ct,Rd,Ga,Bd,Ld,Ka,Ad,Id,ki,jt,lo,Va,rn,Od,Ja,Sd,Ti,Ye,ln,Nd,dn,Wd,cn,Hd,Ud,Qd,pn,Gd,hn,Kd,Vd,Jd,Ue,fn,Xd,xt,Yd,Xs,Zd,ec,Xa,tc,oc,nc,co,sc,Ya,ac,rc,mn,wi,Pt,po,Za,un,ic,er,lc,vi,Rt,gn,dc,tr,cc,yi,Bt,ho,or,_n,pc,nr,hc,Di,Ze,bn,fc,Lt,mc,sr,uc,gc,kn,_c,bc,kc,Tn,Tc,wn,wc,vc,yc,Qe,vn,Dc,At,$c,Ys,Ec,Fc,ar,qc,zc,Mc,fo,Cc,rr,jc,xc,yn,$i,It,mo,ir,Dn,Pc,lr,Rc,Ei,Ie,$n,Bc,dr,Lc,Ac,En,Ic,Fn,Oc,Sc,Nc,qn,Wc,zn,Hc,Uc,Qc,qe,Mn,Gc,Ot,Kc,Zs,Vc,Jc,cr,Xc,Yc,Zc,uo,ep,pr,tp,op,Cn,np,hr,sp,ap,jn,Fi,St,go,fr,xn,rp,mr,ip,qi,Oe,Pn,lp,ur,dp,cp,Rn,pp,Bn,hp,fp,mp,Ln,up,An,gp,_p,bp,Ge,In,kp,Nt,Tp,ea,wp,vp,gr,yp,Dp,$p,_o,Ep,_r,Fp,qp,On,zi,Wt,bo,br,Sn,zp,kr,Mp,Mi,Se,Nn,Cp,Ht,jp,Tr,xp,Pp,wr,Rp,Bp,Lp,Wn,Ap,Hn,Ip,Op,Sp,Un,Np,Qn,Wp,Hp,Up,Ke,Gn,Qp,Ut,Gp,ta,Kp,Vp,vr,Jp,Xp,Yp,ko,Zp,yr,eh,th,Kn,Ci,Qt,To,Dr,Vn,oh,$r,nh,ji,Ne,Jn,sh,Xn,ah,Yn,rh,ih,lh,Zn,dh,es,ch,ph,hh,wo,fh,Ve,ts,mh,Gt,uh,oa,gh,_h,Er,bh,kh,Th,vo,wh,Fr,vh,yh,os,xi,Kt,yo,qr,ns,Dh,zr,$h,Pi,ht,ss,Eh,Mr,Fh,qh,nt,as,zh,Cr,Mh,Ch,rs,jh,jr,xh,Ph,Rh,et,Bh,xr,Lh,Ah,Pr,Ih,Oh,Rr,Sh,Nh,Br,Wh,Hh,Ri,Vt,Do,Lr,is,Uh,Ar,Qh,Bi,We,ls,Gh,Jt,Kh,Ir,Vh,Jh,ds,Xh,Yh,Zh,cs,ef,ps,tf,of,nf,$o,sf,Re,hs,af,Xt,rf,na,lf,df,Or,cf,pf,hf,Eo,ff,Sr,mf,uf,fs,gf,ms,Li,Yt,Fo,Nr,us,_f,Wr,bf,Ai,Me,gs,kf,Hr,Tf,wf,_s,vf,bs,yf,Df,$f,ks,Ef,Ts,Ff,qf,zf,qo,Mf,Be,ws,Cf,Zt,jf,sa,xf,Pf,Ur,Rf,Bf,Lf,zo,Af,Qr,If,Of,vs,Sf,ys,Ii,eo,Mo,Gr,Ds,Nf,Kr,Wf,Oi,Ce,$s,Hf,Vr,Uf,Qf,Es,Gf,Fs,Kf,Vf,Jf,qs,Xf,zs,Yf,Zf,em,Co,tm,Le,Ms,om,to,nm,aa,sm,am,Jr,rm,im,lm,jo,dm,Xr,cm,pm,Cs,hm,js,Si,oo,xo,Yr,xs,fm,Zr,mm,Ni,je,Ps,um,no,gm,ei,_m,bm,ti,km,Tm,wm,Rs,vm,Bs,ym,Dm,$m,Ls,Em,As,Fm,qm,zm,Po,Mm,Ae,Is,Cm,so,jm,ra,xm,Pm,oi,Rm,Bm,Lm,Ro,Am,ni,Im,Om,Os,Sm,Ss,Wi;return b=new Pe({}),ee=new Pe({}),P=new Pe({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Pe({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new xe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Pe({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),on=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new xe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Pe({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new He({props:{$$slots:{default:[D_]},$$scope:{ctx:G}}}),mn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Pe({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_n=new Pe({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new He({props:{$$slots:{default:[$_]},$$scope:{ctx:G}}}),yn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new Pe({}),$n=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new He({props:{$$slots:{default:[E_]},$$scope:{ctx:G}}}),Cn=new xe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),jn=new xe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),xn=new Pe({}),Pn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),In=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new He({props:{$$slots:{default:[F_]},$$scope:{ctx:G}}}),On=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sn=new Pe({}),Nn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new He({props:{$$slots:{default:[q_]},$$scope:{ctx:G}}}),Kn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

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
`}}),Vn=new Pe({}),Jn=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1074",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new He({props:{$$slots:{default:[z_]},$$scope:{ctx:G}}}),ts=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1080",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new He({props:{$$slots:{default:[M_]},$$scope:{ctx:G}}}),os=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ns=new Pe({}),ss=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L979"}}),as=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),is=new Pe({}),ls=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1123",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new He({props:{$$slots:{default:[C_]},$$scope:{ctx:G}}}),hs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1139",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Eo=new He({props:{$$slots:{default:[j_]},$$scope:{ctx:G}}}),fs=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),ms=new xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),us=new Pe({}),gs=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1207",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new He({props:{$$slots:{default:[x_]},$$scope:{ctx:G}}}),ws=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1225",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new He({props:{$$slots:{default:[P_]},$$scope:{ctx:G}}}),vs=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),ys=new xe({props:{code:`labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Ds=new Pe({}),$s=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1296",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new He({props:{$$slots:{default:[R_]},$$scope:{ctx:G}}}),Ms=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1308",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new He({props:{$$slots:{default:[B_]},$$scope:{ctx:G}}}),Cs=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base", from_pt=True)

inputs = tokenizer("HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf")

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word    
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word    </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),js=new xe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),xs=new Pe({}),Ps=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1375",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new He({props:{$$slots:{default:[L_]},$$scope:{ctx:G}}}),Is=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/deberta/modeling_tf_deberta.py#L1386",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new He({props:{$$slots:{default:[A_]},$$scope:{ctx:G}}}),Os=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base", from_pt=True)

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index: answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index: answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Ss=new xe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),A=a("span"),k(ee.$$.fragment),fe=l(),I=a("span"),me=n("Overview"),le=l(),N=a("p"),B=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=a("p"),H=n("The abstract from the paper is the following:"),ce=l(),ae=a("p"),C=a("em"),ue=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=l(),K=a("p"),be=n("This model was contributed by "),x=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=a("a"),$e=n("here"),Ee=n("."),R=l(),pe=a("h2"),Te=a("a"),ye=a("span"),k(P.$$.fragment),Q=l(),De=a("span"),Fe=n("DebertaConfig"),S=l(),re=a("div"),k(ve.$$.fragment),we=l(),ie=a("p"),zl=n("This is the configuration class to store the configuration of a "),Qs=a("a"),Ml=n("DebertaModel"),Cl=n(" or a "),Gs=a("a"),jl=n("TFDebertaModel"),xl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),Pl=n("microsoft/deberta-base"),Rl=n(" architecture."),Bl=l(),Et=a("p"),Ll=n("Configuration objects inherit from "),Ks=a("a"),Al=n("PretrainedConfig"),Il=n(` and can be used to control the model outputs. Read the
documentation from `),Vs=a("a"),Ol=n("PretrainedConfig"),Sl=n(" for more information."),ui=l(),Ft=a("h2"),ao=a("a"),za=a("span"),k(Uo.$$.fragment),Nl=l(),Ma=a("span"),Wl=n("DebertaTokenizer"),gi=l(),ze=a("div"),k(Qo.$$.fragment),Hl=l(),Ca=a("p"),Ul=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Ql=l(),ft=a("div"),k(Go.$$.fragment),Gl=l(),ja=a("p"),Kl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vl=l(),Ko=a("ul"),xa=a("li"),Jl=n("single sequence: [CLS] X [SEP]"),Xl=l(),Pa=a("li"),Yl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Zl=l(),ro=a("div"),k(Vo.$$.fragment),ed=l(),qt=a("p"),td=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=a("code"),od=n("prepare_for_model"),nd=n(" or "),Ba=a("code"),sd=n("encode_plus"),ad=n(" methods."),rd=l(),tt=a("div"),k(Jo.$$.fragment),id=l(),La=a("p"),ld=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),dd=l(),k(Xo.$$.fragment),cd=l(),zt=a("p"),pd=n("If "),Aa=a("code"),hd=n("token_ids_1"),fd=n(" is "),Ia=a("code"),md=n("None"),ud=n(", this method only returns the first portion of the mask (0s)."),gd=l(),Js=a("div"),k(Yo.$$.fragment),_i=l(),Mt=a("h2"),io=a("a"),Oa=a("span"),k(Zo.$$.fragment),_d=l(),Sa=a("span"),bd=n("DebertaTokenizerFast"),bi=l(),Xe=a("div"),k(en.$$.fragment),kd=l(),tn=a("p"),Td=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Na=a("em"),wd=n("tokenizers"),vd=n(" library."),yd=l(),mt=a("div"),k(on.$$.fragment),Dd=l(),Wa=a("p"),$d=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ed=l(),nn=a("ul"),Ha=a("li"),Fd=n("single sequence: [CLS] X [SEP]"),qd=l(),Ua=a("li"),zd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Md=l(),ot=a("div"),k(sn.$$.fragment),Cd=l(),Qa=a("p"),jd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),xd=l(),k(an.$$.fragment),Pd=l(),Ct=a("p"),Rd=n("If "),Ga=a("code"),Bd=n("token_ids_1"),Ld=n(" is "),Ka=a("code"),Ad=n("None"),Id=n(", this method only returns the first portion of the mask (0s)."),ki=l(),jt=a("h2"),lo=a("a"),Va=a("span"),k(rn.$$.fragment),Od=l(),Ja=a("span"),Sd=n("DebertaModel"),Ti=l(),Ye=a("div"),k(ln.$$.fragment),Nd=l(),dn=a("p"),Wd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a("a"),Hd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ud=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qd=l(),pn=a("p"),Gd=n("This model is also a PyTorch "),hn=a("a"),Kd=n("torch.nn.Module"),Vd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jd=l(),Ue=a("div"),k(fn.$$.fragment),Xd=l(),xt=a("p"),Yd=n("The "),Xs=a("a"),Zd=n("DebertaModel"),ec=n(" forward method, overrides the "),Xa=a("code"),tc=n("__call__"),oc=n(" special method."),nc=l(),k(co.$$.fragment),sc=l(),Ya=a("p"),ac=n("Example:"),rc=l(),k(mn.$$.fragment),wi=l(),Pt=a("h2"),po=a("a"),Za=a("span"),k(un.$$.fragment),ic=l(),er=a("span"),lc=n("DebertaPreTrainedModel"),vi=l(),Rt=a("div"),k(gn.$$.fragment),dc=l(),tr=a("p"),cc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),yi=l(),Bt=a("h2"),ho=a("a"),or=a("span"),k(_n.$$.fragment),pc=l(),nr=a("span"),hc=n("DebertaForMaskedLM"),Di=l(),Ze=a("div"),k(bn.$$.fragment),fc=l(),Lt=a("p"),mc=n("DeBERTa Model with a "),sr=a("code"),uc=n("language modeling"),gc=n(` head on top.
The DeBERTa model was proposed in `),kn=a("a"),_c=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kc=l(),Tn=a("p"),Tc=n("This model is also a PyTorch "),wn=a("a"),wc=n("torch.nn.Module"),vc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),yc=l(),Qe=a("div"),k(vn.$$.fragment),Dc=l(),At=a("p"),$c=n("The "),Ys=a("a"),Ec=n("DebertaForMaskedLM"),Fc=n(" forward method, overrides the "),ar=a("code"),qc=n("__call__"),zc=n(" special method."),Mc=l(),k(fo.$$.fragment),Cc=l(),rr=a("p"),jc=n("Example:"),xc=l(),k(yn.$$.fragment),$i=l(),It=a("h2"),mo=a("a"),ir=a("span"),k(Dn.$$.fragment),Pc=l(),lr=a("span"),Rc=n("DebertaForSequenceClassification"),Ei=l(),Ie=a("div"),k($n.$$.fragment),Bc=l(),dr=a("p"),Lc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ac=l(),En=a("p"),Ic=n("The DeBERTa model was proposed in "),Fn=a("a"),Oc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nc=l(),qn=a("p"),Wc=n("This model is also a PyTorch "),zn=a("a"),Hc=n("torch.nn.Module"),Uc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Qc=l(),qe=a("div"),k(Mn.$$.fragment),Gc=l(),Ot=a("p"),Kc=n("The "),Zs=a("a"),Vc=n("DebertaForSequenceClassification"),Jc=n(" forward method, overrides the "),cr=a("code"),Xc=n("__call__"),Yc=n(" special method."),Zc=l(),k(uo.$$.fragment),ep=l(),pr=a("p"),tp=n("Example of single-label classification:"),op=l(),k(Cn.$$.fragment),np=l(),hr=a("p"),sp=n("Example of multi-label classification:"),ap=l(),k(jn.$$.fragment),Fi=l(),St=a("h2"),go=a("a"),fr=a("span"),k(xn.$$.fragment),rp=l(),mr=a("span"),ip=n("DebertaForTokenClassification"),qi=l(),Oe=a("div"),k(Pn.$$.fragment),lp=l(),ur=a("p"),dp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cp=l(),Rn=a("p"),pp=n("The DeBERTa model was proposed in "),Bn=a("a"),hp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mp=l(),Ln=a("p"),up=n("This model is also a PyTorch "),An=a("a"),gp=n("torch.nn.Module"),_p=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),bp=l(),Ge=a("div"),k(In.$$.fragment),kp=l(),Nt=a("p"),Tp=n("The "),ea=a("a"),wp=n("DebertaForTokenClassification"),vp=n(" forward method, overrides the "),gr=a("code"),yp=n("__call__"),Dp=n(" special method."),$p=l(),k(_o.$$.fragment),Ep=l(),_r=a("p"),Fp=n("Example:"),qp=l(),k(On.$$.fragment),zi=l(),Wt=a("h2"),bo=a("a"),br=a("span"),k(Sn.$$.fragment),zp=l(),kr=a("span"),Mp=n("DebertaForQuestionAnswering"),Mi=l(),Se=a("div"),k(Nn.$$.fragment),Cp=l(),Ht=a("p"),jp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=a("code"),xp=n("span start logits"),Pp=n(" and "),wr=a("code"),Rp=n("span end logits"),Bp=n(")."),Lp=l(),Wn=a("p"),Ap=n("The DeBERTa model was proposed in "),Hn=a("a"),Ip=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Op=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sp=l(),Un=a("p"),Np=n("This model is also a PyTorch "),Qn=a("a"),Wp=n("torch.nn.Module"),Hp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Up=l(),Ke=a("div"),k(Gn.$$.fragment),Qp=l(),Ut=a("p"),Gp=n("The "),ta=a("a"),Kp=n("DebertaForQuestionAnswering"),Vp=n(" forward method, overrides the "),vr=a("code"),Jp=n("__call__"),Xp=n(" special method."),Yp=l(),k(ko.$$.fragment),Zp=l(),yr=a("p"),eh=n("Example:"),th=l(),k(Kn.$$.fragment),Ci=l(),Qt=a("h2"),To=a("a"),Dr=a("span"),k(Vn.$$.fragment),oh=l(),$r=a("span"),nh=n("TFDebertaModel"),ji=l(),Ne=a("div"),k(Jn.$$.fragment),sh=l(),Xn=a("p"),ah=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=a("a"),rh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ih=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),lh=l(),Zn=a("p"),dh=n("This model is also a "),es=a("a"),ch=n("tf.keras.Model"),ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hh=l(),k(wo.$$.fragment),fh=l(),Ve=a("div"),k(ts.$$.fragment),mh=l(),Gt=a("p"),uh=n("The "),oa=a("a"),gh=n("TFDebertaModel"),_h=n(" forward method, overrides the "),Er=a("code"),bh=n("__call__"),kh=n(" special method."),Th=l(),k(vo.$$.fragment),wh=l(),Fr=a("p"),vh=n("Example:"),yh=l(),k(os.$$.fragment),xi=l(),Kt=a("h2"),yo=a("a"),qr=a("span"),k(ns.$$.fragment),Dh=l(),zr=a("span"),$h=n("TFDebertaPreTrainedModel"),Pi=l(),ht=a("div"),k(ss.$$.fragment),Eh=l(),Mr=a("p"),Fh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),qh=l(),nt=a("div"),k(as.$$.fragment),zh=l(),Cr=a("p"),Mh=n("Calls the model on new inputs and returns the outputs as tensors."),Ch=l(),rs=a("p"),jh=n("In this case "),jr=a("code"),xh=n("call()"),Ph=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Rh=l(),et=a("p"),Bh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),xr=a("code"),Lh=n("tf.keras.Model"),Ah=n(`.
To call a model on an input, always use the `),Pr=a("code"),Ih=n("__call__()"),Oh=n(` method,
i.e. `),Rr=a("code"),Sh=n("model(inputs)"),Nh=n(", which relies on the underlying "),Br=a("code"),Wh=n("call()"),Hh=n(" method."),Ri=l(),Vt=a("h2"),Do=a("a"),Lr=a("span"),k(is.$$.fragment),Uh=l(),Ar=a("span"),Qh=n("TFDebertaForMaskedLM"),Bi=l(),We=a("div"),k(ls.$$.fragment),Gh=l(),Jt=a("p"),Kh=n("DeBERTa Model with a "),Ir=a("code"),Vh=n("language modeling"),Jh=n(` head on top.
The DeBERTa model was proposed in `),ds=a("a"),Xh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Yh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zh=l(),cs=a("p"),ef=n("This model is also a "),ps=a("a"),tf=n("tf.keras.Model"),of=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nf=l(),k($o.$$.fragment),sf=l(),Re=a("div"),k(hs.$$.fragment),af=l(),Xt=a("p"),rf=n("The "),na=a("a"),lf=n("TFDebertaForMaskedLM"),df=n(" forward method, overrides the "),Or=a("code"),cf=n("__call__"),pf=n(" special method."),hf=l(),k(Eo.$$.fragment),ff=l(),Sr=a("p"),mf=n("Example:"),uf=l(),k(fs.$$.fragment),gf=l(),k(ms.$$.fragment),Li=l(),Yt=a("h2"),Fo=a("a"),Nr=a("span"),k(us.$$.fragment),_f=l(),Wr=a("span"),bf=n("TFDebertaForSequenceClassification"),Ai=l(),Me=a("div"),k(gs.$$.fragment),kf=l(),Hr=a("p"),Tf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wf=l(),_s=a("p"),vf=n("The DeBERTa model was proposed in "),bs=a("a"),yf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Df=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$f=l(),ks=a("p"),Ef=n("This model is also a "),Ts=a("a"),Ff=n("tf.keras.Model"),qf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf=l(),k(qo.$$.fragment),Mf=l(),Be=a("div"),k(ws.$$.fragment),Cf=l(),Zt=a("p"),jf=n("The "),sa=a("a"),xf=n("TFDebertaForSequenceClassification"),Pf=n(" forward method, overrides the "),Ur=a("code"),Rf=n("__call__"),Bf=n(" special method."),Lf=l(),k(zo.$$.fragment),Af=l(),Qr=a("p"),If=n("Example:"),Of=l(),k(vs.$$.fragment),Sf=l(),k(ys.$$.fragment),Ii=l(),eo=a("h2"),Mo=a("a"),Gr=a("span"),k(Ds.$$.fragment),Nf=l(),Kr=a("span"),Wf=n("TFDebertaForTokenClassification"),Oi=l(),Ce=a("div"),k($s.$$.fragment),Hf=l(),Vr=a("p"),Uf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qf=l(),Es=a("p"),Gf=n("The DeBERTa model was proposed in "),Fs=a("a"),Kf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jf=l(),qs=a("p"),Xf=n("This model is also a "),zs=a("a"),Yf=n("tf.keras.Model"),Zf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),em=l(),k(Co.$$.fragment),tm=l(),Le=a("div"),k(Ms.$$.fragment),om=l(),to=a("p"),nm=n("The "),aa=a("a"),sm=n("TFDebertaForTokenClassification"),am=n(" forward method, overrides the "),Jr=a("code"),rm=n("__call__"),im=n(" special method."),lm=l(),k(jo.$$.fragment),dm=l(),Xr=a("p"),cm=n("Example:"),pm=l(),k(Cs.$$.fragment),hm=l(),k(js.$$.fragment),Si=l(),oo=a("h2"),xo=a("a"),Yr=a("span"),k(xs.$$.fragment),fm=l(),Zr=a("span"),mm=n("TFDebertaForQuestionAnswering"),Ni=l(),je=a("div"),k(Ps.$$.fragment),um=l(),no=a("p"),gm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=a("code"),_m=n("span start logits"),bm=n(" and "),ti=a("code"),km=n("span end logits"),Tm=n(")."),wm=l(),Rs=a("p"),vm=n("The DeBERTa model was proposed in "),Bs=a("a"),ym=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Dm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$m=l(),Ls=a("p"),Em=n("This model is also a "),As=a("a"),Fm=n("tf.keras.Model"),qm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zm=l(),k(Po.$$.fragment),Mm=l(),Ae=a("div"),k(Is.$$.fragment),Cm=l(),so=a("p"),jm=n("The "),ra=a("a"),xm=n("TFDebertaForQuestionAnswering"),Pm=n(" forward method, overrides the "),oi=a("code"),Rm=n("__call__"),Bm=n(" special method."),Lm=l(),k(Ro.$$.fragment),Am=l(),ni=a("p"),Im=n("Example:"),Om=l(),k(Os.$$.fragment),Sm=l(),k(Ss.$$.fragment),this.h()},l(o){const m=v_('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),q=d(o),u=r(o,"H1",{class:!0});var Ns=i(u);g=r(Ns,"A",{id:!0,class:!0,href:!0});var si=i(g);$=r(si,"SPAN",{});var ai=i($);T(b.$$.fragment,ai),ai.forEach(t),si.forEach(t),_=d(Ns),F=r(Ns,"SPAN",{});var ri=i(F);he=s(ri,"DeBERTa"),ri.forEach(t),Ns.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var Ws=i(z);Y=r(Ws,"A",{id:!0,class:!0,href:!0});var ii=i(Y);A=r(ii,"SPAN",{});var li=i(A);T(ee.$$.fragment,li),li.forEach(t),ii.forEach(t),fe=d(Ws),I=r(Ws,"SPAN",{});var di=i(I);me=s(di,"Overview"),di.forEach(t),Ws.forEach(t),le=d(o),N=r(o,"P",{});var Hs=i(N);B=s(Hs,"The DeBERTa model was proposed in "),te=r(Hs,"A",{href:!0,rel:!0});var ci=i(te);Z=s(ci,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ci.forEach(t),M=s(Hs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Hs.forEach(t),j=d(o),ne=r(o,"P",{});var pi=i(ne);W=s(pi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),pi.forEach(t),de=d(o),se=r(o,"P",{});var hi=i(se);H=s(hi,"The abstract from the paper is the following:"),hi.forEach(t),ce=d(o),ae=r(o,"P",{});var fi=i(ae);C=r(fi,"EM",{});var Us=i(C);ue=s(Us,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r(Us,"A",{href:!0,rel:!0});var mi=i(L);ge=s(mi,"https://github.com/microsoft/DeBERTa"),mi.forEach(t),_e=s(Us,"."),Us.forEach(t),fi.forEach(t),O=d(o),K=r(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),x=r(Bo,"A",{href:!0,rel:!0});var Nm=i(x);ke=s(Nm,"DeBERTa"),Nm.forEach(t),U=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=r(Bo,"A",{href:!0,rel:!0});var Wm=i(oe);p=s(Wm,"kamalkraj"),Wm.forEach(t),E=s(Bo," . The original code can be found "),V=r(Bo,"A",{href:!0,rel:!0});var Hm=i(V);$e=s(Hm,"here"),Hm.forEach(t),Ee=s(Bo,"."),Bo.forEach(t),R=d(o),pe=r(o,"H2",{class:!0});var Hi=i(pe);Te=r(Hi,"A",{id:!0,class:!0,href:!0});var Um=i(Te);ye=r(Um,"SPAN",{});var Qm=i(ye);T(P.$$.fragment,Qm),Qm.forEach(t),Um.forEach(t),Q=d(Hi),De=r(Hi,"SPAN",{});var Gm=i(De);Fe=s(Gm,"DebertaConfig"),Gm.forEach(t),Hi.forEach(t),S=d(o),re=r(o,"DIV",{class:!0});var ia=i(re);T(ve.$$.fragment,ia),we=d(ia),ie=r(ia,"P",{});var Lo=i(ie);zl=s(Lo,"This is the configuration class to store the configuration of a "),Qs=r(Lo,"A",{href:!0});var Km=i(Qs);Ml=s(Km,"DebertaModel"),Km.forEach(t),Cl=s(Lo," or a "),Gs=r(Lo,"A",{href:!0});var Vm=i(Gs);jl=s(Vm,"TFDebertaModel"),Vm.forEach(t),xl=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Lo,"A",{href:!0,rel:!0});var Jm=i(Ho);Pl=s(Jm,"microsoft/deberta-base"),Jm.forEach(t),Rl=s(Lo," architecture."),Lo.forEach(t),Bl=d(ia),Et=r(ia,"P",{});var la=i(Et);Ll=s(la,"Configuration objects inherit from "),Ks=r(la,"A",{href:!0});var Xm=i(Ks);Al=s(Xm,"PretrainedConfig"),Xm.forEach(t),Il=s(la,` and can be used to control the model outputs. Read the
documentation from `),Vs=r(la,"A",{href:!0});var Ym=i(Vs);Ol=s(Ym,"PretrainedConfig"),Ym.forEach(t),Sl=s(la," for more information."),la.forEach(t),ia.forEach(t),ui=d(o),Ft=r(o,"H2",{class:!0});var Ui=i(Ft);ao=r(Ui,"A",{id:!0,class:!0,href:!0});var Zm=i(ao);za=r(Zm,"SPAN",{});var eu=i(za);T(Uo.$$.fragment,eu),eu.forEach(t),Zm.forEach(t),Nl=d(Ui),Ma=r(Ui,"SPAN",{});var tu=i(Ma);Wl=s(tu,"DebertaTokenizer"),tu.forEach(t),Ui.forEach(t),gi=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);T(Qo.$$.fragment,st),Hl=d(st),Ca=r(st,"P",{});var ou=i(Ca);Ul=s(ou,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),ou.forEach(t),Ql=d(st),ft=r(st,"DIV",{class:!0});var da=i(ft);T(Go.$$.fragment,da),Gl=d(da),ja=r(da,"P",{});var nu=i(ja);Kl=s(nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),nu.forEach(t),Vl=d(da),Ko=r(da,"UL",{});var Qi=i(Ko);xa=r(Qi,"LI",{});var su=i(xa);Jl=s(su,"single sequence: [CLS] X [SEP]"),su.forEach(t),Xl=d(Qi),Pa=r(Qi,"LI",{});var au=i(Pa);Yl=s(au,"pair of sequences: [CLS] A [SEP] B [SEP]"),au.forEach(t),Qi.forEach(t),da.forEach(t),Zl=d(st),ro=r(st,"DIV",{class:!0});var Gi=i(ro);T(Vo.$$.fragment,Gi),ed=d(Gi),qt=r(Gi,"P",{});var ca=i(qt);td=s(ca,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=r(ca,"CODE",{});var ru=i(Ra);od=s(ru,"prepare_for_model"),ru.forEach(t),nd=s(ca," or "),Ba=r(ca,"CODE",{});var iu=i(Ba);sd=s(iu,"encode_plus"),iu.forEach(t),ad=s(ca," methods."),ca.forEach(t),Gi.forEach(t),rd=d(st),tt=r(st,"DIV",{class:!0});var Ao=i(tt);T(Jo.$$.fragment,Ao),id=d(Ao),La=r(Ao,"P",{});var lu=i(La);ld=s(lu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),lu.forEach(t),dd=d(Ao),T(Xo.$$.fragment,Ao),cd=d(Ao),zt=r(Ao,"P",{});var pa=i(zt);pd=s(pa,"If "),Aa=r(pa,"CODE",{});var du=i(Aa);hd=s(du,"token_ids_1"),du.forEach(t),fd=s(pa," is "),Ia=r(pa,"CODE",{});var cu=i(Ia);md=s(cu,"None"),cu.forEach(t),ud=s(pa,", this method only returns the first portion of the mask (0s)."),pa.forEach(t),Ao.forEach(t),gd=d(st),Js=r(st,"DIV",{class:!0});var pu=i(Js);T(Yo.$$.fragment,pu),pu.forEach(t),st.forEach(t),_i=d(o),Mt=r(o,"H2",{class:!0});var Ki=i(Mt);io=r(Ki,"A",{id:!0,class:!0,href:!0});var hu=i(io);Oa=r(hu,"SPAN",{});var fu=i(Oa);T(Zo.$$.fragment,fu),fu.forEach(t),hu.forEach(t),_d=d(Ki),Sa=r(Ki,"SPAN",{});var mu=i(Sa);bd=s(mu,"DebertaTokenizerFast"),mu.forEach(t),Ki.forEach(t),bi=d(o),Xe=r(o,"DIV",{class:!0});var Io=i(Xe);T(en.$$.fragment,Io),kd=d(Io),tn=r(Io,"P",{});var Vi=i(tn);Td=s(Vi,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Na=r(Vi,"EM",{});var uu=i(Na);wd=s(uu,"tokenizers"),uu.forEach(t),vd=s(Vi," library."),Vi.forEach(t),yd=d(Io),mt=r(Io,"DIV",{class:!0});var ha=i(mt);T(on.$$.fragment,ha),Dd=d(ha),Wa=r(ha,"P",{});var gu=i(Wa);$d=s(gu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),gu.forEach(t),Ed=d(ha),nn=r(ha,"UL",{});var Ji=i(nn);Ha=r(Ji,"LI",{});var _u=i(Ha);Fd=s(_u,"single sequence: [CLS] X [SEP]"),_u.forEach(t),qd=d(Ji),Ua=r(Ji,"LI",{});var bu=i(Ua);zd=s(bu,"pair of sequences: [CLS] A [SEP] B [SEP]"),bu.forEach(t),Ji.forEach(t),ha.forEach(t),Md=d(Io),ot=r(Io,"DIV",{class:!0});var Oo=i(ot);T(sn.$$.fragment,Oo),Cd=d(Oo),Qa=r(Oo,"P",{});var ku=i(Qa);jd=s(ku,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),ku.forEach(t),xd=d(Oo),T(an.$$.fragment,Oo),Pd=d(Oo),Ct=r(Oo,"P",{});var fa=i(Ct);Rd=s(fa,"If "),Ga=r(fa,"CODE",{});var Tu=i(Ga);Bd=s(Tu,"token_ids_1"),Tu.forEach(t),Ld=s(fa," is "),Ka=r(fa,"CODE",{});var wu=i(Ka);Ad=s(wu,"None"),wu.forEach(t),Id=s(fa,", this method only returns the first portion of the mask (0s)."),fa.forEach(t),Oo.forEach(t),Io.forEach(t),ki=d(o),jt=r(o,"H2",{class:!0});var Xi=i(jt);lo=r(Xi,"A",{id:!0,class:!0,href:!0});var vu=i(lo);Va=r(vu,"SPAN",{});var yu=i(Va);T(rn.$$.fragment,yu),yu.forEach(t),vu.forEach(t),Od=d(Xi),Ja=r(Xi,"SPAN",{});var Du=i(Ja);Sd=s(Du,"DebertaModel"),Du.forEach(t),Xi.forEach(t),Ti=d(o),Ye=r(o,"DIV",{class:!0});var So=i(Ye);T(ln.$$.fragment,So),Nd=d(So),dn=r(So,"P",{});var Yi=i(dn);Wd=s(Yi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r(Yi,"A",{href:!0,rel:!0});var $u=i(cn);Hd=s($u,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$u.forEach(t),Ud=s(Yi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yi.forEach(t),Qd=d(So),pn=r(So,"P",{});var Zi=i(pn);Gd=s(Zi,"This model is also a PyTorch "),hn=r(Zi,"A",{href:!0,rel:!0});var Eu=i(hn);Kd=s(Eu,"torch.nn.Module"),Eu.forEach(t),Vd=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),Jd=d(So),Ue=r(So,"DIV",{class:!0});var ut=i(Ue);T(fn.$$.fragment,ut),Xd=d(ut),xt=r(ut,"P",{});var ma=i(xt);Yd=s(ma,"The "),Xs=r(ma,"A",{href:!0});var Fu=i(Xs);Zd=s(Fu,"DebertaModel"),Fu.forEach(t),ec=s(ma," forward method, overrides the "),Xa=r(ma,"CODE",{});var qu=i(Xa);tc=s(qu,"__call__"),qu.forEach(t),oc=s(ma," special method."),ma.forEach(t),nc=d(ut),T(co.$$.fragment,ut),sc=d(ut),Ya=r(ut,"P",{});var zu=i(Ya);ac=s(zu,"Example:"),zu.forEach(t),rc=d(ut),T(mn.$$.fragment,ut),ut.forEach(t),So.forEach(t),wi=d(o),Pt=r(o,"H2",{class:!0});var el=i(Pt);po=r(el,"A",{id:!0,class:!0,href:!0});var Mu=i(po);Za=r(Mu,"SPAN",{});var Cu=i(Za);T(un.$$.fragment,Cu),Cu.forEach(t),Mu.forEach(t),ic=d(el),er=r(el,"SPAN",{});var ju=i(er);lc=s(ju,"DebertaPreTrainedModel"),ju.forEach(t),el.forEach(t),vi=d(o),Rt=r(o,"DIV",{class:!0});var tl=i(Rt);T(gn.$$.fragment,tl),dc=d(tl),tr=r(tl,"P",{});var xu=i(tr);cc=s(xu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),xu.forEach(t),tl.forEach(t),yi=d(o),Bt=r(o,"H2",{class:!0});var ol=i(Bt);ho=r(ol,"A",{id:!0,class:!0,href:!0});var Pu=i(ho);or=r(Pu,"SPAN",{});var Ru=i(or);T(_n.$$.fragment,Ru),Ru.forEach(t),Pu.forEach(t),pc=d(ol),nr=r(ol,"SPAN",{});var Bu=i(nr);hc=s(Bu,"DebertaForMaskedLM"),Bu.forEach(t),ol.forEach(t),Di=d(o),Ze=r(o,"DIV",{class:!0});var No=i(Ze);T(bn.$$.fragment,No),fc=d(No),Lt=r(No,"P",{});var ua=i(Lt);mc=s(ua,"DeBERTa Model with a "),sr=r(ua,"CODE",{});var Lu=i(sr);uc=s(Lu,"language modeling"),Lu.forEach(t),gc=s(ua,` head on top.
The DeBERTa model was proposed in `),kn=r(ua,"A",{href:!0,rel:!0});var Au=i(kn);_c=s(Au,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Au.forEach(t),bc=s(ua,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ua.forEach(t),kc=d(No),Tn=r(No,"P",{});var nl=i(Tn);Tc=s(nl,"This model is also a PyTorch "),wn=r(nl,"A",{href:!0,rel:!0});var Iu=i(wn);wc=s(Iu,"torch.nn.Module"),Iu.forEach(t),vc=s(nl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),nl.forEach(t),yc=d(No),Qe=r(No,"DIV",{class:!0});var gt=i(Qe);T(vn.$$.fragment,gt),Dc=d(gt),At=r(gt,"P",{});var ga=i(At);$c=s(ga,"The "),Ys=r(ga,"A",{href:!0});var Ou=i(Ys);Ec=s(Ou,"DebertaForMaskedLM"),Ou.forEach(t),Fc=s(ga," forward method, overrides the "),ar=r(ga,"CODE",{});var Su=i(ar);qc=s(Su,"__call__"),Su.forEach(t),zc=s(ga," special method."),ga.forEach(t),Mc=d(gt),T(fo.$$.fragment,gt),Cc=d(gt),rr=r(gt,"P",{});var Nu=i(rr);jc=s(Nu,"Example:"),Nu.forEach(t),xc=d(gt),T(yn.$$.fragment,gt),gt.forEach(t),No.forEach(t),$i=d(o),It=r(o,"H2",{class:!0});var sl=i(It);mo=r(sl,"A",{id:!0,class:!0,href:!0});var Wu=i(mo);ir=r(Wu,"SPAN",{});var Hu=i(ir);T(Dn.$$.fragment,Hu),Hu.forEach(t),Wu.forEach(t),Pc=d(sl),lr=r(sl,"SPAN",{});var Uu=i(lr);Rc=s(Uu,"DebertaForSequenceClassification"),Uu.forEach(t),sl.forEach(t),Ei=d(o),Ie=r(o,"DIV",{class:!0});var _t=i(Ie);T($n.$$.fragment,_t),Bc=d(_t),dr=r(_t,"P",{});var Qu=i(dr);Lc=s(Qu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qu.forEach(t),Ac=d(_t),En=r(_t,"P",{});var al=i(En);Ic=s(al,"The DeBERTa model was proposed in "),Fn=r(al,"A",{href:!0,rel:!0});var Gu=i(Fn);Oc=s(Gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gu.forEach(t),Sc=s(al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),al.forEach(t),Nc=d(_t),qn=r(_t,"P",{});var rl=i(qn);Wc=s(rl,"This model is also a PyTorch "),zn=r(rl,"A",{href:!0,rel:!0});var Ku=i(zn);Hc=s(Ku,"torch.nn.Module"),Ku.forEach(t),Uc=s(rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rl.forEach(t),Qc=d(_t),qe=r(_t,"DIV",{class:!0});var Je=i(qe);T(Mn.$$.fragment,Je),Gc=d(Je),Ot=r(Je,"P",{});var _a=i(Ot);Kc=s(_a,"The "),Zs=r(_a,"A",{href:!0});var Vu=i(Zs);Vc=s(Vu,"DebertaForSequenceClassification"),Vu.forEach(t),Jc=s(_a," forward method, overrides the "),cr=r(_a,"CODE",{});var Ju=i(cr);Xc=s(Ju,"__call__"),Ju.forEach(t),Yc=s(_a," special method."),_a.forEach(t),Zc=d(Je),T(uo.$$.fragment,Je),ep=d(Je),pr=r(Je,"P",{});var Xu=i(pr);tp=s(Xu,"Example of single-label classification:"),Xu.forEach(t),op=d(Je),T(Cn.$$.fragment,Je),np=d(Je),hr=r(Je,"P",{});var Yu=i(hr);sp=s(Yu,"Example of multi-label classification:"),Yu.forEach(t),ap=d(Je),T(jn.$$.fragment,Je),Je.forEach(t),_t.forEach(t),Fi=d(o),St=r(o,"H2",{class:!0});var il=i(St);go=r(il,"A",{id:!0,class:!0,href:!0});var Zu=i(go);fr=r(Zu,"SPAN",{});var eg=i(fr);T(xn.$$.fragment,eg),eg.forEach(t),Zu.forEach(t),rp=d(il),mr=r(il,"SPAN",{});var tg=i(mr);ip=s(tg,"DebertaForTokenClassification"),tg.forEach(t),il.forEach(t),qi=d(o),Oe=r(o,"DIV",{class:!0});var bt=i(Oe);T(Pn.$$.fragment,bt),lp=d(bt),ur=r(bt,"P",{});var og=i(ur);dp=s(og,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),og.forEach(t),cp=d(bt),Rn=r(bt,"P",{});var ll=i(Rn);pp=s(ll,"The DeBERTa model was proposed in "),Bn=r(ll,"A",{href:!0,rel:!0});var ng=i(Bn);hp=s(ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ng.forEach(t),fp=s(ll,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ll.forEach(t),mp=d(bt),Ln=r(bt,"P",{});var dl=i(Ln);up=s(dl,"This model is also a PyTorch "),An=r(dl,"A",{href:!0,rel:!0});var sg=i(An);gp=s(sg,"torch.nn.Module"),sg.forEach(t),_p=s(dl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),dl.forEach(t),bp=d(bt),Ge=r(bt,"DIV",{class:!0});var kt=i(Ge);T(In.$$.fragment,kt),kp=d(kt),Nt=r(kt,"P",{});var ba=i(Nt);Tp=s(ba,"The "),ea=r(ba,"A",{href:!0});var ag=i(ea);wp=s(ag,"DebertaForTokenClassification"),ag.forEach(t),vp=s(ba," forward method, overrides the "),gr=r(ba,"CODE",{});var rg=i(gr);yp=s(rg,"__call__"),rg.forEach(t),Dp=s(ba," special method."),ba.forEach(t),$p=d(kt),T(_o.$$.fragment,kt),Ep=d(kt),_r=r(kt,"P",{});var ig=i(_r);Fp=s(ig,"Example:"),ig.forEach(t),qp=d(kt),T(On.$$.fragment,kt),kt.forEach(t),bt.forEach(t),zi=d(o),Wt=r(o,"H2",{class:!0});var cl=i(Wt);bo=r(cl,"A",{id:!0,class:!0,href:!0});var lg=i(bo);br=r(lg,"SPAN",{});var dg=i(br);T(Sn.$$.fragment,dg),dg.forEach(t),lg.forEach(t),zp=d(cl),kr=r(cl,"SPAN",{});var cg=i(kr);Mp=s(cg,"DebertaForQuestionAnswering"),cg.forEach(t),cl.forEach(t),Mi=d(o),Se=r(o,"DIV",{class:!0});var Tt=i(Se);T(Nn.$$.fragment,Tt),Cp=d(Tt),Ht=r(Tt,"P",{});var ka=i(Ht);jp=s(ka,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=r(ka,"CODE",{});var pg=i(Tr);xp=s(pg,"span start logits"),pg.forEach(t),Pp=s(ka," and "),wr=r(ka,"CODE",{});var hg=i(wr);Rp=s(hg,"span end logits"),hg.forEach(t),Bp=s(ka,")."),ka.forEach(t),Lp=d(Tt),Wn=r(Tt,"P",{});var pl=i(Wn);Ap=s(pl,"The DeBERTa model was proposed in "),Hn=r(pl,"A",{href:!0,rel:!0});var fg=i(Hn);Ip=s(fg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fg.forEach(t),Op=s(pl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pl.forEach(t),Sp=d(Tt),Un=r(Tt,"P",{});var hl=i(Un);Np=s(hl,"This model is also a PyTorch "),Qn=r(hl,"A",{href:!0,rel:!0});var mg=i(Qn);Wp=s(mg,"torch.nn.Module"),mg.forEach(t),Hp=s(hl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),hl.forEach(t),Up=d(Tt),Ke=r(Tt,"DIV",{class:!0});var wt=i(Ke);T(Gn.$$.fragment,wt),Qp=d(wt),Ut=r(wt,"P",{});var Ta=i(Ut);Gp=s(Ta,"The "),ta=r(Ta,"A",{href:!0});var ug=i(ta);Kp=s(ug,"DebertaForQuestionAnswering"),ug.forEach(t),Vp=s(Ta," forward method, overrides the "),vr=r(Ta,"CODE",{});var gg=i(vr);Jp=s(gg,"__call__"),gg.forEach(t),Xp=s(Ta," special method."),Ta.forEach(t),Yp=d(wt),T(ko.$$.fragment,wt),Zp=d(wt),yr=r(wt,"P",{});var _g=i(yr);eh=s(_g,"Example:"),_g.forEach(t),th=d(wt),T(Kn.$$.fragment,wt),wt.forEach(t),Tt.forEach(t),Ci=d(o),Qt=r(o,"H2",{class:!0});var fl=i(Qt);To=r(fl,"A",{id:!0,class:!0,href:!0});var bg=i(To);Dr=r(bg,"SPAN",{});var kg=i(Dr);T(Vn.$$.fragment,kg),kg.forEach(t),bg.forEach(t),oh=d(fl),$r=r(fl,"SPAN",{});var Tg=i($r);nh=s(Tg,"TFDebertaModel"),Tg.forEach(t),fl.forEach(t),ji=d(o),Ne=r(o,"DIV",{class:!0});var vt=i(Ne);T(Jn.$$.fragment,vt),sh=d(vt),Xn=r(vt,"P",{});var ml=i(Xn);ah=s(ml,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Yn=r(ml,"A",{href:!0,rel:!0});var wg=i(Yn);rh=s(wg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wg.forEach(t),ih=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),lh=d(vt),Zn=r(vt,"P",{});var ul=i(Zn);dh=s(ul,"This model is also a "),es=r(ul,"A",{href:!0,rel:!0});var vg=i(es);ch=s(vg,"tf.keras.Model"),vg.forEach(t),ph=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),hh=d(vt),T(wo.$$.fragment,vt),fh=d(vt),Ve=r(vt,"DIV",{class:!0});var yt=i(Ve);T(ts.$$.fragment,yt),mh=d(yt),Gt=r(yt,"P",{});var wa=i(Gt);uh=s(wa,"The "),oa=r(wa,"A",{href:!0});var yg=i(oa);gh=s(yg,"TFDebertaModel"),yg.forEach(t),_h=s(wa," forward method, overrides the "),Er=r(wa,"CODE",{});var Dg=i(Er);bh=s(Dg,"__call__"),Dg.forEach(t),kh=s(wa," special method."),wa.forEach(t),Th=d(yt),T(vo.$$.fragment,yt),wh=d(yt),Fr=r(yt,"P",{});var $g=i(Fr);vh=s($g,"Example:"),$g.forEach(t),yh=d(yt),T(os.$$.fragment,yt),yt.forEach(t),vt.forEach(t),xi=d(o),Kt=r(o,"H2",{class:!0});var gl=i(Kt);yo=r(gl,"A",{id:!0,class:!0,href:!0});var Eg=i(yo);qr=r(Eg,"SPAN",{});var Fg=i(qr);T(ns.$$.fragment,Fg),Fg.forEach(t),Eg.forEach(t),Dh=d(gl),zr=r(gl,"SPAN",{});var qg=i(zr);$h=s(qg,"TFDebertaPreTrainedModel"),qg.forEach(t),gl.forEach(t),Pi=d(o),ht=r(o,"DIV",{class:!0});var va=i(ht);T(ss.$$.fragment,va),Eh=d(va),Mr=r(va,"P",{});var zg=i(Mr);Fh=s(zg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zg.forEach(t),qh=d(va),nt=r(va,"DIV",{class:!0});var Wo=i(nt);T(as.$$.fragment,Wo),zh=d(Wo),Cr=r(Wo,"P",{});var Mg=i(Cr);Mh=s(Mg,"Calls the model on new inputs and returns the outputs as tensors."),Mg.forEach(t),Ch=d(Wo),rs=r(Wo,"P",{});var _l=i(rs);jh=s(_l,"In this case "),jr=r(_l,"CODE",{});var Cg=i(jr);xh=s(Cg,"call()"),Cg.forEach(t),Ph=s(_l,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),_l.forEach(t),Rh=d(Wo),et=r(Wo,"P",{});var Dt=i(et);Bh=s(Dt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),xr=r(Dt,"CODE",{});var jg=i(xr);Lh=s(jg,"tf.keras.Model"),jg.forEach(t),Ah=s(Dt,`.
To call a model on an input, always use the `),Pr=r(Dt,"CODE",{});var xg=i(Pr);Ih=s(xg,"__call__()"),xg.forEach(t),Oh=s(Dt,` method,
i.e. `),Rr=r(Dt,"CODE",{});var Pg=i(Rr);Sh=s(Pg,"model(inputs)"),Pg.forEach(t),Nh=s(Dt,", which relies on the underlying "),Br=r(Dt,"CODE",{});var Rg=i(Br);Wh=s(Rg,"call()"),Rg.forEach(t),Hh=s(Dt," method."),Dt.forEach(t),Wo.forEach(t),va.forEach(t),Ri=d(o),Vt=r(o,"H2",{class:!0});var bl=i(Vt);Do=r(bl,"A",{id:!0,class:!0,href:!0});var Bg=i(Do);Lr=r(Bg,"SPAN",{});var Lg=i(Lr);T(is.$$.fragment,Lg),Lg.forEach(t),Bg.forEach(t),Uh=d(bl),Ar=r(bl,"SPAN",{});var Ag=i(Ar);Qh=s(Ag,"TFDebertaForMaskedLM"),Ag.forEach(t),bl.forEach(t),Bi=d(o),We=r(o,"DIV",{class:!0});var $t=i(We);T(ls.$$.fragment,$t),Gh=d($t),Jt=r($t,"P",{});var ya=i(Jt);Kh=s(ya,"DeBERTa Model with a "),Ir=r(ya,"CODE",{});var Ig=i(Ir);Vh=s(Ig,"language modeling"),Ig.forEach(t),Jh=s(ya,` head on top.
The DeBERTa model was proposed in `),ds=r(ya,"A",{href:!0,rel:!0});var Og=i(ds);Xh=s(Og,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Og.forEach(t),Yh=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),Zh=d($t),cs=r($t,"P",{});var kl=i(cs);ef=s(kl,"This model is also a "),ps=r(kl,"A",{href:!0,rel:!0});var Sg=i(ps);tf=s(Sg,"tf.keras.Model"),Sg.forEach(t),of=s(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),nf=d($t),T($o.$$.fragment,$t),sf=d($t),Re=r($t,"DIV",{class:!0});var at=i(Re);T(hs.$$.fragment,at),af=d(at),Xt=r(at,"P",{});var Da=i(Xt);rf=s(Da,"The "),na=r(Da,"A",{href:!0});var Ng=i(na);lf=s(Ng,"TFDebertaForMaskedLM"),Ng.forEach(t),df=s(Da," forward method, overrides the "),Or=r(Da,"CODE",{});var Wg=i(Or);cf=s(Wg,"__call__"),Wg.forEach(t),pf=s(Da," special method."),Da.forEach(t),hf=d(at),T(Eo.$$.fragment,at),ff=d(at),Sr=r(at,"P",{});var Hg=i(Sr);mf=s(Hg,"Example:"),Hg.forEach(t),uf=d(at),T(fs.$$.fragment,at),gf=d(at),T(ms.$$.fragment,at),at.forEach(t),$t.forEach(t),Li=d(o),Yt=r(o,"H2",{class:!0});var Tl=i(Yt);Fo=r(Tl,"A",{id:!0,class:!0,href:!0});var Ug=i(Fo);Nr=r(Ug,"SPAN",{});var Qg=i(Nr);T(us.$$.fragment,Qg),Qg.forEach(t),Ug.forEach(t),_f=d(Tl),Wr=r(Tl,"SPAN",{});var Gg=i(Wr);bf=s(Gg,"TFDebertaForSequenceClassification"),Gg.forEach(t),Tl.forEach(t),Ai=d(o),Me=r(o,"DIV",{class:!0});var rt=i(Me);T(gs.$$.fragment,rt),kf=d(rt),Hr=r(rt,"P",{});var Kg=i(Hr);Tf=s(Kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kg.forEach(t),wf=d(rt),_s=r(rt,"P",{});var wl=i(_s);vf=s(wl,"The DeBERTa model was proposed in "),bs=r(wl,"A",{href:!0,rel:!0});var Vg=i(bs);yf=s(Vg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vg.forEach(t),Df=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),$f=d(rt),ks=r(rt,"P",{});var vl=i(ks);Ef=s(vl,"This model is also a "),Ts=r(vl,"A",{href:!0,rel:!0});var Jg=i(Ts);Ff=s(Jg,"tf.keras.Model"),Jg.forEach(t),qf=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),zf=d(rt),T(qo.$$.fragment,rt),Mf=d(rt),Be=r(rt,"DIV",{class:!0});var it=i(Be);T(ws.$$.fragment,it),Cf=d(it),Zt=r(it,"P",{});var $a=i(Zt);jf=s($a,"The "),sa=r($a,"A",{href:!0});var Xg=i(sa);xf=s(Xg,"TFDebertaForSequenceClassification"),Xg.forEach(t),Pf=s($a," forward method, overrides the "),Ur=r($a,"CODE",{});var Yg=i(Ur);Rf=s(Yg,"__call__"),Yg.forEach(t),Bf=s($a," special method."),$a.forEach(t),Lf=d(it),T(zo.$$.fragment,it),Af=d(it),Qr=r(it,"P",{});var Zg=i(Qr);If=s(Zg,"Example:"),Zg.forEach(t),Of=d(it),T(vs.$$.fragment,it),Sf=d(it),T(ys.$$.fragment,it),it.forEach(t),rt.forEach(t),Ii=d(o),eo=r(o,"H2",{class:!0});var yl=i(eo);Mo=r(yl,"A",{id:!0,class:!0,href:!0});var e_=i(Mo);Gr=r(e_,"SPAN",{});var t_=i(Gr);T(Ds.$$.fragment,t_),t_.forEach(t),e_.forEach(t),Nf=d(yl),Kr=r(yl,"SPAN",{});var o_=i(Kr);Wf=s(o_,"TFDebertaForTokenClassification"),o_.forEach(t),yl.forEach(t),Oi=d(o),Ce=r(o,"DIV",{class:!0});var lt=i(Ce);T($s.$$.fragment,lt),Hf=d(lt),Vr=r(lt,"P",{});var n_=i(Vr);Uf=s(n_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),n_.forEach(t),Qf=d(lt),Es=r(lt,"P",{});var Dl=i(Es);Gf=s(Dl,"The DeBERTa model was proposed in "),Fs=r(Dl,"A",{href:!0,rel:!0});var s_=i(Fs);Kf=s(s_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),s_.forEach(t),Vf=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),Jf=d(lt),qs=r(lt,"P",{});var $l=i(qs);Xf=s($l,"This model is also a "),zs=r($l,"A",{href:!0,rel:!0});var a_=i(zs);Yf=s(a_,"tf.keras.Model"),a_.forEach(t),Zf=s($l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$l.forEach(t),em=d(lt),T(Co.$$.fragment,lt),tm=d(lt),Le=r(lt,"DIV",{class:!0});var dt=i(Le);T(Ms.$$.fragment,dt),om=d(dt),to=r(dt,"P",{});var Ea=i(to);nm=s(Ea,"The "),aa=r(Ea,"A",{href:!0});var r_=i(aa);sm=s(r_,"TFDebertaForTokenClassification"),r_.forEach(t),am=s(Ea," forward method, overrides the "),Jr=r(Ea,"CODE",{});var i_=i(Jr);rm=s(i_,"__call__"),i_.forEach(t),im=s(Ea," special method."),Ea.forEach(t),lm=d(dt),T(jo.$$.fragment,dt),dm=d(dt),Xr=r(dt,"P",{});var l_=i(Xr);cm=s(l_,"Example:"),l_.forEach(t),pm=d(dt),T(Cs.$$.fragment,dt),hm=d(dt),T(js.$$.fragment,dt),dt.forEach(t),lt.forEach(t),Si=d(o),oo=r(o,"H2",{class:!0});var El=i(oo);xo=r(El,"A",{id:!0,class:!0,href:!0});var d_=i(xo);Yr=r(d_,"SPAN",{});var c_=i(Yr);T(xs.$$.fragment,c_),c_.forEach(t),d_.forEach(t),fm=d(El),Zr=r(El,"SPAN",{});var p_=i(Zr);mm=s(p_,"TFDebertaForQuestionAnswering"),p_.forEach(t),El.forEach(t),Ni=d(o),je=r(o,"DIV",{class:!0});var ct=i(je);T(Ps.$$.fragment,ct),um=d(ct),no=r(ct,"P",{});var Fa=i(no);gm=s(Fa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=r(Fa,"CODE",{});var h_=i(ei);_m=s(h_,"span start logits"),h_.forEach(t),bm=s(Fa," and "),ti=r(Fa,"CODE",{});var f_=i(ti);km=s(f_,"span end logits"),f_.forEach(t),Tm=s(Fa,")."),Fa.forEach(t),wm=d(ct),Rs=r(ct,"P",{});var Fl=i(Rs);vm=s(Fl,"The DeBERTa model was proposed in "),Bs=r(Fl,"A",{href:!0,rel:!0});var m_=i(Bs);ym=s(m_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),m_.forEach(t),Dm=s(Fl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fl.forEach(t),$m=d(ct),Ls=r(ct,"P",{});var ql=i(Ls);Em=s(ql,"This model is also a "),As=r(ql,"A",{href:!0,rel:!0});var u_=i(As);Fm=s(u_,"tf.keras.Model"),u_.forEach(t),qm=s(ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql.forEach(t),zm=d(ct),T(Po.$$.fragment,ct),Mm=d(ct),Ae=r(ct,"DIV",{class:!0});var pt=i(Ae);T(Is.$$.fragment,pt),Cm=d(pt),so=r(pt,"P",{});var qa=i(so);jm=s(qa,"The "),ra=r(qa,"A",{href:!0});var g_=i(ra);xm=s(g_,"TFDebertaForQuestionAnswering"),g_.forEach(t),Pm=s(qa," forward method, overrides the "),oi=r(qa,"CODE",{});var __=i(oi);Rm=s(__,"__call__"),__.forEach(t),Bm=s(qa," special method."),qa.forEach(t),Lm=d(pt),T(Ro.$$.fragment,pt),Am=d(pt),ni=r(pt,"P",{});var b_=i(ni);Im=s(b_,"Example:"),b_.forEach(t),Om=d(pt),T(Os.$$.fragment,pt),Sm=d(pt),T(Ss.$$.fragment,pt),pt.forEach(t),ct.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(O_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(x,"href","https://huggingface.co/DeBERTa"),c(x,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Qs,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaModel"),c(Gs,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Ks,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vs,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(ft,"class","docstring"),c(ro,"class","docstring"),c(tt,"class","docstring"),c(Js,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(mt,"class","docstring"),c(ot,"class","docstring"),c(Xe,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(jt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Xs,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaModel"),c(Ue,"class","docstring"),c(Ye,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(Pt,"class","relative group"),c(Rt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Qe,"class","docstring"),c(Ze,"class","docstring"),c(mo,"id","transformers.DebertaForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(Fn,"href","https://arxiv.org/abs/2006.03654"),c(Fn,"rel","nofollow"),c(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(zn,"rel","nofollow"),c(Zs,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(qe,"class","docstring"),c(Ie,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(St,"class","relative group"),c(Bn,"href","https://arxiv.org/abs/2006.03654"),c(Bn,"rel","nofollow"),c(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(An,"rel","nofollow"),c(ea,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Ge,"class","docstring"),c(Oe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Hn,"href","https://arxiv.org/abs/2006.03654"),c(Hn,"rel","nofollow"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(ta,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(Ke,"class","docstring"),c(Se,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(Yn,"href","https://arxiv.org/abs/2006.03654"),c(Yn,"rel","nofollow"),c(es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(es,"rel","nofollow"),c(oa,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ve,"class","docstring"),c(Ne,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(ht,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(ds,"href","https://arxiv.org/abs/2006.03654"),c(ds,"rel","nofollow"),c(ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ps,"rel","nofollow"),c(na,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Re,"class","docstring"),c(We,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(bs,"href","https://arxiv.org/abs/2006.03654"),c(bs,"rel","nofollow"),c(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ts,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Be,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(Fs,"href","https://arxiv.org/abs/2006.03654"),c(Fs,"rel","nofollow"),c(zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zs,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Le,"class","docstring"),c(Ce,"class","docstring"),c(xo,"id","transformers.TFDebertaForQuestionAnswering"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Bs,"href","https://arxiv.org/abs/2006.03654"),c(Bs,"rel","nofollow"),c(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(As,"rel","nofollow"),c(ra,"href","/docs/transformers/pr_16370/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ae,"class","docstring"),c(je,"class","docstring")},m(o,m){e(document.head,h),f(o,q,m),f(o,u,m),e(u,g),e(g,$),w(b,$,null),e(u,_),e(u,F),e(F,he),f(o,X,m),f(o,z,m),e(z,Y),e(Y,A),w(ee,A,null),e(z,fe),e(z,I),e(I,me),f(o,le,m),f(o,N,m),e(N,B),e(N,te),e(te,Z),e(N,M),f(o,j,m),f(o,ne,m),e(ne,W),f(o,de,m),f(o,se,m),e(se,H),f(o,ce,m),f(o,ae,m),e(ae,C),e(C,ue),e(C,L),e(L,ge),e(C,_e),f(o,O,m),f(o,K,m),e(K,be),e(K,x),e(x,ke),e(K,U),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,$e),e(K,Ee),f(o,R,m),f(o,pe,m),e(pe,Te),e(Te,ye),w(P,ye,null),e(pe,Q),e(pe,De),e(De,Fe),f(o,S,m),f(o,re,m),w(ve,re,null),e(re,we),e(re,ie),e(ie,zl),e(ie,Qs),e(Qs,Ml),e(ie,Cl),e(ie,Gs),e(Gs,jl),e(ie,xl),e(ie,Ho),e(Ho,Pl),e(ie,Rl),e(re,Bl),e(re,Et),e(Et,Ll),e(Et,Ks),e(Ks,Al),e(Et,Il),e(Et,Vs),e(Vs,Ol),e(Et,Sl),f(o,ui,m),f(o,Ft,m),e(Ft,ao),e(ao,za),w(Uo,za,null),e(Ft,Nl),e(Ft,Ma),e(Ma,Wl),f(o,gi,m),f(o,ze,m),w(Qo,ze,null),e(ze,Hl),e(ze,Ca),e(Ca,Ul),e(ze,Ql),e(ze,ft),w(Go,ft,null),e(ft,Gl),e(ft,ja),e(ja,Kl),e(ft,Vl),e(ft,Ko),e(Ko,xa),e(xa,Jl),e(Ko,Xl),e(Ko,Pa),e(Pa,Yl),e(ze,Zl),e(ze,ro),w(Vo,ro,null),e(ro,ed),e(ro,qt),e(qt,td),e(qt,Ra),e(Ra,od),e(qt,nd),e(qt,Ba),e(Ba,sd),e(qt,ad),e(ze,rd),e(ze,tt),w(Jo,tt,null),e(tt,id),e(tt,La),e(La,ld),e(tt,dd),w(Xo,tt,null),e(tt,cd),e(tt,zt),e(zt,pd),e(zt,Aa),e(Aa,hd),e(zt,fd),e(zt,Ia),e(Ia,md),e(zt,ud),e(ze,gd),e(ze,Js),w(Yo,Js,null),f(o,_i,m),f(o,Mt,m),e(Mt,io),e(io,Oa),w(Zo,Oa,null),e(Mt,_d),e(Mt,Sa),e(Sa,bd),f(o,bi,m),f(o,Xe,m),w(en,Xe,null),e(Xe,kd),e(Xe,tn),e(tn,Td),e(tn,Na),e(Na,wd),e(tn,vd),e(Xe,yd),e(Xe,mt),w(on,mt,null),e(mt,Dd),e(mt,Wa),e(Wa,$d),e(mt,Ed),e(mt,nn),e(nn,Ha),e(Ha,Fd),e(nn,qd),e(nn,Ua),e(Ua,zd),e(Xe,Md),e(Xe,ot),w(sn,ot,null),e(ot,Cd),e(ot,Qa),e(Qa,jd),e(ot,xd),w(an,ot,null),e(ot,Pd),e(ot,Ct),e(Ct,Rd),e(Ct,Ga),e(Ga,Bd),e(Ct,Ld),e(Ct,Ka),e(Ka,Ad),e(Ct,Id),f(o,ki,m),f(o,jt,m),e(jt,lo),e(lo,Va),w(rn,Va,null),e(jt,Od),e(jt,Ja),e(Ja,Sd),f(o,Ti,m),f(o,Ye,m),w(ln,Ye,null),e(Ye,Nd),e(Ye,dn),e(dn,Wd),e(dn,cn),e(cn,Hd),e(dn,Ud),e(Ye,Qd),e(Ye,pn),e(pn,Gd),e(pn,hn),e(hn,Kd),e(pn,Vd),e(Ye,Jd),e(Ye,Ue),w(fn,Ue,null),e(Ue,Xd),e(Ue,xt),e(xt,Yd),e(xt,Xs),e(Xs,Zd),e(xt,ec),e(xt,Xa),e(Xa,tc),e(xt,oc),e(Ue,nc),w(co,Ue,null),e(Ue,sc),e(Ue,Ya),e(Ya,ac),e(Ue,rc),w(mn,Ue,null),f(o,wi,m),f(o,Pt,m),e(Pt,po),e(po,Za),w(un,Za,null),e(Pt,ic),e(Pt,er),e(er,lc),f(o,vi,m),f(o,Rt,m),w(gn,Rt,null),e(Rt,dc),e(Rt,tr),e(tr,cc),f(o,yi,m),f(o,Bt,m),e(Bt,ho),e(ho,or),w(_n,or,null),e(Bt,pc),e(Bt,nr),e(nr,hc),f(o,Di,m),f(o,Ze,m),w(bn,Ze,null),e(Ze,fc),e(Ze,Lt),e(Lt,mc),e(Lt,sr),e(sr,uc),e(Lt,gc),e(Lt,kn),e(kn,_c),e(Lt,bc),e(Ze,kc),e(Ze,Tn),e(Tn,Tc),e(Tn,wn),e(wn,wc),e(Tn,vc),e(Ze,yc),e(Ze,Qe),w(vn,Qe,null),e(Qe,Dc),e(Qe,At),e(At,$c),e(At,Ys),e(Ys,Ec),e(At,Fc),e(At,ar),e(ar,qc),e(At,zc),e(Qe,Mc),w(fo,Qe,null),e(Qe,Cc),e(Qe,rr),e(rr,jc),e(Qe,xc),w(yn,Qe,null),f(o,$i,m),f(o,It,m),e(It,mo),e(mo,ir),w(Dn,ir,null),e(It,Pc),e(It,lr),e(lr,Rc),f(o,Ei,m),f(o,Ie,m),w($n,Ie,null),e(Ie,Bc),e(Ie,dr),e(dr,Lc),e(Ie,Ac),e(Ie,En),e(En,Ic),e(En,Fn),e(Fn,Oc),e(En,Sc),e(Ie,Nc),e(Ie,qn),e(qn,Wc),e(qn,zn),e(zn,Hc),e(qn,Uc),e(Ie,Qc),e(Ie,qe),w(Mn,qe,null),e(qe,Gc),e(qe,Ot),e(Ot,Kc),e(Ot,Zs),e(Zs,Vc),e(Ot,Jc),e(Ot,cr),e(cr,Xc),e(Ot,Yc),e(qe,Zc),w(uo,qe,null),e(qe,ep),e(qe,pr),e(pr,tp),e(qe,op),w(Cn,qe,null),e(qe,np),e(qe,hr),e(hr,sp),e(qe,ap),w(jn,qe,null),f(o,Fi,m),f(o,St,m),e(St,go),e(go,fr),w(xn,fr,null),e(St,rp),e(St,mr),e(mr,ip),f(o,qi,m),f(o,Oe,m),w(Pn,Oe,null),e(Oe,lp),e(Oe,ur),e(ur,dp),e(Oe,cp),e(Oe,Rn),e(Rn,pp),e(Rn,Bn),e(Bn,hp),e(Rn,fp),e(Oe,mp),e(Oe,Ln),e(Ln,up),e(Ln,An),e(An,gp),e(Ln,_p),e(Oe,bp),e(Oe,Ge),w(In,Ge,null),e(Ge,kp),e(Ge,Nt),e(Nt,Tp),e(Nt,ea),e(ea,wp),e(Nt,vp),e(Nt,gr),e(gr,yp),e(Nt,Dp),e(Ge,$p),w(_o,Ge,null),e(Ge,Ep),e(Ge,_r),e(_r,Fp),e(Ge,qp),w(On,Ge,null),f(o,zi,m),f(o,Wt,m),e(Wt,bo),e(bo,br),w(Sn,br,null),e(Wt,zp),e(Wt,kr),e(kr,Mp),f(o,Mi,m),f(o,Se,m),w(Nn,Se,null),e(Se,Cp),e(Se,Ht),e(Ht,jp),e(Ht,Tr),e(Tr,xp),e(Ht,Pp),e(Ht,wr),e(wr,Rp),e(Ht,Bp),e(Se,Lp),e(Se,Wn),e(Wn,Ap),e(Wn,Hn),e(Hn,Ip),e(Wn,Op),e(Se,Sp),e(Se,Un),e(Un,Np),e(Un,Qn),e(Qn,Wp),e(Un,Hp),e(Se,Up),e(Se,Ke),w(Gn,Ke,null),e(Ke,Qp),e(Ke,Ut),e(Ut,Gp),e(Ut,ta),e(ta,Kp),e(Ut,Vp),e(Ut,vr),e(vr,Jp),e(Ut,Xp),e(Ke,Yp),w(ko,Ke,null),e(Ke,Zp),e(Ke,yr),e(yr,eh),e(Ke,th),w(Kn,Ke,null),f(o,Ci,m),f(o,Qt,m),e(Qt,To),e(To,Dr),w(Vn,Dr,null),e(Qt,oh),e(Qt,$r),e($r,nh),f(o,ji,m),f(o,Ne,m),w(Jn,Ne,null),e(Ne,sh),e(Ne,Xn),e(Xn,ah),e(Xn,Yn),e(Yn,rh),e(Xn,ih),e(Ne,lh),e(Ne,Zn),e(Zn,dh),e(Zn,es),e(es,ch),e(Zn,ph),e(Ne,hh),w(wo,Ne,null),e(Ne,fh),e(Ne,Ve),w(ts,Ve,null),e(Ve,mh),e(Ve,Gt),e(Gt,uh),e(Gt,oa),e(oa,gh),e(Gt,_h),e(Gt,Er),e(Er,bh),e(Gt,kh),e(Ve,Th),w(vo,Ve,null),e(Ve,wh),e(Ve,Fr),e(Fr,vh),e(Ve,yh),w(os,Ve,null),f(o,xi,m),f(o,Kt,m),e(Kt,yo),e(yo,qr),w(ns,qr,null),e(Kt,Dh),e(Kt,zr),e(zr,$h),f(o,Pi,m),f(o,ht,m),w(ss,ht,null),e(ht,Eh),e(ht,Mr),e(Mr,Fh),e(ht,qh),e(ht,nt),w(as,nt,null),e(nt,zh),e(nt,Cr),e(Cr,Mh),e(nt,Ch),e(nt,rs),e(rs,jh),e(rs,jr),e(jr,xh),e(rs,Ph),e(nt,Rh),e(nt,et),e(et,Bh),e(et,xr),e(xr,Lh),e(et,Ah),e(et,Pr),e(Pr,Ih),e(et,Oh),e(et,Rr),e(Rr,Sh),e(et,Nh),e(et,Br),e(Br,Wh),e(et,Hh),f(o,Ri,m),f(o,Vt,m),e(Vt,Do),e(Do,Lr),w(is,Lr,null),e(Vt,Uh),e(Vt,Ar),e(Ar,Qh),f(o,Bi,m),f(o,We,m),w(ls,We,null),e(We,Gh),e(We,Jt),e(Jt,Kh),e(Jt,Ir),e(Ir,Vh),e(Jt,Jh),e(Jt,ds),e(ds,Xh),e(Jt,Yh),e(We,Zh),e(We,cs),e(cs,ef),e(cs,ps),e(ps,tf),e(cs,of),e(We,nf),w($o,We,null),e(We,sf),e(We,Re),w(hs,Re,null),e(Re,af),e(Re,Xt),e(Xt,rf),e(Xt,na),e(na,lf),e(Xt,df),e(Xt,Or),e(Or,cf),e(Xt,pf),e(Re,hf),w(Eo,Re,null),e(Re,ff),e(Re,Sr),e(Sr,mf),e(Re,uf),w(fs,Re,null),e(Re,gf),w(ms,Re,null),f(o,Li,m),f(o,Yt,m),e(Yt,Fo),e(Fo,Nr),w(us,Nr,null),e(Yt,_f),e(Yt,Wr),e(Wr,bf),f(o,Ai,m),f(o,Me,m),w(gs,Me,null),e(Me,kf),e(Me,Hr),e(Hr,Tf),e(Me,wf),e(Me,_s),e(_s,vf),e(_s,bs),e(bs,yf),e(_s,Df),e(Me,$f),e(Me,ks),e(ks,Ef),e(ks,Ts),e(Ts,Ff),e(ks,qf),e(Me,zf),w(qo,Me,null),e(Me,Mf),e(Me,Be),w(ws,Be,null),e(Be,Cf),e(Be,Zt),e(Zt,jf),e(Zt,sa),e(sa,xf),e(Zt,Pf),e(Zt,Ur),e(Ur,Rf),e(Zt,Bf),e(Be,Lf),w(zo,Be,null),e(Be,Af),e(Be,Qr),e(Qr,If),e(Be,Of),w(vs,Be,null),e(Be,Sf),w(ys,Be,null),f(o,Ii,m),f(o,eo,m),e(eo,Mo),e(Mo,Gr),w(Ds,Gr,null),e(eo,Nf),e(eo,Kr),e(Kr,Wf),f(o,Oi,m),f(o,Ce,m),w($s,Ce,null),e(Ce,Hf),e(Ce,Vr),e(Vr,Uf),e(Ce,Qf),e(Ce,Es),e(Es,Gf),e(Es,Fs),e(Fs,Kf),e(Es,Vf),e(Ce,Jf),e(Ce,qs),e(qs,Xf),e(qs,zs),e(zs,Yf),e(qs,Zf),e(Ce,em),w(Co,Ce,null),e(Ce,tm),e(Ce,Le),w(Ms,Le,null),e(Le,om),e(Le,to),e(to,nm),e(to,aa),e(aa,sm),e(to,am),e(to,Jr),e(Jr,rm),e(to,im),e(Le,lm),w(jo,Le,null),e(Le,dm),e(Le,Xr),e(Xr,cm),e(Le,pm),w(Cs,Le,null),e(Le,hm),w(js,Le,null),f(o,Si,m),f(o,oo,m),e(oo,xo),e(xo,Yr),w(xs,Yr,null),e(oo,fm),e(oo,Zr),e(Zr,mm),f(o,Ni,m),f(o,je,m),w(Ps,je,null),e(je,um),e(je,no),e(no,gm),e(no,ei),e(ei,_m),e(no,bm),e(no,ti),e(ti,km),e(no,Tm),e(je,wm),e(je,Rs),e(Rs,vm),e(Rs,Bs),e(Bs,ym),e(Rs,Dm),e(je,$m),e(je,Ls),e(Ls,Em),e(Ls,As),e(As,Fm),e(Ls,qm),e(je,zm),w(Po,je,null),e(je,Mm),e(je,Ae),w(Is,Ae,null),e(Ae,Cm),e(Ae,so),e(so,jm),e(so,ra),e(ra,xm),e(so,Pm),e(so,oi),e(oi,Rm),e(so,Bm),e(Ae,Lm),w(Ro,Ae,null),e(Ae,Am),e(Ae,ni),e(ni,Im),e(Ae,Om),w(Os,Ae,null),e(Ae,Sm),w(Ss,Ae,null),Wi=!0},p(o,[m]){const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),co.$set(Ns);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),fo.$set(si);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),uo.$set(ai);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),_o.$set(ri);const Ws={};m&2&&(Ws.$$scope={dirty:m,ctx:o}),ko.$set(Ws);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),wo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),vo.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),$o.$set(di);const Hs={};m&2&&(Hs.$$scope={dirty:m,ctx:o}),Eo.$set(Hs);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),qo.$set(ci);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),zo.$set(pi);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),Co.$set(hi);const fi={};m&2&&(fi.$$scope={dirty:m,ctx:o}),jo.$set(fi);const Us={};m&2&&(Us.$$scope={dirty:m,ctx:o}),Po.$set(Us);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:o}),Ro.$set(mi)},i(o){Wi||(v(b.$$.fragment,o),v(ee.$$.fragment,o),v(P.$$.fragment,o),v(ve.$$.fragment,o),v(Uo.$$.fragment,o),v(Qo.$$.fragment,o),v(Go.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(on.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(ln.$$.fragment,o),v(fn.$$.fragment,o),v(co.$$.fragment,o),v(mn.$$.fragment,o),v(un.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(fo.$$.fragment,o),v(yn.$$.fragment,o),v(Dn.$$.fragment,o),v($n.$$.fragment,o),v(Mn.$$.fragment,o),v(uo.$$.fragment,o),v(Cn.$$.fragment,o),v(jn.$$.fragment,o),v(xn.$$.fragment,o),v(Pn.$$.fragment,o),v(In.$$.fragment,o),v(_o.$$.fragment,o),v(On.$$.fragment,o),v(Sn.$$.fragment,o),v(Nn.$$.fragment,o),v(Gn.$$.fragment,o),v(ko.$$.fragment,o),v(Kn.$$.fragment,o),v(Vn.$$.fragment,o),v(Jn.$$.fragment,o),v(wo.$$.fragment,o),v(ts.$$.fragment,o),v(vo.$$.fragment,o),v(os.$$.fragment,o),v(ns.$$.fragment,o),v(ss.$$.fragment,o),v(as.$$.fragment,o),v(is.$$.fragment,o),v(ls.$$.fragment,o),v($o.$$.fragment,o),v(hs.$$.fragment,o),v(Eo.$$.fragment,o),v(fs.$$.fragment,o),v(ms.$$.fragment,o),v(us.$$.fragment,o),v(gs.$$.fragment,o),v(qo.$$.fragment,o),v(ws.$$.fragment,o),v(zo.$$.fragment,o),v(vs.$$.fragment,o),v(ys.$$.fragment,o),v(Ds.$$.fragment,o),v($s.$$.fragment,o),v(Co.$$.fragment,o),v(Ms.$$.fragment,o),v(jo.$$.fragment,o),v(Cs.$$.fragment,o),v(js.$$.fragment,o),v(xs.$$.fragment,o),v(Ps.$$.fragment,o),v(Po.$$.fragment,o),v(Is.$$.fragment,o),v(Ro.$$.fragment,o),v(Os.$$.fragment,o),v(Ss.$$.fragment,o),Wi=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(P.$$.fragment,o),y(ve.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(fn.$$.fragment,o),y(co.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(fo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(uo.$$.fragment,o),y(Cn.$$.fragment,o),y(jn.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(In.$$.fragment,o),y(_o.$$.fragment,o),y(On.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(Gn.$$.fragment,o),y(ko.$$.fragment,o),y(Kn.$$.fragment,o),y(Vn.$$.fragment,o),y(Jn.$$.fragment,o),y(wo.$$.fragment,o),y(ts.$$.fragment,o),y(vo.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y($o.$$.fragment,o),y(hs.$$.fragment,o),y(Eo.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(us.$$.fragment,o),y(gs.$$.fragment,o),y(qo.$$.fragment,o),y(ws.$$.fragment,o),y(zo.$$.fragment,o),y(vs.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y($s.$$.fragment,o),y(Co.$$.fragment,o),y(Ms.$$.fragment,o),y(jo.$$.fragment,o),y(Cs.$$.fragment,o),y(js.$$.fragment,o),y(xs.$$.fragment,o),y(Ps.$$.fragment,o),y(Po.$$.fragment,o),y(Is.$$.fragment,o),y(Ro.$$.fragment,o),y(Os.$$.fragment,o),y(Ss.$$.fragment,o),Wi=!1},d(o){t(h),o&&t(q),o&&t(u),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(N),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(R),o&&t(pe),D(P),o&&t(S),o&&t(re),D(ve),o&&t(ui),o&&t(Ft),D(Uo),o&&t(gi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(_i),o&&t(Mt),D(Zo),o&&t(bi),o&&t(Xe),D(en),D(on),D(sn),D(an),o&&t(ki),o&&t(jt),D(rn),o&&t(Ti),o&&t(Ye),D(ln),D(fn),D(co),D(mn),o&&t(wi),o&&t(Pt),D(un),o&&t(vi),o&&t(Rt),D(gn),o&&t(yi),o&&t(Bt),D(_n),o&&t(Di),o&&t(Ze),D(bn),D(vn),D(fo),D(yn),o&&t($i),o&&t(It),D(Dn),o&&t(Ei),o&&t(Ie),D($n),D(Mn),D(uo),D(Cn),D(jn),o&&t(Fi),o&&t(St),D(xn),o&&t(qi),o&&t(Oe),D(Pn),D(In),D(_o),D(On),o&&t(zi),o&&t(Wt),D(Sn),o&&t(Mi),o&&t(Se),D(Nn),D(Gn),D(ko),D(Kn),o&&t(Ci),o&&t(Qt),D(Vn),o&&t(ji),o&&t(Ne),D(Jn),D(wo),D(ts),D(vo),D(os),o&&t(xi),o&&t(Kt),D(ns),o&&t(Pi),o&&t(ht),D(ss),D(as),o&&t(Ri),o&&t(Vt),D(is),o&&t(Bi),o&&t(We),D(ls),D($o),D(hs),D(Eo),D(fs),D(ms),o&&t(Li),o&&t(Yt),D(us),o&&t(Ai),o&&t(Me),D(gs),D(qo),D(ws),D(zo),D(vs),D(ys),o&&t(Ii),o&&t(eo),D(Ds),o&&t(Oi),o&&t(Ce),D($s),D(Co),D(Ms),D(jo),D(Cs),D(js),o&&t(Si),o&&t(oo),D(xs),o&&t(Ni),o&&t(je),D(Ps),D(Po),D(Is),D(Ro),D(Os),D(Ss)}}}const O_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function S_(G){return y_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class G_ extends k_{constructor(h){super();T_(this,h,S_,I_,w_,{})}}export{G_ as default,O_ as metadata};
