import{S as u2,i as f2,s as m2,e as s,k as l,w as b,t as a,M as g2,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as w,q as y,o as $,B as D,v as _2}from"../../chunks/vendor-6b77c823.js";import{T as me}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as ge}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function v2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function T2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function b2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function k2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
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
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function D2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function F2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function B2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function M2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function E2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function x2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function z2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function j2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function C2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function P2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),I=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var be=r(B);de=i(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),I=n(O,"CODE",{});var ve=r(I);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var ke=r(S);pe=i(ke,"model(inputs)"),ke.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var we=r(q);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),we.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var ye=r(W);oe=i(ye,"input_ids"),ye.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var De=r(L);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Fe=r(U);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,I),e(I,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,L),e(L,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function q2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
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
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function L2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function I2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function S2(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function W2(j){let p,F,g,v,T,_,f,B,de,V,E,G,I,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,L,se,fe,P,te,U,le,h,M,K,_e,be,O,ve,ke,we,C,H,ye,$e,Z,De,ne,Fe,gu,_p,Tt,_u,Ys,vu,Tu,Zs,bu,ku,en,wu,yu,vp,ao,Go,kl,tn,$u,wl,Du,Tp,Ue,on,Fu,xt,Bu,ui,Mu,Eu,fi,xu,zu,sn,ju,Cu,Pu,io,qu,mi,Au,Ou,gi,Nu,Lu,Iu,yl,Su,Wu,nn,bp,lo,Xo,$l,rn,Ru,Dl,Uu,kp,_t,an,Hu,Fl,Qu,Vu,Yo,_i,Ju,Ku,vi,Gu,Xu,Yu,ln,Zu,Ti,ef,tf,wp,co,Zo,Bl,dn,of,Ml,sf,yp,vt,cn,nf,pn,rf,El,af,lf,df,es,bi,cf,pf,ki,hf,uf,ff,hn,mf,wi,gf,_f,$p,po,ts,xl,un,vf,zl,Tf,Dp,He,fn,bf,jl,kf,wf,mn,yf,yi,$f,Df,Ff,gn,Bf,_n,Mf,Ef,xf,Xe,vn,zf,ho,jf,$i,Cf,Pf,Cl,qf,Af,Of,os,Nf,Pl,Lf,If,Tn,Fp,uo,ss,ql,bn,Sf,Al,Wf,Bp,Qe,kn,Rf,wn,Uf,Ol,Hf,Qf,Vf,yn,Jf,Di,Kf,Gf,Xf,$n,Yf,Dn,Zf,em,tm,Ye,Fn,om,fo,sm,Fi,nm,rm,Nl,am,im,lm,ns,dm,Ll,cm,pm,Bn,Mp,mo,rs,Il,Mn,hm,Sl,um,Ep,Ve,En,fm,Wl,mm,gm,xn,_m,Bi,vm,Tm,bm,zn,km,jn,wm,ym,$m,Ce,Cn,Dm,go,Fm,Mi,Bm,Mm,Rl,Em,xm,zm,as,jm,Ul,Cm,Pm,Pn,qm,Hl,Am,Om,qn,xp,_o,is,Ql,An,Nm,Vl,Lm,zp,Je,On,Im,Jl,Sm,Wm,Nn,Rm,Ei,Um,Hm,Qm,Ln,Vm,In,Jm,Km,Gm,Ze,Sn,Xm,vo,Ym,xi,Zm,eg,Kl,tg,og,sg,ls,ng,Gl,rg,ag,Wn,jp,To,ds,Xl,Rn,ig,Yl,lg,Cp,Ke,Un,dg,Zl,cg,pg,Hn,hg,zi,ug,fg,mg,Qn,gg,Vn,_g,vg,Tg,et,Jn,bg,bo,kg,ji,wg,yg,ed,$g,Dg,Fg,cs,Bg,td,Mg,Eg,Kn,Pp,ko,ps,od,Gn,xg,sd,zg,qp,Ge,Xn,jg,wo,Cg,nd,Pg,qg,rd,Ag,Og,Ng,Yn,Lg,Ci,Ig,Sg,Wg,Zn,Rg,er,Ug,Hg,Qg,tt,tr,Vg,yo,Jg,Pi,Kg,Gg,ad,Xg,Yg,Zg,hs,e_,id,t_,o_,or,Ap,$o,us,ld,sr,s_,dd,n_,Op,Pe,nr,r_,cd,a_,i_,rr,l_,qi,d_,c_,p_,ar,h_,ir,u_,f_,m_,fs,g_,ot,lr,__,Do,v_,Ai,T_,b_,pd,k_,w_,y_,ms,$_,hd,D_,F_,dr,Np,Fo,gs,ud,cr,B_,fd,M_,Lp,qe,pr,E_,hr,x_,md,z_,j_,C_,ur,P_,Oi,q_,A_,O_,fr,N_,mr,L_,I_,S_,_s,W_,Ie,gr,R_,Bo,U_,Ni,H_,Q_,gd,V_,J_,K_,vs,G_,_d,X_,Y_,_r,Z_,vr,Ip,Mo,Ts,vd,Tr,ev,Td,tv,Sp,Ae,br,ov,bd,sv,nv,kr,rv,Li,av,iv,lv,wr,dv,yr,cv,pv,hv,bs,uv,Se,$r,fv,Eo,mv,Ii,gv,_v,kd,vv,Tv,bv,ks,kv,wd,wv,yv,Dr,$v,Fr,Wp,xo,ws,yd,Br,Dv,$d,Fv,Rp,Oe,Mr,Bv,Dd,Mv,Ev,Er,xv,Si,zv,jv,Cv,xr,Pv,zr,qv,Av,Ov,ys,Nv,st,jr,Lv,zo,Iv,Wi,Sv,Wv,Fd,Rv,Uv,Hv,$s,Qv,Bd,Vv,Jv,Cr,Up,jo,Ds,Md,Pr,Kv,Ed,Gv,Hp,Ne,qr,Xv,xd,Yv,Zv,Ar,eT,Ri,tT,oT,sT,Or,nT,Nr,rT,aT,iT,Fs,lT,We,Lr,dT,Co,cT,Ui,pT,hT,zd,uT,fT,mT,Bs,gT,jd,_T,vT,Ir,TT,Sr,Qp,Po,Ms,Cd,Wr,bT,Pd,kT,Vp,Le,Rr,wT,qo,yT,qd,$T,DT,Ad,FT,BT,MT,Ur,ET,Hi,xT,zT,jT,Hr,CT,Qr,PT,qT,AT,Es,OT,Re,Vr,NT,Ao,LT,Qi,IT,ST,Od,WT,RT,UT,xs,HT,Nd,QT,VT,Jr,JT,Kr,Jp,Oo,zs,Ld,Gr,KT,Id,GT,Kp,Be,Xr,XT,Sd,YT,ZT,Yr,eb,Vi,tb,ob,sb,Zr,nb,ea,rb,ab,ib,Wd,lb,db,zt,Rd,ta,cb,pb,Ud,oa,hb,ub,Hd,sa,fb,mb,Qd,na,gb,_b,nt,ra,vb,No,Tb,Vd,bb,kb,Jd,wb,yb,$b,js,Db,Kd,Fb,Bb,aa,Gp,Lo,Cs,Gd,ia,Mb,Xd,Eb,Xp,Me,la,xb,da,zb,Yd,jb,Cb,Pb,ca,qb,Ji,Ab,Ob,Nb,pa,Lb,ha,Ib,Sb,Wb,Zd,Rb,Ub,jt,ec,ua,Hb,Qb,tc,fa,Vb,Jb,oc,ma,Kb,Gb,sc,ga,Xb,Yb,rt,_a,Zb,Io,ek,nc,tk,ok,rc,sk,nk,rk,Ps,ak,ac,ik,lk,va,Yp,So,qs,ic,Ta,dk,lc,ck,Zp,Ee,ba,pk,dc,hk,uk,ka,fk,Ki,mk,gk,_k,wa,vk,ya,Tk,bk,kk,cc,wk,yk,Ct,pc,$a,$k,Dk,hc,Da,Fk,Bk,uc,Fa,Mk,Ek,fc,Ba,xk,zk,at,Ma,jk,Wo,Ck,mc,Pk,qk,gc,Ak,Ok,Nk,As,Lk,_c,Ik,Sk,Ea,eh,Ro,Os,vc,xa,Wk,Tc,Rk,th,xe,za,Uk,bc,Hk,Qk,ja,Vk,Gi,Jk,Kk,Gk,Ca,Xk,Pa,Yk,Zk,e1,kc,t1,o1,Pt,wc,qa,s1,n1,yc,Aa,r1,a1,$c,Oa,i1,l1,Dc,Na,d1,c1,it,La,p1,Uo,h1,Fc,u1,f1,Bc,m1,g1,_1,Ns,v1,Mc,T1,b1,Ia,oh,Ho,Ls,Ec,Sa,k1,xc,w1,sh,ze,Wa,y1,zc,$1,D1,Ra,F1,Xi,B1,M1,E1,Ua,x1,Ha,z1,j1,C1,jc,P1,q1,qt,Cc,Qa,A1,O1,Pc,Va,N1,L1,qc,Ja,I1,S1,Ac,Ka,W1,R1,lt,Ga,U1,Qo,H1,Oc,Q1,V1,Nc,J1,K1,G1,Is,X1,Lc,Y1,Z1,Xa,nh,Vo,Ss,Ic,Ya,ew,Sc,tw,rh,je,Za,ow,Jo,sw,Wc,nw,rw,Rc,aw,iw,lw,ei,dw,Yi,cw,pw,hw,ti,uw,oi,fw,mw,gw,Uc,_w,vw,At,Hc,si,Tw,bw,Qc,ni,kw,ww,Vc,ri,yw,$w,Jc,ai,Dw,Fw,dt,ii,Bw,Ko,Mw,Kc,Ew,xw,Gc,zw,jw,Cw,Ws,Pw,Xc,qw,Aw,li,ah;return _=new Te({}),X=new Te({}),tn=new Te({}),on=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new ge({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new Te({}),an=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new Te({}),cn=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new Te({}),fn=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new Te({}),kn=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new me({props:{$$slots:{default:[T2]},$$scope:{ctx:j}}}),Bn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new Te({}),En=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),as=new me({props:{$$slots:{default:[b2]},$$scope:{ctx:j}}}),Pn=new ge({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),qn=new ge({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),An=new Te({}),On=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Sn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new me({props:{$$slots:{default:[k2]},$$scope:{ctx:j}}}),Wn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new Te({}),Un=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new me({props:{$$slots:{default:[w2]},$$scope:{ctx:j}}}),Kn=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new Te({}),Xn=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new me({props:{$$slots:{default:[y2]},$$scope:{ctx:j}}}),or=new ge({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

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
`}}),sr=new Te({}),nr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fs=new me({props:{$$slots:{default:[$2]},$$scope:{ctx:j}}}),lr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new me({props:{$$slots:{default:[D2]},$$scope:{ctx:j}}}),dr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cr=new Te({}),pr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new me({props:{$$slots:{default:[F2]},$$scope:{ctx:j}}}),gr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new me({props:{$$slots:{default:[B2]},$$scope:{ctx:j}}}),_r=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),vr=new ge({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),Tr=new Te({}),br=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new me({props:{$$slots:{default:[M2]},$$scope:{ctx:j}}}),$r=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new me({props:{$$slots:{default:[E2]},$$scope:{ctx:j}}}),Dr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Fr=new ge({props:{code:`labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Br=new Te({}),Mr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new me({props:{$$slots:{default:[x2]},$$scope:{ctx:j}}}),jr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new me({props:{$$slots:{default:[z2]},$$scope:{ctx:j}}}),Cr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pr=new Te({}),qr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fs=new me({props:{$$slots:{default:[j2]},$$scope:{ctx:j}}}),Lr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new me({props:{$$slots:{default:[C2]},$$scope:{ctx:j}}}),Ir=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased", from_pt=True)

inputs = tokenizer("HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf")

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word    
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word    </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Sr=new ge({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Wr=new Te({}),Rr=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new me({props:{$$slots:{default:[P2]},$$scope:{ctx:j}}}),Vr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new me({props:{$$slots:{default:[q2]},$$scope:{ctx:j}}}),Jr=new ge({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased", from_pt=True)

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index: answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index: answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Kr=new ge({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Gr=new Te({}),Xr=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ra=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),js=new me({props:{$$slots:{default:[A2]},$$scope:{ctx:j}}}),aa=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ia=new Te({}),la=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_a=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ta=new Te({}),ba=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ma=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xa=new Te({}),za=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),La=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new me({props:{$$slots:{default:[L2]},$$scope:{ctx:j}}}),Ia=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sa=new Te({}),Wa=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ga=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Is=new me({props:{$$slots:{default:[I2]},$$scope:{ctx:j}}}),Xa=new ge({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ya=new Te({}),Za=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ii=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16370/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16370/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16370/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16370/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("meta"),F=l(),g=s("h1"),v=s("a"),T=s("span"),b(_.$$.fragment),f=l(),B=s("span"),de=a("DistilBERT"),V=l(),E=s("h2"),G=s("a"),I=s("span"),b(X.$$.fragment),ce=l(),S=s("span"),pe=a("Overview"),re=l(),N=s("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=s("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=s("p"),A=a("The abstract from the paper is the following:"),ie=l(),L=s("p"),se=s("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=s("p"),U=a("Tips:"),le=l(),h=s("ul"),M=s("li"),K=a("DistilBERT doesn\u2019t have "),_e=s("code"),be=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=s("code"),ke=a("tokenizer.sep_token"),we=a(" (or "),C=s("code"),H=a("[SEP]"),ye=a(")."),$e=l(),Z=s("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),Fe=a("position_ids"),gu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),_p=l(),Tt=s("p"),_u=a("This model was contributed by "),Ys=s("a"),vu=a("victorsanh"),Tu=a(`. This model jax version was
contributed by `),Zs=s("a"),bu=a("kamalkraj"),ku=a(". The original code can be found "),en=s("a"),wu=a("here"),yu=a("."),vp=l(),ao=s("h2"),Go=s("a"),kl=s("span"),b(tn.$$.fragment),$u=l(),wl=s("span"),Du=a("DistilBertConfig"),Tp=l(),Ue=s("div"),b(on.$$.fragment),Fu=l(),xt=s("p"),Bu=a("This is the configuration class to store the configuration of a "),ui=s("a"),Mu=a("DistilBertModel"),Eu=a(" or a "),fi=s("a"),xu=a("TFDistilBertModel"),zu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=s("a"),ju=a("distilbert-base-uncased"),Cu=a(" architecture."),Pu=l(),io=s("p"),qu=a("Configuration objects inherit from "),mi=s("a"),Au=a("PretrainedConfig"),Ou=a(` and can be used to control the model outputs. Read the
documentation from `),gi=s("a"),Nu=a("PretrainedConfig"),Lu=a(" for more information."),Iu=l(),yl=s("p"),Su=a("Examples:"),Wu=l(),b(nn.$$.fragment),bp=l(),lo=s("h2"),Xo=s("a"),$l=s("span"),b(rn.$$.fragment),Ru=l(),Dl=s("span"),Uu=a("DistilBertTokenizer"),kp=l(),_t=s("div"),b(an.$$.fragment),Hu=l(),Fl=s("p"),Qu=a("Construct a DistilBERT tokenizer."),Vu=l(),Yo=s("p"),_i=s("a"),Ju=a("DistilBertTokenizer"),Ku=a(" is identical to "),vi=s("a"),Gu=a("BertTokenizer"),Xu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Yu=l(),ln=s("p"),Zu=a("Refer to superclass "),Ti=s("a"),ef=a("BertTokenizer"),tf=a(" for usage examples and documentation concerning parameters."),wp=l(),co=s("h2"),Zo=s("a"),Bl=s("span"),b(dn.$$.fragment),of=l(),Ml=s("span"),sf=a("DistilBertTokenizerFast"),yp=l(),vt=s("div"),b(cn.$$.fragment),nf=l(),pn=s("p"),rf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),El=s("em"),af=a("tokenizers"),lf=a(" library)."),df=l(),es=s("p"),bi=s("a"),cf=a("DistilBertTokenizerFast"),pf=a(" is identical to "),ki=s("a"),hf=a("BertTokenizerFast"),uf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ff=l(),hn=s("p"),mf=a("Refer to superclass "),wi=s("a"),gf=a("BertTokenizerFast"),_f=a(" for usage examples and documentation concerning parameters."),$p=l(),po=s("h2"),ts=s("a"),xl=s("span"),b(un.$$.fragment),vf=l(),zl=s("span"),Tf=a("DistilBertModel"),Dp=l(),He=s("div"),b(fn.$$.fragment),bf=l(),jl=s("p"),kf=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),wf=l(),mn=s("p"),yf=a("This model inherits from "),yi=s("a"),$f=a("PreTrainedModel"),Df=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=l(),gn=s("p"),Bf=a("This model is also a PyTorch "),_n=s("a"),Mf=a("torch.nn.Module"),Ef=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xf=l(),Xe=s("div"),b(vn.$$.fragment),zf=l(),ho=s("p"),jf=a("The "),$i=s("a"),Cf=a("DistilBertModel"),Pf=a(" forward method, overrides the "),Cl=s("code"),qf=a("__call__"),Af=a(" special method."),Of=l(),b(os.$$.fragment),Nf=l(),Pl=s("p"),Lf=a("Example:"),If=l(),b(Tn.$$.fragment),Fp=l(),uo=s("h2"),ss=s("a"),ql=s("span"),b(bn.$$.fragment),Sf=l(),Al=s("span"),Wf=a("DistilBertForMaskedLM"),Bp=l(),Qe=s("div"),b(kn.$$.fragment),Rf=l(),wn=s("p"),Uf=a("DistilBert Model with a "),Ol=s("code"),Hf=a("masked language modeling"),Qf=a(" head on top."),Vf=l(),yn=s("p"),Jf=a("This model inherits from "),Di=s("a"),Kf=a("PreTrainedModel"),Gf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=l(),$n=s("p"),Yf=a("This model is also a PyTorch "),Dn=s("a"),Zf=a("torch.nn.Module"),em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tm=l(),Ye=s("div"),b(Fn.$$.fragment),om=l(),fo=s("p"),sm=a("The "),Fi=s("a"),nm=a("DistilBertForMaskedLM"),rm=a(" forward method, overrides the "),Nl=s("code"),am=a("__call__"),im=a(" special method."),lm=l(),b(ns.$$.fragment),dm=l(),Ll=s("p"),cm=a("Example:"),pm=l(),b(Bn.$$.fragment),Mp=l(),mo=s("h2"),rs=s("a"),Il=s("span"),b(Mn.$$.fragment),hm=l(),Sl=s("span"),um=a("DistilBertForSequenceClassification"),Ep=l(),Ve=s("div"),b(En.$$.fragment),fm=l(),Wl=s("p"),mm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gm=l(),xn=s("p"),_m=a("This model inherits from "),Bi=s("a"),vm=a("PreTrainedModel"),Tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=l(),zn=s("p"),km=a("This model is also a PyTorch "),jn=s("a"),wm=a("torch.nn.Module"),ym=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$m=l(),Ce=s("div"),b(Cn.$$.fragment),Dm=l(),go=s("p"),Fm=a("The "),Mi=s("a"),Bm=a("DistilBertForSequenceClassification"),Mm=a(" forward method, overrides the "),Rl=s("code"),Em=a("__call__"),xm=a(" special method."),zm=l(),b(as.$$.fragment),jm=l(),Ul=s("p"),Cm=a("Example of single-label classification:"),Pm=l(),b(Pn.$$.fragment),qm=l(),Hl=s("p"),Am=a("Example of multi-label classification:"),Om=l(),b(qn.$$.fragment),xp=l(),_o=s("h2"),is=s("a"),Ql=s("span"),b(An.$$.fragment),Nm=l(),Vl=s("span"),Lm=a("DistilBertForMultipleChoice"),zp=l(),Je=s("div"),b(On.$$.fragment),Im=l(),Jl=s("p"),Sm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wm=l(),Nn=s("p"),Rm=a("This model inherits from "),Ei=s("a"),Um=a("PreTrainedModel"),Hm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qm=l(),Ln=s("p"),Vm=a("This model is also a PyTorch "),In=s("a"),Jm=a("torch.nn.Module"),Km=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gm=l(),Ze=s("div"),b(Sn.$$.fragment),Xm=l(),vo=s("p"),Ym=a("The "),xi=s("a"),Zm=a("DistilBertForMultipleChoice"),eg=a(" forward method, overrides the "),Kl=s("code"),tg=a("__call__"),og=a(" special method."),sg=l(),b(ls.$$.fragment),ng=l(),Gl=s("p"),rg=a("Examples:"),ag=l(),b(Wn.$$.fragment),jp=l(),To=s("h2"),ds=s("a"),Xl=s("span"),b(Rn.$$.fragment),ig=l(),Yl=s("span"),lg=a("DistilBertForTokenClassification"),Cp=l(),Ke=s("div"),b(Un.$$.fragment),dg=l(),Zl=s("p"),cg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pg=l(),Hn=s("p"),hg=a("This model inherits from "),zi=s("a"),ug=a("PreTrainedModel"),fg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mg=l(),Qn=s("p"),gg=a("This model is also a PyTorch "),Vn=s("a"),_g=a("torch.nn.Module"),vg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tg=l(),et=s("div"),b(Jn.$$.fragment),bg=l(),bo=s("p"),kg=a("The "),ji=s("a"),wg=a("DistilBertForTokenClassification"),yg=a(" forward method, overrides the "),ed=s("code"),$g=a("__call__"),Dg=a(" special method."),Fg=l(),b(cs.$$.fragment),Bg=l(),td=s("p"),Mg=a("Example:"),Eg=l(),b(Kn.$$.fragment),Pp=l(),ko=s("h2"),ps=s("a"),od=s("span"),b(Gn.$$.fragment),xg=l(),sd=s("span"),zg=a("DistilBertForQuestionAnswering"),qp=l(),Ge=s("div"),b(Xn.$$.fragment),jg=l(),wo=s("p"),Cg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),nd=s("code"),Pg=a("span start logits"),qg=a(" and "),rd=s("code"),Ag=a("span end logits"),Og=a(")."),Ng=l(),Yn=s("p"),Lg=a("This model inherits from "),Ci=s("a"),Ig=a("PreTrainedModel"),Sg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wg=l(),Zn=s("p"),Rg=a("This model is also a PyTorch "),er=s("a"),Ug=a("torch.nn.Module"),Hg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qg=l(),tt=s("div"),b(tr.$$.fragment),Vg=l(),yo=s("p"),Jg=a("The "),Pi=s("a"),Kg=a("DistilBertForQuestionAnswering"),Gg=a(" forward method, overrides the "),ad=s("code"),Xg=a("__call__"),Yg=a(" special method."),Zg=l(),b(hs.$$.fragment),e_=l(),id=s("p"),t_=a("Example:"),o_=l(),b(or.$$.fragment),Ap=l(),$o=s("h2"),us=s("a"),ld=s("span"),b(sr.$$.fragment),s_=l(),dd=s("span"),n_=a("TFDistilBertModel"),Op=l(),Pe=s("div"),b(nr.$$.fragment),r_=l(),cd=s("p"),a_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),i_=l(),rr=s("p"),l_=a("This model inherits from "),qi=s("a"),d_=a("TFPreTrainedModel"),c_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p_=l(),ar=s("p"),h_=a("This model is also a "),ir=s("a"),u_=a("tf.keras.Model"),f_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m_=l(),b(fs.$$.fragment),g_=l(),ot=s("div"),b(lr.$$.fragment),__=l(),Do=s("p"),v_=a("The "),Ai=s("a"),T_=a("TFDistilBertModel"),b_=a(" forward method, overrides the "),pd=s("code"),k_=a("__call__"),w_=a(" special method."),y_=l(),b(ms.$$.fragment),$_=l(),hd=s("p"),D_=a("Example:"),F_=l(),b(dr.$$.fragment),Np=l(),Fo=s("h2"),gs=s("a"),ud=s("span"),b(cr.$$.fragment),B_=l(),fd=s("span"),M_=a("TFDistilBertForMaskedLM"),Lp=l(),qe=s("div"),b(pr.$$.fragment),E_=l(),hr=s("p"),x_=a("DistilBert Model with a "),md=s("code"),z_=a("masked language modeling"),j_=a(" head on top."),C_=l(),ur=s("p"),P_=a("This model inherits from "),Oi=s("a"),q_=a("TFPreTrainedModel"),A_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O_=l(),fr=s("p"),N_=a("This model is also a "),mr=s("a"),L_=a("tf.keras.Model"),I_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S_=l(),b(_s.$$.fragment),W_=l(),Ie=s("div"),b(gr.$$.fragment),R_=l(),Bo=s("p"),U_=a("The "),Ni=s("a"),H_=a("TFDistilBertForMaskedLM"),Q_=a(" forward method, overrides the "),gd=s("code"),V_=a("__call__"),J_=a(" special method."),K_=l(),b(vs.$$.fragment),G_=l(),_d=s("p"),X_=a("Example:"),Y_=l(),b(_r.$$.fragment),Z_=l(),b(vr.$$.fragment),Ip=l(),Mo=s("h2"),Ts=s("a"),vd=s("span"),b(Tr.$$.fragment),ev=l(),Td=s("span"),tv=a("TFDistilBertForSequenceClassification"),Sp=l(),Ae=s("div"),b(br.$$.fragment),ov=l(),bd=s("p"),sv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),nv=l(),kr=s("p"),rv=a("This model inherits from "),Li=s("a"),av=a("TFPreTrainedModel"),iv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv=l(),wr=s("p"),dv=a("This model is also a "),yr=s("a"),cv=a("tf.keras.Model"),pv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hv=l(),b(bs.$$.fragment),uv=l(),Se=s("div"),b($r.$$.fragment),fv=l(),Eo=s("p"),mv=a("The "),Ii=s("a"),gv=a("TFDistilBertForSequenceClassification"),_v=a(" forward method, overrides the "),kd=s("code"),vv=a("__call__"),Tv=a(" special method."),bv=l(),b(ks.$$.fragment),kv=l(),wd=s("p"),wv=a("Example:"),yv=l(),b(Dr.$$.fragment),$v=l(),b(Fr.$$.fragment),Wp=l(),xo=s("h2"),ws=s("a"),yd=s("span"),b(Br.$$.fragment),Dv=l(),$d=s("span"),Fv=a("TFDistilBertForMultipleChoice"),Rp=l(),Oe=s("div"),b(Mr.$$.fragment),Bv=l(),Dd=s("p"),Mv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ev=l(),Er=s("p"),xv=a("This model inherits from "),Si=s("a"),zv=a("TFPreTrainedModel"),jv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cv=l(),xr=s("p"),Pv=a("This model is also a "),zr=s("a"),qv=a("tf.keras.Model"),Av=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ov=l(),b(ys.$$.fragment),Nv=l(),st=s("div"),b(jr.$$.fragment),Lv=l(),zo=s("p"),Iv=a("The "),Wi=s("a"),Sv=a("TFDistilBertForMultipleChoice"),Wv=a(" forward method, overrides the "),Fd=s("code"),Rv=a("__call__"),Uv=a(" special method."),Hv=l(),b($s.$$.fragment),Qv=l(),Bd=s("p"),Vv=a("Example:"),Jv=l(),b(Cr.$$.fragment),Up=l(),jo=s("h2"),Ds=s("a"),Md=s("span"),b(Pr.$$.fragment),Kv=l(),Ed=s("span"),Gv=a("TFDistilBertForTokenClassification"),Hp=l(),Ne=s("div"),b(qr.$$.fragment),Xv=l(),xd=s("p"),Yv=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Zv=l(),Ar=s("p"),eT=a("This model inherits from "),Ri=s("a"),tT=a("TFPreTrainedModel"),oT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT=l(),Or=s("p"),nT=a("This model is also a "),Nr=s("a"),rT=a("tf.keras.Model"),aT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iT=l(),b(Fs.$$.fragment),lT=l(),We=s("div"),b(Lr.$$.fragment),dT=l(),Co=s("p"),cT=a("The "),Ui=s("a"),pT=a("TFDistilBertForTokenClassification"),hT=a(" forward method, overrides the "),zd=s("code"),uT=a("__call__"),fT=a(" special method."),mT=l(),b(Bs.$$.fragment),gT=l(),jd=s("p"),_T=a("Example:"),vT=l(),b(Ir.$$.fragment),TT=l(),b(Sr.$$.fragment),Qp=l(),Po=s("h2"),Ms=s("a"),Cd=s("span"),b(Wr.$$.fragment),bT=l(),Pd=s("span"),kT=a("TFDistilBertForQuestionAnswering"),Vp=l(),Le=s("div"),b(Rr.$$.fragment),wT=l(),qo=s("p"),yT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=s("code"),$T=a("span start logits"),DT=a(" and "),Ad=s("code"),FT=a("span end logits"),BT=a(")."),MT=l(),Ur=s("p"),ET=a("This model inherits from "),Hi=s("a"),xT=a("TFPreTrainedModel"),zT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=l(),Hr=s("p"),CT=a("This model is also a "),Qr=s("a"),PT=a("tf.keras.Model"),qT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=l(),b(Es.$$.fragment),OT=l(),Re=s("div"),b(Vr.$$.fragment),NT=l(),Ao=s("p"),LT=a("The "),Qi=s("a"),IT=a("TFDistilBertForQuestionAnswering"),ST=a(" forward method, overrides the "),Od=s("code"),WT=a("__call__"),RT=a(" special method."),UT=l(),b(xs.$$.fragment),HT=l(),Nd=s("p"),QT=a("Example:"),VT=l(),b(Jr.$$.fragment),JT=l(),b(Kr.$$.fragment),Jp=l(),Oo=s("h2"),zs=s("a"),Ld=s("span"),b(Gr.$$.fragment),KT=l(),Id=s("span"),GT=a("FlaxDistilBertModel"),Kp=l(),Be=s("div"),b(Xr.$$.fragment),XT=l(),Sd=s("p"),YT=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),ZT=l(),Yr=s("p"),eb=a("This model inherits from "),Vi=s("a"),tb=a("FlaxPreTrainedModel"),ob=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sb=l(),Zr=s("p"),nb=a("This model is also a Flax Linen "),ea=s("a"),rb=a("flax.linen.Module"),ab=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ib=l(),Wd=s("p"),lb=a("Finally, this model supports inherent JAX features such as:"),db=l(),zt=s("ul"),Rd=s("li"),ta=s("a"),cb=a("Just-In-Time (JIT) compilation"),pb=l(),Ud=s("li"),oa=s("a"),hb=a("Automatic Differentiation"),ub=l(),Hd=s("li"),sa=s("a"),fb=a("Vectorization"),mb=l(),Qd=s("li"),na=s("a"),gb=a("Parallelization"),_b=l(),nt=s("div"),b(ra.$$.fragment),vb=l(),No=s("p"),Tb=a("The "),Vd=s("code"),bb=a("FlaxDistilBertPreTrainedModel"),kb=a("forward method, overrides the "),Jd=s("code"),wb=a("__call__"),yb=a(" special method."),$b=l(),b(js.$$.fragment),Db=l(),Kd=s("p"),Fb=a("Example:"),Bb=l(),b(aa.$$.fragment),Gp=l(),Lo=s("h2"),Cs=s("a"),Gd=s("span"),b(ia.$$.fragment),Mb=l(),Xd=s("span"),Eb=a("FlaxDistilBertForMaskedLM"),Xp=l(),Me=s("div"),b(la.$$.fragment),xb=l(),da=s("p"),zb=a("DistilBert Model with a "),Yd=s("code"),jb=a("language modeling"),Cb=a(" head on top."),Pb=l(),ca=s("p"),qb=a("This model inherits from "),Ji=s("a"),Ab=a("FlaxPreTrainedModel"),Ob=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nb=l(),pa=s("p"),Lb=a("This model is also a Flax Linen "),ha=s("a"),Ib=a("flax.linen.Module"),Sb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wb=l(),Zd=s("p"),Rb=a("Finally, this model supports inherent JAX features such as:"),Ub=l(),jt=s("ul"),ec=s("li"),ua=s("a"),Hb=a("Just-In-Time (JIT) compilation"),Qb=l(),tc=s("li"),fa=s("a"),Vb=a("Automatic Differentiation"),Jb=l(),oc=s("li"),ma=s("a"),Kb=a("Vectorization"),Gb=l(),sc=s("li"),ga=s("a"),Xb=a("Parallelization"),Yb=l(),rt=s("div"),b(_a.$$.fragment),Zb=l(),Io=s("p"),ek=a("The "),nc=s("code"),tk=a("FlaxDistilBertPreTrainedModel"),ok=a("forward method, overrides the "),rc=s("code"),sk=a("__call__"),nk=a(" special method."),rk=l(),b(Ps.$$.fragment),ak=l(),ac=s("p"),ik=a("Example:"),lk=l(),b(va.$$.fragment),Yp=l(),So=s("h2"),qs=s("a"),ic=s("span"),b(Ta.$$.fragment),dk=l(),lc=s("span"),ck=a("FlaxDistilBertForSequenceClassification"),Zp=l(),Ee=s("div"),b(ba.$$.fragment),pk=l(),dc=s("p"),hk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),uk=l(),ka=s("p"),fk=a("This model inherits from "),Ki=s("a"),mk=a("FlaxPreTrainedModel"),gk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_k=l(),wa=s("p"),vk=a("This model is also a Flax Linen "),ya=s("a"),Tk=a("flax.linen.Module"),bk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kk=l(),cc=s("p"),wk=a("Finally, this model supports inherent JAX features such as:"),yk=l(),Ct=s("ul"),pc=s("li"),$a=s("a"),$k=a("Just-In-Time (JIT) compilation"),Dk=l(),hc=s("li"),Da=s("a"),Fk=a("Automatic Differentiation"),Bk=l(),uc=s("li"),Fa=s("a"),Mk=a("Vectorization"),Ek=l(),fc=s("li"),Ba=s("a"),xk=a("Parallelization"),zk=l(),at=s("div"),b(Ma.$$.fragment),jk=l(),Wo=s("p"),Ck=a("The "),mc=s("code"),Pk=a("FlaxDistilBertPreTrainedModel"),qk=a("forward method, overrides the "),gc=s("code"),Ak=a("__call__"),Ok=a(" special method."),Nk=l(),b(As.$$.fragment),Lk=l(),_c=s("p"),Ik=a("Example:"),Sk=l(),b(Ea.$$.fragment),eh=l(),Ro=s("h2"),Os=s("a"),vc=s("span"),b(xa.$$.fragment),Wk=l(),Tc=s("span"),Rk=a("FlaxDistilBertForMultipleChoice"),th=l(),xe=s("div"),b(za.$$.fragment),Uk=l(),bc=s("p"),Hk=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Qk=l(),ja=s("p"),Vk=a("This model inherits from "),Gi=s("a"),Jk=a("FlaxPreTrainedModel"),Kk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gk=l(),Ca=s("p"),Xk=a("This model is also a Flax Linen "),Pa=s("a"),Yk=a("flax.linen.Module"),Zk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e1=l(),kc=s("p"),t1=a("Finally, this model supports inherent JAX features such as:"),o1=l(),Pt=s("ul"),wc=s("li"),qa=s("a"),s1=a("Just-In-Time (JIT) compilation"),n1=l(),yc=s("li"),Aa=s("a"),r1=a("Automatic Differentiation"),a1=l(),$c=s("li"),Oa=s("a"),i1=a("Vectorization"),l1=l(),Dc=s("li"),Na=s("a"),d1=a("Parallelization"),c1=l(),it=s("div"),b(La.$$.fragment),p1=l(),Uo=s("p"),h1=a("The "),Fc=s("code"),u1=a("FlaxDistilBertPreTrainedModel"),f1=a("forward method, overrides the "),Bc=s("code"),m1=a("__call__"),g1=a(" special method."),_1=l(),b(Ns.$$.fragment),v1=l(),Mc=s("p"),T1=a("Example:"),b1=l(),b(Ia.$$.fragment),oh=l(),Ho=s("h2"),Ls=s("a"),Ec=s("span"),b(Sa.$$.fragment),k1=l(),xc=s("span"),w1=a("FlaxDistilBertForTokenClassification"),sh=l(),ze=s("div"),b(Wa.$$.fragment),y1=l(),zc=s("p"),$1=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),D1=l(),Ra=s("p"),F1=a("This model inherits from "),Xi=s("a"),B1=a("FlaxPreTrainedModel"),M1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),E1=l(),Ua=s("p"),x1=a("This model is also a Flax Linen "),Ha=s("a"),z1=a("flax.linen.Module"),j1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),C1=l(),jc=s("p"),P1=a("Finally, this model supports inherent JAX features such as:"),q1=l(),qt=s("ul"),Cc=s("li"),Qa=s("a"),A1=a("Just-In-Time (JIT) compilation"),O1=l(),Pc=s("li"),Va=s("a"),N1=a("Automatic Differentiation"),L1=l(),qc=s("li"),Ja=s("a"),I1=a("Vectorization"),S1=l(),Ac=s("li"),Ka=s("a"),W1=a("Parallelization"),R1=l(),lt=s("div"),b(Ga.$$.fragment),U1=l(),Qo=s("p"),H1=a("The "),Oc=s("code"),Q1=a("FlaxDistilBertPreTrainedModel"),V1=a("forward method, overrides the "),Nc=s("code"),J1=a("__call__"),K1=a(" special method."),G1=l(),b(Is.$$.fragment),X1=l(),Lc=s("p"),Y1=a("Example:"),Z1=l(),b(Xa.$$.fragment),nh=l(),Vo=s("h2"),Ss=s("a"),Ic=s("span"),b(Ya.$$.fragment),ew=l(),Sc=s("span"),tw=a("FlaxDistilBertForQuestionAnswering"),rh=l(),je=s("div"),b(Za.$$.fragment),ow=l(),Jo=s("p"),sw=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Wc=s("code"),nw=a("span start logits"),rw=a(" and "),Rc=s("code"),aw=a("span end logits"),iw=a(")."),lw=l(),ei=s("p"),dw=a("This model inherits from "),Yi=s("a"),cw=a("FlaxPreTrainedModel"),pw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hw=l(),ti=s("p"),uw=a("This model is also a Flax Linen "),oi=s("a"),fw=a("flax.linen.Module"),mw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gw=l(),Uc=s("p"),_w=a("Finally, this model supports inherent JAX features such as:"),vw=l(),At=s("ul"),Hc=s("li"),si=s("a"),Tw=a("Just-In-Time (JIT) compilation"),bw=l(),Qc=s("li"),ni=s("a"),kw=a("Automatic Differentiation"),ww=l(),Vc=s("li"),ri=s("a"),yw=a("Vectorization"),$w=l(),Jc=s("li"),ai=s("a"),Dw=a("Parallelization"),Fw=l(),dt=s("div"),b(ii.$$.fragment),Bw=l(),Ko=s("p"),Mw=a("The "),Kc=s("code"),Ew=a("FlaxDistilBertPreTrainedModel"),xw=a("forward method, overrides the "),Gc=s("code"),zw=a("__call__"),jw=a(" special method."),Cw=l(),b(Ws.$$.fragment),Pw=l(),Xc=s("p"),qw=a("Example:"),Aw=l(),b(li.$$.fragment),this.h()},l(o){const m=g2('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),g=n(o,"H1",{class:!0});var di=r(g);v=n(di,"A",{id:!0,class:!0,href:!0});var Yc=r(v);T=n(Yc,"SPAN",{});var Zc=r(T);k(_.$$.fragment,Zc),Zc.forEach(t),Yc.forEach(t),f=d(di),B=n(di,"SPAN",{});var ep=r(B);de=i(ep,"DistilBERT"),ep.forEach(t),di.forEach(t),V=d(o),E=n(o,"H2",{class:!0});var ci=r(E);G=n(ci,"A",{id:!0,class:!0,href:!0});var tp=r(G);I=n(tp,"SPAN",{});var op=r(I);k(X.$$.fragment,op),op.forEach(t),tp.forEach(t),ce=d(ci),S=n(ci,"SPAN",{});var sp=r(S);pe=i(sp,"Overview"),sp.forEach(t),ci.forEach(t),re=d(o),N=n(o,"P",{});var Ot=r(N);q=i(Ot,"The DistilBERT model was proposed in the blog post "),Y=n(Ot,"A",{href:!0,rel:!0});var np=r(Y);J=i(np,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),np.forEach(t),x=i(Ot,", and the paper "),z=n(Ot,"A",{href:!0,rel:!0});var rp=r(z);he=i(rp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),rp.forEach(t),W=i(Ot,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n(Ot,"EM",{});var ap=r(oe);ue=i(ap,"bert-base-uncased"),ap.forEach(t),R=i(Ot,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Ot.forEach(t),ae=d(o),ee=n(o,"P",{});var ip=r(ee);A=i(ip,"The abstract from the paper is the following:"),ip.forEach(t),ie=d(o),L=n(o,"P",{});var lp=r(L);se=n(lp,"EM",{});var dp=r(se);fe=i(dp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),dp.forEach(t),lp.forEach(t),P=d(o),te=n(o,"P",{});var cp=r(te);U=i(cp,"Tips:"),cp.forEach(t),le=d(o),h=n(o,"UL",{});var pi=r(h);M=n(pi,"LI",{});var Nt=r(M);K=i(Nt,"DistilBERT doesn\u2019t have "),_e=n(Nt,"CODE",{});var pp=r(_e);be=i(pp,"token_type_ids"),pp.forEach(t),O=i(Nt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(Nt,"CODE",{});var hp=r(ve);ke=i(hp,"tokenizer.sep_token"),hp.forEach(t),we=i(Nt," (or "),C=n(Nt,"CODE",{});var up=r(C);H=i(up,"[SEP]"),up.forEach(t),ye=i(Nt,")."),Nt.forEach(t),$e=d(pi),Z=n(pi,"LI",{});var hi=r(Z);De=i(hi,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(hi,"CODE",{});var fp=r(ne);Fe=i(fp,"position_ids"),fp.forEach(t),gu=i(hi,` input). This could be added if
necessary though, just let us know if you need this option.`),hi.forEach(t),pi.forEach(t),_p=d(o),Tt=n(o,"P",{});var Lt=r(Tt);_u=i(Lt,"This model was contributed by "),Ys=n(Lt,"A",{href:!0,rel:!0});var Ow=r(Ys);vu=i(Ow,"victorsanh"),Ow.forEach(t),Tu=i(Lt,`. This model jax version was
contributed by `),Zs=n(Lt,"A",{href:!0,rel:!0});var Nw=r(Zs);bu=i(Nw,"kamalkraj"),Nw.forEach(t),ku=i(Lt,". The original code can be found "),en=n(Lt,"A",{href:!0,rel:!0});var Lw=r(en);wu=i(Lw,"here"),Lw.forEach(t),yu=i(Lt,"."),Lt.forEach(t),vp=d(o),ao=n(o,"H2",{class:!0});var ih=r(ao);Go=n(ih,"A",{id:!0,class:!0,href:!0});var Iw=r(Go);kl=n(Iw,"SPAN",{});var Sw=r(kl);k(tn.$$.fragment,Sw),Sw.forEach(t),Iw.forEach(t),$u=d(ih),wl=n(ih,"SPAN",{});var Ww=r(wl);Du=i(Ww,"DistilBertConfig"),Ww.forEach(t),ih.forEach(t),Tp=d(o),Ue=n(o,"DIV",{class:!0});var It=r(Ue);k(on.$$.fragment,It),Fu=d(It),xt=n(It,"P",{});var Rs=r(xt);Bu=i(Rs,"This is the configuration class to store the configuration of a "),ui=n(Rs,"A",{href:!0});var Rw=r(ui);Mu=i(Rw,"DistilBertModel"),Rw.forEach(t),Eu=i(Rs," or a "),fi=n(Rs,"A",{href:!0});var Uw=r(fi);xu=i(Uw,"TFDistilBertModel"),Uw.forEach(t),zu=i(Rs,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=n(Rs,"A",{href:!0,rel:!0});var Hw=r(sn);ju=i(Hw,"distilbert-base-uncased"),Hw.forEach(t),Cu=i(Rs," architecture."),Rs.forEach(t),Pu=d(It),io=n(It,"P",{});var Zi=r(io);qu=i(Zi,"Configuration objects inherit from "),mi=n(Zi,"A",{href:!0});var Qw=r(mi);Au=i(Qw,"PretrainedConfig"),Qw.forEach(t),Ou=i(Zi,` and can be used to control the model outputs. Read the
documentation from `),gi=n(Zi,"A",{href:!0});var Vw=r(gi);Nu=i(Vw,"PretrainedConfig"),Vw.forEach(t),Lu=i(Zi," for more information."),Zi.forEach(t),Iu=d(It),yl=n(It,"P",{});var Jw=r(yl);Su=i(Jw,"Examples:"),Jw.forEach(t),Wu=d(It),k(nn.$$.fragment,It),It.forEach(t),bp=d(o),lo=n(o,"H2",{class:!0});var lh=r(lo);Xo=n(lh,"A",{id:!0,class:!0,href:!0});var Kw=r(Xo);$l=n(Kw,"SPAN",{});var Gw=r($l);k(rn.$$.fragment,Gw),Gw.forEach(t),Kw.forEach(t),Ru=d(lh),Dl=n(lh,"SPAN",{});var Xw=r(Dl);Uu=i(Xw,"DistilBertTokenizer"),Xw.forEach(t),lh.forEach(t),kp=d(o),_t=n(o,"DIV",{class:!0});var Us=r(_t);k(an.$$.fragment,Us),Hu=d(Us),Fl=n(Us,"P",{});var Yw=r(Fl);Qu=i(Yw,"Construct a DistilBERT tokenizer."),Yw.forEach(t),Vu=d(Us),Yo=n(Us,"P",{});var mp=r(Yo);_i=n(mp,"A",{href:!0});var Zw=r(_i);Ju=i(Zw,"DistilBertTokenizer"),Zw.forEach(t),Ku=i(mp," is identical to "),vi=n(mp,"A",{href:!0});var ey=r(vi);Gu=i(ey,"BertTokenizer"),ey.forEach(t),Xu=i(mp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),mp.forEach(t),Yu=d(Us),ln=n(Us,"P",{});var dh=r(ln);Zu=i(dh,"Refer to superclass "),Ti=n(dh,"A",{href:!0});var ty=r(Ti);ef=i(ty,"BertTokenizer"),ty.forEach(t),tf=i(dh," for usage examples and documentation concerning parameters."),dh.forEach(t),Us.forEach(t),wp=d(o),co=n(o,"H2",{class:!0});var ch=r(co);Zo=n(ch,"A",{id:!0,class:!0,href:!0});var oy=r(Zo);Bl=n(oy,"SPAN",{});var sy=r(Bl);k(dn.$$.fragment,sy),sy.forEach(t),oy.forEach(t),of=d(ch),Ml=n(ch,"SPAN",{});var ny=r(Ml);sf=i(ny,"DistilBertTokenizerFast"),ny.forEach(t),ch.forEach(t),yp=d(o),vt=n(o,"DIV",{class:!0});var Hs=r(vt);k(cn.$$.fragment,Hs),nf=d(Hs),pn=n(Hs,"P",{});var ph=r(pn);rf=i(ph,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),El=n(ph,"EM",{});var ry=r(El);af=i(ry,"tokenizers"),ry.forEach(t),lf=i(ph," library)."),ph.forEach(t),df=d(Hs),es=n(Hs,"P",{});var gp=r(es);bi=n(gp,"A",{href:!0});var ay=r(bi);cf=i(ay,"DistilBertTokenizerFast"),ay.forEach(t),pf=i(gp," is identical to "),ki=n(gp,"A",{href:!0});var iy=r(ki);hf=i(iy,"BertTokenizerFast"),iy.forEach(t),uf=i(gp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),gp.forEach(t),ff=d(Hs),hn=n(Hs,"P",{});var hh=r(hn);mf=i(hh,"Refer to superclass "),wi=n(hh,"A",{href:!0});var ly=r(wi);gf=i(ly,"BertTokenizerFast"),ly.forEach(t),_f=i(hh," for usage examples and documentation concerning parameters."),hh.forEach(t),Hs.forEach(t),$p=d(o),po=n(o,"H2",{class:!0});var uh=r(po);ts=n(uh,"A",{id:!0,class:!0,href:!0});var dy=r(ts);xl=n(dy,"SPAN",{});var cy=r(xl);k(un.$$.fragment,cy),cy.forEach(t),dy.forEach(t),vf=d(uh),zl=n(uh,"SPAN",{});var py=r(zl);Tf=i(py,"DistilBertModel"),py.forEach(t),uh.forEach(t),Dp=d(o),He=n(o,"DIV",{class:!0});var St=r(He);k(fn.$$.fragment,St),bf=d(St),jl=n(St,"P",{});var hy=r(jl);kf=i(hy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),hy.forEach(t),wf=d(St),mn=n(St,"P",{});var fh=r(mn);yf=i(fh,"This model inherits from "),yi=n(fh,"A",{href:!0});var uy=r(yi);$f=i(uy,"PreTrainedModel"),uy.forEach(t),Df=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Ff=d(St),gn=n(St,"P",{});var mh=r(gn);Bf=i(mh,"This model is also a PyTorch "),_n=n(mh,"A",{href:!0,rel:!0});var fy=r(_n);Mf=i(fy,"torch.nn.Module"),fy.forEach(t),Ef=i(mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh.forEach(t),xf=d(St),Xe=n(St,"DIV",{class:!0});var Wt=r(Xe);k(vn.$$.fragment,Wt),zf=d(Wt),ho=n(Wt,"P",{});var el=r(ho);jf=i(el,"The "),$i=n(el,"A",{href:!0});var my=r($i);Cf=i(my,"DistilBertModel"),my.forEach(t),Pf=i(el," forward method, overrides the "),Cl=n(el,"CODE",{});var gy=r(Cl);qf=i(gy,"__call__"),gy.forEach(t),Af=i(el," special method."),el.forEach(t),Of=d(Wt),k(os.$$.fragment,Wt),Nf=d(Wt),Pl=n(Wt,"P",{});var _y=r(Pl);Lf=i(_y,"Example:"),_y.forEach(t),If=d(Wt),k(Tn.$$.fragment,Wt),Wt.forEach(t),St.forEach(t),Fp=d(o),uo=n(o,"H2",{class:!0});var gh=r(uo);ss=n(gh,"A",{id:!0,class:!0,href:!0});var vy=r(ss);ql=n(vy,"SPAN",{});var Ty=r(ql);k(bn.$$.fragment,Ty),Ty.forEach(t),vy.forEach(t),Sf=d(gh),Al=n(gh,"SPAN",{});var by=r(Al);Wf=i(by,"DistilBertForMaskedLM"),by.forEach(t),gh.forEach(t),Bp=d(o),Qe=n(o,"DIV",{class:!0});var Rt=r(Qe);k(kn.$$.fragment,Rt),Rf=d(Rt),wn=n(Rt,"P",{});var _h=r(wn);Uf=i(_h,"DistilBert Model with a "),Ol=n(_h,"CODE",{});var ky=r(Ol);Hf=i(ky,"masked language modeling"),ky.forEach(t),Qf=i(_h," head on top."),_h.forEach(t),Vf=d(Rt),yn=n(Rt,"P",{});var vh=r(yn);Jf=i(vh,"This model inherits from "),Di=n(vh,"A",{href:!0});var wy=r(Di);Kf=i(wy,"PreTrainedModel"),wy.forEach(t),Gf=i(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),Xf=d(Rt),$n=n(Rt,"P",{});var Th=r($n);Yf=i(Th,"This model is also a PyTorch "),Dn=n(Th,"A",{href:!0,rel:!0});var yy=r(Dn);Zf=i(yy,"torch.nn.Module"),yy.forEach(t),em=i(Th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th.forEach(t),tm=d(Rt),Ye=n(Rt,"DIV",{class:!0});var Ut=r(Ye);k(Fn.$$.fragment,Ut),om=d(Ut),fo=n(Ut,"P",{});var tl=r(fo);sm=i(tl,"The "),Fi=n(tl,"A",{href:!0});var $y=r(Fi);nm=i($y,"DistilBertForMaskedLM"),$y.forEach(t),rm=i(tl," forward method, overrides the "),Nl=n(tl,"CODE",{});var Dy=r(Nl);am=i(Dy,"__call__"),Dy.forEach(t),im=i(tl," special method."),tl.forEach(t),lm=d(Ut),k(ns.$$.fragment,Ut),dm=d(Ut),Ll=n(Ut,"P",{});var Fy=r(Ll);cm=i(Fy,"Example:"),Fy.forEach(t),pm=d(Ut),k(Bn.$$.fragment,Ut),Ut.forEach(t),Rt.forEach(t),Mp=d(o),mo=n(o,"H2",{class:!0});var bh=r(mo);rs=n(bh,"A",{id:!0,class:!0,href:!0});var By=r(rs);Il=n(By,"SPAN",{});var My=r(Il);k(Mn.$$.fragment,My),My.forEach(t),By.forEach(t),hm=d(bh),Sl=n(bh,"SPAN",{});var Ey=r(Sl);um=i(Ey,"DistilBertForSequenceClassification"),Ey.forEach(t),bh.forEach(t),Ep=d(o),Ve=n(o,"DIV",{class:!0});var Ht=r(Ve);k(En.$$.fragment,Ht),fm=d(Ht),Wl=n(Ht,"P",{});var xy=r(Wl);mm=i(xy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xy.forEach(t),gm=d(Ht),xn=n(Ht,"P",{});var kh=r(xn);_m=i(kh,"This model inherits from "),Bi=n(kh,"A",{href:!0});var zy=r(Bi);vm=i(zy,"PreTrainedModel"),zy.forEach(t),Tm=i(kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh.forEach(t),bm=d(Ht),zn=n(Ht,"P",{});var wh=r(zn);km=i(wh,"This model is also a PyTorch "),jn=n(wh,"A",{href:!0,rel:!0});var jy=r(jn);wm=i(jy,"torch.nn.Module"),jy.forEach(t),ym=i(wh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh.forEach(t),$m=d(Ht),Ce=n(Ht,"DIV",{class:!0});var ct=r(Ce);k(Cn.$$.fragment,ct),Dm=d(ct),go=n(ct,"P",{});var ol=r(go);Fm=i(ol,"The "),Mi=n(ol,"A",{href:!0});var Cy=r(Mi);Bm=i(Cy,"DistilBertForSequenceClassification"),Cy.forEach(t),Mm=i(ol," forward method, overrides the "),Rl=n(ol,"CODE",{});var Py=r(Rl);Em=i(Py,"__call__"),Py.forEach(t),xm=i(ol," special method."),ol.forEach(t),zm=d(ct),k(as.$$.fragment,ct),jm=d(ct),Ul=n(ct,"P",{});var qy=r(Ul);Cm=i(qy,"Example of single-label classification:"),qy.forEach(t),Pm=d(ct),k(Pn.$$.fragment,ct),qm=d(ct),Hl=n(ct,"P",{});var Ay=r(Hl);Am=i(Ay,"Example of multi-label classification:"),Ay.forEach(t),Om=d(ct),k(qn.$$.fragment,ct),ct.forEach(t),Ht.forEach(t),xp=d(o),_o=n(o,"H2",{class:!0});var yh=r(_o);is=n(yh,"A",{id:!0,class:!0,href:!0});var Oy=r(is);Ql=n(Oy,"SPAN",{});var Ny=r(Ql);k(An.$$.fragment,Ny),Ny.forEach(t),Oy.forEach(t),Nm=d(yh),Vl=n(yh,"SPAN",{});var Ly=r(Vl);Lm=i(Ly,"DistilBertForMultipleChoice"),Ly.forEach(t),yh.forEach(t),zp=d(o),Je=n(o,"DIV",{class:!0});var Qt=r(Je);k(On.$$.fragment,Qt),Im=d(Qt),Jl=n(Qt,"P",{});var Iy=r(Jl);Sm=i(Iy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iy.forEach(t),Wm=d(Qt),Nn=n(Qt,"P",{});var $h=r(Nn);Rm=i($h,"This model inherits from "),Ei=n($h,"A",{href:!0});var Sy=r(Ei);Um=i(Sy,"PreTrainedModel"),Sy.forEach(t),Hm=i($h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h.forEach(t),Qm=d(Qt),Ln=n(Qt,"P",{});var Dh=r(Ln);Vm=i(Dh,"This model is also a PyTorch "),In=n(Dh,"A",{href:!0,rel:!0});var Wy=r(In);Jm=i(Wy,"torch.nn.Module"),Wy.forEach(t),Km=i(Dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dh.forEach(t),Gm=d(Qt),Ze=n(Qt,"DIV",{class:!0});var Vt=r(Ze);k(Sn.$$.fragment,Vt),Xm=d(Vt),vo=n(Vt,"P",{});var sl=r(vo);Ym=i(sl,"The "),xi=n(sl,"A",{href:!0});var Ry=r(xi);Zm=i(Ry,"DistilBertForMultipleChoice"),Ry.forEach(t),eg=i(sl," forward method, overrides the "),Kl=n(sl,"CODE",{});var Uy=r(Kl);tg=i(Uy,"__call__"),Uy.forEach(t),og=i(sl," special method."),sl.forEach(t),sg=d(Vt),k(ls.$$.fragment,Vt),ng=d(Vt),Gl=n(Vt,"P",{});var Hy=r(Gl);rg=i(Hy,"Examples:"),Hy.forEach(t),ag=d(Vt),k(Wn.$$.fragment,Vt),Vt.forEach(t),Qt.forEach(t),jp=d(o),To=n(o,"H2",{class:!0});var Fh=r(To);ds=n(Fh,"A",{id:!0,class:!0,href:!0});var Qy=r(ds);Xl=n(Qy,"SPAN",{});var Vy=r(Xl);k(Rn.$$.fragment,Vy),Vy.forEach(t),Qy.forEach(t),ig=d(Fh),Yl=n(Fh,"SPAN",{});var Jy=r(Yl);lg=i(Jy,"DistilBertForTokenClassification"),Jy.forEach(t),Fh.forEach(t),Cp=d(o),Ke=n(o,"DIV",{class:!0});var Jt=r(Ke);k(Un.$$.fragment,Jt),dg=d(Jt),Zl=n(Jt,"P",{});var Ky=r(Zl);cg=i(Ky,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ky.forEach(t),pg=d(Jt),Hn=n(Jt,"P",{});var Bh=r(Hn);hg=i(Bh,"This model inherits from "),zi=n(Bh,"A",{href:!0});var Gy=r(zi);ug=i(Gy,"PreTrainedModel"),Gy.forEach(t),fg=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh.forEach(t),mg=d(Jt),Qn=n(Jt,"P",{});var Mh=r(Qn);gg=i(Mh,"This model is also a PyTorch "),Vn=n(Mh,"A",{href:!0,rel:!0});var Xy=r(Vn);_g=i(Xy,"torch.nn.Module"),Xy.forEach(t),vg=i(Mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mh.forEach(t),Tg=d(Jt),et=n(Jt,"DIV",{class:!0});var Kt=r(et);k(Jn.$$.fragment,Kt),bg=d(Kt),bo=n(Kt,"P",{});var nl=r(bo);kg=i(nl,"The "),ji=n(nl,"A",{href:!0});var Yy=r(ji);wg=i(Yy,"DistilBertForTokenClassification"),Yy.forEach(t),yg=i(nl," forward method, overrides the "),ed=n(nl,"CODE",{});var Zy=r(ed);$g=i(Zy,"__call__"),Zy.forEach(t),Dg=i(nl," special method."),nl.forEach(t),Fg=d(Kt),k(cs.$$.fragment,Kt),Bg=d(Kt),td=n(Kt,"P",{});var e0=r(td);Mg=i(e0,"Example:"),e0.forEach(t),Eg=d(Kt),k(Kn.$$.fragment,Kt),Kt.forEach(t),Jt.forEach(t),Pp=d(o),ko=n(o,"H2",{class:!0});var Eh=r(ko);ps=n(Eh,"A",{id:!0,class:!0,href:!0});var t0=r(ps);od=n(t0,"SPAN",{});var o0=r(od);k(Gn.$$.fragment,o0),o0.forEach(t),t0.forEach(t),xg=d(Eh),sd=n(Eh,"SPAN",{});var s0=r(sd);zg=i(s0,"DistilBertForQuestionAnswering"),s0.forEach(t),Eh.forEach(t),qp=d(o),Ge=n(o,"DIV",{class:!0});var Gt=r(Ge);k(Xn.$$.fragment,Gt),jg=d(Gt),wo=n(Gt,"P",{});var rl=r(wo);Cg=i(rl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),nd=n(rl,"CODE",{});var n0=r(nd);Pg=i(n0,"span start logits"),n0.forEach(t),qg=i(rl," and "),rd=n(rl,"CODE",{});var r0=r(rd);Ag=i(r0,"span end logits"),r0.forEach(t),Og=i(rl,")."),rl.forEach(t),Ng=d(Gt),Yn=n(Gt,"P",{});var xh=r(Yn);Lg=i(xh,"This model inherits from "),Ci=n(xh,"A",{href:!0});var a0=r(Ci);Ig=i(a0,"PreTrainedModel"),a0.forEach(t),Sg=i(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),Wg=d(Gt),Zn=n(Gt,"P",{});var zh=r(Zn);Rg=i(zh,"This model is also a PyTorch "),er=n(zh,"A",{href:!0,rel:!0});var i0=r(er);Ug=i(i0,"torch.nn.Module"),i0.forEach(t),Hg=i(zh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zh.forEach(t),Qg=d(Gt),tt=n(Gt,"DIV",{class:!0});var Xt=r(tt);k(tr.$$.fragment,Xt),Vg=d(Xt),yo=n(Xt,"P",{});var al=r(yo);Jg=i(al,"The "),Pi=n(al,"A",{href:!0});var l0=r(Pi);Kg=i(l0,"DistilBertForQuestionAnswering"),l0.forEach(t),Gg=i(al," forward method, overrides the "),ad=n(al,"CODE",{});var d0=r(ad);Xg=i(d0,"__call__"),d0.forEach(t),Yg=i(al," special method."),al.forEach(t),Zg=d(Xt),k(hs.$$.fragment,Xt),e_=d(Xt),id=n(Xt,"P",{});var c0=r(id);t_=i(c0,"Example:"),c0.forEach(t),o_=d(Xt),k(or.$$.fragment,Xt),Xt.forEach(t),Gt.forEach(t),Ap=d(o),$o=n(o,"H2",{class:!0});var jh=r($o);us=n(jh,"A",{id:!0,class:!0,href:!0});var p0=r(us);ld=n(p0,"SPAN",{});var h0=r(ld);k(sr.$$.fragment,h0),h0.forEach(t),p0.forEach(t),s_=d(jh),dd=n(jh,"SPAN",{});var u0=r(dd);n_=i(u0,"TFDistilBertModel"),u0.forEach(t),jh.forEach(t),Op=d(o),Pe=n(o,"DIV",{class:!0});var bt=r(Pe);k(nr.$$.fragment,bt),r_=d(bt),cd=n(bt,"P",{});var f0=r(cd);a_=i(f0,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),f0.forEach(t),i_=d(bt),rr=n(bt,"P",{});var Ch=r(rr);l_=i(Ch,"This model inherits from "),qi=n(Ch,"A",{href:!0});var m0=r(qi);d_=i(m0,"TFPreTrainedModel"),m0.forEach(t),c_=i(Ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ch.forEach(t),p_=d(bt),ar=n(bt,"P",{});var Ph=r(ar);h_=i(Ph,"This model is also a "),ir=n(Ph,"A",{href:!0,rel:!0});var g0=r(ir);u_=i(g0,"tf.keras.Model"),g0.forEach(t),f_=i(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),m_=d(bt),k(fs.$$.fragment,bt),g_=d(bt),ot=n(bt,"DIV",{class:!0});var Yt=r(ot);k(lr.$$.fragment,Yt),__=d(Yt),Do=n(Yt,"P",{});var il=r(Do);v_=i(il,"The "),Ai=n(il,"A",{href:!0});var _0=r(Ai);T_=i(_0,"TFDistilBertModel"),_0.forEach(t),b_=i(il," forward method, overrides the "),pd=n(il,"CODE",{});var v0=r(pd);k_=i(v0,"__call__"),v0.forEach(t),w_=i(il," special method."),il.forEach(t),y_=d(Yt),k(ms.$$.fragment,Yt),$_=d(Yt),hd=n(Yt,"P",{});var T0=r(hd);D_=i(T0,"Example:"),T0.forEach(t),F_=d(Yt),k(dr.$$.fragment,Yt),Yt.forEach(t),bt.forEach(t),Np=d(o),Fo=n(o,"H2",{class:!0});var qh=r(Fo);gs=n(qh,"A",{id:!0,class:!0,href:!0});var b0=r(gs);ud=n(b0,"SPAN",{});var k0=r(ud);k(cr.$$.fragment,k0),k0.forEach(t),b0.forEach(t),B_=d(qh),fd=n(qh,"SPAN",{});var w0=r(fd);M_=i(w0,"TFDistilBertForMaskedLM"),w0.forEach(t),qh.forEach(t),Lp=d(o),qe=n(o,"DIV",{class:!0});var kt=r(qe);k(pr.$$.fragment,kt),E_=d(kt),hr=n(kt,"P",{});var Ah=r(hr);x_=i(Ah,"DistilBert Model with a "),md=n(Ah,"CODE",{});var y0=r(md);z_=i(y0,"masked language modeling"),y0.forEach(t),j_=i(Ah," head on top."),Ah.forEach(t),C_=d(kt),ur=n(kt,"P",{});var Oh=r(ur);P_=i(Oh,"This model inherits from "),Oi=n(Oh,"A",{href:!0});var $0=r(Oi);q_=i($0,"TFPreTrainedModel"),$0.forEach(t),A_=i(Oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh.forEach(t),O_=d(kt),fr=n(kt,"P",{});var Nh=r(fr);N_=i(Nh,"This model is also a "),mr=n(Nh,"A",{href:!0,rel:!0});var D0=r(mr);L_=i(D0,"tf.keras.Model"),D0.forEach(t),I_=i(Nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),S_=d(kt),k(_s.$$.fragment,kt),W_=d(kt),Ie=n(kt,"DIV",{class:!0});var wt=r(Ie);k(gr.$$.fragment,wt),R_=d(wt),Bo=n(wt,"P",{});var ll=r(Bo);U_=i(ll,"The "),Ni=n(ll,"A",{href:!0});var F0=r(Ni);H_=i(F0,"TFDistilBertForMaskedLM"),F0.forEach(t),Q_=i(ll," forward method, overrides the "),gd=n(ll,"CODE",{});var B0=r(gd);V_=i(B0,"__call__"),B0.forEach(t),J_=i(ll," special method."),ll.forEach(t),K_=d(wt),k(vs.$$.fragment,wt),G_=d(wt),_d=n(wt,"P",{});var M0=r(_d);X_=i(M0,"Example:"),M0.forEach(t),Y_=d(wt),k(_r.$$.fragment,wt),Z_=d(wt),k(vr.$$.fragment,wt),wt.forEach(t),kt.forEach(t),Ip=d(o),Mo=n(o,"H2",{class:!0});var Lh=r(Mo);Ts=n(Lh,"A",{id:!0,class:!0,href:!0});var E0=r(Ts);vd=n(E0,"SPAN",{});var x0=r(vd);k(Tr.$$.fragment,x0),x0.forEach(t),E0.forEach(t),ev=d(Lh),Td=n(Lh,"SPAN",{});var z0=r(Td);tv=i(z0,"TFDistilBertForSequenceClassification"),z0.forEach(t),Lh.forEach(t),Sp=d(o),Ae=n(o,"DIV",{class:!0});var yt=r(Ae);k(br.$$.fragment,yt),ov=d(yt),bd=n(yt,"P",{});var j0=r(bd);sv=i(j0,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),j0.forEach(t),nv=d(yt),kr=n(yt,"P",{});var Ih=r(kr);rv=i(Ih,"This model inherits from "),Li=n(Ih,"A",{href:!0});var C0=r(Li);av=i(C0,"TFPreTrainedModel"),C0.forEach(t),iv=i(Ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih.forEach(t),lv=d(yt),wr=n(yt,"P",{});var Sh=r(wr);dv=i(Sh,"This model is also a "),yr=n(Sh,"A",{href:!0,rel:!0});var P0=r(yr);cv=i(P0,"tf.keras.Model"),P0.forEach(t),pv=i(Sh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sh.forEach(t),hv=d(yt),k(bs.$$.fragment,yt),uv=d(yt),Se=n(yt,"DIV",{class:!0});var $t=r(Se);k($r.$$.fragment,$t),fv=d($t),Eo=n($t,"P",{});var dl=r(Eo);mv=i(dl,"The "),Ii=n(dl,"A",{href:!0});var q0=r(Ii);gv=i(q0,"TFDistilBertForSequenceClassification"),q0.forEach(t),_v=i(dl," forward method, overrides the "),kd=n(dl,"CODE",{});var A0=r(kd);vv=i(A0,"__call__"),A0.forEach(t),Tv=i(dl," special method."),dl.forEach(t),bv=d($t),k(ks.$$.fragment,$t),kv=d($t),wd=n($t,"P",{});var O0=r(wd);wv=i(O0,"Example:"),O0.forEach(t),yv=d($t),k(Dr.$$.fragment,$t),$v=d($t),k(Fr.$$.fragment,$t),$t.forEach(t),yt.forEach(t),Wp=d(o),xo=n(o,"H2",{class:!0});var Wh=r(xo);ws=n(Wh,"A",{id:!0,class:!0,href:!0});var N0=r(ws);yd=n(N0,"SPAN",{});var L0=r(yd);k(Br.$$.fragment,L0),L0.forEach(t),N0.forEach(t),Dv=d(Wh),$d=n(Wh,"SPAN",{});var I0=r($d);Fv=i(I0,"TFDistilBertForMultipleChoice"),I0.forEach(t),Wh.forEach(t),Rp=d(o),Oe=n(o,"DIV",{class:!0});var Dt=r(Oe);k(Mr.$$.fragment,Dt),Bv=d(Dt),Dd=n(Dt,"P",{});var S0=r(Dd);Mv=i(S0,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),S0.forEach(t),Ev=d(Dt),Er=n(Dt,"P",{});var Rh=r(Er);xv=i(Rh,"This model inherits from "),Si=n(Rh,"A",{href:!0});var W0=r(Si);zv=i(W0,"TFPreTrainedModel"),W0.forEach(t),jv=i(Rh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh.forEach(t),Cv=d(Dt),xr=n(Dt,"P",{});var Uh=r(xr);Pv=i(Uh,"This model is also a "),zr=n(Uh,"A",{href:!0,rel:!0});var R0=r(zr);qv=i(R0,"tf.keras.Model"),R0.forEach(t),Av=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),Ov=d(Dt),k(ys.$$.fragment,Dt),Nv=d(Dt),st=n(Dt,"DIV",{class:!0});var Zt=r(st);k(jr.$$.fragment,Zt),Lv=d(Zt),zo=n(Zt,"P",{});var cl=r(zo);Iv=i(cl,"The "),Wi=n(cl,"A",{href:!0});var U0=r(Wi);Sv=i(U0,"TFDistilBertForMultipleChoice"),U0.forEach(t),Wv=i(cl," forward method, overrides the "),Fd=n(cl,"CODE",{});var H0=r(Fd);Rv=i(H0,"__call__"),H0.forEach(t),Uv=i(cl," special method."),cl.forEach(t),Hv=d(Zt),k($s.$$.fragment,Zt),Qv=d(Zt),Bd=n(Zt,"P",{});var Q0=r(Bd);Vv=i(Q0,"Example:"),Q0.forEach(t),Jv=d(Zt),k(Cr.$$.fragment,Zt),Zt.forEach(t),Dt.forEach(t),Up=d(o),jo=n(o,"H2",{class:!0});var Hh=r(jo);Ds=n(Hh,"A",{id:!0,class:!0,href:!0});var V0=r(Ds);Md=n(V0,"SPAN",{});var J0=r(Md);k(Pr.$$.fragment,J0),J0.forEach(t),V0.forEach(t),Kv=d(Hh),Ed=n(Hh,"SPAN",{});var K0=r(Ed);Gv=i(K0,"TFDistilBertForTokenClassification"),K0.forEach(t),Hh.forEach(t),Hp=d(o),Ne=n(o,"DIV",{class:!0});var Ft=r(Ne);k(qr.$$.fragment,Ft),Xv=d(Ft),xd=n(Ft,"P",{});var G0=r(xd);Yv=i(G0,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),G0.forEach(t),Zv=d(Ft),Ar=n(Ft,"P",{});var Qh=r(Ar);eT=i(Qh,"This model inherits from "),Ri=n(Qh,"A",{href:!0});var X0=r(Ri);tT=i(X0,"TFPreTrainedModel"),X0.forEach(t),oT=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),sT=d(Ft),Or=n(Ft,"P",{});var Vh=r(Or);nT=i(Vh,"This model is also a "),Nr=n(Vh,"A",{href:!0,rel:!0});var Y0=r(Nr);rT=i(Y0,"tf.keras.Model"),Y0.forEach(t),aT=i(Vh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vh.forEach(t),iT=d(Ft),k(Fs.$$.fragment,Ft),lT=d(Ft),We=n(Ft,"DIV",{class:!0});var Bt=r(We);k(Lr.$$.fragment,Bt),dT=d(Bt),Co=n(Bt,"P",{});var pl=r(Co);cT=i(pl,"The "),Ui=n(pl,"A",{href:!0});var Z0=r(Ui);pT=i(Z0,"TFDistilBertForTokenClassification"),Z0.forEach(t),hT=i(pl," forward method, overrides the "),zd=n(pl,"CODE",{});var e$=r(zd);uT=i(e$,"__call__"),e$.forEach(t),fT=i(pl," special method."),pl.forEach(t),mT=d(Bt),k(Bs.$$.fragment,Bt),gT=d(Bt),jd=n(Bt,"P",{});var t$=r(jd);_T=i(t$,"Example:"),t$.forEach(t),vT=d(Bt),k(Ir.$$.fragment,Bt),TT=d(Bt),k(Sr.$$.fragment,Bt),Bt.forEach(t),Ft.forEach(t),Qp=d(o),Po=n(o,"H2",{class:!0});var Jh=r(Po);Ms=n(Jh,"A",{id:!0,class:!0,href:!0});var o$=r(Ms);Cd=n(o$,"SPAN",{});var s$=r(Cd);k(Wr.$$.fragment,s$),s$.forEach(t),o$.forEach(t),bT=d(Jh),Pd=n(Jh,"SPAN",{});var n$=r(Pd);kT=i(n$,"TFDistilBertForQuestionAnswering"),n$.forEach(t),Jh.forEach(t),Vp=d(o),Le=n(o,"DIV",{class:!0});var Mt=r(Le);k(Rr.$$.fragment,Mt),wT=d(Mt),qo=n(Mt,"P",{});var hl=r(qo);yT=i(hl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),qd=n(hl,"CODE",{});var r$=r(qd);$T=i(r$,"span start logits"),r$.forEach(t),DT=i(hl," and "),Ad=n(hl,"CODE",{});var a$=r(Ad);FT=i(a$,"span end logits"),a$.forEach(t),BT=i(hl,")."),hl.forEach(t),MT=d(Mt),Ur=n(Mt,"P",{});var Kh=r(Ur);ET=i(Kh,"This model inherits from "),Hi=n(Kh,"A",{href:!0});var i$=r(Hi);xT=i(i$,"TFPreTrainedModel"),i$.forEach(t),zT=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh.forEach(t),jT=d(Mt),Hr=n(Mt,"P",{});var Gh=r(Hr);CT=i(Gh,"This model is also a "),Qr=n(Gh,"A",{href:!0,rel:!0});var l$=r(Qr);PT=i(l$,"tf.keras.Model"),l$.forEach(t),qT=i(Gh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gh.forEach(t),AT=d(Mt),k(Es.$$.fragment,Mt),OT=d(Mt),Re=n(Mt,"DIV",{class:!0});var Et=r(Re);k(Vr.$$.fragment,Et),NT=d(Et),Ao=n(Et,"P",{});var ul=r(Ao);LT=i(ul,"The "),Qi=n(ul,"A",{href:!0});var d$=r(Qi);IT=i(d$,"TFDistilBertForQuestionAnswering"),d$.forEach(t),ST=i(ul," forward method, overrides the "),Od=n(ul,"CODE",{});var c$=r(Od);WT=i(c$,"__call__"),c$.forEach(t),RT=i(ul," special method."),ul.forEach(t),UT=d(Et),k(xs.$$.fragment,Et),HT=d(Et),Nd=n(Et,"P",{});var p$=r(Nd);QT=i(p$,"Example:"),p$.forEach(t),VT=d(Et),k(Jr.$$.fragment,Et),JT=d(Et),k(Kr.$$.fragment,Et),Et.forEach(t),Mt.forEach(t),Jp=d(o),Oo=n(o,"H2",{class:!0});var Xh=r(Oo);zs=n(Xh,"A",{id:!0,class:!0,href:!0});var h$=r(zs);Ld=n(h$,"SPAN",{});var u$=r(Ld);k(Gr.$$.fragment,u$),u$.forEach(t),h$.forEach(t),KT=d(Xh),Id=n(Xh,"SPAN",{});var f$=r(Id);GT=i(f$,"FlaxDistilBertModel"),f$.forEach(t),Xh.forEach(t),Kp=d(o),Be=n(o,"DIV",{class:!0});var pt=r(Be);k(Xr.$$.fragment,pt),XT=d(pt),Sd=n(pt,"P",{});var m$=r(Sd);YT=i(m$,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),m$.forEach(t),ZT=d(pt),Yr=n(pt,"P",{});var Yh=r(Yr);eb=i(Yh,"This model inherits from "),Vi=n(Yh,"A",{href:!0});var g$=r(Vi);tb=i(g$,"FlaxPreTrainedModel"),g$.forEach(t),ob=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yh.forEach(t),sb=d(pt),Zr=n(pt,"P",{});var Zh=r(Zr);nb=i(Zh,"This model is also a Flax Linen "),ea=n(Zh,"A",{href:!0,rel:!0});var _$=r(ea);rb=i(_$,"flax.linen.Module"),_$.forEach(t),ab=i(Zh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),ib=d(pt),Wd=n(pt,"P",{});var v$=r(Wd);lb=i(v$,"Finally, this model supports inherent JAX features such as:"),v$.forEach(t),db=d(pt),zt=n(pt,"UL",{});var Qs=r(zt);Rd=n(Qs,"LI",{});var T$=r(Rd);ta=n(T$,"A",{href:!0,rel:!0});var b$=r(ta);cb=i(b$,"Just-In-Time (JIT) compilation"),b$.forEach(t),T$.forEach(t),pb=d(Qs),Ud=n(Qs,"LI",{});var k$=r(Ud);oa=n(k$,"A",{href:!0,rel:!0});var w$=r(oa);hb=i(w$,"Automatic Differentiation"),w$.forEach(t),k$.forEach(t),ub=d(Qs),Hd=n(Qs,"LI",{});var y$=r(Hd);sa=n(y$,"A",{href:!0,rel:!0});var $$=r(sa);fb=i($$,"Vectorization"),$$.forEach(t),y$.forEach(t),mb=d(Qs),Qd=n(Qs,"LI",{});var D$=r(Qd);na=n(D$,"A",{href:!0,rel:!0});var F$=r(na);gb=i(F$,"Parallelization"),F$.forEach(t),D$.forEach(t),Qs.forEach(t),_b=d(pt),nt=n(pt,"DIV",{class:!0});var eo=r(nt);k(ra.$$.fragment,eo),vb=d(eo),No=n(eo,"P",{});var fl=r(No);Tb=i(fl,"The "),Vd=n(fl,"CODE",{});var B$=r(Vd);bb=i(B$,"FlaxDistilBertPreTrainedModel"),B$.forEach(t),kb=i(fl,"forward method, overrides the "),Jd=n(fl,"CODE",{});var M$=r(Jd);wb=i(M$,"__call__"),M$.forEach(t),yb=i(fl," special method."),fl.forEach(t),$b=d(eo),k(js.$$.fragment,eo),Db=d(eo),Kd=n(eo,"P",{});var E$=r(Kd);Fb=i(E$,"Example:"),E$.forEach(t),Bb=d(eo),k(aa.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Gp=d(o),Lo=n(o,"H2",{class:!0});var eu=r(Lo);Cs=n(eu,"A",{id:!0,class:!0,href:!0});var x$=r(Cs);Gd=n(x$,"SPAN",{});var z$=r(Gd);k(ia.$$.fragment,z$),z$.forEach(t),x$.forEach(t),Mb=d(eu),Xd=n(eu,"SPAN",{});var j$=r(Xd);Eb=i(j$,"FlaxDistilBertForMaskedLM"),j$.forEach(t),eu.forEach(t),Xp=d(o),Me=n(o,"DIV",{class:!0});var ht=r(Me);k(la.$$.fragment,ht),xb=d(ht),da=n(ht,"P",{});var tu=r(da);zb=i(tu,"DistilBert Model with a "),Yd=n(tu,"CODE",{});var C$=r(Yd);jb=i(C$,"language modeling"),C$.forEach(t),Cb=i(tu," head on top."),tu.forEach(t),Pb=d(ht),ca=n(ht,"P",{});var ou=r(ca);qb=i(ou,"This model inherits from "),Ji=n(ou,"A",{href:!0});var P$=r(Ji);Ab=i(P$,"FlaxPreTrainedModel"),P$.forEach(t),Ob=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),Nb=d(ht),pa=n(ht,"P",{});var su=r(pa);Lb=i(su,"This model is also a Flax Linen "),ha=n(su,"A",{href:!0,rel:!0});var q$=r(ha);Ib=i(q$,"flax.linen.Module"),q$.forEach(t),Sb=i(su,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su.forEach(t),Wb=d(ht),Zd=n(ht,"P",{});var A$=r(Zd);Rb=i(A$,"Finally, this model supports inherent JAX features such as:"),A$.forEach(t),Ub=d(ht),jt=n(ht,"UL",{});var Vs=r(jt);ec=n(Vs,"LI",{});var O$=r(ec);ua=n(O$,"A",{href:!0,rel:!0});var N$=r(ua);Hb=i(N$,"Just-In-Time (JIT) compilation"),N$.forEach(t),O$.forEach(t),Qb=d(Vs),tc=n(Vs,"LI",{});var L$=r(tc);fa=n(L$,"A",{href:!0,rel:!0});var I$=r(fa);Vb=i(I$,"Automatic Differentiation"),I$.forEach(t),L$.forEach(t),Jb=d(Vs),oc=n(Vs,"LI",{});var S$=r(oc);ma=n(S$,"A",{href:!0,rel:!0});var W$=r(ma);Kb=i(W$,"Vectorization"),W$.forEach(t),S$.forEach(t),Gb=d(Vs),sc=n(Vs,"LI",{});var R$=r(sc);ga=n(R$,"A",{href:!0,rel:!0});var U$=r(ga);Xb=i(U$,"Parallelization"),U$.forEach(t),R$.forEach(t),Vs.forEach(t),Yb=d(ht),rt=n(ht,"DIV",{class:!0});var to=r(rt);k(_a.$$.fragment,to),Zb=d(to),Io=n(to,"P",{});var ml=r(Io);ek=i(ml,"The "),nc=n(ml,"CODE",{});var H$=r(nc);tk=i(H$,"FlaxDistilBertPreTrainedModel"),H$.forEach(t),ok=i(ml,"forward method, overrides the "),rc=n(ml,"CODE",{});var Q$=r(rc);sk=i(Q$,"__call__"),Q$.forEach(t),nk=i(ml," special method."),ml.forEach(t),rk=d(to),k(Ps.$$.fragment,to),ak=d(to),ac=n(to,"P",{});var V$=r(ac);ik=i(V$,"Example:"),V$.forEach(t),lk=d(to),k(va.$$.fragment,to),to.forEach(t),ht.forEach(t),Yp=d(o),So=n(o,"H2",{class:!0});var nu=r(So);qs=n(nu,"A",{id:!0,class:!0,href:!0});var J$=r(qs);ic=n(J$,"SPAN",{});var K$=r(ic);k(Ta.$$.fragment,K$),K$.forEach(t),J$.forEach(t),dk=d(nu),lc=n(nu,"SPAN",{});var G$=r(lc);ck=i(G$,"FlaxDistilBertForSequenceClassification"),G$.forEach(t),nu.forEach(t),Zp=d(o),Ee=n(o,"DIV",{class:!0});var ut=r(Ee);k(ba.$$.fragment,ut),pk=d(ut),dc=n(ut,"P",{});var X$=r(dc);hk=i(X$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),X$.forEach(t),uk=d(ut),ka=n(ut,"P",{});var ru=r(ka);fk=i(ru,"This model inherits from "),Ki=n(ru,"A",{href:!0});var Y$=r(Ki);mk=i(Y$,"FlaxPreTrainedModel"),Y$.forEach(t),gk=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ru.forEach(t),_k=d(ut),wa=n(ut,"P",{});var au=r(wa);vk=i(au,"This model is also a Flax Linen "),ya=n(au,"A",{href:!0,rel:!0});var Z$=r(ya);Tk=i(Z$,"flax.linen.Module"),Z$.forEach(t),bk=i(au,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),au.forEach(t),kk=d(ut),cc=n(ut,"P",{});var eD=r(cc);wk=i(eD,"Finally, this model supports inherent JAX features such as:"),eD.forEach(t),yk=d(ut),Ct=n(ut,"UL",{});var Js=r(Ct);pc=n(Js,"LI",{});var tD=r(pc);$a=n(tD,"A",{href:!0,rel:!0});var oD=r($a);$k=i(oD,"Just-In-Time (JIT) compilation"),oD.forEach(t),tD.forEach(t),Dk=d(Js),hc=n(Js,"LI",{});var sD=r(hc);Da=n(sD,"A",{href:!0,rel:!0});var nD=r(Da);Fk=i(nD,"Automatic Differentiation"),nD.forEach(t),sD.forEach(t),Bk=d(Js),uc=n(Js,"LI",{});var rD=r(uc);Fa=n(rD,"A",{href:!0,rel:!0});var aD=r(Fa);Mk=i(aD,"Vectorization"),aD.forEach(t),rD.forEach(t),Ek=d(Js),fc=n(Js,"LI",{});var iD=r(fc);Ba=n(iD,"A",{href:!0,rel:!0});var lD=r(Ba);xk=i(lD,"Parallelization"),lD.forEach(t),iD.forEach(t),Js.forEach(t),zk=d(ut),at=n(ut,"DIV",{class:!0});var oo=r(at);k(Ma.$$.fragment,oo),jk=d(oo),Wo=n(oo,"P",{});var gl=r(Wo);Ck=i(gl,"The "),mc=n(gl,"CODE",{});var dD=r(mc);Pk=i(dD,"FlaxDistilBertPreTrainedModel"),dD.forEach(t),qk=i(gl,"forward method, overrides the "),gc=n(gl,"CODE",{});var cD=r(gc);Ak=i(cD,"__call__"),cD.forEach(t),Ok=i(gl," special method."),gl.forEach(t),Nk=d(oo),k(As.$$.fragment,oo),Lk=d(oo),_c=n(oo,"P",{});var pD=r(_c);Ik=i(pD,"Example:"),pD.forEach(t),Sk=d(oo),k(Ea.$$.fragment,oo),oo.forEach(t),ut.forEach(t),eh=d(o),Ro=n(o,"H2",{class:!0});var iu=r(Ro);Os=n(iu,"A",{id:!0,class:!0,href:!0});var hD=r(Os);vc=n(hD,"SPAN",{});var uD=r(vc);k(xa.$$.fragment,uD),uD.forEach(t),hD.forEach(t),Wk=d(iu),Tc=n(iu,"SPAN",{});var fD=r(Tc);Rk=i(fD,"FlaxDistilBertForMultipleChoice"),fD.forEach(t),iu.forEach(t),th=d(o),xe=n(o,"DIV",{class:!0});var ft=r(xe);k(za.$$.fragment,ft),Uk=d(ft),bc=n(ft,"P",{});var mD=r(bc);Hk=i(mD,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mD.forEach(t),Qk=d(ft),ja=n(ft,"P",{});var lu=r(ja);Vk=i(lu,"This model inherits from "),Gi=n(lu,"A",{href:!0});var gD=r(Gi);Jk=i(gD,"FlaxPreTrainedModel"),gD.forEach(t),Kk=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lu.forEach(t),Gk=d(ft),Ca=n(ft,"P",{});var du=r(Ca);Xk=i(du,"This model is also a Flax Linen "),Pa=n(du,"A",{href:!0,rel:!0});var _D=r(Pa);Yk=i(_D,"flax.linen.Module"),_D.forEach(t),Zk=i(du,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),du.forEach(t),e1=d(ft),kc=n(ft,"P",{});var vD=r(kc);t1=i(vD,"Finally, this model supports inherent JAX features such as:"),vD.forEach(t),o1=d(ft),Pt=n(ft,"UL",{});var Ks=r(Pt);wc=n(Ks,"LI",{});var TD=r(wc);qa=n(TD,"A",{href:!0,rel:!0});var bD=r(qa);s1=i(bD,"Just-In-Time (JIT) compilation"),bD.forEach(t),TD.forEach(t),n1=d(Ks),yc=n(Ks,"LI",{});var kD=r(yc);Aa=n(kD,"A",{href:!0,rel:!0});var wD=r(Aa);r1=i(wD,"Automatic Differentiation"),wD.forEach(t),kD.forEach(t),a1=d(Ks),$c=n(Ks,"LI",{});var yD=r($c);Oa=n(yD,"A",{href:!0,rel:!0});var $D=r(Oa);i1=i($D,"Vectorization"),$D.forEach(t),yD.forEach(t),l1=d(Ks),Dc=n(Ks,"LI",{});var DD=r(Dc);Na=n(DD,"A",{href:!0,rel:!0});var FD=r(Na);d1=i(FD,"Parallelization"),FD.forEach(t),DD.forEach(t),Ks.forEach(t),c1=d(ft),it=n(ft,"DIV",{class:!0});var so=r(it);k(La.$$.fragment,so),p1=d(so),Uo=n(so,"P",{});var _l=r(Uo);h1=i(_l,"The "),Fc=n(_l,"CODE",{});var BD=r(Fc);u1=i(BD,"FlaxDistilBertPreTrainedModel"),BD.forEach(t),f1=i(_l,"forward method, overrides the "),Bc=n(_l,"CODE",{});var MD=r(Bc);m1=i(MD,"__call__"),MD.forEach(t),g1=i(_l," special method."),_l.forEach(t),_1=d(so),k(Ns.$$.fragment,so),v1=d(so),Mc=n(so,"P",{});var ED=r(Mc);T1=i(ED,"Example:"),ED.forEach(t),b1=d(so),k(Ia.$$.fragment,so),so.forEach(t),ft.forEach(t),oh=d(o),Ho=n(o,"H2",{class:!0});var cu=r(Ho);Ls=n(cu,"A",{id:!0,class:!0,href:!0});var xD=r(Ls);Ec=n(xD,"SPAN",{});var zD=r(Ec);k(Sa.$$.fragment,zD),zD.forEach(t),xD.forEach(t),k1=d(cu),xc=n(cu,"SPAN",{});var jD=r(xc);w1=i(jD,"FlaxDistilBertForTokenClassification"),jD.forEach(t),cu.forEach(t),sh=d(o),ze=n(o,"DIV",{class:!0});var mt=r(ze);k(Wa.$$.fragment,mt),y1=d(mt),zc=n(mt,"P",{});var CD=r(zc);$1=i(CD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),CD.forEach(t),D1=d(mt),Ra=n(mt,"P",{});var pu=r(Ra);F1=i(pu,"This model inherits from "),Xi=n(pu,"A",{href:!0});var PD=r(Xi);B1=i(PD,"FlaxPreTrainedModel"),PD.forEach(t),M1=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pu.forEach(t),E1=d(mt),Ua=n(mt,"P",{});var hu=r(Ua);x1=i(hu,"This model is also a Flax Linen "),Ha=n(hu,"A",{href:!0,rel:!0});var qD=r(Ha);z1=i(qD,"flax.linen.Module"),qD.forEach(t),j1=i(hu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hu.forEach(t),C1=d(mt),jc=n(mt,"P",{});var AD=r(jc);P1=i(AD,"Finally, this model supports inherent JAX features such as:"),AD.forEach(t),q1=d(mt),qt=n(mt,"UL",{});var Gs=r(qt);Cc=n(Gs,"LI",{});var OD=r(Cc);Qa=n(OD,"A",{href:!0,rel:!0});var ND=r(Qa);A1=i(ND,"Just-In-Time (JIT) compilation"),ND.forEach(t),OD.forEach(t),O1=d(Gs),Pc=n(Gs,"LI",{});var LD=r(Pc);Va=n(LD,"A",{href:!0,rel:!0});var ID=r(Va);N1=i(ID,"Automatic Differentiation"),ID.forEach(t),LD.forEach(t),L1=d(Gs),qc=n(Gs,"LI",{});var SD=r(qc);Ja=n(SD,"A",{href:!0,rel:!0});var WD=r(Ja);I1=i(WD,"Vectorization"),WD.forEach(t),SD.forEach(t),S1=d(Gs),Ac=n(Gs,"LI",{});var RD=r(Ac);Ka=n(RD,"A",{href:!0,rel:!0});var UD=r(Ka);W1=i(UD,"Parallelization"),UD.forEach(t),RD.forEach(t),Gs.forEach(t),R1=d(mt),lt=n(mt,"DIV",{class:!0});var no=r(lt);k(Ga.$$.fragment,no),U1=d(no),Qo=n(no,"P",{});var vl=r(Qo);H1=i(vl,"The "),Oc=n(vl,"CODE",{});var HD=r(Oc);Q1=i(HD,"FlaxDistilBertPreTrainedModel"),HD.forEach(t),V1=i(vl,"forward method, overrides the "),Nc=n(vl,"CODE",{});var QD=r(Nc);J1=i(QD,"__call__"),QD.forEach(t),K1=i(vl," special method."),vl.forEach(t),G1=d(no),k(Is.$$.fragment,no),X1=d(no),Lc=n(no,"P",{});var VD=r(Lc);Y1=i(VD,"Example:"),VD.forEach(t),Z1=d(no),k(Xa.$$.fragment,no),no.forEach(t),mt.forEach(t),nh=d(o),Vo=n(o,"H2",{class:!0});var uu=r(Vo);Ss=n(uu,"A",{id:!0,class:!0,href:!0});var JD=r(Ss);Ic=n(JD,"SPAN",{});var KD=r(Ic);k(Ya.$$.fragment,KD),KD.forEach(t),JD.forEach(t),ew=d(uu),Sc=n(uu,"SPAN",{});var GD=r(Sc);tw=i(GD,"FlaxDistilBertForQuestionAnswering"),GD.forEach(t),uu.forEach(t),rh=d(o),je=n(o,"DIV",{class:!0});var gt=r(je);k(Za.$$.fragment,gt),ow=d(gt),Jo=n(gt,"P",{});var Tl=r(Jo);sw=i(Tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Wc=n(Tl,"CODE",{});var XD=r(Wc);nw=i(XD,"span start logits"),XD.forEach(t),rw=i(Tl," and "),Rc=n(Tl,"CODE",{});var YD=r(Rc);aw=i(YD,"span end logits"),YD.forEach(t),iw=i(Tl,")."),Tl.forEach(t),lw=d(gt),ei=n(gt,"P",{});var fu=r(ei);dw=i(fu,"This model inherits from "),Yi=n(fu,"A",{href:!0});var ZD=r(Yi);cw=i(ZD,"FlaxPreTrainedModel"),ZD.forEach(t),pw=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fu.forEach(t),hw=d(gt),ti=n(gt,"P",{});var mu=r(ti);uw=i(mu,"This model is also a Flax Linen "),oi=n(mu,"A",{href:!0,rel:!0});var e2=r(oi);fw=i(e2,"flax.linen.Module"),e2.forEach(t),mw=i(mu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mu.forEach(t),gw=d(gt),Uc=n(gt,"P",{});var t2=r(Uc);_w=i(t2,"Finally, this model supports inherent JAX features such as:"),t2.forEach(t),vw=d(gt),At=n(gt,"UL",{});var Xs=r(At);Hc=n(Xs,"LI",{});var o2=r(Hc);si=n(o2,"A",{href:!0,rel:!0});var s2=r(si);Tw=i(s2,"Just-In-Time (JIT) compilation"),s2.forEach(t),o2.forEach(t),bw=d(Xs),Qc=n(Xs,"LI",{});var n2=r(Qc);ni=n(n2,"A",{href:!0,rel:!0});var r2=r(ni);kw=i(r2,"Automatic Differentiation"),r2.forEach(t),n2.forEach(t),ww=d(Xs),Vc=n(Xs,"LI",{});var a2=r(Vc);ri=n(a2,"A",{href:!0,rel:!0});var i2=r(ri);yw=i(i2,"Vectorization"),i2.forEach(t),a2.forEach(t),$w=d(Xs),Jc=n(Xs,"LI",{});var l2=r(Jc);ai=n(l2,"A",{href:!0,rel:!0});var d2=r(ai);Dw=i(d2,"Parallelization"),d2.forEach(t),l2.forEach(t),Xs.forEach(t),Fw=d(gt),dt=n(gt,"DIV",{class:!0});var ro=r(dt);k(ii.$$.fragment,ro),Bw=d(ro),Ko=n(ro,"P",{});var bl=r(Ko);Mw=i(bl,"The "),Kc=n(bl,"CODE",{});var c2=r(Kc);Ew=i(c2,"FlaxDistilBertPreTrainedModel"),c2.forEach(t),xw=i(bl,"forward method, overrides the "),Gc=n(bl,"CODE",{});var p2=r(Gc);zw=i(p2,"__call__"),p2.forEach(t),jw=i(bl," special method."),bl.forEach(t),Cw=d(ro),k(Ws.$$.fragment,ro),Pw=d(ro),Xc=n(ro,"P",{});var h2=r(Xc);qw=i(h2,"Example:"),h2.forEach(t),Aw=d(ro),k(li.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(R2)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Ys,"href","https://huggingface.co/victorsanh"),c(Ys,"rel","nofollow"),c(Zs,"href","https://huggingface.co/kamalkraj"),c(Zs,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(ui,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertModel"),c(fi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(sn,"href","https://huggingface.co/distilbert-base-uncased"),c(sn,"rel","nofollow"),c(mi,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(gi,"href","/docs/transformers/pr_16370/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(_i,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(vi,"href","/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer"),c(Ti,"href","/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(bi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(ki,"href","/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizerFast"),c(wi,"href","/docs/transformers/pr_16370/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(ts,"id","transformers.DistilBertModel"),c(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ts,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c(yi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c($i,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertModel"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(ss,"id","transformers.DistilBertForMaskedLM"),c(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ss,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(Di,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(Fi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Ye,"class","docstring"),c(Qe,"class","docstring"),c(rs,"id","transformers.DistilBertForSequenceClassification"),c(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rs,"href","#transformers.DistilBertForSequenceClassification"),c(mo,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(jn,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(Ce,"class","docstring"),c(Ve,"class","docstring"),c(is,"id","transformers.DistilBertForMultipleChoice"),c(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(is,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(Ei,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(In,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ze,"class","docstring"),c(Je,"class","docstring"),c(ds,"id","transformers.DistilBertForTokenClassification"),c(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ds,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(zi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vn,"rel","nofollow"),c(ji,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(et,"class","docstring"),c(Ke,"class","docstring"),c(ps,"id","transformers.DistilBertForQuestionAnswering"),c(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ps,"href","#transformers.DistilBertForQuestionAnswering"),c(ko,"class","relative group"),c(Ci,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.PreTrainedModel"),c(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(er,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(tt,"class","docstring"),c(Ge,"class","docstring"),c(us,"id","transformers.TFDistilBertModel"),c(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(us,"href","#transformers.TFDistilBertModel"),c($o,"class","relative group"),c(qi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(Ai,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ot,"class","docstring"),c(Pe,"class","docstring"),c(gs,"id","transformers.TFDistilBertForMaskedLM"),c(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gs,"href","#transformers.TFDistilBertForMaskedLM"),c(Fo,"class","relative group"),c(Oi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(mr,"rel","nofollow"),c(Ni,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ie,"class","docstring"),c(qe,"class","docstring"),c(Ts,"id","transformers.TFDistilBertForSequenceClassification"),c(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ts,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(Li,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(yr,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(Se,"class","docstring"),c(Ae,"class","docstring"),c(ws,"id","transformers.TFDistilBertForMultipleChoice"),c(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ws,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Si,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(zr,"rel","nofollow"),c(Wi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(st,"class","docstring"),c(Oe,"class","docstring"),c(Ds,"id","transformers.TFDistilBertForTokenClassification"),c(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ds,"href","#transformers.TFDistilBertForTokenClassification"),c(jo,"class","relative group"),c(Ri,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nr,"rel","nofollow"),c(Ui,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(We,"class","docstring"),c(Ne,"class","docstring"),c(Ms,"id","transformers.TFDistilBertForQuestionAnswering"),c(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ms,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Hi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qr,"rel","nofollow"),c(Qi,"href","/docs/transformers/pr_16370/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(Le,"class","docstring"),c(zs,"id","transformers.FlaxDistilBertModel"),c(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zs,"href","#transformers.FlaxDistilBertModel"),c(Oo,"class","relative group"),c(Vi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ea,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ea,"rel","nofollow"),c(ta,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(oa,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(sa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(na,"rel","nofollow"),c(nt,"class","docstring"),c(Be,"class","docstring"),c(Cs,"id","transformers.FlaxDistilBertForMaskedLM"),c(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cs,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Lo,"class","relative group"),c(Ji,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ha,"rel","nofollow"),c(ua,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ua,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(fa,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ga,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(qs,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qs,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(So,"class","relative group"),c(Ki,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ya,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c($a,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Da,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Fa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ba,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Os,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Os,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Pa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Pa,"rel","nofollow"),c(qa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(qa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Aa,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Oa,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Na,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Ls,"id","transformers.FlaxDistilBertForTokenClassification"),c(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ls,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Ho,"class","relative group"),c(Xi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ha,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ha,"rel","nofollow"),c(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Qa,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Va,"rel","nofollow"),c(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ja,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ka,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Ss,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ss,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Vo,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16370/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(oi,"rel","nofollow"),c(si,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(si,"rel","nofollow"),c(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ni,"rel","nofollow"),c(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ri,"rel","nofollow"),c(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ai,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring")},m(o,m){e(document.head,p),u(o,F,m),u(o,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(o,V,m),u(o,E,m),e(E,G),e(G,I),w(X,I,null),e(E,ce),e(E,S),e(S,pe),u(o,re,m),u(o,N,m),e(N,q),e(N,Y),e(Y,J),e(N,x),e(N,z),e(z,he),e(N,W),e(N,oe),e(oe,ue),e(N,R),u(o,ae,m),u(o,ee,m),e(ee,A),u(o,ie,m),u(o,L,m),e(L,se),e(se,fe),u(o,P,m),u(o,te,m),e(te,U),u(o,le,m),u(o,h,m),e(h,M),e(M,K),e(M,_e),e(_e,be),e(M,O),e(M,ve),e(ve,ke),e(M,we),e(M,C),e(C,H),e(M,ye),e(h,$e),e(h,Z),e(Z,De),e(Z,ne),e(ne,Fe),e(Z,gu),u(o,_p,m),u(o,Tt,m),e(Tt,_u),e(Tt,Ys),e(Ys,vu),e(Tt,Tu),e(Tt,Zs),e(Zs,bu),e(Tt,ku),e(Tt,en),e(en,wu),e(Tt,yu),u(o,vp,m),u(o,ao,m),e(ao,Go),e(Go,kl),w(tn,kl,null),e(ao,$u),e(ao,wl),e(wl,Du),u(o,Tp,m),u(o,Ue,m),w(on,Ue,null),e(Ue,Fu),e(Ue,xt),e(xt,Bu),e(xt,ui),e(ui,Mu),e(xt,Eu),e(xt,fi),e(fi,xu),e(xt,zu),e(xt,sn),e(sn,ju),e(xt,Cu),e(Ue,Pu),e(Ue,io),e(io,qu),e(io,mi),e(mi,Au),e(io,Ou),e(io,gi),e(gi,Nu),e(io,Lu),e(Ue,Iu),e(Ue,yl),e(yl,Su),e(Ue,Wu),w(nn,Ue,null),u(o,bp,m),u(o,lo,m),e(lo,Xo),e(Xo,$l),w(rn,$l,null),e(lo,Ru),e(lo,Dl),e(Dl,Uu),u(o,kp,m),u(o,_t,m),w(an,_t,null),e(_t,Hu),e(_t,Fl),e(Fl,Qu),e(_t,Vu),e(_t,Yo),e(Yo,_i),e(_i,Ju),e(Yo,Ku),e(Yo,vi),e(vi,Gu),e(Yo,Xu),e(_t,Yu),e(_t,ln),e(ln,Zu),e(ln,Ti),e(Ti,ef),e(ln,tf),u(o,wp,m),u(o,co,m),e(co,Zo),e(Zo,Bl),w(dn,Bl,null),e(co,of),e(co,Ml),e(Ml,sf),u(o,yp,m),u(o,vt,m),w(cn,vt,null),e(vt,nf),e(vt,pn),e(pn,rf),e(pn,El),e(El,af),e(pn,lf),e(vt,df),e(vt,es),e(es,bi),e(bi,cf),e(es,pf),e(es,ki),e(ki,hf),e(es,uf),e(vt,ff),e(vt,hn),e(hn,mf),e(hn,wi),e(wi,gf),e(hn,_f),u(o,$p,m),u(o,po,m),e(po,ts),e(ts,xl),w(un,xl,null),e(po,vf),e(po,zl),e(zl,Tf),u(o,Dp,m),u(o,He,m),w(fn,He,null),e(He,bf),e(He,jl),e(jl,kf),e(He,wf),e(He,mn),e(mn,yf),e(mn,yi),e(yi,$f),e(mn,Df),e(He,Ff),e(He,gn),e(gn,Bf),e(gn,_n),e(_n,Mf),e(gn,Ef),e(He,xf),e(He,Xe),w(vn,Xe,null),e(Xe,zf),e(Xe,ho),e(ho,jf),e(ho,$i),e($i,Cf),e(ho,Pf),e(ho,Cl),e(Cl,qf),e(ho,Af),e(Xe,Of),w(os,Xe,null),e(Xe,Nf),e(Xe,Pl),e(Pl,Lf),e(Xe,If),w(Tn,Xe,null),u(o,Fp,m),u(o,uo,m),e(uo,ss),e(ss,ql),w(bn,ql,null),e(uo,Sf),e(uo,Al),e(Al,Wf),u(o,Bp,m),u(o,Qe,m),w(kn,Qe,null),e(Qe,Rf),e(Qe,wn),e(wn,Uf),e(wn,Ol),e(Ol,Hf),e(wn,Qf),e(Qe,Vf),e(Qe,yn),e(yn,Jf),e(yn,Di),e(Di,Kf),e(yn,Gf),e(Qe,Xf),e(Qe,$n),e($n,Yf),e($n,Dn),e(Dn,Zf),e($n,em),e(Qe,tm),e(Qe,Ye),w(Fn,Ye,null),e(Ye,om),e(Ye,fo),e(fo,sm),e(fo,Fi),e(Fi,nm),e(fo,rm),e(fo,Nl),e(Nl,am),e(fo,im),e(Ye,lm),w(ns,Ye,null),e(Ye,dm),e(Ye,Ll),e(Ll,cm),e(Ye,pm),w(Bn,Ye,null),u(o,Mp,m),u(o,mo,m),e(mo,rs),e(rs,Il),w(Mn,Il,null),e(mo,hm),e(mo,Sl),e(Sl,um),u(o,Ep,m),u(o,Ve,m),w(En,Ve,null),e(Ve,fm),e(Ve,Wl),e(Wl,mm),e(Ve,gm),e(Ve,xn),e(xn,_m),e(xn,Bi),e(Bi,vm),e(xn,Tm),e(Ve,bm),e(Ve,zn),e(zn,km),e(zn,jn),e(jn,wm),e(zn,ym),e(Ve,$m),e(Ve,Ce),w(Cn,Ce,null),e(Ce,Dm),e(Ce,go),e(go,Fm),e(go,Mi),e(Mi,Bm),e(go,Mm),e(go,Rl),e(Rl,Em),e(go,xm),e(Ce,zm),w(as,Ce,null),e(Ce,jm),e(Ce,Ul),e(Ul,Cm),e(Ce,Pm),w(Pn,Ce,null),e(Ce,qm),e(Ce,Hl),e(Hl,Am),e(Ce,Om),w(qn,Ce,null),u(o,xp,m),u(o,_o,m),e(_o,is),e(is,Ql),w(An,Ql,null),e(_o,Nm),e(_o,Vl),e(Vl,Lm),u(o,zp,m),u(o,Je,m),w(On,Je,null),e(Je,Im),e(Je,Jl),e(Jl,Sm),e(Je,Wm),e(Je,Nn),e(Nn,Rm),e(Nn,Ei),e(Ei,Um),e(Nn,Hm),e(Je,Qm),e(Je,Ln),e(Ln,Vm),e(Ln,In),e(In,Jm),e(Ln,Km),e(Je,Gm),e(Je,Ze),w(Sn,Ze,null),e(Ze,Xm),e(Ze,vo),e(vo,Ym),e(vo,xi),e(xi,Zm),e(vo,eg),e(vo,Kl),e(Kl,tg),e(vo,og),e(Ze,sg),w(ls,Ze,null),e(Ze,ng),e(Ze,Gl),e(Gl,rg),e(Ze,ag),w(Wn,Ze,null),u(o,jp,m),u(o,To,m),e(To,ds),e(ds,Xl),w(Rn,Xl,null),e(To,ig),e(To,Yl),e(Yl,lg),u(o,Cp,m),u(o,Ke,m),w(Un,Ke,null),e(Ke,dg),e(Ke,Zl),e(Zl,cg),e(Ke,pg),e(Ke,Hn),e(Hn,hg),e(Hn,zi),e(zi,ug),e(Hn,fg),e(Ke,mg),e(Ke,Qn),e(Qn,gg),e(Qn,Vn),e(Vn,_g),e(Qn,vg),e(Ke,Tg),e(Ke,et),w(Jn,et,null),e(et,bg),e(et,bo),e(bo,kg),e(bo,ji),e(ji,wg),e(bo,yg),e(bo,ed),e(ed,$g),e(bo,Dg),e(et,Fg),w(cs,et,null),e(et,Bg),e(et,td),e(td,Mg),e(et,Eg),w(Kn,et,null),u(o,Pp,m),u(o,ko,m),e(ko,ps),e(ps,od),w(Gn,od,null),e(ko,xg),e(ko,sd),e(sd,zg),u(o,qp,m),u(o,Ge,m),w(Xn,Ge,null),e(Ge,jg),e(Ge,wo),e(wo,Cg),e(wo,nd),e(nd,Pg),e(wo,qg),e(wo,rd),e(rd,Ag),e(wo,Og),e(Ge,Ng),e(Ge,Yn),e(Yn,Lg),e(Yn,Ci),e(Ci,Ig),e(Yn,Sg),e(Ge,Wg),e(Ge,Zn),e(Zn,Rg),e(Zn,er),e(er,Ug),e(Zn,Hg),e(Ge,Qg),e(Ge,tt),w(tr,tt,null),e(tt,Vg),e(tt,yo),e(yo,Jg),e(yo,Pi),e(Pi,Kg),e(yo,Gg),e(yo,ad),e(ad,Xg),e(yo,Yg),e(tt,Zg),w(hs,tt,null),e(tt,e_),e(tt,id),e(id,t_),e(tt,o_),w(or,tt,null),u(o,Ap,m),u(o,$o,m),e($o,us),e(us,ld),w(sr,ld,null),e($o,s_),e($o,dd),e(dd,n_),u(o,Op,m),u(o,Pe,m),w(nr,Pe,null),e(Pe,r_),e(Pe,cd),e(cd,a_),e(Pe,i_),e(Pe,rr),e(rr,l_),e(rr,qi),e(qi,d_),e(rr,c_),e(Pe,p_),e(Pe,ar),e(ar,h_),e(ar,ir),e(ir,u_),e(ar,f_),e(Pe,m_),w(fs,Pe,null),e(Pe,g_),e(Pe,ot),w(lr,ot,null),e(ot,__),e(ot,Do),e(Do,v_),e(Do,Ai),e(Ai,T_),e(Do,b_),e(Do,pd),e(pd,k_),e(Do,w_),e(ot,y_),w(ms,ot,null),e(ot,$_),e(ot,hd),e(hd,D_),e(ot,F_),w(dr,ot,null),u(o,Np,m),u(o,Fo,m),e(Fo,gs),e(gs,ud),w(cr,ud,null),e(Fo,B_),e(Fo,fd),e(fd,M_),u(o,Lp,m),u(o,qe,m),w(pr,qe,null),e(qe,E_),e(qe,hr),e(hr,x_),e(hr,md),e(md,z_),e(hr,j_),e(qe,C_),e(qe,ur),e(ur,P_),e(ur,Oi),e(Oi,q_),e(ur,A_),e(qe,O_),e(qe,fr),e(fr,N_),e(fr,mr),e(mr,L_),e(fr,I_),e(qe,S_),w(_s,qe,null),e(qe,W_),e(qe,Ie),w(gr,Ie,null),e(Ie,R_),e(Ie,Bo),e(Bo,U_),e(Bo,Ni),e(Ni,H_),e(Bo,Q_),e(Bo,gd),e(gd,V_),e(Bo,J_),e(Ie,K_),w(vs,Ie,null),e(Ie,G_),e(Ie,_d),e(_d,X_),e(Ie,Y_),w(_r,Ie,null),e(Ie,Z_),w(vr,Ie,null),u(o,Ip,m),u(o,Mo,m),e(Mo,Ts),e(Ts,vd),w(Tr,vd,null),e(Mo,ev),e(Mo,Td),e(Td,tv),u(o,Sp,m),u(o,Ae,m),w(br,Ae,null),e(Ae,ov),e(Ae,bd),e(bd,sv),e(Ae,nv),e(Ae,kr),e(kr,rv),e(kr,Li),e(Li,av),e(kr,iv),e(Ae,lv),e(Ae,wr),e(wr,dv),e(wr,yr),e(yr,cv),e(wr,pv),e(Ae,hv),w(bs,Ae,null),e(Ae,uv),e(Ae,Se),w($r,Se,null),e(Se,fv),e(Se,Eo),e(Eo,mv),e(Eo,Ii),e(Ii,gv),e(Eo,_v),e(Eo,kd),e(kd,vv),e(Eo,Tv),e(Se,bv),w(ks,Se,null),e(Se,kv),e(Se,wd),e(wd,wv),e(Se,yv),w(Dr,Se,null),e(Se,$v),w(Fr,Se,null),u(o,Wp,m),u(o,xo,m),e(xo,ws),e(ws,yd),w(Br,yd,null),e(xo,Dv),e(xo,$d),e($d,Fv),u(o,Rp,m),u(o,Oe,m),w(Mr,Oe,null),e(Oe,Bv),e(Oe,Dd),e(Dd,Mv),e(Oe,Ev),e(Oe,Er),e(Er,xv),e(Er,Si),e(Si,zv),e(Er,jv),e(Oe,Cv),e(Oe,xr),e(xr,Pv),e(xr,zr),e(zr,qv),e(xr,Av),e(Oe,Ov),w(ys,Oe,null),e(Oe,Nv),e(Oe,st),w(jr,st,null),e(st,Lv),e(st,zo),e(zo,Iv),e(zo,Wi),e(Wi,Sv),e(zo,Wv),e(zo,Fd),e(Fd,Rv),e(zo,Uv),e(st,Hv),w($s,st,null),e(st,Qv),e(st,Bd),e(Bd,Vv),e(st,Jv),w(Cr,st,null),u(o,Up,m),u(o,jo,m),e(jo,Ds),e(Ds,Md),w(Pr,Md,null),e(jo,Kv),e(jo,Ed),e(Ed,Gv),u(o,Hp,m),u(o,Ne,m),w(qr,Ne,null),e(Ne,Xv),e(Ne,xd),e(xd,Yv),e(Ne,Zv),e(Ne,Ar),e(Ar,eT),e(Ar,Ri),e(Ri,tT),e(Ar,oT),e(Ne,sT),e(Ne,Or),e(Or,nT),e(Or,Nr),e(Nr,rT),e(Or,aT),e(Ne,iT),w(Fs,Ne,null),e(Ne,lT),e(Ne,We),w(Lr,We,null),e(We,dT),e(We,Co),e(Co,cT),e(Co,Ui),e(Ui,pT),e(Co,hT),e(Co,zd),e(zd,uT),e(Co,fT),e(We,mT),w(Bs,We,null),e(We,gT),e(We,jd),e(jd,_T),e(We,vT),w(Ir,We,null),e(We,TT),w(Sr,We,null),u(o,Qp,m),u(o,Po,m),e(Po,Ms),e(Ms,Cd),w(Wr,Cd,null),e(Po,bT),e(Po,Pd),e(Pd,kT),u(o,Vp,m),u(o,Le,m),w(Rr,Le,null),e(Le,wT),e(Le,qo),e(qo,yT),e(qo,qd),e(qd,$T),e(qo,DT),e(qo,Ad),e(Ad,FT),e(qo,BT),e(Le,MT),e(Le,Ur),e(Ur,ET),e(Ur,Hi),e(Hi,xT),e(Ur,zT),e(Le,jT),e(Le,Hr),e(Hr,CT),e(Hr,Qr),e(Qr,PT),e(Hr,qT),e(Le,AT),w(Es,Le,null),e(Le,OT),e(Le,Re),w(Vr,Re,null),e(Re,NT),e(Re,Ao),e(Ao,LT),e(Ao,Qi),e(Qi,IT),e(Ao,ST),e(Ao,Od),e(Od,WT),e(Ao,RT),e(Re,UT),w(xs,Re,null),e(Re,HT),e(Re,Nd),e(Nd,QT),e(Re,VT),w(Jr,Re,null),e(Re,JT),w(Kr,Re,null),u(o,Jp,m),u(o,Oo,m),e(Oo,zs),e(zs,Ld),w(Gr,Ld,null),e(Oo,KT),e(Oo,Id),e(Id,GT),u(o,Kp,m),u(o,Be,m),w(Xr,Be,null),e(Be,XT),e(Be,Sd),e(Sd,YT),e(Be,ZT),e(Be,Yr),e(Yr,eb),e(Yr,Vi),e(Vi,tb),e(Yr,ob),e(Be,sb),e(Be,Zr),e(Zr,nb),e(Zr,ea),e(ea,rb),e(Zr,ab),e(Be,ib),e(Be,Wd),e(Wd,lb),e(Be,db),e(Be,zt),e(zt,Rd),e(Rd,ta),e(ta,cb),e(zt,pb),e(zt,Ud),e(Ud,oa),e(oa,hb),e(zt,ub),e(zt,Hd),e(Hd,sa),e(sa,fb),e(zt,mb),e(zt,Qd),e(Qd,na),e(na,gb),e(Be,_b),e(Be,nt),w(ra,nt,null),e(nt,vb),e(nt,No),e(No,Tb),e(No,Vd),e(Vd,bb),e(No,kb),e(No,Jd),e(Jd,wb),e(No,yb),e(nt,$b),w(js,nt,null),e(nt,Db),e(nt,Kd),e(Kd,Fb),e(nt,Bb),w(aa,nt,null),u(o,Gp,m),u(o,Lo,m),e(Lo,Cs),e(Cs,Gd),w(ia,Gd,null),e(Lo,Mb),e(Lo,Xd),e(Xd,Eb),u(o,Xp,m),u(o,Me,m),w(la,Me,null),e(Me,xb),e(Me,da),e(da,zb),e(da,Yd),e(Yd,jb),e(da,Cb),e(Me,Pb),e(Me,ca),e(ca,qb),e(ca,Ji),e(Ji,Ab),e(ca,Ob),e(Me,Nb),e(Me,pa),e(pa,Lb),e(pa,ha),e(ha,Ib),e(pa,Sb),e(Me,Wb),e(Me,Zd),e(Zd,Rb),e(Me,Ub),e(Me,jt),e(jt,ec),e(ec,ua),e(ua,Hb),e(jt,Qb),e(jt,tc),e(tc,fa),e(fa,Vb),e(jt,Jb),e(jt,oc),e(oc,ma),e(ma,Kb),e(jt,Gb),e(jt,sc),e(sc,ga),e(ga,Xb),e(Me,Yb),e(Me,rt),w(_a,rt,null),e(rt,Zb),e(rt,Io),e(Io,ek),e(Io,nc),e(nc,tk),e(Io,ok),e(Io,rc),e(rc,sk),e(Io,nk),e(rt,rk),w(Ps,rt,null),e(rt,ak),e(rt,ac),e(ac,ik),e(rt,lk),w(va,rt,null),u(o,Yp,m),u(o,So,m),e(So,qs),e(qs,ic),w(Ta,ic,null),e(So,dk),e(So,lc),e(lc,ck),u(o,Zp,m),u(o,Ee,m),w(ba,Ee,null),e(Ee,pk),e(Ee,dc),e(dc,hk),e(Ee,uk),e(Ee,ka),e(ka,fk),e(ka,Ki),e(Ki,mk),e(ka,gk),e(Ee,_k),e(Ee,wa),e(wa,vk),e(wa,ya),e(ya,Tk),e(wa,bk),e(Ee,kk),e(Ee,cc),e(cc,wk),e(Ee,yk),e(Ee,Ct),e(Ct,pc),e(pc,$a),e($a,$k),e(Ct,Dk),e(Ct,hc),e(hc,Da),e(Da,Fk),e(Ct,Bk),e(Ct,uc),e(uc,Fa),e(Fa,Mk),e(Ct,Ek),e(Ct,fc),e(fc,Ba),e(Ba,xk),e(Ee,zk),e(Ee,at),w(Ma,at,null),e(at,jk),e(at,Wo),e(Wo,Ck),e(Wo,mc),e(mc,Pk),e(Wo,qk),e(Wo,gc),e(gc,Ak),e(Wo,Ok),e(at,Nk),w(As,at,null),e(at,Lk),e(at,_c),e(_c,Ik),e(at,Sk),w(Ea,at,null),u(o,eh,m),u(o,Ro,m),e(Ro,Os),e(Os,vc),w(xa,vc,null),e(Ro,Wk),e(Ro,Tc),e(Tc,Rk),u(o,th,m),u(o,xe,m),w(za,xe,null),e(xe,Uk),e(xe,bc),e(bc,Hk),e(xe,Qk),e(xe,ja),e(ja,Vk),e(ja,Gi),e(Gi,Jk),e(ja,Kk),e(xe,Gk),e(xe,Ca),e(Ca,Xk),e(Ca,Pa),e(Pa,Yk),e(Ca,Zk),e(xe,e1),e(xe,kc),e(kc,t1),e(xe,o1),e(xe,Pt),e(Pt,wc),e(wc,qa),e(qa,s1),e(Pt,n1),e(Pt,yc),e(yc,Aa),e(Aa,r1),e(Pt,a1),e(Pt,$c),e($c,Oa),e(Oa,i1),e(Pt,l1),e(Pt,Dc),e(Dc,Na),e(Na,d1),e(xe,c1),e(xe,it),w(La,it,null),e(it,p1),e(it,Uo),e(Uo,h1),e(Uo,Fc),e(Fc,u1),e(Uo,f1),e(Uo,Bc),e(Bc,m1),e(Uo,g1),e(it,_1),w(Ns,it,null),e(it,v1),e(it,Mc),e(Mc,T1),e(it,b1),w(Ia,it,null),u(o,oh,m),u(o,Ho,m),e(Ho,Ls),e(Ls,Ec),w(Sa,Ec,null),e(Ho,k1),e(Ho,xc),e(xc,w1),u(o,sh,m),u(o,ze,m),w(Wa,ze,null),e(ze,y1),e(ze,zc),e(zc,$1),e(ze,D1),e(ze,Ra),e(Ra,F1),e(Ra,Xi),e(Xi,B1),e(Ra,M1),e(ze,E1),e(ze,Ua),e(Ua,x1),e(Ua,Ha),e(Ha,z1),e(Ua,j1),e(ze,C1),e(ze,jc),e(jc,P1),e(ze,q1),e(ze,qt),e(qt,Cc),e(Cc,Qa),e(Qa,A1),e(qt,O1),e(qt,Pc),e(Pc,Va),e(Va,N1),e(qt,L1),e(qt,qc),e(qc,Ja),e(Ja,I1),e(qt,S1),e(qt,Ac),e(Ac,Ka),e(Ka,W1),e(ze,R1),e(ze,lt),w(Ga,lt,null),e(lt,U1),e(lt,Qo),e(Qo,H1),e(Qo,Oc),e(Oc,Q1),e(Qo,V1),e(Qo,Nc),e(Nc,J1),e(Qo,K1),e(lt,G1),w(Is,lt,null),e(lt,X1),e(lt,Lc),e(Lc,Y1),e(lt,Z1),w(Xa,lt,null),u(o,nh,m),u(o,Vo,m),e(Vo,Ss),e(Ss,Ic),w(Ya,Ic,null),e(Vo,ew),e(Vo,Sc),e(Sc,tw),u(o,rh,m),u(o,je,m),w(Za,je,null),e(je,ow),e(je,Jo),e(Jo,sw),e(Jo,Wc),e(Wc,nw),e(Jo,rw),e(Jo,Rc),e(Rc,aw),e(Jo,iw),e(je,lw),e(je,ei),e(ei,dw),e(ei,Yi),e(Yi,cw),e(ei,pw),e(je,hw),e(je,ti),e(ti,uw),e(ti,oi),e(oi,fw),e(ti,mw),e(je,gw),e(je,Uc),e(Uc,_w),e(je,vw),e(je,At),e(At,Hc),e(Hc,si),e(si,Tw),e(At,bw),e(At,Qc),e(Qc,ni),e(ni,kw),e(At,ww),e(At,Vc),e(Vc,ri),e(ri,yw),e(At,$w),e(At,Jc),e(Jc,ai),e(ai,Dw),e(je,Fw),e(je,dt),w(ii,dt,null),e(dt,Bw),e(dt,Ko),e(Ko,Mw),e(Ko,Kc),e(Kc,Ew),e(Ko,xw),e(Ko,Gc),e(Gc,zw),e(Ko,jw),e(dt,Cw),w(Ws,dt,null),e(dt,Pw),e(dt,Xc),e(Xc,qw),e(dt,Aw),w(li,dt,null),ah=!0},p(o,[m]){const di={};m&2&&(di.$$scope={dirty:m,ctx:o}),os.$set(di);const Yc={};m&2&&(Yc.$$scope={dirty:m,ctx:o}),ns.$set(Yc);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:o}),as.$set(Zc);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:o}),ls.$set(ep);const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),cs.$set(ci);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:o}),hs.$set(tp);const op={};m&2&&(op.$$scope={dirty:m,ctx:o}),fs.$set(op);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:o}),ms.$set(sp);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:o}),_s.$set(Ot);const np={};m&2&&(np.$$scope={dirty:m,ctx:o}),vs.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:o}),bs.$set(rp);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:o}),ks.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:o}),ys.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:o}),$s.$set(lp);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:o}),Fs.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:o}),Bs.$set(cp);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),Es.$set(pi);const Nt={};m&2&&(Nt.$$scope={dirty:m,ctx:o}),xs.$set(Nt);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:o}),js.$set(pp);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:o}),Ps.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:o}),As.$set(up);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),Ns.$set(hi);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:o}),Is.$set(fp);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:o}),Ws.$set(Lt)},i(o){ah||(y(_.$$.fragment,o),y(X.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(vn.$$.fragment,o),y(os.$$.fragment,o),y(Tn.$$.fragment,o),y(bn.$$.fragment,o),y(kn.$$.fragment,o),y(Fn.$$.fragment,o),y(ns.$$.fragment,o),y(Bn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(Cn.$$.fragment,o),y(as.$$.fragment,o),y(Pn.$$.fragment,o),y(qn.$$.fragment,o),y(An.$$.fragment,o),y(On.$$.fragment,o),y(Sn.$$.fragment,o),y(ls.$$.fragment,o),y(Wn.$$.fragment,o),y(Rn.$$.fragment,o),y(Un.$$.fragment,o),y(Jn.$$.fragment,o),y(cs.$$.fragment,o),y(Kn.$$.fragment,o),y(Gn.$$.fragment,o),y(Xn.$$.fragment,o),y(tr.$$.fragment,o),y(hs.$$.fragment,o),y(or.$$.fragment,o),y(sr.$$.fragment,o),y(nr.$$.fragment,o),y(fs.$$.fragment,o),y(lr.$$.fragment,o),y(ms.$$.fragment,o),y(dr.$$.fragment,o),y(cr.$$.fragment,o),y(pr.$$.fragment,o),y(_s.$$.fragment,o),y(gr.$$.fragment,o),y(vs.$$.fragment,o),y(_r.$$.fragment,o),y(vr.$$.fragment,o),y(Tr.$$.fragment,o),y(br.$$.fragment,o),y(bs.$$.fragment,o),y($r.$$.fragment,o),y(ks.$$.fragment,o),y(Dr.$$.fragment,o),y(Fr.$$.fragment,o),y(Br.$$.fragment,o),y(Mr.$$.fragment,o),y(ys.$$.fragment,o),y(jr.$$.fragment,o),y($s.$$.fragment,o),y(Cr.$$.fragment,o),y(Pr.$$.fragment,o),y(qr.$$.fragment,o),y(Fs.$$.fragment,o),y(Lr.$$.fragment,o),y(Bs.$$.fragment,o),y(Ir.$$.fragment,o),y(Sr.$$.fragment,o),y(Wr.$$.fragment,o),y(Rr.$$.fragment,o),y(Es.$$.fragment,o),y(Vr.$$.fragment,o),y(xs.$$.fragment,o),y(Jr.$$.fragment,o),y(Kr.$$.fragment,o),y(Gr.$$.fragment,o),y(Xr.$$.fragment,o),y(ra.$$.fragment,o),y(js.$$.fragment,o),y(aa.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(_a.$$.fragment,o),y(Ps.$$.fragment,o),y(va.$$.fragment,o),y(Ta.$$.fragment,o),y(ba.$$.fragment,o),y(Ma.$$.fragment,o),y(As.$$.fragment,o),y(Ea.$$.fragment,o),y(xa.$$.fragment,o),y(za.$$.fragment,o),y(La.$$.fragment,o),y(Ns.$$.fragment,o),y(Ia.$$.fragment,o),y(Sa.$$.fragment,o),y(Wa.$$.fragment,o),y(Ga.$$.fragment,o),y(Is.$$.fragment,o),y(Xa.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ii.$$.fragment,o),y(Ws.$$.fragment,o),y(li.$$.fragment,o),ah=!0)},o(o){$(_.$$.fragment,o),$(X.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(vn.$$.fragment,o),$(os.$$.fragment,o),$(Tn.$$.fragment,o),$(bn.$$.fragment,o),$(kn.$$.fragment,o),$(Fn.$$.fragment,o),$(ns.$$.fragment,o),$(Bn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(Cn.$$.fragment,o),$(as.$$.fragment,o),$(Pn.$$.fragment,o),$(qn.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Sn.$$.fragment,o),$(ls.$$.fragment,o),$(Wn.$$.fragment,o),$(Rn.$$.fragment,o),$(Un.$$.fragment,o),$(Jn.$$.fragment,o),$(cs.$$.fragment,o),$(Kn.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(tr.$$.fragment,o),$(hs.$$.fragment,o),$(or.$$.fragment,o),$(sr.$$.fragment,o),$(nr.$$.fragment,o),$(fs.$$.fragment,o),$(lr.$$.fragment,o),$(ms.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(_s.$$.fragment,o),$(gr.$$.fragment,o),$(vs.$$.fragment,o),$(_r.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(br.$$.fragment,o),$(bs.$$.fragment,o),$($r.$$.fragment,o),$(ks.$$.fragment,o),$(Dr.$$.fragment,o),$(Fr.$$.fragment,o),$(Br.$$.fragment,o),$(Mr.$$.fragment,o),$(ys.$$.fragment,o),$(jr.$$.fragment,o),$($s.$$.fragment,o),$(Cr.$$.fragment,o),$(Pr.$$.fragment,o),$(qr.$$.fragment,o),$(Fs.$$.fragment,o),$(Lr.$$.fragment,o),$(Bs.$$.fragment,o),$(Ir.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Rr.$$.fragment,o),$(Es.$$.fragment,o),$(Vr.$$.fragment,o),$(xs.$$.fragment,o),$(Jr.$$.fragment,o),$(Kr.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(ra.$$.fragment,o),$(js.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(_a.$$.fragment,o),$(Ps.$$.fragment,o),$(va.$$.fragment,o),$(Ta.$$.fragment,o),$(ba.$$.fragment,o),$(Ma.$$.fragment,o),$(As.$$.fragment,o),$(Ea.$$.fragment,o),$(xa.$$.fragment,o),$(za.$$.fragment,o),$(La.$$.fragment,o),$(Ns.$$.fragment,o),$(Ia.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Ga.$$.fragment,o),$(Is.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ii.$$.fragment,o),$(Ws.$$.fragment,o),$(li.$$.fragment,o),ah=!1},d(o){t(p),o&&t(F),o&&t(g),D(_),o&&t(V),o&&t(E),D(X),o&&t(re),o&&t(N),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(L),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(_p),o&&t(Tt),o&&t(vp),o&&t(ao),D(tn),o&&t(Tp),o&&t(Ue),D(on),D(nn),o&&t(bp),o&&t(lo),D(rn),o&&t(kp),o&&t(_t),D(an),o&&t(wp),o&&t(co),D(dn),o&&t(yp),o&&t(vt),D(cn),o&&t($p),o&&t(po),D(un),o&&t(Dp),o&&t(He),D(fn),D(vn),D(os),D(Tn),o&&t(Fp),o&&t(uo),D(bn),o&&t(Bp),o&&t(Qe),D(kn),D(Fn),D(ns),D(Bn),o&&t(Mp),o&&t(mo),D(Mn),o&&t(Ep),o&&t(Ve),D(En),D(Cn),D(as),D(Pn),D(qn),o&&t(xp),o&&t(_o),D(An),o&&t(zp),o&&t(Je),D(On),D(Sn),D(ls),D(Wn),o&&t(jp),o&&t(To),D(Rn),o&&t(Cp),o&&t(Ke),D(Un),D(Jn),D(cs),D(Kn),o&&t(Pp),o&&t(ko),D(Gn),o&&t(qp),o&&t(Ge),D(Xn),D(tr),D(hs),D(or),o&&t(Ap),o&&t($o),D(sr),o&&t(Op),o&&t(Pe),D(nr),D(fs),D(lr),D(ms),D(dr),o&&t(Np),o&&t(Fo),D(cr),o&&t(Lp),o&&t(qe),D(pr),D(_s),D(gr),D(vs),D(_r),D(vr),o&&t(Ip),o&&t(Mo),D(Tr),o&&t(Sp),o&&t(Ae),D(br),D(bs),D($r),D(ks),D(Dr),D(Fr),o&&t(Wp),o&&t(xo),D(Br),o&&t(Rp),o&&t(Oe),D(Mr),D(ys),D(jr),D($s),D(Cr),o&&t(Up),o&&t(jo),D(Pr),o&&t(Hp),o&&t(Ne),D(qr),D(Fs),D(Lr),D(Bs),D(Ir),D(Sr),o&&t(Qp),o&&t(Po),D(Wr),o&&t(Vp),o&&t(Le),D(Rr),D(Es),D(Vr),D(xs),D(Jr),D(Kr),o&&t(Jp),o&&t(Oo),D(Gr),o&&t(Kp),o&&t(Be),D(Xr),D(ra),D(js),D(aa),o&&t(Gp),o&&t(Lo),D(ia),o&&t(Xp),o&&t(Me),D(la),D(_a),D(Ps),D(va),o&&t(Yp),o&&t(So),D(Ta),o&&t(Zp),o&&t(Ee),D(ba),D(Ma),D(As),D(Ea),o&&t(eh),o&&t(Ro),D(xa),o&&t(th),o&&t(xe),D(za),D(La),D(Ns),D(Ia),o&&t(oh),o&&t(Ho),D(Sa),o&&t(sh),o&&t(ze),D(Wa),D(Ga),D(Is),D(Xa),o&&t(nh),o&&t(Vo),D(Ya),o&&t(rh),o&&t(je),D(Za),D(ii),D(Ws),D(li)}}}const R2={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function U2(j){return _2(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class G2 extends u2{constructor(p){super();f2(this,p,U2,W2,m2,{})}}export{G2 as default,R2 as metadata};
