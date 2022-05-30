import{S as si,i as ri,s as ii,e as o,k as l,w as k,t as c,M as li,c as n,d as a,m as g,a as s,x as w,h as p,b as v,G as e,g as b,y as A,q as x,o as j,B as H,v as gi,L as fe}from"../../chunks/vendor-hf-doc-builder.js";import{T as to}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as dr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as de}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ci(P){let i,$,d,f,m,r,h,q,u,y,F,L,O,M,S;return{c(){i=o("p"),$=c("Raises the following errors:"),d=l(),f=o("ul"),m=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=l(),F=o("li"),L=o("a"),O=o("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(T){i=n(T,"P",{});var I=s(i);$=p(I,"Raises the following errors:"),I.forEach(a),d=g(T),f=n(T,"UL",{});var U=s(f);m=n(U,"LI",{});var C=s(m);r=n(C,"A",{href:!0,rel:!0});var le=s(r);h=n(le,"CODE",{});var ge=s(h);q=p(ge,"HTTPError"),ge.forEach(a),le.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),F=n(U,"LI",{});var V=s(F);L=n(V,"A",{href:!0,rel:!0});var G=s(L);O=n(G,"CODE",{});var ce=s(O);M=p(ce,"ValueError"),ce.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(L,"rel","nofollow")},m(T,I){b(T,i,I),e(i,$),b(T,d,I),b(T,f,I),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u),e(f,y),e(f,F),e(F,L),e(L,O),e(O,M),e(F,S)},d(T){T&&a(i),T&&a(d),T&&a(f)}}}function pi(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=o("p"),$=c("Example usage with the "),d=o("code"),f=c("filter"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=n(u,"P",{});var y=s(i);$=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);f=p(F,"filter"),F.forEach(a),m=p(y," argument:"),y.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,y){b(u,i,y),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,y),A(h,u,y),q=!0},p:fe,i(u){q||(x(h.$$.fragment,u),q=!0)},o(u){j(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),H(h,u)}}}function hi(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),$=c("Example usage with the "),d=o("code"),f=c("search"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=n(u,"P",{});var y=s(i);$=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);f=p(F,"search"),F.forEach(a),m=p(y," argument:"),y.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,y){b(u,i,y),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,y),A(h,u,y),q=!0},p:fe,i(u){q||(x(h.$$.fragment,u),q=!0)},o(u){j(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),H(h,u)}}}function di(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=o("p"),$=c("Example usage with the "),d=o("code"),f=c("filter"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=n(u,"P",{});var y=s(i);$=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);f=p(F,"filter"),F.forEach(a),m=p(y," argument:"),y.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,y){b(u,i,y),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,y),A(h,u,y),q=!0},p:fe,i(u){q||(x(h.$$.fragment,u),q=!0)},o(u){j(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),H(h,u)}}}function fi(P){let i,$,d,f,m,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),$=c("Example usage with the "),d=o("code"),f=c("search"),m=c(" argument:"),r=l(),k(h.$$.fragment)},l(u){i=n(u,"P",{});var y=s(i);$=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);f=p(F,"search"),F.forEach(a),m=p(y," argument:"),y.forEach(a),r=g(u),w(h.$$.fragment,u)},m(u,y){b(u,i,y),e(i,$),e(i,d),e(d,f),e(i,m),b(u,r,y),A(h,u,y),q=!0},p:fe,i(u){q||(x(h.$$.fragment,u),q=!0)},o(u){j(h.$$.fragment,u),q=!1},d(u){u&&a(i),u&&a(r),H(h,u)}}}function ui(P){let i,$,d,f,m;return{c(){i=o("p"),$=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o("a"),f=c("HfApi.set_access_token()"),m=c(" instead."),this.h()},l(r){i=n(r,"P",{});var h=s(i);$=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n(h,"A",{href:!0});var q=s(d);f=p(q,"HfApi.set_access_token()"),q.forEach(a),m=p(h," instead."),h.forEach(a),this.h()},h(){v(d,"href","/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(r,h){b(r,i,h),e(i,$),e(i,d),e(d,f),e(i,m)},d(r){r&&a(i)}}}function mi(P){let i,$,d,f,m,r,h,q,u;return{c(){i=o("p"),$=c("Raises the following errors:"),d=l(),f=o("ul"),m=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),u=c(`
if credentials are invalid`),this.h()},l(y){i=n(y,"P",{});var F=s(i);$=p(F,"Raises the following errors:"),F.forEach(a),d=g(y),f=n(y,"UL",{});var L=s(f);m=n(L,"LI",{});var O=s(m);r=n(O,"A",{href:!0,rel:!0});var M=s(r);h=n(M,"CODE",{});var S=s(h);q=p(S,"HTTPError"),S.forEach(a),M.forEach(a),u=p(O,`
if credentials are invalid`),O.forEach(a),L.forEach(a),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow")},m(y,F){b(y,i,F),e(i,$),b(y,d,F),b(y,f,F),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u)},d(y){y&&a(i),y&&a(d),y&&a(f)}}}function _i(P){let i,$,d,f,m;return{c(){i=o("p"),$=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o("a"),f=c("HfApi.unset_access_token()"),m=c(" instead."),this.h()},l(r){i=n(r,"P",{});var h=s(i);$=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n(h,"A",{href:!0});var q=s(d);f=p(q,"HfApi.unset_access_token()"),q.forEach(a),m=p(h," instead."),h.forEach(a),this.h()},h(){v(d,"href","/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(r,h){b(r,i,h),e(i,$),e(i,d),e(d,f),e(i,m)},d(r){r&&a(i)}}}function bi(P){let i,$,d,f,m,r,h,q,u,y,F,L,O,M,S;return{c(){i=o("p"),$=c("Raises the following errors:"),d=l(),f=o("ul"),m=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=l(),F=o("li"),L=o("a"),O=o("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(T){i=n(T,"P",{});var I=s(i);$=p(I,"Raises the following errors:"),I.forEach(a),d=g(T),f=n(T,"UL",{});var U=s(f);m=n(U,"LI",{});var C=s(m);r=n(C,"A",{href:!0,rel:!0});var le=s(r);h=n(le,"CODE",{});var ge=s(h);q=p(ge,"HTTPError"),ge.forEach(a),le.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),F=n(U,"LI",{});var V=s(F);L=n(V,"A",{href:!0,rel:!0});var G=s(L);O=n(G,"CODE",{});var ce=s(O);M=p(ce,"ValueError"),ce.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){v(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),v(r,"rel","nofollow"),v(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),v(L,"rel","nofollow")},m(T,I){b(T,i,I),e(i,$),b(T,d,I),b(T,f,I),e(f,m),e(m,r),e(r,h),e(h,q),e(m,u),e(f,y),e(f,F),e(F,L),e(L,O),e(O,M),e(F,S)},d(T){T&&a(i),T&&a(d),T&&a(f)}}}function $i(P){let i,$,d,f,m;return f=new Z({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=o("p"),$=c("Example usage:"),d=l(),k(f.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);$=p(h,"Example usage:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:fe,i(r){m||(x(f.$$.fragment,r),m=!0)},o(r){j(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),H(f,r)}}}function vi(P){let i,$,d,f,m;return f=new Z({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=o("p"),$=c("Examples:"),d=l(),k(f.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);$=p(h,"Examples:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:fe,i(r){m||(x(f.$$.fragment,r),m=!0)},o(r){j(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),H(f,r)}}}function yi(P){let i,$;return i=new Z({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){k(i.$$.fragment)},l(d){w(i.$$.fragment,d)},m(d,f){A(i,d,f),$=!0},p:fe,i(d){$||(x(i.$$.fragment,d),$=!0)},o(d){j(i.$$.fragment,d),$=!1},d(d){H(i,d)}}}function ki(P){let i,$,d,f,m;return f=new Z({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),$=c("Example:"),d=l(),k(f.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);$=p(h,"Example:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:fe,i(r){m||(x(f.$$.fragment,r),m=!0)},o(r){j(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),H(f,r)}}}function wi(P){let i,$,d,f,m;return f=new Z({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),$=c("Example:"),d=l(),k(f.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);$=p(h,"Example:"),h.forEach(a),d=g(r),w(f.$$.fragment,r)},m(r,h){b(r,i,h),e(i,$),b(r,d,h),A(f,r,h),m=!0},p:fe,i(r){m||(x(f.$$.fragment,r),m=!0)},o(r){j(f.$$.fragment,r),m=!1},d(r){r&&a(i),r&&a(d),H(f,r)}}}function Ai(P){let i,$,d,f,m,r,h,q,u,y,F,L,O,M,S,T,I,U,C,le,ge,V,G,ce,ao,et,oo,ue,So,na,Uo,Co,no,tt,so,me,zo,sa,Vo,Go,ro,D,at,Wo,_e,ot,Ro,ra,Bo,Ko,ee,nt,Jo,ia,Qo,Xo,la,Yo,Zo,te,st,en,ga,tn,an,be,on,$e,rt,nn,ca,sn,rn,ve,it,ln,pa,gn,cn,ye,lt,pn,ha,hn,dn,ke,gt,fn,da,un,mn,W,ct,_n,fa,bn,$n,we,vn,Ae,yn,xe,pt,kn,ua,wn,An,R,ht,xn,ma,jn,Hn,je,Dn,He,En,De,dt,qn,_a,Fn,Nn,ae,ft,Pn,ba,Tn,Ln,$a,In,On,B,ut,Mn,va,Sn,Un,Ee,Cn,qe,zn,oe,mt,Vn,ya,Gn,Wn,Fe,Rn,ne,_t,Bn,ka,Kn,Jn,wa,Qn,Xn,se,bt,Yn,Aa,Zn,es,$t,ts,vt,as,os,ns,Ne,yt,ss,xa,rs,is,Pe,kt,ls,ja,gs,cs,re,wt,ps,Ha,hs,ds,Da,fs,us,Te,At,ms,Ea,_s,bs,Le,xt,$s,qa,vs,ys,K,jt,ks,Fa,ws,As,Ie,xs,Oe,js,Me,Ht,Hs,Na,Ds,io,pe,Se,Pa,Dt,Es,Ta,qs,lo,Et,La,Fs,Ns,go,Ue,Ps,Wt,Ts,Ls,co,z,qt,Is,Ce,Ft,Os,Ia,Ms,Ss,ie,Nt,Us,Oa,Cs,zs,Pt,Vs,Ma,Gs,Ws,Rs,ze,Tt,Bs,Sa,Ks,po,he,Ve,Ua,Lt,Js,Ca,Qs,ho,Ge,Xs,za,Ys,Zs,fo,J,It,er,Va,tr,ar,We,uo,Q,Ot,or,Ga,nr,sr,Re,mo,X,Mt,rr,Wa,ir,lr,Be,_o,Y,St,gr,Ra,cr,pr,Ke,bo;return r=new dr({}),et=new Z({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),tt=new Z({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),at=new N({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L553"}}),ot=new N({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1400",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),nt=new N({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1229",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),st=new N({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1901"}}),be=new to({props:{$$slots:{default:[ci]},$$scope:{ctx:P}}}),rt=new N({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1530"}}),it=new N({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L752"}}),lt=new N({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1960",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),gt=new N({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L744"}}),ct=new N({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> which can be used to identify
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L971"}}),we=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[pi]},$$scope:{ctx:P}}}),Ae=new de({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[hi]},$$scope:{ctx:P}}}),pt=new N({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1137",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),ht=new N({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
A string or <a href="/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> which can be used to identify models
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L762"}}),je=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[di]},$$scope:{ctx:P}}}),He=new de({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[fi]},$$scope:{ctx:P}}}),dt=new N({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1359",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),ft=new N({props:{name:"list_spaces",anchor:"huggingface_hub.HfApi.list_spaces",parameters:[{name:"space_sdk",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_spaces.space_sdk",description:`<strong>space_sdk</strong> (<code>str</code>, <em>optional</em>) &#x2014; Choice of SDK to filter for. Can be
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1151",returnDescription:`
<p>a list of <code>SpaceInfo</code> objects</p>
`,returnType:`
<p><code>List[SpaceInfo]</code></p>
`}}),ut=new N({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L557",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ee=new to({props:{$$slots:{default:[ui]},$$scope:{ctx:P}}}),qe=new to({props:{$$slots:{default:[mi]},$$scope:{ctx:P}}}),mt=new N({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L689"}}),Fe=new to({props:{$$slots:{default:[_i]},$$scope:{ctx:P}}}),_t=new N({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1179",returnDescription:`
<p>The model repository information.</p>
`,returnType:`
<p><code>huggingface_hub.hf_api.ModelInfo</code></p>
`}}),bt=new N({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1687"}}),yt=new N({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1315",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),kt=new N({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L725"}}),wt=new N({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1272",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),At=new N({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L737"}}),xt=new N({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1621",returnDescription:`
<p>The HTTP response in json.</p>
`}}),jt=new N({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.IO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": bool = True"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
When set to false, will raise an <a href="https://2.python-requests.org/en/master/api/#requests.HTTPError" rel="nofollow">HTTPError</a>
when the file you&#x2019;re trying to upload already exists on the hub
and its content did not change.`,name:"identical_ok"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1757",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ie=new to({props:{$$slots:{default:[bi]},$$scope:{ctx:P}}}),Oe=new de({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[$i]},$$scope:{ctx:P}}}),Ht=new N({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L599"}}),Dt=new dr({}),qt=new N({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1996"}}),Ft=new N({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L2033"}}),Nt=new N({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L2012",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Tt=new N({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L1999"}}),Lt=new dr({}),It=new N({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/utils/endpoint_helpers.py#L67"}}),We=new de({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[vi]},$$scope:{ctx:P}}}),Ot=new N({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/utils/endpoint_helpers.py#L153"}}),Re=new de({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[yi]},$$scope:{ctx:P}}}),Mt=new N({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L441"}}),Be=new de({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[ki]},$$scope:{ctx:P}}}),St=new N({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_889/src/huggingface_hub/hf_api.py#L403"}}),Ke=new de({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[wi]},$$scope:{ctx:P}}}),{c(){i=o("meta"),$=l(),d=o("h1"),f=o("a"),m=o("span"),k(r.$$.fragment),h=l(),q=o("span"),u=c("Hugging Face Hub API"),y=l(),F=o("p"),L=c("Below is the documentation for the "),O=o("code"),M=c("HfApi"),S=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),T=l(),I=o("p"),U=c("All methods from the "),C=o("code"),le=c("HfApi"),ge=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),V=l(),G=o("p"),ce=c("The following approach uses the method from the root of the package:"),ao=l(),k(et.$$.fragment),oo=l(),ue=o("p"),So=c("The following approach uses the "),na=o("code"),Uo=c("HfApi"),Co=c(" class:"),no=l(),k(tt.$$.fragment),so=l(),me=o("p"),zo=c("Using the "),sa=o("code"),Vo=c("HfApi"),Go=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),ro=l(),D=o("div"),k(at.$$.fragment),Wo=l(),_e=o("div"),k(ot.$$.fragment),Ro=l(),ra=o("p"),Bo=c("Create an empty repo on the HuggingFace Hub."),Ko=l(),ee=o("div"),k(nt.$$.fragment),Jo=l(),ia=o("p"),Qo=c("Get info on one specific dataset on huggingface.co."),Xo=l(),la=o("p"),Yo=c("Dataset can be private if you pass an acceptable token."),Zo=l(),te=o("div"),k(st.$$.fragment),en=l(),ga=o("p"),tn=c("Deletes a file in the given repo."),an=l(),k(be.$$.fragment),on=l(),$e=o("div"),k(rt.$$.fragment),nn=l(),ca=o("p"),sn=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),rn=l(),ve=o("div"),k(it.$$.fragment),ln=l(),pa=o("p"),gn=c("Gets all valid dataset tags as a nested namespace object."),cn=l(),ye=o("div"),k(lt.$$.fragment),pn=l(),ha=o("p"),hn=c(`Returns the repository name for a given model ID and optional
organization.`),dn=l(),ke=o("div"),k(gt.$$.fragment),fn=l(),da=o("p"),un=c("Gets all valid model tags as a nested namespace object"),mn=l(),W=o("div"),k(ct.$$.fragment),_n=l(),fa=o("p"),bn=c("Get the public list of all the datasets on huggingface.co"),$n=l(),k(we.$$.fragment),vn=l(),k(Ae.$$.fragment),yn=l(),xe=o("div"),k(pt.$$.fragment),kn=l(),ua=o("p"),wn=c("Get the public list of all the metrics on huggingface.co"),An=l(),R=o("div"),k(ht.$$.fragment),xn=l(),ma=o("p"),jn=c("Get the public list of all the models on huggingface.co"),Hn=l(),k(je.$$.fragment),Dn=l(),k(He.$$.fragment),En=l(),De=o("div"),k(dt.$$.fragment),qn=l(),_a=o("p"),Fn=c("Get the list of files in a given repo."),Nn=l(),ae=o("div"),k(ft.$$.fragment),Pn=l(),ba=o("p"),Tn=c("Get the public list of all Spaces on huggingface.co"),Ln=l(),$a=o("p"),In=c("If no SDK is specified, will return all Spaces."),On=l(),B=o("div"),k(ut.$$.fragment),Mn=l(),va=o("p"),Sn=c("Call HF API to sign in a user and get a token if credentials are valid."),Un=l(),k(Ee.$$.fragment),Cn=l(),k(qe.$$.fragment),zn=l(),oe=o("div"),k(mt.$$.fragment),Vn=l(),ya=o("p"),Gn=c("Call HF API to log out."),Wn=l(),k(Fe.$$.fragment),Rn=l(),ne=o("div"),k(_t.$$.fragment),Bn=l(),ka=o("p"),Kn=c("Get info on one specific model on huggingface.co"),Jn=l(),wa=o("p"),Qn=c("Model can be private if you pass an acceptable token or are logged in."),Xn=l(),se=o("div"),k(bt.$$.fragment),Yn=l(),Aa=o("p"),Zn=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),es=l(),$t=o("p"),ts=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),vt=o("a"),as=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),os=c("."),ns=l(),Ne=o("div"),k(yt.$$.fragment),ss=l(),xa=o("p"),rs=c("Get the info object for a given repo of a given type."),is=l(),Pe=o("div"),k(kt.$$.fragment),ls=l(),ja=o("p"),gs=c(`Saves the passed access token so git can correctly authenticate the
user.`),cs=l(),re=o("div"),k(wt.$$.fragment),ps=l(),Ha=o("p"),hs=c("Get info on one specific Space on huggingface.co."),ds=l(),Da=o("p"),fs=c("Space can be private if you pass an acceptable token."),us=l(),Te=o("div"),k(At.$$.fragment),ms=l(),Ea=o("p"),_s=c("Resets the user\u2019s access token."),bs=l(),Le=o("div"),k(xt.$$.fragment),$s=l(),qa=o("p"),vs=c("Update the visibility setting of a repository."),ys=l(),K=o("div"),k(jt.$$.fragment),ks=l(),Fa=o("p"),ws=c(`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),As=l(),k(Ie.$$.fragment),xs=l(),k(Oe.$$.fragment),js=l(),Me=o("div"),k(Ht.$$.fragment),Hs=l(),Na=o("p"),Ds=c("Call HF API to know \u201Cwhoami\u201D."),io=l(),pe=o("h2"),Se=o("a"),Pa=o("span"),k(Dt.$$.fragment),Es=l(),Ta=o("span"),qs=c("Hugging Face local storage"),lo=l(),Et=o("p"),La=o("code"),Fs=c("huggingface_hub"),Ns=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),go=l(),Ue=o("p"),Ps=c("It does this using the "),Wt=o("a"),Ts=c("HfFolder"),Ls=c(" utility, which saves data at the root of the user."),co=l(),z=o("div"),k(qt.$$.fragment),Is=l(),Ce=o("div"),k(Ft.$$.fragment),Os=l(),Ia=o("p"),Ms=c("Deletes the token from storage. Does not fail if token does not exist."),Ss=l(),ie=o("div"),k(Nt.$$.fragment),Us=l(),Oa=o("p"),Cs=c("Get token or None if not existent."),zs=l(),Pt=o("p"),Vs=c("Note that a token can be also provided using the "),Ma=o("code"),Gs=c("HUGGING_FACE_HUB_TOKEN"),Ws=c(`
environment variable.`),Rs=l(),ze=o("div"),k(Tt.$$.fragment),Bs=l(),Sa=o("p"),Ks=c("Save token, creating folder as needed."),po=l(),he=o("h2"),Ve=o("a"),Ua=o("span"),k(Lt.$$.fragment),Js=l(),Ca=o("span"),Qs=c("Filtering helpers"),ho=l(),Ge=o("p"),Xs=c("Some helpers to filter repositories on the Hub are available in the "),za=o("code"),Ys=c("huggingface_hub"),Zs=c(" package."),fo=l(),J=o("div"),k(It.$$.fragment),er=l(),Va=o("p"),tr=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ar=l(),k(We.$$.fragment),uo=l(),Q=o("div"),k(Ot.$$.fragment),or=l(),Ga=o("p"),nr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),sr=l(),k(Re.$$.fragment),mo=l(),X=o("div"),k(Mt.$$.fragment),rr=l(),Wa=o("p"),ir=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),lr=l(),k(Be.$$.fragment),_o=l(),Y=o("div"),k(St.$$.fragment),gr=l(),Ra=o("p"),cr=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),pr=l(),k(Ke.$$.fragment),this.h()},l(t){const _=li('[data-svelte="svelte-1phssyn"]',document.head);i=n(_,"META",{name:!0,content:!0}),_.forEach(a),$=g(t),d=n(t,"H1",{class:!0});var Ut=s(d);f=n(Ut,"A",{id:!0,class:!0,href:!0});var Ba=s(f);m=n(Ba,"SPAN",{});var Ka=s(m);w(r.$$.fragment,Ka),Ka.forEach(a),Ba.forEach(a),h=g(Ut),q=n(Ut,"SPAN",{});var Ja=s(q);u=p(Ja,"Hugging Face Hub API"),Ja.forEach(a),Ut.forEach(a),y=g(t),F=n(t,"P",{});var Ct=s(F);L=p(Ct,"Below is the documentation for the "),O=n(Ct,"CODE",{});var Qa=s(O);M=p(Qa,"HfApi"),Qa.forEach(a),S=p(Ct,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Ct.forEach(a),T=g(t),I=n(t,"P",{});var zt=s(I);U=p(zt,"All methods from the "),C=n(zt,"CODE",{});var Xa=s(C);le=p(Xa,"HfApi"),Xa.forEach(a),ge=p(zt,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),zt.forEach(a),V=g(t),G=n(t,"P",{});var Ya=s(G);ce=p(Ya,"The following approach uses the method from the root of the package:"),Ya.forEach(a),ao=g(t),w(et.$$.fragment,t),oo=g(t),ue=n(t,"P",{});var Vt=s(ue);So=p(Vt,"The following approach uses the "),na=n(Vt,"CODE",{});var Za=s(na);Uo=p(Za,"HfApi"),Za.forEach(a),Co=p(Vt," class:"),Vt.forEach(a),no=g(t),w(tt.$$.fragment,t),so=g(t),me=n(t,"P",{});var Gt=s(me);zo=p(Gt,"Using the "),sa=n(Gt,"CODE",{});var eo=s(sa);Vo=p(eo,"HfApi"),eo.forEach(a),Go=p(Gt," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Gt.forEach(a),ro=g(t),D=n(t,"DIV",{class:!0});var E=s(D);w(at.$$.fragment,E),Wo=g(E),_e=n(E,"DIV",{class:!0});var $o=s(_e);w(ot.$$.fragment,$o),Ro=g($o),ra=n($o,"P",{});var fr=s(ra);Bo=p(fr,"Create an empty repo on the HuggingFace Hub."),fr.forEach(a),$o.forEach(a),Ko=g(E),ee=n(E,"DIV",{class:!0});var Rt=s(ee);w(nt.$$.fragment,Rt),Jo=g(Rt),ia=n(Rt,"P",{});var ur=s(ia);Qo=p(ur,"Get info on one specific dataset on huggingface.co."),ur.forEach(a),Xo=g(Rt),la=n(Rt,"P",{});var mr=s(la);Yo=p(mr,"Dataset can be private if you pass an acceptable token."),mr.forEach(a),Rt.forEach(a),Zo=g(E),te=n(E,"DIV",{class:!0});var Bt=s(te);w(st.$$.fragment,Bt),en=g(Bt),ga=n(Bt,"P",{});var _r=s(ga);tn=p(_r,"Deletes a file in the given repo."),_r.forEach(a),an=g(Bt),w(be.$$.fragment,Bt),Bt.forEach(a),on=g(E),$e=n(E,"DIV",{class:!0});var vo=s($e);w(rt.$$.fragment,vo),nn=g(vo),ca=n(vo,"P",{});var br=s(ca);sn=p(br,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),br.forEach(a),vo.forEach(a),rn=g(E),ve=n(E,"DIV",{class:!0});var yo=s(ve);w(it.$$.fragment,yo),ln=g(yo),pa=n(yo,"P",{});var $r=s(pa);gn=p($r,"Gets all valid dataset tags as a nested namespace object."),$r.forEach(a),yo.forEach(a),cn=g(E),ye=n(E,"DIV",{class:!0});var ko=s(ye);w(lt.$$.fragment,ko),pn=g(ko),ha=n(ko,"P",{});var vr=s(ha);hn=p(vr,`Returns the repository name for a given model ID and optional
organization.`),vr.forEach(a),ko.forEach(a),dn=g(E),ke=n(E,"DIV",{class:!0});var wo=s(ke);w(gt.$$.fragment,wo),fn=g(wo),da=n(wo,"P",{});var yr=s(da);un=p(yr,"Gets all valid model tags as a nested namespace object"),yr.forEach(a),wo.forEach(a),mn=g(E),W=n(E,"DIV",{class:!0});var Je=s(W);w(ct.$$.fragment,Je),_n=g(Je),fa=n(Je,"P",{});var kr=s(fa);bn=p(kr,"Get the public list of all the datasets on huggingface.co"),kr.forEach(a),$n=g(Je),w(we.$$.fragment,Je),vn=g(Je),w(Ae.$$.fragment,Je),Je.forEach(a),yn=g(E),xe=n(E,"DIV",{class:!0});var Ao=s(xe);w(pt.$$.fragment,Ao),kn=g(Ao),ua=n(Ao,"P",{});var wr=s(ua);wn=p(wr,"Get the public list of all the metrics on huggingface.co"),wr.forEach(a),Ao.forEach(a),An=g(E),R=n(E,"DIV",{class:!0});var Qe=s(R);w(ht.$$.fragment,Qe),xn=g(Qe),ma=n(Qe,"P",{});var Ar=s(ma);jn=p(Ar,"Get the public list of all the models on huggingface.co"),Ar.forEach(a),Hn=g(Qe),w(je.$$.fragment,Qe),Dn=g(Qe),w(He.$$.fragment,Qe),Qe.forEach(a),En=g(E),De=n(E,"DIV",{class:!0});var xo=s(De);w(dt.$$.fragment,xo),qn=g(xo),_a=n(xo,"P",{});var xr=s(_a);Fn=p(xr,"Get the list of files in a given repo."),xr.forEach(a),xo.forEach(a),Nn=g(E),ae=n(E,"DIV",{class:!0});var Kt=s(ae);w(ft.$$.fragment,Kt),Pn=g(Kt),ba=n(Kt,"P",{});var jr=s(ba);Tn=p(jr,"Get the public list of all Spaces on huggingface.co"),jr.forEach(a),Ln=g(Kt),$a=n(Kt,"P",{});var Hr=s($a);In=p(Hr,"If no SDK is specified, will return all Spaces."),Hr.forEach(a),Kt.forEach(a),On=g(E),B=n(E,"DIV",{class:!0});var Xe=s(B);w(ut.$$.fragment,Xe),Mn=g(Xe),va=n(Xe,"P",{});var Dr=s(va);Sn=p(Dr,"Call HF API to sign in a user and get a token if credentials are valid."),Dr.forEach(a),Un=g(Xe),w(Ee.$$.fragment,Xe),Cn=g(Xe),w(qe.$$.fragment,Xe),Xe.forEach(a),zn=g(E),oe=n(E,"DIV",{class:!0});var Jt=s(oe);w(mt.$$.fragment,Jt),Vn=g(Jt),ya=n(Jt,"P",{});var Er=s(ya);Gn=p(Er,"Call HF API to log out."),Er.forEach(a),Wn=g(Jt),w(Fe.$$.fragment,Jt),Jt.forEach(a),Rn=g(E),ne=n(E,"DIV",{class:!0});var Qt=s(ne);w(_t.$$.fragment,Qt),Bn=g(Qt),ka=n(Qt,"P",{});var qr=s(ka);Kn=p(qr,"Get info on one specific model on huggingface.co"),qr.forEach(a),Jn=g(Qt),wa=n(Qt,"P",{});var Fr=s(wa);Qn=p(Fr,"Model can be private if you pass an acceptable token or are logged in."),Fr.forEach(a),Qt.forEach(a),Xn=g(E),se=n(E,"DIV",{class:!0});var Xt=s(se);w(bt.$$.fragment,Xt),Yn=g(Xt),Aa=n(Xt,"P",{});var Nr=s(Aa);Zn=p(Nr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Nr.forEach(a),es=g(Xt),$t=n(Xt,"P",{});var jo=s($t);ts=p(jo,`Note there are certain limitations. For more information about moving
repositories, please see
`),vt=n(jo,"A",{href:!0,rel:!0});var Pr=s(vt);as=p(Pr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Pr.forEach(a),os=p(jo,"."),jo.forEach(a),Xt.forEach(a),ns=g(E),Ne=n(E,"DIV",{class:!0});var Ho=s(Ne);w(yt.$$.fragment,Ho),ss=g(Ho),xa=n(Ho,"P",{});var Tr=s(xa);rs=p(Tr,"Get the info object for a given repo of a given type."),Tr.forEach(a),Ho.forEach(a),is=g(E),Pe=n(E,"DIV",{class:!0});var Do=s(Pe);w(kt.$$.fragment,Do),ls=g(Do),ja=n(Do,"P",{});var Lr=s(ja);gs=p(Lr,`Saves the passed access token so git can correctly authenticate the
user.`),Lr.forEach(a),Do.forEach(a),cs=g(E),re=n(E,"DIV",{class:!0});var Yt=s(re);w(wt.$$.fragment,Yt),ps=g(Yt),Ha=n(Yt,"P",{});var Ir=s(Ha);hs=p(Ir,"Get info on one specific Space on huggingface.co."),Ir.forEach(a),ds=g(Yt),Da=n(Yt,"P",{});var Or=s(Da);fs=p(Or,"Space can be private if you pass an acceptable token."),Or.forEach(a),Yt.forEach(a),us=g(E),Te=n(E,"DIV",{class:!0});var Eo=s(Te);w(At.$$.fragment,Eo),ms=g(Eo),Ea=n(Eo,"P",{});var Mr=s(Ea);_s=p(Mr,"Resets the user\u2019s access token."),Mr.forEach(a),Eo.forEach(a),bs=g(E),Le=n(E,"DIV",{class:!0});var qo=s(Le);w(xt.$$.fragment,qo),$s=g(qo),qa=n(qo,"P",{});var Sr=s(qa);vs=p(Sr,"Update the visibility setting of a repository."),Sr.forEach(a),qo.forEach(a),ys=g(E),K=n(E,"DIV",{class:!0});var Ye=s(K);w(jt.$$.fragment,Ye),ks=g(Ye),Fa=n(Ye,"P",{});var Ur=s(Fa);ws=p(Ur,`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ur.forEach(a),As=g(Ye),w(Ie.$$.fragment,Ye),xs=g(Ye),w(Oe.$$.fragment,Ye),Ye.forEach(a),js=g(E),Me=n(E,"DIV",{class:!0});var Fo=s(Me);w(Ht.$$.fragment,Fo),Hs=g(Fo),Na=n(Fo,"P",{});var Cr=s(Na);Ds=p(Cr,"Call HF API to know \u201Cwhoami\u201D."),Cr.forEach(a),Fo.forEach(a),E.forEach(a),io=g(t),pe=n(t,"H2",{class:!0});var No=s(pe);Se=n(No,"A",{id:!0,class:!0,href:!0});var zr=s(Se);Pa=n(zr,"SPAN",{});var Vr=s(Pa);w(Dt.$$.fragment,Vr),Vr.forEach(a),zr.forEach(a),Es=g(No),Ta=n(No,"SPAN",{});var Gr=s(Ta);qs=p(Gr,"Hugging Face local storage"),Gr.forEach(a),No.forEach(a),lo=g(t),Et=n(t,"P",{});var hr=s(Et);La=n(hr,"CODE",{});var Wr=s(La);Fs=p(Wr,"huggingface_hub"),Wr.forEach(a),Ns=p(hr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),hr.forEach(a),go=g(t),Ue=n(t,"P",{});var Po=s(Ue);Ps=p(Po,"It does this using the "),Wt=n(Po,"A",{href:!0});var Rr=s(Wt);Ts=p(Rr,"HfFolder"),Rr.forEach(a),Ls=p(Po," utility, which saves data at the root of the user."),Po.forEach(a),co=g(t),z=n(t,"DIV",{class:!0});var Ze=s(z);w(qt.$$.fragment,Ze),Is=g(Ze),Ce=n(Ze,"DIV",{class:!0});var To=s(Ce);w(Ft.$$.fragment,To),Os=g(To),Ia=n(To,"P",{});var Br=s(Ia);Ms=p(Br,"Deletes the token from storage. Does not fail if token does not exist."),Br.forEach(a),To.forEach(a),Ss=g(Ze),ie=n(Ze,"DIV",{class:!0});var Zt=s(ie);w(Nt.$$.fragment,Zt),Us=g(Zt),Oa=n(Zt,"P",{});var Kr=s(Oa);Cs=p(Kr,"Get token or None if not existent."),Kr.forEach(a),zs=g(Zt),Pt=n(Zt,"P",{});var Lo=s(Pt);Vs=p(Lo,"Note that a token can be also provided using the "),Ma=n(Lo,"CODE",{});var Jr=s(Ma);Gs=p(Jr,"HUGGING_FACE_HUB_TOKEN"),Jr.forEach(a),Ws=p(Lo,`
environment variable.`),Lo.forEach(a),Zt.forEach(a),Rs=g(Ze),ze=n(Ze,"DIV",{class:!0});var Io=s(ze);w(Tt.$$.fragment,Io),Bs=g(Io),Sa=n(Io,"P",{});var Qr=s(Sa);Ks=p(Qr,"Save token, creating folder as needed."),Qr.forEach(a),Io.forEach(a),Ze.forEach(a),po=g(t),he=n(t,"H2",{class:!0});var Oo=s(he);Ve=n(Oo,"A",{id:!0,class:!0,href:!0});var Xr=s(Ve);Ua=n(Xr,"SPAN",{});var Yr=s(Ua);w(Lt.$$.fragment,Yr),Yr.forEach(a),Xr.forEach(a),Js=g(Oo),Ca=n(Oo,"SPAN",{});var Zr=s(Ca);Qs=p(Zr,"Filtering helpers"),Zr.forEach(a),Oo.forEach(a),ho=g(t),Ge=n(t,"P",{});var Mo=s(Ge);Xs=p(Mo,"Some helpers to filter repositories on the Hub are available in the "),za=n(Mo,"CODE",{});var ei=s(za);Ys=p(ei,"huggingface_hub"),ei.forEach(a),Zs=p(Mo," package."),Mo.forEach(a),fo=g(t),J=n(t,"DIV",{class:!0});var ea=s(J);w(It.$$.fragment,ea),er=g(ea),Va=n(ea,"P",{});var ti=s(Va);tr=p(ti,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ti.forEach(a),ar=g(ea),w(We.$$.fragment,ea),ea.forEach(a),uo=g(t),Q=n(t,"DIV",{class:!0});var ta=s(Q);w(Ot.$$.fragment,ta),or=g(ta),Ga=n(ta,"P",{});var ai=s(Ga);nr=p(ai,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ai.forEach(a),sr=g(ta),w(Re.$$.fragment,ta),ta.forEach(a),mo=g(t),X=n(t,"DIV",{class:!0});var aa=s(X);w(Mt.$$.fragment,aa),rr=g(aa),Wa=n(aa,"P",{});var oi=s(Wa);ir=p(oi,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),oi.forEach(a),lr=g(aa),w(Be.$$.fragment,aa),aa.forEach(a),_o=g(t),Y=n(t,"DIV",{class:!0});var oa=s(Y);w(St.$$.fragment,oa),gr=g(oa),Ra=n(oa,"P",{});var ni=s(Ra);cr=p(ni,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ni.forEach(a),pr=g(oa),w(Ke.$$.fragment,oa),oa.forEach(a),this.h()},h(){v(i,"name","hf:doc:metadata"),v(i,"content",JSON.stringify(xi)),v(f,"id","huggingface_hub.HfApi"),v(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(f,"href","#huggingface_hub.HfApi"),v(d,"class","relative group"),v(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(vt,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),v(vt,"rel","nofollow"),v(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Se,"id","huggingface_hub.HfFolder"),v(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Se,"href","#huggingface_hub.HfFolder"),v(pe,"class","relative group"),v(Wt,"href","/docs/huggingface_hub/pr_889/en/package_reference/hf_api#huggingface_hub.HfFolder"),v(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ve,"id","huggingface_hub.DatasetFilter"),v(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Ve,"href","#huggingface_hub.DatasetFilter"),v(he,"class","relative group"),v(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,i),b(t,$,_),b(t,d,_),e(d,f),e(f,m),A(r,m,null),e(d,h),e(d,q),e(q,u),b(t,y,_),b(t,F,_),e(F,L),e(F,O),e(O,M),e(F,S),b(t,T,_),b(t,I,_),e(I,U),e(I,C),e(C,le),e(I,ge),b(t,V,_),b(t,G,_),e(G,ce),b(t,ao,_),A(et,t,_),b(t,oo,_),b(t,ue,_),e(ue,So),e(ue,na),e(na,Uo),e(ue,Co),b(t,no,_),A(tt,t,_),b(t,so,_),b(t,me,_),e(me,zo),e(me,sa),e(sa,Vo),e(me,Go),b(t,ro,_),b(t,D,_),A(at,D,null),e(D,Wo),e(D,_e),A(ot,_e,null),e(_e,Ro),e(_e,ra),e(ra,Bo),e(D,Ko),e(D,ee),A(nt,ee,null),e(ee,Jo),e(ee,ia),e(ia,Qo),e(ee,Xo),e(ee,la),e(la,Yo),e(D,Zo),e(D,te),A(st,te,null),e(te,en),e(te,ga),e(ga,tn),e(te,an),A(be,te,null),e(D,on),e(D,$e),A(rt,$e,null),e($e,nn),e($e,ca),e(ca,sn),e(D,rn),e(D,ve),A(it,ve,null),e(ve,ln),e(ve,pa),e(pa,gn),e(D,cn),e(D,ye),A(lt,ye,null),e(ye,pn),e(ye,ha),e(ha,hn),e(D,dn),e(D,ke),A(gt,ke,null),e(ke,fn),e(ke,da),e(da,un),e(D,mn),e(D,W),A(ct,W,null),e(W,_n),e(W,fa),e(fa,bn),e(W,$n),A(we,W,null),e(W,vn),A(Ae,W,null),e(D,yn),e(D,xe),A(pt,xe,null),e(xe,kn),e(xe,ua),e(ua,wn),e(D,An),e(D,R),A(ht,R,null),e(R,xn),e(R,ma),e(ma,jn),e(R,Hn),A(je,R,null),e(R,Dn),A(He,R,null),e(D,En),e(D,De),A(dt,De,null),e(De,qn),e(De,_a),e(_a,Fn),e(D,Nn),e(D,ae),A(ft,ae,null),e(ae,Pn),e(ae,ba),e(ba,Tn),e(ae,Ln),e(ae,$a),e($a,In),e(D,On),e(D,B),A(ut,B,null),e(B,Mn),e(B,va),e(va,Sn),e(B,Un),A(Ee,B,null),e(B,Cn),A(qe,B,null),e(D,zn),e(D,oe),A(mt,oe,null),e(oe,Vn),e(oe,ya),e(ya,Gn),e(oe,Wn),A(Fe,oe,null),e(D,Rn),e(D,ne),A(_t,ne,null),e(ne,Bn),e(ne,ka),e(ka,Kn),e(ne,Jn),e(ne,wa),e(wa,Qn),e(D,Xn),e(D,se),A(bt,se,null),e(se,Yn),e(se,Aa),e(Aa,Zn),e(se,es),e(se,$t),e($t,ts),e($t,vt),e(vt,as),e($t,os),e(D,ns),e(D,Ne),A(yt,Ne,null),e(Ne,ss),e(Ne,xa),e(xa,rs),e(D,is),e(D,Pe),A(kt,Pe,null),e(Pe,ls),e(Pe,ja),e(ja,gs),e(D,cs),e(D,re),A(wt,re,null),e(re,ps),e(re,Ha),e(Ha,hs),e(re,ds),e(re,Da),e(Da,fs),e(D,us),e(D,Te),A(At,Te,null),e(Te,ms),e(Te,Ea),e(Ea,_s),e(D,bs),e(D,Le),A(xt,Le,null),e(Le,$s),e(Le,qa),e(qa,vs),e(D,ys),e(D,K),A(jt,K,null),e(K,ks),e(K,Fa),e(Fa,ws),e(K,As),A(Ie,K,null),e(K,xs),A(Oe,K,null),e(D,js),e(D,Me),A(Ht,Me,null),e(Me,Hs),e(Me,Na),e(Na,Ds),b(t,io,_),b(t,pe,_),e(pe,Se),e(Se,Pa),A(Dt,Pa,null),e(pe,Es),e(pe,Ta),e(Ta,qs),b(t,lo,_),b(t,Et,_),e(Et,La),e(La,Fs),e(Et,Ns),b(t,go,_),b(t,Ue,_),e(Ue,Ps),e(Ue,Wt),e(Wt,Ts),e(Ue,Ls),b(t,co,_),b(t,z,_),A(qt,z,null),e(z,Is),e(z,Ce),A(Ft,Ce,null),e(Ce,Os),e(Ce,Ia),e(Ia,Ms),e(z,Ss),e(z,ie),A(Nt,ie,null),e(ie,Us),e(ie,Oa),e(Oa,Cs),e(ie,zs),e(ie,Pt),e(Pt,Vs),e(Pt,Ma),e(Ma,Gs),e(Pt,Ws),e(z,Rs),e(z,ze),A(Tt,ze,null),e(ze,Bs),e(ze,Sa),e(Sa,Ks),b(t,po,_),b(t,he,_),e(he,Ve),e(Ve,Ua),A(Lt,Ua,null),e(he,Js),e(he,Ca),e(Ca,Qs),b(t,ho,_),b(t,Ge,_),e(Ge,Xs),e(Ge,za),e(za,Ys),e(Ge,Zs),b(t,fo,_),b(t,J,_),A(It,J,null),e(J,er),e(J,Va),e(Va,tr),e(J,ar),A(We,J,null),b(t,uo,_),b(t,Q,_),A(Ot,Q,null),e(Q,or),e(Q,Ga),e(Ga,nr),e(Q,sr),A(Re,Q,null),b(t,mo,_),b(t,X,_),A(Mt,X,null),e(X,rr),e(X,Wa),e(Wa,ir),e(X,lr),A(Be,X,null),b(t,_o,_),b(t,Y,_),A(St,Y,null),e(Y,gr),e(Y,Ra),e(Ra,cr),e(Y,pr),A(Ke,Y,null),bo=!0},p(t,[_]){const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:t}),be.$set(Ut);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:t}),we.$set(Ba);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:t}),Ae.$set(Ka);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:t}),je.$set(Ja);const Ct={};_&2&&(Ct.$$scope={dirty:_,ctx:t}),He.$set(Ct);const Qa={};_&2&&(Qa.$$scope={dirty:_,ctx:t}),Ee.$set(Qa);const zt={};_&2&&(zt.$$scope={dirty:_,ctx:t}),qe.$set(zt);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:t}),Fe.$set(Xa);const Ya={};_&2&&(Ya.$$scope={dirty:_,ctx:t}),Ie.$set(Ya);const Vt={};_&2&&(Vt.$$scope={dirty:_,ctx:t}),Oe.$set(Vt);const Za={};_&2&&(Za.$$scope={dirty:_,ctx:t}),We.$set(Za);const Gt={};_&2&&(Gt.$$scope={dirty:_,ctx:t}),Re.$set(Gt);const eo={};_&2&&(eo.$$scope={dirty:_,ctx:t}),Be.$set(eo);const E={};_&2&&(E.$$scope={dirty:_,ctx:t}),Ke.$set(E)},i(t){bo||(x(r.$$.fragment,t),x(et.$$.fragment,t),x(tt.$$.fragment,t),x(at.$$.fragment,t),x(ot.$$.fragment,t),x(nt.$$.fragment,t),x(st.$$.fragment,t),x(be.$$.fragment,t),x(rt.$$.fragment,t),x(it.$$.fragment,t),x(lt.$$.fragment,t),x(gt.$$.fragment,t),x(ct.$$.fragment,t),x(we.$$.fragment,t),x(Ae.$$.fragment,t),x(pt.$$.fragment,t),x(ht.$$.fragment,t),x(je.$$.fragment,t),x(He.$$.fragment,t),x(dt.$$.fragment,t),x(ft.$$.fragment,t),x(ut.$$.fragment,t),x(Ee.$$.fragment,t),x(qe.$$.fragment,t),x(mt.$$.fragment,t),x(Fe.$$.fragment,t),x(_t.$$.fragment,t),x(bt.$$.fragment,t),x(yt.$$.fragment,t),x(kt.$$.fragment,t),x(wt.$$.fragment,t),x(At.$$.fragment,t),x(xt.$$.fragment,t),x(jt.$$.fragment,t),x(Ie.$$.fragment,t),x(Oe.$$.fragment,t),x(Ht.$$.fragment,t),x(Dt.$$.fragment,t),x(qt.$$.fragment,t),x(Ft.$$.fragment,t),x(Nt.$$.fragment,t),x(Tt.$$.fragment,t),x(Lt.$$.fragment,t),x(It.$$.fragment,t),x(We.$$.fragment,t),x(Ot.$$.fragment,t),x(Re.$$.fragment,t),x(Mt.$$.fragment,t),x(Be.$$.fragment,t),x(St.$$.fragment,t),x(Ke.$$.fragment,t),bo=!0)},o(t){j(r.$$.fragment,t),j(et.$$.fragment,t),j(tt.$$.fragment,t),j(at.$$.fragment,t),j(ot.$$.fragment,t),j(nt.$$.fragment,t),j(st.$$.fragment,t),j(be.$$.fragment,t),j(rt.$$.fragment,t),j(it.$$.fragment,t),j(lt.$$.fragment,t),j(gt.$$.fragment,t),j(ct.$$.fragment,t),j(we.$$.fragment,t),j(Ae.$$.fragment,t),j(pt.$$.fragment,t),j(ht.$$.fragment,t),j(je.$$.fragment,t),j(He.$$.fragment,t),j(dt.$$.fragment,t),j(ft.$$.fragment,t),j(ut.$$.fragment,t),j(Ee.$$.fragment,t),j(qe.$$.fragment,t),j(mt.$$.fragment,t),j(Fe.$$.fragment,t),j(_t.$$.fragment,t),j(bt.$$.fragment,t),j(yt.$$.fragment,t),j(kt.$$.fragment,t),j(wt.$$.fragment,t),j(At.$$.fragment,t),j(xt.$$.fragment,t),j(jt.$$.fragment,t),j(Ie.$$.fragment,t),j(Oe.$$.fragment,t),j(Ht.$$.fragment,t),j(Dt.$$.fragment,t),j(qt.$$.fragment,t),j(Ft.$$.fragment,t),j(Nt.$$.fragment,t),j(Tt.$$.fragment,t),j(Lt.$$.fragment,t),j(It.$$.fragment,t),j(We.$$.fragment,t),j(Ot.$$.fragment,t),j(Re.$$.fragment,t),j(Mt.$$.fragment,t),j(Be.$$.fragment,t),j(St.$$.fragment,t),j(Ke.$$.fragment,t),bo=!1},d(t){a(i),t&&a($),t&&a(d),H(r),t&&a(y),t&&a(F),t&&a(T),t&&a(I),t&&a(V),t&&a(G),t&&a(ao),H(et,t),t&&a(oo),t&&a(ue),t&&a(no),H(tt,t),t&&a(so),t&&a(me),t&&a(ro),t&&a(D),H(at),H(ot),H(nt),H(st),H(be),H(rt),H(it),H(lt),H(gt),H(ct),H(we),H(Ae),H(pt),H(ht),H(je),H(He),H(dt),H(ft),H(ut),H(Ee),H(qe),H(mt),H(Fe),H(_t),H(bt),H(yt),H(kt),H(wt),H(At),H(xt),H(jt),H(Ie),H(Oe),H(Ht),t&&a(io),t&&a(pe),H(Dt),t&&a(lo),t&&a(Et),t&&a(go),t&&a(Ue),t&&a(co),t&&a(z),H(qt),H(Ft),H(Nt),H(Tt),t&&a(po),t&&a(he),H(Lt),t&&a(ho),t&&a(Ge),t&&a(fo),t&&a(J),H(It),H(We),t&&a(uo),t&&a(Q),H(Ot),H(Re),t&&a(mo),t&&a(X),H(Mt),H(Be),t&&a(_o),t&&a(Y),H(St),H(Ke)}}}const xi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function ji(P){return gi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pi extends si{constructor(i){super();ri(this,i,ji,Ai,ii,{})}}export{Pi as default,xi as metadata};
