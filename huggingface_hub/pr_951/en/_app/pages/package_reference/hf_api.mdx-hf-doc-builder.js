import{S as Ei,i as xi,s as ji,e as a,k as g,w as x,t as c,M as Hi,c as n,d as t,m as d,a as s,x as j,h as p,b as w,G as e,g as v,y as H,q,o as F,B as D,v as qi,L as Le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Te}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Lr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fi(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),k=g(),A=a("li"),I=a("a"),O=c("RevisionNotFoundError"),S=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var P=s(l);b=p(P,"Raises the following errors:"),P.forEach(t),f=d(_),i=n(_,"UL",{});var M=s(i);h=n(M,"LI",{});var U=s(h);r=n(U,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(U,"CODE",{});var W=s(u);y=p(W,"private"),W.forEach(t),E=p(U," and you do not have access."),U.forEach(t),k=d(M),A=n(M,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);O=p(G,"RevisionNotFoundError"),G.forEach(t),S=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),M.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){v(_,l,P),e(l,b),v(_,f,P),v(_,i,P),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E),e(i,k),e(i,A),e(A,I),e(I,O),e(A,S)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Di(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S,_,P,M,U,V,W,C,G,Z,J,re,ee,Q,X,Y,me,_e;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),O=c(`
if some parameter value is invalid`),S=g(),_=a("li"),P=a("a"),M=c("RepositoryNotFoundError"),U=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=c("private"),C=c(" and you do not have access."),G=g(),Z=a("li"),J=a("a"),re=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),Q=g(),X=a("li"),Y=a("a"),me=c("EntryNotFoundError"),_e=c(`
If the file to download cannot be found.`),this.h()},l(B){l=n(B,"P",{});var oe=s(l);b=p(oe,"Raises the following errors:"),oe.forEach(t),f=d(B),i=n(B,"UL",{});var K=s(i);h=n(K,"LI",{});var xe=s(h);r=n(xe,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Pe=s(m);N=p(Pe,"HTTPError"),Pe.forEach(t),ae.forEach(t),u=p(xe,`
if the HuggingFace API returned an error`),xe.forEach(t),y=d(K),E=n(K,"LI",{});var je=s(E);k=n(je,"A",{href:!0,rel:!0});var be=s(k);A=n(be,"CODE",{});var T=s(A);I=p(T,"ValueError"),T.forEach(t),be.forEach(t),O=p(je,`
if some parameter value is invalid`),je.forEach(t),S=d(K),_=n(K,"LI",{});var ne=s(_);P=n(ne,"A",{href:!0});var $o=s(P);M=p($o,"RepositoryNotFoundError"),$o.forEach(t),U=p(ne,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ne,"CODE",{});var ve=s(V);W=p(ve,"private"),ve.forEach(t),C=p(ne," and you do not have access."),ne.forEach(t),G=d(K),Z=n(K,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var yo=s(J);re=p(yo,"RevisionNotFoundError"),yo.forEach(t),ee=p($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Q=d(K),X=n(K,"LI",{});var Oe=s(X);Y=n(Oe,"A",{href:!0});var ko=s(Y);me=p(ko,"EntryNotFoundError"),ko.forEach(t),_e=p(Oe,`
If the file to download cannot be found.`),Oe.forEach(t),K.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(P,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),w(Y,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){v(B,l,oe),e(l,b),v(B,f,oe),v(B,i,oe),e(i,h),e(h,r),e(r,m),e(m,N),e(h,u),e(i,y),e(i,E),e(E,k),e(k,A),e(A,I),e(E,O),e(i,S),e(i,_),e(_,P),e(P,M),e(_,U),e(_,V),e(V,W),e(_,C),e(i,G),e(i,Z),e(Z,J),e(J,re),e(Z,ee),e(i,Q),e(i,X),e(X,Y),e(Y,me),e(X,_e)},d(B){B&&t(l),B&&t(f),B&&t(i)}}}function Ni(R){let l,b,f,i,h,r,m,N,u,y,E;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var A=s(l);b=p(A,"Raises the following errors:"),A.forEach(t),f=d(k),i=n(k,"UL",{});var I=s(i);h=n(I,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var S=s(r);m=p(S,"RepositoryNotFoundError"),S.forEach(t),N=p(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(O,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),E=p(O," and you do not have access."),O.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){v(k,l,A),e(l,b),v(k,f,A),v(k,i,A),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Ti(R){let l,b,f,i,h,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("filter"),h=c(" argument:"),r=g(),x(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var E=s(f);i=p(E,"filter"),E.forEach(t),h=p(y," argument:"),y.forEach(t),r=d(u),j(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,h),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function Ii(R){let l,b,f,i,h,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("search"),h=c(" argument:"),r=g(),x(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var E=s(f);i=p(E,"search"),E.forEach(t),h=p(y," argument:"),y.forEach(t),r=d(u),j(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,h),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function Li(R){let l,b,f,i,h,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("filter"),h=c(" argument:"),r=g(),x(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var E=s(f);i=p(E,"filter"),E.forEach(t),h=p(y," argument:"),y.forEach(t),r=d(u),j(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,h),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function Pi(R){let l,b,f,i,h,r,m,N;return m=new fe({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){l=a("p"),b=c("Example usage with the "),f=a("code"),i=c("search"),h=c(" argument:"),r=g(),x(m.$$.fragment)},l(u){l=n(u,"P",{});var y=s(l);b=p(y,"Example usage with the "),f=n(y,"CODE",{});var E=s(f);i=p(E,"search"),E.forEach(t),h=p(y," argument:"),y.forEach(t),r=d(u),j(m.$$.fragment,u)},m(u,y){v(u,l,y),e(l,b),e(l,f),e(f,i),e(l,h),v(u,r,y),H(m,u,y),N=!0},p:Le,i(u){N||(q(m.$$.fragment,u),N=!0)},o(u){F(m.$$.fragment,u),N=!1},d(u){u&&t(l),u&&t(r),D(m,u)}}}function Oi(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),k=g(),A=a("li"),I=a("a"),O=c("RevisionNotFoundError"),S=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var P=s(l);b=p(P,"Raises the following errors:"),P.forEach(t),f=d(_),i=n(_,"UL",{});var M=s(i);h=n(M,"LI",{});var U=s(h);r=n(U,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(U,"CODE",{});var W=s(u);y=p(W,"private"),W.forEach(t),E=p(U," and you do not have access."),U.forEach(t),k=d(M),A=n(M,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);O=p(G,"RevisionNotFoundError"),G.forEach(t),S=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),M.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){v(_,l,P),e(l,b),v(_,f,P),v(_,i,P),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E),e(i,k),e(i,A),e(A,I),e(I,O),e(A,S)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Si(R){let l,b,f,i,h,r,m,N,u,y,E;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var A=s(l);b=p(A,"Raises the following errors:"),A.forEach(t),f=d(k),i=n(k,"UL",{});var I=s(i);h=n(I,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var S=s(r);m=p(S,"RepositoryNotFoundError"),S.forEach(t),N=p(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(O,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),E=p(O," and you do not have access."),O.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){v(k,l,A),e(l,b),v(k,f,A),v(k,i,A),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Ri(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),k=g(),A=a("li"),I=a("a"),O=c("RevisionNotFoundError"),S=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var P=s(l);b=p(P,"Raises the following errors:"),P.forEach(t),f=d(_),i=n(_,"UL",{});var M=s(i);h=n(M,"LI",{});var U=s(h);r=n(U,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(U,"CODE",{});var W=s(u);y=p(W,"private"),W.forEach(t),E=p(U," and you do not have access."),U.forEach(t),k=d(M),A=n(M,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);O=p(G,"RevisionNotFoundError"),G.forEach(t),S=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),M.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){v(_,l,P),e(l,b),v(_,f,P),v(_,i,P),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E),e(i,k),e(i,A),e(A,I),e(I,O),e(A,S)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Ui(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),k=g(),A=a("li"),I=a("a"),O=c("RevisionNotFoundError"),S=c(`
If the revision to download from cannot be found.`),this.h()},l(_){l=n(_,"P",{});var P=s(l);b=p(P,"Raises the following errors:"),P.forEach(t),f=d(_),i=n(_,"UL",{});var M=s(i);h=n(M,"LI",{});var U=s(h);r=n(U,"A",{href:!0});var V=s(r);m=p(V,"RepositoryNotFoundError"),V.forEach(t),N=p(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(U,"CODE",{});var W=s(u);y=p(W,"private"),W.forEach(t),E=p(U," and you do not have access."),U.forEach(t),k=d(M),A=n(M,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);O=p(G,"RevisionNotFoundError"),G.forEach(t),S=p(C,`
If the revision to download from cannot be found.`),C.forEach(t),M.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(_,P){v(_,l,P),e(l,b),v(_,f,P),v(_,i,P),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E),e(i,k),e(i,A),e(A,I),e(I,O),e(A,S)},d(_){_&&t(l),_&&t(f),_&&t(i)}}}function Mi(R){let l,b,f,i,h,r,m,N,u,y,E;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=c("RepositoryNotFoundError"),N=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=a("code"),y=c("private"),E=c(" and you do not have access."),this.h()},l(k){l=n(k,"P",{});var A=s(l);b=p(A,"Raises the following errors:"),A.forEach(t),f=d(k),i=n(k,"UL",{});var I=s(i);h=n(I,"LI",{});var O=s(h);r=n(O,"A",{href:!0});var S=s(r);m=p(S,"RepositoryNotFoundError"),S.forEach(t),N=p(O,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),u=n(O,"CODE",{});var _=s(u);y=p(_,"private"),_.forEach(t),E=p(O," and you do not have access."),O.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){v(k,l,A),e(l,b),v(k,f,A),v(k,i,A),e(i,h),e(h,r),e(r,m),e(h,N),e(h,u),e(u,y),e(h,E)},d(k){k&&t(l),k&&t(f),k&&t(i)}}}function Ci(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S,_,P,M,U,V,W,C,G,Z,J,re,ee;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),O=c(`
if some parameter value is invalid`),S=g(),_=a("li"),P=a("a"),M=c("RepositoryNotFoundError"),U=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=c("private"),C=c(" and you do not have access."),G=g(),Z=a("li"),J=a("a"),re=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),this.h()},l(Q){l=n(Q,"P",{});var X=s(l);b=p(X,"Raises the following errors:"),X.forEach(t),f=d(Q),i=n(Q,"UL",{});var Y=s(i);h=n(Y,"LI",{});var me=s(h);r=n(me,"A",{href:!0,rel:!0});var _e=s(r);m=n(_e,"CODE",{});var B=s(m);N=p(B,"HTTPError"),B.forEach(t),_e.forEach(t),u=p(me,`
if the HuggingFace API returned an error`),me.forEach(t),y=d(Y),E=n(Y,"LI",{});var oe=s(E);k=n(oe,"A",{href:!0,rel:!0});var K=s(k);A=n(K,"CODE",{});var xe=s(A);I=p(xe,"ValueError"),xe.forEach(t),K.forEach(t),O=p(oe,`
if some parameter value is invalid`),oe.forEach(t),S=d(Y),_=n(Y,"LI",{});var ae=s(_);P=n(ae,"A",{href:!0});var Pe=s(P);M=p(Pe,"RepositoryNotFoundError"),Pe.forEach(t),U=p(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var je=s(V);W=p(je,"private"),je.forEach(t),C=p(ae," and you do not have access."),ae.forEach(t),G=d(Y),Z=n(Y,"LI",{});var be=s(Z);J=n(be,"A",{href:!0});var T=s(J);re=p(T,"RevisionNotFoundError"),T.forEach(t),ee=p(be,`
If the revision to download from cannot be found.`),be.forEach(t),Y.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(P,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){v(Q,l,X),e(l,b),v(Q,f,X),v(Q,i,X),e(i,h),e(h,r),e(r,m),e(m,N),e(h,u),e(i,y),e(i,E),e(E,k),e(k,A),e(A,I),e(E,O),e(i,S),e(i,_),e(_,P),e(P,M),e(_,U),e(_,V),e(V,W),e(_,C),e(i,G),e(i,Z),e(Z,J),e(J,re),e(Z,ee)},d(Q){Q&&t(l),Q&&t(f),Q&&t(i)}}}function zi(R){let l,b,f,i,h;return i=new fe({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){l=a("p"),b=c("Example usage:"),f=g(),x(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example usage:"),m.forEach(t),f=d(r),j(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),h=!0},p:Le,i(r){h||(q(i.$$.fragment,r),h=!0)},o(r){F(i.$$.fragment,r),h=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Vi(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O;return{c(){l=a("p"),b=c("Raises the following errors:"),f=g(),i=a("ul"),h=a("li"),r=a("a"),m=a("code"),N=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=g(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),O=c(`
if some parameter value is invalid`),this.h()},l(S){l=n(S,"P",{});var _=s(l);b=p(_,"Raises the following errors:"),_.forEach(t),f=d(S),i=n(S,"UL",{});var P=s(i);h=n(P,"LI",{});var M=s(h);r=n(M,"A",{href:!0,rel:!0});var U=s(r);m=n(U,"CODE",{});var V=s(m);N=p(V,"HTTPError"),V.forEach(t),U.forEach(t),u=p(M,`
if the HuggingFace API returned an error`),M.forEach(t),y=d(P),E=n(P,"LI",{});var W=s(E);k=n(W,"A",{href:!0,rel:!0});var C=s(k);A=n(C,"CODE",{});var G=s(A);I=p(G,"ValueError"),G.forEach(t),C.forEach(t),O=p(W,`
if some parameter value is invalid`),W.forEach(t),P.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow")},m(S,_){v(S,l,_),e(l,b),v(S,f,_),v(S,i,_),e(i,h),e(h,r),e(r,m),e(m,N),e(h,u),e(i,y),e(i,E),e(E,k),e(k,A),e(A,I),e(E,O)},d(S){S&&t(l),S&&t(f),S&&t(i)}}}function Wi(R){let l,b,f,i,h;return i=new fe({props:{code:`upload_folder(
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
`}}),{c(){l=a("p"),b=c("Example usage:"),f=g(),x(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example usage:"),m.forEach(t),f=d(r),j(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),h=!0},p:Le,i(r){h||(q(i.$$.fragment,r),h=!0)},o(r){F(i.$$.fragment,r),h=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Gi(R){let l,b,f,i,h;return i=new fe({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){l=a("p"),b=c("Examples:"),f=g(),x(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Examples:"),m.forEach(t),f=d(r),j(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),h=!0},p:Le,i(r){h||(q(i.$$.fragment,r),h=!0)},o(r){F(i.$$.fragment,r),h=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Bi(R){let l,b;return l=new fe({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){x(l.$$.fragment)},l(f){j(l.$$.fragment,f)},m(f,i){H(l,f,i),b=!0},p:Le,i(f){b||(q(l.$$.fragment,f),b=!0)},o(f){F(l.$$.fragment,f),b=!1},d(f){D(l,f)}}}function Ki(R){let l,b,f,i,h;return i=new fe({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){l=a("p"),b=c("Example:"),f=g(),x(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example:"),m.forEach(t),f=d(r),j(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),h=!0},p:Le,i(r){h||(q(i.$$.fragment,r),h=!0)},o(r){F(i.$$.fragment,r),h=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Ji(R){let l,b,f,i,h;return i=new fe({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){l=a("p"),b=c("Example:"),f=g(),x(i.$$.fragment)},l(r){l=n(r,"P",{});var m=s(l);b=p(m,"Example:"),m.forEach(t),f=d(r),j(i.$$.fragment,r)},m(r,m){v(r,l,m),e(l,b),v(r,f,m),H(i,r,m),h=!0},p:Le,i(r){h||(q(i.$$.fragment,r),h=!0)},o(r){F(i.$$.fragment,r),h=!1},d(r){r&&t(l),r&&t(f),D(i,r)}}}function Qi(R){let l,b,f,i,h,r,m,N,u,y,E,k,A,I,O,S,_,P,M,U,V,W,C,G,Z,J,re,ee,Q,X,Y,me,_e,B,oe,K,xe,ae,Pe,je,be,T,ne,$o,ve,$e,yo,Oe,ko,rn,Ue,qt,ln,To,cn,pn,ie,Ft,gn,Io,dn,hn,Lo,un,fn,Me,mn,He,Dt,_n,Po,bn,vn,Ce,$n,qe,Nt,yn,Oo,kn,wn,ze,An,Ve,Tt,En,So,xn,jn,We,It,Hn,Ro,qn,Fn,Ge,Lt,Dn,Uo,Nn,Tn,le,Pt,In,Mo,Ln,Pn,Be,On,Ke,Sn,Je,Ot,Rn,Co,Un,Mn,ce,St,Cn,zo,zn,Vn,Qe,Wn,Xe,Gn,Ye,Rt,Bn,Vo,Kn,Jn,Ze,Ut,Qn,Wo,Xn,Yn,pe,Mt,Zn,Go,es,ts,Bo,os,as,et,ns,ge,Ct,ss,Ko,rs,is,zt,ls,Vt,cs,ps,gs,tt,ds,Fe,Wt,hs,Jo,us,fs,ot,ms,at,Gt,_s,Qo,bs,vs,de,Bt,$s,Xo,ys,ks,Yo,ws,As,nt,Es,st,Kt,xs,Zo,js,Hs,De,Jt,qs,ea,Fs,Ds,rt,Ns,he,Qt,Ts,ta,Is,Ls,it,Ps,lt,Os,te,Xt,Ss,oa,Rs,Us,aa,Ms,Cs,Yt,zs,na,Vs,Ws,Gs,ct,Bs,pt,Ks,gt,Zt,Js,sa,Qs,Da,Se,dt,ra,eo,Xs,ia,Ys,Na,to,la,Zs,er,Ta,ht,tr,wo,or,ar,Ia,se,oo,nr,ut,ao,sr,ca,rr,ir,Ne,no,lr,pa,cr,pr,so,gr,ga,dr,hr,ur,ft,ro,fr,da,mr,La,Re,mt,ha,io,_r,ua,br,Pa,_t,vr,fa,$r,yr,Oa,ye,lo,kr,ma,wr,Ar,bt,Sa,ke,co,Er,_a,xr,jr,vt,Ra,we,po,Hr,ba,qr,Fr,$t,Ua,Ae,go,Dr,va,Nr,Tr,yt,Ma;return r=new Lr({}),J=new fe({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new fe({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ne=new z({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L576"}}),$e=new z({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1860",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),qt=new z({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1486",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ft=new z({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.
files_metadata &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1251",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Me=new Te({props:{$$slots:{default:[Fi]},$$scope:{ctx:R}}}),Dt=new z({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2270"}}),Ce=new Te({props:{$$slots:{default:[Di]},$$scope:{ctx:R}}}),Nt=new z({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1616"}}),ze=new Te({props:{$$slots:{default:[Ni]},$$scope:{ctx:R}}}),Tt=new z({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L697"}}),It=new z({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2348",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Lt=new z({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L689"}}),Pt=new z({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L915"}}),Be=new Ie({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Ti]},$$scope:{ctx:R}}}),Ke=new Ie({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Ii]},$$scope:{ctx:R}}}),Ot=new z({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1080",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),St=new z({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L707"}}),Qe=new Ie({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Li]},$$scope:{ctx:R}}}),Xe=new Ie({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Pi]},$$scope:{ctx:R}}}),Rt=new z({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1446",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ut=new z({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1094",returnDescription:`
<p>a list of <code>SpaceInfo</code> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Mt=new z({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.
files_metadata &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1179",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),et=new Te({props:{$$slots:{default:[Oi]},$$scope:{ctx:R}}}),Ct=new z({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1782"}}),tt=new Te({props:{$$slots:{default:[Si]},$$scope:{ctx:R}}}),Wt=new z({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.
files_metadata &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1375",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),ot=new Te({props:{$$slots:{default:[Ri]},$$scope:{ctx:R}}}),Gt=new z({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L670"}}),Bt=new z({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.
files_metadata &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1313",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),nt=new Te({props:{$$slots:{default:[Ui]},$$scope:{ctx:R}}}),Kt=new z({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L682"}}),Jt=new z({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1707",returnDescription:`
<p>The HTTP response in json.</p>
`}}),rt=new Te({props:{$$slots:{default:[Mi]},$$scope:{ctx:R}}}),Qt=new z({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1981",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),it=new Te({props:{$$slots:{default:[Ci]},$$scope:{ctx:R}}}),lt=new Ie({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[zi]},$$scope:{ctx:R}}}),Xt=new z({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2126",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ct=new Te({props:{$$slots:{default:[Vi]},$$scope:{ctx:R}}}),pt=new Ie({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Wi]},$$scope:{ctx:R}}}),Zt=new z({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L580"}}),eo=new Lr({}),oo=new z({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2383"}}),ao=new z({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2420"}}),no=new z({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2399",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),ro=new z({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2386"}}),io=new Lr({}),lo=new z({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),bt=new Ie({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Gi]},$$scope:{ctx:R}}}),co=new z({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),vt=new Ie({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Bi]},$$scope:{ctx:R}}}),po=new z({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L464"}}),$t=new Ie({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Ki]},$$scope:{ctx:R}}}),go=new z({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L426"}}),yt=new Ie({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Ji]},$$scope:{ctx:R}}}),{c(){l=a("meta"),b=g(),f=a("h1"),i=a("a"),h=a("span"),x(r.$$.fragment),m=g(),N=a("span"),u=c("Hugging Face Hub API"),y=g(),E=a("p"),k=c("Below is the documentation for the "),A=a("code"),I=c("HfApi"),O=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),S=g(),_=a("p"),P=c("All methods from the "),M=a("code"),U=c("HfApi"),V=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),W=g(),C=a("p"),G=c("The following approach uses the method from the root of the package:"),Z=g(),x(J.$$.fragment),re=g(),ee=a("p"),Q=c("The following approach uses the "),X=a("code"),Y=c("HfApi"),me=c(" class:"),_e=g(),x(B.$$.fragment),oe=g(),K=a("p"),xe=c("Using the "),ae=a("code"),Pe=c("HfApi"),je=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),be=g(),T=a("div"),x(ne.$$.fragment),$o=g(),ve=a("div"),x($e.$$.fragment),yo=g(),Oe=a("p"),ko=c("Creates a commit in the given repo, deleting & uploading files as needed."),rn=g(),Ue=a("div"),x(qt.$$.fragment),ln=g(),To=a("p"),cn=c("Create an empty repo on the HuggingFace Hub."),pn=g(),ie=a("div"),x(Ft.$$.fragment),gn=g(),Io=a("p"),dn=c("Get info on one specific dataset on huggingface.co."),hn=g(),Lo=a("p"),un=c("Dataset can be private if you pass an acceptable token."),fn=g(),x(Me.$$.fragment),mn=g(),He=a("div"),x(Dt.$$.fragment),_n=g(),Po=a("p"),bn=c("Deletes a file in the given repo."),vn=g(),x(Ce.$$.fragment),$n=g(),qe=a("div"),x(Nt.$$.fragment),yn=g(),Oo=a("p"),kn=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),wn=g(),x(ze.$$.fragment),An=g(),Ve=a("div"),x(Tt.$$.fragment),En=g(),So=a("p"),xn=c("Gets all valid dataset tags as a nested namespace object."),jn=g(),We=a("div"),x(It.$$.fragment),Hn=g(),Ro=a("p"),qn=c(`Returns the repository name for a given model ID and optional
organization.`),Fn=g(),Ge=a("div"),x(Lt.$$.fragment),Dn=g(),Uo=a("p"),Nn=c("Gets all valid model tags as a nested namespace object"),Tn=g(),le=a("div"),x(Pt.$$.fragment),In=g(),Mo=a("p"),Ln=c("Get the public list of all the datasets on huggingface.co"),Pn=g(),x(Be.$$.fragment),On=g(),x(Ke.$$.fragment),Sn=g(),Je=a("div"),x(Ot.$$.fragment),Rn=g(),Co=a("p"),Un=c("Get the public list of all the metrics on huggingface.co"),Mn=g(),ce=a("div"),x(St.$$.fragment),Cn=g(),zo=a("p"),zn=c("Get the public list of all the models on huggingface.co"),Vn=g(),x(Qe.$$.fragment),Wn=g(),x(Xe.$$.fragment),Gn=g(),Ye=a("div"),x(Rt.$$.fragment),Bn=g(),Vo=a("p"),Kn=c("Get the list of files in a given repo."),Jn=g(),Ze=a("div"),x(Ut.$$.fragment),Qn=g(),Wo=a("p"),Xn=c("Get the public list of all Spaces on huggingface.co"),Yn=g(),pe=a("div"),x(Mt.$$.fragment),Zn=g(),Go=a("p"),es=c("Get info on one specific model on huggingface.co"),ts=g(),Bo=a("p"),os=c("Model can be private if you pass an acceptable token or are logged in."),as=g(),x(et.$$.fragment),ns=g(),ge=a("div"),x(Ct.$$.fragment),ss=g(),Ko=a("p"),rs=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),is=g(),zt=a("p"),ls=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),Vt=a("a"),cs=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ps=c("."),gs=g(),x(tt.$$.fragment),ds=g(),Fe=a("div"),x(Wt.$$.fragment),hs=g(),Jo=a("p"),us=c("Get the info object for a given repo of a given type."),fs=g(),x(ot.$$.fragment),ms=g(),at=a("div"),x(Gt.$$.fragment),_s=g(),Qo=a("p"),bs=c(`Saves the passed access token so git can correctly authenticate the
user.`),vs=g(),de=a("div"),x(Bt.$$.fragment),$s=g(),Xo=a("p"),ys=c("Get info on one specific Space on huggingface.co."),ks=g(),Yo=a("p"),ws=c("Space can be private if you pass an acceptable token."),As=g(),x(nt.$$.fragment),Es=g(),st=a("div"),x(Kt.$$.fragment),xs=g(),Zo=a("p"),js=c("Resets the user\u2019s access token."),Hs=g(),De=a("div"),x(Jt.$$.fragment),qs=g(),ea=a("p"),Fs=c("Update the visibility setting of a repository."),Ds=g(),x(rt.$$.fragment),Ns=g(),he=a("div"),x(Qt.$$.fragment),Ts=g(),ta=a("p"),Is=c(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ls=g(),x(it.$$.fragment),Ps=g(),x(lt.$$.fragment),Os=g(),te=a("div"),x(Xt.$$.fragment),Ss=g(),oa=a("p"),Rs=c(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Us=g(),aa=a("p"),Ms=c(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Cs=g(),Yt=a("p"),zs=c("Uses "),na=a("code"),Vs=c("HfApi.create_commit"),Ws=c(" under the hood."),Gs=g(),x(ct.$$.fragment),Bs=g(),x(pt.$$.fragment),Ks=g(),gt=a("div"),x(Zt.$$.fragment),Js=g(),sa=a("p"),Qs=c("Call HF API to know \u201Cwhoami\u201D."),Da=g(),Se=a("h2"),dt=a("a"),ra=a("span"),x(eo.$$.fragment),Xs=g(),ia=a("span"),Ys=c("Hugging Face local storage"),Na=g(),to=a("p"),la=a("code"),Zs=c("huggingface_hub"),er=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ta=g(),ht=a("p"),tr=c("It does this using the "),wo=a("a"),or=c("HfFolder"),ar=c(" utility, which saves data at the root of the user."),Ia=g(),se=a("div"),x(oo.$$.fragment),nr=g(),ut=a("div"),x(ao.$$.fragment),sr=g(),ca=a("p"),rr=c("Deletes the token from storage. Does not fail if token does not exist."),ir=g(),Ne=a("div"),x(no.$$.fragment),lr=g(),pa=a("p"),cr=c("Get token or None if not existent."),pr=g(),so=a("p"),gr=c("Note that a token can be also provided using the "),ga=a("code"),dr=c("HUGGING_FACE_HUB_TOKEN"),hr=c(`
environment variable.`),ur=g(),ft=a("div"),x(ro.$$.fragment),fr=g(),da=a("p"),mr=c("Save token, creating folder as needed."),La=g(),Re=a("h2"),mt=a("a"),ha=a("span"),x(io.$$.fragment),_r=g(),ua=a("span"),br=c("Filtering helpers"),Pa=g(),_t=a("p"),vr=c("Some helpers to filter repositories on the Hub are available in the "),fa=a("code"),$r=c("huggingface_hub"),yr=c(" package."),Oa=g(),ye=a("div"),x(lo.$$.fragment),kr=g(),ma=a("p"),wr=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ar=g(),x(bt.$$.fragment),Sa=g(),ke=a("div"),x(co.$$.fragment),Er=g(),_a=a("p"),xr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),jr=g(),x(vt.$$.fragment),Ra=g(),we=a("div"),x(po.$$.fragment),Hr=g(),ba=a("p"),qr=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Fr=g(),x($t.$$.fragment),Ua=g(),Ae=a("div"),x(go.$$.fragment),Dr=g(),va=a("p"),Nr=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Tr=g(),x(yt.$$.fragment),this.h()},l(o){const $=Hi('[data-svelte="svelte-1phssyn"]',document.head);l=n($,"META",{name:!0,content:!0}),$.forEach(t),b=d(o),f=n(o,"H1",{class:!0});var ho=s(f);i=n(ho,"A",{id:!0,class:!0,href:!0});var $a=s(i);h=n($a,"SPAN",{});var ya=s(h);j(r.$$.fragment,ya),ya.forEach(t),$a.forEach(t),m=d(ho),N=n(ho,"SPAN",{});var ka=s(N);u=p(ka,"Hugging Face Hub API"),ka.forEach(t),ho.forEach(t),y=d(o),E=n(o,"P",{});var uo=s(E);k=p(uo,"Below is the documentation for the "),A=n(uo,"CODE",{});var wa=s(A);I=p(wa,"HfApi"),wa.forEach(t),O=p(uo,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),uo.forEach(t),S=d(o),_=n(o,"P",{});var fo=s(_);P=p(fo,"All methods from the "),M=n(fo,"CODE",{});var Aa=s(M);U=p(Aa,"HfApi"),Aa.forEach(t),V=p(fo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),fo.forEach(t),W=d(o),C=n(o,"P",{});var Ea=s(C);G=p(Ea,"The following approach uses the method from the root of the package:"),Ea.forEach(t),Z=d(o),j(J.$$.fragment,o),re=d(o),ee=n(o,"P",{});var mo=s(ee);Q=p(mo,"The following approach uses the "),X=n(mo,"CODE",{});var xa=s(X);Y=p(xa,"HfApi"),xa.forEach(t),me=p(mo," class:"),mo.forEach(t),_e=d(o),j(B.$$.fragment,o),oe=d(o),K=n(o,"P",{});var _o=s(K);xe=p(_o,"Using the "),ae=n(_o,"CODE",{});var ja=s(ae);Pe=p(ja,"HfApi"),ja.forEach(t),je=p(_o," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),_o.forEach(t),be=d(o),T=n(o,"DIV",{class:!0});var L=s(T);j(ne.$$.fragment,L),$o=d(L),ve=n(L,"DIV",{class:!0});var bo=s(ve);j($e.$$.fragment,bo),yo=d(bo),Oe=n(bo,"P",{});var Ha=s(Oe);ko=p(Ha,"Creates a commit in the given repo, deleting & uploading files as needed."),Ha.forEach(t),bo.forEach(t),rn=d(L),Ue=n(L,"DIV",{class:!0});var vo=s(Ue);j(qt.$$.fragment,vo),ln=d(vo),To=n(vo,"P",{});var qa=s(To);cn=p(qa,"Create an empty repo on the HuggingFace Hub."),qa.forEach(t),vo.forEach(t),pn=d(L),ie=n(L,"DIV",{class:!0});var Ee=s(ie);j(Ft.$$.fragment,Ee),gn=d(Ee),Io=n(Ee,"P",{});var Fa=s(Io);dn=p(Fa,"Get info on one specific dataset on huggingface.co."),Fa.forEach(t),hn=d(Ee),Lo=n(Ee,"P",{});var Pr=s(Lo);un=p(Pr,"Dataset can be private if you pass an acceptable token."),Pr.forEach(t),fn=d(Ee),j(Me.$$.fragment,Ee),Ee.forEach(t),mn=d(L),He=n(L,"DIV",{class:!0});var Ao=s(He);j(Dt.$$.fragment,Ao),_n=d(Ao),Po=n(Ao,"P",{});var Or=s(Po);bn=p(Or,"Deletes a file in the given repo."),Or.forEach(t),vn=d(Ao),j(Ce.$$.fragment,Ao),Ao.forEach(t),$n=d(L),qe=n(L,"DIV",{class:!0});var Eo=s(qe);j(Nt.$$.fragment,Eo),yn=d(Eo),Oo=n(Eo,"P",{});var Sr=s(Oo);kn=p(Sr,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Sr.forEach(t),wn=d(Eo),j(ze.$$.fragment,Eo),Eo.forEach(t),An=d(L),Ve=n(L,"DIV",{class:!0});var Ca=s(Ve);j(Tt.$$.fragment,Ca),En=d(Ca),So=n(Ca,"P",{});var Rr=s(So);xn=p(Rr,"Gets all valid dataset tags as a nested namespace object."),Rr.forEach(t),Ca.forEach(t),jn=d(L),We=n(L,"DIV",{class:!0});var za=s(We);j(It.$$.fragment,za),Hn=d(za),Ro=n(za,"P",{});var Ur=s(Ro);qn=p(Ur,`Returns the repository name for a given model ID and optional
organization.`),Ur.forEach(t),za.forEach(t),Fn=d(L),Ge=n(L,"DIV",{class:!0});var Va=s(Ge);j(Lt.$$.fragment,Va),Dn=d(Va),Uo=n(Va,"P",{});var Mr=s(Uo);Nn=p(Mr,"Gets all valid model tags as a nested namespace object"),Mr.forEach(t),Va.forEach(t),Tn=d(L),le=n(L,"DIV",{class:!0});var kt=s(le);j(Pt.$$.fragment,kt),In=d(kt),Mo=n(kt,"P",{});var Cr=s(Mo);Ln=p(Cr,"Get the public list of all the datasets on huggingface.co"),Cr.forEach(t),Pn=d(kt),j(Be.$$.fragment,kt),On=d(kt),j(Ke.$$.fragment,kt),kt.forEach(t),Sn=d(L),Je=n(L,"DIV",{class:!0});var Wa=s(Je);j(Ot.$$.fragment,Wa),Rn=d(Wa),Co=n(Wa,"P",{});var zr=s(Co);Un=p(zr,"Get the public list of all the metrics on huggingface.co"),zr.forEach(t),Wa.forEach(t),Mn=d(L),ce=n(L,"DIV",{class:!0});var wt=s(ce);j(St.$$.fragment,wt),Cn=d(wt),zo=n(wt,"P",{});var Vr=s(zo);zn=p(Vr,"Get the public list of all the models on huggingface.co"),Vr.forEach(t),Vn=d(wt),j(Qe.$$.fragment,wt),Wn=d(wt),j(Xe.$$.fragment,wt),wt.forEach(t),Gn=d(L),Ye=n(L,"DIV",{class:!0});var Ga=s(Ye);j(Rt.$$.fragment,Ga),Bn=d(Ga),Vo=n(Ga,"P",{});var Wr=s(Vo);Kn=p(Wr,"Get the list of files in a given repo."),Wr.forEach(t),Ga.forEach(t),Jn=d(L),Ze=n(L,"DIV",{class:!0});var Ba=s(Ze);j(Ut.$$.fragment,Ba),Qn=d(Ba),Wo=n(Ba,"P",{});var Gr=s(Wo);Xn=p(Gr,"Get the public list of all Spaces on huggingface.co"),Gr.forEach(t),Ba.forEach(t),Yn=d(L),pe=n(L,"DIV",{class:!0});var At=s(pe);j(Mt.$$.fragment,At),Zn=d(At),Go=n(At,"P",{});var Br=s(Go);es=p(Br,"Get info on one specific model on huggingface.co"),Br.forEach(t),ts=d(At),Bo=n(At,"P",{});var Kr=s(Bo);os=p(Kr,"Model can be private if you pass an acceptable token or are logged in."),Kr.forEach(t),as=d(At),j(et.$$.fragment,At),At.forEach(t),ns=d(L),ge=n(L,"DIV",{class:!0});var Et=s(ge);j(Ct.$$.fragment,Et),ss=d(Et),Ko=n(Et,"P",{});var Jr=s(Ko);rs=p(Jr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Jr.forEach(t),is=d(Et),zt=n(Et,"P",{});var Ka=s(zt);ls=p(Ka,`Note there are certain limitations. For more information about moving
repositories, please see
`),Vt=n(Ka,"A",{href:!0,rel:!0});var Qr=s(Vt);cs=p(Qr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Qr.forEach(t),ps=p(Ka,"."),Ka.forEach(t),gs=d(Et),j(tt.$$.fragment,Et),Et.forEach(t),ds=d(L),Fe=n(L,"DIV",{class:!0});var xo=s(Fe);j(Wt.$$.fragment,xo),hs=d(xo),Jo=n(xo,"P",{});var Xr=s(Jo);us=p(Xr,"Get the info object for a given repo of a given type."),Xr.forEach(t),fs=d(xo),j(ot.$$.fragment,xo),xo.forEach(t),ms=d(L),at=n(L,"DIV",{class:!0});var Ja=s(at);j(Gt.$$.fragment,Ja),_s=d(Ja),Qo=n(Ja,"P",{});var Yr=s(Qo);bs=p(Yr,`Saves the passed access token so git can correctly authenticate the
user.`),Yr.forEach(t),Ja.forEach(t),vs=d(L),de=n(L,"DIV",{class:!0});var xt=s(de);j(Bt.$$.fragment,xt),$s=d(xt),Xo=n(xt,"P",{});var Zr=s(Xo);ys=p(Zr,"Get info on one specific Space on huggingface.co."),Zr.forEach(t),ks=d(xt),Yo=n(xt,"P",{});var ei=s(Yo);ws=p(ei,"Space can be private if you pass an acceptable token."),ei.forEach(t),As=d(xt),j(nt.$$.fragment,xt),xt.forEach(t),Es=d(L),st=n(L,"DIV",{class:!0});var Qa=s(st);j(Kt.$$.fragment,Qa),xs=d(Qa),Zo=n(Qa,"P",{});var ti=s(Zo);js=p(ti,"Resets the user\u2019s access token."),ti.forEach(t),Qa.forEach(t),Hs=d(L),De=n(L,"DIV",{class:!0});var jo=s(De);j(Jt.$$.fragment,jo),qs=d(jo),ea=n(jo,"P",{});var oi=s(ea);Fs=p(oi,"Update the visibility setting of a repository."),oi.forEach(t),Ds=d(jo),j(rt.$$.fragment,jo),jo.forEach(t),Ns=d(L),he=n(L,"DIV",{class:!0});var jt=s(he);j(Qt.$$.fragment,jt),Ts=d(jt),ta=n(jt,"P",{});var ai=s(ta);Is=p(ai,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),ai.forEach(t),Ls=d(jt),j(it.$$.fragment,jt),Ps=d(jt),j(lt.$$.fragment,jt),jt.forEach(t),Os=d(L),te=n(L,"DIV",{class:!0});var ue=s(te);j(Xt.$$.fragment,ue),Ss=d(ue),oa=n(ue,"P",{});var ni=s(oa);Rs=p(ni,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),ni.forEach(t),Us=d(ue),aa=n(ue,"P",{});var si=s(aa);Ms=p(si,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),si.forEach(t),Cs=d(ue),Yt=n(ue,"P",{});var Xa=s(Yt);zs=p(Xa,"Uses "),na=n(Xa,"CODE",{});var ri=s(na);Vs=p(ri,"HfApi.create_commit"),ri.forEach(t),Ws=p(Xa," under the hood."),Xa.forEach(t),Gs=d(ue),j(ct.$$.fragment,ue),Bs=d(ue),j(pt.$$.fragment,ue),ue.forEach(t),Ks=d(L),gt=n(L,"DIV",{class:!0});var Ya=s(gt);j(Zt.$$.fragment,Ya),Js=d(Ya),sa=n(Ya,"P",{});var ii=s(sa);Qs=p(ii,"Call HF API to know \u201Cwhoami\u201D."),ii.forEach(t),Ya.forEach(t),L.forEach(t),Da=d(o),Se=n(o,"H2",{class:!0});var Za=s(Se);dt=n(Za,"A",{id:!0,class:!0,href:!0});var li=s(dt);ra=n(li,"SPAN",{});var ci=s(ra);j(eo.$$.fragment,ci),ci.forEach(t),li.forEach(t),Xs=d(Za),ia=n(Za,"SPAN",{});var pi=s(ia);Ys=p(pi,"Hugging Face local storage"),pi.forEach(t),Za.forEach(t),Na=d(o),to=n(o,"P",{});var Ir=s(to);la=n(Ir,"CODE",{});var gi=s(la);Zs=p(gi,"huggingface_hub"),gi.forEach(t),er=p(Ir,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Ir.forEach(t),Ta=d(o),ht=n(o,"P",{});var en=s(ht);tr=p(en,"It does this using the "),wo=n(en,"A",{href:!0});var di=s(wo);or=p(di,"HfFolder"),di.forEach(t),ar=p(en," utility, which saves data at the root of the user."),en.forEach(t),Ia=d(o),se=n(o,"DIV",{class:!0});var Ht=s(se);j(oo.$$.fragment,Ht),nr=d(Ht),ut=n(Ht,"DIV",{class:!0});var tn=s(ut);j(ao.$$.fragment,tn),sr=d(tn),ca=n(tn,"P",{});var hi=s(ca);rr=p(hi,"Deletes the token from storage. Does not fail if token does not exist."),hi.forEach(t),tn.forEach(t),ir=d(Ht),Ne=n(Ht,"DIV",{class:!0});var Ho=s(Ne);j(no.$$.fragment,Ho),lr=d(Ho),pa=n(Ho,"P",{});var ui=s(pa);cr=p(ui,"Get token or None if not existent."),ui.forEach(t),pr=d(Ho),so=n(Ho,"P",{});var on=s(so);gr=p(on,"Note that a token can be also provided using the "),ga=n(on,"CODE",{});var fi=s(ga);dr=p(fi,"HUGGING_FACE_HUB_TOKEN"),fi.forEach(t),hr=p(on,`
environment variable.`),on.forEach(t),Ho.forEach(t),ur=d(Ht),ft=n(Ht,"DIV",{class:!0});var an=s(ft);j(ro.$$.fragment,an),fr=d(an),da=n(an,"P",{});var mi=s(da);mr=p(mi,"Save token, creating folder as needed."),mi.forEach(t),an.forEach(t),Ht.forEach(t),La=d(o),Re=n(o,"H2",{class:!0});var nn=s(Re);mt=n(nn,"A",{id:!0,class:!0,href:!0});var _i=s(mt);ha=n(_i,"SPAN",{});var bi=s(ha);j(io.$$.fragment,bi),bi.forEach(t),_i.forEach(t),_r=d(nn),ua=n(nn,"SPAN",{});var vi=s(ua);br=p(vi,"Filtering helpers"),vi.forEach(t),nn.forEach(t),Pa=d(o),_t=n(o,"P",{});var sn=s(_t);vr=p(sn,"Some helpers to filter repositories on the Hub are available in the "),fa=n(sn,"CODE",{});var $i=s(fa);$r=p($i,"huggingface_hub"),$i.forEach(t),yr=p(sn," package."),sn.forEach(t),Oa=d(o),ye=n(o,"DIV",{class:!0});var qo=s(ye);j(lo.$$.fragment,qo),kr=d(qo),ma=n(qo,"P",{});var yi=s(ma);wr=p(yi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yi.forEach(t),Ar=d(qo),j(bt.$$.fragment,qo),qo.forEach(t),Sa=d(o),ke=n(o,"DIV",{class:!0});var Fo=s(ke);j(co.$$.fragment,Fo),Er=d(Fo),_a=n(Fo,"P",{});var ki=s(_a);xr=p(ki,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ki.forEach(t),jr=d(Fo),j(vt.$$.fragment,Fo),Fo.forEach(t),Ra=d(o),we=n(o,"DIV",{class:!0});var Do=s(we);j(po.$$.fragment,Do),Hr=d(Do),ba=n(Do,"P",{});var wi=s(ba);qr=p(wi,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wi.forEach(t),Fr=d(Do),j($t.$$.fragment,Do),Do.forEach(t),Ua=d(o),Ae=n(o,"DIV",{class:!0});var No=s(Ae);j(go.$$.fragment,No),Dr=d(No),va=n(No,"P",{});var Ai=s(va);Nr=p(Ai,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ai.forEach(t),Tr=d(No),j(yt.$$.fragment,No),No.forEach(t),this.h()},h(){w(l,"name","hf:doc:metadata"),w(l,"content",JSON.stringify(Xi)),w(i,"id","huggingface_hub.HfApi"),w(i,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(i,"href","#huggingface_hub.HfApi"),w(f,"class","relative group"),w(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Vt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),w(Vt,"rel","nofollow"),w(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(dt,"id","huggingface_hub.HfFolder"),w(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(dt,"href","#huggingface_hub.HfFolder"),w(Se,"class","relative group"),w(wo,"href","/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder"),w(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(mt,"id","huggingface_hub.DatasetFilter"),w(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(mt,"href","#huggingface_hub.DatasetFilter"),w(Re,"class","relative group"),w(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,$){e(document.head,l),v(o,b,$),v(o,f,$),e(f,i),e(i,h),H(r,h,null),e(f,m),e(f,N),e(N,u),v(o,y,$),v(o,E,$),e(E,k),e(E,A),e(A,I),e(E,O),v(o,S,$),v(o,_,$),e(_,P),e(_,M),e(M,U),e(_,V),v(o,W,$),v(o,C,$),e(C,G),v(o,Z,$),H(J,o,$),v(o,re,$),v(o,ee,$),e(ee,Q),e(ee,X),e(X,Y),e(ee,me),v(o,_e,$),H(B,o,$),v(o,oe,$),v(o,K,$),e(K,xe),e(K,ae),e(ae,Pe),e(K,je),v(o,be,$),v(o,T,$),H(ne,T,null),e(T,$o),e(T,ve),H($e,ve,null),e(ve,yo),e(ve,Oe),e(Oe,ko),e(T,rn),e(T,Ue),H(qt,Ue,null),e(Ue,ln),e(Ue,To),e(To,cn),e(T,pn),e(T,ie),H(Ft,ie,null),e(ie,gn),e(ie,Io),e(Io,dn),e(ie,hn),e(ie,Lo),e(Lo,un),e(ie,fn),H(Me,ie,null),e(T,mn),e(T,He),H(Dt,He,null),e(He,_n),e(He,Po),e(Po,bn),e(He,vn),H(Ce,He,null),e(T,$n),e(T,qe),H(Nt,qe,null),e(qe,yn),e(qe,Oo),e(Oo,kn),e(qe,wn),H(ze,qe,null),e(T,An),e(T,Ve),H(Tt,Ve,null),e(Ve,En),e(Ve,So),e(So,xn),e(T,jn),e(T,We),H(It,We,null),e(We,Hn),e(We,Ro),e(Ro,qn),e(T,Fn),e(T,Ge),H(Lt,Ge,null),e(Ge,Dn),e(Ge,Uo),e(Uo,Nn),e(T,Tn),e(T,le),H(Pt,le,null),e(le,In),e(le,Mo),e(Mo,Ln),e(le,Pn),H(Be,le,null),e(le,On),H(Ke,le,null),e(T,Sn),e(T,Je),H(Ot,Je,null),e(Je,Rn),e(Je,Co),e(Co,Un),e(T,Mn),e(T,ce),H(St,ce,null),e(ce,Cn),e(ce,zo),e(zo,zn),e(ce,Vn),H(Qe,ce,null),e(ce,Wn),H(Xe,ce,null),e(T,Gn),e(T,Ye),H(Rt,Ye,null),e(Ye,Bn),e(Ye,Vo),e(Vo,Kn),e(T,Jn),e(T,Ze),H(Ut,Ze,null),e(Ze,Qn),e(Ze,Wo),e(Wo,Xn),e(T,Yn),e(T,pe),H(Mt,pe,null),e(pe,Zn),e(pe,Go),e(Go,es),e(pe,ts),e(pe,Bo),e(Bo,os),e(pe,as),H(et,pe,null),e(T,ns),e(T,ge),H(Ct,ge,null),e(ge,ss),e(ge,Ko),e(Ko,rs),e(ge,is),e(ge,zt),e(zt,ls),e(zt,Vt),e(Vt,cs),e(zt,ps),e(ge,gs),H(tt,ge,null),e(T,ds),e(T,Fe),H(Wt,Fe,null),e(Fe,hs),e(Fe,Jo),e(Jo,us),e(Fe,fs),H(ot,Fe,null),e(T,ms),e(T,at),H(Gt,at,null),e(at,_s),e(at,Qo),e(Qo,bs),e(T,vs),e(T,de),H(Bt,de,null),e(de,$s),e(de,Xo),e(Xo,ys),e(de,ks),e(de,Yo),e(Yo,ws),e(de,As),H(nt,de,null),e(T,Es),e(T,st),H(Kt,st,null),e(st,xs),e(st,Zo),e(Zo,js),e(T,Hs),e(T,De),H(Jt,De,null),e(De,qs),e(De,ea),e(ea,Fs),e(De,Ds),H(rt,De,null),e(T,Ns),e(T,he),H(Qt,he,null),e(he,Ts),e(he,ta),e(ta,Is),e(he,Ls),H(it,he,null),e(he,Ps),H(lt,he,null),e(T,Os),e(T,te),H(Xt,te,null),e(te,Ss),e(te,oa),e(oa,Rs),e(te,Us),e(te,aa),e(aa,Ms),e(te,Cs),e(te,Yt),e(Yt,zs),e(Yt,na),e(na,Vs),e(Yt,Ws),e(te,Gs),H(ct,te,null),e(te,Bs),H(pt,te,null),e(T,Ks),e(T,gt),H(Zt,gt,null),e(gt,Js),e(gt,sa),e(sa,Qs),v(o,Da,$),v(o,Se,$),e(Se,dt),e(dt,ra),H(eo,ra,null),e(Se,Xs),e(Se,ia),e(ia,Ys),v(o,Na,$),v(o,to,$),e(to,la),e(la,Zs),e(to,er),v(o,Ta,$),v(o,ht,$),e(ht,tr),e(ht,wo),e(wo,or),e(ht,ar),v(o,Ia,$),v(o,se,$),H(oo,se,null),e(se,nr),e(se,ut),H(ao,ut,null),e(ut,sr),e(ut,ca),e(ca,rr),e(se,ir),e(se,Ne),H(no,Ne,null),e(Ne,lr),e(Ne,pa),e(pa,cr),e(Ne,pr),e(Ne,so),e(so,gr),e(so,ga),e(ga,dr),e(so,hr),e(se,ur),e(se,ft),H(ro,ft,null),e(ft,fr),e(ft,da),e(da,mr),v(o,La,$),v(o,Re,$),e(Re,mt),e(mt,ha),H(io,ha,null),e(Re,_r),e(Re,ua),e(ua,br),v(o,Pa,$),v(o,_t,$),e(_t,vr),e(_t,fa),e(fa,$r),e(_t,yr),v(o,Oa,$),v(o,ye,$),H(lo,ye,null),e(ye,kr),e(ye,ma),e(ma,wr),e(ye,Ar),H(bt,ye,null),v(o,Sa,$),v(o,ke,$),H(co,ke,null),e(ke,Er),e(ke,_a),e(_a,xr),e(ke,jr),H(vt,ke,null),v(o,Ra,$),v(o,we,$),H(po,we,null),e(we,Hr),e(we,ba),e(ba,qr),e(we,Fr),H($t,we,null),v(o,Ua,$),v(o,Ae,$),H(go,Ae,null),e(Ae,Dr),e(Ae,va),e(va,Nr),e(Ae,Tr),H(yt,Ae,null),Ma=!0},p(o,[$]){const ho={};$&2&&(ho.$$scope={dirty:$,ctx:o}),Me.$set(ho);const $a={};$&2&&($a.$$scope={dirty:$,ctx:o}),Ce.$set($a);const ya={};$&2&&(ya.$$scope={dirty:$,ctx:o}),ze.$set(ya);const ka={};$&2&&(ka.$$scope={dirty:$,ctx:o}),Be.$set(ka);const uo={};$&2&&(uo.$$scope={dirty:$,ctx:o}),Ke.$set(uo);const wa={};$&2&&(wa.$$scope={dirty:$,ctx:o}),Qe.$set(wa);const fo={};$&2&&(fo.$$scope={dirty:$,ctx:o}),Xe.$set(fo);const Aa={};$&2&&(Aa.$$scope={dirty:$,ctx:o}),et.$set(Aa);const Ea={};$&2&&(Ea.$$scope={dirty:$,ctx:o}),tt.$set(Ea);const mo={};$&2&&(mo.$$scope={dirty:$,ctx:o}),ot.$set(mo);const xa={};$&2&&(xa.$$scope={dirty:$,ctx:o}),nt.$set(xa);const _o={};$&2&&(_o.$$scope={dirty:$,ctx:o}),rt.$set(_o);const ja={};$&2&&(ja.$$scope={dirty:$,ctx:o}),it.$set(ja);const L={};$&2&&(L.$$scope={dirty:$,ctx:o}),lt.$set(L);const bo={};$&2&&(bo.$$scope={dirty:$,ctx:o}),ct.$set(bo);const Ha={};$&2&&(Ha.$$scope={dirty:$,ctx:o}),pt.$set(Ha);const vo={};$&2&&(vo.$$scope={dirty:$,ctx:o}),bt.$set(vo);const qa={};$&2&&(qa.$$scope={dirty:$,ctx:o}),vt.$set(qa);const Ee={};$&2&&(Ee.$$scope={dirty:$,ctx:o}),$t.$set(Ee);const Fa={};$&2&&(Fa.$$scope={dirty:$,ctx:o}),yt.$set(Fa)},i(o){Ma||(q(r.$$.fragment,o),q(J.$$.fragment,o),q(B.$$.fragment,o),q(ne.$$.fragment,o),q($e.$$.fragment,o),q(qt.$$.fragment,o),q(Ft.$$.fragment,o),q(Me.$$.fragment,o),q(Dt.$$.fragment,o),q(Ce.$$.fragment,o),q(Nt.$$.fragment,o),q(ze.$$.fragment,o),q(Tt.$$.fragment,o),q(It.$$.fragment,o),q(Lt.$$.fragment,o),q(Pt.$$.fragment,o),q(Be.$$.fragment,o),q(Ke.$$.fragment,o),q(Ot.$$.fragment,o),q(St.$$.fragment,o),q(Qe.$$.fragment,o),q(Xe.$$.fragment,o),q(Rt.$$.fragment,o),q(Ut.$$.fragment,o),q(Mt.$$.fragment,o),q(et.$$.fragment,o),q(Ct.$$.fragment,o),q(tt.$$.fragment,o),q(Wt.$$.fragment,o),q(ot.$$.fragment,o),q(Gt.$$.fragment,o),q(Bt.$$.fragment,o),q(nt.$$.fragment,o),q(Kt.$$.fragment,o),q(Jt.$$.fragment,o),q(rt.$$.fragment,o),q(Qt.$$.fragment,o),q(it.$$.fragment,o),q(lt.$$.fragment,o),q(Xt.$$.fragment,o),q(ct.$$.fragment,o),q(pt.$$.fragment,o),q(Zt.$$.fragment,o),q(eo.$$.fragment,o),q(oo.$$.fragment,o),q(ao.$$.fragment,o),q(no.$$.fragment,o),q(ro.$$.fragment,o),q(io.$$.fragment,o),q(lo.$$.fragment,o),q(bt.$$.fragment,o),q(co.$$.fragment,o),q(vt.$$.fragment,o),q(po.$$.fragment,o),q($t.$$.fragment,o),q(go.$$.fragment,o),q(yt.$$.fragment,o),Ma=!0)},o(o){F(r.$$.fragment,o),F(J.$$.fragment,o),F(B.$$.fragment,o),F(ne.$$.fragment,o),F($e.$$.fragment,o),F(qt.$$.fragment,o),F(Ft.$$.fragment,o),F(Me.$$.fragment,o),F(Dt.$$.fragment,o),F(Ce.$$.fragment,o),F(Nt.$$.fragment,o),F(ze.$$.fragment,o),F(Tt.$$.fragment,o),F(It.$$.fragment,o),F(Lt.$$.fragment,o),F(Pt.$$.fragment,o),F(Be.$$.fragment,o),F(Ke.$$.fragment,o),F(Ot.$$.fragment,o),F(St.$$.fragment,o),F(Qe.$$.fragment,o),F(Xe.$$.fragment,o),F(Rt.$$.fragment,o),F(Ut.$$.fragment,o),F(Mt.$$.fragment,o),F(et.$$.fragment,o),F(Ct.$$.fragment,o),F(tt.$$.fragment,o),F(Wt.$$.fragment,o),F(ot.$$.fragment,o),F(Gt.$$.fragment,o),F(Bt.$$.fragment,o),F(nt.$$.fragment,o),F(Kt.$$.fragment,o),F(Jt.$$.fragment,o),F(rt.$$.fragment,o),F(Qt.$$.fragment,o),F(it.$$.fragment,o),F(lt.$$.fragment,o),F(Xt.$$.fragment,o),F(ct.$$.fragment,o),F(pt.$$.fragment,o),F(Zt.$$.fragment,o),F(eo.$$.fragment,o),F(oo.$$.fragment,o),F(ao.$$.fragment,o),F(no.$$.fragment,o),F(ro.$$.fragment,o),F(io.$$.fragment,o),F(lo.$$.fragment,o),F(bt.$$.fragment,o),F(co.$$.fragment,o),F(vt.$$.fragment,o),F(po.$$.fragment,o),F($t.$$.fragment,o),F(go.$$.fragment,o),F(yt.$$.fragment,o),Ma=!1},d(o){t(l),o&&t(b),o&&t(f),D(r),o&&t(y),o&&t(E),o&&t(S),o&&t(_),o&&t(W),o&&t(C),o&&t(Z),D(J,o),o&&t(re),o&&t(ee),o&&t(_e),D(B,o),o&&t(oe),o&&t(K),o&&t(be),o&&t(T),D(ne),D($e),D(qt),D(Ft),D(Me),D(Dt),D(Ce),D(Nt),D(ze),D(Tt),D(It),D(Lt),D(Pt),D(Be),D(Ke),D(Ot),D(St),D(Qe),D(Xe),D(Rt),D(Ut),D(Mt),D(et),D(Ct),D(tt),D(Wt),D(ot),D(Gt),D(Bt),D(nt),D(Kt),D(Jt),D(rt),D(Qt),D(it),D(lt),D(Xt),D(ct),D(pt),D(Zt),o&&t(Da),o&&t(Se),D(eo),o&&t(Na),o&&t(to),o&&t(Ta),o&&t(ht),o&&t(Ia),o&&t(se),D(oo),D(ao),D(no),D(ro),o&&t(La),o&&t(Re),D(io),o&&t(Pa),o&&t(_t),o&&t(Oa),o&&t(ye),D(lo),D(bt),o&&t(Sa),o&&t(ke),D(co),D(vt),o&&t(Ra),o&&t(we),D(po),D($t),o&&t(Ua),o&&t(Ae),D(go),D(yt)}}}const Xi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Yi(R){return qi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sl extends Ei{constructor(l){super();xi(this,l,Yi,Qi,ji,{})}}export{sl as default,Xi as metadata};
