import{S as lp,i as cp,s as pp,e as o,k as d,w as j,t as l,M as gp,c as a,d as t,m as h,a as n,x as D,h as c,b as v,G as e,g as k,y as F,q as N,o as T,B as I,v as dp,L as _e}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as lc}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hp(G){let p,y,f,i,g;return i=new le({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function up(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function fp(G){let p,y,f,i,g;return i=new le({props:{code:`
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function mp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function _p(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function bp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function vp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function $p(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee,Y,J,Z,ae,B;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=o("li"),Z=o("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=a(Q,"P",{});var te=n(p);y=c(te,"Raises the following errors:"),te.forEach(t),f=h(Q),i=a(Q,"UL",{});var ne=n(i);g=a(ne,"LI",{});var Re=n(g);r=a(Re,"A",{href:!0,rel:!0});var ce=n(r);u=a(ce,"CODE",{});var Be=n(u);q=c(Be,"HTTPError"),Be.forEach(t),ce.forEach(t),_=c(Re,`
if the HuggingFace API returned an error`),Re.forEach(t),A=h(ne),E=a(ne,"LI",{});var Ce=n(E);b=a(Ce,"A",{href:!0,rel:!0});var De=n(b);w=a(De,"CODE",{});var U=n(w);P=c(U,"ValueError"),U.forEach(t),De.forEach(t),L=c(Ce,`
if some parameter value is invalid`),Ce.forEach(t),O=h(ne),m=a(ne,"LI",{});var de=n(m);x=a(de,"A",{href:!0});var ca=n(x);V=c(ca,"RepositoryNotFoundError"),ca.forEach(t),M=c(de,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(de,"CODE",{});var ie=n(R);K=c(ie,"private"),ie.forEach(t),z=c(de," and you do not have access."),de.forEach(t),$=h(ne),S=a(ne,"LI",{});var Fe=n(S);C=a(Fe,"A",{href:!0});var pa=n(C);X=c(pa,"RevisionNotFoundError"),pa.forEach(t),ee=c(Fe,`
If the revision to download from cannot be found.`),Fe.forEach(t),Y=h(ne),J=a(ne,"LI",{});var Ke=n(J);Z=a(Ke,"A",{href:!0});var ga=n(Z);ae=c(ga,"EntryNotFoundError"),ga.forEach(t),B=c(Ke,`
If the file to download cannot be found.`),Ke.forEach(t),ne.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),v(Z,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,te){k(Q,p,te),e(p,y),k(Q,f,te),k(Q,i,te),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function yp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Ep(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function wp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function kp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Ap(G){let p,y,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function xp(G){let p,y,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Hp(G){let p,y,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function qp(G){let p,y,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),F(u,_,A),q=!0},p:_e,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function jp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Dp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Fp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Np(G){let p,y,f,i,g;return i=new le({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Tp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),z=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Ip(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Pp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var z=n(w);P=a(z,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(z,`
If the revision to download from cannot be found.`),z.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Lp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Op(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),z=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=a(Y,"P",{});var J=n(p);y=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=a(Y,"UL",{});var Z=n(i);g=a(Z,"LI",{});var ae=n(g);r=a(ae,"A",{href:!0,rel:!0});var B=n(r);u=a(B,"CODE",{});var Q=n(u);q=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),E=a(Z,"LI",{});var te=n(E);b=a(te,"A",{href:!0,rel:!0});var ne=n(b);w=a(ne,"CODE",{});var Re=n(w);P=c(Re,"ValueError"),Re.forEach(t),ne.forEach(t),L=c(te,`
if some parameter value is invalid`),te.forEach(t),O=h(Z),m=a(Z,"LI",{});var ce=n(m);x=a(ce,"A",{href:!0});var Be=n(x);V=c(Be,"RepositoryNotFoundError"),Be.forEach(t),M=c(ce,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ce,"CODE",{});var Ce=n(R);K=c(Ce,"private"),Ce.forEach(t),z=c(ce," and you do not have access."),ce.forEach(t),$=h(Z),S=a(Z,"LI",{});var De=n(S);C=a(De,"A",{href:!0});var U=n(C);X=c(U,"RevisionNotFoundError"),U.forEach(t),ee=c(De,`
If the revision to download from cannot be found.`),De.forEach(t),Z.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){k(Y,p,J),e(p,y),k(Y,f,J),k(Y,i,J),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,z),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function Rp(G){let p,y,f,i,g;return i=new le({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Cp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=a(O,"P",{});var m=n(p);y=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=a(O,"UL",{});var x=n(i);g=a(x,"LI",{});var V=n(g);r=a(V,"A",{href:!0,rel:!0});var M=n(r);u=a(M,"CODE",{});var R=n(u);q=c(R,"HTTPError"),R.forEach(t),M.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),E=a(x,"LI",{});var K=n(E);b=a(K,"A",{href:!0,rel:!0});var z=n(b);w=a(z,"CODE",{});var $=n(w);P=c($,"ValueError"),$.forEach(t),z.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),x.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow")},m(O,m){k(O,p,m),e(p,y),k(O,f,m),k(O,i,m),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function Sp(G){let p,y,f,i,g;return i=new le({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Up(G){let p,y,f,i,g;return i=new le({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Mp(G){let p,y;return p=new le({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(p.$$.fragment)},l(f){D(p.$$.fragment,f)},m(f,i){F(p,f,i),y=!0},p:_e,i(f){y||(N(p.$$.fragment,f),y=!0)},o(f){T(p.$$.fragment,f),y=!1},d(f){I(p,f)}}}function Vp(G){let p,y,f,i,g;return i=new le({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function zp(G){let p,y,f,i,g;return i=new le({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),F(i,r,u),g=!0},p:_e,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Wp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,z,$,S,C,X,ee,Y,J,Z,ae,B,Q,te,ne,Re,ce,Be,Ce,De,U,de,ca,ie,Fe,pa,Ke,ga,As,Xe,xs,Ye,Hs,be,ao,qs,Ta,js,Ds,Ze,Fs,et,Ns,tt,no,Ts,Ia,Is,Ps,pe,so,Ls,Pa,Os,Rs,ro,Cs,La,Ss,Us,Ms,da,Vs,ha,zs,Ws,ot,Gs,ge,io,Bs,lo,Ks,Oa,Js,Qs,Xs,co,Ys,Ra,Zs,er,tr,ua,or,fa,ar,nr,at,sr,nt,po,rr,Ca,ir,lr,ve,go,cr,Sa,pr,gr,Ua,dr,hr,st,ur,Se,ho,fr,Ma,mr,_r,rt,br,Ue,uo,vr,Va,$r,yr,it,Er,Me,fo,wr,za,kr,Ar,lt,xr,ct,mo,Hr,Wa,qr,jr,$e,_o,Dr,Ga,Fr,Nr,ma,Tr,_a,Ir,Pr,pt,Lr,gt,bo,Or,Ba,Rr,Cr,dt,vo,Sr,Ka,Ur,Mr,ht,$o,Vr,yo,zr,ba,Wr,Gr,Br,ye,Eo,Kr,Ja,Jr,Qr,Qa,Xr,Yr,ut,Zr,Ee,wo,ei,Xa,ti,oi,ft,ai,mt,ni,_t,ko,si,Ya,ri,ii,we,Ao,li,Za,ci,pi,bt,gi,vt,di,$t,xo,hi,en,ui,fi,Ve,Ho,mi,tn,_i,bi,yt,vi,ke,qo,$i,on,yi,Ei,an,wi,ki,Et,Ai,Ae,jo,xi,nn,Hi,qi,Do,ji,Fo,Di,Fi,Ni,wt,Ti,xe,No,Ii,sn,Pi,Li,kt,Oi,At,Ri,ze,To,Ci,rn,Si,Ui,xt,Mi,Ht,Io,Vi,ln,zi,Wi,He,Po,Gi,cn,Bi,Ki,pn,Ji,Qi,qt,Xi,jt,Lo,Yi,gn,Zi,el,We,Oo,tl,dn,ol,al,Dt,nl,qe,Ro,sl,hn,rl,il,Ft,ll,Nt,cl,re,Co,pl,un,gl,dl,fn,hl,ul,So,fl,mn,ml,_l,bl,Tt,vl,It,$l,Pt,Uo,yl,_n,El,Kn,Je,Lt,bn,Mo,wl,vn,kl,Jn,Vo,$n,Al,xl,Qn,Ot,Hl,va,ql,jl,Xn,he,zo,Dl,Rt,Wo,Fl,yn,Nl,Tl,Ge,Go,Il,En,Pl,Ll,Bo,Ol,wn,Rl,Cl,Sl,Ct,Ko,Ul,kn,Ml,Yn,Qe,St,An,Jo,Vl,xn,zl,Zn,Ut,Wl,Hn,Gl,Bl,es,Ne,Qo,Kl,qn,Jl,Ql,Mt,ts,Te,Xo,Xl,jn,Yl,Zl,Vt,os,Ie,Yo,ec,Dn,tc,oc,zt,as,Pe,Zo,ac,Fn,nc,sc,Wt,ns;return r=new lc({}),C=new le({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new le({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),de=new oe({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L572"}}),Fe=new oe({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2754",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Xe=new me({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[hp]},$$scope:{ctx:G}}}),Ye=new se({props:{$$slots:{default:[up]},$$scope:{ctx:G}}}),ao=new oe({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2613",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ze=new me({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[fp]},$$scope:{ctx:G}}}),et=new se({props:{$$slots:{default:[mp]},$$scope:{ctx:G}}}),no=new oe({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2430"}}),ot=new se({props:{$$slots:{default:[_p]},$$scope:{ctx:G}}}),io=new oe({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2522"}}),at=new se({props:{$$slots:{default:[bp]},$$scope:{ctx:G}}}),po=new oe({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),go=new oe({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1153",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),st=new se({props:{$$slots:{default:[vp]},$$scope:{ctx:G}}}),ho=new oe({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2155"}}),rt=new se({props:{$$slots:{default:[$p]},$$scope:{ctx:G}}}),uo=new oe({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1490"}}),it=new se({props:{$$slots:{default:[yp]},$$scope:{ctx:G}}}),fo=new oe({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2880",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),lt=new se({props:{$$slots:{default:[Ep]},$$scope:{ctx:G}}}),mo=new oe({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L693"}}),_o=new oe({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2347"}}),pt=new se({props:{$$slots:{default:[wp]},$$scope:{ctx:G}}}),bo=new oe({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2233",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),vo=new oe({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L685"}}),$o=new oe({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"_page_index",val:": int = 0"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Eo=new oe({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2936",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ut=new se({props:{$$slots:{default:[kp]},$$scope:{ctx:G}}}),wo=new oe({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L911"}}),ft=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Ap]},$$scope:{ctx:G}}}),mt=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[xp]},$$scope:{ctx:G}}}),ko=new oe({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1076",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ao=new oe({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L703"}}),bt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Hp]},$$scope:{ctx:G}}}),vt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[qp]},$$scope:{ctx:G}}}),xo=new oe({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Ho=new oe({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2828",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),yt=new se({props:{$$slots:{default:[jp]},$$scope:{ctx:G}}}),qo=new oe({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Et=new se({props:{$$slots:{default:[Dp]},$$scope:{ctx:G}}}),jo=new oe({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1665"}}),wt=new se({props:{$$slots:{default:[Fp]},$$scope:{ctx:G}}}),No=new oe({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2688",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),kt=new me({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[Np]},$$scope:{ctx:G}}}),At=new se({props:{$$slots:{default:[Tp]},$$scope:{ctx:G}}}),To=new oe({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),xt=new se({props:{$$slots:{default:[Ip]},$$scope:{ctx:G}}}),Io=new oe({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L666"}}),Po=new oe({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1209",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),qt=new se({props:{$$slots:{default:[Pp]},$$scope:{ctx:G}}}),Lo=new oe({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L678"}}),Oo=new oe({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),Dt=new se({props:{$$slots:{default:[Lp]},$$scope:{ctx:G}}}),Ro=new oe({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
`}}),Ft=new se({props:{$$slots:{default:[Op]},$$scope:{ctx:G}}}),Nt=new me({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Rp]},$$scope:{ctx:G}}}),Co=new oe({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Tt=new se({props:{$$slots:{default:[Cp]},$$scope:{ctx:G}}}),It=new me({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Sp]},$$scope:{ctx:G}}}),Uo=new oe({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L576"}}),Mo=new lc({}),zo=new oe({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2991"}}),Wo=new oe({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3028"}}),Go=new oe({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3007",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Ko=new oe({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2994"}}),Jo=new lc({}),Qo=new oe({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Mt=new me({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Up]},$$scope:{ctx:G}}}),Xo=new oe({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Vt=new me({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Mp]},$$scope:{ctx:G}}}),Yo=new oe({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L460"}}),zt=new me({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Vp]},$$scope:{ctx:G}}}),Zo=new oe({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L422"}}),Wt=new me({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[zp]},$$scope:{ctx:G}}}),{c(){p=o("meta"),y=d(),f=o("h1"),i=o("a"),g=o("span"),j(r.$$.fragment),u=d(),q=o("span"),_=l("Hugging Face Hub API"),A=d(),E=o("p"),b=l("Below is the documentation for the "),w=o("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=d(),m=o("p"),x=l("All methods from the "),V=o("code"),M=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=d(),z=o("p"),$=l("The following approach uses the method from the root of the package:"),S=d(),j(C.$$.fragment),X=d(),ee=o("p"),Y=l("The following approach uses the "),J=o("code"),Z=l("HfApi"),ae=l(" class:"),B=d(),j(Q.$$.fragment),te=d(),ne=o("p"),Re=l("Using the "),ce=o("code"),Be=l("HfApi"),Ce=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),De=d(),U=o("div"),j(de.$$.fragment),ca=d(),ie=o("div"),j(Fe.$$.fragment),pa=d(),Ke=o("p"),ga=l("Closes or re-opens a discussion or pull request."),As=d(),j(Xe.$$.fragment),xs=d(),j(Ye.$$.fragment),Hs=d(),be=o("div"),j(ao.$$.fragment),qs=d(),Ta=o("p"),js=l("Creates a new comment on the given discussion"),Ds=d(),j(Ze.$$.fragment),Fs=d(),j(et.$$.fragment),Ns=d(),tt=o("div"),j(no.$$.fragment),Ts=d(),Ia=o("p"),Is=l("Creates a commit in the given repo, deleting & uploading files as needed."),Ps=d(),pe=o("div"),j(so.$$.fragment),Ls=d(),Pa=o("p"),Os=l("Creates a discussion or pull request."),Rs=d(),ro=o("p"),Cs=l("Pull Requests created programmatically will be in "),La=o("code"),Ss=l('"draft"'),Us=l(" status."),Ms=d(),da=o("p"),Vs=l("Returns: "),ha=o("a"),zs=l("DiscussionWithDetails"),Ws=d(),j(ot.$$.fragment),Gs=d(),ge=o("div"),j(io.$$.fragment),Bs=d(),lo=o("p"),Ks=l("Creates a pull request. Pull Requests created programmatically will be in "),Oa=o("code"),Js=l('"draft"'),Qs=l(" status."),Xs=d(),co=o("p"),Ys=l("This is a wrapper around "),Ra=o("code"),Zs=l("HfApi.create_discusssion"),er=l("."),tr=d(),ua=o("p"),or=l("Returns: "),fa=o("a"),ar=l("DiscussionWithDetails"),nr=d(),j(at.$$.fragment),sr=d(),nt=o("div"),j(po.$$.fragment),rr=d(),Ca=o("p"),ir=l("Create an empty repo on the HuggingFace Hub."),lr=d(),ve=o("div"),j(go.$$.fragment),cr=d(),Sa=o("p"),pr=l("Get info on one specific dataset on huggingface.co."),gr=d(),Ua=o("p"),dr=l("Dataset can be private if you pass an acceptable token."),hr=d(),j(st.$$.fragment),ur=d(),Se=o("div"),j(ho.$$.fragment),fr=d(),Ma=o("p"),mr=l("Deletes a file in the given repo."),_r=d(),j(rt.$$.fragment),br=d(),Ue=o("div"),j(uo.$$.fragment),vr=d(),Va=o("p"),$r=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),yr=d(),j(it.$$.fragment),Er=d(),Me=o("div"),j(fo.$$.fragment),wr=d(),za=o("p"),kr=l("Edits a comment on a discussion / pull request"),Ar=d(),j(lt.$$.fragment),xr=d(),ct=o("div"),j(mo.$$.fragment),Hr=d(),Wa=o("p"),qr=l("Gets all valid dataset tags as a nested namespace object."),jr=d(),$e=o("div"),j(_o.$$.fragment),Dr=d(),Ga=o("p"),Fr=l("Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Nr=d(),ma=o("p"),Tr=l("Returns: "),_a=o("a"),Ir=l("DiscussionWithDetails"),Pr=d(),j(pt.$$.fragment),Lr=d(),gt=o("div"),j(bo.$$.fragment),Or=d(),Ba=o("p"),Rr=l(`Returns the repository name for a given model ID and optional
organization.`),Cr=d(),dt=o("div"),j(vo.$$.fragment),Sr=d(),Ka=o("p"),Ur=l("Gets all valid model tags as a nested namespace object"),Mr=d(),ht=o("div"),j($o.$$.fragment),Vr=d(),yo=o("p"),zr=l(`Fetches discussions and pull requests for the given repo. The response is
paginated with `),ba=o("a"),Wr=l("Pagination"),Gr=l("."),Br=d(),ye=o("div"),j(Eo.$$.fragment),Kr=d(),Ja=o("p"),Jr=l("Hides a comment on a discussion / pull request."),Qr=d(),Qa=o("p"),Xr=l("Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Yr=d(),j(ut.$$.fragment),Zr=d(),Ee=o("div"),j(wo.$$.fragment),ei=d(),Xa=o("p"),ti=l("Get the public list of all the datasets on huggingface.co"),oi=d(),j(ft.$$.fragment),ai=d(),j(mt.$$.fragment),ni=d(),_t=o("div"),j(ko.$$.fragment),si=d(),Ya=o("p"),ri=l("Get the public list of all the metrics on huggingface.co"),ii=d(),we=o("div"),j(Ao.$$.fragment),li=d(),Za=o("p"),ci=l("Get the public list of all the models on huggingface.co"),pi=d(),j(bt.$$.fragment),gi=d(),j(vt.$$.fragment),di=d(),$t=o("div"),j(xo.$$.fragment),hi=d(),en=o("p"),ui=l("Get the list of files in a given repo."),fi=d(),Ve=o("div"),j(Ho.$$.fragment),mi=d(),tn=o("p"),_i=l("Merges a pull request."),bi=d(),j(yt.$$.fragment),vi=d(),ke=o("div"),j(qo.$$.fragment),$i=d(),on=o("p"),yi=l("Get info on one specific model on huggingface.co"),Ei=d(),an=o("p"),wi=l("Model can be private if you pass an acceptable token or are logged in."),ki=d(),j(Et.$$.fragment),Ai=d(),Ae=o("div"),j(jo.$$.fragment),xi=d(),nn=o("p"),Hi=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),qi=d(),Do=o("p"),ji=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Fo=o("a"),Di=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Fi=l("."),Ni=d(),j(wt.$$.fragment),Ti=d(),xe=o("div"),j(No.$$.fragment),Ii=d(),sn=o("p"),Pi=l("Renames a discussion"),Li=d(),j(kt.$$.fragment),Oi=d(),j(At.$$.fragment),Ri=d(),ze=o("div"),j(To.$$.fragment),Ci=d(),rn=o("p"),Si=l("Get the info object for a given repo of a given type."),Ui=d(),j(xt.$$.fragment),Mi=d(),Ht=o("div"),j(Io.$$.fragment),Vi=d(),ln=o("p"),zi=l(`Saves the passed access token so git can correctly authenticate the
user.`),Wi=d(),He=o("div"),j(Po.$$.fragment),Gi=d(),cn=o("p"),Bi=l("Get info on one specific Space on huggingface.co."),Ki=d(),pn=o("p"),Ji=l("Space can be private if you pass an acceptable token."),Qi=d(),j(qt.$$.fragment),Xi=d(),jt=o("div"),j(Lo.$$.fragment),Yi=d(),gn=o("p"),Zi=l("Resets the user\u2019s access token."),el=d(),We=o("div"),j(Oo.$$.fragment),tl=d(),dn=o("p"),ol=l("Update the visibility setting of a repository."),al=d(),j(Dt.$$.fragment),nl=d(),qe=o("div"),j(Ro.$$.fragment),sl=d(),hn=o("p"),rl=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),il=d(),j(Ft.$$.fragment),ll=d(),j(Nt.$$.fragment),cl=d(),re=o("div"),j(Co.$$.fragment),pl=d(),un=o("p"),gl=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),dl=d(),fn=o("p"),hl=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),ul=d(),So=o("p"),fl=l("Uses "),mn=o("code"),ml=l("HfApi.create_commit"),_l=l(" under the hood."),bl=d(),j(Tt.$$.fragment),vl=d(),j(It.$$.fragment),$l=d(),Pt=o("div"),j(Uo.$$.fragment),yl=d(),_n=o("p"),El=l("Call HF API to know \u201Cwhoami\u201D."),Kn=d(),Je=o("h2"),Lt=o("a"),bn=o("span"),j(Mo.$$.fragment),wl=d(),vn=o("span"),kl=l("Hugging Face local storage"),Jn=d(),Vo=o("p"),$n=o("code"),Al=l("huggingface_hub"),xl=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Qn=d(),Ot=o("p"),Hl=l("It does this using the "),va=o("a"),ql=l("HfFolder"),jl=l(" utility, which saves data at the root of the user."),Xn=d(),he=o("div"),j(zo.$$.fragment),Dl=d(),Rt=o("div"),j(Wo.$$.fragment),Fl=d(),yn=o("p"),Nl=l("Deletes the token from storage. Does not fail if token does not exist."),Tl=d(),Ge=o("div"),j(Go.$$.fragment),Il=d(),En=o("p"),Pl=l("Get token or None if not existent."),Ll=d(),Bo=o("p"),Ol=l("Note that a token can be also provided using the "),wn=o("code"),Rl=l("HUGGING_FACE_HUB_TOKEN"),Cl=l(`
environment variable.`),Sl=d(),Ct=o("div"),j(Ko.$$.fragment),Ul=d(),kn=o("p"),Ml=l("Save token, creating folder as needed."),Yn=d(),Qe=o("h2"),St=o("a"),An=o("span"),j(Jo.$$.fragment),Vl=d(),xn=o("span"),zl=l("Filtering helpers"),Zn=d(),Ut=o("p"),Wl=l("Some helpers to filter repositories on the Hub are available in the "),Hn=o("code"),Gl=l("huggingface_hub"),Bl=l(" package."),es=d(),Ne=o("div"),j(Qo.$$.fragment),Kl=d(),qn=o("p"),Jl=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ql=d(),j(Mt.$$.fragment),ts=d(),Te=o("div"),j(Xo.$$.fragment),Xl=d(),jn=o("p"),Yl=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Zl=d(),j(Vt.$$.fragment),os=d(),Ie=o("div"),j(Yo.$$.fragment),ec=d(),Dn=o("p"),tc=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),oc=d(),j(zt.$$.fragment),as=d(),Pe=o("div"),j(Zo.$$.fragment),ac=d(),Fn=o("p"),nc=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),sc=d(),j(Wt.$$.fragment),this.h()},l(s){const H=gp('[data-svelte="svelte-1phssyn"]',document.head);p=a(H,"META",{name:!0,content:!0}),H.forEach(t),y=h(s),f=a(s,"H1",{class:!0});var ea=n(f);i=a(ea,"A",{id:!0,class:!0,href:!0});var Nn=n(i);g=a(Nn,"SPAN",{});var Tn=n(g);D(r.$$.fragment,Tn),Tn.forEach(t),Nn.forEach(t),u=h(ea),q=a(ea,"SPAN",{});var In=n(q);_=c(In,"Hugging Face Hub API"),In.forEach(t),ea.forEach(t),A=h(s),E=a(s,"P",{});var ta=n(E);b=c(ta,"Below is the documentation for the "),w=a(ta,"CODE",{});var Pn=n(w);P=c(Pn,"HfApi"),Pn.forEach(t),L=c(ta,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),ta.forEach(t),O=h(s),m=a(s,"P",{});var oa=n(m);x=c(oa,"All methods from the "),V=a(oa,"CODE",{});var Ln=n(V);M=c(Ln,"HfApi"),Ln.forEach(t),R=c(oa,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),oa.forEach(t),K=h(s),z=a(s,"P",{});var On=n(z);$=c(On,"The following approach uses the method from the root of the package:"),On.forEach(t),S=h(s),D(C.$$.fragment,s),X=h(s),ee=a(s,"P",{});var aa=n(ee);Y=c(aa,"The following approach uses the "),J=a(aa,"CODE",{});var Rn=n(J);Z=c(Rn,"HfApi"),Rn.forEach(t),ae=c(aa," class:"),aa.forEach(t),B=h(s),D(Q.$$.fragment,s),te=h(s),ne=a(s,"P",{});var na=n(ne);Re=c(na,"Using the "),ce=a(na,"CODE",{});var Cn=n(ce);Be=c(Cn,"HfApi"),Cn.forEach(t),Ce=c(na," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),na.forEach(t),De=h(s),U=a(s,"DIV",{class:!0});var W=n(U);D(de.$$.fragment,W),ca=h(W),ie=a(W,"DIV",{class:!0});var Le=n(ie);D(Fe.$$.fragment,Le),pa=h(Le),Ke=a(Le,"P",{});var Sn=n(Ke);ga=c(Sn,"Closes or re-opens a discussion or pull request."),Sn.forEach(t),As=h(Le),D(Xe.$$.fragment,Le),xs=h(Le),D(Ye.$$.fragment,Le),Le.forEach(t),Hs=h(W),be=a(W,"DIV",{class:!0});var Oe=n(be);D(ao.$$.fragment,Oe),qs=h(Oe),Ta=a(Oe,"P",{});var Un=n(Ta);js=c(Un,"Creates a new comment on the given discussion"),Un.forEach(t),Ds=h(Oe),D(Ze.$$.fragment,Oe),Fs=h(Oe),D(et.$$.fragment,Oe),Oe.forEach(t),Ns=h(W),tt=a(W,"DIV",{class:!0});var sa=n(tt);D(no.$$.fragment,sa),Ts=h(sa),Ia=a(sa,"P",{});var Mn=n(Ia);Is=c(Mn,"Creates a commit in the given repo, deleting & uploading files as needed."),Mn.forEach(t),sa.forEach(t),Ps=h(W),pe=a(W,"DIV",{class:!0});var ue=n(pe);D(so.$$.fragment,ue),Ls=h(ue),Pa=a(ue,"P",{});var Vn=n(Pa);Os=c(Vn,"Creates a discussion or pull request."),Vn.forEach(t),Rs=h(ue),ro=a(ue,"P",{});var ra=n(ro);Cs=c(ra,"Pull Requests created programmatically will be in "),La=a(ra,"CODE",{});var zn=n(La);Ss=c(zn,'"draft"'),zn.forEach(t),Us=c(ra," status."),ra.forEach(t),Ms=h(ue),da=a(ue,"P",{});var $a=n(da);Vs=c($a,"Returns: "),ha=a($a,"A",{href:!0});var Wn=n(ha);zs=c(Wn,"DiscussionWithDetails"),Wn.forEach(t),$a.forEach(t),Ws=h(ue),D(ot.$$.fragment,ue),ue.forEach(t),Gs=h(W),ge=a(W,"DIV",{class:!0});var fe=n(ge);D(io.$$.fragment,fe),Bs=h(fe),lo=a(fe,"P",{});var ia=n(lo);Ks=c(ia,"Creates a pull request. Pull Requests created programmatically will be in "),Oa=a(ia,"CODE",{});var Gn=n(Oa);Js=c(Gn,'"draft"'),Gn.forEach(t),Qs=c(ia," status."),ia.forEach(t),Xs=h(fe),co=a(fe,"P",{});var la=n(co);Ys=c(la,"This is a wrapper around "),Ra=a(la,"CODE",{});var Bn=n(Ra);Zs=c(Bn,"HfApi.create_discusssion"),Bn.forEach(t),er=c(la,"."),la.forEach(t),tr=h(fe),ua=a(fe,"P",{});var ya=n(ua);or=c(ya,"Returns: "),fa=a(ya,"A",{href:!0});var cc=n(fa);ar=c(cc,"DiscussionWithDetails"),cc.forEach(t),ya.forEach(t),nr=h(fe),D(at.$$.fragment,fe),fe.forEach(t),sr=h(W),nt=a(W,"DIV",{class:!0});var ss=n(nt);D(po.$$.fragment,ss),rr=h(ss),Ca=a(ss,"P",{});var pc=n(Ca);ir=c(pc,"Create an empty repo on the HuggingFace Hub."),pc.forEach(t),ss.forEach(t),lr=h(W),ve=a(W,"DIV",{class:!0});var Gt=n(ve);D(go.$$.fragment,Gt),cr=h(Gt),Sa=a(Gt,"P",{});var gc=n(Sa);pr=c(gc,"Get info on one specific dataset on huggingface.co."),gc.forEach(t),gr=h(Gt),Ua=a(Gt,"P",{});var dc=n(Ua);dr=c(dc,"Dataset can be private if you pass an acceptable token."),dc.forEach(t),hr=h(Gt),D(st.$$.fragment,Gt),Gt.forEach(t),ur=h(W),Se=a(W,"DIV",{class:!0});var Ea=n(Se);D(ho.$$.fragment,Ea),fr=h(Ea),Ma=a(Ea,"P",{});var hc=n(Ma);mr=c(hc,"Deletes a file in the given repo."),hc.forEach(t),_r=h(Ea),D(rt.$$.fragment,Ea),Ea.forEach(t),br=h(W),Ue=a(W,"DIV",{class:!0});var wa=n(Ue);D(uo.$$.fragment,wa),vr=h(wa),Va=a(wa,"P",{});var uc=n(Va);$r=c(uc,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),uc.forEach(t),yr=h(wa),D(it.$$.fragment,wa),wa.forEach(t),Er=h(W),Me=a(W,"DIV",{class:!0});var ka=n(Me);D(fo.$$.fragment,ka),wr=h(ka),za=a(ka,"P",{});var fc=n(za);kr=c(fc,"Edits a comment on a discussion / pull request"),fc.forEach(t),Ar=h(ka),D(lt.$$.fragment,ka),ka.forEach(t),xr=h(W),ct=a(W,"DIV",{class:!0});var rs=n(ct);D(mo.$$.fragment,rs),Hr=h(rs),Wa=a(rs,"P",{});var mc=n(Wa);qr=c(mc,"Gets all valid dataset tags as a nested namespace object."),mc.forEach(t),rs.forEach(t),jr=h(W),$e=a(W,"DIV",{class:!0});var Bt=n($e);D(_o.$$.fragment,Bt),Dr=h(Bt),Ga=a(Bt,"P",{});var _c=n(Ga);Fr=c(_c,"Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),_c.forEach(t),Nr=h(Bt),ma=a(Bt,"P",{});var rc=n(ma);Tr=c(rc,"Returns: "),_a=a(rc,"A",{href:!0});var bc=n(_a);Ir=c(bc,"DiscussionWithDetails"),bc.forEach(t),rc.forEach(t),Pr=h(Bt),D(pt.$$.fragment,Bt),Bt.forEach(t),Lr=h(W),gt=a(W,"DIV",{class:!0});var is=n(gt);D(bo.$$.fragment,is),Or=h(is),Ba=a(is,"P",{});var vc=n(Ba);Rr=c(vc,`Returns the repository name for a given model ID and optional
organization.`),vc.forEach(t),is.forEach(t),Cr=h(W),dt=a(W,"DIV",{class:!0});var ls=n(dt);D(vo.$$.fragment,ls),Sr=h(ls),Ka=a(ls,"P",{});var $c=n(Ka);Ur=c($c,"Gets all valid model tags as a nested namespace object"),$c.forEach(t),ls.forEach(t),Mr=h(W),ht=a(W,"DIV",{class:!0});var cs=n(ht);D($o.$$.fragment,cs),Vr=h(cs),yo=a(cs,"P",{});var ps=n(yo);zr=c(ps,`Fetches discussions and pull requests for the given repo. The response is
paginated with `),ba=a(ps,"A",{href:!0});var yc=n(ba);Wr=c(yc,"Pagination"),yc.forEach(t),Gr=c(ps,"."),ps.forEach(t),cs.forEach(t),Br=h(W),ye=a(W,"DIV",{class:!0});var Kt=n(ye);D(Eo.$$.fragment,Kt),Kr=h(Kt),Ja=a(Kt,"P",{});var Ec=n(Ja);Jr=c(Ec,"Hides a comment on a discussion / pull request."),Ec.forEach(t),Qr=h(Kt),Qa=a(Kt,"P",{});var wc=n(Qa);Xr=c(wc,"Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),wc.forEach(t),Yr=h(Kt),D(ut.$$.fragment,Kt),Kt.forEach(t),Zr=h(W),Ee=a(W,"DIV",{class:!0});var Jt=n(Ee);D(wo.$$.fragment,Jt),ei=h(Jt),Xa=a(Jt,"P",{});var kc=n(Xa);ti=c(kc,"Get the public list of all the datasets on huggingface.co"),kc.forEach(t),oi=h(Jt),D(ft.$$.fragment,Jt),ai=h(Jt),D(mt.$$.fragment,Jt),Jt.forEach(t),ni=h(W),_t=a(W,"DIV",{class:!0});var gs=n(_t);D(ko.$$.fragment,gs),si=h(gs),Ya=a(gs,"P",{});var Ac=n(Ya);ri=c(Ac,"Get the public list of all the metrics on huggingface.co"),Ac.forEach(t),gs.forEach(t),ii=h(W),we=a(W,"DIV",{class:!0});var Qt=n(we);D(Ao.$$.fragment,Qt),li=h(Qt),Za=a(Qt,"P",{});var xc=n(Za);ci=c(xc,"Get the public list of all the models on huggingface.co"),xc.forEach(t),pi=h(Qt),D(bt.$$.fragment,Qt),gi=h(Qt),D(vt.$$.fragment,Qt),Qt.forEach(t),di=h(W),$t=a(W,"DIV",{class:!0});var ds=n($t);D(xo.$$.fragment,ds),hi=h(ds),en=a(ds,"P",{});var Hc=n(en);ui=c(Hc,"Get the list of files in a given repo."),Hc.forEach(t),ds.forEach(t),fi=h(W),Ve=a(W,"DIV",{class:!0});var Aa=n(Ve);D(Ho.$$.fragment,Aa),mi=h(Aa),tn=a(Aa,"P",{});var qc=n(tn);_i=c(qc,"Merges a pull request."),qc.forEach(t),bi=h(Aa),D(yt.$$.fragment,Aa),Aa.forEach(t),vi=h(W),ke=a(W,"DIV",{class:!0});var Xt=n(ke);D(qo.$$.fragment,Xt),$i=h(Xt),on=a(Xt,"P",{});var jc=n(on);yi=c(jc,"Get info on one specific model on huggingface.co"),jc.forEach(t),Ei=h(Xt),an=a(Xt,"P",{});var Dc=n(an);wi=c(Dc,"Model can be private if you pass an acceptable token or are logged in."),Dc.forEach(t),ki=h(Xt),D(Et.$$.fragment,Xt),Xt.forEach(t),Ai=h(W),Ae=a(W,"DIV",{class:!0});var Yt=n(Ae);D(jo.$$.fragment,Yt),xi=h(Yt),nn=a(Yt,"P",{});var Fc=n(nn);Hi=c(Fc,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Fc.forEach(t),qi=h(Yt),Do=a(Yt,"P",{});var hs=n(Do);ji=c(hs,`Note there are certain limitations. For more information about moving
repositories, please see
`),Fo=a(hs,"A",{href:!0,rel:!0});var Nc=n(Fo);Di=c(Nc,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Nc.forEach(t),Fi=c(hs,"."),hs.forEach(t),Ni=h(Yt),D(wt.$$.fragment,Yt),Yt.forEach(t),Ti=h(W),xe=a(W,"DIV",{class:!0});var Zt=n(xe);D(No.$$.fragment,Zt),Ii=h(Zt),sn=a(Zt,"P",{});var Tc=n(sn);Pi=c(Tc,"Renames a discussion"),Tc.forEach(t),Li=h(Zt),D(kt.$$.fragment,Zt),Oi=h(Zt),D(At.$$.fragment,Zt),Zt.forEach(t),Ri=h(W),ze=a(W,"DIV",{class:!0});var xa=n(ze);D(To.$$.fragment,xa),Ci=h(xa),rn=a(xa,"P",{});var Ic=n(rn);Si=c(Ic,"Get the info object for a given repo of a given type."),Ic.forEach(t),Ui=h(xa),D(xt.$$.fragment,xa),xa.forEach(t),Mi=h(W),Ht=a(W,"DIV",{class:!0});var us=n(Ht);D(Io.$$.fragment,us),Vi=h(us),ln=a(us,"P",{});var Pc=n(ln);zi=c(Pc,`Saves the passed access token so git can correctly authenticate the
user.`),Pc.forEach(t),us.forEach(t),Wi=h(W),He=a(W,"DIV",{class:!0});var eo=n(He);D(Po.$$.fragment,eo),Gi=h(eo),cn=a(eo,"P",{});var Lc=n(cn);Bi=c(Lc,"Get info on one specific Space on huggingface.co."),Lc.forEach(t),Ki=h(eo),pn=a(eo,"P",{});var Oc=n(pn);Ji=c(Oc,"Space can be private if you pass an acceptable token."),Oc.forEach(t),Qi=h(eo),D(qt.$$.fragment,eo),eo.forEach(t),Xi=h(W),jt=a(W,"DIV",{class:!0});var fs=n(jt);D(Lo.$$.fragment,fs),Yi=h(fs),gn=a(fs,"P",{});var Rc=n(gn);Zi=c(Rc,"Resets the user\u2019s access token."),Rc.forEach(t),fs.forEach(t),el=h(W),We=a(W,"DIV",{class:!0});var Ha=n(We);D(Oo.$$.fragment,Ha),tl=h(Ha),dn=a(Ha,"P",{});var Cc=n(dn);ol=c(Cc,"Update the visibility setting of a repository."),Cc.forEach(t),al=h(Ha),D(Dt.$$.fragment,Ha),Ha.forEach(t),nl=h(W),qe=a(W,"DIV",{class:!0});var to=n(qe);D(Ro.$$.fragment,to),sl=h(to),hn=a(to,"P",{});var Sc=n(hn);rl=c(Sc,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Sc.forEach(t),il=h(to),D(Ft.$$.fragment,to),ll=h(to),D(Nt.$$.fragment,to),to.forEach(t),cl=h(W),re=a(W,"DIV",{class:!0});var je=n(re);D(Co.$$.fragment,je),pl=h(je),un=a(je,"P",{});var Uc=n(un);gl=c(Uc,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Uc.forEach(t),dl=h(je),fn=a(je,"P",{});var Mc=n(fn);hl=c(Mc,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Mc.forEach(t),ul=h(je),So=a(je,"P",{});var ms=n(So);fl=c(ms,"Uses "),mn=a(ms,"CODE",{});var Vc=n(mn);ml=c(Vc,"HfApi.create_commit"),Vc.forEach(t),_l=c(ms," under the hood."),ms.forEach(t),bl=h(je),D(Tt.$$.fragment,je),vl=h(je),D(It.$$.fragment,je),je.forEach(t),$l=h(W),Pt=a(W,"DIV",{class:!0});var _s=n(Pt);D(Uo.$$.fragment,_s),yl=h(_s),_n=a(_s,"P",{});var zc=n(_n);El=c(zc,"Call HF API to know \u201Cwhoami\u201D."),zc.forEach(t),_s.forEach(t),W.forEach(t),Kn=h(s),Je=a(s,"H2",{class:!0});var bs=n(Je);Lt=a(bs,"A",{id:!0,class:!0,href:!0});var Wc=n(Lt);bn=a(Wc,"SPAN",{});var Gc=n(bn);D(Mo.$$.fragment,Gc),Gc.forEach(t),Wc.forEach(t),wl=h(bs),vn=a(bs,"SPAN",{});var Bc=n(vn);kl=c(Bc,"Hugging Face local storage"),Bc.forEach(t),bs.forEach(t),Jn=h(s),Vo=a(s,"P",{});var ic=n(Vo);$n=a(ic,"CODE",{});var Kc=n($n);Al=c(Kc,"huggingface_hub"),Kc.forEach(t),xl=c(ic,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),ic.forEach(t),Qn=h(s),Ot=a(s,"P",{});var vs=n(Ot);Hl=c(vs,"It does this using the "),va=a(vs,"A",{href:!0});var Jc=n(va);ql=c(Jc,"HfFolder"),Jc.forEach(t),jl=c(vs," utility, which saves data at the root of the user."),vs.forEach(t),Xn=h(s),he=a(s,"DIV",{class:!0});var oo=n(he);D(zo.$$.fragment,oo),Dl=h(oo),Rt=a(oo,"DIV",{class:!0});var $s=n(Rt);D(Wo.$$.fragment,$s),Fl=h($s),yn=a($s,"P",{});var Qc=n(yn);Nl=c(Qc,"Deletes the token from storage. Does not fail if token does not exist."),Qc.forEach(t),$s.forEach(t),Tl=h(oo),Ge=a(oo,"DIV",{class:!0});var qa=n(Ge);D(Go.$$.fragment,qa),Il=h(qa),En=a(qa,"P",{});var Xc=n(En);Pl=c(Xc,"Get token or None if not existent."),Xc.forEach(t),Ll=h(qa),Bo=a(qa,"P",{});var ys=n(Bo);Ol=c(ys,"Note that a token can be also provided using the "),wn=a(ys,"CODE",{});var Yc=n(wn);Rl=c(Yc,"HUGGING_FACE_HUB_TOKEN"),Yc.forEach(t),Cl=c(ys,`
environment variable.`),ys.forEach(t),qa.forEach(t),Sl=h(oo),Ct=a(oo,"DIV",{class:!0});var Es=n(Ct);D(Ko.$$.fragment,Es),Ul=h(Es),kn=a(Es,"P",{});var Zc=n(kn);Ml=c(Zc,"Save token, creating folder as needed."),Zc.forEach(t),Es.forEach(t),oo.forEach(t),Yn=h(s),Qe=a(s,"H2",{class:!0});var ws=n(Qe);St=a(ws,"A",{id:!0,class:!0,href:!0});var ep=n(St);An=a(ep,"SPAN",{});var tp=n(An);D(Jo.$$.fragment,tp),tp.forEach(t),ep.forEach(t),Vl=h(ws),xn=a(ws,"SPAN",{});var op=n(xn);zl=c(op,"Filtering helpers"),op.forEach(t),ws.forEach(t),Zn=h(s),Ut=a(s,"P",{});var ks=n(Ut);Wl=c(ks,"Some helpers to filter repositories on the Hub are available in the "),Hn=a(ks,"CODE",{});var ap=n(Hn);Gl=c(ap,"huggingface_hub"),ap.forEach(t),Bl=c(ks," package."),ks.forEach(t),es=h(s),Ne=a(s,"DIV",{class:!0});var ja=n(Ne);D(Qo.$$.fragment,ja),Kl=h(ja),qn=a(ja,"P",{});var np=n(qn);Jl=c(np,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),np.forEach(t),Ql=h(ja),D(Mt.$$.fragment,ja),ja.forEach(t),ts=h(s),Te=a(s,"DIV",{class:!0});var Da=n(Te);D(Xo.$$.fragment,Da),Xl=h(Da),jn=a(Da,"P",{});var sp=n(jn);Yl=c(sp,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),sp.forEach(t),Zl=h(Da),D(Vt.$$.fragment,Da),Da.forEach(t),os=h(s),Ie=a(s,"DIV",{class:!0});var Fa=n(Ie);D(Yo.$$.fragment,Fa),ec=h(Fa),Dn=a(Fa,"P",{});var rp=n(Dn);tc=c(rp,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),rp.forEach(t),oc=h(Fa),D(zt.$$.fragment,Fa),Fa.forEach(t),as=h(s),Pe=a(s,"DIV",{class:!0});var Na=n(Pe);D(Zo.$$.fragment,Na),ac=h(Na),Fn=a(Na,"P",{});var ip=n(Fn);nc=c(ip,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ip.forEach(t),sc=h(Na),D(Wt.$$.fragment,Na),Na.forEach(t),this.h()},h(){v(p,"name","hf:doc:metadata"),v(p,"content",JSON.stringify(Gp)),v(i,"id","huggingface_hub.HfApi"),v(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(i,"href","#huggingface_hub.HfApi"),v(f,"class","relative group"),v(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ha,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fa,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_a,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ba,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"),v(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Fo,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),v(Fo,"rel","nofollow"),v(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Lt,"id","huggingface_hub.HfFolder"),v(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Lt,"href","#huggingface_hub.HfFolder"),v(Je,"class","relative group"),v(va,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder"),v(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(St,"id","huggingface_hub.DatasetFilter"),v(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(St,"href","#huggingface_hub.DatasetFilter"),v(Qe,"class","relative group"),v(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,H){e(document.head,p),k(s,y,H),k(s,f,H),e(f,i),e(i,g),F(r,g,null),e(f,u),e(f,q),e(q,_),k(s,A,H),k(s,E,H),e(E,b),e(E,w),e(w,P),e(E,L),k(s,O,H),k(s,m,H),e(m,x),e(m,V),e(V,M),e(m,R),k(s,K,H),k(s,z,H),e(z,$),k(s,S,H),F(C,s,H),k(s,X,H),k(s,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),k(s,B,H),F(Q,s,H),k(s,te,H),k(s,ne,H),e(ne,Re),e(ne,ce),e(ce,Be),e(ne,Ce),k(s,De,H),k(s,U,H),F(de,U,null),e(U,ca),e(U,ie),F(Fe,ie,null),e(ie,pa),e(ie,Ke),e(Ke,ga),e(ie,As),F(Xe,ie,null),e(ie,xs),F(Ye,ie,null),e(U,Hs),e(U,be),F(ao,be,null),e(be,qs),e(be,Ta),e(Ta,js),e(be,Ds),F(Ze,be,null),e(be,Fs),F(et,be,null),e(U,Ns),e(U,tt),F(no,tt,null),e(tt,Ts),e(tt,Ia),e(Ia,Is),e(U,Ps),e(U,pe),F(so,pe,null),e(pe,Ls),e(pe,Pa),e(Pa,Os),e(pe,Rs),e(pe,ro),e(ro,Cs),e(ro,La),e(La,Ss),e(ro,Us),e(pe,Ms),e(pe,da),e(da,Vs),e(da,ha),e(ha,zs),e(pe,Ws),F(ot,pe,null),e(U,Gs),e(U,ge),F(io,ge,null),e(ge,Bs),e(ge,lo),e(lo,Ks),e(lo,Oa),e(Oa,Js),e(lo,Qs),e(ge,Xs),e(ge,co),e(co,Ys),e(co,Ra),e(Ra,Zs),e(co,er),e(ge,tr),e(ge,ua),e(ua,or),e(ua,fa),e(fa,ar),e(ge,nr),F(at,ge,null),e(U,sr),e(U,nt),F(po,nt,null),e(nt,rr),e(nt,Ca),e(Ca,ir),e(U,lr),e(U,ve),F(go,ve,null),e(ve,cr),e(ve,Sa),e(Sa,pr),e(ve,gr),e(ve,Ua),e(Ua,dr),e(ve,hr),F(st,ve,null),e(U,ur),e(U,Se),F(ho,Se,null),e(Se,fr),e(Se,Ma),e(Ma,mr),e(Se,_r),F(rt,Se,null),e(U,br),e(U,Ue),F(uo,Ue,null),e(Ue,vr),e(Ue,Va),e(Va,$r),e(Ue,yr),F(it,Ue,null),e(U,Er),e(U,Me),F(fo,Me,null),e(Me,wr),e(Me,za),e(za,kr),e(Me,Ar),F(lt,Me,null),e(U,xr),e(U,ct),F(mo,ct,null),e(ct,Hr),e(ct,Wa),e(Wa,qr),e(U,jr),e(U,$e),F(_o,$e,null),e($e,Dr),e($e,Ga),e(Ga,Fr),e($e,Nr),e($e,ma),e(ma,Tr),e(ma,_a),e(_a,Ir),e($e,Pr),F(pt,$e,null),e(U,Lr),e(U,gt),F(bo,gt,null),e(gt,Or),e(gt,Ba),e(Ba,Rr),e(U,Cr),e(U,dt),F(vo,dt,null),e(dt,Sr),e(dt,Ka),e(Ka,Ur),e(U,Mr),e(U,ht),F($o,ht,null),e(ht,Vr),e(ht,yo),e(yo,zr),e(yo,ba),e(ba,Wr),e(yo,Gr),e(U,Br),e(U,ye),F(Eo,ye,null),e(ye,Kr),e(ye,Ja),e(Ja,Jr),e(ye,Qr),e(ye,Qa),e(Qa,Xr),e(ye,Yr),F(ut,ye,null),e(U,Zr),e(U,Ee),F(wo,Ee,null),e(Ee,ei),e(Ee,Xa),e(Xa,ti),e(Ee,oi),F(ft,Ee,null),e(Ee,ai),F(mt,Ee,null),e(U,ni),e(U,_t),F(ko,_t,null),e(_t,si),e(_t,Ya),e(Ya,ri),e(U,ii),e(U,we),F(Ao,we,null),e(we,li),e(we,Za),e(Za,ci),e(we,pi),F(bt,we,null),e(we,gi),F(vt,we,null),e(U,di),e(U,$t),F(xo,$t,null),e($t,hi),e($t,en),e(en,ui),e(U,fi),e(U,Ve),F(Ho,Ve,null),e(Ve,mi),e(Ve,tn),e(tn,_i),e(Ve,bi),F(yt,Ve,null),e(U,vi),e(U,ke),F(qo,ke,null),e(ke,$i),e(ke,on),e(on,yi),e(ke,Ei),e(ke,an),e(an,wi),e(ke,ki),F(Et,ke,null),e(U,Ai),e(U,Ae),F(jo,Ae,null),e(Ae,xi),e(Ae,nn),e(nn,Hi),e(Ae,qi),e(Ae,Do),e(Do,ji),e(Do,Fo),e(Fo,Di),e(Do,Fi),e(Ae,Ni),F(wt,Ae,null),e(U,Ti),e(U,xe),F(No,xe,null),e(xe,Ii),e(xe,sn),e(sn,Pi),e(xe,Li),F(kt,xe,null),e(xe,Oi),F(At,xe,null),e(U,Ri),e(U,ze),F(To,ze,null),e(ze,Ci),e(ze,rn),e(rn,Si),e(ze,Ui),F(xt,ze,null),e(U,Mi),e(U,Ht),F(Io,Ht,null),e(Ht,Vi),e(Ht,ln),e(ln,zi),e(U,Wi),e(U,He),F(Po,He,null),e(He,Gi),e(He,cn),e(cn,Bi),e(He,Ki),e(He,pn),e(pn,Ji),e(He,Qi),F(qt,He,null),e(U,Xi),e(U,jt),F(Lo,jt,null),e(jt,Yi),e(jt,gn),e(gn,Zi),e(U,el),e(U,We),F(Oo,We,null),e(We,tl),e(We,dn),e(dn,ol),e(We,al),F(Dt,We,null),e(U,nl),e(U,qe),F(Ro,qe,null),e(qe,sl),e(qe,hn),e(hn,rl),e(qe,il),F(Ft,qe,null),e(qe,ll),F(Nt,qe,null),e(U,cl),e(U,re),F(Co,re,null),e(re,pl),e(re,un),e(un,gl),e(re,dl),e(re,fn),e(fn,hl),e(re,ul),e(re,So),e(So,fl),e(So,mn),e(mn,ml),e(So,_l),e(re,bl),F(Tt,re,null),e(re,vl),F(It,re,null),e(U,$l),e(U,Pt),F(Uo,Pt,null),e(Pt,yl),e(Pt,_n),e(_n,El),k(s,Kn,H),k(s,Je,H),e(Je,Lt),e(Lt,bn),F(Mo,bn,null),e(Je,wl),e(Je,vn),e(vn,kl),k(s,Jn,H),k(s,Vo,H),e(Vo,$n),e($n,Al),e(Vo,xl),k(s,Qn,H),k(s,Ot,H),e(Ot,Hl),e(Ot,va),e(va,ql),e(Ot,jl),k(s,Xn,H),k(s,he,H),F(zo,he,null),e(he,Dl),e(he,Rt),F(Wo,Rt,null),e(Rt,Fl),e(Rt,yn),e(yn,Nl),e(he,Tl),e(he,Ge),F(Go,Ge,null),e(Ge,Il),e(Ge,En),e(En,Pl),e(Ge,Ll),e(Ge,Bo),e(Bo,Ol),e(Bo,wn),e(wn,Rl),e(Bo,Cl),e(he,Sl),e(he,Ct),F(Ko,Ct,null),e(Ct,Ul),e(Ct,kn),e(kn,Ml),k(s,Yn,H),k(s,Qe,H),e(Qe,St),e(St,An),F(Jo,An,null),e(Qe,Vl),e(Qe,xn),e(xn,zl),k(s,Zn,H),k(s,Ut,H),e(Ut,Wl),e(Ut,Hn),e(Hn,Gl),e(Ut,Bl),k(s,es,H),k(s,Ne,H),F(Qo,Ne,null),e(Ne,Kl),e(Ne,qn),e(qn,Jl),e(Ne,Ql),F(Mt,Ne,null),k(s,ts,H),k(s,Te,H),F(Xo,Te,null),e(Te,Xl),e(Te,jn),e(jn,Yl),e(Te,Zl),F(Vt,Te,null),k(s,os,H),k(s,Ie,H),F(Yo,Ie,null),e(Ie,ec),e(Ie,Dn),e(Dn,tc),e(Ie,oc),F(zt,Ie,null),k(s,as,H),k(s,Pe,H),F(Zo,Pe,null),e(Pe,ac),e(Pe,Fn),e(Fn,nc),e(Pe,sc),F(Wt,Pe,null),ns=!0},p(s,[H]){const ea={};H&2&&(ea.$$scope={dirty:H,ctx:s}),Xe.$set(ea);const Nn={};H&2&&(Nn.$$scope={dirty:H,ctx:s}),Ye.$set(Nn);const Tn={};H&2&&(Tn.$$scope={dirty:H,ctx:s}),Ze.$set(Tn);const In={};H&2&&(In.$$scope={dirty:H,ctx:s}),et.$set(In);const ta={};H&2&&(ta.$$scope={dirty:H,ctx:s}),ot.$set(ta);const Pn={};H&2&&(Pn.$$scope={dirty:H,ctx:s}),at.$set(Pn);const oa={};H&2&&(oa.$$scope={dirty:H,ctx:s}),st.$set(oa);const Ln={};H&2&&(Ln.$$scope={dirty:H,ctx:s}),rt.$set(Ln);const On={};H&2&&(On.$$scope={dirty:H,ctx:s}),it.$set(On);const aa={};H&2&&(aa.$$scope={dirty:H,ctx:s}),lt.$set(aa);const Rn={};H&2&&(Rn.$$scope={dirty:H,ctx:s}),pt.$set(Rn);const na={};H&2&&(na.$$scope={dirty:H,ctx:s}),ut.$set(na);const Cn={};H&2&&(Cn.$$scope={dirty:H,ctx:s}),ft.$set(Cn);const W={};H&2&&(W.$$scope={dirty:H,ctx:s}),mt.$set(W);const Le={};H&2&&(Le.$$scope={dirty:H,ctx:s}),bt.$set(Le);const Sn={};H&2&&(Sn.$$scope={dirty:H,ctx:s}),vt.$set(Sn);const Oe={};H&2&&(Oe.$$scope={dirty:H,ctx:s}),yt.$set(Oe);const Un={};H&2&&(Un.$$scope={dirty:H,ctx:s}),Et.$set(Un);const sa={};H&2&&(sa.$$scope={dirty:H,ctx:s}),wt.$set(sa);const Mn={};H&2&&(Mn.$$scope={dirty:H,ctx:s}),kt.$set(Mn);const ue={};H&2&&(ue.$$scope={dirty:H,ctx:s}),At.$set(ue);const Vn={};H&2&&(Vn.$$scope={dirty:H,ctx:s}),xt.$set(Vn);const ra={};H&2&&(ra.$$scope={dirty:H,ctx:s}),qt.$set(ra);const zn={};H&2&&(zn.$$scope={dirty:H,ctx:s}),Dt.$set(zn);const $a={};H&2&&($a.$$scope={dirty:H,ctx:s}),Ft.$set($a);const Wn={};H&2&&(Wn.$$scope={dirty:H,ctx:s}),Nt.$set(Wn);const fe={};H&2&&(fe.$$scope={dirty:H,ctx:s}),Tt.$set(fe);const ia={};H&2&&(ia.$$scope={dirty:H,ctx:s}),It.$set(ia);const Gn={};H&2&&(Gn.$$scope={dirty:H,ctx:s}),Mt.$set(Gn);const la={};H&2&&(la.$$scope={dirty:H,ctx:s}),Vt.$set(la);const Bn={};H&2&&(Bn.$$scope={dirty:H,ctx:s}),zt.$set(Bn);const ya={};H&2&&(ya.$$scope={dirty:H,ctx:s}),Wt.$set(ya)},i(s){ns||(N(r.$$.fragment,s),N(C.$$.fragment,s),N(Q.$$.fragment,s),N(de.$$.fragment,s),N(Fe.$$.fragment,s),N(Xe.$$.fragment,s),N(Ye.$$.fragment,s),N(ao.$$.fragment,s),N(Ze.$$.fragment,s),N(et.$$.fragment,s),N(no.$$.fragment,s),N(so.$$.fragment,s),N(ot.$$.fragment,s),N(io.$$.fragment,s),N(at.$$.fragment,s),N(po.$$.fragment,s),N(go.$$.fragment,s),N(st.$$.fragment,s),N(ho.$$.fragment,s),N(rt.$$.fragment,s),N(uo.$$.fragment,s),N(it.$$.fragment,s),N(fo.$$.fragment,s),N(lt.$$.fragment,s),N(mo.$$.fragment,s),N(_o.$$.fragment,s),N(pt.$$.fragment,s),N(bo.$$.fragment,s),N(vo.$$.fragment,s),N($o.$$.fragment,s),N(Eo.$$.fragment,s),N(ut.$$.fragment,s),N(wo.$$.fragment,s),N(ft.$$.fragment,s),N(mt.$$.fragment,s),N(ko.$$.fragment,s),N(Ao.$$.fragment,s),N(bt.$$.fragment,s),N(vt.$$.fragment,s),N(xo.$$.fragment,s),N(Ho.$$.fragment,s),N(yt.$$.fragment,s),N(qo.$$.fragment,s),N(Et.$$.fragment,s),N(jo.$$.fragment,s),N(wt.$$.fragment,s),N(No.$$.fragment,s),N(kt.$$.fragment,s),N(At.$$.fragment,s),N(To.$$.fragment,s),N(xt.$$.fragment,s),N(Io.$$.fragment,s),N(Po.$$.fragment,s),N(qt.$$.fragment,s),N(Lo.$$.fragment,s),N(Oo.$$.fragment,s),N(Dt.$$.fragment,s),N(Ro.$$.fragment,s),N(Ft.$$.fragment,s),N(Nt.$$.fragment,s),N(Co.$$.fragment,s),N(Tt.$$.fragment,s),N(It.$$.fragment,s),N(Uo.$$.fragment,s),N(Mo.$$.fragment,s),N(zo.$$.fragment,s),N(Wo.$$.fragment,s),N(Go.$$.fragment,s),N(Ko.$$.fragment,s),N(Jo.$$.fragment,s),N(Qo.$$.fragment,s),N(Mt.$$.fragment,s),N(Xo.$$.fragment,s),N(Vt.$$.fragment,s),N(Yo.$$.fragment,s),N(zt.$$.fragment,s),N(Zo.$$.fragment,s),N(Wt.$$.fragment,s),ns=!0)},o(s){T(r.$$.fragment,s),T(C.$$.fragment,s),T(Q.$$.fragment,s),T(de.$$.fragment,s),T(Fe.$$.fragment,s),T(Xe.$$.fragment,s),T(Ye.$$.fragment,s),T(ao.$$.fragment,s),T(Ze.$$.fragment,s),T(et.$$.fragment,s),T(no.$$.fragment,s),T(so.$$.fragment,s),T(ot.$$.fragment,s),T(io.$$.fragment,s),T(at.$$.fragment,s),T(po.$$.fragment,s),T(go.$$.fragment,s),T(st.$$.fragment,s),T(ho.$$.fragment,s),T(rt.$$.fragment,s),T(uo.$$.fragment,s),T(it.$$.fragment,s),T(fo.$$.fragment,s),T(lt.$$.fragment,s),T(mo.$$.fragment,s),T(_o.$$.fragment,s),T(pt.$$.fragment,s),T(bo.$$.fragment,s),T(vo.$$.fragment,s),T($o.$$.fragment,s),T(Eo.$$.fragment,s),T(ut.$$.fragment,s),T(wo.$$.fragment,s),T(ft.$$.fragment,s),T(mt.$$.fragment,s),T(ko.$$.fragment,s),T(Ao.$$.fragment,s),T(bt.$$.fragment,s),T(vt.$$.fragment,s),T(xo.$$.fragment,s),T(Ho.$$.fragment,s),T(yt.$$.fragment,s),T(qo.$$.fragment,s),T(Et.$$.fragment,s),T(jo.$$.fragment,s),T(wt.$$.fragment,s),T(No.$$.fragment,s),T(kt.$$.fragment,s),T(At.$$.fragment,s),T(To.$$.fragment,s),T(xt.$$.fragment,s),T(Io.$$.fragment,s),T(Po.$$.fragment,s),T(qt.$$.fragment,s),T(Lo.$$.fragment,s),T(Oo.$$.fragment,s),T(Dt.$$.fragment,s),T(Ro.$$.fragment,s),T(Ft.$$.fragment,s),T(Nt.$$.fragment,s),T(Co.$$.fragment,s),T(Tt.$$.fragment,s),T(It.$$.fragment,s),T(Uo.$$.fragment,s),T(Mo.$$.fragment,s),T(zo.$$.fragment,s),T(Wo.$$.fragment,s),T(Go.$$.fragment,s),T(Ko.$$.fragment,s),T(Jo.$$.fragment,s),T(Qo.$$.fragment,s),T(Mt.$$.fragment,s),T(Xo.$$.fragment,s),T(Vt.$$.fragment,s),T(Yo.$$.fragment,s),T(zt.$$.fragment,s),T(Zo.$$.fragment,s),T(Wt.$$.fragment,s),ns=!1},d(s){t(p),s&&t(y),s&&t(f),I(r),s&&t(A),s&&t(E),s&&t(O),s&&t(m),s&&t(K),s&&t(z),s&&t(S),I(C,s),s&&t(X),s&&t(ee),s&&t(B),I(Q,s),s&&t(te),s&&t(ne),s&&t(De),s&&t(U),I(de),I(Fe),I(Xe),I(Ye),I(ao),I(Ze),I(et),I(no),I(so),I(ot),I(io),I(at),I(po),I(go),I(st),I(ho),I(rt),I(uo),I(it),I(fo),I(lt),I(mo),I(_o),I(pt),I(bo),I(vo),I($o),I(Eo),I(ut),I(wo),I(ft),I(mt),I(ko),I(Ao),I(bt),I(vt),I(xo),I(Ho),I(yt),I(qo),I(Et),I(jo),I(wt),I(No),I(kt),I(At),I(To),I(xt),I(Io),I(Po),I(qt),I(Lo),I(Oo),I(Dt),I(Ro),I(Ft),I(Nt),I(Co),I(Tt),I(It),I(Uo),s&&t(Kn),s&&t(Je),I(Mo),s&&t(Jn),s&&t(Vo),s&&t(Qn),s&&t(Ot),s&&t(Xn),s&&t(he),I(zo),I(Wo),I(Go),I(Ko),s&&t(Yn),s&&t(Qe),I(Jo),s&&t(Zn),s&&t(Ut),s&&t(es),s&&t(Ne),I(Qo),I(Mt),s&&t(ts),s&&t(Te),I(Xo),I(Vt),s&&t(os),s&&t(Ie),I(Yo),I(zt),s&&t(as),s&&t(Pe),I(Zo),I(Wt)}}}const Gp={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Bp(G){return dp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class eg extends lp{constructor(p){super();cp(this,p,Bp,Wp,pp,{})}}export{eg as default,Gp as metadata};
