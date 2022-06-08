import{S as wi,i as Hi,s as ji,e as n,k as l,w as k,t as p,M as Di,c as s,d as a,m as g,a as r,x as A,h as c,b as $,G as e,g as v,y as x,q as w,o as H,B as j,v as Ei,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as pa}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Nr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qi(T){let i,b,m,h,u,o,d,F,f,y,q,L,I,M,C;return{c(){i=n("p"),b=p("Raises the following errors:"),m=l(),h=n("ul"),u=n("li"),o=n("a"),d=n("em"),F=p("HTTPError"),f=p(`
if the HuggingFace API returned an error`),y=l(),q=n("li"),L=n("a"),I=n("em"),M=p("ValueError"),C=p(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var O=r(i);b=c(O,"Raises the following errors:"),O.forEach(a),m=g(N),h=s(N,"UL",{});var S=r(h);u=s(S,"LI",{});var U=r(u);o=s(U,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"EM",{});var B=r(d);F=c(B,"HTTPError"),B.forEach(a),R.forEach(a),f=c(U,`
if the HuggingFace API returned an error`),U.forEach(a),y=g(S),q=s(S,"LI",{});var z=r(q);L=s(z,"A",{href:!0,rel:!0});var W=r(L);I=s(W,"EM",{});var K=r(I);M=c(K,"ValueError"),K.forEach(a),W.forEach(a),C=c(z,`
if some parameter value is invalid`),z.forEach(a),S.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(L,"rel","nofollow")},m(N,O){v(N,i,O),e(i,b),v(N,m,O),v(N,h,O),e(h,u),e(u,o),e(o,d),e(d,F),e(u,f),e(h,y),e(h,q),e(q,L),e(L,I),e(I,M),e(q,C)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Fi(T){let i,b,m,h,u,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=n("p"),b=p("Example usage with the "),m=n("code"),h=p("filter"),u=p(" argument:"),o=l(),k(d.$$.fragment)},l(f){i=s(f,"P",{});var y=r(i);b=c(y,"Example usage with the "),m=s(y,"CODE",{});var q=r(m);h=c(q,"filter"),q.forEach(a),u=c(y," argument:"),y.forEach(a),o=g(f),A(d.$$.fragment,f)},m(f,y){v(f,i,y),e(i,b),e(i,m),e(m,h),e(i,u),v(f,o,y),x(d,f,y),F=!0},p:de,i(f){F||(w(d.$$.fragment,f),F=!0)},o(f){H(d.$$.fragment,f),F=!1},d(f){f&&a(i),f&&a(o),j(d,f)}}}function Ni(T){let i,b,m,h,u,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),b=p("Example usage with the "),m=n("code"),h=p("search"),u=p(" argument:"),o=l(),k(d.$$.fragment)},l(f){i=s(f,"P",{});var y=r(i);b=c(y,"Example usage with the "),m=s(y,"CODE",{});var q=r(m);h=c(q,"search"),q.forEach(a),u=c(y," argument:"),y.forEach(a),o=g(f),A(d.$$.fragment,f)},m(f,y){v(f,i,y),e(i,b),e(i,m),e(m,h),e(i,u),v(f,o,y),x(d,f,y),F=!0},p:de,i(f){F||(w(d.$$.fragment,f),F=!0)},o(f){H(d.$$.fragment,f),F=!1},d(f){f&&a(i),f&&a(o),j(d,f)}}}function Ti(T){let i,b,m,h,u,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=n("p"),b=p("Example usage with the "),m=n("code"),h=p("filter"),u=p(" argument:"),o=l(),k(d.$$.fragment)},l(f){i=s(f,"P",{});var y=r(i);b=c(y,"Example usage with the "),m=s(y,"CODE",{});var q=r(m);h=c(q,"filter"),q.forEach(a),u=c(y," argument:"),y.forEach(a),o=g(f),A(d.$$.fragment,f)},m(f,y){v(f,i,y),e(i,b),e(i,m),e(m,h),e(i,u),v(f,o,y),x(d,f,y),F=!0},p:de,i(f){F||(w(d.$$.fragment,f),F=!0)},o(f){H(d.$$.fragment,f),F=!1},d(f){f&&a(i),f&&a(o),j(d,f)}}}function Pi(T){let i,b,m,h,u,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),b=p("Example usage with the "),m=n("code"),h=p("search"),u=p(" argument:"),o=l(),k(d.$$.fragment)},l(f){i=s(f,"P",{});var y=r(i);b=c(y,"Example usage with the "),m=s(y,"CODE",{});var q=r(m);h=c(q,"search"),q.forEach(a),u=c(y," argument:"),y.forEach(a),o=g(f),A(d.$$.fragment,f)},m(f,y){v(f,i,y),e(i,b),e(i,m),e(m,h),e(i,u),v(f,o,y),x(d,f,y),F=!0},p:de,i(f){F||(w(d.$$.fragment,f),F=!0)},o(f){H(d.$$.fragment,f),F=!1},d(f){f&&a(i),f&&a(o),j(d,f)}}}function Li(T){let i,b,m,h,u;return{c(){i=n("p"),b=p(`Warning: Deprecated, will be removed in v0.8. Please use
`),m=n("a"),h=p("HfApi.set_access_token()"),u=p(" instead."),this.h()},l(o){i=s(o,"P",{});var d=r(i);b=c(d,`Warning: Deprecated, will be removed in v0.8. Please use
`),m=s(d,"A",{href:!0});var F=r(m);h=c(F,"HfApi.set_access_token()"),F.forEach(a),u=c(d," instead."),d.forEach(a),this.h()},h(){$(m,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(o,d){v(o,i,d),e(i,b),e(i,m),e(m,h),e(i,u)},d(o){o&&a(i)}}}function Oi(T){let i,b,m,h,u,o,d,F,f;return{c(){i=n("p"),b=p("Raises the following errors:"),m=l(),h=n("ul"),u=n("li"),o=n("a"),d=n("code"),F=p("HTTPError"),f=p(`
if credentials are invalid`),this.h()},l(y){i=s(y,"P",{});var q=r(i);b=c(q,"Raises the following errors:"),q.forEach(a),m=g(y),h=s(y,"UL",{});var L=r(h);u=s(L,"LI",{});var I=r(u);o=s(I,"A",{href:!0,rel:!0});var M=r(o);d=s(M,"CODE",{});var C=r(d);F=c(C,"HTTPError"),C.forEach(a),M.forEach(a),f=c(I,`
if credentials are invalid`),I.forEach(a),L.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow")},m(y,q){v(y,i,q),e(i,b),v(y,m,q),v(y,h,q),e(h,u),e(u,o),e(o,d),e(d,F),e(u,f)},d(y){y&&a(i),y&&a(m),y&&a(h)}}}function Ii(T){let i,b,m,h,u;return{c(){i=n("p"),b=p(`Warning: Deprecated, will be removed in v0.8. Please use
`),m=n("a"),h=p("HfApi.unset_access_token()"),u=p(" instead."),this.h()},l(o){i=s(o,"P",{});var d=r(i);b=c(d,`Warning: Deprecated, will be removed in v0.8. Please use
`),m=s(d,"A",{href:!0});var F=r(m);h=c(F,"HfApi.unset_access_token()"),F.forEach(a),u=c(d," instead."),d.forEach(a),this.h()},h(){$(m,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(o,d){v(o,i,d),e(i,b),e(i,m),e(m,h),e(i,u)},d(o){o&&a(i)}}}function Mi(T){let i,b,m,h,u,o,d,F,f,y,q,L,I,M,C;return{c(){i=n("p"),b=p("Raises the following errors:"),m=l(),h=n("ul"),u=n("li"),o=n("a"),d=n("em"),F=p("HTTPError"),f=p(`
if the HuggingFace API returned an error`),y=l(),q=n("li"),L=n("a"),I=n("em"),M=p("ValueError"),C=p(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var O=r(i);b=c(O,"Raises the following errors:"),O.forEach(a),m=g(N),h=s(N,"UL",{});var S=r(h);u=s(S,"LI",{});var U=r(u);o=s(U,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"EM",{});var B=r(d);F=c(B,"HTTPError"),B.forEach(a),R.forEach(a),f=c(U,`
if the HuggingFace API returned an error`),U.forEach(a),y=g(S),q=s(S,"LI",{});var z=r(q);L=s(z,"A",{href:!0,rel:!0});var W=r(L);I=s(W,"EM",{});var K=r(I);M=c(K,"ValueError"),K.forEach(a),W.forEach(a),C=c(z,`
if some parameter value is invalid`),z.forEach(a),S.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(L,"rel","nofollow")},m(N,O){v(N,i,O),e(i,b),v(N,m,O),v(N,h,O),e(h,u),e(u,o),e(o,d),e(d,F),e(u,f),e(h,y),e(h,q),e(q,L),e(L,I),e(I,M),e(q,C)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Ci(T){let i,b,m,h,u;return h=new ee({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=n("p"),b=p("Example usage:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=c(d,"Example usage:"),d.forEach(a),m=g(o),A(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),x(h,o,d),u=!0},p:de,i(o){u||(w(h.$$.fragment,o),u=!0)},o(o){H(h.$$.fragment,o),u=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Si(T){let i,b,m,h,u,o,d,F,f,y,q,L,I,M,C;return{c(){i=n("p"),b=p("Raises the following errors:"),m=l(),h=n("ul"),u=n("li"),o=n("a"),d=n("code"),F=p("HTTPError"),f=p(`
if the HuggingFace API returned an error`),y=l(),q=n("li"),L=n("a"),I=n("code"),M=p("ValueError"),C=p(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var O=r(i);b=c(O,"Raises the following errors:"),O.forEach(a),m=g(N),h=s(N,"UL",{});var S=r(h);u=s(S,"LI",{});var U=r(u);o=s(U,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"CODE",{});var B=r(d);F=c(B,"HTTPError"),B.forEach(a),R.forEach(a),f=c(U,`
if the HuggingFace API returned an error`),U.forEach(a),y=g(S),q=s(S,"LI",{});var z=r(q);L=s(z,"A",{href:!0,rel:!0});var W=r(L);I=s(W,"CODE",{});var K=r(I);M=c(K,"ValueError"),K.forEach(a),W.forEach(a),C=c(z,`
if some parameter value is invalid`),z.forEach(a),S.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(L,"rel","nofollow")},m(N,O){v(N,i,O),e(i,b),v(N,m,O),v(N,h,O),e(h,u),e(u,o),e(o,d),e(d,F),e(u,f),e(h,y),e(h,q),e(q,L),e(L,I),e(I,M),e(q,C)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Ui(T){let i,b,m,h,u;return h=new ee({props:{code:`upload_file(
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
TODO : <span class="hljs-keyword">return</span> <span class="hljs-built_in">type</span>`}}),{c(){i=n("p"),b=p("Example usage:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=c(d,"Example usage:"),d.forEach(a),m=g(o),A(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),x(h,o,d),u=!0},p:de,i(o){u||(w(h.$$.fragment,o),u=!0)},o(o){H(h.$$.fragment,o),u=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function zi(T){let i,b,m,h,u;return h=new ee({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=n("p"),b=p("Examples:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=c(d,"Examples:"),d.forEach(a),m=g(o),A(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),x(h,o,d),u=!0},p:de,i(o){u||(w(h.$$.fragment,o),u=!0)},o(o){H(h.$$.fragment,o),u=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Vi(T){let i,b;return i=new ee({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){k(i.$$.fragment)},l(m){A(i.$$.fragment,m)},m(m,h){x(i,m,h),b=!0},p:de,i(m){b||(w(i.$$.fragment,m),b=!0)},o(m){H(i.$$.fragment,m),b=!1},d(m){j(i,m)}}}function Wi(T){let i,b,m,h,u;return h=new ee({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),b=p("Example:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=c(d,"Example:"),d.forEach(a),m=g(o),A(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),x(h,o,d),u=!0},p:de,i(o){u||(w(h.$$.fragment,o),u=!0)},o(o){H(h.$$.fragment,o),u=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Gi(T){let i,b,m,h,u;return h=new ee({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),b=p("Example:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=c(d,"Example:"),d.forEach(a),m=g(o),A(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),x(h,o,d),u=!0},p:de,i(o){u||(w(h.$$.fragment,o),u=!0)},o(o){H(h.$$.fragment,o),u=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Ri(T){let i,b,m,h,u,o,d,F,f,y,q,L,I,M,C,N,O,S,U,R,B,z,W,K,co,nt,ho,ue,Jo,ca,Qo,Xo,mo,st,fo,_e,Yo,ha,Zo,en,uo,D,rt,tn,be,it,an,da,on,nn,ve,lt,sn,ma,rn,ln,se,gt,gn,fa,pn,cn,ua,hn,dn,re,pt,mn,_a,fn,un,$e,_n,ye,ct,bn,ba,vn,$n,ke,ht,yn,va,kn,An,Ae,dt,xn,$a,wn,Hn,xe,mt,jn,ya,Dn,En,J,ft,qn,ka,Fn,Nn,we,Tn,He,Pn,je,ut,Ln,Aa,On,In,Q,_t,Mn,xa,Cn,Sn,De,Un,Ee,zn,qe,bt,Vn,wa,Wn,Gn,X,vt,Rn,Ha,Bn,Kn,Fe,Jn,Ne,Qn,ie,$t,Xn,ja,Yn,Zn,Te,es,le,yt,ts,Da,as,os,Ea,ns,ss,ge,kt,rs,qa,is,ls,At,gs,xt,ps,cs,hs,Pe,wt,ds,Fa,ms,fs,Le,Ht,us,Na,_s,bs,pe,jt,vs,Ta,$s,ys,Pa,ks,As,Oe,Dt,xs,La,ws,Hs,Ie,Et,js,Oa,Ds,Es,Y,qt,qs,Ia,Fs,Ns,Me,Ts,Ce,Ps,V,Ft,Ls,Ma,Os,Is,Ca,Ms,Cs,Nt,Ss,Sa,Us,zs,Vs,Se,Ws,Ue,Gs,ze,Tt,Rs,Ua,Bs,_o,me,Ve,za,Pt,Ks,Va,Js,bo,Lt,Wa,Qs,Xs,vo,We,Ys,Yt,Zs,er,$o,G,Ot,tr,Ge,It,ar,Ga,or,nr,ce,Mt,sr,Ra,rr,ir,Ct,lr,Ba,gr,pr,cr,Re,St,hr,Ka,dr,yo,fe,Be,Ja,Ut,mr,Qa,fr,ko,Ke,ur,Xa,_r,br,Ao,te,zt,vr,Ya,$r,yr,Je,xo,ae,Vt,kr,Za,Ar,xr,Qe,wo,oe,Wt,wr,eo,Hr,jr,Xe,Ho,ne,Gt,Dr,to,Er,qr,Ye,jo;return o=new Nr({}),nt=new ee({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),st=new ee({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),rt=new P({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L563"}}),it=new P({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub.commit_api.CommitOperationAdd, huggingface_hub.commit_api.CommitOperationDelete]]"},{name:"commit_summary",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository in which the commit will be created, for example:
<em>&#x201C;username/custom_transformers&#x201D;</em>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.create_commit.operations",description:`<strong>operations</strong> (<em>Iterable</em> of <em>CommitOperation</em>) &#x2014;
An iterable of operations to include in the commit, either:</p>
<ul>
<li><code>CommitOperationAdd</code> to upload a file</li>
<li><code>CommitOperationDelete</code> to delete a file</li>
</ul>`,name:"operations"},{anchor:"huggingface_hub.HfApi.create_commit.commit_summary",description:`<strong>commit_summary</strong> (<code>str</code>) &#x2014;
The summary of the commit that will be created`,name:"commit_summary"},{anchor:"huggingface_hub.HfApi.create_commit.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.create_commit.token",description:`<strong>token</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Authentication token, obtained with <em>HfApi.login</em> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.create_commit.repo_type",description:`<strong>repo_type</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Set to <em>&#x201C;dataset&#x201D;</em> or <em>&#x201C;space&#x201D;</em> if uploading to a dataset or
space, <em>None</em> or <em>&#x201C;model&#x201D;</em> if uploading to a model. Default is
<em>None</em>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.create_commit.revision",description:`<strong>revision</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<em>&#x201C;main&#x201D;</em> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.create_commit.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"},{anchor:"huggingface_hub.HfApi.create_commit.num_threads",description:`<strong>num_threads</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of concurrent threads for uploading files. Defaults to 5.
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1739"}}),lt=new P({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1382",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),gt=new P({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1211",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),pt=new P({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_summary",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<em>str</em>) &#x2014;
Relative filepath in the repo, for example:
<em>&#x201C;checkpoints/1fec34a/weights.bin&#x201D;</em>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository from which the file will be deleted, for example:
<em>&#x201C;username/custom_transformers&#x201D;</em>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Authentication token, obtained with <em>HfApi.login</em> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Set to <em>&#x201C;dataset&#x201D;</em> or <em>&#x201C;space&#x201D;</em> if the file is in a dataset or
space, <em>None</em> or <em>&#x201C;model&#x201D;</em> if in a model. Default is <em>None</em>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<em>&#x201C;main&#x201D;</em> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_file.commmit_summary",description:`<strong>commmit_summary</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The summary or title of the generated commit`,name:"commmit_summary"},{anchor:"huggingface_hub.HfApi.delete_file.commit_description",description:`<strong>commit_description</strong> (<em>str</em> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.delete_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with the changes.
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2084"}}),$e=new pa({props:{$$slots:{default:[qi]},$$scope:{ctx:T}}}),ct=new P({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1512"}}),ht=new P({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L762"}}),dt=new P({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2154",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),mt=new P({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L754"}}),ft=new P({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L981"}}),we=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Fi]},$$scope:{ctx:T}}}),He=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Ni]},$$scope:{ctx:T}}}),ut=new P({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1147",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),_t=new P({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L772"}}),De=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Ti]},$$scope:{ctx:T}}}),Ee=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Pi]},$$scope:{ctx:T}}}),bt=new P({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1341",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),vt=new P({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L567",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),Fe=new pa({props:{$$slots:{default:[Li]},$$scope:{ctx:T}}}),Ne=new pa({props:{$$slots:{default:[Oi]},$$scope:{ctx:T}}}),$t=new P({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L699"}}),Te=new pa({props:{$$slots:{default:[Ii]},$$scope:{ctx:T}}}),yt=new P({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1161",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),kt=new P({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1669"}}),wt=new P({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1297",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),Ht=new P({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L735"}}),jt=new P({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1254",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),Dt=new P({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L747"}}),Et=new P({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1603",returnDescription:`
<p>The HTTP response in json.</p>
`}}),qt=new P({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": bool = True"},{name:"commit_summary",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<em>str</em>, <em>bytes</em>, or <em>IO</em>) &#x2014;
Path to a file on the local machine or binary data stream /
fileobj / buffer.`,name:"path_or_fileobj"},{anchor:"huggingface_hub.HfApi.upload_file.path_in_repo",description:`<strong>path_in_repo</strong> (<em>str</em>) &#x2014;
Relative filepath in the repo, for example:
<em>&#x201C;checkpoints/1fec34a/weights.bin&#x201D;</em>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.upload_file.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
The repository to which the file will be uploaded, for example:
<em>&#x201C;username/custom_transformers&#x201D;</em>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.upload_file.token",description:`<strong>token</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Authentication token, obtained with <em>HfApi.login</em> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.upload_file.repo_type",description:`<strong>repo_type</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Set to <em>&#x201C;dataset&#x201D;</em> or <em>&#x201C;space&#x201D;</em> if uploading to a dataset or
space, <em>None</em> or <em>&#x201C;model&#x201D;</em> if uploading to a model. Default is
<em>None</em>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.upload_file.revision",description:`<strong>revision</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<em>&#x201C;main&#x201D;</em> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_file.identical_ok",description:`<strong>identical_ok</strong> (<em>bool</em>, <em>optional</em>, defaults to <em>True</em>) &#x2014;
DEPRECATED - does not do anything`,name:"identical_ok"},{anchor:"huggingface_hub.HfApi.upload_file.commmit_summary",description:`<strong>commmit_summary</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The summary or title of the generated commit`,name:"commmit_summary"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<em>str</em> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1855",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><em>str</em></p>
`}}),Me=new pa({props:{$$slots:{default:[Mi]},$$scope:{ctx:T}}}),Ce=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Ci]},$$scope:{ctx:T}}}),Ft=new P({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_summary",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.upload_folder.commmit_summary",description:`<strong>commmit_summary</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary or title of the generated commit. Defaults to:
<code>f&quot;Upload {path_in_repo} with huggingface_hub&quot;</code>`,name:"commmit_summary"},{anchor:"huggingface_hub.HfApi.upload_folder.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_folder.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from the pushed changes. Defaults
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1969",returnDescription:`
<p>TODO @SBrandeis</p>
`,returnType:`
<p><code>str</code> or None</p>
`}}),Se=new pa({props:{$$slots:{default:[Si]},$$scope:{ctx:T}}}),Ue=new he({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Ui]},$$scope:{ctx:T}}}),Tt=new P({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L609"}}),Pt=new Nr({}),Ot=new P({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2190"}}),It=new P({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2227"}}),Mt=new P({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2206",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),St=new P({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2193"}}),Ut=new Nr({}),zt=new P({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L157"}}),Je=new he({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[zi]},$$scope:{ctx:T}}}),Vt=new P({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L243"}}),Qe=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Vi]},$$scope:{ctx:T}}}),Wt=new P({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L451"}}),Xe=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Wi]},$$scope:{ctx:T}}}),Gt=new P({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L413"}}),Ye=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Gi]},$$scope:{ctx:T}}}),{c(){i=n("meta"),b=l(),m=n("h1"),h=n("a"),u=n("span"),k(o.$$.fragment),d=l(),F=n("span"),f=p("Hugging Face Hub API"),y=l(),q=n("p"),L=p("Below is the documentation for the "),I=n("code"),M=p("HfApi"),C=p(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),N=l(),O=n("p"),S=p("All methods from the "),U=n("code"),R=p("HfApi"),B=p(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),z=l(),W=n("p"),K=p("The following approach uses the method from the root of the package:"),co=l(),k(nt.$$.fragment),ho=l(),ue=n("p"),Jo=p("The following approach uses the "),ca=n("code"),Qo=p("HfApi"),Xo=p(" class:"),mo=l(),k(st.$$.fragment),fo=l(),_e=n("p"),Yo=p("Using the "),ha=n("code"),Zo=p("HfApi"),en=p(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),uo=l(),D=n("div"),k(rt.$$.fragment),tn=l(),be=n("div"),k(it.$$.fragment),an=l(),da=n("p"),on=p("Creates a commit in the given repo, deleting & uploading files as needed."),nn=l(),ve=n("div"),k(lt.$$.fragment),sn=l(),ma=n("p"),rn=p("Create an empty repo on the HuggingFace Hub."),ln=l(),se=n("div"),k(gt.$$.fragment),gn=l(),fa=n("p"),pn=p("Get info on one specific dataset on huggingface.co."),cn=l(),ua=n("p"),hn=p("Dataset can be private if you pass an acceptable token."),dn=l(),re=n("div"),k(pt.$$.fragment),mn=l(),_a=n("p"),fn=p("Deletes a file in the given repo."),un=l(),k($e.$$.fragment),_n=l(),ye=n("div"),k(ct.$$.fragment),bn=l(),ba=n("p"),vn=p("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),$n=l(),ke=n("div"),k(ht.$$.fragment),yn=l(),va=n("p"),kn=p("Gets all valid dataset tags as a nested namespace object."),An=l(),Ae=n("div"),k(dt.$$.fragment),xn=l(),$a=n("p"),wn=p(`Returns the repository name for a given model ID and optional
organization.`),Hn=l(),xe=n("div"),k(mt.$$.fragment),jn=l(),ya=n("p"),Dn=p("Gets all valid model tags as a nested namespace object"),En=l(),J=n("div"),k(ft.$$.fragment),qn=l(),ka=n("p"),Fn=p("Get the public list of all the datasets on huggingface.co"),Nn=l(),k(we.$$.fragment),Tn=l(),k(He.$$.fragment),Pn=l(),je=n("div"),k(ut.$$.fragment),Ln=l(),Aa=n("p"),On=p("Get the public list of all the metrics on huggingface.co"),In=l(),Q=n("div"),k(_t.$$.fragment),Mn=l(),xa=n("p"),Cn=p("Get the public list of all the models on huggingface.co"),Sn=l(),k(De.$$.fragment),Un=l(),k(Ee.$$.fragment),zn=l(),qe=n("div"),k(bt.$$.fragment),Vn=l(),wa=n("p"),Wn=p("Get the list of files in a given repo."),Gn=l(),X=n("div"),k(vt.$$.fragment),Rn=l(),Ha=n("p"),Bn=p("Call HF API to sign in a user and get a token if credentials are valid."),Kn=l(),k(Fe.$$.fragment),Jn=l(),k(Ne.$$.fragment),Qn=l(),ie=n("div"),k($t.$$.fragment),Xn=l(),ja=n("p"),Yn=p("Call HF API to log out."),Zn=l(),k(Te.$$.fragment),es=l(),le=n("div"),k(yt.$$.fragment),ts=l(),Da=n("p"),as=p("Get info on one specific model on huggingface.co"),os=l(),Ea=n("p"),ns=p("Model can be private if you pass an acceptable token or are logged in."),ss=l(),ge=n("div"),k(kt.$$.fragment),rs=l(),qa=n("p"),is=p("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ls=l(),At=n("p"),gs=p(`Note there are certain limitations. For more information about moving
repositories, please see
`),xt=n("a"),ps=p("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),cs=p("."),hs=l(),Pe=n("div"),k(wt.$$.fragment),ds=l(),Fa=n("p"),ms=p("Get the info object for a given repo of a given type."),fs=l(),Le=n("div"),k(Ht.$$.fragment),us=l(),Na=n("p"),_s=p(`Saves the passed access token so git can correctly authenticate the
user.`),bs=l(),pe=n("div"),k(jt.$$.fragment),vs=l(),Ta=n("p"),$s=p("Get info on one specific Space on huggingface.co."),ys=l(),Pa=n("p"),ks=p("Space can be private if you pass an acceptable token."),As=l(),Oe=n("div"),k(Dt.$$.fragment),xs=l(),La=n("p"),ws=p("Resets the user\u2019s access token."),Hs=l(),Ie=n("div"),k(Et.$$.fragment),js=l(),Oa=n("p"),Ds=p("Update the visibility setting of a repository."),Es=l(),Y=n("div"),k(qt.$$.fragment),qs=l(),Ia=n("p"),Fs=p(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ns=l(),k(Me.$$.fragment),Ts=l(),k(Ce.$$.fragment),Ps=l(),V=n("div"),k(Ft.$$.fragment),Ls=l(),Ma=n("p"),Os=p(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Is=l(),Ca=n("p"),Ms=p(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Cs=l(),Nt=n("p"),Ss=p("Uses "),Sa=n("code"),Us=p("HfApi.create_commit"),zs=p(" under the hood."),Vs=l(),k(Se.$$.fragment),Ws=l(),k(Ue.$$.fragment),Gs=l(),ze=n("div"),k(Tt.$$.fragment),Rs=l(),Ua=n("p"),Bs=p("Call HF API to know \u201Cwhoami\u201D."),_o=l(),me=n("h2"),Ve=n("a"),za=n("span"),k(Pt.$$.fragment),Ks=l(),Va=n("span"),Js=p("Hugging Face local storage"),bo=l(),Lt=n("p"),Wa=n("code"),Qs=p("huggingface_hub"),Xs=p(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),vo=l(),We=n("p"),Ys=p("It does this using the "),Yt=n("a"),Zs=p("HfFolder"),er=p(" utility, which saves data at the root of the user."),$o=l(),G=n("div"),k(Ot.$$.fragment),tr=l(),Ge=n("div"),k(It.$$.fragment),ar=l(),Ga=n("p"),or=p("Deletes the token from storage. Does not fail if token does not exist."),nr=l(),ce=n("div"),k(Mt.$$.fragment),sr=l(),Ra=n("p"),rr=p("Get token or None if not existent."),ir=l(),Ct=n("p"),lr=p("Note that a token can be also provided using the "),Ba=n("code"),gr=p("HUGGING_FACE_HUB_TOKEN"),pr=p(`
environment variable.`),cr=l(),Re=n("div"),k(St.$$.fragment),hr=l(),Ka=n("p"),dr=p("Save token, creating folder as needed."),yo=l(),fe=n("h2"),Be=n("a"),Ja=n("span"),k(Ut.$$.fragment),mr=l(),Qa=n("span"),fr=p("Filtering helpers"),ko=l(),Ke=n("p"),ur=p("Some helpers to filter repositories on the Hub are available in the "),Xa=n("code"),_r=p("huggingface_hub"),br=p(" package."),Ao=l(),te=n("div"),k(zt.$$.fragment),vr=l(),Ya=n("p"),$r=p(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yr=l(),k(Je.$$.fragment),xo=l(),ae=n("div"),k(Vt.$$.fragment),kr=l(),Za=n("p"),Ar=p(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),xr=l(),k(Qe.$$.fragment),wo=l(),oe=n("div"),k(Wt.$$.fragment),wr=l(),eo=n("p"),Hr=p(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),jr=l(),k(Xe.$$.fragment),Ho=l(),ne=n("div"),k(Gt.$$.fragment),Dr=l(),to=n("p"),Er=p(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),qr=l(),k(Ye.$$.fragment),this.h()},l(t){const _=Di('[data-svelte="svelte-1phssyn"]',document.head);i=s(_,"META",{name:!0,content:!0}),_.forEach(a),b=g(t),m=s(t,"H1",{class:!0});var Rt=r(m);h=s(Rt,"A",{id:!0,class:!0,href:!0});var ao=r(h);u=s(ao,"SPAN",{});var oo=r(u);A(o.$$.fragment,oo),oo.forEach(a),ao.forEach(a),d=g(Rt),F=s(Rt,"SPAN",{});var no=r(F);f=c(no,"Hugging Face Hub API"),no.forEach(a),Rt.forEach(a),y=g(t),q=s(t,"P",{});var Bt=r(q);L=c(Bt,"Below is the documentation for the "),I=s(Bt,"CODE",{});var so=r(I);M=c(so,"HfApi"),so.forEach(a),C=c(Bt,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Bt.forEach(a),N=g(t),O=s(t,"P",{});var Kt=r(O);S=c(Kt,"All methods from the "),U=s(Kt,"CODE",{});var ro=r(U);R=c(ro,"HfApi"),ro.forEach(a),B=c(Kt,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Kt.forEach(a),z=g(t),W=s(t,"P",{});var io=r(W);K=c(io,"The following approach uses the method from the root of the package:"),io.forEach(a),co=g(t),A(nt.$$.fragment,t),ho=g(t),ue=s(t,"P",{});var Jt=r(ue);Jo=c(Jt,"The following approach uses the "),ca=s(Jt,"CODE",{});var lo=r(ca);Qo=c(lo,"HfApi"),lo.forEach(a),Xo=c(Jt," class:"),Jt.forEach(a),mo=g(t),A(st.$$.fragment,t),fo=g(t),_e=s(t,"P",{});var Qt=r(_e);Yo=c(Qt,"Using the "),ha=s(Qt,"CODE",{});var go=r(ha);Zo=c(go,"HfApi"),go.forEach(a),en=c(Qt," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Qt.forEach(a),uo=g(t),D=s(t,"DIV",{class:!0});var E=r(D);A(rt.$$.fragment,E),tn=g(E),be=s(E,"DIV",{class:!0});var Xt=r(be);A(it.$$.fragment,Xt),an=g(Xt),da=s(Xt,"P",{});var po=r(da);on=c(po,"Creates a commit in the given repo, deleting & uploading files as needed."),po.forEach(a),Xt.forEach(a),nn=g(E),ve=s(E,"DIV",{class:!0});var Do=r(ve);A(lt.$$.fragment,Do),sn=g(Do),ma=s(Do,"P",{});var Tr=r(ma);rn=c(Tr,"Create an empty repo on the HuggingFace Hub."),Tr.forEach(a),Do.forEach(a),ln=g(E),se=s(E,"DIV",{class:!0});var Zt=r(se);A(gt.$$.fragment,Zt),gn=g(Zt),fa=s(Zt,"P",{});var Pr=r(fa);pn=c(Pr,"Get info on one specific dataset on huggingface.co."),Pr.forEach(a),cn=g(Zt),ua=s(Zt,"P",{});var Lr=r(ua);hn=c(Lr,"Dataset can be private if you pass an acceptable token."),Lr.forEach(a),Zt.forEach(a),dn=g(E),re=s(E,"DIV",{class:!0});var ea=r(re);A(pt.$$.fragment,ea),mn=g(ea),_a=s(ea,"P",{});var Or=r(_a);fn=c(Or,"Deletes a file in the given repo."),Or.forEach(a),un=g(ea),A($e.$$.fragment,ea),ea.forEach(a),_n=g(E),ye=s(E,"DIV",{class:!0});var Eo=r(ye);A(ct.$$.fragment,Eo),bn=g(Eo),ba=s(Eo,"P",{});var Ir=r(ba);vn=c(Ir,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ir.forEach(a),Eo.forEach(a),$n=g(E),ke=s(E,"DIV",{class:!0});var qo=r(ke);A(ht.$$.fragment,qo),yn=g(qo),va=s(qo,"P",{});var Mr=r(va);kn=c(Mr,"Gets all valid dataset tags as a nested namespace object."),Mr.forEach(a),qo.forEach(a),An=g(E),Ae=s(E,"DIV",{class:!0});var Fo=r(Ae);A(dt.$$.fragment,Fo),xn=g(Fo),$a=s(Fo,"P",{});var Cr=r($a);wn=c(Cr,`Returns the repository name for a given model ID and optional
organization.`),Cr.forEach(a),Fo.forEach(a),Hn=g(E),xe=s(E,"DIV",{class:!0});var No=r(xe);A(mt.$$.fragment,No),jn=g(No),ya=s(No,"P",{});var Sr=r(ya);Dn=c(Sr,"Gets all valid model tags as a nested namespace object"),Sr.forEach(a),No.forEach(a),En=g(E),J=s(E,"DIV",{class:!0});var Ze=r(J);A(ft.$$.fragment,Ze),qn=g(Ze),ka=s(Ze,"P",{});var Ur=r(ka);Fn=c(Ur,"Get the public list of all the datasets on huggingface.co"),Ur.forEach(a),Nn=g(Ze),A(we.$$.fragment,Ze),Tn=g(Ze),A(He.$$.fragment,Ze),Ze.forEach(a),Pn=g(E),je=s(E,"DIV",{class:!0});var To=r(je);A(ut.$$.fragment,To),Ln=g(To),Aa=s(To,"P",{});var zr=r(Aa);On=c(zr,"Get the public list of all the metrics on huggingface.co"),zr.forEach(a),To.forEach(a),In=g(E),Q=s(E,"DIV",{class:!0});var et=r(Q);A(_t.$$.fragment,et),Mn=g(et),xa=s(et,"P",{});var Vr=r(xa);Cn=c(Vr,"Get the public list of all the models on huggingface.co"),Vr.forEach(a),Sn=g(et),A(De.$$.fragment,et),Un=g(et),A(Ee.$$.fragment,et),et.forEach(a),zn=g(E),qe=s(E,"DIV",{class:!0});var Po=r(qe);A(bt.$$.fragment,Po),Vn=g(Po),wa=s(Po,"P",{});var Wr=r(wa);Wn=c(Wr,"Get the list of files in a given repo."),Wr.forEach(a),Po.forEach(a),Gn=g(E),X=s(E,"DIV",{class:!0});var tt=r(X);A(vt.$$.fragment,tt),Rn=g(tt),Ha=s(tt,"P",{});var Gr=r(Ha);Bn=c(Gr,"Call HF API to sign in a user and get a token if credentials are valid."),Gr.forEach(a),Kn=g(tt),A(Fe.$$.fragment,tt),Jn=g(tt),A(Ne.$$.fragment,tt),tt.forEach(a),Qn=g(E),ie=s(E,"DIV",{class:!0});var ta=r(ie);A($t.$$.fragment,ta),Xn=g(ta),ja=s(ta,"P",{});var Rr=r(ja);Yn=c(Rr,"Call HF API to log out."),Rr.forEach(a),Zn=g(ta),A(Te.$$.fragment,ta),ta.forEach(a),es=g(E),le=s(E,"DIV",{class:!0});var aa=r(le);A(yt.$$.fragment,aa),ts=g(aa),Da=s(aa,"P",{});var Br=r(Da);as=c(Br,"Get info on one specific model on huggingface.co"),Br.forEach(a),os=g(aa),Ea=s(aa,"P",{});var Kr=r(Ea);ns=c(Kr,"Model can be private if you pass an acceptable token or are logged in."),Kr.forEach(a),aa.forEach(a),ss=g(E),ge=s(E,"DIV",{class:!0});var oa=r(ge);A(kt.$$.fragment,oa),rs=g(oa),qa=s(oa,"P",{});var Jr=r(qa);is=c(Jr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Jr.forEach(a),ls=g(oa),At=s(oa,"P",{});var Lo=r(At);gs=c(Lo,`Note there are certain limitations. For more information about moving
repositories, please see
`),xt=s(Lo,"A",{href:!0,rel:!0});var Qr=r(xt);ps=c(Qr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Qr.forEach(a),cs=c(Lo,"."),Lo.forEach(a),oa.forEach(a),hs=g(E),Pe=s(E,"DIV",{class:!0});var Oo=r(Pe);A(wt.$$.fragment,Oo),ds=g(Oo),Fa=s(Oo,"P",{});var Xr=r(Fa);ms=c(Xr,"Get the info object for a given repo of a given type."),Xr.forEach(a),Oo.forEach(a),fs=g(E),Le=s(E,"DIV",{class:!0});var Io=r(Le);A(Ht.$$.fragment,Io),us=g(Io),Na=s(Io,"P",{});var Yr=r(Na);_s=c(Yr,`Saves the passed access token so git can correctly authenticate the
user.`),Yr.forEach(a),Io.forEach(a),bs=g(E),pe=s(E,"DIV",{class:!0});var na=r(pe);A(jt.$$.fragment,na),vs=g(na),Ta=s(na,"P",{});var Zr=r(Ta);$s=c(Zr,"Get info on one specific Space on huggingface.co."),Zr.forEach(a),ys=g(na),Pa=s(na,"P",{});var ei=r(Pa);ks=c(ei,"Space can be private if you pass an acceptable token."),ei.forEach(a),na.forEach(a),As=g(E),Oe=s(E,"DIV",{class:!0});var Mo=r(Oe);A(Dt.$$.fragment,Mo),xs=g(Mo),La=s(Mo,"P",{});var ti=r(La);ws=c(ti,"Resets the user\u2019s access token."),ti.forEach(a),Mo.forEach(a),Hs=g(E),Ie=s(E,"DIV",{class:!0});var Co=r(Ie);A(Et.$$.fragment,Co),js=g(Co),Oa=s(Co,"P",{});var ai=r(Oa);Ds=c(ai,"Update the visibility setting of a repository."),ai.forEach(a),Co.forEach(a),Es=g(E),Y=s(E,"DIV",{class:!0});var at=r(Y);A(qt.$$.fragment,at),qs=g(at),Ia=s(at,"P",{});var oi=r(Ia);Fs=c(oi,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),oi.forEach(a),Ns=g(at),A(Me.$$.fragment,at),Ts=g(at),A(Ce.$$.fragment,at),at.forEach(a),Ps=g(E),V=s(E,"DIV",{class:!0});var Z=r(V);A(Ft.$$.fragment,Z),Ls=g(Z),Ma=s(Z,"P",{});var ni=r(Ma);Os=c(ni,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),ni.forEach(a),Is=g(Z),Ca=s(Z,"P",{});var si=r(Ca);Ms=c(si,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),si.forEach(a),Cs=g(Z),Nt=s(Z,"P",{});var So=r(Nt);Ss=c(So,"Uses "),Sa=s(So,"CODE",{});var ri=r(Sa);Us=c(ri,"HfApi.create_commit"),ri.forEach(a),zs=c(So," under the hood."),So.forEach(a),Vs=g(Z),A(Se.$$.fragment,Z),Ws=g(Z),A(Ue.$$.fragment,Z),Z.forEach(a),Gs=g(E),ze=s(E,"DIV",{class:!0});var Uo=r(ze);A(Tt.$$.fragment,Uo),Rs=g(Uo),Ua=s(Uo,"P",{});var ii=r(Ua);Bs=c(ii,"Call HF API to know \u201Cwhoami\u201D."),ii.forEach(a),Uo.forEach(a),E.forEach(a),_o=g(t),me=s(t,"H2",{class:!0});var zo=r(me);Ve=s(zo,"A",{id:!0,class:!0,href:!0});var li=r(Ve);za=s(li,"SPAN",{});var gi=r(za);A(Pt.$$.fragment,gi),gi.forEach(a),li.forEach(a),Ks=g(zo),Va=s(zo,"SPAN",{});var pi=r(Va);Js=c(pi,"Hugging Face local storage"),pi.forEach(a),zo.forEach(a),bo=g(t),Lt=s(t,"P",{});var Fr=r(Lt);Wa=s(Fr,"CODE",{});var ci=r(Wa);Qs=c(ci,"huggingface_hub"),ci.forEach(a),Xs=c(Fr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fr.forEach(a),vo=g(t),We=s(t,"P",{});var Vo=r(We);Ys=c(Vo,"It does this using the "),Yt=s(Vo,"A",{href:!0});var hi=r(Yt);Zs=c(hi,"HfFolder"),hi.forEach(a),er=c(Vo," utility, which saves data at the root of the user."),Vo.forEach(a),$o=g(t),G=s(t,"DIV",{class:!0});var ot=r(G);A(Ot.$$.fragment,ot),tr=g(ot),Ge=s(ot,"DIV",{class:!0});var Wo=r(Ge);A(It.$$.fragment,Wo),ar=g(Wo),Ga=s(Wo,"P",{});var di=r(Ga);or=c(di,"Deletes the token from storage. Does not fail if token does not exist."),di.forEach(a),Wo.forEach(a),nr=g(ot),ce=s(ot,"DIV",{class:!0});var sa=r(ce);A(Mt.$$.fragment,sa),sr=g(sa),Ra=s(sa,"P",{});var mi=r(Ra);rr=c(mi,"Get token or None if not existent."),mi.forEach(a),ir=g(sa),Ct=s(sa,"P",{});var Go=r(Ct);lr=c(Go,"Note that a token can be also provided using the "),Ba=s(Go,"CODE",{});var fi=r(Ba);gr=c(fi,"HUGGING_FACE_HUB_TOKEN"),fi.forEach(a),pr=c(Go,`
environment variable.`),Go.forEach(a),sa.forEach(a),cr=g(ot),Re=s(ot,"DIV",{class:!0});var Ro=r(Re);A(St.$$.fragment,Ro),hr=g(Ro),Ka=s(Ro,"P",{});var ui=r(Ka);dr=c(ui,"Save token, creating folder as needed."),ui.forEach(a),Ro.forEach(a),ot.forEach(a),yo=g(t),fe=s(t,"H2",{class:!0});var Bo=r(fe);Be=s(Bo,"A",{id:!0,class:!0,href:!0});var _i=r(Be);Ja=s(_i,"SPAN",{});var bi=r(Ja);A(Ut.$$.fragment,bi),bi.forEach(a),_i.forEach(a),mr=g(Bo),Qa=s(Bo,"SPAN",{});var vi=r(Qa);fr=c(vi,"Filtering helpers"),vi.forEach(a),Bo.forEach(a),ko=g(t),Ke=s(t,"P",{});var Ko=r(Ke);ur=c(Ko,"Some helpers to filter repositories on the Hub are available in the "),Xa=s(Ko,"CODE",{});var $i=r(Xa);_r=c($i,"huggingface_hub"),$i.forEach(a),br=c(Ko," package."),Ko.forEach(a),Ao=g(t),te=s(t,"DIV",{class:!0});var ra=r(te);A(zt.$$.fragment,ra),vr=g(ra),Ya=s(ra,"P",{});var yi=r(Ya);$r=c(yi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yi.forEach(a),yr=g(ra),A(Je.$$.fragment,ra),ra.forEach(a),xo=g(t),ae=s(t,"DIV",{class:!0});var ia=r(ae);A(Vt.$$.fragment,ia),kr=g(ia),Za=s(ia,"P",{});var ki=r(Za);Ar=c(ki,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ki.forEach(a),xr=g(ia),A(Qe.$$.fragment,ia),ia.forEach(a),wo=g(t),oe=s(t,"DIV",{class:!0});var la=r(oe);A(Wt.$$.fragment,la),wr=g(la),eo=s(la,"P",{});var Ai=r(eo);Hr=c(Ai,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ai.forEach(a),jr=g(la),A(Xe.$$.fragment,la),la.forEach(a),Ho=g(t),ne=s(t,"DIV",{class:!0});var ga=r(ne);A(Gt.$$.fragment,ga),Dr=g(ga),to=s(ga,"P",{});var xi=r(to);Er=c(xi,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),xi.forEach(a),qr=g(ga),A(Ye.$$.fragment,ga),ga.forEach(a),this.h()},h(){$(i,"name","hf:doc:metadata"),$(i,"content",JSON.stringify(Bi)),$(h,"id","huggingface_hub.HfApi"),$(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(h,"href","#huggingface_hub.HfApi"),$(m,"class","relative group"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(xt,"rel","nofollow"),$(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"id","huggingface_hub.HfFolder"),$(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Ve,"href","#huggingface_hub.HfFolder"),$(me,"class","relative group"),$(Yt,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"id","huggingface_hub.DatasetFilter"),$(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Be,"href","#huggingface_hub.DatasetFilter"),$(fe,"class","relative group"),$(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,i),v(t,b,_),v(t,m,_),e(m,h),e(h,u),x(o,u,null),e(m,d),e(m,F),e(F,f),v(t,y,_),v(t,q,_),e(q,L),e(q,I),e(I,M),e(q,C),v(t,N,_),v(t,O,_),e(O,S),e(O,U),e(U,R),e(O,B),v(t,z,_),v(t,W,_),e(W,K),v(t,co,_),x(nt,t,_),v(t,ho,_),v(t,ue,_),e(ue,Jo),e(ue,ca),e(ca,Qo),e(ue,Xo),v(t,mo,_),x(st,t,_),v(t,fo,_),v(t,_e,_),e(_e,Yo),e(_e,ha),e(ha,Zo),e(_e,en),v(t,uo,_),v(t,D,_),x(rt,D,null),e(D,tn),e(D,be),x(it,be,null),e(be,an),e(be,da),e(da,on),e(D,nn),e(D,ve),x(lt,ve,null),e(ve,sn),e(ve,ma),e(ma,rn),e(D,ln),e(D,se),x(gt,se,null),e(se,gn),e(se,fa),e(fa,pn),e(se,cn),e(se,ua),e(ua,hn),e(D,dn),e(D,re),x(pt,re,null),e(re,mn),e(re,_a),e(_a,fn),e(re,un),x($e,re,null),e(D,_n),e(D,ye),x(ct,ye,null),e(ye,bn),e(ye,ba),e(ba,vn),e(D,$n),e(D,ke),x(ht,ke,null),e(ke,yn),e(ke,va),e(va,kn),e(D,An),e(D,Ae),x(dt,Ae,null),e(Ae,xn),e(Ae,$a),e($a,wn),e(D,Hn),e(D,xe),x(mt,xe,null),e(xe,jn),e(xe,ya),e(ya,Dn),e(D,En),e(D,J),x(ft,J,null),e(J,qn),e(J,ka),e(ka,Fn),e(J,Nn),x(we,J,null),e(J,Tn),x(He,J,null),e(D,Pn),e(D,je),x(ut,je,null),e(je,Ln),e(je,Aa),e(Aa,On),e(D,In),e(D,Q),x(_t,Q,null),e(Q,Mn),e(Q,xa),e(xa,Cn),e(Q,Sn),x(De,Q,null),e(Q,Un),x(Ee,Q,null),e(D,zn),e(D,qe),x(bt,qe,null),e(qe,Vn),e(qe,wa),e(wa,Wn),e(D,Gn),e(D,X),x(vt,X,null),e(X,Rn),e(X,Ha),e(Ha,Bn),e(X,Kn),x(Fe,X,null),e(X,Jn),x(Ne,X,null),e(D,Qn),e(D,ie),x($t,ie,null),e(ie,Xn),e(ie,ja),e(ja,Yn),e(ie,Zn),x(Te,ie,null),e(D,es),e(D,le),x(yt,le,null),e(le,ts),e(le,Da),e(Da,as),e(le,os),e(le,Ea),e(Ea,ns),e(D,ss),e(D,ge),x(kt,ge,null),e(ge,rs),e(ge,qa),e(qa,is),e(ge,ls),e(ge,At),e(At,gs),e(At,xt),e(xt,ps),e(At,cs),e(D,hs),e(D,Pe),x(wt,Pe,null),e(Pe,ds),e(Pe,Fa),e(Fa,ms),e(D,fs),e(D,Le),x(Ht,Le,null),e(Le,us),e(Le,Na),e(Na,_s),e(D,bs),e(D,pe),x(jt,pe,null),e(pe,vs),e(pe,Ta),e(Ta,$s),e(pe,ys),e(pe,Pa),e(Pa,ks),e(D,As),e(D,Oe),x(Dt,Oe,null),e(Oe,xs),e(Oe,La),e(La,ws),e(D,Hs),e(D,Ie),x(Et,Ie,null),e(Ie,js),e(Ie,Oa),e(Oa,Ds),e(D,Es),e(D,Y),x(qt,Y,null),e(Y,qs),e(Y,Ia),e(Ia,Fs),e(Y,Ns),x(Me,Y,null),e(Y,Ts),x(Ce,Y,null),e(D,Ps),e(D,V),x(Ft,V,null),e(V,Ls),e(V,Ma),e(Ma,Os),e(V,Is),e(V,Ca),e(Ca,Ms),e(V,Cs),e(V,Nt),e(Nt,Ss),e(Nt,Sa),e(Sa,Us),e(Nt,zs),e(V,Vs),x(Se,V,null),e(V,Ws),x(Ue,V,null),e(D,Gs),e(D,ze),x(Tt,ze,null),e(ze,Rs),e(ze,Ua),e(Ua,Bs),v(t,_o,_),v(t,me,_),e(me,Ve),e(Ve,za),x(Pt,za,null),e(me,Ks),e(me,Va),e(Va,Js),v(t,bo,_),v(t,Lt,_),e(Lt,Wa),e(Wa,Qs),e(Lt,Xs),v(t,vo,_),v(t,We,_),e(We,Ys),e(We,Yt),e(Yt,Zs),e(We,er),v(t,$o,_),v(t,G,_),x(Ot,G,null),e(G,tr),e(G,Ge),x(It,Ge,null),e(Ge,ar),e(Ge,Ga),e(Ga,or),e(G,nr),e(G,ce),x(Mt,ce,null),e(ce,sr),e(ce,Ra),e(Ra,rr),e(ce,ir),e(ce,Ct),e(Ct,lr),e(Ct,Ba),e(Ba,gr),e(Ct,pr),e(G,cr),e(G,Re),x(St,Re,null),e(Re,hr),e(Re,Ka),e(Ka,dr),v(t,yo,_),v(t,fe,_),e(fe,Be),e(Be,Ja),x(Ut,Ja,null),e(fe,mr),e(fe,Qa),e(Qa,fr),v(t,ko,_),v(t,Ke,_),e(Ke,ur),e(Ke,Xa),e(Xa,_r),e(Ke,br),v(t,Ao,_),v(t,te,_),x(zt,te,null),e(te,vr),e(te,Ya),e(Ya,$r),e(te,yr),x(Je,te,null),v(t,xo,_),v(t,ae,_),x(Vt,ae,null),e(ae,kr),e(ae,Za),e(Za,Ar),e(ae,xr),x(Qe,ae,null),v(t,wo,_),v(t,oe,_),x(Wt,oe,null),e(oe,wr),e(oe,eo),e(eo,Hr),e(oe,jr),x(Xe,oe,null),v(t,Ho,_),v(t,ne,_),x(Gt,ne,null),e(ne,Dr),e(ne,to),e(to,Er),e(ne,qr),x(Ye,ne,null),jo=!0},p(t,[_]){const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:t}),$e.$set(Rt);const ao={};_&2&&(ao.$$scope={dirty:_,ctx:t}),we.$set(ao);const oo={};_&2&&(oo.$$scope={dirty:_,ctx:t}),He.$set(oo);const no={};_&2&&(no.$$scope={dirty:_,ctx:t}),De.$set(no);const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:t}),Ee.$set(Bt);const so={};_&2&&(so.$$scope={dirty:_,ctx:t}),Fe.$set(so);const Kt={};_&2&&(Kt.$$scope={dirty:_,ctx:t}),Ne.$set(Kt);const ro={};_&2&&(ro.$$scope={dirty:_,ctx:t}),Te.$set(ro);const io={};_&2&&(io.$$scope={dirty:_,ctx:t}),Me.$set(io);const Jt={};_&2&&(Jt.$$scope={dirty:_,ctx:t}),Ce.$set(Jt);const lo={};_&2&&(lo.$$scope={dirty:_,ctx:t}),Se.$set(lo);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:t}),Ue.$set(Qt);const go={};_&2&&(go.$$scope={dirty:_,ctx:t}),Je.$set(go);const E={};_&2&&(E.$$scope={dirty:_,ctx:t}),Qe.$set(E);const Xt={};_&2&&(Xt.$$scope={dirty:_,ctx:t}),Xe.$set(Xt);const po={};_&2&&(po.$$scope={dirty:_,ctx:t}),Ye.$set(po)},i(t){jo||(w(o.$$.fragment,t),w(nt.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(gt.$$.fragment,t),w(pt.$$.fragment,t),w($e.$$.fragment,t),w(ct.$$.fragment,t),w(ht.$$.fragment,t),w(dt.$$.fragment,t),w(mt.$$.fragment,t),w(ft.$$.fragment,t),w(we.$$.fragment,t),w(He.$$.fragment,t),w(ut.$$.fragment,t),w(_t.$$.fragment,t),w(De.$$.fragment,t),w(Ee.$$.fragment,t),w(bt.$$.fragment,t),w(vt.$$.fragment,t),w(Fe.$$.fragment,t),w(Ne.$$.fragment,t),w($t.$$.fragment,t),w(Te.$$.fragment,t),w(yt.$$.fragment,t),w(kt.$$.fragment,t),w(wt.$$.fragment,t),w(Ht.$$.fragment,t),w(jt.$$.fragment,t),w(Dt.$$.fragment,t),w(Et.$$.fragment,t),w(qt.$$.fragment,t),w(Me.$$.fragment,t),w(Ce.$$.fragment,t),w(Ft.$$.fragment,t),w(Se.$$.fragment,t),w(Ue.$$.fragment,t),w(Tt.$$.fragment,t),w(Pt.$$.fragment,t),w(Ot.$$.fragment,t),w(It.$$.fragment,t),w(Mt.$$.fragment,t),w(St.$$.fragment,t),w(Ut.$$.fragment,t),w(zt.$$.fragment,t),w(Je.$$.fragment,t),w(Vt.$$.fragment,t),w(Qe.$$.fragment,t),w(Wt.$$.fragment,t),w(Xe.$$.fragment,t),w(Gt.$$.fragment,t),w(Ye.$$.fragment,t),jo=!0)},o(t){H(o.$$.fragment,t),H(nt.$$.fragment,t),H(st.$$.fragment,t),H(rt.$$.fragment,t),H(it.$$.fragment,t),H(lt.$$.fragment,t),H(gt.$$.fragment,t),H(pt.$$.fragment,t),H($e.$$.fragment,t),H(ct.$$.fragment,t),H(ht.$$.fragment,t),H(dt.$$.fragment,t),H(mt.$$.fragment,t),H(ft.$$.fragment,t),H(we.$$.fragment,t),H(He.$$.fragment,t),H(ut.$$.fragment,t),H(_t.$$.fragment,t),H(De.$$.fragment,t),H(Ee.$$.fragment,t),H(bt.$$.fragment,t),H(vt.$$.fragment,t),H(Fe.$$.fragment,t),H(Ne.$$.fragment,t),H($t.$$.fragment,t),H(Te.$$.fragment,t),H(yt.$$.fragment,t),H(kt.$$.fragment,t),H(wt.$$.fragment,t),H(Ht.$$.fragment,t),H(jt.$$.fragment,t),H(Dt.$$.fragment,t),H(Et.$$.fragment,t),H(qt.$$.fragment,t),H(Me.$$.fragment,t),H(Ce.$$.fragment,t),H(Ft.$$.fragment,t),H(Se.$$.fragment,t),H(Ue.$$.fragment,t),H(Tt.$$.fragment,t),H(Pt.$$.fragment,t),H(Ot.$$.fragment,t),H(It.$$.fragment,t),H(Mt.$$.fragment,t),H(St.$$.fragment,t),H(Ut.$$.fragment,t),H(zt.$$.fragment,t),H(Je.$$.fragment,t),H(Vt.$$.fragment,t),H(Qe.$$.fragment,t),H(Wt.$$.fragment,t),H(Xe.$$.fragment,t),H(Gt.$$.fragment,t),H(Ye.$$.fragment,t),jo=!1},d(t){a(i),t&&a(b),t&&a(m),j(o),t&&a(y),t&&a(q),t&&a(N),t&&a(O),t&&a(z),t&&a(W),t&&a(co),j(nt,t),t&&a(ho),t&&a(ue),t&&a(mo),j(st,t),t&&a(fo),t&&a(_e),t&&a(uo),t&&a(D),j(rt),j(it),j(lt),j(gt),j(pt),j($e),j(ct),j(ht),j(dt),j(mt),j(ft),j(we),j(He),j(ut),j(_t),j(De),j(Ee),j(bt),j(vt),j(Fe),j(Ne),j($t),j(Te),j(yt),j(kt),j(wt),j(Ht),j(jt),j(Dt),j(Et),j(qt),j(Me),j(Ce),j(Ft),j(Se),j(Ue),j(Tt),t&&a(_o),t&&a(me),j(Pt),t&&a(bo),t&&a(Lt),t&&a(vo),t&&a(We),t&&a($o),t&&a(G),j(Ot),j(It),j(Mt),j(St),t&&a(yo),t&&a(fe),j(Ut),t&&a(ko),t&&a(Ke),t&&a(Ao),t&&a(te),j(zt),j(Je),t&&a(xo),t&&a(ae),j(Vt),j(Qe),t&&a(wo),t&&a(oe),j(Wt),j(Xe),t&&a(Ho),t&&a(ne),j(Gt),j(Ye)}}}const Bi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Ki(T){return Ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tl extends wi{constructor(i){super();Hi(this,i,Ki,Ri,ji,{})}}export{tl as default,Bi as metadata};
