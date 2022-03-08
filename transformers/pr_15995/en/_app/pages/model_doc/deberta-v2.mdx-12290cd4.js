import{S as __,i as b_,s as v_,e as r,k as l,w as k,t as n,M as k_,c as a,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as w,q as y,o as D,B as E}from"../../chunks/vendor-4833417e.js";import{T as xe}from"../../chunks/Tip-fffd6df1.js";import{D as K}from"../../chunks/Docstring-7b52c3d4.js";import{C as it}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Re}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function T_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function w_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r("code"),g=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function y_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function D_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function E_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function $_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function F_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=a(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function V_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function q_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=a(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function z_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function M_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=a(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function C_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function x_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=a(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function R_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function P_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),V=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),R=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var G=i(g);v=a(G,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(G),V=a(G,"LI",{});var we=i(V);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),G.forEach(t),J=d(p),q=a(p,"P",{});var x=i(q);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),P=a(p,"P",{});var De=i(P);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),R=a(B,"LI",{});var be=i(R);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,V),e(V,de),f(p,J,F),f(p,q,F),e(q,Y),e(q,I),e(I,ee),e(q,ce),e(q,S),e(S,pe),e(q,ae),f(p,O,F),f(p,P,F),e(P,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,R),e(R,ge),e(R,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(q),p&&t(O),p&&t(P),p&&t(Z),p&&t(z)}}}function B_(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var V=i(u);g=s(V,"Module"),V.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function j_(L){let h,$,u,g,v,b,_,V,de,J,q,Y,I,ee,ce,S,pe,ae,O,P,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,R,ge,U,oe,p,F,G,ye,we,x,_e,ke,De,B,A,Ee,$e,Q,ve,Te,be,Fe,El,Ws,qr,$l,Fl,Vl,Hs,zr,ql,zl,Ml,Us,Mr,Cl,xl,fi,Ze,Rl,Ho,Pl,Bl,Uo,jl,Al,Qo,Ll,Il,mi,Vt,ao,Cr,Go,Sl,xr,Nl,ui,lt,Ko,Ol,qt,Wl,Qs,Hl,Ul,Jo,Ql,Gl,Kl,zt,Jl,Gs,Xl,Yl,Ks,Zl,ed,gi,Mt,io,Rr,Xo,td,Pr,od,_i,qe,Yo,nd,Zo,sd,en,rd,ad,id,pt,tn,ld,Br,dd,cd,on,jr,pd,hd,Ar,fd,md,lo,nn,ud,Ct,gd,Lr,_d,bd,Ir,vd,kd,Td,et,sn,wd,Sr,yd,Dd,rn,Ed,xt,$d,Nr,Fd,Vd,Or,qd,zd,Md,Js,an,bi,Rt,co,Wr,ln,Cd,Hr,xd,vi,Je,dn,Rd,cn,Pd,pn,Bd,jd,Ad,hn,Ld,fn,Id,Sd,Nd,Ie,mn,Od,Pt,Wd,Xs,Hd,Ud,Ur,Qd,Gd,Kd,po,Jd,Qr,Xd,Yd,un,ki,Bt,ho,Gr,gn,Zd,Kr,ec,Ti,dt,_n,tc,Jr,oc,nc,tt,bn,sc,Xr,rc,ac,Yr,ic,lc,fo,wi,jt,mo,Zr,vn,dc,ea,cc,yi,Xe,kn,pc,At,hc,ta,fc,mc,Tn,uc,gc,_c,wn,bc,yn,vc,kc,Tc,Se,Dn,wc,Lt,yc,Ys,Dc,Ec,oa,$c,Fc,Vc,uo,qc,na,zc,Mc,En,Di,It,go,sa,$n,Cc,ra,xc,Ei,Pe,Fn,Rc,aa,Pc,Bc,Vn,jc,qn,Ac,Lc,Ic,zn,Sc,Mn,Nc,Oc,Wc,Ve,Cn,Hc,St,Uc,Zs,Qc,Gc,ia,Kc,Jc,Xc,_o,Yc,la,Zc,ep,xn,tp,da,op,np,Rn,$i,Nt,bo,ca,Pn,sp,pa,rp,Fi,Be,Bn,ap,ha,ip,lp,jn,dp,An,cp,pp,hp,Ln,fp,In,mp,up,gp,Ne,Sn,_p,Ot,bp,er,vp,kp,fa,Tp,wp,yp,vo,Dp,ma,Ep,$p,Nn,Vi,Wt,ko,ua,On,Fp,ga,Vp,qi,je,Wn,qp,Ht,zp,_a,Mp,Cp,ba,xp,Rp,Pp,Hn,Bp,Un,jp,Ap,Lp,Qn,Ip,Gn,Sp,Np,Op,Oe,Kn,Wp,Ut,Hp,tr,Up,Qp,va,Gp,Kp,Jp,To,Xp,ka,Yp,Zp,Jn,zi,Qt,wo,Ta,Xn,eh,wa,th,Mi,Ae,Yn,oh,Zn,nh,es,sh,rh,ah,ts,ih,os,lh,dh,ch,yo,ph,We,ns,hh,Gt,fh,or,mh,uh,ya,gh,_h,bh,Do,vh,Da,kh,Th,ss,Ci,Kt,Eo,Ea,rs,wh,$a,yh,xi,ct,as,Dh,Fa,Eh,$h,ot,is,Fh,Va,Vh,qh,ls,zh,qa,Mh,Ch,xh,Ye,Rh,za,Ph,Bh,Ma,jh,Ah,Ca,Lh,Ih,xa,Sh,Nh,Ri,Jt,$o,Ra,ds,Oh,Pa,Wh,Pi,Le,cs,Hh,Xt,Uh,Ba,Qh,Gh,ps,Kh,Jh,Xh,hs,Yh,fs,Zh,ef,tf,Fo,of,He,ms,nf,Yt,sf,nr,rf,af,ja,lf,df,cf,Vo,pf,Aa,hf,ff,us,Bi,Zt,qo,La,gs,mf,Ia,uf,ji,ze,_s,gf,Sa,_f,bf,bs,vf,vs,kf,Tf,wf,ks,yf,Ts,Df,Ef,$f,zo,Ff,Ue,ws,Vf,eo,qf,sr,zf,Mf,Na,Cf,xf,Rf,Mo,Pf,Oa,Bf,jf,ys,Ai,to,Co,Wa,Ds,Af,Ha,Lf,Li,Me,Es,If,Ua,Sf,Nf,$s,Of,Fs,Wf,Hf,Uf,Vs,Qf,qs,Gf,Kf,Jf,xo,Xf,Qe,zs,Yf,oo,Zf,rr,em,tm,Qa,om,nm,sm,Ro,rm,Ga,am,im,Ms,Ii,no,Po,Ka,Cs,lm,Ja,dm,Si,Ce,xs,cm,so,pm,Xa,hm,fm,Ya,mm,um,gm,Rs,_m,Ps,bm,vm,km,Bs,Tm,js,wm,ym,Dm,Bo,Em,Ge,As,$m,ro,Fm,ar,Vm,qm,Za,zm,Mm,Cm,jo,xm,ei,Rm,Pm,Ls,Ni;return b=new Re({}),ee=new Re({}),Go=new Re({}),Ko=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_15995/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15995/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;, &quot;p2p&quot;]</code>, e.g.
<code>[&quot;p2c&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;, &apos;p2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Re({}),Yo=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),tn=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new it({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),an=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),ln=new Re({}),dn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L994",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1018",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15995/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),po=new xe({props:{$$slots:{default:[T_]},$$scope:{ctx:L}}}),un=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new Re({}),_n=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L898"}}),bn=new K({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/torch/nn/modules/module.py#L190"}}),fo=new xe({props:{$$slots:{default:[w_]},$$scope:{ctx:L}}}),vn=new Re({}),kn=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1107",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1126",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15995/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),uo=new xe({props:{$$slots:{default:[y_]},$$scope:{ctx:L}}}),En=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new Re({}),Fn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1243",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1268",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15995/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),_o=new xe({props:{$$slots:{default:[D_]},$$scope:{ctx:L}}}),xn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new Re({}),Bn=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1363",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Sn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1377",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15995/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),vo=new xe({props:{$$slots:{default:[E_]},$$scope:{ctx:L}}}),Nn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),On=new Re({}),Wn=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1440",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Kn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1453",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15995/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),To=new xe({props:{$$slots:{default:[$_]},$$scope:{ctx:L}}}),Jn=new it({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Xn=new Re({}),Yn=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1213",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new xe({props:{$$slots:{default:[F_]},$$scope:{ctx:L}}}),ns=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1219",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Do=new xe({props:{$$slots:{default:[V_]},$$scope:{ctx:L}}}),ss=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),rs=new Re({}),as=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1117"}}),is=new K({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),ds=new Re({}),cs=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1276",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new xe({props:{$$slots:{default:[q_]},$$scope:{ctx:L}}}),ms=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1292",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Vo=new xe({props:{$$slots:{default:[z_]},$$scope:{ctx:L}}}),us=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),gs=new Re({}),_s=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1379",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new xe({props:{$$slots:{default:[M_]},$$scope:{ctx:L}}}),ws=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Mo=new xe({props:{$$slots:{default:[C_]},$$scope:{ctx:L}}}),ys=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ds=new Re({}),Es=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1483",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new xe({props:{$$slots:{default:[x_]},$$scope:{ctx:L}}}),zs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1495",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Ro=new xe({props:{$$slots:{default:[R_]},$$scope:{ctx:L}}}),Ms=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cs=new Re({}),xs=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1577",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15995/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new xe({props:{$$slots:{default:[P_]},$$scope:{ctx:L}}}),As=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15995/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1588",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15995/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15995/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),jo=new xe({props:{$$slots:{default:[B_]},$$scope:{ctx:L}}}),Ls=new it({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=r("meta"),$=l(),u=r("h1"),g=r("a"),v=r("span"),k(b.$$.fragment),_=l(),V=r("span"),de=n("DeBERTa-v2"),J=l(),q=r("h2"),Y=r("a"),I=r("span"),k(ee.$$.fragment),ce=l(),S=r("span"),pe=n("Overview"),ae=l(),O=r("p"),P=n("The DeBERTa model was proposed in "),te=r("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),C=l(),ne=r("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=r("p"),H=n("The abstract from the paper is the following:"),le=l(),re=r("p"),M=r("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=r("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),N=l(),X=r("p"),ue=n("The following information is visible directly on the "),R=r("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r("a"),p=n("blog"),F=l(),G=r("p"),ye=n("New in v2:"),we=l(),x=r("ul"),_e=r("li"),ke=r("strong"),De=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r("a"),Ee=n("sentencepiece-based"),$e=n(" tokenizer."),Q=l(),ve=r("li"),Te=r("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Fe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),El=l(),Ws=r("li"),qr=r("strong"),$l=n("Sharing position projection matrix with content projection matrix in attention layer"),Fl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Vl=l(),Hs=r("li"),zr=r("strong"),ql=n("Apply bucket to encode relative positions"),zl=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Ml=l(),Us=r("li"),Mr=r("strong"),Cl=n("900M model & 1.5B model"),xl=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),fi=l(),Ze=r("p"),Rl=n("This model was contributed by "),Ho=r("a"),Pl=n("DeBERTa"),Bl=n(`. This model TF 2.0 implementation was
contributed by `),Uo=r("a"),jl=n("kamalkraj"),Al=n(". The original code can be found "),Qo=r("a"),Ll=n("here"),Il=n("."),mi=l(),Vt=r("h2"),ao=r("a"),Cr=r("span"),k(Go.$$.fragment),Sl=l(),xr=r("span"),Nl=n("DebertaV2Config"),ui=l(),lt=r("div"),k(Ko.$$.fragment),Ol=l(),qt=r("p"),Wl=n("This is the configuration class to store the configuration of a "),Qs=r("a"),Hl=n("DebertaV2Model"),Ul=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r("a"),Ql=n("microsoft/deberta-v2-xlarge"),Gl=n(" architecture."),Kl=l(),zt=r("p"),Jl=n("Configuration objects inherit from "),Gs=r("a"),Xl=n("PretrainedConfig"),Yl=n(` and can be used to control the model outputs. Read the
documentation from `),Ks=r("a"),Zl=n("PretrainedConfig"),ed=n(" for more information."),gi=l(),Mt=r("h2"),io=r("a"),Rr=r("span"),k(Xo.$$.fragment),td=l(),Pr=r("span"),od=n("DebertaV2Tokenizer"),_i=l(),qe=r("div"),k(Yo.$$.fragment),nd=l(),Zo=r("p"),sd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=r("a"),rd=n("SentencePiece"),ad=n("."),id=l(),pt=r("div"),k(tn.$$.fragment),ld=l(),Br=r("p"),dd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),cd=l(),on=r("ul"),jr=r("li"),pd=n("single sequence: [CLS] X [SEP]"),hd=l(),Ar=r("li"),fd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),md=l(),lo=r("div"),k(nn.$$.fragment),ud=l(),Ct=r("p"),gd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lr=r("code"),_d=n("prepare_for_model"),bd=n(" or "),Ir=r("code"),vd=n("encode_plus"),kd=n(" methods."),Td=l(),et=r("div"),k(sn.$$.fragment),wd=l(),Sr=r("p"),yd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Dd=l(),k(rn.$$.fragment),Ed=l(),xt=r("p"),$d=n("If "),Nr=r("code"),Fd=n("token_ids_1"),Vd=n(" is "),Or=r("code"),qd=n("None"),zd=n(", this method only returns the first portion of the mask (0s)."),Md=l(),Js=r("div"),k(an.$$.fragment),bi=l(),Rt=r("h2"),co=r("a"),Wr=r("span"),k(ln.$$.fragment),Cd=l(),Hr=r("span"),xd=n("DebertaV2Model"),vi=l(),Je=r("div"),k(dn.$$.fragment),Rd=l(),cn=r("p"),Pd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=r("a"),Bd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ad=l(),hn=r("p"),Ld=n("This model is also a PyTorch "),fn=r("a"),Id=n("torch.nn.Module"),Sd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nd=l(),Ie=r("div"),k(mn.$$.fragment),Od=l(),Pt=r("p"),Wd=n("The "),Xs=r("a"),Hd=n("DebertaV2Model"),Ud=n(" forward method, overrides the "),Ur=r("code"),Qd=n("__call__"),Gd=n(" special method."),Kd=l(),k(po.$$.fragment),Jd=l(),Qr=r("p"),Xd=n("Example:"),Yd=l(),k(un.$$.fragment),ki=l(),Bt=r("h2"),ho=r("a"),Gr=r("span"),k(gn.$$.fragment),Zd=l(),Kr=r("span"),ec=n("DebertaV2PreTrainedModel"),Ti=l(),dt=r("div"),k(_n.$$.fragment),tc=l(),Jr=r("p"),oc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),nc=l(),tt=r("div"),k(bn.$$.fragment),sc=l(),Xr=r("p"),rc=n("Defines the computation performed at every call."),ac=l(),Yr=r("p"),ic=n("Should be overridden by all subclasses."),lc=l(),k(fo.$$.fragment),wi=l(),jt=r("h2"),mo=r("a"),Zr=r("span"),k(vn.$$.fragment),dc=l(),ea=r("span"),cc=n("DebertaV2ForMaskedLM"),yi=l(),Xe=r("div"),k(kn.$$.fragment),pc=l(),At=r("p"),hc=n("DeBERTa Model with a "),ta=r("code"),fc=n("language modeling"),mc=n(` head on top.
The DeBERTa model was proposed in `),Tn=r("a"),uc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_c=l(),wn=r("p"),bc=n("This model is also a PyTorch "),yn=r("a"),vc=n("torch.nn.Module"),kc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tc=l(),Se=r("div"),k(Dn.$$.fragment),wc=l(),Lt=r("p"),yc=n("The "),Ys=r("a"),Dc=n("DebertaV2ForMaskedLM"),Ec=n(" forward method, overrides the "),oa=r("code"),$c=n("__call__"),Fc=n(" special method."),Vc=l(),k(uo.$$.fragment),qc=l(),na=r("p"),zc=n("Example:"),Mc=l(),k(En.$$.fragment),Di=l(),It=r("h2"),go=r("a"),sa=r("span"),k($n.$$.fragment),Cc=l(),ra=r("span"),xc=n("DebertaV2ForSequenceClassification"),Ei=l(),Pe=r("div"),k(Fn.$$.fragment),Rc=l(),aa=r("p"),Pc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bc=l(),Vn=r("p"),jc=n("The DeBERTa model was proposed in "),qn=r("a"),Ac=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ic=l(),zn=r("p"),Sc=n("This model is also a PyTorch "),Mn=r("a"),Nc=n("torch.nn.Module"),Oc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Wc=l(),Ve=r("div"),k(Cn.$$.fragment),Hc=l(),St=r("p"),Uc=n("The "),Zs=r("a"),Qc=n("DebertaV2ForSequenceClassification"),Gc=n(" forward method, overrides the "),ia=r("code"),Kc=n("__call__"),Jc=n(" special method."),Xc=l(),k(_o.$$.fragment),Yc=l(),la=r("p"),Zc=n("Example of single-label classification:"),ep=l(),k(xn.$$.fragment),tp=l(),da=r("p"),op=n("Example of multi-label classification:"),np=l(),k(Rn.$$.fragment),$i=l(),Nt=r("h2"),bo=r("a"),ca=r("span"),k(Pn.$$.fragment),sp=l(),pa=r("span"),rp=n("DebertaV2ForTokenClassification"),Fi=l(),Be=r("div"),k(Bn.$$.fragment),ap=l(),ha=r("p"),ip=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),lp=l(),jn=r("p"),dp=n("The DeBERTa model was proposed in "),An=r("a"),cp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hp=l(),Ln=r("p"),fp=n("This model is also a PyTorch "),In=r("a"),mp=n("torch.nn.Module"),up=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),gp=l(),Ne=r("div"),k(Sn.$$.fragment),_p=l(),Ot=r("p"),bp=n("The "),er=r("a"),vp=n("DebertaV2ForTokenClassification"),kp=n(" forward method, overrides the "),fa=r("code"),Tp=n("__call__"),wp=n(" special method."),yp=l(),k(vo.$$.fragment),Dp=l(),ma=r("p"),Ep=n("Example:"),$p=l(),k(Nn.$$.fragment),Vi=l(),Wt=r("h2"),ko=r("a"),ua=r("span"),k(On.$$.fragment),Fp=l(),ga=r("span"),Vp=n("DebertaV2ForQuestionAnswering"),qi=l(),je=r("div"),k(Wn.$$.fragment),qp=l(),Ht=r("p"),zp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_a=r("code"),Mp=n("span start logits"),Cp=n(" and "),ba=r("code"),xp=n("span end logits"),Rp=n(")."),Pp=l(),Hn=r("p"),Bp=n("The DeBERTa model was proposed in "),Un=r("a"),jp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ap=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lp=l(),Qn=r("p"),Ip=n("This model is also a PyTorch "),Gn=r("a"),Sp=n("torch.nn.Module"),Np=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Op=l(),Oe=r("div"),k(Kn.$$.fragment),Wp=l(),Ut=r("p"),Hp=n("The "),tr=r("a"),Up=n("DebertaV2ForQuestionAnswering"),Qp=n(" forward method, overrides the "),va=r("code"),Gp=n("__call__"),Kp=n(" special method."),Jp=l(),k(To.$$.fragment),Xp=l(),ka=r("p"),Yp=n("Example:"),Zp=l(),k(Jn.$$.fragment),zi=l(),Qt=r("h2"),wo=r("a"),Ta=r("span"),k(Xn.$$.fragment),eh=l(),wa=r("span"),th=n("TFDebertaV2Model"),Mi=l(),Ae=r("div"),k(Yn.$$.fragment),oh=l(),Zn=r("p"),nh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),es=r("a"),sh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ah=l(),ts=r("p"),ih=n("This model is also a "),os=r("a"),lh=n("tf.keras.Model"),dh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ch=l(),k(yo.$$.fragment),ph=l(),We=r("div"),k(ns.$$.fragment),hh=l(),Gt=r("p"),fh=n("The "),or=r("a"),mh=n("TFDebertaV2Model"),uh=n(" forward method, overrides the "),ya=r("code"),gh=n("__call__"),_h=n(" special method."),bh=l(),k(Do.$$.fragment),vh=l(),Da=r("p"),kh=n("Example:"),Th=l(),k(ss.$$.fragment),Ci=l(),Kt=r("h2"),Eo=r("a"),Ea=r("span"),k(rs.$$.fragment),wh=l(),$a=r("span"),yh=n("TFDebertaV2PreTrainedModel"),xi=l(),ct=r("div"),k(as.$$.fragment),Dh=l(),Fa=r("p"),Eh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$h=l(),ot=r("div"),k(is.$$.fragment),Fh=l(),Va=r("p"),Vh=n("Calls the model on new inputs and returns the outputs as tensors."),qh=l(),ls=r("p"),zh=n("In this case "),qa=r("code"),Mh=n("call()"),Ch=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),xh=l(),Ye=r("p"),Rh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=r("code"),Ph=n("tf.keras.Model"),Bh=n(`.
To call a model on an input, always use the `),Ma=r("code"),jh=n("__call__()"),Ah=n(` method,
i.e. `),Ca=r("code"),Lh=n("model(inputs)"),Ih=n(", which relies on the underlying "),xa=r("code"),Sh=n("call()"),Nh=n(" method."),Ri=l(),Jt=r("h2"),$o=r("a"),Ra=r("span"),k(ds.$$.fragment),Oh=l(),Pa=r("span"),Wh=n("TFDebertaV2ForMaskedLM"),Pi=l(),Le=r("div"),k(cs.$$.fragment),Hh=l(),Xt=r("p"),Uh=n("DeBERTa Model with a "),Ba=r("code"),Qh=n("language modeling"),Gh=n(` head on top.
The DeBERTa model was proposed in `),ps=r("a"),Kh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xh=l(),hs=r("p"),Yh=n("This model is also a "),fs=r("a"),Zh=n("tf.keras.Model"),ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tf=l(),k(Fo.$$.fragment),of=l(),He=r("div"),k(ms.$$.fragment),nf=l(),Yt=r("p"),sf=n("The "),nr=r("a"),rf=n("TFDebertaV2ForMaskedLM"),af=n(" forward method, overrides the "),ja=r("code"),lf=n("__call__"),df=n(" special method."),cf=l(),k(Vo.$$.fragment),pf=l(),Aa=r("p"),hf=n("Example:"),ff=l(),k(us.$$.fragment),Bi=l(),Zt=r("h2"),qo=r("a"),La=r("span"),k(gs.$$.fragment),mf=l(),Ia=r("span"),uf=n("TFDebertaV2ForSequenceClassification"),ji=l(),ze=r("div"),k(_s.$$.fragment),gf=l(),Sa=r("p"),_f=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf=l(),bs=r("p"),vf=n("The DeBERTa model was proposed in "),vs=r("a"),kf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wf=l(),ks=r("p"),yf=n("This model is also a "),Ts=r("a"),Df=n("tf.keras.Model"),Ef=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$f=l(),k(zo.$$.fragment),Ff=l(),Ue=r("div"),k(ws.$$.fragment),Vf=l(),eo=r("p"),qf=n("The "),sr=r("a"),zf=n("TFDebertaV2ForSequenceClassification"),Mf=n(" forward method, overrides the "),Na=r("code"),Cf=n("__call__"),xf=n(" special method."),Rf=l(),k(Mo.$$.fragment),Pf=l(),Oa=r("p"),Bf=n("Example:"),jf=l(),k(ys.$$.fragment),Ai=l(),to=r("h2"),Co=r("a"),Wa=r("span"),k(Ds.$$.fragment),Af=l(),Ha=r("span"),Lf=n("TFDebertaV2ForTokenClassification"),Li=l(),Me=r("div"),k(Es.$$.fragment),If=l(),Ua=r("p"),Sf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Nf=l(),$s=r("p"),Of=n("The DeBERTa model was proposed in "),Fs=r("a"),Wf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Uf=l(),Vs=r("p"),Qf=n("This model is also a "),qs=r("a"),Gf=n("tf.keras.Model"),Kf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jf=l(),k(xo.$$.fragment),Xf=l(),Qe=r("div"),k(zs.$$.fragment),Yf=l(),oo=r("p"),Zf=n("The "),rr=r("a"),em=n("TFDebertaV2ForTokenClassification"),tm=n(" forward method, overrides the "),Qa=r("code"),om=n("__call__"),nm=n(" special method."),sm=l(),k(Ro.$$.fragment),rm=l(),Ga=r("p"),am=n("Example:"),im=l(),k(Ms.$$.fragment),Ii=l(),no=r("h2"),Po=r("a"),Ka=r("span"),k(Cs.$$.fragment),lm=l(),Ja=r("span"),dm=n("TFDebertaV2ForQuestionAnswering"),Si=l(),Ce=r("div"),k(xs.$$.fragment),cm=l(),so=r("p"),pm=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xa=r("code"),hm=n("span start logits"),fm=n(" and "),Ya=r("code"),mm=n("span end logits"),um=n(")."),gm=l(),Rs=r("p"),_m=n("The DeBERTa model was proposed in "),Ps=r("a"),bm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),km=l(),Bs=r("p"),Tm=n("This model is also a "),js=r("a"),wm=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dm=l(),k(Bo.$$.fragment),Em=l(),Ge=r("div"),k(As.$$.fragment),$m=l(),ro=r("p"),Fm=n("The "),ar=r("a"),Vm=n("TFDebertaV2ForQuestionAnswering"),qm=n(" forward method, overrides the "),Za=r("code"),zm=n("__call__"),Mm=n(" special method."),Cm=l(),k(jo.$$.fragment),xm=l(),ei=r("p"),Rm=n("Example:"),Pm=l(),k(Ls.$$.fragment),this.h()},l(o){const m=k_('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),u=a(o,"H1",{class:!0});var Is=i(u);g=a(Is,"A",{id:!0,class:!0,href:!0});var ti=i(g);v=a(ti,"SPAN",{});var oi=i(v);T(b.$$.fragment,oi),oi.forEach(t),ti.forEach(t),_=d(Is),V=a(Is,"SPAN",{});var ni=i(V);de=s(ni,"DeBERTa-v2"),ni.forEach(t),Is.forEach(t),J=d(o),q=a(o,"H2",{class:!0});var Ss=i(q);Y=a(Ss,"A",{id:!0,class:!0,href:!0});var si=i(Y);I=a(si,"SPAN",{});var ri=i(I);T(ee.$$.fragment,ri),ri.forEach(t),si.forEach(t),ce=d(Ss),S=a(Ss,"SPAN",{});var ai=i(S);pe=s(ai,"Overview"),ai.forEach(t),Ss.forEach(t),ae=d(o),O=a(o,"P",{});var Ns=i(O);P=s(Ns,"The DeBERTa model was proposed in "),te=a(Ns,"A",{href:!0,rel:!0});var ii=i(te);Z=s(ii,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ii.forEach(t),z=s(Ns,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ns.forEach(t),C=d(o),ne=a(o,"P",{});var li=i(ne);W=s(li,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),li.forEach(t),ie=d(o),se=a(o,"P",{});var di=i(se);H=s(di,"The abstract from the paper is the following:"),di.forEach(t),le=d(o),re=a(o,"P",{});var ci=i(re);M=a(ci,"EM",{});var Os=i(M);he=s(Os,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=a(Os,"A",{href:!0,rel:!0});var pi=i(j);fe=s(pi,"https://github.com/microsoft/DeBERTa"),pi.forEach(t),me=s(Os,"."),Os.forEach(t),ci.forEach(t),N=d(o),X=a(o,"P",{});var Ao=i(X);ue=s(Ao,"The following information is visible directly on the "),R=a(Ao,"A",{href:!0,rel:!0});var Im=i(R);ge=s(Im,`original implementation
repository`),Im.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a(Ao,"A",{href:!0,rel:!0});var Sm=i(oe);p=s(Sm,"blog"),Sm.forEach(t),Ao.forEach(t),F=d(o),G=a(o,"P",{});var Nm=i(G);ye=s(Nm,"New in v2:"),Nm.forEach(t),we=d(o),x=a(o,"UL",{});var ht=i(x);_e=a(ht,"LI",{});var hi=i(_e);ke=a(hi,"STRONG",{});var Om=i(ke);De=s(Om,"Vocabulary"),Om.forEach(t),B=s(hi,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a(hi,"A",{href:!0,rel:!0});var Wm=i(A);Ee=s(Wm,"sentencepiece-based"),Wm.forEach(t),$e=s(hi," tokenizer."),hi.forEach(t),Q=d(ht),ve=a(ht,"LI",{});var Bm=i(ve);Te=a(Bm,"STRONG",{});var Hm=i(Te);be=s(Hm,"nGiE(nGram Induced Input Encoding)"),Hm.forEach(t),Fe=s(Bm,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Bm.forEach(t),El=d(ht),Ws=a(ht,"LI",{});var jm=i(Ws);qr=a(jm,"STRONG",{});var Um=i(qr);$l=s(Um,"Sharing position projection matrix with content projection matrix in attention layer"),Um.forEach(t),Fl=s(jm,` Based on previous
experiments, this can save parameters without affecting the performance.`),jm.forEach(t),Vl=d(ht),Hs=a(ht,"LI",{});var Am=i(Hs);zr=a(Am,"STRONG",{});var Qm=i(zr);ql=s(Qm,"Apply bucket to encode relative positions"),Qm.forEach(t),zl=s(Am,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Am.forEach(t),Ml=d(ht),Us=a(ht,"LI",{});var Lm=i(Us);Mr=a(Lm,"STRONG",{});var Gm=i(Mr);Cl=s(Gm,"900M model & 1.5B model"),Gm.forEach(t),xl=s(Lm,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Lm.forEach(t),ht.forEach(t),fi=d(o),Ze=a(o,"P",{});var Lo=i(Ze);Rl=s(Lo,"This model was contributed by "),Ho=a(Lo,"A",{href:!0,rel:!0});var Km=i(Ho);Pl=s(Km,"DeBERTa"),Km.forEach(t),Bl=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=a(Lo,"A",{href:!0,rel:!0});var Jm=i(Uo);jl=s(Jm,"kamalkraj"),Jm.forEach(t),Al=s(Lo,". The original code can be found "),Qo=a(Lo,"A",{href:!0,rel:!0});var Xm=i(Qo);Ll=s(Xm,"here"),Xm.forEach(t),Il=s(Lo,"."),Lo.forEach(t),mi=d(o),Vt=a(o,"H2",{class:!0});var Oi=i(Vt);ao=a(Oi,"A",{id:!0,class:!0,href:!0});var Ym=i(ao);Cr=a(Ym,"SPAN",{});var Zm=i(Cr);T(Go.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Sl=d(Oi),xr=a(Oi,"SPAN",{});var eu=i(xr);Nl=s(eu,"DebertaV2Config"),eu.forEach(t),Oi.forEach(t),ui=d(o),lt=a(o,"DIV",{class:!0});var ir=i(lt);T(Ko.$$.fragment,ir),Ol=d(ir),qt=a(ir,"P",{});var lr=i(qt);Wl=s(lr,"This is the configuration class to store the configuration of a "),Qs=a(lr,"A",{href:!0});var tu=i(Qs);Hl=s(tu,"DebertaV2Model"),tu.forEach(t),Ul=s(lr,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a(lr,"A",{href:!0,rel:!0});var ou=i(Jo);Ql=s(ou,"microsoft/deberta-v2-xlarge"),ou.forEach(t),Gl=s(lr," architecture."),lr.forEach(t),Kl=d(ir),zt=a(ir,"P",{});var dr=i(zt);Jl=s(dr,"Configuration objects inherit from "),Gs=a(dr,"A",{href:!0});var nu=i(Gs);Xl=s(nu,"PretrainedConfig"),nu.forEach(t),Yl=s(dr,` and can be used to control the model outputs. Read the
documentation from `),Ks=a(dr,"A",{href:!0});var su=i(Ks);Zl=s(su,"PretrainedConfig"),su.forEach(t),ed=s(dr," for more information."),dr.forEach(t),ir.forEach(t),gi=d(o),Mt=a(o,"H2",{class:!0});var Wi=i(Mt);io=a(Wi,"A",{id:!0,class:!0,href:!0});var ru=i(io);Rr=a(ru,"SPAN",{});var au=i(Rr);T(Xo.$$.fragment,au),au.forEach(t),ru.forEach(t),td=d(Wi),Pr=a(Wi,"SPAN",{});var iu=i(Pr);od=s(iu,"DebertaV2Tokenizer"),iu.forEach(t),Wi.forEach(t),_i=d(o),qe=a(o,"DIV",{class:!0});var nt=i(qe);T(Yo.$$.fragment,nt),nd=d(nt),Zo=a(nt,"P",{});var Hi=i(Zo);sd=s(Hi,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=a(Hi,"A",{href:!0,rel:!0});var lu=i(en);rd=s(lu,"SentencePiece"),lu.forEach(t),ad=s(Hi,"."),Hi.forEach(t),id=d(nt),pt=a(nt,"DIV",{class:!0});var cr=i(pt);T(tn.$$.fragment,cr),ld=d(cr),Br=a(cr,"P",{});var du=i(Br);dd=s(du,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),du.forEach(t),cd=d(cr),on=a(cr,"UL",{});var Ui=i(on);jr=a(Ui,"LI",{});var cu=i(jr);pd=s(cu,"single sequence: [CLS] X [SEP]"),cu.forEach(t),hd=d(Ui),Ar=a(Ui,"LI",{});var pu=i(Ar);fd=s(pu,"pair of sequences: [CLS] A [SEP] B [SEP]"),pu.forEach(t),Ui.forEach(t),cr.forEach(t),md=d(nt),lo=a(nt,"DIV",{class:!0});var Qi=i(lo);T(nn.$$.fragment,Qi),ud=d(Qi),Ct=a(Qi,"P",{});var pr=i(Ct);gd=s(pr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lr=a(pr,"CODE",{});var hu=i(Lr);_d=s(hu,"prepare_for_model"),hu.forEach(t),bd=s(pr," or "),Ir=a(pr,"CODE",{});var fu=i(Ir);vd=s(fu,"encode_plus"),fu.forEach(t),kd=s(pr," methods."),pr.forEach(t),Qi.forEach(t),Td=d(nt),et=a(nt,"DIV",{class:!0});var Io=i(et);T(sn.$$.fragment,Io),wd=d(Io),Sr=a(Io,"P",{});var mu=i(Sr);yd=s(mu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),mu.forEach(t),Dd=d(Io),T(rn.$$.fragment,Io),Ed=d(Io),xt=a(Io,"P",{});var hr=i(xt);$d=s(hr,"If "),Nr=a(hr,"CODE",{});var uu=i(Nr);Fd=s(uu,"token_ids_1"),uu.forEach(t),Vd=s(hr," is "),Or=a(hr,"CODE",{});var gu=i(Or);qd=s(gu,"None"),gu.forEach(t),zd=s(hr,", this method only returns the first portion of the mask (0s)."),hr.forEach(t),Io.forEach(t),Md=d(nt),Js=a(nt,"DIV",{class:!0});var _u=i(Js);T(an.$$.fragment,_u),_u.forEach(t),nt.forEach(t),bi=d(o),Rt=a(o,"H2",{class:!0});var Gi=i(Rt);co=a(Gi,"A",{id:!0,class:!0,href:!0});var bu=i(co);Wr=a(bu,"SPAN",{});var vu=i(Wr);T(ln.$$.fragment,vu),vu.forEach(t),bu.forEach(t),Cd=d(Gi),Hr=a(Gi,"SPAN",{});var ku=i(Hr);xd=s(ku,"DebertaV2Model"),ku.forEach(t),Gi.forEach(t),vi=d(o),Je=a(o,"DIV",{class:!0});var So=i(Je);T(dn.$$.fragment,So),Rd=d(So),cn=a(So,"P",{});var Ki=i(cn);Pd=s(Ki,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=a(Ki,"A",{href:!0,rel:!0});var Tu=i(pn);Bd=s(Tu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tu.forEach(t),jd=s(Ki,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ki.forEach(t),Ad=d(So),hn=a(So,"P",{});var Ji=i(hn);Ld=s(Ji,"This model is also a PyTorch "),fn=a(Ji,"A",{href:!0,rel:!0});var wu=i(fn);Id=s(wu,"torch.nn.Module"),wu.forEach(t),Sd=s(Ji," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ji.forEach(t),Nd=d(So),Ie=a(So,"DIV",{class:!0});var ft=i(Ie);T(mn.$$.fragment,ft),Od=d(ft),Pt=a(ft,"P",{});var fr=i(Pt);Wd=s(fr,"The "),Xs=a(fr,"A",{href:!0});var yu=i(Xs);Hd=s(yu,"DebertaV2Model"),yu.forEach(t),Ud=s(fr," forward method, overrides the "),Ur=a(fr,"CODE",{});var Du=i(Ur);Qd=s(Du,"__call__"),Du.forEach(t),Gd=s(fr," special method."),fr.forEach(t),Kd=d(ft),T(po.$$.fragment,ft),Jd=d(ft),Qr=a(ft,"P",{});var Eu=i(Qr);Xd=s(Eu,"Example:"),Eu.forEach(t),Yd=d(ft),T(un.$$.fragment,ft),ft.forEach(t),So.forEach(t),ki=d(o),Bt=a(o,"H2",{class:!0});var Xi=i(Bt);ho=a(Xi,"A",{id:!0,class:!0,href:!0});var $u=i(ho);Gr=a($u,"SPAN",{});var Fu=i(Gr);T(gn.$$.fragment,Fu),Fu.forEach(t),$u.forEach(t),Zd=d(Xi),Kr=a(Xi,"SPAN",{});var Vu=i(Kr);ec=s(Vu,"DebertaV2PreTrainedModel"),Vu.forEach(t),Xi.forEach(t),Ti=d(o),dt=a(o,"DIV",{class:!0});var mr=i(dt);T(_n.$$.fragment,mr),tc=d(mr),Jr=a(mr,"P",{});var qu=i(Jr);oc=s(qu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),qu.forEach(t),nc=d(mr),tt=a(mr,"DIV",{class:!0});var No=i(tt);T(bn.$$.fragment,No),sc=d(No),Xr=a(No,"P",{});var zu=i(Xr);rc=s(zu,"Defines the computation performed at every call."),zu.forEach(t),ac=d(No),Yr=a(No,"P",{});var Mu=i(Yr);ic=s(Mu,"Should be overridden by all subclasses."),Mu.forEach(t),lc=d(No),T(fo.$$.fragment,No),No.forEach(t),mr.forEach(t),wi=d(o),jt=a(o,"H2",{class:!0});var Yi=i(jt);mo=a(Yi,"A",{id:!0,class:!0,href:!0});var Cu=i(mo);Zr=a(Cu,"SPAN",{});var xu=i(Zr);T(vn.$$.fragment,xu),xu.forEach(t),Cu.forEach(t),dc=d(Yi),ea=a(Yi,"SPAN",{});var Ru=i(ea);cc=s(Ru,"DebertaV2ForMaskedLM"),Ru.forEach(t),Yi.forEach(t),yi=d(o),Xe=a(o,"DIV",{class:!0});var Oo=i(Xe);T(kn.$$.fragment,Oo),pc=d(Oo),At=a(Oo,"P",{});var ur=i(At);hc=s(ur,"DeBERTa Model with a "),ta=a(ur,"CODE",{});var Pu=i(ta);fc=s(Pu,"language modeling"),Pu.forEach(t),mc=s(ur,` head on top.
The DeBERTa model was proposed in `),Tn=a(ur,"A",{href:!0,rel:!0});var Bu=i(Tn);uc=s(Bu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bu.forEach(t),gc=s(ur,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ur.forEach(t),_c=d(Oo),wn=a(Oo,"P",{});var Zi=i(wn);bc=s(Zi,"This model is also a PyTorch "),yn=a(Zi,"A",{href:!0,rel:!0});var ju=i(yn);vc=s(ju,"torch.nn.Module"),ju.forEach(t),kc=s(Zi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Zi.forEach(t),Tc=d(Oo),Se=a(Oo,"DIV",{class:!0});var mt=i(Se);T(Dn.$$.fragment,mt),wc=d(mt),Lt=a(mt,"P",{});var gr=i(Lt);yc=s(gr,"The "),Ys=a(gr,"A",{href:!0});var Au=i(Ys);Dc=s(Au,"DebertaV2ForMaskedLM"),Au.forEach(t),Ec=s(gr," forward method, overrides the "),oa=a(gr,"CODE",{});var Lu=i(oa);$c=s(Lu,"__call__"),Lu.forEach(t),Fc=s(gr," special method."),gr.forEach(t),Vc=d(mt),T(uo.$$.fragment,mt),qc=d(mt),na=a(mt,"P",{});var Iu=i(na);zc=s(Iu,"Example:"),Iu.forEach(t),Mc=d(mt),T(En.$$.fragment,mt),mt.forEach(t),Oo.forEach(t),Di=d(o),It=a(o,"H2",{class:!0});var el=i(It);go=a(el,"A",{id:!0,class:!0,href:!0});var Su=i(go);sa=a(Su,"SPAN",{});var Nu=i(sa);T($n.$$.fragment,Nu),Nu.forEach(t),Su.forEach(t),Cc=d(el),ra=a(el,"SPAN",{});var Ou=i(ra);xc=s(Ou,"DebertaV2ForSequenceClassification"),Ou.forEach(t),el.forEach(t),Ei=d(o),Pe=a(o,"DIV",{class:!0});var ut=i(Pe);T(Fn.$$.fragment,ut),Rc=d(ut),aa=a(ut,"P",{});var Wu=i(aa);Pc=s(Wu,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wu.forEach(t),Bc=d(ut),Vn=a(ut,"P",{});var tl=i(Vn);jc=s(tl,"The DeBERTa model was proposed in "),qn=a(tl,"A",{href:!0,rel:!0});var Hu=i(qn);Ac=s(Hu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hu.forEach(t),Lc=s(tl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tl.forEach(t),Ic=d(ut),zn=a(ut,"P",{});var ol=i(zn);Sc=s(ol,"This model is also a PyTorch "),Mn=a(ol,"A",{href:!0,rel:!0});var Uu=i(Mn);Nc=s(Uu,"torch.nn.Module"),Uu.forEach(t),Oc=s(ol," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ol.forEach(t),Wc=d(ut),Ve=a(ut,"DIV",{class:!0});var Ke=i(Ve);T(Cn.$$.fragment,Ke),Hc=d(Ke),St=a(Ke,"P",{});var _r=i(St);Uc=s(_r,"The "),Zs=a(_r,"A",{href:!0});var Qu=i(Zs);Qc=s(Qu,"DebertaV2ForSequenceClassification"),Qu.forEach(t),Gc=s(_r," forward method, overrides the "),ia=a(_r,"CODE",{});var Gu=i(ia);Kc=s(Gu,"__call__"),Gu.forEach(t),Jc=s(_r," special method."),_r.forEach(t),Xc=d(Ke),T(_o.$$.fragment,Ke),Yc=d(Ke),la=a(Ke,"P",{});var Ku=i(la);Zc=s(Ku,"Example of single-label classification:"),Ku.forEach(t),ep=d(Ke),T(xn.$$.fragment,Ke),tp=d(Ke),da=a(Ke,"P",{});var Ju=i(da);op=s(Ju,"Example of multi-label classification:"),Ju.forEach(t),np=d(Ke),T(Rn.$$.fragment,Ke),Ke.forEach(t),ut.forEach(t),$i=d(o),Nt=a(o,"H2",{class:!0});var nl=i(Nt);bo=a(nl,"A",{id:!0,class:!0,href:!0});var Xu=i(bo);ca=a(Xu,"SPAN",{});var Yu=i(ca);T(Pn.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),sp=d(nl),pa=a(nl,"SPAN",{});var Zu=i(pa);rp=s(Zu,"DebertaV2ForTokenClassification"),Zu.forEach(t),nl.forEach(t),Fi=d(o),Be=a(o,"DIV",{class:!0});var gt=i(Be);T(Bn.$$.fragment,gt),ap=d(gt),ha=a(gt,"P",{});var eg=i(ha);ip=s(eg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),eg.forEach(t),lp=d(gt),jn=a(gt,"P",{});var sl=i(jn);dp=s(sl,"The DeBERTa model was proposed in "),An=a(sl,"A",{href:!0,rel:!0});var tg=i(An);cp=s(tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tg.forEach(t),pp=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),hp=d(gt),Ln=a(gt,"P",{});var rl=i(Ln);fp=s(rl,"This model is also a PyTorch "),In=a(rl,"A",{href:!0,rel:!0});var og=i(In);mp=s(og,"torch.nn.Module"),og.forEach(t),up=s(rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rl.forEach(t),gp=d(gt),Ne=a(gt,"DIV",{class:!0});var _t=i(Ne);T(Sn.$$.fragment,_t),_p=d(_t),Ot=a(_t,"P",{});var br=i(Ot);bp=s(br,"The "),er=a(br,"A",{href:!0});var ng=i(er);vp=s(ng,"DebertaV2ForTokenClassification"),ng.forEach(t),kp=s(br," forward method, overrides the "),fa=a(br,"CODE",{});var sg=i(fa);Tp=s(sg,"__call__"),sg.forEach(t),wp=s(br," special method."),br.forEach(t),yp=d(_t),T(vo.$$.fragment,_t),Dp=d(_t),ma=a(_t,"P",{});var rg=i(ma);Ep=s(rg,"Example:"),rg.forEach(t),$p=d(_t),T(Nn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),Vi=d(o),Wt=a(o,"H2",{class:!0});var al=i(Wt);ko=a(al,"A",{id:!0,class:!0,href:!0});var ag=i(ko);ua=a(ag,"SPAN",{});var ig=i(ua);T(On.$$.fragment,ig),ig.forEach(t),ag.forEach(t),Fp=d(al),ga=a(al,"SPAN",{});var lg=i(ga);Vp=s(lg,"DebertaV2ForQuestionAnswering"),lg.forEach(t),al.forEach(t),qi=d(o),je=a(o,"DIV",{class:!0});var bt=i(je);T(Wn.$$.fragment,bt),qp=d(bt),Ht=a(bt,"P",{});var vr=i(Ht);zp=s(vr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_a=a(vr,"CODE",{});var dg=i(_a);Mp=s(dg,"span start logits"),dg.forEach(t),Cp=s(vr," and "),ba=a(vr,"CODE",{});var cg=i(ba);xp=s(cg,"span end logits"),cg.forEach(t),Rp=s(vr,")."),vr.forEach(t),Pp=d(bt),Hn=a(bt,"P",{});var il=i(Hn);Bp=s(il,"The DeBERTa model was proposed in "),Un=a(il,"A",{href:!0,rel:!0});var pg=i(Un);jp=s(pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pg.forEach(t),Ap=s(il,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),il.forEach(t),Lp=d(bt),Qn=a(bt,"P",{});var ll=i(Qn);Ip=s(ll,"This model is also a PyTorch "),Gn=a(ll,"A",{href:!0,rel:!0});var hg=i(Gn);Sp=s(hg,"torch.nn.Module"),hg.forEach(t),Np=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),Op=d(bt),Oe=a(bt,"DIV",{class:!0});var vt=i(Oe);T(Kn.$$.fragment,vt),Wp=d(vt),Ut=a(vt,"P",{});var kr=i(Ut);Hp=s(kr,"The "),tr=a(kr,"A",{href:!0});var fg=i(tr);Up=s(fg,"DebertaV2ForQuestionAnswering"),fg.forEach(t),Qp=s(kr," forward method, overrides the "),va=a(kr,"CODE",{});var mg=i(va);Gp=s(mg,"__call__"),mg.forEach(t),Kp=s(kr," special method."),kr.forEach(t),Jp=d(vt),T(To.$$.fragment,vt),Xp=d(vt),ka=a(vt,"P",{});var ug=i(ka);Yp=s(ug,"Example:"),ug.forEach(t),Zp=d(vt),T(Jn.$$.fragment,vt),vt.forEach(t),bt.forEach(t),zi=d(o),Qt=a(o,"H2",{class:!0});var dl=i(Qt);wo=a(dl,"A",{id:!0,class:!0,href:!0});var gg=i(wo);Ta=a(gg,"SPAN",{});var _g=i(Ta);T(Xn.$$.fragment,_g),_g.forEach(t),gg.forEach(t),eh=d(dl),wa=a(dl,"SPAN",{});var bg=i(wa);th=s(bg,"TFDebertaV2Model"),bg.forEach(t),dl.forEach(t),Mi=d(o),Ae=a(o,"DIV",{class:!0});var kt=i(Ae);T(Yn.$$.fragment,kt),oh=d(kt),Zn=a(kt,"P",{});var cl=i(Zn);nh=s(cl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),es=a(cl,"A",{href:!0,rel:!0});var vg=i(es);sh=s(vg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vg.forEach(t),rh=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),ah=d(kt),ts=a(kt,"P",{});var pl=i(ts);ih=s(pl,"This model is also a "),os=a(pl,"A",{href:!0,rel:!0});var kg=i(os);lh=s(kg,"tf.keras.Model"),kg.forEach(t),dh=s(pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pl.forEach(t),ch=d(kt),T(yo.$$.fragment,kt),ph=d(kt),We=a(kt,"DIV",{class:!0});var Tt=i(We);T(ns.$$.fragment,Tt),hh=d(Tt),Gt=a(Tt,"P",{});var Tr=i(Gt);fh=s(Tr,"The "),or=a(Tr,"A",{href:!0});var Tg=i(or);mh=s(Tg,"TFDebertaV2Model"),Tg.forEach(t),uh=s(Tr," forward method, overrides the "),ya=a(Tr,"CODE",{});var wg=i(ya);gh=s(wg,"__call__"),wg.forEach(t),_h=s(Tr," special method."),Tr.forEach(t),bh=d(Tt),T(Do.$$.fragment,Tt),vh=d(Tt),Da=a(Tt,"P",{});var yg=i(Da);kh=s(yg,"Example:"),yg.forEach(t),Th=d(Tt),T(ss.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Ci=d(o),Kt=a(o,"H2",{class:!0});var hl=i(Kt);Eo=a(hl,"A",{id:!0,class:!0,href:!0});var Dg=i(Eo);Ea=a(Dg,"SPAN",{});var Eg=i(Ea);T(rs.$$.fragment,Eg),Eg.forEach(t),Dg.forEach(t),wh=d(hl),$a=a(hl,"SPAN",{});var $g=i($a);yh=s($g,"TFDebertaV2PreTrainedModel"),$g.forEach(t),hl.forEach(t),xi=d(o),ct=a(o,"DIV",{class:!0});var wr=i(ct);T(as.$$.fragment,wr),Dh=d(wr),Fa=a(wr,"P",{});var Fg=i(Fa);Eh=s(Fg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Fg.forEach(t),$h=d(wr),ot=a(wr,"DIV",{class:!0});var Wo=i(ot);T(is.$$.fragment,Wo),Fh=d(Wo),Va=a(Wo,"P",{});var Vg=i(Va);Vh=s(Vg,"Calls the model on new inputs and returns the outputs as tensors."),Vg.forEach(t),qh=d(Wo),ls=a(Wo,"P",{});var fl=i(ls);zh=s(fl,"In this case "),qa=a(fl,"CODE",{});var qg=i(qa);Mh=s(qg,"call()"),qg.forEach(t),Ch=s(fl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),fl.forEach(t),xh=d(Wo),Ye=a(Wo,"P",{});var wt=i(Ye);Rh=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),za=a(wt,"CODE",{});var zg=i(za);Ph=s(zg,"tf.keras.Model"),zg.forEach(t),Bh=s(wt,`.
To call a model on an input, always use the `),Ma=a(wt,"CODE",{});var Mg=i(Ma);jh=s(Mg,"__call__()"),Mg.forEach(t),Ah=s(wt,` method,
i.e. `),Ca=a(wt,"CODE",{});var Cg=i(Ca);Lh=s(Cg,"model(inputs)"),Cg.forEach(t),Ih=s(wt,", which relies on the underlying "),xa=a(wt,"CODE",{});var xg=i(xa);Sh=s(xg,"call()"),xg.forEach(t),Nh=s(wt," method."),wt.forEach(t),Wo.forEach(t),wr.forEach(t),Ri=d(o),Jt=a(o,"H2",{class:!0});var ml=i(Jt);$o=a(ml,"A",{id:!0,class:!0,href:!0});var Rg=i($o);Ra=a(Rg,"SPAN",{});var Pg=i(Ra);T(ds.$$.fragment,Pg),Pg.forEach(t),Rg.forEach(t),Oh=d(ml),Pa=a(ml,"SPAN",{});var Bg=i(Pa);Wh=s(Bg,"TFDebertaV2ForMaskedLM"),Bg.forEach(t),ml.forEach(t),Pi=d(o),Le=a(o,"DIV",{class:!0});var yt=i(Le);T(cs.$$.fragment,yt),Hh=d(yt),Xt=a(yt,"P",{});var yr=i(Xt);Uh=s(yr,"DeBERTa Model with a "),Ba=a(yr,"CODE",{});var jg=i(Ba);Qh=s(jg,"language modeling"),jg.forEach(t),Gh=s(yr,` head on top.
The DeBERTa model was proposed in `),ps=a(yr,"A",{href:!0,rel:!0});var Ag=i(ps);Kh=s(Ag,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ag.forEach(t),Jh=s(yr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yr.forEach(t),Xh=d(yt),hs=a(yt,"P",{});var ul=i(hs);Yh=s(ul,"This model is also a "),fs=a(ul,"A",{href:!0,rel:!0});var Lg=i(fs);Zh=s(Lg,"tf.keras.Model"),Lg.forEach(t),ef=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),tf=d(yt),T(Fo.$$.fragment,yt),of=d(yt),He=a(yt,"DIV",{class:!0});var Dt=i(He);T(ms.$$.fragment,Dt),nf=d(Dt),Yt=a(Dt,"P",{});var Dr=i(Yt);sf=s(Dr,"The "),nr=a(Dr,"A",{href:!0});var Ig=i(nr);rf=s(Ig,"TFDebertaV2ForMaskedLM"),Ig.forEach(t),af=s(Dr," forward method, overrides the "),ja=a(Dr,"CODE",{});var Sg=i(ja);lf=s(Sg,"__call__"),Sg.forEach(t),df=s(Dr," special method."),Dr.forEach(t),cf=d(Dt),T(Vo.$$.fragment,Dt),pf=d(Dt),Aa=a(Dt,"P",{});var Ng=i(Aa);hf=s(Ng,"Example:"),Ng.forEach(t),ff=d(Dt),T(us.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),Bi=d(o),Zt=a(o,"H2",{class:!0});var gl=i(Zt);qo=a(gl,"A",{id:!0,class:!0,href:!0});var Og=i(qo);La=a(Og,"SPAN",{});var Wg=i(La);T(gs.$$.fragment,Wg),Wg.forEach(t),Og.forEach(t),mf=d(gl),Ia=a(gl,"SPAN",{});var Hg=i(Ia);uf=s(Hg,"TFDebertaV2ForSequenceClassification"),Hg.forEach(t),gl.forEach(t),ji=d(o),ze=a(o,"DIV",{class:!0});var st=i(ze);T(_s.$$.fragment,st),gf=d(st),Sa=a(st,"P",{});var Ug=i(Sa);_f=s(Ug,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ug.forEach(t),bf=d(st),bs=a(st,"P",{});var _l=i(bs);vf=s(_l,"The DeBERTa model was proposed in "),vs=a(_l,"A",{href:!0,rel:!0});var Qg=i(vs);kf=s(Qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qg.forEach(t),Tf=s(_l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_l.forEach(t),wf=d(st),ks=a(st,"P",{});var bl=i(ks);yf=s(bl,"This model is also a "),Ts=a(bl,"A",{href:!0,rel:!0});var Gg=i(Ts);Df=s(Gg,"tf.keras.Model"),Gg.forEach(t),Ef=s(bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bl.forEach(t),$f=d(st),T(zo.$$.fragment,st),Ff=d(st),Ue=a(st,"DIV",{class:!0});var Et=i(Ue);T(ws.$$.fragment,Et),Vf=d(Et),eo=a(Et,"P",{});var Er=i(eo);qf=s(Er,"The "),sr=a(Er,"A",{href:!0});var Kg=i(sr);zf=s(Kg,"TFDebertaV2ForSequenceClassification"),Kg.forEach(t),Mf=s(Er," forward method, overrides the "),Na=a(Er,"CODE",{});var Jg=i(Na);Cf=s(Jg,"__call__"),Jg.forEach(t),xf=s(Er," special method."),Er.forEach(t),Rf=d(Et),T(Mo.$$.fragment,Et),Pf=d(Et),Oa=a(Et,"P",{});var Xg=i(Oa);Bf=s(Xg,"Example:"),Xg.forEach(t),jf=d(Et),T(ys.$$.fragment,Et),Et.forEach(t),st.forEach(t),Ai=d(o),to=a(o,"H2",{class:!0});var vl=i(to);Co=a(vl,"A",{id:!0,class:!0,href:!0});var Yg=i(Co);Wa=a(Yg,"SPAN",{});var Zg=i(Wa);T(Ds.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),Af=d(vl),Ha=a(vl,"SPAN",{});var e_=i(Ha);Lf=s(e_,"TFDebertaV2ForTokenClassification"),e_.forEach(t),vl.forEach(t),Li=d(o),Me=a(o,"DIV",{class:!0});var rt=i(Me);T(Es.$$.fragment,rt),If=d(rt),Ua=a(rt,"P",{});var t_=i(Ua);Sf=s(t_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),t_.forEach(t),Nf=d(rt),$s=a(rt,"P",{});var kl=i($s);Of=s(kl,"The DeBERTa model was proposed in "),Fs=a(kl,"A",{href:!0,rel:!0});var o_=i(Fs);Wf=s(o_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),o_.forEach(t),Hf=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Uf=d(rt),Vs=a(rt,"P",{});var Tl=i(Vs);Qf=s(Tl,"This model is also a "),qs=a(Tl,"A",{href:!0,rel:!0});var n_=i(qs);Gf=s(n_,"tf.keras.Model"),n_.forEach(t),Kf=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),Jf=d(rt),T(xo.$$.fragment,rt),Xf=d(rt),Qe=a(rt,"DIV",{class:!0});var $t=i(Qe);T(zs.$$.fragment,$t),Yf=d($t),oo=a($t,"P",{});var $r=i(oo);Zf=s($r,"The "),rr=a($r,"A",{href:!0});var s_=i(rr);em=s(s_,"TFDebertaV2ForTokenClassification"),s_.forEach(t),tm=s($r," forward method, overrides the "),Qa=a($r,"CODE",{});var r_=i(Qa);om=s(r_,"__call__"),r_.forEach(t),nm=s($r," special method."),$r.forEach(t),sm=d($t),T(Ro.$$.fragment,$t),rm=d($t),Ga=a($t,"P",{});var a_=i(Ga);am=s(a_,"Example:"),a_.forEach(t),im=d($t),T(Ms.$$.fragment,$t),$t.forEach(t),rt.forEach(t),Ii=d(o),no=a(o,"H2",{class:!0});var wl=i(no);Po=a(wl,"A",{id:!0,class:!0,href:!0});var i_=i(Po);Ka=a(i_,"SPAN",{});var l_=i(Ka);T(Cs.$$.fragment,l_),l_.forEach(t),i_.forEach(t),lm=d(wl),Ja=a(wl,"SPAN",{});var d_=i(Ja);dm=s(d_,"TFDebertaV2ForQuestionAnswering"),d_.forEach(t),wl.forEach(t),Si=d(o),Ce=a(o,"DIV",{class:!0});var at=i(Ce);T(xs.$$.fragment,at),cm=d(at),so=a(at,"P",{});var Fr=i(so);pm=s(Fr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Xa=a(Fr,"CODE",{});var c_=i(Xa);hm=s(c_,"span start logits"),c_.forEach(t),fm=s(Fr," and "),Ya=a(Fr,"CODE",{});var p_=i(Ya);mm=s(p_,"span end logits"),p_.forEach(t),um=s(Fr,")."),Fr.forEach(t),gm=d(at),Rs=a(at,"P",{});var yl=i(Rs);_m=s(yl,"The DeBERTa model was proposed in "),Ps=a(yl,"A",{href:!0,rel:!0});var h_=i(Ps);bm=s(h_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h_.forEach(t),vm=s(yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),yl.forEach(t),km=d(at),Bs=a(at,"P",{});var Dl=i(Bs);Tm=s(Dl,"This model is also a "),js=a(Dl,"A",{href:!0,rel:!0});var f_=i(js);wm=s(f_,"tf.keras.Model"),f_.forEach(t),ym=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),Dm=d(at),T(Bo.$$.fragment,at),Em=d(at),Ge=a(at,"DIV",{class:!0});var Ft=i(Ge);T(As.$$.fragment,Ft),$m=d(Ft),ro=a(Ft,"P",{});var Vr=i(ro);Fm=s(Vr,"The "),ar=a(Vr,"A",{href:!0});var m_=i(ar);Vm=s(m_,"TFDebertaV2ForQuestionAnswering"),m_.forEach(t),qm=s(Vr," forward method, overrides the "),Za=a(Vr,"CODE",{});var u_=i(Za);zm=s(u_,"__call__"),u_.forEach(t),Mm=s(Vr," special method."),Vr.forEach(t),Cm=d(Ft),T(jo.$$.fragment,Ft),xm=d(Ft),ei=a(Ft,"P",{});var g_=i(ei);Rm=s(g_,"Example:"),g_.forEach(t),Pm=d(Ft),T(Ls.$$.fragment,Ft),Ft.forEach(t),at.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(A_)),c(g,"id","debertav2"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(j,"href","https://github.com/microsoft/DeBERTa"),c(j,"rel","nofollow"),c(R,"href","https://github.com/microsoft/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ao,"id","transformers.DebertaV2Config"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(Qs,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(Gs,"href","/docs/transformers/pr_15995/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ks,"href","/docs/transformers/pr_15995/en/main_classes/configuration#transformers.PretrainedConfig"),c(lt,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(pt,"class","docstring"),c(lo,"class","docstring"),c(et,"class","docstring"),c(Js,"class","docstring"),c(qe,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(Rt,"class","relative group"),c(pn,"href","https://arxiv.org/abs/2006.03654"),c(pn,"rel","nofollow"),c(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fn,"rel","nofollow"),c(Xs,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ie,"class","docstring"),c(Je,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Bt,"class","relative group"),c(tt,"class","docstring"),c(dt,"class","docstring"),c(mo,"id","transformers.DebertaV2ForMaskedLM"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaV2ForMaskedLM"),c(jt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(Ys,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(qn,"href","https://arxiv.org/abs/2006.03654"),c(qn,"rel","nofollow"),c(Mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Mn,"rel","nofollow"),c(Zs,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(Ve,"class","docstring"),c(Pe,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(Nt,"class","relative group"),c(An,"href","https://arxiv.org/abs/2006.03654"),c(An,"rel","nofollow"),c(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(In,"rel","nofollow"),c(er,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Ne,"class","docstring"),c(Be,"class","docstring"),c(ko,"id","transformers.DebertaV2ForQuestionAnswering"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Un,"href","https://arxiv.org/abs/2006.03654"),c(Un,"rel","nofollow"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(tr,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Oe,"class","docstring"),c(je,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(es,"href","https://arxiv.org/abs/2006.03654"),c(es,"rel","nofollow"),c(os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(os,"rel","nofollow"),c(or,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(We,"class","docstring"),c(Ae,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2PreTrainedModel"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(ot,"class","docstring"),c(ct,"class","docstring"),c($o,"id","transformers.TFDebertaV2ForMaskedLM"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(ps,"href","https://arxiv.org/abs/2006.03654"),c(ps,"rel","nofollow"),c(fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fs,"rel","nofollow"),c(nr,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(He,"class","docstring"),c(Le,"class","docstring"),c(qo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c(vs,"href","https://arxiv.org/abs/2006.03654"),c(vs,"rel","nofollow"),c(Ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ts,"rel","nofollow"),c(sr,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ue,"class","docstring"),c(ze,"class","docstring"),c(Co,"id","transformers.TFDebertaV2ForTokenClassification"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c(Fs,"href","https://arxiv.org/abs/2006.03654"),c(Fs,"rel","nofollow"),c(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(qs,"rel","nofollow"),c(rr,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Po,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/2006.03654"),c(Ps,"rel","nofollow"),c(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(js,"rel","nofollow"),c(ar,"href","/docs/transformers/pr_15995/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Ge,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,h),f(o,$,m),f(o,u,m),e(u,g),e(g,v),w(b,v,null),e(u,_),e(u,V),e(V,de),f(o,J,m),f(o,q,m),e(q,Y),e(Y,I),w(ee,I,null),e(q,ce),e(q,S),e(S,pe),f(o,ae,m),f(o,O,m),e(O,P),e(O,te),e(te,Z),e(O,z),f(o,C,m),f(o,ne,m),e(ne,W),f(o,ie,m),f(o,se,m),e(se,H),f(o,le,m),f(o,re,m),e(re,M),e(M,he),e(M,j),e(j,fe),e(M,me),f(o,N,m),f(o,X,m),e(X,ue),e(X,R),e(R,ge),e(X,U),e(X,oe),e(oe,p),f(o,F,m),f(o,G,m),e(G,ye),f(o,we,m),f(o,x,m),e(x,_e),e(_e,ke),e(ke,De),e(_e,B),e(_e,A),e(A,Ee),e(_e,$e),e(x,Q),e(x,ve),e(ve,Te),e(Te,be),e(ve,Fe),e(x,El),e(x,Ws),e(Ws,qr),e(qr,$l),e(Ws,Fl),e(x,Vl),e(x,Hs),e(Hs,zr),e(zr,ql),e(Hs,zl),e(x,Ml),e(x,Us),e(Us,Mr),e(Mr,Cl),e(Us,xl),f(o,fi,m),f(o,Ze,m),e(Ze,Rl),e(Ze,Ho),e(Ho,Pl),e(Ze,Bl),e(Ze,Uo),e(Uo,jl),e(Ze,Al),e(Ze,Qo),e(Qo,Ll),e(Ze,Il),f(o,mi,m),f(o,Vt,m),e(Vt,ao),e(ao,Cr),w(Go,Cr,null),e(Vt,Sl),e(Vt,xr),e(xr,Nl),f(o,ui,m),f(o,lt,m),w(Ko,lt,null),e(lt,Ol),e(lt,qt),e(qt,Wl),e(qt,Qs),e(Qs,Hl),e(qt,Ul),e(qt,Jo),e(Jo,Ql),e(qt,Gl),e(lt,Kl),e(lt,zt),e(zt,Jl),e(zt,Gs),e(Gs,Xl),e(zt,Yl),e(zt,Ks),e(Ks,Zl),e(zt,ed),f(o,gi,m),f(o,Mt,m),e(Mt,io),e(io,Rr),w(Xo,Rr,null),e(Mt,td),e(Mt,Pr),e(Pr,od),f(o,_i,m),f(o,qe,m),w(Yo,qe,null),e(qe,nd),e(qe,Zo),e(Zo,sd),e(Zo,en),e(en,rd),e(Zo,ad),e(qe,id),e(qe,pt),w(tn,pt,null),e(pt,ld),e(pt,Br),e(Br,dd),e(pt,cd),e(pt,on),e(on,jr),e(jr,pd),e(on,hd),e(on,Ar),e(Ar,fd),e(qe,md),e(qe,lo),w(nn,lo,null),e(lo,ud),e(lo,Ct),e(Ct,gd),e(Ct,Lr),e(Lr,_d),e(Ct,bd),e(Ct,Ir),e(Ir,vd),e(Ct,kd),e(qe,Td),e(qe,et),w(sn,et,null),e(et,wd),e(et,Sr),e(Sr,yd),e(et,Dd),w(rn,et,null),e(et,Ed),e(et,xt),e(xt,$d),e(xt,Nr),e(Nr,Fd),e(xt,Vd),e(xt,Or),e(Or,qd),e(xt,zd),e(qe,Md),e(qe,Js),w(an,Js,null),f(o,bi,m),f(o,Rt,m),e(Rt,co),e(co,Wr),w(ln,Wr,null),e(Rt,Cd),e(Rt,Hr),e(Hr,xd),f(o,vi,m),f(o,Je,m),w(dn,Je,null),e(Je,Rd),e(Je,cn),e(cn,Pd),e(cn,pn),e(pn,Bd),e(cn,jd),e(Je,Ad),e(Je,hn),e(hn,Ld),e(hn,fn),e(fn,Id),e(hn,Sd),e(Je,Nd),e(Je,Ie),w(mn,Ie,null),e(Ie,Od),e(Ie,Pt),e(Pt,Wd),e(Pt,Xs),e(Xs,Hd),e(Pt,Ud),e(Pt,Ur),e(Ur,Qd),e(Pt,Gd),e(Ie,Kd),w(po,Ie,null),e(Ie,Jd),e(Ie,Qr),e(Qr,Xd),e(Ie,Yd),w(un,Ie,null),f(o,ki,m),f(o,Bt,m),e(Bt,ho),e(ho,Gr),w(gn,Gr,null),e(Bt,Zd),e(Bt,Kr),e(Kr,ec),f(o,Ti,m),f(o,dt,m),w(_n,dt,null),e(dt,tc),e(dt,Jr),e(Jr,oc),e(dt,nc),e(dt,tt),w(bn,tt,null),e(tt,sc),e(tt,Xr),e(Xr,rc),e(tt,ac),e(tt,Yr),e(Yr,ic),e(tt,lc),w(fo,tt,null),f(o,wi,m),f(o,jt,m),e(jt,mo),e(mo,Zr),w(vn,Zr,null),e(jt,dc),e(jt,ea),e(ea,cc),f(o,yi,m),f(o,Xe,m),w(kn,Xe,null),e(Xe,pc),e(Xe,At),e(At,hc),e(At,ta),e(ta,fc),e(At,mc),e(At,Tn),e(Tn,uc),e(At,gc),e(Xe,_c),e(Xe,wn),e(wn,bc),e(wn,yn),e(yn,vc),e(wn,kc),e(Xe,Tc),e(Xe,Se),w(Dn,Se,null),e(Se,wc),e(Se,Lt),e(Lt,yc),e(Lt,Ys),e(Ys,Dc),e(Lt,Ec),e(Lt,oa),e(oa,$c),e(Lt,Fc),e(Se,Vc),w(uo,Se,null),e(Se,qc),e(Se,na),e(na,zc),e(Se,Mc),w(En,Se,null),f(o,Di,m),f(o,It,m),e(It,go),e(go,sa),w($n,sa,null),e(It,Cc),e(It,ra),e(ra,xc),f(o,Ei,m),f(o,Pe,m),w(Fn,Pe,null),e(Pe,Rc),e(Pe,aa),e(aa,Pc),e(Pe,Bc),e(Pe,Vn),e(Vn,jc),e(Vn,qn),e(qn,Ac),e(Vn,Lc),e(Pe,Ic),e(Pe,zn),e(zn,Sc),e(zn,Mn),e(Mn,Nc),e(zn,Oc),e(Pe,Wc),e(Pe,Ve),w(Cn,Ve,null),e(Ve,Hc),e(Ve,St),e(St,Uc),e(St,Zs),e(Zs,Qc),e(St,Gc),e(St,ia),e(ia,Kc),e(St,Jc),e(Ve,Xc),w(_o,Ve,null),e(Ve,Yc),e(Ve,la),e(la,Zc),e(Ve,ep),w(xn,Ve,null),e(Ve,tp),e(Ve,da),e(da,op),e(Ve,np),w(Rn,Ve,null),f(o,$i,m),f(o,Nt,m),e(Nt,bo),e(bo,ca),w(Pn,ca,null),e(Nt,sp),e(Nt,pa),e(pa,rp),f(o,Fi,m),f(o,Be,m),w(Bn,Be,null),e(Be,ap),e(Be,ha),e(ha,ip),e(Be,lp),e(Be,jn),e(jn,dp),e(jn,An),e(An,cp),e(jn,pp),e(Be,hp),e(Be,Ln),e(Ln,fp),e(Ln,In),e(In,mp),e(Ln,up),e(Be,gp),e(Be,Ne),w(Sn,Ne,null),e(Ne,_p),e(Ne,Ot),e(Ot,bp),e(Ot,er),e(er,vp),e(Ot,kp),e(Ot,fa),e(fa,Tp),e(Ot,wp),e(Ne,yp),w(vo,Ne,null),e(Ne,Dp),e(Ne,ma),e(ma,Ep),e(Ne,$p),w(Nn,Ne,null),f(o,Vi,m),f(o,Wt,m),e(Wt,ko),e(ko,ua),w(On,ua,null),e(Wt,Fp),e(Wt,ga),e(ga,Vp),f(o,qi,m),f(o,je,m),w(Wn,je,null),e(je,qp),e(je,Ht),e(Ht,zp),e(Ht,_a),e(_a,Mp),e(Ht,Cp),e(Ht,ba),e(ba,xp),e(Ht,Rp),e(je,Pp),e(je,Hn),e(Hn,Bp),e(Hn,Un),e(Un,jp),e(Hn,Ap),e(je,Lp),e(je,Qn),e(Qn,Ip),e(Qn,Gn),e(Gn,Sp),e(Qn,Np),e(je,Op),e(je,Oe),w(Kn,Oe,null),e(Oe,Wp),e(Oe,Ut),e(Ut,Hp),e(Ut,tr),e(tr,Up),e(Ut,Qp),e(Ut,va),e(va,Gp),e(Ut,Kp),e(Oe,Jp),w(To,Oe,null),e(Oe,Xp),e(Oe,ka),e(ka,Yp),e(Oe,Zp),w(Jn,Oe,null),f(o,zi,m),f(o,Qt,m),e(Qt,wo),e(wo,Ta),w(Xn,Ta,null),e(Qt,eh),e(Qt,wa),e(wa,th),f(o,Mi,m),f(o,Ae,m),w(Yn,Ae,null),e(Ae,oh),e(Ae,Zn),e(Zn,nh),e(Zn,es),e(es,sh),e(Zn,rh),e(Ae,ah),e(Ae,ts),e(ts,ih),e(ts,os),e(os,lh),e(ts,dh),e(Ae,ch),w(yo,Ae,null),e(Ae,ph),e(Ae,We),w(ns,We,null),e(We,hh),e(We,Gt),e(Gt,fh),e(Gt,or),e(or,mh),e(Gt,uh),e(Gt,ya),e(ya,gh),e(Gt,_h),e(We,bh),w(Do,We,null),e(We,vh),e(We,Da),e(Da,kh),e(We,Th),w(ss,We,null),f(o,Ci,m),f(o,Kt,m),e(Kt,Eo),e(Eo,Ea),w(rs,Ea,null),e(Kt,wh),e(Kt,$a),e($a,yh),f(o,xi,m),f(o,ct,m),w(as,ct,null),e(ct,Dh),e(ct,Fa),e(Fa,Eh),e(ct,$h),e(ct,ot),w(is,ot,null),e(ot,Fh),e(ot,Va),e(Va,Vh),e(ot,qh),e(ot,ls),e(ls,zh),e(ls,qa),e(qa,Mh),e(ls,Ch),e(ot,xh),e(ot,Ye),e(Ye,Rh),e(Ye,za),e(za,Ph),e(Ye,Bh),e(Ye,Ma),e(Ma,jh),e(Ye,Ah),e(Ye,Ca),e(Ca,Lh),e(Ye,Ih),e(Ye,xa),e(xa,Sh),e(Ye,Nh),f(o,Ri,m),f(o,Jt,m),e(Jt,$o),e($o,Ra),w(ds,Ra,null),e(Jt,Oh),e(Jt,Pa),e(Pa,Wh),f(o,Pi,m),f(o,Le,m),w(cs,Le,null),e(Le,Hh),e(Le,Xt),e(Xt,Uh),e(Xt,Ba),e(Ba,Qh),e(Xt,Gh),e(Xt,ps),e(ps,Kh),e(Xt,Jh),e(Le,Xh),e(Le,hs),e(hs,Yh),e(hs,fs),e(fs,Zh),e(hs,ef),e(Le,tf),w(Fo,Le,null),e(Le,of),e(Le,He),w(ms,He,null),e(He,nf),e(He,Yt),e(Yt,sf),e(Yt,nr),e(nr,rf),e(Yt,af),e(Yt,ja),e(ja,lf),e(Yt,df),e(He,cf),w(Vo,He,null),e(He,pf),e(He,Aa),e(Aa,hf),e(He,ff),w(us,He,null),f(o,Bi,m),f(o,Zt,m),e(Zt,qo),e(qo,La),w(gs,La,null),e(Zt,mf),e(Zt,Ia),e(Ia,uf),f(o,ji,m),f(o,ze,m),w(_s,ze,null),e(ze,gf),e(ze,Sa),e(Sa,_f),e(ze,bf),e(ze,bs),e(bs,vf),e(bs,vs),e(vs,kf),e(bs,Tf),e(ze,wf),e(ze,ks),e(ks,yf),e(ks,Ts),e(Ts,Df),e(ks,Ef),e(ze,$f),w(zo,ze,null),e(ze,Ff),e(ze,Ue),w(ws,Ue,null),e(Ue,Vf),e(Ue,eo),e(eo,qf),e(eo,sr),e(sr,zf),e(eo,Mf),e(eo,Na),e(Na,Cf),e(eo,xf),e(Ue,Rf),w(Mo,Ue,null),e(Ue,Pf),e(Ue,Oa),e(Oa,Bf),e(Ue,jf),w(ys,Ue,null),f(o,Ai,m),f(o,to,m),e(to,Co),e(Co,Wa),w(Ds,Wa,null),e(to,Af),e(to,Ha),e(Ha,Lf),f(o,Li,m),f(o,Me,m),w(Es,Me,null),e(Me,If),e(Me,Ua),e(Ua,Sf),e(Me,Nf),e(Me,$s),e($s,Of),e($s,Fs),e(Fs,Wf),e($s,Hf),e(Me,Uf),e(Me,Vs),e(Vs,Qf),e(Vs,qs),e(qs,Gf),e(Vs,Kf),e(Me,Jf),w(xo,Me,null),e(Me,Xf),e(Me,Qe),w(zs,Qe,null),e(Qe,Yf),e(Qe,oo),e(oo,Zf),e(oo,rr),e(rr,em),e(oo,tm),e(oo,Qa),e(Qa,om),e(oo,nm),e(Qe,sm),w(Ro,Qe,null),e(Qe,rm),e(Qe,Ga),e(Ga,am),e(Qe,im),w(Ms,Qe,null),f(o,Ii,m),f(o,no,m),e(no,Po),e(Po,Ka),w(Cs,Ka,null),e(no,lm),e(no,Ja),e(Ja,dm),f(o,Si,m),f(o,Ce,m),w(xs,Ce,null),e(Ce,cm),e(Ce,so),e(so,pm),e(so,Xa),e(Xa,hm),e(so,fm),e(so,Ya),e(Ya,mm),e(so,um),e(Ce,gm),e(Ce,Rs),e(Rs,_m),e(Rs,Ps),e(Ps,bm),e(Rs,vm),e(Ce,km),e(Ce,Bs),e(Bs,Tm),e(Bs,js),e(js,wm),e(Bs,ym),e(Ce,Dm),w(Bo,Ce,null),e(Ce,Em),e(Ce,Ge),w(As,Ge,null),e(Ge,$m),e(Ge,ro),e(ro,Fm),e(ro,ar),e(ar,Vm),e(ro,qm),e(ro,Za),e(Za,zm),e(ro,Mm),e(Ge,Cm),w(jo,Ge,null),e(Ge,xm),e(Ge,ei),e(ei,Rm),e(Ge,Pm),w(Ls,Ge,null),Ni=!0},p(o,[m]){const Is={};m&2&&(Is.$$scope={dirty:m,ctx:o}),po.$set(Is);const ti={};m&2&&(ti.$$scope={dirty:m,ctx:o}),fo.$set(ti);const oi={};m&2&&(oi.$$scope={dirty:m,ctx:o}),uo.$set(oi);const ni={};m&2&&(ni.$$scope={dirty:m,ctx:o}),_o.$set(ni);const Ss={};m&2&&(Ss.$$scope={dirty:m,ctx:o}),vo.$set(Ss);const si={};m&2&&(si.$$scope={dirty:m,ctx:o}),To.$set(si);const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),yo.$set(ri);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),Do.$set(ai);const Ns={};m&2&&(Ns.$$scope={dirty:m,ctx:o}),Fo.$set(Ns);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),Vo.$set(ii);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),zo.$set(li);const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),Mo.$set(di);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),xo.$set(ci);const Os={};m&2&&(Os.$$scope={dirty:m,ctx:o}),Ro.$set(Os);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),Bo.$set(pi);const Ao={};m&2&&(Ao.$$scope={dirty:m,ctx:o}),jo.$set(Ao)},i(o){Ni||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(mn.$$.fragment,o),y(po.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(fo.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y(En.$$.fragment,o),y($n.$$.fragment,o),y(Fn.$$.fragment,o),y(Cn.$$.fragment,o),y(_o.$$.fragment,o),y(xn.$$.fragment,o),y(Rn.$$.fragment,o),y(Pn.$$.fragment,o),y(Bn.$$.fragment,o),y(Sn.$$.fragment,o),y(vo.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Wn.$$.fragment,o),y(Kn.$$.fragment,o),y(To.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(yo.$$.fragment,o),y(ns.$$.fragment,o),y(Do.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(is.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(Fo.$$.fragment,o),y(ms.$$.fragment,o),y(Vo.$$.fragment,o),y(us.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(zo.$$.fragment,o),y(ws.$$.fragment,o),y(Mo.$$.fragment,o),y(ys.$$.fragment,o),y(Ds.$$.fragment,o),y(Es.$$.fragment,o),y(xo.$$.fragment,o),y(zs.$$.fragment,o),y(Ro.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(xs.$$.fragment,o),y(Bo.$$.fragment,o),y(As.$$.fragment,o),y(jo.$$.fragment,o),y(Ls.$$.fragment,o),Ni=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(tn.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(ln.$$.fragment,o),D(dn.$$.fragment,o),D(mn.$$.fragment,o),D(po.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(fo.$$.fragment,o),D(vn.$$.fragment,o),D(kn.$$.fragment,o),D(Dn.$$.fragment,o),D(uo.$$.fragment,o),D(En.$$.fragment,o),D($n.$$.fragment,o),D(Fn.$$.fragment,o),D(Cn.$$.fragment,o),D(_o.$$.fragment,o),D(xn.$$.fragment,o),D(Rn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(Sn.$$.fragment,o),D(vo.$$.fragment,o),D(Nn.$$.fragment,o),D(On.$$.fragment,o),D(Wn.$$.fragment,o),D(Kn.$$.fragment,o),D(To.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(Yn.$$.fragment,o),D(yo.$$.fragment,o),D(ns.$$.fragment,o),D(Do.$$.fragment,o),D(ss.$$.fragment,o),D(rs.$$.fragment,o),D(as.$$.fragment,o),D(is.$$.fragment,o),D(ds.$$.fragment,o),D(cs.$$.fragment,o),D(Fo.$$.fragment,o),D(ms.$$.fragment,o),D(Vo.$$.fragment,o),D(us.$$.fragment,o),D(gs.$$.fragment,o),D(_s.$$.fragment,o),D(zo.$$.fragment,o),D(ws.$$.fragment,o),D(Mo.$$.fragment,o),D(ys.$$.fragment,o),D(Ds.$$.fragment,o),D(Es.$$.fragment,o),D(xo.$$.fragment,o),D(zs.$$.fragment,o),D(Ro.$$.fragment,o),D(Ms.$$.fragment,o),D(Cs.$$.fragment,o),D(xs.$$.fragment,o),D(Bo.$$.fragment,o),D(As.$$.fragment,o),D(jo.$$.fragment,o),D(Ls.$$.fragment,o),Ni=!1},d(o){t(h),o&&t($),o&&t(u),E(b),o&&t(J),o&&t(q),E(ee),o&&t(ae),o&&t(O),o&&t(C),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(re),o&&t(N),o&&t(X),o&&t(F),o&&t(G),o&&t(we),o&&t(x),o&&t(fi),o&&t(Ze),o&&t(mi),o&&t(Vt),E(Go),o&&t(ui),o&&t(lt),E(Ko),o&&t(gi),o&&t(Mt),E(Xo),o&&t(_i),o&&t(qe),E(Yo),E(tn),E(nn),E(sn),E(rn),E(an),o&&t(bi),o&&t(Rt),E(ln),o&&t(vi),o&&t(Je),E(dn),E(mn),E(po),E(un),o&&t(ki),o&&t(Bt),E(gn),o&&t(Ti),o&&t(dt),E(_n),E(bn),E(fo),o&&t(wi),o&&t(jt),E(vn),o&&t(yi),o&&t(Xe),E(kn),E(Dn),E(uo),E(En),o&&t(Di),o&&t(It),E($n),o&&t(Ei),o&&t(Pe),E(Fn),E(Cn),E(_o),E(xn),E(Rn),o&&t($i),o&&t(Nt),E(Pn),o&&t(Fi),o&&t(Be),E(Bn),E(Sn),E(vo),E(Nn),o&&t(Vi),o&&t(Wt),E(On),o&&t(qi),o&&t(je),E(Wn),E(Kn),E(To),E(Jn),o&&t(zi),o&&t(Qt),E(Xn),o&&t(Mi),o&&t(Ae),E(Yn),E(yo),E(ns),E(Do),E(ss),o&&t(Ci),o&&t(Kt),E(rs),o&&t(xi),o&&t(ct),E(as),E(is),o&&t(Ri),o&&t(Jt),E(ds),o&&t(Pi),o&&t(Le),E(cs),E(Fo),E(ms),E(Vo),E(us),o&&t(Bi),o&&t(Zt),E(gs),o&&t(ji),o&&t(ze),E(_s),E(zo),E(ws),E(Mo),E(ys),o&&t(Ai),o&&t(to),E(Ds),o&&t(Li),o&&t(Me),E(Es),E(xo),E(zs),E(Ro),E(Ms),o&&t(Ii),o&&t(no),E(Cs),o&&t(Si),o&&t(Ce),E(xs),E(Bo),E(As),E(jo),E(Ls)}}}const A_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function L_(L,h,$){let{fw:u}=h;return L.$$set=g=>{"fw"in g&&$(0,u=g.fw)},[u]}class U_ extends __{constructor(h){super();b_(this,h,L_,j_,v_,{fw:0})}}export{U_ as default,A_ as metadata};
