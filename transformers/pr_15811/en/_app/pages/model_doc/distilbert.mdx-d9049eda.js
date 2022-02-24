import{S as ry,i as ay,s as iy,e as s,k as l,w as b,t as a,L as ly,c as n,d as t,m as d,a as r,x as k,h as i,b as c,J as e,g as u,y as w,q as $,o as D,B as F}from"../../chunks/vendor-9e2b328e.js";import{T as me}from"../../chunks/Tip-76f97a76.js";import{D as U}from"../../chunks/Docstring-50fd6873.js";import{C as ye}from"../../chunks/CodeBlock-88e23343.js";import{I as ve}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function dy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function cy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function py(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function hy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function uy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function fy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function my(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function gy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function _y(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function vy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Ty(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function by(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function ky(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function wy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function $y(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function Dy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Fy(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le;return{c(){p=s("p"),y=a("TF 2.0 models accepts two formats as inputs:"),g=l(),v=s("ul"),T=s("li"),_=a("having all inputs as keyword arguments (like PyTorch models), or"),f=l(),B=s("li"),de=a("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=s("p"),G=a("This second option is useful when using "),N=s("code"),X=a("tf.keras.Model.fit"),ce=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s("code"),pe=a("model(inputs)"),re=a("."),L=l(),q=s("p"),Y=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),V=l(),x=s("ul"),z=s("li"),he=a("a single Tensor with "),W=s("code"),oe=a("input_ids"),ue=a(" only and nothing else: "),R=s("code"),ae=a("model(inputs_ids)"),ee=l(),A=s("li"),ie=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=s("code"),se=a("model([input_ids, attention_mask])"),fe=l(),P=s("li"),te=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=s("code"),le=a('model({"input_ids": input_ids})')},l(h){p=n(h,"P",{});var M=r(p);y=i(M,"TF 2.0 models accepts two formats as inputs:"),M.forEach(t),g=d(h),v=n(h,"UL",{});var K=r(v);T=n(K,"LI",{});var ge=r(T);_=i(ge,"having all inputs as keyword arguments (like PyTorch models), or"),ge.forEach(t),f=d(K),B=n(K,"LI",{});var Te=r(B);de=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),J=d(h),E=n(h,"P",{});var I=r(E);G=i(I,"This second option is useful when using "),N=n(I,"CODE",{});var _e=r(N);X=i(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n(I,"CODE",{});var be=r(O);pe=i(be,"model(inputs)"),be.forEach(t),re=i(I,"."),I.forEach(t),L=d(h),q=n(h,"P",{});var ke=r(q);Y=i(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),V=d(h),x=n(h,"UL",{});var j=r(x);z=n(j,"LI",{});var Q=r(z);he=i(Q,"a single Tensor with "),W=n(Q,"CODE",{});var we=r(W);oe=i(we,"input_ids"),we.forEach(t),ue=i(Q," only and nothing else: "),R=n(Q,"CODE",{});var $e=r(R);ae=i($e,"model(inputs_ids)"),$e.forEach(t),Q.forEach(t),ee=d(j),A=n(j,"LI",{});var Z=r(A);ie=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=n(Z,"CODE",{});var De=r(S);se=i(De,"model([input_ids, attention_mask])"),De.forEach(t),Z.forEach(t),fe=d(j),P=n(j,"LI",{});var ne=r(P);te=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=n(ne,"CODE",{});var Fe=r(H);le=i(Fe,'model({"input_ids": input_ids})'),Fe.forEach(t),ne.forEach(t),j.forEach(t)},m(h,M){u(h,p,M),e(p,y),u(h,g,M),u(h,v,M),e(v,T),e(T,_),e(v,f),e(v,B),e(B,de),u(h,J,M),u(h,E,M),e(E,G),e(E,N),e(N,X),e(E,ce),e(E,O),e(O,pe),e(E,re),u(h,L,M),u(h,q,M),e(q,Y),u(h,V,M),u(h,x,M),e(x,z),e(z,he),e(z,W),e(W,oe),e(z,ue),e(z,R),e(R,ae),e(x,ee),e(x,A),e(A,ie),e(A,S),e(S,se),e(x,fe),e(x,P),e(P,te),e(P,H),e(H,le)},d(h){h&&t(p),h&&t(g),h&&t(v),h&&t(J),h&&t(E),h&&t(L),h&&t(q),h&&t(V),h&&t(x)}}}function yy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function By(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function My(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Ey(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function xy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function zy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function Cy(C){let p,y,g,v,T;return{c(){p=s("p"),y=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s("code"),v=a("Module"),T=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){p=n(_,"P",{});var f=r(p);y=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n(f,"CODE",{});var B=r(g);v=i(B,"Module"),B.forEach(t),T=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(_,f){u(_,p,f),e(p,y),e(p,g),e(g,v),e(p,T)},d(_){_&&t(p)}}}function jy(C){let p,y,g,v,T,_,f,B,de,J,E,G,N,X,ce,O,pe,re,L,q,Y,V,x,z,he,W,oe,ue,R,ae,ee,A,ie,S,se,fe,P,te,H,le,h,M,K,ge,Te,I,_e,be,ke,j,Q,we,$e,Z,De,ne,Fe,hu,up,Tt,uu,Ys,fu,mu,Zs,gu,_u,en,vu,Tu,fp,ao,Go,_l,tn,bu,vl,ku,mp,Ne,on,wu,yt,$u,di,Du,Fu,ci,yu,Bu,sn,Mu,Eu,xu,io,zu,pi,Cu,ju,hi,Pu,qu,Au,Tl,Iu,Lu,nn,gp,lo,Xo,bl,rn,Su,kl,Nu,_p,_t,an,Ou,wl,Wu,Ru,Yo,ui,Hu,Qu,fi,Uu,Ju,Vu,ln,Ku,mi,Gu,Xu,vp,co,Zo,$l,dn,Yu,Dl,Zu,Tp,vt,cn,ef,pn,tf,Fl,of,sf,nf,es,gi,rf,af,_i,lf,df,cf,hn,pf,vi,hf,uf,bp,po,ts,yl,un,ff,Bl,mf,kp,Oe,fn,gf,Ml,_f,vf,mn,Tf,Ti,bf,kf,wf,gn,$f,_n,Df,Ff,yf,Je,vn,Bf,ho,Mf,bi,Ef,xf,El,zf,Cf,jf,os,Pf,xl,qf,Af,Tn,wp,uo,ss,zl,bn,If,Cl,Lf,$p,We,kn,Sf,wn,Nf,jl,Of,Wf,Rf,$n,Hf,ki,Qf,Uf,Jf,Dn,Vf,Fn,Kf,Gf,Xf,Ve,yn,Yf,fo,Zf,wi,em,tm,Pl,om,sm,nm,ns,rm,ql,am,im,Bn,Dp,mo,rs,Al,Mn,lm,Il,dm,Fp,Re,En,cm,Ll,pm,hm,xn,um,$i,fm,mm,gm,zn,_m,Cn,vm,Tm,bm,je,jn,km,go,wm,Di,$m,Dm,Sl,Fm,ym,Bm,as,Mm,Nl,Em,xm,Pn,zm,Ol,Cm,jm,qn,yp,_o,is,Wl,An,Pm,Rl,qm,Bp,He,In,Am,Hl,Im,Lm,Ln,Sm,Fi,Nm,Om,Wm,Sn,Rm,Nn,Hm,Qm,Um,Ke,On,Jm,vo,Vm,yi,Km,Gm,Ql,Xm,Ym,Zm,ls,eg,Ul,tg,og,Wn,Mp,To,ds,Jl,Rn,sg,Vl,ng,Ep,Qe,Hn,rg,Kl,ag,ig,Qn,lg,Bi,dg,cg,pg,Un,hg,Jn,ug,fg,mg,Ge,Vn,gg,bo,_g,Mi,vg,Tg,Gl,bg,kg,wg,cs,$g,Xl,Dg,Fg,Kn,xp,ko,ps,Yl,Gn,yg,Zl,Bg,zp,Ue,Xn,Mg,wo,Eg,ed,xg,zg,td,Cg,jg,Pg,Yn,qg,Ei,Ag,Ig,Lg,Zn,Sg,er,Ng,Og,Wg,Xe,tr,Rg,$o,Hg,xi,Qg,Ug,od,Jg,Vg,Kg,hs,Gg,sd,Xg,Yg,or,Cp,Do,us,nd,sr,Zg,rd,e_,jp,Pe,nr,t_,ad,o_,s_,rr,n_,zi,r_,a_,i_,ar,l_,ir,d_,c_,p_,fs,h_,Ye,lr,u_,Fo,f_,Ci,m_,g_,id,__,v_,T_,ms,b_,ld,k_,w_,dr,Pp,yo,gs,dd,cr,$_,cd,D_,qp,qe,pr,F_,hr,y_,pd,B_,M_,E_,ur,x_,ji,z_,C_,j_,fr,P_,mr,q_,A_,I_,_s,L_,Ze,gr,S_,Bo,N_,Pi,O_,W_,hd,R_,H_,Q_,vs,U_,ud,J_,V_,_r,Ap,Mo,Ts,fd,vr,K_,md,G_,Ip,Ae,Tr,X_,gd,Y_,Z_,br,e1,qi,t1,o1,s1,kr,n1,wr,r1,a1,i1,bs,l1,et,$r,d1,Eo,c1,Ai,p1,h1,_d,u1,f1,m1,ks,g1,vd,_1,v1,Dr,Lp,xo,ws,Td,Fr,T1,bd,b1,Sp,Ie,yr,k1,kd,w1,$1,Br,D1,Ii,F1,y1,B1,Mr,M1,Er,E1,x1,z1,$s,C1,tt,xr,j1,zo,P1,Li,q1,A1,wd,I1,L1,S1,Ds,N1,$d,O1,W1,zr,Np,Co,Fs,Dd,Cr,R1,Fd,H1,Op,Le,jr,Q1,yd,U1,J1,Pr,V1,Si,K1,G1,X1,qr,Y1,Ar,Z1,ev,tv,ys,ov,ot,Ir,sv,jo,nv,Ni,rv,av,Bd,iv,lv,dv,Bs,cv,Md,pv,hv,Lr,Wp,Po,Ms,Ed,Sr,uv,xd,fv,Rp,Se,Nr,mv,qo,gv,zd,_v,vv,Cd,Tv,bv,kv,Or,wv,Oi,$v,Dv,Fv,Wr,yv,Rr,Bv,Mv,Ev,Es,xv,st,Hr,zv,Ao,Cv,Wi,jv,Pv,jd,qv,Av,Iv,xs,Lv,Pd,Sv,Nv,Qr,Hp,Io,zs,qd,Ur,Ov,Ad,Wv,Qp,Be,Jr,Rv,Id,Hv,Qv,Vr,Uv,Ri,Jv,Vv,Kv,Kr,Gv,Gr,Xv,Yv,Zv,Ld,eT,tT,Bt,Sd,Xr,oT,sT,Nd,Yr,nT,rT,Od,Zr,aT,iT,Wd,ea,lT,dT,nt,ta,cT,Lo,pT,Rd,hT,uT,Hd,fT,mT,gT,Cs,_T,Qd,vT,TT,oa,Up,So,js,Ud,sa,bT,Jd,kT,Jp,Me,na,wT,ra,$T,Vd,DT,FT,yT,aa,BT,Hi,MT,ET,xT,ia,zT,la,CT,jT,PT,Kd,qT,AT,Mt,Gd,da,IT,LT,Xd,ca,ST,NT,Yd,pa,OT,WT,Zd,ha,RT,HT,rt,ua,QT,No,UT,ec,JT,VT,tc,KT,GT,XT,Ps,YT,oc,ZT,eb,fa,Vp,Oo,qs,sc,ma,tb,nc,ob,Kp,Ee,ga,sb,rc,nb,rb,_a,ab,Qi,ib,lb,db,va,cb,Ta,pb,hb,ub,ac,fb,mb,Et,ic,ba,gb,_b,lc,ka,vb,Tb,dc,wa,bb,kb,cc,$a,wb,$b,at,Da,Db,Wo,Fb,pc,yb,Bb,hc,Mb,Eb,xb,As,zb,uc,Cb,jb,Fa,Gp,Ro,Is,fc,ya,Pb,mc,qb,Xp,xe,Ba,Ab,gc,Ib,Lb,Ma,Sb,Ui,Nb,Ob,Wb,Ea,Rb,xa,Hb,Qb,Ub,_c,Jb,Vb,xt,vc,za,Kb,Gb,Tc,Ca,Xb,Yb,bc,ja,Zb,ek,kc,Pa,tk,ok,it,qa,sk,Ho,nk,wc,rk,ak,$c,ik,lk,dk,Ls,ck,Dc,pk,hk,Aa,Yp,Qo,Ss,Fc,Ia,uk,yc,fk,Zp,ze,La,mk,Bc,gk,_k,Sa,vk,Ji,Tk,bk,kk,Na,wk,Oa,$k,Dk,Fk,Mc,yk,Bk,zt,Ec,Wa,Mk,Ek,xc,Ra,xk,zk,zc,Ha,Ck,jk,Cc,Qa,Pk,qk,lt,Ua,Ak,Uo,Ik,jc,Lk,Sk,Pc,Nk,Ok,Wk,Ns,Rk,qc,Hk,Qk,Ja,eh,Jo,Os,Ac,Va,Uk,Ic,Jk,th,Ce,Ka,Vk,Vo,Kk,Lc,Gk,Xk,Sc,Yk,Zk,ew,Ga,tw,Vi,ow,sw,nw,Xa,rw,Ya,aw,iw,lw,Nc,dw,cw,Ct,Oc,Za,pw,hw,Wc,ei,uw,fw,Rc,ti,mw,gw,Hc,oi,_w,vw,dt,si,Tw,Ko,bw,Qc,kw,ww,Uc,$w,Dw,Fw,Ws,yw,Jc,Bw,Mw,ni,oh;return _=new ve({}),X=new ve({}),tn=new ve({}),on=new U({props:{name:"class transformers.DistilBertConfig",anchor:"transformers.DistilBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"max_position_embeddings",val:" = 512"},{name:"sinusoidal_pos_embds",val:" = False"},{name:"n_layers",val:" = 6"},{name:"n_heads",val:" = 12"},{name:"dim",val:" = 768"},{name:"hidden_dim",val:" = 3072"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation",val:" = 'gelu'"},{name:"initializer_range",val:" = 0.02"},{name:"qa_dropout",val:" = 0.1"},{name:"seq_classif_dropout",val:" = 0.2"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/configuration_distilbert.py#L37",parametersDescription:[{anchor:"transformers.DistilBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DistilBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertModel">DistilBertModel</a> or <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertModel">TFDistilBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.DistilBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The dropout probabilities used in the question answering model <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering">DistilBertForQuestionAnswering</a>.`,name:"qa_dropout"},{anchor:"transformers.DistilBertConfig.seq_classif_dropout",description:`<strong>seq_classif_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.2) &#x2014;
The dropout probabilities used in the sequence classification and the multiple choice model
<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification">DistilBertForSequenceClassification</a>.`,name:"seq_classif_dropout"}]}}),nn=new ye({props:{code:`from transformers import DistilBertModel, DistilBertConfig

# Initializing a DistilBERT configuration
configuration = DistilBertConfig()

# Initializing a model from the configuration
model = DistilBertModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertModel, DistilBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DistilBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DistilBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),rn=new ve({}),an=new U({props:{name:"class transformers.DistilBertTokenizer",anchor:"transformers.DistilBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/tokenization_distilbert.py#L56"}}),dn=new ve({}),cn=new U({props:{name:"class transformers.DistilBertTokenizerFast",anchor:"transformers.DistilBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/tokenization_distilbert_fast.py#L65"}}),un=new ve({}),fn=new U({props:{name:"class transformers.DistilBertModel",anchor:"transformers.DistilBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L435",parametersDescription:[{anchor:"transformers.DistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new U({props:{name:"forward",anchor:"transformers.DistilBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L507",parametersDescription:[{anchor:"transformers.DistilBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),os=new me({props:{$$slots:{default:[dy]},$$scope:{ctx:C}}}),Tn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertModel
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new ve({}),kn=new U({props:{name:"class transformers.DistilBertForMaskedLM",anchor:"transformers.DistilBertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L563",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yn=new U({props:{name:"forward",anchor:"transformers.DistilBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L603",parametersDescription:[{anchor:"transformers.DistilBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new me({props:{$$slots:{default:[cy]},$$scope:{ctx:C}}}),Bn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMaskedLM
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mn=new ve({}),En=new U({props:{name:"class transformers.DistilBertForSequenceClassification",anchor:"transformers.DistilBertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L667",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new U({props:{name:"forward",anchor:"transformers.DistilBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L701",parametersDescription:[{anchor:"transformers.DistilBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),as=new me({props:{$$slots:{default:[py]},$$scope:{ctx:C}}}),Pn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForSequenceClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),An=new ve({}),In=new U({props:{name:"class transformers.DistilBertForMultipleChoice",anchor:"transformers.DistilBertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L997",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),On=new U({props:{name:"forward",anchor:"transformers.DistilBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L1029",parametersDescription:[{anchor:"transformers.DistilBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new me({props:{$$slots:{default:[hy]},$$scope:{ctx:C}}}),Wn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForMultipleChoice
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
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Rn=new ve({}),Hn=new U({props:{name:"class transformers.DistilBertForTokenClassification",anchor:"transformers.DistilBertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L902",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vn=new U({props:{name:"forward",anchor:"transformers.DistilBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L934",parametersDescription:[{anchor:"transformers.DistilBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new me({props:{$$slots:{default:[uy]},$$scope:{ctx:C}}}),Kn=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForTokenClassification
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new ve({}),Xn=new U({props:{name:"class transformers.DistilBertForQuestionAnswering",anchor:"transformers.DistilBertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L785",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),tr=new U({props:{name:"forward",anchor:"transformers.DistilBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_distilbert.py#L817",parametersDescription:[{anchor:"transformers.DistilBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DistilBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new me({props:{$$slots:{default:[fy]},$$scope:{ctx:C}}}),or=new ye({props:{code:`from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering
import torch

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, DistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),sr=new ve({}),nr=new U({props:{name:"class transformers.TFDistilBertModel",anchor:"transformers.TFDistilBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L536",parametersDescription:[{anchor:"transformers.TFDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fs=new me({props:{$$slots:{default:[my]},$$scope:{ctx:C}}}),lr=new U({props:{name:"call",anchor:"transformers.TFDistilBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L541",parametersDescription:[{anchor:"transformers.TFDistilBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new me({props:{$$slots:{default:[gy]},$$scope:{ctx:C}}}),dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertModel
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cr=new ve({}),pr=new U({props:{name:"class transformers.TFDistilBertForMaskedLM",anchor:"transformers.TFDistilBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L636",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new me({props:{$$slots:{default:[_y]},$$scope:{ctx:C}}}),gr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L656",parametersDescription:[{anchor:"transformers.TFDistilBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new me({props:{$$slots:{default:[vy]},$$scope:{ctx:C}}}),_r=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMaskedLM
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vr=new ve({}),Tr=new U({props:{name:"class transformers.TFDistilBertForSequenceClassification",anchor:"transformers.TFDistilBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L740",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new me({props:{$$slots:{default:[Ty]},$$scope:{ctx:C}}}),$r=new U({props:{name:"call",anchor:"transformers.TFDistilBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L757",parametersDescription:[{anchor:"transformers.TFDistilBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new me({props:{$$slots:{default:[by]},$$scope:{ctx:C}}}),Dr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForSequenceClassification
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Fr=new ve({}),yr=new U({props:{name:"class transformers.TFDistilBertForMultipleChoice",anchor:"transformers.TFDistilBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L931",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$s=new me({props:{$$slots:{default:[ky]},$$scope:{ctx:C}}}),xr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L957",parametersDescription:[{anchor:"transformers.TFDistilBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ds=new me({props:{$$slots:{default:[wy]},$$scope:{ctx:C}}}),zr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForMultipleChoice
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
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cr=new ve({}),jr=new U({props:{name:"class transformers.TFDistilBertForTokenClassification",anchor:"transformers.TFDistilBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L841",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ys=new me({props:{$$slots:{default:[$y]},$$scope:{ctx:C}}}),Ir=new U({props:{name:"call",anchor:"transformers.TFDistilBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L852",parametersDescription:[{anchor:"transformers.TFDistilBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFDistilBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFDistilBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new me({props:{$$slots:{default:[Dy]},$$scope:{ctx:C}}}),Lr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForTokenClassification
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
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sr=new ve({}),Nr=new U({props:{name:"class transformers.TFDistilBertForQuestionAnswering",anchor:"transformers.TFDistilBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1073",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new me({props:{$$slots:{default:[Fy]},$$scope:{ctx:C}}}),Hr=new U({props:{name:"call",anchor:"transformers.TFDistilBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_tf_distilbert.py#L1084",parametersDescription:[{anchor:"transformers.TFDistilBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer">DistilBertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xs=new me({props:{$$slots:{default:[yy]},$$scope:{ctx:C}}}),Qr=new ye({props:{code:`from transformers import DistilBertTokenizer, TFDistilBertForQuestionAnswering
import tensorflow as tf

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = TFDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, TFDistilBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),Ur=new ve({}),Jr=new U({props:{name:"class transformers.FlaxDistilBertModel",anchor:"transformers.FlaxDistilBertModel",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L527",parametersDescription:[{anchor:"transformers.FlaxDistilBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}]}}),Cs=new me({props:{$$slots:{default:[By]},$$scope:{ctx:C}}}),oa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertModel

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertModel.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertModel.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),sa=new ve({}),na=new U({props:{name:"class transformers.FlaxDistilBertForMaskedLM",anchor:"transformers.FlaxDistilBertForMaskedLM",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L600",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new me({props:{$$slots:{default:[My]},$$scope:{ctx:C}}}),fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMaskedLM

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMaskedLM.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ma=new ve({}),ga=new U({props:{name:"class transformers.FlaxDistilBertForSequenceClassification",anchor:"transformers.FlaxDistilBertForSequenceClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L669",parametersDescription:[{anchor:"transformers.FlaxDistilBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Da=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new me({props:{$$slots:{default:[Ey]},$$scope:{ctx:C}}}),Fa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForSequenceClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForSequenceClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ya=new ve({}),Ba=new U({props:{name:"class transformers.FlaxDistilBertForMultipleChoice",anchor:"transformers.FlaxDistilBertForMultipleChoice",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L749",parametersDescription:[{anchor:"transformers.FlaxDistilBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qa=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new me({props:{$$slots:{default:[xy]},$$scope:{ctx:C}}}),Aa=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForMultipleChoice

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForMultipleChoice.from_pretrained("distilbert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ia=new ve({}),La=new U({props:{name:"class transformers.FlaxDistilBertForTokenClassification",anchor:"transformers.FlaxDistilBertForTokenClassification",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L815",parametersDescription:[{anchor:"transformers.FlaxDistilBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ua=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ns=new me({props:{$$slots:{default:[zy]},$$scope:{ctx:C}}}),Ja=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForTokenClassification

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForTokenClassification.from_pretrained("distilbert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Va=new ve({}),Ka=new U({props:{name:"class transformers.FlaxDistilBertForQuestionAnswering",anchor:"transformers.FlaxDistilBertForQuestionAnswering",parameters:[{name:"config",val:": DistilBertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L885",parametersDescription:[{anchor:"transformers.FlaxDistilBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig">DistilBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),si=new U({props:{name:"__call__",anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_15811/src/transformers/models/distilbert/modeling_flax_distilbert.py#L450",parametersDescription:[{anchor:"transformers.FlaxDistilBertPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_15811/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/pr_15811/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertConfig"
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
  href="/docs/transformers/pr_15811/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ws=new me({props:{$$slots:{default:[Cy]},$$scope:{ctx:C}}}),ni=new ye({props:{code:`from transformers import DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = FlaxDistilBertForQuestionAnswering.from_pretrained("distilbert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DistilBertTokenizer, FlaxDistilBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DistilBertTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxDistilBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){p=s("meta"),y=l(),g=s("h1"),v=s("a"),T=s("span"),b(_.$$.fragment),f=l(),B=s("span"),de=a("DistilBERT"),J=l(),E=s("h2"),G=s("a"),N=s("span"),b(X.$$.fragment),ce=l(),O=s("span"),pe=a("Overview"),re=l(),L=s("p"),q=a("The DistilBERT model was proposed in the blog post "),Y=s("a"),V=a(`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),x=a(", and the paper "),z=s("a"),he=a(`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),W=a(`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=s("em"),ue=a("bert-base-uncased"),R=a(`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),ae=l(),ee=s("p"),A=a("The abstract from the paper is the following:"),ie=l(),S=s("p"),se=s("em"),fe=a(`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),P=l(),te=s("p"),H=a("Tips:"),le=l(),h=s("ul"),M=s("li"),K=a("DistilBERT doesn\u2019t have "),ge=s("code"),Te=a("token_type_ids"),I=a(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=s("code"),be=a("tokenizer.sep_token"),ke=a(" (or "),j=s("code"),Q=a("[SEP]"),we=a(")."),$e=l(),Z=s("li"),De=a("DistilBERT doesn\u2019t have options to select the input positions ("),ne=s("code"),Fe=a("position_ids"),hu=a(` input). This could be added if
necessary though, just let us know if you need this option.`),up=l(),Tt=s("p"),uu=a("This model was contributed by "),Ys=s("a"),fu=a("victorsanh"),mu=a(`. This model jax version was
contributed by `),Zs=s("a"),gu=a("kamalkraj"),_u=a(". The original code can be found "),en=s("a"),vu=a("here"),Tu=a("."),fp=l(),ao=s("h2"),Go=s("a"),_l=s("span"),b(tn.$$.fragment),bu=l(),vl=s("span"),ku=a("DistilBertConfig"),mp=l(),Ne=s("div"),b(on.$$.fragment),wu=l(),yt=s("p"),$u=a("This is the configuration class to store the configuration of a "),di=s("a"),Du=a("DistilBertModel"),Fu=a(" or a "),ci=s("a"),yu=a("TFDistilBertModel"),Bu=a(`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=s("a"),Mu=a("distilbert-base-uncased"),Eu=a(" architecture."),xu=l(),io=s("p"),zu=a("Configuration objects inherit from "),pi=s("a"),Cu=a("PretrainedConfig"),ju=a(` and can be used to control the model outputs. Read the
documentation from `),hi=s("a"),Pu=a("PretrainedConfig"),qu=a(" for more information."),Au=l(),Tl=s("p"),Iu=a("Examples:"),Lu=l(),b(nn.$$.fragment),gp=l(),lo=s("h2"),Xo=s("a"),bl=s("span"),b(rn.$$.fragment),Su=l(),kl=s("span"),Nu=a("DistilBertTokenizer"),_p=l(),_t=s("div"),b(an.$$.fragment),Ou=l(),wl=s("p"),Wu=a("Construct a DistilBERT tokenizer."),Ru=l(),Yo=s("p"),ui=s("a"),Hu=a("DistilBertTokenizer"),Qu=a(" is identical to "),fi=s("a"),Uu=a("BertTokenizer"),Ju=a(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Vu=l(),ln=s("p"),Ku=a("Refer to superclass "),mi=s("a"),Gu=a("BertTokenizer"),Xu=a(" for usage examples and documentation concerning parameters."),vp=l(),co=s("h2"),Zo=s("a"),$l=s("span"),b(dn.$$.fragment),Yu=l(),Dl=s("span"),Zu=a("DistilBertTokenizerFast"),Tp=l(),vt=s("div"),b(cn.$$.fragment),ef=l(),pn=s("p"),tf=a("Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=s("em"),of=a("tokenizers"),sf=a(" library)."),nf=l(),es=s("p"),gi=s("a"),rf=a("DistilBertTokenizerFast"),af=a(" is identical to "),_i=s("a"),lf=a("BertTokenizerFast"),df=a(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),cf=l(),hn=s("p"),pf=a("Refer to superclass "),vi=s("a"),hf=a("BertTokenizerFast"),uf=a(" for usage examples and documentation concerning parameters."),bp=l(),po=s("h2"),ts=s("a"),yl=s("span"),b(un.$$.fragment),ff=l(),Bl=s("span"),mf=a("DistilBertModel"),kp=l(),Oe=s("div"),b(fn.$$.fragment),gf=l(),Ml=s("p"),_f=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),vf=l(),mn=s("p"),Tf=a("This model inherits from "),Ti=s("a"),bf=a("PreTrainedModel"),kf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf=l(),gn=s("p"),$f=a("This model is also a PyTorch "),_n=s("a"),Df=a("torch.nn.Module"),Ff=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yf=l(),Je=s("div"),b(vn.$$.fragment),Bf=l(),ho=s("p"),Mf=a("The "),bi=s("a"),Ef=a("DistilBertModel"),xf=a(" forward method, overrides the "),El=s("code"),zf=a("__call__"),Cf=a(" special method."),jf=l(),b(os.$$.fragment),Pf=l(),xl=s("p"),qf=a("Example:"),Af=l(),b(Tn.$$.fragment),wp=l(),uo=s("h2"),ss=s("a"),zl=s("span"),b(bn.$$.fragment),If=l(),Cl=s("span"),Lf=a("DistilBertForMaskedLM"),$p=l(),We=s("div"),b(kn.$$.fragment),Sf=l(),wn=s("p"),Nf=a("DistilBert Model with a "),jl=s("code"),Of=a("masked language modeling"),Wf=a(" head on top."),Rf=l(),$n=s("p"),Hf=a("This model inherits from "),ki=s("a"),Qf=a("PreTrainedModel"),Uf=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jf=l(),Dn=s("p"),Vf=a("This model is also a PyTorch "),Fn=s("a"),Kf=a("torch.nn.Module"),Gf=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xf=l(),Ve=s("div"),b(yn.$$.fragment),Yf=l(),fo=s("p"),Zf=a("The "),wi=s("a"),em=a("DistilBertForMaskedLM"),tm=a(" forward method, overrides the "),Pl=s("code"),om=a("__call__"),sm=a(" special method."),nm=l(),b(ns.$$.fragment),rm=l(),ql=s("p"),am=a("Example:"),im=l(),b(Bn.$$.fragment),Dp=l(),mo=s("h2"),rs=s("a"),Al=s("span"),b(Mn.$$.fragment),lm=l(),Il=s("span"),dm=a("DistilBertForSequenceClassification"),Fp=l(),Re=s("div"),b(En.$$.fragment),cm=l(),Ll=s("p"),pm=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hm=l(),xn=s("p"),um=a("This model inherits from "),$i=s("a"),fm=a("PreTrainedModel"),mm=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gm=l(),zn=s("p"),_m=a("This model is also a PyTorch "),Cn=s("a"),vm=a("torch.nn.Module"),Tm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bm=l(),je=s("div"),b(jn.$$.fragment),km=l(),go=s("p"),wm=a("The "),Di=s("a"),$m=a("DistilBertForSequenceClassification"),Dm=a(" forward method, overrides the "),Sl=s("code"),Fm=a("__call__"),ym=a(" special method."),Bm=l(),b(as.$$.fragment),Mm=l(),Nl=s("p"),Em=a("Example of single-label classification:"),xm=l(),b(Pn.$$.fragment),zm=l(),Ol=s("p"),Cm=a("Example of multi-label classification:"),jm=l(),b(qn.$$.fragment),yp=l(),_o=s("h2"),is=s("a"),Wl=s("span"),b(An.$$.fragment),Pm=l(),Rl=s("span"),qm=a("DistilBertForMultipleChoice"),Bp=l(),He=s("div"),b(In.$$.fragment),Am=l(),Hl=s("p"),Im=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lm=l(),Ln=s("p"),Sm=a("This model inherits from "),Fi=s("a"),Nm=a("PreTrainedModel"),Om=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wm=l(),Sn=s("p"),Rm=a("This model is also a PyTorch "),Nn=s("a"),Hm=a("torch.nn.Module"),Qm=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Um=l(),Ke=s("div"),b(On.$$.fragment),Jm=l(),vo=s("p"),Vm=a("The "),yi=s("a"),Km=a("DistilBertForMultipleChoice"),Gm=a(" forward method, overrides the "),Ql=s("code"),Xm=a("__call__"),Ym=a(" special method."),Zm=l(),b(ls.$$.fragment),eg=l(),Ul=s("p"),tg=a("Examples:"),og=l(),b(Wn.$$.fragment),Mp=l(),To=s("h2"),ds=s("a"),Jl=s("span"),b(Rn.$$.fragment),sg=l(),Vl=s("span"),ng=a("DistilBertForTokenClassification"),Ep=l(),Qe=s("div"),b(Hn.$$.fragment),rg=l(),Kl=s("p"),ag=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ig=l(),Qn=s("p"),lg=a("This model inherits from "),Bi=s("a"),dg=a("PreTrainedModel"),cg=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=l(),Un=s("p"),hg=a("This model is also a PyTorch "),Jn=s("a"),ug=a("torch.nn.Module"),fg=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mg=l(),Ge=s("div"),b(Vn.$$.fragment),gg=l(),bo=s("p"),_g=a("The "),Mi=s("a"),vg=a("DistilBertForTokenClassification"),Tg=a(" forward method, overrides the "),Gl=s("code"),bg=a("__call__"),kg=a(" special method."),wg=l(),b(cs.$$.fragment),$g=l(),Xl=s("p"),Dg=a("Example:"),Fg=l(),b(Kn.$$.fragment),xp=l(),ko=s("h2"),ps=s("a"),Yl=s("span"),b(Gn.$$.fragment),yg=l(),Zl=s("span"),Bg=a("DistilBertForQuestionAnswering"),zp=l(),Ue=s("div"),b(Xn.$$.fragment),Mg=l(),wo=s("p"),Eg=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=s("code"),xg=a("span start logits"),zg=a(" and "),td=s("code"),Cg=a("span end logits"),jg=a(")."),Pg=l(),Yn=s("p"),qg=a("This model inherits from "),Ei=s("a"),Ag=a("PreTrainedModel"),Ig=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=l(),Zn=s("p"),Sg=a("This model is also a PyTorch "),er=s("a"),Ng=a("torch.nn.Module"),Og=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=l(),Xe=s("div"),b(tr.$$.fragment),Rg=l(),$o=s("p"),Hg=a("The "),xi=s("a"),Qg=a("DistilBertForQuestionAnswering"),Ug=a(" forward method, overrides the "),od=s("code"),Jg=a("__call__"),Vg=a(" special method."),Kg=l(),b(hs.$$.fragment),Gg=l(),sd=s("p"),Xg=a("Example:"),Yg=l(),b(or.$$.fragment),Cp=l(),Do=s("h2"),us=s("a"),nd=s("span"),b(sr.$$.fragment),Zg=l(),rd=s("span"),e_=a("TFDistilBertModel"),jp=l(),Pe=s("div"),b(nr.$$.fragment),t_=l(),ad=s("p"),o_=a("The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),s_=l(),rr=s("p"),n_=a("This model inherits from "),zi=s("a"),r_=a("TFPreTrainedModel"),a_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=l(),ar=s("p"),l_=a("This model is also a "),ir=s("a"),d_=a("tf.keras.Model"),c_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),p_=l(),b(fs.$$.fragment),h_=l(),Ye=s("div"),b(lr.$$.fragment),u_=l(),Fo=s("p"),f_=a("The "),Ci=s("a"),m_=a("TFDistilBertModel"),g_=a(" forward method, overrides the "),id=s("code"),__=a("__call__"),v_=a(" special method."),T_=l(),b(ms.$$.fragment),b_=l(),ld=s("p"),k_=a("Example:"),w_=l(),b(dr.$$.fragment),Pp=l(),yo=s("h2"),gs=s("a"),dd=s("span"),b(cr.$$.fragment),$_=l(),cd=s("span"),D_=a("TFDistilBertForMaskedLM"),qp=l(),qe=s("div"),b(pr.$$.fragment),F_=l(),hr=s("p"),y_=a("DistilBert Model with a "),pd=s("code"),B_=a("masked language modeling"),M_=a(" head on top."),E_=l(),ur=s("p"),x_=a("This model inherits from "),ji=s("a"),z_=a("TFPreTrainedModel"),C_=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=l(),fr=s("p"),P_=a("This model is also a "),mr=s("a"),q_=a("tf.keras.Model"),A_=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),I_=l(),b(_s.$$.fragment),L_=l(),Ze=s("div"),b(gr.$$.fragment),S_=l(),Bo=s("p"),N_=a("The "),Pi=s("a"),O_=a("TFDistilBertForMaskedLM"),W_=a(" forward method, overrides the "),hd=s("code"),R_=a("__call__"),H_=a(" special method."),Q_=l(),b(vs.$$.fragment),U_=l(),ud=s("p"),J_=a("Example:"),V_=l(),b(_r.$$.fragment),Ap=l(),Mo=s("h2"),Ts=s("a"),fd=s("span"),b(vr.$$.fragment),K_=l(),md=s("span"),G_=a("TFDistilBertForSequenceClassification"),Ip=l(),Ae=s("div"),b(Tr.$$.fragment),X_=l(),gd=s("p"),Y_=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Z_=l(),br=s("p"),e1=a("This model inherits from "),qi=s("a"),t1=a("TFPreTrainedModel"),o1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s1=l(),kr=s("p"),n1=a("This model is also a "),wr=s("a"),r1=a("tf.keras.Model"),a1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i1=l(),b(bs.$$.fragment),l1=l(),et=s("div"),b($r.$$.fragment),d1=l(),Eo=s("p"),c1=a("The "),Ai=s("a"),p1=a("TFDistilBertForSequenceClassification"),h1=a(" forward method, overrides the "),_d=s("code"),u1=a("__call__"),f1=a(" special method."),m1=l(),b(ks.$$.fragment),g1=l(),vd=s("p"),_1=a("Example:"),v1=l(),b(Dr.$$.fragment),Lp=l(),xo=s("h2"),ws=s("a"),Td=s("span"),b(Fr.$$.fragment),T1=l(),bd=s("span"),b1=a("TFDistilBertForMultipleChoice"),Sp=l(),Ie=s("div"),b(yr.$$.fragment),k1=l(),kd=s("p"),w1=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),$1=l(),Br=s("p"),D1=a("This model inherits from "),Ii=s("a"),F1=a("TFPreTrainedModel"),y1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B1=l(),Mr=s("p"),M1=a("This model is also a "),Er=s("a"),E1=a("tf.keras.Model"),x1=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z1=l(),b($s.$$.fragment),C1=l(),tt=s("div"),b(xr.$$.fragment),j1=l(),zo=s("p"),P1=a("The "),Li=s("a"),q1=a("TFDistilBertForMultipleChoice"),A1=a(" forward method, overrides the "),wd=s("code"),I1=a("__call__"),L1=a(" special method."),S1=l(),b(Ds.$$.fragment),N1=l(),$d=s("p"),O1=a("Example:"),W1=l(),b(zr.$$.fragment),Np=l(),Co=s("h2"),Fs=s("a"),Dd=s("span"),b(Cr.$$.fragment),R1=l(),Fd=s("span"),H1=a("TFDistilBertForTokenClassification"),Op=l(),Le=s("div"),b(jr.$$.fragment),Q1=l(),yd=s("p"),U1=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),J1=l(),Pr=s("p"),V1=a("This model inherits from "),Si=s("a"),K1=a("TFPreTrainedModel"),G1=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X1=l(),qr=s("p"),Y1=a("This model is also a "),Ar=s("a"),Z1=a("tf.keras.Model"),ev=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tv=l(),b(ys.$$.fragment),ov=l(),ot=s("div"),b(Ir.$$.fragment),sv=l(),jo=s("p"),nv=a("The "),Ni=s("a"),rv=a("TFDistilBertForTokenClassification"),av=a(" forward method, overrides the "),Bd=s("code"),iv=a("__call__"),lv=a(" special method."),dv=l(),b(Bs.$$.fragment),cv=l(),Md=s("p"),pv=a("Example:"),hv=l(),b(Lr.$$.fragment),Wp=l(),Po=s("h2"),Ms=s("a"),Ed=s("span"),b(Sr.$$.fragment),uv=l(),xd=s("span"),fv=a("TFDistilBertForQuestionAnswering"),Rp=l(),Se=s("div"),b(Nr.$$.fragment),mv=l(),qo=s("p"),gv=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=s("code"),_v=a("span start logits"),vv=a(" and "),Cd=s("code"),Tv=a("span end logits"),bv=a(")."),kv=l(),Or=s("p"),wv=a("This model inherits from "),Oi=s("a"),$v=a("TFPreTrainedModel"),Dv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fv=l(),Wr=s("p"),yv=a("This model is also a "),Rr=s("a"),Bv=a("tf.keras.Model"),Mv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ev=l(),b(Es.$$.fragment),xv=l(),st=s("div"),b(Hr.$$.fragment),zv=l(),Ao=s("p"),Cv=a("The "),Wi=s("a"),jv=a("TFDistilBertForQuestionAnswering"),Pv=a(" forward method, overrides the "),jd=s("code"),qv=a("__call__"),Av=a(" special method."),Iv=l(),b(xs.$$.fragment),Lv=l(),Pd=s("p"),Sv=a("Example:"),Nv=l(),b(Qr.$$.fragment),Hp=l(),Io=s("h2"),zs=s("a"),qd=s("span"),b(Ur.$$.fragment),Ov=l(),Ad=s("span"),Wv=a("FlaxDistilBertModel"),Qp=l(),Be=s("div"),b(Jr.$$.fragment),Rv=l(),Id=s("p"),Hv=a("The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),Qv=l(),Vr=s("p"),Uv=a("This model inherits from "),Ri=s("a"),Jv=a("FlaxPreTrainedModel"),Vv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Kv=l(),Kr=s("p"),Gv=a("This model is also a Flax Linen "),Gr=s("a"),Xv=a("flax.linen.Module"),Yv=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zv=l(),Ld=s("p"),eT=a("Finally, this model supports inherent JAX features such as:"),tT=l(),Bt=s("ul"),Sd=s("li"),Xr=s("a"),oT=a("Just-In-Time (JIT) compilation"),sT=l(),Nd=s("li"),Yr=s("a"),nT=a("Automatic Differentiation"),rT=l(),Od=s("li"),Zr=s("a"),aT=a("Vectorization"),iT=l(),Wd=s("li"),ea=s("a"),lT=a("Parallelization"),dT=l(),nt=s("div"),b(ta.$$.fragment),cT=l(),Lo=s("p"),pT=a("The "),Rd=s("code"),hT=a("FlaxDistilBertPreTrainedModel"),uT=a("forward method, overrides the "),Hd=s("code"),fT=a("__call__"),mT=a(" special method."),gT=l(),b(Cs.$$.fragment),_T=l(),Qd=s("p"),vT=a("Example:"),TT=l(),b(oa.$$.fragment),Up=l(),So=s("h2"),js=s("a"),Ud=s("span"),b(sa.$$.fragment),bT=l(),Jd=s("span"),kT=a("FlaxDistilBertForMaskedLM"),Jp=l(),Me=s("div"),b(na.$$.fragment),wT=l(),ra=s("p"),$T=a("DistilBert Model with a "),Vd=s("code"),DT=a("language modeling"),FT=a(" head on top."),yT=l(),aa=s("p"),BT=a("This model inherits from "),Hi=s("a"),MT=a("FlaxPreTrainedModel"),ET=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xT=l(),ia=s("p"),zT=a("This model is also a Flax Linen "),la=s("a"),CT=a("flax.linen.Module"),jT=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),PT=l(),Kd=s("p"),qT=a("Finally, this model supports inherent JAX features such as:"),AT=l(),Mt=s("ul"),Gd=s("li"),da=s("a"),IT=a("Just-In-Time (JIT) compilation"),LT=l(),Xd=s("li"),ca=s("a"),ST=a("Automatic Differentiation"),NT=l(),Yd=s("li"),pa=s("a"),OT=a("Vectorization"),WT=l(),Zd=s("li"),ha=s("a"),RT=a("Parallelization"),HT=l(),rt=s("div"),b(ua.$$.fragment),QT=l(),No=s("p"),UT=a("The "),ec=s("code"),JT=a("FlaxDistilBertPreTrainedModel"),VT=a("forward method, overrides the "),tc=s("code"),KT=a("__call__"),GT=a(" special method."),XT=l(),b(Ps.$$.fragment),YT=l(),oc=s("p"),ZT=a("Example:"),eb=l(),b(fa.$$.fragment),Vp=l(),Oo=s("h2"),qs=s("a"),sc=s("span"),b(ma.$$.fragment),tb=l(),nc=s("span"),ob=a("FlaxDistilBertForSequenceClassification"),Kp=l(),Ee=s("div"),b(ga.$$.fragment),sb=l(),rc=s("p"),nb=a(`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rb=l(),_a=s("p"),ab=a("This model inherits from "),Qi=s("a"),ib=a("FlaxPreTrainedModel"),lb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),db=l(),va=s("p"),cb=a("This model is also a Flax Linen "),Ta=s("a"),pb=a("flax.linen.Module"),hb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ub=l(),ac=s("p"),fb=a("Finally, this model supports inherent JAX features such as:"),mb=l(),Et=s("ul"),ic=s("li"),ba=s("a"),gb=a("Just-In-Time (JIT) compilation"),_b=l(),lc=s("li"),ka=s("a"),vb=a("Automatic Differentiation"),Tb=l(),dc=s("li"),wa=s("a"),bb=a("Vectorization"),kb=l(),cc=s("li"),$a=s("a"),wb=a("Parallelization"),$b=l(),at=s("div"),b(Da.$$.fragment),Db=l(),Wo=s("p"),Fb=a("The "),pc=s("code"),yb=a("FlaxDistilBertPreTrainedModel"),Bb=a("forward method, overrides the "),hc=s("code"),Mb=a("__call__"),Eb=a(" special method."),xb=l(),b(As.$$.fragment),zb=l(),uc=s("p"),Cb=a("Example:"),jb=l(),b(Fa.$$.fragment),Gp=l(),Ro=s("h2"),Is=s("a"),fc=s("span"),b(ya.$$.fragment),Pb=l(),mc=s("span"),qb=a("FlaxDistilBertForMultipleChoice"),Xp=l(),xe=s("div"),b(Ba.$$.fragment),Ab=l(),gc=s("p"),Ib=a(`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lb=l(),Ma=s("p"),Sb=a("This model inherits from "),Ui=s("a"),Nb=a("FlaxPreTrainedModel"),Ob=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Wb=l(),Ea=s("p"),Rb=a("This model is also a Flax Linen "),xa=s("a"),Hb=a("flax.linen.Module"),Qb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ub=l(),_c=s("p"),Jb=a("Finally, this model supports inherent JAX features such as:"),Vb=l(),xt=s("ul"),vc=s("li"),za=s("a"),Kb=a("Just-In-Time (JIT) compilation"),Gb=l(),Tc=s("li"),Ca=s("a"),Xb=a("Automatic Differentiation"),Yb=l(),bc=s("li"),ja=s("a"),Zb=a("Vectorization"),ek=l(),kc=s("li"),Pa=s("a"),tk=a("Parallelization"),ok=l(),it=s("div"),b(qa.$$.fragment),sk=l(),Ho=s("p"),nk=a("The "),wc=s("code"),rk=a("FlaxDistilBertPreTrainedModel"),ak=a("forward method, overrides the "),$c=s("code"),ik=a("__call__"),lk=a(" special method."),dk=l(),b(Ls.$$.fragment),ck=l(),Dc=s("p"),pk=a("Example:"),hk=l(),b(Aa.$$.fragment),Yp=l(),Qo=s("h2"),Ss=s("a"),Fc=s("span"),b(Ia.$$.fragment),uk=l(),yc=s("span"),fk=a("FlaxDistilBertForTokenClassification"),Zp=l(),ze=s("div"),b(La.$$.fragment),mk=l(),Bc=s("p"),gk=a(`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),_k=l(),Sa=s("p"),vk=a("This model inherits from "),Ji=s("a"),Tk=a("FlaxPreTrainedModel"),bk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kk=l(),Na=s("p"),wk=a("This model is also a Flax Linen "),Oa=s("a"),$k=a("flax.linen.Module"),Dk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fk=l(),Mc=s("p"),yk=a("Finally, this model supports inherent JAX features such as:"),Bk=l(),zt=s("ul"),Ec=s("li"),Wa=s("a"),Mk=a("Just-In-Time (JIT) compilation"),Ek=l(),xc=s("li"),Ra=s("a"),xk=a("Automatic Differentiation"),zk=l(),zc=s("li"),Ha=s("a"),Ck=a("Vectorization"),jk=l(),Cc=s("li"),Qa=s("a"),Pk=a("Parallelization"),qk=l(),lt=s("div"),b(Ua.$$.fragment),Ak=l(),Uo=s("p"),Ik=a("The "),jc=s("code"),Lk=a("FlaxDistilBertPreTrainedModel"),Sk=a("forward method, overrides the "),Pc=s("code"),Nk=a("__call__"),Ok=a(" special method."),Wk=l(),b(Ns.$$.fragment),Rk=l(),qc=s("p"),Hk=a("Example:"),Qk=l(),b(Ja.$$.fragment),eh=l(),Jo=s("h2"),Os=s("a"),Ac=s("span"),b(Va.$$.fragment),Uk=l(),Ic=s("span"),Jk=a("FlaxDistilBertForQuestionAnswering"),th=l(),Ce=s("div"),b(Ka.$$.fragment),Vk=l(),Vo=s("p"),Kk=a(`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=s("code"),Gk=a("span start logits"),Xk=a(" and "),Sc=s("code"),Yk=a("span end logits"),Zk=a(")."),ew=l(),Ga=s("p"),tw=a("This model inherits from "),Vi=s("a"),ow=a("FlaxPreTrainedModel"),sw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nw=l(),Xa=s("p"),rw=a("This model is also a Flax Linen "),Ya=s("a"),aw=a("flax.linen.Module"),iw=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lw=l(),Nc=s("p"),dw=a("Finally, this model supports inherent JAX features such as:"),cw=l(),Ct=s("ul"),Oc=s("li"),Za=s("a"),pw=a("Just-In-Time (JIT) compilation"),hw=l(),Wc=s("li"),ei=s("a"),uw=a("Automatic Differentiation"),fw=l(),Rc=s("li"),ti=s("a"),mw=a("Vectorization"),gw=l(),Hc=s("li"),oi=s("a"),_w=a("Parallelization"),vw=l(),dt=s("div"),b(si.$$.fragment),Tw=l(),Ko=s("p"),bw=a("The "),Qc=s("code"),kw=a("FlaxDistilBertPreTrainedModel"),ww=a("forward method, overrides the "),Uc=s("code"),$w=a("__call__"),Dw=a(" special method."),Fw=l(),b(Ws.$$.fragment),yw=l(),Jc=s("p"),Bw=a("Example:"),Mw=l(),b(ni.$$.fragment),this.h()},l(o){const m=ly('[data-svelte="svelte-1phssyn"]',document.head);p=n(m,"META",{name:!0,content:!0}),m.forEach(t),y=d(o),g=n(o,"H1",{class:!0});var ri=r(g);v=n(ri,"A",{id:!0,class:!0,href:!0});var Vc=r(v);T=n(Vc,"SPAN",{});var Kc=r(T);k(_.$$.fragment,Kc),Kc.forEach(t),Vc.forEach(t),f=d(ri),B=n(ri,"SPAN",{});var Gc=r(B);de=i(Gc,"DistilBERT"),Gc.forEach(t),ri.forEach(t),J=d(o),E=n(o,"H2",{class:!0});var ai=r(E);G=n(ai,"A",{id:!0,class:!0,href:!0});var Xc=r(G);N=n(Xc,"SPAN",{});var Yc=r(N);k(X.$$.fragment,Yc),Yc.forEach(t),Xc.forEach(t),ce=d(ai),O=n(ai,"SPAN",{});var Zc=r(O);pe=i(Zc,"Overview"),Zc.forEach(t),ai.forEach(t),re=d(o),L=n(o,"P",{});var jt=r(L);q=i(jt,"The DistilBERT model was proposed in the blog post "),Y=n(jt,"A",{href:!0,rel:!0});var ep=r(Y);V=i(ep,`Smaller, faster, cheaper, lighter: Introducing DistilBERT, a
distilled version of BERT`),ep.forEach(t),x=i(jt,", and the paper "),z=n(jt,"A",{href:!0,rel:!0});var tp=r(z);he=i(tp,`DistilBERT, a
distilled version of BERT: smaller, faster, cheaper and lighter`),tp.forEach(t),W=i(jt,`. DistilBERT is a
small, fast, cheap and light Transformer model trained by distilling BERT base. It has 40% less parameters than
`),oe=n(jt,"EM",{});var op=r(oe);ue=i(op,"bert-base-uncased"),op.forEach(t),R=i(jt,`, runs 60% faster while preserving over 95% of BERT\u2019s performances as measured on the GLUE language
understanding benchmark.`),jt.forEach(t),ae=d(o),ee=n(o,"P",{});var sp=r(ee);A=i(sp,"The abstract from the paper is the following:"),sp.forEach(t),ie=d(o),S=n(o,"P",{});var np=r(S);se=n(np,"EM",{});var rp=r(se);fe=i(rp,`As Transfer Learning from large-scale pre-trained models becomes more prevalent in Natural Language Processing (NLP),
operating these large models in on-the-edge and/or under constrained computational training or inference budgets
remains challenging. In this work, we propose a method to pre-train a smaller general-purpose language representation
model, called DistilBERT, which can then be fine-tuned with good performances on a wide range of tasks like its larger
counterparts. While most prior work investigated the use of distillation for building task-specific models, we leverage
knowledge distillation during the pretraining phase and show that it is possible to reduce the size of a BERT model by
40%, while retaining 97% of its language understanding capabilities and being 60% faster. To leverage the inductive
biases learned by larger models during pretraining, we introduce a triple loss combining language modeling,
distillation and cosine-distance losses. Our smaller, faster and lighter model is cheaper to pre-train and we
demonstrate its capabilities for on-device computations in a proof-of-concept experiment and a comparative on-device
study.`),rp.forEach(t),np.forEach(t),P=d(o),te=n(o,"P",{});var ap=r(te);H=i(ap,"Tips:"),ap.forEach(t),le=d(o),h=n(o,"UL",{});var ii=r(h);M=n(ii,"LI",{});var Pt=r(M);K=i(Pt,"DistilBERT doesn\u2019t have "),ge=n(Pt,"CODE",{});var ip=r(ge);Te=i(ip,"token_type_ids"),ip.forEach(t),I=i(Pt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),_e=n(Pt,"CODE",{});var lp=r(_e);be=i(lp,"tokenizer.sep_token"),lp.forEach(t),ke=i(Pt," (or "),j=n(Pt,"CODE",{});var dp=r(j);Q=i(dp,"[SEP]"),dp.forEach(t),we=i(Pt,")."),Pt.forEach(t),$e=d(ii),Z=n(ii,"LI",{});var li=r(Z);De=i(li,"DistilBERT doesn\u2019t have options to select the input positions ("),ne=n(li,"CODE",{});var cp=r(ne);Fe=i(cp,"position_ids"),cp.forEach(t),hu=i(li,` input). This could be added if
necessary though, just let us know if you need this option.`),li.forEach(t),ii.forEach(t),up=d(o),Tt=n(o,"P",{});var qt=r(Tt);uu=i(qt,"This model was contributed by "),Ys=n(qt,"A",{href:!0,rel:!0});var Ew=r(Ys);fu=i(Ew,"victorsanh"),Ew.forEach(t),mu=i(qt,`. This model jax version was
contributed by `),Zs=n(qt,"A",{href:!0,rel:!0});var xw=r(Zs);gu=i(xw,"kamalkraj"),xw.forEach(t),_u=i(qt,". The original code can be found "),en=n(qt,"A",{href:!0,rel:!0});var zw=r(en);vu=i(zw,"here"),zw.forEach(t),Tu=i(qt,"."),qt.forEach(t),fp=d(o),ao=n(o,"H2",{class:!0});var sh=r(ao);Go=n(sh,"A",{id:!0,class:!0,href:!0});var Cw=r(Go);_l=n(Cw,"SPAN",{});var jw=r(_l);k(tn.$$.fragment,jw),jw.forEach(t),Cw.forEach(t),bu=d(sh),vl=n(sh,"SPAN",{});var Pw=r(vl);ku=i(Pw,"DistilBertConfig"),Pw.forEach(t),sh.forEach(t),mp=d(o),Ne=n(o,"DIV",{class:!0});var At=r(Ne);k(on.$$.fragment,At),wu=d(At),yt=n(At,"P",{});var Rs=r(yt);$u=i(Rs,"This is the configuration class to store the configuration of a "),di=n(Rs,"A",{href:!0});var qw=r(di);Du=i(qw,"DistilBertModel"),qw.forEach(t),Fu=i(Rs," or a "),ci=n(Rs,"A",{href:!0});var Aw=r(ci);yu=i(Aw,"TFDistilBertModel"),Aw.forEach(t),Bu=i(Rs,`. It
is used to instantiate a DistilBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DistilBERT
`),sn=n(Rs,"A",{href:!0,rel:!0});var Iw=r(sn);Mu=i(Iw,"distilbert-base-uncased"),Iw.forEach(t),Eu=i(Rs," architecture."),Rs.forEach(t),xu=d(At),io=n(At,"P",{});var Ki=r(io);zu=i(Ki,"Configuration objects inherit from "),pi=n(Ki,"A",{href:!0});var Lw=r(pi);Cu=i(Lw,"PretrainedConfig"),Lw.forEach(t),ju=i(Ki,` and can be used to control the model outputs. Read the
documentation from `),hi=n(Ki,"A",{href:!0});var Sw=r(hi);Pu=i(Sw,"PretrainedConfig"),Sw.forEach(t),qu=i(Ki," for more information."),Ki.forEach(t),Au=d(At),Tl=n(At,"P",{});var Nw=r(Tl);Iu=i(Nw,"Examples:"),Nw.forEach(t),Lu=d(At),k(nn.$$.fragment,At),At.forEach(t),gp=d(o),lo=n(o,"H2",{class:!0});var nh=r(lo);Xo=n(nh,"A",{id:!0,class:!0,href:!0});var Ow=r(Xo);bl=n(Ow,"SPAN",{});var Ww=r(bl);k(rn.$$.fragment,Ww),Ww.forEach(t),Ow.forEach(t),Su=d(nh),kl=n(nh,"SPAN",{});var Rw=r(kl);Nu=i(Rw,"DistilBertTokenizer"),Rw.forEach(t),nh.forEach(t),_p=d(o),_t=n(o,"DIV",{class:!0});var Hs=r(_t);k(an.$$.fragment,Hs),Ou=d(Hs),wl=n(Hs,"P",{});var Hw=r(wl);Wu=i(Hw,"Construct a DistilBERT tokenizer."),Hw.forEach(t),Ru=d(Hs),Yo=n(Hs,"P",{});var pp=r(Yo);ui=n(pp,"A",{href:!0});var Qw=r(ui);Hu=i(Qw,"DistilBertTokenizer"),Qw.forEach(t),Qu=i(pp," is identical to "),fi=n(pp,"A",{href:!0});var Uw=r(fi);Uu=i(Uw,"BertTokenizer"),Uw.forEach(t),Ju=i(pp,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),pp.forEach(t),Vu=d(Hs),ln=n(Hs,"P",{});var rh=r(ln);Ku=i(rh,"Refer to superclass "),mi=n(rh,"A",{href:!0});var Jw=r(mi);Gu=i(Jw,"BertTokenizer"),Jw.forEach(t),Xu=i(rh," for usage examples and documentation concerning parameters."),rh.forEach(t),Hs.forEach(t),vp=d(o),co=n(o,"H2",{class:!0});var ah=r(co);Zo=n(ah,"A",{id:!0,class:!0,href:!0});var Vw=r(Zo);$l=n(Vw,"SPAN",{});var Kw=r($l);k(dn.$$.fragment,Kw),Kw.forEach(t),Vw.forEach(t),Yu=d(ah),Dl=n(ah,"SPAN",{});var Gw=r(Dl);Zu=i(Gw,"DistilBertTokenizerFast"),Gw.forEach(t),ah.forEach(t),Tp=d(o),vt=n(o,"DIV",{class:!0});var Qs=r(vt);k(cn.$$.fragment,Qs),ef=d(Qs),pn=n(Qs,"P",{});var ih=r(pn);tf=i(ih,"Construct a \u201Cfast\u201D DistilBERT tokenizer (backed by HuggingFace\u2019s "),Fl=n(ih,"EM",{});var Xw=r(Fl);of=i(Xw,"tokenizers"),Xw.forEach(t),sf=i(ih," library)."),ih.forEach(t),nf=d(Qs),es=n(Qs,"P",{});var hp=r(es);gi=n(hp,"A",{href:!0});var Yw=r(gi);rf=i(Yw,"DistilBertTokenizerFast"),Yw.forEach(t),af=i(hp," is identical to "),_i=n(hp,"A",{href:!0});var Zw=r(_i);lf=i(Zw,"BertTokenizerFast"),Zw.forEach(t),df=i(hp,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),hp.forEach(t),cf=d(Qs),hn=n(Qs,"P",{});var lh=r(hn);pf=i(lh,"Refer to superclass "),vi=n(lh,"A",{href:!0});var e$=r(vi);hf=i(e$,"BertTokenizerFast"),e$.forEach(t),uf=i(lh," for usage examples and documentation concerning parameters."),lh.forEach(t),Qs.forEach(t),bp=d(o),po=n(o,"H2",{class:!0});var dh=r(po);ts=n(dh,"A",{id:!0,class:!0,href:!0});var t$=r(ts);yl=n(t$,"SPAN",{});var o$=r(yl);k(un.$$.fragment,o$),o$.forEach(t),t$.forEach(t),ff=d(dh),Bl=n(dh,"SPAN",{});var s$=r(Bl);mf=i(s$,"DistilBertModel"),s$.forEach(t),dh.forEach(t),kp=d(o),Oe=n(o,"DIV",{class:!0});var It=r(Oe);k(fn.$$.fragment,It),gf=d(It),Ml=n(It,"P",{});var n$=r(Ml);_f=i(n$,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),n$.forEach(t),vf=d(It),mn=n(It,"P",{});var ch=r(mn);Tf=i(ch,"This model inherits from "),Ti=n(ch,"A",{href:!0});var r$=r(Ti);bf=i(r$,"PreTrainedModel"),r$.forEach(t),kf=i(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),wf=d(It),gn=n(It,"P",{});var ph=r(gn);$f=i(ph,"This model is also a PyTorch "),_n=n(ph,"A",{href:!0,rel:!0});var a$=r(_n);Df=i(a$,"torch.nn.Module"),a$.forEach(t),Ff=i(ph,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ph.forEach(t),yf=d(It),Je=n(It,"DIV",{class:!0});var Lt=r(Je);k(vn.$$.fragment,Lt),Bf=d(Lt),ho=n(Lt,"P",{});var Gi=r(ho);Mf=i(Gi,"The "),bi=n(Gi,"A",{href:!0});var i$=r(bi);Ef=i(i$,"DistilBertModel"),i$.forEach(t),xf=i(Gi," forward method, overrides the "),El=n(Gi,"CODE",{});var l$=r(El);zf=i(l$,"__call__"),l$.forEach(t),Cf=i(Gi," special method."),Gi.forEach(t),jf=d(Lt),k(os.$$.fragment,Lt),Pf=d(Lt),xl=n(Lt,"P",{});var d$=r(xl);qf=i(d$,"Example:"),d$.forEach(t),Af=d(Lt),k(Tn.$$.fragment,Lt),Lt.forEach(t),It.forEach(t),wp=d(o),uo=n(o,"H2",{class:!0});var hh=r(uo);ss=n(hh,"A",{id:!0,class:!0,href:!0});var c$=r(ss);zl=n(c$,"SPAN",{});var p$=r(zl);k(bn.$$.fragment,p$),p$.forEach(t),c$.forEach(t),If=d(hh),Cl=n(hh,"SPAN",{});var h$=r(Cl);Lf=i(h$,"DistilBertForMaskedLM"),h$.forEach(t),hh.forEach(t),$p=d(o),We=n(o,"DIV",{class:!0});var St=r(We);k(kn.$$.fragment,St),Sf=d(St),wn=n(St,"P",{});var uh=r(wn);Nf=i(uh,"DistilBert Model with a "),jl=n(uh,"CODE",{});var u$=r(jl);Of=i(u$,"masked language modeling"),u$.forEach(t),Wf=i(uh," head on top."),uh.forEach(t),Rf=d(St),$n=n(St,"P",{});var fh=r($n);Hf=i(fh,"This model inherits from "),ki=n(fh,"A",{href:!0});var f$=r(ki);Qf=i(f$,"PreTrainedModel"),f$.forEach(t),Uf=i(fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fh.forEach(t),Jf=d(St),Dn=n(St,"P",{});var mh=r(Dn);Vf=i(mh,"This model is also a PyTorch "),Fn=n(mh,"A",{href:!0,rel:!0});var m$=r(Fn);Kf=i(m$,"torch.nn.Module"),m$.forEach(t),Gf=i(mh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mh.forEach(t),Xf=d(St),Ve=n(St,"DIV",{class:!0});var Nt=r(Ve);k(yn.$$.fragment,Nt),Yf=d(Nt),fo=n(Nt,"P",{});var Xi=r(fo);Zf=i(Xi,"The "),wi=n(Xi,"A",{href:!0});var g$=r(wi);em=i(g$,"DistilBertForMaskedLM"),g$.forEach(t),tm=i(Xi," forward method, overrides the "),Pl=n(Xi,"CODE",{});var _$=r(Pl);om=i(_$,"__call__"),_$.forEach(t),sm=i(Xi," special method."),Xi.forEach(t),nm=d(Nt),k(ns.$$.fragment,Nt),rm=d(Nt),ql=n(Nt,"P",{});var v$=r(ql);am=i(v$,"Example:"),v$.forEach(t),im=d(Nt),k(Bn.$$.fragment,Nt),Nt.forEach(t),St.forEach(t),Dp=d(o),mo=n(o,"H2",{class:!0});var gh=r(mo);rs=n(gh,"A",{id:!0,class:!0,href:!0});var T$=r(rs);Al=n(T$,"SPAN",{});var b$=r(Al);k(Mn.$$.fragment,b$),b$.forEach(t),T$.forEach(t),lm=d(gh),Il=n(gh,"SPAN",{});var k$=r(Il);dm=i(k$,"DistilBertForSequenceClassification"),k$.forEach(t),gh.forEach(t),Fp=d(o),Re=n(o,"DIV",{class:!0});var Ot=r(Re);k(En.$$.fragment,Ot),cm=d(Ot),Ll=n(Ot,"P",{});var w$=r(Ll);pm=i(w$,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),w$.forEach(t),hm=d(Ot),xn=n(Ot,"P",{});var _h=r(xn);um=i(_h,"This model inherits from "),$i=n(_h,"A",{href:!0});var $$=r($i);fm=i($$,"PreTrainedModel"),$$.forEach(t),mm=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),gm=d(Ot),zn=n(Ot,"P",{});var vh=r(zn);_m=i(vh,"This model is also a PyTorch "),Cn=n(vh,"A",{href:!0,rel:!0});var D$=r(Cn);vm=i(D$,"torch.nn.Module"),D$.forEach(t),Tm=i(vh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh.forEach(t),bm=d(Ot),je=n(Ot,"DIV",{class:!0});var ct=r(je);k(jn.$$.fragment,ct),km=d(ct),go=n(ct,"P",{});var Yi=r(go);wm=i(Yi,"The "),Di=n(Yi,"A",{href:!0});var F$=r(Di);$m=i(F$,"DistilBertForSequenceClassification"),F$.forEach(t),Dm=i(Yi," forward method, overrides the "),Sl=n(Yi,"CODE",{});var y$=r(Sl);Fm=i(y$,"__call__"),y$.forEach(t),ym=i(Yi," special method."),Yi.forEach(t),Bm=d(ct),k(as.$$.fragment,ct),Mm=d(ct),Nl=n(ct,"P",{});var B$=r(Nl);Em=i(B$,"Example of single-label classification:"),B$.forEach(t),xm=d(ct),k(Pn.$$.fragment,ct),zm=d(ct),Ol=n(ct,"P",{});var M$=r(Ol);Cm=i(M$,"Example of multi-label classification:"),M$.forEach(t),jm=d(ct),k(qn.$$.fragment,ct),ct.forEach(t),Ot.forEach(t),yp=d(o),_o=n(o,"H2",{class:!0});var Th=r(_o);is=n(Th,"A",{id:!0,class:!0,href:!0});var E$=r(is);Wl=n(E$,"SPAN",{});var x$=r(Wl);k(An.$$.fragment,x$),x$.forEach(t),E$.forEach(t),Pm=d(Th),Rl=n(Th,"SPAN",{});var z$=r(Rl);qm=i(z$,"DistilBertForMultipleChoice"),z$.forEach(t),Th.forEach(t),Bp=d(o),He=n(o,"DIV",{class:!0});var Wt=r(He);k(In.$$.fragment,Wt),Am=d(Wt),Hl=n(Wt,"P",{});var C$=r(Hl);Im=i(C$,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),C$.forEach(t),Lm=d(Wt),Ln=n(Wt,"P",{});var bh=r(Ln);Sm=i(bh,"This model inherits from "),Fi=n(bh,"A",{href:!0});var j$=r(Fi);Nm=i(j$,"PreTrainedModel"),j$.forEach(t),Om=i(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),Wm=d(Wt),Sn=n(Wt,"P",{});var kh=r(Sn);Rm=i(kh,"This model is also a PyTorch "),Nn=n(kh,"A",{href:!0,rel:!0});var P$=r(Nn);Hm=i(P$,"torch.nn.Module"),P$.forEach(t),Qm=i(kh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kh.forEach(t),Um=d(Wt),Ke=n(Wt,"DIV",{class:!0});var Rt=r(Ke);k(On.$$.fragment,Rt),Jm=d(Rt),vo=n(Rt,"P",{});var Zi=r(vo);Vm=i(Zi,"The "),yi=n(Zi,"A",{href:!0});var q$=r(yi);Km=i(q$,"DistilBertForMultipleChoice"),q$.forEach(t),Gm=i(Zi," forward method, overrides the "),Ql=n(Zi,"CODE",{});var A$=r(Ql);Xm=i(A$,"__call__"),A$.forEach(t),Ym=i(Zi," special method."),Zi.forEach(t),Zm=d(Rt),k(ls.$$.fragment,Rt),eg=d(Rt),Ul=n(Rt,"P",{});var I$=r(Ul);tg=i(I$,"Examples:"),I$.forEach(t),og=d(Rt),k(Wn.$$.fragment,Rt),Rt.forEach(t),Wt.forEach(t),Mp=d(o),To=n(o,"H2",{class:!0});var wh=r(To);ds=n(wh,"A",{id:!0,class:!0,href:!0});var L$=r(ds);Jl=n(L$,"SPAN",{});var S$=r(Jl);k(Rn.$$.fragment,S$),S$.forEach(t),L$.forEach(t),sg=d(wh),Vl=n(wh,"SPAN",{});var N$=r(Vl);ng=i(N$,"DistilBertForTokenClassification"),N$.forEach(t),wh.forEach(t),Ep=d(o),Qe=n(o,"DIV",{class:!0});var Ht=r(Qe);k(Hn.$$.fragment,Ht),rg=d(Ht),Kl=n(Ht,"P",{});var O$=r(Kl);ag=i(O$,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),O$.forEach(t),ig=d(Ht),Qn=n(Ht,"P",{});var $h=r(Qn);lg=i($h,"This model inherits from "),Bi=n($h,"A",{href:!0});var W$=r(Bi);dg=i(W$,"PreTrainedModel"),W$.forEach(t),cg=i($h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h.forEach(t),pg=d(Ht),Un=n(Ht,"P",{});var Dh=r(Un);hg=i(Dh,"This model is also a PyTorch "),Jn=n(Dh,"A",{href:!0,rel:!0});var R$=r(Jn);ug=i(R$,"torch.nn.Module"),R$.forEach(t),fg=i(Dh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dh.forEach(t),mg=d(Ht),Ge=n(Ht,"DIV",{class:!0});var Qt=r(Ge);k(Vn.$$.fragment,Qt),gg=d(Qt),bo=n(Qt,"P",{});var el=r(bo);_g=i(el,"The "),Mi=n(el,"A",{href:!0});var H$=r(Mi);vg=i(H$,"DistilBertForTokenClassification"),H$.forEach(t),Tg=i(el," forward method, overrides the "),Gl=n(el,"CODE",{});var Q$=r(Gl);bg=i(Q$,"__call__"),Q$.forEach(t),kg=i(el," special method."),el.forEach(t),wg=d(Qt),k(cs.$$.fragment,Qt),$g=d(Qt),Xl=n(Qt,"P",{});var U$=r(Xl);Dg=i(U$,"Example:"),U$.forEach(t),Fg=d(Qt),k(Kn.$$.fragment,Qt),Qt.forEach(t),Ht.forEach(t),xp=d(o),ko=n(o,"H2",{class:!0});var Fh=r(ko);ps=n(Fh,"A",{id:!0,class:!0,href:!0});var J$=r(ps);Yl=n(J$,"SPAN",{});var V$=r(Yl);k(Gn.$$.fragment,V$),V$.forEach(t),J$.forEach(t),yg=d(Fh),Zl=n(Fh,"SPAN",{});var K$=r(Zl);Bg=i(K$,"DistilBertForQuestionAnswering"),K$.forEach(t),Fh.forEach(t),zp=d(o),Ue=n(o,"DIV",{class:!0});var Ut=r(Ue);k(Xn.$$.fragment,Ut),Mg=d(Ut),wo=n(Ut,"P",{});var tl=r(wo);Eg=i(tl,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),ed=n(tl,"CODE",{});var G$=r(ed);xg=i(G$,"span start logits"),G$.forEach(t),zg=i(tl," and "),td=n(tl,"CODE",{});var X$=r(td);Cg=i(X$,"span end logits"),X$.forEach(t),jg=i(tl,")."),tl.forEach(t),Pg=d(Ut),Yn=n(Ut,"P",{});var yh=r(Yn);qg=i(yh,"This model inherits from "),Ei=n(yh,"A",{href:!0});var Y$=r(Ei);Ag=i(Y$,"PreTrainedModel"),Y$.forEach(t),Ig=i(yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh.forEach(t),Lg=d(Ut),Zn=n(Ut,"P",{});var Bh=r(Zn);Sg=i(Bh,"This model is also a PyTorch "),er=n(Bh,"A",{href:!0,rel:!0});var Z$=r(er);Ng=i(Z$,"torch.nn.Module"),Z$.forEach(t),Og=i(Bh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bh.forEach(t),Wg=d(Ut),Xe=n(Ut,"DIV",{class:!0});var Jt=r(Xe);k(tr.$$.fragment,Jt),Rg=d(Jt),$o=n(Jt,"P",{});var ol=r($o);Hg=i(ol,"The "),xi=n(ol,"A",{href:!0});var eD=r(xi);Qg=i(eD,"DistilBertForQuestionAnswering"),eD.forEach(t),Ug=i(ol," forward method, overrides the "),od=n(ol,"CODE",{});var tD=r(od);Jg=i(tD,"__call__"),tD.forEach(t),Vg=i(ol," special method."),ol.forEach(t),Kg=d(Jt),k(hs.$$.fragment,Jt),Gg=d(Jt),sd=n(Jt,"P",{});var oD=r(sd);Xg=i(oD,"Example:"),oD.forEach(t),Yg=d(Jt),k(or.$$.fragment,Jt),Jt.forEach(t),Ut.forEach(t),Cp=d(o),Do=n(o,"H2",{class:!0});var Mh=r(Do);us=n(Mh,"A",{id:!0,class:!0,href:!0});var sD=r(us);nd=n(sD,"SPAN",{});var nD=r(nd);k(sr.$$.fragment,nD),nD.forEach(t),sD.forEach(t),Zg=d(Mh),rd=n(Mh,"SPAN",{});var rD=r(rd);e_=i(rD,"TFDistilBertModel"),rD.forEach(t),Mh.forEach(t),jp=d(o),Pe=n(o,"DIV",{class:!0});var bt=r(Pe);k(nr.$$.fragment,bt),t_=d(bt),ad=n(bt,"P",{});var aD=r(ad);o_=i(aD,"The bare DistilBERT encoder/transformer outputting raw hidden-states without any specific head on top."),aD.forEach(t),s_=d(bt),rr=n(bt,"P",{});var Eh=r(rr);n_=i(Eh,"This model inherits from "),zi=n(Eh,"A",{href:!0});var iD=r(zi);r_=i(iD,"TFPreTrainedModel"),iD.forEach(t),a_=i(Eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eh.forEach(t),i_=d(bt),ar=n(bt,"P",{});var xh=r(ar);l_=i(xh,"This model is also a "),ir=n(xh,"A",{href:!0,rel:!0});var lD=r(ir);d_=i(lD,"tf.keras.Model"),lD.forEach(t),c_=i(xh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xh.forEach(t),p_=d(bt),k(fs.$$.fragment,bt),h_=d(bt),Ye=n(bt,"DIV",{class:!0});var Vt=r(Ye);k(lr.$$.fragment,Vt),u_=d(Vt),Fo=n(Vt,"P",{});var sl=r(Fo);f_=i(sl,"The "),Ci=n(sl,"A",{href:!0});var dD=r(Ci);m_=i(dD,"TFDistilBertModel"),dD.forEach(t),g_=i(sl," forward method, overrides the "),id=n(sl,"CODE",{});var cD=r(id);__=i(cD,"__call__"),cD.forEach(t),v_=i(sl," special method."),sl.forEach(t),T_=d(Vt),k(ms.$$.fragment,Vt),b_=d(Vt),ld=n(Vt,"P",{});var pD=r(ld);k_=i(pD,"Example:"),pD.forEach(t),w_=d(Vt),k(dr.$$.fragment,Vt),Vt.forEach(t),bt.forEach(t),Pp=d(o),yo=n(o,"H2",{class:!0});var zh=r(yo);gs=n(zh,"A",{id:!0,class:!0,href:!0});var hD=r(gs);dd=n(hD,"SPAN",{});var uD=r(dd);k(cr.$$.fragment,uD),uD.forEach(t),hD.forEach(t),$_=d(zh),cd=n(zh,"SPAN",{});var fD=r(cd);D_=i(fD,"TFDistilBertForMaskedLM"),fD.forEach(t),zh.forEach(t),qp=d(o),qe=n(o,"DIV",{class:!0});var kt=r(qe);k(pr.$$.fragment,kt),F_=d(kt),hr=n(kt,"P",{});var Ch=r(hr);y_=i(Ch,"DistilBert Model with a "),pd=n(Ch,"CODE",{});var mD=r(pd);B_=i(mD,"masked language modeling"),mD.forEach(t),M_=i(Ch," head on top."),Ch.forEach(t),E_=d(kt),ur=n(kt,"P",{});var jh=r(ur);x_=i(jh,"This model inherits from "),ji=n(jh,"A",{href:!0});var gD=r(ji);z_=i(gD,"TFPreTrainedModel"),gD.forEach(t),C_=i(jh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh.forEach(t),j_=d(kt),fr=n(kt,"P",{});var Ph=r(fr);P_=i(Ph,"This model is also a "),mr=n(Ph,"A",{href:!0,rel:!0});var _D=r(mr);q_=i(_D,"tf.keras.Model"),_D.forEach(t),A_=i(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(t),I_=d(kt),k(_s.$$.fragment,kt),L_=d(kt),Ze=n(kt,"DIV",{class:!0});var Kt=r(Ze);k(gr.$$.fragment,Kt),S_=d(Kt),Bo=n(Kt,"P",{});var nl=r(Bo);N_=i(nl,"The "),Pi=n(nl,"A",{href:!0});var vD=r(Pi);O_=i(vD,"TFDistilBertForMaskedLM"),vD.forEach(t),W_=i(nl," forward method, overrides the "),hd=n(nl,"CODE",{});var TD=r(hd);R_=i(TD,"__call__"),TD.forEach(t),H_=i(nl," special method."),nl.forEach(t),Q_=d(Kt),k(vs.$$.fragment,Kt),U_=d(Kt),ud=n(Kt,"P",{});var bD=r(ud);J_=i(bD,"Example:"),bD.forEach(t),V_=d(Kt),k(_r.$$.fragment,Kt),Kt.forEach(t),kt.forEach(t),Ap=d(o),Mo=n(o,"H2",{class:!0});var qh=r(Mo);Ts=n(qh,"A",{id:!0,class:!0,href:!0});var kD=r(Ts);fd=n(kD,"SPAN",{});var wD=r(fd);k(vr.$$.fragment,wD),wD.forEach(t),kD.forEach(t),K_=d(qh),md=n(qh,"SPAN",{});var $D=r(md);G_=i($D,"TFDistilBertForSequenceClassification"),$D.forEach(t),qh.forEach(t),Ip=d(o),Ae=n(o,"DIV",{class:!0});var wt=r(Ae);k(Tr.$$.fragment,wt),X_=d(wt),gd=n(wt,"P",{});var DD=r(gd);Y_=i(DD,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),DD.forEach(t),Z_=d(wt),br=n(wt,"P",{});var Ah=r(br);e1=i(Ah,"This model inherits from "),qi=n(Ah,"A",{href:!0});var FD=r(qi);t1=i(FD,"TFPreTrainedModel"),FD.forEach(t),o1=i(Ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ah.forEach(t),s1=d(wt),kr=n(wt,"P",{});var Ih=r(kr);n1=i(Ih,"This model is also a "),wr=n(Ih,"A",{href:!0,rel:!0});var yD=r(wr);r1=i(yD,"tf.keras.Model"),yD.forEach(t),a1=i(Ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ih.forEach(t),i1=d(wt),k(bs.$$.fragment,wt),l1=d(wt),et=n(wt,"DIV",{class:!0});var Gt=r(et);k($r.$$.fragment,Gt),d1=d(Gt),Eo=n(Gt,"P",{});var rl=r(Eo);c1=i(rl,"The "),Ai=n(rl,"A",{href:!0});var BD=r(Ai);p1=i(BD,"TFDistilBertForSequenceClassification"),BD.forEach(t),h1=i(rl," forward method, overrides the "),_d=n(rl,"CODE",{});var MD=r(_d);u1=i(MD,"__call__"),MD.forEach(t),f1=i(rl," special method."),rl.forEach(t),m1=d(Gt),k(ks.$$.fragment,Gt),g1=d(Gt),vd=n(Gt,"P",{});var ED=r(vd);_1=i(ED,"Example:"),ED.forEach(t),v1=d(Gt),k(Dr.$$.fragment,Gt),Gt.forEach(t),wt.forEach(t),Lp=d(o),xo=n(o,"H2",{class:!0});var Lh=r(xo);ws=n(Lh,"A",{id:!0,class:!0,href:!0});var xD=r(ws);Td=n(xD,"SPAN",{});var zD=r(Td);k(Fr.$$.fragment,zD),zD.forEach(t),xD.forEach(t),T1=d(Lh),bd=n(Lh,"SPAN",{});var CD=r(bd);b1=i(CD,"TFDistilBertForMultipleChoice"),CD.forEach(t),Lh.forEach(t),Sp=d(o),Ie=n(o,"DIV",{class:!0});var $t=r(Ie);k(yr.$$.fragment,$t),k1=d($t),kd=n($t,"P",{});var jD=r(kd);w1=i(jD,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),jD.forEach(t),$1=d($t),Br=n($t,"P",{});var Sh=r(Br);D1=i(Sh,"This model inherits from "),Ii=n(Sh,"A",{href:!0});var PD=r(Ii);F1=i(PD,"TFPreTrainedModel"),PD.forEach(t),y1=i(Sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh.forEach(t),B1=d($t),Mr=n($t,"P",{});var Nh=r(Mr);M1=i(Nh,"This model is also a "),Er=n(Nh,"A",{href:!0,rel:!0});var qD=r(Er);E1=i(qD,"tf.keras.Model"),qD.forEach(t),x1=i(Nh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh.forEach(t),z1=d($t),k($s.$$.fragment,$t),C1=d($t),tt=n($t,"DIV",{class:!0});var Xt=r(tt);k(xr.$$.fragment,Xt),j1=d(Xt),zo=n(Xt,"P",{});var al=r(zo);P1=i(al,"The "),Li=n(al,"A",{href:!0});var AD=r(Li);q1=i(AD,"TFDistilBertForMultipleChoice"),AD.forEach(t),A1=i(al," forward method, overrides the "),wd=n(al,"CODE",{});var ID=r(wd);I1=i(ID,"__call__"),ID.forEach(t),L1=i(al," special method."),al.forEach(t),S1=d(Xt),k(Ds.$$.fragment,Xt),N1=d(Xt),$d=n(Xt,"P",{});var LD=r($d);O1=i(LD,"Example:"),LD.forEach(t),W1=d(Xt),k(zr.$$.fragment,Xt),Xt.forEach(t),$t.forEach(t),Np=d(o),Co=n(o,"H2",{class:!0});var Oh=r(Co);Fs=n(Oh,"A",{id:!0,class:!0,href:!0});var SD=r(Fs);Dd=n(SD,"SPAN",{});var ND=r(Dd);k(Cr.$$.fragment,ND),ND.forEach(t),SD.forEach(t),R1=d(Oh),Fd=n(Oh,"SPAN",{});var OD=r(Fd);H1=i(OD,"TFDistilBertForTokenClassification"),OD.forEach(t),Oh.forEach(t),Op=d(o),Le=n(o,"DIV",{class:!0});var Dt=r(Le);k(jr.$$.fragment,Dt),Q1=d(Dt),yd=n(Dt,"P",{});var WD=r(yd);U1=i(WD,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),WD.forEach(t),J1=d(Dt),Pr=n(Dt,"P",{});var Wh=r(Pr);V1=i(Wh,"This model inherits from "),Si=n(Wh,"A",{href:!0});var RD=r(Si);K1=i(RD,"TFPreTrainedModel"),RD.forEach(t),G1=i(Wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh.forEach(t),X1=d(Dt),qr=n(Dt,"P",{});var Rh=r(qr);Y1=i(Rh,"This model is also a "),Ar=n(Rh,"A",{href:!0,rel:!0});var HD=r(Ar);Z1=i(HD,"tf.keras.Model"),HD.forEach(t),ev=i(Rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rh.forEach(t),tv=d(Dt),k(ys.$$.fragment,Dt),ov=d(Dt),ot=n(Dt,"DIV",{class:!0});var Yt=r(ot);k(Ir.$$.fragment,Yt),sv=d(Yt),jo=n(Yt,"P",{});var il=r(jo);nv=i(il,"The "),Ni=n(il,"A",{href:!0});var QD=r(Ni);rv=i(QD,"TFDistilBertForTokenClassification"),QD.forEach(t),av=i(il," forward method, overrides the "),Bd=n(il,"CODE",{});var UD=r(Bd);iv=i(UD,"__call__"),UD.forEach(t),lv=i(il," special method."),il.forEach(t),dv=d(Yt),k(Bs.$$.fragment,Yt),cv=d(Yt),Md=n(Yt,"P",{});var JD=r(Md);pv=i(JD,"Example:"),JD.forEach(t),hv=d(Yt),k(Lr.$$.fragment,Yt),Yt.forEach(t),Dt.forEach(t),Wp=d(o),Po=n(o,"H2",{class:!0});var Hh=r(Po);Ms=n(Hh,"A",{id:!0,class:!0,href:!0});var VD=r(Ms);Ed=n(VD,"SPAN",{});var KD=r(Ed);k(Sr.$$.fragment,KD),KD.forEach(t),VD.forEach(t),uv=d(Hh),xd=n(Hh,"SPAN",{});var GD=r(xd);fv=i(GD,"TFDistilBertForQuestionAnswering"),GD.forEach(t),Hh.forEach(t),Rp=d(o),Se=n(o,"DIV",{class:!0});var Ft=r(Se);k(Nr.$$.fragment,Ft),mv=d(Ft),qo=n(Ft,"P",{});var ll=r(qo);gv=i(ll,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layer on top of the hidden-states output to compute `),zd=n(ll,"CODE",{});var XD=r(zd);_v=i(XD,"span start logits"),XD.forEach(t),vv=i(ll," and "),Cd=n(ll,"CODE",{});var YD=r(Cd);Tv=i(YD,"span end logits"),YD.forEach(t),bv=i(ll,")."),ll.forEach(t),kv=d(Ft),Or=n(Ft,"P",{});var Qh=r(Or);wv=i(Qh,"This model inherits from "),Oi=n(Qh,"A",{href:!0});var ZD=r(Oi);$v=i(ZD,"TFPreTrainedModel"),ZD.forEach(t),Dv=i(Qh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh.forEach(t),Fv=d(Ft),Wr=n(Ft,"P",{});var Uh=r(Wr);yv=i(Uh,"This model is also a "),Rr=n(Uh,"A",{href:!0,rel:!0});var eF=r(Rr);Bv=i(eF,"tf.keras.Model"),eF.forEach(t),Mv=i(Uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh.forEach(t),Ev=d(Ft),k(Es.$$.fragment,Ft),xv=d(Ft),st=n(Ft,"DIV",{class:!0});var Zt=r(st);k(Hr.$$.fragment,Zt),zv=d(Zt),Ao=n(Zt,"P",{});var dl=r(Ao);Cv=i(dl,"The "),Wi=n(dl,"A",{href:!0});var tF=r(Wi);jv=i(tF,"TFDistilBertForQuestionAnswering"),tF.forEach(t),Pv=i(dl," forward method, overrides the "),jd=n(dl,"CODE",{});var oF=r(jd);qv=i(oF,"__call__"),oF.forEach(t),Av=i(dl," special method."),dl.forEach(t),Iv=d(Zt),k(xs.$$.fragment,Zt),Lv=d(Zt),Pd=n(Zt,"P",{});var sF=r(Pd);Sv=i(sF,"Example:"),sF.forEach(t),Nv=d(Zt),k(Qr.$$.fragment,Zt),Zt.forEach(t),Ft.forEach(t),Hp=d(o),Io=n(o,"H2",{class:!0});var Jh=r(Io);zs=n(Jh,"A",{id:!0,class:!0,href:!0});var nF=r(zs);qd=n(nF,"SPAN",{});var rF=r(qd);k(Ur.$$.fragment,rF),rF.forEach(t),nF.forEach(t),Ov=d(Jh),Ad=n(Jh,"SPAN",{});var aF=r(Ad);Wv=i(aF,"FlaxDistilBertModel"),aF.forEach(t),Jh.forEach(t),Qp=d(o),Be=n(o,"DIV",{class:!0});var pt=r(Be);k(Jr.$$.fragment,pt),Rv=d(pt),Id=n(pt,"P",{});var iF=r(Id);Hv=i(iF,"The bare DistilBert Model transformer outputting raw hidden-states without any specific head on top."),iF.forEach(t),Qv=d(pt),Vr=n(pt,"P",{});var Vh=r(Vr);Uv=i(Vh,"This model inherits from "),Ri=n(Vh,"A",{href:!0});var lF=r(Ri);Jv=i(lF,"FlaxPreTrainedModel"),lF.forEach(t),Vv=i(Vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vh.forEach(t),Kv=d(pt),Kr=n(pt,"P",{});var Kh=r(Kr);Gv=i(Kh,"This model is also a Flax Linen "),Gr=n(Kh,"A",{href:!0,rel:!0});var dF=r(Gr);Xv=i(dF,"flax.linen.Module"),dF.forEach(t),Yv=i(Kh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kh.forEach(t),Zv=d(pt),Ld=n(pt,"P",{});var cF=r(Ld);eT=i(cF,"Finally, this model supports inherent JAX features such as:"),cF.forEach(t),tT=d(pt),Bt=n(pt,"UL",{});var Us=r(Bt);Sd=n(Us,"LI",{});var pF=r(Sd);Xr=n(pF,"A",{href:!0,rel:!0});var hF=r(Xr);oT=i(hF,"Just-In-Time (JIT) compilation"),hF.forEach(t),pF.forEach(t),sT=d(Us),Nd=n(Us,"LI",{});var uF=r(Nd);Yr=n(uF,"A",{href:!0,rel:!0});var fF=r(Yr);nT=i(fF,"Automatic Differentiation"),fF.forEach(t),uF.forEach(t),rT=d(Us),Od=n(Us,"LI",{});var mF=r(Od);Zr=n(mF,"A",{href:!0,rel:!0});var gF=r(Zr);aT=i(gF,"Vectorization"),gF.forEach(t),mF.forEach(t),iT=d(Us),Wd=n(Us,"LI",{});var _F=r(Wd);ea=n(_F,"A",{href:!0,rel:!0});var vF=r(ea);lT=i(vF,"Parallelization"),vF.forEach(t),_F.forEach(t),Us.forEach(t),dT=d(pt),nt=n(pt,"DIV",{class:!0});var eo=r(nt);k(ta.$$.fragment,eo),cT=d(eo),Lo=n(eo,"P",{});var cl=r(Lo);pT=i(cl,"The "),Rd=n(cl,"CODE",{});var TF=r(Rd);hT=i(TF,"FlaxDistilBertPreTrainedModel"),TF.forEach(t),uT=i(cl,"forward method, overrides the "),Hd=n(cl,"CODE",{});var bF=r(Hd);fT=i(bF,"__call__"),bF.forEach(t),mT=i(cl," special method."),cl.forEach(t),gT=d(eo),k(Cs.$$.fragment,eo),_T=d(eo),Qd=n(eo,"P",{});var kF=r(Qd);vT=i(kF,"Example:"),kF.forEach(t),TT=d(eo),k(oa.$$.fragment,eo),eo.forEach(t),pt.forEach(t),Up=d(o),So=n(o,"H2",{class:!0});var Gh=r(So);js=n(Gh,"A",{id:!0,class:!0,href:!0});var wF=r(js);Ud=n(wF,"SPAN",{});var $F=r(Ud);k(sa.$$.fragment,$F),$F.forEach(t),wF.forEach(t),bT=d(Gh),Jd=n(Gh,"SPAN",{});var DF=r(Jd);kT=i(DF,"FlaxDistilBertForMaskedLM"),DF.forEach(t),Gh.forEach(t),Jp=d(o),Me=n(o,"DIV",{class:!0});var ht=r(Me);k(na.$$.fragment,ht),wT=d(ht),ra=n(ht,"P",{});var Xh=r(ra);$T=i(Xh,"DistilBert Model with a "),Vd=n(Xh,"CODE",{});var FF=r(Vd);DT=i(FF,"language modeling"),FF.forEach(t),FT=i(Xh," head on top."),Xh.forEach(t),yT=d(ht),aa=n(ht,"P",{});var Yh=r(aa);BT=i(Yh,"This model inherits from "),Hi=n(Yh,"A",{href:!0});var yF=r(Hi);MT=i(yF,"FlaxPreTrainedModel"),yF.forEach(t),ET=i(Yh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Yh.forEach(t),xT=d(ht),ia=n(ht,"P",{});var Zh=r(ia);zT=i(Zh,"This model is also a Flax Linen "),la=n(Zh,"A",{href:!0,rel:!0});var BF=r(la);CT=i(BF,"flax.linen.Module"),BF.forEach(t),jT=i(Zh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zh.forEach(t),PT=d(ht),Kd=n(ht,"P",{});var MF=r(Kd);qT=i(MF,"Finally, this model supports inherent JAX features such as:"),MF.forEach(t),AT=d(ht),Mt=n(ht,"UL",{});var Js=r(Mt);Gd=n(Js,"LI",{});var EF=r(Gd);da=n(EF,"A",{href:!0,rel:!0});var xF=r(da);IT=i(xF,"Just-In-Time (JIT) compilation"),xF.forEach(t),EF.forEach(t),LT=d(Js),Xd=n(Js,"LI",{});var zF=r(Xd);ca=n(zF,"A",{href:!0,rel:!0});var CF=r(ca);ST=i(CF,"Automatic Differentiation"),CF.forEach(t),zF.forEach(t),NT=d(Js),Yd=n(Js,"LI",{});var jF=r(Yd);pa=n(jF,"A",{href:!0,rel:!0});var PF=r(pa);OT=i(PF,"Vectorization"),PF.forEach(t),jF.forEach(t),WT=d(Js),Zd=n(Js,"LI",{});var qF=r(Zd);ha=n(qF,"A",{href:!0,rel:!0});var AF=r(ha);RT=i(AF,"Parallelization"),AF.forEach(t),qF.forEach(t),Js.forEach(t),HT=d(ht),rt=n(ht,"DIV",{class:!0});var to=r(rt);k(ua.$$.fragment,to),QT=d(to),No=n(to,"P",{});var pl=r(No);UT=i(pl,"The "),ec=n(pl,"CODE",{});var IF=r(ec);JT=i(IF,"FlaxDistilBertPreTrainedModel"),IF.forEach(t),VT=i(pl,"forward method, overrides the "),tc=n(pl,"CODE",{});var LF=r(tc);KT=i(LF,"__call__"),LF.forEach(t),GT=i(pl," special method."),pl.forEach(t),XT=d(to),k(Ps.$$.fragment,to),YT=d(to),oc=n(to,"P",{});var SF=r(oc);ZT=i(SF,"Example:"),SF.forEach(t),eb=d(to),k(fa.$$.fragment,to),to.forEach(t),ht.forEach(t),Vp=d(o),Oo=n(o,"H2",{class:!0});var eu=r(Oo);qs=n(eu,"A",{id:!0,class:!0,href:!0});var NF=r(qs);sc=n(NF,"SPAN",{});var OF=r(sc);k(ma.$$.fragment,OF),OF.forEach(t),NF.forEach(t),tb=d(eu),nc=n(eu,"SPAN",{});var WF=r(nc);ob=i(WF,"FlaxDistilBertForSequenceClassification"),WF.forEach(t),eu.forEach(t),Kp=d(o),Ee=n(o,"DIV",{class:!0});var ut=r(Ee);k(ga.$$.fragment,ut),sb=d(ut),rc=n(ut,"P",{});var RF=r(rc);nb=i(RF,`DistilBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),RF.forEach(t),rb=d(ut),_a=n(ut,"P",{});var tu=r(_a);ab=i(tu,"This model inherits from "),Qi=n(tu,"A",{href:!0});var HF=r(Qi);ib=i(HF,"FlaxPreTrainedModel"),HF.forEach(t),lb=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tu.forEach(t),db=d(ut),va=n(ut,"P",{});var ou=r(va);cb=i(ou,"This model is also a Flax Linen "),Ta=n(ou,"A",{href:!0,rel:!0});var QF=r(Ta);pb=i(QF,"flax.linen.Module"),QF.forEach(t),hb=i(ou,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ou.forEach(t),ub=d(ut),ac=n(ut,"P",{});var UF=r(ac);fb=i(UF,"Finally, this model supports inherent JAX features such as:"),UF.forEach(t),mb=d(ut),Et=n(ut,"UL",{});var Vs=r(Et);ic=n(Vs,"LI",{});var JF=r(ic);ba=n(JF,"A",{href:!0,rel:!0});var VF=r(ba);gb=i(VF,"Just-In-Time (JIT) compilation"),VF.forEach(t),JF.forEach(t),_b=d(Vs),lc=n(Vs,"LI",{});var KF=r(lc);ka=n(KF,"A",{href:!0,rel:!0});var GF=r(ka);vb=i(GF,"Automatic Differentiation"),GF.forEach(t),KF.forEach(t),Tb=d(Vs),dc=n(Vs,"LI",{});var XF=r(dc);wa=n(XF,"A",{href:!0,rel:!0});var YF=r(wa);bb=i(YF,"Vectorization"),YF.forEach(t),XF.forEach(t),kb=d(Vs),cc=n(Vs,"LI",{});var ZF=r(cc);$a=n(ZF,"A",{href:!0,rel:!0});var e2=r($a);wb=i(e2,"Parallelization"),e2.forEach(t),ZF.forEach(t),Vs.forEach(t),$b=d(ut),at=n(ut,"DIV",{class:!0});var oo=r(at);k(Da.$$.fragment,oo),Db=d(oo),Wo=n(oo,"P",{});var hl=r(Wo);Fb=i(hl,"The "),pc=n(hl,"CODE",{});var t2=r(pc);yb=i(t2,"FlaxDistilBertPreTrainedModel"),t2.forEach(t),Bb=i(hl,"forward method, overrides the "),hc=n(hl,"CODE",{});var o2=r(hc);Mb=i(o2,"__call__"),o2.forEach(t),Eb=i(hl," special method."),hl.forEach(t),xb=d(oo),k(As.$$.fragment,oo),zb=d(oo),uc=n(oo,"P",{});var s2=r(uc);Cb=i(s2,"Example:"),s2.forEach(t),jb=d(oo),k(Fa.$$.fragment,oo),oo.forEach(t),ut.forEach(t),Gp=d(o),Ro=n(o,"H2",{class:!0});var su=r(Ro);Is=n(su,"A",{id:!0,class:!0,href:!0});var n2=r(Is);fc=n(n2,"SPAN",{});var r2=r(fc);k(ya.$$.fragment,r2),r2.forEach(t),n2.forEach(t),Pb=d(su),mc=n(su,"SPAN",{});var a2=r(mc);qb=i(a2,"FlaxDistilBertForMultipleChoice"),a2.forEach(t),su.forEach(t),Xp=d(o),xe=n(o,"DIV",{class:!0});var ft=r(xe);k(Ba.$$.fragment,ft),Ab=d(ft),gc=n(ft,"P",{});var i2=r(gc);Ib=i(i2,`DistilBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),i2.forEach(t),Lb=d(ft),Ma=n(ft,"P",{});var nu=r(Ma);Sb=i(nu,"This model inherits from "),Ui=n(nu,"A",{href:!0});var l2=r(Ui);Nb=i(l2,"FlaxPreTrainedModel"),l2.forEach(t),Ob=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nu.forEach(t),Wb=d(ft),Ea=n(ft,"P",{});var ru=r(Ea);Rb=i(ru,"This model is also a Flax Linen "),xa=n(ru,"A",{href:!0,rel:!0});var d2=r(xa);Hb=i(d2,"flax.linen.Module"),d2.forEach(t),Qb=i(ru,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ru.forEach(t),Ub=d(ft),_c=n(ft,"P",{});var c2=r(_c);Jb=i(c2,"Finally, this model supports inherent JAX features such as:"),c2.forEach(t),Vb=d(ft),xt=n(ft,"UL",{});var Ks=r(xt);vc=n(Ks,"LI",{});var p2=r(vc);za=n(p2,"A",{href:!0,rel:!0});var h2=r(za);Kb=i(h2,"Just-In-Time (JIT) compilation"),h2.forEach(t),p2.forEach(t),Gb=d(Ks),Tc=n(Ks,"LI",{});var u2=r(Tc);Ca=n(u2,"A",{href:!0,rel:!0});var f2=r(Ca);Xb=i(f2,"Automatic Differentiation"),f2.forEach(t),u2.forEach(t),Yb=d(Ks),bc=n(Ks,"LI",{});var m2=r(bc);ja=n(m2,"A",{href:!0,rel:!0});var g2=r(ja);Zb=i(g2,"Vectorization"),g2.forEach(t),m2.forEach(t),ek=d(Ks),kc=n(Ks,"LI",{});var _2=r(kc);Pa=n(_2,"A",{href:!0,rel:!0});var v2=r(Pa);tk=i(v2,"Parallelization"),v2.forEach(t),_2.forEach(t),Ks.forEach(t),ok=d(ft),it=n(ft,"DIV",{class:!0});var so=r(it);k(qa.$$.fragment,so),sk=d(so),Ho=n(so,"P",{});var ul=r(Ho);nk=i(ul,"The "),wc=n(ul,"CODE",{});var T2=r(wc);rk=i(T2,"FlaxDistilBertPreTrainedModel"),T2.forEach(t),ak=i(ul,"forward method, overrides the "),$c=n(ul,"CODE",{});var b2=r($c);ik=i(b2,"__call__"),b2.forEach(t),lk=i(ul," special method."),ul.forEach(t),dk=d(so),k(Ls.$$.fragment,so),ck=d(so),Dc=n(so,"P",{});var k2=r(Dc);pk=i(k2,"Example:"),k2.forEach(t),hk=d(so),k(Aa.$$.fragment,so),so.forEach(t),ft.forEach(t),Yp=d(o),Qo=n(o,"H2",{class:!0});var au=r(Qo);Ss=n(au,"A",{id:!0,class:!0,href:!0});var w2=r(Ss);Fc=n(w2,"SPAN",{});var $2=r(Fc);k(Ia.$$.fragment,$2),$2.forEach(t),w2.forEach(t),uk=d(au),yc=n(au,"SPAN",{});var D2=r(yc);fk=i(D2,"FlaxDistilBertForTokenClassification"),D2.forEach(t),au.forEach(t),Zp=d(o),ze=n(o,"DIV",{class:!0});var mt=r(ze);k(La.$$.fragment,mt),mk=d(mt),Bc=n(mt,"P",{});var F2=r(Bc);gk=i(F2,`DistilBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),F2.forEach(t),_k=d(mt),Sa=n(mt,"P",{});var iu=r(Sa);vk=i(iu,"This model inherits from "),Ji=n(iu,"A",{href:!0});var y2=r(Ji);Tk=i(y2,"FlaxPreTrainedModel"),y2.forEach(t),bk=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),kk=d(mt),Na=n(mt,"P",{});var lu=r(Na);wk=i(lu,"This model is also a Flax Linen "),Oa=n(lu,"A",{href:!0,rel:!0});var B2=r(Oa);$k=i(B2,"flax.linen.Module"),B2.forEach(t),Dk=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),Fk=d(mt),Mc=n(mt,"P",{});var M2=r(Mc);yk=i(M2,"Finally, this model supports inherent JAX features such as:"),M2.forEach(t),Bk=d(mt),zt=n(mt,"UL",{});var Gs=r(zt);Ec=n(Gs,"LI",{});var E2=r(Ec);Wa=n(E2,"A",{href:!0,rel:!0});var x2=r(Wa);Mk=i(x2,"Just-In-Time (JIT) compilation"),x2.forEach(t),E2.forEach(t),Ek=d(Gs),xc=n(Gs,"LI",{});var z2=r(xc);Ra=n(z2,"A",{href:!0,rel:!0});var C2=r(Ra);xk=i(C2,"Automatic Differentiation"),C2.forEach(t),z2.forEach(t),zk=d(Gs),zc=n(Gs,"LI",{});var j2=r(zc);Ha=n(j2,"A",{href:!0,rel:!0});var P2=r(Ha);Ck=i(P2,"Vectorization"),P2.forEach(t),j2.forEach(t),jk=d(Gs),Cc=n(Gs,"LI",{});var q2=r(Cc);Qa=n(q2,"A",{href:!0,rel:!0});var A2=r(Qa);Pk=i(A2,"Parallelization"),A2.forEach(t),q2.forEach(t),Gs.forEach(t),qk=d(mt),lt=n(mt,"DIV",{class:!0});var no=r(lt);k(Ua.$$.fragment,no),Ak=d(no),Uo=n(no,"P",{});var fl=r(Uo);Ik=i(fl,"The "),jc=n(fl,"CODE",{});var I2=r(jc);Lk=i(I2,"FlaxDistilBertPreTrainedModel"),I2.forEach(t),Sk=i(fl,"forward method, overrides the "),Pc=n(fl,"CODE",{});var L2=r(Pc);Nk=i(L2,"__call__"),L2.forEach(t),Ok=i(fl," special method."),fl.forEach(t),Wk=d(no),k(Ns.$$.fragment,no),Rk=d(no),qc=n(no,"P",{});var S2=r(qc);Hk=i(S2,"Example:"),S2.forEach(t),Qk=d(no),k(Ja.$$.fragment,no),no.forEach(t),mt.forEach(t),eh=d(o),Jo=n(o,"H2",{class:!0});var du=r(Jo);Os=n(du,"A",{id:!0,class:!0,href:!0});var N2=r(Os);Ac=n(N2,"SPAN",{});var O2=r(Ac);k(Va.$$.fragment,O2),O2.forEach(t),N2.forEach(t),Uk=d(du),Ic=n(du,"SPAN",{});var W2=r(Ic);Jk=i(W2,"FlaxDistilBertForQuestionAnswering"),W2.forEach(t),du.forEach(t),th=d(o),Ce=n(o,"DIV",{class:!0});var gt=r(Ce);k(Ka.$$.fragment,gt),Vk=d(gt),Vo=n(gt,"P",{});var ml=r(Vo);Kk=i(ml,`DistilBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Lc=n(ml,"CODE",{});var R2=r(Lc);Gk=i(R2,"span start logits"),R2.forEach(t),Xk=i(ml," and "),Sc=n(ml,"CODE",{});var H2=r(Sc);Yk=i(H2,"span end logits"),H2.forEach(t),Zk=i(ml,")."),ml.forEach(t),ew=d(gt),Ga=n(gt,"P",{});var cu=r(Ga);tw=i(cu,"This model inherits from "),Vi=n(cu,"A",{href:!0});var Q2=r(Vi);ow=i(Q2,"FlaxPreTrainedModel"),Q2.forEach(t),sw=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),nw=d(gt),Xa=n(gt,"P",{});var pu=r(Xa);rw=i(pu,"This model is also a Flax Linen "),Ya=n(pu,"A",{href:!0,rel:!0});var U2=r(Ya);aw=i(U2,"flax.linen.Module"),U2.forEach(t),iw=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),lw=d(gt),Nc=n(gt,"P",{});var J2=r(Nc);dw=i(J2,"Finally, this model supports inherent JAX features such as:"),J2.forEach(t),cw=d(gt),Ct=n(gt,"UL",{});var Xs=r(Ct);Oc=n(Xs,"LI",{});var V2=r(Oc);Za=n(V2,"A",{href:!0,rel:!0});var K2=r(Za);pw=i(K2,"Just-In-Time (JIT) compilation"),K2.forEach(t),V2.forEach(t),hw=d(Xs),Wc=n(Xs,"LI",{});var G2=r(Wc);ei=n(G2,"A",{href:!0,rel:!0});var X2=r(ei);uw=i(X2,"Automatic Differentiation"),X2.forEach(t),G2.forEach(t),fw=d(Xs),Rc=n(Xs,"LI",{});var Y2=r(Rc);ti=n(Y2,"A",{href:!0,rel:!0});var Z2=r(ti);mw=i(Z2,"Vectorization"),Z2.forEach(t),Y2.forEach(t),gw=d(Xs),Hc=n(Xs,"LI",{});var ey=r(Hc);oi=n(ey,"A",{href:!0,rel:!0});var ty=r(oi);_w=i(ty,"Parallelization"),ty.forEach(t),ey.forEach(t),Xs.forEach(t),vw=d(gt),dt=n(gt,"DIV",{class:!0});var ro=r(dt);k(si.$$.fragment,ro),Tw=d(ro),Ko=n(ro,"P",{});var gl=r(Ko);bw=i(gl,"The "),Qc=n(gl,"CODE",{});var oy=r(Qc);kw=i(oy,"FlaxDistilBertPreTrainedModel"),oy.forEach(t),ww=i(gl,"forward method, overrides the "),Uc=n(gl,"CODE",{});var sy=r(Uc);$w=i(sy,"__call__"),sy.forEach(t),Dw=i(gl," special method."),gl.forEach(t),Fw=d(ro),k(Ws.$$.fragment,ro),yw=d(ro),Jc=n(ro,"P",{});var ny=r(Jc);Bw=i(ny,"Example:"),ny.forEach(t),Mw=d(ro),k(ni.$$.fragment,ro),ro.forEach(t),gt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(Py)),c(v,"id","distilbert"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#distilbert"),c(g,"class","relative group"),c(G,"id","overview"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#overview"),c(E,"class","relative group"),c(Y,"href","https://medium.com/huggingface/distilbert-8cf3380435b5"),c(Y,"rel","nofollow"),c(z,"href","https://arxiv.org/abs/1910.01108"),c(z,"rel","nofollow"),c(Ys,"href","https://huggingface.co/victorsanh"),c(Ys,"rel","nofollow"),c(Zs,"href","https://huggingface.co/kamalkraj"),c(Zs,"rel","nofollow"),c(en,"href","https://github.com/huggingface/transformers/tree/master/examples/research_projects/distillation"),c(en,"rel","nofollow"),c(Go,"id","transformers.DistilBertConfig"),c(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Go,"href","#transformers.DistilBertConfig"),c(ao,"class","relative group"),c(di,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertModel"),c(ci,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(sn,"href","https://huggingface.co/distilbert-base-uncased"),c(sn,"rel","nofollow"),c(pi,"href","/docs/transformers/pr_15811/en/main_classes/configuration#transformers.PretrainedConfig"),c(hi,"href","/docs/transformers/pr_15811/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ne,"class","docstring"),c(Xo,"id","transformers.DistilBertTokenizer"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.DistilBertTokenizer"),c(lo,"class","relative group"),c(ui,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizer"),c(fi,"href","/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer"),c(mi,"href","/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizer"),c(_t,"class","docstring"),c(Zo,"id","transformers.DistilBertTokenizerFast"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.DistilBertTokenizerFast"),c(co,"class","relative group"),c(gi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertTokenizerFast"),c(_i,"href","/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizerFast"),c(vi,"href","/docs/transformers/pr_15811/en/model_doc/bert#transformers.BertTokenizerFast"),c(vt,"class","docstring"),c(ts,"id","transformers.DistilBertModel"),c(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ts,"href","#transformers.DistilBertModel"),c(po,"class","relative group"),c(Ti,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(_n,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(_n,"rel","nofollow"),c(bi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertModel"),c(Je,"class","docstring"),c(Oe,"class","docstring"),c(ss,"id","transformers.DistilBertForMaskedLM"),c(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ss,"href","#transformers.DistilBertForMaskedLM"),c(uo,"class","relative group"),c(ki,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fn,"rel","nofollow"),c(wi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForMaskedLM"),c(Ve,"class","docstring"),c(We,"class","docstring"),c(rs,"id","transformers.DistilBertForSequenceClassification"),c(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rs,"href","#transformers.DistilBertForSequenceClassification"),c(mo,"class","relative group"),c($i,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cn,"rel","nofollow"),c(Di,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForSequenceClassification"),c(je,"class","docstring"),c(Re,"class","docstring"),c(is,"id","transformers.DistilBertForMultipleChoice"),c(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(is,"href","#transformers.DistilBertForMultipleChoice"),c(_o,"class","relative group"),c(Fi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(yi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForMultipleChoice"),c(Ke,"class","docstring"),c(He,"class","docstring"),c(ds,"id","transformers.DistilBertForTokenClassification"),c(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ds,"href","#transformers.DistilBertForTokenClassification"),c(To,"class","relative group"),c(Bi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Jn,"rel","nofollow"),c(Mi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForTokenClassification"),c(Ge,"class","docstring"),c(Qe,"class","docstring"),c(ps,"id","transformers.DistilBertForQuestionAnswering"),c(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ps,"href","#transformers.DistilBertForQuestionAnswering"),c(ko,"class","relative group"),c(Ei,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.PreTrainedModel"),c(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(er,"rel","nofollow"),c(xi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.DistilBertForQuestionAnswering"),c(Xe,"class","docstring"),c(Ue,"class","docstring"),c(us,"id","transformers.TFDistilBertModel"),c(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(us,"href","#transformers.TFDistilBertModel"),c(Do,"class","relative group"),c(zi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(Ci,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertModel"),c(Ye,"class","docstring"),c(Pe,"class","docstring"),c(gs,"id","transformers.TFDistilBertForMaskedLM"),c(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gs,"href","#transformers.TFDistilBertForMaskedLM"),c(yo,"class","relative group"),c(ji,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(mr,"rel","nofollow"),c(Pi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertForMaskedLM"),c(Ze,"class","docstring"),c(qe,"class","docstring"),c(Ts,"id","transformers.TFDistilBertForSequenceClassification"),c(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ts,"href","#transformers.TFDistilBertForSequenceClassification"),c(Mo,"class","relative group"),c(qi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(Ai,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertForSequenceClassification"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(ws,"id","transformers.TFDistilBertForMultipleChoice"),c(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ws,"href","#transformers.TFDistilBertForMultipleChoice"),c(xo,"class","relative group"),c(Ii,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Er,"rel","nofollow"),c(Li,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertForMultipleChoice"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(Fs,"id","transformers.TFDistilBertForTokenClassification"),c(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fs,"href","#transformers.TFDistilBertForTokenClassification"),c(Co,"class","relative group"),c(Si,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ar,"rel","nofollow"),c(Ni,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertForTokenClassification"),c(ot,"class","docstring"),c(Le,"class","docstring"),c(Ms,"id","transformers.TFDistilBertForQuestionAnswering"),c(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ms,"href","#transformers.TFDistilBertForQuestionAnswering"),c(Po,"class","relative group"),c(Oi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rr,"rel","nofollow"),c(Wi,"href","/docs/transformers/pr_15811/en/model_doc/distilbert#transformers.TFDistilBertForQuestionAnswering"),c(st,"class","docstring"),c(Se,"class","docstring"),c(zs,"id","transformers.FlaxDistilBertModel"),c(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zs,"href","#transformers.FlaxDistilBertModel"),c(Io,"class","relative group"),c(Ri,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gr,"rel","nofollow"),c(Xr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Xr,"rel","nofollow"),c(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Yr,"rel","nofollow"),c(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Zr,"rel","nofollow"),c(ea,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ea,"rel","nofollow"),c(nt,"class","docstring"),c(Be,"class","docstring"),c(js,"id","transformers.FlaxDistilBertForMaskedLM"),c(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(js,"href","#transformers.FlaxDistilBertForMaskedLM"),c(So,"class","relative group"),c(Hi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(la,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(la,"rel","nofollow"),c(da,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(da,"rel","nofollow"),c(ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ca,"rel","nofollow"),c(pa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(pa,"rel","nofollow"),c(ha,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ha,"rel","nofollow"),c(rt,"class","docstring"),c(Me,"class","docstring"),c(qs,"id","transformers.FlaxDistilBertForSequenceClassification"),c(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qs,"href","#transformers.FlaxDistilBertForSequenceClassification"),c(Oo,"class","relative group"),c(Qi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ta,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ta,"rel","nofollow"),c(ba,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ba,"rel","nofollow"),c(ka,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ka,"rel","nofollow"),c(wa,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(wa,"rel","nofollow"),c($a,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c($a,"rel","nofollow"),c(at,"class","docstring"),c(Ee,"class","docstring"),c(Is,"id","transformers.FlaxDistilBertForMultipleChoice"),c(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Is,"href","#transformers.FlaxDistilBertForMultipleChoice"),c(Ro,"class","relative group"),c(Ui,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xa,"rel","nofollow"),c(za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(za,"rel","nofollow"),c(Ca,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ca,"rel","nofollow"),c(ja,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ja,"rel","nofollow"),c(Pa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Pa,"rel","nofollow"),c(it,"class","docstring"),c(xe,"class","docstring"),c(Ss,"id","transformers.FlaxDistilBertForTokenClassification"),c(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ss,"href","#transformers.FlaxDistilBertForTokenClassification"),c(Qo,"class","relative group"),c(Ji,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Oa,"rel","nofollow"),c(Wa,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Wa,"rel","nofollow"),c(Ra,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ra,"rel","nofollow"),c(Ha,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ha,"rel","nofollow"),c(Qa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Qa,"rel","nofollow"),c(lt,"class","docstring"),c(ze,"class","docstring"),c(Os,"id","transformers.FlaxDistilBertForQuestionAnswering"),c(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Os,"href","#transformers.FlaxDistilBertForQuestionAnswering"),c(Jo,"class","relative group"),c(Vi,"href","/docs/transformers/pr_15811/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ya,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Ya,"rel","nofollow"),c(Za,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Za,"rel","nofollow"),c(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ei,"rel","nofollow"),c(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ti,"rel","nofollow"),c(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(oi,"rel","nofollow"),c(dt,"class","docstring"),c(Ce,"class","docstring")},m(o,m){e(document.head,p),u(o,y,m),u(o,g,m),e(g,v),e(v,T),w(_,T,null),e(g,f),e(g,B),e(B,de),u(o,J,m),u(o,E,m),e(E,G),e(G,N),w(X,N,null),e(E,ce),e(E,O),e(O,pe),u(o,re,m),u(o,L,m),e(L,q),e(L,Y),e(Y,V),e(L,x),e(L,z),e(z,he),e(L,W),e(L,oe),e(oe,ue),e(L,R),u(o,ae,m),u(o,ee,m),e(ee,A),u(o,ie,m),u(o,S,m),e(S,se),e(se,fe),u(o,P,m),u(o,te,m),e(te,H),u(o,le,m),u(o,h,m),e(h,M),e(M,K),e(M,ge),e(ge,Te),e(M,I),e(M,_e),e(_e,be),e(M,ke),e(M,j),e(j,Q),e(M,we),e(h,$e),e(h,Z),e(Z,De),e(Z,ne),e(ne,Fe),e(Z,hu),u(o,up,m),u(o,Tt,m),e(Tt,uu),e(Tt,Ys),e(Ys,fu),e(Tt,mu),e(Tt,Zs),e(Zs,gu),e(Tt,_u),e(Tt,en),e(en,vu),e(Tt,Tu),u(o,fp,m),u(o,ao,m),e(ao,Go),e(Go,_l),w(tn,_l,null),e(ao,bu),e(ao,vl),e(vl,ku),u(o,mp,m),u(o,Ne,m),w(on,Ne,null),e(Ne,wu),e(Ne,yt),e(yt,$u),e(yt,di),e(di,Du),e(yt,Fu),e(yt,ci),e(ci,yu),e(yt,Bu),e(yt,sn),e(sn,Mu),e(yt,Eu),e(Ne,xu),e(Ne,io),e(io,zu),e(io,pi),e(pi,Cu),e(io,ju),e(io,hi),e(hi,Pu),e(io,qu),e(Ne,Au),e(Ne,Tl),e(Tl,Iu),e(Ne,Lu),w(nn,Ne,null),u(o,gp,m),u(o,lo,m),e(lo,Xo),e(Xo,bl),w(rn,bl,null),e(lo,Su),e(lo,kl),e(kl,Nu),u(o,_p,m),u(o,_t,m),w(an,_t,null),e(_t,Ou),e(_t,wl),e(wl,Wu),e(_t,Ru),e(_t,Yo),e(Yo,ui),e(ui,Hu),e(Yo,Qu),e(Yo,fi),e(fi,Uu),e(Yo,Ju),e(_t,Vu),e(_t,ln),e(ln,Ku),e(ln,mi),e(mi,Gu),e(ln,Xu),u(o,vp,m),u(o,co,m),e(co,Zo),e(Zo,$l),w(dn,$l,null),e(co,Yu),e(co,Dl),e(Dl,Zu),u(o,Tp,m),u(o,vt,m),w(cn,vt,null),e(vt,ef),e(vt,pn),e(pn,tf),e(pn,Fl),e(Fl,of),e(pn,sf),e(vt,nf),e(vt,es),e(es,gi),e(gi,rf),e(es,af),e(es,_i),e(_i,lf),e(es,df),e(vt,cf),e(vt,hn),e(hn,pf),e(hn,vi),e(vi,hf),e(hn,uf),u(o,bp,m),u(o,po,m),e(po,ts),e(ts,yl),w(un,yl,null),e(po,ff),e(po,Bl),e(Bl,mf),u(o,kp,m),u(o,Oe,m),w(fn,Oe,null),e(Oe,gf),e(Oe,Ml),e(Ml,_f),e(Oe,vf),e(Oe,mn),e(mn,Tf),e(mn,Ti),e(Ti,bf),e(mn,kf),e(Oe,wf),e(Oe,gn),e(gn,$f),e(gn,_n),e(_n,Df),e(gn,Ff),e(Oe,yf),e(Oe,Je),w(vn,Je,null),e(Je,Bf),e(Je,ho),e(ho,Mf),e(ho,bi),e(bi,Ef),e(ho,xf),e(ho,El),e(El,zf),e(ho,Cf),e(Je,jf),w(os,Je,null),e(Je,Pf),e(Je,xl),e(xl,qf),e(Je,Af),w(Tn,Je,null),u(o,wp,m),u(o,uo,m),e(uo,ss),e(ss,zl),w(bn,zl,null),e(uo,If),e(uo,Cl),e(Cl,Lf),u(o,$p,m),u(o,We,m),w(kn,We,null),e(We,Sf),e(We,wn),e(wn,Nf),e(wn,jl),e(jl,Of),e(wn,Wf),e(We,Rf),e(We,$n),e($n,Hf),e($n,ki),e(ki,Qf),e($n,Uf),e(We,Jf),e(We,Dn),e(Dn,Vf),e(Dn,Fn),e(Fn,Kf),e(Dn,Gf),e(We,Xf),e(We,Ve),w(yn,Ve,null),e(Ve,Yf),e(Ve,fo),e(fo,Zf),e(fo,wi),e(wi,em),e(fo,tm),e(fo,Pl),e(Pl,om),e(fo,sm),e(Ve,nm),w(ns,Ve,null),e(Ve,rm),e(Ve,ql),e(ql,am),e(Ve,im),w(Bn,Ve,null),u(o,Dp,m),u(o,mo,m),e(mo,rs),e(rs,Al),w(Mn,Al,null),e(mo,lm),e(mo,Il),e(Il,dm),u(o,Fp,m),u(o,Re,m),w(En,Re,null),e(Re,cm),e(Re,Ll),e(Ll,pm),e(Re,hm),e(Re,xn),e(xn,um),e(xn,$i),e($i,fm),e(xn,mm),e(Re,gm),e(Re,zn),e(zn,_m),e(zn,Cn),e(Cn,vm),e(zn,Tm),e(Re,bm),e(Re,je),w(jn,je,null),e(je,km),e(je,go),e(go,wm),e(go,Di),e(Di,$m),e(go,Dm),e(go,Sl),e(Sl,Fm),e(go,ym),e(je,Bm),w(as,je,null),e(je,Mm),e(je,Nl),e(Nl,Em),e(je,xm),w(Pn,je,null),e(je,zm),e(je,Ol),e(Ol,Cm),e(je,jm),w(qn,je,null),u(o,yp,m),u(o,_o,m),e(_o,is),e(is,Wl),w(An,Wl,null),e(_o,Pm),e(_o,Rl),e(Rl,qm),u(o,Bp,m),u(o,He,m),w(In,He,null),e(He,Am),e(He,Hl),e(Hl,Im),e(He,Lm),e(He,Ln),e(Ln,Sm),e(Ln,Fi),e(Fi,Nm),e(Ln,Om),e(He,Wm),e(He,Sn),e(Sn,Rm),e(Sn,Nn),e(Nn,Hm),e(Sn,Qm),e(He,Um),e(He,Ke),w(On,Ke,null),e(Ke,Jm),e(Ke,vo),e(vo,Vm),e(vo,yi),e(yi,Km),e(vo,Gm),e(vo,Ql),e(Ql,Xm),e(vo,Ym),e(Ke,Zm),w(ls,Ke,null),e(Ke,eg),e(Ke,Ul),e(Ul,tg),e(Ke,og),w(Wn,Ke,null),u(o,Mp,m),u(o,To,m),e(To,ds),e(ds,Jl),w(Rn,Jl,null),e(To,sg),e(To,Vl),e(Vl,ng),u(o,Ep,m),u(o,Qe,m),w(Hn,Qe,null),e(Qe,rg),e(Qe,Kl),e(Kl,ag),e(Qe,ig),e(Qe,Qn),e(Qn,lg),e(Qn,Bi),e(Bi,dg),e(Qn,cg),e(Qe,pg),e(Qe,Un),e(Un,hg),e(Un,Jn),e(Jn,ug),e(Un,fg),e(Qe,mg),e(Qe,Ge),w(Vn,Ge,null),e(Ge,gg),e(Ge,bo),e(bo,_g),e(bo,Mi),e(Mi,vg),e(bo,Tg),e(bo,Gl),e(Gl,bg),e(bo,kg),e(Ge,wg),w(cs,Ge,null),e(Ge,$g),e(Ge,Xl),e(Xl,Dg),e(Ge,Fg),w(Kn,Ge,null),u(o,xp,m),u(o,ko,m),e(ko,ps),e(ps,Yl),w(Gn,Yl,null),e(ko,yg),e(ko,Zl),e(Zl,Bg),u(o,zp,m),u(o,Ue,m),w(Xn,Ue,null),e(Ue,Mg),e(Ue,wo),e(wo,Eg),e(wo,ed),e(ed,xg),e(wo,zg),e(wo,td),e(td,Cg),e(wo,jg),e(Ue,Pg),e(Ue,Yn),e(Yn,qg),e(Yn,Ei),e(Ei,Ag),e(Yn,Ig),e(Ue,Lg),e(Ue,Zn),e(Zn,Sg),e(Zn,er),e(er,Ng),e(Zn,Og),e(Ue,Wg),e(Ue,Xe),w(tr,Xe,null),e(Xe,Rg),e(Xe,$o),e($o,Hg),e($o,xi),e(xi,Qg),e($o,Ug),e($o,od),e(od,Jg),e($o,Vg),e(Xe,Kg),w(hs,Xe,null),e(Xe,Gg),e(Xe,sd),e(sd,Xg),e(Xe,Yg),w(or,Xe,null),u(o,Cp,m),u(o,Do,m),e(Do,us),e(us,nd),w(sr,nd,null),e(Do,Zg),e(Do,rd),e(rd,e_),u(o,jp,m),u(o,Pe,m),w(nr,Pe,null),e(Pe,t_),e(Pe,ad),e(ad,o_),e(Pe,s_),e(Pe,rr),e(rr,n_),e(rr,zi),e(zi,r_),e(rr,a_),e(Pe,i_),e(Pe,ar),e(ar,l_),e(ar,ir),e(ir,d_),e(ar,c_),e(Pe,p_),w(fs,Pe,null),e(Pe,h_),e(Pe,Ye),w(lr,Ye,null),e(Ye,u_),e(Ye,Fo),e(Fo,f_),e(Fo,Ci),e(Ci,m_),e(Fo,g_),e(Fo,id),e(id,__),e(Fo,v_),e(Ye,T_),w(ms,Ye,null),e(Ye,b_),e(Ye,ld),e(ld,k_),e(Ye,w_),w(dr,Ye,null),u(o,Pp,m),u(o,yo,m),e(yo,gs),e(gs,dd),w(cr,dd,null),e(yo,$_),e(yo,cd),e(cd,D_),u(o,qp,m),u(o,qe,m),w(pr,qe,null),e(qe,F_),e(qe,hr),e(hr,y_),e(hr,pd),e(pd,B_),e(hr,M_),e(qe,E_),e(qe,ur),e(ur,x_),e(ur,ji),e(ji,z_),e(ur,C_),e(qe,j_),e(qe,fr),e(fr,P_),e(fr,mr),e(mr,q_),e(fr,A_),e(qe,I_),w(_s,qe,null),e(qe,L_),e(qe,Ze),w(gr,Ze,null),e(Ze,S_),e(Ze,Bo),e(Bo,N_),e(Bo,Pi),e(Pi,O_),e(Bo,W_),e(Bo,hd),e(hd,R_),e(Bo,H_),e(Ze,Q_),w(vs,Ze,null),e(Ze,U_),e(Ze,ud),e(ud,J_),e(Ze,V_),w(_r,Ze,null),u(o,Ap,m),u(o,Mo,m),e(Mo,Ts),e(Ts,fd),w(vr,fd,null),e(Mo,K_),e(Mo,md),e(md,G_),u(o,Ip,m),u(o,Ae,m),w(Tr,Ae,null),e(Ae,X_),e(Ae,gd),e(gd,Y_),e(Ae,Z_),e(Ae,br),e(br,e1),e(br,qi),e(qi,t1),e(br,o1),e(Ae,s1),e(Ae,kr),e(kr,n1),e(kr,wr),e(wr,r1),e(kr,a1),e(Ae,i1),w(bs,Ae,null),e(Ae,l1),e(Ae,et),w($r,et,null),e(et,d1),e(et,Eo),e(Eo,c1),e(Eo,Ai),e(Ai,p1),e(Eo,h1),e(Eo,_d),e(_d,u1),e(Eo,f1),e(et,m1),w(ks,et,null),e(et,g1),e(et,vd),e(vd,_1),e(et,v1),w(Dr,et,null),u(o,Lp,m),u(o,xo,m),e(xo,ws),e(ws,Td),w(Fr,Td,null),e(xo,T1),e(xo,bd),e(bd,b1),u(o,Sp,m),u(o,Ie,m),w(yr,Ie,null),e(Ie,k1),e(Ie,kd),e(kd,w1),e(Ie,$1),e(Ie,Br),e(Br,D1),e(Br,Ii),e(Ii,F1),e(Br,y1),e(Ie,B1),e(Ie,Mr),e(Mr,M1),e(Mr,Er),e(Er,E1),e(Mr,x1),e(Ie,z1),w($s,Ie,null),e(Ie,C1),e(Ie,tt),w(xr,tt,null),e(tt,j1),e(tt,zo),e(zo,P1),e(zo,Li),e(Li,q1),e(zo,A1),e(zo,wd),e(wd,I1),e(zo,L1),e(tt,S1),w(Ds,tt,null),e(tt,N1),e(tt,$d),e($d,O1),e(tt,W1),w(zr,tt,null),u(o,Np,m),u(o,Co,m),e(Co,Fs),e(Fs,Dd),w(Cr,Dd,null),e(Co,R1),e(Co,Fd),e(Fd,H1),u(o,Op,m),u(o,Le,m),w(jr,Le,null),e(Le,Q1),e(Le,yd),e(yd,U1),e(Le,J1),e(Le,Pr),e(Pr,V1),e(Pr,Si),e(Si,K1),e(Pr,G1),e(Le,X1),e(Le,qr),e(qr,Y1),e(qr,Ar),e(Ar,Z1),e(qr,ev),e(Le,tv),w(ys,Le,null),e(Le,ov),e(Le,ot),w(Ir,ot,null),e(ot,sv),e(ot,jo),e(jo,nv),e(jo,Ni),e(Ni,rv),e(jo,av),e(jo,Bd),e(Bd,iv),e(jo,lv),e(ot,dv),w(Bs,ot,null),e(ot,cv),e(ot,Md),e(Md,pv),e(ot,hv),w(Lr,ot,null),u(o,Wp,m),u(o,Po,m),e(Po,Ms),e(Ms,Ed),w(Sr,Ed,null),e(Po,uv),e(Po,xd),e(xd,fv),u(o,Rp,m),u(o,Se,m),w(Nr,Se,null),e(Se,mv),e(Se,qo),e(qo,gv),e(qo,zd),e(zd,_v),e(qo,vv),e(qo,Cd),e(Cd,Tv),e(qo,bv),e(Se,kv),e(Se,Or),e(Or,wv),e(Or,Oi),e(Oi,$v),e(Or,Dv),e(Se,Fv),e(Se,Wr),e(Wr,yv),e(Wr,Rr),e(Rr,Bv),e(Wr,Mv),e(Se,Ev),w(Es,Se,null),e(Se,xv),e(Se,st),w(Hr,st,null),e(st,zv),e(st,Ao),e(Ao,Cv),e(Ao,Wi),e(Wi,jv),e(Ao,Pv),e(Ao,jd),e(jd,qv),e(Ao,Av),e(st,Iv),w(xs,st,null),e(st,Lv),e(st,Pd),e(Pd,Sv),e(st,Nv),w(Qr,st,null),u(o,Hp,m),u(o,Io,m),e(Io,zs),e(zs,qd),w(Ur,qd,null),e(Io,Ov),e(Io,Ad),e(Ad,Wv),u(o,Qp,m),u(o,Be,m),w(Jr,Be,null),e(Be,Rv),e(Be,Id),e(Id,Hv),e(Be,Qv),e(Be,Vr),e(Vr,Uv),e(Vr,Ri),e(Ri,Jv),e(Vr,Vv),e(Be,Kv),e(Be,Kr),e(Kr,Gv),e(Kr,Gr),e(Gr,Xv),e(Kr,Yv),e(Be,Zv),e(Be,Ld),e(Ld,eT),e(Be,tT),e(Be,Bt),e(Bt,Sd),e(Sd,Xr),e(Xr,oT),e(Bt,sT),e(Bt,Nd),e(Nd,Yr),e(Yr,nT),e(Bt,rT),e(Bt,Od),e(Od,Zr),e(Zr,aT),e(Bt,iT),e(Bt,Wd),e(Wd,ea),e(ea,lT),e(Be,dT),e(Be,nt),w(ta,nt,null),e(nt,cT),e(nt,Lo),e(Lo,pT),e(Lo,Rd),e(Rd,hT),e(Lo,uT),e(Lo,Hd),e(Hd,fT),e(Lo,mT),e(nt,gT),w(Cs,nt,null),e(nt,_T),e(nt,Qd),e(Qd,vT),e(nt,TT),w(oa,nt,null),u(o,Up,m),u(o,So,m),e(So,js),e(js,Ud),w(sa,Ud,null),e(So,bT),e(So,Jd),e(Jd,kT),u(o,Jp,m),u(o,Me,m),w(na,Me,null),e(Me,wT),e(Me,ra),e(ra,$T),e(ra,Vd),e(Vd,DT),e(ra,FT),e(Me,yT),e(Me,aa),e(aa,BT),e(aa,Hi),e(Hi,MT),e(aa,ET),e(Me,xT),e(Me,ia),e(ia,zT),e(ia,la),e(la,CT),e(ia,jT),e(Me,PT),e(Me,Kd),e(Kd,qT),e(Me,AT),e(Me,Mt),e(Mt,Gd),e(Gd,da),e(da,IT),e(Mt,LT),e(Mt,Xd),e(Xd,ca),e(ca,ST),e(Mt,NT),e(Mt,Yd),e(Yd,pa),e(pa,OT),e(Mt,WT),e(Mt,Zd),e(Zd,ha),e(ha,RT),e(Me,HT),e(Me,rt),w(ua,rt,null),e(rt,QT),e(rt,No),e(No,UT),e(No,ec),e(ec,JT),e(No,VT),e(No,tc),e(tc,KT),e(No,GT),e(rt,XT),w(Ps,rt,null),e(rt,YT),e(rt,oc),e(oc,ZT),e(rt,eb),w(fa,rt,null),u(o,Vp,m),u(o,Oo,m),e(Oo,qs),e(qs,sc),w(ma,sc,null),e(Oo,tb),e(Oo,nc),e(nc,ob),u(o,Kp,m),u(o,Ee,m),w(ga,Ee,null),e(Ee,sb),e(Ee,rc),e(rc,nb),e(Ee,rb),e(Ee,_a),e(_a,ab),e(_a,Qi),e(Qi,ib),e(_a,lb),e(Ee,db),e(Ee,va),e(va,cb),e(va,Ta),e(Ta,pb),e(va,hb),e(Ee,ub),e(Ee,ac),e(ac,fb),e(Ee,mb),e(Ee,Et),e(Et,ic),e(ic,ba),e(ba,gb),e(Et,_b),e(Et,lc),e(lc,ka),e(ka,vb),e(Et,Tb),e(Et,dc),e(dc,wa),e(wa,bb),e(Et,kb),e(Et,cc),e(cc,$a),e($a,wb),e(Ee,$b),e(Ee,at),w(Da,at,null),e(at,Db),e(at,Wo),e(Wo,Fb),e(Wo,pc),e(pc,yb),e(Wo,Bb),e(Wo,hc),e(hc,Mb),e(Wo,Eb),e(at,xb),w(As,at,null),e(at,zb),e(at,uc),e(uc,Cb),e(at,jb),w(Fa,at,null),u(o,Gp,m),u(o,Ro,m),e(Ro,Is),e(Is,fc),w(ya,fc,null),e(Ro,Pb),e(Ro,mc),e(mc,qb),u(o,Xp,m),u(o,xe,m),w(Ba,xe,null),e(xe,Ab),e(xe,gc),e(gc,Ib),e(xe,Lb),e(xe,Ma),e(Ma,Sb),e(Ma,Ui),e(Ui,Nb),e(Ma,Ob),e(xe,Wb),e(xe,Ea),e(Ea,Rb),e(Ea,xa),e(xa,Hb),e(Ea,Qb),e(xe,Ub),e(xe,_c),e(_c,Jb),e(xe,Vb),e(xe,xt),e(xt,vc),e(vc,za),e(za,Kb),e(xt,Gb),e(xt,Tc),e(Tc,Ca),e(Ca,Xb),e(xt,Yb),e(xt,bc),e(bc,ja),e(ja,Zb),e(xt,ek),e(xt,kc),e(kc,Pa),e(Pa,tk),e(xe,ok),e(xe,it),w(qa,it,null),e(it,sk),e(it,Ho),e(Ho,nk),e(Ho,wc),e(wc,rk),e(Ho,ak),e(Ho,$c),e($c,ik),e(Ho,lk),e(it,dk),w(Ls,it,null),e(it,ck),e(it,Dc),e(Dc,pk),e(it,hk),w(Aa,it,null),u(o,Yp,m),u(o,Qo,m),e(Qo,Ss),e(Ss,Fc),w(Ia,Fc,null),e(Qo,uk),e(Qo,yc),e(yc,fk),u(o,Zp,m),u(o,ze,m),w(La,ze,null),e(ze,mk),e(ze,Bc),e(Bc,gk),e(ze,_k),e(ze,Sa),e(Sa,vk),e(Sa,Ji),e(Ji,Tk),e(Sa,bk),e(ze,kk),e(ze,Na),e(Na,wk),e(Na,Oa),e(Oa,$k),e(Na,Dk),e(ze,Fk),e(ze,Mc),e(Mc,yk),e(ze,Bk),e(ze,zt),e(zt,Ec),e(Ec,Wa),e(Wa,Mk),e(zt,Ek),e(zt,xc),e(xc,Ra),e(Ra,xk),e(zt,zk),e(zt,zc),e(zc,Ha),e(Ha,Ck),e(zt,jk),e(zt,Cc),e(Cc,Qa),e(Qa,Pk),e(ze,qk),e(ze,lt),w(Ua,lt,null),e(lt,Ak),e(lt,Uo),e(Uo,Ik),e(Uo,jc),e(jc,Lk),e(Uo,Sk),e(Uo,Pc),e(Pc,Nk),e(Uo,Ok),e(lt,Wk),w(Ns,lt,null),e(lt,Rk),e(lt,qc),e(qc,Hk),e(lt,Qk),w(Ja,lt,null),u(o,eh,m),u(o,Jo,m),e(Jo,Os),e(Os,Ac),w(Va,Ac,null),e(Jo,Uk),e(Jo,Ic),e(Ic,Jk),u(o,th,m),u(o,Ce,m),w(Ka,Ce,null),e(Ce,Vk),e(Ce,Vo),e(Vo,Kk),e(Vo,Lc),e(Lc,Gk),e(Vo,Xk),e(Vo,Sc),e(Sc,Yk),e(Vo,Zk),e(Ce,ew),e(Ce,Ga),e(Ga,tw),e(Ga,Vi),e(Vi,ow),e(Ga,sw),e(Ce,nw),e(Ce,Xa),e(Xa,rw),e(Xa,Ya),e(Ya,aw),e(Xa,iw),e(Ce,lw),e(Ce,Nc),e(Nc,dw),e(Ce,cw),e(Ce,Ct),e(Ct,Oc),e(Oc,Za),e(Za,pw),e(Ct,hw),e(Ct,Wc),e(Wc,ei),e(ei,uw),e(Ct,fw),e(Ct,Rc),e(Rc,ti),e(ti,mw),e(Ct,gw),e(Ct,Hc),e(Hc,oi),e(oi,_w),e(Ce,vw),e(Ce,dt),w(si,dt,null),e(dt,Tw),e(dt,Ko),e(Ko,bw),e(Ko,Qc),e(Qc,kw),e(Ko,ww),e(Ko,Uc),e(Uc,$w),e(Ko,Dw),e(dt,Fw),w(Ws,dt,null),e(dt,yw),e(dt,Jc),e(Jc,Bw),e(dt,Mw),w(ni,dt,null),oh=!0},p(o,[m]){const ri={};m&2&&(ri.$$scope={dirty:m,ctx:o}),os.$set(ri);const Vc={};m&2&&(Vc.$$scope={dirty:m,ctx:o}),ns.$set(Vc);const Kc={};m&2&&(Kc.$$scope={dirty:m,ctx:o}),as.$set(Kc);const Gc={};m&2&&(Gc.$$scope={dirty:m,ctx:o}),ls.$set(Gc);const ai={};m&2&&(ai.$$scope={dirty:m,ctx:o}),cs.$set(ai);const Xc={};m&2&&(Xc.$$scope={dirty:m,ctx:o}),hs.$set(Xc);const Yc={};m&2&&(Yc.$$scope={dirty:m,ctx:o}),fs.$set(Yc);const Zc={};m&2&&(Zc.$$scope={dirty:m,ctx:o}),ms.$set(Zc);const jt={};m&2&&(jt.$$scope={dirty:m,ctx:o}),_s.$set(jt);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:o}),vs.$set(ep);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:o}),bs.$set(tp);const op={};m&2&&(op.$$scope={dirty:m,ctx:o}),ks.$set(op);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:o}),$s.$set(sp);const np={};m&2&&(np.$$scope={dirty:m,ctx:o}),Ds.$set(np);const rp={};m&2&&(rp.$$scope={dirty:m,ctx:o}),ys.$set(rp);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:o}),Bs.$set(ap);const ii={};m&2&&(ii.$$scope={dirty:m,ctx:o}),Es.$set(ii);const Pt={};m&2&&(Pt.$$scope={dirty:m,ctx:o}),xs.$set(Pt);const ip={};m&2&&(ip.$$scope={dirty:m,ctx:o}),Cs.$set(ip);const lp={};m&2&&(lp.$$scope={dirty:m,ctx:o}),Ps.$set(lp);const dp={};m&2&&(dp.$$scope={dirty:m,ctx:o}),As.$set(dp);const li={};m&2&&(li.$$scope={dirty:m,ctx:o}),Ls.$set(li);const cp={};m&2&&(cp.$$scope={dirty:m,ctx:o}),Ns.$set(cp);const qt={};m&2&&(qt.$$scope={dirty:m,ctx:o}),Ws.$set(qt)},i(o){oh||($(_.$$.fragment,o),$(X.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(vn.$$.fragment,o),$(os.$$.fragment,o),$(Tn.$$.fragment,o),$(bn.$$.fragment,o),$(kn.$$.fragment,o),$(yn.$$.fragment,o),$(ns.$$.fragment,o),$(Bn.$$.fragment,o),$(Mn.$$.fragment,o),$(En.$$.fragment,o),$(jn.$$.fragment,o),$(as.$$.fragment,o),$(Pn.$$.fragment,o),$(qn.$$.fragment,o),$(An.$$.fragment,o),$(In.$$.fragment,o),$(On.$$.fragment,o),$(ls.$$.fragment,o),$(Wn.$$.fragment,o),$(Rn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(cs.$$.fragment,o),$(Kn.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(tr.$$.fragment,o),$(hs.$$.fragment,o),$(or.$$.fragment,o),$(sr.$$.fragment,o),$(nr.$$.fragment,o),$(fs.$$.fragment,o),$(lr.$$.fragment,o),$(ms.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(_s.$$.fragment,o),$(gr.$$.fragment,o),$(vs.$$.fragment,o),$(_r.$$.fragment,o),$(vr.$$.fragment,o),$(Tr.$$.fragment,o),$(bs.$$.fragment,o),$($r.$$.fragment,o),$(ks.$$.fragment,o),$(Dr.$$.fragment,o),$(Fr.$$.fragment,o),$(yr.$$.fragment,o),$($s.$$.fragment,o),$(xr.$$.fragment,o),$(Ds.$$.fragment,o),$(zr.$$.fragment,o),$(Cr.$$.fragment,o),$(jr.$$.fragment,o),$(ys.$$.fragment,o),$(Ir.$$.fragment,o),$(Bs.$$.fragment,o),$(Lr.$$.fragment,o),$(Sr.$$.fragment,o),$(Nr.$$.fragment,o),$(Es.$$.fragment,o),$(Hr.$$.fragment,o),$(xs.$$.fragment,o),$(Qr.$$.fragment,o),$(Ur.$$.fragment,o),$(Jr.$$.fragment,o),$(ta.$$.fragment,o),$(Cs.$$.fragment,o),$(oa.$$.fragment,o),$(sa.$$.fragment,o),$(na.$$.fragment,o),$(ua.$$.fragment,o),$(Ps.$$.fragment,o),$(fa.$$.fragment,o),$(ma.$$.fragment,o),$(ga.$$.fragment,o),$(Da.$$.fragment,o),$(As.$$.fragment,o),$(Fa.$$.fragment,o),$(ya.$$.fragment,o),$(Ba.$$.fragment,o),$(qa.$$.fragment,o),$(Ls.$$.fragment,o),$(Aa.$$.fragment,o),$(Ia.$$.fragment,o),$(La.$$.fragment,o),$(Ua.$$.fragment,o),$(Ns.$$.fragment,o),$(Ja.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(si.$$.fragment,o),$(Ws.$$.fragment,o),$(ni.$$.fragment,o),oh=!0)},o(o){D(_.$$.fragment,o),D(X.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(rn.$$.fragment,o),D(an.$$.fragment,o),D(dn.$$.fragment,o),D(cn.$$.fragment,o),D(un.$$.fragment,o),D(fn.$$.fragment,o),D(vn.$$.fragment,o),D(os.$$.fragment,o),D(Tn.$$.fragment,o),D(bn.$$.fragment,o),D(kn.$$.fragment,o),D(yn.$$.fragment,o),D(ns.$$.fragment,o),D(Bn.$$.fragment,o),D(Mn.$$.fragment,o),D(En.$$.fragment,o),D(jn.$$.fragment,o),D(as.$$.fragment,o),D(Pn.$$.fragment,o),D(qn.$$.fragment,o),D(An.$$.fragment,o),D(In.$$.fragment,o),D(On.$$.fragment,o),D(ls.$$.fragment,o),D(Wn.$$.fragment,o),D(Rn.$$.fragment,o),D(Hn.$$.fragment,o),D(Vn.$$.fragment,o),D(cs.$$.fragment,o),D(Kn.$$.fragment,o),D(Gn.$$.fragment,o),D(Xn.$$.fragment,o),D(tr.$$.fragment,o),D(hs.$$.fragment,o),D(or.$$.fragment,o),D(sr.$$.fragment,o),D(nr.$$.fragment,o),D(fs.$$.fragment,o),D(lr.$$.fragment,o),D(ms.$$.fragment,o),D(dr.$$.fragment,o),D(cr.$$.fragment,o),D(pr.$$.fragment,o),D(_s.$$.fragment,o),D(gr.$$.fragment,o),D(vs.$$.fragment,o),D(_r.$$.fragment,o),D(vr.$$.fragment,o),D(Tr.$$.fragment,o),D(bs.$$.fragment,o),D($r.$$.fragment,o),D(ks.$$.fragment,o),D(Dr.$$.fragment,o),D(Fr.$$.fragment,o),D(yr.$$.fragment,o),D($s.$$.fragment,o),D(xr.$$.fragment,o),D(Ds.$$.fragment,o),D(zr.$$.fragment,o),D(Cr.$$.fragment,o),D(jr.$$.fragment,o),D(ys.$$.fragment,o),D(Ir.$$.fragment,o),D(Bs.$$.fragment,o),D(Lr.$$.fragment,o),D(Sr.$$.fragment,o),D(Nr.$$.fragment,o),D(Es.$$.fragment,o),D(Hr.$$.fragment,o),D(xs.$$.fragment,o),D(Qr.$$.fragment,o),D(Ur.$$.fragment,o),D(Jr.$$.fragment,o),D(ta.$$.fragment,o),D(Cs.$$.fragment,o),D(oa.$$.fragment,o),D(sa.$$.fragment,o),D(na.$$.fragment,o),D(ua.$$.fragment,o),D(Ps.$$.fragment,o),D(fa.$$.fragment,o),D(ma.$$.fragment,o),D(ga.$$.fragment,o),D(Da.$$.fragment,o),D(As.$$.fragment,o),D(Fa.$$.fragment,o),D(ya.$$.fragment,o),D(Ba.$$.fragment,o),D(qa.$$.fragment,o),D(Ls.$$.fragment,o),D(Aa.$$.fragment,o),D(Ia.$$.fragment,o),D(La.$$.fragment,o),D(Ua.$$.fragment,o),D(Ns.$$.fragment,o),D(Ja.$$.fragment,o),D(Va.$$.fragment,o),D(Ka.$$.fragment,o),D(si.$$.fragment,o),D(Ws.$$.fragment,o),D(ni.$$.fragment,o),oh=!1},d(o){t(p),o&&t(y),o&&t(g),F(_),o&&t(J),o&&t(E),F(X),o&&t(re),o&&t(L),o&&t(ae),o&&t(ee),o&&t(ie),o&&t(S),o&&t(P),o&&t(te),o&&t(le),o&&t(h),o&&t(up),o&&t(Tt),o&&t(fp),o&&t(ao),F(tn),o&&t(mp),o&&t(Ne),F(on),F(nn),o&&t(gp),o&&t(lo),F(rn),o&&t(_p),o&&t(_t),F(an),o&&t(vp),o&&t(co),F(dn),o&&t(Tp),o&&t(vt),F(cn),o&&t(bp),o&&t(po),F(un),o&&t(kp),o&&t(Oe),F(fn),F(vn),F(os),F(Tn),o&&t(wp),o&&t(uo),F(bn),o&&t($p),o&&t(We),F(kn),F(yn),F(ns),F(Bn),o&&t(Dp),o&&t(mo),F(Mn),o&&t(Fp),o&&t(Re),F(En),F(jn),F(as),F(Pn),F(qn),o&&t(yp),o&&t(_o),F(An),o&&t(Bp),o&&t(He),F(In),F(On),F(ls),F(Wn),o&&t(Mp),o&&t(To),F(Rn),o&&t(Ep),o&&t(Qe),F(Hn),F(Vn),F(cs),F(Kn),o&&t(xp),o&&t(ko),F(Gn),o&&t(zp),o&&t(Ue),F(Xn),F(tr),F(hs),F(or),o&&t(Cp),o&&t(Do),F(sr),o&&t(jp),o&&t(Pe),F(nr),F(fs),F(lr),F(ms),F(dr),o&&t(Pp),o&&t(yo),F(cr),o&&t(qp),o&&t(qe),F(pr),F(_s),F(gr),F(vs),F(_r),o&&t(Ap),o&&t(Mo),F(vr),o&&t(Ip),o&&t(Ae),F(Tr),F(bs),F($r),F(ks),F(Dr),o&&t(Lp),o&&t(xo),F(Fr),o&&t(Sp),o&&t(Ie),F(yr),F($s),F(xr),F(Ds),F(zr),o&&t(Np),o&&t(Co),F(Cr),o&&t(Op),o&&t(Le),F(jr),F(ys),F(Ir),F(Bs),F(Lr),o&&t(Wp),o&&t(Po),F(Sr),o&&t(Rp),o&&t(Se),F(Nr),F(Es),F(Hr),F(xs),F(Qr),o&&t(Hp),o&&t(Io),F(Ur),o&&t(Qp),o&&t(Be),F(Jr),F(ta),F(Cs),F(oa),o&&t(Up),o&&t(So),F(sa),o&&t(Jp),o&&t(Me),F(na),F(ua),F(Ps),F(fa),o&&t(Vp),o&&t(Oo),F(ma),o&&t(Kp),o&&t(Ee),F(ga),F(Da),F(As),F(Fa),o&&t(Gp),o&&t(Ro),F(ya),o&&t(Xp),o&&t(xe),F(Ba),F(qa),F(Ls),F(Aa),o&&t(Yp),o&&t(Qo),F(Ia),o&&t(Zp),o&&t(ze),F(La),F(Ua),F(Ns),F(Ja),o&&t(eh),o&&t(Jo),F(Va),o&&t(th),o&&t(Ce),F(Ka),F(si),F(Ws),F(ni)}}}const Py={local:"distilbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.DistilBertConfig",title:"DistilBertConfig"},{local:"transformers.DistilBertTokenizer",title:"DistilBertTokenizer"},{local:"transformers.DistilBertTokenizerFast",title:"DistilBertTokenizerFast"},{local:"transformers.DistilBertModel",title:"DistilBertModel"},{local:"transformers.DistilBertForMaskedLM",title:"DistilBertForMaskedLM"},{local:"transformers.DistilBertForSequenceClassification",title:"DistilBertForSequenceClassification"},{local:"transformers.DistilBertForMultipleChoice",title:"DistilBertForMultipleChoice"},{local:"transformers.DistilBertForTokenClassification",title:"DistilBertForTokenClassification"},{local:"transformers.DistilBertForQuestionAnswering",title:"DistilBertForQuestionAnswering"},{local:"transformers.TFDistilBertModel",title:"TFDistilBertModel"},{local:"transformers.TFDistilBertForMaskedLM",title:"TFDistilBertForMaskedLM"},{local:"transformers.TFDistilBertForSequenceClassification",title:"TFDistilBertForSequenceClassification"},{local:"transformers.TFDistilBertForMultipleChoice",title:"TFDistilBertForMultipleChoice"},{local:"transformers.TFDistilBertForTokenClassification",title:"TFDistilBertForTokenClassification"},{local:"transformers.TFDistilBertForQuestionAnswering",title:"TFDistilBertForQuestionAnswering"},{local:"transformers.FlaxDistilBertModel",title:"FlaxDistilBertModel"},{local:"transformers.FlaxDistilBertForMaskedLM",title:"FlaxDistilBertForMaskedLM"},{local:"transformers.FlaxDistilBertForSequenceClassification",title:"FlaxDistilBertForSequenceClassification"},{local:"transformers.FlaxDistilBertForMultipleChoice",title:"FlaxDistilBertForMultipleChoice"},{local:"transformers.FlaxDistilBertForTokenClassification",title:"FlaxDistilBertForTokenClassification"},{local:"transformers.FlaxDistilBertForQuestionAnswering",title:"FlaxDistilBertForQuestionAnswering"}],title:"DistilBERT"};function qy(C,p,y){let{fw:g}=p;return C.$$set=v=>{"fw"in v&&y(0,g=v.fw)},[g]}class Wy extends ry{constructor(p){super();ay(this,p,qy,jy,iy,{fw:0})}}export{Wy as default,Py as metadata};
