import{S as ry,i as ay,s as iy,e as o,k as l,w as b,t as a,M as ly,c as n,d as t,m as d,a as r,x as k,h as i,b as c,F as e,g as u,y as w,q as $,o as D,B as F}from"../../chunks/vendor-4833417e.js";import{T as me}from"../../chunks/Tip-fffd6df1.js";import{D as U}from"../../chunks/Docstring-4f315ed9.js";import{C as ye}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as ve}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function dy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function cy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function py(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function hy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function uy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function fy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function my(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function gy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function _y(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function vy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Ty(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function by(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function ky(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function wy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $y(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function Dy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Fy(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le;return{c(){p=o("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=o("ul"),T=o("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=o("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),V=l(),E=o("p"),G=a("This second option is useful when using "),N=o("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=o("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),x=o("ul"),z=o("li"),he=a("a single Tensor with "),W=o("code"),se=a("input_ids"),ue=a(" only and nothing else: "),R=o("code"),ae=a("model(inputs_ids)"),ee=l(),A=o("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=o("code"),oe=a("model([input_ids, attention_mask])"),fe=l(),P=o("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=o("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),V=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),J=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);se=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);oe=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,V,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,J,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,se),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,oe),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(V),h&&t(E),h&&t(L),h&&t(q),h&&t(J),h&&t(x)}}}function yy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function By(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function My(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Ey(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function xy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function zy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Cy(C){let p,y,g,v,T;return{c(){p=o("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function jy(C){let p,y,g,v,T,_,f,B,de,V,E,G,N,X,ce,O,pe,re,L,q,Y,J,x,z,he,W,se,ue,R,ae,ee,A,ie,S,oe,fe,P,te,H,le,h,M,K,ge,Te,I,_e,be,ke,j,Q,we,$e,Z,De,ne,Fe,hu,up,Tt,uu,Yo,fu,mu,Zo,gu,_u,en,vu,Tu,fp,as,Ks,_l,tn,bu,vl,ku,mp,Ne,sn,wu,yt,$u,di,Du,Fu,ci,yu,Bu,on,Mu,Eu,xu,is,zu,pi,Cu,ju,hi,Pu,qu,Au,Tl,Iu,Lu,nn,gp,ls,Gs,bl,rn,Su,kl,Nu,_p,_t,an,Ou,wl,Wu,Ru,Xs,ui,Hu,Qu,fi,Uu,Vu,Ju,ln,Ku,mi,Gu,Xu,vp,ds,Ys,$l,dn,Yu,Dl,Zu,Tp,vt,cn,ef,pn,tf,Fl,sf,of,nf,Zs,gi,rf,af,_i,lf,df,cf,hn,pf,vi,hf,uf,bp,cs,eo,yl,un,ff,Bl,mf,kp,Oe,fn,gf,Ml,_f,vf,mn,Tf,Ti,bf,kf,wf,gn,$f,_n,Df,Ff,yf,Ve,vn,Bf,ps,Mf,bi,Ef,xf,El,zf,Cf,jf,to,Pf,xl,qf,Af,Tn,wp,hs,so,zl,bn,If,Cl,Lf,$p,We,kn,Sf,wn,Nf,jl,Of,Wf,Rf,$n,Hf,ki,Qf,Uf,Vf,Dn,Jf,Fn,Kf,Gf,Xf,Je,yn,Yf,us,Zf,wi,em,tm,Pl,sm,om,nm,oo,rm,ql,am,im,Bn,Dp,fs,no,Al,Mn,lm,Il,dm,Fp,Re,En,cm,Ll,pm,hm,xn,um,$i,fm,mm,gm,zn,_m,Cn,vm,Tm,bm,je,jn,km,ms,wm,Di,$m,Dm,Sl,Fm,ym,Bm,ro,Mm,Nl,Em,xm,Pn,zm,Ol,Cm,jm,qn,yp,gs,ao,Wl,An,Pm,Rl,qm,Bp,He,In,Am,Hl,Im,Lm,Ln,Sm,Fi,Nm,Om,Wm,Sn,Rm,Nn,Hm,Qm,Um,Ke,On,Vm,_s,Jm,yi,Km,Gm,Ql,Xm,Ym,Zm,io,eg,Ul,tg,sg,Wn,Mp,vs,lo,Vl,Rn,og,Jl,ng,Ep,Qe,Hn,rg,Kl,ag,ig,Qn,lg,Bi,dg,cg,pg,Un,hg,Vn,ug,fg,mg,Ge,Jn,gg,Ts,_g,Mi,vg,Tg,Gl,bg,kg,wg,co,$g,Xl,Dg,Fg,Kn,xp,bs,po,Yl,Gn,yg,Zl,Bg,zp,Ue,Xn,Mg,ks,Eg,ed,xg,zg,td,Cg,jg,Pg,Yn,qg,Ei,Ag,Ig,Lg,Zn,Sg,er,Ng,Og,Wg,Xe,tr,Rg,ws,Hg,xi,Qg,Ug,sd,Vg,Jg,Kg,ho,Gg,od,Xg,Yg,sr,Cp,$s,uo,nd,or,Zg,rd,e_,jp,Pe,nr,t_,ad,s_,o_,rr,n_,zi,r_,a_,i_,ar,l_,ir,d_,c_,p_,fo,h_,Ye,lr,u_,Ds,f_,Ci,m_,g_,id,__,v_,T_,mo,b_,ld,k_,w_,dr,Pp,Fs,go,dd,cr,$_,cd,D_,qp,qe,pr,F_,hr,y_,pd,B_,M_,E_,ur,x_,ji,z_,C_,j_,fr,P_,mr,q_,A_,I_,_o,L_,Ze,gr,S_,ys,N_,Pi,O_,W_,hd,R_,H_,Q_,vo,U_,ud,V_,J_,_r,Ap,Bs,To,fd,vr,K_,md,G_,Ip,Ae,Tr,X_,gd,Y_,Z_,br,e1,qi,t1,s1,o1,kr,n1,wr,r1,a1,i1,bo,l1,et,$r,d1,Ms,c1,Ai,p1,h1,_d,u1,f1,m1,ko,g1,vd,_1,v1,Dr,Lp,Es,wo,Td,Fr,T1,bd,b1,Sp,Ie,yr,k1,kd,w1,$1,Br,D1,Ii,F1,y1,B1,Mr,M1,Er,E1,x1,z1,$o,C1,tt,xr,j1,xs,P1,Li,q1,A1,wd,I1,L1,S1,Do,N1,$d,O1,W1,zr,Np,zs,Fo,Dd,Cr,R1,Fd,H1,Op,Le,jr,Q1,yd,U1,V1,Pr,J1,Si,K1,G1,X1,qr,Y1,Ar,Z1,ev,tv,yo,sv,st,Ir,ov,Cs,nv,Ni,rv,av,Bd,iv,lv,dv,Bo,cv,Md,pv,hv,Lr,Wp,js,Mo,Ed,Sr,uv,xd,fv,Rp,Se,Nr,mv,Ps,gv,zd,_v,vv,Cd,Tv,bv,kv,Or,wv,Oi,$v,Dv,Fv,Wr,yv,Rr,Bv,Mv,Ev,Eo,xv,ot,Hr,zv,qs,Cv,Wi,jv,Pv,jd,qv,Av,Iv,xo,Lv,Pd,Sv,Nv,Qr,Hp,As,zo,qd,Ur,Ov,Ad,Wv,Qp,Be,Vr,Rv,Id,Hv,Qv,Jr,Uv,Ri,Vv,Jv,Kv,Kr,Gv,Gr,Xv,Yv,Zv,Ld,eT,tT,Bt,Sd,Xr,sT,oT,Nd,Yr,nT,rT,Od,Zr,aT,iT,Wd,ea,lT,dT,nt,ta,cT,Is,pT,Rd,hT,uT,Hd,fT,mT,gT,Co,_T,Qd,vT,TT,sa,Up,Ls,jo,Ud,oa,bT,Vd,kT,Vp,Me,na,wT,ra,$T,Jd,DT,FT,yT,aa,BT,Hi,MT,ET,xT,ia,zT,la,CT,jT,PT,Kd,qT,AT,Mt,Gd,da,IT,LT,Xd,ca,ST,NT,Yd,pa,OT,WT,Zd,ha,RT,HT,rt,ua,QT,Ss,UT,ec,VT,JT,tc,KT,GT,XT,Po,YT,sc,ZT,eb,fa,Jp,Ns,qo,oc,ma,tb,nc,sb,Kp,Ee,ga,ob,rc,nb,rb,_a,ab,Qi,ib,lb,db,va,cb,Ta,pb,hb,ub,ac,fb,mb,Et,ic,ba,gb,_b,lc,ka,vb,Tb,dc,wa,bb,kb,cc,$a,wb,$b,at,Da,Db,Os,Fb,pc,yb,Bb,hc,Mb,Eb,xb,Ao,zb,uc,Cb,jb,Fa,Gp,Ws,Io,fc,ya,Pb,mc,qb,Xp,xe,Ba,Ab,gc,Ib,Lb,Ma,Sb,Ui,Nb,Ob,Wb,Ea,Rb,xa,Hb,Qb,Ub,_c,Vb,Jb,xt,vc,za,Kb,Gb,Tc,Ca,Xb,Yb,bc,ja,Zb,ek,kc,Pa,tk,sk,it,qa,ok,Rs,nk,wc,rk,ak,$c,ik,lk,dk,Lo,ck,Dc,pk,hk,Aa,Yp,Hs,So,Fc,Ia,uk,yc,fk,Zp,ze,La,mk,Bc,gk,_k,Sa,vk,Vi,Tk,bk,kk,Na,wk,Oa,$k,Dk,Fk,Mc,yk,Bk,zt,Ec,Wa,Mk,Ek,xc,Ra,xk,zk,zc,Ha,Ck,jk,Cc,Qa,Pk,qk,lt,Ua,Ak,Qs,Ik,jc,Lk,Sk,Pc,Nk,Ok,Wk,No,Rk,qc,Hk,Qk,Va,eh,Us,Oo,Ac,Ja,Uk,Ic,Vk,th,Ce,Ka,Jk,Vs,Kk,Lc,Gk,Xk,Sc,Yk,Zk,ew,Ga,tw,Ji,sw,ow,nw,Xa,rw,Ya,aw,iw,lw,Nc,dw,cw,Ct,Oc,Za,pw,hw,Wc,ei,uw,fw,Rc,ti,mw,gw,Hc,si,_w,vw,dt,oi,Tw,Js,bw,Qc,kw,ww,Uc,$w,Dw,Fw,Wo,yw,Vc,Bw,Mw,ni,sh;return _=new ve({}),X=new ve({}),tn=new ve({}),sn=new U({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new ye({props:{code:`from transformers import DistilBertModel, DistilBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new ve({}),an=new U({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new ve({}),cn=new U({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new ve({}),fn=new U({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L434",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new U({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L506",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new me({props:{$$slots:{default:[dy]},$$scope:{ctx:C}}}),Tn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new ve({}),kn=new U({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L562",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yn=new U({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L604",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new me({props:{$$slots:{default:[cy]},$$scope:{ctx:C}}}),Bn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new ve({}),En=new U({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L668",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new U({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L702",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new me({props:{$$slots:{default:[py]},$$scope:{ctx:C}}}),Pn=new ye({props:{code:`import torch
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
`}}),qn=new ye({props:{code:`import torch
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
`}}),An=new ve({}),In=new U({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L998",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),On=new U({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L1030",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new me({props:{$$slots:{default:[hy]},$$scope:{ctx:C}}}),Wn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new ve({}),Hn=new U({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L903",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new U({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L935",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new me({props:{$$slots:{default:[uy]},$$scope:{ctx:C}}}),Kn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new ve({}),Xn=new U({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L786",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tr=new U({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_distilbert.py#L818",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new me({props:{$$slots:{default:[fy]},$$scope:{ctx:C}}}),sr=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
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
`}}),or=new ve({}),nr=new U({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L535",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new me({props:{$$slots:{default:[my]},$$scope:{ctx:C}}}),lr=new U({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L540",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new me({props:{$$slots:{default:[gy]},$$scope:{ctx:C}}}),dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cr=new ve({}),pr=new U({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L635",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_o=new me({props:{$$slots:{default:[_y]},$$scope:{ctx:C}}}),gr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L655",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new me({props:{$$slots:{default:[vy]},$$scope:{ctx:C}}}),_r=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new ve({}),Tr=new U({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L739",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bo=new me({props:{$$slots:{default:[Ty]},$$scope:{ctx:C}}}),$r=new U({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L756",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ko=new me({props:{$$slots:{default:[by]},$$scope:{ctx:C}}}),Dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fr=new ve({}),yr=new U({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L930",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new me({props:{$$slots:{default:[ky]},$$scope:{ctx:C}}}),xr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L956",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new me({props:{$$slots:{default:[wy]},$$scope:{ctx:C}}}),zr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new ve({}),jr=new U({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L840",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new me({props:{$$slots:{default:[$y]},$$scope:{ctx:C}}}),Ir=new U({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L851",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new me({props:{$$slots:{default:[Dy]},$$scope:{ctx:C}}}),Lr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sr=new ve({}),Nr=new U({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1072",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new me({props:{$$slots:{default:[Fy]},$$scope:{ctx:C}}}),Hr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1083",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new me({props:{$$slots:{default:[yy]},$$scope:{ctx:C}}}),Qr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Ur=new ve({}),Vr=new U({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L524",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),Co=new me({props:{$$slots:{default:[By]},$$scope:{ctx:C}}}),sa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),oa=new ve({}),na=new U({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L597",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new me({props:{$$slots:{default:[My]},$$scope:{ctx:C}}}),fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ma=new ve({}),ga=new U({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L666",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Da=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new me({props:{$$slots:{default:[Ey]},$$scope:{ctx:C}}}),Fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ya=new ve({}),Ba=new U({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L746",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qa=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new me({props:{$$slots:{default:[xy]},$$scope:{ctx:C}}}),Aa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ia=new ve({}),La=new U({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L812",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new me({props:{$$slots:{default:[zy]},$$scope:{ctx:C}}}),Va=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ja=new ve({}),Ka=new U({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L882",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oi=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16132/src/transformers/models/distilbert/modeling_flax_distilbert.py#L447",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16132/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_16132/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_16132/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new me({props:{$$slots:{default:[Cy]},$$scope:{ctx:C}}}),ni=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=o("meta"),y=l(),g=o("h1"),v=o("a"),T=o("span"),b(_.$$.fragment),f=l(),B=o("span"),de=a("DistilBERT"),V=l(),E=o("h2"),G=o("a"),N=o("span"),b(X.$$.fragment),ce=l(),O=o("span"),pe=a("Overview"),re=l(),L=o("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=o("a"),J=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=o("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=o("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=o("p"),A=a("The abstract from the paper is the following:"),ie=l(),S=o("p"),oe=o("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=o("p"),H=a("Tips:"),le=l(),h=o("ul"),M=o("li"),K=a("DistilBERT doesn\u2019t have "),ge=o("code"),Te=a("token_type_ids"),I=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=o("code"),be=a("tokenizer.sep_token"),ke=a(" (or "),j=o("code"),Q=a("[SEP]"),we=a(")."),$e=l(),Z=o("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=o("code"),Fe=a("position_ids"),hu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),up=l(),Tt=o("p"),uu=a("This model was contributed by "),Yo=o("a"),fu=a("victorsanh"),mu=a(`. This model jax version was
contributed by `),Zo=o("a"),gu=a("kamalkraj"),_u=a(". The original code can be found "),en=o("a"),vu=a("here"),Tu=a("."),fp=l(),as=o("h2"),Ks=o("a"),_l=o("span"),b(tn.$$.fragment),bu=l(),vl=o("span"),ku=a("DistilBertConfig"),mp=l(),Ne=o("div"),b(sn.$$.fragment),wu=l(),yt=o("p"),$u=a("This is the configuration class to store the configuration of a "),di=o("a"),Du=a("DistilBertModel"),Fu=a(" or a "),ci=o("a"),yu=a("TFDistilBertModel"),Bu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=o("a"),Mu=a("distilbert-base-uncased"),Eu=a(" architecture."),xu=l(),is=o("p"),zu=a("Configuration objects inherit from "),pi=o("a"),Cu=a("PretrainedConfig"),ju=a(` and can be used to control the model outputs. Read the
documentation from `),hi=o("a"),Pu=a("PretrainedConfig"),qu=a(" for more information."),Au=l(),Tl=o("p"),Iu=a("Examples:"),Lu=l(),b(nn.$$.fragment),gp=l(),ls=o("h2"),Gs=o("a"),bl=o("span"),b(rn.$$.fragment),Su=l(),kl=o("span"),Nu=a("DistilBertTokenizer"),_p=l(),_t=o("div"),b(an.$$.fragment),Ou=l(),wl=o("p"),Wu=a("Construct a DistilBERT tokenizer."),Ru=l(),Xs=o("p"),ui=o("a"),Hu=a("DistilBertTokenizer"),Qu=a(" is identical to "),fi=o("a"),Uu=a("BertTokenizer"),Vu=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Ju=l(),ln=o("p"),Ku=a("Refer to superclass "),mi=o("a"),Gu=a("BertTokenizer"),Xu=a(" for usage examples and documentation concerning parameters."),vp=l(),ds=o("h2"),Ys=o("a"),$l=o("span"),b(dn.$$.fragment),Yu=l(),Dl=o("span"),Zu=a("DistilBertTokenizerFast"),Tp=l(),vt=o("div"),b(cn.$$.fragment),ef=l(),pn=o("p"),tf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=o("em"),sf=a("tokenizers"),of=a(" library)."),nf=l(),Zs=o("p"),gi=o("a"),rf=a("DistilBertTokenizerFast"),af=a(" is identical to "),_i=o("a"),lf=a("BertTokenizerFast"),df=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),cf=l(),hn=o("p"),pf=a("Refer to superclass "),vi=o("a"),hf=a("BertTokenizerFast"),uf=a(" for usage examples and documentation concerning parameters."),bp=l(),cs=o("h2"),eo=o("a"),yl=o("span"),b(un.$$.fragment),ff=l(),Bl=o("span"),mf=a("DistilBertModel"),kp=l(),Oe=o("div"),b(fn.$$.fragment),gf=l(),Ml=o("p"),_f=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),vf=l(),mn=o("p"),Tf=a("This model inherits from "),Ti=o("a"),bf=a("PreTrainedModel"),kf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf=l(),gn=o("p"),$f=a("This model is also a PyTorch "),_n=o("a"),Df=a("torch.nn.Module"),Ff=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yf=l(),Ve=o("div"),b(vn.$$.fragment),Bf=l(),ps=o("p"),Mf=a("The "),bi=o("a"),Ef=a("DistilBertModel"),xf=a(" forward method, overrides the "),El=o("code"),zf=a("__call__"),Cf=a(" special method."),jf=l(),b(to.$$.fragment),Pf=l(),xl=o("p"),qf=a("Example:"),Af=l(),b(Tn.$$.fragment),wp=l(),hs=o("h2"),so=o("a"),zl=o("span"),b(bn.$$.fragment),If=l(),Cl=o("span"),Lf=a("DistilBertForMaskedLM"),$p=l(),We=o("div"),b(kn.$$.fragment),Sf=l(),wn=o("p"),Nf=a("DistilBert Model with a "),jl=o("code"),Of=a("masked language modeling"),Wf=a(" head on top."),Rf=l(),$n=o("p"),Hf=a("This model inherits from "),ki=o("a"),Qf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf=l(),Dn=o("p"),Jf=a("This model is also a PyTorch "),Fn=o("a"),Kf=a("torch.nn.Module"),Gf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf=l(),Je=o("div"),b(yn.$$.fragment),Yf=l(),us=o("p"),Zf=a("The "),wi=o("a"),em=a("DistilBertForMaskedLM"),tm=a(" forward method, overrides the "),Pl=o("code"),sm=a("__call__"),om=a(" special method."),nm=l(),b(oo.$$.fragment),rm=l(),ql=o("p"),am=a("Example:"),im=l(),b(Bn.$$.fragment),Dp=l(),fs=o("h2"),no=o("a"),Al=o("span"),b(Mn.$$.fragment),lm=l(),Il=o("span"),dm=a("DistilBertForSequenceClassification"),Fp=l(),Re=o("div"),b(En.$$.fragment),cm=l(),Ll=o("p"),pm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hm=l(),xn=o("p"),um=a("This model inherits from "),$i=o("a"),fm=a("PreTrainedModel"),mm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gm=l(),zn=o("p"),_m=a("This model is also a PyTorch "),Cn=o("a"),vm=a("torch.nn.Module"),Tm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bm=l(),je=o("div"),b(jn.$$.fragment),km=l(),ms=o("p"),wm=a("The "),Di=o("a"),$m=a("DistilBertForSequenceClassification"),Dm=a(" forward method, overrides the "),Sl=o("code"),Fm=a("__call__"),ym=a(" special method."),Bm=l(),b(ro.$$.fragment),Mm=l(),Nl=o("p"),Em=a("Example of single-label classification:"),xm=l(),b(Pn.$$.fragment),zm=l(),Ol=o("p"),Cm=a("Example of multi-label classification:"),jm=l(),b(qn.$$.fragment),yp=l(),gs=o("h2"),ao=o("a"),Wl=o("span"),b(An.$$.fragment),Pm=l(),Rl=o("span"),qm=a("DistilBertForMultipleChoice"),Bp=l(),He=o("div"),b(In.$$.fragment),Am=l(),Hl=o("p"),Im=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lm=l(),Ln=o("p"),Sm=a("This model inherits from "),Fi=o("a"),Nm=a("PreTrainedModel"),Om=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wm=l(),Sn=o("p"),Rm=a("This model is also a PyTorch "),Nn=o("a"),Hm=a("torch.nn.Module"),Qm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Um=l(),Ke=o("div"),b(On.$$.fragment),Vm=l(),_s=o("p"),Jm=a("The "),yi=o("a"),Km=a("DistilBertForMultipleChoice"),Gm=a(" forward method, overrides the "),Ql=o("code"),Xm=a("__call__"),Ym=a(" special method."),Zm=l(),b(io.$$.fragment),eg=l(),Ul=o("p"),tg=a("Examples:"),sg=l(),b(Wn.$$.fragment),Mp=l(),vs=o("h2"),lo=o("a"),Vl=o("span"),b(Rn.$$.fragment),og=l(),Jl=o("span"),ng=a("DistilBertForTokenClassification"),Ep=l(),Qe=o("div"),b(Hn.$$.fragment),rg=l(),Kl=o("p"),ag=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ig=l(),Qn=o("p"),lg=a("This model inherits from "),Bi=o("a"),dg=a("PreTrainedModel"),cg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=l(),Un=o("p"),hg=a("This model is also a PyTorch "),Vn=o("a"),ug=a("torch.nn.Module"),fg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mg=l(),Ge=o("div"),b(Jn.$$.fragment),gg=l(),Ts=o("p"),_g=a("The "),Mi=o("a"),vg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),Gl=o("code"),bg=a("__call__"),kg=a(" special method."),wg=l(),b(co.$$.fragment),$g=l(),Xl=o("p"),Dg=a("Example:"),Fg=l(),b(Kn.$$.fragment),xp=l(),bs=o("h2"),po=o("a"),Yl=o("span"),b(Gn.$$.fragment),yg=l(),Zl=o("span"),Bg=a("DistilBertForQuestionAnswering"),zp=l(),Ue=o("div"),b(Xn.$$.fragment),Mg=l(),ks=o("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=o("code"),xg=a("span start logits"),zg=a(" and "),td=o("code"),Cg=a("span end logits"),jg=a(")."),Pg=l(),Yn=o("p"),qg=a("This model inherits from "),Ei=o("a"),Ag=a("PreTrainedModel"),Ig=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=l(),Zn=o("p"),Sg=a("This model is also a PyTorch "),er=o("a"),Ng=a("torch.nn.Module"),Og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=l(),Xe=o("div"),b(tr.$$.fragment),Rg=l(),ws=o("p"),Hg=a("The "),xi=o("a"),Qg=a("DistilBertForQuestionAnswering"),Ug=a(" forward method, overrides the "),sd=o("code"),Vg=a("__call__"),Jg=a(" special method."),Kg=l(),b(ho.$$.fragment),Gg=l(),od=o("p"),Xg=a("Example:"),Yg=l(),b(sr.$$.fragment),Cp=l(),$s=o("h2"),uo=o("a"),nd=o("span"),b(or.$$.fragment),Zg=l(),rd=o("span"),e_=a("TFDistilBertModel"),jp=l(),Pe=o("div"),b(nr.$$.fragment),t_=l(),ad=o("p"),s_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),o_=l(),rr=o("p"),n_=a("This model inherits from "),zi=o("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=l(),ar=o("p"),l_=a("This model is also a "),ir=o("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=l(),b(fo.$$.fragment),h_=l(),Ye=o("div"),b(lr.$$.fragment),u_=l(),Ds=o("p"),f_=a("The "),Ci=o("a"),m_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),id=o("code"),__=a("__call__"),v_=a(" special method."),T_=l(),b(mo.$$.fragment),b_=l(),ld=o("p"),k_=a("Example:"),w_=l(),b(dr.$$.fragment),Pp=l(),Fs=o("h2"),go=o("a"),dd=o("span"),b(cr.$$.fragment),$_=l(),cd=o("span"),D_=a("TFDistilBertForMaskedLM"),qp=l(),qe=o("div"),b(pr.$$.fragment),F_=l(),hr=o("p"),y_=a("DistilBert Model with a "),pd=o("code"),B_=a("masked language modeling"),M_=a(" head on top."),E_=l(),ur=o("p"),x_=a("This model inherits from "),ji=o("a"),z_=a("TFPreTrainedModel"),C_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=l(),fr=o("p"),P_=a("This model is also a "),mr=o("a"),q_=a("tf.keras.Model"),A_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),I_=l(),b(_o.$$.fragment),L_=l(),Ze=o("div"),b(gr.$$.fragment),S_=l(),ys=o("p"),N_=a("The "),Pi=o("a"),O_=a("TFDistilBertForMaskedLM"),W_=a(" forward method, overrides the "),hd=o("code"),R_=a("__call__"),H_=a(" special method."),Q_=l(),b(vo.$$.fragment),U_=l(),ud=o("p"),V_=a("Example:"),J_=l(),b(_r.$$.fragment),Ap=l(),Bs=o("h2"),To=o("a"),fd=o("span"),b(vr.$$.fragment),K_=l(),md=o("span"),G_=a("TFDistilBertForSequenceClassification"),Ip=l(),Ae=o("div"),b(Tr.$$.fragment),X_=l(),gd=o("p"),Y_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Z_=l(),br=o("p"),e1=a("This model inherits from "),qi=o("a"),t1=a("TFPreTrainedModel"),s1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o1=l(),kr=o("p"),n1=a("This model is also a "),wr=o("a"),r1=a("tf.keras.Model"),a1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i1=l(),b(bo.$$.fragment),l1=l(),et=o("div"),b($r.$$.fragment),d1=l(),Ms=o("p"),c1=a("The "),Ai=o("a"),p1=a("TFDistilBertForSequenceClassification"),h1=a(" forward method, overrides the "),_d=o("code"),u1=a("__call__"),f1=a(" special method."),m1=l(),b(ko.$$.fragment),g1=l(),vd=o("p"),_1=a("Example:"),v1=l(),b(Dr.$$.fragment),Lp=l(),Es=o("h2"),wo=o("a"),Td=o("span"),b(Fr.$$.fragment),T1=l(),bd=o("span"),b1=a("TFDistilBertForMultipleChoice"),Sp=l(),Ie=o("div"),b(yr.$$.fragment),k1=l(),kd=o("p"),w1=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),$1=l(),Br=o("p"),D1=a("This model inherits from "),Ii=o("a"),F1=a("TFPreTrainedModel"),y1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B1=l(),Mr=o("p"),M1=a("This model is also a "),Er=o("a"),E1=a("tf.keras.Model"),x1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z1=l(),b($o.$$.fragment),C1=l(),tt=o("div"),b(xr.$$.fragment),j1=l(),xs=o("p"),P1=a("The "),Li=o("a"),q1=a("TFDistilBertForMultipleChoice"),A1=a(" forward method, overrides the "),wd=o("code"),I1=a("__call__"),L1=a(" special method."),S1=l(),b(Do.$$.fragment),N1=l(),$d=o("p"),O1=a("Example:"),W1=l(),b(zr.$$.fragment),Np=l(),zs=o("h2"),Fo=o("a"),Dd=o("span"),b(Cr.$$.fragment),R1=l(),Fd=o("span"),H1=a("TFDistilBertForTokenClassification"),Op=l(),Le=o("div"),b(jr.$$.fragment),Q1=l(),yd=o("p"),U1=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),V1=l(),Pr=o("p"),J1=a("This model inherits from "),Si=o("a"),K1=a("TFPreTrainedModel"),G1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X1=l(),qr=o("p"),Y1=a("This model is also a "),Ar=o("a"),Z1=a("tf.keras.Model"),ev=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tv=l(),b(yo.$$.fragment),sv=l(),st=o("div"),b(Ir.$$.fragment),ov=l(),Cs=o("p"),nv=a("The "),Ni=o("a"),rv=a("TFDistilBertForTokenClassification"),av=a(" forward method, overrides the "),Bd=o("code"),iv=a("__call__"),lv=a(" special method."),dv=l(),b(Bo.$$.fragment),cv=l(),Md=o("p"),pv=a("Example:"),hv=l(),b(Lr.$$.fragment),Wp=l(),js=o("h2"),Mo=o("a"),Ed=o("span"),b(Sr.$$.fragment),uv=l(),xd=o("span"),fv=a("TFDistilBertForQuestionAnswering"),Rp=l(),Se=o("div"),b(Nr.$$.fragment),mv=l(),Ps=o("p"),gv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=o("code"),_v=a("span start logits"),vv=a(" and "),Cd=o("code"),Tv=a("span end logits"),bv=a(")."),kv=l(),Or=o("p"),wv=a("This model inherits from "),Oi=o("a"),$v=a("TFPreTrainedModel"),Dv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fv=l(),Wr=o("p"),yv=a("This model is also a "),Rr=o("a"),Bv=a("tf.keras.Model"),Mv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ev=l(),b(Eo.$$.fragment),xv=l(),ot=o("div"),b(Hr.$$.fragment),zv=l(),qs=o("p"),Cv=a("The "),Wi=o("a"),jv=a("TFDistilBertForQuestionAnswering"),Pv=a(" forward method, overrides the "),jd=o("code"),qv=a("__call__"),Av=a(" special method."),Iv=l(),b(xo.$$.fragment),Lv=l(),Pd=o("p"),Sv=a("Example:"),Nv=l(),b(Qr.$$.fragment),Hp=l(),As=o("h2"),zo=o("a"),qd=o("span"),b(Ur.$$.fragment),Ov=l(),Ad=o("span"),Wv=a("FlaxDistilBertModel"),Qp=l(),Be=o("div"),b(Vr.$$.fragment),Rv=l(),Id=o("p"),Hv=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Qv=l(),Jr=o("p"),Uv=a("This model inherits from "),Ri=o("a"),Vv=a("FlaxPreTrainedModel"),Jv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kv=l(),Kr=o("p"),Gv=a("This model is also a Flax Linen "),Gr=o("a"),Xv=a("flax.linen.Module"),Yv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zv=l(),Ld=o("p"),eT=a("Finally, this model supports inherent JAX features such as:"),tT=l(),Bt=o("ul"),Sd=o("li"),Xr=o("a"),sT=a("Just-In-Time (JIT) compilation"),oT=l(),Nd=o("li"),Yr=o("a"),nT=a("Automatic Differentiation"),rT=l(),Od=o("li"),Zr=o("a"),aT=a("Vectorization"),iT=l(),Wd=o("li"),ea=o("a"),lT=a("Parallelization"),dT=l(),nt=o("div"),b(ta.$$.fragment),cT=l(),Is=o("p"),pT=a("The "),Rd=o("code"),hT=a("FlaxDistilBertPreTrainedModel"),uT=a("forward method, overrides the "),Hd=o("code"),fT=a("__call__"),mT=a(" special method."),gT=l(),b(Co.$$.fragment),_T=l(),Qd=o("p"),vT=a("Example:"),TT=l(),b(sa.$$.fragment),Up=l(),Ls=o("h2"),jo=o("a"),Ud=o("span"),b(oa.$$.fragment),bT=l(),Vd=o("span"),kT=a("FlaxDistilBertForMaskedLM"),Vp=l(),Me=o("div"),b(na.$$.fragment),wT=l(),ra=o("p"),$T=a("DistilBert Model with a "),Jd=o("code"),DT=a("language modeling"),FT=a(" head on top."),yT=l(),aa=o("p"),BT=a("This model inherits from "),Hi=o("a"),MT=a("FlaxPreTrainedModel"),ET=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xT=l(),ia=o("p"),zT=a("This model is also a Flax Linen "),la=o("a"),CT=a("flax.linen.Module"),jT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),PT=l(),Kd=o("p"),qT=a("Finally, this model supports inherent JAX features such as:"),AT=l(),Mt=o("ul"),Gd=o("li"),da=o("a"),IT=a("Just-In-Time (JIT) compilation"),LT=l(),Xd=o("li"),ca=o("a"),ST=a("Automatic Differentiation"),NT=l(),Yd=o("li"),pa=o("a"),OT=a("Vectorization"),WT=l(),Zd=o("li"),ha=o("a"),RT=a("Parallelization"),HT=l(),rt=o("div"),b(ua.$$.fragment),QT=l(),Ss=o("p"),UT=a("The "),ec=o("code"),VT=a("FlaxDistilBertPreTrainedModel"),JT=a("forward method, overrides the "),tc=o("code"),KT=a("__call__"),GT=a(" special method."),XT=l(),b(Po.$$.fragment),YT=l(),sc=o("p"),ZT=a("Example:"),eb=l(),b(fa.$$.fragment),Jp=l(),Ns=o("h2"),qo=o("a"),oc=o("span"),b(ma.$$.fragment),tb=l(),nc=o("span"),sb=a("FlaxDistilBertForSequenceClassification"),Kp=l(),Ee=o("div"),b(ga.$$.fragment),ob=l(),rc=o("p"),nb=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rb=l(),_a=o("p"),ab=a("This model inherits from "),Qi=o("a"),ib=a("FlaxPreTrainedModel"),lb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),db=l(),va=o("p"),cb=a("This model is also a Flax Linen "),Ta=o("a"),pb=a("flax.linen.Module"),hb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ub=l(),ac=o("p"),fb=a("Finally, this model supports inherent JAX features such as:"),mb=l(),Et=o("ul"),ic=o("li"),ba=o("a"),gb=a("Just-In-Time (JIT) compilation"),_b=l(),lc=o("li"),ka=o("a"),vb=a("Automatic Differentiation"),Tb=l(),dc=o("li"),wa=o("a"),bb=a("Vectorization"),kb=l(),cc=o("li"),$a=o("a"),wb=a("Parallelization"),$b=l(),at=o("div"),b(Da.$$.fragment),Db=l(),Os=o("p"),Fb=a("The "),pc=o("code"),yb=a("FlaxDistilBertPreTrainedModel"),Bb=a("forward method, overrides the "),hc=o("code"),Mb=a("__call__"),Eb=a(" special method."),xb=l(),b(Ao.$$.fragment),zb=l(),uc=o("p"),Cb=a("Example:"),jb=l(),b(Fa.$$.fragment),Gp=l(),Ws=o("h2"),Io=o("a"),fc=o("span"),b(ya.$$.fragment),Pb=l(),mc=o("span"),qb=a("FlaxDistilBertForMultipleChoice"),Xp=l(),xe=o("div"),b(Ba.$$.fragment),Ab=l(),gc=o("p"),Ib=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lb=l(),Ma=o("p"),Sb=a("This model inherits from "),Ui=o("a"),Nb=a("FlaxPreTrainedModel"),Ob=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wb=l(),Ea=o("p"),Rb=a("This model is also a Flax Linen "),xa=o("a"),Hb=a("flax.linen.Module"),Qb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=l(),_c=o("p"),Vb=a("Finally, this model supports inherent JAX features such as:"),Jb=l(),xt=o("ul"),vc=o("li"),za=o("a"),Kb=a("Just-In-Time (JIT) compilation"),Gb=l(),Tc=o("li"),Ca=o("a"),Xb=a("Automatic Differentiation"),Yb=l(),bc=o("li"),ja=o("a"),Zb=a("Vectorization"),ek=l(),kc=o("li"),Pa=o("a"),tk=a("Parallelization"),sk=l(),it=o("div"),b(qa.$$.fragment),ok=l(),Rs=o("p"),nk=a("The "),wc=o("code"),rk=a("FlaxDistilBertPreTrainedModel"),ak=a("forward method, overrides the "),$c=o("code"),ik=a("__call__"),lk=a(" special method."),dk=l(),b(Lo.$$.fragment),ck=l(),Dc=o("p"),pk=a("Example:"),hk=l(),b(Aa.$$.fragment),Yp=l(),Hs=o("h2"),So=o("a"),Fc=o("span"),b(Ia.$$.fragment),uk=l(),yc=o("span"),fk=a("FlaxDistilBertForTokenClassification"),Zp=l(),ze=o("div"),b(La.$$.fragment),mk=l(),Bc=o("p"),gk=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),_k=l(),Sa=o("p"),vk=a("This model inherits from "),Vi=o("a"),Tk=a("FlaxPreTrainedModel"),bk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kk=l(),Na=o("p"),wk=a("This model is also a Flax Linen "),Oa=o("a"),$k=a("flax.linen.Module"),Dk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fk=l(),Mc=o("p"),yk=a("Finally, this model supports inherent JAX features such as:"),Bk=l(),zt=o("ul"),Ec=o("li"),Wa=o("a"),Mk=a("Just-In-Time (JIT) compilation"),Ek=l(),xc=o("li"),Ra=o("a"),xk=a("Automatic Differentiation"),zk=l(),zc=o("li"),Ha=o("a"),Ck=a("Vectorization"),jk=l(),Cc=o("li"),Qa=o("a"),Pk=a("Parallelization"),qk=l(),lt=o("div"),b(Ua.$$.fragment),Ak=l(),Qs=o("p"),Ik=a("The "),jc=o("code"),Lk=a("FlaxDistilBertPreTrainedModel"),Sk=a("forward method, overrides the "),Pc=o("code"),Nk=a("__call__"),Ok=a(" special method."),Wk=l(),b(No.$$.fragment),Rk=l(),qc=o("p"),Hk=a("Example:"),Qk=l(),b(Va.$$.fragment),eh=l(),Us=o("h2"),Oo=o("a"),Ac=o("span"),b(Ja.$$.fragment),Uk=l(),Ic=o("span"),Vk=a("FlaxDistilBertForQuestionAnswering"),th=l(),Ce=o("div"),b(Ka.$$.fragment),Jk=l(),Vs=o("p"),Kk=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=o("code"),Gk=a("span start logits"),Xk=a(" and "),Sc=o("code"),Yk=a("span end logits"),Zk=a(")."),ew=l(),Ga=o("p"),tw=a("This model inherits from "),Ji=o("a"),sw=a("FlaxPreTrainedModel"),ow=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nw=l(),Xa=o("p"),rw=a("This model is also a Flax Linen "),Ya=o("a"),aw=a("flax.linen.Module"),iw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lw=l(),Nc=o("p"),dw=a("Finally, this model supports inherent JAX features such as:"),cw=l(),Ct=o("ul"),Oc=o("li"),Za=o("a"),pw=a("Just-In-Time (JIT) compilation"),hw=l(),Wc=o("li"),ei=o("a"),uw=a("Automatic Differentiation"),fw=l(),Rc=o("li"),ti=o("a"),mw=a("Vectorization"),gw=l(),Hc=o("li"),si=o("a"),_w=a("Parallelization"),vw=l(),dt=o("div"),b(oi.$$.fragment),Tw=l(),Js=o("p"),bw=a("The "),Qc=o("code"),kw=a("FlaxDistilBertPreTrainedModel"),ww=a("forward method, overrides the "),Uc=o("code"),$w=a("__call__"),Dw=a(" special method."),Fw=l(),b(Wo.$$.fragment),yw=l(),Vc=o("p"),Bw=a("Example:"),Mw=l(),b(ni.$$.fragment),this.h()},l(s){const m=ly('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),y=d(s),g=n(s,"H1",{class:!0});var ri=r(g);v=n(ri,"A",{id:!0,class:!0,href:!0});var Jc=r(v);T=n(Jc,"SPAN",{});var Kc=r(T);k(_.$$.fragment,Kc),Kc.forEach(t),Jc.forEach(t),f=d(ri),B=n(ri,"SPAN",{});var Gc=r(B);de=i(Gc,"DistilBERT"),Gc.forEach(t),ri.forEach(t),V=d(s),E=n(s,"H2",{class:!0});var ai=r(E);G=n(ai,"A",{id:!0,class:!0,href:!0});var Xc=r(G);N=n(Xc,"SPAN",{});var Yc=r(N);k(X.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),ce=d(ai),O=n(ai,"SPAN",{});var Zc=r(O);pe=i(Zc,"Overview"),Zc.forEach(t),ai.forEach(t),re=d(s),L=n(s,"P",{});var jt=r(L);q=i(jt,"The DistilBERT model was proposed in the blog post "),Y=n(jt,"A",{href:!0,rel:!0});var ep=r(Y);J=i(ep,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),ep.forEach(t),x=i(jt,", and the paper "),z=n(jt,"A",{href:!0,rel:!0});var tp=r(z);he=i(tp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),tp.forEach(t),W=i(jt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),se=n(jt,"EM",{});var sp=r(se);ue=i(sp,"bert-base-uncased"),sp.forEach(t),R=i(jt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),jt.forEach(t),ae=d(s),ee=n(s,"P",{});var op=r(ee);A=i(op,"The abstract from the paper is the following:"),op.forEach(t),ie=d(s),S=n(s,"P",{});var np=r(S);oe=n(np,"EM",{});var rp=r(oe);fe=i(rp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),rp.forEach(t),np.forEach(t),P=d(s),te=n(s,"P",{});var ap=r(te);H=i(ap,"Tips:"),ap.forEach(t),le=d(s),h=n(s,"UL",{});var ii=r(h);M=n(ii,"LI",{});var Pt=r(M);K=i(Pt,"DistilBERT doesn\u2019t have "),ge=n(Pt,"CODE",{});var ip=r(ge);Te=i(ip,"token_type_ids"),ip.forEach(t),I=i(Pt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=n(Pt,"CODE",{});var lp=r(_e);be=i(lp,"tokenizer.sep_token"),lp.forEach(t),ke=i(Pt," (or "),j=n(Pt,"CODE",{});var dp=r(j);Q=i(dp,"[SEP]"),dp.forEach(t),we=i(Pt,")."),Pt.forEach(t),$e=d(ii),Z=n(ii,"LI",{});var li=r(Z);De=i(li,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(li,"CODE",{});var cp=r(ne);Fe=i(cp,"position_ids"),cp.forEach(t),hu=i(li,` input). This could be added if
necessary though, just let us know if you need this option.`),li.forEach(t),ii.forEach(t),up=d(s),Tt=n(s,"P",{});var qt=r(Tt);uu=i(qt,"This model was contributed by "),Yo=n(qt,"A",{href:!0,rel:!0});var Ew=r(Yo);fu=i(Ew,"victorsanh"),Ew.forEach(t),mu=i(qt,`. This model jax version was
contributed by `),Zo=n(qt,"A",{href:!0,rel:!0});var xw=r(Zo);gu=i(xw,"kamalkraj"),xw.forEach(t),_u=i(qt,". The original code can be found "),en=n(qt,"A",{href:!0,rel:!0});var zw=r(en);vu=i(zw,"here"),zw.forEach(t),Tu=i(qt,"."),qt.forEach(t),fp=d(s),as=n(s,"H2",{class:!0});var oh=r(as);Ks=n(oh,"A",{id:!0,class:!0,href:!0});var Cw=r(Ks);_l=n(Cw,"SPAN",{});var jw=r(_l);k(tn.$$.fragment,jw),jw.forEach(t),Cw.forEach(t),bu=d(oh),vl=n(oh,"SPAN",{});var Pw=r(vl);ku=i(Pw,"DistilBertConfig"),Pw.forEach(t),oh.forEach(t),mp=d(s),Ne=n(s,"DIV",{class:!0});var At=r(Ne);k(sn.$$.fragment,At),wu=d(At),yt=n(At,"P",{});var Ro=r(yt);$u=i(Ro,"This is the configuration class to store the configuration of a "),di=n(Ro,"A",{href:!0});var qw=r(di);Du=i(qw,"DistilBertModel"),qw.forEach(t),Fu=i(Ro," or a "),ci=n(Ro,"A",{href:!0});var Aw=r(ci);yu=i(Aw,"TFDistilBertModel"),Aw.forEach(t),Bu=i(Ro,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),on=n(Ro,"A",{href:!0,rel:!0});var Iw=r(on);Mu=i(Iw,"distilbert-base-uncased"),Iw.forEach(t),Eu=i(Ro," architecture."),Ro.forEach(t),xu=d(At),is=n(At,"P",{});var Ki=r(is);zu=i(Ki,"Configuration objects inherit from "),pi=n(Ki,"A",{href:!0});var Lw=r(pi);Cu=i(Lw,"PretrainedConfig"),Lw.forEach(t),ju=i(Ki,` and can be used to control the model outputs. Read the
documentation from `),hi=n(Ki,"A",{href:!0});var Sw=r(hi);Pu=i(Sw,"PretrainedConfig"),Sw.forEach(t),qu=i(Ki," for more information."),Ki.forEach(t),Au=d(At),Tl=n(At,"P",{});var Nw=r(Tl);Iu=i(Nw,"Examples:"),Nw.forEach(t),Lu=d(At),k(nn.$$.fragment,At),At.forEach(t),gp=d(s),ls=n(s,"H2",{class:!0});var nh=r(ls);Gs=n(nh,"A",{id:!0,class:!0,href:!0});var Ow=r(Gs);bl=n(Ow,"SPAN",{});var Ww=r(bl);k(rn.$$.fragment,Ww),Ww.forEach(t),Ow.forEach(t),Su=d(nh),kl=n(nh,"SPAN",{});var Rw=r(kl);Nu=i(Rw,"DistilBertTokenizer"),Rw.forEach(t),nh.forEach(t),_p=d(s),_t=n(s,"DIV",{class:!0});var Ho=r(_t);k(an.$$.fragment,Ho),Ou=d(Ho),wl=n(Ho,"P",{});var Hw=r(wl);Wu=i(Hw,"Construct a DistilBERT tokenizer."),Hw.forEach(t),Ru=d(Ho),Xs=n(Ho,"P",{});var pp=r(Xs);ui=n(pp,"A",{href:!0});var Qw=r(ui);Hu=i(Qw,"DistilBertTokenizer"),Qw.forEach(t),Qu=i(pp," is identical to "),fi=n(pp,"A",{href:!0});var Uw=r(fi);Uu=i(Uw,"BertTokenizer"),Uw.forEach(t),Vu=i(pp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),pp.forEach(t),Ju=d(Ho),ln=n(Ho,"P",{});var rh=r(ln);Ku=i(rh,"Refer to superclass "),mi=n(rh,"A",{href:!0});var Vw=r(mi);Gu=i(Vw,"BertTokenizer"),Vw.forEach(t),Xu=i(rh," for usage examples and documentation concerning parameters."),rh.forEach(t),Ho.forEach(t),vp=d(s),ds=n(s,"H2",{class:!0});var ah=r(ds);Ys=n(ah,"A",{id:!0,class:!0,href:!0});var Jw=r(Ys);$l=n(Jw,"SPAN",{});var Kw=r($l);k(dn.$$.fragment,Kw),Kw.forEach(t),Jw.forEach(t),Yu=d(ah),Dl=n(ah,"SPAN",{});var Gw=r(Dl);Zu=i(Gw,"DistilBertTokenizerFast"),Gw.forEach(t),ah.forEach(t),Tp=d(s),vt=n(s,"DIV",{class:!0});var Qo=r(vt);k(cn.$$.fragment,Qo),ef=d(Qo),pn=n(Qo,"P",{});var ih=r(pn);tf=i(ih,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=n(ih,"EM",{});var Xw=r(Fl);sf=i(Xw,"tokenizers"),Xw.forEach(t),of=i(ih," library)."),ih.forEach(t),nf=d(Qo),Zs=n(Qo,"P",{});var hp=r(Zs);gi=n(hp,"A",{href:!0});var Yw=r(gi);rf=i(Yw,"DistilBertTokenizerFast"),Yw.forEach(t),af=i(hp," is identical to "),_i=n(hp,"A",{href:!0});var Zw=r(_i);lf=i(Zw,"BertTokenizerFast"),Zw.forEach(t),df=i(hp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),hp.forEach(t),cf=d(Qo),hn=n(Qo,"P",{});var lh=r(hn);pf=i(lh,"Refer to superclass "),vi=n(lh,"A",{href:!0});var e2=r(vi);hf=i(e2,"BertTokenizerFast"),e2.forEach(t),uf=i(lh," for usage examples and documentation concerning parameters."),lh.forEach(t),Qo.forEach(t),bp=d(s),cs=n(s,"H2",{class:!0});var dh=r(cs);eo=n(dh,"A",{id:!0,class:!0,href:!0});var t2=r(eo);yl=n(t2,"SPAN",{});var s2=r(yl);k(un.$$.fragment,s2),s2.forEach(t),t2.forEach(t),ff=d(dh),Bl=n(dh,"SPAN",{});var o2=r(Bl);mf=i(o2,"DistilBertModel"),o2.forEach(t),dh.forEach(t),kp=d(s),Oe=n(s,"DIV",{class:!0});var It=r(Oe);k(fn.$$.fragment,It),gf=d(It),Ml=n(It,"P",{});var n2=r(Ml);_f=i(n2,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),n2.forEach(t),vf=d(It),mn=n(It,"P",{});var ch=r(mn);Tf=i(ch,"This model inherits from "),Ti=n(ch,"A",{href:!0});var r2=r(Ti);bf=i(r2,"PreTrainedModel"),r2.forEach(t),kf=i(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),wf=d(It),gn=n(It,"P",{});var ph=r(gn);$f=i(ph,"This model is also a PyTorch "),_n=n(ph,"A",{href:!0,rel:!0});var a2=r(_n);Df=i(a2,"torch.nn.Module"),a2.forEach(t),Ff=i(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),yf=d(It),Ve=n(It,"DIV",{class:!0});var Lt=r(Ve);k(vn.$$.fragment,Lt),Bf=d(Lt),ps=n(Lt,"P",{});var Gi=r(ps);Mf=i(Gi,"The "),bi=n(Gi,"A",{href:!0});var i2=r(bi);Ef=i(i2,"DistilBertModel"),i2.forEach(t),xf=i(Gi," forward method, overrides the "),El=n(Gi,"CODE",{});var l2=r(El);zf=i(l2,"__call__"),l2.forEach(t),Cf=i(Gi," special method."),Gi.forEach(t),jf=d(Lt),k(to.$$.fragment,Lt),Pf=d(Lt),xl=n(Lt,"P",{});var d2=r(xl);qf=i(d2,"Example:"),d2.forEach(t),Af=d(Lt),k(Tn.$$.fragment,Lt),Lt.forEach(t),It.forEach(t),wp=d(s),hs=n(s,"H2",{class:!0});var hh=r(hs);so=n(hh,"A",{id:!0,class:!0,href:!0});var c2=r(so);zl=n(c2,"SPAN",{});var p2=r(zl);k(bn.$$.fragment,p2),p2.forEach(t),c2.forEach(t),If=d(hh),Cl=n(hh,"SPAN",{});var h2=r(Cl);Lf=i(h2,"DistilBertForMaskedLM"),h2.forEach(t),hh.forEach(t),$p=d(s),We=n(s,"DIV",{class:!0});var St=r(We);k(kn.$$.fragment,St),Sf=d(St),wn=n(St,"P",{});var uh=r(wn);Nf=i(uh,"DistilBert Model with a "),jl=n(uh,"CODE",{});var u2=r(jl);Of=i(u2,"masked language modeling"),u2.forEach(t),Wf=i(uh," head on top."),uh.forEach(t),Rf=d(St),$n=n(St,"P",{});var fh=r($n);Hf=i(fh,"This model inherits from "),ki=n(fh,"A",{href:!0});var f2=r(ki);Qf=i(f2,"PreTrainedModel"),f2.forEach(t),Uf=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Vf=d(St),Dn=n(St,"P",{});var mh=r(Dn);Jf=i(mh,"This model is also a PyTorch "),Fn=n(mh,"A",{href:!0,rel:!0});var m2=r(Fn);Kf=i(m2,"torch.nn.Module"),m2.forEach(t),Gf=i(mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh.forEach(t),Xf=d(St),Je=n(St,"DIV",{class:!0});var Nt=r(Je);k(yn.$$.fragment,Nt),Yf=d(Nt),us=n(Nt,"P",{});var Xi=r(us);Zf=i(Xi,"The "),wi=n(Xi,"A",{href:!0});var g2=r(wi);em=i(g2,"DistilBertForMaskedLM"),g2.forEach(t),tm=i(Xi," forward method, overrides the "),Pl=n(Xi,"CODE",{});var _2=r(Pl);sm=i(_2,"__call__"),_2.forEach(t),om=i(Xi," special method."),Xi.forEach(t),nm=d(Nt),k(oo.$$.fragment,Nt),rm=d(Nt),ql=n(Nt,"P",{});var v2=r(ql);am=i(v2,"Example:"),v2.forEach(t),im=d(Nt),k(Bn.$$.fragment,Nt),Nt.forEach(t),St.forEach(t),Dp=d(s),fs=n(s,"H2",{class:!0});var gh=r(fs);no=n(gh,"A",{id:!0,class:!0,href:!0});var T2=r(no);Al=n(T2,"SPAN",{});var b2=r(Al);k(Mn.$$.fragment,b2),b2.forEach(t),T2.forEach(t),lm=d(gh),Il=n(gh,"SPAN",{});var k2=r(Il);dm=i(k2,"DistilBertForSequenceClassification"),k2.forEach(t),gh.forEach(t),Fp=d(s),Re=n(s,"DIV",{class:!0});var Ot=r(Re);k(En.$$.fragment,Ot),cm=d(Ot),Ll=n(Ot,"P",{});var w2=r(Ll);pm=i(w2,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),w2.forEach(t),hm=d(Ot),xn=n(Ot,"P",{});var _h=r(xn);um=i(_h,"This model inherits from "),$i=n(_h,"A",{href:!0});var $2=r($i);fm=i($2,"PreTrainedModel"),$2.forEach(t),mm=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),gm=d(Ot),zn=n(Ot,"P",{});var vh=r(zn);_m=i(vh,"This model is also a PyTorch "),Cn=n(vh,"A",{href:!0,rel:!0});var D2=r(Cn);vm=i(D2,"torch.nn.Module"),D2.forEach(t),Tm=i(vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh.forEach(t),bm=d(Ot),je=n(Ot,"DIV",{class:!0});var ct=r(je);k(jn.$$.fragment,ct),km=d(ct),ms=n(ct,"P",{});var Yi=r(ms);wm=i(Yi,"The "),Di=n(Yi,"A",{href:!0});var F2=r(Di);$m=i(F2,"DistilBertForSequenceClassification"),F2.forEach(t),Dm=i(Yi," forward method, overrides the "),Sl=n(Yi,"CODE",{});var y2=r(Sl);Fm=i(y2,"__call__"),y2.forEach(t),ym=i(Yi," special method."),Yi.forEach(t),Bm=d(ct),k(ro.$$.fragment,ct),Mm=d(ct),Nl=n(ct,"P",{});var B2=r(Nl);Em=i(B2,"Example of single-label classification:"),B2.forEach(t),xm=d(ct),k(Pn.$$.fragment,ct),zm=d(ct),Ol=n(ct,"P",{});var M2=r(Ol);Cm=i(M2,"Example of multi-label classification:"),M2.forEach(t),jm=d(ct),k(qn.$$.fragment,ct),ct.forEach(t),Ot.forEach(t),yp=d(s),gs=n(s,"H2",{class:!0});var Th=r(gs);ao=n(Th,"A",{id:!0,class:!0,href:!0});var E2=r(ao);Wl=n(E2,"SPAN",{});var x2=r(Wl);k(An.$$.fragment,x2),x2.forEach(t),E2.forEach(t),Pm=d(Th),Rl=n(Th,"SPAN",{});var z2=r(Rl);qm=i(z2,"DistilBertForMultipleChoice"),z2.forEach(t),Th.forEach(t),Bp=d(s),He=n(s,"DIV",{class:!0});var Wt=r(He);k(In.$$.fragment,Wt),Am=d(Wt),Hl=n(Wt,"P",{});var C2=r(Hl);Im=i(C2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),C2.forEach(t),Lm=d(Wt),Ln=n(Wt,"P",{});var bh=r(Ln);Sm=i(bh,"This model inherits from "),Fi=n(bh,"A",{href:!0});var j2=r(Fi);Nm=i(j2,"PreTrainedModel"),j2.forEach(t),Om=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Wm=d(Wt),Sn=n(Wt,"P",{});var kh=r(Sn);Rm=i(kh,"This model is also a PyTorch "),Nn=n(kh,"A",{href:!0,rel:!0});var P2=r(Nn);Hm=i(P2,"torch.nn.Module"),P2.forEach(t),Qm=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),Um=d(Wt),Ke=n(Wt,"DIV",{class:!0});var Rt=r(Ke);k(On.$$.fragment,Rt),Vm=d(Rt),_s=n(Rt,"P",{});var Zi=r(_s);Jm=i(Zi,"The "),yi=n(Zi,"A",{href:!0});var q2=r(yi);Km=i(q2,"DistilBertForMultipleChoice"),q2.forEach(t),Gm=i(Zi," forward method, overrides the "),Ql=n(Zi,"CODE",{});var A2=r(Ql);Xm=i(A2,"__call__"),A2.forEach(t),Ym=i(Zi," special method."),Zi.forEach(t),Zm=d(Rt),k(io.$$.fragment,Rt),eg=d(Rt),Ul=n(Rt,"P",{});var I2=r(Ul);tg=i(I2,"Examples:"),I2.forEach(t),sg=d(Rt),k(Wn.$$.fragment,Rt),Rt.forEach(t),Wt.forEach(t),Mp=d(s),vs=n(s,"H2",{class:!0});var wh=r(vs);lo=n(wh,"A",{id:!0,class:!0,href:!0});var L2=r(lo);Vl=n(L2,"SPAN",{});var S2=r(Vl);k(Rn.$$.fragment,S2),S2.forEach(t),L2.forEach(t),og=d(wh),Jl=n(wh,"SPAN",{});var N2=r(Jl);ng=i(N2,"DistilBertForTokenClassification"),N2.forEach(t),wh.forEach(t),Ep=d(s),Qe=n(s,"DIV",{class:!0});var Ht=r(Qe);k(Hn.$$.fragment,Ht),rg=d(Ht),Kl=n(Ht,"P",{});var O2=r(Kl);ag=i(O2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),O2.forEach(t),ig=d(Ht),Qn=n(Ht,"P",{});var $h=r(Qn);lg=i($h,"This model inherits from "),Bi=n($h,"A",{href:!0});var W2=r(Bi);dg=i(W2,"PreTrainedModel"),W2.forEach(t),cg=i($h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h.forEach(t),pg=d(Ht),Un=n(Ht,"P",{});var Dh=r(Un);hg=i(Dh,"This model is also a PyTorch "),Vn=n(Dh,"A",{href:!0,rel:!0});var R2=r(Vn);ug=i(R2,"torch.nn.Module"),R2.forEach(t),fg=i(Dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dh.forEach(t),mg=d(Ht),Ge=n(Ht,"DIV",{class:!0});var Qt=r(Ge);k(Jn.$$.fragment,Qt),gg=d(Qt),Ts=n(Qt,"P",{});var el=r(Ts);_g=i(el,"The "),Mi=n(el,"A",{href:!0});var H2=r(Mi);vg=i(H2,"DistilBertForTokenClassification"),H2.forEach(t),Tg=i(el," forward method, overrides the "),Gl=n(el,"CODE",{});var Q2=r(Gl);bg=i(Q2,"__call__"),Q2.forEach(t),kg=i(el," special method."),el.forEach(t),wg=d(Qt),k(co.$$.fragment,Qt),$g=d(Qt),Xl=n(Qt,"P",{});var U2=r(Xl);Dg=i(U2,"Example:"),U2.forEach(t),Fg=d(Qt),k(Kn.$$.fragment,Qt),Qt.forEach(t),Ht.forEach(t),xp=d(s),bs=n(s,"H2",{class:!0});var Fh=r(bs);po=n(Fh,"A",{id:!0,class:!0,href:!0});var V2=r(po);Yl=n(V2,"SPAN",{});var J2=r(Yl);k(Gn.$$.fragment,J2),J2.forEach(t),V2.forEach(t),yg=d(Fh),Zl=n(Fh,"SPAN",{});var K2=r(Zl);Bg=i(K2,"DistilBertForQuestionAnswering"),K2.forEach(t),Fh.forEach(t),zp=d(s),Ue=n(s,"DIV",{class:!0});var Ut=r(Ue);k(Xn.$$.fragment,Ut),Mg=d(Ut),ks=n(Ut,"P",{});var tl=r(ks);Eg=i(tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=n(tl,"CODE",{});var G2=r(ed);xg=i(G2,"span start logits"),G2.forEach(t),zg=i(tl," and "),td=n(tl,"CODE",{});var X2=r(td);Cg=i(X2,"span end logits"),X2.forEach(t),jg=i(tl,")."),tl.forEach(t),Pg=d(Ut),Yn=n(Ut,"P",{});var yh=r(Yn);qg=i(yh,"This model inherits from "),Ei=n(yh,"A",{href:!0});var Y2=r(Ei);Ag=i(Y2,"PreTrainedModel"),Y2.forEach(t),Ig=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Lg=d(Ut),Zn=n(Ut,"P",{});var Bh=r(Zn);Sg=i(Bh,"This model is also a PyTorch "),er=n(Bh,"A",{href:!0,rel:!0});var Z2=r(er);Ng=i(Z2,"torch.nn.Module"),Z2.forEach(t),Og=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),Wg=d(Ut),Xe=n(Ut,"DIV",{class:!0});var Vt=r(Xe);k(tr.$$.fragment,Vt),Rg=d(Vt),ws=n(Vt,"P",{});var sl=r(ws);Hg=i(sl,"The "),xi=n(sl,"A",{href:!0});var e$=r(xi);Qg=i(e$,"DistilBertForQuestionAnswering"),e$.forEach(t),Ug=i(sl," forward method, overrides the "),sd=n(sl,"CODE",{});var t$=r(sd);Vg=i(t$,"__call__"),t$.forEach(t),Jg=i(sl," special method."),sl.forEach(t),Kg=d(Vt),k(ho.$$.fragment,Vt),Gg=d(Vt),od=n(Vt,"P",{});var s$=r(od);Xg=i(s$,"Example:"),s$.forEach(t),Yg=d(Vt),k(sr.$$.fragment,Vt),Vt.forEach(t),Ut.forEach(t),Cp=d(s),$s=n(s,"H2",{class:!0});var Mh=r($s);uo=n(Mh,"A",{id:!0,class:!0,href:!0});var o$=r(uo);nd=n(o$,"SPAN",{});var n$=r(nd);k(or.$$.fragment,n$),n$.forEach(t),o$.forEach(t),Zg=d(Mh),rd=n(Mh,"SPAN",{});var r$=r(rd);e_=i(r$,"TFDistilBertModel"),r$.forEach(t),Mh.forEach(t),jp=d(s),Pe=n(s,"DIV",{class:!0});var bt=r(Pe);k(nr.$$.fragment,bt),t_=d(bt),ad=n(bt,"P",{});var a$=r(ad);s_=i(a$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),a$.forEach(t),o_=d(bt),rr=n(bt,"P",{});var Eh=r(rr);n_=i(Eh,"This model inherits from "),zi=n(Eh,"A",{href:!0});var i$=r(zi);r_=i(i$,"TFPreTrainedModel"),i$.forEach(t),a_=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),i_=d(bt),ar=n(bt,"P",{});var xh=r(ar);l_=i(xh,"This model is also a "),ir=n(xh,"A",{href:!0,rel:!0});var l$=r(ir);d_=i(l$,"tf.keras.Model"),l$.forEach(t),c_=i(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),p_=d(bt),k(fo.$$.fragment,bt),h_=d(bt),Ye=n(bt,"DIV",{class:!0});var Jt=r(Ye);k(lr.$$.fragment,Jt),u_=d(Jt),Ds=n(Jt,"P",{});var ol=r(Ds);f_=i(ol,"The "),Ci=n(ol,"A",{href:!0});var d$=r(Ci);m_=i(d$,"TFDistilBertModel"),d$.forEach(t),g_=i(ol," forward method, overrides the "),id=n(ol,"CODE",{});var c$=r(id);__=i(c$,"__call__"),c$.forEach(t),v_=i(ol," special method."),ol.forEach(t),T_=d(Jt),k(mo.$$.fragment,Jt),b_=d(Jt),ld=n(Jt,"P",{});var p$=r(ld);k_=i(p$,"Example:"),p$.forEach(t),w_=d(Jt),k(dr.$$.fragment,Jt),Jt.forEach(t),bt.forEach(t),Pp=d(s),Fs=n(s,"H2",{class:!0});var zh=r(Fs);go=n(zh,"A",{id:!0,class:!0,href:!0});var h$=r(go);dd=n(h$,"SPAN",{});var u$=r(dd);k(cr.$$.fragment,u$),u$.forEach(t),h$.forEach(t),$_=d(zh),cd=n(zh,"SPAN",{});var f$=r(cd);D_=i(f$,"TFDistilBertForMaskedLM"),f$.forEach(t),zh.forEach(t),qp=d(s),qe=n(s,"DIV",{class:!0});var kt=r(qe);k(pr.$$.fragment,kt),F_=d(kt),hr=n(kt,"P",{});var Ch=r(hr);y_=i(Ch,"DistilBert Model with a "),pd=n(Ch,"CODE",{});var m$=r(pd);B_=i(m$,"masked language modeling"),m$.forEach(t),M_=i(Ch," head on top."),Ch.forEach(t),E_=d(kt),ur=n(kt,"P",{});var jh=r(ur);x_=i(jh,"This model inherits from "),ji=n(jh,"A",{href:!0});var g$=r(ji);z_=i(g$,"TFPreTrainedModel"),g$.forEach(t),C_=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),j_=d(kt),fr=n(kt,"P",{});var Ph=r(fr);P_=i(Ph,"This model is also a "),mr=n(Ph,"A",{href:!0,rel:!0});var _$=r(mr);q_=i(_$,"tf.keras.Model"),_$.forEach(t),A_=i(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),I_=d(kt),k(_o.$$.fragment,kt),L_=d(kt),Ze=n(kt,"DIV",{class:!0});var Kt=r(Ze);k(gr.$$.fragment,Kt),S_=d(Kt),ys=n(Kt,"P",{});var nl=r(ys);N_=i(nl,"The "),Pi=n(nl,"A",{href:!0});var v$=r(Pi);O_=i(v$,"TFDistilBertForMaskedLM"),v$.forEach(t),W_=i(nl," forward method, overrides the "),hd=n(nl,"CODE",{});var T$=r(hd);R_=i(T$,"__call__"),T$.forEach(t),H_=i(nl," special method."),nl.forEach(t),Q_=d(Kt),k(vo.$$.fragment,Kt),U_=d(Kt),ud=n(Kt,"P",{});var b$=r(ud);V_=i(b$,"Example:"),b$.forEach(t),J_=d(Kt),k(_r.$$.fragment,Kt),Kt.forEach(t),kt.forEach(t),Ap=d(s),Bs=n(s,"H2",{class:!0});var qh=r(Bs);To=n(qh,"A",{id:!0,class:!0,href:!0});var k$=r(To);fd=n(k$,"SPAN",{});var w$=r(fd);k(vr.$$.fragment,w$),w$.forEach(t),k$.forEach(t),K_=d(qh),md=n(qh,"SPAN",{});var $$=r(md);G_=i($$,"TFDistilBertForSequenceClassification"),$$.forEach(t),qh.forEach(t),Ip=d(s),Ae=n(s,"DIV",{class:!0});var wt=r(Ae);k(Tr.$$.fragment,wt),X_=d(wt),gd=n(wt,"P",{});var D$=r(gd);Y_=i(D$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),D$.forEach(t),Z_=d(wt),br=n(wt,"P",{});var Ah=r(br);e1=i(Ah,"This model inherits from "),qi=n(Ah,"A",{href:!0});var F$=r(qi);t1=i(F$,"TFPreTrainedModel"),F$.forEach(t),s1=i(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),o1=d(wt),kr=n(wt,"P",{});var Ih=r(kr);n1=i(Ih,"This model is also a "),wr=n(Ih,"A",{href:!0,rel:!0});var y$=r(wr);r1=i(y$,"tf.keras.Model"),y$.forEach(t),a1=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),i1=d(wt),k(bo.$$.fragment,wt),l1=d(wt),et=n(wt,"DIV",{class:!0});var Gt=r(et);k($r.$$.fragment,Gt),d1=d(Gt),Ms=n(Gt,"P",{});var rl=r(Ms);c1=i(rl,"The "),Ai=n(rl,"A",{href:!0});var B$=r(Ai);p1=i(B$,"TFDistilBertForSequenceClassification"),B$.forEach(t),h1=i(rl," forward method, overrides the "),_d=n(rl,"CODE",{});var M$=r(_d);u1=i(M$,"__call__"),M$.forEach(t),f1=i(rl," special method."),rl.forEach(t),m1=d(Gt),k(ko.$$.fragment,Gt),g1=d(Gt),vd=n(Gt,"P",{});var E$=r(vd);_1=i(E$,"Example:"),E$.forEach(t),v1=d(Gt),k(Dr.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Lp=d(s),Es=n(s,"H2",{class:!0});var Lh=r(Es);wo=n(Lh,"A",{id:!0,class:!0,href:!0});var x$=r(wo);Td=n(x$,"SPAN",{});var z$=r(Td);k(Fr.$$.fragment,z$),z$.forEach(t),x$.forEach(t),T1=d(Lh),bd=n(Lh,"SPAN",{});var C$=r(bd);b1=i(C$,"TFDistilBertForMultipleChoice"),C$.forEach(t),Lh.forEach(t),Sp=d(s),Ie=n(s,"DIV",{class:!0});var $t=r(Ie);k(yr.$$.fragment,$t),k1=d($t),kd=n($t,"P",{});var j$=r(kd);w1=i(j$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),j$.forEach(t),$1=d($t),Br=n($t,"P",{});var Sh=r(Br);D1=i(Sh,"This model inherits from "),Ii=n(Sh,"A",{href:!0});var P$=r(Ii);F1=i(P$,"TFPreTrainedModel"),P$.forEach(t),y1=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),B1=d($t),Mr=n($t,"P",{});var Nh=r(Mr);M1=i(Nh,"This model is also a "),Er=n(Nh,"A",{href:!0,rel:!0});var q$=r(Er);E1=i(q$,"tf.keras.Model"),q$.forEach(t),x1=i(Nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),z1=d($t),k($o.$$.fragment,$t),C1=d($t),tt=n($t,"DIV",{class:!0});var Xt=r(tt);k(xr.$$.fragment,Xt),j1=d(Xt),xs=n(Xt,"P",{});var al=r(xs);P1=i(al,"The "),Li=n(al,"A",{href:!0});var A$=r(Li);q1=i(A$,"TFDistilBertForMultipleChoice"),A$.forEach(t),A1=i(al," forward method, overrides the "),wd=n(al,"CODE",{});var I$=r(wd);I1=i(I$,"__call__"),I$.forEach(t),L1=i(al," special method."),al.forEach(t),S1=d(Xt),k(Do.$$.fragment,Xt),N1=d(Xt),$d=n(Xt,"P",{});var L$=r($d);O1=i(L$,"Example:"),L$.forEach(t),W1=d(Xt),k(zr.$$.fragment,Xt),Xt.forEach(t),$t.forEach(t),Np=d(s),zs=n(s,"H2",{class:!0});var Oh=r(zs);Fo=n(Oh,"A",{id:!0,class:!0,href:!0});var S$=r(Fo);Dd=n(S$,"SPAN",{});var N$=r(Dd);k(Cr.$$.fragment,N$),N$.forEach(t),S$.forEach(t),R1=d(Oh),Fd=n(Oh,"SPAN",{});var O$=r(Fd);H1=i(O$,"TFDistilBertForTokenClassification"),O$.forEach(t),Oh.forEach(t),Op=d(s),Le=n(s,"DIV",{class:!0});var Dt=r(Le);k(jr.$$.fragment,Dt),Q1=d(Dt),yd=n(Dt,"P",{});var W$=r(yd);U1=i(W$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),W$.forEach(t),V1=d(Dt),Pr=n(Dt,"P",{});var Wh=r(Pr);J1=i(Wh,"This model inherits from "),Si=n(Wh,"A",{href:!0});var R$=r(Si);K1=i(R$,"TFPreTrainedModel"),R$.forEach(t),G1=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),X1=d(Dt),qr=n(Dt,"P",{});var Rh=r(qr);Y1=i(Rh,"This model is also a "),Ar=n(Rh,"A",{href:!0,rel:!0});var H$=r(Ar);Z1=i(H$,"tf.keras.Model"),H$.forEach(t),ev=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),tv=d(Dt),k(yo.$$.fragment,Dt),sv=d(Dt),st=n(Dt,"DIV",{class:!0});var Yt=r(st);k(Ir.$$.fragment,Yt),ov=d(Yt),Cs=n(Yt,"P",{});var il=r(Cs);nv=i(il,"The "),Ni=n(il,"A",{href:!0});var Q$=r(Ni);rv=i(Q$,"TFDistilBertForTokenClassification"),Q$.forEach(t),av=i(il," forward method, overrides the "),Bd=n(il,"CODE",{});var U$=r(Bd);iv=i(U$,"__call__"),U$.forEach(t),lv=i(il," special method."),il.forEach(t),dv=d(Yt),k(Bo.$$.fragment,Yt),cv=d(Yt),Md=n(Yt,"P",{});var V$=r(Md);pv=i(V$,"Example:"),V$.forEach(t),hv=d(Yt),k(Lr.$$.fragment,Yt),Yt.forEach(t),Dt.forEach(t),Wp=d(s),js=n(s,"H2",{class:!0});var Hh=r(js);Mo=n(Hh,"A",{id:!0,class:!0,href:!0});var J$=r(Mo);Ed=n(J$,"SPAN",{});var K$=r(Ed);k(Sr.$$.fragment,K$),K$.forEach(t),J$.forEach(t),uv=d(Hh),xd=n(Hh,"SPAN",{});var G$=r(xd);fv=i(G$,"TFDistilBertForQuestionAnswering"),G$.forEach(t),Hh.forEach(t),Rp=d(s),Se=n(s,"DIV",{class:!0});var Ft=r(Se);k(Nr.$$.fragment,Ft),mv=d(Ft),Ps=n(Ft,"P",{});var ll=r(Ps);gv=i(ll,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=n(ll,"CODE",{});var X$=r(zd);_v=i(X$,"span start logits"),X$.forEach(t),vv=i(ll," and "),Cd=n(ll,"CODE",{});var Y$=r(Cd);Tv=i(Y$,"span end logits"),Y$.forEach(t),bv=i(ll,")."),ll.forEach(t),kv=d(Ft),Or=n(Ft,"P",{});var Qh=r(Or);wv=i(Qh,"This model inherits from "),Oi=n(Qh,"A",{href:!0});var Z$=r(Oi);$v=i(Z$,"TFPreTrainedModel"),Z$.forEach(t),Dv=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),Fv=d(Ft),Wr=n(Ft,"P",{});var Uh=r(Wr);yv=i(Uh,"This model is also a "),Rr=n(Uh,"A",{href:!0,rel:!0});var eD=r(Rr);Bv=i(eD,"tf.keras.Model"),eD.forEach(t),Mv=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),Ev=d(Ft),k(Eo.$$.fragment,Ft),xv=d(Ft),ot=n(Ft,"DIV",{class:!0});var Zt=r(ot);k(Hr.$$.fragment,Zt),zv=d(Zt),qs=n(Zt,"P",{});var dl=r(qs);Cv=i(dl,"The "),Wi=n(dl,"A",{href:!0});var tD=r(Wi);jv=i(tD,"TFDistilBertForQuestionAnswering"),tD.forEach(t),Pv=i(dl," forward method, overrides the "),jd=n(dl,"CODE",{});var sD=r(jd);qv=i(sD,"__call__"),sD.forEach(t),Av=i(dl," special method."),dl.forEach(t),Iv=d(Zt),k(xo.$$.fragment,Zt),Lv=d(Zt),Pd=n(Zt,"P",{});var oD=r(Pd);Sv=i(oD,"Example:"),oD.forEach(t),Nv=d(Zt),k(Qr.$$.fragment,Zt),Zt.forEach(t),Ft.forEach(t),Hp=d(s),As=n(s,"H2",{class:!0});var Vh=r(As);zo=n(Vh,"A",{id:!0,class:!0,href:!0});var nD=r(zo);qd=n(nD,"SPAN",{});var rD=r(qd);k(Ur.$$.fragment,rD),rD.forEach(t),nD.forEach(t),Ov=d(Vh),Ad=n(Vh,"SPAN",{});var aD=r(Ad);Wv=i(aD,"FlaxDistilBertModel"),aD.forEach(t),Vh.forEach(t),Qp=d(s),Be=n(s,"DIV",{class:!0});var pt=r(Be);k(Vr.$$.fragment,pt),Rv=d(pt),Id=n(pt,"P",{});var iD=r(Id);Hv=i(iD,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),iD.forEach(t),Qv=d(pt),Jr=n(pt,"P",{});var Jh=r(Jr);Uv=i(Jh,"This model inherits from "),Ri=n(Jh,"A",{href:!0});var lD=r(Ri);Vv=i(lD,"FlaxPreTrainedModel"),lD.forEach(t),Jv=i(Jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jh.forEach(t),Kv=d(pt),Kr=n(pt,"P",{});var Kh=r(Kr);Gv=i(Kh,"This model is also a Flax Linen "),Gr=n(Kh,"A",{href:!0,rel:!0});var dD=r(Gr);Xv=i(dD,"flax.linen.Module"),dD.forEach(t),Yv=i(Kh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kh.forEach(t),Zv=d(pt),Ld=n(pt,"P",{});var cD=r(Ld);eT=i(cD,"Finally, this model supports inherent JAX features such as:"),cD.forEach(t),tT=d(pt),Bt=n(pt,"UL",{});var Uo=r(Bt);Sd=n(Uo,"LI",{});var pD=r(Sd);Xr=n(pD,"A",{href:!0,rel:!0});var hD=r(Xr);sT=i(hD,"Just-In-Time (JIT) compilation"),hD.forEach(t),pD.forEach(t),oT=d(Uo),Nd=n(Uo,"LI",{});var uD=r(Nd);Yr=n(uD,"A",{href:!0,rel:!0});var fD=r(Yr);nT=i(fD,"Automatic Differentiation"),fD.forEach(t),uD.forEach(t),rT=d(Uo),Od=n(Uo,"LI",{});var mD=r(Od);Zr=n(mD,"A",{href:!0,rel:!0});var gD=r(Zr);aT=i(gD,"Vectorization"),gD.forEach(t),mD.forEach(t),iT=d(Uo),Wd=n(Uo,"LI",{});var _D=r(Wd);ea=n(_D,"A",{href:!0,rel:!0});var vD=r(ea);lT=i(vD,"Parallelization"),vD.forEach(t),_D.forEach(t),Uo.forEach(t),dT=d(pt),nt=n(pt,"DIV",{class:!0});var es=r(nt);k(ta.$$.fragment,es),cT=d(es),Is=n(es,"P",{});var cl=r(Is);pT=i(cl,"The "),Rd=n(cl,"CODE",{});var TD=r(Rd);hT=i(TD,"FlaxDistilBertPreTrainedModel"),TD.forEach(t),uT=i(cl,"forward method, overrides the "),Hd=n(cl,"CODE",{});var bD=r(Hd);fT=i(bD,"__call__"),bD.forEach(t),mT=i(cl," special method."),cl.forEach(t),gT=d(es),k(Co.$$.fragment,es),_T=d(es),Qd=n(es,"P",{});var kD=r(Qd);vT=i(kD,"Example:"),kD.forEach(t),TT=d(es),k(sa.$$.fragment,es),es.forEach(t),pt.forEach(t),Up=d(s),Ls=n(s,"H2",{class:!0});var Gh=r(Ls);jo=n(Gh,"A",{id:!0,class:!0,href:!0});var wD=r(jo);Ud=n(wD,"SPAN",{});var $D=r(Ud);k(oa.$$.fragment,$D),$D.forEach(t),wD.forEach(t),bT=d(Gh),Vd=n(Gh,"SPAN",{});var DD=r(Vd);kT=i(DD,"FlaxDistilBertForMaskedLM"),DD.forEach(t),Gh.forEach(t),Vp=d(s),Me=n(s,"DIV",{class:!0});var ht=r(Me);k(na.$$.fragment,ht),wT=d(ht),ra=n(ht,"P",{});var Xh=r(ra);$T=i(Xh,"DistilBert Model with a "),Jd=n(Xh,"CODE",{});var FD=r(Jd);DT=i(FD,"language modeling"),FD.forEach(t),FT=i(Xh," head on top."),Xh.forEach(t),yT=d(ht),aa=n(ht,"P",{});var Yh=r(aa);BT=i(Yh,"This model inherits from "),Hi=n(Yh,"A",{href:!0});var yD=r(Hi);MT=i(yD,"FlaxPreTrainedModel"),yD.forEach(t),ET=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yh.forEach(t),xT=d(ht),ia=n(ht,"P",{});var Zh=r(ia);zT=i(Zh,"This model is also a Flax Linen "),la=n(Zh,"A",{href:!0,rel:!0});var BD=r(la);CT=i(BD,"flax.linen.Module"),BD.forEach(t),jT=i(Zh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),PT=d(ht),Kd=n(ht,"P",{});var MD=r(Kd);qT=i(MD,"Finally, this model supports inherent JAX features such as:"),MD.forEach(t),AT=d(ht),Mt=n(ht,"UL",{});var Vo=r(Mt);Gd=n(Vo,"LI",{});var ED=r(Gd);da=n(ED,"A",{href:!0,rel:!0});var xD=r(da);IT=i(xD,"Just-In-Time (JIT) compilation"),xD.forEach(t),ED.forEach(t),LT=d(Vo),Xd=n(Vo,"LI",{});var zD=r(Xd);ca=n(zD,"A",{href:!0,rel:!0});var CD=r(ca);ST=i(CD,"Automatic Differentiation"),CD.forEach(t),zD.forEach(t),NT=d(Vo),Yd=n(Vo,"LI",{});var jD=r(Yd);pa=n(jD,"A",{href:!0,rel:!0});var PD=r(pa);OT=i(PD,"Vectorization"),PD.forEach(t),jD.forEach(t),WT=d(Vo),Zd=n(Vo,"LI",{});var qD=r(Zd);ha=n(qD,"A",{href:!0,rel:!0});var AD=r(ha);RT=i(AD,"Parallelization"),AD.forEach(t),qD.forEach(t),Vo.forEach(t),HT=d(ht),rt=n(ht,"DIV",{class:!0});var ts=r(rt);k(ua.$$.fragment,ts),QT=d(ts),Ss=n(ts,"P",{});var pl=r(Ss);UT=i(pl,"The "),ec=n(pl,"CODE",{});var ID=r(ec);VT=i(ID,"FlaxDistilBertPreTrainedModel"),ID.forEach(t),JT=i(pl,"forward method, overrides the "),tc=n(pl,"CODE",{});var LD=r(tc);KT=i(LD,"__call__"),LD.forEach(t),GT=i(pl," special method."),pl.forEach(t),XT=d(ts),k(Po.$$.fragment,ts),YT=d(ts),sc=n(ts,"P",{});var SD=r(sc);ZT=i(SD,"Example:"),SD.forEach(t),eb=d(ts),k(fa.$$.fragment,ts),ts.forEach(t),ht.forEach(t),Jp=d(s),Ns=n(s,"H2",{class:!0});var eu=r(Ns);qo=n(eu,"A",{id:!0,class:!0,href:!0});var ND=r(qo);oc=n(ND,"SPAN",{});var OD=r(oc);k(ma.$$.fragment,OD),OD.forEach(t),ND.forEach(t),tb=d(eu),nc=n(eu,"SPAN",{});var WD=r(nc);sb=i(WD,"FlaxDistilBertForSequenceClassification"),WD.forEach(t),eu.forEach(t),Kp=d(s),Ee=n(s,"DIV",{class:!0});var ut=r(Ee);k(ga.$$.fragment,ut),ob=d(ut),rc=n(ut,"P",{});var RD=r(rc);nb=i(RD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),RD.forEach(t),rb=d(ut),_a=n(ut,"P",{});var tu=r(_a);ab=i(tu,"This model inherits from "),Qi=n(tu,"A",{href:!0});var HD=r(Qi);ib=i(HD,"FlaxPreTrainedModel"),HD.forEach(t),lb=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tu.forEach(t),db=d(ut),va=n(ut,"P",{});var su=r(va);cb=i(su,"This model is also a Flax Linen "),Ta=n(su,"A",{href:!0,rel:!0});var QD=r(Ta);pb=i(QD,"flax.linen.Module"),QD.forEach(t),hb=i(su,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su.forEach(t),ub=d(ut),ac=n(ut,"P",{});var UD=r(ac);fb=i(UD,"Finally, this model supports inherent JAX features such as:"),UD.forEach(t),mb=d(ut),Et=n(ut,"UL",{});var Jo=r(Et);ic=n(Jo,"LI",{});var VD=r(ic);ba=n(VD,"A",{href:!0,rel:!0});var JD=r(ba);gb=i(JD,"Just-In-Time (JIT) compilation"),JD.forEach(t),VD.forEach(t),_b=d(Jo),lc=n(Jo,"LI",{});var KD=r(lc);ka=n(KD,"A",{href:!0,rel:!0});var GD=r(ka);vb=i(GD,"Automatic Differentiation"),GD.forEach(t),KD.forEach(t),Tb=d(Jo),dc=n(Jo,"LI",{});var XD=r(dc);wa=n(XD,"A",{href:!0,rel:!0});var YD=r(wa);bb=i(YD,"Vectorization"),YD.forEach(t),XD.forEach(t),kb=d(Jo),cc=n(Jo,"LI",{});var ZD=r(cc);$a=n(ZD,"A",{href:!0,rel:!0});var eF=r($a);wb=i(eF,"Parallelization"),eF.forEach(t),ZD.forEach(t),Jo.forEach(t),$b=d(ut),at=n(ut,"DIV",{class:!0});var ss=r(at);k(Da.$$.fragment,ss),Db=d(ss),Os=n(ss,"P",{});var hl=r(Os);Fb=i(hl,"The "),pc=n(hl,"CODE",{});var tF=r(pc);yb=i(tF,"FlaxDistilBertPreTrainedModel"),tF.forEach(t),Bb=i(hl,"forward method, overrides the "),hc=n(hl,"CODE",{});var sF=r(hc);Mb=i(sF,"__call__"),sF.forEach(t),Eb=i(hl," special method."),hl.forEach(t),xb=d(ss),k(Ao.$$.fragment,ss),zb=d(ss),uc=n(ss,"P",{});var oF=r(uc);Cb=i(oF,"Example:"),oF.forEach(t),jb=d(ss),k(Fa.$$.fragment,ss),ss.forEach(t),ut.forEach(t),Gp=d(s),Ws=n(s,"H2",{class:!0});var ou=r(Ws);Io=n(ou,"A",{id:!0,class:!0,href:!0});var nF=r(Io);fc=n(nF,"SPAN",{});var rF=r(fc);k(ya.$$.fragment,rF),rF.forEach(t),nF.forEach(t),Pb=d(ou),mc=n(ou,"SPAN",{});var aF=r(mc);qb=i(aF,"FlaxDistilBertForMultipleChoice"),aF.forEach(t),ou.forEach(t),Xp=d(s),xe=n(s,"DIV",{class:!0});var ft=r(xe);k(Ba.$$.fragment,ft),Ab=d(ft),gc=n(ft,"P",{});var iF=r(gc);Ib=i(iF,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),iF.forEach(t),Lb=d(ft),Ma=n(ft,"P",{});var nu=r(Ma);Sb=i(nu,"This model inherits from "),Ui=n(nu,"A",{href:!0});var lF=r(Ui);Nb=i(lF,"FlaxPreTrainedModel"),lF.forEach(t),Ob=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nu.forEach(t),Wb=d(ft),Ea=n(ft,"P",{});var ru=r(Ea);Rb=i(ru,"This model is also a Flax Linen "),xa=n(ru,"A",{href:!0,rel:!0});var dF=r(xa);Hb=i(dF,"flax.linen.Module"),dF.forEach(t),Qb=i(ru,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ru.forEach(t),Ub=d(ft),_c=n(ft,"P",{});var cF=r(_c);Vb=i(cF,"Finally, this model supports inherent JAX features such as:"),cF.forEach(t),Jb=d(ft),xt=n(ft,"UL",{});var Ko=r(xt);vc=n(Ko,"LI",{});var pF=r(vc);za=n(pF,"A",{href:!0,rel:!0});var hF=r(za);Kb=i(hF,"Just-In-Time (JIT) compilation"),hF.forEach(t),pF.forEach(t),Gb=d(Ko),Tc=n(Ko,"LI",{});var uF=r(Tc);Ca=n(uF,"A",{href:!0,rel:!0});var fF=r(Ca);Xb=i(fF,"Automatic Differentiation"),fF.forEach(t),uF.forEach(t),Yb=d(Ko),bc=n(Ko,"LI",{});var mF=r(bc);ja=n(mF,"A",{href:!0,rel:!0});var gF=r(ja);Zb=i(gF,"Vectorization"),gF.forEach(t),mF.forEach(t),ek=d(Ko),kc=n(Ko,"LI",{});var _F=r(kc);Pa=n(_F,"A",{href:!0,rel:!0});var vF=r(Pa);tk=i(vF,"Parallelization"),vF.forEach(t),_F.forEach(t),Ko.forEach(t),sk=d(ft),it=n(ft,"DIV",{class:!0});var os=r(it);k(qa.$$.fragment,os),ok=d(os),Rs=n(os,"P",{});var ul=r(Rs);nk=i(ul,"The "),wc=n(ul,"CODE",{});var TF=r(wc);rk=i(TF,"FlaxDistilBertPreTrainedModel"),TF.forEach(t),ak=i(ul,"forward method, overrides the "),$c=n(ul,"CODE",{});var bF=r($c);ik=i(bF,"__call__"),bF.forEach(t),lk=i(ul," special method."),ul.forEach(t),dk=d(os),k(Lo.$$.fragment,os),ck=d(os),Dc=n(os,"P",{});var kF=r(Dc);pk=i(kF,"Example:"),kF.forEach(t),hk=d(os),k(Aa.$$.fragment,os),os.forEach(t),ft.forEach(t),Yp=d(s),Hs=n(s,"H2",{class:!0});var au=r(Hs);So=n(au,"A",{id:!0,class:!0,href:!0});var wF=r(So);Fc=n(wF,"SPAN",{});var $F=r(Fc);k(Ia.$$.fragment,$F),$F.forEach(t),wF.forEach(t),uk=d(au),yc=n(au,"SPAN",{});var DF=r(yc);fk=i(DF,"FlaxDistilBertForTokenClassification"),DF.forEach(t),au.forEach(t),Zp=d(s),ze=n(s,"DIV",{class:!0});var mt=r(ze);k(La.$$.fragment,mt),mk=d(mt),Bc=n(mt,"P",{});var FF=r(Bc);gk=i(FF,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),FF.forEach(t),_k=d(mt),Sa=n(mt,"P",{});var iu=r(Sa);vk=i(iu,"This model inherits from "),Vi=n(iu,"A",{href:!0});var yF=r(Vi);Tk=i(yF,"FlaxPreTrainedModel"),yF.forEach(t),bk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),kk=d(mt),Na=n(mt,"P",{});var lu=r(Na);wk=i(lu,"This model is also a Flax Linen "),Oa=n(lu,"A",{href:!0,rel:!0});var BF=r(Oa);$k=i(BF,"flax.linen.Module"),BF.forEach(t),Dk=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Fk=d(mt),Mc=n(mt,"P",{});var MF=r(Mc);yk=i(MF,"Finally, this model supports inherent JAX features such as:"),MF.forEach(t),Bk=d(mt),zt=n(mt,"UL",{});var Go=r(zt);Ec=n(Go,"LI",{});var EF=r(Ec);Wa=n(EF,"A",{href:!0,rel:!0});var xF=r(Wa);Mk=i(xF,"Just-In-Time (JIT) compilation"),xF.forEach(t),EF.forEach(t),Ek=d(Go),xc=n(Go,"LI",{});var zF=r(xc);Ra=n(zF,"A",{href:!0,rel:!0});var CF=r(Ra);xk=i(CF,"Automatic Differentiation"),CF.forEach(t),zF.forEach(t),zk=d(Go),zc=n(Go,"LI",{});var jF=r(zc);Ha=n(jF,"A",{href:!0,rel:!0});var PF=r(Ha);Ck=i(PF,"Vectorization"),PF.forEach(t),jF.forEach(t),jk=d(Go),Cc=n(Go,"LI",{});var qF=r(Cc);Qa=n(qF,"A",{href:!0,rel:!0});var AF=r(Qa);Pk=i(AF,"Parallelization"),AF.forEach(t),qF.forEach(t),Go.forEach(t),qk=d(mt),lt=n(mt,"DIV",{class:!0});var ns=r(lt);k(Ua.$$.fragment,ns),Ak=d(ns),Qs=n(ns,"P",{});var fl=r(Qs);Ik=i(fl,"The "),jc=n(fl,"CODE",{});var IF=r(jc);Lk=i(IF,"FlaxDistilBertPreTrainedModel"),IF.forEach(t),Sk=i(fl,"forward method, overrides the "),Pc=n(fl,"CODE",{});var LF=r(Pc);Nk=i(LF,"__call__"),LF.forEach(t),Ok=i(fl," special method."),fl.forEach(t),Wk=d(ns),k(No.$$.fragment,ns),Rk=d(ns),qc=n(ns,"P",{});var SF=r(qc);Hk=i(SF,"Example:"),SF.forEach(t),Qk=d(ns),k(Va.$$.fragment,ns),ns.forEach(t),mt.forEach(t),eh=d(s),Us=n(s,"H2",{class:!0});var du=r(Us);Oo=n(du,"A",{id:!0,class:!0,href:!0});var NF=r(Oo);Ac=n(NF,"SPAN",{});var OF=r(Ac);k(Ja.$$.fragment,OF),OF.forEach(t),NF.forEach(t),Uk=d(du),Ic=n(du,"SPAN",{});var WF=r(Ic);Vk=i(WF,"FlaxDistilBertForQuestionAnswering"),WF.forEach(t),du.forEach(t),th=d(s),Ce=n(s,"DIV",{class:!0});var gt=r(Ce);k(Ka.$$.fragment,gt),Jk=d(gt),Vs=n(gt,"P",{});var ml=r(Vs);Kk=i(ml,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=n(ml,"CODE",{});var RF=r(Lc);Gk=i(RF,"span start logits"),RF.forEach(t),Xk=i(ml," and "),Sc=n(ml,"CODE",{});var HF=r(Sc);Yk=i(HF,"span end logits"),HF.forEach(t),Zk=i(ml,")."),ml.forEach(t),ew=d(gt),Ga=n(gt,"P",{});var cu=r(Ga);tw=i(cu,"This model inherits from "),Ji=n(cu,"A",{href:!0});var QF=r(Ji);sw=i(QF,"FlaxPreTrainedModel"),QF.forEach(t),ow=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),nw=d(gt),Xa=n(gt,"P",{});var pu=r(Xa);rw=i(pu,"This model is also a Flax Linen "),Ya=n(pu,"A",{href:!0,rel:!0});var UF=r(Ya);aw=i(UF,"flax.linen.Module"),UF.forEach(t),iw=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),lw=d(gt),Nc=n(gt,"P",{});var VF=r(Nc);dw=i(VF,"Finally, this model supports inherent JAX features such as:"),VF.forEach(t),cw=d(gt),Ct=n(gt,"UL",{});var Xo=r(Ct);Oc=n(Xo,"LI",{});var JF=r(Oc);Za=n(JF,"A",{href:!0,rel:!0});var KF=r(Za);pw=i(KF,"Just-In-Time (JIT) compilation"),KF.forEach(t),JF.forEach(t),hw=d(Xo),Wc=n(Xo,"LI",{});var GF=r(Wc);ei=n(GF,"A",{href:!0,rel:!0});var XF=r(ei);uw=i(XF,"Automatic Differentiation"),XF.forEach(t),GF.forEach(t),fw=d(Xo),Rc=n(Xo,"LI",{});var YF=r(Rc);ti=n(YF,"A",{href:!0,rel:!0});var ZF=r(ti);mw=i(ZF,"Vectorization"),ZF.forEach(t),YF.forEach(t),gw=d(Xo),Hc=n(Xo,"LI",{});var ey=r(Hc);si=n(ey,"A",{href:!0,rel:!0});var ty=r(si);_w=i(ty,"Parallelization"),ty.forEach(t),ey.forEach(t),Xo.forEach(t),vw=d(gt),dt=n(gt,"DIV",{class:!0});var rs=r(dt);k(oi.$$.fragment,rs),Tw=d(rs),Js=n(rs,"P",{});var gl=r(Js);bw=i(gl,"The "),Qc=n(gl,"CODE",{});var sy=r(Qc);kw=i(sy,"FlaxDistilBertPreTrainedModel"),sy.forEach(t),ww=i(gl,"forward method, overrides the "),Uc=n(gl,"CODE",{});var oy=r(Uc);$w=i(oy,"__call__"),oy.forEach(t),Dw=i(gl," special method."),gl.forEach(t),Fw=d(rs),k(Wo.$$.fragment,rs),yw=d(rs),Vc=n(rs,"P",{});var ny=r(Vc);Bw=i(ny,"Example:"),ny.forEach(t),Mw=d(rs),k(ni.$$.fragment,rs),rs.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Py)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Yo,"href","https://huggingface.co/victorsanh"),c(Yo,"rel","nofollow"),c(Zo,"href","https://huggingface.co/kamalkraj"),c(Zo,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Ks,"id","transformers.DistilBertConfig"),c(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ks,"href","#transformers.DistilBertConfig"),c(as,"class","relative group"),c(di,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertModel"),c(ci,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(on,"href","https://huggingface.co/distilbert-base-uncased"),c(on,"rel","nofollow"),c(pi,"href","/docs/transformers/pr_16132/en/main_classes/configuration#transformers.PretrainedConfig"),c(hi,"href","/docs/transformers/pr_16132/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ne,"class","docstring"),c(Gs,"id","transformers.DistilBertTokenizer"),c(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gs,"href","#transformers.DistilBertTokenizer"),c(ls,"class","relative group"),c(ui,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(fi,"href","/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer"),c(mi,"href","/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Ys,"id","transformers.DistilBertTokenizerFast"),c(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ys,"href","#transformers.DistilBertTokenizerFast"),c(ds,"class","relative group"),c(gi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(_i,"href","/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizerFast"),c(vi,"href","/docs/transformers/pr_16132/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(eo,"id","transformers.DistilBertModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.DistilBertModel"),c(cs,"class","relative group"),c(Ti,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(bi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertModel"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(so,"id","transformers.DistilBertForMaskedLM"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.DistilBertForMaskedLM"),c(hs,"class","relative group"),c(ki,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fn,"rel","nofollow"),c(wi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Je,"class","docstring"),c(We,"class","docstring"),c(no,"id","transformers.DistilBertForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.DistilBertForSequenceClassification"),c(fs,"class","relative group"),c($i,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Di,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(je,"class","docstring"),c(Re,"class","docstring"),c(ao,"id","transformers.DistilBertForMultipleChoice"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DistilBertForMultipleChoice"),c(gs,"class","relative group"),c(Fi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(yi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ke,"class","docstring"),c(He,"class","docstring"),c(lo,"id","transformers.DistilBertForTokenClassification"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DistilBertForTokenClassification"),c(vs,"class","relative group"),c(Bi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vn,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(Ge,"class","docstring"),c(Qe,"class","docstring"),c(po,"id","transformers.DistilBertForQuestionAnswering"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DistilBertForQuestionAnswering"),c(bs,"class","relative group"),c(Ei,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.PreTrainedModel"),c(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(er,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Xe,"class","docstring"),c(Ue,"class","docstring"),c(uo,"id","transformers.TFDistilBertModel"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFDistilBertModel"),c($s,"class","relative group"),c(zi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ye,"class","docstring"),c(Pe,"class","docstring"),c(go,"id","transformers.TFDistilBertForMaskedLM"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.TFDistilBertForMaskedLM"),c(Fs,"class","relative group"),c(ji,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(mr,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(To,"id","transformers.TFDistilBertForSequenceClassification"),c(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(To,"href","#transformers.TFDistilBertForSequenceClassification"),c(Bs,"class","relative group"),c(qi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(Ai,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(wo,"id","transformers.TFDistilBertForMultipleChoice"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDistilBertForMultipleChoice"),c(Es,"class","relative group"),c(Ii,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Er,"rel","nofollow"),c(Li,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(Fo,"id","transformers.TFDistilBertForTokenClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDistilBertForTokenClassification"),c(zs,"class","relative group"),c(Si,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ni,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(st,"class","docstring"),c(Le,"class","docstring"),c(Mo,"id","transformers.TFDistilBertForQuestionAnswering"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDistilBertForQuestionAnswering"),c(js,"class","relative group"),c(Oi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Wi,"href","/docs/transformers/pr_16132/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(zo,"id","transformers.FlaxDistilBertModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.FlaxDistilBertModel"),c(As,"class","relative group"),c(Ri,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gr,"rel","nofollow"),c(Xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xr,"rel","nofollow"),c(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Yr,"rel","nofollow"),c(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zr,"rel","nofollow"),c(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ea,"rel","nofollow"),c(nt,"class","docstring"),c(Be,"class","docstring"),c(jo,"id","transformers.FlaxDistilBertForMaskedLM"),c(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jo,"href","#transformers.FlaxDistilBertForMaskedLM"),c(Ls,"class","relative group"),c(Hi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(la,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(da,"rel","nofollow"),c(ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ca,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ha,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(qo,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Ns,"class","relative group"),c(Qi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ta,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ka,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wa,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($a,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Io,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ws,"class","relative group"),c(Ui,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ja,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Pa,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(So,"id","transformers.FlaxDistilBertForTokenClassification"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Hs,"class","relative group"),c(Vi,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Oa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ra,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ha,"rel","nofollow"),c(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qa,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Oo,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oo,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Us,"class","relative group"),c(Ji,"href","/docs/transformers/pr_16132/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ei,"rel","nofollow"),c(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ti,"rel","nofollow"),c(si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(si,"rel","nofollow"),c(dt,"class","docstring"),c(Ce,"class","docstring")},m(s,m){e(document.head,p),u(s,y,m),u(s,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(s,V,m),u(s,E,m),e(E,G),e(G,N),w(X,N,null),e(E,ce),e(E,O),e(O,pe),u(s,re,m),u(s,L,m),e(L,q),e(L,Y),e(Y,J),e(L,x),e(L,z),e(z,he),e(L,W),e(L,se),e(se,ue),e(L,R),u(s,ae,m),u(s,ee,m),e(ee,A),u(s,ie,m),u(s,S,m),e(S,oe),e(oe,fe),u(s,P,m),u(s,te,m),e(te,H),u(s,le,m),u(s,h,m),e(h,M),e(M,K),e(M,ge),e(ge,Te),e(M,I),e(M,_e),e(_e,be),e(M,ke),e(M,j),e(j,Q),e(M,we),e(h,$e),e(h,Z),e(Z,De),e(Z,ne),e(ne,Fe),e(Z,hu),u(s,up,m),u(s,Tt,m),e(Tt,uu),e(Tt,Yo),e(Yo,fu),e(Tt,mu),e(Tt,Zo),e(Zo,gu),e(Tt,_u),e(Tt,en),e(en,vu),e(Tt,Tu),u(s,fp,m),u(s,as,m),e(as,Ks),e(Ks,_l),w(tn,_l,null),e(as,bu),e(as,vl),e(vl,ku),u(s,mp,m),u(s,Ne,m),w(sn,Ne,null),e(Ne,wu),e(Ne,yt),e(yt,$u),e(yt,di),e(di,Du),e(yt,Fu),e(yt,ci),e(ci,yu),e(yt,Bu),e(yt,on),e(on,Mu),e(yt,Eu),e(Ne,xu),e(Ne,is),e(is,zu),e(is,pi),e(pi,Cu),e(is,ju),e(is,hi),e(hi,Pu),e(is,qu),e(Ne,Au),e(Ne,Tl),e(Tl,Iu),e(Ne,Lu),w(nn,Ne,null),u(s,gp,m),u(s,ls,m),e(ls,Gs),e(Gs,bl),w(rn,bl,null),e(ls,Su),e(ls,kl),e(kl,Nu),u(s,_p,m),u(s,_t,m),w(an,_t,null),e(_t,Ou),e(_t,wl),e(wl,Wu),e(_t,Ru),e(_t,Xs),e(Xs,ui),e(ui,Hu),e(Xs,Qu),e(Xs,fi),e(fi,Uu),e(Xs,Vu),e(_t,Ju),e(_t,ln),e(ln,Ku),e(ln,mi),e(mi,Gu),e(ln,Xu),u(s,vp,m),u(s,ds,m),e(ds,Ys),e(Ys,$l),w(dn,$l,null),e(ds,Yu),e(ds,Dl),e(Dl,Zu),u(s,Tp,m),u(s,vt,m),w(cn,vt,null),e(vt,ef),e(vt,pn),e(pn,tf),e(pn,Fl),e(Fl,sf),e(pn,of),e(vt,nf),e(vt,Zs),e(Zs,gi),e(gi,rf),e(Zs,af),e(Zs,_i),e(_i,lf),e(Zs,df),e(vt,cf),e(vt,hn),e(hn,pf),e(hn,vi),e(vi,hf),e(hn,uf),u(s,bp,m),u(s,cs,m),e(cs,eo),e(eo,yl),w(un,yl,null),e(cs,ff),e(cs,Bl),e(Bl,mf),u(s,kp,m),u(s,Oe,m),w(fn,Oe,null),e(Oe,gf),e(Oe,Ml),e(Ml,_f),e(Oe,vf),e(Oe,mn),e(mn,Tf),e(mn,Ti),e(Ti,bf),e(mn,kf),e(Oe,wf),e(Oe,gn),e(gn,$f),e(gn,_n),e(_n,Df),e(gn,Ff),e(Oe,yf),e(Oe,Ve),w(vn,Ve,null),e(Ve,Bf),e(Ve,ps),e(ps,Mf),e(ps,bi),e(bi,Ef),e(ps,xf),e(ps,El),e(El,zf),e(ps,Cf),e(Ve,jf),w(to,Ve,null),e(Ve,Pf),e(Ve,xl),e(xl,qf),e(Ve,Af),w(Tn,Ve,null),u(s,wp,m),u(s,hs,m),e(hs,so),e(so,zl),w(bn,zl,null),e(hs,If),e(hs,Cl),e(Cl,Lf),u(s,$p,m),u(s,We,m),w(kn,We,null),e(We,Sf),e(We,wn),e(wn,Nf),e(wn,jl),e(jl,Of),e(wn,Wf),e(We,Rf),e(We,$n),e($n,Hf),e($n,ki),e(ki,Qf),e($n,Uf),e(We,Vf),e(We,Dn),e(Dn,Jf),e(Dn,Fn),e(Fn,Kf),e(Dn,Gf),e(We,Xf),e(We,Je),w(yn,Je,null),e(Je,Yf),e(Je,us),e(us,Zf),e(us,wi),e(wi,em),e(us,tm),e(us,Pl),e(Pl,sm),e(us,om),e(Je,nm),w(oo,Je,null),e(Je,rm),e(Je,ql),e(ql,am),e(Je,im),w(Bn,Je,null),u(s,Dp,m),u(s,fs,m),e(fs,no),e(no,Al),w(Mn,Al,null),e(fs,lm),e(fs,Il),e(Il,dm),u(s,Fp,m),u(s,Re,m),w(En,Re,null),e(Re,cm),e(Re,Ll),e(Ll,pm),e(Re,hm),e(Re,xn),e(xn,um),e(xn,$i),e($i,fm),e(xn,mm),e(Re,gm),e(Re,zn),e(zn,_m),e(zn,Cn),e(Cn,vm),e(zn,Tm),e(Re,bm),e(Re,je),w(jn,je,null),e(je,km),e(je,ms),e(ms,wm),e(ms,Di),e(Di,$m),e(ms,Dm),e(ms,Sl),e(Sl,Fm),e(ms,ym),e(je,Bm),w(ro,je,null),e(je,Mm),e(je,Nl),e(Nl,Em),e(je,xm),w(Pn,je,null),e(je,zm),e(je,Ol),e(Ol,Cm),e(je,jm),w(qn,je,null),u(s,yp,m),u(s,gs,m),e(gs,ao),e(ao,Wl),w(An,Wl,null),e(gs,Pm),e(gs,Rl),e(Rl,qm),u(s,Bp,m),u(s,He,m),w(In,He,null),e(He,Am),e(He,Hl),e(Hl,Im),e(He,Lm),e(He,Ln),e(Ln,Sm),e(Ln,Fi),e(Fi,Nm),e(Ln,Om),e(He,Wm),e(He,Sn),e(Sn,Rm),e(Sn,Nn),e(Nn,Hm),e(Sn,Qm),e(He,Um),e(He,Ke),w(On,Ke,null),e(Ke,Vm),e(Ke,_s),e(_s,Jm),e(_s,yi),e(yi,Km),e(_s,Gm),e(_s,Ql),e(Ql,Xm),e(_s,Ym),e(Ke,Zm),w(io,Ke,null),e(Ke,eg),e(Ke,Ul),e(Ul,tg),e(Ke,sg),w(Wn,Ke,null),u(s,Mp,m),u(s,vs,m),e(vs,lo),e(lo,Vl),w(Rn,Vl,null),e(vs,og),e(vs,Jl),e(Jl,ng),u(s,Ep,m),u(s,Qe,m),w(Hn,Qe,null),e(Qe,rg),e(Qe,Kl),e(Kl,ag),e(Qe,ig),e(Qe,Qn),e(Qn,lg),e(Qn,Bi),e(Bi,dg),e(Qn,cg),e(Qe,pg),e(Qe,Un),e(Un,hg),e(Un,Vn),e(Vn,ug),e(Un,fg),e(Qe,mg),e(Qe,Ge),w(Jn,Ge,null),e(Ge,gg),e(Ge,Ts),e(Ts,_g),e(Ts,Mi),e(Mi,vg),e(Ts,Tg),e(Ts,Gl),e(Gl,bg),e(Ts,kg),e(Ge,wg),w(co,Ge,null),e(Ge,$g),e(Ge,Xl),e(Xl,Dg),e(Ge,Fg),w(Kn,Ge,null),u(s,xp,m),u(s,bs,m),e(bs,po),e(po,Yl),w(Gn,Yl,null),e(bs,yg),e(bs,Zl),e(Zl,Bg),u(s,zp,m),u(s,Ue,m),w(Xn,Ue,null),e(Ue,Mg),e(Ue,ks),e(ks,Eg),e(ks,ed),e(ed,xg),e(ks,zg),e(ks,td),e(td,Cg),e(ks,jg),e(Ue,Pg),e(Ue,Yn),e(Yn,qg),e(Yn,Ei),e(Ei,Ag),e(Yn,Ig),e(Ue,Lg),e(Ue,Zn),e(Zn,Sg),e(Zn,er),e(er,Ng),e(Zn,Og),e(Ue,Wg),e(Ue,Xe),w(tr,Xe,null),e(Xe,Rg),e(Xe,ws),e(ws,Hg),e(ws,xi),e(xi,Qg),e(ws,Ug),e(ws,sd),e(sd,Vg),e(ws,Jg),e(Xe,Kg),w(ho,Xe,null),e(Xe,Gg),e(Xe,od),e(od,Xg),e(Xe,Yg),w(sr,Xe,null),u(s,Cp,m),u(s,$s,m),e($s,uo),e(uo,nd),w(or,nd,null),e($s,Zg),e($s,rd),e(rd,e_),u(s,jp,m),u(s,Pe,m),w(nr,Pe,null),e(Pe,t_),e(Pe,ad),e(ad,s_),e(Pe,o_),e(Pe,rr),e(rr,n_),e(rr,zi),e(zi,r_),e(rr,a_),e(Pe,i_),e(Pe,ar),e(ar,l_),e(ar,ir),e(ir,d_),e(ar,c_),e(Pe,p_),w(fo,Pe,null),e(Pe,h_),e(Pe,Ye),w(lr,Ye,null),e(Ye,u_),e(Ye,Ds),e(Ds,f_),e(Ds,Ci),e(Ci,m_),e(Ds,g_),e(Ds,id),e(id,__),e(Ds,v_),e(Ye,T_),w(mo,Ye,null),e(Ye,b_),e(Ye,ld),e(ld,k_),e(Ye,w_),w(dr,Ye,null),u(s,Pp,m),u(s,Fs,m),e(Fs,go),e(go,dd),w(cr,dd,null),e(Fs,$_),e(Fs,cd),e(cd,D_),u(s,qp,m),u(s,qe,m),w(pr,qe,null),e(qe,F_),e(qe,hr),e(hr,y_),e(hr,pd),e(pd,B_),e(hr,M_),e(qe,E_),e(qe,ur),e(ur,x_),e(ur,ji),e(ji,z_),e(ur,C_),e(qe,j_),e(qe,fr),e(fr,P_),e(fr,mr),e(mr,q_),e(fr,A_),e(qe,I_),w(_o,qe,null),e(qe,L_),e(qe,Ze),w(gr,Ze,null),e(Ze,S_),e(Ze,ys),e(ys,N_),e(ys,Pi),e(Pi,O_),e(ys,W_),e(ys,hd),e(hd,R_),e(ys,H_),e(Ze,Q_),w(vo,Ze,null),e(Ze,U_),e(Ze,ud),e(ud,V_),e(Ze,J_),w(_r,Ze,null),u(s,Ap,m),u(s,Bs,m),e(Bs,To),e(To,fd),w(vr,fd,null),e(Bs,K_),e(Bs,md),e(md,G_),u(s,Ip,m),u(s,Ae,m),w(Tr,Ae,null),e(Ae,X_),e(Ae,gd),e(gd,Y_),e(Ae,Z_),e(Ae,br),e(br,e1),e(br,qi),e(qi,t1),e(br,s1),e(Ae,o1),e(Ae,kr),e(kr,n1),e(kr,wr),e(wr,r1),e(kr,a1),e(Ae,i1),w(bo,Ae,null),e(Ae,l1),e(Ae,et),w($r,et,null),e(et,d1),e(et,Ms),e(Ms,c1),e(Ms,Ai),e(Ai,p1),e(Ms,h1),e(Ms,_d),e(_d,u1),e(Ms,f1),e(et,m1),w(ko,et,null),e(et,g1),e(et,vd),e(vd,_1),e(et,v1),w(Dr,et,null),u(s,Lp,m),u(s,Es,m),e(Es,wo),e(wo,Td),w(Fr,Td,null),e(Es,T1),e(Es,bd),e(bd,b1),u(s,Sp,m),u(s,Ie,m),w(yr,Ie,null),e(Ie,k1),e(Ie,kd),e(kd,w1),e(Ie,$1),e(Ie,Br),e(Br,D1),e(Br,Ii),e(Ii,F1),e(Br,y1),e(Ie,B1),e(Ie,Mr),e(Mr,M1),e(Mr,Er),e(Er,E1),e(Mr,x1),e(Ie,z1),w($o,Ie,null),e(Ie,C1),e(Ie,tt),w(xr,tt,null),e(tt,j1),e(tt,xs),e(xs,P1),e(xs,Li),e(Li,q1),e(xs,A1),e(xs,wd),e(wd,I1),e(xs,L1),e(tt,S1),w(Do,tt,null),e(tt,N1),e(tt,$d),e($d,O1),e(tt,W1),w(zr,tt,null),u(s,Np,m),u(s,zs,m),e(zs,Fo),e(Fo,Dd),w(Cr,Dd,null),e(zs,R1),e(zs,Fd),e(Fd,H1),u(s,Op,m),u(s,Le,m),w(jr,Le,null),e(Le,Q1),e(Le,yd),e(yd,U1),e(Le,V1),e(Le,Pr),e(Pr,J1),e(Pr,Si),e(Si,K1),e(Pr,G1),e(Le,X1),e(Le,qr),e(qr,Y1),e(qr,Ar),e(Ar,Z1),e(qr,ev),e(Le,tv),w(yo,Le,null),e(Le,sv),e(Le,st),w(Ir,st,null),e(st,ov),e(st,Cs),e(Cs,nv),e(Cs,Ni),e(Ni,rv),e(Cs,av),e(Cs,Bd),e(Bd,iv),e(Cs,lv),e(st,dv),w(Bo,st,null),e(st,cv),e(st,Md),e(Md,pv),e(st,hv),w(Lr,st,null),u(s,Wp,m),u(s,js,m),e(js,Mo),e(Mo,Ed),w(Sr,Ed,null),e(js,uv),e(js,xd),e(xd,fv),u(s,Rp,m),u(s,Se,m),w(Nr,Se,null),e(Se,mv),e(Se,Ps),e(Ps,gv),e(Ps,zd),e(zd,_v),e(Ps,vv),e(Ps,Cd),e(Cd,Tv),e(Ps,bv),e(Se,kv),e(Se,Or),e(Or,wv),e(Or,Oi),e(Oi,$v),e(Or,Dv),e(Se,Fv),e(Se,Wr),e(Wr,yv),e(Wr,Rr),e(Rr,Bv),e(Wr,Mv),e(Se,Ev),w(Eo,Se,null),e(Se,xv),e(Se,ot),w(Hr,ot,null),e(ot,zv),e(ot,qs),e(qs,Cv),e(qs,Wi),e(Wi,jv),e(qs,Pv),e(qs,jd),e(jd,qv),e(qs,Av),e(ot,Iv),w(xo,ot,null),e(ot,Lv),e(ot,Pd),e(Pd,Sv),e(ot,Nv),w(Qr,ot,null),u(s,Hp,m),u(s,As,m),e(As,zo),e(zo,qd),w(Ur,qd,null),e(As,Ov),e(As,Ad),e(Ad,Wv),u(s,Qp,m),u(s,Be,m),w(Vr,Be,null),e(Be,Rv),e(Be,Id),e(Id,Hv),e(Be,Qv),e(Be,Jr),e(Jr,Uv),e(Jr,Ri),e(Ri,Vv),e(Jr,Jv),e(Be,Kv),e(Be,Kr),e(Kr,Gv),e(Kr,Gr),e(Gr,Xv),e(Kr,Yv),e(Be,Zv),e(Be,Ld),e(Ld,eT),e(Be,tT),e(Be,Bt),e(Bt,Sd),e(Sd,Xr),e(Xr,sT),e(Bt,oT),e(Bt,Nd),e(Nd,Yr),e(Yr,nT),e(Bt,rT),e(Bt,Od),e(Od,Zr),e(Zr,aT),e(Bt,iT),e(Bt,Wd),e(Wd,ea),e(ea,lT),e(Be,dT),e(Be,nt),w(ta,nt,null),e(nt,cT),e(nt,Is),e(Is,pT),e(Is,Rd),e(Rd,hT),e(Is,uT),e(Is,Hd),e(Hd,fT),e(Is,mT),e(nt,gT),w(Co,nt,null),e(nt,_T),e(nt,Qd),e(Qd,vT),e(nt,TT),w(sa,nt,null),u(s,Up,m),u(s,Ls,m),e(Ls,jo),e(jo,Ud),w(oa,Ud,null),e(Ls,bT),e(Ls,Vd),e(Vd,kT),u(s,Vp,m),u(s,Me,m),w(na,Me,null),e(Me,wT),e(Me,ra),e(ra,$T),e(ra,Jd),e(Jd,DT),e(ra,FT),e(Me,yT),e(Me,aa),e(aa,BT),e(aa,Hi),e(Hi,MT),e(aa,ET),e(Me,xT),e(Me,ia),e(ia,zT),e(ia,la),e(la,CT),e(ia,jT),e(Me,PT),e(Me,Kd),e(Kd,qT),e(Me,AT),e(Me,Mt),e(Mt,Gd),e(Gd,da),e(da,IT),e(Mt,LT),e(Mt,Xd),e(Xd,ca),e(ca,ST),e(Mt,NT),e(Mt,Yd),e(Yd,pa),e(pa,OT),e(Mt,WT),e(Mt,Zd),e(Zd,ha),e(ha,RT),e(Me,HT),e(Me,rt),w(ua,rt,null),e(rt,QT),e(rt,Ss),e(Ss,UT),e(Ss,ec),e(ec,VT),e(Ss,JT),e(Ss,tc),e(tc,KT),e(Ss,GT),e(rt,XT),w(Po,rt,null),e(rt,YT),e(rt,sc),e(sc,ZT),e(rt,eb),w(fa,rt,null),u(s,Jp,m),u(s,Ns,m),e(Ns,qo),e(qo,oc),w(ma,oc,null),e(Ns,tb),e(Ns,nc),e(nc,sb),u(s,Kp,m),u(s,Ee,m),w(ga,Ee,null),e(Ee,ob),e(Ee,rc),e(rc,nb),e(Ee,rb),e(Ee,_a),e(_a,ab),e(_a,Qi),e(Qi,ib),e(_a,lb),e(Ee,db),e(Ee,va),e(va,cb),e(va,Ta),e(Ta,pb),e(va,hb),e(Ee,ub),e(Ee,ac),e(ac,fb),e(Ee,mb),e(Ee,Et),e(Et,ic),e(ic,ba),e(ba,gb),e(Et,_b),e(Et,lc),e(lc,ka),e(ka,vb),e(Et,Tb),e(Et,dc),e(dc,wa),e(wa,bb),e(Et,kb),e(Et,cc),e(cc,$a),e($a,wb),e(Ee,$b),e(Ee,at),w(Da,at,null),e(at,Db),e(at,Os),e(Os,Fb),e(Os,pc),e(pc,yb),e(Os,Bb),e(Os,hc),e(hc,Mb),e(Os,Eb),e(at,xb),w(Ao,at,null),e(at,zb),e(at,uc),e(uc,Cb),e(at,jb),w(Fa,at,null),u(s,Gp,m),u(s,Ws,m),e(Ws,Io),e(Io,fc),w(ya,fc,null),e(Ws,Pb),e(Ws,mc),e(mc,qb),u(s,Xp,m),u(s,xe,m),w(Ba,xe,null),e(xe,Ab),e(xe,gc),e(gc,Ib),e(xe,Lb),e(xe,Ma),e(Ma,Sb),e(Ma,Ui),e(Ui,Nb),e(Ma,Ob),e(xe,Wb),e(xe,Ea),e(Ea,Rb),e(Ea,xa),e(xa,Hb),e(Ea,Qb),e(xe,Ub),e(xe,_c),e(_c,Vb),e(xe,Jb),e(xe,xt),e(xt,vc),e(vc,za),e(za,Kb),e(xt,Gb),e(xt,Tc),e(Tc,Ca),e(Ca,Xb),e(xt,Yb),e(xt,bc),e(bc,ja),e(ja,Zb),e(xt,ek),e(xt,kc),e(kc,Pa),e(Pa,tk),e(xe,sk),e(xe,it),w(qa,it,null),e(it,ok),e(it,Rs),e(Rs,nk),e(Rs,wc),e(wc,rk),e(Rs,ak),e(Rs,$c),e($c,ik),e(Rs,lk),e(it,dk),w(Lo,it,null),e(it,ck),e(it,Dc),e(Dc,pk),e(it,hk),w(Aa,it,null),u(s,Yp,m),u(s,Hs,m),e(Hs,So),e(So,Fc),w(Ia,Fc,null),e(Hs,uk),e(Hs,yc),e(yc,fk),u(s,Zp,m),u(s,ze,m),w(La,ze,null),e(ze,mk),e(ze,Bc),e(Bc,gk),e(ze,_k),e(ze,Sa),e(Sa,vk),e(Sa,Vi),e(Vi,Tk),e(Sa,bk),e(ze,kk),e(ze,Na),e(Na,wk),e(Na,Oa),e(Oa,$k),e(Na,Dk),e(ze,Fk),e(ze,Mc),e(Mc,yk),e(ze,Bk),e(ze,zt),e(zt,Ec),e(Ec,Wa),e(Wa,Mk),e(zt,Ek),e(zt,xc),e(xc,Ra),e(Ra,xk),e(zt,zk),e(zt,zc),e(zc,Ha),e(Ha,Ck),e(zt,jk),e(zt,Cc),e(Cc,Qa),e(Qa,Pk),e(ze,qk),e(ze,lt),w(Ua,lt,null),e(lt,Ak),e(lt,Qs),e(Qs,Ik),e(Qs,jc),e(jc,Lk),e(Qs,Sk),e(Qs,Pc),e(Pc,Nk),e(Qs,Ok),e(lt,Wk),w(No,lt,null),e(lt,Rk),e(lt,qc),e(qc,Hk),e(lt,Qk),w(Va,lt,null),u(s,eh,m),u(s,Us,m),e(Us,Oo),e(Oo,Ac),w(Ja,Ac,null),e(Us,Uk),e(Us,Ic),e(Ic,Vk),u(s,th,m),u(s,Ce,m),w(Ka,Ce,null),e(Ce,Jk),e(Ce,Vs),e(Vs,Kk),e(Vs,Lc),e(Lc,Gk),e(Vs,Xk),e(Vs,Sc),e(Sc,Yk),e(Vs,Zk),e(Ce,ew),e(Ce,Ga),e(Ga,tw),e(Ga,Ji),e(Ji,sw),e(Ga,ow),e(Ce,nw),e(Ce,Xa),e(Xa,rw),e(Xa,Ya),e(Ya,aw),e(Xa,iw),e(Ce,lw),e(Ce,Nc),e(Nc,dw),e(Ce,cw),e(Ce,Ct),e(Ct,Oc),e(Oc,Za),e(Za,pw),e(Ct,hw),e(Ct,Wc),e(Wc,ei),e(ei,uw),e(Ct,fw),e(Ct,Rc),e(Rc,ti),e(ti,mw),e(Ct,gw),e(Ct,Hc),e(Hc,si),e(si,_w),e(Ce,vw),e(Ce,dt),w(oi,dt,null),e(dt,Tw),e(dt,Js),e(Js,bw),e(Js,Qc),e(Qc,kw),e(Js,ww),e(Js,Uc),e(Uc,$w),e(Js,Dw),e(dt,Fw),w(Wo,dt,null),e(dt,yw),e(dt,Vc),e(Vc,Bw),e(dt,Mw),w(ni,dt,null),sh=!0},p(s,[m]){const ri={};m&2&&(ri.$$scope={dirty:m,ctx:s}),to.$set(ri);const Jc={};m&2&&(Jc.$$scope={dirty:m,ctx:s}),oo.$set(Jc);const Kc={};m&2&&(Kc.$$scope={dirty:m,ctx:s}),ro.$set(Kc);const Gc={};m&2&&(Gc.$$scope={dirty:m,ctx:s}),io.$set(Gc);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:s}),co.$set(ai);const Xc={};m&2&&(Xc.$$scope={dirty:m,ctx:s}),ho.$set(Xc);const Yc={};m&2&&(Yc.$$scope={dirty:m,ctx:s}),fo.$set(Yc);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:s}),mo.$set(Zc);const jt={};m&2&&(jt.$$scope={dirty:m,ctx:s}),_o.$set(jt);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:s}),vo.$set(ep);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:s}),bo.$set(tp);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:s}),ko.$set(sp);const op={};m&2&&(op.$$scope={dirty:m,ctx:s}),$o.$set(op);const np={};m&2&&(np.$$scope={dirty:m,ctx:s}),Do.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:s}),yo.$set(rp);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:s}),Bo.$set(ap);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:s}),Eo.$set(ii);const Pt={};m&2&&(Pt.$$scope={dirty:m,ctx:s}),xo.$set(Pt);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:s}),Co.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:s}),Po.$set(lp);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:s}),Ao.$set(dp);const li={};m&2&&(li.$$scope={dirty:m,ctx:s}),Lo.$set(li);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:s}),No.$set(cp);const qt={};m&2&&(qt.$$scope={dirty:m,ctx:s}),Wo.$set(qt)},i(s){sh||($(_.$$.fragment,s),$(X.$$.fragment,s),$(tn.$$.fragment,s),$(sn.$$.fragment,s),$(nn.$$.fragment,s),$(rn.$$.fragment,s),$(an.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(un.$$.fragment,s),$(fn.$$.fragment,s),$(vn.$$.fragment,s),$(to.$$.fragment,s),$(Tn.$$.fragment,s),$(bn.$$.fragment,s),$(kn.$$.fragment,s),$(yn.$$.fragment,s),$(oo.$$.fragment,s),$(Bn.$$.fragment,s),$(Mn.$$.fragment,s),$(En.$$.fragment,s),$(jn.$$.fragment,s),$(ro.$$.fragment,s),$(Pn.$$.fragment,s),$(qn.$$.fragment,s),$(An.$$.fragment,s),$(In.$$.fragment,s),$(On.$$.fragment,s),$(io.$$.fragment,s),$(Wn.$$.fragment,s),$(Rn.$$.fragment,s),$(Hn.$$.fragment,s),$(Jn.$$.fragment,s),$(co.$$.fragment,s),$(Kn.$$.fragment,s),$(Gn.$$.fragment,s),$(Xn.$$.fragment,s),$(tr.$$.fragment,s),$(ho.$$.fragment,s),$(sr.$$.fragment,s),$(or.$$.fragment,s),$(nr.$$.fragment,s),$(fo.$$.fragment,s),$(lr.$$.fragment,s),$(mo.$$.fragment,s),$(dr.$$.fragment,s),$(cr.$$.fragment,s),$(pr.$$.fragment,s),$(_o.$$.fragment,s),$(gr.$$.fragment,s),$(vo.$$.fragment,s),$(_r.$$.fragment,s),$(vr.$$.fragment,s),$(Tr.$$.fragment,s),$(bo.$$.fragment,s),$($r.$$.fragment,s),$(ko.$$.fragment,s),$(Dr.$$.fragment,s),$(Fr.$$.fragment,s),$(yr.$$.fragment,s),$($o.$$.fragment,s),$(xr.$$.fragment,s),$(Do.$$.fragment,s),$(zr.$$.fragment,s),$(Cr.$$.fragment,s),$(jr.$$.fragment,s),$(yo.$$.fragment,s),$(Ir.$$.fragment,s),$(Bo.$$.fragment,s),$(Lr.$$.fragment,s),$(Sr.$$.fragment,s),$(Nr.$$.fragment,s),$(Eo.$$.fragment,s),$(Hr.$$.fragment,s),$(xo.$$.fragment,s),$(Qr.$$.fragment,s),$(Ur.$$.fragment,s),$(Vr.$$.fragment,s),$(ta.$$.fragment,s),$(Co.$$.fragment,s),$(sa.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(ua.$$.fragment,s),$(Po.$$.fragment,s),$(fa.$$.fragment,s),$(ma.$$.fragment,s),$(ga.$$.fragment,s),$(Da.$$.fragment,s),$(Ao.$$.fragment,s),$(Fa.$$.fragment,s),$(ya.$$.fragment,s),$(Ba.$$.fragment,s),$(qa.$$.fragment,s),$(Lo.$$.fragment,s),$(Aa.$$.fragment,s),$(Ia.$$.fragment,s),$(La.$$.fragment,s),$(Ua.$$.fragment,s),$(No.$$.fragment,s),$(Va.$$.fragment,s),$(Ja.$$.fragment,s),$(Ka.$$.fragment,s),$(oi.$$.fragment,s),$(Wo.$$.fragment,s),$(ni.$$.fragment,s),sh=!0)},o(s){D(_.$$.fragment,s),D(X.$$.fragment,s),D(tn.$$.fragment,s),D(sn.$$.fragment,s),D(nn.$$.fragment,s),D(rn.$$.fragment,s),D(an.$$.fragment,s),D(dn.$$.fragment,s),D(cn.$$.fragment,s),D(un.$$.fragment,s),D(fn.$$.fragment,s),D(vn.$$.fragment,s),D(to.$$.fragment,s),D(Tn.$$.fragment,s),D(bn.$$.fragment,s),D(kn.$$.fragment,s),D(yn.$$.fragment,s),D(oo.$$.fragment,s),D(Bn.$$.fragment,s),D(Mn.$$.fragment,s),D(En.$$.fragment,s),D(jn.$$.fragment,s),D(ro.$$.fragment,s),D(Pn.$$.fragment,s),D(qn.$$.fragment,s),D(An.$$.fragment,s),D(In.$$.fragment,s),D(On.$$.fragment,s),D(io.$$.fragment,s),D(Wn.$$.fragment,s),D(Rn.$$.fragment,s),D(Hn.$$.fragment,s),D(Jn.$$.fragment,s),D(co.$$.fragment,s),D(Kn.$$.fragment,s),D(Gn.$$.fragment,s),D(Xn.$$.fragment,s),D(tr.$$.fragment,s),D(ho.$$.fragment,s),D(sr.$$.fragment,s),D(or.$$.fragment,s),D(nr.$$.fragment,s),D(fo.$$.fragment,s),D(lr.$$.fragment,s),D(mo.$$.fragment,s),D(dr.$$.fragment,s),D(cr.$$.fragment,s),D(pr.$$.fragment,s),D(_o.$$.fragment,s),D(gr.$$.fragment,s),D(vo.$$.fragment,s),D(_r.$$.fragment,s),D(vr.$$.fragment,s),D(Tr.$$.fragment,s),D(bo.$$.fragment,s),D($r.$$.fragment,s),D(ko.$$.fragment,s),D(Dr.$$.fragment,s),D(Fr.$$.fragment,s),D(yr.$$.fragment,s),D($o.$$.fragment,s),D(xr.$$.fragment,s),D(Do.$$.fragment,s),D(zr.$$.fragment,s),D(Cr.$$.fragment,s),D(jr.$$.fragment,s),D(yo.$$.fragment,s),D(Ir.$$.fragment,s),D(Bo.$$.fragment,s),D(Lr.$$.fragment,s),D(Sr.$$.fragment,s),D(Nr.$$.fragment,s),D(Eo.$$.fragment,s),D(Hr.$$.fragment,s),D(xo.$$.fragment,s),D(Qr.$$.fragment,s),D(Ur.$$.fragment,s),D(Vr.$$.fragment,s),D(ta.$$.fragment,s),D(Co.$$.fragment,s),D(sa.$$.fragment,s),D(oa.$$.fragment,s),D(na.$$.fragment,s),D(ua.$$.fragment,s),D(Po.$$.fragment,s),D(fa.$$.fragment,s),D(ma.$$.fragment,s),D(ga.$$.fragment,s),D(Da.$$.fragment,s),D(Ao.$$.fragment,s),D(Fa.$$.fragment,s),D(ya.$$.fragment,s),D(Ba.$$.fragment,s),D(qa.$$.fragment,s),D(Lo.$$.fragment,s),D(Aa.$$.fragment,s),D(Ia.$$.fragment,s),D(La.$$.fragment,s),D(Ua.$$.fragment,s),D(No.$$.fragment,s),D(Va.$$.fragment,s),D(Ja.$$.fragment,s),D(Ka.$$.fragment,s),D(oi.$$.fragment,s),D(Wo.$$.fragment,s),D(ni.$$.fragment,s),sh=!1},d(s){t(p),s&&t(y),s&&t(g),F(_),s&&t(V),s&&t(E),F(X),s&&t(re),s&&t(L),s&&t(ae),s&&t(ee),s&&t(ie),s&&t(S),s&&t(P),s&&t(te),s&&t(le),s&&t(h),s&&t(up),s&&t(Tt),s&&t(fp),s&&t(as),F(tn),s&&t(mp),s&&t(Ne),F(sn),F(nn),s&&t(gp),s&&t(ls),F(rn),s&&t(_p),s&&t(_t),F(an),s&&t(vp),s&&t(ds),F(dn),s&&t(Tp),s&&t(vt),F(cn),s&&t(bp),s&&t(cs),F(un),s&&t(kp),s&&t(Oe),F(fn),F(vn),F(to),F(Tn),s&&t(wp),s&&t(hs),F(bn),s&&t($p),s&&t(We),F(kn),F(yn),F(oo),F(Bn),s&&t(Dp),s&&t(fs),F(Mn),s&&t(Fp),s&&t(Re),F(En),F(jn),F(ro),F(Pn),F(qn),s&&t(yp),s&&t(gs),F(An),s&&t(Bp),s&&t(He),F(In),F(On),F(io),F(Wn),s&&t(Mp),s&&t(vs),F(Rn),s&&t(Ep),s&&t(Qe),F(Hn),F(Jn),F(co),F(Kn),s&&t(xp),s&&t(bs),F(Gn),s&&t(zp),s&&t(Ue),F(Xn),F(tr),F(ho),F(sr),s&&t(Cp),s&&t($s),F(or),s&&t(jp),s&&t(Pe),F(nr),F(fo),F(lr),F(mo),F(dr),s&&t(Pp),s&&t(Fs),F(cr),s&&t(qp),s&&t(qe),F(pr),F(_o),F(gr),F(vo),F(_r),s&&t(Ap),s&&t(Bs),F(vr),s&&t(Ip),s&&t(Ae),F(Tr),F(bo),F($r),F(ko),F(Dr),s&&t(Lp),s&&t(Es),F(Fr),s&&t(Sp),s&&t(Ie),F(yr),F($o),F(xr),F(Do),F(zr),s&&t(Np),s&&t(zs),F(Cr),s&&t(Op),s&&t(Le),F(jr),F(yo),F(Ir),F(Bo),F(Lr),s&&t(Wp),s&&t(js),F(Sr),s&&t(Rp),s&&t(Se),F(Nr),F(Eo),F(Hr),F(xo),F(Qr),s&&t(Hp),s&&t(As),F(Ur),s&&t(Qp),s&&t(Be),F(Vr),F(ta),F(Co),F(sa),s&&t(Up),s&&t(Ls),F(oa),s&&t(Vp),s&&t(Me),F(na),F(ua),F(Po),F(fa),s&&t(Jp),s&&t(Ns),F(ma),s&&t(Kp),s&&t(Ee),F(ga),F(Da),F(Ao),F(Fa),s&&t(Gp),s&&t(Ws),F(ya),s&&t(Xp),s&&t(xe),F(Ba),F(qa),F(Lo),F(Aa),s&&t(Yp),s&&t(Hs),F(Ia),s&&t(Zp),s&&t(ze),F(La),F(Ua),F(No),F(Va),s&&t(eh),s&&t(Us),F(Ja),s&&t(th),s&&t(Ce),F(Ka),F(oi),F(Wo),F(ni)}}}const Py={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function qy(C,p,y){let{fw:g}=p;return C.$$set=v=>{"fw"in v&&y(0,g=v.fw)},[g]}class Wy extends ry{constructor(p){super();ay(this,p,qy,jy,iy,{fw:0})}}export{Wy as default,Py as metadata};
