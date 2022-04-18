import{S as ls,i as ps,s as is,e as t,k as _,w as J,t as f,M as cs,c as r,d as a,m as I,a as p,x as R,h as m,b as g,F as e,g as v,y as U,L as os,q as V,o as z,B as G,v as gs}from"../../chunks/vendor-d3924577.js";import{D as us}from"../../chunks/Docstring-a36c2bf7.js";import{C as hs}from"../../chunks/CodeBlock-ff545b14.js";import{I as fs}from"../../chunks/IconCopyLink-f94c3d80.js";function ms(X){let i,P,c,u,y,d,O,A,F,E,l,H,k,N,T,j,B,D,C,n,b,L,w,K,Q,$,W,Z,x,M;return d=new fs({}),b=new us({props:{name:"class huggingface_hub.InferenceApi",anchor:"huggingface_hub.InferenceApi",parameters:[{name:"repo_id",val:": str"},{name:"task",val:": typing.Optional[str] = None"},{name:"token",val:": typing.Optional[str] = None"},{name:"gpu",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_840/src/huggingface_hub/inference_api.py#L45"}}),x=new hs({props:{code:`from huggingface_hub.inference_api import InferenceApi

# Mask-fill example
inference = InferenceApi("bert-base-uncased")
inference(inputs="The goal of life is [MASK].")

# Question Answering example
inference = InferenceApi("deepset/roberta-base-squad2")
inputs = {
    "question": "What's my name?",
    "context": "My name is Clara and I live in Berkeley.",
}
inference(inputs)

# Zero-shot example
inference = InferenceApi("typeform/distilbert-base-uncased-mnli")
inputs = "Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!"
params = {"candidate_labels": ["refund", "legal", "faq"]}
inference(inputs, params)

# Overriding configured task
inference = InferenceApi("bert-base-uncased", task="feature-extraction")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub.inference_api <span class="hljs-keyword">import</span> InferenceApi

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Mask-fill example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs=<span class="hljs-string">&quot;The goal of life is [MASK].&quot;</span>)
[{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;the goal of life is life.&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.10933292657136917</span>, <span class="hljs-string">&#x27;token&#x27;</span>: <span class="hljs-number">2166</span>, <span class="hljs-string">&#x27;token_str&#x27;</span>: <span class="hljs-string">&#x27;life&#x27;</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Question Answering example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;question&quot;</span>: <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;context&quot;</span>: <span class="hljs-string">&quot;My name is Clara and I live in Berkeley.&quot;</span>,
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs)
{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9326569437980652</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">11</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">16</span>, <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Clara&#x27;</span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Zero-shot example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;typeform/distilbert-base-uncased-mnli&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = <span class="hljs-string">&quot;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>params = {<span class="hljs-string">&quot;candidate_labels&quot;</span>: [<span class="hljs-string">&quot;refund&quot;</span>, <span class="hljs-string">&quot;legal&quot;</span>, <span class="hljs-string">&quot;faq&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>inference(inputs, params)
{<span class="hljs-string">&#x27;sequence&#x27;</span>: <span class="hljs-string">&#x27;Hi, I recently bought a device from your company but it is not working as advertised and I would like to get reimbursed!&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>: [<span class="hljs-string">&#x27;refund&#x27;</span>, <span class="hljs-string">&#x27;faq&#x27;</span>, <span class="hljs-string">&#x27;legal&#x27;</span>], <span class="hljs-string">&#x27;scores&#x27;</span>: [<span class="hljs-number">0.9378499388694763</span>, <span class="hljs-number">0.04914155602455139</span>, <span class="hljs-number">0.013008488342165947</span>]}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Overriding configured task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inference = InferenceApi(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, task=<span class="hljs-string">&quot;feature-extraction&quot;</span>)`}}),{c(){i=t("meta"),P=_(),c=t("h1"),u=t("a"),y=t("span"),J(d.$$.fragment),O=_(),A=t("span"),F=f("Inference API"),E=_(),l=t("p"),H=f("The "),k=t("code"),N=f("huggingface_hub"),T=f(" library allows users to programmatically access the Inference API. For more information about the Accelerated Inference API, please refer to the documentation "),j=t("a"),B=f("here"),D=f("."),C=_(),n=t("div"),J(b.$$.fragment),L=_(),w=t("p"),K=f("Client to configure requests and make calls to the HuggingFace Inference API."),Q=_(),$=t("p"),W=f("Example:"),Z=_(),J(x.$$.fragment),this.h()},l(s){const o=cs('[data-svelte="svelte-1phssyn"]',document.head);i=r(o,"META",{name:!0,content:!0}),o.forEach(a),P=I(s),c=r(s,"H1",{class:!0});var S=p(c);u=r(S,"A",{id:!0,class:!0,href:!0});var Y=p(u);y=r(Y,"SPAN",{});var ss=p(y);R(d.$$.fragment,ss),ss.forEach(a),Y.forEach(a),O=I(S),A=r(S,"SPAN",{});var es=p(A);F=m(es,"Inference API"),es.forEach(a),S.forEach(a),E=I(s),l=r(s,"P",{});var q=p(l);H=m(q,"The "),k=r(q,"CODE",{});var as=p(k);N=m(as,"huggingface_hub"),as.forEach(a),T=m(q," library allows users to programmatically access the Inference API. For more information about the Accelerated Inference API, please refer to the documentation "),j=r(q,"A",{href:!0,rel:!0});var ns=p(j);B=m(ns,"here"),ns.forEach(a),D=m(q,"."),q.forEach(a),C=I(s),n=r(s,"DIV",{class:!0});var h=p(n);R(b.$$.fragment,h),L=I(h),w=r(h,"P",{});var ts=p(w);K=m(ts,"Client to configure requests and make calls to the HuggingFace Inference API."),ts.forEach(a),Q=I(h),$=r(h,"P",{});var rs=p($);W=m(rs,"Example:"),rs.forEach(a),Z=I(h),R(x.$$.fragment,h),h.forEach(a),this.h()},h(){g(i,"name","hf:doc:metadata"),g(i,"content",JSON.stringify(ds)),g(u,"id","huggingface_hub.InferenceApi"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#huggingface_hub.InferenceApi"),g(c,"class","relative group"),g(j,"href","https://huggingface.co/docs/api-inference/index"),g(j,"rel","nofollow"),g(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,o){e(document.head,i),v(s,P,o),v(s,c,o),e(c,u),e(u,y),U(d,y,null),e(c,O),e(c,A),e(A,F),v(s,E,o),v(s,l,o),e(l,H),e(l,k),e(k,N),e(l,T),e(l,j),e(j,B),e(l,D),v(s,C,o),v(s,n,o),U(b,n,null),e(n,L),e(n,w),e(w,K),e(n,Q),e(n,$),e($,W),e(n,Z),U(x,n,null),M=!0},p:os,i(s){M||(V(d.$$.fragment,s),V(b.$$.fragment,s),V(x.$$.fragment,s),M=!0)},o(s){z(d.$$.fragment,s),z(b.$$.fragment,s),z(x.$$.fragment,s),M=!1},d(s){a(i),s&&a(P),s&&a(c),G(d),s&&a(E),s&&a(l),s&&a(C),s&&a(n),G(b),G(x)}}}const ds={local:"huggingface_hub.InferenceApi",title:"Inference API"};function js(X){return gs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends ls{constructor(i){super();ps(this,i,js,ms,is,{})}}export{qs as default,ds as metadata};
