import{S as Fp,i as Tp,s as Ip,e as o,k as d,w as D,t as l,M as Pp,c as a,d as t,m as h,a as n,x as j,h as c,b as v,G as e,g as k,y as N,q as F,o as T,B as I,v as Lp,L as _e}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Dc}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Op(G){let p,y,f,i,g;return i=new de({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Rp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Cp(G){let p,y,f,i,g;return i=new de({props:{code:`
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Sp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Up(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Mp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Vp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var W=n(w);P=a(W,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function zp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W,$,S,C,X,ee,Y,J,Z,ae,B;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=o("li"),Z=o("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=a(Q,"P",{});var te=n(p);y=c(te,"Raises the following errors:"),te.forEach(t),f=h(Q),i=a(Q,"UL",{});var ne=n(i);g=a(ne,"LI",{});var Re=n(g);r=a(Re,"A",{href:!0,rel:!0});var he=n(r);u=a(he,"CODE",{});var Be=n(u);q=c(Be,"HTTPError"),Be.forEach(t),he.forEach(t),_=c(Re,`
if the HuggingFace API returned an error`),Re.forEach(t),A=h(ne),E=a(ne,"LI",{});var Ce=n(E);b=a(Ce,"A",{href:!0,rel:!0});var je=n(b);w=a(je,"CODE",{});var U=n(w);P=c(U,"ValueError"),U.forEach(t),je.forEach(t),L=c(Ce,`
if some parameter value is invalid`),Ce.forEach(t),O=h(ne),m=a(ne,"LI",{});var ue=n(m);x=a(ue,"A",{href:!0});var ua=n(x);V=c(ua,"RepositoryNotFoundError"),ua.forEach(t),M=c(ue,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ue,"CODE",{});var ce=n(R);K=c(ce,"private"),ce.forEach(t),W=c(ue," and you do not have access."),ue.forEach(t),$=h(ne),S=a(ne,"LI",{});var Ne=n(S);C=a(Ne,"A",{href:!0});var fa=n(C);X=c(fa,"RevisionNotFoundError"),fa.forEach(t),ee=c(Ne,`
If the revision to download from cannot be found.`),Ne.forEach(t),Y=h(ne),J=a(ne,"LI",{});var Ke=n(J);Z=a(Ke,"A",{href:!0});var ma=n(Z);ae=c(ma,"EntryNotFoundError"),ma.forEach(t),B=c(Ke,`
If the file to download cannot be found.`),Ke.forEach(t),ne.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),v(Z,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,te){k(Q,p,te),e(p,y),k(Q,f,te),k(Q,i,te),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Wp(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Gp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Bp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Kp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function Jp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),N(u,_,A),q=!0},p:_e,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Qp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),N(u,_,A),q=!0},p:_e,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Xp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),N(u,_,A),q=!0},p:_e,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Yp(G){let p,y,f,i,g,r,u,q;return u=new de({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),y=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);y=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=n(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,y),e(p,f),e(f,i),e(p,g),k(_,r,A),N(u,_,A),q=!0},p:_e,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Zp(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function eg(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var W=n(w);P=a(W,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function tg(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function og(G){let p,y,f,i,g;return i=new de({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ag(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),this.h()},l($){p=a($,"P",{});var S=n(p);y=c(S,"Raises the following errors:"),S.forEach(t),f=h($),i=a($,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=n(E);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);w=a(Z,"CODE",{});var ae=n(w);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var B=n(m);x=a(B,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(B,"CODE",{});var te=n(R);K=c(te,"private"),te.forEach(t),W=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m($,S){k($,p,S),e(p,y),k($,f,S),k($,i,S),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W)},d($){$&&t(p),$&&t(f),$&&t(i)}}}function ng(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var W=n(w);P=a(W,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function sg(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);y=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var M=n(g);r=a(M,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=n(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var W=n(w);P=a(W,"A",{href:!0});var $=n(P);L=c($,"RevisionNotFoundError"),$.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,y),k(m,f,x),k(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,P),e(P,L),e(w,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function rg(G){let p,y,f,i,g,r,u,q,_,A,E;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=n(p);y=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){v(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,y),k(b,f,w),k(b,i,w),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function ig(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W,$,S,C,X,ee;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),K=l("private"),W=l(" and you do not have access."),$=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=a(Y,"P",{});var J=n(p);y=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=a(Y,"UL",{});var Z=n(i);g=a(Z,"LI",{});var ae=n(g);r=a(ae,"A",{href:!0,rel:!0});var B=n(r);u=a(B,"CODE",{});var Q=n(u);q=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),E=a(Z,"LI",{});var te=n(E);b=a(te,"A",{href:!0,rel:!0});var ne=n(b);w=a(ne,"CODE",{});var Re=n(w);P=c(Re,"ValueError"),Re.forEach(t),ne.forEach(t),L=c(te,`
if some parameter value is invalid`),te.forEach(t),O=h(Z),m=a(Z,"LI",{});var he=n(m);x=a(he,"A",{href:!0});var Be=n(x);V=c(Be,"RepositoryNotFoundError"),Be.forEach(t),M=c(he,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(he,"CODE",{});var Ce=n(R);K=c(Ce,"private"),Ce.forEach(t),W=c(he," and you do not have access."),he.forEach(t),$=h(Z),S=a(Z,"LI",{});var je=n(S);C=a(je,"A",{href:!0});var U=n(C);X=c(U,"RevisionNotFoundError"),U.forEach(t),ee=c(je,`
If the revision to download from cannot be found.`),je.forEach(t),Z.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow"),v(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),v(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){k(Y,p,J),e(p,y),k(Y,f,J),k(Y,i,J),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,M),e(m,R),e(R,K),e(m,W),e(i,$),e(i,S),e(S,C),e(C,X),e(S,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function lg(G){let p,y,f,i,g;return i=new de({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function cg(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L;return{c(){p=o("p"),y=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=a(O,"P",{});var m=n(p);y=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=a(O,"UL",{});var x=n(i);g=a(x,"LI",{});var V=n(g);r=a(V,"A",{href:!0,rel:!0});var M=n(r);u=a(M,"CODE",{});var R=n(u);q=c(R,"HTTPError"),R.forEach(t),M.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),E=a(x,"LI",{});var K=n(E);b=a(K,"A",{href:!0,rel:!0});var W=n(b);w=a(W,"CODE",{});var $=n(w);P=c($,"ValueError"),$.forEach(t),W.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),x.forEach(t),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(b,"rel","nofollow")},m(O,m){k(O,p,m),e(p,y),k(O,f,m),k(O,i,m),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,P),e(E,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function pg(G){let p,y,f,i,g;return i=new de({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),y=l("Example usage:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example usage:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function gg(G){let p,y,f,i,g;return i=new de({props:{code:`from huggingface_hub import DatasetFilter

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
new_filter = DatasetFilter(multilinguality="multilingual")

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(multilinguality=<span class="hljs-string">&quot;multilingual&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using size_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(size_categories=<span class="hljs-string">&quot;100K&lt;n&lt;1M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_categories</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_categories=<span class="hljs-string">&quot;audio_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Using task_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),y=l("Examples:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Examples:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function dg(G){let p,y;return p=new de({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){j(p.$$.fragment,f)},m(f,i){N(p,f,i),y=!0},p:_e,i(f){y||(F(p.$$.fragment,f),y=!0)},o(f){T(p.$$.fragment,f),y=!1},d(f){I(p,f)}}}function hg(G){let p,y,f,i,g;return i=new de({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ug(G){let p,y,f,i,g;return i=new de({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),y=l("Example:"),f=d(),D(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);y=c(u,"Example:"),u.forEach(t),f=h(r),j(i.$$.fragment,r)},m(r,u){k(r,p,u),e(p,y),k(r,f,u),N(i,r,u),g=!0},p:_e,i(r){g||(F(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function fg(G){let p,y,f,i,g,r,u,q,_,A,E,b,w,P,L,O,m,x,V,M,R,K,W,$,S,C,X,ee,Y,J,Z,ae,B,Q,te,ne,Re,he,Be,Ce,je,U,ue,ua,ce,Ne,fa,Ke,ma,Is,Xe,Ps,Ye,Ls,be,no,Os,Ca,Rs,Cs,Ze,Ss,et,Us,tt,so,Ms,Sa,Vs,zs,re,ro,Ws,Ua,Gs,Bs,io,Ks,Ma,Js,Qs,Xs,lo,Ys,_a,Zs,er,tr,ba,or,va,ar,nr,ot,sr,ie,co,rr,po,ir,Va,lr,cr,pr,go,gr,$a,dr,hr,ur,ho,fr,za,mr,_r,br,ya,vr,Ea,$r,yr,at,Er,nt,uo,wr,Wa,kr,Ar,ve,fo,xr,Ga,Hr,qr,Ba,Dr,jr,st,Nr,Se,mo,Fr,Ka,Tr,Ir,rt,Pr,Ue,_o,Lr,Ja,Or,Rr,it,Cr,Me,bo,Sr,Qa,Ur,Mr,lt,Vr,ct,vo,zr,Xa,Wr,Gr,$e,$o,Br,Ya,Kr,Jr,wa,Qr,ka,Xr,Yr,pt,Zr,gt,yo,ei,Za,ti,oi,dt,Eo,ai,en,ni,si,ht,wo,ri,ko,ii,Aa,li,ci,pi,ye,Ao,gi,tn,di,hi,on,ui,fi,ut,mi,Ee,xo,_i,an,bi,vi,ft,$i,mt,yi,_t,Ho,Ei,nn,wi,ki,we,qo,Ai,sn,xi,Hi,bt,qi,vt,Di,$t,Do,ji,rn,Ni,Fi,yt,jo,Ti,ln,Ii,Pi,Ve,No,Li,cn,Oi,Ri,Et,Ci,ke,Fo,Si,pn,Ui,Mi,gn,Vi,zi,wt,Wi,Ae,To,Gi,dn,Bi,Ki,Io,Ji,Po,Qi,Xi,Yi,kt,Zi,xe,Lo,el,hn,tl,ol,At,al,xt,nl,ze,Oo,sl,un,rl,il,Ht,ll,qt,Ro,cl,fn,pl,gl,He,Co,dl,mn,hl,ul,_n,fl,ml,Dt,_l,jt,So,bl,bn,vl,$l,We,Uo,yl,vn,El,wl,Nt,kl,qe,Mo,Al,$n,xl,Hl,Ft,ql,Tt,Dl,le,Vo,jl,yn,Nl,Fl,En,Tl,Il,zo,Pl,wn,Ll,Ol,Rl,It,Cl,Pt,Sl,Lt,Wo,Ul,kn,Ml,ts,Je,Ot,An,Go,Vl,xn,zl,os,Bo,Hn,Wl,Gl,as,Rt,Bl,xa,Kl,Jl,ns,fe,Ko,Ql,Ct,Jo,Xl,qn,Yl,Zl,Ge,Qo,ec,Dn,tc,oc,Xo,ac,jn,nc,sc,rc,St,Yo,ic,Nn,lc,ss,Qe,Ut,Fn,Zo,cc,Tn,pc,rs,Mt,gc,In,dc,hc,is,Fe,ea,uc,Pn,fc,mc,Vt,ls,Te,ta,_c,Ln,bc,vc,zt,cs,Ie,oa,$c,On,yc,Ec,Wt,ps,Pe,aa,wc,Rn,kc,Ac,Gt,gs;return r=new Dc({}),C=new de({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new de({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ue=new oe({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L571"}}),Ne=new oe({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2821",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Xe=new me({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Op]},$$scope:{ctx:G}}}),Ye=new se({props:{$$slots:{default:[Rp]},$$scope:{ctx:G}}}),no=new oe({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2680",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ze=new me({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Cp]},$$scope:{ctx:G}}}),et=new se({props:{$$slots:{default:[Sp]},$$scope:{ctx:G}}}),so=new oe({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1818",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),ro=new oe({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2505"}}),ot=new se({props:{$$slots:{default:[Up]},$$scope:{ctx:G}}}),co=new oe({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2593"}}),at=new se({props:{$$slots:{default:[Mp]},$$scope:{ctx:G}}}),uo=new oe({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1444",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),fo=new oe({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1237",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),st=new se({props:{$$slots:{default:[Vp]},$$scope:{ctx:G}}}),mo=new oe({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2230"}}),rt=new se({props:{$$slots:{default:[zp]},$$scope:{ctx:G}}}),_o=new oe({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1574"}}),it=new se({props:{$$slots:{default:[Wp]},$$scope:{ctx:G}}}),bo=new oe({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2947",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),lt=new se({props:{$$slots:{default:[Gp]},$$scope:{ctx:G}}}),vo=new oe({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L692"}}),$o=new oe({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2422"}}),pt=new se({props:{$$slots:{default:[Bp]},$$scope:{ctx:G}}}),yo=new oe({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2308",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Eo=new oe({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L684"}}),wo=new oe({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"_page_index",val:": int = 0"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2342",returnDescription:`
<p>A <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"
>Pagination</a> of <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a>.</p>
`,returnType:`
<p><code>Pagination[Discussion]</code></p>
`}}),Ao=new oe({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3003",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),ut=new se({props:{$$slots:{default:[Kp]},$$scope:{ctx:G}}}),xo=new oe({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L910"}}),ft=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Jp]},$$scope:{ctx:G}}}),mt=new me({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Qp]},$$scope:{ctx:G}}}),Ho=new oe({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1075",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),qo=new oe({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L702"}}),bt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Xp]},$$scope:{ctx:G}}}),vt=new me({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Yp]},$$scope:{ctx:G}}}),Do=new oe({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1404",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),jo=new oe({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <code>SpaceInfo</code> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
Direction in which to sort. The value <code>-1</code> sorts by descending
order while all other values sort by ascending order.`,name:"direction"},{anchor:"huggingface_hub.HfApi.list_spaces.limit",description:`<strong>limit</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The limit on the number of Spaces fetched. Leaving this option
to <code>None</code> fetches all Spaces.`,name:"limit"},{anchor:"huggingface_hub.HfApi.list_spaces.datasets",description:`<strong>datasets</strong> (<code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of a dataset.
The name of a specific dataset can be passed as a string.`,name:"datasets"},{anchor:"huggingface_hub.HfApi.list_spaces.models",description:`<strong>models</strong> (<code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of a model.
The name of a specific model can be passed as a string.`,name:"models"},{anchor:"huggingface_hub.HfApi.list_spaces.linked",description:`<strong>linked</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return Spaces that make use of either a model or a dataset.`,name:"linked"},{anchor:"huggingface_hub.HfApi.list_spaces.full",description:`<strong>full</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to fetch all Spaces data, including the <code>lastModified</code>
and the <code>cardData</code>.`,name:"full"},{anchor:"huggingface_hub.HfApi.list_spaces.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
Whether to use the <code>auth_token</code> provided from the
<code>huggingface_hub</code> cli. If not logged in, a valid <code>auth_token</code>
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1089",returnDescription:`
<p>a list of <code>SpaceInfo</code> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),No=new oe({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2895",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Et=new se({props:{$$slots:{default:[Zp]},$$scope:{ctx:G}}}),Fo=new oe({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1174",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),wt=new se({props:{$$slots:{default:[eg]},$$scope:{ctx:G}}}),To=new oe({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1740"}}),kt=new se({props:{$$slots:{default:[tg]},$$scope:{ctx:G}}}),Lo=new oe({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2755",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),At=new me({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[og]},$$scope:{ctx:G}}}),xt=new se({props:{$$slots:{default:[ag]},$$scope:{ctx:G}}}),Oo=new oe({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1349",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),Ht=new se({props:{$$slots:{default:[ng]},$$scope:{ctx:G}}}),Ro=new oe({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L665"}}),Co=new oe({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1293",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),Dt=new se({props:{$$slots:{default:[sg]},$$scope:{ctx:G}}}),So=new oe({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L677"}}),Uo=new oe({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1665",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Nt=new se({props:{$$slots:{default:[rg]},$$scope:{ctx:G}}}),Mo=new oe({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1941",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ft=new se({props:{$$slots:{default:[ig]},$$scope:{ctx:G}}}),Tt=new me({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[lg]},$$scope:{ctx:G}}}),Vo=new oe({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2086",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),It=new se({props:{$$slots:{default:[cg]},$$scope:{ctx:G}}}),Pt=new me({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[pg]},$$scope:{ctx:G}}}),Wo=new oe({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L575"}}),Go=new Dc({}),Ko=new oe({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3058"}}),Jo=new oe({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3095"}}),Qo=new oe({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3074",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Yo=new oe({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3061"}}),Zo=new Dc({}),ea=new oe({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Vt=new me({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[gg]},$$scope:{ctx:G}}}),ta=new oe({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),zt=new me({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[dg]},$$scope:{ctx:G}}}),oa=new oe({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L459"}}),Wt=new me({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[hg]},$$scope:{ctx:G}}}),aa=new oe({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L421"}}),Gt=new me({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[ug]},$$scope:{ctx:G}}}),{c(){p=o("meta"),y=d(),f=o("h1"),i=o("a"),g=o("span"),D(r.$$.fragment),u=d(),q=o("span"),_=l("Hugging Face Hub API"),A=d(),E=o("p"),b=l("Below is the documentation for the "),w=o("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=d(),m=o("p"),x=l("All methods from the "),V=o("code"),M=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=d(),W=o("p"),$=l("The following approach uses the method from the root of the package:"),S=d(),D(C.$$.fragment),X=d(),ee=o("p"),Y=l("The following approach uses the "),J=o("code"),Z=l("HfApi"),ae=l(" class:"),B=d(),D(Q.$$.fragment),te=d(),ne=o("p"),Re=l("Using the "),he=o("code"),Be=l("HfApi"),Ce=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),je=d(),U=o("div"),D(ue.$$.fragment),ua=d(),ce=o("div"),D(Ne.$$.fragment),fa=d(),Ke=o("p"),ma=l("Closes or re-opens a discussion or pull request."),Is=d(),D(Xe.$$.fragment),Ps=d(),D(Ye.$$.fragment),Ls=d(),be=o("div"),D(no.$$.fragment),Os=d(),Ca=o("p"),Rs=l("Creates a new comment on the given discussion"),Cs=d(),D(Ze.$$.fragment),Ss=d(),D(et.$$.fragment),Us=d(),tt=o("div"),D(so.$$.fragment),Ms=d(),Sa=o("p"),Vs=l("Creates a commit in the given repo, deleting & uploading files as needed."),zs=d(),re=o("div"),D(ro.$$.fragment),Ws=d(),Ua=o("p"),Gs=l("Creates a discussion or pull request."),Bs=d(),io=o("p"),Ks=l("Pull Requests created programmatically will be in "),Ma=o("code"),Js=l('"draft"'),Qs=l(" status."),Xs=d(),lo=o("p"),Ys=l("Creating a Pull Request with changes can also be done at once with "),_a=o("a"),Zs=l("HfApi.create_commit()"),er=l("."),tr=d(),ba=o("p"),or=l("Returns: "),va=o("a"),ar=l("DiscussionWithDetails"),nr=d(),D(ot.$$.fragment),sr=d(),ie=o("div"),D(co.$$.fragment),rr=d(),po=o("p"),ir=l("Creates a pull request. Pull Requests created programmatically will be in "),Va=o("code"),lr=l('"draft"'),cr=l(" status."),pr=d(),go=o("p"),gr=l("Creating a Pull Request with changes can also be done at once with "),$a=o("a"),dr=l("HfApi.create_commit()"),hr=l(";"),ur=d(),ho=o("p"),fr=l("This is a wrapper around "),za=o("code"),mr=l("HfApi.create_discusssion"),_r=l("."),br=d(),ya=o("p"),vr=l("Returns: "),Ea=o("a"),$r=l("DiscussionWithDetails"),yr=d(),D(at.$$.fragment),Er=d(),nt=o("div"),D(uo.$$.fragment),wr=d(),Wa=o("p"),kr=l("Create an empty repo on the HuggingFace Hub."),Ar=d(),ve=o("div"),D(fo.$$.fragment),xr=d(),Ga=o("p"),Hr=l("Get info on one specific dataset on huggingface.co."),qr=d(),Ba=o("p"),Dr=l("Dataset can be private if you pass an acceptable token."),jr=d(),D(st.$$.fragment),Nr=d(),Se=o("div"),D(mo.$$.fragment),Fr=d(),Ka=o("p"),Tr=l("Deletes a file in the given repo."),Ir=d(),D(rt.$$.fragment),Pr=d(),Ue=o("div"),D(_o.$$.fragment),Lr=d(),Ja=o("p"),Or=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Rr=d(),D(it.$$.fragment),Cr=d(),Me=o("div"),D(bo.$$.fragment),Sr=d(),Qa=o("p"),Ur=l("Edits a comment on a discussion / pull request"),Mr=d(),D(lt.$$.fragment),Vr=d(),ct=o("div"),D(vo.$$.fragment),zr=d(),Xa=o("p"),Wr=l("Gets all valid dataset tags as a nested namespace object."),Gr=d(),$e=o("div"),D($o.$$.fragment),Br=d(),Ya=o("p"),Kr=l("Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Jr=d(),wa=o("p"),Qr=l("Returns: "),ka=o("a"),Xr=l("DiscussionWithDetails"),Yr=d(),D(pt.$$.fragment),Zr=d(),gt=o("div"),D(yo.$$.fragment),ei=d(),Za=o("p"),ti=l(`Returns the repository name for a given model ID and optional
organization.`),oi=d(),dt=o("div"),D(Eo.$$.fragment),ai=d(),en=o("p"),ni=l("Gets all valid model tags as a nested namespace object"),si=d(),ht=o("div"),D(wo.$$.fragment),ri=d(),ko=o("p"),ii=l(`Fetches discussions and pull requests for the given repo. The response is
paginated with `),Aa=o("a"),li=l("Pagination"),ci=l("."),pi=d(),ye=o("div"),D(Ao.$$.fragment),gi=d(),tn=o("p"),di=l("Hides a comment on a discussion / pull request."),hi=d(),on=o("p"),ui=l("Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),fi=d(),D(ut.$$.fragment),mi=d(),Ee=o("div"),D(xo.$$.fragment),_i=d(),an=o("p"),bi=l("Get the public list of all the datasets on huggingface.co"),vi=d(),D(ft.$$.fragment),$i=d(),D(mt.$$.fragment),yi=d(),_t=o("div"),D(Ho.$$.fragment),Ei=d(),nn=o("p"),wi=l("Get the public list of all the metrics on huggingface.co"),ki=d(),we=o("div"),D(qo.$$.fragment),Ai=d(),sn=o("p"),xi=l("Get the public list of all the models on huggingface.co"),Hi=d(),D(bt.$$.fragment),qi=d(),D(vt.$$.fragment),Di=d(),$t=o("div"),D(Do.$$.fragment),ji=d(),rn=o("p"),Ni=l("Get the list of files in a given repo."),Fi=d(),yt=o("div"),D(jo.$$.fragment),Ti=d(),ln=o("p"),Ii=l("Get the public list of all Spaces on huggingface.co"),Pi=d(),Ve=o("div"),D(No.$$.fragment),Li=d(),cn=o("p"),Oi=l("Merges a pull request."),Ri=d(),D(Et.$$.fragment),Ci=d(),ke=o("div"),D(Fo.$$.fragment),Si=d(),pn=o("p"),Ui=l("Get info on one specific model on huggingface.co"),Mi=d(),gn=o("p"),Vi=l("Model can be private if you pass an acceptable token or are logged in."),zi=d(),D(wt.$$.fragment),Wi=d(),Ae=o("div"),D(To.$$.fragment),Gi=d(),dn=o("p"),Bi=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ki=d(),Io=o("p"),Ji=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Po=o("a"),Qi=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Xi=l("."),Yi=d(),D(kt.$$.fragment),Zi=d(),xe=o("div"),D(Lo.$$.fragment),el=d(),hn=o("p"),tl=l("Renames a discussion"),ol=d(),D(At.$$.fragment),al=d(),D(xt.$$.fragment),nl=d(),ze=o("div"),D(Oo.$$.fragment),sl=d(),un=o("p"),rl=l("Get the info object for a given repo of a given type."),il=d(),D(Ht.$$.fragment),ll=d(),qt=o("div"),D(Ro.$$.fragment),cl=d(),fn=o("p"),pl=l(`Saves the passed access token so git can correctly authenticate the
user.`),gl=d(),He=o("div"),D(Co.$$.fragment),dl=d(),mn=o("p"),hl=l("Get info on one specific Space on huggingface.co."),ul=d(),_n=o("p"),fl=l("Space can be private if you pass an acceptable token."),ml=d(),D(Dt.$$.fragment),_l=d(),jt=o("div"),D(So.$$.fragment),bl=d(),bn=o("p"),vl=l("Resets the user\u2019s access token."),$l=d(),We=o("div"),D(Uo.$$.fragment),yl=d(),vn=o("p"),El=l("Update the visibility setting of a repository."),wl=d(),D(Nt.$$.fragment),kl=d(),qe=o("div"),D(Mo.$$.fragment),Al=d(),$n=o("p"),xl=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Hl=d(),D(Ft.$$.fragment),ql=d(),D(Tt.$$.fragment),Dl=d(),le=o("div"),D(Vo.$$.fragment),jl=d(),yn=o("p"),Nl=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Fl=d(),En=o("p"),Tl=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Il=d(),zo=o("p"),Pl=l("Uses "),wn=o("code"),Ll=l("HfApi.create_commit"),Ol=l(" under the hood."),Rl=d(),D(It.$$.fragment),Cl=d(),D(Pt.$$.fragment),Sl=d(),Lt=o("div"),D(Wo.$$.fragment),Ul=d(),kn=o("p"),Ml=l("Call HF API to know \u201Cwhoami\u201D."),ts=d(),Je=o("h2"),Ot=o("a"),An=o("span"),D(Go.$$.fragment),Vl=d(),xn=o("span"),zl=l("Hugging Face local storage"),os=d(),Bo=o("p"),Hn=o("code"),Wl=l("huggingface_hub"),Gl=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),as=d(),Rt=o("p"),Bl=l("It does this using the "),xa=o("a"),Kl=l("HfFolder"),Jl=l(" utility, which saves data at the root of the user."),ns=d(),fe=o("div"),D(Ko.$$.fragment),Ql=d(),Ct=o("div"),D(Jo.$$.fragment),Xl=d(),qn=o("p"),Yl=l("Deletes the token from storage. Does not fail if token does not exist."),Zl=d(),Ge=o("div"),D(Qo.$$.fragment),ec=d(),Dn=o("p"),tc=l("Get token or None if not existent."),oc=d(),Xo=o("p"),ac=l("Note that a token can be also provided using the "),jn=o("code"),nc=l("HUGGING_FACE_HUB_TOKEN"),sc=l(`
environment variable.`),rc=d(),St=o("div"),D(Yo.$$.fragment),ic=d(),Nn=o("p"),lc=l("Save token, creating folder as needed."),ss=d(),Qe=o("h2"),Ut=o("a"),Fn=o("span"),D(Zo.$$.fragment),cc=d(),Tn=o("span"),pc=l("Filtering helpers"),rs=d(),Mt=o("p"),gc=l("Some helpers to filter repositories on the Hub are available in the "),In=o("code"),dc=l("huggingface_hub"),hc=l(" package."),is=d(),Fe=o("div"),D(ea.$$.fragment),uc=d(),Pn=o("p"),fc=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),mc=d(),D(Vt.$$.fragment),ls=d(),Te=o("div"),D(ta.$$.fragment),_c=d(),Ln=o("p"),bc=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),vc=d(),D(zt.$$.fragment),cs=d(),Ie=o("div"),D(oa.$$.fragment),$c=d(),On=o("p"),yc=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ec=d(),D(Wt.$$.fragment),ps=d(),Pe=o("div"),D(aa.$$.fragment),wc=d(),Rn=o("p"),kc=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ac=d(),D(Gt.$$.fragment),this.h()},l(s){const H=Pp('[data-svelte="svelte-1phssyn"]',document.head);p=a(H,"META",{name:!0,content:!0}),H.forEach(t),y=h(s),f=a(s,"H1",{class:!0});var na=n(f);i=a(na,"A",{id:!0,class:!0,href:!0});var Cn=n(i);g=a(Cn,"SPAN",{});var Sn=n(g);j(r.$$.fragment,Sn),Sn.forEach(t),Cn.forEach(t),u=h(na),q=a(na,"SPAN",{});var Un=n(q);_=c(Un,"Hugging Face Hub API"),Un.forEach(t),na.forEach(t),A=h(s),E=a(s,"P",{});var sa=n(E);b=c(sa,"Below is the documentation for the "),w=a(sa,"CODE",{});var Mn=n(w);P=c(Mn,"HfApi"),Mn.forEach(t),L=c(sa,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),sa.forEach(t),O=h(s),m=a(s,"P",{});var ra=n(m);x=c(ra,"All methods from the "),V=a(ra,"CODE",{});var Vn=n(V);M=c(Vn,"HfApi"),Vn.forEach(t),R=c(ra,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ra.forEach(t),K=h(s),W=a(s,"P",{});var zn=n(W);$=c(zn,"The following approach uses the method from the root of the package:"),zn.forEach(t),S=h(s),j(C.$$.fragment,s),X=h(s),ee=a(s,"P",{});var ia=n(ee);Y=c(ia,"The following approach uses the "),J=a(ia,"CODE",{});var Wn=n(J);Z=c(Wn,"HfApi"),Wn.forEach(t),ae=c(ia," class:"),ia.forEach(t),B=h(s),j(Q.$$.fragment,s),te=h(s),ne=a(s,"P",{});var la=n(ne);Re=c(la,"Using the "),he=a(la,"CODE",{});var Gn=n(he);Be=c(Gn,"HfApi"),Gn.forEach(t),Ce=c(la," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),la.forEach(t),je=h(s),U=a(s,"DIV",{class:!0});var z=n(U);j(ue.$$.fragment,z),ua=h(z),ce=a(z,"DIV",{class:!0});var Le=n(ce);j(Ne.$$.fragment,Le),fa=h(Le),Ke=a(Le,"P",{});var Bn=n(Ke);ma=c(Bn,"Closes or re-opens a discussion or pull request."),Bn.forEach(t),Is=h(Le),j(Xe.$$.fragment,Le),Ps=h(Le),j(Ye.$$.fragment,Le),Le.forEach(t),Ls=h(z),be=a(z,"DIV",{class:!0});var Oe=n(be);j(no.$$.fragment,Oe),Os=h(Oe),Ca=a(Oe,"P",{});var Kn=n(Ca);Rs=c(Kn,"Creates a new comment on the given discussion"),Kn.forEach(t),Cs=h(Oe),j(Ze.$$.fragment,Oe),Ss=h(Oe),j(et.$$.fragment,Oe),Oe.forEach(t),Us=h(z),tt=a(z,"DIV",{class:!0});var ca=n(tt);j(so.$$.fragment,ca),Ms=h(ca),Sa=a(ca,"P",{});var Jn=n(Sa);Vs=c(Jn,"Creates a commit in the given repo, deleting & uploading files as needed."),Jn.forEach(t),ca.forEach(t),zs=h(z),re=a(z,"DIV",{class:!0});var pe=n(re);j(ro.$$.fragment,pe),Ws=h(pe),Ua=a(pe,"P",{});var Qn=n(Ua);Gs=c(Qn,"Creates a discussion or pull request."),Qn.forEach(t),Bs=h(pe),io=a(pe,"P",{});var pa=n(io);Ks=c(pa,"Pull Requests created programmatically will be in "),Ma=a(pa,"CODE",{});var Xn=n(Ma);Js=c(Xn,'"draft"'),Xn.forEach(t),Qs=c(pa," status."),pa.forEach(t),Xs=h(pe),lo=a(pe,"P",{});var ga=n(lo);Ys=c(ga,"Creating a Pull Request with changes can also be done at once with "),_a=a(ga,"A",{href:!0});var Yn=n(_a);Zs=c(Yn,"HfApi.create_commit()"),Yn.forEach(t),er=c(ga,"."),ga.forEach(t),tr=h(pe),ba=a(pe,"P",{});var Ha=n(ba);or=c(Ha,"Returns: "),va=a(Ha,"A",{href:!0});var Zn=n(va);ar=c(Zn,"DiscussionWithDetails"),Zn.forEach(t),Ha.forEach(t),nr=h(pe),j(ot.$$.fragment,pe),pe.forEach(t),sr=h(z),ie=a(z,"DIV",{class:!0});var ge=n(ie);j(co.$$.fragment,ge),rr=h(ge),po=a(ge,"P",{});var da=n(po);ir=c(da,"Creates a pull request. Pull Requests created programmatically will be in "),Va=a(da,"CODE",{});var es=n(Va);lr=c(es,'"draft"'),es.forEach(t),cr=c(da," status."),da.forEach(t),pr=h(ge),go=a(ge,"P",{});var ha=n(go);gr=c(ha,"Creating a Pull Request with changes can also be done at once with "),$a=a(ha,"A",{href:!0});var jc=n($a);dr=c(jc,"HfApi.create_commit()"),jc.forEach(t),hr=c(ha,";"),ha.forEach(t),ur=h(ge),ho=a(ge,"P",{});var ds=n(ho);fr=c(ds,"This is a wrapper around "),za=a(ds,"CODE",{});var Nc=n(za);mr=c(Nc,"HfApi.create_discusssion"),Nc.forEach(t),_r=c(ds,"."),ds.forEach(t),br=h(ge),ya=a(ge,"P",{});var xc=n(ya);vr=c(xc,"Returns: "),Ea=a(xc,"A",{href:!0});var Fc=n(Ea);$r=c(Fc,"DiscussionWithDetails"),Fc.forEach(t),xc.forEach(t),yr=h(ge),j(at.$$.fragment,ge),ge.forEach(t),Er=h(z),nt=a(z,"DIV",{class:!0});var hs=n(nt);j(uo.$$.fragment,hs),wr=h(hs),Wa=a(hs,"P",{});var Tc=n(Wa);kr=c(Tc,"Create an empty repo on the HuggingFace Hub."),Tc.forEach(t),hs.forEach(t),Ar=h(z),ve=a(z,"DIV",{class:!0});var Bt=n(ve);j(fo.$$.fragment,Bt),xr=h(Bt),Ga=a(Bt,"P",{});var Ic=n(Ga);Hr=c(Ic,"Get info on one specific dataset on huggingface.co."),Ic.forEach(t),qr=h(Bt),Ba=a(Bt,"P",{});var Pc=n(Ba);Dr=c(Pc,"Dataset can be private if you pass an acceptable token."),Pc.forEach(t),jr=h(Bt),j(st.$$.fragment,Bt),Bt.forEach(t),Nr=h(z),Se=a(z,"DIV",{class:!0});var qa=n(Se);j(mo.$$.fragment,qa),Fr=h(qa),Ka=a(qa,"P",{});var Lc=n(Ka);Tr=c(Lc,"Deletes a file in the given repo."),Lc.forEach(t),Ir=h(qa),j(rt.$$.fragment,qa),qa.forEach(t),Pr=h(z),Ue=a(z,"DIV",{class:!0});var Da=n(Ue);j(_o.$$.fragment,Da),Lr=h(Da),Ja=a(Da,"P",{});var Oc=n(Ja);Or=c(Oc,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Oc.forEach(t),Rr=h(Da),j(it.$$.fragment,Da),Da.forEach(t),Cr=h(z),Me=a(z,"DIV",{class:!0});var ja=n(Me);j(bo.$$.fragment,ja),Sr=h(ja),Qa=a(ja,"P",{});var Rc=n(Qa);Ur=c(Rc,"Edits a comment on a discussion / pull request"),Rc.forEach(t),Mr=h(ja),j(lt.$$.fragment,ja),ja.forEach(t),Vr=h(z),ct=a(z,"DIV",{class:!0});var us=n(ct);j(vo.$$.fragment,us),zr=h(us),Xa=a(us,"P",{});var Cc=n(Xa);Wr=c(Cc,"Gets all valid dataset tags as a nested namespace object."),Cc.forEach(t),us.forEach(t),Gr=h(z),$e=a(z,"DIV",{class:!0});var Kt=n($e);j($o.$$.fragment,Kt),Br=h(Kt),Ya=a(Kt,"P",{});var Sc=n(Ya);Kr=c(Sc,"Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Sc.forEach(t),Jr=h(Kt),wa=a(Kt,"P",{});var Hc=n(wa);Qr=c(Hc,"Returns: "),ka=a(Hc,"A",{href:!0});var Uc=n(ka);Xr=c(Uc,"DiscussionWithDetails"),Uc.forEach(t),Hc.forEach(t),Yr=h(Kt),j(pt.$$.fragment,Kt),Kt.forEach(t),Zr=h(z),gt=a(z,"DIV",{class:!0});var fs=n(gt);j(yo.$$.fragment,fs),ei=h(fs),Za=a(fs,"P",{});var Mc=n(Za);ti=c(Mc,`Returns the repository name for a given model ID and optional
organization.`),Mc.forEach(t),fs.forEach(t),oi=h(z),dt=a(z,"DIV",{class:!0});var ms=n(dt);j(Eo.$$.fragment,ms),ai=h(ms),en=a(ms,"P",{});var Vc=n(en);ni=c(Vc,"Gets all valid model tags as a nested namespace object"),Vc.forEach(t),ms.forEach(t),si=h(z),ht=a(z,"DIV",{class:!0});var _s=n(ht);j(wo.$$.fragment,_s),ri=h(_s),ko=a(_s,"P",{});var bs=n(ko);ii=c(bs,`Fetches discussions and pull requests for the given repo. The response is
paginated with `),Aa=a(bs,"A",{href:!0});var zc=n(Aa);li=c(zc,"Pagination"),zc.forEach(t),ci=c(bs,"."),bs.forEach(t),_s.forEach(t),pi=h(z),ye=a(z,"DIV",{class:!0});var Jt=n(ye);j(Ao.$$.fragment,Jt),gi=h(Jt),tn=a(Jt,"P",{});var Wc=n(tn);di=c(Wc,"Hides a comment on a discussion / pull request."),Wc.forEach(t),hi=h(Jt),on=a(Jt,"P",{});var Gc=n(on);ui=c(Gc,"Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Gc.forEach(t),fi=h(Jt),j(ut.$$.fragment,Jt),Jt.forEach(t),mi=h(z),Ee=a(z,"DIV",{class:!0});var Qt=n(Ee);j(xo.$$.fragment,Qt),_i=h(Qt),an=a(Qt,"P",{});var Bc=n(an);bi=c(Bc,"Get the public list of all the datasets on huggingface.co"),Bc.forEach(t),vi=h(Qt),j(ft.$$.fragment,Qt),$i=h(Qt),j(mt.$$.fragment,Qt),Qt.forEach(t),yi=h(z),_t=a(z,"DIV",{class:!0});var vs=n(_t);j(Ho.$$.fragment,vs),Ei=h(vs),nn=a(vs,"P",{});var Kc=n(nn);wi=c(Kc,"Get the public list of all the metrics on huggingface.co"),Kc.forEach(t),vs.forEach(t),ki=h(z),we=a(z,"DIV",{class:!0});var Xt=n(we);j(qo.$$.fragment,Xt),Ai=h(Xt),sn=a(Xt,"P",{});var Jc=n(sn);xi=c(Jc,"Get the public list of all the models on huggingface.co"),Jc.forEach(t),Hi=h(Xt),j(bt.$$.fragment,Xt),qi=h(Xt),j(vt.$$.fragment,Xt),Xt.forEach(t),Di=h(z),$t=a(z,"DIV",{class:!0});var $s=n($t);j(Do.$$.fragment,$s),ji=h($s),rn=a($s,"P",{});var Qc=n(rn);Ni=c(Qc,"Get the list of files in a given repo."),Qc.forEach(t),$s.forEach(t),Fi=h(z),yt=a(z,"DIV",{class:!0});var ys=n(yt);j(jo.$$.fragment,ys),Ti=h(ys),ln=a(ys,"P",{});var Xc=n(ln);Ii=c(Xc,"Get the public list of all Spaces on huggingface.co"),Xc.forEach(t),ys.forEach(t),Pi=h(z),Ve=a(z,"DIV",{class:!0});var Na=n(Ve);j(No.$$.fragment,Na),Li=h(Na),cn=a(Na,"P",{});var Yc=n(cn);Oi=c(Yc,"Merges a pull request."),Yc.forEach(t),Ri=h(Na),j(Et.$$.fragment,Na),Na.forEach(t),Ci=h(z),ke=a(z,"DIV",{class:!0});var Yt=n(ke);j(Fo.$$.fragment,Yt),Si=h(Yt),pn=a(Yt,"P",{});var Zc=n(pn);Ui=c(Zc,"Get info on one specific model on huggingface.co"),Zc.forEach(t),Mi=h(Yt),gn=a(Yt,"P",{});var ep=n(gn);Vi=c(ep,"Model can be private if you pass an acceptable token or are logged in."),ep.forEach(t),zi=h(Yt),j(wt.$$.fragment,Yt),Yt.forEach(t),Wi=h(z),Ae=a(z,"DIV",{class:!0});var Zt=n(Ae);j(To.$$.fragment,Zt),Gi=h(Zt),dn=a(Zt,"P",{});var tp=n(dn);Bi=c(tp,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),tp.forEach(t),Ki=h(Zt),Io=a(Zt,"P",{});var Es=n(Io);Ji=c(Es,`Note there are certain limitations. For more information about moving
repositories, please see
`),Po=a(Es,"A",{href:!0,rel:!0});var op=n(Po);Qi=c(op,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),op.forEach(t),Xi=c(Es,"."),Es.forEach(t),Yi=h(Zt),j(kt.$$.fragment,Zt),Zt.forEach(t),Zi=h(z),xe=a(z,"DIV",{class:!0});var eo=n(xe);j(Lo.$$.fragment,eo),el=h(eo),hn=a(eo,"P",{});var ap=n(hn);tl=c(ap,"Renames a discussion"),ap.forEach(t),ol=h(eo),j(At.$$.fragment,eo),al=h(eo),j(xt.$$.fragment,eo),eo.forEach(t),nl=h(z),ze=a(z,"DIV",{class:!0});var Fa=n(ze);j(Oo.$$.fragment,Fa),sl=h(Fa),un=a(Fa,"P",{});var np=n(un);rl=c(np,"Get the info object for a given repo of a given type."),np.forEach(t),il=h(Fa),j(Ht.$$.fragment,Fa),Fa.forEach(t),ll=h(z),qt=a(z,"DIV",{class:!0});var ws=n(qt);j(Ro.$$.fragment,ws),cl=h(ws),fn=a(ws,"P",{});var sp=n(fn);pl=c(sp,`Saves the passed access token so git can correctly authenticate the
user.`),sp.forEach(t),ws.forEach(t),gl=h(z),He=a(z,"DIV",{class:!0});var to=n(He);j(Co.$$.fragment,to),dl=h(to),mn=a(to,"P",{});var rp=n(mn);hl=c(rp,"Get info on one specific Space on huggingface.co."),rp.forEach(t),ul=h(to),_n=a(to,"P",{});var ip=n(_n);fl=c(ip,"Space can be private if you pass an acceptable token."),ip.forEach(t),ml=h(to),j(Dt.$$.fragment,to),to.forEach(t),_l=h(z),jt=a(z,"DIV",{class:!0});var ks=n(jt);j(So.$$.fragment,ks),bl=h(ks),bn=a(ks,"P",{});var lp=n(bn);vl=c(lp,"Resets the user\u2019s access token."),lp.forEach(t),ks.forEach(t),$l=h(z),We=a(z,"DIV",{class:!0});var Ta=n(We);j(Uo.$$.fragment,Ta),yl=h(Ta),vn=a(Ta,"P",{});var cp=n(vn);El=c(cp,"Update the visibility setting of a repository."),cp.forEach(t),wl=h(Ta),j(Nt.$$.fragment,Ta),Ta.forEach(t),kl=h(z),qe=a(z,"DIV",{class:!0});var oo=n(qe);j(Mo.$$.fragment,oo),Al=h(oo),$n=a(oo,"P",{});var pp=n($n);xl=c(pp,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),pp.forEach(t),Hl=h(oo),j(Ft.$$.fragment,oo),ql=h(oo),j(Tt.$$.fragment,oo),oo.forEach(t),Dl=h(z),le=a(z,"DIV",{class:!0});var De=n(le);j(Vo.$$.fragment,De),jl=h(De),yn=a(De,"P",{});var gp=n(yn);Nl=c(gp,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),gp.forEach(t),Fl=h(De),En=a(De,"P",{});var dp=n(En);Tl=c(dp,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),dp.forEach(t),Il=h(De),zo=a(De,"P",{});var As=n(zo);Pl=c(As,"Uses "),wn=a(As,"CODE",{});var hp=n(wn);Ll=c(hp,"HfApi.create_commit"),hp.forEach(t),Ol=c(As," under the hood."),As.forEach(t),Rl=h(De),j(It.$$.fragment,De),Cl=h(De),j(Pt.$$.fragment,De),De.forEach(t),Sl=h(z),Lt=a(z,"DIV",{class:!0});var xs=n(Lt);j(Wo.$$.fragment,xs),Ul=h(xs),kn=a(xs,"P",{});var up=n(kn);Ml=c(up,"Call HF API to know \u201Cwhoami\u201D."),up.forEach(t),xs.forEach(t),z.forEach(t),ts=h(s),Je=a(s,"H2",{class:!0});var Hs=n(Je);Ot=a(Hs,"A",{id:!0,class:!0,href:!0});var fp=n(Ot);An=a(fp,"SPAN",{});var mp=n(An);j(Go.$$.fragment,mp),mp.forEach(t),fp.forEach(t),Vl=h(Hs),xn=a(Hs,"SPAN",{});var _p=n(xn);zl=c(_p,"Hugging Face local storage"),_p.forEach(t),Hs.forEach(t),os=h(s),Bo=a(s,"P",{});var qc=n(Bo);Hn=a(qc,"CODE",{});var bp=n(Hn);Wl=c(bp,"huggingface_hub"),bp.forEach(t),Gl=c(qc,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),qc.forEach(t),as=h(s),Rt=a(s,"P",{});var qs=n(Rt);Bl=c(qs,"It does this using the "),xa=a(qs,"A",{href:!0});var vp=n(xa);Kl=c(vp,"HfFolder"),vp.forEach(t),Jl=c(qs," utility, which saves data at the root of the user."),qs.forEach(t),ns=h(s),fe=a(s,"DIV",{class:!0});var ao=n(fe);j(Ko.$$.fragment,ao),Ql=h(ao),Ct=a(ao,"DIV",{class:!0});var Ds=n(Ct);j(Jo.$$.fragment,Ds),Xl=h(Ds),qn=a(Ds,"P",{});var $p=n(qn);Yl=c($p,"Deletes the token from storage. Does not fail if token does not exist."),$p.forEach(t),Ds.forEach(t),Zl=h(ao),Ge=a(ao,"DIV",{class:!0});var Ia=n(Ge);j(Qo.$$.fragment,Ia),ec=h(Ia),Dn=a(Ia,"P",{});var yp=n(Dn);tc=c(yp,"Get token or None if not existent."),yp.forEach(t),oc=h(Ia),Xo=a(Ia,"P",{});var js=n(Xo);ac=c(js,"Note that a token can be also provided using the "),jn=a(js,"CODE",{});var Ep=n(jn);nc=c(Ep,"HUGGING_FACE_HUB_TOKEN"),Ep.forEach(t),sc=c(js,`
environment variable.`),js.forEach(t),Ia.forEach(t),rc=h(ao),St=a(ao,"DIV",{class:!0});var Ns=n(St);j(Yo.$$.fragment,Ns),ic=h(Ns),Nn=a(Ns,"P",{});var wp=n(Nn);lc=c(wp,"Save token, creating folder as needed."),wp.forEach(t),Ns.forEach(t),ao.forEach(t),ss=h(s),Qe=a(s,"H2",{class:!0});var Fs=n(Qe);Ut=a(Fs,"A",{id:!0,class:!0,href:!0});var kp=n(Ut);Fn=a(kp,"SPAN",{});var Ap=n(Fn);j(Zo.$$.fragment,Ap),Ap.forEach(t),kp.forEach(t),cc=h(Fs),Tn=a(Fs,"SPAN",{});var xp=n(Tn);pc=c(xp,"Filtering helpers"),xp.forEach(t),Fs.forEach(t),rs=h(s),Mt=a(s,"P",{});var Ts=n(Mt);gc=c(Ts,"Some helpers to filter repositories on the Hub are available in the "),In=a(Ts,"CODE",{});var Hp=n(In);dc=c(Hp,"huggingface_hub"),Hp.forEach(t),hc=c(Ts," package."),Ts.forEach(t),is=h(s),Fe=a(s,"DIV",{class:!0});var Pa=n(Fe);j(ea.$$.fragment,Pa),uc=h(Pa),Pn=a(Pa,"P",{});var qp=n(Pn);fc=c(qp,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),qp.forEach(t),mc=h(Pa),j(Vt.$$.fragment,Pa),Pa.forEach(t),ls=h(s),Te=a(s,"DIV",{class:!0});var La=n(Te);j(ta.$$.fragment,La),_c=h(La),Ln=a(La,"P",{});var Dp=n(Ln);bc=c(Dp,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Dp.forEach(t),vc=h(La),j(zt.$$.fragment,La),La.forEach(t),cs=h(s),Ie=a(s,"DIV",{class:!0});var Oa=n(Ie);j(oa.$$.fragment,Oa),$c=h(Oa),On=a(Oa,"P",{});var jp=n(On);yc=c(jp,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),jp.forEach(t),Ec=h(Oa),j(Wt.$$.fragment,Oa),Oa.forEach(t),ps=h(s),Pe=a(s,"DIV",{class:!0});var Ra=n(Pe);j(aa.$$.fragment,Ra),wc=h(Ra),Rn=a(Ra,"P",{});var Np=n(Rn);kc=c(Np,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Np.forEach(t),Ac=h(Ra),j(Gt.$$.fragment,Ra),Ra.forEach(t),this.h()},h(){v(p,"name","hf:doc:metadata"),v(p,"content",JSON.stringify(mg)),v(i,"id","huggingface_hub.HfApi"),v(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(i,"href","#huggingface_hub.HfApi"),v(f,"class","relative group"),v(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_a,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),v(va,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($a,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),v(Ea,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ka,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),v($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Aa,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"),v(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Po,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),v(Po,"rel","nofollow"),v(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ot,"id","huggingface_hub.HfFolder"),v(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Ot,"href","#huggingface_hub.HfFolder"),v(Je,"class","relative group"),v(xa,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder"),v(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ut,"id","huggingface_hub.DatasetFilter"),v(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Ut,"href","#huggingface_hub.DatasetFilter"),v(Qe,"class","relative group"),v(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,H){e(document.head,p),k(s,y,H),k(s,f,H),e(f,i),e(i,g),N(r,g,null),e(f,u),e(f,q),e(q,_),k(s,A,H),k(s,E,H),e(E,b),e(E,w),e(w,P),e(E,L),k(s,O,H),k(s,m,H),e(m,x),e(m,V),e(V,M),e(m,R),k(s,K,H),k(s,W,H),e(W,$),k(s,S,H),N(C,s,H),k(s,X,H),k(s,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),k(s,B,H),N(Q,s,H),k(s,te,H),k(s,ne,H),e(ne,Re),e(ne,he),e(he,Be),e(ne,Ce),k(s,je,H),k(s,U,H),N(ue,U,null),e(U,ua),e(U,ce),N(Ne,ce,null),e(ce,fa),e(ce,Ke),e(Ke,ma),e(ce,Is),N(Xe,ce,null),e(ce,Ps),N(Ye,ce,null),e(U,Ls),e(U,be),N(no,be,null),e(be,Os),e(be,Ca),e(Ca,Rs),e(be,Cs),N(Ze,be,null),e(be,Ss),N(et,be,null),e(U,Us),e(U,tt),N(so,tt,null),e(tt,Ms),e(tt,Sa),e(Sa,Vs),e(U,zs),e(U,re),N(ro,re,null),e(re,Ws),e(re,Ua),e(Ua,Gs),e(re,Bs),e(re,io),e(io,Ks),e(io,Ma),e(Ma,Js),e(io,Qs),e(re,Xs),e(re,lo),e(lo,Ys),e(lo,_a),e(_a,Zs),e(lo,er),e(re,tr),e(re,ba),e(ba,or),e(ba,va),e(va,ar),e(re,nr),N(ot,re,null),e(U,sr),e(U,ie),N(co,ie,null),e(ie,rr),e(ie,po),e(po,ir),e(po,Va),e(Va,lr),e(po,cr),e(ie,pr),e(ie,go),e(go,gr),e(go,$a),e($a,dr),e(go,hr),e(ie,ur),e(ie,ho),e(ho,fr),e(ho,za),e(za,mr),e(ho,_r),e(ie,br),e(ie,ya),e(ya,vr),e(ya,Ea),e(Ea,$r),e(ie,yr),N(at,ie,null),e(U,Er),e(U,nt),N(uo,nt,null),e(nt,wr),e(nt,Wa),e(Wa,kr),e(U,Ar),e(U,ve),N(fo,ve,null),e(ve,xr),e(ve,Ga),e(Ga,Hr),e(ve,qr),e(ve,Ba),e(Ba,Dr),e(ve,jr),N(st,ve,null),e(U,Nr),e(U,Se),N(mo,Se,null),e(Se,Fr),e(Se,Ka),e(Ka,Tr),e(Se,Ir),N(rt,Se,null),e(U,Pr),e(U,Ue),N(_o,Ue,null),e(Ue,Lr),e(Ue,Ja),e(Ja,Or),e(Ue,Rr),N(it,Ue,null),e(U,Cr),e(U,Me),N(bo,Me,null),e(Me,Sr),e(Me,Qa),e(Qa,Ur),e(Me,Mr),N(lt,Me,null),e(U,Vr),e(U,ct),N(vo,ct,null),e(ct,zr),e(ct,Xa),e(Xa,Wr),e(U,Gr),e(U,$e),N($o,$e,null),e($e,Br),e($e,Ya),e(Ya,Kr),e($e,Jr),e($e,wa),e(wa,Qr),e(wa,ka),e(ka,Xr),e($e,Yr),N(pt,$e,null),e(U,Zr),e(U,gt),N(yo,gt,null),e(gt,ei),e(gt,Za),e(Za,ti),e(U,oi),e(U,dt),N(Eo,dt,null),e(dt,ai),e(dt,en),e(en,ni),e(U,si),e(U,ht),N(wo,ht,null),e(ht,ri),e(ht,ko),e(ko,ii),e(ko,Aa),e(Aa,li),e(ko,ci),e(U,pi),e(U,ye),N(Ao,ye,null),e(ye,gi),e(ye,tn),e(tn,di),e(ye,hi),e(ye,on),e(on,ui),e(ye,fi),N(ut,ye,null),e(U,mi),e(U,Ee),N(xo,Ee,null),e(Ee,_i),e(Ee,an),e(an,bi),e(Ee,vi),N(ft,Ee,null),e(Ee,$i),N(mt,Ee,null),e(U,yi),e(U,_t),N(Ho,_t,null),e(_t,Ei),e(_t,nn),e(nn,wi),e(U,ki),e(U,we),N(qo,we,null),e(we,Ai),e(we,sn),e(sn,xi),e(we,Hi),N(bt,we,null),e(we,qi),N(vt,we,null),e(U,Di),e(U,$t),N(Do,$t,null),e($t,ji),e($t,rn),e(rn,Ni),e(U,Fi),e(U,yt),N(jo,yt,null),e(yt,Ti),e(yt,ln),e(ln,Ii),e(U,Pi),e(U,Ve),N(No,Ve,null),e(Ve,Li),e(Ve,cn),e(cn,Oi),e(Ve,Ri),N(Et,Ve,null),e(U,Ci),e(U,ke),N(Fo,ke,null),e(ke,Si),e(ke,pn),e(pn,Ui),e(ke,Mi),e(ke,gn),e(gn,Vi),e(ke,zi),N(wt,ke,null),e(U,Wi),e(U,Ae),N(To,Ae,null),e(Ae,Gi),e(Ae,dn),e(dn,Bi),e(Ae,Ki),e(Ae,Io),e(Io,Ji),e(Io,Po),e(Po,Qi),e(Io,Xi),e(Ae,Yi),N(kt,Ae,null),e(U,Zi),e(U,xe),N(Lo,xe,null),e(xe,el),e(xe,hn),e(hn,tl),e(xe,ol),N(At,xe,null),e(xe,al),N(xt,xe,null),e(U,nl),e(U,ze),N(Oo,ze,null),e(ze,sl),e(ze,un),e(un,rl),e(ze,il),N(Ht,ze,null),e(U,ll),e(U,qt),N(Ro,qt,null),e(qt,cl),e(qt,fn),e(fn,pl),e(U,gl),e(U,He),N(Co,He,null),e(He,dl),e(He,mn),e(mn,hl),e(He,ul),e(He,_n),e(_n,fl),e(He,ml),N(Dt,He,null),e(U,_l),e(U,jt),N(So,jt,null),e(jt,bl),e(jt,bn),e(bn,vl),e(U,$l),e(U,We),N(Uo,We,null),e(We,yl),e(We,vn),e(vn,El),e(We,wl),N(Nt,We,null),e(U,kl),e(U,qe),N(Mo,qe,null),e(qe,Al),e(qe,$n),e($n,xl),e(qe,Hl),N(Ft,qe,null),e(qe,ql),N(Tt,qe,null),e(U,Dl),e(U,le),N(Vo,le,null),e(le,jl),e(le,yn),e(yn,Nl),e(le,Fl),e(le,En),e(En,Tl),e(le,Il),e(le,zo),e(zo,Pl),e(zo,wn),e(wn,Ll),e(zo,Ol),e(le,Rl),N(It,le,null),e(le,Cl),N(Pt,le,null),e(U,Sl),e(U,Lt),N(Wo,Lt,null),e(Lt,Ul),e(Lt,kn),e(kn,Ml),k(s,ts,H),k(s,Je,H),e(Je,Ot),e(Ot,An),N(Go,An,null),e(Je,Vl),e(Je,xn),e(xn,zl),k(s,os,H),k(s,Bo,H),e(Bo,Hn),e(Hn,Wl),e(Bo,Gl),k(s,as,H),k(s,Rt,H),e(Rt,Bl),e(Rt,xa),e(xa,Kl),e(Rt,Jl),k(s,ns,H),k(s,fe,H),N(Ko,fe,null),e(fe,Ql),e(fe,Ct),N(Jo,Ct,null),e(Ct,Xl),e(Ct,qn),e(qn,Yl),e(fe,Zl),e(fe,Ge),N(Qo,Ge,null),e(Ge,ec),e(Ge,Dn),e(Dn,tc),e(Ge,oc),e(Ge,Xo),e(Xo,ac),e(Xo,jn),e(jn,nc),e(Xo,sc),e(fe,rc),e(fe,St),N(Yo,St,null),e(St,ic),e(St,Nn),e(Nn,lc),k(s,ss,H),k(s,Qe,H),e(Qe,Ut),e(Ut,Fn),N(Zo,Fn,null),e(Qe,cc),e(Qe,Tn),e(Tn,pc),k(s,rs,H),k(s,Mt,H),e(Mt,gc),e(Mt,In),e(In,dc),e(Mt,hc),k(s,is,H),k(s,Fe,H),N(ea,Fe,null),e(Fe,uc),e(Fe,Pn),e(Pn,fc),e(Fe,mc),N(Vt,Fe,null),k(s,ls,H),k(s,Te,H),N(ta,Te,null),e(Te,_c),e(Te,Ln),e(Ln,bc),e(Te,vc),N(zt,Te,null),k(s,cs,H),k(s,Ie,H),N(oa,Ie,null),e(Ie,$c),e(Ie,On),e(On,yc),e(Ie,Ec),N(Wt,Ie,null),k(s,ps,H),k(s,Pe,H),N(aa,Pe,null),e(Pe,wc),e(Pe,Rn),e(Rn,kc),e(Pe,Ac),N(Gt,Pe,null),gs=!0},p(s,[H]){const na={};H&2&&(na.$$scope={dirty:H,ctx:s}),Xe.$set(na);const Cn={};H&2&&(Cn.$$scope={dirty:H,ctx:s}),Ye.$set(Cn);const Sn={};H&2&&(Sn.$$scope={dirty:H,ctx:s}),Ze.$set(Sn);const Un={};H&2&&(Un.$$scope={dirty:H,ctx:s}),et.$set(Un);const sa={};H&2&&(sa.$$scope={dirty:H,ctx:s}),ot.$set(sa);const Mn={};H&2&&(Mn.$$scope={dirty:H,ctx:s}),at.$set(Mn);const ra={};H&2&&(ra.$$scope={dirty:H,ctx:s}),st.$set(ra);const Vn={};H&2&&(Vn.$$scope={dirty:H,ctx:s}),rt.$set(Vn);const zn={};H&2&&(zn.$$scope={dirty:H,ctx:s}),it.$set(zn);const ia={};H&2&&(ia.$$scope={dirty:H,ctx:s}),lt.$set(ia);const Wn={};H&2&&(Wn.$$scope={dirty:H,ctx:s}),pt.$set(Wn);const la={};H&2&&(la.$$scope={dirty:H,ctx:s}),ut.$set(la);const Gn={};H&2&&(Gn.$$scope={dirty:H,ctx:s}),ft.$set(Gn);const z={};H&2&&(z.$$scope={dirty:H,ctx:s}),mt.$set(z);const Le={};H&2&&(Le.$$scope={dirty:H,ctx:s}),bt.$set(Le);const Bn={};H&2&&(Bn.$$scope={dirty:H,ctx:s}),vt.$set(Bn);const Oe={};H&2&&(Oe.$$scope={dirty:H,ctx:s}),Et.$set(Oe);const Kn={};H&2&&(Kn.$$scope={dirty:H,ctx:s}),wt.$set(Kn);const ca={};H&2&&(ca.$$scope={dirty:H,ctx:s}),kt.$set(ca);const Jn={};H&2&&(Jn.$$scope={dirty:H,ctx:s}),At.$set(Jn);const pe={};H&2&&(pe.$$scope={dirty:H,ctx:s}),xt.$set(pe);const Qn={};H&2&&(Qn.$$scope={dirty:H,ctx:s}),Ht.$set(Qn);const pa={};H&2&&(pa.$$scope={dirty:H,ctx:s}),Dt.$set(pa);const Xn={};H&2&&(Xn.$$scope={dirty:H,ctx:s}),Nt.$set(Xn);const ga={};H&2&&(ga.$$scope={dirty:H,ctx:s}),Ft.$set(ga);const Yn={};H&2&&(Yn.$$scope={dirty:H,ctx:s}),Tt.$set(Yn);const Ha={};H&2&&(Ha.$$scope={dirty:H,ctx:s}),It.$set(Ha);const Zn={};H&2&&(Zn.$$scope={dirty:H,ctx:s}),Pt.$set(Zn);const ge={};H&2&&(ge.$$scope={dirty:H,ctx:s}),Vt.$set(ge);const da={};H&2&&(da.$$scope={dirty:H,ctx:s}),zt.$set(da);const es={};H&2&&(es.$$scope={dirty:H,ctx:s}),Wt.$set(es);const ha={};H&2&&(ha.$$scope={dirty:H,ctx:s}),Gt.$set(ha)},i(s){gs||(F(r.$$.fragment,s),F(C.$$.fragment,s),F(Q.$$.fragment,s),F(ue.$$.fragment,s),F(Ne.$$.fragment,s),F(Xe.$$.fragment,s),F(Ye.$$.fragment,s),F(no.$$.fragment,s),F(Ze.$$.fragment,s),F(et.$$.fragment,s),F(so.$$.fragment,s),F(ro.$$.fragment,s),F(ot.$$.fragment,s),F(co.$$.fragment,s),F(at.$$.fragment,s),F(uo.$$.fragment,s),F(fo.$$.fragment,s),F(st.$$.fragment,s),F(mo.$$.fragment,s),F(rt.$$.fragment,s),F(_o.$$.fragment,s),F(it.$$.fragment,s),F(bo.$$.fragment,s),F(lt.$$.fragment,s),F(vo.$$.fragment,s),F($o.$$.fragment,s),F(pt.$$.fragment,s),F(yo.$$.fragment,s),F(Eo.$$.fragment,s),F(wo.$$.fragment,s),F(Ao.$$.fragment,s),F(ut.$$.fragment,s),F(xo.$$.fragment,s),F(ft.$$.fragment,s),F(mt.$$.fragment,s),F(Ho.$$.fragment,s),F(qo.$$.fragment,s),F(bt.$$.fragment,s),F(vt.$$.fragment,s),F(Do.$$.fragment,s),F(jo.$$.fragment,s),F(No.$$.fragment,s),F(Et.$$.fragment,s),F(Fo.$$.fragment,s),F(wt.$$.fragment,s),F(To.$$.fragment,s),F(kt.$$.fragment,s),F(Lo.$$.fragment,s),F(At.$$.fragment,s),F(xt.$$.fragment,s),F(Oo.$$.fragment,s),F(Ht.$$.fragment,s),F(Ro.$$.fragment,s),F(Co.$$.fragment,s),F(Dt.$$.fragment,s),F(So.$$.fragment,s),F(Uo.$$.fragment,s),F(Nt.$$.fragment,s),F(Mo.$$.fragment,s),F(Ft.$$.fragment,s),F(Tt.$$.fragment,s),F(Vo.$$.fragment,s),F(It.$$.fragment,s),F(Pt.$$.fragment,s),F(Wo.$$.fragment,s),F(Go.$$.fragment,s),F(Ko.$$.fragment,s),F(Jo.$$.fragment,s),F(Qo.$$.fragment,s),F(Yo.$$.fragment,s),F(Zo.$$.fragment,s),F(ea.$$.fragment,s),F(Vt.$$.fragment,s),F(ta.$$.fragment,s),F(zt.$$.fragment,s),F(oa.$$.fragment,s),F(Wt.$$.fragment,s),F(aa.$$.fragment,s),F(Gt.$$.fragment,s),gs=!0)},o(s){T(r.$$.fragment,s),T(C.$$.fragment,s),T(Q.$$.fragment,s),T(ue.$$.fragment,s),T(Ne.$$.fragment,s),T(Xe.$$.fragment,s),T(Ye.$$.fragment,s),T(no.$$.fragment,s),T(Ze.$$.fragment,s),T(et.$$.fragment,s),T(so.$$.fragment,s),T(ro.$$.fragment,s),T(ot.$$.fragment,s),T(co.$$.fragment,s),T(at.$$.fragment,s),T(uo.$$.fragment,s),T(fo.$$.fragment,s),T(st.$$.fragment,s),T(mo.$$.fragment,s),T(rt.$$.fragment,s),T(_o.$$.fragment,s),T(it.$$.fragment,s),T(bo.$$.fragment,s),T(lt.$$.fragment,s),T(vo.$$.fragment,s),T($o.$$.fragment,s),T(pt.$$.fragment,s),T(yo.$$.fragment,s),T(Eo.$$.fragment,s),T(wo.$$.fragment,s),T(Ao.$$.fragment,s),T(ut.$$.fragment,s),T(xo.$$.fragment,s),T(ft.$$.fragment,s),T(mt.$$.fragment,s),T(Ho.$$.fragment,s),T(qo.$$.fragment,s),T(bt.$$.fragment,s),T(vt.$$.fragment,s),T(Do.$$.fragment,s),T(jo.$$.fragment,s),T(No.$$.fragment,s),T(Et.$$.fragment,s),T(Fo.$$.fragment,s),T(wt.$$.fragment,s),T(To.$$.fragment,s),T(kt.$$.fragment,s),T(Lo.$$.fragment,s),T(At.$$.fragment,s),T(xt.$$.fragment,s),T(Oo.$$.fragment,s),T(Ht.$$.fragment,s),T(Ro.$$.fragment,s),T(Co.$$.fragment,s),T(Dt.$$.fragment,s),T(So.$$.fragment,s),T(Uo.$$.fragment,s),T(Nt.$$.fragment,s),T(Mo.$$.fragment,s),T(Ft.$$.fragment,s),T(Tt.$$.fragment,s),T(Vo.$$.fragment,s),T(It.$$.fragment,s),T(Pt.$$.fragment,s),T(Wo.$$.fragment,s),T(Go.$$.fragment,s),T(Ko.$$.fragment,s),T(Jo.$$.fragment,s),T(Qo.$$.fragment,s),T(Yo.$$.fragment,s),T(Zo.$$.fragment,s),T(ea.$$.fragment,s),T(Vt.$$.fragment,s),T(ta.$$.fragment,s),T(zt.$$.fragment,s),T(oa.$$.fragment,s),T(Wt.$$.fragment,s),T(aa.$$.fragment,s),T(Gt.$$.fragment,s),gs=!1},d(s){t(p),s&&t(y),s&&t(f),I(r),s&&t(A),s&&t(E),s&&t(O),s&&t(m),s&&t(K),s&&t(W),s&&t(S),I(C,s),s&&t(X),s&&t(ee),s&&t(B),I(Q,s),s&&t(te),s&&t(ne),s&&t(je),s&&t(U),I(ue),I(Ne),I(Xe),I(Ye),I(no),I(Ze),I(et),I(so),I(ro),I(ot),I(co),I(at),I(uo),I(fo),I(st),I(mo),I(rt),I(_o),I(it),I(bo),I(lt),I(vo),I($o),I(pt),I(yo),I(Eo),I(wo),I(Ao),I(ut),I(xo),I(ft),I(mt),I(Ho),I(qo),I(bt),I(vt),I(Do),I(jo),I(No),I(Et),I(Fo),I(wt),I(To),I(kt),I(Lo),I(At),I(xt),I(Oo),I(Ht),I(Ro),I(Co),I(Dt),I(So),I(Uo),I(Nt),I(Mo),I(Ft),I(Tt),I(Vo),I(It),I(Pt),I(Wo),s&&t(ts),s&&t(Je),I(Go),s&&t(os),s&&t(Bo),s&&t(as),s&&t(Rt),s&&t(ns),s&&t(fe),I(Ko),I(Jo),I(Qo),I(Yo),s&&t(ss),s&&t(Qe),I(Zo),s&&t(rs),s&&t(Mt),s&&t(is),s&&t(Fe),I(ea),I(Vt),s&&t(ls),s&&t(Te),I(ta),I(zt),s&&t(cs),s&&t(Ie),I(oa),I(Wt),s&&t(ps),s&&t(Pe),I(aa),I(Gt)}}}const mg={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function _g(G){return Lp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kg extends Fp{constructor(p){super();Tp(this,p,_g,fg,Ip,{})}}export{kg as default,mg as metadata};
