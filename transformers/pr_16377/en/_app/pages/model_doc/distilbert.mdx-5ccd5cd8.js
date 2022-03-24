import{S as yF,i as $F,s as DF,e as o,k as l,w as b,t as a,M as FF,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as T,q as w,o as y,B as $,v as BF}from"../../chunks/vendor-6b77c823.js";import{T as ge}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-abef54e3.js";import{C as re}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";function MF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
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
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function PF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function qF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function AF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function OF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function NF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function IF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function LF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function SF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function WF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function RF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function UF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de;return{c(){p=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),D=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),ce=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=o("p"),G=a("This second option is useful when using "),L=o("code"),X=a("tf.keras.Model.fit"),pe=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=o("code"),he=a("model(inputs)"),ae=a("."),N=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=o("ul"),z=o("li"),ue=a("a single Tensor with "),W=o("code"),se=a("input_ids"),fe=a(" only and nothing else: "),R=o("code"),ie=a("model(inputs_ids)"),ee=l(),A=o("li"),le=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),oe=a("model([input_ids, attention_mask])"),me=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=o("code"),de=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);F=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var J=r(v);D=n(J,"LI",{});var _e=r(D);_=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=d(J),B=n(J,"LI",{});var Te=r(B);ce=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),J.forEach(t),K=d(h),E=n(h,"P",{});var O=r(E);G=i(O,"This second option is useful when using "),L=n(O,"CODE",{});var ve=r(L);X=i(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n(O,"CODE",{});var we=r(S);he=i(we,"model(inputs)"),we.forEach(t),ae=i(O,"."),O.forEach(t),N=d(h),q=n(h,"P",{});var ye=r(q);Y=i(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),V=d(h),x=n(h,"UL",{});var C=r(x);z=n(C,"LI",{});var H=r(z);ue=i(H,"a single Tensor with "),W=n(H,"CODE",{});var $e=r(W);se=i($e,"input_ids"),$e.forEach(t),fe=i(H," only and nothing else: "),R=n(H,"CODE",{});var De=r(R);ie=i(De,"model(inputs_ids)"),De.forEach(t),H.forEach(t),ee=d(C),A=n(C,"LI",{});var Z=r(A);le=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Z,"CODE",{});var Fe=r(I);oe=i(Fe,"model([input_ids, attention_mask])"),Fe.forEach(t),Z.forEach(t),me=d(C),P=n(C,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=n(ne,"CODE",{});var Be=r(U);de=i(Be,'model({"input_ids": input_ids})'),Be.forEach(t),ne.forEach(t),C.forEach(t)},m(h,M){u(h,p,M),e(p,F),u(h,g,M),u(h,v,M),e(v,D),e(D,_),e(v,f),e(v,B),e(B,ce),u(h,K,M),u(h,E,M),e(E,G),e(E,L),e(L,X),e(E,pe),e(E,S),e(S,he),e(E,ae),u(h,N,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,ue),e(z,W),e(W,se),e(z,fe),e(z,R),e(R,ie),e(x,ee),e(x,A),e(A,le),e(A,I),e(I,oe),e(x,me),e(x,P),e(P,te),e(P,U),e(U,de)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(K),h&&t(E),h&&t(N),h&&t(q),h&&t(V),h&&t(x)}}}function HF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function QF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function KF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);F=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),D=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function VF(j){let p,F,g,v,D;return{c(){p=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),D=a(`
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
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,F),e(p,g),e(g,v),e(p,D)},d(_){_&&t(p)}}}function YF(j){let p,F,g,v,D,_,f,B,ce,K,E,G,L,X,pe,S,he,ae,N,q,Y,V,x,z,ue,W,se,fe,R,ie,ee,A,le,I,oe,me,P,te,U,de,h,M,J,_e,Te,O,ve,we,ye,C,H,$e,De,Z,Fe,ne,Be,Tu,wp,bt,wu,Yo,yu,$u,Zo,Du,Fu,en,Bu,Mu,yp,as,Js,Fl,tn,Eu,Bl,xu,$p,Ve,sn,zu,Ct,ju,vi,Cu,Pu,bi,qu,Au,on,Ou,Nu,Iu,is,Lu,ki,Su,Wu,Ti,Ru,Uu,Hu,Ml,Qu,Ku,nn,Dp,ls,Gs,El,rn,Vu,xl,Ju,Fp,_t,an,Gu,zl,Xu,Yu,Xs,wi,Zu,ef,yi,tf,sf,of,ln,nf,$i,rf,af,Bp,ds,Ys,jl,dn,lf,Cl,df,Mp,vt,cn,cf,pn,pf,Pl,hf,uf,ff,Zs,Di,mf,gf,Fi,_f,vf,bf,hn,kf,Bi,Tf,wf,Ep,cs,eo,ql,un,yf,Al,$f,xp,Je,fn,Df,Ol,Ff,Bf,mn,Mf,Mi,Ef,xf,zf,gn,jf,_n,Cf,Pf,qf,tt,vn,Af,ps,Of,Ei,Nf,If,Nl,Lf,Sf,Wf,to,Rf,Il,Uf,Hf,bn,zp,hs,so,Ll,kn,Qf,Sl,Kf,jp,Ge,Tn,Vf,wn,Jf,Wl,Gf,Xf,Yf,yn,Zf,xi,em,tm,sm,$n,om,Dn,nm,rm,am,Se,Fn,im,us,lm,zi,dm,cm,Rl,pm,hm,um,oo,fm,Ul,mm,gm,Bn,_m,Mn,Cp,fs,no,Hl,En,vm,Ql,bm,Pp,Xe,xn,km,Kl,Tm,wm,zn,ym,ji,$m,Dm,Fm,jn,Bm,Cn,Mm,Em,xm,ke,Pn,zm,ms,jm,Ci,Cm,Pm,Vl,qm,Am,Om,ro,Nm,Jl,Im,Lm,qn,Sm,An,Wm,Gl,Rm,Um,On,Hm,Nn,qp,gs,ao,Xl,In,Qm,Yl,Km,Ap,Ye,Ln,Vm,Zl,Jm,Gm,Sn,Xm,Pi,Ym,Zm,eg,Wn,tg,Rn,sg,og,ng,st,Un,rg,_s,ag,qi,ig,lg,ed,dg,cg,pg,io,hg,td,ug,fg,Hn,Op,vs,lo,sd,Qn,mg,od,gg,Np,Ze,Kn,_g,nd,vg,bg,Vn,kg,Ai,Tg,wg,yg,Jn,$g,Gn,Dg,Fg,Bg,We,Xn,Mg,bs,Eg,Oi,xg,zg,rd,jg,Cg,Pg,co,qg,ad,Ag,Og,Yn,Ng,Zn,Ip,ks,po,id,er,Ig,ld,Lg,Lp,et,tr,Sg,Ts,Wg,dd,Rg,Ug,cd,Hg,Qg,Kg,sr,Vg,Ni,Jg,Gg,Xg,or,Yg,nr,Zg,e_,t_,Re,rr,s_,ws,o_,Ii,n_,r_,pd,a_,i_,l_,ho,d_,hd,c_,p_,ar,h_,ir,Sp,ys,uo,ud,lr,u_,fd,f_,Wp,qe,dr,m_,md,g_,__,cr,v_,Li,b_,k_,T_,pr,w_,hr,y_,$_,D_,fo,F_,ot,ur,B_,$s,M_,Si,E_,x_,gd,z_,j_,C_,mo,P_,_d,q_,A_,fr,Rp,Ds,go,vd,mr,O_,bd,N_,Up,Ae,gr,I_,_r,L_,kd,S_,W_,R_,vr,U_,Wi,H_,Q_,K_,br,V_,kr,J_,G_,X_,_o,Y_,Ue,Tr,Z_,Fs,ev,Ri,tv,sv,Td,ov,nv,rv,vo,av,wd,iv,lv,wr,dv,yr,Hp,Bs,bo,yd,$r,cv,$d,pv,Qp,Oe,Dr,hv,Dd,uv,fv,Fr,mv,Ui,gv,_v,vv,Br,bv,Mr,kv,Tv,wv,ko,yv,He,Er,$v,Ms,Dv,Hi,Fv,Bv,Fd,Mv,Ev,xv,To,zv,Bd,jv,Cv,xr,Pv,zr,Kp,Es,wo,Md,jr,qv,Ed,Av,Vp,Ne,Cr,Ov,xd,Nv,Iv,Pr,Lv,Qi,Sv,Wv,Rv,qr,Uv,Ar,Hv,Qv,Kv,yo,Vv,nt,Or,Jv,xs,Gv,Ki,Xv,Yv,zd,Zv,eb,tb,$o,sb,jd,ob,nb,Nr,Jp,zs,Do,Cd,Ir,rb,Pd,ab,Gp,Ie,Lr,ib,qd,lb,db,Sr,cb,Vi,pb,hb,ub,Wr,fb,Rr,mb,gb,_b,Fo,vb,Qe,Ur,bb,js,kb,Ji,Tb,wb,Ad,yb,$b,Db,Bo,Fb,Od,Bb,Mb,Hr,Eb,Qr,Xp,Cs,Mo,Nd,Kr,xb,Id,zb,Yp,Le,Vr,jb,Ps,Cb,Ld,Pb,qb,Sd,Ab,Ob,Nb,Jr,Ib,Gi,Lb,Sb,Wb,Gr,Rb,Xr,Ub,Hb,Qb,Eo,Kb,Ke,Yr,Vb,qs,Jb,Xi,Gb,Xb,Wd,Yb,Zb,ek,xo,tk,Rd,sk,ok,Zr,nk,ea,Zp,As,zo,Ud,ta,rk,Hd,ak,eh,Me,sa,ik,Qd,lk,dk,oa,ck,Yi,pk,hk,uk,na,fk,ra,mk,gk,_k,Kd,vk,bk,Pt,Vd,aa,kk,Tk,Jd,ia,wk,yk,Gd,la,$k,Dk,Xd,da,Fk,Bk,rt,ca,Mk,Os,Ek,Yd,xk,zk,Zd,jk,Ck,Pk,jo,qk,ec,Ak,Ok,pa,th,Ns,Co,tc,ha,Nk,sc,Ik,sh,Ee,ua,Lk,fa,Sk,oc,Wk,Rk,Uk,ma,Hk,Zi,Qk,Kk,Vk,ga,Jk,_a,Gk,Xk,Yk,nc,Zk,eT,qt,rc,va,tT,sT,ac,ba,oT,nT,ic,ka,rT,aT,lc,Ta,iT,lT,at,wa,dT,Is,cT,dc,pT,hT,cc,uT,fT,mT,Po,gT,pc,_T,vT,ya,oh,Ls,qo,hc,$a,bT,uc,kT,nh,xe,Da,TT,fc,wT,yT,Fa,$T,el,DT,FT,BT,Ba,MT,Ma,ET,xT,zT,mc,jT,CT,At,gc,Ea,PT,qT,_c,xa,AT,OT,vc,za,NT,IT,bc,ja,LT,ST,it,Ca,WT,Ss,RT,kc,UT,HT,Tc,QT,KT,VT,Ao,JT,wc,GT,XT,Pa,rh,Ws,Oo,yc,qa,YT,$c,ZT,ah,ze,Aa,ew,Dc,tw,sw,Oa,ow,tl,nw,rw,aw,Na,iw,Ia,lw,dw,cw,Fc,pw,hw,Ot,Bc,La,uw,fw,Mc,Sa,mw,gw,Ec,Wa,_w,vw,xc,Ra,bw,kw,lt,Ua,Tw,Rs,ww,zc,yw,$w,jc,Dw,Fw,Bw,No,Mw,Cc,Ew,xw,Ha,ih,Us,Io,Pc,Qa,zw,qc,jw,lh,je,Ka,Cw,Ac,Pw,qw,Va,Aw,sl,Ow,Nw,Iw,Ja,Lw,Ga,Sw,Ww,Rw,Oc,Uw,Hw,Nt,Nc,Xa,Qw,Kw,Ic,Ya,Vw,Jw,Lc,Za,Gw,Xw,Sc,ei,Yw,Zw,dt,ti,e1,Hs,t1,Wc,s1,o1,Rc,n1,r1,a1,Lo,i1,Uc,l1,d1,si,dh,Qs,So,Hc,oi,c1,Qc,p1,ch,Ce,ni,h1,Ks,u1,Kc,f1,m1,Vc,g1,_1,v1,ri,b1,ol,k1,T1,w1,ai,y1,ii,$1,D1,F1,Jc,B1,M1,It,Gc,li,E1,x1,Xc,di,z1,j1,Yc,ci,C1,P1,Zc,pi,q1,A1,ct,hi,O1,Vs,N1,ep,I1,L1,tp,S1,W1,R1,Wo,U1,sp,H1,Q1,ui,ph;return _=new be({}),X=new be({}),tn=new be({}),sn=new Q({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new re({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new be({}),an=new Q({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new be({}),cn=new Q({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new be({}),fn=new Q({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L457",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Q({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L529",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new be({}),Tn=new Q({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L585",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L627",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
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
`}}),En=new be({}),xn=new Q({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L691",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L725",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new ge({props:{$$slots:{default:[xF]},$$scope:{ctx:j}}}),qn=new re({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),In=new be({}),Ln=new Q({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L1021",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Un=new Q({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L1053",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new ge({props:{$$slots:{default:[zF]},$$scope:{ctx:j}}}),Hn=new re({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qn=new be({}),Kn=new Q({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L926",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new Q({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L958",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
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
`}}),er=new be({}),tr=new Q({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:": PretrainedConfig"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L809",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rr=new Q({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_distilbert.py#L841",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
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
`}}),lr=new be({}),dr=new Q({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L538",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new ge({props:{$$slots:{default:[PF]},$$scope:{ctx:j}}}),ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L543",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new ge({props:{$$slots:{default:[qF]},$$scope:{ctx:j}}}),fr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),mr=new be({}),gr=new Q({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L638",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_o=new ge({props:{$$slots:{default:[AF]},$$scope:{ctx:j}}}),Tr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L658",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
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
`}}),$r=new be({}),Dr=new Q({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L742",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new ge({props:{$$slots:{default:[NF]},$$scope:{ctx:j}}}),Er=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L759",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),To=new ge({props:{$$slots:{default:[IF]},$$scope:{ctx:j}}}),xr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
`}}),jr=new be({}),Cr=new Q({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L933",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new ge({props:{$$slots:{default:[LF]},$$scope:{ctx:j}}}),Or=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L959",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new ge({props:{$$slots:{default:[SF]},$$scope:{ctx:j}}}),Nr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ir=new be({}),Lr=new Q({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L843",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new ge({props:{$$slots:{default:[WF]},$$scope:{ctx:j}}}),Ur=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L854",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new ge({props:{$$slots:{default:[RF]},$$scope:{ctx:j}}}),Hr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
`}}),Qr=new re({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Kr=new be({}),Vr=new Q({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1075",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new ge({props:{$$slots:{default:[UF]},$$scope:{ctx:j}}}),Yr=new Q({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1086",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new ge({props:{$$slots:{default:[HF]},$$scope:{ctx:j}}}),Zr=new re({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
`}}),ta=new be({}),sa=new Q({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L523",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ca=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),jo=new ge({props:{$$slots:{default:[QF]},$$scope:{ctx:j}}}),pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),ha=new be({}),ua=new Q({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L596",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wa=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new ge({props:{$$slots:{default:[KF]},$$scope:{ctx:j}}}),ya=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$a=new be({}),Da=new Q({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L665",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ca=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new ge({props:{$$slots:{default:[VF]},$$scope:{ctx:j}}}),Pa=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qa=new be({}),Aa=new Q({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L745",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ua=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new ge({props:{$$slots:{default:[JF]},$$scope:{ctx:j}}}),Ha=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Qa=new be({}),Ka=new Q({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L811",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ti=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new ge({props:{$$slots:{default:[GF]},$$scope:{ctx:j}}}),si=new re({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),oi=new be({}),ni=new Q({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L881",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hi=new Q({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16377/src/transformers/models/distilbert/modeling_flax_distilbert.py#L446",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16377/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16377/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16377/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=o("meta"),F=l(),g=o("h1"),v=o("a"),D=o("span"),b(_.$$.fragment),f=l(),B=o("span"),ce=a("DistilBERT"),K=l(),E=o("h2"),G=o("a"),L=o("span"),b(X.$$.fragment),pe=l(),S=o("span"),he=a("Overview"),ae=l(),N=o("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),V=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),ue=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),fe=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ie=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),le=l(),I=o("p"),oe=o("em"),me=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=o("p"),U=a("Tips:"),de=l(),h=o("ul"),M=o("li"),J=a("DistilBERT doesn\u2019t have "),_e=o("code"),Te=a("token_type_ids"),O=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=o("code"),we=a("tokenizer.sep_token"),ye=a(" (or "),C=o("code"),H=a("[SEP]"),$e=a(")."),De=l(),Z=o("li"),Fe=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Be=a("position_ids"),Tu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),wp=l(),bt=o("p"),wu=a("This model was contributed by "),Yo=o("a"),yu=a("victorsanh"),$u=a(`. This model jax version was
contributed by `),Zo=o("a"),Du=a("kamalkraj"),Fu=a(". The original code can be found "),en=o("a"),Bu=a("here"),Mu=a("."),yp=l(),as=o("h2"),Js=o("a"),Fl=o("span"),b(tn.$$.fragment),Eu=l(),Bl=o("span"),xu=a("DistilBertConfig"),$p=l(),Ve=o("div"),b(sn.$$.fragment),zu=l(),Ct=o("p"),ju=a("This is the configuration class to store the configuration of a "),vi=o("a"),Cu=a("DistilBertModel"),Pu=a(" or a "),bi=o("a"),qu=a("TFDistilBertModel"),Au=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=o("a"),Ou=a("distilbert-base-uncased"),Nu=a(" architecture."),Iu=l(),is=o("p"),Lu=a("Configuration objects inherit from "),ki=o("a"),Su=a("PretrainedConfig"),Wu=a(` and can be used to control the model outputs. Read the
documentation from `),Ti=o("a"),Ru=a("PretrainedConfig"),Uu=a(" for more information."),Hu=l(),Ml=o("p"),Qu=a("Examples:"),Ku=l(),b(nn.$$.fragment),Dp=l(),ls=o("h2"),Gs=o("a"),El=o("span"),b(rn.$$.fragment),Vu=l(),xl=o("span"),Ju=a("DistilBertTokenizer"),Fp=l(),_t=o("div"),b(an.$$.fragment),Gu=l(),zl=o("p"),Xu=a("Construct a DistilBERT tokenizer."),Yu=l(),Xs=o("p"),wi=o("a"),Zu=a("DistilBertTokenizer"),ef=a(" is identical to "),yi=o("a"),tf=a("BertTokenizer"),sf=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),of=l(),ln=o("p"),nf=a("Refer to superclass "),$i=o("a"),rf=a("BertTokenizer"),af=a(" for usage examples and documentation concerning parameters."),Bp=l(),ds=o("h2"),Ys=o("a"),jl=o("span"),b(dn.$$.fragment),lf=l(),Cl=o("span"),df=a("DistilBertTokenizerFast"),Mp=l(),vt=o("div"),b(cn.$$.fragment),cf=l(),pn=o("p"),pf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Pl=o("em"),hf=a("tokenizers"),uf=a(" library)."),ff=l(),Zs=o("p"),Di=o("a"),mf=a("DistilBertTokenizerFast"),gf=a(" is identical to "),Fi=o("a"),_f=a("BertTokenizerFast"),vf=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),bf=l(),hn=o("p"),kf=a("Refer to superclass "),Bi=o("a"),Tf=a("BertTokenizerFast"),wf=a(" for usage examples and documentation concerning parameters."),Ep=l(),cs=o("h2"),eo=o("a"),ql=o("span"),b(un.$$.fragment),yf=l(),Al=o("span"),$f=a("DistilBertModel"),xp=l(),Je=o("div"),b(fn.$$.fragment),Df=l(),Ol=o("p"),Ff=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),Bf=l(),mn=o("p"),Mf=a("This model inherits from "),Mi=o("a"),Ef=a("PreTrainedModel"),xf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf=l(),gn=o("p"),jf=a("This model is also a PyTorch "),_n=o("a"),Cf=a("torch.nn.Module"),Pf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=l(),tt=o("div"),b(vn.$$.fragment),Af=l(),ps=o("p"),Of=a("The "),Ei=o("a"),Nf=a("DistilBertModel"),If=a(" forward method, overrides the "),Nl=o("code"),Lf=a("__call__"),Sf=a(" special method."),Wf=l(),b(to.$$.fragment),Rf=l(),Il=o("p"),Uf=a("Example:"),Hf=l(),b(bn.$$.fragment),zp=l(),hs=o("h2"),so=o("a"),Ll=o("span"),b(kn.$$.fragment),Qf=l(),Sl=o("span"),Kf=a("DistilBertForMaskedLM"),jp=l(),Ge=o("div"),b(Tn.$$.fragment),Vf=l(),wn=o("p"),Jf=a("DistilBert Model with a "),Wl=o("code"),Gf=a("masked language modeling"),Xf=a(" head on top."),Yf=l(),yn=o("p"),Zf=a("This model inherits from "),xi=o("a"),em=a("PreTrainedModel"),tm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sm=l(),$n=o("p"),om=a("This model is also a PyTorch "),Dn=o("a"),nm=a("torch.nn.Module"),rm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=l(),Se=o("div"),b(Fn.$$.fragment),im=l(),us=o("p"),lm=a("The "),zi=o("a"),dm=a("DistilBertForMaskedLM"),cm=a(" forward method, overrides the "),Rl=o("code"),pm=a("__call__"),hm=a(" special method."),um=l(),b(oo.$$.fragment),fm=l(),Ul=o("p"),mm=a("Example:"),gm=l(),b(Bn.$$.fragment),_m=l(),b(Mn.$$.fragment),Cp=l(),fs=o("h2"),no=o("a"),Hl=o("span"),b(En.$$.fragment),vm=l(),Ql=o("span"),bm=a("DistilBertForSequenceClassification"),Pp=l(),Xe=o("div"),b(xn.$$.fragment),km=l(),Kl=o("p"),Tm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wm=l(),zn=o("p"),ym=a("This model inherits from "),ji=o("a"),$m=a("PreTrainedModel"),Dm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fm=l(),jn=o("p"),Bm=a("This model is also a PyTorch "),Cn=o("a"),Mm=a("torch.nn.Module"),Em=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xm=l(),ke=o("div"),b(Pn.$$.fragment),zm=l(),ms=o("p"),jm=a("The "),Ci=o("a"),Cm=a("DistilBertForSequenceClassification"),Pm=a(" forward method, overrides the "),Vl=o("code"),qm=a("__call__"),Am=a(" special method."),Om=l(),b(ro.$$.fragment),Nm=l(),Jl=o("p"),Im=a("Example of single-label classification:"),Lm=l(),b(qn.$$.fragment),Sm=l(),b(An.$$.fragment),Wm=l(),Gl=o("p"),Rm=a("Example of multi-label classification:"),Um=l(),b(On.$$.fragment),Hm=l(),b(Nn.$$.fragment),qp=l(),gs=o("h2"),ao=o("a"),Xl=o("span"),b(In.$$.fragment),Qm=l(),Yl=o("span"),Km=a("DistilBertForMultipleChoice"),Ap=l(),Ye=o("div"),b(Ln.$$.fragment),Vm=l(),Zl=o("p"),Jm=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gm=l(),Sn=o("p"),Xm=a("This model inherits from "),Pi=o("a"),Ym=a("PreTrainedModel"),Zm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=l(),Wn=o("p"),tg=a("This model is also a PyTorch "),Rn=o("a"),sg=a("torch.nn.Module"),og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ng=l(),st=o("div"),b(Un.$$.fragment),rg=l(),_s=o("p"),ag=a("The "),qi=o("a"),ig=a("DistilBertForMultipleChoice"),lg=a(" forward method, overrides the "),ed=o("code"),dg=a("__call__"),cg=a(" special method."),pg=l(),b(io.$$.fragment),hg=l(),td=o("p"),ug=a("Examples:"),fg=l(),b(Hn.$$.fragment),Op=l(),vs=o("h2"),lo=o("a"),sd=o("span"),b(Qn.$$.fragment),mg=l(),od=o("span"),gg=a("DistilBertForTokenClassification"),Np=l(),Ze=o("div"),b(Kn.$$.fragment),_g=l(),nd=o("p"),vg=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),bg=l(),Vn=o("p"),kg=a("This model inherits from "),Ai=o("a"),Tg=a("PreTrainedModel"),wg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yg=l(),Jn=o("p"),$g=a("This model is also a PyTorch "),Gn=o("a"),Dg=a("torch.nn.Module"),Fg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bg=l(),We=o("div"),b(Xn.$$.fragment),Mg=l(),bs=o("p"),Eg=a("The "),Oi=o("a"),xg=a("DistilBertForTokenClassification"),zg=a(" forward method, overrides the "),rd=o("code"),jg=a("__call__"),Cg=a(" special method."),Pg=l(),b(co.$$.fragment),qg=l(),ad=o("p"),Ag=a("Example:"),Og=l(),b(Yn.$$.fragment),Ng=l(),b(Zn.$$.fragment),Ip=l(),ks=o("h2"),po=o("a"),id=o("span"),b(er.$$.fragment),Ig=l(),ld=o("span"),Lg=a("DistilBertForQuestionAnswering"),Lp=l(),et=o("div"),b(tr.$$.fragment),Sg=l(),Ts=o("p"),Wg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=o("code"),Rg=a("span start logits"),Ug=a(" and "),cd=o("code"),Hg=a("span end logits"),Qg=a(")."),Kg=l(),sr=o("p"),Vg=a("This model inherits from "),Ni=o("a"),Jg=a("PreTrainedModel"),Gg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xg=l(),or=o("p"),Yg=a("This model is also a PyTorch "),nr=o("a"),Zg=a("torch.nn.Module"),e_=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=l(),Re=o("div"),b(rr.$$.fragment),s_=l(),ws=o("p"),o_=a("The "),Ii=o("a"),n_=a("DistilBertForQuestionAnswering"),r_=a(" forward method, overrides the "),pd=o("code"),a_=a("__call__"),i_=a(" special method."),l_=l(),b(ho.$$.fragment),d_=l(),hd=o("p"),c_=a("Example:"),p_=l(),b(ar.$$.fragment),h_=l(),b(ir.$$.fragment),Sp=l(),ys=o("h2"),uo=o("a"),ud=o("span"),b(lr.$$.fragment),u_=l(),fd=o("span"),f_=a("TFDistilBertModel"),Wp=l(),qe=o("div"),b(dr.$$.fragment),m_=l(),md=o("p"),g_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),__=l(),cr=o("p"),v_=a("This model inherits from "),Li=o("a"),b_=a("TFPreTrainedModel"),k_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T_=l(),pr=o("p"),w_=a("This model is also a "),hr=o("a"),y_=a("tf.keras.Model"),$_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D_=l(),b(fo.$$.fragment),F_=l(),ot=o("div"),b(ur.$$.fragment),B_=l(),$s=o("p"),M_=a("The "),Si=o("a"),E_=a("TFDistilBertModel"),x_=a(" forward method, overrides the "),gd=o("code"),z_=a("__call__"),j_=a(" special method."),C_=l(),b(mo.$$.fragment),P_=l(),_d=o("p"),q_=a("Example:"),A_=l(),b(fr.$$.fragment),Rp=l(),Ds=o("h2"),go=o("a"),vd=o("span"),b(mr.$$.fragment),O_=l(),bd=o("span"),N_=a("TFDistilBertForMaskedLM"),Up=l(),Ae=o("div"),b(gr.$$.fragment),I_=l(),_r=o("p"),L_=a("DistilBert Model with a "),kd=o("code"),S_=a("masked language modeling"),W_=a(" head on top."),R_=l(),vr=o("p"),U_=a("This model inherits from "),Wi=o("a"),H_=a("TFPreTrainedModel"),Q_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=l(),br=o("p"),V_=a("This model is also a "),kr=o("a"),J_=a("tf.keras.Model"),G_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=l(),b(_o.$$.fragment),Y_=l(),Ue=o("div"),b(Tr.$$.fragment),Z_=l(),Fs=o("p"),ev=a("The "),Ri=o("a"),tv=a("TFDistilBertForMaskedLM"),sv=a(" forward method, overrides the "),Td=o("code"),ov=a("__call__"),nv=a(" special method."),rv=l(),b(vo.$$.fragment),av=l(),wd=o("p"),iv=a("Example:"),lv=l(),b(wr.$$.fragment),dv=l(),b(yr.$$.fragment),Hp=l(),Bs=o("h2"),bo=o("a"),yd=o("span"),b($r.$$.fragment),cv=l(),$d=o("span"),pv=a("TFDistilBertForSequenceClassification"),Qp=l(),Oe=o("div"),b(Dr.$$.fragment),hv=l(),Dd=o("p"),uv=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fv=l(),Fr=o("p"),mv=a("This model inherits from "),Ui=o("a"),gv=a("TFPreTrainedModel"),_v=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=l(),Br=o("p"),bv=a("This model is also a "),Mr=o("a"),kv=a("tf.keras.Model"),Tv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=l(),b(ko.$$.fragment),yv=l(),He=o("div"),b(Er.$$.fragment),$v=l(),Ms=o("p"),Dv=a("The "),Hi=o("a"),Fv=a("TFDistilBertForSequenceClassification"),Bv=a(" forward method, overrides the "),Fd=o("code"),Mv=a("__call__"),Ev=a(" special method."),xv=l(),b(To.$$.fragment),zv=l(),Bd=o("p"),jv=a("Example:"),Cv=l(),b(xr.$$.fragment),Pv=l(),b(zr.$$.fragment),Kp=l(),Es=o("h2"),wo=o("a"),Md=o("span"),b(jr.$$.fragment),qv=l(),Ed=o("span"),Av=a("TFDistilBertForMultipleChoice"),Vp=l(),Ne=o("div"),b(Cr.$$.fragment),Ov=l(),xd=o("p"),Nv=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iv=l(),Pr=o("p"),Lv=a("This model inherits from "),Qi=o("a"),Sv=a("TFPreTrainedModel"),Wv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rv=l(),qr=o("p"),Uv=a("This model is also a "),Ar=o("a"),Hv=a("tf.keras.Model"),Qv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kv=l(),b(yo.$$.fragment),Vv=l(),nt=o("div"),b(Or.$$.fragment),Jv=l(),xs=o("p"),Gv=a("The "),Ki=o("a"),Xv=a("TFDistilBertForMultipleChoice"),Yv=a(" forward method, overrides the "),zd=o("code"),Zv=a("__call__"),eb=a(" special method."),tb=l(),b($o.$$.fragment),sb=l(),jd=o("p"),ob=a("Example:"),nb=l(),b(Nr.$$.fragment),Jp=l(),zs=o("h2"),Do=o("a"),Cd=o("span"),b(Ir.$$.fragment),rb=l(),Pd=o("span"),ab=a("TFDistilBertForTokenClassification"),Gp=l(),Ie=o("div"),b(Lr.$$.fragment),ib=l(),qd=o("p"),lb=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),db=l(),Sr=o("p"),cb=a("This model inherits from "),Vi=o("a"),pb=a("TFPreTrainedModel"),hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ub=l(),Wr=o("p"),fb=a("This model is also a "),Rr=o("a"),mb=a("tf.keras.Model"),gb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_b=l(),b(Fo.$$.fragment),vb=l(),Qe=o("div"),b(Ur.$$.fragment),bb=l(),js=o("p"),kb=a("The "),Ji=o("a"),Tb=a("TFDistilBertForTokenClassification"),wb=a(" forward method, overrides the "),Ad=o("code"),yb=a("__call__"),$b=a(" special method."),Db=l(),b(Bo.$$.fragment),Fb=l(),Od=o("p"),Bb=a("Example:"),Mb=l(),b(Hr.$$.fragment),Eb=l(),b(Qr.$$.fragment),Xp=l(),Cs=o("h2"),Mo=o("a"),Nd=o("span"),b(Kr.$$.fragment),xb=l(),Id=o("span"),zb=a("TFDistilBertForQuestionAnswering"),Yp=l(),Le=o("div"),b(Vr.$$.fragment),jb=l(),Ps=o("p"),Cb=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ld=o("code"),Pb=a("span start logits"),qb=a(" and "),Sd=o("code"),Ab=a("span end logits"),Ob=a(")."),Nb=l(),Jr=o("p"),Ib=a("This model inherits from "),Gi=o("a"),Lb=a("TFPreTrainedModel"),Sb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wb=l(),Gr=o("p"),Rb=a("This model is also a "),Xr=o("a"),Ub=a("tf.keras.Model"),Hb=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qb=l(),b(Eo.$$.fragment),Kb=l(),Ke=o("div"),b(Yr.$$.fragment),Vb=l(),qs=o("p"),Jb=a("The "),Xi=o("a"),Gb=a("TFDistilBertForQuestionAnswering"),Xb=a(" forward method, overrides the "),Wd=o("code"),Yb=a("__call__"),Zb=a(" special method."),ek=l(),b(xo.$$.fragment),tk=l(),Rd=o("p"),sk=a("Example:"),ok=l(),b(Zr.$$.fragment),nk=l(),b(ea.$$.fragment),Zp=l(),As=o("h2"),zo=o("a"),Ud=o("span"),b(ta.$$.fragment),rk=l(),Hd=o("span"),ak=a("FlaxDistilBertModel"),eh=l(),Me=o("div"),b(sa.$$.fragment),ik=l(),Qd=o("p"),lk=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),dk=l(),oa=o("p"),ck=a("This model inherits from "),Yi=o("a"),pk=a("FlaxPreTrainedModel"),hk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uk=l(),na=o("p"),fk=a("This model is also a Flax Linen "),ra=o("a"),mk=a("flax.linen.Module"),gk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_k=l(),Kd=o("p"),vk=a("Finally, this model supports inherent JAX features such as:"),bk=l(),Pt=o("ul"),Vd=o("li"),aa=o("a"),kk=a("Just-In-Time (JIT) compilation"),Tk=l(),Jd=o("li"),ia=o("a"),wk=a("Automatic Differentiation"),yk=l(),Gd=o("li"),la=o("a"),$k=a("Vectorization"),Dk=l(),Xd=o("li"),da=o("a"),Fk=a("Parallelization"),Bk=l(),rt=o("div"),b(ca.$$.fragment),Mk=l(),Os=o("p"),Ek=a("The "),Yd=o("code"),xk=a("FlaxDistilBertPreTrainedModel"),zk=a("forward method, overrides the "),Zd=o("code"),jk=a("__call__"),Ck=a(" special method."),Pk=l(),b(jo.$$.fragment),qk=l(),ec=o("p"),Ak=a("Example:"),Ok=l(),b(pa.$$.fragment),th=l(),Ns=o("h2"),Co=o("a"),tc=o("span"),b(ha.$$.fragment),Nk=l(),sc=o("span"),Ik=a("FlaxDistilBertForMaskedLM"),sh=l(),Ee=o("div"),b(ua.$$.fragment),Lk=l(),fa=o("p"),Sk=a("DistilBert Model with a "),oc=o("code"),Wk=a("language modeling"),Rk=a(" head on top."),Uk=l(),ma=o("p"),Hk=a("This model inherits from "),Zi=o("a"),Qk=a("FlaxPreTrainedModel"),Kk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vk=l(),ga=o("p"),Jk=a("This model is also a Flax Linen "),_a=o("a"),Gk=a("flax.linen.Module"),Xk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yk=l(),nc=o("p"),Zk=a("Finally, this model supports inherent JAX features such as:"),eT=l(),qt=o("ul"),rc=o("li"),va=o("a"),tT=a("Just-In-Time (JIT) compilation"),sT=l(),ac=o("li"),ba=o("a"),oT=a("Automatic Differentiation"),nT=l(),ic=o("li"),ka=o("a"),rT=a("Vectorization"),aT=l(),lc=o("li"),Ta=o("a"),iT=a("Parallelization"),lT=l(),at=o("div"),b(wa.$$.fragment),dT=l(),Is=o("p"),cT=a("The "),dc=o("code"),pT=a("FlaxDistilBertPreTrainedModel"),hT=a("forward method, overrides the "),cc=o("code"),uT=a("__call__"),fT=a(" special method."),mT=l(),b(Po.$$.fragment),gT=l(),pc=o("p"),_T=a("Example:"),vT=l(),b(ya.$$.fragment),oh=l(),Ls=o("h2"),qo=o("a"),hc=o("span"),b($a.$$.fragment),bT=l(),uc=o("span"),kT=a("FlaxDistilBertForSequenceClassification"),nh=l(),xe=o("div"),b(Da.$$.fragment),TT=l(),fc=o("p"),wT=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yT=l(),Fa=o("p"),$T=a("This model inherits from "),el=o("a"),DT=a("FlaxPreTrainedModel"),FT=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),BT=l(),Ba=o("p"),MT=a("This model is also a Flax Linen "),Ma=o("a"),ET=a("flax.linen.Module"),xT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),zT=l(),mc=o("p"),jT=a("Finally, this model supports inherent JAX features such as:"),CT=l(),At=o("ul"),gc=o("li"),Ea=o("a"),PT=a("Just-In-Time (JIT) compilation"),qT=l(),_c=o("li"),xa=o("a"),AT=a("Automatic Differentiation"),OT=l(),vc=o("li"),za=o("a"),NT=a("Vectorization"),IT=l(),bc=o("li"),ja=o("a"),LT=a("Parallelization"),ST=l(),it=o("div"),b(Ca.$$.fragment),WT=l(),Ss=o("p"),RT=a("The "),kc=o("code"),UT=a("FlaxDistilBertPreTrainedModel"),HT=a("forward method, overrides the "),Tc=o("code"),QT=a("__call__"),KT=a(" special method."),VT=l(),b(Ao.$$.fragment),JT=l(),wc=o("p"),GT=a("Example:"),XT=l(),b(Pa.$$.fragment),rh=l(),Ws=o("h2"),Oo=o("a"),yc=o("span"),b(qa.$$.fragment),YT=l(),$c=o("span"),ZT=a("FlaxDistilBertForMultipleChoice"),ah=l(),ze=o("div"),b(Aa.$$.fragment),ew=l(),Dc=o("p"),tw=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),sw=l(),Oa=o("p"),ow=a("This model inherits from "),tl=o("a"),nw=a("FlaxPreTrainedModel"),rw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),aw=l(),Na=o("p"),iw=a("This model is also a Flax Linen "),Ia=o("a"),lw=a("flax.linen.Module"),dw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cw=l(),Fc=o("p"),pw=a("Finally, this model supports inherent JAX features such as:"),hw=l(),Ot=o("ul"),Bc=o("li"),La=o("a"),uw=a("Just-In-Time (JIT) compilation"),fw=l(),Mc=o("li"),Sa=o("a"),mw=a("Automatic Differentiation"),gw=l(),Ec=o("li"),Wa=o("a"),_w=a("Vectorization"),vw=l(),xc=o("li"),Ra=o("a"),bw=a("Parallelization"),kw=l(),lt=o("div"),b(Ua.$$.fragment),Tw=l(),Rs=o("p"),ww=a("The "),zc=o("code"),yw=a("FlaxDistilBertPreTrainedModel"),$w=a("forward method, overrides the "),jc=o("code"),Dw=a("__call__"),Fw=a(" special method."),Bw=l(),b(No.$$.fragment),Mw=l(),Cc=o("p"),Ew=a("Example:"),xw=l(),b(Ha.$$.fragment),ih=l(),Us=o("h2"),Io=o("a"),Pc=o("span"),b(Qa.$$.fragment),zw=l(),qc=o("span"),jw=a("FlaxDistilBertForTokenClassification"),lh=l(),je=o("div"),b(Ka.$$.fragment),Cw=l(),Ac=o("p"),Pw=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),qw=l(),Va=o("p"),Aw=a("This model inherits from "),sl=o("a"),Ow=a("FlaxPreTrainedModel"),Nw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Iw=l(),Ja=o("p"),Lw=a("This model is also a Flax Linen "),Ga=o("a"),Sw=a("flax.linen.Module"),Ww=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rw=l(),Oc=o("p"),Uw=a("Finally, this model supports inherent JAX features such as:"),Hw=l(),Nt=o("ul"),Nc=o("li"),Xa=o("a"),Qw=a("Just-In-Time (JIT) compilation"),Kw=l(),Ic=o("li"),Ya=o("a"),Vw=a("Automatic Differentiation"),Jw=l(),Lc=o("li"),Za=o("a"),Gw=a("Vectorization"),Xw=l(),Sc=o("li"),ei=o("a"),Yw=a("Parallelization"),Zw=l(),dt=o("div"),b(ti.$$.fragment),e1=l(),Hs=o("p"),t1=a("The "),Wc=o("code"),s1=a("FlaxDistilBertPreTrainedModel"),o1=a("forward method, overrides the "),Rc=o("code"),n1=a("__call__"),r1=a(" special method."),a1=l(),b(Lo.$$.fragment),i1=l(),Uc=o("p"),l1=a("Example:"),d1=l(),b(si.$$.fragment),dh=l(),Qs=o("h2"),So=o("a"),Hc=o("span"),b(oi.$$.fragment),c1=l(),Qc=o("span"),p1=a("FlaxDistilBertForQuestionAnswering"),ch=l(),Ce=o("div"),b(ni.$$.fragment),h1=l(),Ks=o("p"),u1=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Kc=o("code"),f1=a("span start logits"),m1=a(" and "),Vc=o("code"),g1=a("span end logits"),_1=a(")."),v1=l(),ri=o("p"),b1=a("This model inherits from "),ol=o("a"),k1=a("FlaxPreTrainedModel"),T1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w1=l(),ai=o("p"),y1=a("This model is also a Flax Linen "),ii=o("a"),$1=a("flax.linen.Module"),D1=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),F1=l(),Jc=o("p"),B1=a("Finally, this model supports inherent JAX features such as:"),M1=l(),It=o("ul"),Gc=o("li"),li=o("a"),E1=a("Just-In-Time (JIT) compilation"),x1=l(),Xc=o("li"),di=o("a"),z1=a("Automatic Differentiation"),j1=l(),Yc=o("li"),ci=o("a"),C1=a("Vectorization"),P1=l(),Zc=o("li"),pi=o("a"),q1=a("Parallelization"),A1=l(),ct=o("div"),b(hi.$$.fragment),O1=l(),Vs=o("p"),N1=a("The "),ep=o("code"),I1=a("FlaxDistilBertPreTrainedModel"),L1=a("forward method, overrides the "),tp=o("code"),S1=a("__call__"),W1=a(" special method."),R1=l(),b(Wo.$$.fragment),U1=l(),sp=o("p"),H1=a("Example:"),Q1=l(),b(ui.$$.fragment),this.h()},l(s){const m=FF('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(s),g=n(s,"H1",{class:!0});var fi=r(g);v=n(fi,"A",{id:!0,class:!0,href:!0});var op=r(v);D=n(op,"SPAN",{});var np=r(D);k(_.$$.fragment,np),np.forEach(t),op.forEach(t),f=d(fi),B=n(fi,"SPAN",{});var rp=r(B);ce=i(rp,"DistilBERT"),rp.forEach(t),fi.forEach(t),K=d(s),E=n(s,"H2",{class:!0});var mi=r(E);G=n(mi,"A",{id:!0,class:!0,href:!0});var ap=r(G);L=n(ap,"SPAN",{});var ip=r(L);k(X.$$.fragment,ip),ip.forEach(t),ap.forEach(t),pe=d(mi),S=n(mi,"SPAN",{});var lp=r(S);he=i(lp,"Overview"),lp.forEach(t),mi.forEach(t),ae=d(s),N=n(s,"P",{});var Lt=r(N);q=i(Lt,"The DistilBERT model was proposed in the blog post "),Y=n(Lt,"A",{href:!0,rel:!0});var dp=r(Y);V=i(dp,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),dp.forEach(t),x=i(Lt,", and the paper "),z=n(Lt,"A",{href:!0,rel:!0});var cp=r(z);ue=i(cp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),cp.forEach(t),W=i(Lt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(Lt,"EM",{});var pp=r(se);fe=i(pp,"bert-base-uncased"),pp.forEach(t),R=i(Lt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),Lt.forEach(t),ie=d(s),ee=n(s,"P",{});var hp=r(ee);A=i(hp,"The abstract from the paper is the following:"),hp.forEach(t),le=d(s),I=n(s,"P",{});var up=r(I);oe=n(up,"EM",{});var fp=r(oe);me=i(fp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),fp.forEach(t),up.forEach(t),P=d(s),te=n(s,"P",{});var mp=r(te);U=i(mp,"Tips:"),mp.forEach(t),de=d(s),h=n(s,"UL",{});var gi=r(h);M=n(gi,"LI",{});var St=r(M);J=i(St,"DistilBERT doesn\u2019t have "),_e=n(St,"CODE",{});var gp=r(_e);Te=i(gp,"token_type_ids"),gp.forEach(t),O=i(St,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),ve=n(St,"CODE",{});var _p=r(ve);we=i(_p,"tokenizer.sep_token"),_p.forEach(t),ye=i(St," (or "),C=n(St,"CODE",{});var vp=r(C);H=i(vp,"[SEP]"),vp.forEach(t),$e=i(St,")."),St.forEach(t),De=d(gi),Z=n(gi,"LI",{});var _i=r(Z);Fe=i(_i,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(_i,"CODE",{});var bp=r(ne);Be=i(bp,"position_ids"),bp.forEach(t),Tu=i(_i,` input). This could be added if
necessary though, just let us know if you need this option.`),_i.forEach(t),gi.forEach(t),wp=d(s),bt=n(s,"P",{});var Wt=r(bt);wu=i(Wt,"This model was contributed by "),Yo=n(Wt,"A",{href:!0,rel:!0});var K1=r(Yo);yu=i(K1,"victorsanh"),K1.forEach(t),$u=i(Wt,`. This model jax version was
contributed by `),Zo=n(Wt,"A",{href:!0,rel:!0});var V1=r(Zo);Du=i(V1,"kamalkraj"),V1.forEach(t),Fu=i(Wt,". The original code can be found "),en=n(Wt,"A",{href:!0,rel:!0});var J1=r(en);Bu=i(J1,"here"),J1.forEach(t),Mu=i(Wt,"."),Wt.forEach(t),yp=d(s),as=n(s,"H2",{class:!0});var hh=r(as);Js=n(hh,"A",{id:!0,class:!0,href:!0});var G1=r(Js);Fl=n(G1,"SPAN",{});var X1=r(Fl);k(tn.$$.fragment,X1),X1.forEach(t),G1.forEach(t),Eu=d(hh),Bl=n(hh,"SPAN",{});var Y1=r(Bl);xu=i(Y1,"DistilBertConfig"),Y1.forEach(t),hh.forEach(t),$p=d(s),Ve=n(s,"DIV",{class:!0});var Rt=r(Ve);k(sn.$$.fragment,Rt),zu=d(Rt),Ct=n(Rt,"P",{});var Ro=r(Ct);ju=i(Ro,"This is the configuration class to store the configuration of a "),vi=n(Ro,"A",{href:!0});var Z1=r(vi);Cu=i(Z1,"DistilBertModel"),Z1.forEach(t),Pu=i(Ro," or a "),bi=n(Ro,"A",{href:!0});var ey=r(bi);qu=i(ey,"TFDistilBertModel"),ey.forEach(t),Au=i(Ro,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=n(Ro,"A",{href:!0,rel:!0});var ty=r(on);Ou=i(ty,"distilbert-base-uncased"),ty.forEach(t),Nu=i(Ro," architecture."),Ro.forEach(t),Iu=d(Rt),is=n(Rt,"P",{});var nl=r(is);Lu=i(nl,"Configuration objects inherit from "),ki=n(nl,"A",{href:!0});var sy=r(ki);Su=i(sy,"PretrainedConfig"),sy.forEach(t),Wu=i(nl,` and can be used to control the model outputs. Read the
documentation from `),Ti=n(nl,"A",{href:!0});var oy=r(Ti);Ru=i(oy,"PretrainedConfig"),oy.forEach(t),Uu=i(nl," for more information."),nl.forEach(t),Hu=d(Rt),Ml=n(Rt,"P",{});var ny=r(Ml);Qu=i(ny,"Examples:"),ny.forEach(t),Ku=d(Rt),k(nn.$$.fragment,Rt),Rt.forEach(t),Dp=d(s),ls=n(s,"H2",{class:!0});var uh=r(ls);Gs=n(uh,"A",{id:!0,class:!0,href:!0});var ry=r(Gs);El=n(ry,"SPAN",{});var ay=r(El);k(rn.$$.fragment,ay),ay.forEach(t),ry.forEach(t),Vu=d(uh),xl=n(uh,"SPAN",{});var iy=r(xl);Ju=i(iy,"DistilBertTokenizer"),iy.forEach(t),uh.forEach(t),Fp=d(s),_t=n(s,"DIV",{class:!0});var Uo=r(_t);k(an.$$.fragment,Uo),Gu=d(Uo),zl=n(Uo,"P",{});var ly=r(zl);Xu=i(ly,"Construct a DistilBERT tokenizer."),ly.forEach(t),Yu=d(Uo),Xs=n(Uo,"P",{});var kp=r(Xs);wi=n(kp,"A",{href:!0});var dy=r(wi);Zu=i(dy,"DistilBertTokenizer"),dy.forEach(t),ef=i(kp," is identical to "),yi=n(kp,"A",{href:!0});var cy=r(yi);tf=i(cy,"BertTokenizer"),cy.forEach(t),sf=i(kp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),kp.forEach(t),of=d(Uo),ln=n(Uo,"P",{});var fh=r(ln);nf=i(fh,"Refer to superclass "),$i=n(fh,"A",{href:!0});var py=r($i);rf=i(py,"BertTokenizer"),py.forEach(t),af=i(fh," for usage examples and documentation concerning parameters."),fh.forEach(t),Uo.forEach(t),Bp=d(s),ds=n(s,"H2",{class:!0});var mh=r(ds);Ys=n(mh,"A",{id:!0,class:!0,href:!0});var hy=r(Ys);jl=n(hy,"SPAN",{});var uy=r(jl);k(dn.$$.fragment,uy),uy.forEach(t),hy.forEach(t),lf=d(mh),Cl=n(mh,"SPAN",{});var fy=r(Cl);df=i(fy,"DistilBertTokenizerFast"),fy.forEach(t),mh.forEach(t),Mp=d(s),vt=n(s,"DIV",{class:!0});var Ho=r(vt);k(cn.$$.fragment,Ho),cf=d(Ho),pn=n(Ho,"P",{});var gh=r(pn);pf=i(gh,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Pl=n(gh,"EM",{});var my=r(Pl);hf=i(my,"tokenizers"),my.forEach(t),uf=i(gh," library)."),gh.forEach(t),ff=d(Ho),Zs=n(Ho,"P",{});var Tp=r(Zs);Di=n(Tp,"A",{href:!0});var gy=r(Di);mf=i(gy,"DistilBertTokenizerFast"),gy.forEach(t),gf=i(Tp," is identical to "),Fi=n(Tp,"A",{href:!0});var _y=r(Fi);_f=i(_y,"BertTokenizerFast"),_y.forEach(t),vf=i(Tp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Tp.forEach(t),bf=d(Ho),hn=n(Ho,"P",{});var _h=r(hn);kf=i(_h,"Refer to superclass "),Bi=n(_h,"A",{href:!0});var vy=r(Bi);Tf=i(vy,"BertTokenizerFast"),vy.forEach(t),wf=i(_h," for usage examples and documentation concerning parameters."),_h.forEach(t),Ho.forEach(t),Ep=d(s),cs=n(s,"H2",{class:!0});var vh=r(cs);eo=n(vh,"A",{id:!0,class:!0,href:!0});var by=r(eo);ql=n(by,"SPAN",{});var ky=r(ql);k(un.$$.fragment,ky),ky.forEach(t),by.forEach(t),yf=d(vh),Al=n(vh,"SPAN",{});var Ty=r(Al);$f=i(Ty,"DistilBertModel"),Ty.forEach(t),vh.forEach(t),xp=d(s),Je=n(s,"DIV",{class:!0});var Ut=r(Je);k(fn.$$.fragment,Ut),Df=d(Ut),Ol=n(Ut,"P",{});var wy=r(Ol);Ff=i(wy,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),wy.forEach(t),Bf=d(Ut),mn=n(Ut,"P",{});var bh=r(mn);Mf=i(bh,"This model inherits from "),Mi=n(bh,"A",{href:!0});var yy=r(Mi);Ef=i(yy,"PreTrainedModel"),yy.forEach(t),xf=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),zf=d(Ut),gn=n(Ut,"P",{});var kh=r(gn);jf=i(kh,"This model is also a PyTorch "),_n=n(kh,"A",{href:!0,rel:!0});var $y=r(_n);Cf=i($y,"torch.nn.Module"),$y.forEach(t),Pf=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),qf=d(Ut),tt=n(Ut,"DIV",{class:!0});var Ht=r(tt);k(vn.$$.fragment,Ht),Af=d(Ht),ps=n(Ht,"P",{});var rl=r(ps);Of=i(rl,"The "),Ei=n(rl,"A",{href:!0});var Dy=r(Ei);Nf=i(Dy,"DistilBertModel"),Dy.forEach(t),If=i(rl," forward method, overrides the "),Nl=n(rl,"CODE",{});var Fy=r(Nl);Lf=i(Fy,"__call__"),Fy.forEach(t),Sf=i(rl," special method."),rl.forEach(t),Wf=d(Ht),k(to.$$.fragment,Ht),Rf=d(Ht),Il=n(Ht,"P",{});var By=r(Il);Uf=i(By,"Example:"),By.forEach(t),Hf=d(Ht),k(bn.$$.fragment,Ht),Ht.forEach(t),Ut.forEach(t),zp=d(s),hs=n(s,"H2",{class:!0});var Th=r(hs);so=n(Th,"A",{id:!0,class:!0,href:!0});var My=r(so);Ll=n(My,"SPAN",{});var Ey=r(Ll);k(kn.$$.fragment,Ey),Ey.forEach(t),My.forEach(t),Qf=d(Th),Sl=n(Th,"SPAN",{});var xy=r(Sl);Kf=i(xy,"DistilBertForMaskedLM"),xy.forEach(t),Th.forEach(t),jp=d(s),Ge=n(s,"DIV",{class:!0});var Qt=r(Ge);k(Tn.$$.fragment,Qt),Vf=d(Qt),wn=n(Qt,"P",{});var wh=r(wn);Jf=i(wh,"DistilBert Model with a "),Wl=n(wh,"CODE",{});var zy=r(Wl);Gf=i(zy,"masked language modeling"),zy.forEach(t),Xf=i(wh," head on top."),wh.forEach(t),Yf=d(Qt),yn=n(Qt,"P",{});var yh=r(yn);Zf=i(yh,"This model inherits from "),xi=n(yh,"A",{href:!0});var jy=r(xi);em=i(jy,"PreTrainedModel"),jy.forEach(t),tm=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),sm=d(Qt),$n=n(Qt,"P",{});var $h=r($n);om=i($h,"This model is also a PyTorch "),Dn=n($h,"A",{href:!0,rel:!0});var Cy=r(Dn);nm=i(Cy,"torch.nn.Module"),Cy.forEach(t),rm=i($h,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h.forEach(t),am=d(Qt),Se=n(Qt,"DIV",{class:!0});var kt=r(Se);k(Fn.$$.fragment,kt),im=d(kt),us=n(kt,"P",{});var al=r(us);lm=i(al,"The "),zi=n(al,"A",{href:!0});var Py=r(zi);dm=i(Py,"DistilBertForMaskedLM"),Py.forEach(t),cm=i(al," forward method, overrides the "),Rl=n(al,"CODE",{});var qy=r(Rl);pm=i(qy,"__call__"),qy.forEach(t),hm=i(al," special method."),al.forEach(t),um=d(kt),k(oo.$$.fragment,kt),fm=d(kt),Ul=n(kt,"P",{});var Ay=r(Ul);mm=i(Ay,"Example:"),Ay.forEach(t),gm=d(kt),k(Bn.$$.fragment,kt),_m=d(kt),k(Mn.$$.fragment,kt),kt.forEach(t),Qt.forEach(t),Cp=d(s),fs=n(s,"H2",{class:!0});var Dh=r(fs);no=n(Dh,"A",{id:!0,class:!0,href:!0});var Oy=r(no);Hl=n(Oy,"SPAN",{});var Ny=r(Hl);k(En.$$.fragment,Ny),Ny.forEach(t),Oy.forEach(t),vm=d(Dh),Ql=n(Dh,"SPAN",{});var Iy=r(Ql);bm=i(Iy,"DistilBertForSequenceClassification"),Iy.forEach(t),Dh.forEach(t),Pp=d(s),Xe=n(s,"DIV",{class:!0});var Kt=r(Xe);k(xn.$$.fragment,Kt),km=d(Kt),Kl=n(Kt,"P",{});var Ly=r(Kl);Tm=i(Ly,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ly.forEach(t),wm=d(Kt),zn=n(Kt,"P",{});var Fh=r(zn);ym=i(Fh,"This model inherits from "),ji=n(Fh,"A",{href:!0});var Sy=r(ji);$m=i(Sy,"PreTrainedModel"),Sy.forEach(t),Dm=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),Fm=d(Kt),jn=n(Kt,"P",{});var Bh=r(jn);Bm=i(Bh,"This model is also a PyTorch "),Cn=n(Bh,"A",{href:!0,rel:!0});var Wy=r(Cn);Mm=i(Wy,"torch.nn.Module"),Wy.forEach(t),Em=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),xm=d(Kt),ke=n(Kt,"DIV",{class:!0});var Pe=r(ke);k(Pn.$$.fragment,Pe),zm=d(Pe),ms=n(Pe,"P",{});var il=r(ms);jm=i(il,"The "),Ci=n(il,"A",{href:!0});var Ry=r(Ci);Cm=i(Ry,"DistilBertForSequenceClassification"),Ry.forEach(t),Pm=i(il," forward method, overrides the "),Vl=n(il,"CODE",{});var Uy=r(Vl);qm=i(Uy,"__call__"),Uy.forEach(t),Am=i(il," special method."),il.forEach(t),Om=d(Pe),k(ro.$$.fragment,Pe),Nm=d(Pe),Jl=n(Pe,"P",{});var Hy=r(Jl);Im=i(Hy,"Example of single-label classification:"),Hy.forEach(t),Lm=d(Pe),k(qn.$$.fragment,Pe),Sm=d(Pe),k(An.$$.fragment,Pe),Wm=d(Pe),Gl=n(Pe,"P",{});var Qy=r(Gl);Rm=i(Qy,"Example of multi-label classification:"),Qy.forEach(t),Um=d(Pe),k(On.$$.fragment,Pe),Hm=d(Pe),k(Nn.$$.fragment,Pe),Pe.forEach(t),Kt.forEach(t),qp=d(s),gs=n(s,"H2",{class:!0});var Mh=r(gs);ao=n(Mh,"A",{id:!0,class:!0,href:!0});var Ky=r(ao);Xl=n(Ky,"SPAN",{});var Vy=r(Xl);k(In.$$.fragment,Vy),Vy.forEach(t),Ky.forEach(t),Qm=d(Mh),Yl=n(Mh,"SPAN",{});var Jy=r(Yl);Km=i(Jy,"DistilBertForMultipleChoice"),Jy.forEach(t),Mh.forEach(t),Ap=d(s),Ye=n(s,"DIV",{class:!0});var Vt=r(Ye);k(Ln.$$.fragment,Vt),Vm=d(Vt),Zl=n(Vt,"P",{});var Gy=r(Zl);Jm=i(Gy,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Gy.forEach(t),Gm=d(Vt),Sn=n(Vt,"P",{});var Eh=r(Sn);Xm=i(Eh,"This model inherits from "),Pi=n(Eh,"A",{href:!0});var Xy=r(Pi);Ym=i(Xy,"PreTrainedModel"),Xy.forEach(t),Zm=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),eg=d(Vt),Wn=n(Vt,"P",{});var xh=r(Wn);tg=i(xh,"This model is also a PyTorch "),Rn=n(xh,"A",{href:!0,rel:!0});var Yy=r(Rn);sg=i(Yy,"torch.nn.Module"),Yy.forEach(t),og=i(xh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xh.forEach(t),ng=d(Vt),st=n(Vt,"DIV",{class:!0});var Jt=r(st);k(Un.$$.fragment,Jt),rg=d(Jt),_s=n(Jt,"P",{});var ll=r(_s);ag=i(ll,"The "),qi=n(ll,"A",{href:!0});var Zy=r(qi);ig=i(Zy,"DistilBertForMultipleChoice"),Zy.forEach(t),lg=i(ll," forward method, overrides the "),ed=n(ll,"CODE",{});var e$=r(ed);dg=i(e$,"__call__"),e$.forEach(t),cg=i(ll," special method."),ll.forEach(t),pg=d(Jt),k(io.$$.fragment,Jt),hg=d(Jt),td=n(Jt,"P",{});var t$=r(td);ug=i(t$,"Examples:"),t$.forEach(t),fg=d(Jt),k(Hn.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),Op=d(s),vs=n(s,"H2",{class:!0});var zh=r(vs);lo=n(zh,"A",{id:!0,class:!0,href:!0});var s$=r(lo);sd=n(s$,"SPAN",{});var o$=r(sd);k(Qn.$$.fragment,o$),o$.forEach(t),s$.forEach(t),mg=d(zh),od=n(zh,"SPAN",{});var n$=r(od);gg=i(n$,"DistilBertForTokenClassification"),n$.forEach(t),zh.forEach(t),Np=d(s),Ze=n(s,"DIV",{class:!0});var Gt=r(Ze);k(Kn.$$.fragment,Gt),_g=d(Gt),nd=n(Gt,"P",{});var r$=r(nd);vg=i(r$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),r$.forEach(t),bg=d(Gt),Vn=n(Gt,"P",{});var jh=r(Vn);kg=i(jh,"This model inherits from "),Ai=n(jh,"A",{href:!0});var a$=r(Ai);Tg=i(a$,"PreTrainedModel"),a$.forEach(t),wg=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),yg=d(Gt),Jn=n(Gt,"P",{});var Ch=r(Jn);$g=i(Ch,"This model is also a PyTorch "),Gn=n(Ch,"A",{href:!0,rel:!0});var i$=r(Gn);Dg=i(i$,"torch.nn.Module"),i$.forEach(t),Fg=i(Ch,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ch.forEach(t),Bg=d(Gt),We=n(Gt,"DIV",{class:!0});var Tt=r(We);k(Xn.$$.fragment,Tt),Mg=d(Tt),bs=n(Tt,"P",{});var dl=r(bs);Eg=i(dl,"The "),Oi=n(dl,"A",{href:!0});var l$=r(Oi);xg=i(l$,"DistilBertForTokenClassification"),l$.forEach(t),zg=i(dl," forward method, overrides the "),rd=n(dl,"CODE",{});var d$=r(rd);jg=i(d$,"__call__"),d$.forEach(t),Cg=i(dl," special method."),dl.forEach(t),Pg=d(Tt),k(co.$$.fragment,Tt),qg=d(Tt),ad=n(Tt,"P",{});var c$=r(ad);Ag=i(c$,"Example:"),c$.forEach(t),Og=d(Tt),k(Yn.$$.fragment,Tt),Ng=d(Tt),k(Zn.$$.fragment,Tt),Tt.forEach(t),Gt.forEach(t),Ip=d(s),ks=n(s,"H2",{class:!0});var Ph=r(ks);po=n(Ph,"A",{id:!0,class:!0,href:!0});var p$=r(po);id=n(p$,"SPAN",{});var h$=r(id);k(er.$$.fragment,h$),h$.forEach(t),p$.forEach(t),Ig=d(Ph),ld=n(Ph,"SPAN",{});var u$=r(ld);Lg=i(u$,"DistilBertForQuestionAnswering"),u$.forEach(t),Ph.forEach(t),Lp=d(s),et=n(s,"DIV",{class:!0});var Xt=r(et);k(tr.$$.fragment,Xt),Sg=d(Xt),Ts=n(Xt,"P",{});var cl=r(Ts);Wg=i(cl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),dd=n(cl,"CODE",{});var f$=r(dd);Rg=i(f$,"span start logits"),f$.forEach(t),Ug=i(cl," and "),cd=n(cl,"CODE",{});var m$=r(cd);Hg=i(m$,"span end logits"),m$.forEach(t),Qg=i(cl,")."),cl.forEach(t),Kg=d(Xt),sr=n(Xt,"P",{});var qh=r(sr);Vg=i(qh,"This model inherits from "),Ni=n(qh,"A",{href:!0});var g$=r(Ni);Jg=i(g$,"PreTrainedModel"),g$.forEach(t),Gg=i(qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh.forEach(t),Xg=d(Xt),or=n(Xt,"P",{});var Ah=r(or);Yg=i(Ah,"This model is also a PyTorch "),nr=n(Ah,"A",{href:!0,rel:!0});var _$=r(nr);Zg=i(_$,"torch.nn.Module"),_$.forEach(t),e_=i(Ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ah.forEach(t),t_=d(Xt),Re=n(Xt,"DIV",{class:!0});var wt=r(Re);k(rr.$$.fragment,wt),s_=d(wt),ws=n(wt,"P",{});var pl=r(ws);o_=i(pl,"The "),Ii=n(pl,"A",{href:!0});var v$=r(Ii);n_=i(v$,"DistilBertForQuestionAnswering"),v$.forEach(t),r_=i(pl," forward method, overrides the "),pd=n(pl,"CODE",{});var b$=r(pd);a_=i(b$,"__call__"),b$.forEach(t),i_=i(pl," special method."),pl.forEach(t),l_=d(wt),k(ho.$$.fragment,wt),d_=d(wt),hd=n(wt,"P",{});var k$=r(hd);c_=i(k$,"Example:"),k$.forEach(t),p_=d(wt),k(ar.$$.fragment,wt),h_=d(wt),k(ir.$$.fragment,wt),wt.forEach(t),Xt.forEach(t),Sp=d(s),ys=n(s,"H2",{class:!0});var Oh=r(ys);uo=n(Oh,"A",{id:!0,class:!0,href:!0});var T$=r(uo);ud=n(T$,"SPAN",{});var w$=r(ud);k(lr.$$.fragment,w$),w$.forEach(t),T$.forEach(t),u_=d(Oh),fd=n(Oh,"SPAN",{});var y$=r(fd);f_=i(y$,"TFDistilBertModel"),y$.forEach(t),Oh.forEach(t),Wp=d(s),qe=n(s,"DIV",{class:!0});var yt=r(qe);k(dr.$$.fragment,yt),m_=d(yt),md=n(yt,"P",{});var $$=r(md);g_=i($$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),$$.forEach(t),__=d(yt),cr=n(yt,"P",{});var Nh=r(cr);v_=i(Nh,"This model inherits from "),Li=n(Nh,"A",{href:!0});var D$=r(Li);b_=i(D$,"TFPreTrainedModel"),D$.forEach(t),k_=i(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(t),T_=d(yt),pr=n(yt,"P",{});var Ih=r(pr);w_=i(Ih,"This model is also a "),hr=n(Ih,"A",{href:!0,rel:!0});var F$=r(hr);y_=i(F$,"tf.keras.Model"),F$.forEach(t),$_=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),D_=d(yt),k(fo.$$.fragment,yt),F_=d(yt),ot=n(yt,"DIV",{class:!0});var Yt=r(ot);k(ur.$$.fragment,Yt),B_=d(Yt),$s=n(Yt,"P",{});var hl=r($s);M_=i(hl,"The "),Si=n(hl,"A",{href:!0});var B$=r(Si);E_=i(B$,"TFDistilBertModel"),B$.forEach(t),x_=i(hl," forward method, overrides the "),gd=n(hl,"CODE",{});var M$=r(gd);z_=i(M$,"__call__"),M$.forEach(t),j_=i(hl," special method."),hl.forEach(t),C_=d(Yt),k(mo.$$.fragment,Yt),P_=d(Yt),_d=n(Yt,"P",{});var E$=r(_d);q_=i(E$,"Example:"),E$.forEach(t),A_=d(Yt),k(fr.$$.fragment,Yt),Yt.forEach(t),yt.forEach(t),Rp=d(s),Ds=n(s,"H2",{class:!0});var Lh=r(Ds);go=n(Lh,"A",{id:!0,class:!0,href:!0});var x$=r(go);vd=n(x$,"SPAN",{});var z$=r(vd);k(mr.$$.fragment,z$),z$.forEach(t),x$.forEach(t),O_=d(Lh),bd=n(Lh,"SPAN",{});var j$=r(bd);N_=i(j$,"TFDistilBertForMaskedLM"),j$.forEach(t),Lh.forEach(t),Up=d(s),Ae=n(s,"DIV",{class:!0});var $t=r(Ae);k(gr.$$.fragment,$t),I_=d($t),_r=n($t,"P",{});var Sh=r(_r);L_=i(Sh,"DistilBert Model with a "),kd=n(Sh,"CODE",{});var C$=r(kd);S_=i(C$,"masked language modeling"),C$.forEach(t),W_=i(Sh," head on top."),Sh.forEach(t),R_=d($t),vr=n($t,"P",{});var Wh=r(vr);U_=i(Wh,"This model inherits from "),Wi=n(Wh,"A",{href:!0});var P$=r(Wi);H_=i(P$,"TFPreTrainedModel"),P$.forEach(t),Q_=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),K_=d($t),br=n($t,"P",{});var Rh=r(br);V_=i(Rh,"This model is also a "),kr=n(Rh,"A",{href:!0,rel:!0});var q$=r(kr);J_=i(q$,"tf.keras.Model"),q$.forEach(t),G_=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),X_=d($t),k(_o.$$.fragment,$t),Y_=d($t),Ue=n($t,"DIV",{class:!0});var Dt=r(Ue);k(Tr.$$.fragment,Dt),Z_=d(Dt),Fs=n(Dt,"P",{});var ul=r(Fs);ev=i(ul,"The "),Ri=n(ul,"A",{href:!0});var A$=r(Ri);tv=i(A$,"TFDistilBertForMaskedLM"),A$.forEach(t),sv=i(ul," forward method, overrides the "),Td=n(ul,"CODE",{});var O$=r(Td);ov=i(O$,"__call__"),O$.forEach(t),nv=i(ul," special method."),ul.forEach(t),rv=d(Dt),k(vo.$$.fragment,Dt),av=d(Dt),wd=n(Dt,"P",{});var N$=r(wd);iv=i(N$,"Example:"),N$.forEach(t),lv=d(Dt),k(wr.$$.fragment,Dt),dv=d(Dt),k(yr.$$.fragment,Dt),Dt.forEach(t),$t.forEach(t),Hp=d(s),Bs=n(s,"H2",{class:!0});var Uh=r(Bs);bo=n(Uh,"A",{id:!0,class:!0,href:!0});var I$=r(bo);yd=n(I$,"SPAN",{});var L$=r(yd);k($r.$$.fragment,L$),L$.forEach(t),I$.forEach(t),cv=d(Uh),$d=n(Uh,"SPAN",{});var S$=r($d);pv=i(S$,"TFDistilBertForSequenceClassification"),S$.forEach(t),Uh.forEach(t),Qp=d(s),Oe=n(s,"DIV",{class:!0});var Ft=r(Oe);k(Dr.$$.fragment,Ft),hv=d(Ft),Dd=n(Ft,"P",{});var W$=r(Dd);uv=i(W$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),W$.forEach(t),fv=d(Ft),Fr=n(Ft,"P",{});var Hh=r(Fr);mv=i(Hh,"This model inherits from "),Ui=n(Hh,"A",{href:!0});var R$=r(Ui);gv=i(R$,"TFPreTrainedModel"),R$.forEach(t),_v=i(Hh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh.forEach(t),vv=d(Ft),Br=n(Ft,"P",{});var Qh=r(Br);bv=i(Qh,"This model is also a "),Mr=n(Qh,"A",{href:!0,rel:!0});var U$=r(Mr);kv=i(U$,"tf.keras.Model"),U$.forEach(t),Tv=i(Qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh.forEach(t),wv=d(Ft),k(ko.$$.fragment,Ft),yv=d(Ft),He=n(Ft,"DIV",{class:!0});var Bt=r(He);k(Er.$$.fragment,Bt),$v=d(Bt),Ms=n(Bt,"P",{});var fl=r(Ms);Dv=i(fl,"The "),Hi=n(fl,"A",{href:!0});var H$=r(Hi);Fv=i(H$,"TFDistilBertForSequenceClassification"),H$.forEach(t),Bv=i(fl," forward method, overrides the "),Fd=n(fl,"CODE",{});var Q$=r(Fd);Mv=i(Q$,"__call__"),Q$.forEach(t),Ev=i(fl," special method."),fl.forEach(t),xv=d(Bt),k(To.$$.fragment,Bt),zv=d(Bt),Bd=n(Bt,"P",{});var K$=r(Bd);jv=i(K$,"Example:"),K$.forEach(t),Cv=d(Bt),k(xr.$$.fragment,Bt),Pv=d(Bt),k(zr.$$.fragment,Bt),Bt.forEach(t),Ft.forEach(t),Kp=d(s),Es=n(s,"H2",{class:!0});var Kh=r(Es);wo=n(Kh,"A",{id:!0,class:!0,href:!0});var V$=r(wo);Md=n(V$,"SPAN",{});var J$=r(Md);k(jr.$$.fragment,J$),J$.forEach(t),V$.forEach(t),qv=d(Kh),Ed=n(Kh,"SPAN",{});var G$=r(Ed);Av=i(G$,"TFDistilBertForMultipleChoice"),G$.forEach(t),Kh.forEach(t),Vp=d(s),Ne=n(s,"DIV",{class:!0});var Mt=r(Ne);k(Cr.$$.fragment,Mt),Ov=d(Mt),xd=n(Mt,"P",{});var X$=r(xd);Nv=i(X$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),X$.forEach(t),Iv=d(Mt),Pr=n(Mt,"P",{});var Vh=r(Pr);Lv=i(Vh,"This model inherits from "),Qi=n(Vh,"A",{href:!0});var Y$=r(Qi);Sv=i(Y$,"TFPreTrainedModel"),Y$.forEach(t),Wv=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh.forEach(t),Rv=d(Mt),qr=n(Mt,"P",{});var Jh=r(qr);Uv=i(Jh,"This model is also a "),Ar=n(Jh,"A",{href:!0,rel:!0});var Z$=r(Ar);Hv=i(Z$,"tf.keras.Model"),Z$.forEach(t),Qv=i(Jh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh.forEach(t),Kv=d(Mt),k(yo.$$.fragment,Mt),Vv=d(Mt),nt=n(Mt,"DIV",{class:!0});var Zt=r(nt);k(Or.$$.fragment,Zt),Jv=d(Zt),xs=n(Zt,"P",{});var ml=r(xs);Gv=i(ml,"The "),Ki=n(ml,"A",{href:!0});var eD=r(Ki);Xv=i(eD,"TFDistilBertForMultipleChoice"),eD.forEach(t),Yv=i(ml," forward method, overrides the "),zd=n(ml,"CODE",{});var tD=r(zd);Zv=i(tD,"__call__"),tD.forEach(t),eb=i(ml," special method."),ml.forEach(t),tb=d(Zt),k($o.$$.fragment,Zt),sb=d(Zt),jd=n(Zt,"P",{});var sD=r(jd);ob=i(sD,"Example:"),sD.forEach(t),nb=d(Zt),k(Nr.$$.fragment,Zt),Zt.forEach(t),Mt.forEach(t),Jp=d(s),zs=n(s,"H2",{class:!0});var Gh=r(zs);Do=n(Gh,"A",{id:!0,class:!0,href:!0});var oD=r(Do);Cd=n(oD,"SPAN",{});var nD=r(Cd);k(Ir.$$.fragment,nD),nD.forEach(t),oD.forEach(t),rb=d(Gh),Pd=n(Gh,"SPAN",{});var rD=r(Pd);ab=i(rD,"TFDistilBertForTokenClassification"),rD.forEach(t),Gh.forEach(t),Gp=d(s),Ie=n(s,"DIV",{class:!0});var Et=r(Ie);k(Lr.$$.fragment,Et),ib=d(Et),qd=n(Et,"P",{});var aD=r(qd);lb=i(aD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),aD.forEach(t),db=d(Et),Sr=n(Et,"P",{});var Xh=r(Sr);cb=i(Xh,"This model inherits from "),Vi=n(Xh,"A",{href:!0});var iD=r(Vi);pb=i(iD,"TFPreTrainedModel"),iD.forEach(t),hb=i(Xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh.forEach(t),ub=d(Et),Wr=n(Et,"P",{});var Yh=r(Wr);fb=i(Yh,"This model is also a "),Rr=n(Yh,"A",{href:!0,rel:!0});var lD=r(Rr);mb=i(lD,"tf.keras.Model"),lD.forEach(t),gb=i(Yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh.forEach(t),_b=d(Et),k(Fo.$$.fragment,Et),vb=d(Et),Qe=n(Et,"DIV",{class:!0});var xt=r(Qe);k(Ur.$$.fragment,xt),bb=d(xt),js=n(xt,"P",{});var gl=r(js);kb=i(gl,"The "),Ji=n(gl,"A",{href:!0});var dD=r(Ji);Tb=i(dD,"TFDistilBertForTokenClassification"),dD.forEach(t),wb=i(gl," forward method, overrides the "),Ad=n(gl,"CODE",{});var cD=r(Ad);yb=i(cD,"__call__"),cD.forEach(t),$b=i(gl," special method."),gl.forEach(t),Db=d(xt),k(Bo.$$.fragment,xt),Fb=d(xt),Od=n(xt,"P",{});var pD=r(Od);Bb=i(pD,"Example:"),pD.forEach(t),Mb=d(xt),k(Hr.$$.fragment,xt),Eb=d(xt),k(Qr.$$.fragment,xt),xt.forEach(t),Et.forEach(t),Xp=d(s),Cs=n(s,"H2",{class:!0});var Zh=r(Cs);Mo=n(Zh,"A",{id:!0,class:!0,href:!0});var hD=r(Mo);Nd=n(hD,"SPAN",{});var uD=r(Nd);k(Kr.$$.fragment,uD),uD.forEach(t),hD.forEach(t),xb=d(Zh),Id=n(Zh,"SPAN",{});var fD=r(Id);zb=i(fD,"TFDistilBertForQuestionAnswering"),fD.forEach(t),Zh.forEach(t),Yp=d(s),Le=n(s,"DIV",{class:!0});var zt=r(Le);k(Vr.$$.fragment,zt),jb=d(zt),Ps=n(zt,"P",{});var _l=r(Ps);Cb=i(_l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),Ld=n(_l,"CODE",{});var mD=r(Ld);Pb=i(mD,"span start logits"),mD.forEach(t),qb=i(_l," and "),Sd=n(_l,"CODE",{});var gD=r(Sd);Ab=i(gD,"span end logits"),gD.forEach(t),Ob=i(_l,")."),_l.forEach(t),Nb=d(zt),Jr=n(zt,"P",{});var eu=r(Jr);Ib=i(eu,"This model inherits from "),Gi=n(eu,"A",{href:!0});var _D=r(Gi);Lb=i(_D,"TFPreTrainedModel"),_D.forEach(t),Sb=i(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),Wb=d(zt),Gr=n(zt,"P",{});var tu=r(Gr);Rb=i(tu,"This model is also a "),Xr=n(tu,"A",{href:!0,rel:!0});var vD=r(Xr);Ub=i(vD,"tf.keras.Model"),vD.forEach(t),Hb=i(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),Qb=d(zt),k(Eo.$$.fragment,zt),Kb=d(zt),Ke=n(zt,"DIV",{class:!0});var jt=r(Ke);k(Yr.$$.fragment,jt),Vb=d(jt),qs=n(jt,"P",{});var vl=r(qs);Jb=i(vl,"The "),Xi=n(vl,"A",{href:!0});var bD=r(Xi);Gb=i(bD,"TFDistilBertForQuestionAnswering"),bD.forEach(t),Xb=i(vl," forward method, overrides the "),Wd=n(vl,"CODE",{});var kD=r(Wd);Yb=i(kD,"__call__"),kD.forEach(t),Zb=i(vl," special method."),vl.forEach(t),ek=d(jt),k(xo.$$.fragment,jt),tk=d(jt),Rd=n(jt,"P",{});var TD=r(Rd);sk=i(TD,"Example:"),TD.forEach(t),ok=d(jt),k(Zr.$$.fragment,jt),nk=d(jt),k(ea.$$.fragment,jt),jt.forEach(t),zt.forEach(t),Zp=d(s),As=n(s,"H2",{class:!0});var su=r(As);zo=n(su,"A",{id:!0,class:!0,href:!0});var wD=r(zo);Ud=n(wD,"SPAN",{});var yD=r(Ud);k(ta.$$.fragment,yD),yD.forEach(t),wD.forEach(t),rk=d(su),Hd=n(su,"SPAN",{});var $D=r(Hd);ak=i($D,"FlaxDistilBertModel"),$D.forEach(t),su.forEach(t),eh=d(s),Me=n(s,"DIV",{class:!0});var pt=r(Me);k(sa.$$.fragment,pt),ik=d(pt),Qd=n(pt,"P",{});var DD=r(Qd);lk=i(DD,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),DD.forEach(t),dk=d(pt),oa=n(pt,"P",{});var ou=r(oa);ck=i(ou,"This model inherits from "),Yi=n(ou,"A",{href:!0});var FD=r(Yi);pk=i(FD,"FlaxPreTrainedModel"),FD.forEach(t),hk=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ou.forEach(t),uk=d(pt),na=n(pt,"P",{});var nu=r(na);fk=i(nu,"This model is also a Flax Linen "),ra=n(nu,"A",{href:!0,rel:!0});var BD=r(ra);mk=i(BD,"flax.linen.Module"),BD.forEach(t),gk=i(nu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nu.forEach(t),_k=d(pt),Kd=n(pt,"P",{});var MD=r(Kd);vk=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),bk=d(pt),Pt=n(pt,"UL",{});var Qo=r(Pt);Vd=n(Qo,"LI",{});var ED=r(Vd);aa=n(ED,"A",{href:!0,rel:!0});var xD=r(aa);kk=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),Tk=d(Qo),Jd=n(Qo,"LI",{});var zD=r(Jd);ia=n(zD,"A",{href:!0,rel:!0});var jD=r(ia);wk=i(jD,"Automatic Differentiation"),jD.forEach(t),zD.forEach(t),yk=d(Qo),Gd=n(Qo,"LI",{});var CD=r(Gd);la=n(CD,"A",{href:!0,rel:!0});var PD=r(la);$k=i(PD,"Vectorization"),PD.forEach(t),CD.forEach(t),Dk=d(Qo),Xd=n(Qo,"LI",{});var qD=r(Xd);da=n(qD,"A",{href:!0,rel:!0});var AD=r(da);Fk=i(AD,"Parallelization"),AD.forEach(t),qD.forEach(t),Qo.forEach(t),Bk=d(pt),rt=n(pt,"DIV",{class:!0});var es=r(rt);k(ca.$$.fragment,es),Mk=d(es),Os=n(es,"P",{});var bl=r(Os);Ek=i(bl,"The "),Yd=n(bl,"CODE",{});var OD=r(Yd);xk=i(OD,"FlaxDistilBertPreTrainedModel"),OD.forEach(t),zk=i(bl,"forward method, overrides the "),Zd=n(bl,"CODE",{});var ND=r(Zd);jk=i(ND,"__call__"),ND.forEach(t),Ck=i(bl," special method."),bl.forEach(t),Pk=d(es),k(jo.$$.fragment,es),qk=d(es),ec=n(es,"P",{});var ID=r(ec);Ak=i(ID,"Example:"),ID.forEach(t),Ok=d(es),k(pa.$$.fragment,es),es.forEach(t),pt.forEach(t),th=d(s),Ns=n(s,"H2",{class:!0});var ru=r(Ns);Co=n(ru,"A",{id:!0,class:!0,href:!0});var LD=r(Co);tc=n(LD,"SPAN",{});var SD=r(tc);k(ha.$$.fragment,SD),SD.forEach(t),LD.forEach(t),Nk=d(ru),sc=n(ru,"SPAN",{});var WD=r(sc);Ik=i(WD,"FlaxDistilBertForMaskedLM"),WD.forEach(t),ru.forEach(t),sh=d(s),Ee=n(s,"DIV",{class:!0});var ht=r(Ee);k(ua.$$.fragment,ht),Lk=d(ht),fa=n(ht,"P",{});var au=r(fa);Sk=i(au,"DistilBert Model with a "),oc=n(au,"CODE",{});var RD=r(oc);Wk=i(RD,"language modeling"),RD.forEach(t),Rk=i(au," head on top."),au.forEach(t),Uk=d(ht),ma=n(ht,"P",{});var iu=r(ma);Hk=i(iu,"This model inherits from "),Zi=n(iu,"A",{href:!0});var UD=r(Zi);Qk=i(UD,"FlaxPreTrainedModel"),UD.forEach(t),Kk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),Vk=d(ht),ga=n(ht,"P",{});var lu=r(ga);Jk=i(lu,"This model is also a Flax Linen "),_a=n(lu,"A",{href:!0,rel:!0});var HD=r(_a);Gk=i(HD,"flax.linen.Module"),HD.forEach(t),Xk=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Yk=d(ht),nc=n(ht,"P",{});var QD=r(nc);Zk=i(QD,"Finally, this model supports inherent JAX features such as:"),QD.forEach(t),eT=d(ht),qt=n(ht,"UL",{});var Ko=r(qt);rc=n(Ko,"LI",{});var KD=r(rc);va=n(KD,"A",{href:!0,rel:!0});var VD=r(va);tT=i(VD,"Just-In-Time (JIT) compilation"),VD.forEach(t),KD.forEach(t),sT=d(Ko),ac=n(Ko,"LI",{});var JD=r(ac);ba=n(JD,"A",{href:!0,rel:!0});var GD=r(ba);oT=i(GD,"Automatic Differentiation"),GD.forEach(t),JD.forEach(t),nT=d(Ko),ic=n(Ko,"LI",{});var XD=r(ic);ka=n(XD,"A",{href:!0,rel:!0});var YD=r(ka);rT=i(YD,"Vectorization"),YD.forEach(t),XD.forEach(t),aT=d(Ko),lc=n(Ko,"LI",{});var ZD=r(lc);Ta=n(ZD,"A",{href:!0,rel:!0});var e2=r(Ta);iT=i(e2,"Parallelization"),e2.forEach(t),ZD.forEach(t),Ko.forEach(t),lT=d(ht),at=n(ht,"DIV",{class:!0});var ts=r(at);k(wa.$$.fragment,ts),dT=d(ts),Is=n(ts,"P",{});var kl=r(Is);cT=i(kl,"The "),dc=n(kl,"CODE",{});var t2=r(dc);pT=i(t2,"FlaxDistilBertPreTrainedModel"),t2.forEach(t),hT=i(kl,"forward method, overrides the "),cc=n(kl,"CODE",{});var s2=r(cc);uT=i(s2,"__call__"),s2.forEach(t),fT=i(kl," special method."),kl.forEach(t),mT=d(ts),k(Po.$$.fragment,ts),gT=d(ts),pc=n(ts,"P",{});var o2=r(pc);_T=i(o2,"Example:"),o2.forEach(t),vT=d(ts),k(ya.$$.fragment,ts),ts.forEach(t),ht.forEach(t),oh=d(s),Ls=n(s,"H2",{class:!0});var du=r(Ls);qo=n(du,"A",{id:!0,class:!0,href:!0});var n2=r(qo);hc=n(n2,"SPAN",{});var r2=r(hc);k($a.$$.fragment,r2),r2.forEach(t),n2.forEach(t),bT=d(du),uc=n(du,"SPAN",{});var a2=r(uc);kT=i(a2,"FlaxDistilBertForSequenceClassification"),a2.forEach(t),du.forEach(t),nh=d(s),xe=n(s,"DIV",{class:!0});var ut=r(xe);k(Da.$$.fragment,ut),TT=d(ut),fc=n(ut,"P",{});var i2=r(fc);wT=i(i2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),i2.forEach(t),yT=d(ut),Fa=n(ut,"P",{});var cu=r(Fa);$T=i(cu,"This model inherits from "),el=n(cu,"A",{href:!0});var l2=r(el);DT=i(l2,"FlaxPreTrainedModel"),l2.forEach(t),FT=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),BT=d(ut),Ba=n(ut,"P",{});var pu=r(Ba);MT=i(pu,"This model is also a Flax Linen "),Ma=n(pu,"A",{href:!0,rel:!0});var d2=r(Ma);ET=i(d2,"flax.linen.Module"),d2.forEach(t),xT=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),zT=d(ut),mc=n(ut,"P",{});var c2=r(mc);jT=i(c2,"Finally, this model supports inherent JAX features such as:"),c2.forEach(t),CT=d(ut),At=n(ut,"UL",{});var Vo=r(At);gc=n(Vo,"LI",{});var p2=r(gc);Ea=n(p2,"A",{href:!0,rel:!0});var h2=r(Ea);PT=i(h2,"Just-In-Time (JIT) compilation"),h2.forEach(t),p2.forEach(t),qT=d(Vo),_c=n(Vo,"LI",{});var u2=r(_c);xa=n(u2,"A",{href:!0,rel:!0});var f2=r(xa);AT=i(f2,"Automatic Differentiation"),f2.forEach(t),u2.forEach(t),OT=d(Vo),vc=n(Vo,"LI",{});var m2=r(vc);za=n(m2,"A",{href:!0,rel:!0});var g2=r(za);NT=i(g2,"Vectorization"),g2.forEach(t),m2.forEach(t),IT=d(Vo),bc=n(Vo,"LI",{});var _2=r(bc);ja=n(_2,"A",{href:!0,rel:!0});var v2=r(ja);LT=i(v2,"Parallelization"),v2.forEach(t),_2.forEach(t),Vo.forEach(t),ST=d(ut),it=n(ut,"DIV",{class:!0});var ss=r(it);k(Ca.$$.fragment,ss),WT=d(ss),Ss=n(ss,"P",{});var Tl=r(Ss);RT=i(Tl,"The "),kc=n(Tl,"CODE",{});var b2=r(kc);UT=i(b2,"FlaxDistilBertPreTrainedModel"),b2.forEach(t),HT=i(Tl,"forward method, overrides the "),Tc=n(Tl,"CODE",{});var k2=r(Tc);QT=i(k2,"__call__"),k2.forEach(t),KT=i(Tl," special method."),Tl.forEach(t),VT=d(ss),k(Ao.$$.fragment,ss),JT=d(ss),wc=n(ss,"P",{});var T2=r(wc);GT=i(T2,"Example:"),T2.forEach(t),XT=d(ss),k(Pa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),rh=d(s),Ws=n(s,"H2",{class:!0});var hu=r(Ws);Oo=n(hu,"A",{id:!0,class:!0,href:!0});var w2=r(Oo);yc=n(w2,"SPAN",{});var y2=r(yc);k(qa.$$.fragment,y2),y2.forEach(t),w2.forEach(t),YT=d(hu),$c=n(hu,"SPAN",{});var $2=r($c);ZT=i($2,"FlaxDistilBertForMultipleChoice"),$2.forEach(t),hu.forEach(t),ah=d(s),ze=n(s,"DIV",{class:!0});var ft=r(ze);k(Aa.$$.fragment,ft),ew=d(ft),Dc=n(ft,"P",{});var D2=r(Dc);tw=i(D2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),D2.forEach(t),sw=d(ft),Oa=n(ft,"P",{});var uu=r(Oa);ow=i(uu,"This model inherits from "),tl=n(uu,"A",{href:!0});var F2=r(tl);nw=i(F2,"FlaxPreTrainedModel"),F2.forEach(t),rw=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uu.forEach(t),aw=d(ft),Na=n(ft,"P",{});var fu=r(Na);iw=i(fu,"This model is also a Flax Linen "),Ia=n(fu,"A",{href:!0,rel:!0});var B2=r(Ia);lw=i(B2,"flax.linen.Module"),B2.forEach(t),dw=i(fu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fu.forEach(t),cw=d(ft),Fc=n(ft,"P",{});var M2=r(Fc);pw=i(M2,"Finally, this model supports inherent JAX features such as:"),M2.forEach(t),hw=d(ft),Ot=n(ft,"UL",{});var Jo=r(Ot);Bc=n(Jo,"LI",{});var E2=r(Bc);La=n(E2,"A",{href:!0,rel:!0});var x2=r(La);uw=i(x2,"Just-In-Time (JIT) compilation"),x2.forEach(t),E2.forEach(t),fw=d(Jo),Mc=n(Jo,"LI",{});var z2=r(Mc);Sa=n(z2,"A",{href:!0,rel:!0});var j2=r(Sa);mw=i(j2,"Automatic Differentiation"),j2.forEach(t),z2.forEach(t),gw=d(Jo),Ec=n(Jo,"LI",{});var C2=r(Ec);Wa=n(C2,"A",{href:!0,rel:!0});var P2=r(Wa);_w=i(P2,"Vectorization"),P2.forEach(t),C2.forEach(t),vw=d(Jo),xc=n(Jo,"LI",{});var q2=r(xc);Ra=n(q2,"A",{href:!0,rel:!0});var A2=r(Ra);bw=i(A2,"Parallelization"),A2.forEach(t),q2.forEach(t),Jo.forEach(t),kw=d(ft),lt=n(ft,"DIV",{class:!0});var os=r(lt);k(Ua.$$.fragment,os),Tw=d(os),Rs=n(os,"P",{});var wl=r(Rs);ww=i(wl,"The "),zc=n(wl,"CODE",{});var O2=r(zc);yw=i(O2,"FlaxDistilBertPreTrainedModel"),O2.forEach(t),$w=i(wl,"forward method, overrides the "),jc=n(wl,"CODE",{});var N2=r(jc);Dw=i(N2,"__call__"),N2.forEach(t),Fw=i(wl," special method."),wl.forEach(t),Bw=d(os),k(No.$$.fragment,os),Mw=d(os),Cc=n(os,"P",{});var I2=r(Cc);Ew=i(I2,"Example:"),I2.forEach(t),xw=d(os),k(Ha.$$.fragment,os),os.forEach(t),ft.forEach(t),ih=d(s),Us=n(s,"H2",{class:!0});var mu=r(Us);Io=n(mu,"A",{id:!0,class:!0,href:!0});var L2=r(Io);Pc=n(L2,"SPAN",{});var S2=r(Pc);k(Qa.$$.fragment,S2),S2.forEach(t),L2.forEach(t),zw=d(mu),qc=n(mu,"SPAN",{});var W2=r(qc);jw=i(W2,"FlaxDistilBertForTokenClassification"),W2.forEach(t),mu.forEach(t),lh=d(s),je=n(s,"DIV",{class:!0});var mt=r(je);k(Ka.$$.fragment,mt),Cw=d(mt),Ac=n(mt,"P",{});var R2=r(Ac);Pw=i(R2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),R2.forEach(t),qw=d(mt),Va=n(mt,"P",{});var gu=r(Va);Aw=i(gu,"This model inherits from "),sl=n(gu,"A",{href:!0});var U2=r(sl);Ow=i(U2,"FlaxPreTrainedModel"),U2.forEach(t),Nw=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gu.forEach(t),Iw=d(mt),Ja=n(mt,"P",{});var _u=r(Ja);Lw=i(_u,"This model is also a Flax Linen "),Ga=n(_u,"A",{href:!0,rel:!0});var H2=r(Ga);Sw=i(H2,"flax.linen.Module"),H2.forEach(t),Ww=i(_u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_u.forEach(t),Rw=d(mt),Oc=n(mt,"P",{});var Q2=r(Oc);Uw=i(Q2,"Finally, this model supports inherent JAX features such as:"),Q2.forEach(t),Hw=d(mt),Nt=n(mt,"UL",{});var Go=r(Nt);Nc=n(Go,"LI",{});var K2=r(Nc);Xa=n(K2,"A",{href:!0,rel:!0});var V2=r(Xa);Qw=i(V2,"Just-In-Time (JIT) compilation"),V2.forEach(t),K2.forEach(t),Kw=d(Go),Ic=n(Go,"LI",{});var J2=r(Ic);Ya=n(J2,"A",{href:!0,rel:!0});var G2=r(Ya);Vw=i(G2,"Automatic Differentiation"),G2.forEach(t),J2.forEach(t),Jw=d(Go),Lc=n(Go,"LI",{});var X2=r(Lc);Za=n(X2,"A",{href:!0,rel:!0});var Y2=r(Za);Gw=i(Y2,"Vectorization"),Y2.forEach(t),X2.forEach(t),Xw=d(Go),Sc=n(Go,"LI",{});var Z2=r(Sc);ei=n(Z2,"A",{href:!0,rel:!0});var eF=r(ei);Yw=i(eF,"Parallelization"),eF.forEach(t),Z2.forEach(t),Go.forEach(t),Zw=d(mt),dt=n(mt,"DIV",{class:!0});var ns=r(dt);k(ti.$$.fragment,ns),e1=d(ns),Hs=n(ns,"P",{});var yl=r(Hs);t1=i(yl,"The "),Wc=n(yl,"CODE",{});var tF=r(Wc);s1=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),o1=i(yl,"forward method, overrides the "),Rc=n(yl,"CODE",{});var sF=r(Rc);n1=i(sF,"__call__"),sF.forEach(t),r1=i(yl," special method."),yl.forEach(t),a1=d(ns),k(Lo.$$.fragment,ns),i1=d(ns),Uc=n(ns,"P",{});var oF=r(Uc);l1=i(oF,"Example:"),oF.forEach(t),d1=d(ns),k(si.$$.fragment,ns),ns.forEach(t),mt.forEach(t),dh=d(s),Qs=n(s,"H2",{class:!0});var vu=r(Qs);So=n(vu,"A",{id:!0,class:!0,href:!0});var nF=r(So);Hc=n(nF,"SPAN",{});var rF=r(Hc);k(oi.$$.fragment,rF),rF.forEach(t),nF.forEach(t),c1=d(vu),Qc=n(vu,"SPAN",{});var aF=r(Qc);p1=i(aF,"FlaxDistilBertForQuestionAnswering"),aF.forEach(t),vu.forEach(t),ch=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(ni.$$.fragment,gt),h1=d(gt),Ks=n(gt,"P",{});var $l=r(Ks);u1=i($l,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Kc=n($l,"CODE",{});var iF=r(Kc);f1=i(iF,"span start logits"),iF.forEach(t),m1=i($l," and "),Vc=n($l,"CODE",{});var lF=r(Vc);g1=i(lF,"span end logits"),lF.forEach(t),_1=i($l,")."),$l.forEach(t),v1=d(gt),ri=n(gt,"P",{});var bu=r(ri);b1=i(bu,"This model inherits from "),ol=n(bu,"A",{href:!0});var dF=r(ol);k1=i(dF,"FlaxPreTrainedModel"),dF.forEach(t),T1=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bu.forEach(t),w1=d(gt),ai=n(gt,"P",{});var ku=r(ai);y1=i(ku,"This model is also a Flax Linen "),ii=n(ku,"A",{href:!0,rel:!0});var cF=r(ii);$1=i(cF,"flax.linen.Module"),cF.forEach(t),D1=i(ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ku.forEach(t),F1=d(gt),Jc=n(gt,"P",{});var pF=r(Jc);B1=i(pF,"Finally, this model supports inherent JAX features such as:"),pF.forEach(t),M1=d(gt),It=n(gt,"UL",{});var Xo=r(It);Gc=n(Xo,"LI",{});var hF=r(Gc);li=n(hF,"A",{href:!0,rel:!0});var uF=r(li);E1=i(uF,"Just-In-Time (JIT) compilation"),uF.forEach(t),hF.forEach(t),x1=d(Xo),Xc=n(Xo,"LI",{});var fF=r(Xc);di=n(fF,"A",{href:!0,rel:!0});var mF=r(di);z1=i(mF,"Automatic Differentiation"),mF.forEach(t),fF.forEach(t),j1=d(Xo),Yc=n(Xo,"LI",{});var gF=r(Yc);ci=n(gF,"A",{href:!0,rel:!0});var _F=r(ci);C1=i(_F,"Vectorization"),_F.forEach(t),gF.forEach(t),P1=d(Xo),Zc=n(Xo,"LI",{});var vF=r(Zc);pi=n(vF,"A",{href:!0,rel:!0});var bF=r(pi);q1=i(bF,"Parallelization"),bF.forEach(t),vF.forEach(t),Xo.forEach(t),A1=d(gt),ct=n(gt,"DIV",{class:!0});var rs=r(ct);k(hi.$$.fragment,rs),O1=d(rs),Vs=n(rs,"P",{});var Dl=r(Vs);N1=i(Dl,"The "),ep=n(Dl,"CODE",{});var kF=r(ep);I1=i(kF,"FlaxDistilBertPreTrainedModel"),kF.forEach(t),L1=i(Dl,"forward method, overrides the "),tp=n(Dl,"CODE",{});var TF=r(tp);S1=i(TF,"__call__"),TF.forEach(t),W1=i(Dl," special method."),Dl.forEach(t),R1=d(rs),k(Wo.$$.fragment,rs),U1=d(rs),sp=n(rs,"P",{});var wF=r(sp);H1=i(wF,"Example:"),wF.forEach(t),Q1=d(rs),k(ui.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(ZF)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Js,"id","transformers.DistilBertConfig"),c(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Js,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(vi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertModel"),c(bi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(ki,"href","/docs/transformers/pr_16377/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ti,"href","/docs/transformers/pr_16377/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ve,"class","docstring"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(wi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(yi,"href","/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer"),c($i,"href","/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(Di,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(Fi,"href","/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizerFast"),c(Bi,"href","/docs/transformers/pr_16377/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Mi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(Ei,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertModel"),c(tt,"class","docstring"),c(Je,"class","docstring"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(hs,"class","relative group"),c(xi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dn,"rel","nofollow"),c(zi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Se,"class","docstring"),c(Ge,"class","docstring"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(fs,"class","relative group"),c(ji,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(ke,"class","docstring"),c(Xe,"class","docstring"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(Pi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(Rn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Rn,"rel","nofollow"),c(qi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(st,"class","docstring"),c(Ye,"class","docstring"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(vs,"class","relative group"),c(Ai,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Oi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(We,"class","docstring"),c(Ze,"class","docstring"),c(po,"id","transformers.DistilBertForQuestionAnswering"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DistilBertForQuestionAnswering"),c(ks,"class","relative group"),c(Ni,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.PreTrainedModel"),c(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nr,"rel","nofollow"),c(Ii,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Re,"class","docstring"),c(et,"class","docstring"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c(ys,"class","relative group"),c(Li,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(Si,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(ot,"class","docstring"),c(qe,"class","docstring"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Ds,"class","relative group"),c(Wi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(kr,"rel","nofollow"),c(Ri,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(bo,"id","transformers.TFDistilBertForSequenceClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(Hi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(He,"class","docstring"),c(Oe,"class","docstring"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Qi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ki,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(nt,"class","docstring"),c(Ne,"class","docstring"),c(Do,"id","transformers.TFDistilBertForTokenClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Vi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Ji,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(Qe,"class","docstring"),c(Ie,"class","docstring"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Cs,"class","relative group"),c(Gi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xr,"rel","nofollow"),c(Xi,"href","/docs/transformers/pr_16377/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(Ke,"class","docstring"),c(Le,"class","docstring"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Yi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ra,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(aa,"rel","nofollow"),c(ia,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ia,"rel","nofollow"),c(la,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(da,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(Co,"id","transformers.FlaxDistilBertForMaskedLM"),c(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Co,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ns,"class","relative group"),c(Zi,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(_a,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(_a,"rel","nofollow"),c(va,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(va,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ka,"rel","nofollow"),c(Ta,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ta,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(qo,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ls,"class","relative group"),c(el,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ma,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ma,"rel","nofollow"),c(Ea,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ea,"rel","nofollow"),c(xa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(za,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ja,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Oo,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(tl,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ia,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ia,"rel","nofollow"),c(La,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(La,"rel","nofollow"),c(Sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Sa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Ra,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Io,"id","transformers.FlaxDistilBertForTokenClassification"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Us,"class","relative group"),c(sl,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ga,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ga,"rel","nofollow"),c(Xa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xa,"rel","nofollow"),c(Ya,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ei,"rel","nofollow"),c(dt,"class","docstring"),c(je,"class","docstring"),c(So,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Qs,"class","relative group"),c(ol,"href","/docs/transformers/pr_16377/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ii,"rel","nofollow"),c(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(li,"rel","nofollow"),c(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(di,"rel","nofollow"),c(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ci,"rel","nofollow"),c(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(pi,"rel","nofollow"),c(ct,"class","docstring"),c(Ce,"class","docstring")},m(s,m){e(document.head,p),u(s,F,m),u(s,g,m),e(g,v),e(v,D),T(_,D,null),e(g,f),e(g,B),e(B,ce),u(s,K,m),u(s,E,m),e(E,G),e(G,L),T(X,L,null),e(E,pe),e(E,S),e(S,he),u(s,ae,m),u(s,N,m),e(N,q),e(N,Y),e(Y,V),e(N,x),e(N,z),e(z,ue),e(N,W),e(N,se),e(se,fe),e(N,R),u(s,ie,m),u(s,ee,m),e(ee,A),u(s,le,m),u(s,I,m),e(I,oe),e(oe,me),u(s,P,m),u(s,te,m),e(te,U),u(s,de,m),u(s,h,m),e(h,M),e(M,J),e(M,_e),e(_e,Te),e(M,O),e(M,ve),e(ve,we),e(M,ye),e(M,C),e(C,H),e(M,$e),e(h,De),e(h,Z),e(Z,Fe),e(Z,ne),e(ne,Be),e(Z,Tu),u(s,wp,m),u(s,bt,m),e(bt,wu),e(bt,Yo),e(Yo,yu),e(bt,$u),e(bt,Zo),e(Zo,Du),e(bt,Fu),e(bt,en),e(en,Bu),e(bt,Mu),u(s,yp,m),u(s,as,m),e(as,Js),e(Js,Fl),T(tn,Fl,null),e(as,Eu),e(as,Bl),e(Bl,xu),u(s,$p,m),u(s,Ve,m),T(sn,Ve,null),e(Ve,zu),e(Ve,Ct),e(Ct,ju),e(Ct,vi),e(vi,Cu),e(Ct,Pu),e(Ct,bi),e(bi,qu),e(Ct,Au),e(Ct,on),e(on,Ou),e(Ct,Nu),e(Ve,Iu),e(Ve,is),e(is,Lu),e(is,ki),e(ki,Su),e(is,Wu),e(is,Ti),e(Ti,Ru),e(is,Uu),e(Ve,Hu),e(Ve,Ml),e(Ml,Qu),e(Ve,Ku),T(nn,Ve,null),u(s,Dp,m),u(s,ls,m),e(ls,Gs),e(Gs,El),T(rn,El,null),e(ls,Vu),e(ls,xl),e(xl,Ju),u(s,Fp,m),u(s,_t,m),T(an,_t,null),e(_t,Gu),e(_t,zl),e(zl,Xu),e(_t,Yu),e(_t,Xs),e(Xs,wi),e(wi,Zu),e(Xs,ef),e(Xs,yi),e(yi,tf),e(Xs,sf),e(_t,of),e(_t,ln),e(ln,nf),e(ln,$i),e($i,rf),e(ln,af),u(s,Bp,m),u(s,ds,m),e(ds,Ys),e(Ys,jl),T(dn,jl,null),e(ds,lf),e(ds,Cl),e(Cl,df),u(s,Mp,m),u(s,vt,m),T(cn,vt,null),e(vt,cf),e(vt,pn),e(pn,pf),e(pn,Pl),e(Pl,hf),e(pn,uf),e(vt,ff),e(vt,Zs),e(Zs,Di),e(Di,mf),e(Zs,gf),e(Zs,Fi),e(Fi,_f),e(Zs,vf),e(vt,bf),e(vt,hn),e(hn,kf),e(hn,Bi),e(Bi,Tf),e(hn,wf),u(s,Ep,m),u(s,cs,m),e(cs,eo),e(eo,ql),T(un,ql,null),e(cs,yf),e(cs,Al),e(Al,$f),u(s,xp,m),u(s,Je,m),T(fn,Je,null),e(Je,Df),e(Je,Ol),e(Ol,Ff),e(Je,Bf),e(Je,mn),e(mn,Mf),e(mn,Mi),e(Mi,Ef),e(mn,xf),e(Je,zf),e(Je,gn),e(gn,jf),e(gn,_n),e(_n,Cf),e(gn,Pf),e(Je,qf),e(Je,tt),T(vn,tt,null),e(tt,Af),e(tt,ps),e(ps,Of),e(ps,Ei),e(Ei,Nf),e(ps,If),e(ps,Nl),e(Nl,Lf),e(ps,Sf),e(tt,Wf),T(to,tt,null),e(tt,Rf),e(tt,Il),e(Il,Uf),e(tt,Hf),T(bn,tt,null),u(s,zp,m),u(s,hs,m),e(hs,so),e(so,Ll),T(kn,Ll,null),e(hs,Qf),e(hs,Sl),e(Sl,Kf),u(s,jp,m),u(s,Ge,m),T(Tn,Ge,null),e(Ge,Vf),e(Ge,wn),e(wn,Jf),e(wn,Wl),e(Wl,Gf),e(wn,Xf),e(Ge,Yf),e(Ge,yn),e(yn,Zf),e(yn,xi),e(xi,em),e(yn,tm),e(Ge,sm),e(Ge,$n),e($n,om),e($n,Dn),e(Dn,nm),e($n,rm),e(Ge,am),e(Ge,Se),T(Fn,Se,null),e(Se,im),e(Se,us),e(us,lm),e(us,zi),e(zi,dm),e(us,cm),e(us,Rl),e(Rl,pm),e(us,hm),e(Se,um),T(oo,Se,null),e(Se,fm),e(Se,Ul),e(Ul,mm),e(Se,gm),T(Bn,Se,null),e(Se,_m),T(Mn,Se,null),u(s,Cp,m),u(s,fs,m),e(fs,no),e(no,Hl),T(En,Hl,null),e(fs,vm),e(fs,Ql),e(Ql,bm),u(s,Pp,m),u(s,Xe,m),T(xn,Xe,null),e(Xe,km),e(Xe,Kl),e(Kl,Tm),e(Xe,wm),e(Xe,zn),e(zn,ym),e(zn,ji),e(ji,$m),e(zn,Dm),e(Xe,Fm),e(Xe,jn),e(jn,Bm),e(jn,Cn),e(Cn,Mm),e(jn,Em),e(Xe,xm),e(Xe,ke),T(Pn,ke,null),e(ke,zm),e(ke,ms),e(ms,jm),e(ms,Ci),e(Ci,Cm),e(ms,Pm),e(ms,Vl),e(Vl,qm),e(ms,Am),e(ke,Om),T(ro,ke,null),e(ke,Nm),e(ke,Jl),e(Jl,Im),e(ke,Lm),T(qn,ke,null),e(ke,Sm),T(An,ke,null),e(ke,Wm),e(ke,Gl),e(Gl,Rm),e(ke,Um),T(On,ke,null),e(ke,Hm),T(Nn,ke,null),u(s,qp,m),u(s,gs,m),e(gs,ao),e(ao,Xl),T(In,Xl,null),e(gs,Qm),e(gs,Yl),e(Yl,Km),u(s,Ap,m),u(s,Ye,m),T(Ln,Ye,null),e(Ye,Vm),e(Ye,Zl),e(Zl,Jm),e(Ye,Gm),e(Ye,Sn),e(Sn,Xm),e(Sn,Pi),e(Pi,Ym),e(Sn,Zm),e(Ye,eg),e(Ye,Wn),e(Wn,tg),e(Wn,Rn),e(Rn,sg),e(Wn,og),e(Ye,ng),e(Ye,st),T(Un,st,null),e(st,rg),e(st,_s),e(_s,ag),e(_s,qi),e(qi,ig),e(_s,lg),e(_s,ed),e(ed,dg),e(_s,cg),e(st,pg),T(io,st,null),e(st,hg),e(st,td),e(td,ug),e(st,fg),T(Hn,st,null),u(s,Op,m),u(s,vs,m),e(vs,lo),e(lo,sd),T(Qn,sd,null),e(vs,mg),e(vs,od),e(od,gg),u(s,Np,m),u(s,Ze,m),T(Kn,Ze,null),e(Ze,_g),e(Ze,nd),e(nd,vg),e(Ze,bg),e(Ze,Vn),e(Vn,kg),e(Vn,Ai),e(Ai,Tg),e(Vn,wg),e(Ze,yg),e(Ze,Jn),e(Jn,$g),e(Jn,Gn),e(Gn,Dg),e(Jn,Fg),e(Ze,Bg),e(Ze,We),T(Xn,We,null),e(We,Mg),e(We,bs),e(bs,Eg),e(bs,Oi),e(Oi,xg),e(bs,zg),e(bs,rd),e(rd,jg),e(bs,Cg),e(We,Pg),T(co,We,null),e(We,qg),e(We,ad),e(ad,Ag),e(We,Og),T(Yn,We,null),e(We,Ng),T(Zn,We,null),u(s,Ip,m),u(s,ks,m),e(ks,po),e(po,id),T(er,id,null),e(ks,Ig),e(ks,ld),e(ld,Lg),u(s,Lp,m),u(s,et,m),T(tr,et,null),e(et,Sg),e(et,Ts),e(Ts,Wg),e(Ts,dd),e(dd,Rg),e(Ts,Ug),e(Ts,cd),e(cd,Hg),e(Ts,Qg),e(et,Kg),e(et,sr),e(sr,Vg),e(sr,Ni),e(Ni,Jg),e(sr,Gg),e(et,Xg),e(et,or),e(or,Yg),e(or,nr),e(nr,Zg),e(or,e_),e(et,t_),e(et,Re),T(rr,Re,null),e(Re,s_),e(Re,ws),e(ws,o_),e(ws,Ii),e(Ii,n_),e(ws,r_),e(ws,pd),e(pd,a_),e(ws,i_),e(Re,l_),T(ho,Re,null),e(Re,d_),e(Re,hd),e(hd,c_),e(Re,p_),T(ar,Re,null),e(Re,h_),T(ir,Re,null),u(s,Sp,m),u(s,ys,m),e(ys,uo),e(uo,ud),T(lr,ud,null),e(ys,u_),e(ys,fd),e(fd,f_),u(s,Wp,m),u(s,qe,m),T(dr,qe,null),e(qe,m_),e(qe,md),e(md,g_),e(qe,__),e(qe,cr),e(cr,v_),e(cr,Li),e(Li,b_),e(cr,k_),e(qe,T_),e(qe,pr),e(pr,w_),e(pr,hr),e(hr,y_),e(pr,$_),e(qe,D_),T(fo,qe,null),e(qe,F_),e(qe,ot),T(ur,ot,null),e(ot,B_),e(ot,$s),e($s,M_),e($s,Si),e(Si,E_),e($s,x_),e($s,gd),e(gd,z_),e($s,j_),e(ot,C_),T(mo,ot,null),e(ot,P_),e(ot,_d),e(_d,q_),e(ot,A_),T(fr,ot,null),u(s,Rp,m),u(s,Ds,m),e(Ds,go),e(go,vd),T(mr,vd,null),e(Ds,O_),e(Ds,bd),e(bd,N_),u(s,Up,m),u(s,Ae,m),T(gr,Ae,null),e(Ae,I_),e(Ae,_r),e(_r,L_),e(_r,kd),e(kd,S_),e(_r,W_),e(Ae,R_),e(Ae,vr),e(vr,U_),e(vr,Wi),e(Wi,H_),e(vr,Q_),e(Ae,K_),e(Ae,br),e(br,V_),e(br,kr),e(kr,J_),e(br,G_),e(Ae,X_),T(_o,Ae,null),e(Ae,Y_),e(Ae,Ue),T(Tr,Ue,null),e(Ue,Z_),e(Ue,Fs),e(Fs,ev),e(Fs,Ri),e(Ri,tv),e(Fs,sv),e(Fs,Td),e(Td,ov),e(Fs,nv),e(Ue,rv),T(vo,Ue,null),e(Ue,av),e(Ue,wd),e(wd,iv),e(Ue,lv),T(wr,Ue,null),e(Ue,dv),T(yr,Ue,null),u(s,Hp,m),u(s,Bs,m),e(Bs,bo),e(bo,yd),T($r,yd,null),e(Bs,cv),e(Bs,$d),e($d,pv),u(s,Qp,m),u(s,Oe,m),T(Dr,Oe,null),e(Oe,hv),e(Oe,Dd),e(Dd,uv),e(Oe,fv),e(Oe,Fr),e(Fr,mv),e(Fr,Ui),e(Ui,gv),e(Fr,_v),e(Oe,vv),e(Oe,Br),e(Br,bv),e(Br,Mr),e(Mr,kv),e(Br,Tv),e(Oe,wv),T(ko,Oe,null),e(Oe,yv),e(Oe,He),T(Er,He,null),e(He,$v),e(He,Ms),e(Ms,Dv),e(Ms,Hi),e(Hi,Fv),e(Ms,Bv),e(Ms,Fd),e(Fd,Mv),e(Ms,Ev),e(He,xv),T(To,He,null),e(He,zv),e(He,Bd),e(Bd,jv),e(He,Cv),T(xr,He,null),e(He,Pv),T(zr,He,null),u(s,Kp,m),u(s,Es,m),e(Es,wo),e(wo,Md),T(jr,Md,null),e(Es,qv),e(Es,Ed),e(Ed,Av),u(s,Vp,m),u(s,Ne,m),T(Cr,Ne,null),e(Ne,Ov),e(Ne,xd),e(xd,Nv),e(Ne,Iv),e(Ne,Pr),e(Pr,Lv),e(Pr,Qi),e(Qi,Sv),e(Pr,Wv),e(Ne,Rv),e(Ne,qr),e(qr,Uv),e(qr,Ar),e(Ar,Hv),e(qr,Qv),e(Ne,Kv),T(yo,Ne,null),e(Ne,Vv),e(Ne,nt),T(Or,nt,null),e(nt,Jv),e(nt,xs),e(xs,Gv),e(xs,Ki),e(Ki,Xv),e(xs,Yv),e(xs,zd),e(zd,Zv),e(xs,eb),e(nt,tb),T($o,nt,null),e(nt,sb),e(nt,jd),e(jd,ob),e(nt,nb),T(Nr,nt,null),u(s,Jp,m),u(s,zs,m),e(zs,Do),e(Do,Cd),T(Ir,Cd,null),e(zs,rb),e(zs,Pd),e(Pd,ab),u(s,Gp,m),u(s,Ie,m),T(Lr,Ie,null),e(Ie,ib),e(Ie,qd),e(qd,lb),e(Ie,db),e(Ie,Sr),e(Sr,cb),e(Sr,Vi),e(Vi,pb),e(Sr,hb),e(Ie,ub),e(Ie,Wr),e(Wr,fb),e(Wr,Rr),e(Rr,mb),e(Wr,gb),e(Ie,_b),T(Fo,Ie,null),e(Ie,vb),e(Ie,Qe),T(Ur,Qe,null),e(Qe,bb),e(Qe,js),e(js,kb),e(js,Ji),e(Ji,Tb),e(js,wb),e(js,Ad),e(Ad,yb),e(js,$b),e(Qe,Db),T(Bo,Qe,null),e(Qe,Fb),e(Qe,Od),e(Od,Bb),e(Qe,Mb),T(Hr,Qe,null),e(Qe,Eb),T(Qr,Qe,null),u(s,Xp,m),u(s,Cs,m),e(Cs,Mo),e(Mo,Nd),T(Kr,Nd,null),e(Cs,xb),e(Cs,Id),e(Id,zb),u(s,Yp,m),u(s,Le,m),T(Vr,Le,null),e(Le,jb),e(Le,Ps),e(Ps,Cb),e(Ps,Ld),e(Ld,Pb),e(Ps,qb),e(Ps,Sd),e(Sd,Ab),e(Ps,Ob),e(Le,Nb),e(Le,Jr),e(Jr,Ib),e(Jr,Gi),e(Gi,Lb),e(Jr,Sb),e(Le,Wb),e(Le,Gr),e(Gr,Rb),e(Gr,Xr),e(Xr,Ub),e(Gr,Hb),e(Le,Qb),T(Eo,Le,null),e(Le,Kb),e(Le,Ke),T(Yr,Ke,null),e(Ke,Vb),e(Ke,qs),e(qs,Jb),e(qs,Xi),e(Xi,Gb),e(qs,Xb),e(qs,Wd),e(Wd,Yb),e(qs,Zb),e(Ke,ek),T(xo,Ke,null),e(Ke,tk),e(Ke,Rd),e(Rd,sk),e(Ke,ok),T(Zr,Ke,null),e(Ke,nk),T(ea,Ke,null),u(s,Zp,m),u(s,As,m),e(As,zo),e(zo,Ud),T(ta,Ud,null),e(As,rk),e(As,Hd),e(Hd,ak),u(s,eh,m),u(s,Me,m),T(sa,Me,null),e(Me,ik),e(Me,Qd),e(Qd,lk),e(Me,dk),e(Me,oa),e(oa,ck),e(oa,Yi),e(Yi,pk),e(oa,hk),e(Me,uk),e(Me,na),e(na,fk),e(na,ra),e(ra,mk),e(na,gk),e(Me,_k),e(Me,Kd),e(Kd,vk),e(Me,bk),e(Me,Pt),e(Pt,Vd),e(Vd,aa),e(aa,kk),e(Pt,Tk),e(Pt,Jd),e(Jd,ia),e(ia,wk),e(Pt,yk),e(Pt,Gd),e(Gd,la),e(la,$k),e(Pt,Dk),e(Pt,Xd),e(Xd,da),e(da,Fk),e(Me,Bk),e(Me,rt),T(ca,rt,null),e(rt,Mk),e(rt,Os),e(Os,Ek),e(Os,Yd),e(Yd,xk),e(Os,zk),e(Os,Zd),e(Zd,jk),e(Os,Ck),e(rt,Pk),T(jo,rt,null),e(rt,qk),e(rt,ec),e(ec,Ak),e(rt,Ok),T(pa,rt,null),u(s,th,m),u(s,Ns,m),e(Ns,Co),e(Co,tc),T(ha,tc,null),e(Ns,Nk),e(Ns,sc),e(sc,Ik),u(s,sh,m),u(s,Ee,m),T(ua,Ee,null),e(Ee,Lk),e(Ee,fa),e(fa,Sk),e(fa,oc),e(oc,Wk),e(fa,Rk),e(Ee,Uk),e(Ee,ma),e(ma,Hk),e(ma,Zi),e(Zi,Qk),e(ma,Kk),e(Ee,Vk),e(Ee,ga),e(ga,Jk),e(ga,_a),e(_a,Gk),e(ga,Xk),e(Ee,Yk),e(Ee,nc),e(nc,Zk),e(Ee,eT),e(Ee,qt),e(qt,rc),e(rc,va),e(va,tT),e(qt,sT),e(qt,ac),e(ac,ba),e(ba,oT),e(qt,nT),e(qt,ic),e(ic,ka),e(ka,rT),e(qt,aT),e(qt,lc),e(lc,Ta),e(Ta,iT),e(Ee,lT),e(Ee,at),T(wa,at,null),e(at,dT),e(at,Is),e(Is,cT),e(Is,dc),e(dc,pT),e(Is,hT),e(Is,cc),e(cc,uT),e(Is,fT),e(at,mT),T(Po,at,null),e(at,gT),e(at,pc),e(pc,_T),e(at,vT),T(ya,at,null),u(s,oh,m),u(s,Ls,m),e(Ls,qo),e(qo,hc),T($a,hc,null),e(Ls,bT),e(Ls,uc),e(uc,kT),u(s,nh,m),u(s,xe,m),T(Da,xe,null),e(xe,TT),e(xe,fc),e(fc,wT),e(xe,yT),e(xe,Fa),e(Fa,$T),e(Fa,el),e(el,DT),e(Fa,FT),e(xe,BT),e(xe,Ba),e(Ba,MT),e(Ba,Ma),e(Ma,ET),e(Ba,xT),e(xe,zT),e(xe,mc),e(mc,jT),e(xe,CT),e(xe,At),e(At,gc),e(gc,Ea),e(Ea,PT),e(At,qT),e(At,_c),e(_c,xa),e(xa,AT),e(At,OT),e(At,vc),e(vc,za),e(za,NT),e(At,IT),e(At,bc),e(bc,ja),e(ja,LT),e(xe,ST),e(xe,it),T(Ca,it,null),e(it,WT),e(it,Ss),e(Ss,RT),e(Ss,kc),e(kc,UT),e(Ss,HT),e(Ss,Tc),e(Tc,QT),e(Ss,KT),e(it,VT),T(Ao,it,null),e(it,JT),e(it,wc),e(wc,GT),e(it,XT),T(Pa,it,null),u(s,rh,m),u(s,Ws,m),e(Ws,Oo),e(Oo,yc),T(qa,yc,null),e(Ws,YT),e(Ws,$c),e($c,ZT),u(s,ah,m),u(s,ze,m),T(Aa,ze,null),e(ze,ew),e(ze,Dc),e(Dc,tw),e(ze,sw),e(ze,Oa),e(Oa,ow),e(Oa,tl),e(tl,nw),e(Oa,rw),e(ze,aw),e(ze,Na),e(Na,iw),e(Na,Ia),e(Ia,lw),e(Na,dw),e(ze,cw),e(ze,Fc),e(Fc,pw),e(ze,hw),e(ze,Ot),e(Ot,Bc),e(Bc,La),e(La,uw),e(Ot,fw),e(Ot,Mc),e(Mc,Sa),e(Sa,mw),e(Ot,gw),e(Ot,Ec),e(Ec,Wa),e(Wa,_w),e(Ot,vw),e(Ot,xc),e(xc,Ra),e(Ra,bw),e(ze,kw),e(ze,lt),T(Ua,lt,null),e(lt,Tw),e(lt,Rs),e(Rs,ww),e(Rs,zc),e(zc,yw),e(Rs,$w),e(Rs,jc),e(jc,Dw),e(Rs,Fw),e(lt,Bw),T(No,lt,null),e(lt,Mw),e(lt,Cc),e(Cc,Ew),e(lt,xw),T(Ha,lt,null),u(s,ih,m),u(s,Us,m),e(Us,Io),e(Io,Pc),T(Qa,Pc,null),e(Us,zw),e(Us,qc),e(qc,jw),u(s,lh,m),u(s,je,m),T(Ka,je,null),e(je,Cw),e(je,Ac),e(Ac,Pw),e(je,qw),e(je,Va),e(Va,Aw),e(Va,sl),e(sl,Ow),e(Va,Nw),e(je,Iw),e(je,Ja),e(Ja,Lw),e(Ja,Ga),e(Ga,Sw),e(Ja,Ww),e(je,Rw),e(je,Oc),e(Oc,Uw),e(je,Hw),e(je,Nt),e(Nt,Nc),e(Nc,Xa),e(Xa,Qw),e(Nt,Kw),e(Nt,Ic),e(Ic,Ya),e(Ya,Vw),e(Nt,Jw),e(Nt,Lc),e(Lc,Za),e(Za,Gw),e(Nt,Xw),e(Nt,Sc),e(Sc,ei),e(ei,Yw),e(je,Zw),e(je,dt),T(ti,dt,null),e(dt,e1),e(dt,Hs),e(Hs,t1),e(Hs,Wc),e(Wc,s1),e(Hs,o1),e(Hs,Rc),e(Rc,n1),e(Hs,r1),e(dt,a1),T(Lo,dt,null),e(dt,i1),e(dt,Uc),e(Uc,l1),e(dt,d1),T(si,dt,null),u(s,dh,m),u(s,Qs,m),e(Qs,So),e(So,Hc),T(oi,Hc,null),e(Qs,c1),e(Qs,Qc),e(Qc,p1),u(s,ch,m),u(s,Ce,m),T(ni,Ce,null),e(Ce,h1),e(Ce,Ks),e(Ks,u1),e(Ks,Kc),e(Kc,f1),e(Ks,m1),e(Ks,Vc),e(Vc,g1),e(Ks,_1),e(Ce,v1),e(Ce,ri),e(ri,b1),e(ri,ol),e(ol,k1),e(ri,T1),e(Ce,w1),e(Ce,ai),e(ai,y1),e(ai,ii),e(ii,$1),e(ai,D1),e(Ce,F1),e(Ce,Jc),e(Jc,B1),e(Ce,M1),e(Ce,It),e(It,Gc),e(Gc,li),e(li,E1),e(It,x1),e(It,Xc),e(Xc,di),e(di,z1),e(It,j1),e(It,Yc),e(Yc,ci),e(ci,C1),e(It,P1),e(It,Zc),e(Zc,pi),e(pi,q1),e(Ce,A1),e(Ce,ct),T(hi,ct,null),e(ct,O1),e(ct,Vs),e(Vs,N1),e(Vs,ep),e(ep,I1),e(Vs,L1),e(Vs,tp),e(tp,S1),e(Vs,W1),e(ct,R1),T(Wo,ct,null),e(ct,U1),e(ct,sp),e(sp,H1),e(ct,Q1),T(ui,ct,null),ph=!0},p(s,[m]){const fi={};m&2&&(fi.$$scope={dirty:m,ctx:s}),to.$set(fi);const op={};m&2&&(op.$$scope={dirty:m,ctx:s}),oo.$set(op);const np={};m&2&&(np.$$scope={dirty:m,ctx:s}),ro.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:s}),io.$set(rp);const mi={};m&2&&(mi.$$scope={dirty:m,ctx:s}),co.$set(mi);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:s}),ho.$set(ap);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:s}),fo.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:s}),mo.$set(lp);const Lt={};m&2&&(Lt.$$scope={dirty:m,ctx:s}),_o.$set(Lt);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:s}),vo.$set(dp);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:s}),ko.$set(cp);const pp={};m&2&&(pp.$$scope={dirty:m,ctx:s}),To.$set(pp);const hp={};m&2&&(hp.$$scope={dirty:m,ctx:s}),yo.$set(hp);const up={};m&2&&(up.$$scope={dirty:m,ctx:s}),$o.$set(up);const fp={};m&2&&(fp.$$scope={dirty:m,ctx:s}),Fo.$set(fp);const mp={};m&2&&(mp.$$scope={dirty:m,ctx:s}),Bo.$set(mp);const gi={};m&2&&(gi.$$scope={dirty:m,ctx:s}),Eo.$set(gi);const St={};m&2&&(St.$$scope={dirty:m,ctx:s}),xo.$set(St);const gp={};m&2&&(gp.$$scope={dirty:m,ctx:s}),jo.$set(gp);const _p={};m&2&&(_p.$$scope={dirty:m,ctx:s}),Po.$set(_p);const vp={};m&2&&(vp.$$scope={dirty:m,ctx:s}),Ao.$set(vp);const _i={};m&2&&(_i.$$scope={dirty:m,ctx:s}),No.$set(_i);const bp={};m&2&&(bp.$$scope={dirty:m,ctx:s}),Lo.$set(bp);const Wt={};m&2&&(Wt.$$scope={dirty:m,ctx:s}),Wo.$set(Wt)},i(s){ph||(w(_.$$.fragment,s),w(X.$$.fragment,s),w(tn.$$.fragment,s),w(sn.$$.fragment,s),w(nn.$$.fragment,s),w(rn.$$.fragment,s),w(an.$$.fragment,s),w(dn.$$.fragment,s),w(cn.$$.fragment,s),w(un.$$.fragment,s),w(fn.$$.fragment,s),w(vn.$$.fragment,s),w(to.$$.fragment,s),w(bn.$$.fragment,s),w(kn.$$.fragment,s),w(Tn.$$.fragment,s),w(Fn.$$.fragment,s),w(oo.$$.fragment,s),w(Bn.$$.fragment,s),w(Mn.$$.fragment,s),w(En.$$.fragment,s),w(xn.$$.fragment,s),w(Pn.$$.fragment,s),w(ro.$$.fragment,s),w(qn.$$.fragment,s),w(An.$$.fragment,s),w(On.$$.fragment,s),w(Nn.$$.fragment,s),w(In.$$.fragment,s),w(Ln.$$.fragment,s),w(Un.$$.fragment,s),w(io.$$.fragment,s),w(Hn.$$.fragment,s),w(Qn.$$.fragment,s),w(Kn.$$.fragment,s),w(Xn.$$.fragment,s),w(co.$$.fragment,s),w(Yn.$$.fragment,s),w(Zn.$$.fragment,s),w(er.$$.fragment,s),w(tr.$$.fragment,s),w(rr.$$.fragment,s),w(ho.$$.fragment,s),w(ar.$$.fragment,s),w(ir.$$.fragment,s),w(lr.$$.fragment,s),w(dr.$$.fragment,s),w(fo.$$.fragment,s),w(ur.$$.fragment,s),w(mo.$$.fragment,s),w(fr.$$.fragment,s),w(mr.$$.fragment,s),w(gr.$$.fragment,s),w(_o.$$.fragment,s),w(Tr.$$.fragment,s),w(vo.$$.fragment,s),w(wr.$$.fragment,s),w(yr.$$.fragment,s),w($r.$$.fragment,s),w(Dr.$$.fragment,s),w(ko.$$.fragment,s),w(Er.$$.fragment,s),w(To.$$.fragment,s),w(xr.$$.fragment,s),w(zr.$$.fragment,s),w(jr.$$.fragment,s),w(Cr.$$.fragment,s),w(yo.$$.fragment,s),w(Or.$$.fragment,s),w($o.$$.fragment,s),w(Nr.$$.fragment,s),w(Ir.$$.fragment,s),w(Lr.$$.fragment,s),w(Fo.$$.fragment,s),w(Ur.$$.fragment,s),w(Bo.$$.fragment,s),w(Hr.$$.fragment,s),w(Qr.$$.fragment,s),w(Kr.$$.fragment,s),w(Vr.$$.fragment,s),w(Eo.$$.fragment,s),w(Yr.$$.fragment,s),w(xo.$$.fragment,s),w(Zr.$$.fragment,s),w(ea.$$.fragment,s),w(ta.$$.fragment,s),w(sa.$$.fragment,s),w(ca.$$.fragment,s),w(jo.$$.fragment,s),w(pa.$$.fragment,s),w(ha.$$.fragment,s),w(ua.$$.fragment,s),w(wa.$$.fragment,s),w(Po.$$.fragment,s),w(ya.$$.fragment,s),w($a.$$.fragment,s),w(Da.$$.fragment,s),w(Ca.$$.fragment,s),w(Ao.$$.fragment,s),w(Pa.$$.fragment,s),w(qa.$$.fragment,s),w(Aa.$$.fragment,s),w(Ua.$$.fragment,s),w(No.$$.fragment,s),w(Ha.$$.fragment,s),w(Qa.$$.fragment,s),w(Ka.$$.fragment,s),w(ti.$$.fragment,s),w(Lo.$$.fragment,s),w(si.$$.fragment,s),w(oi.$$.fragment,s),w(ni.$$.fragment,s),w(hi.$$.fragment,s),w(Wo.$$.fragment,s),w(ui.$$.fragment,s),ph=!0)},o(s){y(_.$$.fragment,s),y(X.$$.fragment,s),y(tn.$$.fragment,s),y(sn.$$.fragment,s),y(nn.$$.fragment,s),y(rn.$$.fragment,s),y(an.$$.fragment,s),y(dn.$$.fragment,s),y(cn.$$.fragment,s),y(un.$$.fragment,s),y(fn.$$.fragment,s),y(vn.$$.fragment,s),y(to.$$.fragment,s),y(bn.$$.fragment,s),y(kn.$$.fragment,s),y(Tn.$$.fragment,s),y(Fn.$$.fragment,s),y(oo.$$.fragment,s),y(Bn.$$.fragment,s),y(Mn.$$.fragment,s),y(En.$$.fragment,s),y(xn.$$.fragment,s),y(Pn.$$.fragment,s),y(ro.$$.fragment,s),y(qn.$$.fragment,s),y(An.$$.fragment,s),y(On.$$.fragment,s),y(Nn.$$.fragment,s),y(In.$$.fragment,s),y(Ln.$$.fragment,s),y(Un.$$.fragment,s),y(io.$$.fragment,s),y(Hn.$$.fragment,s),y(Qn.$$.fragment,s),y(Kn.$$.fragment,s),y(Xn.$$.fragment,s),y(co.$$.fragment,s),y(Yn.$$.fragment,s),y(Zn.$$.fragment,s),y(er.$$.fragment,s),y(tr.$$.fragment,s),y(rr.$$.fragment,s),y(ho.$$.fragment,s),y(ar.$$.fragment,s),y(ir.$$.fragment,s),y(lr.$$.fragment,s),y(dr.$$.fragment,s),y(fo.$$.fragment,s),y(ur.$$.fragment,s),y(mo.$$.fragment,s),y(fr.$$.fragment,s),y(mr.$$.fragment,s),y(gr.$$.fragment,s),y(_o.$$.fragment,s),y(Tr.$$.fragment,s),y(vo.$$.fragment,s),y(wr.$$.fragment,s),y(yr.$$.fragment,s),y($r.$$.fragment,s),y(Dr.$$.fragment,s),y(ko.$$.fragment,s),y(Er.$$.fragment,s),y(To.$$.fragment,s),y(xr.$$.fragment,s),y(zr.$$.fragment,s),y(jr.$$.fragment,s),y(Cr.$$.fragment,s),y(yo.$$.fragment,s),y(Or.$$.fragment,s),y($o.$$.fragment,s),y(Nr.$$.fragment,s),y(Ir.$$.fragment,s),y(Lr.$$.fragment,s),y(Fo.$$.fragment,s),y(Ur.$$.fragment,s),y(Bo.$$.fragment,s),y(Hr.$$.fragment,s),y(Qr.$$.fragment,s),y(Kr.$$.fragment,s),y(Vr.$$.fragment,s),y(Eo.$$.fragment,s),y(Yr.$$.fragment,s),y(xo.$$.fragment,s),y(Zr.$$.fragment,s),y(ea.$$.fragment,s),y(ta.$$.fragment,s),y(sa.$$.fragment,s),y(ca.$$.fragment,s),y(jo.$$.fragment,s),y(pa.$$.fragment,s),y(ha.$$.fragment,s),y(ua.$$.fragment,s),y(wa.$$.fragment,s),y(Po.$$.fragment,s),y(ya.$$.fragment,s),y($a.$$.fragment,s),y(Da.$$.fragment,s),y(Ca.$$.fragment,s),y(Ao.$$.fragment,s),y(Pa.$$.fragment,s),y(qa.$$.fragment,s),y(Aa.$$.fragment,s),y(Ua.$$.fragment,s),y(No.$$.fragment,s),y(Ha.$$.fragment,s),y(Qa.$$.fragment,s),y(Ka.$$.fragment,s),y(ti.$$.fragment,s),y(Lo.$$.fragment,s),y(si.$$.fragment,s),y(oi.$$.fragment,s),y(ni.$$.fragment,s),y(hi.$$.fragment,s),y(Wo.$$.fragment,s),y(ui.$$.fragment,s),ph=!1},d(s){t(p),s&&t(F),s&&t(g),$(_),s&&t(K),s&&t(E),$(X),s&&t(ae),s&&t(N),s&&t(ie),s&&t(ee),s&&t(le),s&&t(I),s&&t(P),s&&t(te),s&&t(de),s&&t(h),s&&t(wp),s&&t(bt),s&&t(yp),s&&t(as),$(tn),s&&t($p),s&&t(Ve),$(sn),$(nn),s&&t(Dp),s&&t(ls),$(rn),s&&t(Fp),s&&t(_t),$(an),s&&t(Bp),s&&t(ds),$(dn),s&&t(Mp),s&&t(vt),$(cn),s&&t(Ep),s&&t(cs),$(un),s&&t(xp),s&&t(Je),$(fn),$(vn),$(to),$(bn),s&&t(zp),s&&t(hs),$(kn),s&&t(jp),s&&t(Ge),$(Tn),$(Fn),$(oo),$(Bn),$(Mn),s&&t(Cp),s&&t(fs),$(En),s&&t(Pp),s&&t(Xe),$(xn),$(Pn),$(ro),$(qn),$(An),$(On),$(Nn),s&&t(qp),s&&t(gs),$(In),s&&t(Ap),s&&t(Ye),$(Ln),$(Un),$(io),$(Hn),s&&t(Op),s&&t(vs),$(Qn),s&&t(Np),s&&t(Ze),$(Kn),$(Xn),$(co),$(Yn),$(Zn),s&&t(Ip),s&&t(ks),$(er),s&&t(Lp),s&&t(et),$(tr),$(rr),$(ho),$(ar),$(ir),s&&t(Sp),s&&t(ys),$(lr),s&&t(Wp),s&&t(qe),$(dr),$(fo),$(ur),$(mo),$(fr),s&&t(Rp),s&&t(Ds),$(mr),s&&t(Up),s&&t(Ae),$(gr),$(_o),$(Tr),$(vo),$(wr),$(yr),s&&t(Hp),s&&t(Bs),$($r),s&&t(Qp),s&&t(Oe),$(Dr),$(ko),$(Er),$(To),$(xr),$(zr),s&&t(Kp),s&&t(Es),$(jr),s&&t(Vp),s&&t(Ne),$(Cr),$(yo),$(Or),$($o),$(Nr),s&&t(Jp),s&&t(zs),$(Ir),s&&t(Gp),s&&t(Ie),$(Lr),$(Fo),$(Ur),$(Bo),$(Hr),$(Qr),s&&t(Xp),s&&t(Cs),$(Kr),s&&t(Yp),s&&t(Le),$(Vr),$(Eo),$(Yr),$(xo),$(Zr),$(ea),s&&t(Zp),s&&t(As),$(ta),s&&t(eh),s&&t(Me),$(sa),$(ca),$(jo),$(pa),s&&t(th),s&&t(Ns),$(ha),s&&t(sh),s&&t(Ee),$(ua),$(wa),$(Po),$(ya),s&&t(oh),s&&t(Ls),$($a),s&&t(nh),s&&t(xe),$(Da),$(Ca),$(Ao),$(Pa),s&&t(rh),s&&t(Ws),$(qa),s&&t(ah),s&&t(ze),$(Aa),$(Ua),$(No),$(Ha),s&&t(ih),s&&t(Us),$(Qa),s&&t(lh),s&&t(je),$(Ka),$(ti),$(Lo),$(si),s&&t(dh),s&&t(Qs),$(oi),s&&t(ch),s&&t(Ce),$(ni),$(hi),$(Wo),$(ui)}}}const ZF={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function eB(j){return BF(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aB extends yF{constructor(p){super();$F(this,p,eB,YF,DF,{})}}export{aB as default,ZF as metadata};
