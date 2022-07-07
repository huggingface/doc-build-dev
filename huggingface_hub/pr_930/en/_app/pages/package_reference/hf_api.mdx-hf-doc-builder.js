import{S as Lp,i as Rp,s as Op,e as o,k as d,w as D,t as l,M as Cp,c as a,d as t,m as h,a as s,x as j,h as c,b as $,G as e,g as k,y as N,q as F,o as T,B as P,v as Sp,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as se}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Tc}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Up(W){let p,v,f,i,g;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function Mp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Vp(W){let p,v,f,i,g;return i=new re({props:{code:`
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function zp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Wp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Gp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Bp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),I=o("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=s(i);g=a(V,"LI",{});var M=s(g);n=a(M,"A",{href:!0});var O=s(n);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var G=s(w);I=a(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function Kp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee,Y,J,Z,ae,B;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),y=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),Y=d(),J=o("li"),Z=o("a"),ae=l("EntryNotFoundError"),B=l(`
If the file to download cannot be found.`),this.h()},l(Q){p=a(Q,"P",{});var te=s(p);v=c(te,"Raises the following errors:"),te.forEach(t),f=h(Q),i=a(Q,"UL",{});var ne=s(i);g=a(ne,"LI",{});var Ce=s(g);n=a(Ce,"A",{href:!0,rel:!0});var fe=s(n);u=a(fe,"CODE",{});var Je=s(u);q=c(Je,"HTTPError"),Je.forEach(t),fe.forEach(t),_=c(Ce,`
if the HuggingFace API returned an error`),Ce.forEach(t),A=h(ne),E=a(ne,"LI",{});var Se=s(E);b=a(Se,"A",{href:!0,rel:!0});var Ne=s(b);w=a(Ne,"CODE",{});var U=s(w);I=c(U,"ValueError"),U.forEach(t),Ne.forEach(t),L=c(Se,`
if some parameter value is invalid`),Se.forEach(t),R=h(ne),m=a(ne,"LI",{});var _e=s(m);x=a(_e,"A",{href:!0});var _a=s(x);V=c(_a,"RepositoryNotFoundError"),_a.forEach(t),M=c(_e,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(_e,"CODE",{});var pe=s(O);K=c(pe,"private"),pe.forEach(t),G=c(_e," and you do not have access."),_e.forEach(t),y=h(ne),S=a(ne,"LI",{});var Fe=s(S);C=a(Fe,"A",{href:!0});var ba=s(C);X=c(ba,"RevisionNotFoundError"),ba.forEach(t),ee=c(Fe,`
If the revision to download from cannot be found.`),Fe.forEach(t),Y=h(ne),J=a(ne,"LI",{});var Qe=s(J);Z=a(Qe,"A",{href:!0});var va=s(Z);ae=c(va,"EntryNotFoundError"),va.forEach(t),B=c(Qe,`
If the file to download cannot be found.`),Qe.forEach(t),ne.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),$(Z,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(Q,te){k(Q,p,te),e(p,v),k(Q,f,te),k(Q,i,te),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G),e(i,y),e(i,S),e(S,C),e(C,X),e(S,ee),e(i,Y),e(i,J),e(J,Z),e(Z,ae),e(J,B)},d(Q){Q&&t(p),Q&&t(f),Q&&t(i)}}}function Jp(W){let p,v,f,i,g,n,u,q,_,A,E;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var I=s(i);g=a(I,"LI",{});var L=s(g);n=a(L,"A",{href:!0});var R=s(n);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function Qp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Xp(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function Yp(W){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
discussions_list = list(get_repo_discussions(repo_id="bert-base-uncased"))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span>discussions_list = <span class="hljs-built_in">list</span>(get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>))`}}),{c(){p=o("p"),v=l("Collecting all discussions of a repo in a list:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Collecting all discussions of a repo in a list:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function Zp(W){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import get_repo_discussions
for discussion in get_repo_discussions(repo_id="bert-base-uncased"):
    print(discussion.num, discussion.title)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_repo_discussions
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> discussion <span class="hljs-keyword">in</span> get_repo_discussions(repo_id=<span class="hljs-string">&quot;bert-base-uncased&quot;</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(discussion.num, discussion.title)`}}),{c(){p=o("p"),v=l("Iterating over discussions of a repo:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Iterating over discussions of a repo:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function eg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function tg(W){let p,v,f,i,g,n,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),n=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),n=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,n,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(n),P(u,_)}}}function og(W){let p,v,f,i,g,n,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),n=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),n=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,n,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(n),P(u,_)}}}function ag(W){let p,v,f,i,g,n,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("filter"),g=l(" argument:"),n=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=s(f);i=c(E,"filter"),E.forEach(t),g=c(A," argument:"),A.forEach(t),n=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,n,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(n),P(u,_)}}}function ng(W){let p,v,f,i,g,n,u,q;return u=new re({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=o("p"),v=l("Example usage with the "),f=o("code"),i=l("search"),g=l(" argument:"),n=d(),D(u.$$.fragment)},l(_){p=a(_,"P",{});var A=s(p);v=c(A,"Example usage with the "),f=a(A,"CODE",{});var E=s(f);i=c(E,"search"),E.forEach(t),g=c(A," argument:"),A.forEach(t),n=h(_),j(u.$$.fragment,_)},m(_,A){k(_,p,A),e(p,v),e(p,f),e(f,i),e(p,g),k(_,n,A),N(u,_,A),q=!0},p:ue,i(_){q||(F(u.$$.fragment,_),q=!0)},o(_){T(u.$$.fragment,_),q=!1},d(_){_&&t(p),_&&t(n),P(u,_)}}}function sg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function rg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),I=o("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=s(i);g=a(V,"LI",{});var M=s(g);n=a(M,"A",{href:!0});var O=s(n);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var G=s(w);I=a(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function ig(W){let p,v,f,i,g,n,u,q,_,A,E;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var I=s(i);g=a(I,"LI",{});var L=s(g);n=a(L,"A",{href:!0});var R=s(n);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function lg(W){let p,v,f,i,g;return i=new re({props:{code:`new_title = "New title, fixing a typo"
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
`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function cg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),this.h()},l(y){p=a(y,"P",{});var S=s(p);v=c(S,"Raises the following errors:"),S.forEach(t),f=h(y),i=a(y,"UL",{});var C=s(i);g=a(C,"LI",{});var X=s(g);n=a(X,"A",{href:!0,rel:!0});var ee=s(n);u=a(ee,"CODE",{});var Y=s(u);q=c(Y,"HTTPError"),Y.forEach(t),ee.forEach(t),_=c(X,`
if the HuggingFace API returned an error`),X.forEach(t),A=h(C),E=a(C,"LI",{});var J=s(E);b=a(J,"A",{href:!0,rel:!0});var Z=s(b);w=a(Z,"CODE",{});var ae=s(w);I=c(ae,"ValueError"),ae.forEach(t),Z.forEach(t),L=c(J,`
if some parameter value is invalid`),J.forEach(t),R=h(C),m=a(C,"LI",{});var B=s(m);x=a(B,"A",{href:!0});var Q=s(x);V=c(Q,"RepositoryNotFoundError"),Q.forEach(t),M=c(B,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(B,"CODE",{});var te=s(O);K=c(te,"private"),te.forEach(t),G=c(B," and you do not have access."),B.forEach(t),C.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(y,S){k(y,p,S),e(p,v),k(y,f,S),k(y,i,S),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G)},d(y){y&&t(p),y&&t(f),y&&t(i)}}}function pg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),I=o("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=s(i);g=a(V,"LI",{});var M=s(g);n=a(M,"A",{href:!0});var O=s(n);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var G=s(w);I=a(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function gg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),b=d(),w=o("li"),I=o("a"),L=l("RevisionNotFoundError"),R=l(`
If the revision to download from cannot be found.`),this.h()},l(m){p=a(m,"P",{});var x=s(p);v=c(x,"Raises the following errors:"),x.forEach(t),f=h(m),i=a(m,"UL",{});var V=s(i);g=a(V,"LI",{});var M=s(g);n=a(M,"A",{href:!0});var O=s(n);u=c(O,"RepositoryNotFoundError"),O.forEach(t),q=c(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(M,"CODE",{});var K=s(_);A=c(K,"private"),K.forEach(t),E=c(M," and you do not have access."),M.forEach(t),b=h(V),w=a(V,"LI",{});var G=s(w);I=a(G,"A",{href:!0});var y=s(I);L=c(y,"RevisionNotFoundError"),y.forEach(t),R=c(G,`
If the revision to download from cannot be found.`),G.forEach(t),V.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(I,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(m,x){k(m,p,x),e(p,v),k(m,f,x),k(m,i,x),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E),e(i,b),e(i,w),e(w,I),e(I,L),e(w,R)},d(m){m&&t(p),m&&t(f),m&&t(i)}}}function dg(W){let p,v,f,i,g,n,u,q,_,A,E;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=l("RepositoryNotFoundError"),q=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=o("code"),A=l("private"),E=l(" and you do not have access."),this.h()},l(b){p=a(b,"P",{});var w=s(p);v=c(w,"Raises the following errors:"),w.forEach(t),f=h(b),i=a(b,"UL",{});var I=s(i);g=a(I,"LI",{});var L=s(g);n=a(L,"A",{href:!0});var R=s(n);u=c(R,"RepositoryNotFoundError"),R.forEach(t),q=c(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),_=a(L,"CODE",{});var m=s(_);A=c(m,"private"),m.forEach(t),E=c(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){$(n,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(b,w){k(b,p,w),e(p,v),k(b,f,w),k(b,i,w),e(i,g),e(g,n),e(n,u),e(g,q),e(g,_),e(_,A),e(g,E)},d(b){b&&t(p),b&&t(f),b&&t(i)}}}function hg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),R=d(),m=o("li"),x=o("a"),V=l("RepositoryNotFoundError"),M=l(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=o("code"),K=l("private"),G=l(" and you do not have access."),y=d(),S=o("li"),C=o("a"),X=l("RevisionNotFoundError"),ee=l(`
If the revision to download from cannot be found.`),this.h()},l(Y){p=a(Y,"P",{});var J=s(p);v=c(J,"Raises the following errors:"),J.forEach(t),f=h(Y),i=a(Y,"UL",{});var Z=s(i);g=a(Z,"LI",{});var ae=s(g);n=a(ae,"A",{href:!0,rel:!0});var B=s(n);u=a(B,"CODE",{});var Q=s(u);q=c(Q,"HTTPError"),Q.forEach(t),B.forEach(t),_=c(ae,`
if the HuggingFace API returned an error`),ae.forEach(t),A=h(Z),E=a(Z,"LI",{});var te=s(E);b=a(te,"A",{href:!0,rel:!0});var ne=s(b);w=a(ne,"CODE",{});var Ce=s(w);I=c(Ce,"ValueError"),Ce.forEach(t),ne.forEach(t),L=c(te,`
if some parameter value is invalid`),te.forEach(t),R=h(Z),m=a(Z,"LI",{});var fe=s(m);x=a(fe,"A",{href:!0});var Je=s(x);V=c(Je,"RepositoryNotFoundError"),Je.forEach(t),M=c(fe,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),O=a(fe,"CODE",{});var Se=s(O);K=c(Se,"private"),Se.forEach(t),G=c(fe," and you do not have access."),fe.forEach(t),y=h(Z),S=a(Z,"LI",{});var Ne=s(S);C=a(Ne,"A",{href:!0});var U=s(C);X=c(U,"RevisionNotFoundError"),U.forEach(t),ee=c(Ne,`
If the revision to download from cannot be found.`),Ne.forEach(t),Z.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow"),$(x,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),$(C,"href","/docs/huggingface_hub/pr_930/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Y,J){k(Y,p,J),e(p,v),k(Y,f,J),k(Y,i,J),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L),e(i,R),e(i,m),e(m,x),e(x,V),e(m,M),e(m,O),e(O,K),e(m,G),e(i,y),e(i,S),e(S,C),e(C,X),e(S,ee)},d(Y){Y&&t(p),Y&&t(f),Y&&t(i)}}}function ug(W){let p,v,f,i,g;return i=new re({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=o("p"),v=l("Example usage:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function fg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L;return{c(){p=o("p"),v=l("Raises the following errors:"),f=d(),i=o("ul"),g=o("li"),n=o("a"),u=o("code"),q=l("HTTPError"),_=l(`
if the HuggingFace API returned an error`),A=d(),E=o("li"),b=o("a"),w=o("code"),I=l("ValueError"),L=l(`
if some parameter value is invalid`),this.h()},l(R){p=a(R,"P",{});var m=s(p);v=c(m,"Raises the following errors:"),m.forEach(t),f=h(R),i=a(R,"UL",{});var x=s(i);g=a(x,"LI",{});var V=s(g);n=a(V,"A",{href:!0,rel:!0});var M=s(n);u=a(M,"CODE",{});var O=s(u);q=c(O,"HTTPError"),O.forEach(t),M.forEach(t),_=c(V,`
if the HuggingFace API returned an error`),V.forEach(t),A=h(x),E=a(x,"LI",{});var K=s(E);b=a(K,"A",{href:!0,rel:!0});var G=s(b);w=a(G,"CODE",{});var y=s(w);I=c(y,"ValueError"),y.forEach(t),G.forEach(t),L=c(K,`
if some parameter value is invalid`),K.forEach(t),x.forEach(t),this.h()},h(){$(n,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(n,"rel","nofollow"),$(b,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(b,"rel","nofollow")},m(R,m){k(R,p,m),e(p,v),k(R,f,m),k(R,i,m),e(i,g),e(g,n),e(n,u),e(u,q),e(g,_),e(i,A),e(i,E),e(E,b),e(b,w),e(w,I),e(E,L)},d(R){R&&t(p),R&&t(f),R&&t(i)}}}function mg(W){let p,v,f,i,g;return i=new re({props:{code:`upload_folder(
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
`}}),{c(){p=o("p"),v=l("Example usage:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Example usage:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function _g(W){let p,v,f,i,g;return i=new re({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=o("p"),v=l("Examples:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Examples:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function bg(W){let p,v;return p=new re({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){D(p.$$.fragment)},l(f){j(p.$$.fragment,f)},m(f,i){N(p,f,i),v=!0},p:ue,i(f){v||(F(p.$$.fragment,f),v=!0)},o(f){T(p.$$.fragment,f),v=!1},d(f){P(p,f)}}}function vg(W){let p,v,f,i,g;return i=new re({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=l("Example:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function $g(W){let p,v,f,i,g;return i=new re({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=o("p"),v=l("Example:"),f=d(),D(i.$$.fragment)},l(n){p=a(n,"P",{});var u=s(p);v=c(u,"Example:"),u.forEach(t),f=h(n),j(i.$$.fragment,n)},m(n,u){k(n,p,u),e(p,v),k(n,f,u),N(i,n,u),g=!0},p:ue,i(n){g||(F(i.$$.fragment,n),g=!0)},o(n){T(i.$$.fragment,n),g=!1},d(n){n&&t(p),n&&t(f),P(i,n)}}}function yg(W){let p,v,f,i,g,n,u,q,_,A,E,b,w,I,L,R,m,x,V,M,O,K,G,y,S,C,X,ee,Y,J,Z,ae,B,Q,te,ne,Ce,fe,Je,Se,Ne,U,_e,_a,pe,Fe,ba,Qe,va,Ls,Ze,Rs,et,Os,ve,io,Cs,Ua,Ss,Us,tt,Ms,ot,Vs,at,lo,zs,Ma,Ws,Gs,ie,co,Bs,Va,Ks,Js,po,Qs,za,Xs,Ys,Zs,go,er,$a,tr,or,ar,ya,nr,Ea,sr,rr,nt,ir,le,ho,lr,uo,cr,Wa,pr,gr,dr,fo,hr,wa,ur,fr,mr,mo,_r,Ga,br,vr,$r,ka,yr,Aa,Er,wr,st,kr,rt,_o,Ar,Ba,xr,Hr,$e,bo,qr,Ka,Dr,jr,Ja,Nr,Fr,it,Tr,Ue,vo,Pr,Qa,Ir,Lr,lt,Rr,Me,$o,Or,Xa,Cr,Sr,ct,Ur,Ve,yo,Mr,Ya,Vr,zr,pt,Wr,gt,Eo,Gr,Za,Br,Kr,ye,wo,Jr,en,Qr,Xr,xa,Yr,Ha,Zr,ei,dt,ti,ht,ko,oi,tn,ai,ni,ut,Ao,si,on,ri,ii,me,xo,li,an,ci,pi,nn,gi,di,ft,hi,mt,ui,Ee,Ho,fi,sn,mi,_i,rn,bi,vi,_t,$i,we,qo,yi,ln,Ei,wi,bt,ki,vt,Ai,$t,Do,xi,cn,Hi,qi,ke,jo,Di,pn,ji,Ni,yt,Fi,Et,Ti,wt,No,Pi,gn,Ii,Li,kt,Fo,Ri,dn,Oi,Ci,ze,To,Si,hn,Ui,Mi,At,Vi,Ae,Po,zi,un,Wi,Gi,fn,Bi,Ki,xt,Ji,xe,Io,Qi,mn,Xi,Yi,Lo,Zi,Ro,el,tl,ol,Ht,al,He,Oo,nl,_n,sl,rl,qt,il,Dt,ll,We,Co,cl,bn,pl,gl,jt,dl,Nt,So,hl,vn,ul,fl,qe,Uo,ml,$n,_l,bl,yn,vl,$l,Ft,yl,Tt,Mo,El,En,wl,kl,Ge,Vo,Al,wn,xl,Hl,Pt,ql,De,zo,Dl,kn,jl,Nl,It,Fl,Lt,Tl,ce,Wo,Pl,An,Il,Ll,xn,Rl,Ol,Go,Cl,Hn,Sl,Ul,Ml,Rt,Vl,Ot,zl,Ct,Bo,Wl,qn,Gl,rs,Xe,St,Dn,Ko,Bl,jn,Kl,is,Jo,Nn,Jl,Ql,ls,Ut,Xl,qa,Yl,Zl,cs,be,Qo,ec,Mt,Xo,tc,Fn,oc,ac,Be,Yo,nc,Tn,sc,rc,Zo,ic,Pn,lc,cc,pc,Vt,ea,gc,In,dc,ps,Ye,zt,Ln,ta,hc,Rn,uc,gs,Wt,fc,On,mc,_c,ds,Te,oa,bc,Cn,vc,$c,Gt,hs,Pe,aa,yc,Sn,Ec,wc,Bt,us,Ie,na,kc,Un,Ac,xc,Kt,fs,Le,sa,Hc,Mn,qc,Dc,Jt,ms;return n=new Tc({}),C=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),Q=new re({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),_e=new oe({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L569"}}),Fe=new oe({props:{name:"change_discussion_status",anchor:"huggingface_hub.HfApi.change_discussion_status",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_status",val:": typing.Literal['open', 'closed']"},{name:"token",val:": typing.Optional[str] = None"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.change_discussion_status.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.change_discussion_status.new_status",description:`<strong>new_status</strong> (<code>str</code>) &#x2014;
The new status for the discussion, either <code>&quot;open&quot;</code> or <code>&quot;closed&quot;</code>.`,name:"new_status"},{anchor:"huggingface_hub.HfApi.change_discussion_status.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.change_discussion_status.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.change_discussion_status.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2818",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),Ze=new he({props:{anchor:"huggingface_hub.HfApi.change_discussion_status.example",$$slots:{default:[Up]},$$scope:{ctx:W}}}),et=new se({props:{$$slots:{default:[Mp]},$$scope:{ctx:W}}}),io=new oe({props:{name:"comment_discussion",anchor:"huggingface_hub.HfApi.comment_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.comment_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.comment_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.comment_discussion.comment",description:`<strong>comment</strong> (<code>str</code>) &#x2014;
The content of the comment to create. Comments support markdown formatting.`,name:"comment"},{anchor:"huggingface_hub.HfApi.comment_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.comment_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2677",returnDescription:`
<p>the newly created comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),tt=new he({props:{anchor:"huggingface_hub.HfApi.comment_discussion.example",$$slots:{default:[Vp]},$$scope:{ctx:W}}}),ot=new se({props:{$$slots:{default:[zp]},$$scope:{ctx:W}}}),lo=new oe({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1816",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),co=new oe({props:{name:"create_discussion",anchor:"huggingface_hub.HfApi.create_discussion",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"pull_request",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_discussion.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_discussion.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_discussion.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_discussion.pull_request",description:`<strong>pull_request</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to create a Pull Request or discussion. If <code>True</code>, creates a Pull Request.
If <code>False</code>, creates a discussion. Defaults to <code>False</code>.`,name:"pull_request"},{anchor:"huggingface_hub.HfApi.create_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2502"}}),nt=new se({props:{$$slots:{default:[Wp]},$$scope:{ctx:W}}}),ho=new oe({props:{name:"create_pull_request",anchor:"huggingface_hub.HfApi.create_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"title",val:": str"},{name:"token",val:": str"},{name:"description",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_pull_request.title",description:`<strong>title</strong> (<code>str</code>) &#x2014;
The title of the discussion. It can be up to 200 characters long,
and must be at least 3 characters long. Leading and trailing whitespaces
will be stripped.`,name:"title"},{anchor:"huggingface_hub.HfApi.create_pull_request.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.create_pull_request.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional description for the Pull Request.
Defaults to <code>&quot;Discussion opened with the huggingface_hub Python library&quot;</code>`,name:"description"},{anchor:"huggingface_hub.HfApi.create_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2590"}}),st=new se({props:{$$slots:{default:[Gp]},$$scope:{ctx:W}}}),_o=new oe({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1442",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),bo=new oe({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1235",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),it=new se({props:{$$slots:{default:[Bp]},$$scope:{ctx:W}}}),vo=new oe({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2228"}}),lt=new se({props:{$$slots:{default:[Kp]},$$scope:{ctx:W}}}),$o=new oe({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1572"}}),ct=new se({props:{$$slots:{default:[Jp]},$$scope:{ctx:W}}}),yo=new oe({props:{name:"edit_discussion_comment",anchor:"huggingface_hub.HfApi.edit_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"new_content",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.new_content",description:`<strong>new_content</strong> (<code>str</code>) &#x2014;
The new content of the comment. Comments support markdown formatting.`,name:"new_content"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.edit_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2944",returnDescription:`
<p>the edited comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),pt=new se({props:{$$slots:{default:[Qp]},$$scope:{ctx:W}}}),Eo=new oe({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L690"}}),wo=new oe({props:{name:"get_discussion_details",anchor:"huggingface_hub.HfApi.get_discussion_details",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_discussion_details.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.get_discussion_details.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_discussion_details.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2419"}}),dt=new se({props:{$$slots:{default:[Xp]},$$scope:{ctx:W}}}),ko=new oe({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2306",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ao=new oe({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L682"}}),xo=new oe({props:{name:"get_repo_discussions",anchor:"huggingface_hub.HfApi.get_repo_discussions",parameters:[{name:"repo_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if fetching from a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if fetching from a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.get_repo_discussions.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>).`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2340",returnDescription:`
<p>An iterator of <a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.Discussion"
>Discussion</a> objects.</p>
`,returnType:`
<p><code>Iterator[Discussion]</code></p>
`}}),ft=new he({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example",$$slots:{default:[Yp]},$$scope:{ctx:W}}}),mt=new he({props:{anchor:"huggingface_hub.HfApi.get_repo_discussions.example-2",$$slots:{default:[Zp]},$$scope:{ctx:W}}}),Ho=new oe({props:{name:"hide_discussion_comment",anchor:"huggingface_hub.HfApi.hide_discussion_comment",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"comment_id",val:": str"},{name:"token",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.comment_id",description:`<strong>comment_id</strong> (<code>str</code>) &#x2014;
The ID of the comment to edit.`,name:"comment_id"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.hide_discussion_comment.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3000",returnDescription:`
<p>the hidden comment</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionComment"
>DiscussionComment</a></p>
`}}),_t=new se({props:{$$slots:{default:[eg]},$$scope:{ctx:W}}}),qo=new oe({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L908"}}),bt=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[tg]},$$scope:{ctx:W}}}),vt=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[og]},$$scope:{ctx:W}}}),Do=new oe({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1073",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),jo=new oe({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L700"}}),yt=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[ag]},$$scope:{ctx:W}}}),Et=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[ng]},$$scope:{ctx:W}}}),No=new oe({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1402",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Fo=new oe({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1087",returnDescription:`
<p>a list of <code>SpaceInfo</code> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),To=new oe({props:{name:"merge_pull_request",anchor:"huggingface_hub.HfApi.merge_pull_request",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"token",val:": str"},{name:"comment",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.merge_pull_request.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.merge_pull_request.comment",description:`<strong>comment</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An optional comment to post with the status change.`,name:"comment"},{anchor:"huggingface_hub.HfApi.merge_pull_request.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.merge_pull_request.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2892",returnDescription:`
<p>the status change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionStatusChange"
>DiscussionStatusChange</a></p>
`}}),At=new se({props:{$$slots:{default:[sg]},$$scope:{ctx:W}}}),Po=new oe({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1172",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),xt=new se({props:{$$slots:{default:[rg]},$$scope:{ctx:W}}}),Io=new oe({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1738"}}),Ht=new se({props:{$$slots:{default:[ig]},$$scope:{ctx:W}}}),Oo=new oe({props:{name:"rename_discussion",anchor:"huggingface_hub.HfApi.rename_discussion",parameters:[{name:"repo_id",val:": str"},{name:"discussion_num",val:": int"},{name:"new_title",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.rename_discussion.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.rename_discussion.discussion_num",description:`<strong>discussion_num</strong> (<code>int</code>) &#x2014;
The number of the Discussion or Pull Request . Must be a strictly positive integer.`,name:"discussion_num"},{anchor:"huggingface_hub.HfApi.rename_discussion.new_title",description:`<strong>new_title</strong> (<code>str</code>) &#x2014;
The new title for the discussion`,name:"new_title"},{anchor:"huggingface_hub.HfApi.rename_discussion.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.rename_discussion.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2752",returnDescription:`
<p>the title change event</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionTitleChange"
>DiscussionTitleChange</a></p>
`}}),qt=new he({props:{anchor:"huggingface_hub.HfApi.rename_discussion.example",$$slots:{default:[lg]},$$scope:{ctx:W}}}),Dt=new se({props:{$$slots:{default:[cg]},$$scope:{ctx:W}}}),Co=new oe({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1347",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),jt=new se({props:{$$slots:{default:[pg]},$$scope:{ctx:W}}}),So=new oe({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L663"}}),Uo=new oe({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1291",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),Ft=new se({props:{$$slots:{default:[gg]},$$scope:{ctx:W}}}),Mo=new oe({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L675"}}),Vo=new oe({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1663",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Pt=new se({props:{$$slots:{default:[dg]},$$scope:{ctx:W}}}),zo=new oe({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L1939",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),It=new se({props:{$$slots:{default:[hg]},$$scope:{ctx:W}}}),Lt=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[ug]},$$scope:{ctx:W}}}),Wo=new oe({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L2084",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Rt=new se({props:{$$slots:{default:[fg]},$$scope:{ctx:W}}}),Ot=new he({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[mg]},$$scope:{ctx:W}}}),Bo=new oe({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L573"}}),Ko=new Tc({}),Qo=new oe({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3060"}}),Xo=new oe({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3097"}}),Yo=new oe({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3076",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),ea=new oe({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L3063"}}),ta=new Tc({}),oa=new oe({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Gt=new he({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[_g]},$$scope:{ctx:W}}}),aa=new oe({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Bt=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[bg]},$$scope:{ctx:W}}}),na=new oe({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L457"}}),Kt=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[vg]},$$scope:{ctx:W}}}),sa=new oe({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_930/src/huggingface_hub/hf_api.py#L419"}}),Jt=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[$g]},$$scope:{ctx:W}}}),{c(){p=o("meta"),v=d(),f=o("h1"),i=o("a"),g=o("span"),D(n.$$.fragment),u=d(),q=o("span"),_=l("Hugging Face Hub API"),A=d(),E=o("p"),b=l("Below is the documentation for the "),w=o("code"),I=l("HfApi"),L=l(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=d(),m=o("p"),x=l("All methods from the "),V=o("code"),M=l("HfApi"),O=l(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),K=d(),G=o("p"),y=l("The following approach uses the method from the root of the package:"),S=d(),D(C.$$.fragment),X=d(),ee=o("p"),Y=l("The following approach uses the "),J=o("code"),Z=l("HfApi"),ae=l(" class:"),B=d(),D(Q.$$.fragment),te=d(),ne=o("p"),Ce=l("Using the "),fe=o("code"),Je=l("HfApi"),Se=l(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Ne=d(),U=o("div"),D(_e.$$.fragment),_a=d(),pe=o("div"),D(Fe.$$.fragment),ba=d(),Qe=o("p"),va=l("Closes or re-opens a Discussion or Pull Request."),Ls=d(),D(Ze.$$.fragment),Rs=d(),D(et.$$.fragment),Os=d(),ve=o("div"),D(io.$$.fragment),Cs=d(),Ua=o("p"),Ss=l("Creates a new comment on the given discussion"),Us=d(),D(tt.$$.fragment),Ms=d(),D(ot.$$.fragment),Vs=d(),at=o("div"),D(lo.$$.fragment),zs=d(),Ma=o("p"),Ws=l("Creates a commit in the given repo, deleting & uploading files as needed."),Gs=d(),ie=o("div"),D(co.$$.fragment),Bs=d(),Va=o("p"),Ks=l("Creates a Discussion or Pull Request."),Js=d(),po=o("p"),Qs=l("Pull Requests created programmatically will be in "),za=o("code"),Xs=l('"draft"'),Ys=l(" status."),Zs=d(),go=o("p"),er=l("Creating a Pull Request with changes can also be done at once with "),$a=o("a"),tr=l("HfApi.create_commit()"),or=l("."),ar=d(),ya=o("p"),nr=l("Returns: "),Ea=o("a"),sr=l("DiscussionWithDetails"),rr=d(),D(nt.$$.fragment),ir=d(),le=o("div"),D(ho.$$.fragment),lr=d(),uo=o("p"),cr=l("Creates a Pull Request . Pull Requests created programmatically will be in "),Wa=o("code"),pr=l('"draft"'),gr=l(" status."),dr=d(),fo=o("p"),hr=l("Creating a Pull Request with changes can also be done at once with "),wa=o("a"),ur=l("HfApi.create_commit()"),fr=l(";"),mr=d(),mo=o("p"),_r=l("This is a wrapper around "),Ga=o("code"),br=l("HfApi.create_discusssion"),vr=l("."),$r=d(),ka=o("p"),yr=l("Returns: "),Aa=o("a"),Er=l("DiscussionWithDetails"),wr=d(),D(st.$$.fragment),kr=d(),rt=o("div"),D(_o.$$.fragment),Ar=d(),Ba=o("p"),xr=l("Create an empty repo on the HuggingFace Hub."),Hr=d(),$e=o("div"),D(bo.$$.fragment),qr=d(),Ka=o("p"),Dr=l("Get info on one specific dataset on huggingface.co."),jr=d(),Ja=o("p"),Nr=l("Dataset can be private if you pass an acceptable token."),Fr=d(),D(it.$$.fragment),Tr=d(),Ue=o("div"),D(vo.$$.fragment),Pr=d(),Qa=o("p"),Ir=l("Deletes a file in the given repo."),Lr=d(),D(lt.$$.fragment),Rr=d(),Me=o("div"),D($o.$$.fragment),Or=d(),Xa=o("p"),Cr=l("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Sr=d(),D(ct.$$.fragment),Ur=d(),Ve=o("div"),D(yo.$$.fragment),Mr=d(),Ya=o("p"),Vr=l("Edits a comment on a Discussion / Pull Request"),zr=d(),D(pt.$$.fragment),Wr=d(),gt=o("div"),D(Eo.$$.fragment),Gr=d(),Za=o("p"),Br=l("Gets all valid dataset tags as a nested namespace object."),Kr=d(),ye=o("div"),D(wo.$$.fragment),Jr=d(),en=o("p"),Qr=l("Fetches a discussion\u2019s / Pull Request \u2018s details from the Hub"),Xr=d(),xa=o("p"),Yr=l("Returns: "),Ha=o("a"),Zr=l("DiscussionWithDetails"),ei=d(),D(dt.$$.fragment),ti=d(),ht=o("div"),D(ko.$$.fragment),oi=d(),tn=o("p"),ai=l(`Returns the repository name for a given model ID and optional
organization.`),ni=d(),ut=o("div"),D(Ao.$$.fragment),si=d(),on=o("p"),ri=l("Gets all valid model tags as a nested namespace object"),ii=d(),me=o("div"),D(xo.$$.fragment),li=d(),an=o("p"),ci=l("Fetches Discussions and Pull Requests for the given repo."),pi=d(),nn=o("p"),gi=l("Example:"),di=d(),D(ft.$$.fragment),hi=d(),D(mt.$$.fragment),ui=d(),Ee=o("div"),D(Ho.$$.fragment),fi=d(),sn=o("p"),mi=l("Hides a comment on a Discussion / Pull Request."),_i=d(),rn=o("p"),bi=l("Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),vi=d(),D(_t.$$.fragment),$i=d(),we=o("div"),D(qo.$$.fragment),yi=d(),ln=o("p"),Ei=l("Get the public list of all the datasets on huggingface.co"),wi=d(),D(bt.$$.fragment),ki=d(),D(vt.$$.fragment),Ai=d(),$t=o("div"),D(Do.$$.fragment),xi=d(),cn=o("p"),Hi=l("Get the public list of all the metrics on huggingface.co"),qi=d(),ke=o("div"),D(jo.$$.fragment),Di=d(),pn=o("p"),ji=l("Get the public list of all the models on huggingface.co"),Ni=d(),D(yt.$$.fragment),Fi=d(),D(Et.$$.fragment),Ti=d(),wt=o("div"),D(No.$$.fragment),Pi=d(),gn=o("p"),Ii=l("Get the list of files in a given repo."),Li=d(),kt=o("div"),D(Fo.$$.fragment),Ri=d(),dn=o("p"),Oi=l("Get the public list of all Spaces on huggingface.co"),Ci=d(),ze=o("div"),D(To.$$.fragment),Si=d(),hn=o("p"),Ui=l("Merges a Pull Request."),Mi=d(),D(At.$$.fragment),Vi=d(),Ae=o("div"),D(Po.$$.fragment),zi=d(),un=o("p"),Wi=l("Get info on one specific model on huggingface.co"),Gi=d(),fn=o("p"),Bi=l("Model can be private if you pass an acceptable token or are logged in."),Ki=d(),D(xt.$$.fragment),Ji=d(),xe=o("div"),D(Io.$$.fragment),Qi=d(),mn=o("p"),Xi=l("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Yi=d(),Lo=o("p"),Zi=l(`Note there are certain limitations. For more information about moving
repositories, please see
`),Ro=o("a"),el=l("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),tl=l("."),ol=d(),D(Ht.$$.fragment),al=d(),He=o("div"),D(Oo.$$.fragment),nl=d(),_n=o("p"),sl=l("Renames a discussion"),rl=d(),D(qt.$$.fragment),il=d(),D(Dt.$$.fragment),ll=d(),We=o("div"),D(Co.$$.fragment),cl=d(),bn=o("p"),pl=l("Get the info object for a given repo of a given type."),gl=d(),D(jt.$$.fragment),dl=d(),Nt=o("div"),D(So.$$.fragment),hl=d(),vn=o("p"),ul=l(`Saves the passed access token so git can correctly authenticate the
user.`),fl=d(),qe=o("div"),D(Uo.$$.fragment),ml=d(),$n=o("p"),_l=l("Get info on one specific Space on huggingface.co."),bl=d(),yn=o("p"),vl=l("Space can be private if you pass an acceptable token."),$l=d(),D(Ft.$$.fragment),yl=d(),Tt=o("div"),D(Mo.$$.fragment),El=d(),En=o("p"),wl=l("Resets the user\u2019s access token."),kl=d(),Ge=o("div"),D(Vo.$$.fragment),Al=d(),wn=o("p"),xl=l("Update the visibility setting of a repository."),Hl=d(),D(Pt.$$.fragment),ql=d(),De=o("div"),D(zo.$$.fragment),Dl=d(),kn=o("p"),jl=l(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Nl=d(),D(It.$$.fragment),Fl=d(),D(Lt.$$.fragment),Tl=d(),ce=o("div"),D(Wo.$$.fragment),Pl=d(),An=o("p"),Il=l(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ll=d(),xn=o("p"),Rl=l(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Ol=d(),Go=o("p"),Cl=l("Uses "),Hn=o("code"),Sl=l("HfApi.create_commit"),Ul=l(" under the hood."),Ml=d(),D(Rt.$$.fragment),Vl=d(),D(Ot.$$.fragment),zl=d(),Ct=o("div"),D(Bo.$$.fragment),Wl=d(),qn=o("p"),Gl=l("Call HF API to know \u201Cwhoami\u201D."),rs=d(),Xe=o("h2"),St=o("a"),Dn=o("span"),D(Ko.$$.fragment),Bl=d(),jn=o("span"),Kl=l("Hugging Face local storage"),is=d(),Jo=o("p"),Nn=o("code"),Jl=l("huggingface_hub"),Ql=l(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),ls=d(),Ut=o("p"),Xl=l("It does this using the "),qa=o("a"),Yl=l("HfFolder"),Zl=l(" utility, which saves data at the root of the user."),cs=d(),be=o("div"),D(Qo.$$.fragment),ec=d(),Mt=o("div"),D(Xo.$$.fragment),tc=d(),Fn=o("p"),oc=l("Deletes the token from storage. Does not fail if token does not exist."),ac=d(),Be=o("div"),D(Yo.$$.fragment),nc=d(),Tn=o("p"),sc=l("Get token or None if not existent."),rc=d(),Zo=o("p"),ic=l("Note that a token can be also provided using the "),Pn=o("code"),lc=l("HUGGING_FACE_HUB_TOKEN"),cc=l(`
environment variable.`),pc=d(),Vt=o("div"),D(ea.$$.fragment),gc=d(),In=o("p"),dc=l("Save token, creating folder as needed."),ps=d(),Ye=o("h2"),zt=o("a"),Ln=o("span"),D(ta.$$.fragment),hc=d(),Rn=o("span"),uc=l("Filtering helpers"),gs=d(),Wt=o("p"),fc=l("Some helpers to filter repositories on the Hub are available in the "),On=o("code"),mc=l("huggingface_hub"),_c=l(" package."),ds=d(),Te=o("div"),D(oa.$$.fragment),bc=d(),Cn=o("p"),vc=l(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),$c=d(),D(Gt.$$.fragment),hs=d(),Pe=o("div"),D(aa.$$.fragment),yc=d(),Sn=o("p"),Ec=l(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),wc=d(),D(Bt.$$.fragment),us=d(),Ie=o("div"),D(na.$$.fragment),kc=d(),Un=o("p"),Ac=l(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),xc=d(),D(Kt.$$.fragment),fs=d(),Le=o("div"),D(sa.$$.fragment),Hc=d(),Mn=o("p"),qc=l(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Dc=d(),D(Jt.$$.fragment),this.h()},l(r){const H=Cp('[data-svelte="svelte-1phssyn"]',document.head);p=a(H,"META",{name:!0,content:!0}),H.forEach(t),v=h(r),f=a(r,"H1",{class:!0});var ra=s(f);i=a(ra,"A",{id:!0,class:!0,href:!0});var Vn=s(i);g=a(Vn,"SPAN",{});var zn=s(g);j(n.$$.fragment,zn),zn.forEach(t),Vn.forEach(t),u=h(ra),q=a(ra,"SPAN",{});var Wn=s(q);_=c(Wn,"Hugging Face Hub API"),Wn.forEach(t),ra.forEach(t),A=h(r),E=a(r,"P",{});var ia=s(E);b=c(ia,"Below is the documentation for the "),w=a(ia,"CODE",{});var Gn=s(w);I=c(Gn,"HfApi"),Gn.forEach(t),L=c(ia,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),ia.forEach(t),R=h(r),m=a(r,"P",{});var la=s(m);x=c(la,"All methods from the "),V=a(la,"CODE",{});var Bn=s(V);M=c(Bn,"HfApi"),Bn.forEach(t),O=c(la,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),la.forEach(t),K=h(r),G=a(r,"P",{});var Kn=s(G);y=c(Kn,"The following approach uses the method from the root of the package:"),Kn.forEach(t),S=h(r),j(C.$$.fragment,r),X=h(r),ee=a(r,"P",{});var ca=s(ee);Y=c(ca,"The following approach uses the "),J=a(ca,"CODE",{});var Jn=s(J);Z=c(Jn,"HfApi"),Jn.forEach(t),ae=c(ca," class:"),ca.forEach(t),B=h(r),j(Q.$$.fragment,r),te=h(r),ne=a(r,"P",{});var pa=s(ne);Ce=c(pa,"Using the "),fe=a(pa,"CODE",{});var Qn=s(fe);Je=c(Qn,"HfApi"),Qn.forEach(t),Se=c(pa," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),pa.forEach(t),Ne=h(r),U=a(r,"DIV",{class:!0});var z=s(U);j(_e.$$.fragment,z),_a=h(z),pe=a(z,"DIV",{class:!0});var Re=s(pe);j(Fe.$$.fragment,Re),ba=h(Re),Qe=a(Re,"P",{});var Xn=s(Qe);va=c(Xn,"Closes or re-opens a Discussion or Pull Request."),Xn.forEach(t),Ls=h(Re),j(Ze.$$.fragment,Re),Rs=h(Re),j(et.$$.fragment,Re),Re.forEach(t),Os=h(z),ve=a(z,"DIV",{class:!0});var Oe=s(ve);j(io.$$.fragment,Oe),Cs=h(Oe),Ua=a(Oe,"P",{});var Yn=s(Ua);Ss=c(Yn,"Creates a new comment on the given discussion"),Yn.forEach(t),Us=h(Oe),j(tt.$$.fragment,Oe),Ms=h(Oe),j(ot.$$.fragment,Oe),Oe.forEach(t),Vs=h(z),at=a(z,"DIV",{class:!0});var ga=s(at);j(lo.$$.fragment,ga),zs=h(ga),Ma=a(ga,"P",{});var Zn=s(Ma);Ws=c(Zn,"Creates a commit in the given repo, deleting & uploading files as needed."),Zn.forEach(t),ga.forEach(t),Gs=h(z),ie=a(z,"DIV",{class:!0});var ge=s(ie);j(co.$$.fragment,ge),Bs=h(ge),Va=a(ge,"P",{});var es=s(Va);Ks=c(es,"Creates a Discussion or Pull Request."),es.forEach(t),Js=h(ge),po=a(ge,"P",{});var da=s(po);Qs=c(da,"Pull Requests created programmatically will be in "),za=a(da,"CODE",{});var ts=s(za);Xs=c(ts,'"draft"'),ts.forEach(t),Ys=c(da," status."),da.forEach(t),Zs=h(ge),go=a(ge,"P",{});var ha=s(go);er=c(ha,"Creating a Pull Request with changes can also be done at once with "),$a=a(ha,"A",{href:!0});var os=s($a);tr=c(os,"HfApi.create_commit()"),os.forEach(t),or=c(ha,"."),ha.forEach(t),ar=h(ge),ya=a(ge,"P",{});var Da=s(ya);nr=c(Da,"Returns: "),Ea=a(Da,"A",{href:!0});var as=s(Ea);sr=c(as,"DiscussionWithDetails"),as.forEach(t),Da.forEach(t),rr=h(ge),j(nt.$$.fragment,ge),ge.forEach(t),ir=h(z),le=a(z,"DIV",{class:!0});var de=s(le);j(ho.$$.fragment,de),lr=h(de),uo=a(de,"P",{});var ua=s(uo);cr=c(ua,"Creates a Pull Request . Pull Requests created programmatically will be in "),Wa=a(ua,"CODE",{});var ns=s(Wa);pr=c(ns,'"draft"'),ns.forEach(t),gr=c(ua," status."),ua.forEach(t),dr=h(de),fo=a(de,"P",{});var fa=s(fo);hr=c(fa,"Creating a Pull Request with changes can also be done at once with "),wa=a(fa,"A",{href:!0});var ss=s(wa);ur=c(ss,"HfApi.create_commit()"),ss.forEach(t),fr=c(fa,";"),fa.forEach(t),mr=h(de),mo=a(de,"P",{});var ma=s(mo);_r=c(ma,"This is a wrapper around "),Ga=a(ma,"CODE",{});var Pc=s(Ga);br=c(Pc,"HfApi.create_discusssion"),Pc.forEach(t),vr=c(ma,"."),ma.forEach(t),$r=h(de),ka=a(de,"P",{});var jc=s(ka);yr=c(jc,"Returns: "),Aa=a(jc,"A",{href:!0});var Ic=s(Aa);Er=c(Ic,"DiscussionWithDetails"),Ic.forEach(t),jc.forEach(t),wr=h(de),j(st.$$.fragment,de),de.forEach(t),kr=h(z),rt=a(z,"DIV",{class:!0});var _s=s(rt);j(_o.$$.fragment,_s),Ar=h(_s),Ba=a(_s,"P",{});var Lc=s(Ba);xr=c(Lc,"Create an empty repo on the HuggingFace Hub."),Lc.forEach(t),_s.forEach(t),Hr=h(z),$e=a(z,"DIV",{class:!0});var Qt=s($e);j(bo.$$.fragment,Qt),qr=h(Qt),Ka=a(Qt,"P",{});var Rc=s(Ka);Dr=c(Rc,"Get info on one specific dataset on huggingface.co."),Rc.forEach(t),jr=h(Qt),Ja=a(Qt,"P",{});var Oc=s(Ja);Nr=c(Oc,"Dataset can be private if you pass an acceptable token."),Oc.forEach(t),Fr=h(Qt),j(it.$$.fragment,Qt),Qt.forEach(t),Tr=h(z),Ue=a(z,"DIV",{class:!0});var ja=s(Ue);j(vo.$$.fragment,ja),Pr=h(ja),Qa=a(ja,"P",{});var Cc=s(Qa);Ir=c(Cc,"Deletes a file in the given repo."),Cc.forEach(t),Lr=h(ja),j(lt.$$.fragment,ja),ja.forEach(t),Rr=h(z),Me=a(z,"DIV",{class:!0});var Na=s(Me);j($o.$$.fragment,Na),Or=h(Na),Xa=a(Na,"P",{});var Sc=s(Xa);Cr=c(Sc,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Sc.forEach(t),Sr=h(Na),j(ct.$$.fragment,Na),Na.forEach(t),Ur=h(z),Ve=a(z,"DIV",{class:!0});var Fa=s(Ve);j(yo.$$.fragment,Fa),Mr=h(Fa),Ya=a(Fa,"P",{});var Uc=s(Ya);Vr=c(Uc,"Edits a comment on a Discussion / Pull Request"),Uc.forEach(t),zr=h(Fa),j(pt.$$.fragment,Fa),Fa.forEach(t),Wr=h(z),gt=a(z,"DIV",{class:!0});var bs=s(gt);j(Eo.$$.fragment,bs),Gr=h(bs),Za=a(bs,"P",{});var Mc=s(Za);Br=c(Mc,"Gets all valid dataset tags as a nested namespace object."),Mc.forEach(t),bs.forEach(t),Kr=h(z),ye=a(z,"DIV",{class:!0});var Xt=s(ye);j(wo.$$.fragment,Xt),Jr=h(Xt),en=a(Xt,"P",{});var Vc=s(en);Qr=c(Vc,"Fetches a discussion\u2019s / Pull Request \u2018s details from the Hub"),Vc.forEach(t),Xr=h(Xt),xa=a(Xt,"P",{});var Nc=s(xa);Yr=c(Nc,"Returns: "),Ha=a(Nc,"A",{href:!0});var zc=s(Ha);Zr=c(zc,"DiscussionWithDetails"),zc.forEach(t),Nc.forEach(t),ei=h(Xt),j(dt.$$.fragment,Xt),Xt.forEach(t),ti=h(z),ht=a(z,"DIV",{class:!0});var vs=s(ht);j(ko.$$.fragment,vs),oi=h(vs),tn=a(vs,"P",{});var Wc=s(tn);ai=c(Wc,`Returns the repository name for a given model ID and optional
organization.`),Wc.forEach(t),vs.forEach(t),ni=h(z),ut=a(z,"DIV",{class:!0});var $s=s(ut);j(Ao.$$.fragment,$s),si=h($s),on=a($s,"P",{});var Gc=s(on);ri=c(Gc,"Gets all valid model tags as a nested namespace object"),Gc.forEach(t),$s.forEach(t),ii=h(z),me=a(z,"DIV",{class:!0});var Ke=s(me);j(xo.$$.fragment,Ke),li=h(Ke),an=a(Ke,"P",{});var Bc=s(an);ci=c(Bc,"Fetches Discussions and Pull Requests for the given repo."),Bc.forEach(t),pi=h(Ke),nn=a(Ke,"P",{});var Kc=s(nn);gi=c(Kc,"Example:"),Kc.forEach(t),di=h(Ke),j(ft.$$.fragment,Ke),hi=h(Ke),j(mt.$$.fragment,Ke),Ke.forEach(t),ui=h(z),Ee=a(z,"DIV",{class:!0});var Yt=s(Ee);j(Ho.$$.fragment,Yt),fi=h(Yt),sn=a(Yt,"P",{});var Jc=s(sn);mi=c(Jc,"Hides a comment on a Discussion / Pull Request."),Jc.forEach(t),_i=h(Yt),rn=a(Yt,"P",{});var Qc=s(rn);bi=c(Qc,"Hidden comments\u2019 content cannot be retrieved anymore. Hiding a comment is irreversible."),Qc.forEach(t),vi=h(Yt),j(_t.$$.fragment,Yt),Yt.forEach(t),$i=h(z),we=a(z,"DIV",{class:!0});var Zt=s(we);j(qo.$$.fragment,Zt),yi=h(Zt),ln=a(Zt,"P",{});var Xc=s(ln);Ei=c(Xc,"Get the public list of all the datasets on huggingface.co"),Xc.forEach(t),wi=h(Zt),j(bt.$$.fragment,Zt),ki=h(Zt),j(vt.$$.fragment,Zt),Zt.forEach(t),Ai=h(z),$t=a(z,"DIV",{class:!0});var ys=s($t);j(Do.$$.fragment,ys),xi=h(ys),cn=a(ys,"P",{});var Yc=s(cn);Hi=c(Yc,"Get the public list of all the metrics on huggingface.co"),Yc.forEach(t),ys.forEach(t),qi=h(z),ke=a(z,"DIV",{class:!0});var eo=s(ke);j(jo.$$.fragment,eo),Di=h(eo),pn=a(eo,"P",{});var Zc=s(pn);ji=c(Zc,"Get the public list of all the models on huggingface.co"),Zc.forEach(t),Ni=h(eo),j(yt.$$.fragment,eo),Fi=h(eo),j(Et.$$.fragment,eo),eo.forEach(t),Ti=h(z),wt=a(z,"DIV",{class:!0});var Es=s(wt);j(No.$$.fragment,Es),Pi=h(Es),gn=a(Es,"P",{});var ep=s(gn);Ii=c(ep,"Get the list of files in a given repo."),ep.forEach(t),Es.forEach(t),Li=h(z),kt=a(z,"DIV",{class:!0});var ws=s(kt);j(Fo.$$.fragment,ws),Ri=h(ws),dn=a(ws,"P",{});var tp=s(dn);Oi=c(tp,"Get the public list of all Spaces on huggingface.co"),tp.forEach(t),ws.forEach(t),Ci=h(z),ze=a(z,"DIV",{class:!0});var Ta=s(ze);j(To.$$.fragment,Ta),Si=h(Ta),hn=a(Ta,"P",{});var op=s(hn);Ui=c(op,"Merges a Pull Request."),op.forEach(t),Mi=h(Ta),j(At.$$.fragment,Ta),Ta.forEach(t),Vi=h(z),Ae=a(z,"DIV",{class:!0});var to=s(Ae);j(Po.$$.fragment,to),zi=h(to),un=a(to,"P",{});var ap=s(un);Wi=c(ap,"Get info on one specific model on huggingface.co"),ap.forEach(t),Gi=h(to),fn=a(to,"P",{});var np=s(fn);Bi=c(np,"Model can be private if you pass an acceptable token or are logged in."),np.forEach(t),Ki=h(to),j(xt.$$.fragment,to),to.forEach(t),Ji=h(z),xe=a(z,"DIV",{class:!0});var oo=s(xe);j(Io.$$.fragment,oo),Qi=h(oo),mn=a(oo,"P",{});var sp=s(mn);Xi=c(sp,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),sp.forEach(t),Yi=h(oo),Lo=a(oo,"P",{});var ks=s(Lo);Zi=c(ks,`Note there are certain limitations. For more information about moving
repositories, please see
`),Ro=a(ks,"A",{href:!0,rel:!0});var rp=s(Ro);el=c(rp,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),rp.forEach(t),tl=c(ks,"."),ks.forEach(t),ol=h(oo),j(Ht.$$.fragment,oo),oo.forEach(t),al=h(z),He=a(z,"DIV",{class:!0});var ao=s(He);j(Oo.$$.fragment,ao),nl=h(ao),_n=a(ao,"P",{});var ip=s(_n);sl=c(ip,"Renames a discussion"),ip.forEach(t),rl=h(ao),j(qt.$$.fragment,ao),il=h(ao),j(Dt.$$.fragment,ao),ao.forEach(t),ll=h(z),We=a(z,"DIV",{class:!0});var Pa=s(We);j(Co.$$.fragment,Pa),cl=h(Pa),bn=a(Pa,"P",{});var lp=s(bn);pl=c(lp,"Get the info object for a given repo of a given type."),lp.forEach(t),gl=h(Pa),j(jt.$$.fragment,Pa),Pa.forEach(t),dl=h(z),Nt=a(z,"DIV",{class:!0});var As=s(Nt);j(So.$$.fragment,As),hl=h(As),vn=a(As,"P",{});var cp=s(vn);ul=c(cp,`Saves the passed access token so git can correctly authenticate the
user.`),cp.forEach(t),As.forEach(t),fl=h(z),qe=a(z,"DIV",{class:!0});var no=s(qe);j(Uo.$$.fragment,no),ml=h(no),$n=a(no,"P",{});var pp=s($n);_l=c(pp,"Get info on one specific Space on huggingface.co."),pp.forEach(t),bl=h(no),yn=a(no,"P",{});var gp=s(yn);vl=c(gp,"Space can be private if you pass an acceptable token."),gp.forEach(t),$l=h(no),j(Ft.$$.fragment,no),no.forEach(t),yl=h(z),Tt=a(z,"DIV",{class:!0});var xs=s(Tt);j(Mo.$$.fragment,xs),El=h(xs),En=a(xs,"P",{});var dp=s(En);wl=c(dp,"Resets the user\u2019s access token."),dp.forEach(t),xs.forEach(t),kl=h(z),Ge=a(z,"DIV",{class:!0});var Ia=s(Ge);j(Vo.$$.fragment,Ia),Al=h(Ia),wn=a(Ia,"P",{});var hp=s(wn);xl=c(hp,"Update the visibility setting of a repository."),hp.forEach(t),Hl=h(Ia),j(Pt.$$.fragment,Ia),Ia.forEach(t),ql=h(z),De=a(z,"DIV",{class:!0});var so=s(De);j(zo.$$.fragment,so),Dl=h(so),kn=a(so,"P",{});var up=s(kn);jl=c(up,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),up.forEach(t),Nl=h(so),j(It.$$.fragment,so),Fl=h(so),j(Lt.$$.fragment,so),so.forEach(t),Tl=h(z),ce=a(z,"DIV",{class:!0});var je=s(ce);j(Wo.$$.fragment,je),Pl=h(je),An=a(je,"P",{});var fp=s(An);Il=c(fp,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),fp.forEach(t),Ll=h(je),xn=a(je,"P",{});var mp=s(xn);Rl=c(mp,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),mp.forEach(t),Ol=h(je),Go=a(je,"P",{});var Hs=s(Go);Cl=c(Hs,"Uses "),Hn=a(Hs,"CODE",{});var _p=s(Hn);Sl=c(_p,"HfApi.create_commit"),_p.forEach(t),Ul=c(Hs," under the hood."),Hs.forEach(t),Ml=h(je),j(Rt.$$.fragment,je),Vl=h(je),j(Ot.$$.fragment,je),je.forEach(t),zl=h(z),Ct=a(z,"DIV",{class:!0});var qs=s(Ct);j(Bo.$$.fragment,qs),Wl=h(qs),qn=a(qs,"P",{});var bp=s(qn);Gl=c(bp,"Call HF API to know \u201Cwhoami\u201D."),bp.forEach(t),qs.forEach(t),z.forEach(t),rs=h(r),Xe=a(r,"H2",{class:!0});var Ds=s(Xe);St=a(Ds,"A",{id:!0,class:!0,href:!0});var vp=s(St);Dn=a(vp,"SPAN",{});var $p=s(Dn);j(Ko.$$.fragment,$p),$p.forEach(t),vp.forEach(t),Bl=h(Ds),jn=a(Ds,"SPAN",{});var yp=s(jn);Kl=c(yp,"Hugging Face local storage"),yp.forEach(t),Ds.forEach(t),is=h(r),Jo=a(r,"P",{});var Fc=s(Jo);Nn=a(Fc,"CODE",{});var Ep=s(Nn);Jl=c(Ep,"huggingface_hub"),Ep.forEach(t),Ql=c(Fc,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fc.forEach(t),ls=h(r),Ut=a(r,"P",{});var js=s(Ut);Xl=c(js,"It does this using the "),qa=a(js,"A",{href:!0});var wp=s(qa);Yl=c(wp,"HfFolder"),wp.forEach(t),Zl=c(js," utility, which saves data at the root of the user."),js.forEach(t),cs=h(r),be=a(r,"DIV",{class:!0});var ro=s(be);j(Qo.$$.fragment,ro),ec=h(ro),Mt=a(ro,"DIV",{class:!0});var Ns=s(Mt);j(Xo.$$.fragment,Ns),tc=h(Ns),Fn=a(Ns,"P",{});var kp=s(Fn);oc=c(kp,"Deletes the token from storage. Does not fail if token does not exist."),kp.forEach(t),Ns.forEach(t),ac=h(ro),Be=a(ro,"DIV",{class:!0});var La=s(Be);j(Yo.$$.fragment,La),nc=h(La),Tn=a(La,"P",{});var Ap=s(Tn);sc=c(Ap,"Get token or None if not existent."),Ap.forEach(t),rc=h(La),Zo=a(La,"P",{});var Fs=s(Zo);ic=c(Fs,"Note that a token can be also provided using the "),Pn=a(Fs,"CODE",{});var xp=s(Pn);lc=c(xp,"HUGGING_FACE_HUB_TOKEN"),xp.forEach(t),cc=c(Fs,`
environment variable.`),Fs.forEach(t),La.forEach(t),pc=h(ro),Vt=a(ro,"DIV",{class:!0});var Ts=s(Vt);j(ea.$$.fragment,Ts),gc=h(Ts),In=a(Ts,"P",{});var Hp=s(In);dc=c(Hp,"Save token, creating folder as needed."),Hp.forEach(t),Ts.forEach(t),ro.forEach(t),ps=h(r),Ye=a(r,"H2",{class:!0});var Ps=s(Ye);zt=a(Ps,"A",{id:!0,class:!0,href:!0});var qp=s(zt);Ln=a(qp,"SPAN",{});var Dp=s(Ln);j(ta.$$.fragment,Dp),Dp.forEach(t),qp.forEach(t),hc=h(Ps),Rn=a(Ps,"SPAN",{});var jp=s(Rn);uc=c(jp,"Filtering helpers"),jp.forEach(t),Ps.forEach(t),gs=h(r),Wt=a(r,"P",{});var Is=s(Wt);fc=c(Is,"Some helpers to filter repositories on the Hub are available in the "),On=a(Is,"CODE",{});var Np=s(On);mc=c(Np,"huggingface_hub"),Np.forEach(t),_c=c(Is," package."),Is.forEach(t),ds=h(r),Te=a(r,"DIV",{class:!0});var Ra=s(Te);j(oa.$$.fragment,Ra),bc=h(Ra),Cn=a(Ra,"P",{});var Fp=s(Cn);vc=c(Fp,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Fp.forEach(t),$c=h(Ra),j(Gt.$$.fragment,Ra),Ra.forEach(t),hs=h(r),Pe=a(r,"DIV",{class:!0});var Oa=s(Pe);j(aa.$$.fragment,Oa),yc=h(Oa),Sn=a(Oa,"P",{});var Tp=s(Sn);Ec=c(Tp,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Tp.forEach(t),wc=h(Oa),j(Bt.$$.fragment,Oa),Oa.forEach(t),us=h(r),Ie=a(r,"DIV",{class:!0});var Ca=s(Ie);j(na.$$.fragment,Ca),kc=h(Ca),Un=a(Ca,"P",{});var Pp=s(Un);Ac=c(Pp,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Pp.forEach(t),xc=h(Ca),j(Kt.$$.fragment,Ca),Ca.forEach(t),fs=h(r),Le=a(r,"DIV",{class:!0});var Sa=s(Le);j(sa.$$.fragment,Sa),Hc=h(Sa),Mn=a(Sa,"P",{});var Ip=s(Mn);qc=c(Ip,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ip.forEach(t),Dc=h(Sa),j(Jt.$$.fragment,Sa),Sa.forEach(t),this.h()},h(){$(p,"name","hf:doc:metadata"),$(p,"content",JSON.stringify(Eg)),$(i,"id","huggingface_hub.HfApi"),$(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(i,"href","#huggingface_hub.HfApi"),$(f,"class","relative group"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($a,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Ea,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(wa,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfApi.create_commit"),$(Aa,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ha,"href","/docs/huggingface_hub/pr_930/en/package_reference/community#huggingface_hub.DiscussionWithDetails"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ro,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(Ro,"rel","nofollow"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(St,"id","huggingface_hub.HfFolder"),$(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(St,"href","#huggingface_hub.HfFolder"),$(Xe,"class","relative group"),$(qa,"href","/docs/huggingface_hub/pr_930/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(zt,"id","huggingface_hub.DatasetFilter"),$(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(zt,"href","#huggingface_hub.DatasetFilter"),$(Ye,"class","relative group"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,H){e(document.head,p),k(r,v,H),k(r,f,H),e(f,i),e(i,g),N(n,g,null),e(f,u),e(f,q),e(q,_),k(r,A,H),k(r,E,H),e(E,b),e(E,w),e(w,I),e(E,L),k(r,R,H),k(r,m,H),e(m,x),e(m,V),e(V,M),e(m,O),k(r,K,H),k(r,G,H),e(G,y),k(r,S,H),N(C,r,H),k(r,X,H),k(r,ee,H),e(ee,Y),e(ee,J),e(J,Z),e(ee,ae),k(r,B,H),N(Q,r,H),k(r,te,H),k(r,ne,H),e(ne,Ce),e(ne,fe),e(fe,Je),e(ne,Se),k(r,Ne,H),k(r,U,H),N(_e,U,null),e(U,_a),e(U,pe),N(Fe,pe,null),e(pe,ba),e(pe,Qe),e(Qe,va),e(pe,Ls),N(Ze,pe,null),e(pe,Rs),N(et,pe,null),e(U,Os),e(U,ve),N(io,ve,null),e(ve,Cs),e(ve,Ua),e(Ua,Ss),e(ve,Us),N(tt,ve,null),e(ve,Ms),N(ot,ve,null),e(U,Vs),e(U,at),N(lo,at,null),e(at,zs),e(at,Ma),e(Ma,Ws),e(U,Gs),e(U,ie),N(co,ie,null),e(ie,Bs),e(ie,Va),e(Va,Ks),e(ie,Js),e(ie,po),e(po,Qs),e(po,za),e(za,Xs),e(po,Ys),e(ie,Zs),e(ie,go),e(go,er),e(go,$a),e($a,tr),e(go,or),e(ie,ar),e(ie,ya),e(ya,nr),e(ya,Ea),e(Ea,sr),e(ie,rr),N(nt,ie,null),e(U,ir),e(U,le),N(ho,le,null),e(le,lr),e(le,uo),e(uo,cr),e(uo,Wa),e(Wa,pr),e(uo,gr),e(le,dr),e(le,fo),e(fo,hr),e(fo,wa),e(wa,ur),e(fo,fr),e(le,mr),e(le,mo),e(mo,_r),e(mo,Ga),e(Ga,br),e(mo,vr),e(le,$r),e(le,ka),e(ka,yr),e(ka,Aa),e(Aa,Er),e(le,wr),N(st,le,null),e(U,kr),e(U,rt),N(_o,rt,null),e(rt,Ar),e(rt,Ba),e(Ba,xr),e(U,Hr),e(U,$e),N(bo,$e,null),e($e,qr),e($e,Ka),e(Ka,Dr),e($e,jr),e($e,Ja),e(Ja,Nr),e($e,Fr),N(it,$e,null),e(U,Tr),e(U,Ue),N(vo,Ue,null),e(Ue,Pr),e(Ue,Qa),e(Qa,Ir),e(Ue,Lr),N(lt,Ue,null),e(U,Rr),e(U,Me),N($o,Me,null),e(Me,Or),e(Me,Xa),e(Xa,Cr),e(Me,Sr),N(ct,Me,null),e(U,Ur),e(U,Ve),N(yo,Ve,null),e(Ve,Mr),e(Ve,Ya),e(Ya,Vr),e(Ve,zr),N(pt,Ve,null),e(U,Wr),e(U,gt),N(Eo,gt,null),e(gt,Gr),e(gt,Za),e(Za,Br),e(U,Kr),e(U,ye),N(wo,ye,null),e(ye,Jr),e(ye,en),e(en,Qr),e(ye,Xr),e(ye,xa),e(xa,Yr),e(xa,Ha),e(Ha,Zr),e(ye,ei),N(dt,ye,null),e(U,ti),e(U,ht),N(ko,ht,null),e(ht,oi),e(ht,tn),e(tn,ai),e(U,ni),e(U,ut),N(Ao,ut,null),e(ut,si),e(ut,on),e(on,ri),e(U,ii),e(U,me),N(xo,me,null),e(me,li),e(me,an),e(an,ci),e(me,pi),e(me,nn),e(nn,gi),e(me,di),N(ft,me,null),e(me,hi),N(mt,me,null),e(U,ui),e(U,Ee),N(Ho,Ee,null),e(Ee,fi),e(Ee,sn),e(sn,mi),e(Ee,_i),e(Ee,rn),e(rn,bi),e(Ee,vi),N(_t,Ee,null),e(U,$i),e(U,we),N(qo,we,null),e(we,yi),e(we,ln),e(ln,Ei),e(we,wi),N(bt,we,null),e(we,ki),N(vt,we,null),e(U,Ai),e(U,$t),N(Do,$t,null),e($t,xi),e($t,cn),e(cn,Hi),e(U,qi),e(U,ke),N(jo,ke,null),e(ke,Di),e(ke,pn),e(pn,ji),e(ke,Ni),N(yt,ke,null),e(ke,Fi),N(Et,ke,null),e(U,Ti),e(U,wt),N(No,wt,null),e(wt,Pi),e(wt,gn),e(gn,Ii),e(U,Li),e(U,kt),N(Fo,kt,null),e(kt,Ri),e(kt,dn),e(dn,Oi),e(U,Ci),e(U,ze),N(To,ze,null),e(ze,Si),e(ze,hn),e(hn,Ui),e(ze,Mi),N(At,ze,null),e(U,Vi),e(U,Ae),N(Po,Ae,null),e(Ae,zi),e(Ae,un),e(un,Wi),e(Ae,Gi),e(Ae,fn),e(fn,Bi),e(Ae,Ki),N(xt,Ae,null),e(U,Ji),e(U,xe),N(Io,xe,null),e(xe,Qi),e(xe,mn),e(mn,Xi),e(xe,Yi),e(xe,Lo),e(Lo,Zi),e(Lo,Ro),e(Ro,el),e(Lo,tl),e(xe,ol),N(Ht,xe,null),e(U,al),e(U,He),N(Oo,He,null),e(He,nl),e(He,_n),e(_n,sl),e(He,rl),N(qt,He,null),e(He,il),N(Dt,He,null),e(U,ll),e(U,We),N(Co,We,null),e(We,cl),e(We,bn),e(bn,pl),e(We,gl),N(jt,We,null),e(U,dl),e(U,Nt),N(So,Nt,null),e(Nt,hl),e(Nt,vn),e(vn,ul),e(U,fl),e(U,qe),N(Uo,qe,null),e(qe,ml),e(qe,$n),e($n,_l),e(qe,bl),e(qe,yn),e(yn,vl),e(qe,$l),N(Ft,qe,null),e(U,yl),e(U,Tt),N(Mo,Tt,null),e(Tt,El),e(Tt,En),e(En,wl),e(U,kl),e(U,Ge),N(Vo,Ge,null),e(Ge,Al),e(Ge,wn),e(wn,xl),e(Ge,Hl),N(Pt,Ge,null),e(U,ql),e(U,De),N(zo,De,null),e(De,Dl),e(De,kn),e(kn,jl),e(De,Nl),N(It,De,null),e(De,Fl),N(Lt,De,null),e(U,Tl),e(U,ce),N(Wo,ce,null),e(ce,Pl),e(ce,An),e(An,Il),e(ce,Ll),e(ce,xn),e(xn,Rl),e(ce,Ol),e(ce,Go),e(Go,Cl),e(Go,Hn),e(Hn,Sl),e(Go,Ul),e(ce,Ml),N(Rt,ce,null),e(ce,Vl),N(Ot,ce,null),e(U,zl),e(U,Ct),N(Bo,Ct,null),e(Ct,Wl),e(Ct,qn),e(qn,Gl),k(r,rs,H),k(r,Xe,H),e(Xe,St),e(St,Dn),N(Ko,Dn,null),e(Xe,Bl),e(Xe,jn),e(jn,Kl),k(r,is,H),k(r,Jo,H),e(Jo,Nn),e(Nn,Jl),e(Jo,Ql),k(r,ls,H),k(r,Ut,H),e(Ut,Xl),e(Ut,qa),e(qa,Yl),e(Ut,Zl),k(r,cs,H),k(r,be,H),N(Qo,be,null),e(be,ec),e(be,Mt),N(Xo,Mt,null),e(Mt,tc),e(Mt,Fn),e(Fn,oc),e(be,ac),e(be,Be),N(Yo,Be,null),e(Be,nc),e(Be,Tn),e(Tn,sc),e(Be,rc),e(Be,Zo),e(Zo,ic),e(Zo,Pn),e(Pn,lc),e(Zo,cc),e(be,pc),e(be,Vt),N(ea,Vt,null),e(Vt,gc),e(Vt,In),e(In,dc),k(r,ps,H),k(r,Ye,H),e(Ye,zt),e(zt,Ln),N(ta,Ln,null),e(Ye,hc),e(Ye,Rn),e(Rn,uc),k(r,gs,H),k(r,Wt,H),e(Wt,fc),e(Wt,On),e(On,mc),e(Wt,_c),k(r,ds,H),k(r,Te,H),N(oa,Te,null),e(Te,bc),e(Te,Cn),e(Cn,vc),e(Te,$c),N(Gt,Te,null),k(r,hs,H),k(r,Pe,H),N(aa,Pe,null),e(Pe,yc),e(Pe,Sn),e(Sn,Ec),e(Pe,wc),N(Bt,Pe,null),k(r,us,H),k(r,Ie,H),N(na,Ie,null),e(Ie,kc),e(Ie,Un),e(Un,Ac),e(Ie,xc),N(Kt,Ie,null),k(r,fs,H),k(r,Le,H),N(sa,Le,null),e(Le,Hc),e(Le,Mn),e(Mn,qc),e(Le,Dc),N(Jt,Le,null),ms=!0},p(r,[H]){const ra={};H&2&&(ra.$$scope={dirty:H,ctx:r}),Ze.$set(ra);const Vn={};H&2&&(Vn.$$scope={dirty:H,ctx:r}),et.$set(Vn);const zn={};H&2&&(zn.$$scope={dirty:H,ctx:r}),tt.$set(zn);const Wn={};H&2&&(Wn.$$scope={dirty:H,ctx:r}),ot.$set(Wn);const ia={};H&2&&(ia.$$scope={dirty:H,ctx:r}),nt.$set(ia);const Gn={};H&2&&(Gn.$$scope={dirty:H,ctx:r}),st.$set(Gn);const la={};H&2&&(la.$$scope={dirty:H,ctx:r}),it.$set(la);const Bn={};H&2&&(Bn.$$scope={dirty:H,ctx:r}),lt.$set(Bn);const Kn={};H&2&&(Kn.$$scope={dirty:H,ctx:r}),ct.$set(Kn);const ca={};H&2&&(ca.$$scope={dirty:H,ctx:r}),pt.$set(ca);const Jn={};H&2&&(Jn.$$scope={dirty:H,ctx:r}),dt.$set(Jn);const pa={};H&2&&(pa.$$scope={dirty:H,ctx:r}),ft.$set(pa);const Qn={};H&2&&(Qn.$$scope={dirty:H,ctx:r}),mt.$set(Qn);const z={};H&2&&(z.$$scope={dirty:H,ctx:r}),_t.$set(z);const Re={};H&2&&(Re.$$scope={dirty:H,ctx:r}),bt.$set(Re);const Xn={};H&2&&(Xn.$$scope={dirty:H,ctx:r}),vt.$set(Xn);const Oe={};H&2&&(Oe.$$scope={dirty:H,ctx:r}),yt.$set(Oe);const Yn={};H&2&&(Yn.$$scope={dirty:H,ctx:r}),Et.$set(Yn);const ga={};H&2&&(ga.$$scope={dirty:H,ctx:r}),At.$set(ga);const Zn={};H&2&&(Zn.$$scope={dirty:H,ctx:r}),xt.$set(Zn);const ge={};H&2&&(ge.$$scope={dirty:H,ctx:r}),Ht.$set(ge);const es={};H&2&&(es.$$scope={dirty:H,ctx:r}),qt.$set(es);const da={};H&2&&(da.$$scope={dirty:H,ctx:r}),Dt.$set(da);const ts={};H&2&&(ts.$$scope={dirty:H,ctx:r}),jt.$set(ts);const ha={};H&2&&(ha.$$scope={dirty:H,ctx:r}),Ft.$set(ha);const os={};H&2&&(os.$$scope={dirty:H,ctx:r}),Pt.$set(os);const Da={};H&2&&(Da.$$scope={dirty:H,ctx:r}),It.$set(Da);const as={};H&2&&(as.$$scope={dirty:H,ctx:r}),Lt.$set(as);const de={};H&2&&(de.$$scope={dirty:H,ctx:r}),Rt.$set(de);const ua={};H&2&&(ua.$$scope={dirty:H,ctx:r}),Ot.$set(ua);const ns={};H&2&&(ns.$$scope={dirty:H,ctx:r}),Gt.$set(ns);const fa={};H&2&&(fa.$$scope={dirty:H,ctx:r}),Bt.$set(fa);const ss={};H&2&&(ss.$$scope={dirty:H,ctx:r}),Kt.$set(ss);const ma={};H&2&&(ma.$$scope={dirty:H,ctx:r}),Jt.$set(ma)},i(r){ms||(F(n.$$.fragment,r),F(C.$$.fragment,r),F(Q.$$.fragment,r),F(_e.$$.fragment,r),F(Fe.$$.fragment,r),F(Ze.$$.fragment,r),F(et.$$.fragment,r),F(io.$$.fragment,r),F(tt.$$.fragment,r),F(ot.$$.fragment,r),F(lo.$$.fragment,r),F(co.$$.fragment,r),F(nt.$$.fragment,r),F(ho.$$.fragment,r),F(st.$$.fragment,r),F(_o.$$.fragment,r),F(bo.$$.fragment,r),F(it.$$.fragment,r),F(vo.$$.fragment,r),F(lt.$$.fragment,r),F($o.$$.fragment,r),F(ct.$$.fragment,r),F(yo.$$.fragment,r),F(pt.$$.fragment,r),F(Eo.$$.fragment,r),F(wo.$$.fragment,r),F(dt.$$.fragment,r),F(ko.$$.fragment,r),F(Ao.$$.fragment,r),F(xo.$$.fragment,r),F(ft.$$.fragment,r),F(mt.$$.fragment,r),F(Ho.$$.fragment,r),F(_t.$$.fragment,r),F(qo.$$.fragment,r),F(bt.$$.fragment,r),F(vt.$$.fragment,r),F(Do.$$.fragment,r),F(jo.$$.fragment,r),F(yt.$$.fragment,r),F(Et.$$.fragment,r),F(No.$$.fragment,r),F(Fo.$$.fragment,r),F(To.$$.fragment,r),F(At.$$.fragment,r),F(Po.$$.fragment,r),F(xt.$$.fragment,r),F(Io.$$.fragment,r),F(Ht.$$.fragment,r),F(Oo.$$.fragment,r),F(qt.$$.fragment,r),F(Dt.$$.fragment,r),F(Co.$$.fragment,r),F(jt.$$.fragment,r),F(So.$$.fragment,r),F(Uo.$$.fragment,r),F(Ft.$$.fragment,r),F(Mo.$$.fragment,r),F(Vo.$$.fragment,r),F(Pt.$$.fragment,r),F(zo.$$.fragment,r),F(It.$$.fragment,r),F(Lt.$$.fragment,r),F(Wo.$$.fragment,r),F(Rt.$$.fragment,r),F(Ot.$$.fragment,r),F(Bo.$$.fragment,r),F(Ko.$$.fragment,r),F(Qo.$$.fragment,r),F(Xo.$$.fragment,r),F(Yo.$$.fragment,r),F(ea.$$.fragment,r),F(ta.$$.fragment,r),F(oa.$$.fragment,r),F(Gt.$$.fragment,r),F(aa.$$.fragment,r),F(Bt.$$.fragment,r),F(na.$$.fragment,r),F(Kt.$$.fragment,r),F(sa.$$.fragment,r),F(Jt.$$.fragment,r),ms=!0)},o(r){T(n.$$.fragment,r),T(C.$$.fragment,r),T(Q.$$.fragment,r),T(_e.$$.fragment,r),T(Fe.$$.fragment,r),T(Ze.$$.fragment,r),T(et.$$.fragment,r),T(io.$$.fragment,r),T(tt.$$.fragment,r),T(ot.$$.fragment,r),T(lo.$$.fragment,r),T(co.$$.fragment,r),T(nt.$$.fragment,r),T(ho.$$.fragment,r),T(st.$$.fragment,r),T(_o.$$.fragment,r),T(bo.$$.fragment,r),T(it.$$.fragment,r),T(vo.$$.fragment,r),T(lt.$$.fragment,r),T($o.$$.fragment,r),T(ct.$$.fragment,r),T(yo.$$.fragment,r),T(pt.$$.fragment,r),T(Eo.$$.fragment,r),T(wo.$$.fragment,r),T(dt.$$.fragment,r),T(ko.$$.fragment,r),T(Ao.$$.fragment,r),T(xo.$$.fragment,r),T(ft.$$.fragment,r),T(mt.$$.fragment,r),T(Ho.$$.fragment,r),T(_t.$$.fragment,r),T(qo.$$.fragment,r),T(bt.$$.fragment,r),T(vt.$$.fragment,r),T(Do.$$.fragment,r),T(jo.$$.fragment,r),T(yt.$$.fragment,r),T(Et.$$.fragment,r),T(No.$$.fragment,r),T(Fo.$$.fragment,r),T(To.$$.fragment,r),T(At.$$.fragment,r),T(Po.$$.fragment,r),T(xt.$$.fragment,r),T(Io.$$.fragment,r),T(Ht.$$.fragment,r),T(Oo.$$.fragment,r),T(qt.$$.fragment,r),T(Dt.$$.fragment,r),T(Co.$$.fragment,r),T(jt.$$.fragment,r),T(So.$$.fragment,r),T(Uo.$$.fragment,r),T(Ft.$$.fragment,r),T(Mo.$$.fragment,r),T(Vo.$$.fragment,r),T(Pt.$$.fragment,r),T(zo.$$.fragment,r),T(It.$$.fragment,r),T(Lt.$$.fragment,r),T(Wo.$$.fragment,r),T(Rt.$$.fragment,r),T(Ot.$$.fragment,r),T(Bo.$$.fragment,r),T(Ko.$$.fragment,r),T(Qo.$$.fragment,r),T(Xo.$$.fragment,r),T(Yo.$$.fragment,r),T(ea.$$.fragment,r),T(ta.$$.fragment,r),T(oa.$$.fragment,r),T(Gt.$$.fragment,r),T(aa.$$.fragment,r),T(Bt.$$.fragment,r),T(na.$$.fragment,r),T(Kt.$$.fragment,r),T(sa.$$.fragment,r),T(Jt.$$.fragment,r),ms=!1},d(r){t(p),r&&t(v),r&&t(f),P(n),r&&t(A),r&&t(E),r&&t(R),r&&t(m),r&&t(K),r&&t(G),r&&t(S),P(C,r),r&&t(X),r&&t(ee),r&&t(B),P(Q,r),r&&t(te),r&&t(ne),r&&t(Ne),r&&t(U),P(_e),P(Fe),P(Ze),P(et),P(io),P(tt),P(ot),P(lo),P(co),P(nt),P(ho),P(st),P(_o),P(bo),P(it),P(vo),P(lt),P($o),P(ct),P(yo),P(pt),P(Eo),P(wo),P(dt),P(ko),P(Ao),P(xo),P(ft),P(mt),P(Ho),P(_t),P(qo),P(bt),P(vt),P(Do),P(jo),P(yt),P(Et),P(No),P(Fo),P(To),P(At),P(Po),P(xt),P(Io),P(Ht),P(Oo),P(qt),P(Dt),P(Co),P(jt),P(So),P(Uo),P(Ft),P(Mo),P(Vo),P(Pt),P(zo),P(It),P(Lt),P(Wo),P(Rt),P(Ot),P(Bo),r&&t(rs),r&&t(Xe),P(Ko),r&&t(is),r&&t(Jo),r&&t(ls),r&&t(Ut),r&&t(cs),r&&t(be),P(Qo),P(Xo),P(Yo),P(ea),r&&t(ps),r&&t(Ye),P(ta),r&&t(gs),r&&t(Wt),r&&t(ds),r&&t(Te),P(oa),P(Gt),r&&t(hs),r&&t(Pe),P(aa),P(Bt),r&&t(us),r&&t(Ie),P(na),P(Kt),r&&t(fs),r&&t(Le),P(sa),P(Jt)}}}const Eg={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function wg(W){return Sp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jg extends Lp{constructor(p){super();Rp(this,p,wg,yg,Op,{})}}export{jg as default,Eg as metadata};
