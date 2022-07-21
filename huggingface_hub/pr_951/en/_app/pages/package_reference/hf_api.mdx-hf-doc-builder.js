import{S as il,i as ll,s as cl,e as a,k as p,w as A,t as i,M as gl,c as n,d as t,m as h,a as s,x as E,h as l,b as y,G as e,g as _,y as j,q as H,o as D,B as q,v as pl,L as Oe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Te}from"../../chunks/Tip-hf-doc-builder.js";import{D as C}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ue}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as hi}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Le}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),F=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function dl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,re,ee,Q,X,Y,me,_e;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),F=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),M=p(),b=a("li"),O=a("a"),U=i("RepositoryNotFoundError"),R=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=i("private"),z=i(" and you do not have access."),G=p(),Z=a("li"),J=a("a"),re=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),Q=p(),X=a("li"),Y=a("a"),me=i("EntryNotFoundError"),_e=i(`
If the file to download cannot be found.`),this.h()},l(B){g=n(B,"P",{});var oe=s(g);$=l(oe,"Raises the following errors:"),oe.forEach(t),u=h(B),c=n(B,"UL",{});var K=s(c);d=n(K,"LI",{});var je=s(d);r=n(je,"A",{href:!0,rel:!0});var ae=s(r);m=n(ae,"CODE",{});var Pe=s(m);N=l(Pe,"HTTPError"),Pe.forEach(t),ae.forEach(t),f=l(je,`
if the HuggingFace API returned an error`),je.forEach(t),k=h(K),F=n(K,"LI",{});var He=s(F);w=n(He,"A",{href:!0,rel:!0});var be=s(w);x=n(be,"CODE",{});var I=s(x);T=l(I,"ValueError"),I.forEach(t),be.forEach(t),P=l(He,`
if some parameter value is invalid`),He.forEach(t),M=h(K),b=n(K,"LI",{});var ne=s(b);O=n(ne,"A",{href:!0});var Ho=s(O);U=l(Ho,"RepositoryNotFoundError"),Ho.forEach(t),R=l(ne,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ne,"CODE",{});var ve=s(V);W=l(ve,"private"),ve.forEach(t),z=l(ne," and you do not have access."),ne.forEach(t),G=h(K),Z=n(K,"LI",{});var $e=s(Z);J=n($e,"A",{href:!0});var Do=s(J);re=l(Do,"RevisionNotFoundError"),Do.forEach(t),ee=l($e,`
If the revision to download from cannot be found.`),$e.forEach(t),Q=h(K),X=n(K,"LI",{});var Me=s(X);Y=n(Me,"A",{href:!0});var qo=s(Y);me=l(qo,"EntryNotFoundError"),qo.forEach(t),_e=l(Me,`
If the file to download cannot be found.`),Me.forEach(t),K.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow"),y(O,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError"),y(Y,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.EntryNotFoundError")},m(B,oe){_(B,g,oe),e(g,$),_(B,u,oe),_(B,c,oe),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,F),e(F,w),e(w,x),e(x,T),e(F,P),e(c,M),e(c,b),e(b,O),e(O,U),e(b,R),e(b,V),e(V,W),e(b,z),e(c,G),e(c,Z),e(Z,J),e(J,re),e(Z,ee),e(c,Q),e(c,X),e(X,Y),e(Y,me),e(X,_e)},d(B){B&&t(g),B&&t(u),B&&t(c)}}}function fl(S){let g,$,u,c,d,r,m,N,f,k,F;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),F=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function ul(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("filter"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var F=s(u);c=l(F,"filter"),F.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Oe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),q(m,f)}}}function ml(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("search"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var F=s(u);c=l(F,"search"),F.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Oe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),q(m,f)}}}function _l(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("filter"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var F=s(u);c=l(F,"filter"),F.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Oe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),q(m,f)}}}function bl(S){let g,$,u,c,d,r,m,N;return m=new ue({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){g=a("p"),$=i("Example usage with the "),u=a("code"),c=i("search"),d=i(" argument:"),r=p(),A(m.$$.fragment)},l(f){g=n(f,"P",{});var k=s(g);$=l(k,"Example usage with the "),u=n(k,"CODE",{});var F=s(u);c=l(F,"search"),F.forEach(t),d=l(k," argument:"),k.forEach(t),r=h(f),E(m.$$.fragment,f)},m(f,k){_(f,g,k),e(g,$),e(g,u),e(u,c),e(g,d),_(f,r,k),j(m,f,k),N=!0},p:Oe,i(f){N||(H(m.$$.fragment,f),N=!0)},o(f){D(m.$$.fragment,f),N=!1},d(f){f&&t(g),f&&t(r),q(m,f)}}}function vl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),F=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function $l(S){let g,$,u,c,d,r,m,N,f,k,F;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),F=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function yl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),F=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function kl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),w=p(),x=a("li"),T=a("a"),P=i("RevisionNotFoundError"),M=i(`
If the revision to download from cannot be found.`),this.h()},l(b){g=n(b,"P",{});var O=s(g);$=l(O,"Raises the following errors:"),O.forEach(t),u=h(b),c=n(b,"UL",{});var U=s(c);d=n(U,"LI",{});var R=s(d);r=n(R,"A",{href:!0});var V=s(r);m=l(V,"RepositoryNotFoundError"),V.forEach(t),N=l(R,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(R,"CODE",{});var W=s(f);k=l(W,"private"),W.forEach(t),F=l(R," and you do not have access."),R.forEach(t),w=h(U),x=n(U,"LI",{});var z=s(x);T=n(z,"A",{href:!0});var G=s(T);P=l(G,"RevisionNotFoundError"),G.forEach(t),M=l(z,`
If the revision to download from cannot be found.`),z.forEach(t),U.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(T,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(b,O){_(b,g,O),e(g,$),_(b,u,O),_(b,c,O),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F),e(c,w),e(c,x),e(x,T),e(T,P),e(x,M)},d(b){b&&t(g),b&&t(u),b&&t(c)}}}function wl(S){let g,$,u,c,d,r,m,N,f,k,F;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=i("RepositoryNotFoundError"),N=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=a("code"),k=i("private"),F=i(" and you do not have access."),this.h()},l(w){g=n(w,"P",{});var x=s(g);$=l(x,"Raises the following errors:"),x.forEach(t),u=h(w),c=n(w,"UL",{});var T=s(c);d=n(T,"LI",{});var P=s(d);r=n(P,"A",{href:!0});var M=s(r);m=l(M,"RepositoryNotFoundError"),M.forEach(t),N=l(P,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),f=n(P,"CODE",{});var b=s(f);k=l(b,"private"),b.forEach(t),F=l(P," and you do not have access."),P.forEach(t),T.forEach(t),this.h()},h(){y(r,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError")},m(w,x){_(w,g,x),e(g,$),_(w,u,x),_(w,c,x),e(c,d),e(d,r),e(r,m),e(d,N),e(d,f),e(f,k),e(d,F)},d(w){w&&t(g),w&&t(u),w&&t(c)}}}function xl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,re,ee;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),F=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),M=p(),b=a("li"),O=a("a"),U=i("RepositoryNotFoundError"),R=i(`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=a("code"),W=i("private"),z=i(" and you do not have access."),G=p(),Z=a("li"),J=a("a"),re=i("RevisionNotFoundError"),ee=i(`
If the revision to download from cannot be found.`),this.h()},l(Q){g=n(Q,"P",{});var X=s(g);$=l(X,"Raises the following errors:"),X.forEach(t),u=h(Q),c=n(Q,"UL",{});var Y=s(c);d=n(Y,"LI",{});var me=s(d);r=n(me,"A",{href:!0,rel:!0});var _e=s(r);m=n(_e,"CODE",{});var B=s(m);N=l(B,"HTTPError"),B.forEach(t),_e.forEach(t),f=l(me,`
if the HuggingFace API returned an error`),me.forEach(t),k=h(Y),F=n(Y,"LI",{});var oe=s(F);w=n(oe,"A",{href:!0,rel:!0});var K=s(w);x=n(K,"CODE",{});var je=s(x);T=l(je,"ValueError"),je.forEach(t),K.forEach(t),P=l(oe,`
if some parameter value is invalid`),oe.forEach(t),M=h(Y),b=n(Y,"LI",{});var ae=s(b);O=n(ae,"A",{href:!0});var Pe=s(O);U=l(Pe,"RepositoryNotFoundError"),Pe.forEach(t),R=l(ae,`
If the repository to download from cannot be found. This may be because it doesn\u2019t exist,
or because it is set to `),V=n(ae,"CODE",{});var He=s(V);W=l(He,"private"),He.forEach(t),z=l(ae," and you do not have access."),ae.forEach(t),G=h(Y),Z=n(Y,"LI",{});var be=s(Z);J=n(be,"A",{href:!0});var I=s(J);re=l(I,"RevisionNotFoundError"),I.forEach(t),ee=l(be,`
If the revision to download from cannot be found.`),be.forEach(t),Y.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow"),y(O,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RepositoryNotFoundError"),y(J,"href","/docs/huggingface_hub/pr_951/en/package_reference/utilities#huggingface_hub.utils.RevisionNotFoundError")},m(Q,X){_(Q,g,X),e(g,$),_(Q,u,X),_(Q,c,X),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,F),e(F,w),e(w,x),e(x,T),e(F,P),e(c,M),e(c,b),e(b,O),e(O,U),e(b,R),e(b,V),e(V,W),e(b,z),e(c,G),e(c,Z),e(Z,J),e(J,re),e(Z,ee)},d(Q){Q&&t(g),Q&&t(u),Q&&t(c)}}}function Al(S){let g,$,u,c,d;return c=new ue({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/refs%2Fpr%2F1/remote/file/path.h5&quot;</span>`}}),{c(){g=a("p"),$=i("Example usage:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example usage:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Oe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),q(c,r)}}}function El(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P;return{c(){g=a("p"),$=i("Raises the following errors:"),u=p(),c=a("ul"),d=a("li"),r=a("a"),m=a("code"),N=i("HTTPError"),f=i(`
if the HuggingFace API returned an error`),k=p(),F=a("li"),w=a("a"),x=a("code"),T=i("ValueError"),P=i(`
if some parameter value is invalid`),this.h()},l(M){g=n(M,"P",{});var b=s(g);$=l(b,"Raises the following errors:"),b.forEach(t),u=h(M),c=n(M,"UL",{});var O=s(c);d=n(O,"LI",{});var U=s(d);r=n(U,"A",{href:!0,rel:!0});var R=s(r);m=n(R,"CODE",{});var V=s(m);N=l(V,"HTTPError"),V.forEach(t),R.forEach(t),f=l(U,`
if the HuggingFace API returned an error`),U.forEach(t),k=h(O),F=n(O,"LI",{});var W=s(F);w=n(W,"A",{href:!0,rel:!0});var z=s(w);x=n(z,"CODE",{});var G=s(x);T=l(G,"ValueError"),G.forEach(t),z.forEach(t),P=l(W,`
if some parameter value is invalid`),W.forEach(t),O.forEach(t),this.h()},h(){y(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),y(r,"rel","nofollow"),y(w,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),y(w,"rel","nofollow")},m(M,b){_(M,g,b),e(g,$),_(M,u,b),_(M,c,b),e(c,d),e(d,r),e(r,m),e(m,N),e(d,f),e(c,k),e(c,F),e(F,w),e(w,x),e(x,T),e(F,P)},d(M){M&&t(g),M&&t(u),M&&t(c)}}}function jl(S){let g,$,u,c,d;return c=new ue({props:{code:`upload_folder(
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
`}}),{c(){g=a("p"),$=i("Example usage:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example usage:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Oe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),q(c,r)}}}function Hl(S){let g,$,u,c,d;return c=new ue({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){g=a("p"),$=i("Examples:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Examples:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Oe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),q(c,r)}}}function Dl(S){let g,$;return g=new ue({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){A(g.$$.fragment)},l(u){E(g.$$.fragment,u)},m(u,c){j(g,u,c),$=!0},p:Oe,i(u){$||(H(g.$$.fragment,u),$=!0)},o(u){D(g.$$.fragment,u),$=!1},d(u){q(g,u)}}}function ql(S){let g,$,u,c,d;return c=new ue({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){g=a("p"),$=i("Example:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Oe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),q(c,r)}}}function Fl(S){let g,$,u,c,d;return c=new ue({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){g=a("p"),$=i("Example:"),u=p(),A(c.$$.fragment)},l(r){g=n(r,"P",{});var m=s(g);$=l(m,"Example:"),m.forEach(t),u=h(r),E(c.$$.fragment,r)},m(r,m){_(r,g,m),e(g,$),_(r,u,m),j(c,r,m),d=!0},p:Oe,i(r){d||(H(c.$$.fragment,r),d=!0)},o(r){D(c.$$.fragment,r),d=!1},d(r){r&&t(g),r&&t(u),q(c,r)}}}function Nl(S){let g,$,u,c,d,r,m,N,f,k,F,w,x,T,P,M,b,O,U,R,V,W,z,G,Z,J,re,ee,Q,X,Y,me,_e,B,oe,K,je,ae,Pe,He,be,I,ne,Ho,ve,$e,Do,Me,qo,Hn,Ve,It,Dn,Co,qn,Fn,ie,Tt,Nn,zo,In,Tn,Vo,Ln,On,We,Pn,De,Lt,Mn,Wo,Sn,Rn,Ge,Un,qe,Ot,Cn,Go,zn,Vn,Be,Wn,Ke,Pt,Gn,Bo,Bn,Kn,Je,Mt,Jn,Ko,Qn,Xn,Qe,St,Yn,Jo,Zn,es,le,Rt,ts,Qo,os,as,Xe,ns,Ye,ss,Ze,Ut,rs,Xo,is,ls,ce,Ct,cs,Yo,gs,ps,et,hs,tt,ds,ot,zt,fs,Zo,us,ms,at,Vt,_s,ea,bs,vs,ge,Wt,$s,ta,ys,ks,oa,ws,xs,nt,As,pe,Gt,Es,aa,js,Hs,Bt,Ds,Kt,qs,Fs,Ns,st,Is,Fe,Jt,Ts,na,Ls,Os,rt,Ps,it,Qt,Ms,sa,Ss,Rs,he,Xt,Us,ra,Cs,zs,ia,Vs,Ws,lt,Gs,ct,Yt,Bs,la,Ks,Js,Ne,Zt,Qs,ca,Xs,Ys,gt,Zs,de,eo,er,ga,tr,or,pt,ar,ht,nr,te,to,sr,pa,rr,ir,ha,lr,cr,oo,gr,da,pr,hr,dr,dt,fr,ft,ur,ut,ao,mr,fa,_r,Wa,Se,no,br,ua,vr,Ga,Re,so,$r,ma,yr,Ba,ye,ro,kr,_a,wr,xr,ba,Ar,Ka,Ue,io,Er,va,jr,Ja,Ce,mt,$a,lo,Hr,ya,Dr,Qa,co,ka,qr,Fr,Xa,_t,Nr,Fo,Ir,Tr,Ya,se,go,Lr,bt,po,Or,wa,Pr,Mr,Ie,ho,Sr,xa,Rr,Ur,fo,Cr,Aa,zr,Vr,Wr,vt,uo,Gr,Ea,Br,Za,ze,$t,ja,mo,Kr,Ha,Jr,en,yt,Qr,Da,Xr,Yr,tn,ke,_o,Zr,qa,ei,ti,kt,on,we,bo,oi,Fa,ai,ni,wt,an,xe,vo,si,Na,ri,ii,xt,nn,Ae,$o,li,Ia,ci,gi,At,sn;return r=new hi({}),J=new ue({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),B=new ue({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),ne=new C({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L576"}}),$e=new C({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub._commit_api.CommitOperationAdd, huggingface_hub._commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1486",returnDescription:`
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
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1251",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),We=new Te({props:{$$slots:{default:[hl]},$$scope:{ctx:S}}}),Lt=new C({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2270"}}),Ge=new Te({props:{$$slots:{default:[dl]},$$scope:{ctx:S}}}),Ot=new C({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1616"}}),Be=new Te({props:{$$slots:{default:[fl]},$$scope:{ctx:S}}}),Pt=new C({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L697"}}),Mt=new C({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2348",returnDescription:`
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L915"}}),Xe=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[ul]},$$scope:{ctx:S}}}),Ye=new Le({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[ml]},$$scope:{ctx:S}}}),Ut=new C({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1080",returnDescription:`
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L707"}}),et=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[_l]},$$scope:{ctx:S}}}),tt=new Le({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[bl]},$$scope:{ctx:S}}}),zt=new C({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),Vt=new C({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"filter",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"datasets",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"models",val:": typing.Union[str, typing.Iterable[str], NoneType] = None"},{name:"linked",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.filter",description:`<strong>filter</strong> <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
`}}),Wt=new C({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"},{anchor:"huggingface_hub.HfApi.model_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1179",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><a
  href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.hf_api.ModelInfo"
>huggingface_hub.hf_api.ModelInfo</a></p>
`}}),nt=new Te({props:{$$slots:{default:[vl]},$$scope:{ctx:S}}}),Gt=new C({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1782"}}),st=new Te({props:{$$slots:{default:[$l]},$$scope:{ctx:S}}}),Jt=new C({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.repo_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1375",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),rt=new Te({props:{$$slots:{default:[yl]},$$scope:{ctx:S}}}),Qt=new C({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L670"}}),Xt=new C({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"files_metadata",val:": bool = False"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.space_info.files_metadata",description:`<strong>files_metadata</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to retrieve metadata for files in the repository
(size, LFS metadata, etc). Defaults to <code>False</code>.`,name:"files_metadata"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L1313",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),lt=new Te({props:{$$slots:{default:[kl]},$$scope:{ctx:S}}}),Yt=new C({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L682"}}),Zt=new C({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),gt=new Te({props:{$$slots:{default:[wl]},$$scope:{ctx:S}}}),eo=new C({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
`}}),pt=new Te({props:{$$slots:{default:[xl]},$$scope:{ctx:S}}}),ht=new Le({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Al]},$$scope:{ctx:S}}}),to=new C({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),dt=new Te({props:{$$slots:{default:[El]},$$scope:{ctx:S}}}),ft=new Le({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[jl]},$$scope:{ctx:S}}}),ao=new C({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L580"}}),no=new C({props:{name:"class huggingface_hub.hf_api.ModelInfo",anchor:"huggingface_hub.hf_api.ModelInfo",parameters:[{name:"modelId",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.List[str] = []"},{name:"pipeline_tag",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[typing.Dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.ModelInfo.modelId",description:`<strong>modelId</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of model repository.`,name:"modelId"},{anchor:"huggingface_hub.hf_api.ModelInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.ModelInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.ModelInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.ModelInfo.pipeline_tag",description:`<strong>pipeline_tag</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Pipeline tag to identify the correct widget.`,name:"pipeline_tag"},{anchor:"huggingface_hub.hf_api.ModelInfo.siblings",description:`<strong>siblings</strong> (<code>List[Dict]</code>, <em>optional</em>) &#x2014;
list of files that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.ModelInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.ModelInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.ModelInfo.config",description:`<strong>config</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Model configuration information`,name:"config"},{anchor:"huggingface_hub.hf_api.ModelInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L197"}}),so=new C({props:{name:"class huggingface_hub.hf_api.DatasetInfo",anchor:"huggingface_hub.hf_api.DatasetInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"tags",val:": typing.List[str] = []"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"description",val:": typing.Optional[str] = None"},{name:"citation",val:": typing.Optional[str] = None"},{name:"cardData",val:": typing.Optional[dict] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.DatasetInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
ID of dataset repository.`,name:"id"},{anchor:"huggingface_hub.hf_api.DatasetInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.DatasetInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.DatasetInfo.tags",description:`<strong>tags</strong> (<code>Listr[str]</code>, <em>optional</em>) &#x2014;
List of tags.`,name:"tags"},{anchor:"huggingface_hub.hf_api.DatasetInfo.siblings",description:`<strong>siblings</strong> (<code>List[Dict]</code>, <em>optional</em>) &#x2014;
list of files that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.DatasetInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.DatasetInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.DatasetInfo.description",description:`<strong>description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Description of the dataset`,name:"description"},{anchor:"huggingface_hub.hf_api.DatasetInfo.citation",description:`<strong>citation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Dataset citation`,name:"citation"},{anchor:"huggingface_hub.hf_api.DatasetInfo.cardData",description:`<strong>cardData</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Metadata of the model card as a dictionary.`,name:"cardData"},{anchor:"huggingface_hub.hf_api.DatasetInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L265"}}),ro=new C({props:{name:"class huggingface_hub.hf_api.SpaceInfo",anchor:"huggingface_hub.hf_api.SpaceInfo",parameters:[{name:"id",val:": typing.Optional[str] = None"},{name:"sha",val:": typing.Optional[str] = None"},{name:"lastModified",val:": typing.Optional[str] = None"},{name:"siblings",val:": typing.Optional[typing.List[typing.Dict]] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.SpaceInfo.id",description:`<strong>id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
id of space`,name:"id"},{anchor:"huggingface_hub.hf_api.SpaceInfo.sha",description:`<strong>sha</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo sha at this particular revision`,name:"sha"},{anchor:"huggingface_hub.hf_api.SpaceInfo.lastModified",description:`<strong>lastModified</strong> (<code>str</code>, <em>optional</em>) &#x2014;
date of last commit to repo`,name:"lastModified"},{anchor:"huggingface_hub.hf_api.SpaceInfo.siblings",description:`<strong>siblings</strong> (<code>List[Dict]</code>, <em>optional</em>) &#x2014;
list of files that constitute the Space`,name:"siblings"},{anchor:"huggingface_hub.hf_api.SpaceInfo.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
is the repo private`,name:"private"},{anchor:"huggingface_hub.hf_api.SpaceInfo.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
repo author`,name:"author"},{anchor:"huggingface_hub.hf_api.SpaceInfo.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Kwargs that will be become attributes of the class.`,name:"kwargs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L339"}}),io=new C({props:{name:"class huggingface_hub.hf_api.RepoFile",anchor:"huggingface_hub.hf_api.RepoFile",parameters:[{name:"rfilename",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"huggingface_hub.hf_api.RepoFile.rfilename",description:`<strong>rfilename</strong> (str) &#x2014;
file name, relative to the repo root. This is the only attribute
that&#x2019;s guaranteed to be here, but under certain conditions there can
certain other stuff.`,name:"rfilename"},{anchor:"huggingface_hub.hf_api.RepoFile.size",description:`<strong>size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The file&#x2019;s size, in bytes. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"size"},{anchor:"huggingface_hub.hf_api.RepoFile.blob_id",description:`<strong>blob_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file&#x2019;s git OID. This attribute is present when <code>files_metadata</code> argument
of <code>repo_info</code> is set to <code>True</code>. It&#x2019;s <code>None</code> otherwise.`,name:"blob_id"},{anchor:"huggingface_hub.hf_api.RepoFile.lfs",description:`<strong>lfs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
The file&#x2019;s LFS metadata (has two keys: <code>sha256</code> and <code>size</code>). This attribute is present when
<code>files_metadata</code> argument of <code>repo_info</code> is set to <code>True</code> and the file is stored
with Git LFS. It&#x2019;s <code>None</code> otherwise.`,name:"lfs"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L159"}}),lo=new hi({}),go=new C({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2383"}}),po=new C({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2420"}}),ho=new C({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2399",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),uo=new C({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L2386"}}),mo=new hi({}),_o=new C({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),kt=new Le({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[Hl]},$$scope:{ctx:S}}}),bo=new C({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),wt=new Le({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Dl]},$$scope:{ctx:S}}}),vo=new C({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L464"}}),xt=new Le({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[ql]},$$scope:{ctx:S}}}),$o=new C({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_951/src/huggingface_hub/hf_api.py#L426"}}),At=new Le({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Fl]},$$scope:{ctx:S}}}),{c(){g=a("meta"),$=p(),u=a("h1"),c=a("a"),d=a("span"),A(r.$$.fragment),m=p(),N=a("span"),f=i("Hugging Face Hub API"),k=p(),F=a("p"),w=i("Below is the documentation for the "),x=a("code"),T=i("HfApi"),P=i(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),M=p(),b=a("p"),O=i("All methods from the "),U=a("code"),R=i("HfApi"),V=i(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),W=p(),z=a("p"),G=i("The following approach uses the method from the root of the package:"),Z=p(),A(J.$$.fragment),re=p(),ee=a("p"),Q=i("The following approach uses the "),X=a("code"),Y=i("HfApi"),me=i(" class:"),_e=p(),A(B.$$.fragment),oe=p(),K=a("p"),je=i("Using the "),ae=a("code"),Pe=i("HfApi"),He=i(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),be=p(),I=a("div"),A(ne.$$.fragment),Ho=p(),ve=a("div"),A($e.$$.fragment),Do=p(),Me=a("p"),qo=i("Creates a commit in the given repo, deleting & uploading files as needed."),Hn=p(),Ve=a("div"),A(It.$$.fragment),Dn=p(),Co=a("p"),qn=i("Create an empty repo on the HuggingFace Hub."),Fn=p(),ie=a("div"),A(Tt.$$.fragment),Nn=p(),zo=a("p"),In=i("Get info on one specific dataset on huggingface.co."),Tn=p(),Vo=a("p"),Ln=i("Dataset can be private if you pass an acceptable token."),On=p(),A(We.$$.fragment),Pn=p(),De=a("div"),A(Lt.$$.fragment),Mn=p(),Wo=a("p"),Sn=i("Deletes a file in the given repo."),Rn=p(),A(Ge.$$.fragment),Un=p(),qe=a("div"),A(Ot.$$.fragment),Cn=p(),Go=a("p"),zn=i("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Vn=p(),A(Be.$$.fragment),Wn=p(),Ke=a("div"),A(Pt.$$.fragment),Gn=p(),Bo=a("p"),Bn=i("Gets all valid dataset tags as a nested namespace object."),Kn=p(),Je=a("div"),A(Mt.$$.fragment),Jn=p(),Ko=a("p"),Qn=i(`Returns the repository name for a given model ID and optional
organization.`),Xn=p(),Qe=a("div"),A(St.$$.fragment),Yn=p(),Jo=a("p"),Zn=i("Gets all valid model tags as a nested namespace object"),es=p(),le=a("div"),A(Rt.$$.fragment),ts=p(),Qo=a("p"),os=i("Get the public list of all the datasets on huggingface.co"),as=p(),A(Xe.$$.fragment),ns=p(),A(Ye.$$.fragment),ss=p(),Ze=a("div"),A(Ut.$$.fragment),rs=p(),Xo=a("p"),is=i("Get the public list of all the metrics on huggingface.co"),ls=p(),ce=a("div"),A(Ct.$$.fragment),cs=p(),Yo=a("p"),gs=i("Get the public list of all the models on huggingface.co"),ps=p(),A(et.$$.fragment),hs=p(),A(tt.$$.fragment),ds=p(),ot=a("div"),A(zt.$$.fragment),fs=p(),Zo=a("p"),us=i("Get the list of files in a given repo."),ms=p(),at=a("div"),A(Vt.$$.fragment),_s=p(),ea=a("p"),bs=i("Get the public list of all Spaces on huggingface.co"),vs=p(),ge=a("div"),A(Wt.$$.fragment),$s=p(),ta=a("p"),ys=i("Get info on one specific model on huggingface.co"),ks=p(),oa=a("p"),ws=i("Model can be private if you pass an acceptable token or are logged in."),xs=p(),A(nt.$$.fragment),As=p(),pe=a("div"),A(Gt.$$.fragment),Es=p(),aa=a("p"),js=i("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Hs=p(),Bt=a("p"),Ds=i(`Note there are certain limitations. For more information about moving
repositories, please see
`),Kt=a("a"),qs=i("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Fs=i("."),Ns=p(),A(st.$$.fragment),Is=p(),Fe=a("div"),A(Jt.$$.fragment),Ts=p(),na=a("p"),Ls=i("Get the info object for a given repo of a given type."),Os=p(),A(rt.$$.fragment),Ps=p(),it=a("div"),A(Qt.$$.fragment),Ms=p(),sa=a("p"),Ss=i(`Saves the passed access token so git can correctly authenticate the
user.`),Rs=p(),he=a("div"),A(Xt.$$.fragment),Us=p(),ra=a("p"),Cs=i("Get info on one specific Space on huggingface.co."),zs=p(),ia=a("p"),Vs=i("Space can be private if you pass an acceptable token."),Ws=p(),A(lt.$$.fragment),Gs=p(),ct=a("div"),A(Yt.$$.fragment),Bs=p(),la=a("p"),Ks=i("Resets the user\u2019s access token."),Js=p(),Ne=a("div"),A(Zt.$$.fragment),Qs=p(),ca=a("p"),Xs=i("Update the visibility setting of a repository."),Ys=p(),A(gt.$$.fragment),Zs=p(),de=a("div"),A(eo.$$.fragment),er=p(),ga=a("p"),tr=i(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),or=p(),A(pt.$$.fragment),ar=p(),A(ht.$$.fragment),nr=p(),te=a("div"),A(to.$$.fragment),sr=p(),pa=a("p"),rr=i(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),ir=p(),ha=a("p"),lr=i(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),cr=p(),oo=a("p"),gr=i("Uses "),da=a("code"),pr=i("HfApi.create_commit"),hr=i(" under the hood."),dr=p(),A(dt.$$.fragment),fr=p(),A(ft.$$.fragment),ur=p(),ut=a("div"),A(ao.$$.fragment),mr=p(),fa=a("p"),_r=i("Call HF API to know \u201Cwhoami\u201D."),Wa=p(),Se=a("div"),A(no.$$.fragment),br=p(),ua=a("p"),vr=i("Info about a model accessible from huggingface.co"),Ga=p(),Re=a("div"),A(so.$$.fragment),$r=p(),ma=a("p"),yr=i("Info about a dataset accessible from huggingface.co"),Ba=p(),ye=a("div"),A(ro.$$.fragment),kr=p(),_a=a("p"),wr=i("Info about a Space accessible from huggingface.co"),xr=p(),ba=a("p"),Ar=i(`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Ka=p(),Ue=a("div"),A(io.$$.fragment),Er=p(),va=a("p"),jr=i(`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),Ja=p(),Ce=a("h2"),mt=a("a"),$a=a("span"),A(lo.$$.fragment),Hr=p(),ya=a("span"),Dr=i("Hugging Face local storage"),Qa=p(),co=a("p"),ka=a("code"),qr=i("huggingface_hub"),Fr=i(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Xa=p(),_t=a("p"),Nr=i("It does this using the "),Fo=a("a"),Ir=i("HfFolder"),Tr=i(" utility, which saves data at the root of the user."),Ya=p(),se=a("div"),A(go.$$.fragment),Lr=p(),bt=a("div"),A(po.$$.fragment),Or=p(),wa=a("p"),Pr=i("Deletes the token from storage. Does not fail if token does not exist."),Mr=p(),Ie=a("div"),A(ho.$$.fragment),Sr=p(),xa=a("p"),Rr=i("Get token or None if not existent."),Ur=p(),fo=a("p"),Cr=i("Note that a token can be also provided using the "),Aa=a("code"),zr=i("HUGGING_FACE_HUB_TOKEN"),Vr=i(`
environment variable.`),Wr=p(),vt=a("div"),A(uo.$$.fragment),Gr=p(),Ea=a("p"),Br=i("Save token, creating folder as needed."),Za=p(),ze=a("h2"),$t=a("a"),ja=a("span"),A(mo.$$.fragment),Kr=p(),Ha=a("span"),Jr=i("Filtering helpers"),en=p(),yt=a("p"),Qr=i("Some helpers to filter repositories on the Hub are available in the "),Da=a("code"),Xr=i("huggingface_hub"),Yr=i(" package."),tn=p(),ke=a("div"),A(_o.$$.fragment),Zr=p(),qa=a("p"),ei=i(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ti=p(),A(kt.$$.fragment),on=p(),we=a("div"),A(bo.$$.fragment),oi=p(),Fa=a("p"),ai=i(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ni=p(),A(wt.$$.fragment),an=p(),xe=a("div"),A(vo.$$.fragment),si=p(),Na=a("p"),ri=i(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ii=p(),A(xt.$$.fragment),nn=p(),Ae=a("div"),A($o.$$.fragment),li=p(),Ia=a("p"),ci=i(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),gi=p(),A(At.$$.fragment),this.h()},l(o){const v=gl('[data-svelte="svelte-1phssyn"]',document.head);g=n(v,"META",{name:!0,content:!0}),v.forEach(t),$=h(o),u=n(o,"H1",{class:!0});var yo=s(u);c=n(yo,"A",{id:!0,class:!0,href:!0});var Ta=s(c);d=n(Ta,"SPAN",{});var La=s(d);E(r.$$.fragment,La),La.forEach(t),Ta.forEach(t),m=h(yo),N=n(yo,"SPAN",{});var Oa=s(N);f=l(Oa,"Hugging Face Hub API"),Oa.forEach(t),yo.forEach(t),k=h(o),F=n(o,"P",{});var ko=s(F);w=l(ko,"Below is the documentation for the "),x=n(ko,"CODE",{});var Pa=s(x);T=l(Pa,"HfApi"),Pa.forEach(t),P=l(ko,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),ko.forEach(t),M=h(o),b=n(o,"P",{});var wo=s(b);O=l(wo,"All methods from the "),U=n(wo,"CODE",{});var Ma=s(U);R=l(Ma,"HfApi"),Ma.forEach(t),V=l(wo,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),wo.forEach(t),W=h(o),z=n(o,"P",{});var Sa=s(z);G=l(Sa,"The following approach uses the method from the root of the package:"),Sa.forEach(t),Z=h(o),E(J.$$.fragment,o),re=h(o),ee=n(o,"P",{});var xo=s(ee);Q=l(xo,"The following approach uses the "),X=n(xo,"CODE",{});var Ra=s(X);Y=l(Ra,"HfApi"),Ra.forEach(t),me=l(xo," class:"),xo.forEach(t),_e=h(o),E(B.$$.fragment,o),oe=h(o),K=n(o,"P",{});var Ao=s(K);je=l(Ao,"Using the "),ae=n(Ao,"CODE",{});var Ua=s(ae);Pe=l(Ua,"HfApi"),Ua.forEach(t),He=l(Ao," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Ao.forEach(t),be=h(o),I=n(o,"DIV",{class:!0});var L=s(I);E(ne.$$.fragment,L),Ho=h(L),ve=n(L,"DIV",{class:!0});var Eo=s(ve);E($e.$$.fragment,Eo),Do=h(Eo),Me=n(Eo,"P",{});var Ca=s(Me);qo=l(Ca,"Creates a commit in the given repo, deleting & uploading files as needed."),Ca.forEach(t),Eo.forEach(t),Hn=h(L),Ve=n(L,"DIV",{class:!0});var jo=s(Ve);E(It.$$.fragment,jo),Dn=h(jo),Co=n(jo,"P",{});var za=s(Co);qn=l(za,"Create an empty repo on the HuggingFace Hub."),za.forEach(t),jo.forEach(t),Fn=h(L),ie=n(L,"DIV",{class:!0});var Ee=s(ie);E(Tt.$$.fragment,Ee),Nn=h(Ee),zo=n(Ee,"P",{});var Va=s(zo);In=l(Va,"Get info on one specific dataset on huggingface.co."),Va.forEach(t),Tn=h(Ee),Vo=n(Ee,"P",{});var di=s(Vo);Ln=l(di,"Dataset can be private if you pass an acceptable token."),di.forEach(t),On=h(Ee),E(We.$$.fragment,Ee),Ee.forEach(t),Pn=h(L),De=n(L,"DIV",{class:!0});var No=s(De);E(Lt.$$.fragment,No),Mn=h(No),Wo=n(No,"P",{});var fi=s(Wo);Sn=l(fi,"Deletes a file in the given repo."),fi.forEach(t),Rn=h(No),E(Ge.$$.fragment,No),No.forEach(t),Un=h(L),qe=n(L,"DIV",{class:!0});var Io=s(qe);E(Ot.$$.fragment,Io),Cn=h(Io),Go=n(Io,"P",{});var ui=s(Go);zn=l(ui,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ui.forEach(t),Vn=h(Io),E(Be.$$.fragment,Io),Io.forEach(t),Wn=h(L),Ke=n(L,"DIV",{class:!0});var rn=s(Ke);E(Pt.$$.fragment,rn),Gn=h(rn),Bo=n(rn,"P",{});var mi=s(Bo);Bn=l(mi,"Gets all valid dataset tags as a nested namespace object."),mi.forEach(t),rn.forEach(t),Kn=h(L),Je=n(L,"DIV",{class:!0});var ln=s(Je);E(Mt.$$.fragment,ln),Jn=h(ln),Ko=n(ln,"P",{});var _i=s(Ko);Qn=l(_i,`Returns the repository name for a given model ID and optional
organization.`),_i.forEach(t),ln.forEach(t),Xn=h(L),Qe=n(L,"DIV",{class:!0});var cn=s(Qe);E(St.$$.fragment,cn),Yn=h(cn),Jo=n(cn,"P",{});var bi=s(Jo);Zn=l(bi,"Gets all valid model tags as a nested namespace object"),bi.forEach(t),cn.forEach(t),es=h(L),le=n(L,"DIV",{class:!0});var Et=s(le);E(Rt.$$.fragment,Et),ts=h(Et),Qo=n(Et,"P",{});var vi=s(Qo);os=l(vi,"Get the public list of all the datasets on huggingface.co"),vi.forEach(t),as=h(Et),E(Xe.$$.fragment,Et),ns=h(Et),E(Ye.$$.fragment,Et),Et.forEach(t),ss=h(L),Ze=n(L,"DIV",{class:!0});var gn=s(Ze);E(Ut.$$.fragment,gn),rs=h(gn),Xo=n(gn,"P",{});var $i=s(Xo);is=l($i,"Get the public list of all the metrics on huggingface.co"),$i.forEach(t),gn.forEach(t),ls=h(L),ce=n(L,"DIV",{class:!0});var jt=s(ce);E(Ct.$$.fragment,jt),cs=h(jt),Yo=n(jt,"P",{});var yi=s(Yo);gs=l(yi,"Get the public list of all the models on huggingface.co"),yi.forEach(t),ps=h(jt),E(et.$$.fragment,jt),hs=h(jt),E(tt.$$.fragment,jt),jt.forEach(t),ds=h(L),ot=n(L,"DIV",{class:!0});var pn=s(ot);E(zt.$$.fragment,pn),fs=h(pn),Zo=n(pn,"P",{});var ki=s(Zo);us=l(ki,"Get the list of files in a given repo."),ki.forEach(t),pn.forEach(t),ms=h(L),at=n(L,"DIV",{class:!0});var hn=s(at);E(Vt.$$.fragment,hn),_s=h(hn),ea=n(hn,"P",{});var wi=s(ea);bs=l(wi,"Get the public list of all Spaces on huggingface.co"),wi.forEach(t),hn.forEach(t),vs=h(L),ge=n(L,"DIV",{class:!0});var Ht=s(ge);E(Wt.$$.fragment,Ht),$s=h(Ht),ta=n(Ht,"P",{});var xi=s(ta);ys=l(xi,"Get info on one specific model on huggingface.co"),xi.forEach(t),ks=h(Ht),oa=n(Ht,"P",{});var Ai=s(oa);ws=l(Ai,"Model can be private if you pass an acceptable token or are logged in."),Ai.forEach(t),xs=h(Ht),E(nt.$$.fragment,Ht),Ht.forEach(t),As=h(L),pe=n(L,"DIV",{class:!0});var Dt=s(pe);E(Gt.$$.fragment,Dt),Es=h(Dt),aa=n(Dt,"P",{});var Ei=s(aa);js=l(Ei,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Ei.forEach(t),Hs=h(Dt),Bt=n(Dt,"P",{});var dn=s(Bt);Ds=l(dn,`Note there are certain limitations. For more information about moving
repositories, please see
`),Kt=n(dn,"A",{href:!0,rel:!0});var ji=s(Kt);qs=l(ji,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ji.forEach(t),Fs=l(dn,"."),dn.forEach(t),Ns=h(Dt),E(st.$$.fragment,Dt),Dt.forEach(t),Is=h(L),Fe=n(L,"DIV",{class:!0});var To=s(Fe);E(Jt.$$.fragment,To),Ts=h(To),na=n(To,"P",{});var Hi=s(na);Ls=l(Hi,"Get the info object for a given repo of a given type."),Hi.forEach(t),Os=h(To),E(rt.$$.fragment,To),To.forEach(t),Ps=h(L),it=n(L,"DIV",{class:!0});var fn=s(it);E(Qt.$$.fragment,fn),Ms=h(fn),sa=n(fn,"P",{});var Di=s(sa);Ss=l(Di,`Saves the passed access token so git can correctly authenticate the
user.`),Di.forEach(t),fn.forEach(t),Rs=h(L),he=n(L,"DIV",{class:!0});var qt=s(he);E(Xt.$$.fragment,qt),Us=h(qt),ra=n(qt,"P",{});var qi=s(ra);Cs=l(qi,"Get info on one specific Space on huggingface.co."),qi.forEach(t),zs=h(qt),ia=n(qt,"P",{});var Fi=s(ia);Vs=l(Fi,"Space can be private if you pass an acceptable token."),Fi.forEach(t),Ws=h(qt),E(lt.$$.fragment,qt),qt.forEach(t),Gs=h(L),ct=n(L,"DIV",{class:!0});var un=s(ct);E(Yt.$$.fragment,un),Bs=h(un),la=n(un,"P",{});var Ni=s(la);Ks=l(Ni,"Resets the user\u2019s access token."),Ni.forEach(t),un.forEach(t),Js=h(L),Ne=n(L,"DIV",{class:!0});var Lo=s(Ne);E(Zt.$$.fragment,Lo),Qs=h(Lo),ca=n(Lo,"P",{});var Ii=s(ca);Xs=l(Ii,"Update the visibility setting of a repository."),Ii.forEach(t),Ys=h(Lo),E(gt.$$.fragment,Lo),Lo.forEach(t),Zs=h(L),de=n(L,"DIV",{class:!0});var Ft=s(de);E(eo.$$.fragment,Ft),er=h(Ft),ga=n(Ft,"P",{});var Ti=s(ga);tr=l(Ti,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ti.forEach(t),or=h(Ft),E(pt.$$.fragment,Ft),ar=h(Ft),E(ht.$$.fragment,Ft),Ft.forEach(t),nr=h(L),te=n(L,"DIV",{class:!0});var fe=s(te);E(to.$$.fragment,fe),sr=h(fe),pa=n(fe,"P",{});var Li=s(pa);rr=l(Li,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Li.forEach(t),ir=h(fe),ha=n(fe,"P",{});var Oi=s(ha);lr=l(Oi,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Oi.forEach(t),cr=h(fe),oo=n(fe,"P",{});var mn=s(oo);gr=l(mn,"Uses "),da=n(mn,"CODE",{});var Pi=s(da);pr=l(Pi,"HfApi.create_commit"),Pi.forEach(t),hr=l(mn," under the hood."),mn.forEach(t),dr=h(fe),E(dt.$$.fragment,fe),fr=h(fe),E(ft.$$.fragment,fe),fe.forEach(t),ur=h(L),ut=n(L,"DIV",{class:!0});var _n=s(ut);E(ao.$$.fragment,_n),mr=h(_n),fa=n(_n,"P",{});var Mi=s(fa);_r=l(Mi,"Call HF API to know \u201Cwhoami\u201D."),Mi.forEach(t),_n.forEach(t),L.forEach(t),Wa=h(o),Se=n(o,"DIV",{class:!0});var bn=s(Se);E(no.$$.fragment,bn),br=h(bn),ua=n(bn,"P",{});var Si=s(ua);vr=l(Si,"Info about a model accessible from huggingface.co"),Si.forEach(t),bn.forEach(t),Ga=h(o),Re=n(o,"DIV",{class:!0});var vn=s(Re);E(so.$$.fragment,vn),$r=h(vn),ma=n(vn,"P",{});var Ri=s(ma);yr=l(Ri,"Info about a dataset accessible from huggingface.co"),Ri.forEach(t),vn.forEach(t),Ba=h(o),ye=n(o,"DIV",{class:!0});var Oo=s(ye);E(ro.$$.fragment,Oo),kr=h(Oo),_a=n(Oo,"P",{});var Ui=s(_a);wr=l(Ui,"Info about a Space accessible from huggingface.co"),Ui.forEach(t),xr=h(Oo),ba=n(Oo,"P",{});var Ci=s(ba);Ar=l(Ci,`This is a \u201Cdataclass\u201D like container that just sets on itself any attribute
passed by the server.`),Ci.forEach(t),Oo.forEach(t),Ka=h(o),Ue=n(o,"DIV",{class:!0});var $n=s(Ue);E(io.$$.fragment,$n),Er=h($n),va=n($n,"P",{});var zi=s(va);jr=l(zi,`Data structure that represents a public file inside a repo, accessible from
huggingface.co`),zi.forEach(t),$n.forEach(t),Ja=h(o),Ce=n(o,"H2",{class:!0});var yn=s(Ce);mt=n(yn,"A",{id:!0,class:!0,href:!0});var Vi=s(mt);$a=n(Vi,"SPAN",{});var Wi=s($a);E(lo.$$.fragment,Wi),Wi.forEach(t),Vi.forEach(t),Hr=h(yn),ya=n(yn,"SPAN",{});var Gi=s(ya);Dr=l(Gi,"Hugging Face local storage"),Gi.forEach(t),yn.forEach(t),Qa=h(o),co=n(o,"P",{});var pi=s(co);ka=n(pi,"CODE",{});var Bi=s(ka);qr=l(Bi,"huggingface_hub"),Bi.forEach(t),Fr=l(pi,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),pi.forEach(t),Xa=h(o),_t=n(o,"P",{});var kn=s(_t);Nr=l(kn,"It does this using the "),Fo=n(kn,"A",{href:!0});var Ki=s(Fo);Ir=l(Ki,"HfFolder"),Ki.forEach(t),Tr=l(kn," utility, which saves data at the root of the user."),kn.forEach(t),Ya=h(o),se=n(o,"DIV",{class:!0});var Nt=s(se);E(go.$$.fragment,Nt),Lr=h(Nt),bt=n(Nt,"DIV",{class:!0});var wn=s(bt);E(po.$$.fragment,wn),Or=h(wn),wa=n(wn,"P",{});var Ji=s(wa);Pr=l(Ji,"Deletes the token from storage. Does not fail if token does not exist."),Ji.forEach(t),wn.forEach(t),Mr=h(Nt),Ie=n(Nt,"DIV",{class:!0});var Po=s(Ie);E(ho.$$.fragment,Po),Sr=h(Po),xa=n(Po,"P",{});var Qi=s(xa);Rr=l(Qi,"Get token or None if not existent."),Qi.forEach(t),Ur=h(Po),fo=n(Po,"P",{});var xn=s(fo);Cr=l(xn,"Note that a token can be also provided using the "),Aa=n(xn,"CODE",{});var Xi=s(Aa);zr=l(Xi,"HUGGING_FACE_HUB_TOKEN"),Xi.forEach(t),Vr=l(xn,`
environment variable.`),xn.forEach(t),Po.forEach(t),Wr=h(Nt),vt=n(Nt,"DIV",{class:!0});var An=s(vt);E(uo.$$.fragment,An),Gr=h(An),Ea=n(An,"P",{});var Yi=s(Ea);Br=l(Yi,"Save token, creating folder as needed."),Yi.forEach(t),An.forEach(t),Nt.forEach(t),Za=h(o),ze=n(o,"H2",{class:!0});var En=s(ze);$t=n(En,"A",{id:!0,class:!0,href:!0});var Zi=s($t);ja=n(Zi,"SPAN",{});var el=s(ja);E(mo.$$.fragment,el),el.forEach(t),Zi.forEach(t),Kr=h(En),Ha=n(En,"SPAN",{});var tl=s(Ha);Jr=l(tl,"Filtering helpers"),tl.forEach(t),En.forEach(t),en=h(o),yt=n(o,"P",{});var jn=s(yt);Qr=l(jn,"Some helpers to filter repositories on the Hub are available in the "),Da=n(jn,"CODE",{});var ol=s(Da);Xr=l(ol,"huggingface_hub"),ol.forEach(t),Yr=l(jn," package."),jn.forEach(t),tn=h(o),ke=n(o,"DIV",{class:!0});var Mo=s(ke);E(_o.$$.fragment,Mo),Zr=h(Mo),qa=n(Mo,"P",{});var al=s(qa);ei=l(al,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),al.forEach(t),ti=h(Mo),E(kt.$$.fragment,Mo),Mo.forEach(t),on=h(o),we=n(o,"DIV",{class:!0});var So=s(we);E(bo.$$.fragment,So),oi=h(So),Fa=n(So,"P",{});var nl=s(Fa);ai=l(nl,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),nl.forEach(t),ni=h(So),E(wt.$$.fragment,So),So.forEach(t),an=h(o),xe=n(o,"DIV",{class:!0});var Ro=s(xe);E(vo.$$.fragment,Ro),si=h(Ro),Na=n(Ro,"P",{});var sl=s(Na);ri=l(sl,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),sl.forEach(t),ii=h(Ro),E(xt.$$.fragment,Ro),Ro.forEach(t),nn=h(o),Ae=n(o,"DIV",{class:!0});var Uo=s(Ae);E($o.$$.fragment,Uo),li=h(Uo),Ia=n(Uo,"P",{});var rl=s(Ia);ci=l(rl,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),rl.forEach(t),gi=h(Uo),E(At.$$.fragment,Uo),Uo.forEach(t),this.h()},h(){y(g,"name","hf:doc:metadata"),y(g,"content",JSON.stringify(Il)),y(c,"id","huggingface_hub.HfApi"),y(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(c,"href","#huggingface_hub.HfApi"),y(u,"class","relative group"),y(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Kt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),y(Kt,"rel","nofollow"),y(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(mt,"id","huggingface_hub.HfFolder"),y(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(mt,"href","#huggingface_hub.HfFolder"),y(Ce,"class","relative group"),y(Fo,"href","/docs/huggingface_hub/pr_951/en/package_reference/hf_api#huggingface_hub.HfFolder"),y(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y($t,"id","huggingface_hub.DatasetFilter"),y($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y($t,"href","#huggingface_hub.DatasetFilter"),y(ze,"class","relative group"),y(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),y(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,g),_(o,$,v),_(o,u,v),e(u,c),e(c,d),j(r,d,null),e(u,m),e(u,N),e(N,f),_(o,k,v),_(o,F,v),e(F,w),e(F,x),e(x,T),e(F,P),_(o,M,v),_(o,b,v),e(b,O),e(b,U),e(U,R),e(b,V),_(o,W,v),_(o,z,v),e(z,G),_(o,Z,v),j(J,o,v),_(o,re,v),_(o,ee,v),e(ee,Q),e(ee,X),e(X,Y),e(ee,me),_(o,_e,v),j(B,o,v),_(o,oe,v),_(o,K,v),e(K,je),e(K,ae),e(ae,Pe),e(K,He),_(o,be,v),_(o,I,v),j(ne,I,null),e(I,Ho),e(I,ve),j($e,ve,null),e(ve,Do),e(ve,Me),e(Me,qo),e(I,Hn),e(I,Ve),j(It,Ve,null),e(Ve,Dn),e(Ve,Co),e(Co,qn),e(I,Fn),e(I,ie),j(Tt,ie,null),e(ie,Nn),e(ie,zo),e(zo,In),e(ie,Tn),e(ie,Vo),e(Vo,Ln),e(ie,On),j(We,ie,null),e(I,Pn),e(I,De),j(Lt,De,null),e(De,Mn),e(De,Wo),e(Wo,Sn),e(De,Rn),j(Ge,De,null),e(I,Un),e(I,qe),j(Ot,qe,null),e(qe,Cn),e(qe,Go),e(Go,zn),e(qe,Vn),j(Be,qe,null),e(I,Wn),e(I,Ke),j(Pt,Ke,null),e(Ke,Gn),e(Ke,Bo),e(Bo,Bn),e(I,Kn),e(I,Je),j(Mt,Je,null),e(Je,Jn),e(Je,Ko),e(Ko,Qn),e(I,Xn),e(I,Qe),j(St,Qe,null),e(Qe,Yn),e(Qe,Jo),e(Jo,Zn),e(I,es),e(I,le),j(Rt,le,null),e(le,ts),e(le,Qo),e(Qo,os),e(le,as),j(Xe,le,null),e(le,ns),j(Ye,le,null),e(I,ss),e(I,Ze),j(Ut,Ze,null),e(Ze,rs),e(Ze,Xo),e(Xo,is),e(I,ls),e(I,ce),j(Ct,ce,null),e(ce,cs),e(ce,Yo),e(Yo,gs),e(ce,ps),j(et,ce,null),e(ce,hs),j(tt,ce,null),e(I,ds),e(I,ot),j(zt,ot,null),e(ot,fs),e(ot,Zo),e(Zo,us),e(I,ms),e(I,at),j(Vt,at,null),e(at,_s),e(at,ea),e(ea,bs),e(I,vs),e(I,ge),j(Wt,ge,null),e(ge,$s),e(ge,ta),e(ta,ys),e(ge,ks),e(ge,oa),e(oa,ws),e(ge,xs),j(nt,ge,null),e(I,As),e(I,pe),j(Gt,pe,null),e(pe,Es),e(pe,aa),e(aa,js),e(pe,Hs),e(pe,Bt),e(Bt,Ds),e(Bt,Kt),e(Kt,qs),e(Bt,Fs),e(pe,Ns),j(st,pe,null),e(I,Is),e(I,Fe),j(Jt,Fe,null),e(Fe,Ts),e(Fe,na),e(na,Ls),e(Fe,Os),j(rt,Fe,null),e(I,Ps),e(I,it),j(Qt,it,null),e(it,Ms),e(it,sa),e(sa,Ss),e(I,Rs),e(I,he),j(Xt,he,null),e(he,Us),e(he,ra),e(ra,Cs),e(he,zs),e(he,ia),e(ia,Vs),e(he,Ws),j(lt,he,null),e(I,Gs),e(I,ct),j(Yt,ct,null),e(ct,Bs),e(ct,la),e(la,Ks),e(I,Js),e(I,Ne),j(Zt,Ne,null),e(Ne,Qs),e(Ne,ca),e(ca,Xs),e(Ne,Ys),j(gt,Ne,null),e(I,Zs),e(I,de),j(eo,de,null),e(de,er),e(de,ga),e(ga,tr),e(de,or),j(pt,de,null),e(de,ar),j(ht,de,null),e(I,nr),e(I,te),j(to,te,null),e(te,sr),e(te,pa),e(pa,rr),e(te,ir),e(te,ha),e(ha,lr),e(te,cr),e(te,oo),e(oo,gr),e(oo,da),e(da,pr),e(oo,hr),e(te,dr),j(dt,te,null),e(te,fr),j(ft,te,null),e(I,ur),e(I,ut),j(ao,ut,null),e(ut,mr),e(ut,fa),e(fa,_r),_(o,Wa,v),_(o,Se,v),j(no,Se,null),e(Se,br),e(Se,ua),e(ua,vr),_(o,Ga,v),_(o,Re,v),j(so,Re,null),e(Re,$r),e(Re,ma),e(ma,yr),_(o,Ba,v),_(o,ye,v),j(ro,ye,null),e(ye,kr),e(ye,_a),e(_a,wr),e(ye,xr),e(ye,ba),e(ba,Ar),_(o,Ka,v),_(o,Ue,v),j(io,Ue,null),e(Ue,Er),e(Ue,va),e(va,jr),_(o,Ja,v),_(o,Ce,v),e(Ce,mt),e(mt,$a),j(lo,$a,null),e(Ce,Hr),e(Ce,ya),e(ya,Dr),_(o,Qa,v),_(o,co,v),e(co,ka),e(ka,qr),e(co,Fr),_(o,Xa,v),_(o,_t,v),e(_t,Nr),e(_t,Fo),e(Fo,Ir),e(_t,Tr),_(o,Ya,v),_(o,se,v),j(go,se,null),e(se,Lr),e(se,bt),j(po,bt,null),e(bt,Or),e(bt,wa),e(wa,Pr),e(se,Mr),e(se,Ie),j(ho,Ie,null),e(Ie,Sr),e(Ie,xa),e(xa,Rr),e(Ie,Ur),e(Ie,fo),e(fo,Cr),e(fo,Aa),e(Aa,zr),e(fo,Vr),e(se,Wr),e(se,vt),j(uo,vt,null),e(vt,Gr),e(vt,Ea),e(Ea,Br),_(o,Za,v),_(o,ze,v),e(ze,$t),e($t,ja),j(mo,ja,null),e(ze,Kr),e(ze,Ha),e(Ha,Jr),_(o,en,v),_(o,yt,v),e(yt,Qr),e(yt,Da),e(Da,Xr),e(yt,Yr),_(o,tn,v),_(o,ke,v),j(_o,ke,null),e(ke,Zr),e(ke,qa),e(qa,ei),e(ke,ti),j(kt,ke,null),_(o,on,v),_(o,we,v),j(bo,we,null),e(we,oi),e(we,Fa),e(Fa,ai),e(we,ni),j(wt,we,null),_(o,an,v),_(o,xe,v),j(vo,xe,null),e(xe,si),e(xe,Na),e(Na,ri),e(xe,ii),j(xt,xe,null),_(o,nn,v),_(o,Ae,v),j($o,Ae,null),e(Ae,li),e(Ae,Ia),e(Ia,ci),e(Ae,gi),j(At,Ae,null),sn=!0},p(o,[v]){const yo={};v&2&&(yo.$$scope={dirty:v,ctx:o}),We.$set(yo);const Ta={};v&2&&(Ta.$$scope={dirty:v,ctx:o}),Ge.$set(Ta);const La={};v&2&&(La.$$scope={dirty:v,ctx:o}),Be.$set(La);const Oa={};v&2&&(Oa.$$scope={dirty:v,ctx:o}),Xe.$set(Oa);const ko={};v&2&&(ko.$$scope={dirty:v,ctx:o}),Ye.$set(ko);const Pa={};v&2&&(Pa.$$scope={dirty:v,ctx:o}),et.$set(Pa);const wo={};v&2&&(wo.$$scope={dirty:v,ctx:o}),tt.$set(wo);const Ma={};v&2&&(Ma.$$scope={dirty:v,ctx:o}),nt.$set(Ma);const Sa={};v&2&&(Sa.$$scope={dirty:v,ctx:o}),st.$set(Sa);const xo={};v&2&&(xo.$$scope={dirty:v,ctx:o}),rt.$set(xo);const Ra={};v&2&&(Ra.$$scope={dirty:v,ctx:o}),lt.$set(Ra);const Ao={};v&2&&(Ao.$$scope={dirty:v,ctx:o}),gt.$set(Ao);const Ua={};v&2&&(Ua.$$scope={dirty:v,ctx:o}),pt.$set(Ua);const L={};v&2&&(L.$$scope={dirty:v,ctx:o}),ht.$set(L);const Eo={};v&2&&(Eo.$$scope={dirty:v,ctx:o}),dt.$set(Eo);const Ca={};v&2&&(Ca.$$scope={dirty:v,ctx:o}),ft.$set(Ca);const jo={};v&2&&(jo.$$scope={dirty:v,ctx:o}),kt.$set(jo);const za={};v&2&&(za.$$scope={dirty:v,ctx:o}),wt.$set(za);const Ee={};v&2&&(Ee.$$scope={dirty:v,ctx:o}),xt.$set(Ee);const Va={};v&2&&(Va.$$scope={dirty:v,ctx:o}),At.$set(Va)},i(o){sn||(H(r.$$.fragment,o),H(J.$$.fragment,o),H(B.$$.fragment,o),H(ne.$$.fragment,o),H($e.$$.fragment,o),H(It.$$.fragment,o),H(Tt.$$.fragment,o),H(We.$$.fragment,o),H(Lt.$$.fragment,o),H(Ge.$$.fragment,o),H(Ot.$$.fragment,o),H(Be.$$.fragment,o),H(Pt.$$.fragment,o),H(Mt.$$.fragment,o),H(St.$$.fragment,o),H(Rt.$$.fragment,o),H(Xe.$$.fragment,o),H(Ye.$$.fragment,o),H(Ut.$$.fragment,o),H(Ct.$$.fragment,o),H(et.$$.fragment,o),H(tt.$$.fragment,o),H(zt.$$.fragment,o),H(Vt.$$.fragment,o),H(Wt.$$.fragment,o),H(nt.$$.fragment,o),H(Gt.$$.fragment,o),H(st.$$.fragment,o),H(Jt.$$.fragment,o),H(rt.$$.fragment,o),H(Qt.$$.fragment,o),H(Xt.$$.fragment,o),H(lt.$$.fragment,o),H(Yt.$$.fragment,o),H(Zt.$$.fragment,o),H(gt.$$.fragment,o),H(eo.$$.fragment,o),H(pt.$$.fragment,o),H(ht.$$.fragment,o),H(to.$$.fragment,o),H(dt.$$.fragment,o),H(ft.$$.fragment,o),H(ao.$$.fragment,o),H(no.$$.fragment,o),H(so.$$.fragment,o),H(ro.$$.fragment,o),H(io.$$.fragment,o),H(lo.$$.fragment,o),H(go.$$.fragment,o),H(po.$$.fragment,o),H(ho.$$.fragment,o),H(uo.$$.fragment,o),H(mo.$$.fragment,o),H(_o.$$.fragment,o),H(kt.$$.fragment,o),H(bo.$$.fragment,o),H(wt.$$.fragment,o),H(vo.$$.fragment,o),H(xt.$$.fragment,o),H($o.$$.fragment,o),H(At.$$.fragment,o),sn=!0)},o(o){D(r.$$.fragment,o),D(J.$$.fragment,o),D(B.$$.fragment,o),D(ne.$$.fragment,o),D($e.$$.fragment,o),D(It.$$.fragment,o),D(Tt.$$.fragment,o),D(We.$$.fragment,o),D(Lt.$$.fragment,o),D(Ge.$$.fragment,o),D(Ot.$$.fragment,o),D(Be.$$.fragment,o),D(Pt.$$.fragment,o),D(Mt.$$.fragment,o),D(St.$$.fragment,o),D(Rt.$$.fragment,o),D(Xe.$$.fragment,o),D(Ye.$$.fragment,o),D(Ut.$$.fragment,o),D(Ct.$$.fragment,o),D(et.$$.fragment,o),D(tt.$$.fragment,o),D(zt.$$.fragment,o),D(Vt.$$.fragment,o),D(Wt.$$.fragment,o),D(nt.$$.fragment,o),D(Gt.$$.fragment,o),D(st.$$.fragment,o),D(Jt.$$.fragment,o),D(rt.$$.fragment,o),D(Qt.$$.fragment,o),D(Xt.$$.fragment,o),D(lt.$$.fragment,o),D(Yt.$$.fragment,o),D(Zt.$$.fragment,o),D(gt.$$.fragment,o),D(eo.$$.fragment,o),D(pt.$$.fragment,o),D(ht.$$.fragment,o),D(to.$$.fragment,o),D(dt.$$.fragment,o),D(ft.$$.fragment,o),D(ao.$$.fragment,o),D(no.$$.fragment,o),D(so.$$.fragment,o),D(ro.$$.fragment,o),D(io.$$.fragment,o),D(lo.$$.fragment,o),D(go.$$.fragment,o),D(po.$$.fragment,o),D(ho.$$.fragment,o),D(uo.$$.fragment,o),D(mo.$$.fragment,o),D(_o.$$.fragment,o),D(kt.$$.fragment,o),D(bo.$$.fragment,o),D(wt.$$.fragment,o),D(vo.$$.fragment,o),D(xt.$$.fragment,o),D($o.$$.fragment,o),D(At.$$.fragment,o),sn=!1},d(o){t(g),o&&t($),o&&t(u),q(r),o&&t(k),o&&t(F),o&&t(M),o&&t(b),o&&t(W),o&&t(z),o&&t(Z),q(J,o),o&&t(re),o&&t(ee),o&&t(_e),q(B,o),o&&t(oe),o&&t(K),o&&t(be),o&&t(I),q(ne),q($e),q(It),q(Tt),q(We),q(Lt),q(Ge),q(Ot),q(Be),q(Pt),q(Mt),q(St),q(Rt),q(Xe),q(Ye),q(Ut),q(Ct),q(et),q(tt),q(zt),q(Vt),q(Wt),q(nt),q(Gt),q(st),q(Jt),q(rt),q(Qt),q(Xt),q(lt),q(Yt),q(Zt),q(gt),q(eo),q(pt),q(ht),q(to),q(dt),q(ft),q(ao),o&&t(Wa),o&&t(Se),q(no),o&&t(Ga),o&&t(Re),q(so),o&&t(Ba),o&&t(ye),q(ro),o&&t(Ka),o&&t(Ue),q(io),o&&t(Ja),o&&t(Ce),q(lo),o&&t(Qa),o&&t(co),o&&t(Xa),o&&t(_t),o&&t(Ya),o&&t(se),q(go),q(po),q(ho),q(uo),o&&t(Za),o&&t(ze),q(mo),o&&t(en),o&&t(yt),o&&t(tn),o&&t(ke),q(_o),q(kt),o&&t(on),o&&t(we),q(bo),q(wt),o&&t(an),o&&t(xe),q(vo),q(xt),o&&t(nn),o&&t(Ae),q($o),q(At)}}}const Il={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Tl(S){return pl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ul extends il{constructor(g){super();ll(this,g,Tl,Nl,cl,{})}}export{Ul as default,Il as metadata};
