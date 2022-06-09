import{S as Hi,i as xi,s as ji,e as n,k as l,w as k,t as c,M as qi,c as s,d as a,m as g,a as r,x as w,h as p,b as $,G as e,g as v,y as A,q as H,o as x,B as j,v as Ei,L as de}from"../../chunks/vendor-hf-doc-builder.js";import{T as ca}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Nr}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Di(T){let i,b,m,h,f,o,d,F,u,y,D,O,I,M,S;return{c(){i=n("p"),b=c("Raises the following errors:"),m=l(),h=n("ul"),f=n("li"),o=n("a"),d=n("code"),F=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=l(),D=n("li"),O=n("a"),I=n("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var L=r(i);b=p(L,"Raises the following errors:"),L.forEach(a),m=g(N),h=s(N,"UL",{});var U=r(h);f=s(U,"LI",{});var C=r(f);o=s(C,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"CODE",{});var B=r(d);F=p(B,"HTTPError"),B.forEach(a),R.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),D=s(U,"LI",{});var z=r(D);O=s(z,"A",{href:!0,rel:!0});var W=r(O);I=s(W,"CODE",{});var K=r(I);M=p(K,"ValueError"),K.forEach(a),W.forEach(a),S=p(z,`
if some parameter value is invalid`),z.forEach(a),U.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(O,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(O,"rel","nofollow")},m(N,L){v(N,i,L),e(i,b),v(N,m,L),v(N,h,L),e(h,f),e(f,o),e(o,d),e(d,F),e(f,u),e(h,y),e(h,D),e(D,O),e(O,I),e(I,M),e(D,S)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Fi(T){let i,b,m,h,f,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(<span class="hljs-built_in">filter</span>=filt)`}}),{c(){i=n("p"),b=c("Example usage with the "),m=n("code"),h=c("filter"),f=c(" argument:"),o=l(),k(d.$$.fragment)},l(u){i=s(u,"P",{});var y=r(i);b=p(y,"Example usage with the "),m=s(y,"CODE",{});var D=r(m);h=p(D,"filter"),D.forEach(a),f=p(y," argument:"),y.forEach(a),o=g(u),w(d.$$.fragment,u)},m(u,y){v(u,i,y),e(i,b),e(i,m),e(m,h),e(i,f),v(u,o,y),A(d,u,y),F=!0},p:de,i(u){F||(H(d.$$.fragment,u),F=!0)},o(u){x(d.$$.fragment,u),F=!1},d(u){u&&a(i),u&&a(o),j(d,u)}}}function Ni(T){let i,b,m,h,f,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all datasets with "text" in their name
api.list_datasets(search="text")

# List all datasets with "text" in their name made by google
api.list_datasets(search="text", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all datasets with &quot;text&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_datasets(search=<span class="hljs-string">&quot;text&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),b=c("Example usage with the "),m=n("code"),h=c("search"),f=c(" argument:"),o=l(),k(d.$$.fragment)},l(u){i=s(u,"P",{});var y=r(i);b=p(y,"Example usage with the "),m=s(y,"CODE",{});var D=r(m);h=p(D,"search"),D.forEach(a),f=p(y," argument:"),y.forEach(a),o=g(u),w(d.$$.fragment,u)},m(u,y){v(u,i,y),e(i,b),e(i,m),e(m,h),e(i,f),v(u,o,y),A(d,u,y),F=!0},p:de,i(u){F||(H(d.$$.fragment,u),F=!0)},o(u){x(d.$$.fragment,u),F=!1},d(u){u&&a(i),u&&a(o),j(d,u)}}}function Ti(T){let i,b,m,h,f,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

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
<span class="hljs-meta">&gt;&gt;&gt; </span>filt = ModelFilter(library=args.library.allennlp)`}}),{c(){i=n("p"),b=c("Example usage with the "),m=n("code"),h=c("filter"),f=c(" argument:"),o=l(),k(d.$$.fragment)},l(u){i=s(u,"P",{});var y=r(i);b=p(y,"Example usage with the "),m=s(y,"CODE",{});var D=r(m);h=p(D,"filter"),D.forEach(a),f=p(y," argument:"),y.forEach(a),o=g(u),w(d.$$.fragment,u)},m(u,y){v(u,i,y),e(i,b),e(i,m),e(m,h),e(i,f),v(u,o,y),A(d,u,y),F=!0},p:de,i(u){F||(H(d.$$.fragment,u),F=!0)},o(u){x(d.$$.fragment,u),F=!1},d(u){u&&a(i),u&&a(o),j(d,u)}}}function Pi(T){let i,b,m,h,f,o,d,F;return d=new ee({props:{code:`from huggingface_hub import HfApi

api = HfApi()

# List all models with "bert" in their name
api.list_models(search="bert")

# List all models with "bert" in their name made by google
api.list_models(search="bert", author="google")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

<span class="hljs-meta">&gt;&gt;&gt; </span>api = HfApi()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># List all models with &quot;bert&quot; in their name made by google</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>api.list_models(search=<span class="hljs-string">&quot;bert&quot;</span>, author=<span class="hljs-string">&quot;google&quot;</span>)`}}),{c(){i=n("p"),b=c("Example usage with the "),m=n("code"),h=c("search"),f=c(" argument:"),o=l(),k(d.$$.fragment)},l(u){i=s(u,"P",{});var y=r(i);b=p(y,"Example usage with the "),m=s(y,"CODE",{});var D=r(m);h=p(D,"search"),D.forEach(a),f=p(y," argument:"),y.forEach(a),o=g(u),w(d.$$.fragment,u)},m(u,y){v(u,i,y),e(i,b),e(i,m),e(m,h),e(i,f),v(u,o,y),A(d,u,y),F=!0},p:de,i(u){F||(H(d.$$.fragment,u),F=!0)},o(u){x(d.$$.fragment,u),F=!1},d(u){u&&a(i),u&&a(o),j(d,u)}}}function Oi(T){let i,b,m,h,f;return{c(){i=n("p"),b=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),m=n("a"),h=c("HfApi.set_access_token()"),f=c(" instead."),this.h()},l(o){i=s(o,"P",{});var d=r(i);b=p(d,`Warning: Deprecated, will be removed in v0.8. Please use
`),m=s(d,"A",{href:!0});var F=r(m);h=p(F,"HfApi.set_access_token()"),F.forEach(a),f=p(d," instead."),d.forEach(a),this.h()},h(){$(m,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.set_access_token")},m(o,d){v(o,i,d),e(i,b),e(i,m),e(m,h),e(i,f)},d(o){o&&a(i)}}}function Li(T){let i,b,m,h,f,o,d,F,u;return{c(){i=n("p"),b=c("Raises the following errors:"),m=l(),h=n("ul"),f=n("li"),o=n("a"),d=n("code"),F=c("HTTPError"),u=c(`
if credentials are invalid`),this.h()},l(y){i=s(y,"P",{});var D=r(i);b=p(D,"Raises the following errors:"),D.forEach(a),m=g(y),h=s(y,"UL",{});var O=r(h);f=s(O,"LI",{});var I=r(f);o=s(I,"A",{href:!0,rel:!0});var M=r(o);d=s(M,"CODE",{});var S=r(d);F=p(S,"HTTPError"),S.forEach(a),M.forEach(a),u=p(I,`
if credentials are invalid`),I.forEach(a),O.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow")},m(y,D){v(y,i,D),e(i,b),v(y,m,D),v(y,h,D),e(h,f),e(f,o),e(o,d),e(d,F),e(f,u)},d(y){y&&a(i),y&&a(m),y&&a(h)}}}function Ii(T){let i,b,m,h,f;return{c(){i=n("p"),b=c(`Warning: Deprecated, will be removed in v0.8. Please use
`),m=n("a"),h=c("HfApi.unset_access_token()"),f=c(" instead."),this.h()},l(o){i=s(o,"P",{});var d=r(i);b=p(d,`Warning: Deprecated, will be removed in v0.8. Please use
`),m=s(d,"A",{href:!0});var F=r(m);h=p(F,"HfApi.unset_access_token()"),F.forEach(a),f=p(d," instead."),d.forEach(a),this.h()},h(){$(m,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfApi.unset_access_token")},m(o,d){v(o,i,d),e(i,b),e(i,m),e(m,h),e(i,f)},d(o){o&&a(i)}}}function Mi(T){let i,b,m,h,f,o,d,F,u,y,D,O,I,M,S;return{c(){i=n("p"),b=c("Raises the following errors:"),m=l(),h=n("ul"),f=n("li"),o=n("a"),d=n("code"),F=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=l(),D=n("li"),O=n("a"),I=n("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var L=r(i);b=p(L,"Raises the following errors:"),L.forEach(a),m=g(N),h=s(N,"UL",{});var U=r(h);f=s(U,"LI",{});var C=r(f);o=s(C,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"CODE",{});var B=r(d);F=p(B,"HTTPError"),B.forEach(a),R.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),D=s(U,"LI",{});var z=r(D);O=s(z,"A",{href:!0,rel:!0});var W=r(O);I=s(W,"CODE",{});var K=r(I);M=p(K,"ValueError"),K.forEach(a),W.forEach(a),S=p(z,`
if some parameter value is invalid`),z.forEach(a),U.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(O,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(O,"rel","nofollow")},m(N,L){v(N,i,L),e(i,b),v(N,m,L),v(N,h,L),e(h,f),e(f,o),e(o,d),e(d,F),e(f,u),e(h,y),e(h,D),e(D,O),e(O,I),e(I,M),e(D,S)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Si(T){let i,b,m,h,f;return h=new ee({props:{code:`with open("./local/filepath", "rb") as fobj:
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
<span class="hljs-string">&quot;https://huggingface.co/username/my-model/blob/main/remote/file/path.h5&quot;</span>`}}),{c(){i=n("p"),b=c("Example usage:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=p(d,"Example usage:"),d.forEach(a),m=g(o),w(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),A(h,o,d),f=!0},p:de,i(o){f||(H(h.$$.fragment,o),f=!0)},o(o){x(h.$$.fragment,o),f=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Ui(T){let i,b,m,h,f,o,d,F,u,y,D,O,I,M,S;return{c(){i=n("p"),b=c("Raises the following errors:"),m=l(),h=n("ul"),f=n("li"),o=n("a"),d=n("code"),F=c("HTTPError"),u=c(`
if the HuggingFace API returned an error`),y=l(),D=n("li"),O=n("a"),I=n("code"),M=c("ValueError"),S=c(`
if some parameter value is invalid`),this.h()},l(N){i=s(N,"P",{});var L=r(i);b=p(L,"Raises the following errors:"),L.forEach(a),m=g(N),h=s(N,"UL",{});var U=r(h);f=s(U,"LI",{});var C=r(f);o=s(C,"A",{href:!0,rel:!0});var R=r(o);d=s(R,"CODE",{});var B=r(d);F=p(B,"HTTPError"),B.forEach(a),R.forEach(a),u=p(C,`
if the HuggingFace API returned an error`),C.forEach(a),y=g(U),D=s(U,"LI",{});var z=r(D);O=s(z,"A",{href:!0,rel:!0});var W=r(O);I=s(W,"CODE",{});var K=r(I);M=p(K,"ValueError"),K.forEach(a),W.forEach(a),S=p(z,`
if some parameter value is invalid`),z.forEach(a),U.forEach(a),this.h()},h(){$(o,"href","https://2.python-requests.org/en/master/api/#requests.HTTPError"),$(o,"rel","nofollow"),$(O,"href","https://docs.python.org/3/library/exceptions.html#ValueError"),$(O,"rel","nofollow")},m(N,L){v(N,i,L),e(i,b),v(N,m,L),v(N,h,L),e(h,f),e(f,o),e(o,d),e(d,F),e(f,u),e(h,y),e(h,D),e(D,O),e(O,I),e(I,M),e(D,S)},d(N){N&&a(i),N&&a(m),N&&a(h)}}}function Ci(T){let i,b,m,h,f;return h=new ee({props:{code:`upload_file(
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
TODO : <span class="hljs-keyword">return</span> <span class="hljs-built_in">type</span>`}}),{c(){i=n("p"),b=c("Example usage:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=p(d,"Example usage:"),d.forEach(a),m=g(o),w(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),A(h,o,d),f=!0},p:de,i(o){f||(H(h.$$.fragment,o),f=!0)},o(o){x(h.$$.fragment,o),f=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function zi(T){let i,b,m,h,f;return h=new ee({props:{code:`from huggingface_hub import DatasetFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = DatasetFilter(task_ids=<span class="hljs-string">&quot;paraphrase&quot;</span>)`}}),{c(){i=n("p"),b=c("Examples:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=p(d,"Examples:"),d.forEach(a),m=g(o),w(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),A(h,o,d),f=!0},p:de,i(o){f||(H(h.$$.fragment,o),f=!0)},o(o){x(h.$$.fragment,o),f=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Vi(T){let i,b;return i=new ee({props:{code:`from huggingface_hub import ModelFilter

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
<span class="hljs-meta">&gt;&gt;&gt; </span>new_filter = ModelFilter(trained_dataset=<span class="hljs-string">&quot;common_voice&quot;</span>)`}}),{c(){k(i.$$.fragment)},l(m){w(i.$$.fragment,m)},m(m,h){A(i,m,h),b=!0},p:de,i(m){b||(H(i.$$.fragment,m),b=!0)},o(m){x(i.$$.fragment,m),b=!1},d(m){j(i,m)}}}function Wi(T){let i,b,m,h,f;return h=new ee({props:{code:`args = DatasetSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = DatasetSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),b=c("Example:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=p(d,"Example:"),d.forEach(a),m=g(o),w(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),A(h,o,d),f=!0},p:de,i(o){f||(H(h.$$.fragment,o),f=!0)},o(o){x(h.$$.fragment,o),f=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Gi(T){let i,b,m,h,f;return h=new ee({props:{code:`args = ModelSearchArguments()
args.author_or_organization.huggingface
args.language.en`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>args = ModelSearchArguments()
<span class="hljs-meta">&gt;&gt;&gt; </span>args.author_or_organization.huggingface
<span class="hljs-meta">&gt;&gt;&gt; </span>args.language.en`}}),{c(){i=n("p"),b=c("Example:"),m=l(),k(h.$$.fragment)},l(o){i=s(o,"P",{});var d=r(i);b=p(d,"Example:"),d.forEach(a),m=g(o),w(h.$$.fragment,o)},m(o,d){v(o,i,d),e(i,b),v(o,m,d),A(h,o,d),f=!0},p:de,i(o){f||(H(h.$$.fragment,o),f=!0)},o(o){x(h.$$.fragment,o),f=!1},d(o){o&&a(i),o&&a(m),j(h,o)}}}function Ri(T){let i,b,m,h,f,o,d,F,u,y,D,O,I,M,S,N,L,U,C,R,B,z,W,K,po,nt,ho,fe,Jo,pa,Qo,Xo,mo,st,uo,_e,Yo,ha,Zo,en,fo,q,rt,tn,be,it,an,da,on,nn,ve,lt,sn,ma,rn,ln,se,gt,gn,ua,cn,pn,fa,hn,dn,re,ct,mn,_a,un,fn,$e,_n,ye,pt,bn,ba,vn,$n,ke,ht,yn,va,kn,wn,we,dt,An,$a,Hn,xn,Ae,mt,jn,ya,qn,En,J,ut,Dn,ka,Fn,Nn,He,Tn,xe,Pn,je,ft,On,wa,Ln,In,Q,_t,Mn,Aa,Sn,Un,qe,Cn,Ee,zn,De,bt,Vn,Ha,Wn,Gn,X,vt,Rn,xa,Bn,Kn,Fe,Jn,Ne,Qn,ie,$t,Xn,ja,Yn,Zn,Te,es,le,yt,ts,qa,as,os,Ea,ns,ss,ge,kt,rs,Da,is,ls,wt,gs,At,cs,ps,hs,Pe,Ht,ds,Fa,ms,us,Oe,xt,fs,Na,_s,bs,ce,jt,vs,Ta,$s,ys,Pa,ks,ws,Le,qt,As,Oa,Hs,xs,Ie,Et,js,La,qs,Es,Y,Dt,Ds,Ia,Fs,Ns,Me,Ts,Se,Ps,V,Ft,Os,Ma,Ls,Is,Sa,Ms,Ss,Nt,Us,Ua,Cs,zs,Vs,Ue,Ws,Ce,Gs,ze,Tt,Rs,Ca,Bs,_o,me,Ve,za,Pt,Ks,Va,Js,bo,Ot,Wa,Qs,Xs,vo,We,Ys,Yt,Zs,er,$o,G,Lt,tr,Ge,It,ar,Ga,or,nr,pe,Mt,sr,Ra,rr,ir,St,lr,Ba,gr,cr,pr,Re,Ut,hr,Ka,dr,yo,ue,Be,Ja,Ct,mr,Qa,ur,ko,Ke,fr,Xa,_r,br,wo,te,zt,vr,Ya,$r,yr,Je,Ao,ae,Vt,kr,Za,wr,Ar,Qe,Ho,oe,Wt,Hr,eo,xr,jr,Xe,xo,ne,Gt,qr,to,Er,Dr,Ye,jo;return o=new Nr({}),nt=new ee({props:{code:`from huggingface_hub import list_models

models = list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

models = list_models()`}}),st=new ee({props:{code:`from huggingface_hub import HfApi

hf_api = HfApi()
models = hf_api.list_models()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> HfApi

hf_api = HfApi()
models = hf_api.list_models()`}}),rt=new P({props:{name:"class huggingface_hub.HfApi",anchor:"huggingface_hub.HfApi",parameters:[{name:"endpoint",val:" = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L564"}}),it=new P({props:{name:"create_commit",anchor:"huggingface_hub.HfApi.create_commit",parameters:[{name:"repo_id",val:": str"},{name:"operations",val:": typing.Iterable[typing.Union[huggingface_hub.commit_api.CommitOperationAdd, huggingface_hub.commit_api.CommitOperationDelete]]"},{name:"commit_message",val:": str"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"},{name:"num_threads",val:": int = 5"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_commit.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
Setting it to 2 means at most 2 files will be uploaded concurrently.`,name:"num_threads"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1740"}}),lt=new P({props:{name:"create_repo",anchor:"huggingface_hub.HfApi.create_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"exist_ok",val:": typing.Optional[bool] = False"},{name:"space_sdk",val:": typing.Optional[str] = None"},{name:"name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.create_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
&#x201C;streamlit&#x201D;, &#x201C;gradio&#x201D;, or &#x201C;static&#x201D;.`,name:"space_sdk"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1383",returnDescription:`
<p>URL to the newly created repo.</p>
`,returnType:`
<p><code>str</code></p>
`}}),gt=new P({props:{name:"dataset_info",anchor:"huggingface_hub.HfApi.dataset_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.dataset_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.dataset_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the dataset repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.dataset_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.dataset_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1212",returnDescription:`
<p>The dataset repository information.</p>
`,returnType:`
<p><code>DatasetInfo</code></p>
`}}),ct=new P({props:{name:"delete_file",anchor:"huggingface_hub.HfApi.delete_file",parameters:[{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_file.path_in_repo",description:`<strong>path_in_repo</strong> (<code>str</code>) &#x2014;
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
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2202"}}),$e=new ca({props:{$$slots:{default:[Di]},$$scope:{ctx:T}}}),pt=new P({props:{name:"delete_repo",anchor:"huggingface_hub.HfApi.delete_repo",parameters:[{name:"repo_id",val:": str = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.delete_repo.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.delete_repo.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.delete_repo.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1513"}}),ht=new P({props:{name:"get_dataset_tags",anchor:"huggingface_hub.HfApi.get_dataset_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L763"}}),dt=new P({props:{name:"get_full_repo_name",anchor:"huggingface_hub.HfApi.get_full_repo_name",parameters:[{name:"model_id",val:": str"},{name:"organization",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.get_full_repo_name.model_id",description:`<strong>model_id</strong> (<code>str</code>) &#x2014;
The name of the model.`,name:"model_id"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
If passed, the repository name will be in the organization
namespace instead of the user namespace.`,name:"organization"},{anchor:"huggingface_hub.HfApi.get_full_repo_name.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The Hugging Face authentication token`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2273",returnDescription:`
<p>The repository name in the user\u2019s namespace
({username}/{model_id}) if no organization is passed, and under the
organization namespace ({organization}/{model_id}) otherwise.</p>
`,returnType:`
<p><code>str</code></p>
`}}),mt=new P({props:{name:"get_model_tags",anchor:"huggingface_hub.HfApi.get_model_tags",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L755"}}),ut=new P({props:{name:"list_datasets",anchor:"huggingface_hub.HfApi.list_datasets",parameters:[{name:"filter",val:": typing.Union[huggingface_hub.utils.endpoint_helpers.DatasetFilter, str, typing.Iterable[str], NoneType] = None"},{name:"author",val:": typing.Optional[str] = None"},{name:"search",val:": typing.Optional[str] = None"},{name:"sort",val:": typing.Union[typing.Literal['lastModified'], str, NoneType] = None"},{name:"direction",val:": typing.Optional[typing.Literal[-1]] = None"},{name:"limit",val:": typing.Optional[int] = None"},{name:"cardData",val:": typing.Optional[bool] = None"},{name:"full",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_datasets.filter",description:`<strong>filter</strong> (<a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.DatasetFilter">DatasetFilter</a> or <code>str</code> or <code>Iterable</code>, <em>optional</em>) &#x2014;
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L982"}}),He=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example",$$slots:{default:[Fi]},$$scope:{ctx:T}}}),xe=new he({props:{anchor:"huggingface_hub.HfApi.list_datasets.example-2",$$slots:{default:[Ni]},$$scope:{ctx:T}}}),ft=new P({props:{name:"list_metrics",anchor:"huggingface_hub.HfApi.list_metrics",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1148",returnDescription:`
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
can be passed in as a string.`,name:"use_auth_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L773"}}),qe=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example",$$slots:{default:[Ti]},$$scope:{ctx:T}}}),Ee=new he({props:{anchor:"huggingface_hub.HfApi.list_models.example-2",$$slots:{default:[Pi]},$$scope:{ctx:T}}}),bt=new P({props:{name:"list_repo_files",anchor:"huggingface_hub.HfApi.list_repo_files",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.list_repo_files.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.list_repo_files.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.list_repo_files.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"},{anchor:"huggingface_hub.HfApi.list_repo_files.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.list_repo_files.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1342",returnDescription:`
<p>the list of files in a given repository.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),vt=new P({props:{name:"login",anchor:"huggingface_hub.HfApi.login",parameters:[{name:"username",val:": str"},{name:"password",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.login.username",description:`<strong>username</strong> (<code>str</code>) &#x2014;
The username of the account with which to login.`,name:"username"},{anchor:"huggingface_hub.HfApi.login.password",description:`<strong>password</strong> (<code>str</code>) &#x2014;
The password of the account with which to login.`,name:"password"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L568",returnDescription:`
<p>token if credentials are valid</p>
`,returnType:`
<p><code>str</code></p>
`}}),Fe=new ca({props:{$$slots:{default:[Oi]},$$scope:{ctx:T}}}),Ne=new ca({props:{$$slots:{default:[Li]},$$scope:{ctx:T}}}),$t=new P({props:{name:"logout",anchor:"huggingface_hub.HfApi.logout",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.logout.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L700"}}),Te=new ca({props:{$$slots:{default:[Ii]},$$scope:{ctx:T}}}),yt=new P({props:{name:"model_info",anchor:"huggingface_hub.HfApi.model_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"},{name:"securityStatus",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.model_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.model_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the model repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.model_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.model_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"},{anchor:"huggingface_hub.HfApi.model_info.securityStatus",description:`<strong>securityStatus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to retrieve the security status from the model
repository as well.`,name:"securityStatus"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1162",returnDescription:`
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
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1670"}}),Ht=new P({props:{name:"repo_info",anchor:"huggingface_hub.HfApi.repo_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.repo_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.repo_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.repo_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.repo_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1298",returnDescription:`
<p>The repository
information.</p>
`,returnType:`
<p><code>Union[SpaceInfo, DatasetInfo, ModelInfo]</code></p>
`}}),xt=new P({props:{name:"set_access_token",anchor:"huggingface_hub.HfApi.set_access_token",parameters:[{name:"access_token",val:": str"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.set_access_token.access_token",description:`<strong>access_token</strong> (<code>str</code>) &#x2014;
The access token to save.`,name:"access_token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L736"}}),jt=new P({props:{name:"space_info",anchor:"huggingface_hub.HfApi.space_info",parameters:[{name:"repo_id",val:": str"},{name:"revision",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"timeout",val:": typing.Optional[float] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.space_info.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.space_info.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The revision of the space repository from which to get the
information.`,name:"revision"},{anchor:"huggingface_hub.HfApi.space_info.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.space_info.timeout",description:`<strong>timeout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Whether to set a timeout for the request to the Hub.`,name:"timeout"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1255",returnDescription:`
<p>The space repository information.</p>
`,returnType:`
<p><code>SpaceInfo</code></p>
`}}),qt=new P({props:{name:"unset_access_token",anchor:"huggingface_hub.HfApi.unset_access_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L748"}}),Et=new P({props:{name:"update_repo_visibility",anchor:"huggingface_hub.HfApi.update_repo_visibility",parameters:[{name:"repo_id",val:": str = None"},{name:"private",val:": bool = False"},{name:"token",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"name",val:": str = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_id",description:`<strong>repo_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A namespace (user or an organization) and a repo name separated
by a <code>/</code>.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Version added: 0.5</p>

					</div>`,name:"repo_id"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model repo should be private.`,name:"private"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
An authentication token (See <a href="https://huggingface.co/settings/token" rel="nofollow">https://huggingface.co/settings/token</a>)`,name:"token"},{anchor:"huggingface_hub.HfApi.update_repo_visibility.repo_type",description:`<strong>repo_type</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Set to <code>&quot;dataset&quot;</code> or <code>&quot;space&quot;</code> if uploading to a dataset or
space, <code>None</code> or <code>&quot;model&quot;</code> if uploading to a model. Default is
<code>None</code>.`,name:"repo_type"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1604",returnDescription:`
<p>The HTTP response in json.</p>
`}}),Dt=new P({props:{name:"upload_file",anchor:"huggingface_hub.HfApi.upload_file",parameters:[{name:"path_or_fileobj",val:": typing.Union[str, bytes, typing.BinaryIO]"},{name:"path_in_repo",val:": str"},{name:"repo_id",val:": str"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"identical_ok",val:": typing.Optional[bool] = None"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_file.path_or_fileobj",description:`<strong>path_or_fileobj</strong> (<code>str</code>, <code>bytes</code>, or <code>IO</code>) &#x2014;
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
(Deprecated, will be removed in v0.3.0) When set to false, will
raise an <a href="https://requests.readthedocs.io/en/latest/api/#requests.HTTPError" rel="nofollow">HTTPError</a>
when the file you&#x2019;re trying to upload already exists on the hub
and its content did not change.`,name:"identical_ok"},{anchor:"huggingface_hub.HfApi.upload_file.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The summary / title / first line of the generated commit`,name:"commit_message"},{anchor:"huggingface_hub.HfApi.upload_file.commit_description",description:`<strong>commit_description</strong> (<code>str</code> <em>optional</em>) &#x2014;
The description of the generated commit`,name:"commit_description"},{anchor:"huggingface_hub.HfApi.upload_file.create_pr",description:`<strong>create_pr</strong> (<code>boolean</code>, <em>optional</em>) &#x2014;
Whether or not to create a Pull Request from <code>revision</code> with that commit.
Defaults to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L1855",returnDescription:`
<p>The URL to visualize the uploaded file on the hub</p>
`,returnType:`
<p><code>str</code></p>
`}}),Me=new ca({props:{$$slots:{default:[Mi]},$$scope:{ctx:T}}}),Se=new he({props:{anchor:"huggingface_hub.HfApi.upload_file.example",$$slots:{default:[Si]},$$scope:{ctx:T}}}),Ft=new P({props:{name:"upload_folder",anchor:"huggingface_hub.HfApi.upload_folder",parameters:[{name:"repo_id",val:": str"},{name:"folder_path",val:": str"},{name:"path_in_repo",val:": str"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"commit_description",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"repo_type",val:": typing.Optional[str] = None"},{name:"revision",val:": typing.Optional[str] = None"},{name:"create_pr",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.upload_folder.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
to <code>False</code>.`,name:"create_pr"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2087",returnDescription:`
<p>TODO @SBrandeis</p>
`,returnType:`
<p><code>str</code> or None</p>
`}}),Ue=new ca({props:{$$slots:{default:[Ui]},$$scope:{ctx:T}}}),Ce=new he({props:{anchor:"huggingface_hub.HfApi.upload_folder.example",$$slots:{default:[Ci]},$$scope:{ctx:T}}}),Tt=new P({props:{name:"whoami",anchor:"huggingface_hub.HfApi.whoami",parameters:[{name:"token",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"huggingface_hub.HfApi.whoami.token",description:`<strong>token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Hugging Face token. Will default to the locally saved token if
not provided.`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L610"}}),Pt=new Nr({}),Lt=new P({props:{name:"class huggingface_hub.HfFolder",anchor:"huggingface_hub.HfFolder",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2309"}}),It=new P({props:{name:"delete_token",anchor:"huggingface_hub.HfFolder.delete_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2346"}}),Mt=new P({props:{name:"get_token",anchor:"huggingface_hub.HfFolder.get_token",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2325",returnDescription:`
<p>The token, <code>None</code> if it doesn\u2019t exist.</p>
`,returnType:`
<p><code>str</code> or <code>None</code></p>
`}}),Ut=new P({props:{name:"save_token",anchor:"huggingface_hub.HfFolder.save_token",parameters:[{name:"token",val:""}],parametersDescription:[{anchor:"huggingface_hub.HfFolder.save_token.token",description:`<strong>token</strong> (<code>str</code>) &#x2014;
The token to save to the <a href="/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder">HfFolder</a>`,name:"token"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L2312"}}),Ct=new Nr({}),zt=new P({props:{name:"class huggingface_hub.DatasetFilter",anchor:"huggingface_hub.DatasetFilter",parameters:[{name:"author",val:": str = None"},{name:"benchmark",val:": typing.Union[str, typing.List[str]] = None"},{name:"dataset_name",val:": str = None"},{name:"language_creators",val:": typing.Union[str, typing.List[str]] = None"},{name:"languages",val:": typing.Union[str, typing.List[str]] = None"},{name:"multilinguality",val:": typing.Union[str, typing.List[str]] = None"},{name:"size_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_categories",val:": typing.Union[str, typing.List[str]] = None"},{name:"task_ids",val:": typing.Union[str, typing.List[str]] = None"}],parametersDescription:[{anchor:"huggingface_hub.DatasetFilter.author",description:`<strong>author</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
model on the Hub.`,name:"trained_dataset"}],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/utils/endpoint_helpers.py#L243"}}),Qe=new he({props:{anchor:"huggingface_hub.ModelFilter.example",$$slots:{default:[Vi]},$$scope:{ctx:T}}}),Wt=new P({props:{name:"class huggingface_hub.DatasetSearchArguments",anchor:"huggingface_hub.DatasetSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L452"}}),Xe=new he({props:{anchor:"huggingface_hub.DatasetSearchArguments.example",$$slots:{default:[Wi]},$$scope:{ctx:T}}}),Gt=new P({props:{name:"class huggingface_hub.ModelSearchArguments",anchor:"huggingface_hub.ModelSearchArguments",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/vr_888/src/huggingface_hub/hf_api.py#L414"}}),Ye=new he({props:{anchor:"huggingface_hub.ModelSearchArguments.example",$$slots:{default:[Gi]},$$scope:{ctx:T}}}),{c(){i=n("meta"),b=l(),m=n("h1"),h=n("a"),f=n("span"),k(o.$$.fragment),d=l(),F=n("span"),u=c("Hugging Face Hub API"),y=l(),D=n("p"),O=c("Below is the documentation for the "),I=n("code"),M=c("HfApi"),S=c(` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),N=l(),L=n("p"),U=c("All methods from the "),C=n("code"),R=c("HfApi"),B=c(` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),z=l(),W=n("p"),K=c("The following approach uses the method from the root of the package:"),po=l(),k(nt.$$.fragment),ho=l(),fe=n("p"),Jo=c("The following approach uses the "),pa=n("code"),Qo=c("HfApi"),Xo=c(" class:"),mo=l(),k(st.$$.fragment),uo=l(),_e=n("p"),Yo=c("Using the "),ha=n("code"),Zo=c("HfApi"),en=c(" class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),fo=l(),q=n("div"),k(rt.$$.fragment),tn=l(),be=n("div"),k(it.$$.fragment),an=l(),da=n("p"),on=c("Creates a commit in the given repo, deleting & uploading files as needed."),nn=l(),ve=n("div"),k(lt.$$.fragment),sn=l(),ma=n("p"),rn=c("Create an empty repo on the HuggingFace Hub."),ln=l(),se=n("div"),k(gt.$$.fragment),gn=l(),ua=n("p"),cn=c("Get info on one specific dataset on huggingface.co."),pn=l(),fa=n("p"),hn=c("Dataset can be private if you pass an acceptable token."),dn=l(),re=n("div"),k(ct.$$.fragment),mn=l(),_a=n("p"),un=c("Deletes a file in the given repo."),fn=l(),k($e.$$.fragment),_n=l(),ye=n("div"),k(pt.$$.fragment),bn=l(),ba=n("p"),vn=c("Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),$n=l(),ke=n("div"),k(ht.$$.fragment),yn=l(),va=n("p"),kn=c("Gets all valid dataset tags as a nested namespace object."),wn=l(),we=n("div"),k(dt.$$.fragment),An=l(),$a=n("p"),Hn=c(`Returns the repository name for a given model ID and optional
organization.`),xn=l(),Ae=n("div"),k(mt.$$.fragment),jn=l(),ya=n("p"),qn=c("Gets all valid model tags as a nested namespace object"),En=l(),J=n("div"),k(ut.$$.fragment),Dn=l(),ka=n("p"),Fn=c("Get the public list of all the datasets on huggingface.co"),Nn=l(),k(He.$$.fragment),Tn=l(),k(xe.$$.fragment),Pn=l(),je=n("div"),k(ft.$$.fragment),On=l(),wa=n("p"),Ln=c("Get the public list of all the metrics on huggingface.co"),In=l(),Q=n("div"),k(_t.$$.fragment),Mn=l(),Aa=n("p"),Sn=c("Get the public list of all the models on huggingface.co"),Un=l(),k(qe.$$.fragment),Cn=l(),k(Ee.$$.fragment),zn=l(),De=n("div"),k(bt.$$.fragment),Vn=l(),Ha=n("p"),Wn=c("Get the list of files in a given repo."),Gn=l(),X=n("div"),k(vt.$$.fragment),Rn=l(),xa=n("p"),Bn=c("Call HF API to sign in a user and get a token if credentials are valid."),Kn=l(),k(Fe.$$.fragment),Jn=l(),k(Ne.$$.fragment),Qn=l(),ie=n("div"),k($t.$$.fragment),Xn=l(),ja=n("p"),Yn=c("Call HF API to log out."),Zn=l(),k(Te.$$.fragment),es=l(),le=n("div"),k(yt.$$.fragment),ts=l(),qa=n("p"),as=c("Get info on one specific model on huggingface.co"),os=l(),Ea=n("p"),ns=c("Model can be private if you pass an acceptable token or are logged in."),ss=l(),ge=n("div"),k(kt.$$.fragment),rs=l(),Da=n("p"),is=c("Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),ls=l(),wt=n("p"),gs=c(`Note there are certain limitations. For more information about moving
repositories, please see
`),At=n("a"),cs=c("https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),ps=c("."),hs=l(),Pe=n("div"),k(Ht.$$.fragment),ds=l(),Fa=n("p"),ms=c("Get the info object for a given repo of a given type."),us=l(),Oe=n("div"),k(xt.$$.fragment),fs=l(),Na=n("p"),_s=c(`Saves the passed access token so git can correctly authenticate the
user.`),bs=l(),ce=n("div"),k(jt.$$.fragment),vs=l(),Ta=n("p"),$s=c("Get info on one specific Space on huggingface.co."),ys=l(),Pa=n("p"),ks=c("Space can be private if you pass an acceptable token."),ws=l(),Le=n("div"),k(qt.$$.fragment),As=l(),Oa=n("p"),Hs=c("Resets the user\u2019s access token."),xs=l(),Ie=n("div"),k(Et.$$.fragment),js=l(),La=n("p"),qs=c("Update the visibility setting of a repository."),Es=l(),Y=n("div"),k(Dt.$$.fragment),Ds=l(),Ia=n("p"),Fs=c(`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),Ns=l(),k(Me.$$.fragment),Ts=l(),k(Se.$$.fragment),Ps=l(),V=n("div"),k(Ft.$$.fragment),Os=l(),Ma=n("p"),Ls=c(`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),Is=l(),Sa=n("p"),Ms=c(`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),Ss=l(),Nt=n("p"),Us=c("Uses "),Ua=n("code"),Cs=c("HfApi.create_commit"),zs=c(" under the hood."),Vs=l(),k(Ue.$$.fragment),Ws=l(),k(Ce.$$.fragment),Gs=l(),ze=n("div"),k(Tt.$$.fragment),Rs=l(),Ca=n("p"),Bs=c("Call HF API to know \u201Cwhoami\u201D."),_o=l(),me=n("h2"),Ve=n("a"),za=n("span"),k(Pt.$$.fragment),Ks=l(),Va=n("span"),Js=c("Hugging Face local storage"),bo=l(),Ot=n("p"),Wa=n("code"),Qs=c("huggingface_hub"),Xs=c(` stores the authentication information locally so that it may be re-used in subsequent
methods.`),vo=l(),We=n("p"),Ys=c("It does this using the "),Yt=n("a"),Zs=c("HfFolder"),er=c(" utility, which saves data at the root of the user."),$o=l(),G=n("div"),k(Lt.$$.fragment),tr=l(),Ge=n("div"),k(It.$$.fragment),ar=l(),Ga=n("p"),or=c("Deletes the token from storage. Does not fail if token does not exist."),nr=l(),pe=n("div"),k(Mt.$$.fragment),sr=l(),Ra=n("p"),rr=c("Get token or None if not existent."),ir=l(),St=n("p"),lr=c("Note that a token can be also provided using the "),Ba=n("code"),gr=c("HUGGING_FACE_HUB_TOKEN"),cr=c(`
environment variable.`),pr=l(),Re=n("div"),k(Ut.$$.fragment),hr=l(),Ka=n("p"),dr=c("Save token, creating folder as needed."),yo=l(),ue=n("h2"),Be=n("a"),Ja=n("span"),k(Ct.$$.fragment),mr=l(),Qa=n("span"),ur=c("Filtering helpers"),ko=l(),Ke=n("p"),fr=c("Some helpers to filter repositories on the Hub are available in the "),Xa=n("code"),_r=c("huggingface_hub"),br=c(" package."),wo=l(),te=n("div"),k(zt.$$.fragment),vr=l(),Ya=n("p"),$r=c(`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yr=l(),k(Je.$$.fragment),Ao=l(),ae=n("div"),k(Vt.$$.fragment),kr=l(),Za=n("p"),wr=c(`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),Ar=l(),k(Qe.$$.fragment),Ho=l(),oe=n("div"),k(Wt.$$.fragment),Hr=l(),eo=n("p"),xr=c(`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),jr=l(),k(Xe.$$.fragment),xo=l(),ne=n("div"),k(Gt.$$.fragment),qr=l(),to=n("p"),Er=c(`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Dr=l(),k(Ye.$$.fragment),this.h()},l(t){const _=qi('[data-svelte="svelte-1phssyn"]',document.head);i=s(_,"META",{name:!0,content:!0}),_.forEach(a),b=g(t),m=s(t,"H1",{class:!0});var Rt=r(m);h=s(Rt,"A",{id:!0,class:!0,href:!0});var ao=r(h);f=s(ao,"SPAN",{});var oo=r(f);w(o.$$.fragment,oo),oo.forEach(a),ao.forEach(a),d=g(Rt),F=s(Rt,"SPAN",{});var no=r(F);u=p(no,"Hugging Face Hub API"),no.forEach(a),Rt.forEach(a),y=g(t),D=s(t,"P",{});var Bt=r(D);O=p(Bt,"Below is the documentation for the "),I=s(Bt,"CODE",{});var so=r(I);M=p(so,"HfApi"),so.forEach(a),S=p(Bt,` class, which serves as a Python wrapper for the Hugging Face
Hub\u2019s API.`),Bt.forEach(a),N=g(t),L=s(t,"P",{});var Kt=r(L);U=p(Kt,"All methods from the "),C=s(Kt,"CODE",{});var ro=r(C);R=p(ro,"HfApi"),ro.forEach(a),B=p(Kt,` are also accessible from the package\u2019s root directly, both approaches are detailed
below.`),Kt.forEach(a),z=g(t),W=s(t,"P",{});var io=r(W);K=p(io,"The following approach uses the method from the root of the package:"),io.forEach(a),po=g(t),w(nt.$$.fragment,t),ho=g(t),fe=s(t,"P",{});var Jt=r(fe);Jo=p(Jt,"The following approach uses the "),pa=s(Jt,"CODE",{});var lo=r(pa);Qo=p(lo,"HfApi"),lo.forEach(a),Xo=p(Jt," class:"),Jt.forEach(a),mo=g(t),w(st.$$.fragment,t),uo=g(t),_e=s(t,"P",{});var Qt=r(_e);Yo=p(Qt,"Using the "),ha=s(Qt,"CODE",{});var go=r(ha);Zo=p(go,"HfApi"),go.forEach(a),en=p(Qt," class directly enables you to set a different endpoint to that of the Hugging Face\u2019s Hub."),Qt.forEach(a),fo=g(t),q=s(t,"DIV",{class:!0});var E=r(q);w(rt.$$.fragment,E),tn=g(E),be=s(E,"DIV",{class:!0});var Xt=r(be);w(it.$$.fragment,Xt),an=g(Xt),da=s(Xt,"P",{});var co=r(da);on=p(co,"Creates a commit in the given repo, deleting & uploading files as needed."),co.forEach(a),Xt.forEach(a),nn=g(E),ve=s(E,"DIV",{class:!0});var qo=r(ve);w(lt.$$.fragment,qo),sn=g(qo),ma=s(qo,"P",{});var Tr=r(ma);rn=p(Tr,"Create an empty repo on the HuggingFace Hub."),Tr.forEach(a),qo.forEach(a),ln=g(E),se=s(E,"DIV",{class:!0});var Zt=r(se);w(gt.$$.fragment,Zt),gn=g(Zt),ua=s(Zt,"P",{});var Pr=r(ua);cn=p(Pr,"Get info on one specific dataset on huggingface.co."),Pr.forEach(a),pn=g(Zt),fa=s(Zt,"P",{});var Or=r(fa);hn=p(Or,"Dataset can be private if you pass an acceptable token."),Or.forEach(a),Zt.forEach(a),dn=g(E),re=s(E,"DIV",{class:!0});var ea=r(re);w(ct.$$.fragment,ea),mn=g(ea),_a=s(ea,"P",{});var Lr=r(_a);un=p(Lr,"Deletes a file in the given repo."),Lr.forEach(a),fn=g(ea),w($e.$$.fragment,ea),ea.forEach(a),_n=g(E),ye=s(E,"DIV",{class:!0});var Eo=r(ye);w(pt.$$.fragment,Eo),bn=g(Eo),ba=s(Eo,"P",{});var Ir=r(ba);vn=p(Ir,"Delete a repo from the HuggingFace Hub. CAUTION: this is irreversible."),Ir.forEach(a),Eo.forEach(a),$n=g(E),ke=s(E,"DIV",{class:!0});var Do=r(ke);w(ht.$$.fragment,Do),yn=g(Do),va=s(Do,"P",{});var Mr=r(va);kn=p(Mr,"Gets all valid dataset tags as a nested namespace object."),Mr.forEach(a),Do.forEach(a),wn=g(E),we=s(E,"DIV",{class:!0});var Fo=r(we);w(dt.$$.fragment,Fo),An=g(Fo),$a=s(Fo,"P",{});var Sr=r($a);Hn=p(Sr,`Returns the repository name for a given model ID and optional
organization.`),Sr.forEach(a),Fo.forEach(a),xn=g(E),Ae=s(E,"DIV",{class:!0});var No=r(Ae);w(mt.$$.fragment,No),jn=g(No),ya=s(No,"P",{});var Ur=r(ya);qn=p(Ur,"Gets all valid model tags as a nested namespace object"),Ur.forEach(a),No.forEach(a),En=g(E),J=s(E,"DIV",{class:!0});var Ze=r(J);w(ut.$$.fragment,Ze),Dn=g(Ze),ka=s(Ze,"P",{});var Cr=r(ka);Fn=p(Cr,"Get the public list of all the datasets on huggingface.co"),Cr.forEach(a),Nn=g(Ze),w(He.$$.fragment,Ze),Tn=g(Ze),w(xe.$$.fragment,Ze),Ze.forEach(a),Pn=g(E),je=s(E,"DIV",{class:!0});var To=r(je);w(ft.$$.fragment,To),On=g(To),wa=s(To,"P",{});var zr=r(wa);Ln=p(zr,"Get the public list of all the metrics on huggingface.co"),zr.forEach(a),To.forEach(a),In=g(E),Q=s(E,"DIV",{class:!0});var et=r(Q);w(_t.$$.fragment,et),Mn=g(et),Aa=s(et,"P",{});var Vr=r(Aa);Sn=p(Vr,"Get the public list of all the models on huggingface.co"),Vr.forEach(a),Un=g(et),w(qe.$$.fragment,et),Cn=g(et),w(Ee.$$.fragment,et),et.forEach(a),zn=g(E),De=s(E,"DIV",{class:!0});var Po=r(De);w(bt.$$.fragment,Po),Vn=g(Po),Ha=s(Po,"P",{});var Wr=r(Ha);Wn=p(Wr,"Get the list of files in a given repo."),Wr.forEach(a),Po.forEach(a),Gn=g(E),X=s(E,"DIV",{class:!0});var tt=r(X);w(vt.$$.fragment,tt),Rn=g(tt),xa=s(tt,"P",{});var Gr=r(xa);Bn=p(Gr,"Call HF API to sign in a user and get a token if credentials are valid."),Gr.forEach(a),Kn=g(tt),w(Fe.$$.fragment,tt),Jn=g(tt),w(Ne.$$.fragment,tt),tt.forEach(a),Qn=g(E),ie=s(E,"DIV",{class:!0});var ta=r(ie);w($t.$$.fragment,ta),Xn=g(ta),ja=s(ta,"P",{});var Rr=r(ja);Yn=p(Rr,"Call HF API to log out."),Rr.forEach(a),Zn=g(ta),w(Te.$$.fragment,ta),ta.forEach(a),es=g(E),le=s(E,"DIV",{class:!0});var aa=r(le);w(yt.$$.fragment,aa),ts=g(aa),qa=s(aa,"P",{});var Br=r(qa);as=p(Br,"Get info on one specific model on huggingface.co"),Br.forEach(a),os=g(aa),Ea=s(aa,"P",{});var Kr=r(Ea);ns=p(Kr,"Model can be private if you pass an acceptable token or are logged in."),Kr.forEach(a),aa.forEach(a),ss=g(E),ge=s(E,"DIV",{class:!0});var oa=r(ge);w(kt.$$.fragment,oa),rs=g(oa),Da=s(oa,"P",{});var Jr=r(Da);is=p(Jr,"Moving a repository from namespace1/repo_name1 to namespace2/repo_name2"),Jr.forEach(a),ls=g(oa),wt=s(oa,"P",{});var Oo=r(wt);gs=p(Oo,`Note there are certain limitations. For more information about moving
repositories, please see
`),At=s(Oo,"A",{href:!0,rel:!0});var Qr=r(At);cs=p(Qr,"https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),Qr.forEach(a),ps=p(Oo,"."),Oo.forEach(a),oa.forEach(a),hs=g(E),Pe=s(E,"DIV",{class:!0});var Lo=r(Pe);w(Ht.$$.fragment,Lo),ds=g(Lo),Fa=s(Lo,"P",{});var Xr=r(Fa);ms=p(Xr,"Get the info object for a given repo of a given type."),Xr.forEach(a),Lo.forEach(a),us=g(E),Oe=s(E,"DIV",{class:!0});var Io=r(Oe);w(xt.$$.fragment,Io),fs=g(Io),Na=s(Io,"P",{});var Yr=r(Na);_s=p(Yr,`Saves the passed access token so git can correctly authenticate the
user.`),Yr.forEach(a),Io.forEach(a),bs=g(E),ce=s(E,"DIV",{class:!0});var na=r(ce);w(jt.$$.fragment,na),vs=g(na),Ta=s(na,"P",{});var Zr=r(Ta);$s=p(Zr,"Get info on one specific Space on huggingface.co."),Zr.forEach(a),ys=g(na),Pa=s(na,"P",{});var ei=r(Pa);ks=p(ei,"Space can be private if you pass an acceptable token."),ei.forEach(a),na.forEach(a),ws=g(E),Le=s(E,"DIV",{class:!0});var Mo=r(Le);w(qt.$$.fragment,Mo),As=g(Mo),Oa=s(Mo,"P",{});var ti=r(Oa);Hs=p(ti,"Resets the user\u2019s access token."),ti.forEach(a),Mo.forEach(a),xs=g(E),Ie=s(E,"DIV",{class:!0});var So=r(Ie);w(Et.$$.fragment,So),js=g(So),La=s(So,"P",{});var ai=r(La);qs=p(ai,"Update the visibility setting of a repository."),ai.forEach(a),So.forEach(a),Es=g(E),Y=s(E,"DIV",{class:!0});var at=r(Y);w(Dt.$$.fragment,at),Ds=g(at),Ia=s(at,"P",{});var oi=r(Ia);Fs=p(oi,`Upload a local file (up to 50 GB) to the given repo. The upload is done
through a HTTP post request, and doesn\u2019t require git or git-lfs to be
installed.`),oi.forEach(a),Ns=g(at),w(Me.$$.fragment,at),Ts=g(at),w(Se.$$.fragment,at),at.forEach(a),Ps=g(E),V=s(E,"DIV",{class:!0});var Z=r(V);w(Ft.$$.fragment,Z),Os=g(Z),Ma=s(Z,"P",{});var ni=r(Ma);Ls=p(ni,`Upload a local folder to the given repo. The upload is done
through a HTTP requests, and doesn\u2019t require git or git-lfs to be
installed.`),ni.forEach(a),Is=g(Z),Sa=s(Z,"P",{});var si=r(Sa);Ms=p(si,`The structure of the folder will be preserved. Files with the same name
already present in the repository will be overwritten, others will be left untouched.`),si.forEach(a),Ss=g(Z),Nt=s(Z,"P",{});var Uo=r(Nt);Us=p(Uo,"Uses "),Ua=s(Uo,"CODE",{});var ri=r(Ua);Cs=p(ri,"HfApi.create_commit"),ri.forEach(a),zs=p(Uo," under the hood."),Uo.forEach(a),Vs=g(Z),w(Ue.$$.fragment,Z),Ws=g(Z),w(Ce.$$.fragment,Z),Z.forEach(a),Gs=g(E),ze=s(E,"DIV",{class:!0});var Co=r(ze);w(Tt.$$.fragment,Co),Rs=g(Co),Ca=s(Co,"P",{});var ii=r(Ca);Bs=p(ii,"Call HF API to know \u201Cwhoami\u201D."),ii.forEach(a),Co.forEach(a),E.forEach(a),_o=g(t),me=s(t,"H2",{class:!0});var zo=r(me);Ve=s(zo,"A",{id:!0,class:!0,href:!0});var li=r(Ve);za=s(li,"SPAN",{});var gi=r(za);w(Pt.$$.fragment,gi),gi.forEach(a),li.forEach(a),Ks=g(zo),Va=s(zo,"SPAN",{});var ci=r(Va);Js=p(ci,"Hugging Face local storage"),ci.forEach(a),zo.forEach(a),bo=g(t),Ot=s(t,"P",{});var Fr=r(Ot);Wa=s(Fr,"CODE",{});var pi=r(Wa);Qs=p(pi,"huggingface_hub"),pi.forEach(a),Xs=p(Fr,` stores the authentication information locally so that it may be re-used in subsequent
methods.`),Fr.forEach(a),vo=g(t),We=s(t,"P",{});var Vo=r(We);Ys=p(Vo,"It does this using the "),Yt=s(Vo,"A",{href:!0});var hi=r(Yt);Zs=p(hi,"HfFolder"),hi.forEach(a),er=p(Vo," utility, which saves data at the root of the user."),Vo.forEach(a),$o=g(t),G=s(t,"DIV",{class:!0});var ot=r(G);w(Lt.$$.fragment,ot),tr=g(ot),Ge=s(ot,"DIV",{class:!0});var Wo=r(Ge);w(It.$$.fragment,Wo),ar=g(Wo),Ga=s(Wo,"P",{});var di=r(Ga);or=p(di,"Deletes the token from storage. Does not fail if token does not exist."),di.forEach(a),Wo.forEach(a),nr=g(ot),pe=s(ot,"DIV",{class:!0});var sa=r(pe);w(Mt.$$.fragment,sa),sr=g(sa),Ra=s(sa,"P",{});var mi=r(Ra);rr=p(mi,"Get token or None if not existent."),mi.forEach(a),ir=g(sa),St=s(sa,"P",{});var Go=r(St);lr=p(Go,"Note that a token can be also provided using the "),Ba=s(Go,"CODE",{});var ui=r(Ba);gr=p(ui,"HUGGING_FACE_HUB_TOKEN"),ui.forEach(a),cr=p(Go,`
environment variable.`),Go.forEach(a),sa.forEach(a),pr=g(ot),Re=s(ot,"DIV",{class:!0});var Ro=r(Re);w(Ut.$$.fragment,Ro),hr=g(Ro),Ka=s(Ro,"P",{});var fi=r(Ka);dr=p(fi,"Save token, creating folder as needed."),fi.forEach(a),Ro.forEach(a),ot.forEach(a),yo=g(t),ue=s(t,"H2",{class:!0});var Bo=r(ue);Be=s(Bo,"A",{id:!0,class:!0,href:!0});var _i=r(Be);Ja=s(_i,"SPAN",{});var bi=r(Ja);w(Ct.$$.fragment,bi),bi.forEach(a),_i.forEach(a),mr=g(Bo),Qa=s(Bo,"SPAN",{});var vi=r(Qa);ur=p(vi,"Filtering helpers"),vi.forEach(a),Bo.forEach(a),ko=g(t),Ke=s(t,"P",{});var Ko=r(Ke);fr=p(Ko,"Some helpers to filter repositories on the Hub are available in the "),Xa=s(Ko,"CODE",{});var $i=r(Xa);_r=p($i,"huggingface_hub"),$i.forEach(a),br=p(Ko," package."),Ko.forEach(a),wo=g(t),te=s(t,"DIV",{class:!0});var ra=r(te);w(zt.$$.fragment,ra),vr=g(ra),Ya=s(ra,"P",{});var yi=r(Ya);$r=p(yi,`A class that converts human-readable dataset search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),yi.forEach(a),yr=g(ra),w(Je.$$.fragment,ra),ra.forEach(a),Ao=g(t),ae=s(t,"DIV",{class:!0});var ia=r(ae);w(Vt.$$.fragment,ia),kr=g(ia),Za=s(ia,"P",{});var ki=r(Za);wr=p(ki,`A class that converts human-readable model search parameters into ones
compatible with the REST API. For all parameters capitalization does not
matter.`),ki.forEach(a),Ar=g(ia),w(Qe.$$.fragment,ia),ia.forEach(a),Ho=g(t),oe=s(t,"DIV",{class:!0});var la=r(oe);w(Wt.$$.fragment,la),Hr=g(la),eo=s(la,"P",{});var wi=r(eo);xr=p(wi,`A nested namespace object holding all possible values for properties of
datasets currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),wi.forEach(a),jr=g(la),w(Xe.$$.fragment,la),la.forEach(a),xo=g(t),ne=s(t,"DIV",{class:!0});var ga=r(ne);w(Gt.$$.fragment,ga),qr=g(ga),to=s(ga,"P",{});var Ai=r(to);Er=p(Ai,`A nested namespace object holding all possible values for properties of
models currently hosted in the Hub with tab-completion. If a value starts
with a number, it will only exist in the dictionary`),Ai.forEach(a),Dr=g(ga),w(Ye.$$.fragment,ga),ga.forEach(a),this.h()},h(){$(i,"name","hf:doc:metadata"),$(i,"content",JSON.stringify(Bi)),$(h,"id","huggingface_hub.HfApi"),$(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(h,"href","#huggingface_hub.HfApi"),$(m,"class","relative group"),$(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(At,"href","https://hf.co/docs/hub/main#how-can-i-rename-or-transfer-a-repo"),$(At,"rel","nofollow"),$(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Ve,"id","huggingface_hub.HfFolder"),$(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Ve,"href","#huggingface_hub.HfFolder"),$(me,"class","relative group"),$(Yt,"href","/docs/huggingface_hub/pr_888/en/package_reference/hf_api#huggingface_hub.HfFolder"),$(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Be,"id","huggingface_hub.DatasetFilter"),$(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Be,"href","#huggingface_hub.DatasetFilter"),$(ue,"class","relative group"),$(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,i),v(t,b,_),v(t,m,_),e(m,h),e(h,f),A(o,f,null),e(m,d),e(m,F),e(F,u),v(t,y,_),v(t,D,_),e(D,O),e(D,I),e(I,M),e(D,S),v(t,N,_),v(t,L,_),e(L,U),e(L,C),e(C,R),e(L,B),v(t,z,_),v(t,W,_),e(W,K),v(t,po,_),A(nt,t,_),v(t,ho,_),v(t,fe,_),e(fe,Jo),e(fe,pa),e(pa,Qo),e(fe,Xo),v(t,mo,_),A(st,t,_),v(t,uo,_),v(t,_e,_),e(_e,Yo),e(_e,ha),e(ha,Zo),e(_e,en),v(t,fo,_),v(t,q,_),A(rt,q,null),e(q,tn),e(q,be),A(it,be,null),e(be,an),e(be,da),e(da,on),e(q,nn),e(q,ve),A(lt,ve,null),e(ve,sn),e(ve,ma),e(ma,rn),e(q,ln),e(q,se),A(gt,se,null),e(se,gn),e(se,ua),e(ua,cn),e(se,pn),e(se,fa),e(fa,hn),e(q,dn),e(q,re),A(ct,re,null),e(re,mn),e(re,_a),e(_a,un),e(re,fn),A($e,re,null),e(q,_n),e(q,ye),A(pt,ye,null),e(ye,bn),e(ye,ba),e(ba,vn),e(q,$n),e(q,ke),A(ht,ke,null),e(ke,yn),e(ke,va),e(va,kn),e(q,wn),e(q,we),A(dt,we,null),e(we,An),e(we,$a),e($a,Hn),e(q,xn),e(q,Ae),A(mt,Ae,null),e(Ae,jn),e(Ae,ya),e(ya,qn),e(q,En),e(q,J),A(ut,J,null),e(J,Dn),e(J,ka),e(ka,Fn),e(J,Nn),A(He,J,null),e(J,Tn),A(xe,J,null),e(q,Pn),e(q,je),A(ft,je,null),e(je,On),e(je,wa),e(wa,Ln),e(q,In),e(q,Q),A(_t,Q,null),e(Q,Mn),e(Q,Aa),e(Aa,Sn),e(Q,Un),A(qe,Q,null),e(Q,Cn),A(Ee,Q,null),e(q,zn),e(q,De),A(bt,De,null),e(De,Vn),e(De,Ha),e(Ha,Wn),e(q,Gn),e(q,X),A(vt,X,null),e(X,Rn),e(X,xa),e(xa,Bn),e(X,Kn),A(Fe,X,null),e(X,Jn),A(Ne,X,null),e(q,Qn),e(q,ie),A($t,ie,null),e(ie,Xn),e(ie,ja),e(ja,Yn),e(ie,Zn),A(Te,ie,null),e(q,es),e(q,le),A(yt,le,null),e(le,ts),e(le,qa),e(qa,as),e(le,os),e(le,Ea),e(Ea,ns),e(q,ss),e(q,ge),A(kt,ge,null),e(ge,rs),e(ge,Da),e(Da,is),e(ge,ls),e(ge,wt),e(wt,gs),e(wt,At),e(At,cs),e(wt,ps),e(q,hs),e(q,Pe),A(Ht,Pe,null),e(Pe,ds),e(Pe,Fa),e(Fa,ms),e(q,us),e(q,Oe),A(xt,Oe,null),e(Oe,fs),e(Oe,Na),e(Na,_s),e(q,bs),e(q,ce),A(jt,ce,null),e(ce,vs),e(ce,Ta),e(Ta,$s),e(ce,ys),e(ce,Pa),e(Pa,ks),e(q,ws),e(q,Le),A(qt,Le,null),e(Le,As),e(Le,Oa),e(Oa,Hs),e(q,xs),e(q,Ie),A(Et,Ie,null),e(Ie,js),e(Ie,La),e(La,qs),e(q,Es),e(q,Y),A(Dt,Y,null),e(Y,Ds),e(Y,Ia),e(Ia,Fs),e(Y,Ns),A(Me,Y,null),e(Y,Ts),A(Se,Y,null),e(q,Ps),e(q,V),A(Ft,V,null),e(V,Os),e(V,Ma),e(Ma,Ls),e(V,Is),e(V,Sa),e(Sa,Ms),e(V,Ss),e(V,Nt),e(Nt,Us),e(Nt,Ua),e(Ua,Cs),e(Nt,zs),e(V,Vs),A(Ue,V,null),e(V,Ws),A(Ce,V,null),e(q,Gs),e(q,ze),A(Tt,ze,null),e(ze,Rs),e(ze,Ca),e(Ca,Bs),v(t,_o,_),v(t,me,_),e(me,Ve),e(Ve,za),A(Pt,za,null),e(me,Ks),e(me,Va),e(Va,Js),v(t,bo,_),v(t,Ot,_),e(Ot,Wa),e(Wa,Qs),e(Ot,Xs),v(t,vo,_),v(t,We,_),e(We,Ys),e(We,Yt),e(Yt,Zs),e(We,er),v(t,$o,_),v(t,G,_),A(Lt,G,null),e(G,tr),e(G,Ge),A(It,Ge,null),e(Ge,ar),e(Ge,Ga),e(Ga,or),e(G,nr),e(G,pe),A(Mt,pe,null),e(pe,sr),e(pe,Ra),e(Ra,rr),e(pe,ir),e(pe,St),e(St,lr),e(St,Ba),e(Ba,gr),e(St,cr),e(G,pr),e(G,Re),A(Ut,Re,null),e(Re,hr),e(Re,Ka),e(Ka,dr),v(t,yo,_),v(t,ue,_),e(ue,Be),e(Be,Ja),A(Ct,Ja,null),e(ue,mr),e(ue,Qa),e(Qa,ur),v(t,ko,_),v(t,Ke,_),e(Ke,fr),e(Ke,Xa),e(Xa,_r),e(Ke,br),v(t,wo,_),v(t,te,_),A(zt,te,null),e(te,vr),e(te,Ya),e(Ya,$r),e(te,yr),A(Je,te,null),v(t,Ao,_),v(t,ae,_),A(Vt,ae,null),e(ae,kr),e(ae,Za),e(Za,wr),e(ae,Ar),A(Qe,ae,null),v(t,Ho,_),v(t,oe,_),A(Wt,oe,null),e(oe,Hr),e(oe,eo),e(eo,xr),e(oe,jr),A(Xe,oe,null),v(t,xo,_),v(t,ne,_),A(Gt,ne,null),e(ne,qr),e(ne,to),e(to,Er),e(ne,Dr),A(Ye,ne,null),jo=!0},p(t,[_]){const Rt={};_&2&&(Rt.$$scope={dirty:_,ctx:t}),$e.$set(Rt);const ao={};_&2&&(ao.$$scope={dirty:_,ctx:t}),He.$set(ao);const oo={};_&2&&(oo.$$scope={dirty:_,ctx:t}),xe.$set(oo);const no={};_&2&&(no.$$scope={dirty:_,ctx:t}),qe.$set(no);const Bt={};_&2&&(Bt.$$scope={dirty:_,ctx:t}),Ee.$set(Bt);const so={};_&2&&(so.$$scope={dirty:_,ctx:t}),Fe.$set(so);const Kt={};_&2&&(Kt.$$scope={dirty:_,ctx:t}),Ne.$set(Kt);const ro={};_&2&&(ro.$$scope={dirty:_,ctx:t}),Te.$set(ro);const io={};_&2&&(io.$$scope={dirty:_,ctx:t}),Me.$set(io);const Jt={};_&2&&(Jt.$$scope={dirty:_,ctx:t}),Se.$set(Jt);const lo={};_&2&&(lo.$$scope={dirty:_,ctx:t}),Ue.$set(lo);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:t}),Ce.$set(Qt);const go={};_&2&&(go.$$scope={dirty:_,ctx:t}),Je.$set(go);const E={};_&2&&(E.$$scope={dirty:_,ctx:t}),Qe.$set(E);const Xt={};_&2&&(Xt.$$scope={dirty:_,ctx:t}),Xe.$set(Xt);const co={};_&2&&(co.$$scope={dirty:_,ctx:t}),Ye.$set(co)},i(t){jo||(H(o.$$.fragment,t),H(nt.$$.fragment,t),H(st.$$.fragment,t),H(rt.$$.fragment,t),H(it.$$.fragment,t),H(lt.$$.fragment,t),H(gt.$$.fragment,t),H(ct.$$.fragment,t),H($e.$$.fragment,t),H(pt.$$.fragment,t),H(ht.$$.fragment,t),H(dt.$$.fragment,t),H(mt.$$.fragment,t),H(ut.$$.fragment,t),H(He.$$.fragment,t),H(xe.$$.fragment,t),H(ft.$$.fragment,t),H(_t.$$.fragment,t),H(qe.$$.fragment,t),H(Ee.$$.fragment,t),H(bt.$$.fragment,t),H(vt.$$.fragment,t),H(Fe.$$.fragment,t),H(Ne.$$.fragment,t),H($t.$$.fragment,t),H(Te.$$.fragment,t),H(yt.$$.fragment,t),H(kt.$$.fragment,t),H(Ht.$$.fragment,t),H(xt.$$.fragment,t),H(jt.$$.fragment,t),H(qt.$$.fragment,t),H(Et.$$.fragment,t),H(Dt.$$.fragment,t),H(Me.$$.fragment,t),H(Se.$$.fragment,t),H(Ft.$$.fragment,t),H(Ue.$$.fragment,t),H(Ce.$$.fragment,t),H(Tt.$$.fragment,t),H(Pt.$$.fragment,t),H(Lt.$$.fragment,t),H(It.$$.fragment,t),H(Mt.$$.fragment,t),H(Ut.$$.fragment,t),H(Ct.$$.fragment,t),H(zt.$$.fragment,t),H(Je.$$.fragment,t),H(Vt.$$.fragment,t),H(Qe.$$.fragment,t),H(Wt.$$.fragment,t),H(Xe.$$.fragment,t),H(Gt.$$.fragment,t),H(Ye.$$.fragment,t),jo=!0)},o(t){x(o.$$.fragment,t),x(nt.$$.fragment,t),x(st.$$.fragment,t),x(rt.$$.fragment,t),x(it.$$.fragment,t),x(lt.$$.fragment,t),x(gt.$$.fragment,t),x(ct.$$.fragment,t),x($e.$$.fragment,t),x(pt.$$.fragment,t),x(ht.$$.fragment,t),x(dt.$$.fragment,t),x(mt.$$.fragment,t),x(ut.$$.fragment,t),x(He.$$.fragment,t),x(xe.$$.fragment,t),x(ft.$$.fragment,t),x(_t.$$.fragment,t),x(qe.$$.fragment,t),x(Ee.$$.fragment,t),x(bt.$$.fragment,t),x(vt.$$.fragment,t),x(Fe.$$.fragment,t),x(Ne.$$.fragment,t),x($t.$$.fragment,t),x(Te.$$.fragment,t),x(yt.$$.fragment,t),x(kt.$$.fragment,t),x(Ht.$$.fragment,t),x(xt.$$.fragment,t),x(jt.$$.fragment,t),x(qt.$$.fragment,t),x(Et.$$.fragment,t),x(Dt.$$.fragment,t),x(Me.$$.fragment,t),x(Se.$$.fragment,t),x(Ft.$$.fragment,t),x(Ue.$$.fragment,t),x(Ce.$$.fragment,t),x(Tt.$$.fragment,t),x(Pt.$$.fragment,t),x(Lt.$$.fragment,t),x(It.$$.fragment,t),x(Mt.$$.fragment,t),x(Ut.$$.fragment,t),x(Ct.$$.fragment,t),x(zt.$$.fragment,t),x(Je.$$.fragment,t),x(Vt.$$.fragment,t),x(Qe.$$.fragment,t),x(Wt.$$.fragment,t),x(Xe.$$.fragment,t),x(Gt.$$.fragment,t),x(Ye.$$.fragment,t),jo=!1},d(t){a(i),t&&a(b),t&&a(m),j(o),t&&a(y),t&&a(D),t&&a(N),t&&a(L),t&&a(z),t&&a(W),t&&a(po),j(nt,t),t&&a(ho),t&&a(fe),t&&a(mo),j(st,t),t&&a(uo),t&&a(_e),t&&a(fo),t&&a(q),j(rt),j(it),j(lt),j(gt),j(ct),j($e),j(pt),j(ht),j(dt),j(mt),j(ut),j(He),j(xe),j(ft),j(_t),j(qe),j(Ee),j(bt),j(vt),j(Fe),j(Ne),j($t),j(Te),j(yt),j(kt),j(Ht),j(xt),j(jt),j(qt),j(Et),j(Dt),j(Me),j(Se),j(Ft),j(Ue),j(Ce),j(Tt),t&&a(_o),t&&a(me),j(Pt),t&&a(bo),t&&a(Ot),t&&a(vo),t&&a(We),t&&a($o),t&&a(G),j(Lt),j(It),j(Mt),j(Ut),t&&a(yo),t&&a(ue),j(Ct),t&&a(ko),t&&a(Ke),t&&a(wo),t&&a(te),j(zt),j(Je),t&&a(Ao),t&&a(ae),j(Vt),j(Qe),t&&a(Ho),t&&a(oe),j(Wt),j(Xe),t&&a(xo),t&&a(ne),j(Gt),j(Ye)}}}const Bi={local:"huggingface_hub.HfApi",sections:[{local:"huggingface_hub.HfFolder",title:"Hugging Face local storage"},{local:"huggingface_hub.DatasetFilter",title:"Filtering helpers"}],title:"Hugging Face Hub API"};function Ki(T){return Ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tl extends Hi{constructor(i){super();xi(this,i,Ki,Ri,ji,{})}}export{tl as default,Bi as metadata};
