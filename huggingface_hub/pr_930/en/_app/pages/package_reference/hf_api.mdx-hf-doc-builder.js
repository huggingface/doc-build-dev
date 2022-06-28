import{S as kp,i as Ap,s as xp,e as o,k as d,w as j,t as l,M as Hp,c as a,d as t,m as h,a as n,x as D,h as c,b as v,G as e,g as k,y as F,q as N,o as T,B as I,v as qp,L as _e}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ec}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function jp(G){let p,y,f,i,g;return i=new de({props:{code:`new_title = "New title, fixing a typo"
HfApi().rename_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    new_title=new_title
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>new_title = <span class="hljs-string">&quot;New title, fixing a typo&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().rename_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    new_title=new_title
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionStatusChange(id=&#x27;deadbeef0000000&#x27;, type=&#x27;status-change&#x27;, ...)</span>
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Dp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Fp(G){let p,y,f,i,g;return i=new de({props:{code:`
comment = """
Hello @otheruser!
# This is a title
**This is bold**, *this is italic* and ~this is strikethrough~
And [this](http://url) is a link
"""

HfApi().comment_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    comment=comment
)
`,highlighted:`
<span class="hljs-meta">&gt;&gt;&gt; </span>comment = <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span>Hello @otheruser!
...
<span class="hljs-meta">... </span># This is a title
...
<span class="hljs-meta">... </span>**This is bold**, *this is italic* and ~this is strikethrough~
<span class="hljs-meta">... </span>And [this](http://url) is a link
<span class="hljs-meta">... </span>&quot;&quot;&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().comment_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    comment=comment
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionComment(id=&#x27;deadbeef0000000&#x27;, type=&#x27;comment&#x27;, ...)</span>
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Np(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Tp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Ip(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Pp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Lp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee,Y,J,Z,ae,B;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=o("li"),Z=o("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=a(Q,"P",{});var te=n(p);y=c(te,"Raises the following errors:"),te.forEach(t),f=h(Q),i=a(Q,"UL",{});var ne=n(i);g=a(ne,"LI",{});var Re=n(g);r=a(Re,"A",{href:!0,rel:!0});var he=n(r);u=a(he,"CODE",{});var Be=n(u);q=c(Be,"HTTPError"),Be.forEach(t),he.forEach(t),_=c(Re,`
if the HuggingFace API returned an error`),Re.forEach(t),A=h(ne),E=a(ne,"LI",{});var Ce=n(E);b=a(Ce,"A",{href:!0,rel:!0});var De=n(b);w=a(De,"CODE",{});var U=n(w);P=c(U,"ValueError"),U.forEach(t),De.forEach(t),L=c(Ce,`
if some parameter value is invalid`),Ce.forEach(t),O=h(ne),m=a(ne,"LI",{});var ue=n(m);x=a(ue,"A",{href:!0});var da=n(x);V=c(da,"RepositoryNotFoundError"),da.forEach(t),M=c(ue,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ue,"CODE",{});var ce=n(R);K=c(ce,"private"),ce.forEach(t),z=c(ue," and you do not have access."),ue.forEach(t),$=h(ne),S=a(ne,"LI",{});var Fe=n(S);C=a(Fe,"A",{href:!0});var ha=n(C);X=c(ha,"RevisionNotFoundError"),ha.forEach(t),ee=c(Fe,`
If the revision to download from cannot be found.`),Fe.forEach(t),Y=h(ne),J=a(ne,"LI",{});var Ke=n(J);Z=a(Ke,"A",{href:!0});var ua=n(Z);ae=c(ua,"EntryNotFoundError"),ua.forEach(t),B=c(Ke,`
If the file to download cannot be found.`),Ke.forEach(t),ne.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),v(Z,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,te){k(Q,p,te),e(p,y),k(Q,f,te),k(Q,i,te),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Op(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Rp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Cp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Sp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Up(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets
api.list_datasets()

# Get all valid search arguments
args = DatasetSearchArguments()

# List only the text classification datasets
api.list_datasets(filter="task_categories:text-classification")
# Using the \`DatasetFilter\`
filt = DatasetFilter(task_categories="text-classification")
# With \`DatasetSearchArguments\`
filt = DatasetFilter(task=args.task_categories.text_classification)
api.list_models(filter=filt)

# List only the datasets in russian for language modeling
api.list_datasets(
    filter=("languages:ru", "task_ids:language-modeling")
)
# Using the \`DatasetFilter\`
filt = DatasetFilter(languages="ru", task_ids="language-modeling")
# With \`DatasetSearchArguments\`
filt = DatasetFilter(
    languages=args.languages.ru,
    task_ids=args.task_ids.language_modeling,
)
api.list_datasets(filter=filt)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get all valid search arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the text classification datasets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;task_categories:text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`DatasetFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(task_categories=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`DatasetSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(task=args.task_categories.text_classification)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the datasets in russian for language modeling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">filter</span>=(<span class="hljs-string">&quot;languages:ru&quot;</span>, <span class="hljs-string">&quot;task_ids:language-modeling&quot;</span>)
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`DatasetFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(languages=<span class="hljs-string">&quot;ru&quot;</span>, task_ids=<span class="hljs-string">&quot;language-modeling&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`DatasetSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = DatasetFilter(
<span class="hljs-meta">... </span>    languages=args.languages.ru,
<span class="hljs-meta">... </span>    task_ids=args.task_ids.language_modeling,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Mp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Vp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models
api.list_models()

# Get all valid search arguments
args = ModelSearchArguments()

# List only the text classification models
api.list_models(filter="text-classification")
# Using the \`ModelFilter\`
filt = ModelFilter(task="text-classification")
# With \`ModelSearchArguments\`
filt = ModelFilter(task=args.pipeline_tags.TextClassification)
api.list_models(filter=filt)

# Using \`ModelFilter\` and \`ModelSearchArguments\` to find text classification in both PyTorch and TensorFlow
filt = ModelFilter(
    task=args.pipeline_tags.TextClassification,
    library=[args.library.PyTorch, args.library.TensorFlow],
)
api.list_models(filter=filt)

# List only models from the AllenNLP library
api.list_models(filter="allennlp")
# Using \`ModelFilter\` and \`ModelSearchArguments\`
filt = ModelFilter(library=args.library.allennlp)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Get all valid search arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only the text classification models</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using the \`ModelFilter\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(task=<span class="hljs-string">&quot;text-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With \`ModelSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(task=args.pipeline_tags.TextClassification)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using \`ModelFilter\` and \`ModelSearchArguments\` to find text classification in both PyTorch and TensorFlow</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(
<span class="hljs-meta">... </span>    task=args.pipeline_tags.TextClassification,
<span class="hljs-meta">... </span>    library=[args.library.PyTorch, args.library.TensorFlow],
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=filt)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List only models from the AllenNLP library</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(<span class="hljs-built_in">filter</span>=<span class="hljs-string">&quot;allennlp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using \`ModelFilter\` and \`ModelSearchArguments\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function zp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Wp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Gp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Bp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Kp(G){let p,y,f,i,g;return i=new de({props:{code:`new_title = "New title, fixing a typo"
HfApi().rename_discussion(
    repo_id="username/repo_name",
    discussion_num=34
    new_title=new_title
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>new_title = <span class="hljs-string">&quot;New title, fixing a typo&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>HfApi().rename_discussion(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/repo_name&quot;</span>,
<span class="hljs-meta">... </span>    discussion_num=<span class="hljs-number">34</span>
<span class="hljs-meta">... </span>    new_title=new_title
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># DiscussionTitleChange(id=&#x27;deadbeef0000000&#x27;, type=&#x27;title-change&#x27;, ...)</span>
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Jp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Qp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Xp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Yp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Zp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=a(Y,"P",{});var J=n(p);y=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=a(Y,"UL",{});var Z=n(i);g=a(Z,"LI",{});var ae=n(g);r=a(ae,"A",{href:!0,rel:!0});var B=n(r);u=a(B,"CODE",{});var Q=n(u);q=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),E=a(Z,"LI",{});var te=n(E);b=a(te,"A",{href:!0,rel:!0});var ne=n(b);w=a(ne,"CODE",{});var Re=n(w);P=c(Re,"ValueError"),Re.forEach(t),ne.forEach(t),L=c(te,`
if some parameter value is invalid`),te.forEach(t),O=h(Z),m=a(Z,"LI",{});var he=n(m);x=a(he,"A",{href:!0});var Be=n(x);V=c(Be,"RepositoryNotFoundError"),Be.forEach(t),M=c(he,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(he,"CODE",{});var Ce=n(R);K=c(Ce,"private"),Ce.forEach(t),z=c(he," and you do not have access."),he.forEach(t),$=h(Z),S=a(Z,"LI",{});var De=n(S);C=a(De,"A",{href:!0});var U=n(C);X=c(U,"RevisionNotFoundError"),U.forEach(t),ee=c(De,`
If the revision to download from cannot be found.`),De.forEach(t),Z.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){k(Y,p,J),e(p,y),k(Y,f,J),k(Y,i,J),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function eg(G){let p,y,f,i,g;return i=new de({props:{code:`with open("./local/filepath", "rb") as fobj:
    upload_file(
        path_or_fileobj=fileobj,
        path_in_repo="remote/file/path.h5",
        repo_id="username/my-dataset",
        repo_type="datasets",
        token="my_token",
    )

upload_file(
    path_or_fileobj=".\\\\local\\\\file\\\\path",
    path_in_repo="remote/file/path.h5",
    repo_id="username/my-model",
    token="my_token",
)

upload_file(
    path_or_fileobj=".\\\\local\\\\file\\\\path",
    path_in_repo="remote/file/path.h5",
    repo_id="username/my-model",
    token="my_token",
    create_pr=True,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;./local/filepath&quot;</span>, <span class="hljs-string">&quot;rb&quot;</span>) <span class="hljs-keyword">as</span> fobj:
<span class="hljs-meta">... </span>    upload_file(
<span class="hljs-meta">... </span>        path_or_fileobj=fileobj,
<span class="hljs-meta">... </span>        path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>        repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>        repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>        token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    )
<span class="hljs-string">&quot;https://huggingface.co/datasets/username/my-dataset/blob/main/remote/file/path.h5&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    path_or_fileobj=<span class="hljs-string">&quot;.\\\\local\\\\file\\\\path&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-model&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    path_or_fileobj=<span class="hljs-string">&quot;.\\\\local\\\\file\\\\path&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/file/path.h5&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-model&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function tg(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=a(O,"P",{});var m=n(p);y=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=a(O,"UL",{});var x=n(i);g=a(x,"LI",{});var V=n(g);r=a(V,"A",{href:!0,rel:!0});var M=n(r);u=a(M,"CODE",{});var R=n(u);q=c(R,"HTTPError"),R.forEach(t),M.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),E=a(x,"LI",{});var K=n(E);b=a(K,"A",{href:!0,rel:!0});var z=n(b);w=a(z,"CODE",{});var $=n(w);P=c($,"ValueError"),$.forEach(t),z.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),x.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow")},m(O,m){k(O,p,m),e(p,y),k(O,f,m),k(O,i,m),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function og(G){let p,y,f,i,g;return i=new de({props:{code:`upload_folder(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
)

upload_folder(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
    create_pr=True,
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>upload_folder(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/main/remote/experiment/checkpoints&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_folder(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/refs%2Fpr%2F1/remote/experiment/checkpoints&quot;</span>
`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ag(G){let p,y,f,i,g;return i=new de({props:{code:`from huggingface_hub import DatasetFilter

# Using author
new_filter = DatasetFilter(author="facebook")

# Using benchmark
new_filter = DatasetFilter(benchmark="raft")

# Using dataset_name
new_filter = DatasetFilter(dataset_name="wikineural")

# Using language_creator
new_filter = DatasetFilter(language_creator="crowdsourced")

# Using language
new_filter = DatasetFilter(language="en")

# Using multilinguality
new_filter = DatasetFilter(multilinguality="yes")

# Using size_categories
new_filter = DatasetFilter(size_categories="100K<n<1M")

# Using task_categories
new_filter = DatasetFilter(task_categories="audio_classification")

# Using task_ids
new_filter = DatasetFilter(task_ids="paraphrase")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> DatasetFilter

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using author</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(author=<span class="hljs-string">&quot;facebook&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using benchmark</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(benchmark=<span class="hljs-string">&quot;raft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using dataset_name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(dataset_name=<span class="hljs-string">&quot;wikineural&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using language_creator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(language_creator=<span class="hljs-string">&quot;crowdsourced&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(language=<span class="hljs-string">&quot;en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using multilinguality</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(multilinguality=<span class="hljs-string">&quot;yes&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using size_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(size_categories=<span class="hljs-string">&quot;100K&lt;n&lt;1M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_categories=<span class="hljs-string">&quot;audio_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ng(G){let p,y;return p=new de({props:{code:`from huggingface_hub import ModelFilter

# For the author_or_organization
new_filter = ModelFilter(author_or_organization="facebook")

# For the library
new_filter = ModelFilter(library="pytorch")

# For the language
new_filter = ModelFilter(language="french")

# For the model_name
new_filter = ModelFilter(model_name="bert")

# For the task
new_filter = ModelFilter(task="text-classification")

# Retrieving tags using the \`HfApi.get_model_tags\` method
from huggingface_hub import HfApi

api = HfApi()

api.get_model_tags()

api.get_dataset_tags()
new_filter = ModelFilter(tags="benchmark:raft")

# Related to the dataset
new_filter = ModelFilter(trained_dataset="common_voice")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> ModelFilter

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the author_or_organization</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(author_or_organization=<span class="hljs-string">&quot;facebook&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the library</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(library=<span class="hljs-string">&quot;pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(language=<span class="hljs-string">&quot;french&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the model_name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(model_name=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For the task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(task=<span class="hljs-string">&quot;text-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Retrieving tags using the \`HfApi.get_model_tags\` method</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()
<span class="hljs-comment"># To list model tags</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>api.get_model_tags()
<span class="hljs-comment"># To list dataset tags</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>api.get_dataset_tags()
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(tags=<span class="hljs-string">&quot;benchmark:raft&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Related to the dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(p.$$.fragment)},l(f){D(p.$$.fragment,f)},m(f,i){F(p,f,i),y=!0},p:_e,i(f){y||(N(p.$$.fragment,f),y=!0)},o(f){T(p.$$.fragment,f),y=!1},d(f){I(p,f)}}}function sg(G){let p,y,f,i,g;return i=new de({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function rg(G){let p,y,f,i,g;return i=new de({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ig(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee,Y,J,Z,ae,B,Q,te,ne,Re,he,Be,Ce,De,U,ue,da,ce,Fe,ha,Ke,ua,Ds,Xe,Fs,Ye,Ns,be,ao,Ts,Oa,Is,Ps,Ze,Ls,et,Os,tt,no,Rs,Ra,Cs,Ss,re,so,Us,Ca,Ms,Vs,ro,zs,Sa,Ws,Gs,Bs,io,Ks,fa,Js,Qs,Xs,ma,Ys,_a,Zs,er,ot,tr,ie,lo,or,co,ar,Ua,nr,sr,rr,po,ir,ba,lr,cr,pr,go,gr,Ma,dr,hr,ur,va,fr,$a,mr,_r,at,br,nt,ho,vr,Va,$r,yr,ve,uo,Er,za,wr,kr,Wa,Ar,xr,st,Hr,Se,fo,qr,Ga,jr,Dr,rt,Fr,Ue,mo,Nr,Ba,Tr,Ir,it,Pr,Me,_o,Lr,Ka,Or,Rr,lt,Cr,ct,bo,Sr,Ja,Ur,Mr,$e,vo,Vr,Qa,zr,Wr,ya,Gr,Ea,Br,Kr,pt,Jr,gt,$o,Qr,Xa,Xr,Yr,dt,yo,Zr,Ya,ei,ti,ht,Eo,oi,wo,ai,wa,ni,si,ri,ye,ko,ii,Za,li,ci,en,pi,gi,ut,di,Ee,Ao,hi,tn,ui,fi,ft,mi,mt,_i,_t,xo,bi,on,vi,$i,we,Ho,yi,an,Ei,wi,bt,ki,vt,Ai,$t,qo,xi,nn,Hi,qi,Ve,jo,ji,sn,Di,Fi,yt,Ni,ke,Do,Ti,rn,Ii,Pi,ln,Li,Oi,Et,Ri,Ae,Fo,Ci,cn,Si,Ui,No,Mi,To,Vi,zi,Wi,wt,Gi,xe,Io,Bi,pn,Ki,Ji,kt,Qi,At,Xi,ze,Po,Yi,gn,Zi,el,xt,tl,Ht,Lo,ol,dn,al,nl,He,Oo,sl,hn,rl,il,un,ll,cl,qt,pl,jt,Ro,gl,fn,dl,hl,We,Co,ul,mn,fl,ml,Dt,_l,qe,So,bl,_n,vl,$l,Ft,yl,Nt,El,le,Uo,wl,bn,kl,Al,vn,xl,Hl,Mo,ql,$n,jl,Dl,Fl,Tt,Nl,It,Tl,Pt,Vo,Il,yn,Pl,Yn,Je,Lt,En,zo,Ll,wn,Ol,Zn,Wo,kn,Rl,Cl,es,Ot,Sl,ka,Ul,Ml,ts,fe,Go,Vl,Rt,Bo,zl,An,Wl,Gl,Ge,Ko,Bl,xn,Kl,Jl,Jo,Ql,Hn,Xl,Yl,Zl,Ct,Qo,ec,qn,tc,os,Qe,St,jn,Xo,oc,Dn,ac,as,Ut,nc,Fn,sc,rc,ns,Ne,Yo,ic,Nn,lc,cc,Mt,ss,Te,Zo,pc,Tn,gc,dc,Vt,rs,Ie,ea,hc,In,uc,fc,zt,is,Pe,ta,mc,Pn,_c,bc,Wt,ls;return r=new Ec({}),C=new de({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new de({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ue=new oe({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L572"}}),Fe=new oe({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2758",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Xe=new me({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[jp]},$$scope:{ctx:G}}}),Ye=new se({props:{$$slots:{default:[Dp]},$$scope:{ctx:G}}}),ao=new oe({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2617",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ze=new me({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Fp]},$$scope:{ctx:G}}}),et=new se({props:{$$slots:{default:[Np]},$$scope:{ctx:G}}}),no=new oe({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the commit will be created, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<code>Iterable</code> of <code>CommitOperation</code>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><code>CommitOperationAdd</code> to upload a file</li>
<li><code>CommitOperationDelete</code> to delete a file</li>
</ul>`,name:"operations"},{anchor:"huggingface_hub.HfApi.create_commit.commit_message",description:`<strong>commit_message</strong> (<code>str</code>) &#x2014;
The summary (first line) of the commit that will be created.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.create_commit.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.create_commit.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_commit.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_commit.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_commit.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>. If set to <code>True</code>, this function will return the URL
to the newly created Pull Request on the Hub.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1743",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),so=new oe({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_discussion.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_discussion.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_discussion.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the pull request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_discussion.pull_request",description:`<strong>pull_request</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to create a pull request or discussion. If <code>True</code>, creates a pull request.
If <code>False</code>, creates a discussion. Defaults to <code>False</code>.`,name:"pull_request"},{anchor:"huggingface_hub.HfApi.create_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2430"}}),ot=new se({props:{$$slots:{default:[Tp]},$$scope:{ctx:G}}}),lo=new oe({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_pull_request.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_pull_request.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_pull_request.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the pull request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2524"}}),at=new se({props:{$$slots:{default:[Ip]},$$scope:{ctx:G}}}),ho=new oe({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_repo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.create_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_repo.exist_ok",description:`<strong>exist_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not raise an error if repo already exists.`,name:"exist_ok"},{anchor:"huggingface_hub.HfApi.create_repo.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Choice of SDK to use if repo_type is &#x201C;space&#x201D;. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1360",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),uo=new oe({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1153",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),st=new se({props:{$$slots:{default:[Pp]},$$scope:{ctx:G}}}),fo=new oe({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to
<code>f&quot;Delete {path_in_repo} with huggingface_hub&quot;</code>.`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.delete_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with the changes.
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2155"}}),rt=new se({props:{$$slots:{default:[Lp]},$$scope:{ctx:G}}}),mo=new oe({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1490"}}),it=new se({props:{$$slots:{default:[Op]},$$scope:{ctx:G}}}),_o=new oe({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2884",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),lt=new se({props:{$$slots:{default:[Rp]},$$scope:{ctx:G}}}),bo=new oe({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L693"}}),vo=new oe({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2347"}}),pt=new se({props:{$$slots:{default:[Cp]},$$scope:{ctx:G}}}),$o=new oe({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2233",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),yo=new oe({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L685"}}),Eo=new oe({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"_page_index",val:": int = 0"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2267",returnDescription:`
<p>A <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"
>Pagination</a> of <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a>.</p>
`,returnType:`
<p><code>Pagination[Discussion]</code></p>
`}}),ko=new oe({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2940",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ut=new se({props:{$$slots:{default:[Sp]},$$scope:{ctx:G}}}),Ao=new oe({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <code>DatasetInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_datasets.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of datasets fetched. Leaving this option
to <code>None</code> fetches all datasets.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_datasets.cardData",description:`<strong>cardData</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to grab the metadata for the dataset as well. Can
contain useful information such as the PapersWithCode ID.`,name:"cardData"},{anchor:"huggingface_hub.HfApi.list_datasets.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all dataset data, including the <code>lastModified</code>
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_datasets.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L911"}}),ft=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Up]},$$scope:{ctx:G}}}),mt=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Mp]},$$scope:{ctx:G}}}),xo=new oe({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1076",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ho=new oe({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <code>ModelInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_models.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of models fetched. Leaving this option
to <code>None</code> fetches all models.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_models.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all model data, including the <code>lastModified</code>,
the <code>sha</code>, the files and the <code>tags</code>. This is set to <code>True</code> by
default when using a filter.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_models.cardData",description:`<strong>cardData</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to grab the metadata for the model as well. Can contain
useful information such as carbon emissions, metrics, and
datasets trained on.`,name:"cardData"},{anchor:"huggingface_hub.HfApi.list_models.fetch_config",description:`<strong>fetch_config</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch the model configs as well. This is not included
in <code>full</code> due to its size.`,name:"fetch_config"},{anchor:"huggingface_hub.HfApi.list_models.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L703"}}),bt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Vp]},$$scope:{ctx:G}}}),vt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[zp]},$$scope:{ctx:G}}}),qo=new oe({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1320",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),jo=new oe({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2832",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),yt=new se({props:{$$slots:{default:[Wp]},$$scope:{ctx:G}}}),Do=new oe({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1090",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),Et=new se({props:{$$slots:{default:[Gp]},$$scope:{ctx:G}}}),Fo=new oe({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1665"}}),wt=new se({props:{$$slots:{default:[Bp]},$$scope:{ctx:G}}}),Io=new oe({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2692",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),kt=new me({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[Kp]},$$scope:{ctx:G}}}),At=new se({props:{$$slots:{default:[Jp]},$$scope:{ctx:G}}}),Po=new oe({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1265",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),xt=new se({props:{$$slots:{default:[Qp]},$$scope:{ctx:G}}}),Lo=new oe({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L666"}}),Oo=new oe({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1209",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),qt=new se({props:{$$slots:{default:[Xp]},$$scope:{ctx:G}}}),Ro=new oe({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L678"}}),Co=new oe({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1590",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Dt=new se({props:{$$slots:{default:[Yp]},$$scope:{ctx:G}}}),So=new oe({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
Path to a file on the local machine or binary data stream /
fileobj / buffer.`,name:"path_or_fileobj"},{anchor:"huggingface_hub.HfApi.upload_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.upload_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.upload_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_file.identical_ok",description:`<strong>identical_ok</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Deprecated: will be removed in 0.11.0.
Changing this value has no effect.`,name:"identical_ok"},{anchor:"huggingface_hub.HfApi.upload_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1866",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ft=new se({props:{$$slots:{default:[Zp]},$$scope:{ctx:G}}}),Nt=new me({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[eg]},$$scope:{ctx:G}}}),Uo=new oe({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository to which the file will be uploaded, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_folder.folder_path",description:`<strong>folder_path</strong> (<code>str</code>) &#x2014;
Path to the folder to upload on the local file system`,name:"folder_path"},{anchor:"huggingface_hub.HfApi.upload_folder.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative path of the directory in the repo, for example:
<code>&quot;checkpoints/1fec34a/results&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_folder.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.upload_folder.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.upload_folder.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit. Defaults to:
<code>f&quot;Upload {path_in_repo} with huggingface_hub&quot;</code>`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from the pushed changes. Defaults
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2011",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Tt=new se({props:{$$slots:{default:[tg]},$$scope:{ctx:G}}}),It=new me({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[og]},$$scope:{ctx:G}}}),Vo=new oe({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L576"}}),zo=new Ec({}),Go=new oe({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2995"}}),Bo=new oe({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3032"}}),Ko=new oe({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3011",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Qo=new oe({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2998"}}),Xo=new Ec({}),Yo=new oe({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the original uploader (author or organization), such as
<code>facebook</code> or <code>huggingface</code>.`,name:"author"},{anchor:"huggingface_hub.DatasetFilter.benchmark",description:`<strong>benchmark</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by their official benchmark.`,name:"benchmark"},{anchor:"huggingface_hub.DatasetFilter.dataset_name",description:`<strong>dataset_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by its name, such as <code>SQAC</code> or <code>wikineural</code>`,name:"dataset_name"},{anchor:"huggingface_hub.DatasetFilter.language_creators",description:`<strong>language_creators</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub with how the data was curated, such as <code>crowdsourced</code> or
<code>machine_generated</code>.`,name:"language_creators"},{anchor:"huggingface_hub.DatasetFilter.languages",description:`<strong>languages</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings representing a two-character language to
filter datasets by on the Hub.`,name:"languages"},{anchor:"huggingface_hub.DatasetFilter.multilinguality",description:`<strong>multilinguality</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings representing a filter for datasets that
contain multiple languages.`,name:"multilinguality"},{anchor:"huggingface_hub.DatasetFilter.size_categories",description:`<strong>size_categories</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the size of the dataset such as <code>100K&lt;n&lt;1M</code> or
<code>1M&lt;n&lt;10M</code>.`,name:"size_categories"},{anchor:"huggingface_hub.DatasetFilter.task_categories",description:`<strong>task_categories</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the designed task, such as <code>audio_classification</code> or
<code>named_entity_recognition</code>.`,name:"task_categories"},{anchor:"huggingface_hub.DatasetFilter.task_ids",description:`<strong>task_ids</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings that can be used to identify datasets on
the Hub by the specific task such as <code>speech_emotion_recognition</code> or
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Mt=new me({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[ag]},$$scope:{ctx:G}}}),Zo=new oe({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that can be used to identify models on the Hub by the
original uploader (author or organization), such as <code>facebook</code> or
<code>huggingface</code>.`,name:"author"},{anchor:"huggingface_hub.ModelFilter.library",description:`<strong>library</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of foundational libraries models were
originally trained from, such as pytorch, tensorflow, or allennlp.`,name:"library"},{anchor:"huggingface_hub.ModelFilter.language",description:`<strong>language</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of languages, both by name and country
code, such as &#x201C;en&#x201D; or &#x201C;English&#x201D;`,name:"language"},{anchor:"huggingface_hub.ModelFilter.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that contain complete or partial names for models on the
Hub, such as &#x201C;bert&#x201D; or &#x201C;bert-base-cased&#x201D;`,name:"model_name"},{anchor:"huggingface_hub.ModelFilter.task",description:`<strong>task</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string or list of strings of tasks models were designed for, such
as: &#x201C;fill-mask&#x201D; or &#x201C;automatic-speech-recognition&#x201D;`,name:"task"},{anchor:"huggingface_hub.ModelFilter.tags",description:`<strong>tags</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string tag or a list of tags to filter models on the Hub by, such
as <code>text-generation</code> or <code>spacy</code>.`,name:"tags"},{anchor:"huggingface_hub.ModelFilter.trained_dataset",description:`<strong>trained_dataset</strong> (<code>str</code> or <code>List</code>, <em>optional</em>) &#x2014;
A string tag or a list of string tags of the trained dataset for a
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Vt=new me({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[ng]},$$scope:{ctx:G}}}),ea=new oe({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L460"}}),zt=new me({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[sg]},$$scope:{ctx:G}}}),ta=new oe({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L422"}}),Wt=new me({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[rg]},$$scope:{ctx:G}}}),{c(){p=o("meta"),y=d(),f=o("h1"),i=o("a"),g=o("span"),j(r.$$.fragment),u=d(),q=o("span"),_=l("Hugging Face Hub API"),A=d(),E=o("p"),b=l("Below is the documentation for the "),w=o("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=d(),m=o("p"),x=l("All methods from the "),V=o("code"),M=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=d(),z=o("p"),$=l("The following approach uses the method from the root of the package:"),S=d(),j(C.$$.fragment),X=d(),ee=o("p"),Y=l("The following approach uses the "),J=o("code"),Z=l("HfApi"),ae=l(" class:"),B=d(),j(Q.$$.fragment),te=d(),ne=o("p"),Re=l("Using the "),he=o("code"),Be=l("HfApi"),Ce=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),De=d(),U=o("div"),j(ue.$$.fragment),da=d(),ce=o("div"),j(Fe.$$.fragment),ha=d(),Ke=o("p"),ua=l("Closes or re-opens a discussion or pull request."),Ds=d(),j(Xe.$$.fragment),Fs=d(),j(Ye.$$.fragment),Ns=d(),be=o("div"),j(ao.$$.fragment),Ts=d(),Oa=o("p"),Is=l("Creates a new comment on the given discussion"),Ps=d(),j(Ze.$$.fragment),Ls=d(),j(et.$$.fragment),Os=d(),tt=o("div"),j(no.$$.fragment),Rs=d(),Ra=o("p"),Cs=l("Creates a commit in the given repo, deleting & uploading files as needed."),Ss=d(),re=o("div"),j(so.$$.fragment),Us=d(),Ca=o("p"),Ms=l("Creates a discussion or pull request."),Vs=d(),ro=o("p"),zs=l("Pull Requests created programmatically will be in "),Sa=o("code"),Ws=l('"draft"'),Gs=l(" status."),Bs=d(),io=o("p"),Ks=l("Creating a Pull Request with changes can also be done at once with "),fa=o("a"),Js=l("HfApi.create_commit()"),Qs=l("."),Xs=d(),ma=o("p"),Ys=l("Returns: "),_a=o("a"),Zs=l("DiscussionWithDetails"),er=d(),j(ot.$$.fragment),tr=d(),ie=o("div"),j(lo.$$.fragment),or=d(),co=o("p"),ar=l("Creates a pull request. Pull Requests created programmatically will be in "),Ua=o("code"),nr=l('"draft"'),sr=l(" status."),rr=d(),po=o("p"),ir=l("Creating a Pull Request with changes can also be done at once with "),ba=o("a"),lr=l("HfApi.create_commit()"),cr=l(";"),pr=d(),go=o("p"),gr=l("This is a wrapper around "),Ma=o("code"),dr=l("HfApi.create_discusssion"),hr=l("."),ur=d(),va=o("p"),fr=l("Returns: "),$a=o("a"),mr=l("DiscussionWithDetails"),_r=d(),j(at.$$.fragment),br=d(),nt=o("div"),j(ho.$$.fragment),vr=d(),Va=o("p"),$r=l("Create an empty repo on the HuggingFace Hub."),yr=d(),ve=o("div"),j(uo.$$.fragment),Er=d(),za=o("p"),wr=l("Get info on one specific dataset on huggingface.co."),kr=d(),Wa=o("p"),Ar=l("Dataset can be private if you pass an acceptable token."),xr=d(),j(st.$$.fragment),Hr=d(),Se=o("div"),j(fo.$$.fragment),qr=d(),Ga=o("p"),jr=l("Deletes a file in the given repo."),Dr=d(),j(rt.$$.fragment),Fr=d(),Ue=o("div"),j(mo.$$.fragment),Nr=d(),Ba=o("p"),Tr=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ir=d(),j(it.$$.fragment),Pr=d(),Me=o("div"),j(_o.$$.fragment),Lr=d(),Ka=o("p"),Or=l("Edits a comment on a discussion / pull request"),Rr=d(),j(lt.$$.fragment),Cr=d(),ct=o("div"),j(bo.$$.fragment),Sr=d(),Ja=o("p"),Ur=l("Gets all valid dataset tags as a nested namespace object."),Mr=d(),$e=o("div"),j(vo.$$.fragment),Vr=d(),Qa=o("p"),zr=l("Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Wr=d(),ya=o("p"),Gr=l("Returns: "),Ea=o("a"),Br=l("DiscussionWithDetails"),Kr=d(),j(pt.$$.fragment),Jr=d(),gt=o("div"),j($o.$$.fragment),Qr=d(),Xa=o("p"),Xr=l(`Returns the repository name for a given model ID and optional
organization.`),Yr=d(),dt=o("div"),j(yo.$$.fragment),Zr=d(),Ya=o("p"),ei=l("Gets all valid model tags as a nested namespace object"),ti=d(),ht=o("div"),j(Eo.$$.fragment),oi=d(),wo=o("p"),ai=l(`Fetches discussions and pull requests for the given repo. The response is
paginated with `),wa=o("a"),ni=l("Pagination"),si=l("."),ri=d(),ye=o("div"),j(ko.$$.fragment),ii=d(),Za=o("p"),li=l("Hides a comment on a discussion / pull request."),ci=d(),en=o("p"),pi=l("Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),gi=d(),j(ut.$$.fragment),di=d(),Ee=o("div"),j(Ao.$$.fragment),hi=d(),tn=o("p"),ui=l("Get the public list of all the datasets on huggingface.co"),fi=d(),j(ft.$$.fragment),mi=d(),j(mt.$$.fragment),_i=d(),_t=o("div"),j(xo.$$.fragment),bi=d(),on=o("p"),vi=l("Get the public list of all the metrics on huggingface.co"),$i=d(),we=o("div"),j(Ho.$$.fragment),yi=d(),an=o("p"),Ei=l("Get the public list of all the models on huggingface.co"),wi=d(),j(bt.$$.fragment),ki=d(),j(vt.$$.fragment),Ai=d(),$t=o("div"),j(qo.$$.fragment),xi=d(),nn=o("p"),Hi=l("Get the list of files in a given repo."),qi=d(),Ve=o("div"),j(jo.$$.fragment),ji=d(),sn=o("p"),Di=l("Merges a pull request."),Fi=d(),j(yt.$$.fragment),Ni=d(),ke=o("div"),j(Do.$$.fragment),Ti=d(),rn=o("p"),Ii=l("Get info on one specific model on huggingface.co"),Pi=d(),ln=o("p"),Li=l("Model can be private if you pass an acceptable token or are logged in."),Oi=d(),j(Et.$$.fragment),Ri=d(),Ae=o("div"),j(Fo.$$.fragment),Ci=d(),cn=o("p"),Si=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ui=d(),No=o("p"),Mi=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),To=o("a"),Vi=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),zi=l("."),Wi=d(),j(wt.$$.fragment),Gi=d(),xe=o("div"),j(Io.$$.fragment),Bi=d(),pn=o("p"),Ki=l("Renames a discussion"),Ji=d(),j(kt.$$.fragment),Qi=d(),j(At.$$.fragment),Xi=d(),ze=o("div"),j(Po.$$.fragment),Yi=d(),gn=o("p"),Zi=l("Get the info object for a given repo of a given type."),el=d(),j(xt.$$.fragment),tl=d(),Ht=o("div"),j(Lo.$$.fragment),ol=d(),dn=o("p"),al=l(`Saves the passed access token so git can correctly authenticate the
user.`),nl=d(),He=o("div"),j(Oo.$$.fragment),sl=d(),hn=o("p"),rl=l("Get info on one specific Space on huggingface.co."),il=d(),un=o("p"),ll=l("Space can be private if you pass an acceptable token."),cl=d(),j(qt.$$.fragment),pl=d(),jt=o("div"),j(Ro.$$.fragment),gl=d(),fn=o("p"),dl=l("Resets the user\u2019s access token."),hl=d(),We=o("div"),j(Co.$$.fragment),ul=d(),mn=o("p"),fl=l("Update the visibility setting of a repository."),ml=d(),j(Dt.$$.fragment),_l=d(),qe=o("div"),j(So.$$.fragment),bl=d(),_n=o("p"),vl=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),$l=d(),j(Ft.$$.fragment),yl=d(),j(Nt.$$.fragment),El=d(),le=o("div"),j(Uo.$$.fragment),wl=d(),bn=o("p"),kl=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Al=d(),vn=o("p"),xl=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Hl=d(),Mo=o("p"),ql=l("Uses "),$n=o("code"),jl=l("HfApi.create_commit"),Dl=l(" under the hood."),Fl=d(),j(Tt.$$.fragment),Nl=d(),j(It.$$.fragment),Tl=d(),Pt=o("div"),j(Vo.$$.fragment),Il=d(),yn=o("p"),Pl=l("Call HF API to know \u201Cwhoami\u201D."),Yn=d(),Je=o("h2"),Lt=o("a"),En=o("span"),j(zo.$$.fragment),Ll=d(),wn=o("span"),Ol=l("Hugging Face local storage"),Zn=d(),Wo=o("p"),kn=o("code"),Rl=l("huggingface_hub"),Cl=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),es=d(),Ot=o("p"),Sl=l("It does this using the "),ka=o("a"),Ul=l("HfFolder"),Ml=l(" utility, which saves data at the root of the user."),ts=d(),fe=o("div"),j(Go.$$.fragment),Vl=d(),Rt=o("div"),j(Bo.$$.fragment),zl=d(),An=o("p"),Wl=l("Deletes the token from storage. Does not fail if token does not exist."),Gl=d(),Ge=o("div"),j(Ko.$$.fragment),Bl=d(),xn=o("p"),Kl=l("Get token or None if not existent."),Jl=d(),Jo=o("p"),Ql=l("Note that a token can be also provided using the "),Hn=o("code"),Xl=l("HUGGING_FACE_HUB_TOKEN"),Yl=l(`
environment variable.`),Zl=d(),Ct=o("div"),j(Qo.$$.fragment),ec=d(),qn=o("p"),tc=l("Save token, creating folder as needed."),os=d(),Qe=o("h2"),St=o("a"),jn=o("span"),j(Xo.$$.fragment),oc=d(),Dn=o("span"),ac=l("Filtering helpers"),as=d(),Ut=o("p"),nc=l("Some helpers to filter repositories on the Hub are available in the "),Fn=o("code"),sc=l("huggingface_hub"),rc=l(" package."),ns=d(),Ne=o("div"),j(Yo.$$.fragment),ic=d(),Nn=o("p"),lc=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),cc=d(),j(Mt.$$.fragment),ss=d(),Te=o("div"),j(Zo.$$.fragment),pc=d(),Tn=o("p"),gc=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),dc=d(),j(Vt.$$.fragment),rs=d(),Ie=o("div"),j(ea.$$.fragment),hc=d(),In=o("p"),uc=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),fc=d(),j(zt.$$.fragment),is=d(),Pe=o("div"),j(ta.$$.fragment),mc=d(),Pn=o("p"),_c=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),bc=d(),j(Wt.$$.fragment),this.h()},l(s){const H=Hp('[data-svelte="svelte-1phssyn"]',document.head);p=a(H,"META",{name:!0,content:!0}),H.forEach(t),y=h(s),f=a(s,"H1",{class:!0});var oa=n(f);i=a(oa,"A",{id:!0,class:!0,href:!0});var Ln=n(i);g=a(Ln,"SPAN",{});var On=n(g);D(r.$$.fragment,On),On.forEach(t),Ln.forEach(t),u=h(oa),q=a(oa,"SPAN",{});var Rn=n(q);_=c(Rn,"Hugging Face Hub API"),Rn.forEach(t),oa.forEach(t),A=h(s),E=a(s,"P",{});var aa=n(E);b=c(aa,"Below is the documentation for the "),w=a(aa,"CODE",{});var Cn=n(w);P=c(Cn,"HfApi"),Cn.forEach(t),L=c(aa,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),aa.forEach(t),O=h(s),m=a(s,"P",{});var na=n(m);x=c(na,"All methods from the "),V=a(na,"CODE",{});var Sn=n(V);M=c(Sn,"HfApi"),Sn.forEach(t),R=c(na,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),na.forEach(t),K=h(s),z=a(s,"P",{});var Un=n(z);$=c(Un,"The following approach uses the method from the root of the package:"),Un.forEach(t),S=h(s),D(C.$$.fragment,s),X=h(s),ee=a(s,"P",{});var sa=n(ee);Y=c(sa,"The following approach uses the "),J=a(sa,"CODE",{});var Mn=n(J);Z=c(Mn,"HfApi"),Mn.forEach(t),ae=c(sa," class:"),sa.forEach(t),B=h(s),D(Q.$$.fragment,s),te=h(s),ne=a(s,"P",{});var ra=n(ne);Re=c(ra,"Using the "),he=a(ra,"CODE",{});var Vn=n(he);Be=c(Vn,"HfApi"),Vn.forEach(t),Ce=c(ra," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ra.forEach(t),De=h(s),U=a(s,"DIV",{class:!0});var W=n(U);D(ue.$$.fragment,W),da=h(W),ce=a(W,"DIV",{class:!0});var Le=n(ce);D(Fe.$$.fragment,Le),ha=h(Le),Ke=a(Le,"P",{});var zn=n(Ke);ua=c(zn,"Closes or re-opens a discussion or pull request."),zn.forEach(t),Ds=h(Le),D(Xe.$$.fragment,Le),Fs=h(Le),D(Ye.$$.fragment,Le),Le.forEach(t),Ns=h(W),be=a(W,"DIV",{class:!0});var Oe=n(be);D(ao.$$.fragment,Oe),Ts=h(Oe),Oa=a(Oe,"P",{});var Wn=n(Oa);Is=c(Wn,"Creates a new comment on the given discussion"),Wn.forEach(t),Ps=h(Oe),D(Ze.$$.fragment,Oe),Ls=h(Oe),D(et.$$.fragment,Oe),Oe.forEach(t),Os=h(W),tt=a(W,"DIV",{class:!0});var ia=n(tt);D(no.$$.fragment,ia),Rs=h(ia),Ra=a(ia,"P",{});var Gn=n(Ra);Cs=c(Gn,"Creates a commit in the given repo, deleting & uploading files as needed."),Gn.forEach(t),ia.forEach(t),Ss=h(W),re=a(W,"DIV",{class:!0});var pe=n(re);D(so.$$.fragment,pe),Us=h(pe),Ca=a(pe,"P",{});var Bn=n(Ca);Ms=c(Bn,"Creates a discussion or pull request."),Bn.forEach(t),Vs=h(pe),ro=a(pe,"P",{});var la=n(ro);zs=c(la,"Pull Requests created programmatically will be in "),Sa=a(la,"CODE",{});var Kn=n(Sa);Ws=c(Kn,'"draft"'),Kn.forEach(t),Gs=c(la," status."),la.forEach(t),Bs=h(pe),io=a(pe,"P",{});var ca=n(io);Ks=c(ca,"Creating a Pull Request with changes can also be done at once with "),fa=a(ca,"A",{href:!0});var Jn=n(fa);Js=c(Jn,"HfApi.create_commit()"),Jn.forEach(t),Qs=c(ca,"."),ca.forEach(t),Xs=h(pe),ma=a(pe,"P",{});var Aa=n(ma);Ys=c(Aa,"Returns: "),_a=a(Aa,"A",{href:!0});var Qn=n(_a);Zs=c(Qn,"DiscussionWithDetails"),Qn.forEach(t),Aa.forEach(t),er=h(pe),D(ot.$$.fragment,pe),pe.forEach(t),tr=h(W),ie=a(W,"DIV",{class:!0});var ge=n(ie);D(lo.$$.fragment,ge),or=h(ge),co=a(ge,"P",{});var pa=n(co);ar=c(pa,"Creates a pull request. Pull Requests created programmatically will be in "),Ua=a(pa,"CODE",{});var Xn=n(Ua);nr=c(Xn,'"draft"'),Xn.forEach(t),sr=c(pa," status."),pa.forEach(t),rr=h(ge),po=a(ge,"P",{});var ga=n(po);ir=c(ga,"Creating a Pull Request with changes can also be done at once with "),ba=a(ga,"A",{href:!0});var wc=n(ba);lr=c(wc,"HfApi.create_commit()"),wc.forEach(t),cr=c(ga,";"),ga.forEach(t),pr=h(ge),go=a(ge,"P",{});var cs=n(go);gr=c(cs,"This is a wrapper around "),Ma=a(cs,"CODE",{});var kc=n(Ma);dr=c(kc,"HfApi.create_discusssion"),kc.forEach(t),hr=c(cs,"."),cs.forEach(t),ur=h(ge),va=a(ge,"P",{});var vc=n(va);fr=c(vc,"Returns: "),$a=a(vc,"A",{href:!0});var Ac=n($a);mr=c(Ac,"DiscussionWithDetails"),Ac.forEach(t),vc.forEach(t),_r=h(ge),D(at.$$.fragment,ge),ge.forEach(t),br=h(W),nt=a(W,"DIV",{class:!0});var ps=n(nt);D(ho.$$.fragment,ps),vr=h(ps),Va=a(ps,"P",{});var xc=n(Va);$r=c(xc,"Create an empty repo on the HuggingFace Hub."),xc.forEach(t),ps.forEach(t),yr=h(W),ve=a(W,"DIV",{class:!0});var Gt=n(ve);D(uo.$$.fragment,Gt),Er=h(Gt),za=a(Gt,"P",{});var Hc=n(za);wr=c(Hc,"Get info on one specific dataset on huggingface.co."),Hc.forEach(t),kr=h(Gt),Wa=a(Gt,"P",{});var qc=n(Wa);Ar=c(qc,"Dataset can be private if you pass an acceptable token."),qc.forEach(t),xr=h(Gt),D(st.$$.fragment,Gt),Gt.forEach(t),Hr=h(W),Se=a(W,"DIV",{class:!0});var xa=n(Se);D(fo.$$.fragment,xa),qr=h(xa),Ga=a(xa,"P",{});var jc=n(Ga);jr=c(jc,"Deletes a file in the given repo."),jc.forEach(t),Dr=h(xa),D(rt.$$.fragment,xa),xa.forEach(t),Fr=h(W),Ue=a(W,"DIV",{class:!0});var Ha=n(Ue);D(mo.$$.fragment,Ha),Nr=h(Ha),Ba=a(Ha,"P",{});var Dc=n(Ba);Tr=c(Dc,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Dc.forEach(t),Ir=h(Ha),D(it.$$.fragment,Ha),Ha.forEach(t),Pr=h(W),Me=a(W,"DIV",{class:!0});var qa=n(Me);D(_o.$$.fragment,qa),Lr=h(qa),Ka=a(qa,"P",{});var Fc=n(Ka);Or=c(Fc,"Edits a comment on a discussion / pull request"),Fc.forEach(t),Rr=h(qa),D(lt.$$.fragment,qa),qa.forEach(t),Cr=h(W),ct=a(W,"DIV",{class:!0});var gs=n(ct);D(bo.$$.fragment,gs),Sr=h(gs),Ja=a(gs,"P",{});var Nc=n(Ja);Ur=c(Nc,"Gets all valid dataset tags as a nested namespace object."),Nc.forEach(t),gs.forEach(t),Mr=h(W),$e=a(W,"DIV",{class:!0});var Bt=n($e);D(vo.$$.fragment,Bt),Vr=h(Bt),Qa=a(Bt,"P",{});var Tc=n(Qa);zr=c(Tc,"Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Tc.forEach(t),Wr=h(Bt),ya=a(Bt,"P",{});var $c=n(ya);Gr=c($c,"Returns: "),Ea=a($c,"A",{href:!0});var Ic=n(Ea);Br=c(Ic,"DiscussionWithDetails"),Ic.forEach(t),$c.forEach(t),Kr=h(Bt),D(pt.$$.fragment,Bt),Bt.forEach(t),Jr=h(W),gt=a(W,"DIV",{class:!0});var ds=n(gt);D($o.$$.fragment,ds),Qr=h(ds),Xa=a(ds,"P",{});var Pc=n(Xa);Xr=c(Pc,`Returns the repository name for a given model ID and optional
organization.`),Pc.forEach(t),ds.forEach(t),Yr=h(W),dt=a(W,"DIV",{class:!0});var hs=n(dt);D(yo.$$.fragment,hs),Zr=h(hs),Ya=a(hs,"P",{});var Lc=n(Ya);ei=c(Lc,"Gets all valid model tags as a nested namespace object"),Lc.forEach(t),hs.forEach(t),ti=h(W),ht=a(W,"DIV",{class:!0});var us=n(ht);D(Eo.$$.fragment,us),oi=h(us),wo=a(us,"P",{});var fs=n(wo);ai=c(fs,`Fetches discussions and pull requests for the given repo. The response is
paginated with `),wa=a(fs,"A",{href:!0});var Oc=n(wa);ni=c(Oc,"Pagination"),Oc.forEach(t),si=c(fs,"."),fs.forEach(t),us.forEach(t),ri=h(W),ye=a(W,"DIV",{class:!0});var Kt=n(ye);D(ko.$$.fragment,Kt),ii=h(Kt),Za=a(Kt,"P",{});var Rc=n(Za);li=c(Rc,"Hides a comment on a discussion / pull request."),Rc.forEach(t),ci=h(Kt),en=a(Kt,"P",{});var Cc=n(en);pi=c(Cc,"Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Cc.forEach(t),gi=h(Kt),D(ut.$$.fragment,Kt),Kt.forEach(t),di=h(W),Ee=a(W,"DIV",{class:!0});var Jt=n(Ee);D(Ao.$$.fragment,Jt),hi=h(Jt),tn=a(Jt,"P",{});var Sc=n(tn);ui=c(Sc,"Get the public list of all the datasets on huggingface.co"),Sc.forEach(t),fi=h(Jt),D(ft.$$.fragment,Jt),mi=h(Jt),D(mt.$$.fragment,Jt),Jt.forEach(t),_i=h(W),_t=a(W,"DIV",{class:!0});var ms=n(_t);D(xo.$$.fragment,ms),bi=h(ms),on=a(ms,"P",{});var Uc=n(on);vi=c(Uc,"Get the public list of all the metrics on huggingface.co"),Uc.forEach(t),ms.forEach(t),$i=h(W),we=a(W,"DIV",{class:!0});var Qt=n(we);D(Ho.$$.fragment,Qt),yi=h(Qt),an=a(Qt,"P",{});var Mc=n(an);Ei=c(Mc,"Get the public list of all the models on huggingface.co"),Mc.forEach(t),wi=h(Qt),D(bt.$$.fragment,Qt),ki=h(Qt),D(vt.$$.fragment,Qt),Qt.forEach(t),Ai=h(W),$t=a(W,"DIV",{class:!0});var _s=n($t);D(qo.$$.fragment,_s),xi=h(_s),nn=a(_s,"P",{});var Vc=n(nn);Hi=c(Vc,"Get the list of files in a given repo."),Vc.forEach(t),_s.forEach(t),qi=h(W),Ve=a(W,"DIV",{class:!0});var ja=n(Ve);D(jo.$$.fragment,ja),ji=h(ja),sn=a(ja,"P",{});var zc=n(sn);Di=c(zc,"Merges a pull request."),zc.forEach(t),Fi=h(ja),D(yt.$$.fragment,ja),ja.forEach(t),Ni=h(W),ke=a(W,"DIV",{class:!0});var Xt=n(ke);D(Do.$$.fragment,Xt),Ti=h(Xt),rn=a(Xt,"P",{});var Wc=n(rn);Ii=c(Wc,"Get info on one specific model on huggingface.co"),Wc.forEach(t),Pi=h(Xt),ln=a(Xt,"P",{});var Gc=n(ln);Li=c(Gc,"Model can be private if you pass an acceptable token or are logged in."),Gc.forEach(t),Oi=h(Xt),D(Et.$$.fragment,Xt),Xt.forEach(t),Ri=h(W),Ae=a(W,"DIV",{class:!0});var Yt=n(Ae);D(Fo.$$.fragment,Yt),Ci=h(Yt),cn=a(Yt,"P",{});var Bc=n(cn);Si=c(Bc,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Bc.forEach(t),Ui=h(Yt),No=a(Yt,"P",{});var bs=n(No);Mi=c(bs,`Note there are certain limitations. For more information about moving
repositories, please see
`),To=a(bs,"A",{href:!0,rel:!0});var Kc=n(To);Vi=c(Kc,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Kc.forEach(t),zi=c(bs,"."),bs.forEach(t),Wi=h(Yt),D(wt.$$.fragment,Yt),Yt.forEach(t),Gi=h(W),xe=a(W,"DIV",{class:!0});var Zt=n(xe);D(Io.$$.fragment,Zt),Bi=h(Zt),pn=a(Zt,"P",{});var Jc=n(pn);Ki=c(Jc,"Renames a discussion"),Jc.forEach(t),Ji=h(Zt),D(kt.$$.fragment,Zt),Qi=h(Zt),D(At.$$.fragment,Zt),Zt.forEach(t),Xi=h(W),ze=a(W,"DIV",{class:!0});var Da=n(ze);D(Po.$$.fragment,Da),Yi=h(Da),gn=a(Da,"P",{});var Qc=n(gn);Zi=c(Qc,"Get the info object for a given repo of a given type."),Qc.forEach(t),el=h(Da),D(xt.$$.fragment,Da),Da.forEach(t),tl=h(W),Ht=a(W,"DIV",{class:!0});var vs=n(Ht);D(Lo.$$.fragment,vs),ol=h(vs),dn=a(vs,"P",{});var Xc=n(dn);al=c(Xc,`Saves the passed access token so git can correctly authenticate the
user.`),Xc.forEach(t),vs.forEach(t),nl=h(W),He=a(W,"DIV",{class:!0});var eo=n(He);D(Oo.$$.fragment,eo),sl=h(eo),hn=a(eo,"P",{});var Yc=n(hn);rl=c(Yc,"Get info on one specific Space on huggingface.co."),Yc.forEach(t),il=h(eo),un=a(eo,"P",{});var Zc=n(un);ll=c(Zc,"Space can be private if you pass an acceptable token."),Zc.forEach(t),cl=h(eo),D(qt.$$.fragment,eo),eo.forEach(t),pl=h(W),jt=a(W,"DIV",{class:!0});var $s=n(jt);D(Ro.$$.fragment,$s),gl=h($s),fn=a($s,"P",{});var ep=n(fn);dl=c(ep,"Resets the user\u2019s access token."),ep.forEach(t),$s.forEach(t),hl=h(W),We=a(W,"DIV",{class:!0});var Fa=n(We);D(Co.$$.fragment,Fa),ul=h(Fa),mn=a(Fa,"P",{});var tp=n(mn);fl=c(tp,"Update the visibility setting of a repository."),tp.forEach(t),ml=h(Fa),D(Dt.$$.fragment,Fa),Fa.forEach(t),_l=h(W),qe=a(W,"DIV",{class:!0});var to=n(qe);D(So.$$.fragment,to),bl=h(to),_n=a(to,"P",{});var op=n(_n);vl=c(op,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),op.forEach(t),$l=h(to),D(Ft.$$.fragment,to),yl=h(to),D(Nt.$$.fragment,to),to.forEach(t),El=h(W),le=a(W,"DIV",{class:!0});var je=n(le);D(Uo.$$.fragment,je),wl=h(je),bn=a(je,"P",{});var ap=n(bn);kl=c(ap,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),ap.forEach(t),Al=h(je),vn=a(je,"P",{});var np=n(vn);xl=c(np,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),np.forEach(t),Hl=h(je),Mo=a(je,"P",{});var ys=n(Mo);ql=c(ys,"Uses "),$n=a(ys,"CODE",{});var sp=n($n);jl=c(sp,"HfApi.create_commit"),sp.forEach(t),Dl=c(ys," under the hood."),ys.forEach(t),Fl=h(je),D(Tt.$$.fragment,je),Nl=h(je),D(It.$$.fragment,je),je.forEach(t),Tl=h(W),Pt=a(W,"DIV",{class:!0});var Es=n(Pt);D(Vo.$$.fragment,Es),Il=h(Es),yn=a(Es,"P",{});var rp=n(yn);Pl=c(rp,"Call HF API to know \u201Cwhoami\u201D."),rp.forEach(t),Es.forEach(t),W.forEach(t),Yn=h(s),Je=a(s,"H2",{class:!0});var ws=n(Je);Lt=a(ws,"A",{id:!0,class:!0,href:!0});var ip=n(Lt);En=a(ip,"SPAN",{});var lp=n(En);D(zo.$$.fragment,lp),lp.forEach(t),ip.forEach(t),Ll=h(ws),wn=a(ws,"SPAN",{});var cp=n(wn);Ol=c(cp,"Hugging Face local storage"),cp.forEach(t),ws.forEach(t),Zn=h(s),Wo=a(s,"P",{});var yc=n(Wo);kn=a(yc,"CODE",{});var pp=n(kn);Rl=c(pp,"huggingface_hub"),pp.forEach(t),Cl=c(yc,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),yc.forEach(t),es=h(s),Ot=a(s,"P",{});var ks=n(Ot);Sl=c(ks,"It does this using the "),ka=a(ks,"A",{href:!0});var gp=n(ka);Ul=c(gp,"HfFolder"),gp.forEach(t),Ml=c(ks," utility, which saves data at the root of the user."),ks.forEach(t),ts=h(s),fe=a(s,"DIV",{class:!0});var oo=n(fe);D(Go.$$.fragment,oo),Vl=h(oo),Rt=a(oo,"DIV",{class:!0});var As=n(Rt);D(Bo.$$.fragment,As),zl=h(As),An=a(As,"P",{});var dp=n(An);Wl=c(dp,"Deletes the token from storage. Does not fail if token does not exist."),dp.forEach(t),As.forEach(t),Gl=h(oo),Ge=a(oo,"DIV",{class:!0});var Na=n(Ge);D(Ko.$$.fragment,Na),Bl=h(Na),xn=a(Na,"P",{});var hp=n(xn);Kl=c(hp,"Get token or None if not existent."),hp.forEach(t),Jl=h(Na),Jo=a(Na,"P",{});var xs=n(Jo);Ql=c(xs,"Note that a token can be also provided using the "),Hn=a(xs,"CODE",{});var up=n(Hn);Xl=c(up,"HUGGING_FACE_HUB_TOKEN"),up.forEach(t),Yl=c(xs,`
environment variable.`),xs.forEach(t),Na.forEach(t),Zl=h(oo),Ct=a(oo,"DIV",{class:!0});var Hs=n(Ct);D(Qo.$$.fragment,Hs),ec=h(Hs),qn=a(Hs,"P",{});var fp=n(qn);tc=c(fp,"Save token, creating folder as needed."),fp.forEach(t),Hs.forEach(t),oo.forEach(t),os=h(s),Qe=a(s,"H2",{class:!0});var qs=n(Qe);St=a(qs,"A",{id:!0,class:!0,href:!0});var mp=n(St);jn=a(mp,"SPAN",{});var _p=n(jn);D(Xo.$$.fragment,_p),_p.forEach(t),mp.forEach(t),oc=h(qs),Dn=a(qs,"SPAN",{});var bp=n(Dn);ac=c(bp,"Filtering helpers"),bp.forEach(t),qs.forEach(t),as=h(s),Ut=a(s,"P",{});var js=n(Ut);nc=c(js,"Some helpers to filter repositories on the Hub are available in the "),Fn=a(js,"CODE",{});var vp=n(Fn);sc=c(vp,"huggingface_hub"),vp.forEach(t),rc=c(js," package."),js.forEach(t),ns=h(s),Ne=a(s,"DIV",{class:!0});var Ta=n(Ne);D(Yo.$$.fragment,Ta),ic=h(Ta),Nn=a(Ta,"P",{});var $p=n(Nn);lc=c($p,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),$p.forEach(t),cc=h(Ta),D(Mt.$$.fragment,Ta),Ta.forEach(t),ss=h(s),Te=a(s,"DIV",{class:!0});var Ia=n(Te);D(Zo.$$.fragment,Ia),pc=h(Ia),Tn=a(Ia,"P",{});var yp=n(Tn);gc=c(yp,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yp.forEach(t),dc=h(Ia),D(Vt.$$.fragment,Ia),Ia.forEach(t),rs=h(s),Ie=a(s,"DIV",{class:!0});var Pa=n(Ie);D(ea.$$.fragment,Pa),hc=h(Pa),In=a(Pa,"P",{});var Ep=n(In);uc=c(Ep,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ep.forEach(t),fc=h(Pa),D(zt.$$.fragment,Pa),Pa.forEach(t),is=h(s),Pe=a(s,"DIV",{class:!0});var La=n(Pe);D(ta.$$.fragment,La),mc=h(La),Pn=a(La,"P",{});var wp=n(Pn);_c=c(wp,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wp.forEach(t),bc=h(La),D(Wt.$$.fragment,La),La.forEach(t),this.h()},h(){v(p,"name","hf:doc:metadata"),v(p,"content",JSON.stringify(lg)),v(i,"id","huggingface_hub.HfApi"),v(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(i,"href","#huggingface_hub.HfApi"),v(f,"class","relative group"),v(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fa,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),v(_a,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ba,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),v($a,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ea,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(wa,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"),v(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(To,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),v(To,"rel","nofollow"),v(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Lt,"id","huggingface_hub.HfFolder"),v(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Lt,"href","#huggingface_hub.HfFolder"),v(Je,"class","relative group"),v(ka,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder"),v(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(St,"id","huggingface_hub.DatasetFilter"),v(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(St,"href","#huggingface_hub.DatasetFilter"),v(Qe,"class","relative group"),v(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,H){e(document.head,p),k(s,y,H),k(s,f,H),e(f,i),e(i,g),F(r,g,null),e(f,u),e(f,q),e(q,_),k(s,A,H),k(s,E,H),e(E,b),e(E,w),e(w,P),e(E,L),k(s,O,H),k(s,m,H),e(m,x),e(m,V),e(V,M),e(m,R),k(s,K,H),k(s,z,H),e(z,$),k(s,S,H),F(C,s,H),k(s,X,H),k(s,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),k(s,B,H),F(Q,s,H),k(s,te,H),k(s,ne,H),e(ne,Re),e(ne,he),e(he,Be),e(ne,Ce),k(s,De,H),k(s,U,H),F(ue,U,null),e(U,da),e(U,ce),F(Fe,ce,null),e(ce,ha),e(ce,Ke),e(Ke,ua),e(ce,Ds),F(Xe,ce,null),e(ce,Fs),F(Ye,ce,null),e(U,Ns),e(U,be),F(ao,be,null),e(be,Ts),e(be,Oa),e(Oa,Is),e(be,Ps),F(Ze,be,null),e(be,Ls),F(et,be,null),e(U,Os),e(U,tt),F(no,tt,null),e(tt,Rs),e(tt,Ra),e(Ra,Cs),e(U,Ss),e(U,re),F(so,re,null),e(re,Us),e(re,Ca),e(Ca,Ms),e(re,Vs),e(re,ro),e(ro,zs),e(ro,Sa),e(Sa,Ws),e(ro,Gs),e(re,Bs),e(re,io),e(io,Ks),e(io,fa),e(fa,Js),e(io,Qs),e(re,Xs),e(re,ma),e(ma,Ys),e(ma,_a),e(_a,Zs),e(re,er),F(ot,re,null),e(U,tr),e(U,ie),F(lo,ie,null),e(ie,or),e(ie,co),e(co,ar),e(co,Ua),e(Ua,nr),e(co,sr),e(ie,rr),e(ie,po),e(po,ir),e(po,ba),e(ba,lr),e(po,cr),e(ie,pr),e(ie,go),e(go,gr),e(go,Ma),e(Ma,dr),e(go,hr),e(ie,ur),e(ie,va),e(va,fr),e(va,$a),e($a,mr),e(ie,_r),F(at,ie,null),e(U,br),e(U,nt),F(ho,nt,null),e(nt,vr),e(nt,Va),e(Va,$r),e(U,yr),e(U,ve),F(uo,ve,null),e(ve,Er),e(ve,za),e(za,wr),e(ve,kr),e(ve,Wa),e(Wa,Ar),e(ve,xr),F(st,ve,null),e(U,Hr),e(U,Se),F(fo,Se,null),e(Se,qr),e(Se,Ga),e(Ga,jr),e(Se,Dr),F(rt,Se,null),e(U,Fr),e(U,Ue),F(mo,Ue,null),e(Ue,Nr),e(Ue,Ba),e(Ba,Tr),e(Ue,Ir),F(it,Ue,null),e(U,Pr),e(U,Me),F(_o,Me,null),e(Me,Lr),e(Me,Ka),e(Ka,Or),e(Me,Rr),F(lt,Me,null),e(U,Cr),e(U,ct),F(bo,ct,null),e(ct,Sr),e(ct,Ja),e(Ja,Ur),e(U,Mr),e(U,$e),F(vo,$e,null),e($e,Vr),e($e,Qa),e(Qa,zr),e($e,Wr),e($e,ya),e(ya,Gr),e(ya,Ea),e(Ea,Br),e($e,Kr),F(pt,$e,null),e(U,Jr),e(U,gt),F($o,gt,null),e(gt,Qr),e(gt,Xa),e(Xa,Xr),e(U,Yr),e(U,dt),F(yo,dt,null),e(dt,Zr),e(dt,Ya),e(Ya,ei),e(U,ti),e(U,ht),F(Eo,ht,null),e(ht,oi),e(ht,wo),e(wo,ai),e(wo,wa),e(wa,ni),e(wo,si),e(U,ri),e(U,ye),F(ko,ye,null),e(ye,ii),e(ye,Za),e(Za,li),e(ye,ci),e(ye,en),e(en,pi),e(ye,gi),F(ut,ye,null),e(U,di),e(U,Ee),F(Ao,Ee,null),e(Ee,hi),e(Ee,tn),e(tn,ui),e(Ee,fi),F(ft,Ee,null),e(Ee,mi),F(mt,Ee,null),e(U,_i),e(U,_t),F(xo,_t,null),e(_t,bi),e(_t,on),e(on,vi),e(U,$i),e(U,we),F(Ho,we,null),e(we,yi),e(we,an),e(an,Ei),e(we,wi),F(bt,we,null),e(we,ki),F(vt,we,null),e(U,Ai),e(U,$t),F(qo,$t,null),e($t,xi),e($t,nn),e(nn,Hi),e(U,qi),e(U,Ve),F(jo,Ve,null),e(Ve,ji),e(Ve,sn),e(sn,Di),e(Ve,Fi),F(yt,Ve,null),e(U,Ni),e(U,ke),F(Do,ke,null),e(ke,Ti),e(ke,rn),e(rn,Ii),e(ke,Pi),e(ke,ln),e(ln,Li),e(ke,Oi),F(Et,ke,null),e(U,Ri),e(U,Ae),F(Fo,Ae,null),e(Ae,Ci),e(Ae,cn),e(cn,Si),e(Ae,Ui),e(Ae,No),e(No,Mi),e(No,To),e(To,Vi),e(No,zi),e(Ae,Wi),F(wt,Ae,null),e(U,Gi),e(U,xe),F(Io,xe,null),e(xe,Bi),e(xe,pn),e(pn,Ki),e(xe,Ji),F(kt,xe,null),e(xe,Qi),F(At,xe,null),e(U,Xi),e(U,ze),F(Po,ze,null),e(ze,Yi),e(ze,gn),e(gn,Zi),e(ze,el),F(xt,ze,null),e(U,tl),e(U,Ht),F(Lo,Ht,null),e(Ht,ol),e(Ht,dn),e(dn,al),e(U,nl),e(U,He),F(Oo,He,null),e(He,sl),e(He,hn),e(hn,rl),e(He,il),e(He,un),e(un,ll),e(He,cl),F(qt,He,null),e(U,pl),e(U,jt),F(Ro,jt,null),e(jt,gl),e(jt,fn),e(fn,dl),e(U,hl),e(U,We),F(Co,We,null),e(We,ul),e(We,mn),e(mn,fl),e(We,ml),F(Dt,We,null),e(U,_l),e(U,qe),F(So,qe,null),e(qe,bl),e(qe,_n),e(_n,vl),e(qe,$l),F(Ft,qe,null),e(qe,yl),F(Nt,qe,null),e(U,El),e(U,le),F(Uo,le,null),e(le,wl),e(le,bn),e(bn,kl),e(le,Al),e(le,vn),e(vn,xl),e(le,Hl),e(le,Mo),e(Mo,ql),e(Mo,$n),e($n,jl),e(Mo,Dl),e(le,Fl),F(Tt,le,null),e(le,Nl),F(It,le,null),e(U,Tl),e(U,Pt),F(Vo,Pt,null),e(Pt,Il),e(Pt,yn),e(yn,Pl),k(s,Yn,H),k(s,Je,H),e(Je,Lt),e(Lt,En),F(zo,En,null),e(Je,Ll),e(Je,wn),e(wn,Ol),k(s,Zn,H),k(s,Wo,H),e(Wo,kn),e(kn,Rl),e(Wo,Cl),k(s,es,H),k(s,Ot,H),e(Ot,Sl),e(Ot,ka),e(ka,Ul),e(Ot,Ml),k(s,ts,H),k(s,fe,H),F(Go,fe,null),e(fe,Vl),e(fe,Rt),F(Bo,Rt,null),e(Rt,zl),e(Rt,An),e(An,Wl),e(fe,Gl),e(fe,Ge),F(Ko,Ge,null),e(Ge,Bl),e(Ge,xn),e(xn,Kl),e(Ge,Jl),e(Ge,Jo),e(Jo,Ql),e(Jo,Hn),e(Hn,Xl),e(Jo,Yl),e(fe,Zl),e(fe,Ct),F(Qo,Ct,null),e(Ct,ec),e(Ct,qn),e(qn,tc),k(s,os,H),k(s,Qe,H),e(Qe,St),e(St,jn),F(Xo,jn,null),e(Qe,oc),e(Qe,Dn),e(Dn,ac),k(s,as,H),k(s,Ut,H),e(Ut,nc),e(Ut,Fn),e(Fn,sc),e(Ut,rc),k(s,ns,H),k(s,Ne,H),F(Yo,Ne,null),e(Ne,ic),e(Ne,Nn),e(Nn,lc),e(Ne,cc),F(Mt,Ne,null),k(s,ss,H),k(s,Te,H),F(Zo,Te,null),e(Te,pc),e(Te,Tn),e(Tn,gc),e(Te,dc),F(Vt,Te,null),k(s,rs,H),k(s,Ie,H),F(ea,Ie,null),e(Ie,hc),e(Ie,In),e(In,uc),e(Ie,fc),F(zt,Ie,null),k(s,is,H),k(s,Pe,H),F(ta,Pe,null),e(Pe,mc),e(Pe,Pn),e(Pn,_c),e(Pe,bc),F(Wt,Pe,null),ls=!0},p(s,[H]){const oa={};H&2&&(oa.$$scope={dirty:H,ctx:s}),Xe.$set(oa);const Ln={};H&2&&(Ln.$$scope={dirty:H,ctx:s}),Ye.$set(Ln);const On={};H&2&&(On.$$scope={dirty:H,ctx:s}),Ze.$set(On);const Rn={};H&2&&(Rn.$$scope={dirty:H,ctx:s}),et.$set(Rn);const aa={};H&2&&(aa.$$scope={dirty:H,ctx:s}),ot.$set(aa);const Cn={};H&2&&(Cn.$$scope={dirty:H,ctx:s}),at.$set(Cn);const na={};H&2&&(na.$$scope={dirty:H,ctx:s}),st.$set(na);const Sn={};H&2&&(Sn.$$scope={dirty:H,ctx:s}),rt.$set(Sn);const Un={};H&2&&(Un.$$scope={dirty:H,ctx:s}),it.$set(Un);const sa={};H&2&&(sa.$$scope={dirty:H,ctx:s}),lt.$set(sa);const Mn={};H&2&&(Mn.$$scope={dirty:H,ctx:s}),pt.$set(Mn);const ra={};H&2&&(ra.$$scope={dirty:H,ctx:s}),ut.$set(ra);const Vn={};H&2&&(Vn.$$scope={dirty:H,ctx:s}),ft.$set(Vn);const W={};H&2&&(W.$$scope={dirty:H,ctx:s}),mt.$set(W);const Le={};H&2&&(Le.$$scope={dirty:H,ctx:s}),bt.$set(Le);const zn={};H&2&&(zn.$$scope={dirty:H,ctx:s}),vt.$set(zn);const Oe={};H&2&&(Oe.$$scope={dirty:H,ctx:s}),yt.$set(Oe);const Wn={};H&2&&(Wn.$$scope={dirty:H,ctx:s}),Et.$set(Wn);const ia={};H&2&&(ia.$$scope={dirty:H,ctx:s}),wt.$set(ia);const Gn={};H&2&&(Gn.$$scope={dirty:H,ctx:s}),kt.$set(Gn);const pe={};H&2&&(pe.$$scope={dirty:H,ctx:s}),At.$set(pe);const Bn={};H&2&&(Bn.$$scope={dirty:H,ctx:s}),xt.$set(Bn);const la={};H&2&&(la.$$scope={dirty:H,ctx:s}),qt.$set(la);const Kn={};H&2&&(Kn.$$scope={dirty:H,ctx:s}),Dt.$set(Kn);const ca={};H&2&&(ca.$$scope={dirty:H,ctx:s}),Ft.$set(ca);const Jn={};H&2&&(Jn.$$scope={dirty:H,ctx:s}),Nt.$set(Jn);const Aa={};H&2&&(Aa.$$scope={dirty:H,ctx:s}),Tt.$set(Aa);const Qn={};H&2&&(Qn.$$scope={dirty:H,ctx:s}),It.$set(Qn);const ge={};H&2&&(ge.$$scope={dirty:H,ctx:s}),Mt.$set(ge);const pa={};H&2&&(pa.$$scope={dirty:H,ctx:s}),Vt.$set(pa);const Xn={};H&2&&(Xn.$$scope={dirty:H,ctx:s}),zt.$set(Xn);const ga={};H&2&&(ga.$$scope={dirty:H,ctx:s}),Wt.$set(ga)},i(s){ls||(N(r.$$.fragment,s),N(C.$$.fragment,s),N(Q.$$.fragment,s),N(ue.$$.fragment,s),N(Fe.$$.fragment,s),N(Xe.$$.fragment,s),N(Ye.$$.fragment,s),N(ao.$$.fragment,s),N(Ze.$$.fragment,s),N(et.$$.fragment,s),N(no.$$.fragment,s),N(so.$$.fragment,s),N(ot.$$.fragment,s),N(lo.$$.fragment,s),N(at.$$.fragment,s),N(ho.$$.fragment,s),N(uo.$$.fragment,s),N(st.$$.fragment,s),N(fo.$$.fragment,s),N(rt.$$.fragment,s),N(mo.$$.fragment,s),N(it.$$.fragment,s),N(_o.$$.fragment,s),N(lt.$$.fragment,s),N(bo.$$.fragment,s),N(vo.$$.fragment,s),N(pt.$$.fragment,s),N($o.$$.fragment,s),N(yo.$$.fragment,s),N(Eo.$$.fragment,s),N(ko.$$.fragment,s),N(ut.$$.fragment,s),N(Ao.$$.fragment,s),N(ft.$$.fragment,s),N(mt.$$.fragment,s),N(xo.$$.fragment,s),N(Ho.$$.fragment,s),N(bt.$$.fragment,s),N(vt.$$.fragment,s),N(qo.$$.fragment,s),N(jo.$$.fragment,s),N(yt.$$.fragment,s),N(Do.$$.fragment,s),N(Et.$$.fragment,s),N(Fo.$$.fragment,s),N(wt.$$.fragment,s),N(Io.$$.fragment,s),N(kt.$$.fragment,s),N(At.$$.fragment,s),N(Po.$$.fragment,s),N(xt.$$.fragment,s),N(Lo.$$.fragment,s),N(Oo.$$.fragment,s),N(qt.$$.fragment,s),N(Ro.$$.fragment,s),N(Co.$$.fragment,s),N(Dt.$$.fragment,s),N(So.$$.fragment,s),N(Ft.$$.fragment,s),N(Nt.$$.fragment,s),N(Uo.$$.fragment,s),N(Tt.$$.fragment,s),N(It.$$.fragment,s),N(Vo.$$.fragment,s),N(zo.$$.fragment,s),N(Go.$$.fragment,s),N(Bo.$$.fragment,s),N(Ko.$$.fragment,s),N(Qo.$$.fragment,s),N(Xo.$$.fragment,s),N(Yo.$$.fragment,s),N(Mt.$$.fragment,s),N(Zo.$$.fragment,s),N(Vt.$$.fragment,s),N(ea.$$.fragment,s),N(zt.$$.fragment,s),N(ta.$$.fragment,s),N(Wt.$$.fragment,s),ls=!0)},o(s){T(r.$$.fragment,s),T(C.$$.fragment,s),T(Q.$$.fragment,s),T(ue.$$.fragment,s),T(Fe.$$.fragment,s),T(Xe.$$.fragment,s),T(Ye.$$.fragment,s),T(ao.$$.fragment,s),T(Ze.$$.fragment,s),T(et.$$.fragment,s),T(no.$$.fragment,s),T(so.$$.fragment,s),T(ot.$$.fragment,s),T(lo.$$.fragment,s),T(at.$$.fragment,s),T(ho.$$.fragment,s),T(uo.$$.fragment,s),T(st.$$.fragment,s),T(fo.$$.fragment,s),T(rt.$$.fragment,s),T(mo.$$.fragment,s),T(it.$$.fragment,s),T(_o.$$.fragment,s),T(lt.$$.fragment,s),T(bo.$$.fragment,s),T(vo.$$.fragment,s),T(pt.$$.fragment,s),T($o.$$.fragment,s),T(yo.$$.fragment,s),T(Eo.$$.fragment,s),T(ko.$$.fragment,s),T(ut.$$.fragment,s),T(Ao.$$.fragment,s),T(ft.$$.fragment,s),T(mt.$$.fragment,s),T(xo.$$.fragment,s),T(Ho.$$.fragment,s),T(bt.$$.fragment,s),T(vt.$$.fragment,s),T(qo.$$.fragment,s),T(jo.$$.fragment,s),T(yt.$$.fragment,s),T(Do.$$.fragment,s),T(Et.$$.fragment,s),T(Fo.$$.fragment,s),T(wt.$$.fragment,s),T(Io.$$.fragment,s),T(kt.$$.fragment,s),T(At.$$.fragment,s),T(Po.$$.fragment,s),T(xt.$$.fragment,s),T(Lo.$$.fragment,s),T(Oo.$$.fragment,s),T(qt.$$.fragment,s),T(Ro.$$.fragment,s),T(Co.$$.fragment,s),T(Dt.$$.fragment,s),T(So.$$.fragment,s),T(Ft.$$.fragment,s),T(Nt.$$.fragment,s),T(Uo.$$.fragment,s),T(Tt.$$.fragment,s),T(It.$$.fragment,s),T(Vo.$$.fragment,s),T(zo.$$.fragment,s),T(Go.$$.fragment,s),T(Bo.$$.fragment,s),T(Ko.$$.fragment,s),T(Qo.$$.fragment,s),T(Xo.$$.fragment,s),T(Yo.$$.fragment,s),T(Mt.$$.fragment,s),T(Zo.$$.fragment,s),T(Vt.$$.fragment,s),T(ea.$$.fragment,s),T(zt.$$.fragment,s),T(ta.$$.fragment,s),T(Wt.$$.fragment,s),ls=!1},d(s){t(p),s&&t(y),s&&t(f),I(r),s&&t(A),s&&t(E),s&&t(O),s&&t(m),s&&t(K),s&&t(z),s&&t(S),I(C,s),s&&t(X),s&&t(ee),s&&t(B),I(Q,s),s&&t(te),s&&t(ne),s&&t(De),s&&t(U),I(ue),I(Fe),I(Xe),I(Ye),I(ao),I(Ze),I(et),I(no),I(so),I(ot),I(lo),I(at),I(ho),I(uo),I(st),I(fo),I(rt),I(mo),I(it),I(_o),I(lt),I(bo),I(vo),I(pt),I($o),I(yo),I(Eo),I(ko),I(ut),I(Ao),I(ft),I(mt),I(xo),I(Ho),I(bt),I(vt),I(qo),I(jo),I(yt),I(Do),I(Et),I(Fo),I(wt),I(Io),I(kt),I(At),I(Po),I(xt),I(Lo),I(Oo),I(qt),I(Ro),I(Co),I(Dt),I(So),I(Ft),I(Nt),I(Uo),I(Tt),I(It),I(Vo),s&&t(Yn),s&&t(Je),I(zo),s&&t(Zn),s&&t(Wo),s&&t(es),s&&t(Ot),s&&t(ts),s&&t(fe),I(Go),I(Bo),I(Ko),I(Qo),s&&t(os),s&&t(Qe),I(Xo),s&&t(as),s&&t(Ut),s&&t(ns),s&&t(Ne),I(Yo),I(Mt),s&&t(ss),s&&t(Te),I(Zo),I(Vt),s&&t(rs),s&&t(Ie),I(ea),I(zt),s&&t(is),s&&t(Pe),I(ta),I(Wt)}}}const lg={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function cg(G){return qp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mg extends kp{constructor(p){super();Ap(this,p,cg,ig,xp,{})}}export{mg as default,lg as metadata};
