import{S as mF,i as gF,s as _F,e as s,k as l,w as b,t as a,M as vF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as w,q as y,o as $,B as D,v as TF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as me}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function bF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function kF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function wF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function yF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $F(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function DF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function FF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function BF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function MF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function EF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function xF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function zF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function jF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function CF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function PF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function qF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function AF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le;return{c(){p=s("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=s("p"),G=a("This second option is useful when using "),L=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s("code"),pe=a("model(inputs)"),re=a("."),N=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var _e=r(T);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(K),B=n(K,"LI",{});var ke=r(B);de=i(ke,"having all inputs as a list, tuple or dict in the first positional arguments."),ke.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),ce=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);pe=i(we,"model(inputs)"),we.forEach(t),re=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),J=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);he=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);oe=i($e,"input_ids"),$e.forEach(t),ue=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ae=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);se=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),fe=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);le=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,ce),e(E,S),e(S,pe),e(E,re),u(h,N,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,I),e(I,se),e(x,fe),e(x,P),e(P,te),e(P,U),e(U,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(q),h&&t(J),h&&t(x)}}}function OF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function NF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function IF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function LF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function SF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function WF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function RF(j){let p,F,g,v,T;return{c(){p=s("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function UF(j){let p,F,g,v,T,_,f,B,de,V,E,G,L,X,ce,S,pe,re,N,q,Y,J,x,z,he,W,oe,ue,R,ae,ee,A,ie,I,se,fe,P,te,U,le,h,M,K,_e,ke,O,ve,we,ye,C,H,$e,De,Z,Fe,ne,Be,_u,vp,Tt,vu,Ys,Tu,bu,Zs,ku,wu,en,yu,$u,Tp,ao,Go,wl,tn,Du,yl,Fu,bp,Ue,on,Bu,Et,Mu,fi,Eu,xu,mi,zu,ju,sn,Cu,Pu,qu,io,Au,gi,Ou,Nu,_i,Iu,Lu,Su,$l,Wu,Ru,nn,kp,lo,Xo,Dl,rn,Uu,Fl,Hu,wp,_t,an,Qu,Bl,Vu,Ju,Yo,vi,Ku,Gu,Ti,Xu,Yu,Zu,ln,ef,bi,tf,of,yp,co,Zo,Ml,dn,sf,El,nf,$p,vt,cn,rf,pn,af,xl,lf,df,cf,es,ki,pf,hf,wi,uf,ff,mf,hn,gf,yi,_f,vf,Dp,po,ts,zl,un,Tf,jl,bf,Fp,He,fn,kf,Cl,wf,yf,mn,$f,$i,Df,Ff,Bf,gn,Mf,_n,Ef,xf,zf,Xe,vn,jf,ho,Cf,Di,Pf,qf,Pl,Af,Of,Nf,os,If,ql,Lf,Sf,Tn,Bp,uo,ss,Al,bn,Wf,Ol,Rf,Mp,Qe,kn,Uf,wn,Hf,Nl,Qf,Vf,Jf,yn,Kf,Fi,Gf,Xf,Yf,$n,Zf,Dn,em,tm,om,Se,Fn,sm,fo,nm,Bi,rm,am,Il,im,lm,dm,ns,cm,Ll,pm,hm,Bn,um,Mn,Ep,mo,rs,Sl,En,fm,Wl,mm,xp,Ve,xn,gm,Rl,_m,vm,zn,Tm,Mi,bm,km,wm,jn,ym,Cn,$m,Dm,Fm,be,Pn,Bm,go,Mm,Ei,Em,xm,Ul,zm,jm,Cm,as,Pm,Hl,qm,Am,qn,Om,An,Nm,Ql,Im,Lm,On,Sm,Nn,zp,_o,is,Vl,In,Wm,Jl,Rm,jp,Je,Ln,Um,Kl,Hm,Qm,Sn,Vm,xi,Jm,Km,Gm,Wn,Xm,Rn,Ym,Zm,eg,Ye,Un,tg,vo,og,zi,sg,ng,Gl,rg,ag,ig,ls,lg,Xl,dg,cg,Hn,Cp,To,ds,Yl,Qn,pg,Zl,hg,Pp,Ke,Vn,ug,ed,fg,mg,Jn,gg,ji,_g,vg,Tg,Kn,bg,Gn,kg,wg,yg,We,Xn,$g,bo,Dg,Ci,Fg,Bg,td,Mg,Eg,xg,cs,zg,od,jg,Cg,Yn,Pg,Zn,qp,ko,ps,sd,er,qg,nd,Ag,Ap,Ge,tr,Og,wo,Ng,rd,Ig,Lg,ad,Sg,Wg,Rg,or,Ug,Pi,Hg,Qg,Vg,sr,Jg,nr,Kg,Gg,Xg,Re,rr,Yg,yo,Zg,qi,e_,t_,id,o_,s_,n_,hs,r_,ld,a_,i_,ar,l_,ir,Op,$o,us,dd,lr,d_,cd,c_,Np,qe,dr,p_,pd,h_,u_,cr,f_,Ai,m_,g_,__,pr,v_,hr,T_,b_,k_,fs,w_,Ze,ur,y_,Do,$_,Oi,D_,F_,hd,B_,M_,E_,ms,x_,ud,z_,j_,fr,Ip,Fo,gs,fd,mr,C_,md,P_,Lp,Ae,gr,q_,_r,A_,gd,O_,N_,I_,vr,L_,Ni,S_,W_,R_,Tr,U_,br,H_,Q_,V_,_s,J_,et,kr,K_,Bo,G_,Ii,X_,Y_,_d,Z_,ev,tv,vs,ov,vd,sv,nv,wr,Sp,Mo,Ts,Td,yr,rv,bd,av,Wp,Oe,$r,iv,kd,lv,dv,Dr,cv,Li,pv,hv,uv,Fr,fv,Br,mv,gv,_v,bs,vv,tt,Mr,Tv,Eo,bv,Si,kv,wv,wd,yv,$v,Dv,ks,Fv,yd,Bv,Mv,Er,Rp,xo,ws,$d,xr,Ev,Dd,xv,Up,Ne,zr,zv,Fd,jv,Cv,jr,Pv,Wi,qv,Av,Ov,Cr,Nv,Pr,Iv,Lv,Sv,ys,Wv,ot,qr,Rv,zo,Uv,Ri,Hv,Qv,Bd,Vv,Jv,Kv,$s,Gv,Md,Xv,Yv,Ar,Hp,jo,Ds,Ed,Or,Zv,xd,eT,Qp,Ie,Nr,tT,zd,oT,sT,Ir,nT,Ui,rT,aT,iT,Lr,lT,Sr,dT,cT,pT,Fs,hT,st,Wr,uT,Co,fT,Hi,mT,gT,jd,_T,vT,TT,Bs,bT,Cd,kT,wT,Rr,Vp,Po,Ms,Pd,Ur,yT,qd,$T,Jp,Le,Hr,DT,qo,FT,Ad,BT,MT,Od,ET,xT,zT,Qr,jT,Qi,CT,PT,qT,Vr,AT,Jr,OT,NT,IT,Es,LT,nt,Kr,ST,Ao,WT,Vi,RT,UT,Nd,HT,QT,VT,xs,JT,Id,KT,GT,Gr,Kp,Oo,zs,Ld,Xr,XT,Sd,YT,Gp,Me,Yr,ZT,Wd,eb,tb,Zr,ob,Ji,sb,nb,rb,ea,ab,ta,ib,lb,db,Rd,cb,pb,xt,Ud,oa,hb,ub,Hd,sa,fb,mb,Qd,na,gb,_b,Vd,ra,vb,Tb,rt,aa,bb,No,kb,Jd,wb,yb,Kd,$b,Db,Fb,js,Bb,Gd,Mb,Eb,ia,Xp,Io,Cs,Xd,la,xb,Yd,zb,Yp,Ee,da,jb,ca,Cb,Zd,Pb,qb,Ab,pa,Ob,Ki,Nb,Ib,Lb,ha,Sb,ua,Wb,Rb,Ub,ec,Hb,Qb,zt,tc,fa,Vb,Jb,oc,ma,Kb,Gb,sc,ga,Xb,Yb,nc,_a,Zb,ek,at,va,tk,Lo,ok,rc,sk,nk,ac,rk,ak,ik,Ps,lk,ic,dk,ck,Ta,Zp,So,qs,lc,ba,pk,dc,hk,eh,xe,ka,uk,cc,fk,mk,wa,gk,Gi,_k,vk,Tk,ya,bk,$a,kk,wk,yk,pc,$k,Dk,jt,hc,Da,Fk,Bk,uc,Fa,Mk,Ek,fc,Ba,xk,zk,mc,Ma,jk,Ck,it,Ea,Pk,Wo,qk,gc,Ak,Ok,_c,Nk,Ik,Lk,As,Sk,vc,Wk,Rk,xa,th,Ro,Os,Tc,za,Uk,bc,Hk,oh,ze,ja,Qk,kc,Vk,Jk,Ca,Kk,Xi,Gk,Xk,Yk,Pa,Zk,qa,ew,tw,ow,wc,sw,nw,Ct,yc,Aa,rw,aw,$c,Oa,iw,lw,Dc,Na,dw,cw,Fc,Ia,pw,hw,lt,La,uw,Uo,fw,Bc,mw,gw,Mc,_w,vw,Tw,Ns,bw,Ec,kw,ww,Sa,sh,Ho,Is,xc,Wa,yw,zc,$w,nh,je,Ra,Dw,jc,Fw,Bw,Ua,Mw,Yi,Ew,xw,zw,Ha,jw,Qa,Cw,Pw,qw,Cc,Aw,Ow,Pt,Pc,Va,Nw,Iw,qc,Ja,Lw,Sw,Ac,Ka,Ww,Rw,Oc,Ga,Uw,Hw,dt,Xa,Qw,Qo,Vw,Nc,Jw,Kw,Ic,Gw,Xw,Yw,Ls,Zw,Lc,e1,t1,Ya,rh,Vo,Ss,Sc,Za,o1,Wc,s1,ah,Ce,ei,n1,Jo,r1,Rc,a1,i1,Uc,l1,d1,c1,ti,p1,Zi,h1,u1,f1,oi,m1,si,g1,_1,v1,Hc,T1,b1,qt,Qc,ni,k1,w1,Vc,ri,y1,$1,Jc,ai,D1,F1,Kc,ii,B1,M1,ct,li,E1,Ko,x1,Gc,z1,j1,Xc,C1,P1,q1,Ws,A1,Yc,O1,N1,di,ih;return _=new Te({}),X=new Te({}),tn=new Te({}),on=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new me({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new Te({}),an=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new Te({}),cn=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new Te({}),fn=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),os=new ge({props:{$$slots:{default:[bF]},$$scope:{ctx:j}}}),Tn=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new Te({}),kn=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new ge({props:{$$slots:{default:[kF]},$$scope:{ctx:j}}}),Bn=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),Mn=new me({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),En=new Te({}),xn=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),as=new ge({props:{$$slots:{default:[wF]},$$scope:{ctx:j}}}),qn=new me({props:{code:`import torch
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
`}}),An=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),On=new me({props:{code:`import torch
from transformers import DistilBertTokenizer, DistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Nn=new me({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),In=new Te({}),Ln=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Un=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new ge({props:{$$slots:{default:[yF]},$$scope:{ctx:j}}}),Hn=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qn=new Te({}),Vn=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new ge({props:{$$slots:{default:[$F]},$$scope:{ctx:j}}}),Yn=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),Zn=new me({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),er=new Te({}),tr=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new ge({props:{$$slots:{default:[DF]},$$scope:{ctx:j}}}),ar=new me({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),ir=new me({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),lr=new Te({}),dr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fs=new ge({props:{$$slots:{default:[FF]},$$scope:{ctx:j}}}),ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new ge({props:{$$slots:{default:[BF]},$$scope:{ctx:j}}}),fr=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mr=new Te({}),gr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new ge({props:{$$slots:{default:[MF]},$$scope:{ctx:j}}}),kr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new ge({props:{$$slots:{default:[EF]},$$scope:{ctx:j}}}),wr=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yr=new Te({}),$r=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),Mr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Er=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xr=new Te({}),zr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new ge({props:{$$slots:{default:[jF]},$$scope:{ctx:j}}}),qr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new ge({props:{$$slots:{default:[CF]},$$scope:{ctx:j}}}),Ar=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Or=new Te({}),Nr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fs=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),Wr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),Rr=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ur=new Te({}),Hr=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Kr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new ge({props:{$$slots:{default:[OF]},$$scope:{ctx:j}}}),Gr=new me({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Xr=new Te({}),Yr=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),aa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),js=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),ia=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),la=new Te({}),da=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),va=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),Ta=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ba=new Te({}),ka=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ea=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),xa=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),za=new Te({}),ja=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),La=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Sa=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Wa=new Te({}),Ra=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ya=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Za=new Te({}),ei=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),li=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16348/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16348/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16348/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16348/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),di=new me({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("meta"),F=l(),g=s("h1"),v=s("a"),T=s("span"),b(_.$$.fragment),f=l(),B=s("span"),de=a("DistilBERT"),V=l(),E=s("h2"),G=s("a"),L=s("span"),b(X.$$.fragment),ce=l(),S=s("span"),pe=a("Overview"),re=l(),N=s("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
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
separate your segments with the separation token `),ve=s("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=s("code"),H=a("[SEP]"),$e=a(")."),De=l(),Z=s("li"),Fe=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),Be=a("position_ids"),_u=a(` input). This could be added if
necessary though, just let us know if you need this option.`),vp=l(),Tt=s("p"),vu=a("This model was contributed by "),Ys=s("a"),Tu=a("victorsanh"),bu=a(`. This model jax version was
contributed by `),Zs=s("a"),ku=a("kamalkraj"),wu=a(". The original code can be found "),en=s("a"),yu=a("here"),$u=a("."),Tp=l(),ao=s("h2"),Go=s("a"),wl=s("span"),b(tn.$$.fragment),Du=l(),yl=s("span"),Fu=a("DistilBertConfig"),bp=l(),Ue=s("div"),b(on.$$.fragment),Bu=l(),Et=s("p"),Mu=a("This is the configuration class to store the configuration of a "),fi=s("a"),Eu=a("DistilBertModel"),xu=a(" or a "),mi=s("a"),zu=a("TFDistilBertModel"),ju=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=s("a"),Cu=a("distilbert-base-uncased"),Pu=a(" architecture."),qu=l(),io=s("p"),Au=a("Configuration objects inherit from "),gi=s("a"),Ou=a("PretrainedConfig"),Nu=a(` and can be used to control the model outputs. Read the
documentation from `),_i=s("a"),Iu=a("PretrainedConfig"),Lu=a(" for more information."),Su=l(),$l=s("p"),Wu=a("Examples:"),Ru=l(),b(nn.$$.fragment),kp=l(),lo=s("h2"),Xo=s("a"),Dl=s("span"),b(rn.$$.fragment),Uu=l(),Fl=s("span"),Hu=a("DistilBertTokenizer"),wp=l(),_t=s("div"),b(an.$$.fragment),Qu=l(),Bl=s("p"),Vu=a("Construct a DistilBERT tokenizer."),Ju=l(),Yo=s("p"),vi=s("a"),Ku=a("DistilBertTokenizer"),Gu=a(" is identical to "),Ti=s("a"),Xu=a("BertTokenizer"),Yu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zu=l(),ln=s("p"),ef=a("Refer to superclass "),bi=s("a"),tf=a("BertTokenizer"),of=a(" for usage examples and documentation concerning parameters."),yp=l(),co=s("h2"),Zo=s("a"),Ml=s("span"),b(dn.$$.fragment),sf=l(),El=s("span"),nf=a("DistilBertTokenizerFast"),$p=l(),vt=s("div"),b(cn.$$.fragment),rf=l(),pn=s("p"),af=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),xl=s("em"),lf=a("tokenizers"),df=a(" library)."),cf=l(),es=s("p"),ki=s("a"),pf=a("DistilBertTokenizerFast"),hf=a(" is identical to "),wi=s("a"),uf=a("BertTokenizerFast"),ff=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),mf=l(),hn=s("p"),gf=a("Refer to superclass "),yi=s("a"),_f=a("BertTokenizerFast"),vf=a(" for usage examples and documentation concerning parameters."),Dp=l(),po=s("h2"),ts=s("a"),zl=s("span"),b(un.$$.fragment),Tf=l(),jl=s("span"),bf=a("DistilBertModel"),Fp=l(),He=s("div"),b(fn.$$.fragment),kf=l(),Cl=s("p"),wf=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),yf=l(),mn=s("p"),$f=a("This model inherits from "),$i=s("a"),Df=a("PreTrainedModel"),Ff=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bf=l(),gn=s("p"),Mf=a("This model is also a PyTorch "),_n=s("a"),Ef=a("torch.nn.Module"),xf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zf=l(),Xe=s("div"),b(vn.$$.fragment),jf=l(),ho=s("p"),Cf=a("The "),Di=s("a"),Pf=a("DistilBertModel"),qf=a(" forward method, overrides the "),Pl=s("code"),Af=a("__call__"),Of=a(" special method."),Nf=l(),b(os.$$.fragment),If=l(),ql=s("p"),Lf=a("Example:"),Sf=l(),b(Tn.$$.fragment),Bp=l(),uo=s("h2"),ss=s("a"),Al=s("span"),b(bn.$$.fragment),Wf=l(),Ol=s("span"),Rf=a("DistilBertForMaskedLM"),Mp=l(),Qe=s("div"),b(kn.$$.fragment),Uf=l(),wn=s("p"),Hf=a("DistilBert Model with a "),Nl=s("code"),Qf=a("masked language modeling"),Vf=a(" head on top."),Jf=l(),yn=s("p"),Kf=a("This model inherits from "),Fi=s("a"),Gf=a("PreTrainedModel"),Xf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf=l(),$n=s("p"),Zf=a("This model is also a PyTorch "),Dn=s("a"),em=a("torch.nn.Module"),tm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),om=l(),Se=s("div"),b(Fn.$$.fragment),sm=l(),fo=s("p"),nm=a("The "),Bi=s("a"),rm=a("DistilBertForMaskedLM"),am=a(" forward method, overrides the "),Il=s("code"),im=a("__call__"),lm=a(" special method."),dm=l(),b(ns.$$.fragment),cm=l(),Ll=s("p"),pm=a("Example:"),hm=l(),b(Bn.$$.fragment),um=l(),b(Mn.$$.fragment),Ep=l(),mo=s("h2"),rs=s("a"),Sl=s("span"),b(En.$$.fragment),fm=l(),Wl=s("span"),mm=a("DistilBertForSequenceClassification"),xp=l(),Ve=s("div"),b(xn.$$.fragment),gm=l(),Rl=s("p"),_m=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vm=l(),zn=s("p"),Tm=a("This model inherits from "),Mi=s("a"),bm=a("PreTrainedModel"),km=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wm=l(),jn=s("p"),ym=a("This model is also a PyTorch "),Cn=s("a"),$m=a("torch.nn.Module"),Dm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fm=l(),be=s("div"),b(Pn.$$.fragment),Bm=l(),go=s("p"),Mm=a("The "),Ei=s("a"),Em=a("DistilBertForSequenceClassification"),xm=a(" forward method, overrides the "),Ul=s("code"),zm=a("__call__"),jm=a(" special method."),Cm=l(),b(as.$$.fragment),Pm=l(),Hl=s("p"),qm=a("Example of single-label classification:"),Am=l(),b(qn.$$.fragment),Om=l(),b(An.$$.fragment),Nm=l(),Ql=s("p"),Im=a("Example of multi-label classification:"),Lm=l(),b(On.$$.fragment),Sm=l(),b(Nn.$$.fragment),zp=l(),_o=s("h2"),is=s("a"),Vl=s("span"),b(In.$$.fragment),Wm=l(),Jl=s("span"),Rm=a("DistilBertForMultipleChoice"),jp=l(),Je=s("div"),b(Ln.$$.fragment),Um=l(),Kl=s("p"),Hm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Qm=l(),Sn=s("p"),Vm=a("This model inherits from "),xi=s("a"),Jm=a("PreTrainedModel"),Km=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gm=l(),Wn=s("p"),Xm=a("This model is also a PyTorch "),Rn=s("a"),Ym=a("torch.nn.Module"),Zm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg=l(),Ye=s("div"),b(Un.$$.fragment),tg=l(),vo=s("p"),og=a("The "),zi=s("a"),sg=a("DistilBertForMultipleChoice"),ng=a(" forward method, overrides the "),Gl=s("code"),rg=a("__call__"),ag=a(" special method."),ig=l(),b(ls.$$.fragment),lg=l(),Xl=s("p"),dg=a("Examples:"),cg=l(),b(Hn.$$.fragment),Cp=l(),To=s("h2"),ds=s("a"),Yl=s("span"),b(Qn.$$.fragment),pg=l(),Zl=s("span"),hg=a("DistilBertForTokenClassification"),Pp=l(),Ke=s("div"),b(Vn.$$.fragment),ug=l(),ed=s("p"),fg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),mg=l(),Jn=s("p"),gg=a("This model inherits from "),ji=s("a"),_g=a("PreTrainedModel"),vg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg=l(),Kn=s("p"),bg=a("This model is also a PyTorch "),Gn=s("a"),kg=a("torch.nn.Module"),wg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yg=l(),We=s("div"),b(Xn.$$.fragment),$g=l(),bo=s("p"),Dg=a("The "),Ci=s("a"),Fg=a("DistilBertForTokenClassification"),Bg=a(" forward method, overrides the "),td=s("code"),Mg=a("__call__"),Eg=a(" special method."),xg=l(),b(cs.$$.fragment),zg=l(),od=s("p"),jg=a("Example:"),Cg=l(),b(Yn.$$.fragment),Pg=l(),b(Zn.$$.fragment),qp=l(),ko=s("h2"),ps=s("a"),sd=s("span"),b(er.$$.fragment),qg=l(),nd=s("span"),Ag=a("DistilBertForQuestionAnswering"),Ap=l(),Ge=s("div"),b(tr.$$.fragment),Og=l(),wo=s("p"),Ng=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),rd=s("code"),Ig=a("span start logits"),Lg=a(" and "),ad=s("code"),Sg=a("span end logits"),Wg=a(")."),Rg=l(),or=s("p"),Ug=a("This model inherits from "),Pi=s("a"),Hg=a("PreTrainedModel"),Qg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vg=l(),sr=s("p"),Jg=a("This model is also a PyTorch "),nr=s("a"),Kg=a("torch.nn.Module"),Gg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xg=l(),Re=s("div"),b(rr.$$.fragment),Yg=l(),yo=s("p"),Zg=a("The "),qi=s("a"),e_=a("DistilBertForQuestionAnswering"),t_=a(" forward method, overrides the "),id=s("code"),o_=a("__call__"),s_=a(" special method."),n_=l(),b(hs.$$.fragment),r_=l(),ld=s("p"),a_=a("Example:"),i_=l(),b(ar.$$.fragment),l_=l(),b(ir.$$.fragment),Op=l(),$o=s("h2"),us=s("a"),dd=s("span"),b(lr.$$.fragment),d_=l(),cd=s("span"),c_=a("TFDistilBertModel"),Np=l(),qe=s("div"),b(dr.$$.fragment),p_=l(),pd=s("p"),h_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),u_=l(),cr=s("p"),f_=a("This model inherits from "),Ai=s("a"),m_=a("TFPreTrainedModel"),g_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__=l(),pr=s("p"),v_=a("This model is also a "),hr=s("a"),T_=a("tf.keras.Model"),b_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),k_=l(),b(fs.$$.fragment),w_=l(),Ze=s("div"),b(ur.$$.fragment),y_=l(),Do=s("p"),$_=a("The "),Oi=s("a"),D_=a("TFDistilBertModel"),F_=a(" forward method, overrides the "),hd=s("code"),B_=a("__call__"),M_=a(" special method."),E_=l(),b(ms.$$.fragment),x_=l(),ud=s("p"),z_=a("Example:"),j_=l(),b(fr.$$.fragment),Ip=l(),Fo=s("h2"),gs=s("a"),fd=s("span"),b(mr.$$.fragment),C_=l(),md=s("span"),P_=a("TFDistilBertForMaskedLM"),Lp=l(),Ae=s("div"),b(gr.$$.fragment),q_=l(),_r=s("p"),A_=a("DistilBert Model with a "),gd=s("code"),O_=a("masked language modeling"),N_=a(" head on top."),I_=l(),vr=s("p"),L_=a("This model inherits from "),Ni=s("a"),S_=a("TFPreTrainedModel"),W_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),R_=l(),Tr=s("p"),U_=a("This model is also a "),br=s("a"),H_=a("tf.keras.Model"),Q_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V_=l(),b(_s.$$.fragment),J_=l(),et=s("div"),b(kr.$$.fragment),K_=l(),Bo=s("p"),G_=a("The "),Ii=s("a"),X_=a("TFDistilBertForMaskedLM"),Y_=a(" forward method, overrides the "),_d=s("code"),Z_=a("__call__"),ev=a(" special method."),tv=l(),b(vs.$$.fragment),ov=l(),vd=s("p"),sv=a("Example:"),nv=l(),b(wr.$$.fragment),Sp=l(),Mo=s("h2"),Ts=s("a"),Td=s("span"),b(yr.$$.fragment),rv=l(),bd=s("span"),av=a("TFDistilBertForSequenceClassification"),Wp=l(),Oe=s("div"),b($r.$$.fragment),iv=l(),kd=s("p"),lv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dv=l(),Dr=s("p"),cv=a("This model inherits from "),Li=s("a"),pv=a("TFPreTrainedModel"),hv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=l(),Fr=s("p"),fv=a("This model is also a "),Br=s("a"),mv=a("tf.keras.Model"),gv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_v=l(),b(bs.$$.fragment),vv=l(),tt=s("div"),b(Mr.$$.fragment),Tv=l(),Eo=s("p"),bv=a("The "),Si=s("a"),kv=a("TFDistilBertForSequenceClassification"),wv=a(" forward method, overrides the "),wd=s("code"),yv=a("__call__"),$v=a(" special method."),Dv=l(),b(ks.$$.fragment),Fv=l(),yd=s("p"),Bv=a("Example:"),Mv=l(),b(Er.$$.fragment),Rp=l(),xo=s("h2"),ws=s("a"),$d=s("span"),b(xr.$$.fragment),Ev=l(),Dd=s("span"),xv=a("TFDistilBertForMultipleChoice"),Up=l(),Ne=s("div"),b(zr.$$.fragment),zv=l(),Fd=s("p"),jv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cv=l(),jr=s("p"),Pv=a("This model inherits from "),Wi=s("a"),qv=a("TFPreTrainedModel"),Av=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=l(),Cr=s("p"),Nv=a("This model is also a "),Pr=s("a"),Iv=a("tf.keras.Model"),Lv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv=l(),b(ys.$$.fragment),Wv=l(),ot=s("div"),b(qr.$$.fragment),Rv=l(),zo=s("p"),Uv=a("The "),Ri=s("a"),Hv=a("TFDistilBertForMultipleChoice"),Qv=a(" forward method, overrides the "),Bd=s("code"),Vv=a("__call__"),Jv=a(" special method."),Kv=l(),b($s.$$.fragment),Gv=l(),Md=s("p"),Xv=a("Example:"),Yv=l(),b(Ar.$$.fragment),Hp=l(),jo=s("h2"),Ds=s("a"),Ed=s("span"),b(Or.$$.fragment),Zv=l(),xd=s("span"),eT=a("TFDistilBertForTokenClassification"),Qp=l(),Ie=s("div"),b(Nr.$$.fragment),tT=l(),zd=s("p"),oT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),sT=l(),Ir=s("p"),nT=a("This model inherits from "),Ui=s("a"),rT=a("TFPreTrainedModel"),aT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=l(),Lr=s("p"),lT=a("This model is also a "),Sr=s("a"),dT=a("tf.keras.Model"),cT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pT=l(),b(Fs.$$.fragment),hT=l(),st=s("div"),b(Wr.$$.fragment),uT=l(),Co=s("p"),fT=a("The "),Hi=s("a"),mT=a("TFDistilBertForTokenClassification"),gT=a(" forward method, overrides the "),jd=s("code"),_T=a("__call__"),vT=a(" special method."),TT=l(),b(Bs.$$.fragment),bT=l(),Cd=s("p"),kT=a("Example:"),wT=l(),b(Rr.$$.fragment),Vp=l(),Po=s("h2"),Ms=s("a"),Pd=s("span"),b(Ur.$$.fragment),yT=l(),qd=s("span"),$T=a("TFDistilBertForQuestionAnswering"),Jp=l(),Le=s("div"),b(Hr.$$.fragment),DT=l(),qo=s("p"),FT=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ad=s("code"),BT=a("span start logits"),MT=a(" and "),Od=s("code"),ET=a("span end logits"),xT=a(")."),zT=l(),Qr=s("p"),jT=a("This model inherits from "),Qi=s("a"),CT=a("TFPreTrainedModel"),PT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qT=l(),Vr=s("p"),AT=a("This model is also a "),Jr=s("a"),OT=a("tf.keras.Model"),NT=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),IT=l(),b(Es.$$.fragment),LT=l(),nt=s("div"),b(Kr.$$.fragment),ST=l(),Ao=s("p"),WT=a("The "),Vi=s("a"),RT=a("TFDistilBertForQuestionAnswering"),UT=a(" forward method, overrides the "),Nd=s("code"),HT=a("__call__"),QT=a(" special method."),VT=l(),b(xs.$$.fragment),JT=l(),Id=s("p"),KT=a("Example:"),GT=l(),b(Gr.$$.fragment),Kp=l(),Oo=s("h2"),zs=s("a"),Ld=s("span"),b(Xr.$$.fragment),XT=l(),Sd=s("span"),YT=a("FlaxDistilBertModel"),Gp=l(),Me=s("div"),b(Yr.$$.fragment),ZT=l(),Wd=s("p"),eb=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),tb=l(),Zr=s("p"),ob=a("This model inherits from "),Ji=s("a"),sb=a("FlaxPreTrainedModel"),nb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rb=l(),ea=s("p"),ab=a("This model is also a Flax Linen "),ta=s("a"),ib=a("flax.linen.Module"),lb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),db=l(),Rd=s("p"),cb=a("Finally, this model supports inherent JAX features such as:"),pb=l(),xt=s("ul"),Ud=s("li"),oa=s("a"),hb=a("Just-In-Time (JIT) compilation"),ub=l(),Hd=s("li"),sa=s("a"),fb=a("Automatic Differentiation"),mb=l(),Qd=s("li"),na=s("a"),gb=a("Vectorization"),_b=l(),Vd=s("li"),ra=s("a"),vb=a("Parallelization"),Tb=l(),rt=s("div"),b(aa.$$.fragment),bb=l(),No=s("p"),kb=a("The "),Jd=s("code"),wb=a("FlaxDistilBertPreTrainedModel"),yb=a("forward method, overrides the "),Kd=s("code"),$b=a("__call__"),Db=a(" special method."),Fb=l(),b(js.$$.fragment),Bb=l(),Gd=s("p"),Mb=a("Example:"),Eb=l(),b(ia.$$.fragment),Xp=l(),Io=s("h2"),Cs=s("a"),Xd=s("span"),b(la.$$.fragment),xb=l(),Yd=s("span"),zb=a("FlaxDistilBertForMaskedLM"),Yp=l(),Ee=s("div"),b(da.$$.fragment),jb=l(),ca=s("p"),Cb=a("DistilBert Model with a "),Zd=s("code"),Pb=a("language modeling"),qb=a(" head on top."),Ab=l(),pa=s("p"),Ob=a("This model inherits from "),Ki=s("a"),Nb=a("FlaxPreTrainedModel"),Ib=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lb=l(),ha=s("p"),Sb=a("This model is also a Flax Linen "),ua=s("a"),Wb=a("flax.linen.Module"),Rb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=l(),ec=s("p"),Hb=a("Finally, this model supports inherent JAX features such as:"),Qb=l(),zt=s("ul"),tc=s("li"),fa=s("a"),Vb=a("Just-In-Time (JIT) compilation"),Jb=l(),oc=s("li"),ma=s("a"),Kb=a("Automatic Differentiation"),Gb=l(),sc=s("li"),ga=s("a"),Xb=a("Vectorization"),Yb=l(),nc=s("li"),_a=s("a"),Zb=a("Parallelization"),ek=l(),at=s("div"),b(va.$$.fragment),tk=l(),Lo=s("p"),ok=a("The "),rc=s("code"),sk=a("FlaxDistilBertPreTrainedModel"),nk=a("forward method, overrides the "),ac=s("code"),rk=a("__call__"),ak=a(" special method."),ik=l(),b(Ps.$$.fragment),lk=l(),ic=s("p"),dk=a("Example:"),ck=l(),b(Ta.$$.fragment),Zp=l(),So=s("h2"),qs=s("a"),lc=s("span"),b(ba.$$.fragment),pk=l(),dc=s("span"),hk=a("FlaxDistilBertForSequenceClassification"),eh=l(),xe=s("div"),b(ka.$$.fragment),uk=l(),cc=s("p"),fk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),mk=l(),wa=s("p"),gk=a("This model inherits from "),Gi=s("a"),_k=a("FlaxPreTrainedModel"),vk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tk=l(),ya=s("p"),bk=a("This model is also a Flax Linen "),$a=s("a"),kk=a("flax.linen.Module"),wk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yk=l(),pc=s("p"),$k=a("Finally, this model supports inherent JAX features such as:"),Dk=l(),jt=s("ul"),hc=s("li"),Da=s("a"),Fk=a("Just-In-Time (JIT) compilation"),Bk=l(),uc=s("li"),Fa=s("a"),Mk=a("Automatic Differentiation"),Ek=l(),fc=s("li"),Ba=s("a"),xk=a("Vectorization"),zk=l(),mc=s("li"),Ma=s("a"),jk=a("Parallelization"),Ck=l(),it=s("div"),b(Ea.$$.fragment),Pk=l(),Wo=s("p"),qk=a("The "),gc=s("code"),Ak=a("FlaxDistilBertPreTrainedModel"),Ok=a("forward method, overrides the "),_c=s("code"),Nk=a("__call__"),Ik=a(" special method."),Lk=l(),b(As.$$.fragment),Sk=l(),vc=s("p"),Wk=a("Example:"),Rk=l(),b(xa.$$.fragment),th=l(),Ro=s("h2"),Os=s("a"),Tc=s("span"),b(za.$$.fragment),Uk=l(),bc=s("span"),Hk=a("FlaxDistilBertForMultipleChoice"),oh=l(),ze=s("div"),b(ja.$$.fragment),Qk=l(),kc=s("p"),Vk=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Jk=l(),Ca=s("p"),Kk=a("This model inherits from "),Xi=s("a"),Gk=a("FlaxPreTrainedModel"),Xk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yk=l(),Pa=s("p"),Zk=a("This model is also a Flax Linen "),qa=s("a"),ew=a("flax.linen.Module"),tw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ow=l(),wc=s("p"),sw=a("Finally, this model supports inherent JAX features such as:"),nw=l(),Ct=s("ul"),yc=s("li"),Aa=s("a"),rw=a("Just-In-Time (JIT) compilation"),aw=l(),$c=s("li"),Oa=s("a"),iw=a("Automatic Differentiation"),lw=l(),Dc=s("li"),Na=s("a"),dw=a("Vectorization"),cw=l(),Fc=s("li"),Ia=s("a"),pw=a("Parallelization"),hw=l(),lt=s("div"),b(La.$$.fragment),uw=l(),Uo=s("p"),fw=a("The "),Bc=s("code"),mw=a("FlaxDistilBertPreTrainedModel"),gw=a("forward method, overrides the "),Mc=s("code"),_w=a("__call__"),vw=a(" special method."),Tw=l(),b(Ns.$$.fragment),bw=l(),Ec=s("p"),kw=a("Example:"),ww=l(),b(Sa.$$.fragment),sh=l(),Ho=s("h2"),Is=s("a"),xc=s("span"),b(Wa.$$.fragment),yw=l(),zc=s("span"),$w=a("FlaxDistilBertForTokenClassification"),nh=l(),je=s("div"),b(Ra.$$.fragment),Dw=l(),jc=s("p"),Fw=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bw=l(),Ua=s("p"),Mw=a("This model inherits from "),Yi=s("a"),Ew=a("FlaxPreTrainedModel"),xw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zw=l(),Ha=s("p"),jw=a("This model is also a Flax Linen "),Qa=s("a"),Cw=a("flax.linen.Module"),Pw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qw=l(),Cc=s("p"),Aw=a("Finally, this model supports inherent JAX features such as:"),Ow=l(),Pt=s("ul"),Pc=s("li"),Va=s("a"),Nw=a("Just-In-Time (JIT) compilation"),Iw=l(),qc=s("li"),Ja=s("a"),Lw=a("Automatic Differentiation"),Sw=l(),Ac=s("li"),Ka=s("a"),Ww=a("Vectorization"),Rw=l(),Oc=s("li"),Ga=s("a"),Uw=a("Parallelization"),Hw=l(),dt=s("div"),b(Xa.$$.fragment),Qw=l(),Qo=s("p"),Vw=a("The "),Nc=s("code"),Jw=a("FlaxDistilBertPreTrainedModel"),Kw=a("forward method, overrides the "),Ic=s("code"),Gw=a("__call__"),Xw=a(" special method."),Yw=l(),b(Ls.$$.fragment),Zw=l(),Lc=s("p"),e1=a("Example:"),t1=l(),b(Ya.$$.fragment),rh=l(),Vo=s("h2"),Ss=s("a"),Sc=s("span"),b(Za.$$.fragment),o1=l(),Wc=s("span"),s1=a("FlaxDistilBertForQuestionAnswering"),ah=l(),Ce=s("div"),b(ei.$$.fragment),n1=l(),Jo=s("p"),r1=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rc=s("code"),a1=a("span start logits"),i1=a(" and "),Uc=s("code"),l1=a("span end logits"),d1=a(")."),c1=l(),ti=s("p"),p1=a("This model inherits from "),Zi=s("a"),h1=a("FlaxPreTrainedModel"),u1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f1=l(),oi=s("p"),m1=a("This model is also a Flax Linen "),si=s("a"),g1=a("flax.linen.Module"),_1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),v1=l(),Hc=s("p"),T1=a("Finally, this model supports inherent JAX features such as:"),b1=l(),qt=s("ul"),Qc=s("li"),ni=s("a"),k1=a("Just-In-Time (JIT) compilation"),w1=l(),Vc=s("li"),ri=s("a"),y1=a("Automatic Differentiation"),$1=l(),Jc=s("li"),ai=s("a"),D1=a("Vectorization"),F1=l(),Kc=s("li"),ii=s("a"),B1=a("Parallelization"),M1=l(),ct=s("div"),b(li.$$.fragment),E1=l(),Ko=s("p"),x1=a("The "),Gc=s("code"),z1=a("FlaxDistilBertPreTrainedModel"),j1=a("forward method, overrides the "),Xc=s("code"),C1=a("__call__"),P1=a(" special method."),q1=l(),b(Ws.$$.fragment),A1=l(),Yc=s("p"),O1=a("Example:"),N1=l(),b(di.$$.fragment),this.h()},l(o){const m=vF('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),g=n(o,"H1",{class:!0});var ci=r(g);v=n(ci,"A",{id:!0,class:!0,href:!0});var Zc=r(v);T=n(Zc,"SPAN",{});var ep=r(T);k(_.$$.fragment,ep),ep.forEach(t),Zc.forEach(t),f=d(ci),B=n(ci,"SPAN",{});var tp=r(B);de=i(tp,"DistilBERT"),tp.forEach(t),ci.forEach(t),V=d(o),E=n(o,"H2",{class:!0});var pi=r(E);G=n(pi,"A",{id:!0,class:!0,href:!0});var op=r(G);L=n(op,"SPAN",{});var sp=r(L);k(X.$$.fragment,sp),sp.forEach(t),op.forEach(t),ce=d(pi),S=n(pi,"SPAN",{});var np=r(S);pe=i(np,"Overview"),np.forEach(t),pi.forEach(t),re=d(o),N=n(o,"P",{});var At=r(N);q=i(At,"The DistilBERT model was proposed in the blog post "),Y=n(At,"A",{href:!0,rel:!0});var rp=r(Y);J=i(rp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),rp.forEach(t),x=i(At,", and the paper "),z=n(At,"A",{href:!0,rel:!0});var ap=r(z);he=i(ap,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),ap.forEach(t),W=i(At,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n(At,"EM",{});var ip=r(oe);ue=i(ip,"bert-base-uncased"),ip.forEach(t),R=i(At,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),At.forEach(t),ae=d(o),ee=n(o,"P",{});var lp=r(ee);A=i(lp,"The abstract from the paper is the following:"),lp.forEach(t),ie=d(o),I=n(o,"P",{});var dp=r(I);se=n(dp,"EM",{});var cp=r(se);fe=i(cp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),cp.forEach(t),dp.forEach(t),P=d(o),te=n(o,"P",{});var pp=r(te);U=i(pp,"Tips:"),pp.forEach(t),le=d(o),h=n(o,"UL",{});var hi=r(h);M=n(hi,"LI",{});var Ot=r(M);K=i(Ot,"DistilBERT doesn\u2019t have "),_e=n(Ot,"CODE",{});var hp=r(_e);ke=i(hp,"token_type_ids"),hp.forEach(t),O=i(Ot,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(Ot,"CODE",{});var up=r(ve);we=i(up,"tokenizer.sep_token"),up.forEach(t),ye=i(Ot," (or "),C=n(Ot,"CODE",{});var fp=r(C);H=i(fp,"[SEP]"),fp.forEach(t),$e=i(Ot,")."),Ot.forEach(t),De=d(hi),Z=n(hi,"LI",{});var ui=r(Z);Fe=i(ui,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(ui,"CODE",{});var mp=r(ne);Be=i(mp,"position_ids"),mp.forEach(t),_u=i(ui,` input). This could be added if
necessary though, just let us know if you need this option.`),ui.forEach(t),hi.forEach(t),vp=d(o),Tt=n(o,"P",{});var Nt=r(Tt);vu=i(Nt,"This model was contributed by "),Ys=n(Nt,"A",{href:!0,rel:!0});var I1=r(Ys);Tu=i(I1,"victorsanh"),I1.forEach(t),bu=i(Nt,`. This model jax version was
contributed by `),Zs=n(Nt,"A",{href:!0,rel:!0});var L1=r(Zs);ku=i(L1,"kamalkraj"),L1.forEach(t),wu=i(Nt,". The original code can be found "),en=n(Nt,"A",{href:!0,rel:!0});var S1=r(en);yu=i(S1,"here"),S1.forEach(t),$u=i(Nt,"."),Nt.forEach(t),Tp=d(o),ao=n(o,"H2",{class:!0});var lh=r(ao);Go=n(lh,"A",{id:!0,class:!0,href:!0});var W1=r(Go);wl=n(W1,"SPAN",{});var R1=r(wl);k(tn.$$.fragment,R1),R1.forEach(t),W1.forEach(t),Du=d(lh),yl=n(lh,"SPAN",{});var U1=r(yl);Fu=i(U1,"DistilBertConfig"),U1.forEach(t),lh.forEach(t),bp=d(o),Ue=n(o,"DIV",{class:!0});var It=r(Ue);k(on.$$.fragment,It),Bu=d(It),Et=n(It,"P",{});var Rs=r(Et);Mu=i(Rs,"This is the configuration class to store the configuration of a "),fi=n(Rs,"A",{href:!0});var H1=r(fi);Eu=i(H1,"DistilBertModel"),H1.forEach(t),xu=i(Rs," or a "),mi=n(Rs,"A",{href:!0});var Q1=r(mi);zu=i(Q1,"TFDistilBertModel"),Q1.forEach(t),ju=i(Rs,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=n(Rs,"A",{href:!0,rel:!0});var V1=r(sn);Cu=i(V1,"distilbert-base-uncased"),V1.forEach(t),Pu=i(Rs," architecture."),Rs.forEach(t),qu=d(It),io=n(It,"P",{});var el=r(io);Au=i(el,"Configuration objects inherit from "),gi=n(el,"A",{href:!0});var J1=r(gi);Ou=i(J1,"PretrainedConfig"),J1.forEach(t),Nu=i(el,` and can be used to control the model outputs. Read the
documentation from `),_i=n(el,"A",{href:!0});var K1=r(_i);Iu=i(K1,"PretrainedConfig"),K1.forEach(t),Lu=i(el," for more information."),el.forEach(t),Su=d(It),$l=n(It,"P",{});var G1=r($l);Wu=i(G1,"Examples:"),G1.forEach(t),Ru=d(It),k(nn.$$.fragment,It),It.forEach(t),kp=d(o),lo=n(o,"H2",{class:!0});var dh=r(lo);Xo=n(dh,"A",{id:!0,class:!0,href:!0});var X1=r(Xo);Dl=n(X1,"SPAN",{});var Y1=r(Dl);k(rn.$$.fragment,Y1),Y1.forEach(t),X1.forEach(t),Uu=d(dh),Fl=n(dh,"SPAN",{});var Z1=r(Fl);Hu=i(Z1,"DistilBertTokenizer"),Z1.forEach(t),dh.forEach(t),wp=d(o),_t=n(o,"DIV",{class:!0});var Us=r(_t);k(an.$$.fragment,Us),Qu=d(Us),Bl=n(Us,"P",{});var ey=r(Bl);Vu=i(ey,"Construct a DistilBERT tokenizer."),ey.forEach(t),Ju=d(Us),Yo=n(Us,"P",{});var gp=r(Yo);vi=n(gp,"A",{href:!0});var ty=r(vi);Ku=i(ty,"DistilBertTokenizer"),ty.forEach(t),Gu=i(gp," is identical to "),Ti=n(gp,"A",{href:!0});var oy=r(Ti);Xu=i(oy,"BertTokenizer"),oy.forEach(t),Yu=i(gp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),gp.forEach(t),Zu=d(Us),ln=n(Us,"P",{});var ch=r(ln);ef=i(ch,"Refer to superclass "),bi=n(ch,"A",{href:!0});var sy=r(bi);tf=i(sy,"BertTokenizer"),sy.forEach(t),of=i(ch," for usage examples and documentation concerning parameters."),ch.forEach(t),Us.forEach(t),yp=d(o),co=n(o,"H2",{class:!0});var ph=r(co);Zo=n(ph,"A",{id:!0,class:!0,href:!0});var ny=r(Zo);Ml=n(ny,"SPAN",{});var ry=r(Ml);k(dn.$$.fragment,ry),ry.forEach(t),ny.forEach(t),sf=d(ph),El=n(ph,"SPAN",{});var ay=r(El);nf=i(ay,"DistilBertTokenizerFast"),ay.forEach(t),ph.forEach(t),$p=d(o),vt=n(o,"DIV",{class:!0});var Hs=r(vt);k(cn.$$.fragment,Hs),rf=d(Hs),pn=n(Hs,"P",{});var hh=r(pn);af=i(hh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),xl=n(hh,"EM",{});var iy=r(xl);lf=i(iy,"tokenizers"),iy.forEach(t),df=i(hh," library)."),hh.forEach(t),cf=d(Hs),es=n(Hs,"P",{});var _p=r(es);ki=n(_p,"A",{href:!0});var ly=r(ki);pf=i(ly,"DistilBertTokenizerFast"),ly.forEach(t),hf=i(_p," is identical to "),wi=n(_p,"A",{href:!0});var dy=r(wi);uf=i(dy,"BertTokenizerFast"),dy.forEach(t),ff=i(_p,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),_p.forEach(t),mf=d(Hs),hn=n(Hs,"P",{});var uh=r(hn);gf=i(uh,"Refer to superclass "),yi=n(uh,"A",{href:!0});var cy=r(yi);_f=i(cy,"BertTokenizerFast"),cy.forEach(t),vf=i(uh," for usage examples and documentation concerning parameters."),uh.forEach(t),Hs.forEach(t),Dp=d(o),po=n(o,"H2",{class:!0});var fh=r(po);ts=n(fh,"A",{id:!0,class:!0,href:!0});var py=r(ts);zl=n(py,"SPAN",{});var hy=r(zl);k(un.$$.fragment,hy),hy.forEach(t),py.forEach(t),Tf=d(fh),jl=n(fh,"SPAN",{});var uy=r(jl);bf=i(uy,"DistilBertModel"),uy.forEach(t),fh.forEach(t),Fp=d(o),He=n(o,"DIV",{class:!0});var Lt=r(He);k(fn.$$.fragment,Lt),kf=d(Lt),Cl=n(Lt,"P",{});var fy=r(Cl);wf=i(fy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),fy.forEach(t),yf=d(Lt),mn=n(Lt,"P",{});var mh=r(mn);$f=i(mh,"This model inherits from "),$i=n(mh,"A",{href:!0});var my=r($i);Df=i(my,"PreTrainedModel"),my.forEach(t),Ff=i(mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh.forEach(t),Bf=d(Lt),gn=n(Lt,"P",{});var gh=r(gn);Mf=i(gh,"This model is also a PyTorch "),_n=n(gh,"A",{href:!0,rel:!0});var gy=r(_n);Ef=i(gy,"torch.nn.Module"),gy.forEach(t),xf=i(gh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh.forEach(t),zf=d(Lt),Xe=n(Lt,"DIV",{class:!0});var St=r(Xe);k(vn.$$.fragment,St),jf=d(St),ho=n(St,"P",{});var tl=r(ho);Cf=i(tl,"The "),Di=n(tl,"A",{href:!0});var _y=r(Di);Pf=i(_y,"DistilBertModel"),_y.forEach(t),qf=i(tl," forward method, overrides the "),Pl=n(tl,"CODE",{});var vy=r(Pl);Af=i(vy,"__call__"),vy.forEach(t),Of=i(tl," special method."),tl.forEach(t),Nf=d(St),k(os.$$.fragment,St),If=d(St),ql=n(St,"P",{});var Ty=r(ql);Lf=i(Ty,"Example:"),Ty.forEach(t),Sf=d(St),k(Tn.$$.fragment,St),St.forEach(t),Lt.forEach(t),Bp=d(o),uo=n(o,"H2",{class:!0});var _h=r(uo);ss=n(_h,"A",{id:!0,class:!0,href:!0});var by=r(ss);Al=n(by,"SPAN",{});var ky=r(Al);k(bn.$$.fragment,ky),ky.forEach(t),by.forEach(t),Wf=d(_h),Ol=n(_h,"SPAN",{});var wy=r(Ol);Rf=i(wy,"DistilBertForMaskedLM"),wy.forEach(t),_h.forEach(t),Mp=d(o),Qe=n(o,"DIV",{class:!0});var Wt=r(Qe);k(kn.$$.fragment,Wt),Uf=d(Wt),wn=n(Wt,"P",{});var vh=r(wn);Hf=i(vh,"DistilBert Model with a "),Nl=n(vh,"CODE",{});var yy=r(Nl);Qf=i(yy,"masked language modeling"),yy.forEach(t),Vf=i(vh," head on top."),vh.forEach(t),Jf=d(Wt),yn=n(Wt,"P",{});var Th=r(yn);Kf=i(Th,"This model inherits from "),Fi=n(Th,"A",{href:!0});var $y=r(Fi);Gf=i($y,"PreTrainedModel"),$y.forEach(t),Xf=i(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Yf=d(Wt),$n=n(Wt,"P",{});var bh=r($n);Zf=i(bh,"This model is also a PyTorch "),Dn=n(bh,"A",{href:!0,rel:!0});var Dy=r(Dn);em=i(Dy,"torch.nn.Module"),Dy.forEach(t),tm=i(bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bh.forEach(t),om=d(Wt),Se=n(Wt,"DIV",{class:!0});var bt=r(Se);k(Fn.$$.fragment,bt),sm=d(bt),fo=n(bt,"P",{});var ol=r(fo);nm=i(ol,"The "),Bi=n(ol,"A",{href:!0});var Fy=r(Bi);rm=i(Fy,"DistilBertForMaskedLM"),Fy.forEach(t),am=i(ol," forward method, overrides the "),Il=n(ol,"CODE",{});var By=r(Il);im=i(By,"__call__"),By.forEach(t),lm=i(ol," special method."),ol.forEach(t),dm=d(bt),k(ns.$$.fragment,bt),cm=d(bt),Ll=n(bt,"P",{});var My=r(Ll);pm=i(My,"Example:"),My.forEach(t),hm=d(bt),k(Bn.$$.fragment,bt),um=d(bt),k(Mn.$$.fragment,bt),bt.forEach(t),Wt.forEach(t),Ep=d(o),mo=n(o,"H2",{class:!0});var kh=r(mo);rs=n(kh,"A",{id:!0,class:!0,href:!0});var Ey=r(rs);Sl=n(Ey,"SPAN",{});var xy=r(Sl);k(En.$$.fragment,xy),xy.forEach(t),Ey.forEach(t),fm=d(kh),Wl=n(kh,"SPAN",{});var zy=r(Wl);mm=i(zy,"DistilBertForSequenceClassification"),zy.forEach(t),kh.forEach(t),xp=d(o),Ve=n(o,"DIV",{class:!0});var Rt=r(Ve);k(xn.$$.fragment,Rt),gm=d(Rt),Rl=n(Rt,"P",{});var jy=r(Rl);_m=i(jy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jy.forEach(t),vm=d(Rt),zn=n(Rt,"P",{});var wh=r(zn);Tm=i(wh,"This model inherits from "),Mi=n(wh,"A",{href:!0});var Cy=r(Mi);bm=i(Cy,"PreTrainedModel"),Cy.forEach(t),km=i(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),wm=d(Rt),jn=n(Rt,"P",{});var yh=r(jn);ym=i(yh,"This model is also a PyTorch "),Cn=n(yh,"A",{href:!0,rel:!0});var Py=r(Cn);$m=i(Py,"torch.nn.Module"),Py.forEach(t),Dm=i(yh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yh.forEach(t),Fm=d(Rt),be=n(Rt,"DIV",{class:!0});var Pe=r(be);k(Pn.$$.fragment,Pe),Bm=d(Pe),go=n(Pe,"P",{});var sl=r(go);Mm=i(sl,"The "),Ei=n(sl,"A",{href:!0});var qy=r(Ei);Em=i(qy,"DistilBertForSequenceClassification"),qy.forEach(t),xm=i(sl," forward method, overrides the "),Ul=n(sl,"CODE",{});var Ay=r(Ul);zm=i(Ay,"__call__"),Ay.forEach(t),jm=i(sl," special method."),sl.forEach(t),Cm=d(Pe),k(as.$$.fragment,Pe),Pm=d(Pe),Hl=n(Pe,"P",{});var Oy=r(Hl);qm=i(Oy,"Example of single-label classification:"),Oy.forEach(t),Am=d(Pe),k(qn.$$.fragment,Pe),Om=d(Pe),k(An.$$.fragment,Pe),Nm=d(Pe),Ql=n(Pe,"P",{});var Ny=r(Ql);Im=i(Ny,"Example of multi-label classification:"),Ny.forEach(t),Lm=d(Pe),k(On.$$.fragment,Pe),Sm=d(Pe),k(Nn.$$.fragment,Pe),Pe.forEach(t),Rt.forEach(t),zp=d(o),_o=n(o,"H2",{class:!0});var $h=r(_o);is=n($h,"A",{id:!0,class:!0,href:!0});var Iy=r(is);Vl=n(Iy,"SPAN",{});var Ly=r(Vl);k(In.$$.fragment,Ly),Ly.forEach(t),Iy.forEach(t),Wm=d($h),Jl=n($h,"SPAN",{});var Sy=r(Jl);Rm=i(Sy,"DistilBertForMultipleChoice"),Sy.forEach(t),$h.forEach(t),jp=d(o),Je=n(o,"DIV",{class:!0});var Ut=r(Je);k(Ln.$$.fragment,Ut),Um=d(Ut),Kl=n(Ut,"P",{});var Wy=r(Kl);Hm=i(Wy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Wy.forEach(t),Qm=d(Ut),Sn=n(Ut,"P",{});var Dh=r(Sn);Vm=i(Dh,"This model inherits from "),xi=n(Dh,"A",{href:!0});var Ry=r(xi);Jm=i(Ry,"PreTrainedModel"),Ry.forEach(t),Km=i(Dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh.forEach(t),Gm=d(Ut),Wn=n(Ut,"P",{});var Fh=r(Wn);Xm=i(Fh,"This model is also a PyTorch "),Rn=n(Fh,"A",{href:!0,rel:!0});var Uy=r(Rn);Ym=i(Uy,"torch.nn.Module"),Uy.forEach(t),Zm=i(Fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fh.forEach(t),eg=d(Ut),Ye=n(Ut,"DIV",{class:!0});var Ht=r(Ye);k(Un.$$.fragment,Ht),tg=d(Ht),vo=n(Ht,"P",{});var nl=r(vo);og=i(nl,"The "),zi=n(nl,"A",{href:!0});var Hy=r(zi);sg=i(Hy,"DistilBertForMultipleChoice"),Hy.forEach(t),ng=i(nl," forward method, overrides the "),Gl=n(nl,"CODE",{});var Qy=r(Gl);rg=i(Qy,"__call__"),Qy.forEach(t),ag=i(nl," special method."),nl.forEach(t),ig=d(Ht),k(ls.$$.fragment,Ht),lg=d(Ht),Xl=n(Ht,"P",{});var Vy=r(Xl);dg=i(Vy,"Examples:"),Vy.forEach(t),cg=d(Ht),k(Hn.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),Cp=d(o),To=n(o,"H2",{class:!0});var Bh=r(To);ds=n(Bh,"A",{id:!0,class:!0,href:!0});var Jy=r(ds);Yl=n(Jy,"SPAN",{});var Ky=r(Yl);k(Qn.$$.fragment,Ky),Ky.forEach(t),Jy.forEach(t),pg=d(Bh),Zl=n(Bh,"SPAN",{});var Gy=r(Zl);hg=i(Gy,"DistilBertForTokenClassification"),Gy.forEach(t),Bh.forEach(t),Pp=d(o),Ke=n(o,"DIV",{class:!0});var Qt=r(Ke);k(Vn.$$.fragment,Qt),ug=d(Qt),ed=n(Qt,"P",{});var Xy=r(ed);fg=i(Xy,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Xy.forEach(t),mg=d(Qt),Jn=n(Qt,"P",{});var Mh=r(Jn);gg=i(Mh,"This model inherits from "),ji=n(Mh,"A",{href:!0});var Yy=r(ji);_g=i(Yy,"PreTrainedModel"),Yy.forEach(t),vg=i(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mh.forEach(t),Tg=d(Qt),Kn=n(Qt,"P",{});var Eh=r(Kn);bg=i(Eh,"This model is also a PyTorch "),Gn=n(Eh,"A",{href:!0,rel:!0});var Zy=r(Gn);kg=i(Zy,"torch.nn.Module"),Zy.forEach(t),wg=i(Eh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eh.forEach(t),yg=d(Qt),We=n(Qt,"DIV",{class:!0});var kt=r(We);k(Xn.$$.fragment,kt),$g=d(kt),bo=n(kt,"P",{});var rl=r(bo);Dg=i(rl,"The "),Ci=n(rl,"A",{href:!0});var e$=r(Ci);Fg=i(e$,"DistilBertForTokenClassification"),e$.forEach(t),Bg=i(rl," forward method, overrides the "),td=n(rl,"CODE",{});var t$=r(td);Mg=i(t$,"__call__"),t$.forEach(t),Eg=i(rl," special method."),rl.forEach(t),xg=d(kt),k(cs.$$.fragment,kt),zg=d(kt),od=n(kt,"P",{});var o$=r(od);jg=i(o$,"Example:"),o$.forEach(t),Cg=d(kt),k(Yn.$$.fragment,kt),Pg=d(kt),k(Zn.$$.fragment,kt),kt.forEach(t),Qt.forEach(t),qp=d(o),ko=n(o,"H2",{class:!0});var xh=r(ko);ps=n(xh,"A",{id:!0,class:!0,href:!0});var s$=r(ps);sd=n(s$,"SPAN",{});var n$=r(sd);k(er.$$.fragment,n$),n$.forEach(t),s$.forEach(t),qg=d(xh),nd=n(xh,"SPAN",{});var r$=r(nd);Ag=i(r$,"DistilBertForQuestionAnswering"),r$.forEach(t),xh.forEach(t),Ap=d(o),Ge=n(o,"DIV",{class:!0});var Vt=r(Ge);k(tr.$$.fragment,Vt),Og=d(Vt),wo=n(Vt,"P",{});var al=r(wo);Ng=i(al,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),rd=n(al,"CODE",{});var a$=r(rd);Ig=i(a$,"span start logits"),a$.forEach(t),Lg=i(al," and "),ad=n(al,"CODE",{});var i$=r(ad);Sg=i(i$,"span end logits"),i$.forEach(t),Wg=i(al,")."),al.forEach(t),Rg=d(Vt),or=n(Vt,"P",{});var zh=r(or);Ug=i(zh,"This model inherits from "),Pi=n(zh,"A",{href:!0});var l$=r(Pi);Hg=i(l$,"PreTrainedModel"),l$.forEach(t),Qg=i(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(t),Vg=d(Vt),sr=n(Vt,"P",{});var jh=r(sr);Jg=i(jh,"This model is also a PyTorch "),nr=n(jh,"A",{href:!0,rel:!0});var d$=r(nr);Kg=i(d$,"torch.nn.Module"),d$.forEach(t),Gg=i(jh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jh.forEach(t),Xg=d(Vt),Re=n(Vt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),Yg=d(wt),yo=n(wt,"P",{});var il=r(yo);Zg=i(il,"The "),qi=n(il,"A",{href:!0});var c$=r(qi);e_=i(c$,"DistilBertForQuestionAnswering"),c$.forEach(t),t_=i(il," forward method, overrides the "),id=n(il,"CODE",{});var p$=r(id);o_=i(p$,"__call__"),p$.forEach(t),s_=i(il," special method."),il.forEach(t),n_=d(wt),k(hs.$$.fragment,wt),r_=d(wt),ld=n(wt,"P",{});var h$=r(ld);a_=i(h$,"Example:"),h$.forEach(t),i_=d(wt),k(ar.$$.fragment,wt),l_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Vt.forEach(t),Op=d(o),$o=n(o,"H2",{class:!0});var Ch=r($o);us=n(Ch,"A",{id:!0,class:!0,href:!0});var u$=r(us);dd=n(u$,"SPAN",{});var f$=r(dd);k(lr.$$.fragment,f$),f$.forEach(t),u$.forEach(t),d_=d(Ch),cd=n(Ch,"SPAN",{});var m$=r(cd);c_=i(m$,"TFDistilBertModel"),m$.forEach(t),Ch.forEach(t),Np=d(o),qe=n(o,"DIV",{class:!0});var yt=r(qe);k(dr.$$.fragment,yt),p_=d(yt),pd=n(yt,"P",{});var g$=r(pd);h_=i(g$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),g$.forEach(t),u_=d(yt),cr=n(yt,"P",{});var Ph=r(cr);f_=i(Ph,"This model inherits from "),Ai=n(Ph,"A",{href:!0});var _$=r(Ai);m_=i(_$,"TFPreTrainedModel"),_$.forEach(t),g_=i(Ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ph.forEach(t),__=d(yt),pr=n(yt,"P",{});var qh=r(pr);v_=i(qh,"This model is also a "),hr=n(qh,"A",{href:!0,rel:!0});var v$=r(hr);T_=i(v$,"tf.keras.Model"),v$.forEach(t),b_=i(qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qh.forEach(t),k_=d(yt),k(fs.$$.fragment,yt),w_=d(yt),Ze=n(yt,"DIV",{class:!0});var Jt=r(Ze);k(ur.$$.fragment,Jt),y_=d(Jt),Do=n(Jt,"P",{});var ll=r(Do);$_=i(ll,"The "),Oi=n(ll,"A",{href:!0});var T$=r(Oi);D_=i(T$,"TFDistilBertModel"),T$.forEach(t),F_=i(ll," forward method, overrides the "),hd=n(ll,"CODE",{});var b$=r(hd);B_=i(b$,"__call__"),b$.forEach(t),M_=i(ll," special method."),ll.forEach(t),E_=d(Jt),k(ms.$$.fragment,Jt),x_=d(Jt),ud=n(Jt,"P",{});var k$=r(ud);z_=i(k$,"Example:"),k$.forEach(t),j_=d(Jt),k(fr.$$.fragment,Jt),Jt.forEach(t),yt.forEach(t),Ip=d(o),Fo=n(o,"H2",{class:!0});var Ah=r(Fo);gs=n(Ah,"A",{id:!0,class:!0,href:!0});var w$=r(gs);fd=n(w$,"SPAN",{});var y$=r(fd);k(mr.$$.fragment,y$),y$.forEach(t),w$.forEach(t),C_=d(Ah),md=n(Ah,"SPAN",{});var $$=r(md);P_=i($$,"TFDistilBertForMaskedLM"),$$.forEach(t),Ah.forEach(t),Lp=d(o),Ae=n(o,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),q_=d($t),_r=n($t,"P",{});var Oh=r(_r);A_=i(Oh,"DistilBert Model with a "),gd=n(Oh,"CODE",{});var D$=r(gd);O_=i(D$,"masked language modeling"),D$.forEach(t),N_=i(Oh," head on top."),Oh.forEach(t),I_=d($t),vr=n($t,"P",{});var Nh=r(vr);L_=i(Nh,"This model inherits from "),Ni=n(Nh,"A",{href:!0});var F$=r(Ni);S_=i(F$,"TFPreTrainedModel"),F$.forEach(t),W_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),R_=d($t),Tr=n($t,"P",{});var Ih=r(Tr);U_=i(Ih,"This model is also a "),br=n(Ih,"A",{href:!0,rel:!0});var B$=r(br);H_=i(B$,"tf.keras.Model"),B$.forEach(t),Q_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),V_=d($t),k(_s.$$.fragment,$t),J_=d($t),et=n($t,"DIV",{class:!0});var Kt=r(et);k(kr.$$.fragment,Kt),K_=d(Kt),Bo=n(Kt,"P",{});var dl=r(Bo);G_=i(dl,"The "),Ii=n(dl,"A",{href:!0});var M$=r(Ii);X_=i(M$,"TFDistilBertForMaskedLM"),M$.forEach(t),Y_=i(dl," forward method, overrides the "),_d=n(dl,"CODE",{});var E$=r(_d);Z_=i(E$,"__call__"),E$.forEach(t),ev=i(dl," special method."),dl.forEach(t),tv=d(Kt),k(vs.$$.fragment,Kt),ov=d(Kt),vd=n(Kt,"P",{});var x$=r(vd);sv=i(x$,"Example:"),x$.forEach(t),nv=d(Kt),k(wr.$$.fragment,Kt),Kt.forEach(t),$t.forEach(t),Sp=d(o),Mo=n(o,"H2",{class:!0});var Lh=r(Mo);Ts=n(Lh,"A",{id:!0,class:!0,href:!0});var z$=r(Ts);Td=n(z$,"SPAN",{});var j$=r(Td);k(yr.$$.fragment,j$),j$.forEach(t),z$.forEach(t),rv=d(Lh),bd=n(Lh,"SPAN",{});var C$=r(bd);av=i(C$,"TFDistilBertForSequenceClassification"),C$.forEach(t),Lh.forEach(t),Wp=d(o),Oe=n(o,"DIV",{class:!0});var Dt=r(Oe);k($r.$$.fragment,Dt),iv=d(Dt),kd=n(Dt,"P",{});var P$=r(kd);lv=i(P$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P$.forEach(t),dv=d(Dt),Dr=n(Dt,"P",{});var Sh=r(Dr);cv=i(Sh,"This model inherits from "),Li=n(Sh,"A",{href:!0});var q$=r(Li);pv=i(q$,"TFPreTrainedModel"),q$.forEach(t),hv=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),uv=d(Dt),Fr=n(Dt,"P",{});var Wh=r(Fr);fv=i(Wh,"This model is also a "),Br=n(Wh,"A",{href:!0,rel:!0});var A$=r(Br);mv=i(A$,"tf.keras.Model"),A$.forEach(t),gv=i(Wh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wh.forEach(t),_v=d(Dt),k(bs.$$.fragment,Dt),vv=d(Dt),tt=n(Dt,"DIV",{class:!0});var Gt=r(tt);k(Mr.$$.fragment,Gt),Tv=d(Gt),Eo=n(Gt,"P",{});var cl=r(Eo);bv=i(cl,"The "),Si=n(cl,"A",{href:!0});var O$=r(Si);kv=i(O$,"TFDistilBertForSequenceClassification"),O$.forEach(t),wv=i(cl," forward method, overrides the "),wd=n(cl,"CODE",{});var N$=r(wd);yv=i(N$,"__call__"),N$.forEach(t),$v=i(cl," special method."),cl.forEach(t),Dv=d(Gt),k(ks.$$.fragment,Gt),Fv=d(Gt),yd=n(Gt,"P",{});var I$=r(yd);Bv=i(I$,"Example:"),I$.forEach(t),Mv=d(Gt),k(Er.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Rp=d(o),xo=n(o,"H2",{class:!0});var Rh=r(xo);ws=n(Rh,"A",{id:!0,class:!0,href:!0});var L$=r(ws);$d=n(L$,"SPAN",{});var S$=r($d);k(xr.$$.fragment,S$),S$.forEach(t),L$.forEach(t),Ev=d(Rh),Dd=n(Rh,"SPAN",{});var W$=r(Dd);xv=i(W$,"TFDistilBertForMultipleChoice"),W$.forEach(t),Rh.forEach(t),Up=d(o),Ne=n(o,"DIV",{class:!0});var Ft=r(Ne);k(zr.$$.fragment,Ft),zv=d(Ft),Fd=n(Ft,"P",{});var R$=r(Fd);jv=i(R$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),R$.forEach(t),Cv=d(Ft),jr=n(Ft,"P",{});var Uh=r(jr);Pv=i(Uh,"This model inherits from "),Wi=n(Uh,"A",{href:!0});var U$=r(Wi);qv=i(U$,"TFPreTrainedModel"),U$.forEach(t),Av=i(Uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uh.forEach(t),Ov=d(Ft),Cr=n(Ft,"P",{});var Hh=r(Cr);Nv=i(Hh,"This model is also a "),Pr=n(Hh,"A",{href:!0,rel:!0});var H$=r(Pr);Iv=i(H$,"tf.keras.Model"),H$.forEach(t),Lv=i(Hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh.forEach(t),Sv=d(Ft),k(ys.$$.fragment,Ft),Wv=d(Ft),ot=n(Ft,"DIV",{class:!0});var Xt=r(ot);k(qr.$$.fragment,Xt),Rv=d(Xt),zo=n(Xt,"P",{});var pl=r(zo);Uv=i(pl,"The "),Ri=n(pl,"A",{href:!0});var Q$=r(Ri);Hv=i(Q$,"TFDistilBertForMultipleChoice"),Q$.forEach(t),Qv=i(pl," forward method, overrides the "),Bd=n(pl,"CODE",{});var V$=r(Bd);Vv=i(V$,"__call__"),V$.forEach(t),Jv=i(pl," special method."),pl.forEach(t),Kv=d(Xt),k($s.$$.fragment,Xt),Gv=d(Xt),Md=n(Xt,"P",{});var J$=r(Md);Xv=i(J$,"Example:"),J$.forEach(t),Yv=d(Xt),k(Ar.$$.fragment,Xt),Xt.forEach(t),Ft.forEach(t),Hp=d(o),jo=n(o,"H2",{class:!0});var Qh=r(jo);Ds=n(Qh,"A",{id:!0,class:!0,href:!0});var K$=r(Ds);Ed=n(K$,"SPAN",{});var G$=r(Ed);k(Or.$$.fragment,G$),G$.forEach(t),K$.forEach(t),Zv=d(Qh),xd=n(Qh,"SPAN",{});var X$=r(xd);eT=i(X$,"TFDistilBertForTokenClassification"),X$.forEach(t),Qh.forEach(t),Qp=d(o),Ie=n(o,"DIV",{class:!0});var Bt=r(Ie);k(Nr.$$.fragment,Bt),tT=d(Bt),zd=n(Bt,"P",{});var Y$=r(zd);oT=i(Y$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Y$.forEach(t),sT=d(Bt),Ir=n(Bt,"P",{});var Vh=r(Ir);nT=i(Vh,"This model inherits from "),Ui=n(Vh,"A",{href:!0});var Z$=r(Ui);rT=i(Z$,"TFPreTrainedModel"),Z$.forEach(t),aT=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),iT=d(Bt),Lr=n(Bt,"P",{});var Jh=r(Lr);lT=i(Jh,"This model is also a "),Sr=n(Jh,"A",{href:!0,rel:!0});var eD=r(Sr);dT=i(eD,"tf.keras.Model"),eD.forEach(t),cT=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),pT=d(Bt),k(Fs.$$.fragment,Bt),hT=d(Bt),st=n(Bt,"DIV",{class:!0});var Yt=r(st);k(Wr.$$.fragment,Yt),uT=d(Yt),Co=n(Yt,"P",{});var hl=r(Co);fT=i(hl,"The "),Hi=n(hl,"A",{href:!0});var tD=r(Hi);mT=i(tD,"TFDistilBertForTokenClassification"),tD.forEach(t),gT=i(hl," forward method, overrides the "),jd=n(hl,"CODE",{});var oD=r(jd);_T=i(oD,"__call__"),oD.forEach(t),vT=i(hl," special method."),hl.forEach(t),TT=d(Yt),k(Bs.$$.fragment,Yt),bT=d(Yt),Cd=n(Yt,"P",{});var sD=r(Cd);kT=i(sD,"Example:"),sD.forEach(t),wT=d(Yt),k(Rr.$$.fragment,Yt),Yt.forEach(t),Bt.forEach(t),Vp=d(o),Po=n(o,"H2",{class:!0});var Kh=r(Po);Ms=n(Kh,"A",{id:!0,class:!0,href:!0});var nD=r(Ms);Pd=n(nD,"SPAN",{});var rD=r(Pd);k(Ur.$$.fragment,rD),rD.forEach(t),nD.forEach(t),yT=d(Kh),qd=n(Kh,"SPAN",{});var aD=r(qd);$T=i(aD,"TFDistilBertForQuestionAnswering"),aD.forEach(t),Kh.forEach(t),Jp=d(o),Le=n(o,"DIV",{class:!0});var Mt=r(Le);k(Hr.$$.fragment,Mt),DT=d(Mt),qo=n(Mt,"P",{});var ul=r(qo);FT=i(ul,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ad=n(ul,"CODE",{});var iD=r(Ad);BT=i(iD,"span start logits"),iD.forEach(t),MT=i(ul," and "),Od=n(ul,"CODE",{});var lD=r(Od);ET=i(lD,"span end logits"),lD.forEach(t),xT=i(ul,")."),ul.forEach(t),zT=d(Mt),Qr=n(Mt,"P",{});var Gh=r(Qr);jT=i(Gh,"This model inherits from "),Qi=n(Gh,"A",{href:!0});var dD=r(Qi);CT=i(dD,"TFPreTrainedModel"),dD.forEach(t),PT=i(Gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gh.forEach(t),qT=d(Mt),Vr=n(Mt,"P",{});var Xh=r(Vr);AT=i(Xh,"This model is also a "),Jr=n(Xh,"A",{href:!0,rel:!0});var cD=r(Jr);OT=i(cD,"tf.keras.Model"),cD.forEach(t),NT=i(Xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh.forEach(t),IT=d(Mt),k(Es.$$.fragment,Mt),LT=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);k(Kr.$$.fragment,Zt),ST=d(Zt),Ao=n(Zt,"P",{});var fl=r(Ao);WT=i(fl,"The "),Vi=n(fl,"A",{href:!0});var pD=r(Vi);RT=i(pD,"TFDistilBertForQuestionAnswering"),pD.forEach(t),UT=i(fl," forward method, overrides the "),Nd=n(fl,"CODE",{});var hD=r(Nd);HT=i(hD,"__call__"),hD.forEach(t),QT=i(fl," special method."),fl.forEach(t),VT=d(Zt),k(xs.$$.fragment,Zt),JT=d(Zt),Id=n(Zt,"P",{});var uD=r(Id);KT=i(uD,"Example:"),uD.forEach(t),GT=d(Zt),k(Gr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Kp=d(o),Oo=n(o,"H2",{class:!0});var Yh=r(Oo);zs=n(Yh,"A",{id:!0,class:!0,href:!0});var fD=r(zs);Ld=n(fD,"SPAN",{});var mD=r(Ld);k(Xr.$$.fragment,mD),mD.forEach(t),fD.forEach(t),XT=d(Yh),Sd=n(Yh,"SPAN",{});var gD=r(Sd);YT=i(gD,"FlaxDistilBertModel"),gD.forEach(t),Yh.forEach(t),Gp=d(o),Me=n(o,"DIV",{class:!0});var pt=r(Me);k(Yr.$$.fragment,pt),ZT=d(pt),Wd=n(pt,"P",{});var _D=r(Wd);eb=i(_D,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),_D.forEach(t),tb=d(pt),Zr=n(pt,"P",{});var Zh=r(Zr);ob=i(Zh,"This model inherits from "),Ji=n(Zh,"A",{href:!0});var vD=r(Ji);sb=i(vD,"FlaxPreTrainedModel"),vD.forEach(t),nb=i(Zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Zh.forEach(t),rb=d(pt),ea=n(pt,"P",{});var eu=r(ea);ab=i(eu,"This model is also a Flax Linen "),ta=n(eu,"A",{href:!0,rel:!0});var TD=r(ta);ib=i(TD,"flax.linen.Module"),TD.forEach(t),lb=i(eu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eu.forEach(t),db=d(pt),Rd=n(pt,"P",{});var bD=r(Rd);cb=i(bD,"Finally, this model supports inherent JAX features such as:"),bD.forEach(t),pb=d(pt),xt=n(pt,"UL",{});var Qs=r(xt);Ud=n(Qs,"LI",{});var kD=r(Ud);oa=n(kD,"A",{href:!0,rel:!0});var wD=r(oa);hb=i(wD,"Just-In-Time (JIT) compilation"),wD.forEach(t),kD.forEach(t),ub=d(Qs),Hd=n(Qs,"LI",{});var yD=r(Hd);sa=n(yD,"A",{href:!0,rel:!0});var $D=r(sa);fb=i($D,"Automatic Differentiation"),$D.forEach(t),yD.forEach(t),mb=d(Qs),Qd=n(Qs,"LI",{});var DD=r(Qd);na=n(DD,"A",{href:!0,rel:!0});var FD=r(na);gb=i(FD,"Vectorization"),FD.forEach(t),DD.forEach(t),_b=d(Qs),Vd=n(Qs,"LI",{});var BD=r(Vd);ra=n(BD,"A",{href:!0,rel:!0});var MD=r(ra);vb=i(MD,"Parallelization"),MD.forEach(t),BD.forEach(t),Qs.forEach(t),Tb=d(pt),rt=n(pt,"DIV",{class:!0});var eo=r(rt);k(aa.$$.fragment,eo),bb=d(eo),No=n(eo,"P",{});var ml=r(No);kb=i(ml,"The "),Jd=n(ml,"CODE",{});var ED=r(Jd);wb=i(ED,"FlaxDistilBertPreTrainedModel"),ED.forEach(t),yb=i(ml,"forward method, overrides the "),Kd=n(ml,"CODE",{});var xD=r(Kd);$b=i(xD,"__call__"),xD.forEach(t),Db=i(ml," special method."),ml.forEach(t),Fb=d(eo),k(js.$$.fragment,eo),Bb=d(eo),Gd=n(eo,"P",{});var zD=r(Gd);Mb=i(zD,"Example:"),zD.forEach(t),Eb=d(eo),k(ia.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Xp=d(o),Io=n(o,"H2",{class:!0});var tu=r(Io);Cs=n(tu,"A",{id:!0,class:!0,href:!0});var jD=r(Cs);Xd=n(jD,"SPAN",{});var CD=r(Xd);k(la.$$.fragment,CD),CD.forEach(t),jD.forEach(t),xb=d(tu),Yd=n(tu,"SPAN",{});var PD=r(Yd);zb=i(PD,"FlaxDistilBertForMaskedLM"),PD.forEach(t),tu.forEach(t),Yp=d(o),Ee=n(o,"DIV",{class:!0});var ht=r(Ee);k(da.$$.fragment,ht),jb=d(ht),ca=n(ht,"P",{});var ou=r(ca);Cb=i(ou,"DistilBert Model with a "),Zd=n(ou,"CODE",{});var qD=r(Zd);Pb=i(qD,"language modeling"),qD.forEach(t),qb=i(ou," head on top."),ou.forEach(t),Ab=d(ht),pa=n(ht,"P",{});var su=r(pa);Ob=i(su,"This model inherits from "),Ki=n(su,"A",{href:!0});var AD=r(Ki);Nb=i(AD,"FlaxPreTrainedModel"),AD.forEach(t),Ib=i(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),su.forEach(t),Lb=d(ht),ha=n(ht,"P",{});var nu=r(ha);Sb=i(nu,"This model is also a Flax Linen "),ua=n(nu,"A",{href:!0,rel:!0});var OD=r(ua);Wb=i(OD,"flax.linen.Module"),OD.forEach(t),Rb=i(nu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu.forEach(t),Ub=d(ht),ec=n(ht,"P",{});var ND=r(ec);Hb=i(ND,"Finally, this model supports inherent JAX features such as:"),ND.forEach(t),Qb=d(ht),zt=n(ht,"UL",{});var Vs=r(zt);tc=n(Vs,"LI",{});var ID=r(tc);fa=n(ID,"A",{href:!0,rel:!0});var LD=r(fa);Vb=i(LD,"Just-In-Time (JIT) compilation"),LD.forEach(t),ID.forEach(t),Jb=d(Vs),oc=n(Vs,"LI",{});var SD=r(oc);ma=n(SD,"A",{href:!0,rel:!0});var WD=r(ma);Kb=i(WD,"Automatic Differentiation"),WD.forEach(t),SD.forEach(t),Gb=d(Vs),sc=n(Vs,"LI",{});var RD=r(sc);ga=n(RD,"A",{href:!0,rel:!0});var UD=r(ga);Xb=i(UD,"Vectorization"),UD.forEach(t),RD.forEach(t),Yb=d(Vs),nc=n(Vs,"LI",{});var HD=r(nc);_a=n(HD,"A",{href:!0,rel:!0});var QD=r(_a);Zb=i(QD,"Parallelization"),QD.forEach(t),HD.forEach(t),Vs.forEach(t),ek=d(ht),at=n(ht,"DIV",{class:!0});var to=r(at);k(va.$$.fragment,to),tk=d(to),Lo=n(to,"P",{});var gl=r(Lo);ok=i(gl,"The "),rc=n(gl,"CODE",{});var VD=r(rc);sk=i(VD,"FlaxDistilBertPreTrainedModel"),VD.forEach(t),nk=i(gl,"forward method, overrides the "),ac=n(gl,"CODE",{});var JD=r(ac);rk=i(JD,"__call__"),JD.forEach(t),ak=i(gl," special method."),gl.forEach(t),ik=d(to),k(Ps.$$.fragment,to),lk=d(to),ic=n(to,"P",{});var KD=r(ic);dk=i(KD,"Example:"),KD.forEach(t),ck=d(to),k(Ta.$$.fragment,to),to.forEach(t),ht.forEach(t),Zp=d(o),So=n(o,"H2",{class:!0});var ru=r(So);qs=n(ru,"A",{id:!0,class:!0,href:!0});var GD=r(qs);lc=n(GD,"SPAN",{});var XD=r(lc);k(ba.$$.fragment,XD),XD.forEach(t),GD.forEach(t),pk=d(ru),dc=n(ru,"SPAN",{});var YD=r(dc);hk=i(YD,"FlaxDistilBertForSequenceClassification"),YD.forEach(t),ru.forEach(t),eh=d(o),xe=n(o,"DIV",{class:!0});var ut=r(xe);k(ka.$$.fragment,ut),uk=d(ut),cc=n(ut,"P",{});var ZD=r(cc);fk=i(ZD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ZD.forEach(t),mk=d(ut),wa=n(ut,"P",{});var au=r(wa);gk=i(au,"This model inherits from "),Gi=n(au,"A",{href:!0});var e2=r(Gi);_k=i(e2,"FlaxPreTrainedModel"),e2.forEach(t),vk=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),au.forEach(t),Tk=d(ut),ya=n(ut,"P",{});var iu=r(ya);bk=i(iu,"This model is also a Flax Linen "),$a=n(iu,"A",{href:!0,rel:!0});var t2=r($a);kk=i(t2,"flax.linen.Module"),t2.forEach(t),wk=i(iu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iu.forEach(t),yk=d(ut),pc=n(ut,"P",{});var o2=r(pc);$k=i(o2,"Finally, this model supports inherent JAX features such as:"),o2.forEach(t),Dk=d(ut),jt=n(ut,"UL",{});var Js=r(jt);hc=n(Js,"LI",{});var s2=r(hc);Da=n(s2,"A",{href:!0,rel:!0});var n2=r(Da);Fk=i(n2,"Just-In-Time (JIT) compilation"),n2.forEach(t),s2.forEach(t),Bk=d(Js),uc=n(Js,"LI",{});var r2=r(uc);Fa=n(r2,"A",{href:!0,rel:!0});var a2=r(Fa);Mk=i(a2,"Automatic Differentiation"),a2.forEach(t),r2.forEach(t),Ek=d(Js),fc=n(Js,"LI",{});var i2=r(fc);Ba=n(i2,"A",{href:!0,rel:!0});var l2=r(Ba);xk=i(l2,"Vectorization"),l2.forEach(t),i2.forEach(t),zk=d(Js),mc=n(Js,"LI",{});var d2=r(mc);Ma=n(d2,"A",{href:!0,rel:!0});var c2=r(Ma);jk=i(c2,"Parallelization"),c2.forEach(t),d2.forEach(t),Js.forEach(t),Ck=d(ut),it=n(ut,"DIV",{class:!0});var oo=r(it);k(Ea.$$.fragment,oo),Pk=d(oo),Wo=n(oo,"P",{});var _l=r(Wo);qk=i(_l,"The "),gc=n(_l,"CODE",{});var p2=r(gc);Ak=i(p2,"FlaxDistilBertPreTrainedModel"),p2.forEach(t),Ok=i(_l,"forward method, overrides the "),_c=n(_l,"CODE",{});var h2=r(_c);Nk=i(h2,"__call__"),h2.forEach(t),Ik=i(_l," special method."),_l.forEach(t),Lk=d(oo),k(As.$$.fragment,oo),Sk=d(oo),vc=n(oo,"P",{});var u2=r(vc);Wk=i(u2,"Example:"),u2.forEach(t),Rk=d(oo),k(xa.$$.fragment,oo),oo.forEach(t),ut.forEach(t),th=d(o),Ro=n(o,"H2",{class:!0});var lu=r(Ro);Os=n(lu,"A",{id:!0,class:!0,href:!0});var f2=r(Os);Tc=n(f2,"SPAN",{});var m2=r(Tc);k(za.$$.fragment,m2),m2.forEach(t),f2.forEach(t),Uk=d(lu),bc=n(lu,"SPAN",{});var g2=r(bc);Hk=i(g2,"FlaxDistilBertForMultipleChoice"),g2.forEach(t),lu.forEach(t),oh=d(o),ze=n(o,"DIV",{class:!0});var ft=r(ze);k(ja.$$.fragment,ft),Qk=d(ft),kc=n(ft,"P",{});var _2=r(kc);Vk=i(_2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_2.forEach(t),Jk=d(ft),Ca=n(ft,"P",{});var du=r(Ca);Kk=i(du,"This model inherits from "),Xi=n(du,"A",{href:!0});var v2=r(Xi);Gk=i(v2,"FlaxPreTrainedModel"),v2.forEach(t),Xk=i(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),du.forEach(t),Yk=d(ft),Pa=n(ft,"P",{});var cu=r(Pa);Zk=i(cu,"This model is also a Flax Linen "),qa=n(cu,"A",{href:!0,rel:!0});var T2=r(qa);ew=i(T2,"flax.linen.Module"),T2.forEach(t),tw=i(cu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cu.forEach(t),ow=d(ft),wc=n(ft,"P",{});var b2=r(wc);sw=i(b2,"Finally, this model supports inherent JAX features such as:"),b2.forEach(t),nw=d(ft),Ct=n(ft,"UL",{});var Ks=r(Ct);yc=n(Ks,"LI",{});var k2=r(yc);Aa=n(k2,"A",{href:!0,rel:!0});var w2=r(Aa);rw=i(w2,"Just-In-Time (JIT) compilation"),w2.forEach(t),k2.forEach(t),aw=d(Ks),$c=n(Ks,"LI",{});var y2=r($c);Oa=n(y2,"A",{href:!0,rel:!0});var $2=r(Oa);iw=i($2,"Automatic Differentiation"),$2.forEach(t),y2.forEach(t),lw=d(Ks),Dc=n(Ks,"LI",{});var D2=r(Dc);Na=n(D2,"A",{href:!0,rel:!0});var F2=r(Na);dw=i(F2,"Vectorization"),F2.forEach(t),D2.forEach(t),cw=d(Ks),Fc=n(Ks,"LI",{});var B2=r(Fc);Ia=n(B2,"A",{href:!0,rel:!0});var M2=r(Ia);pw=i(M2,"Parallelization"),M2.forEach(t),B2.forEach(t),Ks.forEach(t),hw=d(ft),lt=n(ft,"DIV",{class:!0});var so=r(lt);k(La.$$.fragment,so),uw=d(so),Uo=n(so,"P",{});var vl=r(Uo);fw=i(vl,"The "),Bc=n(vl,"CODE",{});var E2=r(Bc);mw=i(E2,"FlaxDistilBertPreTrainedModel"),E2.forEach(t),gw=i(vl,"forward method, overrides the "),Mc=n(vl,"CODE",{});var x2=r(Mc);_w=i(x2,"__call__"),x2.forEach(t),vw=i(vl," special method."),vl.forEach(t),Tw=d(so),k(Ns.$$.fragment,so),bw=d(so),Ec=n(so,"P",{});var z2=r(Ec);kw=i(z2,"Example:"),z2.forEach(t),ww=d(so),k(Sa.$$.fragment,so),so.forEach(t),ft.forEach(t),sh=d(o),Ho=n(o,"H2",{class:!0});var pu=r(Ho);Is=n(pu,"A",{id:!0,class:!0,href:!0});var j2=r(Is);xc=n(j2,"SPAN",{});var C2=r(xc);k(Wa.$$.fragment,C2),C2.forEach(t),j2.forEach(t),yw=d(pu),zc=n(pu,"SPAN",{});var P2=r(zc);$w=i(P2,"FlaxDistilBertForTokenClassification"),P2.forEach(t),pu.forEach(t),nh=d(o),je=n(o,"DIV",{class:!0});var mt=r(je);k(Ra.$$.fragment,mt),Dw=d(mt),jc=n(mt,"P",{});var q2=r(jc);Fw=i(q2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),q2.forEach(t),Bw=d(mt),Ua=n(mt,"P",{});var hu=r(Ua);Mw=i(hu,"This model inherits from "),Yi=n(hu,"A",{href:!0});var A2=r(Yi);Ew=i(A2,"FlaxPreTrainedModel"),A2.forEach(t),xw=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hu.forEach(t),zw=d(mt),Ha=n(mt,"P",{});var uu=r(Ha);jw=i(uu,"This model is also a Flax Linen "),Qa=n(uu,"A",{href:!0,rel:!0});var O2=r(Qa);Cw=i(O2,"flax.linen.Module"),O2.forEach(t),Pw=i(uu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uu.forEach(t),qw=d(mt),Cc=n(mt,"P",{});var N2=r(Cc);Aw=i(N2,"Finally, this model supports inherent JAX features such as:"),N2.forEach(t),Ow=d(mt),Pt=n(mt,"UL",{});var Gs=r(Pt);Pc=n(Gs,"LI",{});var I2=r(Pc);Va=n(I2,"A",{href:!0,rel:!0});var L2=r(Va);Nw=i(L2,"Just-In-Time (JIT) compilation"),L2.forEach(t),I2.forEach(t),Iw=d(Gs),qc=n(Gs,"LI",{});var S2=r(qc);Ja=n(S2,"A",{href:!0,rel:!0});var W2=r(Ja);Lw=i(W2,"Automatic Differentiation"),W2.forEach(t),S2.forEach(t),Sw=d(Gs),Ac=n(Gs,"LI",{});var R2=r(Ac);Ka=n(R2,"A",{href:!0,rel:!0});var U2=r(Ka);Ww=i(U2,"Vectorization"),U2.forEach(t),R2.forEach(t),Rw=d(Gs),Oc=n(Gs,"LI",{});var H2=r(Oc);Ga=n(H2,"A",{href:!0,rel:!0});var Q2=r(Ga);Uw=i(Q2,"Parallelization"),Q2.forEach(t),H2.forEach(t),Gs.forEach(t),Hw=d(mt),dt=n(mt,"DIV",{class:!0});var no=r(dt);k(Xa.$$.fragment,no),Qw=d(no),Qo=n(no,"P",{});var Tl=r(Qo);Vw=i(Tl,"The "),Nc=n(Tl,"CODE",{});var V2=r(Nc);Jw=i(V2,"FlaxDistilBertPreTrainedModel"),V2.forEach(t),Kw=i(Tl,"forward method, overrides the "),Ic=n(Tl,"CODE",{});var J2=r(Ic);Gw=i(J2,"__call__"),J2.forEach(t),Xw=i(Tl," special method."),Tl.forEach(t),Yw=d(no),k(Ls.$$.fragment,no),Zw=d(no),Lc=n(no,"P",{});var K2=r(Lc);e1=i(K2,"Example:"),K2.forEach(t),t1=d(no),k(Ya.$$.fragment,no),no.forEach(t),mt.forEach(t),rh=d(o),Vo=n(o,"H2",{class:!0});var fu=r(Vo);Ss=n(fu,"A",{id:!0,class:!0,href:!0});var G2=r(Ss);Sc=n(G2,"SPAN",{});var X2=r(Sc);k(Za.$$.fragment,X2),X2.forEach(t),G2.forEach(t),o1=d(fu),Wc=n(fu,"SPAN",{});var Y2=r(Wc);s1=i(Y2,"FlaxDistilBertForQuestionAnswering"),Y2.forEach(t),fu.forEach(t),ah=d(o),Ce=n(o,"DIV",{class:!0});var gt=r(Ce);k(ei.$$.fragment,gt),n1=d(gt),Jo=n(gt,"P",{});var bl=r(Jo);r1=i(bl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rc=n(bl,"CODE",{});var Z2=r(Rc);a1=i(Z2,"span start logits"),Z2.forEach(t),i1=i(bl," and "),Uc=n(bl,"CODE",{});var eF=r(Uc);l1=i(eF,"span end logits"),eF.forEach(t),d1=i(bl,")."),bl.forEach(t),c1=d(gt),ti=n(gt,"P",{});var mu=r(ti);p1=i(mu,"This model inherits from "),Zi=n(mu,"A",{href:!0});var tF=r(Zi);h1=i(tF,"FlaxPreTrainedModel"),tF.forEach(t),u1=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mu.forEach(t),f1=d(gt),oi=n(gt,"P",{});var gu=r(oi);m1=i(gu,"This model is also a Flax Linen "),si=n(gu,"A",{href:!0,rel:!0});var oF=r(si);g1=i(oF,"flax.linen.Module"),oF.forEach(t),_1=i(gu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gu.forEach(t),v1=d(gt),Hc=n(gt,"P",{});var sF=r(Hc);T1=i(sF,"Finally, this model supports inherent JAX features such as:"),sF.forEach(t),b1=d(gt),qt=n(gt,"UL",{});var Xs=r(qt);Qc=n(Xs,"LI",{});var nF=r(Qc);ni=n(nF,"A",{href:!0,rel:!0});var rF=r(ni);k1=i(rF,"Just-In-Time (JIT) compilation"),rF.forEach(t),nF.forEach(t),w1=d(Xs),Vc=n(Xs,"LI",{});var aF=r(Vc);ri=n(aF,"A",{href:!0,rel:!0});var iF=r(ri);y1=i(iF,"Automatic Differentiation"),iF.forEach(t),aF.forEach(t),$1=d(Xs),Jc=n(Xs,"LI",{});var lF=r(Jc);ai=n(lF,"A",{href:!0,rel:!0});var dF=r(ai);D1=i(dF,"Vectorization"),dF.forEach(t),lF.forEach(t),F1=d(Xs),Kc=n(Xs,"LI",{});var cF=r(Kc);ii=n(cF,"A",{href:!0,rel:!0});var pF=r(ii);B1=i(pF,"Parallelization"),pF.forEach(t),cF.forEach(t),Xs.forEach(t),M1=d(gt),ct=n(gt,"DIV",{class:!0});var ro=r(ct);k(li.$$.fragment,ro),E1=d(ro),Ko=n(ro,"P",{});var kl=r(Ko);x1=i(kl,"The "),Gc=n(kl,"CODE",{});var hF=r(Gc);z1=i(hF,"FlaxDistilBertPreTrainedModel"),hF.forEach(t),j1=i(kl,"forward method, overrides the "),Xc=n(kl,"CODE",{});var uF=r(Xc);C1=i(uF,"__call__"),uF.forEach(t),P1=i(kl," special method."),kl.forEach(t),q1=d(ro),k(Ws.$$.fragment,ro),A1=d(ro),Yc=n(ro,"P",{});var fF=r(Yc);O1=i(fF,"Example:"),fF.forEach(t),N1=d(ro),k(di.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(HF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Ys,"href","https://huggingface.co/victorsanh"),c(Ys,"rel","nofollow"),c(Zs,"href","https://huggingface.co/kamalkraj"),c(Zs,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(fi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertModel"),c(mi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(sn,"href","https://huggingface.co/distilbert-base-uncased"),c(sn,"rel","nofollow"),c(gi,"href","/docs/transformers/pr_16348/en/main_classes/configuration#transformers.PretrainedConfig"),c(_i,"href","/docs/transformers/pr_16348/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ue,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(vi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(Ti,"href","/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer"),c(bi,"href","/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(ki,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(wi,"href","/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizerFast"),c(yi,"href","/docs/transformers/pr_16348/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(ts,"id","transformers.DistilBertModel"),c(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ts,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c($i,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Di,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertModel"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(ss,"id","transformers.DistilBertForMaskedLM"),c(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ss,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(Fi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(Bi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Se,"class","docstring"),c(Qe,"class","docstring"),c(rs,"id","transformers.DistilBertForSequenceClassification"),c(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rs,"href","#transformers.DistilBertForSequenceClassification"),c(mo,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Ei,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(be,"class","docstring"),c(Ve,"class","docstring"),c(is,"id","transformers.DistilBertForMultipleChoice"),c(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(is,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(xi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ye,"class","docstring"),c(Je,"class","docstring"),c(ds,"id","transformers.DistilBertForTokenClassification"),c(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ds,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(ji,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring"),c(Ke,"class","docstring"),c(ps,"id","transformers.DistilBertForQuestionAnswering"),c(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ps,"href","#transformers.DistilBertForQuestionAnswering"),c(ko,"class","relative group"),c(Pi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.PreTrainedModel"),c(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nr,"rel","nofollow"),c(qi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(Ge,"class","docstring"),c(us,"id","transformers.TFDistilBertModel"),c(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(us,"href","#transformers.TFDistilBertModel"),c($o,"class","relative group"),c(Ai,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Oi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(gs,"id","transformers.TFDistilBertForMaskedLM"),c(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gs,"href","#transformers.TFDistilBertForMaskedLM"),c(Fo,"class","relative group"),c(Ni,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(br,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(Ts,"id","transformers.TFDistilBertForSequenceClassification"),c(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ts,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(Li,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Br,"rel","nofollow"),c(Si,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(tt,"class","docstring"),c(Oe,"class","docstring"),c(ws,"id","transformers.TFDistilBertForMultipleChoice"),c(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ws,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Wi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pr,"rel","nofollow"),c(Ri,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(ot,"class","docstring"),c(Ne,"class","docstring"),c(Ds,"id","transformers.TFDistilBertForTokenClassification"),c(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ds,"href","#transformers.TFDistilBertForTokenClassification"),c(jo,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sr,"rel","nofollow"),c(Hi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(st,"class","docstring"),c(Ie,"class","docstring"),c(Ms,"id","transformers.TFDistilBertForQuestionAnswering"),c(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ms,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Qi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.TFPreTrainedModel"),c(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Jr,"rel","nofollow"),c(Vi,"href","/docs/transformers/pr_16348/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(nt,"class","docstring"),c(Le,"class","docstring"),c(zs,"id","transformers.FlaxDistilBertModel"),c(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zs,"href","#transformers.FlaxDistilBertModel"),c(Oo,"class","relative group"),c(Ji,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ta,"rel","nofollow"),c(oa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(oa,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(sa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(na,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ra,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Cs,"id","transformers.FlaxDistilBertForMaskedLM"),c(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Cs,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Io,"class","relative group"),c(Ki,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ua,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ua,"rel","nofollow"),c(fa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(fa,"rel","nofollow"),c(ma,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ma,"rel","nofollow"),c(ga,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ga,"rel","nofollow"),c(_a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(_a,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(qs,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qs,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(So,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c($a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c($a,"rel","nofollow"),c(Da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Da,"rel","nofollow"),c(Fa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Fa,"rel","nofollow"),c(Ba,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ba,"rel","nofollow"),c(Ma,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ma,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Os,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Os,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Xi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(qa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(qa,"rel","nofollow"),c(Aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Aa,"rel","nofollow"),c(Oa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Oa,"rel","nofollow"),c(Na,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Na,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ia,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Is,"id","transformers.FlaxDistilBertForTokenClassification"),c(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Is,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Ho,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Qa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Qa,"rel","nofollow"),c(Va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Va,"rel","nofollow"),c(Ja,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ja,"rel","nofollow"),c(Ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ka,"rel","nofollow"),c(Ga,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ga,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(Ss,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ss,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Vo,"class","relative group"),c(Zi,"href","/docs/transformers/pr_16348/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(si,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(si,"rel","nofollow"),c(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ni,"rel","nofollow"),c(ri,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ri,"rel","nofollow"),c(ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ai,"rel","nofollow"),c(ii,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ii,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,p),u(o,F,m),u(o,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(o,V,m),u(o,E,m),e(E,G),e(G,L),w(X,L,null),e(E,ce),e(E,S),e(S,pe),u(o,re,m),u(o,N,m),e(N,q),e(N,Y),e(Y,J),e(N,x),e(N,z),e(z,he),e(N,W),e(N,oe),e(oe,ue),e(N,R),u(o,ae,m),u(o,ee,m),e(ee,A),u(o,ie,m),u(o,I,m),e(I,se),e(se,fe),u(o,P,m),u(o,te,m),e(te,U),u(o,le,m),u(o,h,m),e(h,M),e(M,K),e(M,_e),e(_e,ke),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,H),e(M,$e),e(h,De),e(h,Z),e(Z,Fe),e(Z,ne),e(ne,Be),e(Z,_u),u(o,vp,m),u(o,Tt,m),e(Tt,vu),e(Tt,Ys),e(Ys,Tu),e(Tt,bu),e(Tt,Zs),e(Zs,ku),e(Tt,wu),e(Tt,en),e(en,yu),e(Tt,$u),u(o,Tp,m),u(o,ao,m),e(ao,Go),e(Go,wl),w(tn,wl,null),e(ao,Du),e(ao,yl),e(yl,Fu),u(o,bp,m),u(o,Ue,m),w(on,Ue,null),e(Ue,Bu),e(Ue,Et),e(Et,Mu),e(Et,fi),e(fi,Eu),e(Et,xu),e(Et,mi),e(mi,zu),e(Et,ju),e(Et,sn),e(sn,Cu),e(Et,Pu),e(Ue,qu),e(Ue,io),e(io,Au),e(io,gi),e(gi,Ou),e(io,Nu),e(io,_i),e(_i,Iu),e(io,Lu),e(Ue,Su),e(Ue,$l),e($l,Wu),e(Ue,Ru),w(nn,Ue,null),u(o,kp,m),u(o,lo,m),e(lo,Xo),e(Xo,Dl),w(rn,Dl,null),e(lo,Uu),e(lo,Fl),e(Fl,Hu),u(o,wp,m),u(o,_t,m),w(an,_t,null),e(_t,Qu),e(_t,Bl),e(Bl,Vu),e(_t,Ju),e(_t,Yo),e(Yo,vi),e(vi,Ku),e(Yo,Gu),e(Yo,Ti),e(Ti,Xu),e(Yo,Yu),e(_t,Zu),e(_t,ln),e(ln,ef),e(ln,bi),e(bi,tf),e(ln,of),u(o,yp,m),u(o,co,m),e(co,Zo),e(Zo,Ml),w(dn,Ml,null),e(co,sf),e(co,El),e(El,nf),u(o,$p,m),u(o,vt,m),w(cn,vt,null),e(vt,rf),e(vt,pn),e(pn,af),e(pn,xl),e(xl,lf),e(pn,df),e(vt,cf),e(vt,es),e(es,ki),e(ki,pf),e(es,hf),e(es,wi),e(wi,uf),e(es,ff),e(vt,mf),e(vt,hn),e(hn,gf),e(hn,yi),e(yi,_f),e(hn,vf),u(o,Dp,m),u(o,po,m),e(po,ts),e(ts,zl),w(un,zl,null),e(po,Tf),e(po,jl),e(jl,bf),u(o,Fp,m),u(o,He,m),w(fn,He,null),e(He,kf),e(He,Cl),e(Cl,wf),e(He,yf),e(He,mn),e(mn,$f),e(mn,$i),e($i,Df),e(mn,Ff),e(He,Bf),e(He,gn),e(gn,Mf),e(gn,_n),e(_n,Ef),e(gn,xf),e(He,zf),e(He,Xe),w(vn,Xe,null),e(Xe,jf),e(Xe,ho),e(ho,Cf),e(ho,Di),e(Di,Pf),e(ho,qf),e(ho,Pl),e(Pl,Af),e(ho,Of),e(Xe,Nf),w(os,Xe,null),e(Xe,If),e(Xe,ql),e(ql,Lf),e(Xe,Sf),w(Tn,Xe,null),u(o,Bp,m),u(o,uo,m),e(uo,ss),e(ss,Al),w(bn,Al,null),e(uo,Wf),e(uo,Ol),e(Ol,Rf),u(o,Mp,m),u(o,Qe,m),w(kn,Qe,null),e(Qe,Uf),e(Qe,wn),e(wn,Hf),e(wn,Nl),e(Nl,Qf),e(wn,Vf),e(Qe,Jf),e(Qe,yn),e(yn,Kf),e(yn,Fi),e(Fi,Gf),e(yn,Xf),e(Qe,Yf),e(Qe,$n),e($n,Zf),e($n,Dn),e(Dn,em),e($n,tm),e(Qe,om),e(Qe,Se),w(Fn,Se,null),e(Se,sm),e(Se,fo),e(fo,nm),e(fo,Bi),e(Bi,rm),e(fo,am),e(fo,Il),e(Il,im),e(fo,lm),e(Se,dm),w(ns,Se,null),e(Se,cm),e(Se,Ll),e(Ll,pm),e(Se,hm),w(Bn,Se,null),e(Se,um),w(Mn,Se,null),u(o,Ep,m),u(o,mo,m),e(mo,rs),e(rs,Sl),w(En,Sl,null),e(mo,fm),e(mo,Wl),e(Wl,mm),u(o,xp,m),u(o,Ve,m),w(xn,Ve,null),e(Ve,gm),e(Ve,Rl),e(Rl,_m),e(Ve,vm),e(Ve,zn),e(zn,Tm),e(zn,Mi),e(Mi,bm),e(zn,km),e(Ve,wm),e(Ve,jn),e(jn,ym),e(jn,Cn),e(Cn,$m),e(jn,Dm),e(Ve,Fm),e(Ve,be),w(Pn,be,null),e(be,Bm),e(be,go),e(go,Mm),e(go,Ei),e(Ei,Em),e(go,xm),e(go,Ul),e(Ul,zm),e(go,jm),e(be,Cm),w(as,be,null),e(be,Pm),e(be,Hl),e(Hl,qm),e(be,Am),w(qn,be,null),e(be,Om),w(An,be,null),e(be,Nm),e(be,Ql),e(Ql,Im),e(be,Lm),w(On,be,null),e(be,Sm),w(Nn,be,null),u(o,zp,m),u(o,_o,m),e(_o,is),e(is,Vl),w(In,Vl,null),e(_o,Wm),e(_o,Jl),e(Jl,Rm),u(o,jp,m),u(o,Je,m),w(Ln,Je,null),e(Je,Um),e(Je,Kl),e(Kl,Hm),e(Je,Qm),e(Je,Sn),e(Sn,Vm),e(Sn,xi),e(xi,Jm),e(Sn,Km),e(Je,Gm),e(Je,Wn),e(Wn,Xm),e(Wn,Rn),e(Rn,Ym),e(Wn,Zm),e(Je,eg),e(Je,Ye),w(Un,Ye,null),e(Ye,tg),e(Ye,vo),e(vo,og),e(vo,zi),e(zi,sg),e(vo,ng),e(vo,Gl),e(Gl,rg),e(vo,ag),e(Ye,ig),w(ls,Ye,null),e(Ye,lg),e(Ye,Xl),e(Xl,dg),e(Ye,cg),w(Hn,Ye,null),u(o,Cp,m),u(o,To,m),e(To,ds),e(ds,Yl),w(Qn,Yl,null),e(To,pg),e(To,Zl),e(Zl,hg),u(o,Pp,m),u(o,Ke,m),w(Vn,Ke,null),e(Ke,ug),e(Ke,ed),e(ed,fg),e(Ke,mg),e(Ke,Jn),e(Jn,gg),e(Jn,ji),e(ji,_g),e(Jn,vg),e(Ke,Tg),e(Ke,Kn),e(Kn,bg),e(Kn,Gn),e(Gn,kg),e(Kn,wg),e(Ke,yg),e(Ke,We),w(Xn,We,null),e(We,$g),e(We,bo),e(bo,Dg),e(bo,Ci),e(Ci,Fg),e(bo,Bg),e(bo,td),e(td,Mg),e(bo,Eg),e(We,xg),w(cs,We,null),e(We,zg),e(We,od),e(od,jg),e(We,Cg),w(Yn,We,null),e(We,Pg),w(Zn,We,null),u(o,qp,m),u(o,ko,m),e(ko,ps),e(ps,sd),w(er,sd,null),e(ko,qg),e(ko,nd),e(nd,Ag),u(o,Ap,m),u(o,Ge,m),w(tr,Ge,null),e(Ge,Og),e(Ge,wo),e(wo,Ng),e(wo,rd),e(rd,Ig),e(wo,Lg),e(wo,ad),e(ad,Sg),e(wo,Wg),e(Ge,Rg),e(Ge,or),e(or,Ug),e(or,Pi),e(Pi,Hg),e(or,Qg),e(Ge,Vg),e(Ge,sr),e(sr,Jg),e(sr,nr),e(nr,Kg),e(sr,Gg),e(Ge,Xg),e(Ge,Re),w(rr,Re,null),e(Re,Yg),e(Re,yo),e(yo,Zg),e(yo,qi),e(qi,e_),e(yo,t_),e(yo,id),e(id,o_),e(yo,s_),e(Re,n_),w(hs,Re,null),e(Re,r_),e(Re,ld),e(ld,a_),e(Re,i_),w(ar,Re,null),e(Re,l_),w(ir,Re,null),u(o,Op,m),u(o,$o,m),e($o,us),e(us,dd),w(lr,dd,null),e($o,d_),e($o,cd),e(cd,c_),u(o,Np,m),u(o,qe,m),w(dr,qe,null),e(qe,p_),e(qe,pd),e(pd,h_),e(qe,u_),e(qe,cr),e(cr,f_),e(cr,Ai),e(Ai,m_),e(cr,g_),e(qe,__),e(qe,pr),e(pr,v_),e(pr,hr),e(hr,T_),e(pr,b_),e(qe,k_),w(fs,qe,null),e(qe,w_),e(qe,Ze),w(ur,Ze,null),e(Ze,y_),e(Ze,Do),e(Do,$_),e(Do,Oi),e(Oi,D_),e(Do,F_),e(Do,hd),e(hd,B_),e(Do,M_),e(Ze,E_),w(ms,Ze,null),e(Ze,x_),e(Ze,ud),e(ud,z_),e(Ze,j_),w(fr,Ze,null),u(o,Ip,m),u(o,Fo,m),e(Fo,gs),e(gs,fd),w(mr,fd,null),e(Fo,C_),e(Fo,md),e(md,P_),u(o,Lp,m),u(o,Ae,m),w(gr,Ae,null),e(Ae,q_),e(Ae,_r),e(_r,A_),e(_r,gd),e(gd,O_),e(_r,N_),e(Ae,I_),e(Ae,vr),e(vr,L_),e(vr,Ni),e(Ni,S_),e(vr,W_),e(Ae,R_),e(Ae,Tr),e(Tr,U_),e(Tr,br),e(br,H_),e(Tr,Q_),e(Ae,V_),w(_s,Ae,null),e(Ae,J_),e(Ae,et),w(kr,et,null),e(et,K_),e(et,Bo),e(Bo,G_),e(Bo,Ii),e(Ii,X_),e(Bo,Y_),e(Bo,_d),e(_d,Z_),e(Bo,ev),e(et,tv),w(vs,et,null),e(et,ov),e(et,vd),e(vd,sv),e(et,nv),w(wr,et,null),u(o,Sp,m),u(o,Mo,m),e(Mo,Ts),e(Ts,Td),w(yr,Td,null),e(Mo,rv),e(Mo,bd),e(bd,av),u(o,Wp,m),u(o,Oe,m),w($r,Oe,null),e(Oe,iv),e(Oe,kd),e(kd,lv),e(Oe,dv),e(Oe,Dr),e(Dr,cv),e(Dr,Li),e(Li,pv),e(Dr,hv),e(Oe,uv),e(Oe,Fr),e(Fr,fv),e(Fr,Br),e(Br,mv),e(Fr,gv),e(Oe,_v),w(bs,Oe,null),e(Oe,vv),e(Oe,tt),w(Mr,tt,null),e(tt,Tv),e(tt,Eo),e(Eo,bv),e(Eo,Si),e(Si,kv),e(Eo,wv),e(Eo,wd),e(wd,yv),e(Eo,$v),e(tt,Dv),w(ks,tt,null),e(tt,Fv),e(tt,yd),e(yd,Bv),e(tt,Mv),w(Er,tt,null),u(o,Rp,m),u(o,xo,m),e(xo,ws),e(ws,$d),w(xr,$d,null),e(xo,Ev),e(xo,Dd),e(Dd,xv),u(o,Up,m),u(o,Ne,m),w(zr,Ne,null),e(Ne,zv),e(Ne,Fd),e(Fd,jv),e(Ne,Cv),e(Ne,jr),e(jr,Pv),e(jr,Wi),e(Wi,qv),e(jr,Av),e(Ne,Ov),e(Ne,Cr),e(Cr,Nv),e(Cr,Pr),e(Pr,Iv),e(Cr,Lv),e(Ne,Sv),w(ys,Ne,null),e(Ne,Wv),e(Ne,ot),w(qr,ot,null),e(ot,Rv),e(ot,zo),e(zo,Uv),e(zo,Ri),e(Ri,Hv),e(zo,Qv),e(zo,Bd),e(Bd,Vv),e(zo,Jv),e(ot,Kv),w($s,ot,null),e(ot,Gv),e(ot,Md),e(Md,Xv),e(ot,Yv),w(Ar,ot,null),u(o,Hp,m),u(o,jo,m),e(jo,Ds),e(Ds,Ed),w(Or,Ed,null),e(jo,Zv),e(jo,xd),e(xd,eT),u(o,Qp,m),u(o,Ie,m),w(Nr,Ie,null),e(Ie,tT),e(Ie,zd),e(zd,oT),e(Ie,sT),e(Ie,Ir),e(Ir,nT),e(Ir,Ui),e(Ui,rT),e(Ir,aT),e(Ie,iT),e(Ie,Lr),e(Lr,lT),e(Lr,Sr),e(Sr,dT),e(Lr,cT),e(Ie,pT),w(Fs,Ie,null),e(Ie,hT),e(Ie,st),w(Wr,st,null),e(st,uT),e(st,Co),e(Co,fT),e(Co,Hi),e(Hi,mT),e(Co,gT),e(Co,jd),e(jd,_T),e(Co,vT),e(st,TT),w(Bs,st,null),e(st,bT),e(st,Cd),e(Cd,kT),e(st,wT),w(Rr,st,null),u(o,Vp,m),u(o,Po,m),e(Po,Ms),e(Ms,Pd),w(Ur,Pd,null),e(Po,yT),e(Po,qd),e(qd,$T),u(o,Jp,m),u(o,Le,m),w(Hr,Le,null),e(Le,DT),e(Le,qo),e(qo,FT),e(qo,Ad),e(Ad,BT),e(qo,MT),e(qo,Od),e(Od,ET),e(qo,xT),e(Le,zT),e(Le,Qr),e(Qr,jT),e(Qr,Qi),e(Qi,CT),e(Qr,PT),e(Le,qT),e(Le,Vr),e(Vr,AT),e(Vr,Jr),e(Jr,OT),e(Vr,NT),e(Le,IT),w(Es,Le,null),e(Le,LT),e(Le,nt),w(Kr,nt,null),e(nt,ST),e(nt,Ao),e(Ao,WT),e(Ao,Vi),e(Vi,RT),e(Ao,UT),e(Ao,Nd),e(Nd,HT),e(Ao,QT),e(nt,VT),w(xs,nt,null),e(nt,JT),e(nt,Id),e(Id,KT),e(nt,GT),w(Gr,nt,null),u(o,Kp,m),u(o,Oo,m),e(Oo,zs),e(zs,Ld),w(Xr,Ld,null),e(Oo,XT),e(Oo,Sd),e(Sd,YT),u(o,Gp,m),u(o,Me,m),w(Yr,Me,null),e(Me,ZT),e(Me,Wd),e(Wd,eb),e(Me,tb),e(Me,Zr),e(Zr,ob),e(Zr,Ji),e(Ji,sb),e(Zr,nb),e(Me,rb),e(Me,ea),e(ea,ab),e(ea,ta),e(ta,ib),e(ea,lb),e(Me,db),e(Me,Rd),e(Rd,cb),e(Me,pb),e(Me,xt),e(xt,Ud),e(Ud,oa),e(oa,hb),e(xt,ub),e(xt,Hd),e(Hd,sa),e(sa,fb),e(xt,mb),e(xt,Qd),e(Qd,na),e(na,gb),e(xt,_b),e(xt,Vd),e(Vd,ra),e(ra,vb),e(Me,Tb),e(Me,rt),w(aa,rt,null),e(rt,bb),e(rt,No),e(No,kb),e(No,Jd),e(Jd,wb),e(No,yb),e(No,Kd),e(Kd,$b),e(No,Db),e(rt,Fb),w(js,rt,null),e(rt,Bb),e(rt,Gd),e(Gd,Mb),e(rt,Eb),w(ia,rt,null),u(o,Xp,m),u(o,Io,m),e(Io,Cs),e(Cs,Xd),w(la,Xd,null),e(Io,xb),e(Io,Yd),e(Yd,zb),u(o,Yp,m),u(o,Ee,m),w(da,Ee,null),e(Ee,jb),e(Ee,ca),e(ca,Cb),e(ca,Zd),e(Zd,Pb),e(ca,qb),e(Ee,Ab),e(Ee,pa),e(pa,Ob),e(pa,Ki),e(Ki,Nb),e(pa,Ib),e(Ee,Lb),e(Ee,ha),e(ha,Sb),e(ha,ua),e(ua,Wb),e(ha,Rb),e(Ee,Ub),e(Ee,ec),e(ec,Hb),e(Ee,Qb),e(Ee,zt),e(zt,tc),e(tc,fa),e(fa,Vb),e(zt,Jb),e(zt,oc),e(oc,ma),e(ma,Kb),e(zt,Gb),e(zt,sc),e(sc,ga),e(ga,Xb),e(zt,Yb),e(zt,nc),e(nc,_a),e(_a,Zb),e(Ee,ek),e(Ee,at),w(va,at,null),e(at,tk),e(at,Lo),e(Lo,ok),e(Lo,rc),e(rc,sk),e(Lo,nk),e(Lo,ac),e(ac,rk),e(Lo,ak),e(at,ik),w(Ps,at,null),e(at,lk),e(at,ic),e(ic,dk),e(at,ck),w(Ta,at,null),u(o,Zp,m),u(o,So,m),e(So,qs),e(qs,lc),w(ba,lc,null),e(So,pk),e(So,dc),e(dc,hk),u(o,eh,m),u(o,xe,m),w(ka,xe,null),e(xe,uk),e(xe,cc),e(cc,fk),e(xe,mk),e(xe,wa),e(wa,gk),e(wa,Gi),e(Gi,_k),e(wa,vk),e(xe,Tk),e(xe,ya),e(ya,bk),e(ya,$a),e($a,kk),e(ya,wk),e(xe,yk),e(xe,pc),e(pc,$k),e(xe,Dk),e(xe,jt),e(jt,hc),e(hc,Da),e(Da,Fk),e(jt,Bk),e(jt,uc),e(uc,Fa),e(Fa,Mk),e(jt,Ek),e(jt,fc),e(fc,Ba),e(Ba,xk),e(jt,zk),e(jt,mc),e(mc,Ma),e(Ma,jk),e(xe,Ck),e(xe,it),w(Ea,it,null),e(it,Pk),e(it,Wo),e(Wo,qk),e(Wo,gc),e(gc,Ak),e(Wo,Ok),e(Wo,_c),e(_c,Nk),e(Wo,Ik),e(it,Lk),w(As,it,null),e(it,Sk),e(it,vc),e(vc,Wk),e(it,Rk),w(xa,it,null),u(o,th,m),u(o,Ro,m),e(Ro,Os),e(Os,Tc),w(za,Tc,null),e(Ro,Uk),e(Ro,bc),e(bc,Hk),u(o,oh,m),u(o,ze,m),w(ja,ze,null),e(ze,Qk),e(ze,kc),e(kc,Vk),e(ze,Jk),e(ze,Ca),e(Ca,Kk),e(Ca,Xi),e(Xi,Gk),e(Ca,Xk),e(ze,Yk),e(ze,Pa),e(Pa,Zk),e(Pa,qa),e(qa,ew),e(Pa,tw),e(ze,ow),e(ze,wc),e(wc,sw),e(ze,nw),e(ze,Ct),e(Ct,yc),e(yc,Aa),e(Aa,rw),e(Ct,aw),e(Ct,$c),e($c,Oa),e(Oa,iw),e(Ct,lw),e(Ct,Dc),e(Dc,Na),e(Na,dw),e(Ct,cw),e(Ct,Fc),e(Fc,Ia),e(Ia,pw),e(ze,hw),e(ze,lt),w(La,lt,null),e(lt,uw),e(lt,Uo),e(Uo,fw),e(Uo,Bc),e(Bc,mw),e(Uo,gw),e(Uo,Mc),e(Mc,_w),e(Uo,vw),e(lt,Tw),w(Ns,lt,null),e(lt,bw),e(lt,Ec),e(Ec,kw),e(lt,ww),w(Sa,lt,null),u(o,sh,m),u(o,Ho,m),e(Ho,Is),e(Is,xc),w(Wa,xc,null),e(Ho,yw),e(Ho,zc),e(zc,$w),u(o,nh,m),u(o,je,m),w(Ra,je,null),e(je,Dw),e(je,jc),e(jc,Fw),e(je,Bw),e(je,Ua),e(Ua,Mw),e(Ua,Yi),e(Yi,Ew),e(Ua,xw),e(je,zw),e(je,Ha),e(Ha,jw),e(Ha,Qa),e(Qa,Cw),e(Ha,Pw),e(je,qw),e(je,Cc),e(Cc,Aw),e(je,Ow),e(je,Pt),e(Pt,Pc),e(Pc,Va),e(Va,Nw),e(Pt,Iw),e(Pt,qc),e(qc,Ja),e(Ja,Lw),e(Pt,Sw),e(Pt,Ac),e(Ac,Ka),e(Ka,Ww),e(Pt,Rw),e(Pt,Oc),e(Oc,Ga),e(Ga,Uw),e(je,Hw),e(je,dt),w(Xa,dt,null),e(dt,Qw),e(dt,Qo),e(Qo,Vw),e(Qo,Nc),e(Nc,Jw),e(Qo,Kw),e(Qo,Ic),e(Ic,Gw),e(Qo,Xw),e(dt,Yw),w(Ls,dt,null),e(dt,Zw),e(dt,Lc),e(Lc,e1),e(dt,t1),w(Ya,dt,null),u(o,rh,m),u(o,Vo,m),e(Vo,Ss),e(Ss,Sc),w(Za,Sc,null),e(Vo,o1),e(Vo,Wc),e(Wc,s1),u(o,ah,m),u(o,Ce,m),w(ei,Ce,null),e(Ce,n1),e(Ce,Jo),e(Jo,r1),e(Jo,Rc),e(Rc,a1),e(Jo,i1),e(Jo,Uc),e(Uc,l1),e(Jo,d1),e(Ce,c1),e(Ce,ti),e(ti,p1),e(ti,Zi),e(Zi,h1),e(ti,u1),e(Ce,f1),e(Ce,oi),e(oi,m1),e(oi,si),e(si,g1),e(oi,_1),e(Ce,v1),e(Ce,Hc),e(Hc,T1),e(Ce,b1),e(Ce,qt),e(qt,Qc),e(Qc,ni),e(ni,k1),e(qt,w1),e(qt,Vc),e(Vc,ri),e(ri,y1),e(qt,$1),e(qt,Jc),e(Jc,ai),e(ai,D1),e(qt,F1),e(qt,Kc),e(Kc,ii),e(ii,B1),e(Ce,M1),e(Ce,ct),w(li,ct,null),e(ct,E1),e(ct,Ko),e(Ko,x1),e(Ko,Gc),e(Gc,z1),e(Ko,j1),e(Ko,Xc),e(Xc,C1),e(Ko,P1),e(ct,q1),w(Ws,ct,null),e(ct,A1),e(ct,Yc),e(Yc,O1),e(ct,N1),w(di,ct,null),ih=!0},p(o,[m]){const ci={};m&2&&(ci.$$scope={dirty:m,ctx:o}),os.$set(ci);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:o}),ns.$set(Zc);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:o}),as.$set(ep);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:o}),ls.$set(tp);const pi={};m&2&&(pi.$$scope={dirty:m,ctx:o}),cs.$set(pi);const op={};m&2&&(op.$$scope={dirty:m,ctx:o}),hs.$set(op);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:o}),fs.$set(sp);const np={};m&2&&(np.$$scope={dirty:m,ctx:o}),ms.$set(np);const At={};m&2&&(At.$$scope={dirty:m,ctx:o}),_s.$set(At);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:o}),vs.$set(rp);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:o}),bs.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:o}),ks.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:o}),ys.$set(lp);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:o}),$s.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:o}),Fs.$set(cp);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:o}),Bs.$set(pp);const hi={};m&2&&(hi.$$scope={dirty:m,ctx:o}),Es.$set(hi);const Ot={};m&2&&(Ot.$$scope={dirty:m,ctx:o}),xs.$set(Ot);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:o}),js.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:o}),Ps.$set(up);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:o}),As.$set(fp);const ui={};m&2&&(ui.$$scope={dirty:m,ctx:o}),Ns.$set(ui);const mp={};m&2&&(mp.$$scope={dirty:m,ctx:o}),Ls.$set(mp);const Nt={};m&2&&(Nt.$$scope={dirty:m,ctx:o}),Ws.$set(Nt)},i(o){ih||(y(_.$$.fragment,o),y(X.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(vn.$$.fragment,o),y(os.$$.fragment,o),y(Tn.$$.fragment,o),y(bn.$$.fragment,o),y(kn.$$.fragment,o),y(Fn.$$.fragment,o),y(ns.$$.fragment,o),y(Bn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(xn.$$.fragment,o),y(Pn.$$.fragment,o),y(as.$$.fragment,o),y(qn.$$.fragment,o),y(An.$$.fragment,o),y(On.$$.fragment,o),y(Nn.$$.fragment,o),y(In.$$.fragment,o),y(Ln.$$.fragment,o),y(Un.$$.fragment,o),y(ls.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Vn.$$.fragment,o),y(Xn.$$.fragment,o),y(cs.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(er.$$.fragment,o),y(tr.$$.fragment,o),y(rr.$$.fragment,o),y(hs.$$.fragment,o),y(ar.$$.fragment,o),y(ir.$$.fragment,o),y(lr.$$.fragment,o),y(dr.$$.fragment,o),y(fs.$$.fragment,o),y(ur.$$.fragment,o),y(ms.$$.fragment,o),y(fr.$$.fragment,o),y(mr.$$.fragment,o),y(gr.$$.fragment,o),y(_s.$$.fragment,o),y(kr.$$.fragment,o),y(vs.$$.fragment,o),y(wr.$$.fragment,o),y(yr.$$.fragment,o),y($r.$$.fragment,o),y(bs.$$.fragment,o),y(Mr.$$.fragment,o),y(ks.$$.fragment,o),y(Er.$$.fragment,o),y(xr.$$.fragment,o),y(zr.$$.fragment,o),y(ys.$$.fragment,o),y(qr.$$.fragment,o),y($s.$$.fragment,o),y(Ar.$$.fragment,o),y(Or.$$.fragment,o),y(Nr.$$.fragment,o),y(Fs.$$.fragment,o),y(Wr.$$.fragment,o),y(Bs.$$.fragment,o),y(Rr.$$.fragment,o),y(Ur.$$.fragment,o),y(Hr.$$.fragment,o),y(Es.$$.fragment,o),y(Kr.$$.fragment,o),y(xs.$$.fragment,o),y(Gr.$$.fragment,o),y(Xr.$$.fragment,o),y(Yr.$$.fragment,o),y(aa.$$.fragment,o),y(js.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(da.$$.fragment,o),y(va.$$.fragment,o),y(Ps.$$.fragment,o),y(Ta.$$.fragment,o),y(ba.$$.fragment,o),y(ka.$$.fragment,o),y(Ea.$$.fragment,o),y(As.$$.fragment,o),y(xa.$$.fragment,o),y(za.$$.fragment,o),y(ja.$$.fragment,o),y(La.$$.fragment,o),y(Ns.$$.fragment,o),y(Sa.$$.fragment,o),y(Wa.$$.fragment,o),y(Ra.$$.fragment,o),y(Xa.$$.fragment,o),y(Ls.$$.fragment,o),y(Ya.$$.fragment,o),y(Za.$$.fragment,o),y(ei.$$.fragment,o),y(li.$$.fragment,o),y(Ws.$$.fragment,o),y(di.$$.fragment,o),ih=!0)},o(o){$(_.$$.fragment,o),$(X.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(vn.$$.fragment,o),$(os.$$.fragment,o),$(Tn.$$.fragment,o),$(bn.$$.fragment,o),$(kn.$$.fragment,o),$(Fn.$$.fragment,o),$(ns.$$.fragment,o),$(Bn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(xn.$$.fragment,o),$(Pn.$$.fragment,o),$(as.$$.fragment,o),$(qn.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Ln.$$.fragment,o),$(Un.$$.fragment,o),$(ls.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Xn.$$.fragment,o),$(cs.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(rr.$$.fragment,o),$(hs.$$.fragment,o),$(ar.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(dr.$$.fragment,o),$(fs.$$.fragment,o),$(ur.$$.fragment,o),$(ms.$$.fragment,o),$(fr.$$.fragment,o),$(mr.$$.fragment,o),$(gr.$$.fragment,o),$(_s.$$.fragment,o),$(kr.$$.fragment,o),$(vs.$$.fragment,o),$(wr.$$.fragment,o),$(yr.$$.fragment,o),$($r.$$.fragment,o),$(bs.$$.fragment,o),$(Mr.$$.fragment,o),$(ks.$$.fragment,o),$(Er.$$.fragment,o),$(xr.$$.fragment,o),$(zr.$$.fragment,o),$(ys.$$.fragment,o),$(qr.$$.fragment,o),$($s.$$.fragment,o),$(Ar.$$.fragment,o),$(Or.$$.fragment,o),$(Nr.$$.fragment,o),$(Fs.$$.fragment,o),$(Wr.$$.fragment,o),$(Bs.$$.fragment,o),$(Rr.$$.fragment,o),$(Ur.$$.fragment,o),$(Hr.$$.fragment,o),$(Es.$$.fragment,o),$(Kr.$$.fragment,o),$(xs.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(Yr.$$.fragment,o),$(aa.$$.fragment,o),$(js.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(va.$$.fragment,o),$(Ps.$$.fragment,o),$(Ta.$$.fragment,o),$(ba.$$.fragment,o),$(ka.$$.fragment,o),$(Ea.$$.fragment,o),$(As.$$.fragment,o),$(xa.$$.fragment,o),$(za.$$.fragment,o),$(ja.$$.fragment,o),$(La.$$.fragment,o),$(Ns.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Ra.$$.fragment,o),$(Xa.$$.fragment,o),$(Ls.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(ei.$$.fragment,o),$(li.$$.fragment,o),$(Ws.$$.fragment,o),$(di.$$.fragment,o),ih=!1},d(o){t(p),o&&t(F),o&&t(g),D(_),o&&t(V),o&&t(E),D(X),o&&t(re),o&&t(N),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(I),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(vp),o&&t(Tt),o&&t(Tp),o&&t(ao),D(tn),o&&t(bp),o&&t(Ue),D(on),D(nn),o&&t(kp),o&&t(lo),D(rn),o&&t(wp),o&&t(_t),D(an),o&&t(yp),o&&t(co),D(dn),o&&t($p),o&&t(vt),D(cn),o&&t(Dp),o&&t(po),D(un),o&&t(Fp),o&&t(He),D(fn),D(vn),D(os),D(Tn),o&&t(Bp),o&&t(uo),D(bn),o&&t(Mp),o&&t(Qe),D(kn),D(Fn),D(ns),D(Bn),D(Mn),o&&t(Ep),o&&t(mo),D(En),o&&t(xp),o&&t(Ve),D(xn),D(Pn),D(as),D(qn),D(An),D(On),D(Nn),o&&t(zp),o&&t(_o),D(In),o&&t(jp),o&&t(Je),D(Ln),D(Un),D(ls),D(Hn),o&&t(Cp),o&&t(To),D(Qn),o&&t(Pp),o&&t(Ke),D(Vn),D(Xn),D(cs),D(Yn),D(Zn),o&&t(qp),o&&t(ko),D(er),o&&t(Ap),o&&t(Ge),D(tr),D(rr),D(hs),D(ar),D(ir),o&&t(Op),o&&t($o),D(lr),o&&t(Np),o&&t(qe),D(dr),D(fs),D(ur),D(ms),D(fr),o&&t(Ip),o&&t(Fo),D(mr),o&&t(Lp),o&&t(Ae),D(gr),D(_s),D(kr),D(vs),D(wr),o&&t(Sp),o&&t(Mo),D(yr),o&&t(Wp),o&&t(Oe),D($r),D(bs),D(Mr),D(ks),D(Er),o&&t(Rp),o&&t(xo),D(xr),o&&t(Up),o&&t(Ne),D(zr),D(ys),D(qr),D($s),D(Ar),o&&t(Hp),o&&t(jo),D(Or),o&&t(Qp),o&&t(Ie),D(Nr),D(Fs),D(Wr),D(Bs),D(Rr),o&&t(Vp),o&&t(Po),D(Ur),o&&t(Jp),o&&t(Le),D(Hr),D(Es),D(Kr),D(xs),D(Gr),o&&t(Kp),o&&t(Oo),D(Xr),o&&t(Gp),o&&t(Me),D(Yr),D(aa),D(js),D(ia),o&&t(Xp),o&&t(Io),D(la),o&&t(Yp),o&&t(Ee),D(da),D(va),D(Ps),D(Ta),o&&t(Zp),o&&t(So),D(ba),o&&t(eh),o&&t(xe),D(ka),D(Ea),D(As),D(xa),o&&t(th),o&&t(Ro),D(za),o&&t(oh),o&&t(ze),D(ja),D(La),D(Ns),D(Sa),o&&t(sh),o&&t(Ho),D(Wa),o&&t(nh),o&&t(je),D(Ra),D(Xa),D(Ls),D(Ya),o&&t(rh),o&&t(Vo),D(Za),o&&t(ah),o&&t(Ce),D(ei),D(li),D(Ws),D(di)}}}const HF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function QF(j){return TF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class YF extends mF{constructor(p){super();gF(this,p,QF,UF,_F,{})}}export{YF as default,HF as metadata};
