import{S as yF,i as $F,s as DF,e as o,k as l,w as b,t as a,M as FF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as T,q as w,o as y,B as $,v as BF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as H}from"../../chunks/Docstring-abef54e3.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";function MF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function EF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function xF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function zF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function jF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function CF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function qF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function PF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function AF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function OF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function NF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function LF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function SF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function IF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function WF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function RF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function UF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),S=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),P=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),q=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),V=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),S=n(O,"CODE",{});var ve=r(S);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=n(O,"CODE",{});var we=r(I);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),P=n(h,"P",{});var ye=r(P);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),K=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var Q=r(z);ue=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),Q.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=n(Z,"CODE",{});var Fe=r(L);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),q=n(C,"LI",{});var ne=r(q);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,V,M),u(h,E,M),e(E,G),e(E,S),e(S,X),e(E,pe),e(E,I),e(I,he),e(E,ae),u(h,N,M),u(h,P,M),e(P,Y),u(h,K,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,L),e(L,oe),e(x,me),e(x,q),e(q,te),e(q,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(N),h&&t(P),h&&t(K),h&&t(x)}}}function QF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function HF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function VF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function KF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function JF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function GF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function XF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function YF(j){let p,F,g,v,D,_,f,B,ce,V,E,G,S,X,pe,I,he,ae,N,P,Y,K,x,z,ue,W,se,fe,R,ie,ee,A,le,L,oe,me,q,te,U,de,h,M,J,_e,Te,O,ve,we,ye,C,Q,$e,De,Z,Fe,ne,Be,Tu,wp,bt,wu,Yo,yu,$u,Zo,Du,Fu,en,Bu,Mu,yp,as,Js,Fl,tn,Eu,Bl,xu,$p,Ke,sn,zu,Ct,ju,vi,Cu,qu,bi,Pu,Au,on,Ou,Nu,Lu,is,Su,ki,Iu,Wu,Ti,Ru,Uu,Qu,Ml,Hu,Vu,nn,Dp,ls,Gs,El,rn,Ku,xl,Ju,Fp,_t,an,Gu,zl,Xu,Yu,Xs,wi,Zu,ef,yi,tf,sf,of,ln,nf,$i,rf,af,Bp,ds,Ys,jl,dn,lf,Cl,df,Mp,vt,cn,cf,pn,pf,ql,hf,uf,ff,Zs,Di,mf,gf,Fi,_f,vf,bf,hn,kf,Bi,Tf,wf,Ep,cs,eo,Pl,un,yf,Al,$f,xp,Je,fn,Df,Ol,Ff,Bf,mn,Mf,Mi,Ef,xf,zf,gn,jf,_n,Cf,qf,Pf,tt,vn,Af,ps,Of,Ei,Nf,Lf,Nl,Sf,If,Wf,to,Rf,Ll,Uf,Qf,bn,zp,hs,so,Sl,kn,Hf,Il,Vf,jp,Ge,Tn,Kf,wn,Jf,Wl,Gf,Xf,Yf,yn,Zf,xi,em,tm,sm,$n,om,Dn,nm,rm,am,Ie,Fn,im,us,lm,zi,dm,cm,Rl,pm,hm,um,oo,fm,Ul,mm,gm,Bn,_m,Mn,Cp,fs,no,Ql,En,vm,Hl,bm,qp,Xe,xn,km,Vl,Tm,wm,zn,ym,ji,$m,Dm,Fm,jn,Bm,Cn,Mm,Em,xm,ke,qn,zm,ms,jm,Ci,Cm,qm,Kl,Pm,Am,Om,ro,Nm,Jl,Lm,Sm,Pn,Im,An,Wm,Gl,Rm,Um,On,Qm,Nn,Pp,gs,ao,Xl,Ln,Hm,Yl,Vm,Ap,Ye,Sn,Km,Zl,Jm,Gm,In,Xm,qi,Ym,Zm,eg,Wn,tg,Rn,sg,og,ng,st,Un,rg,_s,ag,Pi,ig,lg,ed,dg,cg,pg,io,hg,td,ug,fg,Qn,Op,vs,lo,sd,Hn,mg,od,gg,Np,Ze,Vn,_g,nd,vg,bg,Kn,kg,Ai,Tg,wg,yg,Jn,$g,Gn,Dg,Fg,Bg,We,Xn,Mg,bs,Eg,Oi,xg,zg,rd,jg,Cg,qg,co,Pg,ad,Ag,Og,Yn,Ng,Zn,Lp,ks,po,id,er,Lg,ld,Sg,Sp,et,tr,Ig,Ts,Wg,dd,Rg,Ug,cd,Qg,Hg,Vg,sr,Kg,Ni,Jg,Gg,Xg,or,Yg,nr,Zg,e_,t_,Re,rr,s_,ws,o_,Li,n_,r_,pd,a_,i_,l_,ho,d_,hd,c_,p_,ar,h_,ir,Ip,ys,uo,ud,lr,u_,fd,f_,Wp,Pe,dr,m_,md,g_,__,cr,v_,Si,b_,k_,T_,pr,w_,hr,y_,$_,D_,fo,F_,ot,ur,B_,$s,M_,Ii,E_,x_,gd,z_,j_,C_,mo,q_,_d,P_,A_,fr,Rp,Ds,go,vd,mr,O_,bd,N_,Up,Ae,gr,L_,_r,S_,kd,I_,W_,R_,vr,U_,Wi,Q_,H_,V_,br,K_,kr,J_,G_,X_,_o,Y_,Ue,Tr,Z_,Fs,ev,Ri,tv,sv,Td,ov,nv,rv,vo,av,wd,iv,lv,wr,dv,yr,Qp,Bs,bo,yd,$r,cv,$d,pv,Hp,Oe,Dr,hv,Dd,uv,fv,Fr,mv,Ui,gv,_v,vv,Br,bv,Mr,kv,Tv,wv,ko,yv,Qe,Er,$v,Ms,Dv,Qi,Fv,Bv,Fd,Mv,Ev,xv,To,zv,Bd,jv,Cv,xr,qv,zr,Vp,Es,wo,Md,jr,Pv,Ed,Av,Kp,Ne,Cr,Ov,xd,Nv,Lv,qr,Sv,Hi,Iv,Wv,Rv,Pr,Uv,Ar,Qv,Hv,Vv,yo,Kv,nt,Or,Jv,xs,Gv,Vi,Xv,Yv,zd,Zv,e1,t1,$o,s1,jd,o1,n1,Nr,Jp,zs,Do,Cd,Lr,r1,qd,a1,Gp,Le,Sr,i1,Pd,l1,d1,Ir,c1,Ki,p1,h1,u1,Wr,f1,Rr,m1,g1,_1,Fo,v1,He,Ur,b1,js,k1,Ji,T1,w1,Ad,y1,$1,D1,Bo,F1,Od,B1,M1,Qr,E1,Hr,Xp,Cs,Mo,Nd,Vr,x1,Ld,z1,Yp,Se,Kr,j1,qs,C1,Sd,q1,P1,Id,A1,O1,N1,Jr,L1,Gi,S1,I1,W1,Gr,R1,Xr,U1,Q1,H1,Eo,V1,Ve,Yr,K1,Ps,J1,Xi,G1,X1,Wd,Y1,Z1,eb,xo,tb,Rd,sb,ob,Zr,nb,ea,Zp,As,zo,Ud,ta,rb,Qd,ab,eh,Me,sa,ib,Hd,lb,db,oa,cb,Yi,pb,hb,ub,na,fb,ra,mb,gb,_b,Vd,vb,bb,qt,Kd,aa,kb,Tb,Jd,ia,wb,yb,Gd,la,$b,Db,Xd,da,Fb,Bb,rt,ca,Mb,Os,Eb,Yd,xb,zb,Zd,jb,Cb,qb,jo,Pb,ec,Ab,Ob,pa,th,Ns,Co,tc,ha,Nb,sc,Lb,sh,Ee,ua,Sb,fa,Ib,oc,Wb,Rb,Ub,ma,Qb,Zi,Hb,Vb,Kb,ga,Jb,_a,Gb,Xb,Yb,nc,Zb,ek,Pt,rc,va,tk,sk,ac,ba,ok,nk,ic,ka,rk,ak,lc,Ta,ik,lk,at,wa,dk,Ls,ck,dc,pk,hk,cc,uk,fk,mk,qo,gk,pc,_k,vk,ya,oh,Ss,Po,hc,$a,bk,uc,kk,nh,xe,Da,Tk,fc,wk,yk,Fa,$k,el,Dk,Fk,Bk,Ba,Mk,Ma,Ek,xk,zk,mc,jk,Ck,At,gc,Ea,qk,Pk,_c,xa,Ak,Ok,vc,za,Nk,Lk,bc,ja,Sk,Ik,it,Ca,Wk,Is,Rk,kc,Uk,Qk,Tc,Hk,Vk,Kk,Ao,Jk,wc,Gk,Xk,qa,rh,Ws,Oo,yc,Pa,Yk,$c,Zk,ah,ze,Aa,eT,Dc,tT,sT,Oa,oT,tl,nT,rT,aT,Na,iT,La,lT,dT,cT,Fc,pT,hT,Ot,Bc,Sa,uT,fT,Mc,Ia,mT,gT,Ec,Wa,_T,vT,xc,Ra,bT,kT,lt,Ua,TT,Rs,wT,zc,yT,$T,jc,DT,FT,BT,No,MT,Cc,ET,xT,Qa,ih,Us,Lo,qc,Ha,zT,Pc,jT,lh,je,Va,CT,Ac,qT,PT,Ka,AT,sl,OT,NT,LT,Ja,ST,Ga,IT,WT,RT,Oc,UT,QT,Nt,Nc,Xa,HT,VT,Lc,Ya,KT,JT,Sc,Za,GT,XT,Ic,ei,YT,ZT,dt,ti,ew,Qs,tw,Wc,sw,ow,Rc,nw,rw,aw,So,iw,Uc,lw,dw,si,dh,Hs,Io,Qc,oi,cw,Hc,pw,ch,Ce,ni,hw,Vs,uw,Vc,fw,mw,Kc,gw,_w,vw,ri,bw,ol,kw,Tw,ww,ai,yw,ii,$w,Dw,Fw,Jc,Bw,Mw,Lt,Gc,li,Ew,xw,Xc,di,zw,jw,Yc,ci,Cw,qw,Zc,pi,Pw,Aw,ct,hi,Ow,Ks,Nw,ep,Lw,Sw,tp,Iw,Ww,Rw,Wo,Uw,sp,Qw,Hw,ui,ph;return _=new be({}),X=new be({}),tn=new be({}),sn=new H({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new re({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new be({}),an=new H({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new be({}),cn=new H({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new be({}),fn=new H({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new H({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new ge({props:{$$slots:{default:[MF]},$$scope:{ctx:j}}}),bn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new be({}),Tn=new H({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new H({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new ge({props:{$$slots:{default:[EF]},$$scope:{ctx:j}}}),Bn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
`}}),Mn=new re({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),En=new be({}),xn=new H({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qn=new H({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),Pn=new re({props:{code:`import torch
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
`}}),An=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),On=new re({props:{code:`import torch
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
`}}),Nn=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Ln=new be({}),Sn=new H({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Un=new H({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Qn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Hn=new be({}),Vn=new H({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new H({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
>DistilBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ge({props:{$$slots:{default:[jF]},$$scope:{ctx:j}}}),Yn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
`}}),Zn=new re({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),er=new be({}),tr=new H({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rr=new H({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new ge({props:{$$slots:{default:[CF]},$$scope:{ctx:j}}}),ar=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),ir=new re({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),lr=new be({}),dr=new H({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L523",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),ur=new H({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L528",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),fr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mr=new be({}),gr=new H({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L611",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_o=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Tr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L631",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new ge({props:{$$slots:{default:[OF]},$$scope:{ctx:j}}}),wr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
`}}),yr=new re({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),$r=new be({}),Dr=new H({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L702",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),Er=new H({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L719",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),To=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),xr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),zr=new re({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),jr=new be({}),Cr=new H({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L867",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Or=new H({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L893",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),Nr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lr=new be({}),Sr=new H({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L790",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ur=new H({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L801",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),Qr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Hr=new re({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Vr=new be({}),Kr=new H({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L993",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new ge({props:{$$slots:{default:[UF]},$$scope:{ctx:j}}}),Yr=new H({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1004",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDistilBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ge({props:{$$slots:{default:[QF]},$$scope:{ctx:j}}}),Zr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ea=new re({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),ta=new be({}),sa=new H({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ca=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),jo=new ge({props:{$$slots:{default:[HF]},$$scope:{ctx:j}}}),pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ha=new be({}),ua=new H({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wa=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new ge({props:{$$slots:{default:[VF]},$$scope:{ctx:j}}}),ya=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$a=new be({}),Da=new H({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ca=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new ge({props:{$$slots:{default:[KF]},$$scope:{ctx:j}}}),qa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pa=new be({}),Aa=new H({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ua=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ge({props:{$$slots:{default:[JF]},$$scope:{ctx:j}}}),Qa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ha=new be({}),Va=new H({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ti=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new ge({props:{$$slots:{default:[GF]},$$scope:{ctx:j}}}),si=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),oi=new be({}),ni=new H({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hi=new H({props:{name:"__call__",anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16162/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16162/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16162/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxDistilBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16162/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16162/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new ge({props:{$$slots:{default:[XF]},$$scope:{ctx:j}}}),ui=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=o("meta"),F=l(),g=o("h1"),v=o("a"),D=o("span"),b(_.$$.fragment),f=l(),B=o("span"),ce=a("DistilBERT"),V=l(),E=o("h2"),G=o("a"),S=o("span"),b(X.$$.fragment),pe=l(),I=o("span"),he=a("Overview"),ae=l(),N=o("p"),P=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),K=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),ue=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),fe=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ie=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),le=l(),L=o("p"),oe=o("em"),me=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),q=l(),te=o("p"),U=a("Tips:"),de=l(),h=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),_e=o("code"),Te=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),Q=a("[SEP]"),$e=a(")."),De=l(),Z=o("li"),Fe=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Be=a("position_ids"),Tu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),wp=l(),bt=o("p"),wu=a("This model was contributed by "),Yo=o("a"),yu=a("victorsanh"),$u=a(`. This model jax version was
contributed by `),Zo=o("a"),Du=a("kamalkraj"),Fu=a(". The original code can be found "),en=o("a"),Bu=a("here"),Mu=a("."),yp=l(),as=o("h2"),Js=o("a"),Fl=o("span"),b(tn.$$.fragment),Eu=l(),Bl=o("span"),xu=a("DistilBertConfig"),$p=l(),Ke=o("div"),b(sn.$$.fragment),zu=l(),Ct=o("p"),ju=a("This is the configuration class to store the configuration of a "),vi=o("a"),Cu=a("DistilBertModel"),qu=a(" or a "),bi=o("a"),Pu=a("TFDistilBertModel"),Au=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=o("a"),Ou=a("distilbert-base-uncased"),Nu=a(" architecture."),Lu=l(),is=o("p"),Su=a("Configuration objects inherit from "),ki=o("a"),Iu=a("PretrainedConfig"),Wu=a(` and can be used to control the model outputs. Read the
documentation from `),Ti=o("a"),Ru=a("PretrainedConfig"),Uu=a(" for more information."),Qu=l(),Ml=o("p"),Hu=a("Examples:"),Vu=l(),b(nn.$$.fragment),Dp=l(),ls=o("h2"),Gs=o("a"),El=o("span"),b(rn.$$.fragment),Ku=l(),xl=o("span"),Ju=a("DistilBertTokenizer"),Fp=l(),_t=o("div"),b(an.$$.fragment),Gu=l(),zl=o("p"),Xu=a("Construct a DistilBERT tokenizer."),Yu=l(),Xs=o("p"),wi=o("a"),Zu=a("DistilBertTokenizer"),ef=a(" is identical to "),yi=o("a"),tf=a("BertTokenizer"),sf=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),of=l(),ln=o("p"),nf=a("Refer to superclass "),$i=o("a"),rf=a("BertTokenizer"),af=a(" for usage examples and documentation concerning parameters."),Bp=l(),ds=o("h2"),Ys=o("a"),jl=o("span"),b(dn.$$.fragment),lf=l(),Cl=o("span"),df=a("DistilBertTokenizerFast"),Mp=l(),vt=o("div"),b(cn.$$.fragment),cf=l(),pn=o("p"),pf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),ql=o("em"),hf=a("tokenizers"),uf=a(" library)."),ff=l(),Zs=o("p"),Di=o("a"),mf=a("DistilBertTokenizerFast"),gf=a(" is identical to "),Fi=o("a"),_f=a("BertTokenizerFast"),vf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bf=l(),hn=o("p"),kf=a("Refer to superclass "),Bi=o("a"),Tf=a("BertTokenizerFast"),wf=a(" for usage examples and documentation concerning parameters."),Ep=l(),cs=o("h2"),eo=o("a"),Pl=o("span"),b(un.$$.fragment),yf=l(),Al=o("span"),$f=a("DistilBertModel"),xp=l(),Je=o("div"),b(fn.$$.fragment),Df=l(),Ol=o("p"),Ff=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Bf=l(),mn=o("p"),Mf=a("This model inherits from "),Mi=o("a"),Ef=a("PreTrainedModel"),xf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=l(),gn=o("p"),jf=a("This model is also a PyTorch "),_n=o("a"),Cf=a("torch.nn.Module"),qf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pf=l(),tt=o("div"),b(vn.$$.fragment),Af=l(),ps=o("p"),Of=a("The "),Ei=o("a"),Nf=a("DistilBertModel"),Lf=a(" forward method, overrides the "),Nl=o("code"),Sf=a("__call__"),If=a(" special method."),Wf=l(),b(to.$$.fragment),Rf=l(),Ll=o("p"),Uf=a("Example:"),Qf=l(),b(bn.$$.fragment),zp=l(),hs=o("h2"),so=o("a"),Sl=o("span"),b(kn.$$.fragment),Hf=l(),Il=o("span"),Vf=a("DistilBertForMaskedLM"),jp=l(),Ge=o("div"),b(Tn.$$.fragment),Kf=l(),wn=o("p"),Jf=a("DistilBert Model with a "),Wl=o("code"),Gf=a("masked language modeling"),Xf=a(" head on top."),Yf=l(),yn=o("p"),Zf=a("This model inherits from "),xi=o("a"),em=a("PreTrainedModel"),tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=l(),$n=o("p"),om=a("This model is also a PyTorch "),Dn=o("a"),nm=a("torch.nn.Module"),rm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=l(),Ie=o("div"),b(Fn.$$.fragment),im=l(),us=o("p"),lm=a("The "),zi=o("a"),dm=a("DistilBertForMaskedLM"),cm=a(" forward method, overrides the "),Rl=o("code"),pm=a("__call__"),hm=a(" special method."),um=l(),b(oo.$$.fragment),fm=l(),Ul=o("p"),mm=a("Example:"),gm=l(),b(Bn.$$.fragment),_m=l(),b(Mn.$$.fragment),Cp=l(),fs=o("h2"),no=o("a"),Ql=o("span"),b(En.$$.fragment),vm=l(),Hl=o("span"),bm=a("DistilBertForSequenceClassification"),qp=l(),Xe=o("div"),b(xn.$$.fragment),km=l(),Vl=o("p"),Tm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wm=l(),zn=o("p"),ym=a("This model inherits from "),ji=o("a"),$m=a("PreTrainedModel"),Dm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fm=l(),jn=o("p"),Bm=a("This model is also a PyTorch "),Cn=o("a"),Mm=a("torch.nn.Module"),Em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xm=l(),ke=o("div"),b(qn.$$.fragment),zm=l(),ms=o("p"),jm=a("The "),Ci=o("a"),Cm=a("DistilBertForSequenceClassification"),qm=a(" forward method, overrides the "),Kl=o("code"),Pm=a("__call__"),Am=a(" special method."),Om=l(),b(ro.$$.fragment),Nm=l(),Jl=o("p"),Lm=a("Example of single-label classification:"),Sm=l(),b(Pn.$$.fragment),Im=l(),b(An.$$.fragment),Wm=l(),Gl=o("p"),Rm=a("Example of multi-label classification:"),Um=l(),b(On.$$.fragment),Qm=l(),b(Nn.$$.fragment),Pp=l(),gs=o("h2"),ao=o("a"),Xl=o("span"),b(Ln.$$.fragment),Hm=l(),Yl=o("span"),Vm=a("DistilBertForMultipleChoice"),Ap=l(),Ye=o("div"),b(Sn.$$.fragment),Km=l(),Zl=o("p"),Jm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gm=l(),In=o("p"),Xm=a("This model inherits from "),qi=o("a"),Ym=a("PreTrainedModel"),Zm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=l(),Wn=o("p"),tg=a("This model is also a PyTorch "),Rn=o("a"),sg=a("torch.nn.Module"),og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ng=l(),st=o("div"),b(Un.$$.fragment),rg=l(),_s=o("p"),ag=a("The "),Pi=o("a"),ig=a("DistilBertForMultipleChoice"),lg=a(" forward method, overrides the "),ed=o("code"),dg=a("__call__"),cg=a(" special method."),pg=l(),b(io.$$.fragment),hg=l(),td=o("p"),ug=a("Examples:"),fg=l(),b(Qn.$$.fragment),Op=l(),vs=o("h2"),lo=o("a"),sd=o("span"),b(Hn.$$.fragment),mg=l(),od=o("span"),gg=a("DistilBertForTokenClassification"),Np=l(),Ze=o("div"),b(Vn.$$.fragment),_g=l(),nd=o("p"),vg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),bg=l(),Kn=o("p"),kg=a("This model inherits from "),Ai=o("a"),Tg=a("PreTrainedModel"),wg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yg=l(),Jn=o("p"),$g=a("This model is also a PyTorch "),Gn=o("a"),Dg=a("torch.nn.Module"),Fg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bg=l(),We=o("div"),b(Xn.$$.fragment),Mg=l(),bs=o("p"),Eg=a("The "),Oi=o("a"),xg=a("DistilBertForTokenClassification"),zg=a(" forward method, overrides the "),rd=o("code"),jg=a("__call__"),Cg=a(" special method."),qg=l(),b(co.$$.fragment),Pg=l(),ad=o("p"),Ag=a("Example:"),Og=l(),b(Yn.$$.fragment),Ng=l(),b(Zn.$$.fragment),Lp=l(),ks=o("h2"),po=o("a"),id=o("span"),b(er.$$.fragment),Lg=l(),ld=o("span"),Sg=a("DistilBertForQuestionAnswering"),Sp=l(),et=o("div"),b(tr.$$.fragment),Ig=l(),Ts=o("p"),Wg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),Rg=a("span start logits"),Ug=a(" and "),cd=o("code"),Qg=a("span end logits"),Hg=a(")."),Vg=l(),sr=o("p"),Kg=a("This model inherits from "),Ni=o("a"),Jg=a("PreTrainedModel"),Gg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=l(),or=o("p"),Yg=a("This model is also a PyTorch "),nr=o("a"),Zg=a("torch.nn.Module"),e_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=l(),Re=o("div"),b(rr.$$.fragment),s_=l(),ws=o("p"),o_=a("The "),Li=o("a"),n_=a("DistilBertForQuestionAnswering"),r_=a(" forward method, overrides the "),pd=o("code"),a_=a("__call__"),i_=a(" special method."),l_=l(),b(ho.$$.fragment),d_=l(),hd=o("p"),c_=a("Example:"),p_=l(),b(ar.$$.fragment),h_=l(),b(ir.$$.fragment),Ip=l(),ys=o("h2"),uo=o("a"),ud=o("span"),b(lr.$$.fragment),u_=l(),fd=o("span"),f_=a("TFDistilBertModel"),Wp=l(),Pe=o("div"),b(dr.$$.fragment),m_=l(),md=o("p"),g_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),__=l(),cr=o("p"),v_=a("This model inherits from "),Si=o("a"),b_=a("TFPreTrainedModel"),k_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T_=l(),pr=o("p"),w_=a("This model is also a "),hr=o("a"),y_=a("tf.keras.Model"),$_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D_=l(),b(fo.$$.fragment),F_=l(),ot=o("div"),b(ur.$$.fragment),B_=l(),$s=o("p"),M_=a("The "),Ii=o("a"),E_=a("TFDistilBertModel"),x_=a(" forward method, overrides the "),gd=o("code"),z_=a("__call__"),j_=a(" special method."),C_=l(),b(mo.$$.fragment),q_=l(),_d=o("p"),P_=a("Example:"),A_=l(),b(fr.$$.fragment),Rp=l(),Ds=o("h2"),go=o("a"),vd=o("span"),b(mr.$$.fragment),O_=l(),bd=o("span"),N_=a("TFDistilBertForMaskedLM"),Up=l(),Ae=o("div"),b(gr.$$.fragment),L_=l(),_r=o("p"),S_=a("DistilBert Model with a "),kd=o("code"),I_=a("masked language modeling"),W_=a(" head on top."),R_=l(),vr=o("p"),U_=a("This model inherits from "),Wi=o("a"),Q_=a("TFPreTrainedModel"),H_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V_=l(),br=o("p"),K_=a("This model is also a "),kr=o("a"),J_=a("tf.keras.Model"),G_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=l(),b(_o.$$.fragment),Y_=l(),Ue=o("div"),b(Tr.$$.fragment),Z_=l(),Fs=o("p"),ev=a("The "),Ri=o("a"),tv=a("TFDistilBertForMaskedLM"),sv=a(" forward method, overrides the "),Td=o("code"),ov=a("__call__"),nv=a(" special method."),rv=l(),b(vo.$$.fragment),av=l(),wd=o("p"),iv=a("Example:"),lv=l(),b(wr.$$.fragment),dv=l(),b(yr.$$.fragment),Qp=l(),Bs=o("h2"),bo=o("a"),yd=o("span"),b($r.$$.fragment),cv=l(),$d=o("span"),pv=a("TFDistilBertForSequenceClassification"),Hp=l(),Oe=o("div"),b(Dr.$$.fragment),hv=l(),Dd=o("p"),uv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fv=l(),Fr=o("p"),mv=a("This model inherits from "),Ui=o("a"),gv=a("TFPreTrainedModel"),_v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=l(),Br=o("p"),bv=a("This model is also a "),Mr=o("a"),kv=a("tf.keras.Model"),Tv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=l(),b(ko.$$.fragment),yv=l(),Qe=o("div"),b(Er.$$.fragment),$v=l(),Ms=o("p"),Dv=a("The "),Qi=o("a"),Fv=a("TFDistilBertForSequenceClassification"),Bv=a(" forward method, overrides the "),Fd=o("code"),Mv=a("__call__"),Ev=a(" special method."),xv=l(),b(To.$$.fragment),zv=l(),Bd=o("p"),jv=a("Example:"),Cv=l(),b(xr.$$.fragment),qv=l(),b(zr.$$.fragment),Vp=l(),Es=o("h2"),wo=o("a"),Md=o("span"),b(jr.$$.fragment),Pv=l(),Ed=o("span"),Av=a("TFDistilBertForMultipleChoice"),Kp=l(),Ne=o("div"),b(Cr.$$.fragment),Ov=l(),xd=o("p"),Nv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lv=l(),qr=o("p"),Sv=a("This model inherits from "),Hi=o("a"),Iv=a("TFPreTrainedModel"),Wv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rv=l(),Pr=o("p"),Uv=a("This model is also a "),Ar=o("a"),Qv=a("tf.keras.Model"),Hv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vv=l(),b(yo.$$.fragment),Kv=l(),nt=o("div"),b(Or.$$.fragment),Jv=l(),xs=o("p"),Gv=a("The "),Vi=o("a"),Xv=a("TFDistilBertForMultipleChoice"),Yv=a(" forward method, overrides the "),zd=o("code"),Zv=a("__call__"),e1=a(" special method."),t1=l(),b($o.$$.fragment),s1=l(),jd=o("p"),o1=a("Example:"),n1=l(),b(Nr.$$.fragment),Jp=l(),zs=o("h2"),Do=o("a"),Cd=o("span"),b(Lr.$$.fragment),r1=l(),qd=o("span"),a1=a("TFDistilBertForTokenClassification"),Gp=l(),Le=o("div"),b(Sr.$$.fragment),i1=l(),Pd=o("p"),l1=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),d1=l(),Ir=o("p"),c1=a("This model inherits from "),Ki=o("a"),p1=a("TFPreTrainedModel"),h1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u1=l(),Wr=o("p"),f1=a("This model is also a "),Rr=o("a"),m1=a("tf.keras.Model"),g1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_1=l(),b(Fo.$$.fragment),v1=l(),He=o("div"),b(Ur.$$.fragment),b1=l(),js=o("p"),k1=a("The "),Ji=o("a"),T1=a("TFDistilBertForTokenClassification"),w1=a(" forward method, overrides the "),Ad=o("code"),y1=a("__call__"),$1=a(" special method."),D1=l(),b(Bo.$$.fragment),F1=l(),Od=o("p"),B1=a("Example:"),M1=l(),b(Qr.$$.fragment),E1=l(),b(Hr.$$.fragment),Xp=l(),Cs=o("h2"),Mo=o("a"),Nd=o("span"),b(Vr.$$.fragment),x1=l(),Ld=o("span"),z1=a("TFDistilBertForQuestionAnswering"),Yp=l(),Se=o("div"),b(Kr.$$.fragment),j1=l(),qs=o("p"),C1=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Sd=o("code"),q1=a("span start logits"),P1=a(" and "),Id=o("code"),A1=a("span end logits"),O1=a(")."),N1=l(),Jr=o("p"),L1=a("This model inherits from "),Gi=o("a"),S1=a("TFPreTrainedModel"),I1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W1=l(),Gr=o("p"),R1=a("This model is also a "),Xr=o("a"),U1=a("tf.keras.Model"),Q1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H1=l(),b(Eo.$$.fragment),V1=l(),Ve=o("div"),b(Yr.$$.fragment),K1=l(),Ps=o("p"),J1=a("The "),Xi=o("a"),G1=a("TFDistilBertForQuestionAnswering"),X1=a(" forward method, overrides the "),Wd=o("code"),Y1=a("__call__"),Z1=a(" special method."),eb=l(),b(xo.$$.fragment),tb=l(),Rd=o("p"),sb=a("Example:"),ob=l(),b(Zr.$$.fragment),nb=l(),b(ea.$$.fragment),Zp=l(),As=o("h2"),zo=o("a"),Ud=o("span"),b(ta.$$.fragment),rb=l(),Qd=o("span"),ab=a("FlaxDistilBertModel"),eh=l(),Me=o("div"),b(sa.$$.fragment),ib=l(),Hd=o("p"),lb=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),db=l(),oa=o("p"),cb=a("This model inherits from "),Yi=o("a"),pb=a("FlaxPreTrainedModel"),hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ub=l(),na=o("p"),fb=a("This model is also a Flax Linen "),ra=o("a"),mb=a("flax.linen.Module"),gb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_b=l(),Vd=o("p"),vb=a("Finally, this model supports inherent JAX features such as:"),bb=l(),qt=o("ul"),Kd=o("li"),aa=o("a"),kb=a("Just-In-Time (JIT) compilation"),Tb=l(),Jd=o("li"),ia=o("a"),wb=a("Automatic Differentiation"),yb=l(),Gd=o("li"),la=o("a"),$b=a("Vectorization"),Db=l(),Xd=o("li"),da=o("a"),Fb=a("Parallelization"),Bb=l(),rt=o("div"),b(ca.$$.fragment),Mb=l(),Os=o("p"),Eb=a("The "),Yd=o("code"),xb=a("FlaxDistilBertPreTrainedModel"),zb=a("forward method, overrides the "),Zd=o("code"),jb=a("__call__"),Cb=a(" special method."),qb=l(),b(jo.$$.fragment),Pb=l(),ec=o("p"),Ab=a("Example:"),Ob=l(),b(pa.$$.fragment),th=l(),Ns=o("h2"),Co=o("a"),tc=o("span"),b(ha.$$.fragment),Nb=l(),sc=o("span"),Lb=a("FlaxDistilBertForMaskedLM"),sh=l(),Ee=o("div"),b(ua.$$.fragment),Sb=l(),fa=o("p"),Ib=a("DistilBert Model with a "),oc=o("code"),Wb=a("language modeling"),Rb=a(" head on top."),Ub=l(),ma=o("p"),Qb=a("This model inherits from "),Zi=o("a"),Hb=a("FlaxPreTrainedModel"),Vb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kb=l(),ga=o("p"),Jb=a("This model is also a Flax Linen "),_a=o("a"),Gb=a("flax.linen.Module"),Xb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yb=l(),nc=o("p"),Zb=a("Finally, this model supports inherent JAX features such as:"),ek=l(),Pt=o("ul"),rc=o("li"),va=o("a"),tk=a("Just-In-Time (JIT) compilation"),sk=l(),ac=o("li"),ba=o("a"),ok=a("Automatic Differentiation"),nk=l(),ic=o("li"),ka=o("a"),rk=a("Vectorization"),ak=l(),lc=o("li"),Ta=o("a"),ik=a("Parallelization"),lk=l(),at=o("div"),b(wa.$$.fragment),dk=l(),Ls=o("p"),ck=a("The "),dc=o("code"),pk=a("FlaxDistilBertPreTrainedModel"),hk=a("forward method, overrides the "),cc=o("code"),uk=a("__call__"),fk=a(" special method."),mk=l(),b(qo.$$.fragment),gk=l(),pc=o("p"),_k=a("Example:"),vk=l(),b(ya.$$.fragment),oh=l(),Ss=o("h2"),Po=o("a"),hc=o("span"),b($a.$$.fragment),bk=l(),uc=o("span"),kk=a("FlaxDistilBertForSequenceClassification"),nh=l(),xe=o("div"),b(Da.$$.fragment),Tk=l(),fc=o("p"),wk=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yk=l(),Fa=o("p"),$k=a("This model inherits from "),el=o("a"),Dk=a("FlaxPreTrainedModel"),Fk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bk=l(),Ba=o("p"),Mk=a("This model is also a Flax Linen "),Ma=o("a"),Ek=a("flax.linen.Module"),xk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zk=l(),mc=o("p"),jk=a("Finally, this model supports inherent JAX features such as:"),Ck=l(),At=o("ul"),gc=o("li"),Ea=o("a"),qk=a("Just-In-Time (JIT) compilation"),Pk=l(),_c=o("li"),xa=o("a"),Ak=a("Automatic Differentiation"),Ok=l(),vc=o("li"),za=o("a"),Nk=a("Vectorization"),Lk=l(),bc=o("li"),ja=o("a"),Sk=a("Parallelization"),Ik=l(),it=o("div"),b(Ca.$$.fragment),Wk=l(),Is=o("p"),Rk=a("The "),kc=o("code"),Uk=a("FlaxDistilBertPreTrainedModel"),Qk=a("forward method, overrides the "),Tc=o("code"),Hk=a("__call__"),Vk=a(" special method."),Kk=l(),b(Ao.$$.fragment),Jk=l(),wc=o("p"),Gk=a("Example:"),Xk=l(),b(qa.$$.fragment),rh=l(),Ws=o("h2"),Oo=o("a"),yc=o("span"),b(Pa.$$.fragment),Yk=l(),$c=o("span"),Zk=a("FlaxDistilBertForMultipleChoice"),ah=l(),ze=o("div"),b(Aa.$$.fragment),eT=l(),Dc=o("p"),tT=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sT=l(),Oa=o("p"),oT=a("This model inherits from "),tl=o("a"),nT=a("FlaxPreTrainedModel"),rT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),aT=l(),Na=o("p"),iT=a("This model is also a Flax Linen "),La=o("a"),lT=a("flax.linen.Module"),dT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cT=l(),Fc=o("p"),pT=a("Finally, this model supports inherent JAX features such as:"),hT=l(),Ot=o("ul"),Bc=o("li"),Sa=o("a"),uT=a("Just-In-Time (JIT) compilation"),fT=l(),Mc=o("li"),Ia=o("a"),mT=a("Automatic Differentiation"),gT=l(),Ec=o("li"),Wa=o("a"),_T=a("Vectorization"),vT=l(),xc=o("li"),Ra=o("a"),bT=a("Parallelization"),kT=l(),lt=o("div"),b(Ua.$$.fragment),TT=l(),Rs=o("p"),wT=a("The "),zc=o("code"),yT=a("FlaxDistilBertPreTrainedModel"),$T=a("forward method, overrides the "),jc=o("code"),DT=a("__call__"),FT=a(" special method."),BT=l(),b(No.$$.fragment),MT=l(),Cc=o("p"),ET=a("Example:"),xT=l(),b(Qa.$$.fragment),ih=l(),Us=o("h2"),Lo=o("a"),qc=o("span"),b(Ha.$$.fragment),zT=l(),Pc=o("span"),jT=a("FlaxDistilBertForTokenClassification"),lh=l(),je=o("div"),b(Va.$$.fragment),CT=l(),Ac=o("p"),qT=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),PT=l(),Ka=o("p"),AT=a("This model inherits from "),sl=o("a"),OT=a("FlaxPreTrainedModel"),NT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),LT=l(),Ja=o("p"),ST=a("This model is also a Flax Linen "),Ga=o("a"),IT=a("flax.linen.Module"),WT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RT=l(),Oc=o("p"),UT=a("Finally, this model supports inherent JAX features such as:"),QT=l(),Nt=o("ul"),Nc=o("li"),Xa=o("a"),HT=a("Just-In-Time (JIT) compilation"),VT=l(),Lc=o("li"),Ya=o("a"),KT=a("Automatic Differentiation"),JT=l(),Sc=o("li"),Za=o("a"),GT=a("Vectorization"),XT=l(),Ic=o("li"),ei=o("a"),YT=a("Parallelization"),ZT=l(),dt=o("div"),b(ti.$$.fragment),ew=l(),Qs=o("p"),tw=a("The "),Wc=o("code"),sw=a("FlaxDistilBertPreTrainedModel"),ow=a("forward method, overrides the "),Rc=o("code"),nw=a("__call__"),rw=a(" special method."),aw=l(),b(So.$$.fragment),iw=l(),Uc=o("p"),lw=a("Example:"),dw=l(),b(si.$$.fragment),dh=l(),Hs=o("h2"),Io=o("a"),Qc=o("span"),b(oi.$$.fragment),cw=l(),Hc=o("span"),pw=a("FlaxDistilBertForQuestionAnswering"),ch=l(),Ce=o("div"),b(ni.$$.fragment),hw=l(),Vs=o("p"),uw=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=o("code"),fw=a("span start logits"),mw=a(" and "),Kc=o("code"),gw=a("span end logits"),_w=a(")."),vw=l(),ri=o("p"),bw=a("This model inherits from "),ol=o("a"),kw=a("FlaxPreTrainedModel"),Tw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ww=l(),ai=o("p"),yw=a("This model is also a Flax Linen "),ii=o("a"),$w=a("flax.linen.Module"),Dw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fw=l(),Jc=o("p"),Bw=a("Finally, this model supports inherent JAX features such as:"),Mw=l(),Lt=o("ul"),Gc=o("li"),li=o("a"),Ew=a("Just-In-Time (JIT) compilation"),xw=l(),Xc=o("li"),di=o("a"),zw=a("Automatic Differentiation"),jw=l(),Yc=o("li"),ci=o("a"),Cw=a("Vectorization"),qw=l(),Zc=o("li"),pi=o("a"),Pw=a("Parallelization"),Aw=l(),ct=o("div"),b(hi.$$.fragment),Ow=l(),Ks=o("p"),Nw=a("The "),ep=o("code"),Lw=a("FlaxDistilBertPreTrainedModel"),Sw=a("forward method, overrides the "),tp=o("code"),Iw=a("__call__"),Ww=a(" special method."),Rw=l(),b(Wo.$$.fragment),Uw=l(),sp=o("p"),Qw=a("Example:"),Hw=l(),b(ui.$$.fragment),this.h()},l(s){const m=FF('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(s),g=n(s,"H1",{class:!0});var fi=r(g);v=n(fi,"A",{id:!0,class:!0,href:!0});var op=r(v);D=n(op,"SPAN",{});var np=r(D);k(_.$$.fragment,np),np.forEach(t),op.forEach(t),f=d(fi),B=n(fi,"SPAN",{});var rp=r(B);ce=i(rp,"DistilBERT"),rp.forEach(t),fi.forEach(t),V=d(s),E=n(s,"H2",{class:!0});var mi=r(E);G=n(mi,"A",{id:!0,class:!0,href:!0});var ap=r(G);S=n(ap,"SPAN",{});var ip=r(S);k(X.$$.fragment,ip),ip.forEach(t),ap.forEach(t),pe=d(mi),I=n(mi,"SPAN",{});var lp=r(I);he=i(lp,"Overview"),lp.forEach(t),mi.forEach(t),ae=d(s),N=n(s,"P",{});var St=r(N);P=i(St,"The DistilBERT model was proposed in the blog post "),Y=n(St,"A",{href:!0,rel:!0});var dp=r(Y);K=i(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),x=i(St,", and the paper "),z=n(St,"A",{href:!0,rel:!0});var cp=r(z);ue=i(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),W=i(St,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(St,"EM",{});var pp=r(se);fe=i(pp,"bert-base-uncased"),pp.forEach(t),R=i(St,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),St.forEach(t),ie=d(s),ee=n(s,"P",{});var hp=r(ee);A=i(hp,"The abstract from the paper is the following:"),hp.forEach(t),le=d(s),L=n(s,"P",{});var up=r(L);oe=n(up,"EM",{});var fp=r(oe);me=i(fp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),fp.forEach(t),up.forEach(t),q=d(s),te=n(s,"P",{});var mp=r(te);U=i(mp,"Tips:"),mp.forEach(t),de=d(s),h=n(s,"UL",{});var gi=r(h);M=n(gi,"LI",{});var It=r(M);J=i(It,"DistilBERT doesn\u2019t have "),_e=n(It,"CODE",{});var gp=r(_e);Te=i(gp,"token_type_ids"),gp.forEach(t),O=i(It,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(It,"CODE",{});var _p=r(ve);we=i(_p,"tokenizer.sep_token"),_p.forEach(t),ye=i(It," (or "),C=n(It,"CODE",{});var vp=r(C);Q=i(vp,"[SEP]"),vp.forEach(t),$e=i(It,")."),It.forEach(t),De=d(gi),Z=n(gi,"LI",{});var _i=r(Z);Fe=i(_i,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(_i,"CODE",{});var bp=r(ne);Be=i(bp,"position_ids"),bp.forEach(t),Tu=i(_i,` input). This could be added if
necessary though, just let us know if you need this option.`),_i.forEach(t),gi.forEach(t),wp=d(s),bt=n(s,"P",{});var Wt=r(bt);wu=i(Wt,"This model was contributed by "),Yo=n(Wt,"A",{href:!0,rel:!0});var Vw=r(Yo);yu=i(Vw,"victorsanh"),Vw.forEach(t),$u=i(Wt,`. This model jax version was
contributed by `),Zo=n(Wt,"A",{href:!0,rel:!0});var Kw=r(Zo);Du=i(Kw,"kamalkraj"),Kw.forEach(t),Fu=i(Wt,". The original code can be found "),en=n(Wt,"A",{href:!0,rel:!0});var Jw=r(en);Bu=i(Jw,"here"),Jw.forEach(t),Mu=i(Wt,"."),Wt.forEach(t),yp=d(s),as=n(s,"H2",{class:!0});var hh=r(as);Js=n(hh,"A",{id:!0,class:!0,href:!0});var Gw=r(Js);Fl=n(Gw,"SPAN",{});var Xw=r(Fl);k(tn.$$.fragment,Xw),Xw.forEach(t),Gw.forEach(t),Eu=d(hh),Bl=n(hh,"SPAN",{});var Yw=r(Bl);xu=i(Yw,"DistilBertConfig"),Yw.forEach(t),hh.forEach(t),$p=d(s),Ke=n(s,"DIV",{class:!0});var Rt=r(Ke);k(sn.$$.fragment,Rt),zu=d(Rt),Ct=n(Rt,"P",{});var Ro=r(Ct);ju=i(Ro,"This is the configuration class to store the configuration of a "),vi=n(Ro,"A",{href:!0});var Zw=r(vi);Cu=i(Zw,"DistilBertModel"),Zw.forEach(t),qu=i(Ro," or a "),bi=n(Ro,"A",{href:!0});var e2=r(bi);Pu=i(e2,"TFDistilBertModel"),e2.forEach(t),Au=i(Ro,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=n(Ro,"A",{href:!0,rel:!0});var t2=r(on);Ou=i(t2,"distilbert-base-uncased"),t2.forEach(t),Nu=i(Ro," architecture."),Ro.forEach(t),Lu=d(Rt),is=n(Rt,"P",{});var nl=r(is);Su=i(nl,"Configuration objects inherit from "),ki=n(nl,"A",{href:!0});var s2=r(ki);Iu=i(s2,"PretrainedConfig"),s2.forEach(t),Wu=i(nl,` and can be used to control the model outputs. Read the
documentation from `),Ti=n(nl,"A",{href:!0});var o2=r(Ti);Ru=i(o2,"PretrainedConfig"),o2.forEach(t),Uu=i(nl," for more information."),nl.forEach(t),Qu=d(Rt),Ml=n(Rt,"P",{});var n2=r(Ml);Hu=i(n2,"Examples:"),n2.forEach(t),Vu=d(Rt),k(nn.$$.fragment,Rt),Rt.forEach(t),Dp=d(s),ls=n(s,"H2",{class:!0});var uh=r(ls);Gs=n(uh,"A",{id:!0,class:!0,href:!0});var r2=r(Gs);El=n(r2,"SPAN",{});var a2=r(El);k(rn.$$.fragment,a2),a2.forEach(t),r2.forEach(t),Ku=d(uh),xl=n(uh,"SPAN",{});var i2=r(xl);Ju=i(i2,"DistilBertTokenizer"),i2.forEach(t),uh.forEach(t),Fp=d(s),_t=n(s,"DIV",{class:!0});var Uo=r(_t);k(an.$$.fragment,Uo),Gu=d(Uo),zl=n(Uo,"P",{});var l2=r(zl);Xu=i(l2,"Construct a DistilBERT tokenizer."),l2.forEach(t),Yu=d(Uo),Xs=n(Uo,"P",{});var kp=r(Xs);wi=n(kp,"A",{href:!0});var d2=r(wi);Zu=i(d2,"DistilBertTokenizer"),d2.forEach(t),ef=i(kp," is identical to "),yi=n(kp,"A",{href:!0});var c2=r(yi);tf=i(c2,"BertTokenizer"),c2.forEach(t),sf=i(kp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),kp.forEach(t),of=d(Uo),ln=n(Uo,"P",{});var fh=r(ln);nf=i(fh,"Refer to superclass "),$i=n(fh,"A",{href:!0});var p2=r($i);rf=i(p2,"BertTokenizer"),p2.forEach(t),af=i(fh," for usage examples and documentation concerning parameters."),fh.forEach(t),Uo.forEach(t),Bp=d(s),ds=n(s,"H2",{class:!0});var mh=r(ds);Ys=n(mh,"A",{id:!0,class:!0,href:!0});var h2=r(Ys);jl=n(h2,"SPAN",{});var u2=r(jl);k(dn.$$.fragment,u2),u2.forEach(t),h2.forEach(t),lf=d(mh),Cl=n(mh,"SPAN",{});var f2=r(Cl);df=i(f2,"DistilBertTokenizerFast"),f2.forEach(t),mh.forEach(t),Mp=d(s),vt=n(s,"DIV",{class:!0});var Qo=r(vt);k(cn.$$.fragment,Qo),cf=d(Qo),pn=n(Qo,"P",{});var gh=r(pn);pf=i(gh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),ql=n(gh,"EM",{});var m2=r(ql);hf=i(m2,"tokenizers"),m2.forEach(t),uf=i(gh," library)."),gh.forEach(t),ff=d(Qo),Zs=n(Qo,"P",{});var Tp=r(Zs);Di=n(Tp,"A",{href:!0});var g2=r(Di);mf=i(g2,"DistilBertTokenizerFast"),g2.forEach(t),gf=i(Tp," is identical to "),Fi=n(Tp,"A",{href:!0});var _2=r(Fi);_f=i(_2,"BertTokenizerFast"),_2.forEach(t),vf=i(Tp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Tp.forEach(t),bf=d(Qo),hn=n(Qo,"P",{});var _h=r(hn);kf=i(_h,"Refer to superclass "),Bi=n(_h,"A",{href:!0});var v2=r(Bi);Tf=i(v2,"BertTokenizerFast"),v2.forEach(t),wf=i(_h," for usage examples and documentation concerning parameters."),_h.forEach(t),Qo.forEach(t),Ep=d(s),cs=n(s,"H2",{class:!0});var vh=r(cs);eo=n(vh,"A",{id:!0,class:!0,href:!0});var b2=r(eo);Pl=n(b2,"SPAN",{});var k2=r(Pl);k(un.$$.fragment,k2),k2.forEach(t),b2.forEach(t),yf=d(vh),Al=n(vh,"SPAN",{});var T2=r(Al);$f=i(T2,"DistilBertModel"),T2.forEach(t),vh.forEach(t),xp=d(s),Je=n(s,"DIV",{class:!0});var Ut=r(Je);k(fn.$$.fragment,Ut),Df=d(Ut),Ol=n(Ut,"P",{});var w2=r(Ol);Ff=i(w2,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),w2.forEach(t),Bf=d(Ut),mn=n(Ut,"P",{});var bh=r(mn);Mf=i(bh,"This model inherits from "),Mi=n(bh,"A",{href:!0});var y2=r(Mi);Ef=i(y2,"PreTrainedModel"),y2.forEach(t),xf=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),zf=d(Ut),gn=n(Ut,"P",{});var kh=r(gn);jf=i(kh,"This model is also a PyTorch "),_n=n(kh,"A",{href:!0,rel:!0});var $2=r(_n);Cf=i($2,"torch.nn.Module"),$2.forEach(t),qf=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),Pf=d(Ut),tt=n(Ut,"DIV",{class:!0});var Qt=r(tt);k(vn.$$.fragment,Qt),Af=d(Qt),ps=n(Qt,"P",{});var rl=r(ps);Of=i(rl,"The "),Ei=n(rl,"A",{href:!0});var D2=r(Ei);Nf=i(D2,"DistilBertModel"),D2.forEach(t),Lf=i(rl," forward method, overrides the "),Nl=n(rl,"CODE",{});var F2=r(Nl);Sf=i(F2,"__call__"),F2.forEach(t),If=i(rl," special method."),rl.forEach(t),Wf=d(Qt),k(to.$$.fragment,Qt),Rf=d(Qt),Ll=n(Qt,"P",{});var B2=r(Ll);Uf=i(B2,"Example:"),B2.forEach(t),Qf=d(Qt),k(bn.$$.fragment,Qt),Qt.forEach(t),Ut.forEach(t),zp=d(s),hs=n(s,"H2",{class:!0});var Th=r(hs);so=n(Th,"A",{id:!0,class:!0,href:!0});var M2=r(so);Sl=n(M2,"SPAN",{});var E2=r(Sl);k(kn.$$.fragment,E2),E2.forEach(t),M2.forEach(t),Hf=d(Th),Il=n(Th,"SPAN",{});var x2=r(Il);Vf=i(x2,"DistilBertForMaskedLM"),x2.forEach(t),Th.forEach(t),jp=d(s),Ge=n(s,"DIV",{class:!0});var Ht=r(Ge);k(Tn.$$.fragment,Ht),Kf=d(Ht),wn=n(Ht,"P",{});var wh=r(wn);Jf=i(wh,"DistilBert Model with a "),Wl=n(wh,"CODE",{});var z2=r(Wl);Gf=i(z2,"masked language modeling"),z2.forEach(t),Xf=i(wh," head on top."),wh.forEach(t),Yf=d(Ht),yn=n(Ht,"P",{});var yh=r(yn);Zf=i(yh,"This model inherits from "),xi=n(yh,"A",{href:!0});var j2=r(xi);em=i(j2,"PreTrainedModel"),j2.forEach(t),tm=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),sm=d(Ht),$n=n(Ht,"P",{});var $h=r($n);om=i($h,"This model is also a PyTorch "),Dn=n($h,"A",{href:!0,rel:!0});var C2=r(Dn);nm=i(C2,"torch.nn.Module"),C2.forEach(t),rm=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),am=d(Ht),Ie=n(Ht,"DIV",{class:!0});var kt=r(Ie);k(Fn.$$.fragment,kt),im=d(kt),us=n(kt,"P",{});var al=r(us);lm=i(al,"The "),zi=n(al,"A",{href:!0});var q2=r(zi);dm=i(q2,"DistilBertForMaskedLM"),q2.forEach(t),cm=i(al," forward method, overrides the "),Rl=n(al,"CODE",{});var P2=r(Rl);pm=i(P2,"__call__"),P2.forEach(t),hm=i(al," special method."),al.forEach(t),um=d(kt),k(oo.$$.fragment,kt),fm=d(kt),Ul=n(kt,"P",{});var A2=r(Ul);mm=i(A2,"Example:"),A2.forEach(t),gm=d(kt),k(Bn.$$.fragment,kt),_m=d(kt),k(Mn.$$.fragment,kt),kt.forEach(t),Ht.forEach(t),Cp=d(s),fs=n(s,"H2",{class:!0});var Dh=r(fs);no=n(Dh,"A",{id:!0,class:!0,href:!0});var O2=r(no);Ql=n(O2,"SPAN",{});var N2=r(Ql);k(En.$$.fragment,N2),N2.forEach(t),O2.forEach(t),vm=d(Dh),Hl=n(Dh,"SPAN",{});var L2=r(Hl);bm=i(L2,"DistilBertForSequenceClassification"),L2.forEach(t),Dh.forEach(t),qp=d(s),Xe=n(s,"DIV",{class:!0});var Vt=r(Xe);k(xn.$$.fragment,Vt),km=d(Vt),Vl=n(Vt,"P",{});var S2=r(Vl);Tm=i(S2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S2.forEach(t),wm=d(Vt),zn=n(Vt,"P",{});var Fh=r(zn);ym=i(Fh,"This model inherits from "),ji=n(Fh,"A",{href:!0});var I2=r(ji);$m=i(I2,"PreTrainedModel"),I2.forEach(t),Dm=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),Fm=d(Vt),jn=n(Vt,"P",{});var Bh=r(jn);Bm=i(Bh,"This model is also a PyTorch "),Cn=n(Bh,"A",{href:!0,rel:!0});var W2=r(Cn);Mm=i(W2,"torch.nn.Module"),W2.forEach(t),Em=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),xm=d(Vt),ke=n(Vt,"DIV",{class:!0});var qe=r(ke);k(qn.$$.fragment,qe),zm=d(qe),ms=n(qe,"P",{});var il=r(ms);jm=i(il,"The "),Ci=n(il,"A",{href:!0});var R2=r(Ci);Cm=i(R2,"DistilBertForSequenceClassification"),R2.forEach(t),qm=i(il," forward method, overrides the "),Kl=n(il,"CODE",{});var U2=r(Kl);Pm=i(U2,"__call__"),U2.forEach(t),Am=i(il," special method."),il.forEach(t),Om=d(qe),k(ro.$$.fragment,qe),Nm=d(qe),Jl=n(qe,"P",{});var Q2=r(Jl);Lm=i(Q2,"Example of single-label classification:"),Q2.forEach(t),Sm=d(qe),k(Pn.$$.fragment,qe),Im=d(qe),k(An.$$.fragment,qe),Wm=d(qe),Gl=n(qe,"P",{});var H2=r(Gl);Rm=i(H2,"Example of multi-label classification:"),H2.forEach(t),Um=d(qe),k(On.$$.fragment,qe),Qm=d(qe),k(Nn.$$.fragment,qe),qe.forEach(t),Vt.forEach(t),Pp=d(s),gs=n(s,"H2",{class:!0});var Mh=r(gs);ao=n(Mh,"A",{id:!0,class:!0,href:!0});var V2=r(ao);Xl=n(V2,"SPAN",{});var K2=r(Xl);k(Ln.$$.fragment,K2),K2.forEach(t),V2.forEach(t),Hm=d(Mh),Yl=n(Mh,"SPAN",{});var J2=r(Yl);Vm=i(J2,"DistilBertForMultipleChoice"),J2.forEach(t),Mh.forEach(t),Ap=d(s),Ye=n(s,"DIV",{class:!0});var Kt=r(Ye);k(Sn.$$.fragment,Kt),Km=d(Kt),Zl=n(Kt,"P",{});var G2=r(Zl);Jm=i(G2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),G2.forEach(t),Gm=d(Kt),In=n(Kt,"P",{});var Eh=r(In);Xm=i(Eh,"This model inherits from "),qi=n(Eh,"A",{href:!0});var X2=r(qi);Ym=i(X2,"PreTrainedModel"),X2.forEach(t),Zm=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),eg=d(Kt),Wn=n(Kt,"P",{});var xh=r(Wn);tg=i(xh,"This model is also a PyTorch "),Rn=n(xh,"A",{href:!0,rel:!0});var Y2=r(Rn);sg=i(Y2,"torch.nn.Module"),Y2.forEach(t),og=i(xh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh.forEach(t),ng=d(Kt),st=n(Kt,"DIV",{class:!0});var Jt=r(st);k(Un.$$.fragment,Jt),rg=d(Jt),_s=n(Jt,"P",{});var ll=r(_s);ag=i(ll,"The "),Pi=n(ll,"A",{href:!0});var Z2=r(Pi);ig=i(Z2,"DistilBertForMultipleChoice"),Z2.forEach(t),lg=i(ll," forward method, overrides the "),ed=n(ll,"CODE",{});var ey=r(ed);dg=i(ey,"__call__"),ey.forEach(t),cg=i(ll," special method."),ll.forEach(t),pg=d(Jt),k(io.$$.fragment,Jt),hg=d(Jt),td=n(Jt,"P",{});var ty=r(td);ug=i(ty,"Examples:"),ty.forEach(t),fg=d(Jt),k(Qn.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Op=d(s),vs=n(s,"H2",{class:!0});var zh=r(vs);lo=n(zh,"A",{id:!0,class:!0,href:!0});var sy=r(lo);sd=n(sy,"SPAN",{});var oy=r(sd);k(Hn.$$.fragment,oy),oy.forEach(t),sy.forEach(t),mg=d(zh),od=n(zh,"SPAN",{});var ny=r(od);gg=i(ny,"DistilBertForTokenClassification"),ny.forEach(t),zh.forEach(t),Np=d(s),Ze=n(s,"DIV",{class:!0});var Gt=r(Ze);k(Vn.$$.fragment,Gt),_g=d(Gt),nd=n(Gt,"P",{});var ry=r(nd);vg=i(ry,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ry.forEach(t),bg=d(Gt),Kn=n(Gt,"P",{});var jh=r(Kn);kg=i(jh,"This model inherits from "),Ai=n(jh,"A",{href:!0});var ay=r(Ai);Tg=i(ay,"PreTrainedModel"),ay.forEach(t),wg=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),yg=d(Gt),Jn=n(Gt,"P",{});var Ch=r(Jn);$g=i(Ch,"This model is also a PyTorch "),Gn=n(Ch,"A",{href:!0,rel:!0});var iy=r(Gn);Dg=i(iy,"torch.nn.Module"),iy.forEach(t),Fg=i(Ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ch.forEach(t),Bg=d(Gt),We=n(Gt,"DIV",{class:!0});var Tt=r(We);k(Xn.$$.fragment,Tt),Mg=d(Tt),bs=n(Tt,"P",{});var dl=r(bs);Eg=i(dl,"The "),Oi=n(dl,"A",{href:!0});var ly=r(Oi);xg=i(ly,"DistilBertForTokenClassification"),ly.forEach(t),zg=i(dl," forward method, overrides the "),rd=n(dl,"CODE",{});var dy=r(rd);jg=i(dy,"__call__"),dy.forEach(t),Cg=i(dl," special method."),dl.forEach(t),qg=d(Tt),k(co.$$.fragment,Tt),Pg=d(Tt),ad=n(Tt,"P",{});var cy=r(ad);Ag=i(cy,"Example:"),cy.forEach(t),Og=d(Tt),k(Yn.$$.fragment,Tt),Ng=d(Tt),k(Zn.$$.fragment,Tt),Tt.forEach(t),Gt.forEach(t),Lp=d(s),ks=n(s,"H2",{class:!0});var qh=r(ks);po=n(qh,"A",{id:!0,class:!0,href:!0});var py=r(po);id=n(py,"SPAN",{});var hy=r(id);k(er.$$.fragment,hy),hy.forEach(t),py.forEach(t),Lg=d(qh),ld=n(qh,"SPAN",{});var uy=r(ld);Sg=i(uy,"DistilBertForQuestionAnswering"),uy.forEach(t),qh.forEach(t),Sp=d(s),et=n(s,"DIV",{class:!0});var Xt=r(et);k(tr.$$.fragment,Xt),Ig=d(Xt),Ts=n(Xt,"P",{});var cl=r(Ts);Wg=i(cl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(cl,"CODE",{});var fy=r(dd);Rg=i(fy,"span start logits"),fy.forEach(t),Ug=i(cl," and "),cd=n(cl,"CODE",{});var my=r(cd);Qg=i(my,"span end logits"),my.forEach(t),Hg=i(cl,")."),cl.forEach(t),Vg=d(Xt),sr=n(Xt,"P",{});var Ph=r(sr);Kg=i(Ph,"This model inherits from "),Ni=n(Ph,"A",{href:!0});var gy=r(Ni);Jg=i(gy,"PreTrainedModel"),gy.forEach(t),Gg=i(Ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ph.forEach(t),Xg=d(Xt),or=n(Xt,"P",{});var Ah=r(or);Yg=i(Ah,"This model is also a PyTorch "),nr=n(Ah,"A",{href:!0,rel:!0});var _y=r(nr);Zg=i(_y,"torch.nn.Module"),_y.forEach(t),e_=i(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),t_=d(Xt),Re=n(Xt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),s_=d(wt),ws=n(wt,"P",{});var pl=r(ws);o_=i(pl,"The "),Li=n(pl,"A",{href:!0});var vy=r(Li);n_=i(vy,"DistilBertForQuestionAnswering"),vy.forEach(t),r_=i(pl," forward method, overrides the "),pd=n(pl,"CODE",{});var by=r(pd);a_=i(by,"__call__"),by.forEach(t),i_=i(pl," special method."),pl.forEach(t),l_=d(wt),k(ho.$$.fragment,wt),d_=d(wt),hd=n(wt,"P",{});var ky=r(hd);c_=i(ky,"Example:"),ky.forEach(t),p_=d(wt),k(ar.$$.fragment,wt),h_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Xt.forEach(t),Ip=d(s),ys=n(s,"H2",{class:!0});var Oh=r(ys);uo=n(Oh,"A",{id:!0,class:!0,href:!0});var Ty=r(uo);ud=n(Ty,"SPAN",{});var wy=r(ud);k(lr.$$.fragment,wy),wy.forEach(t),Ty.forEach(t),u_=d(Oh),fd=n(Oh,"SPAN",{});var yy=r(fd);f_=i(yy,"TFDistilBertModel"),yy.forEach(t),Oh.forEach(t),Wp=d(s),Pe=n(s,"DIV",{class:!0});var yt=r(Pe);k(dr.$$.fragment,yt),m_=d(yt),md=n(yt,"P",{});var $y=r(md);g_=i($y,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),$y.forEach(t),__=d(yt),cr=n(yt,"P",{});var Nh=r(cr);v_=i(Nh,"This model inherits from "),Si=n(Nh,"A",{href:!0});var Dy=r(Si);b_=i(Dy,"TFPreTrainedModel"),Dy.forEach(t),k_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),T_=d(yt),pr=n(yt,"P",{});var Lh=r(pr);w_=i(Lh,"This model is also a "),hr=n(Lh,"A",{href:!0,rel:!0});var Fy=r(hr);y_=i(Fy,"tf.keras.Model"),Fy.forEach(t),$_=i(Lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lh.forEach(t),D_=d(yt),k(fo.$$.fragment,yt),F_=d(yt),ot=n(yt,"DIV",{class:!0});var Yt=r(ot);k(ur.$$.fragment,Yt),B_=d(Yt),$s=n(Yt,"P",{});var hl=r($s);M_=i(hl,"The "),Ii=n(hl,"A",{href:!0});var By=r(Ii);E_=i(By,"TFDistilBertModel"),By.forEach(t),x_=i(hl," forward method, overrides the "),gd=n(hl,"CODE",{});var My=r(gd);z_=i(My,"__call__"),My.forEach(t),j_=i(hl," special method."),hl.forEach(t),C_=d(Yt),k(mo.$$.fragment,Yt),q_=d(Yt),_d=n(Yt,"P",{});var Ey=r(_d);P_=i(Ey,"Example:"),Ey.forEach(t),A_=d(Yt),k(fr.$$.fragment,Yt),Yt.forEach(t),yt.forEach(t),Rp=d(s),Ds=n(s,"H2",{class:!0});var Sh=r(Ds);go=n(Sh,"A",{id:!0,class:!0,href:!0});var xy=r(go);vd=n(xy,"SPAN",{});var zy=r(vd);k(mr.$$.fragment,zy),zy.forEach(t),xy.forEach(t),O_=d(Sh),bd=n(Sh,"SPAN",{});var jy=r(bd);N_=i(jy,"TFDistilBertForMaskedLM"),jy.forEach(t),Sh.forEach(t),Up=d(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),L_=d($t),_r=n($t,"P",{});var Ih=r(_r);S_=i(Ih,"DistilBert Model with a "),kd=n(Ih,"CODE",{});var Cy=r(kd);I_=i(Cy,"masked language modeling"),Cy.forEach(t),W_=i(Ih," head on top."),Ih.forEach(t),R_=d($t),vr=n($t,"P",{});var Wh=r(vr);U_=i(Wh,"This model inherits from "),Wi=n(Wh,"A",{href:!0});var qy=r(Wi);Q_=i(qy,"TFPreTrainedModel"),qy.forEach(t),H_=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),V_=d($t),br=n($t,"P",{});var Rh=r(br);K_=i(Rh,"This model is also a "),kr=n(Rh,"A",{href:!0,rel:!0});var Py=r(kr);J_=i(Py,"tf.keras.Model"),Py.forEach(t),G_=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),X_=d($t),k(_o.$$.fragment,$t),Y_=d($t),Ue=n($t,"DIV",{class:!0});var Dt=r(Ue);k(Tr.$$.fragment,Dt),Z_=d(Dt),Fs=n(Dt,"P",{});var ul=r(Fs);ev=i(ul,"The "),Ri=n(ul,"A",{href:!0});var Ay=r(Ri);tv=i(Ay,"TFDistilBertForMaskedLM"),Ay.forEach(t),sv=i(ul," forward method, overrides the "),Td=n(ul,"CODE",{});var Oy=r(Td);ov=i(Oy,"__call__"),Oy.forEach(t),nv=i(ul," special method."),ul.forEach(t),rv=d(Dt),k(vo.$$.fragment,Dt),av=d(Dt),wd=n(Dt,"P",{});var Ny=r(wd);iv=i(Ny,"Example:"),Ny.forEach(t),lv=d(Dt),k(wr.$$.fragment,Dt),dv=d(Dt),k(yr.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),Qp=d(s),Bs=n(s,"H2",{class:!0});var Uh=r(Bs);bo=n(Uh,"A",{id:!0,class:!0,href:!0});var Ly=r(bo);yd=n(Ly,"SPAN",{});var Sy=r(yd);k($r.$$.fragment,Sy),Sy.forEach(t),Ly.forEach(t),cv=d(Uh),$d=n(Uh,"SPAN",{});var Iy=r($d);pv=i(Iy,"TFDistilBertForSequenceClassification"),Iy.forEach(t),Uh.forEach(t),Hp=d(s),Oe=n(s,"DIV",{class:!0});var Ft=r(Oe);k(Dr.$$.fragment,Ft),hv=d(Ft),Dd=n(Ft,"P",{});var Wy=r(Dd);uv=i(Wy,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wy.forEach(t),fv=d(Ft),Fr=n(Ft,"P",{});var Qh=r(Fr);mv=i(Qh,"This model inherits from "),Ui=n(Qh,"A",{href:!0});var Ry=r(Ui);gv=i(Ry,"TFPreTrainedModel"),Ry.forEach(t),_v=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),vv=d(Ft),Br=n(Ft,"P",{});var Hh=r(Br);bv=i(Hh,"This model is also a "),Mr=n(Hh,"A",{href:!0,rel:!0});var Uy=r(Mr);kv=i(Uy,"tf.keras.Model"),Uy.forEach(t),Tv=i(Hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh.forEach(t),wv=d(Ft),k(ko.$$.fragment,Ft),yv=d(Ft),Qe=n(Ft,"DIV",{class:!0});var Bt=r(Qe);k(Er.$$.fragment,Bt),$v=d(Bt),Ms=n(Bt,"P",{});var fl=r(Ms);Dv=i(fl,"The "),Qi=n(fl,"A",{href:!0});var Qy=r(Qi);Fv=i(Qy,"TFDistilBertForSequenceClassification"),Qy.forEach(t),Bv=i(fl," forward method, overrides the "),Fd=n(fl,"CODE",{});var Hy=r(Fd);Mv=i(Hy,"__call__"),Hy.forEach(t),Ev=i(fl," special method."),fl.forEach(t),xv=d(Bt),k(To.$$.fragment,Bt),zv=d(Bt),Bd=n(Bt,"P",{});var Vy=r(Bd);jv=i(Vy,"Example:"),Vy.forEach(t),Cv=d(Bt),k(xr.$$.fragment,Bt),qv=d(Bt),k(zr.$$.fragment,Bt),Bt.forEach(t),Ft.forEach(t),Vp=d(s),Es=n(s,"H2",{class:!0});var Vh=r(Es);wo=n(Vh,"A",{id:!0,class:!0,href:!0});var Ky=r(wo);Md=n(Ky,"SPAN",{});var Jy=r(Md);k(jr.$$.fragment,Jy),Jy.forEach(t),Ky.forEach(t),Pv=d(Vh),Ed=n(Vh,"SPAN",{});var Gy=r(Ed);Av=i(Gy,"TFDistilBertForMultipleChoice"),Gy.forEach(t),Vh.forEach(t),Kp=d(s),Ne=n(s,"DIV",{class:!0});var Mt=r(Ne);k(Cr.$$.fragment,Mt),Ov=d(Mt),xd=n(Mt,"P",{});var Xy=r(xd);Nv=i(Xy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Xy.forEach(t),Lv=d(Mt),qr=n(Mt,"P",{});var Kh=r(qr);Sv=i(Kh,"This model inherits from "),Hi=n(Kh,"A",{href:!0});var Yy=r(Hi);Iv=i(Yy,"TFPreTrainedModel"),Yy.forEach(t),Wv=i(Kh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh.forEach(t),Rv=d(Mt),Pr=n(Mt,"P",{});var Jh=r(Pr);Uv=i(Jh,"This model is also a "),Ar=n(Jh,"A",{href:!0,rel:!0});var Zy=r(Ar);Qv=i(Zy,"tf.keras.Model"),Zy.forEach(t),Hv=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),Vv=d(Mt),k(yo.$$.fragment,Mt),Kv=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);k(Or.$$.fragment,Zt),Jv=d(Zt),xs=n(Zt,"P",{});var ml=r(xs);Gv=i(ml,"The "),Vi=n(ml,"A",{href:!0});var e$=r(Vi);Xv=i(e$,"TFDistilBertForMultipleChoice"),e$.forEach(t),Yv=i(ml," forward method, overrides the "),zd=n(ml,"CODE",{});var t$=r(zd);Zv=i(t$,"__call__"),t$.forEach(t),e1=i(ml," special method."),ml.forEach(t),t1=d(Zt),k($o.$$.fragment,Zt),s1=d(Zt),jd=n(Zt,"P",{});var s$=r(jd);o1=i(s$,"Example:"),s$.forEach(t),n1=d(Zt),k(Nr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Jp=d(s),zs=n(s,"H2",{class:!0});var Gh=r(zs);Do=n(Gh,"A",{id:!0,class:!0,href:!0});var o$=r(Do);Cd=n(o$,"SPAN",{});var n$=r(Cd);k(Lr.$$.fragment,n$),n$.forEach(t),o$.forEach(t),r1=d(Gh),qd=n(Gh,"SPAN",{});var r$=r(qd);a1=i(r$,"TFDistilBertForTokenClassification"),r$.forEach(t),Gh.forEach(t),Gp=d(s),Le=n(s,"DIV",{class:!0});var Et=r(Le);k(Sr.$$.fragment,Et),i1=d(Et),Pd=n(Et,"P",{});var a$=r(Pd);l1=i(a$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),a$.forEach(t),d1=d(Et),Ir=n(Et,"P",{});var Xh=r(Ir);c1=i(Xh,"This model inherits from "),Ki=n(Xh,"A",{href:!0});var i$=r(Ki);p1=i(i$,"TFPreTrainedModel"),i$.forEach(t),h1=i(Xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh.forEach(t),u1=d(Et),Wr=n(Et,"P",{});var Yh=r(Wr);f1=i(Yh,"This model is also a "),Rr=n(Yh,"A",{href:!0,rel:!0});var l$=r(Rr);m1=i(l$,"tf.keras.Model"),l$.forEach(t),g1=i(Yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh.forEach(t),_1=d(Et),k(Fo.$$.fragment,Et),v1=d(Et),He=n(Et,"DIV",{class:!0});var xt=r(He);k(Ur.$$.fragment,xt),b1=d(xt),js=n(xt,"P",{});var gl=r(js);k1=i(gl,"The "),Ji=n(gl,"A",{href:!0});var d$=r(Ji);T1=i(d$,"TFDistilBertForTokenClassification"),d$.forEach(t),w1=i(gl," forward method, overrides the "),Ad=n(gl,"CODE",{});var c$=r(Ad);y1=i(c$,"__call__"),c$.forEach(t),$1=i(gl," special method."),gl.forEach(t),D1=d(xt),k(Bo.$$.fragment,xt),F1=d(xt),Od=n(xt,"P",{});var p$=r(Od);B1=i(p$,"Example:"),p$.forEach(t),M1=d(xt),k(Qr.$$.fragment,xt),E1=d(xt),k(Hr.$$.fragment,xt),xt.forEach(t),Et.forEach(t),Xp=d(s),Cs=n(s,"H2",{class:!0});var Zh=r(Cs);Mo=n(Zh,"A",{id:!0,class:!0,href:!0});var h$=r(Mo);Nd=n(h$,"SPAN",{});var u$=r(Nd);k(Vr.$$.fragment,u$),u$.forEach(t),h$.forEach(t),x1=d(Zh),Ld=n(Zh,"SPAN",{});var f$=r(Ld);z1=i(f$,"TFDistilBertForQuestionAnswering"),f$.forEach(t),Zh.forEach(t),Yp=d(s),Se=n(s,"DIV",{class:!0});var zt=r(Se);k(Kr.$$.fragment,zt),j1=d(zt),qs=n(zt,"P",{});var _l=r(qs);C1=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Sd=n(_l,"CODE",{});var m$=r(Sd);q1=i(m$,"span start logits"),m$.forEach(t),P1=i(_l," and "),Id=n(_l,"CODE",{});var g$=r(Id);A1=i(g$,"span end logits"),g$.forEach(t),O1=i(_l,")."),_l.forEach(t),N1=d(zt),Jr=n(zt,"P",{});var eu=r(Jr);L1=i(eu,"This model inherits from "),Gi=n(eu,"A",{href:!0});var _$=r(Gi);S1=i(_$,"TFPreTrainedModel"),_$.forEach(t),I1=i(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),W1=d(zt),Gr=n(zt,"P",{});var tu=r(Gr);R1=i(tu,"This model is also a "),Xr=n(tu,"A",{href:!0,rel:!0});var v$=r(Xr);U1=i(v$,"tf.keras.Model"),v$.forEach(t),Q1=i(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),H1=d(zt),k(Eo.$$.fragment,zt),V1=d(zt),Ve=n(zt,"DIV",{class:!0});var jt=r(Ve);k(Yr.$$.fragment,jt),K1=d(jt),Ps=n(jt,"P",{});var vl=r(Ps);J1=i(vl,"The "),Xi=n(vl,"A",{href:!0});var b$=r(Xi);G1=i(b$,"TFDistilBertForQuestionAnswering"),b$.forEach(t),X1=i(vl," forward method, overrides the "),Wd=n(vl,"CODE",{});var k$=r(Wd);Y1=i(k$,"__call__"),k$.forEach(t),Z1=i(vl," special method."),vl.forEach(t),eb=d(jt),k(xo.$$.fragment,jt),tb=d(jt),Rd=n(jt,"P",{});var T$=r(Rd);sb=i(T$,"Example:"),T$.forEach(t),ob=d(jt),k(Zr.$$.fragment,jt),nb=d(jt),k(ea.$$.fragment,jt),jt.forEach(t),zt.forEach(t),Zp=d(s),As=n(s,"H2",{class:!0});var su=r(As);zo=n(su,"A",{id:!0,class:!0,href:!0});var w$=r(zo);Ud=n(w$,"SPAN",{});var y$=r(Ud);k(ta.$$.fragment,y$),y$.forEach(t),w$.forEach(t),rb=d(su),Qd=n(su,"SPAN",{});var $$=r(Qd);ab=i($$,"FlaxDistilBertModel"),$$.forEach(t),su.forEach(t),eh=d(s),Me=n(s,"DIV",{class:!0});var pt=r(Me);k(sa.$$.fragment,pt),ib=d(pt),Hd=n(pt,"P",{});var D$=r(Hd);lb=i(D$,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),D$.forEach(t),db=d(pt),oa=n(pt,"P",{});var ou=r(oa);cb=i(ou,"This model inherits from "),Yi=n(ou,"A",{href:!0});var F$=r(Yi);pb=i(F$,"FlaxPreTrainedModel"),F$.forEach(t),hb=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),ub=d(pt),na=n(pt,"P",{});var nu=r(na);fb=i(nu,"This model is also a Flax Linen "),ra=n(nu,"A",{href:!0,rel:!0});var B$=r(ra);mb=i(B$,"flax.linen.Module"),B$.forEach(t),gb=i(nu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu.forEach(t),_b=d(pt),Vd=n(pt,"P",{});var M$=r(Vd);vb=i(M$,"Finally, this model supports inherent JAX features such as:"),M$.forEach(t),bb=d(pt),qt=n(pt,"UL",{});var Ho=r(qt);Kd=n(Ho,"LI",{});var E$=r(Kd);aa=n(E$,"A",{href:!0,rel:!0});var x$=r(aa);kb=i(x$,"Just-In-Time (JIT) compilation"),x$.forEach(t),E$.forEach(t),Tb=d(Ho),Jd=n(Ho,"LI",{});var z$=r(Jd);ia=n(z$,"A",{href:!0,rel:!0});var j$=r(ia);wb=i(j$,"Automatic Differentiation"),j$.forEach(t),z$.forEach(t),yb=d(Ho),Gd=n(Ho,"LI",{});var C$=r(Gd);la=n(C$,"A",{href:!0,rel:!0});var q$=r(la);$b=i(q$,"Vectorization"),q$.forEach(t),C$.forEach(t),Db=d(Ho),Xd=n(Ho,"LI",{});var P$=r(Xd);da=n(P$,"A",{href:!0,rel:!0});var A$=r(da);Fb=i(A$,"Parallelization"),A$.forEach(t),P$.forEach(t),Ho.forEach(t),Bb=d(pt),rt=n(pt,"DIV",{class:!0});var es=r(rt);k(ca.$$.fragment,es),Mb=d(es),Os=n(es,"P",{});var bl=r(Os);Eb=i(bl,"The "),Yd=n(bl,"CODE",{});var O$=r(Yd);xb=i(O$,"FlaxDistilBertPreTrainedModel"),O$.forEach(t),zb=i(bl,"forward method, overrides the "),Zd=n(bl,"CODE",{});var N$=r(Zd);jb=i(N$,"__call__"),N$.forEach(t),Cb=i(bl," special method."),bl.forEach(t),qb=d(es),k(jo.$$.fragment,es),Pb=d(es),ec=n(es,"P",{});var L$=r(ec);Ab=i(L$,"Example:"),L$.forEach(t),Ob=d(es),k(pa.$$.fragment,es),es.forEach(t),pt.forEach(t),th=d(s),Ns=n(s,"H2",{class:!0});var ru=r(Ns);Co=n(ru,"A",{id:!0,class:!0,href:!0});var S$=r(Co);tc=n(S$,"SPAN",{});var I$=r(tc);k(ha.$$.fragment,I$),I$.forEach(t),S$.forEach(t),Nb=d(ru),sc=n(ru,"SPAN",{});var W$=r(sc);Lb=i(W$,"FlaxDistilBertForMaskedLM"),W$.forEach(t),ru.forEach(t),sh=d(s),Ee=n(s,"DIV",{class:!0});var ht=r(Ee);k(ua.$$.fragment,ht),Sb=d(ht),fa=n(ht,"P",{});var au=r(fa);Ib=i(au,"DistilBert Model with a "),oc=n(au,"CODE",{});var R$=r(oc);Wb=i(R$,"language modeling"),R$.forEach(t),Rb=i(au," head on top."),au.forEach(t),Ub=d(ht),ma=n(ht,"P",{});var iu=r(ma);Qb=i(iu,"This model inherits from "),Zi=n(iu,"A",{href:!0});var U$=r(Zi);Hb=i(U$,"FlaxPreTrainedModel"),U$.forEach(t),Vb=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),Kb=d(ht),ga=n(ht,"P",{});var lu=r(ga);Jb=i(lu,"This model is also a Flax Linen "),_a=n(lu,"A",{href:!0,rel:!0});var Q$=r(_a);Gb=i(Q$,"flax.linen.Module"),Q$.forEach(t),Xb=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Yb=d(ht),nc=n(ht,"P",{});var H$=r(nc);Zb=i(H$,"Finally, this model supports inherent JAX features such as:"),H$.forEach(t),ek=d(ht),Pt=n(ht,"UL",{});var Vo=r(Pt);rc=n(Vo,"LI",{});var V$=r(rc);va=n(V$,"A",{href:!0,rel:!0});var K$=r(va);tk=i(K$,"Just-In-Time (JIT) compilation"),K$.forEach(t),V$.forEach(t),sk=d(Vo),ac=n(Vo,"LI",{});var J$=r(ac);ba=n(J$,"A",{href:!0,rel:!0});var G$=r(ba);ok=i(G$,"Automatic Differentiation"),G$.forEach(t),J$.forEach(t),nk=d(Vo),ic=n(Vo,"LI",{});var X$=r(ic);ka=n(X$,"A",{href:!0,rel:!0});var Y$=r(ka);rk=i(Y$,"Vectorization"),Y$.forEach(t),X$.forEach(t),ak=d(Vo),lc=n(Vo,"LI",{});var Z$=r(lc);Ta=n(Z$,"A",{href:!0,rel:!0});var eD=r(Ta);ik=i(eD,"Parallelization"),eD.forEach(t),Z$.forEach(t),Vo.forEach(t),lk=d(ht),at=n(ht,"DIV",{class:!0});var ts=r(at);k(wa.$$.fragment,ts),dk=d(ts),Ls=n(ts,"P",{});var kl=r(Ls);ck=i(kl,"The "),dc=n(kl,"CODE",{});var tD=r(dc);pk=i(tD,"FlaxDistilBertPreTrainedModel"),tD.forEach(t),hk=i(kl,"forward method, overrides the "),cc=n(kl,"CODE",{});var sD=r(cc);uk=i(sD,"__call__"),sD.forEach(t),fk=i(kl," special method."),kl.forEach(t),mk=d(ts),k(qo.$$.fragment,ts),gk=d(ts),pc=n(ts,"P",{});var oD=r(pc);_k=i(oD,"Example:"),oD.forEach(t),vk=d(ts),k(ya.$$.fragment,ts),ts.forEach(t),ht.forEach(t),oh=d(s),Ss=n(s,"H2",{class:!0});var du=r(Ss);Po=n(du,"A",{id:!0,class:!0,href:!0});var nD=r(Po);hc=n(nD,"SPAN",{});var rD=r(hc);k($a.$$.fragment,rD),rD.forEach(t),nD.forEach(t),bk=d(du),uc=n(du,"SPAN",{});var aD=r(uc);kk=i(aD,"FlaxDistilBertForSequenceClassification"),aD.forEach(t),du.forEach(t),nh=d(s),xe=n(s,"DIV",{class:!0});var ut=r(xe);k(Da.$$.fragment,ut),Tk=d(ut),fc=n(ut,"P",{});var iD=r(fc);wk=i(iD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iD.forEach(t),yk=d(ut),Fa=n(ut,"P",{});var cu=r(Fa);$k=i(cu,"This model inherits from "),el=n(cu,"A",{href:!0});var lD=r(el);Dk=i(lD,"FlaxPreTrainedModel"),lD.forEach(t),Fk=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),Bk=d(ut),Ba=n(ut,"P",{});var pu=r(Ba);Mk=i(pu,"This model is also a Flax Linen "),Ma=n(pu,"A",{href:!0,rel:!0});var dD=r(Ma);Ek=i(dD,"flax.linen.Module"),dD.forEach(t),xk=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),zk=d(ut),mc=n(ut,"P",{});var cD=r(mc);jk=i(cD,"Finally, this model supports inherent JAX features such as:"),cD.forEach(t),Ck=d(ut),At=n(ut,"UL",{});var Ko=r(At);gc=n(Ko,"LI",{});var pD=r(gc);Ea=n(pD,"A",{href:!0,rel:!0});var hD=r(Ea);qk=i(hD,"Just-In-Time (JIT) compilation"),hD.forEach(t),pD.forEach(t),Pk=d(Ko),_c=n(Ko,"LI",{});var uD=r(_c);xa=n(uD,"A",{href:!0,rel:!0});var fD=r(xa);Ak=i(fD,"Automatic Differentiation"),fD.forEach(t),uD.forEach(t),Ok=d(Ko),vc=n(Ko,"LI",{});var mD=r(vc);za=n(mD,"A",{href:!0,rel:!0});var gD=r(za);Nk=i(gD,"Vectorization"),gD.forEach(t),mD.forEach(t),Lk=d(Ko),bc=n(Ko,"LI",{});var _D=r(bc);ja=n(_D,"A",{href:!0,rel:!0});var vD=r(ja);Sk=i(vD,"Parallelization"),vD.forEach(t),_D.forEach(t),Ko.forEach(t),Ik=d(ut),it=n(ut,"DIV",{class:!0});var ss=r(it);k(Ca.$$.fragment,ss),Wk=d(ss),Is=n(ss,"P",{});var Tl=r(Is);Rk=i(Tl,"The "),kc=n(Tl,"CODE",{});var bD=r(kc);Uk=i(bD,"FlaxDistilBertPreTrainedModel"),bD.forEach(t),Qk=i(Tl,"forward method, overrides the "),Tc=n(Tl,"CODE",{});var kD=r(Tc);Hk=i(kD,"__call__"),kD.forEach(t),Vk=i(Tl," special method."),Tl.forEach(t),Kk=d(ss),k(Ao.$$.fragment,ss),Jk=d(ss),wc=n(ss,"P",{});var TD=r(wc);Gk=i(TD,"Example:"),TD.forEach(t),Xk=d(ss),k(qa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),rh=d(s),Ws=n(s,"H2",{class:!0});var hu=r(Ws);Oo=n(hu,"A",{id:!0,class:!0,href:!0});var wD=r(Oo);yc=n(wD,"SPAN",{});var yD=r(yc);k(Pa.$$.fragment,yD),yD.forEach(t),wD.forEach(t),Yk=d(hu),$c=n(hu,"SPAN",{});var $D=r($c);Zk=i($D,"FlaxDistilBertForMultipleChoice"),$D.forEach(t),hu.forEach(t),ah=d(s),ze=n(s,"DIV",{class:!0});var ft=r(ze);k(Aa.$$.fragment,ft),eT=d(ft),Dc=n(ft,"P",{});var DD=r(Dc);tT=i(DD,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),DD.forEach(t),sT=d(ft),Oa=n(ft,"P",{});var uu=r(Oa);oT=i(uu,"This model inherits from "),tl=n(uu,"A",{href:!0});var FD=r(tl);nT=i(FD,"FlaxPreTrainedModel"),FD.forEach(t),rT=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uu.forEach(t),aT=d(ft),Na=n(ft,"P",{});var fu=r(Na);iT=i(fu,"This model is also a Flax Linen "),La=n(fu,"A",{href:!0,rel:!0});var BD=r(La);lT=i(BD,"flax.linen.Module"),BD.forEach(t),dT=i(fu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fu.forEach(t),cT=d(ft),Fc=n(ft,"P",{});var MD=r(Fc);pT=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),hT=d(ft),Ot=n(ft,"UL",{});var Jo=r(Ot);Bc=n(Jo,"LI",{});var ED=r(Bc);Sa=n(ED,"A",{href:!0,rel:!0});var xD=r(Sa);uT=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),fT=d(Jo),Mc=n(Jo,"LI",{});var zD=r(Mc);Ia=n(zD,"A",{href:!0,rel:!0});var jD=r(Ia);mT=i(jD,"Automatic Differentiation"),jD.forEach(t),zD.forEach(t),gT=d(Jo),Ec=n(Jo,"LI",{});var CD=r(Ec);Wa=n(CD,"A",{href:!0,rel:!0});var qD=r(Wa);_T=i(qD,"Vectorization"),qD.forEach(t),CD.forEach(t),vT=d(Jo),xc=n(Jo,"LI",{});var PD=r(xc);Ra=n(PD,"A",{href:!0,rel:!0});var AD=r(Ra);bT=i(AD,"Parallelization"),AD.forEach(t),PD.forEach(t),Jo.forEach(t),kT=d(ft),lt=n(ft,"DIV",{class:!0});var os=r(lt);k(Ua.$$.fragment,os),TT=d(os),Rs=n(os,"P",{});var wl=r(Rs);wT=i(wl,"The "),zc=n(wl,"CODE",{});var OD=r(zc);yT=i(OD,"FlaxDistilBertPreTrainedModel"),OD.forEach(t),$T=i(wl,"forward method, overrides the "),jc=n(wl,"CODE",{});var ND=r(jc);DT=i(ND,"__call__"),ND.forEach(t),FT=i(wl," special method."),wl.forEach(t),BT=d(os),k(No.$$.fragment,os),MT=d(os),Cc=n(os,"P",{});var LD=r(Cc);ET=i(LD,"Example:"),LD.forEach(t),xT=d(os),k(Qa.$$.fragment,os),os.forEach(t),ft.forEach(t),ih=d(s),Us=n(s,"H2",{class:!0});var mu=r(Us);Lo=n(mu,"A",{id:!0,class:!0,href:!0});var SD=r(Lo);qc=n(SD,"SPAN",{});var ID=r(qc);k(Ha.$$.fragment,ID),ID.forEach(t),SD.forEach(t),zT=d(mu),Pc=n(mu,"SPAN",{});var WD=r(Pc);jT=i(WD,"FlaxDistilBertForTokenClassification"),WD.forEach(t),mu.forEach(t),lh=d(s),je=n(s,"DIV",{class:!0});var mt=r(je);k(Va.$$.fragment,mt),CT=d(mt),Ac=n(mt,"P",{});var RD=r(Ac);qT=i(RD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),RD.forEach(t),PT=d(mt),Ka=n(mt,"P",{});var gu=r(Ka);AT=i(gu,"This model inherits from "),sl=n(gu,"A",{href:!0});var UD=r(sl);OT=i(UD,"FlaxPreTrainedModel"),UD.forEach(t),NT=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gu.forEach(t),LT=d(mt),Ja=n(mt,"P",{});var _u=r(Ja);ST=i(_u,"This model is also a Flax Linen "),Ga=n(_u,"A",{href:!0,rel:!0});var QD=r(Ga);IT=i(QD,"flax.linen.Module"),QD.forEach(t),WT=i(_u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_u.forEach(t),RT=d(mt),Oc=n(mt,"P",{});var HD=r(Oc);UT=i(HD,"Finally, this model supports inherent JAX features such as:"),HD.forEach(t),QT=d(mt),Nt=n(mt,"UL",{});var Go=r(Nt);Nc=n(Go,"LI",{});var VD=r(Nc);Xa=n(VD,"A",{href:!0,rel:!0});var KD=r(Xa);HT=i(KD,"Just-In-Time (JIT) compilation"),KD.forEach(t),VD.forEach(t),VT=d(Go),Lc=n(Go,"LI",{});var JD=r(Lc);Ya=n(JD,"A",{href:!0,rel:!0});var GD=r(Ya);KT=i(GD,"Automatic Differentiation"),GD.forEach(t),JD.forEach(t),JT=d(Go),Sc=n(Go,"LI",{});var XD=r(Sc);Za=n(XD,"A",{href:!0,rel:!0});var YD=r(Za);GT=i(YD,"Vectorization"),YD.forEach(t),XD.forEach(t),XT=d(Go),Ic=n(Go,"LI",{});var ZD=r(Ic);ei=n(ZD,"A",{href:!0,rel:!0});var eF=r(ei);YT=i(eF,"Parallelization"),eF.forEach(t),ZD.forEach(t),Go.forEach(t),ZT=d(mt),dt=n(mt,"DIV",{class:!0});var ns=r(dt);k(ti.$$.fragment,ns),ew=d(ns),Qs=n(ns,"P",{});var yl=r(Qs);tw=i(yl,"The "),Wc=n(yl,"CODE",{});var tF=r(Wc);sw=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),ow=i(yl,"forward method, overrides the "),Rc=n(yl,"CODE",{});var sF=r(Rc);nw=i(sF,"__call__"),sF.forEach(t),rw=i(yl," special method."),yl.forEach(t),aw=d(ns),k(So.$$.fragment,ns),iw=d(ns),Uc=n(ns,"P",{});var oF=r(Uc);lw=i(oF,"Example:"),oF.forEach(t),dw=d(ns),k(si.$$.fragment,ns),ns.forEach(t),mt.forEach(t),dh=d(s),Hs=n(s,"H2",{class:!0});var vu=r(Hs);Io=n(vu,"A",{id:!0,class:!0,href:!0});var nF=r(Io);Qc=n(nF,"SPAN",{});var rF=r(Qc);k(oi.$$.fragment,rF),rF.forEach(t),nF.forEach(t),cw=d(vu),Hc=n(vu,"SPAN",{});var aF=r(Hc);pw=i(aF,"FlaxDistilBertForQuestionAnswering"),aF.forEach(t),vu.forEach(t),ch=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(ni.$$.fragment,gt),hw=d(gt),Vs=n(gt,"P",{});var $l=r(Vs);uw=i($l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Vc=n($l,"CODE",{});var iF=r(Vc);fw=i(iF,"span start logits"),iF.forEach(t),mw=i($l," and "),Kc=n($l,"CODE",{});var lF=r(Kc);gw=i(lF,"span end logits"),lF.forEach(t),_w=i($l,")."),$l.forEach(t),vw=d(gt),ri=n(gt,"P",{});var bu=r(ri);bw=i(bu,"This model inherits from "),ol=n(bu,"A",{href:!0});var dF=r(ol);kw=i(dF,"FlaxPreTrainedModel"),dF.forEach(t),Tw=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bu.forEach(t),ww=d(gt),ai=n(gt,"P",{});var ku=r(ai);yw=i(ku,"This model is also a Flax Linen "),ii=n(ku,"A",{href:!0,rel:!0});var cF=r(ii);$w=i(cF,"flax.linen.Module"),cF.forEach(t),Dw=i(ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ku.forEach(t),Fw=d(gt),Jc=n(gt,"P",{});var pF=r(Jc);Bw=i(pF,"Finally, this model supports inherent JAX features such as:"),pF.forEach(t),Mw=d(gt),Lt=n(gt,"UL",{});var Xo=r(Lt);Gc=n(Xo,"LI",{});var hF=r(Gc);li=n(hF,"A",{href:!0,rel:!0});var uF=r(li);Ew=i(uF,"Just-In-Time (JIT) compilation"),uF.forEach(t),hF.forEach(t),xw=d(Xo),Xc=n(Xo,"LI",{});var fF=r(Xc);di=n(fF,"A",{href:!0,rel:!0});var mF=r(di);zw=i(mF,"Automatic Differentiation"),mF.forEach(t),fF.forEach(t),jw=d(Xo),Yc=n(Xo,"LI",{});var gF=r(Yc);ci=n(gF,"A",{href:!0,rel:!0});var _F=r(ci);Cw=i(_F,"Vectorization"),_F.forEach(t),gF.forEach(t),qw=d(Xo),Zc=n(Xo,"LI",{});var vF=r(Zc);pi=n(vF,"A",{href:!0,rel:!0});var bF=r(pi);Pw=i(bF,"Parallelization"),bF.forEach(t),vF.forEach(t),Xo.forEach(t),Aw=d(gt),ct=n(gt,"DIV",{class:!0});var rs=r(ct);k(hi.$$.fragment,rs),Ow=d(rs),Ks=n(rs,"P",{});var Dl=r(Ks);Nw=i(Dl,"The "),ep=n(Dl,"CODE",{});var kF=r(ep);Lw=i(kF,"FlaxDistilBertPreTrainedModel"),kF.forEach(t),Sw=i(Dl,"forward method, overrides the "),tp=n(Dl,"CODE",{});var TF=r(tp);Iw=i(TF,"__call__"),TF.forEach(t),Ww=i(Dl," special method."),Dl.forEach(t),Rw=d(rs),k(Wo.$$.fragment,rs),Uw=d(rs),sp=n(rs,"P",{});var wF=r(sp);Qw=i(wF,"Example:"),wF.forEach(t),Hw=d(rs),k(ui.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ZF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Js,"id","transformers.DistilBertConfig"),c(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Js,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(vi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel"),c(bi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_16162/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ti,"href","/docs/transformers/pr_16162/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ke,"class","docstring"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(wi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(yi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer"),c($i,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(Di,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(Fi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizerFast"),c(Bi,"href","/docs/transformers/pr_16162/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Ei,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertModel"),c(tt,"class","docstring"),c(Je,"class","docstring"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(hs,"class","relative group"),c(xi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Ie,"class","docstring"),c(Ge,"class","docstring"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(fs,"class","relative group"),c(ji,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(ke,"class","docstring"),c(Xe,"class","docstring"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(qi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(st,"class","docstring"),c(Ye,"class","docstring"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(vs,"class","relative group"),c(Ai,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Oi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring"),c(Ze,"class","docstring"),c(po,"id","transformers.DistilBertForQuestionAnswering"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DistilBertForQuestionAnswering"),c(ks,"class","relative group"),c(Ni,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.PreTrainedModel"),c(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nr,"rel","nofollow"),c(Li,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(et,"class","docstring"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c(ys,"class","relative group"),c(Si,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ot,"class","docstring"),c(Pe,"class","docstring"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Ds,"class","relative group"),c(Wi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kr,"rel","nofollow"),c(Ri,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(bo,"id","transformers.TFDistilBertForSequenceClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(Qi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(Qe,"class","docstring"),c(Oe,"class","docstring"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Hi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Vi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(nt,"class","docstring"),c(Ne,"class","docstring"),c(Do,"id","transformers.TFDistilBertForTokenClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Ki,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Ji,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(He,"class","docstring"),c(Le,"class","docstring"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Cs,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xr,"rel","nofollow"),c(Xi,"href","/docs/transformers/pr_16162/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(Ve,"class","docstring"),c(Se,"class","docstring"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ra,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(aa,"rel","nofollow"),c(ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ia,"rel","nofollow"),c(la,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(da,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Co,"id","transformers.FlaxDistilBertForMaskedLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ns,"class","relative group"),c(Zi,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(_a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(_a,"rel","nofollow"),c(va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(va,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ka,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ta,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Po,"id","transformers.FlaxDistilBertForSequenceClassification"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ss,"class","relative group"),c(el,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ea,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(za,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ja,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Oo,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(tl,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(La,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(La,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Sa,"rel","nofollow"),c(Ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ia,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ra,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Lo,"id","transformers.FlaxDistilBertForTokenClassification"),c(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lo,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Us,"class","relative group"),c(sl,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ga,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ga,"rel","nofollow"),c(Xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xa,"rel","nofollow"),c(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ei,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(Io,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Hs,"class","relative group"),c(ol,"href","/docs/transformers/pr_16162/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ii,"rel","nofollow"),c(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(li,"rel","nofollow"),c(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(di,"rel","nofollow"),c(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ci,"rel","nofollow"),c(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pi,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(s,m){e(document.head,p),u(s,F,m),u(s,g,m),e(g,v),e(v,D),T(_,D,null),e(g,f),e(g,B),e(B,ce),u(s,V,m),u(s,E,m),e(E,G),e(G,S),T(X,S,null),e(E,pe),e(E,I),e(I,he),u(s,ae,m),u(s,N,m),e(N,P),e(N,Y),e(Y,K),e(N,x),e(N,z),e(z,ue),e(N,W),e(N,se),e(se,fe),e(N,R),u(s,ie,m),u(s,ee,m),e(ee,A),u(s,le,m),u(s,L,m),e(L,oe),e(oe,me),u(s,q,m),u(s,te,m),e(te,U),u(s,de,m),u(s,h,m),e(h,M),e(M,J),e(M,_e),e(_e,Te),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,Q),e(M,$e),e(h,De),e(h,Z),e(Z,Fe),e(Z,ne),e(ne,Be),e(Z,Tu),u(s,wp,m),u(s,bt,m),e(bt,wu),e(bt,Yo),e(Yo,yu),e(bt,$u),e(bt,Zo),e(Zo,Du),e(bt,Fu),e(bt,en),e(en,Bu),e(bt,Mu),u(s,yp,m),u(s,as,m),e(as,Js),e(Js,Fl),T(tn,Fl,null),e(as,Eu),e(as,Bl),e(Bl,xu),u(s,$p,m),u(s,Ke,m),T(sn,Ke,null),e(Ke,zu),e(Ke,Ct),e(Ct,ju),e(Ct,vi),e(vi,Cu),e(Ct,qu),e(Ct,bi),e(bi,Pu),e(Ct,Au),e(Ct,on),e(on,Ou),e(Ct,Nu),e(Ke,Lu),e(Ke,is),e(is,Su),e(is,ki),e(ki,Iu),e(is,Wu),e(is,Ti),e(Ti,Ru),e(is,Uu),e(Ke,Qu),e(Ke,Ml),e(Ml,Hu),e(Ke,Vu),T(nn,Ke,null),u(s,Dp,m),u(s,ls,m),e(ls,Gs),e(Gs,El),T(rn,El,null),e(ls,Ku),e(ls,xl),e(xl,Ju),u(s,Fp,m),u(s,_t,m),T(an,_t,null),e(_t,Gu),e(_t,zl),e(zl,Xu),e(_t,Yu),e(_t,Xs),e(Xs,wi),e(wi,Zu),e(Xs,ef),e(Xs,yi),e(yi,tf),e(Xs,sf),e(_t,of),e(_t,ln),e(ln,nf),e(ln,$i),e($i,rf),e(ln,af),u(s,Bp,m),u(s,ds,m),e(ds,Ys),e(Ys,jl),T(dn,jl,null),e(ds,lf),e(ds,Cl),e(Cl,df),u(s,Mp,m),u(s,vt,m),T(cn,vt,null),e(vt,cf),e(vt,pn),e(pn,pf),e(pn,ql),e(ql,hf),e(pn,uf),e(vt,ff),e(vt,Zs),e(Zs,Di),e(Di,mf),e(Zs,gf),e(Zs,Fi),e(Fi,_f),e(Zs,vf),e(vt,bf),e(vt,hn),e(hn,kf),e(hn,Bi),e(Bi,Tf),e(hn,wf),u(s,Ep,m),u(s,cs,m),e(cs,eo),e(eo,Pl),T(un,Pl,null),e(cs,yf),e(cs,Al),e(Al,$f),u(s,xp,m),u(s,Je,m),T(fn,Je,null),e(Je,Df),e(Je,Ol),e(Ol,Ff),e(Je,Bf),e(Je,mn),e(mn,Mf),e(mn,Mi),e(Mi,Ef),e(mn,xf),e(Je,zf),e(Je,gn),e(gn,jf),e(gn,_n),e(_n,Cf),e(gn,qf),e(Je,Pf),e(Je,tt),T(vn,tt,null),e(tt,Af),e(tt,ps),e(ps,Of),e(ps,Ei),e(Ei,Nf),e(ps,Lf),e(ps,Nl),e(Nl,Sf),e(ps,If),e(tt,Wf),T(to,tt,null),e(tt,Rf),e(tt,Ll),e(Ll,Uf),e(tt,Qf),T(bn,tt,null),u(s,zp,m),u(s,hs,m),e(hs,so),e(so,Sl),T(kn,Sl,null),e(hs,Hf),e(hs,Il),e(Il,Vf),u(s,jp,m),u(s,Ge,m),T(Tn,Ge,null),e(Ge,Kf),e(Ge,wn),e(wn,Jf),e(wn,Wl),e(Wl,Gf),e(wn,Xf),e(Ge,Yf),e(Ge,yn),e(yn,Zf),e(yn,xi),e(xi,em),e(yn,tm),e(Ge,sm),e(Ge,$n),e($n,om),e($n,Dn),e(Dn,nm),e($n,rm),e(Ge,am),e(Ge,Ie),T(Fn,Ie,null),e(Ie,im),e(Ie,us),e(us,lm),e(us,zi),e(zi,dm),e(us,cm),e(us,Rl),e(Rl,pm),e(us,hm),e(Ie,um),T(oo,Ie,null),e(Ie,fm),e(Ie,Ul),e(Ul,mm),e(Ie,gm),T(Bn,Ie,null),e(Ie,_m),T(Mn,Ie,null),u(s,Cp,m),u(s,fs,m),e(fs,no),e(no,Ql),T(En,Ql,null),e(fs,vm),e(fs,Hl),e(Hl,bm),u(s,qp,m),u(s,Xe,m),T(xn,Xe,null),e(Xe,km),e(Xe,Vl),e(Vl,Tm),e(Xe,wm),e(Xe,zn),e(zn,ym),e(zn,ji),e(ji,$m),e(zn,Dm),e(Xe,Fm),e(Xe,jn),e(jn,Bm),e(jn,Cn),e(Cn,Mm),e(jn,Em),e(Xe,xm),e(Xe,ke),T(qn,ke,null),e(ke,zm),e(ke,ms),e(ms,jm),e(ms,Ci),e(Ci,Cm),e(ms,qm),e(ms,Kl),e(Kl,Pm),e(ms,Am),e(ke,Om),T(ro,ke,null),e(ke,Nm),e(ke,Jl),e(Jl,Lm),e(ke,Sm),T(Pn,ke,null),e(ke,Im),T(An,ke,null),e(ke,Wm),e(ke,Gl),e(Gl,Rm),e(ke,Um),T(On,ke,null),e(ke,Qm),T(Nn,ke,null),u(s,Pp,m),u(s,gs,m),e(gs,ao),e(ao,Xl),T(Ln,Xl,null),e(gs,Hm),e(gs,Yl),e(Yl,Vm),u(s,Ap,m),u(s,Ye,m),T(Sn,Ye,null),e(Ye,Km),e(Ye,Zl),e(Zl,Jm),e(Ye,Gm),e(Ye,In),e(In,Xm),e(In,qi),e(qi,Ym),e(In,Zm),e(Ye,eg),e(Ye,Wn),e(Wn,tg),e(Wn,Rn),e(Rn,sg),e(Wn,og),e(Ye,ng),e(Ye,st),T(Un,st,null),e(st,rg),e(st,_s),e(_s,ag),e(_s,Pi),e(Pi,ig),e(_s,lg),e(_s,ed),e(ed,dg),e(_s,cg),e(st,pg),T(io,st,null),e(st,hg),e(st,td),e(td,ug),e(st,fg),T(Qn,st,null),u(s,Op,m),u(s,vs,m),e(vs,lo),e(lo,sd),T(Hn,sd,null),e(vs,mg),e(vs,od),e(od,gg),u(s,Np,m),u(s,Ze,m),T(Vn,Ze,null),e(Ze,_g),e(Ze,nd),e(nd,vg),e(Ze,bg),e(Ze,Kn),e(Kn,kg),e(Kn,Ai),e(Ai,Tg),e(Kn,wg),e(Ze,yg),e(Ze,Jn),e(Jn,$g),e(Jn,Gn),e(Gn,Dg),e(Jn,Fg),e(Ze,Bg),e(Ze,We),T(Xn,We,null),e(We,Mg),e(We,bs),e(bs,Eg),e(bs,Oi),e(Oi,xg),e(bs,zg),e(bs,rd),e(rd,jg),e(bs,Cg),e(We,qg),T(co,We,null),e(We,Pg),e(We,ad),e(ad,Ag),e(We,Og),T(Yn,We,null),e(We,Ng),T(Zn,We,null),u(s,Lp,m),u(s,ks,m),e(ks,po),e(po,id),T(er,id,null),e(ks,Lg),e(ks,ld),e(ld,Sg),u(s,Sp,m),u(s,et,m),T(tr,et,null),e(et,Ig),e(et,Ts),e(Ts,Wg),e(Ts,dd),e(dd,Rg),e(Ts,Ug),e(Ts,cd),e(cd,Qg),e(Ts,Hg),e(et,Vg),e(et,sr),e(sr,Kg),e(sr,Ni),e(Ni,Jg),e(sr,Gg),e(et,Xg),e(et,or),e(or,Yg),e(or,nr),e(nr,Zg),e(or,e_),e(et,t_),e(et,Re),T(rr,Re,null),e(Re,s_),e(Re,ws),e(ws,o_),e(ws,Li),e(Li,n_),e(ws,r_),e(ws,pd),e(pd,a_),e(ws,i_),e(Re,l_),T(ho,Re,null),e(Re,d_),e(Re,hd),e(hd,c_),e(Re,p_),T(ar,Re,null),e(Re,h_),T(ir,Re,null),u(s,Ip,m),u(s,ys,m),e(ys,uo),e(uo,ud),T(lr,ud,null),e(ys,u_),e(ys,fd),e(fd,f_),u(s,Wp,m),u(s,Pe,m),T(dr,Pe,null),e(Pe,m_),e(Pe,md),e(md,g_),e(Pe,__),e(Pe,cr),e(cr,v_),e(cr,Si),e(Si,b_),e(cr,k_),e(Pe,T_),e(Pe,pr),e(pr,w_),e(pr,hr),e(hr,y_),e(pr,$_),e(Pe,D_),T(fo,Pe,null),e(Pe,F_),e(Pe,ot),T(ur,ot,null),e(ot,B_),e(ot,$s),e($s,M_),e($s,Ii),e(Ii,E_),e($s,x_),e($s,gd),e(gd,z_),e($s,j_),e(ot,C_),T(mo,ot,null),e(ot,q_),e(ot,_d),e(_d,P_),e(ot,A_),T(fr,ot,null),u(s,Rp,m),u(s,Ds,m),e(Ds,go),e(go,vd),T(mr,vd,null),e(Ds,O_),e(Ds,bd),e(bd,N_),u(s,Up,m),u(s,Ae,m),T(gr,Ae,null),e(Ae,L_),e(Ae,_r),e(_r,S_),e(_r,kd),e(kd,I_),e(_r,W_),e(Ae,R_),e(Ae,vr),e(vr,U_),e(vr,Wi),e(Wi,Q_),e(vr,H_),e(Ae,V_),e(Ae,br),e(br,K_),e(br,kr),e(kr,J_),e(br,G_),e(Ae,X_),T(_o,Ae,null),e(Ae,Y_),e(Ae,Ue),T(Tr,Ue,null),e(Ue,Z_),e(Ue,Fs),e(Fs,ev),e(Fs,Ri),e(Ri,tv),e(Fs,sv),e(Fs,Td),e(Td,ov),e(Fs,nv),e(Ue,rv),T(vo,Ue,null),e(Ue,av),e(Ue,wd),e(wd,iv),e(Ue,lv),T(wr,Ue,null),e(Ue,dv),T(yr,Ue,null),u(s,Qp,m),u(s,Bs,m),e(Bs,bo),e(bo,yd),T($r,yd,null),e(Bs,cv),e(Bs,$d),e($d,pv),u(s,Hp,m),u(s,Oe,m),T(Dr,Oe,null),e(Oe,hv),e(Oe,Dd),e(Dd,uv),e(Oe,fv),e(Oe,Fr),e(Fr,mv),e(Fr,Ui),e(Ui,gv),e(Fr,_v),e(Oe,vv),e(Oe,Br),e(Br,bv),e(Br,Mr),e(Mr,kv),e(Br,Tv),e(Oe,wv),T(ko,Oe,null),e(Oe,yv),e(Oe,Qe),T(Er,Qe,null),e(Qe,$v),e(Qe,Ms),e(Ms,Dv),e(Ms,Qi),e(Qi,Fv),e(Ms,Bv),e(Ms,Fd),e(Fd,Mv),e(Ms,Ev),e(Qe,xv),T(To,Qe,null),e(Qe,zv),e(Qe,Bd),e(Bd,jv),e(Qe,Cv),T(xr,Qe,null),e(Qe,qv),T(zr,Qe,null),u(s,Vp,m),u(s,Es,m),e(Es,wo),e(wo,Md),T(jr,Md,null),e(Es,Pv),e(Es,Ed),e(Ed,Av),u(s,Kp,m),u(s,Ne,m),T(Cr,Ne,null),e(Ne,Ov),e(Ne,xd),e(xd,Nv),e(Ne,Lv),e(Ne,qr),e(qr,Sv),e(qr,Hi),e(Hi,Iv),e(qr,Wv),e(Ne,Rv),e(Ne,Pr),e(Pr,Uv),e(Pr,Ar),e(Ar,Qv),e(Pr,Hv),e(Ne,Vv),T(yo,Ne,null),e(Ne,Kv),e(Ne,nt),T(Or,nt,null),e(nt,Jv),e(nt,xs),e(xs,Gv),e(xs,Vi),e(Vi,Xv),e(xs,Yv),e(xs,zd),e(zd,Zv),e(xs,e1),e(nt,t1),T($o,nt,null),e(nt,s1),e(nt,jd),e(jd,o1),e(nt,n1),T(Nr,nt,null),u(s,Jp,m),u(s,zs,m),e(zs,Do),e(Do,Cd),T(Lr,Cd,null),e(zs,r1),e(zs,qd),e(qd,a1),u(s,Gp,m),u(s,Le,m),T(Sr,Le,null),e(Le,i1),e(Le,Pd),e(Pd,l1),e(Le,d1),e(Le,Ir),e(Ir,c1),e(Ir,Ki),e(Ki,p1),e(Ir,h1),e(Le,u1),e(Le,Wr),e(Wr,f1),e(Wr,Rr),e(Rr,m1),e(Wr,g1),e(Le,_1),T(Fo,Le,null),e(Le,v1),e(Le,He),T(Ur,He,null),e(He,b1),e(He,js),e(js,k1),e(js,Ji),e(Ji,T1),e(js,w1),e(js,Ad),e(Ad,y1),e(js,$1),e(He,D1),T(Bo,He,null),e(He,F1),e(He,Od),e(Od,B1),e(He,M1),T(Qr,He,null),e(He,E1),T(Hr,He,null),u(s,Xp,m),u(s,Cs,m),e(Cs,Mo),e(Mo,Nd),T(Vr,Nd,null),e(Cs,x1),e(Cs,Ld),e(Ld,z1),u(s,Yp,m),u(s,Se,m),T(Kr,Se,null),e(Se,j1),e(Se,qs),e(qs,C1),e(qs,Sd),e(Sd,q1),e(qs,P1),e(qs,Id),e(Id,A1),e(qs,O1),e(Se,N1),e(Se,Jr),e(Jr,L1),e(Jr,Gi),e(Gi,S1),e(Jr,I1),e(Se,W1),e(Se,Gr),e(Gr,R1),e(Gr,Xr),e(Xr,U1),e(Gr,Q1),e(Se,H1),T(Eo,Se,null),e(Se,V1),e(Se,Ve),T(Yr,Ve,null),e(Ve,K1),e(Ve,Ps),e(Ps,J1),e(Ps,Xi),e(Xi,G1),e(Ps,X1),e(Ps,Wd),e(Wd,Y1),e(Ps,Z1),e(Ve,eb),T(xo,Ve,null),e(Ve,tb),e(Ve,Rd),e(Rd,sb),e(Ve,ob),T(Zr,Ve,null),e(Ve,nb),T(ea,Ve,null),u(s,Zp,m),u(s,As,m),e(As,zo),e(zo,Ud),T(ta,Ud,null),e(As,rb),e(As,Qd),e(Qd,ab),u(s,eh,m),u(s,Me,m),T(sa,Me,null),e(Me,ib),e(Me,Hd),e(Hd,lb),e(Me,db),e(Me,oa),e(oa,cb),e(oa,Yi),e(Yi,pb),e(oa,hb),e(Me,ub),e(Me,na),e(na,fb),e(na,ra),e(ra,mb),e(na,gb),e(Me,_b),e(Me,Vd),e(Vd,vb),e(Me,bb),e(Me,qt),e(qt,Kd),e(Kd,aa),e(aa,kb),e(qt,Tb),e(qt,Jd),e(Jd,ia),e(ia,wb),e(qt,yb),e(qt,Gd),e(Gd,la),e(la,$b),e(qt,Db),e(qt,Xd),e(Xd,da),e(da,Fb),e(Me,Bb),e(Me,rt),T(ca,rt,null),e(rt,Mb),e(rt,Os),e(Os,Eb),e(Os,Yd),e(Yd,xb),e(Os,zb),e(Os,Zd),e(Zd,jb),e(Os,Cb),e(rt,qb),T(jo,rt,null),e(rt,Pb),e(rt,ec),e(ec,Ab),e(rt,Ob),T(pa,rt,null),u(s,th,m),u(s,Ns,m),e(Ns,Co),e(Co,tc),T(ha,tc,null),e(Ns,Nb),e(Ns,sc),e(sc,Lb),u(s,sh,m),u(s,Ee,m),T(ua,Ee,null),e(Ee,Sb),e(Ee,fa),e(fa,Ib),e(fa,oc),e(oc,Wb),e(fa,Rb),e(Ee,Ub),e(Ee,ma),e(ma,Qb),e(ma,Zi),e(Zi,Hb),e(ma,Vb),e(Ee,Kb),e(Ee,ga),e(ga,Jb),e(ga,_a),e(_a,Gb),e(ga,Xb),e(Ee,Yb),e(Ee,nc),e(nc,Zb),e(Ee,ek),e(Ee,Pt),e(Pt,rc),e(rc,va),e(va,tk),e(Pt,sk),e(Pt,ac),e(ac,ba),e(ba,ok),e(Pt,nk),e(Pt,ic),e(ic,ka),e(ka,rk),e(Pt,ak),e(Pt,lc),e(lc,Ta),e(Ta,ik),e(Ee,lk),e(Ee,at),T(wa,at,null),e(at,dk),e(at,Ls),e(Ls,ck),e(Ls,dc),e(dc,pk),e(Ls,hk),e(Ls,cc),e(cc,uk),e(Ls,fk),e(at,mk),T(qo,at,null),e(at,gk),e(at,pc),e(pc,_k),e(at,vk),T(ya,at,null),u(s,oh,m),u(s,Ss,m),e(Ss,Po),e(Po,hc),T($a,hc,null),e(Ss,bk),e(Ss,uc),e(uc,kk),u(s,nh,m),u(s,xe,m),T(Da,xe,null),e(xe,Tk),e(xe,fc),e(fc,wk),e(xe,yk),e(xe,Fa),e(Fa,$k),e(Fa,el),e(el,Dk),e(Fa,Fk),e(xe,Bk),e(xe,Ba),e(Ba,Mk),e(Ba,Ma),e(Ma,Ek),e(Ba,xk),e(xe,zk),e(xe,mc),e(mc,jk),e(xe,Ck),e(xe,At),e(At,gc),e(gc,Ea),e(Ea,qk),e(At,Pk),e(At,_c),e(_c,xa),e(xa,Ak),e(At,Ok),e(At,vc),e(vc,za),e(za,Nk),e(At,Lk),e(At,bc),e(bc,ja),e(ja,Sk),e(xe,Ik),e(xe,it),T(Ca,it,null),e(it,Wk),e(it,Is),e(Is,Rk),e(Is,kc),e(kc,Uk),e(Is,Qk),e(Is,Tc),e(Tc,Hk),e(Is,Vk),e(it,Kk),T(Ao,it,null),e(it,Jk),e(it,wc),e(wc,Gk),e(it,Xk),T(qa,it,null),u(s,rh,m),u(s,Ws,m),e(Ws,Oo),e(Oo,yc),T(Pa,yc,null),e(Ws,Yk),e(Ws,$c),e($c,Zk),u(s,ah,m),u(s,ze,m),T(Aa,ze,null),e(ze,eT),e(ze,Dc),e(Dc,tT),e(ze,sT),e(ze,Oa),e(Oa,oT),e(Oa,tl),e(tl,nT),e(Oa,rT),e(ze,aT),e(ze,Na),e(Na,iT),e(Na,La),e(La,lT),e(Na,dT),e(ze,cT),e(ze,Fc),e(Fc,pT),e(ze,hT),e(ze,Ot),e(Ot,Bc),e(Bc,Sa),e(Sa,uT),e(Ot,fT),e(Ot,Mc),e(Mc,Ia),e(Ia,mT),e(Ot,gT),e(Ot,Ec),e(Ec,Wa),e(Wa,_T),e(Ot,vT),e(Ot,xc),e(xc,Ra),e(Ra,bT),e(ze,kT),e(ze,lt),T(Ua,lt,null),e(lt,TT),e(lt,Rs),e(Rs,wT),e(Rs,zc),e(zc,yT),e(Rs,$T),e(Rs,jc),e(jc,DT),e(Rs,FT),e(lt,BT),T(No,lt,null),e(lt,MT),e(lt,Cc),e(Cc,ET),e(lt,xT),T(Qa,lt,null),u(s,ih,m),u(s,Us,m),e(Us,Lo),e(Lo,qc),T(Ha,qc,null),e(Us,zT),e(Us,Pc),e(Pc,jT),u(s,lh,m),u(s,je,m),T(Va,je,null),e(je,CT),e(je,Ac),e(Ac,qT),e(je,PT),e(je,Ka),e(Ka,AT),e(Ka,sl),e(sl,OT),e(Ka,NT),e(je,LT),e(je,Ja),e(Ja,ST),e(Ja,Ga),e(Ga,IT),e(Ja,WT),e(je,RT),e(je,Oc),e(Oc,UT),e(je,QT),e(je,Nt),e(Nt,Nc),e(Nc,Xa),e(Xa,HT),e(Nt,VT),e(Nt,Lc),e(Lc,Ya),e(Ya,KT),e(Nt,JT),e(Nt,Sc),e(Sc,Za),e(Za,GT),e(Nt,XT),e(Nt,Ic),e(Ic,ei),e(ei,YT),e(je,ZT),e(je,dt),T(ti,dt,null),e(dt,ew),e(dt,Qs),e(Qs,tw),e(Qs,Wc),e(Wc,sw),e(Qs,ow),e(Qs,Rc),e(Rc,nw),e(Qs,rw),e(dt,aw),T(So,dt,null),e(dt,iw),e(dt,Uc),e(Uc,lw),e(dt,dw),T(si,dt,null),u(s,dh,m),u(s,Hs,m),e(Hs,Io),e(Io,Qc),T(oi,Qc,null),e(Hs,cw),e(Hs,Hc),e(Hc,pw),u(s,ch,m),u(s,Ce,m),T(ni,Ce,null),e(Ce,hw),e(Ce,Vs),e(Vs,uw),e(Vs,Vc),e(Vc,fw),e(Vs,mw),e(Vs,Kc),e(Kc,gw),e(Vs,_w),e(Ce,vw),e(Ce,ri),e(ri,bw),e(ri,ol),e(ol,kw),e(ri,Tw),e(Ce,ww),e(Ce,ai),e(ai,yw),e(ai,ii),e(ii,$w),e(ai,Dw),e(Ce,Fw),e(Ce,Jc),e(Jc,Bw),e(Ce,Mw),e(Ce,Lt),e(Lt,Gc),e(Gc,li),e(li,Ew),e(Lt,xw),e(Lt,Xc),e(Xc,di),e(di,zw),e(Lt,jw),e(Lt,Yc),e(Yc,ci),e(ci,Cw),e(Lt,qw),e(Lt,Zc),e(Zc,pi),e(pi,Pw),e(Ce,Aw),e(Ce,ct),T(hi,ct,null),e(ct,Ow),e(ct,Ks),e(Ks,Nw),e(Ks,ep),e(ep,Lw),e(Ks,Sw),e(Ks,tp),e(tp,Iw),e(Ks,Ww),e(ct,Rw),T(Wo,ct,null),e(ct,Uw),e(ct,sp),e(sp,Qw),e(ct,Hw),T(ui,ct,null),ph=!0},p(s,[m]){const fi={};m&2&&(fi.$$scope={dirty:m,ctx:s}),to.$set(fi);const op={};m&2&&(op.$$scope={dirty:m,ctx:s}),oo.$set(op);const np={};m&2&&(np.$$scope={dirty:m,ctx:s}),ro.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:s}),io.$set(rp);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:s}),co.$set(mi);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:s}),ho.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:s}),fo.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:s}),mo.$set(lp);const St={};m&2&&(St.$$scope={dirty:m,ctx:s}),_o.$set(St);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:s}),vo.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:s}),ko.$set(cp);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:s}),To.$set(pp);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:s}),yo.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:s}),$o.$set(up);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:s}),Fo.$set(fp);const mp={};m&2&&(mp.$$scope={dirty:m,ctx:s}),Bo.$set(mp);const gi={};m&2&&(gi.$$scope={dirty:m,ctx:s}),Eo.$set(gi);const It={};m&2&&(It.$$scope={dirty:m,ctx:s}),xo.$set(It);const gp={};m&2&&(gp.$$scope={dirty:m,ctx:s}),jo.$set(gp);const _p={};m&2&&(_p.$$scope={dirty:m,ctx:s}),qo.$set(_p);const vp={};m&2&&(vp.$$scope={dirty:m,ctx:s}),Ao.$set(vp);const _i={};m&2&&(_i.$$scope={dirty:m,ctx:s}),No.$set(_i);const bp={};m&2&&(bp.$$scope={dirty:m,ctx:s}),So.$set(bp);const Wt={};m&2&&(Wt.$$scope={dirty:m,ctx:s}),Wo.$set(Wt)},i(s){ph||(w(_.$$.fragment,s),w(X.$$.fragment,s),w(tn.$$.fragment,s),w(sn.$$.fragment,s),w(nn.$$.fragment,s),w(rn.$$.fragment,s),w(an.$$.fragment,s),w(dn.$$.fragment,s),w(cn.$$.fragment,s),w(un.$$.fragment,s),w(fn.$$.fragment,s),w(vn.$$.fragment,s),w(to.$$.fragment,s),w(bn.$$.fragment,s),w(kn.$$.fragment,s),w(Tn.$$.fragment,s),w(Fn.$$.fragment,s),w(oo.$$.fragment,s),w(Bn.$$.fragment,s),w(Mn.$$.fragment,s),w(En.$$.fragment,s),w(xn.$$.fragment,s),w(qn.$$.fragment,s),w(ro.$$.fragment,s),w(Pn.$$.fragment,s),w(An.$$.fragment,s),w(On.$$.fragment,s),w(Nn.$$.fragment,s),w(Ln.$$.fragment,s),w(Sn.$$.fragment,s),w(Un.$$.fragment,s),w(io.$$.fragment,s),w(Qn.$$.fragment,s),w(Hn.$$.fragment,s),w(Vn.$$.fragment,s),w(Xn.$$.fragment,s),w(co.$$.fragment,s),w(Yn.$$.fragment,s),w(Zn.$$.fragment,s),w(er.$$.fragment,s),w(tr.$$.fragment,s),w(rr.$$.fragment,s),w(ho.$$.fragment,s),w(ar.$$.fragment,s),w(ir.$$.fragment,s),w(lr.$$.fragment,s),w(dr.$$.fragment,s),w(fo.$$.fragment,s),w(ur.$$.fragment,s),w(mo.$$.fragment,s),w(fr.$$.fragment,s),w(mr.$$.fragment,s),w(gr.$$.fragment,s),w(_o.$$.fragment,s),w(Tr.$$.fragment,s),w(vo.$$.fragment,s),w(wr.$$.fragment,s),w(yr.$$.fragment,s),w($r.$$.fragment,s),w(Dr.$$.fragment,s),w(ko.$$.fragment,s),w(Er.$$.fragment,s),w(To.$$.fragment,s),w(xr.$$.fragment,s),w(zr.$$.fragment,s),w(jr.$$.fragment,s),w(Cr.$$.fragment,s),w(yo.$$.fragment,s),w(Or.$$.fragment,s),w($o.$$.fragment,s),w(Nr.$$.fragment,s),w(Lr.$$.fragment,s),w(Sr.$$.fragment,s),w(Fo.$$.fragment,s),w(Ur.$$.fragment,s),w(Bo.$$.fragment,s),w(Qr.$$.fragment,s),w(Hr.$$.fragment,s),w(Vr.$$.fragment,s),w(Kr.$$.fragment,s),w(Eo.$$.fragment,s),w(Yr.$$.fragment,s),w(xo.$$.fragment,s),w(Zr.$$.fragment,s),w(ea.$$.fragment,s),w(ta.$$.fragment,s),w(sa.$$.fragment,s),w(ca.$$.fragment,s),w(jo.$$.fragment,s),w(pa.$$.fragment,s),w(ha.$$.fragment,s),w(ua.$$.fragment,s),w(wa.$$.fragment,s),w(qo.$$.fragment,s),w(ya.$$.fragment,s),w($a.$$.fragment,s),w(Da.$$.fragment,s),w(Ca.$$.fragment,s),w(Ao.$$.fragment,s),w(qa.$$.fragment,s),w(Pa.$$.fragment,s),w(Aa.$$.fragment,s),w(Ua.$$.fragment,s),w(No.$$.fragment,s),w(Qa.$$.fragment,s),w(Ha.$$.fragment,s),w(Va.$$.fragment,s),w(ti.$$.fragment,s),w(So.$$.fragment,s),w(si.$$.fragment,s),w(oi.$$.fragment,s),w(ni.$$.fragment,s),w(hi.$$.fragment,s),w(Wo.$$.fragment,s),w(ui.$$.fragment,s),ph=!0)},o(s){y(_.$$.fragment,s),y(X.$$.fragment,s),y(tn.$$.fragment,s),y(sn.$$.fragment,s),y(nn.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(un.$$.fragment,s),y(fn.$$.fragment,s),y(vn.$$.fragment,s),y(to.$$.fragment,s),y(bn.$$.fragment,s),y(kn.$$.fragment,s),y(Tn.$$.fragment,s),y(Fn.$$.fragment,s),y(oo.$$.fragment,s),y(Bn.$$.fragment,s),y(Mn.$$.fragment,s),y(En.$$.fragment,s),y(xn.$$.fragment,s),y(qn.$$.fragment,s),y(ro.$$.fragment,s),y(Pn.$$.fragment,s),y(An.$$.fragment,s),y(On.$$.fragment,s),y(Nn.$$.fragment,s),y(Ln.$$.fragment,s),y(Sn.$$.fragment,s),y(Un.$$.fragment,s),y(io.$$.fragment,s),y(Qn.$$.fragment,s),y(Hn.$$.fragment,s),y(Vn.$$.fragment,s),y(Xn.$$.fragment,s),y(co.$$.fragment,s),y(Yn.$$.fragment,s),y(Zn.$$.fragment,s),y(er.$$.fragment,s),y(tr.$$.fragment,s),y(rr.$$.fragment,s),y(ho.$$.fragment,s),y(ar.$$.fragment,s),y(ir.$$.fragment,s),y(lr.$$.fragment,s),y(dr.$$.fragment,s),y(fo.$$.fragment,s),y(ur.$$.fragment,s),y(mo.$$.fragment,s),y(fr.$$.fragment,s),y(mr.$$.fragment,s),y(gr.$$.fragment,s),y(_o.$$.fragment,s),y(Tr.$$.fragment,s),y(vo.$$.fragment,s),y(wr.$$.fragment,s),y(yr.$$.fragment,s),y($r.$$.fragment,s),y(Dr.$$.fragment,s),y(ko.$$.fragment,s),y(Er.$$.fragment,s),y(To.$$.fragment,s),y(xr.$$.fragment,s),y(zr.$$.fragment,s),y(jr.$$.fragment,s),y(Cr.$$.fragment,s),y(yo.$$.fragment,s),y(Or.$$.fragment,s),y($o.$$.fragment,s),y(Nr.$$.fragment,s),y(Lr.$$.fragment,s),y(Sr.$$.fragment,s),y(Fo.$$.fragment,s),y(Ur.$$.fragment,s),y(Bo.$$.fragment,s),y(Qr.$$.fragment,s),y(Hr.$$.fragment,s),y(Vr.$$.fragment,s),y(Kr.$$.fragment,s),y(Eo.$$.fragment,s),y(Yr.$$.fragment,s),y(xo.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(ta.$$.fragment,s),y(sa.$$.fragment,s),y(ca.$$.fragment,s),y(jo.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(ua.$$.fragment,s),y(wa.$$.fragment,s),y(qo.$$.fragment,s),y(ya.$$.fragment,s),y($a.$$.fragment,s),y(Da.$$.fragment,s),y(Ca.$$.fragment,s),y(Ao.$$.fragment,s),y(qa.$$.fragment,s),y(Pa.$$.fragment,s),y(Aa.$$.fragment,s),y(Ua.$$.fragment,s),y(No.$$.fragment,s),y(Qa.$$.fragment,s),y(Ha.$$.fragment,s),y(Va.$$.fragment,s),y(ti.$$.fragment,s),y(So.$$.fragment,s),y(si.$$.fragment,s),y(oi.$$.fragment,s),y(ni.$$.fragment,s),y(hi.$$.fragment,s),y(Wo.$$.fragment,s),y(ui.$$.fragment,s),ph=!1},d(s){t(p),s&&t(F),s&&t(g),$(_),s&&t(V),s&&t(E),$(X),s&&t(ae),s&&t(N),s&&t(ie),s&&t(ee),s&&t(le),s&&t(L),s&&t(q),s&&t(te),s&&t(de),s&&t(h),s&&t(wp),s&&t(bt),s&&t(yp),s&&t(as),$(tn),s&&t($p),s&&t(Ke),$(sn),$(nn),s&&t(Dp),s&&t(ls),$(rn),s&&t(Fp),s&&t(_t),$(an),s&&t(Bp),s&&t(ds),$(dn),s&&t(Mp),s&&t(vt),$(cn),s&&t(Ep),s&&t(cs),$(un),s&&t(xp),s&&t(Je),$(fn),$(vn),$(to),$(bn),s&&t(zp),s&&t(hs),$(kn),s&&t(jp),s&&t(Ge),$(Tn),$(Fn),$(oo),$(Bn),$(Mn),s&&t(Cp),s&&t(fs),$(En),s&&t(qp),s&&t(Xe),$(xn),$(qn),$(ro),$(Pn),$(An),$(On),$(Nn),s&&t(Pp),s&&t(gs),$(Ln),s&&t(Ap),s&&t(Ye),$(Sn),$(Un),$(io),$(Qn),s&&t(Op),s&&t(vs),$(Hn),s&&t(Np),s&&t(Ze),$(Vn),$(Xn),$(co),$(Yn),$(Zn),s&&t(Lp),s&&t(ks),$(er),s&&t(Sp),s&&t(et),$(tr),$(rr),$(ho),$(ar),$(ir),s&&t(Ip),s&&t(ys),$(lr),s&&t(Wp),s&&t(Pe),$(dr),$(fo),$(ur),$(mo),$(fr),s&&t(Rp),s&&t(Ds),$(mr),s&&t(Up),s&&t(Ae),$(gr),$(_o),$(Tr),$(vo),$(wr),$(yr),s&&t(Qp),s&&t(Bs),$($r),s&&t(Hp),s&&t(Oe),$(Dr),$(ko),$(Er),$(To),$(xr),$(zr),s&&t(Vp),s&&t(Es),$(jr),s&&t(Kp),s&&t(Ne),$(Cr),$(yo),$(Or),$($o),$(Nr),s&&t(Jp),s&&t(zs),$(Lr),s&&t(Gp),s&&t(Le),$(Sr),$(Fo),$(Ur),$(Bo),$(Qr),$(Hr),s&&t(Xp),s&&t(Cs),$(Vr),s&&t(Yp),s&&t(Se),$(Kr),$(Eo),$(Yr),$(xo),$(Zr),$(ea),s&&t(Zp),s&&t(As),$(ta),s&&t(eh),s&&t(Me),$(sa),$(ca),$(jo),$(pa),s&&t(th),s&&t(Ns),$(ha),s&&t(sh),s&&t(Ee),$(ua),$(wa),$(qo),$(ya),s&&t(oh),s&&t(Ss),$($a),s&&t(nh),s&&t(xe),$(Da),$(Ca),$(Ao),$(qa),s&&t(rh),s&&t(Ws),$(Pa),s&&t(ah),s&&t(ze),$(Aa),$(Ua),$(No),$(Qa),s&&t(ih),s&&t(Us),$(Ha),s&&t(lh),s&&t(je),$(Va),$(ti),$(So),$(si),s&&t(dh),s&&t(Hs),$(oi),s&&t(ch),s&&t(Ce),$(ni),$(hi),$(Wo),$(ui)}}}const ZF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function e0(j){return BF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class a0 extends yF{constructor(p){super();$F(this,p,e0,YF,DF,{})}}export{a0 as default,ZF as metadata};
