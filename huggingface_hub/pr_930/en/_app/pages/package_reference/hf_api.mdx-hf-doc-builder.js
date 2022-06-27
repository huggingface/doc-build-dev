import{S as Tc,i as Ic,s as Pc,e as o,k as d,w as j,t as l,M as Lc,c as a,d as t,m as h,a as n,x as D,h as c,b as $,G as e,g as w,y as F,q as N,o as T,B as I,v as Oc,L as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ol}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ue}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Rc(G){let p,v,f,i,g;return i=new le({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Cc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Sc(G){let p,v,f,i,g;return i=new le({props:{code:`
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function Mc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Uc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Vc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),b=d(),k=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var U=n(g);r=a(U,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(U,"CODE",{});var B=n(_);A=c(B,"private"),B.forEach(t),y=c(U," and you do not have access."),U.forEach(t),b=h(V),k=a(V,"LI",{});var W=n(k);P=a(W,"A",{href:!0});var E=n(P);L=c(E,"RevisionNotFoundError"),E.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){w(m,p,x),e(p,v),w(m,f,x),w(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function zc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W,E,M,C,X,ee,Y,J,Z,ae,K;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),E=d(),M=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=o("li"),Z=o("a"),ae=l("EntryNotFoundError"),K=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=a(Q,"P",{});var oe=n(p);v=c(oe,"Raises the following errors:"),oe.forEach(t),f=h(Q),i=a(Q,"UL",{});var ne=n(i);g=a(ne,"LI",{});var Oe=n(g);r=a(Oe,"A",{href:!0,rel:!0});var ce=n(r);u=a(ce,"CODE",{});var Ge=n(u);q=c(Ge,"HTTPError"),Ge.forEach(t),ce.forEach(t),_=c(Oe,`
if the HuggingFace API returned an error`),Oe.forEach(t),A=h(ne),y=a(ne,"LI",{});var Re=n(y);b=a(Re,"A",{href:!0,rel:!0});var qe=n(b);k=a(qe,"CODE",{});var S=n(k);P=c(S,"ValueError"),S.forEach(t),qe.forEach(t),L=c(Re,`
if some parameter value is invalid`),Re.forEach(t),O=h(ne),m=a(ne,"LI",{});var ge=n(m);x=a(ge,"A",{href:!0});var oa=n(x);V=c(oa,"RepositoryNotFoundError"),oa.forEach(t),U=c(ge,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ge,"CODE",{});var ie=n(R);B=c(ie,"private"),ie.forEach(t),W=c(ge," and you do not have access."),ge.forEach(t),E=h(ne),M=a(ne,"LI",{});var je=n(M);C=a(je,"A",{href:!0});var aa=n(C);X=c(aa,"RevisionNotFoundError"),aa.forEach(t),ee=c(je,`
If the revision to download from cannot be found.`),je.forEach(t),Y=h(ne),J=a(ne,"LI",{});var Be=n(J);Z=a(Be,"A",{href:!0});var na=n(Z);ae=c(na,"EntryNotFoundError"),na.forEach(t),K=c(Be,`
If the file to download cannot be found.`),Be.forEach(t),ne.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(Z,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,oe){w(Q,p,oe),e(p,v),w(Q,f,oe),w(Q,i,oe),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W),e(i,E),e(i,M),e(M,C),e(C,X),e(M,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,K)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Wc(G){let p,v,f,i,g,r,u,q,_,A,y;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var k=n(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),y=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Gc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Bc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Kc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function Jc(G){let p,v,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var y=n(f);i=c(y,"filter"),y.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){w(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),w(_,r,A),F(u,_,A),q=!0},p:fe,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Qc(G){let p,v,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var y=n(f);i=c(y,"search"),y.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){w(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),w(_,r,A),F(u,_,A),q=!0},p:fe,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Xc(G){let p,v,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var y=n(f);i=c(y,"filter"),y.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){w(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),w(_,r,A),F(u,_,A),q=!0},p:fe,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Yc(G){let p,v,f,i,g,r,u,q;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),r=d(),j(u.$$.fragment)},l(_){p=a(_,"P",{});var A=n(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var y=n(f);i=c(y,"search"),y.forEach(t),g=c(A," argument:"),A.forEach(t),r=h(_),D(u.$$.fragment,_)},m(_,A){w(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),w(_,r,A),F(u,_,A),q=!0},p:fe,i(_){q||(N(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(r),I(u,_)}}}function Zc(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function ep(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),b=d(),k=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var U=n(g);r=a(U,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(U,"CODE",{});var B=n(_);A=c(B,"private"),B.forEach(t),y=c(U," and you do not have access."),U.forEach(t),b=h(V),k=a(V,"LI",{});var W=n(k);P=a(W,"A",{href:!0});var E=n(P);L=c(E,"RevisionNotFoundError"),E.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){w(m,p,x),e(p,v),w(m,f,x),w(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function tp(G){let p,v,f,i,g,r,u,q,_,A,y;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var k=n(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),y=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function op(G){let p,v,f,i,g;return i=new le({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function ap(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),this.h()},l(E){p=a(E,"P",{});var M=n(p);v=c(M,"Raises the following errors:"),M.forEach(t),f=h(E),i=a(E,"UL",{});var C=n(i);g=a(C,"LI",{});var X=n(g);r=a(X,"A",{href:!0,rel:!0});var ee=n(r);u=a(ee,"CODE",{});var Y=n(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),y=a(C,"LI",{});var J=n(y);b=a(J,"A",{href:!0,rel:!0});var Z=n(b);k=a(Z,"CODE",{});var ae=n(k);P=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),O=h(C),m=a(C,"LI",{});var K=n(m);x=a(K,"A",{href:!0});var Q=n(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),U=c(K,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(K,"CODE",{});var oe=n(R);B=c(oe,"private"),oe.forEach(t),W=c(K," and you do not have access."),K.forEach(t),C.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,M){w(E,p,M),e(p,v),w(E,f,M),w(E,i,M),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W)},d(E){E&&t(p),E&&t(f),E&&t(i)}}}function np(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),b=d(),k=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var U=n(g);r=a(U,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(U,"CODE",{});var B=n(_);A=c(B,"private"),B.forEach(t),y=c(U," and you do not have access."),U.forEach(t),b=h(V),k=a(V,"LI",{});var W=n(k);P=a(W,"A",{href:!0});var E=n(P);L=c(E,"RevisionNotFoundError"),E.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){w(m,p,x),e(p,v),w(m,f,x),w(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function sp(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),b=d(),k=o("li"),P=o("a"),L=l("RevisionNotFoundError"),O=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=n(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=n(i);g=a(V,"LI",{});var U=n(g);r=a(U,"A",{href:!0});var R=n(r);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(U,"CODE",{});var B=n(_);A=c(B,"private"),B.forEach(t),y=c(U," and you do not have access."),U.forEach(t),b=h(V),k=a(V,"LI",{});var W=n(k);P=a(W,"A",{href:!0});var E=n(P);L=c(E,"RevisionNotFoundError"),E.forEach(t),O=c(W,`
If the revision to download from cannot be found.`),W.forEach(t),V.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(P,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){w(m,p,x),e(p,v),w(m,f,x),w(m,i,x),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y),e(i,b),e(i,k),e(k,P),e(P,L),e(k,O)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function rp(G){let p,v,f,i,g,r,u,q,_,A,y;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),y=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var k=n(p);v=c(k,"Raises the following errors:"),k.forEach(t),f=h(b),i=a(b,"UL",{});var P=n(i);g=a(P,"LI",{});var L=n(g);r=a(L,"A",{href:!0});var O=n(r);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=n(_);A=c(m,"private"),m.forEach(t),y=c(L," and you do not have access."),L.forEach(t),P.forEach(t),this.h()},h(){$(r,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,k){w(b,p,k),e(p,v),w(b,f,k),w(b,i,k),e(i,g),e(g,r),e(r,u),e(g,q),e(g,_),e(_,A),e(g,y)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function ip(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W,E,M,C,X,ee;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),O=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),U=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=o("code"),B=l("private"),W=l(" and you do not have access."),E=d(),M=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=a(Y,"P",{});var J=n(p);v=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=a(Y,"UL",{});var Z=n(i);g=a(Z,"LI",{});var ae=n(g);r=a(ae,"A",{href:!0,rel:!0});var K=n(r);u=a(K,"CODE",{});var Q=n(u);q=c(Q,"HTTPError"),Q.forEach(t),K.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),y=a(Z,"LI",{});var oe=n(y);b=a(oe,"A",{href:!0,rel:!0});var ne=n(b);k=a(ne,"CODE",{});var Oe=n(k);P=c(Oe,"ValueError"),Oe.forEach(t),ne.forEach(t),L=c(oe,`
if some parameter value is invalid`),oe.forEach(t),O=h(Z),m=a(Z,"LI",{});var ce=n(m);x=a(ce,"A",{href:!0});var Ge=n(x);V=c(Ge,"RepositoryNotFoundError"),Ge.forEach(t),U=c(ce,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),R=a(ce,"CODE",{});var Re=n(R);B=c(Re,"private"),Re.forEach(t),W=c(ce," and you do not have access."),ce.forEach(t),E=h(Z),M=a(Z,"LI",{});var qe=n(M);C=a(qe,"A",{href:!0});var S=n(C);X=c(S,"RevisionNotFoundError"),S.forEach(t),ee=c(qe,`
If the revision to download from cannot be found.`),qe.forEach(t),Z.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){w(Y,p,J),e(p,v),w(Y,f,J),w(Y,i,J),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L),e(i,O),e(i,m),e(m,x),e(x,V),e(m,U),e(m,R),e(R,B),e(m,W),e(i,E),e(i,M),e(M,C),e(C,X),e(M,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function lp(G){let p,v,f,i,g;return i=new le({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),v=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function cp(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),r=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),y=o("li"),b=o("a"),k=o("code"),P=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(O){p=a(O,"P",{});var m=n(p);v=c(m,"Raises the following errors:"),m.forEach(t),f=h(O),i=a(O,"UL",{});var x=n(i);g=a(x,"LI",{});var V=n(g);r=a(V,"A",{href:!0,rel:!0});var U=n(r);u=a(U,"CODE",{});var R=n(u);q=c(R,"HTTPError"),R.forEach(t),U.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),y=a(x,"LI",{});var B=n(y);b=a(B,"A",{href:!0,rel:!0});var W=n(b);k=a(W,"CODE",{});var E=n(k);P=c(E,"ValueError"),E.forEach(t),W.forEach(t),L=c(B,`
if some parameter value is invalid`),B.forEach(t),x.forEach(t),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow")},m(O,m){w(O,p,m),e(p,v),w(O,f,m),w(O,i,m),e(i,g),e(g,r),e(r,u),e(u,q),e(g,_),e(i,A),e(i,y),e(y,b),e(b,k),e(k,P),e(y,L)},d(O){O&&t(p),O&&t(f),O&&t(i)}}}function pp(G){let p,v,f,i,g;return i=new le({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),v=l("Example usage:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Example usage:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function gp(G){let p,v,f,i,g;return i=new le({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Examples:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function dp(G){let p,v;return p=new le({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(p.$$.fragment)},l(f){D(p.$$.fragment,f)},m(f,i){F(p,f,i),v=!0},p:fe,i(f){v||(N(p.$$.fragment,f),v=!0)},o(f){T(p.$$.fragment,f),v=!1},d(f){I(p,f)}}}function hp(G){let p,v,f,i,g;return i=new le({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function up(G){let p,v,f,i,g;return i=new le({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=l("Example:"),f=d(),j(i.$$.fragment)},l(r){p=a(r,"P",{});var u=n(p);v=c(u,"Example:"),u.forEach(t),f=h(r),D(i.$$.fragment,r)},m(r,u){w(r,p,u),e(p,v),w(r,f,u),F(i,r,u),g=!0},p:fe,i(r){g||(N(i.$$.fragment,r),g=!0)},o(r){T(i.$$.fragment,r),g=!1},d(r){r&&t(p),r&&t(f),I(i,r)}}}function fp(G){let p,v,f,i,g,r,u,q,_,A,y,b,k,P,L,O,m,x,V,U,R,B,W,E,M,C,X,ee,Y,J,Z,ae,K,Q,oe,ne,Oe,ce,Ge,Re,qe,S,ge,oa,ie,je,aa,Be,na,hs,Qe,us,Xe,fs,me,eo,ms,ka,_s,bs,Ye,vs,Ze,$s,et,to,ys,wa,Es,ks,pe,oo,ws,Aa,As,xs,ao,Hs,xa,qs,js,Ds,sa,Fs,ra,Ns,Ts,tt,Is,ot,no,Ps,Ha,Ls,Os,_e,so,Rs,qa,Cs,Ss,ja,Ms,Us,at,Vs,Ce,ro,zs,Da,Ws,Gs,nt,Bs,Se,io,Ks,Fa,Js,Qs,st,Xs,Me,lo,Ys,Na,Zs,er,rt,tr,it,co,or,Ta,ar,nr,be,po,sr,Ia,rr,ir,ia,lr,la,cr,pr,lt,gr,ct,go,dr,Pa,hr,ur,pt,ho,fr,La,mr,_r,gt,uo,br,fo,vr,ca,$r,yr,Er,ve,mo,kr,Oa,wr,Ar,Ra,xr,Hr,dt,qr,$e,_o,jr,Ca,Dr,Fr,ht,Nr,ut,Tr,ft,bo,Ir,Sa,Pr,Lr,ye,vo,Or,Ma,Rr,Cr,mt,Sr,_t,Mr,bt,$o,Ur,Ua,Vr,zr,Ue,yo,Wr,Va,Gr,Br,vt,Kr,Ee,Eo,Jr,za,Qr,Xr,Wa,Yr,Zr,$t,ei,ke,ko,ti,Ga,oi,ai,wo,ni,Ao,si,ri,ii,yt,li,we,xo,ci,Ba,pi,gi,Et,di,kt,hi,Ve,Ho,ui,Ka,fi,mi,wt,_i,At,qo,bi,Ja,vi,$i,Ae,jo,yi,Qa,Ei,ki,Xa,wi,Ai,xt,xi,Ht,Do,Hi,Ya,qi,ji,ze,Fo,Di,Za,Fi,Ni,qt,Ti,xe,No,Ii,en,Pi,Li,jt,Oi,Dt,Ri,re,To,Ci,tn,Si,Mi,on,Ui,Vi,Io,zi,an,Wi,Gi,Bi,Ft,Ki,Nt,Ji,Tt,Po,Qi,nn,Xi,On,Ke,It,sn,Lo,Yi,rn,Zi,Rn,Oo,ln,el,tl,Cn,Pt,ol,pa,al,nl,Sn,de,Ro,sl,Lt,Co,rl,cn,il,ll,We,So,cl,pn,pl,gl,Mo,dl,gn,hl,ul,fl,Ot,Uo,ml,dn,_l,Mn,Je,Rt,hn,Vo,bl,un,vl,Un,Ct,$l,fn,yl,El,Vn,De,zo,kl,mn,wl,Al,St,zn,Fe,Wo,xl,_n,Hl,ql,Mt,Wn,Ne,Go,jl,bn,Dl,Fl,Ut,Gn,Te,Bo,Nl,vn,Tl,Il,Vt,Bn;return r=new Ol({}),C=new le({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new le({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ge=new te({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L573"}}),je=new te({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2690",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Qe=new ue({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Rc]},$$scope:{ctx:G}}}),Xe=new se({props:{$$slots:{default:[Cc]},$$scope:{ctx:G}}}),eo=new te({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2549",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),Ye=new ue({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Sc]},$$scope:{ctx:G}}}),Ze=new se({props:{$$slots:{default:[Mc]},$$scope:{ctx:G}}}),to=new te({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1738",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),oo=new te({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2423"}}),tt=new se({props:{$$slots:{default:[Uc]},$$scope:{ctx:G}}}),no=new te({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1355",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),so=new te({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1152",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),at=new se({props:{$$slots:{default:[Vc]},$$scope:{ctx:G}}}),ro=new te({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2148"}}),nt=new se({props:{$$slots:{default:[zc]},$$scope:{ctx:G}}}),io=new te({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1485"}}),st=new se({props:{$$slots:{default:[Wc]},$$scope:{ctx:G}}}),lo=new te({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit. ID is an hexadecimal string.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2813",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),rt=new se({props:{$$slots:{default:[Gc]},$$scope:{ctx:G}}}),co=new te({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L694"}}),po=new te({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2340"}}),lt=new se({props:{$$slots:{default:[Bc]},$$scope:{ctx:G}}}),go=new te({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2226",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ho=new te({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L686"}}),uo=new te({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"_page_index",val:": int = 0"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2260",returnDescription:`
<p>A <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"
>Pagination</a> of <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a>.</p>
`,returnType:`
<p><code>Pagination[Discussion]</code></p>
`}}),mo=new te({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit. ID is an hexadecimal string.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2871",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),dt=new se({props:{$$slots:{default:[Kc]},$$scope:{ctx:G}}}),_o=new te({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L912"}}),ht=new ue({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Jc]},$$scope:{ctx:G}}}),ut=new ue({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Qc]},$$scope:{ctx:G}}}),bo=new te({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1077",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),vo=new te({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L704"}}),mt=new ue({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Xc]},$$scope:{ctx:G}}}),_t=new ue({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Yc]},$$scope:{ctx:G}}}),$o=new te({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1315",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),yo=new te({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2761",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),vt=new se({props:{$$slots:{default:[Zc]},$$scope:{ctx:G}}}),Eo=new te({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1091",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),$t=new se({props:{$$slots:{default:[ep]},$$scope:{ctx:G}}}),ko=new te({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1660"}}),yt=new se({props:{$$slots:{default:[tp]},$$scope:{ctx:G}}}),xo=new te({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the discussion or pull request. Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2624",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),Et=new ue({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[op]},$$scope:{ctx:G}}}),kt=new se({props:{$$slots:{default:[ap]},$$scope:{ctx:G}}}),Ho=new te({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1260",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),wt=new se({props:{$$slots:{default:[np]},$$scope:{ctx:G}}}),qo=new te({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L667"}}),jo=new te({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1206",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),xt=new se({props:{$$slots:{default:[sp]},$$scope:{ctx:G}}}),Do=new te({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L679"}}),Fo=new te({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1585",returnDescription:`
<p>The HTTP response in json.</p>
`}}),qt=new se({props:{$$slots:{default:[rp]},$$scope:{ctx:G}}}),No=new te({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1859",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),jt=new se({props:{$$slots:{default:[ip]},$$scope:{ctx:G}}}),Dt=new ue({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[lp]},$$scope:{ctx:G}}}),To=new te({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2004",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ft=new se({props:{$$slots:{default:[cp]},$$scope:{ctx:G}}}),Nt=new ue({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[pp]},$$scope:{ctx:G}}}),Po=new te({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L577"}}),Lo=new Ol({}),Ro=new te({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2928"}}),Co=new te({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2965"}}),So=new te({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2944",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Uo=new te({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2931"}}),Vo=new Ol({}),zo=new te({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),St=new ue({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[gp]},$$scope:{ctx:G}}}),Wo=new te({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Mt=new ue({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[dp]},$$scope:{ctx:G}}}),Go=new te({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L461"}}),Ut=new ue({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[hp]},$$scope:{ctx:G}}}),Bo=new te({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L423"}}),Vt=new ue({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[up]},$$scope:{ctx:G}}}),{c(){p=o("meta"),v=d(),f=o("h1"),i=o("a"),g=o("span"),j(r.$$.fragment),u=d(),q=o("span"),_=l("Hugging Face Hub API"),A=d(),y=o("p"),b=l("Below is the documentation for the "),k=o("code"),P=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=d(),m=o("p"),x=l("All methods from the "),V=o("code"),U=l("HfApi"),R=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),B=d(),W=o("p"),E=l("The following approach uses the method from the root of the package:"),M=d(),j(C.$$.fragment),X=d(),ee=o("p"),Y=l("The following approach uses the "),J=o("code"),Z=l("HfApi"),ae=l(" class:"),K=d(),j(Q.$$.fragment),oe=d(),ne=o("p"),Oe=l("Using the "),ce=o("code"),Ge=l("HfApi"),Re=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),qe=d(),S=o("div"),j(ge.$$.fragment),oa=d(),ie=o("div"),j(je.$$.fragment),aa=d(),Be=o("p"),na=l("Closes or re-opens a discussion or pull request."),hs=d(),j(Qe.$$.fragment),us=d(),j(Xe.$$.fragment),fs=d(),me=o("div"),j(eo.$$.fragment),ms=d(),ka=o("p"),_s=l("Creates a new comment on the given discussion"),bs=d(),j(Ye.$$.fragment),vs=d(),j(Ze.$$.fragment),$s=d(),et=o("div"),j(to.$$.fragment),ys=d(),wa=o("p"),Es=l("Creates a commit in the given repo, deleting & uploading files as needed."),ks=d(),pe=o("div"),j(oo.$$.fragment),ws=d(),Aa=o("p"),As=l("Creates a discussion or pull request."),xs=d(),ao=o("p"),Hs=l("Pull Requests created programmatically will be in "),xa=o("code"),qs=l('"draft"'),js=l(" status."),Ds=d(),sa=o("p"),Fs=l("Returns: "),ra=o("a"),Ns=l("DiscussionWithDetails"),Ts=d(),j(tt.$$.fragment),Is=d(),ot=o("div"),j(no.$$.fragment),Ps=d(),Ha=o("p"),Ls=l("Create an empty repo on the HuggingFace Hub."),Os=d(),_e=o("div"),j(so.$$.fragment),Rs=d(),qa=o("p"),Cs=l("Get info on one specific dataset on huggingface.co."),Ss=d(),ja=o("p"),Ms=l("Dataset can be private if you pass an acceptable token."),Us=d(),j(at.$$.fragment),Vs=d(),Ce=o("div"),j(ro.$$.fragment),zs=d(),Da=o("p"),Ws=l("Deletes a file in the given repo."),Gs=d(),j(nt.$$.fragment),Bs=d(),Se=o("div"),j(io.$$.fragment),Ks=d(),Fa=o("p"),Js=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Qs=d(),j(st.$$.fragment),Xs=d(),Me=o("div"),j(lo.$$.fragment),Ys=d(),Na=o("p"),Zs=l("Edits a comment on a discussion / pull request"),er=d(),j(rt.$$.fragment),tr=d(),it=o("div"),j(co.$$.fragment),or=d(),Ta=o("p"),ar=l("Gets all valid dataset tags as a nested namespace object."),nr=d(),be=o("div"),j(po.$$.fragment),sr=d(),Ia=o("p"),rr=l("Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),ir=d(),ia=o("p"),lr=l("Returns: "),la=o("a"),cr=l("DiscussionWithDetails"),pr=d(),j(lt.$$.fragment),gr=d(),ct=o("div"),j(go.$$.fragment),dr=d(),Pa=o("p"),hr=l(`Returns the repository name for a given model ID and optional
organization.`),ur=d(),pt=o("div"),j(ho.$$.fragment),fr=d(),La=o("p"),mr=l("Gets all valid model tags as a nested namespace object"),_r=d(),gt=o("div"),j(uo.$$.fragment),br=d(),fo=o("p"),vr=l(`Fetches discussions and pull requests for the given repo. The response is
paginated with `),ca=o("a"),$r=l("Pagination"),yr=l("."),Er=d(),ve=o("div"),j(mo.$$.fragment),kr=d(),Oa=o("p"),wr=l("Hides a comment on a discussion / pull request."),Ar=d(),Ra=o("p"),xr=l("Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Hr=d(),j(dt.$$.fragment),qr=d(),$e=o("div"),j(_o.$$.fragment),jr=d(),Ca=o("p"),Dr=l("Get the public list of all the datasets on huggingface.co"),Fr=d(),j(ht.$$.fragment),Nr=d(),j(ut.$$.fragment),Tr=d(),ft=o("div"),j(bo.$$.fragment),Ir=d(),Sa=o("p"),Pr=l("Get the public list of all the metrics on huggingface.co"),Lr=d(),ye=o("div"),j(vo.$$.fragment),Or=d(),Ma=o("p"),Rr=l("Get the public list of all the models on huggingface.co"),Cr=d(),j(mt.$$.fragment),Sr=d(),j(_t.$$.fragment),Mr=d(),bt=o("div"),j($o.$$.fragment),Ur=d(),Ua=o("p"),Vr=l("Get the list of files in a given repo."),zr=d(),Ue=o("div"),j(yo.$$.fragment),Wr=d(),Va=o("p"),Gr=l("Merges a pull request."),Br=d(),j(vt.$$.fragment),Kr=d(),Ee=o("div"),j(Eo.$$.fragment),Jr=d(),za=o("p"),Qr=l("Get info on one specific model on huggingface.co"),Xr=d(),Wa=o("p"),Yr=l("Model can be private if you pass an acceptable token or are logged in."),Zr=d(),j($t.$$.fragment),ei=d(),ke=o("div"),j(ko.$$.fragment),ti=d(),Ga=o("p"),oi=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ai=d(),wo=o("p"),ni=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ao=o("a"),si=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ri=l("."),ii=d(),j(yt.$$.fragment),li=d(),we=o("div"),j(xo.$$.fragment),ci=d(),Ba=o("p"),pi=l("Renames a discussion"),gi=d(),j(Et.$$.fragment),di=d(),j(kt.$$.fragment),hi=d(),Ve=o("div"),j(Ho.$$.fragment),ui=d(),Ka=o("p"),fi=l("Get the info object for a given repo of a given type."),mi=d(),j(wt.$$.fragment),_i=d(),At=o("div"),j(qo.$$.fragment),bi=d(),Ja=o("p"),vi=l(`Saves the passed access token so git can correctly authenticate the
user.`),$i=d(),Ae=o("div"),j(jo.$$.fragment),yi=d(),Qa=o("p"),Ei=l("Get info on one specific Space on huggingface.co."),ki=d(),Xa=o("p"),wi=l("Space can be private if you pass an acceptable token."),Ai=d(),j(xt.$$.fragment),xi=d(),Ht=o("div"),j(Do.$$.fragment),Hi=d(),Ya=o("p"),qi=l("Resets the user\u2019s access token."),ji=d(),ze=o("div"),j(Fo.$$.fragment),Di=d(),Za=o("p"),Fi=l("Update the visibility setting of a repository."),Ni=d(),j(qt.$$.fragment),Ti=d(),xe=o("div"),j(No.$$.fragment),Ii=d(),en=o("p"),Pi=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Li=d(),j(jt.$$.fragment),Oi=d(),j(Dt.$$.fragment),Ri=d(),re=o("div"),j(To.$$.fragment),Ci=d(),tn=o("p"),Si=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Mi=d(),on=o("p"),Ui=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Vi=d(),Io=o("p"),zi=l("Uses "),an=o("code"),Wi=l("HfApi.create_commit"),Gi=l(" under the hood."),Bi=d(),j(Ft.$$.fragment),Ki=d(),j(Nt.$$.fragment),Ji=d(),Tt=o("div"),j(Po.$$.fragment),Qi=d(),nn=o("p"),Xi=l("Call HF API to know \u201Cwhoami\u201D."),On=d(),Ke=o("h2"),It=o("a"),sn=o("span"),j(Lo.$$.fragment),Yi=d(),rn=o("span"),Zi=l("Hugging Face local storage"),Rn=d(),Oo=o("p"),ln=o("code"),el=l("huggingface_hub"),tl=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Cn=d(),Pt=o("p"),ol=l("It does this using the "),pa=o("a"),al=l("HfFolder"),nl=l(" utility, which saves data at the root of the user."),Sn=d(),de=o("div"),j(Ro.$$.fragment),sl=d(),Lt=o("div"),j(Co.$$.fragment),rl=d(),cn=o("p"),il=l("Deletes the token from storage. Does not fail if token does not exist."),ll=d(),We=o("div"),j(So.$$.fragment),cl=d(),pn=o("p"),pl=l("Get token or None if not existent."),gl=d(),Mo=o("p"),dl=l("Note that a token can be also provided using the "),gn=o("code"),hl=l("HUGGING_FACE_HUB_TOKEN"),ul=l(`
environment variable.`),fl=d(),Ot=o("div"),j(Uo.$$.fragment),ml=d(),dn=o("p"),_l=l("Save token, creating folder as needed."),Mn=d(),Je=o("h2"),Rt=o("a"),hn=o("span"),j(Vo.$$.fragment),bl=d(),un=o("span"),vl=l("Filtering helpers"),Un=d(),Ct=o("p"),$l=l("Some helpers to filter repositories on the Hub are available in the "),fn=o("code"),yl=l("huggingface_hub"),El=l(" package."),Vn=d(),De=o("div"),j(zo.$$.fragment),kl=d(),mn=o("p"),wl=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Al=d(),j(St.$$.fragment),zn=d(),Fe=o("div"),j(Wo.$$.fragment),xl=d(),_n=o("p"),Hl=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ql=d(),j(Mt.$$.fragment),Wn=d(),Ne=o("div"),j(Go.$$.fragment),jl=d(),bn=o("p"),Dl=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Fl=d(),j(Ut.$$.fragment),Gn=d(),Te=o("div"),j(Bo.$$.fragment),Nl=d(),vn=o("p"),Tl=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Il=d(),j(Vt.$$.fragment),this.h()},l(s){const H=Lc('[data-svelte="svelte-1phssyn"]',document.head);p=a(H,"META",{name:!0,content:!0}),H.forEach(t),v=h(s),f=a(s,"H1",{class:!0});var Ko=n(f);i=a(Ko,"A",{id:!0,class:!0,href:!0});var $n=n(i);g=a($n,"SPAN",{});var yn=n(g);D(r.$$.fragment,yn),yn.forEach(t),$n.forEach(t),u=h(Ko),q=a(Ko,"SPAN",{});var En=n(q);_=c(En,"Hugging Face Hub API"),En.forEach(t),Ko.forEach(t),A=h(s),y=a(s,"P",{});var Jo=n(y);b=c(Jo,"Below is the documentation for the "),k=a(Jo,"CODE",{});var kn=n(k);P=c(kn,"HfApi"),kn.forEach(t),L=c(Jo,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Jo.forEach(t),O=h(s),m=a(s,"P",{});var Qo=n(m);x=c(Qo,"All methods from the "),V=a(Qo,"CODE",{});var wn=n(V);U=c(wn,"HfApi"),wn.forEach(t),R=c(Qo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Qo.forEach(t),B=h(s),W=a(s,"P",{});var An=n(W);E=c(An,"The following approach uses the method from the root of the package:"),An.forEach(t),M=h(s),D(C.$$.fragment,s),X=h(s),ee=a(s,"P",{});var Xo=n(ee);Y=c(Xo,"The following approach uses the "),J=a(Xo,"CODE",{});var xn=n(J);Z=c(xn,"HfApi"),xn.forEach(t),ae=c(Xo," class:"),Xo.forEach(t),K=h(s),D(Q.$$.fragment,s),oe=h(s),ne=a(s,"P",{});var Yo=n(ne);Oe=c(Yo,"Using the "),ce=a(Yo,"CODE",{});var Hn=n(ce);Ge=c(Hn,"HfApi"),Hn.forEach(t),Re=c(Yo," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Yo.forEach(t),qe=h(s),S=a(s,"DIV",{class:!0});var z=n(S);D(ge.$$.fragment,z),oa=h(z),ie=a(z,"DIV",{class:!0});var Ie=n(ie);D(je.$$.fragment,Ie),aa=h(Ie),Be=a(Ie,"P",{});var qn=n(Be);na=c(qn,"Closes or re-opens a discussion or pull request."),qn.forEach(t),hs=h(Ie),D(Qe.$$.fragment,Ie),us=h(Ie),D(Xe.$$.fragment,Ie),Ie.forEach(t),fs=h(z),me=a(z,"DIV",{class:!0});var Pe=n(me);D(eo.$$.fragment,Pe),ms=h(Pe),ka=a(Pe,"P",{});var jn=n(ka);_s=c(jn,"Creates a new comment on the given discussion"),jn.forEach(t),bs=h(Pe),D(Ye.$$.fragment,Pe),vs=h(Pe),D(Ze.$$.fragment,Pe),Pe.forEach(t),$s=h(z),et=a(z,"DIV",{class:!0});var Zo=n(et);D(to.$$.fragment,Zo),ys=h(Zo),wa=a(Zo,"P",{});var Dn=n(wa);Es=c(Dn,"Creates a commit in the given repo, deleting & uploading files as needed."),Dn.forEach(t),Zo.forEach(t),ks=h(z),pe=a(z,"DIV",{class:!0});var he=n(pe);D(oo.$$.fragment,he),ws=h(he),Aa=a(he,"P",{});var Fn=n(Aa);As=c(Fn,"Creates a discussion or pull request."),Fn.forEach(t),xs=h(he),ao=a(he,"P",{});var ea=n(ao);Hs=c(ea,"Pull Requests created programmatically will be in "),xa=a(ea,"CODE",{});var Nn=n(xa);qs=c(Nn,'"draft"'),Nn.forEach(t),js=c(ea," status."),ea.forEach(t),Ds=h(he),sa=a(he,"P",{});var ga=n(sa);Fs=c(ga,"Returns: "),ra=a(ga,"A",{href:!0});var Tn=n(ra);Ns=c(Tn,"DiscussionWithDetails"),Tn.forEach(t),ga.forEach(t),Ts=h(he),D(tt.$$.fragment,he),he.forEach(t),Is=h(z),ot=a(z,"DIV",{class:!0});var ta=n(ot);D(no.$$.fragment,ta),Ps=h(ta),Ha=a(ta,"P",{});var In=n(Ha);Ls=c(In,"Create an empty repo on the HuggingFace Hub."),In.forEach(t),ta.forEach(t),Os=h(z),_e=a(z,"DIV",{class:!0});var Le=n(_e);D(so.$$.fragment,Le),Rs=h(Le),qa=a(Le,"P",{});var Pn=n(qa);Cs=c(Pn,"Get info on one specific dataset on huggingface.co."),Pn.forEach(t),Ss=h(Le),ja=a(Le,"P",{});var Ln=n(ja);Ms=c(Ln,"Dataset can be private if you pass an acceptable token."),Ln.forEach(t),Us=h(Le),D(at.$$.fragment,Le),Le.forEach(t),Vs=h(z),Ce=a(z,"DIV",{class:!0});var da=n(Ce);D(ro.$$.fragment,da),zs=h(da),Da=a(da,"P",{});var Rl=n(Da);Ws=c(Rl,"Deletes a file in the given repo."),Rl.forEach(t),Gs=h(da),D(nt.$$.fragment,da),da.forEach(t),Bs=h(z),Se=a(z,"DIV",{class:!0});var ha=n(Se);D(io.$$.fragment,ha),Ks=h(ha),Fa=a(ha,"P",{});var Cl=n(Fa);Js=c(Cl,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Cl.forEach(t),Qs=h(ha),D(st.$$.fragment,ha),ha.forEach(t),Xs=h(z),Me=a(z,"DIV",{class:!0});var ua=n(Me);D(lo.$$.fragment,ua),Ys=h(ua),Na=a(ua,"P",{});var Sl=n(Na);Zs=c(Sl,"Edits a comment on a discussion / pull request"),Sl.forEach(t),er=h(ua),D(rt.$$.fragment,ua),ua.forEach(t),tr=h(z),it=a(z,"DIV",{class:!0});var Kn=n(it);D(co.$$.fragment,Kn),or=h(Kn),Ta=a(Kn,"P",{});var Ml=n(Ta);ar=c(Ml,"Gets all valid dataset tags as a nested namespace object."),Ml.forEach(t),Kn.forEach(t),nr=h(z),be=a(z,"DIV",{class:!0});var zt=n(be);D(po.$$.fragment,zt),sr=h(zt),Ia=a(zt,"P",{});var Ul=n(Ia);rr=c(Ul,"Fetches a discussion\u2019s / pull request\u2019s details from the Hub"),Ul.forEach(t),ir=h(zt),ia=a(zt,"P",{});var Pl=n(ia);lr=c(Pl,"Returns: "),la=a(Pl,"A",{href:!0});var Vl=n(la);cr=c(Vl,"DiscussionWithDetails"),Vl.forEach(t),Pl.forEach(t),pr=h(zt),D(lt.$$.fragment,zt),zt.forEach(t),gr=h(z),ct=a(z,"DIV",{class:!0});var Jn=n(ct);D(go.$$.fragment,Jn),dr=h(Jn),Pa=a(Jn,"P",{});var zl=n(Pa);hr=c(zl,`Returns the repository name for a given model ID and optional
organization.`),zl.forEach(t),Jn.forEach(t),ur=h(z),pt=a(z,"DIV",{class:!0});var Qn=n(pt);D(ho.$$.fragment,Qn),fr=h(Qn),La=a(Qn,"P",{});var Wl=n(La);mr=c(Wl,"Gets all valid model tags as a nested namespace object"),Wl.forEach(t),Qn.forEach(t),_r=h(z),gt=a(z,"DIV",{class:!0});var Xn=n(gt);D(uo.$$.fragment,Xn),br=h(Xn),fo=a(Xn,"P",{});var Yn=n(fo);vr=c(Yn,`Fetches discussions and pull requests for the given repo. The response is
paginated with `),ca=a(Yn,"A",{href:!0});var Gl=n(ca);$r=c(Gl,"Pagination"),Gl.forEach(t),yr=c(Yn,"."),Yn.forEach(t),Xn.forEach(t),Er=h(z),ve=a(z,"DIV",{class:!0});var Wt=n(ve);D(mo.$$.fragment,Wt),kr=h(Wt),Oa=a(Wt,"P",{});var Bl=n(Oa);wr=c(Bl,"Hides a comment on a discussion / pull request."),Bl.forEach(t),Ar=h(Wt),Ra=a(Wt,"P",{});var Kl=n(Ra);xr=c(Kl,"Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Kl.forEach(t),Hr=h(Wt),D(dt.$$.fragment,Wt),Wt.forEach(t),qr=h(z),$e=a(z,"DIV",{class:!0});var Gt=n($e);D(_o.$$.fragment,Gt),jr=h(Gt),Ca=a(Gt,"P",{});var Jl=n(Ca);Dr=c(Jl,"Get the public list of all the datasets on huggingface.co"),Jl.forEach(t),Fr=h(Gt),D(ht.$$.fragment,Gt),Nr=h(Gt),D(ut.$$.fragment,Gt),Gt.forEach(t),Tr=h(z),ft=a(z,"DIV",{class:!0});var Zn=n(ft);D(bo.$$.fragment,Zn),Ir=h(Zn),Sa=a(Zn,"P",{});var Ql=n(Sa);Pr=c(Ql,"Get the public list of all the metrics on huggingface.co"),Ql.forEach(t),Zn.forEach(t),Lr=h(z),ye=a(z,"DIV",{class:!0});var Bt=n(ye);D(vo.$$.fragment,Bt),Or=h(Bt),Ma=a(Bt,"P",{});var Xl=n(Ma);Rr=c(Xl,"Get the public list of all the models on huggingface.co"),Xl.forEach(t),Cr=h(Bt),D(mt.$$.fragment,Bt),Sr=h(Bt),D(_t.$$.fragment,Bt),Bt.forEach(t),Mr=h(z),bt=a(z,"DIV",{class:!0});var es=n(bt);D($o.$$.fragment,es),Ur=h(es),Ua=a(es,"P",{});var Yl=n(Ua);Vr=c(Yl,"Get the list of files in a given repo."),Yl.forEach(t),es.forEach(t),zr=h(z),Ue=a(z,"DIV",{class:!0});var fa=n(Ue);D(yo.$$.fragment,fa),Wr=h(fa),Va=a(fa,"P",{});var Zl=n(Va);Gr=c(Zl,"Merges a pull request."),Zl.forEach(t),Br=h(fa),D(vt.$$.fragment,fa),fa.forEach(t),Kr=h(z),Ee=a(z,"DIV",{class:!0});var Kt=n(Ee);D(Eo.$$.fragment,Kt),Jr=h(Kt),za=a(Kt,"P",{});var ec=n(za);Qr=c(ec,"Get info on one specific model on huggingface.co"),ec.forEach(t),Xr=h(Kt),Wa=a(Kt,"P",{});var tc=n(Wa);Yr=c(tc,"Model can be private if you pass an acceptable token or are logged in."),tc.forEach(t),Zr=h(Kt),D($t.$$.fragment,Kt),Kt.forEach(t),ei=h(z),ke=a(z,"DIV",{class:!0});var Jt=n(ke);D(ko.$$.fragment,Jt),ti=h(Jt),Ga=a(Jt,"P",{});var oc=n(Ga);oi=c(oc,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),oc.forEach(t),ai=h(Jt),wo=a(Jt,"P",{});var ts=n(wo);ni=c(ts,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ao=a(ts,"A",{href:!0,rel:!0});var ac=n(Ao);si=c(ac,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ac.forEach(t),ri=c(ts,"."),ts.forEach(t),ii=h(Jt),D(yt.$$.fragment,Jt),Jt.forEach(t),li=h(z),we=a(z,"DIV",{class:!0});var Qt=n(we);D(xo.$$.fragment,Qt),ci=h(Qt),Ba=a(Qt,"P",{});var nc=n(Ba);pi=c(nc,"Renames a discussion"),nc.forEach(t),gi=h(Qt),D(Et.$$.fragment,Qt),di=h(Qt),D(kt.$$.fragment,Qt),Qt.forEach(t),hi=h(z),Ve=a(z,"DIV",{class:!0});var ma=n(Ve);D(Ho.$$.fragment,ma),ui=h(ma),Ka=a(ma,"P",{});var sc=n(Ka);fi=c(sc,"Get the info object for a given repo of a given type."),sc.forEach(t),mi=h(ma),D(wt.$$.fragment,ma),ma.forEach(t),_i=h(z),At=a(z,"DIV",{class:!0});var os=n(At);D(qo.$$.fragment,os),bi=h(os),Ja=a(os,"P",{});var rc=n(Ja);vi=c(rc,`Saves the passed access token so git can correctly authenticate the
user.`),rc.forEach(t),os.forEach(t),$i=h(z),Ae=a(z,"DIV",{class:!0});var Xt=n(Ae);D(jo.$$.fragment,Xt),yi=h(Xt),Qa=a(Xt,"P",{});var ic=n(Qa);Ei=c(ic,"Get info on one specific Space on huggingface.co."),ic.forEach(t),ki=h(Xt),Xa=a(Xt,"P",{});var lc=n(Xa);wi=c(lc,"Space can be private if you pass an acceptable token."),lc.forEach(t),Ai=h(Xt),D(xt.$$.fragment,Xt),Xt.forEach(t),xi=h(z),Ht=a(z,"DIV",{class:!0});var as=n(Ht);D(Do.$$.fragment,as),Hi=h(as),Ya=a(as,"P",{});var cc=n(Ya);qi=c(cc,"Resets the user\u2019s access token."),cc.forEach(t),as.forEach(t),ji=h(z),ze=a(z,"DIV",{class:!0});var _a=n(ze);D(Fo.$$.fragment,_a),Di=h(_a),Za=a(_a,"P",{});var pc=n(Za);Fi=c(pc,"Update the visibility setting of a repository."),pc.forEach(t),Ni=h(_a),D(qt.$$.fragment,_a),_a.forEach(t),Ti=h(z),xe=a(z,"DIV",{class:!0});var Yt=n(xe);D(No.$$.fragment,Yt),Ii=h(Yt),en=a(Yt,"P",{});var gc=n(en);Pi=c(gc,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),gc.forEach(t),Li=h(Yt),D(jt.$$.fragment,Yt),Oi=h(Yt),D(Dt.$$.fragment,Yt),Yt.forEach(t),Ri=h(z),re=a(z,"DIV",{class:!0});var He=n(re);D(To.$$.fragment,He),Ci=h(He),tn=a(He,"P",{});var dc=n(tn);Si=c(dc,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),dc.forEach(t),Mi=h(He),on=a(He,"P",{});var hc=n(on);Ui=c(hc,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),hc.forEach(t),Vi=h(He),Io=a(He,"P",{});var ns=n(Io);zi=c(ns,"Uses "),an=a(ns,"CODE",{});var uc=n(an);Wi=c(uc,"HfApi.create_commit"),uc.forEach(t),Gi=c(ns," under the hood."),ns.forEach(t),Bi=h(He),D(Ft.$$.fragment,He),Ki=h(He),D(Nt.$$.fragment,He),He.forEach(t),Ji=h(z),Tt=a(z,"DIV",{class:!0});var ss=n(Tt);D(Po.$$.fragment,ss),Qi=h(ss),nn=a(ss,"P",{});var fc=n(nn);Xi=c(fc,"Call HF API to know \u201Cwhoami\u201D."),fc.forEach(t),ss.forEach(t),z.forEach(t),On=h(s),Ke=a(s,"H2",{class:!0});var rs=n(Ke);It=a(rs,"A",{id:!0,class:!0,href:!0});var mc=n(It);sn=a(mc,"SPAN",{});var _c=n(sn);D(Lo.$$.fragment,_c),_c.forEach(t),mc.forEach(t),Yi=h(rs),rn=a(rs,"SPAN",{});var bc=n(rn);Zi=c(bc,"Hugging Face local storage"),bc.forEach(t),rs.forEach(t),Rn=h(s),Oo=a(s,"P",{});var Ll=n(Oo);ln=a(Ll,"CODE",{});var vc=n(ln);el=c(vc,"huggingface_hub"),vc.forEach(t),tl=c(Ll,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ll.forEach(t),Cn=h(s),Pt=a(s,"P",{});var is=n(Pt);ol=c(is,"It does this using the "),pa=a(is,"A",{href:!0});var $c=n(pa);al=c($c,"HfFolder"),$c.forEach(t),nl=c(is," utility, which saves data at the root of the user."),is.forEach(t),Sn=h(s),de=a(s,"DIV",{class:!0});var Zt=n(de);D(Ro.$$.fragment,Zt),sl=h(Zt),Lt=a(Zt,"DIV",{class:!0});var ls=n(Lt);D(Co.$$.fragment,ls),rl=h(ls),cn=a(ls,"P",{});var yc=n(cn);il=c(yc,"Deletes the token from storage. Does not fail if token does not exist."),yc.forEach(t),ls.forEach(t),ll=h(Zt),We=a(Zt,"DIV",{class:!0});var ba=n(We);D(So.$$.fragment,ba),cl=h(ba),pn=a(ba,"P",{});var Ec=n(pn);pl=c(Ec,"Get token or None if not existent."),Ec.forEach(t),gl=h(ba),Mo=a(ba,"P",{});var cs=n(Mo);dl=c(cs,"Note that a token can be also provided using the "),gn=a(cs,"CODE",{});var kc=n(gn);hl=c(kc,"HUGGING_FACE_HUB_TOKEN"),kc.forEach(t),ul=c(cs,`
environment variable.`),cs.forEach(t),ba.forEach(t),fl=h(Zt),Ot=a(Zt,"DIV",{class:!0});var ps=n(Ot);D(Uo.$$.fragment,ps),ml=h(ps),dn=a(ps,"P",{});var wc=n(dn);_l=c(wc,"Save token, creating folder as needed."),wc.forEach(t),ps.forEach(t),Zt.forEach(t),Mn=h(s),Je=a(s,"H2",{class:!0});var gs=n(Je);Rt=a(gs,"A",{id:!0,class:!0,href:!0});var Ac=n(Rt);hn=a(Ac,"SPAN",{});var xc=n(hn);D(Vo.$$.fragment,xc),xc.forEach(t),Ac.forEach(t),bl=h(gs),un=a(gs,"SPAN",{});var Hc=n(un);vl=c(Hc,"Filtering helpers"),Hc.forEach(t),gs.forEach(t),Un=h(s),Ct=a(s,"P",{});var ds=n(Ct);$l=c(ds,"Some helpers to filter repositories on the Hub are available in the "),fn=a(ds,"CODE",{});var qc=n(fn);yl=c(qc,"huggingface_hub"),qc.forEach(t),El=c(ds," package."),ds.forEach(t),Vn=h(s),De=a(s,"DIV",{class:!0});var va=n(De);D(zo.$$.fragment,va),kl=h(va),mn=a(va,"P",{});var jc=n(mn);wl=c(jc,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),jc.forEach(t),Al=h(va),D(St.$$.fragment,va),va.forEach(t),zn=h(s),Fe=a(s,"DIV",{class:!0});var $a=n(Fe);D(Wo.$$.fragment,$a),xl=h($a),_n=a($a,"P",{});var Dc=n(_n);Hl=c(Dc,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Dc.forEach(t),ql=h($a),D(Mt.$$.fragment,$a),$a.forEach(t),Wn=h(s),Ne=a(s,"DIV",{class:!0});var ya=n(Ne);D(Go.$$.fragment,ya),jl=h(ya),bn=a(ya,"P",{});var Fc=n(bn);Dl=c(Fc,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Fc.forEach(t),Fl=h(ya),D(Ut.$$.fragment,ya),ya.forEach(t),Gn=h(s),Te=a(s,"DIV",{class:!0});var Ea=n(Te);D(Bo.$$.fragment,Ea),Nl=h(Ea),vn=a(Ea,"P",{});var Nc=n(vn);Tl=c(Nc,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Nc.forEach(t),Il=h(Ea),D(Vt.$$.fragment,Ea),Ea.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(mp)),$(i,"id","huggingface_hub.HfApi"),$(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(i,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ra,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(la,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ca,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.Pagination"),$(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ao,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(Ao,"rel","nofollow"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(It,"id","huggingface_hub.HfFolder"),$(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(It,"href","#huggingface_hub.HfFolder"),$(Ke,"class","relative group"),$(pa,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Rt,"id","huggingface_hub.DatasetFilter"),$(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Rt,"href","#huggingface_hub.DatasetFilter"),$(Je,"class","relative group"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,H){e(document.head,p),w(s,v,H),w(s,f,H),e(f,i),e(i,g),F(r,g,null),e(f,u),e(f,q),e(q,_),w(s,A,H),w(s,y,H),e(y,b),e(y,k),e(k,P),e(y,L),w(s,O,H),w(s,m,H),e(m,x),e(m,V),e(V,U),e(m,R),w(s,B,H),w(s,W,H),e(W,E),w(s,M,H),F(C,s,H),w(s,X,H),w(s,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),w(s,K,H),F(Q,s,H),w(s,oe,H),w(s,ne,H),e(ne,Oe),e(ne,ce),e(ce,Ge),e(ne,Re),w(s,qe,H),w(s,S,H),F(ge,S,null),e(S,oa),e(S,ie),F(je,ie,null),e(ie,aa),e(ie,Be),e(Be,na),e(ie,hs),F(Qe,ie,null),e(ie,us),F(Xe,ie,null),e(S,fs),e(S,me),F(eo,me,null),e(me,ms),e(me,ka),e(ka,_s),e(me,bs),F(Ye,me,null),e(me,vs),F(Ze,me,null),e(S,$s),e(S,et),F(to,et,null),e(et,ys),e(et,wa),e(wa,Es),e(S,ks),e(S,pe),F(oo,pe,null),e(pe,ws),e(pe,Aa),e(Aa,As),e(pe,xs),e(pe,ao),e(ao,Hs),e(ao,xa),e(xa,qs),e(ao,js),e(pe,Ds),e(pe,sa),e(sa,Fs),e(sa,ra),e(ra,Ns),e(pe,Ts),F(tt,pe,null),e(S,Is),e(S,ot),F(no,ot,null),e(ot,Ps),e(ot,Ha),e(Ha,Ls),e(S,Os),e(S,_e),F(so,_e,null),e(_e,Rs),e(_e,qa),e(qa,Cs),e(_e,Ss),e(_e,ja),e(ja,Ms),e(_e,Us),F(at,_e,null),e(S,Vs),e(S,Ce),F(ro,Ce,null),e(Ce,zs),e(Ce,Da),e(Da,Ws),e(Ce,Gs),F(nt,Ce,null),e(S,Bs),e(S,Se),F(io,Se,null),e(Se,Ks),e(Se,Fa),e(Fa,Js),e(Se,Qs),F(st,Se,null),e(S,Xs),e(S,Me),F(lo,Me,null),e(Me,Ys),e(Me,Na),e(Na,Zs),e(Me,er),F(rt,Me,null),e(S,tr),e(S,it),F(co,it,null),e(it,or),e(it,Ta),e(Ta,ar),e(S,nr),e(S,be),F(po,be,null),e(be,sr),e(be,Ia),e(Ia,rr),e(be,ir),e(be,ia),e(ia,lr),e(ia,la),e(la,cr),e(be,pr),F(lt,be,null),e(S,gr),e(S,ct),F(go,ct,null),e(ct,dr),e(ct,Pa),e(Pa,hr),e(S,ur),e(S,pt),F(ho,pt,null),e(pt,fr),e(pt,La),e(La,mr),e(S,_r),e(S,gt),F(uo,gt,null),e(gt,br),e(gt,fo),e(fo,vr),e(fo,ca),e(ca,$r),e(fo,yr),e(S,Er),e(S,ve),F(mo,ve,null),e(ve,kr),e(ve,Oa),e(Oa,wr),e(ve,Ar),e(ve,Ra),e(Ra,xr),e(ve,Hr),F(dt,ve,null),e(S,qr),e(S,$e),F(_o,$e,null),e($e,jr),e($e,Ca),e(Ca,Dr),e($e,Fr),F(ht,$e,null),e($e,Nr),F(ut,$e,null),e(S,Tr),e(S,ft),F(bo,ft,null),e(ft,Ir),e(ft,Sa),e(Sa,Pr),e(S,Lr),e(S,ye),F(vo,ye,null),e(ye,Or),e(ye,Ma),e(Ma,Rr),e(ye,Cr),F(mt,ye,null),e(ye,Sr),F(_t,ye,null),e(S,Mr),e(S,bt),F($o,bt,null),e(bt,Ur),e(bt,Ua),e(Ua,Vr),e(S,zr),e(S,Ue),F(yo,Ue,null),e(Ue,Wr),e(Ue,Va),e(Va,Gr),e(Ue,Br),F(vt,Ue,null),e(S,Kr),e(S,Ee),F(Eo,Ee,null),e(Ee,Jr),e(Ee,za),e(za,Qr),e(Ee,Xr),e(Ee,Wa),e(Wa,Yr),e(Ee,Zr),F($t,Ee,null),e(S,ei),e(S,ke),F(ko,ke,null),e(ke,ti),e(ke,Ga),e(Ga,oi),e(ke,ai),e(ke,wo),e(wo,ni),e(wo,Ao),e(Ao,si),e(wo,ri),e(ke,ii),F(yt,ke,null),e(S,li),e(S,we),F(xo,we,null),e(we,ci),e(we,Ba),e(Ba,pi),e(we,gi),F(Et,we,null),e(we,di),F(kt,we,null),e(S,hi),e(S,Ve),F(Ho,Ve,null),e(Ve,ui),e(Ve,Ka),e(Ka,fi),e(Ve,mi),F(wt,Ve,null),e(S,_i),e(S,At),F(qo,At,null),e(At,bi),e(At,Ja),e(Ja,vi),e(S,$i),e(S,Ae),F(jo,Ae,null),e(Ae,yi),e(Ae,Qa),e(Qa,Ei),e(Ae,ki),e(Ae,Xa),e(Xa,wi),e(Ae,Ai),F(xt,Ae,null),e(S,xi),e(S,Ht),F(Do,Ht,null),e(Ht,Hi),e(Ht,Ya),e(Ya,qi),e(S,ji),e(S,ze),F(Fo,ze,null),e(ze,Di),e(ze,Za),e(Za,Fi),e(ze,Ni),F(qt,ze,null),e(S,Ti),e(S,xe),F(No,xe,null),e(xe,Ii),e(xe,en),e(en,Pi),e(xe,Li),F(jt,xe,null),e(xe,Oi),F(Dt,xe,null),e(S,Ri),e(S,re),F(To,re,null),e(re,Ci),e(re,tn),e(tn,Si),e(re,Mi),e(re,on),e(on,Ui),e(re,Vi),e(re,Io),e(Io,zi),e(Io,an),e(an,Wi),e(Io,Gi),e(re,Bi),F(Ft,re,null),e(re,Ki),F(Nt,re,null),e(S,Ji),e(S,Tt),F(Po,Tt,null),e(Tt,Qi),e(Tt,nn),e(nn,Xi),w(s,On,H),w(s,Ke,H),e(Ke,It),e(It,sn),F(Lo,sn,null),e(Ke,Yi),e(Ke,rn),e(rn,Zi),w(s,Rn,H),w(s,Oo,H),e(Oo,ln),e(ln,el),e(Oo,tl),w(s,Cn,H),w(s,Pt,H),e(Pt,ol),e(Pt,pa),e(pa,al),e(Pt,nl),w(s,Sn,H),w(s,de,H),F(Ro,de,null),e(de,sl),e(de,Lt),F(Co,Lt,null),e(Lt,rl),e(Lt,cn),e(cn,il),e(de,ll),e(de,We),F(So,We,null),e(We,cl),e(We,pn),e(pn,pl),e(We,gl),e(We,Mo),e(Mo,dl),e(Mo,gn),e(gn,hl),e(Mo,ul),e(de,fl),e(de,Ot),F(Uo,Ot,null),e(Ot,ml),e(Ot,dn),e(dn,_l),w(s,Mn,H),w(s,Je,H),e(Je,Rt),e(Rt,hn),F(Vo,hn,null),e(Je,bl),e(Je,un),e(un,vl),w(s,Un,H),w(s,Ct,H),e(Ct,$l),e(Ct,fn),e(fn,yl),e(Ct,El),w(s,Vn,H),w(s,De,H),F(zo,De,null),e(De,kl),e(De,mn),e(mn,wl),e(De,Al),F(St,De,null),w(s,zn,H),w(s,Fe,H),F(Wo,Fe,null),e(Fe,xl),e(Fe,_n),e(_n,Hl),e(Fe,ql),F(Mt,Fe,null),w(s,Wn,H),w(s,Ne,H),F(Go,Ne,null),e(Ne,jl),e(Ne,bn),e(bn,Dl),e(Ne,Fl),F(Ut,Ne,null),w(s,Gn,H),w(s,Te,H),F(Bo,Te,null),e(Te,Nl),e(Te,vn),e(vn,Tl),e(Te,Il),F(Vt,Te,null),Bn=!0},p(s,[H]){const Ko={};H&2&&(Ko.$$scope={dirty:H,ctx:s}),Qe.$set(Ko);const $n={};H&2&&($n.$$scope={dirty:H,ctx:s}),Xe.$set($n);const yn={};H&2&&(yn.$$scope={dirty:H,ctx:s}),Ye.$set(yn);const En={};H&2&&(En.$$scope={dirty:H,ctx:s}),Ze.$set(En);const Jo={};H&2&&(Jo.$$scope={dirty:H,ctx:s}),tt.$set(Jo);const kn={};H&2&&(kn.$$scope={dirty:H,ctx:s}),at.$set(kn);const Qo={};H&2&&(Qo.$$scope={dirty:H,ctx:s}),nt.$set(Qo);const wn={};H&2&&(wn.$$scope={dirty:H,ctx:s}),st.$set(wn);const An={};H&2&&(An.$$scope={dirty:H,ctx:s}),rt.$set(An);const Xo={};H&2&&(Xo.$$scope={dirty:H,ctx:s}),lt.$set(Xo);const xn={};H&2&&(xn.$$scope={dirty:H,ctx:s}),dt.$set(xn);const Yo={};H&2&&(Yo.$$scope={dirty:H,ctx:s}),ht.$set(Yo);const Hn={};H&2&&(Hn.$$scope={dirty:H,ctx:s}),ut.$set(Hn);const z={};H&2&&(z.$$scope={dirty:H,ctx:s}),mt.$set(z);const Ie={};H&2&&(Ie.$$scope={dirty:H,ctx:s}),_t.$set(Ie);const qn={};H&2&&(qn.$$scope={dirty:H,ctx:s}),vt.$set(qn);const Pe={};H&2&&(Pe.$$scope={dirty:H,ctx:s}),$t.$set(Pe);const jn={};H&2&&(jn.$$scope={dirty:H,ctx:s}),yt.$set(jn);const Zo={};H&2&&(Zo.$$scope={dirty:H,ctx:s}),Et.$set(Zo);const Dn={};H&2&&(Dn.$$scope={dirty:H,ctx:s}),kt.$set(Dn);const he={};H&2&&(he.$$scope={dirty:H,ctx:s}),wt.$set(he);const Fn={};H&2&&(Fn.$$scope={dirty:H,ctx:s}),xt.$set(Fn);const ea={};H&2&&(ea.$$scope={dirty:H,ctx:s}),qt.$set(ea);const Nn={};H&2&&(Nn.$$scope={dirty:H,ctx:s}),jt.$set(Nn);const ga={};H&2&&(ga.$$scope={dirty:H,ctx:s}),Dt.$set(ga);const Tn={};H&2&&(Tn.$$scope={dirty:H,ctx:s}),Ft.$set(Tn);const ta={};H&2&&(ta.$$scope={dirty:H,ctx:s}),Nt.$set(ta);const In={};H&2&&(In.$$scope={dirty:H,ctx:s}),St.$set(In);const Le={};H&2&&(Le.$$scope={dirty:H,ctx:s}),Mt.$set(Le);const Pn={};H&2&&(Pn.$$scope={dirty:H,ctx:s}),Ut.$set(Pn);const Ln={};H&2&&(Ln.$$scope={dirty:H,ctx:s}),Vt.$set(Ln)},i(s){Bn||(N(r.$$.fragment,s),N(C.$$.fragment,s),N(Q.$$.fragment,s),N(ge.$$.fragment,s),N(je.$$.fragment,s),N(Qe.$$.fragment,s),N(Xe.$$.fragment,s),N(eo.$$.fragment,s),N(Ye.$$.fragment,s),N(Ze.$$.fragment,s),N(to.$$.fragment,s),N(oo.$$.fragment,s),N(tt.$$.fragment,s),N(no.$$.fragment,s),N(so.$$.fragment,s),N(at.$$.fragment,s),N(ro.$$.fragment,s),N(nt.$$.fragment,s),N(io.$$.fragment,s),N(st.$$.fragment,s),N(lo.$$.fragment,s),N(rt.$$.fragment,s),N(co.$$.fragment,s),N(po.$$.fragment,s),N(lt.$$.fragment,s),N(go.$$.fragment,s),N(ho.$$.fragment,s),N(uo.$$.fragment,s),N(mo.$$.fragment,s),N(dt.$$.fragment,s),N(_o.$$.fragment,s),N(ht.$$.fragment,s),N(ut.$$.fragment,s),N(bo.$$.fragment,s),N(vo.$$.fragment,s),N(mt.$$.fragment,s),N(_t.$$.fragment,s),N($o.$$.fragment,s),N(yo.$$.fragment,s),N(vt.$$.fragment,s),N(Eo.$$.fragment,s),N($t.$$.fragment,s),N(ko.$$.fragment,s),N(yt.$$.fragment,s),N(xo.$$.fragment,s),N(Et.$$.fragment,s),N(kt.$$.fragment,s),N(Ho.$$.fragment,s),N(wt.$$.fragment,s),N(qo.$$.fragment,s),N(jo.$$.fragment,s),N(xt.$$.fragment,s),N(Do.$$.fragment,s),N(Fo.$$.fragment,s),N(qt.$$.fragment,s),N(No.$$.fragment,s),N(jt.$$.fragment,s),N(Dt.$$.fragment,s),N(To.$$.fragment,s),N(Ft.$$.fragment,s),N(Nt.$$.fragment,s),N(Po.$$.fragment,s),N(Lo.$$.fragment,s),N(Ro.$$.fragment,s),N(Co.$$.fragment,s),N(So.$$.fragment,s),N(Uo.$$.fragment,s),N(Vo.$$.fragment,s),N(zo.$$.fragment,s),N(St.$$.fragment,s),N(Wo.$$.fragment,s),N(Mt.$$.fragment,s),N(Go.$$.fragment,s),N(Ut.$$.fragment,s),N(Bo.$$.fragment,s),N(Vt.$$.fragment,s),Bn=!0)},o(s){T(r.$$.fragment,s),T(C.$$.fragment,s),T(Q.$$.fragment,s),T(ge.$$.fragment,s),T(je.$$.fragment,s),T(Qe.$$.fragment,s),T(Xe.$$.fragment,s),T(eo.$$.fragment,s),T(Ye.$$.fragment,s),T(Ze.$$.fragment,s),T(to.$$.fragment,s),T(oo.$$.fragment,s),T(tt.$$.fragment,s),T(no.$$.fragment,s),T(so.$$.fragment,s),T(at.$$.fragment,s),T(ro.$$.fragment,s),T(nt.$$.fragment,s),T(io.$$.fragment,s),T(st.$$.fragment,s),T(lo.$$.fragment,s),T(rt.$$.fragment,s),T(co.$$.fragment,s),T(po.$$.fragment,s),T(lt.$$.fragment,s),T(go.$$.fragment,s),T(ho.$$.fragment,s),T(uo.$$.fragment,s),T(mo.$$.fragment,s),T(dt.$$.fragment,s),T(_o.$$.fragment,s),T(ht.$$.fragment,s),T(ut.$$.fragment,s),T(bo.$$.fragment,s),T(vo.$$.fragment,s),T(mt.$$.fragment,s),T(_t.$$.fragment,s),T($o.$$.fragment,s),T(yo.$$.fragment,s),T(vt.$$.fragment,s),T(Eo.$$.fragment,s),T($t.$$.fragment,s),T(ko.$$.fragment,s),T(yt.$$.fragment,s),T(xo.$$.fragment,s),T(Et.$$.fragment,s),T(kt.$$.fragment,s),T(Ho.$$.fragment,s),T(wt.$$.fragment,s),T(qo.$$.fragment,s),T(jo.$$.fragment,s),T(xt.$$.fragment,s),T(Do.$$.fragment,s),T(Fo.$$.fragment,s),T(qt.$$.fragment,s),T(No.$$.fragment,s),T(jt.$$.fragment,s),T(Dt.$$.fragment,s),T(To.$$.fragment,s),T(Ft.$$.fragment,s),T(Nt.$$.fragment,s),T(Po.$$.fragment,s),T(Lo.$$.fragment,s),T(Ro.$$.fragment,s),T(Co.$$.fragment,s),T(So.$$.fragment,s),T(Uo.$$.fragment,s),T(Vo.$$.fragment,s),T(zo.$$.fragment,s),T(St.$$.fragment,s),T(Wo.$$.fragment,s),T(Mt.$$.fragment,s),T(Go.$$.fragment,s),T(Ut.$$.fragment,s),T(Bo.$$.fragment,s),T(Vt.$$.fragment,s),Bn=!1},d(s){t(p),s&&t(v),s&&t(f),I(r),s&&t(A),s&&t(y),s&&t(O),s&&t(m),s&&t(B),s&&t(W),s&&t(M),I(C,s),s&&t(X),s&&t(ee),s&&t(K),I(Q,s),s&&t(oe),s&&t(ne),s&&t(qe),s&&t(S),I(ge),I(je),I(Qe),I(Xe),I(eo),I(Ye),I(Ze),I(to),I(oo),I(tt),I(no),I(so),I(at),I(ro),I(nt),I(io),I(st),I(lo),I(rt),I(co),I(po),I(lt),I(go),I(ho),I(uo),I(mo),I(dt),I(_o),I(ht),I(ut),I(bo),I(vo),I(mt),I(_t),I($o),I(yo),I(vt),I(Eo),I($t),I(ko),I(yt),I(xo),I(Et),I(kt),I(Ho),I(wt),I(qo),I(jo),I(xt),I(Do),I(Fo),I(qt),I(No),I(jt),I(Dt),I(To),I(Ft),I(Nt),I(Po),s&&t(On),s&&t(Ke),I(Lo),s&&t(Rn),s&&t(Oo),s&&t(Cn),s&&t(Pt),s&&t(Sn),s&&t(de),I(Ro),I(Co),I(So),I(Uo),s&&t(Mn),s&&t(Je),I(Vo),s&&t(Un),s&&t(Ct),s&&t(Vn),s&&t(De),I(zo),I(St),s&&t(zn),s&&t(Fe),I(Wo),I(Mt),s&&t(Wn),s&&t(Ne),I(Go),I(Ut),s&&t(Gn),s&&t(Te),I(Bo),I(Vt)}}}const mp={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function _p(G){return Oc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wp extends Tc{constructor(p){super();Ic(this,p,_p,fp,Pc,{})}}export{wp as default,mp as metadata};
