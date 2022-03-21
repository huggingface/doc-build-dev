import{S as ey,i as oy,s as ty,e as r,k as l,w as k,t as n,Y as Nt,M as ny,c as a,d as o,m as d,a as i,x as v,h as s,Z as Pt,b as c,F as e,g as h,y as b,q as T,o as y,B as L}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as S}from"../../chunks/Docstring-abef54e3.js";import{C as ao}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function sy(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function ry(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function ay(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function iy(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function ly(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function dy(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function cy(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function hy(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function my(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function py(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function fy(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function gy(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function uy(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function _y(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function wy(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function ky(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function vy(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),E=r("p"),ne=n("This second option is useful when using "),Q=r("code"),ce=n("tf.keras.Model.fit"),Z=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r("code"),he=n("model(inputs)"),re=n("."),H=l(),N=r("p"),se=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=l(),z=r("ul"),q=r("li"),me=n("a single Tensor with "),D=r("code"),Y=n("input_ids"),pe=n(" only and nothing else: "),A=r("code"),fe=n("model(inputs_ids)"),ge=l(),C=r("li"),ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),ae=n("model([input_ids, attention_mask])"),oe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ie=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r("code"),te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),g=d(m),u=a(m,"UL",{});var J=i(u);$=a(J,"LI",{});var Le=i($);w=s(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(o),_=d(J),M=a(J,"LI",{});var $e=i(M);de=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(o),J.forEach(o),X=d(m),E=a(m,"P",{});var O=i(E);ne=s(O,"This second option is useful when using "),Q=a(O,"CODE",{});var Fe=i(Q);ce=s(Fe,"tf.keras.Model.fit"),Fe.forEach(o),Z=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a(O,"CODE",{});var xe=i(U);he=s(xe,"model(inputs)"),xe.forEach(o),re=s(O,"."),O.forEach(o),H=d(m),N=a(m,"P",{});var be=i(N);se=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(o),K=d(m),z=a(m,"UL",{});var j=i(z);q=a(j,"LI",{});var V=i(q);me=s(V,"a single Tensor with "),D=a(V,"CODE",{});var Te=i(D);Y=s(Te,"input_ids"),Te.forEach(o),pe=s(V," only and nothing else: "),A=a(V,"CODE",{});var le=i(A);fe=s(le,"model(inputs_ids)"),le.forEach(o),V.forEach(o),ge=d(j),C=a(j,"LI",{});var G=i(C);ee=s(G,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(G,"CODE",{});var ke=i(R);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),oe=s(G," or "),I=a(G,"CODE",{});var Me=i(I);ue=s(Me,"model([input_ids, attention_mask, token_type_ids])"),Me.forEach(o),G.forEach(o),ie=d(j),P=a(j,"LI",{});var we=i(P);_e=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a(we,"CODE",{});var ve=i(B);te=s(ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ve.forEach(o),we.forEach(o),j.forEach(o)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,de),h(m,X,F),h(m,E,F),e(E,ne),e(E,Q),e(Q,ce),e(E,Z),e(E,U),e(U,he),e(E,re),h(m,H,F),h(m,N,F),e(N,se),h(m,K,F),h(m,z,F),e(z,q),e(q,me),e(q,D),e(D,Y),e(q,pe),e(q,A),e(A,fe),e(z,ge),e(z,C),e(C,ee),e(C,R),e(R,ae),e(C,oe),e(C,I),e(I,ue),e(z,ie),e(z,P),e(P,_e),e(P,B),e(B,te)},d(m){m&&o(f),m&&o(g),m&&o(u),m&&o(X),m&&o(E),m&&o(H),m&&o(N),m&&o(K),m&&o(z)}}}function by(W){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(o),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(o)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&o(f)}}}function Ty(W){let f,x,g,u,$,w,_,M,de,X,E,ne,Q,ce,Z,U,he,re,H,N,se,K,z,q,me,D,Y,pe,A,fe,ge,C,ee,R,ae,oe,I,ue,ie,P,_e,B,te,m,F,J,Le,$e,O,Fe,xe,be,j,V,Te,le,G,ke,Me,we,ve,Oh,jh,sd,Oo,Ot,Va,$n,Ah,Ga,Ih,rd,ye,Sh,ad,HT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',id,ld,RT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',dd,cd,VT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',hd,Ka,Dh,Bh,Ja,Wh,Qh,Xa,Uh,Hh,md,GT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',pd,Ya,Rh,Vh,fd,uo,Gh,gd,KT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ud,Za,Kh,Jh,_d,_o,Xh,ei,Yh,Zh,oi,em,om,wd,jt,ti,tm,nm,ni,sm,kd,At,rm,Ir,am,im,vd,Ve,lm,bd,JT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Td,yd,XT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',Ld,$d,YT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Fd,xd,ZT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Md,Ed,It,dm,Fn,cm,hm,zd,jo,St,si,xn,mm,ri,pm,qd,Ao,Sr,fm,gm,Dr,um,_m,Cd,Mn,Nd,Io,Dt,ai,En,wm,ii,km,Pd,Oe,zn,vm,So,bm,Br,Tm,ym,Wr,Lm,$m,Fm,Do,xm,Qr,Mm,Em,qn,zm,qm,Cm,Bo,Nm,Ur,Pm,Om,Hr,jm,Am,Im,li,Sm,Dm,Cn,Od,Wo,Bt,di,Nn,Bm,ci,Wm,jd,fo,Pn,Qm,hi,Um,Hm,Wt,Rr,Rm,Vm,Vr,Gm,Km,Ad,Qo,Qt,mi,On,Jm,pi,Xm,Id,go,jn,Ym,An,Zm,fi,ep,op,tp,Ut,Gr,np,sp,Kr,rp,ap,Sd,Uo,Ht,gi,In,ip,ui,lp,Dd,Ho,Sn,dp,_i,cp,Bd,Ro,Dn,hp,wi,mp,Wd,Vo,Bn,pp,ki,fp,Qd,Go,Wn,gp,vi,up,Ud,Ko,Qn,_p,bi,wp,Hd,Jo,Un,kp,Ti,vp,Rd,Xo,Hn,bp,yi,Tp,Vd,Yo,Rn,yp,Li,Lp,Gd,Zo,Vn,$p,$i,Fp,Kd,et,Gn,xp,Fi,Mp,Jd,ot,Kn,Ep,xi,zp,Xd,tt,Jn,qp,Mi,Cp,Yd,nt,Xn,Np,Ei,Pp,Zd,st,Yn,Op,zi,jp,ec,rt,Rt,qi,Zn,Ap,Ci,Ip,oc,qe,es,Sp,Ni,Dp,Bp,os,Wp,Jr,Qp,Up,Hp,ts,Rp,ns,Vp,Gp,Kp,at,Jp,Xr,Xp,Yp,ss,Zp,ef,of,rs,tf,Pi,nf,sf,rf,Ge,as,af,it,lf,Yr,df,cf,Oi,hf,mf,pf,Vt,ff,ji,gf,uf,is,tc,lt,Gt,Ai,ls,_f,Ii,wf,nc,We,ds,kf,cs,vf,Si,bf,Tf,yf,hs,Lf,Zr,$f,Ff,xf,ms,Mf,ps,Ef,zf,qf,Ke,fs,Cf,dt,Nf,ea,Pf,Of,Di,jf,Af,If,Kt,Sf,Bi,Df,Bf,gs,sc,ct,Jt,Wi,us,Wf,Qi,Qf,rc,Qe,_s,Uf,Ui,Hf,Rf,ws,Vf,oa,Gf,Kf,Jf,ks,Xf,vs,Yf,Zf,eg,Ce,bs,og,ht,tg,ta,ng,sg,Hi,rg,ag,ig,Xt,lg,Ri,dg,cg,Ts,hg,Vi,mg,pg,ys,ac,mt,Yt,Gi,Ls,fg,Ki,gg,ic,Ue,$s,ug,Ji,_g,wg,Fs,kg,na,vg,bg,Tg,xs,yg,Ms,Lg,$g,Fg,Je,Es,xg,pt,Mg,sa,Eg,zg,Xi,qg,Cg,Ng,Zt,Pg,Yi,Og,jg,zs,lc,ft,en,Zi,qs,Ag,el,Ig,dc,He,Cs,Sg,ol,Dg,Bg,Ns,Wg,ra,Qg,Ug,Hg,Ps,Rg,Os,Vg,Gg,Kg,Xe,js,Jg,gt,Xg,aa,Yg,Zg,tl,eu,ou,tu,on,nu,nl,su,ru,As,cc,ut,tn,sl,Is,au,rl,iu,hc,Re,Ss,lu,_t,du,al,cu,hu,il,mu,pu,fu,Ds,gu,ia,uu,_u,wu,Bs,ku,Ws,vu,bu,Tu,Ye,Qs,yu,wt,Lu,la,$u,Fu,ll,xu,Mu,Eu,nn,zu,dl,qu,Cu,Us,mc,kt,sn,cl,Hs,Nu,hl,Pu,pc,Ee,Rs,Ou,ml,ju,Au,Vs,Iu,da,Su,Du,Bu,Gs,Wu,Ks,Qu,Uu,Hu,rn,Ru,vt,Vu,ca,Gu,Ku,Js,Ju,Xu,Yu,Xs,Zu,pl,e_,o_,t_,wo,Ys,n_,bt,s_,ha,r_,a_,fl,i_,l_,d_,an,fc,Tt,ln,gl,Zs,c_,ul,h_,gc,je,er,m_,or,p_,_l,f_,g_,u_,tr,__,ma,w_,k_,v_,nr,b_,sr,T_,y_,L_,dn,$_,Ze,rr,F_,yt,x_,pa,M_,E_,wl,z_,q_,C_,cn,N_,kl,P_,O_,ar,uc,Lt,hn,vl,ir,j_,bl,A_,_c,Ae,lr,I_,$t,S_,Tl,D_,B_,yl,W_,Q_,U_,dr,H_,fa,R_,V_,G_,cr,K_,hr,J_,X_,Y_,mn,Z_,eo,mr,ew,Ft,ow,ga,tw,nw,Ll,sw,rw,aw,pn,iw,$l,lw,dw,pr,wc,xt,fn,Fl,fr,cw,xl,hw,kc,Ie,gr,mw,Ml,pw,fw,ur,gw,ua,uw,_w,ww,_r,kw,wr,vw,bw,Tw,gn,yw,oo,kr,Lw,Mt,$w,_a,Fw,xw,El,Mw,Ew,zw,un,qw,zl,Cw,Nw,vr,vc,Et,_n,ql,br,Pw,Cl,Ow,bc,Se,Tr,jw,Nl,Aw,Iw,yr,Sw,wa,Dw,Bw,Ww,Lr,Qw,$r,Uw,Hw,Rw,wn,Vw,to,Fr,Gw,zt,Kw,ka,Jw,Xw,Pl,Yw,Zw,ek,kn,ok,Ol,tk,nk,xr,Tc,qt,vn,jl,Mr,sk,Al,rk,yc,De,Er,ak,Il,ik,lk,zr,dk,va,ck,hk,mk,qr,pk,Cr,fk,gk,uk,bn,_k,no,Nr,wk,Ct,kk,ba,vk,bk,Sl,Tk,yk,Lk,Tn,$k,Dl,Fk,xk,Pr,Lc;return w=new ze({}),K=new ze({}),$n=new ze({}),xn=new ze({}),Mn=new ao({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),En=new ze({}),zn=new S({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/configuration_longformer.py#L33",parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}]}}),Cn=new ao({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Nn=new ze({}),Pn=new S({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),On=new ze({}),jn=new S({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),In=new ze({}),Sn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L61",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Dn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L104",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Bn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L152",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Wn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L198",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Qn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L247",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Un=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L293",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Hn=new S({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L341",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Rn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L68",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Vn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L111",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Gn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L159",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Kn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L205",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Jn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L254",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Xn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L300",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Yn=new S({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L348",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Zn=new ze({}),es=new S({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1497",parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),as=new S({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1608",parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Pe({props:{$$slots:{default:[sy]},$$scope:{ctx:W}}}),is=new ao({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">&gt;&gt;&gt; </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),ls=new ze({}),ds=new S({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1732",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fs=new S({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1751",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new Pe({props:{$$slots:{default:[ry]},$$scope:{ctx:W}}}),gs=new ao({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),us=new ze({}),_s=new S({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1837",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bs=new S({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1852",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Pe({props:{$$slots:{default:[ay]},$$scope:{ctx:W}}}),Ts=new ao({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),ys=new ao({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),Ls=new ze({}),$s=new S({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L2188",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Es=new S({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"labels",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L2199",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new Pe({props:{$$slots:{default:[iy]},$$scope:{ctx:W}}}),zs=new ao({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qs=new ze({}),Cs=new S({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L2103",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),js=new S({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L2118",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new Pe({props:{$$slots:{default:[ly]},$$scope:{ctx:W}}}),As=new ao({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Is=new ze({}),Ss=new S({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1964",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qs=new S({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_longformer.py#L1978",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new Pe({props:{$$slots:{default:[dy]},$$scope:{ctx:W}}}),Us=new ao({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),Hs=new ze({}),Rs=new S({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L1989",parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),rn=new Pe({props:{$$slots:{default:[cy]},$$scope:{ctx:W}}}),Ys=new S({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2011",parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}]}}),an=new Pe({props:{$$slots:{default:[hy]},$$scope:{ctx:W}}}),Zs=new ze({}),er=new S({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2063",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),dn=new Pe({props:{$$slots:{default:[my]},$$scope:{ctx:W}}}),rr=new S({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2080",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new Pe({props:{$$slots:{default:[py]},$$scope:{ctx:W}}}),ar=new ao({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ir=new ze({}),lr=new S({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2159",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),mn=new Pe({props:{$$slots:{default:[fy]},$$scope:{ctx:W}}}),mr=new S({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2174",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new Pe({props:{$$slots:{default:[gy]},$$scope:{ctx:W}}}),pr=new ao({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),fr=new ze({}),gr=new S({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2309",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new Pe({props:{$$slots:{default:[uy]},$$scope:{ctx:W}}}),kr=new S({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2321",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new Pe({props:{$$slots:{default:[_y]},$$scope:{ctx:W}}}),vr=new ao({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),br=new ze({}),Tr=new S({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2546",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new Pe({props:{$$slots:{default:[wy]},$$scope:{ctx:W}}}),Fr=new S({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2561",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new Pe({props:{$$slots:{default:[ky]},$$scope:{ctx:W}}}),xr=new ao({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new ze({}),Er=new S({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2409",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),bn=new Pe({props:{$$slots:{default:[vy]},$$scope:{ctx:W}}}),Nr=new S({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16228/src/transformers/models/longformer/modeling_tf_longformer.py#L2429",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16228/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_16228/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16228/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Pe({props:{$$slots:{default:[by]},$$scope:{ctx:W}}}),Pr=new ao({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){f=r("meta"),x=l(),g=r("h1"),u=r("a"),$=r("span"),k(w.$$.fragment),_=l(),M=r("span"),de=n("Longformer"),X=l(),E=r("p"),ne=r("strong"),Q=n("DISCLAIMER:"),ce=n(" This model is still a work in progress, if you see something strange, file a "),Z=r("a"),U=n("Github Issue"),he=n("."),re=l(),H=r("h2"),N=r("a"),se=r("span"),k(K.$$.fragment),z=l(),q=r("span"),me=n("Overview"),D=l(),Y=r("p"),pe=n("The Longformer model was presented in "),A=r("a"),fe=n("Longformer: The Long-Document Transformer"),ge=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),C=l(),ee=r("p"),R=n("The abstract from the paper is the following:"),ae=l(),oe=r("p"),I=r("em"),ue=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ie=l(),P=r("p"),_e=n("Tips:"),B=l(),te=r("ul"),m=r("li"),F=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),J=r("code"),Le=n("token_type_ids"),$e=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),O=r("code"),Fe=n("tokenizer.sep_token"),xe=n(` (or
`),be=r("code"),j=n("</s>"),V=n(")."),Te=l(),le=r("p"),G=n("This model was contributed by "),ke=r("a"),Me=n("beltagy"),we=n(". The Authors\u2019 code can be found "),ve=r("a"),Oh=n("here"),jh=n("."),sd=l(),Oo=r("h2"),Ot=r("a"),Va=r("span"),k($n.$$.fragment),Ah=l(),Ga=r("span"),Ih=n("Longformer Self Attention"),rd=l(),ye=r("p"),Sh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ad=new Nt,id=n(` previous tokens and
`),ld=new Nt,dd=n(" succeding tokens with "),cd=new Nt,hd=n(` being the window length as defined in
`),Ka=r("code"),Dh=n("config.attention_window"),Bh=n(". Note that "),Ja=r("code"),Wh=n("config.attention_window"),Qh=n(" can be of type "),Xa=r("code"),Uh=n("List"),Hh=n(` to define a
different `),md=new Nt,pd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ya=r("code"),Rh=n("BertSelfAttention"),Vh=n("."),fd=l(),uo=r("p"),Gh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),gd=new Nt,ud=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Za=r("em"),Kh=n("symmetric"),Jh=n("."),_d=l(),_o=r("p"),Xh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ei=r("code"),Yh=n("global_attention_mask"),Zh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),oi=r("code"),em=n("global_attention_mask"),om=n(":"),wd=l(),jt=r("ul"),ti=r("li"),tm=n("0: the token attends \u201Clocally\u201D,"),nm=l(),ni=r("li"),sm=n("1: the token attends \u201Cglobally\u201D."),kd=l(),At=r("p"),rm=n("For more information please also refer to "),Ir=r("a"),am=n("forward()"),im=n(" method."),vd=l(),Ve=r("p"),lm=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),bd=new Nt,Td=n(` to
`),yd=new Nt,Ld=n(", with "),$d=new Nt,Fd=n(" being the sequence length and "),xd=new Nt,Md=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Ed=l(),It=r("p"),dm=n("For more information, please refer to the official "),Fn=r("a"),cm=n("paper"),hm=n("."),zd=l(),jo=r("h2"),St=r("a"),si=r("span"),k(xn.$$.fragment),mm=l(),ri=r("span"),pm=n("Training"),qd=l(),Ao=r("p"),Sr=r("a"),fm=n("LongformerForMaskedLM"),gm=n(" is trained the exact same way "),Dr=r("a"),um=n("RobertaForMaskedLM"),_m=n(` is
trained and should be used as follows:`),Cd=l(),k(Mn.$$.fragment),Nd=l(),Io=r("h2"),Dt=r("a"),ai=r("span"),k(En.$$.fragment),wm=l(),ii=r("span"),km=n("LongformerConfig"),Pd=l(),Oe=r("div"),k(zn.$$.fragment),vm=l(),So=r("p"),bm=n("This is the configuration class to store the configuration of a "),Br=r("a"),Tm=n("LongformerModel"),ym=n(" or a "),Wr=r("a"),Lm=n("TFLongformerModel"),$m=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Fm=l(),Do=r("p"),xm=n("This is the configuration class to store the configuration of a "),Qr=r("a"),Mm=n("LongformerModel"),Em=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),qn=r("a"),zm=n("roberta-base"),qm=n(" architecture with a sequence length 4,096."),Cm=l(),Bo=r("p"),Nm=n("The "),Ur=r("a"),Pm=n("LongformerConfig"),Om=n(" class directly inherits "),Hr=r("a"),jm=n("RobertaConfig"),Am=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Im=l(),li=r("p"),Sm=n("Example:"),Dm=l(),k(Cn.$$.fragment),Od=l(),Wo=r("h2"),Bt=r("a"),di=r("span"),k(Nn.$$.fragment),Bm=l(),ci=r("span"),Wm=n("LongformerTokenizer"),jd=l(),fo=r("div"),k(Pn.$$.fragment),Qm=l(),hi=r("p"),Um=n("Construct a Longformer tokenizer."),Hm=l(),Wt=r("p"),Rr=r("a"),Rm=n("LongformerTokenizer"),Vm=n(" is identical to "),Vr=r("a"),Gm=n("RobertaTokenizer"),Km=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Ad=l(),Qo=r("h2"),Qt=r("a"),mi=r("span"),k(On.$$.fragment),Jm=l(),pi=r("span"),Xm=n("LongformerTokenizerFast"),Id=l(),go=r("div"),k(jn.$$.fragment),Ym=l(),An=r("p"),Zm=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),fi=r("em"),ep=n("tokenizers"),op=n(" library)."),tp=l(),Ut=r("p"),Gr=r("a"),np=n("LongformerTokenizerFast"),sp=n(" is identical to "),Kr=r("a"),rp=n("RobertaTokenizerFast"),ap=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Sd=l(),Uo=r("h2"),Ht=r("a"),gi=r("span"),k(In.$$.fragment),ip=l(),ui=r("span"),lp=n("Longformer specific outputs"),Dd=l(),Ho=r("div"),k(Sn.$$.fragment),dp=l(),_i=r("p"),cp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Bd=l(),Ro=r("div"),k(Dn.$$.fragment),hp=l(),wi=r("p"),mp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Wd=l(),Vo=r("div"),k(Bn.$$.fragment),pp=l(),ki=r("p"),fp=n("Base class for masked language models outputs."),Qd=l(),Go=r("div"),k(Wn.$$.fragment),gp=l(),vi=r("p"),up=n("Base class for outputs of question answering Longformer models."),Ud=l(),Ko=r("div"),k(Qn.$$.fragment),_p=l(),bi=r("p"),wp=n("Base class for outputs of sentence classification models."),Hd=l(),Jo=r("div"),k(Un.$$.fragment),kp=l(),Ti=r("p"),vp=n("Base class for outputs of multiple choice Longformer models."),Rd=l(),Xo=r("div"),k(Hn.$$.fragment),bp=l(),yi=r("p"),Tp=n("Base class for outputs of token classification models."),Vd=l(),Yo=r("div"),k(Rn.$$.fragment),yp=l(),Li=r("p"),Lp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Gd=l(),Zo=r("div"),k(Vn.$$.fragment),$p=l(),$i=r("p"),Fp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Kd=l(),et=r("div"),k(Gn.$$.fragment),xp=l(),Fi=r("p"),Mp=n("Base class for masked language models outputs."),Jd=l(),ot=r("div"),k(Kn.$$.fragment),Ep=l(),xi=r("p"),zp=n("Base class for outputs of question answering Longformer models."),Xd=l(),tt=r("div"),k(Jn.$$.fragment),qp=l(),Mi=r("p"),Cp=n("Base class for outputs of sentence classification models."),Yd=l(),nt=r("div"),k(Xn.$$.fragment),Np=l(),Ei=r("p"),Pp=n("Base class for outputs of multiple choice models."),Zd=l(),st=r("div"),k(Yn.$$.fragment),Op=l(),zi=r("p"),jp=n("Base class for outputs of token classification models."),ec=l(),rt=r("h2"),Rt=r("a"),qi=r("span"),k(Zn.$$.fragment),Ap=l(),Ci=r("span"),Ip=n("LongformerModel"),oc=l(),qe=r("div"),k(es.$$.fragment),Sp=l(),Ni=r("p"),Dp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Bp=l(),os=r("p"),Wp=n("This model inherits from "),Jr=r("a"),Qp=n("PreTrainedModel"),Up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp=l(),ts=r("p"),Rp=n("This model is also a PyTorch "),ns=r("a"),Vp=n("torch.nn.Module"),Gp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kp=l(),at=r("p"),Jp=n("This class copied code from "),Xr=r("a"),Xp=n("RobertaModel"),Yp=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),ss=r("a"),Zp=n(`Longformer:
the Long-Document Transformer`),ef=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),of=l(),rs=r("p"),tf=n("The self-attention module "),Pi=r("code"),nf=n("LongformerSelfAttention"),sf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),rf=l(),Ge=r("div"),k(as.$$.fragment),af=l(),it=r("p"),lf=n("The "),Yr=r("a"),df=n("LongformerModel"),cf=n(" forward method, overrides the "),Oi=r("code"),hf=n("__call__"),mf=n(" special method."),pf=l(),k(Vt.$$.fragment),ff=l(),ji=r("p"),gf=n("Examples:"),uf=l(),k(is.$$.fragment),tc=l(),lt=r("h2"),Gt=r("a"),Ai=r("span"),k(ls.$$.fragment),_f=l(),Ii=r("span"),wf=n("LongformerForMaskedLM"),nc=l(),We=r("div"),k(ds.$$.fragment),kf=l(),cs=r("p"),vf=n("Longformer Model with a "),Si=r("code"),bf=n("language modeling"),Tf=n(" head on top."),yf=l(),hs=r("p"),Lf=n("This model inherits from "),Zr=r("a"),$f=n("PreTrainedModel"),Ff=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf=l(),ms=r("p"),Mf=n("This model is also a PyTorch "),ps=r("a"),Ef=n("torch.nn.Module"),zf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf=l(),Ke=r("div"),k(fs.$$.fragment),Cf=l(),dt=r("p"),Nf=n("The "),ea=r("a"),Pf=n("LongformerForMaskedLM"),Of=n(" forward method, overrides the "),Di=r("code"),jf=n("__call__"),Af=n(" special method."),If=l(),k(Kt.$$.fragment),Sf=l(),Bi=r("p"),Df=n("Examples:"),Bf=l(),k(gs.$$.fragment),sc=l(),ct=r("h2"),Jt=r("a"),Wi=r("span"),k(us.$$.fragment),Wf=l(),Qi=r("span"),Qf=n("LongformerForSequenceClassification"),rc=l(),Qe=r("div"),k(_s.$$.fragment),Uf=l(),Ui=r("p"),Hf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rf=l(),ws=r("p"),Vf=n("This model inherits from "),oa=r("a"),Gf=n("PreTrainedModel"),Kf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jf=l(),ks=r("p"),Xf=n("This model is also a PyTorch "),vs=r("a"),Yf=n("torch.nn.Module"),Zf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eg=l(),Ce=r("div"),k(bs.$$.fragment),og=l(),ht=r("p"),tg=n("The "),ta=r("a"),ng=n("LongformerForSequenceClassification"),sg=n(" forward method, overrides the "),Hi=r("code"),rg=n("__call__"),ag=n(" special method."),ig=l(),k(Xt.$$.fragment),lg=l(),Ri=r("p"),dg=n("Example of single-label classification:"),cg=l(),k(Ts.$$.fragment),hg=l(),Vi=r("p"),mg=n("Example of multi-label classification:"),pg=l(),k(ys.$$.fragment),ac=l(),mt=r("h2"),Yt=r("a"),Gi=r("span"),k(Ls.$$.fragment),fg=l(),Ki=r("span"),gg=n("LongformerForMultipleChoice"),ic=l(),Ue=r("div"),k($s.$$.fragment),ug=l(),Ji=r("p"),_g=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),wg=l(),Fs=r("p"),kg=n("This model inherits from "),na=r("a"),vg=n("PreTrainedModel"),bg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg=l(),xs=r("p"),yg=n("This model is also a PyTorch "),Ms=r("a"),Lg=n("torch.nn.Module"),$g=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fg=l(),Je=r("div"),k(Es.$$.fragment),xg=l(),pt=r("p"),Mg=n("The "),sa=r("a"),Eg=n("LongformerForMultipleChoice"),zg=n(" forward method, overrides the "),Xi=r("code"),qg=n("__call__"),Cg=n(" special method."),Ng=l(),k(Zt.$$.fragment),Pg=l(),Yi=r("p"),Og=n("Example:"),jg=l(),k(zs.$$.fragment),lc=l(),ft=r("h2"),en=r("a"),Zi=r("span"),k(qs.$$.fragment),Ag=l(),el=r("span"),Ig=n("LongformerForTokenClassification"),dc=l(),He=r("div"),k(Cs.$$.fragment),Sg=l(),ol=r("p"),Dg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bg=l(),Ns=r("p"),Wg=n("This model inherits from "),ra=r("a"),Qg=n("PreTrainedModel"),Ug=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hg=l(),Ps=r("p"),Rg=n("This model is also a PyTorch "),Os=r("a"),Vg=n("torch.nn.Module"),Gg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kg=l(),Xe=r("div"),k(js.$$.fragment),Jg=l(),gt=r("p"),Xg=n("The "),aa=r("a"),Yg=n("LongformerForTokenClassification"),Zg=n(" forward method, overrides the "),tl=r("code"),eu=n("__call__"),ou=n(" special method."),tu=l(),k(on.$$.fragment),nu=l(),nl=r("p"),su=n("Example:"),ru=l(),k(As.$$.fragment),cc=l(),ut=r("h2"),tn=r("a"),sl=r("span"),k(Is.$$.fragment),au=l(),rl=r("span"),iu=n("LongformerForQuestionAnswering"),hc=l(),Re=r("div"),k(Ss.$$.fragment),lu=l(),_t=r("p"),du=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),al=r("code"),cu=n("span start logits"),hu=n(" and "),il=r("code"),mu=n("span end logits"),pu=n(")."),fu=l(),Ds=r("p"),gu=n("This model inherits from "),ia=r("a"),uu=n("PreTrainedModel"),_u=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu=l(),Bs=r("p"),ku=n("This model is also a PyTorch "),Ws=r("a"),vu=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu=l(),Ye=r("div"),k(Qs.$$.fragment),yu=l(),wt=r("p"),Lu=n("The "),la=r("a"),$u=n("LongformerForQuestionAnswering"),Fu=n(" forward method, overrides the "),ll=r("code"),xu=n("__call__"),Mu=n(" special method."),Eu=l(),k(nn.$$.fragment),zu=l(),dl=r("p"),qu=n("Examples:"),Cu=l(),k(Us.$$.fragment),mc=l(),kt=r("h2"),sn=r("a"),cl=r("span"),k(Hs.$$.fragment),Nu=l(),hl=r("span"),Pu=n("TFLongformerModel"),pc=l(),Ee=r("div"),k(Rs.$$.fragment),Ou=l(),ml=r("p"),ju=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Au=l(),Vs=r("p"),Iu=n("This model inherits from "),da=r("a"),Su=n("TFPreTrainedModel"),Du=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu=l(),Gs=r("p"),Wu=n("This model is also a "),Ks=r("a"),Qu=n("tf.keras.Model"),Uu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hu=l(),k(rn.$$.fragment),Ru=l(),vt=r("p"),Vu=n("This class copies code from "),ca=r("a"),Gu=n("TFRobertaModel"),Ku=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Js=r("a"),Ju=n("Longformer: the Long-Document Transformer"),Xu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Yu=l(),Xs=r("p"),Zu=n("The self-attention module "),pl=r("code"),e_=n("TFLongformerSelfAttention"),o_=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),t_=l(),wo=r("div"),k(Ys.$$.fragment),n_=l(),bt=r("p"),s_=n("The "),ha=r("a"),r_=n("TFLongformerModel"),a_=n(" forward method, overrides the "),fl=r("code"),i_=n("__call__"),l_=n(" special method."),d_=l(),k(an.$$.fragment),fc=l(),Tt=r("h2"),ln=r("a"),gl=r("span"),k(Zs.$$.fragment),c_=l(),ul=r("span"),h_=n("TFLongformerForMaskedLM"),gc=l(),je=r("div"),k(er.$$.fragment),m_=l(),or=r("p"),p_=n("Longformer Model with a "),_l=r("code"),f_=n("language modeling"),g_=n(" head on top."),u_=l(),tr=r("p"),__=n("This model inherits from "),ma=r("a"),w_=n("TFPreTrainedModel"),k_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_=l(),nr=r("p"),b_=n("This model is also a "),sr=r("a"),T_=n("tf.keras.Model"),y_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),L_=l(),k(dn.$$.fragment),$_=l(),Ze=r("div"),k(rr.$$.fragment),F_=l(),yt=r("p"),x_=n("The "),pa=r("a"),M_=n("TFLongformerForMaskedLM"),E_=n(" forward method, overrides the "),wl=r("code"),z_=n("__call__"),q_=n(" special method."),C_=l(),k(cn.$$.fragment),N_=l(),kl=r("p"),P_=n("Example:"),O_=l(),k(ar.$$.fragment),uc=l(),Lt=r("h2"),hn=r("a"),vl=r("span"),k(ir.$$.fragment),j_=l(),bl=r("span"),A_=n("TFLongformerForQuestionAnswering"),_c=l(),Ae=r("div"),k(lr.$$.fragment),I_=l(),$t=r("p"),S_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Tl=r("code"),D_=n("span start logits"),B_=n(" and "),yl=r("code"),W_=n("span end logits"),Q_=n(")."),U_=l(),dr=r("p"),H_=n("This model inherits from "),fa=r("a"),R_=n("TFPreTrainedModel"),V_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_=l(),cr=r("p"),K_=n("This model is also a "),hr=r("a"),J_=n("tf.keras.Model"),X_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Y_=l(),k(mn.$$.fragment),Z_=l(),eo=r("div"),k(mr.$$.fragment),ew=l(),Ft=r("p"),ow=n("The "),ga=r("a"),tw=n("TFLongformerForQuestionAnswering"),nw=n(" forward method, overrides the "),Ll=r("code"),sw=n("__call__"),rw=n(" special method."),aw=l(),k(pn.$$.fragment),iw=l(),$l=r("p"),lw=n("Example:"),dw=l(),k(pr.$$.fragment),wc=l(),xt=r("h2"),fn=r("a"),Fl=r("span"),k(fr.$$.fragment),cw=l(),xl=r("span"),hw=n("TFLongformerForSequenceClassification"),kc=l(),Ie=r("div"),k(gr.$$.fragment),mw=l(),Ml=r("p"),pw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fw=l(),ur=r("p"),gw=n("This model inherits from "),ua=r("a"),uw=n("TFPreTrainedModel"),_w=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ww=l(),_r=r("p"),kw=n("This model is also a "),wr=r("a"),vw=n("tf.keras.Model"),bw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tw=l(),k(gn.$$.fragment),yw=l(),oo=r("div"),k(kr.$$.fragment),Lw=l(),Mt=r("p"),$w=n("The "),_a=r("a"),Fw=n("TFLongformerForSequenceClassification"),xw=n(" forward method, overrides the "),El=r("code"),Mw=n("__call__"),Ew=n(" special method."),zw=l(),k(un.$$.fragment),qw=l(),zl=r("p"),Cw=n("Example:"),Nw=l(),k(vr.$$.fragment),vc=l(),Et=r("h2"),_n=r("a"),ql=r("span"),k(br.$$.fragment),Pw=l(),Cl=r("span"),Ow=n("TFLongformerForTokenClassification"),bc=l(),Se=r("div"),k(Tr.$$.fragment),jw=l(),Nl=r("p"),Aw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Iw=l(),yr=r("p"),Sw=n("This model inherits from "),wa=r("a"),Dw=n("TFPreTrainedModel"),Bw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ww=l(),Lr=r("p"),Qw=n("This model is also a "),$r=r("a"),Uw=n("tf.keras.Model"),Hw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rw=l(),k(wn.$$.fragment),Vw=l(),to=r("div"),k(Fr.$$.fragment),Gw=l(),zt=r("p"),Kw=n("The "),ka=r("a"),Jw=n("TFLongformerForTokenClassification"),Xw=n(" forward method, overrides the "),Pl=r("code"),Yw=n("__call__"),Zw=n(" special method."),ek=l(),k(kn.$$.fragment),ok=l(),Ol=r("p"),tk=n("Example:"),nk=l(),k(xr.$$.fragment),Tc=l(),qt=r("h2"),vn=r("a"),jl=r("span"),k(Mr.$$.fragment),sk=l(),Al=r("span"),rk=n("TFLongformerForMultipleChoice"),yc=l(),De=r("div"),k(Er.$$.fragment),ak=l(),Il=r("p"),ik=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),lk=l(),zr=r("p"),dk=n("This model inherits from "),va=r("a"),ck=n("TFPreTrainedModel"),hk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mk=l(),qr=r("p"),pk=n("This model is also a "),Cr=r("a"),fk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uk=l(),k(bn.$$.fragment),_k=l(),no=r("div"),k(Nr.$$.fragment),wk=l(),Ct=r("p"),kk=n("The "),ba=r("a"),vk=n("TFLongformerForMultipleChoice"),bk=n(" forward method, overrides the "),Sl=r("code"),Tk=n("__call__"),yk=n(" special method."),Lk=l(),k(Tn.$$.fragment),$k=l(),Dl=r("p"),Fk=n("Example:"),xk=l(),k(Pr.$$.fragment),this.h()},l(t){const p=ny('[data-svelte="svelte-1phssyn"]',document.head);f=a(p,"META",{name:!0,content:!0}),p.forEach(o),x=d(t),g=a(t,"H1",{class:!0});var Or=i(g);u=a(Or,"A",{id:!0,class:!0,href:!0});var Bl=i(u);$=a(Bl,"SPAN",{});var Wl=i($);v(w.$$.fragment,Wl),Wl.forEach(o),Bl.forEach(o),_=d(Or),M=a(Or,"SPAN",{});var Ql=i(M);de=s(Ql,"Longformer"),Ql.forEach(o),Or.forEach(o),X=d(t),E=a(t,"P",{});var yn=i(E);ne=a(yn,"STRONG",{});var Ul=i(ne);Q=s(Ul,"DISCLAIMER:"),Ul.forEach(o),ce=s(yn," This model is still a work in progress, if you see something strange, file a "),Z=a(yn,"A",{href:!0,rel:!0});var Hl=i(Z);U=s(Hl,"Github Issue"),Hl.forEach(o),he=s(yn,"."),yn.forEach(o),re=d(t),H=a(t,"H2",{class:!0});var jr=i(H);N=a(jr,"A",{id:!0,class:!0,href:!0});var Rl=i(N);se=a(Rl,"SPAN",{});var Vl=i(se);v(K.$$.fragment,Vl),Vl.forEach(o),Rl.forEach(o),z=d(jr),q=a(jr,"SPAN",{});var Gl=i(q);me=s(Gl,"Overview"),Gl.forEach(o),jr.forEach(o),D=d(t),Y=a(t,"P",{});var Ar=i(Y);pe=s(Ar,"The Longformer model was presented in "),A=a(Ar,"A",{href:!0,rel:!0});var Kl=i(A);fe=s(Kl,"Longformer: The Long-Document Transformer"),Kl.forEach(o),ge=s(Ar," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Ar.forEach(o),C=d(t),ee=a(t,"P",{});var Jl=i(ee);R=s(Jl,"The abstract from the paper is the following:"),Jl.forEach(o),ae=d(t),oe=a(t,"P",{});var Xl=i(oe);I=a(Xl,"EM",{});var Yl=i(I);ue=s(Yl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Yl.forEach(o),Xl.forEach(o),ie=d(t),P=a(t,"P",{});var Zl=i(P);_e=s(Zl,"Tips:"),Zl.forEach(o),B=d(t),te=a(t,"UL",{});var ed=i(te);m=a(ed,"LI",{});var Ln=i(m);F=s(Ln,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),J=a(Ln,"CODE",{});var Mk=i(J);Le=s(Mk,"token_type_ids"),Mk.forEach(o),$e=s(Ln,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),O=a(Ln,"CODE",{});var Ek=i(O);Fe=s(Ek,"tokenizer.sep_token"),Ek.forEach(o),xe=s(Ln,` (or
`),be=a(Ln,"CODE",{});var zk=i(be);j=s(zk,"</s>"),zk.forEach(o),V=s(Ln,")."),Ln.forEach(o),ed.forEach(o),Te=d(t),le=a(t,"P",{});var Ta=i(le);G=s(Ta,"This model was contributed by "),ke=a(Ta,"A",{href:!0,rel:!0});var qk=i(ke);Me=s(qk,"beltagy"),qk.forEach(o),we=s(Ta,". The Authors\u2019 code can be found "),ve=a(Ta,"A",{href:!0,rel:!0});var Ck=i(ve);Oh=s(Ck,"here"),Ck.forEach(o),jh=s(Ta,"."),Ta.forEach(o),sd=d(t),Oo=a(t,"H2",{class:!0});var $c=i(Oo);Ot=a($c,"A",{id:!0,class:!0,href:!0});var Nk=i(Ot);Va=a(Nk,"SPAN",{});var Pk=i(Va);v($n.$$.fragment,Pk),Pk.forEach(o),Nk.forEach(o),Ah=d($c),Ga=a($c,"SPAN",{});var Ok=i(Ga);Ih=s(Ok,"Longformer Self Attention"),Ok.forEach(o),$c.forEach(o),rd=d(t),ye=a(t,"P",{});var Ne=i(ye);Sh=s(Ne,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ad=Pt(Ne),id=s(Ne,` previous tokens and
`),ld=Pt(Ne),dd=s(Ne," succeding tokens with "),cd=Pt(Ne),hd=s(Ne,` being the window length as defined in
`),Ka=a(Ne,"CODE",{});var jk=i(Ka);Dh=s(jk,"config.attention_window"),jk.forEach(o),Bh=s(Ne,". Note that "),Ja=a(Ne,"CODE",{});var Ak=i(Ja);Wh=s(Ak,"config.attention_window"),Ak.forEach(o),Qh=s(Ne," can be of type "),Xa=a(Ne,"CODE",{});var Ik=i(Xa);Uh=s(Ik,"List"),Ik.forEach(o),Hh=s(Ne,` to define a
different `),md=Pt(Ne),pd=s(Ne,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Ya=a(Ne,"CODE",{});var Sk=i(Ya);Rh=s(Sk,"BertSelfAttention"),Sk.forEach(o),Vh=s(Ne,"."),Ne.forEach(o),fd=d(t),uo=a(t,"P",{});var ya=i(uo);Gh=s(ya,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),gd=Pt(ya),ud=s(ya,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Za=a(ya,"EM",{});var Dk=i(Za);Kh=s(Dk,"symmetric"),Dk.forEach(o),Jh=s(ya,"."),ya.forEach(o),_d=d(t),_o=a(t,"P",{});var La=i(_o);Xh=s(La,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ei=a(La,"CODE",{});var Bk=i(ei);Yh=s(Bk,"global_attention_mask"),Bk.forEach(o),Zh=s(La,` at run-time appropriately. All Longformer models employ the following logic for
`),oi=a(La,"CODE",{});var Wk=i(oi);em=s(Wk,"global_attention_mask"),Wk.forEach(o),om=s(La,":"),La.forEach(o),wd=d(t),jt=a(t,"UL",{});var Fc=i(jt);ti=a(Fc,"LI",{});var Qk=i(ti);tm=s(Qk,"0: the token attends \u201Clocally\u201D,"),Qk.forEach(o),nm=d(Fc),ni=a(Fc,"LI",{});var Uk=i(ni);sm=s(Uk,"1: the token attends \u201Cglobally\u201D."),Uk.forEach(o),Fc.forEach(o),kd=d(t),At=a(t,"P",{});var xc=i(At);rm=s(xc,"For more information please also refer to "),Ir=a(xc,"A",{href:!0});var Hk=i(Ir);am=s(Hk,"forward()"),Hk.forEach(o),im=s(xc," method."),xc.forEach(o),vd=d(t),Ve=a(t,"P",{});var ko=i(Ve);lm=s(ko,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),bd=Pt(ko),Td=s(ko,` to
`),yd=Pt(ko),Ld=s(ko,", with "),$d=Pt(ko),Fd=s(ko," being the sequence length and "),xd=Pt(ko),Md=s(ko,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),ko.forEach(o),Ed=d(t),It=a(t,"P",{});var Mc=i(It);dm=s(Mc,"For more information, please refer to the official "),Fn=a(Mc,"A",{href:!0,rel:!0});var Rk=i(Fn);cm=s(Rk,"paper"),Rk.forEach(o),hm=s(Mc,"."),Mc.forEach(o),zd=d(t),jo=a(t,"H2",{class:!0});var Ec=i(jo);St=a(Ec,"A",{id:!0,class:!0,href:!0});var Vk=i(St);si=a(Vk,"SPAN",{});var Gk=i(si);v(xn.$$.fragment,Gk),Gk.forEach(o),Vk.forEach(o),mm=d(Ec),ri=a(Ec,"SPAN",{});var Kk=i(ri);pm=s(Kk,"Training"),Kk.forEach(o),Ec.forEach(o),qd=d(t),Ao=a(t,"P",{});var od=i(Ao);Sr=a(od,"A",{href:!0});var Jk=i(Sr);fm=s(Jk,"LongformerForMaskedLM"),Jk.forEach(o),gm=s(od," is trained the exact same way "),Dr=a(od,"A",{href:!0});var Xk=i(Dr);um=s(Xk,"RobertaForMaskedLM"),Xk.forEach(o),_m=s(od,` is
trained and should be used as follows:`),od.forEach(o),Cd=d(t),v(Mn.$$.fragment,t),Nd=d(t),Io=a(t,"H2",{class:!0});var zc=i(Io);Dt=a(zc,"A",{id:!0,class:!0,href:!0});var Yk=i(Dt);ai=a(Yk,"SPAN",{});var Zk=i(ai);v(En.$$.fragment,Zk),Zk.forEach(o),Yk.forEach(o),wm=d(zc),ii=a(zc,"SPAN",{});var ev=i(ii);km=s(ev,"LongformerConfig"),ev.forEach(o),zc.forEach(o),Pd=d(t),Oe=a(t,"DIV",{class:!0});var io=i(Oe);v(zn.$$.fragment,io),vm=d(io),So=a(io,"P",{});var $a=i(So);bm=s($a,"This is the configuration class to store the configuration of a "),Br=a($a,"A",{href:!0});var ov=i(Br);Tm=s(ov,"LongformerModel"),ov.forEach(o),ym=s($a," or a "),Wr=a($a,"A",{href:!0});var tv=i(Wr);Lm=s(tv,"TFLongformerModel"),tv.forEach(o),$m=s($a,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),$a.forEach(o),Fm=d(io),Do=a(io,"P",{});var Fa=i(Do);xm=s(Fa,"This is the configuration class to store the configuration of a "),Qr=a(Fa,"A",{href:!0});var nv=i(Qr);Mm=s(nv,"LongformerModel"),nv.forEach(o),Em=s(Fa,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),qn=a(Fa,"A",{href:!0,rel:!0});var sv=i(qn);zm=s(sv,"roberta-base"),sv.forEach(o),qm=s(Fa," architecture with a sequence length 4,096."),Fa.forEach(o),Cm=d(io),Bo=a(io,"P",{});var xa=i(Bo);Nm=s(xa,"The "),Ur=a(xa,"A",{href:!0});var rv=i(Ur);Pm=s(rv,"LongformerConfig"),rv.forEach(o),Om=s(xa," class directly inherits "),Hr=a(xa,"A",{href:!0});var av=i(Hr);jm=s(av,"RobertaConfig"),av.forEach(o),Am=s(xa,`. It reuses the same defaults. Please check the
parent class for more information.`),xa.forEach(o),Im=d(io),li=a(io,"P",{});var iv=i(li);Sm=s(iv,"Example:"),iv.forEach(o),Dm=d(io),v(Cn.$$.fragment,io),io.forEach(o),Od=d(t),Wo=a(t,"H2",{class:!0});var qc=i(Wo);Bt=a(qc,"A",{id:!0,class:!0,href:!0});var lv=i(Bt);di=a(lv,"SPAN",{});var dv=i(di);v(Nn.$$.fragment,dv),dv.forEach(o),lv.forEach(o),Bm=d(qc),ci=a(qc,"SPAN",{});var cv=i(ci);Wm=s(cv,"LongformerTokenizer"),cv.forEach(o),qc.forEach(o),jd=d(t),fo=a(t,"DIV",{class:!0});var Ma=i(fo);v(Pn.$$.fragment,Ma),Qm=d(Ma),hi=a(Ma,"P",{});var hv=i(hi);Um=s(hv,"Construct a Longformer tokenizer."),hv.forEach(o),Hm=d(Ma),Wt=a(Ma,"P",{});var td=i(Wt);Rr=a(td,"A",{href:!0});var mv=i(Rr);Rm=s(mv,"LongformerTokenizer"),mv.forEach(o),Vm=s(td," is identical to "),Vr=a(td,"A",{href:!0});var pv=i(Vr);Gm=s(pv,"RobertaTokenizer"),pv.forEach(o),Km=s(td,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),td.forEach(o),Ma.forEach(o),Ad=d(t),Qo=a(t,"H2",{class:!0});var Cc=i(Qo);Qt=a(Cc,"A",{id:!0,class:!0,href:!0});var fv=i(Qt);mi=a(fv,"SPAN",{});var gv=i(mi);v(On.$$.fragment,gv),gv.forEach(o),fv.forEach(o),Jm=d(Cc),pi=a(Cc,"SPAN",{});var uv=i(pi);Xm=s(uv,"LongformerTokenizerFast"),uv.forEach(o),Cc.forEach(o),Id=d(t),go=a(t,"DIV",{class:!0});var Ea=i(go);v(jn.$$.fragment,Ea),Ym=d(Ea),An=a(Ea,"P",{});var Nc=i(An);Zm=s(Nc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),fi=a(Nc,"EM",{});var _v=i(fi);ep=s(_v,"tokenizers"),_v.forEach(o),op=s(Nc," library)."),Nc.forEach(o),tp=d(Ea),Ut=a(Ea,"P",{});var nd=i(Ut);Gr=a(nd,"A",{href:!0});var wv=i(Gr);np=s(wv,"LongformerTokenizerFast"),wv.forEach(o),sp=s(nd," is identical to "),Kr=a(nd,"A",{href:!0});var kv=i(Kr);rp=s(kv,"RobertaTokenizerFast"),kv.forEach(o),ap=s(nd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),nd.forEach(o),Ea.forEach(o),Sd=d(t),Uo=a(t,"H2",{class:!0});var Pc=i(Uo);Ht=a(Pc,"A",{id:!0,class:!0,href:!0});var vv=i(Ht);gi=a(vv,"SPAN",{});var bv=i(gi);v(In.$$.fragment,bv),bv.forEach(o),vv.forEach(o),ip=d(Pc),ui=a(Pc,"SPAN",{});var Tv=i(ui);lp=s(Tv,"Longformer specific outputs"),Tv.forEach(o),Pc.forEach(o),Dd=d(t),Ho=a(t,"DIV",{class:!0});var Oc=i(Ho);v(Sn.$$.fragment,Oc),dp=d(Oc),_i=a(Oc,"P",{});var yv=i(_i);cp=s(yv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),yv.forEach(o),Oc.forEach(o),Bd=d(t),Ro=a(t,"DIV",{class:!0});var jc=i(Ro);v(Dn.$$.fragment,jc),hp=d(jc),wi=a(jc,"P",{});var Lv=i(wi);mp=s(Lv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Lv.forEach(o),jc.forEach(o),Wd=d(t),Vo=a(t,"DIV",{class:!0});var Ac=i(Vo);v(Bn.$$.fragment,Ac),pp=d(Ac),ki=a(Ac,"P",{});var $v=i(ki);fp=s($v,"Base class for masked language models outputs."),$v.forEach(o),Ac.forEach(o),Qd=d(t),Go=a(t,"DIV",{class:!0});var Ic=i(Go);v(Wn.$$.fragment,Ic),gp=d(Ic),vi=a(Ic,"P",{});var Fv=i(vi);up=s(Fv,"Base class for outputs of question answering Longformer models."),Fv.forEach(o),Ic.forEach(o),Ud=d(t),Ko=a(t,"DIV",{class:!0});var Sc=i(Ko);v(Qn.$$.fragment,Sc),_p=d(Sc),bi=a(Sc,"P",{});var xv=i(bi);wp=s(xv,"Base class for outputs of sentence classification models."),xv.forEach(o),Sc.forEach(o),Hd=d(t),Jo=a(t,"DIV",{class:!0});var Dc=i(Jo);v(Un.$$.fragment,Dc),kp=d(Dc),Ti=a(Dc,"P",{});var Mv=i(Ti);vp=s(Mv,"Base class for outputs of multiple choice Longformer models."),Mv.forEach(o),Dc.forEach(o),Rd=d(t),Xo=a(t,"DIV",{class:!0});var Bc=i(Xo);v(Hn.$$.fragment,Bc),bp=d(Bc),yi=a(Bc,"P",{});var Ev=i(yi);Tp=s(Ev,"Base class for outputs of token classification models."),Ev.forEach(o),Bc.forEach(o),Vd=d(t),Yo=a(t,"DIV",{class:!0});var Wc=i(Yo);v(Rn.$$.fragment,Wc),yp=d(Wc),Li=a(Wc,"P",{});var zv=i(Li);Lp=s(zv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),zv.forEach(o),Wc.forEach(o),Gd=d(t),Zo=a(t,"DIV",{class:!0});var Qc=i(Zo);v(Vn.$$.fragment,Qc),$p=d(Qc),$i=a(Qc,"P",{});var qv=i($i);Fp=s(qv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),qv.forEach(o),Qc.forEach(o),Kd=d(t),et=a(t,"DIV",{class:!0});var Uc=i(et);v(Gn.$$.fragment,Uc),xp=d(Uc),Fi=a(Uc,"P",{});var Cv=i(Fi);Mp=s(Cv,"Base class for masked language models outputs."),Cv.forEach(o),Uc.forEach(o),Jd=d(t),ot=a(t,"DIV",{class:!0});var Hc=i(ot);v(Kn.$$.fragment,Hc),Ep=d(Hc),xi=a(Hc,"P",{});var Nv=i(xi);zp=s(Nv,"Base class for outputs of question answering Longformer models."),Nv.forEach(o),Hc.forEach(o),Xd=d(t),tt=a(t,"DIV",{class:!0});var Rc=i(tt);v(Jn.$$.fragment,Rc),qp=d(Rc),Mi=a(Rc,"P",{});var Pv=i(Mi);Cp=s(Pv,"Base class for outputs of sentence classification models."),Pv.forEach(o),Rc.forEach(o),Yd=d(t),nt=a(t,"DIV",{class:!0});var Vc=i(nt);v(Xn.$$.fragment,Vc),Np=d(Vc),Ei=a(Vc,"P",{});var Ov=i(Ei);Pp=s(Ov,"Base class for outputs of multiple choice models."),Ov.forEach(o),Vc.forEach(o),Zd=d(t),st=a(t,"DIV",{class:!0});var Gc=i(st);v(Yn.$$.fragment,Gc),Op=d(Gc),zi=a(Gc,"P",{});var jv=i(zi);jp=s(jv,"Base class for outputs of token classification models."),jv.forEach(o),Gc.forEach(o),ec=d(t),rt=a(t,"H2",{class:!0});var Kc=i(rt);Rt=a(Kc,"A",{id:!0,class:!0,href:!0});var Av=i(Rt);qi=a(Av,"SPAN",{});var Iv=i(qi);v(Zn.$$.fragment,Iv),Iv.forEach(o),Av.forEach(o),Ap=d(Kc),Ci=a(Kc,"SPAN",{});var Sv=i(Ci);Ip=s(Sv,"LongformerModel"),Sv.forEach(o),Kc.forEach(o),oc=d(t),qe=a(t,"DIV",{class:!0});var so=i(qe);v(es.$$.fragment,so),Sp=d(so),Ni=a(so,"P",{});var Dv=i(Ni);Dp=s(Dv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Dv.forEach(o),Bp=d(so),os=a(so,"P",{});var Jc=i(os);Wp=s(Jc,"This model inherits from "),Jr=a(Jc,"A",{href:!0});var Bv=i(Jr);Qp=s(Bv,"PreTrainedModel"),Bv.forEach(o),Up=s(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(o),Hp=d(so),ts=a(so,"P",{});var Xc=i(ts);Rp=s(Xc,"This model is also a PyTorch "),ns=a(Xc,"A",{href:!0,rel:!0});var Wv=i(ns);Vp=s(Wv,"torch.nn.Module"),Wv.forEach(o),Gp=s(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(o),Kp=d(so),at=a(so,"P",{});var za=i(at);Jp=s(za,"This class copied code from "),Xr=a(za,"A",{href:!0});var Qv=i(Xr);Xp=s(Qv,"RobertaModel"),Qv.forEach(o),Yp=s(za,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),ss=a(za,"A",{href:!0,rel:!0});var Uv=i(ss);Zp=s(Uv,`Longformer:
the Long-Document Transformer`),Uv.forEach(o),ef=s(za,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),za.forEach(o),of=d(so),rs=a(so,"P",{});var Yc=i(rs);tf=s(Yc,"The self-attention module "),Pi=a(Yc,"CODE",{});var Hv=i(Pi);nf=s(Hv,"LongformerSelfAttention"),Hv.forEach(o),sf=s(Yc,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Yc.forEach(o),rf=d(so),Ge=a(so,"DIV",{class:!0});var vo=i(Ge);v(as.$$.fragment,vo),af=d(vo),it=a(vo,"P",{});var qa=i(it);lf=s(qa,"The "),Yr=a(qa,"A",{href:!0});var Rv=i(Yr);df=s(Rv,"LongformerModel"),Rv.forEach(o),cf=s(qa," forward method, overrides the "),Oi=a(qa,"CODE",{});var Vv=i(Oi);hf=s(Vv,"__call__"),Vv.forEach(o),mf=s(qa," special method."),qa.forEach(o),pf=d(vo),v(Vt.$$.fragment,vo),ff=d(vo),ji=a(vo,"P",{});var Gv=i(ji);gf=s(Gv,"Examples:"),Gv.forEach(o),uf=d(vo),v(is.$$.fragment,vo),vo.forEach(o),so.forEach(o),tc=d(t),lt=a(t,"H2",{class:!0});var Zc=i(lt);Gt=a(Zc,"A",{id:!0,class:!0,href:!0});var Kv=i(Gt);Ai=a(Kv,"SPAN",{});var Jv=i(Ai);v(ls.$$.fragment,Jv),Jv.forEach(o),Kv.forEach(o),_f=d(Zc),Ii=a(Zc,"SPAN",{});var Xv=i(Ii);wf=s(Xv,"LongformerForMaskedLM"),Xv.forEach(o),Zc.forEach(o),nc=d(t),We=a(t,"DIV",{class:!0});var bo=i(We);v(ds.$$.fragment,bo),kf=d(bo),cs=a(bo,"P",{});var eh=i(cs);vf=s(eh,"Longformer Model with a "),Si=a(eh,"CODE",{});var Yv=i(Si);bf=s(Yv,"language modeling"),Yv.forEach(o),Tf=s(eh," head on top."),eh.forEach(o),yf=d(bo),hs=a(bo,"P",{});var oh=i(hs);Lf=s(oh,"This model inherits from "),Zr=a(oh,"A",{href:!0});var Zv=i(Zr);$f=s(Zv,"PreTrainedModel"),Zv.forEach(o),Ff=s(oh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oh.forEach(o),xf=d(bo),ms=a(bo,"P",{});var th=i(ms);Mf=s(th,"This model is also a PyTorch "),ps=a(th,"A",{href:!0,rel:!0});var eb=i(ps);Ef=s(eb,"torch.nn.Module"),eb.forEach(o),zf=s(th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th.forEach(o),qf=d(bo),Ke=a(bo,"DIV",{class:!0});var To=i(Ke);v(fs.$$.fragment,To),Cf=d(To),dt=a(To,"P",{});var Ca=i(dt);Nf=s(Ca,"The "),ea=a(Ca,"A",{href:!0});var ob=i(ea);Pf=s(ob,"LongformerForMaskedLM"),ob.forEach(o),Of=s(Ca," forward method, overrides the "),Di=a(Ca,"CODE",{});var tb=i(Di);jf=s(tb,"__call__"),tb.forEach(o),Af=s(Ca," special method."),Ca.forEach(o),If=d(To),v(Kt.$$.fragment,To),Sf=d(To),Bi=a(To,"P",{});var nb=i(Bi);Df=s(nb,"Examples:"),nb.forEach(o),Bf=d(To),v(gs.$$.fragment,To),To.forEach(o),bo.forEach(o),sc=d(t),ct=a(t,"H2",{class:!0});var nh=i(ct);Jt=a(nh,"A",{id:!0,class:!0,href:!0});var sb=i(Jt);Wi=a(sb,"SPAN",{});var rb=i(Wi);v(us.$$.fragment,rb),rb.forEach(o),sb.forEach(o),Wf=d(nh),Qi=a(nh,"SPAN",{});var ab=i(Qi);Qf=s(ab,"LongformerForSequenceClassification"),ab.forEach(o),nh.forEach(o),rc=d(t),Qe=a(t,"DIV",{class:!0});var yo=i(Qe);v(_s.$$.fragment,yo),Uf=d(yo),Ui=a(yo,"P",{});var ib=i(Ui);Hf=s(ib,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ib.forEach(o),Rf=d(yo),ws=a(yo,"P",{});var sh=i(ws);Vf=s(sh,"This model inherits from "),oa=a(sh,"A",{href:!0});var lb=i(oa);Gf=s(lb,"PreTrainedModel"),lb.forEach(o),Kf=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(o),Jf=d(yo),ks=a(yo,"P",{});var rh=i(ks);Xf=s(rh,"This model is also a PyTorch "),vs=a(rh,"A",{href:!0,rel:!0});var db=i(vs);Yf=s(db,"torch.nn.Module"),db.forEach(o),Zf=s(rh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh.forEach(o),eg=d(yo),Ce=a(yo,"DIV",{class:!0});var ro=i(Ce);v(bs.$$.fragment,ro),og=d(ro),ht=a(ro,"P",{});var Na=i(ht);tg=s(Na,"The "),ta=a(Na,"A",{href:!0});var cb=i(ta);ng=s(cb,"LongformerForSequenceClassification"),cb.forEach(o),sg=s(Na," forward method, overrides the "),Hi=a(Na,"CODE",{});var hb=i(Hi);rg=s(hb,"__call__"),hb.forEach(o),ag=s(Na," special method."),Na.forEach(o),ig=d(ro),v(Xt.$$.fragment,ro),lg=d(ro),Ri=a(ro,"P",{});var mb=i(Ri);dg=s(mb,"Example of single-label classification:"),mb.forEach(o),cg=d(ro),v(Ts.$$.fragment,ro),hg=d(ro),Vi=a(ro,"P",{});var pb=i(Vi);mg=s(pb,"Example of multi-label classification:"),pb.forEach(o),pg=d(ro),v(ys.$$.fragment,ro),ro.forEach(o),yo.forEach(o),ac=d(t),mt=a(t,"H2",{class:!0});var ah=i(mt);Yt=a(ah,"A",{id:!0,class:!0,href:!0});var fb=i(Yt);Gi=a(fb,"SPAN",{});var gb=i(Gi);v(Ls.$$.fragment,gb),gb.forEach(o),fb.forEach(o),fg=d(ah),Ki=a(ah,"SPAN",{});var ub=i(Ki);gg=s(ub,"LongformerForMultipleChoice"),ub.forEach(o),ah.forEach(o),ic=d(t),Ue=a(t,"DIV",{class:!0});var Lo=i(Ue);v($s.$$.fragment,Lo),ug=d(Lo),Ji=a(Lo,"P",{});var _b=i(Ji);_g=s(_b,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_b.forEach(o),wg=d(Lo),Fs=a(Lo,"P",{});var ih=i(Fs);kg=s(ih,"This model inherits from "),na=a(ih,"A",{href:!0});var wb=i(na);vg=s(wb,"PreTrainedModel"),wb.forEach(o),bg=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(o),Tg=d(Lo),xs=a(Lo,"P",{});var lh=i(xs);yg=s(lh,"This model is also a PyTorch "),Ms=a(lh,"A",{href:!0,rel:!0});var kb=i(Ms);Lg=s(kb,"torch.nn.Module"),kb.forEach(o),$g=s(lh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lh.forEach(o),Fg=d(Lo),Je=a(Lo,"DIV",{class:!0});var $o=i(Je);v(Es.$$.fragment,$o),xg=d($o),pt=a($o,"P",{});var Pa=i(pt);Mg=s(Pa,"The "),sa=a(Pa,"A",{href:!0});var vb=i(sa);Eg=s(vb,"LongformerForMultipleChoice"),vb.forEach(o),zg=s(Pa," forward method, overrides the "),Xi=a(Pa,"CODE",{});var bb=i(Xi);qg=s(bb,"__call__"),bb.forEach(o),Cg=s(Pa," special method."),Pa.forEach(o),Ng=d($o),v(Zt.$$.fragment,$o),Pg=d($o),Yi=a($o,"P",{});var Tb=i(Yi);Og=s(Tb,"Example:"),Tb.forEach(o),jg=d($o),v(zs.$$.fragment,$o),$o.forEach(o),Lo.forEach(o),lc=d(t),ft=a(t,"H2",{class:!0});var dh=i(ft);en=a(dh,"A",{id:!0,class:!0,href:!0});var yb=i(en);Zi=a(yb,"SPAN",{});var Lb=i(Zi);v(qs.$$.fragment,Lb),Lb.forEach(o),yb.forEach(o),Ag=d(dh),el=a(dh,"SPAN",{});var $b=i(el);Ig=s($b,"LongformerForTokenClassification"),$b.forEach(o),dh.forEach(o),dc=d(t),He=a(t,"DIV",{class:!0});var Fo=i(He);v(Cs.$$.fragment,Fo),Sg=d(Fo),ol=a(Fo,"P",{});var Fb=i(ol);Dg=s(Fb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Fb.forEach(o),Bg=d(Fo),Ns=a(Fo,"P",{});var ch=i(Ns);Wg=s(ch,"This model inherits from "),ra=a(ch,"A",{href:!0});var xb=i(ra);Qg=s(xb,"PreTrainedModel"),xb.forEach(o),Ug=s(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(o),Hg=d(Fo),Ps=a(Fo,"P",{});var hh=i(Ps);Rg=s(hh,"This model is also a PyTorch "),Os=a(hh,"A",{href:!0,rel:!0});var Mb=i(Os);Vg=s(Mb,"torch.nn.Module"),Mb.forEach(o),Gg=s(hh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hh.forEach(o),Kg=d(Fo),Xe=a(Fo,"DIV",{class:!0});var xo=i(Xe);v(js.$$.fragment,xo),Jg=d(xo),gt=a(xo,"P",{});var Oa=i(gt);Xg=s(Oa,"The "),aa=a(Oa,"A",{href:!0});var Eb=i(aa);Yg=s(Eb,"LongformerForTokenClassification"),Eb.forEach(o),Zg=s(Oa," forward method, overrides the "),tl=a(Oa,"CODE",{});var zb=i(tl);eu=s(zb,"__call__"),zb.forEach(o),ou=s(Oa," special method."),Oa.forEach(o),tu=d(xo),v(on.$$.fragment,xo),nu=d(xo),nl=a(xo,"P",{});var qb=i(nl);su=s(qb,"Example:"),qb.forEach(o),ru=d(xo),v(As.$$.fragment,xo),xo.forEach(o),Fo.forEach(o),cc=d(t),ut=a(t,"H2",{class:!0});var mh=i(ut);tn=a(mh,"A",{id:!0,class:!0,href:!0});var Cb=i(tn);sl=a(Cb,"SPAN",{});var Nb=i(sl);v(Is.$$.fragment,Nb),Nb.forEach(o),Cb.forEach(o),au=d(mh),rl=a(mh,"SPAN",{});var Pb=i(rl);iu=s(Pb,"LongformerForQuestionAnswering"),Pb.forEach(o),mh.forEach(o),hc=d(t),Re=a(t,"DIV",{class:!0});var Mo=i(Re);v(Ss.$$.fragment,Mo),lu=d(Mo),_t=a(Mo,"P",{});var ja=i(_t);du=s(ja,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),al=a(ja,"CODE",{});var Ob=i(al);cu=s(Ob,"span start logits"),Ob.forEach(o),hu=s(ja," and "),il=a(ja,"CODE",{});var jb=i(il);mu=s(jb,"span end logits"),jb.forEach(o),pu=s(ja,")."),ja.forEach(o),fu=d(Mo),Ds=a(Mo,"P",{});var ph=i(Ds);gu=s(ph,"This model inherits from "),ia=a(ph,"A",{href:!0});var Ab=i(ia);uu=s(Ab,"PreTrainedModel"),Ab.forEach(o),_u=s(ph,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ph.forEach(o),wu=d(Mo),Bs=a(Mo,"P",{});var fh=i(Bs);ku=s(fh,"This model is also a PyTorch "),Ws=a(fh,"A",{href:!0,rel:!0});var Ib=i(Ws);vu=s(Ib,"torch.nn.Module"),Ib.forEach(o),bu=s(fh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fh.forEach(o),Tu=d(Mo),Ye=a(Mo,"DIV",{class:!0});var Eo=i(Ye);v(Qs.$$.fragment,Eo),yu=d(Eo),wt=a(Eo,"P",{});var Aa=i(wt);Lu=s(Aa,"The "),la=a(Aa,"A",{href:!0});var Sb=i(la);$u=s(Sb,"LongformerForQuestionAnswering"),Sb.forEach(o),Fu=s(Aa," forward method, overrides the "),ll=a(Aa,"CODE",{});var Db=i(ll);xu=s(Db,"__call__"),Db.forEach(o),Mu=s(Aa," special method."),Aa.forEach(o),Eu=d(Eo),v(nn.$$.fragment,Eo),zu=d(Eo),dl=a(Eo,"P",{});var Bb=i(dl);qu=s(Bb,"Examples:"),Bb.forEach(o),Cu=d(Eo),v(Us.$$.fragment,Eo),Eo.forEach(o),Mo.forEach(o),mc=d(t),kt=a(t,"H2",{class:!0});var gh=i(kt);sn=a(gh,"A",{id:!0,class:!0,href:!0});var Wb=i(sn);cl=a(Wb,"SPAN",{});var Qb=i(cl);v(Hs.$$.fragment,Qb),Qb.forEach(o),Wb.forEach(o),Nu=d(gh),hl=a(gh,"SPAN",{});var Ub=i(hl);Pu=s(Ub,"TFLongformerModel"),Ub.forEach(o),gh.forEach(o),pc=d(t),Ee=a(t,"DIV",{class:!0});var Be=i(Ee);v(Rs.$$.fragment,Be),Ou=d(Be),ml=a(Be,"P",{});var Hb=i(ml);ju=s(Hb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Hb.forEach(o),Au=d(Be),Vs=a(Be,"P",{});var uh=i(Vs);Iu=s(uh,"This model inherits from "),da=a(uh,"A",{href:!0});var Rb=i(da);Su=s(Rb,"TFPreTrainedModel"),Rb.forEach(o),Du=s(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(o),Bu=d(Be),Gs=a(Be,"P",{});var _h=i(Gs);Wu=s(_h,"This model is also a "),Ks=a(_h,"A",{href:!0,rel:!0});var Vb=i(Ks);Qu=s(Vb,"tf.keras.Model"),Vb.forEach(o),Uu=s(_h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h.forEach(o),Hu=d(Be),v(rn.$$.fragment,Be),Ru=d(Be),vt=a(Be,"P",{});var Ia=i(vt);Vu=s(Ia,"This class copies code from "),ca=a(Ia,"A",{href:!0});var Gb=i(ca);Gu=s(Gb,"TFRobertaModel"),Gb.forEach(o),Ku=s(Ia,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Js=a(Ia,"A",{href:!0,rel:!0});var Kb=i(Js);Ju=s(Kb,"Longformer: the Long-Document Transformer"),Kb.forEach(o),Xu=s(Ia,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ia.forEach(o),Yu=d(Be),Xs=a(Be,"P",{});var wh=i(Xs);Zu=s(wh,"The self-attention module "),pl=a(wh,"CODE",{});var Jb=i(pl);e_=s(Jb,"TFLongformerSelfAttention"),Jb.forEach(o),o_=s(wh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),wh.forEach(o),t_=d(Be),wo=a(Be,"DIV",{class:!0});var Sa=i(wo);v(Ys.$$.fragment,Sa),n_=d(Sa),bt=a(Sa,"P",{});var Da=i(bt);s_=s(Da,"The "),ha=a(Da,"A",{href:!0});var Xb=i(ha);r_=s(Xb,"TFLongformerModel"),Xb.forEach(o),a_=s(Da," forward method, overrides the "),fl=a(Da,"CODE",{});var Yb=i(fl);i_=s(Yb,"__call__"),Yb.forEach(o),l_=s(Da," special method."),Da.forEach(o),d_=d(Sa),v(an.$$.fragment,Sa),Sa.forEach(o),Be.forEach(o),fc=d(t),Tt=a(t,"H2",{class:!0});var kh=i(Tt);ln=a(kh,"A",{id:!0,class:!0,href:!0});var Zb=i(ln);gl=a(Zb,"SPAN",{});var eT=i(gl);v(Zs.$$.fragment,eT),eT.forEach(o),Zb.forEach(o),c_=d(kh),ul=a(kh,"SPAN",{});var oT=i(ul);h_=s(oT,"TFLongformerForMaskedLM"),oT.forEach(o),kh.forEach(o),gc=d(t),je=a(t,"DIV",{class:!0});var lo=i(je);v(er.$$.fragment,lo),m_=d(lo),or=a(lo,"P",{});var vh=i(or);p_=s(vh,"Longformer Model with a "),_l=a(vh,"CODE",{});var tT=i(_l);f_=s(tT,"language modeling"),tT.forEach(o),g_=s(vh," head on top."),vh.forEach(o),u_=d(lo),tr=a(lo,"P",{});var bh=i(tr);__=s(bh,"This model inherits from "),ma=a(bh,"A",{href:!0});var nT=i(ma);w_=s(nT,"TFPreTrainedModel"),nT.forEach(o),k_=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(o),v_=d(lo),nr=a(lo,"P",{});var Th=i(nr);b_=s(Th,"This model is also a "),sr=a(Th,"A",{href:!0,rel:!0});var sT=i(sr);T_=s(sT,"tf.keras.Model"),sT.forEach(o),y_=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(o),L_=d(lo),v(dn.$$.fragment,lo),$_=d(lo),Ze=a(lo,"DIV",{class:!0});var zo=i(Ze);v(rr.$$.fragment,zo),F_=d(zo),yt=a(zo,"P",{});var Ba=i(yt);x_=s(Ba,"The "),pa=a(Ba,"A",{href:!0});var rT=i(pa);M_=s(rT,"TFLongformerForMaskedLM"),rT.forEach(o),E_=s(Ba," forward method, overrides the "),wl=a(Ba,"CODE",{});var aT=i(wl);z_=s(aT,"__call__"),aT.forEach(o),q_=s(Ba," special method."),Ba.forEach(o),C_=d(zo),v(cn.$$.fragment,zo),N_=d(zo),kl=a(zo,"P",{});var iT=i(kl);P_=s(iT,"Example:"),iT.forEach(o),O_=d(zo),v(ar.$$.fragment,zo),zo.forEach(o),lo.forEach(o),uc=d(t),Lt=a(t,"H2",{class:!0});var yh=i(Lt);hn=a(yh,"A",{id:!0,class:!0,href:!0});var lT=i(hn);vl=a(lT,"SPAN",{});var dT=i(vl);v(ir.$$.fragment,dT),dT.forEach(o),lT.forEach(o),j_=d(yh),bl=a(yh,"SPAN",{});var cT=i(bl);A_=s(cT,"TFLongformerForQuestionAnswering"),cT.forEach(o),yh.forEach(o),_c=d(t),Ae=a(t,"DIV",{class:!0});var co=i(Ae);v(lr.$$.fragment,co),I_=d(co),$t=a(co,"P",{});var Wa=i($t);S_=s(Wa,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),Tl=a(Wa,"CODE",{});var hT=i(Tl);D_=s(hT,"span start logits"),hT.forEach(o),B_=s(Wa," and "),yl=a(Wa,"CODE",{});var mT=i(yl);W_=s(mT,"span end logits"),mT.forEach(o),Q_=s(Wa,")."),Wa.forEach(o),U_=d(co),dr=a(co,"P",{});var Lh=i(dr);H_=s(Lh,"This model inherits from "),fa=a(Lh,"A",{href:!0});var pT=i(fa);R_=s(pT,"TFPreTrainedModel"),pT.forEach(o),V_=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(o),G_=d(co),cr=a(co,"P",{});var $h=i(cr);K_=s($h,"This model is also a "),hr=a($h,"A",{href:!0,rel:!0});var fT=i(hr);J_=s(fT,"tf.keras.Model"),fT.forEach(o),X_=s($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(o),Y_=d(co),v(mn.$$.fragment,co),Z_=d(co),eo=a(co,"DIV",{class:!0});var qo=i(eo);v(mr.$$.fragment,qo),ew=d(qo),Ft=a(qo,"P",{});var Qa=i(Ft);ow=s(Qa,"The "),ga=a(Qa,"A",{href:!0});var gT=i(ga);tw=s(gT,"TFLongformerForQuestionAnswering"),gT.forEach(o),nw=s(Qa," forward method, overrides the "),Ll=a(Qa,"CODE",{});var uT=i(Ll);sw=s(uT,"__call__"),uT.forEach(o),rw=s(Qa," special method."),Qa.forEach(o),aw=d(qo),v(pn.$$.fragment,qo),iw=d(qo),$l=a(qo,"P",{});var _T=i($l);lw=s(_T,"Example:"),_T.forEach(o),dw=d(qo),v(pr.$$.fragment,qo),qo.forEach(o),co.forEach(o),wc=d(t),xt=a(t,"H2",{class:!0});var Fh=i(xt);fn=a(Fh,"A",{id:!0,class:!0,href:!0});var wT=i(fn);Fl=a(wT,"SPAN",{});var kT=i(Fl);v(fr.$$.fragment,kT),kT.forEach(o),wT.forEach(o),cw=d(Fh),xl=a(Fh,"SPAN",{});var vT=i(xl);hw=s(vT,"TFLongformerForSequenceClassification"),vT.forEach(o),Fh.forEach(o),kc=d(t),Ie=a(t,"DIV",{class:!0});var ho=i(Ie);v(gr.$$.fragment,ho),mw=d(ho),Ml=a(ho,"P",{});var bT=i(Ml);pw=s(bT,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bT.forEach(o),fw=d(ho),ur=a(ho,"P",{});var xh=i(ur);gw=s(xh,"This model inherits from "),ua=a(xh,"A",{href:!0});var TT=i(ua);uw=s(TT,"TFPreTrainedModel"),TT.forEach(o),_w=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(o),ww=d(ho),_r=a(ho,"P",{});var Mh=i(_r);kw=s(Mh,"This model is also a "),wr=a(Mh,"A",{href:!0,rel:!0});var yT=i(wr);vw=s(yT,"tf.keras.Model"),yT.forEach(o),bw=s(Mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mh.forEach(o),Tw=d(ho),v(gn.$$.fragment,ho),yw=d(ho),oo=a(ho,"DIV",{class:!0});var Co=i(oo);v(kr.$$.fragment,Co),Lw=d(Co),Mt=a(Co,"P",{});var Ua=i(Mt);$w=s(Ua,"The "),_a=a(Ua,"A",{href:!0});var LT=i(_a);Fw=s(LT,"TFLongformerForSequenceClassification"),LT.forEach(o),xw=s(Ua," forward method, overrides the "),El=a(Ua,"CODE",{});var $T=i(El);Mw=s($T,"__call__"),$T.forEach(o),Ew=s(Ua," special method."),Ua.forEach(o),zw=d(Co),v(un.$$.fragment,Co),qw=d(Co),zl=a(Co,"P",{});var FT=i(zl);Cw=s(FT,"Example:"),FT.forEach(o),Nw=d(Co),v(vr.$$.fragment,Co),Co.forEach(o),ho.forEach(o),vc=d(t),Et=a(t,"H2",{class:!0});var Eh=i(Et);_n=a(Eh,"A",{id:!0,class:!0,href:!0});var xT=i(_n);ql=a(xT,"SPAN",{});var MT=i(ql);v(br.$$.fragment,MT),MT.forEach(o),xT.forEach(o),Pw=d(Eh),Cl=a(Eh,"SPAN",{});var ET=i(Cl);Ow=s(ET,"TFLongformerForTokenClassification"),ET.forEach(o),Eh.forEach(o),bc=d(t),Se=a(t,"DIV",{class:!0});var mo=i(Se);v(Tr.$$.fragment,mo),jw=d(mo),Nl=a(mo,"P",{});var zT=i(Nl);Aw=s(zT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),zT.forEach(o),Iw=d(mo),yr=a(mo,"P",{});var zh=i(yr);Sw=s(zh,"This model inherits from "),wa=a(zh,"A",{href:!0});var qT=i(wa);Dw=s(qT,"TFPreTrainedModel"),qT.forEach(o),Bw=s(zh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zh.forEach(o),Ww=d(mo),Lr=a(mo,"P",{});var qh=i(Lr);Qw=s(qh,"This model is also a "),$r=a(qh,"A",{href:!0,rel:!0});var CT=i($r);Uw=s(CT,"tf.keras.Model"),CT.forEach(o),Hw=s(qh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qh.forEach(o),Rw=d(mo),v(wn.$$.fragment,mo),Vw=d(mo),to=a(mo,"DIV",{class:!0});var No=i(to);v(Fr.$$.fragment,No),Gw=d(No),zt=a(No,"P",{});var Ha=i(zt);Kw=s(Ha,"The "),ka=a(Ha,"A",{href:!0});var NT=i(ka);Jw=s(NT,"TFLongformerForTokenClassification"),NT.forEach(o),Xw=s(Ha," forward method, overrides the "),Pl=a(Ha,"CODE",{});var PT=i(Pl);Yw=s(PT,"__call__"),PT.forEach(o),Zw=s(Ha," special method."),Ha.forEach(o),ek=d(No),v(kn.$$.fragment,No),ok=d(No),Ol=a(No,"P",{});var OT=i(Ol);tk=s(OT,"Example:"),OT.forEach(o),nk=d(No),v(xr.$$.fragment,No),No.forEach(o),mo.forEach(o),Tc=d(t),qt=a(t,"H2",{class:!0});var Ch=i(qt);vn=a(Ch,"A",{id:!0,class:!0,href:!0});var jT=i(vn);jl=a(jT,"SPAN",{});var AT=i(jl);v(Mr.$$.fragment,AT),AT.forEach(o),jT.forEach(o),sk=d(Ch),Al=a(Ch,"SPAN",{});var IT=i(Al);rk=s(IT,"TFLongformerForMultipleChoice"),IT.forEach(o),Ch.forEach(o),yc=d(t),De=a(t,"DIV",{class:!0});var po=i(De);v(Er.$$.fragment,po),ak=d(po),Il=a(po,"P",{});var ST=i(Il);ik=s(ST,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ST.forEach(o),lk=d(po),zr=a(po,"P",{});var Nh=i(zr);dk=s(Nh,"This model inherits from "),va=a(Nh,"A",{href:!0});var DT=i(va);ck=s(DT,"TFPreTrainedModel"),DT.forEach(o),hk=s(Nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nh.forEach(o),mk=d(po),qr=a(po,"P",{});var Ph=i(qr);pk=s(Ph,"This model is also a "),Cr=a(Ph,"A",{href:!0,rel:!0});var BT=i(Cr);fk=s(BT,"tf.keras.Model"),BT.forEach(o),gk=s(Ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ph.forEach(o),uk=d(po),v(bn.$$.fragment,po),_k=d(po),no=a(po,"DIV",{class:!0});var Po=i(no);v(Nr.$$.fragment,Po),wk=d(Po),Ct=a(Po,"P",{});var Ra=i(Ct);kk=s(Ra,"The "),ba=a(Ra,"A",{href:!0});var WT=i(ba);vk=s(WT,"TFLongformerForMultipleChoice"),WT.forEach(o),bk=s(Ra," forward method, overrides the "),Sl=a(Ra,"CODE",{});var QT=i(Sl);Tk=s(QT,"__call__"),QT.forEach(o),yk=s(Ra," special method."),Ra.forEach(o),Lk=d(Po),v(Tn.$$.fragment,Po),$k=d(Po),Dl=a(Po,"P",{});var UT=i(Dl);Fk=s(UT,"Example:"),UT.forEach(o),xk=d(Po),v(Pr.$$.fragment,Po),Po.forEach(o),po.forEach(o),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(yy)),c(u,"id","longformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#longformer"),c(g,"class","relative group"),c(Z,"href","https://github.com/huggingface/transformers/issues/new?assignees=&labels=&template=bug-report.md&title"),c(Z,"rel","nofollow"),c(N,"id","overview"),c(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(N,"href","#overview"),c(H,"class","relative group"),c(A,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(A,"rel","nofollow"),c(ke,"href","https://huggingface.co/beltagy"),c(ke,"rel","nofollow"),c(ve,"href","https://github.com/allenai/longformer"),c(ve,"rel","nofollow"),c(Ot,"id","longformer-self-attention"),c(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ot,"href","#longformer-self-attention"),c(Oo,"class","relative group"),ad.a=id,ld.a=dd,cd.a=hd,md.a=pd,gd.a=ud,c(Ir,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerModel.forward"),bd.a=Td,yd.a=Ld,$d.a=Fd,xd.a=Md,c(Fn,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(Fn,"rel","nofollow"),c(St,"id","training"),c(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(St,"href","#training"),c(jo,"class","relative group"),c(Sr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Dr,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.RobertaForMaskedLM"),c(Dt,"id","transformers.LongformerConfig"),c(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Dt,"href","#transformers.LongformerConfig"),c(Io,"class","relative group"),c(Br,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerModel"),c(Wr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerModel"),c(Qr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerModel"),c(qn,"href","https://huggingface.co/roberta-base"),c(qn,"rel","nofollow"),c(Ur,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerConfig"),c(Hr,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.RobertaConfig"),c(Oe,"class","docstring"),c(Bt,"id","transformers.LongformerTokenizer"),c(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bt,"href","#transformers.LongformerTokenizer"),c(Wo,"class","relative group"),c(Rr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizer"),c(Vr,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.RobertaTokenizer"),c(fo,"class","docstring"),c(Qt,"id","transformers.LongformerTokenizerFast"),c(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qt,"href","#transformers.LongformerTokenizerFast"),c(Qo,"class","relative group"),c(Gr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerTokenizerFast"),c(Kr,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(go,"class","docstring"),c(Ht,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ht,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Uo,"class","relative group"),c(Ho,"class","docstring"),c(Ro,"class","docstring"),c(Vo,"class","docstring"),c(Go,"class","docstring"),c(Ko,"class","docstring"),c(Jo,"class","docstring"),c(Xo,"class","docstring"),c(Yo,"class","docstring"),c(Zo,"class","docstring"),c(et,"class","docstring"),c(ot,"class","docstring"),c(tt,"class","docstring"),c(nt,"class","docstring"),c(st,"class","docstring"),c(Rt,"id","transformers.LongformerModel"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.LongformerModel"),c(rt,"class","relative group"),c(Jr,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ns,"rel","nofollow"),c(Xr,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.RobertaModel"),c(ss,"href","https://arxiv.org/abs/2004.05150"),c(ss,"rel","nofollow"),c(Yr,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerModel"),c(Ge,"class","docstring"),c(qe,"class","docstring"),c(Gt,"id","transformers.LongformerForMaskedLM"),c(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Gt,"href","#transformers.LongformerForMaskedLM"),c(lt,"class","relative group"),c(Zr,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ps,"rel","nofollow"),c(ea,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ke,"class","docstring"),c(We,"class","docstring"),c(Jt,"id","transformers.LongformerForSequenceClassification"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.LongformerForSequenceClassification"),c(ct,"class","relative group"),c(oa,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vs,"rel","nofollow"),c(ta,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),c(Ce,"class","docstring"),c(Qe,"class","docstring"),c(Yt,"id","transformers.LongformerForMultipleChoice"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.LongformerForMultipleChoice"),c(mt,"class","relative group"),c(na,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ms,"rel","nofollow"),c(sa,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),c(Je,"class","docstring"),c(Ue,"class","docstring"),c(en,"id","transformers.LongformerForTokenClassification"),c(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(en,"href","#transformers.LongformerForTokenClassification"),c(ft,"class","relative group"),c(ra,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Os,"rel","nofollow"),c(aa,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForTokenClassification"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(tn,"id","transformers.LongformerForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.LongformerForQuestionAnswering"),c(ut,"class","relative group"),c(ia,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.PreTrainedModel"),c(Ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ws,"rel","nofollow"),c(la,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),c(Ye,"class","docstring"),c(Re,"class","docstring"),c(sn,"id","transformers.TFLongformerModel"),c(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(sn,"href","#transformers.TFLongformerModel"),c(kt,"class","relative group"),c(da,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ks,"rel","nofollow"),c(ca,"href","/docs/transformers/pr_16228/en/model_doc/roberta#transformers.TFRobertaModel"),c(Js,"href","https://arxiv.org/abs/2004.05150"),c(Js,"rel","nofollow"),c(ha,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerModel"),c(wo,"class","docstring"),c(Ee,"class","docstring"),c(ln,"id","transformers.TFLongformerForMaskedLM"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.TFLongformerForMaskedLM"),c(Tt,"class","relative group"),c(ma,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c(sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(sr,"rel","nofollow"),c(pa,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),c(Ze,"class","docstring"),c(je,"class","docstring"),c(hn,"id","transformers.TFLongformerForQuestionAnswering"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.TFLongformerForQuestionAnswering"),c(Lt,"class","relative group"),c(fa,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(hr,"rel","nofollow"),c(ga,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),c(eo,"class","docstring"),c(Ae,"class","docstring"),c(fn,"id","transformers.TFLongformerForSequenceClassification"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.TFLongformerForSequenceClassification"),c(xt,"class","relative group"),c(ua,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(wr,"rel","nofollow"),c(_a,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),c(oo,"class","docstring"),c(Ie,"class","docstring"),c(_n,"id","transformers.TFLongformerForTokenClassification"),c(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_n,"href","#transformers.TFLongformerForTokenClassification"),c(Et,"class","relative group"),c(wa,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c($r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($r,"rel","nofollow"),c(ka,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),c(to,"class","docstring"),c(Se,"class","docstring"),c(vn,"id","transformers.TFLongformerForMultipleChoice"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.TFLongformerForMultipleChoice"),c(qt,"class","relative group"),c(va,"href","/docs/transformers/pr_16228/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cr,"rel","nofollow"),c(ba,"href","/docs/transformers/pr_16228/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),c(no,"class","docstring"),c(De,"class","docstring")},m(t,p){e(document.head,f),h(t,x,p),h(t,g,p),e(g,u),e(u,$),b(w,$,null),e(g,_),e(g,M),e(M,de),h(t,X,p),h(t,E,p),e(E,ne),e(ne,Q),e(E,ce),e(E,Z),e(Z,U),e(E,he),h(t,re,p),h(t,H,p),e(H,N),e(N,se),b(K,se,null),e(H,z),e(H,q),e(q,me),h(t,D,p),h(t,Y,p),e(Y,pe),e(Y,A),e(A,fe),e(Y,ge),h(t,C,p),h(t,ee,p),e(ee,R),h(t,ae,p),h(t,oe,p),e(oe,I),e(I,ue),h(t,ie,p),h(t,P,p),e(P,_e),h(t,B,p),h(t,te,p),e(te,m),e(m,F),e(m,J),e(J,Le),e(m,$e),e(m,O),e(O,Fe),e(m,xe),e(m,be),e(be,j),e(m,V),h(t,Te,p),h(t,le,p),e(le,G),e(le,ke),e(ke,Me),e(le,we),e(le,ve),e(ve,Oh),e(le,jh),h(t,sd,p),h(t,Oo,p),e(Oo,Ot),e(Ot,Va),b($n,Va,null),e(Oo,Ah),e(Oo,Ga),e(Ga,Ih),h(t,rd,p),h(t,ye,p),e(ye,Sh),ad.m(HT,ye),e(ye,id),ld.m(RT,ye),e(ye,dd),cd.m(VT,ye),e(ye,hd),e(ye,Ka),e(Ka,Dh),e(ye,Bh),e(ye,Ja),e(Ja,Wh),e(ye,Qh),e(ye,Xa),e(Xa,Uh),e(ye,Hh),md.m(GT,ye),e(ye,pd),e(ye,Ya),e(Ya,Rh),e(ye,Vh),h(t,fd,p),h(t,uo,p),e(uo,Gh),gd.m(KT,uo),e(uo,ud),e(uo,Za),e(Za,Kh),e(uo,Jh),h(t,_d,p),h(t,_o,p),e(_o,Xh),e(_o,ei),e(ei,Yh),e(_o,Zh),e(_o,oi),e(oi,em),e(_o,om),h(t,wd,p),h(t,jt,p),e(jt,ti),e(ti,tm),e(jt,nm),e(jt,ni),e(ni,sm),h(t,kd,p),h(t,At,p),e(At,rm),e(At,Ir),e(Ir,am),e(At,im),h(t,vd,p),h(t,Ve,p),e(Ve,lm),bd.m(JT,Ve),e(Ve,Td),yd.m(XT,Ve),e(Ve,Ld),$d.m(YT,Ve),e(Ve,Fd),xd.m(ZT,Ve),e(Ve,Md),h(t,Ed,p),h(t,It,p),e(It,dm),e(It,Fn),e(Fn,cm),e(It,hm),h(t,zd,p),h(t,jo,p),e(jo,St),e(St,si),b(xn,si,null),e(jo,mm),e(jo,ri),e(ri,pm),h(t,qd,p),h(t,Ao,p),e(Ao,Sr),e(Sr,fm),e(Ao,gm),e(Ao,Dr),e(Dr,um),e(Ao,_m),h(t,Cd,p),b(Mn,t,p),h(t,Nd,p),h(t,Io,p),e(Io,Dt),e(Dt,ai),b(En,ai,null),e(Io,wm),e(Io,ii),e(ii,km),h(t,Pd,p),h(t,Oe,p),b(zn,Oe,null),e(Oe,vm),e(Oe,So),e(So,bm),e(So,Br),e(Br,Tm),e(So,ym),e(So,Wr),e(Wr,Lm),e(So,$m),e(Oe,Fm),e(Oe,Do),e(Do,xm),e(Do,Qr),e(Qr,Mm),e(Do,Em),e(Do,qn),e(qn,zm),e(Do,qm),e(Oe,Cm),e(Oe,Bo),e(Bo,Nm),e(Bo,Ur),e(Ur,Pm),e(Bo,Om),e(Bo,Hr),e(Hr,jm),e(Bo,Am),e(Oe,Im),e(Oe,li),e(li,Sm),e(Oe,Dm),b(Cn,Oe,null),h(t,Od,p),h(t,Wo,p),e(Wo,Bt),e(Bt,di),b(Nn,di,null),e(Wo,Bm),e(Wo,ci),e(ci,Wm),h(t,jd,p),h(t,fo,p),b(Pn,fo,null),e(fo,Qm),e(fo,hi),e(hi,Um),e(fo,Hm),e(fo,Wt),e(Wt,Rr),e(Rr,Rm),e(Wt,Vm),e(Wt,Vr),e(Vr,Gm),e(Wt,Km),h(t,Ad,p),h(t,Qo,p),e(Qo,Qt),e(Qt,mi),b(On,mi,null),e(Qo,Jm),e(Qo,pi),e(pi,Xm),h(t,Id,p),h(t,go,p),b(jn,go,null),e(go,Ym),e(go,An),e(An,Zm),e(An,fi),e(fi,ep),e(An,op),e(go,tp),e(go,Ut),e(Ut,Gr),e(Gr,np),e(Ut,sp),e(Ut,Kr),e(Kr,rp),e(Ut,ap),h(t,Sd,p),h(t,Uo,p),e(Uo,Ht),e(Ht,gi),b(In,gi,null),e(Uo,ip),e(Uo,ui),e(ui,lp),h(t,Dd,p),h(t,Ho,p),b(Sn,Ho,null),e(Ho,dp),e(Ho,_i),e(_i,cp),h(t,Bd,p),h(t,Ro,p),b(Dn,Ro,null),e(Ro,hp),e(Ro,wi),e(wi,mp),h(t,Wd,p),h(t,Vo,p),b(Bn,Vo,null),e(Vo,pp),e(Vo,ki),e(ki,fp),h(t,Qd,p),h(t,Go,p),b(Wn,Go,null),e(Go,gp),e(Go,vi),e(vi,up),h(t,Ud,p),h(t,Ko,p),b(Qn,Ko,null),e(Ko,_p),e(Ko,bi),e(bi,wp),h(t,Hd,p),h(t,Jo,p),b(Un,Jo,null),e(Jo,kp),e(Jo,Ti),e(Ti,vp),h(t,Rd,p),h(t,Xo,p),b(Hn,Xo,null),e(Xo,bp),e(Xo,yi),e(yi,Tp),h(t,Vd,p),h(t,Yo,p),b(Rn,Yo,null),e(Yo,yp),e(Yo,Li),e(Li,Lp),h(t,Gd,p),h(t,Zo,p),b(Vn,Zo,null),e(Zo,$p),e(Zo,$i),e($i,Fp),h(t,Kd,p),h(t,et,p),b(Gn,et,null),e(et,xp),e(et,Fi),e(Fi,Mp),h(t,Jd,p),h(t,ot,p),b(Kn,ot,null),e(ot,Ep),e(ot,xi),e(xi,zp),h(t,Xd,p),h(t,tt,p),b(Jn,tt,null),e(tt,qp),e(tt,Mi),e(Mi,Cp),h(t,Yd,p),h(t,nt,p),b(Xn,nt,null),e(nt,Np),e(nt,Ei),e(Ei,Pp),h(t,Zd,p),h(t,st,p),b(Yn,st,null),e(st,Op),e(st,zi),e(zi,jp),h(t,ec,p),h(t,rt,p),e(rt,Rt),e(Rt,qi),b(Zn,qi,null),e(rt,Ap),e(rt,Ci),e(Ci,Ip),h(t,oc,p),h(t,qe,p),b(es,qe,null),e(qe,Sp),e(qe,Ni),e(Ni,Dp),e(qe,Bp),e(qe,os),e(os,Wp),e(os,Jr),e(Jr,Qp),e(os,Up),e(qe,Hp),e(qe,ts),e(ts,Rp),e(ts,ns),e(ns,Vp),e(ts,Gp),e(qe,Kp),e(qe,at),e(at,Jp),e(at,Xr),e(Xr,Xp),e(at,Yp),e(at,ss),e(ss,Zp),e(at,ef),e(qe,of),e(qe,rs),e(rs,tf),e(rs,Pi),e(Pi,nf),e(rs,sf),e(qe,rf),e(qe,Ge),b(as,Ge,null),e(Ge,af),e(Ge,it),e(it,lf),e(it,Yr),e(Yr,df),e(it,cf),e(it,Oi),e(Oi,hf),e(it,mf),e(Ge,pf),b(Vt,Ge,null),e(Ge,ff),e(Ge,ji),e(ji,gf),e(Ge,uf),b(is,Ge,null),h(t,tc,p),h(t,lt,p),e(lt,Gt),e(Gt,Ai),b(ls,Ai,null),e(lt,_f),e(lt,Ii),e(Ii,wf),h(t,nc,p),h(t,We,p),b(ds,We,null),e(We,kf),e(We,cs),e(cs,vf),e(cs,Si),e(Si,bf),e(cs,Tf),e(We,yf),e(We,hs),e(hs,Lf),e(hs,Zr),e(Zr,$f),e(hs,Ff),e(We,xf),e(We,ms),e(ms,Mf),e(ms,ps),e(ps,Ef),e(ms,zf),e(We,qf),e(We,Ke),b(fs,Ke,null),e(Ke,Cf),e(Ke,dt),e(dt,Nf),e(dt,ea),e(ea,Pf),e(dt,Of),e(dt,Di),e(Di,jf),e(dt,Af),e(Ke,If),b(Kt,Ke,null),e(Ke,Sf),e(Ke,Bi),e(Bi,Df),e(Ke,Bf),b(gs,Ke,null),h(t,sc,p),h(t,ct,p),e(ct,Jt),e(Jt,Wi),b(us,Wi,null),e(ct,Wf),e(ct,Qi),e(Qi,Qf),h(t,rc,p),h(t,Qe,p),b(_s,Qe,null),e(Qe,Uf),e(Qe,Ui),e(Ui,Hf),e(Qe,Rf),e(Qe,ws),e(ws,Vf),e(ws,oa),e(oa,Gf),e(ws,Kf),e(Qe,Jf),e(Qe,ks),e(ks,Xf),e(ks,vs),e(vs,Yf),e(ks,Zf),e(Qe,eg),e(Qe,Ce),b(bs,Ce,null),e(Ce,og),e(Ce,ht),e(ht,tg),e(ht,ta),e(ta,ng),e(ht,sg),e(ht,Hi),e(Hi,rg),e(ht,ag),e(Ce,ig),b(Xt,Ce,null),e(Ce,lg),e(Ce,Ri),e(Ri,dg),e(Ce,cg),b(Ts,Ce,null),e(Ce,hg),e(Ce,Vi),e(Vi,mg),e(Ce,pg),b(ys,Ce,null),h(t,ac,p),h(t,mt,p),e(mt,Yt),e(Yt,Gi),b(Ls,Gi,null),e(mt,fg),e(mt,Ki),e(Ki,gg),h(t,ic,p),h(t,Ue,p),b($s,Ue,null),e(Ue,ug),e(Ue,Ji),e(Ji,_g),e(Ue,wg),e(Ue,Fs),e(Fs,kg),e(Fs,na),e(na,vg),e(Fs,bg),e(Ue,Tg),e(Ue,xs),e(xs,yg),e(xs,Ms),e(Ms,Lg),e(xs,$g),e(Ue,Fg),e(Ue,Je),b(Es,Je,null),e(Je,xg),e(Je,pt),e(pt,Mg),e(pt,sa),e(sa,Eg),e(pt,zg),e(pt,Xi),e(Xi,qg),e(pt,Cg),e(Je,Ng),b(Zt,Je,null),e(Je,Pg),e(Je,Yi),e(Yi,Og),e(Je,jg),b(zs,Je,null),h(t,lc,p),h(t,ft,p),e(ft,en),e(en,Zi),b(qs,Zi,null),e(ft,Ag),e(ft,el),e(el,Ig),h(t,dc,p),h(t,He,p),b(Cs,He,null),e(He,Sg),e(He,ol),e(ol,Dg),e(He,Bg),e(He,Ns),e(Ns,Wg),e(Ns,ra),e(ra,Qg),e(Ns,Ug),e(He,Hg),e(He,Ps),e(Ps,Rg),e(Ps,Os),e(Os,Vg),e(Ps,Gg),e(He,Kg),e(He,Xe),b(js,Xe,null),e(Xe,Jg),e(Xe,gt),e(gt,Xg),e(gt,aa),e(aa,Yg),e(gt,Zg),e(gt,tl),e(tl,eu),e(gt,ou),e(Xe,tu),b(on,Xe,null),e(Xe,nu),e(Xe,nl),e(nl,su),e(Xe,ru),b(As,Xe,null),h(t,cc,p),h(t,ut,p),e(ut,tn),e(tn,sl),b(Is,sl,null),e(ut,au),e(ut,rl),e(rl,iu),h(t,hc,p),h(t,Re,p),b(Ss,Re,null),e(Re,lu),e(Re,_t),e(_t,du),e(_t,al),e(al,cu),e(_t,hu),e(_t,il),e(il,mu),e(_t,pu),e(Re,fu),e(Re,Ds),e(Ds,gu),e(Ds,ia),e(ia,uu),e(Ds,_u),e(Re,wu),e(Re,Bs),e(Bs,ku),e(Bs,Ws),e(Ws,vu),e(Bs,bu),e(Re,Tu),e(Re,Ye),b(Qs,Ye,null),e(Ye,yu),e(Ye,wt),e(wt,Lu),e(wt,la),e(la,$u),e(wt,Fu),e(wt,ll),e(ll,xu),e(wt,Mu),e(Ye,Eu),b(nn,Ye,null),e(Ye,zu),e(Ye,dl),e(dl,qu),e(Ye,Cu),b(Us,Ye,null),h(t,mc,p),h(t,kt,p),e(kt,sn),e(sn,cl),b(Hs,cl,null),e(kt,Nu),e(kt,hl),e(hl,Pu),h(t,pc,p),h(t,Ee,p),b(Rs,Ee,null),e(Ee,Ou),e(Ee,ml),e(ml,ju),e(Ee,Au),e(Ee,Vs),e(Vs,Iu),e(Vs,da),e(da,Su),e(Vs,Du),e(Ee,Bu),e(Ee,Gs),e(Gs,Wu),e(Gs,Ks),e(Ks,Qu),e(Gs,Uu),e(Ee,Hu),b(rn,Ee,null),e(Ee,Ru),e(Ee,vt),e(vt,Vu),e(vt,ca),e(ca,Gu),e(vt,Ku),e(vt,Js),e(Js,Ju),e(vt,Xu),e(Ee,Yu),e(Ee,Xs),e(Xs,Zu),e(Xs,pl),e(pl,e_),e(Xs,o_),e(Ee,t_),e(Ee,wo),b(Ys,wo,null),e(wo,n_),e(wo,bt),e(bt,s_),e(bt,ha),e(ha,r_),e(bt,a_),e(bt,fl),e(fl,i_),e(bt,l_),e(wo,d_),b(an,wo,null),h(t,fc,p),h(t,Tt,p),e(Tt,ln),e(ln,gl),b(Zs,gl,null),e(Tt,c_),e(Tt,ul),e(ul,h_),h(t,gc,p),h(t,je,p),b(er,je,null),e(je,m_),e(je,or),e(or,p_),e(or,_l),e(_l,f_),e(or,g_),e(je,u_),e(je,tr),e(tr,__),e(tr,ma),e(ma,w_),e(tr,k_),e(je,v_),e(je,nr),e(nr,b_),e(nr,sr),e(sr,T_),e(nr,y_),e(je,L_),b(dn,je,null),e(je,$_),e(je,Ze),b(rr,Ze,null),e(Ze,F_),e(Ze,yt),e(yt,x_),e(yt,pa),e(pa,M_),e(yt,E_),e(yt,wl),e(wl,z_),e(yt,q_),e(Ze,C_),b(cn,Ze,null),e(Ze,N_),e(Ze,kl),e(kl,P_),e(Ze,O_),b(ar,Ze,null),h(t,uc,p),h(t,Lt,p),e(Lt,hn),e(hn,vl),b(ir,vl,null),e(Lt,j_),e(Lt,bl),e(bl,A_),h(t,_c,p),h(t,Ae,p),b(lr,Ae,null),e(Ae,I_),e(Ae,$t),e($t,S_),e($t,Tl),e(Tl,D_),e($t,B_),e($t,yl),e(yl,W_),e($t,Q_),e(Ae,U_),e(Ae,dr),e(dr,H_),e(dr,fa),e(fa,R_),e(dr,V_),e(Ae,G_),e(Ae,cr),e(cr,K_),e(cr,hr),e(hr,J_),e(cr,X_),e(Ae,Y_),b(mn,Ae,null),e(Ae,Z_),e(Ae,eo),b(mr,eo,null),e(eo,ew),e(eo,Ft),e(Ft,ow),e(Ft,ga),e(ga,tw),e(Ft,nw),e(Ft,Ll),e(Ll,sw),e(Ft,rw),e(eo,aw),b(pn,eo,null),e(eo,iw),e(eo,$l),e($l,lw),e(eo,dw),b(pr,eo,null),h(t,wc,p),h(t,xt,p),e(xt,fn),e(fn,Fl),b(fr,Fl,null),e(xt,cw),e(xt,xl),e(xl,hw),h(t,kc,p),h(t,Ie,p),b(gr,Ie,null),e(Ie,mw),e(Ie,Ml),e(Ml,pw),e(Ie,fw),e(Ie,ur),e(ur,gw),e(ur,ua),e(ua,uw),e(ur,_w),e(Ie,ww),e(Ie,_r),e(_r,kw),e(_r,wr),e(wr,vw),e(_r,bw),e(Ie,Tw),b(gn,Ie,null),e(Ie,yw),e(Ie,oo),b(kr,oo,null),e(oo,Lw),e(oo,Mt),e(Mt,$w),e(Mt,_a),e(_a,Fw),e(Mt,xw),e(Mt,El),e(El,Mw),e(Mt,Ew),e(oo,zw),b(un,oo,null),e(oo,qw),e(oo,zl),e(zl,Cw),e(oo,Nw),b(vr,oo,null),h(t,vc,p),h(t,Et,p),e(Et,_n),e(_n,ql),b(br,ql,null),e(Et,Pw),e(Et,Cl),e(Cl,Ow),h(t,bc,p),h(t,Se,p),b(Tr,Se,null),e(Se,jw),e(Se,Nl),e(Nl,Aw),e(Se,Iw),e(Se,yr),e(yr,Sw),e(yr,wa),e(wa,Dw),e(yr,Bw),e(Se,Ww),e(Se,Lr),e(Lr,Qw),e(Lr,$r),e($r,Uw),e(Lr,Hw),e(Se,Rw),b(wn,Se,null),e(Se,Vw),e(Se,to),b(Fr,to,null),e(to,Gw),e(to,zt),e(zt,Kw),e(zt,ka),e(ka,Jw),e(zt,Xw),e(zt,Pl),e(Pl,Yw),e(zt,Zw),e(to,ek),b(kn,to,null),e(to,ok),e(to,Ol),e(Ol,tk),e(to,nk),b(xr,to,null),h(t,Tc,p),h(t,qt,p),e(qt,vn),e(vn,jl),b(Mr,jl,null),e(qt,sk),e(qt,Al),e(Al,rk),h(t,yc,p),h(t,De,p),b(Er,De,null),e(De,ak),e(De,Il),e(Il,ik),e(De,lk),e(De,zr),e(zr,dk),e(zr,va),e(va,ck),e(zr,hk),e(De,mk),e(De,qr),e(qr,pk),e(qr,Cr),e(Cr,fk),e(qr,gk),e(De,uk),b(bn,De,null),e(De,_k),e(De,no),b(Nr,no,null),e(no,wk),e(no,Ct),e(Ct,kk),e(Ct,ba),e(ba,vk),e(Ct,bk),e(Ct,Sl),e(Sl,Tk),e(Ct,yk),e(no,Lk),b(Tn,no,null),e(no,$k),e(no,Dl),e(Dl,Fk),e(no,xk),b(Pr,no,null),Lc=!0},p(t,[p]){const Or={};p&2&&(Or.$$scope={dirty:p,ctx:t}),Vt.$set(Or);const Bl={};p&2&&(Bl.$$scope={dirty:p,ctx:t}),Kt.$set(Bl);const Wl={};p&2&&(Wl.$$scope={dirty:p,ctx:t}),Xt.$set(Wl);const Ql={};p&2&&(Ql.$$scope={dirty:p,ctx:t}),Zt.$set(Ql);const yn={};p&2&&(yn.$$scope={dirty:p,ctx:t}),on.$set(yn);const Ul={};p&2&&(Ul.$$scope={dirty:p,ctx:t}),nn.$set(Ul);const Hl={};p&2&&(Hl.$$scope={dirty:p,ctx:t}),rn.$set(Hl);const jr={};p&2&&(jr.$$scope={dirty:p,ctx:t}),an.$set(jr);const Rl={};p&2&&(Rl.$$scope={dirty:p,ctx:t}),dn.$set(Rl);const Vl={};p&2&&(Vl.$$scope={dirty:p,ctx:t}),cn.$set(Vl);const Gl={};p&2&&(Gl.$$scope={dirty:p,ctx:t}),mn.$set(Gl);const Ar={};p&2&&(Ar.$$scope={dirty:p,ctx:t}),pn.$set(Ar);const Kl={};p&2&&(Kl.$$scope={dirty:p,ctx:t}),gn.$set(Kl);const Jl={};p&2&&(Jl.$$scope={dirty:p,ctx:t}),un.$set(Jl);const Xl={};p&2&&(Xl.$$scope={dirty:p,ctx:t}),wn.$set(Xl);const Yl={};p&2&&(Yl.$$scope={dirty:p,ctx:t}),kn.$set(Yl);const Zl={};p&2&&(Zl.$$scope={dirty:p,ctx:t}),bn.$set(Zl);const ed={};p&2&&(ed.$$scope={dirty:p,ctx:t}),Tn.$set(ed)},i(t){Lc||(T(w.$$.fragment,t),T(K.$$.fragment,t),T($n.$$.fragment,t),T(xn.$$.fragment,t),T(Mn.$$.fragment,t),T(En.$$.fragment,t),T(zn.$$.fragment,t),T(Cn.$$.fragment,t),T(Nn.$$.fragment,t),T(Pn.$$.fragment,t),T(On.$$.fragment,t),T(jn.$$.fragment,t),T(In.$$.fragment,t),T(Sn.$$.fragment,t),T(Dn.$$.fragment,t),T(Bn.$$.fragment,t),T(Wn.$$.fragment,t),T(Qn.$$.fragment,t),T(Un.$$.fragment,t),T(Hn.$$.fragment,t),T(Rn.$$.fragment,t),T(Vn.$$.fragment,t),T(Gn.$$.fragment,t),T(Kn.$$.fragment,t),T(Jn.$$.fragment,t),T(Xn.$$.fragment,t),T(Yn.$$.fragment,t),T(Zn.$$.fragment,t),T(es.$$.fragment,t),T(as.$$.fragment,t),T(Vt.$$.fragment,t),T(is.$$.fragment,t),T(ls.$$.fragment,t),T(ds.$$.fragment,t),T(fs.$$.fragment,t),T(Kt.$$.fragment,t),T(gs.$$.fragment,t),T(us.$$.fragment,t),T(_s.$$.fragment,t),T(bs.$$.fragment,t),T(Xt.$$.fragment,t),T(Ts.$$.fragment,t),T(ys.$$.fragment,t),T(Ls.$$.fragment,t),T($s.$$.fragment,t),T(Es.$$.fragment,t),T(Zt.$$.fragment,t),T(zs.$$.fragment,t),T(qs.$$.fragment,t),T(Cs.$$.fragment,t),T(js.$$.fragment,t),T(on.$$.fragment,t),T(As.$$.fragment,t),T(Is.$$.fragment,t),T(Ss.$$.fragment,t),T(Qs.$$.fragment,t),T(nn.$$.fragment,t),T(Us.$$.fragment,t),T(Hs.$$.fragment,t),T(Rs.$$.fragment,t),T(rn.$$.fragment,t),T(Ys.$$.fragment,t),T(an.$$.fragment,t),T(Zs.$$.fragment,t),T(er.$$.fragment,t),T(dn.$$.fragment,t),T(rr.$$.fragment,t),T(cn.$$.fragment,t),T(ar.$$.fragment,t),T(ir.$$.fragment,t),T(lr.$$.fragment,t),T(mn.$$.fragment,t),T(mr.$$.fragment,t),T(pn.$$.fragment,t),T(pr.$$.fragment,t),T(fr.$$.fragment,t),T(gr.$$.fragment,t),T(gn.$$.fragment,t),T(kr.$$.fragment,t),T(un.$$.fragment,t),T(vr.$$.fragment,t),T(br.$$.fragment,t),T(Tr.$$.fragment,t),T(wn.$$.fragment,t),T(Fr.$$.fragment,t),T(kn.$$.fragment,t),T(xr.$$.fragment,t),T(Mr.$$.fragment,t),T(Er.$$.fragment,t),T(bn.$$.fragment,t),T(Nr.$$.fragment,t),T(Tn.$$.fragment,t),T(Pr.$$.fragment,t),Lc=!0)},o(t){y(w.$$.fragment,t),y(K.$$.fragment,t),y($n.$$.fragment,t),y(xn.$$.fragment,t),y(Mn.$$.fragment,t),y(En.$$.fragment,t),y(zn.$$.fragment,t),y(Cn.$$.fragment,t),y(Nn.$$.fragment,t),y(Pn.$$.fragment,t),y(On.$$.fragment,t),y(jn.$$.fragment,t),y(In.$$.fragment,t),y(Sn.$$.fragment,t),y(Dn.$$.fragment,t),y(Bn.$$.fragment,t),y(Wn.$$.fragment,t),y(Qn.$$.fragment,t),y(Un.$$.fragment,t),y(Hn.$$.fragment,t),y(Rn.$$.fragment,t),y(Vn.$$.fragment,t),y(Gn.$$.fragment,t),y(Kn.$$.fragment,t),y(Jn.$$.fragment,t),y(Xn.$$.fragment,t),y(Yn.$$.fragment,t),y(Zn.$$.fragment,t),y(es.$$.fragment,t),y(as.$$.fragment,t),y(Vt.$$.fragment,t),y(is.$$.fragment,t),y(ls.$$.fragment,t),y(ds.$$.fragment,t),y(fs.$$.fragment,t),y(Kt.$$.fragment,t),y(gs.$$.fragment,t),y(us.$$.fragment,t),y(_s.$$.fragment,t),y(bs.$$.fragment,t),y(Xt.$$.fragment,t),y(Ts.$$.fragment,t),y(ys.$$.fragment,t),y(Ls.$$.fragment,t),y($s.$$.fragment,t),y(Es.$$.fragment,t),y(Zt.$$.fragment,t),y(zs.$$.fragment,t),y(qs.$$.fragment,t),y(Cs.$$.fragment,t),y(js.$$.fragment,t),y(on.$$.fragment,t),y(As.$$.fragment,t),y(Is.$$.fragment,t),y(Ss.$$.fragment,t),y(Qs.$$.fragment,t),y(nn.$$.fragment,t),y(Us.$$.fragment,t),y(Hs.$$.fragment,t),y(Rs.$$.fragment,t),y(rn.$$.fragment,t),y(Ys.$$.fragment,t),y(an.$$.fragment,t),y(Zs.$$.fragment,t),y(er.$$.fragment,t),y(dn.$$.fragment,t),y(rr.$$.fragment,t),y(cn.$$.fragment,t),y(ar.$$.fragment,t),y(ir.$$.fragment,t),y(lr.$$.fragment,t),y(mn.$$.fragment,t),y(mr.$$.fragment,t),y(pn.$$.fragment,t),y(pr.$$.fragment,t),y(fr.$$.fragment,t),y(gr.$$.fragment,t),y(gn.$$.fragment,t),y(kr.$$.fragment,t),y(un.$$.fragment,t),y(vr.$$.fragment,t),y(br.$$.fragment,t),y(Tr.$$.fragment,t),y(wn.$$.fragment,t),y(Fr.$$.fragment,t),y(kn.$$.fragment,t),y(xr.$$.fragment,t),y(Mr.$$.fragment,t),y(Er.$$.fragment,t),y(bn.$$.fragment,t),y(Nr.$$.fragment,t),y(Tn.$$.fragment,t),y(Pr.$$.fragment,t),Lc=!1},d(t){o(f),t&&o(x),t&&o(g),L(w),t&&o(X),t&&o(E),t&&o(re),t&&o(H),L(K),t&&o(D),t&&o(Y),t&&o(C),t&&o(ee),t&&o(ae),t&&o(oe),t&&o(ie),t&&o(P),t&&o(B),t&&o(te),t&&o(Te),t&&o(le),t&&o(sd),t&&o(Oo),L($n),t&&o(rd),t&&o(ye),t&&o(fd),t&&o(uo),t&&o(_d),t&&o(_o),t&&o(wd),t&&o(jt),t&&o(kd),t&&o(At),t&&o(vd),t&&o(Ve),t&&o(Ed),t&&o(It),t&&o(zd),t&&o(jo),L(xn),t&&o(qd),t&&o(Ao),t&&o(Cd),L(Mn,t),t&&o(Nd),t&&o(Io),L(En),t&&o(Pd),t&&o(Oe),L(zn),L(Cn),t&&o(Od),t&&o(Wo),L(Nn),t&&o(jd),t&&o(fo),L(Pn),t&&o(Ad),t&&o(Qo),L(On),t&&o(Id),t&&o(go),L(jn),t&&o(Sd),t&&o(Uo),L(In),t&&o(Dd),t&&o(Ho),L(Sn),t&&o(Bd),t&&o(Ro),L(Dn),t&&o(Wd),t&&o(Vo),L(Bn),t&&o(Qd),t&&o(Go),L(Wn),t&&o(Ud),t&&o(Ko),L(Qn),t&&o(Hd),t&&o(Jo),L(Un),t&&o(Rd),t&&o(Xo),L(Hn),t&&o(Vd),t&&o(Yo),L(Rn),t&&o(Gd),t&&o(Zo),L(Vn),t&&o(Kd),t&&o(et),L(Gn),t&&o(Jd),t&&o(ot),L(Kn),t&&o(Xd),t&&o(tt),L(Jn),t&&o(Yd),t&&o(nt),L(Xn),t&&o(Zd),t&&o(st),L(Yn),t&&o(ec),t&&o(rt),L(Zn),t&&o(oc),t&&o(qe),L(es),L(as),L(Vt),L(is),t&&o(tc),t&&o(lt),L(ls),t&&o(nc),t&&o(We),L(ds),L(fs),L(Kt),L(gs),t&&o(sc),t&&o(ct),L(us),t&&o(rc),t&&o(Qe),L(_s),L(bs),L(Xt),L(Ts),L(ys),t&&o(ac),t&&o(mt),L(Ls),t&&o(ic),t&&o(Ue),L($s),L(Es),L(Zt),L(zs),t&&o(lc),t&&o(ft),L(qs),t&&o(dc),t&&o(He),L(Cs),L(js),L(on),L(As),t&&o(cc),t&&o(ut),L(Is),t&&o(hc),t&&o(Re),L(Ss),L(Qs),L(nn),L(Us),t&&o(mc),t&&o(kt),L(Hs),t&&o(pc),t&&o(Ee),L(Rs),L(rn),L(Ys),L(an),t&&o(fc),t&&o(Tt),L(Zs),t&&o(gc),t&&o(je),L(er),L(dn),L(rr),L(cn),L(ar),t&&o(uc),t&&o(Lt),L(ir),t&&o(_c),t&&o(Ae),L(lr),L(mn),L(mr),L(pn),L(pr),t&&o(wc),t&&o(xt),L(fr),t&&o(kc),t&&o(Ie),L(gr),L(gn),L(kr),L(un),L(vr),t&&o(vc),t&&o(Et),L(br),t&&o(bc),t&&o(Se),L(Tr),L(wn),L(Fr),L(kn),L(xr),t&&o(Tc),t&&o(qt),L(Mr),t&&o(yc),t&&o(De),L(Er),L(bn),L(Nr),L(Tn),L(Pr)}}}const yy={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function Ly(W,f,x){let{fw:g}=f;return W.$$set=u=>{"fw"in u&&x(0,g=u.fw)},[g]}class zy extends ey{constructor(f){super();oy(this,f,Ly,Ty,ty,{fw:0})}}export{zy as default,yy as metadata};
