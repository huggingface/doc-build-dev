import{S as u2,i as f2,s as m2,e as s,k as l,w as k,t as a,M as g2,c as n,d as t,m as d,a as r,x as b,h as i,b as c,F as e,g as u,y as w,q as y,o as $,B as D,v as _2}from"../../chunks/vendor-6b77c823.js";import{T as me}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as ge}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function v2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function T2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function k2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function b2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function w2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function y2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function D2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function F2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function B2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function M2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function E2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function x2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function z2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function j2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function C2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function P2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var be=r(S);pe=i(be,"model(inputs)"),be.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var De=r(I);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function q2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function A2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function O2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function N2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function I2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function L2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function S2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function W2(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le,h,M,K,_e,ke,O,ve,be,we,C,H,ye,$e,Z,De,ne,Fe,gu,_p,Tt,_u,Ys,vu,Tu,Zs,ku,bu,en,wu,yu,vp,ao,Go,bl,tn,$u,wl,Du,Tp,Ue,on,Fu,Et,Bu,ui,Mu,Eu,fi,xu,zu,sn,ju,Cu,Pu,io,qu,mi,Au,Ou,gi,Nu,Iu,Lu,yl,Su,Wu,nn,kp,lo,Xo,$l,rn,Ru,Dl,Uu,bp,_t,an,Hu,Fl,Qu,Vu,Yo,_i,Ju,Ku,vi,Gu,Xu,Yu,ln,Zu,Ti,ef,tf,wp,co,Zo,Bl,dn,of,Ml,sf,yp,vt,cn,nf,pn,rf,El,af,lf,df,es,ki,cf,pf,bi,hf,uf,ff,hn,mf,wi,gf,_f,$p,po,ts,xl,un,vf,zl,Tf,Dp,He,fn,kf,jl,bf,wf,mn,yf,yi,$f,Df,Ff,gn,Bf,_n,Mf,Ef,xf,Xe,vn,zf,ho,jf,$i,Cf,Pf,Cl,qf,Af,Of,os,Nf,Pl,If,Lf,Tn,Fp,uo,ss,ql,kn,Sf,Al,Wf,Bp,Qe,bn,Rf,wn,Uf,Ol,Hf,Qf,Vf,yn,Jf,Di,Kf,Gf,Xf,$n,Yf,Dn,Zf,em,tm,Le,Fn,om,fo,sm,Fi,nm,rm,Nl,am,im,lm,ns,dm,Il,cm,pm,Bn,hm,Mn,Mp,mo,rs,Ll,En,um,Sl,fm,Ep,Ve,xn,mm,Wl,gm,_m,zn,vm,Bi,Tm,km,bm,jn,wm,Cn,ym,$m,Dm,Be,Pn,Fm,go,Bm,Mi,Mm,Em,Rl,xm,zm,jm,as,Cm,Ul,Pm,qm,qn,Am,An,Om,Hl,Nm,Im,On,xp,_o,is,Ql,Nn,Lm,Vl,Sm,zp,Je,In,Wm,Jl,Rm,Um,Ln,Hm,Ei,Qm,Vm,Jm,Sn,Km,Wn,Gm,Xm,Ym,Ye,Rn,Zm,vo,eg,xi,tg,og,Kl,sg,ng,rg,ls,ag,Gl,ig,lg,Un,jp,To,ds,Xl,Hn,dg,Yl,cg,Cp,Ke,Qn,pg,Zl,hg,ug,Vn,fg,zi,mg,gg,_g,Jn,vg,Kn,Tg,kg,bg,Se,Gn,wg,ko,yg,ji,$g,Dg,ed,Fg,Bg,Mg,cs,Eg,td,xg,zg,Xn,jg,Yn,Pp,bo,ps,od,Zn,Cg,sd,Pg,qp,Ge,er,qg,wo,Ag,nd,Og,Ng,rd,Ig,Lg,Sg,tr,Wg,Ci,Rg,Ug,Hg,or,Qg,sr,Vg,Jg,Kg,We,nr,Gg,yo,Xg,Pi,Yg,Zg,ad,e_,t_,o_,hs,s_,id,n_,r_,rr,a_,ar,Ap,$o,us,ld,ir,i_,dd,l_,Op,Pe,lr,d_,cd,c_,p_,dr,h_,qi,u_,f_,m_,cr,g_,pr,__,v_,T_,fs,k_,Ze,hr,b_,Do,w_,Ai,y_,$_,pd,D_,F_,B_,ms,M_,hd,E_,x_,ur,Np,Fo,gs,ud,fr,z_,fd,j_,Ip,qe,mr,C_,gr,P_,md,q_,A_,O_,_r,N_,Oi,I_,L_,S_,vr,W_,Tr,R_,U_,H_,_s,Q_,et,kr,V_,Bo,J_,Ni,K_,G_,gd,X_,Y_,Z_,vs,ev,_d,tv,ov,br,Lp,Mo,Ts,vd,wr,sv,Td,nv,Sp,Ae,yr,rv,kd,av,iv,$r,lv,Ii,dv,cv,pv,Dr,hv,Fr,uv,fv,mv,ks,gv,tt,Br,_v,Eo,vv,Li,Tv,kv,bd,bv,wv,yv,bs,$v,wd,Dv,Fv,Mr,Wp,xo,ws,yd,Er,Bv,$d,Mv,Rp,Oe,xr,Ev,Dd,xv,zv,zr,jv,Si,Cv,Pv,qv,jr,Av,Cr,Ov,Nv,Iv,ys,Lv,ot,Pr,Sv,zo,Wv,Wi,Rv,Uv,Fd,Hv,Qv,Vv,$s,Jv,Bd,Kv,Gv,qr,Up,jo,Ds,Md,Ar,Xv,Ed,Yv,Hp,Ne,Or,Zv,xd,eT,tT,Nr,oT,Ri,sT,nT,rT,Ir,aT,Lr,iT,lT,dT,Fs,cT,st,Sr,pT,Co,hT,Ui,uT,fT,zd,mT,gT,_T,Bs,vT,jd,TT,kT,Wr,Qp,Po,Ms,Cd,Rr,bT,Pd,wT,Vp,Ie,Ur,yT,qo,$T,qd,DT,FT,Ad,BT,MT,ET,Hr,xT,Hi,zT,jT,CT,Qr,PT,Vr,qT,AT,OT,Es,NT,nt,Jr,IT,Ao,LT,Qi,ST,WT,Od,RT,UT,HT,xs,QT,Nd,VT,JT,Kr,Jp,Oo,zs,Id,Gr,KT,Ld,GT,Kp,Me,Xr,XT,Sd,YT,ZT,Yr,ek,Vi,tk,ok,sk,Zr,nk,ea,rk,ak,ik,Wd,lk,dk,xt,Rd,ta,ck,pk,Ud,oa,hk,uk,Hd,sa,fk,mk,Qd,na,gk,_k,rt,ra,vk,No,Tk,Vd,kk,bk,Jd,wk,yk,$k,js,Dk,Kd,Fk,Bk,aa,Gp,Io,Cs,Gd,ia,Mk,Xd,Ek,Xp,Ee,la,xk,da,zk,Yd,jk,Ck,Pk,ca,qk,Ji,Ak,Ok,Nk,pa,Ik,ha,Lk,Sk,Wk,Zd,Rk,Uk,zt,ec,ua,Hk,Qk,tc,fa,Vk,Jk,oc,ma,Kk,Gk,sc,ga,Xk,Yk,at,_a,Zk,Lo,eb,nc,tb,ob,rc,sb,nb,rb,Ps,ab,ac,ib,lb,va,Yp,So,qs,ic,Ta,db,lc,cb,Zp,xe,ka,pb,dc,hb,ub,ba,fb,Ki,mb,gb,_b,wa,vb,ya,Tb,kb,bb,cc,wb,yb,jt,pc,$a,$b,Db,hc,Da,Fb,Bb,uc,Fa,Mb,Eb,fc,Ba,xb,zb,it,Ma,jb,Wo,Cb,mc,Pb,qb,gc,Ab,Ob,Nb,As,Ib,_c,Lb,Sb,Ea,eh,Ro,Os,vc,xa,Wb,Tc,Rb,th,ze,za,Ub,kc,Hb,Qb,ja,Vb,Gi,Jb,Kb,Gb,Ca,Xb,Pa,Yb,Zb,ew,bc,tw,ow,Ct,wc,qa,sw,nw,yc,Aa,rw,aw,$c,Oa,iw,lw,Dc,Na,dw,cw,lt,Ia,pw,Uo,hw,Fc,uw,fw,Bc,mw,gw,_w,Ns,vw,Mc,Tw,kw,La,oh,Ho,Is,Ec,Sa,bw,xc,ww,sh,je,Wa,yw,zc,$w,Dw,Ra,Fw,Xi,Bw,Mw,Ew,Ua,xw,Ha,zw,jw,Cw,jc,Pw,qw,Pt,Cc,Qa,Aw,Ow,Pc,Va,Nw,Iw,qc,Ja,Lw,Sw,Ac,Ka,Ww,Rw,dt,Ga,Uw,Qo,Hw,Oc,Qw,Vw,Nc,Jw,Kw,Gw,Ls,Xw,Ic,Yw,Zw,Xa,nh,Vo,Ss,Lc,Ya,e1,Sc,t1,rh,Ce,Za,o1,Jo,s1,Wc,n1,r1,Rc,a1,i1,l1,ei,d1,Yi,c1,p1,h1,ti,u1,oi,f1,m1,g1,Uc,_1,v1,qt,Hc,si,T1,k1,Qc,ni,b1,w1,Vc,ri,y1,$1,Jc,ai,D1,F1,ct,ii,B1,Ko,M1,Kc,E1,x1,Gc,z1,j1,C1,Ws,P1,Xc,q1,A1,li,ah;return _=new Te({}),X=new Te({}),tn=new Te({}),on=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DistilBertConfig.sinusoidal_pos_embds",description:`<strong>sinusoidal_pos_embds</strong> (<code>boolean</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use sinusoidal positional embeddings.`,name:"sinusoidal_pos_embds"},{anchor:"transformers.DistilBertConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.DistilBertConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.DistilBertConfig.dim",description:`<strong>dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"dim"},{anchor:"transformers.DistilBertConfig.hidden_dim",description:`<strong>hidden_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
The size of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"hidden_dim"},{anchor:"transformers.DistilBertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.DistilBertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.DistilBertConfig.activation",description:`<strong>activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation"},{anchor:"transformers.DistilBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DistilBertConfig.qa_dropout",description:`<strong>qa_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new ge({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new Te({}),an=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new Te({}),cn=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new Te({}),fn=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),os=new me({props:{$$slots:{default:[v2]},$$scope:{ctx:j}}}),Tn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new Te({}),bn=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ns=new me({props:{$$slots:{default:[T2]},$$scope:{ctx:j}}}),Bn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Mn=new ge({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),En=new Te({}),xn=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),as=new me({props:{$$slots:{default:[k2]},$$scope:{ctx:j}}}),qn=new ge({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),An=new ge({props:{code:`labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),On=new ge({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Nn=new Te({}),In=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new me({props:{$$slots:{default:[b2]},$$scope:{ctx:j}}}),Un=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-cased")
model = DistilBertForMultipleChoice.from_pretrained("distilbert-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([[prompt, choice0], [prompt, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Hn=new Te({}),Qn=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Gn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),cs=new me({props:{$$slots:{default:[w2]},$$scope:{ctx:j}}}),Xn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),Yn=new ge({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Zn=new Te({}),er=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),nr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),hs=new me({props:{$$slots:{default:[y2]},$$scope:{ctx:j}}}),rr=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ar=new ge({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),ir=new Te({}),lr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fs=new me({props:{$$slots:{default:[$2]},$$scope:{ctx:j}}}),hr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),ms=new me({props:{$$slots:{default:[D2]},$$scope:{ctx:j}}}),ur=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),fr=new Te({}),mr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new me({props:{$$slots:{default:[F2]},$$scope:{ctx:j}}}),kr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),vs=new me({props:{$$slots:{default:[B2]},$$scope:{ctx:j}}}),br=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wr=new Te({}),yr=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ks=new me({props:{$$slots:{default:[M2]},$$scope:{ctx:j}}}),Br=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),bs=new me({props:{$$slots:{default:[E2]},$$scope:{ctx:j}}}),Mr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Er=new Te({}),xr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new me({props:{$$slots:{default:[x2]},$$scope:{ctx:j}}}),Pr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new me({props:{$$slots:{default:[z2]},$$scope:{ctx:j}}}),qr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ar=new Te({}),Or=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fs=new me({props:{$$slots:{default:[j2]},$$scope:{ctx:j}}}),Sr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),Bs=new me({props:{$$slots:{default:[C2]},$$scope:{ctx:j}}}),Wr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rr=new Te({}),Ur=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new me({props:{$$slots:{default:[P2]},$$scope:{ctx:j}}}),Jr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
`}}),xs=new me({props:{$$slots:{default:[q2]},$$scope:{ctx:j}}}),Kr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Gr=new Te({}),Xr=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ra=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),js=new me({props:{$$slots:{default:[A2]},$$scope:{ctx:j}}}),aa=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ia=new Te({}),la=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_a=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new me({props:{$$slots:{default:[O2]},$$scope:{ctx:j}}}),va=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ta=new Te({}),ka=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ma=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new me({props:{$$slots:{default:[N2]},$$scope:{ctx:j}}}),Ea=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xa=new Te({}),za=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ia=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new me({props:{$$slots:{default:[I2]},$$scope:{ctx:j}}}),La=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sa=new Te({}),Wa=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ga=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new me({props:{$$slots:{default:[L2]},$$scope:{ctx:j}}}),Xa=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ya=new Te({}),Za=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ii=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16363/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16363/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16363/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/pr_16363/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new me({props:{$$slots:{default:[S2]},$$scope:{ctx:j}}}),li=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("meta"),F=l(),g=s("h1"),v=s("a"),T=s("span"),k(_.$$.fragment),f=l(),B=s("span"),de=a("DistilBERT"),V=l(),E=s("h2"),G=s("a"),L=s("span"),k(X.$$.fragment),ce=l(),S=s("span"),pe=a("Overview"),re=l(),N=s("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=s("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=s("p"),A=a("The abstract from the paper is the following:"),ie=l(),I=s("p"),se=s("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=s("p"),U=a("Tips:"),le=l(),h=s("ul"),M=s("li"),K=a("DistilBERT doesn\u2019t have "),_e=s("code"),ke=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=s("code"),be=a("tokenizer.sep_token"),we=a(" (or "),C=s("code"),H=a("[SEP]"),ye=a(")."),$e=l(),Z=s("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),Fe=a("position_ids"),gu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),_p=l(),Tt=s("p"),_u=a("This model was contributed by "),Ys=s("a"),vu=a("victorsanh"),Tu=a(`. This model jax version was
contributed by `),Zs=s("a"),ku=a("kamalkraj"),bu=a(". The original code can be found "),en=s("a"),wu=a("here"),yu=a("."),vp=l(),ao=s("h2"),Go=s("a"),bl=s("span"),k(tn.$$.fragment),$u=l(),wl=s("span"),Du=a("DistilBertConfig"),Tp=l(),Ue=s("div"),k(on.$$.fragment),Fu=l(),Et=s("p"),Bu=a("This is the configuration class to store the configuration of a "),ui=s("a"),Mu=a("DistilBertModel"),Eu=a(" or a "),fi=s("a"),xu=a("TFDistilBertModel"),zu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=s("a"),ju=a("distilbert-base-uncased"),Cu=a(" architecture."),Pu=l(),io=s("p"),qu=a("Configuration objects inherit from "),mi=s("a"),Au=a("PretrainedConfig"),Ou=a(` and can be used to control the model outputs. Read the
documentation from `),gi=s("a"),Nu=a("PretrainedConfig"),Iu=a(" for more information."),Lu=l(),yl=s("p"),Su=a("Examples:"),Wu=l(),k(nn.$$.fragment),kp=l(),lo=s("h2"),Xo=s("a"),$l=s("span"),k(rn.$$.fragment),Ru=l(),Dl=s("span"),Uu=a("DistilBertTokenizer"),bp=l(),_t=s("div"),k(an.$$.fragment),Hu=l(),Fl=s("p"),Qu=a("Construct a DistilBERT tokenizer."),Vu=l(),Yo=s("p"),_i=s("a"),Ju=a("DistilBertTokenizer"),Ku=a(" is identical to "),vi=s("a"),Gu=a("BertTokenizer"),Xu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Yu=l(),ln=s("p"),Zu=a("Refer to superclass "),Ti=s("a"),ef=a("BertTokenizer"),tf=a(" for usage examples and documentation concerning parameters."),wp=l(),co=s("h2"),Zo=s("a"),Bl=s("span"),k(dn.$$.fragment),of=l(),Ml=s("span"),sf=a("DistilBertTokenizerFast"),yp=l(),vt=s("div"),k(cn.$$.fragment),nf=l(),pn=s("p"),rf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),El=s("em"),af=a("tokenizers"),lf=a(" library)."),df=l(),es=s("p"),ki=s("a"),cf=a("DistilBertTokenizerFast"),pf=a(" is identical to "),bi=s("a"),hf=a("BertTokenizerFast"),uf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ff=l(),hn=s("p"),mf=a("Refer to superclass "),wi=s("a"),gf=a("BertTokenizerFast"),_f=a(" for usage examples and documentation concerning parameters."),$p=l(),po=s("h2"),ts=s("a"),xl=s("span"),k(un.$$.fragment),vf=l(),zl=s("span"),Tf=a("DistilBertModel"),Dp=l(),He=s("div"),k(fn.$$.fragment),kf=l(),jl=s("p"),bf=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),wf=l(),mn=s("p"),yf=a("This model inherits from "),yi=s("a"),$f=a("PreTrainedModel"),Df=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=l(),gn=s("p"),Bf=a("This model is also a PyTorch "),_n=s("a"),Mf=a("torch.nn.Module"),Ef=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xf=l(),Xe=s("div"),k(vn.$$.fragment),zf=l(),ho=s("p"),jf=a("The "),$i=s("a"),Cf=a("DistilBertModel"),Pf=a(" forward method, overrides the "),Cl=s("code"),qf=a("__call__"),Af=a(" special method."),Of=l(),k(os.$$.fragment),Nf=l(),Pl=s("p"),If=a("Example:"),Lf=l(),k(Tn.$$.fragment),Fp=l(),uo=s("h2"),ss=s("a"),ql=s("span"),k(kn.$$.fragment),Sf=l(),Al=s("span"),Wf=a("DistilBertForMaskedLM"),Bp=l(),Qe=s("div"),k(bn.$$.fragment),Rf=l(),wn=s("p"),Uf=a("DistilBert Model with a "),Ol=s("code"),Hf=a("masked language modeling"),Qf=a(" head on top."),Vf=l(),yn=s("p"),Jf=a("This model inherits from "),Di=s("a"),Kf=a("PreTrainedModel"),Gf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=l(),$n=s("p"),Yf=a("This model is also a PyTorch "),Dn=s("a"),Zf=a("torch.nn.Module"),em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=l(),Le=s("div"),k(Fn.$$.fragment),om=l(),fo=s("p"),sm=a("The "),Fi=s("a"),nm=a("DistilBertForMaskedLM"),rm=a(" forward method, overrides the "),Nl=s("code"),am=a("__call__"),im=a(" special method."),lm=l(),k(ns.$$.fragment),dm=l(),Il=s("p"),cm=a("Example:"),pm=l(),k(Bn.$$.fragment),hm=l(),k(Mn.$$.fragment),Mp=l(),mo=s("h2"),rs=s("a"),Ll=s("span"),k(En.$$.fragment),um=l(),Sl=s("span"),fm=a("DistilBertForSequenceClassification"),Ep=l(),Ve=s("div"),k(xn.$$.fragment),mm=l(),Wl=s("p"),gm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_m=l(),zn=s("p"),vm=a("This model inherits from "),Bi=s("a"),Tm=a("PreTrainedModel"),km=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=l(),jn=s("p"),wm=a("This model is also a PyTorch "),Cn=s("a"),ym=a("torch.nn.Module"),$m=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dm=l(),Be=s("div"),k(Pn.$$.fragment),Fm=l(),go=s("p"),Bm=a("The "),Mi=s("a"),Mm=a("DistilBertForSequenceClassification"),Em=a(" forward method, overrides the "),Rl=s("code"),xm=a("__call__"),zm=a(" special method."),jm=l(),k(as.$$.fragment),Cm=l(),Ul=s("p"),Pm=a("Example of single-label classification:"),qm=l(),k(qn.$$.fragment),Am=l(),k(An.$$.fragment),Om=l(),Hl=s("p"),Nm=a("Example of multi-label classification:"),Im=l(),k(On.$$.fragment),xp=l(),_o=s("h2"),is=s("a"),Ql=s("span"),k(Nn.$$.fragment),Lm=l(),Vl=s("span"),Sm=a("DistilBertForMultipleChoice"),zp=l(),Je=s("div"),k(In.$$.fragment),Wm=l(),Jl=s("p"),Rm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Um=l(),Ln=s("p"),Hm=a("This model inherits from "),Ei=s("a"),Qm=a("PreTrainedModel"),Vm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jm=l(),Sn=s("p"),Km=a("This model is also a PyTorch "),Wn=s("a"),Gm=a("torch.nn.Module"),Xm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ym=l(),Ye=s("div"),k(Rn.$$.fragment),Zm=l(),vo=s("p"),eg=a("The "),xi=s("a"),tg=a("DistilBertForMultipleChoice"),og=a(" forward method, overrides the "),Kl=s("code"),sg=a("__call__"),ng=a(" special method."),rg=l(),k(ls.$$.fragment),ag=l(),Gl=s("p"),ig=a("Examples:"),lg=l(),k(Un.$$.fragment),jp=l(),To=s("h2"),ds=s("a"),Xl=s("span"),k(Hn.$$.fragment),dg=l(),Yl=s("span"),cg=a("DistilBertForTokenClassification"),Cp=l(),Ke=s("div"),k(Qn.$$.fragment),pg=l(),Zl=s("p"),hg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ug=l(),Vn=s("p"),fg=a("This model inherits from "),zi=s("a"),mg=a("PreTrainedModel"),gg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_g=l(),Jn=s("p"),vg=a("This model is also a PyTorch "),Kn=s("a"),Tg=a("torch.nn.Module"),kg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bg=l(),Se=s("div"),k(Gn.$$.fragment),wg=l(),ko=s("p"),yg=a("The "),ji=s("a"),$g=a("DistilBertForTokenClassification"),Dg=a(" forward method, overrides the "),ed=s("code"),Fg=a("__call__"),Bg=a(" special method."),Mg=l(),k(cs.$$.fragment),Eg=l(),td=s("p"),xg=a("Example:"),zg=l(),k(Xn.$$.fragment),jg=l(),k(Yn.$$.fragment),Pp=l(),bo=s("h2"),ps=s("a"),od=s("span"),k(Zn.$$.fragment),Cg=l(),sd=s("span"),Pg=a("DistilBertForQuestionAnswering"),qp=l(),Ge=s("div"),k(er.$$.fragment),qg=l(),wo=s("p"),Ag=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),nd=s("code"),Og=a("span start logits"),Ng=a(" and "),rd=s("code"),Ig=a("span end logits"),Lg=a(")."),Sg=l(),tr=s("p"),Wg=a("This model inherits from "),Ci=s("a"),Rg=a("PreTrainedModel"),Ug=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hg=l(),or=s("p"),Qg=a("This model is also a PyTorch "),sr=s("a"),Vg=a("torch.nn.Module"),Jg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kg=l(),We=s("div"),k(nr.$$.fragment),Gg=l(),yo=s("p"),Xg=a("The "),Pi=s("a"),Yg=a("DistilBertForQuestionAnswering"),Zg=a(" forward method, overrides the "),ad=s("code"),e_=a("__call__"),t_=a(" special method."),o_=l(),k(hs.$$.fragment),s_=l(),id=s("p"),n_=a("Example:"),r_=l(),k(rr.$$.fragment),a_=l(),k(ar.$$.fragment),Ap=l(),$o=s("h2"),us=s("a"),ld=s("span"),k(ir.$$.fragment),i_=l(),dd=s("span"),l_=a("TFDistilBertModel"),Op=l(),Pe=s("div"),k(lr.$$.fragment),d_=l(),cd=s("p"),c_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),p_=l(),dr=s("p"),h_=a("This model inherits from "),qi=s("a"),u_=a("TFPreTrainedModel"),f_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m_=l(),cr=s("p"),g_=a("This model is also a "),pr=s("a"),__=a("tf.keras.Model"),v_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),T_=l(),k(fs.$$.fragment),k_=l(),Ze=s("div"),k(hr.$$.fragment),b_=l(),Do=s("p"),w_=a("The "),Ai=s("a"),y_=a("TFDistilBertModel"),$_=a(" forward method, overrides the "),pd=s("code"),D_=a("__call__"),F_=a(" special method."),B_=l(),k(ms.$$.fragment),M_=l(),hd=s("p"),E_=a("Example:"),x_=l(),k(ur.$$.fragment),Np=l(),Fo=s("h2"),gs=s("a"),ud=s("span"),k(fr.$$.fragment),z_=l(),fd=s("span"),j_=a("TFDistilBertForMaskedLM"),Ip=l(),qe=s("div"),k(mr.$$.fragment),C_=l(),gr=s("p"),P_=a("DistilBert Model with a "),md=s("code"),q_=a("masked language modeling"),A_=a(" head on top."),O_=l(),_r=s("p"),N_=a("This model inherits from "),Oi=s("a"),I_=a("TFPreTrainedModel"),L_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_=l(),vr=s("p"),W_=a("This model is also a "),Tr=s("a"),R_=a("tf.keras.Model"),U_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=l(),k(_s.$$.fragment),Q_=l(),et=s("div"),k(kr.$$.fragment),V_=l(),Bo=s("p"),J_=a("The "),Ni=s("a"),K_=a("TFDistilBertForMaskedLM"),G_=a(" forward method, overrides the "),gd=s("code"),X_=a("__call__"),Y_=a(" special method."),Z_=l(),k(vs.$$.fragment),ev=l(),_d=s("p"),tv=a("Example:"),ov=l(),k(br.$$.fragment),Lp=l(),Mo=s("h2"),Ts=s("a"),vd=s("span"),k(wr.$$.fragment),sv=l(),Td=s("span"),nv=a("TFDistilBertForSequenceClassification"),Sp=l(),Ae=s("div"),k(yr.$$.fragment),rv=l(),kd=s("p"),av=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iv=l(),$r=s("p"),lv=a("This model inherits from "),Ii=s("a"),dv=a("TFPreTrainedModel"),cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pv=l(),Dr=s("p"),hv=a("This model is also a "),Fr=s("a"),uv=a("tf.keras.Model"),fv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=l(),k(ks.$$.fragment),gv=l(),tt=s("div"),k(Br.$$.fragment),_v=l(),Eo=s("p"),vv=a("The "),Li=s("a"),Tv=a("TFDistilBertForSequenceClassification"),kv=a(" forward method, overrides the "),bd=s("code"),bv=a("__call__"),wv=a(" special method."),yv=l(),k(bs.$$.fragment),$v=l(),wd=s("p"),Dv=a("Example:"),Fv=l(),k(Mr.$$.fragment),Wp=l(),xo=s("h2"),ws=s("a"),yd=s("span"),k(Er.$$.fragment),Bv=l(),$d=s("span"),Mv=a("TFDistilBertForMultipleChoice"),Rp=l(),Oe=s("div"),k(xr.$$.fragment),Ev=l(),Dd=s("p"),xv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),zv=l(),zr=s("p"),jv=a("This model inherits from "),Si=s("a"),Cv=a("TFPreTrainedModel"),Pv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qv=l(),jr=s("p"),Av=a("This model is also a "),Cr=s("a"),Ov=a("tf.keras.Model"),Nv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iv=l(),k(ys.$$.fragment),Lv=l(),ot=s("div"),k(Pr.$$.fragment),Sv=l(),zo=s("p"),Wv=a("The "),Wi=s("a"),Rv=a("TFDistilBertForMultipleChoice"),Uv=a(" forward method, overrides the "),Fd=s("code"),Hv=a("__call__"),Qv=a(" special method."),Vv=l(),k($s.$$.fragment),Jv=l(),Bd=s("p"),Kv=a("Example:"),Gv=l(),k(qr.$$.fragment),Up=l(),jo=s("h2"),Ds=s("a"),Md=s("span"),k(Ar.$$.fragment),Xv=l(),Ed=s("span"),Yv=a("TFDistilBertForTokenClassification"),Hp=l(),Ne=s("div"),k(Or.$$.fragment),Zv=l(),xd=s("p"),eT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),tT=l(),Nr=s("p"),oT=a("This model inherits from "),Ri=s("a"),sT=a("TFPreTrainedModel"),nT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rT=l(),Ir=s("p"),aT=a("This model is also a "),Lr=s("a"),iT=a("tf.keras.Model"),lT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dT=l(),k(Fs.$$.fragment),cT=l(),st=s("div"),k(Sr.$$.fragment),pT=l(),Co=s("p"),hT=a("The "),Ui=s("a"),uT=a("TFDistilBertForTokenClassification"),fT=a(" forward method, overrides the "),zd=s("code"),mT=a("__call__"),gT=a(" special method."),_T=l(),k(Bs.$$.fragment),vT=l(),jd=s("p"),TT=a("Example:"),kT=l(),k(Wr.$$.fragment),Qp=l(),Po=s("h2"),Ms=s("a"),Cd=s("span"),k(Rr.$$.fragment),bT=l(),Pd=s("span"),wT=a("TFDistilBertForQuestionAnswering"),Vp=l(),Ie=s("div"),k(Ur.$$.fragment),yT=l(),qo=s("p"),$T=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=s("code"),DT=a("span start logits"),FT=a(" and "),Ad=s("code"),BT=a("span end logits"),MT=a(")."),ET=l(),Hr=s("p"),xT=a("This model inherits from "),Hi=s("a"),zT=a("TFPreTrainedModel"),jT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),CT=l(),Qr=s("p"),PT=a("This model is also a "),Vr=s("a"),qT=a("tf.keras.Model"),AT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),OT=l(),k(Es.$$.fragment),NT=l(),nt=s("div"),k(Jr.$$.fragment),IT=l(),Ao=s("p"),LT=a("The "),Qi=s("a"),ST=a("TFDistilBertForQuestionAnswering"),WT=a(" forward method, overrides the "),Od=s("code"),RT=a("__call__"),UT=a(" special method."),HT=l(),k(xs.$$.fragment),QT=l(),Nd=s("p"),VT=a("Example:"),JT=l(),k(Kr.$$.fragment),Jp=l(),Oo=s("h2"),zs=s("a"),Id=s("span"),k(Gr.$$.fragment),KT=l(),Ld=s("span"),GT=a("FlaxDistilBertModel"),Kp=l(),Me=s("div"),k(Xr.$$.fragment),XT=l(),Sd=s("p"),YT=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),ZT=l(),Yr=s("p"),ek=a("This model inherits from "),Vi=s("a"),tk=a("FlaxPreTrainedModel"),ok=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sk=l(),Zr=s("p"),nk=a("This model is also a Flax Linen "),ea=s("a"),rk=a("flax.linen.Module"),ak=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ik=l(),Wd=s("p"),lk=a("Finally, this model supports inherent JAX features such as:"),dk=l(),xt=s("ul"),Rd=s("li"),ta=s("a"),ck=a("Just-In-Time (JIT) compilation"),pk=l(),Ud=s("li"),oa=s("a"),hk=a("Automatic Differentiation"),uk=l(),Hd=s("li"),sa=s("a"),fk=a("Vectorization"),mk=l(),Qd=s("li"),na=s("a"),gk=a("Parallelization"),_k=l(),rt=s("div"),k(ra.$$.fragment),vk=l(),No=s("p"),Tk=a("The "),Vd=s("code"),kk=a("FlaxDistilBertPreTrainedModel"),bk=a("forward method, overrides the "),Jd=s("code"),wk=a("__call__"),yk=a(" special method."),$k=l(),k(js.$$.fragment),Dk=l(),Kd=s("p"),Fk=a("Example:"),Bk=l(),k(aa.$$.fragment),Gp=l(),Io=s("h2"),Cs=s("a"),Gd=s("span"),k(ia.$$.fragment),Mk=l(),Xd=s("span"),Ek=a("FlaxDistilBertForMaskedLM"),Xp=l(),Ee=s("div"),k(la.$$.fragment),xk=l(),da=s("p"),zk=a("DistilBert Model with a "),Yd=s("code"),jk=a("language modeling"),Ck=a(" head on top."),Pk=l(),ca=s("p"),qk=a("This model inherits from "),Ji=s("a"),Ak=a("FlaxPreTrainedModel"),Ok=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nk=l(),pa=s("p"),Ik=a("This model is also a Flax Linen "),ha=s("a"),Lk=a("flax.linen.Module"),Sk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wk=l(),Zd=s("p"),Rk=a("Finally, this model supports inherent JAX features such as:"),Uk=l(),zt=s("ul"),ec=s("li"),ua=s("a"),Hk=a("Just-In-Time (JIT) compilation"),Qk=l(),tc=s("li"),fa=s("a"),Vk=a("Automatic Differentiation"),Jk=l(),oc=s("li"),ma=s("a"),Kk=a("Vectorization"),Gk=l(),sc=s("li"),ga=s("a"),Xk=a("Parallelization"),Yk=l(),at=s("div"),k(_a.$$.fragment),Zk=l(),Lo=s("p"),eb=a("The "),nc=s("code"),tb=a("FlaxDistilBertPreTrainedModel"),ob=a("forward method, overrides the "),rc=s("code"),sb=a("__call__"),nb=a(" special method."),rb=l(),k(Ps.$$.fragment),ab=l(),ac=s("p"),ib=a("Example:"),lb=l(),k(va.$$.fragment),Yp=l(),So=s("h2"),qs=s("a"),ic=s("span"),k(Ta.$$.fragment),db=l(),lc=s("span"),cb=a("FlaxDistilBertForSequenceClassification"),Zp=l(),xe=s("div"),k(ka.$$.fragment),pb=l(),dc=s("p"),hb=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ub=l(),ba=s("p"),fb=a("This model inherits from "),Ki=s("a"),mb=a("FlaxPreTrainedModel"),gb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_b=l(),wa=s("p"),vb=a("This model is also a Flax Linen "),ya=s("a"),Tb=a("flax.linen.Module"),kb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bb=l(),cc=s("p"),wb=a("Finally, this model supports inherent JAX features such as:"),yb=l(),jt=s("ul"),pc=s("li"),$a=s("a"),$b=a("Just-In-Time (JIT) compilation"),Db=l(),hc=s("li"),Da=s("a"),Fb=a("Automatic Differentiation"),Bb=l(),uc=s("li"),Fa=s("a"),Mb=a("Vectorization"),Eb=l(),fc=s("li"),Ba=s("a"),xb=a("Parallelization"),zb=l(),it=s("div"),k(Ma.$$.fragment),jb=l(),Wo=s("p"),Cb=a("The "),mc=s("code"),Pb=a("FlaxDistilBertPreTrainedModel"),qb=a("forward method, overrides the "),gc=s("code"),Ab=a("__call__"),Ob=a(" special method."),Nb=l(),k(As.$$.fragment),Ib=l(),_c=s("p"),Lb=a("Example:"),Sb=l(),k(Ea.$$.fragment),eh=l(),Ro=s("h2"),Os=s("a"),vc=s("span"),k(xa.$$.fragment),Wb=l(),Tc=s("span"),Rb=a("FlaxDistilBertForMultipleChoice"),th=l(),ze=s("div"),k(za.$$.fragment),Ub=l(),kc=s("p"),Hb=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Qb=l(),ja=s("p"),Vb=a("This model inherits from "),Gi=s("a"),Jb=a("FlaxPreTrainedModel"),Kb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gb=l(),Ca=s("p"),Xb=a("This model is also a Flax Linen "),Pa=s("a"),Yb=a("flax.linen.Module"),Zb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ew=l(),bc=s("p"),tw=a("Finally, this model supports inherent JAX features such as:"),ow=l(),Ct=s("ul"),wc=s("li"),qa=s("a"),sw=a("Just-In-Time (JIT) compilation"),nw=l(),yc=s("li"),Aa=s("a"),rw=a("Automatic Differentiation"),aw=l(),$c=s("li"),Oa=s("a"),iw=a("Vectorization"),lw=l(),Dc=s("li"),Na=s("a"),dw=a("Parallelization"),cw=l(),lt=s("div"),k(Ia.$$.fragment),pw=l(),Uo=s("p"),hw=a("The "),Fc=s("code"),uw=a("FlaxDistilBertPreTrainedModel"),fw=a("forward method, overrides the "),Bc=s("code"),mw=a("__call__"),gw=a(" special method."),_w=l(),k(Ns.$$.fragment),vw=l(),Mc=s("p"),Tw=a("Example:"),kw=l(),k(La.$$.fragment),oh=l(),Ho=s("h2"),Is=s("a"),Ec=s("span"),k(Sa.$$.fragment),bw=l(),xc=s("span"),ww=a("FlaxDistilBertForTokenClassification"),sh=l(),je=s("div"),k(Wa.$$.fragment),yw=l(),zc=s("p"),$w=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Dw=l(),Ra=s("p"),Fw=a("This model inherits from "),Xi=s("a"),Bw=a("FlaxPreTrainedModel"),Mw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ew=l(),Ua=s("p"),xw=a("This model is also a Flax Linen "),Ha=s("a"),zw=a("flax.linen.Module"),jw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cw=l(),jc=s("p"),Pw=a("Finally, this model supports inherent JAX features such as:"),qw=l(),Pt=s("ul"),Cc=s("li"),Qa=s("a"),Aw=a("Just-In-Time (JIT) compilation"),Ow=l(),Pc=s("li"),Va=s("a"),Nw=a("Automatic Differentiation"),Iw=l(),qc=s("li"),Ja=s("a"),Lw=a("Vectorization"),Sw=l(),Ac=s("li"),Ka=s("a"),Ww=a("Parallelization"),Rw=l(),dt=s("div"),k(Ga.$$.fragment),Uw=l(),Qo=s("p"),Hw=a("The "),Oc=s("code"),Qw=a("FlaxDistilBertPreTrainedModel"),Vw=a("forward method, overrides the "),Nc=s("code"),Jw=a("__call__"),Kw=a(" special method."),Gw=l(),k(Ls.$$.fragment),Xw=l(),Ic=s("p"),Yw=a("Example:"),Zw=l(),k(Xa.$$.fragment),nh=l(),Vo=s("h2"),Ss=s("a"),Lc=s("span"),k(Ya.$$.fragment),e1=l(),Sc=s("span"),t1=a("FlaxDistilBertForQuestionAnswering"),rh=l(),Ce=s("div"),k(Za.$$.fragment),o1=l(),Jo=s("p"),s1=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Wc=s("code"),n1=a("span start logits"),r1=a(" and "),Rc=s("code"),a1=a("span end logits"),i1=a(")."),l1=l(),ei=s("p"),d1=a("This model inherits from "),Yi=s("a"),c1=a("FlaxPreTrainedModel"),p1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),h1=l(),ti=s("p"),u1=a("This model is also a Flax Linen "),oi=s("a"),f1=a("flax.linen.Module"),m1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),g1=l(),Uc=s("p"),_1=a("Finally, this model supports inherent JAX features such as:"),v1=l(),qt=s("ul"),Hc=s("li"),si=s("a"),T1=a("Just-In-Time (JIT) compilation"),k1=l(),Qc=s("li"),ni=s("a"),b1=a("Automatic Differentiation"),w1=l(),Vc=s("li"),ri=s("a"),y1=a("Vectorization"),$1=l(),Jc=s("li"),ai=s("a"),D1=a("Parallelization"),F1=l(),ct=s("div"),k(ii.$$.fragment),B1=l(),Ko=s("p"),M1=a("The "),Kc=s("code"),E1=a("FlaxDistilBertPreTrainedModel"),x1=a("forward method, overrides the "),Gc=s("code"),z1=a("__call__"),j1=a(" special method."),C1=l(),k(Ws.$$.fragment),P1=l(),Xc=s("p"),q1=a("Example:"),A1=l(),k(li.$$.fragment),this.h()},l(o){const m=g2('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),g=n(o,"H1",{class:!0});var di=r(g);v=n(di,"A",{id:!0,class:!0,href:!0});var Yc=r(v);T=n(Yc,"SPAN",{});var Zc=r(T);b(_.$$.fragment,Zc),Zc.forEach(t),Yc.forEach(t),f=d(di),B=n(di,"SPAN",{});var ep=r(B);de=i(ep,"DistilBERT"),ep.forEach(t),di.forEach(t),V=d(o),E=n(o,"H2",{class:!0});var ci=r(E);G=n(ci,"A",{id:!0,class:!0,href:!0});var tp=r(G);L=n(tp,"SPAN",{});var op=r(L);b(X.$$.fragment,op),op.forEach(t),tp.forEach(t),ce=d(ci),S=n(ci,"SPAN",{});var sp=r(S);pe=i(sp,"Overview"),sp.forEach(t),ci.forEach(t),re=d(o),N=n(o,"P",{});var At=r(N);q=i(At,"The DistilBERT model was proposed in the blog post "),Y=n(At,"A",{href:!0,rel:!0});var np=r(Y);J=i(np,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),np.forEach(t),x=i(At,", and the paper "),z=n(At,"A",{href:!0,rel:!0});var rp=r(z);he=i(rp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),rp.forEach(t),W=i(At,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n(At,"EM",{});var ap=r(oe);ue=i(ap,"bert-base-uncased"),ap.forEach(t),R=i(At,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),At.forEach(t),ae=d(o),ee=n(o,"P",{});var ip=r(ee);A=i(ip,"The abstract from the paper is the following:"),ip.forEach(t),ie=d(o),I=n(o,"P",{});var lp=r(I);se=n(lp,"EM",{});var dp=r(se);fe=i(dp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),dp.forEach(t),lp.forEach(t),P=d(o),te=n(o,"P",{});var cp=r(te);U=i(cp,"Tips:"),cp.forEach(t),le=d(o),h=n(o,"UL",{});var pi=r(h);M=n(pi,"LI",{});var Ot=r(M);K=i(Ot,"DistilBERT doesn\u2019t have "),_e=n(Ot,"CODE",{});var pp=r(_e);ke=i(pp,"token_type_ids"),pp.forEach(t),O=i(Ot,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(Ot,"CODE",{});var hp=r(ve);be=i(hp,"tokenizer.sep_token"),hp.forEach(t),we=i(Ot," (or "),C=n(Ot,"CODE",{});var up=r(C);H=i(up,"[SEP]"),up.forEach(t),ye=i(Ot,")."),Ot.forEach(t),$e=d(pi),Z=n(pi,"LI",{});var hi=r(Z);De=i(hi,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(hi,"CODE",{});var fp=r(ne);Fe=i(fp,"position_ids"),fp.forEach(t),gu=i(hi,` input). This could be added if
necessary though, just let us know if you need this option.`),hi.forEach(t),pi.forEach(t),_p=d(o),Tt=n(o,"P",{});var Nt=r(Tt);_u=i(Nt,"This model was contributed by "),Ys=n(Nt,"A",{href:!0,rel:!0});var O1=r(Ys);vu=i(O1,"victorsanh"),O1.forEach(t),Tu=i(Nt,`. This model jax version was
contributed by `),Zs=n(Nt,"A",{href:!0,rel:!0});var N1=r(Zs);ku=i(N1,"kamalkraj"),N1.forEach(t),bu=i(Nt,". The original code can be found "),en=n(Nt,"A",{href:!0,rel:!0});var I1=r(en);wu=i(I1,"here"),I1.forEach(t),yu=i(Nt,"."),Nt.forEach(t),vp=d(o),ao=n(o,"H2",{class:!0});var ih=r(ao);Go=n(ih,"A",{id:!0,class:!0,href:!0});var L1=r(Go);bl=n(L1,"SPAN",{});var S1=r(bl);b(tn.$$.fragment,S1),S1.forEach(t),L1.forEach(t),$u=d(ih),wl=n(ih,"SPAN",{});var W1=r(wl);Du=i(W1,"DistilBertConfig"),W1.forEach(t),ih.forEach(t),Tp=d(o),Ue=n(o,"DIV",{class:!0});var It=r(Ue);b(on.$$.fragment,It),Fu=d(It),Et=n(It,"P",{});var Rs=r(Et);Bu=i(Rs,"This is the configuration class to store the configuration of a "),ui=n(Rs,"A",{href:!0});var R1=r(ui);Mu=i(R1,"DistilBertModel"),R1.forEach(t),Eu=i(Rs," or a "),fi=n(Rs,"A",{href:!0});var U1=r(fi);xu=i(U1,"TFDistilBertModel"),U1.forEach(t),zu=i(Rs,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=n(Rs,"A",{href:!0,rel:!0});var H1=r(sn);ju=i(H1,"distilbert-base-uncased"),H1.forEach(t),Cu=i(Rs," architecture."),Rs.forEach(t),Pu=d(It),io=n(It,"P",{});var Zi=r(io);qu=i(Zi,"Configuration objects inherit from "),mi=n(Zi,"A",{href:!0});var Q1=r(mi);Au=i(Q1,"PretrainedConfig"),Q1.forEach(t),Ou=i(Zi,` and can be used to control the model outputs. Read the
documentation from `),gi=n(Zi,"A",{href:!0});var V1=r(gi);Nu=i(V1,"PretrainedConfig"),V1.forEach(t),Iu=i(Zi," for more information."),Zi.forEach(t),Lu=d(It),yl=n(It,"P",{});var J1=r(yl);Su=i(J1,"Examples:"),J1.forEach(t),Wu=d(It),b(nn.$$.fragment,It),It.forEach(t),kp=d(o),lo=n(o,"H2",{class:!0});var lh=r(lo);Xo=n(lh,"A",{id:!0,class:!0,href:!0});var K1=r(Xo);$l=n(K1,"SPAN",{});var G1=r($l);b(rn.$$.fragment,G1),G1.forEach(t),K1.forEach(t),Ru=d(lh),Dl=n(lh,"SPAN",{});var X1=r(Dl);Uu=i(X1,"DistilBertTokenizer"),X1.forEach(t),lh.forEach(t),bp=d(o),_t=n(o,"DIV",{class:!0});var Us=r(_t);b(an.$$.fragment,Us),Hu=d(Us),Fl=n(Us,"P",{});var Y1=r(Fl);Qu=i(Y1,"Construct a DistilBERT tokenizer."),Y1.forEach(t),Vu=d(Us),Yo=n(Us,"P",{});var mp=r(Yo);_i=n(mp,"A",{href:!0});var Z1=r(_i);Ju=i(Z1,"DistilBertTokenizer"),Z1.forEach(t),Ku=i(mp," is identical to "),vi=n(mp,"A",{href:!0});var ey=r(vi);Gu=i(ey,"BertTokenizer"),ey.forEach(t),Xu=i(mp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),mp.forEach(t),Yu=d(Us),ln=n(Us,"P",{});var dh=r(ln);Zu=i(dh,"Refer to superclass "),Ti=n(dh,"A",{href:!0});var ty=r(Ti);ef=i(ty,"BertTokenizer"),ty.forEach(t),tf=i(dh," for usage examples and documentation concerning parameters."),dh.forEach(t),Us.forEach(t),wp=d(o),co=n(o,"H2",{class:!0});var ch=r(co);Zo=n(ch,"A",{id:!0,class:!0,href:!0});var oy=r(Zo);Bl=n(oy,"SPAN",{});var sy=r(Bl);b(dn.$$.fragment,sy),sy.forEach(t),oy.forEach(t),of=d(ch),Ml=n(ch,"SPAN",{});var ny=r(Ml);sf=i(ny,"DistilBertTokenizerFast"),ny.forEach(t),ch.forEach(t),yp=d(o),vt=n(o,"DIV",{class:!0});var Hs=r(vt);b(cn.$$.fragment,Hs),nf=d(Hs),pn=n(Hs,"P",{});var ph=r(pn);rf=i(ph,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),El=n(ph,"EM",{});var ry=r(El);af=i(ry,"tokenizers"),ry.forEach(t),lf=i(ph," library)."),ph.forEach(t),df=d(Hs),es=n(Hs,"P",{});var gp=r(es);ki=n(gp,"A",{href:!0});var ay=r(ki);cf=i(ay,"DistilBertTokenizerFast"),ay.forEach(t),pf=i(gp," is identical to "),bi=n(gp,"A",{href:!0});var iy=r(bi);hf=i(iy,"BertTokenizerFast"),iy.forEach(t),uf=i(gp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gp.forEach(t),ff=d(Hs),hn=n(Hs,"P",{});var hh=r(hn);mf=i(hh,"Refer to superclass "),wi=n(hh,"A",{href:!0});var ly=r(wi);gf=i(ly,"BertTokenizerFast"),ly.forEach(t),_f=i(hh," for usage examples and documentation concerning parameters."),hh.forEach(t),Hs.forEach(t),$p=d(o),po=n(o,"H2",{class:!0});var uh=r(po);ts=n(uh,"A",{id:!0,class:!0,href:!0});var dy=r(ts);xl=n(dy,"SPAN",{});var cy=r(xl);b(un.$$.fragment,cy),cy.forEach(t),dy.forEach(t),vf=d(uh),zl=n(uh,"SPAN",{});var py=r(zl);Tf=i(py,"DistilBertModel"),py.forEach(t),uh.forEach(t),Dp=d(o),He=n(o,"DIV",{class:!0});var Lt=r(He);b(fn.$$.fragment,Lt),kf=d(Lt),jl=n(Lt,"P",{});var hy=r(jl);bf=i(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),wf=d(Lt),mn=n(Lt,"P",{});var fh=r(mn);yf=i(fh,"This model inherits from "),yi=n(fh,"A",{href:!0});var uy=r(yi);$f=i(uy,"PreTrainedModel"),uy.forEach(t),Df=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Ff=d(Lt),gn=n(Lt,"P",{});var mh=r(gn);Bf=i(mh,"This model is also a PyTorch "),_n=n(mh,"A",{href:!0,rel:!0});var fy=r(_n);Mf=i(fy,"torch.nn.Module"),fy.forEach(t),Ef=i(mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh.forEach(t),xf=d(Lt),Xe=n(Lt,"DIV",{class:!0});var St=r(Xe);b(vn.$$.fragment,St),zf=d(St),ho=n(St,"P",{});var el=r(ho);jf=i(el,"The "),$i=n(el,"A",{href:!0});var my=r($i);Cf=i(my,"DistilBertModel"),my.forEach(t),Pf=i(el," forward method, overrides the "),Cl=n(el,"CODE",{});var gy=r(Cl);qf=i(gy,"__call__"),gy.forEach(t),Af=i(el," special method."),el.forEach(t),Of=d(St),b(os.$$.fragment,St),Nf=d(St),Pl=n(St,"P",{});var _y=r(Pl);If=i(_y,"Example:"),_y.forEach(t),Lf=d(St),b(Tn.$$.fragment,St),St.forEach(t),Lt.forEach(t),Fp=d(o),uo=n(o,"H2",{class:!0});var gh=r(uo);ss=n(gh,"A",{id:!0,class:!0,href:!0});var vy=r(ss);ql=n(vy,"SPAN",{});var Ty=r(ql);b(kn.$$.fragment,Ty),Ty.forEach(t),vy.forEach(t),Sf=d(gh),Al=n(gh,"SPAN",{});var ky=r(Al);Wf=i(ky,"DistilBertForMaskedLM"),ky.forEach(t),gh.forEach(t),Bp=d(o),Qe=n(o,"DIV",{class:!0});var Wt=r(Qe);b(bn.$$.fragment,Wt),Rf=d(Wt),wn=n(Wt,"P",{});var _h=r(wn);Uf=i(_h,"DistilBert Model with a "),Ol=n(_h,"CODE",{});var by=r(Ol);Hf=i(by,"masked language modeling"),by.forEach(t),Qf=i(_h," head on top."),_h.forEach(t),Vf=d(Wt),yn=n(Wt,"P",{});var vh=r(yn);Jf=i(vh,"This model inherits from "),Di=n(vh,"A",{href:!0});var wy=r(Di);Kf=i(wy,"PreTrainedModel"),wy.forEach(t),Gf=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),Xf=d(Wt),$n=n(Wt,"P",{});var Th=r($n);Yf=i(Th,"This model is also a PyTorch "),Dn=n(Th,"A",{href:!0,rel:!0});var yy=r(Dn);Zf=i(yy,"torch.nn.Module"),yy.forEach(t),em=i(Th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th.forEach(t),tm=d(Wt),Le=n(Wt,"DIV",{class:!0});var kt=r(Le);b(Fn.$$.fragment,kt),om=d(kt),fo=n(kt,"P",{});var tl=r(fo);sm=i(tl,"The "),Fi=n(tl,"A",{href:!0});var $y=r(Fi);nm=i($y,"DistilBertForMaskedLM"),$y.forEach(t),rm=i(tl," forward method, overrides the "),Nl=n(tl,"CODE",{});var Dy=r(Nl);am=i(Dy,"__call__"),Dy.forEach(t),im=i(tl," special method."),tl.forEach(t),lm=d(kt),b(ns.$$.fragment,kt),dm=d(kt),Il=n(kt,"P",{});var Fy=r(Il);cm=i(Fy,"Example:"),Fy.forEach(t),pm=d(kt),b(Bn.$$.fragment,kt),hm=d(kt),b(Mn.$$.fragment,kt),kt.forEach(t),Wt.forEach(t),Mp=d(o),mo=n(o,"H2",{class:!0});var kh=r(mo);rs=n(kh,"A",{id:!0,class:!0,href:!0});var By=r(rs);Ll=n(By,"SPAN",{});var My=r(Ll);b(En.$$.fragment,My),My.forEach(t),By.forEach(t),um=d(kh),Sl=n(kh,"SPAN",{});var Ey=r(Sl);fm=i(Ey,"DistilBertForSequenceClassification"),Ey.forEach(t),kh.forEach(t),Ep=d(o),Ve=n(o,"DIV",{class:!0});var Rt=r(Ve);b(xn.$$.fragment,Rt),mm=d(Rt),Wl=n(Rt,"P",{});var xy=r(Wl);gm=i(xy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),_m=d(Rt),zn=n(Rt,"P",{});var bh=r(zn);vm=i(bh,"This model inherits from "),Bi=n(bh,"A",{href:!0});var zy=r(Bi);Tm=i(zy,"PreTrainedModel"),zy.forEach(t),km=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),bm=d(Rt),jn=n(Rt,"P",{});var wh=r(jn);wm=i(wh,"This model is also a PyTorch "),Cn=n(wh,"A",{href:!0,rel:!0});var jy=r(Cn);ym=i(jy,"torch.nn.Module"),jy.forEach(t),$m=i(wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh.forEach(t),Dm=d(Rt),Be=n(Rt,"DIV",{class:!0});var Re=r(Be);b(Pn.$$.fragment,Re),Fm=d(Re),go=n(Re,"P",{});var ol=r(go);Bm=i(ol,"The "),Mi=n(ol,"A",{href:!0});var Cy=r(Mi);Mm=i(Cy,"DistilBertForSequenceClassification"),Cy.forEach(t),Em=i(ol," forward method, overrides the "),Rl=n(ol,"CODE",{});var Py=r(Rl);xm=i(Py,"__call__"),Py.forEach(t),zm=i(ol," special method."),ol.forEach(t),jm=d(Re),b(as.$$.fragment,Re),Cm=d(Re),Ul=n(Re,"P",{});var qy=r(Ul);Pm=i(qy,"Example of single-label classification:"),qy.forEach(t),qm=d(Re),b(qn.$$.fragment,Re),Am=d(Re),b(An.$$.fragment,Re),Om=d(Re),Hl=n(Re,"P",{});var Ay=r(Hl);Nm=i(Ay,"Example of multi-label classification:"),Ay.forEach(t),Im=d(Re),b(On.$$.fragment,Re),Re.forEach(t),Rt.forEach(t),xp=d(o),_o=n(o,"H2",{class:!0});var yh=r(_o);is=n(yh,"A",{id:!0,class:!0,href:!0});var Oy=r(is);Ql=n(Oy,"SPAN",{});var Ny=r(Ql);b(Nn.$$.fragment,Ny),Ny.forEach(t),Oy.forEach(t),Lm=d(yh),Vl=n(yh,"SPAN",{});var Iy=r(Vl);Sm=i(Iy,"DistilBertForMultipleChoice"),Iy.forEach(t),yh.forEach(t),zp=d(o),Je=n(o,"DIV",{class:!0});var Ut=r(Je);b(In.$$.fragment,Ut),Wm=d(Ut),Jl=n(Ut,"P",{});var Ly=r(Jl);Rm=i(Ly,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ly.forEach(t),Um=d(Ut),Ln=n(Ut,"P",{});var $h=r(Ln);Hm=i($h,"This model inherits from "),Ei=n($h,"A",{href:!0});var Sy=r(Ei);Qm=i(Sy,"PreTrainedModel"),Sy.forEach(t),Vm=i($h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h.forEach(t),Jm=d(Ut),Sn=n(Ut,"P",{});var Dh=r(Sn);Km=i(Dh,"This model is also a PyTorch "),Wn=n(Dh,"A",{href:!0,rel:!0});var Wy=r(Wn);Gm=i(Wy,"torch.nn.Module"),Wy.forEach(t),Xm=i(Dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dh.forEach(t),Ym=d(Ut),Ye=n(Ut,"DIV",{class:!0});var Ht=r(Ye);b(Rn.$$.fragment,Ht),Zm=d(Ht),vo=n(Ht,"P",{});var sl=r(vo);eg=i(sl,"The "),xi=n(sl,"A",{href:!0});var Ry=r(xi);tg=i(Ry,"DistilBertForMultipleChoice"),Ry.forEach(t),og=i(sl," forward method, overrides the "),Kl=n(sl,"CODE",{});var Uy=r(Kl);sg=i(Uy,"__call__"),Uy.forEach(t),ng=i(sl," special method."),sl.forEach(t),rg=d(Ht),b(ls.$$.fragment,Ht),ag=d(Ht),Gl=n(Ht,"P",{});var Hy=r(Gl);ig=i(Hy,"Examples:"),Hy.forEach(t),lg=d(Ht),b(Un.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),jp=d(o),To=n(o,"H2",{class:!0});var Fh=r(To);ds=n(Fh,"A",{id:!0,class:!0,href:!0});var Qy=r(ds);Xl=n(Qy,"SPAN",{});var Vy=r(Xl);b(Hn.$$.fragment,Vy),Vy.forEach(t),Qy.forEach(t),dg=d(Fh),Yl=n(Fh,"SPAN",{});var Jy=r(Yl);cg=i(Jy,"DistilBertForTokenClassification"),Jy.forEach(t),Fh.forEach(t),Cp=d(o),Ke=n(o,"DIV",{class:!0});var Qt=r(Ke);b(Qn.$$.fragment,Qt),pg=d(Qt),Zl=n(Qt,"P",{});var Ky=r(Zl);hg=i(Ky,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ky.forEach(t),ug=d(Qt),Vn=n(Qt,"P",{});var Bh=r(Vn);fg=i(Bh,"This model inherits from "),zi=n(Bh,"A",{href:!0});var Gy=r(zi);mg=i(Gy,"PreTrainedModel"),Gy.forEach(t),gg=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),_g=d(Qt),Jn=n(Qt,"P",{});var Mh=r(Jn);vg=i(Mh,"This model is also a PyTorch "),Kn=n(Mh,"A",{href:!0,rel:!0});var Xy=r(Kn);Tg=i(Xy,"torch.nn.Module"),Xy.forEach(t),kg=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),bg=d(Qt),Se=n(Qt,"DIV",{class:!0});var bt=r(Se);b(Gn.$$.fragment,bt),wg=d(bt),ko=n(bt,"P",{});var nl=r(ko);yg=i(nl,"The "),ji=n(nl,"A",{href:!0});var Yy=r(ji);$g=i(Yy,"DistilBertForTokenClassification"),Yy.forEach(t),Dg=i(nl," forward method, overrides the "),ed=n(nl,"CODE",{});var Zy=r(ed);Fg=i(Zy,"__call__"),Zy.forEach(t),Bg=i(nl," special method."),nl.forEach(t),Mg=d(bt),b(cs.$$.fragment,bt),Eg=d(bt),td=n(bt,"P",{});var e$=r(td);xg=i(e$,"Example:"),e$.forEach(t),zg=d(bt),b(Xn.$$.fragment,bt),jg=d(bt),b(Yn.$$.fragment,bt),bt.forEach(t),Qt.forEach(t),Pp=d(o),bo=n(o,"H2",{class:!0});var Eh=r(bo);ps=n(Eh,"A",{id:!0,class:!0,href:!0});var t$=r(ps);od=n(t$,"SPAN",{});var o$=r(od);b(Zn.$$.fragment,o$),o$.forEach(t),t$.forEach(t),Cg=d(Eh),sd=n(Eh,"SPAN",{});var s$=r(sd);Pg=i(s$,"DistilBertForQuestionAnswering"),s$.forEach(t),Eh.forEach(t),qp=d(o),Ge=n(o,"DIV",{class:!0});var Vt=r(Ge);b(er.$$.fragment,Vt),qg=d(Vt),wo=n(Vt,"P",{});var rl=r(wo);Ag=i(rl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),nd=n(rl,"CODE",{});var n$=r(nd);Og=i(n$,"span start logits"),n$.forEach(t),Ng=i(rl," and "),rd=n(rl,"CODE",{});var r$=r(rd);Ig=i(r$,"span end logits"),r$.forEach(t),Lg=i(rl,")."),rl.forEach(t),Sg=d(Vt),tr=n(Vt,"P",{});var xh=r(tr);Wg=i(xh,"This model inherits from "),Ci=n(xh,"A",{href:!0});var a$=r(Ci);Rg=i(a$,"PreTrainedModel"),a$.forEach(t),Ug=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),Hg=d(Vt),or=n(Vt,"P",{});var zh=r(or);Qg=i(zh,"This model is also a PyTorch "),sr=n(zh,"A",{href:!0,rel:!0});var i$=r(sr);Vg=i(i$,"torch.nn.Module"),i$.forEach(t),Jg=i(zh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zh.forEach(t),Kg=d(Vt),We=n(Vt,"DIV",{class:!0});var wt=r(We);b(nr.$$.fragment,wt),Gg=d(wt),yo=n(wt,"P",{});var al=r(yo);Xg=i(al,"The "),Pi=n(al,"A",{href:!0});var l$=r(Pi);Yg=i(l$,"DistilBertForQuestionAnswering"),l$.forEach(t),Zg=i(al," forward method, overrides the "),ad=n(al,"CODE",{});var d$=r(ad);e_=i(d$,"__call__"),d$.forEach(t),t_=i(al," special method."),al.forEach(t),o_=d(wt),b(hs.$$.fragment,wt),s_=d(wt),id=n(wt,"P",{});var c$=r(id);n_=i(c$,"Example:"),c$.forEach(t),r_=d(wt),b(rr.$$.fragment,wt),a_=d(wt),b(ar.$$.fragment,wt),wt.forEach(t),Vt.forEach(t),Ap=d(o),$o=n(o,"H2",{class:!0});var jh=r($o);us=n(jh,"A",{id:!0,class:!0,href:!0});var p$=r(us);ld=n(p$,"SPAN",{});var h$=r(ld);b(ir.$$.fragment,h$),h$.forEach(t),p$.forEach(t),i_=d(jh),dd=n(jh,"SPAN",{});var u$=r(dd);l_=i(u$,"TFDistilBertModel"),u$.forEach(t),jh.forEach(t),Op=d(o),Pe=n(o,"DIV",{class:!0});var yt=r(Pe);b(lr.$$.fragment,yt),d_=d(yt),cd=n(yt,"P",{});var f$=r(cd);c_=i(f$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),f$.forEach(t),p_=d(yt),dr=n(yt,"P",{});var Ch=r(dr);h_=i(Ch,"This model inherits from "),qi=n(Ch,"A",{href:!0});var m$=r(qi);u_=i(m$,"TFPreTrainedModel"),m$.forEach(t),f_=i(Ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ch.forEach(t),m_=d(yt),cr=n(yt,"P",{});var Ph=r(cr);g_=i(Ph,"This model is also a "),pr=n(Ph,"A",{href:!0,rel:!0});var g$=r(pr);__=i(g$,"tf.keras.Model"),g$.forEach(t),v_=i(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),T_=d(yt),b(fs.$$.fragment,yt),k_=d(yt),Ze=n(yt,"DIV",{class:!0});var Jt=r(Ze);b(hr.$$.fragment,Jt),b_=d(Jt),Do=n(Jt,"P",{});var il=r(Do);w_=i(il,"The "),Ai=n(il,"A",{href:!0});var _$=r(Ai);y_=i(_$,"TFDistilBertModel"),_$.forEach(t),$_=i(il," forward method, overrides the "),pd=n(il,"CODE",{});var v$=r(pd);D_=i(v$,"__call__"),v$.forEach(t),F_=i(il," special method."),il.forEach(t),B_=d(Jt),b(ms.$$.fragment,Jt),M_=d(Jt),hd=n(Jt,"P",{});var T$=r(hd);E_=i(T$,"Example:"),T$.forEach(t),x_=d(Jt),b(ur.$$.fragment,Jt),Jt.forEach(t),yt.forEach(t),Np=d(o),Fo=n(o,"H2",{class:!0});var qh=r(Fo);gs=n(qh,"A",{id:!0,class:!0,href:!0});var k$=r(gs);ud=n(k$,"SPAN",{});var b$=r(ud);b(fr.$$.fragment,b$),b$.forEach(t),k$.forEach(t),z_=d(qh),fd=n(qh,"SPAN",{});var w$=r(fd);j_=i(w$,"TFDistilBertForMaskedLM"),w$.forEach(t),qh.forEach(t),Ip=d(o),qe=n(o,"DIV",{class:!0});var $t=r(qe);b(mr.$$.fragment,$t),C_=d($t),gr=n($t,"P",{});var Ah=r(gr);P_=i(Ah,"DistilBert Model with a "),md=n(Ah,"CODE",{});var y$=r(md);q_=i(y$,"masked language modeling"),y$.forEach(t),A_=i(Ah," head on top."),Ah.forEach(t),O_=d($t),_r=n($t,"P",{});var Oh=r(_r);N_=i(Oh,"This model inherits from "),Oi=n(Oh,"A",{href:!0});var $$=r(Oi);I_=i($$,"TFPreTrainedModel"),$$.forEach(t),L_=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),S_=d($t),vr=n($t,"P",{});var Nh=r(vr);W_=i(Nh,"This model is also a "),Tr=n(Nh,"A",{href:!0,rel:!0});var D$=r(Tr);R_=i(D$,"tf.keras.Model"),D$.forEach(t),U_=i(Nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),H_=d($t),b(_s.$$.fragment,$t),Q_=d($t),et=n($t,"DIV",{class:!0});var Kt=r(et);b(kr.$$.fragment,Kt),V_=d(Kt),Bo=n(Kt,"P",{});var ll=r(Bo);J_=i(ll,"The "),Ni=n(ll,"A",{href:!0});var F$=r(Ni);K_=i(F$,"TFDistilBertForMaskedLM"),F$.forEach(t),G_=i(ll," forward method, overrides the "),gd=n(ll,"CODE",{});var B$=r(gd);X_=i(B$,"__call__"),B$.forEach(t),Y_=i(ll," special method."),ll.forEach(t),Z_=d(Kt),b(vs.$$.fragment,Kt),ev=d(Kt),_d=n(Kt,"P",{});var M$=r(_d);tv=i(M$,"Example:"),M$.forEach(t),ov=d(Kt),b(br.$$.fragment,Kt),Kt.forEach(t),$t.forEach(t),Lp=d(o),Mo=n(o,"H2",{class:!0});var Ih=r(Mo);Ts=n(Ih,"A",{id:!0,class:!0,href:!0});var E$=r(Ts);vd=n(E$,"SPAN",{});var x$=r(vd);b(wr.$$.fragment,x$),x$.forEach(t),E$.forEach(t),sv=d(Ih),Td=n(Ih,"SPAN",{});var z$=r(Td);nv=i(z$,"TFDistilBertForSequenceClassification"),z$.forEach(t),Ih.forEach(t),Sp=d(o),Ae=n(o,"DIV",{class:!0});var Dt=r(Ae);b(yr.$$.fragment,Dt),rv=d(Dt),kd=n(Dt,"P",{});var j$=r(kd);av=i(j$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),j$.forEach(t),iv=d(Dt),$r=n(Dt,"P",{});var Lh=r($r);lv=i(Lh,"This model inherits from "),Ii=n(Lh,"A",{href:!0});var C$=r(Ii);dv=i(C$,"TFPreTrainedModel"),C$.forEach(t),cv=i(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),pv=d(Dt),Dr=n(Dt,"P",{});var Sh=r(Dr);hv=i(Sh,"This model is also a "),Fr=n(Sh,"A",{href:!0,rel:!0});var P$=r(Fr);uv=i(P$,"tf.keras.Model"),P$.forEach(t),fv=i(Sh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh.forEach(t),mv=d(Dt),b(ks.$$.fragment,Dt),gv=d(Dt),tt=n(Dt,"DIV",{class:!0});var Gt=r(tt);b(Br.$$.fragment,Gt),_v=d(Gt),Eo=n(Gt,"P",{});var dl=r(Eo);vv=i(dl,"The "),Li=n(dl,"A",{href:!0});var q$=r(Li);Tv=i(q$,"TFDistilBertForSequenceClassification"),q$.forEach(t),kv=i(dl," forward method, overrides the "),bd=n(dl,"CODE",{});var A$=r(bd);bv=i(A$,"__call__"),A$.forEach(t),wv=i(dl," special method."),dl.forEach(t),yv=d(Gt),b(bs.$$.fragment,Gt),$v=d(Gt),wd=n(Gt,"P",{});var O$=r(wd);Dv=i(O$,"Example:"),O$.forEach(t),Fv=d(Gt),b(Mr.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Wp=d(o),xo=n(o,"H2",{class:!0});var Wh=r(xo);ws=n(Wh,"A",{id:!0,class:!0,href:!0});var N$=r(ws);yd=n(N$,"SPAN",{});var I$=r(yd);b(Er.$$.fragment,I$),I$.forEach(t),N$.forEach(t),Bv=d(Wh),$d=n(Wh,"SPAN",{});var L$=r($d);Mv=i(L$,"TFDistilBertForMultipleChoice"),L$.forEach(t),Wh.forEach(t),Rp=d(o),Oe=n(o,"DIV",{class:!0});var Ft=r(Oe);b(xr.$$.fragment,Ft),Ev=d(Ft),Dd=n(Ft,"P",{});var S$=r(Dd);xv=i(S$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),S$.forEach(t),zv=d(Ft),zr=n(Ft,"P",{});var Rh=r(zr);jv=i(Rh,"This model inherits from "),Si=n(Rh,"A",{href:!0});var W$=r(Si);Cv=i(W$,"TFPreTrainedModel"),W$.forEach(t),Pv=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),qv=d(Ft),jr=n(Ft,"P",{});var Uh=r(jr);Av=i(Uh,"This model is also a "),Cr=n(Uh,"A",{href:!0,rel:!0});var R$=r(Cr);Ov=i(R$,"tf.keras.Model"),R$.forEach(t),Nv=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),Iv=d(Ft),b(ys.$$.fragment,Ft),Lv=d(Ft),ot=n(Ft,"DIV",{class:!0});var Xt=r(ot);b(Pr.$$.fragment,Xt),Sv=d(Xt),zo=n(Xt,"P",{});var cl=r(zo);Wv=i(cl,"The "),Wi=n(cl,"A",{href:!0});var U$=r(Wi);Rv=i(U$,"TFDistilBertForMultipleChoice"),U$.forEach(t),Uv=i(cl," forward method, overrides the "),Fd=n(cl,"CODE",{});var H$=r(Fd);Hv=i(H$,"__call__"),H$.forEach(t),Qv=i(cl," special method."),cl.forEach(t),Vv=d(Xt),b($s.$$.fragment,Xt),Jv=d(Xt),Bd=n(Xt,"P",{});var Q$=r(Bd);Kv=i(Q$,"Example:"),Q$.forEach(t),Gv=d(Xt),b(qr.$$.fragment,Xt),Xt.forEach(t),Ft.forEach(t),Up=d(o),jo=n(o,"H2",{class:!0});var Hh=r(jo);Ds=n(Hh,"A",{id:!0,class:!0,href:!0});var V$=r(Ds);Md=n(V$,"SPAN",{});var J$=r(Md);b(Ar.$$.fragment,J$),J$.forEach(t),V$.forEach(t),Xv=d(Hh),Ed=n(Hh,"SPAN",{});var K$=r(Ed);Yv=i(K$,"TFDistilBertForTokenClassification"),K$.forEach(t),Hh.forEach(t),Hp=d(o),Ne=n(o,"DIV",{class:!0});var Bt=r(Ne);b(Or.$$.fragment,Bt),Zv=d(Bt),xd=n(Bt,"P",{});var G$=r(xd);eT=i(G$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),G$.forEach(t),tT=d(Bt),Nr=n(Bt,"P",{});var Qh=r(Nr);oT=i(Qh,"This model inherits from "),Ri=n(Qh,"A",{href:!0});var X$=r(Ri);sT=i(X$,"TFPreTrainedModel"),X$.forEach(t),nT=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),rT=d(Bt),Ir=n(Bt,"P",{});var Vh=r(Ir);aT=i(Vh,"This model is also a "),Lr=n(Vh,"A",{href:!0,rel:!0});var Y$=r(Lr);iT=i(Y$,"tf.keras.Model"),Y$.forEach(t),lT=i(Vh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vh.forEach(t),dT=d(Bt),b(Fs.$$.fragment,Bt),cT=d(Bt),st=n(Bt,"DIV",{class:!0});var Yt=r(st);b(Sr.$$.fragment,Yt),pT=d(Yt),Co=n(Yt,"P",{});var pl=r(Co);hT=i(pl,"The "),Ui=n(pl,"A",{href:!0});var Z$=r(Ui);uT=i(Z$,"TFDistilBertForTokenClassification"),Z$.forEach(t),fT=i(pl," forward method, overrides the "),zd=n(pl,"CODE",{});var eD=r(zd);mT=i(eD,"__call__"),eD.forEach(t),gT=i(pl," special method."),pl.forEach(t),_T=d(Yt),b(Bs.$$.fragment,Yt),vT=d(Yt),jd=n(Yt,"P",{});var tD=r(jd);TT=i(tD,"Example:"),tD.forEach(t),kT=d(Yt),b(Wr.$$.fragment,Yt),Yt.forEach(t),Bt.forEach(t),Qp=d(o),Po=n(o,"H2",{class:!0});var Jh=r(Po);Ms=n(Jh,"A",{id:!0,class:!0,href:!0});var oD=r(Ms);Cd=n(oD,"SPAN",{});var sD=r(Cd);b(Rr.$$.fragment,sD),sD.forEach(t),oD.forEach(t),bT=d(Jh),Pd=n(Jh,"SPAN",{});var nD=r(Pd);wT=i(nD,"TFDistilBertForQuestionAnswering"),nD.forEach(t),Jh.forEach(t),Vp=d(o),Ie=n(o,"DIV",{class:!0});var Mt=r(Ie);b(Ur.$$.fragment,Mt),yT=d(Mt),qo=n(Mt,"P",{});var hl=r(qo);$T=i(hl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(hl,"CODE",{});var rD=r(qd);DT=i(rD,"span start logits"),rD.forEach(t),FT=i(hl," and "),Ad=n(hl,"CODE",{});var aD=r(Ad);BT=i(aD,"span end logits"),aD.forEach(t),MT=i(hl,")."),hl.forEach(t),ET=d(Mt),Hr=n(Mt,"P",{});var Kh=r(Hr);xT=i(Kh,"This model inherits from "),Hi=n(Kh,"A",{href:!0});var iD=r(Hi);zT=i(iD,"TFPreTrainedModel"),iD.forEach(t),jT=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh.forEach(t),CT=d(Mt),Qr=n(Mt,"P",{});var Gh=r(Qr);PT=i(Gh,"This model is also a "),Vr=n(Gh,"A",{href:!0,rel:!0});var lD=r(Vr);qT=i(lD,"tf.keras.Model"),lD.forEach(t),AT=i(Gh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gh.forEach(t),OT=d(Mt),b(Es.$$.fragment,Mt),NT=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);b(Jr.$$.fragment,Zt),IT=d(Zt),Ao=n(Zt,"P",{});var ul=r(Ao);LT=i(ul,"The "),Qi=n(ul,"A",{href:!0});var dD=r(Qi);ST=i(dD,"TFDistilBertForQuestionAnswering"),dD.forEach(t),WT=i(ul," forward method, overrides the "),Od=n(ul,"CODE",{});var cD=r(Od);RT=i(cD,"__call__"),cD.forEach(t),UT=i(ul," special method."),ul.forEach(t),HT=d(Zt),b(xs.$$.fragment,Zt),QT=d(Zt),Nd=n(Zt,"P",{});var pD=r(Nd);VT=i(pD,"Example:"),pD.forEach(t),JT=d(Zt),b(Kr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Jp=d(o),Oo=n(o,"H2",{class:!0});var Xh=r(Oo);zs=n(Xh,"A",{id:!0,class:!0,href:!0});var hD=r(zs);Id=n(hD,"SPAN",{});var uD=r(Id);b(Gr.$$.fragment,uD),uD.forEach(t),hD.forEach(t),KT=d(Xh),Ld=n(Xh,"SPAN",{});var fD=r(Ld);GT=i(fD,"FlaxDistilBertModel"),fD.forEach(t),Xh.forEach(t),Kp=d(o),Me=n(o,"DIV",{class:!0});var pt=r(Me);b(Xr.$$.fragment,pt),XT=d(pt),Sd=n(pt,"P",{});var mD=r(Sd);YT=i(mD,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),mD.forEach(t),ZT=d(pt),Yr=n(pt,"P",{});var Yh=r(Yr);ek=i(Yh,"This model inherits from "),Vi=n(Yh,"A",{href:!0});var gD=r(Vi);tk=i(gD,"FlaxPreTrainedModel"),gD.forEach(t),ok=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yh.forEach(t),sk=d(pt),Zr=n(pt,"P",{});var Zh=r(Zr);nk=i(Zh,"This model is also a Flax Linen "),ea=n(Zh,"A",{href:!0,rel:!0});var _D=r(ea);rk=i(_D,"flax.linen.Module"),_D.forEach(t),ak=i(Zh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),ik=d(pt),Wd=n(pt,"P",{});var vD=r(Wd);lk=i(vD,"Finally, this model supports inherent JAX features such as:"),vD.forEach(t),dk=d(pt),xt=n(pt,"UL",{});var Qs=r(xt);Rd=n(Qs,"LI",{});var TD=r(Rd);ta=n(TD,"A",{href:!0,rel:!0});var kD=r(ta);ck=i(kD,"Just-In-Time (JIT) compilation"),kD.forEach(t),TD.forEach(t),pk=d(Qs),Ud=n(Qs,"LI",{});var bD=r(Ud);oa=n(bD,"A",{href:!0,rel:!0});var wD=r(oa);hk=i(wD,"Automatic Differentiation"),wD.forEach(t),bD.forEach(t),uk=d(Qs),Hd=n(Qs,"LI",{});var yD=r(Hd);sa=n(yD,"A",{href:!0,rel:!0});var $D=r(sa);fk=i($D,"Vectorization"),$D.forEach(t),yD.forEach(t),mk=d(Qs),Qd=n(Qs,"LI",{});var DD=r(Qd);na=n(DD,"A",{href:!0,rel:!0});var FD=r(na);gk=i(FD,"Parallelization"),FD.forEach(t),DD.forEach(t),Qs.forEach(t),_k=d(pt),rt=n(pt,"DIV",{class:!0});var eo=r(rt);b(ra.$$.fragment,eo),vk=d(eo),No=n(eo,"P",{});var fl=r(No);Tk=i(fl,"The "),Vd=n(fl,"CODE",{});var BD=r(Vd);kk=i(BD,"FlaxDistilBertPreTrainedModel"),BD.forEach(t),bk=i(fl,"forward method, overrides the "),Jd=n(fl,"CODE",{});var MD=r(Jd);wk=i(MD,"__call__"),MD.forEach(t),yk=i(fl," special method."),fl.forEach(t),$k=d(eo),b(js.$$.fragment,eo),Dk=d(eo),Kd=n(eo,"P",{});var ED=r(Kd);Fk=i(ED,"Example:"),ED.forEach(t),Bk=d(eo),b(aa.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Gp=d(o),Io=n(o,"H2",{class:!0});var eu=r(Io);Cs=n(eu,"A",{id:!0,class:!0,href:!0});var xD=r(Cs);Gd=n(xD,"SPAN",{});var zD=r(Gd);b(ia.$$.fragment,zD),zD.forEach(t),xD.forEach(t),Mk=d(eu),Xd=n(eu,"SPAN",{});var jD=r(Xd);Ek=i(jD,"FlaxDistilBertForMaskedLM"),jD.forEach(t),eu.forEach(t),Xp=d(o),Ee=n(o,"DIV",{class:!0});var ht=r(Ee);b(la.$$.fragment,ht),xk=d(ht),da=n(ht,"P",{});var tu=r(da);zk=i(tu,"DistilBert Model with a "),Yd=n(tu,"CODE",{});var CD=r(Yd);jk=i(CD,"language modeling"),CD.forEach(t),Ck=i(tu," head on top."),tu.forEach(t),Pk=d(ht),ca=n(ht,"P",{});var ou=r(ca);qk=i(ou,"This model inherits from "),Ji=n(ou,"A",{href:!0});var PD=r(Ji);Ak=i(PD,"FlaxPreTrainedModel"),PD.forEach(t),Ok=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),Nk=d(ht),pa=n(ht,"P",{});var su=r(pa);Ik=i(su,"This model is also a Flax Linen "),ha=n(su,"A",{href:!0,rel:!0});var qD=r(ha);Lk=i(qD,"flax.linen.Module"),qD.forEach(t),Sk=i(su,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su.forEach(t),Wk=d(ht),Zd=n(ht,"P",{});var AD=r(Zd);Rk=i(AD,"Finally, this model supports inherent JAX features such as:"),AD.forEach(t),Uk=d(ht),zt=n(ht,"UL",{});var Vs=r(zt);ec=n(Vs,"LI",{});var OD=r(ec);ua=n(OD,"A",{href:!0,rel:!0});var ND=r(ua);Hk=i(ND,"Just-In-Time (JIT) compilation"),ND.forEach(t),OD.forEach(t),Qk=d(Vs),tc=n(Vs,"LI",{});var ID=r(tc);fa=n(ID,"A",{href:!0,rel:!0});var LD=r(fa);Vk=i(LD,"Automatic Differentiation"),LD.forEach(t),ID.forEach(t),Jk=d(Vs),oc=n(Vs,"LI",{});var SD=r(oc);ma=n(SD,"A",{href:!0,rel:!0});var WD=r(ma);Kk=i(WD,"Vectorization"),WD.forEach(t),SD.forEach(t),Gk=d(Vs),sc=n(Vs,"LI",{});var RD=r(sc);ga=n(RD,"A",{href:!0,rel:!0});var UD=r(ga);Xk=i(UD,"Parallelization"),UD.forEach(t),RD.forEach(t),Vs.forEach(t),Yk=d(ht),at=n(ht,"DIV",{class:!0});var to=r(at);b(_a.$$.fragment,to),Zk=d(to),Lo=n(to,"P",{});var ml=r(Lo);eb=i(ml,"The "),nc=n(ml,"CODE",{});var HD=r(nc);tb=i(HD,"FlaxDistilBertPreTrainedModel"),HD.forEach(t),ob=i(ml,"forward method, overrides the "),rc=n(ml,"CODE",{});var QD=r(rc);sb=i(QD,"__call__"),QD.forEach(t),nb=i(ml," special method."),ml.forEach(t),rb=d(to),b(Ps.$$.fragment,to),ab=d(to),ac=n(to,"P",{});var VD=r(ac);ib=i(VD,"Example:"),VD.forEach(t),lb=d(to),b(va.$$.fragment,to),to.forEach(t),ht.forEach(t),Yp=d(o),So=n(o,"H2",{class:!0});var nu=r(So);qs=n(nu,"A",{id:!0,class:!0,href:!0});var JD=r(qs);ic=n(JD,"SPAN",{});var KD=r(ic);b(Ta.$$.fragment,KD),KD.forEach(t),JD.forEach(t),db=d(nu),lc=n(nu,"SPAN",{});var GD=r(lc);cb=i(GD,"FlaxDistilBertForSequenceClassification"),GD.forEach(t),nu.forEach(t),Zp=d(o),xe=n(o,"DIV",{class:!0});var ut=r(xe);b(ka.$$.fragment,ut),pb=d(ut),dc=n(ut,"P",{});var XD=r(dc);hb=i(XD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),XD.forEach(t),ub=d(ut),ba=n(ut,"P",{});var ru=r(ba);fb=i(ru,"This model inherits from "),Ki=n(ru,"A",{href:!0});var YD=r(Ki);mb=i(YD,"FlaxPreTrainedModel"),YD.forEach(t),gb=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ru.forEach(t),_b=d(ut),wa=n(ut,"P",{});var au=r(wa);vb=i(au,"This model is also a Flax Linen "),ya=n(au,"A",{href:!0,rel:!0});var ZD=r(ya);Tb=i(ZD,"flax.linen.Module"),ZD.forEach(t),kb=i(au,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),au.forEach(t),bb=d(ut),cc=n(ut,"P",{});var e3=r(cc);wb=i(e3,"Finally, this model supports inherent JAX features such as:"),e3.forEach(t),yb=d(ut),jt=n(ut,"UL",{});var Js=r(jt);pc=n(Js,"LI",{});var t3=r(pc);$a=n(t3,"A",{href:!0,rel:!0});var o3=r($a);$b=i(o3,"Just-In-Time (JIT) compilation"),o3.forEach(t),t3.forEach(t),Db=d(Js),hc=n(Js,"LI",{});var s3=r(hc);Da=n(s3,"A",{href:!0,rel:!0});var n3=r(Da);Fb=i(n3,"Automatic Differentiation"),n3.forEach(t),s3.forEach(t),Bb=d(Js),uc=n(Js,"LI",{});var r3=r(uc);Fa=n(r3,"A",{href:!0,rel:!0});var a3=r(Fa);Mb=i(a3,"Vectorization"),a3.forEach(t),r3.forEach(t),Eb=d(Js),fc=n(Js,"LI",{});var i3=r(fc);Ba=n(i3,"A",{href:!0,rel:!0});var l3=r(Ba);xb=i(l3,"Parallelization"),l3.forEach(t),i3.forEach(t),Js.forEach(t),zb=d(ut),it=n(ut,"DIV",{class:!0});var oo=r(it);b(Ma.$$.fragment,oo),jb=d(oo),Wo=n(oo,"P",{});var gl=r(Wo);Cb=i(gl,"The "),mc=n(gl,"CODE",{});var d3=r(mc);Pb=i(d3,"FlaxDistilBertPreTrainedModel"),d3.forEach(t),qb=i(gl,"forward method, overrides the "),gc=n(gl,"CODE",{});var c3=r(gc);Ab=i(c3,"__call__"),c3.forEach(t),Ob=i(gl," special method."),gl.forEach(t),Nb=d(oo),b(As.$$.fragment,oo),Ib=d(oo),_c=n(oo,"P",{});var p3=r(_c);Lb=i(p3,"Example:"),p3.forEach(t),Sb=d(oo),b(Ea.$$.fragment,oo),oo.forEach(t),ut.forEach(t),eh=d(o),Ro=n(o,"H2",{class:!0});var iu=r(Ro);Os=n(iu,"A",{id:!0,class:!0,href:!0});var h3=r(Os);vc=n(h3,"SPAN",{});var u3=r(vc);b(xa.$$.fragment,u3),u3.forEach(t),h3.forEach(t),Wb=d(iu),Tc=n(iu,"SPAN",{});var f3=r(Tc);Rb=i(f3,"FlaxDistilBertForMultipleChoice"),f3.forEach(t),iu.forEach(t),th=d(o),ze=n(o,"DIV",{class:!0});var ft=r(ze);b(za.$$.fragment,ft),Ub=d(ft),kc=n(ft,"P",{});var m3=r(kc);Hb=i(m3,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),m3.forEach(t),Qb=d(ft),ja=n(ft,"P",{});var lu=r(ja);Vb=i(lu,"This model inherits from "),Gi=n(lu,"A",{href:!0});var g3=r(Gi);Jb=i(g3,"FlaxPreTrainedModel"),g3.forEach(t),Kb=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lu.forEach(t),Gb=d(ft),Ca=n(ft,"P",{});var du=r(Ca);Xb=i(du,"This model is also a Flax Linen "),Pa=n(du,"A",{href:!0,rel:!0});var _3=r(Pa);Yb=i(_3,"flax.linen.Module"),_3.forEach(t),Zb=i(du,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),du.forEach(t),ew=d(ft),bc=n(ft,"P",{});var v3=r(bc);tw=i(v3,"Finally, this model supports inherent JAX features such as:"),v3.forEach(t),ow=d(ft),Ct=n(ft,"UL",{});var Ks=r(Ct);wc=n(Ks,"LI",{});var T3=r(wc);qa=n(T3,"A",{href:!0,rel:!0});var k3=r(qa);sw=i(k3,"Just-In-Time (JIT) compilation"),k3.forEach(t),T3.forEach(t),nw=d(Ks),yc=n(Ks,"LI",{});var b3=r(yc);Aa=n(b3,"A",{href:!0,rel:!0});var w3=r(Aa);rw=i(w3,"Automatic Differentiation"),w3.forEach(t),b3.forEach(t),aw=d(Ks),$c=n(Ks,"LI",{});var y3=r($c);Oa=n(y3,"A",{href:!0,rel:!0});var $3=r(Oa);iw=i($3,"Vectorization"),$3.forEach(t),y3.forEach(t),lw=d(Ks),Dc=n(Ks,"LI",{});var D3=r(Dc);Na=n(D3,"A",{href:!0,rel:!0});var F3=r(Na);dw=i(F3,"Parallelization"),F3.forEach(t),D3.forEach(t),Ks.forEach(t),cw=d(ft),lt=n(ft,"DIV",{class:!0});var so=r(lt);b(Ia.$$.fragment,so),pw=d(so),Uo=n(so,"P",{});var _l=r(Uo);hw=i(_l,"The "),Fc=n(_l,"CODE",{});var B3=r(Fc);uw=i(B3,"FlaxDistilBertPreTrainedModel"),B3.forEach(t),fw=i(_l,"forward method, overrides the "),Bc=n(_l,"CODE",{});var M3=r(Bc);mw=i(M3,"__call__"),M3.forEach(t),gw=i(_l," special method."),_l.forEach(t),_w=d(so),b(Ns.$$.fragment,so),vw=d(so),Mc=n(so,"P",{});var E3=r(Mc);Tw=i(E3,"Example:"),E3.forEach(t),kw=d(so),b(La.$$.fragment,so),so.forEach(t),ft.forEach(t),oh=d(o),Ho=n(o,"H2",{class:!0});var cu=r(Ho);Is=n(cu,"A",{id:!0,class:!0,href:!0});var x3=r(Is);Ec=n(x3,"SPAN",{});var z3=r(Ec);b(Sa.$$.fragment,z3),z3.forEach(t),x3.forEach(t),bw=d(cu),xc=n(cu,"SPAN",{});var j3=r(xc);ww=i(j3,"FlaxDistilBertForTokenClassification"),j3.forEach(t),cu.forEach(t),sh=d(o),je=n(o,"DIV",{class:!0});var mt=r(je);b(Wa.$$.fragment,mt),yw=d(mt),zc=n(mt,"P",{});var C3=r(zc);$w=i(C3,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),C3.forEach(t),Dw=d(mt),Ra=n(mt,"P",{});var pu=r(Ra);Fw=i(pu,"This model inherits from "),Xi=n(pu,"A",{href:!0});var P3=r(Xi);Bw=i(P3,"FlaxPreTrainedModel"),P3.forEach(t),Mw=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pu.forEach(t),Ew=d(mt),Ua=n(mt,"P",{});var hu=r(Ua);xw=i(hu,"This model is also a Flax Linen "),Ha=n(hu,"A",{href:!0,rel:!0});var q3=r(Ha);zw=i(q3,"flax.linen.Module"),q3.forEach(t),jw=i(hu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hu.forEach(t),Cw=d(mt),jc=n(mt,"P",{});var A3=r(jc);Pw=i(A3,"Finally, this model supports inherent JAX features such as:"),A3.forEach(t),qw=d(mt),Pt=n(mt,"UL",{});var Gs=r(Pt);Cc=n(Gs,"LI",{});var O3=r(Cc);Qa=n(O3,"A",{href:!0,rel:!0});var N3=r(Qa);Aw=i(N3,"Just-In-Time (JIT) compilation"),N3.forEach(t),O3.forEach(t),Ow=d(Gs),Pc=n(Gs,"LI",{});var I3=r(Pc);Va=n(I3,"A",{href:!0,rel:!0});var L3=r(Va);Nw=i(L3,"Automatic Differentiation"),L3.forEach(t),I3.forEach(t),Iw=d(Gs),qc=n(Gs,"LI",{});var S3=r(qc);Ja=n(S3,"A",{href:!0,rel:!0});var W3=r(Ja);Lw=i(W3,"Vectorization"),W3.forEach(t),S3.forEach(t),Sw=d(Gs),Ac=n(Gs,"LI",{});var R3=r(Ac);Ka=n(R3,"A",{href:!0,rel:!0});var U3=r(Ka);Ww=i(U3,"Parallelization"),U3.forEach(t),R3.forEach(t),Gs.forEach(t),Rw=d(mt),dt=n(mt,"DIV",{class:!0});var no=r(dt);b(Ga.$$.fragment,no),Uw=d(no),Qo=n(no,"P",{});var vl=r(Qo);Hw=i(vl,"The "),Oc=n(vl,"CODE",{});var H3=r(Oc);Qw=i(H3,"FlaxDistilBertPreTrainedModel"),H3.forEach(t),Vw=i(vl,"forward method, overrides the "),Nc=n(vl,"CODE",{});var Q3=r(Nc);Jw=i(Q3,"__call__"),Q3.forEach(t),Kw=i(vl," special method."),vl.forEach(t),Gw=d(no),b(Ls.$$.fragment,no),Xw=d(no),Ic=n(no,"P",{});var V3=r(Ic);Yw=i(V3,"Example:"),V3.forEach(t),Zw=d(no),b(Xa.$$.fragment,no),no.forEach(t),mt.forEach(t),nh=d(o),Vo=n(o,"H2",{class:!0});var uu=r(Vo);Ss=n(uu,"A",{id:!0,class:!0,href:!0});var J3=r(Ss);Lc=n(J3,"SPAN",{});var K3=r(Lc);b(Ya.$$.fragment,K3),K3.forEach(t),J3.forEach(t),e1=d(uu),Sc=n(uu,"SPAN",{});var G3=r(Sc);t1=i(G3,"FlaxDistilBertForQuestionAnswering"),G3.forEach(t),uu.forEach(t),rh=d(o),Ce=n(o,"DIV",{class:!0});var gt=r(Ce);b(Za.$$.fragment,gt),o1=d(gt),Jo=n(gt,"P",{});var Tl=r(Jo);s1=i(Tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Wc=n(Tl,"CODE",{});var X3=r(Wc);n1=i(X3,"span start logits"),X3.forEach(t),r1=i(Tl," and "),Rc=n(Tl,"CODE",{});var Y3=r(Rc);a1=i(Y3,"span end logits"),Y3.forEach(t),i1=i(Tl,")."),Tl.forEach(t),l1=d(gt),ei=n(gt,"P",{});var fu=r(ei);d1=i(fu,"This model inherits from "),Yi=n(fu,"A",{href:!0});var Z3=r(Yi);c1=i(Z3,"FlaxPreTrainedModel"),Z3.forEach(t),p1=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fu.forEach(t),h1=d(gt),ti=n(gt,"P",{});var mu=r(ti);u1=i(mu,"This model is also a Flax Linen "),oi=n(mu,"A",{href:!0,rel:!0});var e2=r(oi);f1=i(e2,"flax.linen.Module"),e2.forEach(t),m1=i(mu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mu.forEach(t),g1=d(gt),Uc=n(gt,"P",{});var t2=r(Uc);_1=i(t2,"Finally, this model supports inherent JAX features such as:"),t2.forEach(t),v1=d(gt),qt=n(gt,"UL",{});var Xs=r(qt);Hc=n(Xs,"LI",{});var o2=r(Hc);si=n(o2,"A",{href:!0,rel:!0});var s2=r(si);T1=i(s2,"Just-In-Time (JIT) compilation"),s2.forEach(t),o2.forEach(t),k1=d(Xs),Qc=n(Xs,"LI",{});var n2=r(Qc);ni=n(n2,"A",{href:!0,rel:!0});var r2=r(ni);b1=i(r2,"Automatic Differentiation"),r2.forEach(t),n2.forEach(t),w1=d(Xs),Vc=n(Xs,"LI",{});var a2=r(Vc);ri=n(a2,"A",{href:!0,rel:!0});var i2=r(ri);y1=i(i2,"Vectorization"),i2.forEach(t),a2.forEach(t),$1=d(Xs),Jc=n(Xs,"LI",{});var l2=r(Jc);ai=n(l2,"A",{href:!0,rel:!0});var d2=r(ai);D1=i(d2,"Parallelization"),d2.forEach(t),l2.forEach(t),Xs.forEach(t),F1=d(gt),ct=n(gt,"DIV",{class:!0});var ro=r(ct);b(ii.$$.fragment,ro),B1=d(ro),Ko=n(ro,"P",{});var kl=r(Ko);M1=i(kl,"The "),Kc=n(kl,"CODE",{});var c2=r(Kc);E1=i(c2,"FlaxDistilBertPreTrainedModel"),c2.forEach(t),x1=i(kl,"forward method, overrides the "),Gc=n(kl,"CODE",{});var p2=r(Gc);z1=i(p2,"__call__"),p2.forEach(t),j1=i(kl," special method."),kl.forEach(t),C1=d(ro),b(Ws.$$.fragment,ro),P1=d(ro),Xc=n(ro,"P",{});var h2=r(Xc);q1=i(h2,"Example:"),h2.forEach(t),A1=d(ro),b(li.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(R2)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Ys,"href","https://huggingface.co/victorsanh"),c(Ys,"rel","nofollow"),c(Zs,"href","https://huggingface.co/kamalkraj"),c(Zs,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(ui,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertModel"),c(fi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(sn,"href","https://huggingface.co/distilbert-base-uncased"),c(sn,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(gi,"href","/docs/transformers/pr_16363/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(_i,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(vi,"href","/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer"),c(Ti,"href","/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(ki,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(bi,"href","/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizerFast"),c(wi,"href","/docs/transformers/pr_16363/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(ts,"id","transformers.DistilBertModel"),c(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ts,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c(yi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c($i,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertModel"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(ss,"id","transformers.DistilBertForMaskedLM"),c(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ss,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(Di,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(Fi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Le,"class","docstring"),c(Qe,"class","docstring"),c(rs,"id","transformers.DistilBertForSequenceClassification"),c(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rs,"href","#transformers.DistilBertForSequenceClassification"),c(mo,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(Be,"class","docstring"),c(Ve,"class","docstring"),c(is,"id","transformers.DistilBertForMultipleChoice"),c(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(is,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(Ei,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wn,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ye,"class","docstring"),c(Je,"class","docstring"),c(ds,"id","transformers.DistilBertForTokenClassification"),c(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ds,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(zi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Kn,"rel","nofollow"),c(ji,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(Se,"class","docstring"),c(Ke,"class","docstring"),c(ps,"id","transformers.DistilBertForQuestionAnswering"),c(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ps,"href","#transformers.DistilBertForQuestionAnswering"),c(bo,"class","relative group"),c(Ci,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.PreTrainedModel"),c(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(sr,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(We,"class","docstring"),c(Ge,"class","docstring"),c(us,"id","transformers.TFDistilBertModel"),c(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(us,"href","#transformers.TFDistilBertModel"),c($o,"class","relative group"),c(qi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pr,"rel","nofollow"),c(Ai,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ze,"class","docstring"),c(Pe,"class","docstring"),c(gs,"id","transformers.TFDistilBertForMaskedLM"),c(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gs,"href","#transformers.TFDistilBertForMaskedLM"),c(Fo,"class","relative group"),c(Oi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Tr,"rel","nofollow"),c(Ni,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(et,"class","docstring"),c(qe,"class","docstring"),c(Ts,"id","transformers.TFDistilBertForSequenceClassification"),c(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ts,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(Ii,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fr,"rel","nofollow"),c(Li,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(tt,"class","docstring"),c(Ae,"class","docstring"),c(ws,"id","transformers.TFDistilBertForMultipleChoice"),c(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ws,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Si,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cr,"rel","nofollow"),c(Wi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(ot,"class","docstring"),c(Oe,"class","docstring"),c(Ds,"id","transformers.TFDistilBertForTokenClassification"),c(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ds,"href","#transformers.TFDistilBertForTokenClassification"),c(jo,"class","relative group"),c(Ri,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Lr,"rel","nofollow"),c(Ui,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(st,"class","docstring"),c(Ne,"class","docstring"),c(Ms,"id","transformers.TFDistilBertForQuestionAnswering"),c(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ms,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Hi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.TFPreTrainedModel"),c(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Vr,"rel","nofollow"),c(Qi,"href","/docs/transformers/pr_16363/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(nt,"class","docstring"),c(Ie,"class","docstring"),c(zs,"id","transformers.FlaxDistilBertModel"),c(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zs,"href","#transformers.FlaxDistilBertModel"),c(Oo,"class","relative group"),c(Vi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ea,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ea,"rel","nofollow"),c(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(oa,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(na,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Cs,"id","transformers.FlaxDistilBertForMaskedLM"),c(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cs,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Io,"class","relative group"),c(Ji,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ha,"rel","nofollow"),c(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ua,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fa,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ga,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(qs,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qs,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(So,"class","relative group"),c(Ki,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ya,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c($a,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Da,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ba,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Os,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Os,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Pa,"rel","nofollow"),c(qa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Aa,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Oa,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Na,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Is,"id","transformers.FlaxDistilBertForTokenClassification"),c(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Is,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Ho,"class","relative group"),c(Xi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ha,"rel","nofollow"),c(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Qa,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Va,"rel","nofollow"),c(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ja,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ka,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(Ss,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ss,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Vo,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16363/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(oi,"rel","nofollow"),c(si,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(si,"rel","nofollow"),c(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ni,"rel","nofollow"),c(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ri,"rel","nofollow"),c(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ai,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,p),u(o,F,m),u(o,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(o,V,m),u(o,E,m),e(E,G),e(G,L),w(X,L,null),e(E,ce),e(E,S),e(S,pe),u(o,re,m),u(o,N,m),e(N,q),e(N,Y),e(Y,J),e(N,x),e(N,z),e(z,he),e(N,W),e(N,oe),e(oe,ue),e(N,R),u(o,ae,m),u(o,ee,m),e(ee,A),u(o,ie,m),u(o,I,m),e(I,se),e(se,fe),u(o,P,m),u(o,te,m),e(te,U),u(o,le,m),u(o,h,m),e(h,M),e(M,K),e(M,_e),e(_e,ke),e(M,O),e(M,ve),e(ve,be),e(M,we),e(M,C),e(C,H),e(M,ye),e(h,$e),e(h,Z),e(Z,De),e(Z,ne),e(ne,Fe),e(Z,gu),u(o,_p,m),u(o,Tt,m),e(Tt,_u),e(Tt,Ys),e(Ys,vu),e(Tt,Tu),e(Tt,Zs),e(Zs,ku),e(Tt,bu),e(Tt,en),e(en,wu),e(Tt,yu),u(o,vp,m),u(o,ao,m),e(ao,Go),e(Go,bl),w(tn,bl,null),e(ao,$u),e(ao,wl),e(wl,Du),u(o,Tp,m),u(o,Ue,m),w(on,Ue,null),e(Ue,Fu),e(Ue,Et),e(Et,Bu),e(Et,ui),e(ui,Mu),e(Et,Eu),e(Et,fi),e(fi,xu),e(Et,zu),e(Et,sn),e(sn,ju),e(Et,Cu),e(Ue,Pu),e(Ue,io),e(io,qu),e(io,mi),e(mi,Au),e(io,Ou),e(io,gi),e(gi,Nu),e(io,Iu),e(Ue,Lu),e(Ue,yl),e(yl,Su),e(Ue,Wu),w(nn,Ue,null),u(o,kp,m),u(o,lo,m),e(lo,Xo),e(Xo,$l),w(rn,$l,null),e(lo,Ru),e(lo,Dl),e(Dl,Uu),u(o,bp,m),u(o,_t,m),w(an,_t,null),e(_t,Hu),e(_t,Fl),e(Fl,Qu),e(_t,Vu),e(_t,Yo),e(Yo,_i),e(_i,Ju),e(Yo,Ku),e(Yo,vi),e(vi,Gu),e(Yo,Xu),e(_t,Yu),e(_t,ln),e(ln,Zu),e(ln,Ti),e(Ti,ef),e(ln,tf),u(o,wp,m),u(o,co,m),e(co,Zo),e(Zo,Bl),w(dn,Bl,null),e(co,of),e(co,Ml),e(Ml,sf),u(o,yp,m),u(o,vt,m),w(cn,vt,null),e(vt,nf),e(vt,pn),e(pn,rf),e(pn,El),e(El,af),e(pn,lf),e(vt,df),e(vt,es),e(es,ki),e(ki,cf),e(es,pf),e(es,bi),e(bi,hf),e(es,uf),e(vt,ff),e(vt,hn),e(hn,mf),e(hn,wi),e(wi,gf),e(hn,_f),u(o,$p,m),u(o,po,m),e(po,ts),e(ts,xl),w(un,xl,null),e(po,vf),e(po,zl),e(zl,Tf),u(o,Dp,m),u(o,He,m),w(fn,He,null),e(He,kf),e(He,jl),e(jl,bf),e(He,wf),e(He,mn),e(mn,yf),e(mn,yi),e(yi,$f),e(mn,Df),e(He,Ff),e(He,gn),e(gn,Bf),e(gn,_n),e(_n,Mf),e(gn,Ef),e(He,xf),e(He,Xe),w(vn,Xe,null),e(Xe,zf),e(Xe,ho),e(ho,jf),e(ho,$i),e($i,Cf),e(ho,Pf),e(ho,Cl),e(Cl,qf),e(ho,Af),e(Xe,Of),w(os,Xe,null),e(Xe,Nf),e(Xe,Pl),e(Pl,If),e(Xe,Lf),w(Tn,Xe,null),u(o,Fp,m),u(o,uo,m),e(uo,ss),e(ss,ql),w(kn,ql,null),e(uo,Sf),e(uo,Al),e(Al,Wf),u(o,Bp,m),u(o,Qe,m),w(bn,Qe,null),e(Qe,Rf),e(Qe,wn),e(wn,Uf),e(wn,Ol),e(Ol,Hf),e(wn,Qf),e(Qe,Vf),e(Qe,yn),e(yn,Jf),e(yn,Di),e(Di,Kf),e(yn,Gf),e(Qe,Xf),e(Qe,$n),e($n,Yf),e($n,Dn),e(Dn,Zf),e($n,em),e(Qe,tm),e(Qe,Le),w(Fn,Le,null),e(Le,om),e(Le,fo),e(fo,sm),e(fo,Fi),e(Fi,nm),e(fo,rm),e(fo,Nl),e(Nl,am),e(fo,im),e(Le,lm),w(ns,Le,null),e(Le,dm),e(Le,Il),e(Il,cm),e(Le,pm),w(Bn,Le,null),e(Le,hm),w(Mn,Le,null),u(o,Mp,m),u(o,mo,m),e(mo,rs),e(rs,Ll),w(En,Ll,null),e(mo,um),e(mo,Sl),e(Sl,fm),u(o,Ep,m),u(o,Ve,m),w(xn,Ve,null),e(Ve,mm),e(Ve,Wl),e(Wl,gm),e(Ve,_m),e(Ve,zn),e(zn,vm),e(zn,Bi),e(Bi,Tm),e(zn,km),e(Ve,bm),e(Ve,jn),e(jn,wm),e(jn,Cn),e(Cn,ym),e(jn,$m),e(Ve,Dm),e(Ve,Be),w(Pn,Be,null),e(Be,Fm),e(Be,go),e(go,Bm),e(go,Mi),e(Mi,Mm),e(go,Em),e(go,Rl),e(Rl,xm),e(go,zm),e(Be,jm),w(as,Be,null),e(Be,Cm),e(Be,Ul),e(Ul,Pm),e(Be,qm),w(qn,Be,null),e(Be,Am),w(An,Be,null),e(Be,Om),e(Be,Hl),e(Hl,Nm),e(Be,Im),w(On,Be,null),u(o,xp,m),u(o,_o,m),e(_o,is),e(is,Ql),w(Nn,Ql,null),e(_o,Lm),e(_o,Vl),e(Vl,Sm),u(o,zp,m),u(o,Je,m),w(In,Je,null),e(Je,Wm),e(Je,Jl),e(Jl,Rm),e(Je,Um),e(Je,Ln),e(Ln,Hm),e(Ln,Ei),e(Ei,Qm),e(Ln,Vm),e(Je,Jm),e(Je,Sn),e(Sn,Km),e(Sn,Wn),e(Wn,Gm),e(Sn,Xm),e(Je,Ym),e(Je,Ye),w(Rn,Ye,null),e(Ye,Zm),e(Ye,vo),e(vo,eg),e(vo,xi),e(xi,tg),e(vo,og),e(vo,Kl),e(Kl,sg),e(vo,ng),e(Ye,rg),w(ls,Ye,null),e(Ye,ag),e(Ye,Gl),e(Gl,ig),e(Ye,lg),w(Un,Ye,null),u(o,jp,m),u(o,To,m),e(To,ds),e(ds,Xl),w(Hn,Xl,null),e(To,dg),e(To,Yl),e(Yl,cg),u(o,Cp,m),u(o,Ke,m),w(Qn,Ke,null),e(Ke,pg),e(Ke,Zl),e(Zl,hg),e(Ke,ug),e(Ke,Vn),e(Vn,fg),e(Vn,zi),e(zi,mg),e(Vn,gg),e(Ke,_g),e(Ke,Jn),e(Jn,vg),e(Jn,Kn),e(Kn,Tg),e(Jn,kg),e(Ke,bg),e(Ke,Se),w(Gn,Se,null),e(Se,wg),e(Se,ko),e(ko,yg),e(ko,ji),e(ji,$g),e(ko,Dg),e(ko,ed),e(ed,Fg),e(ko,Bg),e(Se,Mg),w(cs,Se,null),e(Se,Eg),e(Se,td),e(td,xg),e(Se,zg),w(Xn,Se,null),e(Se,jg),w(Yn,Se,null),u(o,Pp,m),u(o,bo,m),e(bo,ps),e(ps,od),w(Zn,od,null),e(bo,Cg),e(bo,sd),e(sd,Pg),u(o,qp,m),u(o,Ge,m),w(er,Ge,null),e(Ge,qg),e(Ge,wo),e(wo,Ag),e(wo,nd),e(nd,Og),e(wo,Ng),e(wo,rd),e(rd,Ig),e(wo,Lg),e(Ge,Sg),e(Ge,tr),e(tr,Wg),e(tr,Ci),e(Ci,Rg),e(tr,Ug),e(Ge,Hg),e(Ge,or),e(or,Qg),e(or,sr),e(sr,Vg),e(or,Jg),e(Ge,Kg),e(Ge,We),w(nr,We,null),e(We,Gg),e(We,yo),e(yo,Xg),e(yo,Pi),e(Pi,Yg),e(yo,Zg),e(yo,ad),e(ad,e_),e(yo,t_),e(We,o_),w(hs,We,null),e(We,s_),e(We,id),e(id,n_),e(We,r_),w(rr,We,null),e(We,a_),w(ar,We,null),u(o,Ap,m),u(o,$o,m),e($o,us),e(us,ld),w(ir,ld,null),e($o,i_),e($o,dd),e(dd,l_),u(o,Op,m),u(o,Pe,m),w(lr,Pe,null),e(Pe,d_),e(Pe,cd),e(cd,c_),e(Pe,p_),e(Pe,dr),e(dr,h_),e(dr,qi),e(qi,u_),e(dr,f_),e(Pe,m_),e(Pe,cr),e(cr,g_),e(cr,pr),e(pr,__),e(cr,v_),e(Pe,T_),w(fs,Pe,null),e(Pe,k_),e(Pe,Ze),w(hr,Ze,null),e(Ze,b_),e(Ze,Do),e(Do,w_),e(Do,Ai),e(Ai,y_),e(Do,$_),e(Do,pd),e(pd,D_),e(Do,F_),e(Ze,B_),w(ms,Ze,null),e(Ze,M_),e(Ze,hd),e(hd,E_),e(Ze,x_),w(ur,Ze,null),u(o,Np,m),u(o,Fo,m),e(Fo,gs),e(gs,ud),w(fr,ud,null),e(Fo,z_),e(Fo,fd),e(fd,j_),u(o,Ip,m),u(o,qe,m),w(mr,qe,null),e(qe,C_),e(qe,gr),e(gr,P_),e(gr,md),e(md,q_),e(gr,A_),e(qe,O_),e(qe,_r),e(_r,N_),e(_r,Oi),e(Oi,I_),e(_r,L_),e(qe,S_),e(qe,vr),e(vr,W_),e(vr,Tr),e(Tr,R_),e(vr,U_),e(qe,H_),w(_s,qe,null),e(qe,Q_),e(qe,et),w(kr,et,null),e(et,V_),e(et,Bo),e(Bo,J_),e(Bo,Ni),e(Ni,K_),e(Bo,G_),e(Bo,gd),e(gd,X_),e(Bo,Y_),e(et,Z_),w(vs,et,null),e(et,ev),e(et,_d),e(_d,tv),e(et,ov),w(br,et,null),u(o,Lp,m),u(o,Mo,m),e(Mo,Ts),e(Ts,vd),w(wr,vd,null),e(Mo,sv),e(Mo,Td),e(Td,nv),u(o,Sp,m),u(o,Ae,m),w(yr,Ae,null),e(Ae,rv),e(Ae,kd),e(kd,av),e(Ae,iv),e(Ae,$r),e($r,lv),e($r,Ii),e(Ii,dv),e($r,cv),e(Ae,pv),e(Ae,Dr),e(Dr,hv),e(Dr,Fr),e(Fr,uv),e(Dr,fv),e(Ae,mv),w(ks,Ae,null),e(Ae,gv),e(Ae,tt),w(Br,tt,null),e(tt,_v),e(tt,Eo),e(Eo,vv),e(Eo,Li),e(Li,Tv),e(Eo,kv),e(Eo,bd),e(bd,bv),e(Eo,wv),e(tt,yv),w(bs,tt,null),e(tt,$v),e(tt,wd),e(wd,Dv),e(tt,Fv),w(Mr,tt,null),u(o,Wp,m),u(o,xo,m),e(xo,ws),e(ws,yd),w(Er,yd,null),e(xo,Bv),e(xo,$d),e($d,Mv),u(o,Rp,m),u(o,Oe,m),w(xr,Oe,null),e(Oe,Ev),e(Oe,Dd),e(Dd,xv),e(Oe,zv),e(Oe,zr),e(zr,jv),e(zr,Si),e(Si,Cv),e(zr,Pv),e(Oe,qv),e(Oe,jr),e(jr,Av),e(jr,Cr),e(Cr,Ov),e(jr,Nv),e(Oe,Iv),w(ys,Oe,null),e(Oe,Lv),e(Oe,ot),w(Pr,ot,null),e(ot,Sv),e(ot,zo),e(zo,Wv),e(zo,Wi),e(Wi,Rv),e(zo,Uv),e(zo,Fd),e(Fd,Hv),e(zo,Qv),e(ot,Vv),w($s,ot,null),e(ot,Jv),e(ot,Bd),e(Bd,Kv),e(ot,Gv),w(qr,ot,null),u(o,Up,m),u(o,jo,m),e(jo,Ds),e(Ds,Md),w(Ar,Md,null),e(jo,Xv),e(jo,Ed),e(Ed,Yv),u(o,Hp,m),u(o,Ne,m),w(Or,Ne,null),e(Ne,Zv),e(Ne,xd),e(xd,eT),e(Ne,tT),e(Ne,Nr),e(Nr,oT),e(Nr,Ri),e(Ri,sT),e(Nr,nT),e(Ne,rT),e(Ne,Ir),e(Ir,aT),e(Ir,Lr),e(Lr,iT),e(Ir,lT),e(Ne,dT),w(Fs,Ne,null),e(Ne,cT),e(Ne,st),w(Sr,st,null),e(st,pT),e(st,Co),e(Co,hT),e(Co,Ui),e(Ui,uT),e(Co,fT),e(Co,zd),e(zd,mT),e(Co,gT),e(st,_T),w(Bs,st,null),e(st,vT),e(st,jd),e(jd,TT),e(st,kT),w(Wr,st,null),u(o,Qp,m),u(o,Po,m),e(Po,Ms),e(Ms,Cd),w(Rr,Cd,null),e(Po,bT),e(Po,Pd),e(Pd,wT),u(o,Vp,m),u(o,Ie,m),w(Ur,Ie,null),e(Ie,yT),e(Ie,qo),e(qo,$T),e(qo,qd),e(qd,DT),e(qo,FT),e(qo,Ad),e(Ad,BT),e(qo,MT),e(Ie,ET),e(Ie,Hr),e(Hr,xT),e(Hr,Hi),e(Hi,zT),e(Hr,jT),e(Ie,CT),e(Ie,Qr),e(Qr,PT),e(Qr,Vr),e(Vr,qT),e(Qr,AT),e(Ie,OT),w(Es,Ie,null),e(Ie,NT),e(Ie,nt),w(Jr,nt,null),e(nt,IT),e(nt,Ao),e(Ao,LT),e(Ao,Qi),e(Qi,ST),e(Ao,WT),e(Ao,Od),e(Od,RT),e(Ao,UT),e(nt,HT),w(xs,nt,null),e(nt,QT),e(nt,Nd),e(Nd,VT),e(nt,JT),w(Kr,nt,null),u(o,Jp,m),u(o,Oo,m),e(Oo,zs),e(zs,Id),w(Gr,Id,null),e(Oo,KT),e(Oo,Ld),e(Ld,GT),u(o,Kp,m),u(o,Me,m),w(Xr,Me,null),e(Me,XT),e(Me,Sd),e(Sd,YT),e(Me,ZT),e(Me,Yr),e(Yr,ek),e(Yr,Vi),e(Vi,tk),e(Yr,ok),e(Me,sk),e(Me,Zr),e(Zr,nk),e(Zr,ea),e(ea,rk),e(Zr,ak),e(Me,ik),e(Me,Wd),e(Wd,lk),e(Me,dk),e(Me,xt),e(xt,Rd),e(Rd,ta),e(ta,ck),e(xt,pk),e(xt,Ud),e(Ud,oa),e(oa,hk),e(xt,uk),e(xt,Hd),e(Hd,sa),e(sa,fk),e(xt,mk),e(xt,Qd),e(Qd,na),e(na,gk),e(Me,_k),e(Me,rt),w(ra,rt,null),e(rt,vk),e(rt,No),e(No,Tk),e(No,Vd),e(Vd,kk),e(No,bk),e(No,Jd),e(Jd,wk),e(No,yk),e(rt,$k),w(js,rt,null),e(rt,Dk),e(rt,Kd),e(Kd,Fk),e(rt,Bk),w(aa,rt,null),u(o,Gp,m),u(o,Io,m),e(Io,Cs),e(Cs,Gd),w(ia,Gd,null),e(Io,Mk),e(Io,Xd),e(Xd,Ek),u(o,Xp,m),u(o,Ee,m),w(la,Ee,null),e(Ee,xk),e(Ee,da),e(da,zk),e(da,Yd),e(Yd,jk),e(da,Ck),e(Ee,Pk),e(Ee,ca),e(ca,qk),e(ca,Ji),e(Ji,Ak),e(ca,Ok),e(Ee,Nk),e(Ee,pa),e(pa,Ik),e(pa,ha),e(ha,Lk),e(pa,Sk),e(Ee,Wk),e(Ee,Zd),e(Zd,Rk),e(Ee,Uk),e(Ee,zt),e(zt,ec),e(ec,ua),e(ua,Hk),e(zt,Qk),e(zt,tc),e(tc,fa),e(fa,Vk),e(zt,Jk),e(zt,oc),e(oc,ma),e(ma,Kk),e(zt,Gk),e(zt,sc),e(sc,ga),e(ga,Xk),e(Ee,Yk),e(Ee,at),w(_a,at,null),e(at,Zk),e(at,Lo),e(Lo,eb),e(Lo,nc),e(nc,tb),e(Lo,ob),e(Lo,rc),e(rc,sb),e(Lo,nb),e(at,rb),w(Ps,at,null),e(at,ab),e(at,ac),e(ac,ib),e(at,lb),w(va,at,null),u(o,Yp,m),u(o,So,m),e(So,qs),e(qs,ic),w(Ta,ic,null),e(So,db),e(So,lc),e(lc,cb),u(o,Zp,m),u(o,xe,m),w(ka,xe,null),e(xe,pb),e(xe,dc),e(dc,hb),e(xe,ub),e(xe,ba),e(ba,fb),e(ba,Ki),e(Ki,mb),e(ba,gb),e(xe,_b),e(xe,wa),e(wa,vb),e(wa,ya),e(ya,Tb),e(wa,kb),e(xe,bb),e(xe,cc),e(cc,wb),e(xe,yb),e(xe,jt),e(jt,pc),e(pc,$a),e($a,$b),e(jt,Db),e(jt,hc),e(hc,Da),e(Da,Fb),e(jt,Bb),e(jt,uc),e(uc,Fa),e(Fa,Mb),e(jt,Eb),e(jt,fc),e(fc,Ba),e(Ba,xb),e(xe,zb),e(xe,it),w(Ma,it,null),e(it,jb),e(it,Wo),e(Wo,Cb),e(Wo,mc),e(mc,Pb),e(Wo,qb),e(Wo,gc),e(gc,Ab),e(Wo,Ob),e(it,Nb),w(As,it,null),e(it,Ib),e(it,_c),e(_c,Lb),e(it,Sb),w(Ea,it,null),u(o,eh,m),u(o,Ro,m),e(Ro,Os),e(Os,vc),w(xa,vc,null),e(Ro,Wb),e(Ro,Tc),e(Tc,Rb),u(o,th,m),u(o,ze,m),w(za,ze,null),e(ze,Ub),e(ze,kc),e(kc,Hb),e(ze,Qb),e(ze,ja),e(ja,Vb),e(ja,Gi),e(Gi,Jb),e(ja,Kb),e(ze,Gb),e(ze,Ca),e(Ca,Xb),e(Ca,Pa),e(Pa,Yb),e(Ca,Zb),e(ze,ew),e(ze,bc),e(bc,tw),e(ze,ow),e(ze,Ct),e(Ct,wc),e(wc,qa),e(qa,sw),e(Ct,nw),e(Ct,yc),e(yc,Aa),e(Aa,rw),e(Ct,aw),e(Ct,$c),e($c,Oa),e(Oa,iw),e(Ct,lw),e(Ct,Dc),e(Dc,Na),e(Na,dw),e(ze,cw),e(ze,lt),w(Ia,lt,null),e(lt,pw),e(lt,Uo),e(Uo,hw),e(Uo,Fc),e(Fc,uw),e(Uo,fw),e(Uo,Bc),e(Bc,mw),e(Uo,gw),e(lt,_w),w(Ns,lt,null),e(lt,vw),e(lt,Mc),e(Mc,Tw),e(lt,kw),w(La,lt,null),u(o,oh,m),u(o,Ho,m),e(Ho,Is),e(Is,Ec),w(Sa,Ec,null),e(Ho,bw),e(Ho,xc),e(xc,ww),u(o,sh,m),u(o,je,m),w(Wa,je,null),e(je,yw),e(je,zc),e(zc,$w),e(je,Dw),e(je,Ra),e(Ra,Fw),e(Ra,Xi),e(Xi,Bw),e(Ra,Mw),e(je,Ew),e(je,Ua),e(Ua,xw),e(Ua,Ha),e(Ha,zw),e(Ua,jw),e(je,Cw),e(je,jc),e(jc,Pw),e(je,qw),e(je,Pt),e(Pt,Cc),e(Cc,Qa),e(Qa,Aw),e(Pt,Ow),e(Pt,Pc),e(Pc,Va),e(Va,Nw),e(Pt,Iw),e(Pt,qc),e(qc,Ja),e(Ja,Lw),e(Pt,Sw),e(Pt,Ac),e(Ac,Ka),e(Ka,Ww),e(je,Rw),e(je,dt),w(Ga,dt,null),e(dt,Uw),e(dt,Qo),e(Qo,Hw),e(Qo,Oc),e(Oc,Qw),e(Qo,Vw),e(Qo,Nc),e(Nc,Jw),e(Qo,Kw),e(dt,Gw),w(Ls,dt,null),e(dt,Xw),e(dt,Ic),e(Ic,Yw),e(dt,Zw),w(Xa,dt,null),u(o,nh,m),u(o,Vo,m),e(Vo,Ss),e(Ss,Lc),w(Ya,Lc,null),e(Vo,e1),e(Vo,Sc),e(Sc,t1),u(o,rh,m),u(o,Ce,m),w(Za,Ce,null),e(Ce,o1),e(Ce,Jo),e(Jo,s1),e(Jo,Wc),e(Wc,n1),e(Jo,r1),e(Jo,Rc),e(Rc,a1),e(Jo,i1),e(Ce,l1),e(Ce,ei),e(ei,d1),e(ei,Yi),e(Yi,c1),e(ei,p1),e(Ce,h1),e(Ce,ti),e(ti,u1),e(ti,oi),e(oi,f1),e(ti,m1),e(Ce,g1),e(Ce,Uc),e(Uc,_1),e(Ce,v1),e(Ce,qt),e(qt,Hc),e(Hc,si),e(si,T1),e(qt,k1),e(qt,Qc),e(Qc,ni),e(ni,b1),e(qt,w1),e(qt,Vc),e(Vc,ri),e(ri,y1),e(qt,$1),e(qt,Jc),e(Jc,ai),e(ai,D1),e(Ce,F1),e(Ce,ct),w(ii,ct,null),e(ct,B1),e(ct,Ko),e(Ko,M1),e(Ko,Kc),e(Kc,E1),e(Ko,x1),e(Ko,Gc),e(Gc,z1),e(Ko,j1),e(ct,C1),w(Ws,ct,null),e(ct,P1),e(ct,Xc),e(Xc,q1),e(ct,A1),w(li,ct,null),ah=!0},p(o,[m]){const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),os.$set(di);const Yc={};m&2&&(Yc.$$scope={dirty:m,ctx:o}),ns.$set(Yc);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:o}),as.$set(Zc);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:o}),ls.$set(ep);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),cs.$set(ci);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:o}),hs.$set(tp);const op={};m&2&&(op.$$scope={dirty:m,ctx:o}),fs.$set(op);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:o}),ms.$set(sp);const At={};m&2&&(At.$$scope={dirty:m,ctx:o}),_s.$set(At);const np={};m&2&&(np.$$scope={dirty:m,ctx:o}),vs.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:o}),ks.$set(rp);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:o}),bs.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:o}),ys.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:o}),$s.$set(lp);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:o}),Fs.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:o}),Bs.$set(cp);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),Es.$set(pi);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:o}),xs.$set(Ot);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:o}),js.$set(pp);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:o}),Ps.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:o}),As.$set(up);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),Ns.$set(hi);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:o}),Ls.$set(fp);const Nt={};m&2&&(Nt.$$scope={dirty:m,ctx:o}),Ws.$set(Nt)},i(o){ah||(y(_.$$.fragment,o),y(X.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(vn.$$.fragment,o),y(os.$$.fragment,o),y(Tn.$$.fragment,o),y(kn.$$.fragment,o),y(bn.$$.fragment,o),y(Fn.$$.fragment,o),y(ns.$$.fragment,o),y(Bn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(as.$$.fragment,o),y(qn.$$.fragment,o),y(An.$$.fragment,o),y(On.$$.fragment,o),y(Nn.$$.fragment,o),y(In.$$.fragment,o),y(Rn.$$.fragment,o),y(ls.$$.fragment,o),y(Un.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(cs.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(er.$$.fragment,o),y(nr.$$.fragment,o),y(hs.$$.fragment,o),y(rr.$$.fragment,o),y(ar.$$.fragment,o),y(ir.$$.fragment,o),y(lr.$$.fragment,o),y(fs.$$.fragment,o),y(hr.$$.fragment,o),y(ms.$$.fragment,o),y(ur.$$.fragment,o),y(fr.$$.fragment,o),y(mr.$$.fragment,o),y(_s.$$.fragment,o),y(kr.$$.fragment,o),y(vs.$$.fragment,o),y(br.$$.fragment,o),y(wr.$$.fragment,o),y(yr.$$.fragment,o),y(ks.$$.fragment,o),y(Br.$$.fragment,o),y(bs.$$.fragment,o),y(Mr.$$.fragment,o),y(Er.$$.fragment,o),y(xr.$$.fragment,o),y(ys.$$.fragment,o),y(Pr.$$.fragment,o),y($s.$$.fragment,o),y(qr.$$.fragment,o),y(Ar.$$.fragment,o),y(Or.$$.fragment,o),y(Fs.$$.fragment,o),y(Sr.$$.fragment,o),y(Bs.$$.fragment,o),y(Wr.$$.fragment,o),y(Rr.$$.fragment,o),y(Ur.$$.fragment,o),y(Es.$$.fragment,o),y(Jr.$$.fragment,o),y(xs.$$.fragment,o),y(Kr.$$.fragment,o),y(Gr.$$.fragment,o),y(Xr.$$.fragment,o),y(ra.$$.fragment,o),y(js.$$.fragment,o),y(aa.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(_a.$$.fragment,o),y(Ps.$$.fragment,o),y(va.$$.fragment,o),y(Ta.$$.fragment,o),y(ka.$$.fragment,o),y(Ma.$$.fragment,o),y(As.$$.fragment,o),y(Ea.$$.fragment,o),y(xa.$$.fragment,o),y(za.$$.fragment,o),y(Ia.$$.fragment,o),y(Ns.$$.fragment,o),y(La.$$.fragment,o),y(Sa.$$.fragment,o),y(Wa.$$.fragment,o),y(Ga.$$.fragment,o),y(Ls.$$.fragment,o),y(Xa.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ii.$$.fragment,o),y(Ws.$$.fragment,o),y(li.$$.fragment,o),ah=!0)},o(o){$(_.$$.fragment,o),$(X.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(vn.$$.fragment,o),$(os.$$.fragment,o),$(Tn.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(Fn.$$.fragment,o),$(ns.$$.fragment,o),$(Bn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(xn.$$.fragment,o),$(Pn.$$.fragment,o),$(as.$$.fragment,o),$(qn.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Rn.$$.fragment,o),$(ls.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Gn.$$.fragment,o),$(cs.$$.fragment,o),$(Xn.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(er.$$.fragment,o),$(nr.$$.fragment,o),$(hs.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(fs.$$.fragment,o),$(hr.$$.fragment,o),$(ms.$$.fragment,o),$(ur.$$.fragment,o),$(fr.$$.fragment,o),$(mr.$$.fragment,o),$(_s.$$.fragment,o),$(kr.$$.fragment,o),$(vs.$$.fragment,o),$(br.$$.fragment,o),$(wr.$$.fragment,o),$(yr.$$.fragment,o),$(ks.$$.fragment,o),$(Br.$$.fragment,o),$(bs.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(xr.$$.fragment,o),$(ys.$$.fragment,o),$(Pr.$$.fragment,o),$($s.$$.fragment,o),$(qr.$$.fragment,o),$(Ar.$$.fragment,o),$(Or.$$.fragment,o),$(Fs.$$.fragment,o),$(Sr.$$.fragment,o),$(Bs.$$.fragment,o),$(Wr.$$.fragment,o),$(Rr.$$.fragment,o),$(Ur.$$.fragment,o),$(Es.$$.fragment,o),$(Jr.$$.fragment,o),$(xs.$$.fragment,o),$(Kr.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(ra.$$.fragment,o),$(js.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(_a.$$.fragment,o),$(Ps.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),$(ka.$$.fragment,o),$(Ma.$$.fragment,o),$(As.$$.fragment,o),$(Ea.$$.fragment,o),$(xa.$$.fragment,o),$(za.$$.fragment,o),$(Ia.$$.fragment,o),$(Ns.$$.fragment,o),$(La.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Ga.$$.fragment,o),$(Ls.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ii.$$.fragment,o),$(Ws.$$.fragment,o),$(li.$$.fragment,o),ah=!1},d(o){t(p),o&&t(F),o&&t(g),D(_),o&&t(V),o&&t(E),D(X),o&&t(re),o&&t(N),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(I),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(_p),o&&t(Tt),o&&t(vp),o&&t(ao),D(tn),o&&t(Tp),o&&t(Ue),D(on),D(nn),o&&t(kp),o&&t(lo),D(rn),o&&t(bp),o&&t(_t),D(an),o&&t(wp),o&&t(co),D(dn),o&&t(yp),o&&t(vt),D(cn),o&&t($p),o&&t(po),D(un),o&&t(Dp),o&&t(He),D(fn),D(vn),D(os),D(Tn),o&&t(Fp),o&&t(uo),D(kn),o&&t(Bp),o&&t(Qe),D(bn),D(Fn),D(ns),D(Bn),D(Mn),o&&t(Mp),o&&t(mo),D(En),o&&t(Ep),o&&t(Ve),D(xn),D(Pn),D(as),D(qn),D(An),D(On),o&&t(xp),o&&t(_o),D(Nn),o&&t(zp),o&&t(Je),D(In),D(Rn),D(ls),D(Un),o&&t(jp),o&&t(To),D(Hn),o&&t(Cp),o&&t(Ke),D(Qn),D(Gn),D(cs),D(Xn),D(Yn),o&&t(Pp),o&&t(bo),D(Zn),o&&t(qp),o&&t(Ge),D(er),D(nr),D(hs),D(rr),D(ar),o&&t(Ap),o&&t($o),D(ir),o&&t(Op),o&&t(Pe),D(lr),D(fs),D(hr),D(ms),D(ur),o&&t(Np),o&&t(Fo),D(fr),o&&t(Ip),o&&t(qe),D(mr),D(_s),D(kr),D(vs),D(br),o&&t(Lp),o&&t(Mo),D(wr),o&&t(Sp),o&&t(Ae),D(yr),D(ks),D(Br),D(bs),D(Mr),o&&t(Wp),o&&t(xo),D(Er),o&&t(Rp),o&&t(Oe),D(xr),D(ys),D(Pr),D($s),D(qr),o&&t(Up),o&&t(jo),D(Ar),o&&t(Hp),o&&t(Ne),D(Or),D(Fs),D(Sr),D(Bs),D(Wr),o&&t(Qp),o&&t(Po),D(Rr),o&&t(Vp),o&&t(Ie),D(Ur),D(Es),D(Jr),D(xs),D(Kr),o&&t(Jp),o&&t(Oo),D(Gr),o&&t(Kp),o&&t(Me),D(Xr),D(ra),D(js),D(aa),o&&t(Gp),o&&t(Io),D(ia),o&&t(Xp),o&&t(Ee),D(la),D(_a),D(Ps),D(va),o&&t(Yp),o&&t(So),D(Ta),o&&t(Zp),o&&t(xe),D(ka),D(Ma),D(As),D(Ea),o&&t(eh),o&&t(Ro),D(xa),o&&t(th),o&&t(ze),D(za),D(Ia),D(Ns),D(La),o&&t(oh),o&&t(Ho),D(Sa),o&&t(sh),o&&t(je),D(Wa),D(Ga),D(Ls),D(Xa),o&&t(nh),o&&t(Vo),D(Ya),o&&t(rh),o&&t(Ce),D(Za),D(ii),D(Ws),D(li)}}}const R2={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function U2(j){return _2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class G2 extends u2{constructor(p){super();f2(this,p,U2,W2,m2,{})}}export{G2 as default,R2 as metadata};
