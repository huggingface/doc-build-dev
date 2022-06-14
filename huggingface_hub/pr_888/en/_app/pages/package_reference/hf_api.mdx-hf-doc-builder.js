import{S as Mi,i as Ui,s as Si,e as a,k as h,w as H,t as c,M as Ci,c as n,d as t,m as d,a as s,x as j,h as g,b as w,G as e,g as $,y as D,q as F,o as q,B as N,v as zi,L as Oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as re}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _e}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Qr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Le}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vi(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),k=h(),A=a("li"),I=a("a"),L=c("RevisionNotFoundError"),R=c(`
If the revision to download from cannot be found.`),this.h()},l(v){i=n(v,"P",{});var O=s(i);_=g(O,"Raises the following errors:"),O.forEach(t),f=d(v),l=n(v,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=g(V,"RepositoryNotFoundError"),V.forEach(t),x=g(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var W=s(m);b=g(W,"private"),W.forEach(t),E=g(U," and you do not have access."),U.forEach(t),k=d(S),A=n(S,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);L=g(G,"RevisionNotFoundError"),G.forEach(t),R=g(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,O){$(v,i,O),e(i,_),$(v,f,O),$(v,l,O),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E),e(l,k),e(l,A),e(A,I),e(I,L),e(A,R)},d(v){v&&t(i),v&&t(f),v&&t(l)}}}function Wi(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R,v,O,S,U,V,W,C,G,Z,J,ie,ee,Q,X,Y,be,ve;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=a("code"),x=c("HTTPError"),m=c(`
if the HuggingFace API returned an error`),b=h(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),L=c(`
if some parameter value is invalid`),R=h(),v=a("li"),O=a("a"),S=c("RepositoryNotFoundError"),U=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=c("private"),C=c(" and you do not have access."),G=h(),Z=a("li"),J=a("a"),ie=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),Q=h(),X=a("li"),Y=a("a"),be=c("EntryNotFoundError"),ve=c(`
If the file to download cannot be found.`),this.h()},l(B){i=n(B,"P",{});var oe=s(i);_=g(oe,"Raises the following errors:"),oe.forEach(t),f=d(B),l=n(B,"UL",{});var K=s(l);p=n(K,"LI",{});var je=s(p);r=n(je,"A",{href:!0,rel:!0});var ae=s(r);u=n(ae,"CODE",{});var Re=s(u);x=g(Re,"HTTPError"),Re.forEach(t),ae.forEach(t),m=g(je,`
if the HuggingFace API returned an error`),je.forEach(t),b=d(K),E=n(K,"LI",{});var De=s(E);k=n(De,"A",{href:!0,rel:!0});var $e=s(k);A=n($e,"CODE",{});var T=s(A);I=g(T,"ValueError"),T.forEach(t),$e.forEach(t),L=g(De,`
if some parameter value is invalid`),De.forEach(t),R=d(K),v=n(K,"LI",{});var ne=s(v);O=n(ne,"A",{href:!0});var Ho=s(O);S=g(Ho,"RepositoryNotFoundError"),Ho.forEach(t),U=g(ne,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ne,"CODE",{});var ye=s(V);W=g(ye,"private"),ye.forEach(t),C=g(ne," and you do not have access."),ne.forEach(t),G=d(K),Z=n(K,"LI",{});var ke=s(Z);J=n(ke,"A",{href:!0});var jo=s(J);ie=g(jo,"RevisionNotFoundError"),jo.forEach(t),ee=g(ke,`
If the revision to download from cannot be found.`),ke.forEach(t),Q=d(K),X=n(K,"LI",{});var Me=s(X);Y=n(Me,"A",{href:!0});var Do=s(Y);be=g(Do,"EntryNotFoundError"),Do.forEach(t),ve=g(Me,`
If the file to download cannot be found.`),Me.forEach(t),K.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(O,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),w(Y,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){$(B,i,oe),e(i,_),$(B,f,oe),$(B,l,oe),e(l,p),e(p,r),e(r,u),e(u,x),e(p,m),e(l,b),e(l,E),e(E,k),e(k,A),e(A,I),e(E,L),e(l,R),e(l,v),e(v,O),e(O,S),e(v,U),e(v,V),e(V,W),e(v,C),e(l,G),e(l,Z),e(Z,J),e(J,ie),e(Z,ee),e(l,Q),e(l,X),e(X,Y),e(Y,be),e(X,ve)},d(B){B&&t(i),B&&t(f),B&&t(l)}}}function Gi(M){let i,_,f,l,p,r,u,x,m,b,E;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var A=s(i);_=g(A,"Raises the following errors:"),A.forEach(t),f=d(k),l=n(k,"UL",{});var I=s(l);p=n(I,"LI",{});var L=s(p);r=n(L,"A",{href:!0});var R=s(r);u=g(R,"RepositoryNotFoundError"),R.forEach(t),x=g(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);b=g(v,"private"),v.forEach(t),E=g(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){$(k,i,A),e(i,_),$(k,f,A),$(k,l,A),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E)},d(k){k&&t(i),k&&t(f),k&&t(l)}}}function Bi(M){let i,_,f,l,p,r,u,x;return u=new _e({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=a("p"),_=c("Example usage with the "),f=a("code"),l=c("filter"),p=c(" argument:"),r=h(),H(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=g(b,"Example usage with the "),f=n(b,"CODE",{});var E=s(f);l=g(E,"filter"),E.forEach(t),p=g(b," argument:"),b.forEach(t),r=d(m),j(u.$$.fragment,m)},m(m,b){$(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),$(m,r,b),D(u,m,b),x=!0},p:Oe,i(m){x||(F(u.$$.fragment,m),x=!0)},o(m){q(u.$$.fragment,m),x=!1},d(m){m&&t(i),m&&t(r),N(u,m)}}}function Ki(M){let i,_,f,l,p,r,u,x;return u=new _e({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=a("p"),_=c("Example usage with the "),f=a("code"),l=c("search"),p=c(" argument:"),r=h(),H(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=g(b,"Example usage with the "),f=n(b,"CODE",{});var E=s(f);l=g(E,"search"),E.forEach(t),p=g(b," argument:"),b.forEach(t),r=d(m),j(u.$$.fragment,m)},m(m,b){$(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),$(m,r,b),D(u,m,b),x=!0},p:Oe,i(m){x||(F(u.$$.fragment,m),x=!0)},o(m){q(u.$$.fragment,m),x=!1},d(m){m&&t(i),m&&t(r),N(u,m)}}}function Ji(M){let i,_,f,l,p,r,u,x;return u=new _e({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=a("p"),_=c("Example usage with the "),f=a("code"),l=c("filter"),p=c(" argument:"),r=h(),H(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=g(b,"Example usage with the "),f=n(b,"CODE",{});var E=s(f);l=g(E,"filter"),E.forEach(t),p=g(b," argument:"),b.forEach(t),r=d(m),j(u.$$.fragment,m)},m(m,b){$(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),$(m,r,b),D(u,m,b),x=!0},p:Oe,i(m){x||(F(u.$$.fragment,m),x=!0)},o(m){q(u.$$.fragment,m),x=!1},d(m){m&&t(i),m&&t(r),N(u,m)}}}function Qi(M){let i,_,f,l,p,r,u,x;return u=new _e({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=a("p"),_=c("Example usage with the "),f=a("code"),l=c("search"),p=c(" argument:"),r=h(),H(u.$$.fragment)},l(m){i=n(m,"P",{});var b=s(i);_=g(b,"Example usage with the "),f=n(b,"CODE",{});var E=s(f);l=g(E,"search"),E.forEach(t),p=g(b," argument:"),b.forEach(t),r=d(m),j(u.$$.fragment,m)},m(m,b){$(m,i,b),e(i,_),e(i,f),e(f,l),e(i,p),$(m,r,b),D(u,m,b),x=!0},p:Oe,i(m){x||(F(u.$$.fragment,m),x=!0)},o(m){q(u.$$.fragment,m),x=!1},d(m){m&&t(i),m&&t(r),N(u,m)}}}function Xi(M){let i,_,f,l,p;return{c(){i=a("p"),_=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),f=a("a"),l=c("HfApi.set_access_token()"),p=c(" instead."),this.h()},l(r){i=n(r,"P",{});var u=s(i);_=g(u,`Warning: Deprecated, will be removed in v0.8. Please use
`),f=n(u,"A",{href:!0});var x=s(f);l=g(x,"HfApi.set_access_token()"),x.forEach(t),p=g(u," instead."),u.forEach(t),this.h()},h(){w(f,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(r,u){$(r,i,u),e(i,_),e(i,f),e(f,l),e(i,p)},d(r){r&&t(i)}}}function Yi(M){let i,_,f,l,p,r,u,x,m;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=a("code"),x=c("HTTPError"),m=c(`
if credentials are invalid`),this.h()},l(b){i=n(b,"P",{});var E=s(i);_=g(E,"Raises the following errors:"),E.forEach(t),f=d(b),l=n(b,"UL",{});var k=s(l);p=n(k,"LI",{});var A=s(p);r=n(A,"A",{href:!0,rel:!0});var I=s(r);u=n(I,"CODE",{});var L=s(u);x=g(L,"HTTPError"),L.forEach(t),I.forEach(t),m=g(A,`
if credentials are invalid`),A.forEach(t),k.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow")},m(b,E){$(b,i,E),e(i,_),$(b,f,E),$(b,l,E),e(l,p),e(p,r),e(r,u),e(u,x),e(p,m)},d(b){b&&t(i),b&&t(f),b&&t(l)}}}function Zi(M){let i,_,f,l,p;return{c(){i=a("p"),_=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),f=a("a"),l=c("HfApi.unset_access_token()"),p=c(" instead."),this.h()},l(r){i=n(r,"P",{});var u=s(i);_=g(u,`Warning: Deprecated, will be removed in v0.8. Please use
`),f=n(u,"A",{href:!0});var x=s(f);l=g(x,"HfApi.unset_access_token()"),x.forEach(t),p=g(u," instead."),u.forEach(t),this.h()},h(){w(f,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(r,u){$(r,i,u),e(i,_),e(i,f),e(f,l),e(i,p)},d(r){r&&t(i)}}}function el(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),k=h(),A=a("li"),I=a("a"),L=c("RevisionNotFoundError"),R=c(`
If the revision to download from cannot be found.`),this.h()},l(v){i=n(v,"P",{});var O=s(i);_=g(O,"Raises the following errors:"),O.forEach(t),f=d(v),l=n(v,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=g(V,"RepositoryNotFoundError"),V.forEach(t),x=g(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var W=s(m);b=g(W,"private"),W.forEach(t),E=g(U," and you do not have access."),U.forEach(t),k=d(S),A=n(S,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);L=g(G,"RevisionNotFoundError"),G.forEach(t),R=g(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,O){$(v,i,O),e(i,_),$(v,f,O),$(v,l,O),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E),e(l,k),e(l,A),e(A,I),e(I,L),e(A,R)},d(v){v&&t(i),v&&t(f),v&&t(l)}}}function tl(M){let i,_,f,l,p,r,u,x,m,b,E;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var A=s(i);_=g(A,"Raises the following errors:"),A.forEach(t),f=d(k),l=n(k,"UL",{});var I=s(l);p=n(I,"LI",{});var L=s(p);r=n(L,"A",{href:!0});var R=s(r);u=g(R,"RepositoryNotFoundError"),R.forEach(t),x=g(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);b=g(v,"private"),v.forEach(t),E=g(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){$(k,i,A),e(i,_),$(k,f,A),$(k,l,A),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E)},d(k){k&&t(i),k&&t(f),k&&t(l)}}}function ol(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),k=h(),A=a("li"),I=a("a"),L=c("RevisionNotFoundError"),R=c(`
If the revision to download from cannot be found.`),this.h()},l(v){i=n(v,"P",{});var O=s(i);_=g(O,"Raises the following errors:"),O.forEach(t),f=d(v),l=n(v,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=g(V,"RepositoryNotFoundError"),V.forEach(t),x=g(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var W=s(m);b=g(W,"private"),W.forEach(t),E=g(U," and you do not have access."),U.forEach(t),k=d(S),A=n(S,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);L=g(G,"RevisionNotFoundError"),G.forEach(t),R=g(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,O){$(v,i,O),e(i,_),$(v,f,O),$(v,l,O),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E),e(l,k),e(l,A),e(A,I),e(I,L),e(A,R)},d(v){v&&t(i),v&&t(f),v&&t(l)}}}function al(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),k=h(),A=a("li"),I=a("a"),L=c("RevisionNotFoundError"),R=c(`
If the revision to download from cannot be found.`),this.h()},l(v){i=n(v,"P",{});var O=s(i);_=g(O,"Raises the following errors:"),O.forEach(t),f=d(v),l=n(v,"UL",{});var S=s(l);p=n(S,"LI",{});var U=s(p);r=n(U,"A",{href:!0});var V=s(r);u=g(V,"RepositoryNotFoundError"),V.forEach(t),x=g(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var W=s(m);b=g(W,"private"),W.forEach(t),E=g(U," and you do not have access."),U.forEach(t),k=d(S),A=n(S,"LI",{});var C=s(A);I=n(C,"A",{href:!0});var G=s(I);L=g(G,"RevisionNotFoundError"),G.forEach(t),R=g(C,`
If the revision to download from cannot be found.`),C.forEach(t),S.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(I,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,O){$(v,i,O),e(i,_),$(v,f,O),$(v,l,O),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E),e(l,k),e(l,A),e(A,I),e(I,L),e(A,R)},d(v){v&&t(i),v&&t(f),v&&t(l)}}}function nl(M){let i,_,f,l,p,r,u,x,m,b,E;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=c("RepositoryNotFoundError"),x=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),b=c("private"),E=c(" and you do not have access."),this.h()},l(k){i=n(k,"P",{});var A=s(i);_=g(A,"Raises the following errors:"),A.forEach(t),f=d(k),l=n(k,"UL",{});var I=s(l);p=n(I,"LI",{});var L=s(p);r=n(L,"A",{href:!0});var R=s(r);u=g(R,"RepositoryNotFoundError"),R.forEach(t),x=g(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);b=g(v,"private"),v.forEach(t),E=g(L," and you do not have access."),L.forEach(t),I.forEach(t),this.h()},h(){w(r,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(k,A){$(k,i,A),e(i,_),$(k,f,A),$(k,l,A),e(l,p),e(p,r),e(r,u),e(p,x),e(p,m),e(m,b),e(p,E)},d(k){k&&t(i),k&&t(f),k&&t(l)}}}function sl(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R,v,O,S,U,V,W,C,G,Z,J,ie,ee;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=a("code"),x=c("HTTPError"),m=c(`
if the HuggingFace API returned an error`),b=h(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),L=c(`
if some parameter value is invalid`),R=h(),v=a("li"),O=a("a"),S=c("RepositoryNotFoundError"),U=c(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=c("private"),C=c(" and you do not have access."),G=h(),Z=a("li"),J=a("a"),ie=c("RevisionNotFoundError"),ee=c(`
If the revision to download from cannot be found.`),this.h()},l(Q){i=n(Q,"P",{});var X=s(i);_=g(X,"Raises the following errors:"),X.forEach(t),f=d(Q),l=n(Q,"UL",{});var Y=s(l);p=n(Y,"LI",{});var be=s(p);r=n(be,"A",{href:!0,rel:!0});var ve=s(r);u=n(ve,"CODE",{});var B=s(u);x=g(B,"HTTPError"),B.forEach(t),ve.forEach(t),m=g(be,`
if the HuggingFace API returned an error`),be.forEach(t),b=d(Y),E=n(Y,"LI",{});var oe=s(E);k=n(oe,"A",{href:!0,rel:!0});var K=s(k);A=n(K,"CODE",{});var je=s(A);I=g(je,"ValueError"),je.forEach(t),K.forEach(t),L=g(oe,`
if some parameter value is invalid`),oe.forEach(t),R=d(Y),v=n(Y,"LI",{});var ae=s(v);O=n(ae,"A",{href:!0});var Re=s(O);S=g(Re,"RepositoryNotFoundError"),Re.forEach(t),U=g(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var De=s(V);W=g(De,"private"),De.forEach(t),C=g(ae," and you do not have access."),ae.forEach(t),G=d(Y),Z=n(Y,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var T=s(J);ie=g(T,"RevisionNotFoundError"),T.forEach(t),ee=g($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Y.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow"),w(O,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),w(J,"href","/docs/huggingface_hub/pr_888/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){$(Q,i,X),e(i,_),$(Q,f,X),$(Q,l,X),e(l,p),e(p,r),e(r,u),e(u,x),e(p,m),e(l,b),e(l,E),e(E,k),e(k,A),e(A,I),e(E,L),e(l,R),e(l,v),e(v,O),e(O,S),e(v,U),e(v,V),e(V,W),e(v,C),e(l,G),e(l,Z),e(Z,J),e(J,ie),e(Z,ee)},d(Q){Q&&t(i),Q&&t(f),Q&&t(l)}}}function rl(M){let i,_,f,l,p;return l=new _e({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=a("p"),_=c("Example usage:"),f=h(),H(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=g(u,"Example usage:"),u.forEach(t),f=d(r),j(l.$$.fragment,r)},m(r,u){$(r,i,u),e(i,_),$(r,f,u),D(l,r,u),p=!0},p:Oe,i(r){p||(F(l.$$.fragment,r),p=!0)},o(r){q(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),N(l,r)}}}function il(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L;return{c(){i=a("p"),_=c("Raises the following errors:"),f=h(),l=a("ul"),p=a("li"),r=a("a"),u=a("code"),x=c("HTTPError"),m=c(`
if the HuggingFace API returned an error`),b=h(),E=a("li"),k=a("a"),A=a("code"),I=c("ValueError"),L=c(`
if some parameter value is invalid`),this.h()},l(R){i=n(R,"P",{});var v=s(i);_=g(v,"Raises the following errors:"),v.forEach(t),f=d(R),l=n(R,"UL",{});var O=s(l);p=n(O,"LI",{});var S=s(p);r=n(S,"A",{href:!0,rel:!0});var U=s(r);u=n(U,"CODE",{});var V=s(u);x=g(V,"HTTPError"),V.forEach(t),U.forEach(t),m=g(S,`
if the HuggingFace API returned an error`),S.forEach(t),b=d(O),E=n(O,"LI",{});var W=s(E);k=n(W,"A",{href:!0,rel:!0});var C=s(k);A=n(C,"CODE",{});var G=s(A);I=g(G,"ValueError"),G.forEach(t),C.forEach(t),L=g(W,`
if some parameter value is invalid`),W.forEach(t),O.forEach(t),this.h()},h(){w(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),w(r,"rel","nofollow"),w(k,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),w(k,"rel","nofollow")},m(R,v){$(R,i,v),e(i,_),$(R,f,v),$(R,l,v),e(l,p),e(p,r),e(r,u),e(u,x),e(p,m),e(l,b),e(l,E),e(E,k),e(k,A),e(A,I),e(E,L)},d(R){R&&t(i),R&&t(f),R&&t(l)}}}function ll(M){let i,_,f,l,p;return l=new _e({props:{code:`upload_file(
    folder_path="local/checkpoints",
    path_in_repo="remote/experiment/checkpoints",
    repo_id="username/my-dataset",
    repo_type="datasets",
    token="my_token",
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>upload_file(
<span class="hljs-meta">... </span>    folder_path=<span class="hljs-string">&quot;local/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    path_in_repo=<span class="hljs-string">&quot;remote/experiment/checkpoints&quot;</span>,
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;username/my-dataset&quot;</span>,
<span class="hljs-meta">... </span>    repo_type=<span class="hljs-string">&quot;datasets&quot;</span>,
<span class="hljs-meta">... </span>    token=<span class="hljs-string">&quot;my_token&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-comment"># &quot;https://huggingface.co/datasets/username/my-dataset/blob/main/remote/file/path.h5&quot;</span>
TODO : <span class="hljs-keyword">return</span> <span class="hljs-built_in">type</span>`}}),{c(){i=a("p"),_=c("Example usage:"),f=h(),H(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=g(u,"Example usage:"),u.forEach(t),f=d(r),j(l.$$.fragment,r)},m(r,u){$(r,i,u),e(i,_),$(r,f,u),D(l,r,u),p=!0},p:Oe,i(r){p||(F(l.$$.fragment,r),p=!0)},o(r){q(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),N(l,r)}}}function cl(M){let i,_,f,l,p;return l=new _e({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=a("p"),_=c("Examples:"),f=h(),H(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=g(u,"Examples:"),u.forEach(t),f=d(r),j(l.$$.fragment,r)},m(r,u){$(r,i,u),e(i,_),$(r,f,u),D(l,r,u),p=!0},p:Oe,i(r){p||(F(l.$$.fragment,r),p=!0)},o(r){q(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),N(l,r)}}}function gl(M){let i,_;return i=new _e({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){H(i.$$.fragment)},l(f){j(i.$$.fragment,f)},m(f,l){D(i,f,l),_=!0},p:Oe,i(f){_||(F(i.$$.fragment,f),_=!0)},o(f){q(i.$$.fragment,f),_=!1},d(f){N(i,f)}}}function pl(M){let i,_,f,l,p;return l=new _e({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=a("p"),_=c("Example:"),f=h(),H(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=g(u,"Example:"),u.forEach(t),f=d(r),j(l.$$.fragment,r)},m(r,u){$(r,i,u),e(i,_),$(r,f,u),D(l,r,u),p=!0},p:Oe,i(r){p||(F(l.$$.fragment,r),p=!0)},o(r){q(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),N(l,r)}}}function hl(M){let i,_,f,l,p;return l=new _e({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=a("p"),_=c("Example:"),f=h(),H(l.$$.fragment)},l(r){i=n(r,"P",{});var u=s(i);_=g(u,"Example:"),u.forEach(t),f=d(r),j(l.$$.fragment,r)},m(r,u){$(r,i,u),e(i,_),$(r,f,u),D(l,r,u),p=!0},p:Oe,i(r){p||(F(l.$$.fragment,r),p=!0)},o(r){q(l.$$.fragment,r),p=!1},d(r){r&&t(i),r&&t(f),N(l,r)}}}function dl(M){let i,_,f,l,p,r,u,x,m,b,E,k,A,I,L,R,v,O,S,U,V,W,C,G,Z,J,ie,ee,Q,X,Y,be,ve,B,oe,K,je,ae,Re,De,$e,T,ne,Ho,ye,ke,jo,Me,Do,mn,ze,Pt,_n,Uo,bn,vn,le,Lt,$n,So,yn,kn,Co,wn,En,Ve,An,Fe,Ot,xn,zo,Hn,jn,We,Dn,qe,Rt,Fn,Vo,qn,Nn,Ge,Tn,Be,Mt,In,Wo,Pn,Ln,Ke,Ut,On,Go,Rn,Mn,Je,St,Un,Bo,Sn,Cn,ce,Ct,zn,Ko,Vn,Wn,Qe,Gn,Xe,Bn,Ye,zt,Kn,Jo,Jn,Qn,ge,Vt,Xn,Qo,Yn,Zn,Ze,es,et,ts,tt,Wt,os,Xo,as,ns,pe,Gt,ss,Yo,rs,is,ot,ls,at,cs,Ne,Bt,gs,Zo,ps,hs,nt,ds,he,Kt,fs,ea,us,ms,ta,_s,bs,st,vs,de,Jt,$s,oa,ys,ks,Qt,ws,Xt,Es,As,xs,rt,Hs,Te,Yt,js,aa,Ds,Fs,it,qs,lt,Zt,Ns,na,Ts,Is,fe,eo,Ps,sa,Ls,Os,ra,Rs,Ms,ct,Us,gt,to,Ss,ia,Cs,zs,Ie,oo,Vs,la,Ws,Gs,pt,Bs,ue,ao,Ks,ca,Js,Qs,ht,Xs,dt,Ys,te,no,Zs,ga,er,tr,pa,or,ar,so,nr,ha,sr,rr,ir,ft,lr,ut,cr,mt,ro,gr,da,pr,Sa,Ue,_t,fa,io,hr,ua,dr,Ca,lo,ma,fr,ur,za,bt,mr,Fo,_r,br,Va,se,co,vr,vt,go,$r,_a,yr,kr,Pe,po,wr,ba,Er,Ar,ho,xr,va,Hr,jr,Dr,$t,fo,Fr,$a,qr,Wa,Se,yt,ya,uo,Nr,ka,Tr,Ga,kt,Ir,wa,Pr,Lr,Ba,we,mo,Or,Ea,Rr,Mr,wt,Ka,Ee,_o,Ur,Aa,Sr,Cr,Et,Ja,Ae,bo,zr,xa,Vr,Wr,At,Qa,xe,vo,Gr,Ha,Br,Kr,xt,Xa;return r=new Qr({}),J=new _e({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new _e({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ne=new z({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L565"}}),ke=new z({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub.commit_api.CommitOperationAdd, huggingface_hub.commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1820"}}),Pt=new z({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1432",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Lt=new z({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1225",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Ve=new re({props:{$$slots:{default:[Vi]},$$scope:{ctx:M}}}),Ot=new z({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2274"}}),We=new re({props:{$$slots:{default:[Wi]},$$scope:{ctx:M}}}),Rt=new z({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1562"}}),Ge=new re({props:{$$slots:{default:[Gi]},$$scope:{ctx:M}}}),Mt=new z({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L764"}}),Ut=new z({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2352",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),St=new z({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L756"}}),Ct=new z({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L983"}}),Qe=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Bi]},$$scope:{ctx:M}}}),Xe=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Ki]},$$scope:{ctx:M}}}),zt=new z({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1149",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Vt=new z({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L774"}}),Ze=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Ji]},$$scope:{ctx:M}}}),et=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Qi]},$$scope:{ctx:M}}}),Wt=new z({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1391",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Gt=new z({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L569",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),ot=new re({props:{$$slots:{default:[Xi]},$$scope:{ctx:M}}}),at=new re({props:{$$slots:{default:[Yi]},$$scope:{ctx:M}}}),Bt=new z({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L701"}}),nt=new re({props:{$$slots:{default:[Zi]},$$scope:{ctx:M}}}),Kt=new z({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1163",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),st=new re({props:{$$slots:{default:[el]},$$scope:{ctx:M}}}),Jt=new z({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1741"}}),rt=new re({props:{$$slots:{default:[tl]},$$scope:{ctx:M}}}),Yt=new z({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1335",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),it=new re({props:{$$slots:{default:[ol]},$$scope:{ctx:M}}}),Zt=new z({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L737"}}),eo=new z({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1280",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),ct=new re({props:{$$slots:{default:[al]},$$scope:{ctx:M}}}),to=new z({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L749"}}),oo=new z({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1665",returnDescription:`
<p>The HTTP response in json.</p>
`}}),pt=new re({props:{$$slots:{default:[nl]},$$scope:{ctx:M}}}),ao=new z({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1935",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ht=new re({props:{$$slots:{default:[sl]},$$scope:{ctx:M}}}),dt=new Le({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[rl]},$$scope:{ctx:M}}}),no=new z({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2159",returnDescription:`
<p>TODO @SBrandeis</p>
`,returnType:`
<p><code>str</code> or None</p>
`}}),ft=new re({props:{$$slots:{default:[il]},$$scope:{ctx:M}}}),ut=new Le({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[ll]},$$scope:{ctx:M}}}),ro=new z({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L611"}}),io=new Qr({}),co=new z({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2388"}}),go=new z({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2425"}}),po=new z({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2404",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),fo=new z({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2391"}}),uo=new Qr({}),mo=new z({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L160"}}),wt=new Le({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[cl]},$$scope:{ctx:M}}}),_o=new z({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L246"}}),Et=new Le({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[gl]},$$scope:{ctx:M}}}),bo=new z({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L453"}}),At=new Le({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[pl]},$$scope:{ctx:M}}}),vo=new z({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L415"}}),xt=new Le({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[hl]},$$scope:{ctx:M}}}),{c(){i=a("meta"),_=h(),f=a("h1"),l=a("a"),p=a("span"),H(r.$$.fragment),u=h(),x=a("span"),m=c("Hugging Face Hub API"),b=h(),E=a("p"),k=c("Below is the documentation for the "),A=a("code"),I=c("HfApi"),L=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),R=h(),v=a("p"),O=c("All methods from the "),S=a("code"),U=c("HfApi"),V=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),W=h(),C=a("p"),G=c("The following approach uses the method from the root of the package:"),Z=h(),H(J.$$.fragment),ie=h(),ee=a("p"),Q=c("The following approach uses the "),X=a("code"),Y=c("HfApi"),be=c(" class:"),ve=h(),H(B.$$.fragment),oe=h(),K=a("p"),je=c("Using the "),ae=a("code"),Re=c("HfApi"),De=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),$e=h(),T=a("div"),H(ne.$$.fragment),Ho=h(),ye=a("div"),H(ke.$$.fragment),jo=h(),Me=a("p"),Do=c("Creates a commit in the given repo, deleting & uploading files as needed."),mn=h(),ze=a("div"),H(Pt.$$.fragment),_n=h(),Uo=a("p"),bn=c("Create an empty repo on the HuggingFace Hub."),vn=h(),le=a("div"),H(Lt.$$.fragment),$n=h(),So=a("p"),yn=c("Get info on one specific dataset on huggingface.co."),kn=h(),Co=a("p"),wn=c("Dataset can be private if you pass an acceptable token."),En=h(),H(Ve.$$.fragment),An=h(),Fe=a("div"),H(Ot.$$.fragment),xn=h(),zo=a("p"),Hn=c("Deletes a file in the given repo."),jn=h(),H(We.$$.fragment),Dn=h(),qe=a("div"),H(Rt.$$.fragment),Fn=h(),Vo=a("p"),qn=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Nn=h(),H(Ge.$$.fragment),Tn=h(),Be=a("div"),H(Mt.$$.fragment),In=h(),Wo=a("p"),Pn=c("Gets all valid dataset tags as a nested namespace object."),Ln=h(),Ke=a("div"),H(Ut.$$.fragment),On=h(),Go=a("p"),Rn=c(`Returns the repository name for a given model ID and optional
organization.`),Mn=h(),Je=a("div"),H(St.$$.fragment),Un=h(),Bo=a("p"),Sn=c("Gets all valid model tags as a nested namespace object"),Cn=h(),ce=a("div"),H(Ct.$$.fragment),zn=h(),Ko=a("p"),Vn=c("Get the public list of all the datasets on huggingface.co"),Wn=h(),H(Qe.$$.fragment),Gn=h(),H(Xe.$$.fragment),Bn=h(),Ye=a("div"),H(zt.$$.fragment),Kn=h(),Jo=a("p"),Jn=c("Get the public list of all the metrics on huggingface.co"),Qn=h(),ge=a("div"),H(Vt.$$.fragment),Xn=h(),Qo=a("p"),Yn=c("Get the public list of all the models on huggingface.co"),Zn=h(),H(Ze.$$.fragment),es=h(),H(et.$$.fragment),ts=h(),tt=a("div"),H(Wt.$$.fragment),os=h(),Xo=a("p"),as=c("Get the list of files in a given repo."),ns=h(),pe=a("div"),H(Gt.$$.fragment),ss=h(),Yo=a("p"),rs=c("Call HF API to sign in a user and get a token if credentials are valid."),is=h(),H(ot.$$.fragment),ls=h(),H(at.$$.fragment),cs=h(),Ne=a("div"),H(Bt.$$.fragment),gs=h(),Zo=a("p"),ps=c("Call HF API to log out."),hs=h(),H(nt.$$.fragment),ds=h(),he=a("div"),H(Kt.$$.fragment),fs=h(),ea=a("p"),us=c("Get info on one specific model on huggingface.co"),ms=h(),ta=a("p"),_s=c("Model can be private if you pass an acceptable token or are logged in."),bs=h(),H(st.$$.fragment),vs=h(),de=a("div"),H(Jt.$$.fragment),$s=h(),oa=a("p"),ys=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ks=h(),Qt=a("p"),ws=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),Xt=a("a"),Es=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),As=c("."),xs=h(),H(rt.$$.fragment),Hs=h(),Te=a("div"),H(Yt.$$.fragment),js=h(),aa=a("p"),Ds=c("Get the info object for a given repo of a given type."),Fs=h(),H(it.$$.fragment),qs=h(),lt=a("div"),H(Zt.$$.fragment),Ns=h(),na=a("p"),Ts=c(`Saves the passed access token so git can correctly authenticate the
user.`),Is=h(),fe=a("div"),H(eo.$$.fragment),Ps=h(),sa=a("p"),Ls=c("Get info on one specific Space on huggingface.co."),Os=h(),ra=a("p"),Rs=c("Space can be private if you pass an acceptable token."),Ms=h(),H(ct.$$.fragment),Us=h(),gt=a("div"),H(to.$$.fragment),Ss=h(),ia=a("p"),Cs=c("Resets the user\u2019s access token."),zs=h(),Ie=a("div"),H(oo.$$.fragment),Vs=h(),la=a("p"),Ws=c("Update the visibility setting of a repository."),Gs=h(),H(pt.$$.fragment),Bs=h(),ue=a("div"),H(ao.$$.fragment),Ks=h(),ca=a("p"),Js=c(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Qs=h(),H(ht.$$.fragment),Xs=h(),H(dt.$$.fragment),Ys=h(),te=a("div"),H(no.$$.fragment),Zs=h(),ga=a("p"),er=c(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),tr=h(),pa=a("p"),or=c(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),ar=h(),so=a("p"),nr=c("Uses "),ha=a("code"),sr=c("HfApi.create_commit"),rr=c(" under the hood."),ir=h(),H(ft.$$.fragment),lr=h(),H(ut.$$.fragment),cr=h(),mt=a("div"),H(ro.$$.fragment),gr=h(),da=a("p"),pr=c("Call HF API to know \u201Cwhoami\u201D."),Sa=h(),Ue=a("h2"),_t=a("a"),fa=a("span"),H(io.$$.fragment),hr=h(),ua=a("span"),dr=c("Hugging Face local storage"),Ca=h(),lo=a("p"),ma=a("code"),fr=c("huggingface_hub"),ur=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),za=h(),bt=a("p"),mr=c("It does this using the "),Fo=a("a"),_r=c("HfFolder"),br=c(" utility, which saves data at the root of the user."),Va=h(),se=a("div"),H(co.$$.fragment),vr=h(),vt=a("div"),H(go.$$.fragment),$r=h(),_a=a("p"),yr=c("Deletes the token from storage. Does not fail if token does not exist."),kr=h(),Pe=a("div"),H(po.$$.fragment),wr=h(),ba=a("p"),Er=c("Get token or None if not existent."),Ar=h(),ho=a("p"),xr=c("Note that a token can be also provided using the "),va=a("code"),Hr=c("HUGGING_FACE_HUB_TOKEN"),jr=c(`
environment variable.`),Dr=h(),$t=a("div"),H(fo.$$.fragment),Fr=h(),$a=a("p"),qr=c("Save token, creating folder as needed."),Wa=h(),Se=a("h2"),yt=a("a"),ya=a("span"),H(uo.$$.fragment),Nr=h(),ka=a("span"),Tr=c("Filtering helpers"),Ga=h(),kt=a("p"),Ir=c("Some helpers to filter repositories on the Hub are available in the "),wa=a("code"),Pr=c("huggingface_hub"),Lr=c(" package."),Ba=h(),we=a("div"),H(mo.$$.fragment),Or=h(),Ea=a("p"),Rr=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Mr=h(),H(wt.$$.fragment),Ka=h(),Ee=a("div"),H(_o.$$.fragment),Ur=h(),Aa=a("p"),Sr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Cr=h(),H(Et.$$.fragment),Ja=h(),Ae=a("div"),H(bo.$$.fragment),zr=h(),xa=a("p"),Vr=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Wr=h(),H(At.$$.fragment),Qa=h(),xe=a("div"),H(vo.$$.fragment),Gr=h(),Ha=a("p"),Br=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Kr=h(),H(xt.$$.fragment),this.h()},l(o){const y=Ci('[data-svelte="svelte-1phssyn"]',document.head);i=n(y,"META",{name:!0,content:!0}),y.forEach(t),_=d(o),f=n(o,"H1",{class:!0});var $o=s(f);l=n($o,"A",{id:!0,class:!0,href:!0});var ja=s(l);p=n(ja,"SPAN",{});var Da=s(p);j(r.$$.fragment,Da),Da.forEach(t),ja.forEach(t),u=d($o),x=n($o,"SPAN",{});var Fa=s(x);m=g(Fa,"Hugging Face Hub API"),Fa.forEach(t),$o.forEach(t),b=d(o),E=n(o,"P",{});var yo=s(E);k=g(yo,"Below is the documentation for the "),A=n(yo,"CODE",{});var qa=s(A);I=g(qa,"HfApi"),qa.forEach(t),L=g(yo,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),yo.forEach(t),R=d(o),v=n(o,"P",{});var ko=s(v);O=g(ko,"All methods from the "),S=n(ko,"CODE",{});var Na=s(S);U=g(Na,"HfApi"),Na.forEach(t),V=g(ko,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),ko.forEach(t),W=d(o),C=n(o,"P",{});var Ta=s(C);G=g(Ta,"The following approach uses the method from the root of the package:"),Ta.forEach(t),Z=d(o),j(J.$$.fragment,o),ie=d(o),ee=n(o,"P",{});var wo=s(ee);Q=g(wo,"The following approach uses the "),X=n(wo,"CODE",{});var Ia=s(X);Y=g(Ia,"HfApi"),Ia.forEach(t),be=g(wo," class:"),wo.forEach(t),ve=d(o),j(B.$$.fragment,o),oe=d(o),K=n(o,"P",{});var Eo=s(K);je=g(Eo,"Using the "),ae=n(Eo,"CODE",{});var Pa=s(ae);Re=g(Pa,"HfApi"),Pa.forEach(t),De=g(Eo," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Eo.forEach(t),$e=d(o),T=n(o,"DIV",{class:!0});var P=s(T);j(ne.$$.fragment,P),Ho=d(P),ye=n(P,"DIV",{class:!0});var Ao=s(ye);j(ke.$$.fragment,Ao),jo=d(Ao),Me=n(Ao,"P",{});var La=s(Me);Do=g(La,"Creates a commit in the given repo, deleting & uploading files as needed."),La.forEach(t),Ao.forEach(t),mn=d(P),ze=n(P,"DIV",{class:!0});var xo=s(ze);j(Pt.$$.fragment,xo),_n=d(xo),Uo=n(xo,"P",{});var Oa=s(Uo);bn=g(Oa,"Create an empty repo on the HuggingFace Hub."),Oa.forEach(t),xo.forEach(t),vn=d(P),le=n(P,"DIV",{class:!0});var He=s(le);j(Lt.$$.fragment,He),$n=d(He),So=n(He,"P",{});var Ra=s(So);yn=g(Ra,"Get info on one specific dataset on huggingface.co."),Ra.forEach(t),kn=d(He),Co=n(He,"P",{});var Ma=s(Co);wn=g(Ma,"Dataset can be private if you pass an acceptable token."),Ma.forEach(t),En=d(He),j(Ve.$$.fragment,He),He.forEach(t),An=d(P),Fe=n(P,"DIV",{class:!0});var Ce=s(Fe);j(Ot.$$.fragment,Ce),xn=d(Ce),zo=n(Ce,"P",{});var Ua=s(zo);Hn=g(Ua,"Deletes a file in the given repo."),Ua.forEach(t),jn=d(Ce),j(We.$$.fragment,Ce),Ce.forEach(t),Dn=d(P),qe=n(P,"DIV",{class:!0});var qo=s(qe);j(Rt.$$.fragment,qo),Fn=d(qo),Vo=n(qo,"P",{});var Xr=s(Vo);qn=g(Xr,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Xr.forEach(t),Nn=d(qo),j(Ge.$$.fragment,qo),qo.forEach(t),Tn=d(P),Be=n(P,"DIV",{class:!0});var Ya=s(Be);j(Mt.$$.fragment,Ya),In=d(Ya),Wo=n(Ya,"P",{});var Yr=s(Wo);Pn=g(Yr,"Gets all valid dataset tags as a nested namespace object."),Yr.forEach(t),Ya.forEach(t),Ln=d(P),Ke=n(P,"DIV",{class:!0});var Za=s(Ke);j(Ut.$$.fragment,Za),On=d(Za),Go=n(Za,"P",{});var Zr=s(Go);Rn=g(Zr,`Returns the repository name for a given model ID and optional
organization.`),Zr.forEach(t),Za.forEach(t),Mn=d(P),Je=n(P,"DIV",{class:!0});var en=s(Je);j(St.$$.fragment,en),Un=d(en),Bo=n(en,"P",{});var ei=s(Bo);Sn=g(ei,"Gets all valid model tags as a nested namespace object"),ei.forEach(t),en.forEach(t),Cn=d(P),ce=n(P,"DIV",{class:!0});var Ht=s(ce);j(Ct.$$.fragment,Ht),zn=d(Ht),Ko=n(Ht,"P",{});var ti=s(Ko);Vn=g(ti,"Get the public list of all the datasets on huggingface.co"),ti.forEach(t),Wn=d(Ht),j(Qe.$$.fragment,Ht),Gn=d(Ht),j(Xe.$$.fragment,Ht),Ht.forEach(t),Bn=d(P),Ye=n(P,"DIV",{class:!0});var tn=s(Ye);j(zt.$$.fragment,tn),Kn=d(tn),Jo=n(tn,"P",{});var oi=s(Jo);Jn=g(oi,"Get the public list of all the metrics on huggingface.co"),oi.forEach(t),tn.forEach(t),Qn=d(P),ge=n(P,"DIV",{class:!0});var jt=s(ge);j(Vt.$$.fragment,jt),Xn=d(jt),Qo=n(jt,"P",{});var ai=s(Qo);Yn=g(ai,"Get the public list of all the models on huggingface.co"),ai.forEach(t),Zn=d(jt),j(Ze.$$.fragment,jt),es=d(jt),j(et.$$.fragment,jt),jt.forEach(t),ts=d(P),tt=n(P,"DIV",{class:!0});var on=s(tt);j(Wt.$$.fragment,on),os=d(on),Xo=n(on,"P",{});var ni=s(Xo);as=g(ni,"Get the list of files in a given repo."),ni.forEach(t),on.forEach(t),ns=d(P),pe=n(P,"DIV",{class:!0});var Dt=s(pe);j(Gt.$$.fragment,Dt),ss=d(Dt),Yo=n(Dt,"P",{});var si=s(Yo);rs=g(si,"Call HF API to sign in a user and get a token if credentials are valid."),si.forEach(t),is=d(Dt),j(ot.$$.fragment,Dt),ls=d(Dt),j(at.$$.fragment,Dt),Dt.forEach(t),cs=d(P),Ne=n(P,"DIV",{class:!0});var No=s(Ne);j(Bt.$$.fragment,No),gs=d(No),Zo=n(No,"P",{});var ri=s(Zo);ps=g(ri,"Call HF API to log out."),ri.forEach(t),hs=d(No),j(nt.$$.fragment,No),No.forEach(t),ds=d(P),he=n(P,"DIV",{class:!0});var Ft=s(he);j(Kt.$$.fragment,Ft),fs=d(Ft),ea=n(Ft,"P",{});var ii=s(ea);us=g(ii,"Get info on one specific model on huggingface.co"),ii.forEach(t),ms=d(Ft),ta=n(Ft,"P",{});var li=s(ta);_s=g(li,"Model can be private if you pass an acceptable token or are logged in."),li.forEach(t),bs=d(Ft),j(st.$$.fragment,Ft),Ft.forEach(t),vs=d(P),de=n(P,"DIV",{class:!0});var qt=s(de);j(Jt.$$.fragment,qt),$s=d(qt),oa=n(qt,"P",{});var ci=s(oa);ys=g(ci,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ci.forEach(t),ks=d(qt),Qt=n(qt,"P",{});var an=s(Qt);ws=g(an,`Note there are certain limitations. For more information about moving
repositories, please see
`),Xt=n(an,"A",{href:!0,rel:!0});var gi=s(Xt);Es=g(gi,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),gi.forEach(t),As=g(an,"."),an.forEach(t),xs=d(qt),j(rt.$$.fragment,qt),qt.forEach(t),Hs=d(P),Te=n(P,"DIV",{class:!0});var To=s(Te);j(Yt.$$.fragment,To),js=d(To),aa=n(To,"P",{});var pi=s(aa);Ds=g(pi,"Get the info object for a given repo of a given type."),pi.forEach(t),Fs=d(To),j(it.$$.fragment,To),To.forEach(t),qs=d(P),lt=n(P,"DIV",{class:!0});var nn=s(lt);j(Zt.$$.fragment,nn),Ns=d(nn),na=n(nn,"P",{});var hi=s(na);Ts=g(hi,`Saves the passed access token so git can correctly authenticate the
user.`),hi.forEach(t),nn.forEach(t),Is=d(P),fe=n(P,"DIV",{class:!0});var Nt=s(fe);j(eo.$$.fragment,Nt),Ps=d(Nt),sa=n(Nt,"P",{});var di=s(sa);Ls=g(di,"Get info on one specific Space on huggingface.co."),di.forEach(t),Os=d(Nt),ra=n(Nt,"P",{});var fi=s(ra);Rs=g(fi,"Space can be private if you pass an acceptable token."),fi.forEach(t),Ms=d(Nt),j(ct.$$.fragment,Nt),Nt.forEach(t),Us=d(P),gt=n(P,"DIV",{class:!0});var sn=s(gt);j(to.$$.fragment,sn),Ss=d(sn),ia=n(sn,"P",{});var ui=s(ia);Cs=g(ui,"Resets the user\u2019s access token."),ui.forEach(t),sn.forEach(t),zs=d(P),Ie=n(P,"DIV",{class:!0});var Io=s(Ie);j(oo.$$.fragment,Io),Vs=d(Io),la=n(Io,"P",{});var mi=s(la);Ws=g(mi,"Update the visibility setting of a repository."),mi.forEach(t),Gs=d(Io),j(pt.$$.fragment,Io),Io.forEach(t),Bs=d(P),ue=n(P,"DIV",{class:!0});var Tt=s(ue);j(ao.$$.fragment,Tt),Ks=d(Tt),ca=n(Tt,"P",{});var _i=s(ca);Js=g(_i,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),_i.forEach(t),Qs=d(Tt),j(ht.$$.fragment,Tt),Xs=d(Tt),j(dt.$$.fragment,Tt),Tt.forEach(t),Ys=d(P),te=n(P,"DIV",{class:!0});var me=s(te);j(no.$$.fragment,me),Zs=d(me),ga=n(me,"P",{});var bi=s(ga);er=g(bi,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),bi.forEach(t),tr=d(me),pa=n(me,"P",{});var vi=s(pa);or=g(vi,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),vi.forEach(t),ar=d(me),so=n(me,"P",{});var rn=s(so);nr=g(rn,"Uses "),ha=n(rn,"CODE",{});var $i=s(ha);sr=g($i,"HfApi.create_commit"),$i.forEach(t),rr=g(rn," under the hood."),rn.forEach(t),ir=d(me),j(ft.$$.fragment,me),lr=d(me),j(ut.$$.fragment,me),me.forEach(t),cr=d(P),mt=n(P,"DIV",{class:!0});var ln=s(mt);j(ro.$$.fragment,ln),gr=d(ln),da=n(ln,"P",{});var yi=s(da);pr=g(yi,"Call HF API to know \u201Cwhoami\u201D."),yi.forEach(t),ln.forEach(t),P.forEach(t),Sa=d(o),Ue=n(o,"H2",{class:!0});var cn=s(Ue);_t=n(cn,"A",{id:!0,class:!0,href:!0});var ki=s(_t);fa=n(ki,"SPAN",{});var wi=s(fa);j(io.$$.fragment,wi),wi.forEach(t),ki.forEach(t),hr=d(cn),ua=n(cn,"SPAN",{});var Ei=s(ua);dr=g(Ei,"Hugging Face local storage"),Ei.forEach(t),cn.forEach(t),Ca=d(o),lo=n(o,"P",{});var Jr=s(lo);ma=n(Jr,"CODE",{});var Ai=s(ma);fr=g(Ai,"huggingface_hub"),Ai.forEach(t),ur=g(Jr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Jr.forEach(t),za=d(o),bt=n(o,"P",{});var gn=s(bt);mr=g(gn,"It does this using the "),Fo=n(gn,"A",{href:!0});var xi=s(Fo);_r=g(xi,"HfFolder"),xi.forEach(t),br=g(gn," utility, which saves data at the root of the user."),gn.forEach(t),Va=d(o),se=n(o,"DIV",{class:!0});var It=s(se);j(co.$$.fragment,It),vr=d(It),vt=n(It,"DIV",{class:!0});var pn=s(vt);j(go.$$.fragment,pn),$r=d(pn),_a=n(pn,"P",{});var Hi=s(_a);yr=g(Hi,"Deletes the token from storage. Does not fail if token does not exist."),Hi.forEach(t),pn.forEach(t),kr=d(It),Pe=n(It,"DIV",{class:!0});var Po=s(Pe);j(po.$$.fragment,Po),wr=d(Po),ba=n(Po,"P",{});var ji=s(ba);Er=g(ji,"Get token or None if not existent."),ji.forEach(t),Ar=d(Po),ho=n(Po,"P",{});var hn=s(ho);xr=g(hn,"Note that a token can be also provided using the "),va=n(hn,"CODE",{});var Di=s(va);Hr=g(Di,"HUGGING_FACE_HUB_TOKEN"),Di.forEach(t),jr=g(hn,`
environment variable.`),hn.forEach(t),Po.forEach(t),Dr=d(It),$t=n(It,"DIV",{class:!0});var dn=s($t);j(fo.$$.fragment,dn),Fr=d(dn),$a=n(dn,"P",{});var Fi=s($a);qr=g(Fi,"Save token, creating folder as needed."),Fi.forEach(t),dn.forEach(t),It.forEach(t),Wa=d(o),Se=n(o,"H2",{class:!0});var fn=s(Se);yt=n(fn,"A",{id:!0,class:!0,href:!0});var qi=s(yt);ya=n(qi,"SPAN",{});var Ni=s(ya);j(uo.$$.fragment,Ni),Ni.forEach(t),qi.forEach(t),Nr=d(fn),ka=n(fn,"SPAN",{});var Ti=s(ka);Tr=g(Ti,"Filtering helpers"),Ti.forEach(t),fn.forEach(t),Ga=d(o),kt=n(o,"P",{});var un=s(kt);Ir=g(un,"Some helpers to filter repositories on the Hub are available in the "),wa=n(un,"CODE",{});var Ii=s(wa);Pr=g(Ii,"huggingface_hub"),Ii.forEach(t),Lr=g(un," package."),un.forEach(t),Ba=d(o),we=n(o,"DIV",{class:!0});var Lo=s(we);j(mo.$$.fragment,Lo),Or=d(Lo),Ea=n(Lo,"P",{});var Pi=s(Ea);Rr=g(Pi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Pi.forEach(t),Mr=d(Lo),j(wt.$$.fragment,Lo),Lo.forEach(t),Ka=d(o),Ee=n(o,"DIV",{class:!0});var Oo=s(Ee);j(_o.$$.fragment,Oo),Ur=d(Oo),Aa=n(Oo,"P",{});var Li=s(Aa);Sr=g(Li,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Li.forEach(t),Cr=d(Oo),j(Et.$$.fragment,Oo),Oo.forEach(t),Ja=d(o),Ae=n(o,"DIV",{class:!0});var Ro=s(Ae);j(bo.$$.fragment,Ro),zr=d(Ro),xa=n(Ro,"P",{});var Oi=s(xa);Vr=g(Oi,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Oi.forEach(t),Wr=d(Ro),j(At.$$.fragment,Ro),Ro.forEach(t),Qa=d(o),xe=n(o,"DIV",{class:!0});var Mo=s(xe);j(vo.$$.fragment,Mo),Gr=d(Mo),Ha=n(Mo,"P",{});var Ri=s(Ha);Br=g(Ri,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ri.forEach(t),Kr=d(Mo),j(xt.$$.fragment,Mo),Mo.forEach(t),this.h()},h(){w(i,"name","hf:doc:metadata"),w(i,"content",JSON.stringify(fl)),w(l,"id","huggingface_hub.HfApi"),w(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(l,"href","#huggingface_hub.HfApi"),w(f,"class","relative group"),w(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Xt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),w(Xt,"rel","nofollow"),w(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(_t,"id","huggingface_hub.HfFolder"),w(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(_t,"href","#huggingface_hub.HfFolder"),w(Ue,"class","relative group"),w(Fo,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder"),w(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(yt,"id","huggingface_hub.DatasetFilter"),w(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(yt,"href","#huggingface_hub.DatasetFilter"),w(Se,"class","relative group"),w(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),w(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,y){e(document.head,i),$(o,_,y),$(o,f,y),e(f,l),e(l,p),D(r,p,null),e(f,u),e(f,x),e(x,m),$(o,b,y),$(o,E,y),e(E,k),e(E,A),e(A,I),e(E,L),$(o,R,y),$(o,v,y),e(v,O),e(v,S),e(S,U),e(v,V),$(o,W,y),$(o,C,y),e(C,G),$(o,Z,y),D(J,o,y),$(o,ie,y),$(o,ee,y),e(ee,Q),e(ee,X),e(X,Y),e(ee,be),$(o,ve,y),D(B,o,y),$(o,oe,y),$(o,K,y),e(K,je),e(K,ae),e(ae,Re),e(K,De),$(o,$e,y),$(o,T,y),D(ne,T,null),e(T,Ho),e(T,ye),D(ke,ye,null),e(ye,jo),e(ye,Me),e(Me,Do),e(T,mn),e(T,ze),D(Pt,ze,null),e(ze,_n),e(ze,Uo),e(Uo,bn),e(T,vn),e(T,le),D(Lt,le,null),e(le,$n),e(le,So),e(So,yn),e(le,kn),e(le,Co),e(Co,wn),e(le,En),D(Ve,le,null),e(T,An),e(T,Fe),D(Ot,Fe,null),e(Fe,xn),e(Fe,zo),e(zo,Hn),e(Fe,jn),D(We,Fe,null),e(T,Dn),e(T,qe),D(Rt,qe,null),e(qe,Fn),e(qe,Vo),e(Vo,qn),e(qe,Nn),D(Ge,qe,null),e(T,Tn),e(T,Be),D(Mt,Be,null),e(Be,In),e(Be,Wo),e(Wo,Pn),e(T,Ln),e(T,Ke),D(Ut,Ke,null),e(Ke,On),e(Ke,Go),e(Go,Rn),e(T,Mn),e(T,Je),D(St,Je,null),e(Je,Un),e(Je,Bo),e(Bo,Sn),e(T,Cn),e(T,ce),D(Ct,ce,null),e(ce,zn),e(ce,Ko),e(Ko,Vn),e(ce,Wn),D(Qe,ce,null),e(ce,Gn),D(Xe,ce,null),e(T,Bn),e(T,Ye),D(zt,Ye,null),e(Ye,Kn),e(Ye,Jo),e(Jo,Jn),e(T,Qn),e(T,ge),D(Vt,ge,null),e(ge,Xn),e(ge,Qo),e(Qo,Yn),e(ge,Zn),D(Ze,ge,null),e(ge,es),D(et,ge,null),e(T,ts),e(T,tt),D(Wt,tt,null),e(tt,os),e(tt,Xo),e(Xo,as),e(T,ns),e(T,pe),D(Gt,pe,null),e(pe,ss),e(pe,Yo),e(Yo,rs),e(pe,is),D(ot,pe,null),e(pe,ls),D(at,pe,null),e(T,cs),e(T,Ne),D(Bt,Ne,null),e(Ne,gs),e(Ne,Zo),e(Zo,ps),e(Ne,hs),D(nt,Ne,null),e(T,ds),e(T,he),D(Kt,he,null),e(he,fs),e(he,ea),e(ea,us),e(he,ms),e(he,ta),e(ta,_s),e(he,bs),D(st,he,null),e(T,vs),e(T,de),D(Jt,de,null),e(de,$s),e(de,oa),e(oa,ys),e(de,ks),e(de,Qt),e(Qt,ws),e(Qt,Xt),e(Xt,Es),e(Qt,As),e(de,xs),D(rt,de,null),e(T,Hs),e(T,Te),D(Yt,Te,null),e(Te,js),e(Te,aa),e(aa,Ds),e(Te,Fs),D(it,Te,null),e(T,qs),e(T,lt),D(Zt,lt,null),e(lt,Ns),e(lt,na),e(na,Ts),e(T,Is),e(T,fe),D(eo,fe,null),e(fe,Ps),e(fe,sa),e(sa,Ls),e(fe,Os),e(fe,ra),e(ra,Rs),e(fe,Ms),D(ct,fe,null),e(T,Us),e(T,gt),D(to,gt,null),e(gt,Ss),e(gt,ia),e(ia,Cs),e(T,zs),e(T,Ie),D(oo,Ie,null),e(Ie,Vs),e(Ie,la),e(la,Ws),e(Ie,Gs),D(pt,Ie,null),e(T,Bs),e(T,ue),D(ao,ue,null),e(ue,Ks),e(ue,ca),e(ca,Js),e(ue,Qs),D(ht,ue,null),e(ue,Xs),D(dt,ue,null),e(T,Ys),e(T,te),D(no,te,null),e(te,Zs),e(te,ga),e(ga,er),e(te,tr),e(te,pa),e(pa,or),e(te,ar),e(te,so),e(so,nr),e(so,ha),e(ha,sr),e(so,rr),e(te,ir),D(ft,te,null),e(te,lr),D(ut,te,null),e(T,cr),e(T,mt),D(ro,mt,null),e(mt,gr),e(mt,da),e(da,pr),$(o,Sa,y),$(o,Ue,y),e(Ue,_t),e(_t,fa),D(io,fa,null),e(Ue,hr),e(Ue,ua),e(ua,dr),$(o,Ca,y),$(o,lo,y),e(lo,ma),e(ma,fr),e(lo,ur),$(o,za,y),$(o,bt,y),e(bt,mr),e(bt,Fo),e(Fo,_r),e(bt,br),$(o,Va,y),$(o,se,y),D(co,se,null),e(se,vr),e(se,vt),D(go,vt,null),e(vt,$r),e(vt,_a),e(_a,yr),e(se,kr),e(se,Pe),D(po,Pe,null),e(Pe,wr),e(Pe,ba),e(ba,Er),e(Pe,Ar),e(Pe,ho),e(ho,xr),e(ho,va),e(va,Hr),e(ho,jr),e(se,Dr),e(se,$t),D(fo,$t,null),e($t,Fr),e($t,$a),e($a,qr),$(o,Wa,y),$(o,Se,y),e(Se,yt),e(yt,ya),D(uo,ya,null),e(Se,Nr),e(Se,ka),e(ka,Tr),$(o,Ga,y),$(o,kt,y),e(kt,Ir),e(kt,wa),e(wa,Pr),e(kt,Lr),$(o,Ba,y),$(o,we,y),D(mo,we,null),e(we,Or),e(we,Ea),e(Ea,Rr),e(we,Mr),D(wt,we,null),$(o,Ka,y),$(o,Ee,y),D(_o,Ee,null),e(Ee,Ur),e(Ee,Aa),e(Aa,Sr),e(Ee,Cr),D(Et,Ee,null),$(o,Ja,y),$(o,Ae,y),D(bo,Ae,null),e(Ae,zr),e(Ae,xa),e(xa,Vr),e(Ae,Wr),D(At,Ae,null),$(o,Qa,y),$(o,xe,y),D(vo,xe,null),e(xe,Gr),e(xe,Ha),e(Ha,Br),e(xe,Kr),D(xt,xe,null),Xa=!0},p(o,[y]){const $o={};y&2&&($o.$$scope={dirty:y,ctx:o}),Ve.$set($o);const ja={};y&2&&(ja.$$scope={dirty:y,ctx:o}),We.$set(ja);const Da={};y&2&&(Da.$$scope={dirty:y,ctx:o}),Ge.$set(Da);const Fa={};y&2&&(Fa.$$scope={dirty:y,ctx:o}),Qe.$set(Fa);const yo={};y&2&&(yo.$$scope={dirty:y,ctx:o}),Xe.$set(yo);const qa={};y&2&&(qa.$$scope={dirty:y,ctx:o}),Ze.$set(qa);const ko={};y&2&&(ko.$$scope={dirty:y,ctx:o}),et.$set(ko);const Na={};y&2&&(Na.$$scope={dirty:y,ctx:o}),ot.$set(Na);const Ta={};y&2&&(Ta.$$scope={dirty:y,ctx:o}),at.$set(Ta);const wo={};y&2&&(wo.$$scope={dirty:y,ctx:o}),nt.$set(wo);const Ia={};y&2&&(Ia.$$scope={dirty:y,ctx:o}),st.$set(Ia);const Eo={};y&2&&(Eo.$$scope={dirty:y,ctx:o}),rt.$set(Eo);const Pa={};y&2&&(Pa.$$scope={dirty:y,ctx:o}),it.$set(Pa);const P={};y&2&&(P.$$scope={dirty:y,ctx:o}),ct.$set(P);const Ao={};y&2&&(Ao.$$scope={dirty:y,ctx:o}),pt.$set(Ao);const La={};y&2&&(La.$$scope={dirty:y,ctx:o}),ht.$set(La);const xo={};y&2&&(xo.$$scope={dirty:y,ctx:o}),dt.$set(xo);const Oa={};y&2&&(Oa.$$scope={dirty:y,ctx:o}),ft.$set(Oa);const He={};y&2&&(He.$$scope={dirty:y,ctx:o}),ut.$set(He);const Ra={};y&2&&(Ra.$$scope={dirty:y,ctx:o}),wt.$set(Ra);const Ma={};y&2&&(Ma.$$scope={dirty:y,ctx:o}),Et.$set(Ma);const Ce={};y&2&&(Ce.$$scope={dirty:y,ctx:o}),At.$set(Ce);const Ua={};y&2&&(Ua.$$scope={dirty:y,ctx:o}),xt.$set(Ua)},i(o){Xa||(F(r.$$.fragment,o),F(J.$$.fragment,o),F(B.$$.fragment,o),F(ne.$$.fragment,o),F(ke.$$.fragment,o),F(Pt.$$.fragment,o),F(Lt.$$.fragment,o),F(Ve.$$.fragment,o),F(Ot.$$.fragment,o),F(We.$$.fragment,o),F(Rt.$$.fragment,o),F(Ge.$$.fragment,o),F(Mt.$$.fragment,o),F(Ut.$$.fragment,o),F(St.$$.fragment,o),F(Ct.$$.fragment,o),F(Qe.$$.fragment,o),F(Xe.$$.fragment,o),F(zt.$$.fragment,o),F(Vt.$$.fragment,o),F(Ze.$$.fragment,o),F(et.$$.fragment,o),F(Wt.$$.fragment,o),F(Gt.$$.fragment,o),F(ot.$$.fragment,o),F(at.$$.fragment,o),F(Bt.$$.fragment,o),F(nt.$$.fragment,o),F(Kt.$$.fragment,o),F(st.$$.fragment,o),F(Jt.$$.fragment,o),F(rt.$$.fragment,o),F(Yt.$$.fragment,o),F(it.$$.fragment,o),F(Zt.$$.fragment,o),F(eo.$$.fragment,o),F(ct.$$.fragment,o),F(to.$$.fragment,o),F(oo.$$.fragment,o),F(pt.$$.fragment,o),F(ao.$$.fragment,o),F(ht.$$.fragment,o),F(dt.$$.fragment,o),F(no.$$.fragment,o),F(ft.$$.fragment,o),F(ut.$$.fragment,o),F(ro.$$.fragment,o),F(io.$$.fragment,o),F(co.$$.fragment,o),F(go.$$.fragment,o),F(po.$$.fragment,o),F(fo.$$.fragment,o),F(uo.$$.fragment,o),F(mo.$$.fragment,o),F(wt.$$.fragment,o),F(_o.$$.fragment,o),F(Et.$$.fragment,o),F(bo.$$.fragment,o),F(At.$$.fragment,o),F(vo.$$.fragment,o),F(xt.$$.fragment,o),Xa=!0)},o(o){q(r.$$.fragment,o),q(J.$$.fragment,o),q(B.$$.fragment,o),q(ne.$$.fragment,o),q(ke.$$.fragment,o),q(Pt.$$.fragment,o),q(Lt.$$.fragment,o),q(Ve.$$.fragment,o),q(Ot.$$.fragment,o),q(We.$$.fragment,o),q(Rt.$$.fragment,o),q(Ge.$$.fragment,o),q(Mt.$$.fragment,o),q(Ut.$$.fragment,o),q(St.$$.fragment,o),q(Ct.$$.fragment,o),q(Qe.$$.fragment,o),q(Xe.$$.fragment,o),q(zt.$$.fragment,o),q(Vt.$$.fragment,o),q(Ze.$$.fragment,o),q(et.$$.fragment,o),q(Wt.$$.fragment,o),q(Gt.$$.fragment,o),q(ot.$$.fragment,o),q(at.$$.fragment,o),q(Bt.$$.fragment,o),q(nt.$$.fragment,o),q(Kt.$$.fragment,o),q(st.$$.fragment,o),q(Jt.$$.fragment,o),q(rt.$$.fragment,o),q(Yt.$$.fragment,o),q(it.$$.fragment,o),q(Zt.$$.fragment,o),q(eo.$$.fragment,o),q(ct.$$.fragment,o),q(to.$$.fragment,o),q(oo.$$.fragment,o),q(pt.$$.fragment,o),q(ao.$$.fragment,o),q(ht.$$.fragment,o),q(dt.$$.fragment,o),q(no.$$.fragment,o),q(ft.$$.fragment,o),q(ut.$$.fragment,o),q(ro.$$.fragment,o),q(io.$$.fragment,o),q(co.$$.fragment,o),q(go.$$.fragment,o),q(po.$$.fragment,o),q(fo.$$.fragment,o),q(uo.$$.fragment,o),q(mo.$$.fragment,o),q(wt.$$.fragment,o),q(_o.$$.fragment,o),q(Et.$$.fragment,o),q(bo.$$.fragment,o),q(At.$$.fragment,o),q(vo.$$.fragment,o),q(xt.$$.fragment,o),Xa=!1},d(o){t(i),o&&t(_),o&&t(f),N(r),o&&t(b),o&&t(E),o&&t(R),o&&t(v),o&&t(W),o&&t(C),o&&t(Z),N(J,o),o&&t(ie),o&&t(ee),o&&t(ve),N(B,o),o&&t(oe),o&&t(K),o&&t($e),o&&t(T),N(ne),N(ke),N(Pt),N(Lt),N(Ve),N(Ot),N(We),N(Rt),N(Ge),N(Mt),N(Ut),N(St),N(Ct),N(Qe),N(Xe),N(zt),N(Vt),N(Ze),N(et),N(Wt),N(Gt),N(ot),N(at),N(Bt),N(nt),N(Kt),N(st),N(Jt),N(rt),N(Yt),N(it),N(Zt),N(eo),N(ct),N(to),N(oo),N(pt),N(ao),N(ht),N(dt),N(no),N(ft),N(ut),N(ro),o&&t(Sa),o&&t(Ue),N(io),o&&t(Ca),o&&t(lo),o&&t(za),o&&t(bt),o&&t(Va),o&&t(se),N(co),N(go),N(po),N(fo),o&&t(Wa),o&&t(Se),N(uo),o&&t(Ga),o&&t(kt),o&&t(Ba),o&&t(we),N(mo),N(wt),o&&t(Ka),o&&t(Ee),N(_o),N(Et),o&&t(Ja),o&&t(Ae),N(bo),N(At),o&&t(Qa),o&&t(xe),N(vo),N(xt)}}}const fl={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function ul(M){return zi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class kl extends Mi{constructor(i){super();Ui(this,i,ul,dl,Si,{})}}export{kl as default,fl as metadata};
