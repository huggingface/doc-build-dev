import{S as rp,i as ip,s as lp,e as a,k as g,w,t as r,M as cp,c as n,d as t,m as h,a as s,x as A,h as i,b as y,G as e,g as _,y as j,q as x,o as H,B as q,v as pp,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ve}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _s}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gp(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),E=g(),D=a("li"),O=a("a"),L=r("RevisionNotFoundError"),P=r(`
If the revision to download from cannot be found.`),this.h()},l(v){p=n(v,"P",{});var T=s(p);$=i(T,"Raises the following errors:"),T.forEach(t),f=h(v),c=n(v,"UL",{});var M=s(c);d=n(M,"LI",{});var U=s(d);l=n(U,"A",{href:!0});var z=s(l);u=i(z,"RepositoryNotFoundError"),z.forEach(t),N=i(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);k=i(G,"private"),G.forEach(t),F=i(U," and you do not have access."),U.forEach(t),E=h(M),D=n(M,"LI",{});var V=s(D);O=n(V,"A",{href:!0});var W=s(O);L=i(W,"RevisionNotFoundError"),W.forEach(t),P=i(V,`
If the revision to download from cannot be found.`),V.forEach(t),M.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(O,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,T){_(v,p,T),e(p,$),_(v,f,T),_(v,c,T),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F),e(c,E),e(c,D),e(D,O),e(O,L),e(D,P)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function hp(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P,v,T,M,U,z,G,V,W,Z,J,ce,ee,Q,X,Y,ve,$e;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),N=r("HTTPError"),m=r(`
if the HuggingFace API returned an error`),k=g(),F=a("li"),E=a("a"),D=a("code"),O=r("ValueError"),L=r(`
if some parameter value is invalid`),P=g(),v=a("li"),T=a("a"),M=r("RepositoryNotFoundError"),U=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),z=a("code"),G=r("private"),V=r(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),ce=r("RevisionNotFoundError"),ee=r(`
If the revision to download from cannot be found.`),Q=g(),X=a("li"),Y=a("a"),ve=r("EntryNotFoundError"),$e=r(`
If the file to download cannot be found.`),this.h()},l(B){p=n(B,"P",{});var oe=s(p);$=i(oe,"Raises the following errors:"),oe.forEach(t),f=h(B),c=n(B,"UL",{});var K=s(c);d=n(K,"LI",{});var Fe=s(d);l=n(Fe,"A",{href:!0,rel:!0});var ne=s(l);u=n(ne,"CODE",{});var ze=s(u);N=i(ze,"HTTPError"),ze.forEach(t),ne.forEach(t),m=i(Fe,`
if the HuggingFace API returned an error`),Fe.forEach(t),k=h(K),F=n(K,"LI",{});var Ne=s(F);E=n(Ne,"A",{href:!0,rel:!0});var ye=s(E);D=n(ye,"CODE",{});var I=s(D);O=i(I,"ValueError"),I.forEach(t),ye.forEach(t),L=i(Ne,`
if some parameter value is invalid`),Ne.forEach(t),P=h(K),v=n(K,"LI",{});var re=s(v);T=n(re,"A",{href:!0});var Bo=s(T);M=i(Bo,"RepositoryNotFoundError"),Bo.forEach(t),U=i(re,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),z=n(re,"CODE",{});var ke=s(z);G=i(ke,"private"),ke.forEach(t),V=i(re," and you do not have access."),re.forEach(t),W=h(K),Z=n(K,"LI",{});var Ee=s(Z);J=n(Ee,"A",{href:!0});var Ko=s(J);ce=i(Ko,"RevisionNotFoundError"),Ko.forEach(t),ee=i(Ee,`
If the revision to download from cannot be found.`),Ee.forEach(t),Q=h(K),X=n(K,"LI",{});var Ge=s(X);Y=n(Ge,"A",{href:!0});var Jo=s(Y);ve=i(Jo,"EntryNotFoundError"),Jo.forEach(t),$e=i(Ge,`
If the file to download cannot be found.`),Ge.forEach(t),K.forEach(t),this.h()},h(){y(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(l,"rel","nofollow"),y(E,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(E,"rel","nofollow"),y(T,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),y(Y,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){_(B,p,oe),e(p,$),_(B,f,oe),_(B,c,oe),e(c,d),e(d,l),e(l,u),e(u,N),e(d,m),e(c,k),e(c,F),e(F,E),e(E,D),e(D,O),e(F,L),e(c,P),e(c,v),e(v,T),e(T,M),e(v,U),e(v,z),e(z,G),e(v,V),e(c,W),e(c,Z),e(Z,J),e(J,ce),e(Z,ee),e(c,Q),e(c,X),e(X,Y),e(Y,ve),e(X,$e)},d(B){B&&t(p),B&&t(f),B&&t(c)}}}function dp(R){let p,$,f,c,d,l,u,N,m,k,F;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var D=s(p);$=i(D,"Raises the following errors:"),D.forEach(t),f=h(E),c=n(E,"UL",{});var O=s(c);d=n(O,"LI",{});var L=s(d);l=n(L,"A",{href:!0});var P=s(l);u=i(P,"RepositoryNotFoundError"),P.forEach(t),N=i(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);k=i(v,"private"),v.forEach(t),F=i(L," and you do not have access."),L.forEach(t),O.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,D){_(E,p,D),e(p,$),_(E,f,D),_(E,c,D),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function fp(R){let p,$,f,c,d,l,u,N;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){p=a("p"),$=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),w(u.$$.fragment)},l(m){p=n(m,"P",{});var k=s(p);$=i(k,"Example usage with the "),f=n(k,"CODE",{});var F=s(f);c=i(F,"filter"),F.forEach(t),d=i(k," argument:"),k.forEach(t),l=h(m),A(u.$$.fragment,m)},m(m,k){_(m,p,k),e(p,$),e(p,f),e(f,c),e(p,d),_(m,l,k),j(u,m,k),N=!0},p:De,i(m){N||(x(u.$$.fragment,m),N=!0)},o(m){H(u.$$.fragment,m),N=!1},d(m){m&&t(p),m&&t(l),q(u,m)}}}function up(R){let p,$,f,c,d,l,u,N;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),$=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),w(u.$$.fragment)},l(m){p=n(m,"P",{});var k=s(p);$=i(k,"Example usage with the "),f=n(k,"CODE",{});var F=s(f);c=i(F,"search"),F.forEach(t),d=i(k," argument:"),k.forEach(t),l=h(m),A(u.$$.fragment,m)},m(m,k){_(m,p,k),e(p,$),e(p,f),e(f,c),e(p,d),_(m,l,k),j(u,m,k),N=!0},p:De,i(m){N||(x(u.$$.fragment,m),N=!0)},o(m){H(u.$$.fragment,m),N=!1},d(m){m&&t(p),m&&t(l),q(u,m)}}}function mp(R){let p,$,f,c,d,l,u,N;return u=new le({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){p=a("p"),$=r("Example usage with the "),f=a("code"),c=r("filter"),d=r(" argument:"),l=g(),w(u.$$.fragment)},l(m){p=n(m,"P",{});var k=s(p);$=i(k,"Example usage with the "),f=n(k,"CODE",{});var F=s(f);c=i(F,"filter"),F.forEach(t),d=i(k," argument:"),k.forEach(t),l=h(m),A(u.$$.fragment,m)},m(m,k){_(m,p,k),e(p,$),e(p,f),e(f,c),e(p,d),_(m,l,k),j(u,m,k),N=!0},p:De,i(m){N||(x(u.$$.fragment,m),N=!0)},o(m){H(u.$$.fragment,m),N=!1},d(m){m&&t(p),m&&t(l),q(u,m)}}}function _p(R){let p,$,f,c,d,l,u,N;return u=new le({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){p=a("p"),$=r("Example usage with the "),f=a("code"),c=r("search"),d=r(" argument:"),l=g(),w(u.$$.fragment)},l(m){p=n(m,"P",{});var k=s(p);$=i(k,"Example usage with the "),f=n(k,"CODE",{});var F=s(f);c=i(F,"search"),F.forEach(t),d=i(k," argument:"),k.forEach(t),l=h(m),A(u.$$.fragment,m)},m(m,k){_(m,p,k),e(p,$),e(p,f),e(f,c),e(p,d),_(m,l,k),j(u,m,k),N=!0},p:De,i(m){N||(x(u.$$.fragment,m),N=!0)},o(m){H(u.$$.fragment,m),N=!1},d(m){m&&t(p),m&&t(l),q(u,m)}}}function bp(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),E=g(),D=a("li"),O=a("a"),L=r("RevisionNotFoundError"),P=r(`
If the revision to download from cannot be found.`),this.h()},l(v){p=n(v,"P",{});var T=s(p);$=i(T,"Raises the following errors:"),T.forEach(t),f=h(v),c=n(v,"UL",{});var M=s(c);d=n(M,"LI",{});var U=s(d);l=n(U,"A",{href:!0});var z=s(l);u=i(z,"RepositoryNotFoundError"),z.forEach(t),N=i(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);k=i(G,"private"),G.forEach(t),F=i(U," and you do not have access."),U.forEach(t),E=h(M),D=n(M,"LI",{});var V=s(D);O=n(V,"A",{href:!0});var W=s(O);L=i(W,"RevisionNotFoundError"),W.forEach(t),P=i(V,`
If the revision to download from cannot be found.`),V.forEach(t),M.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(O,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,T){_(v,p,T),e(p,$),_(v,f,T),_(v,c,T),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F),e(c,E),e(c,D),e(D,O),e(O,L),e(D,P)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function vp(R){let p,$,f,c,d,l,u,N,m,k,F;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var D=s(p);$=i(D,"Raises the following errors:"),D.forEach(t),f=h(E),c=n(E,"UL",{});var O=s(c);d=n(O,"LI",{});var L=s(d);l=n(L,"A",{href:!0});var P=s(l);u=i(P,"RepositoryNotFoundError"),P.forEach(t),N=i(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);k=i(v,"private"),v.forEach(t),F=i(L," and you do not have access."),L.forEach(t),O.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,D){_(E,p,D),e(p,$),_(E,f,D),_(E,c,D),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function $p(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),E=g(),D=a("li"),O=a("a"),L=r("RevisionNotFoundError"),P=r(`
If the revision to download from cannot be found.`),this.h()},l(v){p=n(v,"P",{});var T=s(p);$=i(T,"Raises the following errors:"),T.forEach(t),f=h(v),c=n(v,"UL",{});var M=s(c);d=n(M,"LI",{});var U=s(d);l=n(U,"A",{href:!0});var z=s(l);u=i(z,"RepositoryNotFoundError"),z.forEach(t),N=i(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);k=i(G,"private"),G.forEach(t),F=i(U," and you do not have access."),U.forEach(t),E=h(M),D=n(M,"LI",{});var V=s(D);O=n(V,"A",{href:!0});var W=s(O);L=i(W,"RevisionNotFoundError"),W.forEach(t),P=i(V,`
If the revision to download from cannot be found.`),V.forEach(t),M.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(O,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,T){_(v,p,T),e(p,$),_(v,f,T),_(v,c,T),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F),e(c,E),e(c,D),e(D,O),e(O,L),e(D,P)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function yp(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),E=g(),D=a("li"),O=a("a"),L=r("RevisionNotFoundError"),P=r(`
If the revision to download from cannot be found.`),this.h()},l(v){p=n(v,"P",{});var T=s(p);$=i(T,"Raises the following errors:"),T.forEach(t),f=h(v),c=n(v,"UL",{});var M=s(c);d=n(M,"LI",{});var U=s(d);l=n(U,"A",{href:!0});var z=s(l);u=i(z,"RepositoryNotFoundError"),z.forEach(t),N=i(U,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(U,"CODE",{});var G=s(m);k=i(G,"private"),G.forEach(t),F=i(U," and you do not have access."),U.forEach(t),E=h(M),D=n(M,"LI",{});var V=s(D);O=n(V,"A",{href:!0});var W=s(O);L=i(W,"RevisionNotFoundError"),W.forEach(t),P=i(V,`
If the revision to download from cannot be found.`),V.forEach(t),M.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(O,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(v,T){_(v,p,T),e(p,$),_(v,f,T),_(v,c,T),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F),e(c,E),e(c,D),e(D,O),e(O,L),e(D,P)},d(v){v&&t(p),v&&t(f),v&&t(c)}}}function kp(R){let p,$,f,c,d,l,u,N,m,k,F;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=r("RepositoryNotFoundError"),N=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=a("code"),k=r("private"),F=r(" and you do not have access."),this.h()},l(E){p=n(E,"P",{});var D=s(p);$=i(D,"Raises the following errors:"),D.forEach(t),f=h(E),c=n(E,"UL",{});var O=s(c);d=n(O,"LI",{});var L=s(d);l=n(L,"A",{href:!0});var P=s(l);u=i(P,"RepositoryNotFoundError"),P.forEach(t),N=i(L,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),m=n(L,"CODE",{});var v=s(m);k=i(v,"private"),v.forEach(t),F=i(L," and you do not have access."),L.forEach(t),O.forEach(t),this.h()},h(){y(l,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(E,D){_(E,p,D),e(p,$),_(E,f,D),_(E,c,D),e(c,d),e(d,l),e(l,u),e(d,N),e(d,m),e(m,k),e(d,F)},d(E){E&&t(p),E&&t(f),E&&t(c)}}}function Ep(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P,v,T,M,U,z,G,V,W,Z,J,ce,ee;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),N=r("HTTPError"),m=r(`
if the HuggingFace API returned an error`),k=g(),F=a("li"),E=a("a"),D=a("code"),O=r("ValueError"),L=r(`
if some parameter value is invalid`),P=g(),v=a("li"),T=a("a"),M=r("RepositoryNotFoundError"),U=r(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),z=a("code"),G=r("private"),V=r(" and you do not have access."),W=g(),Z=a("li"),J=a("a"),ce=r("RevisionNotFoundError"),ee=r(`
If the revision to download from cannot be found.`),this.h()},l(Q){p=n(Q,"P",{});var X=s(p);$=i(X,"Raises the following errors:"),X.forEach(t),f=h(Q),c=n(Q,"UL",{});var Y=s(c);d=n(Y,"LI",{});var ve=s(d);l=n(ve,"A",{href:!0,rel:!0});var $e=s(l);u=n($e,"CODE",{});var B=s(u);N=i(B,"HTTPError"),B.forEach(t),$e.forEach(t),m=i(ve,`
if the HuggingFace API returned an error`),ve.forEach(t),k=h(Y),F=n(Y,"LI",{});var oe=s(F);E=n(oe,"A",{href:!0,rel:!0});var K=s(E);D=n(K,"CODE",{});var Fe=s(D);O=i(Fe,"ValueError"),Fe.forEach(t),K.forEach(t),L=i(oe,`
if some parameter value is invalid`),oe.forEach(t),P=h(Y),v=n(Y,"LI",{});var ne=s(v);T=n(ne,"A",{href:!0});var ze=s(T);M=i(ze,"RepositoryNotFoundError"),ze.forEach(t),U=i(ne,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),z=n(ne,"CODE",{});var Ne=s(z);G=i(Ne,"private"),Ne.forEach(t),V=i(ne," and you do not have access."),ne.forEach(t),W=h(Y),Z=n(Y,"LI",{});var ye=s(Z);J=n(ye,"A",{href:!0});var I=s(J);ce=i(I,"RevisionNotFoundError"),I.forEach(t),ee=i(ye,`
If the revision to download from cannot be found.`),ye.forEach(t),Y.forEach(t),this.h()},h(){y(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(l,"rel","nofollow"),y(E,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(E,"rel","nofollow"),y(T,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_916/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){_(Q,p,X),e(p,$),_(Q,f,X),_(Q,c,X),e(c,d),e(d,l),e(l,u),e(u,N),e(d,m),e(c,k),e(c,F),e(F,E),e(E,D),e(D,O),e(F,L),e(c,P),e(c,v),e(v,T),e(T,M),e(v,U),e(v,z),e(z,G),e(v,V),e(c,W),e(c,Z),e(Z,J),e(J,ce),e(Z,ee)},d(Q){Q&&t(p),Q&&t(f),Q&&t(c)}}}function wp(R){let p,$,f,c,d;return c=new le({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){p=a("p"),$=r("Example usage:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Example usage:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function Ap(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L;return{c(){p=a("p"),$=r("Raises the following errors:"),f=g(),c=a("ul"),d=a("li"),l=a("a"),u=a("code"),N=r("HTTPError"),m=r(`
if the HuggingFace API returned an error`),k=g(),F=a("li"),E=a("a"),D=a("code"),O=r("ValueError"),L=r(`
if some parameter value is invalid`),this.h()},l(P){p=n(P,"P",{});var v=s(p);$=i(v,"Raises the following errors:"),v.forEach(t),f=h(P),c=n(P,"UL",{});var T=s(c);d=n(T,"LI",{});var M=s(d);l=n(M,"A",{href:!0,rel:!0});var U=s(l);u=n(U,"CODE",{});var z=s(u);N=i(z,"HTTPError"),z.forEach(t),U.forEach(t),m=i(M,`
if the HuggingFace API returned an error`),M.forEach(t),k=h(T),F=n(T,"LI",{});var G=s(F);E=n(G,"A",{href:!0,rel:!0});var V=s(E);D=n(V,"CODE",{});var W=s(D);O=i(W,"ValueError"),W.forEach(t),V.forEach(t),L=i(G,`
if some parameter value is invalid`),G.forEach(t),T.forEach(t),this.h()},h(){y(l,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(l,"rel","nofollow"),y(E,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(E,"rel","nofollow")},m(P,v){_(P,p,v),e(p,$),_(P,f,v),_(P,c,v),e(c,d),e(d,l),e(l,u),e(u,N),e(d,m),e(c,k),e(c,F),e(F,E),e(E,D),e(D,O),e(F,L)},d(P){P&&t(p),P&&t(f),P&&t(c)}}}function jp(R){let p,$,f,c,d;return c=new le({props:{code:`upload_file(
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
`}}),{c(){p=a("p"),$=r("Example usage:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Example usage:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function xp(R){let p,$,f,c,d;return c=new le({props:{code:`operation = CommitOperationAdd(
       path_in_repo="remote/dir/weights.h5",
       path_or_fileobj="./local/weights.h5",
)

with operation.as_file() as file:
    content = file.read()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>operation = CommitOperationAdd(
<span class="hljs-meta">... </span>       path_in_repo=<span class="hljs-string">&quot;remote/dir/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>       path_or_fileobj=<span class="hljs-string">&quot;./local/weights.h5&quot;</span>,
<span class="hljs-meta">... </span>)
CommitOperationAdd(path_in_repo=<span class="hljs-string">&#x27;remote/dir/weights.h5&#x27;</span>, path_or_fileobj=<span class="hljs-string">&#x27;./local/weights.h5&#x27;</span>, _upload_info=<span class="hljs-literal">None</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> operation.as_file() <span class="hljs-keyword">as</span> file:
<span class="hljs-meta">... </span>    content = file.read()`}}),{c(){p=a("p"),$=r("Example:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Example:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function Hp(R){let p,$,f,c,d;return c=new le({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){p=a("p"),$=r("Examples:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Examples:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function qp(R){let p,$;return p=new le({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){w(p.$$.fragment)},l(f){A(p.$$.fragment,f)},m(f,c){j(p,f,c),$=!0},p:De,i(f){$||(x(p.$$.fragment,f),$=!0)},o(f){H(p.$$.fragment,f),$=!1},d(f){q(p,f)}}}function Dp(R){let p,$,f,c,d;return c=new le({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),$=r("Example:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Example:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function Fp(R){let p,$,f,c,d;return c=new le({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){p=a("p"),$=r("Example:"),f=g(),w(c.$$.fragment)},l(l){p=n(l,"P",{});var u=s(p);$=i(u,"Example:"),u.forEach(t),f=h(l),A(c.$$.fragment,l)},m(l,u){_(l,p,u),e(p,$),_(l,f,u),j(c,l,u),d=!0},p:De,i(l){d||(x(c.$$.fragment,l),d=!0)},o(l){H(c.$$.fragment,l),d=!1},d(l){l&&t(p),l&&t(f),q(c,l)}}}function Np(R){let p,$,f,c,d,l,u,N,m,k,F,E,D,O,L,P,v,T,M,U,z,G,V,W,Z,J,ce,ee,Q,X,Y,ve,$e,B,oe,K,Fe,ne,ze,Ne,ye,I,re,Bo,ke,Ee,Ko,Ge,Jo,bs,Ye,zt,vs,ha,$s,ys,pe,Gt,ks,da,Es,ws,fa,As,js,Ze,xs,Ie,Wt,Hs,ua,qs,Ds,et,Fs,Oe,Bt,Ns,ma,Is,Os,tt,Ts,ot,Kt,Ls,_a,Ps,Cs,at,Jt,Rs,ba,Us,Ms,nt,Qt,Ss,va,Vs,zs,ge,Xt,Gs,$a,Ws,Bs,st,Ks,rt,Js,it,Yt,Qs,ya,Xs,Ys,he,Zt,Zs,ka,er,tr,lt,or,ct,ar,pt,eo,nr,Ea,sr,rr,de,to,ir,wa,lr,cr,Aa,pr,gr,gt,hr,fe,oo,dr,ja,fr,ur,ao,mr,no,_r,br,vr,ht,$r,Te,so,yr,xa,kr,Er,dt,wr,ft,ro,Ar,Ha,jr,xr,ue,io,Hr,qa,qr,Dr,Da,Fr,Nr,ut,Ir,mt,lo,Or,Fa,Tr,Lr,Le,co,Pr,Na,Cr,Rr,_t,Ur,me,po,Mr,Ia,Sr,Vr,bt,zr,vt,Gr,te,go,Wr,Oa,Br,Kr,Ta,Jr,Qr,ho,Xr,La,Yr,Zr,ei,$t,ti,yt,oi,kt,fo,ai,Pa,ni,Fn,We,Et,Ca,uo,si,Qo,Ra,ri,ii,Nn,wt,li,Ua,ci,pi,In,ae,mo,gi,Ma,hi,di,se,_o,fi,bo,ui,Sa,mi,_i,bi,vo,vi,Va,$i,yi,ki,$o,Ei,za,wi,Ai,ji,At,xi,Pe,yo,Hi,Xo,qi,Ga,Di,Fi,Yo,Ni,Wa,Ii,Oi,_e,ko,Ti,Eo,Li,Ba,Pi,Ci,Ri,Be,Ce,Ui,Ka,Mi,Si,Ja,Vi,zi,Qa,Gi,Wi,wo,Bi,Xa,Ki,Ji,Qi,Re,Xi,Ya,Yi,Zi,Za,el,tl,en,ol,al,Ke,nl,tn,sl,rl,on,il,ll,On,Je,Ao,cl,an,pl,Tn,Qe,jt,nn,jo,gl,sn,hl,Ln,xo,rn,dl,fl,Pn,xt,ul,Zo,ml,_l,Cn,ie,Ho,bl,Ht,qo,vl,ln,$l,yl,Ue,Do,kl,cn,El,wl,Fo,Al,pn,jl,xl,Hl,qt,No,ql,gn,Dl,Rn,Xe,Dt,hn,Io,Fl,dn,Nl,Un,Ft,Il,fn,Ol,Tl,Mn,we,Oo,Ll,un,Pl,Cl,Nt,Sn,Ae,To,Rl,mn,Ul,Ml,It,Vn,je,Lo,Sl,_n,Vl,zl,Ot,zn,xe,Po,Gl,bn,Wl,Bl,Tt,Gn;return l=new _s({}),J=new le({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new le({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),re=new S({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L561"}}),Ee=new S({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository in which the commit will be created, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<code>Iterable</code> of <code>CommitOperation()</code>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.CommitOperationAdd">CommitOperationAdd</a> to upload a file</li>
<li><a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.CommitOperationDelete">CommitOperationDelete</a> to delete a file</li>
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1726",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),zt=new S({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1343",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Gt=new S({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1140",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),Ze=new Ve({props:{$$slots:{default:[gp]},$$scope:{ctx:R}}}),Wt=new S({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2136"}}),et=new Ve({props:{$$slots:{default:[hp]},$$scope:{ctx:R}}}),Bt=new S({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1473"}}),tt=new Ve({props:{$$slots:{default:[dp]},$$scope:{ctx:R}}}),Kt=new S({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L682"}}),Jt=new S({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2214",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Qt=new S({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L674"}}),Xt=new S({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L900"}}),st=new qe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[fp]},$$scope:{ctx:R}}}),rt=new qe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[up]},$$scope:{ctx:R}}}),Yt=new S({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1065",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Zt=new S({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L692"}}),lt=new qe({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[mp]},$$scope:{ctx:R}}}),ct=new qe({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[_p]},$$scope:{ctx:R}}}),eo=new S({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1303",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),to=new S({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1079",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),gt=new Ve({props:{$$slots:{default:[bp]},$$scope:{ctx:R}}}),oo=new S({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1648"}}),ht=new Ve({props:{$$slots:{default:[vp]},$$scope:{ctx:R}}}),so=new S({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1248",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),dt=new Ve({props:{$$slots:{default:[$p]},$$scope:{ctx:R}}}),ro=new S({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L655"}}),io=new S({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1194",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),ut=new Ve({props:{$$slots:{default:[yp]},$$scope:{ctx:R}}}),lo=new S({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L667"}}),co=new S({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1573",returnDescription:`
<p>The HTTP response in json.</p>
`}}),_t=new Ve({props:{$$slots:{default:[kp]},$$scope:{ctx:R}}}),po=new S({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1847",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),bt=new Ve({props:{$$slots:{default:[Ep]},$$scope:{ctx:R}}}),vt=new qe({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[wp]},$$scope:{ctx:R}}}),go=new S({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L1992",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),$t=new Ve({props:{$$slots:{default:[Ap]},$$scope:{ctx:R}}}),yt=new qe({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[jp]},$$scope:{ctx:R}}}),fo=new S({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L565"}}),uo=new _s({}),mo=new S({props:{name:"class huggingface_hub.CommitOperationAdd",anchor:"huggingface_hub.CommitOperationAdd",parameters:[{name:"path_in_repo",val:": str"},{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationAdd.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.CommitOperationAdd.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>BinaryIO</code>) &#x2014;
Either:<ul>
<li>a path to a local file (as str) to upload</li>
<li>a buffer of bytes (<code>bytes</code>) holding the content of the file to upload</li>
<li>a &#x201C;file object&#x201D; (subclass of <code>io.BufferedIOBase</code>), typically obtained
with <code>open(path, &quot;rb&quot;)</code>. It must support <code>seek()</code> and <code>tell()</code> methods.</li>
</ul>`,name:"path_or_fileobj"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/_commit_api.py#L50"}}),_o=new S({props:{name:"as_file",anchor:"huggingface_hub.CommitOperationAdd.as_file",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/_commit_api.py#L122"}}),At=new qe({props:{anchor:"huggingface_hub.CommitOperationAdd.as_file.example",$$slots:{default:[xp]},$$scope:{ctx:R}}}),yo=new S({props:{name:"b64content",anchor:"huggingface_hub.CommitOperationAdd.b64content",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/_commit_api.py#L157"}}),ko=new S({props:{name:"validate",anchor:"huggingface_hub.CommitOperationAdd.validate",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/_commit_api.py#L72"}}),Ao=new S({props:{name:"class huggingface_hub.CommitOperationDelete",anchor:"huggingface_hub.CommitOperationDelete",parameters:[{name:"path_in_repo",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.CommitOperationDelete.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/_commit_api.py#L35"}}),jo=new _s({}),Ho=new S({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2249"}}),qo=new S({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2286"}}),Do=new S({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2265",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),No=new S({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L2252"}}),Io=new _s({}),Oo=new S({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),Nt=new qe({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Hp]},$$scope:{ctx:R}}}),To=new S({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),It=new qe({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[qp]},$$scope:{ctx:R}}}),Lo=new S({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L449"}}),Ot=new qe({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Dp]},$$scope:{ctx:R}}}),Po=new S({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_916/src/huggingface_hub/hf_api.py#L411"}}),Tt=new qe({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Fp]},$$scope:{ctx:R}}}),{c(){p=a("meta"),$=g(),f=a("h1"),c=a("a"),d=a("span"),w(l.$$.fragment),u=g(),N=a("span"),m=r("Hugging Face Hub API"),k=g(),F=a("p"),E=r("Below is the documentation for the "),D=a("code"),O=r("HfApi"),L=r(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),P=g(),v=a("p"),T=r("All methods from the "),M=a("code"),U=r("HfApi"),z=r(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),G=g(),V=a("p"),W=r("The following approach uses the method from the root of the package:"),Z=g(),w(J.$$.fragment),ce=g(),ee=a("p"),Q=r("The following approach uses the "),X=a("code"),Y=r("HfApi"),ve=r(" class:"),$e=g(),w(B.$$.fragment),oe=g(),K=a("p"),Fe=r("Using the "),ne=a("code"),ze=r("HfApi"),Ne=r(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ye=g(),I=a("div"),w(re.$$.fragment),Bo=g(),ke=a("div"),w(Ee.$$.fragment),Ko=g(),Ge=a("p"),Jo=r("Creates a commit in the given repo, deleting & uploading files as needed."),bs=g(),Ye=a("div"),w(zt.$$.fragment),vs=g(),ha=a("p"),$s=r("Create an empty repo on the HuggingFace Hub."),ys=g(),pe=a("div"),w(Gt.$$.fragment),ks=g(),da=a("p"),Es=r("Get info on one specific dataset on huggingface.co."),ws=g(),fa=a("p"),As=r("Dataset can be private if you pass an acceptable token."),js=g(),w(Ze.$$.fragment),xs=g(),Ie=a("div"),w(Wt.$$.fragment),Hs=g(),ua=a("p"),qs=r("Deletes a file in the given repo."),Ds=g(),w(et.$$.fragment),Fs=g(),Oe=a("div"),w(Bt.$$.fragment),Ns=g(),ma=a("p"),Is=r("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Os=g(),w(tt.$$.fragment),Ts=g(),ot=a("div"),w(Kt.$$.fragment),Ls=g(),_a=a("p"),Ps=r("Gets all valid dataset tags as a nested namespace object."),Cs=g(),at=a("div"),w(Jt.$$.fragment),Rs=g(),ba=a("p"),Us=r(`Returns the repository name for a given model ID and optional
organization.`),Ms=g(),nt=a("div"),w(Qt.$$.fragment),Ss=g(),va=a("p"),Vs=r("Gets all valid model tags as a nested namespace object"),zs=g(),ge=a("div"),w(Xt.$$.fragment),Gs=g(),$a=a("p"),Ws=r("Get the public list of all the datasets on huggingface.co"),Bs=g(),w(st.$$.fragment),Ks=g(),w(rt.$$.fragment),Js=g(),it=a("div"),w(Yt.$$.fragment),Qs=g(),ya=a("p"),Xs=r("Get the public list of all the metrics on huggingface.co"),Ys=g(),he=a("div"),w(Zt.$$.fragment),Zs=g(),ka=a("p"),er=r("Get the public list of all the models on huggingface.co"),tr=g(),w(lt.$$.fragment),or=g(),w(ct.$$.fragment),ar=g(),pt=a("div"),w(eo.$$.fragment),nr=g(),Ea=a("p"),sr=r("Get the list of files in a given repo."),rr=g(),de=a("div"),w(to.$$.fragment),ir=g(),wa=a("p"),lr=r("Get info on one specific model on huggingface.co"),cr=g(),Aa=a("p"),pr=r("Model can be private if you pass an acceptable token or are logged in."),gr=g(),w(gt.$$.fragment),hr=g(),fe=a("div"),w(oo.$$.fragment),dr=g(),ja=a("p"),fr=r("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ur=g(),ao=a("p"),mr=r(`Note there are certain limitations. For more information about moving
repositories, please see
`),no=a("a"),_r=r("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),br=r("."),vr=g(),w(ht.$$.fragment),$r=g(),Te=a("div"),w(so.$$.fragment),yr=g(),xa=a("p"),kr=r("Get the info object for a given repo of a given type."),Er=g(),w(dt.$$.fragment),wr=g(),ft=a("div"),w(ro.$$.fragment),Ar=g(),Ha=a("p"),jr=r(`Saves the passed access token so git can correctly authenticate the
user.`),xr=g(),ue=a("div"),w(io.$$.fragment),Hr=g(),qa=a("p"),qr=r("Get info on one specific Space on huggingface.co."),Dr=g(),Da=a("p"),Fr=r("Space can be private if you pass an acceptable token."),Nr=g(),w(ut.$$.fragment),Ir=g(),mt=a("div"),w(lo.$$.fragment),Or=g(),Fa=a("p"),Tr=r("Resets the user\u2019s access token."),Lr=g(),Le=a("div"),w(co.$$.fragment),Pr=g(),Na=a("p"),Cr=r("Update the visibility setting of a repository."),Rr=g(),w(_t.$$.fragment),Ur=g(),me=a("div"),w(po.$$.fragment),Mr=g(),Ia=a("p"),Sr=r(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Vr=g(),w(bt.$$.fragment),zr=g(),w(vt.$$.fragment),Gr=g(),te=a("div"),w(go.$$.fragment),Wr=g(),Oa=a("p"),Br=r(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Kr=g(),Ta=a("p"),Jr=r(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Qr=g(),ho=a("p"),Xr=r("Uses "),La=a("code"),Yr=r("HfApi.create_commit"),Zr=r(" under the hood."),ei=g(),w($t.$$.fragment),ti=g(),w(yt.$$.fragment),oi=g(),kt=a("div"),w(fo.$$.fragment),ai=g(),Pa=a("p"),ni=r("Call HF API to know \u201Cwhoami\u201D."),Fn=g(),We=a("h2"),Et=a("a"),Ca=a("span"),w(uo.$$.fragment),si=g(),Qo=a("span"),Ra=a("code"),ri=r("create_commit"),ii=r(" API"),Nn=g(),wt=a("p"),li=r("Below are the supported values for "),Ua=a("code"),ci=r("CommitOperation()"),pi=r(":"),In=g(),ae=a("div"),w(mo.$$.fragment),gi=g(),Ma=a("p"),hi=r(`Data structure holding necessary info to upload a file
to a repository on the Hub`),di=g(),se=a("div"),w(_o.$$.fragment),fi=g(),bo=a("p"),ui=r(`A context manager that yields a file-like object allowing to read the underlying
data behind `),Sa=a("code"),mi=r("path_or_fileobj"),_i=r("."),bi=g(),vo=a("p"),vi=r("Triggers "),Va=a("code"),$i=r("self.validate"),yi=r("."),ki=g(),$o=a("p"),Ei=r("Raises: "),za=a("code"),wi=r("ValueError"),Ai=r(" if self.validate fails"),ji=g(),w(At.$$.fragment),xi=g(),Pe=a("div"),w(yo.$$.fragment),Hi=g(),Xo=a("p"),qi=r("The base64-encoded content of "),Ga=a("code"),Di=r("path_or_fileobj"),Fi=g(),Yo=a("p"),Ni=r("Returns: "),Wa=a("code"),Ii=r("bytes"),Oi=g(),_e=a("div"),w(ko.$$.fragment),Ti=g(),Eo=a("p"),Li=r("Ensures "),Ba=a("code"),Pi=r("path_or_fileobj"),Ci=r(" is valid:"),Ri=g(),Be=a("ul"),Ce=a("li"),Ui=r("Ensures it is either a "),Ka=a("code"),Mi=r("str"),Si=r(", "),Ja=a("code"),Vi=r("bytes"),zi=r(" or an instance of "),Qa=a("code"),Gi=r("io.BufferedIOBase"),Wi=g(),wo=a("li"),Bi=r("If it is a "),Xa=a("code"),Ki=r("str"),Ji=r(", ensure that it is a file path and that the file exists"),Qi=g(),Re=a("li"),Xi=r("If it is an instance of "),Ya=a("code"),Yi=r("io.BufferedIOBase"),Zi=r(", ensures it supports "),Za=a("code"),el=r("seek()"),tl=r(" and "),en=a("code"),ol=r("tell()"),al=g(),Ke=a("p"),nl=r("Raises: "),tn=a("code"),sl=r("ValueError"),rl=r(" if "),on=a("code"),il=r("path_or_fileobj"),ll=r(" is not valid"),On=g(),Je=a("div"),w(Ao.$$.fragment),cl=g(),an=a("p"),pl=r(`Data structure holding necessary info to delete
a file from a repository on the Hub`),Tn=g(),Qe=a("h2"),jt=a("a"),nn=a("span"),w(jo.$$.fragment),gl=g(),sn=a("span"),hl=r("Hugging Face local storage"),Ln=g(),xo=a("p"),rn=a("code"),dl=r("huggingface_hub"),fl=r(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Pn=g(),xt=a("p"),ul=r("It does this using the "),Zo=a("a"),ml=r("HfFolder"),_l=r(" utility, which saves data at the root of the user."),Cn=g(),ie=a("div"),w(Ho.$$.fragment),bl=g(),Ht=a("div"),w(qo.$$.fragment),vl=g(),ln=a("p"),$l=r("Deletes the token from storage. Does not fail if token does not exist."),yl=g(),Ue=a("div"),w(Do.$$.fragment),kl=g(),cn=a("p"),El=r("Get token or None if not existent."),wl=g(),Fo=a("p"),Al=r("Note that a token can be also provided using the "),pn=a("code"),jl=r("HUGGING_FACE_HUB_TOKEN"),xl=r(`
environment variable.`),Hl=g(),qt=a("div"),w(No.$$.fragment),ql=g(),gn=a("p"),Dl=r("Save token, creating folder as needed."),Rn=g(),Xe=a("h2"),Dt=a("a"),hn=a("span"),w(Io.$$.fragment),Fl=g(),dn=a("span"),Nl=r("Filtering helpers"),Un=g(),Ft=a("p"),Il=r("Some helpers to filter repositories on the Hub are available in the "),fn=a("code"),Ol=r("huggingface_hub"),Tl=r(" package."),Mn=g(),we=a("div"),w(Oo.$$.fragment),Ll=g(),un=a("p"),Pl=r(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Cl=g(),w(Nt.$$.fragment),Sn=g(),Ae=a("div"),w(To.$$.fragment),Rl=g(),mn=a("p"),Ul=r(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ml=g(),w(It.$$.fragment),Vn=g(),je=a("div"),w(Lo.$$.fragment),Sl=g(),_n=a("p"),Vl=r(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),zl=g(),w(Ot.$$.fragment),zn=g(),xe=a("div"),w(Po.$$.fragment),Gl=g(),bn=a("p"),Wl=r(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Bl=g(),w(Tt.$$.fragment),this.h()},l(o){const b=cp('[data-svelte="svelte-1phssyn"]',document.head);p=n(b,"META",{name:!0,content:!0}),b.forEach(t),$=h(o),f=n(o,"H1",{class:!0});var Co=s(f);c=n(Co,"A",{id:!0,class:!0,href:!0});var vn=s(c);d=n(vn,"SPAN",{});var $n=s(d);A(l.$$.fragment,$n),$n.forEach(t),vn.forEach(t),u=h(Co),N=n(Co,"SPAN",{});var yn=s(N);m=i(yn,"Hugging Face Hub API"),yn.forEach(t),Co.forEach(t),k=h(o),F=n(o,"P",{});var Ro=s(F);E=i(Ro,"Below is the documentation for the "),D=n(Ro,"CODE",{});var kn=s(D);O=i(kn,"HfApi"),kn.forEach(t),L=i(Ro,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Ro.forEach(t),P=h(o),v=n(o,"P",{});var Uo=s(v);T=i(Uo,"All methods from the "),M=n(Uo,"CODE",{});var En=s(M);U=i(En,"HfApi"),En.forEach(t),z=i(Uo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Uo.forEach(t),G=h(o),V=n(o,"P",{});var wn=s(V);W=i(wn,"The following approach uses the method from the root of the package:"),wn.forEach(t),Z=h(o),A(J.$$.fragment,o),ce=h(o),ee=n(o,"P",{});var Mo=s(ee);Q=i(Mo,"The following approach uses the "),X=n(Mo,"CODE",{});var An=s(X);Y=i(An,"HfApi"),An.forEach(t),ve=i(Mo," class:"),Mo.forEach(t),$e=h(o),A(B.$$.fragment,o),oe=h(o),K=n(o,"P",{});var So=s(K);Fe=i(So,"Using the "),ne=n(So,"CODE",{});var jn=s(ne);ze=i(jn,"HfApi"),jn.forEach(t),Ne=i(So," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),So.forEach(t),ye=h(o),I=n(o,"DIV",{class:!0});var C=s(I);A(re.$$.fragment,C),Bo=h(C),ke=n(C,"DIV",{class:!0});var Vo=s(ke);A(Ee.$$.fragment,Vo),Ko=h(Vo),Ge=n(Vo,"P",{});var xn=s(Ge);Jo=i(xn,"Creates a commit in the given repo, deleting & uploading files as needed."),xn.forEach(t),Vo.forEach(t),bs=h(C),Ye=n(C,"DIV",{class:!0});var zo=s(Ye);A(zt.$$.fragment,zo),vs=h(zo),ha=n(zo,"P",{});var Hn=s(ha);$s=i(Hn,"Create an empty repo on the HuggingFace Hub."),Hn.forEach(t),zo.forEach(t),ys=h(C),pe=n(C,"DIV",{class:!0});var He=s(pe);A(Gt.$$.fragment,He),ks=h(He),da=n(He,"P",{});var qn=s(da);Es=i(qn,"Get info on one specific dataset on huggingface.co."),qn.forEach(t),ws=h(He),fa=n(He,"P",{});var Dn=s(fa);As=i(Dn,"Dataset can be private if you pass an acceptable token."),Dn.forEach(t),js=h(He),A(Ze.$$.fragment,He),He.forEach(t),xs=h(C),Ie=n(C,"DIV",{class:!0});var ea=s(Ie);A(Wt.$$.fragment,ea),Hs=h(ea),ua=n(ea,"P",{});var Yl=s(ua);qs=i(Yl,"Deletes a file in the given repo."),Yl.forEach(t),Ds=h(ea),A(et.$$.fragment,ea),ea.forEach(t),Fs=h(C),Oe=n(C,"DIV",{class:!0});var ta=s(Oe);A(Bt.$$.fragment,ta),Ns=h(ta),ma=n(ta,"P",{});var Zl=s(ma);Is=i(Zl,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Zl.forEach(t),Os=h(ta),A(tt.$$.fragment,ta),ta.forEach(t),Ts=h(C),ot=n(C,"DIV",{class:!0});var Wn=s(ot);A(Kt.$$.fragment,Wn),Ls=h(Wn),_a=n(Wn,"P",{});var ec=s(_a);Ps=i(ec,"Gets all valid dataset tags as a nested namespace object."),ec.forEach(t),Wn.forEach(t),Cs=h(C),at=n(C,"DIV",{class:!0});var Bn=s(at);A(Jt.$$.fragment,Bn),Rs=h(Bn),ba=n(Bn,"P",{});var tc=s(ba);Us=i(tc,`Returns the repository name for a given model ID and optional
organization.`),tc.forEach(t),Bn.forEach(t),Ms=h(C),nt=n(C,"DIV",{class:!0});var Kn=s(nt);A(Qt.$$.fragment,Kn),Ss=h(Kn),va=n(Kn,"P",{});var oc=s(va);Vs=i(oc,"Gets all valid model tags as a nested namespace object"),oc.forEach(t),Kn.forEach(t),zs=h(C),ge=n(C,"DIV",{class:!0});var Lt=s(ge);A(Xt.$$.fragment,Lt),Gs=h(Lt),$a=n(Lt,"P",{});var ac=s($a);Ws=i(ac,"Get the public list of all the datasets on huggingface.co"),ac.forEach(t),Bs=h(Lt),A(st.$$.fragment,Lt),Ks=h(Lt),A(rt.$$.fragment,Lt),Lt.forEach(t),Js=h(C),it=n(C,"DIV",{class:!0});var Jn=s(it);A(Yt.$$.fragment,Jn),Qs=h(Jn),ya=n(Jn,"P",{});var nc=s(ya);Xs=i(nc,"Get the public list of all the metrics on huggingface.co"),nc.forEach(t),Jn.forEach(t),Ys=h(C),he=n(C,"DIV",{class:!0});var Pt=s(he);A(Zt.$$.fragment,Pt),Zs=h(Pt),ka=n(Pt,"P",{});var sc=s(ka);er=i(sc,"Get the public list of all the models on huggingface.co"),sc.forEach(t),tr=h(Pt),A(lt.$$.fragment,Pt),or=h(Pt),A(ct.$$.fragment,Pt),Pt.forEach(t),ar=h(C),pt=n(C,"DIV",{class:!0});var Qn=s(pt);A(eo.$$.fragment,Qn),nr=h(Qn),Ea=n(Qn,"P",{});var rc=s(Ea);sr=i(rc,"Get the list of files in a given repo."),rc.forEach(t),Qn.forEach(t),rr=h(C),de=n(C,"DIV",{class:!0});var Ct=s(de);A(to.$$.fragment,Ct),ir=h(Ct),wa=n(Ct,"P",{});var ic=s(wa);lr=i(ic,"Get info on one specific model on huggingface.co"),ic.forEach(t),cr=h(Ct),Aa=n(Ct,"P",{});var lc=s(Aa);pr=i(lc,"Model can be private if you pass an acceptable token or are logged in."),lc.forEach(t),gr=h(Ct),A(gt.$$.fragment,Ct),Ct.forEach(t),hr=h(C),fe=n(C,"DIV",{class:!0});var Rt=s(fe);A(oo.$$.fragment,Rt),dr=h(Rt),ja=n(Rt,"P",{});var cc=s(ja);fr=i(cc,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),cc.forEach(t),ur=h(Rt),ao=n(Rt,"P",{});var Xn=s(ao);mr=i(Xn,`Note there are certain limitations. For more information about moving
repositories, please see
`),no=n(Xn,"A",{href:!0,rel:!0});var pc=s(no);_r=i(pc,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),pc.forEach(t),br=i(Xn,"."),Xn.forEach(t),vr=h(Rt),A(ht.$$.fragment,Rt),Rt.forEach(t),$r=h(C),Te=n(C,"DIV",{class:!0});var oa=s(Te);A(so.$$.fragment,oa),yr=h(oa),xa=n(oa,"P",{});var gc=s(xa);kr=i(gc,"Get the info object for a given repo of a given type."),gc.forEach(t),Er=h(oa),A(dt.$$.fragment,oa),oa.forEach(t),wr=h(C),ft=n(C,"DIV",{class:!0});var Yn=s(ft);A(ro.$$.fragment,Yn),Ar=h(Yn),Ha=n(Yn,"P",{});var hc=s(Ha);jr=i(hc,`Saves the passed access token so git can correctly authenticate the
user.`),hc.forEach(t),Yn.forEach(t),xr=h(C),ue=n(C,"DIV",{class:!0});var Ut=s(ue);A(io.$$.fragment,Ut),Hr=h(Ut),qa=n(Ut,"P",{});var dc=s(qa);qr=i(dc,"Get info on one specific Space on huggingface.co."),dc.forEach(t),Dr=h(Ut),Da=n(Ut,"P",{});var fc=s(Da);Fr=i(fc,"Space can be private if you pass an acceptable token."),fc.forEach(t),Nr=h(Ut),A(ut.$$.fragment,Ut),Ut.forEach(t),Ir=h(C),mt=n(C,"DIV",{class:!0});var Zn=s(mt);A(lo.$$.fragment,Zn),Or=h(Zn),Fa=n(Zn,"P",{});var uc=s(Fa);Tr=i(uc,"Resets the user\u2019s access token."),uc.forEach(t),Zn.forEach(t),Lr=h(C),Le=n(C,"DIV",{class:!0});var aa=s(Le);A(co.$$.fragment,aa),Pr=h(aa),Na=n(aa,"P",{});var mc=s(Na);Cr=i(mc,"Update the visibility setting of a repository."),mc.forEach(t),Rr=h(aa),A(_t.$$.fragment,aa),aa.forEach(t),Ur=h(C),me=n(C,"DIV",{class:!0});var Mt=s(me);A(po.$$.fragment,Mt),Mr=h(Mt),Ia=n(Mt,"P",{});var _c=s(Ia);Sr=i(_c,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),_c.forEach(t),Vr=h(Mt),A(bt.$$.fragment,Mt),zr=h(Mt),A(vt.$$.fragment,Mt),Mt.forEach(t),Gr=h(C),te=n(C,"DIV",{class:!0});var be=s(te);A(go.$$.fragment,be),Wr=h(be),Oa=n(be,"P",{});var bc=s(Oa);Br=i(bc,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),bc.forEach(t),Kr=h(be),Ta=n(be,"P",{});var vc=s(Ta);Jr=i(vc,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),vc.forEach(t),Qr=h(be),ho=n(be,"P",{});var es=s(ho);Xr=i(es,"Uses "),La=n(es,"CODE",{});var $c=s(La);Yr=i($c,"HfApi.create_commit"),$c.forEach(t),Zr=i(es," under the hood."),es.forEach(t),ei=h(be),A($t.$$.fragment,be),ti=h(be),A(yt.$$.fragment,be),be.forEach(t),oi=h(C),kt=n(C,"DIV",{class:!0});var ts=s(kt);A(fo.$$.fragment,ts),ai=h(ts),Pa=n(ts,"P",{});var yc=s(Pa);ni=i(yc,"Call HF API to know \u201Cwhoami\u201D."),yc.forEach(t),ts.forEach(t),C.forEach(t),Fn=h(o),We=n(o,"H2",{class:!0});var os=s(We);Et=n(os,"A",{id:!0,class:!0,href:!0});var kc=s(Et);Ca=n(kc,"SPAN",{});var Ec=s(Ca);A(uo.$$.fragment,Ec),Ec.forEach(t),kc.forEach(t),si=h(os),Qo=n(os,"SPAN",{});var Kl=s(Qo);Ra=n(Kl,"CODE",{});var wc=s(Ra);ri=i(wc,"create_commit"),wc.forEach(t),ii=i(Kl," API"),Kl.forEach(t),os.forEach(t),Nn=h(o),wt=n(o,"P",{});var as=s(wt);li=i(as,"Below are the supported values for "),Ua=n(as,"CODE",{});var Ac=s(Ua);ci=i(Ac,"CommitOperation()"),Ac.forEach(t),pi=i(as,":"),as.forEach(t),In=h(o),ae=n(o,"DIV",{class:!0});var Me=s(ae);A(mo.$$.fragment,Me),gi=h(Me),Ma=n(Me,"P",{});var jc=s(Ma);hi=i(jc,`Data structure holding necessary info to upload a file
to a repository on the Hub`),jc.forEach(t),di=h(Me),se=n(Me,"DIV",{class:!0});var Se=s(se);A(_o.$$.fragment,Se),fi=h(Se),bo=n(Se,"P",{});var ns=s(bo);ui=i(ns,`A context manager that yields a file-like object allowing to read the underlying
data behind `),Sa=n(ns,"CODE",{});var xc=s(Sa);mi=i(xc,"path_or_fileobj"),xc.forEach(t),_i=i(ns,"."),ns.forEach(t),bi=h(Se),vo=n(Se,"P",{});var ss=s(vo);vi=i(ss,"Triggers "),Va=n(ss,"CODE",{});var Hc=s(Va);$i=i(Hc,"self.validate"),Hc.forEach(t),yi=i(ss,"."),ss.forEach(t),ki=h(Se),$o=n(Se,"P",{});var rs=s($o);Ei=i(rs,"Raises: "),za=n(rs,"CODE",{});var qc=s(za);wi=i(qc,"ValueError"),qc.forEach(t),Ai=i(rs," if self.validate fails"),rs.forEach(t),ji=h(Se),A(At.$$.fragment,Se),Se.forEach(t),xi=h(Me),Pe=n(Me,"DIV",{class:!0});var na=s(Pe);A(yo.$$.fragment,na),Hi=h(na),Xo=n(na,"P",{});var Jl=s(Xo);qi=i(Jl,"The base64-encoded content of "),Ga=n(Jl,"CODE",{});var Dc=s(Ga);Di=i(Dc,"path_or_fileobj"),Dc.forEach(t),Jl.forEach(t),Fi=h(na),Yo=n(na,"P",{});var Ql=s(Yo);Ni=i(Ql,"Returns: "),Wa=n(Ql,"CODE",{});var Fc=s(Wa);Ii=i(Fc,"bytes"),Fc.forEach(t),Ql.forEach(t),na.forEach(t),Oi=h(Me),_e=n(Me,"DIV",{class:!0});var St=s(_e);A(ko.$$.fragment,St),Ti=h(St),Eo=n(St,"P",{});var is=s(Eo);Li=i(is,"Ensures "),Ba=n(is,"CODE",{});var Nc=s(Ba);Pi=i(Nc,"path_or_fileobj"),Nc.forEach(t),Ci=i(is," is valid:"),is.forEach(t),Ri=h(St),Be=n(St,"UL",{});var sa=s(Be);Ce=n(sa,"LI",{});var Go=s(Ce);Ui=i(Go,"Ensures it is either a "),Ka=n(Go,"CODE",{});var Ic=s(Ka);Mi=i(Ic,"str"),Ic.forEach(t),Si=i(Go,", "),Ja=n(Go,"CODE",{});var Oc=s(Ja);Vi=i(Oc,"bytes"),Oc.forEach(t),zi=i(Go," or an instance of "),Qa=n(Go,"CODE",{});var Tc=s(Qa);Gi=i(Tc,"io.BufferedIOBase"),Tc.forEach(t),Go.forEach(t),Wi=h(sa),wo=n(sa,"LI",{});var ls=s(wo);Bi=i(ls,"If it is a "),Xa=n(ls,"CODE",{});var Lc=s(Xa);Ki=i(Lc,"str"),Lc.forEach(t),Ji=i(ls,", ensure that it is a file path and that the file exists"),ls.forEach(t),Qi=h(sa),Re=n(sa,"LI",{});var Wo=s(Re);Xi=i(Wo,"If it is an instance of "),Ya=n(Wo,"CODE",{});var Pc=s(Ya);Yi=i(Pc,"io.BufferedIOBase"),Pc.forEach(t),Zi=i(Wo,", ensures it supports "),Za=n(Wo,"CODE",{});var Cc=s(Za);el=i(Cc,"seek()"),Cc.forEach(t),tl=i(Wo," and "),en=n(Wo,"CODE",{});var Rc=s(en);ol=i(Rc,"tell()"),Rc.forEach(t),Wo.forEach(t),sa.forEach(t),al=h(St),Ke=n(St,"P",{});var ra=s(Ke);nl=i(ra,"Raises: "),tn=n(ra,"CODE",{});var Uc=s(tn);sl=i(Uc,"ValueError"),Uc.forEach(t),rl=i(ra," if "),on=n(ra,"CODE",{});var Mc=s(on);il=i(Mc,"path_or_fileobj"),Mc.forEach(t),ll=i(ra," is not valid"),ra.forEach(t),St.forEach(t),Me.forEach(t),On=h(o),Je=n(o,"DIV",{class:!0});var cs=s(Je);A(Ao.$$.fragment,cs),cl=h(cs),an=n(cs,"P",{});var Sc=s(an);pl=i(Sc,`Data structure holding necessary info to delete
a file from a repository on the Hub`),Sc.forEach(t),cs.forEach(t),Tn=h(o),Qe=n(o,"H2",{class:!0});var ps=s(Qe);jt=n(ps,"A",{id:!0,class:!0,href:!0});var Vc=s(jt);nn=n(Vc,"SPAN",{});var zc=s(nn);A(jo.$$.fragment,zc),zc.forEach(t),Vc.forEach(t),gl=h(ps),sn=n(ps,"SPAN",{});var Gc=s(sn);hl=i(Gc,"Hugging Face local storage"),Gc.forEach(t),ps.forEach(t),Ln=h(o),xo=n(o,"P",{});var Xl=s(xo);rn=n(Xl,"CODE",{});var Wc=s(rn);dl=i(Wc,"huggingface_hub"),Wc.forEach(t),fl=i(Xl,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Xl.forEach(t),Pn=h(o),xt=n(o,"P",{});var gs=s(xt);ul=i(gs,"It does this using the "),Zo=n(gs,"A",{href:!0});var Bc=s(Zo);ml=i(Bc,"HfFolder"),Bc.forEach(t),_l=i(gs," utility, which saves data at the root of the user."),gs.forEach(t),Cn=h(o),ie=n(o,"DIV",{class:!0});var Vt=s(ie);A(Ho.$$.fragment,Vt),bl=h(Vt),Ht=n(Vt,"DIV",{class:!0});var hs=s(Ht);A(qo.$$.fragment,hs),vl=h(hs),ln=n(hs,"P",{});var Kc=s(ln);$l=i(Kc,"Deletes the token from storage. Does not fail if token does not exist."),Kc.forEach(t),hs.forEach(t),yl=h(Vt),Ue=n(Vt,"DIV",{class:!0});var ia=s(Ue);A(Do.$$.fragment,ia),kl=h(ia),cn=n(ia,"P",{});var Jc=s(cn);El=i(Jc,"Get token or None if not existent."),Jc.forEach(t),wl=h(ia),Fo=n(ia,"P",{});var ds=s(Fo);Al=i(ds,"Note that a token can be also provided using the "),pn=n(ds,"CODE",{});var Qc=s(pn);jl=i(Qc,"HUGGING_FACE_HUB_TOKEN"),Qc.forEach(t),xl=i(ds,`
environment variable.`),ds.forEach(t),ia.forEach(t),Hl=h(Vt),qt=n(Vt,"DIV",{class:!0});var fs=s(qt);A(No.$$.fragment,fs),ql=h(fs),gn=n(fs,"P",{});var Xc=s(gn);Dl=i(Xc,"Save token, creating folder as needed."),Xc.forEach(t),fs.forEach(t),Vt.forEach(t),Rn=h(o),Xe=n(o,"H2",{class:!0});var us=s(Xe);Dt=n(us,"A",{id:!0,class:!0,href:!0});var Yc=s(Dt);hn=n(Yc,"SPAN",{});var Zc=s(hn);A(Io.$$.fragment,Zc),Zc.forEach(t),Yc.forEach(t),Fl=h(us),dn=n(us,"SPAN",{});var ep=s(dn);Nl=i(ep,"Filtering helpers"),ep.forEach(t),us.forEach(t),Un=h(o),Ft=n(o,"P",{});var ms=s(Ft);Il=i(ms,"Some helpers to filter repositories on the Hub are available in the "),fn=n(ms,"CODE",{});var tp=s(fn);Ol=i(tp,"huggingface_hub"),tp.forEach(t),Tl=i(ms," package."),ms.forEach(t),Mn=h(o),we=n(o,"DIV",{class:!0});var la=s(we);A(Oo.$$.fragment,la),Ll=h(la),un=n(la,"P",{});var op=s(un);Pl=i(op,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),op.forEach(t),Cl=h(la),A(Nt.$$.fragment,la),la.forEach(t),Sn=h(o),Ae=n(o,"DIV",{class:!0});var ca=s(Ae);A(To.$$.fragment,ca),Rl=h(ca),mn=n(ca,"P",{});var ap=s(mn);Ul=i(ap,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ap.forEach(t),Ml=h(ca),A(It.$$.fragment,ca),ca.forEach(t),Vn=h(o),je=n(o,"DIV",{class:!0});var pa=s(je);A(Lo.$$.fragment,pa),Sl=h(pa),_n=n(pa,"P",{});var np=s(_n);Vl=i(np,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),np.forEach(t),zl=h(pa),A(Ot.$$.fragment,pa),pa.forEach(t),zn=h(o),xe=n(o,"DIV",{class:!0});var ga=s(xe);A(Po.$$.fragment,ga),Gl=h(ga),bn=n(ga,"P",{});var sp=s(bn);Wl=i(sp,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),sp.forEach(t),Bl=h(ga),A(Tt.$$.fragment,ga),ga.forEach(t),this.h()},h(){y(p,"name","hf:doc:metadata"),y(p,"content",JSON.stringify(Ip)),y(c,"id","huggingface_hub.HfApi"),y(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(c,"href","#huggingface_hub.HfApi"),y(f,"class","relative group"),y(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(no,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),y(no,"rel","nofollow"),y(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Et,"id","huggingface_hub.CommitOperationAdd"),y(Et,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(Et,"href","#huggingface_hub.CommitOperationAdd"),y(We,"class","relative group"),y(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(jt,"id","huggingface_hub.HfFolder"),y(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(jt,"href","#huggingface_hub.HfFolder"),y(Qe,"class","relative group"),y(Zo,"href","/docs/huggingface_hub/pr_916/en/package_reference/hf_api#huggingface_hub.HfFolder"),y(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Dt,"id","huggingface_hub.DatasetFilter"),y(Dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(Dt,"href","#huggingface_hub.DatasetFilter"),y(Xe,"class","relative group"),y(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,p),_(o,$,b),_(o,f,b),e(f,c),e(c,d),j(l,d,null),e(f,u),e(f,N),e(N,m),_(o,k,b),_(o,F,b),e(F,E),e(F,D),e(D,O),e(F,L),_(o,P,b),_(o,v,b),e(v,T),e(v,M),e(M,U),e(v,z),_(o,G,b),_(o,V,b),e(V,W),_(o,Z,b),j(J,o,b),_(o,ce,b),_(o,ee,b),e(ee,Q),e(ee,X),e(X,Y),e(ee,ve),_(o,$e,b),j(B,o,b),_(o,oe,b),_(o,K,b),e(K,Fe),e(K,ne),e(ne,ze),e(K,Ne),_(o,ye,b),_(o,I,b),j(re,I,null),e(I,Bo),e(I,ke),j(Ee,ke,null),e(ke,Ko),e(ke,Ge),e(Ge,Jo),e(I,bs),e(I,Ye),j(zt,Ye,null),e(Ye,vs),e(Ye,ha),e(ha,$s),e(I,ys),e(I,pe),j(Gt,pe,null),e(pe,ks),e(pe,da),e(da,Es),e(pe,ws),e(pe,fa),e(fa,As),e(pe,js),j(Ze,pe,null),e(I,xs),e(I,Ie),j(Wt,Ie,null),e(Ie,Hs),e(Ie,ua),e(ua,qs),e(Ie,Ds),j(et,Ie,null),e(I,Fs),e(I,Oe),j(Bt,Oe,null),e(Oe,Ns),e(Oe,ma),e(ma,Is),e(Oe,Os),j(tt,Oe,null),e(I,Ts),e(I,ot),j(Kt,ot,null),e(ot,Ls),e(ot,_a),e(_a,Ps),e(I,Cs),e(I,at),j(Jt,at,null),e(at,Rs),e(at,ba),e(ba,Us),e(I,Ms),e(I,nt),j(Qt,nt,null),e(nt,Ss),e(nt,va),e(va,Vs),e(I,zs),e(I,ge),j(Xt,ge,null),e(ge,Gs),e(ge,$a),e($a,Ws),e(ge,Bs),j(st,ge,null),e(ge,Ks),j(rt,ge,null),e(I,Js),e(I,it),j(Yt,it,null),e(it,Qs),e(it,ya),e(ya,Xs),e(I,Ys),e(I,he),j(Zt,he,null),e(he,Zs),e(he,ka),e(ka,er),e(he,tr),j(lt,he,null),e(he,or),j(ct,he,null),e(I,ar),e(I,pt),j(eo,pt,null),e(pt,nr),e(pt,Ea),e(Ea,sr),e(I,rr),e(I,de),j(to,de,null),e(de,ir),e(de,wa),e(wa,lr),e(de,cr),e(de,Aa),e(Aa,pr),e(de,gr),j(gt,de,null),e(I,hr),e(I,fe),j(oo,fe,null),e(fe,dr),e(fe,ja),e(ja,fr),e(fe,ur),e(fe,ao),e(ao,mr),e(ao,no),e(no,_r),e(ao,br),e(fe,vr),j(ht,fe,null),e(I,$r),e(I,Te),j(so,Te,null),e(Te,yr),e(Te,xa),e(xa,kr),e(Te,Er),j(dt,Te,null),e(I,wr),e(I,ft),j(ro,ft,null),e(ft,Ar),e(ft,Ha),e(Ha,jr),e(I,xr),e(I,ue),j(io,ue,null),e(ue,Hr),e(ue,qa),e(qa,qr),e(ue,Dr),e(ue,Da),e(Da,Fr),e(ue,Nr),j(ut,ue,null),e(I,Ir),e(I,mt),j(lo,mt,null),e(mt,Or),e(mt,Fa),e(Fa,Tr),e(I,Lr),e(I,Le),j(co,Le,null),e(Le,Pr),e(Le,Na),e(Na,Cr),e(Le,Rr),j(_t,Le,null),e(I,Ur),e(I,me),j(po,me,null),e(me,Mr),e(me,Ia),e(Ia,Sr),e(me,Vr),j(bt,me,null),e(me,zr),j(vt,me,null),e(I,Gr),e(I,te),j(go,te,null),e(te,Wr),e(te,Oa),e(Oa,Br),e(te,Kr),e(te,Ta),e(Ta,Jr),e(te,Qr),e(te,ho),e(ho,Xr),e(ho,La),e(La,Yr),e(ho,Zr),e(te,ei),j($t,te,null),e(te,ti),j(yt,te,null),e(I,oi),e(I,kt),j(fo,kt,null),e(kt,ai),e(kt,Pa),e(Pa,ni),_(o,Fn,b),_(o,We,b),e(We,Et),e(Et,Ca),j(uo,Ca,null),e(We,si),e(We,Qo),e(Qo,Ra),e(Ra,ri),e(Qo,ii),_(o,Nn,b),_(o,wt,b),e(wt,li),e(wt,Ua),e(Ua,ci),e(wt,pi),_(o,In,b),_(o,ae,b),j(mo,ae,null),e(ae,gi),e(ae,Ma),e(Ma,hi),e(ae,di),e(ae,se),j(_o,se,null),e(se,fi),e(se,bo),e(bo,ui),e(bo,Sa),e(Sa,mi),e(bo,_i),e(se,bi),e(se,vo),e(vo,vi),e(vo,Va),e(Va,$i),e(vo,yi),e(se,ki),e(se,$o),e($o,Ei),e($o,za),e(za,wi),e($o,Ai),e(se,ji),j(At,se,null),e(ae,xi),e(ae,Pe),j(yo,Pe,null),e(Pe,Hi),e(Pe,Xo),e(Xo,qi),e(Xo,Ga),e(Ga,Di),e(Pe,Fi),e(Pe,Yo),e(Yo,Ni),e(Yo,Wa),e(Wa,Ii),e(ae,Oi),e(ae,_e),j(ko,_e,null),e(_e,Ti),e(_e,Eo),e(Eo,Li),e(Eo,Ba),e(Ba,Pi),e(Eo,Ci),e(_e,Ri),e(_e,Be),e(Be,Ce),e(Ce,Ui),e(Ce,Ka),e(Ka,Mi),e(Ce,Si),e(Ce,Ja),e(Ja,Vi),e(Ce,zi),e(Ce,Qa),e(Qa,Gi),e(Be,Wi),e(Be,wo),e(wo,Bi),e(wo,Xa),e(Xa,Ki),e(wo,Ji),e(Be,Qi),e(Be,Re),e(Re,Xi),e(Re,Ya),e(Ya,Yi),e(Re,Zi),e(Re,Za),e(Za,el),e(Re,tl),e(Re,en),e(en,ol),e(_e,al),e(_e,Ke),e(Ke,nl),e(Ke,tn),e(tn,sl),e(Ke,rl),e(Ke,on),e(on,il),e(Ke,ll),_(o,On,b),_(o,Je,b),j(Ao,Je,null),e(Je,cl),e(Je,an),e(an,pl),_(o,Tn,b),_(o,Qe,b),e(Qe,jt),e(jt,nn),j(jo,nn,null),e(Qe,gl),e(Qe,sn),e(sn,hl),_(o,Ln,b),_(o,xo,b),e(xo,rn),e(rn,dl),e(xo,fl),_(o,Pn,b),_(o,xt,b),e(xt,ul),e(xt,Zo),e(Zo,ml),e(xt,_l),_(o,Cn,b),_(o,ie,b),j(Ho,ie,null),e(ie,bl),e(ie,Ht),j(qo,Ht,null),e(Ht,vl),e(Ht,ln),e(ln,$l),e(ie,yl),e(ie,Ue),j(Do,Ue,null),e(Ue,kl),e(Ue,cn),e(cn,El),e(Ue,wl),e(Ue,Fo),e(Fo,Al),e(Fo,pn),e(pn,jl),e(Fo,xl),e(ie,Hl),e(ie,qt),j(No,qt,null),e(qt,ql),e(qt,gn),e(gn,Dl),_(o,Rn,b),_(o,Xe,b),e(Xe,Dt),e(Dt,hn),j(Io,hn,null),e(Xe,Fl),e(Xe,dn),e(dn,Nl),_(o,Un,b),_(o,Ft,b),e(Ft,Il),e(Ft,fn),e(fn,Ol),e(Ft,Tl),_(o,Mn,b),_(o,we,b),j(Oo,we,null),e(we,Ll),e(we,un),e(un,Pl),e(we,Cl),j(Nt,we,null),_(o,Sn,b),_(o,Ae,b),j(To,Ae,null),e(Ae,Rl),e(Ae,mn),e(mn,Ul),e(Ae,Ml),j(It,Ae,null),_(o,Vn,b),_(o,je,b),j(Lo,je,null),e(je,Sl),e(je,_n),e(_n,Vl),e(je,zl),j(Ot,je,null),_(o,zn,b),_(o,xe,b),j(Po,xe,null),e(xe,Gl),e(xe,bn),e(bn,Wl),e(xe,Bl),j(Tt,xe,null),Gn=!0},p(o,[b]){const Co={};b&2&&(Co.$$scope={dirty:b,ctx:o}),Ze.$set(Co);const vn={};b&2&&(vn.$$scope={dirty:b,ctx:o}),et.$set(vn);const $n={};b&2&&($n.$$scope={dirty:b,ctx:o}),tt.$set($n);const yn={};b&2&&(yn.$$scope={dirty:b,ctx:o}),st.$set(yn);const Ro={};b&2&&(Ro.$$scope={dirty:b,ctx:o}),rt.$set(Ro);const kn={};b&2&&(kn.$$scope={dirty:b,ctx:o}),lt.$set(kn);const Uo={};b&2&&(Uo.$$scope={dirty:b,ctx:o}),ct.$set(Uo);const En={};b&2&&(En.$$scope={dirty:b,ctx:o}),gt.$set(En);const wn={};b&2&&(wn.$$scope={dirty:b,ctx:o}),ht.$set(wn);const Mo={};b&2&&(Mo.$$scope={dirty:b,ctx:o}),dt.$set(Mo);const An={};b&2&&(An.$$scope={dirty:b,ctx:o}),ut.$set(An);const So={};b&2&&(So.$$scope={dirty:b,ctx:o}),_t.$set(So);const jn={};b&2&&(jn.$$scope={dirty:b,ctx:o}),bt.$set(jn);const C={};b&2&&(C.$$scope={dirty:b,ctx:o}),vt.$set(C);const Vo={};b&2&&(Vo.$$scope={dirty:b,ctx:o}),$t.$set(Vo);const xn={};b&2&&(xn.$$scope={dirty:b,ctx:o}),yt.$set(xn);const zo={};b&2&&(zo.$$scope={dirty:b,ctx:o}),At.$set(zo);const Hn={};b&2&&(Hn.$$scope={dirty:b,ctx:o}),Nt.$set(Hn);const He={};b&2&&(He.$$scope={dirty:b,ctx:o}),It.$set(He);const qn={};b&2&&(qn.$$scope={dirty:b,ctx:o}),Ot.$set(qn);const Dn={};b&2&&(Dn.$$scope={dirty:b,ctx:o}),Tt.$set(Dn)},i(o){Gn||(x(l.$$.fragment,o),x(J.$$.fragment,o),x(B.$$.fragment,o),x(re.$$.fragment,o),x(Ee.$$.fragment,o),x(zt.$$.fragment,o),x(Gt.$$.fragment,o),x(Ze.$$.fragment,o),x(Wt.$$.fragment,o),x(et.$$.fragment,o),x(Bt.$$.fragment,o),x(tt.$$.fragment,o),x(Kt.$$.fragment,o),x(Jt.$$.fragment,o),x(Qt.$$.fragment,o),x(Xt.$$.fragment,o),x(st.$$.fragment,o),x(rt.$$.fragment,o),x(Yt.$$.fragment,o),x(Zt.$$.fragment,o),x(lt.$$.fragment,o),x(ct.$$.fragment,o),x(eo.$$.fragment,o),x(to.$$.fragment,o),x(gt.$$.fragment,o),x(oo.$$.fragment,o),x(ht.$$.fragment,o),x(so.$$.fragment,o),x(dt.$$.fragment,o),x(ro.$$.fragment,o),x(io.$$.fragment,o),x(ut.$$.fragment,o),x(lo.$$.fragment,o),x(co.$$.fragment,o),x(_t.$$.fragment,o),x(po.$$.fragment,o),x(bt.$$.fragment,o),x(vt.$$.fragment,o),x(go.$$.fragment,o),x($t.$$.fragment,o),x(yt.$$.fragment,o),x(fo.$$.fragment,o),x(uo.$$.fragment,o),x(mo.$$.fragment,o),x(_o.$$.fragment,o),x(At.$$.fragment,o),x(yo.$$.fragment,o),x(ko.$$.fragment,o),x(Ao.$$.fragment,o),x(jo.$$.fragment,o),x(Ho.$$.fragment,o),x(qo.$$.fragment,o),x(Do.$$.fragment,o),x(No.$$.fragment,o),x(Io.$$.fragment,o),x(Oo.$$.fragment,o),x(Nt.$$.fragment,o),x(To.$$.fragment,o),x(It.$$.fragment,o),x(Lo.$$.fragment,o),x(Ot.$$.fragment,o),x(Po.$$.fragment,o),x(Tt.$$.fragment,o),Gn=!0)},o(o){H(l.$$.fragment,o),H(J.$$.fragment,o),H(B.$$.fragment,o),H(re.$$.fragment,o),H(Ee.$$.fragment,o),H(zt.$$.fragment,o),H(Gt.$$.fragment,o),H(Ze.$$.fragment,o),H(Wt.$$.fragment,o),H(et.$$.fragment,o),H(Bt.$$.fragment,o),H(tt.$$.fragment,o),H(Kt.$$.fragment,o),H(Jt.$$.fragment,o),H(Qt.$$.fragment,o),H(Xt.$$.fragment,o),H(st.$$.fragment,o),H(rt.$$.fragment,o),H(Yt.$$.fragment,o),H(Zt.$$.fragment,o),H(lt.$$.fragment,o),H(ct.$$.fragment,o),H(eo.$$.fragment,o),H(to.$$.fragment,o),H(gt.$$.fragment,o),H(oo.$$.fragment,o),H(ht.$$.fragment,o),H(so.$$.fragment,o),H(dt.$$.fragment,o),H(ro.$$.fragment,o),H(io.$$.fragment,o),H(ut.$$.fragment,o),H(lo.$$.fragment,o),H(co.$$.fragment,o),H(_t.$$.fragment,o),H(po.$$.fragment,o),H(bt.$$.fragment,o),H(vt.$$.fragment,o),H(go.$$.fragment,o),H($t.$$.fragment,o),H(yt.$$.fragment,o),H(fo.$$.fragment,o),H(uo.$$.fragment,o),H(mo.$$.fragment,o),H(_o.$$.fragment,o),H(At.$$.fragment,o),H(yo.$$.fragment,o),H(ko.$$.fragment,o),H(Ao.$$.fragment,o),H(jo.$$.fragment,o),H(Ho.$$.fragment,o),H(qo.$$.fragment,o),H(Do.$$.fragment,o),H(No.$$.fragment,o),H(Io.$$.fragment,o),H(Oo.$$.fragment,o),H(Nt.$$.fragment,o),H(To.$$.fragment,o),H(It.$$.fragment,o),H(Lo.$$.fragment,o),H(Ot.$$.fragment,o),H(Po.$$.fragment,o),H(Tt.$$.fragment,o),Gn=!1},d(o){t(p),o&&t($),o&&t(f),q(l),o&&t(k),o&&t(F),o&&t(P),o&&t(v),o&&t(G),o&&t(V),o&&t(Z),q(J,o),o&&t(ce),o&&t(ee),o&&t($e),q(B,o),o&&t(oe),o&&t(K),o&&t(ye),o&&t(I),q(re),q(Ee),q(zt),q(Gt),q(Ze),q(Wt),q(et),q(Bt),q(tt),q(Kt),q(Jt),q(Qt),q(Xt),q(st),q(rt),q(Yt),q(Zt),q(lt),q(ct),q(eo),q(to),q(gt),q(oo),q(ht),q(so),q(dt),q(ro),q(io),q(ut),q(lo),q(co),q(_t),q(po),q(bt),q(vt),q(go),q($t),q(yt),q(fo),o&&t(Fn),o&&t(We),q(uo),o&&t(Nn),o&&t(wt),o&&t(In),o&&t(ae),q(mo),q(_o),q(At),q(yo),q(ko),o&&t(On),o&&t(Je),q(Ao),o&&t(Tn),o&&t(Qe),q(jo),o&&t(Ln),o&&t(xo),o&&t(Pn),o&&t(xt),o&&t(Cn),o&&t(ie),q(Ho),q(qo),q(Do),q(No),o&&t(Rn),o&&t(Xe),q(Io),o&&t(Un),o&&t(Ft),o&&t(Mn),o&&t(we),q(Oo),q(Nt),o&&t(Sn),o&&t(Ae),q(To),q(It),o&&t(Vn),o&&t(je),q(Lo),q(Ot),o&&t(zn),o&&t(xe),q(Po),q(Tt)}}}const Ip={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.CommitOperationAdd",title:"`create_commit` API"},{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Op(R){return pp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mp extends rp{constructor(p){super();ip(this,p,Op,Np,lp,{})}}export{Mp as default,Ip as metadata};
