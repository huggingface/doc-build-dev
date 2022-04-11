import{S as Xt,i as Wt,s as Ft,e as i,k as d,w as q,t as h,M as Qt,c as p,d as e,m as g,a as u,x as $,h as f,b as j,F as l,g as c,y as b,q as y,o as w,B as k,v as Vt,L as V}from"../chunks/vendor-7c454903.js";import{I as yt}from"../chunks/IconCopyLink-5457534b.js";import{I as Gt,M as Y,C as Z}from"../chunks/InferenceApi-143e589f.js";function Yt(_){let a,n;return a=new Z({props:{code:`import requests
model_id = "facebook/wav2vec2-base-960h"
API_URL = f"https://api-inference.huggingface.co/bulk/run/cpu/{model_id}"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
data = json.dumps(
    {
        "dataset_name": "ApiInferenceTest/asr_dummy",
        "dataset_config": "asr",
        "dataset_split": "test",
        "dataset_column": "file",
    }
)
response = requests.request("POST", API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn("jobid", data, f"Expected some job id, got {data}")
STATUS_URL = f"https://api-inference.huggingface.co/bulk/status/{data['jobid']}"
status = requests.request("GET", STATUS_URL, headers=headers)
# results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output
# dataset, accessible at https://huggingface.co/datasets/{bulk_name}
# status == {"status":{"active":1,"start_time":1627479091.0}}`,highlighted:`<span class="hljs-keyword">import</span> requests
model_id = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>
API_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">{model_id}</span>&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
data = json.dumps(
    {
        <span class="hljs-string">&quot;dataset_name&quot;</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
        <span class="hljs-string">&quot;dataset_config&quot;</span>: <span class="hljs-string">&quot;asr&quot;</span>,
        <span class="hljs-string">&quot;dataset_split&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>,
        <span class="hljs-string">&quot;dataset_column&quot;</span>: <span class="hljs-string">&quot;file&quot;</span>,
    }
)
response = requests.request(<span class="hljs-string">&quot;POST&quot;</span>, API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn(<span class="hljs-string">&quot;jobid&quot;</span>, data, <span class="hljs-string">f&quot;Expected some job id, got <span class="hljs-subst">{data}</span>&quot;</span>)
STATUS_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">{data[<span class="hljs-string">&#x27;jobid&#x27;</span>]}</span>&quot;</span>
status = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, STATUS_URL, headers=headers)
<span class="hljs-comment"># results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output</span>
<span class="hljs-comment"># dataset, accessible at https://huggingface.co/datasets/{bulk_name}</span>
<span class="hljs-comment"># status == {&quot;status&quot;:{&quot;active&quot;:1,&quot;start_time&quot;:1627479091.0}}</span>`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function Zt(_){let a,n;return a=new Y({props:{$$slots:{default:[Yt]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function sa(_){let a,n;return a=new Z({props:{code:`import fetch from "node-fetch";
const API_TOKEN = ({}).API_TOKEN;
const MODEL_ID = "facebook/wav2vec2-base-960h";
const url = \`https://api-inference.huggingface.co/bulk/run/cpu/$}{MODEL_ID}\`;
const headers = { Authorization: \`Bearer $}{API_TOKEN}\` };
const data = {
    dataset_name: "ApiInferenceTest/asr_dummy",
    dataset_config: "asr",
    dataset_split: "test",
    dataset_column: "file",
};
const params = {
    headers,
    method: "POST",
    body: JSON.stringify(data),
};
fetch(url, params).then((response) => {
    response.json().then((data) => {
        console.log(JSON.stringify(data));
        // {"jobid": "bulk-68079542", "bulk_name": "somename"}
        fetch(
            \`https://api-inference.huggingface.co/bulk/status/$}{data["jobid"]}\`,
            {
                headers,
            }
        ).then((response) => {
            response.json().then((status_data) => {
                console.log(JSON.stringify(status_data));
                // {"status": {"active": 1, "start_time": timestamp}}
            });
        });
    });
});`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">API_TOKEN</span> = process.<span class="hljs-property">env</span>.<span class="hljs-property">API_TOKEN</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">MODEL_ID</span> = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>;
<span class="hljs-keyword">const</span> url = <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">$}{MODEL_ID}</span>\`</span>;
<span class="hljs-keyword">const</span> headers = { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">$}{API_TOKEN}</span>\`</span> };
<span class="hljs-keyword">const</span> data = {
    <span class="hljs-attr">dataset_name</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
    <span class="hljs-attr">dataset_config</span>: <span class="hljs-string">&quot;asr&quot;</span>,
    <span class="hljs-attr">dataset_split</span>: <span class="hljs-string">&quot;test&quot;</span>,
    <span class="hljs-attr">dataset_column</span>: <span class="hljs-string">&quot;file&quot;</span>,
};
<span class="hljs-keyword">const</span> params = {
    headers,
    <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;POST&quot;</span>,
    <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data),
};
<span class="hljs-title function_">fetch</span>(url, params).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data));
        <span class="hljs-comment">// {&quot;jobid&quot;: &quot;bulk-68079542&quot;, &quot;bulk_name&quot;: &quot;somename&quot;}</span>
        <span class="hljs-title function_">fetch</span>(
            <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">$}{data[<span class="hljs-string">&quot;jobid&quot;</span>]}</span>\`</span>,
            {
                headers,
            }
        ).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
            response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">status_data</span>) =&gt;</span> {
                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(status_data));
                <span class="hljs-comment">// {&quot;status&quot;: {&quot;active&quot;: 1, &quot;start_time&quot;: timestamp}}</span>
            });
        });
    });
});`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function ta(_){let a,n;return a=new Y({props:{$$slots:{default:[sa]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function aa(_){let a,n;return a=new Z({props:{code:`curl -X POST -d '{"dataset_name": "ApiInferenceTest/asr_dummy", "dataset_config": "asr", "dataset_split": "test", "dataset_column": "file"}' https://api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H "Authorization: Bearer $}{API_TOKEN}"
# {"jobid": "bulk-68079542", "bulk_name": "somename"}
curl https://api-inference.huggingface.co/bulk/status/bulk-68079542`,highlighted:`curl -X <span class="hljs-keyword">POST</span> -<span class="hljs-keyword">d</span> &#x27;{<span class="hljs-string">&quot;dataset_name&quot;</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>, <span class="hljs-string">&quot;dataset_config&quot;</span>: <span class="hljs-string">&quot;asr&quot;</span>, <span class="hljs-string">&quot;dataset_split&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;dataset_column&quot;</span>: <span class="hljs-string">&quot;file&quot;</span>}&#x27; https:<span class="hljs-comment">//api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H &quot;Authorization: Bearer $}{API_TOKEN}&quot;</span>
# {<span class="hljs-string">&quot;jobid&quot;</span>: <span class="hljs-string">&quot;bulk-68079542&quot;</span>, <span class="hljs-string">&quot;bulk_name&quot;</span>: <span class="hljs-string">&quot;somename&quot;</span>}
curl https:<span class="hljs-comment">//api-inference.huggingface.co/bulk/status/bulk-68079542</span>`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function ea(_){let a,n;return a=new Y({props:{$$slots:{default:[aa]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function na(_){let a,n;return a=new Z({props:{code:`import requests
model_id = "facebook/wav2vec2-base-960h"
API_URL = f"https://api-inference.huggingface.co/bulk/run/cpu/{model_id}"
headers = {"Authorization": f"Bearer {API_TOKEN}"}
data = json.dumps(
    {
        "dataset_name": "ApiInferenceTest/asr_dummy",
        "dataset_config": "asr",
        "dataset_split": "test",
        "dataset_column": "file",
    }
)
response = requests.request("POST", API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn("jobid", data, f"Expected some job id, got {data}")
STATUS_URL = f"https://api-inference.huggingface.co/bulk/status/{data['jobid']}"
status = requests.request("GET", STATUS_URL, headers=headers)
# results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output
# dataset, accessible at https://huggingface.co/datasets/{bulk_name}
# status == {"status":{"active":1,"start_time":1627479091.0}}`,highlighted:`<span class="hljs-keyword">import</span> requests
model_id = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>
API_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">{model_id}</span>&quot;</span>
headers = {<span class="hljs-string">&quot;Authorization&quot;</span>: <span class="hljs-string">f&quot;Bearer <span class="hljs-subst">{API_TOKEN}</span>&quot;</span>}
data = json.dumps(
    {
        <span class="hljs-string">&quot;dataset_name&quot;</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
        <span class="hljs-string">&quot;dataset_config&quot;</span>: <span class="hljs-string">&quot;asr&quot;</span>,
        <span class="hljs-string">&quot;dataset_split&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>,
        <span class="hljs-string">&quot;dataset_column&quot;</span>: <span class="hljs-string">&quot;file&quot;</span>,
    }
)
response = requests.request(<span class="hljs-string">&quot;POST&quot;</span>, API_URL, headers=headers, data=data)
data = json.loads(response.content)
self.assertIn(<span class="hljs-string">&quot;jobid&quot;</span>, data, <span class="hljs-string">f&quot;Expected some job id, got <span class="hljs-subst">{data}</span>&quot;</span>)
STATUS_URL = <span class="hljs-string">f&quot;https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">{data[<span class="hljs-string">&#x27;jobid&#x27;</span>]}</span>&quot;</span>
status = requests.request(<span class="hljs-string">&quot;GET&quot;</span>, STATUS_URL, headers=headers)
<span class="hljs-comment"># results will contain a \`jobid\` to track the job, and \`bulk_name\` the name of the output</span>
<span class="hljs-comment"># dataset, accessible at https://huggingface.co/datasets/{bulk_name}</span>
<span class="hljs-comment"># status == {&quot;status&quot;:{&quot;active&quot;:1,&quot;start_time&quot;:1627479091.0}}</span>`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function la(_){let a,n;return a=new Y({props:{$$slots:{default:[na]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function oa(_){let a,n;return a=new Z({props:{code:`import fetch from "node-fetch";
const API_TOKEN = ({}).API_TOKEN;
const MODEL_ID = "facebook/wav2vec2-base-960h";
const url = \`https://api-inference.huggingface.co/bulk/run/cpu/$}{MODEL_ID}\`;
const headers = { Authorization: \`Bearer $}{API_TOKEN}\` };
const data = {
    dataset_name: "ApiInferenceTest/asr_dummy",
    dataset_config: "asr",
    dataset_split: "test",
    dataset_column: "file",
};
const params = {
    headers,
    method: "POST",
    body: JSON.stringify(data),
};
fetch(url, params).then((response) => {
    response.json().then((data) => {
        console.log(JSON.stringify(data));
        // {"jobid": "bulk-68079542", "bulk_name": "somename"}
        fetch(
            \`https://api-inference.huggingface.co/bulk/status/$}{data["jobid"]}\`,
            {
                headers,
            }
        ).then((response) => {
            response.json().then((status_data) => {
                console.log(JSON.stringify(status_data));
                // {"status": {"active": 1, "start_time": timestamp}}
            });
        });
    });
});`,highlighted:`<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;node-fetch&quot;</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">API_TOKEN</span> = process.<span class="hljs-property">env</span>.<span class="hljs-property">API_TOKEN</span>;
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">MODEL_ID</span> = <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>;
<span class="hljs-keyword">const</span> url = <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/run/cpu/<span class="hljs-subst">$}{MODEL_ID}</span>\`</span>;
<span class="hljs-keyword">const</span> headers = { <span class="hljs-title class_">Authorization</span>: <span class="hljs-string">\`Bearer <span class="hljs-subst">$}{API_TOKEN}</span>\`</span> };
<span class="hljs-keyword">const</span> data = {
    <span class="hljs-attr">dataset_name</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>,
    <span class="hljs-attr">dataset_config</span>: <span class="hljs-string">&quot;asr&quot;</span>,
    <span class="hljs-attr">dataset_split</span>: <span class="hljs-string">&quot;test&quot;</span>,
    <span class="hljs-attr">dataset_column</span>: <span class="hljs-string">&quot;file&quot;</span>,
};
<span class="hljs-keyword">const</span> params = {
    headers,
    <span class="hljs-attr">method</span>: <span class="hljs-string">&quot;POST&quot;</span>,
    <span class="hljs-attr">body</span>: <span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data),
};
<span class="hljs-title function_">fetch</span>(url, params).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
    response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(data));
        <span class="hljs-comment">// {&quot;jobid&quot;: &quot;bulk-68079542&quot;, &quot;bulk_name&quot;: &quot;somename&quot;}</span>
        <span class="hljs-title function_">fetch</span>(
            <span class="hljs-string">\`https://api-inference.huggingface.co/bulk/status/<span class="hljs-subst">$}{data[<span class="hljs-string">&quot;jobid&quot;</span>]}</span>\`</span>,
            {
                headers,
            }
        ).<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
            response.<span class="hljs-title function_">json</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">status_data</span>) =&gt;</span> {
                <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title class_">JSON</span>.<span class="hljs-title function_">stringify</span>(status_data));
                <span class="hljs-comment">// {&quot;status&quot;: {&quot;active&quot;: 1, &quot;start_time&quot;: timestamp}}</span>
            });
        });
    });
});`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function ra(_){let a,n;return a=new Y({props:{$$slots:{default:[oa]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function ia(_){let a,n;return a=new Z({props:{code:`curl -X POST -d '{"dataset_name": "ApiInferenceTest/asr_dummy", "dataset_config": "asr", "dataset_split": "test", "dataset_column": "file"}' https://api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H "Authorization: Bearer $}{API_TOKEN}"
# {"jobid": "bulk-68079542", "bulk_name": "somename"}
curl https://api-inference.huggingface.co/bulk/status/bulk-68079542`,highlighted:`curl -X <span class="hljs-keyword">POST</span> -<span class="hljs-keyword">d</span> &#x27;{<span class="hljs-string">&quot;dataset_name&quot;</span>: <span class="hljs-string">&quot;ApiInferenceTest/asr_dummy&quot;</span>, <span class="hljs-string">&quot;dataset_config&quot;</span>: <span class="hljs-string">&quot;asr&quot;</span>, <span class="hljs-string">&quot;dataset_split&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;dataset_column&quot;</span>: <span class="hljs-string">&quot;file&quot;</span>}&#x27; https:<span class="hljs-comment">//api-inference.huggingface.co/bulk/run/cpu/facebook/wav2vec2-base-960h -H &quot;Authorization: Bearer $}{API_TOKEN}&quot;</span>
# {<span class="hljs-string">&quot;jobid&quot;</span>: <span class="hljs-string">&quot;bulk-68079542&quot;</span>, <span class="hljs-string">&quot;bulk_name&quot;</span>: <span class="hljs-string">&quot;somename&quot;</span>}
curl https:<span class="hljs-comment">//api-inference.huggingface.co/bulk/status/bulk-68079542</span>`}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p:V,i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function pa(_){let a,n;return a=new Y({props:{$$slots:{default:[ia]},$$scope:{ctx:_}}}),{c(){q(a.$$.fragment)},l(s){$(a.$$.fragment,s)},m(s,o){b(a,s,o),n=!0},p(s,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:s}),a.$set(m)},i(s){n||(y(a.$$.fragment,s),n=!0)},o(s){w(a.$$.fragment,s),n=!1},d(s){k(a,s)}}}function ua(_){let a,n,s,o,m,K,Bs,ss,Ms,fs,C,Hs,ms,G,Js,ds,E,ts,Cs,Gs,as,Xs,gs,v,A,es,R,Ws,ns,Fs,_s,I,Qs,ls,Vs,Ys,js,X,Zs,qs,P,$s,W,st,bs,F,tt,ys,O,at,os,et,nt,ws,S,lt,rs,ot,rt,ks,N,is,it,pt,z,ut,ps,ct,ht,vs,T,L,us,B,ft,cs,mt,Ts,x,dt,M,gt,_t,Es,U,jt,H,qt,$t,As,Q,bt,Is,D,Ps;return K=new yt({}),R=new yt({}),P=new Gt({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[ea],js:[ta],python:[Zt]},$$scope:{ctx:_}}}),B=new yt({}),D=new Gt({props:{python:!0,js:!0,curl:!0,$$slots:{curl:[pa],js:[ra],python:[la]},$$scope:{ctx:_}}}),{c(){a=i("meta"),n=d(),s=i("h1"),o=i("a"),m=i("span"),q(K.$$.fragment),Bs=d(),ss=i("span"),Ms=h("Parallelism and batch jobs"),fs=d(),C=i("p"),Hs=h(`In order to get your answers as quickly as possible, you probably want
to run some kind of parallelism on your jobs.`),ms=d(),G=i("p"),Js=h("There are two options at your disposal for this."),ds=d(),E=i("ul"),ts=i("li"),Cs=h("The streaming option"),Gs=d(),as=i("li"),Xs=h("The dataset option"),gs=d(),v=i("h2"),A=i("a"),es=i("span"),q(R.$$.fragment),Ws=d(),ns=i("span"),Fs=h("Streaming"),_s=d(),I=i("p"),Qs=h(`In order to maximize the speed of inference, instead of running many
HTTP requests it will be more efficient to stream your data to the API.
This will require the use of websockets on your end. Internally we\u2019re
using a queue system where machines can variously pull work, seamlessly
using parallelism for you. `),ls=i("strong"),Vs=h(`This is meant as a batching mechanism and a
single stream should be open at any give time`),Ys=h(`. If multiple streams are
open, requests will go to either without any guarantee. This is intended
as it allows recovering from a stream cut. Simply reinitializing the
stream will recover results, everything that was sent is being processed
even if you are not connected anymore. So make sure you don\u2019t send item
multiple times other wise you will be billed multiple times.`),js=d(),X=i("p"),Zs=h("Here is a small example:"),qs=d(),q(P.$$.fragment),$s=d(),W=i("p"),st=h("The messages you need to send need to contain inputs keys."),bs=d(),F=i("p"),tt=h(`Optionnally you can specifiy id key that will be sent back
with the result. We try to maintain the ordering of results as you sent,
but it\u2019s better to be sure, the id key is there for that.`),ys=d(),O=i("p"),at=h(`Optionnally, you can specify parameters key that
corresponds to `),os=i("code"),et=h("detailed_parameters"),nt=h(` of
the pipeline you are using.`),ws=d(),S=i("p"),lt=h("The received messages will "),rs=i("em"),ot=h("always"),rt=h(" contain a type key."),ks=d(),N=i("ul"),is=i("li"),it=h(`status message: These messages will contain a
message key that will inform you about the current
status of the job`),pt=d(),z=i("li"),ut=h(`results message: These messages will contain the
actual results of the computation. id will contain the
id you have sent (or one will be generated automatically).
outputs will contain the result like it would be sent
by the HTTP endpoint. See `),ps=i("code"),ct=h("detailed_parameters"),ht=h(" for more information."),vs=d(),T=i("h2"),L=i("a"),us=i("span"),q(B.$$.fragment),ft=d(),cs=i("span"),mt=h("Dataset"),Ts=d(),x=i("p"),dt=h(`If you are running regulary against the same dataset to check
differences between models or drifts we recommend using a
`),M=i("a"),gt=h("dataset"),_t=h(" ."),Es=d(),U=i("p"),jt=h(`Or use any of the 2000 available datasets:
`),H=i("a"),qt=h("here"),$t=h("."),As=d(),Q=i("p"),bt=h(`The outputs of this method will automatically create a private dataset
on your account, and use git mechanisms to store versions of the various
outputs.`),Is=d(),q(D.$$.fragment),this.h()},l(t){const r=Qt('[data-svelte="svelte-1phssyn"]',document.head);a=p(r,"META",{name:!0,content:!0}),r.forEach(e),n=g(t),s=p(t,"H1",{class:!0});var J=u(s);o=p(J,"A",{id:!0,class:!0,href:!0});var hs=u(o);m=p(hs,"SPAN",{});var wt=u(m);$(K.$$.fragment,wt),wt.forEach(e),hs.forEach(e),Bs=g(J),ss=p(J,"SPAN",{});var kt=u(ss);Ms=f(kt,"Parallelism and batch jobs"),kt.forEach(e),J.forEach(e),fs=g(t),C=p(t,"P",{});var vt=u(C);Hs=f(vt,`In order to get your answers as quickly as possible, you probably want
to run some kind of parallelism on your jobs.`),vt.forEach(e),ms=g(t),G=p(t,"P",{});var Tt=u(G);Js=f(Tt,"There are two options at your disposal for this."),Tt.forEach(e),ds=g(t),E=p(t,"UL",{});var Os=u(E);ts=p(Os,"LI",{});var Et=u(ts);Cs=f(Et,"The streaming option"),Et.forEach(e),Gs=g(Os),as=p(Os,"LI",{});var At=u(as);Xs=f(At,"The dataset option"),At.forEach(e),Os.forEach(e),gs=g(t),v=p(t,"H2",{class:!0});var Ss=u(v);A=p(Ss,"A",{id:!0,class:!0,href:!0});var It=u(A);es=p(It,"SPAN",{});var Pt=u(es);$(R.$$.fragment,Pt),Pt.forEach(e),It.forEach(e),Ws=g(Ss),ns=p(Ss,"SPAN",{});var Ot=u(ns);Fs=f(Ot,"Streaming"),Ot.forEach(e),Ss.forEach(e),_s=g(t),I=p(t,"P",{});var Ns=u(I);Qs=f(Ns,`In order to maximize the speed of inference, instead of running many
HTTP requests it will be more efficient to stream your data to the API.
This will require the use of websockets on your end. Internally we\u2019re
using a queue system where machines can variously pull work, seamlessly
using parallelism for you. `),ls=p(Ns,"STRONG",{});var St=u(ls);Vs=f(St,`This is meant as a batching mechanism and a
single stream should be open at any give time`),St.forEach(e),Ys=f(Ns,`. If multiple streams are
open, requests will go to either without any guarantee. This is intended
as it allows recovering from a stream cut. Simply reinitializing the
stream will recover results, everything that was sent is being processed
even if you are not connected anymore. So make sure you don\u2019t send item
multiple times other wise you will be billed multiple times.`),Ns.forEach(e),js=g(t),X=p(t,"P",{});var Nt=u(X);Zs=f(Nt,"Here is a small example:"),Nt.forEach(e),qs=g(t),$(P.$$.fragment,t),$s=g(t),W=p(t,"P",{});var Lt=u(W);st=f(Lt,"The messages you need to send need to contain inputs keys."),Lt.forEach(e),bs=g(t),F=p(t,"P",{});var xt=u(F);tt=f(xt,`Optionnally you can specifiy id key that will be sent back
with the result. We try to maintain the ordering of results as you sent,
but it\u2019s better to be sure, the id key is there for that.`),xt.forEach(e),ys=g(t),O=p(t,"P",{});var Ls=u(O);at=f(Ls,`Optionnally, you can specify parameters key that
corresponds to `),os=p(Ls,"CODE",{});var Ut=u(os);et=f(Ut,"detailed_parameters"),Ut.forEach(e),nt=f(Ls,` of
the pipeline you are using.`),Ls.forEach(e),ws=g(t),S=p(t,"P",{});var xs=u(S);lt=f(xs,"The received messages will "),rs=p(xs,"EM",{});var Dt=u(rs);ot=f(Dt,"always"),Dt.forEach(e),rt=f(xs," contain a type key."),xs.forEach(e),ks=g(t),N=p(t,"UL",{});var Us=u(N);is=p(Us,"LI",{});var Kt=u(is);it=f(Kt,`status message: These messages will contain a
message key that will inform you about the current
status of the job`),Kt.forEach(e),pt=g(Us),z=p(Us,"LI",{});var Ds=u(z);ut=f(Ds,`results message: These messages will contain the
actual results of the computation. id will contain the
id you have sent (or one will be generated automatically).
outputs will contain the result like it would be sent
by the HTTP endpoint. See `),ps=p(Ds,"CODE",{});var Rt=u(ps);ct=f(Rt,"detailed_parameters"),Rt.forEach(e),ht=f(Ds," for more information."),Ds.forEach(e),Us.forEach(e),vs=g(t),T=p(t,"H2",{class:!0});var Ks=u(T);L=p(Ks,"A",{id:!0,class:!0,href:!0});var zt=u(L);us=p(zt,"SPAN",{});var Bt=u(us);$(B.$$.fragment,Bt),Bt.forEach(e),zt.forEach(e),ft=g(Ks),cs=p(Ks,"SPAN",{});var Mt=u(cs);mt=f(Mt,"Dataset"),Mt.forEach(e),Ks.forEach(e),Ts=g(t),x=p(t,"P",{});var Rs=u(x);dt=f(Rs,`If you are running regulary against the same dataset to check
differences between models or drifts we recommend using a
`),M=p(Rs,"A",{href:!0,rel:!0});var Ht=u(M);gt=f(Ht,"dataset"),Ht.forEach(e),_t=f(Rs," ."),Rs.forEach(e),Es=g(t),U=p(t,"P",{});var zs=u(U);jt=f(zs,`Or use any of the 2000 available datasets:
`),H=p(zs,"A",{href:!0,rel:!0});var Jt=u(H);qt=f(Jt,"here"),Jt.forEach(e),$t=f(zs,"."),zs.forEach(e),As=g(t),Q=p(t,"P",{});var Ct=u(Q);bt=f(Ct,`The outputs of this method will automatically create a private dataset
on your account, and use git mechanisms to store versions of the various
outputs.`),Ct.forEach(e),Is=g(t),$(D.$$.fragment,t),this.h()},h(){j(a,"name","hf:doc:metadata"),j(a,"content",JSON.stringify(ca)),j(o,"id","parallelism-and-batch-jobs"),j(o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(o,"href","#parallelism-and-batch-jobs"),j(s,"class","relative group"),j(A,"id","streaming"),j(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(A,"href","#streaming"),j(v,"class","relative group"),j(L,"id","dataset"),j(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(L,"href","#dataset"),j(T,"class","relative group"),j(M,"href","https://huggingface.co/docs/datasets/"),j(M,"rel","nofollow"),j(H,"href","https://huggingface.co/datasets"),j(H,"rel","nofollow")},m(t,r){l(document.head,a),c(t,n,r),c(t,s,r),l(s,o),l(o,m),b(K,m,null),l(s,Bs),l(s,ss),l(ss,Ms),c(t,fs,r),c(t,C,r),l(C,Hs),c(t,ms,r),c(t,G,r),l(G,Js),c(t,ds,r),c(t,E,r),l(E,ts),l(ts,Cs),l(E,Gs),l(E,as),l(as,Xs),c(t,gs,r),c(t,v,r),l(v,A),l(A,es),b(R,es,null),l(v,Ws),l(v,ns),l(ns,Fs),c(t,_s,r),c(t,I,r),l(I,Qs),l(I,ls),l(ls,Vs),l(I,Ys),c(t,js,r),c(t,X,r),l(X,Zs),c(t,qs,r),b(P,t,r),c(t,$s,r),c(t,W,r),l(W,st),c(t,bs,r),c(t,F,r),l(F,tt),c(t,ys,r),c(t,O,r),l(O,at),l(O,os),l(os,et),l(O,nt),c(t,ws,r),c(t,S,r),l(S,lt),l(S,rs),l(rs,ot),l(S,rt),c(t,ks,r),c(t,N,r),l(N,is),l(is,it),l(N,pt),l(N,z),l(z,ut),l(z,ps),l(ps,ct),l(z,ht),c(t,vs,r),c(t,T,r),l(T,L),l(L,us),b(B,us,null),l(T,ft),l(T,cs),l(cs,mt),c(t,Ts,r),c(t,x,r),l(x,dt),l(x,M),l(M,gt),l(x,_t),c(t,Es,r),c(t,U,r),l(U,jt),l(U,H),l(H,qt),l(U,$t),c(t,As,r),c(t,Q,r),l(Q,bt),c(t,Is,r),b(D,t,r),Ps=!0},p(t,[r]){const J={};r&2&&(J.$$scope={dirty:r,ctx:t}),P.$set(J);const hs={};r&2&&(hs.$$scope={dirty:r,ctx:t}),D.$set(hs)},i(t){Ps||(y(K.$$.fragment,t),y(R.$$.fragment,t),y(P.$$.fragment,t),y(B.$$.fragment,t),y(D.$$.fragment,t),Ps=!0)},o(t){w(K.$$.fragment,t),w(R.$$.fragment,t),w(P.$$.fragment,t),w(B.$$.fragment,t),w(D.$$.fragment,t),Ps=!1},d(t){e(a),t&&e(n),t&&e(s),k(K),t&&e(fs),t&&e(C),t&&e(ms),t&&e(G),t&&e(ds),t&&e(E),t&&e(gs),t&&e(v),k(R),t&&e(_s),t&&e(I),t&&e(js),t&&e(X),t&&e(qs),k(P,t),t&&e($s),t&&e(W),t&&e(bs),t&&e(F),t&&e(ys),t&&e(O),t&&e(ws),t&&e(S),t&&e(ks),t&&e(N),t&&e(vs),t&&e(T),k(B),t&&e(Ts),t&&e(x),t&&e(Es),t&&e(U),t&&e(As),t&&e(Q),t&&e(Is),k(D,t)}}}const ca={local:"parallelism-and-batch-jobs",sections:[{local:"streaming",title:"Streaming"},{local:"dataset",title:"Dataset"}],title:"Parallelism and batch jobs"};function ha(_){return Vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ga extends Xt{constructor(a){super();Wt(this,a,ha,ua,Ft,{})}}export{ga as default,ca as metadata};
