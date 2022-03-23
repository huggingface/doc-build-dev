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
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function z_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function M_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function C_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function j_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function x_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function P_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function R_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function B_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function A_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe;return{c(){h=a("p"),q=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),me=n("model(inputs)"),le=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),O=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),x=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);q=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),g=r(p,"UL",{});var V=i(g);$=r(V,"LI",{});var Ee=i($);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),F=r(V,"LI",{});var Fe=i(F);he=s(Fe,"having all inputs as a list, tuple or dict in the first positional arguments."),Fe.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var R=i(z);Y=s(R,"This second option is useful when using "),L=r(R,"CODE",{});var pe=i(L);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(R,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(R,"CODE",{});var Te=i(I);me=s(Te,"model(inputs)"),Te.forEach(t),le=s(R,"."),R.forEach(t),N=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var P=i(M);j=r(P,"LI",{});var Q=i(j);ne=s(Q,"a single Tensor with "),W=r(Q,"CODE",{});var De=i(W);de=s(De,"input_ids"),De.forEach(t),se=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var qe=i(H);ce=s(qe,"model(inputs_ids)"),qe.forEach(t),Q.forEach(t),ae=d(P),C=r(P,"LI",{});var S=i(C);ue=s(S,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(S,"CODE",{});var re=i(A);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(S," or "),O=r(S,"CODE",{});var ve=i(O);K=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(t),S.forEach(t),be=d(P),x=r(P,"LI",{});var we=i(x);ke=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(we,"CODE",{});var ie=i(U);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),we.forEach(t),P.forEach(t)},m(p,E){f(p,h,E),e(h,q),f(p,u,E),f(p,g,E),e(g,$),e($,b),e(g,_),e(g,F),e(F,he),f(p,X,E),f(p,z,E),e(z,Y),e(z,L),e(L,ee),e(z,fe),e(z,I),e(I,me),e(z,le),f(p,N,E),f(p,B,E),e(B,te),f(p,Z,E),f(p,M,E),e(M,j),e(j,ne),e(j,W),e(W,de),e(j,se),e(j,H),e(H,ce),e(M,ae),e(M,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),e(C,O),e(O,K),e(M,be),e(M,x),e(x,ke),e(x,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(X),p&&t(z),p&&t(N),p&&t(B),p&&t(Z),p&&t(M)}}}function L_(G){let h,q,u,g,$;return{c(){h=a("p"),q=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),g=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);q=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(_,"CODE",{});var F=i(u);g=s(F,"Module"),F.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,q),e(h,u),e(u,g),e(h,$)},d(b){b&&t(h)}}}function I_(G){let h,q,u,g,$,b,_,F,he,X,z,Y,L,ee,fe,I,me,le,N,B,te,Z,M,j,ne,W,de,se,H,ce,ae,C,ue,A,ge,_e,O,K,be,x,ke,U,oe,p,E,V,Ee,Fe,R,pe,Te,ye,P,Q,De,qe,S,re,ve,we,ie,zl,Qs,Ml,Cl,Gs,jl,xl,Ho,Pl,Rl,Bl,Et,Al,Ks,Ll,Il,Vs,Ol,Sl,ui,Ft,ao,za,Uo,Nl,Ma,Wl,gi,ze,Qo,Hl,Ca,Ul,Ql,ht,Go,Gl,ja,Kl,Vl,Ko,xa,Jl,Xl,Pa,Yl,Zl,ro,Vo,ed,qt,td,Ra,od,nd,Ba,sd,ad,rd,tt,Jo,id,Aa,ld,dd,Xo,cd,zt,pd,La,hd,fd,Ia,md,ud,gd,Js,Yo,_i,Mt,io,Oa,Zo,_d,Sa,bd,bi,Xe,en,kd,tn,Td,Na,wd,vd,yd,ft,on,Dd,Wa,$d,Ed,nn,Ha,Fd,qd,Ua,zd,Md,ot,sn,Cd,Qa,jd,xd,an,Pd,Ct,Rd,Ga,Bd,Ad,Ka,Ld,Id,ki,jt,lo,Va,rn,Od,Ja,Sd,Ti,Ye,ln,Nd,dn,Wd,cn,Hd,Ud,Qd,pn,Gd,hn,Kd,Vd,Jd,Ue,fn,Xd,xt,Yd,Xs,Zd,ec,Xa,tc,oc,nc,co,sc,Ya,ac,rc,mn,wi,Pt,po,Za,un,ic,er,lc,vi,Rt,gn,dc,tr,cc,yi,Bt,ho,or,_n,pc,nr,hc,Di,Ze,bn,fc,At,mc,sr,uc,gc,kn,_c,bc,kc,Tn,Tc,wn,wc,vc,yc,Re,vn,Dc,Lt,$c,Ys,Ec,Fc,ar,qc,zc,Mc,fo,Cc,rr,jc,xc,yn,Pc,Dn,$i,It,mo,ir,$n,Rc,lr,Bc,Ei,Ie,En,Ac,dr,Lc,Ic,Fn,Oc,qn,Sc,Nc,Wc,zn,Hc,Mn,Uc,Qc,Gc,$e,Cn,Kc,Ot,Vc,Zs,Jc,Xc,cr,Yc,Zc,ep,uo,tp,pr,op,np,jn,sp,xn,ap,hr,rp,ip,Pn,Fi,St,go,fr,Rn,lp,mr,dp,qi,Oe,Bn,cp,ur,pp,hp,An,fp,Ln,mp,up,gp,In,_p,On,bp,kp,Tp,Be,Sn,wp,Nt,vp,ea,yp,Dp,gr,$p,Ep,Fp,_o,qp,_r,zp,Mp,Nn,Cp,Wn,zi,Wt,bo,br,Hn,jp,kr,xp,Mi,Se,Un,Pp,Ht,Rp,Tr,Bp,Ap,wr,Lp,Ip,Op,Qn,Sp,Gn,Np,Wp,Hp,Kn,Up,Vn,Qp,Gp,Kp,Ae,Jn,Vp,Ut,Jp,ta,Xp,Yp,vr,Zp,eh,th,ko,oh,yr,nh,sh,Xn,ah,Yn,Ci,Qt,To,Dr,Zn,rh,$r,ih,ji,Ne,es,lh,ts,dh,os,ch,ph,hh,ns,fh,ss,mh,uh,gh,wo,_h,Qe,as,bh,Gt,kh,oa,Th,wh,Er,vh,yh,Dh,vo,$h,Fr,Eh,Fh,rs,xi,Kt,yo,qr,is,qh,zr,zh,Pi,pt,ls,Mh,Mr,Ch,jh,nt,ds,xh,Cr,Ph,Rh,cs,Bh,jr,Ah,Lh,Ih,et,Oh,xr,Sh,Nh,Pr,Wh,Hh,Rr,Uh,Qh,Br,Gh,Kh,Ri,Vt,Do,Ar,ps,Vh,Lr,Jh,Bi,We,hs,Xh,Jt,Yh,Ir,Zh,ef,fs,tf,of,nf,ms,sf,us,af,rf,lf,$o,df,Ge,gs,cf,Xt,pf,na,hf,ff,Or,mf,uf,gf,Eo,_f,Sr,bf,kf,_s,Ai,Yt,Fo,Nr,bs,Tf,Wr,wf,Li,Me,ks,vf,Hr,yf,Df,Ts,$f,ws,Ef,Ff,qf,vs,zf,ys,Mf,Cf,jf,qo,xf,Ke,Ds,Pf,Zt,Rf,sa,Bf,Af,Ur,Lf,If,Of,zo,Sf,Qr,Nf,Wf,$s,Ii,eo,Mo,Gr,Es,Hf,Kr,Uf,Oi,Ce,Fs,Qf,Vr,Gf,Kf,qs,Vf,zs,Jf,Xf,Yf,Ms,Zf,Cs,em,tm,om,Co,nm,Ve,js,sm,to,am,aa,rm,im,Jr,lm,dm,cm,jo,pm,Xr,hm,fm,xs,Si,oo,xo,Yr,Ps,mm,Zr,um,Ni,je,Rs,gm,no,_m,ei,bm,km,ti,Tm,wm,vm,Bs,ym,As,Dm,$m,Em,Ls,Fm,Is,qm,zm,Mm,Po,Cm,Je,Os,jm,so,xm,ra,Pm,Rm,oi,Bm,Am,Lm,Ro,Im,ni,Om,Sm,Ss,Wi;return b=new Pe({}),ee=new Pe({}),P=new Pe({}),ve=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Pe({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new xe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new J({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/gpt2/tokenization_gpt2.py#L269"}}),Zo=new Pe({}),en=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),on=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new xe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),rn=new Pe({}),ln=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Pe({}),gn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L787"}}),_n=new Pe({}),bn=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new He({props:{$$slots:{default:[$_]},$$scope:{ctx:G}}}),yn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Dn=new xe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),$n=new Pe({}),En=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new He({props:{$$slots:{default:[E_]},$$scope:{ctx:G}}}),jn=new xe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),xn=new xe({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Pn=new xe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Rn=new Pe({}),Bn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Sn=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new He({props:{$$slots:{default:[F_]},$$scope:{ctx:G}}}),Nn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

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
`}}),Wn=new xe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Hn=new Pe({}),Un=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1324",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_deberta.py#L1337",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new He({props:{$$slots:{default:[q_]},$$scope:{ctx:G}}}),Xn=new xe({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Yn=new xe({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Zn=new Pe({}),es=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1074",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new He({props:{$$slots:{default:[z_]},$$scope:{ctx:G}}}),as=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1080",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new He({props:{$$slots:{default:[M_]},$$scope:{ctx:G}}}),rs=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),is=new Pe({}),ls=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L979"}}),ds=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ps=new Pe({}),hs=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1123",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new He({props:{$$slots:{default:[C_]},$$scope:{ctx:G}}}),gs=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1139",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Eo=new He({props:{$$slots:{default:[j_]},$$scope:{ctx:G}}}),_s=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),bs=new Pe({}),ks=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1207",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new He({props:{$$slots:{default:[x_]},$$scope:{ctx:G}}}),Ds=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1225",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new He({props:{$$slots:{default:[P_]},$$scope:{ctx:G}}}),$s=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Es=new Pe({}),Fs=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1296",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new He({props:{$$slots:{default:[R_]},$$scope:{ctx:G}}}),js=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1308",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jo=new He({props:{$$slots:{default:[B_]},$$scope:{ctx:G}}}),xs=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ps=new Pe({}),Rs=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1375",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new He({props:{$$slots:{default:[A_]},$$scope:{ctx:G}}}),Os=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/deberta/modeling_tf_deberta.py#L1386",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new He({props:{$$slots:{default:[L_]},$$scope:{ctx:G}}}),Ss=new xe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),q=l(),u=a("h1"),g=a("a"),$=a("span"),k(b.$$.fragment),_=l(),F=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),fe=l(),I=a("span"),me=n("Overview"),le=l(),N=a("p"),B=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
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
pre-trained models will be made publicly available at `),A=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),O=l(),K=a("p"),be=n("This model was contributed by "),x=a("a"),ke=n("DeBERTa"),U=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),E=n(" . The original code can be found "),V=a("a"),Ee=n("here"),Fe=n("."),R=l(),pe=a("h2"),Te=a("a"),ye=a("span"),k(P.$$.fragment),Q=l(),De=a("span"),qe=n("DebertaConfig"),S=l(),re=a("div"),k(ve.$$.fragment),we=l(),ie=a("p"),zl=n("This is the configuration class to store the configuration of a "),Qs=a("a"),Ml=n("DebertaModel"),Cl=n(" or a "),Gs=a("a"),jl=n("TFDebertaModel"),xl=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),Pl=n("microsoft/deberta-base"),Rl=n(" architecture."),Bl=l(),Et=a("p"),Al=n("Configuration objects inherit from "),Ks=a("a"),Ll=n("PretrainedConfig"),Il=n(` and can be used to control the model outputs. Read the
documentation from `),Vs=a("a"),Ol=n("PretrainedConfig"),Sl=n(" for more information."),ui=l(),Ft=a("h2"),ao=a("a"),za=a("span"),k(Uo.$$.fragment),Nl=l(),Ma=a("span"),Wl=n("DebertaTokenizer"),gi=l(),ze=a("div"),k(Qo.$$.fragment),Hl=l(),Ca=a("p"),Ul=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Ql=l(),ht=a("div"),k(Go.$$.fragment),Gl=l(),ja=a("p"),Kl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Vl=l(),Ko=a("ul"),xa=a("li"),Jl=n("single sequence: [CLS] X [SEP]"),Xl=l(),Pa=a("li"),Yl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Zl=l(),ro=a("div"),k(Vo.$$.fragment),ed=l(),qt=a("p"),td=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=a("code"),od=n("prepare_for_model"),nd=n(" or "),Ba=a("code"),sd=n("encode_plus"),ad=n(" methods."),rd=l(),tt=a("div"),k(Jo.$$.fragment),id=l(),Aa=a("p"),ld=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),dd=l(),k(Xo.$$.fragment),cd=l(),zt=a("p"),pd=n("If "),La=a("code"),hd=n("token_ids_1"),fd=n(" is "),Ia=a("code"),md=n("None"),ud=n(", this method only returns the first portion of the mask (0s)."),gd=l(),Js=a("div"),k(Yo.$$.fragment),_i=l(),Mt=a("h2"),io=a("a"),Oa=a("span"),k(Zo.$$.fragment),_d=l(),Sa=a("span"),bd=n("DebertaTokenizerFast"),bi=l(),Xe=a("div"),k(en.$$.fragment),kd=l(),tn=a("p"),Td=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Na=a("em"),wd=n("tokenizers"),vd=n(" library."),yd=l(),ft=a("div"),k(on.$$.fragment),Dd=l(),Wa=a("p"),$d=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ed=l(),nn=a("ul"),Ha=a("li"),Fd=n("single sequence: [CLS] X [SEP]"),qd=l(),Ua=a("li"),zd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Md=l(),ot=a("div"),k(sn.$$.fragment),Cd=l(),Qa=a("p"),jd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),xd=l(),k(an.$$.fragment),Pd=l(),Ct=a("p"),Rd=n("If "),Ga=a("code"),Bd=n("token_ids_1"),Ad=n(" is "),Ka=a("code"),Ld=n("None"),Id=n(", this method only returns the first portion of the mask (0s)."),ki=l(),jt=a("h2"),lo=a("a"),Va=a("span"),k(rn.$$.fragment),Od=l(),Ja=a("span"),Sd=n("DebertaModel"),Ti=l(),Ye=a("div"),k(ln.$$.fragment),Nd=l(),dn=a("p"),Wd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=a("a"),Hd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ud=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qd=l(),pn=a("p"),Gd=n("This model is also a PyTorch "),hn=a("a"),Kd=n("torch.nn.Module"),Vd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jd=l(),Ue=a("div"),k(fn.$$.fragment),Xd=l(),xt=a("p"),Yd=n("The "),Xs=a("a"),Zd=n("DebertaModel"),ec=n(" forward method, overrides the "),Xa=a("code"),tc=n("__call__"),oc=n(" special method."),nc=l(),k(co.$$.fragment),sc=l(),Ya=a("p"),ac=n("Example:"),rc=l(),k(mn.$$.fragment),wi=l(),Pt=a("h2"),po=a("a"),Za=a("span"),k(un.$$.fragment),ic=l(),er=a("span"),lc=n("DebertaPreTrainedModel"),vi=l(),Rt=a("div"),k(gn.$$.fragment),dc=l(),tr=a("p"),cc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),yi=l(),Bt=a("h2"),ho=a("a"),or=a("span"),k(_n.$$.fragment),pc=l(),nr=a("span"),hc=n("DebertaForMaskedLM"),Di=l(),Ze=a("div"),k(bn.$$.fragment),fc=l(),At=a("p"),mc=n("DeBERTa Model with a "),sr=a("code"),uc=n("language modeling"),gc=n(` head on top.
The DeBERTa model was proposed in `),kn=a("a"),_c=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kc=l(),Tn=a("p"),Tc=n("This model is also a PyTorch "),wn=a("a"),wc=n("torch.nn.Module"),vc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),yc=l(),Re=a("div"),k(vn.$$.fragment),Dc=l(),Lt=a("p"),$c=n("The "),Ys=a("a"),Ec=n("DebertaForMaskedLM"),Fc=n(" forward method, overrides the "),ar=a("code"),qc=n("__call__"),zc=n(" special method."),Mc=l(),k(fo.$$.fragment),Cc=l(),rr=a("p"),jc=n("Example:"),xc=l(),k(yn.$$.fragment),Pc=l(),k(Dn.$$.fragment),$i=l(),It=a("h2"),mo=a("a"),ir=a("span"),k($n.$$.fragment),Rc=l(),lr=a("span"),Bc=n("DebertaForSequenceClassification"),Ei=l(),Ie=a("div"),k(En.$$.fragment),Ac=l(),dr=a("p"),Lc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ic=l(),Fn=a("p"),Oc=n("The DeBERTa model was proposed in "),qn=a("a"),Sc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Nc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wc=l(),zn=a("p"),Hc=n("This model is also a PyTorch "),Mn=a("a"),Uc=n("torch.nn.Module"),Qc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Gc=l(),$e=a("div"),k(Cn.$$.fragment),Kc=l(),Ot=a("p"),Vc=n("The "),Zs=a("a"),Jc=n("DebertaForSequenceClassification"),Xc=n(" forward method, overrides the "),cr=a("code"),Yc=n("__call__"),Zc=n(" special method."),ep=l(),k(uo.$$.fragment),tp=l(),pr=a("p"),op=n("Example of single-label classification:"),np=l(),k(jn.$$.fragment),sp=l(),k(xn.$$.fragment),ap=l(),hr=a("p"),rp=n("Example of multi-label classification:"),ip=l(),k(Pn.$$.fragment),Fi=l(),St=a("h2"),go=a("a"),fr=a("span"),k(Rn.$$.fragment),lp=l(),mr=a("span"),dp=n("DebertaForTokenClassification"),qi=l(),Oe=a("div"),k(Bn.$$.fragment),cp=l(),ur=a("p"),pp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hp=l(),An=a("p"),fp=n("The DeBERTa model was proposed in "),Ln=a("a"),mp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),up=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gp=l(),In=a("p"),_p=n("This model is also a PyTorch "),On=a("a"),bp=n("torch.nn.Module"),kp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tp=l(),Be=a("div"),k(Sn.$$.fragment),wp=l(),Nt=a("p"),vp=n("The "),ea=a("a"),yp=n("DebertaForTokenClassification"),Dp=n(" forward method, overrides the "),gr=a("code"),$p=n("__call__"),Ep=n(" special method."),Fp=l(),k(_o.$$.fragment),qp=l(),_r=a("p"),zp=n("Example:"),Mp=l(),k(Nn.$$.fragment),Cp=l(),k(Wn.$$.fragment),zi=l(),Wt=a("h2"),bo=a("a"),br=a("span"),k(Hn.$$.fragment),jp=l(),kr=a("span"),xp=n("DebertaForQuestionAnswering"),Mi=l(),Se=a("div"),k(Un.$$.fragment),Pp=l(),Ht=a("p"),Rp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=a("code"),Bp=n("span start logits"),Ap=n(" and "),wr=a("code"),Lp=n("span end logits"),Ip=n(")."),Op=l(),Qn=a("p"),Sp=n("The DeBERTa model was proposed in "),Gn=a("a"),Np=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Wp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Hp=l(),Kn=a("p"),Up=n("This model is also a PyTorch "),Vn=a("a"),Qp=n("torch.nn.Module"),Gp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Kp=l(),Ae=a("div"),k(Jn.$$.fragment),Vp=l(),Ut=a("p"),Jp=n("The "),ta=a("a"),Xp=n("DebertaForQuestionAnswering"),Yp=n(" forward method, overrides the "),vr=a("code"),Zp=n("__call__"),eh=n(" special method."),th=l(),k(ko.$$.fragment),oh=l(),yr=a("p"),nh=n("Example:"),sh=l(),k(Xn.$$.fragment),ah=l(),k(Yn.$$.fragment),Ci=l(),Qt=a("h2"),To=a("a"),Dr=a("span"),k(Zn.$$.fragment),rh=l(),$r=a("span"),ih=n("TFDebertaModel"),ji=l(),Ne=a("div"),k(es.$$.fragment),lh=l(),ts=a("p"),dh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),os=a("a"),ch=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ph=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hh=l(),ns=a("p"),fh=n("This model is also a "),ss=a("a"),mh=n("tf.keras.Model"),uh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gh=l(),k(wo.$$.fragment),_h=l(),Qe=a("div"),k(as.$$.fragment),bh=l(),Gt=a("p"),kh=n("The "),oa=a("a"),Th=n("TFDebertaModel"),wh=n(" forward method, overrides the "),Er=a("code"),vh=n("__call__"),yh=n(" special method."),Dh=l(),k(vo.$$.fragment),$h=l(),Fr=a("p"),Eh=n("Example:"),Fh=l(),k(rs.$$.fragment),xi=l(),Kt=a("h2"),yo=a("a"),qr=a("span"),k(is.$$.fragment),qh=l(),zr=a("span"),zh=n("TFDebertaPreTrainedModel"),Pi=l(),pt=a("div"),k(ls.$$.fragment),Mh=l(),Mr=a("p"),Ch=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),jh=l(),nt=a("div"),k(ds.$$.fragment),xh=l(),Cr=a("p"),Ph=n("Calls the model on new inputs and returns the outputs as tensors."),Rh=l(),cs=a("p"),Bh=n("In this case "),jr=a("code"),Ah=n("call()"),Lh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Ih=l(),et=a("p"),Oh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),xr=a("code"),Sh=n("tf.keras.Model"),Nh=n(`.
To call a model on an input, always use the `),Pr=a("code"),Wh=n("__call__()"),Hh=n(` method,
i.e. `),Rr=a("code"),Uh=n("model(inputs)"),Qh=n(", which relies on the underlying "),Br=a("code"),Gh=n("call()"),Kh=n(" method."),Ri=l(),Vt=a("h2"),Do=a("a"),Ar=a("span"),k(ps.$$.fragment),Vh=l(),Lr=a("span"),Jh=n("TFDebertaForMaskedLM"),Bi=l(),We=a("div"),k(hs.$$.fragment),Xh=l(),Jt=a("p"),Yh=n("DeBERTa Model with a "),Ir=a("code"),Zh=n("language modeling"),ef=n(` head on top.
The DeBERTa model was proposed in `),fs=a("a"),tf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),of=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nf=l(),ms=a("p"),sf=n("This model is also a "),us=a("a"),af=n("tf.keras.Model"),rf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf=l(),k($o.$$.fragment),df=l(),Ge=a("div"),k(gs.$$.fragment),cf=l(),Xt=a("p"),pf=n("The "),na=a("a"),hf=n("TFDebertaForMaskedLM"),ff=n(" forward method, overrides the "),Or=a("code"),mf=n("__call__"),uf=n(" special method."),gf=l(),k(Eo.$$.fragment),_f=l(),Sr=a("p"),bf=n("Example:"),kf=l(),k(_s.$$.fragment),Ai=l(),Yt=a("h2"),Fo=a("a"),Nr=a("span"),k(bs.$$.fragment),Tf=l(),Wr=a("span"),wf=n("TFDebertaForSequenceClassification"),Li=l(),Me=a("div"),k(ks.$$.fragment),vf=l(),Hr=a("p"),yf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Df=l(),Ts=a("p"),$f=n("The DeBERTa model was proposed in "),ws=a("a"),Ef=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ff=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),qf=l(),vs=a("p"),zf=n("This model is also a "),ys=a("a"),Mf=n("tf.keras.Model"),Cf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jf=l(),k(qo.$$.fragment),xf=l(),Ke=a("div"),k(Ds.$$.fragment),Pf=l(),Zt=a("p"),Rf=n("The "),sa=a("a"),Bf=n("TFDebertaForSequenceClassification"),Af=n(" forward method, overrides the "),Ur=a("code"),Lf=n("__call__"),If=n(" special method."),Of=l(),k(zo.$$.fragment),Sf=l(),Qr=a("p"),Nf=n("Example:"),Wf=l(),k($s.$$.fragment),Ii=l(),eo=a("h2"),Mo=a("a"),Gr=a("span"),k(Es.$$.fragment),Hf=l(),Kr=a("span"),Uf=n("TFDebertaForTokenClassification"),Oi=l(),Ce=a("div"),k(Fs.$$.fragment),Qf=l(),Vr=a("p"),Gf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kf=l(),qs=a("p"),Vf=n("The DeBERTa model was proposed in "),zs=a("a"),Jf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yf=l(),Ms=a("p"),Zf=n("This model is also a "),Cs=a("a"),em=n("tf.keras.Model"),tm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),om=l(),k(Co.$$.fragment),nm=l(),Ve=a("div"),k(js.$$.fragment),sm=l(),to=a("p"),am=n("The "),aa=a("a"),rm=n("TFDebertaForTokenClassification"),im=n(" forward method, overrides the "),Jr=a("code"),lm=n("__call__"),dm=n(" special method."),cm=l(),k(jo.$$.fragment),pm=l(),Xr=a("p"),hm=n("Example:"),fm=l(),k(xs.$$.fragment),Si=l(),oo=a("h2"),xo=a("a"),Yr=a("span"),k(Ps.$$.fragment),mm=l(),Zr=a("span"),um=n("TFDebertaForQuestionAnswering"),Ni=l(),je=a("div"),k(Rs.$$.fragment),gm=l(),no=a("p"),_m=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=a("code"),bm=n("span start logits"),km=n(" and "),ti=a("code"),Tm=n("span end logits"),wm=n(")."),vm=l(),Bs=a("p"),ym=n("The DeBERTa model was proposed in "),As=a("a"),Dm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$m=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Em=l(),Ls=a("p"),Fm=n("This model is also a "),Is=a("a"),qm=n("tf.keras.Model"),zm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mm=l(),k(Po.$$.fragment),Cm=l(),Je=a("div"),k(Os.$$.fragment),jm=l(),so=a("p"),xm=n("The "),ra=a("a"),Pm=n("TFDebertaForQuestionAnswering"),Rm=n(" forward method, overrides the "),oi=a("code"),Bm=n("__call__"),Am=n(" special method."),Lm=l(),k(Ro.$$.fragment),Im=l(),ni=a("p"),Om=n("Example:"),Sm=l(),k(Ss.$$.fragment),this.h()},l(o){const m=v_('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),q=d(o),u=r(o,"H1",{class:!0});var Ns=i(u);g=r(Ns,"A",{id:!0,class:!0,href:!0});var si=i(g);$=r(si,"SPAN",{});var ai=i($);T(b.$$.fragment,ai),ai.forEach(t),si.forEach(t),_=d(Ns),F=r(Ns,"SPAN",{});var ri=i(F);he=s(ri,"DeBERTa"),ri.forEach(t),Ns.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var Ws=i(z);Y=r(Ws,"A",{id:!0,class:!0,href:!0});var ii=i(Y);L=r(ii,"SPAN",{});var li=i(L);T(ee.$$.fragment,li),li.forEach(t),ii.forEach(t),fe=d(Ws),I=r(Ws,"SPAN",{});var di=i(I);me=s(di,"Overview"),di.forEach(t),Ws.forEach(t),le=d(o),N=r(o,"P",{});var Hs=i(N);B=s(Hs,"The DeBERTa model was proposed in "),te=r(Hs,"A",{href:!0,rel:!0});var ci=i(te);Z=s(ci,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ci.forEach(t),M=s(Hs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
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
pre-trained models will be made publicly available at `),A=r(Us,"A",{href:!0,rel:!0});var mi=i(A);ge=s(mi,"https://github.com/microsoft/DeBERTa"),mi.forEach(t),_e=s(Us,"."),Us.forEach(t),fi.forEach(t),O=d(o),K=r(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),x=r(Bo,"A",{href:!0,rel:!0});var Nm=i(x);ke=s(Nm,"DeBERTa"),Nm.forEach(t),U=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=r(Bo,"A",{href:!0,rel:!0});var Wm=i(oe);p=s(Wm,"kamalkraj"),Wm.forEach(t),E=s(Bo," . The original code can be found "),V=r(Bo,"A",{href:!0,rel:!0});var Hm=i(V);Ee=s(Hm,"here"),Hm.forEach(t),Fe=s(Bo,"."),Bo.forEach(t),R=d(o),pe=r(o,"H2",{class:!0});var Hi=i(pe);Te=r(Hi,"A",{id:!0,class:!0,href:!0});var Um=i(Te);ye=r(Um,"SPAN",{});var Qm=i(ye);T(P.$$.fragment,Qm),Qm.forEach(t),Um.forEach(t),Q=d(Hi),De=r(Hi,"SPAN",{});var Gm=i(De);qe=s(Gm,"DebertaConfig"),Gm.forEach(t),Hi.forEach(t),S=d(o),re=r(o,"DIV",{class:!0});var ia=i(re);T(ve.$$.fragment,ia),we=d(ia),ie=r(ia,"P",{});var Ao=i(ie);zl=s(Ao,"This is the configuration class to store the configuration of a "),Qs=r(Ao,"A",{href:!0});var Km=i(Qs);Ml=s(Km,"DebertaModel"),Km.forEach(t),Cl=s(Ao," or a "),Gs=r(Ao,"A",{href:!0});var Vm=i(Gs);jl=s(Vm,"TFDebertaModel"),Vm.forEach(t),xl=s(Ao,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Ao,"A",{href:!0,rel:!0});var Jm=i(Ho);Pl=s(Jm,"microsoft/deberta-base"),Jm.forEach(t),Rl=s(Ao," architecture."),Ao.forEach(t),Bl=d(ia),Et=r(ia,"P",{});var la=i(Et);Al=s(la,"Configuration objects inherit from "),Ks=r(la,"A",{href:!0});var Xm=i(Ks);Ll=s(Xm,"PretrainedConfig"),Xm.forEach(t),Il=s(la,` and can be used to control the model outputs. Read the
documentation from `),Vs=r(la,"A",{href:!0});var Ym=i(Vs);Ol=s(Ym,"PretrainedConfig"),Ym.forEach(t),Sl=s(la," for more information."),la.forEach(t),ia.forEach(t),ui=d(o),Ft=r(o,"H2",{class:!0});var Ui=i(Ft);ao=r(Ui,"A",{id:!0,class:!0,href:!0});var Zm=i(ao);za=r(Zm,"SPAN",{});var eu=i(za);T(Uo.$$.fragment,eu),eu.forEach(t),Zm.forEach(t),Nl=d(Ui),Ma=r(Ui,"SPAN",{});var tu=i(Ma);Wl=s(tu,"DebertaTokenizer"),tu.forEach(t),Ui.forEach(t),gi=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);T(Qo.$$.fragment,st),Hl=d(st),Ca=r(st,"P",{});var ou=i(Ca);Ul=s(ou,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),ou.forEach(t),Ql=d(st),ht=r(st,"DIV",{class:!0});var da=i(ht);T(Go.$$.fragment,da),Gl=d(da),ja=r(da,"P",{});var nu=i(ja);Kl=s(nu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),nu.forEach(t),Vl=d(da),Ko=r(da,"UL",{});var Qi=i(Ko);xa=r(Qi,"LI",{});var su=i(xa);Jl=s(su,"single sequence: [CLS] X [SEP]"),su.forEach(t),Xl=d(Qi),Pa=r(Qi,"LI",{});var au=i(Pa);Yl=s(au,"pair of sequences: [CLS] A [SEP] B [SEP]"),au.forEach(t),Qi.forEach(t),da.forEach(t),Zl=d(st),ro=r(st,"DIV",{class:!0});var Gi=i(ro);T(Vo.$$.fragment,Gi),ed=d(Gi),qt=r(Gi,"P",{});var ca=i(qt);td=s(ca,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ra=r(ca,"CODE",{});var ru=i(Ra);od=s(ru,"prepare_for_model"),ru.forEach(t),nd=s(ca," or "),Ba=r(ca,"CODE",{});var iu=i(Ba);sd=s(iu,"encode_plus"),iu.forEach(t),ad=s(ca," methods."),ca.forEach(t),Gi.forEach(t),rd=d(st),tt=r(st,"DIV",{class:!0});var Lo=i(tt);T(Jo.$$.fragment,Lo),id=d(Lo),Aa=r(Lo,"P",{});var lu=i(Aa);ld=s(lu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),lu.forEach(t),dd=d(Lo),T(Xo.$$.fragment,Lo),cd=d(Lo),zt=r(Lo,"P",{});var pa=i(zt);pd=s(pa,"If "),La=r(pa,"CODE",{});var du=i(La);hd=s(du,"token_ids_1"),du.forEach(t),fd=s(pa," is "),Ia=r(pa,"CODE",{});var cu=i(Ia);md=s(cu,"None"),cu.forEach(t),ud=s(pa,", this method only returns the first portion of the mask (0s)."),pa.forEach(t),Lo.forEach(t),gd=d(st),Js=r(st,"DIV",{class:!0});var pu=i(Js);T(Yo.$$.fragment,pu),pu.forEach(t),st.forEach(t),_i=d(o),Mt=r(o,"H2",{class:!0});var Ki=i(Mt);io=r(Ki,"A",{id:!0,class:!0,href:!0});var hu=i(io);Oa=r(hu,"SPAN",{});var fu=i(Oa);T(Zo.$$.fragment,fu),fu.forEach(t),hu.forEach(t),_d=d(Ki),Sa=r(Ki,"SPAN",{});var mu=i(Sa);bd=s(mu,"DebertaTokenizerFast"),mu.forEach(t),Ki.forEach(t),bi=d(o),Xe=r(o,"DIV",{class:!0});var Io=i(Xe);T(en.$$.fragment,Io),kd=d(Io),tn=r(Io,"P",{});var Vi=i(tn);Td=s(Vi,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),Na=r(Vi,"EM",{});var uu=i(Na);wd=s(uu,"tokenizers"),uu.forEach(t),vd=s(Vi," library."),Vi.forEach(t),yd=d(Io),ft=r(Io,"DIV",{class:!0});var ha=i(ft);T(on.$$.fragment,ha),Dd=d(ha),Wa=r(ha,"P",{});var gu=i(Wa);$d=s(gu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),gu.forEach(t),Ed=d(ha),nn=r(ha,"UL",{});var Ji=i(nn);Ha=r(Ji,"LI",{});var _u=i(Ha);Fd=s(_u,"single sequence: [CLS] X [SEP]"),_u.forEach(t),qd=d(Ji),Ua=r(Ji,"LI",{});var bu=i(Ua);zd=s(bu,"pair of sequences: [CLS] A [SEP] B [SEP]"),bu.forEach(t),Ji.forEach(t),ha.forEach(t),Md=d(Io),ot=r(Io,"DIV",{class:!0});var Oo=i(ot);T(sn.$$.fragment,Oo),Cd=d(Oo),Qa=r(Oo,"P",{});var ku=i(Qa);jd=s(ku,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),ku.forEach(t),xd=d(Oo),T(an.$$.fragment,Oo),Pd=d(Oo),Ct=r(Oo,"P",{});var fa=i(Ct);Rd=s(fa,"If "),Ga=r(fa,"CODE",{});var Tu=i(Ga);Bd=s(Tu,"token_ids_1"),Tu.forEach(t),Ad=s(fa," is "),Ka=r(fa,"CODE",{});var wu=i(Ka);Ld=s(wu,"None"),wu.forEach(t),Id=s(fa,", this method only returns the first portion of the mask (0s)."),fa.forEach(t),Oo.forEach(t),Io.forEach(t),ki=d(o),jt=r(o,"H2",{class:!0});var Xi=i(jt);lo=r(Xi,"A",{id:!0,class:!0,href:!0});var vu=i(lo);Va=r(vu,"SPAN",{});var yu=i(Va);T(rn.$$.fragment,yu),yu.forEach(t),vu.forEach(t),Od=d(Xi),Ja=r(Xi,"SPAN",{});var Du=i(Ja);Sd=s(Du,"DebertaModel"),Du.forEach(t),Xi.forEach(t),Ti=d(o),Ye=r(o,"DIV",{class:!0});var So=i(Ye);T(ln.$$.fragment,So),Nd=d(So),dn=r(So,"P",{});var Yi=i(dn);Wd=s(Yi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),cn=r(Yi,"A",{href:!0,rel:!0});var $u=i(cn);Hd=s($u,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$u.forEach(t),Ud=s(Yi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yi.forEach(t),Qd=d(So),pn=r(So,"P",{});var Zi=i(pn);Gd=s(Zi,"This model is also a PyTorch "),hn=r(Zi,"A",{href:!0,rel:!0});var Eu=i(hn);Kd=s(Eu,"torch.nn.Module"),Eu.forEach(t),Vd=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),Jd=d(So),Ue=r(So,"DIV",{class:!0});var mt=i(Ue);T(fn.$$.fragment,mt),Xd=d(mt),xt=r(mt,"P",{});var ma=i(xt);Yd=s(ma,"The "),Xs=r(ma,"A",{href:!0});var Fu=i(Xs);Zd=s(Fu,"DebertaModel"),Fu.forEach(t),ec=s(ma," forward method, overrides the "),Xa=r(ma,"CODE",{});var qu=i(Xa);tc=s(qu,"__call__"),qu.forEach(t),oc=s(ma," special method."),ma.forEach(t),nc=d(mt),T(co.$$.fragment,mt),sc=d(mt),Ya=r(mt,"P",{});var zu=i(Ya);ac=s(zu,"Example:"),zu.forEach(t),rc=d(mt),T(mn.$$.fragment,mt),mt.forEach(t),So.forEach(t),wi=d(o),Pt=r(o,"H2",{class:!0});var el=i(Pt);po=r(el,"A",{id:!0,class:!0,href:!0});var Mu=i(po);Za=r(Mu,"SPAN",{});var Cu=i(Za);T(un.$$.fragment,Cu),Cu.forEach(t),Mu.forEach(t),ic=d(el),er=r(el,"SPAN",{});var ju=i(er);lc=s(ju,"DebertaPreTrainedModel"),ju.forEach(t),el.forEach(t),vi=d(o),Rt=r(o,"DIV",{class:!0});var tl=i(Rt);T(gn.$$.fragment,tl),dc=d(tl),tr=r(tl,"P",{});var xu=i(tr);cc=s(xu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),xu.forEach(t),tl.forEach(t),yi=d(o),Bt=r(o,"H2",{class:!0});var ol=i(Bt);ho=r(ol,"A",{id:!0,class:!0,href:!0});var Pu=i(ho);or=r(Pu,"SPAN",{});var Ru=i(or);T(_n.$$.fragment,Ru),Ru.forEach(t),Pu.forEach(t),pc=d(ol),nr=r(ol,"SPAN",{});var Bu=i(nr);hc=s(Bu,"DebertaForMaskedLM"),Bu.forEach(t),ol.forEach(t),Di=d(o),Ze=r(o,"DIV",{class:!0});var No=i(Ze);T(bn.$$.fragment,No),fc=d(No),At=r(No,"P",{});var ua=i(At);mc=s(ua,"DeBERTa Model with a "),sr=r(ua,"CODE",{});var Au=i(sr);uc=s(Au,"language modeling"),Au.forEach(t),gc=s(ua,` head on top.
The DeBERTa model was proposed in `),kn=r(ua,"A",{href:!0,rel:!0});var Lu=i(kn);_c=s(Lu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lu.forEach(t),bc=s(ua,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ua.forEach(t),kc=d(No),Tn=r(No,"P",{});var nl=i(Tn);Tc=s(nl,"This model is also a PyTorch "),wn=r(nl,"A",{href:!0,rel:!0});var Iu=i(wn);wc=s(Iu,"torch.nn.Module"),Iu.forEach(t),vc=s(nl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),nl.forEach(t),yc=d(No),Re=r(No,"DIV",{class:!0});var at=i(Re);T(vn.$$.fragment,at),Dc=d(at),Lt=r(at,"P",{});var ga=i(Lt);$c=s(ga,"The "),Ys=r(ga,"A",{href:!0});var Ou=i(Ys);Ec=s(Ou,"DebertaForMaskedLM"),Ou.forEach(t),Fc=s(ga," forward method, overrides the "),ar=r(ga,"CODE",{});var Su=i(ar);qc=s(Su,"__call__"),Su.forEach(t),zc=s(ga," special method."),ga.forEach(t),Mc=d(at),T(fo.$$.fragment,at),Cc=d(at),rr=r(at,"P",{});var Nu=i(rr);jc=s(Nu,"Example:"),Nu.forEach(t),xc=d(at),T(yn.$$.fragment,at),Pc=d(at),T(Dn.$$.fragment,at),at.forEach(t),No.forEach(t),$i=d(o),It=r(o,"H2",{class:!0});var sl=i(It);mo=r(sl,"A",{id:!0,class:!0,href:!0});var Wu=i(mo);ir=r(Wu,"SPAN",{});var Hu=i(ir);T($n.$$.fragment,Hu),Hu.forEach(t),Wu.forEach(t),Rc=d(sl),lr=r(sl,"SPAN",{});var Uu=i(lr);Bc=s(Uu,"DebertaForSequenceClassification"),Uu.forEach(t),sl.forEach(t),Ei=d(o),Ie=r(o,"DIV",{class:!0});var ut=i(Ie);T(En.$$.fragment,ut),Ac=d(ut),dr=r(ut,"P",{});var Qu=i(dr);Lc=s(Qu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qu.forEach(t),Ic=d(ut),Fn=r(ut,"P",{});var al=i(Fn);Oc=s(al,"The DeBERTa model was proposed in "),qn=r(al,"A",{href:!0,rel:!0});var Gu=i(qn);Sc=s(Gu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gu.forEach(t),Nc=s(al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),al.forEach(t),Wc=d(ut),zn=r(ut,"P",{});var rl=i(zn);Hc=s(rl,"This model is also a PyTorch "),Mn=r(rl,"A",{href:!0,rel:!0});var Ku=i(Mn);Uc=s(Ku,"torch.nn.Module"),Ku.forEach(t),Qc=s(rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rl.forEach(t),Gc=d(ut),$e=r(ut,"DIV",{class:!0});var Le=i($e);T(Cn.$$.fragment,Le),Kc=d(Le),Ot=r(Le,"P",{});var _a=i(Ot);Vc=s(_a,"The "),Zs=r(_a,"A",{href:!0});var Vu=i(Zs);Jc=s(Vu,"DebertaForSequenceClassification"),Vu.forEach(t),Xc=s(_a," forward method, overrides the "),cr=r(_a,"CODE",{});var Ju=i(cr);Yc=s(Ju,"__call__"),Ju.forEach(t),Zc=s(_a," special method."),_a.forEach(t),ep=d(Le),T(uo.$$.fragment,Le),tp=d(Le),pr=r(Le,"P",{});var Xu=i(pr);op=s(Xu,"Example of single-label classification:"),Xu.forEach(t),np=d(Le),T(jn.$$.fragment,Le),sp=d(Le),T(xn.$$.fragment,Le),ap=d(Le),hr=r(Le,"P",{});var Yu=i(hr);rp=s(Yu,"Example of multi-label classification:"),Yu.forEach(t),ip=d(Le),T(Pn.$$.fragment,Le),Le.forEach(t),ut.forEach(t),Fi=d(o),St=r(o,"H2",{class:!0});var il=i(St);go=r(il,"A",{id:!0,class:!0,href:!0});var Zu=i(go);fr=r(Zu,"SPAN",{});var eg=i(fr);T(Rn.$$.fragment,eg),eg.forEach(t),Zu.forEach(t),lp=d(il),mr=r(il,"SPAN",{});var tg=i(mr);dp=s(tg,"DebertaForTokenClassification"),tg.forEach(t),il.forEach(t),qi=d(o),Oe=r(o,"DIV",{class:!0});var gt=i(Oe);T(Bn.$$.fragment,gt),cp=d(gt),ur=r(gt,"P",{});var og=i(ur);pp=s(og,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),og.forEach(t),hp=d(gt),An=r(gt,"P",{});var ll=i(An);fp=s(ll,"The DeBERTa model was proposed in "),Ln=r(ll,"A",{href:!0,rel:!0});var ng=i(Ln);mp=s(ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ng.forEach(t),up=s(ll,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ll.forEach(t),gp=d(gt),In=r(gt,"P",{});var dl=i(In);_p=s(dl,"This model is also a PyTorch "),On=r(dl,"A",{href:!0,rel:!0});var sg=i(On);bp=s(sg,"torch.nn.Module"),sg.forEach(t),kp=s(dl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),dl.forEach(t),Tp=d(gt),Be=r(gt,"DIV",{class:!0});var rt=i(Be);T(Sn.$$.fragment,rt),wp=d(rt),Nt=r(rt,"P",{});var ba=i(Nt);vp=s(ba,"The "),ea=r(ba,"A",{href:!0});var ag=i(ea);yp=s(ag,"DebertaForTokenClassification"),ag.forEach(t),Dp=s(ba," forward method, overrides the "),gr=r(ba,"CODE",{});var rg=i(gr);$p=s(rg,"__call__"),rg.forEach(t),Ep=s(ba," special method."),ba.forEach(t),Fp=d(rt),T(_o.$$.fragment,rt),qp=d(rt),_r=r(rt,"P",{});var ig=i(_r);zp=s(ig,"Example:"),ig.forEach(t),Mp=d(rt),T(Nn.$$.fragment,rt),Cp=d(rt),T(Wn.$$.fragment,rt),rt.forEach(t),gt.forEach(t),zi=d(o),Wt=r(o,"H2",{class:!0});var cl=i(Wt);bo=r(cl,"A",{id:!0,class:!0,href:!0});var lg=i(bo);br=r(lg,"SPAN",{});var dg=i(br);T(Hn.$$.fragment,dg),dg.forEach(t),lg.forEach(t),jp=d(cl),kr=r(cl,"SPAN",{});var cg=i(kr);xp=s(cg,"DebertaForQuestionAnswering"),cg.forEach(t),cl.forEach(t),Mi=d(o),Se=r(o,"DIV",{class:!0});var _t=i(Se);T(Un.$$.fragment,_t),Pp=d(_t),Ht=r(_t,"P",{});var ka=i(Ht);Rp=s(ka,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=r(ka,"CODE",{});var pg=i(Tr);Bp=s(pg,"span start logits"),pg.forEach(t),Ap=s(ka," and "),wr=r(ka,"CODE",{});var hg=i(wr);Lp=s(hg,"span end logits"),hg.forEach(t),Ip=s(ka,")."),ka.forEach(t),Op=d(_t),Qn=r(_t,"P",{});var pl=i(Qn);Sp=s(pl,"The DeBERTa model was proposed in "),Gn=r(pl,"A",{href:!0,rel:!0});var fg=i(Gn);Np=s(fg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fg.forEach(t),Wp=s(pl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pl.forEach(t),Hp=d(_t),Kn=r(_t,"P",{});var hl=i(Kn);Up=s(hl,"This model is also a PyTorch "),Vn=r(hl,"A",{href:!0,rel:!0});var mg=i(Vn);Qp=s(mg,"torch.nn.Module"),mg.forEach(t),Gp=s(hl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),hl.forEach(t),Kp=d(_t),Ae=r(_t,"DIV",{class:!0});var it=i(Ae);T(Jn.$$.fragment,it),Vp=d(it),Ut=r(it,"P",{});var Ta=i(Ut);Jp=s(Ta,"The "),ta=r(Ta,"A",{href:!0});var ug=i(ta);Xp=s(ug,"DebertaForQuestionAnswering"),ug.forEach(t),Yp=s(Ta," forward method, overrides the "),vr=r(Ta,"CODE",{});var gg=i(vr);Zp=s(gg,"__call__"),gg.forEach(t),eh=s(Ta," special method."),Ta.forEach(t),th=d(it),T(ko.$$.fragment,it),oh=d(it),yr=r(it,"P",{});var _g=i(yr);nh=s(_g,"Example:"),_g.forEach(t),sh=d(it),T(Xn.$$.fragment,it),ah=d(it),T(Yn.$$.fragment,it),it.forEach(t),_t.forEach(t),Ci=d(o),Qt=r(o,"H2",{class:!0});var fl=i(Qt);To=r(fl,"A",{id:!0,class:!0,href:!0});var bg=i(To);Dr=r(bg,"SPAN",{});var kg=i(Dr);T(Zn.$$.fragment,kg),kg.forEach(t),bg.forEach(t),rh=d(fl),$r=r(fl,"SPAN",{});var Tg=i($r);ih=s(Tg,"TFDebertaModel"),Tg.forEach(t),fl.forEach(t),ji=d(o),Ne=r(o,"DIV",{class:!0});var bt=i(Ne);T(es.$$.fragment,bt),lh=d(bt),ts=r(bt,"P",{});var ml=i(ts);dh=s(ml,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),os=r(ml,"A",{href:!0,rel:!0});var wg=i(os);ch=s(wg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wg.forEach(t),ph=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),hh=d(bt),ns=r(bt,"P",{});var ul=i(ns);fh=s(ul,"This model is also a "),ss=r(ul,"A",{href:!0,rel:!0});var vg=i(ss);mh=s(vg,"tf.keras.Model"),vg.forEach(t),uh=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),gh=d(bt),T(wo.$$.fragment,bt),_h=d(bt),Qe=r(bt,"DIV",{class:!0});var kt=i(Qe);T(as.$$.fragment,kt),bh=d(kt),Gt=r(kt,"P",{});var wa=i(Gt);kh=s(wa,"The "),oa=r(wa,"A",{href:!0});var yg=i(oa);Th=s(yg,"TFDebertaModel"),yg.forEach(t),wh=s(wa," forward method, overrides the "),Er=r(wa,"CODE",{});var Dg=i(Er);vh=s(Dg,"__call__"),Dg.forEach(t),yh=s(wa," special method."),wa.forEach(t),Dh=d(kt),T(vo.$$.fragment,kt),$h=d(kt),Fr=r(kt,"P",{});var $g=i(Fr);Eh=s($g,"Example:"),$g.forEach(t),Fh=d(kt),T(rs.$$.fragment,kt),kt.forEach(t),bt.forEach(t),xi=d(o),Kt=r(o,"H2",{class:!0});var gl=i(Kt);yo=r(gl,"A",{id:!0,class:!0,href:!0});var Eg=i(yo);qr=r(Eg,"SPAN",{});var Fg=i(qr);T(is.$$.fragment,Fg),Fg.forEach(t),Eg.forEach(t),qh=d(gl),zr=r(gl,"SPAN",{});var qg=i(zr);zh=s(qg,"TFDebertaPreTrainedModel"),qg.forEach(t),gl.forEach(t),Pi=d(o),pt=r(o,"DIV",{class:!0});var va=i(pt);T(ls.$$.fragment,va),Mh=d(va),Mr=r(va,"P",{});var zg=i(Mr);Ch=s(zg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),zg.forEach(t),jh=d(va),nt=r(va,"DIV",{class:!0});var Wo=i(nt);T(ds.$$.fragment,Wo),xh=d(Wo),Cr=r(Wo,"P",{});var Mg=i(Cr);Ph=s(Mg,"Calls the model on new inputs and returns the outputs as tensors."),Mg.forEach(t),Rh=d(Wo),cs=r(Wo,"P",{});var _l=i(cs);Bh=s(_l,"In this case "),jr=r(_l,"CODE",{});var Cg=i(jr);Ah=s(Cg,"call()"),Cg.forEach(t),Lh=s(_l,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),_l.forEach(t),Ih=d(Wo),et=r(Wo,"P",{});var Tt=i(et);Oh=s(Tt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),xr=r(Tt,"CODE",{});var jg=i(xr);Sh=s(jg,"tf.keras.Model"),jg.forEach(t),Nh=s(Tt,`.
To call a model on an input, always use the `),Pr=r(Tt,"CODE",{});var xg=i(Pr);Wh=s(xg,"__call__()"),xg.forEach(t),Hh=s(Tt,` method,
i.e. `),Rr=r(Tt,"CODE",{});var Pg=i(Rr);Uh=s(Pg,"model(inputs)"),Pg.forEach(t),Qh=s(Tt,", which relies on the underlying "),Br=r(Tt,"CODE",{});var Rg=i(Br);Gh=s(Rg,"call()"),Rg.forEach(t),Kh=s(Tt," method."),Tt.forEach(t),Wo.forEach(t),va.forEach(t),Ri=d(o),Vt=r(o,"H2",{class:!0});var bl=i(Vt);Do=r(bl,"A",{id:!0,class:!0,href:!0});var Bg=i(Do);Ar=r(Bg,"SPAN",{});var Ag=i(Ar);T(ps.$$.fragment,Ag),Ag.forEach(t),Bg.forEach(t),Vh=d(bl),Lr=r(bl,"SPAN",{});var Lg=i(Lr);Jh=s(Lg,"TFDebertaForMaskedLM"),Lg.forEach(t),bl.forEach(t),Bi=d(o),We=r(o,"DIV",{class:!0});var wt=i(We);T(hs.$$.fragment,wt),Xh=d(wt),Jt=r(wt,"P",{});var ya=i(Jt);Yh=s(ya,"DeBERTa Model with a "),Ir=r(ya,"CODE",{});var Ig=i(Ir);Zh=s(Ig,"language modeling"),Ig.forEach(t),ef=s(ya,` head on top.
The DeBERTa model was proposed in `),fs=r(ya,"A",{href:!0,rel:!0});var Og=i(fs);tf=s(Og,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Og.forEach(t),of=s(ya,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ya.forEach(t),nf=d(wt),ms=r(wt,"P",{});var kl=i(ms);sf=s(kl,"This model is also a "),us=r(kl,"A",{href:!0,rel:!0});var Sg=i(us);af=s(Sg,"tf.keras.Model"),Sg.forEach(t),rf=s(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),lf=d(wt),T($o.$$.fragment,wt),df=d(wt),Ge=r(wt,"DIV",{class:!0});var vt=i(Ge);T(gs.$$.fragment,vt),cf=d(vt),Xt=r(vt,"P",{});var Da=i(Xt);pf=s(Da,"The "),na=r(Da,"A",{href:!0});var Ng=i(na);hf=s(Ng,"TFDebertaForMaskedLM"),Ng.forEach(t),ff=s(Da," forward method, overrides the "),Or=r(Da,"CODE",{});var Wg=i(Or);mf=s(Wg,"__call__"),Wg.forEach(t),uf=s(Da," special method."),Da.forEach(t),gf=d(vt),T(Eo.$$.fragment,vt),_f=d(vt),Sr=r(vt,"P",{});var Hg=i(Sr);bf=s(Hg,"Example:"),Hg.forEach(t),kf=d(vt),T(_s.$$.fragment,vt),vt.forEach(t),wt.forEach(t),Ai=d(o),Yt=r(o,"H2",{class:!0});var Tl=i(Yt);Fo=r(Tl,"A",{id:!0,class:!0,href:!0});var Ug=i(Fo);Nr=r(Ug,"SPAN",{});var Qg=i(Nr);T(bs.$$.fragment,Qg),Qg.forEach(t),Ug.forEach(t),Tf=d(Tl),Wr=r(Tl,"SPAN",{});var Gg=i(Wr);wf=s(Gg,"TFDebertaForSequenceClassification"),Gg.forEach(t),Tl.forEach(t),Li=d(o),Me=r(o,"DIV",{class:!0});var lt=i(Me);T(ks.$$.fragment,lt),vf=d(lt),Hr=r(lt,"P",{});var Kg=i(Hr);yf=s(Kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kg.forEach(t),Df=d(lt),Ts=r(lt,"P",{});var wl=i(Ts);$f=s(wl,"The DeBERTa model was proposed in "),ws=r(wl,"A",{href:!0,rel:!0});var Vg=i(ws);Ef=s(Vg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vg.forEach(t),Ff=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),qf=d(lt),vs=r(lt,"P",{});var vl=i(vs);zf=s(vl,"This model is also a "),ys=r(vl,"A",{href:!0,rel:!0});var Jg=i(ys);Mf=s(Jg,"tf.keras.Model"),Jg.forEach(t),Cf=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),jf=d(lt),T(qo.$$.fragment,lt),xf=d(lt),Ke=r(lt,"DIV",{class:!0});var yt=i(Ke);T(Ds.$$.fragment,yt),Pf=d(yt),Zt=r(yt,"P",{});var $a=i(Zt);Rf=s($a,"The "),sa=r($a,"A",{href:!0});var Xg=i(sa);Bf=s(Xg,"TFDebertaForSequenceClassification"),Xg.forEach(t),Af=s($a," forward method, overrides the "),Ur=r($a,"CODE",{});var Yg=i(Ur);Lf=s(Yg,"__call__"),Yg.forEach(t),If=s($a," special method."),$a.forEach(t),Of=d(yt),T(zo.$$.fragment,yt),Sf=d(yt),Qr=r(yt,"P",{});var Zg=i(Qr);Nf=s(Zg,"Example:"),Zg.forEach(t),Wf=d(yt),T($s.$$.fragment,yt),yt.forEach(t),lt.forEach(t),Ii=d(o),eo=r(o,"H2",{class:!0});var yl=i(eo);Mo=r(yl,"A",{id:!0,class:!0,href:!0});var e_=i(Mo);Gr=r(e_,"SPAN",{});var t_=i(Gr);T(Es.$$.fragment,t_),t_.forEach(t),e_.forEach(t),Hf=d(yl),Kr=r(yl,"SPAN",{});var o_=i(Kr);Uf=s(o_,"TFDebertaForTokenClassification"),o_.forEach(t),yl.forEach(t),Oi=d(o),Ce=r(o,"DIV",{class:!0});var dt=i(Ce);T(Fs.$$.fragment,dt),Qf=d(dt),Vr=r(dt,"P",{});var n_=i(Vr);Gf=s(n_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),n_.forEach(t),Kf=d(dt),qs=r(dt,"P",{});var Dl=i(qs);Vf=s(Dl,"The DeBERTa model was proposed in "),zs=r(Dl,"A",{href:!0,rel:!0});var s_=i(zs);Jf=s(s_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),s_.forEach(t),Xf=s(Dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dl.forEach(t),Yf=d(dt),Ms=r(dt,"P",{});var $l=i(Ms);Zf=s($l,"This model is also a "),Cs=r($l,"A",{href:!0,rel:!0});var a_=i(Cs);em=s(a_,"tf.keras.Model"),a_.forEach(t),tm=s($l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$l.forEach(t),om=d(dt),T(Co.$$.fragment,dt),nm=d(dt),Ve=r(dt,"DIV",{class:!0});var Dt=i(Ve);T(js.$$.fragment,Dt),sm=d(Dt),to=r(Dt,"P",{});var Ea=i(to);am=s(Ea,"The "),aa=r(Ea,"A",{href:!0});var r_=i(aa);rm=s(r_,"TFDebertaForTokenClassification"),r_.forEach(t),im=s(Ea," forward method, overrides the "),Jr=r(Ea,"CODE",{});var i_=i(Jr);lm=s(i_,"__call__"),i_.forEach(t),dm=s(Ea," special method."),Ea.forEach(t),cm=d(Dt),T(jo.$$.fragment,Dt),pm=d(Dt),Xr=r(Dt,"P",{});var l_=i(Xr);hm=s(l_,"Example:"),l_.forEach(t),fm=d(Dt),T(xs.$$.fragment,Dt),Dt.forEach(t),dt.forEach(t),Si=d(o),oo=r(o,"H2",{class:!0});var El=i(oo);xo=r(El,"A",{id:!0,class:!0,href:!0});var d_=i(xo);Yr=r(d_,"SPAN",{});var c_=i(Yr);T(Ps.$$.fragment,c_),c_.forEach(t),d_.forEach(t),mm=d(El),Zr=r(El,"SPAN",{});var p_=i(Zr);um=s(p_,"TFDebertaForQuestionAnswering"),p_.forEach(t),El.forEach(t),Ni=d(o),je=r(o,"DIV",{class:!0});var ct=i(je);T(Rs.$$.fragment,ct),gm=d(ct),no=r(ct,"P",{});var Fa=i(no);_m=s(Fa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=r(Fa,"CODE",{});var h_=i(ei);bm=s(h_,"span start logits"),h_.forEach(t),km=s(Fa," and "),ti=r(Fa,"CODE",{});var f_=i(ti);Tm=s(f_,"span end logits"),f_.forEach(t),wm=s(Fa,")."),Fa.forEach(t),vm=d(ct),Bs=r(ct,"P",{});var Fl=i(Bs);ym=s(Fl,"The DeBERTa model was proposed in "),As=r(Fl,"A",{href:!0,rel:!0});var m_=i(As);Dm=s(m_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),m_.forEach(t),$m=s(Fl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Fl.forEach(t),Em=d(ct),Ls=r(ct,"P",{});var ql=i(Ls);Fm=s(ql,"This model is also a "),Is=r(ql,"A",{href:!0,rel:!0});var u_=i(Is);qm=s(u_,"tf.keras.Model"),u_.forEach(t),zm=s(ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql.forEach(t),Mm=d(ct),T(Po.$$.fragment,ct),Cm=d(ct),Je=r(ct,"DIV",{class:!0});var $t=i(Je);T(Os.$$.fragment,$t),jm=d($t),so=r($t,"P",{});var qa=i(so);xm=s(qa,"The "),ra=r(qa,"A",{href:!0});var g_=i(ra);Pm=s(g_,"TFDebertaForQuestionAnswering"),g_.forEach(t),Rm=s(qa," forward method, overrides the "),oi=r(qa,"CODE",{});var __=i(oi);Bm=s(__,"__call__"),__.forEach(t),Am=s(qa," special method."),qa.forEach(t),Lm=d($t),T(Ro.$$.fragment,$t),Im=d($t),ni=r($t,"P",{});var b_=i(ni);Om=s(b_,"Example:"),b_.forEach(t),Sm=d($t),T(Ss.$$.fragment,$t),$t.forEach(t),ct.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(O_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(A,"href","https://github.com/microsoft/DeBERTa"),c(A,"rel","nofollow"),c(x,"href","https://huggingface.co/DeBERTa"),c(x,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(Te,"id","transformers.DebertaConfig"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Qs,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaModel"),c(Gs,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Ks,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Vs,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(ht,"class","docstring"),c(ro,"class","docstring"),c(tt,"class","docstring"),c(Js,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(ft,"class","docstring"),c(ot,"class","docstring"),c(Xe,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(jt,"class","relative group"),c(cn,"href","https://arxiv.org/abs/2006.03654"),c(cn,"rel","nofollow"),c(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(hn,"rel","nofollow"),c(Xs,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaModel"),c(Ue,"class","docstring"),c(Ye,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(Pt,"class","relative group"),c(Rt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(kn,"href","https://arxiv.org/abs/2006.03654"),c(kn,"rel","nofollow"),c(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(wn,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Re,"class","docstring"),c(Ze,"class","docstring"),c(mo,"id","transformers.DebertaForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c(qn,"href","https://arxiv.org/abs/2006.03654"),c(qn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(Zs,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c($e,"class","docstring"),c(Ie,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(St,"class","relative group"),c(Ln,"href","https://arxiv.org/abs/2006.03654"),c(Ln,"rel","nofollow"),c(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(On,"rel","nofollow"),c(ea,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Be,"class","docstring"),c(Oe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Gn,"href","https://arxiv.org/abs/2006.03654"),c(Gn,"rel","nofollow"),c(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vn,"rel","nofollow"),c(ta,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(Ae,"class","docstring"),c(Se,"class","docstring"),c(To,"id","transformers.TFDebertaModel"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(os,"href","https://arxiv.org/abs/2006.03654"),c(os,"rel","nofollow"),c(ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ss,"rel","nofollow"),c(oa,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaModel"),c(Qe,"class","docstring"),c(Ne,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(pt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(fs,"href","https://arxiv.org/abs/2006.03654"),c(fs,"rel","nofollow"),c(us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(us,"rel","nofollow"),c(na,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ge,"class","docstring"),c(We,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(ws,"href","https://arxiv.org/abs/2006.03654"),c(ws,"rel","nofollow"),c(ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ys,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Ke,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(zs,"href","https://arxiv.org/abs/2006.03654"),c(zs,"rel","nofollow"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ve,"class","docstring"),c(Ce,"class","docstring"),c(xo,"id","transformers.TFDebertaForQuestionAnswering"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(As,"href","https://arxiv.org/abs/2006.03654"),c(As,"rel","nofollow"),c(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Is,"rel","nofollow"),c(ra,"href","/docs/transformers/pr_16363/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Je,"class","docstring"),c(je,"class","docstring")},m(o,m){e(document.head,h),f(o,q,m),f(o,u,m),e(u,g),e(g,$),w(b,$,null),e(u,_),e(u,F),e(F,he),f(o,X,m),f(o,z,m),e(z,Y),e(Y,L),w(ee,L,null),e(z,fe),e(z,I),e(I,me),f(o,le,m),f(o,N,m),e(N,B),e(N,te),e(te,Z),e(N,M),f(o,j,m),f(o,ne,m),e(ne,W),f(o,de,m),f(o,se,m),e(se,H),f(o,ce,m),f(o,ae,m),e(ae,C),e(C,ue),e(C,A),e(A,ge),e(C,_e),f(o,O,m),f(o,K,m),e(K,be),e(K,x),e(x,ke),e(K,U),e(K,oe),e(oe,p),e(K,E),e(K,V),e(V,Ee),e(K,Fe),f(o,R,m),f(o,pe,m),e(pe,Te),e(Te,ye),w(P,ye,null),e(pe,Q),e(pe,De),e(De,qe),f(o,S,m),f(o,re,m),w(ve,re,null),e(re,we),e(re,ie),e(ie,zl),e(ie,Qs),e(Qs,Ml),e(ie,Cl),e(ie,Gs),e(Gs,jl),e(ie,xl),e(ie,Ho),e(Ho,Pl),e(ie,Rl),e(re,Bl),e(re,Et),e(Et,Al),e(Et,Ks),e(Ks,Ll),e(Et,Il),e(Et,Vs),e(Vs,Ol),e(Et,Sl),f(o,ui,m),f(o,Ft,m),e(Ft,ao),e(ao,za),w(Uo,za,null),e(Ft,Nl),e(Ft,Ma),e(Ma,Wl),f(o,gi,m),f(o,ze,m),w(Qo,ze,null),e(ze,Hl),e(ze,Ca),e(Ca,Ul),e(ze,Ql),e(ze,ht),w(Go,ht,null),e(ht,Gl),e(ht,ja),e(ja,Kl),e(ht,Vl),e(ht,Ko),e(Ko,xa),e(xa,Jl),e(Ko,Xl),e(Ko,Pa),e(Pa,Yl),e(ze,Zl),e(ze,ro),w(Vo,ro,null),e(ro,ed),e(ro,qt),e(qt,td),e(qt,Ra),e(Ra,od),e(qt,nd),e(qt,Ba),e(Ba,sd),e(qt,ad),e(ze,rd),e(ze,tt),w(Jo,tt,null),e(tt,id),e(tt,Aa),e(Aa,ld),e(tt,dd),w(Xo,tt,null),e(tt,cd),e(tt,zt),e(zt,pd),e(zt,La),e(La,hd),e(zt,fd),e(zt,Ia),e(Ia,md),e(zt,ud),e(ze,gd),e(ze,Js),w(Yo,Js,null),f(o,_i,m),f(o,Mt,m),e(Mt,io),e(io,Oa),w(Zo,Oa,null),e(Mt,_d),e(Mt,Sa),e(Sa,bd),f(o,bi,m),f(o,Xe,m),w(en,Xe,null),e(Xe,kd),e(Xe,tn),e(tn,Td),e(tn,Na),e(Na,wd),e(tn,vd),e(Xe,yd),e(Xe,ft),w(on,ft,null),e(ft,Dd),e(ft,Wa),e(Wa,$d),e(ft,Ed),e(ft,nn),e(nn,Ha),e(Ha,Fd),e(nn,qd),e(nn,Ua),e(Ua,zd),e(Xe,Md),e(Xe,ot),w(sn,ot,null),e(ot,Cd),e(ot,Qa),e(Qa,jd),e(ot,xd),w(an,ot,null),e(ot,Pd),e(ot,Ct),e(Ct,Rd),e(Ct,Ga),e(Ga,Bd),e(Ct,Ad),e(Ct,Ka),e(Ka,Ld),e(Ct,Id),f(o,ki,m),f(o,jt,m),e(jt,lo),e(lo,Va),w(rn,Va,null),e(jt,Od),e(jt,Ja),e(Ja,Sd),f(o,Ti,m),f(o,Ye,m),w(ln,Ye,null),e(Ye,Nd),e(Ye,dn),e(dn,Wd),e(dn,cn),e(cn,Hd),e(dn,Ud),e(Ye,Qd),e(Ye,pn),e(pn,Gd),e(pn,hn),e(hn,Kd),e(pn,Vd),e(Ye,Jd),e(Ye,Ue),w(fn,Ue,null),e(Ue,Xd),e(Ue,xt),e(xt,Yd),e(xt,Xs),e(Xs,Zd),e(xt,ec),e(xt,Xa),e(Xa,tc),e(xt,oc),e(Ue,nc),w(co,Ue,null),e(Ue,sc),e(Ue,Ya),e(Ya,ac),e(Ue,rc),w(mn,Ue,null),f(o,wi,m),f(o,Pt,m),e(Pt,po),e(po,Za),w(un,Za,null),e(Pt,ic),e(Pt,er),e(er,lc),f(o,vi,m),f(o,Rt,m),w(gn,Rt,null),e(Rt,dc),e(Rt,tr),e(tr,cc),f(o,yi,m),f(o,Bt,m),e(Bt,ho),e(ho,or),w(_n,or,null),e(Bt,pc),e(Bt,nr),e(nr,hc),f(o,Di,m),f(o,Ze,m),w(bn,Ze,null),e(Ze,fc),e(Ze,At),e(At,mc),e(At,sr),e(sr,uc),e(At,gc),e(At,kn),e(kn,_c),e(At,bc),e(Ze,kc),e(Ze,Tn),e(Tn,Tc),e(Tn,wn),e(wn,wc),e(Tn,vc),e(Ze,yc),e(Ze,Re),w(vn,Re,null),e(Re,Dc),e(Re,Lt),e(Lt,$c),e(Lt,Ys),e(Ys,Ec),e(Lt,Fc),e(Lt,ar),e(ar,qc),e(Lt,zc),e(Re,Mc),w(fo,Re,null),e(Re,Cc),e(Re,rr),e(rr,jc),e(Re,xc),w(yn,Re,null),e(Re,Pc),w(Dn,Re,null),f(o,$i,m),f(o,It,m),e(It,mo),e(mo,ir),w($n,ir,null),e(It,Rc),e(It,lr),e(lr,Bc),f(o,Ei,m),f(o,Ie,m),w(En,Ie,null),e(Ie,Ac),e(Ie,dr),e(dr,Lc),e(Ie,Ic),e(Ie,Fn),e(Fn,Oc),e(Fn,qn),e(qn,Sc),e(Fn,Nc),e(Ie,Wc),e(Ie,zn),e(zn,Hc),e(zn,Mn),e(Mn,Uc),e(zn,Qc),e(Ie,Gc),e(Ie,$e),w(Cn,$e,null),e($e,Kc),e($e,Ot),e(Ot,Vc),e(Ot,Zs),e(Zs,Jc),e(Ot,Xc),e(Ot,cr),e(cr,Yc),e(Ot,Zc),e($e,ep),w(uo,$e,null),e($e,tp),e($e,pr),e(pr,op),e($e,np),w(jn,$e,null),e($e,sp),w(xn,$e,null),e($e,ap),e($e,hr),e(hr,rp),e($e,ip),w(Pn,$e,null),f(o,Fi,m),f(o,St,m),e(St,go),e(go,fr),w(Rn,fr,null),e(St,lp),e(St,mr),e(mr,dp),f(o,qi,m),f(o,Oe,m),w(Bn,Oe,null),e(Oe,cp),e(Oe,ur),e(ur,pp),e(Oe,hp),e(Oe,An),e(An,fp),e(An,Ln),e(Ln,mp),e(An,up),e(Oe,gp),e(Oe,In),e(In,_p),e(In,On),e(On,bp),e(In,kp),e(Oe,Tp),e(Oe,Be),w(Sn,Be,null),e(Be,wp),e(Be,Nt),e(Nt,vp),e(Nt,ea),e(ea,yp),e(Nt,Dp),e(Nt,gr),e(gr,$p),e(Nt,Ep),e(Be,Fp),w(_o,Be,null),e(Be,qp),e(Be,_r),e(_r,zp),e(Be,Mp),w(Nn,Be,null),e(Be,Cp),w(Wn,Be,null),f(o,zi,m),f(o,Wt,m),e(Wt,bo),e(bo,br),w(Hn,br,null),e(Wt,jp),e(Wt,kr),e(kr,xp),f(o,Mi,m),f(o,Se,m),w(Un,Se,null),e(Se,Pp),e(Se,Ht),e(Ht,Rp),e(Ht,Tr),e(Tr,Bp),e(Ht,Ap),e(Ht,wr),e(wr,Lp),e(Ht,Ip),e(Se,Op),e(Se,Qn),e(Qn,Sp),e(Qn,Gn),e(Gn,Np),e(Qn,Wp),e(Se,Hp),e(Se,Kn),e(Kn,Up),e(Kn,Vn),e(Vn,Qp),e(Kn,Gp),e(Se,Kp),e(Se,Ae),w(Jn,Ae,null),e(Ae,Vp),e(Ae,Ut),e(Ut,Jp),e(Ut,ta),e(ta,Xp),e(Ut,Yp),e(Ut,vr),e(vr,Zp),e(Ut,eh),e(Ae,th),w(ko,Ae,null),e(Ae,oh),e(Ae,yr),e(yr,nh),e(Ae,sh),w(Xn,Ae,null),e(Ae,ah),w(Yn,Ae,null),f(o,Ci,m),f(o,Qt,m),e(Qt,To),e(To,Dr),w(Zn,Dr,null),e(Qt,rh),e(Qt,$r),e($r,ih),f(o,ji,m),f(o,Ne,m),w(es,Ne,null),e(Ne,lh),e(Ne,ts),e(ts,dh),e(ts,os),e(os,ch),e(ts,ph),e(Ne,hh),e(Ne,ns),e(ns,fh),e(ns,ss),e(ss,mh),e(ns,uh),e(Ne,gh),w(wo,Ne,null),e(Ne,_h),e(Ne,Qe),w(as,Qe,null),e(Qe,bh),e(Qe,Gt),e(Gt,kh),e(Gt,oa),e(oa,Th),e(Gt,wh),e(Gt,Er),e(Er,vh),e(Gt,yh),e(Qe,Dh),w(vo,Qe,null),e(Qe,$h),e(Qe,Fr),e(Fr,Eh),e(Qe,Fh),w(rs,Qe,null),f(o,xi,m),f(o,Kt,m),e(Kt,yo),e(yo,qr),w(is,qr,null),e(Kt,qh),e(Kt,zr),e(zr,zh),f(o,Pi,m),f(o,pt,m),w(ls,pt,null),e(pt,Mh),e(pt,Mr),e(Mr,Ch),e(pt,jh),e(pt,nt),w(ds,nt,null),e(nt,xh),e(nt,Cr),e(Cr,Ph),e(nt,Rh),e(nt,cs),e(cs,Bh),e(cs,jr),e(jr,Ah),e(cs,Lh),e(nt,Ih),e(nt,et),e(et,Oh),e(et,xr),e(xr,Sh),e(et,Nh),e(et,Pr),e(Pr,Wh),e(et,Hh),e(et,Rr),e(Rr,Uh),e(et,Qh),e(et,Br),e(Br,Gh),e(et,Kh),f(o,Ri,m),f(o,Vt,m),e(Vt,Do),e(Do,Ar),w(ps,Ar,null),e(Vt,Vh),e(Vt,Lr),e(Lr,Jh),f(o,Bi,m),f(o,We,m),w(hs,We,null),e(We,Xh),e(We,Jt),e(Jt,Yh),e(Jt,Ir),e(Ir,Zh),e(Jt,ef),e(Jt,fs),e(fs,tf),e(Jt,of),e(We,nf),e(We,ms),e(ms,sf),e(ms,us),e(us,af),e(ms,rf),e(We,lf),w($o,We,null),e(We,df),e(We,Ge),w(gs,Ge,null),e(Ge,cf),e(Ge,Xt),e(Xt,pf),e(Xt,na),e(na,hf),e(Xt,ff),e(Xt,Or),e(Or,mf),e(Xt,uf),e(Ge,gf),w(Eo,Ge,null),e(Ge,_f),e(Ge,Sr),e(Sr,bf),e(Ge,kf),w(_s,Ge,null),f(o,Ai,m),f(o,Yt,m),e(Yt,Fo),e(Fo,Nr),w(bs,Nr,null),e(Yt,Tf),e(Yt,Wr),e(Wr,wf),f(o,Li,m),f(o,Me,m),w(ks,Me,null),e(Me,vf),e(Me,Hr),e(Hr,yf),e(Me,Df),e(Me,Ts),e(Ts,$f),e(Ts,ws),e(ws,Ef),e(Ts,Ff),e(Me,qf),e(Me,vs),e(vs,zf),e(vs,ys),e(ys,Mf),e(vs,Cf),e(Me,jf),w(qo,Me,null),e(Me,xf),e(Me,Ke),w(Ds,Ke,null),e(Ke,Pf),e(Ke,Zt),e(Zt,Rf),e(Zt,sa),e(sa,Bf),e(Zt,Af),e(Zt,Ur),e(Ur,Lf),e(Zt,If),e(Ke,Of),w(zo,Ke,null),e(Ke,Sf),e(Ke,Qr),e(Qr,Nf),e(Ke,Wf),w($s,Ke,null),f(o,Ii,m),f(o,eo,m),e(eo,Mo),e(Mo,Gr),w(Es,Gr,null),e(eo,Hf),e(eo,Kr),e(Kr,Uf),f(o,Oi,m),f(o,Ce,m),w(Fs,Ce,null),e(Ce,Qf),e(Ce,Vr),e(Vr,Gf),e(Ce,Kf),e(Ce,qs),e(qs,Vf),e(qs,zs),e(zs,Jf),e(qs,Xf),e(Ce,Yf),e(Ce,Ms),e(Ms,Zf),e(Ms,Cs),e(Cs,em),e(Ms,tm),e(Ce,om),w(Co,Ce,null),e(Ce,nm),e(Ce,Ve),w(js,Ve,null),e(Ve,sm),e(Ve,to),e(to,am),e(to,aa),e(aa,rm),e(to,im),e(to,Jr),e(Jr,lm),e(to,dm),e(Ve,cm),w(jo,Ve,null),e(Ve,pm),e(Ve,Xr),e(Xr,hm),e(Ve,fm),w(xs,Ve,null),f(o,Si,m),f(o,oo,m),e(oo,xo),e(xo,Yr),w(Ps,Yr,null),e(oo,mm),e(oo,Zr),e(Zr,um),f(o,Ni,m),f(o,je,m),w(Rs,je,null),e(je,gm),e(je,no),e(no,_m),e(no,ei),e(ei,bm),e(no,km),e(no,ti),e(ti,Tm),e(no,wm),e(je,vm),e(je,Bs),e(Bs,ym),e(Bs,As),e(As,Dm),e(Bs,$m),e(je,Em),e(je,Ls),e(Ls,Fm),e(Ls,Is),e(Is,qm),e(Ls,zm),e(je,Mm),w(Po,je,null),e(je,Cm),e(je,Je),w(Os,Je,null),e(Je,jm),e(Je,so),e(so,xm),e(so,ra),e(ra,Pm),e(so,Rm),e(so,oi),e(oi,Bm),e(so,Am),e(Je,Lm),w(Ro,Je,null),e(Je,Im),e(Je,ni),e(ni,Om),e(Je,Sm),w(Ss,Je,null),Wi=!0},p(o,[m]){const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),co.$set(Ns);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),fo.$set(si);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),uo.$set(ai);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),_o.$set(ri);const Ws={};m&2&&(Ws.$$scope={dirty:m,ctx:o}),ko.$set(Ws);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),wo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),vo.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),$o.$set(di);const Hs={};m&2&&(Hs.$$scope={dirty:m,ctx:o}),Eo.$set(Hs);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),qo.$set(ci);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),zo.$set(pi);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),Co.$set(hi);const fi={};m&2&&(fi.$$scope={dirty:m,ctx:o}),jo.$set(fi);const Us={};m&2&&(Us.$$scope={dirty:m,ctx:o}),Po.$set(Us);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:o}),Ro.$set(mi)},i(o){Wi||(v(b.$$.fragment,o),v(ee.$$.fragment,o),v(P.$$.fragment,o),v(ve.$$.fragment,o),v(Uo.$$.fragment,o),v(Qo.$$.fragment,o),v(Go.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Zo.$$.fragment,o),v(en.$$.fragment,o),v(on.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(ln.$$.fragment,o),v(fn.$$.fragment,o),v(co.$$.fragment,o),v(mn.$$.fragment,o),v(un.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(vn.$$.fragment,o),v(fo.$$.fragment,o),v(yn.$$.fragment,o),v(Dn.$$.fragment,o),v($n.$$.fragment,o),v(En.$$.fragment,o),v(Cn.$$.fragment,o),v(uo.$$.fragment,o),v(jn.$$.fragment,o),v(xn.$$.fragment,o),v(Pn.$$.fragment,o),v(Rn.$$.fragment,o),v(Bn.$$.fragment,o),v(Sn.$$.fragment,o),v(_o.$$.fragment,o),v(Nn.$$.fragment,o),v(Wn.$$.fragment,o),v(Hn.$$.fragment,o),v(Un.$$.fragment,o),v(Jn.$$.fragment,o),v(ko.$$.fragment,o),v(Xn.$$.fragment,o),v(Yn.$$.fragment,o),v(Zn.$$.fragment,o),v(es.$$.fragment,o),v(wo.$$.fragment,o),v(as.$$.fragment,o),v(vo.$$.fragment,o),v(rs.$$.fragment,o),v(is.$$.fragment,o),v(ls.$$.fragment,o),v(ds.$$.fragment,o),v(ps.$$.fragment,o),v(hs.$$.fragment,o),v($o.$$.fragment,o),v(gs.$$.fragment,o),v(Eo.$$.fragment,o),v(_s.$$.fragment,o),v(bs.$$.fragment,o),v(ks.$$.fragment,o),v(qo.$$.fragment,o),v(Ds.$$.fragment,o),v(zo.$$.fragment,o),v($s.$$.fragment,o),v(Es.$$.fragment,o),v(Fs.$$.fragment,o),v(Co.$$.fragment,o),v(js.$$.fragment,o),v(jo.$$.fragment,o),v(xs.$$.fragment,o),v(Ps.$$.fragment,o),v(Rs.$$.fragment,o),v(Po.$$.fragment,o),v(Os.$$.fragment,o),v(Ro.$$.fragment,o),v(Ss.$$.fragment,o),Wi=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(P.$$.fragment,o),y(ve.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(on.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(fn.$$.fragment,o),y(co.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y(fo.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Cn.$$.fragment,o),y(uo.$$.fragment,o),y(jn.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(Bn.$$.fragment,o),y(Sn.$$.fragment,o),y(_o.$$.fragment,o),y(Nn.$$.fragment,o),y(Wn.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Jn.$$.fragment,o),y(ko.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(wo.$$.fragment,o),y(as.$$.fragment,o),y(vo.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y($o.$$.fragment,o),y(gs.$$.fragment,o),y(Eo.$$.fragment,o),y(_s.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(qo.$$.fragment,o),y(Ds.$$.fragment,o),y(zo.$$.fragment,o),y($s.$$.fragment,o),y(Es.$$.fragment,o),y(Fs.$$.fragment,o),y(Co.$$.fragment,o),y(js.$$.fragment,o),y(jo.$$.fragment,o),y(xs.$$.fragment,o),y(Ps.$$.fragment,o),y(Rs.$$.fragment,o),y(Po.$$.fragment,o),y(Os.$$.fragment,o),y(Ro.$$.fragment,o),y(Ss.$$.fragment,o),Wi=!1},d(o){t(h),o&&t(q),o&&t(u),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(N),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(O),o&&t(K),o&&t(R),o&&t(pe),D(P),o&&t(S),o&&t(re),D(ve),o&&t(ui),o&&t(Ft),D(Uo),o&&t(gi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),D(Yo),o&&t(_i),o&&t(Mt),D(Zo),o&&t(bi),o&&t(Xe),D(en),D(on),D(sn),D(an),o&&t(ki),o&&t(jt),D(rn),o&&t(Ti),o&&t(Ye),D(ln),D(fn),D(co),D(mn),o&&t(wi),o&&t(Pt),D(un),o&&t(vi),o&&t(Rt),D(gn),o&&t(yi),o&&t(Bt),D(_n),o&&t(Di),o&&t(Ze),D(bn),D(vn),D(fo),D(yn),D(Dn),o&&t($i),o&&t(It),D($n),o&&t(Ei),o&&t(Ie),D(En),D(Cn),D(uo),D(jn),D(xn),D(Pn),o&&t(Fi),o&&t(St),D(Rn),o&&t(qi),o&&t(Oe),D(Bn),D(Sn),D(_o),D(Nn),D(Wn),o&&t(zi),o&&t(Wt),D(Hn),o&&t(Mi),o&&t(Se),D(Un),D(Jn),D(ko),D(Xn),D(Yn),o&&t(Ci),o&&t(Qt),D(Zn),o&&t(ji),o&&t(Ne),D(es),D(wo),D(as),D(vo),D(rs),o&&t(xi),o&&t(Kt),D(is),o&&t(Pi),o&&t(pt),D(ls),D(ds),o&&t(Ri),o&&t(Vt),D(ps),o&&t(Bi),o&&t(We),D(hs),D($o),D(gs),D(Eo),D(_s),o&&t(Ai),o&&t(Yt),D(bs),o&&t(Li),o&&t(Me),D(ks),D(qo),D(Ds),D(zo),D($s),o&&t(Ii),o&&t(eo),D(Es),o&&t(Oi),o&&t(Ce),D(Fs),D(Co),D(js),D(jo),D(xs),o&&t(Si),o&&t(oo),D(Ps),o&&t(Ni),o&&t(je),D(Rs),D(Po),D(Os),D(Ro),D(Ss)}}}const O_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function S_(G){return y_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class G_ extends k_{constructor(h){super();T_(this,h,S_,I_,w_,{})}}export{G_ as default,O_ as metadata};
