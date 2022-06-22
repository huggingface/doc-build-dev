import{S as Mi,i as Si,s as Ci,e as a,k as g,w as j,t as i,M as zi,c as n,d as t,m as h,a as s,x,h as l,b as w,G as e,g as v,y as H,q,o as D,B as F,v as Vi,L as Pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as be}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Br}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Le}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Gi(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=i("RevisionNotFoundError"),O=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var L=s(p);b=l(L,"Raises the following errors:"),L.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=l(G,"private"),G.forEach(t),A=l(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=l(W,"RevisionNotFoundError"),W.forEach(t),O=l(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,p,L),e(p,b),v(_,f,L),v(_,c,L),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(c,k),e(c,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Wi(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,ce,ee,Q,X,Y,ve,$e;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),u=i(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=i("ValueError"),P=i(`
if some parameter value is invalid`),O=g(),_=a("li"),L=a("a"),S=i("RepositoryNotFoundError"),M=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),G=i("private"),C=i(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),ce=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),Q=g(),X=a("li"),Y=a("a"),ve=i("EntryNotFoundError"),$e=i(`
If the file to download cannot be found.`),this.h()},l(B){p=n(B,"P",{});var oe=s(p);b=l(oe,"Raises the following errors:"),oe.forEach(t),f=h(B),c=n(B,"UL",{});var K=s(c);d=n(K,"LI",{});var xe=s(d);r=n(xe,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Oe=s(m);N=l(Oe,"HTTPError"),Oe.forEach(t),ae.forEach(t),u=l(xe,`
if the HuggingFace API returned an error`),xe.forEach(t),y=h(K),A=n(K,"LI",{});var He=s(A);k=n(He,"A",{href:!0,rel:!0});var ye=s(k);E=n(ye,"CODE",{});var T=s(E);I=l(T,"ValueError"),T.forEach(t),ye.forEach(t),P=l(He,`
if some parameter value is invalid`),He.forEach(t),O=h(K),_=n(K,"LI",{});var re=s(_);L=n(re,"A",{href:!0});var vo=s(L);S=l(vo,"RepositoryNotFoundError"),vo.forEach(t),M=l(re,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(re,"CODE",{});var ie=s(V);G=l(ie,"private"),ie.forEach(t),C=l(re," and you do not have access."),re.forEach(t),W=h(K),Z=n(K,"LI",{});var ke=s(Z);J=n(ke,"A",{href:!0});var $o=s(J);ce=l($o,"RevisionNotFoundError"),$o.forEach(t),ee=l(ke,`
If the revision to download from cannot be found.`),ke.forEach(t),Q=h(K),X=n(K,"LI",{});var Re=s(X);Y=n(Re,"A",{href:!0});var yo=s(Y);ve=l(yo,"EntryNotFoundError"),yo.forEach(t),$e=l(Re,`
If the file to download cannot be found.`),Re.forEach(t),K.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(L,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),w(Y,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){v(B,p,oe),e(p,b),v(B,f,oe),v(B,c,oe),e(c,d),e(d,r),e(r,m),e(m,N),e(d,u),e(c,y),e(c,A),e(A,k),e(k,E),e(E,I),e(A,P),e(c,O),e(c,_),e(_,L),e(L,S),e(_,M),e(_,V),e(V,G),e(_,C),e(c,W),e(c,Z),e(Z,J),e(J,ce),e(Z,ee),e(c,Q),e(c,X),e(X,Y),e(Y,ve),e(X,$e)},d(B){B&&t(p),B&&t(f),B&&t(c)}}}function Bi(U){let p,b,f,c,d,r,m,N,u,y,A;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),this.h()},l(k){p=n(k,"P",{});var E=s(p);b=l(E,"Raises the following errors:"),E.forEach(t),f=h(k),c=n(k,"UL",{});var I=s(c);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=l(O,"RepositoryNotFoundError"),O.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=l(_,"private"),_.forEach(t),A=l(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,p,E),e(p,b),v(k,f,E),v(k,c,E),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(p),k&&t(f),k&&t(c)}}}function Ki(U){let p,b,f,c,d,r,m,N;return m=new be({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("filter"),d=i(" argument:"),r=g(),j(m.$$.fragment)},l(u){p=n(u,"P",{});var y=s(p);b=l(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);c=l(A,"filter"),A.forEach(t),d=l(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,p,y),e(p,b),e(p,f),e(f,c),e(p,d),v(u,r,y),H(m,u,y),N=!0},p:Pe,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){D(m.$$.fragment,u),N=!1},d(u){u&&t(p),u&&t(r),F(m,u)}}}function Ji(U){let p,b,f,c,d,r,m,N;return m=new be({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("search"),d=i(" argument:"),r=g(),j(m.$$.fragment)},l(u){p=n(u,"P",{});var y=s(p);b=l(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);c=l(A,"search"),A.forEach(t),d=l(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,p,y),e(p,b),e(p,f),e(f,c),e(p,d),v(u,r,y),H(m,u,y),N=!0},p:Pe,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){D(m.$$.fragment,u),N=!1},d(u){u&&t(p),u&&t(r),F(m,u)}}}function Qi(U){let p,b,f,c,d,r,m,N;return m=new be({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("filter"),d=i(" argument:"),r=g(),j(m.$$.fragment)},l(u){p=n(u,"P",{});var y=s(p);b=l(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);c=l(A,"filter"),A.forEach(t),d=l(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,p,y),e(p,b),e(p,f),e(f,c),e(p,d),v(u,r,y),H(m,u,y),N=!0},p:Pe,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){D(m.$$.fragment,u),N=!1},d(u){u&&t(p),u&&t(r),F(m,u)}}}function Xi(U){let p,b,f,c,d,r,m,N;return m=new be({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),b=i("Example usage with the "),f=a("code"),c=i("search"),d=i(" argument:"),r=g(),j(m.$$.fragment)},l(u){p=n(u,"P",{});var y=s(p);b=l(y,"Example usage with the "),f=n(y,"CODE",{});var A=s(f);c=l(A,"search"),A.forEach(t),d=l(y," argument:"),y.forEach(t),r=h(u),x(m.$$.fragment,u)},m(u,y){v(u,p,y),e(p,b),e(p,f),e(f,c),e(p,d),v(u,r,y),H(m,u,y),N=!0},p:Pe,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){D(m.$$.fragment,u),N=!1},d(u){u&&t(p),u&&t(r),F(m,u)}}}function Yi(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=i("RevisionNotFoundError"),O=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var L=s(p);b=l(L,"Raises the following errors:"),L.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=l(G,"private"),G.forEach(t),A=l(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=l(W,"RevisionNotFoundError"),W.forEach(t),O=l(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,p,L),e(p,b),v(_,f,L),v(_,c,L),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(c,k),e(c,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function Zi(U){let p,b,f,c,d,r,m,N,u,y,A;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),this.h()},l(k){p=n(k,"P",{});var E=s(p);b=l(E,"Raises the following errors:"),E.forEach(t),f=h(k),c=n(k,"UL",{});var I=s(c);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=l(O,"RepositoryNotFoundError"),O.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=l(_,"private"),_.forEach(t),A=l(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,p,E),e(p,b),v(k,f,E),v(k,c,E),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(p),k&&t(f),k&&t(c)}}}function el(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=i("RevisionNotFoundError"),O=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var L=s(p);b=l(L,"Raises the following errors:"),L.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=l(G,"private"),G.forEach(t),A=l(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=l(W,"RevisionNotFoundError"),W.forEach(t),O=l(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,p,L),e(p,b),v(_,f,L),v(_,c,L),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(c,k),e(c,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function tl(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),k=g(),E=a("li"),I=a("a"),P=i("RevisionNotFoundError"),O=i(`
If the revision to download from cannot be found.`),this.h()},l(_){p=n(_,"P",{});var L=s(p);b=l(L,"Raises the following errors:"),L.forEach(t),f=h(_),c=n(_,"UL",{});var S=s(c);d=n(S,"LI",{});var M=s(d);r=n(M,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(M,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(M,"CODE",{});var G=s(u);y=l(G,"private"),G.forEach(t),A=l(M," and you do not have access."),M.forEach(t),k=h(S),E=n(S,"LI",{});var C=s(E);I=n(C,"A",{href:!0});var W=s(I);P=l(W,"RevisionNotFoundError"),W.forEach(t),O=l(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,L){v(_,p,L),e(p,b),v(_,f,L),v(_,c,L),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A),e(c,k),e(c,E),e(E,I),e(I,P),e(E,O)},d(_){_&&t(p),_&&t(f),_&&t(c)}}}function ol(U){let p,b,f,c,d,r,m,N,u,y,A;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=i("private"),A=i(" and you do not have access."),this.h()},l(k){p=n(k,"P",{});var E=s(p);b=l(E,"Raises the following errors:"),E.forEach(t),f=h(k),c=n(k,"UL",{});var I=s(c);d=n(I,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var O=s(r);m=l(O,"RepositoryNotFoundError"),O.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(P,"CODE",{});var _=s(u);y=l(_,"private"),_.forEach(t),A=l(P," and you do not have access."),P.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,E){v(k,p,E),e(p,b),v(k,f,E),v(k,c,E),e(c,d),e(d,r),e(r,m),e(d,N),e(d,u),e(u,y),e(d,A)},d(k){k&&t(p),k&&t(f),k&&t(c)}}}function al(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,ce,ee;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),u=i(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=i("ValueError"),P=i(`
if some parameter value is invalid`),O=g(),_=a("li"),L=a("a"),S=i("RepositoryNotFoundError"),M=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),G=i("private"),C=i(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),ce=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),this.h()},l(Q){p=n(Q,"P",{});var X=s(p);b=l(X,"Raises the following errors:"),X.forEach(t),f=h(Q),c=n(Q,"UL",{});var Y=s(c);d=n(Y,"LI",{});var ve=s(d);r=n(ve,"A",{href:!0,rel:!0});var $e=s(r);m=n($e,"CODE",{});var B=s(m);N=l(B,"HTTPError"),B.forEach(t),$e.forEach(t),u=l(ve,`
if the HuggingFace API returned an error`),ve.forEach(t),y=h(Y),A=n(Y,"LI",{});var oe=s(A);k=n(oe,"A",{href:!0,rel:!0});var K=s(k);E=n(K,"CODE",{});var xe=s(E);I=l(xe,"ValueError"),xe.forEach(t),K.forEach(t),P=l(oe,`
if some parameter value is invalid`),oe.forEach(t),O=h(Y),_=n(Y,"LI",{});var ae=s(_);L=n(ae,"A",{href:!0});var Oe=s(L);S=l(Oe,"RepositoryNotFoundError"),Oe.forEach(t),M=l(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var He=s(V);G=l(He,"private"),He.forEach(t),C=l(ae," and you do not have access."),ae.forEach(t),W=h(Y),Z=n(Y,"LI",{});var ye=s(Z);J=n(ye,"A",{href:!0});var T=s(J);ce=l(T,"RevisionNotFoundError"),T.forEach(t),ee=l(ye,`
If the revision to download from cannot be found.`),ye.forEach(t),Y.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(L,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_922/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){v(Q,p,X),e(p,b),v(Q,f,X),v(Q,c,X),e(c,d),e(d,r),e(r,m),e(m,N),e(d,u),e(c,y),e(c,A),e(A,k),e(k,E),e(E,I),e(A,P),e(c,O),e(c,_),e(_,L),e(L,S),e(_,M),e(_,V),e(V,G),e(_,C),e(c,W),e(c,Z),e(Z,J),e(J,ce),e(Z,ee)},d(Q){Q&&t(p),Q&&t(f),Q&&t(c)}}}function nl(U){let p,b,f,c,d;return c=new be({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),b=i("Example usage:"),f=g(),j(c.$$.fragment)},l(r){p=n(r,"P",{});var m=s(p);b=l(m,"Example usage:"),m.forEach(t),f=h(r),x(c.$$.fragment,r)},m(r,m){v(r,p,m),e(p,b),v(r,f,m),H(c,r,m),d=!0},p:Pe,i(r){d||(q(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function sl(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P;return{c(){p=a("p"),b=i("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),u=i(`
if the HuggingFace API returned an error`),y=g(),A=a("li"),k=a("a"),E=a("code"),I=i("ValueError"),P=i(`
if some parameter value is invalid`),this.h()},l(O){p=n(O,"P",{});var _=s(p);b=l(_,"Raises the following errors:"),_.forEach(t),f=h(O),c=n(O,"UL",{});var L=s(c);d=n(L,"LI",{});var S=s(d);r=n(S,"A",{href:!0,rel:!0});var M=s(r);m=n(M,"CODE",{});var V=s(m);N=l(V,"HTTPError"),V.forEach(t),M.forEach(t),u=l(S,`
if the HuggingFace API returned an error`),S.forEach(t),y=h(L),A=n(L,"LI",{});var G=s(A);k=n(G,"A",{href:!0,rel:!0});var C=s(k);E=n(C,"CODE",{});var W=s(E);I=l(W,"ValueError"),W.forEach(t),C.forEach(t),P=l(G,`
if some parameter value is invalid`),G.forEach(t),L.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow")},m(O,_){v(O,p,_),e(p,b),v(O,f,_),v(O,c,_),e(c,d),e(d,r),e(r,m),e(m,N),e(d,u),e(c,y),e(c,A),e(A,k),e(k,E),e(E,I),e(A,P)},d(O){O&&t(p),O&&t(f),O&&t(c)}}}function rl(U){let p,b,f,c,d;return c=new be({props:{code:`upload_file(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
)

upload_file(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
    create_pr=True,
)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/main/remote/experiment/checkpoints&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>    create_pr=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/tree/refs%2Fpr%2F1/remote/experiment/checkpoints&quot;</span>
`}}),{c(){p=a("p"),b=i("Example usage:"),f=g(),j(c.$$.fragment)},l(r){p=n(r,"P",{});var m=s(p);b=l(m,"Example usage:"),m.forEach(t),f=h(r),x(c.$$.fragment,r)},m(r,m){v(r,p,m),e(p,b),v(r,f,m),H(c,r,m),d=!0},p:Pe,i(r){d||(q(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function il(U){let p,b,f,c,d;return c=new be({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),b=i("Examples:"),f=g(),j(c.$$.fragment)},l(r){p=n(r,"P",{});var m=s(p);b=l(m,"Examples:"),m.forEach(t),f=h(r),x(c.$$.fragment,r)},m(r,m){v(r,p,m),e(p,b),v(r,f,m),H(c,r,m),d=!0},p:Pe,i(r){d||(q(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function ll(U){let p,b;return p=new be({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){j(p.$$.fragment)},l(f){x(p.$$.fragment,f)},m(f,c){H(p,f,c),b=!0},p:Pe,i(f){b||(q(p.$$.fragment,f),b=!0)},o(f){D(p.$$.fragment,f),b=!1},d(f){F(p,f)}}}function cl(U){let p,b,f,c,d;return c=new be({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),j(c.$$.fragment)},l(r){p=n(r,"P",{});var m=s(p);b=l(m,"Example:"),m.forEach(t),f=h(r),x(c.$$.fragment,r)},m(r,m){v(r,p,m),e(p,b),v(r,f,m),H(c,r,m),d=!0},p:Pe,i(r){d||(q(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function pl(U){let p,b,f,c,d;return c=new be({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),b=i("Example:"),f=g(),j(c.$$.fragment)},l(r){p=n(r,"P",{});var m=s(p);b=l(m,"Example:"),m.forEach(t),f=h(r),x(c.$$.fragment,r)},m(r,m){v(r,p,m),e(p,b),v(r,f,m),H(c,r,m),d=!0},p:Pe,i(r){d||(q(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(p),r&&t(f),F(c,r)}}}function gl(U){let p,b,f,c,d,r,m,N,u,y,A,k,E,I,P,O,_,L,S,M,V,G,C,W,Z,J,ce,ee,Q,X,Y,ve,$e,B,oe,K,xe,ae,Oe,He,ye,T,re,vo,ie,ke,$o,Re,yo,gn,ne,hn,No,dn,un,To,fn,mn,Io,_n,bn,Lo,vn,$n,Po,yn,kn,Ce,Ft,wn,Oo,En,An,pe,Nt,jn,Ro,xn,Hn,Uo,qn,Dn,ze,Fn,qe,Tt,Nn,Mo,Tn,In,Ve,Ln,De,It,Pn,So,On,Rn,Ge,Un,We,Lt,Mn,Co,Sn,Cn,Be,Pt,zn,zo,Vn,Gn,Ke,Ot,Wn,Vo,Bn,Kn,ge,Rt,Jn,Go,Qn,Xn,Je,Yn,Qe,Zn,Xe,Ut,es,Wo,ts,os,he,Mt,as,Bo,ns,ss,Ye,rs,Ze,is,et,St,ls,Ko,cs,ps,de,Ct,gs,Jo,hs,ds,Qo,us,fs,tt,ms,ue,zt,_s,Xo,bs,vs,Vt,$s,Gt,ys,ks,ws,ot,Es,Fe,Wt,As,Yo,js,xs,at,Hs,nt,Bt,qs,Zo,Ds,Fs,fe,Kt,Ns,ea,Ts,Is,ta,Ls,Ps,st,Os,rt,Jt,Rs,oa,Us,Ms,Ne,Qt,Ss,aa,Cs,zs,it,Vs,me,Xt,Gs,na,Ws,Bs,lt,Ks,ct,Js,te,Yt,Qs,sa,Xs,Ys,ra,Zs,er,Zt,tr,ia,or,ar,nr,pt,sr,gt,rr,ht,eo,ir,la,lr,La,Ue,dt,ca,to,cr,pa,pr,Pa,oo,ga,gr,hr,Oa,ut,dr,ko,ur,fr,Ra,le,ao,mr,ft,no,_r,ha,br,vr,Te,so,$r,da,yr,kr,ro,wr,ua,Er,Ar,jr,mt,io,xr,fa,Hr,Ua,Me,_t,ma,lo,qr,_a,Dr,Ma,bt,Fr,ba,Nr,Tr,Sa,we,co,Ir,va,Lr,Pr,vt,Ca,Ee,po,Or,$a,Rr,Ur,$t,za,Ae,go,Mr,ya,Sr,Cr,yt,Va,je,ho,zr,ka,Vr,Gr,kt,Ga;return r=new Br({}),J=new be({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new be({props:{code:"",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),re=new z({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L561"}}),ke=new z({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1726",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Ft=new z({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1343",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Nt=new z({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1140",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),ze=new Ie({props:{$$slots:{default:[Gi]},$$scope:{ctx:U}}}),Tt=new z({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2142"}}),Ve=new Ie({props:{$$slots:{default:[Wi]},$$scope:{ctx:U}}}),It=new z({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1473"}}),Ge=new Ie({props:{$$slots:{default:[Bi]},$$scope:{ctx:U}}}),Lt=new z({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L682"}}),Pt=new z({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2220",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ot=new z({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L674"}}),Rt=new z({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L900"}}),Je=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Ki]},$$scope:{ctx:U}}}),Qe=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Ji]},$$scope:{ctx:U}}}),Ut=new z({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1065",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Mt=new z({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L692"}}),Ye=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Qi]},$$scope:{ctx:U}}}),Ze=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Xi]},$$scope:{ctx:U}}}),St=new z({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1303",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ct=new z({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1079",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),tt=new Ie({props:{$$slots:{default:[Yi]},$$scope:{ctx:U}}}),zt=new z({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1648"}}),ot=new Ie({props:{$$slots:{default:[Zi]},$$scope:{ctx:U}}}),Wt=new z({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1248",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),at=new Ie({props:{$$slots:{default:[el]},$$scope:{ctx:U}}}),Bt=new z({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L655"}}),Kt=new z({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1194",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),st=new Ie({props:{$$slots:{default:[tl]},$$scope:{ctx:U}}}),Jt=new z({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L667"}}),Qt=new z({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1573",returnDescription:`
<p>The HTTP response in json.</p>
`}}),it=new Ie({props:{$$slots:{default:[ol]},$$scope:{ctx:U}}}),Xt=new z({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1853",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),lt=new Ie({props:{$$slots:{default:[al]},$$scope:{ctx:U}}}),ct=new Le({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[nl]},$$scope:{ctx:U}}}),Yt=new z({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L1998",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),pt=new Ie({props:{$$slots:{default:[sl]},$$scope:{ctx:U}}}),gt=new Le({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[rl]},$$scope:{ctx:U}}}),eo=new z({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L565"}}),to=new Br({}),ao=new z({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2255"}}),no=new z({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2292"}}),so=new z({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2271",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),io=new z({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L2258"}}),lo=new Br({}),co=new z({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),vt=new Le({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[il]},$$scope:{ctx:U}}}),po=new z({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),$t=new Le({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[ll]},$$scope:{ctx:U}}}),go=new z({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L449"}}),yt=new Le({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[cl]},$$scope:{ctx:U}}}),ho=new z({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_922/src/huggingface_hub/hf_api.py#L411"}}),kt=new Le({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[pl]},$$scope:{ctx:U}}}),{c(){p=a("meta"),b=g(),f=a("h1"),c=a("a"),d=a("span"),j(r.$$.fragment),m=g(),N=a("span"),u=i("Hugging Face Hub API"),y=g(),A=a("p"),k=i("Below is the documentation for the "),E=a("code"),I=i("HfApi"),P=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),O=g(),_=a("p"),L=i("All methods from the "),S=a("code"),M=i("HfApi"),V=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),G=g(),C=a("p"),W=i("The following approach uses the method from the root of the package:"),Z=g(),j(J.$$.fragment),ce=g(),ee=a("p"),Q=i("The following approach uses the "),X=a("code"),Y=i("HfApi"),ve=i(" class:"),$e=g(),j(B.$$.fragment),oe=g(),K=a("p"),xe=i("Using the "),ae=a("code"),Oe=i("HfApi"),He=i(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ye=g(),T=a("div"),j(re.$$.fragment),vo=g(),ie=a("div"),j(ke.$$.fragment),$o=g(),Re=a("p"),yo=i("Creates a commit in the given repo, deleting & uploading files as needed."),gn=g(),ne=a("p"),hn=i("Raises: "),No=a("code"),dn=i("ValueError"),un=i(" if "),To=a("code"),fn=i("create_pr"),mn=i(" is "),Io=a("code"),_n=i("True"),bn=i(" and revision is neither "),Lo=a("code"),vn=i("None"),$n=i(" nor "),Po=a("code"),yn=i('"main"'),kn=g(),Ce=a("div"),j(Ft.$$.fragment),wn=g(),Oo=a("p"),En=i("Create an empty repo on the HuggingFace Hub."),An=g(),pe=a("div"),j(Nt.$$.fragment),jn=g(),Ro=a("p"),xn=i("Get info on one specific dataset on huggingface.co."),Hn=g(),Uo=a("p"),qn=i("Dataset can be private if you pass an acceptable token."),Dn=g(),j(ze.$$.fragment),Fn=g(),qe=a("div"),j(Tt.$$.fragment),Nn=g(),Mo=a("p"),Tn=i("Deletes a file in the given repo."),In=g(),j(Ve.$$.fragment),Ln=g(),De=a("div"),j(It.$$.fragment),Pn=g(),So=a("p"),On=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Rn=g(),j(Ge.$$.fragment),Un=g(),We=a("div"),j(Lt.$$.fragment),Mn=g(),Co=a("p"),Sn=i("Gets all valid dataset tags as a nested namespace object."),Cn=g(),Be=a("div"),j(Pt.$$.fragment),zn=g(),zo=a("p"),Vn=i(`Returns the repository name for a given model ID and optional
organization.`),Gn=g(),Ke=a("div"),j(Ot.$$.fragment),Wn=g(),Vo=a("p"),Bn=i("Gets all valid model tags as a nested namespace object"),Kn=g(),ge=a("div"),j(Rt.$$.fragment),Jn=g(),Go=a("p"),Qn=i("Get the public list of all the datasets on huggingface.co"),Xn=g(),j(Je.$$.fragment),Yn=g(),j(Qe.$$.fragment),Zn=g(),Xe=a("div"),j(Ut.$$.fragment),es=g(),Wo=a("p"),ts=i("Get the public list of all the metrics on huggingface.co"),os=g(),he=a("div"),j(Mt.$$.fragment),as=g(),Bo=a("p"),ns=i("Get the public list of all the models on huggingface.co"),ss=g(),j(Ye.$$.fragment),rs=g(),j(Ze.$$.fragment),is=g(),et=a("div"),j(St.$$.fragment),ls=g(),Ko=a("p"),cs=i("Get the list of files in a given repo."),ps=g(),de=a("div"),j(Ct.$$.fragment),gs=g(),Jo=a("p"),hs=i("Get info on one specific model on huggingface.co"),ds=g(),Qo=a("p"),us=i("Model can be private if you pass an acceptable token or are logged in."),fs=g(),j(tt.$$.fragment),ms=g(),ue=a("div"),j(zt.$$.fragment),_s=g(),Xo=a("p"),bs=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),vs=g(),Vt=a("p"),$s=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),Gt=a("a"),ys=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ks=i("."),ws=g(),j(ot.$$.fragment),Es=g(),Fe=a("div"),j(Wt.$$.fragment),As=g(),Yo=a("p"),js=i("Get the info object for a given repo of a given type."),xs=g(),j(at.$$.fragment),Hs=g(),nt=a("div"),j(Bt.$$.fragment),qs=g(),Zo=a("p"),Ds=i(`Saves the passed access token so git can correctly authenticate the
user.`),Fs=g(),fe=a("div"),j(Kt.$$.fragment),Ns=g(),ea=a("p"),Ts=i("Get info on one specific Space on huggingface.co."),Is=g(),ta=a("p"),Ls=i("Space can be private if you pass an acceptable token."),Ps=g(),j(st.$$.fragment),Os=g(),rt=a("div"),j(Jt.$$.fragment),Rs=g(),oa=a("p"),Us=i("Resets the user\u2019s access token."),Ms=g(),Ne=a("div"),j(Qt.$$.fragment),Ss=g(),aa=a("p"),Cs=i("Update the visibility setting of a repository."),zs=g(),j(it.$$.fragment),Vs=g(),me=a("div"),j(Xt.$$.fragment),Gs=g(),na=a("p"),Ws=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Bs=g(),j(lt.$$.fragment),Ks=g(),j(ct.$$.fragment),Js=g(),te=a("div"),j(Yt.$$.fragment),Qs=g(),sa=a("p"),Xs=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Ys=g(),ra=a("p"),Zs=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),er=g(),Zt=a("p"),tr=i("Uses "),ia=a("code"),or=i("HfApi.create_commit"),ar=i(" under the hood."),nr=g(),j(pt.$$.fragment),sr=g(),j(gt.$$.fragment),rr=g(),ht=a("div"),j(eo.$$.fragment),ir=g(),la=a("p"),lr=i("Call HF API to know \u201Cwhoami\u201D."),La=g(),Ue=a("h2"),dt=a("a"),ca=a("span"),j(to.$$.fragment),cr=g(),pa=a("span"),pr=i("Hugging Face local storage"),Pa=g(),oo=a("p"),ga=a("code"),gr=i("huggingface_hub"),hr=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Oa=g(),ut=a("p"),dr=i("It does this using the "),ko=a("a"),ur=i("HfFolder"),fr=i(" utility, which saves data at the root of the user."),Ra=g(),le=a("div"),j(ao.$$.fragment),mr=g(),ft=a("div"),j(no.$$.fragment),_r=g(),ha=a("p"),br=i("Deletes the token from storage. Does not fail if token does not exist."),vr=g(),Te=a("div"),j(so.$$.fragment),$r=g(),da=a("p"),yr=i("Get token or None if not existent."),kr=g(),ro=a("p"),wr=i("Note that a token can be also provided using the "),ua=a("code"),Er=i("HUGGING_FACE_HUB_TOKEN"),Ar=i(`
environment variable.`),jr=g(),mt=a("div"),j(io.$$.fragment),xr=g(),fa=a("p"),Hr=i("Save token, creating folder as needed."),Ua=g(),Me=a("h2"),_t=a("a"),ma=a("span"),j(lo.$$.fragment),qr=g(),_a=a("span"),Dr=i("Filtering helpers"),Ma=g(),bt=a("p"),Fr=i("Some helpers to filter repositories on the Hub are available in the "),ba=a("code"),Nr=i("huggingface_hub"),Tr=i(" package."),Sa=g(),we=a("div"),j(co.$$.fragment),Ir=g(),va=a("p"),Lr=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Pr=g(),j(vt.$$.fragment),Ca=g(),Ee=a("div"),j(po.$$.fragment),Or=g(),$a=a("p"),Rr=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ur=g(),j($t.$$.fragment),za=g(),Ae=a("div"),j(go.$$.fragment),Mr=g(),ya=a("p"),Sr=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Cr=g(),j(yt.$$.fragment),Va=g(),je=a("div"),j(ho.$$.fragment),zr=g(),ka=a("p"),Vr=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Gr=g(),j(kt.$$.fragment),this.h()},l(o){const $=zi('[data-svelte="svelte-1phssyn"]',document.head);p=n($,"META",{name:!0,content:!0}),$.forEach(t),b=h(o),f=n(o,"H1",{class:!0});var uo=s(f);c=n(uo,"A",{id:!0,class:!0,href:!0});var wa=s(c);d=n(wa,"SPAN",{});var Ea=s(d);x(r.$$.fragment,Ea),Ea.forEach(t),wa.forEach(t),m=h(uo),N=n(uo,"SPAN",{});var Aa=s(N);u=l(Aa,"Hugging Face Hub API"),Aa.forEach(t),uo.forEach(t),y=h(o),A=n(o,"P",{});var fo=s(A);k=l(fo,"Below is the documentation for the "),E=n(fo,"CODE",{});var ja=s(E);I=l(ja,"HfApi"),ja.forEach(t),P=l(fo,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),fo.forEach(t),O=h(o),_=n(o,"P",{});var mo=s(_);L=l(mo,"All methods from the "),S=n(mo,"CODE",{});var xa=s(S);M=l(xa,"HfApi"),xa.forEach(t),V=l(mo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),mo.forEach(t),G=h(o),C=n(o,"P",{});var Ha=s(C);W=l(Ha,"The following approach uses the method from the root of the package:"),Ha.forEach(t),Z=h(o),x(J.$$.fragment,o),ce=h(o),ee=n(o,"P",{});var _o=s(ee);Q=l(_o,"The following approach uses the "),X=n(_o,"CODE",{});var qa=s(X);Y=l(qa,"HfApi"),qa.forEach(t),ve=l(_o," class:"),_o.forEach(t),$e=h(o),x(B.$$.fragment,o),oe=h(o),K=n(o,"P",{});var bo=s(K);xe=l(bo,"Using the "),ae=n(bo,"CODE",{});var Da=s(ae);Oe=l(Da,"HfApi"),Da.forEach(t),He=l(bo," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),bo.forEach(t),ye=h(o),T=n(o,"DIV",{class:!0});var R=s(T);x(re.$$.fragment,R),vo=h(R),ie=n(R,"DIV",{class:!0});var Se=s(ie);x(ke.$$.fragment,Se),$o=h(Se),Re=n(Se,"P",{});var Fa=s(Re);yo=l(Fa,"Creates a commit in the given repo, deleting & uploading files as needed."),Fa.forEach(t),gn=h(Se),ne=n(Se,"P",{});var se=s(ne);hn=l(se,"Raises: "),No=n(se,"CODE",{});var Na=s(No);dn=l(Na,"ValueError"),Na.forEach(t),un=l(se," if "),To=n(se,"CODE",{});var Ta=s(To);fn=l(Ta,"create_pr"),Ta.forEach(t),mn=l(se," is "),Io=n(se,"CODE",{});var Ia=s(Io);_n=l(Ia,"True"),Ia.forEach(t),bn=l(se," and revision is neither "),Lo=n(se,"CODE",{});var Kr=s(Lo);vn=l(Kr,"None"),Kr.forEach(t),$n=l(se," nor "),Po=n(se,"CODE",{});var Jr=s(Po);yn=l(Jr,'"main"'),Jr.forEach(t),se.forEach(t),Se.forEach(t),kn=h(R),Ce=n(R,"DIV",{class:!0});var Wa=s(Ce);x(Ft.$$.fragment,Wa),wn=h(Wa),Oo=n(Wa,"P",{});var Qr=s(Oo);En=l(Qr,"Create an empty repo on the HuggingFace Hub."),Qr.forEach(t),Wa.forEach(t),An=h(R),pe=n(R,"DIV",{class:!0});var wt=s(pe);x(Nt.$$.fragment,wt),jn=h(wt),Ro=n(wt,"P",{});var Xr=s(Ro);xn=l(Xr,"Get info on one specific dataset on huggingface.co."),Xr.forEach(t),Hn=h(wt),Uo=n(wt,"P",{});var Yr=s(Uo);qn=l(Yr,"Dataset can be private if you pass an acceptable token."),Yr.forEach(t),Dn=h(wt),x(ze.$$.fragment,wt),wt.forEach(t),Fn=h(R),qe=n(R,"DIV",{class:!0});var wo=s(qe);x(Tt.$$.fragment,wo),Nn=h(wo),Mo=n(wo,"P",{});var Zr=s(Mo);Tn=l(Zr,"Deletes a file in the given repo."),Zr.forEach(t),In=h(wo),x(Ve.$$.fragment,wo),wo.forEach(t),Ln=h(R),De=n(R,"DIV",{class:!0});var Eo=s(De);x(It.$$.fragment,Eo),Pn=h(Eo),So=n(Eo,"P",{});var ei=s(So);On=l(ei,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ei.forEach(t),Rn=h(Eo),x(Ge.$$.fragment,Eo),Eo.forEach(t),Un=h(R),We=n(R,"DIV",{class:!0});var Ba=s(We);x(Lt.$$.fragment,Ba),Mn=h(Ba),Co=n(Ba,"P",{});var ti=s(Co);Sn=l(ti,"Gets all valid dataset tags as a nested namespace object."),ti.forEach(t),Ba.forEach(t),Cn=h(R),Be=n(R,"DIV",{class:!0});var Ka=s(Be);x(Pt.$$.fragment,Ka),zn=h(Ka),zo=n(Ka,"P",{});var oi=s(zo);Vn=l(oi,`Returns the repository name for a given model ID and optional
organization.`),oi.forEach(t),Ka.forEach(t),Gn=h(R),Ke=n(R,"DIV",{class:!0});var Ja=s(Ke);x(Ot.$$.fragment,Ja),Wn=h(Ja),Vo=n(Ja,"P",{});var ai=s(Vo);Bn=l(ai,"Gets all valid model tags as a nested namespace object"),ai.forEach(t),Ja.forEach(t),Kn=h(R),ge=n(R,"DIV",{class:!0});var Et=s(ge);x(Rt.$$.fragment,Et),Jn=h(Et),Go=n(Et,"P",{});var ni=s(Go);Qn=l(ni,"Get the public list of all the datasets on huggingface.co"),ni.forEach(t),Xn=h(Et),x(Je.$$.fragment,Et),Yn=h(Et),x(Qe.$$.fragment,Et),Et.forEach(t),Zn=h(R),Xe=n(R,"DIV",{class:!0});var Qa=s(Xe);x(Ut.$$.fragment,Qa),es=h(Qa),Wo=n(Qa,"P",{});var si=s(Wo);ts=l(si,"Get the public list of all the metrics on huggingface.co"),si.forEach(t),Qa.forEach(t),os=h(R),he=n(R,"DIV",{class:!0});var At=s(he);x(Mt.$$.fragment,At),as=h(At),Bo=n(At,"P",{});var ri=s(Bo);ns=l(ri,"Get the public list of all the models on huggingface.co"),ri.forEach(t),ss=h(At),x(Ye.$$.fragment,At),rs=h(At),x(Ze.$$.fragment,At),At.forEach(t),is=h(R),et=n(R,"DIV",{class:!0});var Xa=s(et);x(St.$$.fragment,Xa),ls=h(Xa),Ko=n(Xa,"P",{});var ii=s(Ko);cs=l(ii,"Get the list of files in a given repo."),ii.forEach(t),Xa.forEach(t),ps=h(R),de=n(R,"DIV",{class:!0});var jt=s(de);x(Ct.$$.fragment,jt),gs=h(jt),Jo=n(jt,"P",{});var li=s(Jo);hs=l(li,"Get info on one specific model on huggingface.co"),li.forEach(t),ds=h(jt),Qo=n(jt,"P",{});var ci=s(Qo);us=l(ci,"Model can be private if you pass an acceptable token or are logged in."),ci.forEach(t),fs=h(jt),x(tt.$$.fragment,jt),jt.forEach(t),ms=h(R),ue=n(R,"DIV",{class:!0});var xt=s(ue);x(zt.$$.fragment,xt),_s=h(xt),Xo=n(xt,"P",{});var pi=s(Xo);bs=l(pi,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),pi.forEach(t),vs=h(xt),Vt=n(xt,"P",{});var Ya=s(Vt);$s=l(Ya,`Note there are certain limitations. For more information about moving
repositories, please see
`),Gt=n(Ya,"A",{href:!0,rel:!0});var gi=s(Gt);ys=l(gi,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),gi.forEach(t),ks=l(Ya,"."),Ya.forEach(t),ws=h(xt),x(ot.$$.fragment,xt),xt.forEach(t),Es=h(R),Fe=n(R,"DIV",{class:!0});var Ao=s(Fe);x(Wt.$$.fragment,Ao),As=h(Ao),Yo=n(Ao,"P",{});var hi=s(Yo);js=l(hi,"Get the info object for a given repo of a given type."),hi.forEach(t),xs=h(Ao),x(at.$$.fragment,Ao),Ao.forEach(t),Hs=h(R),nt=n(R,"DIV",{class:!0});var Za=s(nt);x(Bt.$$.fragment,Za),qs=h(Za),Zo=n(Za,"P",{});var di=s(Zo);Ds=l(di,`Saves the passed access token so git can correctly authenticate the
user.`),di.forEach(t),Za.forEach(t),Fs=h(R),fe=n(R,"DIV",{class:!0});var Ht=s(fe);x(Kt.$$.fragment,Ht),Ns=h(Ht),ea=n(Ht,"P",{});var ui=s(ea);Ts=l(ui,"Get info on one specific Space on huggingface.co."),ui.forEach(t),Is=h(Ht),ta=n(Ht,"P",{});var fi=s(ta);Ls=l(fi,"Space can be private if you pass an acceptable token."),fi.forEach(t),Ps=h(Ht),x(st.$$.fragment,Ht),Ht.forEach(t),Os=h(R),rt=n(R,"DIV",{class:!0});var en=s(rt);x(Jt.$$.fragment,en),Rs=h(en),oa=n(en,"P",{});var mi=s(oa);Us=l(mi,"Resets the user\u2019s access token."),mi.forEach(t),en.forEach(t),Ms=h(R),Ne=n(R,"DIV",{class:!0});var jo=s(Ne);x(Qt.$$.fragment,jo),Ss=h(jo),aa=n(jo,"P",{});var _i=s(aa);Cs=l(_i,"Update the visibility setting of a repository."),_i.forEach(t),zs=h(jo),x(it.$$.fragment,jo),jo.forEach(t),Vs=h(R),me=n(R,"DIV",{class:!0});var qt=s(me);x(Xt.$$.fragment,qt),Gs=h(qt),na=n(qt,"P",{});var bi=s(na);Ws=l(bi,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),bi.forEach(t),Bs=h(qt),x(lt.$$.fragment,qt),Ks=h(qt),x(ct.$$.fragment,qt),qt.forEach(t),Js=h(R),te=n(R,"DIV",{class:!0});var _e=s(te);x(Yt.$$.fragment,_e),Qs=h(_e),sa=n(_e,"P",{});var vi=s(sa);Xs=l(vi,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),vi.forEach(t),Ys=h(_e),ra=n(_e,"P",{});var $i=s(ra);Zs=l($i,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),$i.forEach(t),er=h(_e),Zt=n(_e,"P",{});var tn=s(Zt);tr=l(tn,"Uses "),ia=n(tn,"CODE",{});var yi=s(ia);or=l(yi,"HfApi.create_commit"),yi.forEach(t),ar=l(tn," under the hood."),tn.forEach(t),nr=h(_e),x(pt.$$.fragment,_e),sr=h(_e),x(gt.$$.fragment,_e),_e.forEach(t),rr=h(R),ht=n(R,"DIV",{class:!0});var on=s(ht);x(eo.$$.fragment,on),ir=h(on),la=n(on,"P",{});var ki=s(la);lr=l(ki,"Call HF API to know \u201Cwhoami\u201D."),ki.forEach(t),on.forEach(t),R.forEach(t),La=h(o),Ue=n(o,"H2",{class:!0});var an=s(Ue);dt=n(an,"A",{id:!0,class:!0,href:!0});var wi=s(dt);ca=n(wi,"SPAN",{});var Ei=s(ca);x(to.$$.fragment,Ei),Ei.forEach(t),wi.forEach(t),cr=h(an),pa=n(an,"SPAN",{});var Ai=s(pa);pr=l(Ai,"Hugging Face local storage"),Ai.forEach(t),an.forEach(t),Pa=h(o),oo=n(o,"P",{});var Wr=s(oo);ga=n(Wr,"CODE",{});var ji=s(ga);gr=l(ji,"huggingface_hub"),ji.forEach(t),hr=l(Wr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Wr.forEach(t),Oa=h(o),ut=n(o,"P",{});var nn=s(ut);dr=l(nn,"It does this using the "),ko=n(nn,"A",{href:!0});var xi=s(ko);ur=l(xi,"HfFolder"),xi.forEach(t),fr=l(nn," utility, which saves data at the root of the user."),nn.forEach(t),Ra=h(o),le=n(o,"DIV",{class:!0});var Dt=s(le);x(ao.$$.fragment,Dt),mr=h(Dt),ft=n(Dt,"DIV",{class:!0});var sn=s(ft);x(no.$$.fragment,sn),_r=h(sn),ha=n(sn,"P",{});var Hi=s(ha);br=l(Hi,"Deletes the token from storage. Does not fail if token does not exist."),Hi.forEach(t),sn.forEach(t),vr=h(Dt),Te=n(Dt,"DIV",{class:!0});var xo=s(Te);x(so.$$.fragment,xo),$r=h(xo),da=n(xo,"P",{});var qi=s(da);yr=l(qi,"Get token or None if not existent."),qi.forEach(t),kr=h(xo),ro=n(xo,"P",{});var rn=s(ro);wr=l(rn,"Note that a token can be also provided using the "),ua=n(rn,"CODE",{});var Di=s(ua);Er=l(Di,"HUGGING_FACE_HUB_TOKEN"),Di.forEach(t),Ar=l(rn,`
environment variable.`),rn.forEach(t),xo.forEach(t),jr=h(Dt),mt=n(Dt,"DIV",{class:!0});var ln=s(mt);x(io.$$.fragment,ln),xr=h(ln),fa=n(ln,"P",{});var Fi=s(fa);Hr=l(Fi,"Save token, creating folder as needed."),Fi.forEach(t),ln.forEach(t),Dt.forEach(t),Ua=h(o),Me=n(o,"H2",{class:!0});var cn=s(Me);_t=n(cn,"A",{id:!0,class:!0,href:!0});var Ni=s(_t);ma=n(Ni,"SPAN",{});var Ti=s(ma);x(lo.$$.fragment,Ti),Ti.forEach(t),Ni.forEach(t),qr=h(cn),_a=n(cn,"SPAN",{});var Ii=s(_a);Dr=l(Ii,"Filtering helpers"),Ii.forEach(t),cn.forEach(t),Ma=h(o),bt=n(o,"P",{});var pn=s(bt);Fr=l(pn,"Some helpers to filter repositories on the Hub are available in the "),ba=n(pn,"CODE",{});var Li=s(ba);Nr=l(Li,"huggingface_hub"),Li.forEach(t),Tr=l(pn," package."),pn.forEach(t),Sa=h(o),we=n(o,"DIV",{class:!0});var Ho=s(we);x(co.$$.fragment,Ho),Ir=h(Ho),va=n(Ho,"P",{});var Pi=s(va);Lr=l(Pi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Pi.forEach(t),Pr=h(Ho),x(vt.$$.fragment,Ho),Ho.forEach(t),Ca=h(o),Ee=n(o,"DIV",{class:!0});var qo=s(Ee);x(po.$$.fragment,qo),Or=h(qo),$a=n(qo,"P",{});var Oi=s($a);Rr=l(Oi,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Oi.forEach(t),Ur=h(qo),x($t.$$.fragment,qo),qo.forEach(t),za=h(o),Ae=n(o,"DIV",{class:!0});var Do=s(Ae);x(go.$$.fragment,Do),Mr=h(Do),ya=n(Do,"P",{});var Ri=s(ya);Sr=l(Ri,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ri.forEach(t),Cr=h(Do),x(yt.$$.fragment,Do),Do.forEach(t),Va=h(o),je=n(o,"DIV",{class:!0});var Fo=s(je);x(ho.$$.fragment,Fo),zr=h(Fo),ka=n(Fo,"P",{});var Ui=s(ka);Vr=l(Ui,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ui.forEach(t),Gr=h(Fo),x(kt.$$.fragment,Fo),Fo.forEach(t),this.h()},h(){w(p,"name","hf:doc:metadata"),w(p,"content",JSON.stringify(hl)),w(c,"id","huggingface_hub.HfApi"),w(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(c,"href","#huggingface_hub.HfApi"),w(f,"class","relative group"),w(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Gt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),w(Gt,"rel","nofollow"),w(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(dt,"id","huggingface_hub.HfFolder"),w(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(dt,"href","#huggingface_hub.HfFolder"),w(Ue,"class","relative group"),w(ko,"href","/docs/huggingface_hub/pr_922/en/package_reference/hf_api#huggingface_hub.HfFolder"),w(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(_t,"id","huggingface_hub.DatasetFilter"),w(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(_t,"href","#huggingface_hub.DatasetFilter"),w(Me,"class","relative group"),w(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,$){e(document.head,p),v(o,b,$),v(o,f,$),e(f,c),e(c,d),H(r,d,null),e(f,m),e(f,N),e(N,u),v(o,y,$),v(o,A,$),e(A,k),e(A,E),e(E,I),e(A,P),v(o,O,$),v(o,_,$),e(_,L),e(_,S),e(S,M),e(_,V),v(o,G,$),v(o,C,$),e(C,W),v(o,Z,$),H(J,o,$),v(o,ce,$),v(o,ee,$),e(ee,Q),e(ee,X),e(X,Y),e(ee,ve),v(o,$e,$),H(B,o,$),v(o,oe,$),v(o,K,$),e(K,xe),e(K,ae),e(ae,Oe),e(K,He),v(o,ye,$),v(o,T,$),H(re,T,null),e(T,vo),e(T,ie),H(ke,ie,null),e(ie,$o),e(ie,Re),e(Re,yo),e(ie,gn),e(ie,ne),e(ne,hn),e(ne,No),e(No,dn),e(ne,un),e(ne,To),e(To,fn),e(ne,mn),e(ne,Io),e(Io,_n),e(ne,bn),e(ne,Lo),e(Lo,vn),e(ne,$n),e(ne,Po),e(Po,yn),e(T,kn),e(T,Ce),H(Ft,Ce,null),e(Ce,wn),e(Ce,Oo),e(Oo,En),e(T,An),e(T,pe),H(Nt,pe,null),e(pe,jn),e(pe,Ro),e(Ro,xn),e(pe,Hn),e(pe,Uo),e(Uo,qn),e(pe,Dn),H(ze,pe,null),e(T,Fn),e(T,qe),H(Tt,qe,null),e(qe,Nn),e(qe,Mo),e(Mo,Tn),e(qe,In),H(Ve,qe,null),e(T,Ln),e(T,De),H(It,De,null),e(De,Pn),e(De,So),e(So,On),e(De,Rn),H(Ge,De,null),e(T,Un),e(T,We),H(Lt,We,null),e(We,Mn),e(We,Co),e(Co,Sn),e(T,Cn),e(T,Be),H(Pt,Be,null),e(Be,zn),e(Be,zo),e(zo,Vn),e(T,Gn),e(T,Ke),H(Ot,Ke,null),e(Ke,Wn),e(Ke,Vo),e(Vo,Bn),e(T,Kn),e(T,ge),H(Rt,ge,null),e(ge,Jn),e(ge,Go),e(Go,Qn),e(ge,Xn),H(Je,ge,null),e(ge,Yn),H(Qe,ge,null),e(T,Zn),e(T,Xe),H(Ut,Xe,null),e(Xe,es),e(Xe,Wo),e(Wo,ts),e(T,os),e(T,he),H(Mt,he,null),e(he,as),e(he,Bo),e(Bo,ns),e(he,ss),H(Ye,he,null),e(he,rs),H(Ze,he,null),e(T,is),e(T,et),H(St,et,null),e(et,ls),e(et,Ko),e(Ko,cs),e(T,ps),e(T,de),H(Ct,de,null),e(de,gs),e(de,Jo),e(Jo,hs),e(de,ds),e(de,Qo),e(Qo,us),e(de,fs),H(tt,de,null),e(T,ms),e(T,ue),H(zt,ue,null),e(ue,_s),e(ue,Xo),e(Xo,bs),e(ue,vs),e(ue,Vt),e(Vt,$s),e(Vt,Gt),e(Gt,ys),e(Vt,ks),e(ue,ws),H(ot,ue,null),e(T,Es),e(T,Fe),H(Wt,Fe,null),e(Fe,As),e(Fe,Yo),e(Yo,js),e(Fe,xs),H(at,Fe,null),e(T,Hs),e(T,nt),H(Bt,nt,null),e(nt,qs),e(nt,Zo),e(Zo,Ds),e(T,Fs),e(T,fe),H(Kt,fe,null),e(fe,Ns),e(fe,ea),e(ea,Ts),e(fe,Is),e(fe,ta),e(ta,Ls),e(fe,Ps),H(st,fe,null),e(T,Os),e(T,rt),H(Jt,rt,null),e(rt,Rs),e(rt,oa),e(oa,Us),e(T,Ms),e(T,Ne),H(Qt,Ne,null),e(Ne,Ss),e(Ne,aa),e(aa,Cs),e(Ne,zs),H(it,Ne,null),e(T,Vs),e(T,me),H(Xt,me,null),e(me,Gs),e(me,na),e(na,Ws),e(me,Bs),H(lt,me,null),e(me,Ks),H(ct,me,null),e(T,Js),e(T,te),H(Yt,te,null),e(te,Qs),e(te,sa),e(sa,Xs),e(te,Ys),e(te,ra),e(ra,Zs),e(te,er),e(te,Zt),e(Zt,tr),e(Zt,ia),e(ia,or),e(Zt,ar),e(te,nr),H(pt,te,null),e(te,sr),H(gt,te,null),e(T,rr),e(T,ht),H(eo,ht,null),e(ht,ir),e(ht,la),e(la,lr),v(o,La,$),v(o,Ue,$),e(Ue,dt),e(dt,ca),H(to,ca,null),e(Ue,cr),e(Ue,pa),e(pa,pr),v(o,Pa,$),v(o,oo,$),e(oo,ga),e(ga,gr),e(oo,hr),v(o,Oa,$),v(o,ut,$),e(ut,dr),e(ut,ko),e(ko,ur),e(ut,fr),v(o,Ra,$),v(o,le,$),H(ao,le,null),e(le,mr),e(le,ft),H(no,ft,null),e(ft,_r),e(ft,ha),e(ha,br),e(le,vr),e(le,Te),H(so,Te,null),e(Te,$r),e(Te,da),e(da,yr),e(Te,kr),e(Te,ro),e(ro,wr),e(ro,ua),e(ua,Er),e(ro,Ar),e(le,jr),e(le,mt),H(io,mt,null),e(mt,xr),e(mt,fa),e(fa,Hr),v(o,Ua,$),v(o,Me,$),e(Me,_t),e(_t,ma),H(lo,ma,null),e(Me,qr),e(Me,_a),e(_a,Dr),v(o,Ma,$),v(o,bt,$),e(bt,Fr),e(bt,ba),e(ba,Nr),e(bt,Tr),v(o,Sa,$),v(o,we,$),H(co,we,null),e(we,Ir),e(we,va),e(va,Lr),e(we,Pr),H(vt,we,null),v(o,Ca,$),v(o,Ee,$),H(po,Ee,null),e(Ee,Or),e(Ee,$a),e($a,Rr),e(Ee,Ur),H($t,Ee,null),v(o,za,$),v(o,Ae,$),H(go,Ae,null),e(Ae,Mr),e(Ae,ya),e(ya,Sr),e(Ae,Cr),H(yt,Ae,null),v(o,Va,$),v(o,je,$),H(ho,je,null),e(je,zr),e(je,ka),e(ka,Vr),e(je,Gr),H(kt,je,null),Ga=!0},p(o,[$]){const uo={};$&2&&(uo.$$scope={dirty:$,ctx:o}),ze.$set(uo);const wa={};$&2&&(wa.$$scope={dirty:$,ctx:o}),Ve.$set(wa);const Ea={};$&2&&(Ea.$$scope={dirty:$,ctx:o}),Ge.$set(Ea);const Aa={};$&2&&(Aa.$$scope={dirty:$,ctx:o}),Je.$set(Aa);const fo={};$&2&&(fo.$$scope={dirty:$,ctx:o}),Qe.$set(fo);const ja={};$&2&&(ja.$$scope={dirty:$,ctx:o}),Ye.$set(ja);const mo={};$&2&&(mo.$$scope={dirty:$,ctx:o}),Ze.$set(mo);const xa={};$&2&&(xa.$$scope={dirty:$,ctx:o}),tt.$set(xa);const Ha={};$&2&&(Ha.$$scope={dirty:$,ctx:o}),ot.$set(Ha);const _o={};$&2&&(_o.$$scope={dirty:$,ctx:o}),at.$set(_o);const qa={};$&2&&(qa.$$scope={dirty:$,ctx:o}),st.$set(qa);const bo={};$&2&&(bo.$$scope={dirty:$,ctx:o}),it.$set(bo);const Da={};$&2&&(Da.$$scope={dirty:$,ctx:o}),lt.$set(Da);const R={};$&2&&(R.$$scope={dirty:$,ctx:o}),ct.$set(R);const Se={};$&2&&(Se.$$scope={dirty:$,ctx:o}),pt.$set(Se);const Fa={};$&2&&(Fa.$$scope={dirty:$,ctx:o}),gt.$set(Fa);const se={};$&2&&(se.$$scope={dirty:$,ctx:o}),vt.$set(se);const Na={};$&2&&(Na.$$scope={dirty:$,ctx:o}),$t.$set(Na);const Ta={};$&2&&(Ta.$$scope={dirty:$,ctx:o}),yt.$set(Ta);const Ia={};$&2&&(Ia.$$scope={dirty:$,ctx:o}),kt.$set(Ia)},i(o){Ga||(q(r.$$.fragment,o),q(J.$$.fragment,o),q(B.$$.fragment,o),q(re.$$.fragment,o),q(ke.$$.fragment,o),q(Ft.$$.fragment,o),q(Nt.$$.fragment,o),q(ze.$$.fragment,o),q(Tt.$$.fragment,o),q(Ve.$$.fragment,o),q(It.$$.fragment,o),q(Ge.$$.fragment,o),q(Lt.$$.fragment,o),q(Pt.$$.fragment,o),q(Ot.$$.fragment,o),q(Rt.$$.fragment,o),q(Je.$$.fragment,o),q(Qe.$$.fragment,o),q(Ut.$$.fragment,o),q(Mt.$$.fragment,o),q(Ye.$$.fragment,o),q(Ze.$$.fragment,o),q(St.$$.fragment,o),q(Ct.$$.fragment,o),q(tt.$$.fragment,o),q(zt.$$.fragment,o),q(ot.$$.fragment,o),q(Wt.$$.fragment,o),q(at.$$.fragment,o),q(Bt.$$.fragment,o),q(Kt.$$.fragment,o),q(st.$$.fragment,o),q(Jt.$$.fragment,o),q(Qt.$$.fragment,o),q(it.$$.fragment,o),q(Xt.$$.fragment,o),q(lt.$$.fragment,o),q(ct.$$.fragment,o),q(Yt.$$.fragment,o),q(pt.$$.fragment,o),q(gt.$$.fragment,o),q(eo.$$.fragment,o),q(to.$$.fragment,o),q(ao.$$.fragment,o),q(no.$$.fragment,o),q(so.$$.fragment,o),q(io.$$.fragment,o),q(lo.$$.fragment,o),q(co.$$.fragment,o),q(vt.$$.fragment,o),q(po.$$.fragment,o),q($t.$$.fragment,o),q(go.$$.fragment,o),q(yt.$$.fragment,o),q(ho.$$.fragment,o),q(kt.$$.fragment,o),Ga=!0)},o(o){D(r.$$.fragment,o),D(J.$$.fragment,o),D(B.$$.fragment,o),D(re.$$.fragment,o),D(ke.$$.fragment,o),D(Ft.$$.fragment,o),D(Nt.$$.fragment,o),D(ze.$$.fragment,o),D(Tt.$$.fragment,o),D(Ve.$$.fragment,o),D(It.$$.fragment,o),D(Ge.$$.fragment,o),D(Lt.$$.fragment,o),D(Pt.$$.fragment,o),D(Ot.$$.fragment,o),D(Rt.$$.fragment,o),D(Je.$$.fragment,o),D(Qe.$$.fragment,o),D(Ut.$$.fragment,o),D(Mt.$$.fragment,o),D(Ye.$$.fragment,o),D(Ze.$$.fragment,o),D(St.$$.fragment,o),D(Ct.$$.fragment,o),D(tt.$$.fragment,o),D(zt.$$.fragment,o),D(ot.$$.fragment,o),D(Wt.$$.fragment,o),D(at.$$.fragment,o),D(Bt.$$.fragment,o),D(Kt.$$.fragment,o),D(st.$$.fragment,o),D(Jt.$$.fragment,o),D(Qt.$$.fragment,o),D(it.$$.fragment,o),D(Xt.$$.fragment,o),D(lt.$$.fragment,o),D(ct.$$.fragment,o),D(Yt.$$.fragment,o),D(pt.$$.fragment,o),D(gt.$$.fragment,o),D(eo.$$.fragment,o),D(to.$$.fragment,o),D(ao.$$.fragment,o),D(no.$$.fragment,o),D(so.$$.fragment,o),D(io.$$.fragment,o),D(lo.$$.fragment,o),D(co.$$.fragment,o),D(vt.$$.fragment,o),D(po.$$.fragment,o),D($t.$$.fragment,o),D(go.$$.fragment,o),D(yt.$$.fragment,o),D(ho.$$.fragment,o),D(kt.$$.fragment,o),Ga=!1},d(o){t(p),o&&t(b),o&&t(f),F(r),o&&t(y),o&&t(A),o&&t(O),o&&t(_),o&&t(G),o&&t(C),o&&t(Z),F(J,o),o&&t(ce),o&&t(ee),o&&t($e),F(B,o),o&&t(oe),o&&t(K),o&&t(ye),o&&t(T),F(re),F(ke),F(Ft),F(Nt),F(ze),F(Tt),F(Ve),F(It),F(Ge),F(Lt),F(Pt),F(Ot),F(Rt),F(Je),F(Qe),F(Ut),F(Mt),F(Ye),F(Ze),F(St),F(Ct),F(tt),F(zt),F(ot),F(Wt),F(at),F(Bt),F(Kt),F(st),F(Jt),F(Qt),F(it),F(Xt),F(lt),F(ct),F(Yt),F(pt),F(gt),F(eo),o&&t(La),o&&t(Ue),F(to),o&&t(Pa),o&&t(oo),o&&t(Oa),o&&t(ut),o&&t(Ra),o&&t(le),F(ao),F(no),F(so),F(io),o&&t(Ua),o&&t(Me),F(lo),o&&t(Ma),o&&t(bt),o&&t(Sa),o&&t(we),F(co),F(vt),o&&t(Ca),o&&t(Ee),F(po),F($t),o&&t(za),o&&t(Ae),F(go),F(yt),o&&t(Va),o&&t(je),F(ho),F(kt)}}}const hl={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function dl(U){return Vi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $l extends Mi{constructor(p){super();Si(this,p,dl,gl,Ci,{})}}export{$l as default,hl as metadata};
