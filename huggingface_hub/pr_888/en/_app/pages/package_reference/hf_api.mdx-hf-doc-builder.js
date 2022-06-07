import{S as ti,i as ai,s as oi,e as o,k as l,w as k,t as c,M as ni,c as n,d as a,m as g,a as s,x as A,h as p,b as $,G as e,g as b,y as w,q as x,o as H,B as j,v as si,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as Za}from"../../chunks/Tip-hf-doc-builder.js";import{D as N}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Z}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as cr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ri(T){let i,v,d,m,u,r,h,q,f,y,F,L,I,M,S;return{c(){i=o("p"),v=c("Raises the following errors:"),d=l(),m=o("ul"),u=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),f=c(`
if the HuggingFace API returned an error`),y=l(),F=o("li"),L=o("a"),I=o("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(P){i=n(P,"P",{});var O=s(i);v=p(O,"Raises the following errors:"),O.forEach(a),d=g(P),m=n(P,"UL",{});var U=s(m);u=n(U,"LI",{});var C=s(u);r=n(C,"A",{href:!0,rel:!0});var ie=s(r);h=n(ie,"CODE",{});var le=s(h);q=p(le,"HTTPError"),le.forEach(a),ie.forEach(a),f=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),F=n(U,"LI",{});var V=s(F);L=n(V,"A",{href:!0,rel:!0});var G=s(L);I=n(G,"CODE",{});var ge=s(I);M=p(ge,"ValueError"),ge.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(L,"rel","nofollow")},m(P,O){b(P,i,O),e(i,v),b(P,d,O),b(P,m,O),e(m,u),e(u,r),e(r,h),e(h,q),e(u,f),e(m,y),e(m,F),e(F,L),e(L,I),e(I,M),e(F,S)},d(P){P&&a(i),P&&a(d),P&&a(m)}}}function ii(T){let i,v,d,m,u,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=o("p"),v=c("Example usage with the "),d=o("code"),m=c("filter"),u=c(" argument:"),r=l(),k(h.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);v=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);m=p(F,"filter"),F.forEach(a),u=p(y," argument:"),y.forEach(a),r=g(f),A(h.$$.fragment,f)},m(f,y){b(f,i,y),e(i,v),e(i,d),e(d,m),e(i,u),b(f,r,y),w(h,f,y),q=!0},p:de,i(f){q||(x(h.$$.fragment,f),q=!0)},o(f){H(h.$$.fragment,f),q=!1},d(f){f&&a(i),f&&a(r),j(h,f)}}}function li(T){let i,v,d,m,u,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),v=c("Example usage with the "),d=o("code"),m=c("search"),u=c(" argument:"),r=l(),k(h.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);v=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);m=p(F,"search"),F.forEach(a),u=p(y," argument:"),y.forEach(a),r=g(f),A(h.$$.fragment,f)},m(f,y){b(f,i,y),e(i,v),e(i,d),e(d,m),e(i,u),b(f,r,y),w(h,f,y),q=!0},p:de,i(f){q||(x(h.$$.fragment,f),q=!0)},o(f){H(h.$$.fragment,f),q=!1},d(f){f&&a(i),f&&a(r),j(h,f)}}}function gi(T){let i,v,d,m,u,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=o("p"),v=c("Example usage with the "),d=o("code"),m=c("filter"),u=c(" argument:"),r=l(),k(h.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);v=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);m=p(F,"filter"),F.forEach(a),u=p(y," argument:"),y.forEach(a),r=g(f),A(h.$$.fragment,f)},m(f,y){b(f,i,y),e(i,v),e(i,d),e(d,m),e(i,u),b(f,r,y),w(h,f,y),q=!0},p:de,i(f){q||(x(h.$$.fragment,f),q=!0)},o(f){H(h.$$.fragment,f),q=!1},d(f){f&&a(i),f&&a(r),j(h,f)}}}function ci(T){let i,v,d,m,u,r,h,q;return h=new Z({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=o("p"),v=c("Example usage with the "),d=o("code"),m=c("search"),u=c(" argument:"),r=l(),k(h.$$.fragment)},l(f){i=n(f,"P",{});var y=s(i);v=p(y,"Example usage with the "),d=n(y,"CODE",{});var F=s(d);m=p(F,"search"),F.forEach(a),u=p(y," argument:"),y.forEach(a),r=g(f),A(h.$$.fragment,f)},m(f,y){b(f,i,y),e(i,v),e(i,d),e(d,m),e(i,u),b(f,r,y),w(h,f,y),q=!0},p:de,i(f){q||(x(h.$$.fragment,f),q=!0)},o(f){H(h.$$.fragment,f),q=!1},d(f){f&&a(i),f&&a(r),j(h,f)}}}function pi(T){let i,v,d,m,u;return{c(){i=o("p"),v=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o("a"),m=c("HfApi.set_access_token()"),u=c(" instead."),this.h()},l(r){i=n(r,"P",{});var h=s(i);v=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n(h,"A",{href:!0});var q=s(d);m=p(q,"HfApi.set_access_token()"),q.forEach(a),u=p(h," instead."),h.forEach(a),this.h()},h(){$(d,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(r,h){b(r,i,h),e(i,v),e(i,d),e(d,m),e(i,u)},d(r){r&&a(i)}}}function hi(T){let i,v,d,m,u,r,h,q,f;return{c(){i=o("p"),v=c("Raises the following errors:"),d=l(),m=o("ul"),u=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),f=c(`
if credentials are invalid`),this.h()},l(y){i=n(y,"P",{});var F=s(i);v=p(F,"Raises the following errors:"),F.forEach(a),d=g(y),m=n(y,"UL",{});var L=s(m);u=n(L,"LI",{});var I=s(u);r=n(I,"A",{href:!0,rel:!0});var M=s(r);h=n(M,"CODE",{});var S=s(h);q=p(S,"HTTPError"),S.forEach(a),M.forEach(a),f=p(I,`
if credentials are invalid`),I.forEach(a),L.forEach(a),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow")},m(y,F){b(y,i,F),e(i,v),b(y,d,F),b(y,m,F),e(m,u),e(u,r),e(r,h),e(h,q),e(u,f)},d(y){y&&a(i),y&&a(d),y&&a(m)}}}function di(T){let i,v,d,m,u;return{c(){i=o("p"),v=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),d=o("a"),m=c("HfApi.unset_access_token()"),u=c(" instead."),this.h()},l(r){i=n(r,"P",{});var h=s(i);v=p(h,`Warning: Deprecated, will be removed in v0.8. Please use
`),d=n(h,"A",{href:!0});var q=s(d);m=p(q,"HfApi.unset_access_token()"),q.forEach(a),u=p(h," instead."),h.forEach(a),this.h()},h(){$(d,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(r,h){b(r,i,h),e(i,v),e(i,d),e(d,m),e(i,u)},d(r){r&&a(i)}}}function mi(T){let i,v,d,m,u,r,h,q,f,y,F,L,I,M,S;return{c(){i=o("p"),v=c("Raises the following errors:"),d=l(),m=o("ul"),u=o("li"),r=o("a"),h=o("code"),q=c("HTTPError"),f=c(`
if the HuggingFace API returned an error`),y=l(),F=o("li"),L=o("a"),I=o("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(P){i=n(P,"P",{});var O=s(i);v=p(O,"Raises the following errors:"),O.forEach(a),d=g(P),m=n(P,"UL",{});var U=s(m);u=n(U,"LI",{});var C=s(u);r=n(C,"A",{href:!0,rel:!0});var ie=s(r);h=n(ie,"CODE",{});var le=s(h);q=p(le,"HTTPError"),le.forEach(a),ie.forEach(a),f=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),F=n(U,"LI",{});var V=s(F);L=n(V,"A",{href:!0,rel:!0});var G=s(L);I=n(G,"CODE",{});var ge=s(I);M=p(ge,"ValueError"),ge.forEach(a),G.forEach(a),S=p(V,`
if some parameter value is invalid`),V.forEach(a),U.forEach(a),this.h()},h(){$(r,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(r,"rel","nofollow"),$(L,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(L,"rel","nofollow")},m(P,O){b(P,i,O),e(i,v),b(P,d,O),b(P,m,O),e(m,u),e(u,r),e(r,h),e(h,q),e(u,f),e(m,y),e(m,F),e(F,L),e(L,I),e(I,M),e(F,S)},d(P){P&&a(i),P&&a(d),P&&a(m)}}}function fi(T){let i,v,d,m,u;return m=new Z({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=o("p"),v=c("Example usage:"),d=l(),k(m.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);v=p(h,"Example usage:"),h.forEach(a),d=g(r),A(m.$$.fragment,r)},m(r,h){b(r,i,h),e(i,v),b(r,d,h),w(m,r,h),u=!0},p:de,i(r){u||(x(m.$$.fragment,r),u=!0)},o(r){H(m.$$.fragment,r),u=!1},d(r){r&&a(i),r&&a(d),j(m,r)}}}function ui(T){let i,v,d,m,u;return m=new Z({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=o("p"),v=c("Examples:"),d=l(),k(m.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);v=p(h,"Examples:"),h.forEach(a),d=g(r),A(m.$$.fragment,r)},m(r,h){b(r,i,h),e(i,v),b(r,d,h),w(m,r,h),u=!0},p:de,i(r){u||(x(m.$$.fragment,r),u=!0)},o(r){H(m.$$.fragment,r),u=!1},d(r){r&&a(i),r&&a(d),j(m,r)}}}function _i(T){let i,v;return i=new Z({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){k(i.$$.fragment)},l(d){A(i.$$.fragment,d)},m(d,m){w(i,d,m),v=!0},p:de,i(d){v||(x(i.$$.fragment,d),v=!0)},o(d){H(i.$$.fragment,d),v=!1},d(d){j(i,d)}}}function bi(T){let i,v,d,m,u;return m=new Z({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),v=c("Example:"),d=l(),k(m.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);v=p(h,"Example:"),h.forEach(a),d=g(r),A(m.$$.fragment,r)},m(r,h){b(r,i,h),e(i,v),b(r,d,h),w(m,r,h),u=!0},p:de,i(r){u||(x(m.$$.fragment,r),u=!0)},o(r){H(m.$$.fragment,r),u=!1},d(r){r&&a(i),r&&a(d),j(m,r)}}}function vi(T){let i,v,d,m,u;return m=new Z({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=o("p"),v=c("Example:"),d=l(),k(m.$$.fragment)},l(r){i=n(r,"P",{});var h=s(i);v=p(h,"Example:"),h.forEach(a),d=g(r),A(m.$$.fragment,r)},m(r,h){b(r,i,h),e(i,v),b(r,d,h),w(m,r,h),u=!0},p:de,i(r){u||(x(m.$$.fragment,r),u=!0)},o(r){H(m.$$.fragment,r),u=!1},d(r){r&&a(i),r&&a(d),j(m,r)}}}function $i(T){let i,v,d,m,u,r,h,q,f,y,F,L,I,M,S,P,O,U,C,ie,le,V,G,ge,eo,et,to,me,Mo,oa,So,Uo,ao,tt,oo,fe,Co,na,zo,Vo,no,D,at,Go,ue,ot,Wo,sa,Ro,Bo,_e,nt,Ko,ra,Jo,Qo,ee,st,Xo,ia,Yo,Zo,la,en,tn,te,rt,an,ga,on,nn,be,sn,ve,it,rn,ca,ln,gn,$e,lt,cn,pa,pn,hn,ye,gt,dn,ha,mn,fn,ke,ct,un,da,_n,bn,W,pt,vn,ma,$n,yn,Ae,kn,we,An,xe,ht,wn,fa,xn,Hn,R,dt,jn,ua,Dn,En,He,qn,je,Fn,De,mt,Nn,_a,Tn,Pn,B,ft,Ln,ba,On,In,Ee,Mn,qe,Sn,ae,ut,Un,va,Cn,zn,Fe,Vn,oe,_t,Gn,$a,Wn,Rn,ya,Bn,Kn,ne,bt,Jn,ka,Qn,Xn,vt,Yn,$t,Zn,es,ts,Ne,yt,as,Aa,os,ns,Te,kt,ss,wa,rs,is,se,At,ls,xa,gs,cs,Ha,ps,hs,Pe,wt,ds,ja,ms,fs,Le,xt,us,Da,_s,bs,K,Ht,vs,Ea,$s,ys,Oe,ks,Ie,As,Me,jt,ws,qa,xs,so,ce,Se,Fa,Dt,Hs,Na,js,ro,Et,Ta,Ds,Es,io,Ue,qs,Wt,Fs,Ns,lo,z,qt,Ts,Ce,Ft,Ps,Pa,Ls,Os,re,Nt,Is,La,Ms,Ss,Tt,Us,Oa,Cs,zs,Vs,ze,Pt,Gs,Ia,Ws,go,pe,Ve,Ma,Lt,Rs,Sa,Bs,co,Ge,Ks,Ua,Js,Qs,po,J,Ot,Xs,Ca,Ys,Zs,We,ho,Q,It,er,za,tr,ar,Re,mo,X,Mt,or,Va,nr,sr,Be,fo,Y,St,rr,Ga,ir,lr,Ke,uo;return r=new cr({}),et=new Z({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),tt=new Z({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),at=new N({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L563"}}),ot=new N({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub.commit_api.CommitOperationAdd, huggingface_hub.commit_api.CommitOperationDelete]]"},{name:"commit_summary",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": typing.Optional[int] = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<em>str</em>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1739"}}),nt=new N({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),st=new N({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1211",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),rt=new N({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_summary",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
Relative filepath in the repo, for example:
<code>&quot;checkpoints/1fec34a/weights.bin&quot;</code>`,name:"path_in_repo"},{anchor:"huggingface_hub.HfApi.delete_file.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The repository from which the file will be deleted, for example:
<code>&quot;username/custom_transformers&quot;</code>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_file.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Authentication token, obtained with <code>HfApi.login</code> method. Will
default to the stored token.`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_file.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if the file is in a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if in a model. Default is <code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.delete_file.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The git revision to commit from. Defaults to the head of the
<code>&quot;main&quot;</code> branch.`,name:"revision"},{anchor:"huggingface_hub.HfApi.delete_file.commmit_summary",description:`<strong>commmit_summary</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary or title of the generated commit`,name:"commmit_summary"},{anchor:"huggingface_hub.HfApi.delete_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2003"}}),be=new Za({props:{$$slots:{default:[ri]},$$scope:{ctx:T}}}),it=new N({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1512"}}),lt=new N({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L762"}}),gt=new N({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2070",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),ct=new N({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L754"}}),pt=new N({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L981"}}),Ae=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[ii]},$$scope:{ctx:T}}}),we=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[li]},$$scope:{ctx:T}}}),ht=new N({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1147",returnDescription:`
<p>a list of <code>MetricInfo</code> objects which.</p>
`,returnType:`
<p><code>List[MetricInfo]</code></p>
`}}),dt=new N({props:{name:"list_models",anchor:"huggingface_hub.HfApi.list_models",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.ModelFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"emissions_thresholds",val:": typing.Union[typing.Tuple[float, float], NoneType] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"fetch_config",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_models.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.ModelFilter">ModelFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L772"}}),He=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[gi]},$$scope:{ctx:T}}}),je=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[ci]},$$scope:{ctx:T}}}),mt=new N({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),ft=new N({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L567",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),Ee=new Za({props:{$$slots:{default:[pi]},$$scope:{ctx:T}}}),qe=new Za({props:{$$slots:{default:[hi]},$$scope:{ctx:T}}}),ut=new N({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L699"}}),Fe=new Za({props:{$$slots:{default:[di]},$$scope:{ctx:T}}}),_t=new N({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),bt=new N({props:{name:"move_repo",anchor:"huggingface_hub.HfApi.move_repo",parameters:[{name:"from_id",val:": str"},{name:"to_id",val:": str"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.move_repo.from_id",description:`<strong>from_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Original repository identifier.`,name:"from_id"},{anchor:"huggingface_hub.HfApi.move_repo.to_id",description:`<strong>to_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>. Final repository identifier.`,name:"to_id"},{anchor:"huggingface_hub.HfApi.move_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.move_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1669"}}),yt=new N({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
`}}),kt=new N({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L735"}}),At=new N({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1254",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),wt=new N({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L747"}}),xt=new N({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),Ht=new N({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": bool = True"},{name:"commit_summary",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
DEPRECATED - does not do anything`,name:"identical_ok"},{anchor:"huggingface_hub.HfApi.upload_file.commmit_summary",description:`<strong>commmit_summary</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary or title of the generated commit`,name:"commmit_summary"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1843",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Oe=new Za({props:{$$slots:{default:[mi]},$$scope:{ctx:T}}}),Ie=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[fi]},$$scope:{ctx:T}}}),jt=new N({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L609"}}),Dt=new cr({}),qt=new N({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2106"}}),Ft=new N({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2143"}}),Nt=new N({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2122",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Pt=new N({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2109"}}),Lt=new cr({}),Ot=new N({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
<code>paraphrase</code>.`,name:"task_ids"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L157"}}),We=new he({props:{anchor:"huggingface_hub.DatasetFilter.example",$$slots:{default:[ui]},$$scope:{ctx:T}}}),It=new N({props:{name:"class huggingface_hub.ModelFilter",anchor:"huggingface_hub.ModelFilter",parameters:[{name:"author",val:": str = None"},{name:"library",val:": typing.Union[str, typing.List[str]] = None"},{name:"language",val:": typing.Union[str, typing.List[str]] = None"},{name:"model_name",val:": str = None"},{name:"task",val:": typing.Union[str, typing.List[str]] = None"},{name:"trained_dataset",val:": typing.Union[str, typing.List[str]] = None"},{name:"tags",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.ModelFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L243"}}),Re=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[_i]},$$scope:{ctx:T}}}),Mt=new N({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L451"}}),Be=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[bi]},$$scope:{ctx:T}}}),St=new N({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L413"}}),Ke=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[vi]},$$scope:{ctx:T}}}),{c(){i=o("meta"),v=l(),d=o("h1"),m=o("a"),u=o("span"),k(r.$$.fragment),h=l(),q=o("span"),f=c("Hugging Face Hub API"),y=l(),F=o("p"),L=c("Below is the documentation for the "),I=o("code"),M=c("HfApi"),S=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),P=l(),O=o("p"),U=c("All methods from the "),C=o("code"),ie=c("HfApi"),le=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),V=l(),G=o("p"),ge=c("The following approach uses the method from the root of the package:"),eo=l(),k(et.$$.fragment),to=l(),me=o("p"),Mo=c("The following approach uses the "),oa=o("code"),So=c("HfApi"),Uo=c(" class:"),ao=l(),k(tt.$$.fragment),oo=l(),fe=o("p"),Co=c("Using the "),na=o("code"),zo=c("HfApi"),Vo=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),no=l(),D=o("div"),k(at.$$.fragment),Go=l(),ue=o("div"),k(ot.$$.fragment),Wo=l(),sa=o("p"),Ro=c("Creates a commit in the given repo, deleting & uploading files as needed."),Bo=l(),_e=o("div"),k(nt.$$.fragment),Ko=l(),ra=o("p"),Jo=c("Create an empty repo on the HuggingFace Hub."),Qo=l(),ee=o("div"),k(st.$$.fragment),Xo=l(),ia=o("p"),Yo=c("Get info on one specific dataset on huggingface.co."),Zo=l(),la=o("p"),en=c("Dataset can be private if you pass an acceptable token."),tn=l(),te=o("div"),k(rt.$$.fragment),an=l(),ga=o("p"),on=c("Deletes a file in the given repo."),nn=l(),k(be.$$.fragment),sn=l(),ve=o("div"),k(it.$$.fragment),rn=l(),ca=o("p"),ln=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),gn=l(),$e=o("div"),k(lt.$$.fragment),cn=l(),pa=o("p"),pn=c("Gets all valid dataset tags as a nested namespace object."),hn=l(),ye=o("div"),k(gt.$$.fragment),dn=l(),ha=o("p"),mn=c(`Returns the repository name for a given model ID and optional
organization.`),fn=l(),ke=o("div"),k(ct.$$.fragment),un=l(),da=o("p"),_n=c("Gets all valid model tags as a nested namespace object"),bn=l(),W=o("div"),k(pt.$$.fragment),vn=l(),ma=o("p"),$n=c("Get the public list of all the datasets on huggingface.co"),yn=l(),k(Ae.$$.fragment),kn=l(),k(we.$$.fragment),An=l(),xe=o("div"),k(ht.$$.fragment),wn=l(),fa=o("p"),xn=c("Get the public list of all the metrics on huggingface.co"),Hn=l(),R=o("div"),k(dt.$$.fragment),jn=l(),ua=o("p"),Dn=c("Get the public list of all the models on huggingface.co"),En=l(),k(He.$$.fragment),qn=l(),k(je.$$.fragment),Fn=l(),De=o("div"),k(mt.$$.fragment),Nn=l(),_a=o("p"),Tn=c("Get the list of files in a given repo."),Pn=l(),B=o("div"),k(ft.$$.fragment),Ln=l(),ba=o("p"),On=c("Call HF API to sign in a user and get a token if credentials are valid."),In=l(),k(Ee.$$.fragment),Mn=l(),k(qe.$$.fragment),Sn=l(),ae=o("div"),k(ut.$$.fragment),Un=l(),va=o("p"),Cn=c("Call HF API to log out."),zn=l(),k(Fe.$$.fragment),Vn=l(),oe=o("div"),k(_t.$$.fragment),Gn=l(),$a=o("p"),Wn=c("Get info on one specific model on huggingface.co"),Rn=l(),ya=o("p"),Bn=c("Model can be private if you pass an acceptable token or are logged in."),Kn=l(),ne=o("div"),k(bt.$$.fragment),Jn=l(),ka=o("p"),Qn=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Xn=l(),vt=o("p"),Yn=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),$t=o("a"),Zn=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),es=c("."),ts=l(),Ne=o("div"),k(yt.$$.fragment),as=l(),Aa=o("p"),os=c("Get the info object for a given repo of a given type."),ns=l(),Te=o("div"),k(kt.$$.fragment),ss=l(),wa=o("p"),rs=c(`Saves the passed access token so git can correctly authenticate the
user.`),is=l(),se=o("div"),k(At.$$.fragment),ls=l(),xa=o("p"),gs=c("Get info on one specific Space on huggingface.co."),cs=l(),Ha=o("p"),ps=c("Space can be private if you pass an acceptable token."),hs=l(),Pe=o("div"),k(wt.$$.fragment),ds=l(),ja=o("p"),ms=c("Resets the user\u2019s access token."),fs=l(),Le=o("div"),k(xt.$$.fragment),us=l(),Da=o("p"),_s=c("Update the visibility setting of a repository."),bs=l(),K=o("div"),k(Ht.$$.fragment),vs=l(),Ea=o("p"),$s=c(`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),ys=l(),k(Oe.$$.fragment),ks=l(),k(Ie.$$.fragment),As=l(),Me=o("div"),k(jt.$$.fragment),ws=l(),qa=o("p"),xs=c("Call HF API to know \u201Cwhoami\u201D."),so=l(),ce=o("h2"),Se=o("a"),Fa=o("span"),k(Dt.$$.fragment),Hs=l(),Na=o("span"),js=c("Hugging Face local storage"),ro=l(),Et=o("p"),Ta=o("code"),Ds=c("huggingface_hub"),Es=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),io=l(),Ue=o("p"),qs=c("It does this using the "),Wt=o("a"),Fs=c("HfFolder"),Ns=c(" utility, which saves data at the root of the user."),lo=l(),z=o("div"),k(qt.$$.fragment),Ts=l(),Ce=o("div"),k(Ft.$$.fragment),Ps=l(),Pa=o("p"),Ls=c("Deletes the token from storage. Does not fail if token does not exist."),Os=l(),re=o("div"),k(Nt.$$.fragment),Is=l(),La=o("p"),Ms=c("Get token or None if not existent."),Ss=l(),Tt=o("p"),Us=c("Note that a token can be also provided using the "),Oa=o("code"),Cs=c("HUGGING_FACE_HUB_TOKEN"),zs=c(`
environment variable.`),Vs=l(),ze=o("div"),k(Pt.$$.fragment),Gs=l(),Ia=o("p"),Ws=c("Save token, creating folder as needed."),go=l(),pe=o("h2"),Ve=o("a"),Ma=o("span"),k(Lt.$$.fragment),Rs=l(),Sa=o("span"),Bs=c("Filtering helpers"),co=l(),Ge=o("p"),Ks=c("Some helpers to filter repositories on the Hub are available in the "),Ua=o("code"),Js=c("huggingface_hub"),Qs=c(" package."),po=l(),J=o("div"),k(Ot.$$.fragment),Xs=l(),Ca=o("p"),Ys=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Zs=l(),k(We.$$.fragment),ho=l(),Q=o("div"),k(It.$$.fragment),er=l(),za=o("p"),tr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ar=l(),k(Re.$$.fragment),mo=l(),X=o("div"),k(Mt.$$.fragment),or=l(),Va=o("p"),nr=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),sr=l(),k(Be.$$.fragment),fo=l(),Y=o("div"),k(St.$$.fragment),rr=l(),Ga=o("p"),ir=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),lr=l(),k(Ke.$$.fragment),this.h()},l(t){const _=ni('[data-svelte="svelte-1phssyn"]',document.head);i=n(_,"META",{name:!0,content:!0}),_.forEach(a),v=g(t),d=n(t,"H1",{class:!0});var Ut=s(d);m=n(Ut,"A",{id:!0,class:!0,href:!0});var Wa=s(m);u=n(Wa,"SPAN",{});var Ra=s(u);A(r.$$.fragment,Ra),Ra.forEach(a),Wa.forEach(a),h=g(Ut),q=n(Ut,"SPAN",{});var Ba=s(q);f=p(Ba,"Hugging Face Hub API"),Ba.forEach(a),Ut.forEach(a),y=g(t),F=n(t,"P",{});var Ct=s(F);L=p(Ct,"Below is the documentation for the "),I=n(Ct,"CODE",{});var Ka=s(I);M=p(Ka,"HfApi"),Ka.forEach(a),S=p(Ct,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Ct.forEach(a),P=g(t),O=n(t,"P",{});var zt=s(O);U=p(zt,"All methods from the "),C=n(zt,"CODE",{});var Ja=s(C);ie=p(Ja,"HfApi"),Ja.forEach(a),le=p(zt,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),zt.forEach(a),V=g(t),G=n(t,"P",{});var Qa=s(G);ge=p(Qa,"The following approach uses the method from the root of the package:"),Qa.forEach(a),eo=g(t),A(et.$$.fragment,t),to=g(t),me=n(t,"P",{});var Vt=s(me);Mo=p(Vt,"The following approach uses the "),oa=n(Vt,"CODE",{});var Xa=s(oa);So=p(Xa,"HfApi"),Xa.forEach(a),Uo=p(Vt," class:"),Vt.forEach(a),ao=g(t),A(tt.$$.fragment,t),oo=g(t),fe=n(t,"P",{});var Gt=s(fe);Co=p(Gt,"Using the "),na=n(Gt,"CODE",{});var Ya=s(na);zo=p(Ya,"HfApi"),Ya.forEach(a),Vo=p(Gt," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Gt.forEach(a),no=g(t),D=n(t,"DIV",{class:!0});var E=s(D);A(at.$$.fragment,E),Go=g(E),ue=n(E,"DIV",{class:!0});var _o=s(ue);A(ot.$$.fragment,_o),Wo=g(_o),sa=n(_o,"P",{});var pr=s(sa);Ro=p(pr,"Creates a commit in the given repo, deleting & uploading files as needed."),pr.forEach(a),_o.forEach(a),Bo=g(E),_e=n(E,"DIV",{class:!0});var bo=s(_e);A(nt.$$.fragment,bo),Ko=g(bo),ra=n(bo,"P",{});var hr=s(ra);Jo=p(hr,"Create an empty repo on the HuggingFace Hub."),hr.forEach(a),bo.forEach(a),Qo=g(E),ee=n(E,"DIV",{class:!0});var Rt=s(ee);A(st.$$.fragment,Rt),Xo=g(Rt),ia=n(Rt,"P",{});var dr=s(ia);Yo=p(dr,"Get info on one specific dataset on huggingface.co."),dr.forEach(a),Zo=g(Rt),la=n(Rt,"P",{});var mr=s(la);en=p(mr,"Dataset can be private if you pass an acceptable token."),mr.forEach(a),Rt.forEach(a),tn=g(E),te=n(E,"DIV",{class:!0});var Bt=s(te);A(rt.$$.fragment,Bt),an=g(Bt),ga=n(Bt,"P",{});var fr=s(ga);on=p(fr,"Deletes a file in the given repo."),fr.forEach(a),nn=g(Bt),A(be.$$.fragment,Bt),Bt.forEach(a),sn=g(E),ve=n(E,"DIV",{class:!0});var vo=s(ve);A(it.$$.fragment,vo),rn=g(vo),ca=n(vo,"P",{});var ur=s(ca);ln=p(ur,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),ur.forEach(a),vo.forEach(a),gn=g(E),$e=n(E,"DIV",{class:!0});var $o=s($e);A(lt.$$.fragment,$o),cn=g($o),pa=n($o,"P",{});var _r=s(pa);pn=p(_r,"Gets all valid dataset tags as a nested namespace object."),_r.forEach(a),$o.forEach(a),hn=g(E),ye=n(E,"DIV",{class:!0});var yo=s(ye);A(gt.$$.fragment,yo),dn=g(yo),ha=n(yo,"P",{});var br=s(ha);mn=p(br,`Returns the repository name for a given model ID and optional
organization.`),br.forEach(a),yo.forEach(a),fn=g(E),ke=n(E,"DIV",{class:!0});var ko=s(ke);A(ct.$$.fragment,ko),un=g(ko),da=n(ko,"P",{});var vr=s(da);_n=p(vr,"Gets all valid model tags as a nested namespace object"),vr.forEach(a),ko.forEach(a),bn=g(E),W=n(E,"DIV",{class:!0});var Je=s(W);A(pt.$$.fragment,Je),vn=g(Je),ma=n(Je,"P",{});var $r=s(ma);$n=p($r,"Get the public list of all the datasets on huggingface.co"),$r.forEach(a),yn=g(Je),A(Ae.$$.fragment,Je),kn=g(Je),A(we.$$.fragment,Je),Je.forEach(a),An=g(E),xe=n(E,"DIV",{class:!0});var Ao=s(xe);A(ht.$$.fragment,Ao),wn=g(Ao),fa=n(Ao,"P",{});var yr=s(fa);xn=p(yr,"Get the public list of all the metrics on huggingface.co"),yr.forEach(a),Ao.forEach(a),Hn=g(E),R=n(E,"DIV",{class:!0});var Qe=s(R);A(dt.$$.fragment,Qe),jn=g(Qe),ua=n(Qe,"P",{});var kr=s(ua);Dn=p(kr,"Get the public list of all the models on huggingface.co"),kr.forEach(a),En=g(Qe),A(He.$$.fragment,Qe),qn=g(Qe),A(je.$$.fragment,Qe),Qe.forEach(a),Fn=g(E),De=n(E,"DIV",{class:!0});var wo=s(De);A(mt.$$.fragment,wo),Nn=g(wo),_a=n(wo,"P",{});var Ar=s(_a);Tn=p(Ar,"Get the list of files in a given repo."),Ar.forEach(a),wo.forEach(a),Pn=g(E),B=n(E,"DIV",{class:!0});var Xe=s(B);A(ft.$$.fragment,Xe),Ln=g(Xe),ba=n(Xe,"P",{});var wr=s(ba);On=p(wr,"Call HF API to sign in a user and get a token if credentials are valid."),wr.forEach(a),In=g(Xe),A(Ee.$$.fragment,Xe),Mn=g(Xe),A(qe.$$.fragment,Xe),Xe.forEach(a),Sn=g(E),ae=n(E,"DIV",{class:!0});var Kt=s(ae);A(ut.$$.fragment,Kt),Un=g(Kt),va=n(Kt,"P",{});var xr=s(va);Cn=p(xr,"Call HF API to log out."),xr.forEach(a),zn=g(Kt),A(Fe.$$.fragment,Kt),Kt.forEach(a),Vn=g(E),oe=n(E,"DIV",{class:!0});var Jt=s(oe);A(_t.$$.fragment,Jt),Gn=g(Jt),$a=n(Jt,"P",{});var Hr=s($a);Wn=p(Hr,"Get info on one specific model on huggingface.co"),Hr.forEach(a),Rn=g(Jt),ya=n(Jt,"P",{});var jr=s(ya);Bn=p(jr,"Model can be private if you pass an acceptable token or are logged in."),jr.forEach(a),Jt.forEach(a),Kn=g(E),ne=n(E,"DIV",{class:!0});var Qt=s(ne);A(bt.$$.fragment,Qt),Jn=g(Qt),ka=n(Qt,"P",{});var Dr=s(ka);Qn=p(Dr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Dr.forEach(a),Xn=g(Qt),vt=n(Qt,"P",{});var xo=s(vt);Yn=p(xo,`Note there are certain limitations. For more information about moving
repositories, please see
`),$t=n(xo,"A",{href:!0,rel:!0});var Er=s($t);Zn=p(Er,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Er.forEach(a),es=p(xo,"."),xo.forEach(a),Qt.forEach(a),ts=g(E),Ne=n(E,"DIV",{class:!0});var Ho=s(Ne);A(yt.$$.fragment,Ho),as=g(Ho),Aa=n(Ho,"P",{});var qr=s(Aa);os=p(qr,"Get the info object for a given repo of a given type."),qr.forEach(a),Ho.forEach(a),ns=g(E),Te=n(E,"DIV",{class:!0});var jo=s(Te);A(kt.$$.fragment,jo),ss=g(jo),wa=n(jo,"P",{});var Fr=s(wa);rs=p(Fr,`Saves the passed access token so git can correctly authenticate the
user.`),Fr.forEach(a),jo.forEach(a),is=g(E),se=n(E,"DIV",{class:!0});var Xt=s(se);A(At.$$.fragment,Xt),ls=g(Xt),xa=n(Xt,"P",{});var Nr=s(xa);gs=p(Nr,"Get info on one specific Space on huggingface.co."),Nr.forEach(a),cs=g(Xt),Ha=n(Xt,"P",{});var Tr=s(Ha);ps=p(Tr,"Space can be private if you pass an acceptable token."),Tr.forEach(a),Xt.forEach(a),hs=g(E),Pe=n(E,"DIV",{class:!0});var Do=s(Pe);A(wt.$$.fragment,Do),ds=g(Do),ja=n(Do,"P",{});var Pr=s(ja);ms=p(Pr,"Resets the user\u2019s access token."),Pr.forEach(a),Do.forEach(a),fs=g(E),Le=n(E,"DIV",{class:!0});var Eo=s(Le);A(xt.$$.fragment,Eo),us=g(Eo),Da=n(Eo,"P",{});var Lr=s(Da);_s=p(Lr,"Update the visibility setting of a repository."),Lr.forEach(a),Eo.forEach(a),bs=g(E),K=n(E,"DIV",{class:!0});var Ye=s(K);A(Ht.$$.fragment,Ye),vs=g(Ye),Ea=n(Ye,"P",{});var Or=s(Ea);$s=p(Or,`Upload a local file (up to 5GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Or.forEach(a),ys=g(Ye),A(Oe.$$.fragment,Ye),ks=g(Ye),A(Ie.$$.fragment,Ye),Ye.forEach(a),As=g(E),Me=n(E,"DIV",{class:!0});var qo=s(Me);A(jt.$$.fragment,qo),ws=g(qo),qa=n(qo,"P",{});var Ir=s(qa);xs=p(Ir,"Call HF API to know \u201Cwhoami\u201D."),Ir.forEach(a),qo.forEach(a),E.forEach(a),so=g(t),ce=n(t,"H2",{class:!0});var Fo=s(ce);Se=n(Fo,"A",{id:!0,class:!0,href:!0});var Mr=s(Se);Fa=n(Mr,"SPAN",{});var Sr=s(Fa);A(Dt.$$.fragment,Sr),Sr.forEach(a),Mr.forEach(a),Hs=g(Fo),Na=n(Fo,"SPAN",{});var Ur=s(Na);js=p(Ur,"Hugging Face local storage"),Ur.forEach(a),Fo.forEach(a),ro=g(t),Et=n(t,"P",{});var gr=s(Et);Ta=n(gr,"CODE",{});var Cr=s(Ta);Ds=p(Cr,"huggingface_hub"),Cr.forEach(a),Es=p(gr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),gr.forEach(a),io=g(t),Ue=n(t,"P",{});var No=s(Ue);qs=p(No,"It does this using the "),Wt=n(No,"A",{href:!0});var zr=s(Wt);Fs=p(zr,"HfFolder"),zr.forEach(a),Ns=p(No," utility, which saves data at the root of the user."),No.forEach(a),lo=g(t),z=n(t,"DIV",{class:!0});var Ze=s(z);A(qt.$$.fragment,Ze),Ts=g(Ze),Ce=n(Ze,"DIV",{class:!0});var To=s(Ce);A(Ft.$$.fragment,To),Ps=g(To),Pa=n(To,"P",{});var Vr=s(Pa);Ls=p(Vr,"Deletes the token from storage. Does not fail if token does not exist."),Vr.forEach(a),To.forEach(a),Os=g(Ze),re=n(Ze,"DIV",{class:!0});var Yt=s(re);A(Nt.$$.fragment,Yt),Is=g(Yt),La=n(Yt,"P",{});var Gr=s(La);Ms=p(Gr,"Get token or None if not existent."),Gr.forEach(a),Ss=g(Yt),Tt=n(Yt,"P",{});var Po=s(Tt);Us=p(Po,"Note that a token can be also provided using the "),Oa=n(Po,"CODE",{});var Wr=s(Oa);Cs=p(Wr,"HUGGING_FACE_HUB_TOKEN"),Wr.forEach(a),zs=p(Po,`
environment variable.`),Po.forEach(a),Yt.forEach(a),Vs=g(Ze),ze=n(Ze,"DIV",{class:!0});var Lo=s(ze);A(Pt.$$.fragment,Lo),Gs=g(Lo),Ia=n(Lo,"P",{});var Rr=s(Ia);Ws=p(Rr,"Save token, creating folder as needed."),Rr.forEach(a),Lo.forEach(a),Ze.forEach(a),go=g(t),pe=n(t,"H2",{class:!0});var Oo=s(pe);Ve=n(Oo,"A",{id:!0,class:!0,href:!0});var Br=s(Ve);Ma=n(Br,"SPAN",{});var Kr=s(Ma);A(Lt.$$.fragment,Kr),Kr.forEach(a),Br.forEach(a),Rs=g(Oo),Sa=n(Oo,"SPAN",{});var Jr=s(Sa);Bs=p(Jr,"Filtering helpers"),Jr.forEach(a),Oo.forEach(a),co=g(t),Ge=n(t,"P",{});var Io=s(Ge);Ks=p(Io,"Some helpers to filter repositories on the Hub are available in the "),Ua=n(Io,"CODE",{});var Qr=s(Ua);Js=p(Qr,"huggingface_hub"),Qr.forEach(a),Qs=p(Io," package."),Io.forEach(a),po=g(t),J=n(t,"DIV",{class:!0});var Zt=s(J);A(Ot.$$.fragment,Zt),Xs=g(Zt),Ca=n(Zt,"P",{});var Xr=s(Ca);Ys=p(Xr,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Xr.forEach(a),Zs=g(Zt),A(We.$$.fragment,Zt),Zt.forEach(a),ho=g(t),Q=n(t,"DIV",{class:!0});var ea=s(Q);A(It.$$.fragment,ea),er=g(ea),za=n(ea,"P",{});var Yr=s(za);tr=p(Yr,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Yr.forEach(a),ar=g(ea),A(Re.$$.fragment,ea),ea.forEach(a),mo=g(t),X=n(t,"DIV",{class:!0});var ta=s(X);A(Mt.$$.fragment,ta),or=g(ta),Va=n(ta,"P",{});var Zr=s(Va);nr=p(Zr,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Zr.forEach(a),sr=g(ta),A(Be.$$.fragment,ta),ta.forEach(a),fo=g(t),Y=n(t,"DIV",{class:!0});var aa=s(Y);A(St.$$.fragment,aa),rr=g(aa),Ga=n(aa,"P",{});var ei=s(Ga);ir=p(ei,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),ei.forEach(a),lr=g(aa),A(Ke.$$.fragment,aa),aa.forEach(a),this.h()},h(){$(i,"name","hf:doc:metadata"),$(i,"content",JSON.stringify(yi)),$(m,"id","huggingface_hub.HfApi"),$(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(m,"href","#huggingface_hub.HfApi"),$(d,"class","relative group"),$(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$($t,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$($t,"rel","nofollow"),$(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Se,"id","huggingface_hub.HfFolder"),$(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Se,"href","#huggingface_hub.HfFolder"),$(ce,"class","relative group"),$(Wt,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"id","huggingface_hub.DatasetFilter"),$(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Ve,"href","#huggingface_hub.DatasetFilter"),$(pe,"class","relative group"),$(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,i),b(t,v,_),b(t,d,_),e(d,m),e(m,u),w(r,u,null),e(d,h),e(d,q),e(q,f),b(t,y,_),b(t,F,_),e(F,L),e(F,I),e(I,M),e(F,S),b(t,P,_),b(t,O,_),e(O,U),e(O,C),e(C,ie),e(O,le),b(t,V,_),b(t,G,_),e(G,ge),b(t,eo,_),w(et,t,_),b(t,to,_),b(t,me,_),e(me,Mo),e(me,oa),e(oa,So),e(me,Uo),b(t,ao,_),w(tt,t,_),b(t,oo,_),b(t,fe,_),e(fe,Co),e(fe,na),e(na,zo),e(fe,Vo),b(t,no,_),b(t,D,_),w(at,D,null),e(D,Go),e(D,ue),w(ot,ue,null),e(ue,Wo),e(ue,sa),e(sa,Ro),e(D,Bo),e(D,_e),w(nt,_e,null),e(_e,Ko),e(_e,ra),e(ra,Jo),e(D,Qo),e(D,ee),w(st,ee,null),e(ee,Xo),e(ee,ia),e(ia,Yo),e(ee,Zo),e(ee,la),e(la,en),e(D,tn),e(D,te),w(rt,te,null),e(te,an),e(te,ga),e(ga,on),e(te,nn),w(be,te,null),e(D,sn),e(D,ve),w(it,ve,null),e(ve,rn),e(ve,ca),e(ca,ln),e(D,gn),e(D,$e),w(lt,$e,null),e($e,cn),e($e,pa),e(pa,pn),e(D,hn),e(D,ye),w(gt,ye,null),e(ye,dn),e(ye,ha),e(ha,mn),e(D,fn),e(D,ke),w(ct,ke,null),e(ke,un),e(ke,da),e(da,_n),e(D,bn),e(D,W),w(pt,W,null),e(W,vn),e(W,ma),e(ma,$n),e(W,yn),w(Ae,W,null),e(W,kn),w(we,W,null),e(D,An),e(D,xe),w(ht,xe,null),e(xe,wn),e(xe,fa),e(fa,xn),e(D,Hn),e(D,R),w(dt,R,null),e(R,jn),e(R,ua),e(ua,Dn),e(R,En),w(He,R,null),e(R,qn),w(je,R,null),e(D,Fn),e(D,De),w(mt,De,null),e(De,Nn),e(De,_a),e(_a,Tn),e(D,Pn),e(D,B),w(ft,B,null),e(B,Ln),e(B,ba),e(ba,On),e(B,In),w(Ee,B,null),e(B,Mn),w(qe,B,null),e(D,Sn),e(D,ae),w(ut,ae,null),e(ae,Un),e(ae,va),e(va,Cn),e(ae,zn),w(Fe,ae,null),e(D,Vn),e(D,oe),w(_t,oe,null),e(oe,Gn),e(oe,$a),e($a,Wn),e(oe,Rn),e(oe,ya),e(ya,Bn),e(D,Kn),e(D,ne),w(bt,ne,null),e(ne,Jn),e(ne,ka),e(ka,Qn),e(ne,Xn),e(ne,vt),e(vt,Yn),e(vt,$t),e($t,Zn),e(vt,es),e(D,ts),e(D,Ne),w(yt,Ne,null),e(Ne,as),e(Ne,Aa),e(Aa,os),e(D,ns),e(D,Te),w(kt,Te,null),e(Te,ss),e(Te,wa),e(wa,rs),e(D,is),e(D,se),w(At,se,null),e(se,ls),e(se,xa),e(xa,gs),e(se,cs),e(se,Ha),e(Ha,ps),e(D,hs),e(D,Pe),w(wt,Pe,null),e(Pe,ds),e(Pe,ja),e(ja,ms),e(D,fs),e(D,Le),w(xt,Le,null),e(Le,us),e(Le,Da),e(Da,_s),e(D,bs),e(D,K),w(Ht,K,null),e(K,vs),e(K,Ea),e(Ea,$s),e(K,ys),w(Oe,K,null),e(K,ks),w(Ie,K,null),e(D,As),e(D,Me),w(jt,Me,null),e(Me,ws),e(Me,qa),e(qa,xs),b(t,so,_),b(t,ce,_),e(ce,Se),e(Se,Fa),w(Dt,Fa,null),e(ce,Hs),e(ce,Na),e(Na,js),b(t,ro,_),b(t,Et,_),e(Et,Ta),e(Ta,Ds),e(Et,Es),b(t,io,_),b(t,Ue,_),e(Ue,qs),e(Ue,Wt),e(Wt,Fs),e(Ue,Ns),b(t,lo,_),b(t,z,_),w(qt,z,null),e(z,Ts),e(z,Ce),w(Ft,Ce,null),e(Ce,Ps),e(Ce,Pa),e(Pa,Ls),e(z,Os),e(z,re),w(Nt,re,null),e(re,Is),e(re,La),e(La,Ms),e(re,Ss),e(re,Tt),e(Tt,Us),e(Tt,Oa),e(Oa,Cs),e(Tt,zs),e(z,Vs),e(z,ze),w(Pt,ze,null),e(ze,Gs),e(ze,Ia),e(Ia,Ws),b(t,go,_),b(t,pe,_),e(pe,Ve),e(Ve,Ma),w(Lt,Ma,null),e(pe,Rs),e(pe,Sa),e(Sa,Bs),b(t,co,_),b(t,Ge,_),e(Ge,Ks),e(Ge,Ua),e(Ua,Js),e(Ge,Qs),b(t,po,_),b(t,J,_),w(Ot,J,null),e(J,Xs),e(J,Ca),e(Ca,Ys),e(J,Zs),w(We,J,null),b(t,ho,_),b(t,Q,_),w(It,Q,null),e(Q,er),e(Q,za),e(za,tr),e(Q,ar),w(Re,Q,null),b(t,mo,_),b(t,X,_),w(Mt,X,null),e(X,or),e(X,Va),e(Va,nr),e(X,sr),w(Be,X,null),b(t,fo,_),b(t,Y,_),w(St,Y,null),e(Y,rr),e(Y,Ga),e(Ga,ir),e(Y,lr),w(Ke,Y,null),uo=!0},p(t,[_]){const Ut={};_&2&&(Ut.$$scope={dirty:_,ctx:t}),be.$set(Ut);const Wa={};_&2&&(Wa.$$scope={dirty:_,ctx:t}),Ae.$set(Wa);const Ra={};_&2&&(Ra.$$scope={dirty:_,ctx:t}),we.$set(Ra);const Ba={};_&2&&(Ba.$$scope={dirty:_,ctx:t}),He.$set(Ba);const Ct={};_&2&&(Ct.$$scope={dirty:_,ctx:t}),je.$set(Ct);const Ka={};_&2&&(Ka.$$scope={dirty:_,ctx:t}),Ee.$set(Ka);const zt={};_&2&&(zt.$$scope={dirty:_,ctx:t}),qe.$set(zt);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:t}),Fe.$set(Ja);const Qa={};_&2&&(Qa.$$scope={dirty:_,ctx:t}),Oe.$set(Qa);const Vt={};_&2&&(Vt.$$scope={dirty:_,ctx:t}),Ie.$set(Vt);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:t}),We.$set(Xa);const Gt={};_&2&&(Gt.$$scope={dirty:_,ctx:t}),Re.$set(Gt);const Ya={};_&2&&(Ya.$$scope={dirty:_,ctx:t}),Be.$set(Ya);const E={};_&2&&(E.$$scope={dirty:_,ctx:t}),Ke.$set(E)},i(t){uo||(x(r.$$.fragment,t),x(et.$$.fragment,t),x(tt.$$.fragment,t),x(at.$$.fragment,t),x(ot.$$.fragment,t),x(nt.$$.fragment,t),x(st.$$.fragment,t),x(rt.$$.fragment,t),x(be.$$.fragment,t),x(it.$$.fragment,t),x(lt.$$.fragment,t),x(gt.$$.fragment,t),x(ct.$$.fragment,t),x(pt.$$.fragment,t),x(Ae.$$.fragment,t),x(we.$$.fragment,t),x(ht.$$.fragment,t),x(dt.$$.fragment,t),x(He.$$.fragment,t),x(je.$$.fragment,t),x(mt.$$.fragment,t),x(ft.$$.fragment,t),x(Ee.$$.fragment,t),x(qe.$$.fragment,t),x(ut.$$.fragment,t),x(Fe.$$.fragment,t),x(_t.$$.fragment,t),x(bt.$$.fragment,t),x(yt.$$.fragment,t),x(kt.$$.fragment,t),x(At.$$.fragment,t),x(wt.$$.fragment,t),x(xt.$$.fragment,t),x(Ht.$$.fragment,t),x(Oe.$$.fragment,t),x(Ie.$$.fragment,t),x(jt.$$.fragment,t),x(Dt.$$.fragment,t),x(qt.$$.fragment,t),x(Ft.$$.fragment,t),x(Nt.$$.fragment,t),x(Pt.$$.fragment,t),x(Lt.$$.fragment,t),x(Ot.$$.fragment,t),x(We.$$.fragment,t),x(It.$$.fragment,t),x(Re.$$.fragment,t),x(Mt.$$.fragment,t),x(Be.$$.fragment,t),x(St.$$.fragment,t),x(Ke.$$.fragment,t),uo=!0)},o(t){H(r.$$.fragment,t),H(et.$$.fragment,t),H(tt.$$.fragment,t),H(at.$$.fragment,t),H(ot.$$.fragment,t),H(nt.$$.fragment,t),H(st.$$.fragment,t),H(rt.$$.fragment,t),H(be.$$.fragment,t),H(it.$$.fragment,t),H(lt.$$.fragment,t),H(gt.$$.fragment,t),H(ct.$$.fragment,t),H(pt.$$.fragment,t),H(Ae.$$.fragment,t),H(we.$$.fragment,t),H(ht.$$.fragment,t),H(dt.$$.fragment,t),H(He.$$.fragment,t),H(je.$$.fragment,t),H(mt.$$.fragment,t),H(ft.$$.fragment,t),H(Ee.$$.fragment,t),H(qe.$$.fragment,t),H(ut.$$.fragment,t),H(Fe.$$.fragment,t),H(_t.$$.fragment,t),H(bt.$$.fragment,t),H(yt.$$.fragment,t),H(kt.$$.fragment,t),H(At.$$.fragment,t),H(wt.$$.fragment,t),H(xt.$$.fragment,t),H(Ht.$$.fragment,t),H(Oe.$$.fragment,t),H(Ie.$$.fragment,t),H(jt.$$.fragment,t),H(Dt.$$.fragment,t),H(qt.$$.fragment,t),H(Ft.$$.fragment,t),H(Nt.$$.fragment,t),H(Pt.$$.fragment,t),H(Lt.$$.fragment,t),H(Ot.$$.fragment,t),H(We.$$.fragment,t),H(It.$$.fragment,t),H(Re.$$.fragment,t),H(Mt.$$.fragment,t),H(Be.$$.fragment,t),H(St.$$.fragment,t),H(Ke.$$.fragment,t),uo=!1},d(t){a(i),t&&a(v),t&&a(d),j(r),t&&a(y),t&&a(F),t&&a(P),t&&a(O),t&&a(V),t&&a(G),t&&a(eo),j(et,t),t&&a(to),t&&a(me),t&&a(ao),j(tt,t),t&&a(oo),t&&a(fe),t&&a(no),t&&a(D),j(at),j(ot),j(nt),j(st),j(rt),j(be),j(it),j(lt),j(gt),j(ct),j(pt),j(Ae),j(we),j(ht),j(dt),j(He),j(je),j(mt),j(ft),j(Ee),j(qe),j(ut),j(Fe),j(_t),j(bt),j(yt),j(kt),j(At),j(wt),j(xt),j(Ht),j(Oe),j(Ie),j(jt),t&&a(so),t&&a(ce),j(Dt),t&&a(ro),t&&a(Et),t&&a(io),t&&a(Ue),t&&a(lo),t&&a(z),j(qt),j(Ft),j(Nt),j(Pt),t&&a(go),t&&a(pe),j(Lt),t&&a(co),t&&a(Ge),t&&a(po),t&&a(J),j(Ot),j(We),t&&a(ho),t&&a(Q),j(It),j(Re),t&&a(mo),t&&a(X),j(Mt),j(Be),t&&a(fo),t&&a(Y),j(St),j(Ke)}}}const yi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function ki(T){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ei extends ti{constructor(i){super();ai(this,i,ki,$i,oi,{})}}export{Ei as default,yi as metadata};
