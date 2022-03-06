import{S as Fb,i as qb,s as Vb,e as r,k as l,w as k,t as n,M as zb,c as a,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as f,y as w,q as y,o as D,B as E}from"../../chunks/vendor-4833417e.js";import{T as Pe}from"../../chunks/Tip-fffd6df1.js";import{D as G}from"../../chunks/Docstring-7b52c3d4.js";import{C as et}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as xe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Mb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Cb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r("code"),g=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function xb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Pb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Rb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Bb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function jb(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),V=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),R=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),P=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var K=i(g);v=a(K,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(K),q=a(K,"LI",{});var we=i(q);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),K.forEach(t),J=d(p),V=a(p,"P",{});var x=i(V);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),R=a(p,"P",{});var De=i(R);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),P=a(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,q),e(q,de),f(p,J,F),f(p,V,F),e(V,Y),e(V,I),e(I,ee),e(V,ce),e(V,S),e(S,pe),e(V,ae),f(p,O,F),f(p,R,F),e(R,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(V),p&&t(O),p&&t(R),p&&t(Z),p&&t(z)}}}function Ab(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Lb(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),V=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),R=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),P=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var K=i(g);v=a(K,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(K),q=a(K,"LI",{});var we=i(q);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),K.forEach(t),J=d(p),V=a(p,"P",{});var x=i(V);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),R=a(p,"P",{});var De=i(R);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),P=a(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,q),e(q,de),f(p,J,F),f(p,V,F),e(V,Y),e(V,I),e(I,ee),e(V,ce),e(V,S),e(S,pe),e(V,ae),f(p,O,F),f(p,R,F),e(R,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(V),p&&t(O),p&&t(R),p&&t(Z),p&&t(z)}}}function Ib(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Sb(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),V=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),R=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),P=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var K=i(g);v=a(K,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(K),q=a(K,"LI",{});var we=i(q);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),K.forEach(t),J=d(p),V=a(p,"P",{});var x=i(V);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),R=a(p,"P",{});var De=i(R);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),P=a(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,q),e(q,de),f(p,J,F),f(p,V,F),e(V,Y),e(V,I),e(I,ee),e(V,ce),e(V,S),e(S,pe),e(V,ae),f(p,O,F),f(p,R,F),e(R,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(V),p&&t(O),p&&t(R),p&&t(Z),p&&t(z)}}}function Nb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Ob(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),V=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),R=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),P=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var K=i(g);v=a(K,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(K),q=a(K,"LI",{});var we=i(q);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),K.forEach(t),J=d(p),V=a(p,"P",{});var x=i(V);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),R=a(p,"P",{});var De=i(R);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),P=a(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,q),e(q,de),f(p,J,F),f(p,V,F),e(V,Y),e(V,I),e(I,ee),e(V,ce),e(V,S),e(S,pe),e(V,ae),f(p,O,F),f(p,R,F),e(R,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(V),p&&t(O),p&&t(R),p&&t(Z),p&&t(z)}}}function Wb(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Hb(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe;return{c(){h=r("p"),$=n("TF 2.0 models accepts two formats as inputs:"),u=l(),g=r("ul"),v=r("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),V=r("p"),Y=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),pe=n("model(inputs)"),ae=n("."),O=l(),R=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),W=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=r("code"),le=n("model(inputs_ids)"),re=l(),M=r("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=r("code"),fe=n("model([input_ids, attention_mask])"),me=n(" or "),N=r("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),P=r("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=a(p,"P",{});var F=i(h);$=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),u=d(p),g=a(p,"UL",{});var K=i(g);v=a(K,"LI",{});var ye=i(v);b=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),_=d(K),q=a(K,"LI",{});var we=i(q);de=s(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),K.forEach(t),J=d(p),V=a(p,"P",{});var x=i(V);Y=s(x,"This second option is useful when using "),I=a(x,"CODE",{});var _e=i(I);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(x,"CODE",{});var ke=i(S);pe=s(ke,"model(inputs)"),ke.forEach(t),ae=s(x,"."),x.forEach(t),O=d(p),R=a(p,"P",{});var De=i(R);te=s(De,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),De.forEach(t),Z=d(p),z=a(p,"UL",{});var B=i(z);C=a(B,"LI",{});var A=i(C);ne=s(A,"a single Tensor with "),W=a(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=a(A,"CODE",{});var $e=i(H);le=s($e,"model(inputs_ids)"),$e.forEach(t),A.forEach(t),re=d(B),M=a(B,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),j=a(Q,"CODE",{});var ve=i(j);fe=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),me=s(Q," or "),N=a(Q,"CODE",{});var Te=i(N);X=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),Q.forEach(t),ue=d(B),P=a(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(be,"CODE",{});var Fe=i(U);oe=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),be.forEach(t),B.forEach(t)},m(p,F){f(p,h,F),e(h,$),f(p,u,F),f(p,g,F),e(g,v),e(v,b),e(g,_),e(g,q),e(q,de),f(p,J,F),f(p,V,F),e(V,Y),e(V,I),e(I,ee),e(V,ce),e(V,S),e(S,pe),e(V,ae),f(p,O,F),f(p,R,F),e(R,te),f(p,Z,F),f(p,z,F),e(z,C),e(C,ne),e(C,W),e(W,ie),e(C,se),e(C,H),e(H,le),e(z,re),e(z,M),e(M,he),e(M,j),e(j,fe),e(M,me),e(M,N),e(N,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(g),p&&t(J),p&&t(V),p&&t(O),p&&t(R),p&&t(Z),p&&t(z)}}}function Ub(L){let h,$,u,g,v;return{c(){h=r("p"),$=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=a(b,"P",{});var _=i(h);$=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a(_,"CODE",{});var q=i(u);g=s(q,"Module"),q.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,$),e(h,u),e(u,g),e(h,v)},d(b){b&&t(h)}}}function Qb(L){let h,$,u,g,v,b,_,q,de,J,V,Y,I,ee,ce,S,pe,ae,O,R,te,Z,z,C,ne,W,ie,se,H,le,re,M,he,j,fe,me,N,X,ue,P,ge,U,oe,p,F,K,ye,we,x,_e,ke,De,B,A,Ee,$e,Q,ve,Te,be,Fe,od,ar,Qr,nd,sd,rd,ir,Gr,ad,id,ld,lr,Kr,dd,cd,Li,tt,pd,Zo,hd,fd,en,md,ud,tn,gd,_d,Ii,Mt,ho,Jr,on,bd,Xr,vd,Si,ct,nn,kd,Ct,Td,dr,wd,yd,sn,Dd,Ed,$d,xt,Fd,cr,qd,Vd,pr,zd,Md,Ni,Pt,fo,Yr,rn,Cd,Zr,xd,Oi,Ve,an,Pd,ln,Rd,dn,Bd,jd,Ad,ft,cn,Ld,ea,Id,Sd,pn,ta,Nd,Od,oa,Wd,Hd,mo,hn,Ud,Rt,Qd,na,Gd,Kd,sa,Jd,Xd,Yd,ot,fn,Zd,ra,ec,tc,mn,oc,Bt,nc,aa,sc,rc,ia,ac,ic,lc,hr,un,Wi,jt,uo,la,gn,dc,da,cc,Hi,Je,_n,pc,bn,hc,vn,fc,mc,uc,mt,kn,gc,ca,_c,bc,Tn,pa,vc,kc,ha,Tc,wc,nt,wn,yc,fa,Dc,Ec,yn,$c,At,Fc,ma,qc,Vc,ua,zc,Mc,Ui,Lt,go,ga,Dn,Cc,_a,xc,Qi,Xe,En,Pc,$n,Rc,Fn,Bc,jc,Ac,qn,Lc,Vn,Ic,Sc,Nc,Ie,zn,Oc,It,Wc,fr,Hc,Uc,ba,Qc,Gc,Kc,_o,Jc,va,Xc,Yc,Mn,Gi,St,bo,ka,Cn,Zc,Ta,ep,Ki,pt,xn,tp,wa,op,np,st,Pn,sp,ya,rp,ap,Da,ip,lp,vo,Ji,Nt,ko,Ea,Rn,dp,$a,cp,Xi,Ye,Bn,pp,Ot,hp,Fa,fp,mp,jn,up,gp,_p,An,bp,Ln,vp,kp,Tp,Se,In,wp,Wt,yp,mr,Dp,Ep,qa,$p,Fp,qp,To,Vp,Va,zp,Mp,Sn,Yi,Ht,wo,za,Nn,Cp,Ma,xp,Zi,Re,On,Pp,Ca,Rp,Bp,Wn,jp,Hn,Ap,Lp,Ip,Un,Sp,Qn,Np,Op,Wp,qe,Gn,Hp,Ut,Up,ur,Qp,Gp,xa,Kp,Jp,Xp,yo,Yp,Pa,Zp,eh,Kn,th,Ra,oh,nh,Jn,el,Qt,Do,Ba,Xn,sh,ja,rh,tl,Be,Yn,ah,Aa,ih,lh,Zn,dh,es,ch,ph,hh,ts,fh,os,mh,uh,gh,Ne,ns,_h,Gt,bh,gr,vh,kh,La,Th,wh,yh,Eo,Dh,Ia,Eh,$h,ss,ol,Kt,$o,Sa,rs,Fh,Na,qh,nl,je,as,Vh,Jt,zh,Oa,Mh,Ch,Wa,xh,Ph,Rh,is,Bh,ls,jh,Ah,Lh,ds,Ih,cs,Sh,Nh,Oh,Oe,ps,Wh,Xt,Hh,_r,Uh,Qh,Ha,Gh,Kh,Jh,Fo,Xh,Ua,Yh,Zh,hs,sl,Yt,qo,Qa,fs,ef,Ga,tf,rl,Ae,ms,of,us,nf,gs,sf,rf,af,_s,lf,bs,df,cf,pf,Vo,hf,We,vs,ff,Zt,mf,br,uf,gf,Ka,_f,bf,vf,zo,kf,Ja,Tf,wf,ks,al,eo,Mo,Xa,Ts,yf,Ya,Df,il,ht,ws,Ef,Za,$f,Ff,rt,ys,qf,ei,Vf,zf,Ds,Mf,ti,Cf,xf,Pf,Ze,Rf,oi,Bf,jf,ni,Af,Lf,si,If,Sf,ri,Nf,Of,ll,to,Co,ai,Es,Wf,ii,Hf,dl,Le,$s,Uf,oo,Qf,li,Gf,Kf,Fs,Jf,Xf,Yf,qs,Zf,Vs,em,tm,om,xo,nm,He,zs,sm,no,rm,vr,am,im,di,lm,dm,cm,Po,pm,ci,hm,fm,Ms,cl,so,Ro,pi,Cs,mm,hi,um,pl,ze,xs,gm,fi,_m,bm,Ps,vm,Rs,km,Tm,wm,Bs,ym,js,Dm,Em,$m,Bo,Fm,Ue,As,qm,ro,Vm,kr,zm,Mm,mi,Cm,xm,Pm,jo,Rm,ui,Bm,jm,Ls,hl,ao,Ao,gi,Is,Am,_i,Lm,fl,Me,Ss,Im,bi,Sm,Nm,Ns,Om,Os,Wm,Hm,Um,Ws,Qm,Hs,Gm,Km,Jm,Lo,Xm,Qe,Us,Ym,io,Zm,Tr,eu,tu,vi,ou,nu,su,Io,ru,ki,au,iu,Qs,ml,lo,So,Ti,Gs,lu,wi,du,ul,Ce,Ks,cu,co,pu,yi,hu,fu,Di,mu,uu,gu,Js,_u,Xs,bu,vu,ku,Ys,Tu,Zs,wu,yu,Du,No,Eu,Ge,er,$u,po,Fu,wr,qu,Vu,Ei,zu,Mu,Cu,Oo,xu,$i,Pu,Ru,tr,gl;return b=new xe({}),ee=new xe({}),on=new xe({}),nn=new G({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_15529/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/pr_15529/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;, &quot;p2p&quot;]</code>, e.g.
<code>[&quot;p2c&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;, &apos;p2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),rn=new xe({}),an=new G({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),cn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L179",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hn=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L203",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L229",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mn=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),un=new G({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L262"}}),gn=new xe({}),_n=new G({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L59",parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2TokenizerFast.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),kn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L149",parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L199",parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Dn=new xe({}),En=new G({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L994",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new G({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1018",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),_o=new Pe({props:{$$slots:{default:[Mb]},$$scope:{ctx:L}}}),Mn=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Cn=new xe({}),xn=new G({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L898"}}),Pn=new G({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/torch/nn/modules/module.py#L190"}}),vo=new Pe({props:{$$slots:{default:[Cb]},$$scope:{ctx:L}}}),Rn=new xe({}),Bn=new G({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1107",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),In=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1126",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),To=new Pe({props:{$$slots:{default:[xb]},$$scope:{ctx:L}}}),Sn=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new xe({}),On=new G({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1243",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1268",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),yo=new Pe({props:{$$slots:{default:[Pb]},$$scope:{ctx:L}}}),Kn=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Jn=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Xn=new xe({}),Yn=new G({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1363",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ns=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1377",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Eo=new Pe({props:{$$slots:{default:[Rb]},$$scope:{ctx:L}}}),ss=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),rs=new xe({}),as=new G({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1440",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ps=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1453",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15529/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Fo=new Pe({props:{$$slots:{default:[Bb]},$$scope:{ctx:L}}}),hs=new et({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),fs=new xe({}),ms=new G({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1213",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vo=new Pe({props:{$$slots:{default:[jb]},$$scope:{ctx:L}}}),vs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1219",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),zo=new Pe({props:{$$slots:{default:[Ab]},$$scope:{ctx:L}}}),ks=new et({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ts=new xe({}),ws=new G({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1117"}}),ys=new G({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Es=new xe({}),$s=new G({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1276",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new Pe({props:{$$slots:{default:[Lb]},$$scope:{ctx:L}}}),zs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1292",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Po=new Pe({props:{$$slots:{default:[Ib]},$$scope:{ctx:L}}}),Ms=new et({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cs=new xe({}),xs=new G({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1379",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new Pe({props:{$$slots:{default:[Sb]},$$scope:{ctx:L}}}),As=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),jo=new Pe({props:{$$slots:{default:[Nb]},$$scope:{ctx:L}}}),Ls=new et({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Is=new xe({}),Ss=new G({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1483",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Lo=new Pe({props:{$$slots:{default:[Ob]},$$scope:{ctx:L}}}),Us=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1495",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Io=new Pe({props:{$$slots:{default:[Wb]},$$scope:{ctx:L}}}),Qs=new et({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gs=new xe({}),Ks=new G({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1577",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15529/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new Pe({props:{$$slots:{default:[Hb]},$$scope:{ctx:L}}}),er=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15529/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1588",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15529/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/pr_15529/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
`}}),Oo=new Pe({props:{$$slots:{default:[Ub]},$$scope:{ctx:L}}}),tr=new et({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=r("meta"),$=l(),u=r("h1"),g=r("a"),v=r("span"),k(b.$$.fragment),_=l(),q=r("span"),de=n("DeBERTa-v2"),J=l(),V=r("h2"),Y=r("a"),I=r("span"),k(ee.$$.fragment),ce=l(),S=r("span"),pe=n("Overview"),ae=l(),O=r("p"),R=n("The DeBERTa model was proposed in "),te=r("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
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
pre-trained models will be made publicly available at `),j=r("a"),fe=n("https://github.com/microsoft/DeBERTa"),me=n("."),N=l(),X=r("p"),ue=n("The following information is visible directly on the "),P=r("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r("a"),p=n("blog"),F=l(),K=r("p"),ye=n("New in v2:"),we=l(),x=r("ul"),_e=r("li"),ke=r("strong"),De=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r("a"),Ee=n("sentencepiece-based"),$e=n(" tokenizer."),Q=l(),ve=r("li"),Te=r("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Fe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),od=l(),ar=r("li"),Qr=r("strong"),nd=n("Sharing position projection matrix with content projection matrix in attention layer"),sd=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),rd=l(),ir=r("li"),Gr=r("strong"),ad=n("Apply bucket to encode relative positions"),id=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),ld=l(),lr=r("li"),Kr=r("strong"),dd=n("900M model & 1.5B model"),cd=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Li=l(),tt=r("p"),pd=n("This model was contributed by "),Zo=r("a"),hd=n("DeBERTa"),fd=n(`. This model TF 2.0 implementation was
contributed by `),en=r("a"),md=n("kamalkraj"),ud=n(". The original code can be found "),tn=r("a"),gd=n("here"),_d=n("."),Ii=l(),Mt=r("h2"),ho=r("a"),Jr=r("span"),k(on.$$.fragment),bd=l(),Xr=r("span"),vd=n("DebertaV2Config"),Si=l(),ct=r("div"),k(nn.$$.fragment),kd=l(),Ct=r("p"),Td=n("This is the configuration class to store the configuration of a "),dr=r("a"),wd=n("DebertaV2Model"),yd=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),sn=r("a"),Dd=n("microsoft/deberta-v2-xlarge"),Ed=n(" architecture."),$d=l(),xt=r("p"),Fd=n("Configuration objects inherit from "),cr=r("a"),qd=n("PretrainedConfig"),Vd=n(` and can be used to control the model outputs. Read the
documentation from `),pr=r("a"),zd=n("PretrainedConfig"),Md=n(" for more information."),Ni=l(),Pt=r("h2"),fo=r("a"),Yr=r("span"),k(rn.$$.fragment),Cd=l(),Zr=r("span"),xd=n("DebertaV2Tokenizer"),Oi=l(),Ve=r("div"),k(an.$$.fragment),Pd=l(),ln=r("p"),Rd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),dn=r("a"),Bd=n("SentencePiece"),jd=n("."),Ad=l(),ft=r("div"),k(cn.$$.fragment),Ld=l(),ea=r("p"),Id=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Sd=l(),pn=r("ul"),ta=r("li"),Nd=n("single sequence: [CLS] X [SEP]"),Od=l(),oa=r("li"),Wd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Hd=l(),mo=r("div"),k(hn.$$.fragment),Ud=l(),Rt=r("p"),Qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),na=r("code"),Gd=n("prepare_for_model"),Kd=n(" or "),sa=r("code"),Jd=n("encode_plus"),Xd=n(" methods."),Yd=l(),ot=r("div"),k(fn.$$.fragment),Zd=l(),ra=r("p"),ec=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),tc=l(),k(mn.$$.fragment),oc=l(),Bt=r("p"),nc=n("If "),aa=r("code"),sc=n("token_ids_1"),rc=n(" is "),ia=r("code"),ac=n("None"),ic=n(", this method only returns the first portion of the mask (0s)."),lc=l(),hr=r("div"),k(un.$$.fragment),Wi=l(),jt=r("h2"),uo=r("a"),la=r("span"),k(gn.$$.fragment),dc=l(),da=r("span"),cc=n("DebertaV2TokenizerFast"),Hi=l(),Je=r("div"),k(_n.$$.fragment),pc=l(),bn=r("p"),hc=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),vn=r("a"),fc=n("SentencePiece"),mc=n("."),uc=l(),mt=r("div"),k(kn.$$.fragment),gc=l(),ca=r("p"),_c=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),bc=l(),Tn=r("ul"),pa=r("li"),vc=n("single sequence: [CLS] X [SEP]"),kc=l(),ha=r("li"),Tc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),wc=l(),nt=r("div"),k(wn.$$.fragment),yc=l(),fa=r("p"),Dc=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Ec=l(),k(yn.$$.fragment),$c=l(),At=r("p"),Fc=n("If "),ma=r("code"),qc=n("token_ids_1"),Vc=n(" is "),ua=r("code"),zc=n("None"),Mc=n(", this method only returns the first portion of the mask (0s)."),Ui=l(),Lt=r("h2"),go=r("a"),ga=r("span"),k(Dn.$$.fragment),Cc=l(),_a=r("span"),xc=n("DebertaV2Model"),Qi=l(),Xe=r("div"),k(En.$$.fragment),Pc=l(),$n=r("p"),Rc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Fn=r("a"),Bc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),jc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ac=l(),qn=r("p"),Lc=n("This model is also a PyTorch "),Vn=r("a"),Ic=n("torch.nn.Module"),Sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nc=l(),Ie=r("div"),k(zn.$$.fragment),Oc=l(),It=r("p"),Wc=n("The "),fr=r("a"),Hc=n("DebertaV2Model"),Uc=n(" forward method, overrides the "),ba=r("code"),Qc=n("__call__"),Gc=n(" special method."),Kc=l(),k(_o.$$.fragment),Jc=l(),va=r("p"),Xc=n("Example:"),Yc=l(),k(Mn.$$.fragment),Gi=l(),St=r("h2"),bo=r("a"),ka=r("span"),k(Cn.$$.fragment),Zc=l(),Ta=r("span"),ep=n("DebertaV2PreTrainedModel"),Ki=l(),pt=r("div"),k(xn.$$.fragment),tp=l(),wa=r("p"),op=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),np=l(),st=r("div"),k(Pn.$$.fragment),sp=l(),ya=r("p"),rp=n("Defines the computation performed at every call."),ap=l(),Da=r("p"),ip=n("Should be overridden by all subclasses."),lp=l(),k(vo.$$.fragment),Ji=l(),Nt=r("h2"),ko=r("a"),Ea=r("span"),k(Rn.$$.fragment),dp=l(),$a=r("span"),cp=n("DebertaV2ForMaskedLM"),Xi=l(),Ye=r("div"),k(Bn.$$.fragment),pp=l(),Ot=r("p"),hp=n("DeBERTa Model with a "),Fa=r("code"),fp=n("language modeling"),mp=n(` head on top.
The DeBERTa model was proposed in `),jn=r("a"),up=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_p=l(),An=r("p"),bp=n("This model is also a PyTorch "),Ln=r("a"),vp=n("torch.nn.Module"),kp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Tp=l(),Se=r("div"),k(In.$$.fragment),wp=l(),Wt=r("p"),yp=n("The "),mr=r("a"),Dp=n("DebertaV2ForMaskedLM"),Ep=n(" forward method, overrides the "),qa=r("code"),$p=n("__call__"),Fp=n(" special method."),qp=l(),k(To.$$.fragment),Vp=l(),Va=r("p"),zp=n("Example:"),Mp=l(),k(Sn.$$.fragment),Yi=l(),Ht=r("h2"),wo=r("a"),za=r("span"),k(Nn.$$.fragment),Cp=l(),Ma=r("span"),xp=n("DebertaV2ForSequenceClassification"),Zi=l(),Re=r("div"),k(On.$$.fragment),Pp=l(),Ca=r("p"),Rp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bp=l(),Wn=r("p"),jp=n("The DeBERTa model was proposed in "),Hn=r("a"),Ap=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ip=l(),Un=r("p"),Sp=n("This model is also a PyTorch "),Qn=r("a"),Np=n("torch.nn.Module"),Op=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Wp=l(),qe=r("div"),k(Gn.$$.fragment),Hp=l(),Ut=r("p"),Up=n("The "),ur=r("a"),Qp=n("DebertaV2ForSequenceClassification"),Gp=n(" forward method, overrides the "),xa=r("code"),Kp=n("__call__"),Jp=n(" special method."),Xp=l(),k(yo.$$.fragment),Yp=l(),Pa=r("p"),Zp=n("Example of single-label classification:"),eh=l(),k(Kn.$$.fragment),th=l(),Ra=r("p"),oh=n("Example of multi-label classification:"),nh=l(),k(Jn.$$.fragment),el=l(),Qt=r("h2"),Do=r("a"),Ba=r("span"),k(Xn.$$.fragment),sh=l(),ja=r("span"),rh=n("DebertaV2ForTokenClassification"),tl=l(),Be=r("div"),k(Yn.$$.fragment),ah=l(),Aa=r("p"),ih=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),lh=l(),Zn=r("p"),dh=n("The DeBERTa model was proposed in "),es=r("a"),ch=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ph=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hh=l(),ts=r("p"),fh=n("This model is also a PyTorch "),os=r("a"),mh=n("torch.nn.Module"),uh=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),gh=l(),Ne=r("div"),k(ns.$$.fragment),_h=l(),Gt=r("p"),bh=n("The "),gr=r("a"),vh=n("DebertaV2ForTokenClassification"),kh=n(" forward method, overrides the "),La=r("code"),Th=n("__call__"),wh=n(" special method."),yh=l(),k(Eo.$$.fragment),Dh=l(),Ia=r("p"),Eh=n("Example:"),$h=l(),k(ss.$$.fragment),ol=l(),Kt=r("h2"),$o=r("a"),Sa=r("span"),k(rs.$$.fragment),Fh=l(),Na=r("span"),qh=n("DebertaV2ForQuestionAnswering"),nl=l(),je=r("div"),k(as.$$.fragment),Vh=l(),Jt=r("p"),zh=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Oa=r("code"),Mh=n("span start logits"),Ch=n(" and "),Wa=r("code"),xh=n("span end logits"),Ph=n(")."),Rh=l(),is=r("p"),Bh=n("The DeBERTa model was proposed in "),ls=r("a"),jh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ah=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lh=l(),ds=r("p"),Ih=n("This model is also a PyTorch "),cs=r("a"),Sh=n("torch.nn.Module"),Nh=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Oh=l(),Oe=r("div"),k(ps.$$.fragment),Wh=l(),Xt=r("p"),Hh=n("The "),_r=r("a"),Uh=n("DebertaV2ForQuestionAnswering"),Qh=n(" forward method, overrides the "),Ha=r("code"),Gh=n("__call__"),Kh=n(" special method."),Jh=l(),k(Fo.$$.fragment),Xh=l(),Ua=r("p"),Yh=n("Example:"),Zh=l(),k(hs.$$.fragment),sl=l(),Yt=r("h2"),qo=r("a"),Qa=r("span"),k(fs.$$.fragment),ef=l(),Ga=r("span"),tf=n("TFDebertaV2Model"),rl=l(),Ae=r("div"),k(ms.$$.fragment),of=l(),us=r("p"),nf=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=r("a"),sf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=l(),_s=r("p"),lf=n("This model is also a "),bs=r("a"),df=n("tf.keras.Model"),cf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf=l(),k(Vo.$$.fragment),hf=l(),We=r("div"),k(vs.$$.fragment),ff=l(),Zt=r("p"),mf=n("The "),br=r("a"),uf=n("TFDebertaV2Model"),gf=n(" forward method, overrides the "),Ka=r("code"),_f=n("__call__"),bf=n(" special method."),vf=l(),k(zo.$$.fragment),kf=l(),Ja=r("p"),Tf=n("Example:"),wf=l(),k(ks.$$.fragment),al=l(),eo=r("h2"),Mo=r("a"),Xa=r("span"),k(Ts.$$.fragment),yf=l(),Ya=r("span"),Df=n("TFDebertaV2PreTrainedModel"),il=l(),ht=r("div"),k(ws.$$.fragment),Ef=l(),Za=r("p"),$f=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ff=l(),rt=r("div"),k(ys.$$.fragment),qf=l(),ei=r("p"),Vf=n("Calls the model on new inputs and returns the outputs as tensors."),zf=l(),Ds=r("p"),Mf=n("In this case "),ti=r("code"),Cf=n("call()"),xf=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Pf=l(),Ze=r("p"),Rf=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),oi=r("code"),Bf=n("tf.keras.Model"),jf=n(`.
To call a model on an input, always use the `),ni=r("code"),Af=n("__call__()"),Lf=n(` method,
i.e. `),si=r("code"),If=n("model(inputs)"),Sf=n(", which relies on the underlying "),ri=r("code"),Nf=n("call()"),Of=n(" method."),ll=l(),to=r("h2"),Co=r("a"),ai=r("span"),k(Es.$$.fragment),Wf=l(),ii=r("span"),Hf=n("TFDebertaV2ForMaskedLM"),dl=l(),Le=r("div"),k($s.$$.fragment),Uf=l(),oo=r("p"),Qf=n("DeBERTa Model with a "),li=r("code"),Gf=n("language modeling"),Kf=n(` head on top.
The DeBERTa model was proposed in `),Fs=r("a"),Jf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yf=l(),qs=r("p"),Zf=n("This model is also a "),Vs=r("a"),em=n("tf.keras.Model"),tm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),om=l(),k(xo.$$.fragment),nm=l(),He=r("div"),k(zs.$$.fragment),sm=l(),no=r("p"),rm=n("The "),vr=r("a"),am=n("TFDebertaV2ForMaskedLM"),im=n(" forward method, overrides the "),di=r("code"),lm=n("__call__"),dm=n(" special method."),cm=l(),k(Po.$$.fragment),pm=l(),ci=r("p"),hm=n("Example:"),fm=l(),k(Ms.$$.fragment),cl=l(),so=r("h2"),Ro=r("a"),pi=r("span"),k(Cs.$$.fragment),mm=l(),hi=r("span"),um=n("TFDebertaV2ForSequenceClassification"),pl=l(),ze=r("div"),k(xs.$$.fragment),gm=l(),fi=r("p"),_m=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bm=l(),Ps=r("p"),vm=n("The DeBERTa model was proposed in "),Rs=r("a"),km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wm=l(),Bs=r("p"),ym=n("This model is also a "),js=r("a"),Dm=n("tf.keras.Model"),Em=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$m=l(),k(Bo.$$.fragment),Fm=l(),Ue=r("div"),k(As.$$.fragment),qm=l(),ro=r("p"),Vm=n("The "),kr=r("a"),zm=n("TFDebertaV2ForSequenceClassification"),Mm=n(" forward method, overrides the "),mi=r("code"),Cm=n("__call__"),xm=n(" special method."),Pm=l(),k(jo.$$.fragment),Rm=l(),ui=r("p"),Bm=n("Example:"),jm=l(),k(Ls.$$.fragment),hl=l(),ao=r("h2"),Ao=r("a"),gi=r("span"),k(Is.$$.fragment),Am=l(),_i=r("span"),Lm=n("TFDebertaV2ForTokenClassification"),fl=l(),Me=r("div"),k(Ss.$$.fragment),Im=l(),bi=r("p"),Sm=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Nm=l(),Ns=r("p"),Om=n("The DeBERTa model was proposed in "),Os=r("a"),Wm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Um=l(),Ws=r("p"),Qm=n("This model is also a "),Hs=r("a"),Gm=n("tf.keras.Model"),Km=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jm=l(),k(Lo.$$.fragment),Xm=l(),Qe=r("div"),k(Us.$$.fragment),Ym=l(),io=r("p"),Zm=n("The "),Tr=r("a"),eu=n("TFDebertaV2ForTokenClassification"),tu=n(" forward method, overrides the "),vi=r("code"),ou=n("__call__"),nu=n(" special method."),su=l(),k(Io.$$.fragment),ru=l(),ki=r("p"),au=n("Example:"),iu=l(),k(Qs.$$.fragment),ml=l(),lo=r("h2"),So=r("a"),Ti=r("span"),k(Gs.$$.fragment),lu=l(),wi=r("span"),du=n("TFDebertaV2ForQuestionAnswering"),ul=l(),Ce=r("div"),k(Ks.$$.fragment),cu=l(),co=r("p"),pu=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yi=r("code"),hu=n("span start logits"),fu=n(" and "),Di=r("code"),mu=n("span end logits"),uu=n(")."),gu=l(),Js=r("p"),_u=n("The DeBERTa model was proposed in "),Xs=r("a"),bu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ku=l(),Ys=r("p"),Tu=n("This model is also a "),Zs=r("a"),wu=n("tf.keras.Model"),yu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=l(),k(No.$$.fragment),Eu=l(),Ge=r("div"),k(er.$$.fragment),$u=l(),po=r("p"),Fu=n("The "),wr=r("a"),qu=n("TFDebertaV2ForQuestionAnswering"),Vu=n(" forward method, overrides the "),Ei=r("code"),zu=n("__call__"),Mu=n(" special method."),Cu=l(),k(Oo.$$.fragment),xu=l(),$i=r("p"),Pu=n("Example:"),Ru=l(),k(tr.$$.fragment),this.h()},l(o){const m=zb('[data-svelte="svelte-1phssyn"]',document.head);h=a(m,"META",{name:!0,content:!0}),m.forEach(t),$=d(o),u=a(o,"H1",{class:!0});var or=i(u);g=a(or,"A",{id:!0,class:!0,href:!0});var Fi=i(g);v=a(Fi,"SPAN",{});var qi=i(v);T(b.$$.fragment,qi),qi.forEach(t),Fi.forEach(t),_=d(or),q=a(or,"SPAN",{});var Vi=i(q);de=s(Vi,"DeBERTa-v2"),Vi.forEach(t),or.forEach(t),J=d(o),V=a(o,"H2",{class:!0});var nr=i(V);Y=a(nr,"A",{id:!0,class:!0,href:!0});var zi=i(Y);I=a(zi,"SPAN",{});var Mi=i(I);T(ee.$$.fragment,Mi),Mi.forEach(t),zi.forEach(t),ce=d(nr),S=a(nr,"SPAN",{});var Ci=i(S);pe=s(Ci,"Overview"),Ci.forEach(t),nr.forEach(t),ae=d(o),O=a(o,"P",{});var sr=i(O);R=s(sr,"The DeBERTa model was proposed in "),te=a(sr,"A",{href:!0,rel:!0});var xi=i(te);Z=s(xi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),xi.forEach(t),z=s(sr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),sr.forEach(t),C=d(o),ne=a(o,"P",{});var Pi=i(ne);W=s(Pi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Pi.forEach(t),ie=d(o),se=a(o,"P",{});var Ri=i(se);H=s(Ri,"The abstract from the paper is the following:"),Ri.forEach(t),le=d(o),re=a(o,"P",{});var Bi=i(re);M=a(Bi,"EM",{});var rr=i(M);he=s(rr,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),j=a(rr,"A",{href:!0,rel:!0});var ji=i(j);fe=s(ji,"https://github.com/microsoft/DeBERTa"),ji.forEach(t),me=s(rr,"."),rr.forEach(t),Bi.forEach(t),N=d(o),X=a(o,"P",{});var Wo=i(X);ue=s(Wo,"The following information is visible directly on the "),P=a(Wo,"A",{href:!0,rel:!0});var Iu=i(P);ge=s(Iu,`original implementation
repository`),Iu.forEach(t),U=s(Wo,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a(Wo,"A",{href:!0,rel:!0});var Su=i(oe);p=s(Su,"blog"),Su.forEach(t),Wo.forEach(t),F=d(o),K=a(o,"P",{});var Nu=i(K);ye=s(Nu,"New in v2:"),Nu.forEach(t),we=d(o),x=a(o,"UL",{});var ut=i(x);_e=a(ut,"LI",{});var Ai=i(_e);ke=a(Ai,"STRONG",{});var Ou=i(ke);De=s(Ou,"Vocabulary"),Ou.forEach(t),B=s(Ai,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a(Ai,"A",{href:!0,rel:!0});var Wu=i(A);Ee=s(Wu,"sentencepiece-based"),Wu.forEach(t),$e=s(Ai," tokenizer."),Ai.forEach(t),Q=d(ut),ve=a(ut,"LI",{});var Bu=i(ve);Te=a(Bu,"STRONG",{});var Hu=i(Te);be=s(Hu,"nGiE(nGram Induced Input Encoding)"),Hu.forEach(t),Fe=s(Bu,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Bu.forEach(t),od=d(ut),ar=a(ut,"LI",{});var ju=i(ar);Qr=a(ju,"STRONG",{});var Uu=i(Qr);nd=s(Uu,"Sharing position projection matrix with content projection matrix in attention layer"),Uu.forEach(t),sd=s(ju,` Based on previous
experiments, this can save parameters without affecting the performance.`),ju.forEach(t),rd=d(ut),ir=a(ut,"LI",{});var Au=i(ir);Gr=a(Au,"STRONG",{});var Qu=i(Gr);ad=s(Qu,"Apply bucket to encode relative positions"),Qu.forEach(t),id=s(Au,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Au.forEach(t),ld=d(ut),lr=a(ut,"LI",{});var Lu=i(lr);Kr=a(Lu,"STRONG",{});var Gu=i(Kr);dd=s(Gu,"900M model & 1.5B model"),Gu.forEach(t),cd=s(Lu,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Lu.forEach(t),ut.forEach(t),Li=d(o),tt=a(o,"P",{});var Ho=i(tt);pd=s(Ho,"This model was contributed by "),Zo=a(Ho,"A",{href:!0,rel:!0});var Ku=i(Zo);hd=s(Ku,"DeBERTa"),Ku.forEach(t),fd=s(Ho,`. This model TF 2.0 implementation was
contributed by `),en=a(Ho,"A",{href:!0,rel:!0});var Ju=i(en);md=s(Ju,"kamalkraj"),Ju.forEach(t),ud=s(Ho,". The original code can be found "),tn=a(Ho,"A",{href:!0,rel:!0});var Xu=i(tn);gd=s(Xu,"here"),Xu.forEach(t),_d=s(Ho,"."),Ho.forEach(t),Ii=d(o),Mt=a(o,"H2",{class:!0});var _l=i(Mt);ho=a(_l,"A",{id:!0,class:!0,href:!0});var Yu=i(ho);Jr=a(Yu,"SPAN",{});var Zu=i(Jr);T(on.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),bd=d(_l),Xr=a(_l,"SPAN",{});var eg=i(Xr);vd=s(eg,"DebertaV2Config"),eg.forEach(t),_l.forEach(t),Si=d(o),ct=a(o,"DIV",{class:!0});var yr=i(ct);T(nn.$$.fragment,yr),kd=d(yr),Ct=a(yr,"P",{});var Dr=i(Ct);Td=s(Dr,"This is the configuration class to store the configuration of a "),dr=a(Dr,"A",{href:!0});var tg=i(dr);wd=s(tg,"DebertaV2Model"),tg.forEach(t),yd=s(Dr,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),sn=a(Dr,"A",{href:!0,rel:!0});var og=i(sn);Dd=s(og,"microsoft/deberta-v2-xlarge"),og.forEach(t),Ed=s(Dr," architecture."),Dr.forEach(t),$d=d(yr),xt=a(yr,"P",{});var Er=i(xt);Fd=s(Er,"Configuration objects inherit from "),cr=a(Er,"A",{href:!0});var ng=i(cr);qd=s(ng,"PretrainedConfig"),ng.forEach(t),Vd=s(Er,` and can be used to control the model outputs. Read the
documentation from `),pr=a(Er,"A",{href:!0});var sg=i(pr);zd=s(sg,"PretrainedConfig"),sg.forEach(t),Md=s(Er," for more information."),Er.forEach(t),yr.forEach(t),Ni=d(o),Pt=a(o,"H2",{class:!0});var bl=i(Pt);fo=a(bl,"A",{id:!0,class:!0,href:!0});var rg=i(fo);Yr=a(rg,"SPAN",{});var ag=i(Yr);T(rn.$$.fragment,ag),ag.forEach(t),rg.forEach(t),Cd=d(bl),Zr=a(bl,"SPAN",{});var ig=i(Zr);xd=s(ig,"DebertaV2Tokenizer"),ig.forEach(t),bl.forEach(t),Oi=d(o),Ve=a(o,"DIV",{class:!0});var at=i(Ve);T(an.$$.fragment,at),Pd=d(at),ln=a(at,"P",{});var vl=i(ln);Rd=s(vl,"Constructs a DeBERTa-v2 tokenizer. Based on "),dn=a(vl,"A",{href:!0,rel:!0});var lg=i(dn);Bd=s(lg,"SentencePiece"),lg.forEach(t),jd=s(vl,"."),vl.forEach(t),Ad=d(at),ft=a(at,"DIV",{class:!0});var $r=i(ft);T(cn.$$.fragment,$r),Ld=d($r),ea=a($r,"P",{});var dg=i(ea);Id=s(dg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),dg.forEach(t),Sd=d($r),pn=a($r,"UL",{});var kl=i(pn);ta=a(kl,"LI",{});var cg=i(ta);Nd=s(cg,"single sequence: [CLS] X [SEP]"),cg.forEach(t),Od=d(kl),oa=a(kl,"LI",{});var pg=i(oa);Wd=s(pg,"pair of sequences: [CLS] A [SEP] B [SEP]"),pg.forEach(t),kl.forEach(t),$r.forEach(t),Hd=d(at),mo=a(at,"DIV",{class:!0});var Tl=i(mo);T(hn.$$.fragment,Tl),Ud=d(Tl),Rt=a(Tl,"P",{});var Fr=i(Rt);Qd=s(Fr,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),na=a(Fr,"CODE",{});var hg=i(na);Gd=s(hg,"prepare_for_model"),hg.forEach(t),Kd=s(Fr," or "),sa=a(Fr,"CODE",{});var fg=i(sa);Jd=s(fg,"encode_plus"),fg.forEach(t),Xd=s(Fr," methods."),Fr.forEach(t),Tl.forEach(t),Yd=d(at),ot=a(at,"DIV",{class:!0});var Uo=i(ot);T(fn.$$.fragment,Uo),Zd=d(Uo),ra=a(Uo,"P",{});var mg=i(ra);ec=s(mg,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),mg.forEach(t),tc=d(Uo),T(mn.$$.fragment,Uo),oc=d(Uo),Bt=a(Uo,"P",{});var qr=i(Bt);nc=s(qr,"If "),aa=a(qr,"CODE",{});var ug=i(aa);sc=s(ug,"token_ids_1"),ug.forEach(t),rc=s(qr," is "),ia=a(qr,"CODE",{});var gg=i(ia);ac=s(gg,"None"),gg.forEach(t),ic=s(qr,", this method only returns the first portion of the mask (0s)."),qr.forEach(t),Uo.forEach(t),lc=d(at),hr=a(at,"DIV",{class:!0});var _g=i(hr);T(un.$$.fragment,_g),_g.forEach(t),at.forEach(t),Wi=d(o),jt=a(o,"H2",{class:!0});var wl=i(jt);uo=a(wl,"A",{id:!0,class:!0,href:!0});var bg=i(uo);la=a(bg,"SPAN",{});var vg=i(la);T(gn.$$.fragment,vg),vg.forEach(t),bg.forEach(t),dc=d(wl),da=a(wl,"SPAN",{});var kg=i(da);cc=s(kg,"DebertaV2TokenizerFast"),kg.forEach(t),wl.forEach(t),Hi=d(o),Je=a(o,"DIV",{class:!0});var Qo=i(Je);T(_n.$$.fragment,Qo),pc=d(Qo),bn=a(Qo,"P",{});var yl=i(bn);hc=s(yl,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),vn=a(yl,"A",{href:!0,rel:!0});var Tg=i(vn);fc=s(Tg,"SentencePiece"),Tg.forEach(t),mc=s(yl,"."),yl.forEach(t),uc=d(Qo),mt=a(Qo,"DIV",{class:!0});var Vr=i(mt);T(kn.$$.fragment,Vr),gc=d(Vr),ca=a(Vr,"P",{});var wg=i(ca);_c=s(wg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),wg.forEach(t),bc=d(Vr),Tn=a(Vr,"UL",{});var Dl=i(Tn);pa=a(Dl,"LI",{});var yg=i(pa);vc=s(yg,"single sequence: [CLS] X [SEP]"),yg.forEach(t),kc=d(Dl),ha=a(Dl,"LI",{});var Dg=i(ha);Tc=s(Dg,"pair of sequences: [CLS] A [SEP] B [SEP]"),Dg.forEach(t),Dl.forEach(t),Vr.forEach(t),wc=d(Qo),nt=a(Qo,"DIV",{class:!0});var Go=i(nt);T(wn.$$.fragment,Go),yc=d(Go),fa=a(Go,"P",{});var Eg=i(fa);Dc=s(Eg,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Eg.forEach(t),Ec=d(Go),T(yn.$$.fragment,Go),$c=d(Go),At=a(Go,"P",{});var zr=i(At);Fc=s(zr,"If "),ma=a(zr,"CODE",{});var $g=i(ma);qc=s($g,"token_ids_1"),$g.forEach(t),Vc=s(zr," is "),ua=a(zr,"CODE",{});var Fg=i(ua);zc=s(Fg,"None"),Fg.forEach(t),Mc=s(zr,", this method only returns the first portion of the mask (0s)."),zr.forEach(t),Go.forEach(t),Qo.forEach(t),Ui=d(o),Lt=a(o,"H2",{class:!0});var El=i(Lt);go=a(El,"A",{id:!0,class:!0,href:!0});var qg=i(go);ga=a(qg,"SPAN",{});var Vg=i(ga);T(Dn.$$.fragment,Vg),Vg.forEach(t),qg.forEach(t),Cc=d(El),_a=a(El,"SPAN",{});var zg=i(_a);xc=s(zg,"DebertaV2Model"),zg.forEach(t),El.forEach(t),Qi=d(o),Xe=a(o,"DIV",{class:!0});var Ko=i(Xe);T(En.$$.fragment,Ko),Pc=d(Ko),$n=a(Ko,"P",{});var $l=i($n);Rc=s($l,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Fn=a($l,"A",{href:!0,rel:!0});var Mg=i(Fn);Bc=s(Mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mg.forEach(t),jc=s($l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$l.forEach(t),Ac=d(Ko),qn=a(Ko,"P",{});var Fl=i(qn);Lc=s(Fl,"This model is also a PyTorch "),Vn=a(Fl,"A",{href:!0,rel:!0});var Cg=i(Vn);Ic=s(Cg,"torch.nn.Module"),Cg.forEach(t),Sc=s(Fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Fl.forEach(t),Nc=d(Ko),Ie=a(Ko,"DIV",{class:!0});var gt=i(Ie);T(zn.$$.fragment,gt),Oc=d(gt),It=a(gt,"P",{});var Mr=i(It);Wc=s(Mr,"The "),fr=a(Mr,"A",{href:!0});var xg=i(fr);Hc=s(xg,"DebertaV2Model"),xg.forEach(t),Uc=s(Mr," forward method, overrides the "),ba=a(Mr,"CODE",{});var Pg=i(ba);Qc=s(Pg,"__call__"),Pg.forEach(t),Gc=s(Mr," special method."),Mr.forEach(t),Kc=d(gt),T(_o.$$.fragment,gt),Jc=d(gt),va=a(gt,"P",{});var Rg=i(va);Xc=s(Rg,"Example:"),Rg.forEach(t),Yc=d(gt),T(Mn.$$.fragment,gt),gt.forEach(t),Ko.forEach(t),Gi=d(o),St=a(o,"H2",{class:!0});var ql=i(St);bo=a(ql,"A",{id:!0,class:!0,href:!0});var Bg=i(bo);ka=a(Bg,"SPAN",{});var jg=i(ka);T(Cn.$$.fragment,jg),jg.forEach(t),Bg.forEach(t),Zc=d(ql),Ta=a(ql,"SPAN",{});var Ag=i(Ta);ep=s(Ag,"DebertaV2PreTrainedModel"),Ag.forEach(t),ql.forEach(t),Ki=d(o),pt=a(o,"DIV",{class:!0});var Cr=i(pt);T(xn.$$.fragment,Cr),tp=d(Cr),wa=a(Cr,"P",{});var Lg=i(wa);op=s(Lg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Lg.forEach(t),np=d(Cr),st=a(Cr,"DIV",{class:!0});var Jo=i(st);T(Pn.$$.fragment,Jo),sp=d(Jo),ya=a(Jo,"P",{});var Ig=i(ya);rp=s(Ig,"Defines the computation performed at every call."),Ig.forEach(t),ap=d(Jo),Da=a(Jo,"P",{});var Sg=i(Da);ip=s(Sg,"Should be overridden by all subclasses."),Sg.forEach(t),lp=d(Jo),T(vo.$$.fragment,Jo),Jo.forEach(t),Cr.forEach(t),Ji=d(o),Nt=a(o,"H2",{class:!0});var Vl=i(Nt);ko=a(Vl,"A",{id:!0,class:!0,href:!0});var Ng=i(ko);Ea=a(Ng,"SPAN",{});var Og=i(Ea);T(Rn.$$.fragment,Og),Og.forEach(t),Ng.forEach(t),dp=d(Vl),$a=a(Vl,"SPAN",{});var Wg=i($a);cp=s(Wg,"DebertaV2ForMaskedLM"),Wg.forEach(t),Vl.forEach(t),Xi=d(o),Ye=a(o,"DIV",{class:!0});var Xo=i(Ye);T(Bn.$$.fragment,Xo),pp=d(Xo),Ot=a(Xo,"P",{});var xr=i(Ot);hp=s(xr,"DeBERTa Model with a "),Fa=a(xr,"CODE",{});var Hg=i(Fa);fp=s(Hg,"language modeling"),Hg.forEach(t),mp=s(xr,` head on top.
The DeBERTa model was proposed in `),jn=a(xr,"A",{href:!0,rel:!0});var Ug=i(jn);up=s(Ug,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ug.forEach(t),gp=s(xr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xr.forEach(t),_p=d(Xo),An=a(Xo,"P",{});var zl=i(An);bp=s(zl,"This model is also a PyTorch "),Ln=a(zl,"A",{href:!0,rel:!0});var Qg=i(Ln);vp=s(Qg,"torch.nn.Module"),Qg.forEach(t),kp=s(zl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),zl.forEach(t),Tp=d(Xo),Se=a(Xo,"DIV",{class:!0});var _t=i(Se);T(In.$$.fragment,_t),wp=d(_t),Wt=a(_t,"P",{});var Pr=i(Wt);yp=s(Pr,"The "),mr=a(Pr,"A",{href:!0});var Gg=i(mr);Dp=s(Gg,"DebertaV2ForMaskedLM"),Gg.forEach(t),Ep=s(Pr," forward method, overrides the "),qa=a(Pr,"CODE",{});var Kg=i(qa);$p=s(Kg,"__call__"),Kg.forEach(t),Fp=s(Pr," special method."),Pr.forEach(t),qp=d(_t),T(To.$$.fragment,_t),Vp=d(_t),Va=a(_t,"P",{});var Jg=i(Va);zp=s(Jg,"Example:"),Jg.forEach(t),Mp=d(_t),T(Sn.$$.fragment,_t),_t.forEach(t),Xo.forEach(t),Yi=d(o),Ht=a(o,"H2",{class:!0});var Ml=i(Ht);wo=a(Ml,"A",{id:!0,class:!0,href:!0});var Xg=i(wo);za=a(Xg,"SPAN",{});var Yg=i(za);T(Nn.$$.fragment,Yg),Yg.forEach(t),Xg.forEach(t),Cp=d(Ml),Ma=a(Ml,"SPAN",{});var Zg=i(Ma);xp=s(Zg,"DebertaV2ForSequenceClassification"),Zg.forEach(t),Ml.forEach(t),Zi=d(o),Re=a(o,"DIV",{class:!0});var bt=i(Re);T(On.$$.fragment,bt),Pp=d(bt),Ca=a(bt,"P",{});var e_=i(Ca);Rp=s(e_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),e_.forEach(t),Bp=d(bt),Wn=a(bt,"P",{});var Cl=i(Wn);jp=s(Cl,"The DeBERTa model was proposed in "),Hn=a(Cl,"A",{href:!0,rel:!0});var t_=i(Hn);Ap=s(t_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),t_.forEach(t),Lp=s(Cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Cl.forEach(t),Ip=d(bt),Un=a(bt,"P",{});var xl=i(Un);Sp=s(xl,"This model is also a PyTorch "),Qn=a(xl,"A",{href:!0,rel:!0});var o_=i(Qn);Np=s(o_,"torch.nn.Module"),o_.forEach(t),Op=s(xl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),xl.forEach(t),Wp=d(bt),qe=a(bt,"DIV",{class:!0});var Ke=i(qe);T(Gn.$$.fragment,Ke),Hp=d(Ke),Ut=a(Ke,"P",{});var Rr=i(Ut);Up=s(Rr,"The "),ur=a(Rr,"A",{href:!0});var n_=i(ur);Qp=s(n_,"DebertaV2ForSequenceClassification"),n_.forEach(t),Gp=s(Rr," forward method, overrides the "),xa=a(Rr,"CODE",{});var s_=i(xa);Kp=s(s_,"__call__"),s_.forEach(t),Jp=s(Rr," special method."),Rr.forEach(t),Xp=d(Ke),T(yo.$$.fragment,Ke),Yp=d(Ke),Pa=a(Ke,"P",{});var r_=i(Pa);Zp=s(r_,"Example of single-label classification:"),r_.forEach(t),eh=d(Ke),T(Kn.$$.fragment,Ke),th=d(Ke),Ra=a(Ke,"P",{});var a_=i(Ra);oh=s(a_,"Example of multi-label classification:"),a_.forEach(t),nh=d(Ke),T(Jn.$$.fragment,Ke),Ke.forEach(t),bt.forEach(t),el=d(o),Qt=a(o,"H2",{class:!0});var Pl=i(Qt);Do=a(Pl,"A",{id:!0,class:!0,href:!0});var i_=i(Do);Ba=a(i_,"SPAN",{});var l_=i(Ba);T(Xn.$$.fragment,l_),l_.forEach(t),i_.forEach(t),sh=d(Pl),ja=a(Pl,"SPAN",{});var d_=i(ja);rh=s(d_,"DebertaV2ForTokenClassification"),d_.forEach(t),Pl.forEach(t),tl=d(o),Be=a(o,"DIV",{class:!0});var vt=i(Be);T(Yn.$$.fragment,vt),ah=d(vt),Aa=a(vt,"P",{});var c_=i(Aa);ih=s(c_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),c_.forEach(t),lh=d(vt),Zn=a(vt,"P",{});var Rl=i(Zn);dh=s(Rl,"The DeBERTa model was proposed in "),es=a(Rl,"A",{href:!0,rel:!0});var p_=i(es);ch=s(p_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),p_.forEach(t),ph=s(Rl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rl.forEach(t),hh=d(vt),ts=a(vt,"P",{});var Bl=i(ts);fh=s(Bl,"This model is also a PyTorch "),os=a(Bl,"A",{href:!0,rel:!0});var h_=i(os);mh=s(h_,"torch.nn.Module"),h_.forEach(t),uh=s(Bl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Bl.forEach(t),gh=d(vt),Ne=a(vt,"DIV",{class:!0});var kt=i(Ne);T(ns.$$.fragment,kt),_h=d(kt),Gt=a(kt,"P",{});var Br=i(Gt);bh=s(Br,"The "),gr=a(Br,"A",{href:!0});var f_=i(gr);vh=s(f_,"DebertaV2ForTokenClassification"),f_.forEach(t),kh=s(Br," forward method, overrides the "),La=a(Br,"CODE",{});var m_=i(La);Th=s(m_,"__call__"),m_.forEach(t),wh=s(Br," special method."),Br.forEach(t),yh=d(kt),T(Eo.$$.fragment,kt),Dh=d(kt),Ia=a(kt,"P",{});var u_=i(Ia);Eh=s(u_,"Example:"),u_.forEach(t),$h=d(kt),T(ss.$$.fragment,kt),kt.forEach(t),vt.forEach(t),ol=d(o),Kt=a(o,"H2",{class:!0});var jl=i(Kt);$o=a(jl,"A",{id:!0,class:!0,href:!0});var g_=i($o);Sa=a(g_,"SPAN",{});var __=i(Sa);T(rs.$$.fragment,__),__.forEach(t),g_.forEach(t),Fh=d(jl),Na=a(jl,"SPAN",{});var b_=i(Na);qh=s(b_,"DebertaV2ForQuestionAnswering"),b_.forEach(t),jl.forEach(t),nl=d(o),je=a(o,"DIV",{class:!0});var Tt=i(je);T(as.$$.fragment,Tt),Vh=d(Tt),Jt=a(Tt,"P",{});var jr=i(Jt);zh=s(jr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Oa=a(jr,"CODE",{});var v_=i(Oa);Mh=s(v_,"span start logits"),v_.forEach(t),Ch=s(jr," and "),Wa=a(jr,"CODE",{});var k_=i(Wa);xh=s(k_,"span end logits"),k_.forEach(t),Ph=s(jr,")."),jr.forEach(t),Rh=d(Tt),is=a(Tt,"P",{});var Al=i(is);Bh=s(Al,"The DeBERTa model was proposed in "),ls=a(Al,"A",{href:!0,rel:!0});var T_=i(ls);jh=s(T_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),T_.forEach(t),Ah=s(Al,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Al.forEach(t),Lh=d(Tt),ds=a(Tt,"P",{});var Ll=i(ds);Ih=s(Ll,"This model is also a PyTorch "),cs=a(Ll,"A",{href:!0,rel:!0});var w_=i(cs);Sh=s(w_,"torch.nn.Module"),w_.forEach(t),Nh=s(Ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ll.forEach(t),Oh=d(Tt),Oe=a(Tt,"DIV",{class:!0});var wt=i(Oe);T(ps.$$.fragment,wt),Wh=d(wt),Xt=a(wt,"P",{});var Ar=i(Xt);Hh=s(Ar,"The "),_r=a(Ar,"A",{href:!0});var y_=i(_r);Uh=s(y_,"DebertaV2ForQuestionAnswering"),y_.forEach(t),Qh=s(Ar," forward method, overrides the "),Ha=a(Ar,"CODE",{});var D_=i(Ha);Gh=s(D_,"__call__"),D_.forEach(t),Kh=s(Ar," special method."),Ar.forEach(t),Jh=d(wt),T(Fo.$$.fragment,wt),Xh=d(wt),Ua=a(wt,"P",{});var E_=i(Ua);Yh=s(E_,"Example:"),E_.forEach(t),Zh=d(wt),T(hs.$$.fragment,wt),wt.forEach(t),Tt.forEach(t),sl=d(o),Yt=a(o,"H2",{class:!0});var Il=i(Yt);qo=a(Il,"A",{id:!0,class:!0,href:!0});var $_=i(qo);Qa=a($_,"SPAN",{});var F_=i(Qa);T(fs.$$.fragment,F_),F_.forEach(t),$_.forEach(t),ef=d(Il),Ga=a(Il,"SPAN",{});var q_=i(Ga);tf=s(q_,"TFDebertaV2Model"),q_.forEach(t),Il.forEach(t),rl=d(o),Ae=a(o,"DIV",{class:!0});var yt=i(Ae);T(ms.$$.fragment,yt),of=d(yt),us=a(yt,"P",{});var Sl=i(us);nf=s(Sl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),gs=a(Sl,"A",{href:!0,rel:!0});var V_=i(gs);sf=s(V_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),V_.forEach(t),rf=s(Sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sl.forEach(t),af=d(yt),_s=a(yt,"P",{});var Nl=i(_s);lf=s(Nl,"This model is also a "),bs=a(Nl,"A",{href:!0,rel:!0});var z_=i(bs);df=s(z_,"tf.keras.Model"),z_.forEach(t),cf=s(Nl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nl.forEach(t),pf=d(yt),T(Vo.$$.fragment,yt),hf=d(yt),We=a(yt,"DIV",{class:!0});var Dt=i(We);T(vs.$$.fragment,Dt),ff=d(Dt),Zt=a(Dt,"P",{});var Lr=i(Zt);mf=s(Lr,"The "),br=a(Lr,"A",{href:!0});var M_=i(br);uf=s(M_,"TFDebertaV2Model"),M_.forEach(t),gf=s(Lr," forward method, overrides the "),Ka=a(Lr,"CODE",{});var C_=i(Ka);_f=s(C_,"__call__"),C_.forEach(t),bf=s(Lr," special method."),Lr.forEach(t),vf=d(Dt),T(zo.$$.fragment,Dt),kf=d(Dt),Ja=a(Dt,"P",{});var x_=i(Ja);Tf=s(x_,"Example:"),x_.forEach(t),wf=d(Dt),T(ks.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),al=d(o),eo=a(o,"H2",{class:!0});var Ol=i(eo);Mo=a(Ol,"A",{id:!0,class:!0,href:!0});var P_=i(Mo);Xa=a(P_,"SPAN",{});var R_=i(Xa);T(Ts.$$.fragment,R_),R_.forEach(t),P_.forEach(t),yf=d(Ol),Ya=a(Ol,"SPAN",{});var B_=i(Ya);Df=s(B_,"TFDebertaV2PreTrainedModel"),B_.forEach(t),Ol.forEach(t),il=d(o),ht=a(o,"DIV",{class:!0});var Ir=i(ht);T(ws.$$.fragment,Ir),Ef=d(Ir),Za=a(Ir,"P",{});var j_=i(Za);$f=s(j_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),j_.forEach(t),Ff=d(Ir),rt=a(Ir,"DIV",{class:!0});var Yo=i(rt);T(ys.$$.fragment,Yo),qf=d(Yo),ei=a(Yo,"P",{});var A_=i(ei);Vf=s(A_,"Calls the model on new inputs and returns the outputs as tensors."),A_.forEach(t),zf=d(Yo),Ds=a(Yo,"P",{});var Wl=i(Ds);Mf=s(Wl,"In this case "),ti=a(Wl,"CODE",{});var L_=i(ti);Cf=s(L_,"call()"),L_.forEach(t),xf=s(Wl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Wl.forEach(t),Pf=d(Yo),Ze=a(Yo,"P",{});var Et=i(Ze);Rf=s(Et,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),oi=a(Et,"CODE",{});var I_=i(oi);Bf=s(I_,"tf.keras.Model"),I_.forEach(t),jf=s(Et,`.
To call a model on an input, always use the `),ni=a(Et,"CODE",{});var S_=i(ni);Af=s(S_,"__call__()"),S_.forEach(t),Lf=s(Et,` method,
i.e. `),si=a(Et,"CODE",{});var N_=i(si);If=s(N_,"model(inputs)"),N_.forEach(t),Sf=s(Et,", which relies on the underlying "),ri=a(Et,"CODE",{});var O_=i(ri);Nf=s(O_,"call()"),O_.forEach(t),Of=s(Et," method."),Et.forEach(t),Yo.forEach(t),Ir.forEach(t),ll=d(o),to=a(o,"H2",{class:!0});var Hl=i(to);Co=a(Hl,"A",{id:!0,class:!0,href:!0});var W_=i(Co);ai=a(W_,"SPAN",{});var H_=i(ai);T(Es.$$.fragment,H_),H_.forEach(t),W_.forEach(t),Wf=d(Hl),ii=a(Hl,"SPAN",{});var U_=i(ii);Hf=s(U_,"TFDebertaV2ForMaskedLM"),U_.forEach(t),Hl.forEach(t),dl=d(o),Le=a(o,"DIV",{class:!0});var $t=i(Le);T($s.$$.fragment,$t),Uf=d($t),oo=a($t,"P",{});var Sr=i(oo);Qf=s(Sr,"DeBERTa Model with a "),li=a(Sr,"CODE",{});var Q_=i(li);Gf=s(Q_,"language modeling"),Q_.forEach(t),Kf=s(Sr,` head on top.
The DeBERTa model was proposed in `),Fs=a(Sr,"A",{href:!0,rel:!0});var G_=i(Fs);Jf=s(G_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),G_.forEach(t),Xf=s(Sr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sr.forEach(t),Yf=d($t),qs=a($t,"P",{});var Ul=i(qs);Zf=s(Ul,"This model is also a "),Vs=a(Ul,"A",{href:!0,rel:!0});var K_=i(Vs);em=s(K_,"tf.keras.Model"),K_.forEach(t),tm=s(Ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ul.forEach(t),om=d($t),T(xo.$$.fragment,$t),nm=d($t),He=a($t,"DIV",{class:!0});var Ft=i(He);T(zs.$$.fragment,Ft),sm=d(Ft),no=a(Ft,"P",{});var Nr=i(no);rm=s(Nr,"The "),vr=a(Nr,"A",{href:!0});var J_=i(vr);am=s(J_,"TFDebertaV2ForMaskedLM"),J_.forEach(t),im=s(Nr," forward method, overrides the "),di=a(Nr,"CODE",{});var X_=i(di);lm=s(X_,"__call__"),X_.forEach(t),dm=s(Nr," special method."),Nr.forEach(t),cm=d(Ft),T(Po.$$.fragment,Ft),pm=d(Ft),ci=a(Ft,"P",{});var Y_=i(ci);hm=s(Y_,"Example:"),Y_.forEach(t),fm=d(Ft),T(Ms.$$.fragment,Ft),Ft.forEach(t),$t.forEach(t),cl=d(o),so=a(o,"H2",{class:!0});var Ql=i(so);Ro=a(Ql,"A",{id:!0,class:!0,href:!0});var Z_=i(Ro);pi=a(Z_,"SPAN",{});var eb=i(pi);T(Cs.$$.fragment,eb),eb.forEach(t),Z_.forEach(t),mm=d(Ql),hi=a(Ql,"SPAN",{});var tb=i(hi);um=s(tb,"TFDebertaV2ForSequenceClassification"),tb.forEach(t),Ql.forEach(t),pl=d(o),ze=a(o,"DIV",{class:!0});var it=i(ze);T(xs.$$.fragment,it),gm=d(it),fi=a(it,"P",{});var ob=i(fi);_m=s(ob,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ob.forEach(t),bm=d(it),Ps=a(it,"P",{});var Gl=i(Ps);vm=s(Gl,"The DeBERTa model was proposed in "),Rs=a(Gl,"A",{href:!0,rel:!0});var nb=i(Rs);km=s(nb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),nb.forEach(t),Tm=s(Gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gl.forEach(t),wm=d(it),Bs=a(it,"P",{});var Kl=i(Bs);ym=s(Kl,"This model is also a "),js=a(Kl,"A",{href:!0,rel:!0});var sb=i(js);Dm=s(sb,"tf.keras.Model"),sb.forEach(t),Em=s(Kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kl.forEach(t),$m=d(it),T(Bo.$$.fragment,it),Fm=d(it),Ue=a(it,"DIV",{class:!0});var qt=i(Ue);T(As.$$.fragment,qt),qm=d(qt),ro=a(qt,"P",{});var Or=i(ro);Vm=s(Or,"The "),kr=a(Or,"A",{href:!0});var rb=i(kr);zm=s(rb,"TFDebertaV2ForSequenceClassification"),rb.forEach(t),Mm=s(Or," forward method, overrides the "),mi=a(Or,"CODE",{});var ab=i(mi);Cm=s(ab,"__call__"),ab.forEach(t),xm=s(Or," special method."),Or.forEach(t),Pm=d(qt),T(jo.$$.fragment,qt),Rm=d(qt),ui=a(qt,"P",{});var ib=i(ui);Bm=s(ib,"Example:"),ib.forEach(t),jm=d(qt),T(Ls.$$.fragment,qt),qt.forEach(t),it.forEach(t),hl=d(o),ao=a(o,"H2",{class:!0});var Jl=i(ao);Ao=a(Jl,"A",{id:!0,class:!0,href:!0});var lb=i(Ao);gi=a(lb,"SPAN",{});var db=i(gi);T(Is.$$.fragment,db),db.forEach(t),lb.forEach(t),Am=d(Jl),_i=a(Jl,"SPAN",{});var cb=i(_i);Lm=s(cb,"TFDebertaV2ForTokenClassification"),cb.forEach(t),Jl.forEach(t),fl=d(o),Me=a(o,"DIV",{class:!0});var lt=i(Me);T(Ss.$$.fragment,lt),Im=d(lt),bi=a(lt,"P",{});var pb=i(bi);Sm=s(pb,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pb.forEach(t),Nm=d(lt),Ns=a(lt,"P",{});var Xl=i(Ns);Om=s(Xl,"The DeBERTa model was proposed in "),Os=a(Xl,"A",{href:!0,rel:!0});var hb=i(Os);Wm=s(hb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hb.forEach(t),Hm=s(Xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xl.forEach(t),Um=d(lt),Ws=a(lt,"P",{});var Yl=i(Ws);Qm=s(Yl,"This model is also a "),Hs=a(Yl,"A",{href:!0,rel:!0});var fb=i(Hs);Gm=s(fb,"tf.keras.Model"),fb.forEach(t),Km=s(Yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl.forEach(t),Jm=d(lt),T(Lo.$$.fragment,lt),Xm=d(lt),Qe=a(lt,"DIV",{class:!0});var Vt=i(Qe);T(Us.$$.fragment,Vt),Ym=d(Vt),io=a(Vt,"P",{});var Wr=i(io);Zm=s(Wr,"The "),Tr=a(Wr,"A",{href:!0});var mb=i(Tr);eu=s(mb,"TFDebertaV2ForTokenClassification"),mb.forEach(t),tu=s(Wr," forward method, overrides the "),vi=a(Wr,"CODE",{});var ub=i(vi);ou=s(ub,"__call__"),ub.forEach(t),nu=s(Wr," special method."),Wr.forEach(t),su=d(Vt),T(Io.$$.fragment,Vt),ru=d(Vt),ki=a(Vt,"P",{});var gb=i(ki);au=s(gb,"Example:"),gb.forEach(t),iu=d(Vt),T(Qs.$$.fragment,Vt),Vt.forEach(t),lt.forEach(t),ml=d(o),lo=a(o,"H2",{class:!0});var Zl=i(lo);So=a(Zl,"A",{id:!0,class:!0,href:!0});var _b=i(So);Ti=a(_b,"SPAN",{});var bb=i(Ti);T(Gs.$$.fragment,bb),bb.forEach(t),_b.forEach(t),lu=d(Zl),wi=a(Zl,"SPAN",{});var vb=i(wi);du=s(vb,"TFDebertaV2ForQuestionAnswering"),vb.forEach(t),Zl.forEach(t),ul=d(o),Ce=a(o,"DIV",{class:!0});var dt=i(Ce);T(Ks.$$.fragment,dt),cu=d(dt),co=a(dt,"P",{});var Hr=i(co);pu=s(Hr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yi=a(Hr,"CODE",{});var kb=i(yi);hu=s(kb,"span start logits"),kb.forEach(t),fu=s(Hr," and "),Di=a(Hr,"CODE",{});var Tb=i(Di);mu=s(Tb,"span end logits"),Tb.forEach(t),uu=s(Hr,")."),Hr.forEach(t),gu=d(dt),Js=a(dt,"P",{});var ed=i(Js);_u=s(ed,"The DeBERTa model was proposed in "),Xs=a(ed,"A",{href:!0,rel:!0});var wb=i(Xs);bu=s(wb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wb.forEach(t),vu=s(ed,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ed.forEach(t),ku=d(dt),Ys=a(dt,"P",{});var td=i(Ys);Tu=s(td,"This model is also a "),Zs=a(td,"A",{href:!0,rel:!0});var yb=i(Zs);wu=s(yb,"tf.keras.Model"),yb.forEach(t),yu=s(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(t),Du=d(dt),T(No.$$.fragment,dt),Eu=d(dt),Ge=a(dt,"DIV",{class:!0});var zt=i(Ge);T(er.$$.fragment,zt),$u=d(zt),po=a(zt,"P",{});var Ur=i(po);Fu=s(Ur,"The "),wr=a(Ur,"A",{href:!0});var Db=i(wr);qu=s(Db,"TFDebertaV2ForQuestionAnswering"),Db.forEach(t),Vu=s(Ur," forward method, overrides the "),Ei=a(Ur,"CODE",{});var Eb=i(Ei);zu=s(Eb,"__call__"),Eb.forEach(t),Mu=s(Ur," special method."),Ur.forEach(t),Cu=d(zt),T(Oo.$$.fragment,zt),xu=d(zt),$i=a(zt,"P",{});var $b=i($i);Pu=s($b,"Example:"),$b.forEach(t),Ru=d(zt),T(tr.$$.fragment,zt),zt.forEach(t),dt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Gb)),c(g,"id","debertav2"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(V,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(j,"href","https://github.com/microsoft/DeBERTa"),c(j,"rel","nofollow"),c(P,"href","https://github.com/microsoft/DeBERTa"),c(P,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Zo,"href","https://huggingface.co/DeBERTa"),c(Zo,"rel","nofollow"),c(en,"href","https://huggingface.co/kamalkraj"),c(en,"rel","nofollow"),c(tn,"href","https://github.com/microsoft/DeBERTa"),c(tn,"rel","nofollow"),c(ho,"id","transformers.DebertaV2Config"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2Config"),c(Mt,"class","relative group"),c(dr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(sn,"href","https://huggingface.co/microsoft/deberta-base"),c(sn,"rel","nofollow"),c(cr,"href","/docs/transformers/pr_15529/en/main_classes/configuration#transformers.PretrainedConfig"),c(pr,"href","/docs/transformers/pr_15529/en/main_classes/configuration#transformers.PretrainedConfig"),c(ct,"class","docstring"),c(fo,"id","transformers.DebertaV2Tokenizer"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.DebertaV2Tokenizer"),c(Pt,"class","relative group"),c(dn,"href","https://github.com/google/sentencepiece"),c(dn,"rel","nofollow"),c(ft,"class","docstring"),c(mo,"class","docstring"),c(ot,"class","docstring"),c(hr,"class","docstring"),c(Ve,"class","docstring"),c(uo,"id","transformers.DebertaV2TokenizerFast"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.DebertaV2TokenizerFast"),c(jt,"class","relative group"),c(vn,"href","https://github.com/google/sentencepiece"),c(vn,"rel","nofollow"),c(mt,"class","docstring"),c(nt,"class","docstring"),c(Je,"class","docstring"),c(go,"id","transformers.DebertaV2Model"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2Model"),c(Lt,"class","relative group"),c(Fn,"href","https://arxiv.org/abs/2006.03654"),c(Fn,"rel","nofollow"),c(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vn,"rel","nofollow"),c(fr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ie,"class","docstring"),c(Xe,"class","docstring"),c(bo,"id","transformers.DebertaV2PreTrainedModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2PreTrainedModel"),c(St,"class","relative group"),c(st,"class","docstring"),c(pt,"class","docstring"),c(ko,"id","transformers.DebertaV2ForMaskedLM"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.DebertaV2ForMaskedLM"),c(Nt,"class","relative group"),c(jn,"href","https://arxiv.org/abs/2006.03654"),c(jn,"rel","nofollow"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(mr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Se,"class","docstring"),c(Ye,"class","docstring"),c(wo,"id","transformers.DebertaV2ForSequenceClassification"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.DebertaV2ForSequenceClassification"),c(Ht,"class","relative group"),c(Hn,"href","https://arxiv.org/abs/2006.03654"),c(Hn,"rel","nofollow"),c(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Qn,"rel","nofollow"),c(ur,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(qe,"class","docstring"),c(Re,"class","docstring"),c(Do,"id","transformers.DebertaV2ForTokenClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.DebertaV2ForTokenClassification"),c(Qt,"class","relative group"),c(es,"href","https://arxiv.org/abs/2006.03654"),c(es,"rel","nofollow"),c(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(os,"rel","nofollow"),c(gr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Ne,"class","docstring"),c(Be,"class","docstring"),c($o,"id","transformers.DebertaV2ForQuestionAnswering"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Kt,"class","relative group"),c(ls,"href","https://arxiv.org/abs/2006.03654"),c(ls,"rel","nofollow"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(_r,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Oe,"class","docstring"),c(je,"class","docstring"),c(qo,"id","transformers.TFDebertaV2Model"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2Model"),c(Yt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(br,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(We,"class","docstring"),c(Ae,"class","docstring"),c(Mo,"id","transformers.TFDebertaV2PreTrainedModel"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaV2PreTrainedModel"),c(eo,"class","relative group"),c(rt,"class","docstring"),c(ht,"class","docstring"),c(Co,"id","transformers.TFDebertaV2ForMaskedLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.TFDebertaV2ForMaskedLM"),c(to,"class","relative group"),c(Fs,"href","https://arxiv.org/abs/2006.03654"),c(Fs,"rel","nofollow"),c(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vs,"rel","nofollow"),c(vr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(He,"class","docstring"),c(Le,"class","docstring"),c(Ro,"id","transformers.TFDebertaV2ForSequenceClassification"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(so,"class","relative group"),c(Rs,"href","https://arxiv.org/abs/2006.03654"),c(Rs,"rel","nofollow"),c(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(js,"rel","nofollow"),c(kr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ue,"class","docstring"),c(ze,"class","docstring"),c(Ao,"id","transformers.TFDebertaV2ForTokenClassification"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFDebertaV2ForTokenClassification"),c(ao,"class","relative group"),c(Os,"href","https://arxiv.org/abs/2006.03654"),c(Os,"rel","nofollow"),c(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hs,"rel","nofollow"),c(Tr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(So,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(lo,"class","relative group"),c(Xs,"href","https://arxiv.org/abs/2006.03654"),c(Xs,"rel","nofollow"),c(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zs,"rel","nofollow"),c(wr,"href","/docs/transformers/pr_15529/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Ge,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,h),f(o,$,m),f(o,u,m),e(u,g),e(g,v),w(b,v,null),e(u,_),e(u,q),e(q,de),f(o,J,m),f(o,V,m),e(V,Y),e(Y,I),w(ee,I,null),e(V,ce),e(V,S),e(S,pe),f(o,ae,m),f(o,O,m),e(O,R),e(O,te),e(te,Z),e(O,z),f(o,C,m),f(o,ne,m),e(ne,W),f(o,ie,m),f(o,se,m),e(se,H),f(o,le,m),f(o,re,m),e(re,M),e(M,he),e(M,j),e(j,fe),e(M,me),f(o,N,m),f(o,X,m),e(X,ue),e(X,P),e(P,ge),e(X,U),e(X,oe),e(oe,p),f(o,F,m),f(o,K,m),e(K,ye),f(o,we,m),f(o,x,m),e(x,_e),e(_e,ke),e(ke,De),e(_e,B),e(_e,A),e(A,Ee),e(_e,$e),e(x,Q),e(x,ve),e(ve,Te),e(Te,be),e(ve,Fe),e(x,od),e(x,ar),e(ar,Qr),e(Qr,nd),e(ar,sd),e(x,rd),e(x,ir),e(ir,Gr),e(Gr,ad),e(ir,id),e(x,ld),e(x,lr),e(lr,Kr),e(Kr,dd),e(lr,cd),f(o,Li,m),f(o,tt,m),e(tt,pd),e(tt,Zo),e(Zo,hd),e(tt,fd),e(tt,en),e(en,md),e(tt,ud),e(tt,tn),e(tn,gd),e(tt,_d),f(o,Ii,m),f(o,Mt,m),e(Mt,ho),e(ho,Jr),w(on,Jr,null),e(Mt,bd),e(Mt,Xr),e(Xr,vd),f(o,Si,m),f(o,ct,m),w(nn,ct,null),e(ct,kd),e(ct,Ct),e(Ct,Td),e(Ct,dr),e(dr,wd),e(Ct,yd),e(Ct,sn),e(sn,Dd),e(Ct,Ed),e(ct,$d),e(ct,xt),e(xt,Fd),e(xt,cr),e(cr,qd),e(xt,Vd),e(xt,pr),e(pr,zd),e(xt,Md),f(o,Ni,m),f(o,Pt,m),e(Pt,fo),e(fo,Yr),w(rn,Yr,null),e(Pt,Cd),e(Pt,Zr),e(Zr,xd),f(o,Oi,m),f(o,Ve,m),w(an,Ve,null),e(Ve,Pd),e(Ve,ln),e(ln,Rd),e(ln,dn),e(dn,Bd),e(ln,jd),e(Ve,Ad),e(Ve,ft),w(cn,ft,null),e(ft,Ld),e(ft,ea),e(ea,Id),e(ft,Sd),e(ft,pn),e(pn,ta),e(ta,Nd),e(pn,Od),e(pn,oa),e(oa,Wd),e(Ve,Hd),e(Ve,mo),w(hn,mo,null),e(mo,Ud),e(mo,Rt),e(Rt,Qd),e(Rt,na),e(na,Gd),e(Rt,Kd),e(Rt,sa),e(sa,Jd),e(Rt,Xd),e(Ve,Yd),e(Ve,ot),w(fn,ot,null),e(ot,Zd),e(ot,ra),e(ra,ec),e(ot,tc),w(mn,ot,null),e(ot,oc),e(ot,Bt),e(Bt,nc),e(Bt,aa),e(aa,sc),e(Bt,rc),e(Bt,ia),e(ia,ac),e(Bt,ic),e(Ve,lc),e(Ve,hr),w(un,hr,null),f(o,Wi,m),f(o,jt,m),e(jt,uo),e(uo,la),w(gn,la,null),e(jt,dc),e(jt,da),e(da,cc),f(o,Hi,m),f(o,Je,m),w(_n,Je,null),e(Je,pc),e(Je,bn),e(bn,hc),e(bn,vn),e(vn,fc),e(bn,mc),e(Je,uc),e(Je,mt),w(kn,mt,null),e(mt,gc),e(mt,ca),e(ca,_c),e(mt,bc),e(mt,Tn),e(Tn,pa),e(pa,vc),e(Tn,kc),e(Tn,ha),e(ha,Tc),e(Je,wc),e(Je,nt),w(wn,nt,null),e(nt,yc),e(nt,fa),e(fa,Dc),e(nt,Ec),w(yn,nt,null),e(nt,$c),e(nt,At),e(At,Fc),e(At,ma),e(ma,qc),e(At,Vc),e(At,ua),e(ua,zc),e(At,Mc),f(o,Ui,m),f(o,Lt,m),e(Lt,go),e(go,ga),w(Dn,ga,null),e(Lt,Cc),e(Lt,_a),e(_a,xc),f(o,Qi,m),f(o,Xe,m),w(En,Xe,null),e(Xe,Pc),e(Xe,$n),e($n,Rc),e($n,Fn),e(Fn,Bc),e($n,jc),e(Xe,Ac),e(Xe,qn),e(qn,Lc),e(qn,Vn),e(Vn,Ic),e(qn,Sc),e(Xe,Nc),e(Xe,Ie),w(zn,Ie,null),e(Ie,Oc),e(Ie,It),e(It,Wc),e(It,fr),e(fr,Hc),e(It,Uc),e(It,ba),e(ba,Qc),e(It,Gc),e(Ie,Kc),w(_o,Ie,null),e(Ie,Jc),e(Ie,va),e(va,Xc),e(Ie,Yc),w(Mn,Ie,null),f(o,Gi,m),f(o,St,m),e(St,bo),e(bo,ka),w(Cn,ka,null),e(St,Zc),e(St,Ta),e(Ta,ep),f(o,Ki,m),f(o,pt,m),w(xn,pt,null),e(pt,tp),e(pt,wa),e(wa,op),e(pt,np),e(pt,st),w(Pn,st,null),e(st,sp),e(st,ya),e(ya,rp),e(st,ap),e(st,Da),e(Da,ip),e(st,lp),w(vo,st,null),f(o,Ji,m),f(o,Nt,m),e(Nt,ko),e(ko,Ea),w(Rn,Ea,null),e(Nt,dp),e(Nt,$a),e($a,cp),f(o,Xi,m),f(o,Ye,m),w(Bn,Ye,null),e(Ye,pp),e(Ye,Ot),e(Ot,hp),e(Ot,Fa),e(Fa,fp),e(Ot,mp),e(Ot,jn),e(jn,up),e(Ot,gp),e(Ye,_p),e(Ye,An),e(An,bp),e(An,Ln),e(Ln,vp),e(An,kp),e(Ye,Tp),e(Ye,Se),w(In,Se,null),e(Se,wp),e(Se,Wt),e(Wt,yp),e(Wt,mr),e(mr,Dp),e(Wt,Ep),e(Wt,qa),e(qa,$p),e(Wt,Fp),e(Se,qp),w(To,Se,null),e(Se,Vp),e(Se,Va),e(Va,zp),e(Se,Mp),w(Sn,Se,null),f(o,Yi,m),f(o,Ht,m),e(Ht,wo),e(wo,za),w(Nn,za,null),e(Ht,Cp),e(Ht,Ma),e(Ma,xp),f(o,Zi,m),f(o,Re,m),w(On,Re,null),e(Re,Pp),e(Re,Ca),e(Ca,Rp),e(Re,Bp),e(Re,Wn),e(Wn,jp),e(Wn,Hn),e(Hn,Ap),e(Wn,Lp),e(Re,Ip),e(Re,Un),e(Un,Sp),e(Un,Qn),e(Qn,Np),e(Un,Op),e(Re,Wp),e(Re,qe),w(Gn,qe,null),e(qe,Hp),e(qe,Ut),e(Ut,Up),e(Ut,ur),e(ur,Qp),e(Ut,Gp),e(Ut,xa),e(xa,Kp),e(Ut,Jp),e(qe,Xp),w(yo,qe,null),e(qe,Yp),e(qe,Pa),e(Pa,Zp),e(qe,eh),w(Kn,qe,null),e(qe,th),e(qe,Ra),e(Ra,oh),e(qe,nh),w(Jn,qe,null),f(o,el,m),f(o,Qt,m),e(Qt,Do),e(Do,Ba),w(Xn,Ba,null),e(Qt,sh),e(Qt,ja),e(ja,rh),f(o,tl,m),f(o,Be,m),w(Yn,Be,null),e(Be,ah),e(Be,Aa),e(Aa,ih),e(Be,lh),e(Be,Zn),e(Zn,dh),e(Zn,es),e(es,ch),e(Zn,ph),e(Be,hh),e(Be,ts),e(ts,fh),e(ts,os),e(os,mh),e(ts,uh),e(Be,gh),e(Be,Ne),w(ns,Ne,null),e(Ne,_h),e(Ne,Gt),e(Gt,bh),e(Gt,gr),e(gr,vh),e(Gt,kh),e(Gt,La),e(La,Th),e(Gt,wh),e(Ne,yh),w(Eo,Ne,null),e(Ne,Dh),e(Ne,Ia),e(Ia,Eh),e(Ne,$h),w(ss,Ne,null),f(o,ol,m),f(o,Kt,m),e(Kt,$o),e($o,Sa),w(rs,Sa,null),e(Kt,Fh),e(Kt,Na),e(Na,qh),f(o,nl,m),f(o,je,m),w(as,je,null),e(je,Vh),e(je,Jt),e(Jt,zh),e(Jt,Oa),e(Oa,Mh),e(Jt,Ch),e(Jt,Wa),e(Wa,xh),e(Jt,Ph),e(je,Rh),e(je,is),e(is,Bh),e(is,ls),e(ls,jh),e(is,Ah),e(je,Lh),e(je,ds),e(ds,Ih),e(ds,cs),e(cs,Sh),e(ds,Nh),e(je,Oh),e(je,Oe),w(ps,Oe,null),e(Oe,Wh),e(Oe,Xt),e(Xt,Hh),e(Xt,_r),e(_r,Uh),e(Xt,Qh),e(Xt,Ha),e(Ha,Gh),e(Xt,Kh),e(Oe,Jh),w(Fo,Oe,null),e(Oe,Xh),e(Oe,Ua),e(Ua,Yh),e(Oe,Zh),w(hs,Oe,null),f(o,sl,m),f(o,Yt,m),e(Yt,qo),e(qo,Qa),w(fs,Qa,null),e(Yt,ef),e(Yt,Ga),e(Ga,tf),f(o,rl,m),f(o,Ae,m),w(ms,Ae,null),e(Ae,of),e(Ae,us),e(us,nf),e(us,gs),e(gs,sf),e(us,rf),e(Ae,af),e(Ae,_s),e(_s,lf),e(_s,bs),e(bs,df),e(_s,cf),e(Ae,pf),w(Vo,Ae,null),e(Ae,hf),e(Ae,We),w(vs,We,null),e(We,ff),e(We,Zt),e(Zt,mf),e(Zt,br),e(br,uf),e(Zt,gf),e(Zt,Ka),e(Ka,_f),e(Zt,bf),e(We,vf),w(zo,We,null),e(We,kf),e(We,Ja),e(Ja,Tf),e(We,wf),w(ks,We,null),f(o,al,m),f(o,eo,m),e(eo,Mo),e(Mo,Xa),w(Ts,Xa,null),e(eo,yf),e(eo,Ya),e(Ya,Df),f(o,il,m),f(o,ht,m),w(ws,ht,null),e(ht,Ef),e(ht,Za),e(Za,$f),e(ht,Ff),e(ht,rt),w(ys,rt,null),e(rt,qf),e(rt,ei),e(ei,Vf),e(rt,zf),e(rt,Ds),e(Ds,Mf),e(Ds,ti),e(ti,Cf),e(Ds,xf),e(rt,Pf),e(rt,Ze),e(Ze,Rf),e(Ze,oi),e(oi,Bf),e(Ze,jf),e(Ze,ni),e(ni,Af),e(Ze,Lf),e(Ze,si),e(si,If),e(Ze,Sf),e(Ze,ri),e(ri,Nf),e(Ze,Of),f(o,ll,m),f(o,to,m),e(to,Co),e(Co,ai),w(Es,ai,null),e(to,Wf),e(to,ii),e(ii,Hf),f(o,dl,m),f(o,Le,m),w($s,Le,null),e(Le,Uf),e(Le,oo),e(oo,Qf),e(oo,li),e(li,Gf),e(oo,Kf),e(oo,Fs),e(Fs,Jf),e(oo,Xf),e(Le,Yf),e(Le,qs),e(qs,Zf),e(qs,Vs),e(Vs,em),e(qs,tm),e(Le,om),w(xo,Le,null),e(Le,nm),e(Le,He),w(zs,He,null),e(He,sm),e(He,no),e(no,rm),e(no,vr),e(vr,am),e(no,im),e(no,di),e(di,lm),e(no,dm),e(He,cm),w(Po,He,null),e(He,pm),e(He,ci),e(ci,hm),e(He,fm),w(Ms,He,null),f(o,cl,m),f(o,so,m),e(so,Ro),e(Ro,pi),w(Cs,pi,null),e(so,mm),e(so,hi),e(hi,um),f(o,pl,m),f(o,ze,m),w(xs,ze,null),e(ze,gm),e(ze,fi),e(fi,_m),e(ze,bm),e(ze,Ps),e(Ps,vm),e(Ps,Rs),e(Rs,km),e(Ps,Tm),e(ze,wm),e(ze,Bs),e(Bs,ym),e(Bs,js),e(js,Dm),e(Bs,Em),e(ze,$m),w(Bo,ze,null),e(ze,Fm),e(ze,Ue),w(As,Ue,null),e(Ue,qm),e(Ue,ro),e(ro,Vm),e(ro,kr),e(kr,zm),e(ro,Mm),e(ro,mi),e(mi,Cm),e(ro,xm),e(Ue,Pm),w(jo,Ue,null),e(Ue,Rm),e(Ue,ui),e(ui,Bm),e(Ue,jm),w(Ls,Ue,null),f(o,hl,m),f(o,ao,m),e(ao,Ao),e(Ao,gi),w(Is,gi,null),e(ao,Am),e(ao,_i),e(_i,Lm),f(o,fl,m),f(o,Me,m),w(Ss,Me,null),e(Me,Im),e(Me,bi),e(bi,Sm),e(Me,Nm),e(Me,Ns),e(Ns,Om),e(Ns,Os),e(Os,Wm),e(Ns,Hm),e(Me,Um),e(Me,Ws),e(Ws,Qm),e(Ws,Hs),e(Hs,Gm),e(Ws,Km),e(Me,Jm),w(Lo,Me,null),e(Me,Xm),e(Me,Qe),w(Us,Qe,null),e(Qe,Ym),e(Qe,io),e(io,Zm),e(io,Tr),e(Tr,eu),e(io,tu),e(io,vi),e(vi,ou),e(io,nu),e(Qe,su),w(Io,Qe,null),e(Qe,ru),e(Qe,ki),e(ki,au),e(Qe,iu),w(Qs,Qe,null),f(o,ml,m),f(o,lo,m),e(lo,So),e(So,Ti),w(Gs,Ti,null),e(lo,lu),e(lo,wi),e(wi,du),f(o,ul,m),f(o,Ce,m),w(Ks,Ce,null),e(Ce,cu),e(Ce,co),e(co,pu),e(co,yi),e(yi,hu),e(co,fu),e(co,Di),e(Di,mu),e(co,uu),e(Ce,gu),e(Ce,Js),e(Js,_u),e(Js,Xs),e(Xs,bu),e(Js,vu),e(Ce,ku),e(Ce,Ys),e(Ys,Tu),e(Ys,Zs),e(Zs,wu),e(Ys,yu),e(Ce,Du),w(No,Ce,null),e(Ce,Eu),e(Ce,Ge),w(er,Ge,null),e(Ge,$u),e(Ge,po),e(po,Fu),e(po,wr),e(wr,qu),e(po,Vu),e(po,Ei),e(Ei,zu),e(po,Mu),e(Ge,Cu),w(Oo,Ge,null),e(Ge,xu),e(Ge,$i),e($i,Pu),e(Ge,Ru),w(tr,Ge,null),gl=!0},p(o,[m]){const or={};m&2&&(or.$$scope={dirty:m,ctx:o}),_o.$set(or);const Fi={};m&2&&(Fi.$$scope={dirty:m,ctx:o}),vo.$set(Fi);const qi={};m&2&&(qi.$$scope={dirty:m,ctx:o}),To.$set(qi);const Vi={};m&2&&(Vi.$$scope={dirty:m,ctx:o}),yo.$set(Vi);const nr={};m&2&&(nr.$$scope={dirty:m,ctx:o}),Eo.$set(nr);const zi={};m&2&&(zi.$$scope={dirty:m,ctx:o}),Fo.$set(zi);const Mi={};m&2&&(Mi.$$scope={dirty:m,ctx:o}),Vo.$set(Mi);const Ci={};m&2&&(Ci.$$scope={dirty:m,ctx:o}),zo.$set(Ci);const sr={};m&2&&(sr.$$scope={dirty:m,ctx:o}),xo.$set(sr);const xi={};m&2&&(xi.$$scope={dirty:m,ctx:o}),Po.$set(xi);const Pi={};m&2&&(Pi.$$scope={dirty:m,ctx:o}),Bo.$set(Pi);const Ri={};m&2&&(Ri.$$scope={dirty:m,ctx:o}),jo.$set(Ri);const Bi={};m&2&&(Bi.$$scope={dirty:m,ctx:o}),Lo.$set(Bi);const rr={};m&2&&(rr.$$scope={dirty:m,ctx:o}),Io.$set(rr);const ji={};m&2&&(ji.$$scope={dirty:m,ctx:o}),No.$set(ji);const Wo={};m&2&&(Wo.$$scope={dirty:m,ctx:o}),Oo.$set(Wo)},i(o){gl||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(fn.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(kn.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(_o.$$.fragment,o),y(Mn.$$.fragment,o),y(Cn.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(vo.$$.fragment,o),y(Rn.$$.fragment,o),y(Bn.$$.fragment,o),y(In.$$.fragment,o),y(To.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(On.$$.fragment,o),y(Gn.$$.fragment,o),y(yo.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(ns.$$.fragment,o),y(Eo.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(as.$$.fragment,o),y(ps.$$.fragment,o),y(Fo.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(ms.$$.fragment,o),y(Vo.$$.fragment,o),y(vs.$$.fragment,o),y(zo.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(Es.$$.fragment,o),y($s.$$.fragment,o),y(xo.$$.fragment,o),y(zs.$$.fragment,o),y(Po.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(xs.$$.fragment,o),y(Bo.$$.fragment,o),y(As.$$.fragment,o),y(jo.$$.fragment,o),y(Ls.$$.fragment,o),y(Is.$$.fragment,o),y(Ss.$$.fragment,o),y(Lo.$$.fragment,o),y(Us.$$.fragment,o),y(Io.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),y(Ks.$$.fragment,o),y(No.$$.fragment,o),y(er.$$.fragment,o),y(Oo.$$.fragment,o),y(tr.$$.fragment,o),gl=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(cn.$$.fragment,o),D(hn.$$.fragment,o),D(fn.$$.fragment,o),D(mn.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(kn.$$.fragment,o),D(wn.$$.fragment,o),D(yn.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(zn.$$.fragment,o),D(_o.$$.fragment,o),D(Mn.$$.fragment,o),D(Cn.$$.fragment,o),D(xn.$$.fragment,o),D(Pn.$$.fragment,o),D(vo.$$.fragment,o),D(Rn.$$.fragment,o),D(Bn.$$.fragment,o),D(In.$$.fragment,o),D(To.$$.fragment,o),D(Sn.$$.fragment,o),D(Nn.$$.fragment,o),D(On.$$.fragment,o),D(Gn.$$.fragment,o),D(yo.$$.fragment,o),D(Kn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(Yn.$$.fragment,o),D(ns.$$.fragment,o),D(Eo.$$.fragment,o),D(ss.$$.fragment,o),D(rs.$$.fragment,o),D(as.$$.fragment,o),D(ps.$$.fragment,o),D(Fo.$$.fragment,o),D(hs.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(Vo.$$.fragment,o),D(vs.$$.fragment,o),D(zo.$$.fragment,o),D(ks.$$.fragment,o),D(Ts.$$.fragment,o),D(ws.$$.fragment,o),D(ys.$$.fragment,o),D(Es.$$.fragment,o),D($s.$$.fragment,o),D(xo.$$.fragment,o),D(zs.$$.fragment,o),D(Po.$$.fragment,o),D(Ms.$$.fragment,o),D(Cs.$$.fragment,o),D(xs.$$.fragment,o),D(Bo.$$.fragment,o),D(As.$$.fragment,o),D(jo.$$.fragment,o),D(Ls.$$.fragment,o),D(Is.$$.fragment,o),D(Ss.$$.fragment,o),D(Lo.$$.fragment,o),D(Us.$$.fragment,o),D(Io.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Ks.$$.fragment,o),D(No.$$.fragment,o),D(er.$$.fragment,o),D(Oo.$$.fragment,o),D(tr.$$.fragment,o),gl=!1},d(o){t(h),o&&t($),o&&t(u),E(b),o&&t(J),o&&t(V),E(ee),o&&t(ae),o&&t(O),o&&t(C),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(re),o&&t(N),o&&t(X),o&&t(F),o&&t(K),o&&t(we),o&&t(x),o&&t(Li),o&&t(tt),o&&t(Ii),o&&t(Mt),E(on),o&&t(Si),o&&t(ct),E(nn),o&&t(Ni),o&&t(Pt),E(rn),o&&t(Oi),o&&t(Ve),E(an),E(cn),E(hn),E(fn),E(mn),E(un),o&&t(Wi),o&&t(jt),E(gn),o&&t(Hi),o&&t(Je),E(_n),E(kn),E(wn),E(yn),o&&t(Ui),o&&t(Lt),E(Dn),o&&t(Qi),o&&t(Xe),E(En),E(zn),E(_o),E(Mn),o&&t(Gi),o&&t(St),E(Cn),o&&t(Ki),o&&t(pt),E(xn),E(Pn),E(vo),o&&t(Ji),o&&t(Nt),E(Rn),o&&t(Xi),o&&t(Ye),E(Bn),E(In),E(To),E(Sn),o&&t(Yi),o&&t(Ht),E(Nn),o&&t(Zi),o&&t(Re),E(On),E(Gn),E(yo),E(Kn),E(Jn),o&&t(el),o&&t(Qt),E(Xn),o&&t(tl),o&&t(Be),E(Yn),E(ns),E(Eo),E(ss),o&&t(ol),o&&t(Kt),E(rs),o&&t(nl),o&&t(je),E(as),E(ps),E(Fo),E(hs),o&&t(sl),o&&t(Yt),E(fs),o&&t(rl),o&&t(Ae),E(ms),E(Vo),E(vs),E(zo),E(ks),o&&t(al),o&&t(eo),E(Ts),o&&t(il),o&&t(ht),E(ws),E(ys),o&&t(ll),o&&t(to),E(Es),o&&t(dl),o&&t(Le),E($s),E(xo),E(zs),E(Po),E(Ms),o&&t(cl),o&&t(so),E(Cs),o&&t(pl),o&&t(ze),E(xs),E(Bo),E(As),E(jo),E(Ls),o&&t(hl),o&&t(ao),E(Is),o&&t(fl),o&&t(Me),E(Ss),E(Lo),E(Us),E(Io),E(Qs),o&&t(ml),o&&t(lo),E(Gs),o&&t(ul),o&&t(Ce),E(Ks),E(No),E(er),E(Oo),E(tr)}}}const Gb={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function Kb(L,h,$){let{fw:u}=h;return L.$$set=g=>{"fw"in g&&$(0,u=g.fw)},[u]}class o2 extends Fb{constructor(h){super();qb(this,h,Kb,Qb,Vb,{fw:0})}}export{o2 as default,Gb as metadata};
