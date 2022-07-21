import{S as ul,i as ml,s as _l,e as a,k as p,w as A,t as i,M as bl,c as n,d as t,m as h,a as s,x as E,h as l,b as y,G as e,g as _,y as j,q as H,o as D,B as F,v as vl,L as Pe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Le}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as vi}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Oe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $l(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),q=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function yl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,ie,ee,Q,X,Y,me,_e;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),q=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),M=p(),b=a("li"),O=a("a"),U=i("RepositoryNotFoundError"),R=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=i("private"),z=i(" and you do not have access."),G=p(),Z=a("li"),J=a("a"),ie=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),Q=p(),X=a("li"),Y=a("a"),me=i("EntryNotFoundError"),_e=i(`
If the file to download cannot be found.`),this.h()},l(B){g=n(B,"P",{});var oe=s(g);$=l(oe,"Raises the following errors:"),oe.forEach(t),u=h(B),c=n(B,"UL",{});var K=s(c);d=n(K,"LI",{});var je=s(d);r=n(je,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Me=s(m);N=l(Me,"HTTPError"),Me.forEach(t),ae.forEach(t),f=l(je,`
if the HuggingFace API returned an error`),je.forEach(t),k=h(K),q=n(K,"LI",{});var He=s(q);w=n(He,"A",{href:!0,rel:!0});var be=s(w);x=n(be,"CODE",{});var I=s(x);T=l(I,"ValueError"),I.forEach(t),be.forEach(t),P=l(He,`
if some parameter value is invalid`),He.forEach(t),M=h(K),b=n(K,"LI",{});var se=s(b);O=n(se,"A",{href:!0});var Do=s(O);U=l(Do,"RepositoryNotFoundError"),Do.forEach(t),R=l(se,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(se,"CODE",{});var ve=s(V);W=l(ve,"private"),ve.forEach(t),z=l(se," and you do not have access."),se.forEach(t),G=h(K),Z=n(K,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var Fo=s(J);ie=l(Fo,"RevisionNotFoundError"),Fo.forEach(t),ee=l($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Q=h(K),X=n(K,"LI",{});var Se=s(X);Y=n(Se,"A",{href:!0});var qo=s(Y);me=l(qo,"EntryNotFoundError"),qo.forEach(t),_e=l(Se,`
If the file to download cannot be found.`),Se.forEach(t),K.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow"),y(O,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),y(Y,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){_(B,g,oe),e(g,$),_(B,u,oe),_(B,c,oe),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,q),e(q,w),e(w,x),e(x,T),e(q,P),e(c,M),e(c,b),e(b,O),e(O,U),e(b,R),e(b,V),e(V,W),e(b,z),e(c,G),e(c,Z),e(Z,J),e(J,ie),e(Z,ee),e(c,Q),e(c,X),e(X,Y),e(Y,me),e(X,_e)},d(B){B&&t(g),B&&t(u),B&&t(c)}}}function kl(S){let g,$,u,c,d,r,m,N,f,k,q;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),q=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function wl(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("filter"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var q=s(u);c=l(q,"filter"),q.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Pe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),F(m,f)}}}function xl(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("search"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var q=s(u);c=l(q,"search"),q.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Pe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),F(m,f)}}}function Al(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("filter"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var q=s(u);c=l(q,"filter"),q.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Pe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),F(m,f)}}}function El(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("search"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var q=s(u);c=l(q,"search"),q.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Pe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),F(m,f)}}}function jl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),q=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function Hl(S){let g,$,u,c,d,r,m,N,f,k,q;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),q=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function Dl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),q=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function Fl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),q=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function ql(S){let g,$,u,c,d,r,m,N,f,k,q;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),q=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),q=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,q)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function Nl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,ie,ee;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),q=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),M=p(),b=a("li"),O=a("a"),U=i("RepositoryNotFoundError"),R=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=i("private"),z=i(" and you do not have access."),G=p(),Z=a("li"),J=a("a"),ie=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),this.h()},l(Q){g=n(Q,"P",{});var X=s(g);$=l(X,"Raises the following errors:"),X.forEach(t),u=h(Q),c=n(Q,"UL",{});var Y=s(c);d=n(Y,"LI",{});var me=s(d);r=n(me,"A",{href:!0,rel:!0});var _e=s(r);m=n(_e,"CODE",{});var B=s(m);N=l(B,"HTTPError"),B.forEach(t),_e.forEach(t),f=l(me,`
if the HuggingFace API returned an error`),me.forEach(t),k=h(Y),q=n(Y,"LI",{});var oe=s(q);w=n(oe,"A",{href:!0,rel:!0});var K=s(w);x=n(K,"CODE",{});var je=s(x);T=l(je,"ValueError"),je.forEach(t),K.forEach(t),P=l(oe,`
if some parameter value is invalid`),oe.forEach(t),M=h(Y),b=n(Y,"LI",{});var ae=s(b);O=n(ae,"A",{href:!0});var Me=s(O);U=l(Me,"RepositoryNotFoundError"),Me.forEach(t),R=l(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var He=s(V);W=l(He,"private"),He.forEach(t),z=l(ae," and you do not have access."),ae.forEach(t),G=h(Y),Z=n(Y,"LI",{});var be=s(Z);J=n(be,"A",{href:!0});var I=s(J);ie=l(I,"RevisionNotFoundError"),I.forEach(t),ee=l(be,`
If the revision to download from cannot be found.`),be.forEach(t),Y.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow"),y(O,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){_(Q,g,X),e(g,$),_(Q,u,X),_(Q,c,X),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,q),e(q,w),e(w,x),e(x,T),e(q,P),e(c,M),e(c,b),e(b,O),e(O,U),e(b,R),e(b,V),e(V,W),e(b,z),e(c,G),e(c,Z),e(Z,J),e(J,ie),e(Z,ee)},d(Q){Q&&t(g),Q&&t(u),Q&&t(c)}}}function Il(S){let g,$,u,c,d;return c=new ue({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){g=a("p"),$=i("Example usage:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example usage:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Pe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),F(c,r)}}}function Tl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),q=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),this.h()},l(M){g=n(M,"P",{});var b=s(g);$=l(b,"Raises the following errors:"),b.forEach(t),u=h(M),c=n(M,"UL",{});var O=s(c);d=n(O,"LI",{});var U=s(d);r=n(U,"A",{href:!0,rel:!0});var R=s(r);m=n(R,"CODE",{});var V=s(m);N=l(V,"HTTPError"),V.forEach(t),R.forEach(t),f=l(U,`
if the HuggingFace API returned an error`),U.forEach(t),k=h(O),q=n(O,"LI",{});var W=s(q);w=n(W,"A",{href:!0,rel:!0});var z=s(w);x=n(z,"CODE",{});var G=s(x);T=l(G,"ValueError"),G.forEach(t),z.forEach(t),P=l(W,`
if some parameter value is invalid`),W.forEach(t),O.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow")},m(M,b){_(M,g,b),e(g,$),_(M,u,b),_(M,c,b),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,q),e(q,w),e(w,x),e(x,T),e(q,P)},d(M){M&&t(g),M&&t(u),M&&t(c)}}}function Ll(S){let g,$,u,c,d;return c=new ue({props:{code:`upload_folder(
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
`}}),{c(){g=a("p"),$=i("Example usage:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example usage:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Pe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),F(c,r)}}}function Ol(S){let g,$,u,c,d;return c=new ue({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){g=a("p"),$=i("Examples:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Examples:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Pe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),F(c,r)}}}function Pl(S){let g,$;return g=new ue({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){A(g.$$.fragment)},l(u){E(g.$$.fragment,u)},m(u,c){j(g,u,c),$=!0},p:Pe,i(u){$||(H(g.$$.fragment,u),$=!0)},o(u){D(g.$$.fragment,u),$=!1},d(u){F(g,u)}}}function Ml(S){let g,$,u,c,d;return c=new ue({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){g=a("p"),$=i("Example:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Pe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),F(c,r)}}}function Sl(S){let g,$,u,c,d;return c=new ue({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){g=a("p"),$=i("Example:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Pe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),F(c,r)}}}function Rl(S){let g,$,u,c,d,r,m,N,f,k,q,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,ie,ee,Q,X,Y,me,_e,B,oe,K,je,ae,Me,He,be,I,se,Do,ve,$e,Fo,Se,qo,qn,We,It,Nn,Vo,In,Tn,le,Tt,Ln,Wo,On,Pn,Go,Mn,Sn,Ge,Rn,De,Lt,Un,Bo,Cn,zn,Be,Vn,Fe,Ot,Wn,Ko,Gn,Bn,Ke,Kn,Je,Pt,Jn,Jo,Qn,Xn,Qe,Mt,Yn,Qo,Zn,es,Xe,St,ts,Xo,os,as,ce,Rt,ns,Yo,ss,rs,Ye,is,Ze,ls,et,Ut,cs,Zo,gs,ps,ne,Ct,hs,ea,ds,fs,zt,us,No,ms,_s,bs,tt,vs,ot,$s,at,Vt,ys,ta,ks,ws,nt,Wt,xs,oa,As,Es,ge,Gt,js,aa,Hs,Ds,na,Fs,qs,st,Ns,pe,Bt,Is,sa,Ts,Ls,Kt,Os,Jt,Ps,Ms,Ss,rt,Rs,qe,Qt,Us,ra,Cs,zs,it,Vs,lt,Xt,Ws,ia,Gs,Bs,he,Yt,Ks,la,Js,Qs,ca,Xs,Ys,ct,Zs,gt,Zt,er,ga,tr,or,Ne,eo,ar,pa,nr,sr,pt,rr,de,to,ir,ha,lr,cr,ht,gr,dt,pr,te,oo,hr,da,dr,fr,fa,ur,mr,ao,_r,ua,br,vr,$r,ft,yr,ut,kr,mt,no,wr,ma,xr,Ba,Re,so,Ar,_a,Er,Ka,Ue,ro,jr,ba,Hr,Ja,ye,io,Dr,va,Fr,qr,$a,Nr,Qa,Ce,lo,Ir,ya,Tr,Xa,ze,_t,ka,co,Lr,wa,Or,Ya,go,xa,Pr,Mr,Za,bt,Sr,Io,Rr,Ur,en,re,po,Cr,vt,ho,zr,Aa,Vr,Wr,Ie,fo,Gr,Ea,Br,Kr,uo,Jr,ja,Qr,Xr,Yr,$t,mo,Zr,Ha,ei,tn,Ve,yt,Da,_o,ti,Fa,oi,on,kt,ai,qa,ni,si,an,ke,bo,ri,Na,ii,li,wt,nn,we,vo,ci,Ia,gi,pi,xt,sn,xe,$o,hi,Ta,di,fi,At,rn,Ae,yo,ui,La,mi,_i,Et,ln;return r=new vi({}),J=new ue({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new ue({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),se=new C({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L576"}}),$e=new C({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1863",returnDescription:`
<p>If <code>create_pr</code> is <code>True</code>, returns the URL to the newly created Pull Request
on the Hub. Otherwise returns <code>None</code>.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),It=new C({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1489",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Tt=new C({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.dataset_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1253",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a></p>
`}}),Ge=new Le({props:{$$slots:{default:[$l]},$$scope:{ctx:S}}}),Lt=new C({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2273"}}),Be=new Le({props:{$$slots:{default:[yl]},$$scope:{ctx:S}}}),Ot=new C({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1619"}}),Ke=new Le({props:{$$slots:{default:[kl]},$$scope:{ctx:S}}}),Pt=new C({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L697"}}),Mt=new C({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2351",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),St=new C({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L689"}}),Rt=new C({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
datasets on the hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_datasets.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_datasets.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_datasets.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting datasets. Possible
values are the properties of the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo">huggingface_hub.hf_api.DatasetInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_datasets.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L917"}}),Ye=new Oe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[wl]},$$scope:{ctx:S}}}),Ze=new Oe({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[xl]},$$scope:{ctx:S}}}),Ut=new C({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1082",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),Ct=new C({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_models.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author (user or organization) of the
returned models`,name:"author"},{anchor:"huggingface_hub.HfApi.list_models.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned models Example
usage:`,name:"search"},{anchor:"huggingface_hub.HfApi.list_models.emissions_thresholds",description:`<strong>emissions_thresholds</strong> (<code>Tuple</code>, <em>optional</em>) &#x2014;
A tuple of two ints or floats representing a minimum and maximum
carbon footprint to filter the resulting models with in grams.`,name:"emissions_thresholds"},{anchor:"huggingface_hub.HfApi.list_models.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting models. Possible values
are the properties of the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo">huggingface_hub.hf_api.ModelInfo</a> class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_models.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L707"}}),tt=new Oe({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Al]},$$scope:{ctx:S}}}),ot=new Oe({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[El]},$$scope:{ctx:S}}}),Vt=new C({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1449",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Wt=new C({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string tag or list of tags that can be used to identify Spaces on the Hub.`,name:"filter"},{anchor:"huggingface_hub.HfApi.list_spaces.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string which identify the author of the returned Spaces.`,name:"author"},{anchor:"huggingface_hub.HfApi.list_spaces.search",description:`<strong>search</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string that will be contained in the returned Spaces.`,name:"search"},{anchor:"huggingface_hub.HfApi.list_spaces.sort",description:`<strong>sort</strong> (<code>Literal[&quot;lastModified&quot;]</code> or <code>str</code>, <em>optional</em>) &#x2014;
The key with which to sort the resulting Spaces. Possible
values are the properties of the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo">huggingface_hub.hf_api.SpaceInfo</a>\` class.`,name:"sort"},{anchor:"huggingface_hub.HfApi.list_spaces.direction",description:`<strong>direction</strong> (<code>Literal[-1]</code> or <code>int</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1096",returnDescription:`
<p>a list of <a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),Gt=new C({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1181",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),st=new Le({props:{$$slots:{default:[jl]},$$scope:{ctx:S}}}),Bt=new C({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1785"}}),rt=new Le({props:{$$slots:{default:[Hl]},$$scope:{ctx:S}}}),Qt=new C({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1377",returnDescription:`
<p>The repository information, as a
<a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.DatasetInfo"
>huggingface_hub.hf_api.DatasetInfo</a>, <a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a>
or <a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a> object.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),it=new Le({props:{$$slots:{default:[Dl]},$$scope:{ctx:S}}}),Xt=new C({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L670"}}),Yt=new C({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1315",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.SpaceInfo"
>huggingface_hub.hf_api.SpaceInfo</a></p>
`}}),ct=new Le({props:{$$slots:{default:[Fl]},$$scope:{ctx:S}}}),Zt=new C({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L682"}}),eo=new C({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1710",returnDescription:`
<p>The HTTP response in json.</p>
`}}),pt=new Le({props:{$$slots:{default:[ql]},$$scope:{ctx:S}}}),to=new C({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1984",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ht=new Le({props:{$$slots:{default:[Nl]},$$scope:{ctx:S}}}),dt=new Oe({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Il]},$$scope:{ctx:S}}}),oo=new C({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2129",returnDescription:`
<p>A URL to visualize the uploaded folder on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),ft=new Le({props:{$$slots:{default:[Tl]},$$scope:{ctx:S}}}),ut=new Oe({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Ll]},$$scope:{ctx:S}}}),no=new C({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L580"}}),so=new C({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.List[str] = []"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of (<a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a>) objects that constitute the model`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L197"}}),ro=new C({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.List[str] = []"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.RepoFile">huggingface_hub.hf_api.RepoFile</a> objects that constitute the dataset`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L265"}}),io=new C({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[RepoFile]</code>, <em>optional</em>) &#x2014;
list of <code>huggingface_hub.hf_api.RepoFIle</code> objects that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L339"}}),lo=new C({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata (has two keys: <code>sha256</code> and <code>size</code>). This attribute is present when
<code>files_metadata</code> argument of <code>repo_info</code> is set to <code>True</code> and the file is stored
with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L159"}}),co=new vi({}),po=new C({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2386"}}),ho=new C({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2423"}}),fo=new C({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2402",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),mo=new C({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2389"}}),_o=new vi({}),bo=new C({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),wt=new Oe({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Ol]},$$scope:{ctx:S}}}),vo=new C({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),xt=new Oe({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Pl]},$$scope:{ctx:S}}}),$o=new C({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L464"}}),At=new Oe({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Ml]},$$scope:{ctx:S}}}),yo=new C({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L426"}}),Et=new Oe({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Sl]},$$scope:{ctx:S}}}),{c(){g=a("meta"),$=p(),u=a("h1"),c=a("a"),d=a("span"),A(r.$$.fragment),m=p(),N=a("span"),f=i("Hugging Face Hub API"),k=p(),q=a("p"),w=i("Below is the documentation for the "),x=a("code"),T=i("HfApi"),P=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),M=p(),b=a("p"),O=i("All methods from the "),U=a("code"),R=i("HfApi"),V=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),W=p(),z=a("p"),G=i("The following approach uses the method from the root of the package:"),Z=p(),A(J.$$.fragment),ie=p(),ee=a("p"),Q=i("The following approach uses the "),X=a("code"),Y=i("HfApi"),me=i(" class:"),_e=p(),A(B.$$.fragment),oe=p(),K=a("p"),je=i("Using the "),ae=a("code"),Me=i("HfApi"),He=i(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),be=p(),I=a("div"),A(se.$$.fragment),Do=p(),ve=a("div"),A($e.$$.fragment),Fo=p(),Se=a("p"),qo=i("Creates a commit in the given repo, deleting & uploading files as needed."),qn=p(),We=a("div"),A(It.$$.fragment),Nn=p(),Vo=a("p"),In=i("Create an empty repo on the HuggingFace Hub."),Tn=p(),le=a("div"),A(Tt.$$.fragment),Ln=p(),Wo=a("p"),On=i("Get info on one specific dataset on huggingface.co."),Pn=p(),Go=a("p"),Mn=i("Dataset can be private if you pass an acceptable token."),Sn=p(),A(Ge.$$.fragment),Rn=p(),De=a("div"),A(Lt.$$.fragment),Un=p(),Bo=a("p"),Cn=i("Deletes a file in the given repo."),zn=p(),A(Be.$$.fragment),Vn=p(),Fe=a("div"),A(Ot.$$.fragment),Wn=p(),Ko=a("p"),Gn=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Bn=p(),A(Ke.$$.fragment),Kn=p(),Je=a("div"),A(Pt.$$.fragment),Jn=p(),Jo=a("p"),Qn=i("Gets all valid dataset tags as a nested namespace object."),Xn=p(),Qe=a("div"),A(Mt.$$.fragment),Yn=p(),Qo=a("p"),Zn=i(`Returns the repository name for a given model ID and optional
organization.`),es=p(),Xe=a("div"),A(St.$$.fragment),ts=p(),Xo=a("p"),os=i("Gets all valid model tags as a nested namespace object"),as=p(),ce=a("div"),A(Rt.$$.fragment),ns=p(),Yo=a("p"),ss=i("Get the public list of all the datasets on huggingface.co"),rs=p(),A(Ye.$$.fragment),is=p(),A(Ze.$$.fragment),ls=p(),et=a("div"),A(Ut.$$.fragment),cs=p(),Zo=a("p"),gs=i("Get the public list of all the metrics on huggingface.co"),ps=p(),ne=a("div"),A(Ct.$$.fragment),hs=p(),ea=a("p"),ds=i("Get the public list of all the models on huggingface.co"),fs=p(),zt=a("p"),us=i("Returns: List of "),No=a("a"),ms=i("huggingface_hub.hf_api.ModelInfo"),_s=i(" objects"),bs=p(),A(tt.$$.fragment),vs=p(),A(ot.$$.fragment),$s=p(),at=a("div"),A(Vt.$$.fragment),ys=p(),ta=a("p"),ks=i("Get the list of files in a given repo."),ws=p(),nt=a("div"),A(Wt.$$.fragment),xs=p(),oa=a("p"),As=i("Get the public list of all Spaces on huggingface.co"),Es=p(),ge=a("div"),A(Gt.$$.fragment),js=p(),aa=a("p"),Hs=i("Get info on one specific model on huggingface.co"),Ds=p(),na=a("p"),Fs=i("Model can be private if you pass an acceptable token or are logged in."),qs=p(),A(st.$$.fragment),Ns=p(),pe=a("div"),A(Bt.$$.fragment),Is=p(),sa=a("p"),Ts=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ls=p(),Kt=a("p"),Os=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),Jt=a("a"),Ps=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Ms=i("."),Ss=p(),A(rt.$$.fragment),Rs=p(),qe=a("div"),A(Qt.$$.fragment),Us=p(),ra=a("p"),Cs=i("Get the info object for a given repo of a given type."),zs=p(),A(it.$$.fragment),Vs=p(),lt=a("div"),A(Xt.$$.fragment),Ws=p(),ia=a("p"),Gs=i(`Saves the passed access token so git can correctly authenticate the
user.`),Bs=p(),he=a("div"),A(Yt.$$.fragment),Ks=p(),la=a("p"),Js=i("Get info on one specific Space on huggingface.co."),Qs=p(),ca=a("p"),Xs=i("Space can be private if you pass an acceptable token."),Ys=p(),A(ct.$$.fragment),Zs=p(),gt=a("div"),A(Zt.$$.fragment),er=p(),ga=a("p"),tr=i("Resets the user\u2019s access token."),or=p(),Ne=a("div"),A(eo.$$.fragment),ar=p(),pa=a("p"),nr=i("Update the visibility setting of a repository."),sr=p(),A(pt.$$.fragment),rr=p(),de=a("div"),A(to.$$.fragment),ir=p(),ha=a("p"),lr=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),cr=p(),A(ht.$$.fragment),gr=p(),A(dt.$$.fragment),pr=p(),te=a("div"),A(oo.$$.fragment),hr=p(),da=a("p"),dr=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),fr=p(),fa=a("p"),ur=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),mr=p(),ao=a("p"),_r=i("Uses "),ua=a("code"),br=i("HfApi.create_commit"),vr=i(" under the hood."),$r=p(),A(ft.$$.fragment),yr=p(),A(ut.$$.fragment),kr=p(),mt=a("div"),A(no.$$.fragment),wr=p(),ma=a("p"),xr=i("Call HF API to know \u201Cwhoami\u201D."),Ba=p(),Re=a("div"),A(so.$$.fragment),Ar=p(),_a=a("p"),Er=i("Info about a model accessible from huggingface.co"),Ka=p(),Ue=a("div"),A(ro.$$.fragment),jr=p(),ba=a("p"),Hr=i("Info about a dataset accessible from huggingface.co"),Ja=p(),ye=a("div"),A(io.$$.fragment),Dr=p(),va=a("p"),Fr=i("Info about a Space accessible from huggingface.co"),qr=p(),$a=a("p"),Nr=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Qa=p(),Ce=a("div"),A(lo.$$.fragment),Ir=p(),ya=a("p"),Tr=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Xa=p(),ze=a("h2"),_t=a("a"),ka=a("span"),A(co.$$.fragment),Lr=p(),wa=a("span"),Or=i("Hugging Face local storage"),Ya=p(),go=a("p"),xa=a("code"),Pr=i("huggingface_hub"),Mr=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Za=p(),bt=a("p"),Sr=i("It does this using the "),Io=a("a"),Rr=i("HfFolder"),Ur=i(" utility, which saves data at the root of the user."),en=p(),re=a("div"),A(po.$$.fragment),Cr=p(),vt=a("div"),A(ho.$$.fragment),zr=p(),Aa=a("p"),Vr=i("Deletes the token from storage. Does not fail if token does not exist."),Wr=p(),Ie=a("div"),A(fo.$$.fragment),Gr=p(),Ea=a("p"),Br=i("Get token or None if not existent."),Kr=p(),uo=a("p"),Jr=i("Note that a token can be also provided using the "),ja=a("code"),Qr=i("HUGGING_FACE_HUB_TOKEN"),Xr=i(`
environment variable.`),Yr=p(),$t=a("div"),A(mo.$$.fragment),Zr=p(),Ha=a("p"),ei=i("Save token, creating folder as needed."),tn=p(),Ve=a("h2"),yt=a("a"),Da=a("span"),A(_o.$$.fragment),ti=p(),Fa=a("span"),oi=i("Filtering helpers"),on=p(),kt=a("p"),ai=i("Some helpers to filter repositories on the Hub are available in the "),qa=a("code"),ni=i("huggingface_hub"),si=i(" package."),an=p(),ke=a("div"),A(bo.$$.fragment),ri=p(),Na=a("p"),ii=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),li=p(),A(wt.$$.fragment),nn=p(),we=a("div"),A(vo.$$.fragment),ci=p(),Ia=a("p"),gi=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),pi=p(),A(xt.$$.fragment),sn=p(),xe=a("div"),A($o.$$.fragment),hi=p(),Ta=a("p"),di=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),fi=p(),A(At.$$.fragment),rn=p(),Ae=a("div"),A(yo.$$.fragment),ui=p(),La=a("p"),mi=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),_i=p(),A(Et.$$.fragment),this.h()},l(o){const v=bl('[data-svelte="svelte-1phssyn"]',document.head);g=n(v,"META",{name:!0,content:!0}),v.forEach(t),$=h(o),u=n(o,"H1",{class:!0});var ko=s(u);c=n(ko,"A",{id:!0,class:!0,href:!0});var Oa=s(c);d=n(Oa,"SPAN",{});var Pa=s(d);E(r.$$.fragment,Pa),Pa.forEach(t),Oa.forEach(t),m=h(ko),N=n(ko,"SPAN",{});var Ma=s(N);f=l(Ma,"Hugging Face Hub API"),Ma.forEach(t),ko.forEach(t),k=h(o),q=n(o,"P",{});var wo=s(q);w=l(wo,"Below is the documentation for the "),x=n(wo,"CODE",{});var Sa=s(x);T=l(Sa,"HfApi"),Sa.forEach(t),P=l(wo,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),wo.forEach(t),M=h(o),b=n(o,"P",{});var xo=s(b);O=l(xo,"All methods from the "),U=n(xo,"CODE",{});var Ra=s(U);R=l(Ra,"HfApi"),Ra.forEach(t),V=l(xo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),xo.forEach(t),W=h(o),z=n(o,"P",{});var Ua=s(z);G=l(Ua,"The following approach uses the method from the root of the package:"),Ua.forEach(t),Z=h(o),E(J.$$.fragment,o),ie=h(o),ee=n(o,"P",{});var Ao=s(ee);Q=l(Ao,"The following approach uses the "),X=n(Ao,"CODE",{});var Ca=s(X);Y=l(Ca,"HfApi"),Ca.forEach(t),me=l(Ao," class:"),Ao.forEach(t),_e=h(o),E(B.$$.fragment,o),oe=h(o),K=n(o,"P",{});var Eo=s(K);je=l(Eo,"Using the "),ae=n(Eo,"CODE",{});var za=s(ae);Me=l(za,"HfApi"),za.forEach(t),He=l(Eo," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Eo.forEach(t),be=h(o),I=n(o,"DIV",{class:!0});var L=s(I);E(se.$$.fragment,L),Do=h(L),ve=n(L,"DIV",{class:!0});var jo=s(ve);E($e.$$.fragment,jo),Fo=h(jo),Se=n(jo,"P",{});var Va=s(Se);qo=l(Va,"Creates a commit in the given repo, deleting & uploading files as needed."),Va.forEach(t),jo.forEach(t),qn=h(L),We=n(L,"DIV",{class:!0});var Ho=s(We);E(It.$$.fragment,Ho),Nn=h(Ho),Vo=n(Ho,"P",{});var Wa=s(Vo);In=l(Wa,"Create an empty repo on the HuggingFace Hub."),Wa.forEach(t),Ho.forEach(t),Tn=h(L),le=n(L,"DIV",{class:!0});var Ee=s(le);E(Tt.$$.fragment,Ee),Ln=h(Ee),Wo=n(Ee,"P",{});var Ga=s(Wo);On=l(Ga,"Get info on one specific dataset on huggingface.co."),Ga.forEach(t),Pn=h(Ee),Go=n(Ee,"P",{});var $i=s(Go);Mn=l($i,"Dataset can be private if you pass an acceptable token."),$i.forEach(t),Sn=h(Ee),E(Ge.$$.fragment,Ee),Ee.forEach(t),Rn=h(L),De=n(L,"DIV",{class:!0});var To=s(De);E(Lt.$$.fragment,To),Un=h(To),Bo=n(To,"P",{});var yi=s(Bo);Cn=l(yi,"Deletes a file in the given repo."),yi.forEach(t),zn=h(To),E(Be.$$.fragment,To),To.forEach(t),Vn=h(L),Fe=n(L,"DIV",{class:!0});var Lo=s(Fe);E(Ot.$$.fragment,Lo),Wn=h(Lo),Ko=n(Lo,"P",{});var ki=s(Ko);Gn=l(ki,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ki.forEach(t),Bn=h(Lo),E(Ke.$$.fragment,Lo),Lo.forEach(t),Kn=h(L),Je=n(L,"DIV",{class:!0});var cn=s(Je);E(Pt.$$.fragment,cn),Jn=h(cn),Jo=n(cn,"P",{});var wi=s(Jo);Qn=l(wi,"Gets all valid dataset tags as a nested namespace object."),wi.forEach(t),cn.forEach(t),Xn=h(L),Qe=n(L,"DIV",{class:!0});var gn=s(Qe);E(Mt.$$.fragment,gn),Yn=h(gn),Qo=n(gn,"P",{});var xi=s(Qo);Zn=l(xi,`Returns the repository name for a given model ID and optional
organization.`),xi.forEach(t),gn.forEach(t),es=h(L),Xe=n(L,"DIV",{class:!0});var pn=s(Xe);E(St.$$.fragment,pn),ts=h(pn),Xo=n(pn,"P",{});var Ai=s(Xo);os=l(Ai,"Gets all valid model tags as a nested namespace object"),Ai.forEach(t),pn.forEach(t),as=h(L),ce=n(L,"DIV",{class:!0});var jt=s(ce);E(Rt.$$.fragment,jt),ns=h(jt),Yo=n(jt,"P",{});var Ei=s(Yo);ss=l(Ei,"Get the public list of all the datasets on huggingface.co"),Ei.forEach(t),rs=h(jt),E(Ye.$$.fragment,jt),is=h(jt),E(Ze.$$.fragment,jt),jt.forEach(t),ls=h(L),et=n(L,"DIV",{class:!0});var hn=s(et);E(Ut.$$.fragment,hn),cs=h(hn),Zo=n(hn,"P",{});var ji=s(Zo);gs=l(ji,"Get the public list of all the metrics on huggingface.co"),ji.forEach(t),hn.forEach(t),ps=h(L),ne=n(L,"DIV",{class:!0});var Te=s(ne);E(Ct.$$.fragment,Te),hs=h(Te),ea=n(Te,"P",{});var Hi=s(ea);ds=l(Hi,"Get the public list of all the models on huggingface.co"),Hi.forEach(t),fs=h(Te),zt=n(Te,"P",{});var dn=s(zt);us=l(dn,"Returns: List of "),No=n(dn,"A",{href:!0});var Di=s(No);ms=l(Di,"huggingface_hub.hf_api.ModelInfo"),Di.forEach(t),_s=l(dn," objects"),dn.forEach(t),bs=h(Te),E(tt.$$.fragment,Te),vs=h(Te),E(ot.$$.fragment,Te),Te.forEach(t),$s=h(L),at=n(L,"DIV",{class:!0});var fn=s(at);E(Vt.$$.fragment,fn),ys=h(fn),ta=n(fn,"P",{});var Fi=s(ta);ks=l(Fi,"Get the list of files in a given repo."),Fi.forEach(t),fn.forEach(t),ws=h(L),nt=n(L,"DIV",{class:!0});var un=s(nt);E(Wt.$$.fragment,un),xs=h(un),oa=n(un,"P",{});var qi=s(oa);As=l(qi,"Get the public list of all Spaces on huggingface.co"),qi.forEach(t),un.forEach(t),Es=h(L),ge=n(L,"DIV",{class:!0});var Ht=s(ge);E(Gt.$$.fragment,Ht),js=h(Ht),aa=n(Ht,"P",{});var Ni=s(aa);Hs=l(Ni,"Get info on one specific model on huggingface.co"),Ni.forEach(t),Ds=h(Ht),na=n(Ht,"P",{});var Ii=s(na);Fs=l(Ii,"Model can be private if you pass an acceptable token or are logged in."),Ii.forEach(t),qs=h(Ht),E(st.$$.fragment,Ht),Ht.forEach(t),Ns=h(L),pe=n(L,"DIV",{class:!0});var Dt=s(pe);E(Bt.$$.fragment,Dt),Is=h(Dt),sa=n(Dt,"P",{});var Ti=s(sa);Ts=l(Ti,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ti.forEach(t),Ls=h(Dt),Kt=n(Dt,"P",{});var mn=s(Kt);Os=l(mn,`Note there are certain limitations. For more information about moving
repositories, please see
`),Jt=n(mn,"A",{href:!0,rel:!0});var Li=s(Jt);Ps=l(Li,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Li.forEach(t),Ms=l(mn,"."),mn.forEach(t),Ss=h(Dt),E(rt.$$.fragment,Dt),Dt.forEach(t),Rs=h(L),qe=n(L,"DIV",{class:!0});var Oo=s(qe);E(Qt.$$.fragment,Oo),Us=h(Oo),ra=n(Oo,"P",{});var Oi=s(ra);Cs=l(Oi,"Get the info object for a given repo of a given type."),Oi.forEach(t),zs=h(Oo),E(it.$$.fragment,Oo),Oo.forEach(t),Vs=h(L),lt=n(L,"DIV",{class:!0});var _n=s(lt);E(Xt.$$.fragment,_n),Ws=h(_n),ia=n(_n,"P",{});var Pi=s(ia);Gs=l(Pi,`Saves the passed access token so git can correctly authenticate the
user.`),Pi.forEach(t),_n.forEach(t),Bs=h(L),he=n(L,"DIV",{class:!0});var Ft=s(he);E(Yt.$$.fragment,Ft),Ks=h(Ft),la=n(Ft,"P",{});var Mi=s(la);Js=l(Mi,"Get info on one specific Space on huggingface.co."),Mi.forEach(t),Qs=h(Ft),ca=n(Ft,"P",{});var Si=s(ca);Xs=l(Si,"Space can be private if you pass an acceptable token."),Si.forEach(t),Ys=h(Ft),E(ct.$$.fragment,Ft),Ft.forEach(t),Zs=h(L),gt=n(L,"DIV",{class:!0});var bn=s(gt);E(Zt.$$.fragment,bn),er=h(bn),ga=n(bn,"P",{});var Ri=s(ga);tr=l(Ri,"Resets the user\u2019s access token."),Ri.forEach(t),bn.forEach(t),or=h(L),Ne=n(L,"DIV",{class:!0});var Po=s(Ne);E(eo.$$.fragment,Po),ar=h(Po),pa=n(Po,"P",{});var Ui=s(pa);nr=l(Ui,"Update the visibility setting of a repository."),Ui.forEach(t),sr=h(Po),E(pt.$$.fragment,Po),Po.forEach(t),rr=h(L),de=n(L,"DIV",{class:!0});var qt=s(de);E(to.$$.fragment,qt),ir=h(qt),ha=n(qt,"P",{});var Ci=s(ha);lr=l(Ci,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ci.forEach(t),cr=h(qt),E(ht.$$.fragment,qt),gr=h(qt),E(dt.$$.fragment,qt),qt.forEach(t),pr=h(L),te=n(L,"DIV",{class:!0});var fe=s(te);E(oo.$$.fragment,fe),hr=h(fe),da=n(fe,"P",{});var zi=s(da);dr=l(zi,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),zi.forEach(t),fr=h(fe),fa=n(fe,"P",{});var Vi=s(fa);ur=l(Vi,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Vi.forEach(t),mr=h(fe),ao=n(fe,"P",{});var vn=s(ao);_r=l(vn,"Uses "),ua=n(vn,"CODE",{});var Wi=s(ua);br=l(Wi,"HfApi.create_commit"),Wi.forEach(t),vr=l(vn," under the hood."),vn.forEach(t),$r=h(fe),E(ft.$$.fragment,fe),yr=h(fe),E(ut.$$.fragment,fe),fe.forEach(t),kr=h(L),mt=n(L,"DIV",{class:!0});var $n=s(mt);E(no.$$.fragment,$n),wr=h($n),ma=n($n,"P",{});var Gi=s(ma);xr=l(Gi,"Call HF API to know \u201Cwhoami\u201D."),Gi.forEach(t),$n.forEach(t),L.forEach(t),Ba=h(o),Re=n(o,"DIV",{class:!0});var yn=s(Re);E(so.$$.fragment,yn),Ar=h(yn),_a=n(yn,"P",{});var Bi=s(_a);Er=l(Bi,"Info about a model accessible from huggingface.co"),Bi.forEach(t),yn.forEach(t),Ka=h(o),Ue=n(o,"DIV",{class:!0});var kn=s(Ue);E(ro.$$.fragment,kn),jr=h(kn),ba=n(kn,"P",{});var Ki=s(ba);Hr=l(Ki,"Info about a dataset accessible from huggingface.co"),Ki.forEach(t),kn.forEach(t),Ja=h(o),ye=n(o,"DIV",{class:!0});var Mo=s(ye);E(io.$$.fragment,Mo),Dr=h(Mo),va=n(Mo,"P",{});var Ji=s(va);Fr=l(Ji,"Info about a Space accessible from huggingface.co"),Ji.forEach(t),qr=h(Mo),$a=n(Mo,"P",{});var Qi=s($a);Nr=l(Qi,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Qi.forEach(t),Mo.forEach(t),Qa=h(o),Ce=n(o,"DIV",{class:!0});var wn=s(Ce);E(lo.$$.fragment,wn),Ir=h(wn),ya=n(wn,"P",{});var Xi=s(ya);Tr=l(Xi,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Xi.forEach(t),wn.forEach(t),Xa=h(o),ze=n(o,"H2",{class:!0});var xn=s(ze);_t=n(xn,"A",{id:!0,class:!0,href:!0});var Yi=s(_t);ka=n(Yi,"SPAN",{});var Zi=s(ka);E(co.$$.fragment,Zi),Zi.forEach(t),Yi.forEach(t),Lr=h(xn),wa=n(xn,"SPAN",{});var el=s(wa);Or=l(el,"Hugging Face local storage"),el.forEach(t),xn.forEach(t),Ya=h(o),go=n(o,"P",{});var bi=s(go);xa=n(bi,"CODE",{});var tl=s(xa);Pr=l(tl,"huggingface_hub"),tl.forEach(t),Mr=l(bi,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),bi.forEach(t),Za=h(o),bt=n(o,"P",{});var An=s(bt);Sr=l(An,"It does this using the "),Io=n(An,"A",{href:!0});var ol=s(Io);Rr=l(ol,"HfFolder"),ol.forEach(t),Ur=l(An," utility, which saves data at the root of the user."),An.forEach(t),en=h(o),re=n(o,"DIV",{class:!0});var Nt=s(re);E(po.$$.fragment,Nt),Cr=h(Nt),vt=n(Nt,"DIV",{class:!0});var En=s(vt);E(ho.$$.fragment,En),zr=h(En),Aa=n(En,"P",{});var al=s(Aa);Vr=l(al,"Deletes the token from storage. Does not fail if token does not exist."),al.forEach(t),En.forEach(t),Wr=h(Nt),Ie=n(Nt,"DIV",{class:!0});var So=s(Ie);E(fo.$$.fragment,So),Gr=h(So),Ea=n(So,"P",{});var nl=s(Ea);Br=l(nl,"Get token or None if not existent."),nl.forEach(t),Kr=h(So),uo=n(So,"P",{});var jn=s(uo);Jr=l(jn,"Note that a token can be also provided using the "),ja=n(jn,"CODE",{});var sl=s(ja);Qr=l(sl,"HUGGING_FACE_HUB_TOKEN"),sl.forEach(t),Xr=l(jn,`
environment variable.`),jn.forEach(t),So.forEach(t),Yr=h(Nt),$t=n(Nt,"DIV",{class:!0});var Hn=s($t);E(mo.$$.fragment,Hn),Zr=h(Hn),Ha=n(Hn,"P",{});var rl=s(Ha);ei=l(rl,"Save token, creating folder as needed."),rl.forEach(t),Hn.forEach(t),Nt.forEach(t),tn=h(o),Ve=n(o,"H2",{class:!0});var Dn=s(Ve);yt=n(Dn,"A",{id:!0,class:!0,href:!0});var il=s(yt);Da=n(il,"SPAN",{});var ll=s(Da);E(_o.$$.fragment,ll),ll.forEach(t),il.forEach(t),ti=h(Dn),Fa=n(Dn,"SPAN",{});var cl=s(Fa);oi=l(cl,"Filtering helpers"),cl.forEach(t),Dn.forEach(t),on=h(o),kt=n(o,"P",{});var Fn=s(kt);ai=l(Fn,"Some helpers to filter repositories on the Hub are available in the "),qa=n(Fn,"CODE",{});var gl=s(qa);ni=l(gl,"huggingface_hub"),gl.forEach(t),si=l(Fn," package."),Fn.forEach(t),an=h(o),ke=n(o,"DIV",{class:!0});var Ro=s(ke);E(bo.$$.fragment,Ro),ri=h(Ro),Na=n(Ro,"P",{});var pl=s(Na);ii=l(pl,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),pl.forEach(t),li=h(Ro),E(wt.$$.fragment,Ro),Ro.forEach(t),nn=h(o),we=n(o,"DIV",{class:!0});var Uo=s(we);E(vo.$$.fragment,Uo),ci=h(Uo),Ia=n(Uo,"P",{});var hl=s(Ia);gi=l(hl,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),hl.forEach(t),pi=h(Uo),E(xt.$$.fragment,Uo),Uo.forEach(t),sn=h(o),xe=n(o,"DIV",{class:!0});var Co=s(xe);E($o.$$.fragment,Co),hi=h(Co),Ta=n(Co,"P",{});var dl=s(Ta);di=l(dl,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),dl.forEach(t),fi=h(Co),E(At.$$.fragment,Co),Co.forEach(t),rn=h(o),Ae=n(o,"DIV",{class:!0});var zo=s(Ae);E(yo.$$.fragment,zo),ui=h(zo),La=n(zo,"P",{});var fl=s(La);mi=l(fl,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),fl.forEach(t),_i=h(zo),E(Et.$$.fragment,zo),zo.forEach(t),this.h()},h(){y(g,"name","hf:doc:metadata"),y(g,"content",JSON.stringify(Ul)),y(c,"id","huggingface_hub.HfApi"),y(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(c,"href","#huggingface_hub.HfApi"),y(u,"class","relative group"),y(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(No,"href","/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"),y(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Jt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),y(Jt,"rel","nofollow"),y(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(_t,"id","huggingface_hub.HfFolder"),y(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(_t,"href","#huggingface_hub.HfFolder"),y(ze,"class","relative group"),y(Io,"href","/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder"),y(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(yt,"id","huggingface_hub.DatasetFilter"),y(yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(yt,"href","#huggingface_hub.DatasetFilter"),y(Ve,"class","relative group"),y(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,g),_(o,$,v),_(o,u,v),e(u,c),e(c,d),j(r,d,null),e(u,m),e(u,N),e(N,f),_(o,k,v),_(o,q,v),e(q,w),e(q,x),e(x,T),e(q,P),_(o,M,v),_(o,b,v),e(b,O),e(b,U),e(U,R),e(b,V),_(o,W,v),_(o,z,v),e(z,G),_(o,Z,v),j(J,o,v),_(o,ie,v),_(o,ee,v),e(ee,Q),e(ee,X),e(X,Y),e(ee,me),_(o,_e,v),j(B,o,v),_(o,oe,v),_(o,K,v),e(K,je),e(K,ae),e(ae,Me),e(K,He),_(o,be,v),_(o,I,v),j(se,I,null),e(I,Do),e(I,ve),j($e,ve,null),e(ve,Fo),e(ve,Se),e(Se,qo),e(I,qn),e(I,We),j(It,We,null),e(We,Nn),e(We,Vo),e(Vo,In),e(I,Tn),e(I,le),j(Tt,le,null),e(le,Ln),e(le,Wo),e(Wo,On),e(le,Pn),e(le,Go),e(Go,Mn),e(le,Sn),j(Ge,le,null),e(I,Rn),e(I,De),j(Lt,De,null),e(De,Un),e(De,Bo),e(Bo,Cn),e(De,zn),j(Be,De,null),e(I,Vn),e(I,Fe),j(Ot,Fe,null),e(Fe,Wn),e(Fe,Ko),e(Ko,Gn),e(Fe,Bn),j(Ke,Fe,null),e(I,Kn),e(I,Je),j(Pt,Je,null),e(Je,Jn),e(Je,Jo),e(Jo,Qn),e(I,Xn),e(I,Qe),j(Mt,Qe,null),e(Qe,Yn),e(Qe,Qo),e(Qo,Zn),e(I,es),e(I,Xe),j(St,Xe,null),e(Xe,ts),e(Xe,Xo),e(Xo,os),e(I,as),e(I,ce),j(Rt,ce,null),e(ce,ns),e(ce,Yo),e(Yo,ss),e(ce,rs),j(Ye,ce,null),e(ce,is),j(Ze,ce,null),e(I,ls),e(I,et),j(Ut,et,null),e(et,cs),e(et,Zo),e(Zo,gs),e(I,ps),e(I,ne),j(Ct,ne,null),e(ne,hs),e(ne,ea),e(ea,ds),e(ne,fs),e(ne,zt),e(zt,us),e(zt,No),e(No,ms),e(zt,_s),e(ne,bs),j(tt,ne,null),e(ne,vs),j(ot,ne,null),e(I,$s),e(I,at),j(Vt,at,null),e(at,ys),e(at,ta),e(ta,ks),e(I,ws),e(I,nt),j(Wt,nt,null),e(nt,xs),e(nt,oa),e(oa,As),e(I,Es),e(I,ge),j(Gt,ge,null),e(ge,js),e(ge,aa),e(aa,Hs),e(ge,Ds),e(ge,na),e(na,Fs),e(ge,qs),j(st,ge,null),e(I,Ns),e(I,pe),j(Bt,pe,null),e(pe,Is),e(pe,sa),e(sa,Ts),e(pe,Ls),e(pe,Kt),e(Kt,Os),e(Kt,Jt),e(Jt,Ps),e(Kt,Ms),e(pe,Ss),j(rt,pe,null),e(I,Rs),e(I,qe),j(Qt,qe,null),e(qe,Us),e(qe,ra),e(ra,Cs),e(qe,zs),j(it,qe,null),e(I,Vs),e(I,lt),j(Xt,lt,null),e(lt,Ws),e(lt,ia),e(ia,Gs),e(I,Bs),e(I,he),j(Yt,he,null),e(he,Ks),e(he,la),e(la,Js),e(he,Qs),e(he,ca),e(ca,Xs),e(he,Ys),j(ct,he,null),e(I,Zs),e(I,gt),j(Zt,gt,null),e(gt,er),e(gt,ga),e(ga,tr),e(I,or),e(I,Ne),j(eo,Ne,null),e(Ne,ar),e(Ne,pa),e(pa,nr),e(Ne,sr),j(pt,Ne,null),e(I,rr),e(I,de),j(to,de,null),e(de,ir),e(de,ha),e(ha,lr),e(de,cr),j(ht,de,null),e(de,gr),j(dt,de,null),e(I,pr),e(I,te),j(oo,te,null),e(te,hr),e(te,da),e(da,dr),e(te,fr),e(te,fa),e(fa,ur),e(te,mr),e(te,ao),e(ao,_r),e(ao,ua),e(ua,br),e(ao,vr),e(te,$r),j(ft,te,null),e(te,yr),j(ut,te,null),e(I,kr),e(I,mt),j(no,mt,null),e(mt,wr),e(mt,ma),e(ma,xr),_(o,Ba,v),_(o,Re,v),j(so,Re,null),e(Re,Ar),e(Re,_a),e(_a,Er),_(o,Ka,v),_(o,Ue,v),j(ro,Ue,null),e(Ue,jr),e(Ue,ba),e(ba,Hr),_(o,Ja,v),_(o,ye,v),j(io,ye,null),e(ye,Dr),e(ye,va),e(va,Fr),e(ye,qr),e(ye,$a),e($a,Nr),_(o,Qa,v),_(o,Ce,v),j(lo,Ce,null),e(Ce,Ir),e(Ce,ya),e(ya,Tr),_(o,Xa,v),_(o,ze,v),e(ze,_t),e(_t,ka),j(co,ka,null),e(ze,Lr),e(ze,wa),e(wa,Or),_(o,Ya,v),_(o,go,v),e(go,xa),e(xa,Pr),e(go,Mr),_(o,Za,v),_(o,bt,v),e(bt,Sr),e(bt,Io),e(Io,Rr),e(bt,Ur),_(o,en,v),_(o,re,v),j(po,re,null),e(re,Cr),e(re,vt),j(ho,vt,null),e(vt,zr),e(vt,Aa),e(Aa,Vr),e(re,Wr),e(re,Ie),j(fo,Ie,null),e(Ie,Gr),e(Ie,Ea),e(Ea,Br),e(Ie,Kr),e(Ie,uo),e(uo,Jr),e(uo,ja),e(ja,Qr),e(uo,Xr),e(re,Yr),e(re,$t),j(mo,$t,null),e($t,Zr),e($t,Ha),e(Ha,ei),_(o,tn,v),_(o,Ve,v),e(Ve,yt),e(yt,Da),j(_o,Da,null),e(Ve,ti),e(Ve,Fa),e(Fa,oi),_(o,on,v),_(o,kt,v),e(kt,ai),e(kt,qa),e(qa,ni),e(kt,si),_(o,an,v),_(o,ke,v),j(bo,ke,null),e(ke,ri),e(ke,Na),e(Na,ii),e(ke,li),j(wt,ke,null),_(o,nn,v),_(o,we,v),j(vo,we,null),e(we,ci),e(we,Ia),e(Ia,gi),e(we,pi),j(xt,we,null),_(o,sn,v),_(o,xe,v),j($o,xe,null),e(xe,hi),e(xe,Ta),e(Ta,di),e(xe,fi),j(At,xe,null),_(o,rn,v),_(o,Ae,v),j(yo,Ae,null),e(Ae,ui),e(Ae,La),e(La,mi),e(Ae,_i),j(Et,Ae,null),ln=!0},p(o,[v]){const ko={};v&2&&(ko.$$scope={dirty:v,ctx:o}),Ge.$set(ko);const Oa={};v&2&&(Oa.$$scope={dirty:v,ctx:o}),Be.$set(Oa);const Pa={};v&2&&(Pa.$$scope={dirty:v,ctx:o}),Ke.$set(Pa);const Ma={};v&2&&(Ma.$$scope={dirty:v,ctx:o}),Ye.$set(Ma);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:o}),Ze.$set(wo);const Sa={};v&2&&(Sa.$$scope={dirty:v,ctx:o}),tt.$set(Sa);const xo={};v&2&&(xo.$$scope={dirty:v,ctx:o}),ot.$set(xo);const Ra={};v&2&&(Ra.$$scope={dirty:v,ctx:o}),st.$set(Ra);const Ua={};v&2&&(Ua.$$scope={dirty:v,ctx:o}),rt.$set(Ua);const Ao={};v&2&&(Ao.$$scope={dirty:v,ctx:o}),it.$set(Ao);const Ca={};v&2&&(Ca.$$scope={dirty:v,ctx:o}),ct.$set(Ca);const Eo={};v&2&&(Eo.$$scope={dirty:v,ctx:o}),pt.$set(Eo);const za={};v&2&&(za.$$scope={dirty:v,ctx:o}),ht.$set(za);const L={};v&2&&(L.$$scope={dirty:v,ctx:o}),dt.$set(L);const jo={};v&2&&(jo.$$scope={dirty:v,ctx:o}),ft.$set(jo);const Va={};v&2&&(Va.$$scope={dirty:v,ctx:o}),ut.$set(Va);const Ho={};v&2&&(Ho.$$scope={dirty:v,ctx:o}),wt.$set(Ho);const Wa={};v&2&&(Wa.$$scope={dirty:v,ctx:o}),xt.$set(Wa);const Ee={};v&2&&(Ee.$$scope={dirty:v,ctx:o}),At.$set(Ee);const Ga={};v&2&&(Ga.$$scope={dirty:v,ctx:o}),Et.$set(Ga)},i(o){ln||(H(r.$$.fragment,o),H(J.$$.fragment,o),H(B.$$.fragment,o),H(se.$$.fragment,o),H($e.$$.fragment,o),H(It.$$.fragment,o),H(Tt.$$.fragment,o),H(Ge.$$.fragment,o),H(Lt.$$.fragment,o),H(Be.$$.fragment,o),H(Ot.$$.fragment,o),H(Ke.$$.fragment,o),H(Pt.$$.fragment,o),H(Mt.$$.fragment,o),H(St.$$.fragment,o),H(Rt.$$.fragment,o),H(Ye.$$.fragment,o),H(Ze.$$.fragment,o),H(Ut.$$.fragment,o),H(Ct.$$.fragment,o),H(tt.$$.fragment,o),H(ot.$$.fragment,o),H(Vt.$$.fragment,o),H(Wt.$$.fragment,o),H(Gt.$$.fragment,o),H(st.$$.fragment,o),H(Bt.$$.fragment,o),H(rt.$$.fragment,o),H(Qt.$$.fragment,o),H(it.$$.fragment,o),H(Xt.$$.fragment,o),H(Yt.$$.fragment,o),H(ct.$$.fragment,o),H(Zt.$$.fragment,o),H(eo.$$.fragment,o),H(pt.$$.fragment,o),H(to.$$.fragment,o),H(ht.$$.fragment,o),H(dt.$$.fragment,o),H(oo.$$.fragment,o),H(ft.$$.fragment,o),H(ut.$$.fragment,o),H(no.$$.fragment,o),H(so.$$.fragment,o),H(ro.$$.fragment,o),H(io.$$.fragment,o),H(lo.$$.fragment,o),H(co.$$.fragment,o),H(po.$$.fragment,o),H(ho.$$.fragment,o),H(fo.$$.fragment,o),H(mo.$$.fragment,o),H(_o.$$.fragment,o),H(bo.$$.fragment,o),H(wt.$$.fragment,o),H(vo.$$.fragment,o),H(xt.$$.fragment,o),H($o.$$.fragment,o),H(At.$$.fragment,o),H(yo.$$.fragment,o),H(Et.$$.fragment,o),ln=!0)},o(o){D(r.$$.fragment,o),D(J.$$.fragment,o),D(B.$$.fragment,o),D(se.$$.fragment,o),D($e.$$.fragment,o),D(It.$$.fragment,o),D(Tt.$$.fragment,o),D(Ge.$$.fragment,o),D(Lt.$$.fragment,o),D(Be.$$.fragment,o),D(Ot.$$.fragment,o),D(Ke.$$.fragment,o),D(Pt.$$.fragment,o),D(Mt.$$.fragment,o),D(St.$$.fragment,o),D(Rt.$$.fragment,o),D(Ye.$$.fragment,o),D(Ze.$$.fragment,o),D(Ut.$$.fragment,o),D(Ct.$$.fragment,o),D(tt.$$.fragment,o),D(ot.$$.fragment,o),D(Vt.$$.fragment,o),D(Wt.$$.fragment,o),D(Gt.$$.fragment,o),D(st.$$.fragment,o),D(Bt.$$.fragment,o),D(rt.$$.fragment,o),D(Qt.$$.fragment,o),D(it.$$.fragment,o),D(Xt.$$.fragment,o),D(Yt.$$.fragment,o),D(ct.$$.fragment,o),D(Zt.$$.fragment,o),D(eo.$$.fragment,o),D(pt.$$.fragment,o),D(to.$$.fragment,o),D(ht.$$.fragment,o),D(dt.$$.fragment,o),D(oo.$$.fragment,o),D(ft.$$.fragment,o),D(ut.$$.fragment,o),D(no.$$.fragment,o),D(so.$$.fragment,o),D(ro.$$.fragment,o),D(io.$$.fragment,o),D(lo.$$.fragment,o),D(co.$$.fragment,o),D(po.$$.fragment,o),D(ho.$$.fragment,o),D(fo.$$.fragment,o),D(mo.$$.fragment,o),D(_o.$$.fragment,o),D(bo.$$.fragment,o),D(wt.$$.fragment,o),D(vo.$$.fragment,o),D(xt.$$.fragment,o),D($o.$$.fragment,o),D(At.$$.fragment,o),D(yo.$$.fragment,o),D(Et.$$.fragment,o),ln=!1},d(o){t(g),o&&t($),o&&t(u),F(r),o&&t(k),o&&t(q),o&&t(M),o&&t(b),o&&t(W),o&&t(z),o&&t(Z),F(J,o),o&&t(ie),o&&t(ee),o&&t(_e),F(B,o),o&&t(oe),o&&t(K),o&&t(be),o&&t(I),F(se),F($e),F(It),F(Tt),F(Ge),F(Lt),F(Be),F(Ot),F(Ke),F(Pt),F(Mt),F(St),F(Rt),F(Ye),F(Ze),F(Ut),F(Ct),F(tt),F(ot),F(Vt),F(Wt),F(Gt),F(st),F(Bt),F(rt),F(Qt),F(it),F(Xt),F(Yt),F(ct),F(Zt),F(eo),F(pt),F(to),F(ht),F(dt),F(oo),F(ft),F(ut),F(no),o&&t(Ba),o&&t(Re),F(so),o&&t(Ka),o&&t(Ue),F(ro),o&&t(Ja),o&&t(ye),F(io),o&&t(Qa),o&&t(Ce),F(lo),o&&t(Xa),o&&t(ze),F(co),o&&t(Ya),o&&t(go),o&&t(Za),o&&t(bt),o&&t(en),o&&t(re),F(po),F(ho),F(fo),F(mo),o&&t(tn),o&&t(Ve),F(_o),o&&t(on),o&&t(kt),o&&t(an),o&&t(ke),F(bo),F(wt),o&&t(nn),o&&t(we),F(vo),F(xt),o&&t(sn),o&&t(xe),F($o),F(At),o&&t(rn),o&&t(Ae),F(yo),F(Et)}}}const Ul={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Cl(S){return vl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jl extends ul{constructor(g){super();ml(this,g,Cl,Rl,_l,{})}}export{Jl as default,Ul as metadata};
